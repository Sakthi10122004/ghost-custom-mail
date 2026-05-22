import { R as d, j as e, c } from "./index-ccmRG8Rd.mjs";
const n = d.forwardRef(({ children: s, className: r, ...a }, t) => /* @__PURE__ */ e.jsx(
  "div",
  {
    ref: t,
    className: c("flex items-center justify-center rounded-full bg-muted w-12 h-12 max-w-12 max-h-12 [&_svg]:size-4 [&_svg]:text-muted-foreground [&_svg]:shrink-0", r),
    ...a,
    children: s
  }
));
n.displayName = "EmptyBadge";
const l = d.forwardRef(({ children: s, className: r, title: a, description: t, actions: m, ...x }, i) => /* @__PURE__ */ e.jsxs("div", { ref: i, className: c("flex flex-col items-center justify-center space-y-3 text-center", r), ...x, children: [
  /* @__PURE__ */ e.jsx(n, { children: s }),
  /* @__PURE__ */ e.jsxs("div", { className: "max-w-[320px] space-y-1.5", children: [
    /* @__PURE__ */ e.jsx("h3", { className: "text-md font-medium tracking-normal text-pretty text-foreground", children: a }),
    t && /* @__PURE__ */ e.jsx("p", { className: "text-sm leading-tight text-pretty text-muted-foreground", children: t })
  ] }),
  m && /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: m })
] }));
l.displayName = "EmptyIndicator";
export {
  l as E
};
//# sourceMappingURL=empty-indicator-C_CRWWaH.mjs.map
