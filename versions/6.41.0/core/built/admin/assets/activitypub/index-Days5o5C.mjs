import { ao as U, R as g, ap as D, j as d, aq as j, ar as W, as as Z, am as P, at as ee, e as k, au as B, av as T, c as L, aw as te, b as K, ax as oe, X as y } from "./index-iRncUrZR.mjs";
function ne(e) {
  const o = e + "CollectionProvider", [i, r] = U(o), [w, I] = i(
    o,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), p = (l) => {
    const { scope: t, children: a } = l, f = g.useRef(null), n = g.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(w, { scope: t, itemMap: n, collectionRef: f, children: a });
  };
  p.displayName = o;
  const v = e + "CollectionSlot", A = j(v), m = g.forwardRef(
    (l, t) => {
      const { scope: a, children: f } = l, n = I(v, a), c = D(t, n.collectionRef);
      return /* @__PURE__ */ d.jsx(A, { ref: c, children: f });
    }
  );
  m.displayName = v;
  const s = e + "CollectionItemSlot", R = "data-radix-collection-item", S = j(s), C = g.forwardRef(
    (l, t) => {
      const { scope: a, children: f, ...n } = l, c = g.useRef(null), x = D(t, c), E = I(s, a);
      return g.useEffect(() => (E.itemMap.set(c, { ref: c, ...n }), () => {
        E.itemMap.delete(c);
      })), /* @__PURE__ */ d.jsx(S, { [R]: "", ref: x, children: f });
    }
  );
  C.displayName = s;
  function F(l) {
    const t = I(e + "CollectionConsumer", l);
    return g.useCallback(() => {
      const f = t.collectionRef.current;
      if (!f) return [];
      const n = Array.from(f.querySelectorAll(`[${R}]`));
      return Array.from(t.itemMap.values()).sort(
        (E, h) => n.indexOf(E.ref.current) - n.indexOf(h.ref.current)
      );
    }, [t.collectionRef, t.itemMap]);
  }
  return [
    { Provider: p, Slot: m, ItemSlot: C },
    F,
    r
  ];
}
var re = Z(void 0);
function ce(e) {
  const o = W(re);
  return e || o || "ltr";
}
var N = "rovingFocusGroup.onEntryFocus", se = { bubbles: !1, cancelable: !0 }, _ = "RovingFocusGroup", [O, V, ae] = ne(_), [ie, Ce] = U(
  _,
  [ae]
), [ue, le] = ie(_), Y = P(
  (e, o) => /* @__PURE__ */ d.jsx(O.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(O.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(fe, { ...e, ref: o }) }) })
);
Y.displayName = _;
var fe = P((e, o) => {
  const {
    __scopeRovingFocusGroup: i,
    orientation: r,
    loop: w = !1,
    dir: I,
    currentTabStopId: p,
    defaultCurrentTabStopId: v,
    onCurrentTabStopIdChange: A,
    onEntryFocus: m,
    preventScrollOnEntryFocus: s = !1,
    ...R
  } = e, S = L(null), C = D(o, S), F = ce(I), [l, t] = te({
    prop: p,
    defaultProp: v ?? null,
    onChange: A,
    caller: _
  }), [a, f] = K(!1), n = oe(m), c = V(i), x = L(!1), [E, h] = K(0);
  return k(() => {
    const u = S.current;
    if (u)
      return u.addEventListener(N, n), () => u.removeEventListener(N, n);
  }, [n]), /* @__PURE__ */ d.jsx(
    ue,
    {
      scope: i,
      orientation: r,
      dir: F,
      loop: w,
      currentTabStopId: l,
      onItemFocus: y(
        (u) => t(u),
        [t]
      ),
      onItemShiftTab: y(() => f(!0), []),
      onFocusableItemAdd: y(
        () => h((u) => u + 1),
        []
      ),
      onFocusableItemRemove: y(
        () => h((u) => u - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        B.div,
        {
          tabIndex: a || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...R,
          ref: C,
          style: { outline: "none", ...e.style },
          onMouseDown: T(e.onMouseDown, () => {
            x.current = !0;
          }),
          onFocus: T(e.onFocus, (u) => {
            const X = !x.current;
            if (u.target === u.currentTarget && X && !a) {
              const G = new CustomEvent(N, se);
              if (u.currentTarget.dispatchEvent(G), !G.defaultPrevented) {
                const M = c().filter((b) => b.focusable), $ = M.find((b) => b.active), J = M.find((b) => b.id === l), Q = [$, J, ...M].filter(
                  Boolean
                ).map((b) => b.ref.current);
                z(Q, s);
              }
            }
            x.current = !1;
          }),
          onBlur: T(e.onBlur, () => f(!1))
        }
      )
    }
  );
}), q = "RovingFocusGroupItem", H = P(
  (e, o) => {
    const {
      __scopeRovingFocusGroup: i,
      focusable: r = !0,
      active: w = !1,
      tabStopId: I,
      children: p,
      ...v
    } = e, A = ee(), m = I || A, s = le(q, i), R = s.currentTabStopId === m, S = V(i), { onFocusableItemAdd: C, onFocusableItemRemove: F, currentTabStopId: l } = s;
    return k(() => {
      if (r)
        return C(), () => F();
    }, [r, C, F]), /* @__PURE__ */ d.jsx(
      O.ItemSlot,
      {
        scope: i,
        id: m,
        focusable: r,
        active: w,
        children: /* @__PURE__ */ d.jsx(
          B.span,
          {
            tabIndex: R ? 0 : -1,
            "data-orientation": s.orientation,
            ...v,
            ref: o,
            onMouseDown: T(e.onMouseDown, (t) => {
              r ? s.onItemFocus(m) : t.preventDefault();
            }),
            onFocus: T(e.onFocus, () => s.onItemFocus(m)),
            onKeyDown: T(e.onKeyDown, (t) => {
              if (t.key === "Tab" && t.shiftKey) {
                s.onItemShiftTab();
                return;
              }
              if (t.target !== t.currentTarget) return;
              const a = pe(t, s.orientation, s.dir);
              if (a !== void 0) {
                if (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return;
                t.preventDefault();
                let n = S().filter((c) => c.focusable).map((c) => c.ref.current);
                if (a === "last") n.reverse();
                else if (a === "prev" || a === "next") {
                  a === "prev" && n.reverse();
                  const c = n.indexOf(t.currentTarget);
                  n = s.loop ? Ie(n, c + 1) : n.slice(c + 1);
                }
                setTimeout(() => z(n));
              }
            }),
            children: typeof p == "function" ? p({ isCurrentTabStop: R, hasTabStop: l != null }) : p
          }
        )
      }
    );
  }
);
H.displayName = q;
var de = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function me(e, o) {
  return o !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function pe(e, o, i) {
  const r = me(e.key, i);
  if (!(o === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(o === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return de[r];
}
function z(e, o = !1) {
  const i = document.activeElement;
  for (const r of e)
    if (r === i || (r.focus({ preventScroll: o }), document.activeElement !== i)) return;
}
function Ie(e, o) {
  return e.map((i, r) => e[(o + r) % e.length]);
}
var be = Y, ge = H;
export {
  ge as I,
  be as R,
  ne as a,
  Ce as c,
  ce as u
};
//# sourceMappingURL=index-Days5o5C.mjs.map
