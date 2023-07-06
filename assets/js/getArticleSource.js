window.articleChecker = [];
window.allArticle = [];
if (!window.waitTill) {
    window.waitTill = (ms) => new Promise((r) => setTimeout(r, ms));
}
if (!window.retrievePostData) {
    window.retrievePostData = async function () {
        var trial = 1;
        var article = document.querySelectorAll("article");
        while (trial < 5 && article.length === 0) {
            trial++;
            article = document.querySelectorAll("article");
            window.waitTill(1000);
        }
        var articleData = [];
        for (const element of article) {
            var timeDom = element.querySelector("time");
            var textsDom = element.querySelectorAll(
                "[data-testid=tweetText] > *"
            );
            var likeDom = element.querySelector("[data-testid=like]");
            var retweetDom = element.querySelector("[data-testid=retweet]");
            var replyDom = element.querySelector("[data-testid=reply]");
            var spreadDom = element.querySelector(
                "div:has(>[data-testid=like])+div"
            );
            var imagesDom = element.querySelectorAll(
                "[data-testid=tweetPhoto] img"
            );
            var linksDom = element.querySelectorAll("a[aria-label*=日]");
            var engagementDom = element.querySelectorAll("a[href$=analytics]");
            var videosDom = element.querySelectorAll(
                "[data-testid=tweetPhoto] video"
            );
            var postType = "text";
            var image = [];
            var video = [];
            var content = "";
            if (textsDom) {
                for (var textDom of textsDom) {
                    if (textDom.tagName.toLowerCase() === "span") {
                        content = `${content}${textDom.innerText}`;
                    }
                    if (textDom.tagName.toLowerCase() === "img") {
                        content = `${content}${textDom.getAttribute("alt")}`;
                    }
                }
            }
            if (imagesDom) {
                if (imagesDom.length > 0) {
                    postType = "image";
                }
                for (var imageDom of imagesDom) {
                    image.push(imageDom.getAttribute("src"));
                }
            }
            if (videosDom) {
                if (videosDom.length > 0) {
                    postType = "video";
                }
                for (var videoDom of videosDom) {
                    video.push(videoDom.getAttribute("src"));
                }
            }
            var data = {
                time: timeDom ? timeDom.getAttribute("datetime") : "",
                content: content,
                like: likeDom ? likeDom.innerText : "",
                retweet: retweetDom ? retweetDom.innerText : "",
                reply: replyDom ? replyDom.innerText : "",
                spread: spreadDom ? spreadDom.innerText : "",
                image: image,
                video: video,
                link: linksDom ? linksDom.href : "",
                engagement: engagementDom ? engagementDom.innerText : "",
                postType,
            };
            articleData.push(data);
            var index = window.allArticle.findIndex(
                (item) => item.time === data.time
            );
            if (index <= -1) {
                window.allArticle.push(data);
            }
        }
        chrome.runtime.sendMessage({
            action: "getStatus",
            source: JSON.stringify({
                content: `${
                    window.allArticle.length
                } tweets have been scraped (${
                    articleData[articleData.length - 1].time
                })`,
                color: "#5ABD4E",
            }),
        });
        window.articleChecker = articleData;
    };
}
if (!window.scrollToBottom) {
    window.scrollToBottom = async (document, waitTime) => {
        var numberOfRepeat = 0;
        var preScrollHeight = 0;
        while (numberOfRepeat < 2) {
            if (preScrollHeight !== document.body.scrollHeight) {
                preScrollHeight = document.body.scrollHeight;
                window.retrievePostData();
                window.scrollTo(0, preScrollHeight);
            } else {
                numberOfRepeat++;
            }
            // Change to dynamic time;
            await window.waitTill(waitTime + "000");
        }
        return true;
    };
}

(async () => {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var waitTime = urlParams.get("wait");
    if (!waitTime) {
        waitTime = "1";
    }
    await window.scrollToBottom(document, waitTime);
    chrome.runtime.sendMessage({
        action: "getStatus",
        source: JSON.stringify({
            content: `All tweets have been scraped`,
            color: "#5ABD4E",
        }),
    });
    chrome.runtime.sendMessage({
        action: "getPost",
        source: JSON.stringify(window.allArticle),
    });
})();
