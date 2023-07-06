if (!window.retrieveProfileData) {
  window.retrieveProfileData = function () {
    var scriptContent = document.querySelector(
      "script[data-testid=UserProfileSchema-test]"
    );
    if (scriptContent) {
      chrome.runtime.sendMessage({
        action: "getStatus",
        source: JSON.stringify({
          content: `User tweets has been scraped`,
          color: "#57C2CE",
        }),
      });
      return scriptContent.innerText;
    } else {
      return "{}";
    }
  };
}
(() => {
  var intervalHandShake = setInterval(() => {
    var scriptContent = document.querySelector(
      "script[data-testid=UserProfileSchema-test]"
    );
    if (scriptContent) {
      chrome.runtime.sendMessage({
        action: "getProfile",
        source: window.retrieveProfileData(),
      });
      clearInterval(intervalHandShake);
    }
  }, [1000]);
})();
