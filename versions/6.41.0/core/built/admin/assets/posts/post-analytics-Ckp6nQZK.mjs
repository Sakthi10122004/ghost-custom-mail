import { j as i, u as g, a as M, b, R as r, O as j } from "./index-ccmRG8Rd.mjs";
import { M as C } from "./main-layout-CCbCHYCQ.mjs";
import { P as E } from "./post-share-modal-Bu4lqyjU.mjs";
import { u as y } from "./settings-Cv9xgT7m.mjs";
import { u as _ } from "./post-analytics-context-D4HEA79Q.mjs";
const L = ({ children: a }) => /* @__PURE__ */ i.jsx(C, { children: /* @__PURE__ */ i.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ i.jsx("div", { className: "flex h-full flex-col px-8", children: a }) }) }), O = () => {
  const [a, l] = g(!1), [c, m] = g(null), [n, d] = g(null), { site: h } = _(), { data: P } = y({
    searchParams: c ? {
      filter: `id:${c.id}`,
      include: "authors,newsletter,email"
    } : {},
    enabled: !!c
  }), { data: f } = y({
    searchParams: {
      filter: "status:[published,sent]",
      limit: "1",
      fields: "id"
    },
    enabled: !!c
  }), e = P?.posts?.[0], w = (s) => `${s.toLocaleString()} subscriber${s !== 1 ? "s" : ""}`, S = (s) => new Date(s).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }), x = (s) => s?.map((o) => o.name).join(", ") || "", T = (s, o) => s.length <= o ? s : s.substring(0, o).trim() + "…", D = M(() => {
    if (!e)
      return null;
    const s = !!n, o = () => {
      const t = [];
      if (e.email_only ? t.push("Your email was sent to") : e.email?.email_count ? t.push("Your post was published on your site and sent to") : t.push("Your post was published on your site"), e.email?.email_count) {
        const p = w(e.email.email_count);
        t.push(" "), t.push(r.createElement("strong", { key: "subscriber-count" }, p)), e.newsletter?.name && (t.push(" of "), t.push(r.createElement("strong", { key: "newsletter-name" }, e.newsletter.name))), t.push(",");
      }
      if (e.published_at) {
        const p = new Date(e.published_at);
        p.toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? (t.push(" "), t.push(r.createElement("strong", { key: "today" }, "today"))) : (t.push(" on "), t.push(r.createElement("strong", { key: "date" }, p.toLocaleDateString("en-US", { month: "long", day: "numeric" })))), t.push(" at "), t.push(r.createElement("strong", { key: "time" }, S(e.published_at)));
      }
      return t.push("."), r.createElement("span", {}, ...t);
    }, u = () => {
      l(!1), m(null), d(null);
    };
    return {
      open: a,
      onOpenChange: (t) => {
        t || u();
      },
      emailOnly: e.email_only,
      postURL: e.url || "",
      primaryTitle: "Boom! It's out there.",
      secondaryTitle: s && n ? `That's ${n.toLocaleString()} post${n !== 1 ? "s" : ""} published.` : "Spread the word!",
      description: o(),
      featureImageURL: e.feature_image || "",
      postTitle: e.title || "",
      postExcerpt: T(e.excerpt || "", 100),
      faviconURL: h?.icon || "",
      siteTitle: h?.title || "",
      author: x(e.authors),
      onClose: u
    };
  }, [e, a, n, h?.title]);
  return b(() => {
    const s = () => {
      try {
        const u = localStorage.getItem("ghost-last-published-post");
        if (u) {
          const t = JSON.parse(u);
          m(t), l(!0), localStorage.removeItem("ghost-last-published-post");
        }
      } catch {
      }
    };
    s();
    const o = setTimeout(s, 100);
    return () => clearTimeout(o);
  }, []), b(() => {
    f?.meta?.pagination?.total && d(f.meta.pagination.total);
  }, [f]), {
    isModalOpen: a,
    post: e,
    postCount: n,
    showPostCount: !!n,
    closeModal: () => {
      l(!1), m(null), d(null);
    },
    modalProps: D
  };
}, N = () => {
  const { isModalOpen: a, modalProps: l } = O();
  return /* @__PURE__ */ i.jsxs(L, { children: [
    /* @__PURE__ */ i.jsx(j, {}),
    a && l && /* @__PURE__ */ i.jsx(E, { ...l })
  ] });
};
export {
  N as default
};
//# sourceMappingURL=post-analytics-Ckp6nQZK.mjs.map
