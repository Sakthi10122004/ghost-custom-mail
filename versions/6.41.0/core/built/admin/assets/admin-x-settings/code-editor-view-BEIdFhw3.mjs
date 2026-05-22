import { f as N, l as z, c as B, b as u, o as H, co as L, e as i, n as M, j as r, bn as O, H as V, m as G } from "./index-CnMcD9aj.mjs";
const I = [
  "[&_.cm-editor]:bg-transparent",
  "[&_.cm-editor]:border-transparent",
  "[&_.cm-scroller]:font-mono",
  "[&_.cm-scroller]:border-transparent",
  "[&_.cm-activeLine]:bg-transparent",
  "[&_.cm-activeLineGutter]:bg-transparent",
  "[&_.cm-gutters]:bg-grey-75 dark:[&_.cm-gutters]:bg-grey-950",
  "[&_.cm-gutters]:text-grey-600 dark:[&_.cm-gutters]:text-grey-500",
  "[&_.cm-gutters]:border-grey-500 dark:[&_.cm-gutters]:border-grey-800",
  "[&_.cm-cursor]:border-grey-900 dark:[&_.cm-cursor]:border-grey-75",
  "dark:[&_.cm-tooltip-autocomplete.cm-tooltip_ul_li:not([aria-selected])]:bg-grey-975"
].join(" "), T = N(function({
  title: t,
  value: m,
  height: s = "200px",
  error: o,
  hint: a,
  clearBg: g = !0,
  extensions: c,
  onChange: b,
  onFocus: f,
  onBlur: x,
  className: p,
  ..._
}, y) {
  const h = z(), n = B(null), [v, j] = u(100), [l, w] = H.useState(null), [R, k] = u({
    crosshairCursor: !1
  }), { setFocusState: d } = L(), C = (e) => {
    f?.(e), d(!0);
  }, E = (e) => {
    x?.(e), d(!1);
  };
  i(() => {
    Promise.all(c).then(w), k((e) => ({ setup: e, searchKeymap: !1 }));
  }, [c]), i(() => {
    const e = new ResizeObserver(([S]) => {
      j(S.contentRect.width);
    });
    return e.observe(n.current), () => e.disconnect();
  }, []);
  const F = M(
    "peer order-2 w-full max-w-full overflow-hidden rounded-sm border",
    g ? "bg-transparent" : "bg-grey-75",
    o ? "border-red" : "border-grey-500 dark:border-grey-800",
    t && "mt-2",
    s === "full" && "h-full",
    I,
    p
  );
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { ref: n }),
    l && /* @__PURE__ */ r.jsxs("div", { className: s === "full" ? "h-full" : "", style: { width: v }, children: [
      /* @__PURE__ */ r.jsx(
        O,
        {
          ref: y,
          basicSetup: R,
          className: F,
          extensions: l,
          height: s === "full" ? "100%" : s,
          value: m,
          onBlur: E,
          onChange: b,
          onFocus: C,
          ..._
        }
      ),
      t && /* @__PURE__ */ r.jsx(V, { className: "order-1 text-grey-700! peer-focus:text-black!", htmlFor: h, useLabelTag: !0, children: t }),
      a && /* @__PURE__ */ r.jsx(G, { className: "order-3", color: o ? "red" : "", children: a })
    ] })
  ] });
});
export {
  T as default
};
//# sourceMappingURL=code-editor-view-BEIdFhw3.mjs.map
