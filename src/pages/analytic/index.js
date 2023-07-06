var $y = Object.defineProperty;
var Ty = (e, t, r) =>
    t in e
        ? $y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (e[t] = r);
var Kr = (e, t, r) => (Ty(e, typeof t != "symbol" ? t + "" : t, r), r);
import "../../../assets/js/modulepreload-polyfill.0c213636.js";
import {
    r as T,
    R as K,
    j as O,
    a as sd,
    b as L,
    F as Rr,
    c as Fn,
    g as Py,
    d as Ey,
} from "../../../assets/js/jsx-runtime.92a69cb4.js";
import {
    c as rr,
    l as Ke,
    F as My,
    a as ky,
    h as er,
    b as Cy,
    d as Iy,
    e as Ny,
    G as Dr,
    f as vi,
    g as yi,
    i as Ry,
    j as Dy,
    k as ud,
    m as Ly,
    n as jy,
    o as Fy,
} from "../../../assets/js/tailwind.eaf1239a.js";
const sa = typeof window > "u" || typeof document > "u";
let nt = sa ? T.exports.useEffect : T.exports.useLayoutEffect;
function _t(e) {
    let t = T.exports.useRef(e);
    return (
        nt(() => {
            t.current = e;
        }, [e]),
        t
    );
}
function ua(e) {
    typeof queueMicrotask == "function"
        ? queueMicrotask(e)
        : Promise.resolve()
              .then(e)
              .catch((t) =>
                  setTimeout(() => {
                      throw t;
                  })
              );
}
function Sn() {
    let e = [],
        t = [],
        r = {
            enqueue(n) {
                t.push(n);
            },
            addEventListener(n, i, a, o) {
                return (
                    n.addEventListener(i, a, o),
                    r.add(() => n.removeEventListener(i, a, o))
                );
            },
            requestAnimationFrame(...n) {
                let i = requestAnimationFrame(...n);
                return r.add(() => cancelAnimationFrame(i));
            },
            nextFrame(...n) {
                return r.requestAnimationFrame(() =>
                    r.requestAnimationFrame(...n)
                );
            },
            setTimeout(...n) {
                let i = setTimeout(...n);
                return r.add(() => clearTimeout(i));
            },
            microTask(...n) {
                let i = { current: !0 };
                return (
                    ua(() => {
                        i.current && n[0]();
                    }),
                    r.add(() => {
                        i.current = !1;
                    })
                );
            },
            add(n) {
                return (
                    e.push(n),
                    () => {
                        let i = e.indexOf(n);
                        if (i >= 0) {
                            let [a] = e.splice(i, 1);
                            a();
                        }
                    }
                );
            },
            dispose() {
                for (let n of e.splice(0)) n();
            },
            async workQueue() {
                for (let n of t.splice(0)) await n();
            },
        };
    return r;
}
function ld() {
    let [e] = T.exports.useState(Sn);
    return T.exports.useEffect(() => () => e.dispose(), [e]), e;
}
let ie = function (e) {
        let t = _t(e);
        return K.useCallback((...r) => t.current(...r), [t]);
    },
    Ja = { serverHandoffComplete: !1 };
function Lr() {
    let [e, t] = T.exports.useState(Ja.serverHandoffComplete);
    return (
        T.exports.useEffect(() => {
            e !== !0 && t(!0);
        }, [e]),
        T.exports.useEffect(() => {
            Ja.serverHandoffComplete === !1 && (Ja.serverHandoffComplete = !0);
        }, []),
        e
    );
}
var Sl;
let By = 0;
function Ol() {
    return ++By;
}
let Ze =
    (Sl = K.useId) != null
        ? Sl
        : function () {
              let e = Lr(),
                  [t, r] = K.useState(e ? Ol : null);
              return (
                  nt(() => {
                      t === null && r(Ol());
                  }, [t]),
                  t != null ? "" + t : void 0
              );
          };
function ye(e, t, ...r) {
    if (e in t) {
        let i = t[e];
        return typeof i == "function" ? i(...r) : i;
    }
    let n = new Error(
        `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
        )
            .map((i) => `"${i}"`)
            .join(", ")}.`
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ye), n);
}
function la(e) {
    return sa
        ? null
        : e instanceof Node
        ? e.ownerDocument
        : e != null && e.hasOwnProperty("current") && e.current instanceof Node
        ? e.current.ownerDocument
        : document;
}
let jo = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
]
    .map((e) => `${e}:not([tabindex='-1'])`)
    .join(",");
var st = ((e) => (
        (e[(e.First = 1)] = "First"),
        (e[(e.Previous = 2)] = "Previous"),
        (e[(e.Next = 4)] = "Next"),
        (e[(e.Last = 8)] = "Last"),
        (e[(e.WrapAround = 16)] = "WrapAround"),
        (e[(e.NoScroll = 32)] = "NoScroll"),
        e
    ))(st || {}),
    cd = ((e) => (
        (e[(e.Error = 0)] = "Error"),
        (e[(e.Overflow = 1)] = "Overflow"),
        (e[(e.Success = 2)] = "Success"),
        (e[(e.Underflow = 3)] = "Underflow"),
        e
    ))(cd || {}),
    Uy = ((e) => (
        (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
    ))(Uy || {});
function lu(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(jo));
}
var cu = ((e) => (
    (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(cu || {});
function fd(e, t = 0) {
    var r;
    return e === ((r = la(e)) == null ? void 0 : r.body)
        ? !1
        : ye(t, {
              [0]() {
                  return e.matches(jo);
              },
              [1]() {
                  let n = e;
                  for (; n !== null; ) {
                      if (n.matches(jo)) return !0;
                      n = n.parentElement;
                  }
                  return !1;
              },
          });
}
function br(e) {
    e == null || e.focus({ preventScroll: !0 });
}
let Hy = ["textarea", "input"].join(",");
function Wy(e) {
    var t, r;
    return (r =
        (t = e == null ? void 0 : e.matches) == null
            ? void 0
            : t.call(e, Hy)) != null
        ? r
        : !1;
}
function zy(e, t = (r) => r) {
    return e.slice().sort((r, n) => {
        let i = t(r),
            a = t(n);
        if (i === null || a === null) return 0;
        let o = i.compareDocumentPosition(a);
        return o & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : o & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
    });
}
function yt(e, t, r = !0, n = null) {
    let i = Array.isArray(e)
            ? e.length > 0
                ? e[0].ownerDocument
                : document
            : e.ownerDocument,
        a = Array.isArray(e) ? (r ? zy(e) : e) : lu(e);
    n = n != null ? n : i.activeElement;
    let o = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error(
                "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
        })(),
        s = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, a.indexOf(n)) - 1;
            if (t & 4) return Math.max(0, a.indexOf(n)) + 1;
            if (t & 8) return a.length - 1;
            throw new Error(
                "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
        })(),
        u = t & 32 ? { preventScroll: !0 } : {},
        l = 0,
        c = a.length,
        f;
    do {
        if (l >= c || l + c <= 0) return 0;
        let d = s + l;
        if (t & 16) d = (d + c) % c;
        else {
            if (d < 0) return 3;
            if (d >= c) return 1;
        }
        (f = a[d]), f == null || f.focus(u), (l += o);
    } while (f !== i.activeElement);
    return (
        t & 6 && Wy(f) && f.select(),
        f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"),
        2
    );
}
function Za(e, t, r) {
    let n = _t(t);
    T.exports.useEffect(() => {
        function i(a) {
            n.current(a);
        }
        return (
            document.addEventListener(e, i, r),
            () => document.removeEventListener(e, i, r)
        );
    }, [e, r]);
}
function hd(e, t, r = !0) {
    let n = T.exports.useRef(!1);
    T.exports.useEffect(() => {
        requestAnimationFrame(() => {
            n.current = r;
        });
    }, [r]);
    function i(o, s) {
        if (!n.current || o.defaultPrevented) return;
        let u = (function c(f) {
                return typeof f == "function"
                    ? c(f())
                    : Array.isArray(f) || f instanceof Set
                    ? f
                    : [f];
            })(e),
            l = s(o);
        if (l !== null && !!l.getRootNode().contains(l)) {
            for (let c of u) {
                if (c === null) continue;
                let f = c instanceof HTMLElement ? c : c.current;
                if (f != null && f.contains(l)) return;
            }
            return (
                !fd(l, cu.Loose) && l.tabIndex !== -1 && o.preventDefault(),
                t(o, l)
            );
        }
    }
    let a = T.exports.useRef(null);
    Za(
        "mousedown",
        (o) => {
            var s, u;
            n.current &&
                (a.current =
                    ((u = (s = o.composedPath) == null ? void 0 : s.call(o)) ==
                    null
                        ? void 0
                        : u[0]) || o.target);
        },
        !0
    ),
        Za(
            "click",
            (o) => {
                !a.current || (i(o, () => a.current), (a.current = null));
            },
            !0
        ),
        Za(
            "blur",
            (o) =>
                i(o, () =>
                    window.document.activeElement instanceof HTMLIFrameElement
                        ? window.document.activeElement
                        : null
                ),
            !0
        );
}
function Al(e) {
    var t;
    if (e.type) return e.type;
    let r = (t = e.as) != null ? t : "button";
    if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function Gy(e, t) {
    let [r, n] = T.exports.useState(() => Al(e));
    return (
        nt(() => {
            n(Al(e));
        }, [e.type, e.as]),
        nt(() => {
            r ||
                !t.current ||
                (t.current instanceof HTMLButtonElement &&
                    !t.current.hasAttribute("type") &&
                    n("button"));
        }, [r, t]),
        r
    );
}
let dd = Symbol();
function pd(e, t = !0) {
    return Object.assign(e, { [dd]: t });
}
function Ie(...e) {
    let t = T.exports.useRef(e);
    T.exports.useEffect(() => {
        t.current = e;
    }, [e]);
    let r = ie((n) => {
        for (let i of t.current)
            i != null && (typeof i == "function" ? i(n) : (i.current = n));
    });
    return e.every((n) => n == null || (n == null ? void 0 : n[dd]))
        ? void 0
        : r;
}
var jt = ((e) => (
        (e[(e.None = 0)] = "None"),
        (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
        (e[(e.Static = 2)] = "Static"),
        e
    ))(jt || {}),
    gt = ((e) => (
        (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
    ))(gt || {});
function Ne({
    ourProps: e,
    theirProps: t,
    slot: r,
    defaultTag: n,
    features: i,
    visible: a = !0,
    name: o,
}) {
    let s = vd(t, e);
    if (a) return Bn(s, r, n, o);
    let u = i != null ? i : 0;
    if (u & 2) {
        let { static: l = !1, ...c } = s;
        if (l) return Bn(c, r, n, o);
    }
    if (u & 1) {
        let { unmount: l = !0, ...c } = s;
        return ye(l ? 0 : 1, {
            [0]() {
                return null;
            },
            [1]() {
                return Bn(
                    { ...c, hidden: !0, style: { display: "none" } },
                    r,
                    n,
                    o
                );
            },
        });
    }
    return Bn(s, r, n, o);
}
function Bn(e, t = {}, r, n) {
    let {
            as: i = r,
            children: a,
            refName: o = "ref",
            ...s
        } = Qa(e, ["unmount", "static"]),
        u = e.ref !== void 0 ? { [o]: e.ref } : {},
        l = typeof a == "function" ? a(t) : a;
    s.className &&
        typeof s.className == "function" &&
        (s.className = s.className(t));
    let c = {};
    if (t) {
        let f = !1,
            d = [];
        for (let [y, p] of Object.entries(t))
            typeof p == "boolean" && (f = !0), p === !0 && d.push(y);
        f && (c["data-headlessui-state"] = d.join(" "));
    }
    if (i === T.exports.Fragment && Object.keys($l(s)).length > 0) {
        if (!T.exports.isValidElement(l) || (Array.isArray(l) && l.length > 1))
            throw new Error(
                [
                    'Passing props on "Fragment"!',
                    "",
                    `The current component <${n} /> is rendering a "Fragment".`,
                    "However we need to passthrough the following props:",
                    Object.keys(s).map((f) => `  - ${f}`).join(`
`),
                    "",
                    "You can apply a few solutions:",
                    [
                        'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                        "Render a single element as the child so that we can forward the props onto that element.",
                    ].map((f) => `  - ${f}`).join(`
`),
                ].join(`
`)
            );
        return T.exports.cloneElement(
            l,
            Object.assign(
                {},
                vd(l.props, $l(Qa(s, ["ref"]))),
                c,
                u,
                qy(l.ref, u.ref)
            )
        );
    }
    return T.exports.createElement(
        i,
        Object.assign(
            {},
            Qa(s, ["ref"]),
            i !== T.exports.Fragment && u,
            i !== T.exports.Fragment && c
        ),
        l
    );
}
function qy(...e) {
    return {
        ref: e.every((t) => t == null)
            ? void 0
            : (t) => {
                  for (let r of e)
                      r != null &&
                          (typeof r == "function" ? r(t) : (r.current = t));
              },
    };
}
function vd(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        r = {};
    for (let n of e)
        for (let i in n)
            i.startsWith("on") && typeof n[i] == "function"
                ? (r[i] != null || (r[i] = []), r[i].push(n[i]))
                : (t[i] = n[i]);
    if (t.disabled || t["aria-disabled"])
        return Object.assign(
            t,
            Object.fromEntries(Object.keys(r).map((n) => [n, void 0]))
        );
    for (let n in r)
        Object.assign(t, {
            [n](i, ...a) {
                let o = r[n];
                for (let s of o) {
                    if (
                        (i instanceof Event ||
                            (i == null ? void 0 : i.nativeEvent) instanceof
                                Event) &&
                        i.defaultPrevented
                    )
                        return;
                    s(i, ...a);
                }
            },
        });
    return t;
}
function $e(e) {
    var t;
    return Object.assign(T.exports.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name,
    });
}
function $l(e) {
    let t = Object.assign({}, e);
    for (let r in t) t[r] === void 0 && delete t[r];
    return t;
}
function Qa(e, t = []) {
    let r = Object.assign({}, e);
    for (let n of t) n in r && delete r[n];
    return r;
}
function fu(e) {
    let t = e.parentElement,
        r = null;
    for (; t && !(t instanceof HTMLFieldSetElement); )
        t instanceof HTMLLegendElement && (r = t), (t = t.parentElement);
    let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return n && Vy(r) ? !1 : n;
}
function Vy(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null; ) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling;
    }
    return !0;
}
let Yy = "div";
var nr = ((e) => (
    (e[(e.None = 1)] = "None"),
    (e[(e.Focusable = 2)] = "Focusable"),
    (e[(e.Hidden = 4)] = "Hidden"),
    e
))(nr || {});
let $r = $e(function (e, t) {
        let { features: r = 1, ...n } = e,
            i = {
                ref: t,
                "aria-hidden": (r & 2) === 2 ? !0 : void 0,
                style: {
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: "0",
                    ...((r & 4) === 4 && (r & 2) !== 2 && { display: "none" }),
                },
            };
        return Ne({
            ourProps: i,
            theirProps: n,
            slot: {},
            defaultTag: Yy,
            name: "Hidden",
        });
    }),
    hu = T.exports.createContext(null);
hu.displayName = "OpenClosedContext";
var it = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(it || {});
function On() {
    return T.exports.useContext(hu);
}
function yd({ value: e, children: t }) {
    return K.createElement(hu.Provider, { value: e }, t);
}
var vt = ((e) => (
    (e.Space = " "),
    (e.Enter = "Enter"),
    (e.Escape = "Escape"),
    (e.Backspace = "Backspace"),
    (e.Delete = "Delete"),
    (e.ArrowLeft = "ArrowLeft"),
    (e.ArrowUp = "ArrowUp"),
    (e.ArrowRight = "ArrowRight"),
    (e.ArrowDown = "ArrowDown"),
    (e.Home = "Home"),
    (e.End = "End"),
    (e.PageUp = "PageUp"),
    (e.PageDown = "PageDown"),
    (e.Tab = "Tab"),
    e
))(vt || {});
function gd(e, t) {
    let r = T.exports.useRef([]),
        n = ie(e);
    T.exports.useEffect(() => {
        let i = [...r.current];
        for (let [a, o] of t.entries())
            if (r.current[a] !== o) {
                let s = n(t, i);
                return (r.current = t), s;
            }
    }, [n, ...t]);
}
function Xy(e, t, r) {
    let n = _t(t);
    T.exports.useEffect(() => {
        function i(a) {
            n.current(a);
        }
        return (
            window.addEventListener(e, i, r),
            () => window.removeEventListener(e, i, r)
        );
    }, [e, r]);
}
var mt = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(mt || {});
function du() {
    let e = T.exports.useRef(0);
    return (
        Xy(
            "keydown",
            (t) => {
                t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
            },
            !0
        ),
        e
    );
}
function ca() {
    let e = T.exports.useRef(!1);
    return (
        nt(
            () => (
                (e.current = !0),
                () => {
                    e.current = !1;
                }
            ),
            []
        ),
        e
    );
}
function ur(...e) {
    return T.exports.useMemo(() => la(...e), [...e]);
}
function fa(e, t, r, n) {
    let i = _t(r);
    T.exports.useEffect(() => {
        e = e != null ? e : window;
        function a(o) {
            i.current(o);
        }
        return (
            e.addEventListener(t, a, n), () => e.removeEventListener(t, a, n)
        );
    }, [e, t, n]);
}
let Ky = "div";
var md = ((e) => (
    (e[(e.None = 1)] = "None"),
    (e[(e.InitialFocus = 2)] = "InitialFocus"),
    (e[(e.TabLock = 4)] = "TabLock"),
    (e[(e.FocusLock = 8)] = "FocusLock"),
    (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
    (e[(e.All = 30)] = "All"),
    e
))(md || {});
let Jr = Object.assign(
    $e(function (e, t) {
        let r = T.exports.useRef(null),
            n = Ie(r, t),
            { initialFocus: i, containers: a, features: o = 30, ...s } = e;
        Lr() || (o = 1);
        let u = ur(r);
        Jy({ ownerDocument: u }, Boolean(o & 16));
        let l = Zy(
            { ownerDocument: u, container: r, initialFocus: i },
            Boolean(o & 2)
        );
        Qy(
            {
                ownerDocument: u,
                container: r,
                containers: a,
                previousActiveElement: l,
            },
            Boolean(o & 8)
        );
        let c = du(),
            f = ie(() => {
                let y = r.current;
                !y ||
                    ye(c.current, {
                        [mt.Forwards]: () => yt(y, st.First),
                        [mt.Backwards]: () => yt(y, st.Last),
                    });
            }),
            d = { ref: n };
        return K.createElement(
            K.Fragment,
            null,
            Boolean(o & 4) &&
                O($r, {
                    as: "button",
                    type: "button",
                    onFocus: f,
                    features: nr.Focusable,
                }),
            Ne({
                ourProps: d,
                theirProps: s,
                defaultTag: Ky,
                name: "FocusTrap",
            }),
            Boolean(o & 4) &&
                O($r, {
                    as: "button",
                    type: "button",
                    onFocus: f,
                    features: nr.Focusable,
                })
        );
    }),
    { features: md }
);
function Jy({ ownerDocument: e }, t) {
    let r = T.exports.useRef(null);
    fa(
        e == null ? void 0 : e.defaultView,
        "focusout",
        (i) => {
            !t || r.current || (r.current = i.target);
        },
        !0
    ),
        gd(() => {
            t ||
                ((e == null ? void 0 : e.activeElement) ===
                    (e == null ? void 0 : e.body) && br(r.current),
                (r.current = null));
        }, [t]);
    let n = T.exports.useRef(!1);
    T.exports.useEffect(
        () => (
            (n.current = !1),
            () => {
                (n.current = !0),
                    ua(() => {
                        !n.current || (br(r.current), (r.current = null));
                    });
            }
        ),
        []
    );
}
function Zy({ ownerDocument: e, container: t, initialFocus: r }, n) {
    let i = T.exports.useRef(null),
        a = ca();
    return (
        gd(() => {
            if (!n) return;
            let o = t.current;
            !o ||
                ua(() => {
                    if (!a.current) return;
                    let s = e == null ? void 0 : e.activeElement;
                    if (r != null && r.current) {
                        if ((r == null ? void 0 : r.current) === s) {
                            i.current = s;
                            return;
                        }
                    } else if (o.contains(s)) {
                        i.current = s;
                        return;
                    }
                    r != null && r.current
                        ? br(r.current)
                        : yt(o, st.First) === cd.Error &&
                          console.warn(
                              "There are no focusable elements inside the <FocusTrap />"
                          ),
                        (i.current = e == null ? void 0 : e.activeElement);
                });
        }, [n]),
        i
    );
}
function Qy(
    { ownerDocument: e, container: t, containers: r, previousActiveElement: n },
    i
) {
    let a = ca();
    fa(
        e == null ? void 0 : e.defaultView,
        "focus",
        (o) => {
            if (!i || !a.current) return;
            let s = new Set(r == null ? void 0 : r.current);
            s.add(t);
            let u = n.current;
            if (!u) return;
            let l = o.target;
            l && l instanceof HTMLElement
                ? eg(s, l)
                    ? ((n.current = l), br(l))
                    : (o.preventDefault(), o.stopPropagation(), br(u))
                : br(n.current);
        },
        !0
    );
}
function eg(e, t) {
    var r;
    for (let n of e) if ((r = n.current) != null && r.contains(t)) return !0;
    return !1;
}
let hr = new Set(),
    Et = new Map();
function Tl(e) {
    e.setAttribute("aria-hidden", "true"), (e.inert = !0);
}
function Pl(e) {
    let t = Et.get(e);
    !t ||
        (t["aria-hidden"] === null
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", t["aria-hidden"]),
        (e.inert = t.inert));
}
function tg(e, t = !0) {
    nt(() => {
        if (!t || !e.current) return;
        let r = e.current,
            n = la(r);
        if (n) {
            hr.add(r);
            for (let i of Et.keys()) i.contains(r) && (Pl(i), Et.delete(i));
            return (
                n.querySelectorAll("body > *").forEach((i) => {
                    if (i instanceof HTMLElement) {
                        for (let a of hr) if (i.contains(a)) return;
                        hr.size === 1 &&
                            (Et.set(i, {
                                "aria-hidden": i.getAttribute("aria-hidden"),
                                inert: i.inert,
                            }),
                            Tl(i));
                    }
                }),
                () => {
                    if ((hr.delete(r), hr.size > 0))
                        n.querySelectorAll("body > *").forEach((i) => {
                            if (i instanceof HTMLElement && !Et.has(i)) {
                                for (let a of hr) if (i.contains(a)) return;
                                Et.set(i, {
                                    "aria-hidden":
                                        i.getAttribute("aria-hidden"),
                                    inert: i.inert,
                                }),
                                    Tl(i);
                            }
                        });
                    else for (let i of Et.keys()) Pl(i), Et.delete(i);
                }
            );
        }
    }, [t]);
}
let bd = T.exports.createContext(!1);
function rg() {
    return T.exports.useContext(bd);
}
function Fo(e) {
    return K.createElement(bd.Provider, { value: e.force }, e.children);
}
function ng(e) {
    let t = rg(),
        r = T.exports.useContext(xd),
        n = ur(e),
        [i, a] = T.exports.useState(() => {
            if ((!t && r !== null) || sa) return null;
            let o =
                n == null ? void 0 : n.getElementById("headlessui-portal-root");
            if (o) return o;
            if (n === null) return null;
            let s = n.createElement("div");
            return (
                s.setAttribute("id", "headlessui-portal-root"),
                n.body.appendChild(s)
            );
        });
    return (
        T.exports.useEffect(() => {
            i !== null &&
                ((n != null && n.body.contains(i)) ||
                    n == null ||
                    n.body.appendChild(i));
        }, [i, n]),
        T.exports.useEffect(() => {
            t || (r !== null && a(r.current));
        }, [r, a, t]),
        i
    );
}
let ig = T.exports.Fragment,
    ag = $e(function (e, t) {
        let r = e,
            n = T.exports.useRef(null),
            i = Ie(
                pd((c) => {
                    n.current = c;
                }),
                t
            ),
            a = ur(n),
            o = ng(n),
            [s] = T.exports.useState(() => {
                var c;
                return sa
                    ? null
                    : (c = a == null ? void 0 : a.createElement("div")) != null
                    ? c
                    : null;
            }),
            u = Lr(),
            l = T.exports.useRef(!1);
        return (
            nt(() => {
                if (((l.current = !1), !(!o || !s)))
                    return (
                        o.contains(s) ||
                            (s.setAttribute("data-headlessui-portal", ""),
                            o.appendChild(s)),
                        () => {
                            (l.current = !0),
                                ua(() => {
                                    var c;
                                    !l.current ||
                                        !o ||
                                        !s ||
                                        (o.removeChild(s),
                                        o.childNodes.length <= 0 &&
                                            ((c = o.parentElement) == null ||
                                                c.removeChild(o)));
                                });
                        }
                    );
            }, [o, s]),
            u
                ? !o || !s
                    ? null
                    : sd.exports.createPortal(
                          Ne({
                              ourProps: { ref: i },
                              theirProps: r,
                              defaultTag: ig,
                              name: "Portal",
                          }),
                          s
                      )
                : null
        );
    }),
    og = T.exports.Fragment,
    xd = T.exports.createContext(null),
    sg = $e(function (e, t) {
        let { target: r, ...n } = e,
            i = { ref: Ie(t) };
        return O(xd.Provider, {
            value: r,
            children: Ne({
                ourProps: i,
                theirProps: n,
                defaultTag: og,
                name: "Popover.Group",
            }),
        });
    }),
    Bo = Object.assign(ag, { Group: sg }),
    wd = T.exports.createContext(null);
function _d() {
    let e = T.exports.useContext(wd);
    if (e === null) {
        let t = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(t, _d), t);
    }
    return e;
}
function ug() {
    let [e, t] = T.exports.useState([]);
    return [
        e.length > 0 ? e.join(" ") : void 0,
        T.exports.useMemo(
            () =>
                function (r) {
                    let n = ie(
                            (a) => (
                                t((o) => [...o, a]),
                                () =>
                                    t((o) => {
                                        let s = o.slice(),
                                            u = s.indexOf(a);
                                        return u !== -1 && s.splice(u, 1), s;
                                    })
                            )
                        ),
                        i = T.exports.useMemo(
                            () => ({
                                register: n,
                                slot: r.slot,
                                name: r.name,
                                props: r.props,
                            }),
                            [n, r.slot, r.name, r.props]
                        );
                    return K.createElement(
                        wd.Provider,
                        { value: i },
                        r.children
                    );
                },
            [t]
        ),
    ];
}
let lg = "p",
    cg = $e(function (e, t) {
        let r = _d(),
            n = `headlessui-description-${Ze()}`,
            i = Ie(t);
        nt(() => r.register(n), [n, r.register]);
        let a = e,
            o = { ref: i, ...r.props, id: n };
        return Ne({
            ourProps: o,
            theirProps: a,
            slot: r.slot || {},
            defaultTag: lg,
            name: r.name || "Description",
        });
    }),
    pu = T.exports.createContext(() => {});
pu.displayName = "StackContext";
var Uo = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
    Uo || {}
);
function fg() {
    return T.exports.useContext(pu);
}
function hg({ children: e, onUpdate: t, type: r, element: n, enabled: i }) {
    let a = fg(),
        o = ie((...s) => {
            t == null || t(...s), a(...s);
        });
    return (
        nt(() => {
            let s = i === void 0 || i === !0;
            return (
                s && o(0, r, n),
                () => {
                    s && o(1, r, n);
                }
            );
        }, [o, r, n, i]),
        K.createElement(pu.Provider, { value: o }, e)
    );
}
function dg() {
    return (
        /iPhone/gi.test(window.navigator.platform) ||
        (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
    );
}
var pg = ((e) => (
        (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
    ))(pg || {}),
    vg = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(vg || {});
let yg = {
        [0](e, t) {
            return e.titleId === t.id ? e : { ...e, titleId: t.id };
        },
    },
    gi = T.exports.createContext(null);
gi.displayName = "DialogContext";
function An(e) {
    let t = T.exports.useContext(gi);
    if (t === null) {
        let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw (Error.captureStackTrace && Error.captureStackTrace(r, An), r);
    }
    return t;
}
function gg(e, t) {
    T.exports.useEffect(() => {
        var r;
        if (!t || !e) return;
        let n = Sn();
        function i(s, u, l) {
            let c = s.style.getPropertyValue(u);
            return (
                Object.assign(s.style, { [u]: l }),
                n.add(() => {
                    Object.assign(s.style, { [u]: c });
                })
            );
        }
        let a = e.documentElement,
            o =
                ((r = e.defaultView) != null ? r : window).innerWidth -
                a.clientWidth;
        if ((i(a, "overflow", "hidden"), o > 0)) {
            let s = a.clientWidth - a.offsetWidth,
                u = o - s;
            i(a, "paddingRight", `${u}px`);
        }
        if (dg()) {
            let s = window.pageYOffset;
            i(a, "position", "fixed"),
                i(a, "marginTop", `-${s}px`),
                i(a, "width", "100%"),
                n.add(() => window.scrollTo(0, s));
        }
        return n.dispose;
    }, [e, t]);
}
function mg(e, t) {
    return ye(t.type, yg, e, t);
}
let bg = "div",
    xg = jt.RenderStrategy | jt.Static,
    wg = $e(function (e, t) {
        let {
                open: r,
                onClose: n,
                initialFocus: i,
                __demoMode: a = !1,
                ...o
            } = e,
            [s, u] = T.exports.useState(0),
            l = On();
        r === void 0 &&
            l !== null &&
            (r = ye(l, { [it.Open]: !0, [it.Closed]: !1 }));
        let c = T.exports.useRef(new Set()),
            f = T.exports.useRef(null),
            d = Ie(f, t),
            y = T.exports.useRef(null),
            p = ur(f),
            h = e.hasOwnProperty("open") || l !== null,
            v = e.hasOwnProperty("onClose");
        if (!h && !v)
            throw new Error(
                "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
        if (!h)
            throw new Error(
                "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
        if (!v)
            throw new Error(
                "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
        if (typeof r != "boolean")
            throw new Error(
                `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`
            );
        if (typeof n != "function")
            throw new Error(
                `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`
            );
        let g = r ? 0 : 1,
            [_, b] = T.exports.useReducer(mg, {
                titleId: null,
                descriptionId: null,
                panelRef: T.exports.createRef(),
            }),
            m = ie(() => n(!1)),
            x = ie((C) => b({ type: 0, id: C })),
            w = Lr() ? (a ? !1 : g === 0) : !1,
            S = s > 1,
            A = T.exports.useContext(gi) !== null,
            $ = S ? "parent" : "leaf";
        tg(f, S ? w : !1),
            hd(
                () => {
                    var C, B;
                    return [
                        ...Array.from(
                            (C =
                                p == null
                                    ? void 0
                                    : p.querySelectorAll(
                                          "body > *, [data-headlessui-portal]"
                                      )) != null
                                ? C
                                : []
                        ).filter(
                            (j) =>
                                !(
                                    !(j instanceof HTMLElement) ||
                                    j.contains(y.current) ||
                                    (_.panelRef.current &&
                                        j.contains(_.panelRef.current))
                                )
                        ),
                        (B = _.panelRef.current) != null ? B : f.current,
                    ];
                },
                m,
                w && !S
            ),
            fa(p == null ? void 0 : p.defaultView, "keydown", (C) => {
                C.defaultPrevented ||
                    (C.key === vt.Escape &&
                        g === 0 &&
                        (S || (C.preventDefault(), C.stopPropagation(), m())));
            }),
            gg(p, g === 0 && !A),
            T.exports.useEffect(() => {
                if (g !== 0 || !f.current) return;
                let C = new IntersectionObserver((B) => {
                    for (let j of B)
                        j.boundingClientRect.x === 0 &&
                            j.boundingClientRect.y === 0 &&
                            j.boundingClientRect.width === 0 &&
                            j.boundingClientRect.height === 0 &&
                            m();
                });
                return C.observe(f.current), () => C.disconnect();
            }, [g, f, m]);
        let [E, P] = ug(),
            M = `headlessui-dialog-${Ze()}`,
            k = T.exports.useMemo(
                () => [{ dialogState: g, close: m, setTitleId: x }, _],
                [g, _, m, x]
            ),
            I = T.exports.useMemo(() => ({ open: g === 0 }), [g]),
            R = {
                ref: d,
                id: M,
                role: "dialog",
                "aria-modal": g === 0 ? !0 : void 0,
                "aria-labelledby": _.titleId,
                "aria-describedby": E,
            };
        return K.createElement(
            hg,
            {
                type: "Dialog",
                enabled: g === 0,
                element: f,
                onUpdate: ie((C, B, j) => {
                    B === "Dialog" &&
                        ye(C, {
                            [Uo.Add]() {
                                c.current.add(j), u((H) => H + 1);
                            },
                            [Uo.Remove]() {
                                c.current.add(j), u((H) => H - 1);
                            },
                        });
                }),
            },
            O(Fo, {
                force: !0,
                children: O(Bo, {
                    children: O(gi.Provider, {
                        value: k,
                        children: O(Bo.Group, {
                            target: f,
                            children: O(Fo, {
                                force: !1,
                                children: O(P, {
                                    slot: I,
                                    name: "Dialog.Description",
                                    children: O(Jr, {
                                        initialFocus: i,
                                        containers: c,
                                        features: w
                                            ? ye($, {
                                                  parent: Jr.features
                                                      .RestoreFocus,
                                                  leaf:
                                                      Jr.features.All &
                                                      ~Jr.features.FocusLock,
                                              })
                                            : Jr.features.None,
                                        children: Ne({
                                            ourProps: R,
                                            theirProps: o,
                                            slot: I,
                                            defaultTag: bg,
                                            features: xg,
                                            visible: g === 0,
                                            name: "Dialog",
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                }),
            }),
            O($r, { features: nr.Hidden, ref: y })
        );
    }),
    _g = "div",
    Sg = $e(function (e, t) {
        let [{ dialogState: r, close: n }] = An("Dialog.Overlay"),
            i = Ie(t),
            a = `headlessui-dialog-overlay-${Ze()}`,
            o = ie((u) => {
                if (u.target === u.currentTarget) {
                    if (fu(u.currentTarget)) return u.preventDefault();
                    u.preventDefault(), u.stopPropagation(), n();
                }
            }),
            s = T.exports.useMemo(() => ({ open: r === 0 }), [r]);
        return Ne({
            ourProps: { ref: i, id: a, "aria-hidden": !0, onClick: o },
            theirProps: e,
            slot: s,
            defaultTag: _g,
            name: "Dialog.Overlay",
        });
    }),
    Og = "div",
    Ag = $e(function (e, t) {
        let [{ dialogState: r }, n] = An("Dialog.Backdrop"),
            i = Ie(t),
            a = `headlessui-dialog-backdrop-${Ze()}`;
        T.exports.useEffect(() => {
            if (n.panelRef.current === null)
                throw new Error(
                    "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
                );
        }, [n.panelRef]);
        let o = T.exports.useMemo(() => ({ open: r === 0 }), [r]);
        return O(Fo, {
            force: !0,
            children: O(Bo, {
                children: Ne({
                    ourProps: { ref: i, id: a, "aria-hidden": !0 },
                    theirProps: e,
                    slot: o,
                    defaultTag: Og,
                    name: "Dialog.Backdrop",
                }),
            }),
        });
    }),
    $g = "div",
    Tg = $e(function (e, t) {
        let [{ dialogState: r }, n] = An("Dialog.Panel"),
            i = Ie(t, n.panelRef),
            a = `headlessui-dialog-panel-${Ze()}`,
            o = T.exports.useMemo(() => ({ open: r === 0 }), [r]),
            s = ie((u) => {
                u.stopPropagation();
            });
        return Ne({
            ourProps: { ref: i, id: a, onClick: s },
            theirProps: e,
            slot: o,
            defaultTag: $g,
            name: "Dialog.Panel",
        });
    }),
    Pg = "h2",
    Eg = $e(function (e, t) {
        let [{ dialogState: r, setTitleId: n }] = An("Dialog.Title"),
            i = `headlessui-dialog-title-${Ze()}`,
            a = Ie(t);
        T.exports.useEffect(() => (n(i), () => n(null)), [i, n]);
        let o = T.exports.useMemo(() => ({ open: r === 0 }), [r]);
        return Ne({
            ourProps: { ref: a, id: i },
            theirProps: e,
            slot: o,
            defaultTag: Pg,
            name: "Dialog.Title",
        });
    }),
    El = Object.assign(wg, {
        Backdrop: Ag,
        Panel: Tg,
        Overlay: Sg,
        Title: Eg,
        Description: cg,
    });
var Mg = ((e) => (
        (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
    ))(Mg || {}),
    kg = ((e) => (
        (e[(e.TogglePopover = 0)] = "TogglePopover"),
        (e[(e.ClosePopover = 1)] = "ClosePopover"),
        (e[(e.SetButton = 2)] = "SetButton"),
        (e[(e.SetButtonId = 3)] = "SetButtonId"),
        (e[(e.SetPanel = 4)] = "SetPanel"),
        (e[(e.SetPanelId = 5)] = "SetPanelId"),
        e
    ))(kg || {});
let Cg = {
        [0]: (e) => ({
            ...e,
            popoverState: ye(e.popoverState, { [0]: 1, [1]: 0 }),
        }),
        [1](e) {
            return e.popoverState === 1 ? e : { ...e, popoverState: 1 };
        },
        [2](e, t) {
            return e.button === t.button ? e : { ...e, button: t.button };
        },
        [3](e, t) {
            return e.buttonId === t.buttonId
                ? e
                : { ...e, buttonId: t.buttonId };
        },
        [4](e, t) {
            return e.panel === t.panel ? e : { ...e, panel: t.panel };
        },
        [5](e, t) {
            return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
        },
    },
    vu = T.exports.createContext(null);
vu.displayName = "PopoverContext";
function ha(e) {
    let t = T.exports.useContext(vu);
    if (t === null) {
        let r = new Error(
            `<${e} /> is missing a parent <Popover /> component.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(r, ha), r);
    }
    return t;
}
let yu = T.exports.createContext(null);
yu.displayName = "PopoverAPIContext";
function gu(e) {
    let t = T.exports.useContext(yu);
    if (t === null) {
        let r = new Error(
            `<${e} /> is missing a parent <Popover /> component.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(r, gu), r);
    }
    return t;
}
let mu = T.exports.createContext(null);
mu.displayName = "PopoverGroupContext";
function Sd() {
    return T.exports.useContext(mu);
}
let bu = T.exports.createContext(null);
bu.displayName = "PopoverPanelContext";
function Ig() {
    return T.exports.useContext(bu);
}
function Ng(e, t) {
    return ye(t.type, Cg, e, t);
}
let Rg = "div",
    Dg = $e(function (e, t) {
        var r;
        let n = `headlessui-popover-button-${Ze()}`,
            i = `headlessui-popover-panel-${Ze()}`,
            a = T.exports.useRef(null),
            o = Ie(
                t,
                pd(($) => {
                    a.current = $;
                })
            ),
            s = T.exports.useReducer(Ng, {
                popoverState: 1,
                button: null,
                buttonId: n,
                panel: null,
                panelId: i,
                beforePanelSentinel: T.exports.createRef(),
                afterPanelSentinel: T.exports.createRef(),
            }),
            [
                {
                    popoverState: u,
                    button: l,
                    panel: c,
                    beforePanelSentinel: f,
                    afterPanelSentinel: d,
                },
                y,
            ] = s,
            p = ur((r = a.current) != null ? r : l);
        T.exports.useEffect(() => y({ type: 3, buttonId: n }), [n, y]),
            T.exports.useEffect(() => y({ type: 5, panelId: i }), [i, y]);
        let h = T.exports.useMemo(() => {
                if (!l || !c) return !1;
                for (let R of document.querySelectorAll("body > *"))
                    if (
                        Number(R == null ? void 0 : R.contains(l)) ^
                        Number(R == null ? void 0 : R.contains(c))
                    )
                        return !0;
                let $ = lu(),
                    E = $.indexOf(l),
                    P = (E + $.length - 1) % $.length,
                    M = (E + 1) % $.length,
                    k = $[P],
                    I = $[M];
                return !c.contains(k) && !c.contains(I);
            }, [l, c]),
            v = T.exports.useMemo(
                () => ({
                    buttonId: n,
                    panelId: i,
                    close: () => y({ type: 1 }),
                }),
                [n, i, y]
            ),
            g = Sd(),
            _ = g == null ? void 0 : g.registerPopover,
            b = ie(() => {
                var $;
                return ($ =
                    g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null
                    ? $
                    : (p == null ? void 0 : p.activeElement) &&
                          ((l == null ? void 0 : l.contains(p.activeElement)) ||
                              (c == null
                                  ? void 0
                                  : c.contains(p.activeElement)));
            });
        T.exports.useEffect(() => (_ == null ? void 0 : _(v)), [_, v]),
            fa(
                p == null ? void 0 : p.defaultView,
                "focus",
                ($) => {
                    var E, P, M, k;
                    u === 0 &&
                        (b() ||
                            !l ||
                            !c ||
                            ((P =
                                (E = f.current) == null
                                    ? void 0
                                    : E.contains) != null &&
                                P.call(E, $.target)) ||
                            ((k =
                                (M = d.current) == null
                                    ? void 0
                                    : M.contains) != null &&
                                k.call(M, $.target)) ||
                            y({ type: 1 }));
                },
                !0
            ),
            hd(
                [l, c],
                ($, E) => {
                    y({ type: 1 }),
                        fd(E, cu.Loose) ||
                            ($.preventDefault(), l == null || l.focus());
                },
                u === 0
            );
        let m = ie(($) => {
                y({ type: 1 });
                let E = (() =>
                    $
                        ? $ instanceof HTMLElement
                            ? $
                            : "current" in $ && $.current instanceof HTMLElement
                            ? $.current
                            : l
                        : l)();
                E == null || E.focus();
            }),
            x = T.exports.useMemo(() => ({ close: m, isPortalled: h }), [m, h]),
            w = T.exports.useMemo(() => ({ open: u === 0, close: m }), [u, m]),
            S = e,
            A = { ref: o };
        return K.createElement(
            vu.Provider,
            { value: s },
            K.createElement(
                yu.Provider,
                { value: x },
                K.createElement(
                    yd,
                    { value: ye(u, { [0]: it.Open, [1]: it.Closed }) },
                    Ne({
                        ourProps: A,
                        theirProps: S,
                        slot: w,
                        defaultTag: Rg,
                        name: "Popover",
                    })
                )
            )
        );
    }),
    Lg = "button",
    jg = $e(function (e, t) {
        let [r, n] = ha("Popover.Button"),
            { isPortalled: i } = gu("Popover.Button"),
            a = T.exports.useRef(null),
            o = `headlessui-focus-sentinel-${Ze()}`,
            s = Sd(),
            u = s == null ? void 0 : s.closeOthers,
            l = Ig(),
            c = l === null ? !1 : l === r.panelId,
            f = Ie(a, t, c ? null : ($) => $ && n({ type: 2, button: $ })),
            d = Ie(a, t),
            y = ur(a),
            p = ie(($) => {
                var E, P, M;
                if (c) {
                    if (r.popoverState === 1) return;
                    switch ($.key) {
                        case vt.Space:
                        case vt.Enter:
                            $.preventDefault(),
                                (P = (E = $.target).click) == null || P.call(E),
                                n({ type: 1 }),
                                (M = r.button) == null || M.focus();
                            break;
                    }
                } else
                    switch ($.key) {
                        case vt.Space:
                        case vt.Enter:
                            $.preventDefault(),
                                $.stopPropagation(),
                                r.popoverState === 1 &&
                                    (u == null || u(r.buttonId)),
                                n({ type: 0 });
                            break;
                        case vt.Escape:
                            if (r.popoverState !== 0)
                                return u == null ? void 0 : u(r.buttonId);
                            if (
                                !a.current ||
                                ((y == null ? void 0 : y.activeElement) &&
                                    !a.current.contains(y.activeElement))
                            )
                                return;
                            $.preventDefault(),
                                $.stopPropagation(),
                                n({ type: 1 });
                            break;
                    }
            }),
            h = ie(($) => {
                c || ($.key === vt.Space && $.preventDefault());
            }),
            v = ie(($) => {
                var E, P;
                fu($.currentTarget) ||
                    e.disabled ||
                    (c
                        ? (n({ type: 1 }), (E = r.button) == null || E.focus())
                        : ($.preventDefault(),
                          $.stopPropagation(),
                          r.popoverState === 1 && (u == null || u(r.buttonId)),
                          n({ type: 0 }),
                          (P = r.button) == null || P.focus()));
            }),
            g = ie(($) => {
                $.preventDefault(), $.stopPropagation();
            }),
            _ = r.popoverState === 0,
            b = T.exports.useMemo(() => ({ open: _ }), [_]),
            m = Gy(e, a),
            x = e,
            w = c
                ? { ref: d, type: m, onKeyDown: p, onClick: v }
                : {
                      ref: f,
                      id: r.buttonId,
                      type: m,
                      "aria-expanded": e.disabled
                          ? void 0
                          : r.popoverState === 0,
                      "aria-controls": r.panel ? r.panelId : void 0,
                      onKeyDown: p,
                      onKeyUp: h,
                      onClick: v,
                      onMouseDown: g,
                  },
            S = du(),
            A = ie(() => {
                let $ = r.panel;
                if (!$) return;
                function E() {
                    ye(S.current, {
                        [mt.Forwards]: () => yt($, st.First),
                        [mt.Backwards]: () => yt($, st.Last),
                    });
                }
                E();
            });
        return L(Rr, {
            children: [
                Ne({
                    ourProps: w,
                    theirProps: x,
                    slot: b,
                    defaultTag: Lg,
                    name: "Popover.Button",
                }),
                _ &&
                    !c &&
                    i &&
                    O($r, {
                        id: o,
                        features: nr.Focusable,
                        as: "button",
                        type: "button",
                        onFocus: A,
                    }),
            ],
        });
    }),
    Fg = "div",
    Bg = jt.RenderStrategy | jt.Static,
    Ug = $e(function (e, t) {
        let [{ popoverState: r }, n] = ha("Popover.Overlay"),
            i = Ie(t),
            a = `headlessui-popover-overlay-${Ze()}`,
            o = On(),
            s = (() => (o !== null ? o === it.Open : r === 0))(),
            u = ie((c) => {
                if (fu(c.currentTarget)) return c.preventDefault();
                n({ type: 1 });
            }),
            l = T.exports.useMemo(() => ({ open: r === 0 }), [r]);
        return Ne({
            ourProps: { ref: i, id: a, "aria-hidden": !0, onClick: u },
            theirProps: e,
            slot: l,
            defaultTag: Fg,
            features: Bg,
            visible: s,
            name: "Popover.Overlay",
        });
    }),
    Hg = "div",
    Wg = jt.RenderStrategy | jt.Static,
    zg = $e(function (e, t) {
        let { focus: r = !1, ...n } = e,
            [i, a] = ha("Popover.Panel"),
            { close: o, isPortalled: s } = gu("Popover.Panel"),
            u = `headlessui-focus-sentinel-before-${Ze()}`,
            l = `headlessui-focus-sentinel-after-${Ze()}`,
            c = T.exports.useRef(null),
            f = Ie(c, t, (x) => {
                a({ type: 4, panel: x });
            }),
            d = ur(c),
            y = On(),
            p = (() => (y !== null ? y === it.Open : i.popoverState === 0))(),
            h = ie((x) => {
                var w;
                switch (x.key) {
                    case vt.Escape:
                        if (
                            i.popoverState !== 0 ||
                            !c.current ||
                            ((d == null ? void 0 : d.activeElement) &&
                                !c.current.contains(d.activeElement))
                        )
                            return;
                        x.preventDefault(),
                            x.stopPropagation(),
                            a({ type: 1 }),
                            (w = i.button) == null || w.focus();
                        break;
                }
            });
        T.exports.useEffect(() => {
            var x;
            e.static ||
                (i.popoverState === 1 &&
                    ((x = e.unmount) != null ? x : !0) &&
                    a({ type: 4, panel: null }));
        }, [i.popoverState, e.unmount, e.static, a]),
            T.exports.useEffect(() => {
                if (!r || i.popoverState !== 0 || !c.current) return;
                let x = d == null ? void 0 : d.activeElement;
                c.current.contains(x) || yt(c.current, st.First);
            }, [r, c, i.popoverState]);
        let v = T.exports.useMemo(
                () => ({ open: i.popoverState === 0, close: o }),
                [i, o]
            ),
            g = {
                ref: f,
                id: i.panelId,
                onKeyDown: h,
                onBlur:
                    r && i.popoverState === 0
                        ? (x) => {
                              var w, S, A, $, E;
                              let P = x.relatedTarget;
                              !P ||
                                  !c.current ||
                                  ((w = c.current) != null && w.contains(P)) ||
                                  (a({ type: 1 }),
                                  (((A =
                                      (S = i.beforePanelSentinel.current) ==
                                      null
                                          ? void 0
                                          : S.contains) == null
                                      ? void 0
                                      : A.call(S, P)) ||
                                      ((E =
                                          ($ = i.afterPanelSentinel.current) ==
                                          null
                                              ? void 0
                                              : $.contains) == null
                                          ? void 0
                                          : E.call($, P))) &&
                                      P.focus({ preventScroll: !0 }));
                          }
                        : void 0,
                tabIndex: -1,
            },
            _ = du(),
            b = ie(() => {
                let x = c.current;
                if (!x) return;
                function w() {
                    ye(_.current, {
                        [mt.Forwards]: () => {
                            yt(x, st.First);
                        },
                        [mt.Backwards]: () => {
                            var S;
                            (S = i.button) == null ||
                                S.focus({ preventScroll: !0 });
                        },
                    });
                }
                w();
            }),
            m = ie(() => {
                let x = c.current;
                if (!x) return;
                function w() {
                    ye(_.current, {
                        [mt.Forwards]: () => {
                            var S, A, $;
                            if (!i.button) return;
                            let E = lu(),
                                P = E.indexOf(i.button),
                                M = E.slice(0, P + 1),
                                k = [...E.slice(P + 1), ...M];
                            for (let I of k.slice())
                                if (
                                    ((A =
                                        (S = I == null ? void 0 : I.id) == null
                                            ? void 0
                                            : S.startsWith) == null
                                        ? void 0
                                        : A.call(
                                              S,
                                              "headlessui-focus-sentinel-"
                                          )) ||
                                    (($ = i.panel) == null
                                        ? void 0
                                        : $.contains(I))
                                ) {
                                    let R = k.indexOf(I);
                                    R !== -1 && k.splice(R, 1);
                                }
                            yt(k, st.First, !1);
                        },
                        [mt.Backwards]: () => yt(x, st.Last),
                    });
                }
                w();
            });
        return K.createElement(
            bu.Provider,
            { value: i.panelId },
            p &&
                s &&
                O($r, {
                    id: u,
                    ref: i.beforePanelSentinel,
                    features: nr.Focusable,
                    as: "button",
                    type: "button",
                    onFocus: b,
                }),
            Ne({
                ourProps: g,
                theirProps: n,
                slot: v,
                defaultTag: Hg,
                features: Wg,
                visible: p,
                name: "Popover.Panel",
            }),
            p &&
                s &&
                O($r, {
                    id: l,
                    ref: i.afterPanelSentinel,
                    features: nr.Focusable,
                    as: "button",
                    type: "button",
                    onFocus: m,
                })
        );
    }),
    Gg = "div",
    qg = $e(function (e, t) {
        let r = T.exports.useRef(null),
            n = Ie(r, t),
            [i, a] = T.exports.useState([]),
            o = ie((p) => {
                a((h) => {
                    let v = h.indexOf(p);
                    if (v !== -1) {
                        let g = h.slice();
                        return g.splice(v, 1), g;
                    }
                    return h;
                });
            }),
            s = ie((p) => (a((h) => [...h, p]), () => o(p))),
            u = ie(() => {
                var p;
                let h = la(r);
                if (!h) return !1;
                let v = h.activeElement;
                return (p = r.current) != null && p.contains(v)
                    ? !0
                    : i.some((g) => {
                          var _, b;
                          return (
                              ((_ = h.getElementById(g.buttonId)) == null
                                  ? void 0
                                  : _.contains(v)) ||
                              ((b = h.getElementById(g.panelId)) == null
                                  ? void 0
                                  : b.contains(v))
                          );
                      });
            }),
            l = ie((p) => {
                for (let h of i) h.buttonId !== p && h.close();
            }),
            c = T.exports.useMemo(
                () => ({
                    registerPopover: s,
                    unregisterPopover: o,
                    isFocusWithinPopoverGroup: u,
                    closeOthers: l,
                }),
                [s, o, u, l]
            ),
            f = T.exports.useMemo(() => ({}), []),
            d = e,
            y = { ref: n };
        return K.createElement(
            mu.Provider,
            { value: c },
            Ne({
                ourProps: y,
                theirProps: d,
                slot: f,
                defaultTag: Gg,
                name: "Popover.Group",
            })
        );
    }),
    ln = Object.assign(Dg, { Button: jg, Overlay: Ug, Panel: zg, Group: qg });
function Vg(e) {
    let t = { called: !1 };
    return (...r) => {
        if (!t.called) return (t.called = !0), e(...r);
    };
}
function eo(e, ...t) {
    e && t.length > 0 && e.classList.add(...t);
}
function to(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t);
}
var Ho = ((e) => ((e.Ended = "ended"), (e.Cancelled = "cancelled"), e))(
    Ho || {}
);
function Yg(e, t) {
    let r = Sn();
    if (!e) return r.dispose;
    let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e),
        [a, o] = [n, i].map((s) => {
            let [u = 0] = s
                .split(",")
                .filter(Boolean)
                .map((l) =>
                    l.includes("ms") ? parseFloat(l) : parseFloat(l) * 1e3
                )
                .sort((l, c) => c - l);
            return u;
        });
    if (a + o !== 0) {
        let s = [];
        s.push(
            r.addEventListener(e, "transitionrun", (u) => {
                u.target === u.currentTarget &&
                    (s.splice(0).forEach((l) => l()),
                    s.push(
                        r.addEventListener(e, "transitionend", (l) => {
                            l.target === l.currentTarget &&
                                (t("ended"), s.splice(0).forEach((c) => c()));
                        }),
                        r.addEventListener(e, "transitioncancel", (l) => {
                            l.target === l.currentTarget &&
                                (t("cancelled"),
                                s.splice(0).forEach((c) => c()));
                        })
                    ));
            })
        );
    } else t("ended");
    return r.add(() => t("cancelled")), r.dispose;
}
function Xg(e, t, r, n) {
    let i = r ? "enter" : "leave",
        a = Sn(),
        o = n !== void 0 ? Vg(n) : () => {};
    i === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
    let s = ye(i, { enter: () => t.enter, leave: () => t.leave }),
        u = ye(i, { enter: () => t.enterTo, leave: () => t.leaveTo }),
        l = ye(i, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
    return (
        to(
            e,
            ...t.enter,
            ...t.enterTo,
            ...t.enterFrom,
            ...t.leave,
            ...t.leaveFrom,
            ...t.leaveTo,
            ...t.entered
        ),
        eo(e, ...s, ...l),
        a.nextFrame(() => {
            to(e, ...l),
                eo(e, ...u),
                Yg(
                    e,
                    (c) => (
                        c === "ended" && (to(e, ...s), eo(e, ...t.entered)),
                        o(c)
                    )
                );
        }),
        a.dispose
    );
}
function Kg({ container: e, direction: t, classes: r, onStart: n, onStop: i }) {
    let a = ca(),
        o = ld(),
        s = _t(t);
    nt(() => {
        let u = Sn();
        o.add(u.dispose);
        let l = e.current;
        if (!!l && s.current !== "idle" && !!a.current)
            return (
                u.dispose(),
                n.current(s.current),
                u.add(
                    Xg(l, r.current, s.current === "enter", (c) => {
                        u.dispose(),
                            ye(c, {
                                [Ho.Ended]() {
                                    i.current(s.current);
                                },
                                [Ho.Cancelled]: () => {},
                            });
                    })
                ),
                u.dispose
            );
    }, [t]);
}
function Vt(e = "") {
    return e.split(" ").filter((t) => t.trim().length > 1);
}
let da = T.exports.createContext(null);
da.displayName = "TransitionContext";
var Jg = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Jg || {});
function Zg() {
    let e = T.exports.useContext(da);
    if (e === null)
        throw new Error(
            "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
        );
    return e;
}
function Qg() {
    let e = T.exports.useContext(pa);
    if (e === null)
        throw new Error(
            "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
        );
    return e;
}
let pa = T.exports.createContext(null);
pa.displayName = "NestingContext";
function va(e) {
    return "children" in e
        ? va(e.children)
        : e.current
              .filter(({ el: t }) => t.current !== null)
              .filter(({ state: t }) => t === "visible").length > 0;
}
function Od(e, t) {
    let r = _t(e),
        n = T.exports.useRef([]),
        i = ca(),
        a = ld(),
        o = ie((y, p = gt.Hidden) => {
            let h = n.current.findIndex(({ el: v }) => v === y);
            h !== -1 &&
                (ye(p, {
                    [gt.Unmount]() {
                        n.current.splice(h, 1);
                    },
                    [gt.Hidden]() {
                        n.current[h].state = "hidden";
                    },
                }),
                a.microTask(() => {
                    var v;
                    !va(n) &&
                        i.current &&
                        ((v = r.current) == null || v.call(r));
                }));
        }),
        s = ie((y) => {
            let p = n.current.find(({ el: h }) => h === y);
            return (
                p
                    ? p.state !== "visible" && (p.state = "visible")
                    : n.current.push({ el: y, state: "visible" }),
                () => o(y, gt.Unmount)
            );
        }),
        u = T.exports.useRef([]),
        l = T.exports.useRef(Promise.resolve()),
        c = T.exports.useRef({ enter: [], leave: [], idle: [] }),
        f = ie((y, p, h) => {
            u.current.splice(0),
                t &&
                    (t.chains.current[p] = t.chains.current[p].filter(
                        ([v]) => v !== y
                    )),
                t == null ||
                    t.chains.current[p].push([
                        y,
                        new Promise((v) => {
                            u.current.push(v);
                        }),
                    ]),
                t == null ||
                    t.chains.current[p].push([
                        y,
                        new Promise((v) => {
                            Promise.all(c.current[p].map(([g, _]) => _)).then(
                                () => v()
                            );
                        }),
                    ]),
                p === "enter"
                    ? (l.current = l.current
                          .then(() => (t == null ? void 0 : t.wait.current))
                          .then(() => h(p)))
                    : h(p);
        }),
        d = ie((y, p, h) => {
            Promise.all(c.current[p].splice(0).map(([v, g]) => g))
                .then(() => {
                    var v;
                    (v = u.current.shift()) == null || v();
                })
                .then(() => h(p));
        });
    return T.exports.useMemo(
        () => ({
            children: n,
            register: s,
            unregister: o,
            onStart: f,
            onStop: d,
            wait: l,
            chains: c,
        }),
        [s, o, n, f, d, c, l]
    );
}
function em() {}
let tm = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Ml(e) {
    var t;
    let r = {};
    for (let n of tm) r[n] = (t = e[n]) != null ? t : em;
    return r;
}
function rm(e) {
    let t = T.exports.useRef(Ml(e));
    return (
        T.exports.useEffect(() => {
            t.current = Ml(e);
        }, [e]),
        t
    );
}
let nm = "div",
    Ad = jt.RenderStrategy,
    $d = $e(function (e, t) {
        let {
                beforeEnter: r,
                afterEnter: n,
                beforeLeave: i,
                afterLeave: a,
                enter: o,
                enterFrom: s,
                enterTo: u,
                entered: l,
                leave: c,
                leaveFrom: f,
                leaveTo: d,
                ...y
            } = e,
            p = T.exports.useRef(null),
            h = Ie(p, t),
            v = y.unmount ? gt.Unmount : gt.Hidden,
            { show: g, appear: _, initial: b } = Zg(),
            [m, x] = T.exports.useState(g ? "visible" : "hidden"),
            w = Qg(),
            { register: S, unregister: A } = w,
            $ = T.exports.useRef(null);
        T.exports.useEffect(() => S(p), [S, p]),
            T.exports.useEffect(() => {
                if (v === gt.Hidden && !!p.current) {
                    if (g && m !== "visible") {
                        x("visible");
                        return;
                    }
                    return ye(m, { hidden: () => A(p), visible: () => S(p) });
                }
            }, [m, p, S, A, g, v]);
        let E = _t({
                enter: Vt(o),
                enterFrom: Vt(s),
                enterTo: Vt(u),
                entered: Vt(l),
                leave: Vt(c),
                leaveFrom: Vt(f),
                leaveTo: Vt(d),
            }),
            P = rm({
                beforeEnter: r,
                afterEnter: n,
                beforeLeave: i,
                afterLeave: a,
            }),
            M = Lr();
        T.exports.useEffect(() => {
            if (M && m === "visible" && p.current === null)
                throw new Error(
                    "Did you forget to passthrough the `ref` to the actual DOM node?"
                );
        }, [p, m, M]);
        let k = b && !_,
            I = (() =>
                !M || k || $.current === g ? "idle" : g ? "enter" : "leave")(),
            R = ie((G) =>
                ye(G, {
                    enter: () => P.current.beforeEnter(),
                    leave: () => P.current.beforeLeave(),
                    idle: () => {},
                })
            ),
            C = ie((G) =>
                ye(G, {
                    enter: () => P.current.afterEnter(),
                    leave: () => P.current.afterLeave(),
                    idle: () => {},
                })
            ),
            B = Od(() => {
                x("hidden"), A(p);
            }, w);
        Kg({
            container: p,
            classes: E,
            direction: I,
            onStart: _t((G) => {
                B.onStart(p, G, R);
            }),
            onStop: _t((G) => {
                B.onStop(p, G, C),
                    G === "leave" && !va(B) && (x("hidden"), A(p));
            }),
        }),
            T.exports.useEffect(() => {
                !k || (v === gt.Hidden ? ($.current = null) : ($.current = g));
            }, [g, k, m]);
        let j = y,
            H = { ref: h };
        return O(pa.Provider, {
            value: B,
            children: O(yd, {
                value: ye(m, { visible: it.Open, hidden: it.Closed }),
                children: Ne({
                    ourProps: H,
                    theirProps: j,
                    defaultTag: nm,
                    features: Ad,
                    visible: m === "visible",
                    name: "Transition.Child",
                }),
            }),
        });
    }),
    Wo = $e(function (e, t) {
        let { show: r, appear: n = !1, unmount: i, ...a } = e,
            o = T.exports.useRef(null),
            s = Ie(o, t);
        Lr();
        let u = On();
        if (
            (r === void 0 &&
                u !== null &&
                (r = ye(u, { [it.Open]: !0, [it.Closed]: !1 })),
            ![!0, !1].includes(r))
        )
            throw new Error(
                "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
        let [l, c] = T.exports.useState(r ? "visible" : "hidden"),
            f = Od(() => {
                c("hidden");
            }),
            [d, y] = T.exports.useState(!0),
            p = T.exports.useRef([r]);
        nt(() => {
            d !== !1 &&
                p.current[p.current.length - 1] !== r &&
                (p.current.push(r), y(!1));
        }, [p, r]);
        let h = T.exports.useMemo(
            () => ({ show: r, appear: n, initial: d }),
            [r, n, d]
        );
        T.exports.useEffect(() => {
            if (r) c("visible");
            else if (!va(f)) c("hidden");
            else {
                let g = o.current;
                if (!g) return;
                let _ = g.getBoundingClientRect();
                _.x === 0 &&
                    _.y === 0 &&
                    _.width === 0 &&
                    _.height === 0 &&
                    c("hidden");
            }
        }, [r, f]);
        let v = { unmount: i };
        return O(pa.Provider, {
            value: f,
            children: O(da.Provider, {
                value: h,
                children: Ne({
                    ourProps: {
                        ...v,
                        as: T.exports.Fragment,
                        children: K.createElement($d, { ref: s, ...v, ...a }),
                    },
                    theirProps: {},
                    defaultTag: T.exports.Fragment,
                    features: Ad,
                    visible: l === "visible",
                    name: "Transition",
                }),
            }),
        });
    }),
    im = $e(function (e, t) {
        let r = T.exports.useContext(da) !== null,
            n = On() !== null;
        return O(Rr, {
            children:
                !r && n
                    ? K.createElement(Wo, { ref: t, ...e })
                    : K.createElement($d, { ref: t, ...e }),
        });
    }),
    xr = Object.assign(Wo, { Child: im, Root: Wo });
const am = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    Td = (e) =>
        Array.isArray(e) &&
        e.every((t) => typeof t == "object" && !(t instanceof Array)),
    om = (e) => Array.isArray(e) && e.every((t) => Array.isArray(t)),
    sm = (e) =>
        Array.from(
            e
                .map((t) => Object.keys(t))
                .reduce((t, r) => new Set([...t, ...r]), [])
        ),
    um = (e, t) => {
        t = t || sm(e);
        let r = t,
            n = t;
        Td(t) && ((r = t.map((a) => a.label)), (n = t.map((a) => a.key)));
        const i = e.map((a) => n.map((o) => lm(o, a)));
        return [r, ...i];
    },
    lm = (e, t) => {
        const r = e
            .replace(/\[([^\]]+)]/g, ".$1")
            .split(".")
            .reduce(function (n, i, a, o) {
                const s = n[i];
                if (s == null) o.splice(1);
                else return s;
            }, t);
        return r === void 0 ? (e in t ? t[e] : "") : r;
    },
    cm = (e) => (typeof e > "u" || e === null ? "" : e),
    Pd = (e, t = ",", r = '"') =>
        e
            .filter((n) => n)
            .map((n) =>
                n
                    .map((i) => cm(i))
                    .map((i) => `${r}${i}${r}`)
                    .join(t)
            ).join(`
`),
    fm = (e, t, r, n) => Pd(t ? [t, ...e] : e, r, n),
    hm = (e, t, r, n) => Pd(um(e, t), r, n),
    dm = (e, t, r, n) =>
        t
            ? `${t.join(r)}
${e}`
            : e.replace(/"/g, '""'),
    Ed = (e, t, r, n) => {
        if (Td(e)) return hm(e, t, r, n);
        if (om(e)) return fm(e, t, r, n);
        if (typeof e == "string") return dm(e, t, r);
        throw new TypeError(
            'Data should be a "String", "Array of arrays" OR "Array of objects" '
        );
    },
    Md = (e, t, r, n, i) => {
        const a = Ed(e, r, n, i),
            o = am() ? "application/csv" : "text/csv",
            s = new Blob([t ? "\uFEFF" : "", a], { type: o }),
            u = `data:${o};charset=utf-8,${t ? "\uFEFF" : ""}${a}`,
            l = window.URL || window.webkitURL;
        return typeof l.createObjectURL > "u" ? u : l.createObjectURL(s);
    };
var z = { exports: {} },
    pm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    vm = pm,
    ym = vm;
function kd() {}
function Cd() {}
Cd.resetWarningCache = kd;
var gm = function () {
    function e(n, i, a, o, s, u) {
        if (u !== ym) {
            var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((l.name = "Invariant Violation"), l);
        }
    }
    e.isRequired = e;
    function t() {
        return e;
    }
    var r = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Cd,
        resetWarningCache: kd,
    };
    return (r.PropTypes = r), r;
};
z.exports = gm();
const Id = {
        data: z.exports.oneOfType([
            z.exports.string,
            z.exports.array,
            z.exports.func,
        ]).isRequired,
        headers: z.exports.array,
        target: z.exports.string,
        separator: z.exports.string,
        filename: z.exports.string,
        uFEFF: z.exports.bool,
        onClick: z.exports.func,
        asyncOnClick: z.exports.bool,
        enclosingCharacter: z.exports.string,
    },
    Nd = {
        separator: ",",
        filename: "generatedBy_react-csv.csv",
        uFEFF: !0,
        asyncOnClick: !1,
        enclosingCharacter: '"',
    },
    mm = { target: "_blank" };
class kl extends K.Component {
    constructor(t) {
        super(t), (this.state = {});
    }
    buildURI() {
        return Md(...arguments);
    }
    componentDidMount() {
        const {
            data: t,
            headers: r,
            separator: n,
            enclosingCharacter: i,
            uFEFF: a,
            target: o,
            specs: s,
            replace: u,
        } = this.props;
        this.state.page = window.open(this.buildURI(t, a, r, n, i), o, s, u);
    }
    getWindow() {
        return this.state.page;
    }
    render() {
        return null;
    }
}
Kr(kl, "defaultProps", Object.assign(Nd, mm)), Kr(kl, "propTypes", Id);
class zo extends K.Component {
    constructor(t) {
        super(t), (this.buildURI = this.buildURI.bind(this));
    }
    buildURI() {
        return Md(...arguments);
    }
    handleLegacy(t, r = !1) {
        if (window.navigator.msSaveOrOpenBlob) {
            t.preventDefault();
            const {
                    data: n,
                    headers: i,
                    separator: a,
                    filename: o,
                    enclosingCharacter: s,
                    uFEFF: u,
                } = this.props,
                l = r && typeof n == "function" ? n() : n;
            let c = new Blob([u ? "\uFEFF" : "", Ed(l, i, a, s)]);
            return window.navigator.msSaveBlob(c, o), !1;
        }
    }
    handleAsyncClick(t) {
        const r = (n) => {
            if (n === !1) {
                t.preventDefault();
                return;
            }
            this.handleLegacy(t, !0);
        };
        this.props.onClick(t, r);
    }
    handleSyncClick(t) {
        if (this.props.onClick(t) === !1) {
            t.preventDefault();
            return;
        }
        this.handleLegacy(t);
    }
    handleClick() {
        return (t) => {
            if (typeof this.props.onClick == "function")
                return this.props.asyncOnClick
                    ? this.handleAsyncClick(t)
                    : this.handleSyncClick(t);
            this.handleLegacy(t);
        };
    }
    render() {
        const {
                data: t,
                headers: r,
                separator: n,
                filename: i,
                uFEFF: a,
                children: o,
                onClick: s,
                asyncOnClick: u,
                enclosingCharacter: l,
                ...c
            } = this.props,
            d = typeof window > "u" ? "" : this.buildURI(t, a, r, n, l);
        return O("a", {
            download: i,
            ...c,
            ref: (y) => (this.link = y),
            target: "_self",
            href: d,
            onClick: this.handleClick(),
            children: o,
        });
    }
}
Kr(zo, "defaultProps", Nd), Kr(zo, "propTypes", Id);
const bm = zo,
    xm = {
        solid: "ease-in duration-100 group inline-flex items-center justify-center rounded-lg py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
        outline:
            "ease-in duration-100 group inline-flex ring-1 items-center justify-center rounded-lg py-3 px-6 text-sm focus:outline-none",
    },
    wm = {
        solid: {
            slate: "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
            orange: "bg-orange-main text-black hover:bg-amber-500",
            white: "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
        },
        outline: {
            slate: "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
            orange: "ring-orange-main text-orange-main hover:text-amber-500",
            white: "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white",
        },
    };
function Go({
    variant: e = "solid",
    color: t = "slate",
    onClick: r,
    className: n,
    ...i
}) {
    return (
        (n = rr(xm[e], wm[e][t], n)),
        O("button", { onClick: r, className: n, ...i })
    );
}
function Rd({ className: e, ...t }) {
    return O("div", {
        className: rr("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", e),
        ...t,
    });
}
function Dd(e) {
    return L("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "33.924",
        height: "30.171",
        viewBox: "0 0 33.924 30.171",
        ...e,
        children: [
            O("defs", {
                children: O("clipPath", {
                    id: "clip-path",
                    children: O("rect", {
                        id: "Rectangle_10",
                        "data-name": "Rectangle 10",
                        width: "33.924",
                        height: "30.171",
                        transform: "translate(0 0)",
                        fill: "#fefefe",
                    }),
                }),
            }),
            O("g", {
                id: "Group_3",
                "data-name": "Group 3",
                transform: "translate(0 -0.001)",
                children: O("g", {
                    id: "Group_1",
                    "data-name": "Group 1",
                    transform: "translate(0 0.001)",
                    children: O("path", {
                        id: "Path_1",
                        "data-name": "Path 1",
                        d: "M30.932,0H2.991A2.987,2.987,0,0,0,.4,4.482l13.971,24.2a2.986,2.986,0,0,0,5.173,0l13.971-24.2A2.987,2.987,0,0,0,30.932,0M23.674,7.924,17.607,18.431a.745.745,0,0,1-1.291,0L10.25,7.924A.746.746,0,0,1,10.9,6.806H23.028a.746.746,0,0,1,.646,1.118",
                        transform: "translate(0 -0.001)",
                        fill: "#fefefe",
                    }),
                }),
            }),
        ],
    });
}
function Cl({ onClick: e, children: t, active: r }) {
    return O("span", {
        onClick: e,
        className: rr(
            "hover:hover-white mx-2 inline-block cursor-pointer py-2 text-base font-medium hover:border-b",
            r && "border-b"
        ),
        children: t,
    });
}
function Il({ onClick: e, children: t }) {
    return O(ln.Button, {
        as: Go,
        onClick: e,
        className: "block w-full bg-transparent p-2",
        children: t,
    });
}
function _m({ open: e }) {
    return L("svg", {
        "aria-hidden": "true",
        className: "h-3.5 w-3.5 overflow-visible stroke-white",
        fill: "none",
        strokeWidth: 2,
        strokeLinecap: "round",
        children: [
            O("path", {
                d: "M0 1H14M0 7H14M0 13H14",
                className: rr(
                    "origin-center transition",
                    e && "scale-90 opacity-0"
                ),
            }),
            O("path", {
                d: "M2 2L12 12M12 2L2 12",
                className: rr(
                    "origin-center transition",
                    !e && "scale-90 opacity-0"
                ),
            }),
        ],
    });
}
function Sm({ onChangeTab: e }) {
    return L(ln, {
        children: [
            O(ln.Button, {
                className:
                    "relative z-10 flex h-8 w-8 items-center justify-center focus:border-none focus:outline-none",
                "aria-label": "Toggle Navigation",
                children: ({ open: t }) => O(_m, { open: t }),
            }),
            L(xr.Root, {
                children: [
                    O(xr.Child, {
                        as: T.exports.Fragment,
                        enter: "duration-150 ease-out",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "duration-150 ease-in",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: O(ln.Overlay, {
                            className: "fixed inset-0 bg-slate-300/50",
                        }),
                    }),
                    O(xr.Child, {
                        as: T.exports.Fragment,
                        enter: "duration-150 ease-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "duration-100 ease-in",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: L(ln.Panel, {
                            as: "div",
                            className:
                                "absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-black-200 p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5",
                            children: [
                                O(Il, {
                                    onClick: () => e(0),
                                    children: "Metainfo",
                                }),
                                O(Il, {
                                    onClick: () => e(1),
                                    children: "Post Lists",
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
const Om = [
    { label: "Date", key: "time" },
    { label: "Post Type", key: "postType" },
    { label: "Content", key: "content" },
    { label: "Video Thumbnail", key: "video" },
    { label: "Image", key: "image" },
    { label: "Like", key: "like" },
    { label: "Retweet", key: "retweet" },
    { label: "Reply", key: "reply" },
    { label: "Reach", key: "reach" },
    { label: "Tweet ID", key: "tweetId" },
];
function Am({ tab: e, onChangeTab: t, onExport: r, post: n, profile: i }) {
    const a = () => {
            localStorage.clear(),
                chrome.tabs.query(
                    { active: !0, currentWindow: !0 },
                    function (s) {
                        chrome.tabs.remove(s[0].id);
                    }
                );
        },
        o = n.map((s) => ({
            video: s.video.join(", "),
            image: s.image.join(", "),
            retweet: s.retweet !== "" ? s.retweet : "0",
            like: s.like !== "" ? s.like : "0",
            reply: s.reply !== "" ? s.reply : "0",
            ...s,
        }));
    return O("header", {
        className: "py-10",
        children: O(Rd, {
            children: L("nav", {
                className: "relative z-50 flex justify-between text-white",
                children: [
                    L("div", {
                        className: "flex items-center md:gap-x-12",
                        children: [
                            L("span", {
                                className:
                                    "flex flex-row items-center duration-300 ease-in hover:opacity-75",
                                children: [
                                    O(Dd, { className: "mr-2 h-6 w-auto" }),
                                    O("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "https://nighthustle.co",
                                        className: "text-[25px] font-semibold",
                                        children: "Twitter Scraper",
                                    }),
                                ],
                            }),
                            L("div", {
                                className: "hidden md:flex md:gap-x-6",
                                children: [
                                    O(Cl, {
                                        onClick: () => t(0),
                                        active: e === 0,
                                        children: "Metainfo",
                                    }),
                                    O(Cl, {
                                        onClick: () => t(1),
                                        active: e === 1,
                                        children: "Post Lists",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    L("div", {
                        className: "flex items-center gap-x-4 md:gap-x-4",
                        children: [
                            O(Go, {
                                variant: "outline",
                                color: "orange",
                                onClick: () => a(),
                                children: O("span", {
                                    children: "Clear Storage",
                                }),
                            }),
                            O(bm, {
                                data: o,
                                headers: Om,
                                filename: `${Ke.exports.get(
                                    i,
                                    "author.additionalName",
                                    "export"
                                )}.csv`,
                                children: O(Go, {
                                    color: "orange",
                                    onClick: () => r(),
                                    children: O("span", {
                                        children: "Export CSV",
                                    }),
                                }),
                            }),
                            O("div", {
                                className: "-mr-1 md:hidden",
                                children: O(Sm, { onChangeTab: t }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function $m({ profile: e }) {
    return O("div", {
        children: O("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: L("div", {
                className:
                    "md:py-18 rounded-lg bg-[url('/assets/img/bg.jpg')] bg-cover px-8 py-8 md:flex md:items-center",
                children: [
                    O("div", {
                        className: "m-0 md:mr-12",
                        children: L("div", {
                            className: "relative mx-auto w-32",
                            children: [
                                O("img", {
                                    className:
                                        "relative z-10 h-32 w-32 rounded-full",
                                    src: Ke.exports.get(
                                        e,
                                        "author.image.contentUrl",
                                        ""
                                    ),
                                    alt: "profile image",
                                }),
                                O("div", {
                                    className:
                                        "absolute top-0 left-0 h-full w-full rounded-full bg-white outline outline-[3px] outline-[#333333]",
                                }),
                            ],
                        }),
                    }),
                    L("h2", {
                        className:
                            "mt-8 text-center tracking-tight text-white md:mt-0 md:flex-shrink-0 md:text-left",
                        children: [
                            O("p", {
                                className: "mb-2 block text-3xl font-medium",
                                children: `${Ke.exports.get(
                                    e,
                                    "author.givenName",
                                    ""
                                )} (@${Ke.exports.get(
                                    e,
                                    "author.additionalName",
                                    ""
                                )})`,
                            }),
                            O("p", {
                                className: "font-regular block text-base",
                                children: Ke.exports.get(
                                    e,
                                    "author.description",
                                    ""
                                ),
                            }),
                            L("div", {
                                className: "font-regular text-base",
                                children: [
                                    L("div", {
                                        className: "w-full",
                                        children: [
                                            Ke.exports.get(
                                                e,
                                                "author.homeLocation.name",
                                                ""
                                            ) &&
                                                L("div", {
                                                    className:
                                                        "mr-4 inline-block",
                                                    children: [
                                                        O(My, {
                                                            className:
                                                                "-mt-1 mr-2 inline-block align-middle",
                                                        }),
                                                        O("div", {
                                                            className:
                                                                "inline-block align-middle",
                                                            children:
                                                                Ke.exports.get(
                                                                    e,
                                                                    "author.homeLocation.name",
                                                                    ""
                                                                ),
                                                        }),
                                                    ],
                                                }),
                                            Ke.exports.get(
                                                e,
                                                "dateCreated",
                                                ""
                                            ) &&
                                                L("div", {
                                                    className:
                                                        "mr-4 inline-block",
                                                    children: [
                                                        O(ky, {
                                                            className:
                                                                "-mt-1 mr-2 inline-block align-middle",
                                                        }),
                                                        O("div", {
                                                            className:
                                                                "inline-block align-middle",
                                                            children: er(
                                                                Ke.exports.get(
                                                                    e,
                                                                    "dateCreated",
                                                                    ""
                                                                )
                                                            ).format(
                                                                "DD-MM-YYYY"
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    L("div", {
                                        className: "w-full",
                                        children: [
                                            L("div", {
                                                className: "mr-4 inline-block",
                                                children: [
                                                    O(Cy, {
                                                        className:
                                                            "mr-2 inline-block align-middle",
                                                    }),
                                                    L("div", {
                                                        className:
                                                            "inline-block align-middle",
                                                        children: [
                                                            Ke.exports.get(
                                                                e,
                                                                "author.interactionStatistic[0].userInteractionCount",
                                                                0
                                                            ),
                                                            " ",
                                                            "Follows",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            L("div", {
                                                className: "mr-4 inline-block",
                                                children: [
                                                    O(Iy, {
                                                        className:
                                                            "mr-2 inline-block align-middle",
                                                    }),
                                                    L("div", {
                                                        className:
                                                            "inline-block align-middle",
                                                        children: [
                                                            Ke.exports.get(
                                                                e,
                                                                "author.interactionStatistic[1].userInteractionCount",
                                                                0
                                                            ),
                                                            " ",
                                                            "Friends",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            L("div", {
                                                className: "mr-4 inline-block",
                                                children: [
                                                    O(Ny, {
                                                        className:
                                                            "mr-2 inline-block align-middle",
                                                    }),
                                                    L("div", {
                                                        className:
                                                            "inline-block align-middle",
                                                        children: [
                                                            Ke.exports.get(
                                                                e,
                                                                "author.interactionStatistic[2].userInteractionCount",
                                                                0
                                                            ),
                                                            " ",
                                                            "Tweets",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var Ld = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
        var t = {}.hasOwnProperty;
        function r() {
            for (var n = [], i = 0; i < arguments.length; i++) {
                var a = arguments[i];
                if (!!a) {
                    var o = typeof a;
                    if (o === "string" || o === "number") n.push(a);
                    else if (Array.isArray(a)) {
                        if (a.length) {
                            var s = r.apply(null, a);
                            s && n.push(s);
                        }
                    } else if (o === "object") {
                        if (
                            a.toString !== Object.prototype.toString &&
                            !a.toString.toString().includes("[native code]")
                        ) {
                            n.push(a.toString());
                            continue;
                        }
                        for (var u in a) t.call(a, u) && a[u] && n.push(u);
                    }
                }
            }
            return n.join(" ");
        }
        e.exports
            ? ((r.default = r), (e.exports = r))
            : (window.classNames = r);
    })();
})(Ld);
const pe = Ld.exports;
function Tm(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
}
var Ge = Tm;
function Jn(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (Jn = function (r) {
                  return typeof r;
              })
            : (Jn = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        Jn(e)
    );
}
var Pm = ["viewBox", "children"],
    Em = [
        "aria-activedescendant",
        "aria-atomic",
        "aria-autocomplete",
        "aria-busy",
        "aria-checked",
        "aria-colcount",
        "aria-colindex",
        "aria-colspan",
        "aria-controls",
        "aria-current",
        "aria-describedby",
        "aria-details",
        "aria-disabled",
        "aria-errormessage",
        "aria-expanded",
        "aria-flowto",
        "aria-haspopup",
        "aria-hidden",
        "aria-invalid",
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-level",
        "aria-live",
        "aria-modal",
        "aria-multiline",
        "aria-multiselectable",
        "aria-orientation",
        "aria-owns",
        "aria-placeholder",
        "aria-posinset",
        "aria-pressed",
        "aria-readonly",
        "aria-relevant",
        "aria-required",
        "aria-roledescription",
        "aria-rowcount",
        "aria-rowindex",
        "aria-rowspan",
        "aria-selected",
        "aria-setsize",
        "aria-sort",
        "aria-valuemax",
        "aria-valuemin",
        "aria-valuenow",
        "aria-valuetext",
        "className",
        "color",
        "height",
        "id",
        "lang",
        "max",
        "media",
        "method",
        "min",
        "name",
        "style",
        "target",
        "type",
        "width",
        "role",
        "tabIndex",
        "accentHeight",
        "accumulate",
        "additive",
        "alignmentBaseline",
        "allowReorder",
        "alphabetic",
        "amplitude",
        "arabicForm",
        "ascent",
        "attributeName",
        "attributeType",
        "autoReverse",
        "azimuth",
        "baseFrequency",
        "baselineShift",
        "baseProfile",
        "bbox",
        "begin",
        "bias",
        "by",
        "calcMode",
        "capHeight",
        "clip",
        "clipPath",
        "clipPathUnits",
        "clipRule",
        "colorInterpolation",
        "colorInterpolationFilters",
        "colorProfile",
        "colorRendering",
        "contentScriptType",
        "contentStyleType",
        "cursor",
        "cx",
        "cy",
        "d",
        "decelerate",
        "descent",
        "diffuseConstant",
        "direction",
        "display",
        "divisor",
        "dominantBaseline",
        "dur",
        "dx",
        "dy",
        "edgeMode",
        "elevation",
        "enableBackground",
        "end",
        "exponent",
        "externalResourcesRequired",
        "fill",
        "fillOpacity",
        "fillRule",
        "filter",
        "filterRes",
        "filterUnits",
        "floodColor",
        "floodOpacity",
        "focusable",
        "fontFamily",
        "fontSize",
        "fontSizeAdjust",
        "fontStretch",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "format",
        "from",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyphName",
        "glyphOrientationHorizontal",
        "glyphOrientationVertical",
        "glyphRef",
        "gradientTransform",
        "gradientUnits",
        "hanging",
        "horizAdvX",
        "horizOriginX",
        "href",
        "ideographic",
        "imageRendering",
        "in2",
        "in",
        "intercept",
        "k1",
        "k2",
        "k3",
        "k4",
        "k",
        "kernelMatrix",
        "kernelUnitLength",
        "kerning",
        "keyPoints",
        "keySplines",
        "keyTimes",
        "lengthAdjust",
        "letterSpacing",
        "lightingColor",
        "limitingConeAngle",
        "local",
        "markerEnd",
        "markerHeight",
        "markerMid",
        "markerStart",
        "markerUnits",
        "markerWidth",
        "mask",
        "maskContentUnits",
        "maskUnits",
        "mathematical",
        "mode",
        "numOctaves",
        "offset",
        "opacity",
        "operator",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "overlinePosition",
        "overlineThickness",
        "paintOrder",
        "panose1",
        "pathLength",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "pointerEvents",
        "points",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "preserveAlpha",
        "preserveAspectRatio",
        "primitiveUnits",
        "r",
        "radius",
        "refX",
        "refY",
        "renderingIntent",
        "repeatCount",
        "repeatDur",
        "requiredExtensions",
        "requiredFeatures",
        "restart",
        "result",
        "rotate",
        "rx",
        "ry",
        "seed",
        "shapeRendering",
        "slope",
        "spacing",
        "specularConstant",
        "specularExponent",
        "speed",
        "spreadMethod",
        "startOffset",
        "stdDeviation",
        "stemh",
        "stemv",
        "stitchTiles",
        "stopColor",
        "stopOpacity",
        "strikethroughPosition",
        "strikethroughThickness",
        "string",
        "stroke",
        "strokeDasharray",
        "strokeDashoffset",
        "strokeLinecap",
        "strokeLinejoin",
        "strokeMiterlimit",
        "strokeOpacity",
        "strokeWidth",
        "surfaceScale",
        "systemLanguage",
        "tableValues",
        "targetX",
        "targetY",
        "textAnchor",
        "textDecoration",
        "textLength",
        "textRendering",
        "to",
        "transform",
        "u1",
        "u2",
        "underlinePosition",
        "underlineThickness",
        "unicode",
        "unicodeBidi",
        "unicodeRange",
        "unitsPerEm",
        "vAlphabetic",
        "values",
        "vectorEffect",
        "version",
        "vertAdvY",
        "vertOriginX",
        "vertOriginY",
        "vHanging",
        "vIdeographic",
        "viewTarget",
        "visibility",
        "vMathematical",
        "widths",
        "wordSpacing",
        "writingMode",
        "x1",
        "x2",
        "x",
        "xChannelSelector",
        "xHeight",
        "xlinkActuate",
        "xlinkArcrole",
        "xlinkHref",
        "xlinkRole",
        "xlinkShow",
        "xlinkTitle",
        "xlinkType",
        "xmlBase",
        "xmlLang",
        "xmlns",
        "xmlnsXlink",
        "xmlSpace",
        "y1",
        "y2",
        "y",
        "yChannelSelector",
        "z",
        "zoomAndPan",
        "ref",
        "key",
        "angle",
    ],
    xu = [
        "dangerouslySetInnerHTML",
        "onCopy",
        "onCopyCapture",
        "onCut",
        "onCutCapture",
        "onPaste",
        "onPasteCapture",
        "onCompositionEnd",
        "onCompositionEndCapture",
        "onCompositionStart",
        "onCompositionStartCapture",
        "onCompositionUpdate",
        "onCompositionUpdateCapture",
        "onFocus",
        "onFocusCapture",
        "onBlur",
        "onBlurCapture",
        "onChange",
        "onChangeCapture",
        "onBeforeInput",
        "onBeforeInputCapture",
        "onInput",
        "onInputCapture",
        "onReset",
        "onResetCapture",
        "onSubmit",
        "onSubmitCapture",
        "onInvalid",
        "onInvalidCapture",
        "onLoad",
        "onLoadCapture",
        "onError",
        "onErrorCapture",
        "onKeyDown",
        "onKeyDownCapture",
        "onKeyPress",
        "onKeyPressCapture",
        "onKeyUp",
        "onKeyUpCapture",
        "onAbort",
        "onAbortCapture",
        "onCanPlay",
        "onCanPlayCapture",
        "onCanPlayThrough",
        "onCanPlayThroughCapture",
        "onDurationChange",
        "onDurationChangeCapture",
        "onEmptied",
        "onEmptiedCapture",
        "onEncrypted",
        "onEncryptedCapture",
        "onEnded",
        "onEndedCapture",
        "onLoadedData",
        "onLoadedDataCapture",
        "onLoadedMetadata",
        "onLoadedMetadataCapture",
        "onLoadStart",
        "onLoadStartCapture",
        "onPause",
        "onPauseCapture",
        "onPlay",
        "onPlayCapture",
        "onPlaying",
        "onPlayingCapture",
        "onProgress",
        "onProgressCapture",
        "onRateChange",
        "onRateChangeCapture",
        "onSeeked",
        "onSeekedCapture",
        "onSeeking",
        "onSeekingCapture",
        "onStalled",
        "onStalledCapture",
        "onSuspend",
        "onSuspendCapture",
        "onTimeUpdate",
        "onTimeUpdateCapture",
        "onVolumeChange",
        "onVolumeChangeCapture",
        "onWaiting",
        "onWaitingCapture",
        "onAuxClick",
        "onAuxClickCapture",
        "onClick",
        "onClickCapture",
        "onContextMenu",
        "onContextMenuCapture",
        "onDoubleClick",
        "onDoubleClickCapture",
        "onDrag",
        "onDragCapture",
        "onDragEnd",
        "onDragEndCapture",
        "onDragEnter",
        "onDragEnterCapture",
        "onDragExit",
        "onDragExitCapture",
        "onDragLeave",
        "onDragLeaveCapture",
        "onDragOver",
        "onDragOverCapture",
        "onDragStart",
        "onDragStartCapture",
        "onDrop",
        "onDropCapture",
        "onMouseDown",
        "onMouseDownCapture",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseMoveCapture",
        "onMouseOut",
        "onMouseOutCapture",
        "onMouseOver",
        "onMouseOverCapture",
        "onMouseUp",
        "onMouseUpCapture",
        "onSelect",
        "onSelectCapture",
        "onTouchCancel",
        "onTouchCancelCapture",
        "onTouchEnd",
        "onTouchEndCapture",
        "onTouchMove",
        "onTouchMoveCapture",
        "onTouchStart",
        "onTouchStartCapture",
        "onPointerDown",
        "onPointerDownCapture",
        "onPointerMove",
        "onPointerMoveCapture",
        "onPointerUp",
        "onPointerUpCapture",
        "onPointerCancel",
        "onPointerCancelCapture",
        "onPointerEnter",
        "onPointerEnterCapture",
        "onPointerLeave",
        "onPointerLeaveCapture",
        "onPointerOver",
        "onPointerOverCapture",
        "onPointerOut",
        "onPointerOutCapture",
        "onGotPointerCapture",
        "onGotPointerCaptureCapture",
        "onLostPointerCapture",
        "onLostPointerCaptureCapture",
        "onScroll",
        "onScrollCapture",
        "onWheel",
        "onWheelCapture",
        "onAnimationStart",
        "onAnimationStartCapture",
        "onAnimationEnd",
        "onAnimationEndCapture",
        "onAnimationIteration",
        "onAnimationIterationCapture",
        "onTransitionEnd",
        "onTransitionEndCapture",
    ],
    ae = function (t, r, n) {
        if (!t || typeof t == "function" || typeof t == "boolean") return null;
        var i = t;
        if ((T.exports.isValidElement(t) && (i = t.props), !Ge(i))) return null;
        var a = {};
        return (
            Object.keys(i).forEach(function (o) {
                (Em.includes(o) ||
                    (n && Pm.includes(o)) ||
                    (r && xu.includes(o))) &&
                    (a[o] = i[o]);
            }),
            a
        );
    },
    mi = function (t, r) {
        if (!t || typeof t == "function" || typeof t == "boolean") return null;
        var n = t;
        if ((T.exports.isValidElement(t) && (n = t.props), !Ge(n))) return null;
        var i = {};
        return (
            Object.keys(n).forEach(function (a) {
                xu.includes(a) &&
                    (i[a] =
                        r ||
                        function (o) {
                            return n[a](n, o);
                        });
            }),
            i
        );
    },
    Mm = function (t, r, n) {
        return function (i) {
            return t(r, n, i), null;
        };
    },
    jd = function (t, r, n) {
        if (!Ge(t) || Jn(t) !== "object") return null;
        var i = null;
        return (
            Object.keys(t).forEach(function (a) {
                var o = t[a];
                xu.includes(a) &&
                    typeof o == "function" &&
                    (i || (i = {}), (i[a] = Mm(o, r, n)));
            }),
            i
        );
    };
function km(e, t) {
    if (e == null) return {};
    var r = Cm(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(e, n) ||
                        (r[n] = e[n]));
    }
    return r;
}
function Cm(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
function qo(e) {
    var t = e.children,
        r = e.width,
        n = e.height,
        i = e.viewBox,
        a = e.className,
        o = e.style,
        s = km(e, [
            "children",
            "width",
            "height",
            "viewBox",
            "className",
            "style",
        ]),
        u = i || { width: r, height: n, x: 0, y: 0 },
        l = pe("recharts-surface", a);
    return L("svg", {
        ...ae(s, !0, !0),
        className: l,
        width: r,
        height: n,
        style: o,
        viewBox: ""
            .concat(u.x, " ")
            .concat(u.y, " ")
            .concat(u.width, " ")
            .concat(u.height),
        version: "1.1",
        children: [
            O("title", { children: e.title }),
            O("desc", { children: e.desc }),
            t,
        ],
    });
}
function Im(e, t) {
    if (e == null) return {};
    var r = Nm(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(e, n) ||
                        (r[n] = e[n]));
    }
    return r;
}
function Nm(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
var je = K.forwardRef(function (e, t) {
        var r = e.children,
            n = e.className,
            i = Im(e, ["children", "className"]),
            a = pe("recharts-layer", n);
        return O("g", { className: a, ...ae(i, !0), ref: t, children: r });
    }),
    Rm = typeof Fn == "object" && Fn && Fn.Object === Object && Fn,
    Fd = Rm,
    Dm = Fd,
    Lm = typeof self == "object" && self && self.Object === Object && self,
    jm = Dm || Lm || Function("return this")(),
    dt = jm,
    Fm = dt,
    Bm = Fm.Symbol,
    $n = Bm,
    Nl = $n,
    Bd = Object.prototype,
    Um = Bd.hasOwnProperty,
    Hm = Bd.toString,
    Zr = Nl ? Nl.toStringTag : void 0;
function Wm(e) {
    var t = Um.call(e, Zr),
        r = e[Zr];
    try {
        e[Zr] = void 0;
        var n = !0;
    } catch {}
    var i = Hm.call(e);
    return n && (t ? (e[Zr] = r) : delete e[Zr]), i;
}
var zm = Wm,
    Gm = Object.prototype,
    qm = Gm.toString;
function Vm(e) {
    return qm.call(e);
}
var Ym = Vm,
    Rl = $n,
    Xm = zm,
    Km = Ym,
    Jm = "[object Null]",
    Zm = "[object Undefined]",
    Dl = Rl ? Rl.toStringTag : void 0;
function Qm(e) {
    return e == null
        ? e === void 0
            ? Zm
            : Jm
        : Dl && Dl in Object(e)
        ? Xm(e)
        : Km(e);
}
var Ut = Qm,
    e0 = Ut,
    t0 = Ge,
    r0 = "[object AsyncFunction]",
    n0 = "[object Function]",
    i0 = "[object GeneratorFunction]",
    a0 = "[object Proxy]";
function o0(e) {
    if (!t0(e)) return !1;
    var t = e0(e);
    return t == n0 || t == i0 || t == r0 || t == a0;
}
var X = o0;
function s0() {
    (this.__data__ = []), (this.size = 0);
}
var u0 = s0;
function l0(e, t) {
    return e === t || (e !== e && t !== t);
}
var wu = l0,
    c0 = wu;
function f0(e, t) {
    for (var r = e.length; r--; ) if (c0(e[r][0], t)) return r;
    return -1;
}
var ya = f0,
    h0 = ya,
    d0 = Array.prototype,
    p0 = d0.splice;
function v0(e) {
    var t = this.__data__,
        r = h0(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : p0.call(t, r, 1), --this.size, !0;
}
var y0 = v0,
    g0 = ya;
function m0(e) {
    var t = this.__data__,
        r = g0(t, e);
    return r < 0 ? void 0 : t[r][1];
}
var b0 = m0,
    x0 = ya;
function w0(e) {
    return x0(this.__data__, e) > -1;
}
var _0 = w0,
    S0 = ya;
function O0(e, t) {
    var r = this.__data__,
        n = S0(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var A0 = O0,
    $0 = u0,
    T0 = y0,
    P0 = b0,
    E0 = _0,
    M0 = A0;
function jr(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
jr.prototype.clear = $0;
jr.prototype.delete = T0;
jr.prototype.get = P0;
jr.prototype.has = E0;
jr.prototype.set = M0;
var ga = jr,
    k0 = ga;
function C0() {
    (this.__data__ = new k0()), (this.size = 0);
}
var I0 = C0;
function N0(e) {
    var t = this.__data__,
        r = t.delete(e);
    return (this.size = t.size), r;
}
var R0 = N0;
function D0(e) {
    return this.__data__.get(e);
}
var L0 = D0;
function j0(e) {
    return this.__data__.has(e);
}
var F0 = j0,
    B0 = dt,
    U0 = B0["__core-js_shared__"],
    H0 = U0,
    ro = H0,
    Ll = (function () {
        var e = /[^.]+$/.exec((ro && ro.keys && ro.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
    })();
function W0(e) {
    return !!Ll && Ll in e;
}
var z0 = W0,
    G0 = Function.prototype,
    q0 = G0.toString;
function V0(e) {
    if (e != null) {
        try {
            return q0.call(e);
        } catch {}
        try {
            return e + "";
        } catch {}
    }
    return "";
}
var Ud = V0,
    Y0 = X,
    X0 = z0,
    K0 = Ge,
    J0 = Ud,
    Z0 = /[\\^$.*+?()[\]{}|]/g,
    Q0 = /^\[object .+?Constructor\]$/,
    eb = Function.prototype,
    tb = Object.prototype,
    rb = eb.toString,
    nb = tb.hasOwnProperty,
    ib = RegExp(
        "^" +
            rb
                .call(nb)
                .replace(Z0, "\\$&")
                .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                ) +
            "$"
    );
function ab(e) {
    if (!K0(e) || X0(e)) return !1;
    var t = Y0(e) ? ib : Q0;
    return t.test(J0(e));
}
var ob = ab;
function sb(e, t) {
    return e == null ? void 0 : e[t];
}
var ub = sb,
    lb = ob,
    cb = ub;
function fb(e, t) {
    var r = cb(e, t);
    return lb(r) ? r : void 0;
}
var lr = fb,
    hb = lr,
    db = dt,
    pb = hb(db, "Map"),
    _u = pb,
    vb = lr,
    yb = vb(Object, "create"),
    ma = yb,
    jl = ma;
function gb() {
    (this.__data__ = jl ? jl(null) : {}), (this.size = 0);
}
var mb = gb;
function bb(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
}
var xb = bb,
    wb = ma,
    _b = "__lodash_hash_undefined__",
    Sb = Object.prototype,
    Ob = Sb.hasOwnProperty;
function Ab(e) {
    var t = this.__data__;
    if (wb) {
        var r = t[e];
        return r === _b ? void 0 : r;
    }
    return Ob.call(t, e) ? t[e] : void 0;
}
var $b = Ab,
    Tb = ma,
    Pb = Object.prototype,
    Eb = Pb.hasOwnProperty;
function Mb(e) {
    var t = this.__data__;
    return Tb ? t[e] !== void 0 : Eb.call(t, e);
}
var kb = Mb,
    Cb = ma,
    Ib = "__lodash_hash_undefined__";
function Nb(e, t) {
    var r = this.__data__;
    return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Cb && t === void 0 ? Ib : t),
        this
    );
}
var Rb = Nb,
    Db = mb,
    Lb = xb,
    jb = $b,
    Fb = kb,
    Bb = Rb;
function Fr(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
Fr.prototype.clear = Db;
Fr.prototype.delete = Lb;
Fr.prototype.get = jb;
Fr.prototype.has = Fb;
Fr.prototype.set = Bb;
var Ub = Fr,
    Fl = Ub,
    Hb = ga,
    Wb = _u;
function zb() {
    (this.size = 0),
        (this.__data__ = {
            hash: new Fl(),
            map: new (Wb || Hb)(),
            string: new Fl(),
        });
}
var Gb = zb;
function qb(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
}
var Vb = qb,
    Yb = Vb;
function Xb(e, t) {
    var r = e.__data__;
    return Yb(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ba = Xb,
    Kb = ba;
function Jb(e) {
    var t = Kb(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
}
var Zb = Jb,
    Qb = ba;
function e1(e) {
    return Qb(this, e).get(e);
}
var t1 = e1,
    r1 = ba;
function n1(e) {
    return r1(this, e).has(e);
}
var i1 = n1,
    a1 = ba;
function o1(e, t) {
    var r = a1(this, e),
        n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var s1 = o1,
    u1 = Gb,
    l1 = Zb,
    c1 = t1,
    f1 = i1,
    h1 = s1;
function Br(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
Br.prototype.clear = u1;
Br.prototype.delete = l1;
Br.prototype.get = c1;
Br.prototype.has = f1;
Br.prototype.set = h1;
var Su = Br,
    d1 = ga,
    p1 = _u,
    v1 = Su,
    y1 = 200;
function g1(e, t) {
    var r = this.__data__;
    if (r instanceof d1) {
        var n = r.__data__;
        if (!p1 || n.length < y1 - 1)
            return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new v1(n);
    }
    return r.set(e, t), (this.size = r.size), this;
}
var m1 = g1,
    b1 = ga,
    x1 = I0,
    w1 = R0,
    _1 = L0,
    S1 = F0,
    O1 = m1;
function Ur(e) {
    var t = (this.__data__ = new b1(e));
    this.size = t.size;
}
Ur.prototype.clear = x1;
Ur.prototype.delete = w1;
Ur.prototype.get = _1;
Ur.prototype.has = S1;
Ur.prototype.set = O1;
var Hd = Ur,
    A1 = "__lodash_hash_undefined__";
function $1(e) {
    return this.__data__.set(e, A1), this;
}
var T1 = $1;
function P1(e) {
    return this.__data__.has(e);
}
var E1 = P1,
    M1 = Su,
    k1 = T1,
    C1 = E1;
function bi(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.__data__ = new M1(); ++t < r; ) this.add(e[t]);
}
bi.prototype.add = bi.prototype.push = k1;
bi.prototype.has = C1;
var Wd = bi;
function I1(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
    return !1;
}
var zd = I1;
function N1(e, t) {
    return e.has(t);
}
var Gd = N1,
    R1 = Wd,
    D1 = zd,
    L1 = Gd,
    j1 = 1,
    F1 = 2;
function B1(e, t, r, n, i, a) {
    var o = r & j1,
        s = e.length,
        u = t.length;
    if (s != u && !(o && u > s)) return !1;
    var l = a.get(e),
        c = a.get(t);
    if (l && c) return l == t && c == e;
    var f = -1,
        d = !0,
        y = r & F1 ? new R1() : void 0;
    for (a.set(e, t), a.set(t, e); ++f < s; ) {
        var p = e[f],
            h = t[f];
        if (n) var v = o ? n(h, p, f, t, e, a) : n(p, h, f, e, t, a);
        if (v !== void 0) {
            if (v) continue;
            d = !1;
            break;
        }
        if (y) {
            if (
                !D1(t, function (g, _) {
                    if (!L1(y, _) && (p === g || i(p, g, r, n, a)))
                        return y.push(_);
                })
            ) {
                d = !1;
                break;
            }
        } else if (!(p === h || i(p, h, r, n, a))) {
            d = !1;
            break;
        }
    }
    return a.delete(e), a.delete(t), d;
}
var qd = B1,
    U1 = dt,
    H1 = U1.Uint8Array,
    W1 = H1;
function z1(e) {
    var t = -1,
        r = Array(e.size);
    return (
        e.forEach(function (n, i) {
            r[++t] = [i, n];
        }),
        r
    );
}
var G1 = z1;
function q1(e) {
    var t = -1,
        r = Array(e.size);
    return (
        e.forEach(function (n) {
            r[++t] = n;
        }),
        r
    );
}
var Ou = q1,
    Bl = $n,
    Ul = W1,
    V1 = wu,
    Y1 = qd,
    X1 = G1,
    K1 = Ou,
    J1 = 1,
    Z1 = 2,
    Q1 = "[object Boolean]",
    ex = "[object Date]",
    tx = "[object Error]",
    rx = "[object Map]",
    nx = "[object Number]",
    ix = "[object RegExp]",
    ax = "[object Set]",
    ox = "[object String]",
    sx = "[object Symbol]",
    ux = "[object ArrayBuffer]",
    lx = "[object DataView]",
    Hl = Bl ? Bl.prototype : void 0,
    no = Hl ? Hl.valueOf : void 0;
function cx(e, t, r, n, i, a, o) {
    switch (r) {
        case lx:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
            (e = e.buffer), (t = t.buffer);
        case ux:
            return !(e.byteLength != t.byteLength || !a(new Ul(e), new Ul(t)));
        case Q1:
        case ex:
        case nx:
            return V1(+e, +t);
        case tx:
            return e.name == t.name && e.message == t.message;
        case ix:
        case ox:
            return e == t + "";
        case rx:
            var s = X1;
        case ax:
            var u = n & J1;
            if ((s || (s = K1), e.size != t.size && !u)) return !1;
            var l = o.get(e);
            if (l) return l == t;
            (n |= Z1), o.set(e, t);
            var c = Y1(s(e), s(t), n, i, a, o);
            return o.delete(e), c;
        case sx:
            if (no) return no.call(e) == no.call(t);
    }
    return !1;
}
var fx = cx;
function hx(e, t) {
    for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
    return e;
}
var Vd = hx,
    dx = Array.isArray,
    te = dx,
    px = Vd,
    vx = te;
function yx(e, t, r) {
    var n = t(e);
    return vx(e) ? n : px(n, r(e));
}
var gx = yx;
function mx(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
        var o = e[r];
        t(o, r, e) && (a[i++] = o);
    }
    return a;
}
var bx = mx;
function xx() {
    return [];
}
var wx = xx,
    _x = bx,
    Sx = wx,
    Ox = Object.prototype,
    Ax = Ox.propertyIsEnumerable,
    Wl = Object.getOwnPropertySymbols,
    $x = Wl
        ? function (e) {
              return e == null
                  ? []
                  : ((e = Object(e)),
                    _x(Wl(e), function (t) {
                        return Ax.call(e, t);
                    }));
          }
        : Sx,
    Tx = $x;
function Px(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
}
var Ex = Px;
function Mx(e) {
    return e != null && typeof e == "object";
}
var Ht = Mx,
    kx = Ut,
    Cx = Ht,
    Ix = "[object Arguments]";
function Nx(e) {
    return Cx(e) && kx(e) == Ix;
}
var Rx = Nx,
    zl = Rx,
    Dx = Ht,
    Yd = Object.prototype,
    Lx = Yd.hasOwnProperty,
    jx = Yd.propertyIsEnumerable,
    Fx = zl(
        (function () {
            return arguments;
        })()
    )
        ? zl
        : function (e) {
              return Dx(e) && Lx.call(e, "callee") && !jx.call(e, "callee");
          },
    Au = Fx,
    xi = { exports: {} };
function Bx() {
    return !1;
}
var Ux = Bx;
(function (e, t) {
    var r = dt,
        n = Ux,
        i = t && !t.nodeType && t,
        a = i && !0 && e && !e.nodeType && e,
        o = a && a.exports === i,
        s = o ? r.Buffer : void 0,
        u = s ? s.isBuffer : void 0,
        l = u || n;
    e.exports = l;
})(xi, xi.exports);
var Hx = 9007199254740991,
    Wx = /^(?:0|[1-9]\d*)$/;
function zx(e, t) {
    var r = typeof e;
    return (
        (t = t == null ? Hx : t),
        !!t &&
            (r == "number" || (r != "symbol" && Wx.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
    );
}
var $u = zx,
    Gx = 9007199254740991;
function qx(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Gx;
}
var Tu = qx,
    Vx = Ut,
    Yx = Tu,
    Xx = Ht,
    Kx = "[object Arguments]",
    Jx = "[object Array]",
    Zx = "[object Boolean]",
    Qx = "[object Date]",
    ew = "[object Error]",
    tw = "[object Function]",
    rw = "[object Map]",
    nw = "[object Number]",
    iw = "[object Object]",
    aw = "[object RegExp]",
    ow = "[object Set]",
    sw = "[object String]",
    uw = "[object WeakMap]",
    lw = "[object ArrayBuffer]",
    cw = "[object DataView]",
    fw = "[object Float32Array]",
    hw = "[object Float64Array]",
    dw = "[object Int8Array]",
    pw = "[object Int16Array]",
    vw = "[object Int32Array]",
    yw = "[object Uint8Array]",
    gw = "[object Uint8ClampedArray]",
    mw = "[object Uint16Array]",
    bw = "[object Uint32Array]",
    he = {};
he[fw] =
    he[hw] =
    he[dw] =
    he[pw] =
    he[vw] =
    he[yw] =
    he[gw] =
    he[mw] =
    he[bw] =
        !0;
he[Kx] =
    he[Jx] =
    he[lw] =
    he[Zx] =
    he[cw] =
    he[Qx] =
    he[ew] =
    he[tw] =
    he[rw] =
    he[nw] =
    he[iw] =
    he[aw] =
    he[ow] =
    he[sw] =
    he[uw] =
        !1;
function xw(e) {
    return Xx(e) && Yx(e.length) && !!he[Vx(e)];
}
var ww = xw;
function _w(e) {
    return function (t) {
        return e(t);
    };
}
var Xd = _w,
    Vo = { exports: {} };
(function (e, t) {
    var r = Fd,
        n = t && !t.nodeType && t,
        i = n && !0 && e && !e.nodeType && e,
        a = i && i.exports === n,
        o = a && r.process,
        s = (function () {
            try {
                var u = i && i.require && i.require("util").types;
                return u || (o && o.binding && o.binding("util"));
            } catch {}
        })();
    e.exports = s;
})(Vo, Vo.exports);
var Sw = ww,
    Ow = Xd,
    Gl = Vo.exports,
    ql = Gl && Gl.isTypedArray,
    Aw = ql ? Ow(ql) : Sw,
    Kd = Aw,
    $w = Ex,
    Tw = Au,
    Pw = te,
    Ew = xi.exports,
    Mw = $u,
    kw = Kd,
    Cw = Object.prototype,
    Iw = Cw.hasOwnProperty;
function Nw(e, t) {
    var r = Pw(e),
        n = !r && Tw(e),
        i = !r && !n && Ew(e),
        a = !r && !n && !i && kw(e),
        o = r || n || i || a,
        s = o ? $w(e.length, String) : [],
        u = s.length;
    for (var l in e)
        (t || Iw.call(e, l)) &&
            !(
                o &&
                (l == "length" ||
                    (i && (l == "offset" || l == "parent")) ||
                    (a &&
                        (l == "buffer" ||
                            l == "byteLength" ||
                            l == "byteOffset")) ||
                    Mw(l, u))
            ) &&
            s.push(l);
    return s;
}
var Rw = Nw,
    Dw = Object.prototype;
function Lw(e) {
    var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || Dw;
    return e === r;
}
var jw = Lw;
function Fw(e, t) {
    return function (r) {
        return e(t(r));
    };
}
var Bw = Fw,
    Uw = Bw,
    Hw = Uw(Object.keys, Object),
    Ww = Hw,
    zw = jw,
    Gw = Ww,
    qw = Object.prototype,
    Vw = qw.hasOwnProperty;
function Yw(e) {
    if (!zw(e)) return Gw(e);
    var t = [];
    for (var r in Object(e)) Vw.call(e, r) && r != "constructor" && t.push(r);
    return t;
}
var Xw = Yw,
    Kw = X,
    Jw = Tu;
function Zw(e) {
    return e != null && Jw(e.length) && !Kw(e);
}
var Tn = Zw,
    Qw = Rw,
    e_ = Xw,
    t_ = Tn;
function r_(e) {
    return t_(e) ? Qw(e) : e_(e);
}
var xa = r_,
    n_ = gx,
    i_ = Tx,
    a_ = xa;
function o_(e) {
    return n_(e, a_, i_);
}
var s_ = o_,
    Vl = s_,
    u_ = 1,
    l_ = Object.prototype,
    c_ = l_.hasOwnProperty;
function f_(e, t, r, n, i, a) {
    var o = r & u_,
        s = Vl(e),
        u = s.length,
        l = Vl(t),
        c = l.length;
    if (u != c && !o) return !1;
    for (var f = u; f--; ) {
        var d = s[f];
        if (!(o ? d in t : c_.call(t, d))) return !1;
    }
    var y = a.get(e),
        p = a.get(t);
    if (y && p) return y == t && p == e;
    var h = !0;
    a.set(e, t), a.set(t, e);
    for (var v = o; ++f < u; ) {
        d = s[f];
        var g = e[d],
            _ = t[d];
        if (n) var b = o ? n(_, g, d, t, e, a) : n(g, _, d, e, t, a);
        if (!(b === void 0 ? g === _ || i(g, _, r, n, a) : b)) {
            h = !1;
            break;
        }
        v || (v = d == "constructor");
    }
    if (h && !v) {
        var m = e.constructor,
            x = t.constructor;
        m != x &&
            "constructor" in e &&
            "constructor" in t &&
            !(
                typeof m == "function" &&
                m instanceof m &&
                typeof x == "function" &&
                x instanceof x
            ) &&
            (h = !1);
    }
    return a.delete(e), a.delete(t), h;
}
var h_ = f_,
    d_ = lr,
    p_ = dt,
    v_ = d_(p_, "DataView"),
    y_ = v_,
    g_ = lr,
    m_ = dt,
    b_ = g_(m_, "Promise"),
    x_ = b_,
    w_ = lr,
    __ = dt,
    S_ = w_(__, "Set"),
    Jd = S_,
    O_ = lr,
    A_ = dt,
    $_ = O_(A_, "WeakMap"),
    T_ = $_,
    Yo = y_,
    Xo = _u,
    Ko = x_,
    Jo = Jd,
    Zo = T_,
    Zd = Ut,
    Hr = Ud,
    Yl = "[object Map]",
    P_ = "[object Object]",
    Xl = "[object Promise]",
    Kl = "[object Set]",
    Jl = "[object WeakMap]",
    Zl = "[object DataView]",
    E_ = Hr(Yo),
    M_ = Hr(Xo),
    k_ = Hr(Ko),
    C_ = Hr(Jo),
    I_ = Hr(Zo),
    Yt = Zd;
((Yo && Yt(new Yo(new ArrayBuffer(1))) != Zl) ||
    (Xo && Yt(new Xo()) != Yl) ||
    (Ko && Yt(Ko.resolve()) != Xl) ||
    (Jo && Yt(new Jo()) != Kl) ||
    (Zo && Yt(new Zo()) != Jl)) &&
    (Yt = function (e) {
        var t = Zd(e),
            r = t == P_ ? e.constructor : void 0,
            n = r ? Hr(r) : "";
        if (n)
            switch (n) {
                case E_:
                    return Zl;
                case M_:
                    return Yl;
                case k_:
                    return Xl;
                case C_:
                    return Kl;
                case I_:
                    return Jl;
            }
        return t;
    });
var N_ = Yt,
    io = Hd,
    R_ = qd,
    D_ = fx,
    L_ = h_,
    Ql = N_,
    ec = te,
    tc = xi.exports,
    j_ = Kd,
    F_ = 1,
    rc = "[object Arguments]",
    nc = "[object Array]",
    Un = "[object Object]",
    B_ = Object.prototype,
    ic = B_.hasOwnProperty;
function U_(e, t, r, n, i, a) {
    var o = ec(e),
        s = ec(t),
        u = o ? nc : Ql(e),
        l = s ? nc : Ql(t);
    (u = u == rc ? Un : u), (l = l == rc ? Un : l);
    var c = u == Un,
        f = l == Un,
        d = u == l;
    if (d && tc(e)) {
        if (!tc(t)) return !1;
        (o = !0), (c = !1);
    }
    if (d && !c)
        return (
            a || (a = new io()),
            o || j_(e) ? R_(e, t, r, n, i, a) : D_(e, t, u, r, n, i, a)
        );
    if (!(r & F_)) {
        var y = c && ic.call(e, "__wrapped__"),
            p = f && ic.call(t, "__wrapped__");
        if (y || p) {
            var h = y ? e.value() : e,
                v = p ? t.value() : t;
            return a || (a = new io()), i(h, v, r, n, a);
        }
    }
    return d ? (a || (a = new io()), L_(e, t, r, n, i, a)) : !1;
}
var H_ = U_,
    W_ = H_,
    ac = Ht;
function Qd(e, t, r, n, i) {
    return e === t
        ? !0
        : e == null || t == null || (!ac(e) && !ac(t))
        ? e !== e && t !== t
        : W_(e, t, r, n, Qd, i);
}
var Pu = Qd,
    z_ = Hd,
    G_ = Pu,
    q_ = 1,
    V_ = 2;
function Y_(e, t, r, n) {
    var i = r.length,
        a = i,
        o = !n;
    if (e == null) return !a;
    for (e = Object(e); i--; ) {
        var s = r[i];
        if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
    }
    for (; ++i < a; ) {
        s = r[i];
        var u = s[0],
            l = e[u],
            c = s[1];
        if (o && s[2]) {
            if (l === void 0 && !(u in e)) return !1;
        } else {
            var f = new z_();
            if (n) var d = n(l, c, u, e, t, f);
            if (!(d === void 0 ? G_(c, l, q_ | V_, n, f) : d)) return !1;
        }
    }
    return !0;
}
var X_ = Y_,
    K_ = Ge;
function J_(e) {
    return e === e && !K_(e);
}
var ep = J_,
    Z_ = ep,
    Q_ = xa;
function eS(e) {
    for (var t = Q_(e), r = t.length; r--; ) {
        var n = t[r],
            i = e[n];
        t[r] = [n, i, Z_(i)];
    }
    return t;
}
var tS = eS;
function rS(e, t) {
    return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
    };
}
var tp = rS,
    nS = X_,
    iS = tS,
    aS = tp;
function oS(e) {
    var t = iS(e);
    return t.length == 1 && t[0][2]
        ? aS(t[0][0], t[0][1])
        : function (r) {
              return r === e || nS(r, e, t);
          };
}
var sS = oS,
    uS = Ut,
    lS = Ht,
    cS = "[object Symbol]";
function fS(e) {
    return typeof e == "symbol" || (lS(e) && uS(e) == cS);
}
var Wr = fS,
    hS = te,
    dS = Wr,
    pS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    vS = /^\w*$/;
function yS(e, t) {
    if (hS(e)) return !1;
    var r = typeof e;
    return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        dS(e)
        ? !0
        : vS.test(e) || !pS.test(e) || (t != null && e in Object(t));
}
var Eu = yS,
    rp = Su,
    gS = "Expected a function";
function Mu(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(gS);
    var r = function () {
        var n = arguments,
            i = t ? t.apply(this, n) : n[0],
            a = r.cache;
        if (a.has(i)) return a.get(i);
        var o = e.apply(this, n);
        return (r.cache = a.set(i, o) || a), o;
    };
    return (r.cache = new (Mu.Cache || rp)()), r;
}
Mu.Cache = rp;
var mS = Mu,
    bS = mS,
    xS = 500;
function wS(e) {
    var t = bS(e, function (n) {
            return r.size === xS && r.clear(), n;
        }),
        r = t.cache;
    return t;
}
var _S = wS,
    SS = _S,
    OS =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    AS = /\\(\\)?/g,
    $S = SS(function (e) {
        var t = [];
        return (
            e.charCodeAt(0) === 46 && t.push(""),
            e.replace(OS, function (r, n, i, a) {
                t.push(i ? a.replace(AS, "$1") : n || r);
            }),
            t
        );
    }),
    TS = $S;
function PS(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
    return i;
}
var ku = PS,
    oc = $n,
    ES = ku,
    MS = te,
    kS = Wr,
    CS = 1 / 0,
    sc = oc ? oc.prototype : void 0,
    uc = sc ? sc.toString : void 0;
function np(e) {
    if (typeof e == "string") return e;
    if (MS(e)) return ES(e, np) + "";
    if (kS(e)) return uc ? uc.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -CS ? "-0" : t;
}
var IS = np,
    NS = IS;
function RS(e) {
    return e == null ? "" : NS(e);
}
var ip = RS,
    DS = te,
    LS = Eu,
    jS = TS,
    FS = ip;
function BS(e, t) {
    return DS(e) ? e : LS(e, t) ? [e] : jS(FS(e));
}
var ap = BS,
    US = Wr,
    HS = 1 / 0;
function WS(e) {
    if (typeof e == "string" || US(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -HS ? "-0" : t;
}
var wa = WS,
    zS = ap,
    GS = wa;
function qS(e, t) {
    t = zS(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[GS(t[r++])];
    return r && r == n ? e : void 0;
}
var Cu = qS,
    VS = Cu;
function YS(e, t, r) {
    var n = e == null ? void 0 : VS(e, t);
    return n === void 0 ? r : n;
}
var Ae = YS;
function XS(e, t) {
    return e != null && t in Object(e);
}
var KS = XS,
    JS = ap,
    ZS = Au,
    QS = te,
    eO = $u,
    tO = Tu,
    rO = wa;
function nO(e, t, r) {
    t = JS(t, e);
    for (var n = -1, i = t.length, a = !1; ++n < i; ) {
        var o = rO(t[n]);
        if (!(a = e != null && r(e, o))) break;
        e = e[o];
    }
    return a || ++n != i
        ? a
        : ((i = e == null ? 0 : e.length),
          !!i && tO(i) && eO(o, i) && (QS(e) || ZS(e)));
}
var iO = nO,
    aO = KS,
    oO = iO;
function sO(e, t) {
    return e != null && oO(e, t, aO);
}
var uO = sO,
    lO = Pu,
    cO = Ae,
    fO = uO,
    hO = Eu,
    dO = ep,
    pO = tp,
    vO = wa,
    yO = 1,
    gO = 2;
function mO(e, t) {
    return hO(e) && dO(t)
        ? pO(vO(e), t)
        : function (r) {
              var n = cO(r, e);
              return n === void 0 && n === t ? fO(r, e) : lO(t, n, yO | gO);
          };
}
var bO = mO;
function xO(e) {
    return e;
}
var zr = xO;
function wO(e) {
    return function (t) {
        return t == null ? void 0 : t[e];
    };
}
var _O = wO,
    SO = Cu;
function OO(e) {
    return function (t) {
        return SO(t, e);
    };
}
var AO = OO,
    $O = _O,
    TO = AO,
    PO = Eu,
    EO = wa;
function MO(e) {
    return PO(e) ? $O(EO(e)) : TO(e);
}
var kO = MO,
    CO = sS,
    IO = bO,
    NO = zr,
    RO = te,
    DO = kO;
function LO(e) {
    return typeof e == "function"
        ? e
        : e == null
        ? NO
        : typeof e == "object"
        ? RO(e)
            ? IO(e[0], e[1])
            : CO(e)
        : DO(e);
}
var Wt = LO;
function jO(e, t, r, n) {
    for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
        if (t(e[a], a, e)) return a;
    return -1;
}
var op = jO;
function FO(e) {
    return e !== e;
}
var BO = FO;
function UO(e, t, r) {
    for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
    return -1;
}
var HO = UO,
    WO = op,
    zO = BO,
    GO = HO;
function qO(e, t, r) {
    return t === t ? GO(e, t, r) : WO(e, zO, r);
}
var VO = qO,
    YO = VO;
function XO(e, t) {
    var r = e == null ? 0 : e.length;
    return !!r && YO(e, t, 0) > -1;
}
var KO = XO;
function JO(e, t, r) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
        if (r(t, e[n])) return !0;
    return !1;
}
var ZO = JO;
function QO() {}
var eA = QO,
    ao = Jd,
    tA = eA,
    rA = Ou,
    nA = 1 / 0,
    iA =
        ao && 1 / rA(new ao([, -0]))[1] == nA
            ? function (e) {
                  return new ao(e);
              }
            : tA,
    aA = iA,
    oA = Wd,
    sA = KO,
    uA = ZO,
    lA = Gd,
    cA = aA,
    fA = Ou,
    hA = 200;
function dA(e, t, r) {
    var n = -1,
        i = sA,
        a = e.length,
        o = !0,
        s = [],
        u = s;
    if (r) (o = !1), (i = uA);
    else if (a >= hA) {
        var l = t ? null : cA(e);
        if (l) return fA(l);
        (o = !1), (i = lA), (u = new oA());
    } else u = t ? [] : s;
    e: for (; ++n < a; ) {
        var c = e[n],
            f = t ? t(c) : c;
        if (((c = r || c !== 0 ? c : 0), o && f === f)) {
            for (var d = u.length; d--; ) if (u[d] === f) continue e;
            t && u.push(f), s.push(c);
        } else i(u, f, r) || (u !== s && u.push(f), s.push(c));
    }
    return s;
}
var pA = dA,
    vA = Wt,
    yA = pA;
function gA(e, t) {
    return e && e.length ? yA(e, vA(t)) : [];
}
var wi = gA;
function mA(e, t, r) {
    var n = -1,
        i = e.length;
    t < 0 && (t = -t > i ? 0 : i + t),
        (r = r > i ? i : r),
        r < 0 && (r += i),
        (i = t > r ? 0 : (r - t) >>> 0),
        (t >>>= 0);
    for (var a = Array(i); ++n < i; ) a[n] = e[n + t];
    return a;
}
var bA = mA,
    xA = bA;
function wA(e, t, r) {
    var n = e.length;
    return (r = r === void 0 ? n : r), !t && r >= n ? e : xA(e, t, r);
}
var _A = wA,
    SA = "\\ud800-\\udfff",
    OA = "\\u0300-\\u036f",
    AA = "\\ufe20-\\ufe2f",
    $A = "\\u20d0-\\u20ff",
    TA = OA + AA + $A,
    PA = "\\ufe0e\\ufe0f",
    EA = "\\u200d",
    MA = RegExp("[" + EA + SA + TA + PA + "]");
function kA(e) {
    return MA.test(e);
}
var sp = kA;
function CA(e) {
    return e.split("");
}
var IA = CA,
    up = "\\ud800-\\udfff",
    NA = "\\u0300-\\u036f",
    RA = "\\ufe20-\\ufe2f",
    DA = "\\u20d0-\\u20ff",
    LA = NA + RA + DA,
    jA = "\\ufe0e\\ufe0f",
    FA = "[" + up + "]",
    Qo = "[" + LA + "]",
    es = "\\ud83c[\\udffb-\\udfff]",
    BA = "(?:" + Qo + "|" + es + ")",
    lp = "[^" + up + "]",
    cp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    fp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    UA = "\\u200d",
    hp = BA + "?",
    dp = "[" + jA + "]?",
    HA = "(?:" + UA + "(?:" + [lp, cp, fp].join("|") + ")" + dp + hp + ")*",
    WA = dp + hp + HA,
    zA = "(?:" + [lp + Qo + "?", Qo, cp, fp, FA].join("|") + ")",
    GA = RegExp(es + "(?=" + es + ")|" + zA + WA, "g");
function qA(e) {
    return e.match(GA) || [];
}
var VA = qA,
    YA = IA,
    XA = sp,
    KA = VA;
function JA(e) {
    return XA(e) ? KA(e) : YA(e);
}
var ZA = JA,
    QA = _A,
    e$ = sp,
    t$ = ZA,
    r$ = ip;
function n$(e) {
    return function (t) {
        t = r$(t);
        var r = e$(t) ? t$(t) : void 0,
            n = r ? r[0] : t.charAt(0),
            i = r ? QA(r, 1).join("") : t.slice(1);
        return n[e]() + i;
    };
}
var i$ = n$,
    a$ = i$,
    o$ = a$("toUpperCase"),
    _a = o$;
const ts = Math.PI,
    rs = 2 * ts,
    Xt = 1e-6,
    s$ = rs - Xt;
function ns() {
    (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
}
function Sa() {
    return new ns();
}
ns.prototype = Sa.prototype = {
    constructor: ns,
    moveTo: function (e, t) {
        this._ +=
            "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
    },
    closePath: function () {
        this._x1 !== null &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
    },
    lineTo: function (e, t) {
        this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
    },
    quadraticCurveTo: function (e, t, r, n) {
        this._ +=
            "Q" + +e + "," + +t + "," + (this._x1 = +r) + "," + (this._y1 = +n);
    },
    bezierCurveTo: function (e, t, r, n, i, a) {
        this._ +=
            "C" +
            +e +
            "," +
            +t +
            "," +
            +r +
            "," +
            +n +
            "," +
            (this._x1 = +i) +
            "," +
            (this._y1 = +a);
    },
    arcTo: function (e, t, r, n, i) {
        (e = +e), (t = +t), (r = +r), (n = +n), (i = +i);
        var a = this._x1,
            o = this._y1,
            s = r - e,
            u = n - t,
            l = a - e,
            c = o - t,
            f = l * l + c * c;
        if (i < 0) throw new Error("negative radius: " + i);
        if (this._x1 === null)
            this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
        else if (f > Xt)
            if (!(Math.abs(c * s - u * l) > Xt) || !i)
                this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
            else {
                var d = r - a,
                    y = n - o,
                    p = s * s + u * u,
                    h = d * d + y * y,
                    v = Math.sqrt(p),
                    g = Math.sqrt(f),
                    _ =
                        i *
                        Math.tan(
                            (ts - Math.acos((p + f - h) / (2 * v * g))) / 2
                        ),
                    b = _ / g,
                    m = _ / v;
                Math.abs(b - 1) > Xt &&
                    (this._ += "L" + (e + b * l) + "," + (t + b * c)),
                    (this._ +=
                        "A" +
                        i +
                        "," +
                        i +
                        ",0,0," +
                        +(c * d > l * y) +
                        "," +
                        (this._x1 = e + m * s) +
                        "," +
                        (this._y1 = t + m * u));
            }
    },
    arc: function (e, t, r, n, i, a) {
        (e = +e), (t = +t), (r = +r), (a = !!a);
        var o = r * Math.cos(n),
            s = r * Math.sin(n),
            u = e + o,
            l = t + s,
            c = 1 ^ a,
            f = a ? n - i : i - n;
        if (r < 0) throw new Error("negative radius: " + r);
        this._x1 === null
            ? (this._ += "M" + u + "," + l)
            : (Math.abs(this._x1 - u) > Xt || Math.abs(this._y1 - l) > Xt) &&
              (this._ += "L" + u + "," + l),
            r &&
                (f < 0 && (f = (f % rs) + rs),
                f > s$
                    ? (this._ +=
                          "A" +
                          r +
                          "," +
                          r +
                          ",0,1," +
                          c +
                          "," +
                          (e - o) +
                          "," +
                          (t - s) +
                          "A" +
                          r +
                          "," +
                          r +
                          ",0,1," +
                          c +
                          "," +
                          (this._x1 = u) +
                          "," +
                          (this._y1 = l))
                    : f > Xt &&
                      (this._ +=
                          "A" +
                          r +
                          "," +
                          r +
                          ",0," +
                          +(f >= ts) +
                          "," +
                          c +
                          "," +
                          (this._x1 = e + r * Math.cos(i)) +
                          "," +
                          (this._y1 = t + r * Math.sin(i))));
    },
    rect: function (e, t, r, n) {
        this._ +=
            "M" +
            (this._x0 = this._x1 = +e) +
            "," +
            (this._y0 = this._y1 = +t) +
            "h" +
            +r +
            "v" +
            +n +
            "h" +
            -r +
            "Z";
    },
    toString: function () {
        return this._;
    },
};
function fe(e) {
    return function () {
        return e;
    };
}
var _i = Math.PI,
    Oa = 2 * _i;
function Iu(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function pp(e) {
    this._context = e;
}
pp.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        this._point = 0;
    },
    lineEnd: function () {
        (this._line || (this._line !== 0 && this._point === 1)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
    },
    point: function (e, t) {
        switch (((e = +e), (t = +t), this._point)) {
            case 0:
                (this._point = 1),
                    this._line
                        ? this._context.lineTo(e, t)
                        : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(e, t);
                break;
        }
    },
};
function Aa(e) {
    return new pp(e);
}
function vp(e) {
    return e[0];
}
function yp(e) {
    return e[1];
}
function gp(e, t) {
    var r = fe(!0),
        n = null,
        i = Aa,
        a = null;
    (e = typeof e == "function" ? e : e === void 0 ? vp : fe(e)),
        (t = typeof t == "function" ? t : t === void 0 ? yp : fe(t));
    function o(s) {
        var u,
            l = (s = Iu(s)).length,
            c,
            f = !1,
            d;
        for (n == null && (a = i((d = Sa()))), u = 0; u <= l; ++u)
            !(u < l && r((c = s[u]), u, s)) === f &&
                ((f = !f) ? a.lineStart() : a.lineEnd()),
                f && a.point(+e(c, u, s), +t(c, u, s));
        if (d) return (a = null), d + "" || null;
    }
    return (
        (o.x = function (s) {
            return arguments.length
                ? ((e = typeof s == "function" ? s : fe(+s)), o)
                : e;
        }),
        (o.y = function (s) {
            return arguments.length
                ? ((t = typeof s == "function" ? s : fe(+s)), o)
                : t;
        }),
        (o.defined = function (s) {
            return arguments.length
                ? ((r = typeof s == "function" ? s : fe(!!s)), o)
                : r;
        }),
        (o.curve = function (s) {
            return arguments.length ? ((i = s), n != null && (a = i(n)), o) : i;
        }),
        (o.context = function (s) {
            return arguments.length
                ? (s == null ? (n = a = null) : (a = i((n = s))), o)
                : n;
        }),
        o
    );
}
function Hn(e, t, r) {
    var n = null,
        i = fe(!0),
        a = null,
        o = Aa,
        s = null;
    (e = typeof e == "function" ? e : e === void 0 ? vp : fe(+e)),
        (t = typeof t == "function" ? t : fe(t === void 0 ? 0 : +t)),
        (r = typeof r == "function" ? r : r === void 0 ? yp : fe(+r));
    function u(c) {
        var f,
            d,
            y,
            p = (c = Iu(c)).length,
            h,
            v = !1,
            g,
            _ = new Array(p),
            b = new Array(p);
        for (a == null && (s = o((g = Sa()))), f = 0; f <= p; ++f) {
            if (!(f < p && i((h = c[f]), f, c)) === v)
                if ((v = !v)) (d = f), s.areaStart(), s.lineStart();
                else {
                    for (s.lineEnd(), s.lineStart(), y = f - 1; y >= d; --y)
                        s.point(_[y], b[y]);
                    s.lineEnd(), s.areaEnd();
                }
            v &&
                ((_[f] = +e(h, f, c)),
                (b[f] = +t(h, f, c)),
                s.point(n ? +n(h, f, c) : _[f], r ? +r(h, f, c) : b[f]));
        }
        if (g) return (s = null), g + "" || null;
    }
    function l() {
        return gp().defined(i).curve(o).context(a);
    }
    return (
        (u.x = function (c) {
            return arguments.length
                ? ((e = typeof c == "function" ? c : fe(+c)), (n = null), u)
                : e;
        }),
        (u.x0 = function (c) {
            return arguments.length
                ? ((e = typeof c == "function" ? c : fe(+c)), u)
                : e;
        }),
        (u.x1 = function (c) {
            return arguments.length
                ? ((n = c == null ? null : typeof c == "function" ? c : fe(+c)),
                  u)
                : n;
        }),
        (u.y = function (c) {
            return arguments.length
                ? ((t = typeof c == "function" ? c : fe(+c)), (r = null), u)
                : t;
        }),
        (u.y0 = function (c) {
            return arguments.length
                ? ((t = typeof c == "function" ? c : fe(+c)), u)
                : t;
        }),
        (u.y1 = function (c) {
            return arguments.length
                ? ((r = c == null ? null : typeof c == "function" ? c : fe(+c)),
                  u)
                : r;
        }),
        (u.lineX0 = u.lineY0 =
            function () {
                return l().x(e).y(t);
            }),
        (u.lineY1 = function () {
            return l().x(e).y(r);
        }),
        (u.lineX1 = function () {
            return l().x(n).y(t);
        }),
        (u.defined = function (c) {
            return arguments.length
                ? ((i = typeof c == "function" ? c : fe(!!c)), u)
                : i;
        }),
        (u.curve = function (c) {
            return arguments.length ? ((o = c), a != null && (s = o(a)), u) : o;
        }),
        (u.context = function (c) {
            return arguments.length
                ? (c == null ? (a = s = null) : (s = o((a = c))), u)
                : a;
        }),
        u
    );
}
const Nu = {
        draw: function (e, t) {
            var r = Math.sqrt(t / _i);
            e.moveTo(r, 0), e.arc(0, 0, r, 0, Oa);
        },
    },
    u$ = {
        draw: function (e, t) {
            var r = Math.sqrt(t / 5) / 2;
            e.moveTo(-3 * r, -r),
                e.lineTo(-r, -r),
                e.lineTo(-r, -3 * r),
                e.lineTo(r, -3 * r),
                e.lineTo(r, -r),
                e.lineTo(3 * r, -r),
                e.lineTo(3 * r, r),
                e.lineTo(r, r),
                e.lineTo(r, 3 * r),
                e.lineTo(-r, 3 * r),
                e.lineTo(-r, r),
                e.lineTo(-3 * r, r),
                e.closePath();
        },
    };
var mp = Math.sqrt(1 / 3),
    l$ = mp * 2;
const c$ = {
    draw: function (e, t) {
        var r = Math.sqrt(t / l$),
            n = r * mp;
        e.moveTo(0, -r),
            e.lineTo(n, 0),
            e.lineTo(0, r),
            e.lineTo(-n, 0),
            e.closePath();
    },
};
var f$ = 0.8908130915292852,
    bp = Math.sin(_i / 10) / Math.sin((7 * _i) / 10),
    h$ = Math.sin(Oa / 10) * bp,
    d$ = -Math.cos(Oa / 10) * bp;
const p$ = {
        draw: function (e, t) {
            var r = Math.sqrt(t * f$),
                n = h$ * r,
                i = d$ * r;
            e.moveTo(0, -r), e.lineTo(n, i);
            for (var a = 1; a < 5; ++a) {
                var o = (Oa * a) / 5,
                    s = Math.cos(o),
                    u = Math.sin(o);
                e.lineTo(u * r, -s * r), e.lineTo(s * n - u * i, u * n + s * i);
            }
            e.closePath();
        },
    },
    v$ = {
        draw: function (e, t) {
            var r = Math.sqrt(t),
                n = -r / 2;
            e.rect(n, n, r, r);
        },
    };
var oo = Math.sqrt(3);
const y$ = {
    draw: function (e, t) {
        var r = -Math.sqrt(t / (oo * 3));
        e.moveTo(0, r * 2),
            e.lineTo(-oo * r, -r),
            e.lineTo(oo * r, -r),
            e.closePath();
    },
};
var Ve = -0.5,
    Ye = Math.sqrt(3) / 2,
    is = 1 / Math.sqrt(12),
    g$ = (is / 2 + 1) * 3;
const m$ = {
    draw: function (e, t) {
        var r = Math.sqrt(t / g$),
            n = r / 2,
            i = r * is,
            a = n,
            o = r * is + r,
            s = -a,
            u = o;
        e.moveTo(n, i),
            e.lineTo(a, o),
            e.lineTo(s, u),
            e.lineTo(Ve * n - Ye * i, Ye * n + Ve * i),
            e.lineTo(Ve * a - Ye * o, Ye * a + Ve * o),
            e.lineTo(Ve * s - Ye * u, Ye * s + Ve * u),
            e.lineTo(Ve * n + Ye * i, Ve * i - Ye * n),
            e.lineTo(Ve * a + Ye * o, Ve * o - Ye * a),
            e.lineTo(Ve * s + Ye * u, Ve * u - Ye * s),
            e.closePath();
    },
};
function b$(e, t) {
    var r = null;
    (e = typeof e == "function" ? e : fe(e || Nu)),
        (t = typeof t == "function" ? t : fe(t === void 0 ? 64 : +t));
    function n() {
        var i;
        if (
            (r || (r = i = Sa()),
            e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
            i)
        )
            return (r = null), i + "" || null;
    }
    return (
        (n.type = function (i) {
            return arguments.length
                ? ((e = typeof i == "function" ? i : fe(i)), n)
                : e;
        }),
        (n.size = function (i) {
            return arguments.length
                ? ((t = typeof i == "function" ? i : fe(+i)), n)
                : t;
        }),
        (n.context = function (i) {
            return arguments.length ? ((r = i == null ? null : i), n) : r;
        }),
        n
    );
}
function Si() {}
function Oi(e, t, r) {
    e._context.bezierCurveTo(
        (2 * e._x0 + e._x1) / 3,
        (2 * e._y0 + e._y1) / 3,
        (e._x0 + 2 * e._x1) / 3,
        (e._y0 + 2 * e._y1) / 3,
        (e._x0 + 4 * e._x1 + t) / 6,
        (e._y0 + 4 * e._y1 + r) / 6
    );
}
function xp(e) {
    this._context = e;
}
xp.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
        switch (this._point) {
            case 3:
                Oi(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
        }
        (this._line || (this._line !== 0 && this._point === 1)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
    },
    point: function (e, t) {
        switch (((e = +e), (t = +t), this._point)) {
            case 0:
                (this._point = 1),
                    this._line
                        ? this._context.lineTo(e, t)
                        : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                (this._point = 3),
                    this._context.lineTo(
                        (5 * this._x0 + this._x1) / 6,
                        (5 * this._y0 + this._y1) / 6
                    );
            default:
                Oi(this, e, t);
                break;
        }
        (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t);
    },
};
function x$(e) {
    return new xp(e);
}
function wp(e) {
    this._context = e;
}
wp.prototype = {
    areaStart: Si,
    areaEnd: Si,
    lineStart: function () {
        (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
                NaN),
            (this._point = 0);
    },
    lineEnd: function () {
        switch (this._point) {
            case 1: {
                this._context.moveTo(this._x2, this._y2),
                    this._context.closePath();
                break;
            }
            case 2: {
                this._context.moveTo(
                    (this._x2 + 2 * this._x3) / 3,
                    (this._y2 + 2 * this._y3) / 3
                ),
                    this._context.lineTo(
                        (this._x3 + 2 * this._x2) / 3,
                        (this._y3 + 2 * this._y2) / 3
                    ),
                    this._context.closePath();
                break;
            }
            case 3: {
                this.point(this._x2, this._y2),
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4);
                break;
            }
        }
    },
    point: function (e, t) {
        switch (((e = +e), (t = +t), this._point)) {
            case 0:
                (this._point = 1), (this._x2 = e), (this._y2 = t);
                break;
            case 1:
                (this._point = 2), (this._x3 = e), (this._y3 = t);
                break;
            case 2:
                (this._point = 3),
                    (this._x4 = e),
                    (this._y4 = t),
                    this._context.moveTo(
                        (this._x0 + 4 * this._x1 + e) / 6,
                        (this._y0 + 4 * this._y1 + t) / 6
                    );
                break;
            default:
                Oi(this, e, t);
                break;
        }
        (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t);
    },
};
function w$(e) {
    return new wp(e);
}
function _p(e) {
    this._context = e;
}
_p.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
        (this._line || (this._line !== 0 && this._point === 3)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
    },
    point: function (e, t) {
        switch (((e = +e), (t = +t), this._point)) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + e) / 6,
                    n = (this._y0 + 4 * this._y1 + t) / 6;
                this._line
                    ? this._context.lineTo(r, n)
                    : this._context.moveTo(r, n);
                break;
            case 3:
                this._point = 4;
            default:
                Oi(this, e, t);
                break;
        }
        (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t);
    },
};
function _$(e) {
    return new _p(e);
}
function Sp(e) {
    this._context = e;
}
Sp.prototype = {
    areaStart: Si,
    areaEnd: Si,
    lineStart: function () {
        this._point = 0;
    },
    lineEnd: function () {
        this._point && this._context.closePath();
    },
    point: function (e, t) {
        (e = +e),
            (t = +t),
            this._point
                ? this._context.lineTo(e, t)
                : ((this._point = 1), this._context.moveTo(e, t));
    },
};
function S$(e) {
    return new Sp(e);
}
function lc(e) {
    return e < 0 ? -1 : 1;
}
function cc(e, t, r) {
    var n = e._x1 - e._x0,
        i = t - e._x1,
        a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
        o = (r - e._y1) / (i || (n < 0 && -0)),
        s = (a * i + o * n) / (n + i);
    return (
        (lc(a) + lc(o)) *
            Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
    );
}
function fc(e, t) {
    var r = e._x1 - e._x0;
    return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function so(e, t, r) {
    var n = e._x0,
        i = e._y0,
        a = e._x1,
        o = e._y1,
        s = (a - n) / 3;
    e._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function Ai(e) {
    this._context = e;
}
Ai.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
            (this._point = 0);
    },
    lineEnd: function () {
        switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                so(this, this._t0, fc(this, this._t0));
                break;
        }
        (this._line || (this._line !== 0 && this._point === 1)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
    },
    point: function (e, t) {
        var r = NaN;
        if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
            switch (this._point) {
                case 0:
                    (this._point = 1),
                        this._line
                            ? this._context.lineTo(e, t)
                            : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    (this._point = 3),
                        so(this, fc(this, (r = cc(this, e, t))), r);
                    break;
                default:
                    so(this, this._t0, (r = cc(this, e, t)));
                    break;
            }
            (this._x0 = this._x1),
                (this._x1 = e),
                (this._y0 = this._y1),
                (this._y1 = t),
                (this._t0 = r);
        }
    },
};
function Op(e) {
    this._context = new Ap(e);
}
(Op.prototype = Object.create(Ai.prototype)).point = function (e, t) {
    Ai.prototype.point.call(this, t, e);
};
function Ap(e) {
    this._context = e;
}
Ap.prototype = {
    moveTo: function (e, t) {
        this._context.moveTo(t, e);
    },
    closePath: function () {
        this._context.closePath();
    },
    lineTo: function (e, t) {
        this._context.lineTo(t, e);
    },
    bezierCurveTo: function (e, t, r, n, i, a) {
        this._context.bezierCurveTo(t, e, n, r, a, i);
    },
};
function O$(e) {
    return new Ai(e);
}
function A$(e) {
    return new Op(e);
}
function $p(e) {
    this._context = e;
}
$p.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        (this._x = []), (this._y = []);
    },
    lineEnd: function () {
        var e = this._x,
            t = this._y,
            r = e.length;
        if (r)
            if (
                (this._line
                    ? this._context.lineTo(e[0], t[0])
                    : this._context.moveTo(e[0], t[0]),
                r === 2)
            )
                this._context.lineTo(e[1], t[1]);
            else
                for (var n = hc(e), i = hc(t), a = 0, o = 1; o < r; ++a, ++o)
                    this._context.bezierCurveTo(
                        n[0][a],
                        i[0][a],
                        n[1][a],
                        i[1][a],
                        e[o],
                        t[o]
                    );
        (this._line || (this._line !== 0 && r === 1)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null);
    },
    point: function (e, t) {
        this._x.push(+e), this._y.push(+t);
    },
};
function hc(e) {
    var t,
        r = e.length - 1,
        n,
        i = new Array(r),
        a = new Array(r),
        o = new Array(r);
    for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
        (i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]);
    for (
        i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
        t < r;
        ++t
    )
        (n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]);
    for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
        i[t] = (o[t] - i[t + 1]) / a[t];
    for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
        a[t] = 2 * e[t + 1] - i[t + 1];
    return [i, a];
}
function $$(e) {
    return new $p(e);
}
function $a(e, t) {
    (this._context = e), (this._t = t);
}
$a.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        (this._x = this._y = NaN), (this._point = 0);
    },
    lineEnd: function () {
        0 < this._t &&
            this._t < 1 &&
            this._point === 2 &&
            this._context.lineTo(this._x, this._y),
            (this._line || (this._line !== 0 && this._point === 1)) &&
                this._context.closePath(),
            this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
    },
    point: function (e, t) {
        switch (((e = +e), (t = +t), this._point)) {
            case 0:
                (this._point = 1),
                    this._line
                        ? this._context.lineTo(e, t)
                        : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
            default: {
                if (this._t <= 0)
                    this._context.lineTo(this._x, t),
                        this._context.lineTo(e, t);
                else {
                    var r = this._x * (1 - this._t) + e * this._t;
                    this._context.lineTo(r, this._y),
                        this._context.lineTo(r, t);
                }
                break;
            }
        }
        (this._x = e), (this._y = t);
    },
};
function T$(e) {
    return new $a(e, 0.5);
}
function P$(e) {
    return new $a(e, 0);
}
function E$(e) {
    return new $a(e, 1);
}
function Tr(e, t) {
    if ((o = e.length) > 1)
        for (var r = 1, n, i, a = e[t[0]], o, s = a.length; r < o; ++r)
            for (i = a, a = e[t[r]], n = 0; n < s; ++n)
                a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function as(e) {
    for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
    return r;
}
function M$(e, t) {
    return e[t];
}
function k$(e) {
    const t = [];
    return (t.key = e), t;
}
function C$() {
    var e = fe([]),
        t = as,
        r = Tr,
        n = M$;
    function i(a) {
        var o = Array.from(e.apply(this, arguments), k$),
            s,
            u = o.length,
            l = -1,
            c;
        for (const f of a)
            for (s = 0, ++l; s < u; ++s)
                (o[s][l] = [0, +n(f, o[s].key, l, a)]).data = f;
        for (s = 0, c = Iu(t(o)); s < u; ++s) o[c[s]].index = s;
        return r(o, c), o;
    }
    return (
        (i.keys = function (a) {
            return arguments.length
                ? ((e = typeof a == "function" ? a : fe(Array.from(a))), i)
                : e;
        }),
        (i.value = function (a) {
            return arguments.length
                ? ((n = typeof a == "function" ? a : fe(+a)), i)
                : n;
        }),
        (i.order = function (a) {
            return arguments.length
                ? ((t =
                      a == null
                          ? as
                          : typeof a == "function"
                          ? a
                          : fe(Array.from(a))),
                  i)
                : t;
        }),
        (i.offset = function (a) {
            return arguments.length ? ((r = a == null ? Tr : a), i) : r;
        }),
        i
    );
}
function I$(e, t) {
    if ((n = e.length) > 0) {
        for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
            for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
            if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
        }
        Tr(e, t);
    }
}
function N$(e, t) {
    if ((i = e.length) > 0) {
        for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
            for (var o = 0, s = 0; o < i; ++o) s += e[o][r][1] || 0;
            n[r][1] += n[r][0] = -s / 2;
        }
        Tr(e, t);
    }
}
function R$(e, t) {
    if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
        for (var r = 0, n = 1, i, a, o; n < a; ++n) {
            for (var s = 0, u = 0, l = 0; s < o; ++s) {
                for (
                    var c = e[t[s]],
                        f = c[n][1] || 0,
                        d = c[n - 1][1] || 0,
                        y = (f - d) / 2,
                        p = 0;
                    p < s;
                    ++p
                ) {
                    var h = e[t[p]],
                        v = h[n][1] || 0,
                        g = h[n - 1][1] || 0;
                    y += v - g;
                }
                (u += f), (l += y * f);
            }
            (i[n - 1][1] += i[n - 1][0] = r), u && (r -= l / u);
        }
        (i[n - 1][1] += i[n - 1][0] = r), Tr(e, t);
    }
}
function Zn(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (Zn = function (r) {
                  return typeof r;
              })
            : (Zn = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        Zn(e)
    );
}
function D$(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function dc(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function L$(e, t, r) {
    return t && dc(e.prototype, t), r && dc(e, r), e;
}
function j$(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && os(e, t);
}
function os(e, t) {
    return (
        (os =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        os(e, t)
    );
}
function F$(e) {
    var t = H$();
    return function () {
        var n = $i(e),
            i;
        if (t) {
            var a = $i(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return B$(this, i);
    };
}
function B$(e, t) {
    return t && (Zn(t) === "object" || typeof t == "function") ? t : U$(e);
}
function U$(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function H$() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function $i(e) {
    return (
        ($i = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        $i(e)
    );
}
var Tp = {
        symbolCircle: Nu,
        symbolCross: u$,
        symbolDiamond: c$,
        symbolSquare: v$,
        symbolStar: p$,
        symbolTriangle: y$,
        symbolWye: m$,
    },
    W$ = Math.PI / 180,
    z$ = function (t) {
        var r = "symbol".concat(_a(t));
        return Tp[r] || Nu;
    },
    G$ = function (t, r, n) {
        if (r === "area") return t;
        switch (n) {
            case "cross":
                return (5 * t * t) / 9;
            case "diamond":
                return (0.5 * t * t) / Math.sqrt(3);
            case "square":
                return t * t;
            case "star": {
                var i = 18 * W$;
                return (
                    1.25 *
                    t *
                    t *
                    (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
                );
            }
            case "triangle":
                return (Math.sqrt(3) * t * t) / 4;
            case "wye":
                return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
            default:
                return (Math.PI * t * t) / 4;
        }
    },
    Ru = (function (e) {
        j$(r, e);
        var t = F$(r);
        function r() {
            return D$(this, r), t.apply(this, arguments);
        }
        return (
            L$(r, [
                {
                    key: "getPath",
                    value: function () {
                        var i = this.props,
                            a = i.size,
                            o = i.sizeType,
                            s = i.type,
                            u = z$(s),
                            l = b$().type(u).size(G$(a, o, s));
                        return l();
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var i = this.props,
                            a = i.className,
                            o = i.cx,
                            s = i.cy,
                            u = i.size;
                        return o === +o && s === +s && u === +u
                            ? O("path", {
                                  ...ae(this.props, !0),
                                  className: pe("recharts-symbols", a),
                                  transform: "translate("
                                      .concat(o, ", ")
                                      .concat(s, ")"),
                                  d: this.getPath(),
                              })
                            : null;
                    },
                },
            ]),
            r
        );
    })(T.exports.PureComponent);
Ru.defaultProps = { type: "circle", size: 64, sizeType: "area" };
Ru.registerSymbol = function (e, t) {
    Tp["symbol".concat(_a(e))] = t;
};
function Qn(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (Qn = function (r) {
                  return typeof r;
              })
            : (Qn = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        Qn(e)
    );
}
function pc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function q$(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? pc(Object(r), !0).forEach(function (n) {
                  ss(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : pc(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function ss(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function V$(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function vc(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function Y$(e, t, r) {
    return t && vc(e.prototype, t), r && vc(e, r), e;
}
function X$(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && us(e, t);
}
function us(e, t) {
    return (
        (us =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        us(e, t)
    );
}
function K$(e) {
    var t = Q$();
    return function () {
        var n = Ti(e),
            i;
        if (t) {
            var a = Ti(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return J$(this, i);
    };
}
function J$(e, t) {
    return t && (Qn(t) === "object" || typeof t == "function") ? t : Z$(e);
}
function Z$(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Q$() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function Ti(e) {
    return (
        (Ti = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ti(e)
    );
}
var Xe = 32,
    Du = (function (e) {
        X$(r, e);
        var t = K$(r);
        function r() {
            return V$(this, r), t.apply(this, arguments);
        }
        return (
            Y$(r, [
                {
                    key: "renderIcon",
                    value: function (i) {
                        var a = this.props.inactiveColor,
                            o = Xe / 2,
                            s = Xe / 6,
                            u = Xe / 3,
                            l = i.inactive ? a : i.color;
                        if (i.type === "plainline")
                            return O("line", {
                                strokeWidth: 4,
                                fill: "none",
                                stroke: l,
                                strokeDasharray: i.payload.strokeDasharray,
                                x1: 0,
                                y1: o,
                                x2: Xe,
                                y2: o,
                                className: "recharts-legend-icon",
                            });
                        if (i.type === "line")
                            return O("path", {
                                strokeWidth: 4,
                                fill: "none",
                                stroke: l,
                                d: "M0,"
                                    .concat(o, "h")
                                    .concat(
                                        u,
                                        `
            A`
                                    )
                                    .concat(s, ",")
                                    .concat(s, ",0,1,1,")
                                    .concat(2 * u, ",")
                                    .concat(
                                        o,
                                        `
            H`
                                    )
                                    .concat(Xe, "M")
                                    .concat(2 * u, ",")
                                    .concat(
                                        o,
                                        `
            A`
                                    )
                                    .concat(s, ",")
                                    .concat(s, ",0,1,1,")
                                    .concat(u, ",")
                                    .concat(o),
                                className: "recharts-legend-icon",
                            });
                        if (i.type === "rect")
                            return O("path", {
                                stroke: "none",
                                fill: l,
                                d: "M0,"
                                    .concat(Xe / 8, "h")
                                    .concat(Xe, "v")
                                    .concat((Xe * 3) / 4, "h")
                                    .concat(-Xe, "z"),
                                className: "recharts-legend-icon",
                            });
                        if (K.isValidElement(i.legendIcon)) {
                            var c = q$({}, i);
                            return (
                                delete c.legendIcon,
                                K.cloneElement(i.legendIcon, c)
                            );
                        }
                        return O(Ru, {
                            fill: l,
                            cx: o,
                            cy: o,
                            size: Xe,
                            sizeType: "diameter",
                            type: i.type,
                        });
                    },
                },
                {
                    key: "renderItems",
                    value: function () {
                        var i = this,
                            a = this.props,
                            o = a.payload,
                            s = a.iconSize,
                            u = a.layout,
                            l = a.formatter,
                            c = a.inactiveColor,
                            f = { x: 0, y: 0, width: Xe, height: Xe },
                            d = {
                                display:
                                    u === "horizontal"
                                        ? "inline-block"
                                        : "block",
                                marginRight: 10,
                            },
                            y = {
                                display: "inline-block",
                                verticalAlign: "middle",
                                marginRight: 4,
                            };
                        return o.map(function (p, h) {
                            var v,
                                g = p.formatter || l,
                                _ = pe(
                                    ((v = { "recharts-legend-item": !0 }),
                                    ss(v, "legend-item-".concat(h), !0),
                                    ss(v, "inactive", p.inactive),
                                    v)
                                );
                            if (p.type === "none") return null;
                            var b = p.inactive ? c : p.color;
                            return L(
                                "li",
                                {
                                    className: _,
                                    style: d,
                                    ...jd(i.props, p, h),
                                    children: [
                                        O(qo, {
                                            width: s,
                                            height: s,
                                            viewBox: f,
                                            style: y,
                                            children: i.renderIcon(p),
                                        }),
                                        O("span", {
                                            className:
                                                "recharts-legend-item-text",
                                            style: { color: b },
                                            children: g
                                                ? g(p.value, p, h)
                                                : p.value,
                                        }),
                                    ],
                                },
                                "legend-item-".concat(h)
                            );
                        });
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var i = this.props,
                            a = i.payload,
                            o = i.layout,
                            s = i.align;
                        if (!a || !a.length) return null;
                        var u = {
                            padding: 0,
                            margin: 0,
                            textAlign: o === "horizontal" ? s : "left",
                        };
                        return O("ul", {
                            className: "recharts-default-legend",
                            style: u,
                            children: this.renderItems(),
                        });
                    },
                },
            ]),
            r
        );
    })(T.exports.PureComponent);
Du.displayName = "Legend";
Du.defaultProps = {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    inactiveColor: "#ccc",
};
var eT = Ut,
    tT = Ht,
    rT = "[object Number]";
function nT(e) {
    return typeof e == "number" || (tT(e) && eT(e) == rT);
}
var Pp = nT,
    iT = Pp;
function aT(e) {
    return iT(e) && e != +e;
}
var Pn = aT,
    oT = Ut,
    sT = te,
    uT = Ht,
    lT = "[object String]";
function cT(e) {
    return typeof e == "string" || (!sT(e) && uT(e) && oT(e) == lT);
}
var En = cT,
    ut = function (t) {
        return t === 0 ? 0 : t > 0 ? 1 : -1;
    },
    Qt = function (t) {
        return En(t) && t.indexOf("%") === t.length - 1;
    },
    U = function (t) {
        return Pp(t) && !Pn(t);
    },
    we = function (t) {
        return U(t) || En(t);
    },
    fT = 0,
    Ta = function (t) {
        var r = ++fT;
        return "".concat(t || "").concat(r);
    },
    Pr = function (t, r) {
        var n =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : 0,
            i =
                arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : !1;
        if (!U(t) && !En(t)) return n;
        var a;
        if (Qt(t)) {
            var o = t.indexOf("%");
            a = (r * parseFloat(t.slice(0, o))) / 100;
        } else a = +t;
        return Pn(a) && (a = n), i && a > r && (a = r), a;
    },
    Mt = function (t) {
        if (!t) return null;
        var r = Object.keys(t);
        return r && r.length ? t[r[0]] : null;
    },
    hT = function (t) {
        if (!te(t)) return !1;
        for (var r = t.length, n = {}, i = 0; i < r; i++)
            if (!n[t[i]]) n[t[i]] = !0;
            else return !0;
        return !1;
    },
    dr = function (t, r) {
        return U(t) && U(r)
            ? function (n) {
                  return t + n * (r - t);
              }
            : function () {
                  return r;
              };
    };
function Pi(e, t, r) {
    return !e || !e.length
        ? null
        : e.find(function (n) {
              return n && (typeof t == "function" ? t(n) : Ae(n, t)) === r;
          });
}
function ei(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (ei = function (r) {
                  return typeof r;
              })
            : (ei = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        ei(e)
    );
}
function yc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function pr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? yc(Object(r), !0).forEach(function (n) {
                  dT(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : yc(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function dT(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function pT(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function gc(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function vT(e, t, r) {
    return t && gc(e.prototype, t), r && gc(e, r), e;
}
function yT(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && ls(e, t);
}
function ls(e, t) {
    return (
        (ls =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        ls(e, t)
    );
}
function gT(e) {
    var t = xT();
    return function () {
        var n = Ei(e),
            i;
        if (t) {
            var a = Ei(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return mT(this, i);
    };
}
function mT(e, t) {
    return t && (ei(t) === "object" || typeof t == "function") ? t : bT(e);
}
function bT(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function xT() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function Ei(e) {
    return (
        (Ei = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ei(e)
    );
}
function wT(e, t) {
    if (e == null) return {};
    var r = _T(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(e, n) ||
                        (r[n] = e[n]));
    }
    return r;
}
function _T(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
function ST(e) {
    return e.value;
}
function OT(e, t) {
    return e === !0 ? wi(t, ST) : X(e) ? wi(t, e) : t;
}
function AT(e, t) {
    if (K.isValidElement(e)) return K.cloneElement(e, t);
    if (X(e)) return K.createElement(e, t);
    t.ref;
    var r = wT(t, ["ref"]);
    return O(Du, { ...r });
}
var mc = 1,
    pn = (function (e) {
        yT(r, e);
        var t = gT(r);
        function r() {
            var n;
            pT(this, r);
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                a[o] = arguments[o];
            return (
                (n = t.call.apply(t, [this].concat(a))),
                (n.wrapperNode = void 0),
                (n.state = { boxWidth: -1, boxHeight: -1 }),
                n
            );
        }
        return (
            vT(
                r,
                [
                    {
                        key: "componentDidMount",
                        value: function () {
                            this.updateBBox();
                        },
                    },
                    {
                        key: "componentDidUpdate",
                        value: function () {
                            this.updateBBox();
                        },
                    },
                    {
                        key: "getBBox",
                        value: function () {
                            return this.wrapperNode &&
                                this.wrapperNode.getBoundingClientRect
                                ? this.wrapperNode.getBoundingClientRect()
                                : null;
                        },
                    },
                    {
                        key: "getBBoxSnapshot",
                        value: function () {
                            var i = this.state,
                                a = i.boxWidth,
                                o = i.boxHeight;
                            return a >= 0 && o >= 0
                                ? { width: a, height: o }
                                : null;
                        },
                    },
                    {
                        key: "getDefaultPosition",
                        value: function (i) {
                            var a = this.props,
                                o = a.layout,
                                s = a.align,
                                u = a.verticalAlign,
                                l = a.margin,
                                c = a.chartWidth,
                                f = a.chartHeight,
                                d,
                                y;
                            if (
                                !i ||
                                ((i.left === void 0 || i.left === null) &&
                                    (i.right === void 0 || i.right === null))
                            )
                                if (s === "center" && o === "vertical") {
                                    var p = this.getBBoxSnapshot() || {
                                        width: 0,
                                    };
                                    d = { left: ((c || 0) - p.width) / 2 };
                                } else
                                    d =
                                        s === "right"
                                            ? { right: (l && l.right) || 0 }
                                            : { left: (l && l.left) || 0 };
                            if (
                                !i ||
                                ((i.top === void 0 || i.top === null) &&
                                    (i.bottom === void 0 || i.bottom === null))
                            )
                                if (u === "middle") {
                                    var h = this.getBBoxSnapshot() || {
                                        height: 0,
                                    };
                                    y = { top: ((f || 0) - h.height) / 2 };
                                } else
                                    y =
                                        u === "bottom"
                                            ? { bottom: (l && l.bottom) || 0 }
                                            : { top: (l && l.top) || 0 };
                            return pr(pr({}, d), y);
                        },
                    },
                    {
                        key: "updateBBox",
                        value: function () {
                            var i = this.state,
                                a = i.boxWidth,
                                o = i.boxHeight,
                                s = this.props.onBBoxUpdate;
                            if (
                                this.wrapperNode &&
                                this.wrapperNode.getBoundingClientRect
                            ) {
                                var u =
                                    this.wrapperNode.getBoundingClientRect();
                                (Math.abs(u.width - a) > mc ||
                                    Math.abs(u.height - o) > mc) &&
                                    this.setState(
                                        {
                                            boxWidth: u.width,
                                            boxHeight: u.height,
                                        },
                                        function () {
                                            s && s(u);
                                        }
                                    );
                            } else
                                (a !== -1 || o !== -1) &&
                                    this.setState(
                                        { boxWidth: -1, boxHeight: -1 },
                                        function () {
                                            s && s(null);
                                        }
                                    );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var i = this,
                                a = this.props,
                                o = a.content,
                                s = a.width,
                                u = a.height,
                                l = a.wrapperStyle,
                                c = a.payloadUniqBy,
                                f = a.payload,
                                d = pr(
                                    pr(
                                        {
                                            position: "absolute",
                                            width: s || "auto",
                                            height: u || "auto",
                                        },
                                        this.getDefaultPosition(l)
                                    ),
                                    l
                                );
                            return O("div", {
                                className: "recharts-legend-wrapper",
                                style: d,
                                ref: function (p) {
                                    i.wrapperNode = p;
                                },
                                children: AT(
                                    o,
                                    pr(
                                        pr({}, this.props),
                                        {},
                                        { payload: OT(c, f) }
                                    )
                                ),
                            });
                        },
                    },
                ],
                [
                    {
                        key: "getWithHeight",
                        value: function (i, a) {
                            var o = i.props.layout;
                            return o === "vertical" && U(i.props.height)
                                ? { height: i.props.height }
                                : o === "horizontal"
                                ? { width: i.props.width || a }
                                : null;
                        },
                    },
                ]
            ),
            r
        );
    })(T.exports.PureComponent);
pn.displayName = "Legend";
pn.defaultProps = {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom",
};
function $T(e) {
    return e == null;
}
var V = $T,
    TT = typeof WeakSet == "function",
    bc = Object.keys;
function Lu(e, t) {
    return e === t || (e !== e && t !== t);
}
function xc(e) {
    return e.constructor === Object || e.constructor == null;
}
function wc(e) {
    return !!e && typeof e.then == "function";
}
function _c(e) {
    return !!(e && e.$$typeof);
}
function PT() {
    var e = [];
    return {
        add: function (t) {
            e.push(t);
        },
        has: function (t) {
            return e.indexOf(t) !== -1;
        },
    };
}
var ET = (function (e) {
    return e
        ? function () {
              return new WeakSet();
          }
        : PT;
})(TT);
function Ep(e) {
    return function (r) {
        var n = e || r;
        return function (a, o, s) {
            s === void 0 && (s = ET());
            var u = !!a && typeof a == "object",
                l = !!o && typeof o == "object";
            if (u || l) {
                var c = u && s.has(a),
                    f = l && s.has(o);
                if (c || f) return c && f;
                u && s.add(a), l && s.add(o);
            }
            return n(a, o, s);
        };
    };
}
function MT(e, t, r, n) {
    var i = e.length;
    if (t.length !== i) return !1;
    for (; i-- > 0; ) if (!r(e[i], t[i], n)) return !1;
    return !0;
}
function kT(e, t, r, n) {
    var i = e.size === t.size;
    if (i && e.size) {
        var a = {};
        e.forEach(function (o, s) {
            if (i) {
                var u = !1,
                    l = 0;
                t.forEach(function (c, f) {
                    !u &&
                        !a[l] &&
                        ((u = r(s, f, n) && r(o, c, n)), u && (a[l] = !0)),
                        l++;
                }),
                    (i = u);
            }
        });
    }
    return i;
}
var CT = "_owner",
    IT = Function.prototype.bind.call(
        Function.prototype.call,
        Object.prototype.hasOwnProperty
    );
function Sc(e, t, r, n) {
    var i = bc(e),
        a = i.length;
    if (bc(t).length !== a) return !1;
    if (a)
        for (var o = void 0; a-- > 0; ) {
            if (((o = i[a]), o === CT)) {
                var s = _c(e),
                    u = _c(t);
                if ((s || u) && s !== u) return !1;
            }
            if (!IT(t, o) || !r(e[o], t[o], n)) return !1;
        }
    return !0;
}
function NT(e, t) {
    return (
        e.source === t.source &&
        e.global === t.global &&
        e.ignoreCase === t.ignoreCase &&
        e.multiline === t.multiline &&
        e.unicode === t.unicode &&
        e.sticky === t.sticky &&
        e.lastIndex === t.lastIndex
    );
}
function RT(e, t, r, n) {
    var i = e.size === t.size;
    if (i && e.size) {
        var a = {};
        e.forEach(function (o) {
            if (i) {
                var s = !1,
                    u = 0;
                t.forEach(function (l) {
                    !s && !a[u] && ((s = r(o, l, n)), s && (a[u] = !0)), u++;
                }),
                    (i = s);
            }
        });
    }
    return i;
}
var DT = typeof Map == "function",
    LT = typeof Set == "function";
function Pa(e) {
    var t = typeof e == "function" ? e(r) : r;
    function r(n, i, a) {
        if (n === i) return !0;
        if (n && i && typeof n == "object" && typeof i == "object") {
            if (xc(n) && xc(i)) return Sc(n, i, t, a);
            var o = Array.isArray(n),
                s = Array.isArray(i);
            return o || s
                ? o === s && MT(n, i, t, a)
                : ((o = n instanceof Date),
                  (s = i instanceof Date),
                  o || s
                      ? o === s && Lu(n.getTime(), i.getTime())
                      : ((o = n instanceof RegExp),
                        (s = i instanceof RegExp),
                        o || s
                            ? o === s && NT(n, i)
                            : wc(n) || wc(i)
                            ? n === i
                            : DT &&
                              ((o = n instanceof Map),
                              (s = i instanceof Map),
                              o || s)
                            ? o === s && kT(n, i, t, a)
                            : LT &&
                              ((o = n instanceof Set),
                              (s = i instanceof Set),
                              o || s)
                            ? o === s && RT(n, i, t, a)
                            : Sc(n, i, t, a)));
        }
        return n !== n && i !== i;
    }
    return r;
}
var jT = Pa();
Pa(function () {
    return Lu;
});
Pa(Ep());
Pa(Ep(Lu));
function Oc(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        r = -1,
        n = function i(a) {
            r < 0 && (r = a),
                a - r > t ? (e(a), (r = -1)) : requestAnimationFrame(i);
        };
    requestAnimationFrame(n);
}
function ti(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (ti = function (r) {
                  return typeof r;
              })
            : (ti = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        ti(e)
    );
}
function FT(e) {
    return WT(e) || HT(e) || UT(e) || BT();
}
function BT() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UT(e, t) {
    if (!!e) {
        if (typeof e == "string") return Ac(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Ac(e, t);
    }
}
function Ac(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function HT(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function WT(e) {
    if (Array.isArray(e)) return e;
}
function zT() {
    var e = {},
        t = function () {
            return null;
        },
        r = !1,
        n = function i(a) {
            if (!r) {
                if (Array.isArray(a)) {
                    if (!a.length) return;
                    var o = a,
                        s = FT(o),
                        u = s[0],
                        l = s.slice(1);
                    if (typeof u == "number") {
                        Oc(i.bind(null, l), u);
                        return;
                    }
                    i(u), Oc(i.bind(null, l));
                    return;
                }
                ti(a) === "object" && ((e = a), t(e)),
                    typeof a == "function" && a();
            }
        };
    return {
        stop: function () {
            r = !0;
        },
        start: function (a) {
            (r = !1), n(a);
        },
        subscribe: function (a) {
            return (
                (t = a),
                function () {
                    t = function () {
                        return null;
                    };
                }
            );
        },
    };
}
function $c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? $c(Object(r), !0).forEach(function (n) {
                  Mi(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : $c(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function Mi(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
var GT = ["Webkit", "Moz", "O", "ms"],
    qT = ["-webkit-", "-moz-", "-o-", "-ms-"],
    VT = ["transform", "transformOrigin", "transition"],
    YT = function (t, r) {
        return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
            return n.filter(function (a) {
                return i.includes(a);
            });
        });
    },
    XT = function (t) {
        return t;
    },
    KT = function (t) {
        return t.replace(/([A-Z])/g, function (r) {
            return "-".concat(r.toLowerCase());
        });
    },
    JT = function (t, r) {
        if (VT.indexOf(t) === -1) return Mi({}, t, r);
        var n = t === "transition",
            i = t.replace(/(\w)/, function (o) {
                return o.toUpperCase();
            }),
            a = r;
        return GT.reduce(function (o, s, u) {
            return (
                n &&
                    (a = r.replace(
                        /(transform|transform-origin)/gim,
                        "".concat(qT[u], "$1")
                    )),
                Er(Er({}, o), {}, Mi({}, s + i, a))
            );
        }, {});
    },
    hn = function (t, r) {
        return Object.keys(r).reduce(function (n, i) {
            return Er(Er({}, n), {}, Mi({}, i, t(i, r[i])));
        }, {});
    },
    cs = function (t) {
        return Object.keys(t).reduce(function (r, n) {
            return Er(Er({}, r), JT(n, r[n]));
        }, t);
    },
    Tc = function (t, r, n) {
        return t
            .map(function (i) {
                return "".concat(KT(i), " ").concat(r, "ms ").concat(n);
            })
            .join(",");
    };
function ZT(e, t) {
    return tP(e) || eP(e, t) || Mp(e, t) || QT();
}
function QT() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eP(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var o = e[Symbol.iterator](), s;
                !(n = (s = o.next()).done) &&
                (r.push(s.value), !(t && r.length === t));
                n = !0
            );
        } catch (u) {
            (i = !0), (a = u);
        } finally {
            try {
                !n && o.return != null && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return r;
    }
}
function tP(e) {
    if (Array.isArray(e)) return e;
}
function rP(e) {
    return aP(e) || iP(e) || Mp(e) || nP();
}
function nP() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mp(e, t) {
    if (!!e) {
        if (typeof e == "string") return fs(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return fs(e, t);
    }
}
function iP(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function aP(e) {
    if (Array.isArray(e)) return fs(e);
}
function fs(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var ki = 1e-4,
    kp = function (t, r) {
        return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
    },
    Cp = function (t, r) {
        return t
            .map(function (n, i) {
                return n * Math.pow(r, i);
            })
            .reduce(function (n, i) {
                return n + i;
            });
    },
    Pc = function (t, r) {
        return function (n) {
            var i = kp(t, r);
            return Cp(i, n);
        };
    },
    oP = function (t, r) {
        return function (n) {
            var i = kp(t, r),
                a = [].concat(
                    rP(
                        i
                            .map(function (o, s) {
                                return o * s;
                            })
                            .slice(1)
                    ),
                    [0]
                );
            return Cp(a, n);
        };
    },
    Ec = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
        var i = r[0],
            a = r[1],
            o = r[2],
            s = r[3];
        if (r.length === 1)
            switch (r[0]) {
                case "linear":
                    (i = 0), (a = 0), (o = 1), (s = 1);
                    break;
                case "ease":
                    (i = 0.25), (a = 0.1), (o = 0.25), (s = 1);
                    break;
                case "ease-in":
                    (i = 0.42), (a = 0), (o = 1), (s = 1);
                    break;
                case "ease-out":
                    (i = 0.42), (a = 0), (o = 0.58), (s = 1);
                    break;
                case "ease-in-out":
                    (i = 0), (a = 0), (o = 0.58), (s = 1);
                    break;
                default: {
                    var u = r[0].split("(");
                    if (
                        u[0] === "cubic-bezier" &&
                        u[1].split(")")[0].split(",").length === 4
                    ) {
                        var l = u[1]
                                .split(")")[0]
                                .split(",")
                                .map(function (v) {
                                    return parseFloat(v);
                                }),
                            c = ZT(l, 4);
                        (i = c[0]), (a = c[1]), (o = c[2]), (s = c[3]);
                    }
                }
            }
        var f = Pc(i, o),
            d = Pc(a, s),
            y = oP(i, o),
            p = function (g) {
                return g > 1 ? 1 : g < 0 ? 0 : g;
            },
            h = function (g) {
                for (var _ = g > 1 ? 1 : g, b = _, m = 0; m < 8; ++m) {
                    var x = f(b) - _,
                        w = y(b);
                    if (Math.abs(x - _) < ki || w < ki) return d(b);
                    b = p(b - x / w);
                }
                return d(b);
            };
        return (h.isStepper = !1), h;
    },
    sP = function () {
        var t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
            r = t.stiff,
            n = r === void 0 ? 100 : r,
            i = t.damping,
            a = i === void 0 ? 8 : i,
            o = t.dt,
            s = o === void 0 ? 17 : o,
            u = function (c, f, d) {
                var y = -(c - f) * n,
                    p = d * a,
                    h = d + ((y - p) * s) / 1e3,
                    v = (d * s) / 1e3 + c;
                return Math.abs(v - f) < ki && Math.abs(h) < ki
                    ? [f, 0]
                    : [v, h];
            };
        return (u.isStepper = !0), (u.dt = s), u;
    },
    uP = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
        var i = r[0];
        if (typeof i == "string")
            switch (i) {
                case "ease":
                case "ease-in-out":
                case "ease-out":
                case "ease-in":
                case "linear":
                    return Ec(i);
                case "spring":
                    return sP();
                default:
                    if (i.split("(")[0] === "cubic-bezier") return Ec(i);
            }
        return typeof i == "function" ? i : null;
    };
function Mc(e) {
    return fP(e) || cP(e) || Ip(e) || lP();
}
function lP() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cP(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function fP(e) {
    if (Array.isArray(e)) return ds(e);
}
function kc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Me(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? kc(Object(r), !0).forEach(function (n) {
                  hs(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : kc(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function hs(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function hP(e, t) {
    return vP(e) || pP(e, t) || Ip(e, t) || dP();
}
function dP() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ip(e, t) {
    if (!!e) {
        if (typeof e == "string") return ds(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return ds(e, t);
    }
}
function ds(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function pP(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var o = e[Symbol.iterator](), s;
                !(n = (s = o.next()).done) &&
                (r.push(s.value), !(t && r.length === t));
                n = !0
            );
        } catch (u) {
            (i = !0), (a = u);
        } finally {
            try {
                !n && o.return != null && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return r;
    }
}
function vP(e) {
    if (Array.isArray(e)) return e;
}
var Ci = function (t, r, n) {
        return t + (r - t) * n;
    },
    ps = function (t) {
        var r = t.from,
            n = t.to;
        return r !== n;
    },
    yP = function e(t, r, n) {
        var i = hn(function (a, o) {
            if (ps(o)) {
                var s = t(o.from, o.to, o.velocity),
                    u = hP(s, 2),
                    l = u[0],
                    c = u[1];
                return Me(Me({}, o), {}, { from: l, velocity: c });
            }
            return o;
        }, r);
        return n < 1
            ? hn(function (a, o) {
                  return ps(o)
                      ? Me(
                            Me({}, o),
                            {},
                            {
                                velocity: Ci(o.velocity, i[a].velocity, n),
                                from: Ci(o.from, i[a].from, n),
                            }
                        )
                      : o;
              }, r)
            : e(t, i, n - 1);
    };
const gP = function (e, t, r, n, i) {
    var a = YT(e, t),
        o = a.reduce(function (v, g) {
            return Me(Me({}, v), {}, hs({}, g, [e[g], t[g]]));
        }, {}),
        s = a.reduce(function (v, g) {
            return Me(
                Me({}, v),
                {},
                hs({}, g, { from: e[g], velocity: 0, to: t[g] })
            );
        }, {}),
        u = -1,
        l,
        c,
        f = function () {
            return null;
        },
        d = function () {
            return hn(function (g, _) {
                return _.from;
            }, s);
        },
        y = function () {
            return !Object.values(s).filter(ps).length;
        },
        p = function (g) {
            l || (l = g);
            var _ = g - l,
                b = _ / r.dt;
            (s = yP(r, s, b)),
                i(Me(Me(Me({}, e), t), d())),
                (l = g),
                y() || (u = requestAnimationFrame(f));
        },
        h = function (g) {
            c || (c = g);
            var _ = (g - c) / n,
                b = hn(function (x, w) {
                    return Ci.apply(void 0, Mc(w).concat([r(_)]));
                }, o);
            if ((i(Me(Me(Me({}, e), t), b)), _ < 1))
                u = requestAnimationFrame(f);
            else {
                var m = hn(function (x, w) {
                    return Ci.apply(void 0, Mc(w).concat([r(1)]));
                }, o);
                i(Me(Me(Me({}, e), t), m));
            }
        };
    return (
        (f = r.isStepper ? p : h),
        function () {
            return (
                requestAnimationFrame(f),
                function () {
                    cancelAnimationFrame(u);
                }
            );
        }
    );
};
function ri(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (ri = function (r) {
                  return typeof r;
              })
            : (ri = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        ri(e)
    );
}
function mP(e, t) {
    if (e == null) return {};
    var r = bP(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(e, n) ||
                        (r[n] = e[n]));
    }
    return r;
}
function bP(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
function uo(e) {
    return SP(e) || _P(e) || wP(e) || xP();
}
function xP() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wP(e, t) {
    if (!!e) {
        if (typeof e == "string") return vs(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return vs(e, t);
    }
}
function _P(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function SP(e) {
    if (Array.isArray(e)) return vs(e);
}
function vs(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function Cc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function tt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Cc(Object(r), !0).forEach(function (n) {
                  cn(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Cc(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function cn(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function OP(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function Ic(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function AP(e, t, r) {
    return t && Ic(e.prototype, t), r && Ic(e, r), e;
}
function $P(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && ys(e, t);
}
function ys(e, t) {
    return (
        (ys =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        ys(e, t)
    );
}
function TP(e) {
    var t = PP();
    return function () {
        var n = Ii(e),
            i;
        if (t) {
            var a = Ii(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return gs(this, i);
    };
}
function gs(e, t) {
    return t && (ri(t) === "object" || typeof t == "function") ? t : ms(e);
}
function ms(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function PP() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function Ii(e) {
    return (
        (Ii = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ii(e)
    );
}
var Mr = (function (e) {
    $P(r, e);
    var t = TP(r);
    function r(n, i) {
        var a;
        OP(this, r), (a = t.call(this, n, i));
        var o = a.props,
            s = o.isActive,
            u = o.attributeName,
            l = o.from,
            c = o.to,
            f = o.steps,
            d = o.children;
        if (
            ((a.handleStyleChange = a.handleStyleChange.bind(ms(a))),
            (a.changeStyle = a.changeStyle.bind(ms(a))),
            !s)
        )
            return (
                (a.state = { style: {} }),
                typeof d == "function" && (a.state = { style: c }),
                gs(a)
            );
        if (f && f.length) a.state = { style: f[0].style };
        else if (l) {
            if (typeof d == "function") return (a.state = { style: l }), gs(a);
            a.state = { style: u ? cn({}, u, l) : l };
        } else a.state = { style: {} };
        return a;
    }
    return (
        AP(r, [
            {
                key: "componentDidMount",
                value: function () {
                    var i = this.props,
                        a = i.isActive,
                        o = i.canBegin;
                    (this.mounted = !0),
                        !(!a || !o) && this.runAnimation(this.props);
                },
            },
            {
                key: "componentDidUpdate",
                value: function (i) {
                    var a = this.props,
                        o = a.isActive,
                        s = a.canBegin,
                        u = a.attributeName,
                        l = a.shouldReAnimate;
                    if (!!s) {
                        if (!o) {
                            var c = {
                                style: u
                                    ? cn({}, u, this.props.to)
                                    : this.props.to,
                            };
                            this.state &&
                                this.state.style &&
                                ((u && this.state.style[u] !== this.props.to) ||
                                    (!u &&
                                        this.state.style !== this.props.to)) &&
                                this.setState(c);
                            return;
                        }
                        if (
                            !(
                                jT(i.to, this.props.to) &&
                                i.canBegin &&
                                i.isActive
                            )
                        ) {
                            var f = !i.canBegin || !i.isActive;
                            this.manager && this.manager.stop(),
                                this.stopJSAnimation && this.stopJSAnimation();
                            var d = f || l ? this.props.from : i.to;
                            if (this.state && this.state.style) {
                                var y = { style: u ? cn({}, u, d) : d };
                                ((u && this.state.style[u] !== d) ||
                                    (!u && this.state.style !== d)) &&
                                    this.setState(y);
                            }
                            this.runAnimation(
                                tt(
                                    tt({}, this.props),
                                    {},
                                    { from: d, begin: 0 }
                                )
                            );
                        }
                    }
                },
            },
            {
                key: "componentWillUnmount",
                value: function () {
                    (this.mounted = !1),
                        this.unSubscribe && this.unSubscribe(),
                        this.manager &&
                            (this.manager.stop(), (this.manager = null)),
                        this.stopJSAnimation && this.stopJSAnimation();
                },
            },
            {
                key: "runJSAnimation",
                value: function (i) {
                    var a = this,
                        o = i.from,
                        s = i.to,
                        u = i.duration,
                        l = i.easing,
                        c = i.begin,
                        f = i.onAnimationEnd,
                        d = i.onAnimationStart,
                        y = gP(o, s, uP(l), u, this.changeStyle),
                        p = function () {
                            a.stopJSAnimation = y();
                        };
                    this.manager.start([d, c, p, u, f]);
                },
            },
            {
                key: "runStepAnimation",
                value: function (i) {
                    var a = this,
                        o = i.steps,
                        s = i.begin,
                        u = i.onAnimationStart,
                        l = o[0],
                        c = l.style,
                        f = l.duration,
                        d = f === void 0 ? 0 : f,
                        y = function (h, v, g) {
                            if (g === 0) return h;
                            var _ = v.duration,
                                b = v.easing,
                                m = b === void 0 ? "ease" : b,
                                x = v.style,
                                w = v.properties,
                                S = v.onAnimationEnd,
                                A = g > 0 ? o[g - 1] : v,
                                $ = w || Object.keys(x);
                            if (typeof m == "function" || m === "spring")
                                return [].concat(uo(h), [
                                    a.runJSAnimation.bind(a, {
                                        from: A.style,
                                        to: x,
                                        duration: _,
                                        easing: m,
                                    }),
                                    _,
                                ]);
                            var E = Tc($, _, m),
                                P = tt(
                                    tt(tt({}, A.style), x),
                                    {},
                                    { transition: E }
                                );
                            return [].concat(uo(h), [P, _, S]).filter(XT);
                        };
                    return this.manager.start(
                        [u].concat(uo(o.reduce(y, [c, Math.max(d, s)])), [
                            i.onAnimationEnd,
                        ])
                    );
                },
            },
            {
                key: "runAnimation",
                value: function (i) {
                    this.manager || (this.manager = zT());
                    var a = i.begin,
                        o = i.duration,
                        s = i.attributeName,
                        u = i.to,
                        l = i.easing,
                        c = i.onAnimationStart,
                        f = i.onAnimationEnd,
                        d = i.steps,
                        y = i.children,
                        p = this.manager;
                    if (
                        ((this.unSubscribe = p.subscribe(
                            this.handleStyleChange
                        )),
                        typeof l == "function" ||
                            typeof y == "function" ||
                            l === "spring")
                    ) {
                        this.runJSAnimation(i);
                        return;
                    }
                    if (d.length > 1) {
                        this.runStepAnimation(i);
                        return;
                    }
                    var h = s ? cn({}, s, u) : u,
                        v = Tc(Object.keys(h), o, l);
                    p.start([c, a, tt(tt({}, h), {}, { transition: v }), o, f]);
                },
            },
            {
                key: "handleStyleChange",
                value: function (i) {
                    this.changeStyle(i);
                },
            },
            {
                key: "changeStyle",
                value: function (i) {
                    this.mounted && this.setState({ style: i });
                },
            },
            {
                key: "render",
                value: function () {
                    var i = this.props,
                        a = i.children;
                    i.begin, i.duration, i.attributeName, i.easing;
                    var o = i.isActive;
                    i.steps,
                        i.from,
                        i.to,
                        i.canBegin,
                        i.onAnimationEnd,
                        i.shouldReAnimate,
                        i.onAnimationReStart;
                    var s = mP(i, [
                            "children",
                            "begin",
                            "duration",
                            "attributeName",
                            "easing",
                            "isActive",
                            "steps",
                            "from",
                            "to",
                            "canBegin",
                            "onAnimationEnd",
                            "shouldReAnimate",
                            "onAnimationReStart",
                        ]),
                        u = T.exports.Children.count(a),
                        l = cs(this.state.style);
                    if (typeof a == "function") return a(l);
                    if (!o || u === 0) return a;
                    var c = function (d) {
                        var y = d.props,
                            p = y.style,
                            h = p === void 0 ? {} : p,
                            v = y.className,
                            g = T.exports.cloneElement(
                                d,
                                tt(
                                    tt({}, s),
                                    {},
                                    { style: tt(tt({}, h), l), className: v }
                                )
                            );
                        return g;
                    };
                    return u === 1
                        ? c(T.exports.Children.only(a))
                        : O("div", {
                              children: T.exports.Children.map(a, function (f) {
                                  return c(f);
                              }),
                          });
                },
            },
        ]),
        r
    );
})(T.exports.PureComponent);
Mr.displayName = "Animate";
Mr.propTypes = {
    from: z.exports.oneOfType([z.exports.object, z.exports.string]),
    to: z.exports.oneOfType([z.exports.object, z.exports.string]),
    attributeName: z.exports.string,
    duration: z.exports.number,
    begin: z.exports.number,
    easing: z.exports.oneOfType([z.exports.string, z.exports.func]),
    steps: z.exports.arrayOf(
        z.exports.shape({
            duration: z.exports.number.isRequired,
            style: z.exports.object.isRequired,
            easing: z.exports.oneOfType([
                z.exports.oneOf([
                    "ease",
                    "ease-in",
                    "ease-out",
                    "ease-in-out",
                    "linear",
                ]),
                z.exports.func,
            ]),
            properties: z.exports.arrayOf("string"),
            onAnimationEnd: z.exports.func,
        })
    ),
    children: z.exports.oneOfType([z.exports.node, z.exports.func]),
    isActive: z.exports.bool,
    canBegin: z.exports.bool,
    onAnimationEnd: z.exports.func,
    shouldReAnimate: z.exports.bool,
    onAnimationStart: z.exports.func,
    onAnimationReStart: z.exports.func,
};
Mr.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: "",
    to: "",
    attributeName: "",
    easing: "ease",
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function () {},
    onAnimationStart: function () {},
};
Number.isFinite === void 0 &&
    (Number.isFinite = function (e) {
        return typeof e == "number" && isFinite(e);
    });
z.exports.object, z.exports.object, z.exports.object, z.exports.element;
z.exports.object,
    z.exports.object,
    z.exports.object,
    z.exports.oneOfType([z.exports.array, z.exports.element]),
    z.exports.any;
var Nc = $n,
    EP = Au,
    MP = te,
    Rc = Nc ? Nc.isConcatSpreadable : void 0;
function kP(e) {
    return MP(e) || EP(e) || !!(Rc && e && e[Rc]);
}
var CP = kP,
    IP = Vd,
    NP = CP;
function Np(e, t, r, n, i) {
    var a = -1,
        o = e.length;
    for (r || (r = NP), i || (i = []); ++a < o; ) {
        var s = e[a];
        t > 0 && r(s)
            ? t > 1
                ? Np(s, t - 1, r, n, i)
                : IP(i, s)
            : n || (i[i.length] = s);
    }
    return i;
}
var Rp = Np;
function RP(e) {
    return function (t, r, n) {
        for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
            var u = o[e ? s : ++i];
            if (r(a[u], u, a) === !1) break;
        }
        return t;
    };
}
var DP = RP,
    LP = DP,
    jP = LP(),
    FP = jP,
    BP = FP,
    UP = xa;
function HP(e, t) {
    return e && BP(e, t, UP);
}
var Dp = HP,
    WP = Tn;
function zP(e, t) {
    return function (r, n) {
        if (r == null) return r;
        if (!WP(r)) return e(r, n);
        for (
            var i = r.length, a = t ? i : -1, o = Object(r);
            (t ? a-- : ++a < i) && n(o[a], a, o) !== !1;

        );
        return r;
    };
}
var GP = zP,
    qP = Dp,
    VP = GP,
    YP = VP(qP),
    ju = YP,
    XP = ju,
    KP = Tn;
function JP(e, t) {
    var r = -1,
        n = KP(e) ? Array(e.length) : [];
    return (
        XP(e, function (i, a, o) {
            n[++r] = t(i, a, o);
        }),
        n
    );
}
var Lp = JP;
function ZP(e, t) {
    var r = e.length;
    for (e.sort(t); r--; ) e[r] = e[r].value;
    return e;
}
var QP = ZP,
    Dc = Wr;
function e2(e, t) {
    if (e !== t) {
        var r = e !== void 0,
            n = e === null,
            i = e === e,
            a = Dc(e),
            o = t !== void 0,
            s = t === null,
            u = t === t,
            l = Dc(t);
        if (
            (!s && !l && !a && e > t) ||
            (a && o && u && !s && !l) ||
            (n && o && u) ||
            (!r && u) ||
            !i
        )
            return 1;
        if (
            (!n && !a && !l && e < t) ||
            (l && r && i && !n && !a) ||
            (s && r && i) ||
            (!o && i) ||
            !u
        )
            return -1;
    }
    return 0;
}
var t2 = e2,
    r2 = t2;
function n2(e, t, r) {
    for (
        var n = -1, i = e.criteria, a = t.criteria, o = i.length, s = r.length;
        ++n < o;

    ) {
        var u = r2(i[n], a[n]);
        if (u) {
            if (n >= s) return u;
            var l = r[n];
            return u * (l == "desc" ? -1 : 1);
        }
    }
    return e.index - t.index;
}
var i2 = n2,
    lo = ku,
    a2 = Cu,
    o2 = Wt,
    s2 = Lp,
    u2 = QP,
    l2 = Xd,
    c2 = i2,
    f2 = zr,
    h2 = te;
function d2(e, t, r) {
    t.length
        ? (t = lo(t, function (a) {
              return h2(a)
                  ? function (o) {
                        return a2(o, a.length === 1 ? a[0] : a);
                    }
                  : a;
          }))
        : (t = [f2]);
    var n = -1;
    t = lo(t, l2(o2));
    var i = s2(e, function (a, o, s) {
        var u = lo(t, function (l) {
            return l(a);
        });
        return { criteria: u, index: ++n, value: a };
    });
    return u2(i, function (a, o) {
        return c2(a, o, r);
    });
}
var p2 = d2;
function v2(e, t, r) {
    switch (r.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, r[0]);
        case 2:
            return e.call(t, r[0], r[1]);
        case 3:
            return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
}
var y2 = v2,
    g2 = y2,
    Lc = Math.max;
function m2(e, t, r) {
    return (
        (t = Lc(t === void 0 ? e.length - 1 : t, 0)),
        function () {
            for (
                var n = arguments,
                    i = -1,
                    a = Lc(n.length - t, 0),
                    o = Array(a);
                ++i < a;

            )
                o[i] = n[t + i];
            i = -1;
            for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
            return (s[t] = r(o)), g2(e, this, s);
        }
    );
}
var b2 = m2;
function x2(e) {
    return function () {
        return e;
    };
}
var w2 = x2,
    _2 = lr,
    S2 = (function () {
        try {
            var e = _2(Object, "defineProperty");
            return e({}, "", {}), e;
        } catch {}
    })(),
    jp = S2,
    O2 = w2,
    jc = jp,
    A2 = zr,
    $2 = jc
        ? function (e, t) {
              return jc(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: O2(t),
                  writable: !0,
              });
          }
        : A2,
    T2 = $2,
    P2 = 800,
    E2 = 16,
    M2 = Date.now;
function k2(e) {
    var t = 0,
        r = 0;
    return function () {
        var n = M2(),
            i = E2 - (n - r);
        if (((r = n), i > 0)) {
            if (++t >= P2) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
    };
}
var C2 = k2,
    I2 = T2,
    N2 = C2,
    R2 = N2(I2),
    D2 = R2,
    L2 = zr,
    j2 = b2,
    F2 = D2;
function B2(e, t) {
    return F2(j2(e, t, L2), e + "");
}
var U2 = B2,
    H2 = wu,
    W2 = Tn,
    z2 = $u,
    G2 = Ge;
function q2(e, t, r) {
    if (!G2(r)) return !1;
    var n = typeof t;
    return (n == "number" ? W2(r) && z2(t, r.length) : n == "string" && t in r)
        ? H2(r[t], e)
        : !1;
}
var Ea = q2,
    V2 = Rp,
    Y2 = p2,
    X2 = U2,
    Fc = Ea,
    K2 = X2(function (e, t) {
        if (e == null) return [];
        var r = t.length;
        return (
            r > 1 && Fc(e, t[0], t[1])
                ? (t = [])
                : r > 2 && Fc(t[0], t[1], t[2]) && (t = [t[0]]),
            Y2(e, V2(t, 1), [])
        );
    }),
    Fu = K2;
function ni(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (ni = function (r) {
                  return typeof r;
              })
            : (ni = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        ni(e)
    );
}
function J2(e, t) {
    return tE(e) || eE(e, t) || Q2(e, t) || Z2();
}
function Z2() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q2(e, t) {
    if (!!e) {
        if (typeof e == "string") return Bc(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Bc(e, t);
    }
}
function Bc(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function eE(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var o = e[Symbol.iterator](), s;
                !(n = (s = o.next()).done) &&
                (r.push(s.value), !(t && r.length === t));
                n = !0
            );
        } catch (u) {
            (i = !0), (a = u);
        } finally {
            try {
                !n && o.return != null && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return r;
    }
}
function tE(e) {
    if (Array.isArray(e)) return e;
}
function Uc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function co(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Uc(Object(r), !0).forEach(function (n) {
                  rE(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Uc(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function rE(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function nE(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function Hc(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function iE(e, t, r) {
    return t && Hc(e.prototype, t), r && Hc(e, r), e;
}
function aE(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && bs(e, t);
}
function bs(e, t) {
    return (
        (bs =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        bs(e, t)
    );
}
function oE(e) {
    var t = lE();
    return function () {
        var n = Ni(e),
            i;
        if (t) {
            var a = Ni(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return sE(this, i);
    };
}
function sE(e, t) {
    return t && (ni(t) === "object" || typeof t == "function") ? t : uE(e);
}
function uE(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function lE() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function Ni(e) {
    return (
        (Ni = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ni(e)
    );
}
function cE(e) {
    return te(e) && we(e[0]) && we(e[1]) ? e.join(" ~ ") : e;
}
var Bu = (function (e) {
    aE(r, e);
    var t = oE(r);
    function r() {
        return nE(this, r), t.apply(this, arguments);
    }
    return (
        iE(r, [
            {
                key: "renderContent",
                value: function () {
                    var i = this.props,
                        a = i.payload,
                        o = i.separator,
                        s = i.formatter,
                        u = i.itemStyle,
                        l = i.itemSorter;
                    if (a && a.length) {
                        var c = { padding: 0, margin: 0 },
                            f = (l ? Fu(a, l) : a).map(function (d, y) {
                                if (d.type === "none") return null;
                                var p = co(
                                        {
                                            display: "block",
                                            paddingTop: 4,
                                            paddingBottom: 4,
                                            color: d.color || "#000",
                                        },
                                        u
                                    ),
                                    h = d.formatter || s || cE,
                                    v = d.value,
                                    g = d.name;
                                if (h && v != null && g != null) {
                                    var _ = h(v, g, d, y, a);
                                    if (Array.isArray(_)) {
                                        var b = _,
                                            m = J2(b, 2);
                                        (v = m[0]), (g = m[1]);
                                    } else v = _;
                                }
                                return L(
                                    "li",
                                    {
                                        className: "recharts-tooltip-item",
                                        style: p,
                                        children: [
                                            we(g)
                                                ? O("span", {
                                                      className:
                                                          "recharts-tooltip-item-name",
                                                      children: g,
                                                  })
                                                : null,
                                            we(g)
                                                ? O("span", {
                                                      className:
                                                          "recharts-tooltip-item-separator",
                                                      children: o,
                                                  })
                                                : null,
                                            O("span", {
                                                className:
                                                    "recharts-tooltip-item-value",
                                                children: v,
                                            }),
                                            O("span", {
                                                className:
                                                    "recharts-tooltip-item-unit",
                                                children: d.unit || "",
                                            }),
                                        ],
                                    },
                                    "tooltip-item-".concat(y)
                                );
                            });
                        return O("ul", {
                            className: "recharts-tooltip-item-list",
                            style: c,
                            children: f,
                        });
                    }
                    return null;
                },
            },
            {
                key: "render",
                value: function () {
                    var i = this.props,
                        a = i.wrapperClassName,
                        o = i.contentStyle,
                        s = i.labelClassName,
                        u = i.labelStyle,
                        l = i.label,
                        c = i.labelFormatter,
                        f = i.payload,
                        d = co(
                            {
                                margin: 0,
                                padding: 10,
                                backgroundColor: "#fff",
                                border: "1px solid #ccc",
                                whiteSpace: "nowrap",
                            },
                            o
                        ),
                        y = co({ margin: 0 }, u),
                        p = !V(l),
                        h = p ? l : "",
                        v = pe("recharts-default-tooltip", a),
                        g = pe("recharts-tooltip-label", s);
                    return (
                        p && c && f !== void 0 && f !== null && (h = c(l, f)),
                        L("div", {
                            className: v,
                            style: d,
                            children: [
                                O("p", {
                                    className: g,
                                    style: y,
                                    children: K.isValidElement(h)
                                        ? h
                                        : "".concat(h),
                                }),
                                this.renderContent(),
                            ],
                        })
                    );
                },
            },
        ]),
        r
    );
})(T.exports.PureComponent);
Bu.displayName = "DefaultTooltipContent";
Bu.defaultProps = {
    separator: " : ",
    contentStyle: {},
    itemStyle: {},
    labelStyle: {},
};
var fE = function () {
        return !(
            typeof window < "u" &&
            window.document &&
            window.document.createElement &&
            window.setTimeout
        );
    },
    Rt = {
        isSsr: fE(),
        get: function (t) {
            return Rt[t];
        },
        set: function (t, r) {
            if (typeof t == "string") Rt[t] = r;
            else {
                var n = Object.keys(t);
                n &&
                    n.length &&
                    n.forEach(function (i) {
                        Rt[i] = t[i];
                    });
            }
        },
    };
function ii(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (ii = function (r) {
                  return typeof r;
              })
            : (ii = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        ii(e)
    );
}
function Wc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function pt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Wc(Object(r), !0).forEach(function (n) {
                  fn(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Wc(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function fn(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function hE(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function zc(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function dE(e, t, r) {
    return t && zc(e.prototype, t), r && zc(e, r), e;
}
function pE(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && xs(e, t);
}
function xs(e, t) {
    return (
        (xs =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        xs(e, t)
    );
}
function vE(e) {
    var t = mE();
    return function () {
        var n = Ri(e),
            i;
        if (t) {
            var a = Ri(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return yE(this, i);
    };
}
function yE(e, t) {
    return t && (ii(t) === "object" || typeof t == "function") ? t : gE(e);
}
function gE(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function mE() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function Ri(e) {
    return (
        (Ri = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ri(e)
    );
}
var Qr = "recharts-tooltip-wrapper",
    Gc = 1;
function bE(e) {
    return e.dataKey;
}
function xE(e, t) {
    return e === !0 ? wi(t, bE) : X(e) ? wi(t, e) : t;
}
function wE(e, t) {
    return K.isValidElement(e)
        ? K.cloneElement(e, t)
        : X(e)
        ? K.createElement(e, t)
        : O(Bu, { ...t });
}
var gr = (function (e) {
    pE(r, e);
    var t = vE(r);
    function r() {
        var n;
        hE(this, r);
        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
            a[o] = arguments[o];
        return (
            (n = t.call.apply(t, [this].concat(a))),
            (n.state = {
                boxWidth: -1,
                boxHeight: -1,
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 },
            }),
            (n.wrapperNode = void 0),
            (n.getTranslate = function (s) {
                var u = s.key,
                    l = s.tooltipDimension,
                    c = s.viewBoxDimension,
                    f = n.props,
                    d = f.allowEscapeViewBox,
                    y = f.coordinate,
                    p = f.offset,
                    h = f.position,
                    v = f.viewBox;
                if (h && U(h[u])) return h[u];
                var g = y[u] - l - p,
                    _ = y[u] + p;
                if (d[u]) return _;
                var b = y[u] + l + p,
                    m = v[u] + c;
                return b > m ? Math.max(g, v[u]) : Math.max(_, v[u]);
            }),
            n
        );
    }
    return (
        dE(r, [
            {
                key: "componentDidMount",
                value: function () {
                    this.updateBBox();
                },
            },
            {
                key: "componentDidUpdate",
                value: function () {
                    this.updateBBox();
                },
            },
            {
                key: "updateBBox",
                value: function () {
                    var i = this.state,
                        a = i.boxWidth,
                        o = i.boxHeight,
                        s = i.dismissed;
                    if (
                        (s
                            ? (this.wrapperNode.blur(),
                              (this.props.coordinate.x !==
                                  this.state.dismissedAtCoordinate.x ||
                                  this.props.coordinate.y !==
                                      this.state.dismissedAtCoordinate.y) &&
                                  this.setState({ dismissed: !1 }))
                            : this.wrapperNode.focus({ preventScroll: !0 }),
                        this.wrapperNode &&
                            this.wrapperNode.getBoundingClientRect)
                    ) {
                        var u = this.wrapperNode.getBoundingClientRect();
                        (Math.abs(u.width - a) > Gc ||
                            Math.abs(u.height - o) > Gc) &&
                            this.setState({
                                boxWidth: u.width,
                                boxHeight: u.height,
                            });
                    } else
                        (a !== -1 || o !== -1) &&
                            this.setState({ boxWidth: -1, boxHeight: -1 });
                },
            },
            {
                key: "render",
                value: function () {
                    var i,
                        a = this,
                        o = this.props,
                        s = o.payload,
                        u = o.isAnimationActive,
                        l = o.animationDuration,
                        c = o.animationEasing,
                        f = o.filterNull,
                        d = o.payloadUniqBy,
                        y = xE(
                            d,
                            f && s && s.length
                                ? s.filter(function (k) {
                                      return !V(k.value);
                                  })
                                : s
                        ),
                        p = y && y.length,
                        h = this.props,
                        v = h.content,
                        g = h.viewBox,
                        _ = h.coordinate,
                        b = h.position,
                        m = h.active,
                        x = h.wrapperStyle,
                        w = pt(
                            {
                                pointerEvents: "none",
                                visibility:
                                    !this.state.dismissed && m && p
                                        ? "visible"
                                        : "hidden",
                                position: "absolute",
                                top: 0,
                                left: 0,
                            },
                            x
                        ),
                        S,
                        A;
                    if (b && U(b.x) && U(b.y)) (S = b.x), (A = b.y);
                    else {
                        var $ = this.state,
                            E = $.boxWidth,
                            P = $.boxHeight;
                        E > 0 && P > 0 && _
                            ? ((S = this.getTranslate({
                                  key: "x",
                                  tooltipDimension: E,
                                  viewBoxDimension: g.width,
                              })),
                              (A = this.getTranslate({
                                  key: "y",
                                  tooltipDimension: P,
                                  viewBoxDimension: g.height,
                              })))
                            : (w.visibility = "hidden");
                    }
                    (w = pt(
                        pt(
                            {},
                            cs({
                                transform: this.props.useTranslate3d
                                    ? "translate3d("
                                          .concat(S, "px, ")
                                          .concat(A, "px, 0)")
                                    : "translate("
                                          .concat(S, "px, ")
                                          .concat(A, "px)"),
                            })
                        ),
                        w
                    )),
                        u &&
                            m &&
                            (w = pt(
                                pt(
                                    {},
                                    cs({
                                        transition: "transform "
                                            .concat(l, "ms ")
                                            .concat(c),
                                    })
                                ),
                                w
                            ));
                    var M = pe(
                        Qr,
                        ((i = {}),
                        fn(
                            i,
                            "".concat(Qr, "-right"),
                            U(S) && _ && U(_.x) && S >= _.x
                        ),
                        fn(
                            i,
                            "".concat(Qr, "-left"),
                            U(S) && _ && U(_.x) && S < _.x
                        ),
                        fn(
                            i,
                            "".concat(Qr, "-bottom"),
                            U(A) && _ && U(_.y) && A >= _.y
                        ),
                        fn(
                            i,
                            "".concat(Qr, "-top"),
                            U(A) && _ && U(_.y) && A < _.y
                        ),
                        i)
                    );
                    return O("div", {
                        tabIndex: -1,
                        role: "dialog",
                        onKeyDown: function (I) {
                            I.key === "Escape" &&
                                a.setState({
                                    dismissed: !0,
                                    dismissedAtCoordinate: pt(
                                        pt({}, a.state.dismissedAtCoordinate),
                                        {},
                                        {
                                            x: a.props.coordinate.x,
                                            y: a.props.coordinate.y,
                                        }
                                    ),
                                });
                        },
                        className: M,
                        style: w,
                        ref: function (I) {
                            a.wrapperNode = I;
                        },
                        children: wE(
                            v,
                            pt(pt({}, this.props), {}, { payload: y })
                        ),
                    });
                },
            },
        ]),
        r
    );
})(T.exports.PureComponent);
gr.displayName = "Tooltip";
gr.defaultProps = {
    active: !1,
    allowEscapeViewBox: { x: !1, y: !1 },
    offset: 10,
    viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
    coordinate: { x: 0, y: 0 },
    cursorStyle: {},
    separator: " : ",
    wrapperStyle: {},
    contentStyle: {},
    itemStyle: {},
    labelStyle: {},
    cursor: !0,
    trigger: "hover",
    isAnimationActive: !Rt.isSsr,
    animationEasing: "ease",
    animationDuration: 400,
    filterNull: !0,
    useTranslate3d: !1,
};
var _E = dt,
    SE = function () {
        return _E.Date.now();
    },
    OE = SE,
    AE = /\s/;
function $E(e) {
    for (var t = e.length; t-- && AE.test(e.charAt(t)); );
    return t;
}
var TE = $E,
    PE = TE,
    EE = /^\s+/;
function ME(e) {
    return e && e.slice(0, PE(e) + 1).replace(EE, "");
}
var kE = ME,
    CE = kE,
    qc = Ge,
    IE = Wr,
    Vc = 0 / 0,
    NE = /^[-+]0x[0-9a-f]+$/i,
    RE = /^0b[01]+$/i,
    DE = /^0o[0-7]+$/i,
    LE = parseInt;
function jE(e) {
    if (typeof e == "number") return e;
    if (IE(e)) return Vc;
    if (qc(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = qc(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = CE(e);
    var r = RE.test(e);
    return r || DE.test(e) ? LE(e.slice(2), r ? 2 : 8) : NE.test(e) ? Vc : +e;
}
var Fp = jE,
    FE = Ge,
    fo = OE,
    Yc = Fp,
    BE = "Expected a function",
    UE = Math.max,
    HE = Math.min;
function WE(e, t, r) {
    var n,
        i,
        a,
        o,
        s,
        u,
        l = 0,
        c = !1,
        f = !1,
        d = !0;
    if (typeof e != "function") throw new TypeError(BE);
    (t = Yc(t) || 0),
        FE(r) &&
            ((c = !!r.leading),
            (f = "maxWait" in r),
            (a = f ? UE(Yc(r.maxWait) || 0, t) : a),
            (d = "trailing" in r ? !!r.trailing : d));
    function y(w) {
        var S = n,
            A = i;
        return (n = i = void 0), (l = w), (o = e.apply(A, S)), o;
    }
    function p(w) {
        return (l = w), (s = setTimeout(g, t)), c ? y(w) : o;
    }
    function h(w) {
        var S = w - u,
            A = w - l,
            $ = t - S;
        return f ? HE($, a - A) : $;
    }
    function v(w) {
        var S = w - u,
            A = w - l;
        return u === void 0 || S >= t || S < 0 || (f && A >= a);
    }
    function g() {
        var w = fo();
        if (v(w)) return _(w);
        s = setTimeout(g, h(w));
    }
    function _(w) {
        return (s = void 0), d && n ? y(w) : ((n = i = void 0), o);
    }
    function b() {
        s !== void 0 && clearTimeout(s), (l = 0), (n = u = i = s = void 0);
    }
    function m() {
        return s === void 0 ? o : _(fo());
    }
    function x() {
        var w = fo(),
            S = v(w);
        if (((n = arguments), (i = this), (u = w), S)) {
            if (s === void 0) return p(u);
            if (f) return clearTimeout(s), (s = setTimeout(g, t)), y(u);
        }
        return s === void 0 && (s = setTimeout(g, t)), o;
    }
    return (x.cancel = b), (x.flush = m), x;
}
var Bp = WE,
    ws = function (e, t) {
        return (
            (ws =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (r, n) {
                        r.__proto__ = n;
                    }) ||
                function (r, n) {
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                            (r[i] = n[i]);
                }),
            ws(e, t)
        );
    };
function zE(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
        );
    ws(e, t);
    function r() {
        this.constructor = e;
    }
    e.prototype =
        t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
function GE(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                (r[n[i]] = e[n[i]]);
    return r;
}
var Wn =
    typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof self < "u"
        ? self
        : {};
function qE(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
}
var Uu = qE,
    VE = typeof Wn == "object" && Wn && Wn.Object === Object && Wn,
    YE = VE,
    XE = YE,
    KE = typeof self == "object" && self && self.Object === Object && self,
    JE = XE || KE || Function("return this")(),
    Up = JE,
    ZE = Up,
    QE = function () {
        return ZE.Date.now();
    },
    eM = QE,
    tM = /\s/;
function rM(e) {
    for (var t = e.length; t-- && tM.test(e.charAt(t)); );
    return t;
}
var nM = rM,
    iM = nM,
    aM = /^\s+/;
function oM(e) {
    return e && e.slice(0, iM(e) + 1).replace(aM, "");
}
var sM = oM,
    uM = Up,
    lM = uM.Symbol,
    Hp = lM,
    Xc = Hp,
    Wp = Object.prototype,
    cM = Wp.hasOwnProperty,
    fM = Wp.toString,
    en = Xc ? Xc.toStringTag : void 0;
function hM(e) {
    var t = cM.call(e, en),
        r = e[en];
    try {
        e[en] = void 0;
        var n = !0;
    } catch {}
    var i = fM.call(e);
    return n && (t ? (e[en] = r) : delete e[en]), i;
}
var dM = hM,
    pM = Object.prototype,
    vM = pM.toString;
function yM(e) {
    return vM.call(e);
}
var gM = yM,
    Kc = Hp,
    mM = dM,
    bM = gM,
    xM = "[object Null]",
    wM = "[object Undefined]",
    Jc = Kc ? Kc.toStringTag : void 0;
function _M(e) {
    return e == null
        ? e === void 0
            ? wM
            : xM
        : Jc && Jc in Object(e)
        ? mM(e)
        : bM(e);
}
var SM = _M;
function OM(e) {
    return e != null && typeof e == "object";
}
var AM = OM,
    $M = SM,
    TM = AM,
    PM = "[object Symbol]";
function EM(e) {
    return typeof e == "symbol" || (TM(e) && $M(e) == PM);
}
var MM = EM,
    kM = sM,
    Zc = Uu,
    CM = MM,
    Qc = 0 / 0,
    IM = /^[-+]0x[0-9a-f]+$/i,
    NM = /^0b[01]+$/i,
    RM = /^0o[0-7]+$/i,
    DM = parseInt;
function LM(e) {
    if (typeof e == "number") return e;
    if (CM(e)) return Qc;
    if (Zc(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Zc(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = kM(e);
    var r = NM.test(e);
    return r || RM.test(e) ? DM(e.slice(2), r ? 2 : 8) : IM.test(e) ? Qc : +e;
}
var jM = LM,
    FM = Uu,
    ho = eM,
    ef = jM,
    BM = "Expected a function",
    UM = Math.max,
    HM = Math.min;
function WM(e, t, r) {
    var n,
        i,
        a,
        o,
        s,
        u,
        l = 0,
        c = !1,
        f = !1,
        d = !0;
    if (typeof e != "function") throw new TypeError(BM);
    (t = ef(t) || 0),
        FM(r) &&
            ((c = !!r.leading),
            (f = "maxWait" in r),
            (a = f ? UM(ef(r.maxWait) || 0, t) : a),
            (d = "trailing" in r ? !!r.trailing : d));
    function y(w) {
        var S = n,
            A = i;
        return (n = i = void 0), (l = w), (o = e.apply(A, S)), o;
    }
    function p(w) {
        return (l = w), (s = setTimeout(g, t)), c ? y(w) : o;
    }
    function h(w) {
        var S = w - u,
            A = w - l,
            $ = t - S;
        return f ? HM($, a - A) : $;
    }
    function v(w) {
        var S = w - u,
            A = w - l;
        return u === void 0 || S >= t || S < 0 || (f && A >= a);
    }
    function g() {
        var w = ho();
        if (v(w)) return _(w);
        s = setTimeout(g, h(w));
    }
    function _(w) {
        return (s = void 0), d && n ? y(w) : ((n = i = void 0), o);
    }
    function b() {
        s !== void 0 && clearTimeout(s), (l = 0), (n = u = i = s = void 0);
    }
    function m() {
        return s === void 0 ? o : _(ho());
    }
    function x() {
        var w = ho(),
            S = v(w);
        if (((n = arguments), (i = this), (u = w), S)) {
            if (s === void 0) return p(u);
            if (f) return clearTimeout(s), (s = setTimeout(g, t)), y(u);
        }
        return s === void 0 && (s = setTimeout(g, t)), o;
    }
    return (x.cancel = b), (x.flush = m), x;
}
var zp = WM,
    zM = zp,
    GM = Uu,
    qM = "Expected a function";
function VM(e, t, r) {
    var n = !0,
        i = !0;
    if (typeof e != "function") throw new TypeError(qM);
    return (
        GM(r) &&
            ((n = "leading" in r ? !!r.leading : n),
            (i = "trailing" in r ? !!r.trailing : i)),
        zM(e, t, { leading: n, maxWait: t, trailing: i })
    );
}
var YM = VM,
    XM = function (e, t, r, n) {
        switch (t) {
            case "debounce":
                return zp(e, r, n);
            case "throttle":
                return YM(e, r, n);
            default:
                return e;
        }
    },
    _s = function (e) {
        return typeof e == "function";
    },
    tn = function () {
        return typeof window > "u";
    },
    tf = function (e) {
        return e instanceof Element || e instanceof HTMLDocument;
    },
    KM = function (e, t, r, n) {
        return function (i) {
            var a = i.width,
                o = i.height;
            t(function (s) {
                return (s.width === a && s.height === o) ||
                    (s.width === a && !n) ||
                    (s.height === o && !r)
                    ? s
                    : (e && _s(e) && e(a, o), { width: a, height: o });
            });
        };
    },
    JM = (function (e) {
        zE(t, e);
        function t(r) {
            var n = e.call(this, r) || this;
            (n.cancelHandler = function () {
                n.resizeHandler &&
                    n.resizeHandler.cancel &&
                    (n.resizeHandler.cancel(), (n.resizeHandler = null));
            }),
                (n.attachObserver = function () {
                    var l = n.props,
                        c = l.targetRef,
                        f = l.observerOptions;
                    if (!tn()) {
                        c && c.current && (n.targetRef.current = c.current);
                        var d = n.getElement();
                        !d ||
                            (n.observableElement &&
                                n.observableElement === d) ||
                            ((n.observableElement = d),
                            n.resizeObserver.observe(d, f));
                    }
                }),
                (n.getElement = function () {
                    var l = n.props,
                        c = l.querySelector,
                        f = l.targetDomEl;
                    if (tn()) return null;
                    if (c) return document.querySelector(c);
                    if (f && tf(f)) return f;
                    if (n.targetRef && tf(n.targetRef.current))
                        return n.targetRef.current;
                    var d = sd.exports.findDOMNode(n);
                    if (!d) return null;
                    var y = n.getRenderType();
                    switch (y) {
                        case "renderProp":
                            return d;
                        case "childFunction":
                            return d;
                        case "child":
                            return d;
                        case "childArray":
                            return d;
                        default:
                            return d.parentElement;
                    }
                }),
                (n.createResizeHandler = function (l) {
                    var c = n.props,
                        f = c.handleWidth,
                        d = f === void 0 ? !0 : f,
                        y = c.handleHeight,
                        p = y === void 0 ? !0 : y,
                        h = c.onResize;
                    if (!(!d && !p)) {
                        var v = KM(h, n.setState.bind(n), d, p);
                        l.forEach(function (g) {
                            var _ = (g && g.contentRect) || {},
                                b = _.width,
                                m = _.height,
                                x = !n.skipOnMount && !tn();
                            x && v({ width: b, height: m }),
                                (n.skipOnMount = !1);
                        });
                    }
                }),
                (n.getRenderType = function () {
                    var l = n.props,
                        c = l.render,
                        f = l.children;
                    return _s(c)
                        ? "renderProp"
                        : _s(f)
                        ? "childFunction"
                        : T.exports.isValidElement(f)
                        ? "child"
                        : Array.isArray(f)
                        ? "childArray"
                        : "parent";
                });
            var i = r.skipOnMount,
                a = r.refreshMode,
                o = r.refreshRate,
                s = o === void 0 ? 1e3 : o,
                u = r.refreshOptions;
            return (
                (n.state = { width: void 0, height: void 0 }),
                (n.skipOnMount = i),
                (n.targetRef = T.exports.createRef()),
                (n.observableElement = null),
                tn() ||
                    ((n.resizeHandler = XM(n.createResizeHandler, a, s, u)),
                    (n.resizeObserver = new window.ResizeObserver(
                        n.resizeHandler
                    ))),
                n
            );
        }
        return (
            (t.prototype.componentDidMount = function () {
                this.attachObserver();
            }),
            (t.prototype.componentDidUpdate = function () {
                this.attachObserver();
            }),
            (t.prototype.componentWillUnmount = function () {
                tn() ||
                    ((this.observableElement = null),
                    this.resizeObserver.disconnect(),
                    this.cancelHandler());
            }),
            (t.prototype.render = function () {
                var r = this.props,
                    n = r.render,
                    i = r.children,
                    a = r.nodeType,
                    o = a === void 0 ? "div" : a,
                    s = this.state,
                    u = s.width,
                    l = s.height,
                    c = { width: u, height: l, targetRef: this.targetRef },
                    f = this.getRenderType(),
                    d;
                switch (f) {
                    case "renderProp":
                        return n && n(c);
                    case "childFunction":
                        return (d = i), d(c);
                    case "child":
                        if (((d = i), d.type && typeof d.type == "string")) {
                            c.targetRef;
                            var y = GE(c, ["targetRef"]);
                            return T.exports.cloneElement(d, y);
                        }
                        return T.exports.cloneElement(d, c);
                    case "childArray":
                        return (
                            (d = i),
                            d.map(function (p) {
                                return !!p && T.exports.cloneElement(p, c);
                            })
                        );
                    default:
                        return T.exports.createElement(o, null);
                }
            }),
            t
        );
    })(T.exports.PureComponent),
    wr = function (t, r) {
        for (
            var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2;
            a < n;
            a++
        )
            i[a - 2] = arguments[a];
    };
function rf(e, t) {
    return tk(e) || ek(e, t) || QM(e, t) || ZM();
}
function ZM() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QM(e, t) {
    if (!!e) {
        if (typeof e == "string") return nf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return nf(e, t);
    }
}
function nf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function ek(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var o = e[Symbol.iterator](), s;
                !(n = (s = o.next()).done) &&
                (r.push(s.value), !(t && r.length === t));
                n = !0
            );
        } catch (u) {
            (i = !0), (a = u);
        } finally {
            try {
                !n && o.return != null && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return r;
    }
}
function tk(e) {
    if (Array.isArray(e)) return e;
}
var rk = T.exports.forwardRef(function (e, t) {
        var r = e.aspect,
            n = e.width,
            i = n === void 0 ? "100%" : n,
            a = e.height,
            o = a === void 0 ? "100%" : a,
            s = e.minWidth,
            u = e.minHeight,
            l = e.maxHeight,
            c = e.children,
            f = e.debounce,
            d = f === void 0 ? 0 : f,
            y = e.id,
            p = e.className,
            h = T.exports.useState({ containerWidth: -1, containerHeight: -1 }),
            v = rf(h, 2),
            g = v[0],
            _ = v[1],
            b = T.exports.useRef(null);
        T.exports.useImperativeHandle(
            t,
            function () {
                return b;
            },
            [b]
        );
        var m = T.exports.useState(!1),
            x = rf(m, 2),
            w = x[0],
            S = x[1],
            A = function () {
                return b.current
                    ? {
                          containerWidth: b.current.clientWidth,
                          containerHeight: b.current.clientHeight,
                      }
                    : null;
            },
            $ = function () {
                if (!!w) {
                    var I = A();
                    if (I) {
                        var R = g.containerWidth,
                            C = g.containerHeight,
                            B = I.containerWidth,
                            j = I.containerHeight;
                        (B !== R || j !== C) &&
                            _({ containerWidth: B, containerHeight: j });
                    }
                }
            },
            E = d > 0 ? Bp($, d) : $,
            P = function () {
                var I = g.containerWidth,
                    R = g.containerHeight;
                if (I < 0 || R < 0) return null;
                wr(
                    Qt(i) || Qt(o),
                    `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
                    i,
                    o
                ),
                    wr(
                        !r || r > 0,
                        "The aspect(%s) must be greater than zero.",
                        r
                    );
                var C = Qt(i) ? I : i,
                    B = Qt(o) ? R : o;
                return (
                    r &&
                        r > 0 &&
                        (C ? (B = C / r) : B && (C = B * r),
                        l && B > l && (B = l)),
                    wr(
                        C > 0 || B > 0,
                        `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
                        C,
                        B,
                        i,
                        o,
                        s,
                        u,
                        r
                    ),
                    T.exports.cloneElement(c, { width: C, height: B })
                );
            };
        T.exports.useEffect(
            function () {
                if (w) {
                    var k = A();
                    k && _(k);
                }
            },
            [w]
        ),
            T.exports.useEffect(function () {
                S(!0);
            }, []);
        var M = {
            width: i,
            height: o,
            minWidth: s,
            minHeight: u,
            maxHeight: l,
        };
        return O(JM, {
            handleWidth: !0,
            handleHeight: !0,
            onResize: E,
            targetRef: b,
            children: O("div", {
                ...(y != null ? { id: "".concat(y) } : {}),
                className: pe("recharts-responsive-container", p),
                style: M,
                ref: b,
                children: P(),
            }),
        });
    }),
    Ss = { exports: {} },
    po = "(".charCodeAt(0),
    vo = ")".charCodeAt(0),
    zn = "'".charCodeAt(0),
    yo = '"'.charCodeAt(0),
    go = "\\".charCodeAt(0),
    Gn = "/".charCodeAt(0),
    mo = ",".charCodeAt(0),
    bo = ":".charCodeAt(0),
    af = "*".charCodeAt(0),
    nk = function (e) {
        for (
            var t = [],
                r = e,
                n,
                i,
                a,
                o,
                s,
                u,
                l,
                c = 0,
                f = r.charCodeAt(c),
                d = r.length,
                y = [{ nodes: t }],
                p = 0,
                h,
                v = "",
                g = "",
                _ = "";
            c < d;

        )
            if (f <= 32) {
                n = c;
                do (n += 1), (f = r.charCodeAt(n));
                while (f <= 32);
                (o = r.slice(c, n)),
                    (a = t[t.length - 1]),
                    f === vo && p
                        ? (_ = o)
                        : a && a.type === "div"
                        ? (a.after = o)
                        : f === mo ||
                          f === bo ||
                          (f === Gn && r.charCodeAt(n + 1) !== af)
                        ? (g = o)
                        : t.push({ type: "space", sourceIndex: c, value: o }),
                    (c = n);
            } else if (f === zn || f === yo) {
                (n = c),
                    (i = f === zn ? "'" : '"'),
                    (o = { type: "string", sourceIndex: c, quote: i });
                do
                    if (((s = !1), (n = r.indexOf(i, n + 1)), ~n))
                        for (u = n; r.charCodeAt(u - 1) === go; )
                            (u -= 1), (s = !s);
                    else (r += i), (n = r.length - 1), (o.unclosed = !0);
                while (s);
                (o.value = r.slice(c + 1, n)),
                    t.push(o),
                    (c = n + 1),
                    (f = r.charCodeAt(c));
            } else if (f === Gn && r.charCodeAt(c + 1) === af)
                (o = { type: "comment", sourceIndex: c }),
                    (n = r.indexOf("*/", c)),
                    n === -1 && ((o.unclosed = !0), (n = r.length)),
                    (o.value = r.slice(c + 2, n)),
                    t.push(o),
                    (c = n + 2),
                    (f = r.charCodeAt(c));
            else if (f === Gn || f === mo || f === bo)
                (o = r[c]),
                    t.push({
                        type: "div",
                        sourceIndex: c - g.length,
                        value: o,
                        before: g,
                        after: "",
                    }),
                    (g = ""),
                    (c += 1),
                    (f = r.charCodeAt(c));
            else if (po === f) {
                n = c;
                do (n += 1), (f = r.charCodeAt(n));
                while (f <= 32);
                if (
                    ((o = {
                        type: "function",
                        sourceIndex: c - v.length,
                        value: v,
                        before: r.slice(c + 1, n),
                    }),
                    (c = n),
                    v === "url" && f !== zn && f !== yo)
                ) {
                    n -= 1;
                    do
                        if (((s = !1), (n = r.indexOf(")", n + 1)), ~n))
                            for (u = n; r.charCodeAt(u - 1) === go; )
                                (u -= 1), (s = !s);
                        else (r += ")"), (n = r.length - 1), (o.unclosed = !0);
                    while (s);
                    l = n;
                    do (l -= 1), (f = r.charCodeAt(l));
                    while (f <= 32);
                    c !== l + 1
                        ? (o.nodes = [
                              {
                                  type: "word",
                                  sourceIndex: c,
                                  value: r.slice(c, l + 1),
                              },
                          ])
                        : (o.nodes = []),
                        o.unclosed && l + 1 !== n
                            ? ((o.after = ""),
                              o.nodes.push({
                                  type: "space",
                                  sourceIndex: l + 1,
                                  value: r.slice(l + 1, n),
                              }))
                            : (o.after = r.slice(l + 1, n)),
                        (c = n + 1),
                        (f = r.charCodeAt(c)),
                        t.push(o);
                } else
                    (p += 1),
                        (o.after = ""),
                        t.push(o),
                        y.push(o),
                        (t = o.nodes = []),
                        (h = o);
                v = "";
            } else if (vo === f && p)
                (c += 1),
                    (f = r.charCodeAt(c)),
                    (h.after = _),
                    (_ = ""),
                    (p -= 1),
                    y.pop(),
                    (h = y[p]),
                    (t = h.nodes);
            else {
                n = c;
                do f === go && (n += 1), (n += 1), (f = r.charCodeAt(n));
                while (
                    n < d &&
                    !(
                        f <= 32 ||
                        f === zn ||
                        f === yo ||
                        f === mo ||
                        f === bo ||
                        f === Gn ||
                        f === po ||
                        (f === vo && p)
                    )
                );
                (o = r.slice(c, n)),
                    po === f
                        ? (v = o)
                        : t.push({ type: "word", sourceIndex: c, value: o }),
                    (c = n);
            }
        for (c = y.length - 1; c; c -= 1) y[c].unclosed = !0;
        return y[0].nodes;
    },
    ik = function e(t, r, n) {
        var i, a, o, s;
        for (i = 0, a = t.length; i < a; i += 1)
            (o = t[i]),
                n || (s = r(o, i, t)),
                s !== !1 &&
                    o.type === "function" &&
                    Array.isArray(o.nodes) &&
                    e(o.nodes, r, n),
                n && r(o, i, t);
    };
function of(e, t) {
    var r = e.type,
        n = e.value,
        i,
        a;
    return t && (a = t(e)) !== void 0
        ? a
        : r === "word" || r === "space"
        ? n
        : r === "string"
        ? ((i = e.quote || ""), i + n + (e.unclosed ? "" : i))
        : r === "comment"
        ? "/*" + n + (e.unclosed ? "" : "*/")
        : r === "div"
        ? (e.before || "") + n + (e.after || "")
        : Array.isArray(e.nodes)
        ? ((i = Gp(e.nodes)),
          r !== "function"
              ? i
              : n +
                "(" +
                (e.before || "") +
                i +
                (e.after || "") +
                (e.unclosed ? "" : ")"))
        : n;
}
function Gp(e, t) {
    var r, n;
    if (Array.isArray(e)) {
        for (r = "", n = e.length - 1; ~n; n -= 1) r = of(e[n], t) + r;
        return r;
    }
    return of(e, t);
}
var ak = Gp,
    xo,
    sf;
function ok() {
    if (sf) return xo;
    sf = 1;
    var e = "-".charCodeAt(0),
        t = "+".charCodeAt(0),
        r = ".".charCodeAt(0),
        n = "e".charCodeAt(0),
        i = "E".charCodeAt(0);
    return (
        (xo = function (a) {
            for (var o = 0, s = a.length, u = !1, l = -1, c = !1, f; o < s; ) {
                if (((f = a.charCodeAt(o)), f >= 48 && f <= 57)) c = !0;
                else if (f === n || f === i) {
                    if (l > -1) break;
                    l = o;
                } else if (f === r) {
                    if (u) break;
                    u = !0;
                } else if (f === t || f === e) {
                    if (o !== 0) break;
                } else break;
                o += 1;
            }
            return (
                l + 1 === o && o--,
                c ? { number: a.slice(0, o), unit: a.slice(o) } : !1
            );
        }),
        xo
    );
}
var sk = nk,
    qp = ik,
    Vp = ak;
function Ft(e) {
    return this instanceof Ft ? ((this.nodes = sk(e)), this) : new Ft(e);
}
Ft.prototype.toString = function () {
    return Array.isArray(this.nodes) ? Vp(this.nodes) : "";
};
Ft.prototype.walk = function (e, t) {
    return qp(this.nodes, e, t), this;
};
Ft.unit = ok();
Ft.walk = qp;
Ft.stringify = Vp;
var uk = Ft;
function lk(e) {
    throw new Error(
        'Could not dynamically require "' +
            e +
            '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
}
var Yp = {};
(function (e) {
    var t = (function () {
        function r(d, y) {
            Object.defineProperty(this, "name", {
                enumerable: !1,
                writable: !1,
                value: "JisonParserError",
            }),
                d == null && (d = "???"),
                Object.defineProperty(this, "message", {
                    enumerable: !1,
                    writable: !0,
                    value: d,
                }),
                (this.hash = y);
            var p;
            if (y && y.exception instanceof Error) {
                var h = y.exception;
                (this.message = h.message || d), (p = h.stack);
            }
            p ||
                (Error.hasOwnProperty("captureStackTrace")
                    ? Error.captureStackTrace(this, this.constructor)
                    : (p = new Error(d).stack)),
                p &&
                    Object.defineProperty(this, "stack", {
                        enumerable: !1,
                        writable: !1,
                        value: p,
                    });
        }
        typeof Object.setPrototypeOf == "function"
            ? Object.setPrototypeOf(r.prototype, Error.prototype)
            : (r.prototype = Object.create(Error.prototype)),
            (r.prototype.constructor = r),
            (r.prototype.name = "JisonParserError");
        function n(d) {
            for (
                var y = [], p = d.pop, h = d.rule, v = 0, g = p.length;
                v < g;
                v++
            )
                y.push([p[v], h[v]]);
            return y;
        }
        function i(d) {
            for (
                var y = {}, p = d.idx, h = d.goto, v = 0, g = p.length;
                v < g;
                v++
            ) {
                var _ = p[v];
                y[_] = h[v];
            }
            return y;
        }
        function a(d) {
            for (
                var y = [],
                    p = d.len,
                    h = d.symbol,
                    v = d.type,
                    g = d.state,
                    _ = d.mode,
                    b = d.goto,
                    m = 0,
                    x = p.length;
                m < x;
                m++
            ) {
                for (var w = p[m], S = {}, A = 0; A < w; A++) {
                    var $ = h.shift();
                    switch (v.shift()) {
                        case 2:
                            S[$] = [_.shift(), b.shift()];
                            break;
                        case 0:
                            S[$] = g.shift();
                            break;
                        default:
                            S[$] = [3];
                    }
                }
                y.push(S);
            }
            return y;
        }
        function o(d, y, p) {
            p = p || 0;
            for (var h = 0; h < y; h++) this.push(d), (d += p);
        }
        function s(d, y) {
            for (d = this.length - d, y += d; d < y; d++) this.push(this[d]);
        }
        function u(d) {
            for (var y = [], p = 0, h = d.length; p < h; p++) {
                var v = d[p];
                typeof v == "function" ? (p++, v.apply(y, d[p])) : y.push(v);
            }
            return y;
        }
        var l = {
            trace: function () {},
            JisonParserError: r,
            yy: {},
            options: {
                type: "lalr",
                hasPartialLrUpgradeOnConflict: !0,
                errorRecoveryTokenDiscardCount: 3,
            },
            symbols_: {
                $accept: 0,
                $end: 1,
                ADD: 3,
                ANGLE: 16,
                CHS: 22,
                COMMA: 14,
                CSS_CPROP: 13,
                CSS_VAR: 12,
                DIV: 6,
                EMS: 20,
                EOF: 1,
                EXS: 21,
                FREQ: 18,
                LENGTH: 15,
                LPAREN: 7,
                MUL: 5,
                NESTED_CALC: 9,
                NUMBER: 11,
                PERCENTAGE: 28,
                PREFIX: 10,
                REMS: 23,
                RES: 19,
                RPAREN: 8,
                SUB: 4,
                TIME: 17,
                VHS: 24,
                VMAXS: 27,
                VMINS: 26,
                VWS: 25,
                css_value: 33,
                css_variable: 32,
                error: 2,
                expression: 29,
                math_expression: 30,
                value: 31,
            },
            terminals_: {
                1: "EOF",
                2: "error",
                3: "ADD",
                4: "SUB",
                5: "MUL",
                6: "DIV",
                7: "LPAREN",
                8: "RPAREN",
                9: "NESTED_CALC",
                10: "PREFIX",
                11: "NUMBER",
                12: "CSS_VAR",
                13: "CSS_CPROP",
                14: "COMMA",
                15: "LENGTH",
                16: "ANGLE",
                17: "TIME",
                18: "FREQ",
                19: "RES",
                20: "EMS",
                21: "EXS",
                22: "CHS",
                23: "REMS",
                24: "VHS",
                25: "VWS",
                26: "VMINS",
                27: "VMAXS",
                28: "PERCENTAGE",
            },
            TERROR: 2,
            EOF: 1,
            originalQuoteName: null,
            originalParseError: null,
            cleanupAfterParse: null,
            constructParseErrorInfo: null,
            yyMergeLocationInfo: null,
            __reentrant_call_depth: 0,
            __error_infos: [],
            __error_recovery_infos: [],
            quoteName: function (y) {
                return '"' + y + '"';
            },
            getSymbolName: function (y) {
                if (this.terminals_[y]) return this.terminals_[y];
                var p = this.symbols_;
                for (var h in p) if (p[h] === y) return h;
                return null;
            },
            describeSymbol: function (y) {
                if (
                    y !== this.EOF &&
                    this.terminal_descriptions_ &&
                    this.terminal_descriptions_[y]
                )
                    return this.terminal_descriptions_[y];
                if (y === this.EOF) return "end of input";
                var p = this.getSymbolName(y);
                return p ? this.quoteName(p) : null;
            },
            collect_expected_token_set: function (y, p) {
                var h = this.TERROR,
                    v = [],
                    g = {};
                if (
                    !p &&
                    this.state_descriptions_ &&
                    this.state_descriptions_[y]
                )
                    return [this.state_descriptions_[y]];
                for (var _ in this.table[y])
                    if (((_ = +_), _ !== h)) {
                        var b = p ? _ : this.describeSymbol(_);
                        b && !g[b] && (v.push(b), (g[b] = !0));
                    }
                return v;
            },
            productions_: n({
                pop: u([29, o, [30, 10], 31, 31, 32, 32, o, [33, 15]]),
                rule: u([
                    2,
                    o,
                    [3, 5],
                    4,
                    7,
                    o,
                    [1, 4],
                    2,
                    4,
                    6,
                    o,
                    [1, 14],
                    2,
                ]),
            }),
            performAction: function (y, p, h) {
                var v = this.yy;
                switch ((v.parser, v.lexer, y)) {
                    case 0:
                        this.$ = h[p - 1];
                        break;
                    case 1:
                        return (this.$ = h[p - 1]), h[p - 1];
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        this.$ = {
                            type: "MathExpression",
                            operator: h[p - 1],
                            left: h[p - 2],
                            right: h[p],
                        };
                        break;
                    case 6:
                        this.$ = h[p - 1];
                        break;
                    case 7:
                        this.$ = { type: "Calc", value: h[p - 1] };
                        break;
                    case 8:
                        this.$ = {
                            type: "Calc",
                            value: h[p - 1],
                            prefix: h[p - 5],
                        };
                        break;
                    case 9:
                    case 10:
                    case 11:
                        this.$ = h[p];
                        break;
                    case 12:
                        this.$ = { type: "Value", value: parseFloat(h[p]) };
                        break;
                    case 13:
                        this.$ = {
                            type: "Value",
                            value: parseFloat(h[p]) * -1,
                        };
                        break;
                    case 14:
                        this.$ = { type: "CssVariable", value: h[p - 1] };
                        break;
                    case 15:
                        this.$ = {
                            type: "CssVariable",
                            value: h[p - 3],
                            fallback: h[p - 1],
                        };
                        break;
                    case 16:
                        this.$ = {
                            type: "LengthValue",
                            value: parseFloat(h[p]),
                            unit: /[a-z]+/.exec(h[p])[0],
                        };
                        break;
                    case 17:
                        this.$ = {
                            type: "AngleValue",
                            value: parseFloat(h[p]),
                            unit: /[a-z]+/.exec(h[p])[0],
                        };
                        break;
                    case 18:
                        this.$ = {
                            type: "TimeValue",
                            value: parseFloat(h[p]),
                            unit: /[a-z]+/.exec(h[p])[0],
                        };
                        break;
                    case 19:
                        this.$ = {
                            type: "FrequencyValue",
                            value: parseFloat(h[p]),
                            unit: /[a-z]+/.exec(h[p])[0],
                        };
                        break;
                    case 20:
                        this.$ = {
                            type: "ResolutionValue",
                            value: parseFloat(h[p]),
                            unit: /[a-z]+/.exec(h[p])[0],
                        };
                        break;
                    case 21:
                        this.$ = {
                            type: "EmValue",
                            value: parseFloat(h[p]),
                            unit: "em",
                        };
                        break;
                    case 22:
                        this.$ = {
                            type: "ExValue",
                            value: parseFloat(h[p]),
                            unit: "ex",
                        };
                        break;
                    case 23:
                        this.$ = {
                            type: "ChValue",
                            value: parseFloat(h[p]),
                            unit: "ch",
                        };
                        break;
                    case 24:
                        this.$ = {
                            type: "RemValue",
                            value: parseFloat(h[p]),
                            unit: "rem",
                        };
                        break;
                    case 25:
                        this.$ = {
                            type: "VhValue",
                            value: parseFloat(h[p]),
                            unit: "vh",
                        };
                        break;
                    case 26:
                        this.$ = {
                            type: "VwValue",
                            value: parseFloat(h[p]),
                            unit: "vw",
                        };
                        break;
                    case 27:
                        this.$ = {
                            type: "VminValue",
                            value: parseFloat(h[p]),
                            unit: "vmin",
                        };
                        break;
                    case 28:
                        this.$ = {
                            type: "VmaxValue",
                            value: parseFloat(h[p]),
                            unit: "vmax",
                        };
                        break;
                    case 29:
                        this.$ = {
                            type: "PercentageValue",
                            value: parseFloat(h[p]),
                            unit: "%",
                        };
                        break;
                    case 30:
                        var g = h[p];
                        (g.value *= -1), (this.$ = g);
                        break;
                }
            },
            table: a({
                len: u([
                    24,
                    1,
                    5,
                    23,
                    1,
                    18,
                    o,
                    [0, 3],
                    1,
                    o,
                    [0, 16],
                    o,
                    [23, 4],
                    s,
                    [28, 3],
                    0,
                    0,
                    16,
                    1,
                    6,
                    6,
                    o,
                    [0, 3],
                    5,
                    1,
                    2,
                    s,
                    [37, 3],
                    s,
                    [20, 3],
                    5,
                    0,
                    0,
                ]),
                symbol: u([
                    4,
                    7,
                    9,
                    11,
                    12,
                    o,
                    [15, 19, 1],
                    1,
                    1,
                    o,
                    [3, 4, 1],
                    s,
                    [30, 19],
                    s,
                    [29, 4],
                    7,
                    4,
                    10,
                    11,
                    s,
                    [22, 14],
                    s,
                    [19, 3],
                    s,
                    [43, 22],
                    s,
                    [23, 69],
                    s,
                    [139, 4],
                    8,
                    s,
                    [51, 24],
                    4,
                    s,
                    [138, 15],
                    13,
                    s,
                    [186, 5],
                    8,
                    s,
                    [6, 6],
                    s,
                    [5, 5],
                    9,
                    8,
                    14,
                    s,
                    [159, 47],
                    s,
                    [60, 10],
                ]),
                type: u([
                    o,
                    [2, 19],
                    o,
                    [0, 5],
                    1,
                    o,
                    [2, 24],
                    o,
                    [0, 4],
                    s,
                    [22, 19],
                    s,
                    [43, 42],
                    s,
                    [23, 70],
                    s,
                    [28, 25],
                    s,
                    [45, 25],
                    s,
                    [113, 54],
                ]),
                state: u([
                    1,
                    2,
                    8,
                    6,
                    7,
                    30,
                    s,
                    [4, 3],
                    33,
                    37,
                    s,
                    [5, 3],
                    38,
                    s,
                    [4, 3],
                    39,
                    s,
                    [4, 3],
                    40,
                    s,
                    [4, 3],
                    42,
                    s,
                    [21, 4],
                    50,
                    s,
                    [5, 3],
                    51,
                    s,
                    [4, 3],
                ]),
                mode: u([
                    o,
                    [1, 179],
                    o,
                    [2, 3],
                    s,
                    [5, 5],
                    s,
                    [6, 4],
                    o,
                    [1, 57],
                ]),
                goto: u([
                    5,
                    3,
                    4,
                    24,
                    o,
                    [9, 15, 1],
                    o,
                    [25, 5, 1],
                    s,
                    [24, 19],
                    31,
                    35,
                    32,
                    34,
                    s,
                    [18, 14],
                    36,
                    s,
                    [38, 19],
                    s,
                    [19, 57],
                    s,
                    [118, 4],
                    41,
                    s,
                    [24, 19],
                    43,
                    35,
                    s,
                    [16, 14],
                    44,
                    o,
                    [2, 3],
                    28,
                    29,
                    2,
                    o,
                    [3, 3],
                    28,
                    29,
                    3,
                    s,
                    [53, 4],
                    o,
                    [45, 5, 1],
                    s,
                    [100, 42],
                    52,
                    s,
                    [5, 4],
                    53,
                ]),
            }),
            defaultActions: i({
                idx: u([
                    6,
                    7,
                    8,
                    o,
                    [10, 16, 1],
                    33,
                    34,
                    39,
                    40,
                    41,
                    45,
                    47,
                    52,
                    53,
                ]),
                goto: u([
                    9,
                    10,
                    11,
                    o,
                    [16, 14, 1],
                    12,
                    1,
                    30,
                    13,
                    o,
                    [4, 4, 1],
                    14,
                    15,
                    8,
                ]),
            }),
            parseError: function (y, p, h) {
                if (p.recoverable)
                    typeof this.trace == "function" && this.trace(y),
                        p.destroy();
                else
                    throw (
                        (typeof this.trace == "function" && this.trace(y),
                        h || (h = this.JisonParserError),
                        new h(y, p))
                    );
            },
            parse: function (y) {
                var p = this,
                    h = new Array(128),
                    v = new Array(128),
                    g = new Array(128),
                    _ = this.table,
                    b = 0,
                    m = 0;
                this.TERROR;
                var x = this.EOF;
                this.options.errorRecoveryTokenDiscardCount | 0;
                var w = [0, 54],
                    S;
                this.__lexer__
                    ? (S = this.__lexer__)
                    : (S = this.__lexer__ = Object.create(this.lexer));
                var A = {
                    parseError: void 0,
                    quoteName: void 0,
                    lexer: void 0,
                    parser: void 0,
                    pre_parse: void 0,
                    post_parse: void 0,
                    pre_lex: void 0,
                    post_lex: void 0,
                };
                typeof assert != "function" || assert,
                    (this.yyGetSharedState = function () {
                        return A;
                    });
                function $(J, F) {
                    for (var q in F)
                        typeof J[q] > "u" &&
                            Object.prototype.hasOwnProperty.call(F, q) &&
                            (J[q] = F[q]);
                }
                $(A, this.yy),
                    (A.lexer = S),
                    (A.parser = this),
                    typeof A.parseError == "function"
                        ? (this.parseError = function (F, q, Y) {
                              return (
                                  Y || (Y = this.JisonParserError),
                                  A.parseError.call(this, F, q, Y)
                              );
                          })
                        : (this.parseError = this.originalParseError),
                    typeof A.quoteName == "function"
                        ? (this.quoteName = function (F) {
                              return A.quoteName.call(this, F);
                          })
                        : (this.quoteName = this.originalQuoteName),
                    (this.cleanupAfterParse = function (F, q, Y) {
                        var D;
                        if (q) {
                            var se;
                            (A.post_parse || this.post_parse) &&
                                (se = this.constructParseErrorInfo(
                                    null,
                                    null,
                                    null,
                                    !1
                                )),
                                A.post_parse &&
                                    ((D = A.post_parse.call(this, A, F, se)),
                                    typeof D < "u" && (F = D)),
                                this.post_parse &&
                                    ((D = this.post_parse.call(this, A, F, se)),
                                    typeof D < "u" && (F = D)),
                                se && se.destroy && se.destroy();
                        }
                        if (this.__reentrant_call_depth > 1) return F;
                        if (
                            (S.cleanupAfterLex && S.cleanupAfterLex(Y),
                            A &&
                                ((A.lexer = void 0),
                                (A.parser = void 0),
                                S.yy === A && (S.yy = void 0)),
                            (A = void 0),
                            (this.parseError = this.originalParseError),
                            (this.quoteName = this.originalQuoteName),
                            (h.length = 0),
                            (v.length = 0),
                            (g.length = 0),
                            (b = 0),
                            !Y)
                        ) {
                            for (
                                var Q = this.__error_infos.length - 1;
                                Q >= 0;
                                Q--
                            ) {
                                var me = this.__error_infos[Q];
                                me &&
                                    typeof me.destroy == "function" &&
                                    me.destroy();
                            }
                            this.__error_infos.length = 0;
                        }
                        return F;
                    }),
                    (this.constructParseErrorInfo = function (F, q, Y, D) {
                        var se = {
                            errStr: F,
                            exception: q,
                            text: S.match,
                            value: S.yytext,
                            token: this.describeSymbol(m) || m,
                            token_id: m,
                            line: S.yylineno,
                            expected: Y,
                            recoverable: D,
                            state: k,
                            action: I,
                            new_state: Z,
                            symbol_stack: h,
                            state_stack: v,
                            value_stack: g,
                            stack_pointer: b,
                            yy: A,
                            lexer: S,
                            parser: this,
                            destroy: function () {
                                var me = !!this.recoverable;
                                for (var be in this)
                                    this.hasOwnProperty(be) &&
                                        typeof be == "object" &&
                                        (this[be] = void 0);
                                this.recoverable = me;
                            },
                        };
                        return this.__error_infos.push(se), se;
                    });
                function E() {
                    var J = S.lex();
                    return (
                        typeof J != "number" && (J = p.symbols_[J] || J), J || x
                    );
                }
                function P() {
                    var J = S.fastLex();
                    return (
                        typeof J != "number" && (J = p.symbols_[J] || J), J || x
                    );
                }
                var M = E,
                    k,
                    I,
                    R,
                    C,
                    B = { $: !0, _$: void 0, yy: A },
                    j,
                    H,
                    G,
                    Z,
                    ee = !1;
                try {
                    if (
                        (this.__reentrant_call_depth++,
                        S.setInput(y, A),
                        typeof S.canIUse == "function")
                    ) {
                        var oe = S.canIUse();
                        oe.fastLex && typeof P == "function" && (M = P);
                    }
                    for (
                        g[b] = null,
                            v[b] = 0,
                            h[b] = 0,
                            ++b,
                            this.pre_parse && this.pre_parse.call(this, A),
                            A.pre_parse && A.pre_parse.call(this, A),
                            Z = v[b - 1];
                        ;

                    ) {
                        if (((k = Z), this.defaultActions[k]))
                            (I = 2), (Z = this.defaultActions[k]);
                        else if (
                            (m || (m = M()),
                            (C = (_[k] && _[k][m]) || w),
                            (Z = C[1]),
                            (I = C[0]),
                            !I)
                        ) {
                            var ve,
                                _e = this.describeSymbol(m) || m,
                                De = this.collect_expected_token_set(k);
                            typeof S.yylineno == "number"
                                ? (ve =
                                      "Parse error on line " +
                                      (S.yylineno + 1) +
                                      ": ")
                                : (ve = "Parse error: "),
                                typeof S.showPosition == "function" &&
                                    (ve +=
                                        `
` +
                                        S.showPosition(79 - 10, 10) +
                                        `
`),
                                De.length
                                    ? (ve +=
                                          "Expecting " +
                                          De.join(", ") +
                                          ", got unexpected " +
                                          _e)
                                    : (ve += "Unexpected " + _e),
                                (j = this.constructParseErrorInfo(
                                    ve,
                                    null,
                                    De,
                                    !1
                                )),
                                (R = this.parseError(
                                    j.errStr,
                                    j,
                                    this.JisonParserError
                                )),
                                typeof R < "u" && (ee = R);
                            break;
                        }
                        switch (I) {
                            default:
                                if (I instanceof Array) {
                                    (j = this.constructParseErrorInfo(
                                        "Parse Error: multiple actions possible at state: " +
                                            k +
                                            ", token: " +
                                            m,
                                        null,
                                        null,
                                        !1
                                    )),
                                        (R = this.parseError(
                                            j.errStr,
                                            j,
                                            this.JisonParserError
                                        )),
                                        typeof R < "u" && (ee = R);
                                    break;
                                }
                                (j = this.constructParseErrorInfo(
                                    "Parsing halted. No viable error recovery approach available due to internal system failure.",
                                    null,
                                    null,
                                    !1
                                )),
                                    (R = this.parseError(
                                        j.errStr,
                                        j,
                                        this.JisonParserError
                                    )),
                                    typeof R < "u" && (ee = R);
                                break;
                            case 1:
                                (h[b] = m),
                                    (g[b] = S.yytext),
                                    (v[b] = Z),
                                    ++b,
                                    (m = 0);
                                continue;
                            case 2:
                                if (
                                    ((G = this.productions_[Z - 1]),
                                    (H = G[1]),
                                    (R = this.performAction.call(
                                        B,
                                        Z,
                                        b - 1,
                                        g
                                    )),
                                    typeof R < "u")
                                ) {
                                    ee = R;
                                    break;
                                }
                                b -= H;
                                var Tt = G[0];
                                (h[b] = Tt),
                                    (g[b] = B.$),
                                    (Z = _[v[b - 1]][Tt]),
                                    (v[b] = Z),
                                    ++b;
                                continue;
                            case 3:
                                b !== -2 &&
                                    ((ee = !0),
                                    b--,
                                    typeof g[b] < "u" && (ee = g[b]));
                                break;
                        }
                        break;
                    }
                } catch (J) {
                    if (J instanceof this.JisonParserError) throw J;
                    if (
                        S &&
                        typeof S.JisonLexerError == "function" &&
                        J instanceof S.JisonLexerError
                    )
                        throw J;
                    (j = this.constructParseErrorInfo(
                        "Parsing aborted due to exception.",
                        J,
                        null,
                        !1
                    )),
                        (ee = !1),
                        (R = this.parseError(
                            j.errStr,
                            j,
                            this.JisonParserError
                        )),
                        typeof R < "u" && (ee = R);
                } finally {
                    (ee = this.cleanupAfterParse(ee, !0, !0)),
                        this.__reentrant_call_depth--;
                }
                return ee;
            },
        };
        (l.originalParseError = l.parseError),
            (l.originalQuoteName = l.quoteName);
        var c = (function () {
            function d(p, h) {
                Object.defineProperty(this, "name", {
                    enumerable: !1,
                    writable: !1,
                    value: "JisonLexerError",
                }),
                    p == null && (p = "???"),
                    Object.defineProperty(this, "message", {
                        enumerable: !1,
                        writable: !0,
                        value: p,
                    }),
                    (this.hash = h);
                var v;
                if (h && h.exception instanceof Error) {
                    var g = h.exception;
                    (this.message = g.message || p), (v = g.stack);
                }
                v ||
                    (Error.hasOwnProperty("captureStackTrace")
                        ? Error.captureStackTrace(this, this.constructor)
                        : (v = new Error(p).stack)),
                    v &&
                        Object.defineProperty(this, "stack", {
                            enumerable: !1,
                            writable: !1,
                            value: v,
                        });
            }
            typeof Object.setPrototypeOf == "function"
                ? Object.setPrototypeOf(d.prototype, Error.prototype)
                : (d.prototype = Object.create(Error.prototype)),
                (d.prototype.constructor = d),
                (d.prototype.name = "JisonLexerError");
            var y = {
                EOF: 1,
                ERROR: 2,
                __currentRuleSet__: null,
                __error_infos: [],
                __decompressed: !1,
                done: !1,
                _backtrack: !1,
                _input: "",
                _more: !1,
                _signaled_error_token: !1,
                conditionStack: [],
                match: "",
                matched: "",
                matches: !1,
                yytext: "",
                offset: 0,
                yyleng: 0,
                yylineno: 0,
                yylloc: null,
                constructLexErrorInfo: function (h, v, g) {
                    if (
                        ((h = "" + h),
                        g == null &&
                            (g = !(
                                h.indexOf(`
`) > 0 && h.indexOf("^") > 0
                            )),
                        this.yylloc && g)
                    ) {
                        if (typeof this.prettyPrintRange == "function")
                            this.prettyPrintRange(this.yylloc),
                                /\n\s*$/.test(h) ||
                                    (h += `
`),
                                (h +=
                                    `
  Erroneous area:
` + this.prettyPrintRange(this.yylloc));
                        else if (typeof this.showPosition == "function") {
                            var _ = this.showPosition();
                            _ &&
                                (h.length &&
                                h[h.length - 1] !==
                                    `
` &&
                                _[0] !==
                                    `
`
                                    ? (h +=
                                          `
` + _)
                                    : (h += _));
                        }
                    }
                    var b = {
                        errStr: h,
                        recoverable: !!v,
                        text: this.match,
                        token: null,
                        line: this.yylineno,
                        loc: this.yylloc,
                        yy: this.yy,
                        lexer: this,
                        destroy: function () {
                            var x = !!this.recoverable;
                            for (var w in this)
                                this.hasOwnProperty(w) &&
                                    typeof w == "object" &&
                                    (this[w] = void 0);
                            this.recoverable = x;
                        },
                    };
                    return this.__error_infos.push(b), b;
                },
                parseError: function (h, v, g) {
                    if ((g || (g = this.JisonLexerError), this.yy)) {
                        if (
                            this.yy.parser &&
                            typeof this.yy.parser.parseError == "function"
                        )
                            return (
                                this.yy.parser.parseError.call(this, h, v, g) ||
                                this.ERROR
                            );
                        if (typeof this.yy.parseError == "function")
                            return (
                                this.yy.parseError.call(this, h, v, g) ||
                                this.ERROR
                            );
                    }
                    throw new g(h, v);
                },
                yyerror: function (h) {
                    var v = "";
                    this.yylloc && (v = " on line " + (this.yylineno + 1));
                    var g = this.constructLexErrorInfo(
                            "Lexical error" + v + ": " + h,
                            this.options.lexerErrorsAreRecoverable
                        ),
                        _ = Array.prototype.slice.call(arguments, 1);
                    return (
                        _.length && (g.extra_error_attributes = _),
                        this.parseError(g.errStr, g, this.JisonLexerError) ||
                            this.ERROR
                    );
                },
                cleanupAfterLex: function (h) {
                    if ((this.setInput("", {}), !h)) {
                        for (
                            var v = this.__error_infos.length - 1;
                            v >= 0;
                            v--
                        ) {
                            var g = this.__error_infos[v];
                            g && typeof g.destroy == "function" && g.destroy();
                        }
                        this.__error_infos.length = 0;
                    }
                    return this;
                },
                clear: function () {
                    (this.yytext = ""),
                        (this.yyleng = 0),
                        (this.match = ""),
                        (this.matches = !1),
                        (this._more = !1),
                        (this._backtrack = !1);
                    var h = this.yylloc ? this.yylloc.last_column : 0;
                    this.yylloc = {
                        first_line: this.yylineno + 1,
                        first_column: h,
                        last_line: this.yylineno + 1,
                        last_column: h,
                        range: [this.offset, this.offset],
                    };
                },
                setInput: function (h, v) {
                    if (
                        ((this.yy = v || this.yy || {}), !this.__decompressed)
                    ) {
                        for (
                            var g = this.rules, _ = 0, b = g.length;
                            _ < b;
                            _++
                        ) {
                            var m = g[_];
                            typeof m == "number" && (g[_] = g[m]);
                        }
                        var x = this.conditions;
                        for (var w in x) {
                            for (
                                var S = x[w],
                                    A = S.rules,
                                    b = A.length,
                                    $ = new Array(b + 1),
                                    E = new Array(b + 1),
                                    _ = 0;
                                _ < b;
                                _++
                            ) {
                                var P = A[_],
                                    m = g[P];
                                ($[_ + 1] = m), (E[_ + 1] = P);
                            }
                            (S.rules = E),
                                (S.__rule_regexes = $),
                                (S.__rule_count = b);
                        }
                        this.__decompressed = !0;
                    }
                    return (
                        (this._input = h || ""),
                        this.clear(),
                        (this._signaled_error_token = !1),
                        (this.done = !1),
                        (this.yylineno = 0),
                        (this.matched = ""),
                        (this.conditionStack = ["INITIAL"]),
                        (this.__currentRuleSet__ = null),
                        (this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0,
                            range: [0, 0],
                        }),
                        (this.offset = 0),
                        this
                    );
                },
                editRemainingInput: function (h, v) {
                    var g = h.call(this, this._input, v);
                    return (
                        typeof g != "string"
                            ? g && (this._input = "" + g)
                            : (this._input = g),
                        this
                    );
                },
                input: function () {
                    if (!this._input) return null;
                    var h = this._input[0];
                    (this.yytext += h),
                        this.yyleng++,
                        this.offset++,
                        (this.match += h),
                        (this.matched += h);
                    var v = 1,
                        g = !1;
                    if (
                        h ===
                        `
`
                    )
                        g = !0;
                    else if (h === "\r") {
                        g = !0;
                        var _ = this._input[1];
                        _ ===
                            `
` &&
                            (v++,
                            (h += _),
                            (this.yytext += _),
                            this.yyleng++,
                            this.offset++,
                            (this.match += _),
                            (this.matched += _),
                            this.yylloc.range[1]++);
                    }
                    return (
                        g
                            ? (this.yylineno++,
                              this.yylloc.last_line++,
                              (this.yylloc.last_column = 0))
                            : this.yylloc.last_column++,
                        this.yylloc.range[1]++,
                        (this._input = this._input.slice(v)),
                        h
                    );
                },
                unput: function (h) {
                    var v = h.length,
                        g = h.split(/(?:\r\n?|\n)/g);
                    if (
                        ((this._input = h + this._input),
                        (this.yytext = this.yytext.substr(
                            0,
                            this.yytext.length - v
                        )),
                        (this.yyleng = this.yytext.length),
                        (this.offset -= v),
                        (this.match = this.match.substr(
                            0,
                            this.match.length - v
                        )),
                        (this.matched = this.matched.substr(
                            0,
                            this.matched.length - v
                        )),
                        g.length > 1)
                    ) {
                        (this.yylineno -= g.length - 1),
                            (this.yylloc.last_line = this.yylineno + 1);
                        var _ = this.match,
                            b = _.split(/(?:\r\n?|\n)/g);
                        b.length === 1 &&
                            ((_ = this.matched),
                            (b = _.split(/(?:\r\n?|\n)/g))),
                            (this.yylloc.last_column = b[b.length - 1].length);
                    } else this.yylloc.last_column -= v;
                    return (
                        (this.yylloc.range[1] =
                            this.yylloc.range[0] + this.yyleng),
                        (this.done = !1),
                        this
                    );
                },
                more: function () {
                    return (this._more = !0), this;
                },
                reject: function () {
                    if (this.options.backtrack_lexer) this._backtrack = !0;
                    else {
                        var h = "";
                        this.yylloc && (h = " on line " + (this.yylineno + 1));
                        var v = this.constructLexErrorInfo(
                            "Lexical error" +
                                h +
                                ": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).",
                            !1
                        );
                        this._signaled_error_token =
                            this.parseError(
                                v.errStr,
                                v,
                                this.JisonLexerError
                            ) || this.ERROR;
                    }
                    return this;
                },
                less: function (h) {
                    return this.unput(this.match.slice(h));
                },
                pastInput: function (h, v) {
                    var g = this.matched.substring(
                        0,
                        this.matched.length - this.match.length
                    );
                    h < 0 ? (h = g.length) : h || (h = 20),
                        v < 0 ? (v = g.length) : v || (v = 1),
                        (g = g.substr(-h * 2 - 2));
                    var _ = g.replace(
                        /\r\n|\r/g,
                        `
`
                    ).split(`
`);
                    return (
                        (_ = _.slice(-v)),
                        (g = _.join(`
`)),
                        g.length > h && (g = "..." + g.substr(-h)),
                        g
                    );
                },
                upcomingInput: function (h, v) {
                    var g = this.match;
                    h < 0 ? (h = g.length + this._input.length) : h || (h = 20),
                        v < 0 ? (v = h) : v || (v = 1),
                        g.length < h * 2 + 2 &&
                            (g += this._input.substring(0, h * 2 + 2));
                    var _ = g.replace(
                        /\r\n|\r/g,
                        `
`
                    ).split(`
`);
                    return (
                        (_ = _.slice(0, v)),
                        (g = _.join(`
`)),
                        g.length > h && (g = g.substring(0, h) + "..."),
                        g
                    );
                },
                showPosition: function (h, v) {
                    var g = this.pastInput(h).replace(/\s/g, " "),
                        _ = new Array(g.length + 1).join("-");
                    return (
                        g +
                        this.upcomingInput(v).replace(/\s/g, " ") +
                        `
` +
                        _ +
                        "^"
                    );
                },
                deriveLocationInfo: function (h, v, g, _) {
                    var b = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                        range: [0, 0],
                    };
                    return (
                        h &&
                            ((b.first_line = h.first_line | 0),
                            (b.last_line = h.last_line | 0),
                            (b.first_column = h.first_column | 0),
                            (b.last_column = h.last_column | 0),
                            h.range &&
                                ((b.range[0] = h.range[0] | 0),
                                (b.range[1] = h.range[1] | 0))),
                        (b.first_line <= 0 || b.last_line < b.first_line) &&
                            (b.first_line <= 0 &&
                                v &&
                                ((b.first_line = v.last_line | 0),
                                (b.first_column = v.last_column | 0),
                                v.range && (b.range[0] = h.range[1] | 0)),
                            (b.last_line <= 0 || b.last_line < b.first_line) &&
                                g &&
                                ((b.last_line = g.first_line | 0),
                                (b.last_column = g.first_column | 0),
                                g.range && (b.range[1] = h.range[0] | 0)),
                            b.first_line <= 0 &&
                                _ &&
                                (b.last_line <= 0 ||
                                    _.last_line <= b.last_line) &&
                                ((b.first_line = _.first_line | 0),
                                (b.first_column = _.first_column | 0),
                                _.range && (b.range[0] = _.range[0] | 0)),
                            b.last_line <= 0 &&
                                _ &&
                                (b.first_line <= 0 ||
                                    _.first_line >= b.first_line) &&
                                ((b.last_line = _.last_line | 0),
                                (b.last_column = _.last_column | 0),
                                _.range && (b.range[1] = _.range[1] | 0))),
                        b.last_line <= 0 &&
                            (b.first_line <= 0
                                ? ((b.first_line = this.yylloc.first_line),
                                  (b.last_line = this.yylloc.last_line),
                                  (b.first_column = this.yylloc.first_column),
                                  (b.last_column = this.yylloc.last_column),
                                  (b.range[0] = this.yylloc.range[0]),
                                  (b.range[1] = this.yylloc.range[1]))
                                : ((b.last_line = this.yylloc.last_line),
                                  (b.last_column = this.yylloc.last_column),
                                  (b.range[1] = this.yylloc.range[1]))),
                        b.first_line <= 0 &&
                            ((b.first_line = b.last_line),
                            (b.first_column = 0),
                            (b.range[1] = b.range[0])),
                        b.first_column < 0 && (b.first_column = 0),
                        b.last_column < 0 &&
                            (b.last_column =
                                b.first_column > 0 ? b.first_column : 80),
                        b
                    );
                },
                prettyPrintRange: function (h, v, g) {
                    h = this.deriveLocationInfo(h, v, g);
                    const _ = 3,
                        b = 1,
                        m = 2;
                    var x = this.matched + this._input,
                        w = x.split(`
`),
                        S = Math.max(1, v ? v.first_line : h.first_line - _),
                        A = Math.max(1, g ? g.last_line : h.last_line + b),
                        $ = (1 + Math.log10(A | 1)) | 0,
                        E = new Array($).join(" "),
                        P = [],
                        M = w.slice(S - 1, A + 1).map(function (B, j) {
                            var H = j + S,
                                G = (E + H).substr(-$),
                                Z = G + ": " + B,
                                ee = new Array($ + 1).join("^"),
                                oe = 2 + 1,
                                ve = 0;
                            if (
                                (H === h.first_line
                                    ? ((oe += h.first_column),
                                      (ve = Math.max(
                                          2,
                                          (H === h.last_line
                                              ? h.last_column
                                              : B.length) -
                                              h.first_column +
                                              1
                                      )))
                                    : H === h.last_line
                                    ? (ve = Math.max(2, h.last_column + 1))
                                    : H > h.first_line &&
                                      H < h.last_line &&
                                      (ve = Math.max(2, B.length + 1)),
                                ve)
                            ) {
                                var _e = new Array(oe).join("."),
                                    De = new Array(ve).join("^");
                                (Z +=
                                    `
` +
                                    ee +
                                    _e +
                                    De),
                                    B.trim().length > 0 && P.push(j);
                            }
                            return (Z = Z.replace(/\t/g, " ")), Z;
                        });
                    if (P.length > 2 * m) {
                        var k = P[m - 1] + 1,
                            I = P[P.length - m] - 1,
                            R =
                                new Array($ + 1).join(" ") +
                                "  (...continued...)";
                        (R +=
                            `
` +
                            new Array($ + 1).join("-") +
                            "  (---------------)"),
                            M.splice(k, I - k + 1, R);
                    }
                    return M.join(`
`);
                },
                describeYYLLOC: function (h, v) {
                    var g = h.first_line,
                        _ = h.last_line,
                        b = h.first_column,
                        m = h.last_column,
                        x = _ - g,
                        w = m - b,
                        S;
                    if (
                        (x === 0
                            ? ((S = "line " + g + ", "),
                              w <= 1
                                  ? (S += "column " + b)
                                  : (S += "columns " + b + " .. " + m))
                            : (S =
                                  "lines " +
                                  g +
                                  "(column " +
                                  b +
                                  ") .. " +
                                  _ +
                                  "(column " +
                                  m +
                                  ")"),
                        h.range && v)
                    ) {
                        var A = h.range[0],
                            $ = h.range[1] - 1;
                        $ <= A
                            ? (S += " {String Offset: " + A + "}")
                            : (S +=
                                  " {String Offset range: " +
                                  A +
                                  " .. " +
                                  $ +
                                  "}");
                    }
                    return S;
                },
                test_match: function (h, v) {
                    var g, _, b, m, x;
                    if (
                        (this.options.backtrack_lexer &&
                            (b = {
                                yylineno: this.yylineno,
                                yylloc: {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylloc.last_line,
                                    first_column: this.yylloc.first_column,
                                    last_column: this.yylloc.last_column,
                                    range: this.yylloc.range.slice(0),
                                },
                                yytext: this.yytext,
                                match: this.match,
                                matches: this.matches,
                                matched: this.matched,
                                yyleng: this.yyleng,
                                offset: this.offset,
                                _more: this._more,
                                _input: this._input,
                                yy: this.yy,
                                conditionStack: this.conditionStack.slice(0),
                                done: this.done,
                            }),
                        (m = h[0]),
                        (x = m.length),
                        (_ = m.split(/(?:\r\n?|\n)/g)),
                        _.length > 1
                            ? ((this.yylineno += _.length - 1),
                              (this.yylloc.last_line = this.yylineno + 1),
                              (this.yylloc.last_column =
                                  _[_.length - 1].length))
                            : (this.yylloc.last_column += x),
                        (this.yytext += m),
                        (this.match += m),
                        (this.matched += m),
                        (this.matches = h),
                        (this.yyleng = this.yytext.length),
                        (this.yylloc.range[1] += x),
                        (this.offset += x),
                        (this._more = !1),
                        (this._backtrack = !1),
                        (this._input = this._input.slice(x)),
                        (g = this.performAction.call(
                            this,
                            this.yy,
                            v,
                            this.conditionStack[this.conditionStack.length - 1]
                        )),
                        this.done && this._input && (this.done = !1),
                        g)
                    )
                        return g;
                    if (this._backtrack) {
                        for (var w in b) this[w] = b[w];
                        return (this.__currentRuleSet__ = null), !1;
                    } else if (this._signaled_error_token)
                        return (
                            (g = this._signaled_error_token),
                            (this._signaled_error_token = !1),
                            g
                        );
                    return !1;
                },
                next: function () {
                    if (this.done) return this.clear(), this.EOF;
                    this._input || (this.done = !0);
                    var h, v, g, _;
                    this._more || this.clear();
                    var b = this.__currentRuleSet__;
                    if (
                        !b &&
                        ((b = this.__currentRuleSet__ = this._currentRules()),
                        !b || !b.rules)
                    ) {
                        var m = "";
                        this.options.trackPosition &&
                            (m = " on line " + (this.yylineno + 1));
                        var x = this.constructLexErrorInfo(
                            "Internal lexer engine error" +
                                m +
                                ': The lex grammar programmer pushed a non-existing condition name "' +
                                this.topState() +
                                '"; this is a fatal error and should be reported to the application programmer team!',
                            !1
                        );
                        return (
                            this.parseError(
                                x.errStr,
                                x,
                                this.JisonLexerError
                            ) || this.ERROR
                        );
                    }
                    for (
                        var w = b.rules,
                            S = b.__rule_regexes,
                            A = b.__rule_count,
                            $ = 1;
                        $ <= A;
                        $++
                    )
                        if (
                            ((g = this._input.match(S[$])),
                            g && (!v || g[0].length > v[0].length))
                        ) {
                            if (
                                ((v = g), (_ = $), this.options.backtrack_lexer)
                            ) {
                                if (((h = this.test_match(g, w[$])), h !== !1))
                                    return h;
                                if (this._backtrack) {
                                    v = void 0;
                                    continue;
                                } else return !1;
                            } else if (!this.options.flex) break;
                        }
                    if (v)
                        return (
                            (h = this.test_match(v, w[_])), h !== !1 ? h : !1
                        );
                    if (this._input) {
                        var m = "";
                        this.options.trackPosition &&
                            (m = " on line " + (this.yylineno + 1));
                        var x = this.constructLexErrorInfo(
                                "Lexical error" + m + ": Unrecognized text.",
                                this.options.lexerErrorsAreRecoverable
                            ),
                            E = this._input,
                            P = this.topState(),
                            M = this.conditionStack.length;
                        return (
                            (h =
                                this.parseError(
                                    x.errStr,
                                    x,
                                    this.JisonLexerError
                                ) || this.ERROR),
                            h === this.ERROR &&
                                !this.matches &&
                                E === this._input &&
                                P === this.topState() &&
                                M === this.conditionStack.length &&
                                this.input(),
                            h
                        );
                    } else return (this.done = !0), this.clear(), this.EOF;
                },
                lex: function () {
                    var h;
                    for (
                        typeof this.pre_lex == "function" &&
                            (h = this.pre_lex.call(this, 0)),
                            typeof this.options.pre_lex == "function" &&
                                (h = this.options.pre_lex.call(this, h) || h),
                            this.yy &&
                                typeof this.yy.pre_lex == "function" &&
                                (h = this.yy.pre_lex.call(this, h) || h);
                        !h;

                    )
                        h = this.next();
                    return (
                        this.yy &&
                            typeof this.yy.post_lex == "function" &&
                            (h = this.yy.post_lex.call(this, h) || h),
                        typeof this.options.post_lex == "function" &&
                            (h = this.options.post_lex.call(this, h) || h),
                        typeof this.post_lex == "function" &&
                            (h = this.post_lex.call(this, h) || h),
                        h
                    );
                },
                fastLex: function () {
                    for (var h; !h; ) h = this.next();
                    return h;
                },
                canIUse: function () {
                    var h = {
                        fastLex:
                            !(
                                typeof this.pre_lex == "function" ||
                                typeof this.options.pre_lex == "function" ||
                                (this.yy &&
                                    typeof this.yy.pre_lex == "function") ||
                                (this.yy &&
                                    typeof this.yy.post_lex == "function") ||
                                typeof this.options.post_lex == "function" ||
                                typeof this.post_lex == "function"
                            ) && typeof this.fastLex == "function",
                    };
                    return h;
                },
                begin: function (h) {
                    return this.pushState(h);
                },
                pushState: function (h) {
                    return (
                        this.conditionStack.push(h),
                        (this.__currentRuleSet__ = null),
                        this
                    );
                },
                popState: function () {
                    var h = this.conditionStack.length - 1;
                    return h > 0
                        ? ((this.__currentRuleSet__ = null),
                          this.conditionStack.pop())
                        : this.conditionStack[0];
                },
                topState: function (h) {
                    return (
                        (h = this.conditionStack.length - 1 - Math.abs(h || 0)),
                        h >= 0 ? this.conditionStack[h] : "INITIAL"
                    );
                },
                _currentRules: function () {
                    return this.conditionStack.length &&
                        this.conditionStack[this.conditionStack.length - 1]
                        ? this.conditions[
                              this.conditionStack[
                                  this.conditionStack.length - 1
                              ]
                          ]
                        : this.conditions.INITIAL;
                },
                stateStackSize: function () {
                    return this.conditionStack.length;
                },
                options: { trackPosition: !0 },
                JisonLexerError: d,
                performAction: function (h, v, g) {
                    switch (v) {
                        case 1:
                            break;
                        default:
                            return this.simpleCaseActionClusters[v];
                    }
                },
                simpleCaseActionClusters: {
                    0: 13,
                    2: 5,
                    3: 6,
                    4: 3,
                    5: 4,
                    6: 15,
                    7: 15,
                    8: 15,
                    9: 15,
                    10: 15,
                    11: 15,
                    12: 16,
                    13: 16,
                    14: 16,
                    15: 16,
                    16: 17,
                    17: 17,
                    18: 18,
                    19: 18,
                    20: 19,
                    21: 19,
                    22: 19,
                    23: 20,
                    24: 21,
                    25: 22,
                    26: 23,
                    27: 25,
                    28: 24,
                    29: 26,
                    30: 27,
                    31: 28,
                    32: 11,
                    33: 9,
                    34: 12,
                    35: 10,
                    36: 7,
                    37: 8,
                    38: 14,
                    39: 1,
                },
                rules: [
                    /^(?:(--[\d\-A-Za-z]*))/,
                    /^(?:\s+)/,
                    /^(?:\*)/,
                    /^(?:\/)/,
                    /^(?:\+)/,
                    /^(?:-)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)px\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)in\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)s\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)em\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)%)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)\b)/,
                    /^(?:(calc))/,
                    /^(?:(var))/,
                    /^(?:([a-z]+))/,
                    /^(?:\()/,
                    /^(?:\))/,
                    /^(?:,)/,
                    /^(?:$)/,
                ],
                conditions: {
                    INITIAL: {
                        rules: [
                            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
                            28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                        ],
                        inclusive: !0,
                    },
                },
            };
            return y;
        })();
        l.lexer = c;
        function f() {
            this.yy = {};
        }
        return (f.prototype = l), (l.Parser = f), new f();
    })();
    typeof lk < "u" &&
        ((e.parser = t),
        (e.Parser = t.Parser),
        (e.parse = function () {
            return t.parse.apply(t, arguments);
        }));
})(Yp);
var Mn = {},
    Os = { exports: {} },
    wo = {
        px: {
            px: 1,
            cm: 96 / 2.54,
            mm: 96 / 25.4,
            in: 96,
            pt: 96 / 72,
            pc: 16,
        },
        cm: {
            px: 2.54 / 96,
            cm: 1,
            mm: 0.1,
            in: 2.54,
            pt: 2.54 / 72,
            pc: 2.54 / 6,
        },
        mm: {
            px: 25.4 / 96,
            cm: 10,
            mm: 1,
            in: 25.4,
            pt: 25.4 / 72,
            pc: 25.4 / 6,
        },
        in: {
            px: 1 / 96,
            cm: 1 / 2.54,
            mm: 1 / 25.4,
            in: 1,
            pt: 1 / 72,
            pc: 1 / 6,
        },
        pt: { px: 0.75, cm: 72 / 2.54, mm: 72 / 25.4, in: 72, pt: 1, pc: 12 },
        pc: {
            px: 6 / 96,
            cm: 6 / 2.54,
            mm: 6 / 25.4,
            in: 6,
            pt: 6 / 72,
            pc: 1,
        },
        deg: { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 },
        grad: { deg: 400 / 360, grad: 1, rad: 200 / Math.PI, turn: 400 },
        rad: {
            deg: Math.PI / 180,
            grad: Math.PI / 200,
            rad: 1,
            turn: Math.PI * 2,
        },
        turn: { deg: 1 / 360, grad: 1 / 400, rad: 0.5 / Math.PI, turn: 1 },
        s: { s: 1, ms: 1 / 1e3 },
        ms: { s: 1e3, ms: 1 },
        Hz: { Hz: 1, kHz: 1e3 },
        kHz: { Hz: 1 / 1e3, kHz: 1 },
        dpi: { dpi: 1, dpcm: 1 / 2.54, dppx: 1 / 96 },
        dpcm: { dpi: 2.54, dpcm: 1, dppx: 2.54 / 96 },
        dppx: { dpi: 96, dpcm: 96 / 2.54, dppx: 1 },
    },
    ck = function (e, t, r, n) {
        if (!wo.hasOwnProperty(r)) throw new Error("Cannot convert to " + r);
        if (!wo[r].hasOwnProperty(t))
            throw new Error("Cannot convert from " + t + " to " + r);
        var i = wo[r][t] * e;
        return n !== !1
            ? ((n = Math.pow(10, parseInt(n) || 5)), Math.round(i * n) / n)
            : i;
    };
(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = ck,
        n = i(r);
    function i(s) {
        return s && s.__esModule ? s : { default: s };
    }
    function a(s, u, l) {
        switch (s.type) {
            case "LengthValue":
            case "AngleValue":
            case "TimeValue":
            case "FrequencyValue":
            case "ResolutionValue":
                return o(s, u, l);
            default:
                return { left: s, right: u };
        }
    }
    function o(s, u, l) {
        return (
            u.type === s.type &&
                (u = {
                    type: s.type,
                    value: (0, n.default)(u.value, u.unit, s.unit, l),
                    unit: s.unit,
                }),
            { left: s, right: u }
        );
    }
    (t.default = a), (e.exports = t.default);
})(Os, Os.exports);
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.flip = As;
var fk = Os.exports,
    _o = hk(fk);
function hk(e) {
    return e && e.__esModule ? e : { default: e };
}
function Re(e, t) {
    return e.type === "MathExpression"
        ? gk(e, t)
        : e.type === "Calc"
        ? Re(e.value, t)
        : e;
}
function uf(e, t) {
    return e.type === t.type && e.value === t.value;
}
function Be(e) {
    switch (e) {
        case "LengthValue":
        case "AngleValue":
        case "TimeValue":
        case "FrequencyValue":
        case "ResolutionValue":
        case "EmValue":
        case "ExValue":
        case "ChValue":
        case "RemValue":
        case "VhValue":
        case "VwValue":
        case "VminValue":
        case "VmaxValue":
        case "PercentageValue":
        case "Value":
            return !0;
    }
    return !1;
}
function dk(e, t) {
    var r = (0, _o.default)(e.left, e.right, t),
        n = Re(r.left, t),
        i = Re(r.right, t);
    return (
        n.type === "MathExpression" &&
            i.type === "MathExpression" &&
            ((n.operator === "/" && i.operator === "*") ||
                (n.operator === "-" && i.operator === "+") ||
                (n.operator === "*" && i.operator === "/") ||
                (n.operator === "+" && i.operator === "-")) &&
            (uf(n.right, i.right)
                ? (r = (0, _o.default)(n.left, i.left, t))
                : uf(n.right, i.left) &&
                  (r = (0, _o.default)(n.left, i.right, t)),
            (n = Re(r.left, t)),
            (i = Re(r.right, t))),
        (e.left = n),
        (e.right = i),
        e
    );
}
function As(e) {
    return e === "+" ? "-" : "+";
}
function $s(e) {
    return (
        Be(e.type)
            ? (e.value = -e.value)
            : e.type == "MathExpression" &&
              ((e.left = $s(e.left)), (e.right = $s(e.right))),
        e
    );
}
function pk(e, t) {
    var r = e,
        n = r.left,
        i = r.right,
        a = r.operator;
    if (n.type === "CssVariable" || i.type === "CssVariable") return e;
    if (i.value === 0) return n;
    if (n.value === 0 && a === "+") return i;
    if (n.value === 0 && a === "-") return $s(i);
    if (
        (n.type === i.type &&
            Be(n.type) &&
            ((e = Object.assign({}, n)),
            a === "+"
                ? (e.value = n.value + i.value)
                : (e.value = n.value - i.value)),
        Be(n.type) &&
            (i.operator === "+" || i.operator === "-") &&
            i.type === "MathExpression")
    ) {
        if (n.type === i.left.type)
            return (
                (e = Object.assign({}, e)),
                (e.left = Re(
                    {
                        type: "MathExpression",
                        operator: a,
                        left: n,
                        right: i.left,
                    },
                    t
                )),
                (e.right = i.right),
                (e.operator = a === "-" ? As(i.operator) : i.operator),
                Re(e, t)
            );
        if (n.type === i.right.type)
            return (
                (e = Object.assign({}, e)),
                (e.left = Re(
                    {
                        type: "MathExpression",
                        operator: a === "-" ? As(i.operator) : i.operator,
                        left: n,
                        right: i.right,
                    },
                    t
                )),
                (e.right = i.left),
                Re(e, t)
            );
    }
    if (
        n.type === "MathExpression" &&
        (n.operator === "+" || n.operator === "-") &&
        Be(i.type)
    ) {
        if (i.type === n.left.type)
            return (
                (e = Object.assign({}, n)),
                (e.left = Re(
                    {
                        type: "MathExpression",
                        operator: a,
                        left: n.left,
                        right: i,
                    },
                    t
                )),
                Re(e, t)
            );
        if (i.type === n.right.type)
            return (
                (e = Object.assign({}, n)),
                n.operator === "-"
                    ? ((e.right = Re(
                          {
                              type: "MathExpression",
                              operator: a === "-" ? "+" : "-",
                              left: i,
                              right: n.right,
                          },
                          t
                      )),
                      (e.operator = a === "-" ? "-" : "+"))
                    : (e.right = Re(
                          {
                              type: "MathExpression",
                              operator: a,
                              left: n.right,
                              right: i,
                          },
                          t
                      )),
                e.right.value < 0 &&
                    ((e.right.value *= -1),
                    (e.operator = e.operator === "-" ? "+" : "-")),
                Re(e, t)
            );
    }
    return e;
}
function vk(e, t) {
    if (!Be(e.right.type)) return e;
    if (e.right.type !== "Value")
        throw new Error(
            'Cannot divide by "' + e.right.unit + '", number expected'
        );
    if (e.right.value === 0) throw new Error("Cannot divide by zero");
    return e.left.type === "MathExpression"
        ? Be(e.left.left.type) && Be(e.left.right.type)
            ? ((e.left.left.value /= e.right.value),
              (e.left.right.value /= e.right.value),
              Re(e.left, t))
            : e
        : Be(e.left.type)
        ? ((e.left.value /= e.right.value), e.left)
        : e;
}
function yk(e) {
    if (e.left.type === "MathExpression" && e.right.type === "Value") {
        if (Be(e.left.left.type) && Be(e.left.right.type))
            return (
                (e.left.left.value *= e.right.value),
                (e.left.right.value *= e.right.value),
                e.left
            );
    } else {
        if (Be(e.left.type) && e.right.type === "Value")
            return (e.left.value *= e.right.value), e.left;
        if (e.left.type === "Value" && e.right.type === "MathExpression") {
            if (Be(e.right.left.type) && Be(e.right.right.type))
                return (
                    (e.right.left.value *= e.left.value),
                    (e.right.right.value *= e.left.value),
                    e.right
                );
        } else if (e.left.type === "Value" && Be(e.right.type))
            return (e.right.value *= e.left.value), e.right;
    }
    return e;
}
function gk(e, t) {
    switch (((e = dk(e, t)), e.operator)) {
        case "+":
        case "-":
            return pk(e, t);
        case "/":
            return vk(e, t);
        case "*":
            return yk(e);
    }
    return e;
}
Mn.default = Re;
var Ts = { exports: {} };
(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (o, s, u) {
            var l = a(s, u);
            return s.type === "MathExpression" && (l = o + "(" + l + ")"), l;
        });
    var r = Mn,
        n = { "*": 0, "/": 0, "+": 1, "-": 1 };
    function i(o, s) {
        if (s !== !1) {
            var u = Math.pow(10, s);
            return Math.round(o * u) / u;
        }
        return o;
    }
    function a(o, s) {
        switch (o.type) {
            case "MathExpression": {
                var u = o.left,
                    l = o.right,
                    c = o.operator,
                    f = "";
                return (
                    u.type === "MathExpression" && n[c] < n[u.operator]
                        ? (f += "(" + a(u, s) + ")")
                        : (f += a(u, s)),
                    (f += " " + o.operator + " "),
                    l.type === "MathExpression" && n[c] < n[l.operator]
                        ? (f += "(" + a(l, s) + ")")
                        : (l.type === "MathExpression" &&
                              c === "-" &&
                              ["+", "-"].includes(l.operator) &&
                              (l.operator = (0, r.flip)(l.operator)),
                          (f += a(l, s))),
                    f
                );
            }
            case "Value":
                return i(o.value, s);
            case "CssVariable":
                return o.fallback
                    ? "var(" + o.value + ", " + a(o.fallback, s) + ")"
                    : "var(" + o.value + ")";
            case "Calc":
                return o.prefix
                    ? "-" + o.prefix + "-calc(" + a(o.value, s) + ")"
                    : "calc(" + a(o.value, s) + ")";
            default:
                return i(o.value, s) + o.unit;
        }
    }
    e.exports = t.default;
})(Ts, Ts.exports);
(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = uk,
        n = l(r),
        i = Yp,
        a = Mn,
        o = l(a),
        s = Ts.exports,
        u = l(s);
    function l(f) {
        return f && f.__esModule ? f : { default: f };
    }
    var c = /((?:\-[a-z]+\-)?calc)/;
    (t.default = function (f) {
        var d =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
        return (0, n.default)(f)
            .walk(function (y) {
                if (!(y.type !== "function" || !c.test(y.value))) {
                    var p = n.default.stringify(y.nodes);
                    if (
                        !(p.indexOf("constant") >= 0 || p.indexOf("env") >= 0)
                    ) {
                        var h = i.parser.parse(p),
                            v = (0, o.default)(h, d);
                        (y.type = "word"),
                            (y.value = (0, u.default)(y.value, v, d));
                    }
                }
            }, !0)
            .toString();
    }),
        (e.exports = t.default);
})(Ss, Ss.exports);
const So = Py(Ss.exports);
function lf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function cf(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? lf(Object(r), !0).forEach(function (n) {
                  mk(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : lf(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function mk(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function ff(e) {
    return _k(e) || wk(e) || xk(e) || bk();
}
function bk() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xk(e, t) {
    if (!!e) {
        if (typeof e == "string") return Ps(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Ps(e, t);
    }
}
function wk(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function _k(e) {
    if (Array.isArray(e)) return Ps(e);
}
function Ps(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var vr = { widthCache: {}, cacheCount: 0 },
    Sk = 2e3,
    Ok = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre",
    },
    Ak = [
        "minWidth",
        "maxWidth",
        "width",
        "minHeight",
        "maxHeight",
        "height",
        "top",
        "left",
        "fontSize",
        "lineHeight",
        "padding",
        "margin",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
    ],
    hf = "recharts_measurement_span";
function $k(e, t) {
    return Ak.indexOf(e) >= 0 && t === +t ? "".concat(t, "px") : t;
}
function Tk(e) {
    var t = e.split(""),
        r = t.reduce(function (n, i) {
            return i === i.toUpperCase()
                ? [].concat(ff(n), ["-", i.toLowerCase()])
                : [].concat(ff(n), [i]);
        }, []);
    return r.join("");
}
var Pk = function (t) {
        return Object.keys(t).reduce(function (r, n) {
            return "".concat(r).concat(Tk(n), ":").concat($k(n, t[n]), ";");
        }, "");
    },
    Jt = function (t) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t == null || Rt.isSsr) return { width: 0, height: 0 };
        var n = "".concat(t),
            i = Pk(r),
            a = "".concat(n, "-").concat(i);
        if (vr.widthCache[a]) return vr.widthCache[a];
        try {
            var o = document.getElementById(hf);
            o ||
                ((o = document.createElement("span")),
                o.setAttribute("id", hf),
                o.setAttribute("aria-hidden", "true"),
                document.body.appendChild(o));
            var s = cf(cf({}, Ok), r);
            Object.keys(s).map(function (c) {
                return (o.style[c] = s[c]), c;
            }),
                (o.textContent = n);
            var u = o.getBoundingClientRect(),
                l = { width: u.width, height: u.height };
            return (
                (vr.widthCache[a] = l),
                ++vr.cacheCount > Sk &&
                    ((vr.cacheCount = 0), (vr.widthCache = {})),
                l
            );
        } catch {
            return { width: 0, height: 0 };
        }
    },
    Ek = function (t) {
        var r = t.ownerDocument.documentElement,
            n = { top: 0, left: 0 };
        return (
            typeof t.getBoundingClientRect < "u" &&
                (n = t.getBoundingClientRect()),
            {
                top: n.top + window.pageYOffset - r.clientTop,
                left: n.left + window.pageXOffset - r.clientLeft,
            }
        );
    },
    Mk = function (t, r) {
        return {
            chartX: Math.round(t.pageX - r.left),
            chartY: Math.round(t.pageY - r.top),
        };
    };
function ai(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (ai = function (r) {
                  return typeof r;
              })
            : (ai = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        ai(e)
    );
}
function kk(e, t) {
    if (e == null) return {};
    var r = Ck(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(e, n) ||
                        (r[n] = e[n]));
    }
    return r;
}
function Ck(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
function Ik(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function df(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function Nk(e, t, r) {
    return t && df(e.prototype, t), r && df(e, r), e;
}
function Rk(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && Es(e, t);
}
function Es(e, t) {
    return (
        (Es =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        Es(e, t)
    );
}
function Dk(e) {
    var t = Fk();
    return function () {
        var n = Di(e),
            i;
        if (t) {
            var a = Di(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return Lk(this, i);
    };
}
function Lk(e, t) {
    return t && (ai(t) === "object" || typeof t == "function") ? t : jk(e);
}
function jk(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Fk() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function Di(e) {
    return (
        (Di = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Di(e)
    );
}
function pf(e, t) {
    return Wk(e) || Hk(e, t) || Uk(e, t) || Bk();
}
function Bk() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uk(e, t) {
    if (!!e) {
        if (typeof e == "string") return vf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return vf(e, t);
    }
}
function vf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function Hk(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var o = e[Symbol.iterator](), s;
                !(n = (s = o.next()).done) &&
                (r.push(s.value), !(t && r.length === t));
                n = !0
            );
        } catch (u) {
            (i = !0), (a = u);
        } finally {
            try {
                !n && o.return != null && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return r;
    }
}
function Wk(e) {
    if (Array.isArray(e)) return e;
}
function yf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function gf(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? yf(Object(r), !0).forEach(function (n) {
                  zk(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : yf(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function zk(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
var Xp = /[ \f\n\r\t\v\u2028\u2029]+/,
    Kp = function (t) {
        try {
            var r = [];
            V(t.children) ||
                (t.breakAll
                    ? (r = t.children.toString().split(""))
                    : (r = t.children.toString().split(Xp)));
            var n = r.map(function (a) {
                    return { word: a, width: Jt(a, t.style).width };
                }),
                i = t.breakAll ? 0 : Jt("\xA0", t.style).width;
            return { wordsWithComputedWidth: n, spaceWidth: i };
        } catch {
            return null;
        }
    },
    Gk = function (t, r, n, i, a) {
        var o = U(t.maxLines),
            s = t.children,
            u = function () {
                var P =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : [];
                return P.reduce(function (M, k) {
                    var I = k.word,
                        R = k.width,
                        C = M[M.length - 1];
                    if (C && (i == null || a || C.width + R + n < i))
                        C.words.push(I), (C.width += R + n);
                    else {
                        var B = { words: [I], width: R };
                        M.push(B);
                    }
                    return M;
                }, []);
            },
            l = u(r),
            c = function (P) {
                return P.reduce(function (M, k) {
                    return M.width > k.width ? M : k;
                });
            };
        if (!o) return l;
        for (
            var f = "\u2026",
                d = function (P) {
                    var M = s.slice(0, P),
                        k = Kp(
                            gf(gf({}, t), {}, { children: M + f })
                        ).wordsWithComputedWidth,
                        I = u(k),
                        R = I.length > t.maxLines || c(I).width > i;
                    return [R, I];
                },
                y = 0,
                p = s.length - 1,
                h = 0,
                v;
            y <= p && h <= s.length - 1;

        ) {
            var g = Math.floor((y + p) / 2),
                _ = g - 1,
                b = d(_),
                m = pf(b, 2),
                x = m[0],
                w = m[1],
                S = d(g),
                A = pf(S, 1),
                $ = A[0];
            if ((!x && !$ && (y = g + 1), x && $ && (p = g - 1), !x && $)) {
                v = w;
                break;
            }
            h++;
        }
        return v || l;
    },
    mf = function (t) {
        var r = V(t) ? [] : t.toString().split(Xp);
        return [{ words: r }];
    },
    qk = function (t, r) {
        if ((t.width || t.scaleToFit) && !Rt.isSsr) {
            var n, i;
            if (r) {
                var a = Kp(t);
                if (a) {
                    var o = a.wordsWithComputedWidth,
                        s = a.spaceWidth;
                    (n = o), (i = s);
                } else return mf(t.children);
                return Gk(t, n, i, t.width, t.scaleToFit);
            }
        }
        return mf(t.children);
    },
    vn = (function (e) {
        Rk(r, e);
        var t = Dk(r);
        function r() {
            var n;
            Ik(this, r);
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                a[o] = arguments[o];
            return (n = t.call.apply(t, [this].concat(a))), (n.state = {}), n;
        }
        return (
            Nk(
                r,
                [
                    {
                        key: "render",
                        value: function () {
                            var i = this.props,
                                a = i.dx,
                                o = i.dy,
                                s = i.textAnchor,
                                u = i.verticalAnchor,
                                l = i.scaleToFit,
                                c = i.angle,
                                f = i.lineHeight,
                                d = i.capHeight,
                                y = i.className,
                                p = i.breakAll,
                                h = kk(i, [
                                    "dx",
                                    "dy",
                                    "textAnchor",
                                    "verticalAnchor",
                                    "scaleToFit",
                                    "angle",
                                    "lineHeight",
                                    "capHeight",
                                    "className",
                                    "breakAll",
                                ]),
                                v = this.state.wordsByLines;
                            if (!we(h.x) || !we(h.y)) return null;
                            var g = h.x + (U(a) ? a : 0),
                                _ = h.y + (U(o) ? o : 0),
                                b;
                            switch (u) {
                                case "start":
                                    b = So("calc(".concat(d, ")"));
                                    break;
                                case "middle":
                                    b = So(
                                        "calc("
                                            .concat((v.length - 1) / 2, " * -")
                                            .concat(f, " + (")
                                            .concat(d, " / 2))")
                                    );
                                    break;
                                default:
                                    b = So(
                                        "calc("
                                            .concat(v.length - 1, " * -")
                                            .concat(f, ")")
                                    );
                                    break;
                            }
                            var m = [];
                            if (l) {
                                var x = v[0].width,
                                    w = this.props.width;
                                m.push(
                                    "scale(".concat((U(w) ? w / x : 1) / x, ")")
                                );
                            }
                            return (
                                c &&
                                    m.push(
                                        "rotate("
                                            .concat(c, ", ")
                                            .concat(g, ", ")
                                            .concat(_, ")")
                                    ),
                                m.length && (h.transform = m.join(" ")),
                                O("text", {
                                    ...ae(h, !0),
                                    x: g,
                                    y: _,
                                    className: pe("recharts-text", y),
                                    textAnchor: s,
                                    children: v.map(function (S, A) {
                                        return O(
                                            "tspan",
                                            {
                                                x: g,
                                                dy: A === 0 ? b : f,
                                                children: S.words.join(
                                                    p ? "" : " "
                                                ),
                                            },
                                            A
                                        );
                                    }),
                                })
                            );
                        },
                    },
                ],
                [
                    {
                        key: "getDerivedStateFromProps",
                        value: function (i, a) {
                            if (
                                i.width !== a.prevWidth ||
                                i.scaleToFit !== a.prevScaleToFit ||
                                i.children !== a.prevChildren ||
                                i.style !== a.prevStyle ||
                                i.breakAll !== a.prevBreakAll
                            ) {
                                var o =
                                    i.children !== a.prevChildren ||
                                    i.style !== a.prevStyle ||
                                    i.breakAll !== a.prevBreakAll;
                                return {
                                    prevWidth: i.width,
                                    prevScaleToFit: i.scaleToFit,
                                    prevChildren: i.children,
                                    prevStyle: i.style,
                                    wordsByLines: qk(i, o),
                                };
                            }
                            return null;
                        },
                    },
                ]
            ),
            r
        );
    })(T.exports.Component);
vn.defaultProps = {
    x: 0,
    y: 0,
    lineHeight: "1em",
    capHeight: "0.71em",
    scaleToFit: !1,
    textAnchor: "start",
    verticalAnchor: "end",
};
var Jp = { exports: {} },
    ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Te = typeof Symbol == "function" && Symbol.for,
    Hu = Te ? Symbol.for("react.element") : 60103,
    Wu = Te ? Symbol.for("react.portal") : 60106,
    Ma = Te ? Symbol.for("react.fragment") : 60107,
    ka = Te ? Symbol.for("react.strict_mode") : 60108,
    Ca = Te ? Symbol.for("react.profiler") : 60114,
    Ia = Te ? Symbol.for("react.provider") : 60109,
    Na = Te ? Symbol.for("react.context") : 60110,
    zu = Te ? Symbol.for("react.async_mode") : 60111,
    Ra = Te ? Symbol.for("react.concurrent_mode") : 60111,
    Da = Te ? Symbol.for("react.forward_ref") : 60112,
    La = Te ? Symbol.for("react.suspense") : 60113,
    Vk = Te ? Symbol.for("react.suspense_list") : 60120,
    ja = Te ? Symbol.for("react.memo") : 60115,
    Fa = Te ? Symbol.for("react.lazy") : 60116,
    Yk = Te ? Symbol.for("react.block") : 60121,
    Xk = Te ? Symbol.for("react.fundamental") : 60117,
    Kk = Te ? Symbol.for("react.responder") : 60118,
    Jk = Te ? Symbol.for("react.scope") : 60119;
function qe(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Hu:
                switch (((e = e.type), e)) {
                    case zu:
                    case Ra:
                    case Ma:
                    case Ca:
                    case ka:
                    case La:
                        return e;
                    default:
                        switch (((e = e && e.$$typeof), e)) {
                            case Na:
                            case Da:
                            case Fa:
                            case ja:
                            case Ia:
                                return e;
                            default:
                                return t;
                        }
                }
            case Wu:
                return t;
        }
    }
}
function Zp(e) {
    return qe(e) === Ra;
}
ue.AsyncMode = zu;
ue.ConcurrentMode = Ra;
ue.ContextConsumer = Na;
ue.ContextProvider = Ia;
ue.Element = Hu;
ue.ForwardRef = Da;
ue.Fragment = Ma;
ue.Lazy = Fa;
ue.Memo = ja;
ue.Portal = Wu;
ue.Profiler = Ca;
ue.StrictMode = ka;
ue.Suspense = La;
ue.isAsyncMode = function (e) {
    return Zp(e) || qe(e) === zu;
};
ue.isConcurrentMode = Zp;
ue.isContextConsumer = function (e) {
    return qe(e) === Na;
};
ue.isContextProvider = function (e) {
    return qe(e) === Ia;
};
ue.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Hu;
};
ue.isForwardRef = function (e) {
    return qe(e) === Da;
};
ue.isFragment = function (e) {
    return qe(e) === Ma;
};
ue.isLazy = function (e) {
    return qe(e) === Fa;
};
ue.isMemo = function (e) {
    return qe(e) === ja;
};
ue.isPortal = function (e) {
    return qe(e) === Wu;
};
ue.isProfiler = function (e) {
    return qe(e) === Ca;
};
ue.isStrictMode = function (e) {
    return qe(e) === ka;
};
ue.isSuspense = function (e) {
    return qe(e) === La;
};
ue.isValidElementType = function (e) {
    return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Ma ||
        e === Ra ||
        e === Ca ||
        e === ka ||
        e === La ||
        e === Vk ||
        (typeof e == "object" &&
            e !== null &&
            (e.$$typeof === Fa ||
                e.$$typeof === ja ||
                e.$$typeof === Ia ||
                e.$$typeof === Na ||
                e.$$typeof === Da ||
                e.$$typeof === Xk ||
                e.$$typeof === Kk ||
                e.$$typeof === Jk ||
                e.$$typeof === Yk))
    );
};
ue.typeOf = qe;
(function (e) {
    e.exports = ue;
})(Jp);
function _r(e, t) {
    for (var r in e)
        if (
            {}.hasOwnProperty.call(e, r) &&
            (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
        )
            return !1;
    for (var n in t)
        if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
            return !1;
    return !0;
}
function bf(e, t) {
    if (e == null) return {};
    var r = Zk(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(e, n) ||
                        (r[n] = e[n]));
    }
    return r;
}
function Zk(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
var xf = {
        click: "onClick",
        mousedown: "onMouseDown",
        mouseup: "onMouseUp",
        mouseover: "onMouseOver",
        mousemove: "onMouseMove",
        mouseout: "onMouseOut",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave",
        touchcancel: "onTouchCancel",
        touchend: "onTouchEnd",
        touchmove: "onTouchMove",
        touchstart: "onTouchStart",
    },
    Dt = function (t) {
        return typeof t == "string"
            ? t
            : t
            ? t.displayName || t.name || "Component"
            : "";
    },
    wf = null,
    Oo = null,
    Gu = function e(t) {
        if (t === wf && te(Oo)) return Oo;
        var r = [];
        return (
            T.exports.Children.forEach(t, function (n) {
                V(n) ||
                    (Jp.exports.isFragment(n)
                        ? (r = r.concat(e(n.props.children)))
                        : r.push(n));
            }),
            (Oo = r),
            (wf = t),
            r
        );
    },
    St = function (t, r) {
        var n = [],
            i = [];
        return (
            te(r)
                ? (i = r.map(function (a) {
                      return Dt(a);
                  }))
                : (i = [Dt(r)]),
            Gu(t).forEach(function (a) {
                var o = Ae(a, "type.displayName") || Ae(a, "type.name");
                i.indexOf(o) !== -1 && n.push(a);
            }),
            n
        );
    },
    bt = function (t, r) {
        var n = St(t, r);
        return n && n[0];
    },
    _f = function (t) {
        if (!t || !t.props) return !1;
        var r = t.props,
            n = r.width,
            i = r.height;
        return !(!U(n) || n <= 0 || !U(i) || i <= 0);
    },
    Qk = [
        "a",
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animate",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "circle",
        "clipPath",
        "color-profile",
        "cursor",
        "defs",
        "desc",
        "ellipse",
        "feBlend",
        "feColormatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "filter",
        "font",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-url",
        "foreignObject",
        "g",
        "glyph",
        "glyphRef",
        "hkern",
        "image",
        "line",
        "lineGradient",
        "marker",
        "mask",
        "metadata",
        "missing-glyph",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "script",
        "set",
        "stop",
        "style",
        "svg",
        "switch",
        "symbol",
        "text",
        "textPath",
        "title",
        "tref",
        "tspan",
        "use",
        "view",
        "vkern",
    ],
    eC = function (t) {
        return t && t.type && En(t.type) && Qk.indexOf(t.type) >= 0;
    },
    Qp = function e(t, r) {
        if (t === r) return !0;
        var n = T.exports.Children.count(t);
        if (n !== T.exports.Children.count(r)) return !1;
        if (n === 0) return !0;
        if (n === 1) return Sf(te(t) ? t[0] : t, te(r) ? r[0] : r);
        for (var i = 0; i < n; i++) {
            var a = t[i],
                o = r[i];
            if (te(a) || te(o)) {
                if (!e(a, o)) return !1;
            } else if (!Sf(a, o)) return !1;
        }
        return !0;
    },
    Sf = function (t, r) {
        if (V(t) && V(r)) return !0;
        if (!V(t) && !V(r)) {
            var n = t.props || {},
                i = n.children,
                a = bf(n, ["children"]),
                o = r.props || {},
                s = o.children,
                u = bf(o, ["children"]);
            return i && s ? _r(a, u) && Qp(i, s) : !i && !s ? _r(a, u) : !1;
        }
        return !1;
    },
    Of = function (t, r) {
        var n = [],
            i = {};
        return (
            Gu(t).forEach(function (a, o) {
                if (eC(a)) n.push(a);
                else if (a) {
                    var s = Dt(a.type),
                        u = r[s] || {},
                        l = u.handler,
                        c = u.once;
                    if (l && (!c || !i[s])) {
                        var f = l(a, s, o);
                        n.push(f), (i[s] = !0);
                    }
                }
            }),
            n
        );
    },
    tC = function (t) {
        var r = t && t.type;
        return r && xf[r] ? xf[r] : null;
    },
    rC = function (t, r) {
        return Gu(r).indexOf(t);
    },
    nC = Pu;
function iC(e, t) {
    return nC(e, t);
}
var Ms = iC,
    aC = Wr;
function oC(e, t, r) {
    for (var n = -1, i = e.length; ++n < i; ) {
        var a = e[n],
            o = t(a);
        if (o != null && (s === void 0 ? o === o && !aC(o) : r(o, s)))
            var s = o,
                u = a;
    }
    return u;
}
var ev = oC;
function sC(e, t) {
    return e > t;
}
var uC = sC,
    lC = ev,
    cC = uC,
    fC = zr;
function hC(e) {
    return e && e.length ? lC(e, fC, cC) : void 0;
}
var Nt = hC;
function dC(e, t) {
    return e < t;
}
var pC = dC,
    vC = ev,
    yC = pC,
    gC = zr;
function mC(e) {
    return e && e.length ? vC(e, gC, yC) : void 0;
}
var Ba = mC,
    bC = ku,
    xC = Wt,
    wC = Lp,
    _C = te;
function SC(e, t) {
    var r = _C(e) ? bC : wC;
    return r(e, xC(t));
}
var OC = SC,
    AC = Rp,
    $C = OC;
function TC(e, t) {
    return AC($C(e, t), 1);
}
var PC = TC,
    Gr = 1e9,
    EC = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
    },
    Vu,
    ge = !0,
    Qe = "[DecimalError] ",
    tr = Qe + "Invalid argument: ",
    qu = Qe + "Exponent out of range: ",
    qr = Math.floor,
    Kt = Math.pow,
    MC = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    We,
    Oe = 1e7,
    de = 7,
    tv = 9007199254740991,
    Li = qr(tv / de),
    W = {};
W.absoluteValue = W.abs = function () {
    var e = new this.constructor(this);
    return e.s && (e.s = 1), e;
};
W.comparedTo = W.cmp = function (e) {
    var t,
        r,
        n,
        i,
        a = this;
    if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
    if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
    for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
    return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
W.decimalPlaces = W.dp = function () {
    var e = this,
        t = e.d.length - 1,
        r = (t - e.e) * de;
    if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
    return r < 0 ? 0 : r;
};
W.dividedBy = W.div = function (e) {
    return Ot(this, new this.constructor(e));
};
W.dividedToIntegerBy = W.idiv = function (e) {
    var t = this,
        r = t.constructor;
    return ce(Ot(t, new r(e), 0, 1), r.precision);
};
W.equals = W.eq = function (e) {
    return !this.cmp(e);
};
W.exponent = function () {
    return xe(this);
};
W.greaterThan = W.gt = function (e) {
    return this.cmp(e) > 0;
};
W.greaterThanOrEqualTo = W.gte = function (e) {
    return this.cmp(e) >= 0;
};
W.isInteger = W.isint = function () {
    return this.e > this.d.length - 2;
};
W.isNegative = W.isneg = function () {
    return this.s < 0;
};
W.isPositive = W.ispos = function () {
    return this.s > 0;
};
W.isZero = function () {
    return this.s === 0;
};
W.lessThan = W.lt = function (e) {
    return this.cmp(e) < 0;
};
W.lessThanOrEqualTo = W.lte = function (e) {
    return this.cmp(e) < 1;
};
W.logarithm = W.log = function (e) {
    var t,
        r = this,
        n = r.constructor,
        i = n.precision,
        a = i + 5;
    if (e === void 0) e = new n(10);
    else if (((e = new n(e)), e.s < 1 || e.eq(We))) throw Error(Qe + "NaN");
    if (r.s < 1) throw Error(Qe + (r.s ? "NaN" : "-Infinity"));
    return r.eq(We)
        ? new n(0)
        : ((ge = !1), (t = Ot(yn(r, a), yn(e, a), a)), (ge = !0), ce(t, i));
};
W.minus = W.sub = function (e) {
    var t = this;
    return (
        (e = new t.constructor(e)),
        t.s == e.s ? iv(t, e) : rv(t, ((e.s = -e.s), e))
    );
};
W.modulo = W.mod = function (e) {
    var t,
        r = this,
        n = r.constructor,
        i = n.precision;
    if (((e = new n(e)), !e.s)) throw Error(Qe + "NaN");
    return r.s
        ? ((ge = !1), (t = Ot(r, e, 0, 1).times(e)), (ge = !0), r.minus(t))
        : ce(new n(r), i);
};
W.naturalExponential = W.exp = function () {
    return nv(this);
};
W.naturalLogarithm = W.ln = function () {
    return yn(this);
};
W.negated = W.neg = function () {
    var e = new this.constructor(this);
    return (e.s = -e.s || 0), e;
};
W.plus = W.add = function (e) {
    var t = this;
    return (
        (e = new t.constructor(e)),
        t.s == e.s ? rv(t, e) : iv(t, ((e.s = -e.s), e))
    );
};
W.precision = W.sd = function (e) {
    var t,
        r,
        n,
        i = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(tr + e);
    if (
        ((t = xe(i) + 1),
        (n = i.d.length - 1),
        (r = n * de + 1),
        (n = i.d[n]),
        n)
    ) {
        for (; n % 10 == 0; n /= 10) r--;
        for (n = i.d[0]; n >= 10; n /= 10) r++;
    }
    return e && t > r ? t : r;
};
W.squareRoot = W.sqrt = function () {
    var e,
        t,
        r,
        n,
        i,
        a,
        o,
        s = this,
        u = s.constructor;
    if (s.s < 1) {
        if (!s.s) return new u(0);
        throw Error(Qe + "NaN");
    }
    for (
        e = xe(s),
            ge = !1,
            i = Math.sqrt(+s),
            i == 0 || i == 1 / 0
                ? ((t = lt(s.d)),
                  (t.length + e) % 2 == 0 && (t += "0"),
                  (i = Math.sqrt(t)),
                  (e = qr((e + 1) / 2) - (e < 0 || e % 2)),
                  i == 1 / 0
                      ? (t = "5e" + e)
                      : ((t = i.toExponential()),
                        (t = t.slice(0, t.indexOf("e") + 1) + e)),
                  (n = new u(t)))
                : (n = new u(i.toString())),
            r = u.precision,
            i = o = r + 3;
        ;

    )
        if (
            ((a = n),
            (n = a.plus(Ot(s, a, o + 2)).times(0.5)),
            lt(a.d).slice(0, o) === (t = lt(n.d)).slice(0, o))
        ) {
            if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
                if ((ce(a, r + 1, 0), a.times(a).eq(s))) {
                    n = a;
                    break;
                }
            } else if (t != "9999") break;
            o += 4;
        }
    return (ge = !0), ce(n, r);
};
W.times = W.mul = function (e) {
    var t,
        r,
        n,
        i,
        a,
        o,
        s,
        u,
        l,
        c = this,
        f = c.constructor,
        d = c.d,
        y = (e = new f(e)).d;
    if (!c.s || !e.s) return new f(0);
    for (
        e.s *= c.s,
            r = c.e + e.e,
            u = d.length,
            l = y.length,
            u < l && ((a = d), (d = y), (y = a), (o = u), (u = l), (l = o)),
            a = [],
            o = u + l,
            n = o;
        n--;

    )
        a.push(0);
    for (n = l; --n >= 0; ) {
        for (t = 0, i = u + n; i > n; )
            (s = a[i] + y[n] * d[i - n - 1] + t),
                (a[i--] = s % Oe | 0),
                (t = (s / Oe) | 0);
        a[i] = (a[i] + t) % Oe | 0;
    }
    for (; !a[--o]; ) a.pop();
    return (
        t ? ++r : a.shift(), (e.d = a), (e.e = r), ge ? ce(e, f.precision) : e
    );
};
W.toDecimalPlaces = W.todp = function (e, t) {
    var r = this,
        n = r.constructor;
    return (
        (r = new n(r)),
        e === void 0
            ? r
            : (ht(e, 0, Gr),
              t === void 0 ? (t = n.rounding) : ht(t, 0, 8),
              ce(r, e + xe(r) + 1, t))
    );
};
W.toExponential = function (e, t) {
    var r,
        n = this,
        i = n.constructor;
    return (
        e === void 0
            ? (r = ir(n, !0))
            : (ht(e, 0, Gr),
              t === void 0 ? (t = i.rounding) : ht(t, 0, 8),
              (n = ce(new i(n), e + 1, t)),
              (r = ir(n, !0, e + 1))),
        r
    );
};
W.toFixed = function (e, t) {
    var r,
        n,
        i = this,
        a = i.constructor;
    return e === void 0
        ? ir(i)
        : (ht(e, 0, Gr),
          t === void 0 ? (t = a.rounding) : ht(t, 0, 8),
          (n = ce(new a(i), e + xe(i) + 1, t)),
          (r = ir(n.abs(), !1, e + xe(n) + 1)),
          i.isneg() && !i.isZero() ? "-" + r : r);
};
W.toInteger = W.toint = function () {
    var e = this,
        t = e.constructor;
    return ce(new t(e), xe(e) + 1, t.rounding);
};
W.toNumber = function () {
    return +this;
};
W.toPower = W.pow = function (e) {
    var t,
        r,
        n,
        i,
        a,
        o,
        s = this,
        u = s.constructor,
        l = 12,
        c = +(e = new u(e));
    if (!e.s) return new u(We);
    if (((s = new u(s)), !s.s)) {
        if (e.s < 1) throw Error(Qe + "Infinity");
        return s;
    }
    if (s.eq(We)) return s;
    if (((n = u.precision), e.eq(We))) return ce(s, n);
    if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = s.s), o)) {
        if ((r = c < 0 ? -c : c) <= tv) {
            for (
                i = new u(We), t = Math.ceil(n / de + 4), ge = !1;
                r % 2 && ((i = i.times(s)), $f(i.d, t)),
                    (r = qr(r / 2)),
                    r !== 0;

            )
                (s = s.times(s)), $f(s.d, t);
            return (ge = !0), e.s < 0 ? new u(We).div(i) : ce(i, n);
        }
    } else if (a < 0) throw Error(Qe + "NaN");
    return (
        (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
        (s.s = 1),
        (ge = !1),
        (i = e.times(yn(s, n + l))),
        (ge = !0),
        (i = nv(i)),
        (i.s = a),
        i
    );
};
W.toPrecision = function (e, t) {
    var r,
        n,
        i = this,
        a = i.constructor;
    return (
        e === void 0
            ? ((r = xe(i)), (n = ir(i, r <= a.toExpNeg || r >= a.toExpPos)))
            : (ht(e, 1, Gr),
              t === void 0 ? (t = a.rounding) : ht(t, 0, 8),
              (i = ce(new a(i), e, t)),
              (r = xe(i)),
              (n = ir(i, e <= r || r <= a.toExpNeg, e))),
        n
    );
};
W.toSignificantDigits = W.tosd = function (e, t) {
    var r = this,
        n = r.constructor;
    return (
        e === void 0
            ? ((e = n.precision), (t = n.rounding))
            : (ht(e, 1, Gr), t === void 0 ? (t = n.rounding) : ht(t, 0, 8)),
        ce(new n(r), e, t)
    );
};
W.toString =
    W.valueOf =
    W.val =
    W.toJSON =
    W[Symbol.for("nodejs.util.inspect.custom")] =
        function () {
            var e = this,
                t = xe(e),
                r = e.constructor;
            return ir(e, t <= r.toExpNeg || t >= r.toExpPos);
        };
function rv(e, t) {
    var r,
        n,
        i,
        a,
        o,
        s,
        u,
        l,
        c = e.constructor,
        f = c.precision;
    if (!e.s || !t.s) return t.s || (t = new c(e)), ge ? ce(t, f) : t;
    if (
        ((u = e.d),
        (l = t.d),
        (o = e.e),
        (i = t.e),
        (u = u.slice()),
        (a = o - i),
        a)
    ) {
        for (
            a < 0
                ? ((n = u), (a = -a), (s = l.length))
                : ((n = l), (i = o), (s = u.length)),
                o = Math.ceil(f / de),
                s = o > s ? o + 1 : s + 1,
                a > s && ((a = s), (n.length = 1)),
                n.reverse();
            a--;

        )
            n.push(0);
        n.reverse();
    }
    for (
        s = u.length,
            a = l.length,
            s - a < 0 && ((a = s), (n = l), (l = u), (u = n)),
            r = 0;
        a;

    )
        (r = ((u[--a] = u[a] + l[a] + r) / Oe) | 0), (u[a] %= Oe);
    for (r && (u.unshift(r), ++i), s = u.length; u[--s] == 0; ) u.pop();
    return (t.d = u), (t.e = i), ge ? ce(t, f) : t;
}
function ht(e, t, r) {
    if (e !== ~~e || e < t || e > r) throw Error(tr + e);
}
function lt(e) {
    var t,
        r,
        n,
        i = e.length - 1,
        a = "",
        o = e[0];
    if (i > 0) {
        for (a += o, t = 1; t < i; t++)
            (n = e[t] + ""), (r = de - n.length), r && (a += It(r)), (a += n);
        (o = e[t]), (n = o + ""), (r = de - n.length), r && (a += It(r));
    } else if (o === 0) return "0";
    for (; o % 10 === 0; ) o /= 10;
    return a + o;
}
var Ot = (function () {
    function e(n, i) {
        var a,
            o = 0,
            s = n.length;
        for (n = n.slice(); s--; )
            (a = n[s] * i + o), (n[s] = a % Oe | 0), (o = (a / Oe) | 0);
        return o && n.unshift(o), n;
    }
    function t(n, i, a, o) {
        var s, u;
        if (a != o) u = a > o ? 1 : -1;
        else
            for (s = u = 0; s < a; s++)
                if (n[s] != i[s]) {
                    u = n[s] > i[s] ? 1 : -1;
                    break;
                }
        return u;
    }
    function r(n, i, a) {
        for (var o = 0; a--; )
            (n[a] -= o),
                (o = n[a] < i[a] ? 1 : 0),
                (n[a] = o * Oe + n[a] - i[a]);
        for (; !n[0] && n.length > 1; ) n.shift();
    }
    return function (n, i, a, o) {
        var s,
            u,
            l,
            c,
            f,
            d,
            y,
            p,
            h,
            v,
            g,
            _,
            b,
            m,
            x,
            w,
            S,
            A,
            $ = n.constructor,
            E = n.s == i.s ? 1 : -1,
            P = n.d,
            M = i.d;
        if (!n.s) return new $(n);
        if (!i.s) throw Error(Qe + "Division by zero");
        for (
            u = n.e - i.e,
                S = M.length,
                x = P.length,
                y = new $(E),
                p = y.d = [],
                l = 0;
            M[l] == (P[l] || 0);

        )
            ++l;
        if (
            (M[l] > (P[l] || 0) && --u,
            a == null
                ? (_ = a = $.precision)
                : o
                ? (_ = a + (xe(n) - xe(i)) + 1)
                : (_ = a),
            _ < 0)
        )
            return new $(0);
        if (((_ = (_ / de + 2) | 0), (l = 0), S == 1))
            for (c = 0, M = M[0], _++; (l < x || c) && _--; l++)
                (b = c * Oe + (P[l] || 0)),
                    (p[l] = (b / M) | 0),
                    (c = b % M | 0);
        else {
            for (
                c = (Oe / (M[0] + 1)) | 0,
                    c > 1 &&
                        ((M = e(M, c)),
                        (P = e(P, c)),
                        (S = M.length),
                        (x = P.length)),
                    m = S,
                    h = P.slice(0, S),
                    v = h.length;
                v < S;

            )
                h[v++] = 0;
            (A = M.slice()), A.unshift(0), (w = M[0]), M[1] >= Oe / 2 && ++w;
            do
                (c = 0),
                    (s = t(M, h, S, v)),
                    s < 0
                        ? ((g = h[0]),
                          S != v && (g = g * Oe + (h[1] || 0)),
                          (c = (g / w) | 0),
                          c > 1
                              ? (c >= Oe && (c = Oe - 1),
                                (f = e(M, c)),
                                (d = f.length),
                                (v = h.length),
                                (s = t(f, h, d, v)),
                                s == 1 && (c--, r(f, S < d ? A : M, d)))
                              : (c == 0 && (s = c = 1), (f = M.slice())),
                          (d = f.length),
                          d < v && f.unshift(0),
                          r(h, f, v),
                          s == -1 &&
                              ((v = h.length),
                              (s = t(M, h, S, v)),
                              s < 1 && (c++, r(h, S < v ? A : M, v))),
                          (v = h.length))
                        : s === 0 && (c++, (h = [0])),
                    (p[l++] = c),
                    s && h[0] ? (h[v++] = P[m] || 0) : ((h = [P[m]]), (v = 1));
            while ((m++ < x || h[0] !== void 0) && _--);
        }
        return p[0] || p.shift(), (y.e = u), ce(y, o ? a + xe(y) + 1 : a);
    };
})();
function nv(e, t) {
    var r,
        n,
        i,
        a,
        o,
        s,
        u = 0,
        l = 0,
        c = e.constructor,
        f = c.precision;
    if (xe(e) > 16) throw Error(qu + xe(e));
    if (!e.s) return new c(We);
    for (
        t == null ? ((ge = !1), (s = f)) : (s = t), o = new c(0.03125);
        e.abs().gte(0.1);

    )
        (e = e.times(o)), (l += 5);
    for (
        n = ((Math.log(Kt(2, l)) / Math.LN10) * 2 + 5) | 0,
            s += n,
            r = i = a = new c(We),
            c.precision = s;
        ;

    ) {
        if (
            ((i = ce(i.times(e), s)),
            (r = r.times(++u)),
            (o = a.plus(Ot(i, r, s))),
            lt(o.d).slice(0, s) === lt(a.d).slice(0, s))
        ) {
            for (; l--; ) a = ce(a.times(a), s);
            return (c.precision = f), t == null ? ((ge = !0), ce(a, f)) : a;
        }
        a = o;
    }
}
function xe(e) {
    for (var t = e.e * de, r = e.d[0]; r >= 10; r /= 10) t++;
    return t;
}
function Ao(e, t, r) {
    if (t > e.LN10.sd())
        throw (
            ((ge = !0),
            r && (e.precision = r),
            Error(Qe + "LN10 precision limit exceeded"))
        );
    return ce(new e(e.LN10), t);
}
function It(e) {
    for (var t = ""; e--; ) t += "0";
    return t;
}
function yn(e, t) {
    var r,
        n,
        i,
        a,
        o,
        s,
        u,
        l,
        c,
        f = 1,
        d = 10,
        y = e,
        p = y.d,
        h = y.constructor,
        v = h.precision;
    if (y.s < 1) throw Error(Qe + (y.s ? "NaN" : "-Infinity"));
    if (y.eq(We)) return new h(0);
    if ((t == null ? ((ge = !1), (l = v)) : (l = t), y.eq(10)))
        return t == null && (ge = !0), Ao(h, l);
    if (
        ((l += d),
        (h.precision = l),
        (r = lt(p)),
        (n = r.charAt(0)),
        (a = xe(y)),
        Math.abs(a) < 15e14)
    ) {
        for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
            (y = y.times(e)), (r = lt(y.d)), (n = r.charAt(0)), f++;
        (a = xe(y)),
            n > 1
                ? ((y = new h("0." + r)), a++)
                : (y = new h(n + "." + r.slice(1)));
    } else
        return (
            (u = Ao(h, l + 2, v).times(a + "")),
            (y = yn(new h(n + "." + r.slice(1)), l - d).plus(u)),
            (h.precision = v),
            t == null ? ((ge = !0), ce(y, v)) : y
        );
    for (
        s = o = y = Ot(y.minus(We), y.plus(We), l),
            c = ce(y.times(y), l),
            i = 3;
        ;

    ) {
        if (
            ((o = ce(o.times(c), l)),
            (u = s.plus(Ot(o, new h(i), l))),
            lt(u.d).slice(0, l) === lt(s.d).slice(0, l))
        )
            return (
                (s = s.times(2)),
                a !== 0 && (s = s.plus(Ao(h, l + 2, v).times(a + ""))),
                (s = Ot(s, new h(f), l)),
                (h.precision = v),
                t == null ? ((ge = !0), ce(s, v)) : s
            );
        (s = u), (i += 2);
    }
}
function Af(e, t) {
    var r, n, i;
    for (
        (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (n = t.search(/e/i)) > 0
                ? (r < 0 && (r = n),
                  (r += +t.slice(n + 1)),
                  (t = t.substring(0, n)))
                : r < 0 && (r = t.length),
            n = 0;
        t.charCodeAt(n) === 48;

    )
        ++n;
    for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
    if (((t = t.slice(n, i)), t)) {
        if (
            ((i -= n),
            (r = r - n - 1),
            (e.e = qr(r / de)),
            (e.d = []),
            (n = (r + 1) % de),
            r < 0 && (n += de),
            n < i)
        ) {
            for (n && e.d.push(+t.slice(0, n)), i -= de; n < i; )
                e.d.push(+t.slice(n, (n += de)));
            (t = t.slice(n)), (n = de - t.length);
        } else n -= i;
        for (; n--; ) t += "0";
        if ((e.d.push(+t), ge && (e.e > Li || e.e < -Li))) throw Error(qu + r);
    } else (e.s = 0), (e.e = 0), (e.d = [0]);
    return e;
}
function ce(e, t, r) {
    var n,
        i,
        a,
        o,
        s,
        u,
        l,
        c,
        f = e.d;
    for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
    if (((n = t - o), n < 0)) (n += de), (i = t), (l = f[(c = 0)]);
    else {
        if (((c = Math.ceil((n + 1) / de)), (a = f.length), c >= a)) return e;
        for (l = a = f[c], o = 1; a >= 10; a /= 10) o++;
        (n %= de), (i = n - de + o);
    }
    if (
        (r !== void 0 &&
            ((a = Kt(10, o - i - 1)),
            (s = (l / a) % 10 | 0),
            (u = t < 0 || f[c + 1] !== void 0 || l % a),
            (u =
                r < 4
                    ? (s || u) && (r == 0 || r == (e.s < 0 ? 3 : 2))
                    : s > 5 ||
                      (s == 5 &&
                          (r == 4 ||
                              u ||
                              (r == 6 &&
                                  (n > 0
                                      ? i > 0
                                          ? l / Kt(10, o - i)
                                          : 0
                                      : f[c - 1]) %
                                      10 &
                                      1) ||
                              r == (e.s < 0 ? 8 : 7))))),
        t < 1 || !f[0])
    )
        return (
            u
                ? ((a = xe(e)),
                  (f.length = 1),
                  (t = t - a - 1),
                  (f[0] = Kt(10, (de - (t % de)) % de)),
                  (e.e = qr(-t / de) || 0))
                : ((f.length = 1), (f[0] = e.e = e.s = 0)),
            e
        );
    if (
        (n == 0
            ? ((f.length = c), (a = 1), c--)
            : ((f.length = c + 1),
              (a = Kt(10, de - n)),
              (f[c] = i > 0 ? ((l / Kt(10, o - i)) % Kt(10, i) | 0) * a : 0)),
        u)
    )
        for (;;)
            if (c == 0) {
                (f[0] += a) == Oe && ((f[0] = 1), ++e.e);
                break;
            } else {
                if (((f[c] += a), f[c] != Oe)) break;
                (f[c--] = 0), (a = 1);
            }
    for (n = f.length; f[--n] === 0; ) f.pop();
    if (ge && (e.e > Li || e.e < -Li)) throw Error(qu + xe(e));
    return e;
}
function iv(e, t) {
    var r,
        n,
        i,
        a,
        o,
        s,
        u,
        l,
        c,
        f,
        d = e.constructor,
        y = d.precision;
    if (!e.s || !t.s)
        return t.s ? (t.s = -t.s) : (t = new d(e)), ge ? ce(t, y) : t;
    if (
        ((u = e.d),
        (f = t.d),
        (n = t.e),
        (l = e.e),
        (u = u.slice()),
        (o = l - n),
        o)
    ) {
        for (
            c = o < 0,
                c
                    ? ((r = u), (o = -o), (s = f.length))
                    : ((r = f), (n = l), (s = u.length)),
                i = Math.max(Math.ceil(y / de), s) + 2,
                o > i && ((o = i), (r.length = 1)),
                r.reverse(),
                i = o;
            i--;

        )
            r.push(0);
        r.reverse();
    } else {
        for (
            i = u.length, s = f.length, c = i < s, c && (s = i), i = 0;
            i < s;
            i++
        )
            if (u[i] != f[i]) {
                c = u[i] < f[i];
                break;
            }
        o = 0;
    }
    for (
        c && ((r = u), (u = f), (f = r), (t.s = -t.s)),
            s = u.length,
            i = f.length - s;
        i > 0;
        --i
    )
        u[s++] = 0;
    for (i = f.length; i > o; ) {
        if (u[--i] < f[i]) {
            for (a = i; a && u[--a] === 0; ) u[a] = Oe - 1;
            --u[a], (u[i] += Oe);
        }
        u[i] -= f[i];
    }
    for (; u[--s] === 0; ) u.pop();
    for (; u[0] === 0; u.shift()) --n;
    return u[0] ? ((t.d = u), (t.e = n), ge ? ce(t, y) : t) : new d(0);
}
function ir(e, t, r) {
    var n,
        i = xe(e),
        a = lt(e.d),
        o = a.length;
    return (
        t
            ? (r && (n = r - o) > 0
                  ? (a = a.charAt(0) + "." + a.slice(1) + It(n))
                  : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
              (a = a + (i < 0 ? "e" : "e+") + i))
            : i < 0
            ? ((a = "0." + It(-i - 1) + a),
              r && (n = r - o) > 0 && (a += It(n)))
            : i >= o
            ? ((a += It(i + 1 - o)),
              r && (n = r - i - 1) > 0 && (a = a + "." + It(n)))
            : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
              r &&
                  (n = r - o) > 0 &&
                  (i + 1 === o && (a += "."), (a += It(n)))),
        e.s < 0 ? "-" + a : a
    );
}
function $f(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function av(e) {
    var t, r, n;
    function i(a) {
        var o = this;
        if (!(o instanceof i)) return new i(a);
        if (((o.constructor = i), a instanceof i)) {
            (o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a);
            return;
        }
        if (typeof a == "number") {
            if (a * 0 !== 0) throw Error(tr + a);
            if (a > 0) o.s = 1;
            else if (a < 0) (a = -a), (o.s = -1);
            else {
                (o.s = 0), (o.e = 0), (o.d = [0]);
                return;
            }
            if (a === ~~a && a < 1e7) {
                (o.e = 0), (o.d = [a]);
                return;
            }
            return Af(o, a.toString());
        } else if (typeof a != "string") throw Error(tr + a);
        if (
            (a.charCodeAt(0) === 45
                ? ((a = a.slice(1)), (o.s = -1))
                : (o.s = 1),
            MC.test(a))
        )
            Af(o, a);
        else throw Error(tr + a);
    }
    if (
        ((i.prototype = W),
        (i.ROUND_UP = 0),
        (i.ROUND_DOWN = 1),
        (i.ROUND_CEIL = 2),
        (i.ROUND_FLOOR = 3),
        (i.ROUND_HALF_UP = 4),
        (i.ROUND_HALF_DOWN = 5),
        (i.ROUND_HALF_EVEN = 6),
        (i.ROUND_HALF_CEIL = 7),
        (i.ROUND_HALF_FLOOR = 8),
        (i.clone = av),
        (i.config = i.set = kC),
        e === void 0 && (e = {}),
        e)
    )
        for (
            n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"],
                t = 0;
            t < n.length;

        )
            e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
    return i.config(e), i;
}
function kC(e) {
    if (!e || typeof e != "object") throw Error(Qe + "Object expected");
    var t,
        r,
        n,
        i = [
            "precision",
            1,
            Gr,
            "rounding",
            0,
            8,
            "toExpNeg",
            -1 / 0,
            0,
            "toExpPos",
            0,
            1 / 0,
        ];
    for (t = 0; t < i.length; t += 3)
        if ((n = e[(r = i[t])]) !== void 0)
            if (qr(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
            else throw Error(tr + r + ": " + n);
    if ((n = e[(r = "LN10")]) !== void 0)
        if (n == Math.LN10) this[r] = new this(n);
        else throw Error(tr + r + ": " + n);
    return this;
}
var Vu = av(EC);
We = new Vu(1);
const le = Vu;
function CC(e) {
    return DC(e) || RC(e) || NC(e) || IC();
}
function IC() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NC(e, t) {
    if (!!e) {
        if (typeof e == "string") return ks(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return ks(e, t);
    }
}
function RC(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function DC(e) {
    if (Array.isArray(e)) return ks(e);
}
function ks(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var LC = function (t) {
        return t;
    },
    ov = { "@@functional/placeholder": !0 },
    sv = function (t) {
        return t === ov;
    },
    Tf = function (t) {
        return function r() {
            return arguments.length === 0 ||
                (arguments.length === 1 &&
                    sv(arguments.length <= 0 ? void 0 : arguments[0]))
                ? r
                : t.apply(void 0, arguments);
        };
    },
    jC = function e(t, r) {
        return t === 1
            ? r
            : Tf(function () {
                  for (
                      var n = arguments.length, i = new Array(n), a = 0;
                      a < n;
                      a++
                  )
                      i[a] = arguments[a];
                  var o = i.filter(function (s) {
                      return s !== ov;
                  }).length;
                  return o >= t
                      ? r.apply(void 0, i)
                      : e(
                            t - o,
                            Tf(function () {
                                for (
                                    var s = arguments.length,
                                        u = new Array(s),
                                        l = 0;
                                    l < s;
                                    l++
                                )
                                    u[l] = arguments[l];
                                var c = i.map(function (f) {
                                    return sv(f) ? u.shift() : f;
                                });
                                return r.apply(void 0, CC(c).concat(u));
                            })
                        );
              });
    },
    Ua = function (t) {
        return jC(t.length, t);
    },
    Cs = function (t, r) {
        for (var n = [], i = t; i < r; ++i) n[i - t] = i;
        return n;
    },
    FC = Ua(function (e, t) {
        return Array.isArray(t)
            ? t.map(e)
            : Object.keys(t)
                  .map(function (r) {
                      return t[r];
                  })
                  .map(e);
    }),
    BC = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
        if (!r.length) return LC;
        var i = r.reverse(),
            a = i[0],
            o = i.slice(1);
        return function () {
            return o.reduce(function (s, u) {
                return u(s);
            }, a.apply(void 0, arguments));
        };
    },
    Is = function (t) {
        return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
    },
    uv = function (t) {
        var r = null,
            n = null;
        return function () {
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                a[o] = arguments[o];
            return (
                (r &&
                    a.every(function (s, u) {
                        return s === r[u];
                    })) ||
                    ((r = a), (n = t.apply(void 0, a))),
                n
            );
        };
    };
function UC(e) {
    var t;
    return (
        e === 0
            ? (t = 1)
            : (t = Math.floor(new le(e).abs().log(10).toNumber()) + 1),
        t
    );
}
function HC(e, t, r) {
    for (var n = new le(e), i = 0, a = []; n.lt(t) && i < 1e5; )
        a.push(n.toNumber()), (n = n.add(r)), i++;
    return a;
}
var WC = Ua(function (e, t, r) {
        var n = +e,
            i = +t;
        return n + r * (i - n);
    }),
    zC = Ua(function (e, t, r) {
        var n = t - +e;
        return (n = n || 1 / 0), (r - e) / n;
    }),
    GC = Ua(function (e, t, r) {
        var n = t - +e;
        return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
    });
const Ha = {
    rangeStep: HC,
    getDigitCount: UC,
    interpolateNumber: WC,
    uninterpolateNumber: zC,
    uninterpolateTruncation: GC,
};
function Ns(e) {
    return YC(e) || VC(e) || lv(e) || qC();
}
function qC() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VC(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function YC(e) {
    if (Array.isArray(e)) return Rs(e);
}
function gn(e, t) {
    return JC(e) || KC(e, t) || lv(e, t) || XC();
}
function XC() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lv(e, t) {
    if (!!e) {
        if (typeof e == "string") return Rs(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Rs(e, t);
    }
}
function Rs(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function KC(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var o = e[Symbol.iterator](), s;
                !(n = (s = o.next()).done) &&
                (r.push(s.value), !(t && r.length === t));
                n = !0
            );
        } catch (u) {
            (i = !0), (a = u);
        } finally {
            try {
                !n && o.return != null && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return r;
    }
}
function JC(e) {
    if (Array.isArray(e)) return e;
}
function cv(e) {
    var t = gn(e, 2),
        r = t[0],
        n = t[1],
        i = r,
        a = n;
    return r > n && ((i = n), (a = r)), [i, a];
}
function fv(e, t, r) {
    if (e.lte(0)) return new le(0);
    var n = Ha.getDigitCount(e.toNumber()),
        i = new le(10).pow(n),
        a = e.div(i),
        o = n !== 1 ? 0.05 : 0.1,
        s = new le(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
        u = s.mul(i);
    return t ? u : new le(Math.ceil(u));
}
function ZC(e, t, r) {
    var n = 1,
        i = new le(e);
    if (!i.isint() && r) {
        var a = Math.abs(e);
        a < 1
            ? ((n = new le(10).pow(Ha.getDigitCount(e) - 1)),
              (i = new le(Math.floor(i.div(n).toNumber())).mul(n)))
            : a > 1 && (i = new le(Math.floor(e)));
    } else
        e === 0
            ? (i = new le(Math.floor((t - 1) / 2)))
            : r || (i = new le(Math.floor(e)));
    var o = Math.floor((t - 1) / 2),
        s = BC(
            FC(function (u) {
                return i.add(new le(u - o).mul(n)).toNumber();
            }),
            Cs
        );
    return s(0, t);
}
function hv(e, t, r, n) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (r - 1)))
        return { step: new le(0), tickMin: new le(0), tickMax: new le(0) };
    var a = fv(new le(t).sub(e).div(r - 1), n, i),
        o;
    e <= 0 && t >= 0
        ? (o = new le(0))
        : ((o = new le(e).add(t).div(2)), (o = o.sub(new le(o).mod(a))));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
        u = Math.ceil(new le(t).sub(o).div(a).toNumber()),
        l = s + u + 1;
    return l > r
        ? hv(e, t, r, n, i + 1)
        : (l < r &&
              ((u = t > 0 ? u + (r - l) : u), (s = t > 0 ? s : s + (r - l))),
          {
              step: a,
              tickMin: o.sub(new le(s).mul(a)),
              tickMax: o.add(new le(u).mul(a)),
          });
}
function QC(e) {
    var t = gn(e, 2),
        r = t[0],
        n = t[1],
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        o = Math.max(i, 2),
        s = cv([r, n]),
        u = gn(s, 2),
        l = u[0],
        c = u[1];
    if (l === -1 / 0 || c === 1 / 0) {
        var f =
            c === 1 / 0
                ? [l].concat(
                      Ns(
                          Cs(0, i - 1).map(function () {
                              return 1 / 0;
                          })
                      )
                  )
                : [].concat(
                      Ns(
                          Cs(0, i - 1).map(function () {
                              return -1 / 0;
                          })
                      ),
                      [c]
                  );
        return r > n ? Is(f) : f;
    }
    if (l === c) return ZC(l, i, a);
    var d = hv(l, c, o, a),
        y = d.step,
        p = d.tickMin,
        h = d.tickMax,
        v = Ha.rangeStep(p, h.add(new le(0.1).mul(y)), y);
    return r > n ? Is(v) : v;
}
function eI(e, t) {
    var r = gn(e, 2),
        n = r[0],
        i = r[1],
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        o = cv([n, i]),
        s = gn(o, 2),
        u = s[0],
        l = s[1];
    if (u === -1 / 0 || l === 1 / 0) return [n, i];
    if (u === l) return [u];
    var c = Math.max(t, 2),
        f = fv(new le(l).sub(u).div(c - 1), a, 0),
        d = [].concat(
            Ns(Ha.rangeStep(new le(u), new le(l).sub(new le(0.99).mul(f)), f)),
            [l]
        );
    return n > i ? Is(d) : d;
}
var tI = uv(QC),
    rI = uv(eI);
function kn(e, t) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Yu(e) {
    let t = e,
        r = e;
    e.length === 1 && ((t = (o, s) => e(o) - s), (r = nI(e)));
    function n(o, s, u, l) {
        for (u == null && (u = 0), l == null && (l = o.length); u < l; ) {
            const c = (u + l) >>> 1;
            r(o[c], s) < 0 ? (u = c + 1) : (l = c);
        }
        return u;
    }
    function i(o, s, u, l) {
        for (u == null && (u = 0), l == null && (l = o.length); u < l; ) {
            const c = (u + l) >>> 1;
            r(o[c], s) > 0 ? (l = c) : (u = c + 1);
        }
        return u;
    }
    function a(o, s, u, l) {
        u == null && (u = 0), l == null && (l = o.length);
        const c = n(o, s, u, l - 1);
        return c > u && t(o[c - 1], s) > -t(o[c], s) ? c - 1 : c;
    }
    return { left: n, center: a, right: i };
}
function nI(e) {
    return (t, r) => kn(e(t), r);
}
function dv(e) {
    return e === null ? NaN : +e;
}
function* iI(e, t) {
    if (t === void 0) for (let r of e) r != null && (r = +r) >= r && (yield r);
    else {
        let r = -1;
        for (let n of e)
            (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
    }
}
const aI = Yu(kn),
    oI = aI.right;
Yu(dv).center;
const Cn = oI;
var Ds = Math.sqrt(50),
    Ls = Math.sqrt(10),
    js = Math.sqrt(2);
function Fs(e, t, r) {
    var n,
        i = -1,
        a,
        o,
        s;
    if (((t = +t), (e = +e), (r = +r), e === t && r > 0)) return [e];
    if (
        ((n = t < e) && ((a = e), (e = t), (t = a)),
        (s = pv(e, t, r)) === 0 || !isFinite(s))
    )
        return [];
    if (s > 0) {
        let u = Math.round(e / s),
            l = Math.round(t / s);
        for (
            u * s < e && ++u, l * s > t && --l, o = new Array((a = l - u + 1));
            ++i < a;

        )
            o[i] = (u + i) * s;
    } else {
        s = -s;
        let u = Math.round(e * s),
            l = Math.round(t * s);
        for (
            u / s < e && ++u, l / s > t && --l, o = new Array((a = l - u + 1));
            ++i < a;

        )
            o[i] = (u + i) / s;
    }
    return n && o.reverse(), o;
}
function pv(e, t, r) {
    var n = (t - e) / Math.max(0, r),
        i = Math.floor(Math.log(n) / Math.LN10),
        a = n / Math.pow(10, i);
    return i >= 0
        ? (a >= Ds ? 10 : a >= Ls ? 5 : a >= js ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (a >= Ds ? 10 : a >= Ls ? 5 : a >= js ? 2 : 1);
}
function Bs(e, t, r) {
    var n = Math.abs(t - e) / Math.max(0, r),
        i = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)),
        a = n / i;
    return (
        a >= Ds ? (i *= 10) : a >= Ls ? (i *= 5) : a >= js && (i *= 2),
        t < e ? -i : i
    );
}
function Pf(e, t) {
    let r;
    if (t === void 0)
        for (const n of e)
            n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
    else {
        let n = -1;
        for (let i of e)
            (i = t(i, ++n, e)) != null &&
                (r < i || (r === void 0 && i >= i)) &&
                (r = i);
    }
    return r;
}
function Ef(e, t) {
    let r;
    if (t === void 0)
        for (const n of e)
            n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
    else {
        let n = -1;
        for (let i of e)
            (i = t(i, ++n, e)) != null &&
                (r > i || (r === void 0 && i >= i)) &&
                (r = i);
    }
    return r;
}
function vv(e, t, r = 0, n = e.length - 1, i = kn) {
    for (; n > r; ) {
        if (n - r > 600) {
            const u = n - r + 1,
                l = t - r + 1,
                c = Math.log(u),
                f = 0.5 * Math.exp((2 * c) / 3),
                d =
                    0.5 *
                    Math.sqrt((c * f * (u - f)) / u) *
                    (l - u / 2 < 0 ? -1 : 1),
                y = Math.max(r, Math.floor(t - (l * f) / u + d)),
                p = Math.min(n, Math.floor(t + ((u - l) * f) / u + d));
            vv(e, t, y, p, i);
        }
        const a = e[t];
        let o = r,
            s = n;
        for (rn(e, r, t), i(e[n], a) > 0 && rn(e, r, n); o < s; ) {
            for (rn(e, o, s), ++o, --s; i(e[o], a) < 0; ) ++o;
            for (; i(e[s], a) > 0; ) --s;
        }
        i(e[r], a) === 0 ? rn(e, r, s) : (++s, rn(e, s, n)),
            s <= t && (r = s + 1),
            t <= s && (n = s - 1);
    }
    return e;
}
function rn(e, t, r) {
    const n = e[t];
    (e[t] = e[r]), (e[r] = n);
}
function sI(e, t, r) {
    if (((e = Float64Array.from(iI(e, r))), !!(n = e.length))) {
        if ((t = +t) <= 0 || n < 2) return Ef(e);
        if (t >= 1) return Pf(e);
        var n,
            i = (n - 1) * t,
            a = Math.floor(i),
            o = Pf(vv(e, a).subarray(0, a + 1)),
            s = Ef(e.subarray(a + 1));
        return o + (s - o) * (i - a);
    }
}
function uI(e, t, r = dv) {
    if (!!(n = e.length)) {
        if ((t = +t) <= 0 || n < 2) return +r(e[0], 0, e);
        if (t >= 1) return +r(e[n - 1], n - 1, e);
        var n,
            i = (n - 1) * t,
            a = Math.floor(i),
            o = +r(e[a], a, e),
            s = +r(e[a + 1], a + 1, e);
        return o + (s - o) * (i - a);
    }
}
function lI(e, t, r) {
    (e = +e),
        (t = +t),
        (r =
            (i = arguments.length) < 2
                ? ((t = e), (e = 0), 1)
                : i < 3
                ? 1
                : +r);
    for (
        var n = -1,
            i = Math.max(0, Math.ceil((t - e) / r)) | 0,
            a = new Array(i);
        ++n < i;

    )
        a[n] = e + n * r;
    return a;
}
function et(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(e);
            break;
        default:
            this.range(t).domain(e);
            break;
    }
    return this;
}
function $t(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1: {
            typeof e == "function" ? this.interpolator(e) : this.range(e);
            break;
        }
        default: {
            this.domain(e),
                typeof t == "function" ? this.interpolator(t) : this.range(t);
            break;
        }
    }
    return this;
}
const Us = Symbol("implicit");
function Xu() {
    var e = new Map(),
        t = [],
        r = [],
        n = Us;
    function i(a) {
        var o = a + "",
            s = e.get(o);
        if (!s) {
            if (n !== Us) return n;
            e.set(o, (s = t.push(a)));
        }
        return r[(s - 1) % r.length];
    }
    return (
        (i.domain = function (a) {
            if (!arguments.length) return t.slice();
            (t = []), (e = new Map());
            for (const o of a) {
                const s = o + "";
                e.has(s) || e.set(s, t.push(o));
            }
            return i;
        }),
        (i.range = function (a) {
            return arguments.length ? ((r = Array.from(a)), i) : r.slice();
        }),
        (i.unknown = function (a) {
            return arguments.length ? ((n = a), i) : n;
        }),
        (i.copy = function () {
            return Xu(t, r).unknown(n);
        }),
        et.apply(i, arguments),
        i
    );
}
function mn() {
    var e = Xu().unknown(void 0),
        t = e.domain,
        r = e.range,
        n = 0,
        i = 1,
        a,
        o,
        s = !1,
        u = 0,
        l = 0,
        c = 0.5;
    delete e.unknown;
    function f() {
        var d = t().length,
            y = i < n,
            p = y ? i : n,
            h = y ? n : i;
        (a = (h - p) / Math.max(1, d - u + l * 2)),
            s && (a = Math.floor(a)),
            (p += (h - p - a * (d - u)) * c),
            (o = a * (1 - u)),
            s && ((p = Math.round(p)), (o = Math.round(o)));
        var v = lI(d).map(function (g) {
            return p + a * g;
        });
        return r(y ? v.reverse() : v);
    }
    return (
        (e.domain = function (d) {
            return arguments.length ? (t(d), f()) : t();
        }),
        (e.range = function (d) {
            return arguments.length
                ? (([n, i] = d), (n = +n), (i = +i), f())
                : [n, i];
        }),
        (e.rangeRound = function (d) {
            return ([n, i] = d), (n = +n), (i = +i), (s = !0), f();
        }),
        (e.bandwidth = function () {
            return o;
        }),
        (e.step = function () {
            return a;
        }),
        (e.round = function (d) {
            return arguments.length ? ((s = !!d), f()) : s;
        }),
        (e.padding = function (d) {
            return arguments.length ? ((u = Math.min(1, (l = +d))), f()) : u;
        }),
        (e.paddingInner = function (d) {
            return arguments.length ? ((u = Math.min(1, d)), f()) : u;
        }),
        (e.paddingOuter = function (d) {
            return arguments.length ? ((l = +d), f()) : l;
        }),
        (e.align = function (d) {
            return arguments.length
                ? ((c = Math.max(0, Math.min(1, d))), f())
                : c;
        }),
        (e.copy = function () {
            return mn(t(), [n, i])
                .round(s)
                .paddingInner(u)
                .paddingOuter(l)
                .align(c);
        }),
        et.apply(f(), arguments)
    );
}
function yv(e) {
    var t = e.copy;
    return (
        (e.padding = e.paddingOuter),
        delete e.paddingInner,
        delete e.paddingOuter,
        (e.copy = function () {
            return yv(t());
        }),
        e
    );
}
function dn() {
    return yv(mn.apply(null, arguments).paddingInner(1));
}
function Ku(e, t, r) {
    (e.prototype = t.prototype = r), (r.constructor = e);
}
function gv(e, t) {
    var r = Object.create(e.prototype);
    for (var n in t) r[n] = t[n];
    return r;
}
function In() {}
var bn = 0.7,
    ji = 1 / bn,
    Sr = "\\s*([+-]?\\d+)\\s*",
    xn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    ct = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    cI = /^#([0-9a-f]{3,8})$/,
    fI = new RegExp("^rgb\\(" + [Sr, Sr, Sr] + "\\)$"),
    hI = new RegExp("^rgb\\(" + [ct, ct, ct] + "\\)$"),
    dI = new RegExp("^rgba\\(" + [Sr, Sr, Sr, xn] + "\\)$"),
    pI = new RegExp("^rgba\\(" + [ct, ct, ct, xn] + "\\)$"),
    vI = new RegExp("^hsl\\(" + [xn, ct, ct] + "\\)$"),
    yI = new RegExp("^hsla\\(" + [xn, ct, ct, xn] + "\\)$"),
    Mf = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
    };
Ku(In, wn, {
    copy: function (e) {
        return Object.assign(new this.constructor(), this, e);
    },
    displayable: function () {
        return this.rgb().displayable();
    },
    hex: kf,
    formatHex: kf,
    formatHsl: gI,
    formatRgb: Cf,
    toString: Cf,
});
function kf() {
    return this.rgb().formatHex();
}
function gI() {
    return mv(this).formatHsl();
}
function Cf() {
    return this.rgb().formatRgb();
}
function wn(e) {
    var t, r;
    return (
        (e = (e + "").trim().toLowerCase()),
        (t = cI.exec(e))
            ? ((r = t[1].length),
              (t = parseInt(t[1], 16)),
              r === 6
                  ? If(t)
                  : r === 3
                  ? new ze(
                        ((t >> 8) & 15) | ((t >> 4) & 240),
                        ((t >> 4) & 15) | (t & 240),
                        ((t & 15) << 4) | (t & 15),
                        1
                    )
                  : r === 8
                  ? qn(
                        (t >> 24) & 255,
                        (t >> 16) & 255,
                        (t >> 8) & 255,
                        (t & 255) / 255
                    )
                  : r === 4
                  ? qn(
                        ((t >> 12) & 15) | ((t >> 8) & 240),
                        ((t >> 8) & 15) | ((t >> 4) & 240),
                        ((t >> 4) & 15) | (t & 240),
                        (((t & 15) << 4) | (t & 15)) / 255
                    )
                  : null)
            : (t = fI.exec(e))
            ? new ze(t[1], t[2], t[3], 1)
            : (t = hI.exec(e))
            ? new ze(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  1
              )
            : (t = dI.exec(e))
            ? qn(t[1], t[2], t[3], t[4])
            : (t = pI.exec(e))
            ? qn(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4]
              )
            : (t = vI.exec(e))
            ? Df(t[1], t[2] / 100, t[3] / 100, 1)
            : (t = yI.exec(e))
            ? Df(t[1], t[2] / 100, t[3] / 100, t[4])
            : Mf.hasOwnProperty(e)
            ? If(Mf[e])
            : e === "transparent"
            ? new ze(NaN, NaN, NaN, 0)
            : null
    );
}
function If(e) {
    return new ze((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function qn(e, t, r, n) {
    return n <= 0 && (e = t = r = NaN), new ze(e, t, r, n);
}
function mI(e) {
    return (
        e instanceof In || (e = wn(e)),
        e ? ((e = e.rgb()), new ze(e.r, e.g, e.b, e.opacity)) : new ze()
    );
}
function Hs(e, t, r, n) {
    return arguments.length === 1 ? mI(e) : new ze(e, t, r, n == null ? 1 : n);
}
function ze(e, t, r, n) {
    (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
}
Ku(
    ze,
    Hs,
    gv(In, {
        brighter: function (e) {
            return (
                (e = e == null ? ji : Math.pow(ji, e)),
                new ze(this.r * e, this.g * e, this.b * e, this.opacity)
            );
        },
        darker: function (e) {
            return (
                (e = e == null ? bn : Math.pow(bn, e)),
                new ze(this.r * e, this.g * e, this.b * e, this.opacity)
            );
        },
        rgb: function () {
            return this;
        },
        displayable: function () {
            return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
            );
        },
        hex: Nf,
        formatHex: Nf,
        formatRgb: Rf,
        toString: Rf,
    })
);
function Nf() {
    return "#" + $o(this.r) + $o(this.g) + $o(this.b);
}
function Rf() {
    var e = this.opacity;
    return (
        (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
        (e === 1 ? "rgb(" : "rgba(") +
            Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
            ", " +
            Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
            ", " +
            Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
            (e === 1 ? ")" : ", " + e + ")")
    );
}
function $o(e) {
    return (
        (e = Math.max(0, Math.min(255, Math.round(e) || 0))),
        (e < 16 ? "0" : "") + e.toString(16)
    );
}
function Df(e, t, r, n) {
    return (
        n <= 0
            ? (e = t = r = NaN)
            : r <= 0 || r >= 1
            ? (e = t = NaN)
            : t <= 0 && (e = NaN),
        new ot(e, t, r, n)
    );
}
function mv(e) {
    if (e instanceof ot) return new ot(e.h, e.s, e.l, e.opacity);
    if ((e instanceof In || (e = wn(e)), !e)) return new ot();
    if (e instanceof ot) return e;
    e = e.rgb();
    var t = e.r / 255,
        r = e.g / 255,
        n = e.b / 255,
        i = Math.min(t, r, n),
        a = Math.max(t, r, n),
        o = NaN,
        s = a - i,
        u = (a + i) / 2;
    return (
        s
            ? (t === a
                  ? (o = (r - n) / s + (r < n) * 6)
                  : r === a
                  ? (o = (n - t) / s + 2)
                  : (o = (t - r) / s + 4),
              (s /= u < 0.5 ? a + i : 2 - a - i),
              (o *= 60))
            : (s = u > 0 && u < 1 ? 0 : o),
        new ot(o, s, u, e.opacity)
    );
}
function bI(e, t, r, n) {
    return arguments.length === 1 ? mv(e) : new ot(e, t, r, n == null ? 1 : n);
}
function ot(e, t, r, n) {
    (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
}
Ku(
    ot,
    bI,
    gv(In, {
        brighter: function (e) {
            return (
                (e = e == null ? ji : Math.pow(ji, e)),
                new ot(this.h, this.s, this.l * e, this.opacity)
            );
        },
        darker: function (e) {
            return (
                (e = e == null ? bn : Math.pow(bn, e)),
                new ot(this.h, this.s, this.l * e, this.opacity)
            );
        },
        rgb: function () {
            var e = (this.h % 360) + (this.h < 0) * 360,
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * t,
                i = 2 * r - n;
            return new ze(
                To(e >= 240 ? e - 240 : e + 120, i, n),
                To(e, i, n),
                To(e < 120 ? e + 240 : e - 120, i, n),
                this.opacity
            );
        },
        displayable: function () {
            return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
            );
        },
        formatHsl: function () {
            var e = this.opacity;
            return (
                (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
                (e === 1 ? "hsl(" : "hsla(") +
                    (this.h || 0) +
                    ", " +
                    (this.s || 0) * 100 +
                    "%, " +
                    (this.l || 0) * 100 +
                    "%" +
                    (e === 1 ? ")" : ", " + e + ")")
            );
        },
    })
);
function To(e, t, r) {
    return (
        (e < 60
            ? t + ((r - t) * e) / 60
            : e < 180
            ? r
            : e < 240
            ? t + ((r - t) * (240 - e)) / 60
            : t) * 255
    );
}
const Ju = (e) => () => e;
function xI(e, t) {
    return function (r) {
        return e + r * t;
    };
}
function wI(e, t, r) {
    return (
        (e = Math.pow(e, r)),
        (t = Math.pow(t, r) - e),
        (r = 1 / r),
        function (n) {
            return Math.pow(e + n * t, r);
        }
    );
}
function _I(e) {
    return (e = +e) == 1
        ? bv
        : function (t, r) {
              return r - t ? wI(t, r, e) : Ju(isNaN(t) ? r : t);
          };
}
function bv(e, t) {
    var r = t - e;
    return r ? xI(e, r) : Ju(isNaN(e) ? t : e);
}
const Lf = (function e(t) {
    var r = _I(t);
    function n(i, a) {
        var o = r((i = Hs(i)).r, (a = Hs(a)).r),
            s = r(i.g, a.g),
            u = r(i.b, a.b),
            l = bv(i.opacity, a.opacity);
        return function (c) {
            return (
                (i.r = o(c)),
                (i.g = s(c)),
                (i.b = u(c)),
                (i.opacity = l(c)),
                i + ""
            );
        };
    }
    return (n.gamma = e), n;
})(1);
function SI(e, t) {
    t || (t = []);
    var r = e ? Math.min(t.length, e.length) : 0,
        n = t.slice(),
        i;
    return function (a) {
        for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
        return n;
    };
}
function OI(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function AI(e, t) {
    var r = t ? t.length : 0,
        n = e ? Math.min(r, e.length) : 0,
        i = new Array(n),
        a = new Array(r),
        o;
    for (o = 0; o < n; ++o) i[o] = Vr(e[o], t[o]);
    for (; o < r; ++o) a[o] = t[o];
    return function (s) {
        for (o = 0; o < n; ++o) a[o] = i[o](s);
        return a;
    };
}
function $I(e, t) {
    var r = new Date();
    return (
        (e = +e),
        (t = +t),
        function (n) {
            return r.setTime(e * (1 - n) + t * n), r;
        }
    );
}
function Fi(e, t) {
    return (
        (e = +e),
        (t = +t),
        function (r) {
            return e * (1 - r) + t * r;
        }
    );
}
function TI(e, t) {
    var r = {},
        n = {},
        i;
    (e === null || typeof e != "object") && (e = {}),
        (t === null || typeof t != "object") && (t = {});
    for (i in t) i in e ? (r[i] = Vr(e[i], t[i])) : (n[i] = t[i]);
    return function (a) {
        for (i in r) n[i] = r[i](a);
        return n;
    };
}
var Ws = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Po = new RegExp(Ws.source, "g");
function PI(e) {
    return function () {
        return e;
    };
}
function EI(e) {
    return function (t) {
        return e(t) + "";
    };
}
function MI(e, t) {
    var r = (Ws.lastIndex = Po.lastIndex = 0),
        n,
        i,
        a,
        o = -1,
        s = [],
        u = [];
    for (e = e + "", t = t + ""; (n = Ws.exec(e)) && (i = Po.exec(t)); )
        (a = i.index) > r &&
            ((a = t.slice(r, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
            (n = n[0]) === (i = i[0])
                ? s[o]
                    ? (s[o] += i)
                    : (s[++o] = i)
                : ((s[++o] = null), u.push({ i: o, x: Fi(n, i) })),
            (r = Po.lastIndex);
    return (
        r < t.length && ((a = t.slice(r)), s[o] ? (s[o] += a) : (s[++o] = a)),
        s.length < 2
            ? u[0]
                ? EI(u[0].x)
                : PI(t)
            : ((t = u.length),
              function (l) {
                  for (var c = 0, f; c < t; ++c) s[(f = u[c]).i] = f.x(l);
                  return s.join("");
              })
    );
}
function Vr(e, t) {
    var r = typeof t,
        n;
    return t == null || r === "boolean"
        ? Ju(t)
        : (r === "number"
              ? Fi
              : r === "string"
              ? (n = wn(t))
                  ? ((t = n), Lf)
                  : MI
              : t instanceof wn
              ? Lf
              : t instanceof Date
              ? $I
              : OI(t)
              ? SI
              : Array.isArray(t)
              ? AI
              : (typeof t.valueOf != "function" &&
                    typeof t.toString != "function") ||
                isNaN(t)
              ? TI
              : Fi)(e, t);
}
function Zu(e, t) {
    return (
        (e = +e),
        (t = +t),
        function (r) {
            return Math.round(e * (1 - r) + t * r);
        }
    );
}
function kI(e, t) {
    t === void 0 && ((t = e), (e = Vr));
    for (
        var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n);
        r < n;

    )
        a[r] = e(i, (i = t[++r]));
    return function (o) {
        var s = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
        return a[s](o - s);
    };
}
function CI(e) {
    return function () {
        return e;
    };
}
function Bi(e) {
    return +e;
}
var jf = [0, 1];
function Fe(e) {
    return e;
}
function zs(e, t) {
    return (t -= e = +e)
        ? function (r) {
              return (r - e) / t;
          }
        : CI(isNaN(t) ? NaN : 0.5);
}
function II(e, t) {
    var r;
    return (
        e > t && ((r = e), (e = t), (t = r)),
        function (n) {
            return Math.max(e, Math.min(t, n));
        }
    );
}
function NI(e, t, r) {
    var n = e[0],
        i = e[1],
        a = t[0],
        o = t[1];
    return (
        i < n
            ? ((n = zs(i, n)), (a = r(o, a)))
            : ((n = zs(n, i)), (a = r(a, o))),
        function (s) {
            return a(n(s));
        }
    );
}
function RI(e, t, r) {
    var n = Math.min(e.length, t.length) - 1,
        i = new Array(n),
        a = new Array(n),
        o = -1;
    for (
        e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
        ++o < n;

    )
        (i[o] = zs(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1]));
    return function (s) {
        var u = Cn(e, s, 1, n) - 1;
        return a[u](i[u](s));
    };
}
function Nn(e, t) {
    return t
        .domain(e.domain())
        .range(e.range())
        .interpolate(e.interpolate())
        .clamp(e.clamp())
        .unknown(e.unknown());
}
function Wa() {
    var e = jf,
        t = jf,
        r = Vr,
        n,
        i,
        a,
        o = Fe,
        s,
        u,
        l;
    function c() {
        var d = Math.min(e.length, t.length);
        return (
            o !== Fe && (o = II(e[0], e[d - 1])),
            (s = d > 2 ? RI : NI),
            (u = l = null),
            f
        );
    }
    function f(d) {
        return d == null || isNaN((d = +d))
            ? a
            : (u || (u = s(e.map(n), t, r)))(n(o(d)));
    }
    return (
        (f.invert = function (d) {
            return o(i((l || (l = s(t, e.map(n), Fi)))(d)));
        }),
        (f.domain = function (d) {
            return arguments.length
                ? ((e = Array.from(d, Bi)), c())
                : e.slice();
        }),
        (f.range = function (d) {
            return arguments.length ? ((t = Array.from(d)), c()) : t.slice();
        }),
        (f.rangeRound = function (d) {
            return (t = Array.from(d)), (r = Zu), c();
        }),
        (f.clamp = function (d) {
            return arguments.length ? ((o = d ? !0 : Fe), c()) : o !== Fe;
        }),
        (f.interpolate = function (d) {
            return arguments.length ? ((r = d), c()) : r;
        }),
        (f.unknown = function (d) {
            return arguments.length ? ((a = d), f) : a;
        }),
        function (d, y) {
            return (n = d), (i = y), c();
        }
    );
}
function Qu() {
    return Wa()(Fe, Fe);
}
function DI(e) {
    return Math.abs((e = Math.round(e))) >= 1e21
        ? e.toLocaleString("en").replace(/,/g, "")
        : e.toString(10);
}
function Ui(e, t) {
    if (
        (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(
            "e"
        )) < 0
    )
        return null;
    var r,
        n = e.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function kr(e) {
    return (e = Ui(Math.abs(e))), e ? e[1] : NaN;
}
function LI(e, t) {
    return function (r, n) {
        for (
            var i = r.length, a = [], o = 0, s = e[0], u = 0;
            i > 0 &&
            s > 0 &&
            (u + s + 1 > n && (s = Math.max(1, n - u)),
            a.push(r.substring((i -= s), i + s)),
            !((u += s + 1) > n));

        )
            s = e[(o = (o + 1) % e.length)];
        return a.reverse().join(t);
    };
}
function jI(e) {
    return function (t) {
        return t.replace(/[0-9]/g, function (r) {
            return e[+r];
        });
    };
}
var FI =
    /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Hi(e) {
    if (!(t = FI.exec(e))) throw new Error("invalid format: " + e);
    var t;
    return new el({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10],
    });
}
Hi.prototype = el.prototype;
function el(e) {
    (this.fill = e.fill === void 0 ? " " : e.fill + ""),
        (this.align = e.align === void 0 ? ">" : e.align + ""),
        (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
        (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
        (this.zero = !!e.zero),
        (this.width = e.width === void 0 ? void 0 : +e.width),
        (this.comma = !!e.comma),
        (this.precision = e.precision === void 0 ? void 0 : +e.precision),
        (this.trim = !!e.trim),
        (this.type = e.type === void 0 ? "" : e.type + "");
}
el.prototype.toString = function () {
    return (
        this.fill +
        this.align +
        this.sign +
        this.symbol +
        (this.zero ? "0" : "") +
        (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
        (this.comma ? "," : "") +
        (this.precision === void 0
            ? ""
            : "." + Math.max(0, this.precision | 0)) +
        (this.trim ? "~" : "") +
        this.type
    );
};
function BI(e) {
    e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
        switch (e[r]) {
            case ".":
                n = i = r;
                break;
            case "0":
                n === 0 && (n = r), (i = r);
                break;
            default:
                if (!+e[r]) break e;
                n > 0 && (n = 0);
                break;
        }
    return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var xv;
function UI(e, t) {
    var r = Ui(e, t);
    if (!r) return e + "";
    var n = r[0],
        i = r[1],
        a = i - (xv = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
        o = n.length;
    return a === o
        ? n
        : a > o
        ? n + new Array(a - o + 1).join("0")
        : a > 0
        ? n.slice(0, a) + "." + n.slice(a)
        : "0." + new Array(1 - a).join("0") + Ui(e, Math.max(0, t + a - 1))[0];
}
function Ff(e, t) {
    var r = Ui(e, t);
    if (!r) return e + "";
    var n = r[0],
        i = r[1];
    return i < 0
        ? "0." + new Array(-i).join("0") + n
        : n.length > i + 1
        ? n.slice(0, i + 1) + "." + n.slice(i + 1)
        : n + new Array(i - n.length + 2).join("0");
}
const Bf = {
    "%": (e, t) => (e * 100).toFixed(t),
    b: (e) => Math.round(e).toString(2),
    c: (e) => e + "",
    d: DI,
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: (e) => Math.round(e).toString(8),
    p: (e, t) => Ff(e * 100, t),
    r: Ff,
    s: UI,
    X: (e) => Math.round(e).toString(16).toUpperCase(),
    x: (e) => Math.round(e).toString(16),
};
function Uf(e) {
    return e;
}
var Hf = Array.prototype.map,
    Wf = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "\xB5",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y",
    ];
function HI(e) {
    var t =
            e.grouping === void 0 || e.thousands === void 0
                ? Uf
                : LI(Hf.call(e.grouping, Number), e.thousands + ""),
        r = e.currency === void 0 ? "" : e.currency[0] + "",
        n = e.currency === void 0 ? "" : e.currency[1] + "",
        i = e.decimal === void 0 ? "." : e.decimal + "",
        a = e.numerals === void 0 ? Uf : jI(Hf.call(e.numerals, String)),
        o = e.percent === void 0 ? "%" : e.percent + "",
        s = e.minus === void 0 ? "\u2212" : e.minus + "",
        u = e.nan === void 0 ? "NaN" : e.nan + "";
    function l(f) {
        f = Hi(f);
        var d = f.fill,
            y = f.align,
            p = f.sign,
            h = f.symbol,
            v = f.zero,
            g = f.width,
            _ = f.comma,
            b = f.precision,
            m = f.trim,
            x = f.type;
        x === "n"
            ? ((_ = !0), (x = "g"))
            : Bf[x] || (b === void 0 && (b = 12), (m = !0), (x = "g")),
            (v || (d === "0" && y === "=")) && ((v = !0), (d = "0"), (y = "="));
        var w =
                h === "$"
                    ? r
                    : h === "#" && /[boxX]/.test(x)
                    ? "0" + x.toLowerCase()
                    : "",
            S = h === "$" ? n : /[%p]/.test(x) ? o : "",
            A = Bf[x],
            $ = /[defgprs%]/.test(x);
        b =
            b === void 0
                ? 6
                : /[gprs]/.test(x)
                ? Math.max(1, Math.min(21, b))
                : Math.max(0, Math.min(20, b));
        function E(P) {
            var M = w,
                k = S,
                I,
                R,
                C;
            if (x === "c") (k = A(P) + k), (P = "");
            else {
                P = +P;
                var B = P < 0 || 1 / P < 0;
                if (
                    ((P = isNaN(P) ? u : A(Math.abs(P), b)),
                    m && (P = BI(P)),
                    B && +P == 0 && p !== "+" && (B = !1),
                    (M =
                        (B
                            ? p === "("
                                ? p
                                : s
                            : p === "-" || p === "("
                            ? ""
                            : p) + M),
                    (k =
                        (x === "s" ? Wf[8 + xv / 3] : "") +
                        k +
                        (B && p === "(" ? ")" : "")),
                    $)
                ) {
                    for (I = -1, R = P.length; ++I < R; )
                        if (((C = P.charCodeAt(I)), 48 > C || C > 57)) {
                            (k =
                                (C === 46 ? i + P.slice(I + 1) : P.slice(I)) +
                                k),
                                (P = P.slice(0, I));
                            break;
                        }
                }
            }
            _ && !v && (P = t(P, 1 / 0));
            var j = M.length + P.length + k.length,
                H = j < g ? new Array(g - j + 1).join(d) : "";
            switch (
                (_ &&
                    v &&
                    ((P = t(H + P, H.length ? g - k.length : 1 / 0)), (H = "")),
                y)
            ) {
                case "<":
                    P = M + P + k + H;
                    break;
                case "=":
                    P = M + H + P + k;
                    break;
                case "^":
                    P =
                        H.slice(0, (j = H.length >> 1)) +
                        M +
                        P +
                        k +
                        H.slice(j);
                    break;
                default:
                    P = H + M + P + k;
                    break;
            }
            return a(P);
        }
        return (
            (E.toString = function () {
                return f + "";
            }),
            E
        );
    }
    function c(f, d) {
        var y = l(((f = Hi(f)), (f.type = "f"), f)),
            p = Math.max(-8, Math.min(8, Math.floor(kr(d) / 3))) * 3,
            h = Math.pow(10, -p),
            v = Wf[8 + p / 3];
        return function (g) {
            return y(h * g) + v;
        };
    }
    return { format: l, formatPrefix: c };
}
var Vn, tl, wv;
WI({ thousands: ",", grouping: [3], currency: ["$", ""] });
function WI(e) {
    return (Vn = HI(e)), (tl = Vn.format), (wv = Vn.formatPrefix), Vn;
}
function zI(e) {
    return Math.max(0, -kr(Math.abs(e)));
}
function GI(e, t) {
    return Math.max(
        0,
        Math.max(-8, Math.min(8, Math.floor(kr(t) / 3))) * 3 - kr(Math.abs(e))
    );
}
function qI(e, t) {
    return (
        (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, kr(t) - kr(e)) + 1
    );
}
function _v(e, t, r, n) {
    var i = Bs(e, t, r),
        a;
    switch (((n = Hi(n == null ? ",f" : n)), n.type)) {
        case "s": {
            var o = Math.max(Math.abs(e), Math.abs(t));
            return (
                n.precision == null &&
                    !isNaN((a = GI(i, o))) &&
                    (n.precision = a),
                wv(n, o)
            );
        }
        case "":
        case "e":
        case "g":
        case "p":
        case "r": {
            n.precision == null &&
                !isNaN((a = qI(i, Math.max(Math.abs(e), Math.abs(t))))) &&
                (n.precision = a - (n.type === "e"));
            break;
        }
        case "f":
        case "%": {
            n.precision == null &&
                !isNaN((a = zI(i))) &&
                (n.precision = a - (n.type === "%") * 2);
            break;
        }
    }
    return tl(n);
}
function zt(e) {
    var t = e.domain;
    return (
        (e.ticks = function (r) {
            var n = t();
            return Fs(n[0], n[n.length - 1], r == null ? 10 : r);
        }),
        (e.tickFormat = function (r, n) {
            var i = t();
            return _v(i[0], i[i.length - 1], r == null ? 10 : r, n);
        }),
        (e.nice = function (r) {
            r == null && (r = 10);
            var n = t(),
                i = 0,
                a = n.length - 1,
                o = n[i],
                s = n[a],
                u,
                l,
                c = 10;
            for (
                s < o && ((l = o), (o = s), (s = l), (l = i), (i = a), (a = l));
                c-- > 0;

            ) {
                if (((l = pv(o, s, r)), l === u))
                    return (n[i] = o), (n[a] = s), t(n);
                if (l > 0)
                    (o = Math.floor(o / l) * l), (s = Math.ceil(s / l) * l);
                else if (l < 0)
                    (o = Math.ceil(o * l) / l), (s = Math.floor(s * l) / l);
                else break;
                u = l;
            }
            return e;
        }),
        e
    );
}
function Wi() {
    var e = Qu();
    return (
        (e.copy = function () {
            return Nn(e, Wi());
        }),
        et.apply(e, arguments),
        zt(e)
    );
}
function Sv(e) {
    var t;
    function r(n) {
        return n == null || isNaN((n = +n)) ? t : n;
    }
    return (
        (r.invert = r),
        (r.domain = r.range =
            function (n) {
                return arguments.length
                    ? ((e = Array.from(n, Bi)), r)
                    : e.slice();
            }),
        (r.unknown = function (n) {
            return arguments.length ? ((t = n), r) : t;
        }),
        (r.copy = function () {
            return Sv(e).unknown(t);
        }),
        (e = arguments.length ? Array.from(e, Bi) : [0, 1]),
        zt(r)
    );
}
function Ov(e, t) {
    e = e.slice();
    var r = 0,
        n = e.length - 1,
        i = e[r],
        a = e[n],
        o;
    return (
        a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
        (e[r] = t.floor(i)),
        (e[n] = t.ceil(a)),
        e
    );
}
function zf(e) {
    return Math.log(e);
}
function Gf(e) {
    return Math.exp(e);
}
function VI(e) {
    return -Math.log(-e);
}
function YI(e) {
    return -Math.exp(-e);
}
function XI(e) {
    return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function KI(e) {
    return e === 10
        ? XI
        : e === Math.E
        ? Math.exp
        : function (t) {
              return Math.pow(e, t);
          };
}
function JI(e) {
    return e === Math.E
        ? Math.log
        : (e === 10 && Math.log10) ||
              (e === 2 && Math.log2) ||
              ((e = Math.log(e)),
              function (t) {
                  return Math.log(t) / e;
              });
}
function qf(e) {
    return function (t) {
        return -e(-t);
    };
}
function rl(e) {
    var t = e(zf, Gf),
        r = t.domain,
        n = 10,
        i,
        a;
    function o() {
        return (
            (i = JI(n)),
            (a = KI(n)),
            r()[0] < 0 ? ((i = qf(i)), (a = qf(a)), e(VI, YI)) : e(zf, Gf),
            t
        );
    }
    return (
        (t.base = function (s) {
            return arguments.length ? ((n = +s), o()) : n;
        }),
        (t.domain = function (s) {
            return arguments.length ? (r(s), o()) : r();
        }),
        (t.ticks = function (s) {
            var u = r(),
                l = u[0],
                c = u[u.length - 1],
                f;
            (f = c < l) && ((d = l), (l = c), (c = d));
            var d = i(l),
                y = i(c),
                p,
                h,
                v,
                g = s == null ? 10 : +s,
                _ = [];
            if (!(n % 1) && y - d < g) {
                if (((d = Math.floor(d)), (y = Math.ceil(y)), l > 0)) {
                    for (; d <= y; ++d)
                        for (h = 1, p = a(d); h < n; ++h)
                            if (((v = p * h), !(v < l))) {
                                if (v > c) break;
                                _.push(v);
                            }
                } else
                    for (; d <= y; ++d)
                        for (h = n - 1, p = a(d); h >= 1; --h)
                            if (((v = p * h), !(v < l))) {
                                if (v > c) break;
                                _.push(v);
                            }
                _.length * 2 < g && (_ = Fs(l, c, g));
            } else _ = Fs(d, y, Math.min(y - d, g)).map(a);
            return f ? _.reverse() : _;
        }),
        (t.tickFormat = function (s, u) {
            if (
                (u == null && (u = n === 10 ? ".0e" : ","),
                typeof u != "function" && (u = tl(u)),
                s === 1 / 0)
            )
                return u;
            s == null && (s = 10);
            var l = Math.max(1, (n * s) / t.ticks().length);
            return function (c) {
                var f = c / a(Math.round(i(c)));
                return f * n < n - 0.5 && (f *= n), f <= l ? u(c) : "";
            };
        }),
        (t.nice = function () {
            return r(
                Ov(r(), {
                    floor: function (s) {
                        return a(Math.floor(i(s)));
                    },
                    ceil: function (s) {
                        return a(Math.ceil(i(s)));
                    },
                })
            );
        }),
        t
    );
}
function Av() {
    var e = rl(Wa()).domain([1, 10]);
    return (
        (e.copy = function () {
            return Nn(e, Av()).base(e.base());
        }),
        et.apply(e, arguments),
        e
    );
}
function Vf(e) {
    return function (t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e));
    };
}
function Yf(e) {
    return function (t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
    };
}
function nl(e) {
    var t = 1,
        r = e(Vf(t), Yf(t));
    return (
        (r.constant = function (n) {
            return arguments.length ? e(Vf((t = +n)), Yf(t)) : t;
        }),
        zt(r)
    );
}
function $v() {
    var e = nl(Wa());
    return (
        (e.copy = function () {
            return Nn(e, $v()).constant(e.constant());
        }),
        et.apply(e, arguments)
    );
}
function Xf(e) {
    return function (t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
    };
}
function ZI(e) {
    return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function QI(e) {
    return e < 0 ? -e * e : e * e;
}
function il(e) {
    var t = e(Fe, Fe),
        r = 1;
    function n() {
        return r === 1
            ? e(Fe, Fe)
            : r === 0.5
            ? e(ZI, QI)
            : e(Xf(r), Xf(1 / r));
    }
    return (
        (t.exponent = function (i) {
            return arguments.length ? ((r = +i), n()) : r;
        }),
        zt(t)
    );
}
function al() {
    var e = il(Wa());
    return (
        (e.copy = function () {
            return Nn(e, al()).exponent(e.exponent());
        }),
        et.apply(e, arguments),
        e
    );
}
function eN() {
    return al.apply(null, arguments).exponent(0.5);
}
function Kf(e) {
    return Math.sign(e) * e * e;
}
function tN(e) {
    return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Tv() {
    var e = Qu(),
        t = [0, 1],
        r = !1,
        n;
    function i(a) {
        var o = tN(e(a));
        return isNaN(o) ? n : r ? Math.round(o) : o;
    }
    return (
        (i.invert = function (a) {
            return e.invert(Kf(a));
        }),
        (i.domain = function (a) {
            return arguments.length ? (e.domain(a), i) : e.domain();
        }),
        (i.range = function (a) {
            return arguments.length
                ? (e.range((t = Array.from(a, Bi)).map(Kf)), i)
                : t.slice();
        }),
        (i.rangeRound = function (a) {
            return i.range(a).round(!0);
        }),
        (i.round = function (a) {
            return arguments.length ? ((r = !!a), i) : r;
        }),
        (i.clamp = function (a) {
            return arguments.length ? (e.clamp(a), i) : e.clamp();
        }),
        (i.unknown = function (a) {
            return arguments.length ? ((n = a), i) : n;
        }),
        (i.copy = function () {
            return Tv(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
        }),
        et.apply(i, arguments),
        zt(i)
    );
}
function Pv() {
    var e = [],
        t = [],
        r = [],
        n;
    function i() {
        var o = 0,
            s = Math.max(1, t.length);
        for (r = new Array(s - 1); ++o < s; ) r[o - 1] = uI(e, o / s);
        return a;
    }
    function a(o) {
        return o == null || isNaN((o = +o)) ? n : t[Cn(r, o)];
    }
    return (
        (a.invertExtent = function (o) {
            var s = t.indexOf(o);
            return s < 0
                ? [NaN, NaN]
                : [
                      s > 0 ? r[s - 1] : e[0],
                      s < r.length ? r[s] : e[e.length - 1],
                  ];
        }),
        (a.domain = function (o) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let s of o) s != null && !isNaN((s = +s)) && e.push(s);
            return e.sort(kn), i();
        }),
        (a.range = function (o) {
            return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
        }),
        (a.unknown = function (o) {
            return arguments.length ? ((n = o), a) : n;
        }),
        (a.quantiles = function () {
            return r.slice();
        }),
        (a.copy = function () {
            return Pv().domain(e).range(t).unknown(n);
        }),
        et.apply(a, arguments)
    );
}
function Ev() {
    var e = 0,
        t = 1,
        r = 1,
        n = [0.5],
        i = [0, 1],
        a;
    function o(u) {
        return u != null && u <= u ? i[Cn(n, u, 0, r)] : a;
    }
    function s() {
        var u = -1;
        for (n = new Array(r); ++u < r; )
            n[u] = ((u + 1) * t - (u - r) * e) / (r + 1);
        return o;
    }
    return (
        (o.domain = function (u) {
            return arguments.length
                ? (([e, t] = u), (e = +e), (t = +t), s())
                : [e, t];
        }),
        (o.range = function (u) {
            return arguments.length
                ? ((r = (i = Array.from(u)).length - 1), s())
                : i.slice();
        }),
        (o.invertExtent = function (u) {
            var l = i.indexOf(u);
            return l < 0
                ? [NaN, NaN]
                : l < 1
                ? [e, n[0]]
                : l >= r
                ? [n[r - 1], t]
                : [n[l - 1], n[l]];
        }),
        (o.unknown = function (u) {
            return arguments.length && (a = u), o;
        }),
        (o.thresholds = function () {
            return n.slice();
        }),
        (o.copy = function () {
            return Ev().domain([e, t]).range(i).unknown(a);
        }),
        et.apply(zt(o), arguments)
    );
}
function Mv() {
    var e = [0.5],
        t = [0, 1],
        r,
        n = 1;
    function i(a) {
        return a != null && a <= a ? t[Cn(e, a, 0, n)] : r;
    }
    return (
        (i.domain = function (a) {
            return arguments.length
                ? ((e = Array.from(a)),
                  (n = Math.min(e.length, t.length - 1)),
                  i)
                : e.slice();
        }),
        (i.range = function (a) {
            return arguments.length
                ? ((t = Array.from(a)),
                  (n = Math.min(e.length, t.length - 1)),
                  i)
                : t.slice();
        }),
        (i.invertExtent = function (a) {
            var o = t.indexOf(a);
            return [e[o - 1], e[o]];
        }),
        (i.unknown = function (a) {
            return arguments.length ? ((r = a), i) : r;
        }),
        (i.copy = function () {
            return Mv().domain(e).range(t).unknown(r);
        }),
        et.apply(i, arguments)
    );
}
var Eo = new Date(),
    Mo = new Date();
function Pe(e, t, r, n) {
    function i(a) {
        return e((a = arguments.length === 0 ? new Date() : new Date(+a))), a;
    }
    return (
        (i.floor = function (a) {
            return e((a = new Date(+a))), a;
        }),
        (i.ceil = function (a) {
            return e((a = new Date(a - 1))), t(a, 1), e(a), a;
        }),
        (i.round = function (a) {
            var o = i(a),
                s = i.ceil(a);
            return a - o < s - a ? o : s;
        }),
        (i.offset = function (a, o) {
            return t((a = new Date(+a)), o == null ? 1 : Math.floor(o)), a;
        }),
        (i.range = function (a, o, s) {
            var u = [],
                l;
            if (
                ((a = i.ceil(a)),
                (s = s == null ? 1 : Math.floor(s)),
                !(a < o) || !(s > 0))
            )
                return u;
            do u.push((l = new Date(+a))), t(a, s), e(a);
            while (l < a && a < o);
            return u;
        }),
        (i.filter = function (a) {
            return Pe(
                function (o) {
                    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
                },
                function (o, s) {
                    if (o >= o)
                        if (s < 0) for (; ++s <= 0; ) for (; t(o, -1), !a(o); );
                        else for (; --s >= 0; ) for (; t(o, 1), !a(o); );
                }
            );
        }),
        r &&
            ((i.count = function (a, o) {
                return (
                    Eo.setTime(+a),
                    Mo.setTime(+o),
                    e(Eo),
                    e(Mo),
                    Math.floor(r(Eo, Mo))
                );
            }),
            (i.every = function (a) {
                return (
                    (a = Math.floor(a)),
                    !isFinite(a) || !(a > 0)
                        ? null
                        : a > 1
                        ? i.filter(
                              n
                                  ? function (o) {
                                        return n(o) % a === 0;
                                    }
                                  : function (o) {
                                        return i.count(0, o) % a === 0;
                                    }
                          )
                        : i
                );
            })),
        i
    );
}
var zi = Pe(
    function () {},
    function (e, t) {
        e.setTime(+e + t);
    },
    function (e, t) {
        return t - e;
    }
);
zi.every = function (e) {
    return (
        (e = Math.floor(e)),
        !isFinite(e) || !(e > 0)
            ? null
            : e > 1
            ? Pe(
                  function (t) {
                      t.setTime(Math.floor(t / e) * e);
                  },
                  function (t, r) {
                      t.setTime(+t + r * e);
                  },
                  function (t, r) {
                      return (r - t) / e;
                  }
              )
            : zi
    );
};
const rN = zi;
zi.range;
const xt = 1e3,
    Je = xt * 60,
    wt = Je * 60,
    ar = wt * 24,
    ol = ar * 7,
    Jf = ar * 30,
    ko = ar * 365;
var kv = Pe(
    function (e) {
        e.setTime(e - e.getMilliseconds());
    },
    function (e, t) {
        e.setTime(+e + t * xt);
    },
    function (e, t) {
        return (t - e) / xt;
    },
    function (e) {
        return e.getUTCSeconds();
    }
);
const mr = kv;
kv.range;
var Cv = Pe(
    function (e) {
        e.setTime(e - e.getMilliseconds() - e.getSeconds() * xt);
    },
    function (e, t) {
        e.setTime(+e + t * Je);
    },
    function (e, t) {
        return (t - e) / Je;
    },
    function (e) {
        return e.getMinutes();
    }
);
const Iv = Cv;
Cv.range;
var Nv = Pe(
    function (e) {
        e.setTime(
            e - e.getMilliseconds() - e.getSeconds() * xt - e.getMinutes() * Je
        );
    },
    function (e, t) {
        e.setTime(+e + t * wt);
    },
    function (e, t) {
        return (t - e) / wt;
    },
    function (e) {
        return e.getHours();
    }
);
const Rv = Nv;
Nv.range;
var Dv = Pe(
    (e) => e.setHours(0, 0, 0, 0),
    (e, t) => e.setDate(e.getDate() + t),
    (e, t) =>
        (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Je) / ar,
    (e) => e.getDate() - 1
);
const za = Dv;
Dv.range;
function cr(e) {
    return Pe(
        function (t) {
            t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
                t.setHours(0, 0, 0, 0);
        },
        function (t, r) {
            t.setDate(t.getDate() + r * 7);
        },
        function (t, r) {
            return (
                (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Je) /
                ol
            );
        }
    );
}
var Ga = cr(0),
    Gi = cr(1),
    nN = cr(2),
    iN = cr(3),
    Cr = cr(4),
    aN = cr(5),
    oN = cr(6);
Ga.range;
Gi.range;
nN.range;
iN.range;
Cr.range;
aN.range;
oN.range;
var Lv = Pe(
    function (e) {
        e.setDate(1), e.setHours(0, 0, 0, 0);
    },
    function (e, t) {
        e.setMonth(e.getMonth() + t);
    },
    function (e, t) {
        return (
            t.getMonth() -
            e.getMonth() +
            (t.getFullYear() - e.getFullYear()) * 12
        );
    },
    function (e) {
        return e.getMonth();
    }
);
const jv = Lv;
Lv.range;
var sl = Pe(
    function (e) {
        e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    },
    function (e, t) {
        e.setFullYear(e.getFullYear() + t);
    },
    function (e, t) {
        return t.getFullYear() - e.getFullYear();
    },
    function (e) {
        return e.getFullYear();
    }
);
sl.every = function (e) {
    return !isFinite((e = Math.floor(e))) || !(e > 0)
        ? null
        : Pe(
              function (t) {
                  t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                      t.setMonth(0, 1),
                      t.setHours(0, 0, 0, 0);
              },
              function (t, r) {
                  t.setFullYear(t.getFullYear() + r * e);
              }
          );
};
const or = sl;
sl.range;
var Fv = Pe(
    function (e) {
        e.setUTCSeconds(0, 0);
    },
    function (e, t) {
        e.setTime(+e + t * Je);
    },
    function (e, t) {
        return (t - e) / Je;
    },
    function (e) {
        return e.getUTCMinutes();
    }
);
const Bv = Fv;
Fv.range;
var Uv = Pe(
    function (e) {
        e.setUTCMinutes(0, 0, 0);
    },
    function (e, t) {
        e.setTime(+e + t * wt);
    },
    function (e, t) {
        return (t - e) / wt;
    },
    function (e) {
        return e.getUTCHours();
    }
);
const Hv = Uv;
Uv.range;
var Wv = Pe(
    function (e) {
        e.setUTCHours(0, 0, 0, 0);
    },
    function (e, t) {
        e.setUTCDate(e.getUTCDate() + t);
    },
    function (e, t) {
        return (t - e) / ar;
    },
    function (e) {
        return e.getUTCDate() - 1;
    }
);
const qa = Wv;
Wv.range;
function fr(e) {
    return Pe(
        function (t) {
            t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
                t.setUTCHours(0, 0, 0, 0);
        },
        function (t, r) {
            t.setUTCDate(t.getUTCDate() + r * 7);
        },
        function (t, r) {
            return (r - t) / ol;
        }
    );
}
var Va = fr(0),
    qi = fr(1),
    sN = fr(2),
    uN = fr(3),
    Ir = fr(4),
    lN = fr(5),
    cN = fr(6);
Va.range;
qi.range;
sN.range;
uN.range;
Ir.range;
lN.range;
cN.range;
var zv = Pe(
    function (e) {
        e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
    },
    function (e, t) {
        e.setUTCMonth(e.getUTCMonth() + t);
    },
    function (e, t) {
        return (
            t.getUTCMonth() -
            e.getUTCMonth() +
            (t.getUTCFullYear() - e.getUTCFullYear()) * 12
        );
    },
    function (e) {
        return e.getUTCMonth();
    }
);
const Gv = zv;
zv.range;
var ul = Pe(
    function (e) {
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    },
    function (e, t) {
        e.setUTCFullYear(e.getUTCFullYear() + t);
    },
    function (e, t) {
        return t.getUTCFullYear() - e.getUTCFullYear();
    },
    function (e) {
        return e.getUTCFullYear();
    }
);
ul.every = function (e) {
    return !isFinite((e = Math.floor(e))) || !(e > 0)
        ? null
        : Pe(
              function (t) {
                  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                      t.setUTCMonth(0, 1),
                      t.setUTCHours(0, 0, 0, 0);
              },
              function (t, r) {
                  t.setUTCFullYear(t.getUTCFullYear() + r * e);
              }
          );
};
const sr = ul;
ul.range;
function qv(e, t, r, n, i, a) {
    const o = [
        [mr, 1, xt],
        [mr, 5, 5 * xt],
        [mr, 15, 15 * xt],
        [mr, 30, 30 * xt],
        [a, 1, Je],
        [a, 5, 5 * Je],
        [a, 15, 15 * Je],
        [a, 30, 30 * Je],
        [i, 1, wt],
        [i, 3, 3 * wt],
        [i, 6, 6 * wt],
        [i, 12, 12 * wt],
        [n, 1, ar],
        [n, 2, 2 * ar],
        [r, 1, ol],
        [t, 1, Jf],
        [t, 3, 3 * Jf],
        [e, 1, ko],
    ];
    function s(l, c, f) {
        const d = c < l;
        d && ([l, c] = [c, l]);
        const y = f && typeof f.range == "function" ? f : u(l, c, f),
            p = y ? y.range(l, +c + 1) : [];
        return d ? p.reverse() : p;
    }
    function u(l, c, f) {
        const d = Math.abs(c - l) / f,
            y = Yu(([, , v]) => v).right(o, d);
        if (y === o.length) return e.every(Bs(l / ko, c / ko, f));
        if (y === 0) return rN.every(Math.max(Bs(l, c, f), 1));
        const [p, h] = o[d / o[y - 1][2] < o[y][2] / d ? y - 1 : y];
        return p.every(h);
    }
    return [s, u];
}
const [fN, hN] = qv(sr, Gv, Va, qa, Hv, Bv),
    [dN, pN] = qv(or, jv, Ga, za, Rv, Iv);
function Co(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        return t.setFullYear(e.y), t;
    }
    return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Io(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return t.setUTCFullYear(e.y), t;
    }
    return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function nn(e, t, r) {
    return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function vN(e) {
    var t = e.dateTime,
        r = e.date,
        n = e.time,
        i = e.periods,
        a = e.days,
        o = e.shortDays,
        s = e.months,
        u = e.shortMonths,
        l = an(i),
        c = on(i),
        f = an(a),
        d = on(a),
        y = an(o),
        p = on(o),
        h = an(s),
        v = on(s),
        g = an(u),
        _ = on(u),
        b = {
            a: B,
            A: j,
            b: H,
            B: G,
            c: null,
            d: nh,
            e: nh,
            f: jN,
            g: YN,
            G: KN,
            H: RN,
            I: DN,
            j: LN,
            L: Vv,
            m: FN,
            M: BN,
            p: Z,
            q: ee,
            Q: oh,
            s: sh,
            S: UN,
            u: HN,
            U: WN,
            V: zN,
            w: GN,
            W: qN,
            x: null,
            X: null,
            y: VN,
            Y: XN,
            Z: JN,
            "%": ah,
        },
        m = {
            a: oe,
            A: ve,
            b: _e,
            B: De,
            c: null,
            d: ih,
            e: ih,
            f: tR,
            g: fR,
            G: dR,
            H: ZN,
            I: QN,
            j: eR,
            L: Xv,
            m: rR,
            M: nR,
            p: Tt,
            q: J,
            Q: oh,
            s: sh,
            S: iR,
            u: aR,
            U: oR,
            V: sR,
            w: uR,
            W: lR,
            x: null,
            X: null,
            y: cR,
            Y: hR,
            Z: pR,
            "%": ah,
        },
        x = {
            a: E,
            A: P,
            b: M,
            B: k,
            c: I,
            d: th,
            e: th,
            f: kN,
            g: eh,
            G: Qf,
            H: rh,
            I: rh,
            j: TN,
            L: MN,
            m: $N,
            M: PN,
            p: $,
            q: AN,
            Q: IN,
            s: NN,
            S: EN,
            u: xN,
            U: wN,
            V: _N,
            w: bN,
            W: SN,
            x: R,
            X: C,
            y: eh,
            Y: Qf,
            Z: ON,
            "%": CN,
        };
    (b.x = w(r, b)),
        (b.X = w(n, b)),
        (b.c = w(t, b)),
        (m.x = w(r, m)),
        (m.X = w(n, m)),
        (m.c = w(t, m));
    function w(F, q) {
        return function (Y) {
            var D = [],
                se = -1,
                Q = 0,
                me = F.length,
                be,
                at,
                qt;
            for (Y instanceof Date || (Y = new Date(+Y)); ++se < me; )
                F.charCodeAt(se) === 37 &&
                    (D.push(F.slice(Q, se)),
                    (at = Zf[(be = F.charAt(++se))]) != null
                        ? (be = F.charAt(++se))
                        : (at = be === "e" ? " " : "0"),
                    (qt = q[be]) && (be = qt(Y, at)),
                    D.push(be),
                    (Q = se + 1));
            return D.push(F.slice(Q, se)), D.join("");
        };
    }
    function S(F, q) {
        return function (Y) {
            var D = nn(1900, void 0, 1),
                se = A(D, F, (Y += ""), 0),
                Q,
                me;
            if (se != Y.length) return null;
            if ("Q" in D) return new Date(D.Q);
            if ("s" in D) return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
            if (
                (q && !("Z" in D) && (D.Z = 0),
                "p" in D && (D.H = (D.H % 12) + D.p * 12),
                D.m === void 0 && (D.m = "q" in D ? D.q : 0),
                "V" in D)
            ) {
                if (D.V < 1 || D.V > 53) return null;
                "w" in D || (D.w = 1),
                    "Z" in D
                        ? ((Q = Io(nn(D.y, 0, 1))),
                          (me = Q.getUTCDay()),
                          (Q = me > 4 || me === 0 ? qi.ceil(Q) : qi(Q)),
                          (Q = qa.offset(Q, (D.V - 1) * 7)),
                          (D.y = Q.getUTCFullYear()),
                          (D.m = Q.getUTCMonth()),
                          (D.d = Q.getUTCDate() + ((D.w + 6) % 7)))
                        : ((Q = Co(nn(D.y, 0, 1))),
                          (me = Q.getDay()),
                          (Q = me > 4 || me === 0 ? Gi.ceil(Q) : Gi(Q)),
                          (Q = za.offset(Q, (D.V - 1) * 7)),
                          (D.y = Q.getFullYear()),
                          (D.m = Q.getMonth()),
                          (D.d = Q.getDate() + ((D.w + 6) % 7)));
            } else
                ("W" in D || "U" in D) &&
                    ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0),
                    (me =
                        "Z" in D
                            ? Io(nn(D.y, 0, 1)).getUTCDay()
                            : Co(nn(D.y, 0, 1)).getDay()),
                    (D.m = 0),
                    (D.d =
                        "W" in D
                            ? ((D.w + 6) % 7) + D.W * 7 - ((me + 5) % 7)
                            : D.w + D.U * 7 - ((me + 6) % 7)));
            return "Z" in D
                ? ((D.H += (D.Z / 100) | 0), (D.M += D.Z % 100), Io(D))
                : Co(D);
        };
    }
    function A(F, q, Y, D) {
        for (var se = 0, Q = q.length, me = Y.length, be, at; se < Q; ) {
            if (D >= me) return -1;
            if (((be = q.charCodeAt(se++)), be === 37)) {
                if (
                    ((be = q.charAt(se++)),
                    (at = x[be in Zf ? q.charAt(se++) : be]),
                    !at || (D = at(F, Y, D)) < 0)
                )
                    return -1;
            } else if (be != Y.charCodeAt(D++)) return -1;
        }
        return D;
    }
    function $(F, q, Y) {
        var D = l.exec(q.slice(Y));
        return D ? ((F.p = c.get(D[0].toLowerCase())), Y + D[0].length) : -1;
    }
    function E(F, q, Y) {
        var D = y.exec(q.slice(Y));
        return D ? ((F.w = p.get(D[0].toLowerCase())), Y + D[0].length) : -1;
    }
    function P(F, q, Y) {
        var D = f.exec(q.slice(Y));
        return D ? ((F.w = d.get(D[0].toLowerCase())), Y + D[0].length) : -1;
    }
    function M(F, q, Y) {
        var D = g.exec(q.slice(Y));
        return D ? ((F.m = _.get(D[0].toLowerCase())), Y + D[0].length) : -1;
    }
    function k(F, q, Y) {
        var D = h.exec(q.slice(Y));
        return D ? ((F.m = v.get(D[0].toLowerCase())), Y + D[0].length) : -1;
    }
    function I(F, q, Y) {
        return A(F, t, q, Y);
    }
    function R(F, q, Y) {
        return A(F, r, q, Y);
    }
    function C(F, q, Y) {
        return A(F, n, q, Y);
    }
    function B(F) {
        return o[F.getDay()];
    }
    function j(F) {
        return a[F.getDay()];
    }
    function H(F) {
        return u[F.getMonth()];
    }
    function G(F) {
        return s[F.getMonth()];
    }
    function Z(F) {
        return i[+(F.getHours() >= 12)];
    }
    function ee(F) {
        return 1 + ~~(F.getMonth() / 3);
    }
    function oe(F) {
        return o[F.getUTCDay()];
    }
    function ve(F) {
        return a[F.getUTCDay()];
    }
    function _e(F) {
        return u[F.getUTCMonth()];
    }
    function De(F) {
        return s[F.getUTCMonth()];
    }
    function Tt(F) {
        return i[+(F.getUTCHours() >= 12)];
    }
    function J(F) {
        return 1 + ~~(F.getUTCMonth() / 3);
    }
    return {
        format: function (F) {
            var q = w((F += ""), b);
            return (
                (q.toString = function () {
                    return F;
                }),
                q
            );
        },
        parse: function (F) {
            var q = S((F += ""), !1);
            return (
                (q.toString = function () {
                    return F;
                }),
                q
            );
        },
        utcFormat: function (F) {
            var q = w((F += ""), m);
            return (
                (q.toString = function () {
                    return F;
                }),
                q
            );
        },
        utcParse: function (F) {
            var q = S((F += ""), !0);
            return (
                (q.toString = function () {
                    return F;
                }),
                q
            );
        },
    };
}
var Zf = { "-": "", _: " ", 0: "0" },
    Ee = /^\s*\d+/,
    yN = /^%/,
    gN = /[\\^$*+?|[\]().{}]/g;
function re(e, t, r) {
    var n = e < 0 ? "-" : "",
        i = (n ? -e : e) + "",
        a = i.length;
    return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function mN(e) {
    return e.replace(gN, "\\$&");
}
function an(e) {
    return new RegExp("^(?:" + e.map(mN).join("|") + ")", "i");
}
function on(e) {
    return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function bN(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 1));
    return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function xN(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 1));
    return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function wN(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function _N(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function SN(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function Qf(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 4));
    return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function eh(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n
        ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
        : -1;
}
function ON(e, t, r) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
    return n
        ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
        : -1;
}
function AN(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 1));
    return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function $N(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function th(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function TN(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 3));
    return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function rh(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function PN(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function EN(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function MN(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 3));
    return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function kN(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 6));
    return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function CN(e, t, r) {
    var n = yN.exec(t.slice(r, r + 1));
    return n ? r + n[0].length : -1;
}
function IN(e, t, r) {
    var n = Ee.exec(t.slice(r));
    return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function NN(e, t, r) {
    var n = Ee.exec(t.slice(r));
    return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function nh(e, t) {
    return re(e.getDate(), t, 2);
}
function RN(e, t) {
    return re(e.getHours(), t, 2);
}
function DN(e, t) {
    return re(e.getHours() % 12 || 12, t, 2);
}
function LN(e, t) {
    return re(1 + za.count(or(e), e), t, 3);
}
function Vv(e, t) {
    return re(e.getMilliseconds(), t, 3);
}
function jN(e, t) {
    return Vv(e, t) + "000";
}
function FN(e, t) {
    return re(e.getMonth() + 1, t, 2);
}
function BN(e, t) {
    return re(e.getMinutes(), t, 2);
}
function UN(e, t) {
    return re(e.getSeconds(), t, 2);
}
function HN(e) {
    var t = e.getDay();
    return t === 0 ? 7 : t;
}
function WN(e, t) {
    return re(Ga.count(or(e) - 1, e), t, 2);
}
function Yv(e) {
    var t = e.getDay();
    return t >= 4 || t === 0 ? Cr(e) : Cr.ceil(e);
}
function zN(e, t) {
    return (e = Yv(e)), re(Cr.count(or(e), e) + (or(e).getDay() === 4), t, 2);
}
function GN(e) {
    return e.getDay();
}
function qN(e, t) {
    return re(Gi.count(or(e) - 1, e), t, 2);
}
function VN(e, t) {
    return re(e.getFullYear() % 100, t, 2);
}
function YN(e, t) {
    return (e = Yv(e)), re(e.getFullYear() % 100, t, 2);
}
function XN(e, t) {
    return re(e.getFullYear() % 1e4, t, 4);
}
function KN(e, t) {
    var r = e.getDay();
    return (
        (e = r >= 4 || r === 0 ? Cr(e) : Cr.ceil(e)),
        re(e.getFullYear() % 1e4, t, 4)
    );
}
function JN(e) {
    var t = e.getTimezoneOffset();
    return (
        (t > 0 ? "-" : ((t *= -1), "+")) +
        re((t / 60) | 0, "0", 2) +
        re(t % 60, "0", 2)
    );
}
function ih(e, t) {
    return re(e.getUTCDate(), t, 2);
}
function ZN(e, t) {
    return re(e.getUTCHours(), t, 2);
}
function QN(e, t) {
    return re(e.getUTCHours() % 12 || 12, t, 2);
}
function eR(e, t) {
    return re(1 + qa.count(sr(e), e), t, 3);
}
function Xv(e, t) {
    return re(e.getUTCMilliseconds(), t, 3);
}
function tR(e, t) {
    return Xv(e, t) + "000";
}
function rR(e, t) {
    return re(e.getUTCMonth() + 1, t, 2);
}
function nR(e, t) {
    return re(e.getUTCMinutes(), t, 2);
}
function iR(e, t) {
    return re(e.getUTCSeconds(), t, 2);
}
function aR(e) {
    var t = e.getUTCDay();
    return t === 0 ? 7 : t;
}
function oR(e, t) {
    return re(Va.count(sr(e) - 1, e), t, 2);
}
function Kv(e) {
    var t = e.getUTCDay();
    return t >= 4 || t === 0 ? Ir(e) : Ir.ceil(e);
}
function sR(e, t) {
    return (
        (e = Kv(e)), re(Ir.count(sr(e), e) + (sr(e).getUTCDay() === 4), t, 2)
    );
}
function uR(e) {
    return e.getUTCDay();
}
function lR(e, t) {
    return re(qi.count(sr(e) - 1, e), t, 2);
}
function cR(e, t) {
    return re(e.getUTCFullYear() % 100, t, 2);
}
function fR(e, t) {
    return (e = Kv(e)), re(e.getUTCFullYear() % 100, t, 2);
}
function hR(e, t) {
    return re(e.getUTCFullYear() % 1e4, t, 4);
}
function dR(e, t) {
    var r = e.getUTCDay();
    return (
        (e = r >= 4 || r === 0 ? Ir(e) : Ir.ceil(e)),
        re(e.getUTCFullYear() % 1e4, t, 4)
    );
}
function pR() {
    return "+0000";
}
function ah() {
    return "%";
}
function oh(e) {
    return +e;
}
function sh(e) {
    return Math.floor(+e / 1e3);
}
var yr, Jv, Zv;
vR({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
});
function vR(e) {
    return (
        (yr = vN(e)),
        (Jv = yr.format),
        yr.parse,
        (Zv = yr.utcFormat),
        yr.utcParse,
        yr
    );
}
function yR(e) {
    return new Date(e);
}
function gR(e) {
    return e instanceof Date ? +e : +new Date(+e);
}
function ll(e, t, r, n, i, a, o, s, u, l) {
    var c = Qu(),
        f = c.invert,
        d = c.domain,
        y = l(".%L"),
        p = l(":%S"),
        h = l("%I:%M"),
        v = l("%I %p"),
        g = l("%a %d"),
        _ = l("%b %d"),
        b = l("%B"),
        m = l("%Y");
    function x(w) {
        return (
            u(w) < w
                ? y
                : s(w) < w
                ? p
                : o(w) < w
                ? h
                : a(w) < w
                ? v
                : n(w) < w
                ? i(w) < w
                    ? g
                    : _
                : r(w) < w
                ? b
                : m
        )(w);
    }
    return (
        (c.invert = function (w) {
            return new Date(f(w));
        }),
        (c.domain = function (w) {
            return arguments.length ? d(Array.from(w, gR)) : d().map(yR);
        }),
        (c.ticks = function (w) {
            var S = d();
            return e(S[0], S[S.length - 1], w == null ? 10 : w);
        }),
        (c.tickFormat = function (w, S) {
            return S == null ? x : l(S);
        }),
        (c.nice = function (w) {
            var S = d();
            return (
                (!w || typeof w.range != "function") &&
                    (w = t(S[0], S[S.length - 1], w == null ? 10 : w)),
                w ? d(Ov(S, w)) : c
            );
        }),
        (c.copy = function () {
            return Nn(c, ll(e, t, r, n, i, a, o, s, u, l));
        }),
        c
    );
}
function mR() {
    return et.apply(
        ll(dN, pN, or, jv, Ga, za, Rv, Iv, mr, Jv).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
        ]),
        arguments
    );
}
function bR() {
    return et.apply(
        ll(fN, hN, sr, Gv, Va, qa, Hv, Bv, mr, Zv).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
        ]),
        arguments
    );
}
function Ya() {
    var e = 0,
        t = 1,
        r,
        n,
        i,
        a,
        o = Fe,
        s = !1,
        u;
    function l(f) {
        return f == null || isNaN((f = +f))
            ? u
            : o(
                  i === 0
                      ? 0.5
                      : ((f = (a(f) - r) * i),
                        s ? Math.max(0, Math.min(1, f)) : f)
              );
    }
    (l.domain = function (f) {
        return arguments.length
            ? (([e, t] = f),
              (r = a((e = +e))),
              (n = a((t = +t))),
              (i = r === n ? 0 : 1 / (n - r)),
              l)
            : [e, t];
    }),
        (l.clamp = function (f) {
            return arguments.length ? ((s = !!f), l) : s;
        }),
        (l.interpolator = function (f) {
            return arguments.length ? ((o = f), l) : o;
        });
    function c(f) {
        return function (d) {
            var y, p;
            return arguments.length
                ? (([y, p] = d), (o = f(y, p)), l)
                : [o(0), o(1)];
        };
    }
    return (
        (l.range = c(Vr)),
        (l.rangeRound = c(Zu)),
        (l.unknown = function (f) {
            return arguments.length ? ((u = f), l) : u;
        }),
        function (f) {
            return (
                (a = f),
                (r = f(e)),
                (n = f(t)),
                (i = r === n ? 0 : 1 / (n - r)),
                l
            );
        }
    );
}
function Gt(e, t) {
    return t
        .domain(e.domain())
        .interpolator(e.interpolator())
        .clamp(e.clamp())
        .unknown(e.unknown());
}
function Qv() {
    var e = zt(Ya()(Fe));
    return (
        (e.copy = function () {
            return Gt(e, Qv());
        }),
        $t.apply(e, arguments)
    );
}
function ey() {
    var e = rl(Ya()).domain([1, 10]);
    return (
        (e.copy = function () {
            return Gt(e, ey()).base(e.base());
        }),
        $t.apply(e, arguments)
    );
}
function ty() {
    var e = nl(Ya());
    return (
        (e.copy = function () {
            return Gt(e, ty()).constant(e.constant());
        }),
        $t.apply(e, arguments)
    );
}
function cl() {
    var e = il(Ya());
    return (
        (e.copy = function () {
            return Gt(e, cl()).exponent(e.exponent());
        }),
        $t.apply(e, arguments)
    );
}
function xR() {
    return cl.apply(null, arguments).exponent(0.5);
}
function ry() {
    var e = [],
        t = Fe;
    function r(n) {
        if (n != null && !isNaN((n = +n)))
            return t((Cn(e, n, 1) - 1) / (e.length - 1));
    }
    return (
        (r.domain = function (n) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
            return e.sort(kn), r;
        }),
        (r.interpolator = function (n) {
            return arguments.length ? ((t = n), r) : t;
        }),
        (r.range = function () {
            return e.map((n, i) => t(i / (e.length - 1)));
        }),
        (r.quantiles = function (n) {
            return Array.from({ length: n + 1 }, (i, a) => sI(e, a / n));
        }),
        (r.copy = function () {
            return ry(t).domain(e);
        }),
        $t.apply(r, arguments)
    );
}
function Xa() {
    var e = 0,
        t = 0.5,
        r = 1,
        n = 1,
        i,
        a,
        o,
        s,
        u,
        l = Fe,
        c,
        f = !1,
        d;
    function y(h) {
        return isNaN((h = +h))
            ? d
            : ((h = 0.5 + ((h = +c(h)) - a) * (n * h < n * a ? s : u)),
              l(f ? Math.max(0, Math.min(1, h)) : h));
    }
    (y.domain = function (h) {
        return arguments.length
            ? (([e, t, r] = h),
              (i = c((e = +e))),
              (a = c((t = +t))),
              (o = c((r = +r))),
              (s = i === a ? 0 : 0.5 / (a - i)),
              (u = a === o ? 0 : 0.5 / (o - a)),
              (n = a < i ? -1 : 1),
              y)
            : [e, t, r];
    }),
        (y.clamp = function (h) {
            return arguments.length ? ((f = !!h), y) : f;
        }),
        (y.interpolator = function (h) {
            return arguments.length ? ((l = h), y) : l;
        });
    function p(h) {
        return function (v) {
            var g, _, b;
            return arguments.length
                ? (([g, _, b] = v), (l = kI(h, [g, _, b])), y)
                : [l(0), l(0.5), l(1)];
        };
    }
    return (
        (y.range = p(Vr)),
        (y.rangeRound = p(Zu)),
        (y.unknown = function (h) {
            return arguments.length ? ((d = h), y) : d;
        }),
        function (h) {
            return (
                (c = h),
                (i = h(e)),
                (a = h(t)),
                (o = h(r)),
                (s = i === a ? 0 : 0.5 / (a - i)),
                (u = a === o ? 0 : 0.5 / (o - a)),
                (n = a < i ? -1 : 1),
                y
            );
        }
    );
}
function ny() {
    var e = zt(Xa()(Fe));
    return (
        (e.copy = function () {
            return Gt(e, ny());
        }),
        $t.apply(e, arguments)
    );
}
function iy() {
    var e = rl(Xa()).domain([0.1, 1, 10]);
    return (
        (e.copy = function () {
            return Gt(e, iy()).base(e.base());
        }),
        $t.apply(e, arguments)
    );
}
function ay() {
    var e = nl(Xa());
    return (
        (e.copy = function () {
            return Gt(e, ay()).constant(e.constant());
        }),
        $t.apply(e, arguments)
    );
}
function fl() {
    var e = il(Xa());
    return (
        (e.copy = function () {
            return Gt(e, fl()).exponent(e.exponent());
        }),
        $t.apply(e, arguments)
    );
}
function wR() {
    return fl.apply(null, arguments).exponent(0.5);
}
const uh = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            scaleBand: mn,
            scalePoint: dn,
            scaleIdentity: Sv,
            scaleLinear: Wi,
            scaleLog: Av,
            scaleSymlog: $v,
            scaleOrdinal: Xu,
            scaleImplicit: Us,
            scalePow: al,
            scaleSqrt: eN,
            scaleRadial: Tv,
            scaleQuantile: Pv,
            scaleQuantize: Ev,
            scaleThreshold: Mv,
            scaleTime: mR,
            scaleUtc: bR,
            scaleSequential: Qv,
            scaleSequentialLog: ey,
            scaleSequentialPow: cl,
            scaleSequentialSqrt: xR,
            scaleSequentialSymlog: ty,
            scaleSequentialQuantile: ry,
            scaleDiverging: ny,
            scaleDivergingLog: iy,
            scaleDivergingPow: fl,
            scaleDivergingSqrt: wR,
            scaleDivergingSymlog: ay,
            tickFormat: _v,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);
function lh(e) {
    return AR(e) || OR(e) || SR(e) || _R();
}
function _R() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SR(e, t) {
    if (!!e) {
        if (typeof e == "string") return Gs(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Gs(e, t);
    }
}
function OR(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function AR(e) {
    if (Array.isArray(e)) return Gs(e);
}
function Gs(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function ch(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Le(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? ch(Object(r), !0).forEach(function (n) {
                  Or(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ch(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function Or(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function At(e, t, r) {
    return V(e) || V(t) ? r : we(t) ? Ae(e, t, r) : X(t) ? t(e) : r;
}
function Vi(e, t, r, n) {
    var i = PC(e, function (s) {
        return At(s, t);
    });
    if (r === "number") {
        var a = i.filter(function (s) {
            return U(s) || parseFloat(s);
        });
        return a.length ? [Ba(a), Nt(a)] : [1 / 0, -1 / 0];
    }
    var o = n
        ? i.filter(function (s) {
              return !V(s);
          })
        : i;
    return o.map(function (s) {
        return we(s) || s instanceof Date ? s : "";
    });
}
var $R = function (t) {
        var r,
            n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : [],
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            o = -1,
            s =
                (r = n == null ? void 0 : n.length) !== null && r !== void 0
                    ? r
                    : 0;
        if (s > 1) {
            if (
                a &&
                a.axisType === "angleAxis" &&
                Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
            )
                for (var u = a.range, l = 0; l < s; l++) {
                    var c = l > 0 ? i[l - 1].coordinate : i[s - 1].coordinate,
                        f = i[l].coordinate,
                        d = l >= s - 1 ? i[0].coordinate : i[l + 1].coordinate,
                        y = void 0;
                    if (ut(f - c) !== ut(d - f)) {
                        var p = [];
                        if (ut(d - f) === ut(u[1] - u[0])) {
                            y = d;
                            var h = f + u[1] - u[0];
                            (p[0] = Math.min(h, (h + c) / 2)),
                                (p[1] = Math.max(h, (h + c) / 2));
                        } else {
                            y = c;
                            var v = d + u[1] - u[0];
                            (p[0] = Math.min(f, (v + f) / 2)),
                                (p[1] = Math.max(f, (v + f) / 2));
                        }
                        var g = [
                            Math.min(f, (y + f) / 2),
                            Math.max(f, (y + f) / 2),
                        ];
                        if (
                            (t > g[0] && t <= g[1]) ||
                            (t >= p[0] && t <= p[1])
                        ) {
                            o = i[l].index;
                            break;
                        }
                    } else {
                        var _ = Math.min(c, d),
                            b = Math.max(c, d);
                        if (t > (_ + f) / 2 && t <= (b + f) / 2) {
                            o = i[l].index;
                            break;
                        }
                    }
                }
            else
                for (var m = 0; m < s; m++)
                    if (
                        (m === 0 &&
                            t <= (n[m].coordinate + n[m + 1].coordinate) / 2) ||
                        (m > 0 &&
                            m < s - 1 &&
                            t > (n[m].coordinate + n[m - 1].coordinate) / 2 &&
                            t <= (n[m].coordinate + n[m + 1].coordinate) / 2) ||
                        (m === s - 1 &&
                            t > (n[m].coordinate + n[m - 1].coordinate) / 2)
                    ) {
                        o = n[m].index;
                        break;
                    }
        } else o = 0;
        return o;
    },
    hl = function (t) {
        var r = t,
            n = r.type.displayName,
            i = t.props,
            a = i.stroke,
            o = i.fill,
            s;
        switch (n) {
            case "Line":
                s = a;
                break;
            case "Area":
            case "Radar":
                s = a && a !== "none" ? a : o;
                break;
            default:
                s = o;
                break;
        }
        return s;
    },
    oy = function (t) {
        var r = t.children,
            n = t.formattedGraphicalItems,
            i = t.legendWidth,
            a = t.legendContent,
            o = bt(r, pn.displayName);
        if (!o) return null;
        var s;
        return (
            o.props && o.props.payload
                ? (s = o.props && o.props.payload)
                : a === "children"
                ? (s = (n || []).reduce(function (u, l) {
                      var c = l.item,
                          f = l.props,
                          d = f.sectors || f.data || [];
                      return u.concat(
                          d.map(function (y) {
                              return {
                                  type: o.props.iconType || c.props.legendType,
                                  value: y.name,
                                  color: y.fill,
                                  payload: y,
                              };
                          })
                      );
                  }, []))
                : (s = (n || []).map(function (u) {
                      var l = u.item,
                          c = l.props,
                          f = c.dataKey,
                          d = c.name,
                          y = c.legendType,
                          p = c.hide;
                      return {
                          inactive: p,
                          dataKey: f,
                          type: o.props.iconType || y || "square",
                          color: hl(l),
                          value: d || f,
                          payload: l.props,
                      };
                  })),
            Le(
                Le(Le({}, o.props), pn.getWithHeight(o, i)),
                {},
                { payload: s, item: o }
            )
        );
    },
    TR = function (t) {
        var r = t.barSize,
            n = t.stackGroups,
            i = n === void 0 ? {} : n;
        if (!i) return {};
        for (var a = {}, o = Object.keys(i), s = 0, u = o.length; s < u; s++)
            for (
                var l = i[o[s]].stackGroups,
                    c = Object.keys(l),
                    f = 0,
                    d = c.length;
                f < d;
                f++
            ) {
                var y = l[c[f]],
                    p = y.items,
                    h = y.cateAxisId,
                    v = p.filter(function (b) {
                        return Dt(b.type).indexOf("Bar") >= 0;
                    });
                if (v && v.length) {
                    var g = v[0].props.barSize,
                        _ = v[0].props[h];
                    a[_] || (a[_] = []),
                        a[_].push({
                            item: v[0],
                            stackList: v.slice(1),
                            barSize: V(g) ? r : g,
                        });
                }
            }
        return a;
    },
    PR = function (t) {
        var r = t.barGap,
            n = t.barCategoryGap,
            i = t.bandSize,
            a = t.sizeList,
            o = a === void 0 ? [] : a,
            s = t.maxBarSize,
            u = o.length;
        if (u < 1) return null;
        var l = Pr(r, i, 0, !0),
            c;
        if (o[0].barSize === +o[0].barSize) {
            var f = !1,
                d = i / u,
                y = o.reduce(function (b, m) {
                    return b + m.barSize || 0;
                }, 0);
            (y += (u - 1) * l),
                y >= i && ((y -= (u - 1) * l), (l = 0)),
                y >= i && d > 0 && ((f = !0), (d *= 0.9), (y = u * d));
            var p = ((i - y) / 2) >> 0,
                h = { offset: p - l, size: 0 };
            c = o.reduce(function (b, m) {
                var x = [].concat(lh(b), [
                    {
                        item: m.item,
                        position: {
                            offset: h.offset + h.size + l,
                            size: f ? d : m.barSize,
                        },
                    },
                ]);
                return (
                    (h = x[x.length - 1].position),
                    m.stackList &&
                        m.stackList.length &&
                        m.stackList.forEach(function (w) {
                            x.push({ item: w, position: h });
                        }),
                    x
                );
            }, []);
        } else {
            var v = Pr(n, i, 0, !0);
            i - 2 * v - (u - 1) * l <= 0 && (l = 0);
            var g = (i - 2 * v - (u - 1) * l) / u;
            g > 1 && (g >>= 0);
            var _ = s === +s ? Math.min(g, s) : g;
            c = o.reduce(function (b, m, x) {
                var w = [].concat(lh(b), [
                    {
                        item: m.item,
                        position: {
                            offset: v + (g + l) * x + (g - _) / 2,
                            size: _,
                        },
                    },
                ]);
                return (
                    m.stackList &&
                        m.stackList.length &&
                        m.stackList.forEach(function (S) {
                            w.push({
                                item: S,
                                position: w[w.length - 1].position,
                            });
                        }),
                    w
                );
            }, []);
        }
        return c;
    },
    ER = function (t, r, n, i) {
        var a = n.children,
            o = n.width,
            s = n.margin,
            u = o - (s.left || 0) - (s.right || 0),
            l = oy({ children: a, legendWidth: u }),
            c = t;
        if (l) {
            var f = i || {},
                d = l.align,
                y = l.verticalAlign,
                p = l.layout;
            (p === "vertical" || (p === "horizontal" && y === "center")) &&
                U(t[d]) &&
                (c = Le(Le({}, t), {}, Or({}, d, c[d] + (f.width || 0)))),
                (p === "horizontal" || (p === "vertical" && d === "center")) &&
                    U(t[y]) &&
                    (c = Le(Le({}, t), {}, Or({}, y, c[y] + (f.height || 0))));
        }
        return c;
    },
    MR = function (t, r, n) {
        return V(r)
            ? !0
            : t === "horizontal"
            ? r === "yAxis"
            : t === "vertical" || n === "x"
            ? r === "xAxis"
            : n === "y"
            ? r === "yAxis"
            : !0;
    },
    sy = function (t, r, n, i, a) {
        var o = r.props.children,
            s = St(o, "ErrorBar").filter(function (l) {
                return MR(i, a, l.props.direction);
            });
        if (s && s.length) {
            var u = s.map(function (l) {
                return l.props.dataKey;
            });
            return t.reduce(
                function (l, c) {
                    var f = At(c, n, 0),
                        d = te(f) ? [Ba(f), Nt(f)] : [f, f],
                        y = u.reduce(
                            function (p, h) {
                                var v = At(c, h, 0),
                                    g = d[0] - Math.abs(te(v) ? v[0] : v),
                                    _ = d[1] + Math.abs(te(v) ? v[1] : v);
                                return [Math.min(g, p[0]), Math.max(_, p[1])];
                            },
                            [1 / 0, -1 / 0]
                        );
                    return [Math.min(y[0], l[0]), Math.max(y[1], l[1])];
                },
                [1 / 0, -1 / 0]
            );
        }
        return null;
    },
    kR = function (t, r, n, i, a) {
        var o = r
            .map(function (s) {
                return sy(t, s, n, a, i);
            })
            .filter(function (s) {
                return !V(s);
            });
        return o && o.length
            ? o.reduce(
                  function (s, u) {
                      return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
                  },
                  [1 / 0, -1 / 0]
              )
            : null;
    },
    uy = function (t, r, n, i, a) {
        var o = r.map(function (u) {
            var l = u.props.dataKey;
            return (n === "number" && l && sy(t, u, l, i)) || Vi(t, l, n, a);
        });
        if (n === "number")
            return o.reduce(
                function (u, l) {
                    return [Math.min(u[0], l[0]), Math.max(u[1], l[1])];
                },
                [1 / 0, -1 / 0]
            );
        var s = {};
        return o.reduce(function (u, l) {
            for (var c = 0, f = l.length; c < f; c++)
                s[l[c]] || ((s[l[c]] = !0), u.push(l[c]));
            return u;
        }, []);
    },
    ly = function (t, r) {
        return (
            (t === "horizontal" && r === "xAxis") ||
            (t === "vertical" && r === "yAxis") ||
            (t === "centric" && r === "angleAxis") ||
            (t === "radial" && r === "radiusAxis")
        );
    },
    fh = function (t, r, n) {
        var i,
            a,
            o = t.map(function (s) {
                return (
                    s.coordinate === r && (i = !0),
                    s.coordinate === n && (a = !0),
                    s.coordinate
                );
            });
        return i || o.push(r), a || o.push(n), o;
    },
    kt = function (t, r, n) {
        if (!t) return null;
        var i = t.scale,
            a = t.duplicateDomain,
            o = t.type,
            s = t.range,
            u = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
            l =
                (r || n) && o === "category" && i.bandwidth
                    ? i.bandwidth() / u
                    : 0;
        return (
            (l = t.axisType === "angleAxis" ? ut(s[0] - s[1]) * 2 * l : l),
            r && (t.ticks || t.niceTicks)
                ? (t.ticks || t.niceTicks).map(function (c) {
                      var f = a ? a.indexOf(c) : c;
                      return { coordinate: i(f) + l, value: c, offset: l };
                  })
                : t.isCategorical && t.categoricalDomain
                ? t.categoricalDomain.map(function (c, f) {
                      return {
                          coordinate: i(c) + l,
                          value: c,
                          index: f,
                          offset: l,
                      };
                  })
                : i.ticks && !n
                ? i.ticks(t.tickCount).map(function (c) {
                      return { coordinate: i(c) + l, value: c, offset: l };
                  })
                : i.domain().map(function (c, f) {
                      return {
                          coordinate: i(c) + l,
                          value: a ? a[c] : c,
                          index: f,
                          offset: l,
                      };
                  })
        );
    },
    Yn = function (t, r, n) {
        var i;
        return (
            X(n) ? (i = n) : X(r) && (i = r),
            X(t) || i
                ? function (a, o, s, u) {
                      X(t) && t(a, o, s, u), X(i) && i(a, o, s, u);
                  }
                : null
        );
    },
    CR = function (t, r, n) {
        var i = t.scale,
            a = t.type,
            o = t.layout,
            s = t.axisType;
        if (i === "auto")
            return o === "radial" && s === "radiusAxis"
                ? { scale: mn(), realScaleType: "band" }
                : o === "radial" && s === "angleAxis"
                ? { scale: Wi(), realScaleType: "linear" }
                : a === "category" &&
                  r &&
                  (r.indexOf("LineChart") >= 0 ||
                      r.indexOf("AreaChart") >= 0 ||
                      (r.indexOf("ComposedChart") >= 0 && !n))
                ? { scale: dn(), realScaleType: "point" }
                : a === "category"
                ? { scale: mn(), realScaleType: "band" }
                : { scale: Wi(), realScaleType: "linear" };
        if (En(i)) {
            var u = "scale".concat(_a(i));
            return {
                scale: (uh[u] || dn)(),
                realScaleType: uh[u] ? u : "point",
            };
        }
        return X(i) ? { scale: i } : { scale: dn(), realScaleType: "point" };
    },
    hh = 1e-4,
    IR = function (t) {
        var r = t.domain();
        if (!(!r || r.length <= 2)) {
            var n = r.length,
                i = t.range(),
                a = Math.min(i[0], i[1]) - hh,
                o = Math.max(i[0], i[1]) + hh,
                s = t(r[0]),
                u = t(r[n - 1]);
            (s < a || s > o || u < a || u > o) && t.domain([r[0], r[n - 1]]);
        }
    },
    NR = function (t) {
        var r = t.length;
        if (!(r <= 0))
            for (var n = 0, i = t[0].length; n < i; ++n)
                for (var a = 0, o = 0, s = 0; s < r; ++s) {
                    var u = Pn(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
                    u >= 0
                        ? ((t[s][n][0] = a),
                          (t[s][n][1] = a + u),
                          (a = t[s][n][1]))
                        : ((t[s][n][0] = o),
                          (t[s][n][1] = o + u),
                          (o = t[s][n][1]));
                }
    },
    RR = function (t) {
        var r = t.length;
        if (!(r <= 0))
            for (var n = 0, i = t[0].length; n < i; ++n)
                for (var a = 0, o = 0; o < r; ++o) {
                    var s = Pn(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                    s >= 0
                        ? ((t[o][n][0] = a),
                          (t[o][n][1] = a + s),
                          (a = t[o][n][1]))
                        : ((t[o][n][0] = 0), (t[o][n][1] = 0));
                }
    },
    DR = {
        sign: NR,
        expand: I$,
        none: Tr,
        silhouette: N$,
        wiggle: R$,
        positive: RR,
    },
    LR = function (t, r, n) {
        var i = r.map(function (o) {
                return o.props.dataKey;
            }),
            a = C$()
                .keys(i)
                .value(function (o, s) {
                    return +At(o, s, 0);
                })
                .order(as)
                .offset(DR[n]);
        return a(t);
    },
    jR = function (t, r, n, i, a, o) {
        if (!t) return null;
        var s = o ? r.reverse() : r,
            u = s.reduce(function (l, c) {
                var f = c.props,
                    d = f.stackId,
                    y = f.hide;
                if (y) return l;
                var p = c.props[n],
                    h = l[p] || { hasStack: !1, stackGroups: {} };
                if (we(d)) {
                    var v = h.stackGroups[d] || {
                        numericAxisId: n,
                        cateAxisId: i,
                        items: [],
                    };
                    v.items.push(c), (h.hasStack = !0), (h.stackGroups[d] = v);
                } else h.stackGroups[Ta("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [c] };
                return Le(Le({}, l), {}, Or({}, p, h));
            }, {});
        return Object.keys(u).reduce(function (l, c) {
            var f = u[c];
            return (
                f.hasStack &&
                    (f.stackGroups = Object.keys(f.stackGroups).reduce(
                        function (d, y) {
                            var p = f.stackGroups[y];
                            return Le(
                                Le({}, d),
                                {},
                                Or({}, y, {
                                    numericAxisId: n,
                                    cateAxisId: i,
                                    items: p.items,
                                    stackedData: LR(t, p.items, a),
                                })
                            );
                        },
                        {}
                    )),
                Le(Le({}, l), {}, Or({}, c, f))
            );
        }, {});
    },
    FR = function (t, r) {
        return r === "number" ? [Ba(t), Nt(t)] : t;
    },
    BR = function (t, r) {
        var n = r.realScaleType,
            i = r.type,
            a = r.tickCount,
            o = r.originalDomain,
            s = r.allowDecimals,
            u = n || r.scale;
        if (u !== "auto" && u !== "linear") return null;
        if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
            var l = t.domain();
            if (!l.length) return null;
            var c = tI(l, a, s);
            return t.domain(FR(c, i)), { niceTicks: c };
        }
        if (a && i === "number") {
            var f = t.domain(),
                d = rI(f, a, s);
            return { niceTicks: d };
        }
        return null;
    },
    dh = function (t) {
        var r = t.axis,
            n = t.ticks,
            i = t.bandSize,
            a = t.entry,
            o = t.index,
            s = t.dataKey;
        if (r.type === "category") {
            if (!r.allowDuplicatedCategory && r.dataKey && !V(a[r.dataKey])) {
                var u = Pi(n, "value", a[r.dataKey]);
                if (u) return u.coordinate + i / 2;
            }
            return n[o] ? n[o].coordinate + i / 2 : null;
        }
        var l = At(a, V(s) ? r.dataKey : s);
        return V(l) ? null : r.scale(l);
    },
    UR = function (t, r) {
        var n = t.props.stackId;
        if (we(n)) {
            var i = r[n];
            if (i && i.items.length) {
                for (var a = -1, o = 0, s = i.items.length; o < s; o++)
                    if (i.items[o] === t) {
                        a = o;
                        break;
                    }
                return a >= 0 ? i.stackedData[a] : null;
            }
        }
        return null;
    },
    HR = function (t) {
        return t.reduce(
            function (r, n) {
                return [
                    Ba(n.concat([r[0]]).filter(U)),
                    Nt(n.concat([r[1]]).filter(U)),
                ];
            },
            [1 / 0, -1 / 0]
        );
    },
    cy = function (t, r, n) {
        return Object.keys(t)
            .reduce(
                function (i, a) {
                    var o = t[a],
                        s = o.stackedData,
                        u = s.reduce(
                            function (l, c) {
                                var f = HR(c.slice(r, n + 1));
                                return [
                                    Math.min(l[0], f[0]),
                                    Math.max(l[1], f[1]),
                                ];
                            },
                            [1 / 0, -1 / 0]
                        );
                    return [Math.min(u[0], i[0]), Math.max(u[1], i[1])];
                },
                [1 / 0, -1 / 0]
            )
            .map(function (i) {
                return i === 1 / 0 || i === -1 / 0 ? 0 : i;
            });
    },
    ph = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    vh = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    fy = function (t, r, n) {
        if (X(t)) return t(r, n);
        if (!te(t)) return r;
        var i = [];
        if (U(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
        else if (ph.test(t[0])) {
            var a = +ph.exec(t[0])[1];
            i[0] = r[0] - a;
        } else X(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
        if (U(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
        else if (vh.test(t[1])) {
            var o = +vh.exec(t[1])[1];
            i[1] = r[1] + o;
        } else X(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
        return i;
    },
    Yi = function (t, r, n) {
        if (t && t.scale && t.scale.bandwidth) {
            var i = t.scale.bandwidth();
            if (!n || i > 0) return i;
        }
        if (t && r && r.length >= 2) {
            for (
                var a = Fu(r, function (f) {
                        return f.coordinate;
                    }),
                    o = 1 / 0,
                    s = 1,
                    u = a.length;
                s < u;
                s++
            ) {
                var l = a[s],
                    c = a[s - 1];
                o = Math.min((l.coordinate || 0) - (c.coordinate || 0), o);
            }
            return o === 1 / 0 ? 0 : o;
        }
        return n ? void 0 : 0;
    },
    yh = function (t, r, n) {
        return !t || !t.length || Ms(t, Ae(n, "type.defaultProps.domain"))
            ? r
            : t;
    },
    WR = function (t, r) {
        var n = t.props,
            i = n.dataKey,
            a = n.name,
            o = n.unit,
            s = n.formatter,
            u = n.tooltipType,
            l = n.chartType;
        return Le(
            Le({}, ae(t)),
            {},
            {
                dataKey: i,
                unit: o,
                formatter: s,
                name: a || i,
                color: hl(t),
                value: At(r, i),
                type: u,
                payload: r,
                chartType: l,
            }
        );
    };
function gh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function mh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? gh(Object(r), !0).forEach(function (n) {
                  zR(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : gh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function zR(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
var Xi = Math.PI / 180,
    GR = function (t) {
        return (t * 180) / Math.PI;
    },
    Ce = function (t, r, n, i) {
        return { x: t + Math.cos(-Xi * i) * n, y: r + Math.sin(-Xi * i) * n };
    },
    qR = function (t, r) {
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y;
        return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
    },
    VR = function (t, r) {
        var n = t.x,
            i = t.y,
            a = r.cx,
            o = r.cy,
            s = qR({ x: n, y: i }, { x: a, y: o });
        if (s <= 0) return { radius: s };
        var u = (n - a) / s,
            l = Math.acos(u);
        return (
            i > o && (l = 2 * Math.PI - l),
            { radius: s, angle: GR(l), angleInRadian: l }
        );
    },
    YR = function (t) {
        var r = t.startAngle,
            n = t.endAngle,
            i = Math.floor(r / 360),
            a = Math.floor(n / 360),
            o = Math.min(i, a);
        return { startAngle: r - o * 360, endAngle: n - o * 360 };
    },
    XR = function (t, r) {
        var n = r.startAngle,
            i = r.endAngle,
            a = Math.floor(n / 360),
            o = Math.floor(i / 360),
            s = Math.min(a, o);
        return t + s * 360;
    },
    bh = function (t, r) {
        var n = t.x,
            i = t.y,
            a = VR({ x: n, y: i }, r),
            o = a.radius,
            s = a.angle,
            u = r.innerRadius,
            l = r.outerRadius;
        if (o < u || o > l) return !1;
        if (o === 0) return !0;
        var c = YR(r),
            f = c.startAngle,
            d = c.endAngle,
            y = s,
            p;
        if (f <= d) {
            for (; y > d; ) y -= 360;
            for (; y < f; ) y += 360;
            p = y >= f && y <= d;
        } else {
            for (; y > f; ) y -= 360;
            for (; y < d; ) y += 360;
            p = y >= d && y <= f;
        }
        return p ? mh(mh({}, r), {}, { radius: o, angle: XR(y, r) }) : null;
    };
function KR(e) {
    return eD(e) || QR(e) || ZR(e) || JR();
}
function JR() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZR(e, t) {
    if (!!e) {
        if (typeof e == "string") return qs(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return qs(e, t);
    }
}
function QR(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function eD(e) {
    if (Array.isArray(e)) return qs(e);
}
function qs(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function xh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Se(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? xh(Object(r), !0).forEach(function (n) {
                  tD(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : xh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function tD(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
var rD = function (t) {
        var r = t.value,
            n = t.formatter,
            i = V(t.children) ? r : t.children;
        return X(n) ? n(i) : i;
    },
    nD = function (t, r) {
        var n = ut(r - t),
            i = Math.min(Math.abs(r - t), 360);
        return n * i;
    },
    iD = function (t, r, n) {
        var i = t.position,
            a = t.viewBox,
            o = t.offset,
            s = t.className,
            u = a,
            l = u.cx,
            c = u.cy,
            f = u.innerRadius,
            d = u.outerRadius,
            y = u.startAngle,
            p = u.endAngle,
            h = u.clockWise,
            v = (f + d) / 2,
            g = nD(y, p),
            _ = g >= 0 ? 1 : -1,
            b,
            m;
        i === "insideStart"
            ? ((b = y + _ * o), (m = h))
            : i === "insideEnd"
            ? ((b = p - _ * o), (m = !h))
            : i === "end" && ((b = p + _ * o), (m = h)),
            (m = g <= 0 ? m : !m);
        var x = Ce(l, c, v, b),
            w = Ce(l, c, v, b + (m ? 1 : -1) * 359),
            S = "M"
                .concat(x.x, ",")
                .concat(
                    x.y,
                    `
    A`
                )
                .concat(v, ",")
                .concat(v, ",0,1,")
                .concat(
                    m ? 0 : 1,
                    `,
    `
                )
                .concat(w.x, ",")
                .concat(w.y),
            A = V(t.id) ? Ta("recharts-radial-line-") : t.id;
        return L("text", {
            ...n,
            dominantBaseline: "central",
            className: pe("recharts-radial-bar-label", s),
            children: [
                O("defs", { children: O("path", { id: A, d: S }) }),
                O("textPath", { xlinkHref: "#".concat(A), children: r }),
            ],
        });
    },
    aD = function (t) {
        var r = t.viewBox,
            n = t.offset,
            i = t.position,
            a = r,
            o = a.cx,
            s = a.cy,
            u = a.innerRadius,
            l = a.outerRadius,
            c = a.startAngle,
            f = a.endAngle,
            d = (c + f) / 2;
        if (i === "outside") {
            var y = Ce(o, s, l + n, d),
                p = y.x,
                h = y.y;
            return {
                x: p,
                y: h,
                textAnchor: p >= o ? "start" : "end",
                verticalAnchor: "middle",
            };
        }
        if (i === "center")
            return {
                x: o,
                y: s,
                textAnchor: "middle",
                verticalAnchor: "middle",
            };
        if (i === "centerTop")
            return {
                x: o,
                y: s,
                textAnchor: "middle",
                verticalAnchor: "start",
            };
        if (i === "centerBottom")
            return { x: o, y: s, textAnchor: "middle", verticalAnchor: "end" };
        var v = (u + l) / 2,
            g = Ce(o, s, v, d),
            _ = g.x,
            b = g.y;
        return { x: _, y: b, textAnchor: "middle", verticalAnchor: "middle" };
    },
    oD = function (t) {
        var r = t.viewBox,
            n = t.parentViewBox,
            i = t.offset,
            a = t.position,
            o = r,
            s = o.x,
            u = o.y,
            l = o.width,
            c = o.height,
            f = c >= 0 ? 1 : -1,
            d = f * i,
            y = f > 0 ? "end" : "start",
            p = f > 0 ? "start" : "end",
            h = l >= 0 ? 1 : -1,
            v = h * i,
            g = h > 0 ? "end" : "start",
            _ = h > 0 ? "start" : "end";
        if (a === "top") {
            var b = {
                x: s + l / 2,
                y: u - f * i,
                textAnchor: "middle",
                verticalAnchor: y,
            };
            return Se(
                Se({}, b),
                n ? { height: Math.max(u - n.y, 0), width: l } : {}
            );
        }
        if (a === "bottom") {
            var m = {
                x: s + l / 2,
                y: u + c + d,
                textAnchor: "middle",
                verticalAnchor: p,
            };
            return Se(
                Se({}, m),
                n
                    ? {
                          height: Math.max(n.y + n.height - (u + c), 0),
                          width: l,
                      }
                    : {}
            );
        }
        if (a === "left") {
            var x = {
                x: s - v,
                y: u + c / 2,
                textAnchor: g,
                verticalAnchor: "middle",
            };
            return Se(
                Se({}, x),
                n ? { width: Math.max(x.x - n.x, 0), height: c } : {}
            );
        }
        if (a === "right") {
            var w = {
                x: s + l + v,
                y: u + c / 2,
                textAnchor: _,
                verticalAnchor: "middle",
            };
            return Se(
                Se({}, w),
                n ? { width: Math.max(n.x + n.width - w.x, 0), height: c } : {}
            );
        }
        var S = n ? { width: l, height: c } : {};
        return a === "insideLeft"
            ? Se(
                  {
                      x: s + v,
                      y: u + c / 2,
                      textAnchor: _,
                      verticalAnchor: "middle",
                  },
                  S
              )
            : a === "insideRight"
            ? Se(
                  {
                      x: s + l - v,
                      y: u + c / 2,
                      textAnchor: g,
                      verticalAnchor: "middle",
                  },
                  S
              )
            : a === "insideTop"
            ? Se(
                  {
                      x: s + l / 2,
                      y: u + d,
                      textAnchor: "middle",
                      verticalAnchor: p,
                  },
                  S
              )
            : a === "insideBottom"
            ? Se(
                  {
                      x: s + l / 2,
                      y: u + c - d,
                      textAnchor: "middle",
                      verticalAnchor: y,
                  },
                  S
              )
            : a === "insideTopLeft"
            ? Se({ x: s + v, y: u + d, textAnchor: _, verticalAnchor: p }, S)
            : a === "insideTopRight"
            ? Se(
                  { x: s + l - v, y: u + d, textAnchor: g, verticalAnchor: p },
                  S
              )
            : a === "insideBottomLeft"
            ? Se(
                  { x: s + v, y: u + c - d, textAnchor: _, verticalAnchor: y },
                  S
              )
            : a === "insideBottomRight"
            ? Se(
                  {
                      x: s + l - v,
                      y: u + c - d,
                      textAnchor: g,
                      verticalAnchor: y,
                  },
                  S
              )
            : Ge(a) && (U(a.x) || Qt(a.x)) && (U(a.y) || Qt(a.y))
            ? Se(
                  {
                      x: s + Pr(a.x, l),
                      y: u + Pr(a.y, c),
                      textAnchor: "end",
                      verticalAnchor: "end",
                  },
                  S
              )
            : Se(
                  {
                      x: s + l / 2,
                      y: u + c / 2,
                      textAnchor: "middle",
                      verticalAnchor: "middle",
                  },
                  S
              );
    },
    sD = function (t) {
        return U(t.cx);
    };
function ke(e) {
    var t = e.viewBox,
        r = e.position,
        n = e.value,
        i = e.children,
        a = e.content,
        o = e.className,
        s = o === void 0 ? "" : o,
        u = e.textBreakAll;
    if (!t || (V(n) && V(i) && !T.exports.isValidElement(a) && !X(a)))
        return null;
    if (T.exports.isValidElement(a)) return T.exports.cloneElement(a, e);
    var l;
    if (X(a)) {
        if (((l = T.exports.createElement(a, e)), T.exports.isValidElement(l)))
            return l;
    } else l = rD(e);
    var c = sD(t),
        f = ae(e, !0);
    if (c && (r === "insideStart" || r === "insideEnd" || r === "end"))
        return iD(e, l, f);
    var d = c ? aD(e) : oD(e);
    return O(vn, {
        className: pe("recharts-label", s),
        ...f,
        ...d,
        breakAll: u,
        children: l,
    });
}
ke.displayName = "Label";
ke.defaultProps = { offset: 5 };
var hy = function (t) {
        var r = t.cx,
            n = t.cy,
            i = t.angle,
            a = t.startAngle,
            o = t.endAngle,
            s = t.r,
            u = t.radius,
            l = t.innerRadius,
            c = t.outerRadius,
            f = t.x,
            d = t.y,
            y = t.top,
            p = t.left,
            h = t.width,
            v = t.height,
            g = t.clockWise,
            _ = t.labelViewBox;
        if (_) return _;
        if (U(h) && U(v)) {
            if (U(f) && U(d)) return { x: f, y: d, width: h, height: v };
            if (U(y) && U(p)) return { x: y, y: p, width: h, height: v };
        }
        return U(f) && U(d)
            ? { x: f, y: d, width: 0, height: 0 }
            : U(r) && U(n)
            ? {
                  cx: r,
                  cy: n,
                  startAngle: a || i || 0,
                  endAngle: o || i || 0,
                  innerRadius: l || 0,
                  outerRadius: c || u || s || 0,
                  clockWise: g,
              }
            : t.viewBox
            ? t.viewBox
            : {};
    },
    uD = function (t, r) {
        return t
            ? t === !0
                ? O(ke, { viewBox: r }, "label-implicit")
                : we(t)
                ? O(ke, { viewBox: r, value: t }, "label-implicit")
                : T.exports.isValidElement(t)
                ? t.type === ke
                    ? T.exports.cloneElement(t, {
                          key: "label-implicit",
                          viewBox: r,
                      })
                    : O(ke, { content: t, viewBox: r }, "label-implicit")
                : X(t)
                ? O(ke, { content: t, viewBox: r }, "label-implicit")
                : Ge(t)
                ? T.exports.createElement(ke, {
                      viewBox: r,
                      ...t,
                      key: "label-implicit",
                  })
                : null
            : null;
    },
    lD = function (t, r) {
        var n =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (!t || (!t.children && n && !t.label)) return null;
        var i = t.children,
            a = hy(t),
            o = St(i, ke.displayName).map(function (u, l) {
                return T.exports.cloneElement(u, {
                    viewBox: r || a,
                    key: "label-".concat(l),
                });
            });
        if (!n) return o;
        var s = uD(t.label, r || a);
        return [s].concat(KR(o));
    };
ke.parseViewBox = hy;
ke.renderCallByParent = lD;
function cD(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0;
}
var fD = cD;
function hD(e) {
    return yD(e) || vD(e) || pD(e) || dD();
}
function dD() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pD(e, t) {
    if (!!e) {
        if (typeof e == "string") return Vs(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Vs(e, t);
    }
}
function vD(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function yD(e) {
    if (Array.isArray(e)) return Vs(e);
}
function Vs(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function wh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function _h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? wh(Object(r), !0).forEach(function (n) {
                  gD(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : wh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function gD(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function mD(e, t) {
    if (e == null) return {};
    var r = bD(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(e, n) ||
                        (r[n] = e[n]));
    }
    return r;
}
function bD(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
var xD = {
    valueAccessor: function (t) {
        return te(t.value) ? fD(t.value) : t.value;
    },
};
function Lt(e) {
    var t = e.data,
        r = e.valueAccessor,
        n = e.dataKey,
        i = e.clockWise,
        a = e.id,
        o = e.textBreakAll,
        s = mD(e, [
            "data",
            "valueAccessor",
            "dataKey",
            "clockWise",
            "id",
            "textBreakAll",
        ]);
    return !t || !t.length
        ? null
        : O(je, {
              className: "recharts-label-list",
              children: t.map(function (u, l) {
                  var c = V(n) ? r(u, l) : At(u && u.payload, n),
                      f = V(a) ? {} : { id: "".concat(a, "-").concat(l) };
                  return T.exports.createElement(ke, {
                      ...ae(u, !0),
                      ...s,
                      ...f,
                      parentViewBox: u.parentViewBox,
                      index: l,
                      value: c,
                      textBreakAll: o,
                      viewBox: ke.parseViewBox(
                          V(i) ? u : _h(_h({}, u), {}, { clockWise: i })
                      ),
                      key: "label-".concat(l),
                  });
              }),
          });
}
Lt.displayName = "LabelList";
function wD(e, t) {
    return e
        ? e === !0
            ? O(Lt, { data: t }, "labelList-implicit")
            : K.isValidElement(e) || X(e)
            ? O(Lt, { data: t, content: e }, "labelList-implicit")
            : Ge(e)
            ? T.exports.createElement(Lt, {
                  data: t,
                  ...e,
                  key: "labelList-implicit",
              })
            : null
        : null;
}
function _D(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || (!e.children && r && !e.label)) return null;
    var n = e.children,
        i = St(n, Lt.displayName).map(function (o, s) {
            return T.exports.cloneElement(o, {
                data: t,
                key: "labelList-".concat(s),
            });
        });
    if (!r) return i;
    var a = wD(e.label, t);
    return [a].concat(hD(i));
}
Lt.renderCallByParent = _D;
Lt.defaultProps = xD;
function oi(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (oi = function (r) {
                  return typeof r;
              })
            : (oi = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        oi(e)
    );
}
function SD(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function Sh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function OD(e, t, r) {
    return t && Sh(e.prototype, t), r && Sh(e, r), e;
}
function AD(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && Ys(e, t);
}
function Ys(e, t) {
    return (
        (Ys =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        Ys(e, t)
    );
}
function $D(e) {
    var t = ED();
    return function () {
        var n = Ki(e),
            i;
        if (t) {
            var a = Ki(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return TD(this, i);
    };
}
function TD(e, t) {
    return t && (oi(t) === "object" || typeof t == "function") ? t : PD(e);
}
function PD(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function ED() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function Ki(e) {
    return (
        (Ki = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ki(e)
    );
}
var MD = function (t, r) {
        var n = ut(r - t),
            i = Math.min(Math.abs(r - t), 359.999);
        return n * i;
    },
    Xn = function (t) {
        var r = t.cx,
            n = t.cy,
            i = t.radius,
            a = t.angle,
            o = t.sign,
            s = t.isExternal,
            u = t.cornerRadius,
            l = t.cornerIsExternal,
            c = u * (s ? 1 : -1) + i,
            f = Math.asin(u / c) / Xi,
            d = l ? a : a + o * f,
            y = Ce(r, n, c, d),
            p = Ce(r, n, i, d),
            h = l ? a - o * f : a,
            v = Ce(r, n, c * Math.cos(f * Xi), h);
        return { center: y, circleTangency: p, lineTangency: v, theta: f };
    },
    dy = function (t) {
        var r = t.cx,
            n = t.cy,
            i = t.innerRadius,
            a = t.outerRadius,
            o = t.startAngle,
            s = t.endAngle,
            u = MD(o, s),
            l = o + u,
            c = Ce(r, n, a, o),
            f = Ce(r, n, a, l),
            d = "M "
                .concat(c.x, ",")
                .concat(
                    c.y,
                    `
    A `
                )
                .concat(a, ",")
                .concat(
                    a,
                    `,0,
    `
                )
                .concat(+(Math.abs(u) > 180), ",")
                .concat(
                    +(o > l),
                    `,
    `
                )
                .concat(f.x, ",")
                .concat(
                    f.y,
                    `
  `
                );
        if (i > 0) {
            var y = Ce(r, n, i, o),
                p = Ce(r, n, i, l);
            d += "L "
                .concat(p.x, ",")
                .concat(
                    p.y,
                    `
            A `
                )
                .concat(i, ",")
                .concat(
                    i,
                    `,0,
            `
                )
                .concat(+(Math.abs(u) > 180), ",")
                .concat(
                    +(o <= l),
                    `,
            `
                )
                .concat(y.x, ",")
                .concat(y.y, " Z");
        } else d += "L ".concat(r, ",").concat(n, " Z");
        return d;
    },
    kD = function (t) {
        var r = t.cx,
            n = t.cy,
            i = t.innerRadius,
            a = t.outerRadius,
            o = t.cornerRadius,
            s = t.forceCornerRadius,
            u = t.cornerIsExternal,
            l = t.startAngle,
            c = t.endAngle,
            f = ut(c - l),
            d = Xn({
                cx: r,
                cy: n,
                radius: a,
                angle: l,
                sign: f,
                cornerRadius: o,
                cornerIsExternal: u,
            }),
            y = d.circleTangency,
            p = d.lineTangency,
            h = d.theta,
            v = Xn({
                cx: r,
                cy: n,
                radius: a,
                angle: c,
                sign: -f,
                cornerRadius: o,
                cornerIsExternal: u,
            }),
            g = v.circleTangency,
            _ = v.lineTangency,
            b = v.theta,
            m = u ? Math.abs(l - c) : Math.abs(l - c) - h - b;
        if (m < 0)
            return s
                ? "M "
                      .concat(p.x, ",")
                      .concat(
                          p.y,
                          `
        a`
                      )
                      .concat(o, ",")
                      .concat(o, ",0,0,1,")
                      .concat(
                          o * 2,
                          `,0
        a`
                      )
                      .concat(o, ",")
                      .concat(o, ",0,0,1,")
                      .concat(
                          -o * 2,
                          `,0
      `
                      )
                : dy({
                      cx: r,
                      cy: n,
                      innerRadius: i,
                      outerRadius: a,
                      startAngle: l,
                      endAngle: c,
                  });
        var x = "M "
            .concat(p.x, ",")
            .concat(
                p.y,
                `
    A`
            )
            .concat(o, ",")
            .concat(o, ",0,0,")
            .concat(+(f < 0), ",")
            .concat(y.x, ",")
            .concat(
                y.y,
                `
    A`
            )
            .concat(a, ",")
            .concat(a, ",0,")
            .concat(+(m > 180), ",")
            .concat(+(f < 0), ",")
            .concat(g.x, ",")
            .concat(
                g.y,
                `
    A`
            )
            .concat(o, ",")
            .concat(o, ",0,0,")
            .concat(+(f < 0), ",")
            .concat(_.x, ",")
            .concat(
                _.y,
                `
  `
            );
        if (i > 0) {
            var w = Xn({
                    cx: r,
                    cy: n,
                    radius: i,
                    angle: l,
                    sign: f,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: u,
                }),
                S = w.circleTangency,
                A = w.lineTangency,
                $ = w.theta,
                E = Xn({
                    cx: r,
                    cy: n,
                    radius: i,
                    angle: c,
                    sign: -f,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: u,
                }),
                P = E.circleTangency,
                M = E.lineTangency,
                k = E.theta,
                I = u ? Math.abs(l - c) : Math.abs(l - c) - $ - k;
            if (I < 0 && o === 0)
                return "".concat(x, "L").concat(r, ",").concat(n, "Z");
            x += "L"
                .concat(M.x, ",")
                .concat(
                    M.y,
                    `
      A`
                )
                .concat(o, ",")
                .concat(o, ",0,0,")
                .concat(+(f < 0), ",")
                .concat(P.x, ",")
                .concat(
                    P.y,
                    `
      A`
                )
                .concat(i, ",")
                .concat(i, ",0,")
                .concat(+(I > 180), ",")
                .concat(+(f > 0), ",")
                .concat(S.x, ",")
                .concat(
                    S.y,
                    `
      A`
                )
                .concat(o, ",")
                .concat(o, ",0,0,")
                .concat(+(f < 0), ",")
                .concat(A.x, ",")
                .concat(A.y, "Z");
        } else x += "L".concat(r, ",").concat(n, "Z");
        return x;
    },
    py = (function (e) {
        AD(r, e);
        var t = $D(r);
        function r() {
            return SD(this, r), t.apply(this, arguments);
        }
        return (
            OD(r, [
                {
                    key: "render",
                    value: function () {
                        var i = this.props,
                            a = i.cx,
                            o = i.cy,
                            s = i.innerRadius,
                            u = i.outerRadius,
                            l = i.cornerRadius,
                            c = i.forceCornerRadius,
                            f = i.cornerIsExternal,
                            d = i.startAngle,
                            y = i.endAngle,
                            p = i.className;
                        if (u < s || d === y) return null;
                        var h = pe("recharts-sector", p),
                            v = u - s,
                            g = Pr(l, v, 0, !0),
                            _;
                        return (
                            g > 0 && Math.abs(d - y) < 360
                                ? (_ = kD({
                                      cx: a,
                                      cy: o,
                                      innerRadius: s,
                                      outerRadius: u,
                                      cornerRadius: Math.min(g, v / 2),
                                      forceCornerRadius: c,
                                      cornerIsExternal: f,
                                      startAngle: d,
                                      endAngle: y,
                                  }))
                                : (_ = dy({
                                      cx: a,
                                      cy: o,
                                      innerRadius: s,
                                      outerRadius: u,
                                      startAngle: d,
                                      endAngle: y,
                                  })),
                            O("path", {
                                ...ae(this.props, !0),
                                className: h,
                                d: _,
                            })
                        );
                    },
                },
            ]),
            r
        );
    })(T.exports.PureComponent);
py.defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
};
function si(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (si = function (r) {
                  return typeof r;
              })
            : (si = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        si(e)
    );
}
function Oh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ah(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Oh(Object(r), !0).forEach(function (n) {
                  CD(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Oh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function CD(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function ID(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function $h(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function ND(e, t, r) {
    return t && $h(e.prototype, t), r && $h(e, r), e;
}
function RD(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && Xs(e, t);
}
function Xs(e, t) {
    return (
        (Xs =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        Xs(e, t)
    );
}
function DD(e) {
    var t = FD();
    return function () {
        var n = Ji(e),
            i;
        if (t) {
            var a = Ji(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return LD(this, i);
    };
}
function LD(e, t) {
    return t && (si(t) === "object" || typeof t == "function") ? t : jD(e);
}
function jD(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function FD() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function Ji(e) {
    return (
        (Ji = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ji(e)
    );
}
var Th = {
        curveBasisClosed: w$,
        curveBasisOpen: _$,
        curveBasis: x$,
        curveLinearClosed: S$,
        curveLinear: Aa,
        curveMonotoneX: O$,
        curveMonotoneY: A$,
        curveNatural: $$,
        curveStep: T$,
        curveStepAfter: E$,
        curveStepBefore: P$,
    },
    Kn = function (t) {
        return t.x === +t.x && t.y === +t.y;
    },
    sn = function (t) {
        return t.x;
    },
    un = function (t) {
        return t.y;
    },
    BD = function (t, r) {
        if (X(t)) return t;
        var n = "curve".concat(_a(t));
        return n === "curveMonotone" && r
            ? Th["".concat(n).concat(r === "vertical" ? "Y" : "X")]
            : Th[n] || Aa;
    },
    Ar = (function (e) {
        RD(r, e);
        var t = DD(r);
        function r() {
            return ID(this, r), t.apply(this, arguments);
        }
        return (
            ND(r, [
                {
                    key: "getPath",
                    value: function () {
                        var i = this.props,
                            a = i.type,
                            o = i.points,
                            s = i.baseLine,
                            u = i.layout,
                            l = i.connectNulls,
                            c = BD(a, u),
                            f = l
                                ? o.filter(function (h) {
                                      return Kn(h);
                                  })
                                : o,
                            d;
                        if (te(s)) {
                            var y = l
                                    ? s.filter(function (h) {
                                          return Kn(h);
                                      })
                                    : s,
                                p = f.map(function (h, v) {
                                    return Ah(Ah({}, h), {}, { base: y[v] });
                                });
                            return (
                                u === "vertical"
                                    ? (d = Hn()
                                          .y(un)
                                          .x1(sn)
                                          .x0(function (h) {
                                              return h.base.x;
                                          }))
                                    : (d = Hn()
                                          .x(sn)
                                          .y1(un)
                                          .y0(function (h) {
                                              return h.base.y;
                                          })),
                                d.defined(Kn).curve(c),
                                d(p)
                            );
                        }
                        return (
                            u === "vertical" && U(s)
                                ? (d = Hn().y(un).x1(sn).x0(s))
                                : U(s)
                                ? (d = Hn().x(sn).y1(un).y0(s))
                                : (d = gp().x(sn).y(un)),
                            d.defined(Kn).curve(c),
                            d(f)
                        );
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var i = this.props,
                            a = i.className,
                            o = i.points,
                            s = i.path,
                            u = i.pathRef;
                        if ((!o || !o.length) && !s) return null;
                        var l = o && o.length ? this.getPath() : s;
                        return O("path", {
                            ...ae(this.props),
                            ...mi(this.props),
                            className: pe("recharts-curve", a),
                            d: l,
                            ref: u,
                        });
                    },
                },
            ]),
            r
        );
    })(T.exports.PureComponent);
Ar.defaultProps = { type: "linear", points: [], connectNulls: !1 };
function ui(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (ui = function (r) {
                  return typeof r;
              })
            : (ui = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        ui(e)
    );
}
function UD(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function Ph(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function HD(e, t, r) {
    return t && Ph(e.prototype, t), r && Ph(e, r), e;
}
function WD(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && Ks(e, t);
}
function Ks(e, t) {
    return (
        (Ks =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        Ks(e, t)
    );
}
function zD(e) {
    var t = VD();
    return function () {
        var n = Zi(e),
            i;
        if (t) {
            var a = Zi(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return GD(this, i);
    };
}
function GD(e, t) {
    return t && (ui(t) === "object" || typeof t == "function") ? t : qD(e);
}
function qD(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function VD() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function Zi(e) {
    return (
        (Zi = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Zi(e)
    );
}
var Eh = function (t, r, n, i, a) {
        var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
            s = i >= 0 ? 1 : -1,
            u = n >= 0 ? 1 : -1,
            l = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
            c;
        if (o > 0 && a instanceof Array) {
            for (var f = [0, 0, 0, 0], d = 0, y = 4; d < y; d++)
                f[d] = a[d] > o ? o : a[d];
            (c = "M".concat(t, ",").concat(r + s * f[0])),
                f[0] > 0 &&
                    (c += "A "
                        .concat(f[0], ",")
                        .concat(f[0], ",0,0,")
                        .concat(l, ",")
                        .concat(t + u * f[0], ",")
                        .concat(r)),
                (c += "L ".concat(t + n - u * f[1], ",").concat(r)),
                f[1] > 0 &&
                    (c += "A "
                        .concat(f[1], ",")
                        .concat(f[1], ",0,0,")
                        .concat(
                            l,
                            `,
        `
                        )
                        .concat(t + n, ",")
                        .concat(r + s * f[1])),
                (c += "L ".concat(t + n, ",").concat(r + i - s * f[2])),
                f[2] > 0 &&
                    (c += "A "
                        .concat(f[2], ",")
                        .concat(f[2], ",0,0,")
                        .concat(
                            l,
                            `,
        `
                        )
                        .concat(t + n - u * f[2], ",")
                        .concat(r + i)),
                (c += "L ".concat(t + u * f[3], ",").concat(r + i)),
                f[3] > 0 &&
                    (c += "A "
                        .concat(f[3], ",")
                        .concat(f[3], ",0,0,")
                        .concat(
                            l,
                            `,
        `
                        )
                        .concat(t, ",")
                        .concat(r + i - s * f[3])),
                (c += "Z");
        } else if (o > 0 && a === +a && a > 0) {
            var p = Math.min(o, a);
            c = "M "
                .concat(t, ",")
                .concat(
                    r + s * p,
                    `
            A `
                )
                .concat(p, ",")
                .concat(p, ",0,0,")
                .concat(l, ",")
                .concat(t + u * p, ",")
                .concat(
                    r,
                    `
            L `
                )
                .concat(t + n - u * p, ",")
                .concat(
                    r,
                    `
            A `
                )
                .concat(p, ",")
                .concat(p, ",0,0,")
                .concat(l, ",")
                .concat(t + n, ",")
                .concat(
                    r + s * p,
                    `
            L `
                )
                .concat(t + n, ",")
                .concat(
                    r + i - s * p,
                    `
            A `
                )
                .concat(p, ",")
                .concat(p, ",0,0,")
                .concat(l, ",")
                .concat(t + n - u * p, ",")
                .concat(
                    r + i,
                    `
            L `
                )
                .concat(t + u * p, ",")
                .concat(
                    r + i,
                    `
            A `
                )
                .concat(p, ",")
                .concat(p, ",0,0,")
                .concat(l, ",")
                .concat(t, ",")
                .concat(r + i - s * p, " Z");
        } else
            c = "M "
                .concat(t, ",")
                .concat(r, " h ")
                .concat(n, " v ")
                .concat(i, " h ")
                .concat(-n, " Z");
        return c;
    },
    YD = function (t, r) {
        if (!t || !r) return !1;
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y,
            s = r.width,
            u = r.height;
        if (Math.abs(s) > 0 && Math.abs(u) > 0) {
            var l = Math.min(a, a + s),
                c = Math.max(a, a + s),
                f = Math.min(o, o + u),
                d = Math.max(o, o + u);
            return n >= l && n <= c && i >= f && i <= d;
        }
        return !1;
    },
    dl = (function (e) {
        WD(r, e);
        var t = zD(r);
        function r() {
            var n;
            UD(this, r);
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                a[o] = arguments[o];
            return (
                (n = t.call.apply(t, [this].concat(a))),
                (n.state = { totalLength: -1 }),
                (n.node = void 0),
                n
            );
        }
        return (
            HD(r, [
                {
                    key: "componentDidMount",
                    value: function () {
                        if (this.node && this.node.getTotalLength)
                            try {
                                var i = this.node.getTotalLength();
                                i && this.setState({ totalLength: i });
                            } catch {}
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var i = this,
                            a = this.props,
                            o = a.x,
                            s = a.y,
                            u = a.width,
                            l = a.height,
                            c = a.radius,
                            f = a.className,
                            d = this.state.totalLength,
                            y = this.props,
                            p = y.animationEasing,
                            h = y.animationDuration,
                            v = y.animationBegin,
                            g = y.isAnimationActive,
                            _ = y.isUpdateAnimationActive;
                        if (
                            o !== +o ||
                            s !== +s ||
                            u !== +u ||
                            l !== +l ||
                            u === 0 ||
                            l === 0
                        )
                            return null;
                        var b = pe("recharts-rectangle", f);
                        return _
                            ? O(Mr, {
                                  canBegin: d > 0,
                                  from: { width: u, height: l, x: o, y: s },
                                  to: { width: u, height: l, x: o, y: s },
                                  duration: h,
                                  animationEasing: p,
                                  isActive: _,
                                  children: function (m) {
                                      var x = m.width,
                                          w = m.height,
                                          S = m.x,
                                          A = m.y;
                                      return O(Mr, {
                                          canBegin: d > 0,
                                          from: "0px ".concat(
                                              d === -1 ? 1 : d,
                                              "px"
                                          ),
                                          to: "".concat(d, "px 0px"),
                                          attributeName: "strokeDasharray",
                                          begin: v,
                                          duration: h,
                                          isActive: g,
                                          easing: p,
                                          children: O("path", {
                                              ...ae(i.props, !0),
                                              className: b,
                                              d: Eh(S, A, x, w, c),
                                              ref: function (E) {
                                                  i.node = E;
                                              },
                                          }),
                                      });
                                  },
                              })
                            : O("path", {
                                  ...ae(this.props, !0),
                                  className: b,
                                  d: Eh(o, s, u, l, c),
                              });
                    },
                },
            ]),
            r
        );
    })(T.exports.PureComponent);
dl.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
};
function li(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (li = function (r) {
                  return typeof r;
              })
            : (li = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        li(e)
    );
}
function XD(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function Mh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function KD(e, t, r) {
    return t && Mh(e.prototype, t), r && Mh(e, r), e;
}
function JD(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && Js(e, t);
}
function Js(e, t) {
    return (
        (Js =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        Js(e, t)
    );
}
function ZD(e) {
    var t = tL();
    return function () {
        var n = Qi(e),
            i;
        if (t) {
            var a = Qi(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return QD(this, i);
    };
}
function QD(e, t) {
    return t && (li(t) === "object" || typeof t == "function") ? t : eL(e);
}
function eL(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function tL() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function Qi(e) {
    return (
        (Qi = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Qi(e)
    );
}
var pl = (function (e) {
    JD(r, e);
    var t = ZD(r);
    function r() {
        return XD(this, r), t.apply(this, arguments);
    }
    return (
        KD(r, [
            {
                key: "render",
                value: function () {
                    var i = this.props,
                        a = i.cx,
                        o = i.cy,
                        s = i.r,
                        u = i.className,
                        l = pe("recharts-dot", u);
                    return a === +a && o === +o && s === +s
                        ? O("circle", {
                              ...ae(this.props),
                              ...mi(this.props),
                              className: l,
                              cx: a,
                              cy: o,
                              r: s,
                          })
                        : null;
                },
            },
        ]),
        r
    );
})(T.exports.PureComponent);
function ci(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (ci = function (r) {
                  return typeof r;
              })
            : (ci = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        ci(e)
    );
}
function rL(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function kh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function nL(e, t, r) {
    return t && kh(e.prototype, t), r && kh(e, r), e;
}
function iL(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && Zs(e, t);
}
function Zs(e, t) {
    return (
        (Zs =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        Zs(e, t)
    );
}
function aL(e) {
    var t = uL();
    return function () {
        var n = ea(e),
            i;
        if (t) {
            var a = ea(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return oL(this, i);
    };
}
function oL(e, t) {
    return t && (ci(t) === "object" || typeof t == "function") ? t : sL(e);
}
function sL(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function uL() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function ea(e) {
    return (
        (ea = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        ea(e)
    );
}
var vy = (function (e) {
    iL(r, e);
    var t = aL(r);
    function r() {
        return rL(this, r), t.apply(this, arguments);
    }
    return (
        nL(
            r,
            [
                {
                    key: "render",
                    value: function () {
                        var i = this.props,
                            a = i.x,
                            o = i.y,
                            s = i.width,
                            u = i.height,
                            l = i.top,
                            c = i.left,
                            f = i.className;
                        return !U(a) ||
                            !U(o) ||
                            !U(s) ||
                            !U(u) ||
                            !U(l) ||
                            !U(c)
                            ? null
                            : O("path", {
                                  ...ae(this.props, !0),
                                  className: pe("recharts-cross", f),
                                  d: r.getPath(a, o, s, u, l, c),
                              });
                    },
                },
            ],
            [
                {
                    key: "getPath",
                    value: function (i, a, o, s, u, l) {
                        return "M"
                            .concat(i, ",")
                            .concat(u, "v")
                            .concat(s, "M")
                            .concat(l, ",")
                            .concat(a, "h")
                            .concat(o);
                    },
                },
            ]
        ),
        r
    );
})(T.exports.PureComponent);
vy.defaultProps = { x: 0, y: 0, top: 0, left: 0, width: 0, height: 0 };
var lL = Math.ceil,
    cL = Math.max;
function fL(e, t, r, n) {
    for (var i = -1, a = cL(lL((t - e) / (r || 1)), 0), o = Array(a); a--; )
        (o[n ? a : ++i] = e), (e += r);
    return o;
}
var hL = fL,
    dL = Fp,
    Ch = 1 / 0,
    pL = 17976931348623157e292;
function vL(e) {
    if (!e) return e === 0 ? e : 0;
    if (((e = dL(e)), e === Ch || e === -Ch)) {
        var t = e < 0 ? -1 : 1;
        return t * pL;
    }
    return e === e ? e : 0;
}
var yy = vL,
    yL = hL,
    gL = Ea,
    No = yy;
function mL(e) {
    return function (t, r, n) {
        return (
            n && typeof n != "number" && gL(t, r, n) && (r = n = void 0),
            (t = No(t)),
            r === void 0 ? ((r = t), (t = 0)) : (r = No(r)),
            (n = n === void 0 ? (t < r ? 1 : -1) : No(n)),
            yL(t, r, n, e)
        );
    };
}
var bL = mL,
    xL = bL,
    wL = xL(),
    ta = wL;
function Ih(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Nh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Ih(Object(r), !0).forEach(function (n) {
                  gy(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ih(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function gy(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
var _L = ["Webkit", "Moz", "O", "ms"],
    SL = function (t, r) {
        if (!t) return null;
        var n = t.replace(/(\w)/, function (a) {
                return a.toUpperCase();
            }),
            i = _L.reduce(function (a, o) {
                return Nh(Nh({}, a), {}, gy({}, o + n, r));
            }, {});
        return (i[t] = r), i;
    };
function fi(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (fi = function (r) {
                  return typeof r;
              })
            : (fi = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        fi(e)
    );
}
function Rh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ro(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Rh(Object(r), !0).forEach(function (n) {
                  Qs(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Rh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function Qs(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function OL(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function Dh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function AL(e, t, r) {
    return t && Dh(e.prototype, t), r && Dh(e, r), e;
}
function $L(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && eu(e, t);
}
function eu(e, t) {
    return (
        (eu =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        eu(e, t)
    );
}
function TL(e) {
    var t = EL();
    return function () {
        var n = ra(e),
            i;
        if (t) {
            var a = ra(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return PL(this, i);
    };
}
function PL(e, t) {
    return t && (fi(t) === "object" || typeof t == "function") ? t : tu(e);
}
function tu(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function EL() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function ra(e) {
    return (
        (ra = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        ra(e)
    );
}
var ML = function (t) {
        var r = t.data,
            n = t.startIndex,
            i = t.endIndex,
            a = t.x,
            o = t.width,
            s = t.travellerWidth;
        if (!r || !r.length) return {};
        var u = r.length,
            l = dn()
                .domain(ta(0, u))
                .range([a, a + o - s]),
            c = l.domain().map(function (f) {
                return l(f);
            });
        return {
            isTextActive: !1,
            isSlideMoving: !1,
            isTravellerMoving: !1,
            startX: l(n),
            endX: l(i),
            scale: l,
            scaleValues: c,
        };
    },
    Lh = function (t) {
        return t.changedTouches && !!t.changedTouches.length;
    },
    _n = (function (e) {
        $L(r, e);
        var t = TL(r);
        function r(n) {
            var i;
            return (
                OL(this, r),
                (i = t.call(this, n)),
                (i.leaveTimer = void 0),
                (i.travellerDragStartHandlers = void 0),
                (i.handleDrag = function (a) {
                    i.leaveTimer &&
                        (clearTimeout(i.leaveTimer), (i.leaveTimer = null)),
                        i.state.isTravellerMoving
                            ? i.handleTravellerMove(a)
                            : i.state.isSlideMoving && i.handleSlideDrag(a);
                }),
                (i.handleTouchMove = function (a) {
                    a.changedTouches != null &&
                        a.changedTouches.length > 0 &&
                        i.handleDrag(a.changedTouches[0]);
                }),
                (i.handleDragEnd = function () {
                    i.setState({ isTravellerMoving: !1, isSlideMoving: !1 }),
                        i.detachDragEndListener();
                }),
                (i.handleLeaveWrapper = function () {
                    (i.state.isTravellerMoving || i.state.isSlideMoving) &&
                        (i.leaveTimer = window.setTimeout(
                            i.handleDragEnd,
                            i.props.leaveTimeOut
                        ));
                }),
                (i.handleEnterSlideOrTraveller = function () {
                    i.setState({ isTextActive: !0 });
                }),
                (i.handleLeaveSlideOrTraveller = function () {
                    i.setState({ isTextActive: !1 });
                }),
                (i.handleSlideDragStart = function (a) {
                    var o = Lh(a) ? a.changedTouches[0] : a;
                    i.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !0,
                        slideMoveStartX: o.pageX,
                    }),
                        i.attachDragEndListener();
                }),
                (i.travellerDragStartHandlers = {
                    startX: i.handleTravellerDragStart.bind(tu(i), "startX"),
                    endX: i.handleTravellerDragStart.bind(tu(i), "endX"),
                }),
                (i.state = {}),
                i
            );
        }
        return (
            AL(
                r,
                [
                    {
                        key: "componentWillUnmount",
                        value: function () {
                            this.leaveTimer &&
                                (clearTimeout(this.leaveTimer),
                                (this.leaveTimer = null)),
                                this.detachDragEndListener();
                        },
                    },
                    {
                        key: "getIndex",
                        value: function (i) {
                            var a = i.startX,
                                o = i.endX,
                                s = this.state.scaleValues,
                                u = this.props,
                                l = u.gap,
                                c = u.data,
                                f = c.length - 1,
                                d = Math.min(a, o),
                                y = Math.max(a, o),
                                p = r.getIndexInRange(s, d),
                                h = r.getIndexInRange(s, y);
                            return {
                                startIndex: p - (p % l),
                                endIndex: h === f ? f : h - (h % l),
                            };
                        },
                    },
                    {
                        key: "getTextOfTick",
                        value: function (i) {
                            var a = this.props,
                                o = a.data,
                                s = a.tickFormatter,
                                u = a.dataKey,
                                l = At(o[i], u, i);
                            return X(s) ? s(l, i) : l;
                        },
                    },
                    {
                        key: "attachDragEndListener",
                        value: function () {
                            window.addEventListener(
                                "mouseup",
                                this.handleDragEnd,
                                !0
                            ),
                                window.addEventListener(
                                    "touchend",
                                    this.handleDragEnd,
                                    !0
                                );
                        },
                    },
                    {
                        key: "detachDragEndListener",
                        value: function () {
                            window.removeEventListener(
                                "mouseup",
                                this.handleDragEnd,
                                !0
                            ),
                                window.removeEventListener(
                                    "touchend",
                                    this.handleDragEnd,
                                    !0
                                );
                        },
                    },
                    {
                        key: "handleSlideDrag",
                        value: function (i) {
                            var a = this.state,
                                o = a.slideMoveStartX,
                                s = a.startX,
                                u = a.endX,
                                l = this.props,
                                c = l.x,
                                f = l.width,
                                d = l.travellerWidth,
                                y = l.startIndex,
                                p = l.endIndex,
                                h = l.onChange,
                                v = i.pageX - o;
                            v > 0
                                ? (v = Math.min(
                                      v,
                                      c + f - d - u,
                                      c + f - d - s
                                  ))
                                : v < 0 && (v = Math.max(v, c - s, c - u));
                            var g = this.getIndex({
                                startX: s + v,
                                endX: u + v,
                            });
                            (g.startIndex !== y || g.endIndex !== p) &&
                                h &&
                                h(g),
                                this.setState({
                                    startX: s + v,
                                    endX: u + v,
                                    slideMoveStartX: i.pageX,
                                });
                        },
                    },
                    {
                        key: "handleTravellerDragStart",
                        value: function (i, a) {
                            var o = Lh(a) ? a.changedTouches[0] : a;
                            this.setState({
                                isSlideMoving: !1,
                                isTravellerMoving: !0,
                                movingTravellerId: i,
                                brushMoveStartX: o.pageX,
                            }),
                                this.attachDragEndListener();
                        },
                    },
                    {
                        key: "handleTravellerMove",
                        value: function (i) {
                            var a,
                                o = this.state,
                                s = o.brushMoveStartX,
                                u = o.movingTravellerId,
                                l = o.endX,
                                c = o.startX,
                                f = this.state[u],
                                d = this.props,
                                y = d.x,
                                p = d.width,
                                h = d.travellerWidth,
                                v = d.onChange,
                                g = d.gap,
                                _ = d.data,
                                b = {
                                    startX: this.state.startX,
                                    endX: this.state.endX,
                                },
                                m = i.pageX - s;
                            m > 0
                                ? (m = Math.min(m, y + p - h - f))
                                : m < 0 && (m = Math.max(m, y - f)),
                                (b[u] = f + m);
                            var x = this.getIndex(b),
                                w = x.startIndex,
                                S = x.endIndex,
                                A = function () {
                                    var E = _.length - 1;
                                    return (
                                        (u === "startX" &&
                                            (l > c
                                                ? w % g === 0
                                                : S % g === 0)) ||
                                        (l < c && S === E) ||
                                        (u === "endX" &&
                                            (l > c
                                                ? S % g === 0
                                                : w % g === 0)) ||
                                        (l > c && S === E)
                                    );
                                };
                            this.setState(
                                ((a = {}),
                                Qs(a, u, f + m),
                                Qs(a, "brushMoveStartX", i.pageX),
                                a),
                                function () {
                                    v && A() && v(x);
                                }
                            );
                        },
                    },
                    {
                        key: "renderBackground",
                        value: function () {
                            var i = this.props,
                                a = i.x,
                                o = i.y,
                                s = i.width,
                                u = i.height,
                                l = i.fill,
                                c = i.stroke;
                            return O("rect", {
                                stroke: c,
                                fill: l,
                                x: a,
                                y: o,
                                width: s,
                                height: u,
                            });
                        },
                    },
                    {
                        key: "renderPanorama",
                        value: function () {
                            var i = this.props,
                                a = i.x,
                                o = i.y,
                                s = i.width,
                                u = i.height,
                                l = i.data,
                                c = i.children,
                                f = i.padding,
                                d = T.exports.Children.only(c);
                            return d
                                ? K.cloneElement(d, {
                                      x: a,
                                      y: o,
                                      width: s,
                                      height: u,
                                      margin: f,
                                      compact: !0,
                                      data: l,
                                  })
                                : null;
                        },
                    },
                    {
                        key: "renderTravellerLayer",
                        value: function (i, a) {
                            var o = this.props,
                                s = o.y,
                                u = o.travellerWidth,
                                l = o.height,
                                c = o.traveller,
                                f = Math.max(i, this.props.x),
                                d = Ro(
                                    Ro({}, ae(this.props)),
                                    {},
                                    { x: f, y: s, width: u, height: l }
                                );
                            return O(je, {
                                className: "recharts-brush-traveller",
                                onMouseEnter: this.handleEnterSlideOrTraveller,
                                onMouseLeave: this.handleLeaveSlideOrTraveller,
                                onMouseDown: this.travellerDragStartHandlers[a],
                                onTouchStart:
                                    this.travellerDragStartHandlers[a],
                                style: { cursor: "col-resize" },
                                children: r.renderTraveller(c, d),
                            });
                        },
                    },
                    {
                        key: "renderSlide",
                        value: function (i, a) {
                            var o = this.props,
                                s = o.y,
                                u = o.height,
                                l = o.stroke,
                                c = o.travellerWidth,
                                f = Math.min(i, a) + c,
                                d = Math.max(Math.abs(a - i) - c, 0);
                            return O("rect", {
                                className: "recharts-brush-slide",
                                onMouseEnter: this.handleEnterSlideOrTraveller,
                                onMouseLeave: this.handleLeaveSlideOrTraveller,
                                onMouseDown: this.handleSlideDragStart,
                                onTouchStart: this.handleSlideDragStart,
                                style: { cursor: "move" },
                                stroke: "none",
                                fill: l,
                                fillOpacity: 0.2,
                                x: f,
                                y: s,
                                width: d,
                                height: u,
                            });
                        },
                    },
                    {
                        key: "renderText",
                        value: function () {
                            var i = this.props,
                                a = i.startIndex,
                                o = i.endIndex,
                                s = i.y,
                                u = i.height,
                                l = i.travellerWidth,
                                c = i.stroke,
                                f = this.state,
                                d = f.startX,
                                y = f.endX,
                                p = 5,
                                h = { pointerEvents: "none", fill: c };
                            return L(je, {
                                className: "recharts-brush-texts",
                                children: [
                                    O(vn, {
                                        textAnchor: "end",
                                        verticalAnchor: "middle",
                                        x: Math.min(d, y) - p,
                                        y: s + u / 2,
                                        ...h,
                                        children: this.getTextOfTick(a),
                                    }),
                                    O(vn, {
                                        textAnchor: "start",
                                        verticalAnchor: "middle",
                                        x: Math.max(d, y) + l + p,
                                        y: s + u / 2,
                                        ...h,
                                        children: this.getTextOfTick(o),
                                    }),
                                ],
                            });
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var i = this.props,
                                a = i.data,
                                o = i.className,
                                s = i.children,
                                u = i.x,
                                l = i.y,
                                c = i.width,
                                f = i.height,
                                d = i.alwaysShowText,
                                y = this.state,
                                p = y.startX,
                                h = y.endX,
                                v = y.isTextActive,
                                g = y.isSlideMoving,
                                _ = y.isTravellerMoving;
                            if (
                                !a ||
                                !a.length ||
                                !U(u) ||
                                !U(l) ||
                                !U(c) ||
                                !U(f) ||
                                c <= 0 ||
                                f <= 0
                            )
                                return null;
                            var b = pe("recharts-brush", o),
                                m = K.Children.count(s) === 1,
                                x = SL("userSelect", "none");
                            return L(je, {
                                className: b,
                                onMouseMove: this.handleDrag,
                                onMouseLeave: this.handleLeaveWrapper,
                                onTouchMove: this.handleTouchMove,
                                style: x,
                                children: [
                                    this.renderBackground(),
                                    m && this.renderPanorama(),
                                    this.renderSlide(p, h),
                                    this.renderTravellerLayer(p, "startX"),
                                    this.renderTravellerLayer(h, "endX"),
                                    (v || g || _ || d) && this.renderText(),
                                ],
                            });
                        },
                    },
                ],
                [
                    {
                        key: "renderDefaultTraveller",
                        value: function (i) {
                            var a = i.x,
                                o = i.y,
                                s = i.width,
                                u = i.height,
                                l = i.stroke,
                                c = Math.floor(o + u / 2) - 1;
                            return L(Rr, {
                                children: [
                                    O("rect", {
                                        x: a,
                                        y: o,
                                        width: s,
                                        height: u,
                                        fill: l,
                                        stroke: "none",
                                    }),
                                    O("line", {
                                        x1: a + 1,
                                        y1: c,
                                        x2: a + s - 1,
                                        y2: c,
                                        fill: "none",
                                        stroke: "#fff",
                                    }),
                                    O("line", {
                                        x1: a + 1,
                                        y1: c + 2,
                                        x2: a + s - 1,
                                        y2: c + 2,
                                        fill: "none",
                                        stroke: "#fff",
                                    }),
                                ],
                            });
                        },
                    },
                    {
                        key: "renderTraveller",
                        value: function (i, a) {
                            var o;
                            return (
                                K.isValidElement(i)
                                    ? (o = K.cloneElement(i, a))
                                    : X(i)
                                    ? (o = i(a))
                                    : (o = r.renderDefaultTraveller(a)),
                                o
                            );
                        },
                    },
                    {
                        key: "getDerivedStateFromProps",
                        value: function (i, a) {
                            var o = i.data,
                                s = i.width,
                                u = i.x,
                                l = i.travellerWidth,
                                c = i.updateId,
                                f = i.startIndex,
                                d = i.endIndex;
                            if (o !== a.prevData || c !== a.prevUpdateId)
                                return Ro(
                                    {
                                        prevData: o,
                                        prevTravellerWidth: l,
                                        prevUpdateId: c,
                                        prevX: u,
                                        prevWidth: s,
                                    },
                                    o && o.length
                                        ? ML({
                                              data: o,
                                              width: s,
                                              x: u,
                                              travellerWidth: l,
                                              startIndex: f,
                                              endIndex: d,
                                          })
                                        : { scale: null, scaleValues: null }
                                );
                            if (
                                a.scale &&
                                (s !== a.prevWidth ||
                                    u !== a.prevX ||
                                    l !== a.prevTravellerWidth)
                            ) {
                                a.scale.range([u, u + s - l]);
                                var y = a.scale.domain().map(function (p) {
                                    return a.scale(p);
                                });
                                return {
                                    prevData: o,
                                    prevTravellerWidth: l,
                                    prevUpdateId: c,
                                    prevX: u,
                                    prevWidth: s,
                                    startX: a.scale(i.startIndex),
                                    endX: a.scale(i.endIndex),
                                    scaleValues: y,
                                };
                            }
                            return null;
                        },
                    },
                    {
                        key: "getIndexInRange",
                        value: function (i, a) {
                            for (
                                var o = i.length, s = 0, u = o - 1;
                                u - s > 1;

                            ) {
                                var l = Math.floor((s + u) / 2);
                                i[l] > a ? (u = l) : (s = l);
                            }
                            return a >= i[u] ? u : s;
                        },
                    },
                ]
            ),
            r
        );
    })(T.exports.PureComponent);
_n.displayName = "Brush";
_n.defaultProps = {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: "#fff",
    stroke: "#666",
    padding: { top: 1, right: 1, bottom: 1, left: 1 },
    leaveTimeOut: 1e3,
    alwaysShowText: !1,
};
var kL = ju;
function CL(e, t) {
    var r;
    return (
        kL(e, function (n, i, a) {
            return (r = t(n, i, a)), !r;
        }),
        !!r
    );
}
var IL = CL,
    NL = zd,
    RL = Wt,
    DL = IL,
    LL = te,
    jL = Ea;
function FL(e, t, r) {
    var n = LL(e) ? NL : DL;
    return r && jL(e, t, r) && (t = void 0), n(e, RL(t));
}
var BL = FL,
    ft = function (t, r) {
        var n = t.alwaysShow,
            i = t.ifOverflow;
        return n && (i = "extendDomain"), i === r;
    };
function UL(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (!t(e[r], r, e)) return !1;
    return !0;
}
var HL = UL,
    WL = ju;
function zL(e, t) {
    var r = !0;
    return (
        WL(e, function (n, i, a) {
            return (r = !!t(n, i, a)), r;
        }),
        r
    );
}
var GL = zL,
    qL = HL,
    VL = GL,
    YL = Wt,
    XL = te,
    KL = Ea;
function JL(e, t, r) {
    var n = XL(e) ? qL : VL;
    return r && KL(e, t, r) && (t = void 0), n(e, YL(t));
}
var my = JL,
    jh = jp;
function ZL(e, t, r) {
    t == "__proto__" && jh
        ? jh(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
}
var QL = ZL,
    ej = QL,
    tj = Dp,
    rj = Wt;
function nj(e, t) {
    var r = {};
    return (
        (t = rj(t)),
        tj(e, function (n, i, a) {
            ej(r, i, t(n, i, a));
        }),
        r
    );
}
var ij = nj;
function aj(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function Fh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function oj(e, t, r) {
    return t && Fh(e.prototype, t), r && Fh(e, r), e;
}
function Bh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function rt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Bh(Object(r), !0).forEach(function (n) {
                  vl(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Bh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function vl(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
var sj = function (t, r, n, i, a) {
        var o = t.width,
            s = t.height,
            u = t.layout,
            l = t.children,
            c = Object.keys(r),
            f = {
                left: n.left,
                leftMirror: n.left,
                right: o - n.right,
                rightMirror: o - n.right,
                top: n.top,
                topMirror: n.top,
                bottom: s - n.bottom,
                bottomMirror: s - n.bottom,
            },
            d = !!bt(l, "Bar");
        return c.reduce(function (y, p) {
            var h = r[p],
                v = h.orientation,
                g = h.domain,
                _ = h.padding,
                b = _ === void 0 ? {} : _,
                m = h.mirror,
                x = h.reversed,
                w = "".concat(v).concat(m ? "Mirror" : ""),
                S,
                A,
                $,
                E,
                P;
            if (
                h.type === "number" &&
                (h.padding === "gap" || h.padding === "no-gap")
            ) {
                var M = g[1] - g[0],
                    k = 1 / 0,
                    I = h.categoricalDomain.sort();
                I.forEach(function (ve, _e) {
                    _e > 0 && (k = Math.min((ve || 0) - (I[_e - 1] || 0), k));
                });
                var R = k / M,
                    C = h.layout === "vertical" ? n.height : n.width;
                if (
                    (h.padding === "gap" && (S = (R * C) / 2),
                    h.padding === "no-gap")
                ) {
                    var B = Pr(t.barCategoryGap, R * C),
                        j = (R * C) / 2;
                    S = j - B - ((j - B) / C) * B;
                }
            }
            i === "xAxis"
                ? (A = [
                      n.left + (b.left || 0) + (S || 0),
                      n.left + n.width - (b.right || 0) - (S || 0),
                  ])
                : i === "yAxis"
                ? (A =
                      u === "horizontal"
                          ? [
                                n.top + n.height - (b.bottom || 0),
                                n.top + (b.top || 0),
                            ]
                          : [
                                n.top + (b.top || 0) + (S || 0),
                                n.top + n.height - (b.bottom || 0) - (S || 0),
                            ])
                : (A = h.range),
                x && (A = [A[1], A[0]]);
            var H = CR(h, a, d),
                G = H.scale,
                Z = H.realScaleType;
            G.domain(g).range(A), IR(G);
            var ee = BR(G, rt(rt({}, h), {}, { realScaleType: Z }));
            i === "xAxis"
                ? ((P = (v === "top" && !m) || (v === "bottom" && m)),
                  ($ = n.left),
                  (E = f[w] - P * h.height))
                : i === "yAxis" &&
                  ((P = (v === "left" && !m) || (v === "right" && m)),
                  ($ = f[w] - P * h.width),
                  (E = n.top));
            var oe = rt(
                rt(rt({}, h), ee),
                {},
                {
                    realScaleType: Z,
                    x: $,
                    y: E,
                    scale: G,
                    width: i === "xAxis" ? n.width : h.width,
                    height: i === "yAxis" ? n.height : h.height,
                }
            );
            return (
                (oe.bandSize = Yi(oe, ee)),
                !h.hide && i === "xAxis"
                    ? (f[w] += (P ? -1 : 1) * oe.height)
                    : h.hide || (f[w] += (P ? -1 : 1) * oe.width),
                rt(rt({}, y), {}, vl({}, p, oe))
            );
        }, {});
    },
    by = function (t, r) {
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y;
        return {
            x: Math.min(n, a),
            y: Math.min(i, o),
            width: Math.abs(a - n),
            height: Math.abs(o - i),
        };
    },
    uj = function (t) {
        var r = t.x1,
            n = t.y1,
            i = t.x2,
            a = t.y2;
        return by({ x: r, y: n }, { x: i, y: a });
    },
    xy = (function () {
        function e(t) {
            aj(this, e), (this.scale = void 0), (this.scale = t);
        }
        return (
            oj(
                e,
                [
                    {
                        key: "domain",
                        get: function () {
                            return this.scale.domain;
                        },
                    },
                    {
                        key: "range",
                        get: function () {
                            return this.scale.range;
                        },
                    },
                    {
                        key: "rangeMin",
                        get: function () {
                            return this.range()[0];
                        },
                    },
                    {
                        key: "rangeMax",
                        get: function () {
                            return this.range()[1];
                        },
                    },
                    {
                        key: "bandwidth",
                        get: function () {
                            return this.scale.bandwidth;
                        },
                    },
                    {
                        key: "apply",
                        value: function (r) {
                            var n =
                                    arguments.length > 1 &&
                                    arguments[1] !== void 0
                                        ? arguments[1]
                                        : {},
                                i = n.bandAware,
                                a = n.position;
                            if (r !== void 0) {
                                if (a)
                                    switch (a) {
                                        case "start":
                                            return this.scale(r);
                                        case "middle": {
                                            var o = this.bandwidth
                                                ? this.bandwidth() / 2
                                                : 0;
                                            return this.scale(r) + o;
                                        }
                                        case "end": {
                                            var s = this.bandwidth
                                                ? this.bandwidth()
                                                : 0;
                                            return this.scale(r) + s;
                                        }
                                        default:
                                            return this.scale(r);
                                    }
                                if (i) {
                                    var u = this.bandwidth
                                        ? this.bandwidth() / 2
                                        : 0;
                                    return this.scale(r) + u;
                                }
                                return this.scale(r);
                            }
                        },
                    },
                    {
                        key: "isInRange",
                        value: function (r) {
                            var n = this.range(),
                                i = n[0],
                                a = n[n.length - 1];
                            return i <= a ? r >= i && r <= a : r >= a && r <= i;
                        },
                    },
                ],
                [
                    {
                        key: "create",
                        value: function (r) {
                            return new e(r);
                        },
                    },
                ]
            ),
            e
        );
    })();
xy.EPS = 1e-4;
var yl = function (t) {
    var r = Object.keys(t).reduce(function (n, i) {
        return rt(rt({}, n), {}, vl({}, i, xy.create(t[i])));
    }, {});
    return rt(
        rt({}, r),
        {},
        {
            apply: function (i) {
                var a =
                        arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : {},
                    o = a.bandAware,
                    s = a.position;
                return ij(i, function (u, l) {
                    return r[l].apply(u, { bandAware: o, position: s });
                });
            },
            isInRange: function (i) {
                return my(i, function (a, o) {
                    return r[o].isInRange(a);
                });
            },
        }
    );
};
function Uh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Hh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Uh(Object(r), !0).forEach(function (n) {
                  lj(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Uh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function lj(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function cj(e, t) {
    return pj(e) || dj(e, t) || hj(e, t) || fj();
}
function fj() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hj(e, t) {
    if (!!e) {
        if (typeof e == "string") return Wh(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Wh(e, t);
    }
}
function Wh(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function dj(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var o = e[Symbol.iterator](), s;
                !(n = (s = o.next()).done) &&
                (r.push(s.value), !(t && r.length === t));
                n = !0
            );
        } catch (u) {
            (i = !0), (a = u);
        } finally {
            try {
                !n && o.return != null && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return r;
    }
}
function pj(e) {
    if (Array.isArray(e)) return e;
}
var vj = function (t, r) {
        var n;
        return (
            K.isValidElement(t)
                ? (n = K.cloneElement(t, r))
                : X(t)
                ? (n = t(r))
                : (n = O("line", {
                      ...r,
                      className: "recharts-reference-line-line",
                  })),
            n
        );
    },
    yj = function (t, r, n, i, a) {
        var o = a.viewBox,
            s = o.x,
            u = o.y,
            l = o.width,
            c = o.height,
            f = a.position;
        if (n) {
            var d = a.y,
                y = a.yAxis.orientation,
                p = t.y.apply(d, { position: f });
            if (ft(a, "discard") && !t.y.isInRange(p)) return null;
            var h = [
                { x: s + l, y: p },
                { x: s, y: p },
            ];
            return y === "left" ? h.reverse() : h;
        }
        if (r) {
            var v = a.x,
                g = a.xAxis.orientation,
                _ = t.x.apply(v, { position: f });
            if (ft(a, "discard") && !t.x.isInRange(_)) return null;
            var b = [
                { x: _, y: u + c },
                { x: _, y: u },
            ];
            return g === "top" ? b.reverse() : b;
        }
        if (i) {
            var m = a.segment,
                x = m.map(function (w) {
                    return t.apply(w, { position: f });
                });
            return ft(a, "discard") &&
                BL(x, function (w) {
                    return !t.isInRange(w);
                })
                ? null
                : x;
        }
        return null;
    };
function gl(e) {
    var t = e.x,
        r = e.y,
        n = e.segment,
        i = e.xAxis,
        a = e.yAxis,
        o = e.shape,
        s = e.className,
        u = e.alwaysShow,
        l = e.clipPathId;
    wr(
        u === void 0,
        'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
    );
    var c = yl({ x: i.scale, y: a.scale }),
        f = we(t),
        d = we(r),
        y = n && n.length === 2,
        p = yj(c, f, d, y, e);
    if (!p) return null;
    var h = cj(p, 2),
        v = h[0],
        g = v.x,
        _ = v.y,
        b = h[1],
        m = b.x,
        x = b.y,
        w = ft(e, "hidden") ? "url(#".concat(l, ")") : void 0,
        S = Hh(
            Hh({ clipPath: w }, ae(e, !0)),
            {},
            { x1: g, y1: _, x2: m, y2: x }
        );
    return L(je, {
        className: pe("recharts-reference-line", s),
        children: [
            vj(o, S),
            ke.renderCallByParent(e, uj({ x1: g, y1: _, x2: m, y2: x })),
        ],
    });
}
gl.displayName = "ReferenceLine";
gl.defaultProps = {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle",
};
function zh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Gh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? zh(Object(r), !0).forEach(function (n) {
                  gj(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : zh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function gj(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
var mj = function (t) {
    var r = t.x,
        n = t.y,
        i = t.xAxis,
        a = t.yAxis,
        o = yl({ x: i.scale, y: a.scale }),
        s = o.apply({ x: r, y: n }, { bandAware: !0 });
    return ft(t, "discard") && !o.isInRange(s) ? null : s;
};
function Rn(e) {
    var t = e.x,
        r = e.y,
        n = e.r,
        i = e.alwaysShow,
        a = e.clipPathId,
        o = we(t),
        s = we(r);
    if (
        (wr(
            i === void 0,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
        ),
        !o || !s)
    )
        return null;
    var u = mj(e);
    if (!u) return null;
    var l = u.x,
        c = u.y,
        f = e.shape,
        d = e.className,
        y = ft(e, "hidden") ? "url(#".concat(a, ")") : void 0,
        p = Gh(Gh({ clipPath: y }, ae(e, !0)), {}, { cx: l, cy: c });
    return L(je, {
        className: pe("recharts-reference-dot", d),
        children: [
            Rn.renderDot(f, p),
            ke.renderCallByParent(e, {
                x: l - n,
                y: c - n,
                width: 2 * n,
                height: 2 * n,
            }),
        ],
    });
}
Rn.displayName = "ReferenceDot";
Rn.defaultProps = {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#fff",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
};
Rn.renderDot = function (e, t) {
    var r;
    return (
        K.isValidElement(e)
            ? (r = K.cloneElement(e, t))
            : X(e)
            ? (r = e(t))
            : (r = O(pl, {
                  ...t,
                  cx: t.cx,
                  cy: t.cy,
                  className: "recharts-reference-dot-dot",
              })),
        r
    );
};
function qh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Vh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? qh(Object(r), !0).forEach(function (n) {
                  bj(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : qh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function bj(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
var xj = function (t, r, n, i, a) {
    var o = a.x1,
        s = a.x2,
        u = a.y1,
        l = a.y2,
        c = a.xAxis,
        f = a.yAxis;
    if (!c || !f) return null;
    var d = yl({ x: c.scale, y: f.scale }),
        y = {
            x: t ? d.x.apply(o, { position: "start" }) : d.x.rangeMin,
            y: n ? d.y.apply(u, { position: "start" }) : d.y.rangeMin,
        },
        p = {
            x: r ? d.x.apply(s, { position: "end" }) : d.x.rangeMax,
            y: i ? d.y.apply(l, { position: "end" }) : d.y.rangeMax,
        };
    return ft(a, "discard") && (!d.isInRange(y) || !d.isInRange(p))
        ? null
        : by(y, p);
};
function Dn(e) {
    var t = e.x1,
        r = e.x2,
        n = e.y1,
        i = e.y2,
        a = e.className,
        o = e.alwaysShow,
        s = e.clipPathId;
    wr(
        o === void 0,
        'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
    );
    var u = we(t),
        l = we(r),
        c = we(n),
        f = we(i),
        d = e.shape;
    if (!u && !l && !c && !f && !d) return null;
    var y = xj(u, l, c, f, e);
    if (!y && !d) return null;
    var p = ft(e, "hidden") ? "url(#".concat(s, ")") : void 0;
    return L(je, {
        className: pe("recharts-reference-area", a),
        children: [
            Dn.renderRect(d, Vh(Vh({ clipPath: p }, ae(e, !0)), y)),
            ke.renderCallByParent(e, y),
        ],
    });
}
Dn.displayName = "ReferenceArea";
Dn.defaultProps = {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#ccc",
    fillOpacity: 0.5,
    stroke: "none",
    strokeWidth: 1,
};
Dn.renderRect = function (e, t) {
    var r;
    return (
        K.isValidElement(e)
            ? (r = K.cloneElement(e, t))
            : X(e)
            ? (r = e(t))
            : (r = O(dl, { ...t, className: "recharts-reference-area-rect" })),
        r
    );
};
function hi(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (hi = function (r) {
                  return typeof r;
              })
            : (hi = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        hi(e)
    );
}
function Yh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function ne(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Yh(Object(r), !0).forEach(function (n) {
                  wj(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Yh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function wj(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Do(e, t) {
    if (e == null) return {};
    var r = _j(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(e, n) ||
                        (r[n] = e[n]));
    }
    return r;
}
function _j(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
function Sj(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function Xh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function Oj(e, t, r) {
    return t && Xh(e.prototype, t), r && Xh(e, r), e;
}
function Aj(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && ru(e, t);
}
function ru(e, t) {
    return (
        (ru =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        ru(e, t)
    );
}
function $j(e) {
    var t = Ej();
    return function () {
        var n = na(e),
            i;
        if (t) {
            var a = na(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return Tj(this, i);
    };
}
function Tj(e, t) {
    return t && (hi(t) === "object" || typeof t == "function") ? t : Pj(e);
}
function Pj(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Ej() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function na(e) {
    return (
        (na = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        na(e)
    );
}
var Zt = (function (e) {
    Aj(r, e);
    var t = $j(r);
    function r(n) {
        var i;
        return (
            Sj(this, r),
            (i = t.call(this, n)),
            (i.layerReference = void 0),
            (i.state = { fontSize: "", letterSpacing: "" }),
            i
        );
    }
    return (
        Oj(
            r,
            [
                {
                    key: "shouldComponentUpdate",
                    value: function (i, a) {
                        var o = i.viewBox,
                            s = Do(i, ["viewBox"]),
                            u = this.props,
                            l = u.viewBox,
                            c = Do(u, ["viewBox"]);
                        return !_r(o, l) || !_r(s, c) || !_r(a, this.state);
                    },
                },
                {
                    key: "componentDidMount",
                    value: function () {
                        var i = this.layerReference;
                        if (!!i) {
                            var a = i.getElementsByClassName(
                                "recharts-cartesian-axis-tick-value"
                            )[0];
                            a &&
                                this.setState({
                                    fontSize:
                                        window.getComputedStyle(a).fontSize,
                                    letterSpacing:
                                        window.getComputedStyle(a)
                                            .letterSpacing,
                                });
                        }
                    },
                },
                {
                    key: "getTickLineCoord",
                    value: function (i) {
                        var a = this.props,
                            o = a.x,
                            s = a.y,
                            u = a.width,
                            l = a.height,
                            c = a.orientation,
                            f = a.tickSize,
                            d = a.mirror,
                            y = a.tickMargin,
                            p,
                            h,
                            v,
                            g,
                            _,
                            b,
                            m = d ? -1 : 1,
                            x = i.tickSize || f,
                            w = U(i.tickCoord) ? i.tickCoord : i.coordinate;
                        switch (c) {
                            case "top":
                                (p = h = i.coordinate),
                                    (g = s + +!d * l),
                                    (v = g - m * x),
                                    (b = v - m * y),
                                    (_ = w);
                                break;
                            case "left":
                                (v = g = i.coordinate),
                                    (h = o + +!d * u),
                                    (p = h - m * x),
                                    (_ = p - m * y),
                                    (b = w);
                                break;
                            case "right":
                                (v = g = i.coordinate),
                                    (h = o + +d * u),
                                    (p = h + m * x),
                                    (_ = p + m * y),
                                    (b = w);
                                break;
                            default:
                                (p = h = i.coordinate),
                                    (g = s + +d * l),
                                    (v = g + m * x),
                                    (b = v + m * y),
                                    (_ = w);
                                break;
                        }
                        return {
                            line: { x1: p, y1: v, x2: h, y2: g },
                            tick: { x: _, y: b },
                        };
                    },
                },
                {
                    key: "getTickTextAnchor",
                    value: function () {
                        var i = this.props,
                            a = i.orientation,
                            o = i.mirror,
                            s;
                        switch (a) {
                            case "left":
                                s = o ? "start" : "end";
                                break;
                            case "right":
                                s = o ? "end" : "start";
                                break;
                            default:
                                s = "middle";
                                break;
                        }
                        return s;
                    },
                },
                {
                    key: "getTickVerticalAnchor",
                    value: function () {
                        var i = this.props,
                            a = i.orientation,
                            o = i.mirror,
                            s = "end";
                        switch (a) {
                            case "left":
                            case "right":
                                s = "middle";
                                break;
                            case "top":
                                s = o ? "start" : "end";
                                break;
                            default:
                                s = o ? "end" : "start";
                                break;
                        }
                        return s;
                    },
                },
                {
                    key: "renderAxisLine",
                    value: function () {
                        var i = this.props,
                            a = i.x,
                            o = i.y,
                            s = i.width,
                            u = i.height,
                            l = i.orientation,
                            c = i.mirror,
                            f = i.axisLine,
                            d = ne(
                                ne(ne({}, ae(this.props)), ae(f)),
                                {},
                                { fill: "none" }
                            );
                        if (l === "top" || l === "bottom") {
                            var y = +(
                                (l === "top" && !c) ||
                                (l === "bottom" && c)
                            );
                            d = ne(
                                ne({}, d),
                                {},
                                {
                                    x1: a,
                                    y1: o + y * u,
                                    x2: a + s,
                                    y2: o + y * u,
                                }
                            );
                        } else {
                            var p = +(
                                (l === "left" && !c) ||
                                (l === "right" && c)
                            );
                            d = ne(
                                ne({}, d),
                                {},
                                {
                                    x1: a + p * s,
                                    y1: o,
                                    x2: a + p * s,
                                    y2: o + u,
                                }
                            );
                        }
                        return O("line", {
                            ...d,
                            className: pe(
                                "recharts-cartesian-axis-line",
                                Ae(f, "className")
                            ),
                        });
                    },
                },
                {
                    key: "renderTicks",
                    value: function (i, a, o) {
                        var s = this,
                            u = this.props,
                            l = u.tickLine,
                            c = u.stroke,
                            f = u.tick,
                            d = u.tickFormatter,
                            y = u.unit,
                            p = r.getTicks(
                                ne(ne({}, this.props), {}, { ticks: i }),
                                a,
                                o
                            ),
                            h = this.getTickTextAnchor(),
                            v = this.getTickVerticalAnchor(),
                            g = ae(this.props),
                            _ = ae(f),
                            b = ne(ne({}, g), {}, { fill: "none" }, ae(l)),
                            m = p.map(function (x, w) {
                                var S = s.getTickLineCoord(x),
                                    A = S.line,
                                    $ = S.tick,
                                    E = ne(
                                        ne(
                                            ne(
                                                ne(
                                                    {
                                                        textAnchor: h,
                                                        verticalAnchor: v,
                                                    },
                                                    g
                                                ),
                                                {},
                                                { stroke: "none", fill: c },
                                                _
                                            ),
                                            $
                                        ),
                                        {},
                                        {
                                            index: w,
                                            payload: x,
                                            visibleTicksCount: p.length,
                                            tickFormatter: d,
                                        }
                                    );
                                return L(
                                    je,
                                    {
                                        className:
                                            "recharts-cartesian-axis-tick",
                                        ...jd(s.props, x, w),
                                        children: [
                                            l &&
                                                O("line", {
                                                    ...b,
                                                    ...A,
                                                    className: pe(
                                                        "recharts-cartesian-axis-tick-line",
                                                        Ae(l, "className")
                                                    ),
                                                }),
                                            f &&
                                                r.renderTickItem(
                                                    f,
                                                    E,
                                                    ""
                                                        .concat(
                                                            X(d)
                                                                ? d(x.value, w)
                                                                : x.value
                                                        )
                                                        .concat(y || "")
                                                ),
                                        ],
                                    },
                                    "tick-".concat(w)
                                );
                            });
                        return O("g", {
                            className: "recharts-cartesian-axis-ticks",
                            children: m,
                        });
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var i = this,
                            a = this.props,
                            o = a.axisLine,
                            s = a.width,
                            u = a.height,
                            l = a.ticksGenerator,
                            c = a.className,
                            f = a.hide;
                        if (f) return null;
                        var d = this.props,
                            y = d.ticks,
                            p = Do(d, ["ticks"]),
                            h = y;
                        return (
                            X(l) &&
                                (h = y && y.length > 0 ? l(this.props) : l(p)),
                            s <= 0 || u <= 0 || !h || !h.length
                                ? null
                                : L(je, {
                                      className: pe(
                                          "recharts-cartesian-axis",
                                          c
                                      ),
                                      ref: function (g) {
                                          i.layerReference = g;
                                      },
                                      children: [
                                          o && this.renderAxisLine(),
                                          this.renderTicks(
                                              h,
                                              this.state.fontSize,
                                              this.state.letterSpacing
                                          ),
                                          ke.renderCallByParent(this.props),
                                      ],
                                  })
                        );
                    },
                },
            ],
            [
                {
                    key: "getTicks",
                    value: function (i, a, o) {
                        var s = i.tick,
                            u = i.ticks,
                            l = i.viewBox,
                            c = i.minTickGap,
                            f = i.orientation,
                            d = i.interval,
                            y = i.tickFormatter,
                            p = i.unit;
                        return !u || !u.length || !s
                            ? []
                            : U(d) || Rt.isSsr
                            ? r.getNumberIntervalTicks(
                                  u,
                                  typeof d == "number" && U(d) ? d : 0
                              )
                            : d === "preserveStartEnd"
                            ? r.getTicksStart(
                                  {
                                      ticks: u,
                                      tickFormatter: y,
                                      viewBox: l,
                                      orientation: f,
                                      minTickGap: c,
                                      unit: p,
                                      fontSize: a,
                                      letterSpacing: o,
                                  },
                                  !0
                              )
                            : d === "preserveStart"
                            ? r.getTicksStart({
                                  ticks: u,
                                  tickFormatter: y,
                                  viewBox: l,
                                  orientation: f,
                                  minTickGap: c,
                                  unit: p,
                                  fontSize: a,
                                  letterSpacing: o,
                              })
                            : r.getTicksEnd({
                                  ticks: u,
                                  tickFormatter: y,
                                  viewBox: l,
                                  orientation: f,
                                  minTickGap: c,
                                  unit: p,
                                  fontSize: a,
                                  letterSpacing: o,
                              });
                    },
                },
                {
                    key: "getNumberIntervalTicks",
                    value: function (i, a) {
                        return i.filter(function (o, s) {
                            return s % (a + 1) === 0;
                        });
                    },
                },
                {
                    key: "getTicksStart",
                    value: function (i, a) {
                        var o = i.ticks,
                            s = i.tickFormatter,
                            u = i.viewBox,
                            l = i.orientation,
                            c = i.minTickGap,
                            f = i.unit,
                            d = i.fontSize,
                            y = i.letterSpacing,
                            p = u.x,
                            h = u.y,
                            v = u.width,
                            g = u.height,
                            _ =
                                l === "top" || l === "bottom"
                                    ? "width"
                                    : "height",
                            b = (o || []).slice(),
                            m =
                                f && _ === "width"
                                    ? Jt(f, { fontSize: d, letterSpacing: y })[
                                          _
                                      ]
                                    : 0,
                            x = b.length,
                            w =
                                x >= 2
                                    ? ut(b[1].coordinate - b[0].coordinate)
                                    : 1,
                            S,
                            A;
                        if (
                            (w === 1
                                ? ((S = _ === "width" ? p : h),
                                  (A = _ === "width" ? p + v : h + g))
                                : ((S = _ === "width" ? p + v : h + g),
                                  (A = _ === "width" ? p : h)),
                            a)
                        ) {
                            var $ = o[x - 1],
                                E = X(s) ? s($.value, x - 1) : $.value,
                                P =
                                    Jt(E, { fontSize: d, letterSpacing: y })[
                                        _
                                    ] + m,
                                M = w * ($.coordinate + (w * P) / 2 - A);
                            b[x - 1] = $ = ne(
                                ne({}, $),
                                {},
                                {
                                    tickCoord:
                                        M > 0
                                            ? $.coordinate - M * w
                                            : $.coordinate,
                                }
                            );
                            var k =
                                w * ($.tickCoord - (w * P) / 2 - S) >= 0 &&
                                w * ($.tickCoord + (w * P) / 2 - A) <= 0;
                            k &&
                                ((A = $.tickCoord - w * (P / 2 + c)),
                                (b[x - 1] = ne(ne({}, $), {}, { isShow: !0 })));
                        }
                        for (var I = a ? x - 1 : x, R = 0; R < I; R++) {
                            var C = b[R],
                                B = X(s) ? s(C.value, R) : C.value,
                                j =
                                    Jt(B, { fontSize: d, letterSpacing: y })[
                                        _
                                    ] + m;
                            if (R === 0) {
                                var H = w * (C.coordinate - (w * j) / 2 - S);
                                b[R] = C = ne(
                                    ne({}, C),
                                    {},
                                    {
                                        tickCoord:
                                            H < 0
                                                ? C.coordinate - H * w
                                                : C.coordinate,
                                    }
                                );
                            } else
                                b[R] = C = ne(
                                    ne({}, C),
                                    {},
                                    { tickCoord: C.coordinate }
                                );
                            var G =
                                w * (C.tickCoord - (w * j) / 2 - S) >= 0 &&
                                w * (C.tickCoord + (w * j) / 2 - A) <= 0;
                            G &&
                                ((S = C.tickCoord + w * (j / 2 + c)),
                                (b[R] = ne(ne({}, C), {}, { isShow: !0 })));
                        }
                        return b.filter(function (Z) {
                            return Z.isShow;
                        });
                    },
                },
                {
                    key: "getTicksEnd",
                    value: function (i) {
                        var a = i.ticks,
                            o = i.tickFormatter,
                            s = i.viewBox,
                            u = i.orientation,
                            l = i.minTickGap,
                            c = i.unit,
                            f = i.fontSize,
                            d = i.letterSpacing,
                            y = s.x,
                            p = s.y,
                            h = s.width,
                            v = s.height,
                            g =
                                u === "top" || u === "bottom"
                                    ? "width"
                                    : "height",
                            _ =
                                c && g === "width"
                                    ? Jt(c, { fontSize: f, letterSpacing: d })[
                                          g
                                      ]
                                    : 0,
                            b = (a || []).slice(),
                            m = b.length,
                            x =
                                m >= 2
                                    ? ut(b[1].coordinate - b[0].coordinate)
                                    : 1,
                            w,
                            S;
                        x === 1
                            ? ((w = g === "width" ? y : p),
                              (S = g === "width" ? y + h : p + v))
                            : ((w = g === "width" ? y + h : p + v),
                              (S = g === "width" ? y : p));
                        for (var A = m - 1; A >= 0; A--) {
                            var $ = b[A],
                                E = X(o) ? o($.value, m - A - 1) : $.value,
                                P =
                                    Jt(E, { fontSize: f, letterSpacing: d })[
                                        g
                                    ] + _;
                            if (A === m - 1) {
                                var M = x * ($.coordinate + (x * P) / 2 - S);
                                b[A] = $ = ne(
                                    ne({}, $),
                                    {},
                                    {
                                        tickCoord:
                                            M > 0
                                                ? $.coordinate - M * x
                                                : $.coordinate,
                                    }
                                );
                            } else
                                b[A] = $ = ne(
                                    ne({}, $),
                                    {},
                                    { tickCoord: $.coordinate }
                                );
                            var k =
                                x * ($.tickCoord - (x * P) / 2 - w) >= 0 &&
                                x * ($.tickCoord + (x * P) / 2 - S) <= 0;
                            k &&
                                ((S = $.tickCoord - x * (P / 2 + l)),
                                (b[A] = ne(ne({}, $), {}, { isShow: !0 })));
                        }
                        return b.filter(function (I) {
                            return I.isShow;
                        });
                    },
                },
                {
                    key: "renderTickItem",
                    value: function (i, a, o) {
                        var s;
                        return (
                            K.isValidElement(i)
                                ? (s = K.cloneElement(i, a))
                                : X(i)
                                ? (s = i(a))
                                : (s = O(vn, {
                                      ...a,
                                      className:
                                          "recharts-cartesian-axis-tick-value",
                                      children: o,
                                  })),
                            s
                        );
                    },
                },
            ]
        ),
        r
    );
})(T.exports.Component);
Zt.displayName = "CartesianAxis";
Zt.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: { x: 0, y: 0, width: 0, height: 0 },
    orientation: "bottom",
    ticks: [],
    stroke: "#666",
    tickLine: !0,
    axisLine: !0,
    tick: !0,
    mirror: !1,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd",
};
function di(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (di = function (r) {
                  return typeof r;
              })
            : (di = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        di(e)
    );
}
function Mj(e, t) {
    if (e == null) return {};
    var r = kj(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(e, n) ||
                        (r[n] = e[n]));
    }
    return r;
}
function kj(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
function Kh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ct(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Kh(Object(r), !0).forEach(function (n) {
                  Cj(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Kh(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function Cj(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Ij(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function Jh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function Nj(e, t, r) {
    return t && Jh(e.prototype, t), r && Jh(e, r), e;
}
function Rj(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && nu(e, t);
}
function nu(e, t) {
    return (
        (nu =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        nu(e, t)
    );
}
function Dj(e) {
    var t = Fj();
    return function () {
        var n = ia(e),
            i;
        if (t) {
            var a = ia(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return Lj(this, i);
    };
}
function Lj(e, t) {
    return t && (di(t) === "object" || typeof t == "function") ? t : jj(e);
}
function jj(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Fj() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function ia(e) {
    return (
        (ia = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        ia(e)
    );
}
var Bt = (function (e) {
    Rj(r, e);
    var t = Dj(r);
    function r() {
        var n;
        Ij(this, r);
        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
            a[o] = arguments[o];
        return (
            (n = t.call.apply(t, [this].concat(a))),
            (n.state = { isAnimationFinished: !0 }),
            (n.id = Ta("recharts-area-")),
            (n.handleAnimationEnd = function () {
                var s = n.props.onAnimationEnd;
                n.setState({ isAnimationFinished: !0 }), X(s) && s();
            }),
            (n.handleAnimationStart = function () {
                var s = n.props.onAnimationStart;
                n.setState({ isAnimationFinished: !1 }), X(s) && s();
            }),
            n
        );
    }
    return (
        Nj(
            r,
            [
                {
                    key: "renderDots",
                    value: function (i, a) {
                        var o = this.props.isAnimationActive,
                            s = this.state.isAnimationFinished;
                        if (o && !s) return null;
                        var u = this.props,
                            l = u.dot,
                            c = u.points,
                            f = u.dataKey,
                            d = ae(this.props),
                            y = ae(l, !0),
                            p = c.map(function (v, g) {
                                var _ = Ct(
                                    Ct(
                                        Ct({ key: "dot-".concat(g), r: 3 }, d),
                                        y
                                    ),
                                    {},
                                    {
                                        dataKey: f,
                                        cx: v.x,
                                        cy: v.y,
                                        index: g,
                                        value: v.value,
                                        payload: v.payload,
                                    }
                                );
                                return r.renderDotItem(l, _);
                            }),
                            h = {
                                clipPath: i
                                    ? "url(#clipPath-".concat(a, ")")
                                    : null,
                            };
                        return O(je, {
                            className: "recharts-area-dots",
                            ...h,
                            children: p,
                        });
                    },
                },
                {
                    key: "renderHorizontalRect",
                    value: function (i) {
                        var a = this.props,
                            o = a.baseLine,
                            s = a.points,
                            u = a.strokeWidth,
                            l = s[0].x,
                            c = s[s.length - 1].x,
                            f = i * Math.abs(l - c),
                            d = Nt(
                                s.map(function (y) {
                                    return y.y || 0;
                                })
                            );
                        return (
                            U(o) && typeof o == "number"
                                ? (d = Math.max(o, d))
                                : o &&
                                  te(o) &&
                                  o.length &&
                                  (d = Math.max(
                                      Nt(
                                          o.map(function (y) {
                                              return y.y || 0;
                                          })
                                      ),
                                      d
                                  )),
                            U(d)
                                ? O("rect", {
                                      x: l < c ? l : l - f,
                                      y: 0,
                                      width: f,
                                      height: Math.floor(
                                          d +
                                              (u
                                                  ? parseInt("".concat(u), 10)
                                                  : 1)
                                      ),
                                  })
                                : null
                        );
                    },
                },
                {
                    key: "renderVerticalRect",
                    value: function (i) {
                        var a = this.props,
                            o = a.baseLine,
                            s = a.points,
                            u = a.strokeWidth,
                            l = s[0].y,
                            c = s[s.length - 1].y,
                            f = i * Math.abs(l - c),
                            d = Nt(
                                s.map(function (y) {
                                    return y.x || 0;
                                })
                            );
                        return (
                            U(o) && typeof o == "number"
                                ? (d = Math.max(o, d))
                                : o &&
                                  te(o) &&
                                  o.length &&
                                  (d = Math.max(
                                      Nt(
                                          o.map(function (y) {
                                              return y.x || 0;
                                          })
                                      ),
                                      d
                                  )),
                            U(d)
                                ? O("rect", {
                                      x: 0,
                                      y: l < c ? l : l - f,
                                      width:
                                          d +
                                          (u ? parseInt("".concat(u), 10) : 1),
                                      height: Math.floor(f),
                                  })
                                : null
                        );
                    },
                },
                {
                    key: "renderClipRect",
                    value: function (i) {
                        var a = this.props.layout;
                        return a === "vertical"
                            ? this.renderVerticalRect(i)
                            : this.renderHorizontalRect(i);
                    },
                },
                {
                    key: "renderAreaStatically",
                    value: function (i, a, o, s) {
                        var u = this.props,
                            l = u.layout,
                            c = u.type,
                            f = u.stroke,
                            d = u.connectNulls,
                            y = u.isRange;
                        u.ref;
                        var p = Mj(u, [
                            "layout",
                            "type",
                            "stroke",
                            "connectNulls",
                            "isRange",
                            "ref",
                        ]);
                        return L(je, {
                            clipPath: o
                                ? "url(#clipPath-".concat(s, ")")
                                : null,
                            children: [
                                O(Ar, {
                                    ...ae(p, !0),
                                    points: i,
                                    connectNulls: d,
                                    type: c,
                                    baseLine: a,
                                    layout: l,
                                    stroke: "none",
                                    className: "recharts-area-area",
                                }),
                                f !== "none" &&
                                    O(Ar, {
                                        ...ae(this.props),
                                        className: "recharts-area-curve",
                                        layout: l,
                                        type: c,
                                        connectNulls: d,
                                        fill: "none",
                                        points: i,
                                    }),
                                f !== "none" &&
                                    y &&
                                    O(Ar, {
                                        ...ae(this.props),
                                        className: "recharts-area-curve",
                                        layout: l,
                                        type: c,
                                        connectNulls: d,
                                        fill: "none",
                                        points: a,
                                    }),
                            ],
                        });
                    },
                },
                {
                    key: "renderAreaWithAnimation",
                    value: function (i, a) {
                        var o = this,
                            s = this.props,
                            u = s.points,
                            l = s.baseLine,
                            c = s.isAnimationActive,
                            f = s.animationBegin,
                            d = s.animationDuration,
                            y = s.animationEasing,
                            p = s.animationId,
                            h = this.state,
                            v = h.prevPoints,
                            g = h.prevBaseLine;
                        return O(
                            Mr,
                            {
                                begin: f,
                                duration: d,
                                isActive: c,
                                easing: y,
                                from: { t: 0 },
                                to: { t: 1 },
                                onAnimationEnd: this.handleAnimationEnd,
                                onAnimationStart: this.handleAnimationStart,
                                children: function (_) {
                                    var b = _.t;
                                    if (v) {
                                        var m = v.length / u.length,
                                            x = u.map(function ($, E) {
                                                var P = Math.floor(E * m);
                                                if (v[P]) {
                                                    var M = v[P],
                                                        k = dr(M.x, $.x),
                                                        I = dr(M.y, $.y);
                                                    return Ct(
                                                        Ct({}, $),
                                                        {},
                                                        { x: k(b), y: I(b) }
                                                    );
                                                }
                                                return $;
                                            }),
                                            w;
                                        if (U(l) && typeof l == "number") {
                                            var S = dr(g, l);
                                            w = S(b);
                                        } else if (V(l) || Pn(l)) {
                                            var A = dr(g, 0);
                                            w = A(b);
                                        } else
                                            w = l.map(function ($, E) {
                                                var P = Math.floor(E * m);
                                                if (g[P]) {
                                                    var M = g[P],
                                                        k = dr(M.x, $.x),
                                                        I = dr(M.y, $.y);
                                                    return Ct(
                                                        Ct({}, $),
                                                        {},
                                                        { x: k(b), y: I(b) }
                                                    );
                                                }
                                                return $;
                                            });
                                        return o.renderAreaStatically(
                                            x,
                                            w,
                                            i,
                                            a
                                        );
                                    }
                                    return L(je, {
                                        children: [
                                            O("defs", {
                                                children: O("clipPath", {
                                                    id: "animationClipPath-".concat(
                                                        a
                                                    ),
                                                    children:
                                                        o.renderClipRect(b),
                                                }),
                                            }),
                                            O(je, {
                                                clipPath:
                                                    "url(#animationClipPath-".concat(
                                                        a,
                                                        ")"
                                                    ),
                                                children:
                                                    o.renderAreaStatically(
                                                        u,
                                                        l,
                                                        i,
                                                        a
                                                    ),
                                            }),
                                        ],
                                    });
                                },
                            },
                            "area-".concat(p)
                        );
                    },
                },
                {
                    key: "renderArea",
                    value: function (i, a) {
                        var o = this.props,
                            s = o.points,
                            u = o.baseLine,
                            l = o.isAnimationActive,
                            c = this.state,
                            f = c.prevPoints,
                            d = c.prevBaseLine,
                            y = c.totalLength;
                        return l &&
                            s &&
                            s.length &&
                            ((!f && y > 0) || !Ms(f, s) || !Ms(d, u))
                            ? this.renderAreaWithAnimation(i, a)
                            : this.renderAreaStatically(s, u, i, a);
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var i = this.props,
                            a = i.hide,
                            o = i.dot,
                            s = i.points,
                            u = i.className,
                            l = i.top,
                            c = i.left,
                            f = i.xAxis,
                            d = i.yAxis,
                            y = i.width,
                            p = i.height,
                            h = i.isAnimationActive,
                            v = i.id;
                        if (a || !s || !s.length) return null;
                        var g = this.state.isAnimationFinished,
                            _ = s.length === 1,
                            b = pe("recharts-area", u),
                            m =
                                (f && f.allowDataOverflow) ||
                                (d && d.allowDataOverflow),
                            x = V(v) ? this.id : v;
                        return L(je, {
                            className: b,
                            children: [
                                m
                                    ? O("defs", {
                                          children: O("clipPath", {
                                              id: "clipPath-".concat(x),
                                              children: O("rect", {
                                                  x: c,
                                                  y: l,
                                                  width: y,
                                                  height: Math.floor(p),
                                              }),
                                          }),
                                      })
                                    : null,
                                _ ? null : this.renderArea(m, x),
                                (o || _) && this.renderDots(m, x),
                                (!h || g) &&
                                    Lt.renderCallByParent(this.props, s),
                            ],
                        });
                    },
                },
            ],
            [
                {
                    key: "getDerivedStateFromProps",
                    value: function (i, a) {
                        return i.animationId !== a.prevAnimationId
                            ? {
                                  prevAnimationId: i.animationId,
                                  curPoints: i.points,
                                  curBaseLine: i.baseLine,
                                  prevPoints: a.curPoints,
                                  prevBaseLine: a.curBaseLine,
                              }
                            : i.points !== a.curPoints ||
                              i.baseLine !== a.curBaseLine
                            ? { curPoints: i.points, curBaseLine: i.baseLine }
                            : null;
                    },
                },
            ]
        ),
        r
    );
})(T.exports.PureComponent);
Bt.displayName = "Area";
Bt.defaultProps = {
    stroke: "#3182bd",
    fill: "#3182bd",
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: "line",
    connectNulls: !1,
    points: [],
    dot: !1,
    activeDot: !0,
    hide: !1,
    isAnimationActive: !Rt.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
};
Bt.getBaseValue = function (e, t, r, n) {
    var i = e.layout,
        a = t.props.baseValue;
    if (U(a) && typeof a == "number") return a;
    var o = i === "horizontal" ? n : r,
        s = o.scale.domain();
    if (o.type === "number") {
        var u = Math.max(s[0], s[1]),
            l = Math.min(s[0], s[1]);
        return a === "dataMin"
            ? l
            : a === "dataMax" || u < 0
            ? u
            : Math.max(Math.min(s[0], s[1]), 0);
    }
    return a === "dataMin" ? s[0] : a === "dataMax" ? s[1] : s[0];
};
Bt.getComposedData = function (e) {
    var t = e.props,
        r = e.item,
        n = e.xAxis,
        i = e.yAxis,
        a = e.xAxisTicks,
        o = e.yAxisTicks,
        s = e.bandSize,
        u = e.dataKey,
        l = e.stackedData,
        c = e.dataStartIndex,
        f = e.displayedData,
        d = e.offset,
        y = t.layout,
        p = l && l.length,
        h = Bt.getBaseValue(t, r, n, i),
        v = !1,
        g = f.map(function (b, m) {
            var x = At(b, u),
                w;
            p ? (w = l[c + m]) : ((w = x), te(w) ? (v = !0) : (w = [h, w]));
            var S = V(w[1]) || (p && V(x));
            return y === "horizontal"
                ? {
                      x: dh({
                          axis: n,
                          ticks: a,
                          bandSize: s,
                          entry: b,
                          index: m,
                      }),
                      y: S ? null : i.scale(w[1]),
                      value: w,
                      payload: b,
                  }
                : {
                      x: S ? null : n.scale(w[1]),
                      y: dh({
                          axis: i,
                          ticks: o,
                          bandSize: s,
                          entry: b,
                          index: m,
                      }),
                      value: w,
                      payload: b,
                  };
        }),
        _;
    return (
        p || v
            ? (_ = g.map(function (b) {
                  return y === "horizontal"
                      ? {
                            x: b.x,
                            y:
                                !V(Ae(b, "value[0]")) && !V(Ae(b, "y"))
                                    ? i.scale(Ae(b, "value[0]"))
                                    : null,
                        }
                      : {
                            x: V(Ae(b, "value[0]"))
                                ? null
                                : n.scale(Ae(b, "value[0]")),
                            y: b.y,
                        };
              }))
            : y === "horizontal"
            ? (_ = i.scale(h))
            : (_ = n.scale(h)),
        Ct({ points: g, baseLine: _, layout: y, isRange: v }, d)
    );
};
Bt.renderDotItem = function (e, t) {
    var r;
    return (
        K.isValidElement(e)
            ? (r = K.cloneElement(e, t))
            : X(e)
            ? (r = e(t))
            : (r = O(pl, { ...t, className: "recharts-area-dot" })),
        r
    );
};
var ml = function () {
    return null;
};
ml.displayName = "XAxis";
ml.defaultProps = {
    allowDecimals: !0,
    hide: !1,
    orientation: "bottom",
    width: 0,
    height: 30,
    mirror: !1,
    xAxisId: 0,
    tickCount: 5,
    type: "category",
    domain: [0, "auto"],
    padding: { left: 0, right: 0 },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1,
    allowDuplicatedCategory: !0,
};
var bl = function () {
    return null;
};
bl.displayName = "YAxis";
bl.defaultProps = {
    allowDuplicatedCategory: !0,
    allowDecimals: !0,
    hide: !1,
    orientation: "left",
    width: 60,
    height: 0,
    mirror: !1,
    yAxisId: 0,
    tickCount: 5,
    type: "number",
    domain: [0, "auto"],
    padding: { top: 0, bottom: 0 },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1,
};
var Bj = Wt,
    Uj = Tn,
    Hj = xa;
function Wj(e) {
    return function (t, r, n) {
        var i = Object(t);
        if (!Uj(t)) {
            var a = Bj(r);
            (t = Hj(t)),
                (r = function (s) {
                    return a(i[s], s, i);
                });
        }
        var o = e(t, r, n);
        return o > -1 ? i[a ? t[o] : o] : void 0;
    };
}
var zj = Wj,
    Gj = yy;
function qj(e) {
    var t = Gj(e),
        r = t % 1;
    return t === t ? (r ? t - r : t) : 0;
}
var Vj = qj,
    Yj = op,
    Xj = Wt,
    Kj = Vj,
    Jj = Math.max;
function Zj(e, t, r) {
    var n = e == null ? 0 : e.length;
    if (!n) return -1;
    var i = r == null ? 0 : Kj(r);
    return i < 0 && (i = Jj(n + i, 0)), Yj(e, Xj(t), i);
}
var Qj = Zj,
    e3 = zj,
    t3 = Qj,
    r3 = e3(t3),
    n3 = r3,
    i3 = Bp,
    a3 = Ge,
    o3 = "Expected a function";
function s3(e, t, r) {
    var n = !0,
        i = !0;
    if (typeof e != "function") throw new TypeError(o3);
    return (
        a3(r) &&
            ((n = "leading" in r ? !!r.leading : n),
            (i = "trailing" in r ? !!r.trailing : i)),
        i3(e, t, { leading: n, maxWait: t, trailing: i })
    );
}
var u3 = s3,
    l3 = Ut,
    c3 = Ht,
    f3 = "[object Boolean]";
function h3(e) {
    return e === !0 || e === !1 || (c3(e) && l3(e) == f3);
}
var d3 = h3,
    iu = function (t, r, n, i, a) {
        var o = St(t, gl.displayName),
            s = St(t, Rn.displayName),
            u = o.concat(s),
            l = St(t, Dn.displayName),
            c = "".concat(i, "Id"),
            f = i[0],
            d = r;
        if (
            (u.length &&
                (d = u.reduce(function (h, v) {
                    if (
                        v.props[c] === n &&
                        ft(v.props, "extendDomain") &&
                        U(v.props[f])
                    ) {
                        var g = v.props[f];
                        return [Math.min(h[0], g), Math.max(h[1], g)];
                    }
                    return h;
                }, d)),
            l.length)
        ) {
            var y = "".concat(f, "1"),
                p = "".concat(f, "2");
            d = l.reduce(function (h, v) {
                if (
                    v.props[c] === n &&
                    ft(v.props, "extendDomain") &&
                    U(v.props[y]) &&
                    U(v.props[p])
                ) {
                    var g = v.props[y],
                        _ = v.props[p];
                    return [Math.min(h[0], g, _), Math.max(h[1], g, _)];
                }
                return h;
            }, d);
        }
        return (
            a &&
                a.length &&
                (d = a.reduce(function (h, v) {
                    return U(v) ? [Math.min(h[0], v), Math.max(h[1], v)] : h;
                }, d)),
            d
        );
    },
    wy = { exports: {} };
(function (e) {
    var t = Object.prototype.hasOwnProperty,
        r = "~";
    function n() {}
    Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
    function i(u, l, c) {
        (this.fn = u), (this.context = l), (this.once = c || !1);
    }
    function a(u, l, c, f, d) {
        if (typeof c != "function")
            throw new TypeError("The listener must be a function");
        var y = new i(c, f || u, d),
            p = r ? r + l : l;
        return (
            u._events[p]
                ? u._events[p].fn
                    ? (u._events[p] = [u._events[p], y])
                    : u._events[p].push(y)
                : ((u._events[p] = y), u._eventsCount++),
            u
        );
    }
    function o(u, l) {
        --u._eventsCount === 0 ? (u._events = new n()) : delete u._events[l];
    }
    function s() {
        (this._events = new n()), (this._eventsCount = 0);
    }
    (s.prototype.eventNames = function () {
        var l = [],
            c,
            f;
        if (this._eventsCount === 0) return l;
        for (f in (c = this._events))
            t.call(c, f) && l.push(r ? f.slice(1) : f);
        return Object.getOwnPropertySymbols
            ? l.concat(Object.getOwnPropertySymbols(c))
            : l;
    }),
        (s.prototype.listeners = function (l) {
            var c = r ? r + l : l,
                f = this._events[c];
            if (!f) return [];
            if (f.fn) return [f.fn];
            for (var d = 0, y = f.length, p = new Array(y); d < y; d++)
                p[d] = f[d].fn;
            return p;
        }),
        (s.prototype.listenerCount = function (l) {
            var c = r ? r + l : l,
                f = this._events[c];
            return f ? (f.fn ? 1 : f.length) : 0;
        }),
        (s.prototype.emit = function (l, c, f, d, y, p) {
            var h = r ? r + l : l;
            if (!this._events[h]) return !1;
            var v = this._events[h],
                g = arguments.length,
                _,
                b;
            if (v.fn) {
                switch (
                    (v.once && this.removeListener(l, v.fn, void 0, !0), g)
                ) {
                    case 1:
                        return v.fn.call(v.context), !0;
                    case 2:
                        return v.fn.call(v.context, c), !0;
                    case 3:
                        return v.fn.call(v.context, c, f), !0;
                    case 4:
                        return v.fn.call(v.context, c, f, d), !0;
                    case 5:
                        return v.fn.call(v.context, c, f, d, y), !0;
                    case 6:
                        return v.fn.call(v.context, c, f, d, y, p), !0;
                }
                for (b = 1, _ = new Array(g - 1); b < g; b++)
                    _[b - 1] = arguments[b];
                v.fn.apply(v.context, _);
            } else {
                var m = v.length,
                    x;
                for (b = 0; b < m; b++)
                    switch (
                        (v[b].once &&
                            this.removeListener(l, v[b].fn, void 0, !0),
                        g)
                    ) {
                        case 1:
                            v[b].fn.call(v[b].context);
                            break;
                        case 2:
                            v[b].fn.call(v[b].context, c);
                            break;
                        case 3:
                            v[b].fn.call(v[b].context, c, f);
                            break;
                        case 4:
                            v[b].fn.call(v[b].context, c, f, d);
                            break;
                        default:
                            if (!_)
                                for (x = 1, _ = new Array(g - 1); x < g; x++)
                                    _[x - 1] = arguments[x];
                            v[b].fn.apply(v[b].context, _);
                    }
            }
            return !0;
        }),
        (s.prototype.on = function (l, c, f) {
            return a(this, l, c, f, !1);
        }),
        (s.prototype.once = function (l, c, f) {
            return a(this, l, c, f, !0);
        }),
        (s.prototype.removeListener = function (l, c, f, d) {
            var y = r ? r + l : l;
            if (!this._events[y]) return this;
            if (!c) return o(this, y), this;
            var p = this._events[y];
            if (p.fn)
                p.fn === c &&
                    (!d || p.once) &&
                    (!f || p.context === f) &&
                    o(this, y);
            else {
                for (var h = 0, v = [], g = p.length; h < g; h++)
                    (p[h].fn !== c ||
                        (d && !p[h].once) ||
                        (f && p[h].context !== f)) &&
                        v.push(p[h]);
                v.length
                    ? (this._events[y] = v.length === 1 ? v[0] : v)
                    : o(this, y);
            }
            return this;
        }),
        (s.prototype.removeAllListeners = function (l) {
            var c;
            return (
                l
                    ? ((c = r ? r + l : l), this._events[c] && o(this, c))
                    : ((this._events = new n()), (this._eventsCount = 0)),
                this
            );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = r),
        (s.EventEmitter = s),
        (e.exports = s);
})(wy);
const p3 = wy.exports;
var Ue = new p3();
Ue.setMaxListeners && Ue.setMaxListeners(10);
var Lo = "recharts.syncMouseEvents";
function pi(e) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (pi = function (r) {
                  return typeof r;
              })
            : (pi = function (r) {
                  return r &&
                      typeof Symbol == "function" &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
              }),
        pi(e)
    );
}
function Zh(e, t) {
    return g3(e) || y3(e, t) || _y(e, t) || v3();
}
function v3() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function y3(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var o = e[Symbol.iterator](), s;
                !(n = (s = o.next()).done) &&
                (r.push(s.value), !(t && r.length === t));
                n = !0
            );
        } catch (u) {
            (i = !0), (a = u);
        } finally {
            try {
                !n && o.return != null && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return r;
    }
}
function g3(e) {
    if (Array.isArray(e)) return e;
}
function Qh(e, t) {
    if (e == null) return {};
    var r = m3(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(e, n) ||
                        (r[n] = e[n]));
    }
    return r;
}
function m3(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
function b3(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function ed(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function x3(e, t, r) {
    return t && ed(e.prototype, t), r && ed(e, r), e;
}
function w3(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && au(e, t);
}
function au(e, t) {
    return (
        (au =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n;
            }),
        au(e, t)
    );
}
function _3(e) {
    var t = O3();
    return function () {
        var n = aa(e),
            i;
        if (t) {
            var a = aa(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return S3(this, i);
    };
}
function S3(e, t) {
    return t && (pi(t) === "object" || typeof t == "function") ? t : ou(e);
}
function ou(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function O3() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function aa(e) {
    return (
        (aa = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        aa(e)
    );
}
function Nr(e) {
    return T3(e) || $3(e) || _y(e) || A3();
}
function A3() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _y(e, t) {
    if (!!e) {
        if (typeof e == "string") return su(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
        )
            return Array.from(e);
        if (
            r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return su(e, t);
    }
}
function $3(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
}
function T3(e) {
    if (Array.isArray(e)) return su(e);
}
function su(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function td(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? td(Object(r), !0).forEach(function (n) {
                  He(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : td(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(r, n)
                  );
              });
    }
    return e;
}
function He(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
var P3 = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
    Sy = { x: 0, y: 0 },
    E3 = Number.isFinite ? Number.isFinite : isFinite,
    rd =
        typeof requestAnimationFrame == "function"
            ? requestAnimationFrame
            : typeof setImmediate == "function"
            ? setImmediate
            : setTimeout,
    nd =
        typeof cancelAnimationFrame == "function"
            ? cancelAnimationFrame
            : typeof clearImmediate == "function"
            ? clearImmediate
            : clearTimeout,
    M3 = function (t, r) {
        return r === "horizontal"
            ? t.x
            : r === "vertical"
            ? t.y
            : r === "centric"
            ? t.angle
            : t.radius;
    },
    k3 = function (t, r, n, i) {
        var a = r.find(function (c) {
            return c && c.index === n;
        });
        if (a) {
            if (t === "horizontal") return { x: a.coordinate, y: i.y };
            if (t === "vertical") return { x: i.x, y: a.coordinate };
            if (t === "centric") {
                var o = a.coordinate,
                    s = i.radius;
                return N(
                    N(N({}, i), Ce(i.cx, i.cy, s, o)),
                    {},
                    { angle: o, radius: s }
                );
            }
            var u = a.coordinate,
                l = i.angle;
            return N(
                N(N({}, i), Ce(i.cx, i.cy, u, l)),
                {},
                { angle: l, radius: u }
            );
        }
        return Sy;
    },
    Ka = function (t, r, n) {
        var i = r.graphicalItems,
            a = r.dataStartIndex,
            o = r.dataEndIndex,
            s = (i || []).reduce(function (u, l) {
                var c = l.props.data;
                return c && c.length ? [].concat(Nr(u), Nr(c)) : u;
            }, []);
        return s && s.length > 0
            ? s
            : n && n.props && n.props.data && n.props.data.length > 0
            ? n.props.data
            : t && t.length && U(a) && U(o)
            ? t.slice(a, o + 1)
            : [];
    },
    Oy = function (t, r, n, i) {
        var a = t.graphicalItems,
            o = t.tooltipAxis,
            s = Ka(r, t);
        return n < 0 || !a || !a.length || n >= s.length
            ? null
            : a.reduce(function (u, l) {
                  var c = l.props.hide;
                  if (c) return u;
                  var f = l.props.data,
                      d;
                  if (o.dataKey && !o.allowDuplicatedCategory) {
                      var y = f === void 0 ? s : f;
                      d = Pi(y, o.dataKey, i);
                  } else d = (f && f[n]) || s[n];
                  return d ? [].concat(Nr(u), [WR(l, d)]) : u;
              }, []);
    },
    id = function (t, r, n, i) {
        var a = i || { x: t.chartX, y: t.chartY },
            o = M3(a, n),
            s = t.orderedTooltipTicks,
            u = t.tooltipAxis,
            l = t.tooltipTicks,
            c = $R(o, s, l, u);
        if (c >= 0 && l) {
            var f = l[c] && l[c].value,
                d = Oy(t, r, c, f),
                y = k3(n, s, c, a);
            return {
                activeTooltipIndex: c,
                activeLabel: f,
                activePayload: d,
                activeCoordinate: y,
            };
        }
        return null;
    },
    C3 = function (t, r) {
        var n = r.axes,
            i = r.graphicalItems,
            a = r.axisType,
            o = r.axisIdKey,
            s = r.stackGroups,
            u = r.dataStartIndex,
            l = r.dataEndIndex,
            c = t.layout,
            f = t.children,
            d = t.stackOffset,
            y = ly(c, a),
            p = n.reduce(function (h, v) {
                var g = v.props,
                    _ = g.type,
                    b = g.dataKey,
                    m = g.allowDataOverflow,
                    x = g.allowDuplicatedCategory,
                    w = g.scale,
                    S = g.ticks,
                    A = v.props[o],
                    $ = Ka(t.data, {
                        graphicalItems: i.filter(function (j) {
                            return j.props[o] === A;
                        }),
                        dataStartIndex: u,
                        dataEndIndex: l,
                    }),
                    E = $.length;
                if (!h[A]) {
                    var P, M, k;
                    if (b) {
                        if (((P = Vi($, b, _)), _ === "category" && y)) {
                            var I = hT(P);
                            x && I
                                ? ((M = P), (P = ta(0, E)))
                                : x ||
                                  (P = yh(v.props.domain, P, v).reduce(
                                      function (j, H) {
                                          return j.indexOf(H) >= 0
                                              ? j
                                              : [].concat(Nr(j), [H]);
                                      },
                                      []
                                  ));
                        } else if (_ === "category")
                            x
                                ? (P = P.filter(function (j) {
                                      return j !== "" && !V(j);
                                  }))
                                : (P = yh(v.props.domain, P, v).reduce(
                                      function (j, H) {
                                          return j.indexOf(H) >= 0 ||
                                              H === "" ||
                                              V(H)
                                              ? j
                                              : [].concat(Nr(j), [H]);
                                      },
                                      []
                                  ));
                        else if (_ === "number") {
                            var R = kR(
                                $,
                                i.filter(function (j) {
                                    return j.props[o] === A && !j.props.hide;
                                }),
                                b,
                                a,
                                c
                            );
                            R && (P = R);
                        }
                        y &&
                            (_ === "number" || w !== "auto") &&
                            (k = Vi($, b, "category"));
                    } else
                        y
                            ? (P = ta(0, E))
                            : s && s[A] && s[A].hasStack && _ === "number"
                            ? (P =
                                  d === "expand"
                                      ? [0, 1]
                                      : cy(s[A].stackGroups, u, l))
                            : (P = uy(
                                  $,
                                  i.filter(function (j) {
                                      return j.props[o] === A && !j.props.hide;
                                  }),
                                  _,
                                  c,
                                  !0
                              ));
                    if (_ === "number")
                        (P = iu(f, P, A, a, S)),
                            v.props.domain && (P = fy(v.props.domain, P, m));
                    else if (_ === "category" && v.props.domain) {
                        var C = v.props.domain,
                            B = P.every(function (j) {
                                return C.indexOf(j) >= 0;
                            });
                        B && (P = C);
                    }
                    return N(
                        N({}, h),
                        {},
                        He(
                            {},
                            A,
                            N(
                                N({}, v.props),
                                {},
                                {
                                    axisType: a,
                                    domain: P,
                                    categoricalDomain: k,
                                    duplicateDomain: M,
                                    originalDomain: v.props.domain,
                                    isCategorical: y,
                                    layout: c,
                                }
                            )
                        )
                    );
                }
                return h;
            }, {});
        return p;
    },
    I3 = function (t, r) {
        var n = r.graphicalItems,
            i = r.Axis,
            a = r.axisType,
            o = r.axisIdKey,
            s = r.stackGroups,
            u = r.dataStartIndex,
            l = r.dataEndIndex,
            c = t.layout,
            f = t.children,
            d = Ka(t.data, {
                graphicalItems: n,
                dataStartIndex: u,
                dataEndIndex: l,
            }),
            y = d.length,
            p = ly(c, a),
            h = -1,
            v = n.reduce(function (g, _) {
                var b = _.props[o];
                if (!g[b]) {
                    h++;
                    var m;
                    return (
                        p
                            ? (m = ta(0, y))
                            : s && s[b] && s[b].hasStack
                            ? ((m = cy(s[b].stackGroups, u, l)),
                              (m = iu(f, m, b, a)))
                            : ((m = fy(
                                  i.defaultProps.domain,
                                  uy(
                                      d,
                                      n.filter(function (x) {
                                          return (
                                              x.props[o] === b && !x.props.hide
                                          );
                                      }),
                                      "number",
                                      c
                                  ),
                                  i.defaultProps.allowDataOverflow
                              )),
                              (m = iu(f, m, b, a))),
                        N(
                            N({}, g),
                            {},
                            He(
                                {},
                                b,
                                N(
                                    N({ axisType: a }, i.defaultProps),
                                    {},
                                    {
                                        hide: !0,
                                        orientation: Ae(
                                            P3,
                                            "".concat(a, ".").concat(h % 2),
                                            null
                                        ),
                                        domain: m,
                                        originalDomain: i.defaultProps.domain,
                                        isCategorical: p,
                                        layout: c,
                                    }
                                )
                            )
                        )
                    );
                }
                return g;
            }, {});
        return v;
    },
    N3 = function (t, r) {
        var n = r.axisType,
            i = n === void 0 ? "xAxis" : n,
            a = r.AxisComp,
            o = r.graphicalItems,
            s = r.stackGroups,
            u = r.dataStartIndex,
            l = r.dataEndIndex,
            c = t.children,
            f = "".concat(i, "Id"),
            d = St(c, a),
            y = {};
        return (
            d && d.length
                ? (y = C3(t, {
                      axes: d,
                      graphicalItems: o,
                      axisType: i,
                      axisIdKey: f,
                      stackGroups: s,
                      dataStartIndex: u,
                      dataEndIndex: l,
                  }))
                : o &&
                  o.length &&
                  (y = I3(t, {
                      Axis: a,
                      graphicalItems: o,
                      axisType: i,
                      axisIdKey: f,
                      stackGroups: s,
                      dataStartIndex: u,
                      dataEndIndex: l,
                  })),
            y
        );
    },
    R3 = function (t) {
        var r = Mt(t),
            n = kt(r, !1, !0);
        return {
            tooltipTicks: n,
            orderedTooltipTicks: Fu(n, function (i) {
                return i.coordinate;
            }),
            tooltipAxis: r,
            tooltipAxisBandSize: Yi(r, n),
        };
    },
    ad = function (t) {
        var r = t.children,
            n = t.defaultShowTooltip,
            i = bt(r, _n.displayName),
            a = (i && i.props && i.props.startIndex) || 0,
            o =
                (i && i.props && i.props.endIndex) ||
                (t.data && t.data.length - 1) ||
                0;
        return {
            chartX: 0,
            chartY: 0,
            dataStartIndex: a,
            dataEndIndex: o,
            activeTooltipIndex: -1,
            isTooltipActive: V(n) ? !1 : n,
        };
    },
    D3 = function (t) {
        return !t || !t.length
            ? !1
            : t.some(function (r) {
                  var n = Dt(r && r.type);
                  return n && n.indexOf("Bar") >= 0;
              });
    },
    od = function (t) {
        return t === "horizontal"
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : t === "vertical"
            ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
            : t === "centric"
            ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
            : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
    },
    L3 = function (t, r) {
        var n = t.props,
            i = t.graphicalItems,
            a = t.xAxisMap,
            o = a === void 0 ? {} : a,
            s = t.yAxisMap,
            u = s === void 0 ? {} : s,
            l = n.width,
            c = n.height,
            f = n.children,
            d = n.margin || {},
            y = bt(f, _n.displayName),
            p = bt(f, pn.displayName),
            h = Object.keys(u).reduce(
                function (b, m) {
                    var x = u[m],
                        w = x.orientation;
                    return !x.mirror && !x.hide
                        ? N(N({}, b), {}, He({}, w, b[w] + x.width))
                        : b;
                },
                { left: d.left || 0, right: d.right || 0 }
            ),
            v = Object.keys(o).reduce(
                function (b, m) {
                    var x = o[m],
                        w = x.orientation;
                    return !x.mirror && !x.hide
                        ? N(
                              N({}, b),
                              {},
                              He({}, w, Ae(b, "".concat(w)) + x.height)
                          )
                        : b;
                },
                { top: d.top || 0, bottom: d.bottom || 0 }
            ),
            g = N(N({}, v), h),
            _ = g.bottom;
        return (
            y && (g.bottom += y.props.height || _n.defaultProps.height),
            p && r && (g = ER(g, i, n, r)),
            N(
                N({ brushBottom: _ }, g),
                {},
                { width: l - g.left - g.right, height: c - g.top - g.bottom }
            )
        );
    },
    j3 = function (t) {
        var r,
            n,
            i = t.chartName,
            a = t.GraphicalChild,
            o = t.defaultTooltipEventType,
            s = o === void 0 ? "axis" : o,
            u = t.validateTooltipEventTypes,
            l = u === void 0 ? ["axis"] : u,
            c = t.axisComponents,
            f = t.legendContent,
            d = t.formatAxisMap,
            y = t.defaultProps,
            p = function (g, _) {
                var b = _.graphicalItems,
                    m = _.stackGroups,
                    x = _.offset,
                    w = _.updateId,
                    S = _.dataStartIndex,
                    A = _.dataEndIndex,
                    $ = g.barSize,
                    E = g.layout,
                    P = g.barGap,
                    M = g.barCategoryGap,
                    k = g.maxBarSize,
                    I = od(E),
                    R = I.numericAxisName,
                    C = I.cateAxisName,
                    B = D3(b),
                    j = B && TR({ barSize: $, stackGroups: m }),
                    H = [];
                return (
                    b.forEach(function (G, Z) {
                        var ee = Ka(
                                g.data,
                                { dataStartIndex: S, dataEndIndex: A },
                                G
                            ),
                            oe = G.props,
                            ve = oe.dataKey,
                            _e = oe.maxBarSize,
                            De = G.props["".concat(R, "Id")],
                            Tt = G.props["".concat(C, "Id")],
                            J = c.reduce(function (Xr, Ln) {
                                var jn,
                                    wl = _["".concat(Ln.axisType, "Map")],
                                    Ay = G.props["".concat(Ln.axisType, "Id")],
                                    _l = wl && wl[Ay];
                                return N(
                                    N({}, Xr),
                                    {},
                                    ((jn = {}),
                                    He(jn, Ln.axisType, _l),
                                    He(
                                        jn,
                                        "".concat(Ln.axisType, "Ticks"),
                                        kt(_l)
                                    ),
                                    jn)
                                );
                            }, {}),
                            F = J[C],
                            q = J["".concat(C, "Ticks")],
                            Y =
                                m &&
                                m[De] &&
                                m[De].hasStack &&
                                UR(G, m[De].stackGroups),
                            D = Dt(G.type).indexOf("Bar") >= 0,
                            se = Yi(F, q),
                            Q = [];
                        if (D) {
                            var me,
                                be,
                                at = V(_e) ? k : _e,
                                qt =
                                    (me =
                                        (be = Yi(F, q, !0)) !== null &&
                                        be !== void 0
                                            ? be
                                            : at) !== null && me !== void 0
                                        ? me
                                        : 0;
                            (Q = PR({
                                barGap: P,
                                barCategoryGap: M,
                                bandSize: qt !== se ? qt : se,
                                sizeList: j[Tt],
                                maxBarSize: at,
                            })),
                                qt !== se &&
                                    (Q = Q.map(function (Xr) {
                                        return N(
                                            N({}, Xr),
                                            {},
                                            {
                                                position: N(
                                                    N({}, Xr.position),
                                                    {},
                                                    {
                                                        offset:
                                                            Xr.position.offset -
                                                            qt / 2,
                                                    }
                                                ),
                                            }
                                        );
                                    }));
                        }
                        var xl = G && G.type && G.type.getComposedData;
                        if (xl) {
                            var Yr;
                            H.push({
                                props: N(
                                    N(
                                        {},
                                        xl(
                                            N(
                                                N({}, J),
                                                {},
                                                {
                                                    displayedData: ee,
                                                    props: g,
                                                    dataKey: ve,
                                                    item: G,
                                                    bandSize: se,
                                                    barPosition: Q,
                                                    offset: x,
                                                    stackedData: Y,
                                                    layout: E,
                                                    dataStartIndex: S,
                                                    dataEndIndex: A,
                                                }
                                            )
                                        )
                                    ),
                                    {},
                                    ((Yr = { key: G.key || "item-".concat(Z) }),
                                    He(Yr, R, J[R]),
                                    He(Yr, C, J[C]),
                                    He(Yr, "animationId", w),
                                    Yr)
                                ),
                                childIndex: rC(G, g.children),
                                item: G,
                            });
                        }
                    }),
                    H
                );
            },
            h = function (g, _) {
                var b = g.props,
                    m = g.dataStartIndex,
                    x = g.dataEndIndex,
                    w = g.updateId;
                if (!_f({ props: b })) return null;
                var S = b.children,
                    A = b.layout,
                    $ = b.stackOffset,
                    E = b.data,
                    P = b.reverseStackOrder,
                    M = od(A),
                    k = M.numericAxisName,
                    I = M.cateAxisName,
                    R = St(S, a),
                    C = jR(E, R, "".concat(k, "Id"), "".concat(I, "Id"), $, P),
                    B = c.reduce(function (ee, oe) {
                        var ve = "".concat(oe.axisType, "Map");
                        return N(
                            N({}, ee),
                            {},
                            He(
                                {},
                                ve,
                                N3(
                                    b,
                                    N(
                                        N({}, oe),
                                        {},
                                        {
                                            graphicalItems: R,
                                            stackGroups: oe.axisType === k && C,
                                            dataStartIndex: m,
                                            dataEndIndex: x,
                                        }
                                    )
                                )
                            )
                        );
                    }, {}),
                    j = L3(
                        N(N({}, B), {}, { props: b, graphicalItems: R }),
                        _ == null ? void 0 : _.legendBBox
                    );
                Object.keys(B).forEach(function (ee) {
                    B[ee] = d(b, B[ee], j, ee.replace("Map", ""), i);
                });
                var H = B["".concat(I, "Map")],
                    G = R3(H),
                    Z = p(
                        b,
                        N(
                            N({}, B),
                            {},
                            {
                                dataStartIndex: m,
                                dataEndIndex: x,
                                updateId: w,
                                graphicalItems: R,
                                stackGroups: C,
                                offset: j,
                            }
                        )
                    );
                return N(
                    N(
                        {
                            formattedGraphicalItems: Z,
                            graphicalItems: R,
                            offset: j,
                            stackGroups: C,
                        },
                        G
                    ),
                    B
                );
            };
        return (
            (n = r =
                (function (v) {
                    w3(_, v);
                    var g = _3(_);
                    function _(b) {
                        var m;
                        return (
                            b3(this, _),
                            (m = g.call(this, b)),
                            (m.uniqueChartId = void 0),
                            (m.clipPathId = void 0),
                            (m.legendInstance = void 0),
                            (m.deferId = void 0),
                            (m.container = void 0),
                            (m.clearDeferId = function () {
                                !V(m.deferId) && nd && nd(m.deferId),
                                    (m.deferId = null);
                            }),
                            (m.handleLegendBBoxUpdate = function (x) {
                                if (x) {
                                    var w = m.state,
                                        S = w.dataStartIndex,
                                        A = w.dataEndIndex,
                                        $ = w.updateId;
                                    m.setState(
                                        N(
                                            { legendBBox: x },
                                            h(
                                                {
                                                    props: m.props,
                                                    dataStartIndex: S,
                                                    dataEndIndex: A,
                                                    updateId: $,
                                                },
                                                N(
                                                    N({}, m.state),
                                                    {},
                                                    { legendBBox: x }
                                                )
                                            )
                                        )
                                    );
                                }
                            }),
                            (m.handleReceiveSyncEvent = function (x, w, S) {
                                var A = m.props.syncId;
                                A === x &&
                                    w !== m.uniqueChartId &&
                                    (m.clearDeferId(),
                                    (m.deferId =
                                        rd &&
                                        rd(m.applySyncEvent.bind(ou(m), S))));
                            }),
                            (m.handleBrushChange = function (x) {
                                var w = x.startIndex,
                                    S = x.endIndex;
                                if (
                                    w !== m.state.dataStartIndex ||
                                    S !== m.state.dataEndIndex
                                ) {
                                    var A = m.state.updateId;
                                    m.setState(function () {
                                        return N(
                                            {
                                                dataStartIndex: w,
                                                dataEndIndex: S,
                                            },
                                            h(
                                                {
                                                    props: m.props,
                                                    dataStartIndex: w,
                                                    dataEndIndex: S,
                                                    updateId: A,
                                                },
                                                m.state
                                            )
                                        );
                                    }),
                                        m.triggerSyncEvent({
                                            dataStartIndex: w,
                                            dataEndIndex: S,
                                        });
                                }
                            }),
                            (m.handleMouseEnter = function (x) {
                                var w = m.props.onMouseEnter,
                                    S = m.getMouseInfo(x);
                                if (S) {
                                    var A = N(
                                        N({}, S),
                                        {},
                                        { isTooltipActive: !0 }
                                    );
                                    m.setState(A),
                                        m.triggerSyncEvent(A),
                                        X(w) && w(A, x);
                                }
                            }),
                            (m.triggeredAfterMouseMove = function (x) {
                                var w = m.props.onMouseMove,
                                    S = m.getMouseInfo(x),
                                    A = S
                                        ? N(
                                              N({}, S),
                                              {},
                                              { isTooltipActive: !0 }
                                          )
                                        : { isTooltipActive: !1 };
                                m.setState(A),
                                    m.triggerSyncEvent(A),
                                    X(w) && w(A, x);
                            }),
                            (m.handleItemMouseEnter = function (x) {
                                m.setState(function () {
                                    return {
                                        isTooltipActive: !0,
                                        activeItem: x,
                                        activePayload: x.tooltipPayload,
                                        activeCoordinate: x.tooltipPosition || {
                                            x: x.cx,
                                            y: x.cy,
                                        },
                                    };
                                });
                            }),
                            (m.handleItemMouseLeave = function () {
                                m.setState(function () {
                                    return { isTooltipActive: !1 };
                                });
                            }),
                            (m.handleMouseMove = function (x) {
                                x && X(x.persist) && x.persist(),
                                    m.triggeredAfterMouseMove(x);
                            }),
                            (m.handleMouseLeave = function (x) {
                                var w = m.props.onMouseLeave,
                                    S = { isTooltipActive: !1 };
                                m.setState(S),
                                    m.triggerSyncEvent(S),
                                    X(w) && w(S, x),
                                    m.cancelThrottledTriggerAfterMouseMove();
                            }),
                            (m.handleOuterEvent = function (x) {
                                var w = tC(x),
                                    S = Ae(m.props, "".concat(w));
                                if (w && X(S)) {
                                    var A;
                                    /.*touch.*/i.test(w)
                                        ? (A = m.getMouseInfo(
                                              x.changedTouches[0]
                                          ))
                                        : (A = m.getMouseInfo(x));
                                    var $ = S;
                                    $(A, x);
                                }
                            }),
                            (m.handleClick = function (x) {
                                var w = m.props.onClick,
                                    S = m.getMouseInfo(x);
                                if (S) {
                                    var A = N(
                                        N({}, S),
                                        {},
                                        { isTooltipActive: !0 }
                                    );
                                    m.setState(A),
                                        m.triggerSyncEvent(A),
                                        X(w) && w(A, x);
                                }
                            }),
                            (m.handleMouseDown = function (x) {
                                var w = m.props.onMouseDown;
                                if (X(w)) {
                                    var S = m.getMouseInfo(x);
                                    w(S, x);
                                }
                            }),
                            (m.handleMouseUp = function (x) {
                                var w = m.props.onMouseUp;
                                if (X(w)) {
                                    var S = m.getMouseInfo(x);
                                    w(S, x);
                                }
                            }),
                            (m.handleTouchMove = function (x) {
                                x.changedTouches != null &&
                                    x.changedTouches.length > 0 &&
                                    m.handleMouseMove(x.changedTouches[0]);
                            }),
                            (m.handleTouchStart = function (x) {
                                x.changedTouches != null &&
                                    x.changedTouches.length > 0 &&
                                    m.handleMouseDown(x.changedTouches[0]);
                            }),
                            (m.handleTouchEnd = function (x) {
                                x.changedTouches != null &&
                                    x.changedTouches.length > 0 &&
                                    m.handleMouseUp(x.changedTouches[0]);
                            }),
                            (m.verticalCoordinatesGenerator = function (x) {
                                var w = x.xAxis,
                                    S = x.width,
                                    A = x.height,
                                    $ = x.offset;
                                return fh(
                                    Zt.getTicks(
                                        N(
                                            N(N({}, Zt.defaultProps), w),
                                            {},
                                            {
                                                ticks: kt(w, !0),
                                                viewBox: {
                                                    x: 0,
                                                    y: 0,
                                                    width: S,
                                                    height: A,
                                                },
                                            }
                                        )
                                    ),
                                    $.left,
                                    $.left + $.width
                                );
                            }),
                            (m.horizontalCoordinatesGenerator = function (x) {
                                var w = x.yAxis,
                                    S = x.width,
                                    A = x.height,
                                    $ = x.offset;
                                return fh(
                                    Zt.getTicks(
                                        N(
                                            N(N({}, Zt.defaultProps), w),
                                            {},
                                            {
                                                ticks: kt(w, !0),
                                                viewBox: {
                                                    x: 0,
                                                    y: 0,
                                                    width: S,
                                                    height: A,
                                                },
                                            }
                                        )
                                    ),
                                    $.top,
                                    $.top + $.height
                                );
                            }),
                            (m.axesTicksGenerator = function (x) {
                                return kt(x, !0);
                            }),
                            (m.renderCursor = function (x) {
                                var w = m.state,
                                    S = w.isTooltipActive,
                                    A = w.activeCoordinate,
                                    $ = w.activePayload,
                                    E = w.offset,
                                    P = w.activeTooltipIndex,
                                    M = m.getTooltipEventType();
                                if (
                                    !x ||
                                    !x.props.cursor ||
                                    !S ||
                                    !A ||
                                    (i !== "ScatterChart" && M !== "axis")
                                )
                                    return null;
                                var k = m.props.layout,
                                    I,
                                    R = Ar;
                                if (i === "ScatterChart") (I = A), (R = vy);
                                else if (i === "BarChart")
                                    (I = m.getCursorRectangle()), (R = dl);
                                else if (k === "radial") {
                                    var C = m.getCursorPoints(),
                                        B = C.cx,
                                        j = C.cy,
                                        H = C.radius,
                                        G = C.startAngle,
                                        Z = C.endAngle;
                                    (I = {
                                        cx: B,
                                        cy: j,
                                        startAngle: G,
                                        endAngle: Z,
                                        innerRadius: H,
                                        outerRadius: H,
                                    }),
                                        (R = py);
                                } else
                                    (I = { points: m.getCursorPoints() }),
                                        (R = Ar);
                                var ee = x.key || "_recharts-cursor",
                                    oe = N(
                                        N(
                                            N(
                                                N(
                                                    {
                                                        stroke: "#ccc",
                                                        pointerEvents: "none",
                                                    },
                                                    E
                                                ),
                                                I
                                            ),
                                            ae(x.props.cursor)
                                        ),
                                        {},
                                        {
                                            payload: $,
                                            payloadIndex: P,
                                            key: ee,
                                            className:
                                                "recharts-tooltip-cursor",
                                        }
                                    );
                                return T.exports.isValidElement(x.props.cursor)
                                    ? T.exports.cloneElement(x.props.cursor, oe)
                                    : T.exports.createElement(R, oe);
                            }),
                            (m.renderPolarAxis = function (x, w, S) {
                                var A = Ae(x, "type.axisType"),
                                    $ = Ae(m.state, "".concat(A, "Map")),
                                    E = $[x.props["".concat(A, "Id")]];
                                return T.exports.cloneElement(
                                    x,
                                    N(
                                        N({}, E),
                                        {},
                                        {
                                            className: A,
                                            key:
                                                x.key ||
                                                "".concat(w, "-").concat(S),
                                            ticks: kt(E, !0),
                                        }
                                    )
                                );
                            }),
                            (m.renderXAxis = function (x, w, S) {
                                var A = m.state.xAxisMap,
                                    $ = A[x.props.xAxisId];
                                return m.renderAxis($, x, w, S);
                            }),
                            (m.renderYAxis = function (x, w, S) {
                                var A = m.state.yAxisMap,
                                    $ = A[x.props.yAxisId];
                                return m.renderAxis($, x, w, S);
                            }),
                            (m.renderGrid = function (x) {
                                var w = m.state,
                                    S = w.xAxisMap,
                                    A = w.yAxisMap,
                                    $ = w.offset,
                                    E = m.props,
                                    P = E.width,
                                    M = E.height,
                                    k = Mt(S),
                                    I = n3(A, function (B) {
                                        return my(B.domain, E3);
                                    }),
                                    R = I || Mt(A),
                                    C = x.props || {};
                                return T.exports.cloneElement(x, {
                                    key: x.key || "grid",
                                    x: U(C.x) ? C.x : $.left,
                                    y: U(C.y) ? C.y : $.top,
                                    width: U(C.width) ? C.width : $.width,
                                    height: U(C.height) ? C.height : $.height,
                                    xAxis: k,
                                    yAxis: R,
                                    offset: $,
                                    chartWidth: P,
                                    chartHeight: M,
                                    verticalCoordinatesGenerator:
                                        C.verticalCoordinatesGenerator ||
                                        m.verticalCoordinatesGenerator,
                                    horizontalCoordinatesGenerator:
                                        C.horizontalCoordinatesGenerator ||
                                        m.horizontalCoordinatesGenerator,
                                });
                            }),
                            (m.renderPolarGrid = function (x) {
                                var w = x.props,
                                    S = w.radialLines,
                                    A = w.polarAngles,
                                    $ = w.polarRadius,
                                    E = m.state,
                                    P = E.radiusAxisMap,
                                    M = E.angleAxisMap,
                                    k = Mt(P),
                                    I = Mt(M),
                                    R = I.cx,
                                    C = I.cy,
                                    B = I.innerRadius,
                                    j = I.outerRadius;
                                return T.exports.cloneElement(x, {
                                    polarAngles: te(A)
                                        ? A
                                        : kt(I, !0).map(function (H) {
                                              return H.coordinate;
                                          }),
                                    polarRadius: te($)
                                        ? $
                                        : kt(k, !0).map(function (H) {
                                              return H.coordinate;
                                          }),
                                    cx: R,
                                    cy: C,
                                    innerRadius: B,
                                    outerRadius: j,
                                    key: x.key || "polar-grid",
                                    radialLines: S,
                                });
                            }),
                            (m.renderLegend = function () {
                                var x = m.state.formattedGraphicalItems,
                                    w = m.props,
                                    S = w.children,
                                    A = w.width,
                                    $ = w.height,
                                    E = m.props.margin || {},
                                    P = A - (E.left || 0) - (E.right || 0),
                                    M = oy({
                                        children: S,
                                        formattedGraphicalItems: x,
                                        legendWidth: P,
                                        legendContent: f,
                                    });
                                if (!M) return null;
                                var k = M.item,
                                    I = Qh(M, ["item"]);
                                return T.exports.cloneElement(
                                    k,
                                    N(
                                        N({}, I),
                                        {},
                                        {
                                            chartWidth: A,
                                            chartHeight: $,
                                            margin: E,
                                            ref: function (C) {
                                                m.legendInstance = C;
                                            },
                                            onBBoxUpdate:
                                                m.handleLegendBBoxUpdate,
                                        }
                                    )
                                );
                            }),
                            (m.renderTooltip = function () {
                                var x = m.props.children,
                                    w = bt(x, gr.displayName);
                                if (!w) return null;
                                var S = m.state,
                                    A = S.isTooltipActive,
                                    $ = S.activeCoordinate,
                                    E = S.activePayload,
                                    P = S.activeLabel,
                                    M = S.offset;
                                return T.exports.cloneElement(w, {
                                    viewBox: N(
                                        N({}, M),
                                        {},
                                        { x: M.left, y: M.top }
                                    ),
                                    active: A,
                                    label: P,
                                    payload: A ? E : [],
                                    coordinate: $,
                                });
                            }),
                            (m.renderBrush = function (x) {
                                var w = m.props,
                                    S = w.margin,
                                    A = w.data,
                                    $ = m.state,
                                    E = $.offset,
                                    P = $.dataStartIndex,
                                    M = $.dataEndIndex,
                                    k = $.updateId;
                                return T.exports.cloneElement(x, {
                                    key: x.key || "_recharts-brush",
                                    onChange: Yn(
                                        m.handleBrushChange,
                                        null,
                                        x.props.onChange
                                    ),
                                    data: A,
                                    x: U(x.props.x) ? x.props.x : E.left,
                                    y: U(x.props.y)
                                        ? x.props.y
                                        : E.top +
                                          E.height +
                                          E.brushBottom -
                                          (S.bottom || 0),
                                    width: U(x.props.width)
                                        ? x.props.width
                                        : E.width,
                                    startIndex: P,
                                    endIndex: M,
                                    updateId: "brush-".concat(k),
                                });
                            }),
                            (m.renderReferenceElement = function (x, w, S) {
                                if (!x) return null;
                                var A = ou(m),
                                    $ = A.clipPathId,
                                    E = m.state,
                                    P = E.xAxisMap,
                                    M = E.yAxisMap,
                                    k = E.offset,
                                    I = x.props,
                                    R = I.xAxisId,
                                    C = I.yAxisId;
                                return T.exports.cloneElement(x, {
                                    key: x.key || "".concat(w, "-").concat(S),
                                    xAxis: P[R],
                                    yAxis: M[C],
                                    viewBox: {
                                        x: k.left,
                                        y: k.top,
                                        width: k.width,
                                        height: k.height,
                                    },
                                    clipPathId: $,
                                });
                            }),
                            (m.renderActivePoints = function (x) {
                                var w = x.item,
                                    S = x.activePoint,
                                    A = x.basePoint,
                                    $ = x.childIndex,
                                    E = x.isRange,
                                    P = [],
                                    M = w.props.key,
                                    k = w.item.props,
                                    I = k.activeDot,
                                    R = k.dataKey,
                                    C = N(
                                        N(
                                            {
                                                index: $,
                                                dataKey: R,
                                                cx: S.x,
                                                cy: S.y,
                                                r: 4,
                                                fill: hl(w.item),
                                                strokeWidth: 2,
                                                stroke: "#fff",
                                                payload: S.payload,
                                                value: S.value,
                                                key: ""
                                                    .concat(M, "-activePoint-")
                                                    .concat($),
                                            },
                                            ae(I)
                                        ),
                                        mi(I)
                                    );
                                return (
                                    P.push(_.renderActiveDot(I, C)),
                                    A
                                        ? P.push(
                                              _.renderActiveDot(
                                                  I,
                                                  N(
                                                      N({}, C),
                                                      {},
                                                      {
                                                          cx: A.x,
                                                          cy: A.y,
                                                          key: ""
                                                              .concat(
                                                                  M,
                                                                  "-basePoint-"
                                                              )
                                                              .concat($),
                                                      }
                                                  )
                                              )
                                          )
                                        : E && P.push(null),
                                    P
                                );
                            }),
                            (m.renderGraphicChild = function (x, w, S) {
                                var A = m.filterFormatItem(x, w, S);
                                if (!A) return null;
                                var $ = m.getTooltipEventType(),
                                    E = m.state,
                                    P = E.isTooltipActive,
                                    M = E.tooltipAxis,
                                    k = E.activeTooltipIndex,
                                    I = E.activeLabel,
                                    R = m.props.children,
                                    C = bt(R, gr.displayName),
                                    B = A.props,
                                    j = B.points,
                                    H = B.isRange,
                                    G = B.baseLine,
                                    Z = A.item.props,
                                    ee = Z.activeDot,
                                    oe = Z.hide,
                                    ve = !oe && P && C && ee && k >= 0,
                                    _e = {};
                                $ !== "axis" && C && C.props.trigger === "click"
                                    ? (_e = {
                                          onClick: Yn(
                                              m.handleItemMouseEnter,
                                              null,
                                              x.props.onCLick
                                          ),
                                      })
                                    : $ !== "axis" &&
                                      (_e = {
                                          onMouseLeave: Yn(
                                              m.handleItemMouseLeave,
                                              null,
                                              x.props.onMouseLeave
                                          ),
                                          onMouseEnter: Yn(
                                              m.handleItemMouseEnter,
                                              null,
                                              x.props.onMouseEnter
                                          ),
                                      });
                                var De = T.exports.cloneElement(
                                    x,
                                    N(N({}, A.props), _e)
                                );
                                function Tt(Y) {
                                    return typeof M.dataKey == "function"
                                        ? M.dataKey(Y.payload)
                                        : null;
                                }
                                if (ve) {
                                    var J, F;
                                    if (
                                        M.dataKey &&
                                        !M.allowDuplicatedCategory
                                    ) {
                                        var q =
                                            typeof M.dataKey == "function"
                                                ? Tt
                                                : "payload.".concat(
                                                      M.dataKey.toString()
                                                  );
                                        (J = Pi(j, q, I)),
                                            (F = H && G && Pi(G, q, I));
                                    } else (J = j[k]), (F = H && G && G[k]);
                                    if (!V(J))
                                        return [De].concat(
                                            Nr(
                                                m.renderActivePoints({
                                                    item: A,
                                                    activePoint: J,
                                                    basePoint: F,
                                                    childIndex: k,
                                                    isRange: H,
                                                })
                                            )
                                        );
                                }
                                return H ? [De, null, null] : [De, null];
                            }),
                            (m.renderCustomized = function (x, w, S) {
                                return T.exports.cloneElement(
                                    x,
                                    N(
                                        N(
                                            {
                                                key: "recharts-customized-".concat(
                                                    S
                                                ),
                                            },
                                            m.props
                                        ),
                                        m.state
                                    )
                                );
                            }),
                            (m.uniqueChartId = V(b.id) ? Ta("recharts") : b.id),
                            (m.clipPathId = "".concat(
                                m.uniqueChartId,
                                "-clip"
                            )),
                            b.throttleDelay &&
                                (m.triggeredAfterMouseMove = u3(
                                    m.triggeredAfterMouseMove,
                                    b.throttleDelay
                                )),
                            (m.state = {}),
                            m
                        );
                    }
                    return (
                        x3(_, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    V(this.props.syncId) || this.addListener();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (m) {
                                    V(m.syncId) &&
                                        !V(this.props.syncId) &&
                                        this.addListener(),
                                        !V(m.syncId) &&
                                            V(this.props.syncId) &&
                                            this.removeListener();
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.clearDeferId(),
                                        V(this.props.syncId) ||
                                            this.removeListener(),
                                        this.cancelThrottledTriggerAfterMouseMove();
                                },
                            },
                            {
                                key: "cancelThrottledTriggerAfterMouseMove",
                                value: function () {
                                    typeof this.triggeredAfterMouseMove
                                        .cancel == "function" &&
                                        this.triggeredAfterMouseMove.cancel();
                                },
                            },
                            {
                                key: "getTooltipEventType",
                                value: function () {
                                    var m = bt(
                                        this.props.children,
                                        gr.displayName
                                    );
                                    if (m && d3(m.props.shared)) {
                                        var x = m.props.shared
                                            ? "axis"
                                            : "item";
                                        return l.indexOf(x) >= 0 ? x : s;
                                    }
                                    return s;
                                },
                            },
                            {
                                key: "getMouseInfo",
                                value: function (m) {
                                    if (!this.container) return null;
                                    var x = Ek(this.container),
                                        w = Mk(m, x),
                                        S = this.inRange(w.chartX, w.chartY);
                                    if (!S) return null;
                                    var A = this.state,
                                        $ = A.xAxisMap,
                                        E = A.yAxisMap,
                                        P = this.getTooltipEventType();
                                    if (P !== "axis" && $ && E) {
                                        var M = Mt($).scale,
                                            k = Mt(E).scale,
                                            I =
                                                M && M.invert
                                                    ? M.invert(w.chartX)
                                                    : null,
                                            R =
                                                k && k.invert
                                                    ? k.invert(w.chartY)
                                                    : null;
                                        return N(
                                            N({}, w),
                                            {},
                                            { xValue: I, yValue: R }
                                        );
                                    }
                                    var C = id(
                                        this.state,
                                        this.props.data,
                                        this.props.layout,
                                        S
                                    );
                                    return C ? N(N({}, w), C) : null;
                                },
                            },
                            {
                                key: "getCursorRectangle",
                                value: function () {
                                    var m = this.props.layout,
                                        x = this.state,
                                        w = x.activeCoordinate,
                                        S = x.offset,
                                        A = x.tooltipAxisBandSize,
                                        $ = A / 2;
                                    return {
                                        stroke: "none",
                                        fill: "#ccc",
                                        x:
                                            m === "horizontal"
                                                ? w.x - $
                                                : S.left + 0.5,
                                        y:
                                            m === "horizontal"
                                                ? S.top + 0.5
                                                : w.y - $,
                                        width:
                                            m === "horizontal"
                                                ? A
                                                : S.width - 1,
                                        height:
                                            m === "horizontal"
                                                ? S.height - 1
                                                : A,
                                    };
                                },
                            },
                            {
                                key: "getCursorPoints",
                                value: function () {
                                    var m = this.props.layout,
                                        x = this.state,
                                        w = x.activeCoordinate,
                                        S = x.offset,
                                        A,
                                        $,
                                        E,
                                        P;
                                    if (m === "horizontal")
                                        (A = w.x),
                                            (E = A),
                                            ($ = S.top),
                                            (P = S.top + S.height);
                                    else if (m === "vertical")
                                        ($ = w.y),
                                            (P = $),
                                            (A = S.left),
                                            (E = S.left + S.width);
                                    else if (!V(w.cx) || !V(w.cy))
                                        if (m === "centric") {
                                            var M = w.cx,
                                                k = w.cy,
                                                I = w.innerRadius,
                                                R = w.outerRadius,
                                                C = w.angle,
                                                B = Ce(M, k, I, C),
                                                j = Ce(M, k, R, C);
                                            (A = B.x),
                                                ($ = B.y),
                                                (E = j.x),
                                                (P = j.y);
                                        } else {
                                            var H = w.cx,
                                                G = w.cy,
                                                Z = w.radius,
                                                ee = w.startAngle,
                                                oe = w.endAngle,
                                                ve = Ce(H, G, Z, ee),
                                                _e = Ce(H, G, Z, oe);
                                            return {
                                                points: [ve, _e],
                                                cx: H,
                                                cy: G,
                                                radius: Z,
                                                startAngle: ee,
                                                endAngle: oe,
                                            };
                                        }
                                    return [
                                        { x: A, y: $ },
                                        { x: E, y: P },
                                    ];
                                },
                            },
                            {
                                key: "inRange",
                                value: function (m, x) {
                                    var w = this.props.layout;
                                    if (
                                        w === "horizontal" ||
                                        w === "vertical"
                                    ) {
                                        var S = this.state.offset,
                                            A =
                                                m >= S.left &&
                                                m <= S.left + S.width &&
                                                x >= S.top &&
                                                x <= S.top + S.height;
                                        return A ? { x: m, y: x } : null;
                                    }
                                    var $ = this.state,
                                        E = $.angleAxisMap,
                                        P = $.radiusAxisMap;
                                    if (E && P) {
                                        var M = Mt(E);
                                        return bh({ x: m, y: x }, M);
                                    }
                                    return null;
                                },
                            },
                            {
                                key: "parseEventsOfWrapper",
                                value: function () {
                                    var m = this.props.children,
                                        x = this.getTooltipEventType(),
                                        w = bt(m, gr.displayName),
                                        S = {};
                                    w &&
                                        x === "axis" &&
                                        (w.props.trigger === "click"
                                            ? (S = {
                                                  onClick: this.handleClick,
                                              })
                                            : (S = {
                                                  onMouseEnter:
                                                      this.handleMouseEnter,
                                                  onMouseMove:
                                                      this.handleMouseMove,
                                                  onMouseLeave:
                                                      this.handleMouseLeave,
                                                  onTouchMove:
                                                      this.handleTouchMove,
                                                  onTouchStart:
                                                      this.handleTouchStart,
                                                  onTouchEnd:
                                                      this.handleTouchEnd,
                                              }));
                                    var A = mi(
                                        this.props,
                                        this.handleOuterEvent
                                    );
                                    return N(N({}, A), S);
                                },
                            },
                            {
                                key: "addListener",
                                value: function () {
                                    Ue.on(Lo, this.handleReceiveSyncEvent),
                                        Ue.setMaxListeners &&
                                            Ue._maxListeners &&
                                            Ue.setMaxListeners(
                                                Ue._maxListeners + 1
                                            );
                                },
                            },
                            {
                                key: "removeListener",
                                value: function () {
                                    Ue.removeListener(
                                        Lo,
                                        this.handleReceiveSyncEvent
                                    ),
                                        Ue.setMaxListeners &&
                                            Ue._maxListeners &&
                                            Ue.setMaxListeners(
                                                Ue._maxListeners - 1
                                            );
                                },
                            },
                            {
                                key: "triggerSyncEvent",
                                value: function (m) {
                                    var x = this.props.syncId;
                                    V(x) ||
                                        Ue.emit(Lo, x, this.uniqueChartId, m);
                                },
                            },
                            {
                                key: "applySyncEvent",
                                value: function (m) {
                                    var x = this.props,
                                        w = x.layout,
                                        S = x.syncMethod,
                                        A = this.state.updateId,
                                        $ = m.dataStartIndex,
                                        E = m.dataEndIndex;
                                    if (
                                        !V(m.dataStartIndex) ||
                                        !V(m.dataEndIndex)
                                    )
                                        this.setState(
                                            N(
                                                {
                                                    dataStartIndex: $,
                                                    dataEndIndex: E,
                                                },
                                                h(
                                                    {
                                                        props: this.props,
                                                        dataStartIndex: $,
                                                        dataEndIndex: E,
                                                        updateId: A,
                                                    },
                                                    this.state
                                                )
                                            )
                                        );
                                    else if (V(m.activeTooltipIndex))
                                        this.setState(m);
                                    else {
                                        var P = m.chartX,
                                            M = m.chartY,
                                            k = m.activeTooltipIndex,
                                            I = this.state,
                                            R = I.offset,
                                            C = I.tooltipTicks;
                                        if (!R) return;
                                        if (typeof S == "function") k = S(C, m);
                                        else if (S === "value") {
                                            k = -1;
                                            for (var B = 0; B < C.length; B++)
                                                if (
                                                    C[B].value === m.activeLabel
                                                ) {
                                                    k = B;
                                                    break;
                                                }
                                        }
                                        var j = N(
                                                N({}, R),
                                                {},
                                                { x: R.left, y: R.top }
                                            ),
                                            H = Math.min(P, j.x + j.width),
                                            G = Math.min(M, j.y + j.height),
                                            Z = C[k] && C[k].value,
                                            ee = Oy(
                                                this.state,
                                                this.props.data,
                                                k
                                            ),
                                            oe = C[k]
                                                ? {
                                                      x:
                                                          w === "horizontal"
                                                              ? C[k].coordinate
                                                              : H,
                                                      y:
                                                          w === "horizontal"
                                                              ? G
                                                              : C[k].coordinate,
                                                  }
                                                : Sy;
                                        this.setState(
                                            N(
                                                N({}, m),
                                                {},
                                                {
                                                    activeLabel: Z,
                                                    activeCoordinate: oe,
                                                    activePayload: ee,
                                                    activeTooltipIndex: k,
                                                }
                                            )
                                        );
                                    }
                                },
                            },
                            {
                                key: "filterFormatItem",
                                value: function (m, x, w) {
                                    for (
                                        var S =
                                                this.state
                                                    .formattedGraphicalItems,
                                            A = 0,
                                            $ = S.length;
                                        A < $;
                                        A++
                                    ) {
                                        var E = S[A];
                                        if (
                                            E.item === m ||
                                            E.props.key === m.key ||
                                            (x === Dt(E.item.type) &&
                                                w === E.childIndex)
                                        )
                                            return E;
                                    }
                                    return null;
                                },
                            },
                            {
                                key: "renderAxis",
                                value: function (m, x, w, S) {
                                    var A = this.props,
                                        $ = A.width,
                                        E = A.height;
                                    return T.exports.createElement(Zt, {
                                        ...m,
                                        className: "recharts-"
                                            .concat(m.axisType, " ")
                                            .concat(m.axisType),
                                        key:
                                            x.key ||
                                            "".concat(w, "-").concat(S),
                                        viewBox: {
                                            x: 0,
                                            y: 0,
                                            width: $,
                                            height: E,
                                        },
                                        ticksGenerator: this.axesTicksGenerator,
                                    });
                                },
                            },
                            {
                                key: "renderClipPath",
                                value: function () {
                                    var m = this.clipPathId,
                                        x = this.state.offset,
                                        w = x.left,
                                        S = x.top,
                                        A = x.height,
                                        $ = x.width;
                                    return O("defs", {
                                        children: O("clipPath", {
                                            id: m,
                                            children: O("rect", {
                                                x: w,
                                                y: S,
                                                height: A,
                                                width: $,
                                            }),
                                        }),
                                    });
                                },
                            },
                            {
                                key: "getXScales",
                                value: function () {
                                    var m = this.state.xAxisMap;
                                    return m
                                        ? Object.entries(m).reduce(function (
                                              x,
                                              w
                                          ) {
                                              var S = Zh(w, 2),
                                                  A = S[0],
                                                  $ = S[1];
                                              return N(
                                                  N({}, x),
                                                  {},
                                                  He({}, A, $.scale)
                                              );
                                          },
                                          {})
                                        : null;
                                },
                            },
                            {
                                key: "getYScales",
                                value: function () {
                                    var m = this.state.yAxisMap;
                                    return m
                                        ? Object.entries(m).reduce(function (
                                              x,
                                              w
                                          ) {
                                              var S = Zh(w, 2),
                                                  A = S[0],
                                                  $ = S[1];
                                              return N(
                                                  N({}, x),
                                                  {},
                                                  He({}, A, $.scale)
                                              );
                                          },
                                          {})
                                        : null;
                                },
                            },
                            {
                                key: "getXScaleByAxisId",
                                value: function (m) {
                                    var x, w;
                                    return (x = this.state.xAxisMap) === null ||
                                        x === void 0 ||
                                        (w = x[m]) === null ||
                                        w === void 0
                                        ? void 0
                                        : w.scale;
                                },
                            },
                            {
                                key: "getYScaleByAxisId",
                                value: function (m) {
                                    var x, w;
                                    return (x = this.state.yAxisMap) === null ||
                                        x === void 0 ||
                                        (w = x[m]) === null ||
                                        w === void 0
                                        ? void 0
                                        : w.scale;
                                },
                            },
                            {
                                key: "getItemByXY",
                                value: function (m) {
                                    var x = this.state.formattedGraphicalItems;
                                    if (x && x.length)
                                        for (
                                            var w = 0, S = x.length;
                                            w < S;
                                            w++
                                        ) {
                                            var A = x[w],
                                                $ = A.props,
                                                E = A.item,
                                                P = Dt(E.type);
                                            if (P === "Bar") {
                                                var M = ($.data || []).find(
                                                    function (I) {
                                                        return YD(m, I);
                                                    }
                                                );
                                                if (M)
                                                    return {
                                                        graphicalItem: A,
                                                        payload: M,
                                                    };
                                            } else if (P === "RadialBar") {
                                                var k = ($.data || []).find(
                                                    function (I) {
                                                        return bh(m, I);
                                                    }
                                                );
                                                if (k)
                                                    return {
                                                        graphicalItem: A,
                                                        payload: k,
                                                    };
                                            }
                                        }
                                    return null;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var m = this;
                                    if (!_f(this)) return null;
                                    var x = this.props,
                                        w = x.children,
                                        S = x.className,
                                        A = x.width,
                                        $ = x.height,
                                        E = x.style,
                                        P = x.compact,
                                        M = x.title,
                                        k = x.desc,
                                        I = Qh(x, [
                                            "children",
                                            "className",
                                            "width",
                                            "height",
                                            "style",
                                            "compact",
                                            "title",
                                            "desc",
                                        ]),
                                        R = ae(I),
                                        C = {
                                            CartesianGrid: {
                                                handler: this.renderGrid,
                                                once: !0,
                                            },
                                            ReferenceArea: {
                                                handler:
                                                    this.renderReferenceElement,
                                            },
                                            ReferenceLine: {
                                                handler:
                                                    this.renderReferenceElement,
                                            },
                                            ReferenceDot: {
                                                handler:
                                                    this.renderReferenceElement,
                                            },
                                            XAxis: {
                                                handler: this.renderXAxis,
                                            },
                                            YAxis: {
                                                handler: this.renderYAxis,
                                            },
                                            Brush: {
                                                handler: this.renderBrush,
                                                once: !0,
                                            },
                                            Bar: {
                                                handler:
                                                    this.renderGraphicChild,
                                            },
                                            Line: {
                                                handler:
                                                    this.renderGraphicChild,
                                            },
                                            Area: {
                                                handler:
                                                    this.renderGraphicChild,
                                            },
                                            Radar: {
                                                handler:
                                                    this.renderGraphicChild,
                                            },
                                            RadialBar: {
                                                handler:
                                                    this.renderGraphicChild,
                                            },
                                            Scatter: {
                                                handler:
                                                    this.renderGraphicChild,
                                            },
                                            Pie: {
                                                handler:
                                                    this.renderGraphicChild,
                                            },
                                            Funnel: {
                                                handler:
                                                    this.renderGraphicChild,
                                            },
                                            Tooltip: {
                                                handler: this.renderCursor,
                                                once: !0,
                                            },
                                            PolarGrid: {
                                                handler: this.renderPolarGrid,
                                                once: !0,
                                            },
                                            PolarAngleAxis: {
                                                handler: this.renderPolarAxis,
                                            },
                                            PolarRadiusAxis: {
                                                handler: this.renderPolarAxis,
                                            },
                                            Customized: {
                                                handler: this.renderCustomized,
                                            },
                                        };
                                    if (P)
                                        return L(qo, {
                                            ...R,
                                            width: A,
                                            height: $,
                                            title: M,
                                            desc: k,
                                            children: [
                                                this.renderClipPath(),
                                                Of(w, C),
                                            ],
                                        });
                                    var B = this.parseEventsOfWrapper();
                                    return L("div", {
                                        className: pe("recharts-wrapper", S),
                                        style: N(
                                            {
                                                position: "relative",
                                                cursor: "default",
                                                width: A,
                                                height: $,
                                            },
                                            E
                                        ),
                                        ...B,
                                        ref: function (H) {
                                            m.container = H;
                                        },
                                        children: [
                                            L(qo, {
                                                ...R,
                                                width: A,
                                                height: $,
                                                title: M,
                                                desc: k,
                                                children: [
                                                    this.renderClipPath(),
                                                    Of(w, C),
                                                ],
                                            }),
                                            this.renderLegend(),
                                            this.renderTooltip(),
                                        ],
                                    });
                                },
                            },
                        ]),
                        _
                    );
                })(T.exports.Component)),
            (r.displayName = i),
            (r.defaultProps = N(
                {
                    layout: "horizontal",
                    stackOffset: "none",
                    barCategoryGap: "10%",
                    barGap: 4,
                    margin: { top: 5, right: 5, bottom: 5, left: 5 },
                    reverseStackOrder: !1,
                    syncMethod: "index",
                },
                y
            )),
            (r.getDerivedStateFromProps = function (v, g) {
                var _ = v.data,
                    b = v.children,
                    m = v.width,
                    x = v.height,
                    w = v.layout,
                    S = v.stackOffset,
                    A = v.margin;
                if (V(g.updateId)) {
                    var $ = ad(v);
                    return N(
                        N(
                            N({}, $),
                            {},
                            { updateId: 0 },
                            h(N(N({ props: v }, $), {}, { updateId: 0 }), g)
                        ),
                        {},
                        {
                            prevData: _,
                            prevWidth: m,
                            prevHeight: x,
                            prevLayout: w,
                            prevStackOffset: S,
                            prevMargin: A,
                            prevChildren: b,
                        }
                    );
                }
                if (
                    _ !== g.prevData ||
                    m !== g.prevWidth ||
                    x !== g.prevHeight ||
                    w !== g.prevLayout ||
                    S !== g.prevStackOffset ||
                    !_r(A, g.prevMargin)
                ) {
                    var E = ad(v),
                        P = {
                            chartX: g.chartX,
                            chartY: g.chartY,
                            isTooltipActive: g.isTooltipActive,
                        },
                        M = N(
                            N({}, id(g, _, w)),
                            {},
                            { updateId: g.updateId + 1 }
                        ),
                        k = N(N(N({}, E), P), M);
                    return N(
                        N(N({}, k), h(N({ props: v }, k), g)),
                        {},
                        {
                            prevData: _,
                            prevWidth: m,
                            prevHeight: x,
                            prevLayout: w,
                            prevStackOffset: S,
                            prevMargin: A,
                            prevChildren: b,
                        }
                    );
                }
                if (!Qp(b, g.prevChildren)) {
                    var I = !V(_),
                        R = I ? g.updateId : g.updateId + 1;
                    return N(
                        N(
                            { updateId: R },
                            h(N(N({ props: v }, g), {}, { updateId: R }), g)
                        ),
                        {},
                        { prevChildren: b }
                    );
                }
                return null;
            }),
            (r.renderActiveDot = function (v, g) {
                var _;
                return (
                    T.exports.isValidElement(v)
                        ? (_ = T.exports.cloneElement(v, g))
                        : X(v)
                        ? (_ = v(g))
                        : (_ = O(pl, { ...g })),
                    O(
                        je,
                        { className: "recharts-active-dot", children: _ },
                        g.key
                    )
                );
            }),
            n
        );
    },
    F3 = j3({
        chartName: "AreaChart",
        GraphicalChild: Bt,
        axisComponents: [
            { axisType: "xAxis", AxisComp: ml },
            { axisType: "yAxis", AxisComp: bl },
        ],
        formatAxisMap: sj,
    });
function uu(e) {
    return Dr({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z",
                },
            },
        ],
    })(e);
}
function oa(e) {
    return Dr({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
            { tag: "path", attr: { d: "M7 7h10v2H7zm0 4h7v2H7z" } },
            {
                tag: "path",
                attr: {
                    d: "M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z",
                },
            },
        ],
    })(e);
}
function B3(e) {
    return Dr({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
            { tag: "circle", attr: { cx: "7.499", cy: "9.5", r: "1.5" } },
            { tag: "path", attr: { d: "m10.499 14-1.5-2-3 4h12l-4.5-6z" } },
            {
                tag: "path",
                attr: {
                    d: "M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z",
                },
            },
        ],
    })(e);
}
function U3(e) {
    return Dr({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7zm-1.998 10H4V7h12l.001 4.999L16 12l.001.001.001 4.999z",
                },
            },
        ],
    })(e);
}
function H3({ post: e }) {
    let t = 0,
        r = 0,
        n = 0;
    e.forEach((l) => {
        const { like: c, reply: f, retweet: d } = l;
        (t += c ? parseInt(c) : 0),
            (r += d ? parseInt(d) : 0),
            (n += f ? parseInt(f) : 0);
    });
    const i = e.length > 0 ? e.length : 1,
        a = e.map((l) => ({
            name: er(l.time).format("DD-MM-YYYY"),
            uv: l.like ? parseInt(l.like) : 0,
        })),
        o = e.map((l) => ({
            name: er(l.time).format("DD-MM-YYYY"),
            uv: l.retweet ? parseInt(l.retweet) : 0,
        })),
        s = e.map((l) => ({
            name: er(l.time).format("DD-MM-YYYY"),
            uv: l.reply ? parseInt(l.reply) : 0,
        })),
        u = [
            {
                name: "Average Likes",
                icon: O(vi, {
                    className: "mr-2 -mt-1 inline-block h-5 align-middle",
                }),
                stat: `${Math.round((t / i) * 10) / 10} Likes`,
                color: "colorLike",
                borderColor: "#CB41FD",
                change: "+20/Years",
                data: a,
            },
            {
                name: "Average Retweets",
                icon: O(yi, {
                    className: "mr-2 -mt-1 inline-block h-5 align-middle",
                }),
                stat: `${Math.round((r / i) * 10) / 10} Retweets`,
                color: "colorRetweet",
                borderColor: "#C48353",
                change: "+20/Years",
                data: o,
            },
            {
                name: "Average Replies",
                icon: O(oa, {
                    className: "mr-2 -mt-1 inline-block h-5 align-middle",
                }),
                stat: `${Math.round((n / i) * 10) / 10} Replies`,
                color: "colorComment",
                borderColor: "#8CF25F",
                change: "+20/Years",
                data: s,
            },
        ];
    return L("div", {
        className: "mx-auto max-w-7xl px-4 md:px-6 lg:px-8",
        children: [
            O("h3", {
                className:
                    "my-10 text-left text-xl font-medium leading-6 text-white",
                children: "Account Data",
            }),
            O("dl", {
                className: "mt-5 grid grid-cols-1 gap-5 md:grid-cols-3",
                children: u.map((l) =>
                    L(
                        "div",
                        {
                            className:
                                "flex h-52 flex-col overflow-hidden rounded-lg bg-black-200 text-left text-white shadow",
                            children: [
                                L("div", {
                                    className: "px-4 pt-5 md:p-6 md:pb-0",
                                    children: [
                                        L("div", {
                                            className: "grid grid-cols-2",
                                            children: [
                                                O("dt", {
                                                    className:
                                                        "truncate text-sm font-medium",
                                                    children: l.name,
                                                }),
                                                O("dt", {
                                                    className:
                                                        "truncate text-right text-sm font-medium text-positve-green",
                                                }),
                                            ],
                                        }),
                                        O("div", {
                                            className:
                                                "mt-1 text-2xl font-semibold tracking-tight",
                                            children: L(Rr, {
                                                children: [l.icon, " ", l.stat],
                                            }),
                                        }),
                                    ],
                                }),
                                O("div", {
                                    className: "flex-grow",
                                    children: O(rk, {
                                        children: L(F3, {
                                            data: l.data,
                                            margin: {
                                                top: 0,
                                                right: 0,
                                                left: 0,
                                                bottom: 0,
                                            },
                                            children: [
                                                L("defs", {
                                                    children: [
                                                        L("linearGradient", {
                                                            id: "colorLike",
                                                            x1: "0",
                                                            y1: "0",
                                                            x2: "1",
                                                            y2: "0",
                                                            children: [
                                                                O("stop", {
                                                                    offset: "5%",
                                                                    stopColor:
                                                                        "#CB41FD",
                                                                    stopOpacity: 1,
                                                                }),
                                                                O("stop", {
                                                                    offset: "95%",
                                                                    stopColor:
                                                                        "#3BBAE0",
                                                                    stopOpacity: 1,
                                                                }),
                                                            ],
                                                        }),
                                                        L("linearGradient", {
                                                            id: "colorRetweet",
                                                            x1: "0",
                                                            y1: "0",
                                                            x2: "1",
                                                            y2: "0",
                                                            children: [
                                                                O("stop", {
                                                                    offset: "5%",
                                                                    stopColor:
                                                                        "#FFA72F",
                                                                    stopOpacity: 1,
                                                                }),
                                                                O("stop", {
                                                                    offset: "95%",
                                                                    stopColor:
                                                                        "#DD1C1C",
                                                                    stopOpacity: 1,
                                                                }),
                                                            ],
                                                        }),
                                                        L("linearGradient", {
                                                            id: "colorComment",
                                                            x1: "0",
                                                            y1: "0",
                                                            x2: "1",
                                                            y2: "0",
                                                            children: [
                                                                O("stop", {
                                                                    offset: "5%",
                                                                    stopColor:
                                                                        "#8CF25F",
                                                                    stopOpacity: 1,
                                                                }),
                                                                O("stop", {
                                                                    offset: "95%",
                                                                    stopColor:
                                                                        "#1DFFB1",
                                                                    stopOpacity: 1,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                O(Bt, {
                                                    type: "monotone",
                                                    dataKey: "uv",
                                                    stroke: l.borderColor,
                                                    fill: `url(#${l.color})`,
                                                    strokeWidth: 0,
                                                    fillOpacity: "1",
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        },
                        l.name
                    )
                ),
            }),
        ],
    });
}
function W3({ post: e }) {
    const t = T.exports.useMemo(() => {
        let r = e.map((n) => {
            const i = n.like !== "" ? n.like : "?",
                a = n.reply !== "" ? n.reply : "?",
                o = n.retweet !== "" ? n.retweet : "?",
                s = n.spread !== "" ? n.spread : "?",
                reach = n.reach !== "" ? n.reach : "?";
            return {
                like: i,
                reply: a,
                retweet: o,
                spread: s,
                reach,
                time: n.time,
                content: n.content,
            };
        });
        return (
            (r = r.sort((n, i) => {
                const a =
                        parseInt(n.like) +
                        parseInt(n.reply) * 1.5 +
                        parseInt(n.retweet) * 2,
                    o =
                        parseInt(i.like) +
                        parseInt(i.reply) * 1.5 +
                        parseInt(i.retweet) * 2;
                return a > o ? -1 : 1;
            })),
            r.slice(0, 5)
        );
    }, [e]);
    return L("div", {
        className: "",
        children: [
            O("h3", {
                className:
                    "my-10 text-left text-xl font-medium leading-6 text-white",
                children: "Top Score Tweets",
            }),
            O("div", {
                className: "mt-8 flex h-72 flex-col rounded-lg bg-black-200",
                children: O("div", {
                    className: "overflow-x-auto",
                    children: O("div", {
                        className: "inline-block w-full py-2 align-middle",
                        children: O("div", {
                            className:
                                "overflow-hidden px-8 shadow-sm ring-1 ring-black ring-opacity-5",
                            children: L("table", {
                                className:
                                    "w-full  divide-y divide-blue-200 text-white",
                                children: [
                                    O("thead", {
                                        children: L("tr", {
                                            children: [
                                                O("th", {
                                                    scope: "col",
                                                    className:
                                                        "w-1/5 py-3.5 text-left text-sm font-medium",
                                                    children: "Post Date",
                                                }),
                                                O("th", {
                                                    scope: "col",
                                                    className:
                                                        "w-3/6 py-3.5 text-left text-sm font-medium",
                                                    children: "Post Content",
                                                }),
                                                O("th", {
                                                    scope: "col",
                                                    className:
                                                        "w-2/6 py-3.5 text-right text-sm font-medium",
                                                    children: "Interaction",
                                                }),
                                            ],
                                        }),
                                    }),
                                    O("tbody", {
                                        className: "divide-y divide-blue-200",
                                        children: t.map((r) =>
                                            L(
                                                "tr",
                                                {
                                                    children: [
                                                        O("td", {
                                                            className:
                                                                "w-1/6 whitespace-normal py-4 text-left text-sm font-medium",
                                                            children: er(
                                                                r.time
                                                            ).format(
                                                                "DD-MM-YYYY"
                                                            ),
                                                        }),
                                                        O("td", {
                                                            className:
                                                                "w-3/6 whitespace-normal py-4 text-left text-sm",
                                                            children: r.content,
                                                        }),
                                                        L("td", {
                                                            className:
                                                                "w-2/6 whitespace-normal py-4 text-right text-sm",
                                                            children: [
                                                                L("span", {
                                                                    className:
                                                                        "text-heart-red",
                                                                    children: [
                                                                        O(vi, {
                                                                            className:
                                                                                "mr-1 -mt-1 inline-block h-3 align-middle",
                                                                        }),
                                                                        " ",
                                                                        r.like
                                                                            ? r.like
                                                                            : 0,
                                                                        " ",
                                                                    ],
                                                                }),
                                                                L("span", {
                                                                    className:
                                                                        "text-retweet-blue",
                                                                    children: [
                                                                        O(yi, {
                                                                            className:
                                                                                "mx-1 -mt-1 inline-block h-3 align-middle",
                                                                        }),
                                                                        " ",
                                                                        r.retweet
                                                                            ? r.retweet
                                                                            : 0,
                                                                        " ",
                                                                    ],
                                                                }),
                                                                L("span", {
                                                                    className:
                                                                        "text-comment-green",
                                                                    children: [
                                                                        O(oa, {
                                                                            className:
                                                                                "mx-1 -mt-1 inline-block h-3 align-middle",
                                                                        }),
                                                                        " ",
                                                                        r.reply
                                                                            ? r.reply
                                                                            : 0,
                                                                    ],
                                                                }),
                                                                L("span", {
                                                                    className:
                                                                        "text-orange-main",
                                                                    children: [
                                                                        O(uu, {
                                                                            className:
                                                                                "mx-1 -mt-1 inline-block h-3 align-middle",
                                                                        }),
                                                                        " ",
                                                                        r.reach
                                                                            ? r.reach
                                                                            : 0,
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                r.content
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function z3(e) {
    return Dr({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
                tag: "path",
                attr: {
                    d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z",
                },
            },
        ],
    })(e);
}
function G3(e) {
    return Dr({
        tag: "svg",
        attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M8.586 5.586c-.781.781-.781 2.047 0 2.828l3.585 3.586-3.585 3.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l6.415-6.414-6.415-6.414c-.78-.781-2.048-.781-2.828 0z",
                },
            },
        ],
    })(e);
}
function q3({ post: e, onSelectTab: t }) {
    let r = 0,
        n = 0,
        i = 0;
    e.forEach((o) => {
        o.postType === "text" && r++,
            o.postType === "image" && n++,
            o.postType === "video" && i++;
    });
    const a = [
        {
            name: "Text Content",
            handle: `${r} Tweets`,
            postType: "text",
            icon: O(z3, {
                className:
                    "absolute top-1/2 left-1/2 h-2/5 w-2/5 -translate-y-1/2 -translate-x-1/2 text-white",
            }),
            bgColor: "bg-gradient-to-r from-amber-400 to-amber-700",
        },
        {
            name: "Image Content",
            handle: `${n} Tweets`,
            postType: "image",
            icon: O(B3, {
                className:
                    "absolute top-1/2 left-1/2 h-2/5 w-2/5 -translate-y-1/2 -translate-x-1/2 text-white",
            }),
            bgColor: "bg-gradient-to-r from-lime-400 to-green-500",
        },
        {
            name: "Video Content",
            handle: `${i} Tweets`,
            postType: "video",
            icon: O(U3, {
                className:
                    "absolute top-1/2 left-1/2 h-2/5 w-2/5 -translate-y-1/2 -translate-x-1/2 text-white",
            }),
            bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
        },
    ];
    return L("div", {
        className: "",
        children: [
            O("h3", {
                className:
                    "my-10 text-left text-xl font-medium leading-6 text-white",
                children: "Tweets Type",
            }),
            O("div", {
                className:
                    "mt-8 flex h-72 flex-col rounded-lg bg-black-200 p-6",
                children: O("div", {
                    className: "flow-root",
                    children: O("ul", {
                        role: "list",
                        className: "-my-5 divide-y divide-blue-200",
                        children: a.map((o) =>
                            O(
                                "li",
                                {
                                    onClick: () => t(o.postType),
                                    className: "cursor-pointer py-6",
                                    children: L("div", {
                                        className:
                                            "flex items-center space-x-4",
                                        children: [
                                            O("div", {
                                                className: "flex-shrink-0",
                                                children: O("div", {
                                                    className: rr(
                                                        "relative h-12 w-12 rounded-lg",
                                                        o.bgColor
                                                    ),
                                                    children: o.icon,
                                                }),
                                            }),
                                            L("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    O("p", {
                                                        className:
                                                            "truncate text-left text-sm font-medium text-white",
                                                        children: o.name,
                                                    }),
                                                    O("p", {
                                                        className:
                                                            "truncate text-left text-sm text-white",
                                                        children: o.handle,
                                                    }),
                                                ],
                                            }),
                                            O("div", {
                                                children: O("a", {
                                                    href: "#",
                                                    className:
                                                        "inline-flex items-center px-2.5 py-0.5 text-sm text-white",
                                                    children: O(G3, {}),
                                                }),
                                            }),
                                        ],
                                    }),
                                },
                                o.name
                            )
                        ),
                    }),
                }),
            }),
        ],
    });
}
function V3({
    onChangeValue: e,
    value: t,
    onChangeFilter: r,
    filter: n,
    onChangeDate: i,
    filterDate: a,
}) {
    const o = (s) => {
        (s === "content" || s === "postType") && r(s);
    };
    return O("div", {
        className: "rounded-lg bg-black-200",
        children: L("div", {
            className:
                "mx-auto flex max-w-7xl justify-between py-4 px-4 sm:px-6 lg:px-8",
            children: [
                L("div", {
                    className: "flex max-w-xl flex-row items-center",
                    children: [
                        O("h2", {
                            className:
                                "mr-8 text-xl font-bold tracking-tight text-white",
                            children: "Search",
                        }),
                        O("div", {
                            className: "flex-grow",
                            children: L("div", {
                                className: "relative mt-1 rounded-lg shadow-sm",
                                children: [
                                    O("div", {
                                        className:
                                            "pointer-events-none absolute inset-y-0 left-0 mr-4 flex items-center px-4",
                                        children: O("span", {
                                            className: "text-white sm:text-sm",
                                            children: O(Ry, {}),
                                        }),
                                    }),
                                    O("input", {
                                        type: "text",
                                        className:
                                            "block w-full rounded-lg bg-black-300 py-2 pl-12 pr-12 text-sm text-white focus:border-none focus:outline-none",
                                        placeholder: "Search",
                                        onChange: (s) => e(s.target.value),
                                        value: t,
                                    }),
                                    L("div", {
                                        className:
                                            "absolute inset-y-0 right-0 flex items-center",
                                        children: [
                                            O("label", {
                                                htmlFor: "currency",
                                                className: "sr-only",
                                                children: "Filter Type",
                                            }),
                                            L("select", {
                                                onChange: (s) =>
                                                    o(s.target.value),
                                                value: n,
                                                className:
                                                    "focus:ring-none mr-4 h-full rounded-md border-transparent bg-transparent py-0 pl-2 text-white focus:border-none focus:outline-0 sm:text-sm",
                                                children: [
                                                    O("option", {
                                                        value: "postType",
                                                        children: "Type",
                                                    }),
                                                    O("option", {
                                                        value: "content",
                                                        children: "Content",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                L("div", {
                    className: "flex w-full max-w-xs flex-row items-center",
                    children: [
                        O(Dy, { className: "mx-4 h-4 w-4 text-white" }),
                        O("input", {
                            type: "date",
                            onChange: (s) => i(s.target.value),
                            value: a,
                            className:
                                "block w-full rounded-lg bg-black-300 py-2 px-2 text-sm text-white focus:border-none focus:outline-none",
                        }),
                    ],
                }),
            ],
        }),
    });
}
function Y3(e) {
    return L("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "33.924",
        height: "30.171",
        viewBox: "0 0 33.924 30.171",
        ...e,
        children: [
            O("defs", {
                children: O("clipPath", {
                    id: "clip-path",
                    children: O("rect", {
                        id: "Rectangle_10",
                        "data-name": "Rectangle 10",
                        width: "33.924",
                        height: "30.171",
                        transform: "translate(0 0)",
                        fill: "#FFB225",
                    }),
                }),
            }),
            O("g", {
                id: "Group_3",
                "data-name": "Group 3",
                transform: "translate(0 -0.001)",
                children: O("g", {
                    id: "Group_1",
                    "data-name": "Group 1",
                    transform: "translate(0 0.001)",
                    children: O("path", {
                        id: "Path_1",
                        "data-name": "Path 1",
                        d: "M30.932,0H2.991A2.987,2.987,0,0,0,.4,4.482l13.971,24.2a2.986,2.986,0,0,0,5.173,0l13.971-24.2A2.987,2.987,0,0,0,30.932,0M23.674,7.924,17.607,18.431a.745.745,0,0,1-1.291,0L10.25,7.924A.746.746,0,0,1,10.9,6.806H23.028a.746.746,0,0,1,.646,1.118",
                        transform: "translate(0 -0.001)",
                        fill: "#FFB225",
                    }),
                }),
            }),
        ],
    });
}
function X3({ open: e, setOpen: t, imageList: r, imageIndex: n, setIndex: i }) {
    const a = T.exports.useRef(null);
    return O(xr.Root, {
        show: e,
        as: T.exports.Fragment,
        children: L(El, {
            as: "div",
            className: "relative z-10",
            initialFocus: a,
            onClose: t,
            children: [
                O(xr.Child, {
                    as: T.exports.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: O("div", {
                        className:
                            "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    }),
                }),
                O("div", {
                    className: "fixed inset-0 z-50 overflow-y-auto",
                    children: O("div", {
                        className:
                            "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                        children: O(xr.Child, {
                            as: T.exports.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom:
                                "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            enterTo: "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                            leaveTo:
                                "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            children: L(El.Panel, {
                                className:
                                    "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6",
                                children: [
                                    O("div", {
                                        className: "w-full",
                                        children: O("img", {
                                            src: r[n],
                                            className: "w-full",
                                        }),
                                    }),
                                    L("div", {
                                        className:
                                            "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse",
                                        children: [
                                            n > 0 &&
                                                O("button", {
                                                    type: "button",
                                                    className:
                                                        "inline-flex w-full justify-center rounded-md border border-transparent bg-orange-main px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none sm:ml-3 sm:w-auto sm:text-sm",
                                                    onClick: () => i(n - 1),
                                                    children: "Prev",
                                                }),
                                            n < r.length - 1 &&
                                                O("button", {
                                                    type: "button",
                                                    className:
                                                        "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm",
                                                    onClick: () => i(n + 1),
                                                    children: "Next",
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
}
const Pt = ({ name: e, sort: t, onSort: r, className: n, type: i }) =>
    L("th", {
        scope: "col",
        className: rr("cursor-pointer py-3.5 text-left text-sm font-medium", n),
        onClick: () => r(i, t === "asc" ? "desc" : t === "desc" ? "" : "asc"),
        children: [
            e,
            " ",
            t === "asc" && O(Ly, { className: "inline-block" }),
            t === "desc" && O(jy, { className: "inline-block" }),
            t === "" && O(Fy, { className: "inline-block" }),
        ],
    });
function K3({ post: e, filter: t, filterDate: r, filterValue: n }) {
    const [i, a] = T.exports.useState(""),
        [o, s] = T.exports.useState(""),
        [u, l] = T.exports.useState(!1),
        [c, f] = T.exports.useState([]),
        [d, y] = T.exports.useState(0),
        p = T.exports.useMemo(() => {
            let g = e.map((_, b) => {
                let { like: m, reply: x, retweet: w } = _;
                (m = m || "0"), (x = x || "0"), (w = w || "0");
                const S = parseInt(m) + parseInt(x) * 1.5 + parseInt(w) * 2;
                const outputData = {
                    id: b + 1,
                    time: er(_.time).format("YYYY-MM-DD"),
                    content: _.content,
                    like: _.like ? parseInt(_.like) : "?",
                    retweet: _.retweet ? parseInt(_.retweet) : "?",
                    comment: _.reply ? parseInt(_.reply) : "?",
                    spread: _.spread ? parseInt(_.spread) : "?",
                    score: S,
                    postType: ud(_.postType),
                    image: _.image || _.video || [],
                    reach: _.reach ? parseInt(_.reach) : "?",
                    tweetId: _.tweetId ? _.tweetId : "?",
                };

                return outputData;
            });
            if (n) {
                const _ = n.toLowerCase();
                g = g.filter((b) => {
                    const m = b[t].toLowerCase();
                    return console.log(m, _, m.includes(_)), m.includes(_);
                });
            }
            return (
                r &&
                    (g = g.filter((_) => {
                        const b = er(r).format("DD-MM-YYYY");
                        return _.time === b;
                    })),
                o &&
                    i &&
                    (g.sort((_, b) => (_[o] > b[o] ? 1 : _[o] < b[o] ? -1 : 0)),
                    i === "asc" && g.reverse()),
                g
            );
        }, [e, t, r, n, o, i]),
        h = (g, _) => {
            s(g), a(_);
        },
        v = (g, _) => {
            f(g), y(_), l(!0);
        };
    return L("div", {
        className: "",
        children: [
            O(X3, {
                open: u,
                setOpen: l,
                imageList: c,
                imageIndex: d,
                setIndex: y,
            }),
            O("h3", {
                className:
                    "my-10 text-left text-xl font-medium leading-6 text-white",
                children: "Top Score Tweets",
            }),
            O("div", {
                className: "mt-8 flex flex-col rounded-lg bg-black-200",
                children: O("div", {
                    className: "overflow-x-auto",
                    children: O("div", {
                        className: "inline-block w-full py-2 align-middle",
                        children: O("div", {
                            className:
                                "overflow-hidden px-8 shadow-sm ring-1 ring-black ring-opacity-5",
                            children: L("table", {
                                className:
                                    "w-full  divide-y divide-blue-200 text-white",
                                children: [
                                    O("thead", {
                                        children: L("tr", {
                                            children: [
                                                O(Pt, {
                                                    name: "Date",
                                                    sort: o === "time" ? i : "",
                                                    onSort: h,
                                                    className: "w-2/12",
                                                    type: "time",
                                                }),
                                                O(Pt, {
                                                    name: "Content",
                                                    sort:
                                                        o === "content"
                                                            ? i
                                                            : "",
                                                    onSort: h,
                                                    className: "w-2/12",
                                                    type: "content",
                                                }),
                                                O(Pt, {
                                                    name: "Type",
                                                    sort:
                                                        o === "postType"
                                                            ? i
                                                            : "",
                                                    onSort: h,
                                                    className: "w-1/12",
                                                    type: "postType",
                                                }),
                                                O("th", {
                                                    scope: "col",
                                                    className:
                                                        "w-2/12 py-3.5 pr-4 text-left text-sm font-medium",
                                                    children: "Image",
                                                }),
                                                O(Pt, {
                                                    name: O(vi, {
                                                        className:
                                                            "inline-block h-3 align-middle",
                                                    }),
                                                    sort: o === "like" ? i : "",
                                                    onSort: h,
                                                    className:
                                                        "w-1/12 text-right",
                                                    type: "like",
                                                }),
                                                O(Pt, {
                                                    name: O(yi, {
                                                        className:
                                                            "inline-block h-3 align-middle",
                                                    }),
                                                    sort:
                                                        o === "retweet"
                                                            ? i
                                                            : "",
                                                    onSort: h,
                                                    className:
                                                        "w-1/12 text-right",
                                                    type: "retweet",
                                                }),
                                                O(Pt, {
                                                    name: O(oa, {
                                                        className:
                                                            "inline-block h-3 align-middle",
                                                    }),
                                                    sort:
                                                        o === "reply" ? i : "",
                                                    onSort: h,
                                                    className:
                                                        "w-1/12 text-right",
                                                    type: "reply",
                                                }),
                                                O(Pt, {
                                                    name: O(uu, {
                                                        className:
                                                            "inline-block h-3 align-middle",
                                                    }),
                                                    sort:
                                                        o === "reach" ? i : "",
                                                    onSort: h,
                                                    className:
                                                        "w-1/12 text-right",
                                                    type: "reach",
                                                }),
                                                O(Pt, {
                                                    name: "Tweet ID",
                                                    sort:
                                                        o === "tweetId"
                                                            ? i
                                                            : "",
                                                    onSort: h,
                                                    className:
                                                        "w-2/12 text-right",
                                                    type: "tweetId",
                                                }),
                                            ],
                                        }),
                                    }),
                                    O("tbody", {
                                        className: "divide-y divide-blue-200",
                                        children: p.map((g) =>
                                            L(
                                                "tr",
                                                {
                                                    children: [
                                                        O("td", {
                                                            className:
                                                                "w-2/12 whitespace-normal py-4 pr-4 text-left text-sm font-medium",
                                                            children: g.time,
                                                        }),
                                                        O("td", {
                                                            className:
                                                                "w-2/12 whitespace-normal py-4 pr-4 text-left text-sm",
                                                            children: g.content,
                                                        }),
                                                        O("td", {
                                                            className:
                                                                "w-1/12 whitespace-normal py-4 pr-4 text-left text-sm",
                                                            children:
                                                                g.postType,
                                                        }),
                                                        O("td", {
                                                            className:
                                                                "w-2/12 whitespace-normal py-4 pr-4 text-left text-sm",
                                                            children:
                                                                g.image.map(
                                                                    (_, b) =>
                                                                        O(
                                                                            "div",
                                                                            {
                                                                                style: {
                                                                                    backgroundImage: `url(${_})`,
                                                                                },
                                                                                onClick:
                                                                                    () =>
                                                                                        v(
                                                                                            g.image,
                                                                                            b
                                                                                        ),
                                                                                className:
                                                                                    "mb-2 aspect-video w-full cursor-pointer rounded-lg bg-cover bg-center",
                                                                            },
                                                                            _
                                                                        )
                                                                ),
                                                        }),
                                                        O("td", {
                                                            className:
                                                                "w-1/12 whitespace-normal py-4 text-right text-sm",
                                                            children: L(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "text-heart-red",
                                                                    children: [
                                                                        O(vi, {
                                                                            className:
                                                                                "mr-1 -mt-1 inline-block h-3 align-middle",
                                                                        }),
                                                                        " ",
                                                                        g.like,
                                                                        " ",
                                                                    ],
                                                                }
                                                            ),
                                                        }),
                                                        O("td", {
                                                            className:
                                                                "w-1/12 whitespace-normal py-4 text-right text-sm",
                                                            children: L(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "text-retweet-blue",
                                                                    children: [
                                                                        O(yi, {
                                                                            className:
                                                                                "mr-1 -mt-1 inline-block h-3 align-middle",
                                                                        }),
                                                                        " ",
                                                                        g.retweet,
                                                                        " ",
                                                                    ],
                                                                }
                                                            ),
                                                        }),
                                                        O("td", {
                                                            className:
                                                                "w-1/12 whitespace-normal py-4 text-right text-sm",
                                                            children: L(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "text-comment-green",
                                                                    children: [
                                                                        O(oa, {
                                                                            className:
                                                                                "mr-1 -mt-1 inline-block h-3 align-middle",
                                                                        }),
                                                                        " ",
                                                                        g.comment,
                                                                    ],
                                                                }
                                                            ),
                                                        }),
                                                        O("td", {
                                                            className:
                                                                "w-1/12 whitespace-normal py-4 text-right text-sm",
                                                            children: L(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "text-orange-main",
                                                                    children: [
                                                                        O(uu, {
                                                                            className:
                                                                                "mr-1 -mt-1 inline-block h-3 align-middle",
                                                                        }),
                                                                        " ",
                                                                        g.reach,
                                                                    ],
                                                                }
                                                            ),
                                                        }),
                                                        O("td", {
                                                            className:
                                                                "w-2/12 whitespace-normal py-4 pr-4 text-right text-sm",
                                                            children: g.tweetId,
                                                        }),
                                                    ],
                                                },
                                                g.id
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function J3() {
    return O("footer", {
        className: "bg-black-100",
        children: O(Rd, {
            children: O(Rr, {
                children: L("div", {
                    className:
                        "flex flex-col items-center border-t border-black-200 py-10 sm:flex-row-reverse sm:justify-between",
                    children: [
                        O("div", { className: "flex gap-x-6" }),
                        L("p", {
                            className: "mt-6 text-sm text-white sm:mt-0",
                            children: [
                                "Copyright \xA9 ",
                                new Date().getFullYear(),
                                " Nighthustle. All rights reserved.",
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
const Z3 = () => {
    const [e, t] = T.exports.useState(0),
        [r, n] = T.exports.useState({}),
        [i, a] = T.exports.useState([]),
        [o, s] = T.exports.useState("content"),
        [u, l] = T.exports.useState(""),
        [c, f] = T.exports.useState("");
    T.exports.useEffect(() => {
        const p = localStorage.profileData;
        n(JSON.parse(p));
        const h = localStorage.postData;
        a(JSON.parse(h));
    }, []);
    const d = () => {
        console.log("Export CSV");
    };
    return L("div", {
        className: "App",
        children: [
            O(Am, {
                onExport: () => d(),
                tab: e,
                profile: r,
                onChangeTab: (p) => t(p),
                post: i,
            }),
            e === 0
                ? L(Rr, {
                      children: [
                          O($m, { profile: r }),
                          O(H3, { post: i }),
                          O("div", {
                              className:
                                  "mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8",
                              children: L("div", {
                                  className:
                                      "grid grid-cols-1 gap-4 lg:grid-cols-5",
                                  children: [
                                      O("div", {
                                          className: "col-span-3",
                                          children: O(W3, { post: i }),
                                      }),
                                      O("div", {
                                          className: "col-span-2",
                                          children: O(q3, {
                                              onSelectTab: async (p) => {
                                                  s("postType"),
                                                      l(ud(p)),
                                                      await t(1),
                                                      window.scrollTo(0, 0);
                                              },
                                              post: i,
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : L("div", {
                      className: "mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8",
                      children: [
                          O("h3", {
                              className:
                                  "my-10 text-left text-xl font-medium leading-6 text-white",
                              children: "Post List",
                          }),
                          O(V3, {
                              onChangeValue: (p) => l(p),
                              value: u,
                              onChangeFilter: (p) => s(p),
                              filter: o,
                              onChangeDate: (p) => f(p),
                              filterDate: c,
                          }),
                          O("div", { className: "mt-10 w-full" }),
                          O(K3, {
                              post: i,
                              filter: o,
                              filterValue: u,
                              filterDate: c,
                          }),
                      ],
                  }),
            O(J3, {}),
        ],
    });
};
function Q3() {
    const e = document.querySelector("#app-container");
    if (!e) throw new Error("Can not find AppContainer");
    Ey(e).render(O(Z3, {}));
}
Q3();
