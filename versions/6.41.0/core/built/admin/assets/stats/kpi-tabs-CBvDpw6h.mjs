import { f as c, j as a, n as G, o as q, r as f, a as m, q as W, B as y } from "./index-BaZyVSji.mjs";
import { bR as H, W as O, Y as x, a3 as U, bS as Y, bT as Z, Z as T, bU as C, a0 as J, a5 as Q, ap as X, j as tt, B as et, T as at, q as nt } from "./stats-B-gFnH1Q.mjs";
var h = "Tabs", [st] = J(h, [
  C
]), w = C(), [rt, N] = st(h), I = c(
  (t, e) => {
    const {
      __scopeTabs: s,
      value: n,
      onValueChange: r,
      defaultValue: i,
      orientation: o = "horizontal",
      dir: l,
      activationMode: g = "automatic",
      ...b
    } = t, d = H(l), [u, p] = O({
      prop: n,
      onChange: r,
      defaultProp: i ?? "",
      caller: h
    });
    return /* @__PURE__ */ a.jsx(
      rt,
      {
        scope: s,
        baseId: U(),
        value: u,
        onValueChange: p,
        orientation: o,
        dir: d,
        activationMode: g,
        children: /* @__PURE__ */ a.jsx(
          x.div,
          {
            dir: d,
            "data-orientation": o,
            ...b,
            ref: e
          }
        )
      }
    );
  }
);
I.displayName = h;
var V = "TabsList", _ = c(
  (t, e) => {
    const { __scopeTabs: s, loop: n = !0, ...r } = t, i = N(V, s), o = w(s);
    return /* @__PURE__ */ a.jsx(
      Y,
      {
        asChild: !0,
        ...o,
        orientation: i.orientation,
        dir: i.dir,
        loop: n,
        children: /* @__PURE__ */ a.jsx(
          x.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...r,
            ref: e
          }
        )
      }
    );
  }
);
_.displayName = V;
var k = "TabsTrigger", K = c(
  (t, e) => {
    const { __scopeTabs: s, value: n, disabled: r = !1, ...i } = t, o = N(k, s), l = w(s), g = D(o.baseId, n), b = P(o.baseId, n), d = n === o.value;
    return /* @__PURE__ */ a.jsx(
      Z,
      {
        asChild: !0,
        ...l,
        focusable: !r,
        active: d,
        children: /* @__PURE__ */ a.jsx(
          x.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": b,
            "data-state": d ? "active" : "inactive",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            id: g,
            ...i,
            ref: e,
            onMouseDown: T(t.onMouseDown, (u) => {
              !r && u.button === 0 && u.ctrlKey === !1 ? o.onValueChange(n) : u.preventDefault();
            }),
            onKeyDown: T(t.onKeyDown, (u) => {
              [" ", "Enter"].includes(u.key) && o.onValueChange(n);
            }),
            onFocus: T(t.onFocus, () => {
              const u = o.activationMode !== "manual";
              !d && !r && u && o.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
K.displayName = k;
var A = "TabsContent", M = c(
  (t, e) => {
    const { __scopeTabs: s, value: n, forceMount: r, children: i, ...o } = t, l = N(A, s), g = D(l.baseId, n), b = P(l.baseId, n), d = n === l.value, u = G(d);
    return q(() => {
      const p = requestAnimationFrame(() => u.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ a.jsx(Q, { present: r || d, children: ({ present: p }) => /* @__PURE__ */ a.jsx(
      x.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": g,
        hidden: !p,
        id: b,
        tabIndex: 0,
        ...o,
        ref: e,
        style: {
          ...t.style,
          animationDuration: u.current ? "0s" : void 0
        },
        children: p && i
      }
    ) });
  }
);
M.displayName = A;
function D(t, e) {
  return `${t}-trigger-${e}`;
}
function P(t, e) {
  return `${t}-content-${e}`;
}
var R = I, S = _, j = K, E = M;
const v = W("segmented"), F = c(({ variant: t = "segmented", ...e }, s) => /* @__PURE__ */ a.jsx(v.Provider, { value: t, children: /* @__PURE__ */ a.jsx(R, { ref: s, ...e }) }));
F.displayName = R.displayName;
const ot = y(
  "inline-flex items-center text-muted-foreground",
  {
    variants: {
      variant: {
        segmented: "h-(--control-height) rounded-lg bg-muted px-[3px]",
        "segmented-sm": "h-8 rounded-lg bg-muted px-[3px]",
        button: "gap-2",
        "button-sm": "gap-1",
        underline: "w-full gap-5 border-b border-border-default",
        navbar: "h-[52px] items-end gap-6",
        pill: "-ml-0.5 h-[30px] gap-px",
        // The `kpis` variant is consumed only by `features/kpi/kpi-tabs.tsx`.
        // Kept here so the cva variant set is in one place; not for direct use by app code.
        kpis: "border-b ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), L = c(({ className: t, ...e }, s) => {
  const n = f(v);
  return /* @__PURE__ */ a.jsx(
    S,
    {
      ref: s,
      className: m(ot({ variant: n, className: t })),
      ...e
    }
  );
});
L.displayName = S.displayName;
const $ = y(
  "inline-flex items-center justify-center px-3 py-1 whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        segmented: "h-7 rounded-md text-sm font-medium data-[state=active]:shadow-md",
        "segmented-sm": "h-[26px] rounded-md text-xs font-medium data-[state=active]:shadow-md",
        button: "h-(--control-height) gap-1.5 rounded-md py-2 text-sm font-normal hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium",
        "button-sm": "h-6 gap-1.5 rounded-md p-2 text-xs font-normal text-text-secondary hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium data-[state=active]:text-foreground",
        underline: 'relative h-9 px-0 text-md font-semibold text-text-secondary after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:after:opacity-10 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        navbar: 'relative h-[52px] px-px text-md font-semibold text-muted-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        pill: "relative h-[30px] rounded-md px-3 text-md font-medium text-text-secondary hover:text-foreground data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-semibold data-[state=active]:text-foreground",
        kpis: 'relative h-full! items-start! rounded-none border-border bg-transparent px-6 py-5 text-foreground ring-0 transition-all after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] first:rounded-tl-md last:rounded-tr-md hover:bg-accent/50 data-[state=active]:bg-transparent data-[state=active]:after:opacity-100 [&:not(:last-child)]:border-r [&[data-state=active]_[data-type="value"]]:text-foreground'
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), B = c(({ className: t, ...e }, s) => {
  const n = f(v);
  return /* @__PURE__ */ a.jsx(
    j,
    {
      ref: s,
      className: m($({ variant: n, className: t })),
      ...e
    }
  );
});
B.displayName = j.displayName;
const it = y(
  "ring-offset-background focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden",
  {
    variants: {
      variant: {
        segmented: "",
        "segmented-sm": "",
        button: "",
        "button-sm": "",
        underline: "",
        navbar: "",
        pill: "",
        kpis: "ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), z = c(({ className: t, ...e }, s) => {
  const n = f(v);
  return /* @__PURE__ */ a.jsx(
    E,
    {
      ref: s,
      className: m(it({ variant: n, className: t })),
      ...e
    }
  );
});
z.displayName = E.displayName;
const dt = c(({
  children: t,
  className: e,
  ...s
}, n) => {
  const r = f(v);
  return /* @__PURE__ */ a.jsxs("div", { className: "relative rounded-md hover:bg-muted", children: [
    /* @__PURE__ */ a.jsx(
      j,
      {
        ref: n,
        className: m($({ variant: r, className: e })),
        ...s,
        children: /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: t })
      }
    ),
    /* @__PURE__ */ a.jsx(
      X,
      {
        className: "absolute inset-0 size-full cursor-pointer",
        onClick: (i) => {
          i.preventDefault();
        }
      }
    )
  ] });
});
dt.displayName = "TabsDropdownTrigger";
const ct = c(({ ...t }, e) => /* @__PURE__ */ a.jsx(F, { ref: e, variant: "kpis", ...t }));
ct.displayName = "KpiTabs";
const lt = c((t, e) => /* @__PURE__ */ a.jsx(L, { ref: e, ...t }));
lt.displayName = "KpiTabsList";
const ut = c((t, e) => /* @__PURE__ */ a.jsx(z, { ref: e, ...t }));
ut.displayName = "KpiTabsContent";
const mt = ({ children: t, ...e }) => /* @__PURE__ */ a.jsx(B, { className: "h-auto", ...e, children: t }), vt = ({
  color: t,
  icon: e,
  label: s,
  value: n,
  diffDirection: r,
  diffValue: i,
  className: o,
  "data-testid": l
}) => {
  const g = e ? nt[e] : null, b = /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1.5 transition-all group-hover:text-foreground", "data-type": "value", children: [
    t && /* @__PURE__ */ a.jsx("div", { className: "ml-1 size-2 rounded-full opacity-50", style: { backgroundColor: t } }),
    g && /* @__PURE__ */ a.jsx(g, { size: 16, strokeWidth: 1.5 }),
    s
  ] }), d = r && r !== "hidden" ? /* @__PURE__ */ a.jsx(
    at,
    {
      className: "mt-0.5",
      "data-testid": l ? `${l}-diff` : void 0,
      direction: r,
      value: i ?? ""
    }
  ) : null;
  return /* @__PURE__ */ a.jsx(
    tt,
    {
      className: m("group", o),
      label: b,
      size: "lg",
      trailing: d,
      value: n,
      valueTestId: l
    }
  );
}, gt = c(
  ({ variant: t = "dropdown", className: e, ...s }, n) => /* @__PURE__ */ a.jsx(
    et,
    {
      ref: n,
      className: m(
        "h-auto w-full rounded-none border-x-0 border-t-0 focus-visible:ring-0 bg-transparent py-5",
        e
      ),
      variant: t,
      ...s
    }
  )
);
gt.displayName = "KpiDropdownButton";
export {
  mt as K,
  F as T,
  L as a,
  B as b,
  vt as c,
  gt as d
};
//# sourceMappingURL=kpi-tabs-CBvDpw6h.mjs.map
