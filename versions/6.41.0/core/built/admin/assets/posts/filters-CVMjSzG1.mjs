import { p as he, u as ne, m as te, j as d, b as ie, R as D, D as at, B as st, k as ae, F as On, a as oe, c as C, o as J, x as ea, A as ta, N as na, q as ye } from "./index-ccmRG8Rd.mjs";
import { C as ra, b as nn, B as aa } from "./button-bsWyESEG.mjs";
import { b as sa, S as oa, C as ia, L as Tt } from "./search-DUatCFAA.mjs";
import { j as la, C as ca, D as ua, c as da, d as fa, e as ma } from "./skeleton-9GpF0jm6.mjs";
import { R as ha, P as pa, O as ga, C as ya, X as Nn } from "./index-DTo4Qrbc.mjs";
import { P as _e } from "./index-D7rWIA7g.mjs";
import { g as Sn, u as ba, P as Cn, b as va, d as xa, a as qe, h as et, C as tt } from "./check-BMQmbjGF.mjs";
import { u as wa, P as mt, a as ht, b as pt } from "./popover-DXQWy3ey.mjs";
import { b as ka, c as Ma, a as Da, d as Oa } from "./tooltip-ChyXZBO5.mjs";
import { P as Na } from "./plus-Dg3HDbL-.mjs";
var gt = "Switch", [Sa] = xa(gt), [Ca, Wa] = Sa(gt), Wn = he(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: a,
      defaultChecked: o,
      required: l,
      disabled: s,
      value: i = "on",
      onCheckedChange: c,
      form: u,
      ...f
    } = e, [m, h] = ne(null), b = Sn(t, (y) => h(y)), W = te(!1), N = m ? u || !!m.closest("form") : !0, [M, x] = ba({
      prop: a,
      defaultProp: o ?? !1,
      onChange: c,
      caller: gt
    });
    return /* @__PURE__ */ d.jsxs(Ca, { scope: n, checked: M, disabled: s, children: [
      /* @__PURE__ */ d.jsx(
        Cn.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": M,
          "aria-required": l,
          "data-state": Fn(M),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...f,
          ref: b,
          onClick: va(e.onClick, (y) => {
            x((O) => !O), N && (W.current = y.isPropagationStopped(), W.current || y.stopPropagation());
          })
        }
      ),
      N && /* @__PURE__ */ d.jsx(
        En,
        {
          control: m,
          bubbles: !W.current,
          name: r,
          value: i,
          checked: M,
          required: l,
          disabled: s,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Wn.displayName = gt;
var _n = "SwitchThumb", jn = he(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, a = Wa(_n, n);
    return /* @__PURE__ */ d.jsx(
      Cn.span,
      {
        "data-state": Fn(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
jn.displayName = _n;
var _a = "SwitchBubbleInput", En = he(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...a
  }, o) => {
    const l = te(null), s = Sn(l, o), i = wa(n), c = la(t);
    return ie(() => {
      const u = l.current;
      if (!u) return;
      const f = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (i !== n && h) {
        const b = new Event("click", { bubbles: r });
        h.call(u, n), u.dispatchEvent(b);
      }
    }, [i, n, r]), /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...a,
        tabIndex: -1,
        ref: s,
        style: {
          ...a.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
En.displayName = _a;
function Fn(e) {
  return e ? "checked" : "unchecked";
}
var Pn = Wn, ja = jn;
function Ea(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Fa = {}, Qe = {};
function Fe(e, t) {
  try {
    const r = (Fa[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Qe ? Qe[r] : rn(r, r.split(":"));
  } catch {
    if (e in Qe) return Qe[e];
    const n = e?.match(Pa);
    return n ? rn(e, n.slice(1)) : NaN;
  }
}
const Pa = /([+-]\d\d):?(\d\d)?/;
function rn(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), a = +(t[2] || 0) / 60;
  return Qe[e] = n * 60 + r > 0 ? n * 60 + r + a : n * 60 - r - a;
}
class De extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Fe(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Tn(this), Yt(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new De(...n, t) : new De(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new De(+this, t);
  }
  getTimezoneOffset() {
    const t = -Fe(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Yt(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new De(+new Date(t), this.timeZone);
  }
  //#endregion
}
const an = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!an.test(e)) return;
  const t = e.replace(an, "$1UTC");
  De.prototype[t] && (e.startsWith("get") ? De.prototype[e] = function() {
    return this.internal[t]();
  } : (De.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Ta(this), +this;
  }, De.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Yt(this), +this;
  }));
});
function Yt(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Fe(e.timeZone, e) * 60));
}
function Ta(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Tn(e);
}
function Tn(e) {
  const t = Fe(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const a = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), o = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), l = a - o, s = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  l && s && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + l);
  const i = a - n;
  i && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + i);
  const c = /* @__PURE__ */ new Date(+e);
  c.setUTCSeconds(0);
  const u = a > 0 ? c.getSeconds() : (c.getSeconds() - 60) % 60, f = Math.round(-(Fe(e.timeZone, e) * 60)) % 60;
  (f || u) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + f), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + f + u));
  const m = Fe(e.timeZone, e), h = m > 0 ? Math.floor(m) : Math.ceil(m), W = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, N = h !== n, M = W - i;
  if (N && M) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + M);
    const x = Fe(e.timeZone, e), y = x > 0 ? Math.floor(x) : Math.ceil(x), O = h - y;
    O && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + O), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + O));
  }
}
class se extends De {
  //#region static
  static tz(t, ...n) {
    return n.length ? new se(...n, t) : new se(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), a = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + a;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, a] = this.internal.toUTCString().split(" ");
    return `${t?.slice(0, -1)} ${r} ${n} ${a}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, a] = this.tzComponents();
    return `${t} GMT${n}${r}${a} (${Ea(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), a = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, a];
  }
  //#endregion
  withTimeZone(t) {
    return new se(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new se(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Yn = 6048e5, Ya = 864e5, sn = /* @__PURE__ */ Symbol.for("constructDateFrom");
function ee(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && sn in e ? e[sn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function L(e, t) {
  return ee(t || e, e);
}
function In(e, t, n) {
  const r = L(e, n?.in);
  return isNaN(t) ? ee(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function zn(e, t, n) {
  const r = L(e, n?.in);
  if (isNaN(t)) return ee(e, NaN);
  if (!t)
    return r;
  const a = r.getDate(), o = ee(e, r.getTime());
  o.setMonth(r.getMonth() + t + 1, 0);
  const l = o.getDate();
  return a >= l ? o : (r.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    a
  ), r);
}
let Ia = {};
function ot() {
  return Ia;
}
function He(e, t) {
  const n = ot(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = L(e, t?.in), o = a.getDay(), l = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function nt(e, t) {
  return He(e, { ...t, weekStartsOn: 1 });
}
function Bn(e, t) {
  const n = L(e, t?.in), r = n.getFullYear(), a = ee(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = nt(a), l = ee(n, 0);
  l.setFullYear(r, 0, 4), l.setHours(0, 0, 0, 0);
  const s = nt(l);
  return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function on(e) {
  const t = L(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Le(e, ...t) {
  const n = ee.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function rt(e, t) {
  const n = L(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function At(e, t, n) {
  const [r, a] = Le(
    n?.in,
    e,
    t
  ), o = rt(r), l = rt(a), s = +o - on(o), i = +l - on(l);
  return Math.round((s - i) / Ya);
}
function za(e, t) {
  const n = Bn(e, t), r = ee(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), nt(r);
}
function Ba(e, t, n) {
  return In(e, t * 7, n);
}
function Aa(e, t, n) {
  return zn(e, t * 12, n);
}
function $a(e, t) {
  let n, r = t?.in;
  return e.forEach((a) => {
    !r && typeof a == "object" && (r = ee.bind(null, a));
    const o = L(a, r);
    (!n || n < o || isNaN(+o)) && (n = o);
  }), ee(r, n || NaN);
}
function Va(e, t) {
  let n, r = t?.in;
  return e.forEach((a) => {
    !r && typeof a == "object" && (r = ee.bind(null, a));
    const o = L(a, r);
    (!n || n > o || isNaN(+o)) && (n = o);
  }), ee(r, n || NaN);
}
function qa(e, t, n) {
  const [r, a] = Le(
    n?.in,
    e,
    t
  );
  return +rt(r) == +rt(a);
}
function An(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ra(e) {
  return !(!An(e) && typeof e != "number" || isNaN(+L(e)));
}
function $n(e, t, n) {
  const [r, a] = Le(
    n?.in,
    e,
    t
  ), o = r.getFullYear() - a.getFullYear(), l = r.getMonth() - a.getMonth();
  return o * 12 + l;
}
function Ha(e, t) {
  const n = L(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Vn(e, t) {
  const [n, r] = Le(e, t.start, t.end);
  return { start: n, end: r };
}
function Ga(e, t) {
  const { start: n, end: r } = Vn(t?.in, e);
  let a = +n > +r;
  const o = a ? +n : +r, l = a ? r : n;
  l.setHours(0, 0, 0, 0), l.setDate(1);
  let s = 1;
  const i = [];
  for (; +l <= o; )
    i.push(ee(n, l)), l.setMonth(l.getMonth() + s);
  return a ? i.reverse() : i;
}
function La(e, t) {
  const n = L(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Ka(e, t) {
  const n = L(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function qn(e, t) {
  const n = L(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Ua(e, t) {
  const { start: n, end: r } = Vn(t?.in, e);
  let a = +n > +r;
  const o = a ? +n : +r, l = a ? r : n;
  l.setHours(0, 0, 0, 0), l.setMonth(0, 1);
  let s = 1;
  const i = [];
  for (; +l <= o; )
    i.push(ee(n, l)), l.setFullYear(l.getFullYear() + s);
  return a ? i.reverse() : i;
}
function Rn(e, t) {
  const n = ot(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = L(e, t?.in), o = a.getDay(), l = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + l), a.setHours(23, 59, 59, 999), a;
}
function Xa(e, t) {
  return Rn(e, { ...t, weekStartsOn: 1 });
}
const Qa = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Za = (e, t, n) => {
  let r;
  const a = Qa[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ot(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ja = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, es = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ts = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ns = {
  date: Ot({
    formats: Ja,
    defaultWidth: "full"
  }),
  time: Ot({
    formats: es,
    defaultWidth: "full"
  }),
  dateTime: Ot({
    formats: ts,
    defaultWidth: "full"
  })
}, rs = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, as = (e, t, n, r) => rs[e];
function Ke(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, s = n?.width ? String(n.width) : l;
      a = e.formattingValues[s] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, s = n?.width ? String(n.width) : e.defaultWidth;
      a = e.values[s] || e.values[l];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const ss = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, os = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, is = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
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
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, ls = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, cs = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, us = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ds = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, fs = {
  ordinalNumber: ds,
  era: Ke({
    values: ss,
    defaultWidth: "wide"
  }),
  quarter: Ke({
    values: os,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ke({
    values: is,
    defaultWidth: "wide"
  }),
  day: Ke({
    values: ls,
    defaultWidth: "wide"
  }),
  dayPeriod: Ke({
    values: cs,
    defaultWidth: "wide",
    formattingValues: us,
    defaultFormattingWidth: "wide"
  })
};
function Ue(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const l = o[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(s) ? hs(s, (f) => f.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      ms(s, (f) => f.test(l))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(i) : i, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const u = t.slice(l.length);
    return { value: c, rest: u };
  };
}
function ms(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function hs(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function ps(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let l = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    const s = t.slice(a.length);
    return { value: l, rest: s };
  };
}
const gs = /^(\d+)(th|st|nd|rd)?/i, ys = /\d+/i, bs = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, vs = {
  any: [/^b/i, /^(a|c)/i]
}, xs = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ws = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ks = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ms = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ds = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Os = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ss = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Cs = {
  ordinalNumber: ps({
    matchPattern: gs,
    parsePattern: ys,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ue({
    matchPatterns: bs,
    defaultMatchWidth: "wide",
    parsePatterns: vs,
    defaultParseWidth: "any"
  }),
  quarter: Ue({
    matchPatterns: xs,
    defaultMatchWidth: "wide",
    parsePatterns: ws,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ue({
    matchPatterns: ks,
    defaultMatchWidth: "wide",
    parsePatterns: Ms,
    defaultParseWidth: "any"
  }),
  day: Ue({
    matchPatterns: Ds,
    defaultMatchWidth: "wide",
    parsePatterns: Os,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ue({
    matchPatterns: Ns,
    defaultMatchWidth: "any",
    parsePatterns: Ss,
    defaultParseWidth: "any"
  })
}, Be = {
  code: "en-US",
  formatDistance: Za,
  formatLong: ns,
  formatRelative: as,
  localize: fs,
  match: Cs,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ws(e, t) {
  const n = L(e, t?.in);
  return At(n, qn(n)) + 1;
}
function $t(e, t) {
  const n = L(e, t?.in), r = +nt(n) - +za(n);
  return Math.round(r / Yn) + 1;
}
function Hn(e, t) {
  const n = L(e, t?.in), r = n.getFullYear(), a = ot(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, l = ee(t?.in || e, 0);
  l.setFullYear(r + 1, 0, o), l.setHours(0, 0, 0, 0);
  const s = He(l, t), i = ee(t?.in || e, 0);
  i.setFullYear(r, 0, o), i.setHours(0, 0, 0, 0);
  const c = He(i, t);
  return +n >= +s ? r + 1 : +n >= +c ? r : r - 1;
}
function _s(e, t) {
  const n = ot(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, a = Hn(e, t), o = ee(t?.in || e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), He(o, t);
}
function Vt(e, t) {
  const n = L(e, t?.in), r = +He(n, t) - +_s(n, t);
  return Math.round(r / Yn) + 1;
}
function G(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ce = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return G(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : G(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return G(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return G(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return G(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return G(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return G(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return G(a, t.length);
  }
}, Ie = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ln = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return Ce.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = Hn(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const l = o % 100;
      return G(l, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : G(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Bn(e);
    return G(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return G(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return G(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return G(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Ce.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return G(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = Vt(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : G(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = $t(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : G(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ce.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Ws(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : G(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return G(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return G(o, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return G(a, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = Ie.noon : r === 0 ? a = Ie.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = Ie.evening : r >= 12 ? a = Ie.afternoon : r >= 4 ? a = Ie.morning : a = Ie.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Ce.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ce.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : G(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : G(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ce.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ce.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ce.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return un(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ee(r);
      // Hours and minutes with `:` delimiter
      default:
        return Ee(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return un(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ee(r);
      // Hours and minutes with `:` delimiter
      default:
        return Ee(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + cn(r, ":");
      default:
        return "GMT" + Ee(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + cn(r, ":");
      default:
        return "GMT" + Ee(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return G(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return G(+e, t.length);
  }
};
function cn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + G(o, 2);
}
function un(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + G(Math.abs(e) / 60, 2) : Ee(e, t);
}
function Ee(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = G(Math.trunc(r / 60), 2), o = G(r % 60, 2);
  return n + a + t + o;
}
const dn = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, Gn = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, js = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return dn(e, t);
  let o;
  switch (r) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", dn(r, t)).replace("{{time}}", Gn(a, t));
}, Es = {
  p: Gn,
  P: js
}, Fs = /^D+$/, Ps = /^Y+$/, Ts = ["D", "DD", "YY", "YYYY"];
function Ys(e) {
  return Fs.test(e);
}
function Is(e) {
  return Ps.test(e);
}
function zs(e, t, n) {
  const r = Bs(e, t, n);
  if (console.warn(r), Ts.includes(e)) throw new RangeError(r);
}
function Bs(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const As = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $s = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Vs = /^'([^]*?)'?$/, qs = /''/g, Rs = /[a-zA-Z]/;
function Ze(e, t, n) {
  const r = ot(), a = n?.locale ?? r.locale ?? Be, o = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, l = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = L(e, n?.in);
  if (!Ra(s))
    throw new RangeError("Invalid time value");
  let i = t.match($s).map((u) => {
    const f = u[0];
    if (f === "p" || f === "P") {
      const m = Es[f];
      return m(u, a.formatLong);
    }
    return u;
  }).join("").match(As).map((u) => {
    if (u === "''")
      return { isToken: !1, value: "'" };
    const f = u[0];
    if (f === "'")
      return { isToken: !1, value: Hs(u) };
    if (ln[f])
      return { isToken: !0, value: u };
    if (f.match(Rs))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: u };
  });
  a.localize.preprocessor && (i = a.localize.preprocessor(s, i));
  const c = {
    firstWeekContainsDate: o,
    weekStartsOn: l,
    locale: a
  };
  return i.map((u) => {
    if (!u.isToken) return u.value;
    const f = u.value;
    (!n?.useAdditionalWeekYearTokens && Is(f) || !n?.useAdditionalDayOfYearTokens && Ys(f)) && zs(f, t, String(e));
    const m = ln[f[0]];
    return m(s, f, a.localize, c);
  }).join("");
}
function Hs(e) {
  const t = e.match(Vs);
  return t ? t[1].replace(qs, "'") : e;
}
function Gs(e, t) {
  const n = L(e, t?.in), r = n.getFullYear(), a = n.getMonth(), o = ee(n, 0);
  return o.setFullYear(r, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Ls(e, t) {
  return L(e, t?.in).getMonth();
}
function Ks(e, t) {
  return L(e, t?.in).getFullYear();
}
function Us(e, t) {
  return +L(e) > +L(t);
}
function Xs(e, t) {
  return +L(e) < +L(t);
}
function Qs(e, t, n) {
  const [r, a] = Le(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === a.getFullYear() && r.getMonth() === a.getMonth();
}
function Zs(e, t, n) {
  const [r, a] = Le(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === a.getFullYear();
}
function Js(e, t, n) {
  const r = L(e, n?.in), a = r.getFullYear(), o = r.getDate(), l = ee(e, 0);
  l.setFullYear(a, t, 15), l.setHours(0, 0, 0, 0);
  const s = Gs(l);
  return r.setMonth(t, Math.min(o, s)), r;
}
function eo(e, t, n) {
  const r = L(e, n?.in);
  return isNaN(+r) ? ee(e, NaN) : (r.setFullYear(t), r);
}
const fn = 5, to = 4;
function no(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, a = t.addDays(e, -r + 1), o = t.addDays(a, fn * 7 - 1);
  return t.getMonth(e) === t.getMonth(o) ? fn : to;
}
function Ln(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function ro(e, t) {
  const n = Ln(e, t), r = no(e, t);
  return t.addDays(n, r * 7 - 1);
}
const Kn = {
  ...Be,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let a;
      r && typeof r.format == "function" ? a = r.format.bind(r) : a = (l, s) => Ze(l, s, { locale: Be, ...n });
      let o = a(e, "PPPP");
      return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (a, o) => Ze(a, o, { locale: Be, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let a;
      r && typeof r.format == "function" ? a = r.format.bind(r) : a = (l, s) => Ze(l, s, { locale: Be, ...n });
      let o = a(e, "PPPP");
      return t?.today && (o = `Today, ${o}`), o;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (a, o) => Ze(a, o, { locale: Be, ...t }), r(e, "cccc");
    }
  }
};
class me {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? se.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, a, o) => this.overrides?.newDate ? this.overrides.newDate(r, a, o) : this.options.timeZone ? new se(r, a, o, this.options.timeZone) : new Date(r, a, o), this.addDays = (r, a) => this.overrides?.addDays ? this.overrides.addDays(r, a) : In(r, a), this.addMonths = (r, a) => this.overrides?.addMonths ? this.overrides.addMonths(r, a) : zn(r, a), this.addWeeks = (r, a) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, a) : Ba(r, a), this.addYears = (r, a) => this.overrides?.addYears ? this.overrides.addYears(r, a) : Aa(r, a), this.differenceInCalendarDays = (r, a) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, a) : At(r, a), this.differenceInCalendarMonths = (r, a) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, a) : $n(r, a), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Ga(r), this.eachYearOfInterval = (r) => {
      const a = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Ua(r), o = new Set(a.map((s) => this.getYear(s)));
      if (o.size === a.length)
        return a;
      const l = [];
      return o.forEach((s) => {
        l.push(new Date(s, 0, 1));
      }), l;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : ro(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Xa(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : Ha(r), this.endOfWeek = (r, a) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, a) : Rn(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Ka(r), this.format = (r, a, o) => {
      const l = this.overrides?.format ? this.overrides.format(r, a, this.options) : Ze(r, a, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(l) : l;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : $t(r), this.getMonth = (r, a) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : Ls(r, this.options), this.getYear = (r, a) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : Ks(r, this.options), this.getWeek = (r, a) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : Vt(r, this.options), this.isAfter = (r, a) => this.overrides?.isAfter ? this.overrides.isAfter(r, a) : Us(r, a), this.isBefore = (r, a) => this.overrides?.isBefore ? this.overrides.isBefore(r, a) : Xs(r, a), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : An(r), this.isSameDay = (r, a) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, a) : qa(r, a), this.isSameMonth = (r, a) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, a) : Qs(r, a), this.isSameYear = (r, a) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, a) : Zs(r, a), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : $a(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : Va(r), this.setMonth = (r, a) => this.overrides?.setMonth ? this.overrides.setMonth(r, a) : Js(r, a), this.setYear = (r, a) => this.overrides?.setYear ? this.overrides.setYear(r, a) : eo(r, a), this.startOfBroadcastWeek = (r, a) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Ln(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : rt(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : nt(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : La(r), this.startOfWeek = (r, a) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : He(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : qn(r), this.options = { locale: Kn, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let a = 0; a < 10; a++)
      r[a.toString()] = n.format(a);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const t = this.options.locale?.code;
    return t && me.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: a } = this.options, o = n?.code;
    if (o && me.yearFirstLocales.has(o))
      try {
        return new Intl.DateTimeFormat(o, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: a
        }).format(t);
      } catch {
      }
    const l = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, l);
  }
}
me.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const Oe = new me();
class Un {
  constructor(t, n, r = Oe) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r, this.isoDate = r.format(t, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(t, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class ao {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class so {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function oo(e) {
  return D.createElement("button", { ...e });
}
function io(e) {
  return D.createElement("span", { ...e });
}
function lo(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    D.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && D.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && D.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && D.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && D.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function co(e) {
  const { day: t, modifiers: n, ...r } = e;
  return D.createElement("td", { ...r });
}
function uo(e) {
  const { day: t, modifiers: n, ...r } = e, a = D.useRef(null);
  return D.useEffect(() => {
    n.focused && a.current?.focus();
  }, [n.focused]), D.createElement("button", { ref: a, ...r });
}
var j;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(j || (j = {}));
var U;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(U || (U = {}));
var xe;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(xe || (xe = {}));
var fe;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(fe || (fe = {}));
function fo(e) {
  const { options: t, className: n, components: r, classNames: a, ...o } = e, l = [a[j.Dropdown], n].join(" "), s = t?.find(({ value: i }) => i === o.value);
  return D.createElement(
    "span",
    { "data-disabled": o.disabled, className: a[j.DropdownRoot] },
    D.createElement(r.Select, { className: l, ...o }, t?.map(({ value: i, label: c, disabled: u }) => D.createElement(r.Option, { key: i, value: i, disabled: u }, c))),
    D.createElement(
      "span",
      { className: a[j.CaptionLabel], "aria-hidden": !0 },
      s?.label,
      D.createElement(r.Chevron, { orientation: "down", size: 18, className: a[j.Chevron] })
    )
  );
}
function mo(e) {
  return D.createElement("div", { ...e });
}
function ho(e) {
  return D.createElement("div", { ...e });
}
function po(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return D.createElement("div", { ...r }, e.children);
}
function go(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return D.createElement("div", { ...r });
}
function yo(e) {
  return D.createElement("table", { ...e });
}
function bo(e) {
  return D.createElement("div", { ...e });
}
const Xn = at(void 0);
function it() {
  const e = st(Xn);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function vo(e) {
  const { components: t } = it();
  return D.createElement(t.Dropdown, { ...e });
}
function xo(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: a, ...o } = e, { components: l, classNames: s, labels: { labelPrevious: i, labelNext: c } } = it(), u = ae((m) => {
    a && n?.(m);
  }, [a, n]), f = ae((m) => {
    r && t?.(m);
  }, [r, t]);
  return D.createElement(
    "nav",
    { ...o },
    D.createElement(
      l.PreviousMonthButton,
      { type: "button", className: s[j.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": i(r), onClick: f },
      D.createElement(l.Chevron, { disabled: r ? void 0 : !0, className: s[j.Chevron], orientation: "left" })
    ),
    D.createElement(
      l.NextMonthButton,
      { type: "button", className: s[j.NextMonthButton], tabIndex: a ? void 0 : -1, "aria-disabled": a ? void 0 : !0, "aria-label": c(a), onClick: u },
      D.createElement(l.Chevron, { disabled: a ? void 0 : !0, orientation: "right", className: s[j.Chevron] })
    )
  );
}
function wo(e) {
  const { components: t } = it();
  return D.createElement(t.Button, { ...e });
}
function ko(e) {
  return D.createElement("option", { ...e });
}
function Mo(e) {
  const { components: t } = it();
  return D.createElement(t.Button, { ...e });
}
function Do(e) {
  const { rootRef: t, ...n } = e;
  return D.createElement("div", { ...n, ref: t });
}
function Oo(e) {
  return D.createElement("select", { ...e });
}
function No(e) {
  const { week: t, ...n } = e;
  return D.createElement("tr", { ...n });
}
function So(e) {
  return D.createElement("th", { ...e });
}
function Co(e) {
  return D.createElement(
    "thead",
    { "aria-hidden": !0 },
    D.createElement("tr", { ...e })
  );
}
function Wo(e) {
  const { week: t, ...n } = e;
  return D.createElement("th", { ...n });
}
function _o(e) {
  return D.createElement("th", { ...e });
}
function jo(e) {
  return D.createElement("tbody", { ...e });
}
function Eo(e) {
  const { components: t } = it();
  return D.createElement(t.Dropdown, { ...e });
}
const Fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: oo,
  CaptionLabel: io,
  Chevron: lo,
  Day: co,
  DayButton: uo,
  Dropdown: fo,
  DropdownNav: mo,
  Footer: ho,
  Month: po,
  MonthCaption: go,
  MonthGrid: yo,
  Months: bo,
  MonthsDropdown: vo,
  Nav: xo,
  NextMonthButton: wo,
  Option: ko,
  PreviousMonthButton: Mo,
  Root: Do,
  Select: Oo,
  Week: No,
  WeekNumber: Wo,
  WeekNumberHeader: _o,
  Weekday: So,
  Weekdays: Co,
  Weeks: jo,
  YearsDropdown: Eo
}, Symbol.toStringTag, { value: "Module" }));
function Ne(e, t, n = !1, r = Oe) {
  let { from: a, to: o } = e;
  const { differenceInCalendarDays: l, isSameDay: s } = r;
  return a && o ? (l(o, a) < 0 && ([a, o] = [o, a]), l(t, a) >= (n ? 1 : 0) && l(o, t) >= (n ? 1 : 0)) : !n && o ? s(o, t) : !n && a ? s(a, t) : !1;
}
function qt(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function yt(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Rt(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Ht(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Qn(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Zn(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Se(e, t, n = Oe) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: a, differenceInCalendarDays: o, isAfter: l } = n;
  return r.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (n.isDate(s))
      return a(e, s);
    if (Zn(s, n))
      return s.some((i) => a(e, i));
    if (yt(s))
      return Ne(s, e, !1, n);
    if (Qn(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (qt(s)) {
      const i = o(s.before, e), c = o(s.after, e), u = i > 0, f = c < 0;
      return l(s.before, s.after) ? f && u : u || f;
    }
    return Rt(s) ? o(e, s.after) > 0 : Ht(s) ? o(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function Po(e, t, n, r, a) {
  const { disabled: o, hidden: l, modifiers: s, showOutsideDays: i, broadcastCalendar: c, today: u = a.today() } = t, { isSameDay: f, isSameMonth: m, startOfMonth: h, isBefore: b, endOfMonth: W, isAfter: N } = a, M = n && h(n), x = r && W(r), y = {
    [U.focused]: [],
    [U.outside]: [],
    [U.disabled]: [],
    [U.hidden]: [],
    [U.today]: []
  }, O = {};
  for (const v of e) {
    const { date: g, displayMonth: E } = v, B = !!(E && !m(g, E)), R = !!(M && b(g, M)), S = !!(x && N(g, x)), V = !!(o && Se(g, o, a)), X = !!(l && Se(g, l, a)) || R || S || // Broadcast calendar will show outside days as default
    !c && !i && B || c && i === !1 && B, Q = f(g, u);
    B && y.outside.push(v), V && y.disabled.push(v), X && y.hidden.push(v), Q && y.today.push(v), s && Object.keys(s).forEach((K) => {
      const le = s?.[K];
      le && Se(g, le, a) && (O[K] ? O[K].push(v) : O[K] = [v]);
    });
  }
  return (v) => {
    const g = {
      [U.focused]: !1,
      [U.disabled]: !1,
      [U.hidden]: !1,
      [U.outside]: !1,
      [U.today]: !1
    }, E = {};
    for (const B in y) {
      const R = y[B];
      g[B] = R.some((S) => S === v);
    }
    for (const B in O)
      E[B] = O[B].some((R) => R === v);
    return {
      ...g,
      // custom modifiers should override all the previous ones
      ...E
    };
  };
}
function To(e, t, n = {}) {
  return Object.entries(e).filter(([, a]) => a === !0).reduce((a, [o]) => (n[o] ? a.push(n[o]) : t[U[o]] ? a.push(t[U[o]]) : t[xe[o]] && a.push(t[xe[o]]), a), [t[j.Day]]);
}
function Yo(e) {
  return {
    ...Fo,
    ...e
  };
}
function Io(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function Gt() {
  const e = {};
  for (const t in j)
    e[j[t]] = `rdp-${j[t]}`;
  for (const t in U)
    e[U[t]] = `rdp-${U[t]}`;
  for (const t in xe)
    e[xe[t]] = `rdp-${xe[t]}`;
  for (const t in fe)
    e[fe[t]] = `rdp-${fe[t]}`;
  return e;
}
function Jn(e, t, n) {
  return (n ?? new me(t)).formatMonthYear(e);
}
const zo = Jn;
function Bo(e, t, n) {
  return (n ?? new me(t)).format(e, "d");
}
function Ao(e, t = Oe) {
  return t.format(e, "LLLL");
}
function $o(e, t, n) {
  return (n ?? new me(t)).format(e, "cccccc");
}
function Vo(e, t = Oe) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function qo() {
  return "";
}
function er(e, t = Oe) {
  return t.format(e, "yyyy");
}
const Ro = er, Ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Jn,
  formatDay: Bo,
  formatMonthCaption: zo,
  formatMonthDropdown: Ao,
  formatWeekNumber: Vo,
  formatWeekNumberHeader: qo,
  formatWeekdayName: $o,
  formatYearCaption: Ro,
  formatYearDropdown: er
}, Symbol.toStringTag, { value: "Module" }));
function Go(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...Ho,
    ...e
  };
}
function Lt(e, t, n, r) {
  let a = (r ?? new me(n)).format(e, "PPPP");
  return t.today && (a = `Today, ${a}`), t.selected && (a = `${a}, selected`), a;
}
const Lo = Lt;
function Kt(e, t, n) {
  return (n ?? new me(t)).formatMonthYear(e);
}
const Ko = Kt;
function tr(e, t, n, r) {
  let a = (r ?? new me(n)).format(e, "PPPP");
  return t?.today && (a = `Today, ${a}`), a;
}
function nr(e) {
  return "Choose the Month";
}
function rr() {
  return "";
}
const Uo = "Go to the Next Month";
function ar(e, t) {
  return Uo;
}
function sr(e) {
  return "Go to the Previous Month";
}
function or(e, t, n) {
  return (n ?? new me(t)).format(e, "cccc");
}
function ir(e, t) {
  return `Week ${e}`;
}
function lr(e) {
  return "Week Number";
}
function cr(e) {
  return "Choose the Year";
}
const Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Ko,
  labelDay: Lo,
  labelDayButton: Lt,
  labelGrid: Kt,
  labelGridcell: tr,
  labelMonthDropdown: nr,
  labelNav: rr,
  labelNext: ar,
  labelPrevious: sr,
  labelWeekNumber: ir,
  labelWeekNumberHeader: lr,
  labelWeekday: or,
  labelYearDropdown: cr
}, Symbol.toStringTag, { value: "Module" })), ve = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function Qo(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...Xo,
    ...e ?? {},
    labelDayButton: ve(Lt, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: ve(nr, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: ve(ar, e?.labelNext, n.labelNext),
    labelPrevious: ve(sr, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: ve(ir, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: ve(cr, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: ve(Kt, e?.labelGrid, n.labelGrid),
    labelGridcell: ve(tr, e?.labelGridcell, n.labelGridcell),
    labelNav: ve(rr, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: ve(lr, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: ve(or, e?.labelWeekday, n.labelWeekday)
  };
}
function Zo(e, t, n, r, a) {
  const { startOfMonth: o, startOfYear: l, endOfYear: s, eachMonthOfInterval: i, getMonth: c } = a;
  return i({
    start: l(e),
    end: s(e)
  }).map((m) => {
    const h = r.formatMonthDropdown(m, a), b = c(m), W = t && m < o(t) || n && m > o(n) || !1;
    return { value: b, label: h, disabled: W };
  });
}
function Jo(e, t = {}, n = {}) {
  let r = { ...t?.[j.Day] };
  return Object.entries(e).filter(([, a]) => a === !0).forEach(([a]) => {
    r = {
      ...r,
      ...n?.[a]
    };
  }), r;
}
function ei(e, t, n, r) {
  const a = r ?? e.today(), o = n ? e.startOfBroadcastWeek(a, e) : t ? e.startOfISOWeek(a) : e.startOfWeek(a), l = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    l.push(i);
  }
  return l;
}
function ti(e, t, n, r, a = !1) {
  if (!e || !t)
    return;
  const { startOfYear: o, endOfYear: l, eachYearOfInterval: s, getYear: i } = r, c = o(e), u = l(t), f = s({ start: c, end: u });
  return a && f.reverse(), f.map((m) => {
    const h = n.formatYearDropdown(m, r);
    return {
      value: i(m),
      label: h,
      disabled: !1
    };
  });
}
function ni(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, a = n ?? r?.options?.weekStartsOn ?? 0, o = (s) => {
    const i = typeof s == "number" || typeof s == "string" ? new Date(s) : s;
    return new se(i.getFullYear(), i.getMonth(), i.getDate(), 12, 0, 0, e);
  }, l = (s) => {
    const i = o(s);
    return new Date(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => o(se.tz(e)),
    newDate: (s, i, c) => new se(s, i, c, 12, 0, 0, e),
    startOfDay: (s) => o(s),
    startOfWeek: (s, i) => {
      const c = o(s), u = i?.weekStartsOn ?? a, f = (c.getDay() - u + 7) % 7;
      return c.setDate(c.getDate() - f), c;
    },
    startOfISOWeek: (s) => {
      const i = o(s), c = (i.getDay() - 1 + 7) % 7;
      return i.setDate(i.getDate() - c), i;
    },
    startOfMonth: (s) => {
      const i = o(s);
      return i.setDate(1), i;
    },
    startOfYear: (s) => {
      const i = o(s);
      return i.setMonth(0, 1), i;
    },
    endOfWeek: (s, i) => {
      const c = o(s), m = (((i?.weekStartsOn ?? a) + 6) % 7 - c.getDay() + 7) % 7;
      return c.setDate(c.getDate() + m), c;
    },
    endOfISOWeek: (s) => {
      const i = o(s), c = (7 - i.getDay()) % 7;
      return i.setDate(i.getDate() + c), i;
    },
    endOfMonth: (s) => {
      const i = o(s);
      return i.setMonth(i.getMonth() + 1, 0), i;
    },
    endOfYear: (s) => {
      const i = o(s);
      return i.setMonth(11, 31), i;
    },
    eachMonthOfInterval: (s) => {
      const i = o(s.start), c = o(s.end), u = [], f = new se(i.getFullYear(), i.getMonth(), 1, 12, 0, 0, e), m = c.getFullYear() * 12 + c.getMonth();
      for (; f.getFullYear() * 12 + f.getMonth() <= m; )
        u.push(new se(f, e)), f.setMonth(f.getMonth() + 1, 1);
      return u;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (s, i) => {
      const c = o(s);
      return c.setDate(c.getDate() + i), c;
    },
    addWeeks: (s, i) => {
      const c = o(s);
      return c.setDate(c.getDate() + i * 7), c;
    },
    addMonths: (s, i) => {
      const c = o(s);
      return c.setMonth(c.getMonth() + i), c;
    },
    addYears: (s, i) => {
      const c = o(s);
      return c.setFullYear(c.getFullYear() + i), c;
    },
    eachYearOfInterval: (s) => {
      const i = o(s.start), c = o(s.end), u = [], f = new se(i.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; f.getFullYear() <= c.getFullYear(); )
        u.push(new se(f, e)), f.setFullYear(f.getFullYear() + 1, 0, 1);
      return u;
    },
    getWeek: (s, i) => {
      const c = l(s);
      return Vt(c, {
        weekStartsOn: i?.weekStartsOn ?? a,
        firstWeekContainsDate: i?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (s) => {
      const i = l(s);
      return $t(i);
    },
    differenceInCalendarDays: (s, i) => {
      const c = l(s), u = l(i);
      return At(c, u);
    },
    differenceInCalendarMonths: (s, i) => {
      const c = l(s), u = l(i);
      return $n(c, u);
    }
  };
}
const lt = (e) => e instanceof HTMLElement ? e : null, Nt = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], ri = (e) => lt(e.querySelector("[data-animated-month]")), St = (e) => lt(e.querySelector("[data-animated-caption]")), Ct = (e) => lt(e.querySelector("[data-animated-weeks]")), ai = (e) => lt(e.querySelector("[data-animated-nav]")), si = (e) => lt(e.querySelector("[data-animated-weekdays]"));
function oi(e, t, { classNames: n, months: r, focused: a, dateLib: o }) {
  const l = te(null), s = te(r), i = te(!1);
  On(() => {
    const c = s.current;
    if (s.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || c.length === 0 || r.length !== c.length)
      return;
    const u = o.isSameMonth(r[0].date, c[0].date), f = o.isAfter(r[0].date, c[0].date), m = f ? n[fe.caption_after_enter] : n[fe.caption_before_enter], h = f ? n[fe.weeks_after_enter] : n[fe.weeks_before_enter], b = l.current, W = e.current.cloneNode(!0);
    if (W instanceof HTMLElement ? (Nt(W).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const O = ri(y);
      O && y.contains(O) && y.removeChild(O);
      const v = St(y);
      v && v.classList.remove(m);
      const g = Ct(y);
      g && g.classList.remove(h);
    }), l.current = W) : l.current = null, i.current || u || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    a)
      return;
    const N = b instanceof HTMLElement ? Nt(b) : [], M = Nt(e.current);
    if (M?.every((x) => x instanceof HTMLElement) && N && N.every((x) => x instanceof HTMLElement)) {
      i.current = !0, e.current.style.isolation = "isolate";
      const x = ai(e.current);
      x && (x.style.zIndex = "1"), M.forEach((y, O) => {
        const v = N[O];
        if (!v)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const g = St(y);
        g && g.classList.add(m);
        const E = Ct(y);
        E && E.classList.add(h);
        const B = () => {
          i.current = !1, e.current && (e.current.style.isolation = ""), x && (x.style.zIndex = ""), g && g.classList.remove(m), E && E.classList.remove(h), y.style.position = "", y.style.overflow = "", y.contains(v) && y.removeChild(v);
        };
        v.style.pointerEvents = "none", v.style.position = "absolute", v.style.overflow = "hidden", v.setAttribute("aria-hidden", "true");
        const R = si(v);
        R && (R.style.opacity = "0");
        const S = St(v);
        S && (S.classList.add(f ? n[fe.caption_before_exit] : n[fe.caption_after_exit]), S.addEventListener("animationend", B));
        const V = Ct(v);
        V && V.classList.add(f ? n[fe.weeks_before_exit] : n[fe.weeks_after_exit]), y.insertBefore(v, y.firstChild);
      });
    }
  });
}
function ii(e, t, n, r) {
  const a = e[0], o = e[e.length - 1], { ISOWeek: l, fixedWeeks: s, broadcastCalendar: i } = n ?? {}, { addDays: c, differenceInCalendarDays: u, differenceInCalendarMonths: f, endOfBroadcastWeek: m, endOfISOWeek: h, endOfMonth: b, endOfWeek: W, isAfter: N, startOfBroadcastWeek: M, startOfISOWeek: x, startOfWeek: y } = r, O = i ? M(a, r) : l ? x(a) : y(a), v = i ? m(o) : l ? h(b(o)) : W(b(o)), g = t && (i ? m(t) : l ? h(t) : W(t)), E = g && N(v, g) ? g : v, B = u(E, O), R = f(o, a) + 1, S = [];
  for (let Q = 0; Q <= B; Q++) {
    const K = c(O, Q);
    S.push(K);
  }
  const X = (i ? 35 : 42) * R;
  if (s && S.length < X) {
    const Q = X - S.length;
    for (let K = 0; K < Q; K++) {
      const le = c(S[S.length - 1], 1);
      S.push(le);
    }
  }
  return S;
}
function li(e) {
  const t = [];
  return e.reduce((n, r) => {
    const a = r.weeks.reduce((o, l) => o.concat(l.days.slice()), t.slice());
    return n.concat(a.slice());
  }, t.slice());
}
function ci(e, t, n, r) {
  const { numberOfMonths: a = 1 } = n, o = [];
  for (let l = 0; l < a; l++) {
    const s = r.addMonths(e, l);
    if (t && s > t)
      break;
    o.push(s);
  }
  return o;
}
function mn(e, t, n, r) {
  const { month: a, defaultMonth: o, today: l = r.today(), numberOfMonths: s = 1 } = e;
  let i = a || o || l;
  const { differenceInCalendarMonths: c, addMonths: u, startOfMonth: f } = r;
  if (n && c(n, i) < s - 1) {
    const m = -1 * (s - 1);
    i = u(n, m);
  }
  return t && c(i, t) < 0 && (i = t), f(i);
}
function ui(e, t, n, r) {
  const { addDays: a, endOfBroadcastWeek: o, endOfISOWeek: l, endOfMonth: s, endOfWeek: i, getISOWeek: c, getWeek: u, startOfBroadcastWeek: f, startOfISOWeek: m, startOfWeek: h } = r, b = e.reduce((W, N) => {
    const M = n.broadcastCalendar ? f(N, r) : n.ISOWeek ? m(N) : h(N), x = n.broadcastCalendar ? o(N) : n.ISOWeek ? l(s(N)) : i(s(N)), y = t.filter((E) => E >= M && E <= x), O = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < O) {
      const E = t.filter((B) => {
        const R = O - y.length;
        return B > x && B <= a(x, R);
      });
      y.push(...E);
    }
    const v = y.reduce((E, B) => {
      const R = n.ISOWeek ? c(B) : u(B), S = E.find((X) => X.weekNumber === R), V = new Un(B, N, r);
      return S ? S.days.push(V) : E.push(new so(R, [V])), E;
    }, []), g = new ao(N, v);
    return W.push(g), W;
  }, []);
  return n.reverseMonths ? b.reverse() : b;
}
function di(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: a, startOfDay: o, startOfMonth: l, endOfMonth: s, addYears: i, endOfYear: c, newDate: u, today: f } = t, { fromYear: m, toYear: h, fromMonth: b, toMonth: W } = e;
  !n && b && (n = b), !n && m && (n = t.newDate(m, 0, 1)), !r && W && (r = W), !r && h && (r = u(h, 11, 31));
  const N = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = l(n) : m ? n = u(m, 0, 1) : !n && N && (n = a(i(e.today ?? f(), -100))), r ? r = s(r) : h ? r = u(h, 11, 31) : !r && N && (r = c(e.today ?? f())), [
    n && o(n),
    r && o(r)
  ];
}
function fi(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: a, numberOfMonths: o = 1 } = n, { startOfMonth: l, addMonths: s, differenceInCalendarMonths: i } = r, c = a ? o : 1, u = l(e);
  if (!t)
    return s(u, c);
  if (!(i(t, e) < o))
    return s(u, c);
}
function mi(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: a, numberOfMonths: o } = n, { startOfMonth: l, addMonths: s, differenceInCalendarMonths: i } = r, c = a ? o ?? 1 : 1, u = l(e);
  if (!t)
    return s(u, -c);
  if (!(i(u, t) <= 0))
    return s(u, -c);
}
function hi(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function bt(e, t) {
  const [n, r] = ne(e);
  return [t === void 0 ? n : t, r];
}
function pi(e, t) {
  const [n, r] = di(e, t), { startOfMonth: a, endOfMonth: o } = t, l = mn(e, n, r, t), [s, i] = bt(
    l,
    // initialMonth is always computed from props.month if provided
    e.month ? l : void 0
  );
  ie(() => {
    const O = mn(e, n, r, t);
    i(O);
  }, [e.timeZone]);
  const { months: c, weeks: u, days: f, previousMonth: m, nextMonth: h } = oe(() => {
    const O = ci(s, r, { numberOfMonths: e.numberOfMonths }, t), v = ii(O, e.endMonth ? o(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), g = ui(O, v, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), E = hi(g), B = li(g), R = mi(s, n, e, t), S = fi(s, r, e, t);
    return {
      months: g,
      weeks: E,
      days: B,
      previousMonth: R,
      nextMonth: S
    };
  }, [
    t,
    s.getTime(),
    r?.getTime(),
    n?.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    e.endMonth?.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: b, onMonthChange: W } = e, N = (O) => u.some((v) => v.days.some((g) => g.isEqualTo(O))), M = (O) => {
    if (b)
      return;
    let v = a(O);
    n && v < a(n) && (v = a(n)), r && v > a(r) && (v = a(r)), i(v), W?.(v);
  };
  return {
    months: c,
    weeks: u,
    days: f,
    navStart: n,
    navEnd: r,
    previousMonth: m,
    nextMonth: h,
    goToMonth: M,
    goToDay: (O) => {
      N(O) || M(O.date);
    }
  };
}
var Me;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Me || (Me = {}));
function hn(e) {
  return !e[U.disabled] && !e[U.hidden] && !e[U.outside];
}
function gi(e, t, n, r) {
  let a, o = -1;
  for (const l of e) {
    const s = t(l);
    hn(s) && (s[U.focused] && o < Me.FocusedModifier ? (a = l, o = Me.FocusedModifier) : r?.isEqualTo(l) && o < Me.LastFocused ? (a = l, o = Me.LastFocused) : n(l.date) && o < Me.Selected ? (a = l, o = Me.Selected) : s[U.today] && o < Me.Today && (a = l, o = Me.Today));
  }
  return a || (a = e.find((l) => hn(t(l)))), a;
}
function yi(e, t, n, r, a, o, l) {
  const { ISOWeek: s, broadcastCalendar: i } = o, { addDays: c, addMonths: u, addWeeks: f, addYears: m, endOfBroadcastWeek: h, endOfISOWeek: b, endOfWeek: W, max: N, min: M, startOfBroadcastWeek: x, startOfISOWeek: y, startOfWeek: O } = l;
  let g = {
    day: c,
    week: f,
    month: u,
    year: m,
    startOfWeek: (E) => i ? x(E, l) : s ? y(E) : O(E),
    endOfWeek: (E) => i ? h(E) : s ? b(E) : W(E)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? g = N([r, g]) : t === "after" && a && (g = M([a, g])), g;
}
function ur(e, t, n, r, a, o, l, s = 0) {
  if (s > 365)
    return;
  const i = yi(e, t, n.date, r, a, o, l), c = !!(o.disabled && Se(i, o.disabled, l)), u = !!(o.hidden && Se(i, o.hidden, l)), f = i, m = new Un(i, f, l);
  return !c && !u ? m : ur(e, t, m, r, a, o, l, s + 1);
}
function bi(e, t, n, r, a) {
  const { autoFocus: o } = e, [l, s] = ne(), i = gi(t.days, n, r || (() => !1), l), [c, u] = ne(o ? i : void 0);
  return {
    isFocusTarget: (W) => !!i?.isEqualTo(W),
    setFocused: u,
    focused: c,
    blur: () => {
      s(c), u(void 0);
    },
    moveFocus: (W, N) => {
      if (!c)
        return;
      const M = ur(W, N, c, t.navStart, t.navEnd, e, a);
      M && (e.disableNavigation && !t.days.some((y) => y.isEqualTo(M)) || (t.goToDay(M), u(M)));
    }
  };
}
function vi(e, t) {
  const { selected: n, required: r, onSelect: a } = e, [o, l] = bt(n, a ? n : void 0), s = a ? n : o, { isSameDay: i } = t, c = (h) => s?.some((b) => i(b, h)) ?? !1, { min: u, max: f } = e;
  return {
    selected: s,
    select: (h, b, W) => {
      let N = [...s ?? []];
      if (c(h)) {
        if (s?.length === u || r && s?.length === 1)
          return;
        N = s?.filter((M) => !i(M, h));
      } else
        s?.length === f ? N = [h] : N = [...N, h];
      return a || l(N), a?.(N, h, b, W), N;
    },
    isSelected: c
  };
}
function xi(e, t, n = 0, r = 0, a = !1, o = Oe) {
  const { from: l, to: s } = t || {}, { isSameDay: i, isAfter: c, isBefore: u } = o;
  let f;
  if (!l && !s)
    f = { from: e, to: n > 0 ? void 0 : e };
  else if (l && !s)
    i(l, e) ? n === 0 ? f = { from: l, to: e } : a ? f = { from: l, to: void 0 } : f = void 0 : u(e, l) ? f = { from: e, to: l } : f = { from: l, to: e };
  else if (l && s)
    if (i(l, e) && i(s, e))
      a ? f = { from: l, to: s } : f = void 0;
    else if (i(l, e))
      f = { from: l, to: n > 0 ? void 0 : e };
    else if (i(s, e))
      f = { from: e, to: n > 0 ? void 0 : e };
    else if (u(e, l))
      f = { from: e, to: s };
    else if (c(e, l))
      f = { from: l, to: e };
    else if (c(e, s))
      f = { from: l, to: e };
    else
      throw new Error("Invalid range");
  if (f?.from && f?.to) {
    const m = o.differenceInCalendarDays(f.to, f.from);
    r > 0 && m > r ? f = { from: e, to: void 0 } : n > 1 && m < n && (f = { from: e, to: void 0 });
  }
  return f;
}
function wi(e, t, n = Oe) {
  const r = Array.isArray(t) ? t : [t];
  let a = e.from;
  const o = n.differenceInCalendarDays(e.to, e.from), l = Math.min(o, 6);
  for (let s = 0; s <= l; s++) {
    if (r.includes(a.getDay()))
      return !0;
    a = n.addDays(a, 1);
  }
  return !1;
}
function pn(e, t, n = Oe) {
  return Ne(e, t.from, !1, n) || Ne(e, t.to, !1, n) || Ne(t, e.from, !1, n) || Ne(t, e.to, !1, n);
}
function ki(e, t, n = Oe) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : n.isDate(s) ? Ne(e, s, !1, n) : Zn(s, n) ? s.some((i) => Ne(e, i, !1, n)) : yt(s) ? s.from && s.to ? pn(e, { from: s.from, to: s.to }, n) : !1 : Qn(s) ? wi(e, s.dayOfWeek, n) : qt(s) ? n.isAfter(s.before, s.after) ? pn(e, {
    from: n.addDays(s.after, 1),
    to: n.addDays(s.before, -1)
  }, n) : Se(e.from, s, n) || Se(e.to, s, n) : Rt(s) || Ht(s) ? Se(e.from, s, n) || Se(e.to, s, n) : !1))
    return !0;
  const l = r.filter((s) => typeof s == "function");
  if (l.length) {
    let s = e.from;
    const i = n.differenceInCalendarDays(e.to, e.from);
    for (let c = 0; c <= i; c++) {
      if (l.some((u) => u(s)))
        return !0;
      s = n.addDays(s, 1);
    }
  }
  return !1;
}
function Mi(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: a, selected: o, required: l, onSelect: s } = e, [i, c] = bt(o, s ? o : void 0), u = s ? o : i;
  return {
    selected: u,
    select: (h, b, W) => {
      const { min: N, max: M } = e;
      let x;
      if (h) {
        const y = u?.from, O = u?.to, v = !!y && !!O, g = !!y && !!O && t.isSameDay(y, O) && t.isSameDay(h, y);
        a && (v || !u?.from) ? !l && g ? x = void 0 : x = { from: h, to: void 0 } : x = xi(h, u, N, M, l, t);
      }
      return r && n && x?.from && x.to && ki({ from: x.from, to: x.to }, n, t) && (x.from = h, x.to = void 0), s || c(x), s?.(x, h, b, W), x;
    },
    isSelected: (h) => u && Ne(u, h, !1, t)
  };
}
function Di(e, t) {
  const { selected: n, required: r, onSelect: a } = e, [o, l] = bt(n, a ? n : void 0), s = a ? n : o, { isSameDay: i } = t;
  return {
    selected: s,
    select: (f, m, h) => {
      let b = f;
      return !r && s && s && i(f, s) && (b = void 0), a || l(b), a?.(b, f, m, h), b;
    },
    isSelected: (f) => s ? i(s, f) : !1
  };
}
function Oi(e, t) {
  const n = Di(e, t), r = vi(e, t), a = Mi(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return a;
    default:
      return;
  }
}
function ge(e, t) {
  return e instanceof se && e.timeZone === t ? e : new se(e, t);
}
function ze(e, t, n) {
  return ge(e, t);
}
function gn(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? ze(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? ze(r, t) : r) : yt(e) ? {
    ...e,
    from: e.from ? ge(e.from, t) : e.from,
    to: e.to ? ge(e.to, t) : e.to
  } : qt(e) ? {
    before: ze(e.before, t),
    after: ze(e.after, t)
  } : Rt(e) ? {
    after: ze(e.after, t)
  } : Ht(e) ? {
    before: ze(e.before, t)
  } : e;
}
function Wt(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => gn(r, t)) : gn(e, t));
}
function Ni(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = ge(t.today, n)), t.month && (t.month = ge(t.month, n)), t.defaultMonth && (t.defaultMonth = ge(t.defaultMonth, n)), t.startMonth && (t.startMonth = ge(t.startMonth, n)), t.endMonth && (t.endMonth = ge(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = ge(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((I) => ge(I, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? ge(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? ge(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = Wt(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Wt(t.hidden, n)), t.modifiers)) {
    const I = {};
    Object.keys(t.modifiers).forEach((H) => {
      I[H] = Wt(t.modifiers?.[H], n);
    }), t.modifiers = I;
  }
  const { components: r, formatters: a, labels: o, dateLib: l, locale: s, classNames: i } = oe(() => {
    const I = { ...Kn, ...t.locale }, H = t.broadcastCalendar ? 1 : t.weekStartsOn, P = t.noonSafe && t.timeZone ? ni(t.timeZone, {
      weekStartsOn: H,
      locale: I
    }) : void 0, q = t.dateLib && P ? { ...P, ...t.dateLib } : t.dateLib ?? P, de = new me({
      locale: I,
      weekStartsOn: H,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, q);
    return {
      dateLib: de,
      components: Yo(t.components),
      formatters: Go(t.formatters),
      labels: Qo(t.labels, de.options),
      locale: I,
      classNames: { ...Gt(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.noonSafe,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]);
  t.today || (t = { ...t, today: l.today() });
  const { captionLayout: c, mode: u, navLayout: f, numberOfMonths: m = 1, onDayBlur: h, onDayClick: b, onDayFocus: W, onDayKeyDown: N, onDayMouseEnter: M, onDayMouseLeave: x, onNextClick: y, onPrevClick: O, showWeekNumber: v, styles: g } = t, { formatCaption: E, formatDay: B, formatMonthDropdown: R, formatWeekNumber: S, formatWeekNumberHeader: V, formatWeekdayName: X, formatYearDropdown: Q } = a, K = pi(t, l), { days: le, months: pe, navStart: ce, navEnd: be, previousMonth: Z, nextMonth: re, goToMonth: ue } = K, p = Po(le, t, ce, be, l), { isSelected: F, select: z, selected: _ } = Oi(t, l) ?? {}, { blur: w, focused: k, isFocusTarget: T, moveFocus: Y, setFocused: A } = bi(t, K, p, F ?? (() => !1), l), { labelDayButton: we, labelGridcell: xt, labelGrid: _r, labelMonthDropdown: jr, labelNav: Jt, labelPrevious: Er, labelNext: Fr, labelWeekday: Pr, labelWeekNumber: Tr, labelWeekNumberHeader: Yr, labelYearDropdown: Ir } = o, zr = oe(() => ei(l, t.ISOWeek, t.broadcastCalendar, t.today), [l, t.ISOWeek, t.broadcastCalendar, t.today]), en = u !== void 0 || b !== void 0, wt = ae(() => {
    Z && (ue(Z), O?.(Z));
  }, [Z, ue, O]), kt = ae(() => {
    re && (ue(re), y?.(re));
  }, [ue, re, y]), Br = ae((I, H) => (P) => {
    P.preventDefault(), P.stopPropagation(), A(I), !H.disabled && (z?.(I.date, H, P), b?.(I.date, H, P));
  }, [z, b, A]), Ar = ae((I, H) => (P) => {
    A(I), W?.(I.date, H, P);
  }, [W, A]), $r = ae((I, H) => (P) => {
    w(), h?.(I.date, H, P);
  }, [w, h]), Vr = ae((I, H) => (P) => {
    const q = {
      ArrowLeft: [
        P.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        P.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [P.shiftKey ? "year" : "week", "after"],
      ArrowUp: [P.shiftKey ? "year" : "week", "before"],
      PageUp: [P.shiftKey ? "year" : "month", "before"],
      PageDown: [P.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (q[P.key]) {
      P.preventDefault(), P.stopPropagation();
      const [de, $] = q[P.key];
      Y(de, $);
    }
    N?.(I.date, H, P);
  }, [Y, N, t.dir]), qr = ae((I, H) => (P) => {
    M?.(I.date, H, P);
  }, [M]), Rr = ae((I, H) => (P) => {
    x?.(I.date, H, P);
  }, [x]), Hr = ae((I) => (H) => {
    const P = Number(H.target.value), q = l.setMonth(l.startOfMonth(I), P);
    ue(q);
  }, [l, ue]), Gr = ae((I) => (H) => {
    const P = Number(H.target.value), q = l.setYear(l.startOfMonth(I), P);
    ue(q);
  }, [l, ue]), { className: Lr, style: Kr } = oe(() => ({
    className: [i[j.Root], t.className].filter(Boolean).join(" "),
    style: { ...g?.[j.Root], ...t.style }
  }), [i, t.className, t.style, g]), Ur = Io(t), tn = te(null);
  oi(tn, !!t.animate, {
    classNames: i,
    months: pe,
    focused: k,
    dateLib: l
  });
  const Xr = {
    dayPickerProps: t,
    selected: _,
    select: z,
    isSelected: F,
    months: pe,
    nextMonth: re,
    previousMonth: Z,
    goToMonth: ue,
    getModifiers: p,
    components: r,
    classNames: i,
    styles: g,
    labels: o,
    formatters: a
  };
  return D.createElement(
    Xn.Provider,
    { value: Xr },
    D.createElement(
      r.Root,
      { rootRef: t.animate ? tn : void 0, className: Lr, style: Kr, dir: t.dir, id: t.id, lang: t.lang ?? s.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Ur },
      D.createElement(
        r.Months,
        { className: i[j.Months], style: g?.[j.Months] },
        !t.hideNavigation && !f && D.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[j.Nav], style: g?.[j.Nav], "aria-label": Jt(), onPreviousClick: wt, onNextClick: kt, previousMonth: Z, nextMonth: re }),
        pe.map((I, H) => D.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[j.Month],
            style: g?.[j.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: H,
            displayIndex: H,
            calendarMonth: I
          },
          f === "around" && !t.hideNavigation && H === 0 && D.createElement(
            r.PreviousMonthButton,
            { type: "button", className: i[j.PreviousMonthButton], tabIndex: Z ? void 0 : -1, "aria-disabled": Z ? void 0 : !0, "aria-label": Er(Z), onClick: wt, "data-animated-button": t.animate ? "true" : void 0 },
            D.createElement(r.Chevron, { disabled: Z ? void 0 : !0, className: i[j.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          D.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[j.MonthCaption], style: g?.[j.MonthCaption], calendarMonth: I, displayIndex: H }, c?.startsWith("dropdown") ? D.createElement(
            r.DropdownNav,
            { className: i[j.Dropdowns], style: g?.[j.Dropdowns] },
            (() => {
              const P = c === "dropdown" || c === "dropdown-months" ? D.createElement(r.MonthsDropdown, { key: "month", className: i[j.MonthsDropdown], "aria-label": jr(), classNames: i, components: r, disabled: !!t.disableNavigation, onChange: Hr(I.date), options: Zo(I.date, ce, be, a, l), style: g?.[j.Dropdown], value: l.getMonth(I.date) }) : D.createElement("span", { key: "month" }, R(I.date, l)), q = c === "dropdown" || c === "dropdown-years" ? D.createElement(r.YearsDropdown, { key: "year", className: i[j.YearsDropdown], "aria-label": Ir(l.options), classNames: i, components: r, disabled: !!t.disableNavigation, onChange: Gr(I.date), options: ti(ce, be, a, l, !!t.reverseYears), style: g?.[j.Dropdown], value: l.getYear(I.date) }) : D.createElement("span", { key: "year" }, Q(I.date, l));
              return l.getMonthYearOrder() === "year-first" ? [q, P] : [P, q];
            })(),
            D.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, E(I.date, l.options, l))
          ) : D.createElement(r.CaptionLabel, { className: i[j.CaptionLabel], role: "status", "aria-live": "polite" }, E(I.date, l.options, l))),
          f === "around" && !t.hideNavigation && H === m - 1 && D.createElement(
            r.NextMonthButton,
            { type: "button", className: i[j.NextMonthButton], tabIndex: re ? void 0 : -1, "aria-disabled": re ? void 0 : !0, "aria-label": Fr(re), onClick: kt, "data-animated-button": t.animate ? "true" : void 0 },
            D.createElement(r.Chevron, { disabled: re ? void 0 : !0, className: i[j.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          H === m - 1 && f === "after" && !t.hideNavigation && D.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[j.Nav], style: g?.[j.Nav], "aria-label": Jt(), onPreviousClick: wt, onNextClick: kt, previousMonth: Z, nextMonth: re }),
          D.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": u === "multiple" || u === "range", "aria-label": _r(I.date, l.options, l) || void 0, className: i[j.MonthGrid], style: g?.[j.MonthGrid] },
            !t.hideWeekdays && D.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[j.Weekdays], style: g?.[j.Weekdays] },
              v && D.createElement(r.WeekNumberHeader, { "aria-label": Yr(l.options), className: i[j.WeekNumberHeader], style: g?.[j.WeekNumberHeader], scope: "col" }, V()),
              zr.map((P) => D.createElement(r.Weekday, { "aria-label": Pr(P, l.options, l), className: i[j.Weekday], key: String(P), style: g?.[j.Weekday], scope: "col" }, X(P, l.options, l)))
            ),
            D.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[j.Weeks], style: g?.[j.Weeks] }, I.weeks.map((P) => D.createElement(
              r.Week,
              { className: i[j.Week], key: P.weekNumber, style: g?.[j.Week], week: P },
              v && D.createElement(r.WeekNumber, { week: P, style: g?.[j.WeekNumber], "aria-label": Tr(P.weekNumber, {
                locale: s
              }), className: i[j.WeekNumber], scope: "row", role: "rowheader" }, S(P.weekNumber, l)),
              P.days.map((q) => {
                const { date: de } = q, $ = p(q);
                if ($[U.focused] = !$.hidden && !!k?.isEqualTo(q), $[xe.selected] = F?.(de) || $.selected, yt(_)) {
                  const { from: Mt, to: Dt } = _;
                  $[xe.range_start] = !!(Mt && Dt && l.isSameDay(de, Mt)), $[xe.range_end] = !!(Mt && Dt && l.isSameDay(de, Dt)), $[xe.range_middle] = Ne(_, de, !0, l);
                }
                const Qr = Jo($, g, t.modifiersStyles), Zr = To($, i, t.modifiersClassNames), Jr = !en && !$.hidden ? xt(de, $, l.options, l) : void 0;
                return D.createElement(r.Day, { key: `${q.isoDate}_${q.displayMonthId}`, day: q, modifiers: $, className: Zr.join(" "), style: Qr, role: "gridcell", "aria-selected": $.selected || void 0, "aria-label": Jr, "data-day": q.isoDate, "data-month": q.outside ? q.dateMonthId : void 0, "data-selected": $.selected || void 0, "data-disabled": $.disabled || void 0, "data-hidden": $.hidden || void 0, "data-outside": q.outside || void 0, "data-focused": $.focused || void 0, "data-today": $.today || void 0 }, !$.hidden && en ? D.createElement(r.DayButton, { className: i[j.DayButton], style: g?.[j.DayButton], type: "button", day: q, modifiers: $, disabled: !$.focused && $.disabled || void 0, "aria-disabled": $.focused && $.disabled || void 0, tabIndex: T(q) ? 0 : -1, "aria-label": we(de, $, l.options, l), onClick: Br(q, $), onBlur: $r(q, $), onFocus: Ar(q, $), onKeyDown: Vr(q, $), onMouseEnter: qr(q, $), onMouseLeave: Rr(q, $) }, B(de, l.options, l)) : !$.hidden && B(q.date, l.options, l));
              })
            )))
          )
        ))
      ),
      t.footer && D.createElement(r.Footer, { className: i[j.Footer], style: g?.[j.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function dr({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: a = "ghost",
  formatters: o,
  components: l,
  ...s
}) {
  const i = Gt();
  return /* @__PURE__ */ d.jsx(
    Ni,
    {
      captionLayout: r,
      className: C(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      classNames: {
        root: C("w-fit", i.root),
        months: C(
          "flex gap-4 flex-col md:flex-row relative",
          i.months
        ),
        month: C("flex flex-col w-full gap-4", i.month),
        nav: C(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          i.nav
        ),
        button_previous: C(
          nn({ variant: a }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          i.button_previous
        ),
        button_next: C(
          nn({ variant: a }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          i.button_next
        ),
        month_caption: C(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          i.month_caption
        ),
        dropdowns: C(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          i.dropdowns
        ),
        dropdown_root: C(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          i.dropdown_root
        ),
        dropdown: C("absolute bg-popover inset-0 opacity-0", i.dropdown),
        caption_label: C(
          "select-none font-medium",
          r === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          i.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: C("flex", i.weekdays),
        weekday: C(
          "text-muted-foreground rounded-md w-(--cell-size) font-normal text-sm select-none",
          i.weekday
        ),
        week: C("flex w-full mt-2", i.week),
        week_number_header: C(
          "select-none w-(--cell-size)",
          i.week_number_header
        ),
        week_number: C(
          "text-[0.8rem] select-none text-muted-foreground",
          i.week_number
        ),
        day: C(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          i.day
        ),
        range_start: C("rounded-l-md bg-accent", i.range_start),
        range_middle: C("rounded-none", i.range_middle),
        range_end: C("rounded-r-md bg-accent", i.range_end),
        today: C(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          i.today
        ),
        outside: C(
          "text-muted-foreground aria-selected:text-muted-foreground",
          i.outside
        ),
        disabled: C(
          "text-muted-foreground opacity-50",
          i.disabled
        ),
        hidden: C("invisible", i.hidden),
        ...t
      },
      components: {
        Root: ({ className: c, rootRef: u, ...f }) => /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: u,
            className: C(c),
            "data-slot": "calendar",
            ...f
          }
        ),
        Chevron: ({ className: c, orientation: u, ...f }) => u === "left" ? /* @__PURE__ */ d.jsx(sa, { className: C("size-4", c), ...f }) : u === "right" ? /* @__PURE__ */ d.jsx(ca, { className: C("size-4", c), ...f }) : /* @__PURE__ */ d.jsx(ra, { className: C("size-4", c), ...f }),
        DayButton: fr,
        WeekNumber: ({ children: c, ...u }) => /* @__PURE__ */ d.jsx("td", { ...u, children: /* @__PURE__ */ d.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: c }) }),
        ...l
      },
      formatters: {
        formatMonthDropdown: (c) => c.toLocaleString("default", { month: "short" }),
        ...o
      },
      showOutsideDays: n,
      ...s
    }
  );
}
dr.displayName = "Calendar";
function fr({
  className: e,
  day: t,
  modifiers: n,
  ...r
}) {
  const a = Gt(), o = te(null);
  return ie(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), /* @__PURE__ */ d.jsx(
    aa,
    {
      ref: o,
      className: C(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-auto items-center justify-center gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        a.day,
        e
      ),
      "data-day": t.date.toLocaleDateString(),
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      "data-range-start": n.range_start,
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      size: "icon",
      variant: "ghost",
      ...r
    }
  );
}
fr.displayName = "CalendarDayButton";
var yn = 1, Si = 0.9, Ci = 0.8, Wi = 0.17, _t = 0.1, jt = 0.999, _i = 0.9999, ji = 0.99, Ei = /[\\\/_+.#"@\[\(\{&]/, Fi = /[\\\/_+.#"@\[\(\{&]/g, Pi = /[\s-]/, mr = /[\s-]/g;
function It(e, t, n, r, a, o, l) {
  if (o === t.length) return a === e.length ? yn : ji;
  var s = `${a},${o}`;
  if (l[s] !== void 0) return l[s];
  for (var i = r.charAt(o), c = n.indexOf(i, a), u = 0, f, m, h, b; c >= 0; ) f = It(e, t, n, r, c + 1, o + 1, l), f > u && (c === a ? f *= yn : Ei.test(e.charAt(c - 1)) ? (f *= Ci, h = e.slice(a, c - 1).match(Fi), h && a > 0 && (f *= Math.pow(jt, h.length))) : Pi.test(e.charAt(c - 1)) ? (f *= Si, b = e.slice(a, c - 1).match(mr), b && a > 0 && (f *= Math.pow(jt, b.length))) : (f *= Wi, a > 0 && (f *= Math.pow(jt, c - a))), e.charAt(c) !== t.charAt(o) && (f *= _i)), (f < _t && n.charAt(c - 1) === r.charAt(o + 1) || r.charAt(o + 1) === r.charAt(o) && n.charAt(c - 1) !== r.charAt(o)) && (m = It(e, t, n, r, c + 1, o + 2, l), m * _t > f && (f = m * _t)), f > u && (u = f), c = n.indexOf(i, c + 1);
  return l[s] = u, u;
}
function bn(e) {
  return e.toLowerCase().replace(mr, " ");
}
function Ti(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, It(e, t, bn(e), bn(t), 0, 0, {});
}
var Xe = '[cmdk-group=""]', Et = '[cmdk-group-items=""]', Yi = '[cmdk-group-heading=""]', hr = '[cmdk-item=""]', vn = `${hr}:not([aria-disabled="true"])`, zt = "cmdk-item-select", Ae = "data-value", Ii = (e, t, n) => Ti(e, t, n), pr = at(void 0), ct = () => st(pr), gr = at(void 0), Ut = () => st(gr), yr = at(void 0), br = he((e, t) => {
  let n = $e(() => {
    var p, F;
    return { search: "", value: (F = (p = e.value) != null ? p : e.defaultValue) != null ? F : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = $e(() => /* @__PURE__ */ new Set()), a = $e(() => /* @__PURE__ */ new Map()), o = $e(() => /* @__PURE__ */ new Map()), l = $e(() => /* @__PURE__ */ new Set()), s = vr(e), { label: i, children: c, value: u, onValueChange: f, filter: m, shouldFilter: h, loop: b, disablePointerSelection: W = !1, vimBindings: N = !0, ...M } = e, x = qe(), y = qe(), O = qe(), v = te(null), g = Ki();
  Te(() => {
    if (u !== void 0) {
      let p = u.trim();
      n.current.value = p, E.emit();
    }
  }, [u]), Te(() => {
    g(6, Q);
  }, []);
  let E = oe(() => ({ subscribe: (p) => (l.current.add(p), () => l.current.delete(p)), snapshot: () => n.current, setState: (p, F, z) => {
    var _, w, k, T;
    if (!Object.is(n.current[p], F)) {
      if (n.current[p] = F, p === "search") X(), S(), g(1, V);
      else if (p === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Y = document.getElementById(O);
          Y ? Y.focus() : (_ = document.getElementById(x)) == null || _.focus();
        }
        if (g(7, () => {
          var Y;
          n.current.selectedItemId = (Y = K()) == null ? void 0 : Y.id, E.emit();
        }), z || g(5, Q), ((w = s.current) == null ? void 0 : w.value) !== void 0) {
          let Y = F ?? "";
          (T = (k = s.current).onValueChange) == null || T.call(k, Y);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    l.current.forEach((p) => p());
  } }), []), B = oe(() => ({ value: (p, F, z) => {
    var _;
    F !== ((_ = o.current.get(p)) == null ? void 0 : _.value) && (o.current.set(p, { value: F, keywords: z }), n.current.filtered.items.set(p, R(F, z)), g(2, () => {
      S(), E.emit();
    }));
  }, item: (p, F) => (r.current.add(p), F && (a.current.has(F) ? a.current.get(F).add(p) : a.current.set(F, /* @__PURE__ */ new Set([p]))), g(3, () => {
    X(), S(), n.current.value || V(), E.emit();
  }), () => {
    o.current.delete(p), r.current.delete(p), n.current.filtered.items.delete(p);
    let z = K();
    g(4, () => {
      X(), z?.getAttribute("id") === p && V(), E.emit();
    });
  }), group: (p) => (a.current.has(p) || a.current.set(p, /* @__PURE__ */ new Set()), () => {
    o.current.delete(p), a.current.delete(p);
  }), filter: () => s.current.shouldFilter, label: i || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: x, inputId: O, labelId: y, listInnerRef: v }), []);
  function R(p, F) {
    var z, _;
    let w = (_ = (z = s.current) == null ? void 0 : z.filter) != null ? _ : Ii;
    return p ? w(p, n.current.search, F) : 0;
  }
  function S() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let p = n.current.filtered.items, F = [];
    n.current.filtered.groups.forEach((_) => {
      let w = a.current.get(_), k = 0;
      w.forEach((T) => {
        let Y = p.get(T);
        k = Math.max(Y, k);
      }), F.push([_, k]);
    });
    let z = v.current;
    le().sort((_, w) => {
      var k, T;
      let Y = _.getAttribute("id"), A = w.getAttribute("id");
      return ((k = p.get(A)) != null ? k : 0) - ((T = p.get(Y)) != null ? T : 0);
    }).forEach((_) => {
      let w = _.closest(Et);
      w ? w.appendChild(_.parentElement === w ? _ : _.closest(`${Et} > *`)) : z.appendChild(_.parentElement === z ? _ : _.closest(`${Et} > *`));
    }), F.sort((_, w) => w[1] - _[1]).forEach((_) => {
      var w;
      let k = (w = v.current) == null ? void 0 : w.querySelector(`${Xe}[${Ae}="${encodeURIComponent(_[0])}"]`);
      k?.parentElement.appendChild(k);
    });
  }
  function V() {
    let p = le().find((z) => z.getAttribute("aria-disabled") !== "true"), F = p?.getAttribute(Ae);
    E.setState("value", F || void 0);
  }
  function X() {
    var p, F, z, _;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let w = 0;
    for (let k of r.current) {
      let T = (F = (p = o.current.get(k)) == null ? void 0 : p.value) != null ? F : "", Y = (_ = (z = o.current.get(k)) == null ? void 0 : z.keywords) != null ? _ : [], A = R(T, Y);
      n.current.filtered.items.set(k, A), A > 0 && w++;
    }
    for (let [k, T] of a.current) for (let Y of T) if (n.current.filtered.items.get(Y) > 0) {
      n.current.filtered.groups.add(k);
      break;
    }
    n.current.filtered.count = w;
  }
  function Q() {
    var p, F, z;
    let _ = K();
    _ && (((p = _.parentElement) == null ? void 0 : p.firstChild) === _ && ((z = (F = _.closest(Xe)) == null ? void 0 : F.querySelector(Yi)) == null || z.scrollIntoView({ block: "nearest" })), _.scrollIntoView({ block: "nearest" }));
  }
  function K() {
    var p;
    return (p = v.current) == null ? void 0 : p.querySelector(`${hr}[aria-selected="true"]`);
  }
  function le() {
    var p;
    return Array.from(((p = v.current) == null ? void 0 : p.querySelectorAll(vn)) || []);
  }
  function pe(p) {
    let F = le()[p];
    F && E.setState("value", F.getAttribute(Ae));
  }
  function ce(p) {
    var F;
    let z = K(), _ = le(), w = _.findIndex((T) => T === z), k = _[w + p];
    (F = s.current) != null && F.loop && (k = w + p < 0 ? _[_.length - 1] : w + p === _.length ? _[0] : _[w + p]), k && E.setState("value", k.getAttribute(Ae));
  }
  function be(p) {
    let F = K(), z = F?.closest(Xe), _;
    for (; z && !_; ) z = p > 0 ? Gi(z, Xe) : Li(z, Xe), _ = z?.querySelector(vn);
    _ ? E.setState("value", _.getAttribute(Ae)) : ce(p);
  }
  let Z = () => pe(le().length - 1), re = (p) => {
    p.preventDefault(), p.metaKey ? Z() : p.altKey ? be(1) : ce(1);
  }, ue = (p) => {
    p.preventDefault(), p.metaKey ? pe(0) : p.altKey ? be(-1) : ce(-1);
  };
  return J(_e.div, { ref: t, tabIndex: -1, ...M, "cmdk-root": "", onKeyDown: (p) => {
    var F;
    (F = M.onKeyDown) == null || F.call(M, p);
    let z = p.nativeEvent.isComposing || p.keyCode === 229;
    if (!(p.defaultPrevented || z)) switch (p.key) {
      case "n":
      case "j": {
        N && p.ctrlKey && re(p);
        break;
      }
      case "ArrowDown": {
        re(p);
        break;
      }
      case "p":
      case "k": {
        N && p.ctrlKey && ue(p);
        break;
      }
      case "ArrowUp": {
        ue(p);
        break;
      }
      case "Home": {
        p.preventDefault(), pe(0);
        break;
      }
      case "End": {
        p.preventDefault(), Z();
        break;
      }
      case "Enter": {
        p.preventDefault();
        let _ = K();
        if (_) {
          let w = new Event(zt);
          _.dispatchEvent(w);
        }
      }
    }
  } }, J("label", { "cmdk-label": "", htmlFor: B.inputId, id: B.labelId, style: Xi }, i), vt(e, (p) => J(gr.Provider, { value: E }, J(pr.Provider, { value: B }, p))));
}), zi = he((e, t) => {
  var n, r;
  let a = qe(), o = te(null), l = st(yr), s = ct(), i = vr(e), c = (r = (n = i.current) == null ? void 0 : n.forceMount) != null ? r : l?.forceMount;
  Te(() => {
    if (!c) return s.item(a, l?.id);
  }, [c]);
  let u = xr(a, o, [e.value, e.children, o], e.keywords), f = Ut(), m = We((g) => g.value && g.value === u.current), h = We((g) => c || s.filter() === !1 ? !0 : g.search ? g.filtered.items.get(a) > 0 : !0);
  ie(() => {
    let g = o.current;
    if (!(!g || e.disabled)) return g.addEventListener(zt, b), () => g.removeEventListener(zt, b);
  }, [h, e.onSelect, e.disabled]);
  function b() {
    var g, E;
    W(), (E = (g = i.current).onSelect) == null || E.call(g, u.current);
  }
  function W() {
    f.setState("value", u.current, !0);
  }
  if (!h) return null;
  let { disabled: N, value: M, onSelect: x, forceMount: y, keywords: O, ...v } = e;
  return J(_e.div, { ref: et(o, t), ...v, id: a, "cmdk-item": "", role: "option", "aria-disabled": !!N, "aria-selected": !!m, "data-disabled": !!N, "data-selected": !!m, onPointerMove: N || s.getDisablePointerSelection() ? void 0 : W, onClick: N ? void 0 : b }, e.children);
}), Bi = he((e, t) => {
  let { heading: n, children: r, forceMount: a, ...o } = e, l = qe(), s = te(null), i = te(null), c = qe(), u = ct(), f = We((h) => a || u.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(l) : !0);
  Te(() => u.group(l), []), xr(l, s, [e.value, e.heading, i]);
  let m = oe(() => ({ id: l, forceMount: a }), [a]);
  return J(_e.div, { ref: et(s, t), ...o, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && J("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), vt(e, (h) => J("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, J(yr.Provider, { value: m }, h))));
}), Ai = he((e, t) => {
  let { alwaysRender: n, ...r } = e, a = te(null), o = We((l) => !l.search);
  return !n && !o ? null : J(_e.div, { ref: et(a, t), ...r, "cmdk-separator": "", role: "separator" });
}), $i = he((e, t) => {
  let { onValueChange: n, ...r } = e, a = e.value != null, o = Ut(), l = We((c) => c.search), s = We((c) => c.selectedItemId), i = ct();
  return ie(() => {
    e.value != null && o.setState("search", e.value);
  }, [e.value]), J(_e.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, "aria-activedescendant": s, id: i.inputId, type: "text", value: a ? e.value : l, onChange: (c) => {
    a || o.setState("search", c.target.value), n?.(c.target.value);
  } });
}), Vi = he((e, t) => {
  let { children: n, label: r = "Suggestions", ...a } = e, o = te(null), l = te(null), s = We((c) => c.selectedItemId), i = ct();
  return ie(() => {
    if (l.current && o.current) {
      let c = l.current, u = o.current, f, m = new ResizeObserver(() => {
        f = requestAnimationFrame(() => {
          let h = c.offsetHeight;
          u.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return m.observe(c), () => {
        cancelAnimationFrame(f), m.unobserve(c);
      };
    }
  }, []), J(_e.div, { ref: et(o, t), ...a, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: i.listId }, vt(e, (c) => J("div", { ref: et(l, i.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), qi = he((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: a, contentClassName: o, container: l, ...s } = e;
  return J(ha, { open: n, onOpenChange: r }, J(pa, { container: l }, J(ga, { "cmdk-overlay": "", className: a }), J(ya, { "aria-label": e.label, "cmdk-dialog": "", className: o }, J(br, { ref: t, ...s }))));
}), Ri = he((e, t) => We((n) => n.filtered.count === 0) ? J(_e.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), Hi = he((e, t) => {
  let { progress: n, children: r, label: a = "Loading...", ...o } = e;
  return J(_e.div, { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": a }, vt(e, (l) => J("div", { "aria-hidden": !0 }, l)));
}), Ye = Object.assign(br, { List: Vi, Item: zi, Input: $i, Group: Bi, Separator: Ai, Dialog: qi, Empty: Ri, Loading: Hi });
function Gi(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function Li(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function vr(e) {
  let t = te(e);
  return Te(() => {
    t.current = e;
  }), t;
}
var Te = typeof window > "u" ? ie : On;
function $e(e) {
  let t = te();
  return t.current === void 0 && (t.current = e()), t;
}
function We(e) {
  let t = Ut(), n = () => e(t.snapshot());
  return na(t.subscribe, n, n);
}
function xr(e, t, n, r = []) {
  let a = te(), o = ct();
  return Te(() => {
    var l;
    let s = (() => {
      var c;
      for (let u of n) {
        if (typeof u == "string") return u.trim();
        if (typeof u == "object" && "current" in u) return u.current ? (c = u.current.textContent) == null ? void 0 : c.trim() : a.current;
      }
    })(), i = r.map((c) => c.trim());
    o.value(e, s, i), (l = t.current) == null || l.setAttribute(Ae, s), a.current = s;
  }), a;
}
var Ki = () => {
  let [e, t] = ne(), n = $e(() => /* @__PURE__ */ new Map());
  return Te(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, a) => {
    n.current.set(r, a), t({});
  };
};
function Ui(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function vt({ asChild: e, children: t }, n) {
  return e && ea(t) ? ta(Ui(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var Xi = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function dt({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Ye,
    {
      className: C(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        e
      ),
      ...t
    }
  );
}
function Xt({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center border-b border-border px-3", "cmdk-input-wrapper": "", "data-slot": "command-input", children: [
    /* @__PURE__ */ d.jsx(oa, { className: "me-2 size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ d.jsx(
      Ye.Input,
      {
        className: C(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...t
      }
    )
  ] });
}
function Qt({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Ye.List,
    {
      className: C("max-h-[300px] p-1 overflow-y-auto overflow-x-hidden", e),
      "data-slot": "command-list",
      ...t
    }
  );
}
function Zt({ ...e }) {
  return /* @__PURE__ */ d.jsx(Ye.Empty, { className: "py-6 text-center text-sm", "data-slot": "command-empty", ...e });
}
function Ge({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Ye.Group,
    {
      className: C(
        "overflow-hidden p-1.5 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        e
      ),
      "data-slot": "command-group",
      ...t
    }
  );
}
function Re({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Ye.Separator,
    {
      className: C("-mx-1.5 h-px bg-border", e),
      "data-slot": "command-separator",
      ...t
    }
  );
}
function Pe({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Ye.Item,
    {
      className: C(
        "relative flex text-foreground cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
        e
      ),
      "data-slot": "command-item",
      ...t
    }
  );
}
const Qi = ye(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      size: {
        default: "h-5 w-9",
        sm: "h-4 w-7"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), Zi = ye(
  "pointer-events-none block rounded-full bg-background ring-0 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.07))] transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        default: "size-4 data-[state=checked]:translate-x-4",
        sm: "size-3 data-[state=checked]:translate-x-3"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), wr = he(({ className: e, size: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Pn,
  {
    className: C(Qi({ size: t, className: e })),
    ...n,
    ref: r,
    children: /* @__PURE__ */ d.jsx(
      ja,
      {
        className: C(Zi({ size: t }))
      }
    )
  }
));
wr.displayName = Pn.displayName;
const Ve = {
  // UI Labels
  addFilter: "",
  clearFilters: "Clear",
  searchFields: "Search fields...",
  noFieldsFound: "No fields found.",
  noResultsFound: "No results found.",
  loading: "Loading...",
  loadMore: "Load more",
  select: "Select...",
  true: "True",
  false: "False",
  min: "Min",
  max: "Max",
  to: "to",
  typeAndPressEnter: "Type and press Enter to add tag",
  selected: "selected",
  selectedCount: "selected",
  percent: "%",
  defaultCurrency: "$",
  defaultColor: "currentColor",
  addFilterTitle: "",
  // Operators
  operators: {
    is: "is",
    isNot: "is not",
    isAnyOf: "is any of",
    isNotAnyOf: "is not any of",
    includesAll: "includes all",
    excludesAll: "excludes all",
    before: "before",
    after: "after",
    between: "between",
    notBetween: "not between",
    contains: "contains",
    notContains: "does not contain",
    startsWith: "starts with",
    endsWith: "ends with",
    isExactly: "is exactly",
    equals: "equals",
    notEquals: "not equals",
    greaterThan: "greater than",
    lessThan: "less than",
    overlaps: "overlaps",
    includes: "includes",
    excludes: "excludes",
    includesAllOf: "includes all of",
    includesAnyOf: "includes any of",
    empty: "is empty",
    notEmpty: "is not empty"
  },
  // Placeholders
  placeholders: {
    enterField: (e) => `Enter ${e}...`,
    selectField: "Select...",
    searchField: (e) => `Search ${e.toLowerCase()}...`,
    enterKey: "Enter key...",
    enterValue: "Enter value..."
  },
  // Helper functions
  helpers: {
    formatOperator: (e) => e.replace(/_/g, " ")
  },
  // Validation
  validation: {
    invalidEmail: "Invalid email format",
    invalidUrl: "Invalid URL format",
    invalidTel: "Invalid phone format",
    invalid: "Invalid input format"
  }
}, kr = at({
  variant: "outline",
  size: "md",
  radius: "md",
  i18n: Ve,
  cursorPointer: !0,
  className: void 0,
  showAddButton: !0,
  addButtonText: void 0,
  addButtonIcon: void 0,
  addButtonClassName: void 0,
  addButton: void 0,
  showSearchInput: !0,
  trigger: void 0,
  allowMultiple: !0
}), je = () => st(kr), Bt = 200, Mr = ye(
  [
    "relative flex shrink-0 items-center text-foreground outline-hidden transition",
    "has-[[data-slot=filters-input]:focus-visible]:ring-focus-ring/30",
    "has-[[data-slot=filters-input]:focus-visible]:border-focus-ring",
    "has-[[data-slot=filters-input]:focus-visible]:outline-hidden",
    "has-[[data-slot=filters-input]:focus-visible]:ring-[3px]",
    "has-[[data-slot=filters-input]:focus-visible]:z-1",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border-solid",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive/60",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/10",
    "dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive",
    "dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/20"
  ],
  {
    variants: {
      variant: {
        solid: "border-0 bg-secondary",
        outline: "border border-border bg-background"
      },
      size: {
        lg: "h-10 px-2.5 text-sm has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0",
        md: "h-(--control-height) px-2 text-sm has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0",
        sm: "h-8 px-2 text-xs has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), Ji = ye(
  [
    "inline-flex shrink-0 items-center justify-center text-muted-foreground transition hover:text-foreground",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-s-0 border-border hover:bg-secondary"
      },
      size: {
        lg: "size-10 [&_svg:not([class*=size-])]:size-4",
        md: "size-(--control-height) [&_svg:not([class*=size-])]:size-3.5",
        sm: "size-8 [&_svg:not([class*=size-])]:size-3"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      },
      radius: {
        md: "rounded-e-md",
        full: "rounded-e-full"
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      radius: "md",
      cursorPointer: !0
    }
  }
), xn = ye(
  [
    "inline-flex shrink-0 items-center justify-center text-foreground transition",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "border border-input hover:bg-secondary/60",
        outline: "border border-border hover:bg-accent"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-1.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      radius: {
        md: "rounded-md",
        full: "rounded-full"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), el = ye(
  [
    "relative flex shrink-0 items-center whitespace-nowrap text-muted-foreground transition hover:text-foreground focus-visible:z-1 data-[state=open]:text-foreground",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-e-0 border-border bg-background hover:bg-secondary data-[state=open]:bg-secondary [&+[data-slot=filters-remove]]:border-s"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm",
        md: "h-(--control-height) gap-0.5 px-3 text-sm",
        sm: "h-8 gap-1 px-2.5 text-xs"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), tl = ye(
  [
    "flex shrink-0 items-center gap-1.5 px-1.5 py-1 text-foreground",
    "[&_svg:not([class*=size-])]:size-4"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-e-0 border-border"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-0.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      radius: {
        md: "rounded-s-md",
        full: "rounded-s-full"
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md"
    }
  }
), Je = ye(
  [
    "relative flex min-w-0 shrink items-center gap-1 text-foreground transition focus-visible:z-1",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-border bg-background hover:bg-secondary has-[[data-slot=switch]]:hover:bg-transparent"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-0.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      cursorPointer: {
        true: "cursor-pointer has-[[data-slot=switch]]:cursor-default",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), ft = ye("flex shrink-0 items-center justify-center text-foreground", {
  variants: {
    variant: {
      solid: "",
      outline: ""
    },
    size: {
      lg: "h-10 px-4 text-sm",
      md: "h-(--control-height) px-3 text-sm",
      sm: "h-8 px-2.5 text-xs"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), ut = ye("flex shrink-0 items-center text-muted-foreground", {
  variants: {
    variant: {
      solid: "bg-secondary",
      outline: "border border-x-0 border-border bg-background"
    },
    size: {
      lg: "h-10 px-4 text-sm",
      md: "h-(--control-height) px-3 text-sm",
      sm: "h-8 px-2.5 text-xs"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), nl = ye("relative flex flex-wrap items-center", {
  variants: {
    variant: {
      solid: "gap-2",
      outline: ""
    },
    size: {
      sm: "gap-1.5",
      md: "gap-2.5",
      lg: "gap-3.5"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), rl = ye("flex max-w-[calc(100vw-32px)] items-center", {
  variants: {
    variant: {
      solid: "gap-px",
      outline: ""
    }
  },
  defaultVariants: {
    variant: "outline"
  }
});
function ke({
  field: e,
  onChange: t,
  onBlur: n,
  onKeyDown: r,
  onInputChange: a,
  className: o,
  ...l
}) {
  const s = je(), [i, c] = ne(!0), [u, f] = ne(""), m = (M, x) => !x || !M ? !0 : new RegExp(x).test(M), h = (M, x = !1) => {
    if ((M === "text" || M === "number") && x)
      return s.i18n.validation.invalid;
    switch (M) {
      case "email":
        return s.i18n.validation.invalidEmail;
      case "url":
        return s.i18n.validation.invalidUrl;
      case "tel":
        return s.i18n.validation.invalidTel;
      default:
        return s.i18n.validation.invalid;
    }
  }, b = (M) => {
    t?.(M);
  }, W = (M) => {
    const x = M.target.value, y = e?.pattern || l.pattern;
    if (x && y) {
      let O = !0;
      e?.validation ? O = e.validation(x) : O = m(x, y), c(O);
      const v = !!(e?.pattern || l.pattern);
      f(O ? "" : h(e?.type || "", v));
    } else
      c(!0), f("");
    a && a(M), n?.(M);
  }, N = (M) => {
    if (!i && !["Tab", "Escape", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(M.key) && (c(!0), f("")), M.key === "Enter" && a) {
      const x = {
        ...M,
        target: M.target,
        currentTarget: M.currentTarget
      };
      a(x);
    }
    r?.(M);
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: C("w-36", Mr({ variant: s.variant, size: s.size }), o),
      "data-slot": "filters-input-wrapper",
      children: [
        e?.prefix && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: ft({ variant: s.variant, size: s.size }),
            "data-slot": "filters-prefix",
            children: e.prefix
          }
        ),
        /* @__PURE__ */ d.jsxs("div", { className: "flex w-full items-stretch", children: [
          /* @__PURE__ */ d.jsx(
            "input",
            {
              "aria-describedby": !i && u ? `${e?.key || "input"}-error` : void 0,
              "aria-invalid": !i,
              autoComplete: "off",
              className: "w-full bg-transparent outline-hidden dark:!bg-transparent",
              "data-form-type": "other",
              "data-lpignore": "true",
              "data-slot": "filters-input",
              "data-1p-ignore": !0,
              onBlur: W,
              onChange: b,
              onKeyDown: N,
              ...l
            }
          ),
          !i && u && /* @__PURE__ */ d.jsxs(ka, { children: [
            /* @__PURE__ */ d.jsx(Ma, { asChild: !0, children: /* @__PURE__ */ d.jsx("div", { className: "absolute top-1/2 right-2 flex -translate-y-1/2 items-center", children: /* @__PURE__ */ d.jsx(Da, { className: "size-3.5 text-destructive" }) }) }),
            /* @__PURE__ */ d.jsx(Oa, { children: /* @__PURE__ */ d.jsx("p", { className: "text-sm", children: u }) })
          ] })
        ] }),
        e?.suffix && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: C(ft({ variant: s.variant, size: s.size })),
            "data-slot": "filters-suffix",
            children: e.suffix
          }
        )
      ]
    }
  );
}
const Ft = (e) => {
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
  if (!t)
    return;
  const [, n, r, a] = t, o = Number(n), l = Number(r), s = Number(a), i = new Date(o, l - 1, s);
  if (!(i.getFullYear() !== o || i.getMonth() !== l - 1 || i.getDate() !== s))
    return i;
}, wn = (e) => {
  if (!e)
    return "";
  const t = e.getFullYear(), n = String(e.getMonth() + 1).padStart(2, "0"), r = String(e.getDate()).padStart(2, "0");
  return `${t}-${n}-${r}`;
};
function Pt({
  field: e,
  value: t,
  onChange: n,
  className: r
}) {
  const a = je(), [o, l] = ne(!1), s = oe(() => Ft(t), [t]), [i, c] = ne(s), u = te(null), f = te(t), [m, h] = ne(t);
  ie(() => {
    s && c(s);
  }, [s]), ie(() => {
    t !== f.current && document.activeElement !== u.current && (h(t), f.current = t);
  }, [t]);
  const b = (x, y = u.current) => {
    !e?.onInputChange || !y || e.onInputChange({
      target: { ...y, value: x },
      currentTarget: { ...y, value: x }
    });
  }, W = (x) => {
    h(x.target.value);
  }, N = (x) => {
    const y = x.target.value, O = Ft(y), v = y && !O ? wn(/* @__PURE__ */ new Date()) : y;
    O ? c(O) : v && c(Ft(v)), v !== y && (u.current && (u.current.value = v), h(v)), v !== t && (f.current = v, n(v)), b(v, x.target);
  }, M = (x) => {
    if (!x) {
      f.current = "", u.current && (u.current.value = ""), h(""), n(""), b("");
      return;
    }
    const y = wn(x);
    f.current = y, u.current && (u.current.value = y), c(x), h(y), n(y), b(y), l(!1);
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: C(
        "w-32",
        Mr({ variant: a.variant, size: a.size, cursorPointer: !1 }),
        r
      ),
      "data-slot": "filters-input-wrapper",
      children: [
        e?.prefix && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: ft({ variant: a.variant, size: a.size }),
            "data-slot": "filters-prefix",
            children: e.prefix
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: "flex w-full min-w-0 items-stretch", children: /* @__PURE__ */ d.jsx(
          "input",
          {
            ref: u,
            autoComplete: "off",
            className: "w-full min-w-0 bg-transparent outline-hidden dark:!bg-transparent",
            "data-slot": "filters-input",
            inputMode: "numeric",
            pattern: "\\d{4}-\\d{2}-\\d{2}",
            placeholder: "YYYY-MM-DD",
            type: "text",
            value: m,
            onBlur: N,
            onChange: W
          }
        ) }),
        /* @__PURE__ */ d.jsxs(mt, { open: o, onOpenChange: l, children: [
          /* @__PURE__ */ d.jsx(ht, { asChild: !0, children: /* @__PURE__ */ d.jsx(
            "button",
            {
              "aria-label": "Open calendar",
              className: C(
                ft({ variant: a.variant, size: a.size }),
                "cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
              ),
              "data-slot": "filters-suffix",
              type: "button",
              children: /* @__PURE__ */ d.jsx(ia, { className: "size-3.5" })
            }
          ) }),
          /* @__PURE__ */ d.jsx(pt, { align: "center", className: "w-auto overflow-hidden p-0", sideOffset: 4, children: /* @__PURE__ */ d.jsx(
            dr,
            {
              captionLayout: "dropdown",
              mode: "single",
              month: i,
              selected: s,
              onMonthChange: c,
              onSelect: M
            }
          ) })
        ] })
      ]
    }
  );
}
function al({ className: e, icon: t = /* @__PURE__ */ d.jsx(Nn, {}), ...n }) {
  const r = je();
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: C(
        Ji({
          variant: r.variant,
          size: r.size,
          cursorPointer: r.cursorPointer,
          radius: r.radius
        }),
        e
      ),
      "data-slot": "filters-remove",
      ...n,
      type: "button",
      children: t
    }
  );
}
const Dr = (e) => "fields" in e && Array.isArray(e.fields), Or = (e) => !!(e.group && e.fields), Nr = (e) => e.reduce((t, n) => Dr(n) ? [...t, ...n.fields] : Or(n) ? [...t, ...n.fields] : [...t, n], []), sl = (e) => Nr(e).reduce(
  (n, r) => (r.key && (n[r.key] = r), n),
  {}
), Sr = (e) => ({
  select: [
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  multiselect: [
    { value: "is_any_of", label: e.operators.isAnyOf },
    { value: "is_not_any_of", label: e.operators.isNotAnyOf },
    { value: "includes_all", label: e.operators.includesAll },
    { value: "excludes_all", label: e.operators.excludesAll },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  date: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  daterange: [
    { value: "between", label: e.operators.between },
    { value: "not_between", label: e.operators.notBetween },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  text: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  number: [
    { value: "equals", label: e.operators.equals },
    { value: "not_equals", label: e.operators.notEquals },
    { value: "greater_than", label: e.operators.greaterThan },
    { value: "less_than", label: e.operators.lessThan },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  numberrange: [
    { value: "between", label: e.operators.between },
    { value: "overlaps", label: e.operators.overlaps },
    { value: "contains", label: e.operators.contains },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  boolean: [
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  email: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  url: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  tel: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  time: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  datetime: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ]
});
Sr(Ve);
const ol = (e, t, n) => {
  if (e.operators)
    return e.operators;
  const r = Sr(n);
  let a = e.type || "select";
  return a === "select" && t.length > 1 && (a = "multiselect"), a === "multiselect" || e.type === "multiselect" ? r.multiselect : r[a] || r.select;
};
function il({ field: e, operator: t, values: n, onChange: r }) {
  const a = je(), o = ol(e, n, a.i18n), l = o.find((s) => s.value === t)?.label || a.i18n.helpers.formatOperator(t);
  return e.hideOperatorSelect ? /* @__PURE__ */ d.jsx("div", { className: "flex items-center self-stretch border border-r-0 px-3 text-sm whitespace-nowrap text-muted-foreground", children: l }) : /* @__PURE__ */ d.jsxs(ua, { children: [
    /* @__PURE__ */ d.jsx(da, { className: el({ variant: a.variant, size: a.size }), children: l }),
    /* @__PURE__ */ d.jsx(fa, { align: "start", className: "w-fit min-w-fit", children: o.map((s) => /* @__PURE__ */ d.jsxs(
      ma,
      {
        className: "flex items-center justify-between",
        onClick: () => r(s.value),
        children: [
          /* @__PURE__ */ d.jsx("span", { children: s.label }),
          /* @__PURE__ */ d.jsx(tt, { className: `ms-auto text-primary ${s.value === t ? "opacity-100" : "opacity-0"}` })
        ]
      },
      s.value
    )) })
  ] });
}
function kn({
  searchable: e,
  label: t,
  searchInput: n,
  isSearching: r,
  className: a,
  onSearchChange: o
}) {
  const l = je();
  return e ? /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ d.jsx(
      Xt,
      {
        className: a,
        placeholder: l.i18n.placeholders.searchField(t || ""),
        value: n,
        onValueChange: o
      }
    ),
    r && /* @__PURE__ */ d.jsx(Tt, { className: "pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 animate-spin text-muted-foreground" })
  ] }) : null;
}
function ll(e, t) {
  const n = t.trim().toLowerCase();
  return n ? e.filter((r) => r.label.toLowerCase().includes(n) || r.detail?.toLowerCase().includes(n)) : e;
}
function Mn({
  contextLabel: e,
  selectedOptions: t,
  unselectedOptions: n,
  isInitialLoad: r,
  isLoadingMore: a,
  hasMore: o,
  onLoadMore: l,
  onSelectSelected: s,
  onSelectUnselected: i
}) {
  const c = je();
  return /* @__PURE__ */ d.jsxs(Qt, { className: "outline-hidden", children: [
    r ? /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ d.jsx(Tt, { className: "mr-2 size-4 animate-spin" }),
      c.i18n.loading
    ] }) : /* @__PURE__ */ d.jsx(Zt, { children: c.i18n.noResultsFound }),
    t.length > 0 && /* @__PURE__ */ d.jsx(Ge, { heading: e, children: t.map((u) => /* @__PURE__ */ d.jsxs(
      Pe,
      {
        className: "group flex items-center gap-2",
        onSelect: () => s(u),
        children: [
          u.icon && u.icon,
          /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
            /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", title: u.label, children: u.label }),
            u.detail && /* @__PURE__ */ d.jsx("span", { className: "truncate text-sm text-muted-foreground", title: u.detail, children: u.detail })
          ] }),
          /* @__PURE__ */ d.jsx(tt, { className: "ms-auto text-primary" })
        ]
      },
      String(u.value)
    )) }),
    n.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      t.length > 0 && /* @__PURE__ */ d.jsx(Re, {}),
      /* @__PURE__ */ d.jsx(Ge, { children: n.map((u) => /* @__PURE__ */ d.jsxs(
        Pe,
        {
          className: "group flex items-center gap-2",
          value: u.label + (u.detail ? ` - ${u.detail}` : ""),
          onSelect: () => i(u),
          children: [
            u.icon && u.icon,
            /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
              /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", title: u.label, children: u.label }),
              u.detail && /* @__PURE__ */ d.jsx("span", { className: "truncate text-sm text-muted-foreground", title: u.detail, children: u.detail })
            ] }),
            /* @__PURE__ */ d.jsx(tt, { className: "ms-auto text-primary opacity-0" })
          ]
        },
        String(u.value)
      )) })
    ] }),
    o && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      (t.length > 0 || n.length > 0) && /* @__PURE__ */ d.jsx(Re, {}),
      /* @__PURE__ */ d.jsx("div", { className: "p-1.5", children: /* @__PURE__ */ d.jsxs(
        "button",
        {
          className: "flex w-full items-center justify-center rounded-xs px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50",
          disabled: a,
          type: "button",
          onClick: l,
          children: [
            a && /* @__PURE__ */ d.jsx(Tt, { className: "mr-2 size-4 animate-spin" }),
            a ? c.i18n.loading : c.i18n.loadMore
          ]
        }
      ) })
    ] })
  ] });
}
function Cr({
  field: e,
  values: t,
  onChange: n,
  onClose: r,
  inline: a = !1,
  searchInput: o,
  onSearchChange: l,
  shouldClientFilter: s,
  isInitialLoad: i,
  isSearching: c,
  isLoadingMore: u,
  hasMore: f,
  onLoadMore: m
}) {
  const [h, b] = ne(!1), [W, N] = ne([]), M = je(), x = e.type === "multiselect" || t.length > 1, y = oe(() => e.value ?? t, [e.value, t]);
  ie(() => {
    h && e.searchable !== !1 && setTimeout(() => {
      const S = document.querySelector("[cmdk-input]");
      S && S.focus();
    }, 0);
  }, [h, e.searchable]);
  const O = oe(
    () => e.options?.filter((S) => y.includes(S.value)) || [],
    [e.options, y]
  );
  ie(() => {
    if (y.length === 0) {
      N([]);
      return;
    }
    O.length > 0 && N((S) => {
      const V = [];
      for (const X of y) {
        const Q = O.find((K) => K.value === X) ?? S.find((K) => K.value === X);
        Q && V.push(Q);
      }
      return V;
    });
  }, [O, y]);
  const v = oe(() => y.length === 0 ? [] : W.length > 0 ? W : O, [W, y.length, O]), g = oe(() => ll(v, o), [o, v]), E = e.options?.filter((S) => !y.includes(S.value)) || [], B = (S) => {
    l(S);
  }, R = () => {
    b(!1), setTimeout(() => l(""), Bt), r?.();
  };
  return a ? /* @__PURE__ */ d.jsx("div", { className: "w-full", children: /* @__PURE__ */ d.jsxs(dt, { shouldFilter: s, children: [
    /* @__PURE__ */ d.jsx(
      kn,
      {
        className: "h-(--control-height) pr-8 text-sm",
        isSearching: c,
        label: e.label,
        searchable: e.searchable !== !1,
        searchInput: o,
        onSearchChange: B
      }
    ),
    /* @__PURE__ */ d.jsx(
      Mn,
      {
        contextLabel: e.label || "Selected",
        hasMore: f,
        isInitialLoad: i,
        isLoadingMore: u,
        selectedOptions: g,
        unselectedOptions: E,
        onLoadMore: m,
        onSelectSelected: (S) => {
          if (x) {
            const V = y.filter((X) => X !== S.value);
            e.onValueChange ? e.onValueChange(V) : n(V);
          } else
            e.onValueChange ? e.onValueChange([]) : n([]);
        },
        onSelectUnselected: (S) => {
          if (x) {
            const V = [...y, S.value];
            if (e.maxSelections && V.length > e.maxSelections)
              return;
            e.onValueChange ? e.onValueChange(V) : n(V), e.autoCloseOnSelect && r?.();
          } else
            e.onValueChange ? e.onValueChange([S.value]) : n([S.value]), r?.();
        }
      }
    )
  ] }) }) : /* @__PURE__ */ d.jsxs(
    mt,
    {
      open: h,
      onOpenChange: (S) => {
        b(S), S || setTimeout(() => l(""), Bt);
      },
      children: [
        /* @__PURE__ */ d.jsx(
          ht,
          {
            className: C(Je({
              variant: M.variant,
              size: M.size,
              cursorPointer: M.cursorPointer
            }), e.triggerClassName ?? "max-w-60"),
            children: /* @__PURE__ */ d.jsx("div", { className: "flex min-w-0 items-center gap-1.5", children: e.customValueRenderer ? e.customValueRenderer(t, e.options || []) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              v.length > 0 && v.some((S) => S.icon) && /* @__PURE__ */ d.jsx("div", { className: C("-space-x-0.5 flex shrink-0 items-center", e.selectedOptionsClassName), children: v.slice(0, 3).map((S) => /* @__PURE__ */ d.jsx("div", { children: S.icon }, String(S.value))) }),
              v.length === 1 ? /* @__PURE__ */ d.jsx("span", { className: "min-w-0 truncate text-accent-foreground", title: v[0].detail ? `${v[0].label} - ${v[0].detail}` : v[0].label, children: v[0].label }) : v.length > 1 ? `${v.length} ${M.i18n.selectedCount}` : M.i18n.select
            ] }) })
          }
        ),
        /* @__PURE__ */ d.jsx(
          pt,
          {
            align: "start",
            className: C(
              "p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!",
              e.className || "w-[200px]"
            ),
            children: /* @__PURE__ */ d.jsxs(dt, { shouldFilter: s, children: [
              /* @__PURE__ */ d.jsx(
                kn,
                {
                  className: "h-(--control-height) pr-8 text-sm",
                  isSearching: c,
                  label: e.label,
                  searchable: e.searchable !== !1,
                  searchInput: o,
                  onSearchChange: B
                }
              ),
              /* @__PURE__ */ d.jsx(
                Mn,
                {
                  hasMore: f,
                  isInitialLoad: i,
                  isLoadingMore: u,
                  selectedOptions: g,
                  unselectedOptions: E,
                  onLoadMore: m,
                  onSelectSelected: (S) => {
                    n(x ? t.filter((V) => V !== S.value) : []), x || (b(!1), R());
                  },
                  onSelectUnselected: (S) => {
                    if (x) {
                      const V = [...t, S.value];
                      if (e.maxSelections && V.length > e.maxSelections)
                        return;
                      n(V), e.autoCloseOnSelect && R();
                    } else
                      n([S.value]), b(!1), R();
                  }
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function cl({
  field: e,
  values: t,
  onChange: n,
  onClose: r,
  inline: a = !1,
  searchInput: o,
  onSearchChange: l
}) {
  const s = oe(() => e.value ?? t, [e.value, t]), i = e.valueSource.useOptions({
    query: o,
    selectedValues: s
  }), c = oe(() => ({
    ...e,
    options: i.options
  }), [e, i.options]);
  return /* @__PURE__ */ d.jsx(
    Cr,
    {
      field: c,
      hasMore: i.hasMore,
      inline: a,
      isInitialLoad: i.isInitialLoad,
      isLoadingMore: i.isLoadingMore,
      isSearching: i.isSearching,
      searchInput: o,
      shouldClientFilter: !1,
      values: t,
      onChange: n,
      onClose: r,
      onLoadMore: i.loadMore,
      onSearchChange: l
    }
  );
}
function Wr({
  field: e,
  values: t,
  onChange: n,
  onClose: r,
  inline: a = !1
}) {
  const [o, l] = ne(""), s = e.options?.length ?? 0;
  return e.valueSource ? /* @__PURE__ */ d.jsx(
    cl,
    {
      field: e,
      inline: a,
      searchInput: o,
      values: t,
      onChange: n,
      onClose: r,
      onSearchChange: l
    },
    e.valueSource.id
  ) : /* @__PURE__ */ d.jsx(
    Cr,
    {
      field: e,
      hasMore: !1,
      inline: a,
      isInitialLoad: !!e.isLoading && s === 0,
      isLoadingMore: !1,
      isSearching: !!e.isLoading && s > 0,
      searchInput: o,
      shouldClientFilter: !0,
      values: t,
      onChange: n,
      onClose: r,
      onLoadMore: () => {
      },
      onSearchChange: l
    }
  );
}
function ul({ field: e, values: t, onChange: n, operator: r }) {
  const [a, o] = ne(!1), [l, s] = ne(""), i = je();
  if (ie(() => {
    a && e.searchable !== !1 && setTimeout(() => {
      const m = document.querySelector("[cmdk-input]");
      m && m.focus();
    }, 0);
  }, [a, e.searchable]), r === "empty" || r === "not_empty")
    return null;
  if (e.customRenderer)
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        className: Je({
          variant: i.variant,
          size: i.size,
          cursorPointer: i.cursorPointer
        }),
        children: e.customRenderer({ field: e, values: t, onChange: n, operator: r })
      }
    );
  if (e.type === "boolean") {
    const m = t[0] === !0, h = e.onLabel || i.i18n.true, b = e.offLabel || i.i18n.false;
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        className: Je({
          variant: i.variant,
          size: i.size,
          cursorPointer: i.cursorPointer
        }),
        children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ d.jsx(wr, { checked: m, size: "sm", onCheckedChange: (W) => n([W]) }),
          e.onLabel && e.offLabel && /* @__PURE__ */ d.jsx("span", { className: "text-xs text-muted-foreground", children: m ? h : b })
        ] })
      }
    );
  }
  if (e.type === "time") {
    if (r === "between") {
      const m = t[0] || "", h = t[1] || "";
      return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: e.className,
            field: e,
            type: "time",
            value: m,
            onChange: (b) => n([b.target.value, h]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: ut({ variant: i.variant, size: i.size }),
            "data-slot": "filters-between",
            children: i.i18n.to
          }
        ),
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: e.className,
            field: e,
            type: "time",
            value: h,
            onChange: (b) => n([m, b.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ d.jsx(
      ke,
      {
        className: e.className,
        field: e,
        type: "time",
        value: t[0] || "",
        onChange: (m) => n([m.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (e.type === "datetime") {
    if (r === "between") {
      const m = t[0] || "", h = t[1] || "";
      return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: C("w-36 max-w-full", e.className),
            field: e,
            type: "datetime-local",
            value: m,
            onChange: (b) => n([b.target.value, h]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: ut({ variant: i.variant, size: i.size }),
            "data-slot": "filters-between",
            children: i.i18n.to
          }
        ),
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: C("w-36 max-w-full", e.className),
            field: e,
            type: "datetime-local",
            value: h,
            onChange: (b) => n([m, b.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ d.jsx(
      ke,
      {
        className: C("w-36 max-w-full", e.className),
        field: e,
        type: "datetime-local",
        value: t[0] || "",
        onChange: (m) => n([m.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (["email", "url", "tel"].includes(e.type || "")) {
    const m = () => {
      switch (e.type) {
        case "email":
          return "email";
        case "url":
          return "url";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, h = () => {
      switch (e.type) {
        case "email":
          return "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$";
        case "url":
          return "^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$";
        case "tel":
          return "^[\\+]?[1-9][\\d]{0,15}$";
        default:
          return;
      }
    };
    return /* @__PURE__ */ d.jsx(
      ke,
      {
        className: e.className,
        field: e,
        pattern: e.pattern || h(),
        placeholder: e.placeholder || i.i18n.placeholders.enterField(e.type || "text"),
        type: m(),
        value: t[0] || "",
        onChange: (b) => n([b.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (e.type === "daterange") {
    const m = t[0] || "", h = t[1] || "";
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: Je({
          variant: i.variant,
          size: i.size,
          cursorPointer: i.cursorPointer
        }),
        children: [
          /* @__PURE__ */ d.jsx(
            Pt,
            {
              className: C("max-w-full", e.className),
              field: e,
              value: m,
              onChange: (b) => n([b, h])
            }
          ),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              className: ut({ variant: i.variant, size: i.size }),
              "data-slot": "filters-between",
              children: i.i18n.to
            }
          ),
          /* @__PURE__ */ d.jsx(
            Pt,
            {
              className: C("max-w-full", e.className),
              field: e,
              value: h,
              onChange: (b) => n([m, b])
            }
          )
        ]
      }
    );
  }
  if (e.type === "text" || e.type === "number") {
    if (e.type === "number" && r === "between") {
      const m = t[0] || "", h = t[1] || "";
      return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: C("w-16 max-w-full", e.className),
            field: e,
            max: e.max,
            min: e.min,
            pattern: e.pattern,
            placeholder: i.i18n.min,
            step: e.step,
            type: "number",
            value: m,
            onChange: (b) => n([b.target.value, h]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: ut({ variant: i.variant, size: i.size }),
            "data-slot": "filters-between",
            children: i.i18n.to
          }
        ),
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: C("w-16 max-w-full", e.className),
            field: e,
            max: e.max,
            min: e.min,
            pattern: e.pattern,
            placeholder: i.i18n.max,
            step: e.step,
            type: "number",
            value: h,
            onChange: (b) => n([m, b.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ d.jsx("div", { className: "flex items-center", "data-slot": "filters-item", children: /* @__PURE__ */ d.jsx(
      ke,
      {
        className: C("w-36", e.className),
        field: e,
        max: e.type === "number" ? e.max : void 0,
        min: e.type === "number" ? e.min : void 0,
        pattern: e.pattern,
        placeholder: e.placeholder,
        step: e.type === "number" ? e.step : void 0,
        type: e.type === "number" ? "number" : "text",
        value: t[0] || "",
        onChange: (m) => n([m.target.value]),
        onInputChange: e.onInputChange
      }
    ) });
  }
  if (e.type === "date")
    return /* @__PURE__ */ d.jsx(
      Pt,
      {
        className: e.className,
        field: e,
        value: t[0] || "",
        onChange: (m) => n([m])
      }
    );
  if (e.type === "select" || e.type === "multiselect")
    return /* @__PURE__ */ d.jsx(Wr, { field: e, values: t, onChange: n });
  const c = t.length > 1, u = e.options?.filter((m) => t.includes(m.value)) || [], f = e.options?.filter((m) => !t.includes(m.value)) || [];
  return /* @__PURE__ */ d.jsxs(
    mt,
    {
      open: a,
      onOpenChange: (m) => {
        o(m), m || setTimeout(() => s(""), Bt);
      },
      children: [
        /* @__PURE__ */ d.jsx(
          ht,
          {
            className: Je({
              variant: i.variant,
              size: i.size,
              cursorPointer: i.cursorPointer
            }),
            children: /* @__PURE__ */ d.jsx("div", { className: "flex w-full min-w-0 items-center gap-1.5", children: e.customValueRenderer ? e.customValueRenderer(t, e.options || []) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              u.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "flex shrink-0 items-center -space-x-1.5", children: u.slice(0, 3).map((m) => /* @__PURE__ */ d.jsx("div", { children: m.icon }, String(m.value))) }),
              u.length === 1 ? /* @__PURE__ */ d.jsx("span", { className: "min-w-0 truncate text-accent-foreground", title: u[0].detail ? `${u[0].label} - ${u[0].detail}` : u[0].label, children: u[0].label }) : u.length > 1 ? `${u.length} ${i.i18n.selectedCount}` : i.i18n.select
            ] }) })
          }
        ),
        /* @__PURE__ */ d.jsx(pt, { className: C("w-36 p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!", e.popoverContentClassName), children: /* @__PURE__ */ d.jsxs(dt, { children: [
          e.searchable !== !1 && /* @__PURE__ */ d.jsx(
            Xt,
            {
              className: "h-(--control-height) text-sm",
              placeholder: i.i18n.placeholders.searchField(e.label || ""),
              value: l,
              onValueChange: s
            }
          ),
          /* @__PURE__ */ d.jsxs(Qt, { className: "outline-hidden", children: [
            /* @__PURE__ */ d.jsx(Zt, { children: i.i18n.noResultsFound }),
            u.length > 0 && /* @__PURE__ */ d.jsx(Ge, { children: u.map((m) => /* @__PURE__ */ d.jsxs(
              Pe,
              {
                className: "group flex items-center gap-2",
                onSelect: () => {
                  n(c ? t.filter((h) => h !== m.value) : []), c || o(!1);
                },
                children: [
                  m.icon && m.icon,
                  /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", children: m.label }),
                  /* @__PURE__ */ d.jsx(tt, { className: "ms-auto text-primary" })
                ]
              },
              String(m.value)
            )) }),
            f.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              u.length > 0 && /* @__PURE__ */ d.jsx(Re, {}),
              /* @__PURE__ */ d.jsx(Ge, { children: f.map((m) => /* @__PURE__ */ d.jsxs(
                Pe,
                {
                  className: "group flex items-center gap-2",
                  value: m.label,
                  onSelect: () => {
                    if (c) {
                      const h = [...t, m.value];
                      if (e.maxSelections && h.length > e.maxSelections)
                        return;
                      n(h);
                    } else
                      n([m.value]), o(!1);
                  },
                  children: [
                    m.icon && m.icon,
                    /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", children: m.label }),
                    /* @__PURE__ */ d.jsx(tt, { className: "ms-auto text-primary opacity-0" })
                  ]
                },
                String(m.value)
              )) })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
function wl({
  filters: e,
  fields: t,
  onChange: n,
  className: r,
  showAddButton: a = !0,
  addButtonText: o,
  addButtonIcon: l,
  addButtonClassName: s,
  addButton: i,
  showClearButton: c = !1,
  clearButtonText: u,
  clearButtonIcon: f,
  clearButtonClassName: m,
  clearButton: h,
  onClear: b,
  variant: W = "outline",
  size: N = "md",
  radius: M = "md",
  i18n: x,
  showSearchInput: y = !0,
  cursorPointer: O = !0,
  trigger: v,
  allowMultiple: g = !0,
  popoverContentClassName: E,
  popoverAlign: B = "start",
  keyboardShortcut: R,
  onActiveFieldChange: S
}) {
  const [V, X] = ne(!1), [Q, K] = ne(null), [le, pe] = ne([]);
  ie(() => {
    S?.(Q);
  }, [Q, S]), ie(() => {
    if (!R)
      return;
    const w = (k) => {
      const T = k.target;
      T.tagName === "INPUT" || T.tagName === "TEXTAREA" || T.isContentEditable || k.key.toLowerCase() === R.toLowerCase() && !k.metaKey && !k.ctrlKey && !k.altKey && (k.preventDefault(), X((Y) => !Y));
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [R]), ie(() => {
    V && setTimeout(() => {
      const w = document.querySelector("[cmdk-input]");
      if (w)
        w.focus();
      else {
        const k = document.querySelector("[cmdk-root]");
        k && k.focus();
      }
    }, 0);
  }, [V, Q, y]);
  const ce = {
    ...Ve,
    ...x,
    operators: {
      ...Ve.operators,
      ...x?.operators
    },
    placeholders: {
      ...Ve.placeholders,
      ...x?.placeholders
    },
    validation: {
      ...Ve.validation,
      ...x?.validation
    }
  }, be = oe(() => sl(t), [t]), Z = Q ? be[Q] : null, re = ae(
    (w, k) => {
      n(
        e.map((T) => {
          if (T.id === w) {
            const Y = { ...T, ...k };
            return (k.operator === "empty" || k.operator === "not_empty") && (Y.values = []), Y;
          }
          return T;
        })
      );
    },
    [e, n]
  ), ue = ae(
    (w) => {
      n(e.filter((k) => k.id !== w));
    },
    [e, n]
  ), p = ae(() => {
    X(!1), K(null), pe([]);
  }, []), F = ae(
    (w) => {
      const k = be[w];
      if (!k?.key)
        return;
      if (k.type === "select" || k.type === "multiselect") {
        K(k.key), pe([]);
        return;
      }
      const T = k.defaultOperator || (k.type === "daterange" || k.type === "numberrange" ? "between" : "is");
      let Y = [];
      k.defaultValue !== void 0 ? Y = [k.defaultValue] : ["text", "number", "date", "email", "url", "tel", "time", "datetime"].includes(k.type || "") ? Y = [""] : k.type === "daterange" ? Y = ["", ""] : k.type === "numberrange" ? Y = [k.min || 0, k.max || 100] : k.type === "boolean" && (Y = [!1]);
      const A = Dn(w, T, Y);
      n([...e, A]), p();
    },
    [g, p, be, e, n]
  ), z = ae(
    (w, k) => {
      if (!w.key)
        return;
      const T = w.defaultOperator || (w.type === "multiselect" ? "is_any_of" : "is"), Y = Dn(w.key, T, k);
      n([...e, Y]), p();
    },
    [p, e, n]
  ), _ = oe(() => Nr(t).filter((k) => !k.key || k.type === "separator" ? !1 : g ? !0 : !e.some((T) => T.field === k.key)), [t, e, g]);
  return /* @__PURE__ */ d.jsx(
    kr.Provider,
    {
      value: {
        variant: W,
        size: N,
        radius: M,
        i18n: ce,
        cursorPointer: O,
        className: r,
        showAddButton: a,
        addButtonText: o,
        addButtonIcon: l,
        addButtonClassName: s,
        addButton: i,
        showSearchInput: y,
        trigger: v,
        allowMultiple: g
      },
      children: /* @__PURE__ */ d.jsxs("div", { className: C(
        nl({ variant: W, size: N }),
        e.length > 0 && "w-full",
        c && e.length > 0 && "sm:pr-24",
        r
      ), children: [
        e.map((w) => {
          const k = be[w.field];
          return k ? /* @__PURE__ */ d.jsxs("div", { className: rl({ variant: W }), "data-slot": "filter-item", children: [
            /* @__PURE__ */ d.jsxs("div", { className: tl({ variant: W, size: N, radius: M }), children: [
              k.icon,
              k.label
            ] }),
            /* @__PURE__ */ d.jsx(
              il,
              {
                field: k,
                operator: w.operator,
                values: w.values,
                onChange: (T) => re(w.id, { operator: T })
              }
            ),
            /* @__PURE__ */ d.jsx(
              ul,
              {
                field: k,
                operator: w.operator,
                values: w.values,
                onChange: (T) => re(w.id, { values: T })
              }
            ),
            /* @__PURE__ */ d.jsx(al, { onClick: () => ue(w.id) })
          ] }, w.id) : null;
        }),
        a && _.length > 0 && /* @__PURE__ */ d.jsxs(
          mt,
          {
            open: V,
            onOpenChange: (w) => {
              X(w), w || (K(null), pe([]));
            },
            children: [
              /* @__PURE__ */ d.jsx(ht, { asChild: !0, children: i || /* @__PURE__ */ d.jsxs(
                "button",
                {
                  className: C(
                    xn({
                      variant: W,
                      size: N,
                      cursorPointer: O,
                      radius: M
                    }),
                    s
                  ),
                  title: ce.addFilterTitle,
                  type: "button",
                  children: [
                    l || /* @__PURE__ */ d.jsx(Na, {}),
                    o || ce.addFilter
                  ]
                }
              ) }),
              /* @__PURE__ */ d.jsx(
                pt,
                {
                  align: B,
                  className: C(
                    "p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!",
                    Z?.className || E || "w-[220px]"
                  ),
                  children: Z ? (
                    // The inline "add filter" picker always commits one filter per
                    // pick and closes — for both `select` and `multiselect` fields.
                    // We override `multiselect` → `select` so SelectOptionsPopover
                    // renders the single-pick UI (one click → onChange + onClose).
                    // Multi-value editing of an existing filter happens through the
                    // filter row's own picker, not here.
                    /* @__PURE__ */ d.jsx(
                      Wr,
                      {
                        field: Z.type === "multiselect" ? { ...Z, type: "select" } : Z,
                        inline: !0,
                        values: le,
                        onChange: (w) => z(Z, w),
                        onClose: p
                      }
                    )
                  ) : (
                    // Show field selection - needs Command wrapper for search/list
                    /* @__PURE__ */ d.jsxs(dt, { className: "outline-hidden", tabIndex: y ? void 0 : 0, children: [
                      y && /* @__PURE__ */ d.jsx(Xt, { className: "h-(--control-height)", placeholder: ce.searchFields }),
                      /* @__PURE__ */ d.jsxs(Qt, { className: "outline-hidden", children: [
                        /* @__PURE__ */ d.jsx(Zt, { children: ce.noFieldsFound }),
                        t.map((w, k) => {
                          if (Dr(w)) {
                            const Y = w.fields.filter((A) => A.type === "separator" || g ? !0 : !e.some((we) => we.field === A.key));
                            return Y.length === 0 ? null : /* @__PURE__ */ d.jsx(Ge, { heading: w.group || "Fields", children: Y.map((A, we) => {
                              if (A.type === "separator") {
                                const xt = A.key ?? `${w.group ?? `group-${k}`}-separator-${we}`;
                                return /* @__PURE__ */ d.jsx(Re, {}, xt);
                              }
                              return /* @__PURE__ */ d.jsxs(
                                Pe,
                                {
                                  className: "min-w-0",
                                  onSelect: () => A.key && F(A.key),
                                  children: [
                                    A.icon,
                                    /* @__PURE__ */ d.jsx("span", { className: "truncate", children: A.label })
                                  ]
                                },
                                A.key ?? `${w.group ?? `group-${k}`}-field-${we}`
                              );
                            }) }, w.group || `group-${k}`);
                          }
                          if (Or(w)) {
                            const Y = w.fields.filter((A) => A.type === "separator" || g ? !0 : !e.some((we) => we.field === A.key));
                            return Y.length === 0 ? null : /* @__PURE__ */ d.jsx(Ge, { heading: w.group || "Fields", children: Y.map((A) => {
                              if (A.type === "separator") {
                                const we = A.key || `${w.group || `group-${k}`}-separator-${A.label || Math.random()}`;
                                return /* @__PURE__ */ d.jsx(Re, {}, we);
                              }
                              return /* @__PURE__ */ d.jsxs(Pe, { className: "min-w-0", onSelect: () => A.key && F(A.key), children: [
                                A.icon,
                                /* @__PURE__ */ d.jsx("span", { className: "truncate", children: A.label })
                              ] }, A.key);
                            }) }, w.group || `group-${k}`);
                          }
                          const T = w;
                          if (T.type === "separator") {
                            const Y = T.key || `flat-separator-${T.label || k}`;
                            return /* @__PURE__ */ d.jsx(Re, {}, Y);
                          }
                          return !g && e.some((Y) => Y.field === T.key) ? null : /* @__PURE__ */ d.jsxs(Pe, { className: "min-w-0", onSelect: () => T.key && F(T.key), children: [
                            T.icon,
                            /* @__PURE__ */ d.jsx("span", { className: "truncate", children: T.label })
                          ] }, T.key);
                        })
                      ] })
                    ] })
                  )
                }
              )
            ]
          }
        ),
        c && e.length > 0 && (h || /* @__PURE__ */ d.jsxs(
          "button",
          {
            className: C(
              xn({
                variant: W,
                size: N,
                cursorPointer: O,
                radius: M
              }),
              "border-0 bg-transparent hover:bg-transparent hover:text-foreground",
              "sm:absolute sm:right-0 sm:top-0",
              m
            ),
            type: "button",
            onClick: () => {
              b ? b() : n([]);
            },
            children: [
              f || /* @__PURE__ */ d.jsx(Nn, {}),
              u || ce.clearFilters
            ]
          }
        ))
      ] })
    }
  );
}
const Dn = (e, t, n = []) => ({
  id: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
  field: e,
  operator: t || "is",
  values: n
});
export {
  wl as F,
  Dn as c
};
//# sourceMappingURL=filters-CVMjSzG1.mjs.map
