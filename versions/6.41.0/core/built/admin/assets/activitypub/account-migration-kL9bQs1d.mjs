import { j as e, t as d, af as L, ag as H, ah as F, ai as M, aj as S, b as o, L as I, J as R, ak as z, B as f, k, S as $, al as D } from "./index-iRncUrZR.mjs";
import { L as U } from "./label-sr9EYmS6.mjs";
const T = H(
  "group/field flex w-full gap-2 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function B({
  className: t,
  orientation: a = "vertical",
  ...s
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: d(T({ orientation: a }), t),
      "data-orientation": a,
      "data-slot": "field",
      role: "group",
      ...s
    }
  );
}
function w({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e.jsx(
    U,
    {
      className: d(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        t
      ),
      "data-slot": "field-label",
      ...a
    }
  );
}
function V({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: d(
        "text-muted-foreground text-sm font-normal leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        t
      ),
      "data-slot": "field-description",
      ...a
    }
  );
}
function A({
  className: t,
  children: a,
  errors: s,
  ...c
}) {
  const n = L(() => a || (s ? s?.length === 1 && s[0]?.message ? s[0].message : /* @__PURE__ */ e.jsx("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: s.map(
    (l) => l?.message && /* @__PURE__ */ e.jsx("li", { children: l.message }, l.message)
  ) }) : null), [a, s]);
  return n ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: d("text-destructive text-sm font-normal", t),
      "data-slot": "field-error",
      role: "alert",
      ...c,
      children: n
    }
  ) : null;
}
const _ = /^@?[^@\s]+@[^@\s]+$/;
function G(t) {
  const a = t.trim();
  return a.startsWith("@") ? a : `@${a}`;
}
function J(t) {
  try {
    const a = new URL(t), s = a.pathname.match(/^\/users\/([^/]+)\/?$/);
    return s ? `${decodeURIComponent(s[1])}@${a.hostname}` : `${a.hostname}${a.pathname}`;
  } catch {
    return t;
  }
}
function O(t) {
  if (typeof t == "object" && t !== null && "statusCode" in t && typeof t.statusCode == "number") {
    if (t.statusCode === 400)
      return "Enter a valid handle, like old@mastodon.social.";
    if (t.statusCode === 404)
      return "Could not find that profile. Check the handle and try again.";
  }
  return "Something went wrong, please try again.";
}
const Y = () => {
  const {
    data: t,
    isError: a,
    isLoading: s,
    refetch: c
  } = F("index"), n = M("index"), l = S("index"), [x, g] = o(""), [r, u] = o(null), [p, m] = o(null), [v, y] = o(null), j = [...t?.aliases ?? []].reverse(), N = s || a || j.length > 0, C = async (i) => {
    i.preventDefault();
    const b = x.trim();
    if (!_.test(b)) {
      u("Enter a valid handle, like old@mastodon.social.");
      return;
    }
    u(null), m(null);
    try {
      const h = G(b);
      await n.mutateAsync(h), g("");
    } catch (h) {
      u(O(h));
    }
  }, E = async (i) => {
    m(null), y(i);
    try {
      await l.mutateAsync(i);
    } catch {
      m("Could not remove migration profile.");
    } finally {
      y(null);
    }
  };
  return /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-[620px] py-[min(4vh,48px)]", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-8", children: /* @__PURE__ */ e.jsx(R, { children: "Account migration" }) }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-3 text-base text-gray-800 dark:text-gray-600", children: /* @__PURE__ */ e.jsxs("p", { children: [
      "You can move your followers from another social web account (eg. ",
      /* @__PURE__ */ e.jsx("a", { className: "underline hover:text-black dark:hover:text-white", href: "https://docs.joinmastodon.org/user/moving/#move", rel: "noopener noreferrer", target: "_blank", children: "Mastodon" }),
      ") to this one by creating an account alias. This action is harmless and reversible. The account migration is initiated from the old account."
    ] }) }),
    /* @__PURE__ */ e.jsx("form", { className: "mt-10", onSubmit: C, children: /* @__PURE__ */ e.jsxs(B, { "data-invalid": r ? !0 : void 0, children: [
      /* @__PURE__ */ e.jsx(w, { htmlFor: "account-migration-source-handle", children: "Old account handle" }),
      /* @__PURE__ */ e.jsx(V, { id: "account-migration-source-handle-description", children: "Specify the username@domain of the account you want to move from" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ e.jsx(
          z,
          {
            "aria-describedby": r ? "account-migration-source-handle-error" : "account-migration-source-handle-description",
            "aria-invalid": r ? !0 : void 0,
            autoComplete: "off",
            className: "sm:flex-1",
            id: "account-migration-source-handle",
            placeholder: "username@domain",
            value: x,
            "data-1p-ignore": !0,
            onChange: (i) => g(i.target.value)
          }
        ),
        /* @__PURE__ */ e.jsxs(f, { className: "relative h-9 text-sm sm:w-auto", disabled: n.isLoading, type: "submit", children: [
          /* @__PURE__ */ e.jsx("span", { className: n.isLoading ? "invisible" : void 0, children: "Create alias" }),
          n.isLoading && /* @__PURE__ */ e.jsxs("span", { className: "absolute inset-0 flex items-center justify-center", children: [
            /* @__PURE__ */ e.jsx(k, { color: "light", size: "sm" }),
            /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Creating alias..." })
          ] })
        ] })
      ] }),
      r && /* @__PURE__ */ e.jsx(A, { id: "account-migration-source-handle-error", children: r }),
      p && /* @__PURE__ */ e.jsx(A, { id: "account-migration-alias-error", children: p })
    ] }) }),
    N && /* @__PURE__ */ e.jsxs("div", { className: "mt-10", "data-testid": "account-migration-aliases", children: [
      /* @__PURE__ */ e.jsx("div", { className: "pb-3", children: /* @__PURE__ */ e.jsx(w, { asChild: !0, children: /* @__PURE__ */ e.jsx("div", { children: "Account aliases" }) }) }),
      s ? /* @__PURE__ */ e.jsx("div", { className: "border-t border-gray-200 py-4 dark:border-gray-950", children: /* @__PURE__ */ e.jsx($, { className: "h-5 w-48" }) }) : a ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4 border-t border-gray-200 py-4 text-sm text-gray-700 dark:border-gray-950 dark:text-gray-600", children: [
        /* @__PURE__ */ e.jsx("span", { children: "Could not load account aliases." }),
        /* @__PURE__ */ e.jsx(f, { className: "px-0 font-medium", variant: "link", onClick: () => c(), children: "Retry" })
      ] }) : /* @__PURE__ */ e.jsx("div", { className: "divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-950 dark:border-gray-950", children: j.map((i) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4 py-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "min-w-0 truncate text-base text-black dark:text-white", children: J(i.apId) }),
        /* @__PURE__ */ e.jsx(
          f,
          {
            className: "shrink-0 px-0 font-medium text-gray-700 hover:text-red dark:text-gray-600 dark:hover:text-red",
            disabled: v === i.apId,
            variant: "link",
            onClick: () => E(i.apId),
            children: v === i.apId ? /* @__PURE__ */ e.jsx(k, { size: "sm" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(D, { size: 15 }),
              " Unlink"
            ] })
          }
        )
      ] }, i.apId)) })
    ] })
  ] }) });
};
export {
  Y as default
};
//# sourceMappingURL=account-migration-kL9bQs1d.mjs.map
