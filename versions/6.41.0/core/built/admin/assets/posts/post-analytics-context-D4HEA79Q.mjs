import { d as h, u as P, j as k, B as E, D as I } from "./index-ccmRG8Rd.mjs";
import { b as D, c as C, u as B } from "./settings-Cv9xgT7m.mjs";
import { a as T } from "./hooks-muBZfhoU.mjs";
const N = "TinybirdTokenResponseType", w = {
  refetchInterval: 7200 * 1e3,
  // 2 hours — tokens expire after 3 hours
  refetchIntervalInBackground: !0,
  staleTime: 6600 * 1e3
  // 110 minutes - shorter than refetch interval so automatic refresh works
}, O = T({
  dataType: N,
  path: "/tinybird/token/"
}), U = (o = {}) => O({
  ...w,
  ...o
});
let g = !1;
const R = (o = {}) => {
  const { enabled: s = !0 } = o, t = U({ enabled: s }), e = t.data?.tinybird?.token, n = t.error;
  return !t.isLoading && s && t.data && !e && !g && (console.warn("Tinybird analytics: No valid token received. Check your Tinybird configuration (workspaceId and adminToken must be non-empty strings)."), g = !0), {
    token: e && typeof e == "string" ? e : void 0,
    isLoading: t.isLoading,
    error: n,
    refetch: t.refetch
  };
}, Y = {
  TODAY: { name: "Today", value: 1 },
  LAST_7_DAYS: { name: "Last 7 days", value: 7 },
  LAST_30_DAYS: { name: "Last 30 days", value: 31 },
  LAST_90_DAYS: { name: "Last 90 days", value: 91 },
  YEAR_TO_DATE: { name: "Year to date", value: 366 },
  LAST_12_MONTHS: { name: "Last 12 months", value: 372 },
  ALL_TIME: { name: "All time", value: 1e3 }
}, q = {
  // Countries
  US: "United States",
  TWN: "Taiwan",
  TW: "Taiwan",
  CN: "China",
  // Technical
  "mobile-ios": "iOS",
  "mobile-android": "Android",
  macos: "macOS",
  // Sources
  "google.com": "Google",
  "ghost.org": "Ghost",
  "bing.com": "Bing",
  "bsky.app": "Bluesky",
  "yahoo.com": "Yahoo",
  "duckduckgo.com": "DuckDuckGo"
}, $ = ["NULL", "ᴺᵁᴸᴸ", "", "Others", "Other"], a = {
  PUBLIC: 1,
  // 1
  FREE: 2,
  // 2
  PAID: 4
  // 4
}, z = a.PUBLIC | a.FREE | a.PAID, H = [
  { name: "Public visitors", value: "undefined", bit: a.PUBLIC },
  { name: "Free members", value: "free", bit: a.FREE },
  { name: "Paid members", value: "paid", bit: a.PAID }
], x = "SiteResponseType", G = T({
  dataType: x,
  path: "/site/"
}), m = I(void 0), j = () => {
  const o = E(m);
  if (!o)
    throw new Error("useGlobalData must be used within a PostAnalyticsProvider");
  return o;
}, Q = ({ children: o }) => {
  const { postId: s } = h();
  if (!s)
    throw new Error("Post ID is required for PostAnalyticsProvider");
  const t = D(), e = G(), [n, y] = P(Y.LAST_30_DAYS.value), d = C(), i = !!t.data?.config?.stats, r = R({ enabled: i }), { data: { posts: [b] } = { posts: [] }, isLoading: A } = B({
    searchParams: {
      filter: `id:${s}`,
      include: "email,authors,tags,tiers,count.clicks,count.signups,count.paid_conversions,count.positive_feedback,count.negative_feedback,newsletter"
    }
  }), u = [t, e, d], f = u.map((c) => c.error).find(Boolean), p = i ? r.error : null, l = f || p, L = u.some((c) => c.isLoading), S = i ? r.isLoading : !1, _ = L || S;
  if (l)
    throw l;
  const v = e.data?.site ? {
    url: e.data.site.url,
    icon: e.data.site.icon,
    title: e.data.site.title
  } : void 0;
  return /* @__PURE__ */ k.jsx(m.Provider, { value: {
    data: t.data?.config,
    site: v,
    statsConfig: t.data?.config?.stats,
    tinybirdToken: r.token,
    isLoading: _,
    range: n,
    setRange: y,
    settings: d.data?.settings || [],
    postId: s,
    post: b,
    isPostLoading: A
  }, children: o });
}, K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q,
  useGlobalData: j
}, Symbol.toStringTag, { value: "Module" }));
export {
  z as A,
  Y as S,
  $ as U,
  q as a,
  H as b,
  a as c,
  R as d,
  K as p,
  j as u
};
//# sourceMappingURL=post-analytics-context-D4HEA79Q.mjs.map
