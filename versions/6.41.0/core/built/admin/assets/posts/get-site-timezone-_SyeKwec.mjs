import { c as s } from "./check-BMQmbjGF.mjs";
import { p as c, j as l, c as v } from "./index-ccmRG8Rd.mjs";
import { P as f } from "./index-D7rWIA7g.mjs";
var h = "Separator", n = "horizontal", u = ["horizontal", "vertical"], p = c((t, r) => {
  const { decorative: o, orientation: a = n, ...e } = t, i = y(a) ? a : n, m = o ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ l.jsx(
    f.div,
    {
      "data-orientation": i,
      ...m,
      ...e,
      ref: r
    }
  );
});
p.displayName = h;
function y(t) {
  return u.includes(t);
}
var d = p;
const x = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], O = s("external-link", x);
const N = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], S = s("user", N), k = c(
  ({ className: t, orientation: r = "horizontal", decorative: o = !0, ...a }, e) => /* @__PURE__ */ l.jsx(
    d,
    {
      ref: e,
      className: v(
        "shrink-0 bg-border",
        r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      decorative: o,
      orientation: r,
      ...a
    }
  )
);
k.displayName = d.displayName;
const w = (t) => {
  for (const r of t)
    if (r.key === "timezone") {
      const o = r.value;
      if (typeof o != "string")
        throw new TypeError("Site timezone setting is not a string");
      return o;
    }
  return "Etc/UTC";
};
export {
  O as E,
  k as S,
  S as U,
  w as g
};
//# sourceMappingURL=get-site-timezone-_SyeKwec.mjs.map
