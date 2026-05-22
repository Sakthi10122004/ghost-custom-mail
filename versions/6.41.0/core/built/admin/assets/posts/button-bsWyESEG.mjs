import { p as g, y as d, x as f, j as l, A as y, X as h, Y as x, c as _, q as S } from "./index-ccmRG8Rd.mjs";
import { h as j, c as C } from "./check-BMQmbjGF.mjs";
var E = /* @__PURE__ */ Symbol.for("react.lazy"), p = h[" use ".trim().toString()];
function R(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function b(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === E && "_payload" in e && R(e._payload);
}
// @__NO_SIDE_EFFECTS__
function k(e) {
  const n = /* @__PURE__ */ z(e), r = g((o, t) => {
    let { children: s, ...a } = o;
    b(s) && typeof p == "function" && (s = p(s._payload));
    const i = d.toArray(s), c = i.find(A);
    if (c) {
      const u = c.props.children, v = i.map((m) => m === c ? d.count(u) > 1 ? d.only(null) : f(u) ? u.props.children : null : m);
      return /* @__PURE__ */ l.jsx(n, { ...a, ref: t, children: f(u) ? y(u, void 0, v) : null });
    }
    return /* @__PURE__ */ l.jsx(n, { ...a, ref: t, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
var w = /* @__PURE__ */ k("Slot");
// @__NO_SIDE_EFFECTS__
function z(e) {
  const n = g((r, o) => {
    let { children: t, ...s } = r;
    if (b(t) && typeof p == "function" && (t = p(t._payload)), f(t)) {
      const a = I(t), i = P(s, t.props);
      return t.type !== x && (i.ref = o ? j(o, a) : a), y(t, i);
    }
    return d.count(t) > 1 ? d.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var N = /* @__PURE__ */ Symbol("radix.slottable");
function A(e) {
  return f(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === N;
}
function P(e, n) {
  const r = { ...n };
  for (const o in n) {
    const t = e[o], s = n[o];
    /^on[A-Z]/.test(o) ? t && s ? r[o] = (...i) => {
      const c = s(...i);
      return t(...i), c;
    } : t && (r[o] = t) : o === "style" ? r[o] = { ...t, ...s } : o === "className" && (r[o] = [t, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function I(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const L = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], W = C("chevron-down", L), $ = S(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
  {
    variants: {
      variant: {
        default: "bg-primary font-medium text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive font-medium text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background font-medium hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary font-medium text-secondary-foreground hover:bg-secondary/80",
        ghost: "font-medium hover:bg-accent hover:text-accent-foreground",
        link: "font-medium text-primary underline-offset-4 hover:underline",
        dropdown: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-(--control-height) px-3 py-2",
        sm: "h-7 rounded-md px-3 text-xs [&_svg]:size-3",
        lg: "h-11 rounded-md px-8 text-md font-semibold",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), B = g(
  ({ className: e, variant: n, size: r, asChild: o = !1, children: t, ...s }, a) => {
    const i = o ? w : "button", c = n === "dropdown" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      t,
      /* @__PURE__ */ l.jsx(W, { className: "-mr-0.5! -ml-1! size-4 stroke-[2px]! opacity-50", strokeWidth: 2 })
    ] }) : t;
    return /* @__PURE__ */ l.jsx(
      i,
      {
        ref: a,
        className: _($({ variant: n, size: r, className: e })),
        ...s,
        children: c
      }
    );
  }
);
B.displayName = "Button";
export {
  B,
  W as C,
  w as S,
  $ as b,
  k as c
};
//# sourceMappingURL=button-bsWyESEG.mjs.map
