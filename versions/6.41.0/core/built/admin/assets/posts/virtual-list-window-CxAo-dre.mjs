import { j as C, T as V, u as T, U as B, F as H, b as I, K as N, m as K } from "./index-ccmRG8Rd.mjs";
import { B as U } from "./button-bsWyESEG.mjs";
const ht = ({ isLoading: l, onClick: r }) => {
  const t = !!l;
  return /* @__PURE__ */ C.jsx("div", { className: "flex justify-center px-4 py-6", children: /* @__PURE__ */ C.jsx(
    U,
    {
      disabled: t,
      variant: "outline",
      onClick: r,
      children: t ? "Loading more..." : "Load more"
    }
  ) });
};
function W(l) {
  const t = l instanceof HTMLElement && window.getComputedStyle(l).overflowY, e = t !== "visible" && t !== "hidden";
  if (l) {
    if (e && l.scrollHeight >= l.clientHeight)
      return l;
  } else return null;
  return W(l.parentNode) || document.body;
}
function x(l, r, t) {
  let e = t.initialDeps ?? [], s, n = !0;
  function i() {
    var o, a, c;
    let u;
    t.key && ((o = t.debug) != null && o.call(t)) && (u = Date.now());
    const d = l();
    if (!(d.length !== e.length || d.some((f, S) => e[S] !== f)))
      return s;
    e = d;
    let h;
    if (t.key && ((a = t.debug) != null && a.call(t)) && (h = Date.now()), s = r(...d), t.key && ((c = t.debug) != null && c.call(t))) {
      const f = Math.round((Date.now() - u) * 100) / 100, S = Math.round((Date.now() - h) * 100) / 100, g = S / 16, v = (p, w) => {
        for (p = String(p); p.length < w; )
          p = " " + p;
        return p;
      };
      console.info(
        `%c⏱ ${v(S, 5)} /${v(f, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * g, 120)
        )}deg 100% 31%);`,
        t?.key
      );
    }
    return t?.onChange && !(n && t.skipInitialOnChange) && t.onChange(s), n = !1, s;
  }
  return i.updateDeps = (o) => {
    e = o;
  }, i;
}
function z(l, r) {
  if (l === void 0)
    throw new Error("Unexpected undefined");
  return l;
}
const P = (l, r) => Math.abs(l - r) < 1.01, $ = (l, r, t) => {
  let e;
  return function(...s) {
    l.clearTimeout(e), e = l.setTimeout(() => r.apply(this, s), t);
  };
}, A = (l) => {
  const { offsetWidth: r, offsetHeight: t } = l;
  return { width: r, height: t };
}, q = (l) => l, Y = (l) => {
  const r = Math.max(l.startIndex - l.overscan, 0), t = Math.min(l.endIndex + l.overscan, l.count - 1), e = [];
  for (let s = r; s <= t; s++)
    e.push(s);
  return e;
}, X = (l, r) => {
  const t = l.scrollElement;
  if (!t)
    return;
  const e = l.targetWindow;
  if (!e)
    return;
  const s = (i) => {
    const { width: o, height: a } = i;
    r({ width: Math.round(o), height: Math.round(a) });
  };
  if (s(A(t)), !e.ResizeObserver)
    return () => {
    };
  const n = new e.ResizeObserver((i) => {
    const o = () => {
      const a = i[0];
      if (a?.borderBoxSize) {
        const c = a.borderBoxSize[0];
        if (c) {
          s({ width: c.inlineSize, height: c.blockSize });
          return;
        }
      }
      s(A(t));
    };
    l.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
  });
  return n.observe(t, { box: "border-box" }), () => {
    n.unobserve(t);
  };
}, R = {
  passive: !0
}, _ = typeof window > "u" ? !0 : "onscrollend" in window, Z = (l, r) => {
  const t = l.scrollElement;
  if (!t)
    return;
  const e = l.targetWindow;
  if (!e)
    return;
  let s = 0;
  const n = l.options.useScrollendEvent && _ ? () => {
  } : $(
    e,
    () => {
      r(s, !1);
    },
    l.options.isScrollingResetDelay
  ), i = (u) => () => {
    const { horizontal: d, isRtl: m } = l.options;
    s = d ? t.scrollLeft * (m && -1 || 1) : t.scrollTop, n(), r(s, u);
  }, o = i(!0), a = i(!1);
  t.addEventListener("scroll", o, R);
  const c = l.options.useScrollendEvent && _;
  return c && t.addEventListener("scrollend", a, R), () => {
    t.removeEventListener("scroll", o), c && t.removeEventListener("scrollend", a);
  };
}, G = (l, r, t) => {
  if (r?.borderBoxSize) {
    const e = r.borderBoxSize[0];
    if (e)
      return Math.round(
        e[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return l[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, J = (l, {
  adjustments: r = 0,
  behavior: t
}, e) => {
  var s, n;
  const i = l + r;
  (n = (s = e.scrollElement) == null ? void 0 : s.scrollTo) == null || n.call(s, {
    [e.options.horizontal ? "left" : "top"]: i,
    behavior: t
  });
};
class Q {
  constructor(r) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, e, s;
      return ((s = (e = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : e.now) == null ? void 0 : s.call(e)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const e = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((n) => {
          const i = () => {
            const o = n.target, a = this.indexFromElement(o);
            if (!o.isConnected) {
              this.observer.unobserve(o);
              return;
            }
            this.shouldMeasureDuringScroll(a) && this.resizeItem(
              a,
              this.options.measureElement(o, n, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = e()) == null || s.disconnect(), t = null;
        },
        observe: (s) => {
          var n;
          return (n = e()) == null ? void 0 : n.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var n;
          return (n = e()) == null ? void 0 : n.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([e, s]) => {
        typeof s > "u" && delete t[e];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: q,
        rangeExtractor: Y,
        onChange: () => {
        },
        measureElement: G,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        laneAssignmentMode: "estimate",
        ...t
      };
    }, this.notify = (t) => {
      var e, s;
      (s = (e = this.options).onChange) == null || s.call(e, this, t);
    }, this.maybeNotify = x(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (t) => {
        this.notify(t);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const e = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== e) {
        if (this.cleanup(), !e) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = e, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((s) => {
          this.observer.observe(s);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (s, n) => {
            this.scrollAdjustments = 0, this.scrollDirection = n ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = n, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, e) => {
      const s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
      for (let i = e - 1; i >= 0; i--) {
        const o = t[i];
        if (s.has(o.lane))
          continue;
        const a = n.get(
          o.lane
        );
        if (a == null || o.end > a.end ? n.set(o.lane, o) : o.end < a.end && s.set(o.lane, !0), s.size === this.options.lanes)
          break;
      }
      return n.size === this.options.lanes ? Array.from(n.values()).sort((i, o) => i.end === o.end ? i.index - o.index : i.end - o.end)[0] : void 0;
    }, this.getMeasurementOptions = x(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode
      ],
      (t, e, s, n, i, o, a) => (this.prevLanes !== void 0 && this.prevLanes !== o && (this.lanesChangedFlag = !0), this.prevLanes = o, this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: e,
        scrollMargin: s,
        getItemKey: n,
        enabled: i,
        lanes: o,
        laneAssignmentMode: a
      }),
      {
        key: !1
      }
    ), this.getMeasurements = x(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({
        count: t,
        paddingStart: e,
        scrollMargin: s,
        getItemKey: n,
        enabled: i,
        lanes: o,
        laneAssignmentMode: a
      }, c) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const h of this.laneAssignments.keys())
            h >= t && this.laneAssignments.delete(h);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((h) => {
          this.itemSizeCache.set(h.key, h.size);
        }));
        const u = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1);
        const d = this.measurementsCache.slice(0, u), m = new Array(o).fill(
          void 0
        );
        for (let h = 0; h < u; h++) {
          const f = d[h];
          f && (m[f.lane] = h);
        }
        for (let h = u; h < t; h++) {
          const f = n(h), S = this.laneAssignments.get(h);
          let g, v;
          const p = a === "estimate" || c.has(f);
          if (S !== void 0 && this.options.lanes > 1) {
            g = S;
            const b = m[g], O = b !== void 0 ? d[b] : void 0;
            v = O ? O.end + this.options.gap : e + s;
          } else {
            const b = this.options.lanes === 1 ? d[h - 1] : this.getFurthestMeasurement(d, h);
            v = b ? b.end + this.options.gap : e + s, g = b ? b.lane : h % this.options.lanes, this.options.lanes > 1 && p && this.laneAssignments.set(h, g);
          }
          const w = c.get(f), y = typeof w == "number" ? w : this.options.estimateSize(h), j = v + y;
          d[h] = {
            index: h,
            start: v,
            size: y,
            end: j,
            key: f,
            lane: g
          }, m[g] = h;
        }
        return this.measurementsCache = d, d;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = x(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, e, s, n) => this.range = t.length > 0 && e > 0 ? tt({
        measurements: t,
        outerSize: e,
        scrollOffset: s,
        lanes: n
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = x(
      () => {
        let t = null, e = null;
        const s = this.calculateRange();
        return s && (t = s.startIndex, e = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, e]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          e
        ];
      },
      (t, e, s, n, i) => n === null || i === null ? [] : t({
        startIndex: n,
        endIndex: i,
        overscan: e,
        count: s
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const e = this.options.indexAttribute, s = t.getAttribute(e);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${e}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var e;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const s = this.scrollState.index ?? ((e = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : e.index);
      if (s !== void 0 && this.range) {
        const n = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), i = Math.max(0, s - n), o = Math.min(
          this.options.count - 1,
          s + n
        );
        return t >= i && t <= o;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((i, o) => {
          i.isConnected || (this.observer.unobserve(i), this.elementsCache.delete(o));
        });
        return;
      }
      const e = this.indexFromElement(t), s = this.options.getItemKey(e), n = this.elementsCache.get(s);
      n !== t && (n && this.observer.unobserve(n), this.observer.observe(t), this.elementsCache.set(s, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(e) && this.resizeItem(e, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, e) => {
      var s;
      const n = this.measurementsCache[t];
      if (!n) return;
      const i = this.itemSizeCache.get(n.key) ?? n.size, o = e - i;
      o !== 0 && (((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(n, o, this) : n.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(n.index), this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, e)), this.notify(!1));
    }, this.getVirtualItems = x(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, e) => {
        const s = [];
        for (let n = 0, i = t.length; n < i; n++) {
          const o = t[n], a = e[o];
          s.push(a);
        }
        return s;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const e = this.getMeasurements();
      if (e.length !== 0)
        return z(
          e[k(
            0,
            e.length - 1,
            (s) => z(e[s]).start,
            t
          )]
        );
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const t = this.scrollElement.document.documentElement;
        return this.options.horizontal ? t.scrollWidth - this.scrollElement.innerWidth : t.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (t, e, s = 0) => {
      if (!this.scrollElement) return 0;
      const n = this.getSize(), i = this.getScrollOffset();
      e === "auto" && (e = t >= i + n ? "end" : "start"), e === "center" ? t += (s - n) / 2 : e === "end" && (t -= n);
      const o = this.getMaxScrollOffset();
      return Math.max(Math.min(o, t), 0);
    }, this.getOffsetForIndex = (t, e = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.getSize(), n = this.getScrollOffset(), i = this.measurementsCache[t];
      if (!i) return;
      if (e === "auto")
        if (i.end >= n + s - this.options.scrollPaddingEnd)
          e = "end";
        else if (i.start <= n + this.options.scrollPaddingStart)
          e = "start";
        else
          return [n, e];
      if (e === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), e];
      const o = e === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(o, e, i.size),
        e
      ];
    }, this.scrollToOffset = (t, { align: e = "start", behavior: s = "auto" } = {}) => {
      const n = this.getOffsetForAlignment(t, e), i = this.now();
      this.scrollState = {
        index: null,
        align: e,
        behavior: s,
        startedAt: i,
        lastTargetOffset: n,
        stableFrames: 0
      }, this._scrollToOffset(n, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: e = "auto",
      behavior: s = "auto"
    } = {}) => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const n = this.getOffsetForIndex(t, e);
      if (!n)
        return;
      const [i, o] = n, a = this.now();
      this.scrollState = {
        index: t,
        align: o,
        behavior: s,
        startedAt: a,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: e = "auto" } = {}) => {
      const s = this.getScrollOffset() + t, n = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: e,
        startedAt: n,
        lastTargetOffset: s,
        stableFrames: 0
      }, this._scrollToOffset(s, { adjustments: void 0, behavior: e }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var t;
      const e = this.getMeasurements();
      let s;
      if (e.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((t = e[e.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const n = Array(this.options.lanes).fill(null);
        let i = e.length - 1;
        for (; i >= 0 && n.some((o) => o === null); ) {
          const o = e[i];
          n[o.lane] === null && (n[o.lane] = o.end), i--;
        }
        s = Math.max(...n.filter((o) => o !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: e,
      behavior: s
    }) => {
      this.options.scrollToFn(t, { behavior: s, adjustments: e }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(r);
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const e = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, s = e ? e[0] : this.scrollState.lastTargetOffset, n = 1, i = s !== this.scrollState.lastTargetOffset;
    if (!i && P(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= n) {
        this.scrollState = null;
        return;
      }
    } else
      this.scrollState.stableFrames = 0, i && (this.scrollState.lastTargetOffset = s, this.scrollState.behavior = "auto", this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: "auto"
      }));
    this.scheduleScrollReconcile();
  }
}
const k = (l, r, t, e) => {
  for (; l <= r; ) {
    const s = (l + r) / 2 | 0, n = t(s);
    if (n < e)
      l = s + 1;
    else if (n > e)
      r = s - 1;
    else
      return s;
  }
  return l > 0 ? l - 1 : 0;
};
function tt({
  measurements: l,
  outerSize: r,
  scrollOffset: t,
  lanes: e
}) {
  const s = l.length - 1, n = (a) => l[a].start;
  if (l.length <= e)
    return {
      startIndex: 0,
      endIndex: s
    };
  let i = k(
    0,
    s,
    n,
    t
  ), o = i;
  if (e === 1)
    for (; o < s && l[o].end < t + r; )
      o++;
  else if (e > 1) {
    const a = Array(e).fill(0);
    for (; o < s && a.some((u) => u < t + r); ) {
      const u = l[o];
      a[u.lane] = u.end, o++;
    }
    const c = Array(e).fill(t + r);
    for (; i >= 0 && c.some((u) => u >= t); ) {
      const u = l[i];
      c[u.lane] = u.start, i--;
    }
    i = Math.max(0, i - i % e), o = Math.min(s, o + (e - 1 - o % e));
  }
  return { startIndex: i, endIndex: o };
}
const F = typeof document < "u" ? H : I;
function et({
  useFlushSync: l = !0,
  ...r
}) {
  const t = V(() => ({}), {})[1], e = {
    ...r,
    onChange: (n, i) => {
      var o;
      l && i ? B(t) : t(), (o = r.onChange) == null || o.call(r, n, i);
    }
  }, [s] = T(
    () => new Q(e)
  );
  return s.setOptions(e), F(() => s._didMount(), []), F(() => s._willUpdate()), s;
}
function st(l) {
  return et({
    observeElementRect: X,
    observeElementOffset: Z,
    scrollToFn: J,
    ...l
  });
}
function ct({
  items: l,
  totalItems: r,
  parentRef: t,
  hasNextPage: e,
  isFetchingNextPage: s,
  fetchNextPage: n,
  estimateSize: i = () => 100,
  overscan: o = 5
}) {
  const a = st({
    count: r,
    getScrollElement: () => W(t.current),
    estimateSize: i,
    overscan: o
  }), c = a.getVirtualItems(), u = c.length > 0 ? (c.at(0)?.start ?? 0) - a.options.scrollMargin : 0, d = c.length > 0 ? a.getTotalSize() - (c.at(-1)?.end ?? 0) : 0, m = c.map((f) => ({
    virtualItem: f,
    key: f.key,
    item: l[f.index],
    props: {
      ref: a.measureElement,
      "data-index": f.index
    }
  })), h = m.at(-1) && !m.at(-1)?.item;
  return I(() => {
    e && h && !s && n();
  }, [e, h, s, n]), {
    visibleItems: m,
    virtualizer: a,
    spaceBefore: u,
    spaceAfter: d
  };
}
const D = 1e3, M = "ghostVirtualListWindow";
function nt({
  totalItems: l,
  unlockedItemCount: r
}) {
  const t = Math.min(l, r);
  return {
    visibleItemCount: t,
    canLoadMore: l > t
  };
}
function it(l) {
  return l + D;
}
function ot(l, r) {
  return `${l}::${r}`;
}
function L(l, r, t = D) {
  const e = l?.[M];
  if (!e || typeof e != "object")
    return t;
  const s = e[r];
  return typeof s != "number" || !Number.isFinite(s) ? t : Math.max(1, Math.floor(s));
}
function lt(l, r, t) {
  if (typeof window > "u")
    return;
  const e = l?.[M], s = {
    ...l ?? {},
    [M]: {
      ...e && typeof e == "object" ? e : {},
      [r]: t
    }
  };
  window.history.replaceState(s, "");
}
function E() {
  if (!(typeof window > "u"))
    return window.history.state;
}
function ut(l, {
  resetKey: r
} = {}) {
  const { key: t, pathname: e, search: s } = N(), i = ot(e, r ?? s), [o, a] = T(() => L(E(), i)), c = K(i);
  I(() => {
    if (c.current !== i) {
      c.current = i, a(L(E(), i));
      return;
    }
    lt(E(), i, o);
  }, [i, t, o]);
  const { visibleItemCount: u, canLoadMore: d } = nt({
    totalItems: l,
    unlockedItemCount: o
  });
  return {
    visibleItemCount: u,
    canLoadMore: d,
    loadMore: () => a((m) => it(m))
  };
}
export {
  ht as L,
  ct as a,
  W as g,
  ut as u
};
//# sourceMappingURL=virtual-list-window-CxAo-dre.mjs.map
