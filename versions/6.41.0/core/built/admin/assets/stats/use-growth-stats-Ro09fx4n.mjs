import { m as C, J as r, i as I, h as H } from "./index-BaZyVSji.mjs";
import { x as k, z as v, bD as E, bl as N, bm as V } from "./stats-B-gFnH1Q.mjs";
function j(e) {
  return e ? Intl.NumberFormat("en", { currency: e, style: "currency" }).format(0).replace(/[\d\s.]/g, "") : "";
}
const z = (e, T, M, i) => {
  if (!e.length)
    return {
      totalMembers: 0,
      freeMembers: 0,
      paidMembers: 0,
      mrr: 0,
      percentChanges: {
        total: "0%",
        free: "0%",
        paid: "0%",
        mrr: "0%"
      },
      directions: {
        total: "same",
        free: "same",
        paid: "same",
        mrr: "same"
      }
    };
  const f = i || e[e.length - 1], m = e.length > 0 ? e[e.length - 1] : { free: 0, paid: 0, comped: 0, gift: 0 }, P = T.length > 0 ? T[T.length - 1] : { mrr: 0 }, c = f.free + f.paid + f.comped + (f.gift ?? 0), g = P.mrr, D = {
    total: "0%",
    free: "0%",
    paid: "0%",
    mrr: "0%"
  }, y = {
    total: "same",
    free: "same",
    paid: "same",
    mrr: "same"
  };
  if (e.length > 1) {
    const t = e[0], a = t.free + t.paid + t.comped + (t.gift ?? 0);
    if (a > 0) {
      const s = (c - a) / a * 100;
      D.total = I(s / 100), y.total = s > 0 ? "up" : s < 0 ? "down" : "same";
    }
    if (t.free > 0) {
      const s = (m.free - t.free) / t.free * 100;
      D.free = I(s / 100), y.free = s > 0 ? "up" : s < 0 ? "down" : "same";
    }
    const u = t.paid + t.comped + (t.gift ?? 0), d = m.paid + m.comped + (m.gift ?? 0);
    if (u > 0) {
      const s = (d - u) / u * 100;
      D.paid = I(s / 100), y.paid = s > 0 ? "up" : s < 0 ? "down" : "same";
    }
  }
  if (T.length > 1) {
    const t = r(M).format("YYYY-MM-DD"), a = T.find((s) => r(s.date).isSameOrAfter(t)), u = r(M).isSame(r().startOf("year"), "day") || r(M).year() < r().year();
    let d = 0;
    if (a && r(a.date).isSame(t, "day") ? d = a.mrr : u ? d = 0 : d = g, d >= 0) {
      const s = d === 0 ? g > 0 ? 100 : 0 : (g - d) / d * 100;
      D.mrr = I(s / 100), y.mrr = s > 0 ? "up" : s < 0 ? "down" : "same";
    }
  }
  return {
    totalMembers: c,
    freeMembers: f.free,
    paidMembers: f.paid + f.comped + (f.gift ?? 0),
    mrr: g,
    percentChanges: D,
    directions: y
  };
}, G = (e, T) => {
  const M = [...e].sort((t, a) => new Date(t.date).getTime() - new Date(a.date).getTime()), i = [...T].sort((t, a) => new Date(t.date).getTime() - new Date(a.date).getTime()), f = M.map((t) => t.date), m = i.map((t) => t.date), P = [.../* @__PURE__ */ new Set([...f, ...m])].sort((t, a) => new Date(t).getTime() - new Date(a).getTime());
  let c = null, g = null;
  const D = new Map(M.map((t) => [t.date, t])), y = new Map(i.map((t) => [t.date, t]));
  return P.map((t) => {
    const a = D.get(t);
    a && (c = a);
    const u = y.get(t);
    u && (g = u);
    const d = c?.free ?? 0, s = c?.paid ?? 0, O = c?.comped ?? 0, A = c?.gift ?? 0, L = s + O + A, n = d + L, R = g?.mrr ?? 0, S = c?.paid_subscribed ?? 0, h = c?.paid_canceled ?? 0;
    return {
      date: t,
      value: n,
      free: d,
      paid: L,
      comped: O,
      gift: A,
      mrr: R,
      paid_subscribed: S,
      paid_canceled: h,
      formattedValue: H(n),
      label: "Total members"
      // Consider if label needs update based on data type?
    };
  });
}, W = (e) => {
  const { startDate: T, endDate: M } = C(() => k(e), [e]), i = v(T), f = e === 1 ? r(i).subtract(1, "day").format("YYYY-MM-DD") : i, { data: m, isLoading: P } = E({
    searchParams: {
      date_from: f
    }
  }), { data: c, isLoading: g } = N({
    searchParams: {
      date_from: f
    }
  }), { data: D, isLoading: y } = V(), t = C(() => {
    let n = [];
    if (m?.stats ? n = m.stats : Array.isArray(m) && (n = m), e === 1 && n.length >= 2) {
      const R = n[n.length - 2], S = n[n.length - 1], h = r(i).format("YYYY-MM-DD"), l = r(i).add(1, "day").format("YYYY-MM-DD"), p = {
        ...R,
        date: h
      }, Y = {
        ...S,
        date: l
      };
      return [p, Y];
    }
    return n;
  }, [m, e, i]), { mrrData: a, selectedCurrency: u } = C(() => {
    const n = r(i), R = e === 1 ? r().endOf("day") : r().startOf("day");
    if (c?.stats && c?.meta?.totals) {
      const S = c.meta.totals;
      let h = S[0];
      if (!h)
        return { mrrData: [], selectedCurrency: "usd" };
      for (const o of S)
        o.mrr > h.mrr && (h = o);
      const l = h.currency, p = c.stats.filter((o) => o.currency === l), Y = p.filter((o) => r(o.date).isSameOrAfter(n)), x = [...p].sort((o, w) => new Date(w.date).getTime() - new Date(o.date).getTime()), b = [...Y];
      if (!b.some((o) => r(o.date).isSame(n, "day"))) {
        const o = x.find((w) => r(w.date).isBefore(n));
        if (o)
          b.unshift({
            ...o,
            date: n.format("YYYY-MM-DD")
          });
        else if (b.length > 0) {
          const w = [...b].sort((_, B) => new Date(_.date).getTime() - new Date(B.date).getTime())[0];
          b.unshift({
            ...w,
            date: n.format("YYYY-MM-DD")
          });
        }
      }
      const F = e === 1 ? r().startOf("day") : R;
      if (!b.some((o) => r(o.date).isSame(F, "day")) && b.length > 0) {
        const w = [...b].sort((_, B) => new Date(B.date).getTime() - new Date(_.date).getTime())[0];
        b.push({
          ...w,
          date: F.format("YYYY-MM-DD")
        });
      }
      return { mrrData: b.sort((o, w) => new Date(o.date).getTime() - new Date(w.date).getTime()), selectedCurrency: l };
    }
    return { mrrData: [], selectedCurrency: "usd" };
  }, [c, i, e]), d = C(() => z(t, a, i, m?.meta?.totals), [t, a, i, m?.meta?.totals]), s = C(() => G(t, a), [t, a]), O = C(() => j(u), [u]), A = C(() => P || g || y, [P, g, y]), L = C(() => {
    if (!D?.stats)
      return [];
    const n = D.stats.reduce((l, p) => {
      const Y = p.date;
      return l[Y] || (l[Y] = {
        date: Y,
        signups: 0,
        cancellations: 0
      }), l[Y].signups += p.signups, l[Y].cancellations += p.cancellations, l;
    }, {}), R = Object.values(n).sort(
      (l, p) => new Date(l.date).getTime() - new Date(p.date).getTime()
    ), S = r(i), h = r(M);
    return R.filter((l) => {
      const p = r(l.date);
      return p.isSameOrAfter(S) && p.isSameOrBefore(h);
    });
  }, [D, i, M]);
  return {
    isLoading: A,
    memberData: t,
    mrrData: a,
    dateFrom: i,
    endDate: M,
    totals: d,
    chartData: s,
    subscriptionData: L,
    selectedCurrency: u,
    currencySymbol: O
  };
};
export {
  j as g,
  W as u
};
//# sourceMappingURL=use-growth-stats-Ro09fx4n.mjs.map
