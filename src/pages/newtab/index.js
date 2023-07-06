import "../../../assets/js/modulepreload-polyfill.0c213636.js";
import {
    j as e,
    b as a,
    d as o,
} from "../../../assets/js/jsx-runtime.92a69cb4.js";
import { l as n } from "../../../assets/js/logo.e4a2c833.js";
const t = () =>
    e("div", {
        className: "App",
        children: a("header", {
            className: "App-header",
            children: [
                e("img", { src: n, className: "App-logo", alt: "logo" }),
                a("p", {
                    children: [
                        "Edit ",
                        e("code", { children: "src/pages/newtab/Newtab.tsx" }),
                        " and save to reload.",
                    ],
                }),
                e("a", {
                    className: "App-link",
                    href: "https://reactjs.org",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Learn React!",
                }),
                e("h6", {
                    children: "The of this paragraph is defined using SASS.",
                }),
            ],
        }),
    });
function s() {
    const r = document.querySelector("#app-container");
    if (!r) throw new Error("Can not find AppContainer");
    o(r).render(e(t, {}));
}
s();
