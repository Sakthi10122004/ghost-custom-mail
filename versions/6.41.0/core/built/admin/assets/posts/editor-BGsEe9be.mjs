import { p as $n, j as p, c as De, q as ma, r as ya, i as xa, R as Re, V as se, W as wa, m as ee, B as yt, u as le, b as te, D as Hn, a as fe, k as he, F as va, g as vn, L as ba, d as _a } from "./index-ccmRG8Rd.mjs";
import { M as Ln, A as Ea, a as Sa, b as Na, c as Ca, d as Ma, e as ka, f as Ia } from "./alert-dialog-DiH_9lnq.mjs";
import { C as On, Z as yr, T as xr, P as Aa } from "./zap-FhKG6W2p.mjs";
import { a as ke, c as fo, b as ho, d as Pa, i as un, A as Da } from "./value-kov4qFS9.mjs";
import { r as Ta } from "./hooks-muBZfhoU.mjs";
import { P as wr, a as vr, b as br } from "./popover-DXQWy3ey.mjs";
import { T as _r, b as Er, c as Sr, d as Nr, a as ja } from "./tooltip-ChyXZBO5.mjs";
import { P as bn } from "./plus-Dg3HDbL-.mjs";
import { M as _n, i as za, a as $a, A as Ha, b as La, c as Oa } from "./automations-DFtnFnzP.mjs";
import { B as Ve } from "./button-bsWyESEG.mjs";
import { X as Ba } from "./index-DTo4Qrbc.mjs";
import { L as go, C as po } from "./label-DlsZuCbx.mjs";
import { I as Cr } from "./input-DI_PbeGQ.mjs";
import { L as En } from "./loading-indicator-DUlTXBD-.mjs";
import { S as Ra, a as Va } from "./select-DsXabr89.mjs";
import { P as Fa } from "./pencil-B7SMHG5e.mjs";
import { S as Xa, D as Ya, c as Wa, d as Za, e as Ga } from "./skeleton-9GpF0jm6.mjs";
import { E as qa } from "./ellipsis-Cy0JvlLk.mjs";
const Ua = ma(
  "relative block rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border border-border-default bg-surface-panel shadow-sm hover:shadow-md",
        gradient: [
          "cursor-pointer border border-border-subtle bg-surface-elevated",
          "shadow-[-7px_-6px_42px_8px_rgb(75_225_226_/_28%),7px_6px_42px_8px_rgb(202_103_255_/_32%)]",
          "dark:shadow-[-7px_-6px_42px_8px_rgb(75_225_226_/_36%),7px_6px_42px_8px_rgb(202_103_255_/_38%)]",
          "hover:shadow-[-7px_-4px_42px_10px_rgb(75_225_226_/_38%),7px_8px_42px_10px_rgb(202_103_255_/_42%)]",
          "dark:hover:shadow-[-7px_-4px_42px_10px_rgb(75_225_226_/_50%),7px_8px_42px_10px_rgb(202_103_255_/_52%)]",
          "hover:translate-y-[-2px] hover:scale-[1.01]"
        ],
        info: "border border-state-info/40 bg-state-info/10",
        success: "border border-state-success/40 bg-state-success/10",
        warning: "border border-state-warning/40 bg-state-warning/10",
        destructive: "bg-surface-panel shadow-sm"
      },
      size: {
        sm: "p-2 text-sm",
        md: "p-3",
        lg: "p-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), Mr = $n(
  (e, t) => {
    const {
      variant: n,
      size: o,
      dismissible: r = !1,
      onDismiss: i,
      role: s = "status",
      className: a,
      children: c,
      ...l
    } = e, d = (f) => {
      f.preventDefault(), f.stopPropagation(), r && i && i();
    };
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: t,
        className: De(Ua({ variant: n, size: o }), a),
        role: s,
        ...l,
        children: [
          r && /* @__PURE__ */ p.jsx(
            Ve,
            {
              "aria-label": "Dismiss notification",
              className: "absolute top-1 right-1 size-8 text-text-secondary hover:text-text-primary",
              size: "icon",
              variant: "ghost",
              onClick: d,
              children: /* @__PURE__ */ p.jsx(Ba, { className: "size-5" })
            }
          ),
          c
        ]
      }
    );
  }
);
Mr.displayName = "Banner";
var mo = 180 / Math.PI, Sn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function kr(e, t, n, o, r, i) {
  var s, a, c;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (c = e * n + t * o) && (n -= e * c, o -= t * c), (a = Math.sqrt(n * n + o * o)) && (n /= a, o /= a, c /= a), e * o < t * n && (e = -e, t = -t, c = -c, s = -s), {
    translateX: r,
    translateY: i,
    rotate: Math.atan2(t, e) * mo,
    skewX: Math.atan(c) * mo,
    scaleX: s,
    scaleY: a
  };
}
var Mt;
function Ka(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Sn : kr(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Qa(e) {
  return e == null || (Mt || (Mt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Mt.setAttribute("transform", e), !(e = Mt.transform.baseVal.consolidate())) ? Sn : (e = e.matrix, kr(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ir(e, t, n, o) {
  function r(l) {
    return l.length ? l.pop() + " " : "";
  }
  function i(l, d, f, u, h, y) {
    if (l !== f || d !== u) {
      var m = h.push("translate(", null, t, null, n);
      y.push({ i: m - 4, x: ke(l, f) }, { i: m - 2, x: ke(d, u) });
    } else (f || u) && h.push("translate(" + f + t + u + n);
  }
  function s(l, d, f, u) {
    l !== d ? (l - d > 180 ? d += 360 : d - l > 180 && (l += 360), u.push({ i: f.push(r(f) + "rotate(", null, o) - 2, x: ke(l, d) })) : d && f.push(r(f) + "rotate(" + d + o);
  }
  function a(l, d, f, u) {
    l !== d ? u.push({ i: f.push(r(f) + "skewX(", null, o) - 2, x: ke(l, d) }) : d && f.push(r(f) + "skewX(" + d + o);
  }
  function c(l, d, f, u, h, y) {
    if (l !== f || d !== u) {
      var m = h.push(r(h) + "scale(", null, ",", null, ")");
      y.push({ i: m - 4, x: ke(l, f) }, { i: m - 2, x: ke(d, u) });
    } else (f !== 1 || u !== 1) && h.push(r(h) + "scale(" + f + "," + u + ")");
  }
  return function(l, d) {
    var f = [], u = [];
    return l = e(l), d = e(d), i(l.translateX, l.translateY, d.translateX, d.translateY, f, u), s(l.rotate, d.rotate, f, u), a(l.skewX, d.skewX, f, u), c(l.scaleX, l.scaleY, d.scaleX, d.scaleY, f, u), l = d = null, function(h) {
      for (var y = -1, m = u.length, b; ++y < m; ) f[(b = u[y]).i] = b.x(h);
      return f.join("");
    };
  };
}
var Ja = Ir(Ka, "px, ", "px)", "deg)"), ec = Ir(Qa, ", ", ")", ")"), tc = 1e-12;
function yo(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function nc(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function oc(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const jt = (function e(t, n, o) {
  function r(i, s) {
    var a = i[0], c = i[1], l = i[2], d = s[0], f = s[1], u = s[2], h = d - a, y = f - c, m = h * h + y * y, b, w;
    if (m < tc)
      w = Math.log(u / l) / t, b = function(k) {
        return [
          a + k * h,
          c + k * y,
          l * Math.exp(t * k * w)
        ];
      };
    else {
      var N = Math.sqrt(m), g = (u * u - l * l + o * m) / (2 * l * n * N), x = (u * u - l * l - o * m) / (2 * u * n * N), E = Math.log(Math.sqrt(g * g + 1) - g), _ = Math.log(Math.sqrt(x * x + 1) - x);
      w = (_ - E) / t, b = function(k) {
        var I = k * w, T = yo(E), B = l / (n * N) * (T * oc(t * I + E) - nc(E));
        return [
          a + B * h,
          c + B * y,
          l * T / yo(t * I + E)
        ];
      };
    }
    return b.duration = w * 1e3 * t / Math.SQRT2, b;
  }
  return r.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, c = a * a;
    return e(s, a, c);
  }, r;
})(Math.SQRT2, 2, 4), xo = ({ icon: e, label: t, description: n, onClick: o }) => /* @__PURE__ */ p.jsxs(
  "button",
  {
    className: "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-accent focus-visible:bg-accent focus-visible:outline-none",
    type: "button",
    onClick: o,
    children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-text-secondary", children: /* @__PURE__ */ p.jsx(e, { className: "size-4" }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 flex-col", children: [
        /* @__PURE__ */ p.jsx("span", { className: "font-medium", children: t }),
        /* @__PURE__ */ p.jsx("span", { className: "text-xs text-text-secondary", children: n })
      ] })
    ]
  }
), Ar = ({ onPick: e }) => /* @__PURE__ */ p.jsxs("div", { className: "flex w-64 flex-col gap-1 p-1", "data-testid": "step-picker", children: [
  /* @__PURE__ */ p.jsx(
    xo,
    {
      description: "Send an email",
      icon: Ln,
      label: "Email",
      onClick: () => e("send_email")
    }
  ),
  /* @__PURE__ */ p.jsx(
    xo,
    {
      description: "Wait a set amount of time",
      icon: On,
      label: "Wait",
      onClick: () => e("wait")
    }
  )
] });
function ie(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, o; n < e.length; n++)
      (o = ie(e[n])) !== "" && (t += (t && " ") + o);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var rc = { value: () => {
} };
function qt() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new zt(n);
}
function zt(e) {
  this._ = e;
}
function ic(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", r = n.indexOf(".");
    if (r >= 0 && (o = n.slice(r + 1), n = n.slice(0, r)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
zt.prototype = qt.prototype = {
  constructor: zt,
  on: function(e, t) {
    var n = this._, o = ic(e + "", n), r, i = -1, s = o.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((r = (e = o[i]).type) && (r = sc(n[r], e.name))) return r;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (r = (e = o[i]).type) n[r] = wo(n[r], e.name, t);
      else if (t == null) for (r in n) n[r] = wo(n[r], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new zt(e);
  },
  call: function(e, t) {
    if ((r = arguments.length - 2) > 0) for (var n = new Array(r), o = 0, r, i; o < r; ++o) n[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], o = 0, r = i.length; o < r; ++o) i[o].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var o = this._[e], r = 0, i = o.length; r < i; ++r) o[r].value.apply(t, n);
  }
};
function sc(e, t) {
  for (var n = 0, o = e.length, r; n < o; ++n)
    if ((r = e[n]).name === t)
      return r.value;
}
function wo(e, t, n) {
  for (var o = 0, r = e.length; o < r; ++o)
    if (e[o].name === t) {
      e[o] = rc, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Nn = "http://www.w3.org/1999/xhtml";
const vo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Nn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ut(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), vo.hasOwnProperty(t) ? { space: vo[t], local: e } : e;
}
function ac(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Nn && t.documentElement.namespaceURI === Nn ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function cc(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Pr(e) {
  var t = Ut(e);
  return (t.local ? cc : ac)(t);
}
function lc() {
}
function Bn(e) {
  return e == null ? lc : function() {
    return this.querySelector(e);
  };
}
function uc(e) {
  typeof e != "function" && (e = Bn(e));
  for (var t = this._groups, n = t.length, o = new Array(n), r = 0; r < n; ++r)
    for (var i = t[r], s = i.length, a = o[r] = new Array(s), c, l, d = 0; d < s; ++d)
      (c = i[d]) && (l = e.call(c, c.__data__, d, i)) && ("__data__" in c && (l.__data__ = c.__data__), a[d] = l);
  return new de(o, this._parents);
}
function dc(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function fc() {
  return [];
}
function Dr(e) {
  return e == null ? fc : function() {
    return this.querySelectorAll(e);
  };
}
function hc(e) {
  return function() {
    return dc(e.apply(this, arguments));
  };
}
function gc(e) {
  typeof e == "function" ? e = hc(e) : e = Dr(e);
  for (var t = this._groups, n = t.length, o = [], r = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && (o.push(e.call(c, c.__data__, l, s)), r.push(c));
  return new de(o, r);
}
function Tr(e) {
  return function() {
    return this.matches(e);
  };
}
function jr(e) {
  return function(t) {
    return t.matches(e);
  };
}
var pc = Array.prototype.find;
function mc(e) {
  return function() {
    return pc.call(this.children, e);
  };
}
function yc() {
  return this.firstElementChild;
}
function xc(e) {
  return this.select(e == null ? yc : mc(typeof e == "function" ? e : jr(e)));
}
var wc = Array.prototype.filter;
function vc() {
  return Array.from(this.children);
}
function bc(e) {
  return function() {
    return wc.call(this.children, e);
  };
}
function _c(e) {
  return this.selectAll(e == null ? vc : bc(typeof e == "function" ? e : jr(e)));
}
function Ec(e) {
  typeof e != "function" && (e = Tr(e));
  for (var t = this._groups, n = t.length, o = new Array(n), r = 0; r < n; ++r)
    for (var i = t[r], s = i.length, a = o[r] = [], c, l = 0; l < s; ++l)
      (c = i[l]) && e.call(c, c.__data__, l, i) && a.push(c);
  return new de(o, this._parents);
}
function zr(e) {
  return new Array(e.length);
}
function Sc() {
  return new de(this._enter || this._groups.map(zr), this._parents);
}
function Bt(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Bt.prototype = {
  constructor: Bt,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Nc(e) {
  return function() {
    return e;
  };
}
function Cc(e, t, n, o, r, i) {
  for (var s = 0, a, c = t.length, l = i.length; s < l; ++s)
    (a = t[s]) ? (a.__data__ = i[s], o[s] = a) : n[s] = new Bt(e, i[s]);
  for (; s < c; ++s)
    (a = t[s]) && (r[s] = a);
}
function Mc(e, t, n, o, r, i, s) {
  var a, c, l = /* @__PURE__ */ new Map(), d = t.length, f = i.length, u = new Array(d), h;
  for (a = 0; a < d; ++a)
    (c = t[a]) && (u[a] = h = s.call(c, c.__data__, a, t) + "", l.has(h) ? r[a] = c : l.set(h, c));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (c = l.get(h)) ? (o[a] = c, c.__data__ = i[a], l.delete(h)) : n[a] = new Bt(e, i[a]);
  for (a = 0; a < d; ++a)
    (c = t[a]) && l.get(u[a]) === c && (r[a] = c);
}
function kc(e) {
  return e.__data__;
}
function Ic(e, t) {
  if (!arguments.length) return Array.from(this, kc);
  var n = t ? Mc : Cc, o = this._parents, r = this._groups;
  typeof e != "function" && (e = Nc(e));
  for (var i = r.length, s = new Array(i), a = new Array(i), c = new Array(i), l = 0; l < i; ++l) {
    var d = o[l], f = r[l], u = f.length, h = Ac(e.call(d, d && d.__data__, l, o)), y = h.length, m = a[l] = new Array(y), b = s[l] = new Array(y), w = c[l] = new Array(u);
    n(d, f, m, b, w, h, t);
    for (var N = 0, g = 0, x, E; N < y; ++N)
      if (x = m[N]) {
        for (N >= g && (g = N + 1); !(E = b[g]) && ++g < y; ) ;
        x._next = E || null;
      }
  }
  return s = new de(s, o), s._enter = a, s._exit = c, s;
}
function Ac(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Pc() {
  return new de(this._exit || this._groups.map(zr), this._parents);
}
function Dc(e, t, n) {
  var o = this.enter(), r = this, i = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (r = t(r), r && (r = r.selection())), n == null ? i.remove() : n(i), o && r ? o.merge(r).order() : r;
}
function Tc(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, r = n.length, i = o.length, s = Math.min(r, i), a = new Array(r), c = 0; c < s; ++c)
    for (var l = n[c], d = o[c], f = l.length, u = a[c] = new Array(f), h, y = 0; y < f; ++y)
      (h = l[y] || d[y]) && (u[y] = h);
  for (; c < r; ++c)
    a[c] = n[c];
  return new de(a, this._parents);
}
function jc() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], r = o.length - 1, i = o[r], s; --r >= 0; )
      (s = o[r]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function zc(e) {
  e || (e = $c);
  function t(f, u) {
    return f && u ? e(f.__data__, u.__data__) : !f - !u;
  }
  for (var n = this._groups, o = n.length, r = new Array(o), i = 0; i < o; ++i) {
    for (var s = n[i], a = s.length, c = r[i] = new Array(a), l, d = 0; d < a; ++d)
      (l = s[d]) && (c[d] = l);
    c.sort(t);
  }
  return new de(r, this._parents).order();
}
function $c(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Hc() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Lc() {
  return Array.from(this);
}
function Oc() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], r = 0, i = o.length; r < i; ++r) {
      var s = o[r];
      if (s) return s;
    }
  return null;
}
function Bc() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Rc() {
  return !this.node();
}
function Vc(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var r = t[n], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && e.call(a, a.__data__, i, r);
  return this;
}
function Fc(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Xc(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Yc(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Wc(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Zc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Gc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function qc(e, t) {
  var n = Ut(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Xc : Fc : typeof t == "function" ? n.local ? Gc : Zc : n.local ? Wc : Yc)(n, t));
}
function $r(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Uc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Kc(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Qc(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function Jc(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Uc : typeof t == "function" ? Qc : Kc)(e, t, n ?? "")) : Xe(this.node(), e);
}
function Xe(e, t) {
  return e.style.getPropertyValue(t) || $r(e).getComputedStyle(e, null).getPropertyValue(t);
}
function el(e) {
  return function() {
    delete this[e];
  };
}
function tl(e, t) {
  return function() {
    this[e] = t;
  };
}
function nl(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function ol(e, t) {
  return arguments.length > 1 ? this.each((t == null ? el : typeof t == "function" ? nl : tl)(e, t)) : this.node()[e];
}
function Hr(e) {
  return e.trim().split(/^|\s+/);
}
function Rn(e) {
  return e.classList || new Lr(e);
}
function Lr(e) {
  this._node = e, this._names = Hr(e.getAttribute("class") || "");
}
Lr.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Or(e, t) {
  for (var n = Rn(e), o = -1, r = t.length; ++o < r; ) n.add(t[o]);
}
function Br(e, t) {
  for (var n = Rn(e), o = -1, r = t.length; ++o < r; ) n.remove(t[o]);
}
function rl(e) {
  return function() {
    Or(this, e);
  };
}
function il(e) {
  return function() {
    Br(this, e);
  };
}
function sl(e, t) {
  return function() {
    (t.apply(this, arguments) ? Or : Br)(this, e);
  };
}
function al(e, t) {
  var n = Hr(e + "");
  if (arguments.length < 2) {
    for (var o = Rn(this.node()), r = -1, i = n.length; ++r < i; ) if (!o.contains(n[r])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? sl : t ? rl : il)(n, t));
}
function cl() {
  this.textContent = "";
}
function ll(e) {
  return function() {
    this.textContent = e;
  };
}
function ul(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function dl(e) {
  return arguments.length ? this.each(e == null ? cl : (typeof e == "function" ? ul : ll)(e)) : this.node().textContent;
}
function fl() {
  this.innerHTML = "";
}
function hl(e) {
  return function() {
    this.innerHTML = e;
  };
}
function gl(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function pl(e) {
  return arguments.length ? this.each(e == null ? fl : (typeof e == "function" ? gl : hl)(e)) : this.node().innerHTML;
}
function ml() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function yl() {
  return this.each(ml);
}
function xl() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wl() {
  return this.each(xl);
}
function vl(e) {
  var t = typeof e == "function" ? e : Pr(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function bl() {
  return null;
}
function _l(e, t) {
  var n = typeof e == "function" ? e : Pr(e), o = t == null ? bl : typeof t == "function" ? t : Bn(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function El() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Sl() {
  return this.each(El);
}
function Nl() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Cl() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ml(e) {
  return this.select(e ? Cl : Nl);
}
function kl(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Il(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Al(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function Pl(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, r = t.length, i; n < r; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++o] = i;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function Dl(e, t, n) {
  return function() {
    var o = this.__on, r, i = Il(t);
    if (o) {
      for (var s = 0, a = o.length; s < a; ++s)
        if ((r = o[s]).type === e.type && r.name === e.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = i, r.options = n), r.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), r = { type: e.type, name: e.name, value: t, listener: i, options: n }, o ? o.push(r) : this.__on = [r];
  };
}
function Tl(e, t, n) {
  var o = Al(e + ""), r, i = o.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, l = a.length, d; c < l; ++c)
        for (r = 0, d = a[c]; r < i; ++r)
          if ((s = o[r]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? Dl : Pl, r = 0; r < i; ++r) this.each(a(o[r], t, n));
  return this;
}
function Rr(e, t, n) {
  var o = $r(e), r = o.CustomEvent;
  typeof r == "function" ? r = new r(t, n) : (r = o.document.createEvent("Event"), n ? (r.initEvent(t, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(t, !1, !1)), e.dispatchEvent(r);
}
function jl(e, t) {
  return function() {
    return Rr(this, e, t);
  };
}
function zl(e, t) {
  return function() {
    return Rr(this, e, t.apply(this, arguments));
  };
}
function $l(e, t) {
  return this.each((typeof t == "function" ? zl : jl)(e, t));
}
function* Hl() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], r = 0, i = o.length, s; r < i; ++r)
      (s = o[r]) && (yield s);
}
var Vr = [null];
function de(e, t) {
  this._groups = e, this._parents = t;
}
function xt() {
  return new de([[document.documentElement]], Vr);
}
function Ll() {
  return this;
}
de.prototype = xt.prototype = {
  constructor: de,
  select: uc,
  selectAll: gc,
  selectChild: xc,
  selectChildren: _c,
  filter: Ec,
  data: Ic,
  enter: Sc,
  exit: Pc,
  join: Dc,
  merge: Tc,
  selection: Ll,
  order: jc,
  sort: zc,
  call: Hc,
  nodes: Lc,
  node: Oc,
  size: Bc,
  empty: Rc,
  each: Vc,
  attr: qc,
  style: Jc,
  property: ol,
  classed: al,
  text: dl,
  html: pl,
  raise: yl,
  lower: wl,
  append: vl,
  insert: _l,
  remove: Sl,
  clone: Ml,
  datum: kl,
  on: Tl,
  dispatch: $l,
  [Symbol.iterator]: Hl
};
function ue(e) {
  return typeof e == "string" ? new de([[document.querySelector(e)]], [document.documentElement]) : new de([[e]], Vr);
}
function Ol(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function ge(e, t) {
  if (e = Ol(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var o = n.createSVGPoint();
      return o.x = e.clientX, o.y = e.clientY, o = o.matrixTransform(t.getScreenCTM().inverse()), [o.x, o.y];
    }
    if (t.getBoundingClientRect) {
      var r = t.getBoundingClientRect();
      return [e.clientX - r.left - t.clientLeft, e.clientY - r.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Bl = { passive: !1 }, at = { capture: !0, passive: !1 };
function dn(e) {
  e.stopImmediatePropagation();
}
function Fe(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Fr(e) {
  var t = e.document.documentElement, n = ue(e).on("dragstart.drag", Fe, at);
  "onselectstart" in t ? n.on("selectstart.drag", Fe, at) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Xr(e, t) {
  var n = e.document.documentElement, o = ue(e).on("dragstart.drag", null);
  t && (o.on("click.drag", Fe, at), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const kt = (e) => () => e;
function Cn(e, {
  sourceEvent: t,
  subject: n,
  target: o,
  identifier: r,
  active: i,
  x: s,
  y: a,
  dx: c,
  dy: l,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: r, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
Cn.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Rl(e) {
  return !e.ctrlKey && !e.button;
}
function Vl() {
  return this.parentNode;
}
function Fl(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Xl() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Yr() {
  var e = Rl, t = Vl, n = Fl, o = Xl, r = {}, i = qt("start", "drag", "end"), s = 0, a, c, l, d, f = 0;
  function u(x) {
    x.on("mousedown.drag", h).filter(o).on("touchstart.drag", b).on("touchmove.drag", w, Bl).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(x, E) {
    if (!(d || !e.call(this, x, E))) {
      var _ = g(this, t.call(this, x, E), x, E, "mouse");
      _ && (ue(x.view).on("mousemove.drag", y, at).on("mouseup.drag", m, at), Fr(x.view), dn(x), l = !1, a = x.clientX, c = x.clientY, _("start", x));
    }
  }
  function y(x) {
    if (Fe(x), !l) {
      var E = x.clientX - a, _ = x.clientY - c;
      l = E * E + _ * _ > f;
    }
    r.mouse("drag", x);
  }
  function m(x) {
    ue(x.view).on("mousemove.drag mouseup.drag", null), Xr(x.view, l), Fe(x), r.mouse("end", x);
  }
  function b(x, E) {
    if (e.call(this, x, E)) {
      var _ = x.changedTouches, k = t.call(this, x, E), I = _.length, T, B;
      for (T = 0; T < I; ++T)
        (B = g(this, k, x, E, _[T].identifier, _[T])) && (dn(x), B("start", x, _[T]));
    }
  }
  function w(x) {
    var E = x.changedTouches, _ = E.length, k, I;
    for (k = 0; k < _; ++k)
      (I = r[E[k].identifier]) && (Fe(x), I("drag", x, E[k]));
  }
  function N(x) {
    var E = x.changedTouches, _ = E.length, k, I;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), k = 0; k < _; ++k)
      (I = r[E[k].identifier]) && (dn(x), I("end", x, E[k]));
  }
  function g(x, E, _, k, I, T) {
    var B = i.copy(), L = ge(T || _, E), A, z, v;
    if ((v = n.call(x, new Cn("beforestart", {
      sourceEvent: _,
      target: u,
      identifier: I,
      active: s,
      x: L[0],
      y: L[1],
      dx: 0,
      dy: 0,
      dispatch: B
    }), k)) != null)
      return A = v.x - L[0] || 0, z = v.y - L[1] || 0, function M(S, C, D) {
        var P = L, j;
        switch (S) {
          case "start":
            r[I] = M, j = s++;
            break;
          case "end":
            delete r[I], --s;
          // falls through
          case "drag":
            L = ge(D || C, E), j = s;
            break;
        }
        B.call(
          S,
          x,
          new Cn(S, {
            sourceEvent: C,
            subject: v,
            target: u,
            identifier: I,
            active: j,
            x: L[0] + A,
            y: L[1] + z,
            dx: L[0] - P[0],
            dy: L[1] - P[1],
            dispatch: B
          }),
          k
        );
      };
  }
  return u.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : kt(!!x), u) : e;
  }, u.container = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : kt(x), u) : t;
  }, u.subject = function(x) {
    return arguments.length ? (n = typeof x == "function" ? x : kt(x), u) : n;
  }, u.touchable = function(x) {
    return arguments.length ? (o = typeof x == "function" ? x : kt(!!x), u) : o;
  }, u.on = function() {
    var x = i.on.apply(i, arguments);
    return x === i ? u : x;
  }, u.clickDistance = function(x) {
    return arguments.length ? (f = (x = +x) * x, u) : Math.sqrt(f);
  }, u;
}
var Ye = 0, ot = 0, tt = 0, Wr = 1e3, Rt, rt, Vt = 0, Te = 0, Kt = 0, ct = typeof performance == "object" && performance.now ? performance : Date, Zr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Vn() {
  return Te || (Zr(Yl), Te = ct.now() + Kt);
}
function Yl() {
  Te = 0;
}
function Ft() {
  this._call = this._time = this._next = null;
}
Ft.prototype = Gr.prototype = {
  constructor: Ft,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Vn() : +n) + (t == null ? 0 : +t), !this._next && rt !== this && (rt ? rt._next = this : Rt = this, rt = this), this._call = e, this._time = n, Mn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Mn());
  }
};
function Gr(e, t, n) {
  var o = new Ft();
  return o.restart(e, t, n), o;
}
function Wl() {
  Vn(), ++Ye;
  for (var e = Rt, t; e; )
    (t = Te - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ye;
}
function bo() {
  Te = (Vt = ct.now()) + Kt, Ye = ot = 0;
  try {
    Wl();
  } finally {
    Ye = 0, Gl(), Te = 0;
  }
}
function Zl() {
  var e = ct.now(), t = e - Vt;
  t > Wr && (Kt -= t, Vt = e);
}
function Gl() {
  for (var e, t = Rt, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Rt = n);
  rt = e, Mn(o);
}
function Mn(e) {
  if (!Ye) {
    ot && (ot = clearTimeout(ot));
    var t = e - Te;
    t > 24 ? (e < 1 / 0 && (ot = setTimeout(bo, e - ct.now() - Kt)), tt && (tt = clearInterval(tt))) : (tt || (Vt = ct.now(), tt = setInterval(Zl, Wr)), Ye = 1, Zr(bo));
  }
}
function _o(e, t, n) {
  var o = new Ft();
  return t = t == null ? 0 : +t, o.restart((r) => {
    o.stop(), e(r + t);
  }, t, n), o;
}
var ql = qt("start", "end", "cancel", "interrupt"), Ul = [], qr = 0, Eo = 1, kn = 2, $t = 3, So = 4, In = 5, Ht = 6;
function Qt(e, t, n, o, r, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Kl(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: r,
    // For context during callback.
    on: ql,
    tween: Ul,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: qr
  });
}
function Fn(e, t) {
  var n = ye(e, t);
  if (n.state > qr) throw new Error("too late; already scheduled");
  return n;
}
function we(e, t) {
  var n = ye(e, t);
  if (n.state > $t) throw new Error("too late; already running");
  return n;
}
function ye(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Kl(e, t, n) {
  var o = e.__transition, r;
  o[t] = n, n.timer = Gr(i, 0, n.time);
  function i(l) {
    n.state = Eo, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var d, f, u, h;
    if (n.state !== Eo) return c();
    for (d in o)
      if (h = o[d], h.name === n.name) {
        if (h.state === $t) return _o(s);
        h.state === So ? (h.state = Ht, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete o[d]) : +d < t && (h.state = Ht, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete o[d]);
      }
    if (_o(function() {
      n.state === $t && (n.state = So, n.timer.restart(a, n.delay, n.time), a(l));
    }), n.state = kn, n.on.call("start", e, e.__data__, n.index, n.group), n.state === kn) {
      for (n.state = $t, r = new Array(u = n.tween.length), d = 0, f = -1; d < u; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (r[++f] = h);
      r.length = f + 1;
    }
  }
  function a(l) {
    for (var d = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(c), n.state = In, 1), f = -1, u = r.length; ++f < u; )
      r[f].call(e, d);
    n.state === In && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = Ht, n.timer.stop(), delete o[t];
    for (var l in o) return;
    delete e.__transition;
  }
}
function Lt(e, t) {
  var n = e.__transition, o, r, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((o = n[s]).name !== t) {
        i = !1;
        continue;
      }
      r = o.state > kn && o.state < In, o.state = Ht, o.timer.stop(), o.on.call(r ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Ql(e) {
  return this.each(function() {
    Lt(this, e);
  });
}
function Jl(e, t) {
  var n, o;
  return function() {
    var r = we(this, e), i = r.tween;
    if (i !== n) {
      o = n = i;
      for (var s = 0, a = o.length; s < a; ++s)
        if (o[s].name === t) {
          o = o.slice(), o.splice(s, 1);
          break;
        }
    }
    r.tween = o;
  };
}
function eu(e, t, n) {
  var o, r;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = we(this, e), s = i.tween;
    if (s !== o) {
      r = (o = s).slice();
      for (var a = { name: t, value: n }, c = 0, l = r.length; c < l; ++c)
        if (r[c].name === t) {
          r[c] = a;
          break;
        }
      c === l && r.push(a);
    }
    i.tween = r;
  };
}
function tu(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = ye(this.node(), n).tween, r = 0, i = o.length, s; r < i; ++r)
      if ((s = o[r]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Jl : eu)(n, e, t));
}
function Xn(e, t, n) {
  var o = e._id;
  return e.each(function() {
    var r = we(this, o);
    (r.value || (r.value = {}))[t] = n.apply(this, arguments);
  }), function(r) {
    return ye(r, o).value[t];
  };
}
function Ur(e, t) {
  var n;
  return (typeof t == "number" ? ke : t instanceof fo ? ho : (n = fo(t)) ? (t = n, ho) : Pa)(e, t);
}
function nu(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ou(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ru(e, t, n) {
  var o, r = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === r ? null : s === o ? i : i = t(o = s, n);
  };
}
function iu(e, t, n) {
  var o, r = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === r ? null : s === o ? i : i = t(o = s, n);
  };
}
function su(e, t, n) {
  var o, r, i;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), c = a + "", s === c ? null : s === o && c === r ? i : (r = c, i = t(o = s, a)));
  };
}
function au(e, t, n) {
  var o, r, i;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), c = a + "", s === c ? null : s === o && c === r ? i : (r = c, i = t(o = s, a)));
  };
}
function cu(e, t) {
  var n = Ut(e), o = n === "transform" ? ec : Ur;
  return this.attrTween(e, typeof t == "function" ? (n.local ? au : su)(n, o, Xn(this, "attr." + e, t)) : t == null ? (n.local ? ou : nu)(n) : (n.local ? iu : ru)(n, o, t));
}
function lu(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function uu(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function du(e, t) {
  var n, o;
  function r() {
    var i = t.apply(this, arguments);
    return i !== o && (n = (o = i) && uu(e, i)), n;
  }
  return r._value = t, r;
}
function fu(e, t) {
  var n, o;
  function r() {
    var i = t.apply(this, arguments);
    return i !== o && (n = (o = i) && lu(e, i)), n;
  }
  return r._value = t, r;
}
function hu(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var o = Ut(e);
  return this.tween(n, (o.local ? du : fu)(o, t));
}
function gu(e, t) {
  return function() {
    Fn(this, e).delay = +t.apply(this, arguments);
  };
}
function pu(e, t) {
  return t = +t, function() {
    Fn(this, e).delay = t;
  };
}
function mu(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? gu : pu)(t, e)) : ye(this.node(), t).delay;
}
function yu(e, t) {
  return function() {
    we(this, e).duration = +t.apply(this, arguments);
  };
}
function xu(e, t) {
  return t = +t, function() {
    we(this, e).duration = t;
  };
}
function wu(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? yu : xu)(t, e)) : ye(this.node(), t).duration;
}
function vu(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    we(this, e).ease = t;
  };
}
function bu(e) {
  var t = this._id;
  return arguments.length ? this.each(vu(t, e)) : ye(this.node(), t).ease;
}
function _u(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    we(this, e).ease = n;
  };
}
function Eu(e) {
  if (typeof e != "function") throw new Error();
  return this.each(_u(this._id, e));
}
function Su(e) {
  typeof e != "function" && (e = Tr(e));
  for (var t = this._groups, n = t.length, o = new Array(n), r = 0; r < n; ++r)
    for (var i = t[r], s = i.length, a = o[r] = [], c, l = 0; l < s; ++l)
      (c = i[l]) && e.call(c, c.__data__, l, i) && a.push(c);
  return new _e(o, this._parents, this._name, this._id);
}
function Nu(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, r = n.length, i = Math.min(o, r), s = new Array(o), a = 0; a < i; ++a)
    for (var c = t[a], l = n[a], d = c.length, f = s[a] = new Array(d), u, h = 0; h < d; ++h)
      (u = c[h] || l[h]) && (f[h] = u);
  for (; a < o; ++a)
    s[a] = t[a];
  return new _e(s, this._parents, this._name, this._id);
}
function Cu(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Mu(e, t, n) {
  var o, r, i = Cu(t) ? Fn : we;
  return function() {
    var s = i(this, e), a = s.on;
    a !== o && (r = (o = a).copy()).on(t, n), s.on = r;
  };
}
function ku(e, t) {
  var n = this._id;
  return arguments.length < 2 ? ye(this.node(), n).on.on(e) : this.each(Mu(n, e, t));
}
function Iu(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Au() {
  return this.on("end.remove", Iu(this._id));
}
function Pu(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Bn(e));
  for (var o = this._groups, r = o.length, i = new Array(r), s = 0; s < r; ++s)
    for (var a = o[s], c = a.length, l = i[s] = new Array(c), d, f, u = 0; u < c; ++u)
      (d = a[u]) && (f = e.call(d, d.__data__, u, a)) && ("__data__" in d && (f.__data__ = d.__data__), l[u] = f, Qt(l[u], t, n, u, l, ye(d, n)));
  return new _e(i, this._parents, t, n);
}
function Du(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Dr(e));
  for (var o = this._groups, r = o.length, i = [], s = [], a = 0; a < r; ++a)
    for (var c = o[a], l = c.length, d, f = 0; f < l; ++f)
      if (d = c[f]) {
        for (var u = e.call(d, d.__data__, f, c), h, y = ye(d, n), m = 0, b = u.length; m < b; ++m)
          (h = u[m]) && Qt(h, t, n, m, u, y);
        i.push(u), s.push(d);
      }
  return new _e(i, s, t, n);
}
var Tu = xt.prototype.constructor;
function ju() {
  return new Tu(this._groups, this._parents);
}
function zu(e, t) {
  var n, o, r;
  return function() {
    var i = Xe(this, e), s = (this.style.removeProperty(e), Xe(this, e));
    return i === s ? null : i === n && s === o ? r : r = t(n = i, o = s);
  };
}
function Kr(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function $u(e, t, n) {
  var o, r = n + "", i;
  return function() {
    var s = Xe(this, e);
    return s === r ? null : s === o ? i : i = t(o = s, n);
  };
}
function Hu(e, t, n) {
  var o, r, i;
  return function() {
    var s = Xe(this, e), a = n(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(e), Xe(this, e))), s === c ? null : s === o && c === r ? i : (r = c, i = t(o = s, a));
  };
}
function Lu(e, t) {
  var n, o, r, i = "style." + t, s = "end." + i, a;
  return function() {
    var c = we(this, e), l = c.on, d = c.value[i] == null ? a || (a = Kr(t)) : void 0;
    (l !== n || r !== d) && (o = (n = l).copy()).on(s, r = d), c.on = o;
  };
}
function Ou(e, t, n) {
  var o = (e += "") == "transform" ? Ja : Ur;
  return t == null ? this.styleTween(e, zu(e, o)).on("end.style." + e, Kr(e)) : typeof t == "function" ? this.styleTween(e, Hu(e, o, Xn(this, "style." + e, t))).each(Lu(this._id, e)) : this.styleTween(e, $u(e, o, t), n).on("end.style." + e, null);
}
function Bu(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function Ru(e, t, n) {
  var o, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (o = (r = s) && Bu(e, s, n)), o;
  }
  return i._value = t, i;
}
function Vu(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, Ru(e, t, n ?? ""));
}
function Fu(e) {
  return function() {
    this.textContent = e;
  };
}
function Xu(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Yu(e) {
  return this.tween("text", typeof e == "function" ? Xu(Xn(this, "text", e)) : Fu(e == null ? "" : e + ""));
}
function Wu(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Zu(e) {
  var t, n;
  function o() {
    var r = e.apply(this, arguments);
    return r !== n && (t = (n = r) && Wu(r)), t;
  }
  return o._value = e, o;
}
function Gu(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Zu(e));
}
function qu() {
  for (var e = this._name, t = this._id, n = Qr(), o = this._groups, r = o.length, i = 0; i < r; ++i)
    for (var s = o[i], a = s.length, c, l = 0; l < a; ++l)
      if (c = s[l]) {
        var d = ye(c, t);
        Qt(c, e, n, l, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new _e(o, this._parents, e, n);
}
function Uu() {
  var e, t, n = this, o = n._id, r = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, c = { value: function() {
      --r === 0 && i();
    } };
    n.each(function() {
      var l = we(this, o), d = l.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(c)), l.on = t;
    }), r === 0 && i();
  });
}
var Ku = 0;
function _e(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function Qr() {
  return ++Ku;
}
var ve = xt.prototype;
_e.prototype = {
  constructor: _e,
  select: Pu,
  selectAll: Du,
  selectChild: ve.selectChild,
  selectChildren: ve.selectChildren,
  filter: Su,
  merge: Nu,
  selection: ju,
  transition: qu,
  call: ve.call,
  nodes: ve.nodes,
  node: ve.node,
  size: ve.size,
  empty: ve.empty,
  each: ve.each,
  on: ku,
  attr: cu,
  attrTween: hu,
  style: Ou,
  styleTween: Vu,
  text: Yu,
  textTween: Gu,
  remove: Au,
  tween: tu,
  delay: mu,
  duration: wu,
  ease: bu,
  easeVarying: Eu,
  end: Uu,
  [Symbol.iterator]: ve[Symbol.iterator]
};
function Qu(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Ju = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Qu
};
function ed(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function td(e) {
  var t, n;
  e instanceof _e ? (t = e._id, e = e._name) : (t = Qr(), (n = Ju).time = Vn(), e = e == null ? null : e + "");
  for (var o = this._groups, r = o.length, i = 0; i < r; ++i)
    for (var s = o[i], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && Qt(c, e, t, l, s, n || ed(c, t));
  return new _e(o, this._parents, e, t);
}
xt.prototype.interrupt = Ql;
xt.prototype.transition = td;
const It = (e) => () => e;
function nd(e, {
  sourceEvent: t,
  target: n,
  transform: o,
  dispatch: r
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: r }
  });
}
function be(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
be.prototype = {
  constructor: be,
  scale: function(e) {
    return e === 1 ? this : new be(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new be(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Jt = new be(1, 0, 0);
Jr.prototype = be.prototype;
function Jr(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Jt;
  return e.__zoom;
}
function fn(e) {
  e.stopImmediatePropagation();
}
function nt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function od(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function rd() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function No() {
  return this.__zoom || Jt;
}
function id(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function sd() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ad(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], r = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    r > o ? (o + r) / 2 : Math.min(0, o) || Math.max(0, r),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function ei() {
  var e = od, t = rd, n = ad, o = id, r = sd, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, c = jt, l = qt("start", "zoom", "end"), d, f, u, h = 500, y = 150, m = 0, b = 10;
  function w(v) {
    v.property("__zoom", No).on("wheel.zoom", I, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", B).filter(r).on("touchstart.zoom", L).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(v, M, S, C) {
    var D = v.selection ? v.selection() : v;
    D.property("__zoom", No), v !== D ? E(v, M, S, C) : D.interrupt().each(function() {
      _(this, arguments).event(C).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, w.scaleBy = function(v, M, S, C) {
    w.scaleTo(v, function() {
      var D = this.__zoom.k, P = typeof M == "function" ? M.apply(this, arguments) : M;
      return D * P;
    }, S, C);
  }, w.scaleTo = function(v, M, S, C) {
    w.transform(v, function() {
      var D = t.apply(this, arguments), P = this.__zoom, j = S == null ? x(D) : typeof S == "function" ? S.apply(this, arguments) : S, $ = P.invert(j), H = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(g(N(P, H), j, $), D, s);
    }, S, C);
  }, w.translateBy = function(v, M, S, C) {
    w.transform(v, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof S == "function" ? S.apply(this, arguments) : S
      ), t.apply(this, arguments), s);
    }, null, C);
  }, w.translateTo = function(v, M, S, C, D) {
    w.transform(v, function() {
      var P = t.apply(this, arguments), j = this.__zoom, $ = C == null ? x(P) : typeof C == "function" ? C.apply(this, arguments) : C;
      return n(Jt.translate($[0], $[1]).scale(j.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof S == "function" ? -S.apply(this, arguments) : -S
      ), P, s);
    }, C, D);
  };
  function N(v, M) {
    return M = Math.max(i[0], Math.min(i[1], M)), M === v.k ? v : new be(M, v.x, v.y);
  }
  function g(v, M, S) {
    var C = M[0] - S[0] * v.k, D = M[1] - S[1] * v.k;
    return C === v.x && D === v.y ? v : new be(v.k, C, D);
  }
  function x(v) {
    return [(+v[0][0] + +v[1][0]) / 2, (+v[0][1] + +v[1][1]) / 2];
  }
  function E(v, M, S, C) {
    v.on("start.zoom", function() {
      _(this, arguments).event(C).start();
    }).on("interrupt.zoom end.zoom", function() {
      _(this, arguments).event(C).end();
    }).tween("zoom", function() {
      var D = this, P = arguments, j = _(D, P).event(C), $ = t.apply(D, P), H = S == null ? x($) : typeof S == "function" ? S.apply(D, P) : S, V = Math.max($[1][0] - $[0][0], $[1][1] - $[0][1]), R = D.__zoom, W = typeof M == "function" ? M.apply(D, P) : M, q = c(R.invert(H).concat(V / R.k), W.invert(H).concat(V / W.k));
      return function(X) {
        if (X === 1) X = W;
        else {
          var O = q(X), Y = V / O[2];
          X = new be(Y, H[0] - O[0] * Y, H[1] - O[1] * Y);
        }
        j.zoom(null, X);
      };
    });
  }
  function _(v, M, S) {
    return !S && v.__zooming || new k(v, M);
  }
  function k(v, M) {
    this.that = v, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(v, M), this.taps = 0;
  }
  k.prototype = {
    event: function(v) {
      return v && (this.sourceEvent = v), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(v, M) {
      return this.mouse && v !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && v !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && v !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(v) {
      var M = ue(this.that).datum();
      l.call(
        v,
        this.that,
        new nd(v, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: l
        }),
        M
      );
    }
  };
  function I(v, ...M) {
    if (!e.apply(this, arguments)) return;
    var S = _(this, M).event(v), C = this.__zoom, D = Math.max(i[0], Math.min(i[1], C.k * Math.pow(2, o.apply(this, arguments)))), P = ge(v);
    if (S.wheel)
      (S.mouse[0][0] !== P[0] || S.mouse[0][1] !== P[1]) && (S.mouse[1] = C.invert(S.mouse[0] = P)), clearTimeout(S.wheel);
    else {
      if (C.k === D) return;
      S.mouse = [P, C.invert(P)], Lt(this), S.start();
    }
    nt(v), S.wheel = setTimeout(j, y), S.zoom("mouse", n(g(N(C, D), S.mouse[0], S.mouse[1]), S.extent, s));
    function j() {
      S.wheel = null, S.end();
    }
  }
  function T(v, ...M) {
    if (u || !e.apply(this, arguments)) return;
    var S = v.currentTarget, C = _(this, M, !0).event(v), D = ue(v.view).on("mousemove.zoom", H, !0).on("mouseup.zoom", V, !0), P = ge(v, S), j = v.clientX, $ = v.clientY;
    Fr(v.view), fn(v), C.mouse = [P, this.__zoom.invert(P)], Lt(this), C.start();
    function H(R) {
      if (nt(R), !C.moved) {
        var W = R.clientX - j, q = R.clientY - $;
        C.moved = W * W + q * q > m;
      }
      C.event(R).zoom("mouse", n(g(C.that.__zoom, C.mouse[0] = ge(R, S), C.mouse[1]), C.extent, s));
    }
    function V(R) {
      D.on("mousemove.zoom mouseup.zoom", null), Xr(R.view, C.moved), nt(R), C.event(R).end();
    }
  }
  function B(v, ...M) {
    if (e.apply(this, arguments)) {
      var S = this.__zoom, C = ge(v.changedTouches ? v.changedTouches[0] : v, this), D = S.invert(C), P = S.k * (v.shiftKey ? 0.5 : 2), j = n(g(N(S, P), C, D), t.apply(this, M), s);
      nt(v), a > 0 ? ue(this).transition().duration(a).call(E, j, C, v) : ue(this).call(w.transform, j, C, v);
    }
  }
  function L(v, ...M) {
    if (e.apply(this, arguments)) {
      var S = v.touches, C = S.length, D = _(this, M, v.changedTouches.length === C).event(v), P, j, $, H;
      for (fn(v), j = 0; j < C; ++j)
        $ = S[j], H = ge($, this), H = [H, this.__zoom.invert(H), $.identifier], D.touch0 ? !D.touch1 && D.touch0[2] !== H[2] && (D.touch1 = H, D.taps = 0) : (D.touch0 = H, P = !0, D.taps = 1 + !!d);
      d && (d = clearTimeout(d)), P && (D.taps < 2 && (f = H[0], d = setTimeout(function() {
        d = null;
      }, h)), Lt(this), D.start());
    }
  }
  function A(v, ...M) {
    if (this.__zooming) {
      var S = _(this, M).event(v), C = v.changedTouches, D = C.length, P, j, $, H;
      for (nt(v), P = 0; P < D; ++P)
        j = C[P], $ = ge(j, this), S.touch0 && S.touch0[2] === j.identifier ? S.touch0[0] = $ : S.touch1 && S.touch1[2] === j.identifier && (S.touch1[0] = $);
      if (j = S.that.__zoom, S.touch1) {
        var V = S.touch0[0], R = S.touch0[1], W = S.touch1[0], q = S.touch1[1], X = (X = W[0] - V[0]) * X + (X = W[1] - V[1]) * X, O = (O = q[0] - R[0]) * O + (O = q[1] - R[1]) * O;
        j = N(j, Math.sqrt(X / O)), $ = [(V[0] + W[0]) / 2, (V[1] + W[1]) / 2], H = [(R[0] + q[0]) / 2, (R[1] + q[1]) / 2];
      } else if (S.touch0) $ = S.touch0[0], H = S.touch0[1];
      else return;
      S.zoom("touch", n(g(j, $, H), S.extent, s));
    }
  }
  function z(v, ...M) {
    if (this.__zooming) {
      var S = _(this, M).event(v), C = v.changedTouches, D = C.length, P, j;
      for (fn(v), u && clearTimeout(u), u = setTimeout(function() {
        u = null;
      }, h), P = 0; P < D; ++P)
        j = C[P], S.touch0 && S.touch0[2] === j.identifier ? delete S.touch0 : S.touch1 && S.touch1[2] === j.identifier && delete S.touch1;
      if (S.touch1 && !S.touch0 && (S.touch0 = S.touch1, delete S.touch1), S.touch0) S.touch0[1] = this.__zoom.invert(S.touch0[0]);
      else if (S.end(), S.taps === 2 && (j = ge(j, this), Math.hypot(f[0] - j[0], f[1] - j[1]) < b)) {
        var $ = ue(this).on("dblclick.zoom");
        $ && $.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : It(+v), w) : o;
  }, w.filter = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : It(!!v), w) : e;
  }, w.touchable = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : It(!!v), w) : r;
  }, w.extent = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : It([[+v[0][0], +v[0][1]], [+v[1][0], +v[1][1]]]), w) : t;
  }, w.scaleExtent = function(v) {
    return arguments.length ? (i[0] = +v[0], i[1] = +v[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(v) {
    return arguments.length ? (s[0][0] = +v[0][0], s[1][0] = +v[1][0], s[0][1] = +v[0][1], s[1][1] = +v[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(v) {
    return arguments.length ? (n = v, w) : n;
  }, w.duration = function(v) {
    return arguments.length ? (a = +v, w) : a;
  }, w.interpolate = function(v) {
    return arguments.length ? (c = v, w) : c;
  }, w.on = function() {
    var v = l.on.apply(l, arguments);
    return v === l ? w : v;
  }, w.clickDistance = function(v) {
    return arguments.length ? (m = (v = +v) * v, w) : Math.sqrt(m);
  }, w.tapDistance = function(v) {
    return arguments.length ? (b = +v, w) : b;
  }, w;
}
const xe = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: o }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : o}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, lt = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], ti = ["Enter", " ", "Escape"], ni = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var We;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(We || (We = {}));
var Pe;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Pe || (Pe = {}));
var ut;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ut || (ut = {}));
const oi = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null
};
var Ce;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Ce || (Ce = {}));
var Xt;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Xt || (Xt = {}));
var F;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(F || (F = {}));
const Co = {
  [F.Left]: F.Right,
  [F.Right]: F.Left,
  [F.Top]: F.Bottom,
  [F.Bottom]: F.Top
};
function ri(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const ii = (e) => "id" in e && "source" in e && "target" in e, cd = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Yn = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), wt = (e, t = [0, 0]) => {
  const { width: n, height: o } = Ee(e), r = e.origin ?? t, i = n * r[0], s = o * r[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, ld = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((o, r) => {
    const i = typeof r == "string";
    let s = !t.nodeLookup && !i ? r : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(r) : Yn(r) ? r : t.nodeLookup.get(r.id));
    const a = s ? Yt(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return en(o, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return tn(n);
}, vt = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((o) => {
    if (t.filter === void 0 || t.filter(o)) {
      const r = Yt(o);
      n = en(n, r);
    }
  }), tn(n);
}, Wn = (e, t, [n, o, r] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ..._t(t, [n, o, r]),
    width: t.width / r,
    height: t.height / r
  }, c = [];
  for (const l of e.values()) {
    const { measured: d, selectable: f = !0, hidden: u = !1 } = l;
    if (s && !f || u)
      continue;
    const h = d.width ?? l.width ?? l.initialWidth ?? null, y = d.height ?? l.height ?? l.initialHeight ?? null, m = dt(a, Ge(l)), b = (h ?? 0) * (y ?? 0), w = i && m > 0;
    (!l.internals.handleBounds || w || m >= b || l.dragging) && c.push(l);
  }
  return c;
}, ud = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    n.add(o.id);
  }), t.filter((o) => n.has(o.source) || n.has(o.target));
};
function dd(e, t) {
  const n = /* @__PURE__ */ new Map(), o = t?.nodes ? new Set(t.nodes.map((r) => r.id)) : null;
  return e.forEach((r) => {
    r.measured.width && r.measured.height && (t?.includeHiddenNodes || !r.hidden) && (!o || o.has(r.id)) && n.set(r.id, r);
  }), n;
}
async function fd({ nodes: e, width: t, height: n, panZoom: o, minZoom: r, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = dd(e, s), c = vt(a), l = Zn(c, t, n, s?.minZoom ?? r, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await o.setViewport(l, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function si({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: o = [0, 0], nodeExtent: r, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: c, y: l } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? o;
  let f = s.extent || r;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", xe.error005());
    else {
      const h = a.measured.width, y = a.measured.height;
      h && y && (f = [
        [c, l],
        [c + h, l + y]
      ]);
    }
  else a && qe(s.extent) && (f = [
    [s.extent[0][0] + c, s.extent[0][1] + l],
    [s.extent[1][0] + c, s.extent[1][1] + l]
  ]);
  const u = qe(f) ? je(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", xe.error015()), {
    position: {
      x: u.x - c + (s.measured.width ?? 0) * d[0],
      y: u.y - l + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: u
  };
}
async function hd({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: o, onBeforeDelete: r }) {
  const i = new Set(e.map((u) => u.id)), s = [];
  for (const u of n) {
    if (u.deletable === !1)
      continue;
    const h = i.has(u.id), y = !h && u.parentId && s.find((m) => m.id === u.parentId);
    (h || y) && s.push(u);
  }
  const a = new Set(t.map((u) => u.id)), c = o.filter((u) => u.deletable !== !1), d = ud(s, c);
  for (const u of c)
    a.has(u.id) && !d.find((y) => y.id === u.id) && d.push(u);
  if (!r)
    return {
      edges: d,
      nodes: s
    };
  const f = await r({
    nodes: s,
    edges: d
  });
  return typeof f == "boolean" ? f ? { edges: d, nodes: s } : { edges: [], nodes: [] } : f;
}
const Ze = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), je = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ze(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Ze(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function ai(e, t, n) {
  const { width: o, height: r } = Ee(n), { x: i, y: s } = n.internals.positionAbsolute;
  return je(e, [
    [i, s],
    [i + o, s + r]
  ], t);
}
const Mo = (e, t, n) => e < t ? Ze(Math.abs(e - t), 1, t) / t : e > n ? -Ze(Math.abs(e - n), 1, t) / t : 0, ci = (e, t, n = 15, o = 40) => {
  const r = Mo(e.x, o, t.width - o) * n, i = Mo(e.y, o, t.height - o) * n;
  return [r, i];
}, en = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), An = ({ x: e, y: t, width: n, height: o }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + o
}), tn = ({ x: e, y: t, x2: n, y2: o }) => ({
  x: e,
  y: t,
  width: n - e,
  height: o - t
}), Ge = (e, t = [0, 0]) => {
  const { x: n, y: o } = Yn(e) ? e.internals.positionAbsolute : wt(e, t);
  return {
    x: n,
    y: o,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Yt = (e, t = [0, 0]) => {
  const { x: n, y: o } = Yn(e) ? e.internals.positionAbsolute : wt(e, t);
  return {
    x: n,
    y: o,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, li = (e, t) => tn(en(An(e), An(t))), dt = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * o);
}, ko = (e) => pe(e.width) && pe(e.height) && pe(e.x) && pe(e.y), pe = (e) => !isNaN(e) && isFinite(e), gd = (e, t) => {
}, bt = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), _t = ({ x: e, y: t }, [n, o, r], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / r,
    y: (t - o) / r
  };
  return i ? bt(a, s) : a;
}, Wt = ({ x: e, y: t }, [n, o, r]) => ({
  x: e * r + n,
  y: t * r + o
});
function He(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function pd(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const o = He(e, n), r = He(e, t);
    return {
      top: o,
      right: r,
      bottom: o,
      left: r,
      x: r * 2,
      y: o * 2
    };
  }
  if (typeof e == "object") {
    const o = He(e.top ?? e.y ?? 0, n), r = He(e.bottom ?? e.y ?? 0, n), i = He(e.left ?? e.x ?? 0, t), s = He(e.right ?? e.x ?? 0, t);
    return { top: o, right: s, bottom: r, left: i, x: i + s, y: o + r };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function md(e, t, n, o, r, i) {
  const { x: s, y: a } = Wt(e, [t, n, o]), { x: c, y: l } = Wt({ x: e.x + e.width, y: e.y + e.height }, [t, n, o]), d = r - c, f = i - l;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const Zn = (e, t, n, o, r, i) => {
  const s = pd(i, t, n), a = (t - s.x) / e.width, c = (n - s.y) / e.height, l = Math.min(a, c), d = Ze(l, o, r), f = e.x + e.width / 2, u = e.y + e.height / 2, h = t / 2 - f * d, y = n / 2 - u * d, m = md(e, h, y, d, t, n), b = {
    left: Math.min(m.left - s.left, 0),
    top: Math.min(m.top - s.top, 0),
    right: Math.min(m.right - s.right, 0),
    bottom: Math.min(m.bottom - s.bottom, 0)
  };
  return {
    x: h - b.left + b.right,
    y: y - b.top + b.bottom,
    zoom: d
  };
}, ft = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function qe(e) {
  return e != null && e !== "parent";
}
function Ee(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function ui(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function di(e, t = { width: 0, height: 0 }, n, o, r) {
  const i = { ...e }, s = o.get(n);
  if (s) {
    const a = s.origin || r;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Io(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function yd() {
  let e, t;
  return { promise: new Promise((o, r) => {
    e = o, t = r;
  }), resolve: e, reject: t };
}
function xd(e) {
  return { ...ni, ...e || {} };
}
function it(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: o, containerBounds: r }) {
  const { x: i, y: s } = me(e), a = _t({ x: i - (r?.left ?? 0), y: s - (r?.top ?? 0) }, o), { x: c, y: l } = n ? bt(a, t) : a;
  return {
    xSnapped: c,
    ySnapped: l,
    ...a
  };
}
const Gn = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), fi = (e) => e?.getRootNode?.() || window?.document, wd = ["INPUT", "SELECT", "TEXTAREA"];
function hi(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : wd.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const gi = (e) => "clientX" in e, me = (e, t) => {
  const n = gi(e), o = n ? e.clientX : e.touches?.[0].clientX, r = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: o - (t?.left ?? 0),
    y: r - (t?.top ?? 0)
  };
}, Ao = (e, t, n, o, r) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: r,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / o,
      y: (a.top - n.top) / o,
      ...Gn(s)
    };
  });
};
function pi({ sourceX: e, sourceY: t, targetX: n, targetY: o, sourceControlX: r, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const c = e * 0.125 + r * 0.375 + s * 0.375 + n * 0.125, l = t * 0.125 + i * 0.375 + a * 0.375 + o * 0.125, d = Math.abs(c - e), f = Math.abs(l - t);
  return [c, l, d, f];
}
function At(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Po({ pos: e, x1: t, y1: n, x2: o, y2: r, c: i }) {
  switch (e) {
    case F.Left:
      return [t - At(t - o, i), n];
    case F.Right:
      return [t + At(o - t, i), n];
    case F.Top:
      return [t, n - At(n - r, i)];
    case F.Bottom:
      return [t, n + At(r - n, i)];
  }
}
function mi({ sourceX: e, sourceY: t, sourcePosition: n = F.Bottom, targetX: o, targetY: r, targetPosition: i = F.Top, curvature: s = 0.25 }) {
  const [a, c] = Po({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: r,
    c: s
  }), [l, d] = Po({
    pos: i,
    x1: o,
    y1: r,
    x2: e,
    y2: t,
    c: s
  }), [f, u, h, y] = pi({
    sourceX: e,
    sourceY: t,
    targetX: o,
    targetY: r,
    sourceControlX: a,
    sourceControlY: c,
    targetControlX: l,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${c} ${l},${d} ${o},${r}`,
    f,
    u,
    h,
    y
  ];
}
function yi({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const r = Math.abs(n - e) / 2, i = n < e ? n + r : n - r, s = Math.abs(o - t) / 2, a = o < t ? o + s : o - s;
  return [i, a, r, s];
}
function vd({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: o, elevateOnSelect: r = !1 }) {
  if (o !== void 0)
    return o;
  const i = r && n ? 1e3 : 0, s = Math.max(e.parentId || r && e.selected ? e.internals.z : 0, t.parentId || r && t.selected ? t.internals.z : 0);
  return i + s;
}
function bd({ sourceNode: e, targetNode: t, width: n, height: o, transform: r }) {
  const i = en(Yt(e), Yt(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -r[0] / r[2],
    y: -r[1] / r[2],
    width: n / r[2],
    height: o / r[2]
  };
  return dt(s, tn(i)) > 0;
}
const _d = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) => `xy-edge__${e}${t || ""}-${n}${o || ""}`, Ed = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Sd = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return ii(e) ? n = { ...e } : n = {
    ...e,
    id: _d(e)
  }, Ed(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function xi({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const [r, i, s, a] = yi({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: o
  });
  return [`M ${e},${t}L ${n},${o}`, r, i, s, a];
}
const Do = {
  [F.Left]: { x: -1, y: 0 },
  [F.Right]: { x: 1, y: 0 },
  [F.Top]: { x: 0, y: -1 },
  [F.Bottom]: { x: 0, y: 1 }
}, Nd = ({ source: e, sourcePosition: t = F.Bottom, target: n }) => t === F.Left || t === F.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, To = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Cd({ source: e, sourcePosition: t = F.Bottom, target: n, targetPosition: o = F.Top, center: r, offset: i, stepPosition: s }) {
  const a = Do[t], c = Do[o], l = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + c.x * i, y: n.y + c.y * i }, f = Nd({
    source: l,
    sourcePosition: t,
    target: d
  }), u = f.x !== 0 ? "x" : "y", h = f[u];
  let y = [], m, b;
  const w = { x: 0, y: 0 }, N = { x: 0, y: 0 }, [, , g, x] = yi({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[u] * c[u] === -1) {
    u === "x" ? (m = r.x ?? l.x + (d.x - l.x) * s, b = r.y ?? (l.y + d.y) / 2) : (m = r.x ?? (l.x + d.x) / 2, b = r.y ?? l.y + (d.y - l.y) * s);
    const _ = [
      { x: m, y: l.y },
      { x: m, y: d.y }
    ], k = [
      { x: l.x, y: b },
      { x: d.x, y: b }
    ];
    a[u] === h ? y = u === "x" ? _ : k : y = u === "x" ? k : _;
  } else {
    const _ = [{ x: l.x, y: d.y }], k = [{ x: d.x, y: l.y }];
    if (u === "x" ? y = a.x === h ? k : _ : y = a.y === h ? _ : k, t === o) {
      const A = Math.abs(e[u] - n[u]);
      if (A <= i) {
        const z = Math.min(i - 1, i - A);
        a[u] === h ? w[u] = (l[u] > e[u] ? -1 : 1) * z : N[u] = (d[u] > n[u] ? -1 : 1) * z;
      }
    }
    if (t !== o) {
      const A = u === "x" ? "y" : "x", z = a[u] === c[A], v = l[A] > d[A], M = l[A] < d[A];
      (a[u] === 1 && (!z && v || z && M) || a[u] !== 1 && (!z && M || z && v)) && (y = u === "x" ? _ : k);
    }
    const I = { x: l.x + w.x, y: l.y + w.y }, T = { x: d.x + N.x, y: d.y + N.y }, B = Math.max(Math.abs(I.x - y[0].x), Math.abs(T.x - y[0].x)), L = Math.max(Math.abs(I.y - y[0].y), Math.abs(T.y - y[0].y));
    B >= L ? (m = (I.x + T.x) / 2, b = y[0].y) : (m = y[0].x, b = (I.y + T.y) / 2);
  }
  return [[
    e,
    { x: l.x + w.x, y: l.y + w.y },
    ...y,
    { x: d.x + N.x, y: d.y + N.y },
    n
  ], m, b, g, x];
}
function Md(e, t, n, o) {
  const r = Math.min(To(e, t) / 2, To(t, n) / 2, o), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const l = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + r * l},${s}Q ${i},${s} ${i},${s + r * d}`;
  }
  const a = e.x < n.x ? 1 : -1, c = e.y < n.y ? -1 : 1;
  return `L ${i},${s + r * c}Q ${i},${s} ${i + r * a},${s}`;
}
function Zt({ sourceX: e, sourceY: t, sourcePosition: n = F.Bottom, targetX: o, targetY: r, targetPosition: i = F.Top, borderRadius: s = 5, centerX: a, centerY: c, offset: l = 20, stepPosition: d = 0.5 }) {
  const [f, u, h, y, m] = Cd({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: o, y: r },
    targetPosition: i,
    center: { x: a, y: c },
    offset: l,
    stepPosition: d
  });
  return [f.reduce((w, N, g) => {
    let x = "";
    return g > 0 && g < f.length - 1 ? x = Md(f[g - 1], N, f[g + 1], s) : x = `${g === 0 ? "M" : "L"}${N.x} ${N.y}`, w += x, w;
  }, ""), u, h, y, m];
}
function jo(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function kd(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!jo(t) || !jo(n))
    return null;
  const o = t.internals.handleBounds || zo(t.handles), r = n.internals.handleBounds || zo(n.handles), i = $o(o?.source ?? [], e.sourceHandle), s = $o(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === We.Strict ? r?.target ?? [] : (r?.target ?? []).concat(r?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", xe.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || F.Bottom, c = s?.position || F.Top, l = ht(t, i, a), d = ht(n, s, c);
  return {
    sourceX: l.x,
    sourceY: l.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: c
  };
}
function zo(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const o of e)
    o.width = o.width ?? 1, o.height = o.height ?? 1, o.type === "source" ? t.push(o) : o.type === "target" && n.push(o);
  return {
    source: t,
    target: n
  };
}
function ht(e, t, n = F.Left, o = !1) {
  const r = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Ee(e);
  if (o)
    return { x: r + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case F.Top:
      return { x: r + s / 2, y: i };
    case F.Right:
      return { x: r + s, y: i + a / 2 };
    case F.Bottom:
      return { x: r + s / 2, y: i + a };
    case F.Left:
      return { x: r, y: i + a / 2 };
  }
}
function $o(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Pn(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function Id(e, { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: r }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || o, a.markerEnd || r].forEach((c) => {
    if (c && typeof c == "object") {
      const l = Pn(c, t);
      i.has(l) || (s.push({ id: l, color: c.color || n, ...c }), i.add(l));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const qn = {
  nodeOrigin: [0, 0],
  nodeExtent: lt,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Ad = {
  ...qn,
  checkEquality: !0
};
function Un(e, t) {
  const n = { ...e };
  for (const o in t)
    t[o] !== void 0 && (n[o] = t[o]);
  return n;
}
function Pd(e, t, n) {
  const o = Un(qn, n);
  for (const r of e.values())
    if (r.parentId)
      Kn(r, e, t, o);
    else {
      const i = wt(r, o.nodeOrigin), s = qe(r.extent) ? r.extent : o.nodeExtent, a = je(i, s, Ee(r));
      r.internals.positionAbsolute = a;
    }
}
function Dd(e, t) {
  if (!e.handles)
    return e.measured ? t?.internals.handleBounds : void 0;
  const n = [], o = [];
  for (const r of e.handles) {
    const i = {
      id: r.id,
      width: r.width ?? 1,
      height: r.height ?? 1,
      nodeId: e.id,
      x: r.x,
      y: r.y,
      position: r.position,
      type: r.type
    };
    r.type === "source" ? n.push(i) : r.type === "target" && o.push(i);
  }
  return {
    source: n,
    target: o
  };
}
function Dn(e, t, n, o) {
  const r = Un(Ad, o);
  let i = e.length > 0;
  const s = new Map(t), a = r?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let l = s.get(c.id);
    if (r.checkEquality && c === l?.internals.userNode)
      t.set(c.id, l);
    else {
      const d = wt(c, r.nodeOrigin), f = qe(c.extent) ? c.extent : r.nodeExtent, u = je(d, f, Ee(c));
      l = {
        ...r.defaults,
        ...c,
        measured: {
          width: c.measured?.width,
          height: c.measured?.height
        },
        internals: {
          positionAbsolute: u,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: Dd(c, l),
          z: wi(c, a),
          userNode: c
        }
      }, t.set(c.id, l);
    }
    (l.measured === void 0 || l.measured.width === void 0 || l.measured.height === void 0) && !l.hidden && (i = !1), c.parentId && Kn(l, t, n, o);
  }
  return i;
}
function Td(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Kn(e, t, n, o) {
  const { elevateNodesOnSelect: r, nodeOrigin: i, nodeExtent: s } = Un(qn, o), a = e.parentId, c = t.get(a);
  if (!c) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Td(e, n);
  const l = r ? 1e3 : 0, { x: d, y: f, z: u } = jd(e, c, i, s, l), { positionAbsolute: h } = e.internals, y = d !== h.x || f !== h.y;
  (y || u !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: d, y: f } : h,
      z: u
    }
  });
}
function wi(e, t) {
  return (pe(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function jd(e, t, n, o, r) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Ee(e), c = wt(e, n), l = qe(e.extent) ? je(c, e.extent, a) : c;
  let d = je({ x: i + l.x, y: s + l.y }, o, a);
  e.extent === "parent" && (d = ai(d, a, t));
  const f = wi(e, r), u = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: u >= f ? u + 1 : f
  };
}
function Qn(e, t, n, o = [0, 0]) {
  const r = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const c = i.get(s.parentId)?.expandedRect ?? Ge(a), l = li(c, s.rect);
    i.set(s.parentId, { expandedRect: l, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, c) => {
    const l = a.internals.positionAbsolute, d = Ee(a), f = a.origin ?? o, u = s.x < l.x ? Math.round(Math.abs(l.x - s.x)) : 0, h = s.y < l.y ? Math.round(Math.abs(l.y - s.y)) : 0, y = Math.max(d.width, Math.round(s.width)), m = Math.max(d.height, Math.round(s.height)), b = (y - d.width) * f[0], w = (m - d.height) * f[1];
    (u > 0 || h > 0 || b || w) && (r.push({
      id: c,
      type: "position",
      position: {
        x: a.position.x - u + b,
        y: a.position.y - h + w
      }
    }), n.get(c)?.forEach((N) => {
      e.some((g) => g.id === N.id) || r.push({
        id: N.id,
        type: "position",
        position: {
          x: N.position.x + u,
          y: N.position.y + h
        }
      });
    })), (d.width < s.width || d.height < s.height || u || h) && r.push({
      id: c,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: y + (u ? f[0] * u - b : 0),
        height: m + (h ? f[1] * h - w : 0)
      }
    });
  }), r;
}
function zd(e, t, n, o, r, i) {
  const s = o?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const c = [], l = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(l.transform), f = [];
  for (const u of e.values()) {
    const h = t.get(u.id);
    if (!h)
      continue;
    if (h.hidden) {
      t.set(h.id, {
        ...h,
        internals: {
          ...h.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const y = Gn(u.nodeElement), m = h.measured.width !== y.width || h.measured.height !== y.height;
    if (!!(y.width && y.height && (m || !h.internals.handleBounds || u.force))) {
      const w = u.nodeElement.getBoundingClientRect(), N = qe(h.extent) ? h.extent : i;
      let { positionAbsolute: g } = h.internals;
      h.parentId && h.extent === "parent" ? g = ai(g, y, t.get(h.parentId)) : N && (g = je(g, N, y));
      const x = {
        ...h,
        measured: y,
        internals: {
          ...h.internals,
          positionAbsolute: g,
          handleBounds: {
            source: Ao("source", u.nodeElement, w, d, h.id),
            target: Ao("target", u.nodeElement, w, d, h.id)
          }
        }
      };
      t.set(h.id, x), h.parentId && Kn(x, t, n, { nodeOrigin: r }), a = !0, m && (c.push({
        id: h.id,
        type: "dimensions",
        dimensions: y
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: Ge(x, r)
      }));
    }
  }
  if (f.length > 0) {
    const u = Qn(f, t, n, r);
    c.push(...u);
  }
  return { changes: c, updatedInternals: a };
}
async function $d({ delta: e, panZoom: t, transform: n, translateExtent: o, width: r, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [r, i]
  ], o), a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(a);
}
function Ho(e, t, n, o, r, i) {
  let s = r;
  const a = o.get(s) || /* @__PURE__ */ new Map();
  o.set(s, a.set(n, t)), s = `${r}-${e}`;
  const c = o.get(s) || /* @__PURE__ */ new Map();
  if (o.set(s, c.set(n, t)), i) {
    s = `${r}-${e}-${i}`;
    const l = o.get(s) || /* @__PURE__ */ new Map();
    o.set(s, l.set(n, t));
  }
}
function vi(e, t, n) {
  e.clear(), t.clear();
  for (const o of n) {
    const { source: r, target: i, sourceHandle: s = null, targetHandle: a = null } = o, c = { edgeId: o.id, source: r, target: i, sourceHandle: s, targetHandle: a }, l = `${r}-${s}--${i}-${a}`, d = `${i}-${a}--${r}-${s}`;
    Ho("source", c, d, e, r, s), Ho("target", c, l, e, i, a), t.set(o.id, o);
  }
}
function bi(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : bi(n, t) : !1;
}
function Lo(e, t, n) {
  let o = e;
  do {
    if (o?.matches?.(t))
      return !0;
    if (o === n)
      return !1;
    o = o?.parentElement;
  } while (o);
  return !1;
}
function Hd(e, t, n, o) {
  const r = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === o) && (!s.parentId || !bi(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const a = e.get(i);
      a && r.set(i, {
        id: i,
        position: a.position || { x: 0, y: 0 },
        distance: {
          x: n.x - a.internals.positionAbsolute.x,
          y: n.y - a.internals.positionAbsolute.y
        },
        extent: a.extent,
        parentId: a.parentId,
        origin: a.origin,
        expandParent: a.expandParent,
        internals: {
          positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: a.measured.width ?? 0,
          height: a.measured.height ?? 0
        }
      });
    }
  return r;
}
function hn({ nodeId: e, dragItems: t, nodeLookup: n, dragging: o = !0 }) {
  const r = [];
  for (const [s, a] of t) {
    const c = n.get(s)?.internals.userNode;
    c && r.push({
      ...c,
      position: a.position,
      dragging: o
    });
  }
  if (!e)
    return [r[0], r];
  const i = n.get(e)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: t.get(e)?.position || i.position,
      dragging: o
    } : r[0],
    r
  ];
}
function Ld({ dragItems: e, snapGrid: t, x: n, y: o }) {
  const r = e.values().next().value;
  if (!r)
    return null;
  const i = {
    x: n - r.distance.x,
    y: o - r.distance.y
  }, s = bt(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Od({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: o, onDragStop: r }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), c = !1, l = { x: 0, y: 0 }, d = null, f = !1, u = null, h = !1, y = !1, m = null;
  function b({ noDragClassName: N, handleSelector: g, domNode: x, isSelectable: E, nodeId: _, nodeClickDistance: k = 0 }) {
    u = ue(x);
    function I({ x: A, y: z }) {
      const { nodeLookup: v, nodeExtent: M, snapGrid: S, snapToGrid: C, nodeOrigin: D, onNodeDrag: P, onSelectionDrag: j, onError: $, updateNodePositions: H } = t();
      i = { x: A, y: z };
      let V = !1;
      const R = a.size > 1, W = R && M ? An(vt(a)) : null, q = R && C ? Ld({
        dragItems: a,
        snapGrid: S,
        x: A,
        y: z
      }) : null;
      for (const [X, O] of a) {
        if (!v.has(X))
          continue;
        let Y = { x: A - O.distance.x, y: z - O.distance.y };
        C && (Y = q ? {
          x: Math.round(Y.x + q.x),
          y: Math.round(Y.y + q.y)
        } : bt(Y, S));
        let J = null;
        if (R && M && !O.extent && W) {
          const { positionAbsolute: G } = O.internals, U = G.x - W.x + M[0][0], ne = G.x + O.measured.width - W.x2 + M[1][0], ae = G.y - W.y + M[0][1], ce = G.y + O.measured.height - W.y2 + M[1][1];
          J = [
            [U, ae],
            [ne, ce]
          ];
        }
        const { position: Q, positionAbsolute: Z } = si({
          nodeId: X,
          nextPosition: Y,
          nodeLookup: v,
          nodeExtent: J || M,
          nodeOrigin: D,
          onError: $
        });
        V = V || O.position.x !== Q.x || O.position.y !== Q.y, O.position = Q, O.internals.positionAbsolute = Z;
      }
      if (y = y || V, !!V && (H(a, !0), m && (o || P || !_ && j))) {
        const [X, O] = hn({
          nodeId: _,
          dragItems: a,
          nodeLookup: v
        });
        o?.(m, a, X, O), P?.(m, X, O), _ || j?.(m, O);
      }
    }
    async function T() {
      if (!d)
        return;
      const { transform: A, panBy: z, autoPanSpeed: v, autoPanOnNodeDrag: M } = t();
      if (!M) {
        c = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, C] = ci(l, d, v);
      (S !== 0 || C !== 0) && (i.x = (i.x ?? 0) - S / A[2], i.y = (i.y ?? 0) - C / A[2], await z({ x: S, y: C }) && I(i)), s = requestAnimationFrame(T);
    }
    function B(A) {
      const { nodeLookup: z, multiSelectionActive: v, nodesDraggable: M, transform: S, snapGrid: C, snapToGrid: D, selectNodesOnDrag: P, onNodeDragStart: j, onSelectionDragStart: $, unselectNodesAndEdges: H } = t();
      f = !0, (!P || !E) && !v && _ && (z.get(_)?.selected || H()), E && P && _ && e?.(_);
      const V = it(A.sourceEvent, { transform: S, snapGrid: C, snapToGrid: D, containerBounds: d });
      if (i = V, a = Hd(z, M, V, _), a.size > 0 && (n || j || !_ && $)) {
        const [R, W] = hn({
          nodeId: _,
          dragItems: a,
          nodeLookup: z
        });
        n?.(A.sourceEvent, a, R, W), j?.(A.sourceEvent, R, W), _ || $?.(A.sourceEvent, W);
      }
    }
    const L = Yr().clickDistance(k).on("start", (A) => {
      const { domNode: z, nodeDragThreshold: v, transform: M, snapGrid: S, snapToGrid: C } = t();
      d = z?.getBoundingClientRect() || null, h = !1, y = !1, m = A.sourceEvent, v === 0 && B(A), i = it(A.sourceEvent, { transform: M, snapGrid: S, snapToGrid: C, containerBounds: d }), l = me(A.sourceEvent, d);
    }).on("drag", (A) => {
      const { autoPanOnNodeDrag: z, transform: v, snapGrid: M, snapToGrid: S, nodeDragThreshold: C, nodeLookup: D } = t(), P = it(A.sourceEvent, { transform: v, snapGrid: M, snapToGrid: S, containerBounds: d });
      if (m = A.sourceEvent, (A.sourceEvent.type === "touchmove" && A.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      _ && !D.has(_)) && (h = !0), !h) {
        if (!c && z && f && (c = !0, T()), !f) {
          const j = me(A.sourceEvent, d), $ = j.x - l.x, H = j.y - l.y;
          Math.sqrt($ * $ + H * H) > C && B(A);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && a && f && (l = me(A.sourceEvent, d), I(P));
      }
    }).on("end", (A) => {
      if (!(!f || h) && (c = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: z, updateNodePositions: v, onNodeDragStop: M, onSelectionDragStop: S } = t();
        if (y && (v(a, !1), y = !1), r || M || !_ && S) {
          const [C, D] = hn({
            nodeId: _,
            dragItems: a,
            nodeLookup: z,
            dragging: !1
          });
          r?.(A.sourceEvent, a, C, D), M?.(A.sourceEvent, C, D), _ || S?.(A.sourceEvent, D);
        }
      }
    }).filter((A) => {
      const z = A.target;
      return !A.button && (!N || !Lo(z, `.${N}`, x)) && (!g || Lo(z, g, x));
    });
    u.call(L);
  }
  function w() {
    u?.on(".drag", null);
  }
  return {
    update: b,
    destroy: w
  };
}
function Bd(e, t, n) {
  const o = [], r = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    dt(r, Ge(i)) > 0 && o.push(i);
  return o;
}
const Rd = 250;
function Vd(e, t, n, o) {
  let r = [], i = 1 / 0;
  const s = Bd(e, n, t + Rd);
  for (const a of s) {
    const c = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const l of c) {
      if (o.nodeId === l.nodeId && o.type === l.type && o.id === l.id)
        continue;
      const { x: d, y: f } = ht(a, l, l.position, !0), u = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(f - e.y, 2));
      u > t || (u < i ? (r = [{ ...l, x: d, y: f }], i = u) : u === i && r.push({ ...l, x: d, y: f }));
    }
  }
  if (!r.length)
    return null;
  if (r.length > 1) {
    const a = o.type === "source" ? "target" : "source";
    return r.find((c) => c.type === a) ?? r[0];
  }
  return r[0];
}
function _i(e, t, n, o, r, i = !1) {
  const s = o.get(e);
  if (!s)
    return null;
  const a = r === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], c = (n ? a?.find((l) => l.id === n) : a?.[0]) ?? null;
  return c && i ? { ...c, ...ht(s, c, c.position, !0) } : c;
}
function Ei(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Fd(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Si = () => !0;
function Xd(e, { connectionMode: t, connectionRadius: n, handleId: o, nodeId: r, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: c, lib: l, autoPanOnConnect: d, flowId: f, panBy: u, cancelConnection: h, onConnectStart: y, onConnect: m, onConnectEnd: b, isValidConnection: w = Si, onReconnectEnd: N, updateConnection: g, getTransform: x, getFromHandle: E, autoPanSpeed: _, dragThreshold: k = 1, handleDomNode: I }) {
  const T = fi(e.target);
  let B = 0, L;
  const { x: A, y: z } = me(e), v = Ei(i, I), M = a?.getBoundingClientRect();
  let S = !1;
  if (!M || !v)
    return;
  const C = _i(r, v, o, c, t);
  if (!C)
    return;
  let D = me(e, M), P = !1, j = null, $ = !1, H = null;
  function V() {
    if (!d || !M)
      return;
    const [Q, Z] = ci(D, M, _);
    u({ x: Q, y: Z }), B = requestAnimationFrame(V);
  }
  const R = {
    ...C,
    nodeId: r,
    type: v,
    position: C.position
  }, W = c.get(r);
  let X = {
    inProgress: !0,
    isValid: null,
    from: ht(W, R, F.Left, !0),
    fromHandle: R,
    fromPosition: R.position,
    fromNode: W,
    to: D,
    toHandle: null,
    toPosition: Co[R.position],
    toNode: null
  };
  function O() {
    S = !0, g(X), y?.(e, { nodeId: r, handleId: o, handleType: v });
  }
  k === 0 && O();
  function Y(Q) {
    if (!S) {
      const { x: ne, y: ae } = me(Q), ce = ne - A, ze = ae - z;
      if (!(ce * ce + ze * ze > k * k))
        return;
      O();
    }
    if (!E() || !R) {
      J(Q);
      return;
    }
    const Z = x();
    D = me(Q, M), L = Vd(_t(D, Z, !1, [1, 1]), n, c, R), P || (V(), P = !0);
    const G = Ni(Q, {
      handle: L,
      connectionMode: t,
      fromNodeId: r,
      fromHandleId: o,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: T,
      lib: l,
      flowId: f,
      nodeLookup: c
    });
    H = G.handleDomNode, j = G.connection, $ = Fd(!!L, G.isValid);
    const U = {
      // from stays the same
      ...X,
      isValid: $,
      to: G.toHandle && $ ? Wt({ x: G.toHandle.x, y: G.toHandle.y }, Z) : D,
      toHandle: G.toHandle,
      toPosition: $ && G.toHandle ? G.toHandle.position : Co[R.position],
      toNode: G.toHandle ? c.get(G.toHandle.nodeId) : null
    };
    $ && L && X.toHandle && U.toHandle && X.toHandle.type === U.toHandle.type && X.toHandle.nodeId === U.toHandle.nodeId && X.toHandle.id === U.toHandle.id && X.to.x === U.to.x && X.to.y === U.to.y || (g(U), X = U);
  }
  function J(Q) {
    if (!("touches" in Q && Q.touches.length > 0)) {
      if (S) {
        (L || H) && j && $ && m?.(j);
        const { inProgress: Z, ...G } = X, U = {
          ...G,
          toPosition: X.toHandle ? X.toPosition : null
        };
        b?.(Q, U), i && N?.(Q, U);
      }
      h(), cancelAnimationFrame(B), P = !1, $ = !1, j = null, H = null, T.removeEventListener("mousemove", Y), T.removeEventListener("mouseup", J), T.removeEventListener("touchmove", Y), T.removeEventListener("touchend", J);
    }
  }
  T.addEventListener("mousemove", Y), T.addEventListener("mouseup", J), T.addEventListener("touchmove", Y), T.addEventListener("touchend", J);
}
function Ni(e, { handle: t, connectionMode: n, fromNodeId: o, fromHandleId: r, fromType: i, doc: s, lib: a, flowId: c, isValidConnection: l = Si, nodeLookup: d }) {
  const f = i === "target", u = t ? s.querySelector(`.${a}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y } = me(e), m = s.elementFromPoint(h, y), b = m?.classList.contains(`${a}-flow__handle`) ? m : u, w = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const N = Ei(void 0, b), g = b.getAttribute("data-nodeid"), x = b.getAttribute("data-handleid"), E = b.classList.contains("connectable"), _ = b.classList.contains("connectableend");
    if (!g || !N)
      return w;
    const k = {
      source: f ? g : o,
      sourceHandle: f ? x : r,
      target: f ? o : g,
      targetHandle: f ? r : x
    };
    w.connection = k;
    const T = E && _ && (n === We.Strict ? f && N === "source" || !f && N === "target" : g !== o || x !== r);
    w.isValid = T && l(k), w.toHandle = _i(g, N, x, d, n, !0);
  }
  return w;
}
const Tn = {
  onPointerDown: Xd,
  isValid: Ni
};
function Yd({ domNode: e, panZoom: t, getTransform: n, getViewScale: o }) {
  const r = ue(e);
  function i({ translateExtent: a, width: c, height: l, zoomStep: d = 1, pannable: f = !0, zoomable: u = !0, inversePan: h = !1 }) {
    const y = (g) => {
      if (g.sourceEvent.type !== "wheel" || !t)
        return;
      const x = n(), E = g.sourceEvent.ctrlKey && ft() ? 10 : 1, _ = -g.sourceEvent.deltaY * (g.sourceEvent.deltaMode === 1 ? 0.05 : g.sourceEvent.deltaMode ? 1 : 2e-3) * d, k = x[2] * Math.pow(2, _ * E);
      t.scaleTo(k);
    };
    let m = [0, 0];
    const b = (g) => {
      (g.sourceEvent.type === "mousedown" || g.sourceEvent.type === "touchstart") && (m = [
        g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
        g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY
      ]);
    }, w = (g) => {
      const x = n();
      if (g.sourceEvent.type !== "mousemove" && g.sourceEvent.type !== "touchmove" || !t)
        return;
      const E = [
        g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
        g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY
      ], _ = [E[0] - m[0], E[1] - m[1]];
      m = E;
      const k = o() * Math.max(x[2], Math.log(x[2])) * (h ? -1 : 1), I = {
        x: x[0] - _[0] * k,
        y: x[1] - _[1] * k
      }, T = [
        [0, 0],
        [c, l]
      ];
      t.setViewportConstrained({
        x: I.x,
        y: I.y,
        zoom: x[2]
      }, T, a);
    }, N = ei().on("start", b).on("zoom", f ? w : null).on("zoom.wheel", u ? y : null);
    r.call(N, {});
  }
  function s() {
    r.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: ge
  };
}
const Wd = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, nn = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), gn = ({ x: e, y: t, zoom: n }) => Jt.translate(e, t).scale(n), Le = (e, t) => e.target.closest(`.${t}`), Ci = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Zd = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, pn = (e, t = 0, n = Zd, o = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || o(), r ? e.transition().duration(t).ease(n).on("end", o) : e;
}, Mi = (e) => {
  const t = e.ctrlKey && ft() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Gd({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: o, panOnScrollMode: r, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: c, onPanZoomEnd: l }) {
  return (d) => {
    if (Le(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const b = ge(d), w = Mi(d), N = f * Math.pow(2, w);
      o.scaleTo(n, N, b, d);
      return;
    }
    const u = d.deltaMode === 1 ? 20 : 1;
    let h = r === Pe.Vertical ? 0 : d.deltaX * u, y = r === Pe.Horizontal ? 0 : d.deltaY * u;
    !ft() && d.shiftKey && r !== Pe.Vertical && (h = d.deltaY * u, y = 0), o.translateBy(
      n,
      -(h / f) * i,
      -(y / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const m = nn(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, m)), e.isPanScrolling && (c?.(d, m), e.panScrollTimeout = setTimeout(() => {
      l?.(d, m), e.isPanScrolling = !1;
    }, 150));
  };
}
function qd({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(o, r) {
    const i = o.type === "wheel", s = !t && i && !o.ctrlKey, a = Le(o, e);
    if (o.ctrlKey && i && a && o.preventDefault(), s || a)
      return null;
    o.preventDefault(), n.call(this, o, r);
  };
}
function Ud({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (o) => {
    if (o.sourceEvent?.internal)
      return;
    const r = nn(o.transform);
    e.mouseButton = o.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = r, o.sourceEvent?.type === "mousedown" && t(!0), n && n?.(o.sourceEvent, r);
  };
}
function Kd({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: o, onPanZoom: r }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Ci(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || o([i.transform.x, i.transform.y, i.transform.k]), r && !i.sourceEvent?.internal && r?.(i.sourceEvent, nn(i.transform));
  };
}
function Qd({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: o, onPanZoomEnd: r, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Ci(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, o(!1), r && Wd(e.prevViewport, s.transform))) {
      const a = nn(s.transform);
      e.prevViewport = a, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          r?.(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function Jd({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: o, panOnScroll: r, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: c, lib: l, connectionInProgress: d }) {
  return (f) => {
    const u = e || t, h = n && f.ctrlKey, y = f.type === "wheel";
    if (f.button === 1 && f.type === "mousedown" && (Le(f, `${l}-flow__node`) || Le(f, `${l}-flow__edge`)))
      return !0;
    if (!o && !u && !r && !i && !n || s || d && !y || Le(f, a) && y || Le(f, c) && (!y || r && y && !e) || !n && f.ctrlKey && y)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!u && !r && !h && y || !o && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(o) && !o.includes(f.button) && f.type === "mousedown")
      return !1;
    const m = Array.isArray(o) && o.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || y) && m;
  };
}
function ef({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: o, translateExtent: r, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: c, onDraggingChange: l }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), u = ei().clickDistance(!pe(o) || o < 0 ? 0 : o).scaleExtent([t, n]).translateExtent(r), h = ue(e).call(u);
  g({
    x: i.x,
    y: i.y,
    zoom: Ze(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], r);
  const y = h.on("wheel.zoom"), m = h.on("dblclick.zoom");
  u.wheelDelta(Mi);
  function b(A, z) {
    return h ? new Promise((v) => {
      u?.interpolate(z?.interpolate === "linear" ? un : jt).transform(pn(h, z?.duration, z?.ease, () => v(!0)), A);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: A, noPanClassName: z, onPaneContextMenu: v, userSelectionActive: M, panOnScroll: S, panOnDrag: C, panOnScrollMode: D, panOnScrollSpeed: P, preventScrolling: j, zoomOnPinch: $, zoomOnScroll: H, zoomOnDoubleClick: V, zoomActivationKeyPressed: R, lib: W, onTransformChange: q, connectionInProgress: X }) {
    M && !d.isZoomingOrPanning && N();
    const Y = S && !R && !M ? Gd({
      zoomPanValues: d,
      noWheelClassName: A,
      d3Selection: h,
      d3Zoom: u,
      panOnScrollMode: D,
      panOnScrollSpeed: P,
      zoomOnPinch: $,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: c
    }) : qd({
      noWheelClassName: A,
      preventScrolling: j,
      d3ZoomHandler: y
    });
    if (h.on("wheel.zoom", Y, { passive: !1 }), !M) {
      const Q = Ud({
        zoomPanValues: d,
        onDraggingChange: l,
        onPanZoomStart: a
      });
      u.on("start", Q);
      const Z = Kd({
        zoomPanValues: d,
        panOnDrag: C,
        onPaneContextMenu: !!v,
        onPanZoom: s,
        onTransformChange: q
      });
      u.on("zoom", Z);
      const G = Qd({
        zoomPanValues: d,
        panOnDrag: C,
        panOnScroll: S,
        onPaneContextMenu: v,
        onPanZoomEnd: c,
        onDraggingChange: l
      });
      u.on("end", G);
    }
    const J = Jd({
      zoomActivationKeyPressed: R,
      panOnDrag: C,
      zoomOnScroll: H,
      panOnScroll: S,
      zoomOnDoubleClick: V,
      zoomOnPinch: $,
      userSelectionActive: M,
      noPanClassName: z,
      noWheelClassName: A,
      lib: W,
      connectionInProgress: X
    });
    u.filter(J), V ? h.on("dblclick.zoom", m) : h.on("dblclick.zoom", null);
  }
  function N() {
    u.on("zoom", null);
  }
  async function g(A, z, v) {
    const M = gn(A), S = u?.constrain()(M, z, v);
    return S && await b(S), new Promise((C) => C(S));
  }
  async function x(A, z) {
    const v = gn(A);
    return await b(v, z), new Promise((M) => M(v));
  }
  function E(A) {
    if (h) {
      const z = gn(A), v = h.property("__zoom");
      (v.k !== A.zoom || v.x !== A.x || v.y !== A.y) && u?.transform(h, z, null, { sync: !0 });
    }
  }
  function _() {
    const A = h ? Jr(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: A.x, y: A.y, zoom: A.k };
  }
  function k(A, z) {
    return h ? new Promise((v) => {
      u?.interpolate(z?.interpolate === "linear" ? un : jt).scaleTo(pn(h, z?.duration, z?.ease, () => v(!0)), A);
    }) : Promise.resolve(!1);
  }
  function I(A, z) {
    return h ? new Promise((v) => {
      u?.interpolate(z?.interpolate === "linear" ? un : jt).scaleBy(pn(h, z?.duration, z?.ease, () => v(!0)), A);
    }) : Promise.resolve(!1);
  }
  function T(A) {
    u?.scaleExtent(A);
  }
  function B(A) {
    u?.translateExtent(A);
  }
  function L(A) {
    const z = !pe(A) || A < 0 ? 0 : A;
    u?.clickDistance(z);
  }
  return {
    update: w,
    destroy: N,
    setViewport: x,
    setViewportConstrained: g,
    getViewport: _,
    scaleTo: k,
    scaleBy: I,
    setScaleExtent: T,
    setTranslateExtent: B,
    syncViewport: E,
    setClickDistance: L
  };
}
var Ue;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ue || (Ue = {}));
function tf({ width: e, prevWidth: t, height: n, prevHeight: o, affectsX: r, affectsY: i }) {
  const s = e - t, a = n - o, c = [s > 0 ? 1 : s < 0 ? -1 : 0, a > 0 ? 1 : a < 0 ? -1 : 0];
  return s && r && (c[0] = c[0] * -1), a && i && (c[1] = c[1] * -1), c;
}
function nf(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), o = e.includes("left"), r = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: o,
    affectsY: r
  };
}
function Se(e, t) {
  return Math.max(0, t - e);
}
function Ne(e, t) {
  return Math.max(0, e - t);
}
function Pt(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Oo(e, t) {
  return e ? !t : t;
}
function of(e, t, n, o, r, i, s, a) {
  let { affectsX: c, affectsY: l } = t;
  const { isHorizontal: d, isVertical: f } = t, u = d && f, { xSnapped: h, ySnapped: y } = n, { minWidth: m, maxWidth: b, minHeight: w, maxHeight: N } = o, { x: g, y: x, width: E, height: _, aspectRatio: k } = e;
  let I = Math.floor(d ? h - e.pointerX : 0), T = Math.floor(f ? y - e.pointerY : 0);
  const B = E + (c ? -I : I), L = _ + (l ? -T : T), A = -i[0] * E, z = -i[1] * _;
  let v = Pt(B, m, b), M = Pt(L, w, N);
  if (s) {
    let D = 0, P = 0;
    c && I < 0 ? D = Se(g + I + A, s[0][0]) : !c && I > 0 && (D = Ne(g + B + A, s[1][0])), l && T < 0 ? P = Se(x + T + z, s[0][1]) : !l && T > 0 && (P = Ne(x + L + z, s[1][1])), v = Math.max(v, D), M = Math.max(M, P);
  }
  if (a) {
    let D = 0, P = 0;
    c && I > 0 ? D = Ne(g + I, a[0][0]) : !c && I < 0 && (D = Se(g + B, a[1][0])), l && T > 0 ? P = Ne(x + T, a[0][1]) : !l && T < 0 && (P = Se(x + L, a[1][1])), v = Math.max(v, D), M = Math.max(M, P);
  }
  if (r) {
    if (d) {
      const D = Pt(B / k, w, N) * k;
      if (v = Math.max(v, D), s) {
        let P = 0;
        !c && !l || c && !l && u ? P = Ne(x + z + B / k, s[1][1]) * k : P = Se(x + z + (c ? I : -I) / k, s[0][1]) * k, v = Math.max(v, P);
      }
      if (a) {
        let P = 0;
        !c && !l || c && !l && u ? P = Se(x + B / k, a[1][1]) * k : P = Ne(x + (c ? I : -I) / k, a[0][1]) * k, v = Math.max(v, P);
      }
    }
    if (f) {
      const D = Pt(L * k, m, b) / k;
      if (M = Math.max(M, D), s) {
        let P = 0;
        !c && !l || l && !c && u ? P = Ne(g + L * k + A, s[1][0]) / k : P = Se(g + (l ? T : -T) * k + A, s[0][0]) / k, M = Math.max(M, P);
      }
      if (a) {
        let P = 0;
        !c && !l || l && !c && u ? P = Se(g + L * k, a[1][0]) / k : P = Ne(g + (l ? T : -T) * k, a[0][0]) / k, M = Math.max(M, P);
      }
    }
  }
  T = T + (T < 0 ? M : -M), I = I + (I < 0 ? v : -v), r && (u ? B > L * k ? T = (Oo(c, l) ? -I : I) / k : I = (Oo(c, l) ? -T : T) * k : d ? (T = I / k, l = c) : (I = T * k, c = l));
  const S = c ? g + I : g, C = l ? x + T : x;
  return {
    width: E + (c ? -I : I),
    height: _ + (l ? -T : T),
    x: i[0] * I * (c ? -1 : 1) + S,
    y: i[1] * T * (l ? -1 : 1) + C
  };
}
const ki = { width: 0, height: 0, x: 0, y: 0 }, rf = {
  ...ki,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function sf(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function af(e, t, n) {
  const o = t.position.x + e.position.x, r = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, a = n[0] * i, c = n[1] * s;
  return [
    [o - a, r - c],
    [o + i - a, r + s - c]
  ];
}
function cf({ domNode: e, nodeId: t, getStoreItems: n, onChange: o, onEnd: r }) {
  const i = ue(e);
  function s({ controlPosition: c, boundaries: l, keepAspectRatio: d, resizeDirection: f, onResizeStart: u, onResize: h, onResizeEnd: y, shouldResize: m }) {
    let b = { ...ki }, w = { ...rf };
    const N = nf(c);
    let g, x = null, E = [], _, k, I, T = !1;
    const B = Yr().on("start", (L) => {
      const { nodeLookup: A, transform: z, snapGrid: v, snapToGrid: M, nodeOrigin: S, paneDomNode: C } = n();
      if (g = A.get(t), !g)
        return;
      x = C?.getBoundingClientRect() ?? null;
      const { xSnapped: D, ySnapped: P } = it(L.sourceEvent, {
        transform: z,
        snapGrid: v,
        snapToGrid: M,
        containerBounds: x
      });
      b = {
        width: g.measured.width ?? 0,
        height: g.measured.height ?? 0,
        x: g.position.x ?? 0,
        y: g.position.y ?? 0
      }, w = {
        ...b,
        pointerX: D,
        pointerY: P,
        aspectRatio: b.width / b.height
      }, _ = void 0, g.parentId && (g.extent === "parent" || g.expandParent) && (_ = A.get(g.parentId), k = _ && g.extent === "parent" ? sf(_) : void 0), E = [], I = void 0;
      for (const [j, $] of A)
        if ($.parentId === t && (E.push({
          id: j,
          position: { ...$.position },
          extent: $.extent
        }), $.extent === "parent" || $.expandParent)) {
          const H = af($, g, $.origin ?? S);
          I ? I = [
            [Math.min(H[0][0], I[0][0]), Math.min(H[0][1], I[0][1])],
            [Math.max(H[1][0], I[1][0]), Math.max(H[1][1], I[1][1])]
          ] : I = H;
        }
      u?.(L, { ...b });
    }).on("drag", (L) => {
      const { transform: A, snapGrid: z, snapToGrid: v, nodeOrigin: M } = n(), S = it(L.sourceEvent, {
        transform: A,
        snapGrid: z,
        snapToGrid: v,
        containerBounds: x
      }), C = [];
      if (!g)
        return;
      const { x: D, y: P, width: j, height: $ } = b, H = {}, V = g.origin ?? M, { width: R, height: W, x: q, y: X } = of(w, N, S, l, d, V, k, I), O = R !== j, Y = W !== $, J = q !== D && O, Q = X !== P && Y;
      if (!J && !Q && !O && !Y)
        return;
      if ((J || Q || V[0] === 1 || V[1] === 1) && (H.x = J ? q : b.x, H.y = Q ? X : b.y, b.x = H.x, b.y = H.y, E.length > 0)) {
        const ne = q - D, ae = X - P;
        for (const ce of E)
          ce.position = {
            x: ce.position.x - ne + V[0] * (R - j),
            y: ce.position.y - ae + V[1] * (W - $)
          }, C.push(ce);
      }
      if ((O || Y) && (H.width = O && (!f || f === "horizontal") ? R : b.width, H.height = Y && (!f || f === "vertical") ? W : b.height, b.width = H.width, b.height = H.height), _ && g.expandParent) {
        const ne = V[0] * (H.width ?? 0);
        H.x && H.x < ne && (b.x = ne, w.x = w.x - (H.x - ne));
        const ae = V[1] * (H.height ?? 0);
        H.y && H.y < ae && (b.y = ae, w.y = w.y - (H.y - ae));
      }
      const Z = tf({
        width: b.width,
        prevWidth: j,
        height: b.height,
        prevHeight: $,
        affectsX: N.affectsX,
        affectsY: N.affectsY
      }), G = { ...b, direction: Z };
      m?.(L, G) !== !1 && (T = !0, h?.(L, G), o(H, C));
    }).on("end", (L) => {
      T && (y?.(L, { ...b }), r?.({ ...b }), T = !1);
    });
    i.call(B);
  }
  function a() {
    i.on(".drag", null);
  }
  return {
    update: s,
    destroy: a
  };
}
var mn = { exports: {} }, yn = {};
var Bo;
function lf() {
  if (Bo) return yn;
  Bo = 1;
  var e = ya, t = Ta();
  function n(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var o = typeof Object.is == "function" ? Object.is : n, r = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, a = e.useMemo, c = e.useDebugValue;
  return yn.useSyncExternalStoreWithSelector = function(l, d, f, u, h) {
    var y = i(null);
    if (y.current === null) {
      var m = { hasValue: !1, value: null };
      y.current = m;
    } else m = y.current;
    y = a(
      function() {
        function w(_) {
          if (!N) {
            if (N = !0, g = _, _ = u(_), h !== void 0 && m.hasValue) {
              var k = m.value;
              if (h(k, _))
                return x = k;
            }
            return x = _;
          }
          if (k = x, o(g, _)) return k;
          var I = u(_);
          return h !== void 0 && h(k, I) ? (g = _, k) : (g = _, x = I);
        }
        var N = !1, g, x, E = f === void 0 ? null : f;
        return [
          function() {
            return w(d());
          },
          E === null ? void 0 : function() {
            return w(E());
          }
        ];
      },
      [d, f, u, h]
    );
    var b = r(l, y[0], y[1]);
    return s(
      function() {
        m.hasValue = !0, m.value = b;
      },
      [b]
    ), c(b), b;
  }, yn;
}
var Ro;
function uf() {
  return Ro || (Ro = 1, mn.exports = lf()), mn.exports;
}
var df = uf();
const ff = /* @__PURE__ */ xa(df), hf = {}, Vo = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), o = (d, f) => {
    const u = typeof d == "function" ? d(t) : d;
    if (!Object.is(u, t)) {
      const h = t;
      t = f ?? (typeof u != "object" || u === null) ? u : Object.assign({}, t, u), n.forEach((y) => y(t, h));
    }
  }, r = () => t, c = { setState: o, getState: r, getInitialState: () => l, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (hf ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, l = t = e(o, r, c);
  return c;
}, gf = (e) => e ? Vo(e) : Vo, { useDebugValue: pf } = Re, { useSyncExternalStoreWithSelector: mf } = ff, yf = (e) => e;
function Ii(e, t = yf, n) {
  const o = mf(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return pf(o), o;
}
const Fo = (e, t) => {
  const n = gf(e), o = (r, i = t) => Ii(n, r, i);
  return Object.assign(o, n), o;
}, xf = (e, t) => e ? Fo(e, t) : Fo;
function re(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [o, r] of e)
      if (!Object.is(r, t.get(o)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const o of e)
      if (!t.has(o))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || !Object.is(e[o], t[o]))
      return !1;
  return !0;
}
const on = Hn(null), wf = on.Provider, Ai = xe.error001();
function K(e, t) {
  const n = yt(on);
  if (n === null)
    throw new Error(Ai);
  return Ii(n, e, t);
}
function oe() {
  const e = yt(on);
  if (e === null)
    throw new Error(Ai);
  return fe(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const Xo = { display: "none" }, vf = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, Pi = "react-flow__node-desc", Di = "react-flow__edge-desc", bf = "react-flow__aria-live", _f = (e) => e.ariaLiveMessage, Ef = (e) => e.ariaLabelConfig;
function Sf({ rfId: e }) {
  const t = K(_f);
  return p.jsx("div", { id: `${bf}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: vf, children: t });
}
function Nf({ rfId: e, disableKeyboardA11y: t }) {
  const n = K(Ef);
  return p.jsxs(p.Fragment, { children: [p.jsx("div", { id: `${Pi}-${e}`, style: Xo, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), p.jsx("div", { id: `${Di}-${e}`, style: Xo, children: n["edge.a11yDescription.default"] }), !t && p.jsx(Sf, { rfId: e })] });
}
const rn = $n(({ position: e = "top-left", children: t, className: n, style: o, ...r }, i) => {
  const s = `${e}`.split("-");
  return p.jsx("div", { className: ie(["react-flow__panel", n, ...s]), style: o, ref: i, ...r, children: t });
});
rn.displayName = "Panel";
function Cf({ proOptions: e, position: t = "bottom-right" }) {
  return e?.hideAttribution ? null : p.jsx(rn, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: p.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Mf = (e) => {
  const t = [], n = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && n.push(o);
  return { selectedNodes: t, selectedEdges: n };
}, Dt = (e) => e.id;
function kf(e, t) {
  return re(e.selectedNodes.map(Dt), t.selectedNodes.map(Dt)) && re(e.selectedEdges.map(Dt), t.selectedEdges.map(Dt));
}
function If({ onSelectionChange: e }) {
  const t = oe(), { selectedNodes: n, selectedEdges: o } = K(Mf, kf);
  return te(() => {
    const r = { nodes: n, edges: o };
    e?.(r), t.getState().onSelectionChangeHandlers.forEach((i) => i(r));
  }, [n, o, e]), null;
}
const Af = (e) => !!e.onSelectionChangeHandlers;
function Pf({ onSelectionChange: e }) {
  const t = K(Af);
  return e || t ? p.jsx(If, { onSelectionChange: e }) : null;
}
const Ti = [0, 0], Df = { x: 0, y: 0, zoom: 1 }, Tf = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "paneClickDistance",
  "ariaLabelConfig"
], Yo = [...Tf, "rfId"], jf = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
  setPaneClickDistance: e.setPaneClickDistance
}), Wo = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: lt,
  nodeOrigin: Ti,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1",
  paneClickDistance: 0
};
function zf(e) {
  const { setNodes: t, setEdges: n, setMinZoom: o, setMaxZoom: r, setTranslateExtent: i, setNodeExtent: s, reset: a, setDefaultNodesAndEdges: c, setPaneClickDistance: l } = K(jf, re), d = oe();
  te(() => (c(e.defaultNodes, e.defaultEdges), () => {
    f.current = Wo, a();
  }), []);
  const f = ee(Wo);
  return te(
    () => {
      for (const u of Yo) {
        const h = e[u], y = f.current[u];
        h !== y && (typeof e[u] > "u" || (u === "nodes" ? t(h) : u === "edges" ? n(h) : u === "minZoom" ? o(h) : u === "maxZoom" ? r(h) : u === "translateExtent" ? i(h) : u === "nodeExtent" ? s(h) : u === "paneClickDistance" ? l(h) : u === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: xd(h) }) : u === "fitView" ? d.setState({ fitViewQueued: h }) : u === "fitViewOptions" ? d.setState({ fitViewOptions: h }) : d.setState({ [u]: h })));
      }
      f.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    Yo.map((u) => e[u])
  ), null;
}
function Zo() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function $f(e) {
  const [t, n] = le(e === "system" ? null : e);
  return te(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const o = Zo(), r = () => n(o?.matches ? "dark" : "light");
    return r(), o?.addEventListener("change", r), () => {
      o?.removeEventListener("change", r);
    };
  }, [e]), t !== null ? t : Zo()?.matches ? "dark" : "light";
}
const Go = typeof document < "u" ? document : null;
function gt(e = null, t = { target: Go, actInsideInputWithModifier: !0 }) {
  const [n, o] = le(!1), r = ee(!1), i = ee(/* @__PURE__ */ new Set([])), [s, a] = fe(() => {
    if (e !== null) {
      const l = (Array.isArray(e) ? e : [e]).filter((f) => typeof f == "string").map((f) => f.replace("+", `
`).replace(`

`, `
+`).split(`
`)), d = l.reduce((f, u) => f.concat(...u), []);
      return [l, d];
    }
    return [[], []];
  }, [e]);
  return te(() => {
    const c = t?.target ?? Go, l = t?.actInsideInputWithModifier ?? !0;
    if (e !== null) {
      const d = (h) => {
        if (r.current = h.ctrlKey || h.metaKey || h.shiftKey || h.altKey, (!r.current || r.current && !l) && hi(h))
          return !1;
        const m = Uo(h.code, a);
        if (i.current.add(h[m]), qo(s, i.current, !1)) {
          const b = h.composedPath?.()?.[0] || h.target, w = b?.nodeName === "BUTTON" || b?.nodeName === "A";
          t.preventDefault !== !1 && (r.current || !w) && h.preventDefault(), o(!0);
        }
      }, f = (h) => {
        const y = Uo(h.code, a);
        qo(s, i.current, !0) ? (o(!1), i.current.clear()) : i.current.delete(h[y]), h.key === "Meta" && i.current.clear(), r.current = !1;
      }, u = () => {
        i.current.clear(), o(!1);
      };
      return c?.addEventListener("keydown", d), c?.addEventListener("keyup", f), window.addEventListener("blur", u), window.addEventListener("contextmenu", u), () => {
        c?.removeEventListener("keydown", d), c?.removeEventListener("keyup", f), window.removeEventListener("blur", u), window.removeEventListener("contextmenu", u);
      };
    }
  }, [e, o]), n;
}
function qo(e, t, n) {
  return e.filter((o) => n || o.length === t.size).some((o) => o.every((r) => t.has(r)));
}
function Uo(e, t) {
  return t.includes(e) ? "code" : "key";
}
const Hf = () => {
  const e = oe();
  return fe(() => ({
    zoomIn: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1.2, { duration: t?.duration }) : Promise.resolve(!1);
    },
    zoomOut: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1 / 1.2, { duration: t?.duration }) : Promise.resolve(!1);
    },
    zoomTo: (t, n) => {
      const { panZoom: o } = e.getState();
      return o ? o.scaleTo(t, { duration: n?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, n) => {
      const { transform: [o, r, i], panZoom: s } = e.getState();
      return s ? (await s.setViewport({
        x: t.x ?? o,
        y: t.y ?? r,
        zoom: t.zoom ?? i
      }, n), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => {
      const [t, n, o] = e.getState().transform;
      return { x: t, y: n, zoom: o };
    },
    setCenter: async (t, n, o) => e.getState().setCenter(t, n, o),
    fitBounds: async (t, n) => {
      const { width: o, height: r, minZoom: i, maxZoom: s, panZoom: a } = e.getState(), c = Zn(t, o, r, i, s, n?.padding ?? 0.1);
      return a ? (await a.setViewport(c, {
        duration: n?.duration,
        ease: n?.ease,
        interpolate: n?.interpolate
      }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: o, snapGrid: r, snapToGrid: i, domNode: s } = e.getState();
      if (!s)
        return t;
      const { x: a, y: c } = s.getBoundingClientRect(), l = {
        x: t.x - a,
        y: t.y - c
      }, d = n.snapGrid ?? r, f = n.snapToGrid ?? i;
      return _t(l, o, f, d);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: o } = e.getState();
      if (!o)
        return t;
      const { x: r, y: i } = o.getBoundingClientRect(), s = Wt(t, n);
      return {
        x: s.x + r,
        y: s.y + i
      };
    }
  }), []);
};
function ji(e, t) {
  const n = [], o = /* @__PURE__ */ new Map(), r = [];
  for (const i of e)
    if (i.type === "add") {
      r.push(i);
      continue;
    } else if (i.type === "remove" || i.type === "replace")
      o.set(i.id, [i]);
    else {
      const s = o.get(i.id);
      s ? s.push(i) : o.set(i.id, [i]);
    }
  for (const i of t) {
    const s = o.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove")
      continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const a = { ...i };
    for (const c of s)
      Lf(c, a);
    n.push(a);
  }
  return r.length && r.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function Lf(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      typeof e.position < "u" && (t.position = e.position), typeof e.dragging < "u" && (t.dragging = e.dragging);
      break;
    }
    case "dimensions": {
      typeof e.dimensions < "u" && (t.measured ??= {}, t.measured.width = e.dimensions.width, t.measured.height = e.dimensions.height, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
      break;
    }
  }
}
function Of(e, t) {
  return ji(e, t);
}
function Bf(e, t) {
  return ji(e, t);
}
function Ie(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Oe(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const o = [];
  for (const [r, i] of e) {
    const s = t.has(r);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), o.push(Ie(i.id, s)));
  }
  return o;
}
function Ko({ items: e = [], lookup: t }) {
  const n = [], o = new Map(e.map((r) => [r.id, r]));
  for (const [r, i] of e.entries()) {
    const s = t.get(i.id), a = s?.internals?.userNode ?? s;
    a !== void 0 && a !== i && n.push({ id: i.id, item: i, type: "replace" }), a === void 0 && n.push({ item: i, type: "add", index: r });
  }
  for (const [r] of t)
    o.get(r) === void 0 && n.push({ id: r, type: "remove" });
  return n;
}
function Qo(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const Jo = (e) => cd(e), Rf = (e) => ii(e);
function zi(e) {
  return $n(e);
}
const Vf = typeof window < "u" ? va : te;
function er(e) {
  const [t, n] = le(BigInt(0)), [o] = le(() => Ff(() => n((r) => r + BigInt(1))));
  return Vf(() => {
    const r = o.get();
    r.length && (e(r), o.reset());
  }, [t]), o;
}
function Ff(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    }
  };
}
const $i = Hn(null);
function Xf({ children: e }) {
  const t = oe(), n = he((a) => {
    const { nodes: c = [], setNodes: l, hasDefaultNodes: d, onNodesChange: f, nodeLookup: u, fitViewQueued: h } = t.getState();
    let y = c;
    for (const b of a)
      y = typeof b == "function" ? b(y) : b;
    const m = Ko({
      items: y,
      lookup: u
    });
    d && l(y), m.length > 0 ? f?.(m) : h && window.requestAnimationFrame(() => {
      const { fitViewQueued: b, nodes: w, setNodes: N } = t.getState();
      b && N(w);
    });
  }, []), o = er(n), r = he((a) => {
    const { edges: c = [], setEdges: l, hasDefaultEdges: d, onEdgesChange: f, edgeLookup: u } = t.getState();
    let h = c;
    for (const y of a)
      h = typeof y == "function" ? y(h) : y;
    d ? l(h) : f && f(Ko({
      items: h,
      lookup: u
    }));
  }, []), i = er(r), s = fe(() => ({ nodeQueue: o, edgeQueue: i }), []);
  return p.jsx($i.Provider, { value: s, children: e });
}
function Yf() {
  const e = yt($i);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const Wf = (e) => !!e.panZoom;
function Jn() {
  const e = Hf(), t = oe(), n = Yf(), o = K(Wf), r = fe(() => {
    const i = (f) => t.getState().nodeLookup.get(f), s = (f) => {
      n.nodeQueue.push(f);
    }, a = (f) => {
      n.edgeQueue.push(f);
    }, c = (f) => {
      const { nodeLookup: u, nodeOrigin: h } = t.getState(), y = Jo(f) ? f : u.get(f.id), m = y.parentId ? di(y.position, y.measured, y.parentId, u, h) : y.position, b = {
        ...y,
        position: m,
        width: y.measured?.width ?? y.width,
        height: y.measured?.height ?? y.height
      };
      return Ge(b);
    }, l = (f, u, h = { replace: !1 }) => {
      s((y) => y.map((m) => {
        if (m.id === f) {
          const b = typeof u == "function" ? u(m) : u;
          return h.replace && Jo(b) ? b : { ...m, ...b };
        }
        return m;
      }));
    }, d = (f, u, h = { replace: !1 }) => {
      a((y) => y.map((m) => {
        if (m.id === f) {
          const b = typeof u == "function" ? u(m) : u;
          return h.replace && Rf(b) ? b : { ...m, ...b };
        }
        return m;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((f) => ({ ...f })),
      getNode: (f) => i(f)?.internals.userNode,
      getInternalNode: i,
      getEdges: () => {
        const { edges: f = [] } = t.getState();
        return f.map((u) => ({ ...u }));
      },
      getEdge: (f) => t.getState().edgeLookup.get(f),
      setNodes: s,
      setEdges: a,
      addNodes: (f) => {
        const u = Array.isArray(f) ? f : [f];
        n.nodeQueue.push((h) => [...h, ...u]);
      },
      addEdges: (f) => {
        const u = Array.isArray(f) ? f : [f];
        n.edgeQueue.push((h) => [...h, ...u]);
      },
      toObject: () => {
        const { nodes: f = [], edges: u = [], transform: h } = t.getState(), [y, m, b] = h;
        return {
          nodes: f.map((w) => ({ ...w })),
          edges: u.map((w) => ({ ...w })),
          viewport: {
            x: y,
            y: m,
            zoom: b
          }
        };
      },
      deleteElements: async ({ nodes: f = [], edges: u = [] }) => {
        const { nodes: h, edges: y, onNodesDelete: m, onEdgesDelete: b, triggerNodeChanges: w, triggerEdgeChanges: N, onDelete: g, onBeforeDelete: x } = t.getState(), { nodes: E, edges: _ } = await hd({
          nodesToRemove: f,
          edgesToRemove: u,
          nodes: h,
          edges: y,
          onBeforeDelete: x
        }), k = _.length > 0, I = E.length > 0;
        if (k) {
          const T = _.map(Qo);
          b?.(_), N(T);
        }
        if (I) {
          const T = E.map(Qo);
          m?.(E), w(T);
        }
        return (I || k) && g?.({ nodes: E, edges: _ }), { deletedNodes: E, deletedEdges: _ };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (f, u = !0, h) => {
        const y = ko(f), m = y ? f : c(f), b = h !== void 0;
        return m ? (h || t.getState().nodes).filter((w) => {
          const N = t.getState().nodeLookup.get(w.id);
          if (N && !y && (w.id === f.id || !N.internals.positionAbsolute))
            return !1;
          const g = Ge(b ? w : N), x = dt(g, m);
          return u && x > 0 || x >= g.width * g.height || x >= m.width * m.height;
        }) : [];
      },
      isNodeIntersecting: (f, u, h = !0) => {
        const m = ko(f) ? f : c(f);
        if (!m)
          return !1;
        const b = dt(m, u);
        return h && b > 0 || b >= u.width * u.height || b >= m.width * m.height;
      },
      updateNode: l,
      updateNodeData: (f, u, h = { replace: !1 }) => {
        l(f, (y) => {
          const m = typeof u == "function" ? u(y) : u;
          return h.replace ? { ...y, data: m } : { ...y, data: { ...y.data, ...m } };
        }, h);
      },
      updateEdge: d,
      updateEdgeData: (f, u, h = { replace: !1 }) => {
        d(f, (y) => {
          const m = typeof u == "function" ? u(y) : u;
          return h.replace ? { ...y, data: m } : { ...y, data: { ...y.data, ...m } };
        }, h);
      },
      getNodesBounds: (f) => {
        const { nodeLookup: u, nodeOrigin: h } = t.getState();
        return ld(f, { nodeLookup: u, nodeOrigin: h });
      },
      getHandleConnections: ({ type: f, id: u, nodeId: h }) => Array.from(t.getState().connectionLookup.get(`${h}-${f}${u ? `-${u}` : ""}`)?.values() ?? []),
      getNodeConnections: ({ type: f, handleId: u, nodeId: h }) => Array.from(t.getState().connectionLookup.get(`${h}${f ? u ? `-${f}-${u}` : `-${f}` : ""}`)?.values() ?? []),
      fitView: async (f) => {
        const u = t.getState().fitViewResolver ?? yd();
        return t.setState({ fitViewQueued: !0, fitViewOptions: f, fitViewResolver: u }), n.nodeQueue.push((h) => [...h]), u.promise;
      }
    };
  }, []);
  return fe(() => ({
    ...r,
    ...e,
    viewportInitialized: o
  }), [o]);
}
const tr = (e) => e.selected, Zf = typeof window < "u" ? window : void 0;
function Gf({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = oe(), { deleteElements: o } = Jn(), r = gt(e, { actInsideInputWithModifier: !1 }), i = gt(t, { target: Zf });
  te(() => {
    if (r) {
      const { edges: s, nodes: a } = n.getState();
      o({ nodes: a.filter(tr), edges: s.filter(tr) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [r]), te(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function qf(e) {
  const t = oe();
  te(() => {
    const n = () => {
      if (!e.current || !(e.current.checkVisibility?.() ?? !0))
        return !1;
      const o = Gn(e.current);
      (o.height === 0 || o.width === 0) && t.getState().onError?.("004", xe.error004()), t.setState({ width: o.width || 500, height: o.height || 500 });
    };
    if (e.current) {
      n(), window.addEventListener("resize", n);
      const o = new ResizeObserver(() => n());
      return o.observe(e.current), () => {
        window.removeEventListener("resize", n), o && e.current && o.unobserve(e.current);
      };
    }
  }, []);
}
const sn = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, Uf = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function Kf({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: o = !1, panOnScrollSpeed: r = 0.5, panOnScrollMode: i = Pe.Free, zoomOnDoubleClick: s = !0, panOnDrag: a = !0, defaultViewport: c, translateExtent: l, minZoom: d, maxZoom: f, zoomActivationKeyCode: u, preventScrolling: h = !0, children: y, noWheelClassName: m, noPanClassName: b, onViewportChange: w, isControlledViewport: N, paneClickDistance: g }) {
  const x = oe(), E = ee(null), { userSelectionActive: _, lib: k, connectionInProgress: I } = K(Uf, re), T = gt(u), B = ee();
  qf(E);
  const L = he((A) => {
    w?.({ x: A[0], y: A[1], zoom: A[2] }), N || x.setState({ transform: A });
  }, [w, N]);
  return te(() => {
    if (E.current) {
      B.current = ef({
        domNode: E.current,
        minZoom: d,
        maxZoom: f,
        translateExtent: l,
        viewport: c,
        paneClickDistance: g,
        onDraggingChange: (M) => x.setState({ paneDragging: M }),
        onPanZoomStart: (M, S) => {
          const { onViewportChangeStart: C, onMoveStart: D } = x.getState();
          D?.(M, S), C?.(S);
        },
        onPanZoom: (M, S) => {
          const { onViewportChange: C, onMove: D } = x.getState();
          D?.(M, S), C?.(S);
        },
        onPanZoomEnd: (M, S) => {
          const { onViewportChangeEnd: C, onMoveEnd: D } = x.getState();
          D?.(M, S), C?.(S);
        }
      });
      const { x: A, y: z, zoom: v } = B.current.getViewport();
      return x.setState({
        panZoom: B.current,
        transform: [A, z, v],
        domNode: E.current.closest(".react-flow")
      }), () => {
        B.current?.destroy();
      };
    }
  }, []), te(() => {
    B.current?.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: o,
      panOnScrollSpeed: r,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: a,
      zoomActivationKeyPressed: T,
      preventScrolling: h,
      noPanClassName: b,
      userSelectionActive: _,
      noWheelClassName: m,
      lib: k,
      onTransformChange: L,
      connectionInProgress: I
    });
  }, [
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    a,
    T,
    h,
    b,
    _,
    m,
    k,
    L,
    I
  ]), p.jsx("div", { className: "react-flow__renderer", ref: E, style: sn, children: y });
}
const Qf = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function Jf() {
  const { userSelectionActive: e, userSelectionRect: t } = K(Qf, re);
  return e && t ? p.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const xn = (e, t) => (n) => {
  n.target === t.current && e?.(n);
}, eh = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function th({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = ut.Full, panOnDrag: o, selectionOnDrag: r, onSelectionStart: i, onSelectionEnd: s, onPaneClick: a, onPaneContextMenu: c, onPaneScroll: l, onPaneMouseEnter: d, onPaneMouseMove: f, onPaneMouseLeave: u, children: h }) {
  const y = oe(), { userSelectionActive: m, elementsSelectable: b, dragging: w, connectionInProgress: N } = K(eh, re), g = b && (e || m), x = ee(null), E = ee(), _ = ee(/* @__PURE__ */ new Set()), k = ee(/* @__PURE__ */ new Set()), I = ee(!1), T = ee(!1), B = (C) => {
    if (I.current || N) {
      I.current = !1;
      return;
    }
    a?.(C), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, L = (C) => {
    if (Array.isArray(o) && o?.includes(2)) {
      C.preventDefault();
      return;
    }
    c?.(C);
  }, A = l ? (C) => l(C) : void 0, z = (C) => {
    const { resetSelectedElements: D, domNode: P } = y.getState();
    if (E.current = P?.getBoundingClientRect(), !b || !e || C.button !== 0 || C.target !== x.current || !E.current)
      return;
    C.target?.setPointerCapture?.(C.pointerId), T.current = !0, I.current = !1;
    const { x: j, y: $ } = me(C.nativeEvent, E.current);
    D(), y.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: j,
        startY: $,
        x: j,
        y: $
      }
    }), i?.(C);
  }, v = (C) => {
    const { userSelectionRect: D, transform: P, nodeLookup: j, edgeLookup: $, connectionLookup: H, triggerNodeChanges: V, triggerEdgeChanges: R, defaultEdgeOptions: W } = y.getState();
    if (!E.current || !D)
      return;
    I.current = !0;
    const { x: q, y: X } = me(C.nativeEvent, E.current), { startX: O, startY: Y } = D, J = {
      startX: O,
      startY: Y,
      x: q < O ? q : O,
      y: X < Y ? X : Y,
      width: Math.abs(q - O),
      height: Math.abs(X - Y)
    }, Q = _.current, Z = k.current;
    _.current = new Set(Wn(j, J, P, n === ut.Partial, !0).map((U) => U.id)), k.current = /* @__PURE__ */ new Set();
    const G = W?.selectable ?? !0;
    for (const U of _.current) {
      const ne = H.get(U);
      if (ne)
        for (const { edgeId: ae } of ne.values()) {
          const ce = $.get(ae);
          ce && (ce.selectable ?? G) && k.current.add(ae);
        }
    }
    if (!Io(Q, _.current)) {
      const U = Oe(j, _.current, !0);
      V(U);
    }
    if (!Io(Z, k.current)) {
      const U = Oe($, k.current);
      R(U);
    }
    y.setState({
      userSelectionRect: J,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, M = (C) => {
    if (C.button !== 0 || !T.current)
      return;
    C.target?.releasePointerCapture?.(C.pointerId);
    const { userSelectionRect: D } = y.getState();
    !m && D && C.target === x.current && B?.(C), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null,
      nodesSelectionActive: _.current.size > 0
    }), s?.(C), (t || r) && (I.current = !1), T.current = !1;
  }, S = o === !0 || Array.isArray(o) && o.includes(0);
  return p.jsxs("div", { className: ie(["react-flow__pane", { draggable: S, dragging: w, selection: e }]), onClick: g ? void 0 : xn(B, x), onContextMenu: xn(L, x), onWheel: xn(A, x), onPointerEnter: g ? void 0 : d, onPointerDown: g ? z : f, onPointerMove: g ? v : f, onPointerUp: g ? M : void 0, onPointerLeave: u, ref: x, style: sn, children: [h, p.jsx(Jf, {})] });
}
function jn({ id: e, store: t, unselect: n = !1, nodeRef: o }) {
  const { addSelectedNodes: r, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: a, onError: c } = t.getState(), l = a.get(e);
  if (!l) {
    c?.("012", xe.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), l.selected ? (n || l.selected && s) && (i({ nodes: [l], edges: [] }), requestAnimationFrame(() => o?.current?.blur())) : r([e]);
}
function Hi({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: o, nodeId: r, isSelectable: i, nodeClickDistance: s }) {
  const a = oe(), [c, l] = le(!1), d = ee();
  return te(() => {
    d.current = Od({
      getStoreItems: () => a.getState(),
      onNodeMouseDown: (f) => {
        jn({
          id: f,
          store: a,
          nodeRef: e
        });
      },
      onDragStart: () => {
        l(!0);
      },
      onDragStop: () => {
        l(!1);
      }
    });
  }, []), te(() => {
    if (t)
      d.current?.destroy();
    else if (e.current)
      return d.current?.update({
        noDragClassName: n,
        handleSelector: o,
        domNode: e.current,
        isSelectable: i,
        nodeId: r,
        nodeClickDistance: s
      }), () => {
        d.current?.destroy();
      };
  }, [n, o, t, i, e, r]), c;
}
const nh = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function Li() {
  const e = oe();
  return he((n) => {
    const { nodeExtent: o, snapToGrid: r, snapGrid: i, nodesDraggable: s, onError: a, updateNodePositions: c, nodeLookup: l, nodeOrigin: d } = e.getState(), f = /* @__PURE__ */ new Map(), u = nh(s), h = r ? i[0] : 5, y = r ? i[1] : 5, m = n.direction.x * h * n.factor, b = n.direction.y * y * n.factor;
    for (const [, w] of l) {
      if (!u(w))
        continue;
      let N = {
        x: w.internals.positionAbsolute.x + m,
        y: w.internals.positionAbsolute.y + b
      };
      r && (N = bt(N, i));
      const { position: g, positionAbsolute: x } = si({
        nodeId: w.id,
        nextPosition: N,
        nodeLookup: l,
        nodeExtent: o,
        nodeOrigin: d,
        onError: a
      });
      w.position = g, w.internals.positionAbsolute = x, f.set(w.id, w);
    }
    c(f);
  }, []);
}
const eo = Hn(null), oh = eo.Provider;
eo.Consumer;
const Oi = () => yt(eo), rh = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), ih = (e, t, n) => (o) => {
  const { connectionClickStartHandle: r, connectionMode: i, connection: s } = o, { fromHandle: a, toHandle: c, isValid: l } = s, d = c?.nodeId === e && c?.id === t && c?.type === n;
  return {
    connectingFrom: a?.nodeId === e && a?.id === t && a?.type === n,
    connectingTo: d,
    clickConnecting: r?.nodeId === e && r?.id === t && r?.type === n,
    isPossibleEndHandle: i === We.Strict ? a?.type !== n : e !== a?.nodeId || t !== a?.id,
    connectionInProcess: !!a,
    clickConnectionInProcess: !!r,
    valid: d && l
  };
};
function sh({ type: e = "source", position: t = F.Top, isValidConnection: n, isConnectable: o = !0, isConnectableStart: r = !0, isConnectableEnd: i = !0, id: s, onConnect: a, children: c, className: l, onMouseDown: d, onTouchStart: f, ...u }, h) {
  const y = s || null, m = e === "target", b = oe(), w = Oi(), { connectOnClick: N, noPanClassName: g, rfId: x } = K(rh, re), { connectingFrom: E, connectingTo: _, clickConnecting: k, isPossibleEndHandle: I, connectionInProcess: T, clickConnectionInProcess: B, valid: L } = K(ih(w, y, e), re);
  w || b.getState().onError?.("010", xe.error010());
  const A = (M) => {
    const { defaultEdgeOptions: S, onConnect: C, hasDefaultEdges: D } = b.getState(), P = {
      ...S,
      ...M
    };
    if (D) {
      const { edges: j, setEdges: $ } = b.getState();
      $(Sd(P, j));
    }
    C?.(P), a?.(P);
  }, z = (M) => {
    if (!w)
      return;
    const S = gi(M.nativeEvent);
    if (r && (S && M.button === 0 || !S)) {
      const C = b.getState();
      Tn.onPointerDown(M.nativeEvent, {
        handleDomNode: M.currentTarget,
        autoPanOnConnect: C.autoPanOnConnect,
        connectionMode: C.connectionMode,
        connectionRadius: C.connectionRadius,
        domNode: C.domNode,
        nodeLookup: C.nodeLookup,
        lib: C.lib,
        isTarget: m,
        handleId: y,
        nodeId: w,
        flowId: C.rfId,
        panBy: C.panBy,
        cancelConnection: C.cancelConnection,
        onConnectStart: C.onConnectStart,
        onConnectEnd: C.onConnectEnd,
        updateConnection: C.updateConnection,
        onConnect: A,
        isValidConnection: n || C.isValidConnection,
        getTransform: () => b.getState().transform,
        getFromHandle: () => b.getState().connection.fromHandle,
        autoPanSpeed: C.autoPanSpeed,
        dragThreshold: C.connectionDragThreshold
      });
    }
    S ? d?.(M) : f?.(M);
  }, v = (M) => {
    const { onClickConnectStart: S, onClickConnectEnd: C, connectionClickStartHandle: D, connectionMode: P, isValidConnection: j, lib: $, rfId: H, nodeLookup: V, connection: R } = b.getState();
    if (!w || !D && !r)
      return;
    if (!D) {
      S?.(M.nativeEvent, { nodeId: w, handleId: y, handleType: e }), b.setState({ connectionClickStartHandle: { nodeId: w, type: e, id: y } });
      return;
    }
    const W = fi(M.target), q = n || j, { connection: X, isValid: O } = Tn.isValid(M.nativeEvent, {
      handle: {
        nodeId: w,
        id: y,
        type: e
      },
      connectionMode: P,
      fromNodeId: D.nodeId,
      fromHandleId: D.id || null,
      fromType: D.type,
      isValidConnection: q,
      flowId: H,
      doc: W,
      lib: $,
      nodeLookup: V
    });
    O && X && A(X);
    const Y = structuredClone(R);
    delete Y.inProgress, Y.toPosition = Y.toHandle ? Y.toHandle.position : null, C?.(M, Y), b.setState({ connectionClickStartHandle: null });
  };
  return p.jsx("div", { "data-handleid": y, "data-nodeid": w, "data-handlepos": t, "data-id": `${x}-${w}-${y}-${e}`, className: ie([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    g,
    l,
    {
      source: !m,
      target: m,
      connectable: o,
      connectablestart: r,
      connectableend: i,
      clickconnecting: k,
      connectingfrom: E,
      connectingto: _,
      valid: L,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!T || I) && (T || B ? i : r)
    }
  ]), onMouseDown: z, onTouchStart: z, onClick: N ? v : void 0, ref: h, ...u, children: c });
}
const pt = se(zi(sh));
function ah({ data: e, isConnectable: t, sourcePosition: n = F.Bottom }) {
  return p.jsxs(p.Fragment, { children: [e?.label, p.jsx(pt, { type: "source", position: n, isConnectable: t })] });
}
function ch({ data: e, isConnectable: t, targetPosition: n = F.Top, sourcePosition: o = F.Bottom }) {
  return p.jsxs(p.Fragment, { children: [p.jsx(pt, { type: "target", position: n, isConnectable: t }), e?.label, p.jsx(pt, { type: "source", position: o, isConnectable: t })] });
}
function lh() {
  return null;
}
function uh({ data: e, isConnectable: t, targetPosition: n = F.Top }) {
  return p.jsxs(p.Fragment, { children: [p.jsx(pt, { type: "target", position: n, isConnectable: t }), e?.label] });
}
const Gt = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, nr = {
  input: ah,
  default: ch,
  output: uh,
  group: lh
};
function dh(e) {
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? e.style?.width,
    height: e.height ?? e.initialHeight ?? e.style?.height
  } : {
    width: e.width ?? e.style?.width,
    height: e.height ?? e.style?.height
  };
}
const fh = (e) => {
  const { width: t, height: n, x: o, y: r } = vt(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: pe(t) ? t : null,
    height: pe(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`
  };
};
function hh({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const o = oe(), { width: r, height: i, transformString: s, userSelectionActive: a } = K(fh, re), c = Li(), l = ee(null);
  if (te(() => {
    n || l.current?.focus({
      preventScroll: !0
    });
  }, [n]), Hi({
    nodeRef: l
  }), a || !r || !i)
    return null;
  const d = e ? (u) => {
    const h = o.getState().nodes.filter((y) => y.selected);
    e(u, h);
  } : void 0, f = (u) => {
    Object.prototype.hasOwnProperty.call(Gt, u.key) && (u.preventDefault(), c({
      direction: Gt[u.key],
      factor: u.shiftKey ? 4 : 1
    }));
  };
  return p.jsx("div", { className: ie(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: p.jsx("div", { ref: l, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : f, style: {
    width: r,
    height: i
  } }) });
}
const or = typeof window < "u" ? window : void 0, gh = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function Bi({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: r, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: a, deleteKeyCode: c, selectionKeyCode: l, selectionOnDrag: d, selectionMode: f, onSelectionStart: u, onSelectionEnd: h, multiSelectionKeyCode: y, panActivationKeyCode: m, zoomActivationKeyCode: b, elementsSelectable: w, zoomOnScroll: N, zoomOnPinch: g, panOnScroll: x, panOnScrollSpeed: E, panOnScrollMode: _, zoomOnDoubleClick: k, panOnDrag: I, defaultViewport: T, translateExtent: B, minZoom: L, maxZoom: A, preventScrolling: z, onSelectionContextMenu: v, noWheelClassName: M, noPanClassName: S, disableKeyboardA11y: C, onViewportChange: D, isControlledViewport: P }) {
  const { nodesSelectionActive: j, userSelectionActive: $ } = K(gh), H = gt(l, { target: or }), V = gt(m, { target: or }), R = V || I, W = V || x, q = d && R !== !0, X = H || $ || q;
  return Gf({ deleteKeyCode: c, multiSelectionKeyCode: y }), p.jsx(Kf, { onPaneContextMenu: i, elementsSelectable: w, zoomOnScroll: N, zoomOnPinch: g, panOnScroll: W, panOnScrollSpeed: E, panOnScrollMode: _, zoomOnDoubleClick: k, panOnDrag: !H && R, defaultViewport: T, translateExtent: B, minZoom: L, maxZoom: A, zoomActivationKeyCode: b, preventScrolling: z, noWheelClassName: M, noPanClassName: S, onViewportChange: D, isControlledViewport: P, paneClickDistance: a, children: p.jsxs(th, { onSelectionStart: u, onSelectionEnd: h, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: r, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: R, isSelecting: !!X, selectionMode: f, selectionKeyPressed: H, selectionOnDrag: q, children: [e, j && p.jsx(hh, { onSelectionContextMenu: v, noPanClassName: S, disableKeyboardA11y: C })] }) });
}
Bi.displayName = "FlowRenderer";
const ph = se(Bi), mh = (e) => (t) => e ? Wn(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function yh(e) {
  return K(he(mh(e), [e]), re);
}
const xh = (e) => e.updateNodeInternals;
function wh() {
  const e = K(xh), [t] = le(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const o = /* @__PURE__ */ new Map();
    n.forEach((r) => {
      const i = r.target.getAttribute("data-id");
      o.set(i, {
        id: i,
        nodeElement: r.target,
        force: !0
      });
    }), e(o);
  }));
  return te(() => () => {
    t?.disconnect();
  }, [t]), t;
}
function vh({ node: e, nodeType: t, hasDimensions: n, resizeObserver: o }) {
  const r = oe(), i = ee(null), s = ee(null), a = ee(e.sourcePosition), c = ee(e.targetPosition), l = ee(t), d = n && !!e.internals.handleBounds;
  return te(() => {
    i.current && !e.hidden && (!d || s.current !== i.current) && (s.current && o?.unobserve(s.current), o?.observe(i.current), s.current = i.current);
  }, [d, e.hidden]), te(() => () => {
    s.current && (o?.unobserve(s.current), s.current = null);
  }, []), te(() => {
    if (i.current) {
      const f = l.current !== t, u = a.current !== e.sourcePosition, h = c.current !== e.targetPosition;
      (f || u || h) && (l.current = t, a.current = e.sourcePosition, c.current = e.targetPosition, r.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function bh({ id: e, onClick: t, onMouseEnter: n, onMouseMove: o, onMouseLeave: r, onContextMenu: i, onDoubleClick: s, nodesDraggable: a, elementsSelectable: c, nodesConnectable: l, nodesFocusable: d, resizeObserver: f, noDragClassName: u, noPanClassName: h, disableKeyboardA11y: y, rfId: m, nodeTypes: b, nodeClickDistance: w, onError: N }) {
  const { node: g, internals: x, isParent: E } = K((O) => {
    const Y = O.nodeLookup.get(e), J = O.parentLookup.has(e);
    return {
      node: Y,
      internals: Y.internals,
      isParent: J
    };
  }, re);
  let _ = g.type || "default", k = b?.[_] || nr[_];
  k === void 0 && (N?.("003", xe.error003(_)), _ = "default", k = b?.default || nr.default);
  const I = !!(g.draggable || a && typeof g.draggable > "u"), T = !!(g.selectable || c && typeof g.selectable > "u"), B = !!(g.connectable || l && typeof g.connectable > "u"), L = !!(g.focusable || d && typeof g.focusable > "u"), A = oe(), z = ui(g), v = vh({ node: g, nodeType: _, hasDimensions: z, resizeObserver: f }), M = Hi({
    nodeRef: v,
    disabled: g.hidden || !I,
    noDragClassName: u,
    handleSelector: g.dragHandle,
    nodeId: e,
    isSelectable: T,
    nodeClickDistance: w
  }), S = Li();
  if (g.hidden)
    return null;
  const C = Ee(g), D = dh(g), P = T || I || t || n || o || r, j = n ? (O) => n(O, { ...x.userNode }) : void 0, $ = o ? (O) => o(O, { ...x.userNode }) : void 0, H = r ? (O) => r(O, { ...x.userNode }) : void 0, V = i ? (O) => i(O, { ...x.userNode }) : void 0, R = s ? (O) => s(O, { ...x.userNode }) : void 0, W = (O) => {
    const { selectNodesOnDrag: Y, nodeDragThreshold: J } = A.getState();
    T && (!Y || !I || J > 0) && jn({
      id: e,
      store: A,
      nodeRef: v
    }), t && t(O, { ...x.userNode });
  }, q = (O) => {
    if (!(hi(O.nativeEvent) || y)) {
      if (ti.includes(O.key) && T) {
        const Y = O.key === "Escape";
        jn({
          id: e,
          store: A,
          unselect: Y,
          nodeRef: v
        });
      } else if (I && g.selected && Object.prototype.hasOwnProperty.call(Gt, O.key)) {
        O.preventDefault();
        const { ariaLabelConfig: Y } = A.getState();
        A.setState({
          ariaLiveMessage: Y["node.a11yDescription.ariaLiveMessage"]({
            direction: O.key.replace("Arrow", "").toLowerCase(),
            x: ~~x.positionAbsolute.x,
            y: ~~x.positionAbsolute.y
          })
        }), S({
          direction: Gt[O.key],
          factor: O.shiftKey ? 4 : 1
        });
      }
    }
  }, X = () => {
    if (y || !v.current?.matches(":focus-visible"))
      return;
    const { transform: O, width: Y, height: J, autoPanOnNodeFocus: Q, setCenter: Z } = A.getState();
    if (!Q)
      return;
    Wn(/* @__PURE__ */ new Map([[e, g]]), { x: 0, y: 0, width: Y, height: J }, O, !0).length > 0 || Z(g.position.x + C.width / 2, g.position.y + C.height / 2, {
      zoom: O[2]
    });
  };
  return p.jsx("div", { className: ie([
    "react-flow__node",
    `react-flow__node-${_}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [h]: I
    },
    g.className,
    {
      selected: g.selected,
      selectable: T,
      parent: E,
      draggable: I,
      dragging: M
    }
  ]), ref: v, style: {
    zIndex: x.z,
    transform: `translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,
    pointerEvents: P ? "all" : "none",
    visibility: z ? "visible" : "hidden",
    ...g.style,
    ...D
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: j, onMouseMove: $, onMouseLeave: H, onContextMenu: V, onClick: W, onDoubleClick: R, onKeyDown: L ? q : void 0, tabIndex: L ? 0 : void 0, onFocus: L ? X : void 0, role: g.ariaRole ?? (L ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": y ? void 0 : `${Pi}-${m}`, "aria-label": g.ariaLabel, ...g.domAttributes, children: p.jsx(oh, { value: e, children: p.jsx(k, { id: e, data: g.data, type: _, positionAbsoluteX: x.positionAbsolute.x, positionAbsoluteY: x.positionAbsolute.y, selected: g.selected ?? !1, selectable: T, draggable: I, deletable: g.deletable ?? !0, isConnectable: B, sourcePosition: g.sourcePosition, targetPosition: g.targetPosition, dragging: M, dragHandle: g.dragHandle, zIndex: x.z, parentId: g.parentId, ...C }) }) });
}
const _h = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function Ri(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: r, onError: i } = K(_h, re), s = yh(e.onlyRenderVisibleElements), a = wh();
  return p.jsx("div", { className: "react-flow__nodes", style: sn, children: s.map((c) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    p.jsx(bh, { id: c, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: a, nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: r, nodeClickDistance: e.nodeClickDistance, onError: i }, c)
  )) });
}
Ri.displayName = "NodeRenderer";
const Eh = se(Ri);
function Sh(e) {
  return K(he((n) => {
    if (!e)
      return n.edges.map((r) => r.id);
    const o = [];
    if (n.width && n.height)
      for (const r of n.edges) {
        const i = n.nodeLookup.get(r.source), s = n.nodeLookup.get(r.target);
        i && s && bd({
          sourceNode: i,
          targetNode: s,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && o.push(r.id);
      }
    return o;
  }, [e]), re);
}
const Nh = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return p.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, Ch = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return p.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, rr = {
  [Xt.Arrow]: Nh,
  [Xt.ArrowClosed]: Ch
};
function Mh(e) {
  const t = oe();
  return fe(() => Object.prototype.hasOwnProperty.call(rr, e) ? rr[e] : (t.getState().onError?.("009", xe.error009(e)), null), [e]);
}
const kh = ({ id: e, type: t, color: n, width: o = 12.5, height: r = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: a = "auto-start-reverse" }) => {
  const c = Mh(t);
  return c ? p.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${r}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: a, refX: "0", refY: "0", children: p.jsx(c, { color: n, strokeWidth: s }) }) : null;
}, Vi = ({ defaultColor: e, rfId: t }) => {
  const n = K((i) => i.edges), o = K((i) => i.defaultEdgeOptions), r = fe(() => Id(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o?.markerStart,
    defaultMarkerEnd: o?.markerEnd
  }), [n, o, t, e]);
  return r.length ? p.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: p.jsx("defs", { children: r.map((i) => p.jsx(kh, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
Vi.displayName = "MarkerDefinitions";
var Ih = se(Vi);
function Fi({ x: e, y: t, label: n, labelStyle: o, labelShowBg: r = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: a = 2, children: c, className: l, ...d }) {
  const [f, u] = le({ x: 1, y: 0, width: 0, height: 0 }), h = ie(["react-flow__edge-textwrapper", l]), y = ee(null);
  return te(() => {
    if (y.current) {
      const m = y.current.getBBox();
      u({
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height
      });
    }
  }, [n]), n ? p.jsxs("g", { transform: `translate(${e - f.width / 2} ${t - f.height / 2})`, className: h, visibility: f.width ? "visible" : "hidden", ...d, children: [r && p.jsx("rect", { width: f.width + 2 * s[0], x: -s[0], y: -s[1], height: f.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: a, ry: a }), p.jsx("text", { className: "react-flow__edge-text", y: f.height / 2, dy: "0.3em", ref: y, style: o, children: n }), c] }) : null;
}
Fi.displayName = "EdgeText";
const Ah = se(Fi);
function Ke({ path: e, labelX: t, labelY: n, label: o, labelStyle: r, labelShowBg: i, labelBgStyle: s, labelBgPadding: a, labelBgBorderRadius: c, interactionWidth: l = 20, ...d }) {
  return p.jsxs(p.Fragment, { children: [p.jsx("path", { ...d, d: e, fill: "none", className: ie(["react-flow__edge-path", d.className]) }), l ? p.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: l, className: "react-flow__edge-interaction" }) : null, o && pe(t) && pe(n) ? p.jsx(Ah, { x: t, y: n, label: o, labelStyle: r, labelShowBg: i, labelBgStyle: s, labelBgPadding: a, labelBgBorderRadius: c }) : null] });
}
function ir({ pos: e, x1: t, y1: n, x2: o, y2: r }) {
  return e === F.Left || e === F.Right ? [0.5 * (t + o), n] : [t, 0.5 * (n + r)];
}
function Xi({ sourceX: e, sourceY: t, sourcePosition: n = F.Bottom, targetX: o, targetY: r, targetPosition: i = F.Top }) {
  const [s, a] = ir({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: r
  }), [c, l] = ir({
    pos: i,
    x1: o,
    y1: r,
    x2: e,
    y2: t
  }), [d, f, u, h] = pi({
    sourceX: e,
    sourceY: t,
    targetX: o,
    targetY: r,
    sourceControlX: s,
    sourceControlY: a,
    targetControlX: c,
    targetControlY: l
  });
  return [
    `M${e},${t} C${s},${a} ${c},${l} ${o},${r}`,
    d,
    f,
    u,
    h
  ];
}
function Yi(e) {
  return se(({ id: t, sourceX: n, sourceY: o, targetX: r, targetY: i, sourcePosition: s, targetPosition: a, label: c, labelStyle: l, labelShowBg: d, labelBgStyle: f, labelBgPadding: u, labelBgBorderRadius: h, style: y, markerEnd: m, markerStart: b, interactionWidth: w }) => {
    const [N, g, x] = Xi({
      sourceX: n,
      sourceY: o,
      sourcePosition: s,
      targetX: r,
      targetY: i,
      targetPosition: a
    }), E = e.isInternal ? void 0 : t;
    return p.jsx(Ke, { id: E, path: N, labelX: g, labelY: x, label: c, labelStyle: l, labelShowBg: d, labelBgStyle: f, labelBgPadding: u, labelBgBorderRadius: h, style: y, markerEnd: m, markerStart: b, interactionWidth: w });
  });
}
const Ph = Yi({ isInternal: !1 }), Wi = Yi({ isInternal: !0 });
Ph.displayName = "SimpleBezierEdge";
Wi.displayName = "SimpleBezierEdgeInternal";
function Zi(e) {
  return se(({ id: t, sourceX: n, sourceY: o, targetX: r, targetY: i, label: s, labelStyle: a, labelShowBg: c, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: f, style: u, sourcePosition: h = F.Bottom, targetPosition: y = F.Top, markerEnd: m, markerStart: b, pathOptions: w, interactionWidth: N }) => {
    const [g, x, E] = Zt({
      sourceX: n,
      sourceY: o,
      sourcePosition: h,
      targetX: r,
      targetY: i,
      targetPosition: y,
      borderRadius: w?.borderRadius,
      offset: w?.offset,
      stepPosition: w?.stepPosition
    }), _ = e.isInternal ? void 0 : t;
    return p.jsx(Ke, { id: _, path: g, labelX: x, labelY: E, label: s, labelStyle: a, labelShowBg: c, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: f, style: u, markerEnd: m, markerStart: b, interactionWidth: N });
  });
}
const Gi = Zi({ isInternal: !1 }), qi = Zi({ isInternal: !0 });
Gi.displayName = "SmoothStepEdge";
qi.displayName = "SmoothStepEdgeInternal";
function Ui(e) {
  return se(({ id: t, ...n }) => {
    const o = e.isInternal ? void 0 : t;
    return p.jsx(Gi, { ...n, id: o, pathOptions: fe(() => ({ borderRadius: 0, offset: n.pathOptions?.offset }), [n.pathOptions?.offset]) });
  });
}
const Dh = Ui({ isInternal: !1 }), Ki = Ui({ isInternal: !0 });
Dh.displayName = "StepEdge";
Ki.displayName = "StepEdgeInternal";
function Qi(e) {
  return se(({ id: t, sourceX: n, sourceY: o, targetX: r, targetY: i, label: s, labelStyle: a, labelShowBg: c, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: f, style: u, markerEnd: h, markerStart: y, interactionWidth: m }) => {
    const [b, w, N] = xi({ sourceX: n, sourceY: o, targetX: r, targetY: i }), g = e.isInternal ? void 0 : t;
    return p.jsx(Ke, { id: g, path: b, labelX: w, labelY: N, label: s, labelStyle: a, labelShowBg: c, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: f, style: u, markerEnd: h, markerStart: y, interactionWidth: m });
  });
}
const Th = Qi({ isInternal: !1 }), Ji = Qi({ isInternal: !0 });
Th.displayName = "StraightEdge";
Ji.displayName = "StraightEdgeInternal";
function es(e) {
  return se(({ id: t, sourceX: n, sourceY: o, targetX: r, targetY: i, sourcePosition: s = F.Bottom, targetPosition: a = F.Top, label: c, labelStyle: l, labelShowBg: d, labelBgStyle: f, labelBgPadding: u, labelBgBorderRadius: h, style: y, markerEnd: m, markerStart: b, pathOptions: w, interactionWidth: N }) => {
    const [g, x, E] = mi({
      sourceX: n,
      sourceY: o,
      sourcePosition: s,
      targetX: r,
      targetY: i,
      targetPosition: a,
      curvature: w?.curvature
    }), _ = e.isInternal ? void 0 : t;
    return p.jsx(Ke, { id: _, path: g, labelX: x, labelY: E, label: c, labelStyle: l, labelShowBg: d, labelBgStyle: f, labelBgPadding: u, labelBgBorderRadius: h, style: y, markerEnd: m, markerStart: b, interactionWidth: N });
  });
}
const jh = es({ isInternal: !1 }), ts = es({ isInternal: !0 });
jh.displayName = "BezierEdge";
ts.displayName = "BezierEdgeInternal";
const sr = {
  default: ts,
  straight: Ji,
  step: Ki,
  smoothstep: qi,
  simplebezier: Wi
}, ar = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, zh = (e, t, n) => n === F.Left ? e - t : n === F.Right ? e + t : e, $h = (e, t, n) => n === F.Top ? e - t : n === F.Bottom ? e + t : e, cr = "react-flow__edgeupdater";
function lr({ position: e, centerX: t, centerY: n, radius: o = 10, onMouseDown: r, onMouseEnter: i, onMouseOut: s, type: a }) {
  return p.jsx("circle", { onMouseDown: r, onMouseEnter: i, onMouseOut: s, className: ie([cr, `${cr}-${a}`]), cx: zh(t, o, e), cy: $h(n, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function Hh({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: o, sourceY: r, targetX: i, targetY: s, sourcePosition: a, targetPosition: c, onReconnect: l, onReconnectStart: d, onReconnectEnd: f, setReconnecting: u, setUpdateHover: h }) {
  const y = oe(), m = (x, E) => {
    if (x.button !== 0)
      return;
    const { autoPanOnConnect: _, domNode: k, isValidConnection: I, connectionMode: T, connectionRadius: B, lib: L, onConnectStart: A, onConnectEnd: z, cancelConnection: v, nodeLookup: M, rfId: S, panBy: C, updateConnection: D } = y.getState(), P = E.type === "target", j = (V, R) => {
      u(!1), f?.(V, n, E.type, R);
    }, $ = (V) => l?.(n, V), H = (V, R) => {
      u(!0), d?.(x, n, E.type), A?.(V, R);
    };
    Tn.onPointerDown(x.nativeEvent, {
      autoPanOnConnect: _,
      connectionMode: T,
      connectionRadius: B,
      domNode: k,
      handleId: E.id,
      nodeId: E.nodeId,
      nodeLookup: M,
      isTarget: P,
      edgeUpdaterType: E.type,
      lib: L,
      flowId: S,
      cancelConnection: v,
      panBy: C,
      isValidConnection: I,
      onConnect: $,
      onConnectStart: H,
      onConnectEnd: z,
      onReconnectEnd: j,
      updateConnection: D,
      getTransform: () => y.getState().transform,
      getFromHandle: () => y.getState().connection.fromHandle,
      dragThreshold: y.getState().connectionDragThreshold,
      handleDomNode: x.currentTarget
    });
  }, b = (x) => m(x, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), w = (x) => m(x, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), N = () => h(!0), g = () => h(!1);
  return p.jsxs(p.Fragment, { children: [(e === !0 || e === "source") && p.jsx(lr, { position: a, centerX: o, centerY: r, radius: t, onMouseDown: b, onMouseEnter: N, onMouseOut: g, type: "source" }), (e === !0 || e === "target") && p.jsx(lr, { position: c, centerX: i, centerY: s, radius: t, onMouseDown: w, onMouseEnter: N, onMouseOut: g, type: "target" })] });
}
function Lh({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: o, onClick: r, onDoubleClick: i, onContextMenu: s, onMouseEnter: a, onMouseMove: c, onMouseLeave: l, reconnectRadius: d, onReconnect: f, onReconnectStart: u, onReconnectEnd: h, rfId: y, edgeTypes: m, noPanClassName: b, onError: w, disableKeyboardA11y: N }) {
  let g = K((Z) => Z.edgeLookup.get(e));
  const x = K((Z) => Z.defaultEdgeOptions);
  g = x ? { ...x, ...g } : g;
  let E = g.type || "default", _ = m?.[E] || sr[E];
  _ === void 0 && (w?.("011", xe.error011(E)), E = "default", _ = m?.default || sr.default);
  const k = !!(g.focusable || t && typeof g.focusable > "u"), I = typeof f < "u" && (g.reconnectable || n && typeof g.reconnectable > "u"), T = !!(g.selectable || o && typeof g.selectable > "u"), B = ee(null), [L, A] = le(!1), [z, v] = le(!1), M = oe(), { zIndex: S, sourceX: C, sourceY: D, targetX: P, targetY: j, sourcePosition: $, targetPosition: H } = K(he((Z) => {
    const G = Z.nodeLookup.get(g.source), U = Z.nodeLookup.get(g.target);
    if (!G || !U)
      return {
        zIndex: g.zIndex,
        ...ar
      };
    const ne = kd({
      id: e,
      sourceNode: G,
      targetNode: U,
      sourceHandle: g.sourceHandle || null,
      targetHandle: g.targetHandle || null,
      connectionMode: Z.connectionMode,
      onError: w
    });
    return {
      zIndex: vd({
        selected: g.selected,
        zIndex: g.zIndex,
        sourceNode: G,
        targetNode: U,
        elevateOnSelect: Z.elevateEdgesOnSelect
      }),
      ...ne || ar
    };
  }, [g.source, g.target, g.sourceHandle, g.targetHandle, g.selected, g.zIndex]), re), V = fe(() => g.markerStart ? `url('#${Pn(g.markerStart, y)}')` : void 0, [g.markerStart, y]), R = fe(() => g.markerEnd ? `url('#${Pn(g.markerEnd, y)}')` : void 0, [g.markerEnd, y]);
  if (g.hidden || C === null || D === null || P === null || j === null)
    return null;
  const W = (Z) => {
    const { addSelectedEdges: G, unselectNodesAndEdges: U, multiSelectionActive: ne } = M.getState();
    T && (M.setState({ nodesSelectionActive: !1 }), g.selected && ne ? (U({ nodes: [], edges: [g] }), B.current?.blur()) : G([e])), r && r(Z, g);
  }, q = i ? (Z) => {
    i(Z, { ...g });
  } : void 0, X = s ? (Z) => {
    s(Z, { ...g });
  } : void 0, O = a ? (Z) => {
    a(Z, { ...g });
  } : void 0, Y = c ? (Z) => {
    c(Z, { ...g });
  } : void 0, J = l ? (Z) => {
    l(Z, { ...g });
  } : void 0, Q = (Z) => {
    if (!N && ti.includes(Z.key) && T) {
      const { unselectNodesAndEdges: G, addSelectedEdges: U } = M.getState();
      Z.key === "Escape" ? (B.current?.blur(), G({ edges: [g] })) : U([e]);
    }
  };
  return p.jsx("svg", { style: { zIndex: S }, children: p.jsxs("g", { className: ie([
    "react-flow__edge",
    `react-flow__edge-${E}`,
    g.className,
    b,
    {
      selected: g.selected,
      animated: g.animated,
      inactive: !T && !r,
      updating: L,
      selectable: T
    }
  ]), onClick: W, onDoubleClick: q, onContextMenu: X, onMouseEnter: O, onMouseMove: Y, onMouseLeave: J, onKeyDown: k ? Q : void 0, tabIndex: k ? 0 : void 0, role: g.ariaRole ?? (k ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": g.ariaLabel === null ? void 0 : g.ariaLabel || `Edge from ${g.source} to ${g.target}`, "aria-describedby": k ? `${Di}-${y}` : void 0, ref: B, ...g.domAttributes, children: [!z && p.jsx(_, { id: e, source: g.source, target: g.target, type: g.type, selected: g.selected, animated: g.animated, selectable: T, deletable: g.deletable ?? !0, label: g.label, labelStyle: g.labelStyle, labelShowBg: g.labelShowBg, labelBgStyle: g.labelBgStyle, labelBgPadding: g.labelBgPadding, labelBgBorderRadius: g.labelBgBorderRadius, sourceX: C, sourceY: D, targetX: P, targetY: j, sourcePosition: $, targetPosition: H, data: g.data, style: g.style, sourceHandleId: g.sourceHandle, targetHandleId: g.targetHandle, markerStart: V, markerEnd: R, pathOptions: "pathOptions" in g ? g.pathOptions : void 0, interactionWidth: g.interactionWidth }), I && p.jsx(Hh, { edge: g, isReconnectable: I, reconnectRadius: d, onReconnect: f, onReconnectStart: u, onReconnectEnd: h, sourceX: C, sourceY: D, targetX: P, targetY: j, sourcePosition: $, targetPosition: H, setUpdateHover: A, setReconnecting: v })] }) });
}
const Oh = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function ns({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: o, noPanClassName: r, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: a, onEdgeMouseMove: c, onEdgeMouseLeave: l, onEdgeClick: d, reconnectRadius: f, onEdgeDoubleClick: u, onReconnectStart: h, onReconnectEnd: y, disableKeyboardA11y: m }) {
  const { edgesFocusable: b, edgesReconnectable: w, elementsSelectable: N, onError: g } = K(Oh, re), x = Sh(t);
  return p.jsxs("div", { className: "react-flow__edges", children: [p.jsx(Ih, { defaultColor: e, rfId: n }), x.map((E) => p.jsx(Lh, { id: E, edgesFocusable: b, edgesReconnectable: w, elementsSelectable: N, noPanClassName: r, onReconnect: i, onContextMenu: s, onMouseEnter: a, onMouseMove: c, onMouseLeave: l, onClick: d, reconnectRadius: f, onDoubleClick: u, onReconnectStart: h, onReconnectEnd: y, rfId: n, onError: g, edgeTypes: o, disableKeyboardA11y: m }, E))] });
}
ns.displayName = "EdgeRenderer";
const Bh = se(ns), Rh = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function Vh({ children: e }) {
  const t = K(Rh);
  return p.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function Fh(e) {
  const t = Jn(), n = ee(!1);
  te(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const Xh = (e) => e.panZoom?.syncViewport;
function Yh(e) {
  const t = K(Xh), n = oe();
  return te(() => {
    e && (t?.(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function Wh(e) {
  return e.connection.inProgress ? { ...e.connection, to: _t(e.connection.to, e.transform) } : { ...e.connection };
}
function Zh(e) {
  return Wh;
}
function Gh(e) {
  const t = Zh();
  return K(t, re);
}
const qh = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function Uh({ containerStyle: e, style: t, type: n, component: o }) {
  const { nodesConnectable: r, width: i, height: s, isValid: a, inProgress: c } = K(qh, re);
  return !(i && r && c) ? null : p.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: p.jsx("g", { className: ie(["react-flow__connection", ri(a)]), children: p.jsx(os, { style: t, type: n, CustomComponent: o, isValid: a }) }) });
}
const os = ({ style: e, type: t = Ce.Bezier, CustomComponent: n, isValid: o }) => {
  const { inProgress: r, from: i, fromNode: s, fromHandle: a, fromPosition: c, to: l, toNode: d, toHandle: f, toPosition: u } = Gh();
  if (!r)
    return;
  if (n)
    return p.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: a, fromX: i.x, fromY: i.y, toX: l.x, toY: l.y, fromPosition: c, toPosition: u, connectionStatus: ri(o), toNode: d, toHandle: f });
  let h = "";
  const y = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: c,
    targetX: l.x,
    targetY: l.y,
    targetPosition: u
  };
  switch (t) {
    case Ce.Bezier:
      [h] = mi(y);
      break;
    case Ce.SimpleBezier:
      [h] = Xi(y);
      break;
    case Ce.Step:
      [h] = Zt({
        ...y,
        borderRadius: 0
      });
      break;
    case Ce.SmoothStep:
      [h] = Zt(y);
      break;
    default:
      [h] = xi(y);
  }
  return p.jsx("path", { d: h, fill: "none", className: "react-flow__connection-path", style: e });
};
os.displayName = "ConnectionLine";
const Kh = {};
function ur(e = Kh) {
  ee(e), oe(), te(() => {
  }, [e]);
}
function Qh() {
  oe(), ee(!1), te(() => {
  }, []);
}
function rs({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: o, onEdgeClick: r, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: a, onNodeMouseMove: c, onNodeMouseLeave: l, onNodeContextMenu: d, onSelectionContextMenu: f, onSelectionStart: u, onSelectionEnd: h, connectionLineType: y, connectionLineStyle: m, connectionLineComponent: b, connectionLineContainerStyle: w, selectionKeyCode: N, selectionOnDrag: g, selectionMode: x, multiSelectionKeyCode: E, panActivationKeyCode: _, zoomActivationKeyCode: k, deleteKeyCode: I, onlyRenderVisibleElements: T, elementsSelectable: B, defaultViewport: L, translateExtent: A, minZoom: z, maxZoom: v, preventScrolling: M, defaultMarkerColor: S, zoomOnScroll: C, zoomOnPinch: D, panOnScroll: P, panOnScrollSpeed: j, panOnScrollMode: $, zoomOnDoubleClick: H, panOnDrag: V, onPaneClick: R, onPaneMouseEnter: W, onPaneMouseMove: q, onPaneMouseLeave: X, onPaneScroll: O, onPaneContextMenu: Y, paneClickDistance: J, nodeClickDistance: Q, onEdgeContextMenu: Z, onEdgeMouseEnter: G, onEdgeMouseMove: U, onEdgeMouseLeave: ne, reconnectRadius: ae, onReconnect: ce, onReconnectStart: ze, onReconnectEnd: Et, noDragClassName: St, noWheelClassName: Nt, noPanClassName: Qe, disableKeyboardA11y: Je, nodeExtent: an, rfId: Ct, viewport: $e, onViewportChange: et }) {
  return ur(e), ur(t), Qh(), Fh(n), Yh($e), p.jsx(ph, { onPaneClick: R, onPaneMouseEnter: W, onPaneMouseMove: q, onPaneMouseLeave: X, onPaneContextMenu: Y, onPaneScroll: O, paneClickDistance: J, deleteKeyCode: I, selectionKeyCode: N, selectionOnDrag: g, selectionMode: x, onSelectionStart: u, onSelectionEnd: h, multiSelectionKeyCode: E, panActivationKeyCode: _, zoomActivationKeyCode: k, elementsSelectable: B, zoomOnScroll: C, zoomOnPinch: D, zoomOnDoubleClick: H, panOnScroll: P, panOnScrollSpeed: j, panOnScrollMode: $, panOnDrag: V, defaultViewport: L, translateExtent: A, minZoom: z, maxZoom: v, onSelectionContextMenu: f, preventScrolling: M, noDragClassName: St, noWheelClassName: Nt, noPanClassName: Qe, disableKeyboardA11y: Je, onViewportChange: et, isControlledViewport: !!$e, children: p.jsxs(Vh, { children: [p.jsx(Bh, { edgeTypes: t, onEdgeClick: r, onEdgeDoubleClick: s, onReconnect: ce, onReconnectStart: ze, onReconnectEnd: Et, onlyRenderVisibleElements: T, onEdgeContextMenu: Z, onEdgeMouseEnter: G, onEdgeMouseMove: U, onEdgeMouseLeave: ne, reconnectRadius: ae, defaultMarkerColor: S, noPanClassName: Qe, disableKeyboardA11y: Je, rfId: Ct }), p.jsx(Uh, { style: m, type: y, component: b, containerStyle: w }), p.jsx("div", { className: "react-flow__edgelabel-renderer" }), p.jsx(Eh, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: i, onNodeMouseEnter: a, onNodeMouseMove: c, onNodeMouseLeave: l, onNodeContextMenu: d, nodeClickDistance: Q, onlyRenderVisibleElements: T, noPanClassName: Qe, noDragClassName: St, disableKeyboardA11y: Je, nodeExtent: an, rfId: Ct }), p.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
rs.displayName = "GraphView";
const Jh = se(rs), dr = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: r, height: i, fitView: s, fitViewOptions: a, minZoom: c = 0.5, maxZoom: l = 2, nodeOrigin: d, nodeExtent: f } = {}) => {
  const u = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), b = o ?? t ?? [], w = n ?? e ?? [], N = d ?? [0, 0], g = f ?? lt;
  vi(y, m, b);
  const x = Dn(w, u, h, {
    nodeOrigin: N,
    nodeExtent: g,
    elevateNodesOnSelect: !1
  });
  let E = [0, 0, 1];
  if (s && r && i) {
    const _ = vt(u, {
      filter: (B) => !!((B.width || B.initialWidth) && (B.height || B.initialHeight))
    }), { x: k, y: I, zoom: T } = Zn(_, r, i, c, l, a?.padding ?? 0.1);
    E = [k, I, T];
  }
  return {
    rfId: "1",
    width: r ?? 0,
    height: i ?? 0,
    transform: E,
    nodes: w,
    nodesInitialized: x,
    nodeLookup: u,
    parentLookup: h,
    edges: b,
    edgeLookup: m,
    connectionLookup: y,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: o !== void 0,
    panZoom: null,
    minZoom: c,
    maxZoom: l,
    translateExtent: lt,
    nodeExtent: g,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: We.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: N,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !1,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: s ?? !1,
    fitViewOptions: a,
    fitViewResolver: null,
    connection: { ...oi },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: gd,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: ni
  };
}, eg = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: r, height: i, fitView: s, fitViewOptions: a, minZoom: c, maxZoom: l, nodeOrigin: d, nodeExtent: f }) => xf((u, h) => {
  async function y() {
    const { nodeLookup: m, panZoom: b, fitViewOptions: w, fitViewResolver: N, width: g, height: x, minZoom: E, maxZoom: _ } = h();
    b && (await fd({
      nodes: m,
      width: g,
      height: x,
      panZoom: b,
      minZoom: E,
      maxZoom: _
    }, w), N?.resolve(!0), u({ fitViewResolver: null }));
  }
  return {
    ...dr({
      nodes: e,
      edges: t,
      width: r,
      height: i,
      fitView: s,
      fitViewOptions: a,
      minZoom: c,
      maxZoom: l,
      nodeOrigin: d,
      nodeExtent: f,
      defaultNodes: n,
      defaultEdges: o
    }),
    setNodes: (m) => {
      const { nodeLookup: b, parentLookup: w, nodeOrigin: N, elevateNodesOnSelect: g, fitViewQueued: x } = h(), E = Dn(m, b, w, {
        nodeOrigin: N,
        nodeExtent: f,
        elevateNodesOnSelect: g,
        checkEquality: !0
      });
      x && E ? (y(), u({ nodes: m, nodesInitialized: E, fitViewQueued: !1, fitViewOptions: void 0 })) : u({ nodes: m, nodesInitialized: E });
    },
    setEdges: (m) => {
      const { connectionLookup: b, edgeLookup: w } = h();
      vi(b, w, m), u({ edges: m });
    },
    setDefaultNodesAndEdges: (m, b) => {
      if (m) {
        const { setNodes: w } = h();
        w(m), u({ hasDefaultNodes: !0 });
      }
      if (b) {
        const { setEdges: w } = h();
        w(b), u({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (m) => {
      const { triggerNodeChanges: b, nodeLookup: w, parentLookup: N, domNode: g, nodeOrigin: x, nodeExtent: E, debug: _, fitViewQueued: k } = h(), { changes: I, updatedInternals: T } = zd(m, w, N, g, x, E);
      T && (Pd(w, N, { nodeOrigin: x, nodeExtent: E }), k ? (y(), u({ fitViewQueued: !1, fitViewOptions: void 0 })) : u({}), I?.length > 0 && (_ && console.log("React Flow: trigger node changes", I), b?.(I)));
    },
    updateNodePositions: (m, b = !1) => {
      const w = [], N = [], { nodeLookup: g, triggerNodeChanges: x } = h();
      for (const [E, _] of m) {
        const k = g.get(E), I = !!(k?.expandParent && k?.parentId && _?.position), T = {
          id: E,
          type: "position",
          position: I ? {
            x: Math.max(0, _.position.x),
            y: Math.max(0, _.position.y)
          } : _.position,
          dragging: b
        };
        I && k.parentId && w.push({
          id: E,
          parentId: k.parentId,
          rect: {
            ..._.internals.positionAbsolute,
            width: _.measured.width ?? 0,
            height: _.measured.height ?? 0
          }
        }), N.push(T);
      }
      if (w.length > 0) {
        const { parentLookup: E, nodeOrigin: _ } = h(), k = Qn(w, g, E, _);
        N.push(...k);
      }
      x(N);
    },
    triggerNodeChanges: (m) => {
      const { onNodesChange: b, setNodes: w, nodes: N, hasDefaultNodes: g, debug: x } = h();
      if (m?.length) {
        if (g) {
          const E = Of(m, N);
          w(E);
        }
        x && console.log("React Flow: trigger node changes", m), b?.(m);
      }
    },
    triggerEdgeChanges: (m) => {
      const { onEdgesChange: b, setEdges: w, edges: N, hasDefaultEdges: g, debug: x } = h();
      if (m?.length) {
        if (g) {
          const E = Bf(m, N);
          w(E);
        }
        x && console.log("React Flow: trigger edge changes", m), b?.(m);
      }
    },
    addSelectedNodes: (m) => {
      const { multiSelectionActive: b, edgeLookup: w, nodeLookup: N, triggerNodeChanges: g, triggerEdgeChanges: x } = h();
      if (b) {
        const E = m.map((_) => Ie(_, !0));
        g(E);
        return;
      }
      g(Oe(N, /* @__PURE__ */ new Set([...m]), !0)), x(Oe(w));
    },
    addSelectedEdges: (m) => {
      const { multiSelectionActive: b, edgeLookup: w, nodeLookup: N, triggerNodeChanges: g, triggerEdgeChanges: x } = h();
      if (b) {
        const E = m.map((_) => Ie(_, !0));
        x(E);
        return;
      }
      x(Oe(w, /* @__PURE__ */ new Set([...m]))), g(Oe(N, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: m, edges: b } = {}) => {
      const { edges: w, nodes: N, nodeLookup: g, triggerNodeChanges: x, triggerEdgeChanges: E } = h(), _ = m || N, k = b || w, I = _.map((B) => {
        const L = g.get(B.id);
        return L && (L.selected = !1), Ie(B.id, !1);
      }), T = k.map((B) => Ie(B.id, !1));
      x(I), E(T);
    },
    setMinZoom: (m) => {
      const { panZoom: b, maxZoom: w } = h();
      b?.setScaleExtent([m, w]), u({ minZoom: m });
    },
    setMaxZoom: (m) => {
      const { panZoom: b, minZoom: w } = h();
      b?.setScaleExtent([w, m]), u({ maxZoom: m });
    },
    setTranslateExtent: (m) => {
      h().panZoom?.setTranslateExtent(m), u({ translateExtent: m });
    },
    setPaneClickDistance: (m) => {
      h().panZoom?.setClickDistance(m);
    },
    resetSelectedElements: () => {
      const { edges: m, nodes: b, triggerNodeChanges: w, triggerEdgeChanges: N, elementsSelectable: g } = h();
      if (!g)
        return;
      const x = b.reduce((_, k) => k.selected ? [..._, Ie(k.id, !1)] : _, []), E = m.reduce((_, k) => k.selected ? [..._, Ie(k.id, !1)] : _, []);
      w(x), N(E);
    },
    setNodeExtent: (m) => {
      const { nodes: b, nodeLookup: w, parentLookup: N, nodeOrigin: g, elevateNodesOnSelect: x, nodeExtent: E } = h();
      m[0][0] === E[0][0] && m[0][1] === E[0][1] && m[1][0] === E[1][0] && m[1][1] === E[1][1] || (Dn(b, w, N, {
        nodeOrigin: g,
        nodeExtent: m,
        elevateNodesOnSelect: x,
        checkEquality: !1
      }), u({ nodeExtent: m }));
    },
    panBy: (m) => {
      const { transform: b, width: w, height: N, panZoom: g, translateExtent: x } = h();
      return $d({ delta: m, panZoom: g, transform: b, translateExtent: x, width: w, height: N });
    },
    setCenter: async (m, b, w) => {
      const { width: N, height: g, maxZoom: x, panZoom: E } = h();
      if (!E)
        return Promise.resolve(!1);
      const _ = typeof w?.zoom < "u" ? w.zoom : x;
      return await E.setViewport({
        x: N / 2 - m * _,
        y: g / 2 - b * _,
        zoom: _
      }, { duration: w?.duration, ease: w?.ease, interpolate: w?.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      u({
        connection: { ...oi }
      });
    },
    updateConnection: (m) => {
      u({ connection: m });
    },
    reset: () => u({ ...dr() })
  };
}, Object.is);
function tg({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: o, initialWidth: r, initialHeight: i, initialMinZoom: s, initialMaxZoom: a, initialFitViewOptions: c, fitView: l, nodeOrigin: d, nodeExtent: f, children: u }) {
  const [h] = le(() => eg({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: o,
    width: r,
    height: i,
    fitView: l,
    minZoom: s,
    maxZoom: a,
    fitViewOptions: c,
    nodeOrigin: d,
    nodeExtent: f
  }));
  return p.jsx(wf, { value: h, children: p.jsx(Xf, { children: u }) });
}
function ng({ children: e, nodes: t, edges: n, defaultNodes: o, defaultEdges: r, width: i, height: s, fitView: a, fitViewOptions: c, minZoom: l, maxZoom: d, nodeOrigin: f, nodeExtent: u }) {
  return yt(on) ? p.jsx(p.Fragment, { children: e }) : p.jsx(tg, { initialNodes: t, initialEdges: n, defaultNodes: o, defaultEdges: r, initialWidth: i, initialHeight: s, fitView: a, initialFitViewOptions: c, initialMinZoom: l, initialMaxZoom: d, nodeOrigin: f, nodeExtent: u, children: e });
}
const og = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function rg({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, className: r, nodeTypes: i, edgeTypes: s, onNodeClick: a, onEdgeClick: c, onInit: l, onMove: d, onMoveStart: f, onMoveEnd: u, onConnect: h, onConnectStart: y, onConnectEnd: m, onClickConnectStart: b, onClickConnectEnd: w, onNodeMouseEnter: N, onNodeMouseMove: g, onNodeMouseLeave: x, onNodeContextMenu: E, onNodeDoubleClick: _, onNodeDragStart: k, onNodeDrag: I, onNodeDragStop: T, onNodesDelete: B, onEdgesDelete: L, onDelete: A, onSelectionChange: z, onSelectionDragStart: v, onSelectionDrag: M, onSelectionDragStop: S, onSelectionContextMenu: C, onSelectionStart: D, onSelectionEnd: P, onBeforeDelete: j, connectionMode: $, connectionLineType: H = Ce.Bezier, connectionLineStyle: V, connectionLineComponent: R, connectionLineContainerStyle: W, deleteKeyCode: q = "Backspace", selectionKeyCode: X = "Shift", selectionOnDrag: O = !1, selectionMode: Y = ut.Full, panActivationKeyCode: J = "Space", multiSelectionKeyCode: Q = ft() ? "Meta" : "Control", zoomActivationKeyCode: Z = ft() ? "Meta" : "Control", snapToGrid: G, snapGrid: U, onlyRenderVisibleElements: ne = !1, selectNodesOnDrag: ae, nodesDraggable: ce, autoPanOnNodeFocus: ze, nodesConnectable: Et, nodesFocusable: St, nodeOrigin: Nt = Ti, edgesFocusable: Qe, edgesReconnectable: Je, elementsSelectable: an = !0, defaultViewport: Ct = Df, minZoom: $e = 0.5, maxZoom: et = 2, translateExtent: no = lt, preventScrolling: gs = !0, nodeExtent: cn, defaultMarkerColor: ps = "#b1b1b7", zoomOnScroll: ms = !0, zoomOnPinch: ys = !0, panOnScroll: xs = !1, panOnScrollSpeed: ws = 0.5, panOnScrollMode: vs = Pe.Free, zoomOnDoubleClick: bs = !0, panOnDrag: _s = !0, onPaneClick: Es, onPaneMouseEnter: Ss, onPaneMouseMove: Ns, onPaneMouseLeave: Cs, onPaneScroll: Ms, onPaneContextMenu: ks, paneClickDistance: oo = 0, nodeClickDistance: Is = 0, children: As, onReconnect: Ps, onReconnectStart: Ds, onReconnectEnd: Ts, onEdgeContextMenu: js, onEdgeDoubleClick: zs, onEdgeMouseEnter: $s, onEdgeMouseMove: Hs, onEdgeMouseLeave: Ls, reconnectRadius: Os = 10, onNodesChange: Bs, onEdgesChange: Rs, noDragClassName: Vs = "nodrag", noWheelClassName: Fs = "nowheel", noPanClassName: ro = "nopan", fitView: io, fitViewOptions: so, connectOnClick: Xs, attributionPosition: Ys, proOptions: Ws, defaultEdgeOptions: Zs, elevateNodesOnSelect: Gs, elevateEdgesOnSelect: qs, disableKeyboardA11y: ao = !1, autoPanOnConnect: Us, autoPanOnNodeDrag: Ks, autoPanSpeed: Qs, connectionRadius: Js, isValidConnection: ea, onError: ta, style: na, id: co, nodeDragThreshold: oa, connectionDragThreshold: ra, viewport: ia, onViewportChange: sa, width: aa, height: ca, colorMode: la = "light", debug: ua, onScroll: lo, ariaLabelConfig: da, ...fa }, ha) {
  const ln = co || "1", ga = $f(la), pa = he((uo) => {
    uo.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), lo?.(uo);
  }, [lo]);
  return p.jsx("div", { "data-testid": "rf__wrapper", ...fa, onScroll: pa, style: { ...na, ...og }, ref: ha, className: ie(["react-flow", r, ga]), id: co, role: "application", children: p.jsxs(ng, { nodes: e, edges: t, width: aa, height: ca, fitView: io, fitViewOptions: so, minZoom: $e, maxZoom: et, nodeOrigin: Nt, nodeExtent: cn, children: [p.jsx(Jh, { onInit: l, onNodeClick: a, onEdgeClick: c, onNodeMouseEnter: N, onNodeMouseMove: g, onNodeMouseLeave: x, onNodeContextMenu: E, onNodeDoubleClick: _, nodeTypes: i, edgeTypes: s, connectionLineType: H, connectionLineStyle: V, connectionLineComponent: R, connectionLineContainerStyle: W, selectionKeyCode: X, selectionOnDrag: O, selectionMode: Y, deleteKeyCode: q, multiSelectionKeyCode: Q, panActivationKeyCode: J, zoomActivationKeyCode: Z, onlyRenderVisibleElements: ne, defaultViewport: Ct, translateExtent: no, minZoom: $e, maxZoom: et, preventScrolling: gs, zoomOnScroll: ms, zoomOnPinch: ys, zoomOnDoubleClick: bs, panOnScroll: xs, panOnScrollSpeed: ws, panOnScrollMode: vs, panOnDrag: _s, onPaneClick: Es, onPaneMouseEnter: Ss, onPaneMouseMove: Ns, onPaneMouseLeave: Cs, onPaneScroll: Ms, onPaneContextMenu: ks, paneClickDistance: oo, nodeClickDistance: Is, onSelectionContextMenu: C, onSelectionStart: D, onSelectionEnd: P, onReconnect: Ps, onReconnectStart: Ds, onReconnectEnd: Ts, onEdgeContextMenu: js, onEdgeDoubleClick: zs, onEdgeMouseEnter: $s, onEdgeMouseMove: Hs, onEdgeMouseLeave: Ls, reconnectRadius: Os, defaultMarkerColor: ps, noDragClassName: Vs, noWheelClassName: Fs, noPanClassName: ro, rfId: ln, disableKeyboardA11y: ao, nodeExtent: cn, viewport: ia, onViewportChange: sa }), p.jsx(zf, { nodes: e, edges: t, defaultNodes: n, defaultEdges: o, onConnect: h, onConnectStart: y, onConnectEnd: m, onClickConnectStart: b, onClickConnectEnd: w, nodesDraggable: ce, autoPanOnNodeFocus: ze, nodesConnectable: Et, nodesFocusable: St, edgesFocusable: Qe, edgesReconnectable: Je, elementsSelectable: an, elevateNodesOnSelect: Gs, elevateEdgesOnSelect: qs, minZoom: $e, maxZoom: et, nodeExtent: cn, onNodesChange: Bs, onEdgesChange: Rs, snapToGrid: G, snapGrid: U, connectionMode: $, translateExtent: no, connectOnClick: Xs, defaultEdgeOptions: Zs, fitView: io, fitViewOptions: so, onNodesDelete: B, onEdgesDelete: L, onDelete: A, onNodeDragStart: k, onNodeDrag: I, onNodeDragStop: T, onSelectionDrag: M, onSelectionDragStart: v, onSelectionDragStop: S, onMove: d, onMoveStart: f, onMoveEnd: u, noPanClassName: ro, nodeOrigin: Nt, rfId: ln, autoPanOnConnect: Us, autoPanOnNodeDrag: Ks, autoPanSpeed: Qs, onError: ta, connectionRadius: Js, isValidConnection: ea, selectNodesOnDrag: ae, nodeDragThreshold: oa, connectionDragThreshold: ra, onBeforeDelete: j, paneClickDistance: oo, debug: ua, ariaLabelConfig: da }), p.jsx(Pf, { onSelectionChange: z }), As, p.jsx(Cf, { proOptions: Ws, position: Ys }), p.jsx(Nf, { rfId: ln, disableKeyboardA11y: ao })] }) });
}
var ig = zi(rg);
const sg = (e) => e.domNode?.querySelector(".react-flow__edgelabel-renderer");
function ag({ children: e }) {
  const t = K(sg);
  return t ? wa(e, t) : null;
}
function cg({ dimensions: e, lineWidth: t, variant: n, className: o }) {
  return p.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: ie(["react-flow__background-pattern", n, o]) });
}
function lg({ radius: e, className: t }) {
  return p.jsx("circle", { cx: e, cy: e, r: e, className: ie(["react-flow__background-pattern", "dots", t]) });
}
var Me;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Me || (Me = {}));
const ug = {
  [Me.Dots]: 1,
  [Me.Lines]: 1,
  [Me.Cross]: 6
}, dg = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function is({
  id: e,
  variant: t = Me.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: o,
  lineWidth: r = 1,
  offset: i = 0,
  color: s,
  bgColor: a,
  style: c,
  className: l,
  patternClassName: d
}) {
  const f = ee(null), { transform: u, patternId: h } = K(dg, re), y = o || ug[t], m = t === Me.Dots, b = t === Me.Cross, w = Array.isArray(n) ? n : [n, n], N = [w[0] * u[2] || 1, w[1] * u[2] || 1], g = y * u[2], x = Array.isArray(i) ? i : [i, i], E = b ? [g, g] : N, _ = [
    x[0] * u[2] || 1 + E[0] / 2,
    x[1] * u[2] || 1 + E[1] / 2
  ], k = `${h}${e || ""}`;
  return p.jsxs("svg", { className: ie(["react-flow__background", l]), style: {
    ...c,
    ...sn,
    "--xy-background-color-props": a,
    "--xy-background-pattern-color-props": s
  }, ref: f, "data-testid": "rf__background", children: [p.jsx("pattern", { id: k, x: u[0] % N[0], y: u[1] % N[1], width: N[0], height: N[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${_[0]},-${_[1]})`, children: m ? p.jsx(lg, { radius: g / 2, className: d }) : p.jsx(cg, { dimensions: E, lineWidth: r, variant: t, className: d }) }), p.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${k})` })] });
}
is.displayName = "Background";
const fg = se(is);
function hg() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: p.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function gg() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: p.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function pg() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: p.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function mg() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: p.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function yg() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: p.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Tt({ children: e, className: t, ...n }) {
  return p.jsx("button", { type: "button", className: ie(["react-flow__controls-button", t]), ...n, children: e });
}
const xg = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function ss({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: o = !0, fitViewOptions: r, onZoomIn: i, onZoomOut: s, onFitView: a, onInteractiveChange: c, className: l, children: d, position: f = "bottom-left", orientation: u = "vertical", "aria-label": h }) {
  const y = oe(), { isInteractive: m, minZoomReached: b, maxZoomReached: w, ariaLabelConfig: N } = K(xg, re), { zoomIn: g, zoomOut: x, fitView: E } = Jn(), _ = () => {
    g(), i?.();
  }, k = () => {
    x(), s?.();
  }, I = () => {
    E(r), a?.();
  }, T = () => {
    y.setState({
      nodesDraggable: !m,
      nodesConnectable: !m,
      elementsSelectable: !m
    }), c?.(!m);
  }, B = u === "horizontal" ? "horizontal" : "vertical";
  return p.jsxs(rn, { className: ie(["react-flow__controls", B, l]), position: f, style: e, "data-testid": "rf__controls", "aria-label": h ?? N["controls.ariaLabel"], children: [t && p.jsxs(p.Fragment, { children: [p.jsx(Tt, { onClick: _, className: "react-flow__controls-zoomin", title: N["controls.zoomIn.ariaLabel"], "aria-label": N["controls.zoomIn.ariaLabel"], disabled: w, children: p.jsx(hg, {}) }), p.jsx(Tt, { onClick: k, className: "react-flow__controls-zoomout", title: N["controls.zoomOut.ariaLabel"], "aria-label": N["controls.zoomOut.ariaLabel"], disabled: b, children: p.jsx(gg, {}) })] }), n && p.jsx(Tt, { className: "react-flow__controls-fitview", onClick: I, title: N["controls.fitView.ariaLabel"], "aria-label": N["controls.fitView.ariaLabel"], children: p.jsx(pg, {}) }), o && p.jsx(Tt, { className: "react-flow__controls-interactive", onClick: T, title: N["controls.interactive.ariaLabel"], "aria-label": N["controls.interactive.ariaLabel"], children: m ? p.jsx(yg, {}) : p.jsx(mg, {}) }), d] });
}
ss.displayName = "Controls";
se(ss);
function wg({ id: e, x: t, y: n, width: o, height: r, style: i, color: s, strokeColor: a, strokeWidth: c, className: l, borderRadius: d, shapeRendering: f, selected: u, onClick: h }) {
  const { background: y, backgroundColor: m } = i || {}, b = s || y || m;
  return p.jsx("rect", { className: ie(["react-flow__minimap-node", { selected: u }, l]), x: t, y: n, rx: d, ry: d, width: o, height: r, style: {
    fill: b,
    stroke: a,
    strokeWidth: c
  }, shapeRendering: f, onClick: h ? (w) => h(w, e) : void 0 });
}
const vg = se(wg), bg = (e) => e.nodes.map((t) => t.id), wn = (e) => e instanceof Function ? e : () => e;
function _g({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: r,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = vg,
  onClick: s
}) {
  const a = K(bg, re), c = wn(t), l = wn(e), d = wn(n), f = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return p.jsx(p.Fragment, { children: a.map((u) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    p.jsx(Sg, { id: u, nodeColorFunc: c, nodeStrokeColorFunc: l, nodeClassNameFunc: d, nodeBorderRadius: o, nodeStrokeWidth: r, NodeComponent: i, onClick: s, shapeRendering: f }, u)
  )) });
}
function Eg({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: o, nodeBorderRadius: r, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: a, onClick: c }) {
  const { node: l, x: d, y: f, width: u, height: h } = K((y) => {
    const { internals: m } = y.nodeLookup.get(e), b = m.userNode, { x: w, y: N } = m.positionAbsolute, { width: g, height: x } = Ee(b);
    return {
      node: b,
      x: w,
      y: N,
      width: g,
      height: x
    };
  }, re);
  return !l || l.hidden || !ui(l) ? null : p.jsx(a, { x: d, y: f, width: u, height: h, style: l.style, selected: !!l.selected, className: o(l), color: t(l), borderRadius: r, strokeColor: n(l), strokeWidth: i, shapeRendering: s, onClick: c, id: l.id });
}
const Sg = se(Eg);
var Ng = se(_g);
const Cg = 200, Mg = 150, kg = (e) => !e.hidden, Ig = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? li(vt(e.nodeLookup, { filter: kg }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, Ag = "react-flow__minimap-desc";
function as({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: o,
  nodeClassName: r = "",
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a,
  bgColor: c,
  maskColor: l,
  maskStrokeColor: d,
  maskStrokeWidth: f,
  position: u = "bottom-right",
  onClick: h,
  onNodeClick: y,
  pannable: m = !1,
  zoomable: b = !1,
  ariaLabel: w,
  inversePan: N,
  zoomStep: g = 1,
  offsetScale: x = 5
}) {
  const E = oe(), _ = ee(null), { boundingRect: k, viewBB: I, rfId: T, panZoom: B, translateExtent: L, flowWidth: A, flowHeight: z, ariaLabelConfig: v } = K(Ig, re), M = e?.width ?? Cg, S = e?.height ?? Mg, C = k.width / M, D = k.height / S, P = Math.max(C, D), j = P * M, $ = P * S, H = x * P, V = k.x - (j - k.width) / 2 - H, R = k.y - ($ - k.height) / 2 - H, W = j + H * 2, q = $ + H * 2, X = `${Ag}-${T}`, O = ee(0), Y = ee();
  O.current = P, te(() => {
    if (_.current && B)
      return Y.current = Yd({
        domNode: _.current,
        panZoom: B,
        getTransform: () => E.getState().transform,
        getViewScale: () => O.current
      }), () => {
        Y.current?.destroy();
      };
  }, [B]), te(() => {
    Y.current?.update({
      translateExtent: L,
      width: A,
      height: z,
      inversePan: N,
      pannable: m,
      zoomStep: g,
      zoomable: b
    });
  }, [m, b, N, g, L, A, z]);
  const J = h ? (G) => {
    const [U, ne] = Y.current?.pointer(G) || [0, 0];
    h(G, { x: U, y: ne });
  } : void 0, Q = y ? he((G, U) => {
    const ne = E.getState().nodeLookup.get(U).internals.userNode;
    y(G, ne);
  }, []) : void 0, Z = w ?? v["minimap.ariaLabel"];
  return p.jsx(rn, { position: u, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof c == "string" ? c : void 0,
    "--xy-minimap-mask-background-color-props": typeof l == "string" ? l : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof f == "number" ? f * P : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: ie(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: p.jsxs("svg", { width: M, height: S, viewBox: `${V} ${R} ${W} ${q}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": X, ref: _, onClick: J, children: [Z && p.jsx("title", { id: X, children: Z }), p.jsx(Ng, { onClick: Q, nodeColor: o, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: r, nodeStrokeWidth: s, nodeComponent: a }), p.jsx("path", { className: "react-flow__minimap-mask", d: `M${V - H},${R - H}h${W + H * 2}v${q + H * 2}h${-W - H * 2}z
        M${I.x},${I.y}h${I.width}v${I.height}h${-I.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
as.displayName = "MiniMap";
se(as);
const Pg = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, Dg = {
  [Ue.Line]: "right",
  [Ue.Handle]: "bottom-right"
};
function Tg({ nodeId: e, position: t, variant: n = Ue.Handle, className: o, style: r = void 0, children: i, color: s, minWidth: a = 10, minHeight: c = 10, maxWidth: l = Number.MAX_VALUE, maxHeight: d = Number.MAX_VALUE, keepAspectRatio: f = !1, resizeDirection: u, autoScale: h = !0, shouldResize: y, onResizeStart: m, onResize: b, onResizeEnd: w }) {
  const N = Oi(), g = typeof e == "string" ? e : N, x = oe(), E = ee(null), _ = n === Ue.Handle, k = K(he(Pg(_ && h), [_, h]), re), I = ee(null), T = t ?? Dg[n];
  te(() => {
    if (!(!E.current || !g))
      return I.current || (I.current = cf({
        domNode: E.current,
        nodeId: g,
        getStoreItems: () => {
          const { nodeLookup: L, transform: A, snapGrid: z, snapToGrid: v, nodeOrigin: M, domNode: S } = x.getState();
          return {
            nodeLookup: L,
            transform: A,
            snapGrid: z,
            snapToGrid: v,
            nodeOrigin: M,
            paneDomNode: S
          };
        },
        onChange: (L, A) => {
          const { triggerNodeChanges: z, nodeLookup: v, parentLookup: M, nodeOrigin: S } = x.getState(), C = [], D = { x: L.x, y: L.y }, P = v.get(g);
          if (P && P.expandParent && P.parentId) {
            const j = P.origin ?? S, $ = L.width ?? P.measured.width ?? 0, H = L.height ?? P.measured.height ?? 0, V = {
              id: P.id,
              parentId: P.parentId,
              rect: {
                width: $,
                height: H,
                ...di({
                  x: L.x ?? P.position.x,
                  y: L.y ?? P.position.y
                }, { width: $, height: H }, P.parentId, v, j)
              }
            }, R = Qn([V], v, M, S);
            C.push(...R), D.x = L.x ? Math.max(j[0] * $, L.x) : void 0, D.y = L.y ? Math.max(j[1] * H, L.y) : void 0;
          }
          if (D.x !== void 0 && D.y !== void 0) {
            const j = {
              id: g,
              type: "position",
              position: { ...D }
            };
            C.push(j);
          }
          if (L.width !== void 0 && L.height !== void 0) {
            const $ = {
              id: g,
              type: "dimensions",
              resizing: !0,
              setAttributes: u ? u === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: L.width,
                height: L.height
              }
            };
            C.push($);
          }
          for (const j of A) {
            const $ = {
              ...j,
              type: "position"
            };
            C.push($);
          }
          z(C);
        },
        onEnd: ({ width: L, height: A }) => {
          const z = {
            id: g,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: L,
              height: A
            }
          };
          x.getState().triggerNodeChanges([z]);
        }
      })), I.current.update({
        controlPosition: T,
        boundaries: {
          minWidth: a,
          minHeight: c,
          maxWidth: l,
          maxHeight: d
        },
        keepAspectRatio: f,
        resizeDirection: u,
        onResizeStart: m,
        onResize: b,
        onResizeEnd: w,
        shouldResize: y
      }), () => {
        I.current?.destroy();
      };
  }, [
    T,
    a,
    c,
    l,
    d,
    f,
    m,
    b,
    w,
    y
  ]);
  const B = T.split("-");
  return p.jsx("div", { className: ie(["react-flow__resize-control", "nodrag", ...B, n, o]), ref: E, style: {
    ...r,
    scale: k,
    ...s && { [_ ? "backgroundColor" : "borderColor"]: s }
  }, children: i });
}
se(Tg);
const jg = "border-transparent bg-blue-500 text-white shadow-sm hover:bg-blue-600", fr = "var(--xy-edge-stroke)", zg = "var(--color-blue-500)", $g = ({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: o,
  targetY: r,
  sourcePosition: i,
  targetPosition: s,
  data: a
}) => {
  const [c, l] = le(!1), [d, f] = le(!1), u = a, [h, y, m] = Zt({
    sourceX: t,
    sourceY: n,
    sourcePosition: i,
    targetX: o,
    targetY: r,
    targetPosition: s
  }), b = {
    stroke: d || c ? zg : fr
  };
  if (!u)
    return /* @__PURE__ */ p.jsx(Ke, { id: e, path: h, style: { stroke: fr } });
  const w = (E) => {
    l(!1), u.onPick(E, { sourceId: u.sourceId, targetId: u.targetId });
  }, N = c || d, g = /* @__PURE__ */ p.jsx(
    "button",
    {
      "aria-label": "Insert step here",
      className: De(
        "flex size-7 items-center justify-center rounded-full border transition-opacity focus-visible:opacity-100 focus-visible:outline-none",
        jg,
        N ? "opacity-100" : "opacity-0",
        u.disabled && "cursor-not-allowed!"
      ),
      "data-testid": `add-step-button-${u.sourceId}-${u.targetId}`,
      disabled: u.disabled,
      type: "button",
      children: /* @__PURE__ */ p.jsx(bn, { className: "size-4", strokeWidth: 1.5 })
    }
  );
  let x;
  return u.disabled ? x = u.disabledReason ? /* @__PURE__ */ p.jsx(_r, { delayDuration: 150, children: /* @__PURE__ */ p.jsxs(Er, { children: [
    /* @__PURE__ */ p.jsx(Sr, { asChild: !0, children: /* @__PURE__ */ p.jsx("span", { tabIndex: 0, children: g }) }),
    /* @__PURE__ */ p.jsx(Nr, { children: u.disabledReason })
  ] }) }) : g : x = /* @__PURE__ */ p.jsxs(wr, { open: c, onOpenChange: l, children: [
    /* @__PURE__ */ p.jsx(vr, { asChild: !0, children: g }),
    /* @__PURE__ */ p.jsx(br, { align: "center", className: "p-0", side: "right", children: /* @__PURE__ */ p.jsx(Ar, { onPick: w }) })
  ] }), /* @__PURE__ */ p.jsxs(
    "g",
    {
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [
        /* @__PURE__ */ p.jsx(Ke, { id: e, interactionWidth: 30, path: h, style: b }),
        /* @__PURE__ */ p.jsx(ag, { children: /* @__PURE__ */ p.jsx(
          "div",
          {
            className: "pointer-events-auto absolute",
            style: {
              transform: `translate(-50%, -50%) translate(${y}px, ${m}px)`
            },
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: /* @__PURE__ */ p.jsx("div", { className: "flex h-10 w-16 items-center justify-center", children: x })
          }
        ) })
      ]
    }
  );
}, Ot = 0, Hg = 256, Lg = Ot + Hg / 2, hr = 180, Og = 40, Bg = `Limit of ${vn(_n)} steps reached`, Rg = "var(--xy-edge-stroke)", Ae = "__trigger__", Be = "__tail__", Vg = ({ sourceId: e, targetId: t }) => ({
  previousActionId: e === Ae ? void 0 : e,
  nextActionId: t === Be ? void 0 : t
}), Fg = {
  opacity: 0,
  pointerEvents: "none",
  background: "transparent",
  border: "none"
}, mt = ({ type: e, position: t }) => /* @__PURE__ */ p.jsx(pt, { isConnectable: !1, position: t, style: Fg, type: e }), cs = ({ children: e, className: t, data: n }) => /* @__PURE__ */ p.jsx(
  "button",
  {
    "aria-label": n.value ? `${n.label}: ${n.value}` : n.label,
    "aria-pressed": n.selected,
    className: De(
      "flex w-64 items-center gap-3 rounded-lg border border-border-default bg-surface-elevated px-4 py-3 text-left text-sm text-foreground shadow-sm transition-colors hover:border-border-strong focus-visible:border-border-strong focus-visible:outline-none",
      n.selected && "border-blue-500 shadow-[inset_0_0_0_1px_var(--color-blue-500),0_1px_2px_0_rgb(0_0_0_/_0.05)]",
      t
    ),
    type: "button",
    onClick: n.onSelect,
    children: e
  }
), ls = ({ data: e }) => {
  const t = e.icon;
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-text-secondary", children: /* @__PURE__ */ p.jsx(t, { className: "size-4" }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 flex-col text-left", children: [
      /* @__PURE__ */ p.jsx("span", { className: "text-xs text-text-secondary", children: e.label }),
      e.value && /* @__PURE__ */ p.jsx("span", { className: "truncate font-medium", children: e.value })
    ] })
  ] });
}, us = Re.memo(({ data: e }) => /* @__PURE__ */ p.jsxs(cs, { data: e, children: [
  /* @__PURE__ */ p.jsx(ls, { data: e }),
  /* @__PURE__ */ p.jsx(mt, { position: F.Bottom, type: "source" })
] }));
us.displayName = "TriggerNode";
const ds = Re.memo(({ data: e }) => /* @__PURE__ */ p.jsxs(cs, { data: e, children: [
  /* @__PURE__ */ p.jsx(mt, { position: F.Top, type: "target" }),
  /* @__PURE__ */ p.jsx(ls, { data: e }),
  /* @__PURE__ */ p.jsx(mt, { position: F.Bottom, type: "source" })
] }));
ds.displayName = "StepNode";
const Xg = ({ data: e }) => {
  const [t, n] = le(!1), o = (i) => {
    n(!1), e.onPick(i, e.anchor);
  }, r = "flex h-12 w-64 items-center justify-center rounded-lg border border-dashed border-border-default bg-surface-page transition-colors hover:border-border-strong focus-visible:border-border-strong focus-visible:outline-none";
  if (e.disabled) {
    const i = /* @__PURE__ */ p.jsxs(
      "div",
      {
        "aria-disabled": "true",
        className: De(r, "cursor-not-allowed opacity-60"),
        "data-testid": "add-step-tail-button",
        children: [
          /* @__PURE__ */ p.jsx(mt, { position: F.Top, type: "target" }),
          /* @__PURE__ */ p.jsx(bn, { className: "size-5 text-text-secondary", strokeWidth: 1.5 })
        ]
      }
    );
    return e.disabledReason ? /* @__PURE__ */ p.jsx(_r, { delayDuration: 150, children: /* @__PURE__ */ p.jsxs(Er, { children: [
      /* @__PURE__ */ p.jsx(Sr, { asChild: !0, children: /* @__PURE__ */ p.jsx("span", { tabIndex: 0, children: i }) }),
      /* @__PURE__ */ p.jsx(Nr, { children: e.disabledReason })
    ] }) }) : i;
  }
  return /* @__PURE__ */ p.jsxs(wr, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ p.jsxs(
      vr,
      {
        "aria-label": "Add step",
        className: De(r, "cursor-pointer"),
        "data-testid": "add-step-tail-button",
        children: [
          /* @__PURE__ */ p.jsx(mt, { position: F.Top, type: "target" }),
          /* @__PURE__ */ p.jsx(bn, { className: "size-5 text-text-secondary", strokeWidth: 1.5 })
        ]
      }
    ),
    /* @__PURE__ */ p.jsx(br, { align: "center", className: "p-0", side: "top", children: /* @__PURE__ */ p.jsx(Ar, { onPick: o }) })
  ] });
}, Yg = {
  trigger: us,
  step: ds,
  tail: Xg
}, Wg = {
  "add-step-edge": $g
}, fs = (e) => {
  if (e <= 0)
    throw new Error("Wait time must be a positive number of hours.");
  if (e % 24 === 0) {
    const t = e / 24;
    return t === 1 ? "1 day" : `${t} days`;
  }
  return e === 1 ? "1 hour" : `${e} hours`;
}, Zg = (e) => {
  switch (e.type) {
    case "wait":
      return { icon: On, label: "Wait", value: fs(e.data.wait_hours) };
    case "send_email":
      return { icon: Ln, label: "Send email", value: e.data.email_subject };
    default: {
      const t = e;
      throw new Error(`Unknown automation action type: ${t}`);
    }
  }
}, Gg = (e) => {
  if (e.actions.length === 0)
    return [];
  const t = new Map(e.actions.map((c) => [c.id, c])), n = new Set(e.edges.map((c) => c.target_action_id)), o = e.actions.find((c) => !n.has(c.id));
  if (!o)
    throw new Error(`Could not determine the starting step for automation ${e.id}.`);
  const r = new Map(e.edges.map((c) => [c.source_action_id, c.target_action_id])), i = [], s = /* @__PURE__ */ new Set();
  let a = o;
  for (; a; ) {
    if (s.has(a.id))
      throw new Error(`Detected a loop in automation ${e.id}.`);
    i.push(a), s.add(a.id);
    const c = r.get(a.id);
    a = c ? t.get(c) : void 0;
  }
  if (i.length !== e.actions.length)
    throw new Error(`Some steps in automation ${e.id} are missing or disconnected.`);
  return i;
}, qg = ({ automation: e, disabled: t, onPick: n, onSelectStep: o, selectedStepId: r }) => {
  const i = Gg(e), s = {
    draggable: !1,
    selectable: !1,
    connectable: !1,
    focusable: !1
  }, a = t ? Bg : void 0, l = {
    sourceId: i[i.length - 1]?.id ?? Ae,
    targetId: Be
  }, d = [
    {
      id: Ae,
      type: "trigger",
      position: { x: Ot, y: 0 },
      data: {
        icon: yr,
        label: "Trigger",
        value: "Member signs up",
        selected: r === Ae,
        onSelect: () => o(Ae)
      },
      ...s
    }
  ];
  i.forEach((h, y) => {
    d.push({
      id: h.id,
      type: "step",
      position: { x: Ot, y: hr * (y + 1) },
      data: {
        ...Zg(h),
        selected: r === h.id,
        onSelect: () => o(h.id)
      },
      ...s
    });
  }), d.push({
    id: Be,
    type: "tail",
    position: { x: Ot, y: hr * (i.length + 1) },
    data: { disabled: t, disabledReason: a, onPick: n, anchor: l },
    draggable: !1,
    connectable: !1
  });
  const f = [];
  let u = Ae;
  return i.forEach((h) => {
    const y = {
      sourceId: u,
      targetId: h.id,
      disabled: t,
      disabledReason: a,
      onPick: n
    };
    f.push({
      id: `e-${u}-${h.id}`,
      source: u,
      target: h.id,
      type: "add-step-edge",
      focusable: !1,
      data: y
    }), u = h.id;
  }), f.push({
    id: `e-${u}-${Be}`,
    source: u,
    target: Be,
    type: "smoothstep",
    focusable: !1,
    style: { stroke: Rg }
  }), { nodes: d, edges: f };
}, Ug = (e) => ({
  x: Math.round(e / 2 - Lg),
  y: Og,
  zoom: 1
}), Kg = {
  "member-welcome-email-free": ["free"],
  "member-welcome-email-paid": ["paid"]
}, Qg = (e, t) => {
  if (!t)
    return null;
  if (t === Ae)
    return {
      icon: yr,
      label: "Trigger",
      title: "Member signs up",
      memberTiers: Kg[e.slug] ?? [],
      type: "trigger"
    };
  const n = e.actions.find((o) => o.id === t);
  if (!n)
    return null;
  switch (n.type) {
    case "wait": {
      const o = fs(n.data.wait_hours);
      return {
        icon: On,
        label: "Wait",
        title: o,
        action: n,
        type: "wait"
      };
    }
    case "send_email":
      return {
        icon: Ln,
        label: "Send email",
        title: n.data.email_subject || "No subject",
        action: n,
        type: "send_email"
      };
    default: {
      const o = n;
      throw new Error(`Unknown automation action type: ${o}`);
    }
  }
}, Jg = (e) => e % 24 === 0 ? { amount: vn(e / 24), unit: e === 24 ? "Day" : "Days" } : { amount: vn(e), unit: e === 1 ? "Hour" : "Hours" }, to = ({ label: e, children: t }) => /* @__PURE__ */ p.jsxs("label", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ p.jsx("span", { className: "text-xs font-medium text-text-secondary", children: e }),
  t
] }), hs = ({ value: e }) => /* @__PURE__ */ p.jsx(Ra, { value: e, children: /* @__PURE__ */ p.jsx(Va, { disabled: !0, children: /* @__PURE__ */ p.jsx("span", { children: e }) }) }), zn = ({ children: e, variant: t = "default" }) => /* @__PURE__ */ p.jsx(
  Ve,
  {
    className: De("w-full", t === "destructive" && "border-red text-red"),
    type: "button",
    variant: "outline",
    disabled: !0,
    children: e
  }
), ep = ({ memberTiers: e }) => /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col gap-5", children: [
  /* @__PURE__ */ p.jsx(to, { label: "Trigger", children: /* @__PURE__ */ p.jsx(hs, { value: "New member sign up" }) }),
  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ p.jsx("span", { className: "text-xs font-medium text-text-secondary", children: "Members" }),
    /* @__PURE__ */ p.jsxs(go, { className: "flex items-center gap-2 text-sm font-normal text-foreground", children: [
      /* @__PURE__ */ p.jsx(po, { checked: e.includes("free"), disabled: !0 }),
      "Free"
    ] }),
    /* @__PURE__ */ p.jsxs(go, { className: "flex items-center gap-2 text-sm font-normal text-foreground", children: [
      /* @__PURE__ */ p.jsx(po, { checked: e.includes("paid"), disabled: !0 }),
      "Paid"
    ] })
  ] })
] }), tp = ({ action: e }) => {
  const t = Jg(e.data.wait_hours);
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col gap-5", children: [
    /* @__PURE__ */ p.jsx(to, { label: "Wait for", children: /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-[6rem_1fr] gap-2", children: [
      /* @__PURE__ */ p.jsx(Cr, { value: t.amount, readOnly: !0 }),
      /* @__PURE__ */ p.jsx(hs, { value: t.unit })
    ] }) }),
    /* @__PURE__ */ p.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ p.jsxs(zn, { variant: "destructive", children: [
      /* @__PURE__ */ p.jsx(xr, { className: "size-4" }),
      "Delete step"
    ] }) })
  ] });
}, np = ({ action: e }) => /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col gap-5", children: [
  /* @__PURE__ */ p.jsx(to, { label: "Subject line", children: /* @__PURE__ */ p.jsx(Cr, { value: e.data.email_subject || "No subject", readOnly: !0 }) }),
  /* @__PURE__ */ p.jsxs(zn, { children: [
    /* @__PURE__ */ p.jsx(Fa, { className: "size-4" }),
    "Edit email"
  ] }),
  /* @__PURE__ */ p.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ p.jsxs(zn, { variant: "destructive", children: [
    /* @__PURE__ */ p.jsx(xr, { className: "size-4" }),
    "Delete step"
  ] }) })
] }), op = ({ detail: e }) => {
  switch (e.type) {
    case "trigger":
      return /* @__PURE__ */ p.jsx(ep, { memberTiers: e.memberTiers });
    case "wait":
      return /* @__PURE__ */ p.jsx(tp, { action: e.action });
    case "send_email":
      return /* @__PURE__ */ p.jsx(np, { action: e.action });
    default: {
      const t = e;
      throw new Error(`Unknown sidebar type: ${t}`);
    }
  }
}, rp = ({ detail: e }) => {
  const t = e.icon;
  return /* @__PURE__ */ p.jsxs("div", { className: "flex min-h-full flex-col gap-6", children: [
    /* @__PURE__ */ p.jsx("div", { className: "flex items-start gap-4", children: /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-text-secondary", children: /* @__PURE__ */ p.jsx(t, { className: "size-4" }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ p.jsx("span", { className: "block text-xs text-text-secondary", children: e.label }),
        /* @__PURE__ */ p.jsx("h2", { className: "truncate text-base leading-tight font-semibold text-foreground", children: e.title })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(op, { detail: e })
  ] });
}, ip = ({ detail: e, onClose: t }) => (te(() => {
  if (!e)
    return;
  const n = (o) => {
    o.key === "Escape" && t();
  };
  return document.addEventListener("keydown", n), () => {
    document.removeEventListener("keydown", n);
  };
}, [e, t]), /* @__PURE__ */ p.jsx(
  "aside",
  {
    "aria-hidden": !e,
    "aria-label": "Step details",
    className: De(
      "absolute inset-y-0 right-0 z-[1] flex w-[calc(100%-6rem)] max-w-none translate-x-full flex-col gap-6 overflow-y-auto border-l border-border-default bg-background p-6 shadow-lg transition-transform duration-200 ease-out sm:w-[36rem]",
      e ? "translate-x-0" : "pointer-events-none"
    ),
    "data-state": e ? "open" : "closed",
    "data-testid": "automation-step-sidebar",
    children: e && /* @__PURE__ */ p.jsx(rp, { detail: e })
  }
)), sp = {
  wait: $a,
  send_email: za
}, ap = ({ automation: e, isLoading: t, isError: n, onChange: o }) => {
  const [r, i] = le(null), s = he((f, u) => {
    if (!e || e.actions.length >= _n)
      return;
    const h = Vg(u), y = sp[f], m = y({ detail: e, anchor: h });
    o(m);
  }, [e, o]), a = ee(Ug(window.innerWidth)), c = fe(() => e ? qg({
    automation: e,
    disabled: e.actions.length >= _n,
    onPick: s,
    onSelectStep: i,
    selectedStepId: r
  }) : null, [e, s, r]), l = e ? Qg(e, r) : null, d = he(() => {
    i(null);
  }, []);
  return t ? /* @__PURE__ */ p.jsx("div", { className: "flex flex-1 items-center justify-center bg-surface-page", "data-testid": "automation-canvas-loading", children: /* @__PURE__ */ p.jsx(En, { size: "lg" }) }) : n || !e || !c ? /* @__PURE__ */ p.jsx("div", { className: "flex flex-1 items-start justify-center bg-surface-page px-4 py-8", children: /* @__PURE__ */ p.jsx(Mr, { className: "max-w-md", role: "alert", variant: "destructive", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ p.jsx(ja, { className: "mt-0.5 size-5 text-red" }),
    /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("strong", { className: "block", children: "Couldn't load automation" }),
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-muted-foreground", children: "Try refreshing the page." })
    ] })
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "relative flex-1 overflow-hidden bg-surface-page", "data-testid": "automation-canvas", children: [
    /* @__PURE__ */ p.jsx(
      ig,
      {
        className: "[--xy-background-color:var(--surface-page)] [--xy-background-pattern-color:var(--border-subtle)] [--xy-edge-stroke:var(--border-subtle)] dark:[--xy-background-pattern-color:var(--color-grey-900)] dark:[--xy-edge-stroke:var(--color-grey-800)]",
        defaultViewport: a.current,
        edges: c.edges,
        edgesFocusable: !1,
        edgeTypes: Wg,
        nodes: c.nodes,
        nodesConnectable: !1,
        nodesDraggable: !1,
        nodesFocusable: !1,
        nodeTypes: Yg,
        proOptions: { hideAttribution: !0 },
        zoomOnScroll: !1,
        panOnScroll: !0,
        onNodeClick: (f, u) => {
          u.id !== Be && i(u.id);
        },
        onPaneClick: d,
        children: /* @__PURE__ */ p.jsx(fg, {})
      }
    ),
    /* @__PURE__ */ p.jsx(ip, { detail: l, onClose: d })
  ] });
}, cp = ({
  automation: e,
  isLoadingAutomation: t,
  isPublishButtonEnabled: n,
  publishButtonVariant: o,
  isTurnOffButtonEnabled: r,
  publishButtonChildren: i,
  onPublish: s,
  onTurnOff: a
}) => {
  const c = e?.name, l = e?.status;
  return /* @__PURE__ */ p.jsxs("header", { className: "relative z-10 flex h-14 shrink-0 items-center justify-between bg-background px-4 shadow-sm", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
      /* @__PURE__ */ p.jsx(Ve, { size: "icon", variant: "ghost", asChild: !0, children: /* @__PURE__ */ p.jsx(ba, { "aria-label": "Back to automations", to: "/automations", children: /* @__PURE__ */ p.jsx(Da, { strokeWidth: 2 }) }) }),
      t ? /* @__PURE__ */ p.jsx(Xa, { className: "h-5 w-40" }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx("span", { className: "truncate font-medium", children: c }),
        l && /* @__PURE__ */ p.jsx(Ha, { status: l })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex shrink-0 items-center gap-3", children: [
      l === "active" && /* @__PURE__ */ p.jsxs(Ya, { children: [
        /* @__PURE__ */ p.jsx(Wa, { asChild: !0, children: /* @__PURE__ */ p.jsx(Ve, { "aria-label": "Automation options", size: "icon", variant: "ghost", children: /* @__PURE__ */ p.jsx(qa, {}) }) }),
        /* @__PURE__ */ p.jsx(Za, { align: "end", children: /* @__PURE__ */ p.jsxs(Ga, { disabled: !r, onSelect: a, children: [
          /* @__PURE__ */ p.jsx(Aa, { className: "size-4" }),
          "Turn off"
        ] }) })
      ] }),
      /* @__PURE__ */ p.jsx(
        Ve,
        {
          disabled: !n,
          variant: o,
          onClick: s,
          children: i
        }
      )
    ] })
  ] });
};
var gr = Object.prototype.hasOwnProperty;
function pr(e, t, n) {
  for (n of e.keys())
    if (st(n, t)) return n;
}
function st(e, t) {
  var n, o, r;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((o = e.length) === t.length)
        for (; o-- && st(e[o], t[o]); ) ;
      return o === -1;
    }
    if (n === Set) {
      if (e.size !== t.size)
        return !1;
      for (o of e)
        if (r = o, r && typeof r == "object" && (r = pr(t, r), !r) || !t.has(r)) return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size)
        return !1;
      for (o of e)
        if (r = o[0], r && typeof r == "object" && (r = pr(t, r), !r) || !st(o[1], t.get(r)))
          return !1;
      return !0;
    }
    if (n === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((o = e.byteLength) === t.byteLength)
        for (; o-- && e.getInt8(o) === t.getInt8(o); ) ;
      return o === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((o = e.byteLength) === t.byteLength)
        for (; o-- && e[o] === t[o]; ) ;
      return o === -1;
    }
    if (!n || typeof e == "object") {
      o = 0;
      for (n in e)
        if (gr.call(e, n) && ++o && !gr.call(t, n) || !(n in t) || !st(e[n], t[n])) return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
const mr = (e) => ({
  status: e.status,
  actions: e.actions,
  edges: e.edges
}), Mp = () => {
  const { id: e = "" } = _a(), { data: t, isLoading: n, isError: o } = La(e, {
    defaultErrorHandler: !1
  }), r = t?.automations[0], i = Oa(), [s, a] = Re.useState("idle"), [c, l] = Re.useState(void 0);
  Re.useEffect(() => {
    r && l((E) => E?.id === r.id ? E : r);
  }, [r]);
  const d = !!c && !!r && !st(mr(c), mr(r)), f = (E) => {
    l(E), a((_) => _ === "failed to publish" || _ === "failed to unpublish" ? "idle" : _);
  }, u = (E) => {
    if (!c)
      throw new Error("Cannot edit an automation that has not loaded.");
    let _;
    switch (E) {
      case "active":
        a("publishing"), _ = "failed to publish";
        break;
      case "inactive":
        a("unpublishing"), _ = "failed to unpublish";
        break;
      default: {
        const k = E;
        throw new Error(`Unhandled status: ${k}`);
      }
    }
    i.mutate(
      {
        id: c.id,
        status: E,
        actions: c.actions,
        edges: c.edges
      },
      {
        onSuccess: (k) => {
          l(k.automations[0]), a("idle");
        },
        onError: () => a(_)
      }
    );
  };
  let h = !1, y = !1, m = !!c && c.actions.length > 0 && (c.status === "inactive" || d), b = "default", w = c?.status === "active" ? d ? "Publish changes" : "Published" : "Publish", N = !0, g = "Turn off";
  switch (s) {
    case "publishing":
      y = !0, m = !1, N = !1, w = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(En, { color: "light", size: "sm" }),
        /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Publishing..." })
      ] });
      break;
    case "unpublishing":
      y = !0, h = !0, m = !1, N = !1, g = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(En, { color: "light", size: "sm" }),
        /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Turning off..." })
      ] });
      break;
    case "confirming unpublish":
      h = !0, m = !1, N = !1;
      break;
    case "failed to publish":
      b = "destructive", w = "Retry";
      break;
    case "failed to unpublish":
      h = !0, N = !0, g = "Retry";
      break;
  }
  const x = (E) => {
    a((_) => {
      switch (_) {
        case "idle":
        case "failed to publish":
          return E ? "confirming unpublish" : _;
        case "failed to unpublish":
          return E ? "confirming unpublish" : "idle";
        case "publishing":
          throw new Error("It should be impossible to hit this state");
        case "unpublishing":
          return _;
        case "confirming unpublish":
          return "idle";
        default: {
          const k = _;
          throw new Error(`Unexpected edit state ${k}`);
        }
      }
    });
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "fixed inset-0 z-50 flex flex-col bg-background", "data-testid": "automation-editor", children: [
    /* @__PURE__ */ p.jsx(
      cp,
      {
        automation: c,
        isLoadingAutomation: n,
        isPublishButtonEnabled: m,
        isTurnOffButtonEnabled: N,
        publishButtonChildren: w,
        publishButtonVariant: b,
        onPublish: () => u("active"),
        onTurnOff: () => a("confirming unpublish")
      }
    ),
    /* @__PURE__ */ p.jsx(
      ap,
      {
        automation: c,
        isError: o,
        isLoading: n,
        onChange: f
      }
    ),
    /* @__PURE__ */ p.jsx(
      Ea,
      {
        open: h,
        onOpenChange: x,
        children: /* @__PURE__ */ p.jsxs(Sa, { children: [
          /* @__PURE__ */ p.jsxs(Na, { children: [
            /* @__PURE__ */ p.jsx(Ca, { children: "Turn off this automation?" }),
            /* @__PURE__ */ p.jsx(Ma, { children: "It will stop running until you turn it back on." })
          ] }),
          /* @__PURE__ */ p.jsxs(ka, { children: [
            /* @__PURE__ */ p.jsx(Ia, { disabled: y, children: "Cancel" }),
            /* @__PURE__ */ p.jsx(
              Ve,
              {
                disabled: y,
                variant: s === "failed to unpublish" ? "destructive" : "default",
                onClick: () => u("inactive"),
                children: g
              }
            )
          ] })
        ] })
      }
    )
  ] });
};
export {
  Mp as default
};
//# sourceMappingURL=editor-BGsEe9be.mjs.map
