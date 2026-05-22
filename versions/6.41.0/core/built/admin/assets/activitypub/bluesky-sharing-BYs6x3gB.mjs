import { T as E, b as l, c as F, U as H, V as z, W as I, X as M, e as T, Q as c, j as e, L as p, J as y, k as h, B as i, D as U, m as L, n as O, o as R, p as P, A as _, Y as S, Z as Y, q as W, _ as V, $ as Z, a0 as X, a1 as $, a2 as q, a3 as J, a4 as Q, a5 as G, a6 as K } from "./index-iRncUrZR.mjs";
import { E as ee } from "./edit-profile-DTCnl9pN.mjs";
import { C as se } from "./copy-Dabva-P2.mjs";
const ae = 5e3, re = 12, ie = () => {
  const { data: s, isLoading: j } = E("index", "me"), [n, a] = l(() => s?.blueskyEnabled && !s?.blueskyHandleConfirmed), [b, x] = l(!1), [v, d] = l(!1), [k, u] = l(!1), [w, o] = l(!1), t = F(0), C = H("index"), m = z("index"), N = I("index"), B = async () => {
    x(!0), await navigator.clipboard.writeText(s?.blueskyHandle || ""), setTimeout(() => x(!1), 2e3);
  }, A = async () => {
    if (!s?.avatarUrl)
      d(!0);
    else {
      a(!0);
      try {
        await C.mutateAsync();
      } catch {
        a(!1), c.error("Something went wrong, please try again.");
      }
    }
  }, D = async () => {
    a(!0);
    try {
      await m.mutateAsync(), u(!1), c.success("Bluesky sharing disabled");
    } finally {
      a(!1);
    }
  }, g = M(() => {
    N.mutateAsync().then((r) => {
      r && o(!0);
    });
  }, []);
  if (T(() => {
    if (!s?.blueskyEnabled) {
      o(!1), a(!1), t.current = 0;
      return;
    }
    if (s?.blueskyHandleConfirmed) {
      o(!0), a(!1), t.current > 0 && c.success("Bluesky sharing enabled"), t.current = 0;
      return;
    }
    o(!1), a(!0), t.current = 0;
    const r = setInterval(async () => {
      if (t.current += 1, t.current > re) {
        clearInterval(r), c.error("Something went wrong, please try again."), await m.mutateAsync(), a(!1);
        return;
      }
      g();
    }, ae);
    return () => clearInterval(r);
  }, [s?.blueskyEnabled, s?.blueskyHandleConfirmed, g]), j)
    return /* @__PURE__ */ e.jsx(p, { children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-[620px] py-[min(4vh,48px)]", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-8", children: /* @__PURE__ */ e.jsx(y, { children: "Bluesky sharing" }) }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ e.jsx(h, { size: "md" }) })
    ] }) });
  const f = s?.blueskyEnabled && s?.blueskyHandleConfirmed;
  return /* @__PURE__ */ e.jsxs(p, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-[620px] py-[min(4vh,48px)]", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-8", children: [
        /* @__PURE__ */ e.jsx(y, { children: "Bluesky sharing" }),
        f && /* @__PURE__ */ e.jsxs(i, { className: "group w-24 translate-y-1 px-2 hover:bg-red/5! hover:text-red", size: "default", variant: "outline", onClick: () => u(!0), children: [
          /* @__PURE__ */ e.jsx("span", { className: "size-2 rounded-full bg-green group-hover:hidden" }),
          /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: "Enabled" }),
          /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:visible! group-hover:inline!", children: "Disable" })
        ] })
      ] }),
      f ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("p", { className: "mt-2 pr-32 text-base", children: [
          "Your social web profile is now connected to Bluesky, via ",
          /* @__PURE__ */ e.jsx("a", { className: "text-purple hover:text-purple-600", href: "https://fed.brid.gy", rel: "noreferrer", target: "_blank", children: "Bridgy Fed" }),
          ". Posts are automatically synced after a short delay to complete activation."
        ] }),
        w && /* @__PURE__ */ e.jsxs("div", { className: "mt-6 flex flex-col items-center gap-4 rounded-lg border border-gray-200 p-8 dark:border-gray-950", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ e.jsx(
              _,
              {
                author: {
                  icon: {
                    url: s?.avatarUrl || ""
                  },
                  name: s?.name || "",
                  handle: s?.handle || ""
                },
                size: "md"
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 bottom-0 z-10 flex size-6 items-center justify-center rounded-full bg-white shadow-xs", children: /* @__PURE__ */ e.jsx("svg", { height: "14", role: "img", viewBox: "0 0 24 24", width: "14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z", fill: "#0385FF", strokeWidth: "1" }) }) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col items-center", children: [
            /* @__PURE__ */ e.jsx(S, { children: s?.name || "" }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-gray-800", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-lg font-medium", children: s?.blueskyHandle }),
              /* @__PURE__ */ e.jsx(i, { className: "size-6 p-0 hover:opacity-80", title: "Copy handle", variant: "link", onClick: B, children: b ? /* @__PURE__ */ e.jsx(Y, { size: 16 }) : /* @__PURE__ */ e.jsx(se, { size: 16 }) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(i, { className: "mt-2 w-full", size: "lg", variant: "secondary", asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `https://bsky.app/profile/${s?.blueskyHandle?.replace(/^@/, "")}`, rel: "noreferrer", target: "_blank", children: [
            "Open profile",
            /* @__PURE__ */ e.jsx(W, { size: 14, strokeWidth: 1.25 })
          ] }) })
        ] })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "mt-3 flex flex-col gap-5", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-base", children: s?.avatarUrl ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Connect your account to ",
          /* @__PURE__ */ e.jsx("a", { className: "text-purple hover:text-purple-600", href: "https://fed.brid.gy", rel: "noreferrer", target: "_blank", children: "Bridgy Fed" }),
          " to share content directly to a dedicated Bluesky profile and increase your reach across the social web."
        ] }) : "Add a profile image to connect to Bluesky. Profile pictures help prevent spam." }),
        /* @__PURE__ */ e.jsx("p", { className: "-mt-2 text-base", children: "You can't change your Bluesky username, so make sure you're happy with your current social web handle before connecting." }),
        s?.avatarUrl ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(i, { className: "h-10 text-base", disabled: n, variant: "secondary", onClick: A, children: n ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(h, { size: "sm" }),
            /* @__PURE__ */ e.jsx("span", { children: "Enabling Bluesky sharing..." })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx("svg", { height: "32", role: "img", viewBox: "0 0 24 24", width: "32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z", fill: "#0385FF", strokeWidth: "1" }) }),
            "Enable Bluesky sharing"
          ] }) }),
          n && /* @__PURE__ */ e.jsx("p", { className: "-mt-2 text-center text-sm text-gray-700 dark:text-gray-600", children: "You can leave this page and come back to check the status." })
        ] }) : /* @__PURE__ */ e.jsxs(U, { open: v, onOpenChange: d, children: [
          /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsx(i, { className: "h-10 w-full text-base", variant: "secondary", children: "Edit profile" }) }),
          /* @__PURE__ */ e.jsxs(O, { className: "w-full max-w-[520px]", onOpenAutoFocus: (r) => r.preventDefault(), children: [
            /* @__PURE__ */ e.jsx(R, { children: /* @__PURE__ */ e.jsx(P, { children: "Profile settings" }) }),
            s && /* @__PURE__ */ e.jsx(ee, { account: s, setIsEditingProfile: d })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(V, { open: k, onOpenChange: u, children: /* @__PURE__ */ e.jsxs(Z, { children: [
      /* @__PURE__ */ e.jsxs(X, { children: [
        /* @__PURE__ */ e.jsx($, { children: "Disable Bluesky sharing?" }),
        /* @__PURE__ */ e.jsx(q, { children: "Your bridged Bluesky account will be deactivated and your content will no longer be shared on Bluesky. You can re-enable sharing at any time." })
      ] }),
      /* @__PURE__ */ e.jsxs(J, { children: [
        /* @__PURE__ */ e.jsx(Q, { children: "Cancel" }),
        /* @__PURE__ */ e.jsx(
          G,
          {
            className: K({ variant: "destructive" }),
            disabled: n,
            onClick: (r) => {
              r.preventDefault(), D();
            },
            children: n ? /* @__PURE__ */ e.jsx(h, { color: "light", size: "sm" }) : "Disable"
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  ie as default
};
//# sourceMappingURL=bluesky-sharing-BYs6x3gB.mjs.map
