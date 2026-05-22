import { G as Q, R as O, z as jt, P as We, b as qe, j as a, u as re, d as Ue, e as Ee, E as wt, o as He, m as L, h as P, k as W, c as Wt, A as qt, H as Ut, J as M, g as at } from "./index-BaZyVSji.mjs";
import { aO as $, aP as At, aQ as Ht, aR as St, aS as Qt, aT as ee, aU as Qe, aV as V, aW as K, aX as kt, aY as Ze, aZ as Je, a_ as Zt, a$ as Jt, b0 as de, b1 as se, b2 as Xt, b3 as er, b4 as tr, b5 as nt, b6 as rr, b7 as ie, b8 as ar, b9 as nr, ba as sr, bb as Oe, bc as ir, bd as or, be as lr, bf as we, bg as st, bh as cr, bi as dr, E as ye, bj as ur, B as Xe, aL as be, o as oe, l as pr, ao as fr, ap as mr, aq as hr, ar as Ae, m as br, bk as U, x as je, z as pe, bl as gr, p as Z, S as Ot, F as xr, aA as vr, bm as yr, b as Pe, c as et, d as tt, e as rt, bn as _t, bo as Pt, bp as Nt, bq as Tt, br as Ke, f as Ne, bs as Dt, bt as Ct, bu as jr, bv as wr, bw as Ar, bx as Sr, by as kr, bz as it, bA as Or, bB as _r, bC as Pr, J as Nr, K as Tr, N as Dr, O as Cr, Q as Er, R as Rr } from "./stats-B-gFnH1Q.mjs";
import { S as Mr, k as Lr, a as $r, b as Ir, c as Br, d as Fr, f as Kr, g as Gr, h as Vr, C as ne, i as zr, l as Yr } from "./content-helpers-7pEeER2n.mjs";
import { T as Et, a as Rt, K as Se, c as q, d as Wr, b as ke } from "./kpi-tabs-CBvDpw6h.mjs";
import { T as ge, a as G, b as I, c as qr, d as Mt, e as Lt, f as H, S as ue, B as Ur } from "./sort-button-BniR-fiz.mjs";
import { g as Ie, u as Hr } from "./use-growth-stats-Ro09fx4n.mjs";
import { b as Qr, d as Zr } from "./audience-DNHbvZ_-.mjs";
var Jr = ["points", "className", "baseLinePoints", "connectNulls"];
function le() {
  return le = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, le.apply(this, arguments);
}
function Xr(t, e) {
  if (t == null) return {};
  var n = ea(t, e), r, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (s = 0; s < o.length; s++)
      r = o[s], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function ea(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function ot(t) {
  return na(t) || aa(t) || ra(t) || ta();
}
function ta() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ra(t, e) {
  if (t) {
    if (typeof t == "string") return Ge(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ge(t, e);
  }
}
function aa(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function na(t) {
  if (Array.isArray(t)) return Ge(t);
}
function Ge(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var lt = function(e) {
  return e && e.x === +e.x && e.y === +e.y;
}, sa = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = [[]];
  return e.forEach(function(r) {
    lt(r) ? n[n.length - 1].push(r) : n[n.length - 1].length > 0 && n.push([]);
  }), lt(e[0]) && n[n.length - 1].push(e[0]), n[n.length - 1].length <= 0 && (n = n.slice(0, -1)), n;
}, xe = function(e, n) {
  var r = sa(e);
  n && (r = [r.reduce(function(o, i) {
    return [].concat(ot(o), ot(i));
  }, [])]);
  var s = r.map(function(o) {
    return o.reduce(function(i, d, f) {
      return "".concat(i).concat(f === 0 ? "M" : "L").concat(d.x, ",").concat(d.y);
    }, "");
  }).join("");
  return r.length === 1 ? "".concat(s, "Z") : s;
}, ia = function(e, n, r) {
  var s = xe(e, r);
  return "".concat(s.slice(-1) === "Z" ? s.slice(0, -1) : s, "L").concat(xe(n.reverse(), r).slice(1));
}, oa = function(e) {
  var n = e.points, r = e.className, s = e.baseLinePoints, o = e.connectNulls, i = Xr(e, Jr);
  if (!n || !n.length)
    return null;
  var d = Q("recharts-polygon", r);
  if (s && s.length) {
    var f = i.stroke && i.stroke !== "none", u = ia(n, s, o);
    return /* @__PURE__ */ O.createElement("g", {
      className: d
    }, /* @__PURE__ */ O.createElement("path", le({}, $(i, !0), {
      fill: u.slice(-1) === "Z" ? i.fill : "none",
      stroke: "none",
      d: u
    })), f ? /* @__PURE__ */ O.createElement("path", le({}, $(i, !0), {
      fill: "none",
      d: xe(n, o)
    })) : null, f ? /* @__PURE__ */ O.createElement("path", le({}, $(i, !0), {
      fill: "none",
      d: xe(s, o)
    })) : null);
  }
  var c = xe(n, o);
  return /* @__PURE__ */ O.createElement("path", le({}, $(i, !0), {
    fill: c.slice(-1) === "Z" ? i.fill : "none",
    className: d,
    d: c
  }));
}, Be, ct;
function la() {
  if (ct) return Be;
  ct = 1;
  var t = At(), e = Ht(), n = St();
  function r(s, o) {
    return s && s.length ? t(s, n(o, 2), e) : void 0;
  }
  return Be = r, Be;
}
var ca = la();
const da = /* @__PURE__ */ jt(ca);
var Fe, dt;
function ua() {
  if (dt) return Fe;
  dt = 1;
  var t = At(), e = St(), n = Qt();
  function r(s, o) {
    return s && s.length ? t(s, e(o, 2), n) : void 0;
  }
  return Fe = r, Fe;
}
var pa = ua();
const fa = /* @__PURE__ */ jt(pa);
var ma = ["cx", "cy", "angle", "ticks", "axisLine"], ha = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function fe(t) {
  "@babel/helpers - typeof";
  return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fe(t);
}
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ve.apply(this, arguments);
}
function ut(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function J(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ut(Object(n), !0).forEach(function(r) {
      Re(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ut(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function pt(t, e) {
  if (t == null) return {};
  var n = ba(t, e), r, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (s = 0; s < o.length; s++)
      r = o[s], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function ba(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function ga(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ft(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, It(r.key), r);
  }
}
function xa(t, e, n) {
  return e && ft(t.prototype, e), n && ft(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function va(t, e, n) {
  return e = Te(e), ya(t, $t() ? Reflect.construct(e, n || [], Te(t).constructor) : e.apply(t, n));
}
function ya(t, e) {
  if (e && (fe(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ja(t);
}
function ja(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function $t() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($t = function() {
    return !!t;
  })();
}
function Te(t) {
  return Te = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Te(t);
}
function wa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ve(t, e);
}
function Ve(t, e) {
  return Ve = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, s) {
    return r.__proto__ = s, r;
  }, Ve(t, e);
}
function Re(t, e, n) {
  return e = It(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function It(t) {
  var e = Aa(t, "string");
  return fe(e) == "symbol" ? e : e + "";
}
function Aa(t, e) {
  if (fe(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (fe(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Me = /* @__PURE__ */ (function(t) {
  function e() {
    return ga(this, e), va(this, e, arguments);
  }
  return wa(e, t), xa(e, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(r) {
        var s = r.coordinate, o = this.props, i = o.angle, d = o.cx, f = o.cy;
        return V(d, f, s, i);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var r = this.props.orientation, s;
      switch (r) {
        case "left":
          s = "end";
          break;
        case "right":
          s = "start";
          break;
        default:
          s = "middle";
          break;
      }
      return s;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var r = this.props, s = r.cx, o = r.cy, i = r.angle, d = r.ticks, f = da(d, function(c) {
        return c.coordinate || 0;
      }), u = fa(d, function(c) {
        return c.coordinate || 0;
      });
      return {
        cx: s,
        cy: o,
        startAngle: i,
        endAngle: i,
        innerRadius: u.coordinate || 0,
        outerRadius: f.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var r = this.props, s = r.cx, o = r.cy, i = r.angle, d = r.ticks, f = r.axisLine, u = pt(r, ma), c = d.reduce(function(g, p) {
        return [Math.min(g[0], p.coordinate), Math.max(g[1], p.coordinate)];
      }, [1 / 0, -1 / 0]), b = V(s, o, c[0], i), v = V(s, o, c[1], i), m = J(J(J({}, $(u, !1)), {}, {
        fill: "none"
      }, $(f, !1)), {}, {
        x1: b.x,
        y1: b.y,
        x2: v.x,
        y2: v.y
      });
      return /* @__PURE__ */ O.createElement("line", ve({
        className: "recharts-polar-radius-axis-line"
      }, m));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var r = this, s = this.props, o = s.ticks, i = s.tick, d = s.angle, f = s.tickFormatter, u = s.stroke, c = pt(s, ha), b = this.getTickTextAnchor(), v = $(c, !1), m = $(i, !1), g = o.map(function(p, x) {
        var A = r.getTickValueCoord(p), l = J(J(J(J({
          textAnchor: b,
          transform: "rotate(".concat(90 - d, ", ").concat(A.x, ", ").concat(A.y, ")")
        }, v), {}, {
          stroke: "none",
          fill: u
        }, m), {}, {
          index: x
        }, A), {}, {
          payload: p
        });
        return /* @__PURE__ */ O.createElement(K, ve({
          className: Q("recharts-polar-radius-axis-tick", kt(i)),
          key: "tick-".concat(p.coordinate)
        }, Ze(r.props, p, x)), e.renderTickItem(i, l, f ? f(p.value, x) : p.value));
      });
      return /* @__PURE__ */ O.createElement(K, {
        className: "recharts-polar-radius-axis-ticks"
      }, g);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, s = r.ticks, o = r.axisLine, i = r.tick;
      return !s || !s.length ? null : /* @__PURE__ */ O.createElement(K, {
        className: Q("recharts-polar-radius-axis", this.props.className)
      }, o && this.renderAxisLine(), i && this.renderTicks(), Je.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(r, s, o) {
      var i;
      return /* @__PURE__ */ O.isValidElement(r) ? i = /* @__PURE__ */ O.cloneElement(r, s) : ee(r) ? i = r(s) : i = /* @__PURE__ */ O.createElement(Qe, ve({}, s, {
        className: "recharts-polar-radius-axis-tick-value"
      }), o), i;
    }
  }]);
})(We);
Re(Me, "displayName", "PolarRadiusAxis");
Re(Me, "axisType", "radiusAxis");
Re(Me, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function me(t) {
  "@babel/helpers - typeof";
  return me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, me(t);
}
function te() {
  return te = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, te.apply(this, arguments);
}
function mt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function X(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? mt(Object(n), !0).forEach(function(r) {
      Le(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Sa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ht(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Ft(r.key), r);
  }
}
function ka(t, e, n) {
  return e && ht(t.prototype, e), n && ht(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Oa(t, e, n) {
  return e = De(e), _a(t, Bt() ? Reflect.construct(e, n || [], De(t).constructor) : e.apply(t, n));
}
function _a(t, e) {
  if (e && (me(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Pa(t);
}
function Pa(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Bt() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Bt = function() {
    return !!t;
  })();
}
function De(t) {
  return De = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, De(t);
}
function Na(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ze(t, e);
}
function ze(t, e) {
  return ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, s) {
    return r.__proto__ = s, r;
  }, ze(t, e);
}
function Le(t, e, n) {
  return e = Ft(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ft(t) {
  var e = Ta(t, "string");
  return me(e) == "symbol" ? e : e + "";
}
function Ta(t, e) {
  if (me(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (me(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Da = Math.PI / 180, bt = 1e-5, $e = /* @__PURE__ */ (function(t) {
  function e() {
    return Sa(this, e), Oa(this, e, arguments);
  }
  return Na(e, t), ka(e, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(r) {
        var s = this.props, o = s.cx, i = s.cy, d = s.radius, f = s.orientation, u = s.tickSize, c = u || 8, b = V(o, i, d, r.coordinate), v = V(o, i, d + (f === "inner" ? -1 : 1) * c, r.coordinate);
        return {
          x1: b.x,
          y1: b.y,
          x2: v.x,
          y2: v.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(r) {
      var s = this.props.orientation, o = Math.cos(-r.coordinate * Da), i;
      return o > bt ? i = s === "outer" ? "start" : "end" : o < -bt ? i = s === "outer" ? "end" : "start" : i = "middle", i;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var r = this.props, s = r.cx, o = r.cy, i = r.radius, d = r.axisLine, f = r.axisLineType, u = X(X({}, $(this.props, !1)), {}, {
        fill: "none"
      }, $(d, !1));
      if (f === "circle")
        return /* @__PURE__ */ O.createElement(Zt, te({
          className: "recharts-polar-angle-axis-line"
        }, u, {
          cx: s,
          cy: o,
          r: i
        }));
      var c = this.props.ticks, b = c.map(function(v) {
        return V(s, o, i, v.coordinate);
      });
      return /* @__PURE__ */ O.createElement(oa, te({
        className: "recharts-polar-angle-axis-line"
      }, u, {
        points: b
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var r = this, s = this.props, o = s.ticks, i = s.tick, d = s.tickLine, f = s.tickFormatter, u = s.stroke, c = $(this.props, !1), b = $(i, !1), v = X(X({}, c), {}, {
        fill: "none"
      }, $(d, !1)), m = o.map(function(g, p) {
        var x = r.getTickLineCoord(g), A = r.getTickTextAnchor(g), l = X(X(X({
          textAnchor: A
        }, c), {}, {
          stroke: "none",
          fill: u
        }, b), {}, {
          index: p,
          payload: g,
          x: x.x2,
          y: x.y2
        });
        return /* @__PURE__ */ O.createElement(K, te({
          className: Q("recharts-polar-angle-axis-tick", kt(i)),
          key: "tick-".concat(g.coordinate)
        }, Ze(r.props, g, p)), d && /* @__PURE__ */ O.createElement("line", te({
          className: "recharts-polar-angle-axis-tick-line"
        }, v, x)), i && e.renderTickItem(i, l, f ? f(g.value, p) : g.value));
      });
      return /* @__PURE__ */ O.createElement(K, {
        className: "recharts-polar-angle-axis-ticks"
      }, m);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, s = r.ticks, o = r.radius, i = r.axisLine;
      return o <= 0 || !s || !s.length ? null : /* @__PURE__ */ O.createElement(K, {
        className: Q("recharts-polar-angle-axis", this.props.className)
      }, i && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(r, s, o) {
      var i;
      return /* @__PURE__ */ O.isValidElement(r) ? i = /* @__PURE__ */ O.cloneElement(r, s) : ee(r) ? i = r(s) : i = /* @__PURE__ */ O.createElement(Qe, te({}, s, {
        className: "recharts-polar-angle-axis-tick-value"
      }), o), i;
    }
  }]);
})(We);
Le($e, "displayName", "PolarAngleAxis");
Le($e, "axisType", "angleAxis");
Le($e, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var _e;
function he(t) {
  "@babel/helpers - typeof";
  return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, he(t);
}
function ce() {
  return ce = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ce.apply(this, arguments);
}
function gt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function C(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gt(Object(n), !0).forEach(function(r) {
      F(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gt(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ca(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xt(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Gt(r.key), r);
  }
}
function Ea(t, e, n) {
  return e && xt(t.prototype, e), n && xt(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Ra(t, e, n) {
  return e = Ce(e), Ma(t, Kt() ? Reflect.construct(e, n || [], Ce(t).constructor) : e.apply(t, n));
}
function Ma(t, e) {
  if (e && (he(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return La(t);
}
function La(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Kt() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Kt = function() {
    return !!t;
  })();
}
function Ce(t) {
  return Ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ce(t);
}
function $a(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ye(t, e);
}
function Ye(t, e) {
  return Ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, s) {
    return r.__proto__ = s, r;
  }, Ye(t, e);
}
function F(t, e, n) {
  return e = Gt(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Gt(t) {
  var e = Ia(t, "string");
  return he(e) == "symbol" ? e : e + "";
}
function Ia(t, e) {
  if (he(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (he(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var z = /* @__PURE__ */ (function(t) {
  function e(n) {
    var r;
    return Ca(this, e), r = Ra(this, e, [n]), F(r, "pieRef", null), F(r, "sectorRefs", []), F(r, "id", nr("recharts-pie-")), F(r, "handleAnimationEnd", function() {
      var s = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), ee(s) && s();
    }), F(r, "handleAnimationStart", function() {
      var s = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), ee(s) && s();
    }), r.state = {
      isAnimationFinished: !n.isAnimationActive,
      prevIsAnimationActive: n.isAnimationActive,
      prevAnimationId: n.animationId,
      sectorToFocus: 0
    }, r;
  }
  return $a(e, t), Ea(e, [{
    key: "isActiveIndex",
    value: function(r) {
      var s = this.props.activeIndex;
      return Array.isArray(s) ? s.indexOf(r) !== -1 : r === s;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var r = this.props.activeIndex;
      return Array.isArray(r) ? r.length !== 0 : r || r === 0;
    }
  }, {
    key: "renderLabels",
    value: function(r) {
      var s = this.props.isAnimationActive;
      if (s && !this.state.isAnimationFinished)
        return null;
      var o = this.props, i = o.label, d = o.labelLine, f = o.dataKey, u = o.valueKey, c = $(this.props, !1), b = $(i, !1), v = $(d, !1), m = i && i.offsetRadius || 20, g = r.map(function(p, x) {
        var A = (p.startAngle + p.endAngle) / 2, l = V(p.cx, p.cy, p.outerRadius + m, A), h = C(C(C(C({}, c), p), {}, {
          stroke: "none"
        }, b), {}, {
          index: x,
          textAnchor: e.getTextAnchor(l.x, p.cx)
        }, l), _ = C(C(C(C({}, c), p), {}, {
          fill: "none",
          stroke: p.fill
        }, v), {}, {
          index: x,
          points: [V(p.cx, p.cy, p.outerRadius, A), l]
        }), w = f;
        return de(f) && de(u) ? w = "value" : de(f) && (w = u), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ O.createElement(K, {
          key: "label-".concat(p.startAngle, "-").concat(p.endAngle, "-").concat(p.midAngle, "-").concat(x)
        }, d && e.renderLabelLineItem(d, _, "line"), e.renderLabelItem(i, h, se(p, w)));
      });
      return /* @__PURE__ */ O.createElement(K, {
        className: "recharts-pie-labels"
      }, g);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(r) {
      var s = this, o = this.props, i = o.activeShape, d = o.blendStroke, f = o.inactiveShape;
      return r.map(function(u, c) {
        if (u?.startAngle === 0 && u?.endAngle === 0 && r.length !== 1) return null;
        var b = s.isActiveIndex(c), v = f && s.hasActiveIndex() ? f : null, m = b ? i : v, g = C(C({}, u), {}, {
          stroke: d ? u.fill : u.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ O.createElement(K, ce({
          ref: function(x) {
            x && !s.sectorRefs.includes(x) && s.sectorRefs.push(x);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Ze(s.props, u, c), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(u?.startAngle, "-").concat(u?.endAngle, "-").concat(u.midAngle, "-").concat(c)
        }), /* @__PURE__ */ O.createElement(Xt, ce({
          option: m,
          isActive: b,
          shapeType: "sector"
        }, g)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var r = this, s = this.props, o = s.sectors, i = s.isAnimationActive, d = s.animationBegin, f = s.animationDuration, u = s.animationEasing, c = s.animationId, b = this.state, v = b.prevSectors, m = b.prevIsAnimationActive;
      return /* @__PURE__ */ O.createElement(er, {
        begin: d,
        duration: f,
        isActive: i,
        easing: u,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(c, "-").concat(m),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(g) {
        var p = g.t, x = [], A = o && o[0], l = A.startAngle;
        return o.forEach(function(h, _) {
          var w = v && v[_], k = _ > 0 ? tr(h, "paddingAngle", 0) : 0;
          if (w) {
            var N = nt(w.endAngle - w.startAngle, h.endAngle - h.startAngle), y = C(C({}, h), {}, {
              startAngle: l + k,
              endAngle: l + N(p) + k
            });
            x.push(y), l = y.endAngle;
          } else {
            var j = h.endAngle, S = h.startAngle, E = nt(0, j - S), D = E(p), B = C(C({}, h), {}, {
              startAngle: l + k,
              endAngle: l + D + k
            });
            x.push(B), l = B.endAngle;
          }
        }), /* @__PURE__ */ O.createElement(K, null, r.renderSectorsStatically(x));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(r) {
      var s = this;
      r.onkeydown = function(o) {
        if (!o.altKey)
          switch (o.key) {
            case "ArrowLeft": {
              var i = ++s.state.sectorToFocus % s.sectorRefs.length;
              s.sectorRefs[i].focus(), s.setState({
                sectorToFocus: i
              });
              break;
            }
            case "ArrowRight": {
              var d = --s.state.sectorToFocus < 0 ? s.sectorRefs.length - 1 : s.state.sectorToFocus % s.sectorRefs.length;
              s.sectorRefs[d].focus(), s.setState({
                sectorToFocus: d
              });
              break;
            }
            case "Escape": {
              s.sectorRefs[s.state.sectorToFocus].blur(), s.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var r = this.props, s = r.sectors, o = r.isAnimationActive, i = this.state.prevSectors;
      return o && s && s.length && (!i || !rr(i, s)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(s);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, s = this.props, o = s.hide, i = s.sectors, d = s.className, f = s.label, u = s.cx, c = s.cy, b = s.innerRadius, v = s.outerRadius, m = s.isAnimationActive, g = this.state.isAnimationFinished;
      if (o || !i || !i.length || !ie(u) || !ie(c) || !ie(b) || !ie(v))
        return null;
      var p = Q("recharts-pie", d);
      return /* @__PURE__ */ O.createElement(K, {
        tabIndex: this.props.rootTabIndex,
        className: p,
        ref: function(A) {
          r.pieRef = A;
        }
      }, this.renderSectors(), f && this.renderLabels(i), Je.renderCallByParent(this.props, null, !1), (!m || g) && ar.renderCallByParent(this.props, i, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, s) {
      return s.prevIsAnimationActive !== r.isAnimationActive ? {
        prevIsAnimationActive: r.isAnimationActive,
        prevAnimationId: r.animationId,
        curSectors: r.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : r.isAnimationActive && r.animationId !== s.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curSectors: r.sectors,
        prevSectors: s.curSectors,
        isAnimationFinished: !0
      } : r.sectors !== s.curSectors ? {
        curSectors: r.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(r, s) {
      return r > s ? "start" : r < s ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(r, s, o) {
      if (/* @__PURE__ */ O.isValidElement(r))
        return /* @__PURE__ */ O.cloneElement(r, s);
      if (ee(r))
        return r(s);
      var i = Q("recharts-pie-label-line", typeof r != "boolean" ? r.className : "");
      return /* @__PURE__ */ O.createElement(Jt, ce({}, s, {
        key: o,
        type: "linear",
        className: i
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(r, s, o) {
      if (/* @__PURE__ */ O.isValidElement(r))
        return /* @__PURE__ */ O.cloneElement(r, s);
      var i = o;
      if (ee(r) && (i = r(s), /* @__PURE__ */ O.isValidElement(i)))
        return i;
      var d = Q("recharts-pie-label-text", typeof r != "boolean" && !ee(r) ? r.className : "");
      return /* @__PURE__ */ O.createElement(Qe, ce({}, s, {
        alignmentBaseline: "middle",
        className: d
      }), i);
    }
  }]);
})(We);
_e = z;
F(z, "displayName", "Pie");
F(z, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !sr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
F(z, "parseDeltaAngle", function(t, e) {
  var n = Oe(e - t), r = Math.min(Math.abs(e - t), 360);
  return n * r;
});
F(z, "getRealPieData", function(t) {
  var e = t.data, n = t.children, r = $(t, !1), s = ir(n, or);
  return e && e.length ? e.map(function(o, i) {
    return C(C(C({
      payload: o
    }, r), o), s && s[i] && s[i].props);
  }) : s && s.length ? s.map(function(o) {
    return C(C({}, r), o.props);
  }) : [];
});
F(z, "parseCoordinateOfPie", function(t, e) {
  var n = e.top, r = e.left, s = e.width, o = e.height, i = lr(s, o), d = r + we(t.cx, s, s / 2), f = n + we(t.cy, o, o / 2), u = we(t.innerRadius, i, 0), c = we(t.outerRadius, i, i * 0.8), b = t.maxRadius || Math.sqrt(s * s + o * o) / 2;
  return {
    cx: d,
    cy: f,
    innerRadius: u,
    outerRadius: c,
    maxRadius: b
  };
});
F(z, "getComposedData", function(t) {
  var e = t.item, n = t.offset, r = e.type.defaultProps !== void 0 ? C(C({}, e.type.defaultProps), e.props) : e.props, s = _e.getRealPieData(r);
  if (!s || !s.length)
    return null;
  var o = r.cornerRadius, i = r.startAngle, d = r.endAngle, f = r.paddingAngle, u = r.dataKey, c = r.nameKey, b = r.valueKey, v = r.tooltipType, m = Math.abs(r.minAngle), g = _e.parseCoordinateOfPie(r, n), p = _e.parseDeltaAngle(i, d), x = Math.abs(p), A = u;
  de(u) && de(b) ? (st(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), A = "value") : de(u) && (st(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), A = b);
  var l = s.filter(function(y) {
    return se(y, A, 0) !== 0;
  }).length, h = (x >= 360 ? l : l - 1) * f, _ = x - l * m - h, w = s.reduce(function(y, j) {
    var S = se(j, A, 0);
    return y + (ie(S) ? S : 0);
  }, 0), k;
  if (w > 0) {
    var N;
    k = s.map(function(y, j) {
      var S = se(y, A, 0), E = se(y, c, j), D = (ie(S) ? S : 0) / w, B;
      j ? B = N.endAngle + Oe(p) * f * (S !== 0 ? 1 : 0) : B = i;
      var T = B + Oe(p) * ((S !== 0 ? m : 0) + D * _), R = (B + T) / 2, Y = (g.innerRadius + g.outerRadius) / 2, ae = [{
        name: E,
        value: S,
        payload: y,
        dataKey: A,
        type: v
      }], Yt = V(g.cx, g.cy, Y, R);
      return N = C(C(C({
        percent: D,
        cornerRadius: o,
        name: E,
        tooltipPayload: ae,
        midAngle: R,
        middleRadius: Y,
        tooltipPosition: Yt
      }, y), g), {}, {
        value: se(y, A),
        startAngle: B,
        endAngle: T,
        payload: y,
        paddingAngle: Oe(p) * f
      }), N;
    });
  }
  return C(C({}, g), {}, {
    sectors: k,
    data: s
  });
});
var Ba = cr({
  chartName: "PieChart",
  GraphicalChild: z,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: $e
  }, {
    axisType: "radiusAxis",
    AxisComp: Me
  }],
  formatAxisMap: dr,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
const Vt = ({ className: t }) => {
  const e = qe();
  return /* @__PURE__ */ a.jsx(
    ye,
    {
      actions: /* @__PURE__ */ a.jsx(Xe, { variant: "outline", onClick: () => e("/settings/analytics", { crossApp: !0 }), children: "Open settings" }),
      className: t,
      description: "Enable member source tracking in settings to see which content drives member growth.",
      title: "Member sources have been disabled",
      children: /* @__PURE__ */ a.jsx(ur, {})
    }
  );
}, Fa = (t) => t === "total-members" || t === "free-members" || t === "paid-members" || t === "mrr", Ka = ({ active: t, payload: e, range: n, color: r, showBreakdown: s, showGift: o }) => {
  if (!t || !e?.length)
    return null;
  const i = e[0].payload, { date: d, formattedValue: f, label: u, comped: c, gift: b } = i, v = i.value - (c || 0) - (o && b || 0);
  return /* @__PURE__ */ a.jsxs("div", { className: "min-w-[200px] rounded-lg border bg-background px-3 py-2 shadow-lg", children: [
    d && /* @__PURE__ */ a.jsx("div", { className: "mb-1 text-sm text-foreground", children: U(d, n || 0) }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1", children: [
      s && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ a.jsxs("div", { className: "flex grow items-center justify-between gap-5", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-sm text-muted-foreground", children: "Paid subscriptions" }),
          /* @__PURE__ */ a.jsx("div", { className: "font-mono text-xs", children: P(v) })
        ] }) }),
        o && /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ a.jsxs("div", { className: "flex grow items-center justify-between gap-5", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-sm text-muted-foreground", children: "Gift subscriptions" }),
          /* @__PURE__ */ a.jsx("div", { className: "font-mono text-xs", children: b !== void 0 && b > 0 ? P(b) : "0" })
        ] }) }),
        /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ a.jsxs("div", { className: "flex grow items-center justify-between gap-5", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-sm text-muted-foreground", children: "Complimentary" }),
          /* @__PURE__ */ a.jsx("div", { className: "font-mono text-xs", children: c !== void 0 && c > 0 ? P(c) : "0" })
        ] }) }),
        /* @__PURE__ */ a.jsx(Mr, {})
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsx("span", { className: "inline-block size-2 rounded-full opacity-50", style: { backgroundColor: r || "var(--chart-purple)" } }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex grow items-center justify-between gap-5", children: [
          u && /* @__PURE__ */ a.jsx("div", { className: "text-sm text-muted-foreground", children: u }),
          /* @__PURE__ */ a.jsx("div", { className: "font-mono font-medium", children: f })
        ] })
      ] })
    ] })
  ] });
}, Ga = ({ chartData: t, totals: e, initialTab: n, currencySymbol: r, isLoading: s, onTabChange: o }) => {
  const i = Fa(n) ? n : "total-members", [d, f] = re(i), { range: u, data: c } = Ue(), { appSettings: b } = Ee(), v = c?.labs?.giftSubscriptions === !0, m = qe(), [g] = wt();
  He(() => {
    f(i);
  }, [i]);
  const p = (j) => {
    f(j);
    const S = new URLSearchParams(g);
    S.set("tab", j), m(`?${S.toString()}`, { replace: !0 }), o && o(j);
  }, { totalMembers: x, freeMembers: A, paidMembers: l, mrr: h, percentChanges: _, directions: w } = e, k = L(() => {
    if (!t || t.length === 0)
      return [];
    let j = [], S = "value";
    switch (d) {
      case "free-members":
        S = "free";
        break;
      case "paid-members":
        S = "paid";
        break;
      case "mrr": {
        S = "mrr";
        break;
      }
      default:
        S = "value";
    }
    j = be(t, u, S, "exact");
    let E = [];
    switch (d) {
      case "free-members":
        E = j.map((D) => ({
          ...D,
          value: D.free,
          formattedValue: P(D.free),
          label: "Free members"
        }));
        break;
      case "paid-members":
        E = j.map((D) => ({
          ...D,
          value: D.paid,
          formattedValue: P(D.paid),
          label: "Paid members",
          comped: D.comped,
          gift: D.gift,
          paid_subscribed: D.paid_subscribed
        }));
        break;
      case "mrr":
        E = j.map((D) => ({
          ...D,
          value: oe(D.mrr),
          formattedValue: `${r}${P(oe(D.mrr))}`,
          label: "MRR"
        }));
        break;
      default:
        E = j.map((D) => {
          const B = D.free + D.paid;
          return {
            ...D,
            value: B,
            formattedValue: P(B),
            label: "Total members"
          };
        });
    }
    return E;
  }, [d, t, u, r]), N = {
    "total-members": {
      color: "var(--chart-darkblue)"
    },
    "free-members": {
      color: "var(--chart-blue)"
    },
    "paid-members": {
      color: "var(--chart-purple)"
    },
    mrr: {
      color: "var(--chart-teal)"
    }
  };
  return s ? /* @__PURE__ */ a.jsx("div", { className: "-mb-6 flex h-[calc(16vw+132px)] w-full items-start justify-center", children: /* @__PURE__ */ a.jsx(pr, {}) }) : /* @__PURE__ */ a.jsxs(Et, { defaultValue: i, variant: "kpis", children: [
    /* @__PURE__ */ a.jsxs(Rt, { className: `-mx-6 ${b?.paidMembersEnabled ? "hidden grid-cols-4 lg:visible! lg:grid!" : "grid grid-cols-4"}`, children: [
      /* @__PURE__ */ a.jsx(Se, { className: b?.paidMembersEnabled ? "" : "cursor-auto after:hidden", value: "total-members", onClick: () => {
        b?.paidMembersEnabled && p("total-members");
      }, children: /* @__PURE__ */ a.jsx(
        q,
        {
          color: "var(--chart-darkblue)",
          diffDirection: u === W.allTime.value ? "hidden" : w.total,
          diffValue: _.total,
          label: "Total members",
          value: P(x)
        }
      ) }),
      b?.paidMembersEnabled && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Se, { value: "free-members", onClick: () => {
          p("free-members");
        }, children: /* @__PURE__ */ a.jsx(
          q,
          {
            color: "var(--chart-blue)",
            diffDirection: u === W.allTime.value ? "hidden" : w.free,
            diffValue: _.free,
            label: "Free members",
            value: P(A)
          }
        ) }),
        /* @__PURE__ */ a.jsx(Se, { value: "paid-members", onClick: () => {
          p("paid-members");
        }, children: /* @__PURE__ */ a.jsx(
          q,
          {
            color: "var(--chart-purple)",
            diffDirection: u === W.allTime.value ? "hidden" : w.paid,
            diffValue: _.paid,
            label: "Paid members",
            value: P(l)
          }
        ) }),
        /* @__PURE__ */ a.jsx(Se, { value: "mrr", onClick: () => {
          p("mrr");
        }, children: /* @__PURE__ */ a.jsx(
          q,
          {
            color: "var(--chart-teal)",
            diffDirection: u === W.allTime.value ? "hidden" : w.mrr,
            diffValue: _.mrr,
            label: "MRR",
            value: `${r}${P(oe(h))}`
          }
        ) })
      ] })
    ] }),
    b?.paidMembersEnabled && /* @__PURE__ */ a.jsxs(fr, { children: [
      /* @__PURE__ */ a.jsx(mr, { className: "lg:hidden", asChild: !0, children: /* @__PURE__ */ a.jsxs(Wr, { children: [
        d === "total-members" && /* @__PURE__ */ a.jsx(
          q,
          {
            color: "var(--chart-darkblue)",
            diffDirection: u === W.allTime.value ? "hidden" : w.total,
            diffValue: _.total,
            label: "Total members",
            value: P(x)
          }
        ),
        d === "free-members" && /* @__PURE__ */ a.jsx(
          q,
          {
            color: "var(--chart-blue)",
            diffDirection: u === W.allTime.value ? "hidden" : w.free,
            diffValue: _.free,
            label: "Free members",
            value: P(A)
          }
        ),
        d === "paid-members" && /* @__PURE__ */ a.jsx(
          q,
          {
            color: "var(--chart-purple)",
            diffDirection: u === W.allTime.value ? "hidden" : w.paid,
            diffValue: _.paid,
            label: "Paid members",
            value: P(l)
          }
        ),
        d === "mrr" && /* @__PURE__ */ a.jsx(
          q,
          {
            color: "var(--chart-teal)",
            diffDirection: u === W.allTime.value ? "hidden" : w.mrr,
            diffValue: _.mrr,
            label: "MRR",
            value: `${r}${P(oe(h))}`
          }
        )
      ] }) }),
      /* @__PURE__ */ a.jsxs(hr, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ a.jsx(Ae, { onClick: () => p("total-members"), children: "Total members" }),
        /* @__PURE__ */ a.jsx(Ae, { onClick: () => p("free-members"), children: "Free members" }),
        /* @__PURE__ */ a.jsx(Ae, { onClick: () => p("paid-members"), children: "Paid members" }),
        /* @__PURE__ */ a.jsx(Ae, { onClick: () => p("mrr"), children: "MRR" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "my-4 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: /* @__PURE__ */ a.jsx(
      br,
      {
        className: "-mb-3 h-[16vw] max-h-[320px] w-full min-h-[180px]",
        color: N[d].color,
        data: k,
        dataFormatter: d === "mrr" ? (j) => `${r}${P(j)}` : P,
        id: d,
        range: u,
        tooltipContent: d === "paid-members" ? /* @__PURE__ */ a.jsx(Ka, { color: N["paid-members"].color, range: u, showBreakdown: !0, showGift: v }) : void 0
      }
    ) })
  ] });
}, Va = Wt({
  dataType: "TopSourcesGrowthResponseType",
  path: "/stats/top-sources-growth"
}), za = (t, e = "signups desc", n = 50) => {
  const { startDate: r, endDate: s, timezone: o } = je(t), i = {
    date_from: pe(r),
    date_to: pe(s),
    member_status: Qr(qt),
    order: e,
    limit: n.toString()
  };
  return o && (i.timezone = o), Va({ searchParams: i });
}, vt = ({ data: t, currencySymbol: e, limit: n, defaultSourceIconUrl: r }) => {
  const s = n ? t.slice(0, n) : t, { appSettings: o } = Ee();
  return /* @__PURE__ */ a.jsx(ge, { children: s.map((i) => /* @__PURE__ */ a.jsxs(G, { className: "last:border-none", children: [
    /* @__PURE__ */ a.jsx(I, { className: "font-medium", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ a.jsx(
        Vr,
        {
          defaultSourceIconUrl: r,
          displayName: i.displayName,
          iconSrc: i.iconSrc
        }
      ),
      i.linkUrl ? /* @__PURE__ */ a.jsx(
        "a",
        {
          className: "hover:underline",
          href: i.linkUrl,
          rel: "noreferrer",
          target: "_blank",
          children: i.displayName
        }
      ) : /* @__PURE__ */ a.jsx("span", { children: i.displayName })
    ] }) }),
    /* @__PURE__ */ a.jsxs(I, { className: "text-right font-mono text-sm", children: [
      "+",
      P(i.free_members)
    ] }),
    o?.paidMembersEnabled && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(I, { className: "text-right font-mono text-sm", children: [
        "+",
        P(i.paid_members)
      ] }),
      /* @__PURE__ */ a.jsxs(I, { className: "text-right font-mono text-sm", children: [
        "+",
        e,
        P(oe(i.mrr))
      ] })
    ] })
  ] }, i.source)) });
}, Ya = ({
  range: t,
  limit: e = 20,
  showViewAll: n = !1,
  sortBy: r,
  setSortBy: s
}) => {
  const { data: o } = Ue(), { data: i } = gr(), { appSettings: d } = Ee(), [f, u] = re("free_members desc"), c = r || f, b = s || u, v = c.replace("free_members", "signups").replace("paid_members", "paid_conversions"), { data: m, isLoading: g } = za(t, v, e), p = o?.url, x = "https://www.google.com/s2/favicons?domain=ghost.org&sz=64", A = O.useMemo(() => {
    if (i?.stats && i?.meta?.totals) {
      const w = i.meta.totals;
      let k = w[0];
      if (!k)
        return Ie("usd");
      for (const N of w)
        N.mrr > k.mrr && (k = N);
      return Ie(k.currency);
    }
    return Ie("usd");
  }, [i]), l = O.useMemo(() => m?.stats ? m.stats.map((w) => {
    const k = w.source || "Direct", { domain: N } = Lr(k, p), y = N ? `https://www.faviconextractor.com/favicon/${N}?larger=true` : x, j = N && k !== "Direct" ? `https://${N}` : void 0;
    return {
      source: k,
      free_members: w.signups,
      // Backend returns 'signups', we map to 'free_members' for display
      paid_members: w.paid_conversions,
      // Backend returns 'paid_conversions', we map to 'paid_members' for display
      mrr: w.mrr,
      iconSrc: y,
      displayName: k,
      linkUrl: j
    };
  }) : [], [m, p]), h = "Top sources", _ = `Where did your growth come from ${Z(t)}`;
  return d?.analytics.membersTrackSources ? g ? /* @__PURE__ */ a.jsx(ge, { children: /* @__PURE__ */ a.jsx(G, { className: "last:border-none", children: /* @__PURE__ */ a.jsx(I, { className: "border-none py-2", colSpan: 1, children: /* @__PURE__ */ a.jsx(Ot, { containerClassName: "space-y-2", count: 5, maxWidth: 75, randomize: !0 }) }) }) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    l.length > 0 ? /* @__PURE__ */ a.jsx(
      vt,
      {
        currencySymbol: A,
        data: l,
        defaultSourceIconUrl: x,
        limit: e
      }
    ) : /* @__PURE__ */ a.jsx(ge, { children: /* @__PURE__ */ a.jsx(G, { className: "last:border-none", children: /* @__PURE__ */ a.jsx(I, { className: "border-none py-12 group-hover:bg-transparent!", colSpan: d?.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ a.jsx(
      ye,
      {
        description: "Try adjusting your date range to see more data.",
        title: `No conversions ${Z(t)}`,
        children: /* @__PURE__ */ a.jsx(xr, { strokeWidth: 1.5 })
      }
    ) }) }) }),
    n && l.length > e && /* @__PURE__ */ a.jsx(qr, { className: "border-none bg-transparent hover:bg-transparent!", children: /* @__PURE__ */ a.jsx(G, { children: /* @__PURE__ */ a.jsx(I, { className: "border-none bg-transparent px-0 pb-0 hover:bg-transparent!", colSpan: 4, children: /* @__PURE__ */ a.jsxs($r, { children: [
      /* @__PURE__ */ a.jsx(Ir, { asChild: !0, children: /* @__PURE__ */ a.jsxs(Xe, { variant: "outline", children: [
        "View all ",
        /* @__PURE__ */ a.jsx(vr, {})
      ] }) }),
      /* @__PURE__ */ a.jsxs(Br, { className: "overflow-y-auto pt-0 sm:max-w-[600px]", children: [
        /* @__PURE__ */ a.jsxs(Fr, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: [
          /* @__PURE__ */ a.jsx(Kr, { children: h }),
          /* @__PURE__ */ a.jsx(Gr, { children: _ })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "group/datalist", children: /* @__PURE__ */ a.jsxs(Mt, { children: [
          /* @__PURE__ */ a.jsx(Lt, { children: /* @__PURE__ */ a.jsxs(G, { children: [
            /* @__PURE__ */ a.jsx(H, { children: "Source" }),
            /* @__PURE__ */ a.jsx(H, { className: "w-[110px] text-right", children: /* @__PURE__ */ a.jsx(ue, { activeSortBy: c, setSortBy: b, sortBy: "free_members desc", children: "Free members" }) }),
            d?.paidMembersEnabled && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(H, { className: "w-[110px] text-right", children: /* @__PURE__ */ a.jsx(ue, { activeSortBy: c, setSortBy: b, sortBy: "paid_members desc", children: "Paid members" }) }),
              /* @__PURE__ */ a.jsx(H, { className: "w-[110px] text-right", children: /* @__PURE__ */ a.jsx(ue, { activeSortBy: c, setSortBy: b, sortBy: "mrr desc", children: "MRR impact" }) })
            ] })
          ] }) }),
          /* @__PURE__ */ a.jsx(
            vt,
            {
              currencySymbol: A,
              data: l,
              defaultSourceIconUrl: x
            }
          )
        ] }) })
      ] })
    ] }) }) }) })
  ] }) : /* @__PURE__ */ a.jsx(ge, { children: /* @__PURE__ */ a.jsx(G, { className: "last:border-none", children: /* @__PURE__ */ a.jsx(I, { className: "border-none py-12 group-hover:bg-transparent!", colSpan: d?.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ a.jsx(Vt, {}) }) }) });
}, Wa = "TiersResponseType", qa = Ut({
  dataType: Wa,
  path: "/tiers/",
  defaultNextPageParams: (t, e) => ({
    ...e,
    page: (t.meta?.pagination.next || 1).toString()
  }),
  returnData: (t) => {
    const { pages: e } = t, n = e.flatMap((s) => s.tiers), r = e[e.length - 1].meta;
    return {
      tiers: n,
      meta: r,
      isEnd: r ? r.pagination.pages === r.pagination.page : !0
    };
  }
}), Ua = ({ active: t, payload: e }) => {
  if (t && e && e.length) {
    const n = e[0];
    return /* @__PURE__ */ a.jsx("div", { className: "rounded-lg border bg-background p-2 shadow-sm", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "size-2 rounded-full opacity-50",
          style: { backgroundColor: n.payload.color }
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: n.name }),
      /* @__PURE__ */ a.jsx("span", { className: "font-mono", children: P(n.value) })
    ] }) });
  }
  return null;
}, Ha = ({ isLoading: t, range: e }) => {
  const { data: n } = yr(), { data: { tiers: r = [] } = {} } = qa(), [s, o] = re("billing-period"), { startDate: i, endDate: d } = L(() => je(e), [e]), f = L(() => pe(i), [i]), u = L(() => pe(d), [d]), c = L(() => r.filter((l) => l.type === "paid" && l.active).map((l) => ({
    id: l.id,
    name: l.name
  })), [r]), b = L(() => {
    if (!n?.stats)
      return [];
    const l = M(f), h = M(u), _ = n.stats.filter((k) => {
      const N = M(k.date);
      return N.isSameOrAfter(l) && N.isSameOrBefore(h);
    }).reduce((k, N) => {
      const y = N.cadence;
      return k[y] || (k[y] = 0), k[y] += N.signups, k;
    }, {});
    return Object.entries(_).map(([k, N], y) => {
      let j = k, S = "url(#gradientPurple)", E = "var(--chart-purple)";
      return k === "month" ? (j = "Monthly", S = "url(#gradientPurple)", E = "var(--chart-purple)") : k === "year" && (j = "Annual", S = "url(#gradientTeal)", E = "var(--chart-teal)"), {
        id: `cadence-${y}`,
        name: j,
        count: N,
        fill: S,
        color: E
      };
    });
  }, [n, f, u]), v = L(() => {
    if (!n?.stats || c.length === 0)
      return [];
    const l = M(f), h = M(u), _ = n.stats.filter((j) => {
      const S = M(j.date);
      return S.isSameOrAfter(l) && S.isSameOrBefore(h);
    }).reduce((j, S) => {
      const E = S.tier;
      return j[E] || (j[E] = 0), j[E] += S.signups, j;
    }, {}), w = [
      { gradient: "url(#gradientPurple)", solid: "var(--chart-purple)" },
      { gradient: "url(#gradientTeal)", solid: "var(--chart-teal)" },
      { gradient: "url(#gradientBlue)", solid: "var(--chart-blue)" },
      { gradient: "url(#gradientRose)", solid: "var(--chart-rose)" },
      { gradient: "url(#gradientOrange)", solid: "var(--chart-orange)" },
      { gradient: "url(#gradientGreen)", solid: "var(--chart-green)" },
      { gradient: "url(#gradientAmber)", solid: "var(--chart-amber)" },
      { gradient: "url(#gradientYellow)", solid: "var(--chart-yellow)" },
      { gradient: "url(#gradientDarkblue)", solid: "var(--chart-darkblue)" },
      { gradient: "url(#gradientGray)", solid: "var(--chart-darkgray)" }
    ];
    return [...c.map((j) => {
      const S = _[j.id] || 0;
      return {
        id: j.id,
        name: j.name,
        count: S
      };
    })].sort((j, S) => S.count - j.count).map((j, S) => {
      const E = S % w.length;
      return {
        ...j,
        fill: w[E].gradient,
        color: w[E].solid
      };
    });
  }, [n, c, f, u]), m = s === "billing-period" ? b : v, g = L(() => m.reduce((l, h) => l + h.count, 0), [m]), p = L(() => {
    const l = {
      count: {
        label: "Subscriptions"
      }
    };
    return m.forEach((h) => {
      l[h.id] = {
        label: h.name,
        color: h.color
      };
    }), l;
  }, [m]), x = L(() => g === 0 ? [] : m.map((l) => ({
    label: l.name,
    count: l.count,
    percentage: l.count / g * 100,
    color: l.color
  })), [m, g]);
  if (t || !n?.stats)
    return null;
  const A = m.length > 0 && g > 0;
  return /* @__PURE__ */ a.jsxs(Pe, { children: [
    /* @__PURE__ */ a.jsx(et, { children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start justify-between gap-1.5", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ a.jsx(tt, { children: "Paid subscription breakdown" }),
        /* @__PURE__ */ a.jsxs(rt, { children: [
          "New paid subscriptions ",
          Z(e)
        ] })
      ] }),
      c.length > 1 && /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsxs(_t, { value: s, onValueChange: (l) => o(l), children: [
        /* @__PURE__ */ a.jsx(Pt, { className: "w-full", children: /* @__PURE__ */ a.jsx(Nt, {}) }),
        /* @__PURE__ */ a.jsxs(Tt, { align: "end", children: [
          /* @__PURE__ */ a.jsx(Ke, { value: "billing-period", children: "Billing period" }),
          /* @__PURE__ */ a.jsx(Ke, { value: "tiers", children: "Tiers" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ a.jsx(Ne, { children: A ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        Dt,
        {
          className: "mx-auto aspect-square h-[250px] min-h-[250px] w-full",
          config: p,
          children: /* @__PURE__ */ a.jsxs(Ba, { children: [
            /* @__PURE__ */ a.jsxs("defs", { children: [
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientPurple", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-purple)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-purple)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientTeal", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-teal)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-teal)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientRose", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-rose)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-rose)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientBlue", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-blue)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-blue)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientOrange", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-orange)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-orange)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientGreen", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-green)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-green)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientAmber", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-amber)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-amber)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientYellow", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-yellow)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-yellow)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientDarkblue", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-darkblue)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-darkblue)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientGray", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-darkgray)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-darkgray)", stopOpacity: 0.6 })
              ] })
            ] }),
            /* @__PURE__ */ a.jsx(
              Ct,
              {
                content: /* @__PURE__ */ a.jsx(Ua, {}),
                cursor: !1
              }
            ),
            /* @__PURE__ */ a.jsx(
              z,
              {
                animationBegin: 0,
                animationDuration: 1e3,
                data: m,
                dataKey: "count",
                innerRadius: 70,
                nameKey: "name",
                strokeWidth: 5,
                children: /* @__PURE__ */ a.jsx(
                  Je,
                  {
                    content: ({ viewBox: l }) => {
                      if (l && "cx" in l && "cy" in l)
                        return /* @__PURE__ */ a.jsxs(
                          "text",
                          {
                            dominantBaseline: "middle",
                            textAnchor: "middle",
                            x: l.cx,
                            y: l.cy,
                            children: [
                              /* @__PURE__ */ a.jsx(
                                "tspan",
                                {
                                  className: "fill-foreground text-2xl font-semibold tracking-tight",
                                  x: l.cx,
                                  y: l.cy,
                                  children: P(g)
                                }
                              ),
                              /* @__PURE__ */ a.jsx(
                                "tspan",
                                {
                                  className: "fill-muted-foreground",
                                  x: l.cx,
                                  y: (l.cy || 0) + 20,
                                  children: "Total"
                                }
                              )
                            ]
                          }
                        );
                    }
                  }
                )
              }
            )
          ] })
        }
      ),
      x.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-muted-foreground", children: x.map((l) => /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsx(
          "span",
          {
            className: "size-2 rounded-full opacity-50",
            style: { backgroundColor: l.color }
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "max-w-[150px] truncate whitespace-nowrap", title: l.label, children: l.label }),
        /* @__PURE__ */ a.jsxs("span", { className: "font-medium text-foreground", children: [
          Math.round(Number(l.percentage) || 0),
          "%"
        ] })
      ] }, l.label)) })
    ] }) : /* @__PURE__ */ a.jsx("div", { className: "py-12", children: /* @__PURE__ */ a.jsx(
      ye,
      {
        description: `No new paid subscriptions ${Z(e)}.`,
        title: "No new subscribers",
        children: /* @__PURE__ */ a.jsx(jr, { strokeWidth: 1.5 })
      }
    ) }) })
  ] });
}, Qa = (t, e, n) => {
  if (e === 1) {
    const c = M().format("YYYY-MM-DD"), b = t.find((v) => v.date === c);
    return [{
      date: c,
      signups: b?.signups || 0,
      cancellations: b?.cancellations || 0
    }];
  }
  const { startDate: r, endDate: s } = je(e), o = M(s).diff(M(r), "days"), i = _r(e, o, "sum", n), d = new Map(t.map((c) => [c.date, c])), f = [], u = /* @__PURE__ */ new Set();
  if (i === "monthly") {
    const c = M(r).startOf("month"), b = M(s).startOf("month");
    for (; c.isSameOrBefore(b); ) {
      const v = c.format("YYYY-MM-DD");
      if (!u.has(v)) {
        u.add(v);
        const m = d.get(v);
        m ? f.push(m) : f.push({
          date: v,
          signups: 0,
          cancellations: 0
        });
      }
      c.add(1, "month");
    }
  } else if (i === "weekly") {
    const c = M(r).startOf("week"), b = M(s).startOf("week");
    for (; c.isSameOrBefore(b); ) {
      const v = c.format("YYYY-MM-DD");
      if (!u.has(v)) {
        u.add(v);
        const m = d.get(v);
        m ? f.push(m) : f.push({
          date: v,
          signups: 0,
          cancellations: 0
        });
      }
      c.add(1, "week");
    }
  } else {
    const c = M(r), b = M(s);
    for (; c.isSameOrBefore(b); ) {
      const v = c.format("YYYY-MM-DD"), m = d.get(v);
      m ? f.push(m) : f.push({
        date: v,
        signups: 0,
        cancellations: 0
      }), c.add(1, "day");
    }
  }
  return f;
}, zt = (t) => {
  if (t === -1) {
    const { startDate: e, endDate: n } = je(t);
    return M(n).diff(M(e), "days");
  }
  return t;
}, Za = (t) => {
  const e = zt(t);
  return e < 30 ? ["daily"] : e >= 91 ? ["weekly", "monthly"] : ["daily", "weekly"];
}, yt = (t) => {
  const e = zt(t);
  return e < 30 ? "daily" : e >= 91 ? "monthly" : "weekly";
}, Ja = ({
  subscriptionData: t,
  memberData: e,
  range: n,
  isLoading: r
}) => {
  const [s, o] = re(() => yt(n));
  He(() => {
    o(yt(n));
  }, [n]);
  const i = L(() => Za(n), [n]), d = L(() => {
    switch (s) {
      case "daily":
        return "none";
      case "weekly":
        return "weekly";
      case "monthly":
        return "monthly";
    }
  }, [s]), f = L(() => {
    if (t && t.length > 0) {
      if (n === 1) {
        const h = M().format("YYYY-MM-DD"), _ = t.find((w) => w.date === h);
        return [{
          date: U(h, n),
          rawDate: h,
          // Keep raw date for dynamic tooltip formatting
          new: _?.signups || 0,
          cancelled: -(_?.cancellations || 0)
          // Negative for the stacked bar chart
        }];
      }
      const m = be(t, n, "signups", "sum", d), g = be(t, n, "cancellations", "sum", d), p = new Map(g.map((h) => [h.date, h])), x = m.map((h) => ({
        date: h.date,
        signups: h.signups || 0,
        cancellations: p.get(h.date)?.cancellations || 0
      })), A = new Set(x.map((h) => h.date));
      return g.forEach((h) => {
        A.has(h.date) || x.push({
          date: h.date,
          signups: 0,
          cancellations: h.cancellations || 0
        });
      }), x.sort((h, _) => new Date(h.date).getTime() - new Date(_.date).getTime()), Qa(x, n, d).map((h) => {
        let _ = n;
        return s === "weekly" && n < 91 ? _ = 91 : s === "monthly" && n < 365 && (_ = 365), {
          date: U(h.date, _),
          rawDate: h.date,
          // Keep raw date for dynamic tooltip formatting
          new: h.signups || 0,
          cancelled: -(h.cancellations || 0)
          // Negative for the stacked bar chart
        };
      });
    } else {
      if (!e || e.length === 0)
        return [];
      if (n === 1) {
        const l = M().format("YYYY-MM-DD"), h = e.find((_) => _.date === l);
        return [{
          date: U(l, n),
          rawDate: l,
          // Keep raw date for dynamic tooltip formatting
          new: h?.paid_subscribed || 0,
          cancelled: -(h?.paid_canceled || 0)
          // Negative for the stacked bar chart
        }];
      }
      const m = be(e, n, "paid_subscribed", "sum", d), g = be(e, n, "paid_canceled", "sum", d), p = new Map(g.map((l) => [l.date, l])), x = m.map((l) => ({
        date: l.date,
        paid_subscribed: l.paid_subscribed || 0,
        paid_canceled: p.get(l.date)?.paid_canceled || 0
      })), A = new Set(x.map((l) => l.date));
      return g.forEach((l) => {
        A.has(l.date) || x.push({
          date: l.date,
          paid_subscribed: 0,
          paid_canceled: l.paid_canceled || 0
        });
      }), x.sort((l, h) => new Date(l.date).getTime() - new Date(h.date).getTime()), x.map((l) => {
        let h = n;
        return s === "weekly" && n < 91 ? h = 91 : s === "monthly" && n < 365 && (h = 365), {
          date: U(l.date, h),
          rawDate: l.date,
          // Keep raw date for dynamic tooltip formatting
          new: l.paid_subscribed || 0,
          cancelled: -(l.paid_canceled || 0)
          // Negative for the stacked bar chart
        };
      });
    }
  }, [e, t, n, d, s]), u = {
    new: {
      label: "New",
      color: "var(--chart-teal)"
    },
    cancelled: {
      label: "Cancelled",
      color: "var(--chart-rose)"
    }
  }, c = L(() => {
    const m = f.reduce((p, x) => p + x.new, 0), g = f.reduce((p, x) => p + Math.abs(x.cancelled), 0);
    return { new: m, cancelled: g };
  }, [f]);
  if (r)
    return null;
  const b = f.length > 0 && (c.new > 0 || c.cancelled > 0), v = (m) => m.charAt(0).toUpperCase() + m.slice(1);
  return /* @__PURE__ */ a.jsxs(Pe, { "data-testid": "paid-members-change-card", children: [
    /* @__PURE__ */ a.jsx(et, { children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start justify-between gap-1.5", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ a.jsx(tt, { children: "Paid subscriptions" }),
        /* @__PURE__ */ a.jsxs(rt, { children: [
          "New and cancelled paid subscriptions ",
          Z(n)
        ] })
      ] }),
      i.length > 1 && /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsxs(_t, { value: s, onValueChange: (m) => o(m), children: [
        /* @__PURE__ */ a.jsx(Pt, { className: "w-[110px]", children: /* @__PURE__ */ a.jsx(Nt, {}) }),
        /* @__PURE__ */ a.jsx(Tt, { align: "end", children: i.map((m) => /* @__PURE__ */ a.jsx(Ke, { value: m, children: v(m) }, m)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ a.jsx(Ne, { children: b ? /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx(Dt, { className: "aspect-auto h-[200px] w-full md:h-[220px] xl:h-[260px]", config: u, children: /* @__PURE__ */ a.jsxs(
        Ur,
        {
          data: f,
          stackOffset: "sign",
          children: [
            /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsxs("linearGradient", { id: "tealGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
              /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--color-new)", stopOpacity: 0.8 }),
              /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--color-new)", stopOpacity: 0.6 })
            ] }) }),
            /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsxs("linearGradient", { id: "roseGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
              /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--color-cancelled)", stopOpacity: 0.6 }),
              /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--color-cancelled)", stopOpacity: 0.8 })
            ] }) }),
            /* @__PURE__ */ a.jsx(wr, { stroke: "var(--border)", vertical: !1 }),
            /* @__PURE__ */ a.jsx(
              Ar,
              {
                axisLine: !1,
                dataKey: "date",
                tickFormatter: () => "",
                tickLine: !1,
                tickMargin: 10
              }
            ),
            /* @__PURE__ */ a.jsx(
              Sr,
              {
                axisLine: !1,
                tickFormatter: (m) => m < 0 ? P(m * -1) : P(m),
                tickLine: !1
              }
            ),
            /* @__PURE__ */ a.jsx(
              Ct,
              {
                content: /* @__PURE__ */ a.jsx(
                  kr,
                  {
                    className: "min-w-[120px]! px-3 py-2",
                    formatter: (m, g, p, x) => {
                      const A = Number(m);
                      let l = "0";
                      A === 0 ? l = "0" : l = A < 0 ? P(A * -1) : P(A);
                      const h = Number(p?.payload?.new || 0), _ = Number(p?.payload?.cancelled || 0), w = h + _, k = w === 0 ? "0" : w > 0 ? `+${P(w)}` : P(w);
                      let N = p?.payload?.date;
                      return p?.payload?.rawDate && (s === "monthly" ? N = U(p.payload.rawDate, 366) : s === "weekly" ? N = U(p.payload.rawDate, 91) : N = U(p.payload.rawDate, 30)), /* @__PURE__ */ a.jsxs("div", { className: "flex w-full flex-col", children: [
                        x === 0 && /* @__PURE__ */ a.jsx("div", { className: "mb-1 text-sm font-medium text-foreground", children: N }),
                        /* @__PURE__ */ a.jsxs("div", { className: "flex w-full items-center justify-between gap-4", children: [
                          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ a.jsx(
                              "div",
                              {
                                className: "size-2 shrink-0 rounded-full bg-[var(--color-bg)] opacity-50",
                                style: {
                                  "--color-bg": `var(--color-${g})`
                                }
                              }
                            ),
                            /* @__PURE__ */ a.jsx("span", { className: "text-sm text-muted-foreground", children: u[g]?.label || g })
                          ] }),
                          /* @__PURE__ */ a.jsx("div", { className: "ml-auto flex items-baseline gap-0.5 font-mono font-medium text-foreground tabular-nums", children: l })
                        ] }),
                        x === 1 && /* @__PURE__ */ a.jsxs("div", { className: "mt-1 flex w-full items-center justify-between gap-4 border-t pt-1", children: [
                          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-muted-foreground", children: "Net change" }),
                          /* @__PURE__ */ a.jsx("div", { className: "ml-auto flex items-baseline gap-0.5 font-mono font-medium text-foreground tabular-nums", children: k })
                        ] })
                      ] });
                    },
                    hideLabel: !0
                  }
                ),
                cursor: !1,
                isAnimationActive: !1,
                position: { y: 10 }
              }
            ),
            /* @__PURE__ */ a.jsx(
              it,
              {
                activeBar: { fillOpacity: 1 },
                dataKey: "new",
                fill: "url(#tealGradient)",
                fillOpacity: 0.75,
                maxBarSize: 32,
                minPointSize: 3,
                radius: [4, 4, 0, 0],
                stackId: "a"
              }
            ),
            /* @__PURE__ */ a.jsx(
              it,
              {
                activeBar: { fillOpacity: 1 },
                dataKey: "cancelled",
                fill: "url(#roseGradient)",
                fillOpacity: 0.75,
                maxBarSize: 32,
                radius: [4, 4, 0, 0],
                stackId: "a"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ a.jsxs("div", { className: "mt-3 flex items-center justify-center gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a.jsx(
            "span",
            {
              className: "size-2 rounded-full opacity-50",
              style: {
                backgroundColor: u.new.color
              }
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "New" }),
          /* @__PURE__ */ a.jsx("span", { className: "font-medium text-foreground", children: P(c.new) })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a.jsx(
            "span",
            {
              className: "size-2 rounded-full opacity-50",
              style: {
                backgroundColor: u.cancelled.color
              }
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "Cancelled" }),
          /* @__PURE__ */ a.jsx("span", { className: "font-medium text-foreground", children: P(c.cancelled) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ a.jsx("div", { className: "py-12", children: /* @__PURE__ */ a.jsx(
      ye,
      {
        description: `No paid subscription changes ${Z(n)}.`,
        title: "No paid member changes",
        children: /* @__PURE__ */ a.jsx(Or, { strokeWidth: 1.5 })
      }
    ) }) })
  ] });
}, Xa = (t, e, n) => {
  const r = t ?? 30, s = e ?? "mrr desc", { startDate: o, endDate: i } = L(() => je(r), [r]), d = L(() => {
    const c = {
      date_from: pe(o),
      date_to: pe(i),
      order: s
    };
    return n === "posts" ? c.post_type = "post" : n === "pages" && (c.post_type = "page"), c;
  }, [o, i, s, n]), f = Object.fromEntries(
    Object.entries(d).filter(([, c]) => c !== void 0)
  );
  return Pr({ searchParams: f });
}, ln = () => {
  const { range: t, site: e, settings: n } = Ue(), r = String(n.find((y) => y.key === "timezone")?.value || "Etc/UTC"), s = qe(), [o, i] = re("free_members desc"), [d, f] = re(ne.POSTS_AND_PAGES), [u] = wt(), { appSettings: c } = Ee(), b = u.get("tab") || "total-members", [v, m] = re(b);
  He(() => {
    b !== v && m(b);
  }, [b]);
  const { isLoading: g, chartData: p, totals: x, currencySymbol: A, subscriptionData: l } = Hr(t), { data: h, isLoading: _ } = Xa(
    t,
    o,
    d
  ), w = L(() => {
    const j = (h?.stats || []).reduce((T, R) => {
      const Y = R.post_id || (R.title && R.title.trim() !== "" ? R.title : R.attribution_url);
      if (!Y)
        return T;
      if (!T.has(Y))
        T.set(Y, R);
      else {
        const ae = T.get(Y);
        ae.free_members += R.free_members, ae.paid_members += R.paid_members, ae.mrr += R.mrr, T.set(Y, ae);
      }
      return T;
    }, /* @__PURE__ */ new Map()), S = Array.from(j.values()), E = S.reduce((T, R) => T + R.free_members, 0), D = S.reduce((T, R) => T + R.paid_members, 0), B = S.reduce((T, R) => T + R.mrr, 0);
    return S.map((T) => {
      let R = 0;
      return o.includes("free_members") && E > 0 ? R = T.free_members / E : o.includes("paid_members") && D > 0 ? R = T.paid_members / D : o.includes("mrr") && B > 0 && (R = T.mrr / B), {
        title: T.title || T.attribution_url,
        post_id: T.post_id,
        attribution_url: T.attribution_url,
        attribution_type: T.attribution_type,
        attribution_id: T.attribution_id,
        free_members: T.free_members,
        paid_members: T.paid_members,
        mrr: T.mrr,
        percentage: R,
        published_at: T.published_at,
        url_exists: T.url_exists ?? !0
      };
    });
  }, [h, o]), k = g, N = g || _;
  return /* @__PURE__ */ a.jsxs(Nr, { children: [
    /* @__PURE__ */ a.jsx(Tr, { children: /* @__PURE__ */ a.jsx(Dr, { children: /* @__PURE__ */ a.jsx(Cr, {}) }) }),
    /* @__PURE__ */ a.jsxs(Er, { data: k ? void 0 : p, isLoading: !1, loadingComponent: /* @__PURE__ */ a.jsx(a.Fragment, {}), children: [
      /* @__PURE__ */ a.jsx(Pe, { "data-testid": "total-members-card", children: /* @__PURE__ */ a.jsx(Ne, { children: /* @__PURE__ */ a.jsx(
        Ga,
        {
          chartData: p,
          currencySymbol: A,
          initialTab: b,
          isLoading: k,
          totals: x,
          onTabChange: m
        }
      ) }) }),
      c?.paidMembersEnabled && v === "paid-members" && /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-[2fr_minmax(460px,1fr)]", children: [
        /* @__PURE__ */ a.jsx(
          Ja,
          {
            isLoading: k,
            memberData: p,
            range: t,
            subscriptionData: l
          }
        ),
        /* @__PURE__ */ a.jsx(Ha, { isLoading: k, range: t })
      ] }),
      /* @__PURE__ */ a.jsxs(Pe, { className: "w-full overflow-x-auto", "data-testid": "top-content-card", children: [
        /* @__PURE__ */ a.jsxs(et, { children: [
          /* @__PURE__ */ a.jsx(tt, { children: zr(d) }),
          /* @__PURE__ */ a.jsx(rt, { children: Yr(d, t, Z) })
        ] }),
        /* @__PURE__ */ a.jsx(Ne, { children: /* @__PURE__ */ a.jsxs(Mt, { children: [
          /* @__PURE__ */ a.jsx(Lt, { children: /* @__PURE__ */ a.jsxs(G, { className: "[&>th]:h-auto [&>th]:pt-0 [&>th]:pb-2", children: [
            /* @__PURE__ */ a.jsx(H, { className: "min-w-[320px] pl-0", children: /* @__PURE__ */ a.jsx(Et, { defaultValue: d, variant: "button-sm", onValueChange: (y) => {
              f(y);
            }, children: /* @__PURE__ */ a.jsxs(Rt, { children: [
              /* @__PURE__ */ a.jsx(ke, { value: ne.POSTS_AND_PAGES, children: "Posts & pages" }),
              /* @__PURE__ */ a.jsx(ke, { value: ne.POSTS, children: "Posts" }),
              /* @__PURE__ */ a.jsx(ke, { value: ne.PAGES, children: "Pages" }),
              /* @__PURE__ */ a.jsx(ke, { value: ne.SOURCES, children: "Sources" })
            ] }) }) }),
            /* @__PURE__ */ a.jsx(H, { className: "w-[140px] text-right", children: c?.paidMembersEnabled ? /* @__PURE__ */ a.jsx(ue, { activeSortBy: o, setSortBy: i, sortBy: "free_members desc", children: "Free members" }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: "Free members" }) }),
            c?.paidMembersEnabled && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(H, { className: "w-[140px] text-right", children: /* @__PURE__ */ a.jsx(ue, { activeSortBy: o, setSortBy: i, sortBy: "paid_members desc", children: "Paid members" }) }),
              /* @__PURE__ */ a.jsx(H, { className: "w-[140px] text-right", children: /* @__PURE__ */ a.jsx(ue, { activeSortBy: o, setSortBy: i, sortBy: "mrr desc", children: "MRR impact" }) })
            ] })
          ] }) }),
          d === ne.SOURCES ? /* @__PURE__ */ a.jsx(
            Ya,
            {
              limit: 20,
              range: t,
              setSortBy: (y) => i(y),
              showViewAll: !0,
              sortBy: o
            }
          ) : /* @__PURE__ */ a.jsx(ge, { children: N ? /* @__PURE__ */ a.jsx(G, { className: "last:border-none", children: /* @__PURE__ */ a.jsx(I, { className: "border-none py-2", colSpan: 1, children: /* @__PURE__ */ a.jsx(Ot, { containerClassName: "space-y-2", count: 5, maxWidth: 75, randomize: !0 }) }) }) : c?.analytics.membersTrackSources ? w.length > 0 ? w.map((y, j) => /* @__PURE__ */ a.jsxs(G, { className: "last:border-none", children: [
            /* @__PURE__ */ a.jsx(I, { children: /* @__PURE__ */ a.jsxs("div", { className: "group/link inline-flex flex-col items-start gap-px", children: [
              y.post_id && y.attribution_type === "post" ? /* @__PURE__ */ a.jsx(
                Xe,
                {
                  className: "h-auto p-0 text-left leading-tight font-medium whitespace-normal hover:underline!",
                  title: "View post analytics",
                  variant: "link",
                  onClick: Zr(y.attribution_url, y.post_id, e.url || "", s, y.attribution_type),
                  children: y.title
                }
              ) : /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: y.title }),
              y.published_at && at && new Date(y.published_at).getTime() > 0 && /* @__PURE__ */ a.jsxs("span", { className: "text-muted-foreground", children: [
                "Published on ",
                at(y.published_at, r)
              ] })
            ] }) }),
            /* @__PURE__ */ a.jsxs(I, { className: "text-right font-mono text-sm", children: [
              y.free_members > 0 && "+",
              P(y.free_members)
            ] }),
            c?.paidMembersEnabled && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsxs(I, { className: "text-right font-mono text-sm", children: [
                y.paid_members > 0 && "+",
                P(y.paid_members)
              ] }),
              /* @__PURE__ */ a.jsxs(I, { className: "text-right font-mono text-sm", children: [
                y.mrr > 0 && "+",
                A,
                P(oe(y.mrr))
              ] })
            ] })
          ] }, `${d}-${y.post_id || `${y.title}-${j}`}`)) : /* @__PURE__ */ a.jsx(G, { className: "border-none", children: /* @__PURE__ */ a.jsx(I, { className: "py-12 group-hover:bg-transparent!", colSpan: c?.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ a.jsx(
            ye,
            {
              description: "Try adjusting your date range to see more data.",
              title: `No conversions ${Z(t)}`,
              children: /* @__PURE__ */ a.jsx(Rr, { strokeWidth: 1.5 })
            }
          ) }) }) : /* @__PURE__ */ a.jsx(G, { className: "last:border-none", children: /* @__PURE__ */ a.jsx(I, { className: "border-none py-12 group-hover:bg-transparent!", colSpan: c?.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ a.jsx(Vt, {}) }) }) })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  ln as default
};
//# sourceMappingURL=index-qoAmc_Yy.mjs.map
