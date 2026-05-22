import { R as p, j as a, c as i, p as l } from "./index-ccmRG8Rd.mjs";
const u = {
  "2xs": "text-2xs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl"
}, y = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
}, T = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
  inverse: "text-text-inverse"
}, b = {
  none: "leading-none",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  tight: "leading-tight",
  tighter: "leading-tighter",
  supertight: "leading-supertight",
  body: "leading-body",
  heading: "leading-heading"
}, r = p.forwardRef(
  function({
    as: e = "p",
    className: t,
    size: n = "md",
    weight: o = "regular",
    tone: d = "primary",
    leading: x = "body",
    truncate: m = !1,
    ...g
  }, c) {
    const h = e;
    return /* @__PURE__ */ a.jsx(
      h,
      {
        ref: c,
        className: i(
          u[n],
          y[o],
          T[d],
          b[x],
          m && "truncate",
          t
        ),
        ...g
      }
    );
  }
);
r.displayName = "Text";
const N = l(
  ({ className: s, ...e }, t) => /* @__PURE__ */ a.jsx(
    r,
    {
      ref: t,
      as: "h1",
      className: i("scroll-m-20 leading-[1.1em] tracking-tighter", s),
      size: "3xl",
      weight: "bold",
      ...e
    }
  )
);
N.displayName = "H1";
const E = l(
  ({ className: s, ...e }, t) => /* @__PURE__ */ a.jsx(
    r,
    {
      ref: t,
      as: "h2",
      className: i("scroll-m-20 tracking-tighter first:mt-0", s),
      size: "2xl",
      weight: "bold",
      ...e
    }
  )
);
E.displayName = "H2";
const S = l(
  ({ className: s, ...e }, t) => /* @__PURE__ */ a.jsx(
    r,
    {
      ref: t,
      as: "h3",
      className: i("scroll-m-20 tracking-tight", s),
      size: "xl",
      weight: "semibold",
      ...e
    }
  )
);
S.displayName = "H3";
const f = l(
  ({ className: s, ...e }, t) => /* @__PURE__ */ a.jsx(
    r,
    {
      ref: t,
      as: "h4",
      className: i("scroll-m-20 tracking-tight", s),
      size: "lg",
      weight: "semibold",
      ...e
    }
  )
);
f.displayName = "H4";
const H = l(
  ({ className: s, ...e }, t) => /* @__PURE__ */ a.jsx(
    r,
    {
      ref: t,
      as: "div",
      className: i("tracking-wide uppercase", s),
      size: "xs",
      tone: "secondary",
      weight: "medium",
      ...e
    }
  )
);
H.displayName = "HTable";
export {
  H,
  r as T,
  N as a,
  S as b
};
//# sourceMappingURL=heading-DxkKnY_o.mjs.map
