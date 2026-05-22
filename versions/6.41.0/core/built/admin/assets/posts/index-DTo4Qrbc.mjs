import { c as V, u as q, a as _, g as h, P as D, b as f, e as y, k as K, d as U, l as X, R as Y, m as Z, F as z, D as J, n as Q, p as ee } from "./check-BMQmbjGF.mjs";
import { m as g, j as s, k as te, p as u, y as oe, b as E } from "./index-ccmRG8Rd.mjs";
const ne = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], De = V("x", ne);
var m = "Dialog", [R, ve] = U(m), [re, l] = R(m), I = (e) => {
  const {
    __scopeDialog: o,
    children: r,
    open: a,
    defaultOpen: n,
    onOpenChange: t,
    modal: c = !0
  } = e, i = g(null), p = g(null), [x, C] = q({
    prop: a,
    defaultProp: n ?? !1,
    onChange: t,
    caller: m
  });
  return /* @__PURE__ */ s.jsx(
    re,
    {
      scope: o,
      triggerRef: i,
      contentRef: p,
      contentId: _(),
      titleId: _(),
      descriptionId: _(),
      open: x,
      onOpenChange: C,
      onOpenToggle: te(() => C((H) => !H), [C]),
      modal: c,
      children: r
    }
  );
};
I.displayName = m;
var b = "DialogTrigger", A = u(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = l(b, r), t = h(o, n.triggerRef);
    return /* @__PURE__ */ s.jsx(
      D.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": n.open,
        "aria-controls": n.contentId,
        "data-state": O(n.open),
        ...a,
        ref: t,
        onClick: f(e.onClick, n.onOpenToggle)
      }
    );
  }
);
A.displayName = b;
var N = "DialogPortal", [ae, T] = R(N, {
  forceMount: void 0
}), j = (e) => {
  const { __scopeDialog: o, forceMount: r, children: a, container: n } = e, t = l(N, o);
  return /* @__PURE__ */ s.jsx(ae, { scope: o, forceMount: r, children: oe.map(a, (c) => /* @__PURE__ */ s.jsx(y, { present: r || t.open, children: /* @__PURE__ */ s.jsx(K, { asChild: !0, container: n, children: c }) })) });
};
j.displayName = N;
var v = "DialogOverlay", M = u(
  (e, o) => {
    const r = T(v, e.__scopeDialog), { forceMount: a = r.forceMount, ...n } = e, t = l(v, e.__scopeDialog);
    return t.modal ? /* @__PURE__ */ s.jsx(y, { present: a || t.open, children: /* @__PURE__ */ s.jsx(ie, { ...n, ref: o }) }) : null;
  }
);
M.displayName = v;
var se = Q("DialogOverlay.RemoveScroll"), ie = u(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = l(v, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s.jsx(Y, { as: se, allowPinchZoom: !0, shards: [n.contentRef], children: /* @__PURE__ */ s.jsx(
        D.div,
        {
          "data-state": O(n.open),
          ...a,
          ref: o,
          style: { pointerEvents: "auto", ...a.style }
        }
      ) })
    );
  }
), d = "DialogContent", F = u(
  (e, o) => {
    const r = T(d, e.__scopeDialog), { forceMount: a = r.forceMount, ...n } = e, t = l(d, e.__scopeDialog);
    return /* @__PURE__ */ s.jsx(y, { present: a || t.open, children: t.modal ? /* @__PURE__ */ s.jsx(ce, { ...n, ref: o }) : /* @__PURE__ */ s.jsx(le, { ...n, ref: o }) });
  }
);
F.displayName = d;
var ce = u(
  (e, o) => {
    const r = l(d, e.__scopeDialog), a = g(null), n = h(o, r.contentRef, a);
    return E(() => {
      const t = a.current;
      if (t) return X(t);
    }, []), /* @__PURE__ */ s.jsx(
      S,
      {
        ...e,
        ref: n,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: f(e.onCloseAutoFocus, (t) => {
          t.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: f(e.onPointerDownOutside, (t) => {
          const c = t.detail.originalEvent, i = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || i) && t.preventDefault();
        }),
        onFocusOutside: f(
          e.onFocusOutside,
          (t) => t.preventDefault()
        )
      }
    );
  }
), le = u(
  (e, o) => {
    const r = l(d, e.__scopeDialog), a = g(!1), n = g(!1);
    return /* @__PURE__ */ s.jsx(
      S,
      {
        ...e,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          e.onCloseAutoFocus?.(t), t.defaultPrevented || (a.current || r.triggerRef.current?.focus(), t.preventDefault()), a.current = !1, n.current = !1;
        },
        onInteractOutside: (t) => {
          e.onInteractOutside?.(t), t.defaultPrevented || (a.current = !0, t.detail.originalEvent.type === "pointerdown" && (n.current = !0));
          const c = t.target;
          r.triggerRef.current?.contains(c) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && n.current && t.preventDefault();
        }
      }
    );
  }
), S = u(
  (e, o) => {
    const { __scopeDialog: r, trapFocus: a, onOpenAutoFocus: n, onCloseAutoFocus: t, ...c } = e, i = l(d, r), p = g(null), x = h(o, p);
    return Z(), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        z,
        {
          asChild: !0,
          loop: !0,
          trapped: a,
          onMountAutoFocus: n,
          onUnmountAutoFocus: t,
          children: /* @__PURE__ */ s.jsx(
            J,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": O(i.open),
              ...c,
              ref: x,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(ue, { titleId: i.titleId }),
        /* @__PURE__ */ s.jsx(ge, { contentRef: p, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), P = "DialogTitle", k = u(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = l(P, r);
    return /* @__PURE__ */ s.jsx(D.h2, { id: n.titleId, ...a, ref: o });
  }
);
k.displayName = P;
var W = "DialogDescription", w = u(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = l(W, r);
    return /* @__PURE__ */ s.jsx(D.p, { id: n.descriptionId, ...a, ref: o });
  }
);
w.displayName = W;
var L = "DialogClose", G = u(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = l(L, r);
    return /* @__PURE__ */ s.jsx(
      D.button,
      {
        type: "button",
        ...a,
        ref: o,
        onClick: f(e.onClick, () => n.onOpenChange(!1))
      }
    );
  }
);
G.displayName = L;
function O(e) {
  return e ? "open" : "closed";
}
var $ = "DialogTitleWarning", [me, B] = ee($, {
  contentName: d,
  titleName: P,
  docsSlug: "dialog"
}), ue = ({ titleId: e }) => {
  const o = B($), r = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
  return E(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, de = "DialogDescriptionWarning", ge = ({ contentRef: e, descriptionId: o }) => {
  const a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${B(de).contentName}}.`;
  return E(() => {
    const n = e.current?.getAttribute("aria-describedby");
    o && n && (document.getElementById(o) || console.warn(a));
  }, [a, e, o]), null;
}, xe = I, Ce = A, _e = j, he = M, ye = F, Ee = k, Ne = w, Pe = G;
export {
  ye as C,
  Ne as D,
  he as O,
  _e as P,
  xe as R,
  Ce as T,
  me as W,
  De as X,
  Pe as a,
  Ee as b,
  ve as c
};
//# sourceMappingURL=index-DTo4Qrbc.mjs.map
