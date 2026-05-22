import { j as h, i as b } from "./index-ccmRG8Rd.mjs";
import { a as w, c as S, b as E } from "./hooks-muBZfhoU.mjs";
const $ = ({ status: e }) => {
  switch (e) {
    case "active":
      return /* @__PURE__ */ h.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-green/20 px-2 py-0.5 text-xs font-medium text-green uppercase", children: [
        /* @__PURE__ */ h.jsx("span", { className: "size-1.5 rounded-full bg-green" }),
        "Live"
      ] });
    case "inactive":
      return /* @__PURE__ */ h.jsx("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground uppercase", children: "Off" });
    default: {
      const i = e;
      throw new Error(`Unhandled status: ${i}`);
    }
  }
};
var p, m;
function C() {
  if (m) return p;
  m = 1;
  for (var e = Math.floor(Math.random() * 16777215), i = n.index = parseInt(Math.random() * 16777215, 10), c = (typeof process > "u" || typeof process.pid != "number" ? Math.floor(Math.random() * 1e5) : process.pid) % 65535, o = (() => {
    try {
      return _Buffer;
    } catch {
      try {
        return Buffer;
      } catch {
        return null;
      }
    }
  })(), s = function(t) {
    return !!(t != null && t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t));
  }, l = [], a = 0; a < 256; a++)
    l[a] = (a <= 15 ? "0" : "") + a.toString(16);
  var u = new RegExp("^[0-9a-fA-F]{24}$"), f = [];
  for (a = 0; a < 10; ) f[48 + a] = a++;
  for (; a < 16; ) f[55 + a] = f[87 + a] = a++;
  function n(t) {
    if (!(this instanceof n)) return new n(t);
    if (t && (t instanceof n || t._bsontype === "ObjectID"))
      return t;
    if (this._bsontype = "ObjectID", t == null || typeof t == "number") {
      this.id = this.generate(t);
      return;
    }
    var r = n.isValid(t);
    if (!r && t != null)
      throw new Error(
        "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"
      );
    if (r && typeof t == "string" && t.length === 24)
      return n.createFromHexString(t);
    if (t != null && t.length === 12)
      this.id = t;
    else {
      if (t != null && typeof t.toHexString == "function")
        return t;
      throw new Error(
        "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"
      );
    }
  }
  p = n, n.default = n, n.createFromTime = function(t) {
    return t = parseInt(t, 10) % 4294967295, new n(v(8, t) + "0000000000000000");
  }, n.createFromHexString = function(t) {
    if (typeof t > "u" || t != null && t.length !== 24)
      throw new Error(
        "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"
      );
    for (var r = "", d = 0; d < 24; )
      r += String.fromCharCode(f[t.charCodeAt(d++)] << 4 | f[t.charCodeAt(d++)]);
    return new n(r);
  }, n.isValid = function(t) {
    return t == null ? !1 : typeof t == "number" ? !0 : typeof t == "string" ? t.length === 12 || t.length === 24 && u.test(t) : t instanceof n ? !0 : s(t) ? n.isValid(t.toString("hex")) : typeof t.toHexString == "function" && o && (t.id instanceof o || typeof t.id == "string") ? t.id.length === 12 || t.id.length === 24 && u.test(t.id) : !1;
  }, n.prototype = {
    constructor: n,
    /**
     * Return the ObjectID id as a 24 byte hex string representation
     *
     * @return {String} return the 24 byte hex string representation.
     * @api public
     */
    toHexString: function() {
      if (!this.id || !this.id.length)
        throw new Error(
          "invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [" + JSON.stringify(this.id) + "]"
        );
      if (this.id.length === 24)
        return this.id;
      if (s(this.id))
        return this.id.toString("hex");
      for (var t = "", r = 0; r < this.id.length; r++)
        t += l[this.id.charCodeAt(r)];
      return t;
    },
    /**
     * Compares the equality of this ObjectID with `otherID`.
     *
     * @param {Object} otherId ObjectID instance to compare against.
     * @return {Boolean} the result of comparing two ObjectID's
     * @api public
     */
    equals: function(t) {
      return t instanceof n ? this.toString() === t.toString() : typeof t == "string" && n.isValid(t) && t.length === 12 && s(this.id) ? t === this.id.toString("binary") : typeof t == "string" && n.isValid(t) && t.length === 24 ? t.toLowerCase() === this.toHexString() : typeof t == "string" && n.isValid(t) && t.length === 12 ? t === this.id : t != null && (t instanceof n || t.toHexString) ? t.toHexString() === this.toHexString() : !1;
    },
    /**
     * Returns the generation date (accurate up to the second) that this ID was generated.
     *
     * @return {Date} the generation date
     * @api public
     */
    getTimestamp: function() {
      var t = /* @__PURE__ */ new Date(), r;
      return s(this.id) ? r = this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24 : r = this.id.charCodeAt(3) | this.id.charCodeAt(2) << 8 | this.id.charCodeAt(1) << 16 | this.id.charCodeAt(0) << 24, t.setTime(Math.floor(r) * 1e3), t;
    },
    /**
    * Generate a 12 byte id buffer used in ObjectID's
    *
    * @method
    * @param {number} [time] optional parameter allowing to pass in a second based timestamp.
    * @return {string} return the 12 byte id buffer string.
    */
    generate: function(t) {
      typeof t != "number" && (t = ~~(Date.now() / 1e3)), t = parseInt(t, 10) % 4294967295;
      var r = _();
      return String.fromCharCode(
        t >> 24 & 255,
        t >> 16 & 255,
        t >> 8 & 255,
        t & 255,
        e >> 16 & 255,
        e >> 8 & 255,
        e & 255,
        c >> 8 & 255,
        c & 255,
        r >> 16 & 255,
        r >> 8 & 255,
        r & 255
      );
    }
  };
  function _() {
    return i = (i + 1) % 16777215;
  }
  function v(t, r) {
    return r = r.toString(16), r.length === t ? r : "00000000".substring(r.length, t) + r;
  }
  var A = Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") || "inspect";
  return n.prototype[A] = function() {
    return "ObjectID(" + this + ")";
  }, n.prototype.toJSON = n.prototype.toHexString, n.prototype.toString = n.prototype.toHexString, p;
}
var O = C();
const j = /* @__PURE__ */ b(O), L = 20, g = "AutomationsResponseType", R = w({
  dataType: g,
  path: "/automations/"
}), V = S({
  dataType: g,
  path: (e) => `/automations/${e}/`
}), I = E({
  method: "PUT",
  path: ({ id: e }) => `/automations/${e}/`,
  body: ({ status: e, actions: i, edges: c }) => ({
    automations: [{
      status: e,
      actions: i,
      edges: c
    }]
  }),
  invalidateQueries: {
    dataType: g
  }
}), F = () => j().toHexString(), H = JSON.stringify({
  root: {
    children: [{
      type: "paragraph",
      children: [{
        type: "text",
        text: "Untitled email body."
      }]
    }],
    direction: null,
    format: "",
    indent: 0,
    type: "root",
    version: 1
  }
}), M = () => ({
  id: F(),
  type: "wait",
  data: { wait_hours: 24 }
}), T = () => ({
  id: F(),
  type: "send_email",
  data: {
    email_subject: "Untitled email",
    email_lexical: H,
    email_sender_name: null,
    email_sender_email: null,
    email_sender_reply_to: null,
    // TODO NY-1252: replace this placeholder when email design settings are available.
    email_design_setting_id: "placeholder"
  }
}), x = (e, i) => {
  if (!e.actions.some((c) => c.id === i))
    throw new Error(`spliceAction: anchor references unknown action id "${i}"`);
}, B = (e, i, c) => e.edges.some((o) => o.source_action_id === i && o.target_action_id === c), y = ({ detail: e, action: i, anchor: c }) => {
  const { previousActionId: o, nextActionId: s } = c;
  if (o !== void 0 && x(e, o), s !== void 0 && x(e, s), o === void 0 && s === void 0 && e.actions.length > 0)
    throw new Error("spliceAction: anchor is required when inserting into a non-empty automation");
  if (o !== void 0 && s !== void 0 && !B(e, o, s))
    throw new Error(`spliceAction: anchor edge "${o}" -> "${s}" does not exist`);
  if (o !== void 0 && s === void 0 && e.edges.some((u) => u.source_action_id === o))
    throw new Error(`spliceAction: anchor previousActionId "${o}" is not the tail action`);
  if (o === void 0 && s !== void 0 && e.edges.some((u) => u.target_action_id === s))
    throw new Error(`spliceAction: anchor nextActionId "${s}" is not the head action`);
  const l = [...e.actions, i], a = e.edges.filter((u) => !(u.source_action_id === o && u.target_action_id === s));
  return o !== void 0 && a.push({ source_action_id: o, target_action_id: i.id }), s !== void 0 && a.push({ source_action_id: i.id, target_action_id: s }), { ...e, actions: l, edges: a };
}, U = ({ detail: e, anchor: i }) => y({ detail: e, action: M(), anchor: i }), q = ({ detail: e, anchor: i }) => y({ detail: e, action: T(), anchor: i });
export {
  $ as A,
  L as M,
  U as a,
  V as b,
  I as c,
  q as i,
  R as u
};
//# sourceMappingURL=automations-DFtnFnzP.mjs.map
