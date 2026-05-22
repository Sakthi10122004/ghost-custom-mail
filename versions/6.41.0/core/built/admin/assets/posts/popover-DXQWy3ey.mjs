import { m as g, a as G, p as v, j as a, u as E, k as x, b as A, S as K, c as U } from "./index-ccmRG8Rd.mjs";
import { g as j, P as b, b as m, u as V, a as W, e as N, k as Z, d as q, l as B, R as J, n as Q, m as X, F as Y, D as ee } from "./check-BMQmbjGF.mjs";
import { A as y, k as oe, l as S, n as te, o as re } from "./skeleton-9GpF0jm6.mjs";
function Ae(e) {
  const o = g({ value: e, previous: e });
  return G(() => (o.current.value !== e && (o.current.previous = o.current.value, o.current.value = e), o.current.previous), [e]);
}
var O = "Popover", [F] = q(O, [
  S
]), C = S(), [ne, f] = F(O), w = (e) => {
  const {
    __scopePopover: o,
    children: n,
    open: s,
    defaultOpen: t,
    onOpenChange: r,
    modal: c = !1
  } = e, i = C(o), d = g(null), [u, P] = E(!1), [l, p] = V({
    prop: s,
    defaultProp: t ?? !1,
    onChange: r,
    caller: O
  });
  return /* @__PURE__ */ a.jsx(oe, { ...i, children: /* @__PURE__ */ a.jsx(
    ne,
    {
      scope: o,
      contentId: W(),
      triggerRef: d,
      open: l,
      onOpenChange: p,
      onOpenToggle: x(() => p((R) => !R), [p]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: x(() => P(!0), []),
      onCustomAnchorRemove: x(() => P(!1), []),
      modal: c,
      children: n
    }
  ) });
};
w.displayName = O;
var D = "PopoverAnchor", se = v(
  (e, o) => {
    const { __scopePopover: n, ...s } = e, t = f(D, n), r = C(n), { onCustomAnchorAdd: c, onCustomAnchorRemove: i } = t;
    return A(() => (c(), () => i()), [c, i]), /* @__PURE__ */ a.jsx(y, { ...r, ...s, ref: o });
  }
);
se.displayName = D;
var k = "PopoverTrigger", M = v(
  (e, o) => {
    const { __scopePopover: n, ...s } = e, t = f(k, n), r = C(n), c = j(o, t.triggerRef), i = /* @__PURE__ */ a.jsx(
      b.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": t.open,
        "aria-controls": t.contentId,
        "data-state": H(t.open),
        ...s,
        ref: c,
        onClick: m(e.onClick, t.onOpenToggle)
      }
    );
    return t.hasCustomAnchor ? i : /* @__PURE__ */ a.jsx(y, { asChild: !0, ...r, children: i });
  }
);
M.displayName = k;
var _ = "PopoverPortal", [ae, ce] = F(_, {
  forceMount: void 0
}), I = (e) => {
  const { __scopePopover: o, forceMount: n, children: s, container: t } = e, r = f(_, o);
  return /* @__PURE__ */ a.jsx(ae, { scope: o, forceMount: n, children: /* @__PURE__ */ a.jsx(N, { present: n || r.open, children: /* @__PURE__ */ a.jsx(Z, { asChild: !0, container: t, children: s }) }) });
};
I.displayName = _;
var h = "PopoverContent", T = v(
  (e, o) => {
    const n = ce(h, e.__scopePopover), { forceMount: s = n.forceMount, ...t } = e, r = f(h, e.__scopePopover);
    return /* @__PURE__ */ a.jsx(N, { present: s || r.open, children: r.modal ? /* @__PURE__ */ a.jsx(pe, { ...t, ref: o }) : /* @__PURE__ */ a.jsx(ue, { ...t, ref: o }) });
  }
);
T.displayName = h;
var ie = Q("PopoverContent.RemoveScroll"), pe = v(
  (e, o) => {
    const n = f(h, e.__scopePopover), s = g(null), t = j(o, s), r = g(!1);
    return A(() => {
      const c = s.current;
      if (c) return B(c);
    }, []), /* @__PURE__ */ a.jsx(J, { as: ie, allowPinchZoom: !0, children: /* @__PURE__ */ a.jsx(
      L,
      {
        ...e,
        ref: t,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: m(e.onCloseAutoFocus, (c) => {
          c.preventDefault(), r.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: m(
          e.onPointerDownOutside,
          (c) => {
            const i = c.detail.originalEvent, d = i.button === 0 && i.ctrlKey === !0, u = i.button === 2 || d;
            r.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: m(
          e.onFocusOutside,
          (c) => c.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), ue = v(
  (e, o) => {
    const n = f(h, e.__scopePopover), s = g(!1), t = g(!1);
    return /* @__PURE__ */ a.jsx(
      L,
      {
        ...e,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (r) => {
          e.onCloseAutoFocus?.(r), r.defaultPrevented || (s.current || n.triggerRef.current?.focus(), r.preventDefault()), s.current = !1, t.current = !1;
        },
        onInteractOutside: (r) => {
          e.onInteractOutside?.(r), r.defaultPrevented || (s.current = !0, r.detail.originalEvent.type === "pointerdown" && (t.current = !0));
          const c = r.target;
          n.triggerRef.current?.contains(c) && r.preventDefault(), r.detail.originalEvent.type === "focusin" && t.current && r.preventDefault();
        }
      }
    );
  }
), L = v(
  (e, o) => {
    const {
      __scopePopover: n,
      trapFocus: s,
      onOpenAutoFocus: t,
      onCloseAutoFocus: r,
      disableOutsidePointerEvents: c,
      onEscapeKeyDown: i,
      onPointerDownOutside: d,
      onFocusOutside: u,
      onInteractOutside: P,
      ...l
    } = e, p = f(h, n), R = C(n);
    return X(), /* @__PURE__ */ a.jsx(
      Y,
      {
        asChild: !0,
        loop: !0,
        trapped: s,
        onMountAutoFocus: t,
        onUnmountAutoFocus: r,
        children: /* @__PURE__ */ a.jsx(
          ee,
          {
            asChild: !0,
            disableOutsidePointerEvents: c,
            onInteractOutside: P,
            onEscapeKeyDown: i,
            onPointerDownOutside: d,
            onFocusOutside: u,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ a.jsx(
              te,
              {
                "data-state": H(p.open),
                role: "dialog",
                id: p.contentId,
                ...R,
                ...l,
                ref: o,
                style: {
                  ...l.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), $ = "PopoverClose", le = v(
  (e, o) => {
    const { __scopePopover: n, ...s } = e, t = f($, n);
    return /* @__PURE__ */ a.jsx(
      b.button,
      {
        type: "button",
        ...s,
        ref: o,
        onClick: m(e.onClick, () => t.onOpenChange(!1))
      }
    );
  }
);
le.displayName = $;
var de = "PopoverArrow", ve = v(
  (e, o) => {
    const { __scopePopover: n, ...s } = e, t = C(n);
    return /* @__PURE__ */ a.jsx(re, { ...t, ...s, ref: o });
  }
);
ve.displayName = de;
function H(e) {
  return e ? "open" : "closed";
}
var fe = w, Pe = M, ge = I, z = T;
const Oe = ({
  open: e,
  defaultOpen: o,
  onOpenChange: n,
  children: s,
  ...t
}) => {
  const r = e !== void 0, [c, i] = E(o ?? !1), d = r ? e : c, u = x((l) => {
    r || i(l), n?.(l);
  }, [r, n]), P = g(u);
  return A(() => {
    P.current = u;
  }, [u]), A(() => {
    if (!d)
      return;
    const l = (p) => {
      p.key === "Escape" && (p.preventDefault(), p.stopPropagation(), P.current(!1));
    };
    return document.addEventListener("keydown", l, { capture: !0 }), () => document.removeEventListener("keydown", l, { capture: !0 });
  }, [d]), /* @__PURE__ */ a.jsx(
    fe,
    {
      ...t,
      open: d,
      onOpenChange: u,
      children: s
    }
  );
}, Re = Pe, he = v(({ className: e, align: o = "center", sideOffset: n = 4, ...s }, t) => /* @__PURE__ */ a.jsx(ge, { children: /* @__PURE__ */ a.jsx("div", { className: K, children: /* @__PURE__ */ a.jsx(
  z,
  {
    ref: t,
    align: o,
    className: U(
      "z-50 rounded-md bg-surface-overlay p-5 text-popover-foreground shadow-md border outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
      e
    ),
    sideOffset: n,
    ...s
  }
) }) }));
he.displayName = z.displayName;
export {
  Oe as P,
  Re as a,
  he as b,
  Ae as u
};
//# sourceMappingURL=popover-DXQWy3ey.mjs.map
