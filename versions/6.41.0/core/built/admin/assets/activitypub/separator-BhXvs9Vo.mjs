import { am as s, j as l, an as m, t as v } from "./index-iRncUrZR.mjs";
var N = "Separator", e = "horizontal", u = ["horizontal", "vertical"], p = s((a, r) => {
  const { decorative: t, orientation: o = e, ...i } = a, n = f(o) ? o : e, d = t ? { role: "none" } : { "aria-orientation": n === "vertical" ? n : void 0, role: "separator" };
  return /* @__PURE__ */ l.jsx(
    m.div,
    {
      "data-orientation": n,
      ...d,
      ...i,
      ref: r
    }
  );
});
p.displayName = N;
function f(a) {
  return u.includes(a);
}
var c = p;
const h = s(
  ({ className: a, orientation: r = "horizontal", decorative: t = !0, ...o }, i) => /* @__PURE__ */ l.jsx(
    c,
    {
      ref: i,
      className: v(
        "shrink-0 bg-border",
        r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        a
      ),
      decorative: t,
      orientation: r,
      ...o
    }
  )
);
h.displayName = c.displayName;
export {
  h as S
};
//# sourceMappingURL=separator-BhXvs9Vo.mjs.map
