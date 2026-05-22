import { u as q, d as F, b as se, E as ae, e as I, m, h as D, o as re, j as e, i as _, g as ne, H as xe, N as ge, R as J } from "./index-BaZyVSji.mjs";
import { aL as be, l as te, ao as fe, ap as je, aq as ve, ar as Q, m as ke, bs as we, bv as Ne, bw as ye, bx as _e, bH as Se, bt as Ce, bI as Te, bz as De, E as le, bF as ie, p as U, bn as Le, bo as Re, bJ as Me, bp as Oe, bq as Pe, bK as Ee, bL as Be, br as Ae, x as X, z as $, bM as ze, bN as He, bO as Ke, J as Ve, K as $e, N as Fe, O as Ie, Q as We, b as ce, f as oe, c as Ge, d as Qe, e as Ye, r as qe, B as Je } from "./stats-B-gFnH1Q.mjs";
import { T as Ue, a as Xe, K as Y, c as P, d as Ze } from "./kpi-tabs-CBvDpw6h.mjs";
import { B as et, d as tt, T as st, e as at, a as V, f as B, S as K, b as R } from "./sort-button-BniR-fiz.mjs";
const rt = ({ active: a, payload: t }) => {
  if (!a || !t?.length)
    return null;
  const r = t[0].payload, n = typeof r.send_date == "string" ? r.send_date : r.send_date.toISOString().split("T")[0];
  return /* @__PURE__ */ e.jsxs("div", { className: "max-w-[240px] min-w-[220px] rounded-lg border bg-background px-3 py-2 shadow-lg", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-2 flex w-full flex-col border-b pb-2", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-tight font-semibold", children: r.post_title }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        "Sent on ",
        ne(n)
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Sent" }),
      /* @__PURE__ */ e.jsx("div", { className: "ml-2 w-full text-right font-mono", children: D(r.sent_to) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Opens" }),
      /* @__PURE__ */ e.jsxs("div", { className: "ml-2 w-full text-right font-mono", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
          D(r.total_opens),
          " / "
        ] }),
        _(r.open_rate)
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Clicks" }),
      /* @__PURE__ */ e.jsxs("div", { className: "ml-2 w-full text-right font-mono", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
          D(r.total_clicks),
          " / "
        ] }),
        _(r.click_rate)
      ] })
    ] })
  ] });
}, nt = ({
  subscribersData: a,
  avgsData: t,
  totals: r,
  isLoading: n,
  isAvgsLoading: s,
  initialTab: i = "total-subscribers"
}) => {
  const [l, h] = q(i), [p, v] = q(!1), { range: u } = F(), w = se(), [f] = ae(), { appSettings: N } = I(), { emailTrackClicks: j, emailTrackOpens: y } = N?.analytics || {}, { totalSubscribers: M, avgOpenRate: d, avgClickRate: o } = r, b = m(() => {
    if (!a || a.length === 0)
      return [];
    let c = [];
    return c = be(a, u, "value", "exact"), c.map((L) => ({
      ...L,
      formattedValue: D(L.value),
      label: "Total Subscribers"
    }));
  }, [a, u]), S = m(() => {
    if (!b || b.length <= 1)
      return {
        direction: "same",
        value: "0%"
      };
    const c = b[0]?.value ?? 0, k = b[b.length - 1]?.value ?? 0;
    let L = "same";
    k > c ? L = "up" : k < c && (L = "down");
    let E;
    if (c === 0)
      E = k === 0 ? "0%" : "+100%";
    else {
      const A = (k - c) / c * 100, z = Math.round(A * 10) / 10;
      E = `${A >= 0 ? "+" : ""}${z}%`;
    }
    return { direction: L, value: E };
  }, [b]);
  re(() => {
    h(i);
  }, [i]);
  const x = (c) => {
    h(c);
    const k = new URLSearchParams(f);
    k.set("tab", c), w(`?${k.toString()}`, { replace: !0 });
  }, C = {
    open_rate: {
      label: "Open rate"
    }
  }, g = m(() => ({
    "total-subscribers": {
      color: "var(--chart-darkblue)",
      datakey: "value"
    },
    "avg-open-rate": {
      color: "var(--chart-blue)",
      datakey: "open_rate"
    },
    "avg-click-rate": {
      color: "var(--chart-teal)",
      datakey: "click_rate"
    }
  }), []), { barDomain: T, barTicks: O } = m(() => {
    if (!t || t.length === 0 || l === "total-subscribers")
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const c = g[l]?.datakey;
    if (!c)
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const k = t.map((G) => G[c]).filter((G) => typeof G == "number");
    if (k.length === 0)
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const L = Math.min(...k), E = Math.max(...k), A = Math.floor(L * 10) / 10, z = Math.ceil(E * 10) / 10, H = Math.max(0, A), ee = z === H ? H + 0.1 : z;
    return {
      barDomain: [H, ee],
      barTicks: [H, ee]
    };
  }, [t, l, g]);
  if (n)
    return /* @__PURE__ */ e.jsx("div", { className: "-mb-6 flex h-[calc(16vw+132px)] w-full items-start justify-center", children: /* @__PURE__ */ e.jsx(te, {}) });
  let W = "grid-cols-3";
  (!j || !y) && (W = "grid-cols-2"), !j && !y && (W = "grid-cols-1");
  const he = l === "avg-open-rate" && d > T[0] && d < T[1] || l === "avg-click-rate" && o > T[0] && o < T[1], Z = l === "avg-open-rate" ? d : o;
  return /* @__PURE__ */ e.jsxs(Ue, { defaultValue: i, variant: "kpis", children: [
    /* @__PURE__ */ e.jsxs(Xe, { className: `-mx-6 hidden grid-cols-3 md:visible! md:grid! ${W}`, children: [
      /* @__PURE__ */ e.jsx(Y, { className: `${!y && !j && "cursor-auto after:hidden"}`, value: "total-subscribers", onClick: () => {
        x("total-subscribers");
      }, children: /* @__PURE__ */ e.jsx(
        P,
        {
          color: g["total-subscribers"].color,
          "data-testid": "total-subscribers-value",
          diffDirection: S.direction,
          diffValue: S.value,
          label: "Total subscribers",
          value: D(M)
        }
      ) }),
      y && /* @__PURE__ */ e.jsx(Y, { value: "avg-open-rate", onClick: () => {
        x("avg-open-rate");
      }, children: /* @__PURE__ */ e.jsx(
        P,
        {
          className: s ? "opacity-50" : "",
          color: g["avg-open-rate"].color,
          label: "Avg. open rate",
          value: _(d)
        }
      ) }),
      j && /* @__PURE__ */ e.jsx(Y, { value: "avg-click-rate", onClick: () => {
        x("avg-click-rate");
      }, children: /* @__PURE__ */ e.jsx(
        P,
        {
          className: s ? "opacity-50" : "",
          color: g["avg-click-rate"].color,
          label: "Avg. click rate",
          value: _(o)
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsxs(fe, { children: [
      /* @__PURE__ */ e.jsx(je, { className: "md:hidden", asChild: !0, children: /* @__PURE__ */ e.jsxs(Ze, { children: [
        l === "total-subscribers" && /* @__PURE__ */ e.jsx(
          P,
          {
            color: g["total-subscribers"].color,
            label: "Total subscribers",
            value: D(M)
          }
        ),
        l === "avg-open-rate" && y && /* @__PURE__ */ e.jsx(
          P,
          {
            className: s ? "opacity-50" : "",
            color: g["avg-open-rate"].color,
            label: "Avg. open rate",
            value: _(d)
          }
        ),
        l === "avg-click-rate" && j && /* @__PURE__ */ e.jsx(
          P,
          {
            className: s ? "opacity-50" : "",
            color: g["avg-click-rate"].color,
            label: "Avg. click rate",
            value: _(o)
          }
        )
      ] }) }),
      /* @__PURE__ */ e.jsxs(ve, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ e.jsx(Q, { onClick: () => x("total-subscribers"), children: "Total subscribers" }),
        y && /* @__PURE__ */ e.jsx(Q, { onClick: () => x("avg-open-rate"), children: "Avg. open rate" }),
        j && /* @__PURE__ */ e.jsx(Q, { onClick: () => x("avg-click-rate"), children: "Avg. click rate" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "my-4 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: [
      l === "total-subscribers" && /* @__PURE__ */ e.jsx(
        ke,
        {
          className: "-mb-3 h-[16vw] max-h-[320px] min-h-[180px] w-full",
          color: g["total-subscribers"].color,
          data: b,
          id: "mrr",
          range: u
        }
      ),
      (l === "avg-open-rate" && y || l === "avg-click-rate" && j) && /* @__PURE__ */ e.jsx(e.Fragment, { children: s ? /* @__PURE__ */ e.jsx("div", { className: "h-[320px] w-full items-center justify-center", children: /* @__PURE__ */ e.jsx(te, {}) }) : t && t.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(we, { className: "aspect-auto h-[200px] w-full md:h-[220px] xl:h-[320px]", config: C, children: /* @__PURE__ */ e.jsxs(
          et,
          {
            className: p ? "cursor-pointer!" : "",
            data: t,
            margin: {
              top: 20
            },
            onClick: (c) => {
              c.activePayload && c.activePayload[0].payload.post_id && w(`/posts/analytics/${c.activePayload[0].payload.post_id}`, { crossApp: !0 });
            },
            onMouseLeave: () => v(!1),
            onMouseMove: (c) => {
              v(!!(c.activePayload && c.activePayload[0].payload.post_id));
            },
            children: [
              /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: "barGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: g[l].color, stopOpacity: 0.8 }),
                /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: g[l].color, stopOpacity: 0.6 })
              ] }) }),
              /* @__PURE__ */ e.jsx(Ne, { horizontal: !0, stroke: "var(--border)", vertical: !1 }),
              /* @__PURE__ */ e.jsx(
                ye,
                {
                  axisLine: { stroke: "var(--border)", strokeWidth: 1 },
                  dataKey: "post_id",
                  interval: 0,
                  stroke: "var(--border)",
                  tickFormatter: () => "",
                  tickLine: !1,
                  tickMargin: 10
                }
              ),
              /* @__PURE__ */ e.jsx(
                _e,
                {
                  axisLine: !1,
                  domain: T,
                  tickFormatter: (c) => _(c),
                  tickLine: !1,
                  ticks: O,
                  width: Se(O, (c) => _(c))
                }
              ),
              /* @__PURE__ */ e.jsx(
                Ce,
                {
                  content: /* @__PURE__ */ e.jsx(rt, {}),
                  cursor: !1,
                  isAnimationActive: !1,
                  position: { y: 10 }
                }
              ),
              he && /* @__PURE__ */ e.jsx(Te, { label: { value: `${_(Z)}`, position: "left", offset: 8, fill: "var(--muted-foreground)" }, opacity: 0.5, stroke: "var(--muted-foreground)", strokeDasharray: "4 4", y: Z }),
              /* @__PURE__ */ e.jsx(
                De,
                {
                  activeBar: { fillOpacity: 1 },
                  dataKey: g[l].datakey,
                  fill: "url(#barGradient)",
                  fillOpacity: 0.6,
                  isAnimationActive: !1,
                  maxBarSize: 32,
                  minPointSize: 3,
                  radius: 4
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ e.jsxs("div", { className: "-mt-4 text-center text-sm text-muted-foreground", children: [
          "Newsletters ",
          l === "avg-open-rate" ? "opens" : "clicks",
          " in this period"
        ] })
      ] }) : /* @__PURE__ */ e.jsx(
        le,
        {
          className: "size-full py-20",
          title: `No newsletters ${U(u)}`,
          children: /* @__PURE__ */ e.jsx(ie, { strokeWidth: 1.5 })
        }
      ) })
    ] })
  ] });
}, lt = ({ newsletters: a }) => {
  const { selectedNewsletterId: t, setSelectedNewsletterId: r } = F(), n = m(() => a?.filter((s) => s.status === "active") || [], [a]);
  return re(() => {
    if (n.length > 0 && !t) {
      const s = n.find((i) => i.sort_order === 0);
      r(s ? s.id : n[0].id);
    }
  }, [n, t, r]), n.length <= 1 ? null : /* @__PURE__ */ e.jsxs(
    Le,
    {
      value: t || "",
      onValueChange: (s) => {
        r(s);
      },
      children: [
        /* @__PURE__ */ e.jsxs(Re, { className: "w-auto", children: [
          /* @__PURE__ */ e.jsx(Me, { className: "mr-2", size: 16, strokeWidth: 1.5 }),
          /* @__PURE__ */ e.jsx(Oe, { placeholder: "Select a newsletter" })
        ] }),
        /* @__PURE__ */ e.jsx(Pe, { align: "end", children: /* @__PURE__ */ e.jsxs(Ee, { children: [
          /* @__PURE__ */ e.jsx(Be, { children: "Newsletters" }),
          n.map((s) => /* @__PURE__ */ e.jsx(Ae, { value: s.id, children: s.name }, s.id))
        ] }) })
      ]
    }
  );
}, it = "NewslettersResponseType", ct = xe({
  dataType: it,
  path: "/newsletters/",
  defaultSearchParams: { include: "count.active_members,count.posts", limit: "50" },
  defaultNextPageParams: (a, t) => ({
    ...t,
    page: (a.meta?.pagination.next || 1).toString()
  }),
  returnData: (a) => {
    const { pages: t } = a, r = t.flatMap((s) => s.newsletters), n = t[t.length - 1].meta;
    return {
      newsletters: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
}), ot = (a, t, r = !0) => {
  const n = a ?? 30, { startDate: s, endDate: i } = m(() => X(n), [n]), l = m(() => {
    const p = {
      date_from: $(s),
      date_to: $(i)
    };
    return t && (p.newsletter_id = t), p;
  }, [s, i, t]), h = ze({ searchParams: l, enabled: r });
  return r ? h : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: h.refetch
  };
}, dt = (a, t, r, n = !0) => {
  const s = a ?? 30, i = t ?? "date desc", { startDate: l, endDate: h } = m(() => X(s), [s]), p = m(() => {
    const u = {
      date_from: $(l),
      date_to: $(h),
      order: i
    };
    return r && (u.newsletter_id = r), u;
  }, [l, h, i, r]), v = He({ searchParams: p, enabled: n });
  return n ? v : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: v.refetch
  };
}, ut = (a, t = [], r = !0) => {
  const n = m(() => {
    const i = {};
    return a && (i.newsletter_id = a), t.length > 0 && (i.post_ids = t.join(",")), i;
  }, [a, t]), s = Ke({ searchParams: n, enabled: r });
  return r ? s : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: s.refetch
  };
}, de = (a, t, r, n = !0) => {
  const s = dt(a, t, r, n), i = m(() => s.data?.stats ? s.data.stats.map((p) => p.post_id) : [], [s.data]), l = ut(
    r,
    i,
    n && i.length > 0
  );
  return {
    data: m(() => {
      if (!s.data?.stats)
        return;
      const p = s.data.stats, v = l.data?.stats || [], u = /* @__PURE__ */ new Map();
      v.forEach((f) => {
        u.set(f.post_id, f);
      });
      const w = p.map((f) => {
        const N = u.get(f.post_id);
        return {
          ...f,
          total_clicks: N?.total_clicks || 0,
          click_rate: N?.click_rate || 0
        };
      });
      return {
        ...s.data,
        stats: w
      };
    }, [s.data, l.data]),
    isLoading: s.isLoading,
    isClicksLoading: l.isLoading,
    error: s.error || l.error,
    isError: s.isError || l.isError,
    refetch: () => {
      s.refetch(), l.refetch();
    }
  };
}, ue = J.memo(({ range: a, selectedNewsletterId: t, shouldFetchStats: r, sortBy: n }) => {
  const s = se(), { settings: i } = F(), l = String(i.find((d) => d.key === "timezone")?.value || "Etc/UTC"), { data: h, isLoading: p, isClicksLoading: v } = de(
    a,
    n,
    // Reactive to sort changes, but only affects this component
    t || void 0,
    !!r
  ), { appSettings: u } = I(), { emailTrackClicks: w, emailTrackOpens: f } = u?.analytics || {}, N = m(() => h?.stats || [], [h]), j = f && w ? 5 : f || w ? 4 : 3, y = m(() => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(V, { className: "last:border-none [&>td]:py-2.5", children: /* @__PURE__ */ e.jsx(R, { className: "font-medium", colSpan: j, children: /* @__PURE__ */ e.jsx(qe, { className: "mt-5" }) }) }) }), [j]), M = m(() => N.length > 0 ? /* @__PURE__ */ e.jsx(e.Fragment, { children: N.map((d) => /* @__PURE__ */ e.jsxs(V, { className: "last:border-none [&>td]:py-2.5", children: [
    /* @__PURE__ */ e.jsx(R, { className: "font-medium", children: /* @__PURE__ */ e.jsx("div", { className: "group/link inline-flex items-center gap-2", children: d.post_id ? /* @__PURE__ */ e.jsx(Je, { className: "h-auto p-0 text-left whitespace-normal hover:underline!", title: "View post analytics", variant: "link", onClick: () => {
      s(`/posts/analytics/${d.post_id}/`, { crossApp: !0 });
    }, children: d.post_title }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: d.post_title }) }) }),
    /* @__PURE__ */ e.jsx(R, { className: "text-sm whitespace-nowrap", children: ne(d.send_date, l) }),
    /* @__PURE__ */ e.jsx(R, { className: "text-right font-mono text-sm", children: D(d.sent_to) }),
    f && /* @__PURE__ */ e.jsxs(R, { className: "text-right font-mono text-sm", children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: _(d.open_rate) }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:visible! group-hover:block!", children: D(d.total_opens) })
    ] }),
    w && /* @__PURE__ */ e.jsx(R, { className: "text-right font-mono text-sm", children: v ? /* @__PURE__ */ e.jsx("span", { className: "inline-block h-4 w-8 animate-pulse rounded bg-gray-200" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: _(d.click_rate) }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:visible! group-hover:block!", children: D(d.total_clicks) })
    ] }) })
  ] }, d.post_id)) }) : /* @__PURE__ */ e.jsx(V, { className: "border-none hover:bg-transparent", children: /* @__PURE__ */ e.jsx(R, { className: "text-center group-hover:bg-transparent!", colSpan: j, children: /* @__PURE__ */ e.jsx(
    le,
    {
      className: "size-full py-20",
      title: `No newsletters ${U(a)}`,
      children: /* @__PURE__ */ e.jsx(ie, { strokeWidth: 1.5 })
    }
  ) }) }), [N, v, s, w, f, a]);
  return p || !h ? y : M;
});
ue.displayName = "NewsletterTableRows";
const me = J.memo(({ sortBy: a, setSortBy: t, range: r }) => {
  const n = m(() => /* @__PURE__ */ e.jsxs(Ge, { children: [
    /* @__PURE__ */ e.jsx(Qe, { children: "Top newsletters" }),
    /* @__PURE__ */ e.jsxs(Ye, { children: [
      " Your best performing newsletters ",
      U(r)
    ] })
  ] }), [r]), { appSettings: s } = I(), { emailTrackClicks: i, emailTrackOpens: l } = s?.analytics || {};
  return /* @__PURE__ */ e.jsx(at, { children: /* @__PURE__ */ e.jsxs(V, { children: [
    /* @__PURE__ */ e.jsx(B, { className: "min-w-[320px]", variant: "cardhead", children: n }),
    /* @__PURE__ */ e.jsx(B, { className: "w-[65px]", children: /* @__PURE__ */ e.jsx(K, { activeSortBy: a, setSortBy: t, sortBy: "date desc", children: "Date" }) }),
    /* @__PURE__ */ e.jsx(B, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(K, { activeSortBy: a, setSortBy: t, sortBy: "sent_to desc", children: "Sent" }) }),
    l && /* @__PURE__ */ e.jsx(B, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(K, { activeSortBy: a, setSortBy: t, sortBy: "open_rate desc", children: "Opens" }) }),
    i && /* @__PURE__ */ e.jsx(B, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(K, { activeSortBy: a, setSortBy: t, sortBy: "click_rate desc", children: "Clicks" }) })
  ] }) });
});
me.displayName = "NewsletterTableHeader";
const pe = J.memo(({ range: a, selectedNewsletterId: t, shouldFetchStats: r }) => {
  const [n, s] = q("open_rate desc");
  return /* @__PURE__ */ e.jsx(ce, { className: "w-full max-w-[calc(100vw-64px)] overflow-x-auto sidebar:max-w-[calc(100vw-64px-280px)]", "data-testid": "top-newsletters-card", children: /* @__PURE__ */ e.jsx(oe, { children: /* @__PURE__ */ e.jsxs(tt, { children: [
    /* @__PURE__ */ e.jsx(me, { range: a, setSortBy: s, sortBy: n }),
    /* @__PURE__ */ e.jsx(st, { children: /* @__PURE__ */ e.jsx(
      ue,
      {
        range: a,
        selectedNewsletterId: t,
        shouldFetchStats: r,
        sortBy: n
      }
    ) })
  ] }) }) });
});
pe.displayName = "TopNewslettersTable";
const gt = () => {
  const { range: a, selectedNewsletterId: t } = F(), [r] = ae(), { appSettings: n } = I(), s = r.get("tab") || "total-subscribers", { data: i, isLoading: l } = ct({
    searchParams: {
      limit: "50"
    }
  }), h = !l && i && i.newsletters.length > 0 && !!t, { data: p, isLoading: v } = ot(
    a,
    t || void 0,
    h || !1
  ), { data: u, isLoading: w, isClicksLoading: f } = de(
    a,
    "date asc",
    t || void 0,
    h || !1
  ), N = m(() => !i?.newsletters || !t ? null : i.newsletters.find((o) => o.id === t) || null, [i, t]), j = m(() => {
    const o = N?.count?.active_members || p?.stats?.[0]?.total || 0;
    let b = 0, S = 0;
    if (u?.stats && u.stats.length > 0) {
      const x = u.stats, C = x.reduce((T, O) => T + (O.open_rate || 0), 0), g = x.reduce((T, O) => T + (O.click_rate || 0), 0);
      b = C / x.length, S = g / x.length;
    }
    return {
      totalSubscribers: o,
      avgOpenRate: b,
      avgClickRate: S
    };
  }, [N, p, u]), y = m(() => {
    if (!p?.stats?.[0]?.values || p.stats[0].values.length === 0) {
      const { startDate: b, endDate: S } = X(a), x = [], C = b.clone().toDate(), g = S.toDate();
      for (; C <= g; )
        x.push({
          date: C.toISOString().split("T")[0],
          value: 0
        }), C.setDate(C.getDate() + 1);
      return x;
    }
    const o = p.stats[0].values;
    if (o.length === 1) {
      const b = o[0], S = /* @__PURE__ */ new Date(), x = a, C = new Date(S.getTime() - x * 24 * 60 * 60 * 1e3);
      return [
        {
          ...b,
          date: C.toISOString().split("T")[0]
          // Start of range
        },
        {
          ...b,
          date: S.toISOString().split("T")[0]
          // End of range (today)
        }
      ];
    }
    return o;
  }, [p, a]), M = m(() => u?.stats ? u.stats.map((o) => ({
    post_id: o.post_id,
    post_title: o.post_title,
    send_date: o.send_date,
    sent_to: o.sent_to,
    total_opens: o.total_opens,
    open_rate: o.open_rate,
    total_clicks: o.total_clicks || 0,
    click_rate: o.click_rate || 0
  })) : [], [u]), d = v || f || w;
  return n && !n.newslettersEnabled ? /* @__PURE__ */ e.jsx(ge, { to: "/analytics" }) : /* @__PURE__ */ e.jsxs(Ve, { children: [
    /* @__PURE__ */ e.jsx($e, { children: /* @__PURE__ */ e.jsxs(Fe, { children: [
      /* @__PURE__ */ e.jsx(lt, { newsletters: i?.newsletters }),
      /* @__PURE__ */ e.jsx(Ie, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(We, { isLoading: !1, loadingComponent: /* @__PURE__ */ e.jsx(e.Fragment, {}), children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(ce, { "data-testid": "newsletters-card", children: /* @__PURE__ */ e.jsx(oe, { children: /* @__PURE__ */ e.jsx(
        nt,
        {
          avgsData: M,
          initialTab: s,
          isAvgsLoading: !1,
          isLoading: d,
          subscribersData: y,
          totals: j
        }
      ) }) }),
      /* @__PURE__ */ e.jsx(
        pe,
        {
          range: a,
          selectedNewsletterId: t,
          shouldFetchStats: !!h
        }
      )
    ] }) })
  ] });
};
export {
  gt as default
};
//# sourceMappingURL=index-DdHUYNZn.mjs.map
