import { u as cx, P as Ma, a as lx, b as yi, d as fx, e as dx, c as Ca } from "./check-BMQmbjGF.mjs";
import { p as Ie, j as z, m as Ur, b as Ia, w as Mn, i as ie, x as Xe, y as qt, n as se, R as E, P as zt, z as px, u as Tl, k as hx, a as El, A as xe, o as $a, B as $e, D as ht, C as vx, E as yx, c as fe, q as jl } from "./index-ccmRG8Rd.mjs";
import { i as Ra, a as gx } from "./value-kov4qFS9.mjs";
import { u as mx, R as bx, I as xx, f as em, c as wx } from "./skeleton-9GpF0jm6.mjs";
var Da = "Tabs", [_x] = fx(Da, [
  em
]), tm = em(), [Ox, Ml] = _x(Da), rm = Ie(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: a,
      defaultValue: i,
      orientation: o = "horizontal",
      dir: u,
      activationMode: s = "automatic",
      ...c
    } = e, f = mx(u), [l, d] = cx({
      prop: n,
      onChange: a,
      defaultProp: i ?? "",
      caller: Da
    });
    return /* @__PURE__ */ z.jsx(
      Ox,
      {
        scope: r,
        baseId: lx(),
        value: l,
        onValueChange: d,
        orientation: o,
        dir: f,
        activationMode: s,
        children: /* @__PURE__ */ z.jsx(
          Ma.div,
          {
            dir: f,
            "data-orientation": o,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
rm.displayName = Da;
var nm = "TabsList", am = Ie(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...a } = e, i = Ml(nm, r), o = tm(r);
    return /* @__PURE__ */ z.jsx(
      bx,
      {
        asChild: !0,
        ...o,
        orientation: i.orientation,
        dir: i.dir,
        loop: n,
        children: /* @__PURE__ */ z.jsx(
          Ma.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...a,
            ref: t
          }
        )
      }
    );
  }
);
am.displayName = nm;
var im = "TabsTrigger", om = Ie(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: a = !1, ...i } = e, o = Ml(im, r), u = tm(r), s = cm(o.baseId, n), c = lm(o.baseId, n), f = n === o.value;
    return /* @__PURE__ */ z.jsx(
      xx,
      {
        asChild: !0,
        ...u,
        focusable: !a,
        active: f,
        children: /* @__PURE__ */ z.jsx(
          Ma.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": c,
            "data-state": f ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: s,
            ...i,
            ref: t,
            onMouseDown: yi(e.onMouseDown, (l) => {
              !a && l.button === 0 && l.ctrlKey === !1 ? o.onValueChange(n) : l.preventDefault();
            }),
            onKeyDown: yi(e.onKeyDown, (l) => {
              [" ", "Enter"].includes(l.key) && o.onValueChange(n);
            }),
            onFocus: yi(e.onFocus, () => {
              const l = o.activationMode !== "manual";
              !f && !a && l && o.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
om.displayName = im;
var um = "TabsContent", sm = Ie(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: a, children: i, ...o } = e, u = Ml(um, r), s = cm(u.baseId, n), c = lm(u.baseId, n), f = n === u.value, l = Ur(f);
    return Ia(() => {
      const d = requestAnimationFrame(() => l.current = !1);
      return () => cancelAnimationFrame(d);
    }, []), /* @__PURE__ */ z.jsx(dx, { present: a || f, children: ({ present: d }) => /* @__PURE__ */ z.jsx(
      Ma.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": u.orientation,
        role: "tabpanel",
        "aria-labelledby": s,
        hidden: !d,
        id: c,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
          ...e.style,
          animationDuration: l.current ? "0s" : void 0
        },
        children: d && i
      }
    ) });
  }
);
sm.displayName = um;
function cm(e, t) {
  return `${e}-trigger-${t}`;
}
function lm(e, t) {
  return `${e}-content-${t}`;
}
var fm = rm, dm = am, Cl = om, pm = sm;
const Sx = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], vD = Ca("arrow-right", Sx);
const Ax = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], yD = Ca("arrow-up", Ax);
const Px = [
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ],
  ["path", { d: "M17 14V2", key: "8ymqnk" }]
], gD = Ca("thumbs-down", Px);
const Tx = [
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ],
  ["path", { d: "M7 10v12", key: "1qc93n" }]
], mD = Ca("thumbs-up", Tx);
var gi, $f;
function Re() {
  if ($f) return gi;
  $f = 1;
  var e = Array.isArray;
  return gi = e, gi;
}
var mi, Rf;
function hm() {
  if (Rf) return mi;
  Rf = 1;
  var e = typeof Mn == "object" && Mn && Mn.Object === Object && Mn;
  return mi = e, mi;
}
var bi, Df;
function at() {
  if (Df) return bi;
  Df = 1;
  var e = hm(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return bi = r, bi;
}
var xi, Nf;
function wn() {
  if (Nf) return xi;
  Nf = 1;
  var e = at(), t = e.Symbol;
  return xi = t, xi;
}
var wi, qf;
function Ex() {
  if (qf) return wi;
  qf = 1;
  var e = wn(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function i(o) {
    var u = r.call(o, a), s = o[a];
    try {
      o[a] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(o);
    return c && (u ? o[a] = s : delete o[a]), f;
  }
  return wi = i, wi;
}
var _i, kf;
function jx() {
  if (kf) return _i;
  kf = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return _i = r, _i;
}
var Oi, Lf;
function vt() {
  if (Lf) return Oi;
  Lf = 1;
  var e = wn(), t = Ex(), r = jx(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(u) {
    return u == null ? u === void 0 ? a : n : i && i in Object(u) ? t(u) : r(u);
  }
  return Oi = o, Oi;
}
var Si, Bf;
function yt() {
  if (Bf) return Si;
  Bf = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Si = e, Si;
}
var Ai, Ff;
function wr() {
  if (Ff) return Ai;
  Ff = 1;
  var e = vt(), t = yt(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return Ai = n, Ai;
}
var Pi, Uf;
function Il() {
  if (Uf) return Pi;
  Uf = 1;
  var e = Re(), t = wr(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var u = typeof i;
    return u == "number" || u == "symbol" || u == "boolean" || i == null || t(i) ? !0 : n.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return Pi = a, Pi;
}
var Ti, Wf;
function St() {
  if (Wf) return Ti;
  Wf = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Ti = e, Ti;
}
var Ei, zf;
function $l() {
  if (zf) return Ei;
  zf = 1;
  var e = vt(), t = St(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(u) {
    if (!t(u))
      return !1;
    var s = e(u);
    return s == n || s == a || s == r || s == i;
  }
  return Ei = o, Ei;
}
var ji, Hf;
function Mx() {
  if (Hf) return ji;
  Hf = 1;
  var e = at(), t = e["__core-js_shared__"];
  return ji = t, ji;
}
var Mi, Gf;
function Cx() {
  if (Gf) return Mi;
  Gf = 1;
  var e = Mx(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Mi = r, Mi;
}
var Ci, Kf;
function vm() {
  if (Kf) return Ci;
  Kf = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Ci = r, Ci;
}
var Ii, Xf;
function Ix() {
  if (Xf) return Ii;
  Xf = 1;
  var e = $l(), t = Cx(), r = St(), n = vm(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, u = Object.prototype, s = o.toString, c = u.hasOwnProperty, f = RegExp(
    "^" + s.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!r(d) || t(d))
      return !1;
    var h = e(d) ? f : i;
    return h.test(n(d));
  }
  return Ii = l, Ii;
}
var $i, Vf;
function $x() {
  if (Vf) return $i;
  Vf = 1;
  function e(t, r) {
    return t?.[r];
  }
  return $i = e, $i;
}
var Ri, Yf;
function Ht() {
  if (Yf) return Ri;
  Yf = 1;
  var e = Ix(), t = $x();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return Ri = r, Ri;
}
var Di, Zf;
function Na() {
  if (Zf) return Di;
  Zf = 1;
  var e = Ht(), t = e(Object, "create");
  return Di = t, Di;
}
var Ni, Jf;
function Rx() {
  if (Jf) return Ni;
  Jf = 1;
  var e = Na();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ni = t, Ni;
}
var qi, Qf;
function Dx() {
  if (Qf) return qi;
  Qf = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return qi = e, qi;
}
var ki, ed;
function Nx() {
  if (ed) return ki;
  ed = 1;
  var e = Na(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var u = o[i];
      return u === t ? void 0 : u;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return ki = a, ki;
}
var Li, td;
function qx() {
  if (td) return Li;
  td = 1;
  var e = Na(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return Li = n, Li;
}
var Bi, rd;
function kx() {
  if (rd) return Bi;
  rd = 1;
  var e = Na(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return Bi = r, Bi;
}
var Fi, nd;
function Lx() {
  if (nd) return Fi;
  nd = 1;
  var e = Rx(), t = Dx(), r = Nx(), n = qx(), a = kx();
  function i(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Fi = i, Fi;
}
var Ui, ad;
function Bx() {
  if (ad) return Ui;
  ad = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ui = e, Ui;
}
var Wi, id;
function Rl() {
  if (id) return Wi;
  id = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return Wi = e, Wi;
}
var zi, od;
function qa() {
  if (od) return zi;
  od = 1;
  var e = Rl();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return zi = t, zi;
}
var Hi, ud;
function Fx() {
  if (ud) return Hi;
  ud = 1;
  var e = qa(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var u = i.length - 1;
    return o == u ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return Hi = n, Hi;
}
var Gi, sd;
function Ux() {
  if (sd) return Gi;
  sd = 1;
  var e = qa();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return Gi = t, Gi;
}
var Ki, cd;
function Wx() {
  if (cd) return Ki;
  cd = 1;
  var e = qa();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Ki = t, Ki;
}
var Xi, ld;
function zx() {
  if (ld) return Xi;
  ld = 1;
  var e = qa();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return Xi = t, Xi;
}
var Vi, fd;
function ka() {
  if (fd) return Vi;
  fd = 1;
  var e = Bx(), t = Fx(), r = Ux(), n = Wx(), a = zx();
  function i(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Vi = i, Vi;
}
var Yi, dd;
function Dl() {
  if (dd) return Yi;
  dd = 1;
  var e = Ht(), t = at(), r = e(t, "Map");
  return Yi = r, Yi;
}
var Zi, pd;
function Hx() {
  if (pd) return Zi;
  pd = 1;
  var e = Lx(), t = ka(), r = Dl();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Zi = n, Zi;
}
var Ji, hd;
function Gx() {
  if (hd) return Ji;
  hd = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Ji = e, Ji;
}
var Qi, vd;
function La() {
  if (vd) return Qi;
  vd = 1;
  var e = Gx();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Qi = t, Qi;
}
var eo, yd;
function Kx() {
  if (yd) return eo;
  yd = 1;
  var e = La();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return eo = t, eo;
}
var to, gd;
function Xx() {
  if (gd) return to;
  gd = 1;
  var e = La();
  function t(r) {
    return e(this, r).get(r);
  }
  return to = t, to;
}
var ro, md;
function Vx() {
  if (md) return ro;
  md = 1;
  var e = La();
  function t(r) {
    return e(this, r).has(r);
  }
  return ro = t, ro;
}
var no, bd;
function Yx() {
  if (bd) return no;
  bd = 1;
  var e = La();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return no = t, no;
}
var ao, xd;
function Nl() {
  if (xd) return ao;
  xd = 1;
  var e = Hx(), t = Kx(), r = Xx(), n = Vx(), a = Yx();
  function i(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, ao = i, ao;
}
var io, wd;
function ym() {
  if (wd) return io;
  wd = 1;
  var e = Nl(), t = "Expected a function";
  function r(n, a) {
    if (typeof n != "function" || a != null && typeof a != "function")
      throw new TypeError(t);
    var i = function() {
      var o = arguments, u = a ? a.apply(this, o) : o[0], s = i.cache;
      if (s.has(u))
        return s.get(u);
      var c = n.apply(this, o);
      return i.cache = s.set(u, c) || s, c;
    };
    return i.cache = new (r.Cache || e)(), i;
  }
  return r.Cache = e, io = r, io;
}
var oo, _d;
function Zx() {
  if (_d) return oo;
  _d = 1;
  var e = ym(), t = 500;
  function r(n) {
    var a = e(n, function(o) {
      return i.size === t && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return oo = r, oo;
}
var uo, Od;
function Jx() {
  if (Od) return uo;
  Od = 1;
  var e = Zx(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, u, s, c) {
      i.push(s ? c.replace(r, "$1") : u || o);
    }), i;
  });
  return uo = n, uo;
}
var so, Sd;
function ql() {
  if (Sd) return so;
  Sd = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return so = e, so;
}
var co, Ad;
function Qx() {
  if (Ad) return co;
  Ad = 1;
  var e = wn(), t = ql(), r = Re(), n = wr(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
  function o(u) {
    if (typeof u == "string")
      return u;
    if (r(u))
      return t(u, o) + "";
    if (n(u))
      return i ? i.call(u) : "";
    var s = u + "";
    return s == "0" && 1 / u == -1 / 0 ? "-0" : s;
  }
  return co = o, co;
}
var lo, Pd;
function gm() {
  if (Pd) return lo;
  Pd = 1;
  var e = Qx();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return lo = t, lo;
}
var fo, Td;
function mm() {
  if (Td) return fo;
  Td = 1;
  var e = Re(), t = Il(), r = Jx(), n = gm();
  function a(i, o) {
    return e(i) ? i : t(i, o) ? [i] : r(n(i));
  }
  return fo = a, fo;
}
var po, Ed;
function Ba() {
  if (Ed) return po;
  Ed = 1;
  var e = wr();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return po = t, po;
}
var ho, jd;
function kl() {
  if (jd) return ho;
  jd = 1;
  var e = mm(), t = Ba();
  function r(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[t(a[i++])];
    return i && i == o ? n : void 0;
  }
  return ho = r, ho;
}
var vo, Md;
function bm() {
  if (Md) return vo;
  Md = 1;
  var e = kl();
  function t(r, n, a) {
    var i = r == null ? void 0 : e(r, n);
    return i === void 0 ? a : i;
  }
  return vo = t, vo;
}
var e1 = bm();
const tt = /* @__PURE__ */ ie(e1);
var yo, Cd;
function t1() {
  if (Cd) return yo;
  Cd = 1;
  function e(t) {
    return t == null;
  }
  return yo = e, yo;
}
var r1 = t1();
const Y = /* @__PURE__ */ ie(r1);
var go, Id;
function n1() {
  if (Id) return go;
  Id = 1;
  var e = vt(), t = Re(), r = yt(), n = "[object String]";
  function a(i) {
    return typeof i == "string" || !t(i) && r(i) && e(i) == n;
  }
  return go = a, go;
}
var a1 = n1();
const Ft = /* @__PURE__ */ ie(a1);
var i1 = $l();
const J = /* @__PURE__ */ ie(i1);
var o1 = St();
const _r = /* @__PURE__ */ ie(o1);
var mo = { exports: {} }, ee = {};
var $d;
function u1() {
  if ($d) return ee;
  $d = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.server_context"), s = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), l = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), h = /* @__PURE__ */ Symbol.for("react.offscreen"), g;
  g = /* @__PURE__ */ Symbol.for("react.module.reference");
  function v(p) {
    if (typeof p == "object" && p !== null) {
      var m = p.$$typeof;
      switch (m) {
        case e:
          switch (p = p.type, p) {
            case r:
            case a:
            case n:
            case c:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case u:
                case o:
                case s:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return ee.ContextConsumer = o, ee.ContextProvider = i, ee.Element = e, ee.ForwardRef = s, ee.Fragment = r, ee.Lazy = d, ee.Memo = l, ee.Portal = t, ee.Profiler = a, ee.StrictMode = n, ee.Suspense = c, ee.SuspenseList = f, ee.isAsyncMode = function() {
    return !1;
  }, ee.isConcurrentMode = function() {
    return !1;
  }, ee.isContextConsumer = function(p) {
    return v(p) === o;
  }, ee.isContextProvider = function(p) {
    return v(p) === i;
  }, ee.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ee.isForwardRef = function(p) {
    return v(p) === s;
  }, ee.isFragment = function(p) {
    return v(p) === r;
  }, ee.isLazy = function(p) {
    return v(p) === d;
  }, ee.isMemo = function(p) {
    return v(p) === l;
  }, ee.isPortal = function(p) {
    return v(p) === t;
  }, ee.isProfiler = function(p) {
    return v(p) === a;
  }, ee.isStrictMode = function(p) {
    return v(p) === n;
  }, ee.isSuspense = function(p) {
    return v(p) === c;
  }, ee.isSuspenseList = function(p) {
    return v(p) === f;
  }, ee.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === a || p === n || p === c || p === f || p === h || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === o || p.$$typeof === s || p.$$typeof === g || p.getModuleId !== void 0);
  }, ee.typeOf = v, ee;
}
var Rd;
function s1() {
  return Rd || (Rd = 1, mo.exports = u1()), mo.exports;
}
var c1 = s1(), bo, Dd;
function xm() {
  if (Dd) return bo;
  Dd = 1;
  var e = vt(), t = yt(), r = "[object Number]";
  function n(a) {
    return typeof a == "number" || t(a) && e(a) == r;
  }
  return bo = n, bo;
}
var xo, Nd;
function l1() {
  if (Nd) return xo;
  Nd = 1;
  var e = xm();
  function t(r) {
    return e(r) && r != +r;
  }
  return xo = t, xo;
}
var f1 = l1();
const _n = /* @__PURE__ */ ie(f1);
var d1 = xm();
const p1 = /* @__PURE__ */ ie(d1);
var Qe = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Dt = function(t) {
  return Ft(t) && t.indexOf("%") === t.length - 1;
}, B = function(t) {
  return p1(t) && !_n(t);
}, h1 = function(t) {
  return Y(t);
}, we = function(t) {
  return B(t) || Ft(t);
}, v1 = 0, Fa = function(t) {
  var r = ++v1;
  return "".concat(t || "").concat(r);
}, Ke = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!B(t) && !Ft(t))
    return n;
  var i;
  if (Dt(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return _n(i) && (i = n), a && i > r && (i = r), i;
}, xt = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, y1 = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, a = 0; a < r; a++)
    if (!n[t[a]])
      n[t[a]] = !0;
    else
      return !0;
  return !1;
}, Yt = function(t, r) {
  return B(t) && B(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Un(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : tt(n, t)) === r;
  });
}
var g1 = function(t, r) {
  return B(t) && B(r) ? t - r : Ft(t) && Ft(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function vc(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function yc(e) {
  "@babel/helpers - typeof";
  return yc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yc(e);
}
var m1 = ["viewBox", "children"], b1 = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], qd = ["points", "pathLength"], wo = {
  svg: m1,
  polygon: qd,
  polyline: qd
}, Ll = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Wn = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Xe(t) && (n = t.props), !_r(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    Ll.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, x1 = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, gc = function(t, r, n) {
  if (!_r(t) || yc(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    Ll.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = x1(o, r, n));
  }), a;
}, w1 = ["children"], _1 = ["children"];
function kd(e, t) {
  if (e == null) return {};
  var r = O1(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function O1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function mc(e) {
  "@babel/helpers - typeof";
  return mc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mc(e);
}
var Ld = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, ct = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Bd = null, _o = null, Bl = function e(t) {
  if (t === Bd && Array.isArray(_o))
    return _o;
  var r = [];
  return qt.forEach(t, function(n) {
    Y(n) || (c1.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), _o = r, Bd = t, r;
};
function Ve(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return ct(a);
  }) : n = [ct(t)], Bl(e).forEach(function(a) {
    var i = tt(a, "type.displayName") || tt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function qe(e, t) {
  var r = Ve(e, t);
  return r && r[0];
}
var Fd = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!B(n) || n <= 0 || !B(a) || a <= 0);
}, S1 = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], A1 = function(t) {
  return t && t.type && Ft(t.type) && S1.indexOf(t.type) >= 0;
}, bD = function(t) {
  return t && mc(t) === "object" && "clipDot" in t;
}, P1 = function(t, r, n, a) {
  var i, o = (i = wo?.[a]) !== null && i !== void 0 ? i : [];
  return r.startsWith("data-") || !J(t) && (a && o.includes(r) || b1.includes(r)) || n && Ll.includes(r);
}, ce = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ Xe(t) && (a = t.props), !_r(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var u;
    P1((u = a) === null || u === void 0 ? void 0 : u[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, bc = function e(t, r) {
  if (t === r)
    return !0;
  var n = qt.count(t);
  if (n !== qt.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Ud(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!Ud(i, o))
      return !1;
  }
  return !0;
}, Ud = function(t, r) {
  if (Y(t) && Y(r))
    return !0;
  if (!Y(t) && !Y(r)) {
    var n = t.props || {}, a = n.children, i = kd(n, w1), o = r.props || {}, u = o.children, s = kd(o, _1);
    return a && u ? vc(i, s) && bc(a, u) : !a && !u ? vc(i, s) : !1;
  }
  return !1;
}, Wd = function(t, r) {
  var n = [], a = {};
  return Bl(t).forEach(function(i, o) {
    if (A1(i))
      n.push(i);
    else if (i) {
      var u = ct(i.type), s = r[u] || {}, c = s.handler, f = s.once;
      if (c && (!f || !a[u])) {
        var l = c(i, u, o);
        n.push(l), a[u] = !0;
      }
    }
  }), n;
}, T1 = function(t) {
  var r = t && t.type;
  return r && Ld[r] ? Ld[r] : null;
}, E1 = function(t, r) {
  return Bl(r).indexOf(t);
}, j1 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function xc() {
  return xc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xc.apply(this, arguments);
}
function M1(e, t) {
  if (e == null) return {};
  var r = C1(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function C1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function wc(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, u = e.title, s = e.desc, c = M1(e, j1), f = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, l = se("recharts-surface", i);
  return /* @__PURE__ */ E.createElement("svg", xc({}, ce(c, !0, "svg"), {
    className: l,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ E.createElement("title", null, u), /* @__PURE__ */ E.createElement("desc", null, s), t);
}
var I1 = ["children", "className"];
function _c() {
  return _c = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _c.apply(this, arguments);
}
function $1(e, t) {
  if (e == null) return {};
  var r = R1(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function R1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Te = /* @__PURE__ */ E.forwardRef(function(e, t) {
  var r = e.children, n = e.className, a = $1(e, I1), i = se("recharts-layer", n);
  return /* @__PURE__ */ E.createElement("g", _c({
    className: i
  }, ce(a, !0), {
    ref: t
  }), r);
}), kt = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
}, Oo, zd;
function D1() {
  if (zd) return Oo;
  zd = 1;
  function e(t, r, n) {
    var a = -1, i = t.length;
    r < 0 && (r = -r > i ? 0 : i + r), n = n > i ? i : n, n < 0 && (n += i), i = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = t[a + r];
    return o;
  }
  return Oo = e, Oo;
}
var So, Hd;
function N1() {
  if (Hd) return So;
  Hd = 1;
  var e = D1();
  function t(r, n, a) {
    var i = r.length;
    return a = a === void 0 ? i : a, !n && a >= i ? r : e(r, n, a);
  }
  return So = t, So;
}
var Ao, Gd;
function wm() {
  if (Gd) return Ao;
  Gd = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", u = RegExp("[" + o + e + a + i + "]");
  function s(c) {
    return u.test(c);
  }
  return Ao = s, Ao;
}
var Po, Kd;
function q1() {
  if (Kd) return Po;
  Kd = 1;
  function e(t) {
    return t.split("");
  }
  return Po = e, Po;
}
var To, Xd;
function k1() {
  if (Xd) return To;
  Xd = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", u = "[" + a + "]", s = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + u + "|" + s + ")", f = "[^" + e + "]", l = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "\\u200d", g = c + "?", v = "[" + i + "]?", p = "(?:" + h + "(?:" + [f, l, d].join("|") + ")" + v + g + ")*", m = v + g + p, x = "(?:" + [f + u + "?", u, l, d, o].join("|") + ")", w = RegExp(s + "(?=" + s + ")|" + x + m, "g");
  function _(y) {
    return y.match(w) || [];
  }
  return To = _, To;
}
var Eo, Vd;
function L1() {
  if (Vd) return Eo;
  Vd = 1;
  var e = q1(), t = wm(), r = k1();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return Eo = n, Eo;
}
var jo, Yd;
function B1() {
  if (Yd) return jo;
  Yd = 1;
  var e = N1(), t = wm(), r = L1(), n = gm();
  function a(i) {
    return function(o) {
      o = n(o);
      var u = t(o) ? r(o) : void 0, s = u ? u[0] : o.charAt(0), c = u ? e(u, 1).join("") : o.slice(1);
      return s[i]() + c;
    };
  }
  return jo = a, jo;
}
var Mo, Zd;
function F1() {
  if (Zd) return Mo;
  Zd = 1;
  var e = B1(), t = e("toUpperCase");
  return Mo = t, Mo;
}
var U1 = F1();
const Ua = /* @__PURE__ */ ie(U1);
function ae(e) {
  return function() {
    return e;
  };
}
const _m = Math.cos, zn = Math.sin, Ze = Math.sqrt, Hn = Math.PI, Wa = 2 * Hn, Oc = Math.PI, Sc = 2 * Oc, $t = 1e-6, W1 = Sc - $t;
function Om(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function z1(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Om;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class H1 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Om : z1(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, a) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +a}`;
  }
  bezierCurveTo(t, r, n, a, i, o) {
    this._append`C${+t},${+r},${+n},${+a},${this._x1 = +i},${this._y1 = +o}`;
  }
  arcTo(t, r, n, a, i) {
    if (t = +t, r = +r, n = +n, a = +a, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
    let o = this._x1, u = this._y1, s = n - t, c = a - r, f = o - t, l = u - r, d = f * f + l * l;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > $t) if (!(Math.abs(l * s - c * f) > $t) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, g = a - u, v = s * s + c * c, p = h * h + g * g, m = Math.sqrt(v), x = Math.sqrt(d), w = i * Math.tan((Oc - Math.acos((v + d - p) / (2 * m * x))) / 2), _ = w / x, y = w / m;
      Math.abs(_ - 1) > $t && this._append`L${t + _ * f},${r + _ * l}`, this._append`A${i},${i},0,0,${+(l * h > f * g)},${this._x1 = t + y * s},${this._y1 = r + y * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(a), s = n * Math.sin(a), c = t + u, f = r + s, l = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > $t || Math.abs(this._y1 - f) > $t) && this._append`L${c},${f}`, n && (d < 0 && (d = d % Sc + Sc), d > W1 ? this._append`A${n},${n},0,1,${l},${t - u},${r - s}A${n},${n},0,1,${l},${this._x1 = c},${this._y1 = f}` : d > $t && this._append`A${n},${n},0,${+(d >= Oc)},${l},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Fl(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new H1(t);
}
function Ul(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Sm(e) {
  this._context = e;
}
Sm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function za(e) {
  return new Sm(e);
}
function Am(e) {
  return e[0];
}
function Pm(e) {
  return e[1];
}
function Tm(e, t) {
  var r = ae(!0), n = null, a = za, i = null, o = Fl(u);
  e = typeof e == "function" ? e : e === void 0 ? Am : ae(e), t = typeof t == "function" ? t : t === void 0 ? Pm : ae(t);
  function u(s) {
    var c, f = (s = Ul(s)).length, l, d = !1, h;
    for (n == null && (i = a(h = o())), c = 0; c <= f; ++c)
      !(c < f && r(l = s[c], c, s)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e(l, c, s), +t(l, c, s));
    if (h) return i = null, h + "" || null;
  }
  return u.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : ae(+s), u) : e;
  }, u.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : ae(+s), u) : t;
  }, u.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : ae(!!s), u) : r;
  }, u.curve = function(s) {
    return arguments.length ? (a = s, n != null && (i = a(n)), u) : a;
  }, u.context = function(s) {
    return arguments.length ? (s == null ? n = i = null : i = a(n = s), u) : n;
  }, u;
}
function Cn(e, t, r) {
  var n = null, a = ae(!0), i = null, o = za, u = null, s = Fl(c);
  e = typeof e == "function" ? e : e === void 0 ? Am : ae(+e), t = typeof t == "function" ? t : ae(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Pm : ae(+r);
  function c(l) {
    var d, h, g, v = (l = Ul(l)).length, p, m = !1, x, w = new Array(v), _ = new Array(v);
    for (i == null && (u = o(x = s())), d = 0; d <= v; ++d) {
      if (!(d < v && a(p = l[d], d, l)) === m)
        if (m = !m)
          h = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), g = d - 1; g >= h; --g)
            u.point(w[g], _[g]);
          u.lineEnd(), u.areaEnd();
        }
      m && (w[d] = +e(p, d, l), _[d] = +t(p, d, l), u.point(n ? +n(p, d, l) : w[d], r ? +r(p, d, l) : _[d]));
    }
    if (x) return u = null, x + "" || null;
  }
  function f() {
    return Tm().defined(a).curve(o).context(i);
  }
  return c.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : ae(+l), n = null, c) : e;
  }, c.x0 = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : ae(+l), c) : e;
  }, c.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : ae(+l), c) : n;
  }, c.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ae(+l), r = null, c) : t;
  }, c.y0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ae(+l), c) : t;
  }, c.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : ae(+l), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(n).y(t);
  }, c.defined = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : ae(!!l), c) : a;
  }, c.curve = function(l) {
    return arguments.length ? (o = l, i != null && (u = o(i)), c) : o;
  }, c.context = function(l) {
    return arguments.length ? (l == null ? i = u = null : u = o(i = l), c) : i;
  }, c;
}
class Em {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function G1(e) {
  return new Em(e, !0);
}
function K1(e) {
  return new Em(e, !1);
}
const Wl = {
  draw(e, t) {
    const r = Ze(t / Hn);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Wa);
  }
}, X1 = {
  draw(e, t) {
    const r = Ze(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, jm = Ze(1 / 3), V1 = jm * 2, Y1 = {
  draw(e, t) {
    const r = Ze(t / V1), n = r * jm;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, Z1 = {
  draw(e, t) {
    const r = Ze(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, J1 = 0.8908130915292852, Mm = zn(Hn / 10) / zn(7 * Hn / 10), Q1 = zn(Wa / 10) * Mm, ew = -_m(Wa / 10) * Mm, tw = {
  draw(e, t) {
    const r = Ze(t * J1), n = Q1 * r, a = ew * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = Wa * i / 5, u = _m(o), s = zn(o);
      e.lineTo(s * r, -u * r), e.lineTo(u * n - s * a, s * n + u * a);
    }
    e.closePath();
  }
}, Co = Ze(3), rw = {
  draw(e, t) {
    const r = -Ze(t / (Co * 3));
    e.moveTo(0, r * 2), e.lineTo(-Co * r, -r), e.lineTo(Co * r, -r), e.closePath();
  }
}, Le = -0.5, Be = Ze(3) / 2, Ac = 1 / Ze(12), nw = (Ac / 2 + 1) * 3, aw = {
  draw(e, t) {
    const r = Ze(t / nw), n = r / 2, a = r * Ac, i = n, o = r * Ac + r, u = -i, s = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(u, s), e.lineTo(Le * n - Be * a, Be * n + Le * a), e.lineTo(Le * i - Be * o, Be * i + Le * o), e.lineTo(Le * u - Be * s, Be * u + Le * s), e.lineTo(Le * n + Be * a, Le * a - Be * n), e.lineTo(Le * i + Be * o, Le * o - Be * i), e.lineTo(Le * u + Be * s, Le * s - Be * u), e.closePath();
  }
};
function iw(e, t) {
  let r = null, n = Fl(a);
  e = typeof e == "function" ? e : ae(e || Wl), t = typeof t == "function" ? t : ae(t === void 0 ? 64 : +t);
  function a() {
    let i;
    if (r || (r = i = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return a.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : ae(i), a) : e;
  }, a.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : ae(+i), a) : t;
  }, a.context = function(i) {
    return arguments.length ? (r = i ?? null, a) : r;
  }, a;
}
function Gn() {
}
function Kn(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Cm(e) {
  this._context = e;
}
Cm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Kn(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Kn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function ow(e) {
  return new Cm(e);
}
function Im(e) {
  this._context = e;
}
Im.prototype = {
  areaStart: Gn,
  areaEnd: Gn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Kn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function uw(e) {
  return new Im(e);
}
function $m(e) {
  this._context = e;
}
$m.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Kn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function sw(e) {
  return new $m(e);
}
function Rm(e) {
  this._context = e;
}
Rm.prototype = {
  areaStart: Gn,
  areaEnd: Gn,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function cw(e) {
  return new Rm(e);
}
function Jd(e) {
  return e < 0 ? -1 : 1;
}
function Qd(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), u = (i * a + o * n) / (n + a);
  return (Jd(i) + Jd(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function ep(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Io(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, u = (i - n) / 3;
  e._context.bezierCurveTo(n + u, a + u * t, i - u, o - u * r, i, o);
}
function Xn(e) {
  this._context = e;
}
Xn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Io(this, this._t0, ep(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Io(this, ep(this, r = Qd(this, e, t)), r);
          break;
        default:
          Io(this, this._t0, r = Qd(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Dm(e) {
  this._context = new Nm(e);
}
(Dm.prototype = Object.create(Xn.prototype)).point = function(e, t) {
  Xn.prototype.point.call(this, t, e);
};
function Nm(e) {
  this._context = e;
}
Nm.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, a, i) {
    this._context.bezierCurveTo(t, e, n, r, i, a);
  }
};
function lw(e) {
  return new Xn(e);
}
function fw(e) {
  return new Dm(e);
}
function qm(e) {
  this._context = e;
}
qm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = tp(e), a = tp(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function tp(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function dw(e) {
  return new qm(e);
}
function Ha(e, t) {
  this._context = e, this._t = t;
}
Ha.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function pw(e) {
  return new Ha(e, 0.5);
}
function hw(e) {
  return new Ha(e, 0);
}
function vw(e) {
  return new Ha(e, 1);
}
function nr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, u = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < u; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function Pc(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function yw(e, t) {
  return e[t];
}
function gw(e) {
  const t = [];
  return t.key = e, t;
}
function mw() {
  var e = ae([]), t = Pc, r = nr, n = yw;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), gw), u, s = o.length, c = -1, f;
    for (const l of i)
      for (u = 0, ++c; u < s; ++u)
        (o[u][c] = [0, +n(l, o[u].key, c, i)]).data = l;
    for (u = 0, f = Ul(t(o)); u < s; ++u)
      o[f[u]].index = u;
    return r(o, f), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : ae(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : ae(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? Pc : typeof i == "function" ? i : ae(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? nr, a) : r;
  }, a;
}
function bw(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    nr(e, t);
  }
}
function xw(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, u = 0; o < a; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    nr(e, t);
  }
}
function ww(e, t) {
  if (!(!((o = e.length) > 0) || !((i = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (var f = e[t[u]], l = f[n][1] || 0, d = f[n - 1][1] || 0, h = (l - d) / 2, g = 0; g < u; ++g) {
          var v = e[t[g]], p = v[n][1] || 0, m = v[n - 1][1] || 0;
          h += p - m;
        }
        s += l, c += h * l;
      }
      a[n - 1][1] += a[n - 1][0] = r, s && (r -= c / s);
    }
    a[n - 1][1] += a[n - 1][0] = r, nr(e, t);
  }
}
function Wr(e) {
  "@babel/helpers - typeof";
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(e);
}
var _w = ["type", "size", "sizeType"];
function Tc() {
  return Tc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tc.apply(this, arguments);
}
function rp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function np(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rp(Object(r), !0).forEach(function(n) {
      Ow(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ow(e, t, r) {
  return t = Sw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sw(e) {
  var t = Aw(e, "string");
  return Wr(t) == "symbol" ? t : t + "";
}
function Aw(e, t) {
  if (Wr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pw(e, t) {
  if (e == null) return {};
  var r = Tw(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Tw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var km = {
  symbolCircle: Wl,
  symbolCross: X1,
  symbolDiamond: Y1,
  symbolSquare: Z1,
  symbolStar: tw,
  symbolTriangle: rw,
  symbolWye: aw
}, Ew = Math.PI / 180, jw = function(t) {
  var r = "symbol".concat(Ua(t));
  return km[r] || Wl;
}, Mw = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var a = 18 * Ew;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, Cw = function(t, r) {
  km["symbol".concat(Ua(t))] = r;
}, zl = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, u = o === void 0 ? "area" : o, s = Pw(t, _w), c = np(np({}, s), {}, {
    type: n,
    size: i,
    sizeType: u
  }), f = function() {
    var p = jw(n), m = iw().type(p).size(Mw(i, u, n));
    return m();
  }, l = c.className, d = c.cx, h = c.cy, g = ce(c, !0);
  return d === +d && h === +h && i === +i ? /* @__PURE__ */ E.createElement("path", Tc({}, g, {
    className: se("recharts-symbols", l),
    transform: "translate(".concat(d, ", ").concat(h, ")"),
    d: f()
  })) : null;
};
zl.registerSymbol = Cw;
function ar(e) {
  "@babel/helpers - typeof";
  return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ar(e);
}
function Ec() {
  return Ec = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ec.apply(this, arguments);
}
function ap(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Iw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ap(Object(r), !0).forEach(function(n) {
      zr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ap(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $w(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Bm(n.key), n);
  }
}
function Dw(e, t, r) {
  return t && Rw(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Nw(e, t, r) {
  return t = Vn(t), qw(e, Lm() ? Reflect.construct(t, r || [], Vn(e).constructor) : t.apply(e, r));
}
function qw(e, t) {
  if (t && (ar(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kw(e);
}
function kw(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lm = function() {
    return !!e;
  })();
}
function Vn(e) {
  return Vn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vn(e);
}
function Lw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && jc(e, t);
}
function jc(e, t) {
  return jc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, jc(e, t);
}
function zr(e, t, r) {
  return t = Bm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Bm(e) {
  var t = Bw(e, "string");
  return ar(t) == "symbol" ? t : t + "";
}
function Bw(e, t) {
  if (ar(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Fe = 32, Hl = /* @__PURE__ */ (function(e) {
  function t() {
    return $w(this, t), Nw(this, t, arguments);
  }
  return Lw(t, e), Dw(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = Fe / 2, o = Fe / 6, u = Fe / 3, s = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ E.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: Fe,
            y2: i,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ E.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            d: "M0,".concat(i, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(i, `
            H`).concat(Fe, "M").concat(2 * u, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ E.createElement("path", {
            stroke: "none",
            fill: s,
            d: "M0,".concat(Fe / 8, "h").concat(Fe, "v").concat(Fe * 3 / 4, "h").concat(-Fe, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ E.isValidElement(n.legendIcon)) {
          var c = Iw({}, n);
          return delete c.legendIcon, /* @__PURE__ */ E.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ E.createElement(zl, {
          fill: s,
          cx: i,
          cy: i,
          size: Fe,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, a = this.props, i = a.payload, o = a.iconSize, u = a.layout, s = a.formatter, c = a.inactiveColor, f = {
        x: 0,
        y: 0,
        width: Fe,
        height: Fe
      }, l = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(h, g) {
        var v = h.formatter || s, p = se(zr(zr({
          "recharts-legend-item": !0
        }, "legend-item-".concat(g), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var m = J(h.value) ? null : h.value;
        kt(
          !J(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = h.inactive ? c : h.color;
        return /* @__PURE__ */ E.createElement("li", Ec({
          className: p,
          style: l,
          key: "legend-item-".concat(g)
        }, gc(n.props, h, g)), /* @__PURE__ */ E.createElement(wc, {
          width: o,
          height: o,
          viewBox: f,
          style: d
        }, n.renderIcon(h)), /* @__PURE__ */ E.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: x
          }
        }, v ? v(m, h, g) : m));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.payload, i = n.layout, o = n.align;
      if (!a || !a.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: i === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]);
})(zt);
zr(Hl, "displayName", "Legend");
zr(Hl, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var $o, ip;
function Fw() {
  if (ip) return $o;
  ip = 1;
  var e = ka();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return $o = t, $o;
}
var Ro, op;
function Uw() {
  if (op) return Ro;
  op = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Ro = e, Ro;
}
var Do, up;
function Ww() {
  if (up) return Do;
  up = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Do = e, Do;
}
var No, sp;
function zw() {
  if (sp) return No;
  sp = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return No = e, No;
}
var qo, cp;
function Hw() {
  if (cp) return qo;
  cp = 1;
  var e = ka(), t = Dl(), r = Nl(), n = 200;
  function a(i, o) {
    var u = this.__data__;
    if (u instanceof e) {
      var s = u.__data__;
      if (!t || s.length < n - 1)
        return s.push([i, o]), this.size = ++u.size, this;
      u = this.__data__ = new r(s);
    }
    return u.set(i, o), this.size = u.size, this;
  }
  return qo = a, qo;
}
var ko, lp;
function Fm() {
  if (lp) return ko;
  lp = 1;
  var e = ka(), t = Fw(), r = Uw(), n = Ww(), a = zw(), i = Hw();
  function o(u) {
    var s = this.__data__ = new e(u);
    this.size = s.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, ko = o, ko;
}
var Lo, fp;
function Gw() {
  if (fp) return Lo;
  fp = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Lo = t, Lo;
}
var Bo, dp;
function Kw() {
  if (dp) return Bo;
  dp = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Bo = e, Bo;
}
var Fo, pp;
function Um() {
  if (pp) return Fo;
  pp = 1;
  var e = Nl(), t = Gw(), r = Kw();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Fo = n, Fo;
}
var Uo, hp;
function Wm() {
  if (hp) return Uo;
  hp = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Uo = e, Uo;
}
var Wo, vp;
function zm() {
  if (vp) return Wo;
  vp = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Wo = e, Wo;
}
var zo, yp;
function Hm() {
  if (yp) return zo;
  yp = 1;
  var e = Um(), t = Wm(), r = zm(), n = 1, a = 2;
  function i(o, u, s, c, f, l) {
    var d = s & n, h = o.length, g = u.length;
    if (h != g && !(d && g > h))
      return !1;
    var v = l.get(o), p = l.get(u);
    if (v && p)
      return v == u && p == o;
    var m = -1, x = !0, w = s & a ? new e() : void 0;
    for (l.set(o, u), l.set(u, o); ++m < h; ) {
      var _ = o[m], y = u[m];
      if (c)
        var b = d ? c(y, _, m, u, o, l) : c(_, y, m, o, u, l);
      if (b !== void 0) {
        if (b)
          continue;
        x = !1;
        break;
      }
      if (w) {
        if (!t(u, function(O, S) {
          if (!r(w, S) && (_ === O || f(_, O, s, c, l)))
            return w.push(S);
        })) {
          x = !1;
          break;
        }
      } else if (!(_ === y || f(_, y, s, c, l))) {
        x = !1;
        break;
      }
    }
    return l.delete(o), l.delete(u), x;
  }
  return zo = i, zo;
}
var Ho, gp;
function Xw() {
  if (gp) return Ho;
  gp = 1;
  var e = at(), t = e.Uint8Array;
  return Ho = t, Ho;
}
var Go, mp;
function Vw() {
  if (mp) return Go;
  mp = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return Go = e, Go;
}
var Ko, bp;
function Gl() {
  if (bp) return Ko;
  bp = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return Ko = e, Ko;
}
var Xo, xp;
function Yw() {
  if (xp) return Xo;
  xp = 1;
  var e = wn(), t = Xw(), r = Rl(), n = Hm(), a = Vw(), i = Gl(), o = 1, u = 2, s = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", h = "[object RegExp]", g = "[object Set]", v = "[object String]", p = "[object Symbol]", m = "[object ArrayBuffer]", x = "[object DataView]", w = e ? e.prototype : void 0, _ = w ? w.valueOf : void 0;
  function y(b, O, S, A, C, T, P) {
    switch (S) {
      case x:
        if (b.byteLength != O.byteLength || b.byteOffset != O.byteOffset)
          return !1;
        b = b.buffer, O = O.buffer;
      case m:
        return !(b.byteLength != O.byteLength || !T(new t(b), new t(O)));
      case s:
      case c:
      case d:
        return r(+b, +O);
      case f:
        return b.name == O.name && b.message == O.message;
      case h:
      case v:
        return b == O + "";
      case l:
        var j = a;
      case g:
        var I = A & o;
        if (j || (j = i), b.size != O.size && !I)
          return !1;
        var M = P.get(b);
        if (M)
          return M == O;
        A |= u, P.set(b, O);
        var R = n(j(b), j(O), A, C, T, P);
        return P.delete(b), R;
      case p:
        if (_)
          return _.call(b) == _.call(O);
    }
    return !1;
  }
  return Xo = y, Xo;
}
var Vo, wp;
function Gm() {
  if (wp) return Vo;
  wp = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return Vo = e, Vo;
}
var Yo, _p;
function Zw() {
  if (_p) return Yo;
  _p = 1;
  var e = Gm(), t = Re();
  function r(n, a, i) {
    var o = a(n);
    return t(n) ? o : e(o, i(n));
  }
  return Yo = r, Yo;
}
var Zo, Op;
function Jw() {
  if (Op) return Zo;
  Op = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
      var u = t[n];
      r(u, n, t) && (o[i++] = u);
    }
    return o;
  }
  return Zo = e, Zo;
}
var Jo, Sp;
function Qw() {
  if (Sp) return Jo;
  Sp = 1;
  function e() {
    return [];
  }
  return Jo = e, Jo;
}
var Qo, Ap;
function e_() {
  if (Ap) return Qo;
  Ap = 1;
  var e = Jw(), t = Qw(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(u) {
      return n.call(o, u);
    }));
  } : t;
  return Qo = i, Qo;
}
var eu, Pp;
function t_() {
  if (Pp) return eu;
  Pp = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return eu = e, eu;
}
var tu, Tp;
function r_() {
  if (Tp) return tu;
  Tp = 1;
  var e = vt(), t = yt(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return tu = n, tu;
}
var ru, Ep;
function Kl() {
  if (Ep) return ru;
  Ep = 1;
  var e = r_(), t = yt(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return ru = i, ru;
}
var Dr = { exports: {} }, nu, jp;
function n_() {
  if (jp) return nu;
  jp = 1;
  function e() {
    return !1;
  }
  return nu = e, nu;
}
Dr.exports;
var Mp;
function Km() {
  return Mp || (Mp = 1, (function(e, t) {
    var r = at(), n = n_(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, u = o ? r.Buffer : void 0, s = u ? u.isBuffer : void 0, c = s || n;
    e.exports = c;
  })(Dr, Dr.exports)), Dr.exports;
}
var au, Cp;
function Xl() {
  if (Cp) return au;
  Cp = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return au = r, au;
}
var iu, Ip;
function Vl() {
  if (Ip) return iu;
  Ip = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return iu = t, iu;
}
var ou, $p;
function a_() {
  if ($p) return ou;
  $p = 1;
  var e = vt(), t = Vl(), r = yt(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", u = "[object Error]", s = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", h = "[object Set]", g = "[object String]", v = "[object WeakMap]", p = "[object ArrayBuffer]", m = "[object DataView]", x = "[object Float32Array]", w = "[object Float64Array]", _ = "[object Int8Array]", y = "[object Int16Array]", b = "[object Int32Array]", O = "[object Uint8Array]", S = "[object Uint8ClampedArray]", A = "[object Uint16Array]", C = "[object Uint32Array]", T = {};
  T[x] = T[w] = T[_] = T[y] = T[b] = T[O] = T[S] = T[A] = T[C] = !0, T[n] = T[a] = T[p] = T[i] = T[m] = T[o] = T[u] = T[s] = T[c] = T[f] = T[l] = T[d] = T[h] = T[g] = T[v] = !1;
  function P(j) {
    return r(j) && t(j.length) && !!T[e(j)];
  }
  return ou = P, ou;
}
var uu, Rp;
function Xm() {
  if (Rp) return uu;
  Rp = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return uu = e, uu;
}
var Nr = { exports: {} };
Nr.exports;
var Dp;
function i_() {
  return Dp || (Dp = 1, (function(e, t) {
    var r = hm(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, u = (function() {
      try {
        var s = a && a.require && a.require("util").types;
        return s || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(Nr, Nr.exports)), Nr.exports;
}
var su, Np;
function Vm() {
  if (Np) return su;
  Np = 1;
  var e = a_(), t = Xm(), r = i_(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return su = a, su;
}
var cu, qp;
function o_() {
  if (qp) return cu;
  qp = 1;
  var e = t_(), t = Kl(), r = Re(), n = Km(), a = Xl(), i = Vm(), o = Object.prototype, u = o.hasOwnProperty;
  function s(c, f) {
    var l = r(c), d = !l && t(c), h = !l && !d && n(c), g = !l && !d && !h && i(c), v = l || d || h || g, p = v ? e(c.length, String) : [], m = p.length;
    for (var x in c)
      (f || u.call(c, x)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
      (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      h && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      g && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
      a(x, m))) && p.push(x);
    return p;
  }
  return cu = s, cu;
}
var lu, kp;
function u_() {
  if (kp) return lu;
  kp = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return lu = t, lu;
}
var fu, Lp;
function Ym() {
  if (Lp) return fu;
  Lp = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return fu = e, fu;
}
var du, Bp;
function s_() {
  if (Bp) return du;
  Bp = 1;
  var e = Ym(), t = e(Object.keys, Object);
  return du = t, du;
}
var pu, Fp;
function c_() {
  if (Fp) return pu;
  Fp = 1;
  var e = u_(), t = s_(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var u in Object(i))
      n.call(i, u) && u != "constructor" && o.push(u);
    return o;
  }
  return pu = a, pu;
}
var hu, Up;
function On() {
  if (Up) return hu;
  Up = 1;
  var e = $l(), t = Vl();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return hu = r, hu;
}
var vu, Wp;
function Ga() {
  if (Wp) return vu;
  Wp = 1;
  var e = o_(), t = c_(), r = On();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return vu = n, vu;
}
var yu, zp;
function l_() {
  if (zp) return yu;
  zp = 1;
  var e = Zw(), t = e_(), r = Ga();
  function n(a) {
    return e(a, r, t);
  }
  return yu = n, yu;
}
var gu, Hp;
function f_() {
  if (Hp) return gu;
  Hp = 1;
  var e = l_(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function a(i, o, u, s, c, f) {
    var l = u & t, d = e(i), h = d.length, g = e(o), v = g.length;
    if (h != v && !l)
      return !1;
    for (var p = h; p--; ) {
      var m = d[p];
      if (!(l ? m in o : n.call(o, m)))
        return !1;
    }
    var x = f.get(i), w = f.get(o);
    if (x && w)
      return x == o && w == i;
    var _ = !0;
    f.set(i, o), f.set(o, i);
    for (var y = l; ++p < h; ) {
      m = d[p];
      var b = i[m], O = o[m];
      if (s)
        var S = l ? s(O, b, m, o, i, f) : s(b, O, m, i, o, f);
      if (!(S === void 0 ? b === O || c(b, O, u, s, f) : S)) {
        _ = !1;
        break;
      }
      y || (y = m == "constructor");
    }
    if (_ && !y) {
      var A = i.constructor, C = o.constructor;
      A != C && "constructor" in i && "constructor" in o && !(typeof A == "function" && A instanceof A && typeof C == "function" && C instanceof C) && (_ = !1);
    }
    return f.delete(i), f.delete(o), _;
  }
  return gu = a, gu;
}
var mu, Gp;
function d_() {
  if (Gp) return mu;
  Gp = 1;
  var e = Ht(), t = at(), r = e(t, "DataView");
  return mu = r, mu;
}
var bu, Kp;
function p_() {
  if (Kp) return bu;
  Kp = 1;
  var e = Ht(), t = at(), r = e(t, "Promise");
  return bu = r, bu;
}
var xu, Xp;
function Zm() {
  if (Xp) return xu;
  Xp = 1;
  var e = Ht(), t = at(), r = e(t, "Set");
  return xu = r, xu;
}
var wu, Vp;
function h_() {
  if (Vp) return wu;
  Vp = 1;
  var e = Ht(), t = at(), r = e(t, "WeakMap");
  return wu = r, wu;
}
var _u, Yp;
function v_() {
  if (Yp) return _u;
  Yp = 1;
  var e = d_(), t = Dl(), r = p_(), n = Zm(), a = h_(), i = vt(), o = vm(), u = "[object Map]", s = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", h = o(e), g = o(t), v = o(r), p = o(n), m = o(a), x = i;
  return (e && x(new e(new ArrayBuffer(1))) != d || t && x(new t()) != u || r && x(r.resolve()) != c || n && x(new n()) != f || a && x(new a()) != l) && (x = function(w) {
    var _ = i(w), y = _ == s ? w.constructor : void 0, b = y ? o(y) : "";
    if (b)
      switch (b) {
        case h:
          return d;
        case g:
          return u;
        case v:
          return c;
        case p:
          return f;
        case m:
          return l;
      }
    return _;
  }), _u = x, _u;
}
var Ou, Zp;
function y_() {
  if (Zp) return Ou;
  Zp = 1;
  var e = Fm(), t = Hm(), r = Yw(), n = f_(), a = v_(), i = Re(), o = Km(), u = Vm(), s = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, h = d.hasOwnProperty;
  function g(v, p, m, x, w, _) {
    var y = i(v), b = i(p), O = y ? f : a(v), S = b ? f : a(p);
    O = O == c ? l : O, S = S == c ? l : S;
    var A = O == l, C = S == l, T = O == S;
    if (T && o(v)) {
      if (!o(p))
        return !1;
      y = !0, A = !1;
    }
    if (T && !A)
      return _ || (_ = new e()), y || u(v) ? t(v, p, m, x, w, _) : r(v, p, O, m, x, w, _);
    if (!(m & s)) {
      var P = A && h.call(v, "__wrapped__"), j = C && h.call(p, "__wrapped__");
      if (P || j) {
        var I = P ? v.value() : v, M = j ? p.value() : p;
        return _ || (_ = new e()), w(I, M, m, x, _);
      }
    }
    return T ? (_ || (_ = new e()), n(v, p, m, x, w, _)) : !1;
  }
  return Ou = g, Ou;
}
var Su, Jp;
function Yl() {
  if (Jp) return Su;
  Jp = 1;
  var e = y_(), t = yt();
  function r(n, a, i, o, u) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, o, r, u);
  }
  return Su = r, Su;
}
var Au, Qp;
function g_() {
  if (Qp) return Au;
  Qp = 1;
  var e = Fm(), t = Yl(), r = 1, n = 2;
  function a(i, o, u, s) {
    var c = u.length, f = c, l = !s;
    if (i == null)
      return !f;
    for (i = Object(i); c--; ) {
      var d = u[c];
      if (l && d[2] ? d[1] !== i[d[0]] : !(d[0] in i))
        return !1;
    }
    for (; ++c < f; ) {
      d = u[c];
      var h = d[0], g = i[h], v = d[1];
      if (l && d[2]) {
        if (g === void 0 && !(h in i))
          return !1;
      } else {
        var p = new e();
        if (s)
          var m = s(g, v, h, i, o, p);
        if (!(m === void 0 ? t(v, g, r | n, s, p) : m))
          return !1;
      }
    }
    return !0;
  }
  return Au = a, Au;
}
var Pu, eh;
function Jm() {
  if (eh) return Pu;
  eh = 1;
  var e = St();
  function t(r) {
    return r === r && !e(r);
  }
  return Pu = t, Pu;
}
var Tu, th;
function m_() {
  if (th) return Tu;
  th = 1;
  var e = Jm(), t = Ga();
  function r(n) {
    for (var a = t(n), i = a.length; i--; ) {
      var o = a[i], u = n[o];
      a[i] = [o, u, e(u)];
    }
    return a;
  }
  return Tu = r, Tu;
}
var Eu, rh;
function Qm() {
  if (rh) return Eu;
  rh = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Eu = e, Eu;
}
var ju, nh;
function b_() {
  if (nh) return ju;
  nh = 1;
  var e = g_(), t = m_(), r = Qm();
  function n(a) {
    var i = t(a);
    return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return ju = n, ju;
}
var Mu, ah;
function x_() {
  if (ah) return Mu;
  ah = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Mu = e, Mu;
}
var Cu, ih;
function w_() {
  if (ih) return Cu;
  ih = 1;
  var e = mm(), t = Kl(), r = Re(), n = Xl(), a = Vl(), i = Ba();
  function o(u, s, c) {
    s = e(s, u);
    for (var f = -1, l = s.length, d = !1; ++f < l; ) {
      var h = i(s[f]);
      if (!(d = u != null && c(u, h)))
        break;
      u = u[h];
    }
    return d || ++f != l ? d : (l = u == null ? 0 : u.length, !!l && a(l) && n(h, l) && (r(u) || t(u)));
  }
  return Cu = o, Cu;
}
var Iu, oh;
function __() {
  if (oh) return Iu;
  oh = 1;
  var e = x_(), t = w_();
  function r(n, a) {
    return n != null && t(n, a, e);
  }
  return Iu = r, Iu;
}
var $u, uh;
function O_() {
  if (uh) return $u;
  uh = 1;
  var e = Yl(), t = bm(), r = __(), n = Il(), a = Jm(), i = Qm(), o = Ba(), u = 1, s = 2;
  function c(f, l) {
    return n(f) && a(l) ? i(o(f), l) : function(d) {
      var h = t(d, f);
      return h === void 0 && h === l ? r(d, f) : e(l, h, u | s);
    };
  }
  return $u = c, $u;
}
var Ru, sh;
function Or() {
  if (sh) return Ru;
  sh = 1;
  function e(t) {
    return t;
  }
  return Ru = e, Ru;
}
var Du, ch;
function S_() {
  if (ch) return Du;
  ch = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Du = e, Du;
}
var Nu, lh;
function A_() {
  if (lh) return Nu;
  lh = 1;
  var e = kl();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Nu = t, Nu;
}
var qu, fh;
function P_() {
  if (fh) return qu;
  fh = 1;
  var e = S_(), t = A_(), r = Il(), n = Ba();
  function a(i) {
    return r(i) ? e(n(i)) : t(i);
  }
  return qu = a, qu;
}
var ku, dh;
function At() {
  if (dh) return ku;
  dh = 1;
  var e = b_(), t = O_(), r = Or(), n = Re(), a = P_();
  function i(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : a(o);
  }
  return ku = i, ku;
}
var Lu, ph;
function eb() {
  if (ph) return Lu;
  ph = 1;
  function e(t, r, n, a) {
    for (var i = t.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return Lu = e, Lu;
}
var Bu, hh;
function T_() {
  if (hh) return Bu;
  hh = 1;
  function e(t) {
    return t !== t;
  }
  return Bu = e, Bu;
}
var Fu, vh;
function E_() {
  if (vh) return Fu;
  vh = 1;
  function e(t, r, n) {
    for (var a = n - 1, i = t.length; ++a < i; )
      if (t[a] === r)
        return a;
    return -1;
  }
  return Fu = e, Fu;
}
var Uu, yh;
function j_() {
  if (yh) return Uu;
  yh = 1;
  var e = eb(), t = T_(), r = E_();
  function n(a, i, o) {
    return i === i ? r(a, i, o) : e(a, t, o);
  }
  return Uu = n, Uu;
}
var Wu, gh;
function M_() {
  if (gh) return Wu;
  gh = 1;
  var e = j_();
  function t(r, n) {
    var a = r == null ? 0 : r.length;
    return !!a && e(r, n, 0) > -1;
  }
  return Wu = t, Wu;
}
var zu, mh;
function C_() {
  if (mh) return zu;
  mh = 1;
  function e(t, r, n) {
    for (var a = -1, i = t == null ? 0 : t.length; ++a < i; )
      if (n(r, t[a]))
        return !0;
    return !1;
  }
  return zu = e, zu;
}
var Hu, bh;
function I_() {
  if (bh) return Hu;
  bh = 1;
  function e() {
  }
  return Hu = e, Hu;
}
var Gu, xh;
function $_() {
  if (xh) return Gu;
  xh = 1;
  var e = Zm(), t = I_(), r = Gl(), n = 1 / 0, a = e && 1 / r(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : t;
  return Gu = a, Gu;
}
var Ku, wh;
function R_() {
  if (wh) return Ku;
  wh = 1;
  var e = Um(), t = M_(), r = C_(), n = zm(), a = $_(), i = Gl(), o = 200;
  function u(s, c, f) {
    var l = -1, d = t, h = s.length, g = !0, v = [], p = v;
    if (f)
      g = !1, d = r;
    else if (h >= o) {
      var m = c ? null : a(s);
      if (m)
        return i(m);
      g = !1, d = n, p = new e();
    } else
      p = c ? [] : v;
    e:
      for (; ++l < h; ) {
        var x = s[l], w = c ? c(x) : x;
        if (x = f || x !== 0 ? x : 0, g && w === w) {
          for (var _ = p.length; _--; )
            if (p[_] === w)
              continue e;
          c && p.push(w), v.push(x);
        } else d(p, w, f) || (p !== v && p.push(w), v.push(x));
      }
    return v;
  }
  return Ku = u, Ku;
}
var Xu, _h;
function D_() {
  if (_h) return Xu;
  _h = 1;
  var e = At(), t = R_();
  function r(n, a) {
    return n && n.length ? t(n, e(a, 2)) : [];
  }
  return Xu = r, Xu;
}
var N_ = D_();
const Oh = /* @__PURE__ */ ie(N_);
function tb(e, t, r) {
  return t === !0 ? Oh(e, r) : J(t) ? Oh(e, t) : e;
}
function ir(e) {
  "@babel/helpers - typeof";
  return ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ir(e);
}
var q_ = ["ref"];
function Sh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sh(Object(r), !0).forEach(function(n) {
      Ka(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function k_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ah(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nb(n.key), n);
  }
}
function L_(e, t, r) {
  return t && Ah(e.prototype, t), r && Ah(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function B_(e, t, r) {
  return t = Yn(t), F_(e, rb() ? Reflect.construct(t, r || [], Yn(e).constructor) : t.apply(e, r));
}
function F_(e, t) {
  if (t && (ir(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return U_(e);
}
function U_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rb = function() {
    return !!e;
  })();
}
function Yn(e) {
  return Yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yn(e);
}
function W_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Mc(e, t);
}
function Mc(e, t) {
  return Mc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Mc(e, t);
}
function Ka(e, t, r) {
  return t = nb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nb(e) {
  var t = z_(e, "string");
  return ir(t) == "symbol" ? t : t + "";
}
function z_(e, t) {
  if (ir(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ir(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function H_(e, t) {
  if (e == null) return {};
  var r = G_(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function G_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function K_(e) {
  return e.value;
}
function X_(e, t) {
  if (/* @__PURE__ */ E.isValidElement(e))
    return /* @__PURE__ */ E.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ E.createElement(e, t);
  t.ref;
  var r = H_(t, q_);
  return /* @__PURE__ */ E.createElement(Hl, r);
}
var Ph = 1, tr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    k_(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = B_(this, t, [].concat(a)), Ka(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return W_(t, e), L_(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, a = this.getBBox();
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > Ph || Math.abs(a.height - this.lastBoundingBox.height) > Ph) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? it({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var a = this.props, i = a.layout, o = a.align, u = a.verticalAlign, s = a.margin, c = a.chartWidth, f = a.chartHeight, l, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && i === "vertical") {
          var h = this.getBBoxSnapshot();
          l = {
            left: ((c || 0) - h.width) / 2
          };
        } else
          l = o === "right" ? {
            right: s && s.right || 0
          } : {
            left: s && s.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var g = this.getBBoxSnapshot();
          d = {
            top: ((f || 0) - g.height) / 2
          };
        } else
          d = u === "bottom" ? {
            bottom: s && s.bottom || 0
          } : {
            top: s && s.top || 0
          };
      return it(it({}, l), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, u = a.height, s = a.wrapperStyle, c = a.payloadUniqBy, f = a.payload, l = it(it({
        position: "absolute",
        width: o || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(s)), s);
      return /* @__PURE__ */ E.createElement("div", {
        className: "recharts-legend-wrapper",
        style: l,
        ref: function(h) {
          n.wrapperNode = h;
        }
      }, X_(i, it(it({}, this.props), {}, {
        payload: tb(f, c, K_)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, a) {
      var i = it(it({}, this.defaultProps), n.props), o = i.layout;
      return o === "vertical" && B(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || a
      } : null;
    }
  }]);
})(zt);
Ka(tr, "displayName", "Legend");
Ka(tr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Vu, Th;
function V_() {
  if (Th) return Vu;
  Th = 1;
  var e = wn(), t = Kl(), r = Re(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return r(i) || t(i) || !!(n && i && i[n]);
  }
  return Vu = a, Vu;
}
var Yu, Eh;
function ab() {
  if (Eh) return Yu;
  Eh = 1;
  var e = Gm(), t = V_();
  function r(n, a, i, o, u) {
    var s = -1, c = n.length;
    for (i || (i = t), u || (u = []); ++s < c; ) {
      var f = n[s];
      a > 0 && i(f) ? a > 1 ? r(f, a - 1, i, o, u) : e(u, f) : o || (u[u.length] = f);
    }
    return u;
  }
  return Yu = r, Yu;
}
var Zu, jh;
function Y_() {
  if (jh) return Zu;
  jh = 1;
  function e(t) {
    return function(r, n, a) {
      for (var i = -1, o = Object(r), u = a(r), s = u.length; s--; ) {
        var c = u[t ? s : ++i];
        if (n(o[c], c, o) === !1)
          break;
      }
      return r;
    };
  }
  return Zu = e, Zu;
}
var Ju, Mh;
function Z_() {
  if (Mh) return Ju;
  Mh = 1;
  var e = Y_(), t = e();
  return Ju = t, Ju;
}
var Qu, Ch;
function ib() {
  if (Ch) return Qu;
  Ch = 1;
  var e = Z_(), t = Ga();
  function r(n, a) {
    return n && e(n, a, t);
  }
  return Qu = r, Qu;
}
var es, Ih;
function J_() {
  if (Ih) return es;
  Ih = 1;
  var e = On();
  function t(r, n) {
    return function(a, i) {
      if (a == null)
        return a;
      if (!e(a))
        return r(a, i);
      for (var o = a.length, u = n ? o : -1, s = Object(a); (n ? u-- : ++u < o) && i(s[u], u, s) !== !1; )
        ;
      return a;
    };
  }
  return es = t, es;
}
var ts, $h;
function Zl() {
  if ($h) return ts;
  $h = 1;
  var e = ib(), t = J_(), r = t(e);
  return ts = r, ts;
}
var rs, Rh;
function ob() {
  if (Rh) return rs;
  Rh = 1;
  var e = Zl(), t = On();
  function r(n, a) {
    var i = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(u, s, c) {
      o[++i] = a(u, s, c);
    }), o;
  }
  return rs = r, rs;
}
var ns, Dh;
function Q_() {
  if (Dh) return ns;
  Dh = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return ns = e, ns;
}
var as, Nh;
function eO() {
  if (Nh) return as;
  Nh = 1;
  var e = wr();
  function t(r, n) {
    if (r !== n) {
      var a = r !== void 0, i = r === null, o = r === r, u = e(r), s = n !== void 0, c = n === null, f = n === n, l = e(n);
      if (!c && !l && !u && r > n || u && s && f && !c && !l || i && s && f || !a && f || !o)
        return 1;
      if (!i && !u && !l && r < n || l && a && o && !i && !u || c && a && o || !s && o || !f)
        return -1;
    }
    return 0;
  }
  return as = t, as;
}
var is, qh;
function tO() {
  if (qh) return is;
  qh = 1;
  var e = eO();
  function t(r, n, a) {
    for (var i = -1, o = r.criteria, u = n.criteria, s = o.length, c = a.length; ++i < s; ) {
      var f = e(o[i], u[i]);
      if (f) {
        if (i >= c)
          return f;
        var l = a[i];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return is = t, is;
}
var os, kh;
function rO() {
  if (kh) return os;
  kh = 1;
  var e = ql(), t = kl(), r = At(), n = ob(), a = Q_(), i = Xm(), o = tO(), u = Or(), s = Re();
  function c(f, l, d) {
    l.length ? l = e(l, function(v) {
      return s(v) ? function(p) {
        return t(p, v.length === 1 ? v[0] : v);
      } : v;
    }) : l = [u];
    var h = -1;
    l = e(l, i(r));
    var g = n(f, function(v, p, m) {
      var x = e(l, function(w) {
        return w(v);
      });
      return { criteria: x, index: ++h, value: v };
    });
    return a(g, function(v, p) {
      return o(v, p, d);
    });
  }
  return os = c, os;
}
var us, Lh;
function nO() {
  if (Lh) return us;
  Lh = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return us = e, us;
}
var ss, Bh;
function aO() {
  if (Bh) return ss;
  Bh = 1;
  var e = nO(), t = Math.max;
  function r(n, a, i) {
    return a = t(a === void 0 ? n.length - 1 : a, 0), function() {
      for (var o = arguments, u = -1, s = t(o.length - a, 0), c = Array(s); ++u < s; )
        c[u] = o[a + u];
      u = -1;
      for (var f = Array(a + 1); ++u < a; )
        f[u] = o[u];
      return f[a] = i(c), e(n, this, f);
    };
  }
  return ss = r, ss;
}
var cs, Fh;
function iO() {
  if (Fh) return cs;
  Fh = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return cs = e, cs;
}
var ls, Uh;
function ub() {
  if (Uh) return ls;
  Uh = 1;
  var e = Ht(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return ls = t, ls;
}
var fs, Wh;
function oO() {
  if (Wh) return fs;
  Wh = 1;
  var e = iO(), t = ub(), r = Or(), n = t ? function(a, i) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : r;
  return fs = n, fs;
}
var ds, zh;
function uO() {
  if (zh) return ds;
  zh = 1;
  var e = 800, t = 16, r = Date.now;
  function n(a) {
    var i = 0, o = 0;
    return function() {
      var u = r(), s = t - (u - o);
      if (o = u, s > 0) {
        if (++i >= e)
          return arguments[0];
      } else
        i = 0;
      return a.apply(void 0, arguments);
    };
  }
  return ds = n, ds;
}
var ps, Hh;
function sO() {
  if (Hh) return ps;
  Hh = 1;
  var e = oO(), t = uO(), r = t(e);
  return ps = r, ps;
}
var hs, Gh;
function cO() {
  if (Gh) return hs;
  Gh = 1;
  var e = Or(), t = aO(), r = sO();
  function n(a, i) {
    return r(t(a, i, e), a + "");
  }
  return hs = n, hs;
}
var vs, Kh;
function Xa() {
  if (Kh) return vs;
  Kh = 1;
  var e = Rl(), t = On(), r = Xl(), n = St();
  function a(i, o, u) {
    if (!n(u))
      return !1;
    var s = typeof o;
    return (s == "number" ? t(u) && r(o, u.length) : s == "string" && o in u) ? e(u[o], i) : !1;
  }
  return vs = a, vs;
}
var ys, Xh;
function lO() {
  if (Xh) return ys;
  Xh = 1;
  var e = ab(), t = rO(), r = cO(), n = Xa(), a = r(function(i, o) {
    if (i == null)
      return [];
    var u = o.length;
    return u > 1 && n(i, o[0], o[1]) ? o = [] : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(i, e(o, 1), []);
  });
  return ys = a, ys;
}
var fO = lO();
const Jl = /* @__PURE__ */ ie(fO);
function Hr(e) {
  "@babel/helpers - typeof";
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
function Cc() {
  return Cc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cc.apply(this, arguments);
}
function dO(e, t) {
  return yO(e) || vO(e, t) || hO(e, t) || pO();
}
function pO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hO(e, t) {
  if (e) {
    if (typeof e == "string") return Vh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vh(e, t);
  }
}
function Vh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vO(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function yO(e) {
  if (Array.isArray(e)) return e;
}
function Yh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yh(Object(r), !0).forEach(function(n) {
      gO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gO(e, t, r) {
  return t = mO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mO(e) {
  var t = bO(e, "string");
  return Hr(t) == "symbol" ? t : t + "";
}
function bO(e, t) {
  if (Hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xO(e) {
  return Array.isArray(e) && we(e[0]) && we(e[1]) ? e.join(" ~ ") : e;
}
var wO = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, u = o === void 0 ? {} : o, s = t.labelStyle, c = s === void 0 ? {} : s, f = t.payload, l = t.formatter, d = t.itemSorter, h = t.wrapperClassName, g = t.labelClassName, v = t.label, p = t.labelFormatter, m = t.accessibilityLayer, x = m === void 0 ? !1 : m, w = function() {
    if (f && f.length) {
      var P = {
        padding: 0,
        margin: 0
      }, j = (d ? Jl(f, d) : f).map(function(I, M) {
        if (I.type === "none")
          return null;
        var R = gs({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: I.color || "#000"
        }, u), N = I.formatter || l || xO, q = I.value, k = I.name, W = q, G = k;
        if (N && W != null && G != null) {
          var F = N(q, k, I, M, f);
          if (Array.isArray(F)) {
            var K = dO(F, 2);
            W = K[0], G = K[1];
          } else
            W = F;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ E.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(M),
            style: R
          }, we(G) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, G) : null, we(G) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, W), /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, I.unit || ""))
        );
      });
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: P
      }, j);
    }
    return null;
  }, _ = gs({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), y = gs({
    margin: 0
  }, c), b = !Y(v), O = b ? v : "", S = se("recharts-default-tooltip", h), A = se("recharts-tooltip-label", g);
  b && p && f !== void 0 && f !== null && (O = p(v, f));
  var C = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ E.createElement("div", Cc({
    className: S,
    style: _
  }, C), /* @__PURE__ */ E.createElement("p", {
    className: A,
    style: y
  }, /* @__PURE__ */ E.isValidElement(O) ? O : "".concat(O)), w());
};
function Gr(e) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function In(e, t, r) {
  return t = _O(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _O(e) {
  var t = OO(e, "string");
  return Gr(t) == "symbol" ? t : t + "";
}
function OO(e, t) {
  if (Gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pr = "recharts-tooltip-wrapper", SO = {
  visibility: "hidden"
};
function AO(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return se(Pr, In(In(In(In({}, "".concat(Pr, "-right"), B(r) && t && B(t.x) && r >= t.x), "".concat(Pr, "-left"), B(r) && t && B(t.x) && r < t.x), "".concat(Pr, "-bottom"), B(n) && t && B(t.y) && n >= t.y), "".concat(Pr, "-top"), B(n) && t && B(t.y) && n < t.y));
}
function Zh(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, a = e.offsetTopLeft, i = e.position, o = e.reverseDirection, u = e.tooltipDimension, s = e.viewBox, c = e.viewBoxDimension;
  if (i && B(i[n]))
    return i[n];
  var f = r[n] - u - a, l = r[n] + a;
  if (t[n])
    return o[n] ? f : l;
  if (o[n]) {
    var d = f, h = s[n];
    return d < h ? Math.max(l, s[n]) : Math.max(f, s[n]);
  }
  var g = l + u, v = s[n] + c;
  return g > v ? Math.max(f, s[n]) : Math.max(l, s[n]);
}
function PO(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function TO(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, u = e.useTranslate3d, s = e.viewBox, c, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = Zh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), l = Zh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = PO({
    translateX: f,
    translateY: l,
    useTranslate3d: u
  })) : c = SO, {
    cssProperties: c,
    cssClasses: AO({
      translateX: f,
      translateY: l,
      coordinate: r
    })
  };
}
function or(e) {
  "@babel/helpers - typeof";
  return or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, or(e);
}
function Jh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jh(Object(r), !0).forEach(function(n) {
      $c(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cb(n.key), n);
  }
}
function MO(e, t, r) {
  return t && jO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function CO(e, t, r) {
  return t = Zn(t), IO(e, sb() ? Reflect.construct(t, r || [], Zn(e).constructor) : t.apply(e, r));
}
function IO(e, t) {
  if (t && (or(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $O(e);
}
function $O(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sb = function() {
    return !!e;
  })();
}
function Zn(e) {
  return Zn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Zn(e);
}
function RO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ic(e, t);
}
function Ic(e, t) {
  return Ic = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ic(e, t);
}
function $c(e, t, r) {
  return t = cb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cb(e) {
  var t = DO(e, "string");
  return or(t) == "symbol" ? t : t + "";
}
function DO(e, t) {
  if (or(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ev = 1, NO = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    EO(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = CO(this, t, [].concat(a)), $c(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), $c(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, s, c, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.x) !== null && u !== void 0 ? u : 0,
            y: (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return RO(t, e), MO(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > ev || Math.abs(n.height - this.state.lastBoundingBox.height) > ev) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, a;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, u = a.animationDuration, s = a.animationEasing, c = a.children, f = a.coordinate, l = a.hasPayload, d = a.isAnimationActive, h = a.offset, g = a.position, v = a.reverseDirection, p = a.useTranslate3d, m = a.viewBox, x = a.wrapperStyle, w = TO({
        allowEscapeViewBox: o,
        coordinate: f,
        offsetTopLeft: h,
        position: g,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: p,
        viewBox: m
      }), _ = w.cssClasses, y = w.cssProperties, b = Qh(Qh({
        transition: d && i ? "transform ".concat(u, "ms ").concat(s) : void 0
      }, y), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && i && l ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, x);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ E.createElement("div", {
          tabIndex: -1,
          className: _,
          style: b,
          ref: function(S) {
            n.wrapperNode = S;
          }
        }, c)
      );
    }
  }]);
})(zt), qO = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Va = {
  isSsr: qO()
};
function ur(e) {
  "@babel/helpers - typeof";
  return ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ur(e);
}
function tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tv(Object(r), !0).forEach(function(n) {
      Ql(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function LO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fb(n.key), n);
  }
}
function BO(e, t, r) {
  return t && LO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function FO(e, t, r) {
  return t = Jn(t), UO(e, lb() ? Reflect.construct(t, r || [], Jn(e).constructor) : t.apply(e, r));
}
function UO(e, t) {
  if (t && (ur(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return WO(e);
}
function WO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lb = function() {
    return !!e;
  })();
}
function Jn(e) {
  return Jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Jn(e);
}
function zO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rc(e, t);
}
function Rc(e, t) {
  return Rc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Rc(e, t);
}
function Ql(e, t, r) {
  return t = fb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fb(e) {
  var t = HO(e, "string");
  return ur(t) == "symbol" ? t : t + "";
}
function HO(e, t) {
  if (ur(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ur(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function GO(e) {
  return e.dataKey;
}
function KO(e, t) {
  return /* @__PURE__ */ E.isValidElement(e) ? /* @__PURE__ */ E.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ E.createElement(e, t) : /* @__PURE__ */ E.createElement(wO, t);
}
var Je = /* @__PURE__ */ (function(e) {
  function t() {
    return kO(this, t), FO(this, t, arguments);
  }
  return zO(t, e), BO(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, u = a.animationDuration, s = a.animationEasing, c = a.content, f = a.coordinate, l = a.filterNull, d = a.isAnimationActive, h = a.offset, g = a.payload, v = a.payloadUniqBy, p = a.position, m = a.reverseDirection, x = a.useTranslate3d, w = a.viewBox, _ = a.wrapperStyle, y = g ?? [];
      l && y.length && (y = tb(g.filter(function(O) {
        return O.value != null && (O.hide !== !0 || n.props.includeHidden);
      }), v, GO));
      var b = y.length > 0;
      return /* @__PURE__ */ E.createElement(NO, {
        allowEscapeViewBox: o,
        animationDuration: u,
        animationEasing: s,
        isAnimationActive: d,
        active: i,
        coordinate: f,
        hasPayload: b,
        offset: h,
        position: p,
        reverseDirection: m,
        useTranslate3d: x,
        viewBox: w,
        wrapperStyle: _
      }, KO(c, rv(rv({}, this.props), {}, {
        payload: y
      })));
    }
  }]);
})(zt);
Ql(Je, "displayName", "Tooltip");
Ql(Je, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Va.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var ms, nv;
function XO() {
  if (nv) return ms;
  nv = 1;
  var e = at(), t = function() {
    return e.Date.now();
  };
  return ms = t, ms;
}
var bs, av;
function VO() {
  if (av) return bs;
  av = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return bs = t, bs;
}
var xs, iv;
function YO() {
  if (iv) return xs;
  iv = 1;
  var e = VO(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return xs = r, xs;
}
var ws, ov;
function db() {
  if (ov) return ws;
  ov = 1;
  var e = YO(), t = St(), r = wr(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, u = parseInt;
  function s(c) {
    if (typeof c == "number")
      return c;
    if (r(c))
      return n;
    if (t(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var l = i.test(c);
    return l || o.test(c) ? u(c.slice(2), l ? 2 : 8) : a.test(c) ? n : +c;
  }
  return ws = s, ws;
}
var _s, uv;
function ZO() {
  if (uv) return _s;
  uv = 1;
  var e = St(), t = XO(), r = db(), n = "Expected a function", a = Math.max, i = Math.min;
  function o(u, s, c) {
    var f, l, d, h, g, v, p = 0, m = !1, x = !1, w = !0;
    if (typeof u != "function")
      throw new TypeError(n);
    s = r(s) || 0, e(c) && (m = !!c.leading, x = "maxWait" in c, d = x ? a(r(c.maxWait) || 0, s) : d, w = "trailing" in c ? !!c.trailing : w);
    function _(j) {
      var I = f, M = l;
      return f = l = void 0, p = j, h = u.apply(M, I), h;
    }
    function y(j) {
      return p = j, g = setTimeout(S, s), m ? _(j) : h;
    }
    function b(j) {
      var I = j - v, M = j - p, R = s - I;
      return x ? i(R, d - M) : R;
    }
    function O(j) {
      var I = j - v, M = j - p;
      return v === void 0 || I >= s || I < 0 || x && M >= d;
    }
    function S() {
      var j = t();
      if (O(j))
        return A(j);
      g = setTimeout(S, b(j));
    }
    function A(j) {
      return g = void 0, w && f ? _(j) : (f = l = void 0, h);
    }
    function C() {
      g !== void 0 && clearTimeout(g), p = 0, f = v = l = g = void 0;
    }
    function T() {
      return g === void 0 ? h : A(t());
    }
    function P() {
      var j = t(), I = O(j);
      if (f = arguments, l = this, v = j, I) {
        if (g === void 0)
          return y(v);
        if (x)
          return clearTimeout(g), g = setTimeout(S, s), _(v);
      }
      return g === void 0 && (g = setTimeout(S, s)), h;
    }
    return P.cancel = C, P.flush = T, P;
  }
  return _s = o, _s;
}
var Os, sv;
function JO() {
  if (sv) return Os;
  sv = 1;
  var e = ZO(), t = St(), r = "Expected a function";
  function n(a, i, o) {
    var u = !0, s = !0;
    if (typeof a != "function")
      throw new TypeError(r);
    return t(o) && (u = "leading" in o ? !!o.leading : u, s = "trailing" in o ? !!o.trailing : s), e(a, i, {
      leading: u,
      maxWait: i,
      trailing: s
    });
  }
  return Os = n, Os;
}
var QO = JO();
const pb = /* @__PURE__ */ ie(QO);
function Kr(e) {
  "@babel/helpers - typeof";
  return Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kr(e);
}
function cv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cv(Object(r), !0).forEach(function(n) {
      eS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eS(e, t, r) {
  return t = tS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tS(e) {
  var t = rS(e, "string");
  return Kr(t) == "symbol" ? t : t + "";
}
function rS(e, t) {
  if (Kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nS(e, t) {
  return uS(e) || oS(e, t) || iS(e, t) || aS();
}
function aS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iS(e, t) {
  if (e) {
    if (typeof e == "string") return lv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lv(e, t);
  }
}
function lv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function uS(e) {
  if (Array.isArray(e)) return e;
}
var sS = /* @__PURE__ */ Ie(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, u = e.height, s = u === void 0 ? "100%" : u, c = e.minWidth, f = c === void 0 ? 0 : c, l = e.minHeight, d = e.maxHeight, h = e.children, g = e.debounce, v = g === void 0 ? 0 : g, p = e.id, m = e.className, x = e.onResize, w = e.style, _ = w === void 0 ? {} : w, y = Ur(null), b = Ur();
  b.current = x, px(t, function() {
    return Object.defineProperty(y.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), y.current;
      },
      configurable: !0
    });
  });
  var O = Tl({
    containerWidth: a.width,
    containerHeight: a.height
  }), S = nS(O, 2), A = S[0], C = S[1], T = hx(function(j, I) {
    C(function(M) {
      var R = Math.round(j), N = Math.round(I);
      return M.containerWidth === R && M.containerHeight === N ? M : {
        containerWidth: R,
        containerHeight: N
      };
    });
  }, []);
  Ia(function() {
    var j = function(k) {
      var W, G = k[0].contentRect, F = G.width, K = G.height;
      T(F, K), (W = b.current) === null || W === void 0 || W.call(b, F, K);
    };
    v > 0 && (j = pb(j, v, {
      trailing: !0,
      leading: !1
    }));
    var I = new ResizeObserver(j), M = y.current.getBoundingClientRect(), R = M.width, N = M.height;
    return T(R, N), I.observe(y.current), function() {
      I.disconnect();
    };
  }, [T, v]);
  var P = El(function() {
    var j = A.containerWidth, I = A.containerHeight;
    if (j < 0 || I < 0)
      return null;
    kt(Dt(o) || Dt(s), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, s), kt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var M = Dt(o) ? j : o, R = Dt(s) ? I : s;
    r && r > 0 && (M ? R = M / r : R && (M = R * r), d && R > d && (R = d)), kt(M > 0 || R > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, M, R, o, s, f, l, r);
    var N = !Array.isArray(h) && ct(h.type).endsWith("Chart");
    return E.Children.map(h, function(q) {
      return /* @__PURE__ */ E.isValidElement(q) ? /* @__PURE__ */ xe(q, $n({
        width: M,
        height: R
      }, N ? {
        style: $n({
          height: "100%",
          width: "100%",
          maxHeight: R,
          maxWidth: M
        }, q.props.style)
      } : {})) : q;
    });
  }, [r, h, s, d, l, f, A, o]);
  return /* @__PURE__ */ E.createElement("div", {
    id: p ? "".concat(p) : void 0,
    className: se("recharts-responsive-container", m),
    style: $n($n({}, _), {}, {
      width: o,
      height: s,
      minWidth: f,
      minHeight: l,
      maxHeight: d
    }),
    ref: y
  }, P);
}), hb = function(t) {
  return null;
};
hb.displayName = "Cell";
function Xr(e) {
  "@babel/helpers - typeof";
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xr(e);
}
function fv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fv(Object(r), !0).forEach(function(n) {
      cS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cS(e, t, r) {
  return t = lS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lS(e) {
  var t = fS(e, "string");
  return Xr(t) == "symbol" ? t : t + "";
}
function fS(e, t) {
  if (Xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zt = {
  widthCache: {},
  cacheCount: 0
}, dS = 2e3, pS = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, dv = "recharts_measurement_span";
function hS(e) {
  var t = Dc({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var pv = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Va.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = hS(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Zt.widthCache[a])
    return Zt.widthCache[a];
  try {
    var i = document.getElementById(dv);
    i || (i = document.createElement("span"), i.setAttribute("id", dv), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = Dc(Dc({}, pS), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var u = i.getBoundingClientRect(), s = {
      width: u.width,
      height: u.height
    };
    return Zt.widthCache[a] = s, ++Zt.cacheCount > dS && (Zt.cacheCount = 0, Zt.widthCache = {}), s;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, vS = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function Vr(e) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
}
function Qn(e, t) {
  return bS(e) || mS(e, t) || gS(e, t) || yS();
}
function yS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gS(e, t) {
  if (e) {
    if (typeof e == "string") return hv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hv(e, t);
  }
}
function hv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function bS(e) {
  if (Array.isArray(e)) return e;
}
function xS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _S(n.key), n);
  }
}
function wS(e, t, r) {
  return t && vv(e.prototype, t), r && vv(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _S(e) {
  var t = OS(e, "string");
  return Vr(t) == "symbol" ? t : t + "";
}
function OS(e, t) {
  if (Vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var yv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, gv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, SS = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, AS = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, vb = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, PS = Object.keys(vb), Qt = "NaN";
function TS(e, t) {
  return e * vb[t];
}
var Rn = /* @__PURE__ */ (function() {
  function e(t, r) {
    xS(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !SS.test(r) && (this.num = NaN, this.unit = ""), PS.includes(r) && (this.num = TS(t, r), this.unit = "px");
  }
  return wS(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, a = (n = AS.exec(r)) !== null && n !== void 0 ? n : [], i = Qn(a, 3), o = i[1], u = i[2];
      return new e(parseFloat(o), u ?? "");
    }
  }]);
})();
function yb(e) {
  if (e.includes(Qt))
    return Qt;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = yv.exec(t)) !== null && r !== void 0 ? r : [], a = Qn(n, 4), i = a[1], o = a[2], u = a[3], s = Rn.parse(i ?? ""), c = Rn.parse(u ?? ""), f = o === "*" ? s.multiply(c) : s.divide(c);
    if (f.isNaN())
      return Qt;
    t = t.replace(yv, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, d = (l = gv.exec(t)) !== null && l !== void 0 ? l : [], h = Qn(d, 4), g = h[1], v = h[2], p = h[3], m = Rn.parse(g ?? ""), x = Rn.parse(p ?? ""), w = v === "+" ? m.add(x) : m.subtract(x);
    if (w.isNaN())
      return Qt;
    t = t.replace(gv, w.toString());
  }
  return t;
}
var mv = /\(([^()]*)\)/;
function ES(e) {
  for (var t = e; t.includes("("); ) {
    var r = mv.exec(t), n = Qn(r, 2), a = n[1];
    t = t.replace(mv, yb(a));
  }
  return t;
}
function jS(e) {
  var t = e.replace(/\s+/g, "");
  return t = ES(t), t = yb(t), t;
}
function MS(e) {
  try {
    return jS(e);
  } catch {
    return Qt;
  }
}
function Ss(e) {
  var t = MS(e.slice(5, -1));
  return t === Qt ? "" : t;
}
var CS = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], IS = ["dx", "dy", "angle", "className", "breakAll"];
function Nc() {
  return Nc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nc.apply(this, arguments);
}
function bv(e, t) {
  if (e == null) return {};
  var r = $S(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $S(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function xv(e, t) {
  return qS(e) || NS(e, t) || DS(e, t) || RS();
}
function RS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DS(e, t) {
  if (e) {
    if (typeof e == "string") return wv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wv(e, t);
  }
}
function wv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function NS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function qS(e) {
  if (Array.isArray(e)) return e;
}
var gb = /[ \f\n\r\t\v\u2028\u2029]+/, mb = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    Y(r) || (n ? i = r.toString().split("") : i = r.toString().split(gb));
    var o = i.map(function(s) {
      return {
        word: s,
        width: pv(s, a).width
      };
    }), u = n ? 0 : pv(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, kS = function(t, r, n, a, i) {
  var o = t.maxLines, u = t.children, s = t.style, c = t.breakAll, f = B(o), l = u, d = function() {
    var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return M.reduce(function(R, N) {
      var q = N.word, k = N.width, W = R[R.length - 1];
      if (W && (a == null || i || W.width + k + n < Number(a)))
        W.words.push(q), W.width += k + n;
      else {
        var G = {
          words: [q],
          width: k
        };
        R.push(G);
      }
      return R;
    }, []);
  }, h = d(r), g = function(M) {
    return M.reduce(function(R, N) {
      return R.width > N.width ? R : N;
    });
  };
  if (!f)
    return h;
  for (var v = "…", p = function(M) {
    var R = l.slice(0, M), N = mb({
      breakAll: c,
      style: s,
      children: R + v
    }).wordsWithComputedWidth, q = d(N), k = q.length > o || g(q).width > Number(a);
    return [k, q];
  }, m = 0, x = l.length - 1, w = 0, _; m <= x && w <= l.length - 1; ) {
    var y = Math.floor((m + x) / 2), b = y - 1, O = p(b), S = xv(O, 2), A = S[0], C = S[1], T = p(y), P = xv(T, 1), j = P[0];
    if (!A && !j && (m = y + 1), A && j && (x = y - 1), !A && j) {
      _ = C;
      break;
    }
    w++;
  }
  return _ || h;
}, _v = function(t) {
  var r = Y(t) ? [] : t.toString().split(gb);
  return [{
    words: r
  }];
}, LS = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, u = t.maxLines;
  if ((r || n) && !Va.isSsr) {
    var s, c, f = mb({
      breakAll: o,
      children: a,
      style: i
    });
    if (f) {
      var l = f.wordsWithComputedWidth, d = f.spaceWidth;
      s = l, c = d;
    } else
      return _v(a);
    return kS({
      breakAll: o,
      children: a,
      maxLines: u,
      style: i
    }, s, c, r, n);
  }
  return _v(a);
}, Ov = "#808080", qc = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, u = o === void 0 ? "1em" : o, s = t.capHeight, c = s === void 0 ? "0.71em" : s, f = t.scaleToFit, l = f === void 0 ? !1 : f, d = t.textAnchor, h = d === void 0 ? "start" : d, g = t.verticalAnchor, v = g === void 0 ? "end" : g, p = t.fill, m = p === void 0 ? Ov : p, x = bv(t, CS), w = El(function() {
    return LS({
      breakAll: x.breakAll,
      children: x.children,
      maxLines: x.maxLines,
      scaleToFit: l,
      style: x.style,
      width: x.width
    });
  }, [x.breakAll, x.children, x.maxLines, l, x.style, x.width]), _ = x.dx, y = x.dy, b = x.angle, O = x.className, S = x.breakAll, A = bv(x, IS);
  if (!we(n) || !we(i))
    return null;
  var C = n + (B(_) ? _ : 0), T = i + (B(y) ? y : 0), P;
  switch (v) {
    case "start":
      P = Ss("calc(".concat(c, ")"));
      break;
    case "middle":
      P = Ss("calc(".concat((w.length - 1) / 2, " * -").concat(u, " + (").concat(c, " / 2))"));
      break;
    default:
      P = Ss("calc(".concat(w.length - 1, " * -").concat(u, ")"));
      break;
  }
  var j = [];
  if (l) {
    var I = w[0].width, M = x.width;
    j.push("scale(".concat((B(M) ? M / I : 1) / I, ")"));
  }
  return b && j.push("rotate(".concat(b, ", ").concat(C, ", ").concat(T, ")")), j.length && (A.transform = j.join(" ")), /* @__PURE__ */ E.createElement("text", Nc({}, ce(A, !0), {
    x: C,
    y: T,
    className: se("recharts-text", O),
    textAnchor: h,
    fill: m.includes("url") ? Ov : m
  }), w.map(function(R, N) {
    var q = R.words.join(S ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ E.createElement("tspan", {
        x: C,
        dy: N === 0 ? P : u,
        key: "".concat(q, "-").concat(N)
      }, q)
    );
  }));
};
function _t(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function BS(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ef(e) {
  let t, r, n;
  e.length !== 2 ? (t = _t, r = (u, s) => _t(e(u), s), n = (u, s) => e(u) - s) : (t = e === _t || e === BS ? e : FS, r = e, n = e);
  function a(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(u[l], s) < 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function i(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(u[l], s) <= 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function o(u, s, c = 0, f = u.length) {
    const l = a(u, s, c, f - 1);
    return l > c && n(u[l - 1], s) > -n(u[l], s) ? l - 1 : l;
  }
  return { left: a, center: o, right: i };
}
function FS() {
  return 0;
}
function bb(e) {
  return e === null ? NaN : +e;
}
function* US(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const WS = ef(_t), Sn = WS.right;
ef(bb).center;
class Sv extends Map {
  constructor(t, r = GS) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(Av(this, t));
  }
  has(t) {
    return super.has(Av(this, t));
  }
  set(t, r) {
    return super.set(zS(this, t), r);
  }
  delete(t) {
    return super.delete(HS(this, t));
  }
}
function Av({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function zS({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function HS({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function GS(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function KS(e = _t) {
  if (e === _t) return xb;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function xb(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const XS = Math.sqrt(50), VS = Math.sqrt(10), YS = Math.sqrt(2);
function ea(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= XS ? 10 : i >= VS ? 5 : i >= YS ? 2 : 1;
  let u, s, c;
  return a < 0 ? (c = Math.pow(10, -a) / o, u = Math.round(e * c), s = Math.round(t * c), u / c < e && ++u, s / c > t && --s, c = -c) : (c = Math.pow(10, a) * o, u = Math.round(e / c), s = Math.round(t / c), u * c < e && ++u, s * c > t && --s), s < u && 0.5 <= r && r < 2 ? ea(e, t, r * 2) : [u, s, c];
}
function kc(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? ea(t, e, r) : ea(e, t, r);
  if (!(i >= a)) return [];
  const u = i - a + 1, s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (i - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (a + c) * o;
  return s;
}
function Lc(e, t, r) {
  return t = +t, e = +e, r = +r, ea(e, t, r)[2];
}
function Bc(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? Lc(t, e, r) : Lc(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function Pv(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Tv(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function wb(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? xb : KS(a); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, f = Math.log(s), l = 0.5 * Math.exp(2 * f / 3), d = 0.5 * Math.sqrt(f * l * (s - l) / s) * (c - s / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - c * l / s + d)), g = Math.min(n, Math.floor(t + (s - c) * l / s + d));
      wb(e, t, h, g, a);
    }
    const i = e[t];
    let o = r, u = n;
    for (Tr(e, r, t), a(e[n], i) > 0 && Tr(e, r, n); o < u; ) {
      for (Tr(e, o, u), ++o, --u; a(e[o], i) < 0; ) ++o;
      for (; a(e[u], i) > 0; ) --u;
    }
    a(e[r], i) === 0 ? Tr(e, r, u) : (++u, Tr(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Tr(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function ZS(e, t, r) {
  if (e = Float64Array.from(US(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Tv(e);
    if (t >= 1) return Pv(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = Pv(wb(e, i).subarray(0, i + 1)), u = Tv(e.subarray(i + 1));
    return o + (u - o) * (a - i);
  }
}
function JS(e, t, r = bb) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), u = +r(e[i + 1], i + 1, e);
    return o + (u - o) * (a - i);
  }
}
function QS(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(a); ++n < a; )
    i[n] = e + n * r;
  return i;
}
function ze(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function gt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Fc = /* @__PURE__ */ Symbol("implicit");
function tf() {
  var e = new Sv(), t = [], r = [], n = Fc;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== Fc) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new Sv();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return tf(t, r).unknown(n);
  }, ze.apply(a, arguments), a;
}
function Yr() {
  var e = tf().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, u = !1, s = 0, c = 0, f = 0.5;
  delete e.unknown;
  function l() {
    var d = t().length, h = a < n, g = h ? a : n, v = h ? n : a;
    i = (v - g) / Math.max(1, d - s + c * 2), u && (i = Math.floor(i)), g += (v - g - i * (d - s)) * f, o = i * (1 - s), u && (g = Math.round(g), o = Math.round(o));
    var p = QS(d).map(function(m) {
      return g + i * m;
    });
    return r(h ? p.reverse() : p);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), l()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, a] = d, n = +n, a = +a, l()) : [n, a];
  }, e.rangeRound = function(d) {
    return [n, a] = d, n = +n, a = +a, u = !0, l();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, l()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (s = Math.min(1, c = +d), l()) : s;
  }, e.paddingInner = function(d) {
    return arguments.length ? (s = Math.min(1, d), l()) : s;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, l()) : c;
  }, e.align = function(d) {
    return arguments.length ? (f = Math.max(0, Math.min(1, d)), l()) : f;
  }, e.copy = function() {
    return Yr(t(), [n, a]).round(u).paddingInner(s).paddingOuter(c).align(f);
  }, ze.apply(l(), arguments);
}
function _b(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return _b(t());
  }, e;
}
function Lr() {
  return _b(Yr.apply(null, arguments).paddingInner(1));
}
function rf(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function eA(e, t) {
  t === void 0 && (t = e, e = Ra);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[u](o - u);
  };
}
function tA(e) {
  return function() {
    return e;
  };
}
function ta(e) {
  return +e;
}
var Ev = [0, 1];
function je(e) {
  return e;
}
function Uc(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : tA(isNaN(t) ? NaN : 0.5);
}
function rA(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function nA(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = Uc(a, n), i = r(o, i)) : (n = Uc(n, a), i = r(i, o)), function(u) {
    return i(n(u));
  };
}
function aA(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = Uc(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(u) {
    var s = Sn(e, u, 1, n) - 1;
    return i[s](a[s](u));
  };
}
function An(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ya() {
  var e = Ev, t = Ev, r = Ra, n, a, i, o = je, u, s, c;
  function f() {
    var d = Math.min(e.length, t.length);
    return o !== je && (o = rA(e[0], e[d - 1])), u = d > 2 ? aA : nA, s = c = null, l;
  }
  function l(d) {
    return d == null || isNaN(d = +d) ? i : (s || (s = u(e.map(n), t, r)))(n(o(d)));
  }
  return l.invert = function(d) {
    return o(a((c || (c = u(t, e.map(n), gx)))(d)));
  }, l.domain = function(d) {
    return arguments.length ? (e = Array.from(d, ta), f()) : e.slice();
  }, l.range = function(d) {
    return arguments.length ? (t = Array.from(d), f()) : t.slice();
  }, l.rangeRound = function(d) {
    return t = Array.from(d), r = rf, f();
  }, l.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : je, f()) : o !== je;
  }, l.interpolate = function(d) {
    return arguments.length ? (r = d, f()) : r;
  }, l.unknown = function(d) {
    return arguments.length ? (i = d, l) : i;
  }, function(d, h) {
    return n = d, a = h, f();
  };
}
function nf() {
  return Ya()(je, je);
}
function iA(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ra(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function sr(e) {
  return e = ra(Math.abs(e)), e ? e[1] : NaN;
}
function oA(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, u = e[0], s = 0; a > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), i.push(r.substring(a -= u, a + u)), !((s += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function uA(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var sA = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Zr(e) {
  if (!(t = sA.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new af({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Zr.prototype = af.prototype;
function af(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
af.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function cA(e) {
  e: for (var t = e.length, r = 1, n = -1, a; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        n === 0 && (n = r), a = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(a + 1) : e;
}
var na;
function lA(e, t) {
  var r = ra(e, t);
  if (!r) return na = void 0, e.toPrecision(t);
  var n = r[0], a = r[1], i = a - (na = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + ra(e, Math.max(0, t + i - 1))[0];
}
function jv(e, t) {
  var r = ra(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const Mv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: iA,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => jv(e * 100, t),
  r: jv,
  s: lA,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Cv(e) {
  return e;
}
var Iv = Array.prototype.map, $v = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function fA(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Cv : oA(Iv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? Cv : uA(Iv.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l, d) {
    l = Zr(l);
    var h = l.fill, g = l.align, v = l.sign, p = l.symbol, m = l.zero, x = l.width, w = l.comma, _ = l.precision, y = l.trim, b = l.type;
    b === "n" ? (w = !0, b = "g") : Mv[b] || (_ === void 0 && (_ = 12), y = !0, b = "g"), (m || h === "0" && g === "=") && (m = !0, h = "0", g = "=");
    var O = (d && d.prefix !== void 0 ? d.prefix : "") + (p === "$" ? r : p === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : ""), S = (p === "$" ? n : /[%p]/.test(b) ? o : "") + (d && d.suffix !== void 0 ? d.suffix : ""), A = Mv[b], C = /[defgprs%]/.test(b);
    _ = _ === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
    function T(P) {
      var j = O, I = S, M, R, N;
      if (b === "c")
        I = A(P) + I, P = "";
      else {
        P = +P;
        var q = P < 0 || 1 / P < 0;
        if (P = isNaN(P) ? s : A(Math.abs(P), _), y && (P = cA(P)), q && +P == 0 && v !== "+" && (q = !1), j = (q ? v === "(" ? v : u : v === "-" || v === "(" ? "" : v) + j, I = (b === "s" && !isNaN(P) && na !== void 0 ? $v[8 + na / 3] : "") + I + (q && v === "(" ? ")" : ""), C) {
          for (M = -1, R = P.length; ++M < R; )
            if (N = P.charCodeAt(M), 48 > N || N > 57) {
              I = (N === 46 ? a + P.slice(M + 1) : P.slice(M)) + I, P = P.slice(0, M);
              break;
            }
        }
      }
      w && !m && (P = t(P, 1 / 0));
      var k = j.length + P.length + I.length, W = k < x ? new Array(x - k + 1).join(h) : "";
      switch (w && m && (P = t(W + P, W.length ? x - I.length : 1 / 0), W = ""), g) {
        case "<":
          P = j + P + I + W;
          break;
        case "=":
          P = j + W + P + I;
          break;
        case "^":
          P = W.slice(0, k = W.length >> 1) + j + P + I + W.slice(k);
          break;
        default:
          P = W + j + P + I;
          break;
      }
      return i(P);
    }
    return T.toString = function() {
      return l + "";
    }, T;
  }
  function f(l, d) {
    var h = Math.max(-8, Math.min(8, Math.floor(sr(d) / 3))) * 3, g = Math.pow(10, -h), v = c((l = Zr(l), l.type = "f", l), { suffix: $v[8 + h / 3] });
    return function(p) {
      return v(g * p);
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var Dn, of, Ob;
dA({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function dA(e) {
  return Dn = fA(e), of = Dn.format, Ob = Dn.formatPrefix, Dn;
}
function pA(e) {
  return Math.max(0, -sr(Math.abs(e)));
}
function hA(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(sr(t) / 3))) * 3 - sr(Math.abs(e)));
}
function vA(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, sr(t) - sr(e)) + 1;
}
function Sb(e, t, r, n) {
  var a = Bc(e, t, r), i;
  switch (n = Zr(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = hA(a, o)) && (n.precision = i), Ob(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = vA(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = pA(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return of(n);
}
function Pt(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return kc(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return Sb(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], u = n[i], s, c, f = 10;
    for (u < o && (c = o, o = u, u = c, c = a, a = i, i = c); f-- > 0; ) {
      if (c = Lc(o, u, r), c === s)
        return n[a] = o, n[i] = u, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function aa() {
  var e = nf();
  return e.copy = function() {
    return An(e, aa());
  }, ze.apply(e, arguments), Pt(e);
}
function Ab(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, ta), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Ab(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ta) : [0, 1], Pt(r);
}
function Pb(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function Rv(e) {
  return Math.log(e);
}
function Dv(e) {
  return Math.exp(e);
}
function yA(e) {
  return -Math.log(-e);
}
function gA(e) {
  return -Math.exp(-e);
}
function mA(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function bA(e) {
  return e === 10 ? mA : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function xA(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Nv(e) {
  return (t, r) => -e(-t, r);
}
function uf(e) {
  const t = e(Rv, Dv), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = xA(n), i = bA(n), r()[0] < 0 ? (a = Nv(a), i = Nv(i), e(yA, gA)) : e(Rv, Dv), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const s = r();
    let c = s[0], f = s[s.length - 1];
    const l = f < c;
    l && ([c, f] = [f, c]);
    let d = a(c), h = a(f), g, v;
    const p = u == null ? 10 : +u;
    let m = [];
    if (!(n % 1) && h - d < p) {
      if (d = Math.floor(d), h = Math.ceil(h), c > 0) {
        for (; d <= h; ++d)
          for (g = 1; g < n; ++g)
            if (v = d < 0 ? g / i(-d) : g * i(d), !(v < c)) {
              if (v > f) break;
              m.push(v);
            }
      } else for (; d <= h; ++d)
        for (g = n - 1; g >= 1; --g)
          if (v = d > 0 ? g / i(-d) : g * i(d), !(v < c)) {
            if (v > f) break;
            m.push(v);
          }
      m.length * 2 < p && (m = kc(c, f, p));
    } else
      m = kc(d, h, Math.min(h - d, p)).map(i);
    return l ? m.reverse() : m;
  }, t.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Zr(s)).precision == null && (s.trim = !0), s = of(s)), u === 1 / 0) return s;
    const c = Math.max(1, n * u / t.ticks().length);
    return (f) => {
      let l = f / i(Math.round(a(f)));
      return l * n < n - 0.5 && (l *= n), l <= c ? s(f) : "";
    };
  }, t.nice = () => r(Pb(r(), {
    floor: (u) => i(Math.floor(a(u))),
    ceil: (u) => i(Math.ceil(a(u)))
  })), t;
}
function Tb() {
  const e = uf(Ya()).domain([1, 10]);
  return e.copy = () => An(e, Tb()).base(e.base()), ze.apply(e, arguments), e;
}
function qv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function kv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function sf(e) {
  var t = 1, r = e(qv(t), kv(t));
  return r.constant = function(n) {
    return arguments.length ? e(qv(t = +n), kv(t)) : t;
  }, Pt(r);
}
function Eb() {
  var e = sf(Ya());
  return e.copy = function() {
    return An(e, Eb()).constant(e.constant());
  }, ze.apply(e, arguments);
}
function Lv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function wA(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function _A(e) {
  return e < 0 ? -e * e : e * e;
}
function cf(e) {
  var t = e(je, je), r = 1;
  function n() {
    return r === 1 ? e(je, je) : r === 0.5 ? e(wA, _A) : e(Lv(r), Lv(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, Pt(t);
}
function lf() {
  var e = cf(Ya());
  return e.copy = function() {
    return An(e, lf()).exponent(e.exponent());
  }, ze.apply(e, arguments), e;
}
function OA() {
  return lf.apply(null, arguments).exponent(0.5);
}
function Bv(e) {
  return Math.sign(e) * e * e;
}
function SA(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function jb() {
  var e = nf(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = SA(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(Bv(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, ta)).map(Bv)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return jb(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, ze.apply(a, arguments), Pt(a);
}
function Mb() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = JS(e, o / u);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[Sn(r, o)];
  }
  return i.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, i.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(_t), a();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), a()) : t.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return Mb().domain(e).range(t).unknown(n);
  }, ze.apply(i, arguments);
}
function Cb() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(s) {
    return s != null && s <= s ? a[Sn(n, s, 0, r)] : i;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(s) {
    return arguments.length ? (r = (a = Array.from(s)).length - 1, u()) : a.slice();
  }, o.invertExtent = function(s) {
    var c = a.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(s) {
    return arguments.length && (i = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Cb().domain([e, t]).range(a).unknown(i);
  }, ze.apply(Pt(o), arguments);
}
function Ib() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[Sn(e, i, 0, n)] : r;
  }
  return a.domain = function(i) {
    return arguments.length ? (e = Array.from(i), n = Math.min(e.length, t.length - 1), a) : e.slice();
  }, a.range = function(i) {
    return arguments.length ? (t = Array.from(i), n = Math.min(e.length, t.length - 1), a) : t.slice();
  }, a.invertExtent = function(i) {
    var o = t.indexOf(i);
    return [e[o - 1], e[o]];
  }, a.unknown = function(i) {
    return arguments.length ? (r = i, a) : r;
  }, a.copy = function() {
    return Ib().domain(e).range(t).unknown(r);
  }, ze.apply(a, arguments);
}
const As = /* @__PURE__ */ new Date(), Ps = /* @__PURE__ */ new Date();
function _e(e, t, r, n) {
  function a(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), a.round = (i) => {
    const o = a(i), u = a.ceil(i);
    return i - o < u - i ? o : u;
  }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, u) => {
    const s = [];
    if (i = a.ceil(i), u = u == null ? 1 : Math.floor(u), !(i < o) || !(u > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+i)), t(i, u), e(i);
    while (c < i && i < o);
    return s;
  }, a.filter = (i) => _e((o) => {
    if (o >= o) for (; e(o), !i(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !i(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !i(o); )
          ;
  }), r && (a.count = (i, o) => (As.setTime(+i), Ps.setTime(+o), e(As), e(Ps), Math.floor(r(As, Ps))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const ia = _e(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ia.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? _e((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ia);
ia.range;
const ut = 1e3, Ue = ut * 60, st = Ue * 60, ft = st * 24, ff = ft * 7, Fv = ft * 30, Ts = ft * 365, Nt = _e((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * ut);
}, (e, t) => (t - e) / ut, (e) => e.getUTCSeconds());
Nt.range;
const df = _e((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ut);
}, (e, t) => {
  e.setTime(+e + t * Ue);
}, (e, t) => (t - e) / Ue, (e) => e.getMinutes());
df.range;
const pf = _e((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ue);
}, (e, t) => (t - e) / Ue, (e) => e.getUTCMinutes());
pf.range;
const hf = _e((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ut - e.getMinutes() * Ue);
}, (e, t) => {
  e.setTime(+e + t * st);
}, (e, t) => (t - e) / st, (e) => e.getHours());
hf.range;
const vf = _e((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * st);
}, (e, t) => (t - e) / st, (e) => e.getUTCHours());
vf.range;
const Pn = _e(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ue) / ft,
  (e) => e.getDate() - 1
);
Pn.range;
const Za = _e((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ft, (e) => e.getUTCDate() - 1);
Za.range;
const $b = _e((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ft, (e) => Math.floor(e / ft));
$b.range;
function Gt(e) {
  return _e((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ue) / ff);
}
const Ja = Gt(0), oa = Gt(1), AA = Gt(2), PA = Gt(3), cr = Gt(4), TA = Gt(5), EA = Gt(6);
Ja.range;
oa.range;
AA.range;
PA.range;
cr.range;
TA.range;
EA.range;
function Kt(e) {
  return _e((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ff);
}
const Qa = Kt(0), ua = Kt(1), jA = Kt(2), MA = Kt(3), lr = Kt(4), CA = Kt(5), IA = Kt(6);
Qa.range;
ua.range;
jA.range;
MA.range;
lr.range;
CA.range;
IA.range;
const yf = _e((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
yf.range;
const gf = _e((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
gf.range;
const dt = _e((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
dt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : _e((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
dt.range;
const pt = _e((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
pt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : _e((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
pt.range;
function Rb(e, t, r, n, a, i) {
  const o = [
    [Nt, 1, ut],
    [Nt, 5, 5 * ut],
    [Nt, 15, 15 * ut],
    [Nt, 30, 30 * ut],
    [i, 1, Ue],
    [i, 5, 5 * Ue],
    [i, 15, 15 * Ue],
    [i, 30, 30 * Ue],
    [a, 1, st],
    [a, 3, 3 * st],
    [a, 6, 6 * st],
    [a, 12, 12 * st],
    [n, 1, ft],
    [n, 2, 2 * ft],
    [r, 1, ff],
    [t, 1, Fv],
    [t, 3, 3 * Fv],
    [e, 1, Ts]
  ];
  function u(c, f, l) {
    const d = f < c;
    d && ([c, f] = [f, c]);
    const h = l && typeof l.range == "function" ? l : s(c, f, l), g = h ? h.range(c, +f + 1) : [];
    return d ? g.reverse() : g;
  }
  function s(c, f, l) {
    const d = Math.abs(f - c) / l, h = ef(([, , p]) => p).right(o, d);
    if (h === o.length) return e.every(Bc(c / Ts, f / Ts, l));
    if (h === 0) return ia.every(Math.max(Bc(c, f, l), 1));
    const [g, v] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return g.every(v);
  }
  return [u, s];
}
const [$A, RA] = Rb(pt, gf, Qa, $b, vf, pf), [DA, NA] = Rb(dt, yf, Ja, Pn, hf, df);
function Es(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function js(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Er(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function qA(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, u = e.months, s = e.shortMonths, c = jr(a), f = Mr(a), l = jr(i), d = Mr(i), h = jr(o), g = Mr(o), v = jr(u), p = Mr(u), m = jr(s), x = Mr(s), w = {
    a: N,
    A: q,
    b: k,
    B: W,
    c: null,
    d: Kv,
    e: Kv,
    f: oP,
    g: yP,
    G: mP,
    H: nP,
    I: aP,
    j: iP,
    L: Db,
    m: uP,
    M: sP,
    p: G,
    q: F,
    Q: Yv,
    s: Zv,
    S: cP,
    u: lP,
    U: fP,
    V: dP,
    w: pP,
    W: hP,
    x: null,
    X: null,
    y: vP,
    Y: gP,
    Z: bP,
    "%": Vv
  }, _ = {
    a: K,
    A: oe,
    b: he,
    B: De,
    c: null,
    d: Xv,
    e: Xv,
    f: OP,
    g: $P,
    G: DP,
    H: xP,
    I: wP,
    j: _P,
    L: qb,
    m: SP,
    M: AP,
    p: jt,
    q: Me,
    Q: Yv,
    s: Zv,
    S: PP,
    u: TP,
    U: EP,
    V: jP,
    w: MP,
    W: CP,
    x: null,
    X: null,
    y: IP,
    Y: RP,
    Z: NP,
    "%": Vv
  }, y = {
    a: C,
    A: T,
    b: P,
    B: j,
    c: I,
    d: Hv,
    e: Hv,
    f: QA,
    g: zv,
    G: Wv,
    H: Gv,
    I: Gv,
    j: VA,
    L: JA,
    m: XA,
    M: YA,
    p: A,
    q: KA,
    Q: tP,
    s: rP,
    S: ZA,
    u: UA,
    U: WA,
    V: zA,
    w: FA,
    W: HA,
    x: M,
    X: R,
    y: zv,
    Y: Wv,
    Z: GA,
    "%": eP
  };
  w.x = b(r, w), w.X = b(n, w), w.c = b(t, w), _.x = b(r, _), _.X = b(n, _), _.c = b(t, _);
  function b(L, X) {
    return function(V) {
      var D = [], de = -1, Z = 0, ge = L.length, me, Ce, mt;
      for (V instanceof Date || (V = /* @__PURE__ */ new Date(+V)); ++de < ge; )
        L.charCodeAt(de) === 37 && (D.push(L.slice(Z, de)), (Ce = Uv[me = L.charAt(++de)]) != null ? me = L.charAt(++de) : Ce = me === "e" ? " " : "0", (mt = X[me]) && (me = mt(V, Ce)), D.push(me), Z = de + 1);
      return D.push(L.slice(Z, de)), D.join("");
    };
  }
  function O(L, X) {
    return function(V) {
      var D = Er(1900, void 0, 1), de = S(D, L, V += "", 0), Z, ge;
      if (de != V.length) return null;
      if ("Q" in D) return new Date(D.Q);
      if ("s" in D) return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (X && !("Z" in D) && (D.Z = 0), "p" in D && (D.H = D.H % 12 + D.p * 12), D.m === void 0 && (D.m = "q" in D ? D.q : 0), "V" in D) {
        if (D.V < 1 || D.V > 53) return null;
        "w" in D || (D.w = 1), "Z" in D ? (Z = js(Er(D.y, 0, 1)), ge = Z.getUTCDay(), Z = ge > 4 || ge === 0 ? ua.ceil(Z) : ua(Z), Z = Za.offset(Z, (D.V - 1) * 7), D.y = Z.getUTCFullYear(), D.m = Z.getUTCMonth(), D.d = Z.getUTCDate() + (D.w + 6) % 7) : (Z = Es(Er(D.y, 0, 1)), ge = Z.getDay(), Z = ge > 4 || ge === 0 ? oa.ceil(Z) : oa(Z), Z = Pn.offset(Z, (D.V - 1) * 7), D.y = Z.getFullYear(), D.m = Z.getMonth(), D.d = Z.getDate() + (D.w + 6) % 7);
      } else ("W" in D || "U" in D) && ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0), ge = "Z" in D ? js(Er(D.y, 0, 1)).getUTCDay() : Es(Er(D.y, 0, 1)).getDay(), D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (ge + 5) % 7 : D.w + D.U * 7 - (ge + 6) % 7);
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, js(D)) : Es(D);
    };
  }
  function S(L, X, V, D) {
    for (var de = 0, Z = X.length, ge = V.length, me, Ce; de < Z; ) {
      if (D >= ge) return -1;
      if (me = X.charCodeAt(de++), me === 37) {
        if (me = X.charAt(de++), Ce = y[me in Uv ? X.charAt(de++) : me], !Ce || (D = Ce(L, V, D)) < 0) return -1;
      } else if (me != V.charCodeAt(D++))
        return -1;
    }
    return D;
  }
  function A(L, X, V) {
    var D = c.exec(X.slice(V));
    return D ? (L.p = f.get(D[0].toLowerCase()), V + D[0].length) : -1;
  }
  function C(L, X, V) {
    var D = h.exec(X.slice(V));
    return D ? (L.w = g.get(D[0].toLowerCase()), V + D[0].length) : -1;
  }
  function T(L, X, V) {
    var D = l.exec(X.slice(V));
    return D ? (L.w = d.get(D[0].toLowerCase()), V + D[0].length) : -1;
  }
  function P(L, X, V) {
    var D = m.exec(X.slice(V));
    return D ? (L.m = x.get(D[0].toLowerCase()), V + D[0].length) : -1;
  }
  function j(L, X, V) {
    var D = v.exec(X.slice(V));
    return D ? (L.m = p.get(D[0].toLowerCase()), V + D[0].length) : -1;
  }
  function I(L, X, V) {
    return S(L, t, X, V);
  }
  function M(L, X, V) {
    return S(L, r, X, V);
  }
  function R(L, X, V) {
    return S(L, n, X, V);
  }
  function N(L) {
    return o[L.getDay()];
  }
  function q(L) {
    return i[L.getDay()];
  }
  function k(L) {
    return s[L.getMonth()];
  }
  function W(L) {
    return u[L.getMonth()];
  }
  function G(L) {
    return a[+(L.getHours() >= 12)];
  }
  function F(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function K(L) {
    return o[L.getUTCDay()];
  }
  function oe(L) {
    return i[L.getUTCDay()];
  }
  function he(L) {
    return s[L.getUTCMonth()];
  }
  function De(L) {
    return u[L.getUTCMonth()];
  }
  function jt(L) {
    return a[+(L.getUTCHours() >= 12)];
  }
  function Me(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function(L) {
      var X = b(L += "", w);
      return X.toString = function() {
        return L;
      }, X;
    },
    parse: function(L) {
      var X = O(L += "", !1);
      return X.toString = function() {
        return L;
      }, X;
    },
    utcFormat: function(L) {
      var X = b(L += "", _);
      return X.toString = function() {
        return L;
      }, X;
    },
    utcParse: function(L) {
      var X = O(L += "", !0);
      return X.toString = function() {
        return L;
      }, X;
    }
  };
}
var Uv = { "-": "", _: " ", 0: "0" }, Se = /^\s*\d+/, kA = /^%/, LA = /[\\^$*+?|[\]().{}]/g;
function Q(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function BA(e) {
  return e.replace(LA, "\\$&");
}
function jr(e) {
  return new RegExp("^(?:" + e.map(BA).join("|") + ")", "i");
}
function Mr(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function FA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function UA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function WA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function zA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function HA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Wv(e, t, r) {
  var n = Se.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function zv(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function GA(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function KA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function XA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Hv(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function VA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Gv(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function YA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function ZA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function JA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function QA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function eP(e, t, r) {
  var n = kA.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function tP(e, t, r) {
  var n = Se.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function rP(e, t, r) {
  var n = Se.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Kv(e, t) {
  return Q(e.getDate(), t, 2);
}
function nP(e, t) {
  return Q(e.getHours(), t, 2);
}
function aP(e, t) {
  return Q(e.getHours() % 12 || 12, t, 2);
}
function iP(e, t) {
  return Q(1 + Pn.count(dt(e), e), t, 3);
}
function Db(e, t) {
  return Q(e.getMilliseconds(), t, 3);
}
function oP(e, t) {
  return Db(e, t) + "000";
}
function uP(e, t) {
  return Q(e.getMonth() + 1, t, 2);
}
function sP(e, t) {
  return Q(e.getMinutes(), t, 2);
}
function cP(e, t) {
  return Q(e.getSeconds(), t, 2);
}
function lP(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function fP(e, t) {
  return Q(Ja.count(dt(e) - 1, e), t, 2);
}
function Nb(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? cr(e) : cr.ceil(e);
}
function dP(e, t) {
  return e = Nb(e), Q(cr.count(dt(e), e) + (dt(e).getDay() === 4), t, 2);
}
function pP(e) {
  return e.getDay();
}
function hP(e, t) {
  return Q(oa.count(dt(e) - 1, e), t, 2);
}
function vP(e, t) {
  return Q(e.getFullYear() % 100, t, 2);
}
function yP(e, t) {
  return e = Nb(e), Q(e.getFullYear() % 100, t, 2);
}
function gP(e, t) {
  return Q(e.getFullYear() % 1e4, t, 4);
}
function mP(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? cr(e) : cr.ceil(e), Q(e.getFullYear() % 1e4, t, 4);
}
function bP(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Q(t / 60 | 0, "0", 2) + Q(t % 60, "0", 2);
}
function Xv(e, t) {
  return Q(e.getUTCDate(), t, 2);
}
function xP(e, t) {
  return Q(e.getUTCHours(), t, 2);
}
function wP(e, t) {
  return Q(e.getUTCHours() % 12 || 12, t, 2);
}
function _P(e, t) {
  return Q(1 + Za.count(pt(e), e), t, 3);
}
function qb(e, t) {
  return Q(e.getUTCMilliseconds(), t, 3);
}
function OP(e, t) {
  return qb(e, t) + "000";
}
function SP(e, t) {
  return Q(e.getUTCMonth() + 1, t, 2);
}
function AP(e, t) {
  return Q(e.getUTCMinutes(), t, 2);
}
function PP(e, t) {
  return Q(e.getUTCSeconds(), t, 2);
}
function TP(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function EP(e, t) {
  return Q(Qa.count(pt(e) - 1, e), t, 2);
}
function kb(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? lr(e) : lr.ceil(e);
}
function jP(e, t) {
  return e = kb(e), Q(lr.count(pt(e), e) + (pt(e).getUTCDay() === 4), t, 2);
}
function MP(e) {
  return e.getUTCDay();
}
function CP(e, t) {
  return Q(ua.count(pt(e) - 1, e), t, 2);
}
function IP(e, t) {
  return Q(e.getUTCFullYear() % 100, t, 2);
}
function $P(e, t) {
  return e = kb(e), Q(e.getUTCFullYear() % 100, t, 2);
}
function RP(e, t) {
  return Q(e.getUTCFullYear() % 1e4, t, 4);
}
function DP(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? lr(e) : lr.ceil(e), Q(e.getUTCFullYear() % 1e4, t, 4);
}
function NP() {
  return "+0000";
}
function Vv() {
  return "%";
}
function Yv(e) {
  return +e;
}
function Zv(e) {
  return Math.floor(+e / 1e3);
}
var Jt, Lb, Bb;
qP({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function qP(e) {
  return Jt = qA(e), Lb = Jt.format, Jt.parse, Bb = Jt.utcFormat, Jt.utcParse, Jt;
}
function kP(e) {
  return new Date(e);
}
function LP(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function mf(e, t, r, n, a, i, o, u, s, c) {
  var f = nf(), l = f.invert, d = f.domain, h = c(".%L"), g = c(":%S"), v = c("%I:%M"), p = c("%I %p"), m = c("%a %d"), x = c("%b %d"), w = c("%B"), _ = c("%Y");
  function y(b) {
    return (s(b) < b ? h : u(b) < b ? g : o(b) < b ? v : i(b) < b ? p : n(b) < b ? a(b) < b ? m : x : r(b) < b ? w : _)(b);
  }
  return f.invert = function(b) {
    return new Date(l(b));
  }, f.domain = function(b) {
    return arguments.length ? d(Array.from(b, LP)) : d().map(kP);
  }, f.ticks = function(b) {
    var O = d();
    return e(O[0], O[O.length - 1], b ?? 10);
  }, f.tickFormat = function(b, O) {
    return O == null ? y : c(O);
  }, f.nice = function(b) {
    var O = d();
    return (!b || typeof b.range != "function") && (b = t(O[0], O[O.length - 1], b ?? 10)), b ? d(Pb(O, b)) : f;
  }, f.copy = function() {
    return An(f, mf(e, t, r, n, a, i, o, u, s, c));
  }, f;
}
function BP() {
  return ze.apply(mf(DA, NA, dt, yf, Ja, Pn, hf, df, Nt, Lb).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function FP() {
  return ze.apply(mf($A, RA, pt, gf, Qa, Za, vf, pf, Nt, Bb).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function ei() {
  var e = 0, t = 1, r, n, a, i, o = je, u = !1, s;
  function c(l) {
    return l == null || isNaN(l = +l) ? s : o(a === 0 ? 0.5 : (l = (i(l) - r) * a, u ? Math.max(0, Math.min(1, l)) : l));
  }
  c.domain = function(l) {
    return arguments.length ? ([e, t] = l, r = i(e = +e), n = i(t = +t), a = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(l) {
    return arguments.length ? (u = !!l, c) : u;
  }, c.interpolator = function(l) {
    return arguments.length ? (o = l, c) : o;
  };
  function f(l) {
    return function(d) {
      var h, g;
      return arguments.length ? ([h, g] = d, o = l(h, g), c) : [o(0), o(1)];
    };
  }
  return c.range = f(Ra), c.rangeRound = f(rf), c.unknown = function(l) {
    return arguments.length ? (s = l, c) : s;
  }, function(l) {
    return i = l, r = l(e), n = l(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function Tt(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Fb() {
  var e = Pt(ei()(je));
  return e.copy = function() {
    return Tt(e, Fb());
  }, gt.apply(e, arguments);
}
function Ub() {
  var e = uf(ei()).domain([1, 10]);
  return e.copy = function() {
    return Tt(e, Ub()).base(e.base());
  }, gt.apply(e, arguments);
}
function Wb() {
  var e = sf(ei());
  return e.copy = function() {
    return Tt(e, Wb()).constant(e.constant());
  }, gt.apply(e, arguments);
}
function bf() {
  var e = cf(ei());
  return e.copy = function() {
    return Tt(e, bf()).exponent(e.exponent());
  }, gt.apply(e, arguments);
}
function UP() {
  return bf.apply(null, arguments).exponent(0.5);
}
function zb() {
  var e = [], t = je;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Sn(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let a of n) a != null && !isNaN(a = +a) && e.push(a);
    return e.sort(_t), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, a) => t(a / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (a, i) => ZS(e, i / n));
  }, r.copy = function() {
    return zb(t).domain(e);
  }, gt.apply(r, arguments);
}
function ti() {
  var e = 0, t = 0.5, r = 1, n = 1, a, i, o, u, s, c = je, f, l = !1, d;
  function h(v) {
    return isNaN(v = +v) ? d : (v = 0.5 + ((v = +f(v)) - i) * (n * v < n * i ? u : s), c(l ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, a = f(e = +e), i = f(t = +t), o = f(r = +r), u = a === i ? 0 : 0.5 / (i - a), s = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (l = !!v, h) : l;
  }, h.interpolator = function(v) {
    return arguments.length ? (c = v, h) : c;
  };
  function g(v) {
    return function(p) {
      var m, x, w;
      return arguments.length ? ([m, x, w] = p, c = eA(v, [m, x, w]), h) : [c(0), c(0.5), c(1)];
    };
  }
  return h.range = g(Ra), h.rangeRound = g(rf), h.unknown = function(v) {
    return arguments.length ? (d = v, h) : d;
  }, function(v) {
    return f = v, a = v(e), i = v(t), o = v(r), u = a === i ? 0 : 0.5 / (i - a), s = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, h;
  };
}
function Hb() {
  var e = Pt(ti()(je));
  return e.copy = function() {
    return Tt(e, Hb());
  }, gt.apply(e, arguments);
}
function Gb() {
  var e = uf(ti()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Tt(e, Gb()).base(e.base());
  }, gt.apply(e, arguments);
}
function Kb() {
  var e = sf(ti());
  return e.copy = function() {
    return Tt(e, Kb()).constant(e.constant());
  }, gt.apply(e, arguments);
}
function xf() {
  var e = cf(ti());
  return e.copy = function() {
    return Tt(e, xf()).exponent(e.exponent());
  }, gt.apply(e, arguments);
}
function WP() {
  return xf.apply(null, arguments).exponent(0.5);
}
const Jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Yr,
  scaleDiverging: Hb,
  scaleDivergingLog: Gb,
  scaleDivergingPow: xf,
  scaleDivergingSqrt: WP,
  scaleDivergingSymlog: Kb,
  scaleIdentity: Ab,
  scaleImplicit: Fc,
  scaleLinear: aa,
  scaleLog: Tb,
  scaleOrdinal: tf,
  scalePoint: Lr,
  scalePow: lf,
  scaleQuantile: Mb,
  scaleQuantize: Cb,
  scaleRadial: jb,
  scaleSequential: Fb,
  scaleSequentialLog: Ub,
  scaleSequentialPow: bf,
  scaleSequentialQuantile: zb,
  scaleSequentialSqrt: UP,
  scaleSequentialSymlog: Wb,
  scaleSqrt: OA,
  scaleSymlog: Eb,
  scaleThreshold: Ib,
  scaleTime: BP,
  scaleUtc: FP,
  tickFormat: Sb
}, Symbol.toStringTag, { value: "Module" }));
var Ms, Qv;
function Xb() {
  if (Qv) return Ms;
  Qv = 1;
  var e = wr();
  function t(r, n, a) {
    for (var i = -1, o = r.length; ++i < o; ) {
      var u = r[i], s = n(u);
      if (s != null && (c === void 0 ? s === s && !e(s) : a(s, c)))
        var c = s, f = u;
    }
    return f;
  }
  return Ms = t, Ms;
}
var Cs, ey;
function zP() {
  if (ey) return Cs;
  ey = 1;
  function e(t, r) {
    return t > r;
  }
  return Cs = e, Cs;
}
var Is, ty;
function HP() {
  if (ty) return Is;
  ty = 1;
  var e = Xb(), t = zP(), r = Or();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Is = n, Is;
}
var GP = HP();
const ri = /* @__PURE__ */ ie(GP);
var $s, ry;
function KP() {
  if (ry) return $s;
  ry = 1;
  function e(t, r) {
    return t < r;
  }
  return $s = e, $s;
}
var Rs, ny;
function XP() {
  if (ny) return Rs;
  ny = 1;
  var e = Xb(), t = KP(), r = Or();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Rs = n, Rs;
}
var VP = XP();
const ni = /* @__PURE__ */ ie(VP);
var Ds, ay;
function YP() {
  if (ay) return Ds;
  ay = 1;
  var e = ql(), t = At(), r = ob(), n = Re();
  function a(i, o) {
    var u = n(i) ? e : r;
    return u(i, t(o, 3));
  }
  return Ds = a, Ds;
}
var Ns, iy;
function ZP() {
  if (iy) return Ns;
  iy = 1;
  var e = ab(), t = YP();
  function r(n, a) {
    return e(t(n, a), 1);
  }
  return Ns = r, Ns;
}
var JP = ZP();
const QP = /* @__PURE__ */ ie(JP);
var qs, oy;
function eT() {
  if (oy) return qs;
  oy = 1;
  var e = Yl();
  function t(r, n) {
    return e(r, n);
  }
  return qs = t, qs;
}
var tT = eT();
const wf = /* @__PURE__ */ ie(tT);
var Sr = 1e9, rT = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Of, le = !0, We = "[DecimalError] ", Lt = We + "Invalid argument: ", _f = We + "Exponent out of range: ", Ar = Math.floor, Rt = Math.pow, nT = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ke, Oe = 1e7, ue = 7, Vb = 9007199254740991, sa = Ar(Vb / ue), U = {};
U.absoluteValue = U.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
U.comparedTo = U.cmp = function(e) {
  var t, r, n, a, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, a = e.d.length, t = 0, r = n < a ? n : a; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === a ? 0 : n > a ^ i.s < 0 ? 1 : -1;
};
U.decimalPlaces = U.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * ue;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
U.dividedBy = U.div = function(e) {
  return lt(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.idiv = function(e) {
  var t = this, r = t.constructor;
  return ne(lt(t, new r(e), 0, 1), r.precision);
};
U.equals = U.eq = function(e) {
  return !this.cmp(e);
};
U.exponent = function() {
  return ye(this);
};
U.greaterThan = U.gt = function(e) {
  return this.cmp(e) > 0;
};
U.greaterThanOrEqualTo = U.gte = function(e) {
  return this.cmp(e) >= 0;
};
U.isInteger = U.isint = function() {
  return this.e > this.d.length - 2;
};
U.isNegative = U.isneg = function() {
  return this.s < 0;
};
U.isPositive = U.ispos = function() {
  return this.s > 0;
};
U.isZero = function() {
  return this.s === 0;
};
U.lessThan = U.lt = function(e) {
  return this.cmp(e) < 0;
};
U.lessThanOrEqualTo = U.lte = function(e) {
  return this.cmp(e) < 1;
};
U.logarithm = U.log = function(e) {
  var t, r = this, n = r.constructor, a = n.precision, i = a + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(ke)) throw Error(We + "NaN");
  if (r.s < 1) throw Error(We + (r.s ? "NaN" : "-Infinity"));
  return r.eq(ke) ? new n(0) : (le = !1, t = lt(Jr(r, i), Jr(e, i), i), le = !0, ne(t, a));
};
U.minus = U.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Jb(t, e) : Yb(t, (e.s = -e.s, e));
};
U.modulo = U.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(We + "NaN");
  return r.s ? (le = !1, t = lt(r, e, 0, 1).times(e), le = !0, r.minus(t)) : ne(new n(r), a);
};
U.naturalExponential = U.exp = function() {
  return Zb(this);
};
U.naturalLogarithm = U.ln = function() {
  return Jr(this);
};
U.negated = U.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
U.plus = U.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Yb(t, e) : Jb(t, (e.s = -e.s, e));
};
U.precision = U.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Lt + e);
  if (t = ye(a) + 1, n = a.d.length - 1, r = n * ue + 1, n = a.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
U.squareRoot = U.sqrt = function() {
  var e, t, r, n, a, i, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(We + "NaN");
  }
  for (e = ye(u), le = !1, a = Math.sqrt(+u), a == 0 || a == 1 / 0 ? (t = et(u.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = Ar((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(a.toString()), r = s.precision, a = o = r + 3; ; )
    if (i = n, n = i.plus(lt(u, i, o + 2)).times(0.5), et(i.d).slice(0, o) === (t = et(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), a == o && t == "4999") {
        if (ne(i, r + 1, 0), i.times(i).eq(u)) {
          n = i;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return le = !0, ne(n, r);
};
U.times = U.mul = function(e) {
  var t, r, n, a, i, o, u, s, c, f = this, l = f.constructor, d = f.d, h = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (e.s *= f.s, r = f.e + e.e, s = d.length, c = h.length, s < c && (i = d, d = h, h = i, o = s, s = c, c = o), i = [], o = s + c, n = o; n--; ) i.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, a = s + n; a > n; )
      u = i[a] + h[n] * d[a - n - 1] + t, i[a--] = u % Oe | 0, t = u / Oe | 0;
    i[a] = (i[a] + t) % Oe | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, le ? ne(e, l.precision) : e;
};
U.toDecimalPlaces = U.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (nt(e, 0, Sr), t === void 0 ? t = n.rounding : nt(t, 0, 8), ne(r, e + ye(r) + 1, t));
};
U.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = Ut(n, !0) : (nt(e, 0, Sr), t === void 0 ? t = a.rounding : nt(t, 0, 8), n = ne(new a(n), e + 1, t), r = Ut(n, !0, e + 1)), r;
};
U.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? Ut(a) : (nt(e, 0, Sr), t === void 0 ? t = i.rounding : nt(t, 0, 8), n = ne(new i(a), e + ye(a) + 1, t), r = Ut(n.abs(), !1, e + ye(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
U.toInteger = U.toint = function() {
  var e = this, t = e.constructor;
  return ne(new t(e), ye(e) + 1, t.rounding);
};
U.toNumber = function() {
  return +this;
};
U.toPower = U.pow = function(e) {
  var t, r, n, a, i, o, u = this, s = u.constructor, c = 12, f = +(e = new s(e));
  if (!e.s) return new s(ke);
  if (u = new s(u), !u.s) {
    if (e.s < 1) throw Error(We + "Infinity");
    return u;
  }
  if (u.eq(ke)) return u;
  if (n = s.precision, e.eq(ke)) return ne(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = u.s, o) {
    if ((r = f < 0 ? -f : f) <= Vb) {
      for (a = new s(ke), t = Math.ceil(n / ue + 4), le = !1; r % 2 && (a = a.times(u), sy(a.d, t)), r = Ar(r / 2), r !== 0; )
        u = u.times(u), sy(u.d, t);
      return le = !0, e.s < 0 ? new s(ke).div(a) : ne(a, n);
    }
  } else if (i < 0) throw Error(We + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, le = !1, a = e.times(Jr(u, n + c)), le = !0, a = Zb(a), a.s = i, a;
};
U.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = ye(a), n = Ut(a, r <= i.toExpNeg || r >= i.toExpPos)) : (nt(e, 1, Sr), t === void 0 ? t = i.rounding : nt(t, 0, 8), a = ne(new i(a), e, t), r = ye(a), n = Ut(a, e <= r || r <= i.toExpNeg, e)), n;
};
U.toSignificantDigits = U.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (nt(e, 1, Sr), t === void 0 ? t = n.rounding : nt(t, 0, 8)), ne(new n(r), e, t);
};
U.toString = U.valueOf = U.val = U.toJSON = U[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = ye(e), r = e.constructor;
  return Ut(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function Yb(e, t) {
  var r, n, a, i, o, u, s, c, f = e.constructor, l = f.precision;
  if (!e.s || !t.s)
    return t.s || (t = new f(e)), le ? ne(t, l) : t;
  if (s = e.d, c = t.d, o = e.e, a = t.e, s = s.slice(), i = o - a, i) {
    for (i < 0 ? (n = s, i = -i, u = c.length) : (n = c, a = o, u = s.length), o = Math.ceil(l / ue), u = o > u ? o + 1 : u + 1, i > u && (i = u, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, i = c.length, u - i < 0 && (i = u, n = c, c = s, s = n), r = 0; i; )
    r = (s[--i] = s[i] + c[i] + r) / Oe | 0, s[i] %= Oe;
  for (r && (s.unshift(r), ++a), u = s.length; s[--u] == 0; ) s.pop();
  return t.d = s, t.e = a, le ? ne(t, l) : t;
}
function nt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Lt + e);
}
function et(e) {
  var t, r, n, a = e.length - 1, i = "", o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      n = e[t] + "", r = ue - n.length, r && (i += bt(r)), i += n;
    o = e[t], n = o + "", r = ue - n.length, r && (i += bt(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var lt = /* @__PURE__ */ (function() {
  function e(n, a) {
    var i, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      i = n[u] * a + o, n[u] = i % Oe | 0, o = i / Oe | 0;
    return o && n.unshift(o), n;
  }
  function t(n, a, i, o) {
    var u, s;
    if (i != o)
      s = i > o ? 1 : -1;
    else
      for (u = s = 0; u < i; u++)
        if (n[u] != a[u]) {
          s = n[u] > a[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, a, i) {
    for (var o = 0; i--; )
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * Oe + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var u, s, c, f, l, d, h, g, v, p, m, x, w, _, y, b, O, S, A = n.constructor, C = n.s == a.s ? 1 : -1, T = n.d, P = a.d;
    if (!n.s) return new A(n);
    if (!a.s) throw Error(We + "Division by zero");
    for (s = n.e - a.e, O = P.length, y = T.length, h = new A(C), g = h.d = [], c = 0; P[c] == (T[c] || 0); ) ++c;
    if (P[c] > (T[c] || 0) && --s, i == null ? x = i = A.precision : o ? x = i + (ye(n) - ye(a)) + 1 : x = i, x < 0) return new A(0);
    if (x = x / ue + 2 | 0, c = 0, O == 1)
      for (f = 0, P = P[0], x++; (c < y || f) && x--; c++)
        w = f * Oe + (T[c] || 0), g[c] = w / P | 0, f = w % P | 0;
    else {
      for (f = Oe / (P[0] + 1) | 0, f > 1 && (P = e(P, f), T = e(T, f), O = P.length, y = T.length), _ = O, v = T.slice(0, O), p = v.length; p < O; ) v[p++] = 0;
      S = P.slice(), S.unshift(0), b = P[0], P[1] >= Oe / 2 && ++b;
      do
        f = 0, u = t(P, v, O, p), u < 0 ? (m = v[0], O != p && (m = m * Oe + (v[1] || 0)), f = m / b | 0, f > 1 ? (f >= Oe && (f = Oe - 1), l = e(P, f), d = l.length, p = v.length, u = t(l, v, d, p), u == 1 && (f--, r(l, O < d ? S : P, d))) : (f == 0 && (u = f = 1), l = P.slice()), d = l.length, d < p && l.unshift(0), r(v, l, p), u == -1 && (p = v.length, u = t(P, v, O, p), u < 1 && (f++, r(v, O < p ? S : P, p))), p = v.length) : u === 0 && (f++, v = [0]), g[c++] = f, u && v[0] ? v[p++] = T[_] || 0 : (v = [T[_]], p = 1);
      while ((_++ < y || v[0] !== void 0) && x--);
    }
    return g[0] || g.shift(), h.e = s, ne(h, o ? i + ye(h) + 1 : i);
  };
})();
function Zb(e, t) {
  var r, n, a, i, o, u, s = 0, c = 0, f = e.constructor, l = f.precision;
  if (ye(e) > 16) throw Error(_f + ye(e));
  if (!e.s) return new f(ke);
  for (le = !1, u = l, o = new f(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(Rt(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = a = i = new f(ke), f.precision = u; ; ) {
    if (a = ne(a.times(e), u), r = r.times(++s), o = i.plus(lt(a, r, u)), et(o.d).slice(0, u) === et(i.d).slice(0, u)) {
      for (; c--; ) i = ne(i.times(i), u);
      return f.precision = l, t == null ? (le = !0, ne(i, l)) : i;
    }
    i = o;
  }
}
function ye(e) {
  for (var t = e.e * ue, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function ks(e, t, r) {
  if (t > e.LN10.sd())
    throw le = !0, r && (e.precision = r), Error(We + "LN10 precision limit exceeded");
  return ne(new e(e.LN10), t);
}
function bt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Jr(e, t) {
  var r, n, a, i, o, u, s, c, f, l = 1, d = 10, h = e, g = h.d, v = h.constructor, p = v.precision;
  if (h.s < 1) throw Error(We + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(ke)) return new v(0);
  if (t == null ? (le = !1, c = p) : c = t, h.eq(10))
    return t == null && (le = !0), ks(v, c);
  if (c += d, v.precision = c, r = et(g), n = r.charAt(0), i = ye(h), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = et(h.d), n = r.charAt(0), l++;
    i = ye(h), n > 1 ? (h = new v("0." + r), i++) : h = new v(n + "." + r.slice(1));
  } else
    return s = ks(v, c + 2, p).times(i + ""), h = Jr(new v(n + "." + r.slice(1)), c - d).plus(s), v.precision = p, t == null ? (le = !0, ne(h, p)) : h;
  for (u = o = h = lt(h.minus(ke), h.plus(ke), c), f = ne(h.times(h), c), a = 3; ; ) {
    if (o = ne(o.times(f), c), s = u.plus(lt(o, new v(a), c)), et(s.d).slice(0, c) === et(u.d).slice(0, c))
      return u = u.times(2), i !== 0 && (u = u.plus(ks(v, c + 2, p).times(i + ""))), u = lt(u, new v(l), c), v.precision = p, t == null ? (le = !0, ne(u, p)) : u;
    u = s, a += 2;
  }
}
function uy(e, t) {
  var r, n, a;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (t = t.slice(n, a), t) {
    if (a -= n, r = r - n - 1, e.e = Ar(r / ue), e.d = [], n = (r + 1) % ue, r < 0 && (n += ue), n < a) {
      for (n && e.d.push(+t.slice(0, n)), a -= ue; n < a; ) e.d.push(+t.slice(n, n += ue));
      t = t.slice(n), n = ue - t.length;
    } else
      n -= a;
    for (; n--; ) t += "0";
    if (e.d.push(+t), le && (e.e > sa || e.e < -sa)) throw Error(_f + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function ne(e, t, r) {
  var n, a, i, o, u, s, c, f, l = e.d;
  for (o = 1, i = l[0]; i >= 10; i /= 10) o++;
  if (n = t - o, n < 0)
    n += ue, a = t, c = l[f = 0];
  else {
    if (f = Math.ceil((n + 1) / ue), i = l.length, f >= i) return e;
    for (c = i = l[f], o = 1; i >= 10; i /= 10) o++;
    n %= ue, a = n - ue + o;
  }
  if (r !== void 0 && (i = Rt(10, o - a - 1), u = c / i % 10 | 0, s = t < 0 || l[f + 1] !== void 0 || c % i, s = r < 4 ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? c / Rt(10, o - a) : 0 : l[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !l[0])
    return s ? (i = ye(e), l.length = 1, t = t - i - 1, l[0] = Rt(10, (ue - t % ue) % ue), e.e = Ar(-t / ue) || 0) : (l.length = 1, l[0] = e.e = e.s = 0), e;
  if (n == 0 ? (l.length = f, i = 1, f--) : (l.length = f + 1, i = Rt(10, ue - n), l[f] = a > 0 ? (c / Rt(10, o - a) % Rt(10, a) | 0) * i : 0), s)
    for (; ; )
      if (f == 0) {
        (l[0] += i) == Oe && (l[0] = 1, ++e.e);
        break;
      } else {
        if (l[f] += i, l[f] != Oe) break;
        l[f--] = 0, i = 1;
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (le && (e.e > sa || e.e < -sa))
    throw Error(_f + ye(e));
  return e;
}
function Jb(e, t) {
  var r, n, a, i, o, u, s, c, f, l, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), le ? ne(t, h) : t;
  if (s = e.d, l = t.d, n = t.e, c = e.e, s = s.slice(), o = c - n, o) {
    for (f = o < 0, f ? (r = s, o = -o, u = l.length) : (r = l, n = c, u = s.length), a = Math.max(Math.ceil(h / ue), u) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; ) r.push(0);
    r.reverse();
  } else {
    for (a = s.length, u = l.length, f = a < u, f && (u = a), a = 0; a < u; a++)
      if (s[a] != l[a]) {
        f = s[a] < l[a];
        break;
      }
    o = 0;
  }
  for (f && (r = s, s = l, l = r, t.s = -t.s), u = s.length, a = l.length - u; a > 0; --a) s[u++] = 0;
  for (a = l.length; a > o; ) {
    if (s[--a] < l[a]) {
      for (i = a; i && s[--i] === 0; ) s[i] = Oe - 1;
      --s[i], s[a] += Oe;
    }
    s[a] -= l[a];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, le ? ne(t, h) : t) : new d(0);
}
function Ut(e, t, r) {
  var n, a = ye(e), i = et(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + bt(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + bt(-a - 1) + i, r && (n = r - o) > 0 && (i += bt(n))) : a >= o ? (i += bt(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + bt(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += bt(n))), e.s < 0 ? "-" + i : i;
}
function sy(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Qb(e) {
  var t, r, n;
  function a(i) {
    var o = this;
    if (!(o instanceof a)) return new a(i);
    if (o.constructor = a, i instanceof a) {
      o.s = i.s, o.e = i.e, o.d = (i = i.d) ? i.slice() : i;
      return;
    }
    if (typeof i == "number") {
      if (i * 0 !== 0)
        throw Error(Lt + i);
      if (i > 0)
        o.s = 1;
      else if (i < 0)
        i = -i, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (i === ~~i && i < 1e7) {
        o.e = 0, o.d = [i];
        return;
      }
      return uy(o, i.toString());
    } else if (typeof i != "string")
      throw Error(Lt + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, nT.test(i)) uy(o, i);
    else throw Error(Lt + i);
  }
  if (a.prototype = U, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = Qb, a.config = a.set = aT, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function aT(e) {
  if (!e || typeof e != "object")
    throw Error(We + "Object expected");
  var t, r, n, a = [
    "precision",
    1,
    Sr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < a.length; t += 3)
    if ((n = e[r = a[t]]) !== void 0)
      if (Ar(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(Lt + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Lt + r + ": " + n);
  return this;
}
var Of = Qb(rT);
ke = new Of(1);
const re = Of;
function iT(e) {
  return cT(e) || sT(e) || uT(e) || oT();
}
function oT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uT(e, t) {
  if (e) {
    if (typeof e == "string") return Wc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wc(e, t);
  }
}
function sT(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function cT(e) {
  if (Array.isArray(e)) return Wc(e);
}
function Wc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var lT = function(t) {
  return t;
}, e0 = {}, t0 = function(t) {
  return t === e0;
}, cy = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && t0(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, fT = function e(t, r) {
  return t === 1 ? r : cy(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(u) {
      return u !== e0;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, cy(function() {
      for (var u = arguments.length, s = new Array(u), c = 0; c < u; c++)
        s[c] = arguments[c];
      var f = a.map(function(l) {
        return t0(l) ? s.shift() : l;
      });
      return r.apply(void 0, iT(f).concat(s));
    }));
  });
}, ai = function(t) {
  return fT(t.length, t);
}, zc = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, dT = ai(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), pT = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return lT;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(u, s) {
      return s(u);
    }, i.apply(void 0, arguments));
  };
}, Hc = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, r0 = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(u, s) {
      return u === r[s];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function hT(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new re(e).abs().log(10).toNumber()) + 1, t;
}
function vT(e, t, r) {
  for (var n = new re(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var yT = ai(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), gT = ai(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), mT = ai(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const ii = {
  rangeStep: vT,
  getDigitCount: hT,
  interpolateNumber: yT,
  uninterpolateNumber: gT,
  uninterpolateTruncation: mT
};
function Gc(e) {
  return wT(e) || xT(e) || n0(e) || bT();
}
function bT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xT(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function wT(e) {
  if (Array.isArray(e)) return Kc(e);
}
function Qr(e, t) {
  return ST(e) || OT(e, t) || n0(e, t) || _T();
}
function _T() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n0(e, t) {
  if (e) {
    if (typeof e == "string") return Kc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Kc(e, t);
  }
}
function Kc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function OT(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, a = !1, i = void 0;
    try {
      for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0)
        ;
    } catch (s) {
      a = !0, i = s;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function ST(e) {
  if (Array.isArray(e)) return e;
}
function a0(e) {
  var t = Qr(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function i0(e, t, r) {
  if (e.lte(0))
    return new re(0);
  var n = ii.getDigitCount(e.toNumber()), a = new re(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, u = new re(Math.ceil(i.div(o).toNumber())).add(r).mul(o), s = u.mul(a);
  return t ? s : new re(Math.ceil(s));
}
function AT(e, t, r) {
  var n = 1, a = new re(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new re(10).pow(ii.getDigitCount(e) - 1), a = new re(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new re(Math.floor(e)));
  } else e === 0 ? a = new re(Math.floor((t - 1) / 2)) : r || (a = new re(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = pT(dT(function(s) {
    return a.add(new re(s - o).mul(n)).toNumber();
  }), zc);
  return u(0, t);
}
function o0(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new re(0),
      tickMin: new re(0),
      tickMax: new re(0)
    };
  var i = i0(new re(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new re(0) : (o = new re(e).add(t).div(2), o = o.sub(new re(o).mod(i)));
  var u = Math.ceil(o.sub(e).div(i).toNumber()), s = Math.ceil(new re(t).sub(o).div(i).toNumber()), c = u + s + 1;
  return c > r ? o0(e, t, r, n, a + 1) : (c < r && (s = t > 0 ? s + (r - c) : s, u = t > 0 ? u : u + (r - c)), {
    step: i,
    tickMin: o.sub(new re(u).mul(i)),
    tickMax: o.add(new re(s).mul(i))
  });
}
function PT(e) {
  var t = Qr(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), u = a0([r, n]), s = Qr(u, 2), c = s[0], f = s[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [c].concat(Gc(zc(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Gc(zc(0, a - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? Hc(l) : l;
  }
  if (c === f)
    return AT(c, a, i);
  var d = o0(c, f, o, i), h = d.step, g = d.tickMin, v = d.tickMax, p = ii.rangeStep(g, v.add(new re(0.1).mul(h)), h);
  return r > n ? Hc(p) : p;
}
function TT(e, t) {
  var r = Qr(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = a0([n, a]), u = Qr(o, 2), s = u[0], c = u[1];
  if (s === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (s === c)
    return [s];
  var f = Math.max(t, 2), l = i0(new re(c).sub(s).div(f - 1), i, 0), d = [].concat(Gc(ii.rangeStep(new re(s), new re(c).sub(new re(0.99).mul(l)), l)), [c]);
  return n > a ? Hc(d) : d;
}
var ET = r0(PT), jT = r0(TT), MT = "Invariant failed";
function Wt(e, t) {
  throw new Error(MT);
}
var CT = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function fr(e) {
  "@babel/helpers - typeof";
  return fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fr(e);
}
function ca() {
  return ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ca.apply(this, arguments);
}
function IT(e, t) {
  return NT(e) || DT(e, t) || RT(e, t) || $T();
}
function $T() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RT(e, t) {
  if (e) {
    if (typeof e == "string") return ly(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ly(e, t);
  }
}
function ly(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function DT(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function NT(e) {
  if (Array.isArray(e)) return e;
}
function qT(e, t) {
  if (e == null) return {};
  var r = kT(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function kT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function LT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, c0(n.key), n);
  }
}
function FT(e, t, r) {
  return t && BT(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function UT(e, t, r) {
  return t = la(t), WT(e, u0() ? Reflect.construct(t, r || [], la(e).constructor) : t.apply(e, r));
}
function WT(e, t) {
  if (t && (fr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zT(e);
}
function zT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function u0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (u0 = function() {
    return !!e;
  })();
}
function la(e) {
  return la = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, la(e);
}
function HT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xc(e, t);
}
function Xc(e, t) {
  return Xc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xc(e, t);
}
function s0(e, t, r) {
  return t = c0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c0(e) {
  var t = GT(e, "string");
  return fr(t) == "symbol" ? t : t + "";
}
function GT(e, t) {
  if (fr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var oi = /* @__PURE__ */ (function(e) {
  function t() {
    return LT(this, t), UT(this, t, arguments);
  }
  return HT(t, e), FT(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, u = n.dataKey, s = n.data, c = n.dataPointFormatter, f = n.xAxis, l = n.yAxis, d = qT(n, CT), h = ce(d, !1);
      this.props.direction === "x" && f.type !== "number" && Wt();
      var g = s.map(function(v) {
        var p = c(v, u), m = p.x, x = p.y, w = p.value, _ = p.errorVal;
        if (!_)
          return null;
        var y = [], b, O;
        if (Array.isArray(_)) {
          var S = IT(_, 2);
          b = S[0], O = S[1];
        } else
          b = O = _;
        if (i === "vertical") {
          var A = f.scale, C = x + a, T = C + o, P = C - o, j = A(w - b), I = A(w + O);
          y.push({
            x1: I,
            y1: T,
            x2: I,
            y2: P
          }), y.push({
            x1: j,
            y1: C,
            x2: I,
            y2: C
          }), y.push({
            x1: j,
            y1: T,
            x2: j,
            y2: P
          });
        } else if (i === "horizontal") {
          var M = l.scale, R = m + a, N = R - o, q = R + o, k = M(w - b), W = M(w + O);
          y.push({
            x1: N,
            y1: W,
            x2: q,
            y2: W
          }), y.push({
            x1: R,
            y1: k,
            x2: R,
            y2: W
          }), y.push({
            x1: N,
            y1: k,
            x2: q,
            y2: k
          });
        }
        return /* @__PURE__ */ E.createElement(Te, ca({
          className: "recharts-errorBar",
          key: "bar-".concat(y.map(function(G) {
            return "".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2);
          }))
        }, h), y.map(function(G) {
          return /* @__PURE__ */ E.createElement("line", ca({}, G, {
            key: "line-".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2)
          }));
        }));
      });
      return /* @__PURE__ */ E.createElement(Te, {
        className: "recharts-errorBars"
      }, g);
    }
  }]);
})(E.Component);
s0(oi, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
s0(oi, "displayName", "ErrorBar");
function en(e) {
  "@babel/helpers - typeof";
  return en = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, en(e);
}
function fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fy(Object(r), !0).forEach(function(n) {
      KT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KT(e, t, r) {
  return t = XT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XT(e) {
  var t = VT(e, "string");
  return en(t) == "symbol" ? t : t + "";
}
function VT(e, t) {
  if (en(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (en(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var l0 = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = qe(r, tr);
  if (!o)
    return null;
  var u = tr.defaultProps, s = u !== void 0 ? It(It({}, u), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : i === "children" ? c = (n || []).reduce(function(f, l) {
    var d = l.item, h = l.props, g = h.sectors || h.data || [];
    return f.concat(g.map(function(v) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: v.name,
        color: v.fill,
        payload: v
      };
    }));
  }, []) : c = (n || []).map(function(f) {
    var l = f.item, d = l.type.defaultProps, h = d !== void 0 ? It(It({}, d), l.props) : {}, g = h.dataKey, v = h.name, p = h.legendType, m = h.hide;
    return {
      inactive: m,
      dataKey: g,
      type: s.iconType || p || "square",
      color: Sf(l),
      value: v || g,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: h
    };
  }), It(It(It({}, s), tr.getWithHeight(o, a)), {}, {
    payload: c,
    item: o
  });
};
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
function dy(e) {
  return QT(e) || JT(e) || ZT(e) || YT();
}
function YT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZT(e, t) {
  if (e) {
    if (typeof e == "string") return Vc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vc(e, t);
  }
}
function JT(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function QT(e) {
  if (Array.isArray(e)) return Vc(e);
}
function Vc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function py(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? py(Object(r), !0).forEach(function(n) {
      rr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : py(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rr(e, t, r) {
  return t = eE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eE(e) {
  var t = tE(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function tE(e, t) {
  if (tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ye(e, t, r) {
  return Y(e) || Y(t) ? r : we(t) ? tt(e, t, r) : J(t) ? t(e) : r;
}
function Br(e, t, r, n) {
  var a = QP(e, function(u) {
    return Ye(u, t);
  });
  if (r === "number") {
    var i = a.filter(function(u) {
      return B(u) || parseFloat(u);
    });
    return i.length ? [ni(i), ri(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(u) {
    return !Y(u);
  }) : a;
  return o.map(function(u) {
    return we(u) || u instanceof Date ? u : "";
  });
}
var rE = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n?.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var s = i.range, c = 0; c < u; c++) {
      var f = c > 0 ? a[c - 1].coordinate : a[u - 1].coordinate, l = a[c].coordinate, d = c >= u - 1 ? a[0].coordinate : a[c + 1].coordinate, h = void 0;
      if (Qe(l - f) !== Qe(d - l)) {
        var g = [];
        if (Qe(d - l) === Qe(s[1] - s[0])) {
          h = d;
          var v = l + s[1] - s[0];
          g[0] = Math.min(v, (v + f) / 2), g[1] = Math.max(v, (v + f) / 2);
        } else {
          h = f;
          var p = d + s[1] - s[0];
          g[0] = Math.min(l, (p + l) / 2), g[1] = Math.max(l, (p + l) / 2);
        }
        var m = [Math.min(l, (h + l) / 2), Math.max(l, (h + l) / 2)];
        if (t > m[0] && t <= m[1] || t >= g[0] && t <= g[1]) {
          o = a[c].index;
          break;
        }
      } else {
        var x = Math.min(f, d), w = Math.max(f, d);
        if (t > (x + l) / 2 && t <= (w + l) / 2) {
          o = a[c].index;
          break;
        }
      }
    }
  else
    for (var _ = 0; _ < u; _++)
      if (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ > 0 && _ < u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ === u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2) {
        o = n[_].index;
        break;
      }
  return o;
}, Sf = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? pe(pe({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, u = i.fill, s;
  switch (a) {
    case "Line":
      s = o;
      break;
    case "Area":
    case "Radar":
      s = o && o !== "none" ? o : u;
      break;
    default:
      s = u;
      break;
  }
  return s;
}, nE = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, u = Object.keys(i), s = 0, c = u.length; s < c; s++)
    for (var f = i[u[s]].stackGroups, l = Object.keys(f), d = 0, h = l.length; d < h; d++) {
      var g = f[l[d]], v = g.items, p = g.cateAxisId, m = v.filter(function(O) {
        return ct(O.type).indexOf("Bar") >= 0;
      });
      if (m && m.length) {
        var x = m[0].type.defaultProps, w = x !== void 0 ? pe(pe({}, x), m[0].props) : m[0].props, _ = w.barSize, y = w[p];
        o[y] || (o[y] = []);
        var b = Y(_) ? r : _;
        o[y].push({
          item: m[0],
          stackList: m.slice(1),
          barSize: Y(b) ? void 0 : Ke(b, n, 0)
        });
      }
    }
  return o;
}, aE = function(t) {
  var r = t.barGap, n = t.barCategoryGap, a = t.bandSize, i = t.sizeList, o = i === void 0 ? [] : i, u = t.maxBarSize, s = o.length;
  if (s < 1) return null;
  var c = Ke(r, a, 0, !0), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, h = a / s, g = o.reduce(function(_, y) {
      return _ + y.barSize || 0;
    }, 0);
    g += (s - 1) * c, g >= a && (g -= (s - 1) * c, c = 0), g >= a && h > 0 && (d = !0, h *= 0.9, g = s * h);
    var v = (a - g) / 2 >> 0, p = {
      offset: v - c,
      size: 0
    };
    f = o.reduce(function(_, y) {
      var b = {
        item: y.item,
        position: {
          offset: p.offset + p.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? h : y.barSize
        }
      }, O = [].concat(dy(_), [b]);
      return p = O[O.length - 1].position, y.stackList && y.stackList.length && y.stackList.forEach(function(S) {
        O.push({
          item: S,
          position: p
        });
      }), O;
    }, l);
  } else {
    var m = Ke(n, a, 0, !0);
    a - 2 * m - (s - 1) * c <= 0 && (c = 0);
    var x = (a - 2 * m - (s - 1) * c) / s;
    x > 1 && (x >>= 0);
    var w = u === +u ? Math.min(x, u) : x;
    f = o.reduce(function(_, y, b) {
      var O = [].concat(dy(_), [{
        item: y.item,
        position: {
          offset: m + (x + c) * b + (x - w) / 2,
          size: w
        }
      }]);
      return y.stackList && y.stackList.length && y.stackList.forEach(function(S) {
        O.push({
          item: S,
          position: O[O.length - 1].position
        });
      }), O;
    }, l);
  }
  return f;
}, iE = function(t, r, n, a) {
  var i = n.children, o = n.width, u = n.margin, s = o - (u.left || 0) - (u.right || 0), c = l0({
    children: i,
    legendWidth: s
  });
  if (c) {
    var f = a || {}, l = f.width, d = f.height, h = c.align, g = c.verticalAlign, v = c.layout;
    if ((v === "vertical" || v === "horizontal" && g === "middle") && h !== "center" && B(t[h]))
      return pe(pe({}, t), {}, rr({}, h, t[h] + (l || 0)));
    if ((v === "horizontal" || v === "vertical" && h === "center") && g !== "middle" && B(t[g]))
      return pe(pe({}, t), {}, rr({}, g, t[g] + (d || 0)));
  }
  return t;
}, oE = function(t, r, n) {
  return Y(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, f0 = function(t, r, n, a, i) {
  var o = r.props.children, u = Ve(o, oi).filter(function(c) {
    return oE(a, i, c.props.direction);
  });
  if (u && u.length) {
    var s = u.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, f) {
      var l = Ye(f, n);
      if (Y(l)) return c;
      var d = Array.isArray(l) ? [ni(l), ri(l)] : [l, l], h = s.reduce(function(g, v) {
        var p = Ye(f, v, 0), m = d[0] - Math.abs(Array.isArray(p) ? p[0] : p), x = d[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(m, g[0]), Math.max(x, g[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(h[0], c[0]), Math.max(h[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, uE = function(t, r, n, a, i) {
  var o = r.map(function(u) {
    return f0(t, u, n, i, a);
  }).filter(function(u) {
    return !Y(u);
  });
  return o && o.length ? o.reduce(function(u, s) {
    return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
  }, [1 / 0, -1 / 0]) : null;
}, d0 = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    var c = s.props.dataKey;
    return n === "number" && c && f0(t, s, c, a) || Br(t, c, n, i);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(s, c) {
        return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
      },
      [1 / 0, -1 / 0]
    );
  var u = {};
  return o.reduce(function(s, c) {
    for (var f = 0, l = c.length; f < l; f++)
      u[c[f]] || (u[c[f]] = !0, s.push(c[f]));
    return s;
  }, []);
}, p0 = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, xD = function(t, r, n, a) {
  if (a)
    return t.map(function(s) {
      return s.coordinate;
    });
  var i, o, u = t.map(function(s) {
    return s.coordinate === r && (i = !0), s.coordinate === n && (o = !0), s.coordinate;
  });
  return i || u.push(r), o || u.push(n), u;
}, qr = function(t, r, n) {
  if (!t) return null;
  var a = t.scale, i = t.duplicateDomain, o = t.type, u = t.range, s = t.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2, c = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / s : 0;
  if (c = t.axisType === "angleAxis" && u?.length >= 2 ? Qe(u[0] - u[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
    var f = (t.ticks || t.niceTicks).map(function(l) {
      var d = i ? i.indexOf(l) : l;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(d) + c,
        value: l,
        offset: c
      };
    });
    return f.filter(function(l) {
      return !_n(l.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(l, d) {
    return {
      coordinate: a(l) + c,
      value: l,
      index: d,
      offset: c
    };
  }) : a.ticks && !n ? a.ticks(t.tickCount).map(function(l) {
    return {
      coordinate: a(l) + c,
      value: l,
      offset: c
    };
  }) : a.domain().map(function(l, d) {
    return {
      coordinate: a(l) + c,
      value: i ? i[l] : l,
      index: d,
      offset: c
    };
  });
}, Ls = /* @__PURE__ */ new WeakMap(), Nn = function(t, r) {
  if (typeof r != "function")
    return t;
  Ls.has(t) || Ls.set(t, /* @__PURE__ */ new WeakMap());
  var n = Ls.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, h0 = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, u = t.axisType;
  if (a === "auto")
    return o === "radial" && u === "radiusAxis" ? {
      scale: Yr(),
      realScaleType: "band"
    } : o === "radial" && u === "angleAxis" ? {
      scale: aa(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Lr(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: Yr(),
      realScaleType: "band"
    } : {
      scale: aa(),
      realScaleType: "linear"
    };
  if (Ft(a)) {
    var s = "scale".concat(Ua(a));
    return {
      scale: (Jv[s] || Lr)(),
      realScaleType: Jv[s] ? s : "point"
    };
  }
  return J(a) ? {
    scale: a
  } : {
    scale: Lr(),
    realScaleType: "point"
  };
}, hy = 1e-4, v0 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - hy, o = Math.max(a[0], a[1]) + hy, u = t(r[0]), s = t(r[n - 1]);
    (u < i || u > o || s < i || s > o) && t.domain([r[0], r[n - 1]]);
  }
}, sE = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, cE = function(t, r) {
  if (!r || r.length !== 2 || !B(r[0]) || !B(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!B(t[0]) || t[0] < n) && (i[0] = n), (!B(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, lE = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, u = 0; u < r; ++u) {
        var s = _n(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        s >= 0 ? (t[u][n][0] = i, t[u][n][1] = i + s, i = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + s, o = t[u][n][1]);
      }
}, fE = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var u = _n(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        u >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + u, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, dE = {
  sign: lE,
  // @ts-expect-error definitelytyped types are incorrect
  expand: bw,
  // @ts-expect-error definitelytyped types are incorrect
  none: nr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: xw,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: ww,
  positive: fE
}, pE = function(t, r, n) {
  var a = r.map(function(u) {
    return u.props.dataKey;
  }), i = dE[n], o = mw().keys(a).value(function(u, s) {
    return +Ye(u, s, 0);
  }).order(Pc).offset(i);
  return o(t);
}, hE = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var u = o ? r.reverse() : r, s = {}, c = u.reduce(function(l, d) {
    var h, g = (h = d.type) !== null && h !== void 0 && h.defaultProps ? pe(pe({}, d.type.defaultProps), d.props) : d.props, v = g.stackId, p = g.hide;
    if (p)
      return l;
    var m = g[n], x = l[m] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (we(v)) {
      var w = x.stackGroups[v] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      w.items.push(d), x.hasStack = !0, x.stackGroups[v] = w;
    } else
      x.stackGroups[Fa("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return pe(pe({}, l), {}, rr({}, m, x));
  }, s), f = {};
  return Object.keys(c).reduce(function(l, d) {
    var h = c[d];
    if (h.hasStack) {
      var g = {};
      h.stackGroups = Object.keys(h.stackGroups).reduce(function(v, p) {
        var m = h.stackGroups[p];
        return pe(pe({}, v), {}, rr({}, p, {
          numericAxisId: n,
          cateAxisId: a,
          items: m.items,
          stackedData: pE(t, m.items, i)
        }));
      }, g);
    }
    return pe(pe({}, l), {}, rr({}, d, h));
  }, f);
}, y0 = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, u = r.allowDecimals, s = n || r.scale;
  if (s !== "auto" && s !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var f = ET(c, i, u);
    return t.domain([ni(f), ri(f)]), {
      niceTicks: f
    };
  }
  if (i && a === "number") {
    var l = t.domain(), d = jT(l, i, u);
    return {
      niceTicks: d
    };
  }
  return null;
};
function wD(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Y(a[t.dataKey])) {
      var u = Un(r, "value", a[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var s = Ye(a, Y(o) ? t.dataKey : o);
  return Y(s) ? null : t.scale(s);
}
var vy = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, u = t.index;
  if (r.type === "category")
    return n[u] ? n[u].coordinate + a : null;
  var s = Ye(o, r.dataKey, r.domain[u]);
  return Y(s) ? null : r.scale(s) - i / 2 + a;
}, vE = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, yE = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? pe(pe({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (we(i)) {
    var o = r[i];
    if (o) {
      var u = o.items.indexOf(t);
      return u >= 0 ? o.stackedData[u] : null;
    }
  }
  return null;
}, gE = function(t) {
  return t.reduce(function(r, n) {
    return [ni(n.concat([r[0]]).filter(B)), ri(n.concat([r[1]]).filter(B))];
  }, [1 / 0, -1 / 0]);
}, g0 = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], u = o.stackedData, s = u.reduce(function(c, f) {
      var l = gE(f.slice(r, n + 1));
      return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(s[0], a[0]), Math.max(s[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, yy = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, gy = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Yc = function(t, r, n) {
  if (J(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (B(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (yy.test(t[0])) {
    var i = +yy.exec(t[0])[1];
    a[0] = r[0] - i;
  } else J(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (B(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (gy.test(t[1])) {
    var o = +gy.exec(t[1])[1];
    a[1] = r[1] + o;
  } else J(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, fa = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = Jl(r, function(l) {
      return l.coordinate;
    }), o = 1 / 0, u = 1, s = i.length; u < s; u++) {
      var c = i[u], f = i[u - 1];
      o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, my = function(t, r, n) {
  return !t || !t.length || wf(t, tt(n, "type.defaultProps.domain")) ? r : t;
}, m0 = function(t, r) {
  var n = t.type.defaultProps ? pe(pe({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, u = n.formatter, s = n.tooltipType, c = n.chartType, f = n.hide;
  return pe(pe({}, ce(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: u,
    name: i || a,
    color: Sf(t),
    value: Ye(r, a),
    type: s,
    payload: r,
    chartType: c,
    hide: f
  });
};
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function by(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? by(Object(r), !0).forEach(function(n) {
      b0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : by(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b0(e, t, r) {
  return t = mE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mE(e) {
  var t = bE(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function bE(e, t) {
  if (rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xE(e, t) {
  return SE(e) || OE(e, t) || _E(e, t) || wE();
}
function wE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _E(e, t) {
  if (e) {
    if (typeof e == "string") return xy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xy(e, t);
  }
}
function xy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function OE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function SE(e) {
  if (Array.isArray(e)) return e;
}
var da = Math.PI / 180, AE = function(t) {
  return t * 180 / Math.PI;
}, Pe = function(t, r, n, a) {
  return {
    x: t + Math.cos(-da * a) * n,
    y: r + Math.sin(-da * a) * n
  };
}, PE = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, _D = function(t, r, n, a, i) {
  var o = t.width, u = t.height, s = t.startAngle, c = t.endAngle, f = Ke(t.cx, o, o / 2), l = Ke(t.cy, u, u / 2), d = PE(o, u, n), h = Ke(t.innerRadius, d, 0), g = Ke(t.outerRadius, d, d * 0.8), v = Object.keys(r);
  return v.reduce(function(p, m) {
    var x = r[m], w = x.domain, _ = x.reversed, y;
    if (Y(x.range))
      a === "angleAxis" ? y = [s, c] : a === "radiusAxis" && (y = [h, g]), _ && (y = [y[1], y[0]]);
    else {
      y = x.range;
      var b = y, O = xE(b, 2);
      s = O[0], c = O[1];
    }
    var S = h0(x, i), A = S.realScaleType, C = S.scale;
    C.domain(w).range(y), v0(C);
    var T = y0(C, ot(ot({}, x), {}, {
      realScaleType: A
    })), P = ot(ot(ot({}, x), T), {}, {
      range: y,
      radius: g,
      realScaleType: A,
      scale: C,
      cx: f,
      cy: l,
      innerRadius: h,
      outerRadius: g,
      startAngle: s,
      endAngle: c
    });
    return ot(ot({}, p), {}, b0({}, m, P));
  }, {});
}, TE = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, EE = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, u = TE({
    x: n,
    y: a
  }, {
    x: i,
    y: o
  });
  if (u <= 0)
    return {
      radius: u
    };
  var s = (n - i) / u, c = Math.acos(s);
  return a > o && (c = 2 * Math.PI - c), {
    radius: u,
    angle: AE(c),
    angleInRadian: c
  };
}, jE = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, ME = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), u = Math.min(i, o);
  return t + u * 360;
}, wy = function(t, r) {
  var n = t.x, a = t.y, i = EE({
    x: n,
    y: a
  }, r), o = i.radius, u = i.angle, s = r.innerRadius, c = r.outerRadius;
  if (o < s || o > c)
    return !1;
  if (o === 0)
    return !0;
  var f = jE(r), l = f.startAngle, d = f.endAngle, h = u, g;
  if (l <= d) {
    for (; h > d; )
      h -= 360;
    for (; h < l; )
      h += 360;
    g = h >= l && h <= d;
  } else {
    for (; h > l; )
      h -= 360;
    for (; h < d; )
      h += 360;
    g = h >= d && h <= l;
  }
  return g ? ot(ot({}, r), {}, {
    radius: o,
    angle: ME(h, r)
  }) : null;
}, OD = function(t) {
  return !/* @__PURE__ */ Xe(t) && !J(t) && typeof t != "boolean" ? t.className : "";
};
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
var CE = ["offset"];
function IE(e) {
  return NE(e) || DE(e) || RE(e) || $E();
}
function $E() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RE(e, t) {
  if (e) {
    if (typeof e == "string") return Zc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zc(e, t);
  }
}
function DE(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function NE(e) {
  if (Array.isArray(e)) return Zc(e);
}
function Zc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function qE(e, t) {
  if (e == null) return {};
  var r = kE(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function kE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _y(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _y(Object(r), !0).forEach(function(n) {
      LE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _y(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LE(e, t, r) {
  return t = BE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BE(e) {
  var t = FE(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function FE(e, t) {
  if (nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function an() {
  return an = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, an.apply(this, arguments);
}
var UE = function(t) {
  var r = t.value, n = t.formatter, a = Y(t.children) ? r : t.children;
  return J(n) ? n(a) : a;
}, WE = function(t, r) {
  var n = Qe(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, zE = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, u = t.className, s = i, c = s.cx, f = s.cy, l = s.innerRadius, d = s.outerRadius, h = s.startAngle, g = s.endAngle, v = s.clockWise, p = (l + d) / 2, m = WE(h, g), x = m >= 0 ? 1 : -1, w, _;
  a === "insideStart" ? (w = h + x * o, _ = v) : a === "insideEnd" ? (w = g - x * o, _ = !v) : a === "end" && (w = g + x * o, _ = v), _ = m <= 0 ? _ : !_;
  var y = Pe(c, f, p, w), b = Pe(c, f, p, w + (_ ? 1 : -1) * 359), O = "M".concat(y.x, ",").concat(y.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(_ ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), S = Y(t.id) ? Fa("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ E.createElement("text", an({}, n, {
    dominantBaseline: "central",
    className: se("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("path", {
    id: S,
    d: O
  })), /* @__PURE__ */ E.createElement("textPath", {
    xlinkHref: "#".concat(S)
  }, r));
}, HE = function(t) {
  var r = t.viewBox, n = t.offset, a = t.position, i = r, o = i.cx, u = i.cy, s = i.innerRadius, c = i.outerRadius, f = i.startAngle, l = i.endAngle, d = (f + l) / 2;
  if (a === "outside") {
    var h = Pe(o, u, c + n, d), g = h.x, v = h.y;
    return {
      x: g,
      y: v,
      textAnchor: g >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (a === "center")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (a === "centerTop")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (a === "centerBottom")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var p = (s + c) / 2, m = Pe(o, u, p, d), x = m.x, w = m.y;
  return {
    x,
    y: w,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, GE = function(t) {
  var r = t.viewBox, n = t.parentViewBox, a = t.offset, i = t.position, o = r, u = o.x, s = o.y, c = o.width, f = o.height, l = f >= 0 ? 1 : -1, d = l * a, h = l > 0 ? "end" : "start", g = l > 0 ? "start" : "end", v = c >= 0 ? 1 : -1, p = v * a, m = v > 0 ? "end" : "start", x = v > 0 ? "start" : "end";
  if (i === "top") {
    var w = {
      x: u + c / 2,
      y: s - l * a,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return be(be({}, w), n ? {
      height: Math.max(s - n.y, 0),
      width: c
    } : {});
  }
  if (i === "bottom") {
    var _ = {
      x: u + c / 2,
      y: s + f + d,
      textAnchor: "middle",
      verticalAnchor: g
    };
    return be(be({}, _), n ? {
      height: Math.max(n.y + n.height - (s + f), 0),
      width: c
    } : {});
  }
  if (i === "left") {
    var y = {
      x: u - p,
      y: s + f / 2,
      textAnchor: m,
      verticalAnchor: "middle"
    };
    return be(be({}, y), n ? {
      width: Math.max(y.x - n.x, 0),
      height: f
    } : {});
  }
  if (i === "right") {
    var b = {
      x: u + c + p,
      y: s + f / 2,
      textAnchor: x,
      verticalAnchor: "middle"
    };
    return be(be({}, b), n ? {
      width: Math.max(n.x + n.width - b.x, 0),
      height: f
    } : {});
  }
  var O = n ? {
    width: c,
    height: f
  } : {};
  return i === "insideLeft" ? be({
    x: u + p,
    y: s + f / 2,
    textAnchor: x,
    verticalAnchor: "middle"
  }, O) : i === "insideRight" ? be({
    x: u + c - p,
    y: s + f / 2,
    textAnchor: m,
    verticalAnchor: "middle"
  }, O) : i === "insideTop" ? be({
    x: u + c / 2,
    y: s + d,
    textAnchor: "middle",
    verticalAnchor: g
  }, O) : i === "insideBottom" ? be({
    x: u + c / 2,
    y: s + f - d,
    textAnchor: "middle",
    verticalAnchor: h
  }, O) : i === "insideTopLeft" ? be({
    x: u + p,
    y: s + d,
    textAnchor: x,
    verticalAnchor: g
  }, O) : i === "insideTopRight" ? be({
    x: u + c - p,
    y: s + d,
    textAnchor: m,
    verticalAnchor: g
  }, O) : i === "insideBottomLeft" ? be({
    x: u + p,
    y: s + f - d,
    textAnchor: x,
    verticalAnchor: h
  }, O) : i === "insideBottomRight" ? be({
    x: u + c - p,
    y: s + f - d,
    textAnchor: m,
    verticalAnchor: h
  }, O) : _r(i) && (B(i.x) || Dt(i.x)) && (B(i.y) || Dt(i.y)) ? be({
    x: u + Ke(i.x, c),
    y: s + Ke(i.y, f),
    textAnchor: "end",
    verticalAnchor: "end"
  }, O) : be({
    x: u + c / 2,
    y: s + f / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, O);
}, KE = function(t) {
  return "cx" in t && B(t.cx);
};
function Ee(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = qE(e, CE), a = be({
    offset: r
  }, n), i = a.viewBox, o = a.position, u = a.value, s = a.children, c = a.content, f = a.className, l = f === void 0 ? "" : f, d = a.textBreakAll;
  if (!i || Y(u) && Y(s) && !/* @__PURE__ */ Xe(c) && !J(c))
    return null;
  if (/* @__PURE__ */ Xe(c))
    return /* @__PURE__ */ xe(c, a);
  var h;
  if (J(c)) {
    if (h = /* @__PURE__ */ $a(c, a), /* @__PURE__ */ Xe(h))
      return h;
  } else
    h = UE(a);
  var g = KE(i), v = ce(a, !0);
  if (g && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return zE(a, h, v);
  var p = g ? HE(a) : GE(a);
  return /* @__PURE__ */ E.createElement(qc, an({
    className: se("recharts-label", l)
  }, v, p, {
    breakAll: d
  }), h);
}
Ee.displayName = "Label";
var x0 = function(t) {
  var r = t.cx, n = t.cy, a = t.angle, i = t.startAngle, o = t.endAngle, u = t.r, s = t.radius, c = t.innerRadius, f = t.outerRadius, l = t.x, d = t.y, h = t.top, g = t.left, v = t.width, p = t.height, m = t.clockWise, x = t.labelViewBox;
  if (x)
    return x;
  if (B(v) && B(p)) {
    if (B(l) && B(d))
      return {
        x: l,
        y: d,
        width: v,
        height: p
      };
    if (B(h) && B(g))
      return {
        x: h,
        y: g,
        width: v,
        height: p
      };
  }
  return B(l) && B(d) ? {
    x: l,
    y: d,
    width: 0,
    height: 0
  } : B(r) && B(n) ? {
    cx: r,
    cy: n,
    startAngle: i || a || 0,
    endAngle: o || a || 0,
    innerRadius: c || 0,
    outerRadius: f || s || u || 0,
    clockWise: m
  } : t.viewBox ? t.viewBox : {};
}, XE = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    viewBox: r
  }) : we(t) ? /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Xe(t) ? t.type === Ee ? /* @__PURE__ */ xe(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : J(t) ? /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : _r(t) ? /* @__PURE__ */ E.createElement(Ee, an({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, VE = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = x0(t), o = Ve(a, Ee).map(function(s, c) {
    return /* @__PURE__ */ xe(s, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var u = XE(t.label, r || i);
  return [u].concat(IE(o));
};
Ee.parseViewBox = x0;
Ee.renderCallByParent = VE;
var Bs, Oy;
function YE() {
  if (Oy) return Bs;
  Oy = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Bs = e, Bs;
}
var ZE = YE();
const JE = /* @__PURE__ */ ie(ZE);
function on(e) {
  "@babel/helpers - typeof";
  return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, on(e);
}
var QE = ["valueAccessor"], ej = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function tj(e) {
  return ij(e) || aj(e) || nj(e) || rj();
}
function rj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nj(e, t) {
  if (e) {
    if (typeof e == "string") return Jc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jc(e, t);
  }
}
function aj(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ij(e) {
  if (Array.isArray(e)) return Jc(e);
}
function Jc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pa() {
  return pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pa.apply(this, arguments);
}
function Sy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ay(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sy(Object(r), !0).forEach(function(n) {
      oj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oj(e, t, r) {
  return t = uj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uj(e) {
  var t = sj(e, "string");
  return on(t) == "symbol" ? t : t + "";
}
function sj(e, t) {
  if (on(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (on(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Py(e, t) {
  if (e == null) return {};
  var r = cj(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var lj = function(t) {
  return Array.isArray(t.value) ? JE(t.value) : t.value;
};
function Bt(e) {
  var t = e.valueAccessor, r = t === void 0 ? lj : t, n = Py(e, QE), a = n.data, i = n.dataKey, o = n.clockWise, u = n.id, s = n.textBreakAll, c = Py(n, ej);
  return !a || !a.length ? null : /* @__PURE__ */ E.createElement(Te, {
    className: "recharts-label-list"
  }, a.map(function(f, l) {
    var d = Y(i) ? r(f, l) : Ye(f && f.payload, i), h = Y(u) ? {} : {
      id: "".concat(u, "-").concat(l)
    };
    return /* @__PURE__ */ E.createElement(Ee, pa({}, ce(f, !0), c, h, {
      parentViewBox: f.parentViewBox,
      value: d,
      textBreakAll: s,
      viewBox: Ee.parseViewBox(Y(o) ? f : Ay(Ay({}, f), {}, {
        clockWise: o
      })),
      key: "label-".concat(l),
      index: l
    }));
  }));
}
Bt.displayName = "LabelList";
function fj(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ E.createElement(Bt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ E.isValidElement(e) || J(e) ? /* @__PURE__ */ E.createElement(Bt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : _r(e) ? /* @__PURE__ */ E.createElement(Bt, pa({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function dj(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = Ve(n, Bt).map(function(o, u) {
    return /* @__PURE__ */ xe(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return a;
  var i = fj(e.label, t);
  return [i].concat(tj(a));
}
Bt.renderCallByParent = dj;
function un(e) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e);
}
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qc.apply(this, arguments);
}
function Ty(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ey(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ty(Object(r), !0).forEach(function(n) {
      pj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ty(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pj(e, t, r) {
  return t = hj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hj(e) {
  var t = vj(e, "string");
  return un(t) == "symbol" ? t : t + "";
}
function vj(e, t) {
  if (un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yj = function(t, r) {
  var n = Qe(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, qn = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, u = t.isExternal, s = t.cornerRadius, c = t.cornerIsExternal, f = s * (u ? 1 : -1) + a, l = Math.asin(s / f) / da, d = c ? i : i + o * l, h = Pe(r, n, f, d), g = Pe(r, n, a, d), v = c ? i - o * l : i, p = Pe(r, n, f * Math.cos(l * da), v);
  return {
    center: h,
    circleTangency: g,
    lineTangency: p,
    theta: l
  };
}, w0 = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, u = t.endAngle, s = yj(o, u), c = o + s, f = Pe(r, n, i, o), l = Pe(r, n, i, c), d = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(o > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (a > 0) {
    var h = Pe(r, n, a, o), g = Pe(r, n, a, c);
    d += "L ".concat(g.x, ",").concat(g.y, `
            A `).concat(a, ",").concat(a, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(o <= c), `,
            `).concat(h.x, ",").concat(h.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, gj = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, u = t.forceCornerRadius, s = t.cornerIsExternal, c = t.startAngle, f = t.endAngle, l = Qe(f - c), d = qn({
    cx: r,
    cy: n,
    radius: i,
    angle: c,
    sign: l,
    cornerRadius: o,
    cornerIsExternal: s
  }), h = d.circleTangency, g = d.lineTangency, v = d.theta, p = qn({
    cx: r,
    cy: n,
    radius: i,
    angle: f,
    sign: -l,
    cornerRadius: o,
    cornerIsExternal: s
  }), m = p.circleTangency, x = p.lineTangency, w = p.theta, _ = s ? Math.abs(c - f) : Math.abs(c - f) - v - w;
  if (_ < 0)
    return u ? "M ".concat(g.x, ",").concat(g.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : w0({
      cx: r,
      cy: n,
      innerRadius: a,
      outerRadius: i,
      startAngle: c,
      endAngle: f
    });
  var y = "M ".concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(h.x, ",").concat(h.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(_ > 180), ",").concat(+(l < 0), ",").concat(m.x, ",").concat(m.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(x.x, ",").concat(x.y, `
  `);
  if (a > 0) {
    var b = qn({
      cx: r,
      cy: n,
      radius: a,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), O = b.circleTangency, S = b.lineTangency, A = b.theta, C = qn({
      cx: r,
      cy: n,
      radius: a,
      angle: f,
      sign: -l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), T = C.circleTangency, P = C.lineTangency, j = C.theta, I = s ? Math.abs(c - f) : Math.abs(c - f) - A - j;
    if (I < 0 && o === 0)
      return "".concat(y, "L").concat(r, ",").concat(n, "Z");
    y += "L".concat(P.x, ",").concat(P.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(I > 180), ",").concat(+(l > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(S.x, ",").concat(S.y, "Z");
  } else
    y += "L".concat(r, ",").concat(n, "Z");
  return y;
}, mj = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, _0 = function(t) {
  var r = Ey(Ey({}, mj), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, s = r.forceCornerRadius, c = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, d = r.className;
  if (o < i || f === l)
    return null;
  var h = se("recharts-sector", d), g = o - i, v = Ke(u, g, 0, !0), p;
  return v > 0 && Math.abs(f - l) < 360 ? p = gj({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(v, g / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: f,
    endAngle: l
  }) : p = w0({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: f,
    endAngle: l
  }), /* @__PURE__ */ E.createElement("path", Qc({}, ce(r, !0), {
    className: h,
    d: p,
    role: "img"
  }));
};
function sn(e) {
  "@babel/helpers - typeof";
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
function el() {
  return el = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, el.apply(this, arguments);
}
function jy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function My(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jy(Object(r), !0).forEach(function(n) {
      bj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bj(e, t, r) {
  return t = xj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xj(e) {
  var t = wj(e, "string");
  return sn(t) == "symbol" ? t : t + "";
}
function wj(e, t) {
  if (sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Cy = {
  curveBasisClosed: uw,
  curveBasisOpen: sw,
  curveBasis: ow,
  curveBumpX: G1,
  curveBumpY: K1,
  curveLinearClosed: cw,
  curveLinear: za,
  curveMonotoneX: lw,
  curveMonotoneY: fw,
  curveNatural: dw,
  curveStep: pw,
  curveStepAfter: vw,
  curveStepBefore: hw
}, kn = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Cr = function(t) {
  return t.x;
}, Ir = function(t) {
  return t.y;
}, _j = function(t, r) {
  if (J(t))
    return t;
  var n = "curve".concat(Ua(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Cy["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Cy[n] || za;
}, Oj = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, u = t.layout, s = t.connectNulls, c = s === void 0 ? !1 : s, f = _j(n, u), l = c ? i.filter(function(v) {
    return kn(v);
  }) : i, d;
  if (Array.isArray(o)) {
    var h = c ? o.filter(function(v) {
      return kn(v);
    }) : o, g = l.map(function(v, p) {
      return My(My({}, v), {}, {
        base: h[p]
      });
    });
    return u === "vertical" ? d = Cn().y(Ir).x1(Cr).x0(function(v) {
      return v.base.x;
    }) : d = Cn().x(Cr).y1(Ir).y0(function(v) {
      return v.base.y;
    }), d.defined(kn).curve(f), d(g);
  }
  return u === "vertical" && B(o) ? d = Cn().y(Ir).x1(Cr).x0(o) : B(o) ? d = Cn().x(Cr).y1(Ir).y0(o) : d = Tm().x(Cr).y(Ir), d.defined(kn).curve(f), d(l);
}, Iy = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? Oj(t) : a;
  return /* @__PURE__ */ $a("path", el({}, ce(t, !1), Wn(t), {
    className: se("recharts-curve", r),
    d: o,
    ref: i
  }));
}, Fs = { exports: {} }, Us, $y;
function Sj() {
  if ($y) return Us;
  $y = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Us = e, Us;
}
var Ws, Ry;
function Aj() {
  if (Ry) return Ws;
  Ry = 1;
  var e = /* @__PURE__ */ Sj();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ws = function() {
    function n(o, u, s, c, f, l) {
      if (l !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ws;
}
var Dy;
function Pj() {
  return Dy || (Dy = 1, Fs.exports = /* @__PURE__ */ Aj()()), Fs.exports;
}
var Tj = /* @__PURE__ */ Pj();
const te = /* @__PURE__ */ ie(Tj), { getOwnPropertyNames: Ej, getOwnPropertySymbols: jj } = Object, { hasOwnProperty: Mj } = Object.prototype;
function zs(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function Ln(e) {
  return function(r, n, a) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, a);
    const { cache: i } = a, o = i.get(r), u = i.get(n);
    if (o && u)
      return o === n && u === r;
    i.set(r, n), i.set(n, r);
    const s = e(r, n, a);
    return i.delete(r), i.delete(n), s;
  };
}
function Cj(e) {
  return e?.[Symbol.toStringTag];
}
function Ny(e) {
  return Ej(e).concat(jj(e));
}
const Ij = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || ((e, t) => Mj.call(e, t))
);
function Xt(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
const $j = "__v", Rj = "__o", Dj = "_owner", { getOwnPropertyDescriptor: qy, keys: ky } = Object;
function Nj(e, t) {
  return e.byteLength === t.byteLength && ha(new Uint8Array(e), new Uint8Array(t));
}
function qj(e, t, r) {
  let n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function kj(e, t) {
  return e.byteLength === t.byteLength && ha(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function Lj(e, t) {
  return Xt(e.getTime(), t.getTime());
}
function Bj(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function Fj(e, t) {
  return e === t;
}
function Ly(e, t, r) {
  const n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  const a = new Array(n), i = e.entries();
  let o, u, s = 0;
  for (; (o = i.next()) && !o.done; ) {
    const c = t.entries();
    let f = !1, l = 0;
    for (; (u = c.next()) && !u.done; ) {
      if (a[l]) {
        l++;
        continue;
      }
      const d = o.value, h = u.value;
      if (r.equals(d[0], h[0], s, l, e, t, r) && r.equals(d[1], h[1], d[0], h[0], e, t, r)) {
        f = a[l] = !0;
        break;
      }
      l++;
    }
    if (!f)
      return !1;
    s++;
  }
  return !0;
}
const Uj = Xt;
function Wj(e, t, r) {
  const n = ky(e);
  let a = n.length;
  if (ky(t).length !== a)
    return !1;
  for (; a-- > 0; )
    if (!O0(e, t, r, n[a]))
      return !1;
  return !0;
}
function $r(e, t, r) {
  const n = Ny(e);
  let a = n.length;
  if (Ny(t).length !== a)
    return !1;
  let i, o, u;
  for (; a-- > 0; )
    if (i = n[a], !O0(e, t, r, i) || (o = qy(e, i), u = qy(t, i), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable)))
      return !1;
  return !0;
}
function zj(e, t) {
  return Xt(e.valueOf(), t.valueOf());
}
function Hj(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function By(e, t, r) {
  const n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  const a = new Array(n), i = e.values();
  let o, u;
  for (; (o = i.next()) && !o.done; ) {
    const s = t.values();
    let c = !1, f = 0;
    for (; (u = s.next()) && !u.done; ) {
      if (!a[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        c = a[f] = !0;
        break;
      }
      f++;
    }
    if (!c)
      return !1;
  }
  return !0;
}
function ha(e, t) {
  let r = e.byteLength;
  if (t.byteLength !== r || e.byteOffset !== t.byteOffset)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Gj(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function O0(e, t, r, n) {
  return (n === Dj || n === Rj || n === $j) && (e.$$typeof || t.$$typeof) ? !0 : Ij(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
const Kj = "[object ArrayBuffer]", Xj = "[object Arguments]", Vj = "[object Boolean]", Yj = "[object DataView]", Zj = "[object Date]", Jj = "[object Error]", Qj = "[object Map]", eM = "[object Number]", tM = "[object Object]", rM = "[object RegExp]", nM = "[object Set]", aM = "[object String]", iM = {
  "[object Int8Array]": !0,
  "[object Uint8Array]": !0,
  "[object Uint8ClampedArray]": !0,
  "[object Int16Array]": !0,
  "[object Uint16Array]": !0,
  "[object Int32Array]": !0,
  "[object Uint32Array]": !0,
  "[object Float16Array]": !0,
  "[object Float32Array]": !0,
  "[object Float64Array]": !0,
  "[object BigInt64Array]": !0,
  "[object BigUint64Array]": !0
}, oM = "[object URL]", uM = Object.prototype.toString;
function sM({ areArrayBuffersEqual: e, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: a, areFunctionsEqual: i, areMapsEqual: o, areNumbersEqual: u, areObjectsEqual: s, arePrimitiveWrappersEqual: c, areRegExpsEqual: f, areSetsEqual: l, areTypedArraysEqual: d, areUrlsEqual: h, unknownTagComparators: g }) {
  return function(p, m, x) {
    if (p === m)
      return !0;
    if (p == null || m == null)
      return !1;
    const w = typeof p;
    if (w !== typeof m)
      return !1;
    if (w !== "object")
      return w === "number" ? u(p, m, x) : w === "function" ? i(p, m, x) : !1;
    const _ = p.constructor;
    if (_ !== m.constructor)
      return !1;
    if (_ === Object)
      return s(p, m, x);
    if (Array.isArray(p))
      return t(p, m, x);
    if (_ === Date)
      return n(p, m, x);
    if (_ === RegExp)
      return f(p, m, x);
    if (_ === Map)
      return o(p, m, x);
    if (_ === Set)
      return l(p, m, x);
    const y = uM.call(p);
    if (y === Zj)
      return n(p, m, x);
    if (y === rM)
      return f(p, m, x);
    if (y === Qj)
      return o(p, m, x);
    if (y === nM)
      return l(p, m, x);
    if (y === tM)
      return typeof p.then != "function" && typeof m.then != "function" && s(p, m, x);
    if (y === oM)
      return h(p, m, x);
    if (y === Jj)
      return a(p, m, x);
    if (y === Xj)
      return s(p, m, x);
    if (iM[y])
      return d(p, m, x);
    if (y === Kj)
      return e(p, m, x);
    if (y === Yj)
      return r(p, m, x);
    if (y === Vj || y === eM || y === aM)
      return c(p, m, x);
    if (g) {
      let b = g[y];
      if (!b) {
        const O = Cj(p);
        O && (b = g[O]);
      }
      if (b)
        return b(p, m, x);
    }
    return !1;
  };
}
function cM({ circular: e, createCustomConfig: t, strict: r }) {
  let n = {
    areArrayBuffersEqual: Nj,
    areArraysEqual: r ? $r : qj,
    areDataViewsEqual: kj,
    areDatesEqual: Lj,
    areErrorsEqual: Bj,
    areFunctionsEqual: Fj,
    areMapsEqual: r ? zs(Ly, $r) : Ly,
    areNumbersEqual: Uj,
    areObjectsEqual: r ? $r : Wj,
    arePrimitiveWrappersEqual: zj,
    areRegExpsEqual: Hj,
    areSetsEqual: r ? zs(By, $r) : By,
    areTypedArraysEqual: r ? zs(ha, $r) : ha,
    areUrlsEqual: Gj,
    unknownTagComparators: void 0
  };
  if (t && (n = Object.assign({}, n, t(n))), e) {
    const a = Ln(n.areArraysEqual), i = Ln(n.areMapsEqual), o = Ln(n.areObjectsEqual), u = Ln(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: a,
      areMapsEqual: i,
      areObjectsEqual: o,
      areSetsEqual: u
    });
  }
  return n;
}
function lM(e) {
  return function(t, r, n, a, i, o, u) {
    return e(t, r, u);
  };
}
function fM({ circular: e, comparator: t, createState: r, equals: n, strict: a }) {
  if (r)
    return function(u, s) {
      const { cache: c = e ? /* @__PURE__ */ new WeakMap() : void 0, meta: f } = r();
      return t(u, s, {
        cache: c,
        equals: n,
        meta: f,
        strict: a
      });
    };
  if (e)
    return function(u, s) {
      return t(u, s, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: n,
        meta: void 0,
        strict: a
      });
    };
  const i = {
    cache: void 0,
    equals: n,
    meta: void 0,
    strict: a
  };
  return function(u, s) {
    return t(u, s, i);
  };
}
const dM = Et();
Et({ strict: !0 });
Et({ circular: !0 });
Et({
  circular: !0,
  strict: !0
});
Et({
  createInternalComparator: () => Xt
});
Et({
  strict: !0,
  createInternalComparator: () => Xt
});
Et({
  circular: !0,
  createInternalComparator: () => Xt
});
Et({
  circular: !0,
  createInternalComparator: () => Xt,
  strict: !0
});
function Et(e = {}) {
  const { circular: t = !1, createInternalComparator: r, createState: n, strict: a = !1 } = e, i = cM(e), o = sM(i), u = r ? r(o) : lM(o);
  return fM({ circular: t, comparator: o, createState: n, equals: u, strict: a });
}
function pM(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Fy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : pM(a);
  };
  requestAnimationFrame(n);
}
function tl(e) {
  "@babel/helpers - typeof";
  return tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tl(e);
}
function hM(e) {
  return mM(e) || gM(e) || yM(e) || vM();
}
function vM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yM(e, t) {
  if (e) {
    if (typeof e == "string") return Uy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Uy(e, t);
  }
}
function Uy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function mM(e) {
  if (Array.isArray(e)) return e;
}
function bM() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, u = hM(o), s = u[0], c = u.slice(1);
        if (typeof s == "number") {
          Fy(a.bind(null, c), s);
          return;
        }
        a(s), Fy(a.bind(null, c));
        return;
      }
      tl(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(i) {
      r = !1, n(i);
    },
    subscribe: function(i) {
      return t = i, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function cn(e) {
  "@babel/helpers - typeof";
  return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cn(e);
}
function Wy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wy(Object(r), !0).forEach(function(n) {
      S0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S0(e, t, r) {
  return t = xM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xM(e) {
  var t = wM(e, "string");
  return cn(t) === "symbol" ? t : String(t);
}
function wM(e, t) {
  if (cn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (cn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _M = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, OM = function(t) {
  return t;
}, SM = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Fr = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return zy(zy({}, n), {}, S0({}, a, t(a, r[a])));
  }, {});
}, Hy = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(SM(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function AM(e, t) {
  return EM(e) || TM(e, t) || A0(e, t) || PM();
}
function PM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TM(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function EM(e) {
  if (Array.isArray(e)) return e;
}
function jM(e) {
  return IM(e) || CM(e) || A0(e) || MM();
}
function MM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A0(e, t) {
  if (e) {
    if (typeof e == "string") return rl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rl(e, t);
  }
}
function CM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function IM(e) {
  if (Array.isArray(e)) return rl(e);
}
function rl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var va = 1e-4, P0 = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, T0 = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, Gy = function(t, r) {
  return function(n) {
    var a = P0(t, r);
    return T0(a, n);
  };
}, $M = function(t, r) {
  return function(n) {
    var a = P0(t, r), i = [].concat(jM(a.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return T0(i, n);
  };
}, Ky = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r[0], i = r[1], o = r[2], u = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        a = 0, i = 0, o = 1, u = 1;
        break;
      case "ease":
        a = 0.25, i = 0.1, o = 0.25, u = 1;
        break;
      case "ease-in":
        a = 0.42, i = 0, o = 1, u = 1;
        break;
      case "ease-out":
        a = 0.42, i = 0, o = 0.58, u = 1;
        break;
      case "ease-in-out":
        a = 0, i = 0, o = 0.58, u = 1;
        break;
      default: {
        var s = r[0].split("(");
        if (s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4) {
          var c = s[1].split(")")[0].split(",").map(function(p) {
            return parseFloat(p);
          }), f = AM(c, 4);
          a = f[0], i = f[1], o = f[2], u = f[3];
        }
      }
    }
  var l = Gy(a, o), d = Gy(i, u), h = $M(a, o), g = function(m) {
    return m > 1 ? 1 : m < 0 ? 0 : m;
  }, v = function(m) {
    for (var x = m > 1 ? 1 : m, w = x, _ = 0; _ < 8; ++_) {
      var y = l(w) - x, b = h(w);
      if (Math.abs(y - x) < va || b < va)
        return d(w);
      w = g(w - y / b);
    }
    return d(w);
  };
  return v.isStepper = !1, v;
}, RM = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, u = o === void 0 ? 17 : o, s = function(f, l, d) {
    var h = -(f - l) * n, g = d * i, v = d + (h - g) * u / 1e3, p = d * u / 1e3 + f;
    return Math.abs(p - l) < va && Math.abs(v) < va ? [l, 0] : [p, v];
  };
  return s.isStepper = !0, s.dt = u, s;
}, DM = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r[0];
  if (typeof a == "string")
    switch (a) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Ky(a);
      case "spring":
        return RM();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return Ky(a);
    }
  return typeof a == "function" ? a : null;
};
function ln(e) {
  "@babel/helpers - typeof";
  return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ln(e);
}
function Xy(e) {
  return kM(e) || qM(e) || E0(e) || NM();
}
function NM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kM(e) {
  if (Array.isArray(e)) return al(e);
}
function Vy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vy(Object(r), !0).forEach(function(n) {
      nl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nl(e, t, r) {
  return t = LM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LM(e) {
  var t = BM(e, "string");
  return ln(t) === "symbol" ? t : String(t);
}
function BM(e, t) {
  if (ln(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ln(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function FM(e, t) {
  return zM(e) || WM(e, t) || E0(e, t) || UM();
}
function UM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E0(e, t) {
  if (e) {
    if (typeof e == "string") return al(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return al(e, t);
  }
}
function al(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function WM(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function zM(e) {
  if (Array.isArray(e)) return e;
}
var ya = function(t, r, n) {
  return t + (r - t) * n;
}, il = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, HM = function e(t, r, n) {
  var a = Fr(function(i, o) {
    if (il(o)) {
      var u = t(o.from, o.to, o.velocity), s = FM(u, 2), c = s[0], f = s[1];
      return Ae(Ae({}, o), {}, {
        from: c,
        velocity: f
      });
    }
    return o;
  }, r);
  return n < 1 ? Fr(function(i, o) {
    return il(o) ? Ae(Ae({}, o), {}, {
      velocity: ya(o.velocity, a[i].velocity, n),
      from: ya(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const GM = (function(e, t, r, n, a) {
  var i = _M(e, t), o = i.reduce(function(p, m) {
    return Ae(Ae({}, p), {}, nl({}, m, [e[m], t[m]]));
  }, {}), u = i.reduce(function(p, m) {
    return Ae(Ae({}, p), {}, nl({}, m, {
      from: e[m],
      velocity: 0,
      to: t[m]
    }));
  }, {}), s = -1, c, f, l = function() {
    return null;
  }, d = function() {
    return Fr(function(m, x) {
      return x.from;
    }, u);
  }, h = function() {
    return !Object.values(u).filter(il).length;
  }, g = function(m) {
    c || (c = m);
    var x = m - c, w = x / r.dt;
    u = HM(r, u, w), a(Ae(Ae(Ae({}, e), t), d())), c = m, h() || (s = requestAnimationFrame(l));
  }, v = function(m) {
    f || (f = m);
    var x = (m - f) / n, w = Fr(function(y, b) {
      return ya.apply(void 0, Xy(b).concat([r(x)]));
    }, o);
    if (a(Ae(Ae(Ae({}, e), t), w)), x < 1)
      s = requestAnimationFrame(l);
    else {
      var _ = Fr(function(y, b) {
        return ya.apply(void 0, Xy(b).concat([r(1)]));
      }, o);
      a(Ae(Ae(Ae({}, e), t), _));
    }
  };
  return l = r.isStepper ? g : v, function() {
    return requestAnimationFrame(l), function() {
      cancelAnimationFrame(s);
    };
  };
});
function dr(e) {
  "@babel/helpers - typeof";
  return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dr(e);
}
var KM = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function XM(e, t) {
  if (e == null) return {};
  var r = VM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function VM(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Hs(e) {
  return QM(e) || JM(e) || ZM(e) || YM();
}
function YM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZM(e, t) {
  if (e) {
    if (typeof e == "string") return ol(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ol(e, t);
  }
}
function JM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function QM(e) {
  if (Array.isArray(e)) return ol(e);
}
function ol(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Yy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function He(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yy(Object(r), !0).forEach(function(n) {
      kr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kr(e, t, r) {
  return t = j0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, j0(n.key), n);
  }
}
function rC(e, t, r) {
  return t && tC(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function j0(e) {
  var t = nC(e, "string");
  return dr(t) === "symbol" ? t : String(t);
}
function nC(e, t) {
  if (dr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ul(e, t);
}
function ul(e, t) {
  return ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ul(e, t);
}
function iC(e) {
  var t = oC();
  return function() {
    var n = ga(e), a;
    if (t) {
      var i = ga(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return sl(this, a);
  };
}
function sl(e, t) {
  if (t && (dr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cl(e);
}
function cl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function oC() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ga(e) {
  return ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ga(e);
}
var Ot = /* @__PURE__ */ (function(e) {
  aC(r, e);
  var t = iC(r);
  function r(n, a) {
    var i;
    eC(this, r), i = t.call(this, n, a);
    var o = i.props, u = o.isActive, s = o.attributeName, c = o.from, f = o.to, l = o.steps, d = o.children, h = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(cl(i)), i.changeStyle = i.changeStyle.bind(cl(i)), !u || h <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: f
      }), sl(i);
    if (l && l.length)
      i.state = {
        style: l[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return i.state = {
          style: c
        }, sl(i);
      i.state = {
        style: s ? kr({}, s, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return rC(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.isActive, o = a.canBegin;
      this.mounted = !0, !(!i || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(a) {
      var i = this.props, o = i.isActive, u = i.canBegin, s = i.attributeName, c = i.shouldReAnimate, f = i.to, l = i.from, d = this.state.style;
      if (u) {
        if (!o) {
          var h = {
            style: s ? kr({}, s, f) : f
          };
          this.state && d && (s && d[s] !== f || !s && d !== f) && this.setState(h);
          return;
        }
        if (!(dM(a.to, f) && a.canBegin && a.isActive)) {
          var g = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var v = g || c ? l : a.to;
          if (this.state && d) {
            var p = {
              style: s ? kr({}, s, v) : v
            };
            (s && d[s] !== v || !s && d !== v) && this.setState(p);
          }
          this.runAnimation(He(He({}, this.props), {}, {
            from: v,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var a = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), a && a();
    }
  }, {
    key: "handleStyleChange",
    value: function(a) {
      this.changeStyle(a);
    }
  }, {
    key: "changeStyle",
    value: function(a) {
      this.mounted && this.setState({
        style: a
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(a) {
      var i = this, o = a.from, u = a.to, s = a.duration, c = a.easing, f = a.begin, l = a.onAnimationEnd, d = a.onAnimationStart, h = GM(o, u, DM(c), s, this.changeStyle), g = function() {
        i.stopJSAnimation = h();
      };
      this.manager.start([d, f, g, s, l]);
    }
  }, {
    key: "runStepAnimation",
    value: function(a) {
      var i = this, o = a.steps, u = a.begin, s = a.onAnimationStart, c = o[0], f = c.style, l = c.duration, d = l === void 0 ? 0 : l, h = function(v, p, m) {
        if (m === 0)
          return v;
        var x = p.duration, w = p.easing, _ = w === void 0 ? "ease" : w, y = p.style, b = p.properties, O = p.onAnimationEnd, S = m > 0 ? o[m - 1] : p, A = b || Object.keys(y);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(Hs(v), [i.runJSAnimation.bind(i, {
            from: S.style,
            to: y,
            duration: x,
            easing: _
          }), x]);
        var C = Hy(A, x, _), T = He(He(He({}, S.style), y), {}, {
          transition: C
        });
        return [].concat(Hs(v), [T, x, O]).filter(OM);
      };
      return this.manager.start([s].concat(Hs(o.reduce(h, [f, Math.max(d, u)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = bM());
      var i = a.begin, o = a.duration, u = a.attributeName, s = a.to, c = a.easing, f = a.onAnimationStart, l = a.onAnimationEnd, d = a.steps, h = a.children, g = this.manager;
      if (this.unSubscribe = g.subscribe(this.handleStyleChange), typeof c == "function" || typeof h == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var v = u ? kr({}, u, s) : s, p = Hy(Object.keys(v), o, c);
      g.start([f, i, He(He({}, v), {}, {
        transition: p
      }), o, l]);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, i = a.children;
      a.begin;
      var o = a.duration;
      a.attributeName, a.easing;
      var u = a.isActive;
      a.steps, a.from, a.to, a.canBegin, a.onAnimationEnd, a.shouldReAnimate, a.onAnimationReStart;
      var s = XM(a, KM), c = qt.count(i), f = this.state.style;
      if (typeof i == "function")
        return i(f);
      if (!u || c === 0 || o <= 0)
        return i;
      var l = function(h) {
        var g = h.props, v = g.style, p = v === void 0 ? {} : v, m = g.className, x = /* @__PURE__ */ xe(h, He(He({}, s), {}, {
          style: He(He({}, p), f),
          className: m
        }));
        return x;
      };
      return c === 1 ? l(qt.only(i)) : /* @__PURE__ */ E.createElement("div", null, qt.map(i, function(d) {
        return l(d);
      }));
    }
  }]), r;
})(zt);
Ot.displayName = "Animate";
Ot.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Ot.propTypes = {
  from: te.oneOfType([te.object, te.string]),
  to: te.oneOfType([te.object, te.string]),
  attributeName: te.string,
  // animation duration
  duration: te.number,
  begin: te.number,
  easing: te.oneOfType([te.string, te.func]),
  steps: te.arrayOf(te.shape({
    duration: te.number.isRequired,
    style: te.object.isRequired,
    easing: te.oneOfType([te.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), te.func]),
    // transition css properties(dash case), optional
    properties: te.arrayOf("string"),
    onAnimationEnd: te.func
  })),
  children: te.oneOfType([te.node, te.func]),
  isActive: te.bool,
  canBegin: te.bool,
  onAnimationEnd: te.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: te.bool,
  onAnimationStart: te.func,
  onAnimationReStart: te.func
};
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function ma() {
  return ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ma.apply(this, arguments);
}
function uC(e, t) {
  return fC(e) || lC(e, t) || cC(e, t) || sC();
}
function sC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cC(e, t) {
  if (e) {
    if (typeof e == "string") return Zy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zy(e, t);
  }
}
function Zy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function fC(e) {
  if (Array.isArray(e)) return e;
}
function Jy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jy(Object(r), !0).forEach(function(n) {
      dC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dC(e, t, r) {
  return t = pC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pC(e) {
  var t = hC(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function hC(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var eg = function(t, r, n, a, i) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2), u = a >= 0 ? 1 : -1, s = n >= 0 ? 1 : -1, c = a >= 0 && n >= 0 || a < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && i instanceof Array) {
    for (var l = [0, 0, 0, 0], d = 0, h = 4; d < h; d++)
      l[d] = i[d] > o ? o : i[d];
    f = "M".concat(t, ",").concat(r + u * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(t + s * l[0], ",").concat(r)), f += "L ".concat(t + n - s * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + u * l[1])), f += "L ".concat(t + n, ",").concat(r + a - u * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(t + n - s * l[2], ",").concat(r + a)), f += "L ".concat(t + s * l[3], ",").concat(r + a), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + a - u * l[3])), f += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var g = Math.min(o, i);
    f = "M ".concat(t, ",").concat(r + u * g, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t + s * g, ",").concat(r, `
            L `).concat(t + n - s * g, ",").concat(r, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + u * g, `
            L `).concat(t + n, ",").concat(r + a - u * g, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t + n - s * g, ",").concat(r + a, `
            L `).concat(t + s * g, ",").concat(r + a, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t, ",").concat(r + a - u * g, " Z");
  } else
    f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(a, " h ").concat(-n, " Z");
  return f;
}, vC = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, u = r.width, s = r.height;
  if (Math.abs(u) > 0 && Math.abs(s) > 0) {
    var c = Math.min(i, i + u), f = Math.max(i, i + u), l = Math.min(o, o + s), d = Math.max(o, o + s);
    return n >= c && n <= f && a >= l && a <= d;
  }
  return !1;
}, yC = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Af = function(t) {
  var r = Qy(Qy({}, yC), t), n = Ur(), a = Tl(-1), i = uC(a, 2), o = i[0], u = i[1];
  Ia(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var _ = n.current.getTotalLength();
        _ && u(_);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.width, l = r.height, d = r.radius, h = r.className, g = r.animationEasing, v = r.animationDuration, p = r.animationBegin, m = r.isAnimationActive, x = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || f === 0 || l === 0)
    return null;
  var w = se("recharts-rectangle", h);
  return x ? /* @__PURE__ */ E.createElement(Ot, {
    canBegin: o > 0,
    from: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    to: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    duration: v,
    animationEasing: g,
    isActive: x
  }, function(_) {
    var y = _.width, b = _.height, O = _.x, S = _.y;
    return /* @__PURE__ */ E.createElement(Ot, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: v,
      isActive: m,
      easing: g
    }, /* @__PURE__ */ E.createElement("path", ma({}, ce(r, !0), {
      className: w,
      d: eg(O, S, y, b, d),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("path", ma({}, ce(r, !0), {
    className: w,
    d: eg(s, c, f, l, d)
  }));
};
function ll() {
  return ll = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ll.apply(this, arguments);
}
var M0 = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = se("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ $a("circle", ll({}, ce(t, !1), Wn(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function dn(e) {
  "@babel/helpers - typeof";
  return dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dn(e);
}
var gC = ["x", "y", "top", "left", "width", "height", "className"];
function fl() {
  return fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fl.apply(this, arguments);
}
function tg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tg(Object(r), !0).forEach(function(n) {
      bC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bC(e, t, r) {
  return t = xC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xC(e) {
  var t = wC(e, "string");
  return dn(t) == "symbol" ? t : t + "";
}
function wC(e, t) {
  if (dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _C(e, t) {
  if (e == null) return {};
  var r = OC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function OC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var SC = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, AC = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, u = o === void 0 ? 0 : o, s = t.left, c = s === void 0 ? 0 : s, f = t.width, l = f === void 0 ? 0 : f, d = t.height, h = d === void 0 ? 0 : d, g = t.className, v = _C(t, gC), p = mC({
    x: n,
    y: i,
    top: u,
    left: c,
    width: l,
    height: h
  }, v);
  return !B(n) || !B(i) || !B(l) || !B(h) || !B(u) || !B(c) ? null : /* @__PURE__ */ E.createElement("path", fl({}, ce(p, !0), {
    className: se("recharts-cross", g),
    d: SC(n, i, l, h, u, c)
  }));
}, Gs, rg;
function PC() {
  if (rg) return Gs;
  rg = 1;
  var e = Ym(), t = e(Object.getPrototypeOf, Object);
  return Gs = t, Gs;
}
var Ks, ng;
function TC() {
  if (ng) return Ks;
  ng = 1;
  var e = vt(), t = PC(), r = yt(), n = "[object Object]", a = Function.prototype, i = Object.prototype, o = a.toString, u = i.hasOwnProperty, s = o.call(Object);
  function c(f) {
    if (!r(f) || e(f) != n)
      return !1;
    var l = t(f);
    if (l === null)
      return !0;
    var d = u.call(l, "constructor") && l.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == s;
  }
  return Ks = c, Ks;
}
var EC = TC();
const jC = /* @__PURE__ */ ie(EC);
var Xs, ag;
function MC() {
  if (ag) return Xs;
  ag = 1;
  var e = vt(), t = yt(), r = "[object Boolean]";
  function n(a) {
    return a === !0 || a === !1 || t(a) && e(a) == r;
  }
  return Xs = n, Xs;
}
var CC = MC();
const IC = /* @__PURE__ */ ie(CC);
function pn(e) {
  "@babel/helpers - typeof";
  return pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pn(e);
}
function ba() {
  return ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ba.apply(this, arguments);
}
function $C(e, t) {
  return qC(e) || NC(e, t) || DC(e, t) || RC();
}
function RC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DC(e, t) {
  if (e) {
    if (typeof e == "string") return ig(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ig(e, t);
  }
}
function ig(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function NC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function qC(e) {
  if (Array.isArray(e)) return e;
}
function og(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ug(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? og(Object(r), !0).forEach(function(n) {
      kC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : og(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kC(e, t, r) {
  return t = LC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LC(e) {
  var t = BC(e, "string");
  return pn(t) == "symbol" ? t : t + "";
}
function BC(e, t) {
  if (pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var sg = function(t, r, n, a, i) {
  var o = n - a, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + i), u += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, FC = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, UC = function(t) {
  var r = ug(ug({}, FC), t), n = Ur(), a = Tl(-1), i = $C(a, 2), o = i[0], u = i[1];
  Ia(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var w = n.current.getTotalLength();
        w && u(w);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.upperWidth, l = r.lowerWidth, d = r.height, h = r.className, g = r.animationEasing, v = r.animationDuration, p = r.animationBegin, m = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || d !== +d || f === 0 && l === 0 || d === 0)
    return null;
  var x = se("recharts-trapezoid", h);
  return m ? /* @__PURE__ */ E.createElement(Ot, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: s,
      y: c
    },
    to: {
      upperWidth: f,
      lowerWidth: l,
      height: d,
      x: s,
      y: c
    },
    duration: v,
    animationEasing: g,
    isActive: m
  }, function(w) {
    var _ = w.upperWidth, y = w.lowerWidth, b = w.height, O = w.x, S = w.y;
    return /* @__PURE__ */ E.createElement(Ot, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: v,
      easing: g
    }, /* @__PURE__ */ E.createElement("path", ba({}, ce(r, !0), {
      className: x,
      d: sg(O, S, _, y, b),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("g", null, /* @__PURE__ */ E.createElement("path", ba({}, ce(r, !0), {
    className: x,
    d: sg(s, c, f, l, d)
  })));
}, WC = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function hn(e) {
  "@babel/helpers - typeof";
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hn(e);
}
function zC(e, t) {
  if (e == null) return {};
  var r = HC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function HC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cg(Object(r), !0).forEach(function(n) {
      GC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GC(e, t, r) {
  return t = KC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KC(e) {
  var t = XC(e, "string");
  return hn(t) == "symbol" ? t : t + "";
}
function XC(e, t) {
  if (hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VC(e, t) {
  return xa(xa({}, t), e);
}
function YC(e, t) {
  return e === "symbols";
}
function lg(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ E.createElement(Af, r);
    case "trapezoid":
      return /* @__PURE__ */ E.createElement(UC, r);
    case "sector":
      return /* @__PURE__ */ E.createElement(_0, r);
    case "symbols":
      if (YC(t))
        return /* @__PURE__ */ E.createElement(zl, r);
      break;
    default:
      return null;
  }
}
function ZC(e) {
  return /* @__PURE__ */ Xe(e) ? e.props : e;
}
function JC(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? VC : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, u = e.isActive, s = zC(e, WC), c;
  if (/* @__PURE__ */ Xe(t))
    c = /* @__PURE__ */ xe(t, xa(xa({}, s), ZC(t)));
  else if (J(t))
    c = t(s);
  else if (jC(t) && !IC(t)) {
    var f = a(t, s);
    c = /* @__PURE__ */ E.createElement(lg, {
      shapeType: r,
      elementProps: f
    });
  } else {
    var l = s;
    c = /* @__PURE__ */ E.createElement(lg, {
      shapeType: r,
      elementProps: l
    });
  }
  return u ? /* @__PURE__ */ E.createElement(Te, {
    className: o
  }, c) : c;
}
function ui(e, t) {
  return t != null && "trapezoids" in e.props;
}
function si(e, t) {
  return t != null && "sectors" in e.props;
}
function vn(e, t) {
  return t != null && "points" in e.props;
}
function QC(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function eI(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function tI(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function rI(e, t) {
  var r;
  return ui(e, t) ? r = QC : si(e, t) ? r = eI : vn(e, t) && (r = tI), r;
}
function nI(e, t) {
  var r;
  return ui(e, t) ? r = "trapezoids" : si(e, t) ? r = "sectors" : vn(e, t) && (r = "points"), r;
}
function aI(e, t) {
  if (ui(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (si(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return vn(e, t) ? t.payload : {};
}
function iI(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = nI(r, t), i = aI(r, t), o = n.filter(function(s, c) {
    var f = wf(i, s), l = r.props[a].filter(function(g) {
      var v = rI(r, t);
      return v(g, t);
    }), d = r.props[a].indexOf(l[l.length - 1]), h = c === d;
    return f && h;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var Vs, fg;
function oI() {
  if (fg) return Vs;
  fg = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, a, i, o) {
    for (var u = -1, s = t(e((a - n) / (i || 1)), 0), c = Array(s); s--; )
      c[o ? s : ++u] = n, n += i;
    return c;
  }
  return Vs = r, Vs;
}
var Ys, dg;
function C0() {
  if (dg) return Ys;
  dg = 1;
  var e = db(), t = 1 / 0, r = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === t || a === -t) {
      var i = a < 0 ? -1 : 1;
      return i * r;
    }
    return a === a ? a : 0;
  }
  return Ys = n, Ys;
}
var Zs, pg;
function uI() {
  if (pg) return Zs;
  pg = 1;
  var e = oI(), t = Xa(), r = C0();
  function n(a) {
    return function(i, o, u) {
      return u && typeof u != "number" && t(i, o, u) && (o = u = void 0), i = r(i), o === void 0 ? (o = i, i = 0) : o = r(o), u = u === void 0 ? i < o ? 1 : -1 : r(u), e(i, o, u, a);
    };
  }
  return Zs = n, Zs;
}
var Js, hg;
function sI() {
  if (hg) return Js;
  hg = 1;
  var e = uI(), t = e();
  return Js = t, Js;
}
var cI = sI();
const wa = /* @__PURE__ */ ie(cI);
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yn(e);
}
function vg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vg(Object(r), !0).forEach(function(n) {
      I0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I0(e, t, r) {
  return t = lI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lI(e) {
  var t = fI(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function fI(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dI = ["Webkit", "Moz", "O", "ms"], pI = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = dI.reduce(function(i, o) {
    return yg(yg({}, i), {}, I0({}, o + n, r));
  }, {});
  return a[t] = r, a;
};
function pr(e) {
  "@babel/helpers - typeof";
  return pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pr(e);
}
function _a() {
  return _a = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _a.apply(this, arguments);
}
function gg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gg(Object(r), !0).forEach(function(n) {
      Ne(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, R0(n.key), n);
  }
}
function vI(e, t, r) {
  return t && mg(e.prototype, t), r && mg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yI(e, t, r) {
  return t = Oa(t), gI(e, $0() ? Reflect.construct(t, r || [], Oa(e).constructor) : t.apply(e, r));
}
function gI(e, t) {
  if (t && (pr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mI(e);
}
function mI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($0 = function() {
    return !!e;
  })();
}
function Oa(e) {
  return Oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oa(e);
}
function bI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && dl(e, t);
}
function dl(e, t) {
  return dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, dl(e, t);
}
function Ne(e, t, r) {
  return t = R0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R0(e) {
  var t = xI(e, "string");
  return pr(t) == "symbol" ? t : t + "";
}
function xI(e, t) {
  if (pr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var wI = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, u = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var s = r.length, c = Lr().domain(wa(0, s)).range([i, i + o - u]), f = c.domain().map(function(l) {
    return c(l);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: c(n),
    endX: c(a),
    scale: c,
    scaleValues: f
  };
}, bg = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, hr = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return hI(this, t), n = yI(this, t, [r]), Ne(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), Ne(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), Ne(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var a = n.props, i = a.endIndex, o = a.onDragEnd, u = a.startIndex;
        o?.({
          endIndex: i,
          startIndex: u
        });
      }), n.detachDragEndListener();
    }), Ne(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Ne(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), Ne(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), Ne(n, "handleSlideDragStart", function(a) {
      var i = bg(a) ? a.changedTouches[0] : a;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: i.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return bI(t, e), vI(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var a = n.startX, i = n.endX, o = this.state.scaleValues, u = this.props, s = u.gap, c = u.data, f = c.length - 1, l = Math.min(a, i), d = Math.max(a, i), h = t.getIndexInRange(o, l), g = t.getIndexInRange(o, d);
      return {
        startIndex: h - h % s,
        endIndex: g === f ? f : g - g % s
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var a = this.props, i = a.data, o = a.tickFormatter, u = a.dataKey, s = Ye(i[n], u, n);
      return J(o) ? o(s, n) : s;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var a = this.state, i = a.slideMoveStartX, o = a.startX, u = a.endX, s = this.props, c = s.x, f = s.width, l = s.travellerWidth, d = s.startIndex, h = s.endIndex, g = s.onChange, v = n.pageX - i;
      v > 0 ? v = Math.min(v, c + f - l - u, c + f - l - o) : v < 0 && (v = Math.max(v, c - o, c - u));
      var p = this.getIndex({
        startX: o + v,
        endX: u + v
      });
      (p.startIndex !== d || p.endIndex !== h) && g && g(p), this.setState({
        startX: o + v,
        endX: u + v,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, a) {
      var i = bg(a) ? a.changedTouches[0] : a;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: i.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var a = this.state, i = a.brushMoveStartX, o = a.movingTravellerId, u = a.endX, s = a.startX, c = this.state[o], f = this.props, l = f.x, d = f.width, h = f.travellerWidth, g = f.onChange, v = f.gap, p = f.data, m = {
        startX: this.state.startX,
        endX: this.state.endX
      }, x = n.pageX - i;
      x > 0 ? x = Math.min(x, l + d - h - c) : x < 0 && (x = Math.max(x, l - c)), m[o] = c + x;
      var w = this.getIndex(m), _ = w.startIndex, y = w.endIndex, b = function() {
        var S = p.length - 1;
        return o === "startX" && (u > s ? _ % v === 0 : y % v === 0) || u < s && y === S || o === "endX" && (u > s ? y % v === 0 : _ % v === 0) || u > s && y === S;
      };
      this.setState(Ne(Ne({}, o, c + x), "brushMoveStartX", n.pageX), function() {
        g && b() && g(w);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, a) {
      var i = this, o = this.state, u = o.scaleValues, s = o.startX, c = o.endX, f = this.state[a], l = u.indexOf(f);
      if (l !== -1) {
        var d = l + n;
        if (!(d === -1 || d >= u.length)) {
          var h = u[d];
          a === "startX" && h >= c || a === "endX" && h <= s || this.setState(Ne({}, a, h), function() {
            i.props.onChange(i.getIndex({
              startX: i.state.startX,
              endX: i.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, u = n.height, s = n.fill, c = n.stroke;
      return /* @__PURE__ */ E.createElement("rect", {
        stroke: c,
        fill: s,
        x: a,
        y: i,
        width: o,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, u = n.height, s = n.data, c = n.children, f = n.padding, l = qt.only(c);
      return l ? /* @__PURE__ */ E.cloneElement(l, {
        x: a,
        y: i,
        width: o,
        height: u,
        margin: f,
        compact: !0,
        data: s
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, a) {
      var i, o, u = this, s = this.props, c = s.y, f = s.travellerWidth, l = s.height, d = s.traveller, h = s.ariaLabel, g = s.data, v = s.startIndex, p = s.endIndex, m = Math.max(n, this.props.x), x = Qs(Qs({}, ce(this.props, !1)), {}, {
        x: m,
        y: c,
        width: f,
        height: l
      }), w = h || "Min value: ".concat((i = g[v]) === null || i === void 0 ? void 0 : i.name, ", Max value: ").concat((o = g[p]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ E.createElement(Te, {
        tabIndex: 0,
        role: "slider",
        "aria-label": w,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[a],
        onTouchStart: this.travellerDragStartHandlers[a],
        onKeyDown: function(y) {
          ["ArrowLeft", "ArrowRight"].includes(y.key) && (y.preventDefault(), y.stopPropagation(), u.handleTravellerMoveKeyboard(y.key === "ArrowRight" ? 1 : -1, a));
        },
        onFocus: function() {
          u.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          u.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(d, x));
    }
  }, {
    key: "renderSlide",
    value: function(n, a) {
      var i = this.props, o = i.y, u = i.height, s = i.stroke, c = i.travellerWidth, f = Math.min(n, a) + c, l = Math.max(Math.abs(a - n) - c, 0);
      return /* @__PURE__ */ E.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: s,
        fillOpacity: 0.2,
        x: f,
        y: o,
        width: l,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, a = n.startIndex, i = n.endIndex, o = n.y, u = n.height, s = n.travellerWidth, c = n.stroke, f = this.state, l = f.startX, d = f.endX, h = 5, g = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ E.createElement(Te, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ E.createElement(qc, _a({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(l, d) - h,
        y: o + u / 2
      }, g), this.getTextOfTick(a)), /* @__PURE__ */ E.createElement(qc, _a({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(l, d) + s + h,
        y: o + u / 2
      }, g), this.getTextOfTick(i)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.data, i = n.className, o = n.children, u = n.x, s = n.y, c = n.width, f = n.height, l = n.alwaysShowText, d = this.state, h = d.startX, g = d.endX, v = d.isTextActive, p = d.isSlideMoving, m = d.isTravellerMoving, x = d.isTravellerFocused;
      if (!a || !a.length || !B(u) || !B(s) || !B(c) || !B(f) || c <= 0 || f <= 0)
        return null;
      var w = se("recharts-brush", i), _ = E.Children.count(o) === 1, y = pI("userSelect", "none");
      return /* @__PURE__ */ E.createElement(Te, {
        className: w,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: y
      }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(h, g), this.renderTravellerLayer(h, "startX"), this.renderTravellerLayer(g, "endX"), (v || p || m || x || l) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var a = n.x, i = n.y, o = n.width, u = n.height, s = n.stroke, c = Math.floor(i + u / 2) - 1;
      return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("rect", {
        x: a,
        y: i,
        width: o,
        height: u,
        fill: s,
        stroke: "none"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: a + 1,
        y1: c,
        x2: a + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: a + 1,
        y1: c + 2,
        x2: a + o - 1,
        y2: c + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, a) {
      var i;
      return /* @__PURE__ */ E.isValidElement(n) ? i = /* @__PURE__ */ E.cloneElement(n, a) : J(n) ? i = n(a) : i = t.renderDefaultTraveller(a), i;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var i = n.data, o = n.width, u = n.x, s = n.travellerWidth, c = n.updateId, f = n.startIndex, l = n.endIndex;
      if (i !== a.prevData || c !== a.prevUpdateId)
        return Qs({
          prevData: i,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o
        }, i && i.length ? wI({
          data: i,
          width: o,
          x: u,
          travellerWidth: s,
          startIndex: f,
          endIndex: l
        }) : {
          scale: null,
          scaleValues: null
        });
      if (a.scale && (o !== a.prevWidth || u !== a.prevX || s !== a.prevTravellerWidth)) {
        a.scale.range([u, u + o - s]);
        var d = a.scale.domain().map(function(h) {
          return a.scale(h);
        });
        return {
          prevData: i,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o,
          startX: a.scale(n.startIndex),
          endX: a.scale(n.endIndex),
          scaleValues: d
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, a) {
      for (var i = n.length, o = 0, u = i - 1; u - o > 1; ) {
        var s = Math.floor((o + u) / 2);
        n[s] > a ? u = s : o = s;
      }
      return a >= n[u] ? u : o;
    }
  }]);
})(zt);
Ne(hr, "displayName", "Brush");
Ne(hr, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var ec, xg;
function _I() {
  if (xg) return ec;
  xg = 1;
  var e = Zl();
  function t(r, n) {
    var a;
    return e(r, function(i, o, u) {
      return a = n(i, o, u), !a;
    }), !!a;
  }
  return ec = t, ec;
}
var tc, wg;
function OI() {
  if (wg) return tc;
  wg = 1;
  var e = Wm(), t = At(), r = _I(), n = Re(), a = Xa();
  function i(o, u, s) {
    var c = n(o) ? e : r;
    return s && a(o, u, s) && (u = void 0), c(o, t(u, 3));
  }
  return tc = i, tc;
}
var SI = OI();
const AI = /* @__PURE__ */ ie(SI);
var rt = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, rc, _g;
function PI() {
  if (_g) return rc;
  _g = 1;
  var e = ub();
  function t(r, n, a) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : r[n] = a;
  }
  return rc = t, rc;
}
var nc, Og;
function TI() {
  if (Og) return nc;
  Og = 1;
  var e = PI(), t = ib(), r = At();
  function n(a, i) {
    var o = {};
    return i = r(i, 3), t(a, function(u, s, c) {
      e(o, s, i(u, s, c));
    }), o;
  }
  return nc = n, nc;
}
var EI = TI();
const jI = /* @__PURE__ */ ie(EI);
var ac, Sg;
function MI() {
  if (Sg) return ac;
  Sg = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return ac = e, ac;
}
var ic, Ag;
function CI() {
  if (Ag) return ic;
  Ag = 1;
  var e = Zl();
  function t(r, n) {
    var a = !0;
    return e(r, function(i, o, u) {
      return a = !!n(i, o, u), a;
    }), a;
  }
  return ic = t, ic;
}
var oc, Pg;
function II() {
  if (Pg) return oc;
  Pg = 1;
  var e = MI(), t = CI(), r = At(), n = Re(), a = Xa();
  function i(o, u, s) {
    var c = n(o) ? e : t;
    return s && a(o, u, s) && (u = void 0), c(o, r(u, 3));
  }
  return oc = i, oc;
}
var $I = II();
const D0 = /* @__PURE__ */ ie($I);
var RI = ["x", "y"];
function gn(e) {
  "@babel/helpers - typeof";
  return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gn(e);
}
function pl() {
  return pl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pl.apply(this, arguments);
}
function Tg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tg(Object(r), !0).forEach(function(n) {
      DI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DI(e, t, r) {
  return t = NI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NI(e) {
  var t = qI(e, "string");
  return gn(t) == "symbol" ? t : t + "";
}
function qI(e, t) {
  if (gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kI(e, t) {
  if (e == null) return {};
  var r = LI(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function BI(e, t) {
  var r = e.x, n = e.y, a = kI(e, RI), i = "".concat(r), o = parseInt(i, 10), u = "".concat(n), s = parseInt(u, 10), c = "".concat(t.height || a.height), f = parseInt(c, 10), l = "".concat(t.width || a.width), d = parseInt(l, 10);
  return Rr(Rr(Rr(Rr(Rr({}, t), a), o ? {
    x: o
  } : {}), s ? {
    y: s
  } : {}), {}, {
    height: f,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function Eg(e) {
  return /* @__PURE__ */ E.createElement(JC, pl({
    shapeType: "rectangle",
    propTransformer: BI,
    activeClassName: "recharts-active-bar"
  }, e));
}
var FI = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = B(n) || h1(n);
    return i ? t(n, a) : (i || Wt(), r);
  };
}, UI = ["value", "background"], N0;
function vr(e) {
  "@babel/helpers - typeof";
  return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vr(e);
}
function WI(e, t) {
  if (e == null) return {};
  var r = zI(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Sa() {
  return Sa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sa.apply(this, arguments);
}
function jg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jg(Object(r), !0).forEach(function(n) {
      wt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, k0(n.key), n);
  }
}
function GI(e, t, r) {
  return t && Mg(e.prototype, t), r && Mg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function KI(e, t, r) {
  return t = Aa(t), XI(e, q0() ? Reflect.construct(t, r || [], Aa(e).constructor) : t.apply(e, r));
}
function XI(e, t) {
  if (t && (vr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return VI(e);
}
function VI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function q0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (q0 = function() {
    return !!e;
  })();
}
function Aa(e) {
  return Aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Aa(e);
}
function YI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hl(e, t);
}
function hl(e, t) {
  return hl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, hl(e, t);
}
function wt(e, t, r) {
  return t = k0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k0(e) {
  var t = ZI(e, "string");
  return vr(t) == "symbol" ? t : t + "";
}
function ZI(e, t) {
  if (vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Tn = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    HI(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = KI(this, t, [].concat(a)), wt(r, "state", {
      isAnimationFinished: !1
    }), wt(r, "id", Fa("recharts-bar-")), wt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), wt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return YI(t, e), GI(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, u = i.dataKey, s = i.activeIndex, c = i.activeBar, f = ce(this.props, !1);
      return n && n.map(function(l, d) {
        var h = d === s, g = h ? c : o, v = ve(ve(ve({}, f), l), {}, {
          isActive: h,
          option: g,
          index: d,
          dataKey: u,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ E.createElement(Te, Sa({
          className: "recharts-bar-rectangle"
        }, gc(a.props, l, d), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(l?.x, "-").concat(l?.y, "-").concat(l?.value, "-").concat(d)
        }), /* @__PURE__ */ E.createElement(Eg, v));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, u = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, f = a.animationEasing, l = a.animationId, d = this.state.prevData;
      return /* @__PURE__ */ E.createElement(Ot, {
        begin: s,
        duration: c,
        isActive: u,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var g = h.t, v = i.map(function(p, m) {
          var x = d && d[m];
          if (x) {
            var w = Yt(x.x, p.x), _ = Yt(x.y, p.y), y = Yt(x.width, p.width), b = Yt(x.height, p.height);
            return ve(ve({}, p), {}, {
              x: w(g),
              y: _(g),
              width: y(g),
              height: b(g)
            });
          }
          if (o === "horizontal") {
            var O = Yt(0, p.height), S = O(g);
            return ve(ve({}, p), {}, {
              y: p.y + p.height - S,
              height: S
            });
          }
          var A = Yt(0, p.width), C = A(g);
          return ve(ve({}, p), {}, {
            width: C
          });
        });
        return /* @__PURE__ */ E.createElement(Te, null, n.renderRectanglesStatically(v));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !wf(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, u = a.activeIndex, s = ce(this.props.background, !1);
      return i.map(function(c, f) {
        c.value;
        var l = c.background, d = WI(c, UI);
        if (!l)
          return null;
        var h = ve(ve(ve(ve(ve({}, d), {}, {
          fill: "#eee"
        }, l), s), gc(n.props, c, f)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: f,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ E.createElement(Eg, Sa({
          key: "background-bar-".concat(f),
          option: n.props.background,
          isActive: f === u
        }, h));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.data, u = i.xAxis, s = i.yAxis, c = i.layout, f = i.children, l = Ve(f, oi);
      if (!l)
        return null;
      var d = c === "vertical" ? o[0].height / 2 : o[0].width / 2, h = function(p, m) {
        var x = Array.isArray(p.value) ? p.value[1] : p.value;
        return {
          x: p.x,
          y: p.y,
          value: x,
          errorVal: Ye(p, m)
        };
      }, g = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ E.createElement(Te, g, l.map(function(v) {
        return /* @__PURE__ */ E.cloneElement(v, {
          key: "error-bar-".concat(a, "-").concat(v.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: s,
          layout: c,
          offset: d,
          dataPointFormatter: h
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.data, o = n.className, u = n.xAxis, s = n.yAxis, c = n.left, f = n.top, l = n.width, d = n.height, h = n.isAnimationActive, g = n.background, v = n.id;
      if (a || !i || !i.length)
        return null;
      var p = this.state.isAnimationFinished, m = se("recharts-bar", o), x = u && u.allowDataOverflow, w = s && s.allowDataOverflow, _ = x || w, y = Y(v) ? this.id : v;
      return /* @__PURE__ */ E.createElement(Te, {
        className: m
      }, x || w ? /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
        id: "clipPath-".concat(y)
      }, /* @__PURE__ */ E.createElement("rect", {
        x: x ? c : c - l / 2,
        y: w ? f : f - d / 2,
        width: x ? l : l * 2,
        height: w ? d : d * 2
      }))) : null, /* @__PURE__ */ E.createElement(Te, {
        className: "recharts-bar-rectangles",
        clipPath: _ ? "url(#clipPath-".concat(y, ")") : null
      }, g ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(_, y), (!h || p) && Bt.renderCallByParent(this.props, i));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: a.curData
      } : n.data !== a.curData ? {
        curData: n.data
      } : null;
    }
  }]);
})(zt);
N0 = Tn;
wt(Tn, "displayName", "Bar");
wt(Tn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Va.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
wt(Tn, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, u = e.xAxisTicks, s = e.yAxisTicks, c = e.stackedData, f = e.dataStartIndex, l = e.displayedData, d = e.offset, h = sE(n, r);
  if (!h)
    return null;
  var g = t.layout, v = r.type.defaultProps, p = v !== void 0 ? ve(ve({}, v), r.props) : r.props, m = p.dataKey, x = p.children, w = p.minPointSize, _ = g === "horizontal" ? o : i, y = c ? _.scale.domain() : null, b = vE({
    numericAxis: _
  }), O = Ve(x, hb), S = l.map(function(A, C) {
    var T, P, j, I, M, R;
    c ? T = cE(c[f + C], y) : (T = Ye(A, m), Array.isArray(T) || (T = [b, T]));
    var N = FI(w, N0.defaultProps.minPointSize)(T[1], C);
    if (g === "horizontal") {
      var q, k = [o.scale(T[0]), o.scale(T[1])], W = k[0], G = k[1];
      P = vy({
        axis: i,
        ticks: u,
        bandSize: a,
        offset: h.offset,
        entry: A,
        index: C
      }), j = (q = G ?? W) !== null && q !== void 0 ? q : void 0, I = h.size;
      var F = W - G;
      if (M = Number.isNaN(F) ? 0 : F, R = {
        x: P,
        y: o.y,
        width: I,
        height: o.height
      }, Math.abs(N) > 0 && Math.abs(M) < Math.abs(N)) {
        var K = Qe(M || N) * (Math.abs(N) - Math.abs(M));
        j -= K, M += K;
      }
    } else {
      var oe = [i.scale(T[0]), i.scale(T[1])], he = oe[0], De = oe[1];
      if (P = he, j = vy({
        axis: o,
        ticks: s,
        bandSize: a,
        offset: h.offset,
        entry: A,
        index: C
      }), I = De - he, M = h.size, R = {
        x: i.x,
        y: j,
        width: i.width,
        height: M
      }, Math.abs(N) > 0 && Math.abs(I) < Math.abs(N)) {
        var jt = Qe(I || N) * (Math.abs(N) - Math.abs(I));
        I += jt;
      }
    }
    return ve(ve(ve({}, A), {}, {
      x: P,
      y: j,
      width: I,
      height: M,
      value: c ? T : T[1],
      payload: A,
      background: R
    }, O && O[C] && O[C].props), {}, {
      tooltipPayload: [m0(r, A)],
      tooltipPosition: {
        x: P + I / 2,
        y: j + M / 2
      }
    });
  });
  return ve({
    data: S,
    layout: g
  }, d);
});
function mn(e) {
  "@babel/helpers - typeof";
  return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mn(e);
}
function JI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, L0(n.key), n);
  }
}
function QI(e, t, r) {
  return t && Cg(e.prototype, t), r && Cg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ig(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ig(Object(r), !0).forEach(function(n) {
      ci(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ci(e, t, r) {
  return t = L0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function L0(e) {
  var t = e$(e, "string");
  return mn(t) == "symbol" ? t : t + "";
}
function e$(e, t) {
  if (mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var SD = function(t, r, n, a, i) {
  var o = t.width, u = t.height, s = t.layout, c = t.children, f = Object.keys(r), l = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: u - n.bottom,
    bottomMirror: u - n.bottom
  }, d = !!qe(c, Tn);
  return f.reduce(function(h, g) {
    var v = r[g], p = v.orientation, m = v.domain, x = v.padding, w = x === void 0 ? {} : x, _ = v.mirror, y = v.reversed, b = "".concat(p).concat(_ ? "Mirror" : ""), O, S, A, C, T;
    if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
      var P = m[1] - m[0], j = 1 / 0, I = v.categoricalDomain.sort(g1);
      if (I.forEach(function(oe, he) {
        he > 0 && (j = Math.min((oe || 0) - (I[he - 1] || 0), j));
      }), Number.isFinite(j)) {
        var M = j / P, R = v.layout === "vertical" ? n.height : n.width;
        if (v.padding === "gap" && (O = M * R / 2), v.padding === "no-gap") {
          var N = Ke(t.barCategoryGap, M * R), q = M * R / 2;
          O = q - N - (q - N) / R * N;
        }
      }
    }
    a === "xAxis" ? S = [n.left + (w.left || 0) + (O || 0), n.left + n.width - (w.right || 0) - (O || 0)] : a === "yAxis" ? S = s === "horizontal" ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)] : [n.top + (w.top || 0) + (O || 0), n.top + n.height - (w.bottom || 0) - (O || 0)] : S = v.range, y && (S = [S[1], S[0]]);
    var k = h0(v, i, d), W = k.scale, G = k.realScaleType;
    W.domain(m).range(S), v0(W);
    var F = y0(W, Ge(Ge({}, v), {}, {
      realScaleType: G
    }));
    a === "xAxis" ? (T = p === "top" && !_ || p === "bottom" && _, A = n.left, C = l[b] - T * v.height) : a === "yAxis" && (T = p === "left" && !_ || p === "right" && _, A = l[b] - T * v.width, C = n.top);
    var K = Ge(Ge(Ge({}, v), F), {}, {
      realScaleType: G,
      x: A,
      y: C,
      scale: W,
      width: a === "xAxis" ? n.width : v.width,
      height: a === "yAxis" ? n.height : v.height
    });
    return K.bandSize = fa(K, F), !v.hide && a === "xAxis" ? l[b] += (T ? -1 : 1) * K.height : v.hide || (l[b] += (T ? -1 : 1) * K.width), Ge(Ge({}, h), {}, ci({}, g, K));
  }, {});
}, B0 = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, t$ = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return B0({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, F0 = /* @__PURE__ */ (function() {
  function e(t) {
    JI(this, e), this.scale = t;
  }
  return QI(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.bandAware, i = n.position;
      if (r !== void 0) {
        if (i)
          switch (i) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var u = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + u;
            }
            default:
              return this.scale(r);
          }
        if (a) {
          var s = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + s;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), a = n[0], i = n[n.length - 1];
      return a <= i ? r >= a && r <= i : r >= i && r <= a;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
})();
ci(F0, "EPS", 1e-4);
var Pf = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return Ge(Ge({}, n), {}, ci({}, a, F0.create(t[a])));
  }, {});
  return Ge(Ge({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, u = i.position;
      return jI(a, function(s, c) {
        return r[c].apply(s, {
          bandAware: o,
          position: u
        });
      });
    },
    isInRange: function(a) {
      return D0(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function r$(e) {
  return (e % 180 + 180) % 180;
}
var AD = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = r$(a), o = i * Math.PI / 180, u = Math.atan(n / r), s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, uc, $g;
function n$() {
  if ($g) return uc;
  $g = 1;
  var e = At(), t = On(), r = Ga();
  function n(a) {
    return function(i, o, u) {
      var s = Object(i);
      if (!t(i)) {
        var c = e(o, 3);
        i = r(i), o = function(l) {
          return c(s[l], l, s);
        };
      }
      var f = a(i, o, u);
      return f > -1 ? s[c ? i[f] : f] : void 0;
    };
  }
  return uc = n, uc;
}
var sc, Rg;
function a$() {
  if (Rg) return sc;
  Rg = 1;
  var e = C0();
  function t(r) {
    var n = e(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return sc = t, sc;
}
var cc, Dg;
function i$() {
  if (Dg) return cc;
  Dg = 1;
  var e = eb(), t = At(), r = a$(), n = Math.max;
  function a(i, o, u) {
    var s = i == null ? 0 : i.length;
    if (!s)
      return -1;
    var c = u == null ? 0 : r(u);
    return c < 0 && (c = n(s + c, 0)), e(i, t(o, 3), c);
  }
  return cc = a, cc;
}
var lc, Ng;
function o$() {
  if (Ng) return lc;
  Ng = 1;
  var e = n$(), t = i$(), r = e(t);
  return lc = r, lc;
}
var u$ = o$();
const s$ = /* @__PURE__ */ ie(u$);
var c$ = ym();
const l$ = /* @__PURE__ */ ie(c$);
var f$ = l$(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
}), Tf = /* @__PURE__ */ ht(void 0), Ef = /* @__PURE__ */ ht(void 0), U0 = /* @__PURE__ */ ht(void 0), W0 = /* @__PURE__ */ ht({}), z0 = /* @__PURE__ */ ht(void 0), H0 = /* @__PURE__ */ ht(0), G0 = /* @__PURE__ */ ht(0), qg = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, u = t.children, s = t.width, c = t.height, f = f$(i);
  return /* @__PURE__ */ E.createElement(Tf.Provider, {
    value: n
  }, /* @__PURE__ */ E.createElement(Ef.Provider, {
    value: a
  }, /* @__PURE__ */ E.createElement(W0.Provider, {
    value: i
  }, /* @__PURE__ */ E.createElement(U0.Provider, {
    value: f
  }, /* @__PURE__ */ E.createElement(z0.Provider, {
    value: o
  }, /* @__PURE__ */ E.createElement(H0.Provider, {
    value: c
  }, /* @__PURE__ */ E.createElement(G0.Provider, {
    value: s
  }, u)))))));
}, d$ = function() {
  return $e(z0);
}, p$ = function(t) {
  var r = $e(Tf);
  r == null && Wt();
  var n = r[t];
  return n == null && Wt(), n;
}, PD = function() {
  var t = $e(Tf);
  return xt(t);
}, TD = function() {
  var t = $e(Ef), r = s$(t, function(n) {
    return D0(n.domain, Number.isFinite);
  });
  return r || xt(t);
}, h$ = function(t) {
  var r = $e(Ef);
  r == null && Wt();
  var n = r[t];
  return n == null && Wt(), n;
}, v$ = function() {
  var t = $e(U0);
  return t;
}, ED = function() {
  return $e(W0);
}, jD = function() {
  return $e(G0);
}, MD = function() {
  return $e(H0);
};
function yr(e) {
  "@babel/helpers - typeof";
  return yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yr(e);
}
function y$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function g$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, X0(n.key), n);
  }
}
function m$(e, t, r) {
  return t && g$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function b$(e, t, r) {
  return t = Pa(t), x$(e, K0() ? Reflect.construct(t, r || [], Pa(e).constructor) : t.apply(e, r));
}
function x$(e, t) {
  if (t && (yr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return w$(e);
}
function w$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function K0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (K0 = function() {
    return !!e;
  })();
}
function Pa(e) {
  return Pa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Pa(e);
}
function _$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vl(e, t);
}
function vl(e, t) {
  return vl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, vl(e, t);
}
function kg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kg(Object(r), !0).forEach(function(n) {
      jf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jf(e, t, r) {
  return t = X0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X0(e) {
  var t = O$(e, "string");
  return yr(t) == "symbol" ? t : t + "";
}
function O$(e, t) {
  if (yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function S$(e, t) {
  return E$(e) || T$(e, t) || P$(e, t) || A$();
}
function A$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P$(e, t) {
  if (e) {
    if (typeof e == "string") return Bg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Bg(e, t);
  }
}
function Bg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function T$(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function E$(e) {
  if (Array.isArray(e)) return e;
}
function yl() {
  return yl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yl.apply(this, arguments);
}
var j$ = function(t, r) {
  var n;
  return /* @__PURE__ */ E.isValidElement(t) ? n = /* @__PURE__ */ E.cloneElement(t, r) : J(t) ? n = t(r) : n = /* @__PURE__ */ E.createElement("line", yl({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, M$ = function(t, r, n, a, i, o, u, s, c) {
  var f = i.x, l = i.y, d = i.width, h = i.height;
  if (n) {
    var g = c.y, v = t.y.apply(g, {
      position: o
    });
    if (rt(c, "discard") && !t.y.isInRange(v))
      return null;
    var p = [{
      x: f + d,
      y: v
    }, {
      x: f,
      y: v
    }];
    return s === "left" ? p.reverse() : p;
  }
  if (r) {
    var m = c.x, x = t.x.apply(m, {
      position: o
    });
    if (rt(c, "discard") && !t.x.isInRange(x))
      return null;
    var w = [{
      x,
      y: l + h
    }, {
      x,
      y: l
    }];
    return u === "top" ? w.reverse() : w;
  }
  if (a) {
    var _ = c.segment, y = _.map(function(b) {
      return t.apply(b, {
        position: o
      });
    });
    return rt(c, "discard") && AI(y, function(b) {
      return !t.isInRange(b);
    }) ? null : y;
  }
  return null;
};
function C$(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, u = e.className, s = e.alwaysShow, c = d$(), f = p$(a), l = h$(i), d = v$();
  if (!c || !d)
    return null;
  kt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var h = Pf({
    x: f.scale,
    y: l.scale
  }), g = we(t), v = we(r), p = n && n.length === 2, m = M$(h, g, v, p, d, e.position, f.orientation, l.orientation, e);
  if (!m)
    return null;
  var x = S$(m, 2), w = x[0], _ = w.x, y = w.y, b = x[1], O = b.x, S = b.y, A = rt(e, "hidden") ? "url(#".concat(c, ")") : void 0, C = Lg(Lg({
    clipPath: A
  }, ce(e, !0)), {}, {
    x1: _,
    y1: y,
    x2: O,
    y2: S
  });
  return /* @__PURE__ */ E.createElement(Te, {
    className: se("recharts-reference-line", u)
  }, j$(o, C), Ee.renderCallByParent(e, t$({
    x1: _,
    y1: y,
    x2: O,
    y2: S
  })));
}
var Mf = /* @__PURE__ */ (function(e) {
  function t() {
    return y$(this, t), b$(this, t, arguments);
  }
  return _$(t, e), m$(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ E.createElement(C$, this.props);
    }
  }]);
})(E.Component);
jf(Mf, "displayName", "ReferenceLine");
jf(Mf, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function gl() {
  return gl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gl.apply(this, arguments);
}
function gr(e) {
  "@babel/helpers - typeof";
  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gr(e);
}
function Fg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ug(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fg(Object(r), !0).forEach(function(n) {
      li(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Y0(n.key), n);
  }
}
function R$(e, t, r) {
  return t && $$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function D$(e, t, r) {
  return t = Ta(t), N$(e, V0() ? Reflect.construct(t, r || [], Ta(e).constructor) : t.apply(e, r));
}
function N$(e, t) {
  if (t && (gr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return q$(e);
}
function q$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function V0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (V0 = function() {
    return !!e;
  })();
}
function Ta(e) {
  return Ta = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ta(e);
}
function k$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ml(e, t);
}
function ml(e, t) {
  return ml = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ml(e, t);
}
function li(e, t, r) {
  return t = Y0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y0(e) {
  var t = L$(e, "string");
  return gr(t) == "symbol" ? t : t + "";
}
function L$(e, t) {
  if (gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var B$ = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Pf({
    x: a.scale,
    y: i.scale
  }), u = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return rt(t, "discard") && !o.isInRange(u) ? null : u;
}, fi = /* @__PURE__ */ (function(e) {
  function t() {
    return I$(this, t), D$(this, t, arguments);
  }
  return k$(t, e), R$(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, u = n.alwaysShow, s = n.clipPathId, c = we(a), f = we(i);
      if (kt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !f)
        return null;
      var l = B$(this.props);
      if (!l)
        return null;
      var d = l.x, h = l.y, g = this.props, v = g.shape, p = g.className, m = rt(this.props, "hidden") ? "url(#".concat(s, ")") : void 0, x = Ug(Ug({
        clipPath: m
      }, ce(this.props, !0)), {}, {
        cx: d,
        cy: h
      });
      return /* @__PURE__ */ E.createElement(Te, {
        className: se("recharts-reference-dot", p)
      }, t.renderDot(v, x), Ee.renderCallByParent(this.props, {
        x: d - o,
        y: h - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
})(E.Component);
li(fi, "displayName", "ReferenceDot");
li(fi, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
li(fi, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ E.isValidElement(e) ? r = /* @__PURE__ */ E.cloneElement(e, t) : J(e) ? r = e(t) : r = /* @__PURE__ */ E.createElement(M0, gl({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function bl() {
  return bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bl.apply(this, arguments);
}
function mr(e) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mr(e);
}
function Wg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wg(Object(r), !0).forEach(function(n) {
      di(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, J0(n.key), n);
  }
}
function W$(e, t, r) {
  return t && U$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function z$(e, t, r) {
  return t = Ea(t), H$(e, Z0() ? Reflect.construct(t, r || [], Ea(e).constructor) : t.apply(e, r));
}
function H$(e, t) {
  if (t && (mr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return G$(e);
}
function G$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Z0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Z0 = function() {
    return !!e;
  })();
}
function Ea(e) {
  return Ea = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ea(e);
}
function K$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xl(e, t);
}
function xl(e, t) {
  return xl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, xl(e, t);
}
function di(e, t, r) {
  return t = J0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J0(e) {
  var t = X$(e, "string");
  return mr(t) == "symbol" ? t : t + "";
}
function X$(e, t) {
  if (mr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var V$ = function(t, r, n, a, i) {
  var o = i.x1, u = i.x2, s = i.y1, c = i.y2, f = i.xAxis, l = i.yAxis;
  if (!f || !l) return null;
  var d = Pf({
    x: f.scale,
    y: l.scale
  }), h = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(s, {
      position: "start"
    }) : d.y.rangeMin
  }, g = {
    x: r ? d.x.apply(u, {
      position: "end"
    }) : d.x.rangeMax,
    y: a ? d.y.apply(c, {
      position: "end"
    }) : d.y.rangeMax
  };
  return rt(i, "discard") && (!d.isInRange(h) || !d.isInRange(g)) ? null : B0(h, g);
}, pi = /* @__PURE__ */ (function(e) {
  function t() {
    return F$(this, t), z$(this, t, arguments);
  }
  return K$(t, e), W$(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, u = n.y2, s = n.className, c = n.alwaysShow, f = n.clipPathId;
      kt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var l = we(a), d = we(i), h = we(o), g = we(u), v = this.props.shape;
      if (!l && !d && !h && !g && !v)
        return null;
      var p = V$(l, d, h, g, this.props);
      if (!p && !v)
        return null;
      var m = rt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
      return /* @__PURE__ */ E.createElement(Te, {
        className: se("recharts-reference-area", s)
      }, t.renderRect(v, zg(zg({
        clipPath: m
      }, ce(this.props, !0)), p)), Ee.renderCallByParent(this.props, p));
    }
  }]);
})(E.Component);
di(pi, "displayName", "ReferenceArea");
di(pi, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
di(pi, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ E.isValidElement(e) ? r = /* @__PURE__ */ E.cloneElement(e, t) : J(e) ? r = e(t) : r = /* @__PURE__ */ E.createElement(Af, bl({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function Hg(e) {
  return Q$(e) || J$(e) || Z$(e) || Y$();
}
function Y$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z$(e, t) {
  if (e) {
    if (typeof e == "string") return wl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wl(e, t);
  }
}
function J$(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Q$(e) {
  if (Array.isArray(e)) return wl(e);
}
function wl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var _l = function(t, r, n, a, i) {
  var o = Ve(t, Mf), u = Ve(t, fi), s = [].concat(Hg(o), Hg(u)), c = Ve(t, pi), f = "".concat(a, "Id"), l = a[0], d = r;
  if (s.length && (d = s.reduce(function(v, p) {
    if (p.props[f] === n && rt(p.props, "extendDomain") && B(p.props[l])) {
      var m = p.props[l];
      return [Math.min(v[0], m), Math.max(v[1], m)];
    }
    return v;
  }, d)), c.length) {
    var h = "".concat(l, "1"), g = "".concat(l, "2");
    d = c.reduce(function(v, p) {
      if (p.props[f] === n && rt(p.props, "extendDomain") && B(p.props[h]) && B(p.props[g])) {
        var m = p.props[h], x = p.props[g];
        return [Math.min(v[0], m, x), Math.max(v[1], m, x)];
      }
      return v;
    }, d);
  }
  return i && i.length && (d = i.reduce(function(v, p) {
    return B(p) ? [Math.min(v[0], p), Math.max(v[1], p)] : v;
  }, d)), d;
}, fc = { exports: {} }, Gg;
function eR() {
  return Gg || (Gg = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function a(s, c, f) {
      this.fn = s, this.context = c, this.once = f || !1;
    }
    function i(s, c, f, l, d) {
      if (typeof f != "function")
        throw new TypeError("The listener must be a function");
      var h = new a(f, l || s, d), g = r ? r + c : c;
      return s._events[g] ? s._events[g].fn ? s._events[g] = [s._events[g], h] : s._events[g].push(h) : (s._events[g] = h, s._eventsCount++), s;
    }
    function o(s, c) {
      --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var c = [], f, l;
      if (this._eventsCount === 0) return c;
      for (l in f = this._events)
        t.call(f, l) && c.push(r ? l.slice(1) : l);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
    }, u.prototype.listeners = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      if (!l) return [];
      if (l.fn) return [l.fn];
      for (var d = 0, h = l.length, g = new Array(h); d < h; d++)
        g[d] = l[d].fn;
      return g;
    }, u.prototype.listenerCount = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      return l ? l.fn ? 1 : l.length : 0;
    }, u.prototype.emit = function(c, f, l, d, h, g) {
      var v = r ? r + c : c;
      if (!this._events[v]) return !1;
      var p = this._events[v], m = arguments.length, x, w;
      if (p.fn) {
        switch (p.once && this.removeListener(c, p.fn, void 0, !0), m) {
          case 1:
            return p.fn.call(p.context), !0;
          case 2:
            return p.fn.call(p.context, f), !0;
          case 3:
            return p.fn.call(p.context, f, l), !0;
          case 4:
            return p.fn.call(p.context, f, l, d), !0;
          case 5:
            return p.fn.call(p.context, f, l, d, h), !0;
          case 6:
            return p.fn.call(p.context, f, l, d, h, g), !0;
        }
        for (w = 1, x = new Array(m - 1); w < m; w++)
          x[w - 1] = arguments[w];
        p.fn.apply(p.context, x);
      } else {
        var _ = p.length, y;
        for (w = 0; w < _; w++)
          switch (p[w].once && this.removeListener(c, p[w].fn, void 0, !0), m) {
            case 1:
              p[w].fn.call(p[w].context);
              break;
            case 2:
              p[w].fn.call(p[w].context, f);
              break;
            case 3:
              p[w].fn.call(p[w].context, f, l);
              break;
            case 4:
              p[w].fn.call(p[w].context, f, l, d);
              break;
            default:
              if (!x) for (y = 1, x = new Array(m - 1); y < m; y++)
                x[y - 1] = arguments[y];
              p[w].fn.apply(p[w].context, x);
          }
      }
      return !0;
    }, u.prototype.on = function(c, f, l) {
      return i(this, c, f, l, !1);
    }, u.prototype.once = function(c, f, l) {
      return i(this, c, f, l, !0);
    }, u.prototype.removeListener = function(c, f, l, d) {
      var h = r ? r + c : c;
      if (!this._events[h]) return this;
      if (!f)
        return o(this, h), this;
      var g = this._events[h];
      if (g.fn)
        g.fn === f && (!d || g.once) && (!l || g.context === l) && o(this, h);
      else {
        for (var v = 0, p = [], m = g.length; v < m; v++)
          (g[v].fn !== f || d && !g[v].once || l && g[v].context !== l) && p.push(g[v]);
        p.length ? this._events[h] = p.length === 1 ? p[0] : p : o(this, h);
      }
      return this;
    }, u.prototype.removeAllListeners = function(c) {
      var f;
      return c ? (f = r ? r + c : c, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
  })(fc)), fc.exports;
}
var tR = eR();
const rR = /* @__PURE__ */ ie(tR);
var dc = new rR(), pc = "recharts.syncMouseEvents";
function bn(e) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bn(e);
}
function nR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Q0(n.key), n);
  }
}
function iR(e, t, r) {
  return t && aR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function hc(e, t, r) {
  return t = Q0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q0(e) {
  var t = oR(e, "string");
  return bn(t) == "symbol" ? t : t + "";
}
function oR(e, t) {
  if (bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var uR = /* @__PURE__ */ (function() {
  function e() {
    nR(this, e), hc(this, "activeIndex", 0), hc(this, "coordinateList", []), hc(this, "layout", "horizontal");
  }
  return iR(e, [{
    key: "setDetails",
    value: function(r) {
      var n, a = r.coordinateList, i = a === void 0 ? null : a, o = r.container, u = o === void 0 ? null : o, s = r.layout, c = s === void 0 ? null : s, f = r.offset, l = f === void 0 ? null : f, d = r.mouseHandlerCallback, h = d === void 0 ? null : d;
      this.coordinateList = (n = i ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = c ?? this.layout, this.offset = l ?? this.offset, this.mouseHandlerCallback = h ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var a = this.container.getBoundingClientRect(), i = a.x, o = a.y, u = a.height, s = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, l = i + s + c, d = o + this.offset.top + u / 2 + f;
        this.mouseHandlerCallback({
          pageX: l,
          pageY: d
        });
      }
    }
  }]);
})();
function sR(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], a = e?.[1];
    if (n && a && B(n) && B(a))
      return !0;
  }
  return !1;
}
function cR(e, t, r, n) {
  var a = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - a : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - a,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function ex(e) {
  var t = e.cx, r = e.cy, n = e.radius, a = e.startAngle, i = e.endAngle, o = Pe(t, r, n, a), u = Pe(t, r, n, i);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: a,
    endAngle: i
  };
}
function lR(e, t, r) {
  var n, a, i, o;
  if (e === "horizontal")
    n = t.x, i = n, a = r.top, o = r.top + r.height;
  else if (e === "vertical")
    a = t.y, o = a, n = r.left, i = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx, s = t.cy, c = t.innerRadius, f = t.outerRadius, l = t.angle, d = Pe(u, s, c, l), h = Pe(u, s, f, l);
      n = d.x, a = d.y, i = h.x, o = h.y;
    } else
      return ex(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e);
}
function Kg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kg(Object(r), !0).forEach(function(n) {
      fR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fR(e, t, r) {
  return t = dR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dR(e) {
  var t = pR(e, "string");
  return xn(t) == "symbol" ? t : t + "";
}
function pR(e, t) {
  if (xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hR(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, u = e.activePayload, s = e.offset, c = e.activeTooltipIndex, f = e.tooltipAxisBandSize, l = e.layout, d = e.chartName, h = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !h || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var g, v = Iy;
  if (d === "ScatterChart")
    g = o, v = AC;
  else if (d === "BarChart")
    g = cR(l, o, s, f), v = Af;
  else if (l === "radial") {
    var p = ex(o), m = p.cx, x = p.cy, w = p.radius, _ = p.startAngle, y = p.endAngle;
    g = {
      cx: m,
      cy: x,
      startAngle: _,
      endAngle: y,
      innerRadius: w,
      outerRadius: w
    }, v = _0;
  } else
    g = {
      points: lR(l, o, s)
    }, v = Iy;
  var b = Bn(Bn(Bn(Bn({
    stroke: "#ccc",
    pointerEvents: "none"
  }, s), g), ce(h, !1)), {}, {
    payload: u,
    payloadIndex: c,
    className: se("recharts-tooltip-cursor", h.className)
  });
  return /* @__PURE__ */ Xe(h) ? /* @__PURE__ */ xe(h, b) : /* @__PURE__ */ $a(v, b);
}
var vR = ["item"], yR = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function br(e) {
  "@babel/helpers - typeof";
  return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, br(e);
}
function er() {
  return er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, er.apply(this, arguments);
}
function Xg(e, t) {
  return bR(e) || mR(e, t) || rx(e, t) || gR();
}
function gR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function bR(e) {
  if (Array.isArray(e)) return e;
}
function Vg(e, t) {
  if (e == null) return {};
  var r = xR(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function wR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _R(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nx(n.key), n);
  }
}
function OR(e, t, r) {
  return t && _R(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function SR(e, t, r) {
  return t = ja(t), AR(e, tx() ? Reflect.construct(t, r || [], ja(e).constructor) : t.apply(e, r));
}
function AR(e, t) {
  if (t && (br(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return PR(e);
}
function PR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tx = function() {
    return !!e;
  })();
}
function ja(e) {
  return ja = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ja(e);
}
function TR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ol(e, t);
}
function Ol(e, t) {
  return Ol = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ol(e, t);
}
function xr(e) {
  return MR(e) || jR(e) || rx(e) || ER();
}
function ER() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rx(e, t) {
  if (e) {
    if (typeof e == "string") return Sl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sl(e, t);
  }
}
function jR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function MR(e) {
  if (Array.isArray(e)) return Sl(e);
}
function Sl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Yg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yg(Object(r), !0).forEach(function(n) {
      H(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function H(e, t, r) {
  return t = nx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nx(e) {
  var t = CR(e, "string");
  return br(t) == "symbol" ? t : t + "";
}
function CR(e, t) {
  if (br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var IR = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, $R = {
  width: "100%",
  height: "100%"
}, ax = {
  x: 0,
  y: 0
};
function Fn(e) {
  return e;
}
var RR = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, DR = function(t, r, n, a) {
  var i = r.find(function(f) {
    return f && f.index === n;
  });
  if (i) {
    if (t === "horizontal")
      return {
        x: i.coordinate,
        y: a.y
      };
    if (t === "vertical")
      return {
        x: a.x,
        y: i.coordinate
      };
    if (t === "centric") {
      var o = i.coordinate, u = a.radius;
      return $($($({}, a), Pe(a.cx, a.cy, u, o)), {}, {
        angle: o,
        radius: u
      });
    }
    var s = i.coordinate, c = a.angle;
    return $($($({}, a), Pe(a.cx, a.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return ax;
}, hi = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(u, s) {
    var c = s.props.data;
    return c && c.length ? [].concat(xr(u), xr(c)) : u;
  }, []);
  return o.length > 0 ? o : t && t.length && B(a) && B(i) ? t.slice(a, i + 1) : [];
};
function ix(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Al = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, u = hi(r, t);
  return n < 0 || !i || !i.length || n >= u.length ? null : i.reduce(function(s, c) {
    var f, l = (f = c.props.data) !== null && f !== void 0 ? f : r;
    l && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var h = l === void 0 ? u : l;
      d = Un(h, o.dataKey, a);
    } else
      d = l && l[n] || u[n];
    return d ? [].concat(xr(s), [m0(c, d)]) : s;
  }, []);
}, Zg = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = RR(i, n), u = t.orderedTooltipTicks, s = t.tooltipAxis, c = t.tooltipTicks, f = rE(o, u, c, s);
  if (f >= 0 && c) {
    var l = c[f] && c[f].value, d = Al(t, r, f, l), h = DR(n, u, f, i);
    return {
      activeTooltipIndex: f,
      activeLabel: l,
      activePayload: d,
      activeCoordinate: h
    };
  }
  return null;
}, NR = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, d = t.stackOffset, h = p0(f, i);
  return n.reduce(function(g, v) {
    var p, m = v.type.defaultProps !== void 0 ? $($({}, v.type.defaultProps), v.props) : v.props, x = m.type, w = m.dataKey, _ = m.allowDataOverflow, y = m.allowDuplicatedCategory, b = m.scale, O = m.ticks, S = m.includeHidden, A = m[o];
    if (g[A])
      return g;
    var C = hi(t.data, {
      graphicalItems: a.filter(function(F) {
        var K, oe = o in F.props ? F.props[o] : (K = F.type.defaultProps) === null || K === void 0 ? void 0 : K[o];
        return oe === A;
      }),
      dataStartIndex: s,
      dataEndIndex: c
    }), T = C.length, P, j, I;
    sR(m.domain, _, x) && (P = Yc(m.domain, null, _), h && (x === "number" || b !== "auto") && (I = Br(C, w, "category")));
    var M = ix(x);
    if (!P || P.length === 0) {
      var R, N = (R = m.domain) !== null && R !== void 0 ? R : M;
      if (w) {
        if (P = Br(C, w, x), x === "category" && h) {
          var q = y1(P);
          y && q ? (j = P, P = wa(0, T)) : y || (P = my(N, P, v).reduce(function(F, K) {
            return F.indexOf(K) >= 0 ? F : [].concat(xr(F), [K]);
          }, []));
        } else if (x === "category")
          y ? P = P.filter(function(F) {
            return F !== "" && !Y(F);
          }) : P = my(N, P, v).reduce(function(F, K) {
            return F.indexOf(K) >= 0 || K === "" || Y(K) ? F : [].concat(xr(F), [K]);
          }, []);
        else if (x === "number") {
          var k = uE(C, a.filter(function(F) {
            var K, oe, he = o in F.props ? F.props[o] : (K = F.type.defaultProps) === null || K === void 0 ? void 0 : K[o], De = "hide" in F.props ? F.props.hide : (oe = F.type.defaultProps) === null || oe === void 0 ? void 0 : oe.hide;
            return he === A && (S || !De);
          }), w, i, f);
          k && (P = k);
        }
        h && (x === "number" || b !== "auto") && (I = Br(C, w, "category"));
      } else h ? P = wa(0, T) : u && u[A] && u[A].hasStack && x === "number" ? P = d === "expand" ? [0, 1] : g0(u[A].stackGroups, s, c) : P = d0(C, a.filter(function(F) {
        var K = o in F.props ? F.props[o] : F.type.defaultProps[o], oe = "hide" in F.props ? F.props.hide : F.type.defaultProps.hide;
        return K === A && (S || !oe);
      }), x, f, !0);
      if (x === "number")
        P = _l(l, P, A, i, O), N && (P = Yc(N, P, _));
      else if (x === "category" && N) {
        var W = N, G = P.every(function(F) {
          return W.indexOf(F) >= 0;
        });
        G && (P = W);
      }
    }
    return $($({}, g), {}, H({}, A, $($({}, m), {}, {
      axisType: i,
      domain: P,
      categoricalDomain: I,
      duplicateDomain: j,
      originalDomain: (p = m.domain) !== null && p !== void 0 ? p : M,
      isCategorical: h,
      layout: f
    })));
  }, {});
}, qR = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, d = hi(t.data, {
    graphicalItems: n,
    dataStartIndex: s,
    dataEndIndex: c
  }), h = d.length, g = p0(f, i), v = -1;
  return n.reduce(function(p, m) {
    var x = m.type.defaultProps !== void 0 ? $($({}, m.type.defaultProps), m.props) : m.props, w = x[o], _ = ix("number");
    if (!p[w]) {
      v++;
      var y;
      return g ? y = wa(0, h) : u && u[w] && u[w].hasStack ? (y = g0(u[w].stackGroups, s, c), y = _l(l, y, w, i)) : (y = Yc(_, d0(d, n.filter(function(b) {
        var O, S, A = o in b.props ? b.props[o] : (O = b.type.defaultProps) === null || O === void 0 ? void 0 : O[o], C = "hide" in b.props ? b.props.hide : (S = b.type.defaultProps) === null || S === void 0 ? void 0 : S.hide;
        return A === w && !C;
      }), "number", f), a.defaultProps.allowDataOverflow), y = _l(l, y, w, i)), $($({}, p), {}, H({}, w, $($({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: tt(IR, "".concat(i, ".").concat(v % 2), null),
        domain: y,
        originalDomain: _,
        isCategorical: g,
        layout: f
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return p;
  }, {});
}, kR = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.children, l = "".concat(a, "Id"), d = Ve(f, i), h = {};
  return d && d.length ? h = NR(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  }) : o && o.length && (h = qR(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  })), h;
}, LR = function(t) {
  var r = xt(t), n = qr(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Jl(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: fa(r, n)
  };
}, Jg = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = qe(r, hr), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, BR = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = ct(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Qg = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, FR = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, u = t.yAxisMap, s = u === void 0 ? {} : u, c = n.width, f = n.height, l = n.children, d = n.margin || {}, h = qe(l, hr), g = qe(l, tr), v = Object.keys(s).reduce(function(y, b) {
    var O = s[b], S = O.orientation;
    return !O.mirror && !O.hide ? $($({}, y), {}, H({}, S, y[S] + O.width)) : y;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), p = Object.keys(o).reduce(function(y, b) {
    var O = o[b], S = O.orientation;
    return !O.mirror && !O.hide ? $($({}, y), {}, H({}, S, tt(y, "".concat(S)) + O.height)) : y;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), m = $($({}, p), v), x = m.bottom;
  h && (m.bottom += h.props.height || hr.defaultProps.height), g && r && (m = iE(m, a, n, r));
  var w = c - m.left - m.right, _ = f - m.top - m.bottom;
  return $($({
    brushBottom: x
  }, m), {}, {
    // never return negative values for height and width
    width: Math.max(w, 0),
    height: Math.max(_, 0)
  });
}, UR = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, CD = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, u = o === void 0 ? ["axis"] : o, s = t.axisComponents, c = t.legendContent, f = t.formatAxisMap, l = t.defaultProps, d = function(m, x) {
    var w = x.graphicalItems, _ = x.stackGroups, y = x.offset, b = x.updateId, O = x.dataStartIndex, S = x.dataEndIndex, A = m.barSize, C = m.layout, T = m.barGap, P = m.barCategoryGap, j = m.maxBarSize, I = Qg(C), M = I.numericAxisName, R = I.cateAxisName, N = BR(w), q = [];
    return w.forEach(function(k, W) {
      var G = hi(m.data, {
        graphicalItems: [k],
        dataStartIndex: O,
        dataEndIndex: S
      }), F = k.type.defaultProps !== void 0 ? $($({}, k.type.defaultProps), k.props) : k.props, K = F.dataKey, oe = F.maxBarSize, he = F["".concat(M, "Id")], De = F["".concat(R, "Id")], jt = {}, Me = s.reduce(function(Mt, Ct) {
        var vi = x["".concat(Ct.axisType, "Map")], Cf = F["".concat(Ct.axisType, "Id")];
        vi && vi[Cf] || Ct.axisType === "zAxis" || Wt();
        var If = vi[Cf];
        return $($({}, Mt), {}, H(H({}, Ct.axisType, If), "".concat(Ct.axisType, "Ticks"), qr(If)));
      }, jt), L = Me[R], X = Me["".concat(R, "Ticks")], V = _ && _[he] && _[he].hasStack && yE(k, _[he].stackGroups), D = ct(k.type).indexOf("Bar") >= 0, de = fa(L, X), Z = [], ge = N && nE({
        barSize: A,
        stackGroups: _,
        totalSize: UR(Me, R)
      });
      if (D) {
        var me, Ce, mt = Y(oe) ? j : oe, Vt = (me = (Ce = fa(L, X, !0)) !== null && Ce !== void 0 ? Ce : mt) !== null && me !== void 0 ? me : 0;
        Z = aE({
          barGap: T,
          barCategoryGap: P,
          bandSize: Vt !== de ? Vt : de,
          sizeList: ge[De],
          maxBarSize: mt
        }), Vt !== de && (Z = Z.map(function(Mt) {
          return $($({}, Mt), {}, {
            position: $($({}, Mt.position), {}, {
              offset: Mt.position.offset - Vt / 2
            })
          });
        }));
      }
      var jn = k && k.type && k.type.getComposedData;
      jn && q.push({
        props: $($({}, jn($($({}, Me), {}, {
          displayedData: G,
          props: m,
          dataKey: K,
          item: k,
          bandSize: de,
          barPosition: Z,
          offset: y,
          stackedData: V,
          layout: C,
          dataStartIndex: O,
          dataEndIndex: S
        }))), {}, H(H(H({
          key: k.key || "item-".concat(W)
        }, M, Me[M]), R, Me[R]), "animationId", b)),
        childIndex: E1(k, m.children),
        item: k
      });
    }), q;
  }, h = function(m, x) {
    var w = m.props, _ = m.dataStartIndex, y = m.dataEndIndex, b = m.updateId;
    if (!Fd({
      props: w
    }))
      return null;
    var O = w.children, S = w.layout, A = w.stackOffset, C = w.data, T = w.reverseStackOrder, P = Qg(S), j = P.numericAxisName, I = P.cateAxisName, M = Ve(O, n), R = hE(C, M, "".concat(j, "Id"), "".concat(I, "Id"), A, T), N = s.reduce(function(F, K) {
      var oe = "".concat(K.axisType, "Map");
      return $($({}, F), {}, H({}, oe, kR(w, $($({}, K), {}, {
        graphicalItems: M,
        stackGroups: K.axisType === j && R,
        dataStartIndex: _,
        dataEndIndex: y
      }))));
    }, {}), q = FR($($({}, N), {}, {
      props: w,
      graphicalItems: M
    }), x?.legendBBox);
    Object.keys(N).forEach(function(F) {
      N[F] = f(w, N[F], q, F.replace("Map", ""), r);
    });
    var k = N["".concat(I, "Map")], W = LR(k), G = d(w, $($({}, N), {}, {
      dataStartIndex: _,
      dataEndIndex: y,
      updateId: b,
      graphicalItems: M,
      stackGroups: R,
      offset: q
    }));
    return $($({
      formattedGraphicalItems: G,
      graphicalItems: M,
      offset: q,
      stackGroups: R
    }, W), N);
  }, g = /* @__PURE__ */ (function(p) {
    function m(x) {
      var w, _, y;
      return wR(this, m), y = SR(this, m, [x]), H(y, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), H(y, "accessibilityManager", new uR()), H(y, "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var O = y.state, S = O.dataStartIndex, A = O.dataEndIndex, C = O.updateId;
          y.setState($({
            legendBBox: b
          }, h({
            props: y.props,
            dataStartIndex: S,
            dataEndIndex: A,
            updateId: C
          }, $($({}, y.state), {}, {
            legendBBox: b
          }))));
        }
      }), H(y, "handleReceiveSyncEvent", function(b, O, S) {
        if (y.props.syncId === b) {
          if (S === y.eventEmitterSymbol && typeof y.props.syncMethod != "function")
            return;
          y.applySyncEvent(O);
        }
      }), H(y, "handleBrushChange", function(b) {
        var O = b.startIndex, S = b.endIndex;
        if (O !== y.state.dataStartIndex || S !== y.state.dataEndIndex) {
          var A = y.state.updateId;
          y.setState(function() {
            return $({
              dataStartIndex: O,
              dataEndIndex: S
            }, h({
              props: y.props,
              dataStartIndex: O,
              dataEndIndex: S,
              updateId: A
            }, y.state));
          }), y.triggerSyncEvent({
            dataStartIndex: O,
            dataEndIndex: S
          });
        }
      }), H(y, "handleMouseEnter", function(b) {
        var O = y.getMouseInfo(b);
        if (O) {
          var S = $($({}, O), {}, {
            isTooltipActive: !0
          });
          y.setState(S), y.triggerSyncEvent(S);
          var A = y.props.onMouseEnter;
          J(A) && A(S, b);
        }
      }), H(y, "triggeredAfterMouseMove", function(b) {
        var O = y.getMouseInfo(b), S = O ? $($({}, O), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        y.setState(S), y.triggerSyncEvent(S);
        var A = y.props.onMouseMove;
        J(A) && A(S, b);
      }), H(y, "handleItemMouseEnter", function(b) {
        y.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: b,
            activePayload: b.tooltipPayload,
            activeCoordinate: b.tooltipPosition || {
              x: b.cx,
              y: b.cy
            }
          };
        });
      }), H(y, "handleItemMouseLeave", function() {
        y.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), H(y, "handleMouseMove", function(b) {
        b.persist(), y.throttleTriggeredAfterMouseMove(b);
      }), H(y, "handleMouseLeave", function(b) {
        y.throttleTriggeredAfterMouseMove.cancel();
        var O = {
          isTooltipActive: !1
        };
        y.setState(O), y.triggerSyncEvent(O);
        var S = y.props.onMouseLeave;
        J(S) && S(O, b);
      }), H(y, "handleOuterEvent", function(b) {
        var O = T1(b), S = tt(y.props, "".concat(O));
        if (O && J(S)) {
          var A, C;
          /.*touch.*/i.test(O) ? C = y.getMouseInfo(b.changedTouches[0]) : C = y.getMouseInfo(b), S((A = C) !== null && A !== void 0 ? A : {}, b);
        }
      }), H(y, "handleClick", function(b) {
        var O = y.getMouseInfo(b);
        if (O) {
          var S = $($({}, O), {}, {
            isTooltipActive: !0
          });
          y.setState(S), y.triggerSyncEvent(S);
          var A = y.props.onClick;
          J(A) && A(S, b);
        }
      }), H(y, "handleMouseDown", function(b) {
        var O = y.props.onMouseDown;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), H(y, "handleMouseUp", function(b) {
        var O = y.props.onMouseUp;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), H(y, "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), H(y, "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.handleMouseDown(b.changedTouches[0]);
      }), H(y, "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.handleMouseUp(b.changedTouches[0]);
      }), H(y, "handleDoubleClick", function(b) {
        var O = y.props.onDoubleClick;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), H(y, "handleContextMenu", function(b) {
        var O = y.props.onContextMenu;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), H(y, "triggerSyncEvent", function(b) {
        y.props.syncId !== void 0 && dc.emit(pc, y.props.syncId, b, y.eventEmitterSymbol);
      }), H(y, "applySyncEvent", function(b) {
        var O = y.props, S = O.layout, A = O.syncMethod, C = y.state.updateId, T = b.dataStartIndex, P = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0)
          y.setState($({
            dataStartIndex: T,
            dataEndIndex: P
          }, h({
            props: y.props,
            dataStartIndex: T,
            dataEndIndex: P,
            updateId: C
          }, y.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var j = b.chartX, I = b.chartY, M = b.activeTooltipIndex, R = y.state, N = R.offset, q = R.tooltipTicks;
          if (!N)
            return;
          if (typeof A == "function")
            M = A(q, b);
          else if (A === "value") {
            M = -1;
            for (var k = 0; k < q.length; k++)
              if (q[k].value === b.activeLabel) {
                M = k;
                break;
              }
          }
          var W = $($({}, N), {}, {
            x: N.left,
            y: N.top
          }), G = Math.min(j, W.x + W.width), F = Math.min(I, W.y + W.height), K = q[M] && q[M].value, oe = Al(y.state, y.props.data, M), he = q[M] ? {
            x: S === "horizontal" ? q[M].coordinate : G,
            y: S === "horizontal" ? F : q[M].coordinate
          } : ax;
          y.setState($($({}, b), {}, {
            activeLabel: K,
            activeCoordinate: he,
            activePayload: oe,
            activeTooltipIndex: M
          }));
        } else
          y.setState(b);
      }), H(y, "renderCursor", function(b) {
        var O, S = y.state, A = S.isTooltipActive, C = S.activeCoordinate, T = S.activePayload, P = S.offset, j = S.activeTooltipIndex, I = S.tooltipAxisBandSize, M = y.getTooltipEventType(), R = (O = b.props.active) !== null && O !== void 0 ? O : A, N = y.props.layout, q = b.key || "_recharts-cursor";
        return /* @__PURE__ */ E.createElement(hR, {
          key: q,
          activeCoordinate: C,
          activePayload: T,
          activeTooltipIndex: j,
          chartName: r,
          element: b,
          isActive: R,
          layout: N,
          offset: P,
          tooltipAxisBandSize: I,
          tooltipEventType: M
        });
      }), H(y, "renderPolarAxis", function(b, O, S) {
        var A = tt(b, "type.axisType"), C = tt(y.state, "".concat(A, "Map")), T = b.type.defaultProps, P = T !== void 0 ? $($({}, T), b.props) : b.props, j = C && C[P["".concat(A, "Id")]];
        return /* @__PURE__ */ xe(b, $($({}, j), {}, {
          className: se(A, j.className),
          key: b.key || "".concat(O, "-").concat(S),
          ticks: qr(j, !0)
        }));
      }), H(y, "renderPolarGrid", function(b) {
        var O = b.props, S = O.radialLines, A = O.polarAngles, C = O.polarRadius, T = y.state, P = T.radiusAxisMap, j = T.angleAxisMap, I = xt(P), M = xt(j), R = M.cx, N = M.cy, q = M.innerRadius, k = M.outerRadius;
        return /* @__PURE__ */ xe(b, {
          polarAngles: Array.isArray(A) ? A : qr(M, !0).map(function(W) {
            return W.coordinate;
          }),
          polarRadius: Array.isArray(C) ? C : qr(I, !0).map(function(W) {
            return W.coordinate;
          }),
          cx: R,
          cy: N,
          innerRadius: q,
          outerRadius: k,
          key: b.key || "polar-grid",
          radialLines: S
        });
      }), H(y, "renderLegend", function() {
        var b = y.state.formattedGraphicalItems, O = y.props, S = O.children, A = O.width, C = O.height, T = y.props.margin || {}, P = A - (T.left || 0) - (T.right || 0), j = l0({
          children: S,
          formattedGraphicalItems: b,
          legendWidth: P,
          legendContent: c
        });
        if (!j)
          return null;
        var I = j.item, M = Vg(j, vR);
        return /* @__PURE__ */ xe(I, $($({}, M), {}, {
          chartWidth: A,
          chartHeight: C,
          margin: T,
          onBBoxUpdate: y.handleLegendBBoxUpdate
        }));
      }), H(y, "renderTooltip", function() {
        var b, O = y.props, S = O.children, A = O.accessibilityLayer, C = qe(S, Je);
        if (!C)
          return null;
        var T = y.state, P = T.isTooltipActive, j = T.activeCoordinate, I = T.activePayload, M = T.activeLabel, R = T.offset, N = (b = C.props.active) !== null && b !== void 0 ? b : P;
        return /* @__PURE__ */ xe(C, {
          viewBox: $($({}, R), {}, {
            x: R.left,
            y: R.top
          }),
          active: N,
          label: M,
          payload: N ? I : [],
          coordinate: j,
          accessibilityLayer: A
        });
      }), H(y, "renderBrush", function(b) {
        var O = y.props, S = O.margin, A = O.data, C = y.state, T = C.offset, P = C.dataStartIndex, j = C.dataEndIndex, I = C.updateId;
        return /* @__PURE__ */ xe(b, {
          key: b.key || "_recharts-brush",
          onChange: Nn(y.handleBrushChange, b.props.onChange),
          data: A,
          x: B(b.props.x) ? b.props.x : T.left,
          y: B(b.props.y) ? b.props.y : T.top + T.height + T.brushBottom - (S.bottom || 0),
          width: B(b.props.width) ? b.props.width : T.width,
          startIndex: P,
          endIndex: j,
          updateId: "brush-".concat(I)
        });
      }), H(y, "renderReferenceElement", function(b, O, S) {
        if (!b)
          return null;
        var A = y, C = A.clipPathId, T = y.state, P = T.xAxisMap, j = T.yAxisMap, I = T.offset, M = b.type.defaultProps || {}, R = b.props, N = R.xAxisId, q = N === void 0 ? M.xAxisId : N, k = R.yAxisId, W = k === void 0 ? M.yAxisId : k;
        return /* @__PURE__ */ xe(b, {
          key: b.key || "".concat(O, "-").concat(S),
          xAxis: P[q],
          yAxis: j[W],
          viewBox: {
            x: I.left,
            y: I.top,
            width: I.width,
            height: I.height
          },
          clipPathId: C
        });
      }), H(y, "renderActivePoints", function(b) {
        var O = b.item, S = b.activePoint, A = b.basePoint, C = b.childIndex, T = b.isRange, P = [], j = O.props.key, I = O.item.type.defaultProps !== void 0 ? $($({}, O.item.type.defaultProps), O.item.props) : O.item.props, M = I.activeDot, R = I.dataKey, N = $($({
          index: C,
          dataKey: R,
          cx: S.x,
          cy: S.y,
          r: 4,
          fill: Sf(O.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: S.payload,
          value: S.value
        }, ce(M, !1)), Wn(M));
        return P.push(m.renderActiveDot(M, N, "".concat(j, "-activePoint-").concat(C))), A ? P.push(m.renderActiveDot(M, $($({}, N), {}, {
          cx: A.x,
          cy: A.y
        }), "".concat(j, "-basePoint-").concat(C))) : T && P.push(null), P;
      }), H(y, "renderGraphicChild", function(b, O, S) {
        var A = y.filterFormatItem(b, O, S);
        if (!A)
          return null;
        var C = y.getTooltipEventType(), T = y.state, P = T.isTooltipActive, j = T.tooltipAxis, I = T.activeTooltipIndex, M = T.activeLabel, R = y.props.children, N = qe(R, Je), q = A.props, k = q.points, W = q.isRange, G = q.baseLine, F = A.item.type.defaultProps !== void 0 ? $($({}, A.item.type.defaultProps), A.item.props) : A.item.props, K = F.activeDot, oe = F.hide, he = F.activeBar, De = F.activeShape, jt = !!(!oe && P && N && (K || he || De)), Me = {};
        C !== "axis" && N && N.props.trigger === "click" ? Me = {
          onClick: Nn(y.handleItemMouseEnter, b.props.onClick)
        } : C !== "axis" && (Me = {
          onMouseLeave: Nn(y.handleItemMouseLeave, b.props.onMouseLeave),
          onMouseEnter: Nn(y.handleItemMouseEnter, b.props.onMouseEnter)
        });
        var L = /* @__PURE__ */ xe(b, $($({}, A.props), Me));
        function X(Ct) {
          return typeof j.dataKey == "function" ? j.dataKey(Ct.payload) : null;
        }
        if (jt)
          if (I >= 0) {
            var V, D;
            if (j.dataKey && !j.allowDuplicatedCategory) {
              var de = typeof j.dataKey == "function" ? X : "payload.".concat(j.dataKey.toString());
              V = Un(k, de, M), D = W && G && Un(G, de, M);
            } else
              V = k?.[I], D = W && G && G[I];
            if (De || he) {
              var Z = b.props.activeIndex !== void 0 ? b.props.activeIndex : I;
              return [/* @__PURE__ */ xe(b, $($($({}, A.props), Me), {}, {
                activeIndex: Z
              })), null, null];
            }
            if (!Y(V))
              return [L].concat(xr(y.renderActivePoints({
                item: A,
                activePoint: V,
                basePoint: D,
                childIndex: I,
                isRange: W
              })));
          } else {
            var ge, me = (ge = y.getItemByXY(y.state.activeCoordinate)) !== null && ge !== void 0 ? ge : {
              graphicalItem: L
            }, Ce = me.graphicalItem, mt = Ce.item, Vt = mt === void 0 ? b : mt, jn = Ce.childIndex, Mt = $($($({}, A.props), Me), {}, {
              activeIndex: jn
            });
            return [/* @__PURE__ */ xe(Vt, Mt), null, null];
          }
        return W ? [L, null, null] : [L, null];
      }), H(y, "renderCustomized", function(b, O, S) {
        return /* @__PURE__ */ xe(b, $($({
          key: "recharts-customized-".concat(S)
        }, y.props), y.state));
      }), H(y, "renderMap", {
        CartesianGrid: {
          handler: Fn,
          once: !0
        },
        ReferenceArea: {
          handler: y.renderReferenceElement
        },
        ReferenceLine: {
          handler: Fn
        },
        ReferenceDot: {
          handler: y.renderReferenceElement
        },
        XAxis: {
          handler: Fn
        },
        YAxis: {
          handler: Fn
        },
        Brush: {
          handler: y.renderBrush,
          once: !0
        },
        Bar: {
          handler: y.renderGraphicChild
        },
        Line: {
          handler: y.renderGraphicChild
        },
        Area: {
          handler: y.renderGraphicChild
        },
        Radar: {
          handler: y.renderGraphicChild
        },
        RadialBar: {
          handler: y.renderGraphicChild
        },
        Scatter: {
          handler: y.renderGraphicChild
        },
        Pie: {
          handler: y.renderGraphicChild
        },
        Funnel: {
          handler: y.renderGraphicChild
        },
        Tooltip: {
          handler: y.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: y.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: y.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: y.renderPolarAxis
        },
        Customized: {
          handler: y.renderCustomized
        }
      }), y.clipPathId = "".concat((w = x.id) !== null && w !== void 0 ? w : Fa("recharts"), "-clip"), y.throttleTriggeredAfterMouseMove = pb(y.triggeredAfterMouseMove, (_ = x.throttleDelay) !== null && _ !== void 0 ? _ : 1e3 / 60), y.state = {}, y;
    }
    return TR(m, p), OR(m, [{
      key: "componentDidMount",
      value: function() {
        var w, _;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0,
            top: (_ = this.props.margin.top) !== null && _ !== void 0 ? _ : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var w = this.props, _ = w.children, y = w.data, b = w.height, O = w.layout, S = qe(_, Je);
        if (S) {
          var A = S.props.defaultIndex;
          if (!(typeof A != "number" || A < 0 || A > this.state.tooltipTicks.length - 1)) {
            var C = this.state.tooltipTicks[A] && this.state.tooltipTicks[A].value, T = Al(this.state, y, A, C), P = this.state.tooltipTicks[A].coordinate, j = (this.state.offset.top + b) / 2, I = O === "horizontal", M = I ? {
              x: P,
              y: j
            } : {
              y: P,
              x: j
            }, R = this.state.formattedGraphicalItems.find(function(q) {
              var k = q.item;
              return k.type.name === "Scatter";
            });
            R && (M = $($({}, M), R.props.points[A].tooltipPosition), T = R.props.points[A].tooltipPayload);
            var N = {
              activeTooltipIndex: A,
              isTooltipActive: !0,
              activeLabel: C,
              activePayload: T,
              activeCoordinate: M
            };
            this.setState(N), this.renderCursor(S), this.accessibilityManager.setIndex(A);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(w, _) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== _.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== w.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== w.margin) {
          var y, b;
          this.accessibilityManager.setDetails({
            offset: {
              left: (y = this.props.margin.left) !== null && y !== void 0 ? y : 0,
              top: (b = this.props.margin.top) !== null && b !== void 0 ? b : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(w) {
        bc([qe(w.children, Je)], [qe(this.props.children, Je)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var w = qe(this.props.children, Je);
        if (w && typeof w.props.shared == "boolean") {
          var _ = w.props.shared ? "axis" : "item";
          return u.indexOf(_) >= 0 ? _ : i;
        }
        return i;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(w) {
        if (!this.container)
          return null;
        var _ = this.container, y = _.getBoundingClientRect(), b = vS(y), O = {
          chartX: Math.round(w.pageX - b.left),
          chartY: Math.round(w.pageY - b.top)
        }, S = y.width / _.offsetWidth || 1, A = this.inRange(O.chartX, O.chartY, S);
        if (!A)
          return null;
        var C = this.state, T = C.xAxisMap, P = C.yAxisMap, j = this.getTooltipEventType(), I = Zg(this.state, this.props.data, this.props.layout, A);
        if (j !== "axis" && T && P) {
          var M = xt(T).scale, R = xt(P).scale, N = M && M.invert ? M.invert(O.chartX) : null, q = R && R.invert ? R.invert(O.chartY) : null;
          return $($({}, O), {}, {
            xValue: N,
            yValue: q
          }, I);
        }
        return I ? $($({}, O), I) : null;
      }
    }, {
      key: "inRange",
      value: function(w, _) {
        var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, O = w / y, S = _ / y;
        if (b === "horizontal" || b === "vertical") {
          var A = this.state.offset, C = O >= A.left && O <= A.left + A.width && S >= A.top && S <= A.top + A.height;
          return C ? {
            x: O,
            y: S
          } : null;
        }
        var T = this.state, P = T.angleAxisMap, j = T.radiusAxisMap;
        if (P && j) {
          var I = xt(P);
          return wy({
            x: O,
            y: S
          }, I);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var w = this.props.children, _ = this.getTooltipEventType(), y = qe(w, Je), b = {};
        y && _ === "axis" && (y.props.trigger === "click" ? b = {
          onClick: this.handleClick
        } : b = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var O = Wn(this.props, this.handleOuterEvent);
        return $($({}, O), b);
      }
    }, {
      key: "addListener",
      value: function() {
        dc.on(pc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        dc.removeListener(pc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(w, _, y) {
        for (var b = this.state.formattedGraphicalItems, O = 0, S = b.length; O < S; O++) {
          var A = b[O];
          if (A.item === w || A.props.key === w.key || _ === ct(A.item.type) && y === A.childIndex)
            return A;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var w = this.clipPathId, _ = this.state.offset, y = _.left, b = _.top, O = _.height, S = _.width;
        return /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
          id: w
        }, /* @__PURE__ */ E.createElement("rect", {
          x: y,
          y: b,
          height: O,
          width: S
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var w = this.state.xAxisMap;
        return w ? Object.entries(w).reduce(function(_, y) {
          var b = Xg(y, 2), O = b[0], S = b[1];
          return $($({}, _), {}, H({}, O, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var w = this.state.yAxisMap;
        return w ? Object.entries(w).reduce(function(_, y) {
          var b = Xg(y, 2), O = b[0], S = b[1];
          return $($({}, _), {}, H({}, O, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(w) {
        var _;
        return (_ = this.state.xAxisMap) === null || _ === void 0 || (_ = _[w]) === null || _ === void 0 ? void 0 : _.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(w) {
        var _;
        return (_ = this.state.yAxisMap) === null || _ === void 0 || (_ = _[w]) === null || _ === void 0 ? void 0 : _.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(w) {
        var _ = this.state, y = _.formattedGraphicalItems, b = _.activeItem;
        if (y && y.length)
          for (var O = 0, S = y.length; O < S; O++) {
            var A = y[O], C = A.props, T = A.item, P = T.type.defaultProps !== void 0 ? $($({}, T.type.defaultProps), T.props) : T.props, j = ct(T.type);
            if (j === "Bar") {
              var I = (C.data || []).find(function(q) {
                return vC(w, q);
              });
              if (I)
                return {
                  graphicalItem: A,
                  payload: I
                };
            } else if (j === "RadialBar") {
              var M = (C.data || []).find(function(q) {
                return wy(w, q);
              });
              if (M)
                return {
                  graphicalItem: A,
                  payload: M
                };
            } else if (ui(A, b) || si(A, b) || vn(A, b)) {
              var R = iI({
                graphicalItem: A,
                activeTooltipItem: b,
                itemData: P.data
              }), N = P.activeIndex === void 0 ? R : P.activeIndex;
              return {
                graphicalItem: $($({}, A), {}, {
                  childIndex: N
                }),
                payload: vn(A, b) ? P.data[R] : A.props.data[R]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var w = this;
        if (!Fd(this))
          return null;
        var _ = this.props, y = _.children, b = _.className, O = _.width, S = _.height, A = _.style, C = _.compact, T = _.title, P = _.desc, j = Vg(_, yR), I = ce(j, !1);
        if (C)
          return /* @__PURE__ */ E.createElement(qg, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ E.createElement(wc, er({}, I, {
            width: O,
            height: S,
            title: T,
            desc: P
          }), this.renderClipPath(), Wd(y, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var M, R;
          I.tabIndex = (M = this.props.tabIndex) !== null && M !== void 0 ? M : 0, I.role = (R = this.props.role) !== null && R !== void 0 ? R : "application", I.onKeyDown = function(q) {
            w.accessibilityManager.keyboardEvent(q);
          }, I.onFocus = function() {
            w.accessibilityManager.focus();
          };
        }
        var N = this.parseEventsOfWrapper();
        return /* @__PURE__ */ E.createElement(qg, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ E.createElement("div", er({
          className: se("recharts-wrapper", b),
          style: $({
            position: "relative",
            cursor: "default",
            width: O,
            height: S
          }, A)
        }, N, {
          ref: function(k) {
            w.container = k;
          }
        }), /* @__PURE__ */ E.createElement(wc, er({}, I, {
          width: O,
          height: S,
          title: T,
          desc: P,
          style: $R
        }), this.renderClipPath(), Wd(y, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(vx);
  H(g, "displayName", r), H(g, "defaultProps", $({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, l)), H(g, "getDerivedStateFromProps", function(p, m) {
    var x = p.dataKey, w = p.data, _ = p.children, y = p.width, b = p.height, O = p.layout, S = p.stackOffset, A = p.margin, C = m.dataStartIndex, T = m.dataEndIndex;
    if (m.updateId === void 0) {
      var P = Jg(p);
      return $($($({}, P), {}, {
        updateId: 0
      }, h($($({
        props: p
      }, P), {}, {
        updateId: 0
      }), m)), {}, {
        prevDataKey: x,
        prevData: w,
        prevWidth: y,
        prevHeight: b,
        prevLayout: O,
        prevStackOffset: S,
        prevMargin: A,
        prevChildren: _
      });
    }
    if (x !== m.prevDataKey || w !== m.prevData || y !== m.prevWidth || b !== m.prevHeight || O !== m.prevLayout || S !== m.prevStackOffset || !vc(A, m.prevMargin)) {
      var j = Jg(p), I = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: m.chartX,
        chartY: m.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: m.isTooltipActive
      }, M = $($({}, Zg(m, w, O)), {}, {
        updateId: m.updateId + 1
      }), R = $($($({}, j), I), M);
      return $($($({}, R), h($({
        props: p
      }, R), m)), {}, {
        prevDataKey: x,
        prevData: w,
        prevWidth: y,
        prevHeight: b,
        prevLayout: O,
        prevStackOffset: S,
        prevMargin: A,
        prevChildren: _
      });
    }
    if (!bc(_, m.prevChildren)) {
      var N, q, k, W, G = qe(_, hr), F = G && (N = (q = G.props) === null || q === void 0 ? void 0 : q.startIndex) !== null && N !== void 0 ? N : C, K = G && (k = (W = G.props) === null || W === void 0 ? void 0 : W.endIndex) !== null && k !== void 0 ? k : T, oe = F !== C || K !== T, he = !Y(w), De = he && !oe ? m.updateId : m.updateId + 1;
      return $($({
        updateId: De
      }, h($($({
        props: p
      }, m), {}, {
        updateId: De,
        dataStartIndex: F,
        dataEndIndex: K
      }), m)), {}, {
        prevChildren: _,
        dataStartIndex: F,
        dataEndIndex: K
      });
    }
    return null;
  }), H(g, "renderActiveDot", function(p, m, x) {
    var w;
    return /* @__PURE__ */ Xe(p) ? w = /* @__PURE__ */ xe(p, m) : J(p) ? w = p(m) : w = /* @__PURE__ */ E.createElement(M0, m), /* @__PURE__ */ E.createElement(Te, {
      className: "recharts-active-dot",
      key: x
    }, w);
  });
  var v = /* @__PURE__ */ Ie(function(m, x) {
    return /* @__PURE__ */ E.createElement(g, er({}, m, {
      ref: x
    }));
  });
  return v.displayName = g.displayName, v;
};
const WR = { light: "", dark: ".dark" }, ox = ht(null);
function ux() {
  const e = $e(ox);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const zR = Ie(({ id: e, className: t, children: r, config: n, ...a }, i) => {
  const o = yx(), u = `chart-${e || o.replace(/:/g, "")}`;
  return /* @__PURE__ */ z.jsx(ox.Provider, { value: { config: n }, children: /* @__PURE__ */ z.jsxs(
    "div",
    {
      ref: i,
      className: fe(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted  [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      "data-chart": u,
      ...a,
      children: [
        /* @__PURE__ */ z.jsx(HR, { config: n, id: u }),
        /* @__PURE__ */ z.jsx(sS, { children: r })
      ]
    }
  ) });
});
zR.displayName = "Chart";
const HR = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ z.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(WR).map(
          ([n, a]) => `
${a} [data-chart=${e}] {
${r.map(([i, o]) => {
            const u = o.theme?.[n] || o.color;
            return u ? `  --color-${i}: ${u};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, ID = Je, GR = Ie(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: a = !1,
    hideIndicator: i = !1,
    label: o,
    labelFormatter: u,
    labelClassName: s,
    formatter: c,
    color: f,
    nameKey: l,
    labelKey: d
  }, h) => {
    const { config: g } = ux(), v = El(() => {
      if (a || !t?.length)
        return null;
      const [m] = t, x = `${d || m.dataKey || m.name || "value"}`, w = Pl(g, m, x), _ = !d && typeof o == "string" ? g[o]?.label || o : w?.label;
      return u ? /* @__PURE__ */ z.jsx("div", { className: fe("font-medium", s), children: u(_, t) }) : _ ? /* @__PURE__ */ z.jsx("div", { className: fe("font-medium", s), children: _ }) : null;
    }, [
      o,
      u,
      t,
      a,
      s,
      g,
      d
    ]);
    if (!e || !t?.length)
      return null;
    const p = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ z.jsxs(
      "div",
      {
        ref: h,
        className: fe(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          p ? null : v,
          /* @__PURE__ */ z.jsx("div", { className: "grid gap-1", children: t.map((m, x) => {
            const w = `${l || m.name || m.dataKey || "value"}`, _ = Pl(g, m, w), y = f || m.payload.fill || m.color;
            return /* @__PURE__ */ z.jsx(
              "div",
              {
                className: fe(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: c && m?.value !== void 0 && m.name ? c(m.value, m.name, m, x, m.payload) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
                  _?.icon ? /* @__PURE__ */ z.jsx(_.icon, {}) : !i && /* @__PURE__ */ z.jsx(
                    "div",
                    {
                      className: fe(
                        "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": p && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": y,
                        "--color-border": y
                      }
                    }
                  ),
                  /* @__PURE__ */ z.jsxs(
                    "div",
                    {
                      className: fe(
                        "flex flex-1 justify-between leading-none gap-1.5",
                        p ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ z.jsxs("div", { className: "grid gap-1.5", children: [
                          p ? v : null,
                          /* @__PURE__ */ z.jsx("span", { className: "text-muted-foreground", children: _?.label || m.name })
                        ] }),
                        m.value && /* @__PURE__ */ z.jsx("span", { className: "font-mono font-medium text-foreground tabular-nums", children: m.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              m.dataKey
            );
          }) })
        ]
      }
    );
  }
);
GR.displayName = "ChartTooltip";
const KR = Ie(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: a }, i) => {
    const { config: o } = ux();
    return r?.length ? /* @__PURE__ */ z.jsx(
      "div",
      {
        ref: i,
        className: fe(
          "flex items-center justify-center gap-4",
          n === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: r.map((u) => {
          const s = `${a || u.dataKey || "value"}`, c = Pl(o, u, s);
          return /* @__PURE__ */ z.jsxs(
            "div",
            {
              className: fe(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                c?.icon && !t ? /* @__PURE__ */ z.jsx(c.icon, {}) : /* @__PURE__ */ z.jsx(
                  "div",
                  {
                    className: "size-2 shrink-0 rounded-full",
                    style: {
                      backgroundColor: u.color
                    }
                  }
                ),
                c?.label
              ]
            },
            u.value
          );
        })
      }
    ) : null;
  }
);
KR.displayName = "ChartLegend";
function Pl(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = r;
  return r in t && typeof t[r] == "string" ? a = t[r] : n && r in n && typeof n[r] == "string" && (a = n[r]), a in e ? e[a] : e[r];
}
const $D = ({ x: e, y: t, payload: r, index: n, formatter: a = (i) => String(i) }) => {
  const i = n === 0 ? "start" : "end";
  return /* @__PURE__ */ z.jsx("g", { transform: `translate(${e},${t})`, children: /* @__PURE__ */ z.jsx(
    "text",
    {
      dy: 16,
      fill: "var(--muted-foreground)",
      textAnchor: i,
      x: 0,
      y: -12,
      children: a(r.value)
    }
  ) });
}, XR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ z.jsx(
  "div",
  {
    ref: n,
    className: fe("flex flex-col items-stretch", t),
    ...r,
    children: e
  }
));
XR.displayName = "DataList";
const VR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ z.jsx(
  "div",
  {
    ref: n,
    className: fe("flex uppercase items-center justify-between gap-2 border-b p-2 text-xs tracking-wide font-medium text-muted-foreground", t),
    ...r,
    children: e
  }
));
VR.displayName = "DataListHeader";
const YR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ z.jsx(
  "div",
  {
    ref: n,
    className: fe("", t),
    ...r,
    children: e
  }
));
YR.displayName = "DataListHead";
const ZR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ z.jsx(
  "div",
  {
    ref: n,
    className: fe("flex flex-col items-stretch pt-1.5", t),
    ...r,
    children: e
  }
));
ZR.displayName = "DataListBody";
const JR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ z.jsx(
  "div",
  {
    ref: n,
    className: fe("group/row py-0.5 relative flex items-center justify-between gap-3 before:absolute before:z-0 before:-inset-x-0.5 before:inset-y-0.5 before:bg-muted/60 before:opacity-0 hover:before:opacity-100 before:rounded-[6px]", t),
    ...r,
    children: e
  }
));
JR.displayName = "DataListRow";
const QR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ z.jsx(
  "div",
  {
    ref: n,
    className: fe("absolute inset-x-0 inset-y-1 z-0 origin-left rounded-[4px] bg-state-info/10 group-hover/row:bg-state-info/25 dark:bg-state-info/20 dark:group-hover/row:bg-state-info/35 transition-all", t),
    ...r,
    children: e
  }
));
QR.displayName = "DataListBar";
const eD = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ z.jsx(
  "div",
  {
    ref: n,
    className: fe("text-sm p-2 font-medium relative z-10 flex min-w-0 max-w-[calc(100%-32px)] items-center transition-[max-width] duration-300 ease-in-out group-hover/datalist:max-w-[calc(100%-100px)]", t),
    ...r,
    children: e
  }
));
eD.displayName = "DataListItemContent";
const tD = E.forwardRef(({ children: e, className: t, ...r }, n) => {
  const i = E.Children.toArray(e).length > 1;
  return /* @__PURE__ */ z.jsx(
    "div",
    {
      ref: n,
      className: fe(
        "z-10 flex items-center",
        // Apply animation styles when there are multiple children
        i && '[&>[data-type="value-abs"]]:transition-transform [&>[data-type="value-abs"]]:duration-300 [&>[data-type="value-abs"]]:group-hover/datalist:-translate-x-14',
        i && '[&>[data-type="value-perc"]]:invisible [&>[data-type="value-perc"]]:absolute [&>[data-type="value-perc"]]:right-0 [&>[data-type="value-perc"]]:translate-x-14 [&>[data-type="value-perc"]]:opacity-0 [&>[data-type="value-perc"]]:transition-all [&>[data-type="value-perc"]]:duration-300 [&>[data-type="value-perc"]]:group-hover/datalist:visible [&>[data-type="value-perc"]]:group-hover/datalist:translate-x-0 [&>[data-type="value-perc"]]:group-hover/datalist:opacity-100',
        t
      ),
      ...r,
      children: e
    }
  );
});
tD.displayName = "DataListItemValue";
const rD = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ z.jsx(
  "div",
  {
    ref: n,
    className: fe("z-10 px-2 text-sm font-mono", t),
    "data-type": "value-abs",
    ...r,
    children: e
  }
));
rD.displayName = "DataListItemValueAbs";
const nD = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ z.jsx(
  "div",
  {
    ref: n,
    className: fe("px-3 text-sm font-mono text-muted-foreground", t),
    "data-type": "value-perc",
    ...r,
    children: e
  }
));
nD.displayName = "DataListItemValuePerc";
const En = ht("segmented"), aD = Ie(({ variant: e = "segmented", ...t }, r) => /* @__PURE__ */ z.jsx(En.Provider, { value: e, children: /* @__PURE__ */ z.jsx(fm, { ref: r, ...t }) }));
aD.displayName = fm.displayName;
const iD = jl(
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
), oD = Ie(({ className: e, ...t }, r) => {
  const n = $e(En);
  return /* @__PURE__ */ z.jsx(
    dm,
    {
      ref: r,
      className: fe(iD({ variant: n, className: e })),
      ...t
    }
  );
});
oD.displayName = dm.displayName;
const sx = jl(
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
), uD = Ie(({ className: e, ...t }, r) => {
  const n = $e(En);
  return /* @__PURE__ */ z.jsx(
    Cl,
    {
      ref: r,
      className: fe(sx({ variant: n, className: e })),
      ...t
    }
  );
});
uD.displayName = Cl.displayName;
const sD = jl(
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
), cD = Ie(({ className: e, ...t }, r) => {
  const n = $e(En);
  return /* @__PURE__ */ z.jsx(
    pm,
    {
      ref: r,
      className: fe(sD({ variant: n, className: e })),
      ...t
    }
  );
});
cD.displayName = pm.displayName;
const lD = Ie(({
  children: e,
  className: t,
  ...r
}, n) => {
  const a = $e(En);
  return /* @__PURE__ */ z.jsxs("div", { className: "relative rounded-md hover:bg-muted", children: [
    /* @__PURE__ */ z.jsx(
      Cl,
      {
        ref: n,
        className: fe(sx({ variant: a, className: t })),
        ...r,
        children: /* @__PURE__ */ z.jsx("div", { className: "flex items-center gap-2", children: e })
      }
    ),
    /* @__PURE__ */ z.jsx(
      wx,
      {
        className: "absolute inset-0 size-full cursor-pointer",
        onClick: (i) => {
          i.preventDefault();
        }
      }
    )
  ] });
});
lD.displayName = "TabsDropdownTrigger";
export {
  $D as $,
  vD as A,
  TD as B,
  kt as C,
  XR as D,
  xD as E,
  qr as F,
  Va as G,
  ri as H,
  Iy as I,
  Ot as J,
  Yt as K,
  Te as L,
  Y as M,
  _n as N,
  wf as O,
  bD as P,
  Bt as Q,
  Fa as R,
  Ye as S,
  gD as T,
  wD as U,
  M0 as V,
  p$ as W,
  h$ as X,
  CD as Y,
  SD as Z,
  zR as _,
  ZR as a,
  ID as a0,
  uD as a1,
  aD as a2,
  oD as a3,
  cD as a4,
  Xb as a5,
  zP as a6,
  At as a7,
  KP as a8,
  Pe as a9,
  OD as aa,
  JC as ab,
  sE as ac,
  vE as ad,
  Ve as ae,
  hb as af,
  cE as ag,
  vy as ah,
  m0 as ai,
  _D as aj,
  GR as ak,
  JR as b,
  QR as c,
  eD as d,
  tD as e,
  rD as f,
  nD as g,
  VR as h,
  YR as i,
  yD as j,
  mD as k,
  AD as l,
  B as m,
  pv as n,
  Qe as o,
  J as p,
  qc as q,
  ce as r,
  vc as s,
  tt as t,
  gc as u,
  Ee as v,
  jD as w,
  MD as x,
  ED as y,
  PD as z
};
//# sourceMappingURL=tabs-DWupT4E_.mjs.map
