import { w as F, x as T, y as _, z as E, b as d, G as H, I as V, d as W, j as e, L as R, J as $, N as b, K as j, M as p, P as z, O as v, A as G, S as t, B as c, h as J, Q as i } from "./index-iRncUrZR.mjs";
import { T as K, a as O, b as w, c as f } from "./tabs-BMosVBWJ.mjs";
const X = () => {
  const { data: N, isLoading: n } = F("index"), { data: g, isLoading: o } = T("index"), u = n ? Array(5).fill({ apId: "", name: "", handle: "", avatarUrl: "" }) : N?.pages.flatMap((s) => s.accounts) ?? [], x = o ? Array(5).fill({ apId: "", name: "" }) : g?.pages.flatMap((s) => s.domains) ?? [], I = _("index"), U = E("index"), [M, m] = d(/* @__PURE__ */ new Set()), B = H("index"), D = V("index"), [y, h] = d(/* @__PURE__ */ new Set()), [k, r] = d(null), S = W(), A = (s) => {
    m((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.add(s.apId), a;
    }), U.mutate(s), i.success("User unblocked");
  }, L = (s) => {
    m((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.delete(s.apId), a;
    }), I.mutate(s), i.success("User blocked");
  }, C = (s) => {
    h((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.add(s.url), a;
    }), D.mutate({ url: s.url }), i.success("Domain unblocked");
  }, P = (s) => {
    h((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.delete(s.url), a;
    }), B.mutate({ url: s.url }), i.success("Domain blocked");
  };
  return /* @__PURE__ */ e.jsx(R, { children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-[620px] py-[min(4vh,48px)]", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-8", children: /* @__PURE__ */ e.jsx($, { children: "Moderation" }) }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-6", children: /* @__PURE__ */ e.jsxs(K, { defaultValue: "blocked_users", variant: "underline", children: [
      /* @__PURE__ */ e.jsxs(O, { children: [
        /* @__PURE__ */ e.jsx(w, { value: "blocked_users", children: "Blocked users" }),
        /* @__PURE__ */ e.jsx(w, { value: "blocked_domains", children: "Blocked domains" })
      ] }),
      /* @__PURE__ */ e.jsx(f, { className: "mt-2", value: "blocked_users", children: !n && u.length === 0 ? /* @__PURE__ */ e.jsxs(b, { children: [
        /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(p, {}) }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-2 flex max-w-[400px] flex-col items-center gap-1 text-center", children: /* @__PURE__ */ e.jsx("p", { children: "When you block someone, they won't be able to follow you or interact with your content on the social web." }) })
      ] }) : u.map((s, l) => /* @__PURE__ */ e.jsx(z, { actor: s, isCurrentUser: !0, children: /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs(
        v,
        {
          onClick: n ? void 0 : () => J(s.handle, S),
          children: [
            /* @__PURE__ */ e.jsx(
              G,
              {
                author: {
                  icon: {
                    url: s.avatarUrl
                  },
                  name: s.name,
                  handle: s.handle
                }
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0  flex-col", children: [
              /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold text-black dark:text-white", children: n ? /* @__PURE__ */ e.jsx(t, { className: "w-24" }) : s.name }),
              /* @__PURE__ */ e.jsx("span", { className: "block truncate text-sm text-gray-600", children: n ? /* @__PURE__ */ e.jsx(t, { className: "w-40" }) : s.handle })
            ] }),
            M.has(s.apId) ? /* @__PURE__ */ e.jsx(
              c,
              {
                className: "ml-auto min-w-[90px] text-red hover:bg-red/5! hover:text-red-400",
                variant: "outline",
                onClick: (a) => {
                  a.stopPropagation(), L(s);
                },
                children: "Block"
              }
            ) : n ? /* @__PURE__ */ e.jsx("div", { className: "ml-auto w-16", children: /* @__PURE__ */ e.jsx(t, {}) }) : /* @__PURE__ */ e.jsx(
              c,
              {
                className: "ml-auto min-w-[90px]",
                variant: "destructive",
                onClick: (a) => {
                  a.stopPropagation(), A(s);
                },
                onMouseEnter: () => r(s.apId),
                onMouseLeave: () => r(null),
                children: k === s.apId ? "Unblock" : "Blocked"
              }
            )
          ]
        }
      ) }) }, s.apId ? s.apId : `loading-${l}`)) }),
      /* @__PURE__ */ e.jsx(f, { className: "mt-[11px]", value: "blocked_domains", children: !o && x.length === 0 ? /* @__PURE__ */ e.jsxs(b, { children: [
        /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(p, {}) }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-2 flex max-w-[400px] flex-col items-center gap-1 text-center", children: /* @__PURE__ */ e.jsx("p", { children: "When you block a domain, all users from that domain won't be able to follow you or interact with your content." }) })
      ] }) : x.map((s, l) => /* @__PURE__ */ e.jsxs(v, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex min-w-0 flex-col", children: /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold text-black dark:text-white", children: o ? /* @__PURE__ */ e.jsx(t, { className: "w-48" }) : new URL(s.url).hostname }) }),
        y.has(s.url) ? /* @__PURE__ */ e.jsx(
          c,
          {
            className: "ml-auto min-w-[90px] text-red hover:bg-red/5! hover:text-red-400",
            variant: "outline",
            onClick: () => P(s),
            children: "Block"
          }
        ) : o ? /* @__PURE__ */ e.jsx("div", { className: "ml-auto w-16", children: /* @__PURE__ */ e.jsx(t, {}) }) : /* @__PURE__ */ e.jsx(
          c,
          {
            className: "ml-auto min-w-[90px]",
            variant: "destructive",
            onClick: () => C(s),
            onMouseEnter: () => r(s.url),
            onMouseLeave: () => r(null),
            children: k === s.url ? "Unblock" : "Blocked"
          }
        )
      ] }, s.url ? s.url : `loading-${l}`)) })
    ] }) })
  ] }) });
};
export {
  X as default
};
//# sourceMappingURL=moderation-B7sNz66N.mjs.map
