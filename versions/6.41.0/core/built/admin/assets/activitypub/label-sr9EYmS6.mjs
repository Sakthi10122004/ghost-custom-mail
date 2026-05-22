import { am as s, j as r, an as i, t as n, ag as d } from "./index-iRncUrZR.mjs";
var m = "Label", o = s((e, t) => /* @__PURE__ */ r.jsx(
  i.label,
  {
    ...e,
    ref: t,
    onMouseDown: (a) => {
      a.target.closest("button, input, select, textarea") || (e.onMouseDown?.(a), !a.defaultPrevented && a.detail > 1 && a.preventDefault());
    }
  }
));
o.displayName = m;
var l = o;
const u = d(
  "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), c = s(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  l,
  {
    ref: a,
    className: n(u(), e),
    ...t
  }
));
c.displayName = l.displayName;
export {
  c as L
};
//# sourceMappingURL=label-sr9EYmS6.mjs.map
