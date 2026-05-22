import { R as D, j as e, c as te, u as $, a as p, b as B, d as ze, e as ge, f as C, t as $e, v as Ee, m as ce, h as De, g as M } from "./index-ccmRG8Rd.mjs";
import { A as Ie, a as Me } from "./avatar-UVxVUxf7.mjs";
import { B as E } from "./button-bsWyESEG.mjs";
import { C as J, a as X, b as Z, e as ee, c as T, f as xe, T as Be, h as Ve, P as Ue, d as Oe, j as We } from "./post-analytics-header-9jDeEi2u.mjs";
import { S as se } from "./get-site-timezone-_SyeKwec.mjs";
import { A as He } from "./value-kov4qFS9.mjs";
import { A as Ge, a2 as Ke, a3 as qe, a1 as oe, k as Ye, T as Qe, D as Je, a as Xe, b as Ze, c as es, d as ss, e as ts, f as as, g as is, j as ns } from "./tabs-DWupT4E_.mjs";
import { b as he, C as rs } from "./skeleton-9GpF0jm6.mjs";
import { H as fe } from "./heading-DxkKnY_o.mjs";
import { e as ls, h as de } from "./app-utils-B8w6QZz5.mjs";
import { c as cs } from "./hooks-muBZfhoU.mjs";
import { h as os, i as ds, K as W, f as H, a as G, b as K, c as q, g as ms } from "./stats-CzDKJ9UC.mjs";
import { I as ps } from "./input-DI_PbeGQ.mjs";
import { B as us } from "./loading-indicator-DUlTXBD-.mjs";
import { a as gs, u as xs, p as hs, g as Y, N as Q } from "./links-B35ypGIx.mjs";
import { u as fs } from "./post-analytics-context-D4HEA79Q.mjs";
import { g as me } from "./settings-Cv9xgT7m.mjs";
const ae = D.forwardRef(({ className: t, children: s, ...i }, a) => /* @__PURE__ */ e.jsx("div", { ref: a, className: te("flex items-center justify-between gap-4 pb-6 text-sm", t), ...i, children: s }));
ae.displayName = "SimplePagination";
const bs = D.forwardRef(({ className: t, currentPage: s, totalPages: i, ...a }, c) => /* @__PURE__ */ e.jsxs("span", { ref: c, className: te("text-muted-foreground", t), ...a, children: [
  "Pages ",
  s,
  " of ",
  i
] }));
bs.displayName = "SimplePaginationPages";
const ie = D.forwardRef(({ className: t, children: s, ...i }, a) => /* @__PURE__ */ e.jsx("div", { ref: a, className: te("flex items-center gap-1.5", t), ...i, children: s }));
ie.displayName = "SimplePaginationNavigation";
const ne = D.forwardRef(
  ({ variant: t = "outline", ...s }, i) => /* @__PURE__ */ e.jsx(E, { ref: i, size: "sm", variant: t, ...s, children: /* @__PURE__ */ e.jsx(He, {}) })
);
ne.displayName = "SimplePaginationPreviousButton";
const re = D.forwardRef(
  ({ variant: t = "outline", ...s }, i) => /* @__PURE__ */ e.jsx(E, { ref: i, size: "sm", variant: t, ...s, children: /* @__PURE__ */ e.jsx(Ge, {}) })
);
re.displayName = "SimplePaginationNextButton";
function be({
  data: t,
  itemsPerPage: s,
  initialPage: i = 1
}) {
  const [a, c] = $(i);
  if (s <= 0)
    throw new Error("itemsPerPage must be a positive number");
  const r = (m) => {
    const N = Math.max(1, Math.min(d, m));
    c(N);
  }, d = p(() => t ? Math.ceil(t.length / s) : 1, [t, s]);
  B(() => {
    a > d && c(1);
  }, [a, d]);
  const S = p(() => {
    if (!t)
      return null;
    const m = (a - 1) * s;
    return t.slice(m, m + s);
  }, [t, a, s]), y = () => {
    c((m) => Math.min(d, m + 1));
  }, b = () => {
    c((m) => Math.max(1, m - 1));
  }, n = a < d, k = a > 1;
  return {
    currentPage: a,
    setCurrentPage: r,
    totalPages: d,
    paginatedData: S,
    nextPage: y,
    previousPage: b,
    hasNextPage: n,
    hasPreviousPage: k
  };
}
const ks = "FeedbackResponseType", vs = cs({
  dataType: ks,
  path: (t) => `/feedback/${t}/`
}), js = (t, s) => {
  const { data: i, isLoading: a, error: c } = vs(t, {
    searchParams: {
      limit: "50",
      // Get more data for pagination
      ...s !== void 0 ? { score: s.toString() } : {}
    }
  });
  return {
    feedback: p(() => i?.feedback ? i.feedback : [], [i]),
    isLoading: a,
    error: c
  };
}, Ns = ({ feedbackStats: t }) => {
  const { postId: s } = ze(), i = ge(), [a, c] = $("positive"), r = 9, d = a === "positive" ? 1 : 0, { feedback: S, isLoading: y } = js(s || "", d), {
    totalPages: b,
    paginatedData: n,
    nextPage: k,
    previousPage: m,
    hasNextPage: N,
    hasPreviousPage: x
  } = be({
    data: S,
    itemsPerPage: r
  }), f = y;
  return /* @__PURE__ */ e.jsxs(J, { children: [
    /* @__PURE__ */ e.jsxs(X, { className: "pb-5", children: [
      /* @__PURE__ */ e.jsx(Z, { children: "Feedback" }),
      /* @__PURE__ */ e.jsx(ee, { children: "What did your readers think?" })
    ] }),
    t.totalFeedback > 0 ? /* @__PURE__ */ e.jsxs(T, { className: "pb-3", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ e.jsx(Ke, { className: "pb-3", defaultValue: "positive", value: a, variant: "button", onValueChange: (l) => c(l), children: /* @__PURE__ */ e.jsxs(qe, { className: "gap-1", children: [
          /* @__PURE__ */ e.jsx(oe, { className: "h-7", value: "positive", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-xs", children: [
            /* @__PURE__ */ e.jsx(Ye, { size: 14, strokeWidth: 1.25 }),
            /* @__PURE__ */ e.jsx("span", { className: "hidden font-medium sm:visible! sm:inline!", children: "More like this" }),
            /* @__PURE__ */ e.jsx("span", { className: "font-semibold tracking-tight", children: C(t.positiveFeedback / t.totalFeedback) })
          ] }) }),
          /* @__PURE__ */ e.jsx(oe, { className: "h-7", value: "negative", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-xs", children: [
            /* @__PURE__ */ e.jsx(Qe, { size: 14, strokeWidth: 1.25 }),
            /* @__PURE__ */ e.jsx("span", { className: "hidden font-medium sm:visible! sm:inline!", children: "Less like this" }),
            /* @__PURE__ */ e.jsx("span", { className: "font-semibold tracking-tight", children: C(t.negativeFeedback / t.totalFeedback) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ e.jsx(fe, { className: "mr-2 mb-3 lg:hidden xl:visible! xl:block!", children: "Date" })
      ] }),
      /* @__PURE__ */ e.jsx(se, {}),
      f ? /* @__PURE__ */ e.jsx(he, { className: "mt-3", lines: 3 }) : n && n.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col py-3", children: n.map((l) => /* @__PURE__ */ e.jsxs("div", { className: "flex h-10 w-full items-center justify-between gap-3 rounded-sm border-none px-2 text-sm hover:cursor-pointer hover:bg-accent", onClick: () => {
        i(`/members/${l.member.id}`, { crossApp: !0 });
      }, children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 font-medium", children: [
          /* @__PURE__ */ e.jsxs(Ie, { className: "size-7", children: [
            l.member?.avatar_image && /* @__PURE__ */ e.jsx("img", { className: "absolute aspect-square size-full", src: l.member?.avatar_image }),
            /* @__PURE__ */ e.jsx(Me, { className: "text-white", style: {
              backgroundColor: `${$e(de(l.member), "75", "55")}`
            }, children: ls(l.member) })
          ] }),
          de(l.member)
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "whitespace-nowrap text-muted-foreground", children: Ee(l.created_at) })
      ] }, l.id)) }) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8 text-center text-sm text-muted-foreground", children: /* @__PURE__ */ e.jsxs("div", { children: [
        "No ",
        a === "positive" ? "positive" : "negative",
        " feedback yet"
      ] }) })
    ] }) : /* @__PURE__ */ e.jsxs(T, { className: "flex grow flex-col items-center justify-center text-center text-sm text-muted-foreground", children: [
      /* @__PURE__ */ e.jsx("div", { children: "No members have given feedback yet" }),
      /* @__PURE__ */ e.jsx("div", { children: "When someone does, you'll see their response here." })
    ] }),
    t.totalFeedback > 0 && /* @__PURE__ */ e.jsx(xe, { className: "grow-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center justify-between gap-3", children: [
      /* @__PURE__ */ e.jsxs(E, { variant: "outline", onClick: () => {
        const l = `(feedback.post_id:'${s}'+feedback.score:1)`, F = `(feedback.post_id:'${s}'+feedback.score:0)`, u = `${encodeURIComponent(l)}&post=${s}`, R = `${encodeURIComponent(F)}&post=${s}`;
        i(`/members?filter=${a === "positive" ? u : R}`, { crossApp: !0 });
      }, children: [
        "View all",
        /* @__PURE__ */ e.jsx(Be, {})
      ] }),
      b > 1 && /* @__PURE__ */ e.jsx(ae, { className: "pb-0", children: /* @__PURE__ */ e.jsxs(ie, { children: [
        /* @__PURE__ */ e.jsx(
          ne,
          {
            disabled: !x,
            onClick: m
          }
        ),
        /* @__PURE__ */ e.jsx(
          re,
          {
            disabled: !N,
            onClick: k
          }
        )
      ] }) })
    ] }) })
  ] });
}, ws = () => {
  const { mutateAsync: t, isLoading: s } = gs();
  return {
    editLinks: t,
    isEditLinksLoading: s
  };
}, Cs = (t) => {
  const { data: s, isLoading: i } = me(t), { data: a, isLoading: c } = me(t, {
    searchParams: {
      include: "count.positive_feedback,count.negative_feedback"
    }
  }), r = p(() => s?.posts[0], [s]), d = p(() => a?.posts[0], [a]), S = p(() => r ? {
    sent: r.email?.email_count || 0,
    opened: r.email?.opened_count || 0,
    clicked: r.count?.clicks || 0,
    openedRate: r.email?.opened_count ? r.email.opened_count / r.email.email_count : 0,
    clickedRate: r.count?.clicks && r.email?.email_count ? r.count.clicks / r.email.email_count : 0
  } : {
    sent: 0,
    opened: 0,
    clicked: 0,
    openedRate: 0,
    clickedRate: 0
  }, [r]), y = p(() => {
    if (!d?.count)
      return {
        positiveFeedback: 0,
        negativeFeedback: 0,
        totalFeedback: 0
      };
    const h = d.count.positive_feedback || 0, w = d.count.negative_feedback || 0, P = h + w;
    return {
      positiveFeedback: h,
      negativeFeedback: w,
      totalFeedback: P
    };
  }, [d]), b = p(() => r?.newsletter?.id, [r]), { data: n, isLoading: k } = os({
    searchParams: b ? { newsletter_id: b } : {},
    enabled: !!b
  }), m = p(() => n?.stats ? n.stats.map((h) => h.post_id) : [], [n]), { data: N, isLoading: x } = ds({
    searchParams: b && m.length > 0 ? {
      newsletter_id: b,
      post_ids: m.join(",")
    } : {},
    enabled: !!b && m.length > 0
  }), f = p(() => {
    if (!n?.stats)
      return;
    const h = n.stats, w = N?.stats || [], P = /* @__PURE__ */ new Map();
    w.forEach((j) => {
      P.set(j.post_id, j);
    });
    const L = h.map((j) => {
      const I = P.get(j.post_id);
      return {
        ...j,
        total_clicks: I?.total_clicks || 0,
        click_rate: I?.click_rate || 0
      };
    });
    return {
      ...n,
      stats: L
    };
  }, [n, N]), l = k || x, { data: F, isLoading: u, refetch: R } = xs({
    searchParams: {
      filter: `post_id:'${t}'`
    }
  }), v = p(() => {
    if (!f || !f.stats)
      return {
        openRate: 0,
        clickRate: 0
      };
    const h = f.stats;
    if (h.length === 0)
      return {
        openRate: 0,
        clickRate: 0
      };
    const w = h.reduce((L, j) => L + (j.open_rate || 0), 0), P = h.reduce((L, j) => L + (j.click_rate || 0), 0);
    return {
      openRate: Number((w / h.length).toFixed(2)),
      clickRate: Number((P / h.length).toFixed(2))
    };
  }, [f]), V = p(() => hs(F), [F]), U = p(() => ({
    openedRate: v.openRate,
    clickedRate: v.clickRate
  }), [v]);
  return {
    post: r,
    stats: S,
    feedbackStats: y,
    averageStats: U,
    topLinks: V,
    refetchTopLinks: R,
    isLoading: i || c || l || u
  };
}, ys = ({
  breakpoints: t = {
    sm: 1080,
    md: 1280,
    lg: 1360
  }
} = {}) => {
  const [s, i] = $("md");
  return B(() => {
    const a = () => {
      const c = window.innerWidth;
      c < t.sm ? i("sm") : c < t.md ? i("md") : i("lg");
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, [t]), {
    chartSize: s,
    isSmall: s === "sm",
    isMedium: s === "md",
    isLarge: s === "lg"
  };
}, pe = () => /* @__PURE__ */ e.jsx("div", { className: "absolute top-1/2 -right-4 z-10 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground md:visible! md:flex!", children: /* @__PURE__ */ e.jsx(rs, { className: "ml-0.5", size: 16, strokeWidth: 1.5 }) }), ue = ({
  dataColor: t,
  value: s,
  avgValue: i
}) => /* @__PURE__ */ e.jsxs("div", { className: "absolute top-6 left-1/2 z-50 flex w-[200px] -translate-x-1/2 flex-col items-stretch gap-1.5 rounded-md bg-background px-4 py-2 text-sm opacity-0 shadow-md transition-all group-hover/block:top-3 group-hover/block:opacity-100", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "size-2 rounded-full bg-chart-blue opacity-50",
          style: {
            backgroundColor: t
          }
        }
      ),
      "This newsletter"
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "text-right font-mono", children: s })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
      /* @__PURE__ */ e.jsx("div", { className: "size-2 rounded-full bg-chart-gray opacity-80" }),
      "Average"
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "text-right font-mono", children: i })
  ] })
] }), Os = () => {
  const t = ge(), [s, i] = $(null), [a, c] = $(""), r = ce(null), d = ce(null), S = 10, { chartSize: y } = ys(), { appSettings: b } = De(), { emailTrackClicks: n, emailTrackOpens: k } = b?.analytics || {}, { post: m, isPostLoading: N, postId: x } = fs(), f = (o) => t(ms({ filter: o }), { crossApp: !0 }), l = m, F = Ve(l);
  B(() => {
    !N && !F && t(`/posts/analytics/${x}`);
  }, [t, x, N, F]);
  const { stats: u, averageStats: R, topLinks: v, isLoading: V, refetchTopLinks: U } = Cs(x), { editLinks: h } = ws(), w = p(() => {
    if (!l?.count)
      return {
        positiveFeedback: 0,
        negativeFeedback: 0,
        totalFeedback: 0
      };
    const o = l.count.positive_feedback || 0, g = l.count.negative_feedback || 0, _ = o + g;
    return {
      positiveFeedback: o,
      negativeFeedback: g,
      totalFeedback: _
    };
  }, [l]), P = p(() => l?.newsletter?.feedback_enabled === !0, [l]), L = p(() => w.totalFeedback > 0 ? !0 : P, [w.totalFeedback, P]), j = (o) => {
    const g = Y(v, o);
    g && (i(o), c(g.link.to));
  }, I = () => {
    if (!s)
      return;
    const o = Y(v, s);
    if (!o)
      return;
    const g = a.trim();
    if (g === "" || g === o.link.to) {
      i(null), c("");
      return;
    }
    h({
      originalUrl: o.link.originalTo,
      editedUrl: a,
      postId: x
    }, {
      onSuccess: () => {
        i(null), c(""), U();
      }
    });
  }, {
    totalPages: ke,
    paginatedData: ve,
    nextPage: je,
    previousPage: Ne,
    hasNextPage: we,
    hasPreviousPage: Ce
  } = be({
    data: v,
    itemsPerPage: S
  });
  B(() => {
    if (s && r.current) {
      r.current.focus();
      const o = Y(v, s), g = (_) => {
        d.current && !d.current.contains(_.target) && a === o?.link.to && (i(null), c(""));
      };
      return document.addEventListener("mousedown", g), () => {
        document.removeEventListener("mousedown", g);
      };
    }
  }, [s, a, v]);
  const O = V || N, ye = [
    { datatype: "Sent", value: 1, fill: "url(#gradientPurple)", color: "var(--chart-purple)" }
  ], Pe = {
    percentage: {
      label: "O"
    },
    Average: {
      label: "Average"
    },
    "This newsletter": {
      label: "This newsletter"
    }
  }, Le = [
    { datatype: "Average", value: R.openedRate, fill: "url(#gradientGray)", color: "var(--chart-gray)" },
    { datatype: "This newsletter", value: u.openedRate, fill: "url(#gradientBlue)", color: "var(--chart-blue)" }
  ], Re = {
    percentage: {
      label: "Opened"
    },
    Average: {
      label: "Average"
    },
    "This newsletter": {
      label: "This newsletter"
    }
  }, _e = [
    { datatype: "Average", value: R.clickedRate, fill: "url(#gradientGray)", color: "var(--chart-gray)" },
    { datatype: "This newsletter", value: u.clickedRate, fill: "url(#gradientTeal)", color: "var(--chart-teal)" }
  ], Se = {
    percentage: {
      label: "Clicked"
    },
    Average: {
      label: "Average"
    },
    "This newsletter": {
      label: "This newsletter"
    }
  };
  let A = "grid-cols-3", z = "aspect-[16/10] w-full max-w-[320px] sm:aspect-[2/1] md:aspect-[10/14] md:max-w-none lg:aspect-square";
  return (!n || !k) && (A = "grid-cols-2", z = "aspect-[16/10] w-full max-w-[320px] sm:aspect-[2/1] md:aspect-square md:max-w-none lg:aspect-[15/10]"), !n && !k && (A = "grid-cols-1", z = "aspect-square w-full sm:aspect-[16/10] md:max-w-[320px] md:max-h-[320px] lg:aspect-[12/10]"), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Ue, { currentTab: "Newsletter" }),
    /* @__PURE__ */ e.jsx(Oe, { children: /* @__PURE__ */ e.jsxs("div", { className: `grid grid-cols-1 gap-6 ${L && n && "lg:grid-cols-2"}`, children: [
      /* @__PURE__ */ e.jsxs(J, { className: L && n ? "lg:col-span-2" : "", children: [
        /* @__PURE__ */ e.jsxs(X, { className: "hidden", children: [
          /* @__PURE__ */ e.jsx(Z, { children: "Newsletters" }),
          /* @__PURE__ */ e.jsx(ee, { children: "How did this post perform" })
        ] }),
        O ? /* @__PURE__ */ e.jsx(T, { className: "h-[25vw] p-6", children: /* @__PURE__ */ e.jsx(us, {}) }) : /* @__PURE__ */ e.jsxs(T, { className: "p-0", children: [
          /* @__PURE__ */ e.jsxs("div", { className: `grid ${A} items-stretch border-b`, children: [
            /* @__PURE__ */ e.jsxs(W, { className: "group relative isolate grow p-3 md:px-6 md:py-5", children: [
              /* @__PURE__ */ e.jsx(H, { onClick: () => {
                f(`emails.post_id:${x}`);
              }, children: "View members →" }),
              /* @__PURE__ */ e.jsxs(G, { onClick: () => {
                f(`emails.post_id:${x}`);
              }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "ml-0.5 size-[9px] rounded-full bg-chart-purple opacity-50" }),
                "Sent"
              ] }),
              /* @__PURE__ */ e.jsx(K, { children: /* @__PURE__ */ e.jsx(q, { className: "text-xl leading-none sm:text-2xl md:text-[2.6rem]", children: M(u.sent) }) })
            ] }),
            k && /* @__PURE__ */ e.jsxs(W, { className: "p-3 md:px-6 md:py-5", children: [
              /* @__PURE__ */ e.jsx(H, { onClick: () => {
                f(`opened_emails.post_id:${x}`);
              }, children: "View members →" }),
              /* @__PURE__ */ e.jsxs(G, { onClick: () => {
                f(`opened_emails.post_id:${x}`);
              }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "ml-0.5 size-[9px] rounded-full bg-chart-blue opacity-50" }),
                "Opened"
              ] }),
              /* @__PURE__ */ e.jsx(K, { children: /* @__PURE__ */ e.jsx(q, { className: "text-xl leading-none sm:text-2xl md:text-[2.6rem]", children: M(u.opened) }) })
            ] }),
            n && /* @__PURE__ */ e.jsxs(W, { className: "group relative isolate grow p-3 md:px-6 md:py-5", children: [
              /* @__PURE__ */ e.jsx(H, { onClick: () => {
                f(`clicked_links.post_id:${x}`);
              }, children: "View members →" }),
              /* @__PURE__ */ e.jsxs(G, { onClick: () => {
                f(`clicked_links.post_id:${x}`);
              }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "ml-0.5 size-[9px] rounded-full bg-chart-teal opacity-50" }),
                "Clicked"
              ] }),
              /* @__PURE__ */ e.jsx(K, { children: /* @__PURE__ */ e.jsx(q, { className: "text-xl leading-none sm:text-2xl md:text-[2.6rem]", children: M(u.clicked) }) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `$ mx-auto grid grid-cols-1 items-center justify-center gap-4 transition-all md:gap-0 ${A === "grid-cols-2" && "md:grid-cols-2"} ${A === "grid-cols-3" && "md:grid-cols-3"}`, children: [
            /* @__PURE__ */ e.jsxs("div", { className: `relative border-r-0 px-6 ${(k || n) && "md:border-r"}`, children: [
              /* @__PURE__ */ e.jsx(
                Q,
                {
                  className: z,
                  config: Pe,
                  data: ye,
                  percentageLabel: "Sent",
                  percentageValue: C(1),
                  size: y,
                  tooltip: !1
                }
              ),
              (k || n) && /* @__PURE__ */ e.jsx(pe, {})
            ] }),
            k && /* @__PURE__ */ e.jsxs("div", { className: `group/block relative border-r-0 px-6 transition-all hover:bg-muted/25 ${n && "md:border-r"}`, children: [
              /* @__PURE__ */ e.jsx(
                ue,
                {
                  avgValue: C(R.openedRate),
                  dataColor: "var(--chart-blue)",
                  value: C(u.openedRate)
                }
              ),
              /* @__PURE__ */ e.jsx(
                Q,
                {
                  className: z,
                  config: Re,
                  data: Le,
                  percentageLabel: "Open rate",
                  percentageValue: C(u.openedRate),
                  size: y,
                  tooltip: !1
                }
              ),
              n && /* @__PURE__ */ e.jsx(pe, {})
            ] }),
            n && /* @__PURE__ */ e.jsxs("div", { className: "group/block relative px-6 transition-all hover:bg-muted/25", children: [
              /* @__PURE__ */ e.jsx(
                ue,
                {
                  avgValue: C(R.clickedRate),
                  dataColor: "var(--chart-teal)",
                  value: C(u.clickedRate)
                }
              ),
              /* @__PURE__ */ e.jsx(
                Q,
                {
                  className: z,
                  config: Se,
                  data: _e,
                  percentageLabel: "Click rate",
                  percentageValue: C(u.clickedRate),
                  size: y,
                  tooltip: !1
                }
              )
            ] })
          ] })
        ] })
      ] }),
      L && /* @__PURE__ */ e.jsx(Ns, { feedbackStats: w }),
      n && /* @__PURE__ */ e.jsxs(J, { className: "group/datalist overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-6", children: [
          /* @__PURE__ */ e.jsxs(X, { className: "p-0", children: [
            /* @__PURE__ */ e.jsx(Z, { children: "Newsletter clicks" }),
            /* @__PURE__ */ e.jsx(ee, { children: "Which links resonated with your readers" })
          ] }),
          /* @__PURE__ */ e.jsx(fe, { className: "mr-2", children: "Members" })
        ] }),
        O ? /* @__PURE__ */ e.jsxs(T, { className: "p-6 pt-0", children: [
          /* @__PURE__ */ e.jsx(se, {}),
          /* @__PURE__ */ e.jsx(he, { className: "mt-6" })
        ] }) : /* @__PURE__ */ e.jsxs(T, { className: "pb-0", children: [
          /* @__PURE__ */ e.jsx(se, {}),
          v.length > 0 ? /* @__PURE__ */ e.jsx(Je, { className: "", children: /* @__PURE__ */ e.jsx(Xe, { children: ve?.map((o) => {
            const g = u.clicked > 0 ? o.count / u.clicked : 0, _ = o.link.link_id, le = o.link.title, Fe = o.link.to, Te = o.link.edited;
            return /* @__PURE__ */ e.jsxs(Ze, { children: [
              s !== _ && /* @__PURE__ */ e.jsx(es, { style: {
                width: `${g ? Math.round(g * 100) : 0}%`
              } }),
              /* @__PURE__ */ e.jsx(ss, { className: "w-full", children: s === _ ? /* @__PURE__ */ e.jsxs("div", { ref: d, className: "flex w-full items-center gap-2", children: [
                /* @__PURE__ */ e.jsx(
                  ps,
                  {
                    ref: r,
                    className: "z-50 h-7 w-full border-border bg-background text-sm",
                    value: a,
                    onChange: (Ae) => c(Ae.target.value)
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  E,
                  {
                    size: "sm",
                    onClick: I,
                    children: "Update"
                  }
                )
              ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(
                  E,
                  {
                    className: "mr-2 shrink-0 bg-background",
                    size: "sm",
                    variant: "outline",
                    onClick: () => j(_),
                    children: /* @__PURE__ */ e.jsx(We, {})
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "a",
                  {
                    className: "block truncate font-medium hover:underline",
                    href: Fe,
                    rel: "noreferrer",
                    target: "_blank",
                    title: le,
                    children: le
                  }
                ),
                Te && /* @__PURE__ */ e.jsx("span", { className: "ml-1 text-gray-500", children: "(edited)" })
              ] }) }),
              /* @__PURE__ */ e.jsxs(ts, { children: [
                /* @__PURE__ */ e.jsx(as, { children: M(o.count || 0) }),
                /* @__PURE__ */ e.jsx(is, { children: C(g) })
              ] })
            ] }, _);
          }) }) }) : /* @__PURE__ */ e.jsx("div", { className: "py-20 text-center text-sm text-gray-700", children: "You have no links in your post." })
        ] }),
        !O && v.length > 1 && /* @__PURE__ */ e.jsx(xe, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-start justify-between gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "mt-2 flex items-start gap-2 pl-4 text-sm text-green", children: [
            /* @__PURE__ */ e.jsx(ns, { size: 20, strokeWidth: 1.5 }),
            "Sent a broken link? You can update it!"
          ] }),
          ke > 1 && /* @__PURE__ */ e.jsx(ae, { className: "pb-0", children: /* @__PURE__ */ e.jsxs(ie, { children: [
            /* @__PURE__ */ e.jsx(
              ne,
              {
                disabled: !Ce,
                onClick: Ne
              }
            ),
            /* @__PURE__ */ e.jsx(
              re,
              {
                disabled: !we,
                onClick: je
              }
            )
          ] }) })
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  Os as default
};
//# sourceMappingURL=newsletter-0bdmm5wk.mjs.map
