import { j as e, L as f } from "./index-ccmRG8Rd.mjs";
import { A as h, u as g } from "./automations-DFtnFnzP.mjs";
import { S as n } from "./skeleton-9GpF0jm6.mjs";
import { T as m, a as u, b as t, c as o, d as x, e as i } from "./table-Dy0zIRBD.mjs";
import { M as b } from "./main-layout-CCbCHYCQ.mjs";
import { L as d, P as c } from "./list-page-B7jM1dtq.mjs";
const j = {
  "member-welcome-email-free": "Onboard new free members with a short welcome email.",
  "member-welcome-email-paid": "Greet new paid members and point them at member-only content."
}, p = () => /* @__PURE__ */ e.jsxs(m, { className: "flex table-fixed flex-col lg:table", "data-testid": "automations-list-loading", children: [
  /* @__PURE__ */ e.jsx(u, { className: "hidden lg:table-header-group!", children: /* @__PURE__ */ e.jsxs(t, { children: [
    /* @__PURE__ */ e.jsx(o, { className: "w-auto px-4", children: "Automation" }),
    /* @__PURE__ */ e.jsx(o, { className: "w-32 px-4", children: "Status" })
  ] }) }),
  /* @__PURE__ */ e.jsx(x, { className: "flex flex-col lg:table-row-group", children: Array.from({ length: 2 }, (l, a) => /* @__PURE__ */ e.jsxs(
    t,
    {
      "aria-hidden": "true",
      className: "grid w-full grid-cols-[1fr_auto] items-center gap-x-4 p-2 lg:table-row lg:p-0",
      children: [
        /* @__PURE__ */ e.jsxs(i, { className: "min-w-0 lg:p-4", children: [
          /* @__PURE__ */ e.jsx(n, { className: "mb-1 h-5 w-48 max-w-full" }),
          /* @__PURE__ */ e.jsx(n, { className: "h-5 w-80 max-w-full" })
        ] }),
        /* @__PURE__ */ e.jsx(i, { className: "lg:w-32 lg:p-4", children: /* @__PURE__ */ e.jsx(n, { className: "h-5 w-16" }) })
      ]
    },
    a
  )) })
] }), w = ({ automations: l = [], isLoading: a = !1 }) => a ? /* @__PURE__ */ e.jsx(p, {}) : /* @__PURE__ */ e.jsxs(m, { className: "flex table-fixed flex-col lg:table", "data-testid": "automations-list", children: [
  /* @__PURE__ */ e.jsx(u, { className: "hidden lg:table-header-group!", children: /* @__PURE__ */ e.jsxs(t, { children: [
    /* @__PURE__ */ e.jsx(o, { className: "w-auto px-4", children: "Automation" }),
    /* @__PURE__ */ e.jsx(o, { className: "w-32 px-4", children: "Status" })
  ] }) }),
  /* @__PURE__ */ e.jsx(x, { className: "flex flex-col lg:table-row-group", children: l.map((s) => {
    const r = j[s.slug];
    return /* @__PURE__ */ e.jsxs(
      t,
      {
        className: "grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-x-4 p-2 lg:table-row lg:p-0",
        "data-testid": "automation-list-row",
        children: [
          /* @__PURE__ */ e.jsxs(i, { className: "static min-w-0 lg:p-4", children: [
            /* @__PURE__ */ e.jsx(
              f,
              {
                className: "before:absolute before:inset-0 before:z-10 before:rounded-sm focus-visible:outline-hidden focus-visible:before:ring-2 focus-visible:before:ring-focus-ring",
                to: `/automations/${s.id}`,
                children: /* @__PURE__ */ e.jsx("span", { className: "block font-medium", children: s.name })
              }
            ),
            r && /* @__PURE__ */ e.jsx("span", { className: "block text-muted-foreground", children: r })
          ] }),
          /* @__PURE__ */ e.jsx(i, { className: "lg:w-32 lg:p-4", children: /* @__PURE__ */ e.jsx(h, { status: s.status }) })
        ]
      },
      s.slug
    );
  }) })
] }), y = () => {
  const { data: l, error: a, isError: s, isLoading: r } = g({
    defaultErrorHandler: !1
  });
  if (s)
    throw a || new Error("Failed to load automations");
  return /* @__PURE__ */ e.jsx(b, { children: /* @__PURE__ */ e.jsxs(d, { "data-testid": "automations-page", children: [
    /* @__PURE__ */ e.jsx(d.Header, { children: /* @__PURE__ */ e.jsx(c, { blurredBackground: !1, sticky: !1, children: /* @__PURE__ */ e.jsx(c.Left, { children: /* @__PURE__ */ e.jsx(c.Title, { children: "Automations" }) }) }) }),
    /* @__PURE__ */ e.jsx(d.Body, { children: /* @__PURE__ */ e.jsx(w, { automations: l?.automations, isLoading: r }) })
  ] }) });
};
export {
  y as default
};
//# sourceMappingURL=automations-DOjSGfXC.mjs.map
