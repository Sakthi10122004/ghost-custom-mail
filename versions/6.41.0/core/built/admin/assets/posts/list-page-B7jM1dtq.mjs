import { R as c, j as t, c as o } from "./index-ccmRG8Rd.mjs";
import { D as C, d as N, c as A } from "./skeleton-9GpF0jm6.mjs";
import { T as h, a as E } from "./heading-DxkKnY_o.mjs";
const y = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-5",
  xl: "gap-6",
  "2xl": "gap-8"
}, w = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
}, P = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, d = c.forwardRef(
  function({
    as: a = "div",
    className: n,
    gap: r = "md",
    align: i = "center",
    justify: s = "start",
    wrap: u = !1,
    ...p
  }, f) {
    const m = a;
    return /* @__PURE__ */ t.jsx(
      m,
      {
        ref: f,
        className: o(
          "flex flex-row",
          u ? "flex-wrap" : "flex-nowrap",
          y[r],
          w[i],
          P[s],
          n
        ),
        ...p
      }
    );
  }
);
d.displayName = "Inline";
const g = c.forwardRef(
  function({
    className: a,
    gap: n = "md",
    align: r = "stretch",
    justify: i = "start",
    ...s
  }, u) {
    return /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: u,
        className: o(
          "flex flex-col",
          y[n],
          w[r],
          P[i],
          a
        ),
        ...s
      }
    );
  }
);
g.displayName = "Stack";
function H({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    d,
    {
      align: "center",
      className: o("text-sm text-muted-foreground pt-1", e),
      "data-page-header": "breadcrumb",
      gap: "sm",
      children: a
    }
  );
}
function S({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    h,
    {
      as: "span",
      className: o("ml-2 lg:ml-3 text-[1.9rem] sidebar:text-[2.2rem] tabular-nums", e),
      "data-page-header": "count",
      tone: "secondary",
      weight: "regular",
      children: a
    }
  );
}
function M({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    h,
    {
      as: "p",
      className: e,
      "data-page-header": "description",
      size: "sm",
      tone: "secondary",
      children: a
    }
  );
}
function k({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    h,
    {
      as: "p",
      className: o("mt-0.5", e),
      "data-page-header": "meta",
      size: "sm",
      tone: "secondary",
      children: a
    }
  );
}
function L({ className: e, children: a }) {
  const n = [], r = [];
  c.Children.forEach(a, (s) => {
    if (!c.isValidElement(s)) {
      n.push(s);
      return;
    }
    switch (s.type) {
      case M:
      case k:
        r.push(s);
        break;
      default:
        n.push(s);
    }
  });
  const i = /* @__PURE__ */ t.jsx(
    E,
    {
      className: o(
        "text-2xl leading-[1.2em] sidebar:text-[2.5rem] whitespace-nowrap",
        e
      ),
      "data-page-header": "title",
      children: n
    }
  );
  return r.length > 0 ? /* @__PURE__ */ t.jsxs(g, { "data-page-header": "title-body", gap: "none", children: [
    i,
    r
  ] }) : i;
}
function T({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    g,
    {
      className: o("min-w-0 h-full min-h-(--control-height)", e),
      "data-page-header": "left",
      gap: "xs",
      justify: "center",
      children: a
    }
  );
}
function x({ children: e }) {
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: e });
}
function b({ children: e }) {
  return /* @__PURE__ */ t.jsx(C, { children: e });
}
function v({ children: e, ...a }) {
  return /* @__PURE__ */ t.jsx(A, { asChild: !0, ...a, children: e });
}
function G({ children: e, ...a }) {
  return /* @__PURE__ */ t.jsx(N, { align: "end", sideOffset: 8, ...a, children: e });
}
const I = 640, j = (e) => typeof window > "u" ? !1 : window.innerWidth < e, B = (e) => {
  const [a, n] = c.useState(() => j(e));
  return c.useEffect(() => {
    const r = () => {
      n(j(e));
    };
    return r(), window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, [e]), a;
}, _ = Object.assign(
  function({ className: a, children: n, mobileMenuBreakpoint: r = I }) {
    const i = c.Children.toArray(n), s = [];
    let u = null, p = null;
    const f = B(r);
    return i.forEach((m) => {
      if (!c.isValidElement(m)) {
        s.push(m);
        return;
      }
      const l = m;
      if (l.type === b) {
        u = l;
        return;
      }
      if (l.type === x) {
        p = l.props.children ?? null, s.push(l.props.children ?? null);
        return;
      }
      s.push(l);
    }), u ? f ? /* @__PURE__ */ t.jsx(
      d,
      {
        align: "center",
        className: a,
        "data-page-header": "action-group",
        gap: "sm",
        justify: "end",
        children: /* @__PURE__ */ t.jsxs(
          d,
          {
            align: "center",
            className: "ml-auto",
            "data-page-header": "action-group-mobile",
            gap: "sm",
            children: [
              u,
              p && /* @__PURE__ */ t.jsx("div", { "data-page-header": "action-group-mobile-primary", children: p })
            ]
          }
        )
      }
    ) : /* @__PURE__ */ t.jsx(
      d,
      {
        align: "center",
        className: a,
        "data-page-header": "action-group",
        gap: "sm",
        justify: "end",
        children: /* @__PURE__ */ t.jsx(
          d,
          {
            align: "center",
            "data-page-header": "action-group-desktop",
            gap: "sm",
            justify: "end",
            children: s
          }
        )
      }
    ) : /* @__PURE__ */ t.jsx(
      d,
      {
        align: "center",
        className: a,
        "data-page-header": "action-group",
        gap: "sm",
        justify: "end",
        children: n
      }
    );
  },
  {
    Primary: x,
    MobileMenu: b,
    MobileMenuTrigger: v,
    MobileMenuContent: G
  }
);
function z({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    d,
    {
      align: "center",
      className: o("shrink-0 min-h-(--control-height)", e),
      "data-page-header": "actions",
      gap: "lg",
      children: a
    }
  );
}
const V = Object.assign(
  function({ className: a, children: n, sticky: r = !0, blurredBackground: i = !0 }) {
    return /* @__PURE__ */ t.jsx(
      "header",
      {
        className: o(
          "flex flex-col",
          r && "sticky top-0 z-50",
          i && "bg-gradient-to-b from-background via-background/70 to-background/70 backdrop-blur-md dark:bg-black",
          a
        ),
        "data-page-header": "page-header",
        children: /* @__PURE__ */ t.jsx(
          d,
          {
            align: "start",
            className: "w-full",
            "data-page-header": "main",
            gap: "lg",
            justify: "between",
            children: n
          }
        )
      }
    );
  },
  {
    Left: T,
    Breadcrumb: H,
    Title: L,
    Count: S,
    Description: M,
    Meta: k,
    Actions: z,
    ActionGroup: _
  }
);
function D({ className: e, children: a, ...n }) {
  return /* @__PURE__ */ t.jsx(
    g,
    {
      className: o(
        "-mx-4 lg:-mx-8 px-4 lg:px-8",
        "sticky top-0 z-50",
        "bg-gradient-to-b from-background via-background/70 to-background/70 backdrop-blur-md dark:bg-black",
        "py-6",
        e
      ),
      "data-list-page": "header",
      gap: "lg",
      ...n,
      children: a
    }
  );
}
function O({ className: e, children: a, ...n }) {
  return /* @__PURE__ */ t.jsx(
    g,
    {
      className: o("grow min-h-0 min-w-0 pb-4 lg:pb-8", e),
      "data-list-page": "body",
      gap: "none",
      ...n,
      children: a
    }
  );
}
const J = Object.assign(
  function({ className: a, children: n, ...r }) {
    return /* @__PURE__ */ t.jsx(
      g,
      {
        className: o("grow h-full min-h-0 px-4 lg:px-8", a),
        "data-list-page": "list-page",
        gap: "none",
        ...r,
        children: n
      }
    );
  },
  {
    Header: D,
    Body: O
  }
);
export {
  d as I,
  J as L,
  V as P
};
//# sourceMappingURL=list-page-B7jM1dtq.mjs.map
