import { r as o, j as t, d as n } from "./jsx-runtime.92a69cb4.js";
function r() {
    return (
        o.exports.useEffect(() => {
            console.log("content view loaded");
        }, []),
        t("div", { className: "content-view" })
    );
}
const e = document.createElement("div");
e.id = "chrome-extension-boilerplate-react-vite-content-view-root";
document.body.append(e);
n(e).render(t(r, {}));
