import "../../../assets/js/modulepreload-polyfill.0c213636.js";
import { j as o, d as t } from "../../../assets/js/jsx-runtime.92a69cb4.js";
const r = () =>
    o("div", { className: "OptionsContainer", children: "Options" });
function i() {
    const n = document.querySelector("#app-container");
    if (!n) throw new Error("Can not find AppContainer");
    t(n).render(o(r, {}));
}
i();
