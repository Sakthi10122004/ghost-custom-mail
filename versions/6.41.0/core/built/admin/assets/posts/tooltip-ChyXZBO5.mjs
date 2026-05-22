import { P as G, a as te, u as oe, g as V, b as P, e as F, k as re, d as ne, D as se, o as ae, c as $ } from "./check-BMQmbjGF.mjs";
import { p as w, j as c, m as g, b, k as m, u as z, a as ie, S as le, c as ce } from "./index-ccmRG8Rd.mjs";
import { k as ue, A as de, l as U, n as pe, o as ve } from "./skeleton-9GpF0jm6.mjs";
var fe = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), he = "VisuallyHidden", Y = w(
  (e, o) => /* @__PURE__ */ c.jsx(
    G.span,
    {
      ...e,
      ref: o,
      style: { ...fe, ...e.style }
    }
  )
);
Y.displayName = he;
var xe = Y, [L] = ne("Tooltip", [
  U
]), O = U(), B = "TooltipProvider", ye = 700, N = "tooltip.open", [me, k] = L(B), q = (e) => {
  const {
    __scopeTooltip: o,
    delayDuration: t = ye,
    skipDelayDuration: r = 300,
    disableHoverableContent: n = !1,
    children: i
  } = e, a = g(!0), v = g(!1), s = g(0);
  return b(() => {
    const d = s.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    me,
    {
      scope: o,
      isOpenDelayedRef: a,
      delayDuration: t,
      onOpen: m(() => {
        window.clearTimeout(s.current), a.current = !1;
      }, []),
      onClose: m(() => {
        window.clearTimeout(s.current), s.current = window.setTimeout(
          () => a.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: v,
      onPointerInTransitChange: m((d) => {
        v.current = d;
      }, []),
      disableHoverableContent: n,
      children: i
    }
  );
};
q.displayName = B;
var j = "Tooltip", [Te, D] = L(j), W = (e) => {
  const {
    __scopeTooltip: o,
    children: t,
    open: r,
    defaultOpen: n,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: v
  } = e, s = k(j, e.__scopeTooltip), d = O(o), [l, p] = z(null), f = te(), u = g(0), h = a ?? s.disableHoverableContent, y = v ?? s.delayDuration, x = g(!1), [C, T] = oe({
    prop: r,
    defaultProp: n ?? !1,
    onChange: (H) => {
      H ? (s.onOpen(), document.dispatchEvent(new CustomEvent(N))) : s.onClose(), i?.(H);
    },
    caller: j
  }), _ = ie(() => C ? x.current ? "delayed-open" : "instant-open" : "closed", [C]), A = m(() => {
    window.clearTimeout(u.current), u.current = 0, x.current = !1, T(!0);
  }, [T]), R = m(() => {
    window.clearTimeout(u.current), u.current = 0, T(!1);
  }, [T]), M = m(() => {
    window.clearTimeout(u.current), u.current = window.setTimeout(() => {
      x.current = !0, T(!0), u.current = 0;
    }, y);
  }, [y, T]);
  return b(() => () => {
    u.current && (window.clearTimeout(u.current), u.current = 0);
  }, []), /* @__PURE__ */ c.jsx(ue, { ...d, children: /* @__PURE__ */ c.jsx(
    Te,
    {
      scope: o,
      contentId: f,
      open: C,
      stateAttribute: _,
      trigger: l,
      onTriggerChange: p,
      onTriggerEnter: m(() => {
        s.isOpenDelayedRef.current ? M() : A();
      }, [s.isOpenDelayedRef, M, A]),
      onTriggerLeave: m(() => {
        h ? R() : (window.clearTimeout(u.current), u.current = 0);
      }, [R, h]),
      onOpen: A,
      onClose: R,
      disableHoverableContent: h,
      children: t
    }
  ) });
};
W.displayName = j;
var S = "TooltipTrigger", X = w(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = D(S, t), i = k(S, t), a = O(t), v = g(null), s = V(o, v, n.onTriggerChange), d = g(!1), l = g(!1), p = m(() => d.current = !1, []);
    return b(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ c.jsx(de, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      G.button,
      {
        "aria-describedby": n.open ? n.contentId : void 0,
        "data-state": n.stateAttribute,
        ...r,
        ref: s,
        onPointerMove: P(e.onPointerMove, (f) => {
          f.pointerType !== "touch" && !l.current && !i.isPointerInTransitRef.current && (n.onTriggerEnter(), l.current = !0);
        }),
        onPointerLeave: P(e.onPointerLeave, () => {
          n.onTriggerLeave(), l.current = !1;
        }),
        onPointerDown: P(e.onPointerDown, () => {
          n.open && n.onClose(), d.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: P(e.onFocus, () => {
          d.current || n.onOpen();
        }),
        onBlur: P(e.onBlur, n.onClose),
        onClick: P(e.onClick, n.onClose)
      }
    ) });
  }
);
X.displayName = S;
var I = "TooltipPortal", [ge, Ce] = L(I, {
  forceMount: void 0
}), K = (e) => {
  const { __scopeTooltip: o, forceMount: t, children: r, container: n } = e, i = D(I, o);
  return /* @__PURE__ */ c.jsx(ge, { scope: o, forceMount: t, children: /* @__PURE__ */ c.jsx(F, { present: t || i.open, children: /* @__PURE__ */ c.jsx(re, { asChild: !0, container: n, children: r }) }) });
};
K.displayName = I;
var E = "TooltipContent", J = w(
  (e, o) => {
    const t = Ce(E, e.__scopeTooltip), { forceMount: r = t.forceMount, side: n = "top", ...i } = e, a = D(E, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(F, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ c.jsx(Q, { side: n, ...i, ref: o }) : /* @__PURE__ */ c.jsx(be, { side: n, ...i, ref: o }) });
  }
), be = w((e, o) => {
  const t = D(E, e.__scopeTooltip), r = k(E, e.__scopeTooltip), n = g(null), i = V(o, n), [a, v] = z(null), { trigger: s, onClose: d } = t, l = n.current, { onPointerInTransitChange: p } = r, f = m(() => {
    v(null), p(!1);
  }, [p]), u = m(
    (h, y) => {
      const x = h.currentTarget, C = { x: h.clientX, y: h.clientY }, T = Ae(C, x.getBoundingClientRect()), _ = Re(C, T), A = je(y.getBoundingClientRect()), R = Le([..._, ...A]);
      v(R), p(!0);
    },
    [p]
  );
  return b(() => () => f(), [f]), b(() => {
    if (s && l) {
      const h = (x) => u(x, l), y = (x) => u(x, s);
      return s.addEventListener("pointerleave", h), l.addEventListener("pointerleave", y), () => {
        s.removeEventListener("pointerleave", h), l.removeEventListener("pointerleave", y);
      };
    }
  }, [s, l, u, f]), b(() => {
    if (a) {
      const h = (y) => {
        const x = y.target, C = { x: y.clientX, y: y.clientY }, T = s?.contains(x) || l?.contains(x), _ = !De(C, a);
        T ? f() : _ && (f(), d());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [s, l, a, d, f]), /* @__PURE__ */ c.jsx(Q, { ...e, ref: i });
}), [we, Pe] = L(j, { isInside: !1 }), Ee = ae("TooltipContent"), Q = w(
  (e, o) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": n,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      ...v
    } = e, s = D(E, t), d = O(t), { onClose: l } = s;
    return b(() => (document.addEventListener(N, l), () => document.removeEventListener(N, l)), [l]), b(() => {
      if (s.trigger) {
        const p = (f) => {
          f.target?.contains(s.trigger) && l();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [s.trigger, l]), /* @__PURE__ */ c.jsx(
      se,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: l,
        children: /* @__PURE__ */ c.jsxs(
          pe,
          {
            "data-state": s.stateAttribute,
            ...d,
            ...v,
            ref: o,
            style: {
              ...v.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ c.jsx(Ee, { children: r }),
              /* @__PURE__ */ c.jsx(we, { scope: t, isInside: !0, children: /* @__PURE__ */ c.jsx(xe, { id: s.contentId, role: "tooltip", children: n || r }) })
            ]
          }
        )
      }
    );
  }
);
J.displayName = E;
var Z = "TooltipArrow", _e = w(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = O(t);
    return Pe(
      Z,
      t
    ).isInside ? null : /* @__PURE__ */ c.jsx(ve, { ...n, ...r, ref: o });
  }
);
_e.displayName = Z;
function Ae(e, o) {
  const t = Math.abs(o.top - e.y), r = Math.abs(o.bottom - e.y), n = Math.abs(o.right - e.x), i = Math.abs(o.left - e.x);
  switch (Math.min(t, r, n, i)) {
    case i:
      return "left";
    case n:
      return "right";
    case t:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Re(e, o, t = 5) {
  const r = [];
  switch (o) {
    case "top":
      r.push(
        { x: e.x - t, y: e.y + t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x + t, y: e.y - t }
      );
      break;
    case "left":
      r.push(
        { x: e.x + t, y: e.y - t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "right":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x - t, y: e.y + t }
      );
      break;
  }
  return r;
}
function je(e) {
  const { top: o, right: t, bottom: r, left: n } = e;
  return [
    { x: n, y: o },
    { x: t, y: o },
    { x: t, y: r },
    { x: n, y: r }
  ];
}
function De(e, o) {
  const { x: t, y: r } = e;
  let n = !1;
  for (let i = 0, a = o.length - 1; i < o.length; a = i++) {
    const v = o[i], s = o[a], d = v.x, l = v.y, p = s.x, f = s.y;
    l > r != f > r && t < (p - d) * (r - l) / (f - l) + d && (n = !n);
  }
  return n;
}
function Le(e) {
  const o = e.slice();
  return o.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), Oe(o);
}
function Oe(e) {
  if (e.length <= 1) return e.slice();
  const o = [];
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (; o.length >= 2; ) {
      const i = o[o.length - 1], a = o[o.length - 2];
      if ((i.x - a.x) * (n.y - a.y) >= (i.y - a.y) * (n.x - a.x)) o.pop();
      else break;
    }
    o.push(n);
  }
  o.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], a = t[t.length - 2];
      if ((i.x - a.x) * (n.y - a.y) >= (i.y - a.y) * (n.x - a.x)) t.pop();
      else break;
    }
    t.push(n);
  }
  return t.pop(), o.length === 1 && t.length === 1 && o[0].x === t[0].x && o[0].y === t[0].y ? o : o.concat(t);
}
var Ne = q, Se = W, ke = X, Ie = K, ee = J;
const Me = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ze = $("chevron-up", Me);
const He = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Ue = $("circle-alert", He), Ye = Ne, Be = Se, qe = ke, Ge = w(({ className: e, sideOffset: o = 4, ...t }, r) => /* @__PURE__ */ c.jsx(Ie, { children: /* @__PURE__ */ c.jsx("div", { className: le, children: /* @__PURE__ */ c.jsx(
  ee,
  {
    ref: r,
    className: ce(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: o,
    ...t
  }
) }) }));
Ge.displayName = ee.displayName;
export {
  ze as C,
  Ye as T,
  fe as V,
  Ue as a,
  Be as b,
  qe as c,
  Ge as d
};
//# sourceMappingURL=tooltip-ChyXZBO5.mjs.map
