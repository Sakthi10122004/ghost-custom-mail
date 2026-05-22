import { k as L, D as Q, a as U, j as A, B as ee, F as xe, m as P, b as w, u as T, X as De, y as M, A as te, T as Ye, p as R, x as J, Y as he, U as Ze, Z as ze, o as N } from "./index-ccmRG8Rd.mjs";
var x = function() {
  return x = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, x.apply(this, arguments);
};
function Ie(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function An(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(c) {
      c(a);
    });
  }
  return new (n || (n = Promise))(function(a, c) {
    function i(l) {
      try {
        u(r.next(l));
      } catch (d) {
        c(d);
      }
    }
    function f(l) {
      try {
        u(r.throw(l));
      } catch (d) {
        c(d);
      }
    }
    function u(l) {
      l.done ? a(l.value) : o(l.value).then(i, f);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Ge(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function ye(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Me(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = ye(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : ye(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return L(Me(...e), e);
}
function Tn(e, t) {
  const n = Q(t), r = (a) => {
    const { children: c, ...i } = a, f = U(() => i, Object.values(i));
    return /* @__PURE__ */ A.jsx(n.Provider, { value: f, children: c });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const c = ee(n);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Rn(e, t = []) {
  let n = [];
  function r(a, c) {
    const i = Q(c), f = n.length;
    n = [...n, c];
    const u = (d) => {
      const { scope: v, children: h, ...S } = d, s = v?.[e]?.[f] || i, m = U(() => S, Object.values(S));
      return /* @__PURE__ */ A.jsx(s.Provider, { value: m, children: h });
    };
    u.displayName = a + "Provider";
    function l(d, v) {
      const h = v?.[e]?.[f] || i, S = ee(h);
      if (S) return S;
      if (c !== void 0) return c;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [u, l];
  }
  const o = () => {
    const a = n.map((c) => Q(c));
    return function(i) {
      const f = i?.[e] || a;
      return U(
        () => ({ [`__scope${e}`]: { ...i, [e]: f } }),
        [i, f]
      );
    };
  };
  return o.scopeName = e, [r, qe(o, ...t)];
}
function qe(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const c = r.reduce((i, { useScope: f, scopeName: u }) => {
        const d = f(a)[`__scope${u}`];
        return { ...i, ...d };
      }, {});
      return U(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function ae(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var $ = globalThis?.document ? xe : () => {
}, Qe = De[" useInsertionEffect ".trim().toString()] || $;
function Ln({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, c] = Je({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, f = i ? e : o;
  {
    const l = P(e !== void 0);
    w(() => {
      const d = l.current;
      d !== i && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), l.current = i;
    }, [i, r]);
  }
  const u = L(
    (l) => {
      if (i) {
        const d = et(l) ? l(e) : l;
        d !== e && c.current?.(d);
      } else
        a(l);
    },
    [i, e, a, c]
  );
  return [f, u];
}
function Je({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = T(e), o = P(n), a = P(t);
  return Qe(() => {
    a.current = t;
  }, [t]), w(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function et(e) {
  return typeof e == "function";
}
function tt(e, t) {
  return Ye((n, r) => t[n][r] ?? n, e);
}
var nt = (e) => {
  const { present: t, children: n } = e, r = rt(t), o = typeof n == "function" ? n({ present: r.isPresent }) : M.only(n), a = ne(r.ref, ot(o));
  return typeof n == "function" || r.isPresent ? te(o, { ref: a }) : null;
};
nt.displayName = "Presence";
function rt(e) {
  const [t, n] = T(), r = P(null), o = P(e), a = P("none"), c = e ? "mounted" : "unmounted", [i, f] = tt(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return w(() => {
    const u = V(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), $(() => {
    const u = r.current, l = o.current;
    if (l !== e) {
      const v = a.current, h = V(u);
      e ? f("MOUNT") : h === "none" || u?.display === "none" ? f("UNMOUNT") : f(l && v !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, f]), $(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, d = (h) => {
        const s = V(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && s && (f("ANIMATION_END"), !o.current)) {
          const m = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = m);
          });
        }
      }, v = (h) => {
        h.target === t && (a.current = V(r.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        l.clearTimeout(u), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: L((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function V(e) {
  return e?.animationName || "none";
}
function ot(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  const t = /* @__PURE__ */ it(e), n = R((r, o) => {
    const { children: a, ...c } = r, i = M.toArray(a), f = i.find(ct);
    if (f) {
      const u = f.props.children, l = i.map((d) => d === f ? M.count(u) > 1 ? M.only(null) : J(u) ? u.props.children : null : d);
      return /* @__PURE__ */ A.jsx(t, { ...c, ref: o, children: J(u) ? te(u, void 0, l) : null });
    }
    return /* @__PURE__ */ A.jsx(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  const t = R((n, r) => {
    const { children: o, ...a } = n;
    if (J(o)) {
      const c = ut(o), i = st(a, o.props);
      return o.type !== he && (i.ref = r ? Me(r, c) : c), te(o, i);
    }
    return M.count(o) > 1 ? M.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ke = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function xn(e) {
  const t = ({ children: n }) => /* @__PURE__ */ A.jsx(A.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = ke, t;
}
function ct(e) {
  return J(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ke;
}
function st(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const f = a(...i);
      return o(...i), f;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ut(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var lt = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], re = lt.reduce((e, t) => {
  const n = /* @__PURE__ */ at(`Primitive.${t}`), r = R((o, a) => {
    const { asChild: c, ...i } = o, f = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ A.jsx(f, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function dt(e, t) {
  e && Ze(() => e.dispatchEvent(t));
}
var ft = De[" useId ".trim().toString()] || (() => {
}), vt = 0;
function Dn(e) {
  const [t, n] = T(ft());
  return $(() => {
    n((r) => r ?? String(vt++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function H(e) {
  const t = P(e);
  return w(() => {
    t.current = e;
  }), U(() => (...n) => t.current?.(...n), []);
}
function mt(e, t = globalThis?.document) {
  const n = H(e);
  w(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var ht = "DismissableLayer", ve = "dismissableLayer.update", pt = "dismissableLayer.pointerDownOutside", yt = "dismissableLayer.focusOutside", ge, Fe = Q({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), gt = R(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: i,
      ...f
    } = e, u = ee(Fe), [l, d] = T(null), v = l?.ownerDocument ?? globalThis?.document, [, h] = T({}), S = ne(t, (y) => d(y)), s = Array.from(u.layers), [m] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = s.indexOf(m), g = l ? s.indexOf(l) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, E = g >= p, C = St((y) => {
      const I = y.target, k = [...u.branches].some((j) => j.contains(I));
      !E || k || (o?.(y), c?.(y), y.defaultPrevented || i?.());
    }, v), O = wt((y) => {
      const I = y.target;
      [...u.branches].some((j) => j.contains(I)) || (a?.(y), c?.(y), y.defaultPrevented || i?.());
    }, v);
    return mt((y) => {
      g === u.layers.size - 1 && (r?.(y), !y.defaultPrevented && i && (y.preventDefault(), i()));
    }, v), w(() => {
      if (l)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (ge = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(l)), u.layers.add(l), be(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = ge);
        };
    }, [l, v, n, u]), w(() => () => {
      l && (u.layers.delete(l), u.layersWithOutsidePointerEventsDisabled.delete(l), be());
    }, [l, u]), w(() => {
      const y = () => h({});
      return document.addEventListener(ve, y), () => document.removeEventListener(ve, y);
    }, []), /* @__PURE__ */ A.jsx(
      re.div,
      {
        ...f,
        ref: S,
        style: {
          pointerEvents: b ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ae(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: ae(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: ae(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
gt.displayName = ht;
var bt = "DismissableLayerBranch", Et = R((e, t) => {
  const n = ee(Fe), r = P(null), o = ne(t, r);
  return w(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ A.jsx(re.div, { ...e, ref: o });
});
Et.displayName = bt;
function St(e, t = globalThis?.document) {
  const n = H(e), r = P(!1), o = P(() => {
  });
  return w(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let f = function() {
          We(
            pt,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = f, t.addEventListener("click", o.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function wt(e, t = globalThis?.document) {
  const n = H(e), r = P(!1);
  return w(() => {
    const o = (a) => {
      a.target && !r.current && We(yt, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function be() {
  const e = new CustomEvent(ve);
  document.dispatchEvent(e);
}
function We(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? dt(o, a) : o.dispatchEvent(a);
}
var Ct = "Portal", Pt = R((e, t) => {
  const { container: n, ...r } = e, [o, a] = T(!1);
  $(() => a(!0), []);
  const c = n || o && globalThis?.document?.body;
  return c ? ze.createPortal(/* @__PURE__ */ A.jsx(re.div, { ...r, ref: t }), c) : null;
});
Pt.displayName = Ct;
var ie = 0;
function In() {
  w(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ee()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ee()), ie++, () => {
      ie === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ie--;
    };
  }, []);
}
function Ee() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ce = "focusScope.autoFocusOnMount", se = "focusScope.autoFocusOnUnmount", Se = { bubbles: !1, cancelable: !0 }, Nt = "FocusScope", Ot = R((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...c
  } = e, [i, f] = T(null), u = H(o), l = H(a), d = P(null), v = ne(t, (s) => f(s)), h = P({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  w(() => {
    if (r) {
      let s = function(b) {
        if (h.paused || !i) return;
        const E = b.target;
        i.contains(E) ? d.current = E : D(d.current, { select: !0 });
      }, m = function(b) {
        if (h.paused || !i) return;
        const E = b.relatedTarget;
        E !== null && (i.contains(E) || D(d.current, { select: !0 }));
      }, p = function(b) {
        if (document.activeElement === document.body)
          for (const C of b)
            C.removedNodes.length > 0 && D(i);
      };
      document.addEventListener("focusin", s), document.addEventListener("focusout", m);
      const g = new MutationObserver(p);
      return i && g.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", s), document.removeEventListener("focusout", m), g.disconnect();
      };
    }
  }, [r, i, h.paused]), w(() => {
    if (i) {
      Ce.add(h);
      const s = document.activeElement;
      if (!i.contains(s)) {
        const p = new CustomEvent(ce, Se);
        i.addEventListener(ce, u), i.dispatchEvent(p), p.defaultPrevented || (At(Dt(_e(i)), { select: !0 }), document.activeElement === s && D(i));
      }
      return () => {
        i.removeEventListener(ce, u), setTimeout(() => {
          const p = new CustomEvent(se, Se);
          i.addEventListener(se, l), i.dispatchEvent(p), p.defaultPrevented || D(s ?? document.body, { select: !0 }), i.removeEventListener(se, l), Ce.remove(h);
        }, 0);
      };
    }
  }, [i, u, l, h]);
  const S = L(
    (s) => {
      if (!n && !r || h.paused) return;
      const m = s.key === "Tab" && !s.altKey && !s.ctrlKey && !s.metaKey, p = document.activeElement;
      if (m && p) {
        const g = s.currentTarget, [b, E] = Tt(g);
        b && E ? !s.shiftKey && p === E ? (s.preventDefault(), n && D(b, { select: !0 })) : s.shiftKey && p === b && (s.preventDefault(), n && D(E, { select: !0 })) : p === g && s.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ A.jsx(re.div, { tabIndex: -1, ...c, ref: v, onKeyDown: S });
});
Ot.displayName = Nt;
function At(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (D(r, { select: t }), document.activeElement !== n) return;
}
function Tt(e) {
  const t = _e(e), n = we(t, e), r = we(t.reverse(), e);
  return [n, r];
}
function _e(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function we(e, t) {
  for (const n of e)
    if (!Rt(n, { upTo: t })) return n;
}
function Rt(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Lt(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function D(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Lt(e) && t && e.select();
  }
}
var Ce = xt();
function xt() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Pe(e, t), e.unshift(t);
    },
    remove(t) {
      e = Pe(e, t), e[0]?.resume();
    }
  };
}
function Pe(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Dt(e) {
  return e.filter((t) => t.tagName !== "A");
}
var It = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, F = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Y = {}, ue = 0, Be = function(e) {
  return e && (e.host || Be(e.parentNode));
}, Mt = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Be(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, kt = function(e, t, n, r) {
  var o = Mt(t, Array.isArray(e) ? e : [e]);
  Y[n] || (Y[n] = /* @__PURE__ */ new WeakMap());
  var a = Y[n], c = [], i = /* @__PURE__ */ new Set(), f = new Set(o), u = function(d) {
    !d || i.has(d) || (i.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var l = function(d) {
    !d || f.has(d) || Array.prototype.forEach.call(d.children, function(v) {
      if (i.has(v))
        l(v);
      else
        try {
          var h = v.getAttribute(r), S = h !== null && h !== "false", s = (F.get(v) || 0) + 1, m = (a.get(v) || 0) + 1;
          F.set(v, s), a.set(v, m), c.push(v), s === 1 && S && X.set(v, !0), m === 1 && v.setAttribute(n, "true"), S || v.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", v, p);
        }
    });
  };
  return l(t), i.clear(), ue++, function() {
    c.forEach(function(d) {
      var v = F.get(d) - 1, h = a.get(d) - 1;
      F.set(d, v), a.set(d, h), v || (X.has(d) || d.removeAttribute(r), X.delete(d)), h || d.removeAttribute(n);
    }), ue--, ue || (F = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Y = {});
  };
}, Mn = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = It(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), kt(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, G = "right-scroll-bar-position", q = "width-before-scroll-bar", Ft = "with-scroll-bars-hidden", Wt = "--removed-body-scroll-bar-size";
function le(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function _t(e, t) {
  var n = T(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Bt = typeof window < "u" ? xe : w, Ne = /* @__PURE__ */ new WeakMap();
function Ut(e, t) {
  var n = _t(null, function(r) {
    return e.forEach(function(o) {
      return le(o, r);
    });
  });
  return Bt(function() {
    var r = Ne.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), c = n.current;
      o.forEach(function(i) {
        a.has(i) || le(i, null);
      }), a.forEach(function(i) {
        o.has(i) || le(i, c);
      });
    }
    Ne.set(n, e);
  }, [e]), n;
}
function jt(e) {
  return e;
}
function $t(e, t) {
  t === void 0 && (t = jt);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var c = t(a, r);
      return n.push(c), function() {
        n = n.filter(function(i) {
          return i !== c;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var c = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), c = n;
      }
      var f = function() {
        var l = c;
        c = [], l.forEach(a);
      }, u = function() {
        return Promise.resolve().then(f);
      };
      u(), n = {
        push: function(l) {
          c.push(l), u();
        },
        filter: function(l) {
          return c = c.filter(l), n;
        }
      };
    }
  };
  return o;
}
function Ht(e) {
  e === void 0 && (e = {});
  var t = $t(null);
  return t.options = x({ async: !0, ssr: !1 }, e), t;
}
var Ue = function(e) {
  var t = e.sideCar, n = Ie(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return N(r, x({}, n));
};
Ue.isSideCarExport = !0;
function Kt(e, t) {
  return e.useMedium(t), Ue;
}
var je = Ht(), de = function() {
}, oe = R(function(e, t) {
  var n = P(null), r = T({
    onScrollCapture: de,
    onWheelCapture: de,
    onTouchMoveCapture: de
  }), o = r[0], a = r[1], c = e.forwardProps, i = e.children, f = e.className, u = e.removeScrollBar, l = e.enabled, d = e.shards, v = e.sideCar, h = e.noRelative, S = e.noIsolation, s = e.inert, m = e.allowPinchZoom, p = e.as, g = p === void 0 ? "div" : p, b = e.gapMode, E = Ie(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = v, O = Ut([n, t]), y = x(x({}, E), o);
  return N(
    he,
    null,
    l && N(C, { sideCar: je, removeScrollBar: u, shards: d, noRelative: h, noIsolation: S, inert: s, setCallbacks: a, allowPinchZoom: !!m, lockRef: n, gapMode: b }),
    c ? te(M.only(i), x(x({}, y), { ref: O })) : N(g, x({}, y, { className: f, ref: O }), i)
  );
});
oe.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
oe.classNames = {
  fullWidth: q,
  zeroRight: G
};
var Vt = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Xt() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Vt();
  return t && e.setAttribute("nonce", t), e;
}
function Yt(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Zt(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var zt = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Xt()) && (Yt(t, n), Zt(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Gt = function() {
  var e = zt();
  return function(t, n) {
    w(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, $e = function() {
  var e = Gt(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, qt = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, fe = function(e) {
  return parseInt(e || "", 10) || 0;
}, Qt = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [fe(n), fe(r), fe(o)];
}, Jt = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return qt;
  var t = Qt(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, en = $e(), B = "data-scroll-locked", tn = function(e, t, n, r) {
  var o = e.left, a = e.top, c = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ft, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(B, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(G, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(q, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(G, " .").concat(G, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(q, " .").concat(q, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(B, `] {
    `).concat(Wt, ": ").concat(i, `px;
  }
`);
}, Oe = function() {
  var e = parseInt(document.body.getAttribute(B) || "0", 10);
  return isFinite(e) ? e : 0;
}, nn = function() {
  w(function() {
    return document.body.setAttribute(B, (Oe() + 1).toString()), function() {
      var e = Oe() - 1;
      e <= 0 ? document.body.removeAttribute(B) : document.body.setAttribute(B, e.toString());
    };
  }, []);
}, rn = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  nn();
  var a = U(function() {
    return Jt(o);
  }, [o]);
  return N(en, { styles: tn(a, !t, o, n ? "" : "!important") });
}, me = !1;
if (typeof window < "u")
  try {
    var Z = Object.defineProperty({}, "passive", {
      get: function() {
        return me = !0, !0;
      }
    });
    window.addEventListener("test", Z, Z), window.removeEventListener("test", Z, Z);
  } catch {
    me = !1;
  }
var W = me ? { passive: !1 } : !1, on = function(e) {
  return e.tagName === "TEXTAREA";
}, He = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !on(e) && n[t] === "visible")
  );
}, an = function(e) {
  return He(e, "overflowY");
}, cn = function(e) {
  return He(e, "overflowX");
}, Ae = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ke(e, r);
    if (o) {
      var a = Ve(e, r), c = a[1], i = a[2];
      if (c > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, sn = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, un = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ke = function(e, t) {
  return e === "v" ? an(t) : cn(t);
}, Ve = function(e, t) {
  return e === "v" ? sn(t) : un(t);
}, ln = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, dn = function(e, t, n, r, o) {
  var a = ln(e, window.getComputedStyle(t).direction), c = a * r, i = n.target, f = t.contains(i), u = !1, l = c > 0, d = 0, v = 0;
  do {
    if (!i)
      break;
    var h = Ve(e, i), S = h[0], s = h[1], m = h[2], p = s - m - a * S;
    (S || p) && Ke(e, i) && (d += p, v += S);
    var g = i.parentNode;
    i = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
  } while (
    // portaled content
    !f && i !== document.body || // self content
    f && (t.contains(i) || t === i)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(v) < 1) && (u = !0), u;
}, z = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Te = function(e) {
  return [e.deltaX, e.deltaY];
}, Re = function(e) {
  return e && "current" in e ? e.current : e;
}, fn = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, vn = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, mn = 0, _ = [];
function hn(e) {
  var t = P([]), n = P([0, 0]), r = P(), o = T(mn++)[0], a = T($e)[0], c = P(e);
  w(function() {
    c.current = e;
  }, [e]), w(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var s = Ge([e.lockRef.current], (e.shards || []).map(Re), !0).filter(Boolean);
      return s.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), s.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = L(function(s, m) {
    if ("touches" in s && s.touches.length === 2 || s.type === "wheel" && s.ctrlKey)
      return !c.current.allowPinchZoom;
    var p = z(s), g = n.current, b = "deltaX" in s ? s.deltaX : g[0] - p[0], E = "deltaY" in s ? s.deltaY : g[1] - p[1], C, O = s.target, y = Math.abs(b) > Math.abs(E) ? "h" : "v";
    if ("touches" in s && y === "h" && O.type === "range")
      return !1;
    var I = window.getSelection(), k = I && I.anchorNode, j = k ? k === O || k.contains(O) : !1;
    if (j)
      return !1;
    var K = Ae(y, O);
    if (!K)
      return !0;
    if (K ? C = y : (C = y === "v" ? "h" : "v", K = Ae(y, O)), !K)
      return !1;
    if (!r.current && "changedTouches" in s && (b || E) && (r.current = C), !C)
      return !0;
    var pe = r.current || C;
    return dn(pe, m, s, pe === "h" ? b : E);
  }, []), f = L(function(s) {
    var m = s;
    if (!(!_.length || _[_.length - 1] !== a)) {
      var p = "deltaY" in m ? Te(m) : z(m), g = t.current.filter(function(C) {
        return C.name === m.type && (C.target === m.target || m.target === C.shadowParent) && fn(C.delta, p);
      })[0];
      if (g && g.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!g) {
        var b = (c.current.shards || []).map(Re).filter(Boolean).filter(function(C) {
          return C.contains(m.target);
        }), E = b.length > 0 ? i(m, b[0]) : !c.current.noIsolation;
        E && m.cancelable && m.preventDefault();
      }
    }
  }, []), u = L(function(s, m, p, g) {
    var b = { name: s, delta: m, target: p, should: g, shadowParent: pn(p) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== b;
      });
    }, 1);
  }, []), l = L(function(s) {
    n.current = z(s), r.current = void 0;
  }, []), d = L(function(s) {
    u(s.type, Te(s), s.target, i(s, e.lockRef.current));
  }, []), v = L(function(s) {
    u(s.type, z(s), s.target, i(s, e.lockRef.current));
  }, []);
  w(function() {
    return _.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", f, W), document.addEventListener("touchmove", f, W), document.addEventListener("touchstart", l, W), function() {
      _ = _.filter(function(s) {
        return s !== a;
      }), document.removeEventListener("wheel", f, W), document.removeEventListener("touchmove", f, W), document.removeEventListener("touchstart", l, W);
    };
  }, []);
  var h = e.removeScrollBar, S = e.inert;
  return N(
    he,
    null,
    S ? N(a, { styles: vn(o) }) : null,
    h ? N(rn, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function pn(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const yn = Kt(je, hn);
var gn = R(function(e, t) {
  return N(oe, x({}, e, { ref: t, sideCar: yn }));
});
gn.classNames = oe.classNames;
const Xe = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const bn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const En = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const Le = (e) => {
  const t = En(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var Sn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const wn = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Cn = R(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: c,
    ...i
  }, f) => N(
    "svg",
    {
      ref: f,
      ...Sn,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Xe("lucide", o),
      ...!a && !wn(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...c.map(([u, l]) => N(u, l)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const Pn = (e, t) => {
  const n = R(
    ({ className: r, ...o }, a) => N(Cn, {
      ref: a,
      iconNode: t,
      className: Xe(
        `lucide-${bn(Le(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Le(e), n;
};
const Nn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], kn = Pn("check", Nn);
export {
  kn as C,
  gt as D,
  Ot as F,
  Cn as I,
  re as P,
  gn as R,
  An as _,
  Dn as a,
  ae as b,
  Pn as c,
  Rn as d,
  nt as e,
  Ie as f,
  ne as g,
  Me as h,
  H as i,
  $ as j,
  Pt as k,
  Mn as l,
  In as m,
  at as n,
  xn as o,
  Tn as p,
  dt as q,
  Ln as u
};
//# sourceMappingURL=check-BMQmbjGF.mjs.map
