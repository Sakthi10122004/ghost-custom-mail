import { p as v, j as e, R as d, q as X, c as G, B as Y, D as Z, m as ee, g as se, l as ae, L as M } from "./index-ccmRG8Rd.mjs";
import { M as te } from "./main-layout-CCbCHYCQ.mjs";
import { u as re, a as oe, L as le } from "./virtual-list-window-CxAo-dre.mjs";
import { B as h } from "./button-bsWyESEG.mjs";
import { T as ne, a as ie, b as T, c as N, d as ce, e as j } from "./table-Dy0zIRBD.mjs";
import { P as de } from "./pencil-B7SMHG5e.mjs";
import { I as ue, f as E, u as ge, R as pe, i as L } from "./skeleton-9GpF0jm6.mjs";
import { E as me } from "./empty-indicator-C_CRWWaH.mjs";
import { L as xe } from "./loading-indicator-DUlTXBD-.mjs";
import { u as I, P as y, b as fe, d as he } from "./check-BMQmbjGF.mjs";
import { L as P, P as u } from "./list-page-B7jM1dtq.mjs";
import { d as je } from "./hooks-muBZfhoU.mjs";
import { E as ve } from "./ellipsis-Cy0JvlLk.mjs";
import { P as be } from "./plus-Dg3HDbL-.mjs";
import { T as Ne } from "./tags-BNhEnaKU.mjs";
var A = "Toggle", R = v((s, a) => {
  const { pressed: r, defaultPressed: t, onPressedChange: o, ...l } = s, [n, i] = I({
    prop: r,
    onChange: o,
    defaultProp: t ?? !1,
    caller: A
  });
  return /* @__PURE__ */ e.jsx(
    y.button,
    {
      type: "button",
      "aria-pressed": n,
      "data-state": n ? "on" : "off",
      "data-disabled": s.disabled ? "" : void 0,
      ...l,
      ref: a,
      onClick: fe(s.onClick, () => {
        s.disabled || i(!n);
      })
    }
  );
});
R.displayName = A;
var $ = R, x = "ToggleGroup", [B] = he(x, [
  E
]), V = E(), _ = d.forwardRef((s, a) => {
  const { type: r, ...t } = s;
  if (r === "single") {
    const o = t;
    return /* @__PURE__ */ e.jsx(we, { ...o, ref: a });
  }
  if (r === "multiple") {
    const o = t;
    return /* @__PURE__ */ e.jsx(Pe, { ...o, ref: a });
  }
  throw new Error(`Missing prop \`type\` expected on \`${x}\``);
});
_.displayName = x;
var [D, F] = B(x), we = d.forwardRef((s, a) => {
  const {
    value: r,
    defaultValue: t,
    onValueChange: o = () => {
    },
    ...l
  } = s, [n, i] = I({
    prop: r,
    defaultProp: t ?? "",
    onChange: o,
    caller: x
  });
  return /* @__PURE__ */ e.jsx(
    D,
    {
      scope: s.__scopeToggleGroup,
      type: "single",
      value: d.useMemo(() => n ? [n] : [], [n]),
      onItemActivate: i,
      onItemDeactivate: d.useCallback(() => i(""), [i]),
      children: /* @__PURE__ */ e.jsx(H, { ...l, ref: a })
    }
  );
}), Pe = d.forwardRef((s, a) => {
  const {
    value: r,
    defaultValue: t,
    onValueChange: o = () => {
    },
    ...l
  } = s, [n, i] = I({
    prop: r,
    defaultProp: t ?? [],
    onChange: o,
    caller: x
  }), c = d.useCallback(
    (g) => i((p = []) => [...p, g]),
    [i]
  ), f = d.useCallback(
    (g) => i((p = []) => p.filter((b) => b !== g)),
    [i]
  );
  return /* @__PURE__ */ e.jsx(
    D,
    {
      scope: s.__scopeToggleGroup,
      type: "multiple",
      value: n,
      onItemActivate: c,
      onItemDeactivate: f,
      children: /* @__PURE__ */ e.jsx(H, { ...l, ref: a })
    }
  );
});
_.displayName = x;
var [Te, ye] = B(x), H = d.forwardRef(
  (s, a) => {
    const {
      __scopeToggleGroup: r,
      disabled: t = !1,
      rovingFocus: o = !0,
      orientation: l,
      dir: n,
      loop: i = !0,
      ...c
    } = s, f = V(r), g = ge(n), p = { role: "group", dir: g, ...c };
    return /* @__PURE__ */ e.jsx(Te, { scope: r, rovingFocus: o, disabled: t, children: o ? /* @__PURE__ */ e.jsx(
      pe,
      {
        asChild: !0,
        ...f,
        orientation: l,
        dir: g,
        loop: i,
        children: /* @__PURE__ */ e.jsx(y.div, { ...p, ref: a })
      }
    ) : /* @__PURE__ */ e.jsx(y.div, { ...p, ref: a }) });
  }
), w = "ToggleGroupItem", O = d.forwardRef(
  (s, a) => {
    const r = F(w, s.__scopeToggleGroup), t = ye(w, s.__scopeToggleGroup), o = V(s.__scopeToggleGroup), l = r.value.includes(s.value), n = t.disabled || s.disabled, i = { ...s, pressed: l, disabled: n }, c = d.useRef(null);
    return t.rovingFocus ? /* @__PURE__ */ e.jsx(
      ue,
      {
        asChild: !0,
        ...o,
        focusable: !n,
        active: l,
        ref: c,
        children: /* @__PURE__ */ e.jsx(S, { ...i, ref: a })
      }
    ) : /* @__PURE__ */ e.jsx(S, { ...i, ref: a });
  }
);
O.displayName = w;
var S = d.forwardRef(
  (s, a) => {
    const { __scopeToggleGroup: r, value: t, ...o } = s, l = F(w, r), n = { role: "radio", "aria-checked": s.pressed, "aria-pressed": void 0 }, i = l.type === "single" ? n : void 0;
    return /* @__PURE__ */ e.jsx(
      R,
      {
        ...i,
        ...o,
        ref: a,
        onPressedChange: (c) => {
          c ? l.onItemActivate(t) : l.onItemDeactivate(t);
        }
      }
    );
  }
), Q = _, q = O;
const U = X(
  "inline-flex items-center justify-center gap-2 rounded-xs text-sm font-medium text-text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
  {
    variants: {
      variant: {
        default: "bg-transparent"
      },
      size: {
        default: "h-[26px] min-w-[26px] px-2",
        button: "h-[32px] min-w-[32px] px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ce = v(({ className: s, variant: a, size: r, ...t }, o) => /* @__PURE__ */ e.jsx(
  $,
  {
    ref: o,
    className: G(U({ variant: a, size: r, className: s })),
    ...t
  }
));
Ce.displayName = $.displayName;
const W = Z({
  size: "default",
  variant: "default"
}), J = v(({ className: s, variant: a, size: r, children: t, ...o }, l) => /* @__PURE__ */ e.jsx(
  Q,
  {
    ref: l,
    className: G("inline-flex items-center justify-center gap-0.5 bg-muted p-0.5 rounded-md", s),
    ...o,
    children: /* @__PURE__ */ e.jsx(W.Provider, { value: { variant: a, size: r }, children: t })
  }
));
J.displayName = Q.displayName;
const C = v(({ className: s, children: a, variant: r, size: t, ...o }, l) => {
  const n = Y(W);
  return /* @__PURE__ */ e.jsx(
    q,
    {
      ref: l,
      className: G(
        U({
          variant: n.variant || r,
          size: n.size || t
        }),
        s
      ),
      ...o,
      children: a
    }
  );
});
C.displayName = q.displayName;
const z = ({ height: s }) => /* @__PURE__ */ e.jsx("tr", { "aria-hidden": "true", className: "flex lg:table-row", children: /* @__PURE__ */ e.jsx("td", { className: "flex lg:table-cell", style: { height: s } }) }), Ge = v(function(a, r) {
  return /* @__PURE__ */ e.jsx(
    T,
    {
      ref: r,
      ...a,
      "aria-hidden": "true",
      className: "relative flex flex-col lg:table-row",
      children: /* @__PURE__ */ e.jsx(j, { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function Ie({
  items: s,
  totalItems: a,
  hasNextPage: r,
  isFetchingNextPage: t,
  fetchNextPage: o
}) {
  const l = ee(null), { visibleItemCount: n, canLoadMore: i, loadMore: c } = re(a), { visibleItems: f, spaceBefore: g, spaceAfter: p } = oe({
    items: s,
    totalItems: n,
    hasNextPage: r,
    isFetchingNextPage: t,
    fetchNextPage: o,
    parentRef: l
  });
  return /* @__PURE__ */ e.jsxs("div", { ref: l, className: "overflow-hidden", children: [
    /* @__PURE__ */ e.jsxs(
      ne,
      {
        className: "flex table-fixed flex-col lg:table",
        "data-testid": "tags-list",
        children: [
          /* @__PURE__ */ e.jsx(ie, { className: "hidden lg:visible! lg:table-header-group!", children: /* @__PURE__ */ e.jsxs(T, { children: [
            /* @__PURE__ */ e.jsx(N, { className: "w-auto px-4", children: "Tag" }),
            /* @__PURE__ */ e.jsx(N, { className: "w-1/5 px-4", children: "Slug" }),
            /* @__PURE__ */ e.jsx(N, { className: "w-1/5 px-4", children: "No. of posts" }),
            /* @__PURE__ */ e.jsx(N, { className: "w-20 px-4" })
          ] }) }),
          /* @__PURE__ */ e.jsxs(ce, { className: "flex flex-col lg:table-row-group", children: [
            /* @__PURE__ */ e.jsx(z, { height: g }),
            f.map(({ key: b, virtualItem: K, item: m, props: k }) => K.index > s.length - 1 ? /* @__PURE__ */ e.jsx(Ge, { ...k }, b) : /* @__PURE__ */ e.jsxs(
              T,
              {
                ...k,
                className: "grid w-full grid-cols-[1fr_5rem] items-center gap-x-4 p-2 hover:bg-muted/50 md:grid-cols-[1fr_auto_5rem] lg:table-row lg:p-0 [&.group:hover_td]:bg-transparent",
                "data-testid": "tag-list-row",
                children: [
                  /* @__PURE__ */ e.jsxs(j, { className: "static col-start-1 col-end-1 row-start-1 row-end-1 flex min-w-0 flex-col p-0 md:relative lg:table-cell lg:w-1/2 lg:p-4 xl:w-3/5", children: [
                    /* @__PURE__ */ e.jsx(
                      "a",
                      {
                        className: "before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-[100vw]",
                        href: `#/tags/${m.slug}`,
                        children: /* @__PURE__ */ e.jsx("span", { className: "block truncate pb-1 text-lg font-medium", children: m.name })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "block truncate text-muted-foreground", children: m.description })
                  ] }),
                  /* @__PURE__ */ e.jsx(j, { className: "col-start-1 col-end-1 row-start-2 row-end-2 flex p-0 lg:table-cell lg:p-4", children: /* @__PURE__ */ e.jsx("span", { className: "block truncate", children: m.slug }) }),
                  /* @__PURE__ */ e.jsx(j, { className: "col-start-1 col-end-1 row-start-3 row-end-3 flex p-0 md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-3 lg:table-cell lg:p-4", children: m.count?.posts ? /* @__PURE__ */ e.jsx(
                    "a",
                    {
                      className: "relative z-10 -m-4 inline-block p-4 hover:underline",
                      href: `#/posts?tag=${m.slug}`,
                      children: `${se(m.count?.posts)}  ${m.count?.posts === 1 ? "post" : "posts"}`
                    }
                  ) : /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "0 posts" }) }),
                  /* @__PURE__ */ e.jsx(j, { className: "col-start-2 col-end-2 row-start-1 row-end-3 p-0 md:col-start-3 md:col-end-3 lg:table-cell lg:p-4", children: /* @__PURE__ */ e.jsx(
                    h,
                    {
                      "aria-hidden": "true",
                      className: "w-12",
                      size: "icon",
                      tabIndex: -1,
                      variant: "outline",
                      children: /* @__PURE__ */ e.jsx(de, {})
                    }
                  ) })
                ]
              },
              b
            )),
            /* @__PURE__ */ e.jsx(z, { height: p })
          ] })
        ]
      }
    ),
    i && /* @__PURE__ */ e.jsx(le, { isLoading: t, onClick: c })
  ] });
}
const Re = "TagsResponseType", _e = je({
  dataType: Re,
  path: "/tags/",
  defaultNextPageParams: (s, a) => s.meta?.pagination.next ? {
    ...a,
    page: (s.meta?.pagination.next || 1).toString()
  } : void 0,
  returnData: (s) => {
    const { pages: a } = s, r = a.flatMap((o) => o.tags), t = a[a.length - 1].meta;
    return {
      tags: r,
      meta: t,
      isEnd: t ? t.pagination.pages === t.pagination.page : !0
    };
  }
}), ke = ({
  filter: s,
  ...a
}) => {
  const r = Object.entries(s).map(([t, o]) => `${t}:${o}`).join(",");
  return _e({
    ...a,
    searchParams: {
      limit: "100",
      order: "name asc",
      include: "count.posts",
      filter: r,
      ...a.searchParams
    }
  });
}, We = () => {
  const [s, a] = ae(), r = s.get("type") ?? "public", {
    data: t,
    isError: o,
    isLoading: l,
    isFetchingNextPage: n,
    fetchNextPage: i,
    hasNextPage: c
  } = ke({
    filter: {
      visibility: r
    }
  });
  return /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsxs(P, { "data-testid": "tags-page", children: [
    /* @__PURE__ */ e.jsx(P.Header, { children: /* @__PURE__ */ e.jsxs(u, { blurredBackground: !1, sticky: !1, children: [
      /* @__PURE__ */ e.jsx(u.Left, { children: /* @__PURE__ */ e.jsx(u.Title, { children: "Tags" }) }),
      /* @__PURE__ */ e.jsxs(u.Actions, { children: [
        /* @__PURE__ */ e.jsxs(u.ActionGroup, { children: [
          /* @__PURE__ */ e.jsxs(J, { "data-testid": "tags-header-tabs", size: "button", type: "single", value: r, children: [
            /* @__PURE__ */ e.jsx(C, { "aria-label": "Public tags", value: "public", asChild: !0, children: /* @__PURE__ */ e.jsx(M, { to: "/tags", children: "Public tags" }) }),
            /* @__PURE__ */ e.jsx(C, { "aria-label": "Internal tags", value: "internal", asChild: !0, children: /* @__PURE__ */ e.jsx(M, { to: "/tags?type=internal", children: "Internal tags" }) })
          ] }),
          /* @__PURE__ */ e.jsxs(u.ActionGroup.MobileMenu, { children: [
            /* @__PURE__ */ e.jsx(u.ActionGroup.MobileMenuTrigger, { children: /* @__PURE__ */ e.jsx(h, { variant: "outline", children: /* @__PURE__ */ e.jsx(ve, { className: "size-4" }) }) }),
            /* @__PURE__ */ e.jsxs(u.ActionGroup.MobileMenuContent, { children: [
              /* @__PURE__ */ e.jsx(
                L,
                {
                  checked: r === "public",
                  onCheckedChange: () => a({}),
                  children: "Public tags"
                }
              ),
              /* @__PURE__ */ e.jsx(
                L,
                {
                  checked: r === "internal",
                  onCheckedChange: () => a({ type: "internal" }),
                  children: "Internal tags"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(u.ActionGroup, { children: /* @__PURE__ */ e.jsx(h, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { className: "font-bold", href: "#/tags/new", children: [
          /* @__PURE__ */ e.jsx(be, { className: "size-4" }),
          /* @__PURE__ */ e.jsx("span", { className: "hidden sm:inline", children: "New tag" })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(P.Body, { children: l ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ e.jsx(xe, { size: "lg" }) }) : o ? /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading tags" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(h, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : t?.tags.length ? /* @__PURE__ */ e.jsx(
      Ie,
      {
        fetchNextPage: i,
        hasNextPage: c,
        isFetchingNextPage: n,
        items: t?.tags ?? [],
        totalItems: t?.meta?.pagination?.total ?? 0
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ e.jsx(
      me,
      {
        actions: /* @__PURE__ */ e.jsx(h, { asChild: !0, children: /* @__PURE__ */ e.jsx("a", { href: "#/tags/new", children: "Create a new tag" }) }),
        title: "Start organizing your content",
        children: /* @__PURE__ */ e.jsx(Ne, {})
      }
    ) }) })
  ] }) });
};
export {
  We as default
};
//# sourceMappingURL=tags-snaQXtlw.mjs.map
