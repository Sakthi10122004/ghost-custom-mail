import { a, b as r, c as i, d as c } from "./hooks-muBZfhoU.mjs";
const o = "PostsResponseType", m = a({
  dataType: o,
  path: "/posts/"
}), y = c({
  dataType: o,
  path: "/posts/",
  defaultNextPageParams: (t, e) => {
    if (t.meta?.pagination.next)
      return {
        ...e,
        page: t.meta.pagination.next.toString()
      };
  },
  returnData: (t) => {
    const { pages: e } = t, n = e.flatMap((p) => p.posts), s = e[e.length - 1].meta;
    return {
      posts: n,
      meta: s,
      isEnd: s ? s.pagination.pages === s.pagination.page : !0
    };
  }
}), l = i({
  dataType: o,
  path: (t) => `/posts/${t}/`
}), h = r({
  method: "DELETE",
  path: (t) => `/posts/${t}/`
}), u = "ConfigResponseType", f = a({
  dataType: u,
  path: "/config/"
}), g = "SettingsResponseType", T = a({
  dataType: g,
  path: "/settings/",
  defaultSearchParams: {
    group: "site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore,transistor"
  }
});
export {
  h as a,
  f as b,
  T as c,
  y as d,
  l as g,
  m as u
};
//# sourceMappingURL=settings-Cv9xgT7m.mjs.map
