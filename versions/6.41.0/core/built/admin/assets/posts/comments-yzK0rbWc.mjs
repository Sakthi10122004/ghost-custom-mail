import { j as l, c as Ne, q as Cd, R as Bt, a as be, m as ae, u as Be, k as or, b as vt, v as _r, l as dr, g as kd, L as ea, K as _d, p as Fd, M as ta, w as Qu, i as Bd } from "./index-ccmRG8Rd.mjs";
import { F as Ld, c as qd } from "./filters-CVMjSzG1.mjs";
import { C as Ud, a as ra, h as zd, d as Yd, F as Zd, e as $d, f as Xu, D as na, P as ki, i as el, M as Wd, H as tl, R as Hd, c as rl, E as nl, g as _i } from "./search-DUatCFAA.mjs";
import { a as Vd, D as Gd, c as Kd, d as Jd, e as Gt } from "./skeleton-9GpF0jm6.mjs";
import { U as ol, E as Qd, S as Xd, g as ep } from "./get-site-timezone-_SyeKwec.mjs";
import { b as pr, d as oa, c as ia } from "./hooks-muBZfhoU.mjs";
import { d as tp, b as rp, c as np } from "./settings-Cv9xgT7m.mjs";
import { X as op } from "./index-DTo4Qrbc.mjs";
import { B as le, C as ip } from "./button-bsWyESEG.mjs";
import { C as ap, T as Fi, b as Bi, c as Li, d as qi } from "./tooltip-ChyXZBO5.mjs";
import { A as ir } from "./avatar-UVxVUxf7.mjs";
import { L as hr } from "./loading-indicator-DUlTXBD-.mjs";
import { C as sp, L as cp } from "./label-DlsZuCbx.mjs";
import { D as aa, b as sa, c as ca, d as ua, e as up, f as la } from "./dialog-BnMiXzok.mjs";
import { E as lp } from "./ellipsis-Cy0JvlLk.mjs";
import { h as Nn } from "./app-utils-B8w6QZz5.mjs";
import { E as Ui } from "./empty-indicator-C_CRWWaH.mjs";
import { S as fp, b as dp, c as pp, d as hp } from "./sheet-BDkY1KkY.mjs";
import { g as mp, u as yp, a as gp, L as vp } from "./virtual-list-window-CxAo-dre.mjs";
import { M as il } from "./main-layout-CCbCHYCQ.mjs";
import { I as bp, L as tr, P as yt } from "./list-page-B7jM1dtq.mjs";
function wp(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
}
const al = Cd(
  "inline-flex items-center rounded-xs border px-1.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:outline-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground/70",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        success: "border-transparent bg-green/20 text-green",
        warning: "border-transparent bg-state-warning/20 text-yellow-600",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Ks({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ l.jsx("div", { className: Ne(al({ variant: t }), e), ...r });
}
function xp({ className: e, children: t }) {
  return Bt.Children.count(t) === 0 ? null : /* @__PURE__ */ l.jsx(
    bp,
    {
      align: "start",
      className: Ne("w-full", e),
      "data-slot": "filter-bar",
      gap: "sm",
      justify: "between",
      children: t
    }
  );
}
const Sp = ["is-less", "is-or-less", "is-greater", "is-or-greater"], jp = {
  "is-less": "before",
  "is-or-less": "on or before",
  "is-greater": "after",
  "is-or-greater": "on or after"
}, Ep = "is-or-less";
function Pe(e, t, r, n, o) {
  return it(t, ((i, a) => {
    const s = i[a];
    if (s === void 0)
      throw new TypeError(os(a));
    return s;
  })(e, t), r, n, o);
}
function it(e, t, r, n, o, i) {
  const a = Lr(t, r, n);
  if (o && t !== a)
    throw new RangeError(xf(e, t, r, n, i));
  return a;
}
function Se(e) {
  return e !== null && /object|function/.test(typeof e);
}
function Ie(e, t = Map) {
  const r = new t();
  return (n, ...o) => {
    if (r.has(n))
      return r.get(n);
    const i = e(n, ...o);
    return r.set(n, i), i;
  };
}
function Br(e) {
  return ar({
    name: e
  }, 1);
}
function ar(e, t) {
  return at(((r) => ({
    value: r,
    configurable: 1,
    writable: !t
  })), e);
}
function Pp(e) {
  return at(((t) => ({
    get: t,
    configurable: 1
  })), e);
}
function fa(e) {
  return {
    [Symbol.toStringTag]: {
      value: e,
      configurable: 1
    }
  };
}
function mr(e, t) {
  const r = {};
  let n = e.length;
  for (const o of t)
    r[e[--n]] = o;
  return r;
}
function at(e, t, r) {
  const n = {};
  for (const o in t)
    n[o] = e(t[o], o, r);
  return n;
}
function qn(e, t, r) {
  const n = {};
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    n[i] = e(i, o, r);
  }
  return n;
}
function sl(e, t, r) {
  const n = {};
  for (let o = 0; o < e.length; o++)
    n[t[o]] = r[e[o]];
  return n;
}
function Le(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const n of e)
    r[n] = t[n];
  return r;
}
function Js(e, t) {
  for (const r of t)
    if (r in e)
      return 1;
  return 0;
}
function cl(e, t, r) {
  for (const n of e)
    if (t[n] !== r[n])
      return 0;
  return 1;
}
function ul(e, t, r) {
  const n = {
    ...r
  };
  for (let o = 0; o < t; o++)
    n[e[o]] = 0;
  return n;
}
function J(e, ...t) {
  return (...r) => e(...t, ...r);
}
function Qs(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function Wr(e) {
  return e.slice().sort();
}
function On(e, t) {
  return String(t).padStart(e, "0");
}
function bt(e, t) {
  return Math.sign(e - t);
}
function Lr(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function rt(e, t) {
  return [Math.floor(e / t), Cr(e, t)];
}
function Cr(e, t) {
  return (e % t + t) % t;
}
function St(e, t) {
  return [Un(e, t), da(e, t)];
}
function Un(e, t) {
  return Math.trunc(e / t) || 0;
}
function da(e, t) {
  return e % t || 0;
}
function yn(e) {
  return Math.abs(e % 1) === 0.5;
}
function ll(e, t, r) {
  let n = 0, o = 0;
  for (let s = 0; s <= t; s++) {
    const c = e[r[s]], u = Ke[s], d = ie / u, [f, p] = St(c, d);
    n += p * u, o += f;
  }
  const [i, a] = St(n, ie);
  return [o + i, a];
}
function zn(e, t, r) {
  const n = {};
  for (let o = t; o >= 0; o--) {
    const i = Ke[o];
    n[r[o]] = Un(e, i), e = da(e, i);
  }
  return n;
}
function Tp(e) {
  if (e !== void 0)
    return ye(e);
}
function Np(e) {
  if (e !== void 0)
    return tt(e);
}
function fl(e) {
  if (e !== void 0)
    return pa(e);
}
function tt(e) {
  return hl(pa(e));
}
function pa(e) {
  return pl(Fm(e));
}
function dl(e, t) {
  if (t == null)
    throw new RangeError(os(e));
  return t;
}
function Hr(e) {
  if (!Se(e))
    throw new TypeError(cm);
  return e;
}
function ha(e, t, r = e) {
  if (typeof t !== e)
    throw new TypeError(It(r, t));
  return t;
}
function pl(e, t = "number") {
  if (!Number.isInteger(e))
    throw new RangeError(rm(t, e));
  return e || 0;
}
function hl(e, t = "number") {
  if (e <= 0)
    throw new RangeError(nm(t, e));
  return e;
}
function ma(e) {
  if (typeof e == "symbol")
    throw new TypeError(sm);
  return String(e);
}
function jn(e, t) {
  return Se(e) ? String(e) : ye(e, t);
}
function ya(e) {
  if (typeof e == "string")
    return BigInt(e);
  if (typeof e != "bigint")
    throw new TypeError(am(e));
  return e;
}
function ml(e, t = "number") {
  if (typeof e == "bigint")
    throw new TypeError(im(t));
  if (e = Number(e), !Number.isFinite(e))
    throw new RangeError(om(t, e));
  return e;
}
function we(e, t) {
  return Math.trunc(ml(e, t)) || 0;
}
function ga(e, t) {
  return pl(ml(e, t), t);
}
function Xs(e, t) {
  return hl(we(e, t), t);
}
function va(e, t) {
  let [r, n] = St(t, ie), o = e + r;
  const i = Math.sign(o);
  return i && i === -Math.sign(n) && (o -= i, n += i * ie), [o, n];
}
function sr(e, t, r = 1) {
  return va(e[0] + t[0] * r, e[1] + t[1] * r);
}
function Lt(e, t) {
  return va(e[0], e[1] + t);
}
function Ve(e, t) {
  return sr(t, e, -1);
}
function De(e, t) {
  return bt(e[0], t[0]) || bt(e[1], t[1]);
}
function yl(e, t, r) {
  return De(e, t) === -1 || De(e, r) === 1;
}
function ba(e, t = 1) {
  const r = BigInt(ie / t);
  return [Number(e / r), Number(e % r) * t];
}
function An(e, t = 1) {
  const r = ie / t, [n, o] = St(e, r);
  return [n, o * t];
}
function Ge(e, t = 1, r) {
  const [n, o] = e, [i, a] = St(o, t);
  return n * (ie / t) + (i + (r ? a / t : 0));
}
function wa(e, t, r = rt) {
  const [n, o] = e, [i, a] = r(o, t);
  return [n * (ie / t) + i, a];
}
function xa(e) {
  return Pe(e, "isoYear", $r, Zr, 1), e.isoYear === $r ? Pe(e, "isoMonth", 4, 12, 1) : e.isoYear === Zr && Pe(e, "isoMonth", 1, 9, 1), e;
}
function _e(e) {
  return Ae({
    ...e,
    ...Re,
    isoHour: 12
  }), e;
}
function Ae(e) {
  const t = Pe(e, "isoYear", $r, Zr, 1), r = t === $r ? 1 : t === Zr ? -1 : 0;
  return r && Je(pe({
    ...e,
    isoDay: e.isoDay + r,
    isoNanosecond: e.isoNanosecond - r
  })), e;
}
function Je(e) {
  if (!e || yl(e, Zm, Ym))
    throw new RangeError(Dt);
  return e;
}
function jt(e) {
  return ll(e, 5, ze)[1];
}
function Yn(e) {
  const [t, r] = rt(e, ie);
  return [zn(r, 5, ze), t];
}
function ec(e) {
  return wa(e, He);
}
function xe(e) {
  return yr(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function pe(e) {
  const t = xe(e);
  if (t !== void 0) {
    const [r, n] = St(t, Oe);
    return [r, n * ut + (e.isoMicrosecond || 0) * en + (e.isoNanosecond || 0)];
  }
}
function Sa(e, t) {
  const [r, n] = Yn(jt(e) - t);
  return Je(pe({
    ...e,
    isoDay: e.isoDay + n,
    ...r
  }));
}
function Rn(...e) {
  return yr(...e) / Rf;
}
function yr(...e) {
  const [t, r] = gl(...e), n = t.valueOf();
  if (!isNaN(n))
    return n - r * Oe;
}
function gl(e, t = 1, r = 1, n = 0, o = 0, i = 0, a = 0) {
  const s = e === $r ? 1 : e === Zr ? -1 : 0, c = /* @__PURE__ */ new Date();
  return c.setUTCHours(n, o, i, a), c.setUTCFullYear(e, t - 1, r + s), [c, s];
}
function gr(e, t) {
  let [r, n] = Lt(e, t);
  n < 0 && (n += ie, r -= 1);
  const [o, i] = rt(n, ut), [a, s] = rt(i, en);
  return Zn(r * Oe + o, a, s);
}
function Zn(e, t = 0, r = 0) {
  const n = Math.ceil(Math.max(0, Math.abs(e) - ys) / Oe) * Math.sign(e), o = new Date(e - n * Oe);
  return mr(fo, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + n, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), t, r]);
}
function ja(e, t) {
  if (t < -ys)
    throw new RangeError(Dt);
  const r = e.formatToParts(t), n = {};
  for (const o of r)
    n[o.type] = o.value;
  return n;
}
function Ea(e) {
  return [e.isoYear, e.isoMonth, e.isoDay];
}
function vl(e, t) {
  return [t, 0];
}
function bl() {
  return pt;
}
function wl(e, t) {
  switch (t) {
    case 2:
      return Pa(e) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function xl(e) {
  return Pa(e) ? 366 : 365;
}
function Pa(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Sl(e) {
  const [t, r] = gl(e.isoYear, e.isoMonth, e.isoDay);
  return Cr(t.getUTCDay() - r, 7) || 7;
}
function jl(e) {
  return this.id === Pr ? (({ isoYear: t }) => t < 1 ? ["gregory-inverse", 1 - t] : ["gregory", t])(e) : this.id === Tt ? Hm(e) : [];
}
function Op(e) {
  const t = xe(e);
  if (t < Wm) {
    const { isoYear: i } = e;
    return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
  }
  const r = ja(Ts(Tt), t), { era: n, eraYear: o } = lf(r, Tt);
  return [n, o];
}
function $n(e) {
  return zt(e), vr(e, 1), e;
}
function zt(e) {
  return El(e, 1), e;
}
function tc(e) {
  return cl(ps, e, El(e));
}
function El(e, t) {
  const { isoYear: r } = e, n = Pe(e, "isoMonth", 1, bl(), t);
  return {
    isoYear: r,
    isoMonth: n,
    isoDay: Pe(e, "isoDay", 1, wl(r, n), t)
  };
}
function vr(e, t) {
  return mr(ze, [Pe(e, "isoHour", 0, 23, t), Pe(e, "isoMinute", 0, 59, t), Pe(e, "isoSecond", 0, 59, t), Pe(e, "isoMillisecond", 0, 999, t), Pe(e, "isoMicrosecond", 0, 999, t), Pe(e, "isoNanosecond", 0, 999, t)]);
}
function ee(e) {
  return e === void 0 ? 0 : $f(Hr(e));
}
function Wn(e, t = 0) {
  e = Qe(e);
  const r = Wf(e), n = ny(e, t);
  return [$f(e), n, r];
}
function br(e, t, r, n = 9, o = 0, i = 4) {
  t = Qe(t);
  let a = Zf(t, n, o), s = Oa(t), c = nn(t, i);
  const u = rn(t, n, o, 1);
  return a == null ? a = Math.max(r, u) : Ol(a, u), s = Aa(s, u, 1), e && (c = ((d) => d < 4 ? (d + 2) % 4 : d)(c)), [a, u, s, c];
}
function Hn(e, t = 6, r) {
  let n = Oa(e = Vn(e, _n));
  const o = nn(e, 7);
  let i = rn(e, t);
  return i = dl(_n, i), n = Aa(n, i, void 0, r), [i, n, o];
}
function Ta(e) {
  return gs(Qe(e));
}
function Pl(e, t) {
  return Na(Qe(e), t);
}
function Ap(e) {
  const t = Vn(e, No), r = Nt(No, ty, t, 0);
  if (!r)
    throw new RangeError(It(No, r));
  return r;
}
function Na(e, t = 4) {
  const r = Nl(e);
  return [nn(e, 4), ...Tl(rn(e, t), r)];
}
function Tl(e, t) {
  return e != null ? [Ke[e], e < 4 ? 9 - 3 * e : -1] : [t === void 0 ? 1 : 10 ** (9 - t), t];
}
function Oa(e) {
  const t = e[kr];
  return t === void 0 ? 1 : we(t, kr);
}
function Aa(e, t, r, n) {
  const o = n ? ie : Ke[t + 1];
  if (o) {
    const i = Ke[t];
    if (o % ((e = it(kr, e, 1, o / i - (n ? 0 : 1), 1)) * i))
      throw new RangeError(It(kr, e));
  } else
    e = it(kr, e, 1, r ? 10 ** 9 : 1, 1);
  return e;
}
function Nl(e) {
  let t = e[To];
  if (t !== void 0) {
    if (typeof t != "number") {
      if (ma(t) === "auto")
        return;
      throw new RangeError(It(To, t));
    }
    t = it(To, Math.floor(t), 0, 9, 1);
  }
  return t;
}
function Qe(e) {
  return e === void 0 ? {} : Hr(e);
}
function Vn(e, t) {
  return typeof e == "string" ? {
    [t]: e
  } : Hr(e);
}
function Gn(e) {
  return {
    overflow: Vm[e]
  };
}
function Ra(e, t, r = 9, n = 0, o) {
  let i = t[e];
  if (i === void 0)
    return o ? n : void 0;
  if (i = ma(i), i === "auto")
    return o ? n : null;
  let a = $i[i];
  if (a === void 0 && (a = qm[i]), a === void 0)
    throw new RangeError(jf(e, i, $i));
  return it(e, a, n, r, 1, is), a;
}
function Nt(e, t, r, n = 0) {
  const o = r[e];
  if (o === void 0)
    return n;
  const i = ma(o), a = t[i];
  if (a === void 0)
    throw new RangeError(jf(e, i, t));
  return a;
}
function Ol(e, t) {
  if (t > e)
    throw new RangeError(Am);
}
function st(e) {
  return {
    branding: xs,
    epochNanoseconds: e
  };
}
function qe(e, t, r) {
  return {
    branding: Ct,
    calendar: r,
    timeZone: t,
    epochNanoseconds: e
  };
}
function Ue(e, t = e.calendar) {
  return {
    branding: Tr,
    calendar: t,
    ...Le(Um, e)
  };
}
function ct(e, t = e.calendar) {
  return {
    branding: on,
    calendar: t,
    ...Le(hs, e)
  };
}
function qr(e, t = e.calendar) {
  return {
    branding: vs,
    calendar: t,
    ...Le(hs, e)
  };
}
function Mn(e, t = e.calendar) {
  return {
    branding: bs,
    calendar: t,
    ...Le(hs, e)
  };
}
function Xe(e) {
  return {
    branding: ws,
    ...Le(qf, e)
  };
}
function fe(e) {
  return {
    branding: Ss,
    sign: Ot(e),
    ...Le(ls, e)
  };
}
function Ma(e) {
  return wa(e.epochNanoseconds, ut)[0];
}
function Rp(e) {
  return ((t, r = 1) => {
    const [n, o] = t, i = Math.floor(o / r), a = ie / r;
    return BigInt(n) * BigInt(a) + BigInt(i);
  })(e.epochNanoseconds);
}
function Al(e) {
  return e.epochNanoseconds;
}
function Mp(e, t, r, n, o) {
  const i = qt(n), [a, s] = ((S, P) => {
    const T = P((S = Vn(S, Vi))[zf]);
    let O = ry(S);
    return O = dl(Vi, O), [O, T];
  })(o, e), c = Math.max(a, i);
  if (!s && zr(c, s))
    return rc(n, a);
  if (!s)
    throw new RangeError(co);
  if (!n.sign)
    return 0;
  const [u, d, f] = eo(t, r, s), p = qa(f), h = to(f), m = Ua(f), g = h(d, u, n);
  cr(s) || (Ae(u), Ae(g));
  const b = m(d, u, g, a);
  return zr(a, s) ? rc(b, a) : ((S, P, T, O, k, _, R) => {
    const B = Ot(S), [L, W] = Ia(O, ds(T, S), T, B, k, _, R), q = Da(P, L, W);
    return S[te[T]] + q * B;
  })(b, p(g), a, d, u, p, h);
}
function rc(e, t) {
  return Ge(he(e), Ke[t], 1);
}
function Ia(e, t, r, n, o, i, a) {
  const s = te[r], c = {
    ...t,
    [s]: t[s] + n
  }, u = a(e, o, t), d = a(e, o, c);
  return [i(u), i(d)];
}
function Da(e, t, r) {
  const n = Ge(Ve(t, r));
  if (!n)
    throw new RangeError(Er);
  return Ge(Ve(t, e)) / n;
}
function Ip(e, t) {
  const [r, n, o] = Hn(t, 5, 1);
  return st(Jn(e.epochNanoseconds, r, n, o, 1));
}
function Dp(e, t, r) {
  let { epochNanoseconds: n, timeZone: o, calendar: i } = t;
  const [a, s, c] = Hn(r);
  if (a === 0 && s === 1)
    return t;
  const u = e(o);
  if (a === 6)
    n = ((d, f, p, h) => {
      const m = ke(p, f), [g, b] = d(m), S = p.epochNanoseconds, P = Pt(f, g), T = Pt(f, b);
      if (yl(S, P, T))
        throw new RangeError(Er);
      return Cl(Da(S, P, T), h) ? T : P;
    })(Il, u, t, c);
  else {
    const d = u.R(n);
    n = wr(u, Rl(gr(n, d), a, s, c), d, 2, 0, 1);
  }
  return qe(n, o, i);
}
function Cp(e, t) {
  return Ue(Rl(e, ...Hn(t)), e.calendar);
}
function kp(e, t) {
  const [r, n, o] = Hn(t, 5);
  var i;
  return Xe((i = o, Ca(e, Vr(r, n), i)[0]));
}
function _p(e, t) {
  const r = e(t.timeZone), n = ke(t, r), [o, i] = Il(n), a = Ge(Ve(Pt(r, o), Pt(r, i)), lo, 1);
  if (a <= 0)
    throw new RangeError(Er);
  return a;
}
function Fp(e, t) {
  const { timeZone: r, calendar: n } = t, o = ((i, a, s) => Pt(a, i(ke(s, a))))(Dl, e(r), t);
  return qe(o, r, n);
}
function Rl(e, t, r, n) {
  return Ml(e, Vr(t, r), n);
}
function Ml(e, t, r) {
  const [n, o] = Ca(e, t, r);
  return Ae({
    ...Yt(e, o),
    ...n
  });
}
function Ca(e, t, r) {
  return Yn(Et(jt(e), t, r));
}
function In(e) {
  return Et(e, uo, 7);
}
function Vr(e, t) {
  return Ke[e] * t;
}
function Il(e) {
  const t = Dl(e);
  return [t, Yt(t, 1)];
}
function Dl(e) {
  return zm(6, e);
}
function Bp(e, t, r) {
  const n = Math.min(qt(e), 6);
  return xr(Qn(he(e, n), t, r), n);
}
function Kn(e, t, r, n, o, i, a, s, c, u) {
  if (n === 0 && o === 1)
    return e;
  const d = zr(n, s) ? cr(s) && n < 6 && r >= 6 ? qp : Lp : Up;
  let [f, p, h] = d(e, t, r, n, o, i, a, s, c, u);
  return h && n !== 7 && (f = ((m, g, b, S, P, T, O, k) => {
    const _ = Ot(m);
    for (let R = S + 1; R <= b; R++) {
      if (R === 7 && b !== 7)
        continue;
      const B = ds(R, m);
      B[te[R]] += _;
      const L = Ge(Ve(O(k(P, T, B)), g));
      if (L && Math.sign(L) !== _)
        break;
      m = B;
    }
    return m;
  })(f, p, r, Math.max(6, n), a, s, c, u)), f;
}
function Jn(e, t, r, n, o) {
  if (t === 6) {
    const i = ((a) => a[0] + a[1] / ie)(e);
    return [Et(i, r, n), 0];
  }
  return Qn(e, Vr(t, r), n, o);
}
function Qn(e, t, r, n) {
  let [o, i] = e;
  n && i < 0 && (i += ie, o -= 1);
  const [a, s] = rt(Et(i, t, r), ie);
  return va(o + a, s);
}
function Et(e, t, r) {
  return Cl(e / t, r) * t;
}
function Cl(e, t) {
  return ay[t](e);
}
function Lp(e, t, r, n, o, i) {
  const a = Ot(e), s = he(e), c = Jn(s, n, o, i), u = Ve(s, c), d = Math.sign(c[0] - s[0]) === a, f = xr(c, Math.min(r, 6));
  return [{
    ...e,
    ...f
  }, sr(t, u), d];
}
function qp(e, t, r, n, o, i, a, s, c, u) {
  const d = Ot(e) || 1, f = Ge(he(e, 5)), p = Vr(n, o);
  let h = Et(f, p, i);
  const [m, g] = Ia(a, {
    ...e,
    ...fs
  }, 6, d, s, c, u), b = h - Ge(Ve(m, g));
  let S = 0;
  b && Math.sign(b) !== d ? t = Lt(m, h) : (S += d, h = Et(b, p, i), t = Lt(g, h));
  const P = ro(h);
  return [{
    ...e,
    ...P,
    days: e.days + S
  }, t, !!S];
}
function Up(e, t, r, n, o, i, a, s, c, u) {
  const d = Ot(e), f = te[n], p = ds(n, e);
  n === 7 && (e = {
    ...e,
    weeks: e.weeks + Math.trunc(e.days / 7)
  });
  const h = Un(e[f], o) * o;
  p[f] = h;
  const [m, g] = Ia(a, p, n, o * d, s, c, u), b = h + Da(t, m, g) * d * o, S = Et(b, o, i), P = Math.sign(S - b) === d;
  return p[f] = S, [p, P ? g : m, P];
}
function nc(e, t, r, n) {
  const [o, i, a, s] = ((u) => {
    const d = Na(u = Qe(u));
    return [u.timeZone, ...d];
  })(n), c = o !== void 0;
  return ((u, d, f, p, h, m) => {
    f = Qn(f, h, p, 1);
    const g = d.R(f);
    return ka(gr(f, g), m) + (u ? Gr(In(g)) : "Z");
  })(c, t(c ? e(o) : Ht), r.epochNanoseconds, i, a, s);
}
function oc(e, t, r) {
  const [n, o, i, a, s, c] = ((u) => {
    u = Qe(u);
    const d = gs(u), f = Nl(u), p = iy(u), h = nn(u, 4), m = rn(u, 4);
    return [d, oy(u), p, h, ...Tl(m, f)];
  })(r);
  return ((u, d, f, p, h, m, g, b, S, P) => {
    p = Qn(p, S, b, 1);
    const T = u(f).R(p);
    return ka(gr(p, T), P) + Gr(In(T), g) + ((O, k) => k !== 1 ? "[" + (k === 2 ? "!" : "") + O + "]" : "")(f, m) + _a(d, h);
  })(e, t.calendar, t.timeZone, t.epochNanoseconds, n, o, i, a, s, c);
}
function ic(e, t) {
  const [r, n, o, i] = ((u) => (u = Qe(u), [gs(u), ...Na(u)]))(t);
  return a = e.calendar, s = r, c = i, ka(Ml(e, o, n), c) + _a(a, s);
  var a, s, c;
}
function ac(e, t) {
  return r = e.calendar, n = e, o = Ta(t), Dn(n) + _a(r, o);
  var r, n, o;
}
function sc(e, t) {
  return kl(e.calendar, _l, e, Ta(t));
}
function cc(e, t) {
  return kl(e.calendar, zp, e, Ta(t));
}
function uc(e, t) {
  const [r, n, o] = Pl(t);
  return i = o, Fl(Ca(e, n, r)[0], i);
  var i;
}
function wo(e, t) {
  const [r, n, o] = Pl(t, 3);
  return n > 1 && Zt(e = {
    ...e,
    ...Bp(e, n, r)
  }), ((i, a) => {
    const { sign: s } = i, c = s === -1 ? je(i) : i, { hours: u, minutes: d } = c, [f, p] = wa(he(c, 3), He, St);
    Ul(f);
    const h = Fa(p, a), m = a >= 0 || !s || h;
    return (s < 0 ? "-" : "") + "P" + lc({
      Y: Ft(c.years),
      M: Ft(c.months),
      W: Ft(c.weeks),
      D: Ft(c.days)
    }) + (u || d || f || m ? "T" + lc({
      H: Ft(u),
      M: Ft(d),
      S: Ft(f, m) + h
    }) : "");
  })(e, o);
}
function kl(e, t, r, n) {
  const o = n > 1 || n === 0 && e !== X;
  return n === 1 ? e === X ? t(r) : Dn(r) : o ? Dn(r) + Bl(e, n === 2) : t(r);
}
function lc(e) {
  const t = [];
  for (const r in e) {
    const n = e[r];
    n && t.push(n, r);
  }
  return t.join("");
}
function ka(e, t) {
  return Dn(e) + "T" + Fl(e, t);
}
function Dn(e) {
  return _l(e) + "-" + Fe(e.isoDay);
}
function _l(e) {
  const { isoYear: t } = e;
  return (t < 0 || t > 9999 ? Ll(t) + On(6, Math.abs(t)) : On(4, t)) + "-" + Fe(e.isoMonth);
}
function zp(e) {
  return Fe(e.isoMonth) + "-" + Fe(e.isoDay);
}
function Fl(e, t) {
  const r = [Fe(e.isoHour), Fe(e.isoMinute)];
  return t !== -1 && r.push(Fe(e.isoSecond) + ((n, o, i, a) => Fa(n * ut + o * en + i, a))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, t)), r.join(":");
}
function Gr(e, t = 0) {
  if (t === 1)
    return "";
  const [r, n] = rt(Math.abs(e), lo), [o, i] = rt(n, uo), [a, s] = rt(i, He);
  return Ll(e) + Fe(r) + ":" + Fe(o) + (a || s ? ":" + Fe(a) + Fa(s) : "");
}
function _a(e, t) {
  return t !== 1 && (t > 1 || t === 0 && e !== X) ? Bl(e, t === 2) : "";
}
function Bl(e, t) {
  return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
function Fa(e, t) {
  let r = On(9, e);
  return r = t === void 0 ? r.replace(uy, "") : r.slice(0, t), r ? "." + r : "";
}
function Ll(e) {
  return e < 0 ? "-" : "+";
}
function Ft(e, t) {
  return e || t ? e.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function Yp(e, t) {
  const { epochNanoseconds: r } = e, n = (t.R ? t : t(e.timeZone)).R(r), o = gr(r, n);
  return {
    calendar: e.calendar,
    ...o,
    offsetNanoseconds: n
  };
}
function wr(e, t, r, n = 0, o = 0, i, a) {
  if (r !== void 0 && n === 1 && (n === 1 || a))
    return Sa(t, r);
  const s = e.I(t);
  if (r !== void 0 && n !== 3) {
    const c = ((u, d, f, p) => {
      const h = pe(d);
      p && (f = In(f));
      for (const m of u) {
        let g = Ge(Ve(m, h));
        if (p && (g = In(g)), g === f)
          return m;
      }
    })(s, t, r, i);
    if (c !== void 0)
      return c;
    if (n === 0)
      throw new RangeError(jm);
  }
  return a ? pe(t) : Kr(e, t, o, s);
}
function Kr(e, t, r = 0, n = e.I(t)) {
  if (n.length === 1)
    return n[0];
  if (r === 1)
    throw new RangeError(Em);
  if (n.length)
    return n[r === 3 ? 1 : 0];
  const o = pe(t), i = ((s, c) => {
    const u = s.R(Lt(c, -ie));
    return ((d) => {
      if (d > ie)
        throw new RangeError(Sm);
      return d;
    })(s.R(Lt(c, ie)) - u);
  })(e, o), a = i * (r === 2 ? -1 : 1);
  return (n = e.I(gr(o, a)))[r === 2 ? 0 : n.length - 1];
}
function Pt(e, t) {
  const r = e.I(t);
  if (r.length)
    return r[0];
  const n = Lt(pe(t), -ie);
  return e.O(n, 1);
}
function fc(e, t, r) {
  return st(Je(sr(t.epochNanoseconds, ((n) => {
    if (zl(n))
      throw new RangeError(Nm);
    return he(n, 5);
  })(e ? je(r) : r))));
}
function dc(e, t, r, n, o, i = /* @__PURE__ */ Object.create(null)) {
  const a = t(n.timeZone), s = e(n.calendar);
  return {
    ...n,
    ...Ba(a, s, n, r ? je(o) : o, i)
  };
}
function pc(e, t, r, n, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i } = r;
  return Ue(La(e(i), r, t ? je(n) : n, o), i);
}
function hc(e, t, r, n, o) {
  const { calendar: i } = r;
  return ct(Xn(e(i), r, t ? je(n) : n, o), i);
}
function mc(e, t, r, n, o) {
  const i = r.calendar, a = e(i);
  let s = _e(Ur(a, r));
  t && (n = za(n)), n.sign < 0 && (s = a.P(s, {
    ...me,
    months: 1
  }), s = Yt(s, -1));
  const c = a.P(s, n, o);
  return qr(Ur(a, c), i);
}
function yc(e, t, r) {
  return Xe(ql(t, e ? je(r) : r)[0]);
}
function Ba(e, t, r, n, o) {
  const i = he(n, 5);
  let a = r.epochNanoseconds;
  if (zl(n)) {
    const s = ke(r, e);
    a = sr(Kr(e, {
      ...Xn(t, s, {
        ...n,
        ...fs
      }, o),
      ...Le(ze, s)
    }), i);
  } else
    a = sr(a, i), ee(o);
  return {
    epochNanoseconds: Je(a)
  };
}
function La(e, t, r, n) {
  const [o, i] = ql(t, r);
  return Ae({
    ...Xn(e, t, {
      ...r,
      ...fs,
      days: r.days + i
    }, n),
    ...o
  });
}
function Xn(e, t, r, n) {
  if (r.years || r.months || r.weeks)
    return e.P(t, r, n);
  ee(n);
  const o = r.days + he(r, 5)[0];
  return o ? _e(Yt(t, o)) : t;
}
function Ur(e, t, r = 1) {
  return Yt(t, r - e.day(t));
}
function ql(e, t) {
  const [r, n] = he(t, 5), [o, i] = Yn(jt(e) + n);
  return [o, r + i];
}
function Yt(e, t) {
  return t ? {
    ...e,
    ...Zn(xe(e) + t * Oe)
  } : e;
}
function eo(e, t, r) {
  const n = e(r.calendar);
  return cr(r) ? [r, n, t(r.timeZone)] : [{
    ...r,
    ...Re
  }, n];
}
function qa(e) {
  return e ? Al : pe;
}
function to(e) {
  return e ? J(Ba, e) : La;
}
function Ua(e) {
  return e ? J(ph, e) : hh;
}
function cr(e) {
  return e && e.epochNanoseconds;
}
function zr(e, t) {
  return e <= 6 - (cr(t) ? 1 : 0);
}
function gc(e, t, r, n, o, i, a) {
  const s = e(Qe(a).relativeTo), c = Math.max(qt(o), qt(i));
  if (zr(c, s))
    return fe(Zt(((g, b, S, P) => {
      const T = sr(he(g), he(b), P ? -1 : 1);
      if (!Number.isFinite(T[0]))
        throw new RangeError(Dt);
      return {
        ...me,
        ...xr(T, S)
      };
    })(o, i, c, n)));
  if (!s)
    throw new RangeError(co);
  n && (i = je(i));
  const [u, d, f] = eo(t, r, s), p = to(f), h = Ua(f), m = p(d, u, o);
  return fe(h(d, u, p(d, m, i), c));
}
function Zp(e, t, r, n, o) {
  const i = qt(n), [a, s, c, u, d] = ((_, R, B) => {
    _ = Vn(_, _n);
    let L = Zf(_);
    const W = B(_[zf]);
    let q = Oa(_);
    const v = nn(_, 7);
    let A = rn(_);
    if (L === void 0 && A === void 0)
      throw new RangeError(Om);
    if (A == null && (A = 0), L == null && (L = Math.max(A, R)), Ol(L, A), q = Aa(q, A, 1), q > 1 && A > 5 && L !== A)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [L, A, q, v, W];
  })(o, i, e), f = Math.max(i, a);
  if (!d && f <= 6)
    return fe(Zt(((_, R, B, L, W) => {
      const q = Jn(he(_), B, L, W);
      return {
        ...me,
        ...xr(q, R)
      };
    })(n, a, s, c, u)));
  if (!cr(d) && !n.sign)
    return n;
  if (!d)
    throw new RangeError(co);
  const [p, h, m] = eo(t, r, d), g = qa(m), b = to(m), S = Ua(m), P = b(h, p, n);
  cr(d) || (Ae(p), Ae(P));
  let T = S(h, p, P, a);
  const O = n.sign, k = Ot(T);
  if (O && k && O !== k)
    throw new RangeError(Er);
  return T = Kn(T, g(P), a, s, c, u, h, p, g, b), fe(T);
}
function $p(e) {
  return e.sign === -1 ? za(e) : e;
}
function za(e) {
  return fe(je(e));
}
function je(e) {
  const t = {};
  for (const r of te)
    t[r] = -1 * e[r] || 0;
  return t;
}
function Wp(e) {
  return !e.sign;
}
function Ot(e, t = te) {
  let r = 0;
  for (const n of t) {
    const o = Math.sign(e[n]);
    if (o) {
      if (r && r !== o)
        throw new RangeError(Tm);
      r = o;
    }
  }
  return r;
}
function Zt(e) {
  for (const t of Lm)
    it(t, e[t], -Oc, Oc, 1);
  return Ul(Ge(he(e), He)), e;
}
function Ul(e) {
  if (!Number.isSafeInteger(e))
    throw new RangeError(Pm);
}
function he(e, t = 6) {
  return ll(e, t, te);
}
function xr(e, t = 6) {
  const [r, n] = e, o = zn(n, t, te);
  if (o[te[t]] += r * (ie / Ke[t]), !Number.isFinite(o[te[t]]))
    throw new RangeError(Dt);
  return o;
}
function ro(e, t = 5) {
  return zn(e, t, te);
}
function zl(e) {
  return !!Ot(e, Lf);
}
function qt(e) {
  let t = 9;
  for (; t > 0 && !e[te[t]]; t--)
    ;
  return t;
}
function Hp(e, t) {
  return [e, t];
}
function vc(e) {
  const t = Math.floor(e / Pn) * Pn;
  return [t, t + Pn];
}
function Vp(e) {
  const t = At(e = jn(e));
  if (!t)
    throw new RangeError(Te(e));
  let r;
  if (t.j)
    r = 0;
  else {
    if (!t.offset)
      throw new RangeError(Te(e));
    r = $t(t.offset);
  }
  return t.timeZone && Ha(t.timeZone, 1), st(Sa($n(t), r));
}
function Gp(e) {
  const t = At(ye(e));
  if (!t)
    throw new RangeError(Te(e));
  if (t.timeZone)
    return Yl(t, t.offset ? $t(t.offset) : void 0);
  if (t.j)
    throw new RangeError(Te(e));
  return $l(t);
}
function Kp(e, t) {
  const r = At(ye(e));
  if (!r || !r.timeZone)
    throw new RangeError(Te(e));
  const { offset: n } = r, o = n ? $t(n) : void 0, [, i, a] = Wn(t);
  return Yl(r, o, i, a);
}
function $t(e) {
  const t = Ha(e);
  if (t === void 0)
    throw new RangeError(Te(e));
  return t;
}
function Jp(e) {
  const t = At(ye(e));
  if (!t || t.j)
    throw new RangeError(Te(e));
  return Ue(Zl(t));
}
function Ya(e, t, r) {
  let n = At(ye(e));
  if (!n || n.j)
    throw new RangeError(Te(e));
  return t ? n.calendar === X && (n = n.isoYear === -271821 && n.isoMonth === 4 ? {
    ...n,
    isoDay: 20,
    ...Re
  } : {
    ...n,
    isoDay: 1,
    ...Re
  }) : r && n.calendar === X && (n = {
    ...n,
    isoYear: ot
  }), ct(n.C ? Zl(n) : $l(n));
}
function Qp(e, t) {
  const r = $a(ye(t));
  if (r)
    return Za(r), qr(xa(zt(r)));
  const n = Ya(t, 1);
  return qr(Ur(e(n.calendar), n));
}
function Za(e) {
  if (e.calendar !== X)
    throw new RangeError(nt(e.calendar));
}
function Xp(e, t) {
  const r = Wa(ye(t));
  if (r)
    return Za(r), Mn(zt(r));
  const n = Ya(t, 0, 1), { calendar: o } = n, i = e(o), [a, s, c] = i.v(n), [u, d] = i.q(a, s), [f, p] = i.G(u, d, c);
  return Mn(_e(i.V(f, p, c)), o);
}
function eh(e) {
  let t, r = ((n) => {
    const o = yy.exec(n);
    return o ? (no(o[10]), Vl(o)) : void 0;
  })(ye(e));
  if (!r) {
    if (r = At(e), !r)
      throw new RangeError(Te(e));
    if (!r.C)
      throw new RangeError(Te(e));
    if (r.j)
      throw new RangeError(nt("Z"));
    Za(r);
  }
  if ((t = $a(e)) && tc(t))
    throw new RangeError(Te(e));
  if ((t = Wa(e)) && tc(t))
    throw new RangeError(Te(e));
  return Xe(vr(r, 1));
}
function th(e) {
  const t = ((r) => {
    const n = by.exec(r);
    return n ? ((o) => {
      function i(d, f, p) {
        let h = 0, m = 0;
        if (p && ([h, c] = rt(c, Ke[p])), d !== void 0) {
          if (s)
            throw new RangeError(nt(d));
          m = ((g) => {
            const b = parseInt(g);
            if (!Number.isFinite(b))
              throw new RangeError(nt(g));
            return b;
          })(d), a = 1, f && (c = Va(f) * (Ke[p] / He), s = 1);
        }
        return h + m;
      }
      let a = 0, s = 0, c = 0, u = {
        ...mr(te, [i(o[2]), i(o[3]), i(o[4]), i(o[5]), i(o[6], o[7], 5), i(o[8], o[9], 4), i(o[10], o[11], 3)]),
        ...zn(c, 2, te)
      };
      if (!a)
        throw new RangeError(Sf(te));
      return Ga(o[1]) < 0 && (u = je(u)), u;
    })(n) : void 0;
  })(ye(e));
  if (!t)
    throw new RangeError(Te(e));
  return fe(Zt(t));
}
function rh(e) {
  const t = At(e) || $a(e) || Wa(e);
  return t ? t.calendar : e;
}
function nh(e) {
  const t = At(e);
  return t && (t.timeZone || t.j && Ht || t.offset) || e;
}
function Yl(e, t, r = 0, n = 0) {
  const o = Ka(e.timeZone), i = G(o);
  let a;
  return $n(e), a = e.C ? wr(i, e, t, r, n, !i.$, e.j) : Pt(i, e), qe(a, o, so(e.calendar));
}
function Zl(e) {
  return Wl(Ae($n(e)));
}
function $l(e) {
  return Wl(_e(zt(e)));
}
function Wl(e) {
  return {
    ...e,
    calendar: so(e.calendar)
  };
}
function At(e) {
  const t = my.exec(e);
  return t ? ((r) => {
    const n = r[10], o = (n || "").toUpperCase() === "Z";
    return {
      isoYear: Hl(r),
      isoMonth: parseInt(r[4]),
      isoDay: parseInt(r[5]),
      ...Vl(r.slice(5)),
      ...no(r[16]),
      C: !!r[6],
      j: o,
      offset: o ? void 0 : n
    };
  })(t) : void 0;
}
function $a(e) {
  const t = py.exec(e);
  return t ? ((r) => ({
    isoYear: Hl(r),
    isoMonth: parseInt(r[4]),
    isoDay: 1,
    ...no(r[5])
  }))(t) : void 0;
}
function Wa(e) {
  const t = hy.exec(e);
  return t ? ((r) => ({
    isoYear: ot,
    isoMonth: parseInt(r[1]),
    isoDay: parseInt(r[2]),
    ...no(r[3])
  }))(t) : void 0;
}
function Ha(e, t) {
  const r = gy.exec(e);
  return r ? ((n, o) => {
    const i = n[4] || n[5];
    if (o && i)
      throw new RangeError(nt(i));
    return ((a) => {
      if (Math.abs(a) >= ie)
        throw new RangeError(xm);
      return a;
    })((rr(n[2]) * lo + rr(n[3]) * uo + rr(n[4]) * He + Va(n[5] || "")) * Ga(n[1]));
  })(r, t) : void 0;
}
function Hl(e) {
  const t = Ga(e[1]), r = parseInt(e[2] || e[3]);
  if (t < 0 && !r)
    throw new RangeError(nt(-0));
  return t * r;
}
function Vl(e) {
  const t = rr(e[3]);
  return {
    ...Yn(Va(e[4] || ""))[0],
    isoHour: rr(e[1]),
    isoMinute: rr(e[2]),
    isoSecond: t === 60 ? 59 : t
  };
}
function no(e) {
  let t, r;
  const n = [];
  if (e.replace(vy, ((o, i, a) => {
    const s = !!i, [c, u] = a.split("=").reverse();
    if (u) {
      if (u === "u-ca")
        n.push(c), t || (t = s);
      else if (s || /[A-Z]/.test(u))
        throw new RangeError(nt(o));
    } else {
      if (r)
        throw new RangeError(nt(o));
      r = c;
    }
    return "";
  })), n.length > 1 && t)
    throw new RangeError(nt(e));
  return {
    timeZone: r,
    calendar: n[0] || X
  };
}
function Va(e) {
  return parseInt(e.padEnd(9, "0"));
}
function Sr(e) {
  return new RegExp(`^${e}$`, "i");
}
function Ga(e) {
  return e && e !== "+" ? -1 : 1;
}
function rr(e) {
  return e === void 0 ? 0 : parseInt(e);
}
function oh(e) {
  return Ka(ye(e));
}
function Ka(e) {
  const t = Ja(e);
  return typeof t == "number" ? Gr(t) : t ? ((r) => {
    if (Sy.test(r))
      throw new RangeError(Nf(r));
    if (xy.test(r))
      throw new RangeError(wm);
    return r.toLowerCase().split("/").map(((n, o) => (n.length <= 3 || /\d/.test(n)) && !/etc|yap/.test(n) ? n.toUpperCase() : n.replace(/baja|dumont|[a-z]+/g, ((i, a) => i.length <= 2 && !o || i === "in" || i === "chat" ? i.toUpperCase() : i.length > 2 || !a ? Qs(i).replace(/island|noronha|murdo|rivadavia|urville/, Qs) : i)))).join("/");
  })(e) : Ht;
}
function bc(e) {
  const t = Ja(e);
  return typeof t == "number" ? t : t ? t.resolvedOptions().timeZone : Ht;
}
function Ja(e) {
  const t = Ha(e = e.toUpperCase(), 1);
  return t !== void 0 ? t : e !== Ht ? wy(e) : void 0;
}
function Gl(e, t) {
  return De(e.epochNanoseconds, t.epochNanoseconds);
}
function Kl(e, t) {
  return De(e.epochNanoseconds, t.epochNanoseconds);
}
function ih(e, t, r, n, o, i) {
  const a = e(Qe(i).relativeTo), s = Math.max(qt(n), qt(o));
  if (cl(te, n, o))
    return 0;
  if (zr(s, a))
    return De(he(n), he(o));
  if (!a)
    throw new RangeError(co);
  const [c, u, d] = eo(t, r, a), f = qa(d), p = to(d);
  return De(f(p(u, c, n)), f(p(u, c, o)));
}
function Jl(e, t) {
  return jr(e, t) || Qa(e, t);
}
function jr(e, t) {
  return bt(xe(e), xe(t));
}
function Qa(e, t) {
  return bt(jt(e), jt(t));
}
function ah(e, t) {
  return !Gl(e, t);
}
function sh(e, t) {
  return !Kl(e, t) && !!Ql(e.timeZone, t.timeZone) && e.calendar === t.calendar;
}
function ch(e, t) {
  return !Jl(e, t) && e.calendar === t.calendar;
}
function uh(e, t) {
  return !jr(e, t) && e.calendar === t.calendar;
}
function lh(e, t) {
  return !jr(e, t) && e.calendar === t.calendar;
}
function fh(e, t) {
  return !jr(e, t) && e.calendar === t.calendar;
}
function dh(e, t) {
  return !Qa(e, t);
}
function Ql(e, t) {
  if (e === t)
    return 1;
  try {
    return bc(e) === bc(t);
  } catch {
  }
}
function wc(e, t, r, n) {
  const o = br(e, n, 3, 5), i = oo(t.epochNanoseconds, r.epochNanoseconds, ...o);
  return fe(e ? je(i) : i);
}
function xc(e, t, r, n, o, i) {
  const a = ao(n.calendar, o.calendar), [s, c, u, d] = br(r, i, 5), f = n.epochNanoseconds, p = o.epochNanoseconds, h = De(p, f);
  let m;
  if (h)
    if (s < 6)
      m = oo(f, p, s, c, u, d);
    else {
      const g = t(((S, P) => {
        if (!Ql(S, P))
          throw new RangeError(Of);
        return S;
      })(n.timeZone, o.timeZone)), b = e(a);
      m = ef(b, g, n, o, h, s, i), m = Kn(m, p, s, c, u, d, b, n, Al, J(Ba, g));
    }
  else
    m = me;
  return fe(r ? je(m) : m);
}
function Sc(e, t, r, n, o) {
  const i = ao(r.calendar, n.calendar), [a, s, c, u] = br(t, o, 6), d = pe(r), f = pe(n), p = De(f, d);
  let h;
  if (p)
    if (a <= 6)
      h = oo(d, f, a, s, c, u);
    else {
      const m = e(i);
      h = tf(m, r, n, p, a, o), h = Kn(h, f, a, s, c, u, m, r, pe, La);
    }
  else
    h = me;
  return fe(t ? je(h) : h);
}
function jc(e, t, r, n, o) {
  const i = ao(r.calendar, n.calendar);
  return Xl(t, (() => e(i)), r, n, ...br(t, o, 6, 9, 6));
}
function Ec(e, t, r, n, o) {
  const i = ao(r.calendar, n.calendar), a = br(t, o, 9, 9, 8), s = e(i), c = Ur(s, r), u = Ur(s, n);
  return c.isoYear === u.isoYear && c.isoMonth === u.isoMonth && c.isoDay === u.isoDay ? fe(me) : Xl(t, (() => s), _e(c), _e(u), ...a, 8);
}
function Xl(e, t, r, n, o, i, a, s, c = 6) {
  const u = pe(r), d = pe(n);
  if (u === void 0 || d === void 0)
    throw new RangeError(Dt);
  let f;
  if (De(d, u))
    if (o === 6)
      f = oo(u, d, o, i, a, s);
    else {
      const p = t();
      f = p.N(r, n, o), i === c && a === 1 || (f = Kn(f, d, o, i, a, s, p, r, pe, Xn));
    }
  else
    f = me;
  return fe(e ? je(f) : f);
}
function Pc(e, t, r, n) {
  const [o, i, a, s] = br(e, n, 5, 5), c = Et(Xa(t, r), Vr(i, a), s), u = {
    ...me,
    ...ro(c, o)
  };
  return fe(e ? je(u) : u);
}
function ph(e, t, r, n, o, i) {
  const a = De(n.epochNanoseconds, r.epochNanoseconds);
  return a ? o < 6 ? rf(r.epochNanoseconds, n.epochNanoseconds, o) : ef(t, e, r, n, a, o, i) : me;
}
function hh(e, t, r, n, o) {
  const i = pe(t), a = pe(r), s = De(a, i);
  return s ? n <= 6 ? rf(i, a, n) : tf(e, t, r, s, n, o) : me;
}
function ef(e, t, r, n, o, i, a) {
  const [s, c, u] = ((p, h, m, g) => {
    function b() {
      return R = {
        ...Yt(T, k++ * -g),
        ...P
      }, B = Kr(p, R), De(O, B) === -g;
    }
    const S = ke(h, p), P = Le(ze, S), T = ke(m, p), O = m.epochNanoseconds;
    let k = 0;
    const _ = Xa(S, T);
    let R, B;
    if (Math.sign(_) === -g && k++, b() && (g === -1 || b()))
      throw new RangeError(Er);
    const L = Ge(Ve(B, O));
    return [S, R, L];
  })(t, r, n, o);
  var d, f;
  return {
    ...i === 6 ? (d = s, f = c, {
      ...me,
      days: nf(d, f)
    }) : e.N(s, c, i, a),
    ...ro(u)
  };
}
function tf(e, t, r, n, o, i) {
  const [a, s, c] = ((u, d, f) => {
    let p = d, h = Xa(u, d);
    return Math.sign(h) === -f && (p = Yt(d, -f), h += ie * f), [u, p, h];
  })(t, r, n);
  return {
    ...e.N(a, s, o, i),
    ...ro(c)
  };
}
function oo(e, t, r, n, o, i) {
  return {
    ...me,
    ...xr(Jn(Ve(e, t), n, o, i), r)
  };
}
function rf(e, t, r) {
  return {
    ...me,
    ...xr(Ve(e, t), r)
  };
}
function nf(e, t) {
  return io(xe(e), xe(t));
}
function io(e, t) {
  return Math.trunc((t - e) / Oe);
}
function Xa(e, t) {
  return jt(t) - jt(e);
}
function ao(e, t) {
  if (e !== t)
    throw new RangeError(Tf);
  return e;
}
function of(e) {
  return this.m(e)[0];
}
function af(e) {
  return this.m(e)[1];
}
function es(e) {
  const [t] = this.v(e);
  return io(this.p(t), xe(e)) + 1;
}
function ts(e) {
  const t = jy.exec(e);
  if (!t)
    throw new RangeError(vm(e));
  return [parseInt(t[1]), !!t[2]];
}
function Jr(e, t) {
  return "M" + Fe(e) + (t ? "L" : "");
}
function Cn(e, t, r) {
  return e + (t || r && e >= r ? 1 : 0);
}
function rs(e, t) {
  return e - (t && e >= t ? 1 : 0);
}
function sf(e, t) {
  return (t + e) * (Math.sign(t) || 1) || 0;
}
function zi(e) {
  return Ff[uf(e)];
}
function cf(e) {
  return km[uf(e)];
}
function uf(e) {
  return Ut(e.id || X);
}
function mh(e) {
  function t(o) {
    return ((i, a) => ({
      ...lf(i, a),
      o: i.month,
      day: parseInt(i.day)
    }))(ja(r, o), n);
  }
  const r = Ts(e), n = Ut(e);
  return {
    id: e,
    h: yh(t),
    l: gh(t)
  };
}
function yh(e) {
  return Ie(((t) => {
    const r = xe(t);
    return e(r);
  }), WeakMap);
}
function gh(e) {
  const t = e(0).year - $m;
  return Ie(((r) => {
    let n, o = yr(r - t), i = 0;
    const a = [], s = [];
    do
      o += 400 * Oe;
    while ((n = e(o)).year <= r);
    do
      if (o += (1 - n.day) * Oe, n.year === r && (a.push(o), s.push(n.o)), o -= Oe, ++i > 100 || o < -ys)
        throw new RangeError(Er);
    while ((n = e(o)).year >= r);
    return {
      i: a.reverse(),
      u: Af(s.reverse())
    };
  }));
}
function lf(e, t) {
  let r, n, o = ff(e);
  if (e.era) {
    const i = Ff[t], a = Bf[t] || {};
    i !== void 0 && (r = t === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), r === "bc" || r === "b" ? r = "bce" : r === "ad" || r === "a" ? r = "ce" : r === "beforeroc" && (r = "broc"), r = a[r] || r, n = o, o = sf(n, i[r] || 0));
  }
  return {
    era: r,
    eraYear: n,
    year: o
  };
}
function ff(e) {
  return parseInt(e.relatedYear || e.year);
}
function kn(e) {
  const { year: t, o: r, day: n } = this.h(e), { u: o } = this.l(t);
  return [t, o[r] + 1, n];
}
function Yr(e, t = 1, r = 1) {
  return this.l(e).i[t - 1] + (r - 1) * Oe;
}
function df(e, t) {
  const r = En.call(this, e);
  return [rs(t, r), r === t];
}
function En(e) {
  const t = Nc(this, e), r = Nc(this, e - 1), n = t.length;
  if (n > r.length) {
    const o = cf(this);
    if (o < 0)
      return -o;
    for (let i = 0; i < n; i++)
      if (t[i] !== r[i])
        return i + 1;
  }
}
function gn(e) {
  return io(Yr.call(this, e), Yr.call(this, e + 1));
}
function Tc(e, t) {
  const { i: r } = this.l(e);
  let n = t + 1, o = r;
  return n > r.length && (n = 1, o = this.l(e + 1).i), io(r[t - 1], o[n - 1]);
}
function vn(e) {
  return this.l(e).i.length;
}
function pf(e) {
  const t = this.h(e);
  return [t.era, t.eraYear];
}
function Nc(e, t) {
  return Object.keys(e.l(t).u);
}
function Qr(e) {
  return so(ye(e));
}
function so(e) {
  if ((e = e.toLowerCase()) !== X && e !== Pr) {
    const t = Ts(e).resolvedOptions().calendar;
    if (Ut(e) !== Ut(t))
      throw new RangeError(Pf(e));
    return t;
  }
  return e;
}
function Ut(e) {
  return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function hf(e, t) {
  return (r) => r === X ? e : r === Pr || r === Tt ? Object.assign(Object.create(e), {
    id: r
  }) : Object.assign(Object.create(t), Ey(r));
}
function vh(e, t, r, n) {
  const o = Rt(r, n, ft, [], Df);
  if (o.timeZone !== void 0) {
    const i = r.F(o), a = Xr(o), s = e(o.timeZone);
    return {
      epochNanoseconds: wr(t(s), {
        ...i,
        ...a
      }, o.offset !== void 0 ? $t(o.offset) : void 0),
      timeZone: s
    };
  }
  return {
    ...r.F(o),
    ...Re
  };
}
function bh(e, t, r, n, o, i) {
  const a = Rt(r, o, ft, Mf, Df), s = e(a.timeZone), [c, u, d] = Wn(i), f = r.F(a, Gn(c)), p = Xr(a, c);
  return qe(wr(t(s), {
    ...f,
    ...p
  }, a.offset !== void 0 ? $t(a.offset) : void 0, u, d), s, n);
}
function wh(e, t, r) {
  const n = Rt(e, t, ft, [], lt), o = ee(r);
  return Ue(Ae({
    ...e.F(n, Gn(o)),
    ...Xr(n, o)
  }));
}
function xh(e, t, r, n = []) {
  const o = Rt(e, t, ft, n);
  return e.F(o, r);
}
function Sh(e, t, r, n) {
  const o = Rt(e, t, us, n);
  return e.K(o, r);
}
function jh(e, t, r, n) {
  const o = Rt(e, r, ft, tn);
  return t && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = ot), e._(o, n);
}
function Eh(e, t) {
  return Xe(Xr(Ce(e, Wi, [], 1), ee(t)));
}
function Ph(e) {
  const t = Ce(e, ls);
  return fe(Zt({
    ...me,
    ...t
  }));
}
function Rt(e, t, r, n = [], o = []) {
  return Ce(t, [...e.fields(r), ...o].sort(), n);
}
function Ce(e, t, r, n = !r) {
  const o = {};
  let i, a = 0;
  for (const s of t) {
    if (s === i)
      throw new RangeError(lm(s));
    if (s === "constructor" || s === "__proto__")
      throw new RangeError(um(s));
    let c = e[s];
    if (c !== void 0)
      a = 1, Ac[s] && (c = Ac[s](c, s)), o[s] = c;
    else if (r) {
      if (r.includes(s))
        throw new TypeError(os(s));
      o[s] = _f[s];
    }
    i = s;
  }
  if (n && !a)
    throw new TypeError(Sf(t));
  return o;
}
function Xr(e, t) {
  return vr(Ns({
    ..._f,
    ...e
  }), t);
}
function Th(e, t, r, n, o) {
  const { calendar: i, timeZone: a } = r, s = e(i), c = t(a), u = [...s.fields(ft), ...If].sort(), d = ((S) => {
    const P = ke(S, G), T = Gr(P.offsetNanoseconds), O = ho(S.calendar), [k, _, R] = O.v(P), [B, L] = O.q(k, _), W = Jr(B, L);
    return {
      ...Iy(P),
      year: k,
      monthCode: W,
      day: R,
      offset: T
    };
  })(r), f = Ce(n, u), p = s.k(d, f), h = {
    ...d,
    ...f
  }, [m, g, b] = Wn(o, 2);
  return qe(wr(c, {
    ...s.F(p, Gn(m)),
    ...vr(Ns(h), m)
  }, $t(h.offset), g, b), a, i);
}
function Nh(e, t, r, n) {
  const o = e(t.calendar), i = [...o.fields(ft), ...lt].sort(), a = {
    ...yf(s = t),
    hour: s.isoHour,
    minute: s.isoMinute,
    second: s.isoSecond,
    millisecond: s.isoMillisecond,
    microsecond: s.isoMicrosecond,
    nanosecond: s.isoNanosecond
  };
  var s;
  const c = Ce(r, i), u = ee(n), d = o.k(a, c), f = {
    ...a,
    ...c
  };
  return Ue(Ae({
    ...o.F(d, Gn(u)),
    ...vr(Ns(f), u)
  }));
}
function Oh(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(ft).sort(), a = yf(t), s = Ce(r, i), c = o.k(a, s);
  return o.F(c, n);
}
function Ah(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(us).sort(), a = ((u) => {
    const d = ho(u.calendar), [f, p] = d.v(u), [h, m] = d.q(f, p);
    return {
      year: f,
      monthCode: Jr(h, m)
    };
  })(t), s = Ce(r, i), c = o.k(a, s);
  return o.K(c, n);
}
function Rh(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(ft).sort(), a = ((u) => {
    const d = ho(u.calendar), [f, p, h] = d.v(u), [m, g] = d.q(f, p);
    return {
      monthCode: Jr(m, g),
      day: h
    };
  })(t), s = Ce(r, i), c = o.k(a, s);
  return o._(c, n);
}
function Mh(e, t, r) {
  return Xe(((n, o, i) => Xr({
    ...Le(Wi, n),
    ...Ce(o, Wi)
  }, ee(i)))(e, t, r));
}
function Ih(e, t) {
  return fe((r = e, n = t, Zt({
    ...r,
    ...Ce(n, ls)
  })));
  var r, n;
}
function mf(e, t, r, n, o) {
  t = Le(r = e.fields(r), t), n = Ce(n, o = e.fields(o), []);
  let i = e.k(t, n);
  return i = Ce(i, [...r, ...o].sort(), []), e.F(i);
}
function xo(e, t) {
  const r = zi(e), n = Bf[e.id || ""] || {};
  let { era: o, eraYear: i, year: a } = t;
  if (o !== void 0 || i !== void 0) {
    if (o === void 0 || i === void 0)
      throw new TypeError(hm);
    if (!r)
      throw new RangeError(pm);
    const s = r[n[o] || o];
    if (s === void 0)
      throw new RangeError(ym(o));
    const c = sf(i, s);
    if (a !== void 0 && a !== c)
      throw new RangeError(mm);
    a = c;
  } else if (a === void 0)
    throw new TypeError(gm(r));
  return a;
}
function bn(e, t, r, n) {
  let { month: o, monthCode: i } = t;
  if (i !== void 0) {
    const a = ((s, c, u, d) => {
      const f = s.L(u), [p, h] = ts(c);
      let m = Cn(p, h, f);
      if (h) {
        const g = cf(s);
        if (g === void 0)
          throw new RangeError(Mr);
        if (g > 0) {
          if (m > g)
            throw new RangeError(Mr);
          if (f === void 0) {
            if (d === 1)
              throw new RangeError(Mr);
            m--;
          }
        } else {
          if (m !== -g)
            throw new RangeError(Mr);
          if (f === void 0 && d === 1)
            throw new RangeError(Mr);
        }
      }
      return m;
    })(e, i, r, n);
    if (o !== void 0 && o !== a)
      throw new RangeError(bm);
    o = a, n = 1;
  } else if (o === void 0)
    throw new TypeError(Ef);
  return it("month", o, 1, e.B(r), n);
}
function So(e, t, r, n, o) {
  return Pe(t, "day", 1, e.U(n, r), o);
}
function jo(e, t, r, n) {
  let o = 0;
  const i = [];
  for (const a of r)
    t[a] !== void 0 ? o = 1 : i.push(a);
  if (Object.assign(e, t), o)
    for (const a of n || i)
      delete e[a];
}
function yf(e) {
  const t = ho(e.calendar), [r, n, o] = t.v(e), [i, a] = t.q(r, n);
  return {
    year: r,
    monthCode: Jr(i, a),
    day: o
  };
}
function Dh(e) {
  return st(Je(ba(ya(e))));
}
function Ch(e, t, r, n, o = X) {
  return qe(Je(ba(ya(r))), t(n), e(o));
}
function kh(e, t, r, n, o = 0, i = 0, a = 0, s = 0, c = 0, u = 0, d = X) {
  return Ue(Ae($n(at(we, mr(fo, [t, r, n, o, i, a, s, c, u])))), e(d));
}
function _h(e, t, r, n, o = X) {
  return ct(_e(zt(at(we, {
    isoYear: t,
    isoMonth: r,
    isoDay: n
  }))), e(o));
}
function Fh(e, t, r, n = X, o = 1) {
  const i = we(t), a = we(r), s = e(n);
  return qr(xa(zt({
    isoYear: i,
    isoMonth: a,
    isoDay: we(o)
  })), s);
}
function Bh(e, t, r, n = X, o = ot) {
  const i = we(t), a = we(r), s = e(n);
  return Mn(_e(zt({
    isoYear: we(o),
    isoMonth: i,
    isoDay: a
  })), s);
}
function Lh(e = 0, t = 0, r = 0, n = 0, o = 0, i = 0) {
  return Xe(vr(at(we, mr(ze, [e, t, r, n, o, i])), 1));
}
function qh(e = 0, t = 0, r = 0, n = 0, o = 0, i = 0, a = 0, s = 0, c = 0, u = 0) {
  return fe(Zt(at(ga, mr(te, [e, t, r, n, o, i, a, s, c, u]))));
}
function Uh(e, t, r = X) {
  return qe(e.epochNanoseconds, t, r);
}
function zh(e) {
  return st(e.epochNanoseconds);
}
function gf(e, t) {
  return Ue(ke(t, e));
}
function vf(e, t) {
  return ct(ke(t, e));
}
function bf(e, t) {
  return Xe(ke(t, e));
}
function Yh(e, t, r, n) {
  const o = ((i, a, s, c) => {
    const u = ((d) => Wf(Qe(d)))(c);
    return Kr(i(a), s, u);
  })(e, r, t, n);
  return qe(Je(o), r, t.calendar);
}
function Zh(e, t, r, n, o) {
  const i = e(o.timeZone), a = o.plainTime, s = a !== void 0 ? t(a) : void 0, c = r(i);
  let u;
  return u = s ? Kr(c, {
    ...n,
    ...s
  }) : Pt(c, {
    ...n,
    ...Re
  }), qe(u, i, n.calendar);
}
function $h(e, t = Re) {
  return Ue(Ae({
    ...e,
    ...t
  }));
}
function Wh(e, t, r) {
  return ((n, o) => {
    const i = Rt(n, o, Cf);
    return n.K(i, void 0);
  })(e(t.calendar), r);
}
function Hh(e, t, r) {
  return ((n, o) => {
    const i = Rt(n, o, kf);
    return n._(i);
  })(e(t.calendar), r);
}
function Vh(e, t, r, n) {
  return ((o, i, a) => mf(o, i, Cf, Hr(a), tn))(e(t.calendar), r, n);
}
function Gh(e, t, r, n) {
  return ((o, i, a) => mf(o, i, kf, Hr(a), as))(e(t.calendar), r, n);
}
function Kh(e) {
  return st(Je(An(ga(e), ut)));
}
function Jh(e) {
  return st(Je(ba(ya(e))));
}
function Wt(e, t, r) {
  const n = new Set(r);
  return (o, i) => {
    const a = r && Js(o, r);
    if (!Js(o = ((s, c) => {
      const u = {};
      for (const d in c)
        s.has(d) || (u[d] = c[d]);
      return u;
    })(n, o), e)) {
      if (i && a)
        throw new TypeError("Invalid formatting options");
      o = {
        ...t,
        ...o
      };
    }
    return r && (o.timeZone = Ht, ["full", "long"].includes(o.J) && (o.J = "medium")), o;
  };
}
function Mt(e, t = wf, r = 0) {
  const [n, , , o] = e;
  return (i, a = Jy, ...s) => {
    const c = t(o && o(...s), i, a, n, r), u = c.resolvedOptions();
    return [c, ...Qh(e, u, s)];
  };
}
function wf(e, t, r, n, o) {
  if (r = n(r, o), e) {
    if (r.timeZone !== void 0)
      throw new TypeError(Mm);
    r.timeZone = e;
  }
  return new wt(t, r);
}
function Qh(e, t, r) {
  const [, n, o] = e;
  return r.map(((i) => (i.calendar && ((a, s, c) => {
    if ((c || a !== X) && a !== s)
      throw new RangeError(Tf);
  })(i.calendar, t.calendar, o), n(i, t))));
}
function Xh(e, t, r) {
  const n = t.timeZone, o = e(n), i = {
    ...ke(t, o),
    ...r || Re
  };
  let a;
  return a = r ? wr(o, i, i.offsetNanoseconds, 2) : Pt(o, i), qe(a, n, t.calendar);
}
function em(e, t = Re) {
  return Ue(Ae({
    ...e,
    ...t
  }));
}
function ns(e, t) {
  return {
    ...e,
    calendar: t
  };
}
function tm(e, t) {
  return {
    ...e,
    timeZone: t
  };
}
function Eo(e) {
  const t = Yi();
  return gr(t, e.R(t));
}
function Yi() {
  return An(Date.now(), ut);
}
function Rr() {
  return Rc || (Rc = new wt().resolvedOptions().timeZone);
}
const rm = (e, t) => `Non-integer ${e}: ${t}`, nm = (e, t) => `Non-positive ${e}: ${t}`, om = (e, t) => `Non-finite ${e}: ${t}`, im = (e) => `Cannot convert bigint to ${e}`, am = (e) => `Invalid bigint: ${e}`, sm = "Cannot convert Symbol to string", cm = "Invalid object", xf = (e, t, r, n, o) => o ? xf(e, o[t], o[r], o[n]) : It(e, t) + `; must be between ${r}-${n}`, It = (e, t) => `Invalid ${e}: ${t}`, os = (e) => `Missing ${e}`, um = (e) => `Invalid field ${e}`, lm = (e) => `Duplicate field ${e}`, Sf = (e) => "No valid fields: " + e.join(), fm = "Invalid bag", jf = (e, t, r) => It(e, t) + "; must be " + Object.keys(r).join(), dm = "Cannot use valueOf", Zi = "Invalid calling context", pm = "Forbidden era/eraYear", hm = "Mismatching era/eraYear", mm = "Mismatching year/eraYear", ym = (e) => `Invalid era: ${e}`, gm = (e) => "Missing year" + (e ? "/era/eraYear" : ""), vm = (e) => `Invalid monthCode: ${e}`, bm = "Mismatching month/monthCode", Ef = "Missing month/monthCode", Mr = "Invalid leap month", Er = "Invalid protocol results", Pf = (e) => It("Calendar", e), Tf = "Mismatching Calendars", Nf = (e) => It("TimeZone", e), Of = "Mismatching TimeZones", wm = "Forbidden ICU TimeZone", xm = "Out-of-bounds offset", Sm = "Out-of-bounds TimeZone gap", jm = "Invalid TimeZone offset", Em = "Ambiguous offset", Dt = "Out-of-bounds date", Pm = "Out-of-bounds duration", Tm = "Cannot mix duration signs", co = "Missing relativeTo", Nm = "Cannot use large units", Om = "Required smallestUnit or largestUnit", Am = "smallestUnit > largestUnit", Te = (e) => `Cannot parse: ${e}`, nt = (e) => `Invalid substring: ${e}`, Rm = (e) => `Cannot format ${e}`, Po = "Mismatching types for formatting", Mm = "Cannot specify TimeZone", Af = /* @__PURE__ */ J(qn, ((e, t) => t)), ur = /* @__PURE__ */ J(qn, ((e, t, r) => r)), Fe = /* @__PURE__ */ J(On, 2), $i = {
  nanosecond: 0,
  microsecond: 1,
  millisecond: 2,
  second: 3,
  minute: 4,
  hour: 5,
  day: 6,
  week: 7,
  month: 8,
  year: 9
}, is = /* @__PURE__ */ Object.keys($i), Oe = 864e5, Rf = 1e3, en = 1e3, ut = 1e6, He = 1e9, uo = 6e10, lo = 36e11, ie = 864e11, Ke = [1, en, ut, He, uo, lo, ie], lt = /* @__PURE__ */ is.slice(0, 6), Wi = /* @__PURE__ */ Wr(lt), Im = ["offset"], Mf = ["timeZone"], If = /* @__PURE__ */ lt.concat(Im), Df = /* @__PURE__ */ If.concat(Mf), Hi = ["era", "eraYear"], Dm = /* @__PURE__ */ Hi.concat(["year"]), as = ["year"], ss = ["monthCode"], cs = /* @__PURE__ */ ["month"].concat(ss), tn = ["day"], us = /* @__PURE__ */ cs.concat(as), Cf = /* @__PURE__ */ ss.concat(as), ft = /* @__PURE__ */ tn.concat(us), Cm = /* @__PURE__ */ tn.concat(cs), kf = /* @__PURE__ */ tn.concat(ss), _f = /* @__PURE__ */ ur(lt, 0), X = "iso8601", Pr = "gregory", Tt = "japanese", Ff = {
  [Pr]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [Tt]: {
    "japanese-inverse": -1,
    japanese: 0,
    meiji: 1867,
    taisho: 1911,
    showa: 1925,
    heisei: 1988,
    reiwa: 2018
  },
  ethiopic: {
    ethioaa: 0,
    ethiopic: 5500
  },
  coptic: {
    "coptic-inverse": -1,
    coptic: 0
  },
  roc: {
    "roc-inverse": -1,
    roc: 0
  },
  buddhist: {
    be: 0
  },
  islamic: {
    ah: 0
  },
  indian: {
    saka: 0
  },
  persian: {
    ap: 0
  }
}, Bf = {
  [Pr]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [Tt]: {
    bce: "japanese-inverse",
    ce: "japanese"
  },
  ethiopic: {
    era0: "ethioaa",
    era1: "ethiopic"
  },
  coptic: {
    era0: "coptic-inverse",
    era1: "coptic"
  },
  roc: {
    broc: "roc-inverse",
    minguo: "roc"
  }
}, km = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, ye = /* @__PURE__ */ J(ha, "string"), _m = /* @__PURE__ */ J(ha, "boolean"), Fm = /* @__PURE__ */ J(ha, "number"), te = /* @__PURE__ */ is.map(((e) => e + "s")), ls = /* @__PURE__ */ Wr(te), Bm = /* @__PURE__ */ te.slice(0, 6), Lf = /* @__PURE__ */ te.slice(6), Lm = /* @__PURE__ */ Lf.slice(1), qm = /* @__PURE__ */ Af(te), me = /* @__PURE__ */ ur(te, 0), fs = /* @__PURE__ */ ur(Bm, 0), ds = /* @__PURE__ */ J(ul, te), ze = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], ps = ["isoDay", "isoMonth", "isoYear"], fo = /* @__PURE__ */ ze.concat(ps), hs = /* @__PURE__ */ Wr(ps), qf = /* @__PURE__ */ Wr(ze), Um = /* @__PURE__ */ Wr(fo), Re = /* @__PURE__ */ ur(qf, 0), zm = /* @__PURE__ */ J(ul, fo), ms = 1e8, ys = ms * Oe, Ym = [ms, 0], Zm = [-ms, 0], Zr = 275760, $r = -271821, wt = Intl.DateTimeFormat, Uf = "en-GB", $m = 1970, ot = 1972, pt = 12, Wm = /* @__PURE__ */ yr(1868, 9, 8), Hm = /* @__PURE__ */ Ie(Op, WeakMap), _n = "smallestUnit", Vi = "unit", kr = "roundingIncrement", To = "fractionalSecondDigits", zf = "relativeTo", No = "direction", Yf = {
  constrain: 0,
  reject: 1
}, Vm = /* @__PURE__ */ Object.keys(Yf), Gm = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, Km = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, Jm = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, Qm = {
  auto: 0,
  never: 1,
  critical: 2
}, Xm = {
  auto: 0,
  never: 1
}, ey = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, ty = {
  previous: -1,
  next: 1
}, rn = /* @__PURE__ */ J(Ra, _n), Zf = /* @__PURE__ */ J(Ra, "largestUnit"), ry = /* @__PURE__ */ J(Ra, Vi), $f = /* @__PURE__ */ J(Nt, "overflow", Yf), Wf = /* @__PURE__ */ J(Nt, "disambiguation", Gm), ny = /* @__PURE__ */ J(Nt, "offset", Km), gs = /* @__PURE__ */ J(Nt, "calendarName", Jm), oy = /* @__PURE__ */ J(Nt, "timeZoneName", Qm), iy = /* @__PURE__ */ J(Nt, "offset", Xm), nn = /* @__PURE__ */ J(Nt, "roundingMode", ey), vs = "PlainYearMonth", bs = "PlainMonthDay", on = "PlainDate", Tr = "PlainDateTime", ws = "PlainTime", Ct = "ZonedDateTime", xs = "Instant", Ss = "Duration", ay = [Math.floor, (e) => yn(e) ? Math.floor(e) : Math.round(e), Math.ceil, (e) => yn(e) ? Math.ceil(e) : Math.round(e), Math.trunc, (e) => yn(e) ? Math.trunc(e) || 0 : Math.round(e), (e) => e < 0 ? Math.floor(e) : Math.ceil(e), (e) => Math.sign(e) * Math.round(Math.abs(e)) || 0, (e) => yn(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)], Ht = "UTC", Pn = 5184e3, sy = /* @__PURE__ */ Rn(1847), cy = /* @__PURE__ */ Rn(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), uy = /0+$/, ke = /* @__PURE__ */ Ie(Yp, WeakMap), Oc = 2 ** 32 - 1, G = /* @__PURE__ */ Ie(((e) => {
  const t = Ja(e);
  return typeof t == "object" ? new fy(t) : new ly(t || 0);
}));
class ly {
  constructor(t) {
    this.$ = t;
  }
  R() {
    return this.$;
  }
  I(t) {
    return ((r) => {
      const n = pe({
        ...r,
        ...Re
      });
      if (!n || Math.abs(n[0]) > 1e8)
        throw new RangeError(Dt);
    })(t), [Sa(t, this.$)];
  }
  O() {
  }
}
class fy {
  constructor(t) {
    this.nn = ((r) => {
      function n(u) {
        const d = Lr(u, s, c), [f, p] = vc(d), h = i(f), m = i(p);
        return h === m ? h : o(a(f, p), h, m, u);
      }
      function o(u, d, f, p) {
        let h, m;
        for (; (p === void 0 || (h = p < u[0] ? d : p >= u[1] ? f : void 0) === void 0) && (m = u[1] - u[0]); ) {
          const g = u[0] + Math.floor(m / 2);
          r(g) === f ? u[1] = g : u[0] = g + 1;
        }
        return h;
      }
      const i = Ie(r), a = Ie(Hp);
      let s = sy, c = cy;
      return {
        tn(u) {
          const d = n(u - 86400), f = n(u + 86400), p = u - d, h = u - f;
          if (d === f)
            return [p];
          const m = n(p);
          return m === n(h) ? [u - m] : d > f ? [p, h] : [];
        },
        rn: n,
        O(u, d) {
          const f = Lr(u, s, c);
          let [p, h] = vc(f);
          const m = Pn * d, g = d < 0 ? () => h > s || (s = f, 0) : () => p < c || (c = f, 0);
          for (; g(); ) {
            const b = i(p), S = i(h);
            if (b !== S) {
              const P = a(p, h);
              o(P, b, S);
              const T = P[0];
              if ((bt(T, u) || 1) === d)
                return T;
            }
            p += m, h += m;
          }
        }
      };
    })(/* @__PURE__ */ ((r) => (n) => {
      const o = ja(r, n * Rf);
      return Rn(ff(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - n;
    })(t));
  }
  R(t) {
    return this.nn.rn(((r) => ec(r)[0])(t)) * He;
  }
  I(t) {
    const [r, n] = [Rn((o = t).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * ut + o.isoMicrosecond * en + o.isoNanosecond];
    var o;
    return this.nn.tn(r).map(((i) => Je(Lt(An(i, He), n))));
  }
  O(t, r) {
    const [n, o] = ec(t), i = this.nn.O(n + (r > 0 || o ? 1 : 0), r);
    if (i !== void 0)
      return An(i, He);
  }
}
const js = "([+-])", Tn = "(?:[.,](\\d{1,9}))?", Hf = `(?:(?:${js}(\\d{6}))|(\\d{4}))-?(\\d{2})`, Es = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Tn + ")?)?", Ps = js + Es, dy = Hf + "-?(\\d{2})(?:[T ]" + Es + "(Z|" + Ps + ")?)?", Vf = "\\[(!?)([^\\]]*)\\]", po = `((?:${Vf}){0,9})`, py = /* @__PURE__ */ Sr(Hf + po), hy = /* @__PURE__ */ Sr("(?:--)?(\\d{2})-?(\\d{2})" + po), my = /* @__PURE__ */ Sr(dy + po), yy = /* @__PURE__ */ Sr("T?" + Es + "(?:" + Ps + ")?" + po), gy = /* @__PURE__ */ Sr(Ps), vy = /* @__PURE__ */ new RegExp(Vf, "g"), by = /* @__PURE__ */ Sr(`${js}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Tn}H)?(?:(\\d+)${Tn}M)?(?:(\\d+)${Tn}S)?)?`), wy = /* @__PURE__ */ Ie(((e) => new wt(Uf, {
  timeZone: e,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}))), xy = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Sy = /[^\w\/:+-]+/, jy = /^M(\d{2})(L?)$/, Ey = /* @__PURE__ */ Ie(mh), Ts = /* @__PURE__ */ Ie(((e) => new wt(Uf, {
  calendar: e,
  timeZone: Ht,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
}))), Gf = {
  P(e, t, r) {
    const n = ee(r);
    let o, { years: i, months: a, weeks: s, days: c } = t;
    if (c += he(t, 5)[0], i || a)
      o = ((u, d, f, p, h) => {
        let [m, g, b] = u.v(d);
        if (f) {
          const [S, P] = u.q(m, g);
          m += f, g = Cn(S, P, u.L(m)), g = it("month", g, 1, u.B(m), h);
        }
        return p && ([m, g] = u.un(m, g, p)), b = it("day", b, 1, u.U(m, g), h), u.p(m, g, b);
      })(this, e, i, a, n);
    else {
      if (!s && !c)
        return e;
      o = xe(e);
    }
    if (o === void 0)
      throw new RangeError(Dt);
    return o += (7 * s + c) * Oe, _e(Zn(o));
  },
  N(e, t, r) {
    if (r <= 7) {
      let c = 0, u = nf({
        ...e,
        ...Re
      }, {
        ...t,
        ...Re
      });
      return r === 7 && ([c, u] = St(u, 7)), {
        ...me,
        weeks: c,
        days: u
      };
    }
    const n = this.v(e), o = this.v(t);
    let [i, a, s] = ((c, u, d, f, p, h, m) => {
      let g = p - u, b = h - d, S = m - f;
      if (g || b) {
        const P = Math.sign(g || b);
        let T = c.U(p, h), O = 0;
        if (Math.sign(S) === -P) {
          const k = T;
          [p, h] = c.un(p, h, -P), g = p - u, b = h - d, T = c.U(p, h), O = P < 0 ? -k : T;
        }
        if (S = m - Math.min(f, T) + O, g) {
          const [k, _] = c.q(u, d), [R, B] = c.q(p, h);
          if (b = R - k || Number(B) - Number(_), Math.sign(b) === -P) {
            const L = P < 0 && -c.B(p);
            g = (p -= P) - u, b = h - Cn(k, _, c.L(p)) + (L || c.B(p));
          }
        }
      }
      return [g, b, S];
    })(this, ...n, ...o);
    return r === 8 && (a += this.cn(i, n[0]), i = 0), {
      ...me,
      years: i,
      months: a,
      days: s
    };
  },
  F(e, t) {
    const r = ee(t), n = xo(this, e), o = bn(this, e, n, r), i = So(this, e, o, n, r);
    return ct(_e(this.V(n, o, i)), this.id || X);
  },
  K(e, t) {
    const r = ee(t), n = xo(this, e), o = bn(this, e, n, r);
    return qr(xa(this.V(n, o, 1)), this.id || X);
  },
  _(e, t) {
    const r = ee(t);
    let n, o, i, a = e.eraYear !== void 0 || e.year !== void 0 ? xo(this, e) : void 0;
    const s = !this.id;
    if (a === void 0 && s && (a = ot), a !== void 0) {
      const f = bn(this, e, a, r);
      n = So(this, e, f, a, r);
      const p = this.L(a);
      o = rs(f, p), i = f === p;
    } else {
      if (e.monthCode === void 0)
        throw new TypeError(Ef);
      if ([o, i] = ts(e.monthCode), this.id && this.id !== Pr && this.id !== Tt)
        if (this.id && Ut(this.id) === "coptic" && r === 0) {
          const f = i || o !== 13 ? 30 : 6;
          n = e.day, n = Lr(n, 1, f);
        } else if (this.id && Ut(this.id) === "chinese" && r === 0) {
          const f = !i || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
          n = e.day, n = Lr(n, 1, f);
        } else
          n = e.day;
      else
        n = So(this, e, bn(this, e, ot, r), ot, r);
    }
    const c = this.G(o, i, n);
    if (!c)
      throw new RangeError("Cannot guess year");
    const [u, d] = c;
    return Mn(_e(this.V(u, d, n)), this.id || X);
  },
  fields(e) {
    return zi(this) && e.includes("year") ? [...e, ...Hi] : e;
  },
  k(e, t) {
    const r = Object.assign(/* @__PURE__ */ Object.create(null), e);
    return jo(r, t, cs), zi(this) && (jo(r, t, Dm), this.id === Tt && jo(r, t, Cm, Hi)), r;
  },
  inLeapYear(e) {
    const [t] = this.v(e);
    return this.sn(t);
  },
  monthsInYear(e) {
    const [t] = this.v(e);
    return this.B(t);
  },
  daysInMonth(e) {
    const [t, r] = this.v(e);
    return this.U(t, r);
  },
  daysInYear(e) {
    const [t] = this.v(e);
    return this.fn(t);
  },
  dayOfYear: es,
  era(e) {
    return this.hn(e)[0];
  },
  eraYear(e) {
    return this.hn(e)[1];
  },
  monthCode(e) {
    const [t, r] = this.v(e), [n, o] = this.q(t, r);
    return Jr(n, o);
  },
  dayOfWeek: Sl,
  daysInWeek() {
    return 7;
  }
}, Py = {
  v: Ea,
  hn: jl,
  q: vl
}, Ty = {
  dayOfYear: es,
  v: Ea,
  p: yr
}, Ny = /* @__PURE__ */ Object.assign({}, Ty, {
  weekOfYear: of,
  yearOfWeek: af,
  m(e) {
    function t(h) {
      return (7 - h < n ? 7 : 0) - h;
    }
    function r(h) {
      const m = xl(p + h), g = h || 1, b = t(Cr(c + m * g, 7));
      return d = (m + (b - u) * g) / 7;
    }
    const n = this.id ? 1 : 4, o = Sl(e), i = this.dayOfYear(e), a = Cr(o - 1, 7), s = i - 1, c = Cr(a - s, 7), u = t(c);
    let d, f = Math.floor((s - u) / 7) + 1, p = e.isoYear;
    return f ? f > r(0) && (f = 1, p++) : (f = r(-1), p--), [f, p, d];
  }
}), Oy = /* @__PURE__ */ Object.assign({}, Gf, Ny, {
  v: Ea,
  hn: jl,
  q: vl,
  G(e, t) {
    if (!t)
      return [ot, e];
  },
  sn: Pa,
  L() {
  },
  B: bl,
  cn: (e) => e * pt,
  U: wl,
  fn: xl,
  V: (e, t, r) => ({
    isoYear: e,
    isoMonth: t,
    isoDay: r
  }),
  p: yr,
  un: (e, t, r) => (e += Un(r, pt), (t += da(r, pt)) < 1 ? (e--, t += pt) : t > pt && (e++, t -= pt), [e, t]),
  year(e) {
    return e.isoYear;
  },
  month(e) {
    return e.isoMonth;
  },
  day: (e) => e.isoDay
}), Ay = {
  v: kn,
  hn: pf,
  q: df
}, Ry = {
  dayOfYear: es,
  v: kn,
  p: Yr,
  weekOfYear: of,
  yearOfWeek: af,
  m() {
    return [];
  }
}, My = /* @__PURE__ */ Object.assign({}, Gf, Ry, {
  v: kn,
  hn: pf,
  q: df,
  G(e, t, r) {
    const n = this.id && Ut(this.id) === "chinese" ? ((u, d, f) => {
      if (d)
        switch (u) {
          case 1:
            return 1651;
          case 2:
            return f < 30 ? 1947 : 1765;
          case 3:
            return f < 30 ? 1966 : 1955;
          case 4:
            return f < 30 ? 1963 : 1944;
          case 5:
            return f < 30 ? 1971 : 1952;
          case 6:
            return f < 30 ? 1960 : 1941;
          case 7:
            return f < 30 ? 1968 : 1938;
          case 8:
            return f < 30 ? 1957 : 1718;
          case 9:
            return 1832;
          case 10:
            return 1870;
          case 11:
            return 1814;
          case 12:
            return 1890;
        }
      return 1972;
    })(e, t, r) : ot;
    let [o, i, a] = kn.call(this, {
      isoYear: n,
      isoMonth: pt,
      isoDay: 31
    });
    const s = En.call(this, o), c = i === s;
    (bt(e, rs(i, s)) || bt(Number(t), Number(c)) || bt(r, a)) === 1 && o--;
    for (let u = 0; u < 100; u++) {
      const d = o - u, f = En.call(this, d), p = Cn(e, t, f);
      if (t === (p === f) && r <= Tc.call(this, d, p))
        return [d, p];
    }
  },
  sn(e) {
    const t = gn.call(this, e);
    return t > gn.call(this, e - 1) && t > gn.call(this, e + 1);
  },
  L: En,
  B: vn,
  cn(e, t) {
    const r = t + e, n = Math.sign(e), o = n < 0 ? -1 : 0;
    let i = 0;
    for (let a = t; a !== r; a += n)
      i += vn.call(this, a + o);
    return i;
  },
  U: Tc,
  fn: gn,
  V(e, t, r) {
    return Zn(Yr.call(this, e, t, r));
  },
  p: Yr,
  un(e, t, r) {
    if (r) {
      if (t += r, !Number.isSafeInteger(t))
        throw new RangeError(Dt);
      if (r < 0)
        for (; t < 1; )
          t += vn.call(this, --e);
      else {
        let n;
        for (; t > (n = vn.call(this, e)); )
          t -= n, e++;
      }
    }
    return [e, t];
  },
  year(e) {
    return this.h(e).year;
  },
  month(e) {
    const { year: t, o: r } = this.h(e), { u: n } = this.l(t);
    return n[r] + 1;
  },
  day(e) {
    return this.h(e).day;
  }
}), ho = /* @__PURE__ */ hf(Py, Ay), $ = /* @__PURE__ */ hf(Oy, My), Ac = {
  era: jn,
  eraYear: we,
  year: we,
  month: Xs,
  monthCode(e) {
    const t = jn(e);
    return ts(t), t;
  },
  day: Xs,
  .../* @__PURE__ */ ur(lt, we),
  .../* @__PURE__ */ ur(te, ga),
  offset(e) {
    const t = jn(e);
    return $t(t), t;
  }
}, Ns = /* @__PURE__ */ J(sl, lt, ze), Iy = /* @__PURE__ */ J(sl, ze, lt), xt = "numeric", an = ["timeZoneName"], Kf = {
  month: xt,
  day: xt
}, Os = {
  year: xt,
  month: xt
}, As = /* @__PURE__ */ Object.assign({}, Os, {
  day: xt
}), Rs = {
  hour: xt,
  minute: xt,
  second: xt
}, Ms = /* @__PURE__ */ Object.assign({}, As, Rs), Dy = /* @__PURE__ */ Object.assign({}, Ms, {
  timeZoneName: "short"
}), Cy = /* @__PURE__ */ Object.keys(Os), ky = /* @__PURE__ */ Object.keys(Kf), _y = /* @__PURE__ */ Object.keys(As), Fy = /* @__PURE__ */ Object.keys(Rs), Is = ["dateStyle"], By = /* @__PURE__ */ Cy.concat(Is), Ly = /* @__PURE__ */ ky.concat(Is), Ds = /* @__PURE__ */ _y.concat(Is, ["weekday"]), sn = /* @__PURE__ */ Fy.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), Cs = /* @__PURE__ */ Ds.concat(sn), qy = /* @__PURE__ */ an.concat(sn), Uy = /* @__PURE__ */ an.concat(Ds), zy = /* @__PURE__ */ an.concat(["day", "weekday"], sn), Yy = /* @__PURE__ */ an.concat(["year", "weekday"], sn), Zy = /* @__PURE__ */ Wt(Cs, Ms), $y = /* @__PURE__ */ Wt(Cs, Dy), Wy = /* @__PURE__ */ Wt(Cs, Ms, an), Hy = /* @__PURE__ */ Wt(Ds, As, qy), Vy = /* @__PURE__ */ Wt(sn, Rs, Uy), Gy = /* @__PURE__ */ Wt(By, Os, zy), Ky = /* @__PURE__ */ Wt(Ly, Kf, Yy), Jy = {}, Jf = new wt(void 0, {
  calendar: X
}).resolvedOptions().calendar === X, Qf = [Zy, Ma], Qy = [$y, Ma, 0, (e, t) => {
  const r = e.timeZone;
  if (t && t.timeZone !== r)
    throw new RangeError(Of);
  return r;
}], Xf = [Wy, xe], ed = [Hy, xe], td = [Vy, (e) => jt(e) / ut], rd = [Gy, xe, Jf], nd = [Ky, xe, Jf];
let Rc;
function kt(e, t, r, n, o) {
  function i(...c) {
    if (!(this instanceof i))
      throw new TypeError(Zi);
    Dc(this, t(...c));
  }
  function a(c, u) {
    return Object.defineProperties((function(...d) {
      return c.call(this, s(this), ...d);
    }), Br(u));
  }
  function s(c) {
    const u = Ee(c);
    if (!u || u.branding !== e)
      throw new TypeError(Zi);
    return u;
  }
  return Object.defineProperties(i.prototype, {
    ...Pp(at(a, r)),
    ...ar(at(a, n)),
    ...fa("Temporal." + e)
  }), Object.defineProperties(i, {
    ...ar(o),
    ...Br(e)
  }), [i, (c) => {
    const u = Object.create(i.prototype);
    return Dc(u, c), u;
  }, s];
}
function Nr(e) {
  if (Ee(e) || e.calendar !== void 0 || e.timeZone !== void 0)
    throw new TypeError(fm);
  return e;
}
function cn(e) {
  return od(e) || X;
}
function od(e) {
  const { calendar: t } = e;
  if (t !== void 0)
    return mo(t);
}
function mo(e) {
  if (Se(e)) {
    const { calendar: t } = Ee(e) || {};
    if (!t)
      throw new TypeError(Pf(e));
    return t;
  }
  return ((t) => so(rh(ye(t))))(e);
}
function ks(e) {
  const t = {};
  for (const r in e)
    t[r] = (n) => {
      const { calendar: o } = n;
      return $(o)[r](n);
    };
  return t;
}
function _t() {
  throw new TypeError(dm);
}
function Me(e) {
  if (Se(e)) {
    const { timeZone: t } = Ee(e) || {};
    if (!t)
      throw new TypeError(Nf(e));
    return t;
  }
  return ((t) => Ka(nh(ye(t))))(e);
}
function ue(e) {
  if (Se(e)) {
    const t = Ee(e);
    return t && t.branding === Ss ? t : Ph(e);
  }
  return th(e);
}
function Ir(e) {
  if (e !== void 0) {
    if (Se(e)) {
      const t = Ee(e) || {};
      switch (t.branding) {
        case Ct:
        case on:
          return t;
        case Tr:
          return ct(t);
      }
      const r = cn(e);
      return {
        ...vh(Me, G, $(r), e),
        calendar: r
      };
    }
    return Gp(e);
  }
}
function ht(e, t) {
  if (Se(e)) {
    const n = Ee(e) || {};
    switch (n.branding) {
      case ws:
        return ee(t), n;
      case Tr:
        return ee(t), Xe(n);
      case Ct:
        return ee(t), bf(G, n);
    }
    return Eh(e, t);
  }
  const r = eh(e);
  return ee(t), r;
}
function _s(e) {
  return e === void 0 ? void 0 : ht(e);
}
function Kt(e, t) {
  if (Se(e)) {
    const n = Ee(e) || {};
    switch (n.branding) {
      case Tr:
        return ee(t), n;
      case on:
        return ee(t), Ue({
          ...n,
          ...Re
        });
      case Ct:
        return ee(t), gf(G, n);
    }
    return wh($(cn(e)), e, t);
  }
  const r = Jp(e);
  return ee(t), r;
}
function Mc(e, t) {
  if (Se(e)) {
    const n = Ee(e);
    if (n && n.branding === bs)
      return ee(t), n;
    const o = od(e);
    return jh($(o || X), !o, e, t);
  }
  const r = Xp($, e);
  return ee(t), r;
}
function Jt(e, t) {
  if (Se(e)) {
    const n = Ee(e);
    return n && n.branding === vs ? (ee(t), n) : Sh($(cn(e)), e, t);
  }
  const r = Qp($, e);
  return ee(t), r;
}
function Qt(e, t) {
  if (Se(e)) {
    const n = Ee(e) || {};
    switch (n.branding) {
      case on:
        return ee(t), n;
      case Tr:
        return ee(t), ct(n);
      case Ct:
        return ee(t), vf(G, n);
    }
    return xh($(cn(e)), e, t);
  }
  const r = Ya(e);
  return ee(t), r;
}
function Xt(e, t) {
  if (Se(e)) {
    const r = Ee(e);
    if (r && r.branding === Ct)
      return Wn(t), r;
    const n = cn(e);
    return bh(Me, G, $(n), n, e, t);
  }
  return Kp(e, t);
}
function Ic(e) {
  return at(((t) => (r) => t(Gi(r))), e);
}
function Gi(e) {
  return ke(e, G);
}
function er(e) {
  if (Se(e)) {
    const t = Ee(e);
    if (t)
      switch (t.branding) {
        case xs:
          return t;
        case Ct:
          return st(t.epochNanoseconds);
      }
  }
  return Vp(e);
}
function Xy() {
  function e(i, a) {
    return new t(i, a);
  }
  function t(i, a = /* @__PURE__ */ Object.create(null)) {
    Bn.set(this, ((s, c) => {
      const u = new wt(s, c), d = u.resolvedOptions(), f = d.locale, p = Le(Object.keys(c), d), h = Ie(rg), m = (g, ...b) => {
        if (g) {
          if (b.length !== 2)
            throw new TypeError(Po);
          for (const O of b)
            if (O === void 0)
              throw new TypeError(Po);
        }
        g || b[0] !== void 0 || (b = []);
        const S = b.map(((O) => Ee(O) || Number(O)));
        let P, T = 0;
        for (const O of S) {
          const k = typeof O == "object" ? O.branding : void 0;
          if (T++ && k !== P)
            throw new TypeError(Po);
          P = k;
        }
        return P ? h(P)(f, p, ...S) : [u, ...S];
      };
      return m.X = u, m;
    })(i, a));
  }
  const r = wt.prototype, n = Object.getOwnPropertyDescriptors(r), o = Object.getOwnPropertyDescriptors(wt);
  for (const i in n) {
    const a = n[i], s = i.startsWith("format") && eg(i);
    typeof a.value == "function" ? a.value = i === "constructor" ? e : s || tg(i) : s && (a.get = function() {
      if (!Bn.has(this))
        throw new TypeError(Zi);
      return (...c) => s.apply(this, c);
    }, Object.defineProperties(a.get, Br(`get ${i}`)));
  }
  return o.prototype.value = t.prototype = Object.create({}, n), Object.defineProperties(e, o), e;
}
function eg(e) {
  return Object.defineProperties((function(...t) {
    const r = Bn.get(this), [n, ...o] = r(e.includes("Range"), ...t);
    return n[e](...o);
  }), Br(e));
}
function tg(e) {
  return Object.defineProperties((function(...t) {
    return Bn.get(this).X[e](...t);
  }), Br(e));
}
function rg(e) {
  const t = cg[e];
  if (!t)
    throw new TypeError(Rm(e));
  return Mt(t, Ie(wf), 1);
}
const Fn = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ Fn.get.bind(Fn), Dc = /* @__PURE__ */ Fn.set.bind(Fn), id = {
  era: Tp,
  eraYear: fl,
  year: pa,
  month: tt,
  daysInMonth: tt,
  daysInYear: tt,
  inLeapYear: _m,
  monthsInYear: tt
}, Fs = {
  monthCode: ye
}, ad = {
  day: tt
}, ng = {
  dayOfWeek: tt,
  dayOfYear: tt,
  weekOfYear: Np,
  yearOfWeek: fl,
  daysInWeek: tt
}, Bs = /* @__PURE__ */ ks(/* @__PURE__ */ Object.assign({}, id, Fs, ad, ng)), og = /* @__PURE__ */ ks({
  ...id,
  ...Fs
}), ig = /* @__PURE__ */ ks({
  ...Fs,
  ...ad
}), un = {
  calendarId: (e) => e.calendar
}, ag = /* @__PURE__ */ qn(((e) => (t) => t[e]), te.concat("sign")), Ls = /* @__PURE__ */ qn(((e, t) => (r) => r[ze[t]]), lt), sd = {
  epochMilliseconds: Ma,
  epochNanoseconds: Rp
}, [sg, se] = kt(Ss, qh, {
  ...ag,
  blank: Wp
}, {
  with: (e, t) => se(Ih(e, t)),
  negated: (e) => se(za(e)),
  abs: (e) => se($p(e)),
  add: (e, t, r) => se(gc(Ir, $, G, 0, e, ue(t), r)),
  subtract: (e, t, r) => se(gc(Ir, $, G, 1, e, ue(t), r)),
  round: (e, t) => se(Zp(Ir, $, G, e, t)),
  total: (e, t) => Mp(Ir, $, G, e, t),
  toLocaleString(e, t, r) {
    return Intl.DurationFormat ? new Intl.DurationFormat(t, r).format(this) : wo(e);
  },
  toString: wo,
  toJSON: (e) => wo(e),
  valueOf: _t
}, {
  from: (e) => se(ue(e)),
  compare: (e, t, r) => ih(Ir, $, G, ue(e), ue(t), r)
}), cg = {
  Instant: Qf,
  PlainDateTime: Xf,
  PlainDate: ed,
  PlainTime: td,
  PlainYearMonth: rd,
  PlainMonthDay: nd
}, ug = /* @__PURE__ */ Mt(Qf), lg = /* @__PURE__ */ Mt(Qy), fg = /* @__PURE__ */ Mt(Xf), dg = /* @__PURE__ */ Mt(ed), pg = /* @__PURE__ */ Mt(td), hg = /* @__PURE__ */ Mt(rd), mg = /* @__PURE__ */ Mt(nd), [yg, gt] = kt(ws, Lh, Ls, {
  with(e, t, r) {
    return gt(Mh(this, Nr(t), r));
  },
  add: (e, t) => gt(yc(0, e, ue(t))),
  subtract: (e, t) => gt(yc(1, e, ue(t))),
  until: (e, t, r) => se(Pc(0, e, ht(t), r)),
  since: (e, t, r) => se(Pc(1, e, ht(t), r)),
  round: (e, t) => gt(kp(e, t)),
  equals: (e, t) => dh(e, ht(t)),
  toLocaleString(e, t, r) {
    const [n, o] = pg(t, r, e);
    return n.format(o);
  },
  toString: uc,
  toJSON: (e) => uc(e),
  valueOf: _t
}, {
  from: (e, t) => gt(ht(e, t)),
  compare: (e, t) => Qa(ht(e), ht(t))
}), [gg, $e] = kt(Tr, J(kh, Qr), {
  ...un,
  ...Bs,
  ...Ls
}, {
  with: (e, t, r) => $e(Nh($, e, Nr(t), r)),
  withCalendar: (e, t) => $e(ns(e, mo(t))),
  withPlainTime: (e, t) => $e(em(e, _s(t))),
  add: (e, t, r) => $e(pc($, 0, e, ue(t), r)),
  subtract: (e, t, r) => $e(pc($, 1, e, ue(t), r)),
  until: (e, t, r) => se(Sc($, 0, e, Kt(t), r)),
  since: (e, t, r) => se(Sc($, 1, e, Kt(t), r)),
  round: (e, t) => $e(Cp(e, t)),
  equals: (e, t) => ch(e, Kt(t)),
  toZonedDateTime: (e, t, r) => ve(Yh(G, e, Me(t), r)),
  toPlainDate: (e) => We(ct(e)),
  toPlainTime: (e) => gt(Xe(e)),
  toLocaleString(e, t, r) {
    const [n, o] = fg(t, r, e);
    return n.format(o);
  },
  toString: ic,
  toJSON: (e) => ic(e),
  valueOf: _t
}, {
  from: (e, t) => $e(Kt(e, t)),
  compare: (e, t) => Jl(Kt(e), Kt(t))
}), [vg, Ki] = kt(bs, J(Bh, Qr), {
  ...un,
  ...ig
}, {
  with: (e, t, r) => Ki(Rh($, e, Nr(t), r)),
  equals: (e, t) => fh(e, Mc(t)),
  toPlainDate(e, t) {
    return We(Gh($, e, this, t));
  },
  toLocaleString(e, t, r) {
    const [n, o] = mg(t, r, e);
    return n.format(o);
  },
  toString: cc,
  toJSON: (e) => cc(e),
  valueOf: _t
}, {
  from: (e, t) => Ki(Mc(e, t))
}), [bg, Dr] = kt(vs, J(Fh, Qr), {
  ...un,
  ...og
}, {
  with: (e, t, r) => Dr(Ah($, e, Nr(t), r)),
  add: (e, t, r) => Dr(mc($, 0, e, ue(t), r)),
  subtract: (e, t, r) => Dr(mc($, 1, e, ue(t), r)),
  until: (e, t, r) => se(Ec($, 0, e, Jt(t), r)),
  since: (e, t, r) => se(Ec($, 1, e, Jt(t), r)),
  equals: (e, t) => lh(e, Jt(t)),
  toPlainDate(e, t) {
    return We(Vh($, e, this, t));
  },
  toLocaleString(e, t, r) {
    const [n, o] = hg(t, r, e);
    return n.format(o);
  },
  toString: sc,
  toJSON: (e) => sc(e),
  valueOf: _t
}, {
  from: (e, t) => Dr(Jt(e, t)),
  compare: (e, t) => jr(Jt(e), Jt(t))
}), [wg, We] = kt(on, J(_h, Qr), {
  ...un,
  ...Bs
}, {
  with: (e, t, r) => We(Oh($, e, Nr(t), r)),
  withCalendar: (e, t) => We(ns(e, mo(t))),
  add: (e, t, r) => We(hc($, 0, e, ue(t), r)),
  subtract: (e, t, r) => We(hc($, 1, e, ue(t), r)),
  until: (e, t, r) => se(jc($, 0, e, Qt(t), r)),
  since: (e, t, r) => se(jc($, 1, e, Qt(t), r)),
  equals: (e, t) => uh(e, Qt(t)),
  toZonedDateTime(e, t) {
    const r = Se(t) ? t : {
      timeZone: t
    };
    return ve(Zh(Me, ht, G, e, r));
  },
  toPlainDateTime: (e, t) => $e($h(e, _s(t))),
  toPlainYearMonth(e) {
    return Dr(Wh($, e, this));
  },
  toPlainMonthDay(e) {
    return Ki(Hh($, e, this));
  },
  toLocaleString(e, t, r) {
    const [n, o] = dg(t, r, e);
    return n.format(o);
  },
  toString: ac,
  toJSON: (e) => ac(e),
  valueOf: _t
}, {
  from: (e, t) => We(Qt(e, t)),
  compare: (e, t) => jr(Qt(e), Qt(t))
}), [xg, ve] = kt(Ct, J(Ch, Qr, oh), {
  ...sd,
  ...un,
  ...Ic(Bs),
  ...Ic(Ls),
  offset: (e) => Gr(Gi(e).offsetNanoseconds),
  offsetNanoseconds: (e) => Gi(e).offsetNanoseconds,
  timeZoneId: (e) => e.timeZone,
  hoursInDay: (e) => _p(G, e)
}, {
  with: (e, t, r) => ve(Th($, G, e, Nr(t), r)),
  withCalendar: (e, t) => ve(ns(e, mo(t))),
  withTimeZone: (e, t) => ve(tm(e, Me(t))),
  withPlainTime: (e, t) => ve(Xh(G, e, _s(t))),
  add: (e, t, r) => ve(dc($, G, 0, e, ue(t), r)),
  subtract: (e, t, r) => ve(dc($, G, 1, e, ue(t), r)),
  until: (e, t, r) => se(fe(xc($, G, 0, e, Xt(t), r))),
  since: (e, t, r) => se(fe(xc($, G, 1, e, Xt(t), r))),
  round: (e, t) => ve(Dp(G, e, t)),
  startOfDay: (e) => ve(Fp(G, e)),
  equals: (e, t) => sh(e, Xt(t)),
  toInstant: (e) => mt(zh(e)),
  toPlainDateTime: (e) => $e(gf(G, e)),
  toPlainDate: (e) => We(vf(G, e)),
  toPlainTime: (e) => gt(bf(G, e)),
  toLocaleString(e, t, r = {}) {
    const [n, o] = lg(t, r, e);
    return n.format(o);
  },
  toString: (e, t) => oc(G, e, t),
  toJSON: (e) => oc(G, e),
  valueOf: _t,
  getTimeZoneTransition(e, t) {
    const { timeZone: r, epochNanoseconds: n } = e, o = Ap(t), i = G(r).O(n, o);
    return i ? ve({
      ...e,
      epochNanoseconds: i
    }) : null;
  }
}, {
  from: (e, t) => ve(Xt(e, t)),
  compare: (e, t) => Kl(Xt(e), Xt(t))
}), [Sg, mt] = kt(xs, Dh, sd, {
  add: (e, t) => mt(fc(0, e, ue(t))),
  subtract: (e, t) => mt(fc(1, e, ue(t))),
  until: (e, t, r) => se(wc(0, e, er(t), r)),
  since: (e, t, r) => se(wc(1, e, er(t), r)),
  round: (e, t) => mt(Ip(e, t)),
  equals: (e, t) => ah(e, er(t)),
  toZonedDateTimeISO: (e, t) => ve(Uh(e, Me(t))),
  toLocaleString(e, t, r) {
    const [n, o] = ug(t, r, e);
    return n.format(o);
  },
  toString: (e, t) => nc(Me, G, e, t),
  toJSON: (e) => nc(Me, G, e),
  valueOf: _t
}, {
  from: (e) => mt(er(e)),
  fromEpochMilliseconds: (e) => mt(Kh(e)),
  fromEpochNanoseconds: (e) => mt(Jh(e)),
  compare: (e, t) => Gl(er(e), er(t))
}), jg = /* @__PURE__ */ Object.defineProperties({}, {
  ...fa("Temporal.Now"),
  ...ar({
    timeZoneId: () => Rr(),
    instant: () => mt(st(Yi())),
    zonedDateTimeISO: (e = Rr()) => ve(qe(Yi(), Me(e), X)),
    plainDateTimeISO: (e = Rr()) => $e(Ue(Eo(G(Me(e))), X)),
    plainDateISO: (e = Rr()) => We(ct(Eo(G(Me(e))), X)),
    plainTimeISO: (e = Rr()) => gt(Xe(Eo(G(Me(e)))))
  })
}), nr = /* @__PURE__ */ Object.defineProperties({}, {
  ...fa("Temporal"),
  ...ar({
    PlainYearMonth: bg,
    PlainMonthDay: vg,
    PlainDate: wg,
    PlainTime: yg,
    PlainDateTime: gg,
    ZonedDateTime: xg,
    Instant: Sg,
    Duration: sg,
    Now: jg
  })
}), Eg = /* @__PURE__ */ Xy(), Bn = /* @__PURE__ */ new WeakMap();
Object.create(Intl), ar({
  DateTimeFormat: Eg
});
function lr(e) {
  return `'${e.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}
const Pg = /^(\d{4})-(\d{2})-(\d{2})$/, Tg = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;
function Cc(e, t) {
  try {
    if (Pg.test(e))
      return nr.PlainDate.from(e).toString();
    const r = Tg.test(e) ? `${e.replace(" ", "T")}Z` : e;
    return nr.Instant.from(r).toZonedDateTimeISO(t).toPlainDate().toString();
  } catch {
    return null;
  }
}
function Ng(e) {
  return nr.Now.zonedDateTimeISO(e).toPlainDate().toString();
}
function Og(e, t) {
  let r;
  try {
    r = nr.PlainDate.from(e);
  } catch {
    throw new Error(`Invalid filter date: ${e}`);
  }
  try {
    const n = r.toPlainDateTime(nr.PlainTime.from("00:00:00")).toZonedDateTime(t).toInstant(), o = r.toPlainDateTime(nr.PlainTime.from("23:59:59.999")).toZonedDateTime(t).toInstant();
    return {
      start: n.toString({ fractionalSecondDigits: 3 }),
      end: o.toString({ fractionalSecondDigits: 3 })
    };
  } catch {
    throw new Error(`Invalid timezone: ${t}`);
  }
}
function Ag(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp);
}
function Rg(e) {
  const t = Object.keys(e);
  if (t.length !== 1)
    return;
  const [r] = t;
  if (!r.startsWith("$"))
    return r;
}
function yo(e) {
  const t = Rg(e);
  if (!t)
    return;
  const r = e[t];
  if (Ag(r)) {
    const n = Object.entries(r);
    if (n.length !== 1)
      return;
    const [o, i] = n[0];
    return { field: t, operator: o, value: i };
  }
  return {
    field: t,
    operator: "$eq",
    value: r
  };
}
const Mg = {
  $eq: "is",
  $ne: "is-not"
}, Ig = {
  $lt: "is-less",
  $lte: "is-or-less",
  $gt: "is-greater",
  $gte: "is-or-greater"
}, Dg = {
  contains: "~",
  "does-not-contain": "-~",
  "starts-with": "~^",
  "does-not-start-with": "-~^",
  "ends-with": "~$",
  "does-not-end-with": "-~$"
}, Cg = {
  "is-less": "<",
  "is-or-less": "<=",
  "is-greater": ">",
  "is-or-greater": ">="
}, kg = /^[A-Za-z0-9_.-]+$/;
function fr(e, t) {
  return e?.field ?? t;
}
function kc(e, t) {
  return typeof e == "string" ? t?.quoteStrings || e.startsWith("-") || !kg.test(e) ? lr(e) : e : String(e);
}
function _c(e, t = !1) {
  const r = e.source, n = r.startsWith("^"), o = r.endsWith("$");
  return n && o ? t ? "does-not-contain" : "contains" : n ? t ? "does-not-start-with" : "starts-with" : o ? t ? "does-not-end-with" : "ends-with" : t ? "does-not-contain" : "contains";
}
function Fc(e) {
  let t = e.source;
  return t.startsWith("^") && (t = t.slice(1)), t.endsWith("$") && (t = t.slice(0, -1)), t.replace(/\\([\\.^$|?*+()[\]{}\/-])/g, "$1");
}
function Oo(e) {
  return {
    parse(t, r) {
      const n = yo(t), o = fr(e, r.key);
      if (!n || n.field !== o)
        return null;
      const i = Mg[n.operator];
      return i ? {
        field: r.key,
        operator: i,
        values: [n.value]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], o = fr(e, r.key);
      return n == null || n === "" ? null : t.operator === "is" ? [`${o}:${kc(n, e)}`] : t.operator === "is-not" ? [`${o}:-${kc(n, e)}`] : null;
    }
  };
}
function _g(e) {
  return {
    parse(t, r) {
      const n = yo(t), o = fr(e, r.key);
      return !n || n.field !== o ? null : n.operator === "$eq" && typeof n.value == "string" ? {
        field: r.key,
        operator: "is",
        values: [n.value]
      } : n.operator === "$regex" && n.value instanceof RegExp ? {
        field: r.key,
        operator: _c(n.value),
        values: [Fc(n.value)]
      } : n.operator === "$not" && n.value instanceof RegExp ? {
        field: r.key,
        operator: _c(n.value, !0),
        values: [Fc(n.value)]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], o = fr(e, r.key);
      if (typeof n != "string" || n === "")
        return null;
      if (t.operator === "is")
        return [`${o}:${lr(n)}`];
      const i = Dg[t.operator];
      return i ? [`${o}:${i}${lr(n)}`] : null;
    }
  };
}
function Fg(e) {
  return {
    parse(t, r) {
      const n = yo(t), o = fr(e, r.key);
      if (!n || n.field !== o || typeof n.value != "string")
        return null;
      const i = Ig[n.operator], a = Cc(n.value, r.timezone);
      return !i || !a ? null : {
        field: r.key,
        operator: i,
        values: [a]
      };
    },
    serialize(t, r) {
      const n = t.values[0], o = fr(e, r.key);
      if (typeof n != "string" || n === "")
        return null;
      const i = Cc(n, r.timezone);
      if (!i)
        return null;
      const { start: a, end: s } = Og(i, r.timezone), c = Cg[t.operator];
      if (c === void 0)
        return null;
      const u = t.operator === "is-less" || t.operator === "is-or-greater" ? a : s;
      return [`${o}:${c}'${u}'`];
    }
  };
}
const Bg = {
  parse(e, t) {
    const r = yo(e);
    return !r || r.field !== "count.reports" ? null : r.operator === "$eq" && r.value === 0 ? {
      field: t.key,
      operator: "is",
      values: ["false"]
    } : r.operator === "$gt" && r.value === 0 ? {
      field: t.key,
      operator: "is",
      values: ["true"]
    } : null;
  },
  serialize(e) {
    const t = e.values[0];
    return e.operator !== "is" ? null : t === "true" ? ["count.reports:>0"] : t === "false" ? ["count.reports:0"] : null;
  }
}, go = {
  status: {
    operators: ["is"],
    ui: {
      label: "Status",
      type: "select",
      searchable: !1,
      hideOperatorSelect: !0
    },
    options: [
      { value: "published", label: "Published" },
      { value: "hidden", label: "Hidden" }
    ],
    codec: Oo()
  },
  created_at: {
    operators: Sp,
    ui: {
      label: "Date",
      defaultOperator: Ep,
      type: "date"
    },
    codec: Fg()
  },
  body: {
    operators: ["contains", "does-not-contain"],
    parseKeys: ["html"],
    ui: {
      label: "Text",
      type: "text",
      placeholder: "Search comment text...",
      defaultOperator: "contains",
      className: "w-full max-w-48",
      popoverContentClassName: "w-full max-w-48"
    },
    codec: _g({ field: "html" })
  },
  post: {
    operators: ["is", "is-not"],
    parseKeys: ["post_id"],
    ui: {
      label: "Post",
      type: "select",
      searchable: !0,
      className: "w-full max-w-80",
      popoverContentClassName: "w-full max-w-[calc(100vw-32px)] max-w-80"
    },
    codec: Oo({ field: "post_id" })
  },
  author: {
    operators: ["is", "is-not"],
    parseKeys: ["member_id"],
    ui: {
      label: "Author",
      type: "select",
      searchable: !0,
      className: "w-80",
      popoverContentClassName: "w-80"
    },
    codec: Oo({ field: "member_id" })
  },
  reported: {
    operators: ["is"],
    parseKeys: ["count.reports"],
    ui: {
      label: "Reported",
      type: "select",
      searchable: !1,
      hideOperatorSelect: !0
    },
    options: [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" }
    ],
    codec: Bg
  }
};
function Lg(e, t = {}) {
  const r = t.labels || {};
  return e.map((n) => ({
    value: n,
    label: r[n] ?? n.replaceAll("-", " ")
  }));
}
const qg = ["author", "post", "body", "status", "reported", "created_at"];
function Ug(e) {
  switch (e) {
    case "author":
      return Bt.createElement(ol, { className: "size-4" });
    case "post":
      return Bt.createElement(Yd, { className: "size-4" });
    case "body":
      return Bt.createElement(zd, { className: "size-4" });
    case "status":
      return Bt.createElement(Vd, { className: "size-4" });
    case "reported":
      return Bt.createElement(ra, { className: "size-4" });
    case "created_at":
      return Bt.createElement(Ud, { className: "size-4" });
    default:
      return;
  }
}
function zg({
  postValueSource: e,
  memberValueSource: t,
  siteTimezone: r = "UTC"
}) {
  return be(() => {
    const n = Ng(r);
    return qg.map((o) => {
      const i = go[o];
      return {
        key: o,
        ...i.ui,
        icon: Ug(o),
        operators: Lg(i.operators, { labels: jp }),
        ..."options" in i && i.options ? { options: i.options } : {},
        ...o === "created_at" ? { defaultValue: n } : {},
        ...o === "author" ? { valueSource: t } : {},
        ...o === "post" ? { valueSource: e } : {}
      };
    });
  }, [t, e, r]);
}
const Yg = "MembersResponseType", Zg = pr({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/disable`,
  body: ({ reason: e, hideComments: t }) => ({
    reason: e,
    hide_comments: t
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), $g = pr({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), Wg = oa({
  dataType: Yg,
  path: "/members/",
  defaultSearchParams: {
    include: "labels,tiers",
    limit: "100",
    order: "created_at desc"
  },
  defaultNextPageParams: (e, t) => {
    if (e.meta?.pagination.next)
      return {
        ...t,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.members), n = t[t.length - 1].meta;
    return {
      members: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function Hg(e, t) {
  if (t.length !== 0)
    return `${e}:[${t.map((r) => lr(r)).join(",")}]`;
}
function Ln(...e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e)
    if (r)
      for (const n of r)
        t.has(n.value) || t.set(n.value, n);
  return [...t.values()];
}
function Vg(e, t, r, n) {
  var o = this, i = ae(null), a = ae(0), s = ae(0), c = ae(null), u = ae([]), d = ae(), f = ae(), p = ae(e), h = ae(!0), m = ae(), g = ae();
  p.current = e;
  var b = typeof window < "u", S = !t && t !== 0 && b;
  if (typeof e != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var P = !!(r = r || {}).leading, T = !("trailing" in r) || !!r.trailing, O = !!r.flushOnExit && T, k = "maxWait" in r, _ = "debounceOnServer" in r && !!r.debounceOnServer, R = k ? Math.max(+r.maxWait || 0, t) : null, B = be(function() {
    var L = function(M) {
      var E = u.current, oe = d.current;
      return u.current = d.current = null, a.current = M, s.current = s.current || M, f.current = p.current.apply(oe, E);
    }, W = function(M, E) {
      S && cancelAnimationFrame(c.current), c.current = S ? requestAnimationFrame(M) : setTimeout(M, E);
    }, q = function(M) {
      if (!h.current) return !1;
      var E = M - i.current;
      return !i.current || E >= t || E < 0 || k && M - a.current >= R;
    }, v = function(M) {
      return c.current = null, T && u.current ? L(M) : (u.current = d.current = null, f.current);
    }, A = function M() {
      var E = Date.now();
      if (P && s.current === a.current && I(), q(E)) return v(E);
      if (h.current) {
        var oe = t - (E - i.current), K = k ? Math.min(oe, R - (E - a.current)) : oe;
        W(M, K);
      }
    }, I = function() {
      n && n({});
    }, D = function() {
      if (b || _) {
        var M, E = Date.now(), oe = q(E);
        if (u.current = [].slice.call(arguments), d.current = o, i.current = E, O && !m.current && (m.current = function() {
          var K;
          ((K = globalThis.document) == null ? void 0 : K.visibilityState) === "hidden" && g.current.flush();
        }, (M = globalThis.document) == null || M.addEventListener == null || M.addEventListener("visibilitychange", m.current)), oe) {
          if (!c.current && h.current) return a.current = i.current, W(A, t), P ? L(i.current) : f.current;
          if (k) return W(A, t), L(i.current);
        }
        return c.current || W(A, t), f.current;
      }
    };
    return D.cancel = function() {
      var M = c.current;
      M && (S ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), a.current = 0, u.current = i.current = d.current = c.current = null, M && n && n({});
    }, D.isPending = function() {
      return !!c.current;
    }, D.flush = function() {
      return c.current ? v(Date.now()) : f.current;
    }, D;
  }, [P, k, t, R, T, O, S, b, _, n]);
  return g.current = B, vt(function() {
    return h.current = !0, function() {
      var L;
      O && g.current.flush(), m.current && ((L = globalThis.document) == null || L.removeEventListener == null || L.removeEventListener("visibilitychange", m.current), m.current = null), h.current = !1;
    };
  }, [O]), B;
}
function Gg(e, t) {
  return e === t;
}
function Kg(e, t, r) {
  var n = Gg, o = ae(e), i = Be({})[1], a = Vg(or(function(c) {
    o.current = c, i({});
  }, [i]), t, r, i), s = ae(e);
  return n(s.current, e) || (a(e), s.current = e), [o.current, a];
}
const Bc = () => {
};
function Jg(e, t, r) {
  return r ? e.flatMap((n) => t.some((i) => i.value === n) ? [] : [r(n)]) : [];
}
function Qg(e) {
  return function(r = {}) {
    const { enabled: n = !0 } = r, o = () => {
      const a = e.useBrowse("", { enabled: !0 }), s = be(() => (a.data || []).map(e.toOption), [a.data]);
      return {
        items: a.data,
        options: s,
        isLoading: a.isLoading,
        pagination: a.pagination
      };
    }, i = ({ query: a, selectedValues: s }) => {
      const [c] = Kg(a, e.debounceMs ?? 200), u = e.useBrowse(c, { enabled: n }), d = e.useHydrate?.(s, { enabled: n }), f = be(() => (u.data || []).map(e.toOption), [u.data]), p = be(() => (d?.data || []).map(e.toOption), [d?.data]), h = be(() => Ln(p, f), [p, f]), m = be(() => Jg(
        s,
        h,
        e.getMissingSelectedOption
      ), [h, s]);
      return n ? {
        options: Ln(m, h),
        isInitialLoad: u.isLoading && h.length === 0,
        isSearching: !u.isLoading && u.isRefreshing && !u.isLoadingMore,
        isLoadingMore: u.isLoadingMore,
        hasMore: u.hasMore,
        loadMore: u.loadMore ?? Bc
      } : {
        options: [],
        isInitialLoad: !1,
        isSearching: !1,
        isLoadingMore: !1,
        hasMore: !1,
        loadMore: Bc
      };
    };
    return {
      id: e.id,
      useInitialBrowse: o,
      useOptions: i
    };
  };
}
function Xg(e) {
  return { filter: e };
}
function ev(e) {
  return Hg("id", e);
}
function Lc(e) {
  return {
    limit: "100",
    ...e
  };
}
function qs({
  id: e,
  buildBrowseSearchParams: t,
  buildHydrateSearchParams: r = Xg,
  buildHydrateFilter: n = ev,
  debounceMs: o,
  selectItems: i,
  toOption: a,
  getMissingSelectedOption: s,
  useQuery: c
}) {
  return Qg({
    id: e,
    useBrowse: (u, d) => {
      const f = c({
        enabled: d.enabled ?? !0,
        searchParams: Lc(t(u))
      });
      return {
        data: i(f.data),
        isLoading: f.isLoading,
        isRefreshing: f.isFetching,
        isLoadingMore: f.isFetchingNextPage,
        hasMore: !!f.hasNextPage,
        loadMore: f.fetchNextPage,
        pagination: f.data?.meta?.pagination
      };
    },
    useHydrate: (u, d) => {
      const f = n(u), p = {};
      typeof f == "string" && Object.assign(p, Lc(r(f)));
      const m = c({
        enabled: (d.enabled ?? !0) && u.length > 0,
        searchParams: p
      });
      return {
        data: i(m.data),
        isLoading: m.isLoading
      };
    },
    toOption: a,
    getMissingSelectedOption: s,
    debounceMs: o
  });
}
function tv(e) {
  return {
    value: e.id,
    label: e.name || "Unknown name",
    detail: e.email ?? "(Unknown email)"
  };
}
const rv = qs({
  id: "posts.members.remote",
  buildBrowseSearchParams: (e) => ({
    limit: "100",
    order: "created_at DESC",
    ...e ? { search: e } : {}
  }),
  getMissingSelectedOption: (e) => ({
    value: e,
    label: `ID: ${e}`
  }),
  selectItems: (e) => e?.members,
  useQuery: ({ enabled: e, searchParams: t }) => Wg({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: tv
});
function nv() {
  return rv();
}
const ov = "PagesResponseType", iv = oa({
  dataType: ov,
  path: "/pages/",
  defaultNextPageParams: (e, t) => {
    if (e.meta?.pagination.next)
      return {
        ...t,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.pages), n = t[t.length - 1].meta;
    return {
      pages: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function av(e, t, r) {
  return function(o) {
    const i = e(o), a = t(o), s = or(({ query: c, selectedValues: u }) => {
      const d = i.useOptions({ query: c, selectedValues: u }), f = a.useOptions({ query: c, selectedValues: u }), p = Ln(d.options, f.options), h = r ? u.flatMap((m) => p.some((b) => b.value === m) ? [] : [r(m)]) : [];
      return {
        options: Ln(p, h),
        isInitialLoad: d.options.length === 0 && f.options.length === 0 && (d.isInitialLoad || f.isInitialLoad),
        isSearching: d.isSearching || f.isSearching,
        isLoadingMore: d.isLoadingMore || f.isLoadingMore,
        hasMore: d.hasMore || f.hasMore,
        loadMore: () => {
          d.hasMore && d.loadMore(), f.hasMore && f.loadMore();
        }
      };
    }, [i, a]);
    return be(() => ({
      id: `${i.id}+${a.id}`,
      useOptions: s
    }), [i.id, a.id, s]);
  };
}
function sv(e) {
  return e ? `status:published+title:~${lr(e)}` : "status:published";
}
function cv(e) {
  return {
    value: e.id,
    label: e.title
  };
}
function uv(e) {
  return {
    value: e.id,
    label: e.title,
    detail: "Page"
  };
}
const cd = (e) => ({
  filter: sv(e),
  limit: "25",
  fields: "id,title",
  order: "published_at DESC"
}), ud = (e) => ({
  fields: "id,title",
  filter: e
}), lv = qs({
  id: "posts.published.remote",
  buildBrowseSearchParams: cd,
  buildHydrateSearchParams: ud,
  selectItems: (e) => e?.posts,
  useQuery: ({ enabled: e, searchParams: t }) => tp({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: cv
}), fv = qs({
  id: "pages.published.remote",
  buildBrowseSearchParams: cd,
  buildHydrateSearchParams: ud,
  selectItems: (e) => e?.pages,
  useQuery: ({ enabled: e, searchParams: t }) => iv({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: uv
}), dv = av(
  lv,
  fv,
  (e) => ({
    value: e,
    label: `ID: ${e}`
  })
);
function pv() {
  return dv();
}
const qc = ({
  filters: e,
  siteTimezone: t,
  onFiltersChange: r
}) => {
  const n = pv(), o = nv(), i = zg({
    memberValueSource: o,
    postValueSource: n,
    siteTimezone: t
  }), a = e.length > 0;
  return /* @__PURE__ */ l.jsx(
    Ld,
    {
      addButtonIcon: a ? /* @__PURE__ */ l.jsx(Zd, {}) : /* @__PURE__ */ l.jsx($d, {}),
      addButtonText: a ? "Add filter" : "Filter",
      allowMultiple: !1,
      className: `[&>button]:order-last ${a ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ l.jsx(op, {}),
      clearButtonText: "Clear",
      fields: i,
      filters: e,
      keyboardShortcut: "f",
      popoverAlign: a ? "start" : "end",
      showClearButton: a,
      showSearchInput: !1,
      onChange: r
    }
  );
};
function hv({ onClick: e, expanded: t }) {
  return /* @__PURE__ */ l.jsxs(
    le,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-base hover:bg-transparent",
      variant: "ghost",
      onClick: e,
      children: [
        t ? "Show less" : "Show more",
        t ? /* @__PURE__ */ l.jsx(ap, {}) : /* @__PURE__ */ l.jsx(ip, {})
      ]
    }
  );
}
function ld({ item: e }) {
  const t = ae(null), [r, n] = Be(!1), [o, i] = Be(!1);
  return vt(() => {
    if (o)
      return;
    const a = () => {
      t.current && n(t.current.scrollHeight > t.current.clientHeight);
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, [e.html, o]), /* @__PURE__ */ l.jsx("div", { className: "mt-2 flex flex-col gap-2", children: /* @__PURE__ */ l.jsxs("div", { className: `flex max-w-full flex-col items-start ${e.status === "hidden" && "opacity-50"}`, children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: e.html || "" },
        ref: t,
        className: Ne(
          "prose flex-1 text-base max-w-[80ch] balance leading-[1.5em] [&_*]:leading-[1.5em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          o ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1 mb-1"
        )
      }
    ),
    r && /* @__PURE__ */ l.jsx(hv, { expanded: o, onClick: () => i(!o) })
  ] }) });
}
const Or = "CommentsResponseType", mv = oa({
  dataType: Or,
  path: "/comments/",
  defaultNextPageParams: (e, t) => e.meta?.pagination.next ? {
    ...t,
    page: (e.meta?.pagination.next || 1).toString()
  } : void 0,
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.comments), n = t[t.length - 1].meta;
    return {
      comments: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
}), fd = (e) => mv({
  ...e,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post,parent",
    ...e?.searchParams
  }
}), dd = pr({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: Or
  }
}), pd = pr({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: Or
  }
}), yv = pr({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      pinned: !0
    }]
  }),
  invalidateQueries: {
    dataType: Or
  }
}), Us = pr({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      pinned: !1
    }]
  }),
  invalidateQueries: {
    dataType: Or
  }
}), gv = ia({
  dataType: Or,
  path: (e) => `/comments/${e}/`,
  defaultSearchParams: {
    include: "member,post,count.replies,count.direct_replies,count.likes,count.reports,parent,in_reply_to"
  }
}), vv = ia({
  dataType: "CommentReportsResponseType",
  path: (e) => `/comments/${e}/reports/`
}), bv = (e, t) => vv(e, { ...t }), wv = ia({
  dataType: "CommentLikesResponseType",
  path: (e) => `/comments/${e}/likes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), xv = (e, t) => wv(e, { ...t }), Sv = (e, t) => fd({
  ...t,
  searchParams: {
    filter: `(parent_id:${e}+in_reply_to_id:null),in_reply_to_id:${e}`,
    order: "created_at asc",
    include: "member,post,count.direct_replies,count.likes,count.reports,parent,in_reply_to",
    limit: "100"
  }
});
function jv(e) {
  const t = new Date(e);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(t).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
const Ev = Ne(
  al({ variant: "warning" }),
  "gap-1 hover:bg-state-warning/30"
);
function hd({
  memberName: e,
  memberId: t,
  createdAt: r,
  isHidden: n,
  canComment: o,
  isPinned: i,
  onAuthorClick: a,
  postTitle: s,
  onPostClick: c,
  onUnpinClick: u,
  className: d
}) {
  const f = (p) => {
    p.stopPropagation(), u?.();
  };
  return /* @__PURE__ */ l.jsxs("div", { className: Ne("flex items-center gap-2", d), children: [
    /* @__PURE__ */ l.jsxs("div", { className: Ne(
      "flex min-w-0 items-center gap-x-1 text-sm",
      n && "opacity-50"
    ), children: [
      /* @__PURE__ */ l.jsx("div", { className: "whitespace-nowrap", children: t && a ? /* @__PURE__ */ l.jsx(
        le,
        {
          className: "flex h-auto items-center gap-1.5 truncate p-0 font-semibold text-primary hover:opacity-70",
          variant: "link",
          onClick: a,
          children: e || "Unknown"
        }
      ) : /* @__PURE__ */ l.jsx("span", { className: "block truncate font-semibold", children: e || "Unknown" }) }),
      o === !1 && /* @__PURE__ */ l.jsx(Fi, { children: /* @__PURE__ */ l.jsxs(Bi, { children: [
        /* @__PURE__ */ l.jsx(Li, { asChild: !0, children: /* @__PURE__ */ l.jsx("span", { "data-testid": "commenting-disabled-indicator", children: /* @__PURE__ */ l.jsx(
          Xu,
          {
            className: "size-3.5 text-muted-foreground"
          }
        ) }) }),
        /* @__PURE__ */ l.jsx(qi, { children: "Comments disabled" })
      ] }) }),
      /* @__PURE__ */ l.jsx(na, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
      /* @__PURE__ */ l.jsx("div", { className: "shrink-0 whitespace-nowrap", children: r && /* @__PURE__ */ l.jsx(Fi, { children: /* @__PURE__ */ l.jsxs(Bi, { children: [
        /* @__PURE__ */ l.jsx(Li, { asChild: !0, children: /* @__PURE__ */ l.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: _r(r) }) }),
        /* @__PURE__ */ l.jsx(qi, { children: jv(r) })
      ] }) }) }),
      s && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { className: "shrink-0 text-muted-foreground", children: "on" }),
        /* @__PURE__ */ l.jsx("div", { className: "min-w-0 truncate", children: c ? /* @__PURE__ */ l.jsx(
          le,
          {
            className: "block h-auto w-full cursor-pointer truncate p-0 text-left font-medium text-gray-800 hover:opacity-70 dark:text-gray-400",
            variant: "link",
            onClick: c,
            children: s
          }
        ) : /* @__PURE__ */ l.jsx("span", { className: "font-medium text-gray-800 dark:text-gray-400", children: s }) })
      ] })
    ] }),
    n && /* @__PURE__ */ l.jsx(Ks, { variant: "secondary", children: "Hidden" }),
    i && (u ? /* @__PURE__ */ l.jsxs(
      "button",
      {
        "aria-label": "Unpin comment",
        className: Ne("group", Ev),
        type: "button",
        onClick: f,
        children: [
          /* @__PURE__ */ l.jsxs("span", { className: "grid size-3 shrink-0", children: [
            /* @__PURE__ */ l.jsx(ki, { className: "col-start-1 row-start-1 size-3 group-hover:opacity-0 group-focus-visible:opacity-0" }),
            /* @__PURE__ */ l.jsx(el, { className: "col-start-1 row-start-1 size-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" })
          ] }),
          /* @__PURE__ */ l.jsxs("span", { className: "grid justify-items-start text-left", children: [
            /* @__PURE__ */ l.jsx("span", { className: "col-start-1 row-start-1 group-hover:opacity-0 group-focus-visible:opacity-0", children: "Pinned" }),
            /* @__PURE__ */ l.jsx("span", { className: "col-start-1 row-start-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100", children: "Unpin" })
          ] })
        ]
      }
    ) : /* @__PURE__ */ l.jsxs(Ks, { className: "gap-1", variant: "warning", children: [
      /* @__PURE__ */ l.jsx(ki, { className: "size-3" }),
      "Pinned"
    ] }))
  ] });
}
function Pv({
  open: e,
  memberName: t,
  onOpenChange: r,
  onConfirm: n
}) {
  const [o, i] = Be(!1), a = (c) => {
    c || i(!1), r(c);
  }, s = () => {
    n(o), i(!1);
  };
  return /* @__PURE__ */ l.jsx(aa, { open: e, onOpenChange: a, children: /* @__PURE__ */ l.jsxs(sa, { className: "gap-5", children: [
    /* @__PURE__ */ l.jsxs(ca, { children: [
      /* @__PURE__ */ l.jsx(ua, { children: "Disable comments" }),
      /* @__PURE__ */ l.jsxs(up, { children: [
        t || "This member",
        " won't be able to comment in the future. You can re-enable commenting anytime."
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l.jsx(
        sp,
        {
          checked: o,
          id: "hide-comments",
          onCheckedChange: (c) => i(c === !0)
        }
      ),
      /* @__PURE__ */ l.jsx(cp, { htmlFor: "hide-comments", children: "Hide all previous comments" })
    ] }),
    /* @__PURE__ */ l.jsxs(la, { children: [
      /* @__PURE__ */ l.jsx(le, { variant: "outline", onClick: () => a(!1), children: "Cancel" }),
      /* @__PURE__ */ l.jsx(le, { onClick: s, children: "Disable comments" })
    ] })
  ] }) });
}
const zs = () => {
  const { data: e } = rp();
  return e?.config?.labs?.commentsPinning === !0;
};
function md({
  comment: e
}) {
  const { mutate: t } = Zg(), { mutate: r } = $g(), { mutate: n } = yv(), { mutate: o } = Us(), [i, a] = Be(!1), s = zs(), { id: c, post: u, member: d } = e, f = u?.url, p = d?.id, h = d?.can_comment, m = s && !e.parent_id && e.status !== "deleted", g = (S) => {
    p && (t({
      id: p,
      reason: `Disabled from comment ${c}`,
      hideComments: S
    }), a(!1));
  }, b = () => {
    p && r({ id: p });
  };
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs(Gd, { children: [
      /* @__PURE__ */ l.jsx(Kd, { asChild: !0, children: /* @__PURE__ */ l.jsx(
        le,
        {
          className: "relative z-10 text-gray-800 hover:bg-secondary [&_svg]:size-4",
          size: "sm",
          variant: "ghost",
          children: /* @__PURE__ */ l.jsx(lp, {})
        }
      ) }),
      /* @__PURE__ */ l.jsxs(Jd, { align: "start", children: [
        f && /* @__PURE__ */ l.jsx(Gt, { asChild: !0, children: /* @__PURE__ */ l.jsxs("a", { href: `${f}#ghost-comments-${c}`, rel: "noopener noreferrer", target: "_blank", children: [
          /* @__PURE__ */ l.jsx(Qd, { className: "size-4" }),
          "View on post"
        ] }) }),
        p && /* @__PURE__ */ l.jsx(Gt, { asChild: !0, children: /* @__PURE__ */ l.jsxs("a", { href: `#/members/${p}`, children: [
          /* @__PURE__ */ l.jsx(ol, { className: "size-4" }),
          "View member"
        ] }) }),
        m && (e.pinned ? /* @__PURE__ */ l.jsxs(Gt, { onClick: () => o({ id: c }), children: [
          /* @__PURE__ */ l.jsx(el, { className: "size-4" }),
          "Unpin comment"
        ] }) : /* @__PURE__ */ l.jsxs(Gt, { onClick: () => n({ id: c }), children: [
          /* @__PURE__ */ l.jsx(ki, { className: "size-4" }),
          "Pin comment"
        ] })),
        p && (h !== !1 ? /* @__PURE__ */ l.jsxs(Gt, { onClick: () => a(!0), children: [
          /* @__PURE__ */ l.jsx(Xu, { className: "size-4" }),
          "Disable commenting"
        ] }) : /* @__PURE__ */ l.jsxs(Gt, { onClick: b, children: [
          /* @__PURE__ */ l.jsx(Wd, { className: "size-4" }),
          "Enable commenting"
        ] }))
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      Pv,
      {
        memberName: d?.name,
        open: i,
        onConfirm: g,
        onOpenChange: a
      }
    )
  ] });
}
function Tv({ comment: e, open: t, onOpenChange: r }) {
  const { data: n, isLoading: o } = xv(e.id, { enabled: t }), i = n?.comment_likes ?? [], a = e.count?.likes ?? 0, s = a - i.length;
  return /* @__PURE__ */ l.jsx(aa, { open: t, onOpenChange: r, children: /* @__PURE__ */ l.jsxs(sa, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ l.jsx(ca, { children: /* @__PURE__ */ l.jsxs(ua, { children: [
      a,
      " ",
      a === 1 ? "like" : "likes"
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ l.jsx(
        ir,
        {
          className: "shrink-0",
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 font-semibold", children: e.member ? Nn(e.member) : "Deleted member" }),
          /* @__PURE__ */ l.jsx(na, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: e.created_at && _r(e.created_at) }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ l.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: e.post?.title || "Unknown post" })
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: e.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(hr, { size: "md" }) }) : /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
      i.map((c) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ l.jsx(
              ir,
              {
                email: c.member?.email,
                name: c.member?.name,
                src: c.member?.avatar_image
              }
            ),
            /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-pink-500 text-white", children: /* @__PURE__ */ l.jsx(tl, { className: "size-2.5", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: c.member ? Nn(c.member) : "Deleted member" })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: _r(c.created_at) })
      ] }, c.id)),
      s > 0 && /* @__PURE__ */ l.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
        "and ",
        s,
        " more"
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx(la, { children: /* @__PURE__ */ l.jsx(le, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function Nv({ comment: e, open: t, onOpenChange: r }) {
  const { data: n, isLoading: o } = bv(e.id, { enabled: t }), i = n?.comment_reports ?? [], a = e.count?.reports ?? i.length;
  return /* @__PURE__ */ l.jsx(aa, { open: t, onOpenChange: r, children: /* @__PURE__ */ l.jsxs(sa, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ l.jsx(ca, { children: /* @__PURE__ */ l.jsxs(ua, { children: [
      a,
      " ",
      a === 1 ? "report" : "reports"
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ l.jsx(
        ir,
        {
          className: "shrink-0",
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 font-semibold", children: e.member ? Nn(e.member) : "Deleted member" }),
          /* @__PURE__ */ l.jsx(na, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: e.created_at && _r(e.created_at) }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ l.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: e.post?.title || "Unknown post" })
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: e.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(hr, { size: "md" }) }) : /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-3 pb-1", children: i.map((s) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
          /* @__PURE__ */ l.jsx(
            ir,
            {
              email: s.member?.email,
              name: s.member?.name,
              src: s.member?.avatar_image
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-red text-white", children: /* @__PURE__ */ l.jsx(ra, { className: "size-2.5", fill: "currentColor" }) })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: s.member ? Nn(s.member) : "Deleted member" })
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: _r(s.created_at) })
    ] }, s.id)) }) }),
    /* @__PURE__ */ l.jsx(la, { children: /* @__PURE__ */ l.jsx(le, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function Ao({ icon: e, count: t, label: r, to: n, onClick: o, className: i, testId: a }) {
  const s = Ne("flex items-center gap-1 text-xs text-gray-800", i), c = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e,
    /* @__PURE__ */ l.jsx("span", { children: kd(t) })
  ] }), u = n || o;
  return /* @__PURE__ */ l.jsx(Fi, { children: /* @__PURE__ */ l.jsxs(Bi, { children: [
    /* @__PURE__ */ l.jsx(Li, { asChild: !0, children: n ? /* @__PURE__ */ l.jsx(
      ea,
      {
        className: Ne(s, "cursor-pointer hover:opacity-70"),
        "data-testid": a,
        to: n,
        onClick: (d) => {
          d.stopPropagation();
        },
        children: c
      }
    ) : o ? /* @__PURE__ */ l.jsx(
      "button",
      {
        className: Ne(s, "cursor-pointer hover:opacity-70"),
        "data-testid": a,
        type: "button",
        onClick: (d) => {
          d.stopPropagation(), o();
        },
        children: c
      }
    ) : /* @__PURE__ */ l.jsx("div", { className: s, "data-testid": a, children: c }) }),
    /* @__PURE__ */ l.jsx(qi, { children: u ? `View ${r.toLowerCase()}` : r })
  ] }) });
}
function Ys(e, t) {
  if (!t)
    return;
  const r = new URLSearchParams(e);
  return r.set("thread", `is:${t}`), `?${r.toString()}`;
}
function yd({
  comment: e,
  className: t
}) {
  const [r] = dr(), [n, o] = Be(!1), [i, a] = Be(!1), s = Ys(r, e.id), c = e.count?.direct_replies ?? e.count?.replies ?? e.replies?.length ?? 0, u = e.count?.likes ?? 0, d = e.count?.reports ?? 0, f = c > 0, p = u > 0, h = d > 0;
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("div", { className: Ne("flex items-center gap-6", t), children: [
      /* @__PURE__ */ l.jsx(
        Ao,
        {
          count: c,
          icon: /* @__PURE__ */ l.jsx(Hd, { size: 16, strokeWidth: 1.5 }),
          label: "Replies",
          testId: "replies-metric",
          to: f ? s : void 0
        }
      ),
      /* @__PURE__ */ l.jsx(
        Ao,
        {
          count: u,
          icon: /* @__PURE__ */ l.jsx(tl, { size: 16, strokeWidth: 1.5 }),
          label: "Likes",
          onClick: p ? () => o(!0) : void 0
        }
      ),
      /* @__PURE__ */ l.jsx(
        Ao,
        {
          className: h ? "font-semibold text-red" : void 0,
          count: d,
          icon: /* @__PURE__ */ l.jsx(ra, { size: 16, strokeWidth: 1.5 }),
          label: "Reports",
          onClick: h ? () => a(!0) : void 0
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      Tv,
      {
        comment: e,
        open: n,
        onOpenChange: o
      }
    ),
    /* @__PURE__ */ l.jsx(
      Nv,
      {
        comment: e,
        open: i,
        onOpenChange: a
      }
    )
  ] });
}
function Ov({ hasReplies: e }) {
  return e ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "mb-2 h-full w-px grow rounded bg-gradient-to-b from-muted-foreground/20 from-70% to-transparent",
      "data-testid": "replies-line"
    }
  ) : null;
}
function gd({ comment: e, isReply: t = !1, isSelectedComment: r = !1, selectedCommentId: n }) {
  const [o] = dr(), { mutate: i } = dd(), { mutate: a } = pd(), { mutate: s } = Us(), c = zs(), u = (e.replies?.length ?? 0) > 0 || (e.count?.direct_replies ?? e.count?.replies ?? 0) > 0, d = !u || t ? "mb-7" : "mb-0";
  return /* @__PURE__ */ l.jsxs("div", { className: `flex w-full flex-row ${d}`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "mr-2 flex shrink-0 flex-col items-center justify-start md:mr-3", children: [
      /* @__PURE__ */ l.jsx(
        ir,
        {
          className: Ne("mb-3 size-6 md:mb-4 md:size-8", e.status === "hidden" && "opacity-50"),
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsx(Ov, { hasReplies: u && !t })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "grow", children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "w-full",
        "data-testid": `comment-thread-row-${e.id}`,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col", children: [
            /* @__PURE__ */ l.jsx(
              hd,
              {
                canComment: e.member?.can_comment,
                createdAt: e.created_at,
                isHidden: e.status === "hidden",
                isPinned: c && e.pinned,
                memberId: e.member?.id,
                memberName: e.member?.name,
                onUnpinClick: c ? () => s({ id: e.id }) : void 0
              }
            ),
            e.in_reply_to_snippet && r && /* @__PURE__ */ l.jsxs("div", { className: `mb-1 line-clamp-1 text-sm ${e.status === "hidden" && "opacity-50"}`, children: [
              /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
              " ",
              /* @__PURE__ */ l.jsx(
                ea,
                {
                  className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                  "data-testid": "replied-to-link",
                  to: Ys(o, e.in_reply_to_id || e.parent_id) || "",
                  onClick: (f) => {
                    f.stopPropagation();
                  },
                  children: e.in_reply_to_snippet
                }
              )
            ] }),
            /* @__PURE__ */ l.jsx(ld, { item: e }),
            /* @__PURE__ */ l.jsxs("div", { className: "mt-4 flex flex-row flex-wrap items-center gap-3", children: [
              e.status === "published" && /* @__PURE__ */ l.jsxs(le, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => i({ id: e.id }), children: [
                /* @__PURE__ */ l.jsx(rl, {}),
                /* @__PURE__ */ l.jsx("span", { className: "max-md:hidden", children: "Hide" })
              ] }),
              e.status === "hidden" && /* @__PURE__ */ l.jsxs(le, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => a({ id: e.id }), children: [
                /* @__PURE__ */ l.jsx(nl, {}),
                /* @__PURE__ */ l.jsx("span", { className: "max-md:hidden", children: "Show" })
              ] }),
              /* @__PURE__ */ l.jsx(
                yd,
                {
                  comment: e
                }
              ),
              /* @__PURE__ */ l.jsx(
                md,
                {
                  comment: e
                }
              )
            ] })
          ] }),
          u && e.replies && /* @__PURE__ */ l.jsx("div", { className: "mt-7 mb-4 -ml-2 pl-2 md:mt-8 md:mb-0 md:-ml-3 md:pl-3", children: e.replies.map((f) => /* @__PURE__ */ l.jsx(
            gd,
            {
              comment: f,
              isReply: !0,
              selectedCommentId: n
            },
            f.id
          )) })
        ]
      }
    ) })
  ] });
}
const Av = ({
  selectedComment: e,
  replies: t,
  selectedCommentId: r,
  fetchNextPage: n,
  hasNextPage: o,
  isFetchingNextPage: i
}) => {
  const a = { ...e, replies: t };
  return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", "data-testid": "comment-thread-list", children: [
    /* @__PURE__ */ l.jsx(
      gd,
      {
        comment: a,
        isSelectedComment: !0,
        selectedCommentId: r
      }
    ),
    o && /* @__PURE__ */ l.jsx("div", { className: "flex justify-center pb-4", children: /* @__PURE__ */ l.jsx(
      le,
      {
        disabled: i,
        variant: "outline",
        onClick: () => n(),
        children: i ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(hr, { size: "sm" }),
          "Loading..."
        ] }) : "Load more replies"
      }
    ) })
  ] });
}, Rv = ({
  commentId: e,
  open: t,
  onOpenChange: r
}) => {
  const {
    data: n,
    isLoading: o,
    isError: i,
    fetchNextPage: a,
    hasNextPage: s,
    isFetchingNextPage: c
  } = Sv(e ?? "", {
    enabled: t && !!e
  }), { data: u, isLoading: d, isError: f } = gv(e ?? "", {
    enabled: t && !!e
  }), p = o || d, h = f || i && !u, m = u?.comments?.[0], g = n?.comments || [];
  return /* @__PURE__ */ l.jsx(fp, { open: t, onOpenChange: r, children: /* @__PURE__ */ l.jsxs(dp, { className: "overflow-y-auto px-6 pt-0 sm:max-w-[600px]", children: [
    /* @__PURE__ */ l.jsx(pp, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: /* @__PURE__ */ l.jsx(hp, { className: "text-md", children: "Thread" }) }),
    m?.post && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ l.jsx("h3", { className: "line-clamp-1 text-xl font-semibold text-foreground", children: m.post.title }),
          m.post.excerpt && /* @__PURE__ */ l.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: m.post.excerpt })
        ] }),
        m.post.feature_image && /* @__PURE__ */ l.jsx(
          "img",
          {
            alt: m.post.title || "Post feature image",
            className: "hidden aspect-video h-18 shrink-0 rounded object-cover lg:block",
            src: m.post.feature_image
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(Xd, { className: "-mx-6 my-6 w-auto" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { children: p ? /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ l.jsx(hr, { size: "lg" }) }) : h || !m ? /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ l.jsx(
      Ui,
      {
        actions: /* @__PURE__ */ l.jsx(le, { variant: "outline", onClick: () => r(!1), children: "Back to comments" }),
        description: "This thread may have been deleted or doesn't exist.",
        title: "Thread not found",
        children: /* @__PURE__ */ l.jsx(_i, {})
      }
    ) }) : /* @__PURE__ */ l.jsx(
      Av,
      {
        fetchNextPage: a,
        hasNextPage: s,
        isFetchingNextPage: c,
        replies: g,
        selectedComment: m,
        selectedCommentId: e ?? ""
      }
    ) })
  ] }) });
}, Ro = /* @__PURE__ */ new Map(), Ji = "ghostVirtualListScrollPosition", Uc = 150, Mv = 500;
function Mo() {
  if (!(typeof window > "u"))
    return window.history.state;
}
function Qi(e) {
  const t = e?.key;
  if (typeof t == "string" || typeof t == "number")
    return String(t);
  const r = e?.idx;
  if (typeof r == "number")
    return String(r);
}
function zc(e, t) {
  const r = Qi(e);
  if (r)
    return `${r}::${t}`;
}
function Iv(e, t) {
  const r = e?.[Ji];
  if (!r || typeof r != "object")
    return;
  const n = r[t];
  if (typeof n == "number")
    return n;
}
function Dv(e, t, r) {
  if (typeof window > "u")
    return;
  const n = e?.[Ji], o = {
    ...e ?? {},
    [Ji]: {
      ...n && typeof n == "object" ? n : {},
      [t]: r
    }
  };
  window.history.replaceState(o, "");
}
function Cv({ parentRef: e, enabled: t = !0, isLoading: r = !1 }) {
  const n = _d(), [o, i] = Be(null), a = ae(null), s = ae(0), c = ae(0), u = ae(0), d = ae(null), f = ae(/* @__PURE__ */ new Set()), p = n.pathname + n.search;
  vt(() => {
    if (!t || !e.current)
      return;
    const h = mp(e.current);
    i(h);
  }, [t, e]), vt(() => {
    if (!t || !o)
      return;
    const h = Mo(), m = Qi(h), g = zc(h, p), b = () => {
      d.current !== null && (window.clearTimeout(d.current), d.current = null);
    }, S = (_) => {
      g && Ro.set(g, _);
      const R = Mo();
      Qi(R) === m && Dv(R, p, _), c.current = Date.now(), u.current = _;
    }, P = ({ persistToHistory: _ = !0 } = {}) => {
      if (b(), !_) {
        const R = s.current;
        g && Ro.set(g, R), c.current = Date.now(), u.current = R;
        return;
      }
      S(s.current);
    }, T = () => {
      const _ = Date.now();
      if (Math.abs(s.current - u.current) >= Mv || _ - c.current >= Uc) {
        b(), S(s.current);
        return;
      }
      d.current === null && (d.current = window.setTimeout(() => {
        d.current = null, S(s.current);
      }, Uc));
    }, O = () => {
      s.current = o.scrollTop, T();
    }, k = () => {
      P();
    };
    return s.current = o.scrollTop, o.addEventListener("scroll", O), window.addEventListener("pagehide", k), () => {
      P({ persistToHistory: !1 }), o.removeEventListener("scroll", O), window.removeEventListener("pagehide", k);
    };
  }, [t, p, o]), vt(() => {
    const h = Mo(), m = zc(h, p), g = (m ? Ro.get(m) : void 0) ?? Iv(h, p);
    if (!(!t || !o || r)) {
      if (g !== void 0 && a.current !== p) {
        a.current = p;
        let b = 0;
        const S = 20, P = () => {
          for (const k of f.current)
            window.clearTimeout(k);
          f.current.clear();
        }, T = (k, _) => {
          const R = window.setTimeout(() => {
            f.current.delete(R), k();
          }, _);
          f.current.add(R);
        }, O = () => {
          if (b += 1, !o)
            return;
          const k = o.scrollTop, _ = o.scrollHeight, R = o.clientHeight, B = _ - R;
          if (g > B && b < S) {
            T(O, 100);
            return;
          }
          if (Math.abs(g - k) > 5) {
            const L = Math.min(g, B);
            o.scrollTop = L;
          }
        };
        return T(O, 150), () => P();
      }
      a.current = p;
    }
  }, [t, p, o, r]);
}
const Yc = ({ height: e }) => /* @__PURE__ */ l.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ l.jsx("div", { className: "flex", style: { height: e } }) }), kv = Fd(function(t, r) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: r,
      ...t,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ l.jsx("div", { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ l.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function _v({
  items: e,
  totalItems: t,
  hasNextPage: r,
  isFetchingNextPage: n,
  fetchNextPage: o,
  resetKey: i,
  onAddFilter: a,
  isLoading: s
}) {
  const c = ae(null), { visibleItemCount: u, canLoadMore: d, loadMore: f } = yp(t, { resetKey: i }), [p, h] = dr(), [m, g] = Be(!1), [b, S] = Be(null), { mutate: P } = dd(), { mutate: T } = pd(), { mutate: O } = Us(), k = zs(), _ = (W) => {
    if (g(W), !W) {
      const q = new URLSearchParams(p);
      q.delete("thread"), h(q, { replace: !0 });
    }
  };
  vt(() => {
    const W = p.get("thread");
    if (W) {
      const q = W.match(/^is:(.+)$/);
      if (q && q[1]) {
        const v = q[1];
        S(v), g(!0);
      } else
        g(!1), S(null);
    } else
      g(!1), S(null);
  }, [p]), Cv({ parentRef: c, isLoading: s });
  const { visibleItems: R, spaceBefore: B, spaceAfter: L } = gp({
    items: e,
    totalItems: u,
    hasNextPage: r,
    isFetchingNextPage: n,
    fetchNextPage: o,
    parentRef: c
  });
  return /* @__PURE__ */ l.jsxs("div", { ref: c, className: "overflow-hidden", children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "flex flex-col",
        "data-testid": "comments-list",
        children: /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ l.jsx(Yc, { height: B }),
          R.map(({ key: W, virtualItem: q, item: v, props: A }) => q.index > e.length - 1 ? /* @__PURE__ */ l.jsx(kv, { ...A }, W) : /* @__PURE__ */ l.jsxs(
            "div",
            {
              ...A,
              className: "grid w-full grid-cols-1 items-start justify-between gap-4 border-b p-3 hover:bg-muted/50 md:p-5 lg:grid-cols-[minmax(0,1fr)_144px]",
              "data-testid": "comment-list-row",
              onClick: () => {
                m && _(!1);
              },
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ l.jsx(
                    ir,
                    {
                      className: Ne("size-6 md:size-8", v.status === "hidden" && "opacity-50"),
                      email: v.member?.email,
                      name: v.member?.name,
                      src: v.member?.avatar_image
                    }
                  ),
                  /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col", children: [
                    /* @__PURE__ */ l.jsx(
                      hd,
                      {
                        canComment: v.member?.can_comment,
                        createdAt: v.created_at,
                        isHidden: v.status === "hidden",
                        isPinned: k && v.pinned,
                        memberId: v.member?.id,
                        memberName: v.member?.name,
                        postTitle: v.post?.title,
                        onAuthorClick: v.member?.id ? () => a("author", v.member.id) : void 0,
                        onPostClick: v.post?.id ? () => a("post", v.post.id) : void 0,
                        onUnpinClick: k ? () => O({ id: v.id }) : void 0
                      }
                    ),
                    v.in_reply_to_snippet && /* @__PURE__ */ l.jsxs("div", { className: `mb-1 line-clamp-1 max-w-3xl text-sm ${v.status === "hidden" && "opacity-50"}`, children: [
                      /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
                      " ",
                      /* @__PURE__ */ l.jsx(
                        ea,
                        {
                          className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                          "data-testid": "replied-to-link",
                          to: Ys(p, v.in_reply_to_id || v.parent_id) || "",
                          onClick: (D) => {
                            D.stopPropagation();
                          },
                          children: v.in_reply_to_snippet
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsx(ld, { item: v }),
                    /* @__PURE__ */ l.jsxs("div", { className: "mt-4 flex flex-row flex-nowrap items-center gap-3", children: [
                      v.status === "published" && /* @__PURE__ */ l.jsxs(le, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => P({ id: v.id }), children: [
                        /* @__PURE__ */ l.jsx(rl, {}),
                        "Hide"
                      ] }),
                      v.status === "hidden" && /* @__PURE__ */ l.jsxs(le, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => T({ id: v.id }), children: [
                        /* @__PURE__ */ l.jsx(nl, {}),
                        "Show"
                      ] }),
                      /* @__PURE__ */ l.jsx(
                        yd,
                        {
                          className: "ml-2",
                          comment: v
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        md,
                        {
                          comment: v
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx("div", { children: v.post?.feature_image ? /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    alt: v.post.title || "Post feature image",
                    className: `hidden aspect-video w-36 rounded object-cover lg:block ${v.status === "hidden" && "opacity-50"}`,
                    src: v.post.feature_image
                  }
                ) : null })
              ]
            },
            W
          )),
          /* @__PURE__ */ l.jsx(Yc, { height: L })
        ] })
      }
    ),
    d && /* @__PURE__ */ l.jsx(vp, { isLoading: n, onClick: f }),
    /* @__PURE__ */ l.jsx(
      Rv,
      {
        commentId: b,
        open: m,
        onOpenChange: _
      }
    )
  ] });
}
var wn = {}, xn = { exports: {} };
const Fv = {}, Bv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fv
}, Symbol.toStringTag, { value: "Module" })), Zc = /* @__PURE__ */ ta(Bv);
var $c;
function Lv() {
  return $c || ($c = 1, (function(e, t) {
    var r = (function() {
      var n = function(q, v, A, I) {
        for (A = A || {}, I = q.length; I--; A[q[I]] = v) ;
        return A;
      }, o = [1, 5], i = [1, 7], a = [1, 8], s = [1, 6, 10], c = [1, 9], u = [1, 6, 8, 10], d = [1, 24], f = [1, 25], p = [1, 26], h = [1, 27], m = [1, 28], g = [1, 29], b = [1, 30], S = [1, 17], P = [1, 18], T = [1, 19], O = [21, 22, 23, 24, 25, 29, 30], k = [1, 6, 8, 10, 18], _ = [1, 47], R = [6, 18], B = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, expressions: 3, expression: 4, andCondition: 5, OR: 6, filterExpr: 7, AND: 8, LPAREN: 9, RPAREN: 10, propExpr: 11, valueExpr: 12, PROP: 13, NOT: 14, REGEXPOP: 15, LBRACKET: 16, inExpr: 17, RBRACKET: 18, OP: 19, VALUE: 20, NULL: 21, TRUE: 22, FALSE: 23, NUMBER: 24, NOW: 25, DATEOP: 26, AMOUNT: 27, INTERVAL: 28, LITERAL: 29, STRING: 30, ADD: 31, SUB: 32, CONTAINS: 33, STARTSWITH: 34, ENDSWITH: 35, GT: 36, LT: 37, GTE: 38, LTE: 39, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 6: "OR", 8: "AND", 9: "LPAREN", 10: "RPAREN", 13: "PROP", 14: "NOT", 16: "LBRACKET", 18: "RBRACKET", 21: "NULL", 22: "TRUE", 23: "FALSE", 24: "NUMBER", 25: "NOW", 27: "AMOUNT", 28: "INTERVAL", 29: "LITERAL", 30: "STRING", 31: "ADD", 32: "SUB", 33: "CONTAINS", 34: "STARTSWITH", 35: "ENDSWITH", 36: "GT", 37: "LT", 38: "GTE", 39: "LTE" },
        productions_: [0, [3, 1], [4, 1], [4, 3], [5, 1], [5, 3], [7, 3], [7, 2], [11, 1], [12, 2], [12, 1], [12, 4], [12, 3], [12, 2], [12, 1], [17, 3], [17, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 4], [20, 1], [20, 1], [26, 1], [26, 1], [15, 2], [15, 2], [15, 2], [19, 1], [19, 1], [19, 1], [19, 1], [19, 1]],
        performAction: function(v, A, I, D, M, E, oe, K) {
          var N = E.length - 1;
          switch (M) {
            case 1:
              return D.debug("expression", E[N]), D.debug("opt", K), E[N] && E[N].yg ? E[N].yg : E[N];
            case 2:
              D.debug("andCondition", E[N]), this.$ = E[N];
              break;
            case 3:
              D.debug("expression OR andCondition", E[N - 2], E[N]), E[N - 2] = E[N - 2].$or ? E[N - 2] : { $or: [D.ungroup(E[N - 2])] }, E[N - 2].$or.push(D.ungroup(E[N])), this.$ = E[N - 2];
              break;
            case 4:
              D.debug("filterExpr", E[N]), this.$ = E[N];
              break;
            case 5:
              D.debug("andCondition AND filterExpr", E[N - 2], E[N]), E[N - 2] = E[N - 2].$and ? E[N - 2] : { $and: [D.ungroup(E[N - 2])] }, E[N - 2].$and.push(D.ungroup(E[N])), this.$ = E[N - 2];
              break;
            case 6:
              D.debug("LPAREN expression RPAREN", E[N - 1]), this.$ = { yg: E[N - 1] };
              break;
            case 7:
              this.$ = { [E[N - 1]]: E[N] };
              break;
            case 8:
              E[N] = E[N].replace(/:$/, ""), E[N] = K.aliases && K.aliases[E[N]] ? K.aliases[E[N]] : E[N], this.$ = E[N];
              break;
            case 9:
              this.$ = { $not: E[N] };
              break;
            case 10:
              this.$ = { $regex: E[N] };
              break;
            case 11:
              this.$ = { $nin: E[N - 1] };
              break;
            case 12:
              this.$ = { $in: E[N - 1] };
              break;
            case 13:
              this.$ = {}, this.$[E[N - 1]] = E[N];
              break;
            case 14:
              this.$ = E[N];
              break;
            case 15:
              this.$.push(E[N]);
              break;
            case 16:
              this.$ = [E[N]];
              break;
            case 17:
              this.$ = null;
              break;
            case 18:
              this.$ = !0;
              break;
            case 19:
              this.$ = !1;
              break;
            case 20:
              this.$ = parseInt(v);
              break;
            case 21:
              this.$ = D.relDateToAbsolute(E[N - 2], E[N - 1], E[N]);
              break;
            case 22:
              this.$ = D.unescape(E[N]);
              break;
            case 23:
              E[N] = E[N].replace(/^'|'$/g, ""), this.$ = D.unescape(E[N]);
              break;
            case 24:
              this.$ = "add";
              break;
            case 25:
              this.$ = "sub";
              break;
            case 26:
              E[N] = E[N].replace(/^'|'$/g, ""), E[N] = D.unescape(E[N]), this.$ = D.stringToRegExp(E[N]);
              break;
            case 27:
              E[N] = E[N].replace(/^'|'$/g, ""), E[N] = D.unescape(E[N]), this.$ = D.stringToRegExp(E[N], "^");
              break;
            case 28:
              E[N] = E[N].replace(/^'|'$/g, ""), E[N] = D.unescape(E[N]), this.$ = D.stringToRegExp(E[N], "$");
              break;
            case 29:
              this.$ = "$ne";
              break;
            case 30:
              this.$ = "$gt";
              break;
            case 31:
              this.$ = "$lt";
              break;
            case 32:
              this.$ = "$gte";
              break;
            case 33:
              this.$ = "$lte";
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: 3, 7: 4, 9: o, 11: 6, 13: i }, { 1: [3] }, { 1: [2, 1], 6: a }, n(s, [2, 2], { 8: c }), n(u, [2, 4]), { 4: 10, 5: 3, 7: 4, 9: o, 11: 6, 13: i }, { 12: 11, 14: [1, 12], 15: 13, 16: [1, 14], 19: 15, 20: 16, 21: d, 22: f, 23: p, 24: h, 25: m, 29: g, 30: b, 33: S, 34: P, 35: T, 36: [1, 20], 37: [1, 21], 38: [1, 22], 39: [1, 23] }, n([14, 16, 21, 22, 23, 24, 25, 29, 30, 33, 34, 35, 36, 37, 38, 39], [2, 8]), { 5: 31, 7: 4, 9: o, 11: 6, 13: i }, { 7: 32, 9: o, 11: 6, 13: i }, { 6: a, 10: [1, 33] }, n(u, [2, 7]), n(O, [2, 29], { 15: 34, 16: [1, 35], 33: S, 34: P, 35: T }), n(u, [2, 10]), { 17: 36, 20: 37, 21: d, 22: f, 23: p, 24: h, 25: m, 29: g, 30: b }, { 20: 38, 21: d, 22: f, 23: p, 24: h, 25: m, 29: g, 30: b }, n(u, [2, 14]), { 30: [1, 39] }, { 30: [1, 40] }, { 30: [1, 41] }, n(O, [2, 30]), n(O, [2, 31]), n(O, [2, 32]), n(O, [2, 33]), n(k, [2, 17]), n(k, [2, 18]), n(k, [2, 19]), n(k, [2, 20]), { 26: 42, 31: [1, 43], 32: [1, 44] }, n(k, [2, 22]), n(k, [2, 23]), n(s, [2, 3], { 8: c }), n(u, [2, 5]), n(u, [2, 6]), n(u, [2, 9]), { 17: 45, 20: 37, 21: d, 22: f, 23: p, 24: h, 25: m, 29: g, 30: b }, { 6: _, 18: [1, 46] }, n(R, [2, 16]), n(u, [2, 13]), n(u, [2, 26]), n(u, [2, 27]), n(u, [2, 28]), { 27: [1, 48] }, { 27: [2, 24] }, { 27: [2, 25] }, { 6: _, 18: [1, 49] }, n(u, [2, 12]), { 20: 50, 21: d, 22: f, 23: p, 24: h, 25: m, 29: g, 30: b }, { 28: [1, 51] }, n(u, [2, 11]), n(R, [2, 15]), n(k, [2, 21])],
        defaultActions: { 43: [2, 24], 44: [2, 25] },
        parseError: function(v, A) {
          if (A.recoverable)
            this.trace(v);
          else {
            var I = new Error(v);
            throw I.hash = A, I;
          }
        },
        parse: function(v) {
          var A = this, I = [0], D = [null], M = [], E = this.table, oe = "", K = 0, N = 0, dt = 2, y = 1, w = M.slice.call(arguments, 1), j = Object.create(this.lexer), F = { yy: {} };
          for (var H in this.yy)
            Object.prototype.hasOwnProperty.call(this.yy, H) && (F.yy[H] = this.yy[H]);
          j.setInput(v, F.yy), F.yy.lexer = j, F.yy.parser = this, typeof j.yylloc > "u" && (j.yylloc = {});
          var V = j.yylloc;
          M.push(V);
          var Y = j.options && j.options.ranges;
          typeof F.yy.parseError == "function" ? this.parseError = F.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
          for (var U = function() {
            var ge;
            return ge = j.lex() || y, typeof ge != "number" && (ge = A.symbols_[ge] || ge), ge;
          }, C, Z, z, re, ne = {}, de, Q, et, Ye; ; ) {
            if (Z = I[I.length - 1], this.defaultActions[Z] ? z = this.defaultActions[Z] : ((C === null || typeof C > "u") && (C = U()), z = E[Z] && E[Z][C]), typeof z > "u" || !z.length || !z[0]) {
              var x = "";
              Ye = [];
              for (de in E[Z])
                this.terminals_[de] && de > dt && Ye.push("'" + this.terminals_[de] + "'");
              j.showPosition ? x = "Parse error on line " + (K + 1) + `:
` + j.showPosition() + `
Expecting ` + Ye.join(", ") + ", got '" + (this.terminals_[C] || C) + "'" : x = "Parse error on line " + (K + 1) + ": Unexpected " + (C == y ? "end of input" : "'" + (this.terminals_[C] || C) + "'"), this.parseError(x, {
                text: j.match,
                token: this.terminals_[C] || C,
                line: j.yylineno,
                loc: V,
                expected: Ye
              });
            }
            if (z[0] instanceof Array && z.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + Z + ", token: " + C);
            switch (z[0]) {
              case 1:
                I.push(C), D.push(j.yytext), M.push(j.yylloc), I.push(z[1]), C = null, N = j.yyleng, oe = j.yytext, K = j.yylineno, V = j.yylloc;
                break;
              case 2:
                if (Q = this.productions_[z[1]][1], ne.$ = D[D.length - Q], ne._$ = {
                  first_line: M[M.length - (Q || 1)].first_line,
                  last_line: M[M.length - 1].last_line,
                  first_column: M[M.length - (Q || 1)].first_column,
                  last_column: M[M.length - 1].last_column
                }, Y && (ne._$.range = [
                  M[M.length - (Q || 1)].range[0],
                  M[M.length - 1].range[1]
                ]), re = this.performAction.apply(ne, [
                  oe,
                  N,
                  K,
                  F.yy,
                  z[1],
                  D,
                  M
                ].concat(w)), typeof re < "u")
                  return re;
                Q && (I = I.slice(0, -1 * Q * 2), D = D.slice(0, -1 * Q), M = M.slice(0, -1 * Q)), I.push(this.productions_[z[1]][0]), D.push(ne.$), M.push(ne._$), et = E[I[I.length - 2]][I[I.length - 1]], I.push(et);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      };
      B.parseError = function(q, v) {
        var A = q.split(`
`);
        throw A[0] = "Query Error: unexpected character in filter at char " + (v.loc.first_column + 1), new Error(A.join(`
`));
      };
      var L = (function() {
        var q = {
          EOF: 1,
          parseError: function(A, I) {
            if (this.yy.parser)
              this.yy.parser.parseError(A, I);
            else
              throw new Error(A);
          },
          // resets the lexer, sets new input
          setInput: function(v, A) {
            return this.yy = A || this.yy || {}, this._input = v, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0
            }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          // consumes and returns one char from the input
          input: function() {
            var v = this._input[0];
            this.yytext += v, this.yyleng++, this.offset++, this.match += v, this.matched += v;
            var A = v.match(/(?:\r\n?|\n).*/g);
            return A ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), v;
          },
          // unshifts one char (or a string) into the input
          unput: function(v) {
            var A = v.length, I = v.split(/(?:\r\n?|\n)/g);
            this._input = v + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - A), this.offset -= A;
            var D = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), I.length - 1 && (this.yylineno -= I.length - 1);
            var M = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: I ? (I.length === D.length ? this.yylloc.first_column : 0) + D[D.length - I.length].length - I[0].length : this.yylloc.first_column - A
            }, this.options.ranges && (this.yylloc.range = [M[0], M[0] + this.yyleng - A]), this.yyleng = this.yytext.length, this;
          },
          // When called from action, caches matched text and appends it on next action
          more: function() {
            return this._more = !0, this;
          },
          // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
          reject: function() {
            if (this.options.backtrack_lexer)
              this._backtrack = !0;
            else
              return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
              });
            return this;
          },
          // retain first n characters of the match
          less: function(v) {
            this.unput(this.match.slice(v));
          },
          // displays already matched input, i.e. for error messages
          pastInput: function() {
            var v = this.matched.substr(0, this.matched.length - this.match.length);
            return (v.length > 20 ? "..." : "") + v.substr(-20).replace(/\n/g, "");
          },
          // displays upcoming input, i.e. for error messages
          upcomingInput: function() {
            var v = this.match;
            return v.length < 20 && (v += this._input.substr(0, 20 - v.length)), (v.substr(0, 20) + (v.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          // displays the character position where the lexing error occurred, i.e. for error messages
          showPosition: function() {
            var v = this.pastInput(), A = new Array(v.length + 1).join("-");
            return v + this.upcomingInput() + `
` + A + "^";
          },
          // test the lexed token: return FALSE when not a match, otherwise return token
          test_match: function(v, A) {
            var I, D, M;
            if (this.options.backtrack_lexer && (M = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            }, this.options.ranges && (M.yylloc.range = this.yylloc.range.slice(0))), D = v[0].match(/(?:\r\n?|\n).*/g), D && (this.yylineno += D.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: D ? D[D.length - 1].length - D[D.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + v[0].length
            }, this.yytext += v[0], this.match += v[0], this.matches = v, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(v[0].length), this.matched += v[0], I = this.performAction.call(this, this.yy, this, A, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), I)
              return I;
            if (this._backtrack) {
              for (var E in M)
                this[E] = M[E];
              return !1;
            }
            return !1;
          },
          // return next match in input
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var v, A, I, D;
            this._more || (this.yytext = "", this.match = "");
            for (var M = this._currentRules(), E = 0; E < M.length; E++)
              if (I = this._input.match(this.rules[M[E]]), I && (!A || I[0].length > A[0].length)) {
                if (A = I, D = E, this.options.backtrack_lexer) {
                  if (v = this.test_match(I, M[E]), v !== !1)
                    return v;
                  if (this._backtrack) {
                    A = !1;
                    continue;
                  } else
                    return !1;
                } else if (!this.options.flex)
                  break;
              }
            return A ? (v = this.test_match(A, M[D]), v !== !1 ? v : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          },
          // return next match that has a token
          lex: function() {
            var A = this.next();
            return A || this.lex();
          },
          // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
          begin: function(A) {
            this.conditionStack.push(A);
          },
          // pop the previously active lexer condition state off the condition stack
          popState: function() {
            var A = this.conditionStack.length - 1;
            return A > 0 ? this.conditionStack.pop() : this.conditionStack[0];
          },
          // produce the lexer rule set which is active for the currently active lexer condition state
          _currentRules: function() {
            return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
          },
          // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
          topState: function(A) {
            return A = this.conditionStack.length - 1 - Math.abs(A || 0), A >= 0 ? this.conditionStack[A] : "INITIAL";
          },
          // alias for begin(condition)
          pushState: function(A) {
            this.begin(A);
          },
          // return the number of states currently on the stack
          stateStackSize: function() {
            return this.conditionStack.length;
          },
          options: {},
          performAction: function(A, I, D, M) {
            switch (D) {
              case 0:
                break;
              case 1:
                return 21;
              case 2:
                return 22;
              case 3:
                return 23;
              case 4:
                return 13;
              case 5:
                return 24;
              case 6:
                return 16;
              case 7:
                return 18;
              case 8:
                return this.pushState("reldate"), 25;
              case 9:
                return 32;
              case 10:
                return 31;
              case 11:
                return 27;
              case 12:
                return this.popState(), 28;
              case 13:
                return 29;
              case 14:
                return 30;
              case 15:
                return 9;
              case 16:
                return 10;
              case 17:
                return 6;
              case 18:
                return 8;
              case 19:
                return 14;
              case 20:
                return 38;
              case 21:
                return 39;
              case 22:
                return 36;
              case 23:
                return 37;
              case 24:
                return 34;
              case 25:
                return 35;
              case 26:
                return 33;
              case 27:
                return 29;
            }
          },
          rules: [/^(?:\s+)/, /^(?:(?:null|NULL|Null)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:true|TRUE|True)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:false|FALSE|False)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:[a-zA-Z_][a-zA-Z0-9_\.]*[:])/, /^(?:[0-9]+(\.[0-9]+)?\b(?![\-]))/, /^(?:\[)/, /^(?:\])/, /^(?:now(?=[-+]\d+[dwMyhms](?:([\+\,\(\)\[\]])|$)))/, /^(?:-)/, /^(?:\+)/, /^(?:\d+)/, /^(?:[dwMyhms])/, /^(?:([^\s'"\+\,\(\)\>\<=\[\]\~\-])(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+)/, /^(?:['](\\['"]|[^'"])+?['])/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\+)/, /^(?:-)/, /^(?:>=)/, /^(?:<=)/, /^(?:>)/, /^(?:<)/, /^(?:~\^)/, /^(?:~\$)/, /^(?:~)/, /^(?:([a-zA-Z])(?![a-zA-Z'"\,\(\)\>\<=\[\]\~]))/],
          conditions: { reldate: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 } }
        };
        return q.parseError = function(v, A) {
          var I = v.split(`
`), D, M;
          throw D = I[2].indexOf("^"), M = I[1].charAt(D), I[0] = 'Query Error: unrecognized text "' + M + '" in filter at char ' + (D + 1), Error(I.join(`
`));
        }, q;
      })();
      B.lexer = L;
      function W() {
        this.yy = {};
      }
      return W.prototype = B, B.Parser = W, new W();
    })();
    typeof wp < "u" && (t.parser = r, t.Parser = r.Parser, t.parse = function() {
      return r.parse.apply(r, arguments);
    }, t.main = function(o) {
      o[1] || (console.log("Usage: " + o[0] + " FILE"), process.exit(1));
      var i = Zc.readFileSync(Zc.normalize(o[1]), "utf8");
      return t.parser.parse(i);
    }, require.main === e && t.main(process.argv.slice(1)));
  })(xn, xn.exports)), xn.exports;
}
var Io = {}, Do = {}, Co, Wc;
function vd() {
  return Wc || (Wc = 1, Co = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = /* @__PURE__ */ Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[r] = o;
    for (var i in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== o || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Co;
}
var ko, Hc;
function vo() {
  if (Hc) return ko;
  Hc = 1;
  var e = vd();
  return ko = function() {
    return e() && !!Symbol.toStringTag;
  }, ko;
}
var _o, Vc;
function bd() {
  return Vc || (Vc = 1, _o = Object), _o;
}
var Fo, Gc;
function qv() {
  return Gc || (Gc = 1, Fo = Error), Fo;
}
var Bo, Kc;
function Uv() {
  return Kc || (Kc = 1, Bo = EvalError), Bo;
}
var Lo, Jc;
function zv() {
  return Jc || (Jc = 1, Lo = RangeError), Lo;
}
var qo, Qc;
function Yv() {
  return Qc || (Qc = 1, qo = ReferenceError), qo;
}
var Uo, Xc;
function wd() {
  return Xc || (Xc = 1, Uo = SyntaxError), Uo;
}
var zo, eu;
function ln() {
  return eu || (eu = 1, zo = TypeError), zo;
}
var Yo, tu;
function Zv() {
  return tu || (tu = 1, Yo = URIError), Yo;
}
var Zo, ru;
function $v() {
  return ru || (ru = 1, Zo = Math.abs), Zo;
}
var $o, nu;
function Wv() {
  return nu || (nu = 1, $o = Math.floor), $o;
}
var Wo, ou;
function Hv() {
  return ou || (ou = 1, Wo = Math.max), Wo;
}
var Ho, iu;
function Vv() {
  return iu || (iu = 1, Ho = Math.min), Ho;
}
var Vo, au;
function Gv() {
  return au || (au = 1, Vo = Math.pow), Vo;
}
var Go, su;
function Kv() {
  return su || (su = 1, Go = Math.round), Go;
}
var Ko, cu;
function Jv() {
  return cu || (cu = 1, Ko = Number.isNaN || function(t) {
    return t !== t;
  }), Ko;
}
var Jo, uu;
function Qv() {
  if (uu) return Jo;
  uu = 1;
  var e = /* @__PURE__ */ Jv();
  return Jo = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Jo;
}
var Qo, lu;
function Xv() {
  return lu || (lu = 1, Qo = Object.getOwnPropertyDescriptor), Qo;
}
var Xo, fu;
function Ar() {
  if (fu) return Xo;
  fu = 1;
  var e = /* @__PURE__ */ Xv();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Xo = e, Xo;
}
var ei, du;
function bo() {
  if (du) return ei;
  du = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ei = e, ei;
}
var ti, pu;
function eb() {
  if (pu) return ti;
  pu = 1;
  var e = typeof Symbol < "u" && Symbol, t = vd();
  return ti = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, ti;
}
var ri, hu;
function xd() {
  return hu || (hu = 1, ri = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ri;
}
var ni, mu;
function Sd() {
  if (mu) return ni;
  mu = 1;
  var e = /* @__PURE__ */ bd();
  return ni = e.getPrototypeOf || null, ni;
}
var oi, yu;
function tb() {
  if (yu) return oi;
  yu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", o = function(c, u) {
    for (var d = [], f = 0; f < c.length; f += 1)
      d[f] = c[f];
    for (var p = 0; p < u.length; p += 1)
      d[p + c.length] = u[p];
    return d;
  }, i = function(c, u) {
    for (var d = [], f = u, p = 0; f < c.length; f += 1, p += 1)
      d[p] = c[f];
    return d;
  }, a = function(s, c) {
    for (var u = "", d = 0; d < s.length; d += 1)
      u += s[d], d + 1 < s.length && (u += c);
    return u;
  };
  return oi = function(c) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var d = i(arguments, 1), f, p = function() {
      if (this instanceof f) {
        var S = u.apply(
          this,
          o(d, arguments)
        );
        return Object(S) === S ? S : this;
      }
      return u.apply(
        c,
        o(d, arguments)
      );
    }, h = r(0, u.length - d.length), m = [], g = 0; g < h; g++)
      m[g] = "$" + g;
    if (f = Function("binder", "return function (" + a(m, ",") + "){ return binder.apply(this,arguments); }")(p), u.prototype) {
      var b = function() {
      };
      b.prototype = u.prototype, f.prototype = new b(), b.prototype = null;
    }
    return f;
  }, oi;
}
var ii, gu;
function fn() {
  if (gu) return ii;
  gu = 1;
  var e = tb();
  return ii = Function.prototype.bind || e, ii;
}
var ai, vu;
function Zs() {
  return vu || (vu = 1, ai = Function.prototype.call), ai;
}
var si, bu;
function $s() {
  return bu || (bu = 1, si = Function.prototype.apply), si;
}
var ci, wu;
function rb() {
  return wu || (wu = 1, ci = typeof Reflect < "u" && Reflect && Reflect.apply), ci;
}
var ui, xu;
function jd() {
  if (xu) return ui;
  xu = 1;
  var e = fn(), t = $s(), r = Zs(), n = rb();
  return ui = n || e.call(r, t), ui;
}
var li, Su;
function Ws() {
  if (Su) return li;
  Su = 1;
  var e = fn(), t = /* @__PURE__ */ ln(), r = Zs(), n = jd();
  return li = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return n(e, r, i);
  }, li;
}
var fi, ju;
function nb() {
  if (ju) return fi;
  ju = 1;
  var e = Ws(), t = /* @__PURE__ */ Ar(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return fi = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return i(s == null ? s : o(s));
    }
  ) : !1, fi;
}
var di, Eu;
function Hs() {
  if (Eu) return di;
  Eu = 1;
  var e = xd(), t = Sd(), r = /* @__PURE__ */ nb();
  return di = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : r ? function(o) {
    return r(o);
  } : null, di;
}
var pi, Pu;
function Ed() {
  if (Pu) return pi;
  Pu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = fn();
  return pi = r.call(e, t), pi;
}
var hi, Tu;
function Pd() {
  if (Tu) return hi;
  Tu = 1;
  var e, t = /* @__PURE__ */ bd(), r = /* @__PURE__ */ qv(), n = /* @__PURE__ */ Uv(), o = /* @__PURE__ */ zv(), i = /* @__PURE__ */ Yv(), a = /* @__PURE__ */ wd(), s = /* @__PURE__ */ ln(), c = /* @__PURE__ */ Zv(), u = /* @__PURE__ */ $v(), d = /* @__PURE__ */ Wv(), f = /* @__PURE__ */ Hv(), p = /* @__PURE__ */ Vv(), h = /* @__PURE__ */ Gv(), m = /* @__PURE__ */ Kv(), g = /* @__PURE__ */ Qv(), b = Function, S = function(U) {
    try {
      return b('"use strict"; return (' + U + ").constructor;")();
    } catch {
    }
  }, P = /* @__PURE__ */ Ar(), T = /* @__PURE__ */ bo(), O = function() {
    throw new s();
  }, k = P ? (function() {
    try {
      return arguments.callee, O;
    } catch {
      try {
        return P(arguments, "callee").get;
      } catch {
        return O;
      }
    }
  })() : O, _ = eb()(), R = Hs(), B = Sd(), L = xd(), W = $s(), q = Zs(), v = {}, A = typeof Uint8Array > "u" || !R ? e : R(Uint8Array), I = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": _ && R ? R([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": v,
    "%AsyncGenerator%": v,
    "%AsyncGeneratorFunction%": v,
    "%AsyncIteratorPrototype%": v,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": b,
    "%GeneratorFunction%": v,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": _ && R ? R(R([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !_ || !R ? e : R((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": P,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !_ || !R ? e : R((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": _ && R ? R(""[Symbol.iterator]()) : e,
    "%Symbol%": _ ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": k,
    "%TypedArray%": A,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": q,
    "%Function.prototype.apply%": W,
    "%Object.defineProperty%": T,
    "%Object.getPrototypeOf%": B,
    "%Math.abs%": u,
    "%Math.floor%": d,
    "%Math.max%": f,
    "%Math.min%": p,
    "%Math.pow%": h,
    "%Math.round%": m,
    "%Math.sign%": g,
    "%Reflect.getPrototypeOf%": L
  };
  if (R)
    try {
      null.error;
    } catch (U) {
      var D = R(R(U));
      I["%Error.prototype%"] = D;
    }
  var M = function U(C) {
    var Z;
    if (C === "%AsyncFunction%")
      Z = S("async function () {}");
    else if (C === "%GeneratorFunction%")
      Z = S("function* () {}");
    else if (C === "%AsyncGeneratorFunction%")
      Z = S("async function* () {}");
    else if (C === "%AsyncGenerator%") {
      var z = U("%AsyncGeneratorFunction%");
      z && (Z = z.prototype);
    } else if (C === "%AsyncIteratorPrototype%") {
      var re = U("%AsyncGenerator%");
      re && R && (Z = R(re.prototype));
    }
    return I[C] = Z, Z;
  }, E = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, oe = fn(), K = /* @__PURE__ */ Ed(), N = oe.call(q, Array.prototype.concat), dt = oe.call(W, Array.prototype.splice), y = oe.call(q, String.prototype.replace), w = oe.call(q, String.prototype.slice), j = oe.call(q, RegExp.prototype.exec), F = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, H = /\\(\\)?/g, V = function(C) {
    var Z = w(C, 0, 1), z = w(C, -1);
    if (Z === "%" && z !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (z === "%" && Z !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var re = [];
    return y(C, F, function(ne, de, Q, et) {
      re[re.length] = Q ? y(et, H, "$1") : de || ne;
    }), re;
  }, Y = function(C, Z) {
    var z = C, re;
    if (K(E, z) && (re = E[z], z = "%" + re[0] + "%"), K(I, z)) {
      var ne = I[z];
      if (ne === v && (ne = M(z)), typeof ne > "u" && !Z)
        throw new s("intrinsic " + C + " exists, but is not available. Please file an issue!");
      return {
        alias: re,
        name: z,
        value: ne
      };
    }
    throw new a("intrinsic " + C + " does not exist!");
  };
  return hi = function(C, Z) {
    if (typeof C != "string" || C.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof Z != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (j(/^%?[^%]*%?$/, C) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var z = V(C), re = z.length > 0 ? z[0] : "", ne = Y("%" + re + "%", Z), de = ne.name, Q = ne.value, et = !1, Ye = ne.alias;
    Ye && (re = Ye[0], dt(z, N([0, 1], Ye)));
    for (var x = 1, ge = !0; x < z.length; x += 1) {
      var Ze = z[x], pn = w(Ze, 0, 1), hn = w(Ze, -1);
      if ((pn === '"' || pn === "'" || pn === "`" || hn === '"' || hn === "'" || hn === "`") && pn !== hn)
        throw new a("property names with quotes must have matching quotes");
      if ((Ze === "constructor" || !ge) && (et = !0), re += "." + Ze, de = "%" + re + "%", K(I, de))
        Q = I[de];
      else if (Q != null) {
        if (!(Ze in Q)) {
          if (!Z)
            throw new s("base intrinsic for " + C + " exists, but the property is not available.");
          return;
        }
        if (P && x + 1 >= z.length) {
          var mn = P(Q, Ze);
          ge = !!mn, ge && "get" in mn && !("originalValue" in mn.get) ? Q = mn.get : Q = Q[Ze];
        } else
          ge = K(Q, Ze), Q = Q[Ze];
        ge && !et && (I[de] = Q);
      }
    }
    return Q;
  }, hi;
}
var mi, Nu;
function dn() {
  if (Nu) return mi;
  Nu = 1;
  var e = /* @__PURE__ */ Pd(), t = Ws(), r = t([e("%String.prototype.indexOf%")]);
  return mi = function(o, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!i)
    );
    return typeof a == "function" && r(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, mi;
}
var yi, Ou;
function ob() {
  if (Ou) return yi;
  Ou = 1;
  var e = vo()(), t = /* @__PURE__ */ dn(), r = t("Object.prototype.toString"), n = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : r(s) === "[object Arguments]";
  }, o = function(s) {
    return n(s) ? !0 : s !== null && typeof s == "object" && "length" in s && typeof s.length == "number" && s.length >= 0 && r(s) !== "[object Array]" && "callee" in s && r(s.callee) === "[object Function]";
  }, i = (function() {
    return n(arguments);
  })();
  return n.isLegacyArguments = o, yi = i ? n : o, yi;
}
var gi, Au;
function ib() {
  if (Au) return gi;
  Au = 1;
  var e = /* @__PURE__ */ dn(), t = vo()(), r = /* @__PURE__ */ Ed(), n = /* @__PURE__ */ Ar(), o;
  if (t) {
    var i = e("RegExp.prototype.exec"), a = {}, s = function() {
      throw a;
    }, c = {
      toString: s,
      valueOf: s
    };
    typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = s), o = function(p) {
      if (!p || typeof p != "object")
        return !1;
      var h = (
        /** @type {NonNullable<typeof gOPD>} */
        n(
          /** @type {{ lastIndex?: unknown }} */
          p,
          "lastIndex"
        )
      ), m = h && r(h, "value");
      if (!m)
        return !1;
      try {
        i(
          p,
          /** @type {string} */
          /** @type {unknown} */
          c
        );
      } catch (g) {
        return g === a;
      }
    };
  } else {
    var u = e("Object.prototype.toString"), d = "[object RegExp]";
    o = function(p) {
      return !p || typeof p != "object" && typeof p != "function" ? !1 : u(p) === d;
    };
  }
  return gi = o, gi;
}
var vi, Ru;
function ab() {
  if (Ru) return vi;
  Ru = 1;
  var e = /* @__PURE__ */ dn(), t = ib(), r = e("RegExp.prototype.exec"), n = /* @__PURE__ */ ln();
  return vi = function(i) {
    if (!t(i))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(i, s) !== null;
    };
  }, vi;
}
var bi, Mu;
function sb() {
  if (Mu) return bi;
  Mu = 1;
  const e = (
    /** @type {GeneratorFunctionConstructor} */
    (function* () {
    }).constructor
  );
  return bi = () => e, bi;
}
var wi, Iu;
function cb() {
  if (Iu) return wi;
  Iu = 1;
  var e = /* @__PURE__ */ dn(), t = /* @__PURE__ */ ab(), r = t(/^\s*(?:function)?\*/), n = vo()(), o = Hs(), i = e("Object.prototype.toString"), a = e("Function.prototype.toString"), s = /* @__PURE__ */ sb();
  return wi = function(u) {
    if (typeof u != "function")
      return !1;
    if (r(a(u)))
      return !0;
    if (!n) {
      var d = i(u);
      return d === "[object GeneratorFunction]";
    }
    if (!o)
      return !1;
    var f = s();
    return f && o(u) === f.prototype;
  }, wi;
}
var xi, Du;
function ub() {
  if (Du) return xi;
  Du = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, r, n;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      r = Object.defineProperty({}, "length", {
        get: function() {
          throw n;
        }
      }), n = {}, t(function() {
        throw 42;
      }, null, r);
    } catch (P) {
      P !== n && (t = null);
    }
  else
    t = null;
  var o = /^\s*class\b/, i = function(T) {
    try {
      var O = e.call(T);
      return o.test(O);
    } catch {
      return !1;
    }
  }, a = function(T) {
    try {
      return i(T) ? !1 : (e.call(T), !0);
    } catch {
      return !1;
    }
  }, s = Object.prototype.toString, c = "[object Object]", u = "[object Function]", d = "[object GeneratorFunction]", f = "[object HTMLAllCollection]", p = "[object HTML document.all class]", h = "[object HTMLCollection]", m = typeof Symbol == "function" && !!Symbol.toStringTag, g = !(0 in [,]), b = function() {
    return !1;
  };
  if (typeof document == "object") {
    var S = document.all;
    s.call(S) === s.call(document.all) && (b = function(T) {
      if ((g || !T) && (typeof T > "u" || typeof T == "object"))
        try {
          var O = s.call(T);
          return (O === f || O === p || O === h || O === c) && T("") == null;
        } catch {
        }
      return !1;
    });
  }
  return xi = t ? function(T) {
    if (b(T))
      return !0;
    if (!T || typeof T != "function" && typeof T != "object")
      return !1;
    try {
      t(T, null, r);
    } catch (O) {
      if (O !== n)
        return !1;
    }
    return !i(T) && a(T);
  } : function(T) {
    if (b(T))
      return !0;
    if (!T || typeof T != "function" && typeof T != "object")
      return !1;
    if (m)
      return a(T);
    if (i(T))
      return !1;
    var O = s.call(T);
    return O !== u && O !== d && !/^\[object HTML/.test(O) ? !1 : a(T);
  }, xi;
}
var Si, Cu;
function lb() {
  if (Cu) return Si;
  Cu = 1;
  var e = ub(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, n = function(c, u, d) {
    for (var f = 0, p = c.length; f < p; f++)
      r.call(c, f) && (d == null ? u(c[f], f, c) : u.call(d, c[f], f, c));
  }, o = function(c, u, d) {
    for (var f = 0, p = c.length; f < p; f++)
      d == null ? u(c.charAt(f), f, c) : u.call(d, c.charAt(f), f, c);
  }, i = function(c, u, d) {
    for (var f in c)
      r.call(c, f) && (d == null ? u(c[f], f, c) : u.call(d, c[f], f, c));
  };
  function a(s) {
    return t.call(s) === "[object Array]";
  }
  return Si = function(c, u, d) {
    if (!e(u))
      throw new TypeError("iterator must be a function");
    var f;
    arguments.length >= 3 && (f = d), a(c) ? n(c, u, f) : typeof c == "string" ? o(c, u, f) : i(c, u, f);
  }, Si;
}
var ji, ku;
function fb() {
  return ku || (ku = 1, ji = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ]), ji;
}
var Ei, _u;
function db() {
  if (_u) return Ei;
  _u = 1;
  var e = /* @__PURE__ */ fb(), t = typeof globalThis > "u" ? Qu : globalThis;
  return Ei = function() {
    for (var n = [], o = 0; o < e.length; o++)
      typeof t[e[o]] == "function" && (n[n.length] = e[o]);
    return n;
  }, Ei;
}
var Pi = { exports: {} }, Ti, Fu;
function pb() {
  if (Fu) return Ti;
  Fu = 1;
  var e = /* @__PURE__ */ bo(), t = /* @__PURE__ */ wd(), r = /* @__PURE__ */ ln(), n = /* @__PURE__ */ Ar();
  return Ti = function(i, a, s) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new r("`obj` must be an object or a function`");
    if (typeof a != "string" && typeof a != "symbol")
      throw new r("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new r("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new r("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new r("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new r("`loose`, if provided, must be a boolean");
    var c = arguments.length > 3 ? arguments[3] : null, u = arguments.length > 4 ? arguments[4] : null, d = arguments.length > 5 ? arguments[5] : null, f = arguments.length > 6 ? arguments[6] : !1, p = !!n && n(i, a);
    if (e)
      e(i, a, {
        configurable: d === null && p ? p.configurable : !d,
        enumerable: c === null && p ? p.enumerable : !c,
        value: s,
        writable: u === null && p ? p.writable : !u
      });
    else if (f || !c && !u && !d)
      i[a] = s;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, Ti;
}
var Ni, Bu;
function hb() {
  if (Bu) return Ni;
  Bu = 1;
  var e = /* @__PURE__ */ bo(), t = function() {
    return !!e;
  };
  return t.hasArrayLengthDefineBug = function() {
    if (!e)
      return null;
    try {
      return e([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, Ni = t, Ni;
}
var Oi, Lu;
function mb() {
  if (Lu) return Oi;
  Lu = 1;
  var e = /* @__PURE__ */ Pd(), t = /* @__PURE__ */ pb(), r = /* @__PURE__ */ hb()(), n = /* @__PURE__ */ Ar(), o = /* @__PURE__ */ ln(), i = e("%Math.floor%");
  return Oi = function(s, c) {
    if (typeof s != "function")
      throw new o("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || i(c) !== c)
      throw new o("`length` must be a positive 32-bit integer");
    var u = arguments.length > 2 && !!arguments[2], d = !0, f = !0;
    if ("length" in s && n) {
      var p = n(s, "length");
      p && !p.configurable && (d = !1), p && !p.writable && (f = !1);
    }
    return (d || f || !u) && (r ? t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c
    )), s;
  }, Oi;
}
var Ai, qu;
function yb() {
  if (qu) return Ai;
  qu = 1;
  var e = fn(), t = $s(), r = jd();
  return Ai = function() {
    return r(e, t, arguments);
  }, Ai;
}
var Uu;
function gb() {
  return Uu || (Uu = 1, (function(e) {
    var t = /* @__PURE__ */ mb(), r = /* @__PURE__ */ bo(), n = Ws(), o = yb();
    e.exports = function(a) {
      var s = n(arguments), c = a.length - (arguments.length - 1);
      return t(
        s,
        1 + (c > 0 ? c : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: o }) : e.exports.apply = o;
  })(Pi)), Pi.exports;
}
var Ri, zu;
function Td() {
  if (zu) return Ri;
  zu = 1;
  var e = lb(), t = /* @__PURE__ */ db(), r = gb(), n = /* @__PURE__ */ dn(), o = /* @__PURE__ */ Ar(), i = Hs(), a = n("Object.prototype.toString"), s = vo()(), c = typeof globalThis > "u" ? Qu : globalThis, u = t(), d = n("String.prototype.slice"), f = n("Array.prototype.indexOf", !0) || function(b, S) {
    for (var P = 0; P < b.length; P += 1)
      if (b[P] === S)
        return P;
    return -1;
  }, p = { __proto__: null };
  s && o && i ? e(u, function(g) {
    var b = new c[g]();
    if (Symbol.toStringTag in b && i) {
      var S = i(b), P = o(S, Symbol.toStringTag);
      if (!P && S) {
        var T = i(S);
        P = o(T, Symbol.toStringTag);
      }
      if (P && P.get) {
        var O = r(P.get);
        p[
          /** @type {`$${import('.').TypedArrayName}`} */
          "$" + g
        ] = O;
      }
    }
  }) : e(u, function(g) {
    var b = new c[g](), S = b.slice || b.set;
    if (S) {
      var P = (
        /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
        // @ts-expect-error TODO FIXME
        r(S)
      );
      p[
        /** @type {`$${import('.').TypedArrayName}`} */
        "$" + g
      ] = P;
    }
  });
  var h = function(b) {
    var S = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      p,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(P, T) {
        if (!S)
          try {
            "$" + P(b) === T && (S = /** @type {import('.').TypedArrayName} */
            d(T, 1));
          } catch {
          }
      }
    ), S;
  }, m = function(b) {
    var S = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      p,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(P, T) {
        if (!S)
          try {
            P(b), S = /** @type {import('.').TypedArrayName} */
            d(T, 1);
          } catch {
          }
      }
    ), S;
  };
  return Ri = function(b) {
    if (!b || typeof b != "object")
      return !1;
    if (!s) {
      var S = d(a(b), 8, -1);
      return f(u, S) > -1 ? S : S !== "Object" ? !1 : m(b);
    }
    return o ? h(b) : null;
  }, Ri;
}
var Mi, Yu;
function vb() {
  if (Yu) return Mi;
  Yu = 1;
  var e = /* @__PURE__ */ Td();
  return Mi = function(r) {
    return !!e(r);
  }, Mi;
}
var Zu;
function bb() {
  return Zu || (Zu = 1, (function(e) {
    var t = /* @__PURE__ */ ob(), r = cb(), n = /* @__PURE__ */ Td(), o = /* @__PURE__ */ vb();
    function i(x) {
      return x.call.bind(x);
    }
    var a = typeof BigInt < "u", s = typeof Symbol < "u", c = i(Object.prototype.toString), u = i(Number.prototype.valueOf), d = i(String.prototype.valueOf), f = i(Boolean.prototype.valueOf);
    if (a)
      var p = i(BigInt.prototype.valueOf);
    if (s)
      var h = i(Symbol.prototype.valueOf);
    function m(x, ge) {
      if (typeof x != "object")
        return !1;
      try {
        return ge(x), !0;
      } catch {
        return !1;
      }
    }
    e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = o;
    function g(x) {
      return typeof Promise < "u" && x instanceof Promise || x !== null && typeof x == "object" && typeof x.then == "function" && typeof x.catch == "function";
    }
    e.isPromise = g;
    function b(x) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(x) : o(x) || w(x);
    }
    e.isArrayBufferView = b;
    function S(x) {
      return n(x) === "Uint8Array";
    }
    e.isUint8Array = S;
    function P(x) {
      return n(x) === "Uint8ClampedArray";
    }
    e.isUint8ClampedArray = P;
    function T(x) {
      return n(x) === "Uint16Array";
    }
    e.isUint16Array = T;
    function O(x) {
      return n(x) === "Uint32Array";
    }
    e.isUint32Array = O;
    function k(x) {
      return n(x) === "Int8Array";
    }
    e.isInt8Array = k;
    function _(x) {
      return n(x) === "Int16Array";
    }
    e.isInt16Array = _;
    function R(x) {
      return n(x) === "Int32Array";
    }
    e.isInt32Array = R;
    function B(x) {
      return n(x) === "Float32Array";
    }
    e.isFloat32Array = B;
    function L(x) {
      return n(x) === "Float64Array";
    }
    e.isFloat64Array = L;
    function W(x) {
      return n(x) === "BigInt64Array";
    }
    e.isBigInt64Array = W;
    function q(x) {
      return n(x) === "BigUint64Array";
    }
    e.isBigUint64Array = q;
    function v(x) {
      return c(x) === "[object Map]";
    }
    v.working = typeof Map < "u" && v(/* @__PURE__ */ new Map());
    function A(x) {
      return typeof Map > "u" ? !1 : v.working ? v(x) : x instanceof Map;
    }
    e.isMap = A;
    function I(x) {
      return c(x) === "[object Set]";
    }
    I.working = typeof Set < "u" && I(/* @__PURE__ */ new Set());
    function D(x) {
      return typeof Set > "u" ? !1 : I.working ? I(x) : x instanceof Set;
    }
    e.isSet = D;
    function M(x) {
      return c(x) === "[object WeakMap]";
    }
    M.working = typeof WeakMap < "u" && M(/* @__PURE__ */ new WeakMap());
    function E(x) {
      return typeof WeakMap > "u" ? !1 : M.working ? M(x) : x instanceof WeakMap;
    }
    e.isWeakMap = E;
    function oe(x) {
      return c(x) === "[object WeakSet]";
    }
    oe.working = typeof WeakSet < "u" && oe(/* @__PURE__ */ new WeakSet());
    function K(x) {
      return oe(x);
    }
    e.isWeakSet = K;
    function N(x) {
      return c(x) === "[object ArrayBuffer]";
    }
    N.working = typeof ArrayBuffer < "u" && N(new ArrayBuffer());
    function dt(x) {
      return typeof ArrayBuffer > "u" ? !1 : N.working ? N(x) : x instanceof ArrayBuffer;
    }
    e.isArrayBuffer = dt;
    function y(x) {
      return c(x) === "[object DataView]";
    }
    y.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && y(new DataView(new ArrayBuffer(1), 0, 1));
    function w(x) {
      return typeof DataView > "u" ? !1 : y.working ? y(x) : x instanceof DataView;
    }
    e.isDataView = w;
    var j = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function F(x) {
      return c(x) === "[object SharedArrayBuffer]";
    }
    function H(x) {
      return typeof j > "u" ? !1 : (typeof F.working > "u" && (F.working = F(new j())), F.working ? F(x) : x instanceof j);
    }
    e.isSharedArrayBuffer = H;
    function V(x) {
      return c(x) === "[object AsyncFunction]";
    }
    e.isAsyncFunction = V;
    function Y(x) {
      return c(x) === "[object Map Iterator]";
    }
    e.isMapIterator = Y;
    function U(x) {
      return c(x) === "[object Set Iterator]";
    }
    e.isSetIterator = U;
    function C(x) {
      return c(x) === "[object Generator]";
    }
    e.isGeneratorObject = C;
    function Z(x) {
      return c(x) === "[object WebAssembly.Module]";
    }
    e.isWebAssemblyCompiledModule = Z;
    function z(x) {
      return m(x, u);
    }
    e.isNumberObject = z;
    function re(x) {
      return m(x, d);
    }
    e.isStringObject = re;
    function ne(x) {
      return m(x, f);
    }
    e.isBooleanObject = ne;
    function de(x) {
      return a && m(x, p);
    }
    e.isBigIntObject = de;
    function Q(x) {
      return s && m(x, h);
    }
    e.isSymbolObject = Q;
    function et(x) {
      return z(x) || re(x) || ne(x) || de(x) || Q(x);
    }
    e.isBoxedPrimitive = et;
    function Ye(x) {
      return typeof Uint8Array < "u" && (dt(x) || H(x));
    }
    e.isAnyArrayBuffer = Ye, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(x) {
      Object.defineProperty(e, x, {
        enumerable: !1,
        value: function() {
          throw new Error(x + " is not supported in userland");
        }
      });
    });
  })(Do)), Do;
}
var Ii, $u;
function wb() {
  return $u || ($u = 1, Ii = function(t) {
    return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
  }), Ii;
}
var Sn = { exports: {} }, Wu;
function xb() {
  return Wu || (Wu = 1, typeof Object.create == "function" ? Sn.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : Sn.exports = function(t, r) {
    if (r) {
      t.super_ = r;
      var n = function() {
      };
      n.prototype = r.prototype, t.prototype = new n(), t.prototype.constructor = t;
    }
  }), Sn.exports;
}
var Hu;
function Sb() {
  return Hu || (Hu = 1, (function(e) {
    var t = Object.getOwnPropertyDescriptors || function(w) {
      for (var j = Object.keys(w), F = {}, H = 0; H < j.length; H++)
        F[j[H]] = Object.getOwnPropertyDescriptor(w, j[H]);
      return F;
    }, r = /%[sdj%]/g;
    e.format = function(y) {
      if (!k(y)) {
        for (var w = [], j = 0; j < arguments.length; j++)
          w.push(a(arguments[j]));
        return w.join(" ");
      }
      for (var j = 1, F = arguments, H = F.length, V = String(y).replace(r, function(U) {
        if (U === "%%") return "%";
        if (j >= H) return U;
        switch (U) {
          case "%s":
            return String(F[j++]);
          case "%d":
            return Number(F[j++]);
          case "%j":
            try {
              return JSON.stringify(F[j++]);
            } catch {
              return "[Circular]";
            }
          default:
            return U;
        }
      }), Y = F[j]; j < H; Y = F[++j])
        P(Y) || !L(Y) ? V += " " + Y : V += " " + a(Y);
      return V;
    }, e.deprecate = function(y, w) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return y;
      if (typeof process > "u")
        return function() {
          return e.deprecate(y, w).apply(this, arguments);
        };
      var j = !1;
      function F() {
        if (!j) {
          if (process.throwDeprecation)
            throw new Error(w);
          process.traceDeprecation ? console.trace(w) : console.error(w), j = !0;
        }
        return y.apply(this, arguments);
      }
      return F;
    };
    var n = {}, o = /^$/;
    if (process.env.NODE_DEBUG) {
      var i = process.env.NODE_DEBUG;
      i = i.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), o = new RegExp("^" + i + "$", "i");
    }
    e.debuglog = function(y) {
      if (y = y.toUpperCase(), !n[y])
        if (o.test(y)) {
          var w = process.pid;
          n[y] = function() {
            var j = e.format.apply(e, arguments);
            console.error("%s %d: %s", y, w, j);
          };
        } else
          n[y] = function() {
          };
      return n[y];
    };
    function a(y, w) {
      var j = {
        seen: [],
        stylize: c
      };
      return arguments.length >= 3 && (j.depth = arguments[2]), arguments.length >= 4 && (j.colors = arguments[3]), S(w) ? j.showHidden = w : w && e._extend(j, w), R(j.showHidden) && (j.showHidden = !1), R(j.depth) && (j.depth = 2), R(j.colors) && (j.colors = !1), R(j.customInspect) && (j.customInspect = !0), j.colors && (j.stylize = s), d(j, y, j.depth);
    }
    e.inspect = a, a.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, a.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
    function s(y, w) {
      var j = a.styles[w];
      return j ? "\x1B[" + a.colors[j][0] + "m" + y + "\x1B[" + a.colors[j][1] + "m" : y;
    }
    function c(y, w) {
      return y;
    }
    function u(y) {
      var w = {};
      return y.forEach(function(j, F) {
        w[j] = !0;
      }), w;
    }
    function d(y, w, j) {
      if (y.customInspect && w && v(w.inspect) && // Filter out the util module, it's inspect function is special
      w.inspect !== e.inspect && // Also filter out any prototype objects using the circular check.
      !(w.constructor && w.constructor.prototype === w)) {
        var F = w.inspect(j, y);
        return k(F) || (F = d(y, F, j)), F;
      }
      var H = f(y, w);
      if (H)
        return H;
      var V = Object.keys(w), Y = u(V);
      if (y.showHidden && (V = Object.getOwnPropertyNames(w)), q(w) && (V.indexOf("message") >= 0 || V.indexOf("description") >= 0))
        return p(w);
      if (V.length === 0) {
        if (v(w)) {
          var U = w.name ? ": " + w.name : "";
          return y.stylize("[Function" + U + "]", "special");
        }
        if (B(w))
          return y.stylize(RegExp.prototype.toString.call(w), "regexp");
        if (W(w))
          return y.stylize(Date.prototype.toString.call(w), "date");
        if (q(w))
          return p(w);
      }
      var C = "", Z = !1, z = ["{", "}"];
      if (b(w) && (Z = !0, z = ["[", "]"]), v(w)) {
        var re = w.name ? ": " + w.name : "";
        C = " [Function" + re + "]";
      }
      if (B(w) && (C = " " + RegExp.prototype.toString.call(w)), W(w) && (C = " " + Date.prototype.toUTCString.call(w)), q(w) && (C = " " + p(w)), V.length === 0 && (!Z || w.length == 0))
        return z[0] + C + z[1];
      if (j < 0)
        return B(w) ? y.stylize(RegExp.prototype.toString.call(w), "regexp") : y.stylize("[Object]", "special");
      y.seen.push(w);
      var ne;
      return Z ? ne = h(y, w, j, Y, V) : ne = V.map(function(de) {
        return m(y, w, j, Y, de, Z);
      }), y.seen.pop(), g(ne, C, z);
    }
    function f(y, w) {
      if (R(w))
        return y.stylize("undefined", "undefined");
      if (k(w)) {
        var j = "'" + JSON.stringify(w).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return y.stylize(j, "string");
      }
      if (O(w))
        return y.stylize("" + w, "number");
      if (S(w))
        return y.stylize("" + w, "boolean");
      if (P(w))
        return y.stylize("null", "null");
    }
    function p(y) {
      return "[" + Error.prototype.toString.call(y) + "]";
    }
    function h(y, w, j, F, H) {
      for (var V = [], Y = 0, U = w.length; Y < U; ++Y)
        oe(w, String(Y)) ? V.push(m(
          y,
          w,
          j,
          F,
          String(Y),
          !0
        )) : V.push("");
      return H.forEach(function(C) {
        C.match(/^\d+$/) || V.push(m(
          y,
          w,
          j,
          F,
          C,
          !0
        ));
      }), V;
    }
    function m(y, w, j, F, H, V) {
      var Y, U, C;
      if (C = Object.getOwnPropertyDescriptor(w, H) || { value: w[H] }, C.get ? C.set ? U = y.stylize("[Getter/Setter]", "special") : U = y.stylize("[Getter]", "special") : C.set && (U = y.stylize("[Setter]", "special")), oe(F, H) || (Y = "[" + H + "]"), U || (y.seen.indexOf(C.value) < 0 ? (P(j) ? U = d(y, C.value, null) : U = d(y, C.value, j - 1), U.indexOf(`
`) > -1 && (V ? U = U.split(`
`).map(function(Z) {
        return "  " + Z;
      }).join(`
`).slice(2) : U = `
` + U.split(`
`).map(function(Z) {
        return "   " + Z;
      }).join(`
`))) : U = y.stylize("[Circular]", "special")), R(Y)) {
        if (V && H.match(/^\d+$/))
          return U;
        Y = JSON.stringify("" + H), Y.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (Y = Y.slice(1, -1), Y = y.stylize(Y, "name")) : (Y = Y.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), Y = y.stylize(Y, "string"));
      }
      return Y + ": " + U;
    }
    function g(y, w, j) {
      var F = y.reduce(function(H, V) {
        return V.indexOf(`
`) >= 0, H + V.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return F > 60 ? j[0] + (w === "" ? "" : w + `
 `) + " " + y.join(`,
  `) + " " + j[1] : j[0] + w + " " + y.join(", ") + " " + j[1];
    }
    e.types = bb();
    function b(y) {
      return Array.isArray(y);
    }
    e.isArray = b;
    function S(y) {
      return typeof y == "boolean";
    }
    e.isBoolean = S;
    function P(y) {
      return y === null;
    }
    e.isNull = P;
    function T(y) {
      return y == null;
    }
    e.isNullOrUndefined = T;
    function O(y) {
      return typeof y == "number";
    }
    e.isNumber = O;
    function k(y) {
      return typeof y == "string";
    }
    e.isString = k;
    function _(y) {
      return typeof y == "symbol";
    }
    e.isSymbol = _;
    function R(y) {
      return y === void 0;
    }
    e.isUndefined = R;
    function B(y) {
      return L(y) && I(y) === "[object RegExp]";
    }
    e.isRegExp = B, e.types.isRegExp = B;
    function L(y) {
      return typeof y == "object" && y !== null;
    }
    e.isObject = L;
    function W(y) {
      return L(y) && I(y) === "[object Date]";
    }
    e.isDate = W, e.types.isDate = W;
    function q(y) {
      return L(y) && (I(y) === "[object Error]" || y instanceof Error);
    }
    e.isError = q, e.types.isNativeError = q;
    function v(y) {
      return typeof y == "function";
    }
    e.isFunction = v;
    function A(y) {
      return y === null || typeof y == "boolean" || typeof y == "number" || typeof y == "string" || typeof y == "symbol" || // ES6 symbol
      typeof y > "u";
    }
    e.isPrimitive = A, e.isBuffer = wb();
    function I(y) {
      return Object.prototype.toString.call(y);
    }
    function D(y) {
      return y < 10 ? "0" + y.toString(10) : y.toString(10);
    }
    var M = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function E() {
      var y = /* @__PURE__ */ new Date(), w = [
        D(y.getHours()),
        D(y.getMinutes()),
        D(y.getSeconds())
      ].join(":");
      return [y.getDate(), M[y.getMonth()], w].join(" ");
    }
    e.log = function() {
      console.log("%s - %s", E(), e.format.apply(e, arguments));
    }, e.inherits = xb(), e._extend = function(y, w) {
      if (!w || !L(w)) return y;
      for (var j = Object.keys(w), F = j.length; F--; )
        y[j[F]] = w[j[F]];
      return y;
    };
    function oe(y, w) {
      return Object.prototype.hasOwnProperty.call(y, w);
    }
    var K = typeof Symbol < "u" ? /* @__PURE__ */ Symbol("util.promisify.custom") : void 0;
    e.promisify = function(w) {
      if (typeof w != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (K && w[K]) {
        var j = w[K];
        if (typeof j != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(j, K, {
          value: j,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), j;
      }
      function j() {
        for (var F, H, V = new Promise(function(C, Z) {
          F = C, H = Z;
        }), Y = [], U = 0; U < arguments.length; U++)
          Y.push(arguments[U]);
        Y.push(function(C, Z) {
          C ? H(C) : F(Z);
        });
        try {
          w.apply(this, Y);
        } catch (C) {
          H(C);
        }
        return V;
      }
      return Object.setPrototypeOf(j, Object.getPrototypeOf(w)), K && Object.defineProperty(j, K, {
        value: j,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        j,
        t(w)
      );
    }, e.promisify.custom = K;
    function N(y, w) {
      if (!y) {
        var j = new Error("Promise was rejected with a falsy value");
        j.reason = y, y = j;
      }
      return w(y);
    }
    function dt(y) {
      if (typeof y != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function w() {
        for (var j = [], F = 0; F < arguments.length; F++)
          j.push(arguments[F]);
        var H = j.pop();
        if (typeof H != "function")
          throw new TypeError("The last argument must be of type Function");
        var V = this, Y = function() {
          return H.apply(V, arguments);
        };
        y.apply(this, j).then(
          function(U) {
            process.nextTick(Y.bind(null, null, U));
          },
          function(U) {
            process.nextTick(N.bind(null, U, Y));
          }
        );
      }
      return Object.setPrototypeOf(w, Object.getPrototypeOf(y)), Object.defineProperties(
        w,
        t(y)
      ), w;
    }
    e.callbackify = dt;
  })(Io)), Io;
}
function ce(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Vt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Vs(e) {
  Vt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Fr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Nd(e, t) {
  Vt(2, arguments);
  var r = Vs(e), n = ce(t);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function Od(e, t) {
  Vt(2, arguments);
  var r = Vs(e), n = ce(t);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  if (!n)
    return r;
  var o = r.getDate(), i = new Date(r.getTime());
  i.setMonth(r.getMonth() + n + 1, 0);
  var a = i.getDate();
  return o >= a ? i : (r.setFullYear(i.getFullYear(), i.getMonth(), o), r);
}
function jb(e, t) {
  if (Vt(2, arguments), !t || Fr(t) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = t.years ? ce(t.years) : 0, n = t.months ? ce(t.months) : 0, o = t.weeks ? ce(t.weeks) : 0, i = t.days ? ce(t.days) : 0, a = t.hours ? ce(t.hours) : 0, s = t.minutes ? ce(t.minutes) : 0, c = t.seconds ? ce(t.seconds) : 0, u = Vs(e), d = n || r ? Od(u, n + r * 12) : u, f = i || o ? Nd(d, i + o * 7) : d, p = s + a * 60, h = c + p * 60, m = h * 1e3, g = new Date(f.getTime() + m);
  return g;
}
const Eb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jb
}, Symbol.toStringTag, { value: "Module" })), Pb = /* @__PURE__ */ ta(Eb);
function Tb(e, t) {
  Vt(2, arguments);
  var r = ce(t);
  return Nd(e, -r);
}
function Nb(e, t) {
  Vt(2, arguments);
  var r = ce(t);
  return Od(e, -r);
}
function Ob(e, t) {
  if (Vt(2, arguments), !t || Fr(t) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = t.years ? ce(t.years) : 0, n = t.months ? ce(t.months) : 0, o = t.weeks ? ce(t.weeks) : 0, i = t.days ? ce(t.days) : 0, a = t.hours ? ce(t.hours) : 0, s = t.minutes ? ce(t.minutes) : 0, c = t.seconds ? ce(t.seconds) : 0, u = Nb(e, n + r * 12), d = Tb(u, i + o * 7), f = s + a * 60, p = c + f * 60, h = p * 1e3, m = new Date(d.getTime() - h);
  return m;
}
const Ab = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ob
}, Symbol.toStringTag, { value: "Module" })), Rb = /* @__PURE__ */ ta(Ab);
var Di, Vu;
function Mb() {
  if (Vu) return Di;
  Vu = 1;
  const e = Sb(), n = {
    add: Pb,
    sub: Rb
  }, o = {
    d: "days",
    w: "weeks",
    M: "months",
    y: "years",
    h: "hours",
    m: "minutes",
    s: "seconds"
  }, i = (a) => a.toISOString().replace("T", " ").replace(/\.[0-9]{3}Z/, "");
  return Di = {
    ungroup(a) {
      return a.yg ? a.yg : a;
    },
    unescape(a) {
      const s = new RegExp(`\\\\(['"])`, "g");
      return a.replace(s, "$1");
    },
    stringToRegExp(a, s) {
      let c = a.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
      return s === "^" ? c = "^" + c : s === "$" && (c = c + "$"), new RegExp(c, "i");
    },
    relDateToAbsolute(a, s, c) {
      const u = /* @__PURE__ */ new Date(), d = n[a](u, { [o[c]]: s });
      return i(d);
    },
    debug() {
      if (!process.env.DEBUG || !/nql/.test(process.env.DEBUG))
        return;
      const a = arguments[0], s = Array.prototype.slice.call(arguments, 1), c = [a];
      s.forEach(function(u) {
        c.push(e.inspect(u, !1, null));
      }), console.log.apply(this, c);
    }
  }, Di;
}
var Gu;
function Ib() {
  if (Gu) return wn;
  Gu = 1;
  const e = Lv().parser;
  return e.yy = Mb(), wn.lex = (t) => {
    e.lexer.setInput(t);
    let r = e.lexer.lex();
    const n = [];
    for (; r !== e.lexer.EOF; )
      n.push({ token: e.terminals_[r], matched: e.lexer.match }), r = e.lexer.lex();
    return n;
  }, wn.parse = (t, r) => e.parse(t, r || {}), wn;
}
var Ci, Ku;
function Db() {
  return Ku || (Ku = 1, Ci = Ib()), Ci;
}
var Cb = Db();
const kb = /* @__PURE__ */ Bd(Cb);
function _b(e, t) {
  const r = e.split("."), n = t.split(".");
  if (r.length !== n.length)
    return null;
  const o = {};
  for (let i = 0; i < r.length; i += 1) {
    const a = r[i], s = n[i];
    if (a.startsWith(":")) {
      o[a.slice(1)] = s;
      continue;
    }
    if (a !== s)
      return null;
  }
  return o;
}
function Ad(e, t, r) {
  const n = e[t];
  if (n)
    return {
      definition: n,
      context: {
        key: t,
        pattern: t,
        params: {},
        timezone: r
      }
    };
  for (const [o, i] of Object.entries(e))
    if (i.parseKeys?.includes(t))
      return {
        definition: i,
        context: {
          key: o,
          pattern: o,
          params: {},
          timezone: r
        }
      };
  for (const [o, i] of Object.entries(e)) {
    if (!o.includes(":"))
      continue;
    const a = _b(o, t);
    if (a)
      return {
        definition: i,
        context: {
          key: t,
          pattern: o,
          params: a,
          timezone: r
        }
      };
  }
}
function Rd(e) {
  if (e)
    try {
      return kb.parse(e);
    } catch {
      return;
    }
}
function Fb(e) {
  return e.map((t, r) => ({
    ...t,
    id: `${t.field}:${r + 1}`
  }));
}
function Bb(e, t) {
  const r = /* @__PURE__ */ new Set();
  return Object.entries(e).forEach(([n, o]) => {
    o.ui.type === t && (r.add(n), o.parseKeys?.forEach((i) => r.add(i)));
  }), r;
}
function Xi(e, t) {
  return Object.keys(e).some((r) => t.has(r)) ? !0 : Object.values(e).some((r) => Array.isArray(r) ? r.some((n) => n !== null && typeof n == "object" && Xi(n, t)) : r !== null && typeof r == "object" && !(r instanceof RegExp) && Xi(r, t));
}
function Lb(e, t, r) {
  return e.flatMap((n) => {
    const o = Object.keys(n);
    if (o.length !== 1 || o[0].startsWith("$"))
      return [];
    const i = Ad(t, o[0], r);
    if (i) {
      const a = i.definition.codec.parse(n, i.context);
      if (a)
        return [a];
    }
    return [];
  });
}
function qb(e) {
  return [...e].sort((t, r) => t.localeCompare(r));
}
function Ub(e, t, r) {
  const n = e.flatMap((o) => {
    const i = Ad(t, o.field, r);
    return i ? i.definition.codec.serialize(o, i.context) ?? [] : [];
  });
  if (n.length)
    return qb(n).join("+");
}
const zb = Bb(go, "date");
function Md(e, t) {
  return Array.isArray(e.$and) ? e.$and.flatMap((r) => Md(r, t)) : Lb([e], go, t);
}
function Yb(e, t) {
  const r = Rd(e ?? "");
  return r ? Fb(Md(r, t)) : [];
}
function Zb(e) {
  const t = Rd(e ?? "");
  return t ? Xi(t, zb) : !1;
}
function Gs(e, t) {
  return Ub(e, go, t);
}
const Id = ["status", "created_at", "body", "post", "author", "reported"], $b = {
  is_not: "is-not",
  not_contains: "does-not-contain",
  before: "is-less",
  after: "is-greater",
  on_or_before: "is-or-less",
  on_or_after: "is-or-greater"
};
function Wb(e) {
  const t = e.indexOf(":");
  if (t <= 0)
    return null;
  const r = e.substring(0, t), n = e.substring(t + 1);
  return n ? {
    operator: $b[r] ?? r,
    value: n
  } : null;
}
function Hb(e) {
  const t = [];
  for (const [r, n] of e.entries()) {
    if (!Id.includes(r))
      continue;
    const o = Wb(n);
    o && t.push({
      id: `${r}:${t.length + 1}`,
      field: r,
      operator: o.operator,
      values: [o.value]
    });
  }
  return t;
}
function Dd(e) {
  Id.forEach((t) => e.delete(t));
}
function Ju(e, t, r) {
  const n = new URLSearchParams(e), o = Gs(t, r);
  return n.delete("filter"), Dd(n), o && n.set("filter", o), n;
}
function Vb(e, t, r = !t) {
  return !!e && r && !t && Zb(e);
}
function Gb(e) {
  const [t, r] = dr(), n = ae(null), o = be(() => t.get("filter") ?? void 0, [t]), i = be(() => t.toString(), [t]), a = be(() => o !== void 0 ? Yb(o, e) : Hb(t), [o, t, e]), [s, c] = Be(a), u = be(() => Gs(s, e), [s, e]);
  vt(() => {
    i !== n.current && (c(a), n.current = i);
  }, [i, a]), vt(() => {
    if (n.current !== null && i !== n.current)
      return;
    const p = Ju(t, s, e), h = p.toString();
    h !== i && (n.current = h, r(p, { replace: !0 }));
  }, [i, s, t, r, e]);
  const d = or((p, h = {}) => {
    const m = typeof p == "function" ? p(s) : p, g = Ju(t, m, e), b = h.replace ?? !0;
    c(m), n.current = g.toString(), r(g, { replace: b });
  }, [s, t, r, e]), f = or(({ replace: p = !0 } = {}) => {
    const h = new URLSearchParams(t);
    h.delete("filter"), Dd(h), c([]), n.current = h.toString(), r(h, { replace: p });
  }, [t, r]);
  return { filters: s, nql: u, setFilters: d, clearFilters: f };
}
function Kb(e) {
  return e.get("id")?.match(/^is:(.+)$/)?.[1];
}
const Jb = ({
  timezone: e,
  singleCommentId: t
}) => {
  const [r, n] = dr(), { filters: o, nql: i, setFilters: a } = Gb(e), s = or((O, k, _ = "is") => {
    const R = [
      ...o.filter((W) => W.field !== O),
      qd(O, _, [k])
    ];
    if (!t) {
      a(R, { replace: !1 });
      return;
    }
    const B = new URLSearchParams(r), L = Gs(R, e);
    B.delete("id"), B.delete("filter"), L && B.set("filter", L), n(B, { replace: !1 });
  }, [o, r, a, n, t, e]), c = be(() => t ? `id:${lr(t)}` : i, [i, t]), u = or(() => {
    n(new URLSearchParams(), { replace: !1 });
  }, [n]), {
    data: d,
    isError: f,
    isFetching: p,
    isFetchingNextPage: h,
    isRefetching: m,
    fetchNextPage: g,
    hasNextPage: b
  } = fd({
    searchParams: {
      ...c ? { filter: c } : {}
    },
    keepPreviousData: !0
  }), S = p && !h && !m, P = c ?? "", T = o.length > 0;
  return /* @__PURE__ */ l.jsx(il, { children: /* @__PURE__ */ l.jsxs(tr, { "data-testid": "comments-page", children: [
    /* @__PURE__ */ l.jsxs(tr.Header, { children: [
      /* @__PURE__ */ l.jsxs(yt, { blurredBackground: !1, sticky: !1, children: [
        /* @__PURE__ */ l.jsx(yt.Left, { children: /* @__PURE__ */ l.jsx(yt.Title, { children: "Comments" }) }),
        !t && !T && /* @__PURE__ */ l.jsx(yt.Actions, { children: /* @__PURE__ */ l.jsx(yt.ActionGroup, { children: /* @__PURE__ */ l.jsx(
          qc,
          {
            filters: o,
            siteTimezone: e,
            onFiltersChange: a
          }
        ) }) })
      ] }),
      !t && T && /* @__PURE__ */ l.jsx(xp, { children: /* @__PURE__ */ l.jsx(
        qc,
        {
          filters: o,
          siteTimezone: e,
          onFiltersChange: a
        }
      ) })
    ] }),
    /* @__PURE__ */ l.jsx(tr.Body, { children: S ? /* @__PURE__ */ l.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ l.jsx(hr, { size: "lg" }) }) : f ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
      /* @__PURE__ */ l.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ l.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ l.jsx(le, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : d?.comments.length ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        _v,
        {
          fetchNextPage: g,
          hasNextPage: b,
          isFetchingNextPage: h,
          isLoading: p && !h,
          items: d?.comments ?? [],
          resetKey: P,
          totalItems: d?.meta?.pagination?.total ?? 0,
          onAddFilter: s
        }
      ),
      t && /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ l.jsx(le, { variant: "outline", onClick: u, children: "Show all comments" }) })
    ] }) : /* @__PURE__ */ l.jsx("div", { className: "flex flex-1 items-center justify-center", children: t ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ l.jsx(Ui, { title: "Comment not found", children: /* @__PURE__ */ l.jsx(_i, {}) }),
      /* @__PURE__ */ l.jsx(le, { className: "mt-4", variant: "outline", onClick: u, children: "Show all comments" })
    ] }) : /* @__PURE__ */ l.jsx(Ui, { title: "No comments yet", children: /* @__PURE__ */ l.jsx(_i, {}) }) }) })
  ] }) });
}, b0 = () => {
  const [e] = dr(), { data: t, isLoading: r } = np({}), n = be(() => Kb(e), [e]), o = e.get("filter") ?? void 0;
  if (!n && Vb(o, !!t, r))
    return /* @__PURE__ */ l.jsx(il, { children: /* @__PURE__ */ l.jsxs(tr, { children: [
      /* @__PURE__ */ l.jsx(tr.Header, { children: /* @__PURE__ */ l.jsx(yt, { blurredBackground: !1, sticky: !1, children: /* @__PURE__ */ l.jsx(yt.Left, { children: /* @__PURE__ */ l.jsx(yt.Title, { children: "Comments" }) }) }) }),
      /* @__PURE__ */ l.jsx(tr.Body, { children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ l.jsx(hr, { size: "lg" }) }) })
    ] }) });
  const a = ep(t?.settings ?? []);
  return /* @__PURE__ */ l.jsx(Jb, { singleCommentId: n, timezone: a });
};
export {
  b0 as default
};
//# sourceMappingURL=comments-yzK0rbWc.mjs.map
