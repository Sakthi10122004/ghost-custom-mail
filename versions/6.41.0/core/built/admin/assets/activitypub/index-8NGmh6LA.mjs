import { a7 as v, a8 as y, u as b, d as j, a9 as k, e as F, j as e, L as P, H as B, B as E, aa as C, R as M, k as T, T as H, P as L, A as U, S as x, ab as A, ac as I, ad as S, ae as z } from "./index-iRncUrZR.mjs";
import { T as _ } from "./topic-filter-CUsMQtiT.mjs";
const R = [
  [
    "path",
    {
      d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
      key: "139s4v"
    }
  ],
  ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4", key: "1dlkgp" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], $ = v("sprout", R), f = ({ profile: a, update: l, isLoading: t, onOpenChange: r }) => {
  const o = H("index", "me"), { data: m } = o, n = a.handle === m?.handle, p = () => {
    l(a.id, {
      followedByMe: !0
    });
  }, c = () => {
    l(a.id, {
      followedByMe: !1
    });
  }, i = j();
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "flex w-full cursor-pointer items-start gap-3 pt-4 [&:last-of-type>:nth-child(2)]:border-none",
      onClick: () => {
        i(`/profile/${a.handle}`);
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full flex-col gap-1 border-b border-gray-200 pb-4 dark:border-gray-950", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ e.jsx(L, { actor: a, isCurrentUser: n, children: /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ e.jsx(U, { author: {
              icon: {
                url: a.avatarUrl
              },
              name: a.name,
              handle: a.handle
            }, onClick: () => r?.(!1) }),
            /* @__PURE__ */ e.jsxs("div", { className: "break-anywhere -mt-0.5 flex grow flex-col", children: [
              /* @__PURE__ */ e.jsx("span", { className: "line-clamp-1 font-semibold text-black dark:text-white", children: t ? /* @__PURE__ */ e.jsx(x, { className: "w-full max-w-48" }) : a.name }),
              /* @__PURE__ */ e.jsx("span", { className: "line-clamp-1 text-md text-gray-700 dark:text-gray-600", children: t ? /* @__PURE__ */ e.jsx(x, { className: "w-32" }) : a.handle })
            ] })
          ] }) }),
          t ? /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(x, { className: "w-24" }) }) : n ? null : /* @__PURE__ */ e.jsx(
            A,
            {
              className: "ml-auto",
              following: a.followedByMe,
              handle: a.handle,
              type: "primary",
              onFollow: p,
              onUnfollow: c
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "pl-[52px]", children: t ? /* @__PURE__ */ e.jsx(x, { className: "w-full max-w-96" }) : a.bio && /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: I(S(z(a.bio, ["a", "br"]))) },
            className: "ap-profile-content break-anywhere pointer-events-none mt-0 line-clamp-2 max-w-[460px]"
          }
        ) })
      ] })
    }
  );
}, V = () => {
  const { isExplainerClosed: a, setExplainerClosed: l } = y(), t = b(), r = j(), o = t.topic || "top", { exploreProfilesQuery: m, updateExploreProfile: n } = k("index", o), { data: p, isLoading: c, fetchNextPage: i, hasNextPage: h, isFetchingNextPage: u } = m, g = Array(10).fill(null).map((s, d) => ({
    id: `skeleton-${d}`,
    name: "",
    handle: "",
    avatarUrl: "",
    bio: "",
    url: "",
    followedByMe: !1
  })), w = p?.pages.flatMap((s) => s.accounts) || [];
  return F(() => {
    const s = document.querySelector(".load-more-trigger");
    if (!s)
      return;
    const d = new IntersectionObserver(
      (N) => {
        N[0].isIntersecting && h && !u && i();
      },
      { threshold: 0.1 }
    );
    return d.observe(s), () => d.disconnect();
  }, [h, u, i]), /* @__PURE__ */ e.jsxs(P, { children: [
    !a && /* @__PURE__ */ e.jsxs("div", { className: "relative mb-6 flex items-start gap-1 rounded-md bg-gradient-to-r from-[#CFB0FF66] to-[#B6E8FF66] p-4 pr-10 dark:from-[#CFB0FF20] dark:to-[#B6E8FF20]", children: [
      /* @__PURE__ */ e.jsx("div", { className: "min-w-[46px]", children: /* @__PURE__ */ e.jsx($, { className: "text-purple", size: 46, strokeWidth: 0.75 }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-1 flex flex-col gap-[2px]", children: [
        /* @__PURE__ */ e.jsx(B, { className: "text-pretty", children: "The fastest way to grow your followers, is to follow others!" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-balance text-black/60 2xl:text-pretty dark:text-white/60", children: "Here are some recommendations to get you started, from Ghost publishers and other great accounts from around the social web." })
      ] }),
      /* @__PURE__ */ e.jsx(E, { className: "absolute top-[17px] right-4 size-6 opacity-40", variant: "link", onClick: () => l(!0), children: /* @__PURE__ */ e.jsx(C, { size: 20 }) })
    ] }),
    /* @__PURE__ */ e.jsx(
      _,
      {
        currentTopic: o,
        excludeTopics: ["following"],
        onTopicChange: (s) => {
          s === "top" ? r("/explore", { replace: !0 }) : r(`/explore/${s}`, { replace: !0 });
        }
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "mt-12 flex flex-col gap-12 pb-20 max-md:mt-5", children: c ? /* @__PURE__ */ e.jsx("div", { children: g.map((s) => /* @__PURE__ */ e.jsx("div", { className: "mx-auto w-full max-w-[640px]", children: /* @__PURE__ */ e.jsx(
      f,
      {
        isLoading: c,
        profile: s,
        update: () => {
        }
      }
    ) }, s.id)) }) : /* @__PURE__ */ e.jsxs("div", { className: "mx-auto flex w-full max-w-[640px] flex-col items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-full", children: w.map((s) => /* @__PURE__ */ e.jsx(M.Fragment, { children: /* @__PURE__ */ e.jsx(
        f,
        {
          isLoading: !1,
          profile: s,
          update: n
        }
      ) }, s.id)) }),
      /* @__PURE__ */ e.jsx("div", { className: "load-more-trigger h-4 w-full" }),
      u && /* @__PURE__ */ e.jsx("div", { className: "mt-2 flex w-full justify-center", children: /* @__PURE__ */ e.jsx(T, { size: "sm" }) })
    ] }) })
  ] });
};
export {
  V as default
};
//# sourceMappingURL=index-8NGmh6LA.mjs.map
