import { c as z, g as A, b as F, o as H, d as q } from "./check-BMQmbjGF.mjs";
import { j as o, p as l, m as u, b as G, S as W, c as n } from "./index-ccmRG8Rd.mjs";
import { R as V, c as D, P as Y, W as B, C as J, b as K, D as Q, a as v, O as U, T as X } from "./index-DTo4Qrbc.mjs";
import { b as f } from "./button-bsWyESEG.mjs";
const Z = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], he = z("mail", Z);
var x = "AlertDialog", [ee] = q(x, [
  D
]), i = D(), N = (e) => {
  const { __scopeAlertDialog: a, ...t } = e, s = i(a);
  return /* @__PURE__ */ o.jsx(V, { ...s, ...t, modal: !0 });
};
N.displayName = x;
var ae = "AlertDialogTrigger", te = l(
  (e, a) => {
    const { __scopeAlertDialog: t, ...s } = e, r = i(t);
    return /* @__PURE__ */ o.jsx(X, { ...r, ...s, ref: a });
  }
);
te.displayName = ae;
var oe = "AlertDialogPortal", y = (e) => {
  const { __scopeAlertDialog: a, ...t } = e, s = i(a);
  return /* @__PURE__ */ o.jsx(Y, { ...s, ...t });
};
y.displayName = oe;
var se = "AlertDialogOverlay", b = l(
  (e, a) => {
    const { __scopeAlertDialog: t, ...s } = e, r = i(t);
    return /* @__PURE__ */ o.jsx(U, { ...r, ...s, ref: a });
  }
);
b.displayName = se;
var c = "AlertDialogContent", [re, le] = ee(c), ie = H("AlertDialogContent"), _ = l(
  (e, a) => {
    const { __scopeAlertDialog: t, children: s, ...r } = e, g = i(t), p = u(null), L = A(a, p), m = u(null);
    return /* @__PURE__ */ o.jsx(
      B,
      {
        contentName: c,
        titleName: h,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ o.jsx(re, { scope: t, cancelRef: m, children: /* @__PURE__ */ o.jsxs(
          J,
          {
            role: "alertdialog",
            ...g,
            ...r,
            ref: L,
            onOpenAutoFocus: F(r.onOpenAutoFocus, (d) => {
              d.preventDefault(), m.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ o.jsx(ie, { children: s }),
              /* @__PURE__ */ o.jsx(ce, { contentRef: p })
            ]
          }
        ) })
      }
    );
  }
);
_.displayName = c;
var h = "AlertDialogTitle", j = l(
  (e, a) => {
    const { __scopeAlertDialog: t, ...s } = e, r = i(t);
    return /* @__PURE__ */ o.jsx(K, { ...r, ...s, ref: a });
  }
);
j.displayName = h;
var C = "AlertDialogDescription", E = l((e, a) => {
  const { __scopeAlertDialog: t, ...s } = e, r = i(t);
  return /* @__PURE__ */ o.jsx(Q, { ...r, ...s, ref: a });
});
E.displayName = C;
var ne = "AlertDialogAction", P = l(
  (e, a) => {
    const { __scopeAlertDialog: t, ...s } = e, r = i(t);
    return /* @__PURE__ */ o.jsx(v, { ...r, ...s, ref: a });
  }
);
P.displayName = ne;
var S = "AlertDialogCancel", T = l(
  (e, a) => {
    const { __scopeAlertDialog: t, ...s } = e, { cancelRef: r } = le(S, t), g = i(t), p = A(a, r);
    return /* @__PURE__ */ o.jsx(v, { ...g, ...s, ref: p });
  }
);
T.displayName = S;
var ce = ({ contentRef: e }) => {
  const a = `\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${C}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return G(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(a);
  }, [a, e]), null;
}, de = N, pe = y, O = b, R = _, M = P, w = T, $ = j, I = E;
const je = de, ge = pe, k = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(
  O,
  {
    className: n(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      e
    ),
    ...a,
    ref: t
  }
));
k.displayName = O.displayName;
const me = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(ge, { children: /* @__PURE__ */ o.jsxs("div", { className: W, children: [
  /* @__PURE__ */ o.jsx(k, { onClick: (s) => s.stopPropagation() }),
  /* @__PURE__ */ o.jsx(
    R,
    {
      ref: t,
      className: n(
        "fixed left-[50%] top-[20%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-20%] gap-6 bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[18%] data-[state=open]:slide-in-from-top-[18%] sm:rounded-lg",
        e
      ),
      ...a
    }
  )
] }) }));
me.displayName = R.displayName;
const ue = ({
  className: e,
  ...a
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: n(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...a
  }
);
ue.displayName = "AlertDialogHeader";
const Ae = ({
  className: e,
  ...a
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: n(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 [&>button]:min-w-20",
      e
    ),
    ...a
  }
);
Ae.displayName = "AlertDialogFooter";
const De = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(
  $,
  {
    ref: t,
    className: n("text-xl font-semibold", e),
    ...a
  }
));
De.displayName = $.displayName;
const ve = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(
  I,
  {
    ref: t,
    className: n("text-base", e),
    ...a
  }
));
ve.displayName = I.displayName;
const fe = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(
  M,
  {
    ref: t,
    className: n(f(), e),
    ...a
  }
));
fe.displayName = M.displayName;
const xe = l(({ className: e, ...a }, t) => /* @__PURE__ */ o.jsx(
  w,
  {
    ref: t,
    className: n(
      f({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...a
  }
));
xe.displayName = w.displayName;
export {
  je as A,
  he as M,
  me as a,
  ue as b,
  De as c,
  ve as d,
  Ae as e,
  xe as f,
  fe as g
};
//# sourceMappingURL=alert-dialog-DiH_9lnq.mjs.map
