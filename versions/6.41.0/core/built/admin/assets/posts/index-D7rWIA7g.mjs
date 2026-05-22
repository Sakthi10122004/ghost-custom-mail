import { p as n, j as l } from "./index-ccmRG8Rd.mjs";
import { c as f } from "./button-bsWyESEG.mjs";
var u = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], d = u.reduce((t, i) => {
  const o = f(`Primitive.${i}`), r = n((e, s) => {
    const { asChild: a, ...m } = e, p = a ? o : i;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(p, { ...m, ref: s });
  });
  return r.displayName = `Primitive.${i}`, { ...t, [i]: r };
}, {});
export {
  d as P
};
//# sourceMappingURL=index-D7rWIA7g.mjs.map
