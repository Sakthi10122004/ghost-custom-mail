import { f as d, j as o, a as p, S as j, B as C } from "./index-BaZyVSji.mjs";
import { bE as $, X as z, bF as G } from "./stats-B-gFnH1Q.mjs";
import { R, T as _, P as M, C as b, e as W, a as x, D as y, O as D } from "./audience-DNHbvZ_-.mjs";
var I = [
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
], U = I.reduce((t, e) => {
  const s = $(`Primitive.${e}`), a = d((i, r) => {
    const { asChild: l, ...f } = i, S = l ? s : e;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ o.jsx(S, { ...f, ref: r });
  });
  return a.displayName = `Primitive.${e}`, { ...t, [e]: a };
}, {}), F = "Separator", w = "horizontal", Y = ["horizontal", "vertical"], T = d((t, e) => {
  const { decorative: s, orientation: a = w, ...i } = t, r = Z(a) ? a : w, f = s ? { role: "none" } : { "aria-orientation": r === "vertical" ? r : void 0, role: "separator" };
  return /* @__PURE__ */ o.jsx(
    U.div,
    {
      "data-orientation": r,
      ...f,
      ...i,
      ref: e
    }
  );
});
T.displayName = F;
function Z(t) {
  return Y.includes(t);
}
var A = T;
const B = {
  Reddit: "reddit.com",
  "www.reddit.com": "reddit.com",
  Facebook: "facebook.com",
  Twitter: "twitter.com",
  Bluesky: "bsky.app",
  "go.bsky.app": "bsky.app",
  Instagram: "instagram.com",
  LinkedIn: "linkedin.com",
  Threads: "threads.net",
  "Brave Search": "search.brave.com",
  Ecosia: "ecosia.org",
  Gmail: "gmail.com",
  Outlook: "outlook.com",
  "Yahoo!": "yahoo.com",
  "AOL Mail": "aol.com",
  Flipboard: "flipboard.com",
  Substack: "substack.com",
  Ghost: "ghost.org",
  "Ghost Explore": "ghost.org",
  Buffer: "buffer.com",
  Taboola: "taboola.com",
  AppNexus: "appnexus.com",
  Wikipedia: "wikipedia.org",
  Mastodon: "mastodon.social",
  Memeorandum: "memeorandum.com",
  "Ground News": "ground.news",
  "Apple News": "apple.com",
  SmartNews: "smartnews.com",
  "Hacker News": "news.ycombinator.com",
  // Search engines
  Google: "google.com",
  "Google News": "news.google.com",
  Bing: "bing.com",
  DuckDuckGo: "duckduckgo.com",
  // Email/Newsletter
  "newsletter-email": "static.ghost.org",
  newsletter: "static.ghost.org"
}, v = (t) => {
  try {
    return new URL(t.startsWith("http") ? t : `https://${t}`).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};
function at({
  processedData: t,
  totalVisitors: e,
  mode: s
}) {
  return t.map((a) => ({
    ...a,
    percentage: e > 0 ? a.visits / e : 0
  }));
}
const N = (t, e) => t === e ? !0 : t.endsWith(`.${e}`), H = (t, e) => {
  if (!t || typeof t != "string")
    return { domain: null, isDirectTraffic: !1 };
  if (t === "Direct")
    return { domain: null, isDirectTraffic: !0 };
  const s = e ? v(e) : null;
  if (s) {
    const r = v(t);
    if (r && N(r, s))
      return { domain: s, isDirectTraffic: !0 };
    if (N(t, s))
      return { domain: s, isDirectTraffic: !0 };
  }
  const a = B[t];
  return a ? { domain: a, isDirectTraffic: !1 } : /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t) ? { domain: t.replace(/^www\./, ""), isDirectTraffic: !1 } : { domain: null, isDirectTraffic: !1 };
};
function ot({
  data: t,
  mode: e,
  siteUrl: s,
  siteIcon: a,
  defaultSourceIconUrl: i
}) {
  if (!t)
    return [];
  const r = /* @__PURE__ */ new Map();
  let l = 0;
  if (t.forEach((c) => {
    const { domain: m, isDirectTraffic: O } = H(c.source, s), h = Number(c.visits || 0);
    if (O || !c.source || c.source === "")
      l += h;
    else {
      const u = String(c.source), k = m ? `https://www.faviconextractor.com/favicon/${m}?larger=true` : i, P = m ? `https://${m}` : void 0;
      if (r.has(u)) {
        const g = r.get(u);
        g.visits += h;
      } else {
        const g = {
          source: u,
          visits: h,
          isDirectTraffic: !1,
          iconSrc: k,
          displayName: u,
          linkUrl: P
        };
        r.set(u, g);
      }
    }
  }), l > 0) {
    const c = {
      source: "Direct",
      visits: l,
      isDirectTraffic: !0,
      iconSrc: a || i,
      displayName: "Direct",
      linkUrl: void 0
    };
    r.set("Direct", c);
  }
  return Array.from(r.values()).sort((c, m) => m.visits - c.visits);
}
const L = d(
  ({ className: t, orientation: e = "horizontal", decorative: s = !0, ...a }, i) => /* @__PURE__ */ o.jsx(
    A,
    {
      ref: i,
      className: p(
        "shrink-0 bg-border",
        e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      decorative: s,
      orientation: e,
      ...a
    }
  )
);
L.displayName = A.displayName;
const rt = R, it = _, K = M, E = d(({ className: t, ...e }, s) => /* @__PURE__ */ o.jsx(
  D,
  {
    className: p(
      "fixed inset-0 z-50 bg-black/10  data-[state=open]:animate-in duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: s
  }
));
E.displayName = D.displayName;
const X = C(
  "fixed z-50 gap-4 bg-background p-8 shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), q = d(({ side: t = "right", className: e, children: s, ...a }, i) => /* @__PURE__ */ o.jsx(K, { children: /* @__PURE__ */ o.jsxs("div", { className: j, children: [
  /* @__PURE__ */ o.jsx(E, {}),
  /* @__PURE__ */ o.jsxs(
    b,
    {
      ref: i,
      className: p(X({ side: t }), e),
      ...a,
      children: [
        /* @__PURE__ */ o.jsxs(W, { className: "fixed top-4 right-4 z-50 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ o.jsx(z, { className: "size-4" }),
          /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        s
      ]
    }
  )
] }) }));
q.displayName = b.displayName;
const J = ({
  className: t,
  ...e
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: p(
      "flex flex-col space-y-1 text-center sm:text-left",
      t
    ),
    ...e
  }
);
J.displayName = "SheetHeader";
const Q = d(({ className: t, ...e }, s) => /* @__PURE__ */ o.jsx(
  x,
  {
    ref: s,
    className: p("text-xl font-semibold text-foreground", t),
    ...e
  }
));
Q.displayName = x.displayName;
const V = d(({ className: t, ...e }, s) => /* @__PURE__ */ o.jsx(
  y,
  {
    ref: s,
    className: p("text-sm text-muted-foreground", t),
    ...e
  }
));
V.displayName = y.displayName;
const nt = ({ defaultSourceIconUrl: t, displayName: e, iconSrc: s }) => /* @__PURE__ */ o.jsx(o.Fragment, { children: e.trim().toLowerCase().endsWith("newsletter") ? /* @__PURE__ */ o.jsx(G, { "aria-label": "Newsletter", className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ o.jsx(
  "img",
  {
    alt: "",
    className: "size-4",
    src: s,
    onError: (a) => {
      a.currentTarget.src = t;
    }
  }
) }), n = {
  POSTS: "posts",
  PAGES: "pages",
  POSTS_AND_PAGES: "posts_and_pages",
  SOURCES: "sources"
}, ct = (t) => {
  switch (t) {
    case n.POSTS:
      return "Top posts";
    case n.PAGES:
      return "Top pages";
    case n.SOURCES:
      return "Top sources";
    default:
      return "Top content";
  }
}, dt = (t, e, s) => {
  switch (t) {
    case n.POSTS:
      return `Your highest viewed posts ${s(e)}`;
    case n.PAGES:
      return `Your highest viewed pages ${s(e)}`;
    case n.POSTS_AND_PAGES:
      return `Your highest viewed posts or pages ${s(e)}`;
    case n.SOURCES:
      return `How readers found your site ${s(e)}`;
    default:
      return `Your highest viewed posts or pages ${s(e)}`;
  }
}, lt = (t, e, s) => {
  switch (t) {
    case n.POSTS:
      return `Which posts drove the most growth ${s(e)}`;
    case n.PAGES:
      return `Which pages drove the most growth ${s(e)}`;
    case n.POSTS_AND_PAGES:
      return `Which posts or pages drove the most growth ${s(e)}`;
    case n.SOURCES:
      return `Which sources drove the most growth ${s(e)}`;
    default:
      return `Which posts drove the most growth ${s(e)}`;
  }
};
export {
  n as C,
  U as P,
  L as S,
  rt as a,
  it as b,
  q as c,
  J as d,
  at as e,
  Q as f,
  V as g,
  nt as h,
  ct as i,
  dt as j,
  H as k,
  lt as l,
  ot as p
};
//# sourceMappingURL=content-helpers-7pEeER2n.mjs.map
