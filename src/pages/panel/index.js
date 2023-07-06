import "../../../assets/js/modulepreload-polyfill.0c213636.js";
import { j as n, d as e } from "../../../assets/js/jsx-runtime.92a69cb4.js";
const r = () =>
    n("div", {
        className: "container",
        children: n("h1", { children: "Dev Tools Panel" }),
    });
function t() {
    const o = document.querySelector("#app-container");
    if (!o) throw new Error("Can not find AppContainer");
    e(o).render(n(r, {}));
}
t();
