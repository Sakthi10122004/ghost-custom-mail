import { j as e, c as Y, d as J, e as A, a as j, f as C, g as f, h as ie, b as le } from "./index-ccmRG8Rd.mjs";
import { u as ne, c as oe, D as ce } from "./growth-BUOzMr3u.mjs";
import { K as L, a as S, b as _, c as T } from "./stats-CzDKJ9UC.mjs";
import { B as O } from "./button-bsWyESEG.mjs";
import { C as P, a as V, b as E, c as y, G as F, u as q, h as de, i as me, P as pe, d as xe, S as he } from "./post-analytics-header-9jDeEi2u.mjs";
import { D as ue, a as ge, b as je, c as fe, d as ve, e as be, f as Ne, g as ye } from "./tabs-DWupT4E_.mjs";
import { B as K } from "./loading-indicator-DUlTXBD-.mjs";
import { S as R } from "./get-site-timezone-_SyeKwec.mjs";
import { H as X } from "./heading-DxkKnY_o.mjs";
import { M as we, T as ke, G as Ce, S as Le, K as Se } from "./kpis-D5we6NHx.mjs";
import { u as _e, p as Te, N as Re, c as De } from "./links-B35ypGIx.mjs";
import { M as Ie } from "./alert-dialog-DiH_9lnq.mjs";
import { L as ze } from "./post-share-modal-Bu4lqyjU.mjs";
import { E as Ae } from "./empty-indicator-C_CRWWaH.mjs";
import { u as Z, S as Oe } from "./post-analytics-context-D4HEA79Q.mjs";
import { S as U } from "./skeleton-9GpF0jm6.mjs";
import { g as Pe, a as Ve, f as Q, s as Ee } from "./app-utils-B8w6QZz5.mjs";
const D = ({ children: r, className: t, ...n }) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: Y(
      "flex flex-col border-r border-border last:border-none items-start gap-4 px-6 py-5 transition-all",
      t
    ),
    ...n,
    children: r
  }
), I = ({ children: r, className: t, color: n, ...s }) => /* @__PURE__ */ e.jsxs("div", { className: Y("flex h-[22px] items-center gap-1.5 text-base font-medium text-muted-foreground [&_svg]:size-4", t), ...s, children: [
  n && /* @__PURE__ */ e.jsx("div", { className: "ml-1 size-2 rounded-full opacity-50", style: { backgroundColor: n } }),
  r
] }), z = ({ value: r, diffDirection: t, diffValue: n, diffTooltip: s }) => {
  let a = null;
  return t && t !== "hidden" && (t === "empty" ? a = /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "flex h-[22px] items-center px-1.5 text-xs leading-none font-medium",
      "data-testid": "kpi-card-header-diff",
      children: n
    }
  ) : a = /* @__PURE__ */ e.jsx(
    ke,
    {
      "data-testid": "kpi-card-header-diff",
      direction: t,
      tooltip: s,
      value: n ?? ""
    }
  )), /* @__PURE__ */ e.jsx(
    we,
    {
      trailing: a,
      value: r,
      valueTestId: "kpi-card-header-value"
    }
  );
}, Ke = ({ post: r, isNewsletterStatsLoading: t, isWebShown: n }) => {
  const { postId: s } = J(), a = A(), i = j(() => {
    const c = r.email?.opened_count || 0, l = r.email?.email_count || 0, x = r.count?.clicks || 0;
    return {
      opened: c,
      clicked: x,
      openedRate: l > 0 ? c / l : 0,
      clickedRate: l > 0 ? x / l : 0,
      sent: l
    };
  }, [r]), { data: p } = _e({
    searchParams: {
      filter: `post_id:'${s}'`
    }
  }), h = j(() => Te(p), [p]), u = [
    { datatype: "Clicked", value: i.clickedRate, fill: "url(#gradientTeal)", color: "var(--chart-teal)" },
    { datatype: "Opened", value: i.openedRate, fill: "url(#gradientBlue)", color: "var(--chart-blue)" }
  ], d = {
    percentage: {
      label: "Opened"
    },
    Average: {
      label: "Clicked"
    },
    "This newsletter": {
      label: "Opened"
    }
  }, o = r.email_only || !n;
  return /* @__PURE__ */ e.jsxs(P, { className: `group/datalist overflow-hidden ${o && "col-span-2"}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsxs(E, { className: "flex items-center gap-1.5 text-lg", children: [
        /* @__PURE__ */ e.jsx(Ie, { size: 16, strokeWidth: 1.5 }),
        "Newsletter performance"
      ] }) }),
      /* @__PURE__ */ e.jsx(O, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-300 group-hover/datalist:translate-x-0 group-hover/datalist:opacity-100", size: "sm", variant: "outline", onClick: () => {
        a(`/posts/analytics/${s}/newsletter`);
      }, children: "View more" })
    ] }),
    t ? /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto flex min-h-[250px] items-center justify-center xl:size-full", children: /* @__PURE__ */ e.jsx(K, {}) }) }) : /* @__PURE__ */ e.jsxs(y, { className: `${o && "grid grid-cols-2"}`, children: [
      /* @__PURE__ */ e.jsxs("div", { className: `${o && "border-r pr-6"}`, children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ e.jsx(D, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
            /* @__PURE__ */ e.jsx(I, { color: "var(--chart-blue)", children: "Open rate" }),
            /* @__PURE__ */ e.jsx(
              z,
              {
                value: C(i.openedRate)
              }
            )
          ] }) }),
          /* @__PURE__ */ e.jsx(D, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
            /* @__PURE__ */ e.jsx(I, { color: "var(--chart-teal)", children: "Click rate" }),
            /* @__PURE__ */ e.jsx(
              z,
              {
                value: C(i.clickedRate)
              }
            )
          ] }) })
        ] }),
        !o && /* @__PURE__ */ e.jsx(R, {}),
        /* @__PURE__ */ e.jsx("div", { className: "mx-auto my-6 h-[240px]", children: /* @__PURE__ */ e.jsx(
          Re,
          {
            className: "pointer-events-none aspect-square h-[240px]",
            config: d,
            data: u,
            tooltip: !1
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: `${o && "pl-6"}`, children: [
        !o && /* @__PURE__ */ e.jsx(R, {}),
        /* @__PURE__ */ e.jsxs("div", { className: o ? "" : "pt-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: `flex items-center justify-between gap-3 ${o ? "pb-3" : "py-3"}`, children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Top clicked links in this email" }),
            /* @__PURE__ */ e.jsx(X, { children: "Members" })
          ] }),
          h.length > 0 ? /* @__PURE__ */ e.jsx(ue, { className: "", children: /* @__PURE__ */ e.jsx(ge, { children: h.slice(0, o ? 10 : 5).map((c) => {
            const l = i.clicked > 0 ? c.count / i.clicked : 0;
            return /* @__PURE__ */ e.jsxs(je, { children: [
              /* @__PURE__ */ e.jsx(fe, { style: {
                width: `${l ? Math.round(l * 100) : 0}%`
              } }),
              /* @__PURE__ */ e.jsx(ve, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 overflow-hidden", children: [
                /* @__PURE__ */ e.jsx(ze, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                /* @__PURE__ */ e.jsx(
                  "a",
                  {
                    className: "block truncate font-medium hover:underline",
                    href: c.link.to,
                    rel: "noreferrer",
                    target: "_blank",
                    title: c.link.to,
                    children: De(c.link.to, !0)
                  }
                )
              ] }) }),
              /* @__PURE__ */ e.jsxs(be, { children: [
                /* @__PURE__ */ e.jsx(Ne, { children: f(c.count || 0) }),
                /* @__PURE__ */ e.jsx(ye, { children: C(l) })
              ] })
            ] }, c.link.link_id);
          }) }) }) : /* @__PURE__ */ e.jsx("div", { className: "py-20 text-center text-sm text-gray-700", children: "You have no links in your post." })
        ] })
      ] })
    ] })
  ] });
}, Me = ({ chartData: r, range: t, isLoading: n, visitors: s, sourcesData: a, isNewsletterShown: i = !0 }) => {
  const { postId: p } = J(), h = A(), { data: u } = Z(), d = u?.url, o = u?.icon, c = j(() => a ? a.reduce((l, x) => l + Number(x.visits || 0), 0) : 0, [a]);
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(P, { className: `group/datalist overflow-hidden ${!i && "col-span-2"}`, "data-testid": "web-performance", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsxs(E, { className: "flex items-center gap-1.5 text-lg", children: [
        /* @__PURE__ */ e.jsx(F, { size: 16, strokeWidth: 1.5 }),
        "Web performance"
      ] }) }),
      /* @__PURE__ */ e.jsx(O, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-300 group-hover/datalist:translate-x-0 group-hover/datalist:opacity-100", size: "sm", variant: "outline", onClick: () => {
        h(`/posts/analytics/${p}/web`);
      }, children: "View more" })
    ] }),
    /* @__PURE__ */ e.jsxs(y, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(D, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", "data-testid": "unique-visitors", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
          /* @__PURE__ */ e.jsx(I, { color: "var(--chart-blue)", children: "Unique visitors" }),
          /* @__PURE__ */ e.jsx(
            z,
            {
              value: f(s)
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx(R, {}),
        /* @__PURE__ */ e.jsx("div", { className: "max-h-[288px] py-6 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex h-[16vw] min-h-[240px] items-center justify-center", children: /* @__PURE__ */ e.jsx(K, {}) }) : /* @__PURE__ */ e.jsx(
          Ce,
          {
            className: "aspect-auto h-[240px] w-full",
            color: "var(--chart-blue)",
            data: r || [],
            id: "visitors",
            range: t,
            syncId: "overview-charts"
          }
        ) })
      ] }),
      i && /* @__PURE__ */ e.jsxs("div", { className: i ? "border-t pt-3" : "-mt-3", children: [
        /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3 py-3", children: [
          /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "How readers found this post" }),
          /* @__PURE__ */ e.jsx(X, { children: "Visitors" })
        ] }) }),
        a && a.length > 0 ? /* @__PURE__ */ e.jsx(
          Le,
          {
            data: a,
            range: t,
            siteIcon: o,
            siteUrl: d,
            tableOnly: !0,
            topSourcesLimit: 5,
            totalVisitors: c
          }
        ) : /* @__PURE__ */ e.jsx(
          Ae,
          {
            className: "h-full py-10",
            description: "Once someone visits this post, sources will show here",
            title: "No visitors since you published this post",
            children: /* @__PURE__ */ e.jsx(F, { strokeWidth: 1.5 })
          }
        )
      ] })
    ] })
  ] }) });
}, rs = () => {
  const r = A(), { statsConfig: t, isLoading: n, post: s, isPostLoading: a, postId: i } = Z(), { totals: p, isLoading: h, currencySymbol: u } = ne(i), { appSettings: d } = ie(), { emailTrackClicks: o, emailTrackOpens: c } = d?.analytics || {}, l = j(() => s?.published_at ? Pe(s.published_at) : Oe.ALL_TIME.value, [s?.published_at]), { startDate: x, endDate: M, timezone: $ } = Ve(l), W = j(() => {
    const m = {
      site_uuid: t?.id || "",
      date_from: Q(x),
      date_to: Q(M),
      timezone: $,
      post_uuid: ""
    };
    return !a && s?.uuid ? {
      ...m,
      post_uuid: s.uuid
    } : m;
  }, [a, s, t?.id, x, M, $]), { data: v, loading: B } = q({
    endpoint: "api_kpis",
    statsConfig: t || { id: "" },
    params: W
  }), ee = j(() => v?.length ? v.reduce((m, g) => {
    const H = Number(g.visits);
    return m + (isNaN(H) ? 0 : H);
  }, 0) : 0, [v]), b = Se.visits, se = Ee(v || [], l, b.dataKey, "sum")?.map((m) => {
    const g = Number(m[b.dataKey]);
    return {
      date: String(m.date),
      value: g,
      formattedValue: b.formatter(g),
      label: b.label
    };
  }), { data: ae, loading: te } = q({
    endpoint: "api_top_sources",
    statsConfig: t || { id: "" },
    params: W
  }), G = n || h || a || B, re = a || n || B, w = de(s) && c && o, k = !s?.email_only && d?.analytics.webAnalytics, N = d?.analytics.membersTrackSources;
  return le(() => {
    !a && s && me(s) && !d?.analytics.webAnalytics && N && r(`/posts/analytics/${i}/growth`, { replace: !0 });
  }, [a, s, d?.analytics.webAnalytics, r, i, N]), a ? /* @__PURE__ */ e.jsx(K, {}) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(pe, { currentTab: "Overview" }),
    /* @__PURE__ */ e.jsx(xe, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6 lg:grid lg:grid-cols-2", children: [
      k && /* @__PURE__ */ e.jsx(
        Me,
        {
          chartData: se,
          isLoading: re || G || te,
          isNewsletterShown: w,
          range: l,
          sourcesData: ae,
          visitors: ee
        }
      ),
      w && /* @__PURE__ */ e.jsx(
        Ke,
        {
          isNewsletterStatsLoading: a,
          isWebShown: k,
          post: s
        }
      ),
      N && /* @__PURE__ */ e.jsxs(P, { className: "group col-span-2 overflow-hidden p-0", "data-testid": "growth", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsxs(E, { className: "flex items-center gap-1.5 text-lg", children: [
            /* @__PURE__ */ e.jsx(he, { size: 16, strokeWidth: 1.5 }),
            "Growth"
          ] }) }),
          /* @__PURE__ */ e.jsx(O, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100", size: "sm", variant: "outline", onClick: () => {
            r(`/posts/analytics/${i}/growth`);
          }, children: "View more" })
        ] }),
        /* @__PURE__ */ e.jsx(y, { className: "flex flex-col gap-6 px-0 md:grid md:grid-cols-3 md:items-stretch md:gap-0", children: G ? Array.from({ length: 3 }, (m, g) => /* @__PURE__ */ e.jsxs("div", { className: "h-[98px] gap-1 border-r px-6 py-5 last:border-r-0", children: [
          /* @__PURE__ */ e.jsx(U, { className: "w-2/3" }),
          /* @__PURE__ */ e.jsx(U, { className: "h-7 w-12" })
        ] }, g)) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs(L, { className: "grow gap-1 py-0", children: [
            /* @__PURE__ */ e.jsx(S, { children: "Free members" }),
            /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(T, { className: "text-[2.2rem]", children: f(p?.free_members || 0) }) })
          ] }),
          d?.paidMembersEnabled && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs(L, { className: "grow gap-1 py-0", children: [
              /* @__PURE__ */ e.jsx(S, { children: "Paid members" }),
              /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(T, { className: "text-[2.2rem]", children: f(p?.paid_members || 0) }) })
            ] }),
            /* @__PURE__ */ e.jsxs(L, { className: "grow gap-1 py-0", children: [
              /* @__PURE__ */ e.jsx(S, { children: "MRR impact" }),
              /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsxs(T, { className: "text-[2.2rem]", children: [
                u,
                f(oe(p?.mrr || 0))
              ] }) })
            ] })
          ] })
        ] }) })
      ] }),
      !k && !w && !N && /* @__PURE__ */ e.jsx(ce, { className: "col-span-2 py-20" })
    ] }) })
  ] });
};
export {
  rs as default
};
//# sourceMappingURL=overview-Btq05e5k.mjs.map
