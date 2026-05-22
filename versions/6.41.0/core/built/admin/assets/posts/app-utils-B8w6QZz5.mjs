import { Q as M, H as f } from "./index-ccmRG8Rd.mjs";
const Y = (e) => e.format("YYYY-MM-DD"), b = (e) => {
  if (!e.length)
    return { min: 0, max: 1 };
  const n = e.map((m) => Number(m.value));
  let t = Math.min(...n), a = Math.max(...n);
  if (t === a) {
    const m = t;
    return { min: Math.max(0, m - 1), max: m + 1 };
  }
  const o = 0.02;
  t = Math.max(0, t - t * o), a = a + a * o;
  const l = a - t, u = Math.floor(Math.log10(l)), s = Math.pow(10, u), h = Math.round(a / s) * s;
  a = h < a ? Math.ceil(a / s) * s : h;
  const r = Math.round(t / s) * s;
  if (t = r > t ? Math.floor(t / s) * s : r, t = Math.max(0, t), t === a) {
    const m = (t + a) / 2, c = Math.max(Math.abs(m) * o, s);
    t = Math.max(0, Math.floor(m - c)), a = Math.ceil(m + c);
  }
  return t = Math.max(0, t), { min: t, max: a };
}, x = (e, n) => {
  if (!e.length)
    return 40;
  const t = Math.max(...e.map((o) => n(o).length));
  return Math.max(20, t * 8 + 20);
}, w = (e) => {
  const n = new Date(e), a = (/* @__PURE__ */ new Date()).getTime() - n.getTime(), o = Math.ceil(a / (1e3 * 3600 * 24));
  return Math.max(o, 1);
}, p = (e) => {
  const n = Intl.DateTimeFormat().resolvedOptions().timeZone, t = M().tz(n).endOf("day");
  let a;
  return e === -1 ? a = M().tz(n).startOf("year") : a = M().tz(n).subtract(e - 1, "days").startOf("day"), { startDate: a, endDate: t, timezone: n };
}, v = (e, n, t = "value", a = "avg") => {
  if (!e.length)
    return [];
  if (n >= 91 && n <= 356) {
    const o = [];
    let l = M(e[0].date).startOf("week"), u = 0, s = 0, h = 0;
    return e.forEach((r, m) => {
      const c = M(r.date);
      c.isSame(l, "week") ? (u += Number(r[t]), s += 1, h = Number(r[t])) : (o.push({
        ...e[m - 1],
        date: l.format("YYYY-MM-DD"),
        [t]: a === "sum" ? u : a === "avg" ? s > 0 ? u / s : 0 : h
      }), l = c.startOf("week"), u = Number(r[t]), s = 1, h = Number(r[t])), m === e.length - 1 && o.push({
        ...r,
        date: l.format("YYYY-MM-DD"),
        [t]: a === "sum" ? u : a === "avg" ? s > 0 ? u / s : 0 : h
      });
    }), o;
  } else if (n > 356) {
    const o = [];
    let l = M(e[0].date).startOf("month"), u = 0, s = 0, h = 0;
    return e.forEach((r, m) => {
      const c = M(r.date);
      c.isSame(l, "month") ? (u += Number(r[t]), s += 1, h = Number(r[t])) : (o.push({
        ...e[m - 1],
        date: l.format("YYYY-MM-DD"),
        [t]: a === "sum" ? u : a === "avg" ? s > 0 ? u / s : 0 : h
      }), l = c.startOf("month"), u = Number(r[t]), s = 1, h = Number(r[t])), m === e.length - 1 && o.push({
        ...r,
        date: l.format("YYYY-MM-DD"),
        [t]: a === "sum" ? u : a === "avg" ? s > 0 ? u / s : 0 : h
      });
    }), o;
  }
  return e;
}, d = (e, n, t = !1, a = !1) => n === 1 && a ? M(e).format("h:mma") : n === 1 && t ? M(e).format("MMM D, h:mma") : n > 365 ? M(e).format("MMM YYYY") : n >= 91 ? `Week of ${f(e)}` : f(e), D = (e) => e.name && e.name.trim() || e.email || "Unknown Member", k = (e) => {
  const n = D(e), t = n.split(" ");
  return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : n.substring(0, 2).toUpperCase();
};
export {
  p as a,
  b,
  d as c,
  x as d,
  k as e,
  Y as f,
  w as g,
  D as h,
  v as s
};
//# sourceMappingURL=app-utils-B8w6QZz5.mjs.map
