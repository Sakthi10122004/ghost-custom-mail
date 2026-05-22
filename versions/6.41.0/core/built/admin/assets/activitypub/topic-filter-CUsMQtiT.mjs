import { l as v, c as n, b as T, e as g, j as t, B as j } from "./index-iRncUrZR.mjs";
const N = ({ currentTopic: o, onTopicChange: a, excludeTopics: r = [] }) => {
  const { topicsQuery: c } = v(), { data: i } = c, d = { slug: "following", name: "Following" }, f = i?.topics || [], u = [d, ...f].filter(({ slug: e }) => !r.includes(e)), s = n(null), p = n(null), [m, h] = T(!0), w = (e) => {
    const { scrollLeft: l, scrollWidth: x, clientWidth: b } = e.currentTarget;
    h(l + b < x - 1);
  };
  return g(() => {
    s.current && s.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, [o]), /* @__PURE__ */ t.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: p,
        className: "flex w-full max-w-full min-w-0 snap-x snap-mandatory gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        onScroll: w,
        children: u.map(({ slug: e, name: l }) => /* @__PURE__ */ t.jsx(
          j,
          {
            ref: o === e ? s : null,
            className: "h-8 snap-start rounded-full px-3.5 text-sm",
            variant: o === e ? "default" : "secondary",
            onClick: () => a(e),
            children: l
          },
          e
        ))
      }
    ),
    m && /* @__PURE__ */ t.jsx("div", { className: "pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-black" })
  ] });
};
export {
  N as T
};
//# sourceMappingURL=topic-filter-CUsMQtiT.mjs.map
