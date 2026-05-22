import { u as P, m as L, j as n, k as R, p as g, b as oe, W as Me, a as xt, c as q, S as St } from "./index-ccmRG8Rd.mjs";
import { u as _e, a as be, g as H, j as X, P as A, b, k as wt, d as yt, i as Ct, l as It, m as Tt, R as Nt, F as Pt, D as bt, n as Et, C as _t } from "./check-BMQmbjGF.mjs";
import { u as jt, k as Mt, l as Re, m as Rt, A as At, n as Ot, o as Dt } from "./skeleton-9GpF0jm6.mjs";
import { u as Lt } from "./popover-DXQWy3ey.mjs";
import { V as Bt, C as Vt } from "./tooltip-ChyXZBO5.mjs";
import { i as Ht } from "./input-surface-b6H3dI_9.mjs";
import { C as Ae } from "./button-bsWyESEG.mjs";
function je(t, [o, e]) {
  return Math.min(e, Math.max(o, t));
}
var kt = [" ", "Enter", "ArrowUp", "ArrowDown"], Ft = [" ", "Enter"], ne = "Select", [me, fe, Ut] = Rt(ne), [le] = yt(ne, [
  Ut,
  Re
]), he = Re(), [Wt, Z] = le(ne), [Kt, zt] = le(ne), Oe = (t) => {
  const {
    __scopeSelect: o,
    children: e,
    open: l,
    defaultOpen: s,
    onOpenChange: d,
    value: r,
    defaultValue: a,
    onValueChange: c,
    dir: u,
    name: v,
    autoComplete: w,
    disabled: E,
    required: T,
    form: C
  } = t, i = he(o), [f, x] = P(null), [m, h] = P(null), [z, O] = P(!1), ae = jt(u), [_, B] = _e({
    prop: l,
    defaultProp: s ?? !1,
    onChange: d,
    caller: ne
  }), [$, Q] = _e({
    prop: r,
    defaultProp: a,
    onChange: c,
    caller: ne
  }), k = L(null), F = f ? C || !!f.closest("form") : !0, [G, U] = P(/* @__PURE__ */ new Set()), W = Array.from(G).map((j) => j.props.value).join(";");
  return /* @__PURE__ */ n.jsx(Mt, { ...i, children: /* @__PURE__ */ n.jsxs(
    Wt,
    {
      required: T,
      scope: o,
      trigger: f,
      onTriggerChange: x,
      valueNode: m,
      onValueNodeChange: h,
      valueNodeHasChildren: z,
      onValueNodeHasChildrenChange: O,
      contentId: be(),
      value: $,
      onValueChange: Q,
      open: _,
      onOpenChange: B,
      dir: ae,
      triggerPointerDownPosRef: k,
      disabled: E,
      children: [
        /* @__PURE__ */ n.jsx(me.Provider, { scope: o, children: /* @__PURE__ */ n.jsx(
          Kt,
          {
            scope: t.__scopeSelect,
            onNativeOptionAdd: R((j) => {
              U((V) => new Set(V).add(j));
            }, []),
            onNativeOptionRemove: R((j) => {
              U((V) => {
                const K = new Set(V);
                return K.delete(j), K;
              });
            }, []),
            children: e
          }
        ) }),
        F ? /* @__PURE__ */ n.jsxs(
          st,
          {
            "aria-hidden": !0,
            required: T,
            tabIndex: -1,
            name: v,
            autoComplete: w,
            value: $,
            onChange: (j) => Q(j.target.value),
            disabled: E,
            form: C,
            children: [
              $ === void 0 ? /* @__PURE__ */ n.jsx("option", { value: "" }) : null,
              Array.from(G)
            ]
          },
          W
        ) : null
      ]
    }
  ) });
};
Oe.displayName = ne;
var De = "SelectTrigger", Le = g(
  (t, o) => {
    const { __scopeSelect: e, disabled: l = !1, ...s } = t, d = he(e), r = Z(De, e), a = r.disabled || l, c = H(o, r.onTriggerChange), u = fe(e), v = L("touch"), [w, E, T] = at((i) => {
      const f = u().filter((h) => !h.disabled), x = f.find((h) => h.value === r.value), m = ct(f, i, x);
      m !== void 0 && r.onValueChange(m.value);
    }), C = (i) => {
      a || (r.onOpenChange(!0), T()), i && (r.triggerPointerDownPosRef.current = {
        x: Math.round(i.pageX),
        y: Math.round(i.pageY)
      });
    };
    return /* @__PURE__ */ n.jsx(At, { asChild: !0, ...d, children: /* @__PURE__ */ n.jsx(
      A.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": r.contentId,
        "aria-expanded": r.open,
        "aria-required": r.required,
        "aria-autocomplete": "none",
        dir: r.dir,
        "data-state": r.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": lt(r.value) ? "" : void 0,
        ...s,
        ref: c,
        onClick: b(s.onClick, (i) => {
          i.currentTarget.focus(), v.current !== "mouse" && C(i);
        }),
        onPointerDown: b(s.onPointerDown, (i) => {
          v.current = i.pointerType;
          const f = i.target;
          f.hasPointerCapture(i.pointerId) && f.releasePointerCapture(i.pointerId), i.button === 0 && i.ctrlKey === !1 && i.pointerType === "mouse" && (C(i), i.preventDefault());
        }),
        onKeyDown: b(s.onKeyDown, (i) => {
          const f = w.current !== "";
          !(i.ctrlKey || i.altKey || i.metaKey) && i.key.length === 1 && E(i.key), !(f && i.key === " ") && kt.includes(i.key) && (C(), i.preventDefault());
        })
      }
    ) });
  }
);
Le.displayName = De;
var Be = "SelectValue", Ve = g(
  (t, o) => {
    const { __scopeSelect: e, className: l, style: s, children: d, placeholder: r = "", ...a } = t, c = Z(Be, e), { onValueNodeHasChildrenChange: u } = c, v = d !== void 0, w = H(o, c.onValueNodeChange);
    return X(() => {
      u(v);
    }, [u, v]), /* @__PURE__ */ n.jsx(
      A.span,
      {
        ...a,
        ref: w,
        style: { pointerEvents: "none" },
        children: lt(c.value) ? /* @__PURE__ */ n.jsx(n.Fragment, { children: r }) : d
      }
    );
  }
);
Ve.displayName = Be;
var $t = "SelectIcon", He = g(
  (t, o) => {
    const { __scopeSelect: e, children: l, ...s } = t;
    return /* @__PURE__ */ n.jsx(A.span, { "aria-hidden": !0, ...s, ref: o, children: l || "▼" });
  }
);
He.displayName = $t;
var Gt = "SelectPortal", ke = (t) => /* @__PURE__ */ n.jsx(wt, { asChild: !0, ...t });
ke.displayName = Gt;
var re = "SelectContent", Fe = g(
  (t, o) => {
    const e = Z(re, t.__scopeSelect), [l, s] = P();
    if (X(() => {
      s(new DocumentFragment());
    }, []), !e.open) {
      const d = l;
      return d ? Me(
        /* @__PURE__ */ n.jsx(Ue, { scope: t.__scopeSelect, children: /* @__PURE__ */ n.jsx(me.Slot, { scope: t.__scopeSelect, children: /* @__PURE__ */ n.jsx("div", { children: t.children }) }) }),
        d
      ) : null;
    }
    return /* @__PURE__ */ n.jsx(We, { ...t, ref: o });
  }
);
Fe.displayName = re;
var D = 10, [Ue, J] = le(re), Yt = "SelectContentImpl", qt = Et("SelectContent.RemoveScroll"), We = g(
  (t, o) => {
    const {
      __scopeSelect: e,
      position: l = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: d,
      onPointerDownOutside: r,
      //
      // PopperContent props
      side: a,
      sideOffset: c,
      align: u,
      alignOffset: v,
      arrowPadding: w,
      collisionBoundary: E,
      collisionPadding: T,
      sticky: C,
      hideWhenDetached: i,
      avoidCollisions: f,
      //
      ...x
    } = t, m = Z(re, e), [h, z] = P(null), [O, ae] = P(null), _ = H(o, (p) => z(p)), [B, $] = P(null), [Q, k] = P(
      null
    ), F = fe(e), [G, U] = P(!1), W = L(!1);
    oe(() => {
      if (h) return It(h);
    }, [h]), Tt();
    const j = R(
      (p) => {
        const [I, ...M] = F().map((N) => N.ref.current), [S] = M.slice(-1), y = document.activeElement;
        for (const N of p)
          if (N === y || (N?.scrollIntoView({ block: "nearest" }), N === I && O && (O.scrollTop = 0), N === S && O && (O.scrollTop = O.scrollHeight), N?.focus(), document.activeElement !== y)) return;
      },
      [F, O]
    ), V = R(
      () => j([B, h]),
      [j, B, h]
    );
    oe(() => {
      G && V();
    }, [G, V]);
    const { onOpenChange: K, triggerPointerDownPosRef: Y } = m;
    oe(() => {
      if (h) {
        let p = { x: 0, y: 0 };
        const I = (S) => {
          p = {
            x: Math.abs(Math.round(S.pageX) - (Y.current?.x ?? 0)),
            y: Math.abs(Math.round(S.pageY) - (Y.current?.y ?? 0))
          };
        }, M = (S) => {
          p.x <= 10 && p.y <= 10 ? S.preventDefault() : h.contains(S.target) || K(!1), document.removeEventListener("pointermove", I), Y.current = null;
        };
        return Y.current !== null && (document.addEventListener("pointermove", I), document.addEventListener("pointerup", M, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", M, { capture: !0 });
        };
      }
    }, [h, K, Y]), oe(() => {
      const p = () => K(!1);
      return window.addEventListener("blur", p), window.addEventListener("resize", p), () => {
        window.removeEventListener("blur", p), window.removeEventListener("resize", p);
      };
    }, [K]);
    const [ve, de] = at((p) => {
      const I = F().filter((y) => !y.disabled), M = I.find((y) => y.ref.current === document.activeElement), S = ct(I, p, M);
      S && setTimeout(() => S.ref.current.focus());
    }), ge = R(
      (p, I, M) => {
        const S = !W.current && !M;
        (m.value !== void 0 && m.value === I || S) && ($(p), S && (W.current = !0));
      },
      [m.value]
    ), xe = R(() => h?.focus(), [h]), se = R(
      (p, I, M) => {
        const S = !W.current && !M;
        (m.value !== void 0 && m.value === I || S) && k(p);
      },
      [m.value]
    ), pe = l === "popper" ? Ce : Ke, ce = pe === Ce ? {
      side: a,
      sideOffset: c,
      align: u,
      alignOffset: v,
      arrowPadding: w,
      collisionBoundary: E,
      collisionPadding: T,
      sticky: C,
      hideWhenDetached: i,
      avoidCollisions: f
    } : {};
    return /* @__PURE__ */ n.jsx(
      Ue,
      {
        scope: e,
        content: h,
        viewport: O,
        onViewportChange: ae,
        itemRefCallback: ge,
        selectedItem: B,
        onItemLeave: xe,
        itemTextRefCallback: se,
        focusSelectedItem: V,
        selectedItemText: Q,
        position: l,
        isPositioned: G,
        searchRef: ve,
        children: /* @__PURE__ */ n.jsx(Nt, { as: qt, allowPinchZoom: !0, children: /* @__PURE__ */ n.jsx(
          Pt,
          {
            asChild: !0,
            trapped: m.open,
            onMountAutoFocus: (p) => {
              p.preventDefault();
            },
            onUnmountAutoFocus: b(s, (p) => {
              m.trigger?.focus({ preventScroll: !0 }), p.preventDefault();
            }),
            children: /* @__PURE__ */ n.jsx(
              bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: d,
                onPointerDownOutside: r,
                onFocusOutside: (p) => p.preventDefault(),
                onDismiss: () => m.onOpenChange(!1),
                children: /* @__PURE__ */ n.jsx(
                  pe,
                  {
                    role: "listbox",
                    id: m.contentId,
                    "data-state": m.open ? "open" : "closed",
                    dir: m.dir,
                    onContextMenu: (p) => p.preventDefault(),
                    ...x,
                    ...ce,
                    onPlaced: () => U(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: b(x.onKeyDown, (p) => {
                      const I = p.ctrlKey || p.altKey || p.metaKey;
                      if (p.key === "Tab" && p.preventDefault(), !I && p.key.length === 1 && de(p.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(p.key)) {
                        let S = F().filter((y) => !y.disabled).map((y) => y.ref.current);
                        if (["ArrowUp", "End"].includes(p.key) && (S = S.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(p.key)) {
                          const y = p.target, N = S.indexOf(y);
                          S = S.slice(N + 1);
                        }
                        setTimeout(() => j(S)), p.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
We.displayName = Yt;
var Xt = "SelectItemAlignedPosition", Ke = g((t, o) => {
  const { __scopeSelect: e, onPlaced: l, ...s } = t, d = Z(re, e), r = J(re, e), [a, c] = P(null), [u, v] = P(null), w = H(o, (_) => v(_)), E = fe(e), T = L(!1), C = L(!0), { viewport: i, selectedItem: f, selectedItemText: x, focusSelectedItem: m } = r, h = R(() => {
    if (d.trigger && d.valueNode && a && u && i && f && x) {
      const _ = d.trigger.getBoundingClientRect(), B = u.getBoundingClientRect(), $ = d.valueNode.getBoundingClientRect(), Q = x.getBoundingClientRect();
      if (d.dir !== "rtl") {
        const y = Q.left - B.left, N = $.left - y, ee = _.left - N, te = _.width + ee, Se = Math.max(te, B.width), we = window.innerWidth - D, ye = je(N, [
          D,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(D, we - Se)
        ]);
        a.style.minWidth = te + "px", a.style.left = ye + "px";
      } else {
        const y = B.right - Q.right, N = window.innerWidth - $.right - y, ee = window.innerWidth - _.right - N, te = _.width + ee, Se = Math.max(te, B.width), we = window.innerWidth - D, ye = je(N, [
          D,
          Math.max(D, we - Se)
        ]);
        a.style.minWidth = te + "px", a.style.right = ye + "px";
      }
      const k = E(), F = window.innerHeight - D * 2, G = i.scrollHeight, U = window.getComputedStyle(u), W = parseInt(U.borderTopWidth, 10), j = parseInt(U.paddingTop, 10), V = parseInt(U.borderBottomWidth, 10), K = parseInt(U.paddingBottom, 10), Y = W + j + G + K + V, ve = Math.min(f.offsetHeight * 5, Y), de = window.getComputedStyle(i), ge = parseInt(de.paddingTop, 10), xe = parseInt(de.paddingBottom, 10), se = _.top + _.height / 2 - D, pe = F - se, ce = f.offsetHeight / 2, p = f.offsetTop + ce, I = W + j + p, M = Y - I;
      if (I <= se) {
        const y = k.length > 0 && f === k[k.length - 1].ref.current;
        a.style.bottom = "0px";
        const N = u.clientHeight - i.offsetTop - i.offsetHeight, ee = Math.max(
          pe,
          ce + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (y ? xe : 0) + N + V
        ), te = I + ee;
        a.style.height = te + "px";
      } else {
        const y = k.length > 0 && f === k[0].ref.current;
        a.style.top = "0px";
        const ee = Math.max(
          se,
          W + i.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (y ? ge : 0) + ce
        ) + M;
        a.style.height = ee + "px", i.scrollTop = I - se + i.offsetTop;
      }
      a.style.margin = `${D}px 0`, a.style.minHeight = ve + "px", a.style.maxHeight = F + "px", l?.(), requestAnimationFrame(() => T.current = !0);
    }
  }, [
    E,
    d.trigger,
    d.valueNode,
    a,
    u,
    i,
    f,
    x,
    d.dir,
    l
  ]);
  X(() => h(), [h]);
  const [z, O] = P();
  X(() => {
    u && O(window.getComputedStyle(u).zIndex);
  }, [u]);
  const ae = R(
    (_) => {
      _ && C.current === !0 && (h(), m?.(), C.current = !1);
    },
    [h, m]
  );
  return /* @__PURE__ */ n.jsx(
    Jt,
    {
      scope: e,
      contentWrapper: a,
      shouldExpandOnScrollRef: T,
      onScrollButtonChange: ae,
      children: /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: z
          },
          children: /* @__PURE__ */ n.jsx(
            A.div,
            {
              ...s,
              ref: w,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
});
Ke.displayName = Xt;
var Zt = "SelectPopperPosition", Ce = g((t, o) => {
  const {
    __scopeSelect: e,
    align: l = "start",
    collisionPadding: s = D,
    ...d
  } = t, r = he(e);
  return /* @__PURE__ */ n.jsx(
    Ot,
    {
      ...r,
      ...d,
      ref: o,
      align: l,
      collisionPadding: s,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...d.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ce.displayName = Zt;
var [Jt, Ee] = le(re, {}), Ie = "SelectViewport", ze = g(
  (t, o) => {
    const { __scopeSelect: e, nonce: l, ...s } = t, d = J(Ie, e), r = Ee(Ie, e), a = H(o, d.onViewportChange), c = L(0);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: l
        }
      ),
      /* @__PURE__ */ n.jsx(me.Slot, { scope: e, children: /* @__PURE__ */ n.jsx(
        A.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...s.style
          },
          onScroll: b(s.onScroll, (u) => {
            const v = u.currentTarget, { contentWrapper: w, shouldExpandOnScrollRef: E } = r;
            if (E?.current && w) {
              const T = Math.abs(c.current - v.scrollTop);
              if (T > 0) {
                const C = window.innerHeight - D * 2, i = parseFloat(w.style.minHeight), f = parseFloat(w.style.height), x = Math.max(i, f);
                if (x < C) {
                  const m = x + T, h = Math.min(C, m), z = m - h;
                  w.style.height = h + "px", w.style.bottom === "0px" && (v.scrollTop = z > 0 ? z : 0, w.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = v.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ze.displayName = Ie;
var $e = "SelectGroup", [Qt, eo] = le($e), Ge = g(
  (t, o) => {
    const { __scopeSelect: e, ...l } = t, s = be();
    return /* @__PURE__ */ n.jsx(Qt, { scope: e, id: s, children: /* @__PURE__ */ n.jsx(A.div, { role: "group", "aria-labelledby": s, ...l, ref: o }) });
  }
);
Ge.displayName = $e;
var Ye = "SelectLabel", qe = g(
  (t, o) => {
    const { __scopeSelect: e, ...l } = t, s = eo(Ye, e);
    return /* @__PURE__ */ n.jsx(A.div, { id: s.id, ...l, ref: o });
  }
);
qe.displayName = Ye;
var ue = "SelectItem", [to, Xe] = le(ue), Ze = g(
  (t, o) => {
    const {
      __scopeSelect: e,
      value: l,
      disabled: s = !1,
      textValue: d,
      ...r
    } = t, a = Z(ue, e), c = J(ue, e), u = a.value === l, [v, w] = P(d ?? ""), [E, T] = P(!1), C = H(
      o,
      (m) => c.itemRefCallback?.(m, l, s)
    ), i = be(), f = L("touch"), x = () => {
      s || (a.onValueChange(l), a.onOpenChange(!1));
    };
    if (l === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ n.jsx(
      to,
      {
        scope: e,
        value: l,
        disabled: s,
        textId: i,
        isSelected: u,
        onItemTextChange: R((m) => {
          w((h) => h || (m?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ n.jsx(
          me.ItemSlot,
          {
            scope: e,
            value: l,
            disabled: s,
            textValue: v,
            children: /* @__PURE__ */ n.jsx(
              A.div,
              {
                role: "option",
                "aria-labelledby": i,
                "data-highlighted": E ? "" : void 0,
                "aria-selected": u && E,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...r,
                ref: C,
                onFocus: b(r.onFocus, () => T(!0)),
                onBlur: b(r.onBlur, () => T(!1)),
                onClick: b(r.onClick, () => {
                  f.current !== "mouse" && x();
                }),
                onPointerUp: b(r.onPointerUp, () => {
                  f.current === "mouse" && x();
                }),
                onPointerDown: b(r.onPointerDown, (m) => {
                  f.current = m.pointerType;
                }),
                onPointerMove: b(r.onPointerMove, (m) => {
                  f.current = m.pointerType, s ? c.onItemLeave?.() : f.current === "mouse" && m.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: b(r.onPointerLeave, (m) => {
                  m.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: b(r.onKeyDown, (m) => {
                  c.searchRef?.current !== "" && m.key === " " || (Ft.includes(m.key) && x(), m.key === " " && m.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ze.displayName = ue;
var ie = "SelectItemText", Je = g(
  (t, o) => {
    const { __scopeSelect: e, className: l, style: s, ...d } = t, r = Z(ie, e), a = J(ie, e), c = Xe(ie, e), u = zt(ie, e), [v, w] = P(null), E = H(
      o,
      (x) => w(x),
      c.onItemTextChange,
      (x) => a.itemTextRefCallback?.(x, c.value, c.disabled)
    ), T = v?.textContent, C = xt(
      () => /* @__PURE__ */ n.jsx("option", { value: c.value, disabled: c.disabled, children: T }, c.value),
      [c.disabled, c.value, T]
    ), { onNativeOptionAdd: i, onNativeOptionRemove: f } = u;
    return X(() => (i(C), () => f(C)), [i, f, C]), /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(A.span, { id: c.textId, ...d, ref: E }),
      c.isSelected && r.valueNode && !r.valueNodeHasChildren ? Me(d.children, r.valueNode) : null
    ] });
  }
);
Je.displayName = ie;
var Qe = "SelectItemIndicator", et = g(
  (t, o) => {
    const { __scopeSelect: e, ...l } = t;
    return Xe(Qe, e).isSelected ? /* @__PURE__ */ n.jsx(A.span, { "aria-hidden": !0, ...l, ref: o }) : null;
  }
);
et.displayName = Qe;
var Te = "SelectScrollUpButton", tt = g((t, o) => {
  const e = J(Te, t.__scopeSelect), l = Ee(Te, t.__scopeSelect), [s, d] = P(!1), r = H(o, l.onScrollButtonChange);
  return X(() => {
    if (e.viewport && e.isPositioned) {
      let a = function() {
        const u = c.scrollTop > 0;
        d(u);
      };
      const c = e.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [e.viewport, e.isPositioned]), s ? /* @__PURE__ */ n.jsx(
    nt,
    {
      ...t,
      ref: r,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = e;
        a && c && (a.scrollTop = a.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
tt.displayName = Te;
var Ne = "SelectScrollDownButton", ot = g((t, o) => {
  const e = J(Ne, t.__scopeSelect), l = Ee(Ne, t.__scopeSelect), [s, d] = P(!1), r = H(o, l.onScrollButtonChange);
  return X(() => {
    if (e.viewport && e.isPositioned) {
      let a = function() {
        const u = c.scrollHeight - c.clientHeight, v = Math.ceil(c.scrollTop) < u;
        d(v);
      };
      const c = e.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [e.viewport, e.isPositioned]), s ? /* @__PURE__ */ n.jsx(
    nt,
    {
      ...t,
      ref: r,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = e;
        a && c && (a.scrollTop = a.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
ot.displayName = Ne;
var nt = g((t, o) => {
  const { __scopeSelect: e, onAutoScroll: l, ...s } = t, d = J("SelectScrollButton", e), r = L(null), a = fe(e), c = R(() => {
    r.current !== null && (window.clearInterval(r.current), r.current = null);
  }, []);
  return oe(() => () => c(), [c]), X(() => {
    a().find((v) => v.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ n.jsx(
    A.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: o,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: b(s.onPointerDown, () => {
        r.current === null && (r.current = window.setInterval(l, 50));
      }),
      onPointerMove: b(s.onPointerMove, () => {
        d.onItemLeave?.(), r.current === null && (r.current = window.setInterval(l, 50));
      }),
      onPointerLeave: b(s.onPointerLeave, () => {
        c();
      })
    }
  );
}), oo = "SelectSeparator", rt = g(
  (t, o) => {
    const { __scopeSelect: e, ...l } = t;
    return /* @__PURE__ */ n.jsx(A.div, { "aria-hidden": !0, ...l, ref: o });
  }
);
rt.displayName = oo;
var Pe = "SelectArrow", no = g(
  (t, o) => {
    const { __scopeSelect: e, ...l } = t, s = he(e), d = Z(Pe, e), r = J(Pe, e);
    return d.open && r.position === "popper" ? /* @__PURE__ */ n.jsx(Dt, { ...s, ...l, ref: o }) : null;
  }
);
no.displayName = Pe;
var ro = "SelectBubbleInput", st = g(
  ({ __scopeSelect: t, value: o, ...e }, l) => {
    const s = L(null), d = H(l, s), r = Lt(o);
    return oe(() => {
      const a = s.current;
      if (!a) return;
      const c = window.HTMLSelectElement.prototype, v = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (r !== o && v) {
        const w = new Event("change", { bubbles: !0 });
        v.call(a, o), a.dispatchEvent(w);
      }
    }, [r, o]), /* @__PURE__ */ n.jsx(
      A.select,
      {
        ...e,
        style: { ...Bt, ...e.style },
        ref: d,
        defaultValue: o
      }
    );
  }
);
st.displayName = ro;
function lt(t) {
  return t === "" || t === void 0;
}
function at(t) {
  const o = Ct(t), e = L(""), l = L(0), s = R(
    (r) => {
      const a = e.current + r;
      o(a), (function c(u) {
        e.current = u, window.clearTimeout(l.current), u !== "" && (l.current = window.setTimeout(() => c(""), 1e3));
      })(a);
    },
    [o]
  ), d = R(() => {
    e.current = "", window.clearTimeout(l.current);
  }, []);
  return oe(() => () => window.clearTimeout(l.current), []), [e, s, d];
}
function ct(t, o, e) {
  const s = o.length > 1 && Array.from(o).every((u) => u === o[0]) ? o[0] : o, d = e ? t.indexOf(e) : -1;
  let r = so(t, Math.max(d, 0));
  s.length === 1 && (r = r.filter((u) => u !== e));
  const c = r.find(
    (u) => u.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return c !== e ? c : void 0;
}
function so(t, o) {
  return t.map((e, l) => t[(o + l) % t.length]);
}
var lo = Oe, it = Le, ao = Ve, co = He, io = ke, dt = Fe, po = ze, uo = Ge, pt = qe, ut = Ze, mo = Je, fo = et, mt = tt, ft = ot, ht = rt;
const bo = lo, Eo = uo, _o = ao, ho = g(({ className: t, children: o, ...e }, l) => /* @__PURE__ */ n.jsxs(
  it,
  {
    ref: l,
    className: q(
      Ht("self"),
      "flex h-(--control-height) w-full items-center justify-between whitespace-nowrap px-3 py-2 text-sm hover:bg-accent data-[placeholder]:text-muted-foreground [&>span]:line-clamp-1",
      t
    ),
    ...e,
    children: [
      o,
      /* @__PURE__ */ n.jsx(co, { asChild: !0, children: /* @__PURE__ */ n.jsx(Ae, { className: "-mr-0.5 ml-1 size-4 opacity-50" }) })
    ]
  }
));
ho.displayName = it.displayName;
const vt = g(({ className: t, ...o }, e) => /* @__PURE__ */ n.jsx(
  mt,
  {
    ref: e,
    className: q(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...o,
    children: /* @__PURE__ */ n.jsx(Vt, { className: "size-4" })
  }
));
vt.displayName = mt.displayName;
const gt = g(({ className: t, ...o }, e) => /* @__PURE__ */ n.jsx(
  ft,
  {
    ref: e,
    className: q(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...o,
    children: /* @__PURE__ */ n.jsx(Ae, { className: "size-4" })
  }
));
gt.displayName = ft.displayName;
const vo = g(({ className: t, children: o, position: e = "popper", ...l }, s) => /* @__PURE__ */ n.jsx(io, { children: /* @__PURE__ */ n.jsx("div", { className: St, children: /* @__PURE__ */ n.jsxs(
  dt,
  {
    ref: s,
    className: q(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      e === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: e,
    ...l,
    children: [
      /* @__PURE__ */ n.jsx(vt, {}),
      /* @__PURE__ */ n.jsx(
        po,
        {
          className: q(
            "p-1",
            e === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: o
        }
      ),
      /* @__PURE__ */ n.jsx(gt, {})
    ]
  }
) }) }));
vo.displayName = dt.displayName;
const go = g(({ className: t, ...o }, e) => /* @__PURE__ */ n.jsx(
  pt,
  {
    ref: e,
    className: q("px-2 py-1.5 text-sm font-semibold", t),
    ...o
  }
));
go.displayName = pt.displayName;
const xo = g(({ className: t, children: o, ...e }, l) => /* @__PURE__ */ n.jsxs(
  ut,
  {
    ref: l,
    className: q(
      "relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-2 pr-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...e,
    children: [
      /* @__PURE__ */ n.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ n.jsx(fo, { children: /* @__PURE__ */ n.jsx(_t, { className: "size-4" }) }) }),
      /* @__PURE__ */ n.jsx(mo, { children: o })
    ]
  }
));
xo.displayName = ut.displayName;
const So = g(({ className: t, ...o }, e) => /* @__PURE__ */ n.jsx(
  ht,
  {
    ref: e,
    className: q("-mx-1 my-1 h-px bg-muted", t),
    ...o
  }
));
So.displayName = ht.displayName;
export {
  bo as S,
  ho as a,
  _o as b,
  vo as c,
  Eo as d,
  go as e,
  xo as f
};
//# sourceMappingURL=select-DsXabr89.mjs.map
