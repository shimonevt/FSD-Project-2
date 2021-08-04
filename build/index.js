/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e = {
      638: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, i) {
          "use strict";
          var o = [],
            a = Object.getPrototypeOf,
            s = o.slice,
            u = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            l = o.push,
            c = o.indexOf,
            f = {},
            d = f.toString,
            p = f.hasOwnProperty,
            h = p.toString,
            v = h.call(Object),
            y = {},
            g = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            m = function (e) {
              return null != e && e === e.window;
            },
            b = r.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              i,
              o = (n = n || b).createElement("script");
            if (((o.text = e), t))
              for (r in x)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[d.call(e)] || "object"
              : typeof e;
          }
          var S = "3.6.0",
            j = function (e, t) {
              return new j.fn.init(e, t);
            };
          function C(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !g(e) &&
              !m(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (j.fn = j.prototype =
            {
              jquery: S,
              constructor: j,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = j.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return j.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  j.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  j.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  j.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: o.sort,
              splice: o.splice,
            }),
            (j.extend = j.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof a &&
                    ((l = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || g(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (l &&
                          r &&
                          (j.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = a[t]),
                              (o =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || j.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (a[t] = j.extend(l, o, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            j.extend({
              expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== d.call(e) ||
                  ((t = a(e)) &&
                    ("function" !=
                      typeof (n = p.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== v))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (C(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (C(Object(e))
                      ? j.merge(n, "string" == typeof e ? [e] : e)
                      : l.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                  !t(e[i], i) !== a && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  a = [];
                if (C(e))
                  for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return u(a);
              },
              guid: 1,
              support: y,
            }),
            "function" == typeof Symbol &&
              (j.fn[Symbol.iterator] = o[Symbol.iterator]),
            j.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var k = (function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              v,
              y,
              g,
              m,
              b,
              x = "sizzle" + 1 * new Date(),
              w = e.document,
              T = 0,
              S = 0,
              j = ue(),
              C = ue(),
              k = ue(),
              _ = ue(),
              E = function (e, t) {
                return e === t && (f = !0), 0;
              },
              P = {}.hasOwnProperty,
              O = [],
              D = O.pop,
              V = O.push,
              A = O.push,
              N = O.slice,
              L = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              q = "[\\x20\\t\\r\\n\\f]",
              H =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              B =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                H +
                ")(?:" +
                q +
                "*([*^$|!~]?=)" +
                q +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                H +
                "))|)" +
                q +
                "*\\]",
              M =
                ":(" +
                H +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                B +
                ")*)|.*)\\)|)",
              I = new RegExp(q + "+", "g"),
              F = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              $ = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              z = new RegExp(q + "|>"),
              U = new RegExp(M),
              X = new RegExp("^" + H + "$"),
              Y = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              G = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              oe = function () {
                d();
              },
              ae = xe(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              A.apply((O = N.call(w.childNodes)), w.childNodes),
                O[w.childNodes.length].nodeType;
            } catch (e) {
              A = {
                apply: O.length
                  ? function (e, t) {
                      V.apply(e, N.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, i) {
              var o,
                s,
                l,
                c,
                f,
                h,
                g,
                m = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!i && (d(t), (t = t || p), v)) {
                if (11 !== w && (f = Z.exec(e)))
                  if ((o = f[1])) {
                    if (9 === w) {
                      if (!(l = t.getElementById(o))) return r;
                      if (l.id === o) return r.push(l), r;
                    } else if (
                      m &&
                      (l = m.getElementById(o)) &&
                      b(t, l) &&
                      l.id === o
                    )
                      return r.push(l), r;
                  } else {
                    if (f[2]) return A.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (o = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return A.apply(r, t.getElementsByClassName(o)), r;
                  }
                if (
                  n.qsa &&
                  !_[e + " "] &&
                  (!y || !y.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((g = e), (m = t), 1 === w && (z.test(e) || $.test(e)))) {
                    for (
                      ((m = (ee.test(e) && ge(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(re, ie))
                          : t.setAttribute("id", (c = x))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                    g = h.join(",");
                  }
                  try {
                    return A.apply(r, m.querySelectorAll(g)), r;
                  } catch (t) {
                    _(e, !0);
                  } finally {
                    c === x && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace(F, "$1"), t, r, i);
            }
            function ue() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            }
            function le(e) {
              return (e[x] = !0), e;
            }
            function ce(e) {
              var t = p.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function fe(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function de(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function pe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ve(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ye(e) {
              return le(function (t) {
                return (
                  (t = +t),
                  le(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                      n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function ge(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (o = se.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !G.test(t || (n && n.nodeName) || "HTML");
              }),
            (d = se.setDocument =
              function (e) {
                var t,
                  i,
                  a = e ? e.ownerDocument || e : w;
                return a != p && 9 === a.nodeType && a.documentElement
                  ? ((h = (p = a).documentElement),
                    (v = !o(p)),
                    w != p &&
                      (i = p.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", oe, !1)
                        : i.attachEvent && i.attachEvent("onunload", oe)),
                    (n.scope = ce(function (e) {
                      return (
                        h.appendChild(e).appendChild(p.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ce(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                      return (
                        e.appendChild(p.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      p.getElementsByClassName
                    )),
                    (n.getById = ce(function (e) {
                      return (
                        (h.appendChild(e).id = x),
                        !p.getElementsByName || !p.getElementsByName(x).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n,
                              r,
                              i,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                i = t.getElementsByName(e), r = 0;
                                (o = i[r++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return o;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                          return t.getElementsByClassName(e);
                      }),
                    (g = []),
                    (y = []),
                    (n.qsa = K.test(p.querySelectorAll)) &&
                      (ce(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          x +
                          "'></a><select id='" +
                          x +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            y.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"
                            ),
                          e.querySelectorAll("[id~=" + x + "-]").length ||
                            y.push("~="),
                          (t = p.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            y.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            y.push(":checked"),
                          e.querySelectorAll("a#" + x + "+*").length ||
                            y.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          y.push("[\\r\\n\\f]");
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            y.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            y.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            y.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          y.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
                      (m =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ce(function (e) {
                        (n.disconnectedMatch = m.call(e, "*")),
                          m.call(e, "[s!='']:x"),
                          g.push("!=", M);
                      }),
                    (y = y.length && new RegExp(y.join("|"))),
                    (g = g.length && new RegExp(g.join("|"))),
                    (t = K.test(h.compareDocumentPosition)),
                    (b =
                      t || K.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (E = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == p || (e.ownerDocument == w && b(w, e))
                                ? -1
                                : t == p || (t.ownerDocument == w && b(w, t))
                                ? 1
                                : c
                                ? L(c, e) - L(c, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var n,
                            r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!i || !o)
                            return e == p
                              ? -1
                              : t == p
                              ? 1
                              : i
                              ? -1
                              : o
                              ? 1
                              : c
                              ? L(c, e) - L(c, t)
                              : 0;
                          if (i === o) return de(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? de(a[r], s[r])
                            : a[r] == w
                            ? -1
                            : s[r] == w
                            ? 1
                            : 0;
                        }),
                    p)
                  : p;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (d(e),
                n.matchesSelector &&
                  v &&
                  !_[t + " "] &&
                  (!g || !g.test(t)) &&
                  (!y || !y.test(t)))
              )
                try {
                  var r = m.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  _(t, !0);
                }
              return se(t, p, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != p && d(e), b(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != p && d(e);
              var i = r.attrHandle[t.toLowerCase()],
                o =
                  i && P.call(r.attrHandle, t.toLowerCase())
                    ? i(e, t, !v)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !v
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, ie);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(E),
                f)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (c = null), e;
            }),
            (i = se.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i(t);
                return n;
              }),
            ((r = se.selectors =
              {
                cacheLength: 50,
                createPseudo: le,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            U.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = j[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + q + "|$)"
                      )) &&
                        j(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var i = se.attr(r, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var l,
                            c,
                            f,
                            d,
                            p,
                            h,
                            v = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            b = !1;
                          if (y) {
                            if (o) {
                              for (; v; ) {
                                for (d = t; (d = d[v]); )
                                  if (
                                    s
                                      ? d.nodeName.toLowerCase() === g
                                      : 1 === d.nodeType
                                  )
                                    return !1;
                                h = v = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? y.firstChild : y.lastChild]), a && m)
                            ) {
                              for (
                                b =
                                  (p =
                                    (l =
                                      (c =
                                        (f = (d = y)[x] || (d[x] = {}))[
                                          d.uniqueID
                                        ] || (f[d.uniqueID] = {}))[e] ||
                                      [])[0] === T && l[1]) && l[2],
                                  d = p && y.childNodes[p];
                                (d =
                                  (++p && d && d[v]) || (b = p = 0) || h.pop());

                              )
                                if (1 === d.nodeType && ++b && d === t) {
                                  c[e] = [T, p, b];
                                  break;
                                }
                            } else if (
                              (m &&
                                (b = p =
                                  (l =
                                    (c =
                                      (f = (d = t)[x] || (d[x] = {}))[
                                        d.uniqueID
                                      ] || (f[d.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (d =
                                  (++p && d && d[v]) ||
                                  (b = p = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? d.nodeName.toLowerCase() !== g
                                  : 1 !== d.nodeType) ||
                                  !++b ||
                                  (m &&
                                    ((c =
                                      (f = d[x] || (d[x] = {}))[d.uniqueID] ||
                                      (f[d.uniqueID] = {}))[e] = [T, b]),
                                  d !== t));

                              );
                            return (b -= i) === r || (b % r == 0 && b / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return i[x]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? le(function (e, n) {
                              for (var r, o = i(e, t), a = o.length; a--; )
                                e[(r = L(e, o[a]))] = !(n[r] = o[a]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: le(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace(F, "$1"));
                    return r[x]
                      ? le(function (e, t, n, i) {
                          for (
                            var o, a = r(e, null, i, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, i, o) {
                          return (
                            (t[0] = e),
                            r(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: le(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: le(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: le(function (e) {
                    return (
                      X.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = v
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === p.activeElement &&
                      (!p.hasFocus || p.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ve(!1),
                  disabled: ve(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ye(function () {
                    return [0];
                  }),
                  last: ye(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ye(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ye(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ye(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ye(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ye(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = pe(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function me() {}
            function be(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function xe(e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = S++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      d = [T, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((l = c[o]) && l[0] === T && l[1] === s)
                              return (d[2] = l[2]);
                            if (((c[o] = d), (d[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, r, i) {
              for (
                var o, a = [], s = 0, u = e.length, l = null != t;
                s < u;
                s++
              )
                (o = e[s]) &&
                  ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
              return a;
            }
            function Se(e, t, n, r, i, o) {
              return (
                r && !r[x] && (r = Se(r)),
                i && !i[x] && (i = Se(i, o)),
                le(function (o, a, s, u) {
                  var l,
                    c,
                    f,
                    d = [],
                    p = [],
                    h = a.length,
                    v =
                      o ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || (!o && t) ? v : Te(v, d, e, s, u),
                    g = n ? (i || (o ? e : h || r) ? [] : a) : y;
                  if ((n && n(y, g, s, u), r))
                    for (l = Te(g, p), r(l, [], s, u), c = l.length; c--; )
                      (f = l[c]) && (g[p[c]] = !(y[p[c]] = f));
                  if (o) {
                    if (i || e) {
                      if (i) {
                        for (l = [], c = g.length; c--; )
                          (f = g[c]) && l.push((y[c] = f));
                        i(null, (g = []), l, u);
                      }
                      for (c = g.length; c--; )
                        (f = g[c]) &&
                          (l = i ? L(o, f) : d[c]) > -1 &&
                          (o[l] = !(a[l] = f));
                    }
                  } else (g = Te(g === a ? g.splice(h, g.length) : g)), i ? i(null, a, g, u) : A.apply(a, g);
                })
              );
            }
            function je(e) {
              for (
                var t,
                  n,
                  i,
                  o = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  c = xe(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  f = xe(
                    function (e) {
                      return L(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  d = [
                    function (e, n, r) {
                      var i =
                        (!a && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                      return (t = null), i;
                    },
                  ];
                u < o;
                u++
              )
                if ((n = r.relative[e[u].type])) d = [xe(we(d), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                    for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                    return Se(
                      u > 1 && we(d),
                      u > 1 &&
                        be(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(F, "$1"),
                      n,
                      u < i && je(e.slice(u, i)),
                      i < o && je((e = e.slice(i))),
                      i < o && be(e)
                    );
                  }
                  d.push(n);
                }
              return we(d);
            }
            return (
              (me.prototype = r.filters = r.pseudos),
              (r.setFilters = new me()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = C[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (s = e, u = [], l = r.preFilter; s; ) {
                    for (a in ((n && !(i = W.exec(s))) ||
                      (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                    (n = !1),
                    (i = $.exec(s)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(F, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(i = Y[a].exec(s)) ||
                        (l[a] && !(i = l[a](i))) ||
                        ((n = i.shift()),
                        o.push({ value: n, type: a, matches: i }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : C(e, u).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    i = [],
                    o = [],
                    s = k[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = je(t[n]))[x] ? i.push(s) : o.push(s);
                    (s = k(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          o = function (o, a, s, u, c) {
                            var f,
                              h,
                              y,
                              g = 0,
                              m = "0",
                              b = o && [],
                              x = [],
                              w = l,
                              S = o || (i && r.find.TAG("*", c)),
                              j = (T += null == w ? 1 : Math.random() || 0.1),
                              C = S.length;
                            for (
                              c && (l = a == p || a || c);
                              m !== C && null != (f = S[m]);
                              m++
                            ) {
                              if (i && f) {
                                for (
                                  h = 0,
                                    a ||
                                      f.ownerDocument == p ||
                                      (d(f), (s = !v));
                                  (y = e[h++]);

                                )
                                  if (y(f, a || p, s)) {
                                    u.push(f);
                                    break;
                                  }
                                c && (T = j);
                              }
                              n && ((f = !y && f) && g--, o && b.push(f));
                            }
                            if (((g += m), n && m !== g)) {
                              for (h = 0; (y = t[h++]); ) y(b, x, a, s);
                              if (o) {
                                if (g > 0)
                                  for (; m--; )
                                    b[m] || x[m] || (x[m] = D.call(u));
                                x = Te(x);
                              }
                              A.apply(u, x),
                                c &&
                                  !o &&
                                  x.length > 0 &&
                                  g + t.length > 1 &&
                                  se.uniqueSort(u);
                            }
                            return c && ((T = j), (l = w)), b;
                          };
                        return n ? le(o) : o;
                      })(o, i)
                    )).selector = e;
                  }
                  return s;
                }),
              (u = se.select =
                function (e, t, n, i) {
                  var o,
                    u,
                    l,
                    c,
                    f,
                    d = "function" == typeof e && e,
                    p = !i && a((e = d.selector || e));
                  if (((n = n || []), 1 === p.length)) {
                    if (
                      (u = p[0] = p[0].slice(0)).length > 2 &&
                      "ID" === (l = u[0]).type &&
                      9 === t.nodeType &&
                      v &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      d && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      o = Y.needsContext.test(e) ? 0 : u.length;
                      o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                    )
                      if (
                        (f = r.find[c]) &&
                        (i = f(
                          l.matches[0].replace(te, ne),
                          (ee.test(u[0].type) && ge(t.parentNode)) || t
                        ))
                      ) {
                        if ((u.splice(o, 1), !(e = i.length && be(u))))
                          return A.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (d || s(e, p))(
                      i,
                      t,
                      !v,
                      n,
                      !t || (ee.test(e) && ge(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = x.split("").sort(E).join("") === x),
              (n.detectDuplicates = !!f),
              d(),
              (n.sortDetached = ce(function (e) {
                return (
                  1 & e.compareDocumentPosition(p.createElement("fieldset"))
                );
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                fe("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                fe("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                fe(R, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(r);
          (j.find = k),
            (j.expr = k.selectors),
            (j.expr[":"] = j.expr.pseudos),
            (j.uniqueSort = j.unique = k.uniqueSort),
            (j.text = k.getText),
            (j.isXMLDoc = k.isXML),
            (j.contains = k.contains),
            (j.escapeSelector = k.escape);
          var _ = function (e, t, n) {
              for (
                var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && j(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            E = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            P = j.expr.match.needsContext;
          function O(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var D =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function V(e, t, n) {
            return g(t)
              ? j.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? j.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? j.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : j.filter(t, e, n);
          }
          (j.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? j.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : j.find.matches(
                    e,
                    j.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            j.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    j(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (j.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  j.find(e, i[t], n);
                return r > 1 ? j.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(V(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(V(this, e || [], !0));
              },
              is: function (e) {
                return !!V(
                  this,
                  "string" == typeof e && P.test(e) ? j(e) : e || [],
                  !1
                ).length;
              },
            });
          var A,
            N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((j.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || A), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : N.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof j ? t[0] : t),
                  j.merge(
                    this,
                    j.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  D.test(r[1]) && j.isPlainObject(t))
                )
                  for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (i = b.getElementById(r[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : g(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(j)
              : j.makeArray(e, this);
          }).prototype = j.fn),
            (A = j(b));
          var L = /^(?:parents|prev(?:Until|All))/,
            R = { children: !0, contents: !0, next: !0, prev: !0 };
          function q(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          j.fn.extend({
            has: function (e) {
              var t = j(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (j.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && j(e);
              if (!P.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && j.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? j.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(j(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(j.uniqueSort(j.merge(this.get(), j(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            j.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return _(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return _(e, "parentNode", n);
                },
                next: function (e) {
                  return q(e, "nextSibling");
                },
                prev: function (e) {
                  return q(e, "previousSibling");
                },
                nextAll: function (e) {
                  return _(e, "nextSibling");
                },
                prevAll: function (e) {
                  return _(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return _(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return _(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return E((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return E(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (O(e, "template") && (e = e.content || e),
                      j.merge([], e.childNodes));
                },
              },
              function (e, t) {
                j.fn[e] = function (n, r) {
                  var i = j.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = j.filter(r, i)),
                    this.length > 1 &&
                      (R[e] || j.uniqueSort(i), L.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var H = /[^\x20\t\r\n\f]+/g;
          function B(e) {
            return e;
          }
          function M(e) {
            throw e;
          }
          function I(e, t, n, r) {
            var i;
            try {
              e && g((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && g((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (j.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      j.each(e.match(H) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : j.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              a = [],
              s = -1,
              u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((s = o.length - 1), a.push(n)),
                      (function t(n) {
                        j.each(n, function (n, r) {
                          g(r)
                            ? (e.unique && l.has(r)) || o.push(r)
                            : r && r.length && "string" !== T(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    j.each(arguments, function (e, t) {
                      for (var n; (n = j.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? j.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            j.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      j.Callbacks("memory"),
                      j.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      j.Callbacks("once memory"),
                      j.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      j.Callbacks("once memory"),
                      j.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return j
                        .Deferred(function (n) {
                          j.each(t, function (t, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function () {
                              var e = i && i.apply(this, arguments);
                              e && g(e.promise)
                                ? e
                                    .promise()
                                    .progress(n.notify)
                                    .done(n.resolve)
                                    .fail(n.reject)
                                : n[r[0] + "With"](this, i ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        })
                        .promise();
                    },
                    then: function (e, n, i) {
                      var o = 0;
                      function a(e, t, n, i) {
                        return function () {
                          var s = this,
                            u = arguments,
                            l = function () {
                              var r, l;
                              if (!(e < o)) {
                                if ((r = n.apply(s, u)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (l =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  g(l)
                                    ? i
                                      ? l.call(r, a(o, t, B, i), a(o, t, M, i))
                                      : (o++,
                                        l.call(
                                          r,
                                          a(o, t, B, i),
                                          a(o, t, M, i),
                                          a(o, t, B, t.notifyWith)
                                        ))
                                    : (n !== B && ((s = void 0), (u = [r])),
                                      (i || t.resolveWith)(s, u));
                              }
                            },
                            c = i
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (r) {
                                    j.Deferred.exceptionHook &&
                                      j.Deferred.exceptionHook(r, c.stackTrace),
                                      e + 1 >= o &&
                                        (n !== M && ((s = void 0), (u = [r])),
                                        t.rejectWith(s, u));
                                  }
                                };
                          e
                            ? c()
                            : (j.Deferred.getStackHook &&
                                (c.stackTrace = j.Deferred.getStackHook()),
                              r.setTimeout(c));
                        };
                      }
                      return j
                        .Deferred(function (r) {
                          t[0][3].add(a(0, r, g(i) ? i : B, r.notifyWith)),
                            t[1][3].add(a(0, r, g(e) ? e : B)),
                            t[2][3].add(a(0, r, g(n) ? n : M));
                        })
                        .promise();
                    },
                    promise: function (e) {
                      return null != e ? j.extend(e, i) : i;
                    },
                  },
                  o = {};
                return (
                  j.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (i[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (o[r[0]] = function () {
                        return (
                          o[r[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[r[0] + "With"] = a.fireWith);
                  }),
                  i.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = s.call(arguments),
                  o = j.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || o.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (I(e, o.done(a(n)).resolve, o.reject, !t),
                  "pending" === o.state() || g(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) I(i[n], a(n), o.reject);
                return o.promise();
              },
            });
          var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (j.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              F.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (j.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var W = j.Deferred();
          function $() {
            b.removeEventListener("DOMContentLoaded", $),
              r.removeEventListener("load", $),
              j.ready();
          }
          (j.fn.ready = function (e) {
            return (
              W.then(e).catch(function (e) {
                j.readyException(e);
              }),
              this
            );
          }),
            j.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --j.readyWait : j.isReady) ||
                  ((j.isReady = !0),
                  (!0 !== e && --j.readyWait > 0) || W.resolveWith(b, [j]));
              },
            }),
            (j.ready.then = W.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? r.setTimeout(j.ready)
              : (b.addEventListener("DOMContentLoaded", $),
                r.addEventListener("load", $));
          var z = function (e, t, n, r, i, o, a) {
              var s = 0,
                u = e.length,
                l = null == n;
              if ("object" === T(n))
                for (s in ((i = !0), n)) z(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== r &&
                ((i = !0),
                g(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(j(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            },
            U = /^-ms-/,
            X = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function G(e) {
            return e.replace(U, "ms-").replace(X, Y);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = j.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[G(t)] = n;
                else for (r in t) i[G(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][G(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(G)
                      : (t = G(t)) in r
                      ? [t]
                      : t.match(H) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || j.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !j.isEmptyObject(t);
              },
            });
          var K = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          j.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            j.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = Z.get(o)),
                    1 === o.nodeType && !K.get(o, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = G(r.slice(5))), ne(o, r, i[r]));
                    K.set(o, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : z(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = Z.get(o, e)) ||
                            void 0 !== (n = ne(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            j.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = K.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = K.access(e, t, j.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = j.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = j._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        j.dequeue(e, t);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: j.Callbacks("once memory").add(function () {
                      K.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            j.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? j.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = j.queue(this, e, t);
                        j._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            j.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  j.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = j.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = K.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            ae = b.documentElement,
            se = function (e) {
              return j.contains(e.ownerDocument, e);
            },
            ue = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                j.contains(e.ownerDocument, e) ||
                e.getRootNode(ue) === e.ownerDocument
              );
            });
          var le = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === j.css(e, "display"))
            );
          };
          function ce(e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return j.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (j.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (j.cssNumber[t] || ("px" !== l && +u)) &&
                ie.exec(j.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                j.style(e, t, c + l),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), j.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          }
          var fe = {};
          function de(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = fe[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = j.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (fe[r] = i),
              i)
            );
          }
          function pe(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((i[o] = K.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && le(r) && (i[o] = de(r)))
                  : "none" !== n && ((i[o] = "none"), K.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          j.fn.extend({
            show: function () {
              return pe(this, !0);
            },
            hide: function () {
              return pe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    le(this) ? j(this).show() : j(this).hide();
                  });
            },
          });
          var he,
            ve,
            ye = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i;
          (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (ve = b.createElement("input")).setAttribute("type", "radio"),
            ve.setAttribute("checked", "checked"),
            ve.setAttribute("name", "t"),
            he.appendChild(ve),
            (y.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (y.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (y.option = !!he.lastChild);
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function xe(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && O(e, t)) ? j.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            y.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Se(e, t, n, r, i) {
            for (
              var o,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                d = [],
                p = 0,
                h = e.length;
              p < h;
              p++
            )
              if ((o = e[p]) || 0 === o)
                if ("object" === T(o)) j.merge(d, o.nodeType ? [o] : o);
                else if (Te.test(o)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      s = (ge.exec(o) || ["", ""])[1].toLowerCase(),
                      u = be[s] || be._default,
                      a.innerHTML = u[1] + j.htmlPrefilter(o) + u[2],
                      c = u[0];
                    c--;

                  )
                    a = a.lastChild;
                  j.merge(d, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
            for (f.textContent = "", p = 0; (o = d[p++]); )
              if (r && j.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((l = se(o)),
                (a = xe(f.appendChild(o), "script")),
                l && we(a),
                n)
              )
                for (c = 0; (o = a[c++]); ) me.test(o.type || "") && n.push(o);
            return f;
          }
          var je = /^([^.]*)(?:\.(.+)|)/;
          function Ce() {
            return !0;
          }
          function ke() {
            return !1;
          }
          function _e(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ee(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Ee(e, s, n, r, t[s], o);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = ke;
            else if (!i) return e;
            return (
              1 === o &&
                ((a = i),
                ((i = function (e) {
                  return j().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = j.guid++))),
              e.each(function () {
                j.event.add(this, t, i, r, n);
              })
            );
          }
          function Pe(e, t, n) {
            n
              ? (K.set(e, t, !1),
                j.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      o = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (j.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = s.call(arguments)),
                        K.set(this, t, o),
                        (r = n(this, t)),
                        this[t](),
                        o !== (i = K.get(this, t)) || r
                          ? K.set(this, t, !1)
                          : (i = {}),
                        o !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i && i.value
                        );
                    } else
                      o.length &&
                        (K.set(this, t, {
                          value: j.event.trigger(
                            j.extend(o[0], j.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && j.event.add(e, t, Ce);
          }
          (j.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                v,
                y = K.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && j.find.matchesSelector(ae, i),
                    n.guid || (n.guid = j.guid++),
                    (u = y.events) || (u = y.events = Object.create(null)),
                    (a = y.handle) ||
                      (a = y.handle =
                        function (t) {
                          return void 0 !== j && j.event.triggered !== t.type
                            ? j.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || "").match(H) || [""]).length;
                  l--;

                )
                  (p = v = (s = je.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p &&
                      ((f = j.event.special[p] || {}),
                      (p = (i ? f.delegateType : f.bindType) || p),
                      (f = j.event.special[p] || {}),
                      (c = j.extend(
                        {
                          type: p,
                          origType: v,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && j.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (d = u[p]) ||
                        (((d = u[p] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(p, a))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                      (j.event.global[p] = !0));
            },
            remove: function (e, t, n, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                v,
                y = K.hasData(e) && K.get(e);
              if (y && (u = y.events)) {
                for (l = (t = (t || "").match(H) || [""]).length; l--; )
                  if (
                    ((p = v = (s = je.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p)
                  ) {
                    for (
                      f = j.event.special[p] || {},
                        d =
                          u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = o = d.length;
                      o--;

                    )
                      (c = d[o]),
                        (!i && v !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (d.splice(o, 1),
                          c.selector && d.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    a &&
                      !d.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                        j.removeEvent(e, p, y.handle),
                      delete u[p]);
                  } else for (p in u) j.event.remove(e, p + t[l], n, r, !0);
                j.isEmptyObject(u) && K.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = j.event.fix(e),
                l =
                  (K.get(this, "events") || Object.create(null))[u.type] || [],
                c = j.event.special[u.type] || {};
              for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  a = j.event.handlers.call(this, u, l), t = 0;
                  (i = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== o.namespace &&
                      !u.rnamespace.test(o.namespace)) ||
                      ((u.handleObj = o),
                      (u.data = o.data),
                      void 0 !==
                        (r = (
                          (j.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ("click" !== e.type || !0 !== l.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(i = (r = t[n]).selector + " ")] &&
                        (a[i] = r.needsContext
                          ? j(i, this).index(l) > -1
                          : j.find(i, this, null, [l]).length),
                        a[i] && o.push(r);
                    o.length && s.push({ elem: l, handlers: o });
                  }
              return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(j.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[j.expando] ? e : new j.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ye.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      Pe(t, "click", Ce),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ye.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      Pe(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ye.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      K.get(t, "click")) ||
                    O(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (j.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (j.Event = function (e, t) {
              if (!(this instanceof j.Event)) return new j.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ce
                      : ke),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && j.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[j.expando] = !0);
            }),
            (j.Event.prototype = {
              constructor: j.Event,
              isDefaultPrevented: ke,
              isPropagationStopped: ke,
              isImmediatePropagationStopped: ke,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ce),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ce),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ce),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            j.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              j.event.addProp
            ),
            j.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              j.event.special[e] = {
                setup: function () {
                  return Pe(this, e, _e), !1;
                },
                trigger: function () {
                  return Pe(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            j.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                j.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = this,
                      i = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (i && (i === r || j.contains(r, i))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            j.fn.extend({
              on: function (e, t, n, r) {
                return Ee(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Ee(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    j(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = ke),
                  this.each(function () {
                    j.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Oe = /<script|<style|<link/i,
            De = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Ae(e, t) {
            return (
              (O(e, "table") &&
                O(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                j(e).children("tbody")[0]) ||
              e
            );
          }
          function Ne(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Le(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Re(e, t) {
            var n, r, i, o, a, s;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (s = K.get(e).events))
                for (i in (K.remove(t, "handle events"), s))
                  for (n = 0, r = s[i].length; n < r; n++)
                    j.event.add(t, i, s[i][n]);
              Z.hasData(e) &&
                ((o = Z.access(e)), (a = j.extend({}, o)), Z.set(t, a));
            }
          }
          function qe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ye.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function He(e, t, n, r) {
            t = u(t);
            var i,
              o,
              a,
              s,
              l,
              c,
              f = 0,
              d = e.length,
              p = d - 1,
              h = t[0],
              v = g(h);
            if (
              v ||
              (d > 1 && "string" == typeof h && !y.checkClone && De.test(h))
            )
              return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = h.call(this, i, o.html())), He(o, t, n, r);
              });
            if (
              d &&
              ((o = (i = Se(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (s = (a = j.map(xe(i, "script"), Ne)).length; f < d; f++)
                (l = i),
                  f !== p &&
                    ((l = j.clone(l, !0, !0)),
                    s && j.merge(a, xe(l, "script"))),
                  n.call(e[f], l, f);
              if (s)
                for (
                  c = a[a.length - 1].ownerDocument, j.map(a, Le), f = 0;
                  f < s;
                  f++
                )
                  (l = a[f]),
                    me.test(l.type || "") &&
                      !K.access(l, "globalEval") &&
                      j.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? j._evalUrl &&
                          !l.noModule &&
                          j._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute("nonce") },
                            c
                          )
                        : w(l.textContent.replace(Ve, ""), l, c));
            }
            return e;
          }
          function Be(e, t, n) {
            for (
              var r, i = t ? j.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || j.cleanData(xe(r)),
                r.parentNode &&
                  (n && se(r) && we(xe(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          j.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = se(e);
              if (
                !(
                  y.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  j.isXMLDoc(e)
                )
              )
                for (a = xe(s), r = 0, i = (o = xe(e)).length; r < i; r++)
                  qe(o[r], a[r]);
              if (t)
                if (n)
                  for (
                    o = o || xe(e), a = a || xe(s), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    Re(o[r], a[r]);
                else Re(e, s);
              return (
                (a = xe(s, "script")).length > 0 &&
                  we(a, !u && xe(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = j.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (Q(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? j.event.remove(n, r)
                          : j.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            j.fn.extend({
              detach: function (e) {
                return Be(this, e, !0);
              },
              remove: function (e) {
                return Be(this, e);
              },
              text: function (e) {
                return z(
                  this,
                  function (e) {
                    return void 0 === e
                      ? j.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return He(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Ae(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return He(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return He(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return He(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (j.cleanData(xe(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return j.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return z(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Oe.test(e) &&
                      !be[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = j.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (j.cleanData(xe(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return He(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    j.inArray(this, e) < 0 &&
                      (j.cleanData(xe(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            j.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                j.fn[e] = function (e) {
                  for (
                    var n, r = [], i = j(e), o = i.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      j(i[a])[t](n),
                      l.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            Ie = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Fe = function (e, t, n) {
              var r,
                i,
                o = {};
              for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
              return r;
            },
            We = new RegExp(oe.join("|"), "i");
          function $e(e, t, n) {
            var r,
              i,
              o,
              a,
              s = e.style;
            return (
              (n = n || Ie(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = j.style(e, t)),
                !y.pixelBoxStyles() &&
                  Me.test(a) &&
                  We.test(t) &&
                  ((r = s.width),
                  (i = s.minWidth),
                  (o = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = i),
                  (s.maxWidth = o))),
              void 0 !== a ? a + "" : a
            );
          }
          function ze(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(l).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (o = 12 === t(c.offsetWidth / 3)),
                  ae.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              o,
              a,
              s,
              u,
              l = b.createElement("div"),
              c = b.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (y.clearCloneStyle = "content-box" === c.style.backgroundClip),
              j.extend(y, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == s &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (i = r.getComputedStyle(t)),
                      (s =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ue = ["Webkit", "Moz", "ms"],
            Xe = b.createElement("div").style,
            Ye = {};
          function Ge(e) {
            return (
              j.cssProps[e] ||
              Ye[e] ||
              (e in Xe
                ? e
                : (Ye[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                        n--;

                      )
                        if ((e = Ue[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Qe = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            Ke = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function tt(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += j.css(e, n + oe[a], !0, i)),
                r
                  ? ("content" === n &&
                      (u -= j.css(e, "padding" + oe[a], !0, i)),
                    "margin" !== n &&
                      (u -= j.css(e, "border" + oe[a] + "Width", !0, i)))
                  : ((u += j.css(e, "padding" + oe[a], !0, i)),
                    "padding" !== n
                      ? (u += j.css(e, "border" + oe[a] + "Width", !0, i))
                      : (s += j.css(e, "border" + oe[a] + "Width", !0, i)));
            return (
              !r &&
                o >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function nt(e, t, n) {
            var r = Ie(e),
              i =
                (!y.boxSizingReliable() || n) &&
                "border-box" === j.css(e, "boxSizing", !1, r),
              o = i,
              a = $e(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Me.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!y.boxSizingReliable() && i) ||
                (!y.reliableTrDimensions() && O(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === j.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === j.css(e, "boxSizing", !1, r)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                tt(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
            );
          }
          function rt(e, t, n, r, i) {
            return new rt.prototype.init(e, t, n, r, i);
          }
          j.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = $e(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  a,
                  s = G(t),
                  u = Je.test(t),
                  l = e.style;
                if (
                  (u || (t = Ge(s)),
                  (a = j.cssHooks[t] || j.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                    ? i
                    : l[t];
                "string" == (o = typeof n) &&
                  (i = ie.exec(n)) &&
                  i[1] &&
                  ((n = ce(e, t, i)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      u ||
                      (n += (i && i[3]) || (j.cssNumber[s] ? "" : "px")),
                    y.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (l[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                a,
                s = G(t);
              return (
                Je.test(t) || (t = Ge(s)),
                (a = j.cssHooks[t] || j.cssHooks[s]) &&
                  "get" in a &&
                  (i = a.get(e, !0, n)),
                void 0 === i && (i = $e(e, t, r)),
                "normal" === i && t in Ze && (i = Ze[t]),
                "" === n || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            j.each(["height", "width"], function (e, t) {
              j.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Qe.test(j.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, r)
                      : Fe(e, Ke, function () {
                          return nt(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    o = Ie(e),
                    a = !y.scrollboxSize() && "absolute" === o.position,
                    s =
                      (a || r) && "border-box" === j.css(e, "boxSizing", !1, o),
                    u = r ? tt(e, t, r, s, o) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          tt(e, t, "border", !1, o) -
                          0.5
                      )),
                    u &&
                      (i = ie.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = j.css(e, t))),
                    et(0, n, u)
                  );
                },
              };
            }),
            (j.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat($e(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Fe(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            j.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (j.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                  },
                }),
                  "margin" !== e && (j.cssHooks[e + t].set = et);
              }
            ),
            j.fn.extend({
              css: function (e, t) {
                return z(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Ie(e), i = t.length; a < i; a++)
                        o[t[a]] = j.css(e, t[a], !1, r);
                      return o;
                    }
                    return void 0 !== n ? j.style(e, t, n) : j.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (j.Tween = rt),
            (rt.prototype = {
              constructor: rt,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || j.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (j.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = rt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : rt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = rt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        j.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (rt.prototype.init.prototype = rt.prototype),
            (rt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = j.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  j.fx.step[e.prop]
                    ? j.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!j.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : j.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (j.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (j.fx = rt.prototype.init),
            (j.fx.step = {});
          var it,
            ot,
            at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
          function ut() {
            ot &&
              (!1 === b.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ut)
                : r.setTimeout(ut, j.fx.interval),
              j.fx.tick());
          }
          function lt() {
            return (
              r.setTimeout(function () {
                it = void 0;
              }),
              (it = Date.now())
            );
          }
          function ct(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function ft(e, t, n) {
            for (
              var r,
                i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
                o = 0,
                a = i.length;
              o < a;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function dt(e, t, n) {
            var r,
              i,
              o = 0,
              a = dt.prefilters.length,
              s = j.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (i) return !1;
                for (
                  var t = it || lt(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    o = 0,
                    a = l.tweens.length;
                  o < a;
                  o++
                )
                  l.tweens[o].run(r);
                return (
                  s.notifyWith(e, [l, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [l, 1, 0]),
                      s.resolveWith(e, [l]),
                      !1)
                );
              },
              l = s.promise({
                elem: e,
                props: j.extend({}, t),
                opts: j.extend(
                  !0,
                  { specialEasing: {}, easing: j.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: it || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = j.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                      : s.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              (function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                  if (
                    ((i = t[(r = G(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = j.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(c, l.opts.specialEasing);
              o < a;
              o++
            )
              if ((r = dt.prefilters[o].call(l, e, c, l.opts)))
                return (
                  g(r.stop) &&
                    (j._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              j.map(c, ft, l),
              g(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              j.fx.timer(
                j.extend(u, { elem: e, anim: l, queue: l.opts.queue })
              ),
              l
            );
          }
          (j.Animation = j.extend(dt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, ie.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              g(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (dt.tweeners[n] = dt.tweeners[n] || []),
                  dt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = "width" in t || "height" in t,
                  d = this,
                  p = {},
                  h = e.style,
                  v = e.nodeType && le(e),
                  y = K.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = j._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      a.unqueued--, j.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), at.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || "toggle" === i),
                      i === (v ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !y || void 0 === y[r]) continue;
                      v = !0;
                    }
                    p[r] = (y && y[r]) || j.style(e, r);
                  }
                if ((u = !j.isEmptyObject(t)) || !j.isEmptyObject(p))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = y && y.display) && (l = K.get(e, "display")),
                    "none" === (c = j.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (pe([e], !0),
                          (l = e.style.display || l),
                          (c = j.css(e, "display")),
                          pe([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === j.css(e, "float") &&
                      (u ||
                        (d.done(function () {
                          h.display = l;
                        }),
                        null == l &&
                          ((c = h.display), (l = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    d.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  p))
                    u ||
                      (y
                        ? "hidden" in y && (v = y.hidden)
                        : (y = K.access(e, "fxshow", { display: l })),
                      o && (y.hidden = !v),
                      v && pe([e], !0),
                      d.done(function () {
                        for (r in (v || pe([e]), K.remove(e, "fxshow"), p))
                          j.style(e, r, p[r]);
                      })),
                      (u = ft(v ? y[r] : 0, r, d)),
                      r in y ||
                        ((y[r] = u.start),
                        v && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
            },
          })),
            (j.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? j.extend({}, e)
                  : {
                      complete: n || (!n && t) || (g(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !g(t) && t),
                    };
              return (
                j.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in j.fx.speeds
                      ? (r.duration = j.fx.speeds[r.duration])
                      : (r.duration = j.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  g(r.old) && r.old.call(this),
                    r.queue && j.dequeue(this, r.queue);
                }),
                r
              );
            }),
            j.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(le)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = j.isEmptyObject(e),
                  o = j.speed(t, n, r),
                  a = function () {
                    var t = dt(this, j.extend({}, e), o);
                    (i || K.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      o = j.timers,
                      a = K.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                      for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != e && o[i].queue !== e) ||
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (!t && n) || j.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = j.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        j.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            j.each(["toggle", "show", "hide"], function (e, t) {
              var n = j.fn[t];
              j.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ct(t, !0), e, r, i);
              };
            }),
            j.each(
              {
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                j.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (j.timers = []),
            (j.fx.tick = function () {
              var e,
                t = 0,
                n = j.timers;
              for (it = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || j.fx.stop(), (it = void 0);
            }),
            (j.fx.timer = function (e) {
              j.timers.push(e), j.fx.start();
            }),
            (j.fx.interval = 13),
            (j.fx.start = function () {
              ot || ((ot = !0), ut());
            }),
            (j.fx.stop = function () {
              ot = null;
            }),
            (j.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (j.fn.delay = function (e, t) {
              return (
                (e = (j.fx && j.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var i = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (y.checkOn = "" !== e.value),
                (y.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (y.radioValue = "t" === e.value);
            })();
          var pt,
            ht = j.expr.attrHandle;
          j.fn.extend({
            attr: function (e, t) {
              return z(this, j.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                j.removeAttr(this, e);
              });
            },
          }),
            j.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? j.prop(e, t, n)
                    : ((1 === o && j.isXMLDoc(e)) ||
                        (i =
                          j.attrHooks[t.toLowerCase()] ||
                          (j.expr.match.bool.test(t) ? pt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void j.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = j.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!y.radioValue && "radio" === t && O(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(H);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (pt = {
              set: function (e, t, n) {
                return !1 === t ? j.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            j.each(j.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || j.find.attr;
              ht[t] = function (e, t, r) {
                var i,
                  o,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((o = ht[a]),
                    (ht[a] = i),
                    (i = null != n(e, t, r) ? a : null),
                    (ht[a] = o)),
                  i
                );
              };
            });
          var vt = /^(?:input|select|textarea|button)$/i,
            yt = /^(?:a|area)$/i;
          function gt(e) {
            return (e.match(H) || []).join(" ");
          }
          function mt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(H)) || [];
          }
          j.fn.extend({
            prop: function (e, t) {
              return z(this, j.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[j.propFix[e] || e];
              });
            },
          }),
            j.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && j.isXMLDoc(e)) ||
                      ((t = j.propFix[t] || t), (i = j.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = j.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            y.optSelected ||
              (j.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            j.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                j.propFix[this.toLowerCase()] = this;
              }
            ),
            j.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
                if (g(e))
                  return this.each(function (t) {
                    j(this).addClass(e.call(this, t, mt(this)));
                  });
                if ((t = bt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((i = mt(n)), (r = 1 === n.nodeType && " " + gt(i) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (s = gt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
                if (g(e))
                  return this.each(function (t) {
                    j(this).removeClass(e.call(this, t, mt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((i = mt(n)), (r = 1 === n.nodeType && " " + gt(i) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        for (; r.indexOf(" " + o + " ") > -1; )
                          r = r.replace(" " + o + " ", " ");
                      i !== (s = gt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : g(e)
                  ? this.each(function (n) {
                      j(this).toggleClass(e.call(this, n, mt(this), t), t);
                    })
                  : this.each(function () {
                      var t, i, o, a;
                      if (r)
                        for (i = 0, o = j(this), a = bt(e); (t = a[i++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = mt(this)) && K.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : K.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + gt(mt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var xt = /\r/g;
          j.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = g(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, j(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = j.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        j.valHooks[this.type] ||
                        j.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    j.valHooks[i.type] ||
                    j.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(xt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            j.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = j.find.attr(e, "value");
                    return null != t ? t : gt(j.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))
                      ) {
                        if (((t = j(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, o = j.makeArray(t), a = i.length;
                      a--;

                    )
                      ((r = i[a]).selected =
                        j.inArray(j.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            j.each(["radio", "checkbox"], function () {
              (j.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = j.inArray(j(e).val(), t) > -1);
                },
              }),
                y.checkOn ||
                  (j.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (y.focusin = "onfocusin" in r);
          var wt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          j.extend(j.event, {
            trigger: function (e, t, n, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                h = [n || b],
                v = p.call(e, "type") ? e.type : e,
                y = p.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = d = s = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !wt.test(v + j.event.triggered) &&
                  (v.indexOf(".") > -1 &&
                    ((y = v.split(".")), (v = y.shift()), y.sort()),
                  (l = v.indexOf(":") < 0 && "on" + v),
                  ((e = e[j.expando]
                    ? e
                    : new j.Event(v, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = y.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : j.makeArray(t, [e])),
                  (f = j.event.special[v] || {}),
                  i || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!i && !f.noBubble && !m(n)) {
                  for (
                    u = f.delegateType || v,
                      wt.test(u + v) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || b) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                  (d = a),
                    (e.type = o > 1 ? u : f.bindType || v),
                    (c =
                      (K.get(a, "events") || Object.create(null))[e.type] &&
                      K.get(a, "handle")) && c.apply(a, t),
                    (c = l && a[l]) &&
                      c.apply &&
                      Q(a) &&
                      ((e.result = c.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = v),
                  i ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (l &&
                      g(n[v]) &&
                      !m(n) &&
                      ((s = n[l]) && (n[l] = null),
                      (j.event.triggered = v),
                      e.isPropagationStopped() && d.addEventListener(v, Tt),
                      n[v](),
                      e.isPropagationStopped() && d.removeEventListener(v, Tt),
                      (j.event.triggered = void 0),
                      s && (n[l] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = j.extend(new j.Event(), n, { type: e, isSimulated: !0 });
              j.event.trigger(r, null, t);
            },
          }),
            j.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  j.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return j.event.trigger(e, t, n, !0);
              },
            }),
            y.focusin ||
              j.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  j.event.simulate(t, e.target, j.event.fix(e));
                };
                j.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = K.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      K.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = K.access(r, t) - 1;
                    i
                      ? K.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), K.remove(r, t));
                  },
                };
              });
          var St = r.location,
            jt = { guid: Date.now() },
            Ct = /\?/;
          j.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                j.error(
                  "Invalid XML: " +
                    (n
                      ? j
                          .map(n.childNodes, function (e) {
                            return e.textContent;
                          })
                          .join("\n")
                      : e)
                ),
              t
            );
          };
          var kt = /\[\]$/,
            _t = /\r?\n/g,
            Et = /^(?:submit|button|image|reset|file)$/i,
            Pt = /^(?:input|select|textarea|keygen)/i;
          function Ot(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              j.each(t, function (t, i) {
                n || kt.test(e)
                  ? r(e, i)
                  : Ot(
                      e +
                        "[" +
                        ("object" == typeof i && null != i ? t : "") +
                        "]",
                      i,
                      n,
                      r
                    );
              });
            else if (n || "object" !== T(t)) r(e, t);
            else for (i in t) Ot(e + "[" + i + "]", t[i], n, r);
          }
          (j.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !j.isPlainObject(e)))
              j.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) Ot(n, e[n], t, i);
            return r.join("&");
          }),
            j.fn.extend({
              serialize: function () {
                return j.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = j.prop(this, "elements");
                  return e ? j.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !j(this).is(":disabled") &&
                      Pt.test(this.nodeName) &&
                      !Et.test(e) &&
                      (this.checked || !ye.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = j(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? j.map(n, function (e) {
                          return { name: t.name, value: e.replace(_t, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(_t, "\r\n") };
                  })
                  .get();
              },
            });
          var Dt = /%20/g,
            Vt = /#.*$/,
            At = /([?&])_=[^&]*/,
            Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Lt = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            qt = {},
            Ht = {},
            Bt = "*/".concat("*"),
            Mt = b.createElement("a");
          function It(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                o = t.toLowerCase().match(H) || [];
              if (g(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Ft(e, t, n, r) {
            var i = {},
              o = e === Ht;
            function a(s) {
              var u;
              return (
                (i[s] = !0),
                j.each(e[s] || [], function (e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || o || i[l]
                    ? o
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!i["*"] && a("*"));
          }
          function Wt(e, t) {
            var n,
              r,
              i = j.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && j.extend(!0, e, r), e;
          }
          (Mt.href = St.href),
            j.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    St.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Bt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": j.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, j.ajaxSettings), t) : Wt(j.ajaxSettings, e);
              },
              ajaxPrefilter: It(qt),
              ajaxTransport: It(Ht),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f,
                  d,
                  p = j.ajaxSetup({}, t),
                  h = p.context || p,
                  v = p.context && (h.nodeType || h.jquery) ? j(h) : j.event,
                  y = j.Deferred(),
                  g = j.Callbacks("once memory"),
                  m = p.statusCode || {},
                  x = {},
                  w = {},
                  T = "canceled",
                  S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!a)
                          for (a = {}; (t = Nt.exec(o)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == l &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == l && (p.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) S.always(e[S.status]);
                        else for (t in e) m[t] = [m[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), C(0, t), this;
                    },
                  };
                if (
                  (y.promise(S),
                  (p.url = ((e || p.url || St.href) + "").replace(
                    Rt,
                    St.protocol + "//"
                  )),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [
                    "",
                  ]),
                  null == p.crossDomain)
                ) {
                  u = b.createElement("a");
                  try {
                    (u.href = p.url),
                      (u.href = u.href),
                      (p.crossDomain =
                        Mt.protocol + "//" + Mt.host !=
                        u.protocol + "//" + u.host);
                  } catch (e) {
                    p.crossDomain = !0;
                  }
                }
                if (
                  (p.data &&
                    p.processData &&
                    "string" != typeof p.data &&
                    (p.data = j.param(p.data, p.traditional)),
                  Ft(qt, p, t, S),
                  l)
                )
                  return S;
                for (f in ((c = j.event && p.global) &&
                  0 == j.active++ &&
                  j.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Lt.test(p.type)),
                (i = p.url.replace(Vt, "")),
                p.hasContent
                  ? p.data &&
                    p.processData &&
                    0 ===
                      (p.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (p.data = p.data.replace(Dt, "+"))
                  : ((d = p.url.slice(i.length)),
                    p.data &&
                      (p.processData || "string" == typeof p.data) &&
                      ((i += (Ct.test(i) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache &&
                      ((i = i.replace(At, "$1")),
                      (d = (Ct.test(i) ? "&" : "?") + "_=" + jt.guid++ + d)),
                    (p.url = i + d)),
                p.ifModified &&
                  (j.lastModified[i] &&
                    S.setRequestHeader("If-Modified-Since", j.lastModified[i]),
                  j.etag[i] && S.setRequestHeader("If-None-Match", j.etag[i])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                  t.contentType) &&
                  S.setRequestHeader("Content-Type", p.contentType),
                S.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                        ("*" !== p.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
                    : p.accepts["*"]
                ),
                p.headers))
                  S.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, S, p) || l))
                  return S.abort();
                if (
                  ((T = "abort"),
                  g.add(p.complete),
                  S.done(p.success),
                  S.fail(p.error),
                  (n = Ft(Ht, p, t, S)))
                ) {
                  if (
                    ((S.readyState = 1), c && v.trigger("ajaxSend", [S, p]), l)
                  )
                    return S;
                  p.async &&
                    p.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      S.abort("timeout");
                    }, p.timeout));
                  try {
                    (l = !1), n.send(x, C);
                  } catch (e) {
                    if (l) throw e;
                    C(-1, e);
                  }
                } else C(-1, "No Transport");
                function C(e, t, a, u) {
                  var f,
                    d,
                    b,
                    x,
                    w,
                    T = t;
                  l ||
                    ((l = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (o = u || ""),
                    (S.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (x = (function (e, t, n) {
                        for (
                          var r, i, o, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in s)
                            if (s[i] && s[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                              o = i;
                              break;
                            }
                            a || (a = i);
                          }
                          o = o || a;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(p, S, a)),
                    !f &&
                      j.inArray("script", p.dataTypes) > -1 &&
                      j.inArray("json", p.dataTypes) < 0 &&
                      (p.converters["text script"] = function () {}),
                    (x = (function (e, t, n, r) {
                      var i,
                        o,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = o),
                          (o = c.shift()))
                        )
                          if ("*" === o) o = u;
                          else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o]))
                              for (i in l)
                                if (
                                  (s = i.split(" "))[1] === o &&
                                  (a = l[u + " " + s[0]] || l["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[i])
                                    : !0 !== l[i] &&
                                      ((o = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + u + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(p, x, S, f)),
                    f
                      ? (p.ifModified &&
                          ((w = S.getResponseHeader("Last-Modified")) &&
                            (j.lastModified[i] = w),
                          (w = S.getResponseHeader("etag")) && (j.etag[i] = w)),
                        204 === e || "HEAD" === p.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = x.state), (d = x.data), (f = !(b = x.error))))
                      : ((b = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (S.status = e),
                    (S.statusText = (t || T) + ""),
                    f
                      ? y.resolveWith(h, [d, T, S])
                      : y.rejectWith(h, [S, T, b]),
                    S.statusCode(m),
                    (m = void 0),
                    c &&
                      v.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        S,
                        p,
                        f ? d : b,
                      ]),
                    g.fireWith(h, [S, T]),
                    c &&
                      (v.trigger("ajaxComplete", [S, p]),
                      --j.active || j.event.trigger("ajaxStop")));
                }
                return S;
              },
              getJSON: function (e, t, n) {
                return j.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return j.get(e, void 0, t, "script");
              },
            }),
            j.each(["get", "post"], function (e, t) {
              j[t] = function (e, n, r, i) {
                return (
                  g(n) && ((i = i || r), (r = n), (n = void 0)),
                  j.ajax(
                    j.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      j.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            j.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (j._evalUrl = function (e, t, n) {
              return j.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  j.globalEval(e, t, n);
                },
              });
            }),
            j.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (g(e) && (e = e.call(this[0])),
                    (t = j(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return g(e)
                  ? this.each(function (t) {
                      j(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = j(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                  j(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      j(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (j.expr.pseudos.hidden = function (e) {
              return !j.expr.pseudos.visible(e);
            }),
            (j.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (j.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var $t = { 0: 200, 1223: 204 },
            zt = j.ajaxSettings.xhr();
          (y.cors = !!zt && "withCredentials" in zt),
            (y.ajax = zt = !!zt),
            j.ajaxTransport(function (e) {
              var t, n;
              if (y.cors || (zt && !e.crossDomain))
                return {
                  send: function (i, o) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      s.setRequestHeader(a, i[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? o(0, "error")
                              : o(s.status, s.statusText)
                            : o(
                                $t[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            j.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            j.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return j.globalEval(e), e;
                },
              },
            }),
            j.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            j.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = j("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Ut,
            Xt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
          j.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || j.expando + "_" + jt.guid++;
              return (this[e] = !0), e;
            },
          }),
            j.ajaxPrefilter("json jsonp", function (e, t, n) {
              var i,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Yt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Yt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Yt, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return a || j.error(i + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = r[i]),
                  (r[i] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? j(r).removeProp(i) : (r[i] = o),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(i)),
                      a && g(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (y.createHTMLDocument =
              (((Ut = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Ut.childNodes.length)),
            (j.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (y.createHTMLDocument
                      ? (((r = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(r))
                      : (t = b)),
                  (o = !n && []),
                  (i = D.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = Se([e], t, o)),
                      o && o.length && j(o).remove(),
                      j.merge([], i.childNodes)));
              var r, i, o;
            }),
            (j.fn.load = function (e, t, n) {
              var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = gt(e.slice(s))), (e = e.slice(0, s))),
                g(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                  j
                    .ajax({
                      url: e,
                      type: i || "GET",
                      dataType: "html",
                      data: t,
                    })
                    .done(function (e) {
                      (o = arguments),
                        a.html(
                          r ? j("<div>").append(j.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (j.expr.pseudos.animated = function (e) {
              return j.grep(j.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (j.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = j.css(e, "position"),
                  c = j(e),
                  f = {};
                "static" === l && (e.style.position = "relative"),
                  (s = c.offset()),
                  (o = j.css(e, "top")),
                  (u = j.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (o + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (i = r.left))
                    : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  g(t) && (t = t.call(e, n, j.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + i),
                  "using" in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            j.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        j.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === j.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === j.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = j(e).offset()).top += j.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += j.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - j.css(r, "marginTop", !0),
                    left: t.left - i.left - j.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === j.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            j.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                j.fn[e] = function (r) {
                  return z(
                    this,
                    function (e, r, i) {
                      var o;
                      if (
                        (m(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === i)
                      )
                        return o ? o[t] : e[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset
                          )
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            j.each(["top", "left"], function (e, t) {
              j.cssHooks[t] = ze(y.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = $e(e, t)), Me.test(n) ? j(e).position()[t] + "px" : n
                  );
              });
            }),
            j.each({ Height: "height", Width: "width" }, function (e, t) {
              j.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  j.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(
                      this,
                      function (t, n, i) {
                        var o;
                        return m(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === i
                          ? j.css(t, n, s)
                          : j.style(t, n, i, s);
                      },
                      t,
                      a ? i : void 0,
                      a
                    );
                  };
                }
              );
            }),
            j.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                j.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            j.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            j.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                j.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (j.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
              return (
                (r = s.call(arguments, 2)),
                ((i = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid =
                  e.guid || j.guid++),
                i
              );
          }),
            (j.holdReady = function (e) {
              e ? j.readyWait++ : j.ready(!0);
            }),
            (j.isArray = Array.isArray),
            (j.parseJSON = JSON.parse),
            (j.nodeName = O),
            (j.isFunction = g),
            (j.isWindow = m),
            (j.camelCase = G),
            (j.type = T),
            (j.now = Date.now),
            (j.isNumeric = function (e) {
              var t = j.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (j.trim = function (e) {
              return null == e ? "" : (e + "").replace(Gt, "");
            }),
            void 0 ===
              (n = function () {
                return j;
              }.apply(t, [])) || (e.exports = n);
          var Qt = r.jQuery,
            Jt = r.$;
          return (
            (j.noConflict = function (e) {
              return (
                r.$ === j && (r.$ = Jt),
                e && r.jQuery === j && (r.jQuery = Qt),
                j
              );
            }),
            void 0 === i && (r.jQuery = r.$ = j),
            j
          );
        });
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = n(638),
        t = n.n(e),
        r = {
          containerClass: ".container",
          minValue: 0,
          maxValue: 500,
          isRange: !0,
          isVertical: !1,
          fromVal: 50,
          toVal: 400,
          sliderStep: 1,
          units: "$",
          showValues: !1,
        };
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      const o = (function () {
        function e() {
          var t, n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (n = void 0),
            (t = "events") in this
              ? Object.defineProperty(this, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (this[t] = n),
            (this.events = {});
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "subscribe",
              value: function (e, t) {
                this.events[e] || (this.events[e] = []), this.events[e].push(t);
              },
            },
            {
              key: "emit",
              value: function (e, t) {
                var n = this.events[e];
                n &&
                  n.forEach(function (e) {
                    e.call(null, t);
                  });
              },
            },
          ]) && i(t.prototype, n),
          e
        );
      })();
      function a(e) {
        for (var t = document.createElement("div"), n = 0; n < e.length; n += 1)
          t.classList.add(e[n]);
        return t;
      }
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function c(e, t) {
        return !t || ("object" !== s(t) && "function" != typeof t) ? f(e) : t;
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var h = "range-to",
        v = "range-from";
      const y = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        })(s, e);
        var t,
          n,
          r,
          i,
          o =
            ((r = s),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = d(r);
              if (i) {
                var n = d(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return c(this, e);
            });
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            p(f((t = o.call(this))), "rangeTo", void 0),
            p(f(t), "rangeFrom", void 0),
            (t.rangeTo = a([
              "js-range-slider__bar-range",
              "range-slider__bar-range",
              "range-slider__bar-range_to",
            ])),
            (t.rangeFrom = a([
              "js-range-slider__bar-range",
              "range-slider__bar-range",
              "range-slider__bar-range_from",
            ])),
            e.appendChild(t.rangeTo),
            e.appendChild(t.rangeFrom),
            t
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "getHandlerWidth",
              value: function () {
                return this.rangeTo.offsetWidth;
              },
            },
            {
              key: "update",
              value: function (e, t, n, r) {
                this.rangeFrom.setAttribute(
                  "style",
                  "".concat(t[1], " ").concat(n, "%")
                ),
                  this.rangeTo.setAttribute(
                    "style",
                    "".concat(t[1], " ").concat(r, "%")
                  ),
                  e
                    ? this.rangeFrom.classList.remove(
                        "range-slider__bar-range_hidden"
                      )
                    : this.rangeFrom.classList.add(
                        "range-slider__bar-range_hidden"
                      );
              },
            },
            {
              key: "onMouseDown",
              value: function (e, t) {
                var n = this;
                function r(e) {
                  n.emit("handle-dragged", {
                    top: e.clientY,
                    left: e.clientX,
                    info: t,
                  });
                }
                document.addEventListener("mousemove", r),
                  document.addEventListener("mouseup", function e() {
                    document.removeEventListener("mousemove", r),
                      document.removeEventListener("mouseup", e);
                  }),
                  document.addEventListener("dragstart", function () {
                    return !1;
                  });
              },
            },
            {
              key: "addDragNDrop",
              value: function () {
                var e = this;
                this.rangeTo.addEventListener("mousedown", function (t) {
                  e.onMouseDown(t, h);
                }),
                  this.rangeFrom.addEventListener("mousedown", function (t) {
                    e.onMouseDown(t, v);
                  });
              },
            },
          ]) && u(t.prototype, n),
          s
        );
      })(o);
      function g(e) {
        return (g =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                C(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function T(e, t) {
        return !t || ("object" !== g(t) && "function" != typeof t) ? S(e) : t;
      }
      function S(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function j(e) {
        return (j = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function C(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const k = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && w(e, t);
        })(a, e);
        var t,
          n,
          r,
          i,
          o =
            ((r = a),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = j(r);
              if (i) {
                var n = j(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return T(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            C(S((t = o.call(this))), "state", void 0),
            (t.state = e),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: "getInitViewParameters",
              value: function (e) {
                (this.state = b(
                  b({}, this.state),
                  {},
                  {
                    sliderParameters: e.sliderParameters,
                    sliderCoordinates: e.sliderCoordinates,
                    handlerWidth: e.handlerWidth,
                  }
                )),
                  this.sendStylesForFirstRender(this.state);
              },
            },
            {
              key: "getViewParameters",
              value: function (e) {
                (this.state = b(
                  b({}, this.state),
                  {},
                  {
                    sliderParameters: e.sliderParameters,
                    sliderCoordinates: e.sliderCoordinates,
                    handlerWidth: e.handlerWidth,
                  }
                )),
                  this.sendStylesForRender(this.state);
              },
            },
            {
              key: "getData",
              value: function (e) {
                (this.state = e), this.sendStylesForRender(this.state);
              },
            },
            {
              key: "clickTreatment",
              value: function (e) {
                this.getViewParameters(e.sliderData),
                  this.sendStylesForRender(
                    this.calcDataClick({
                      top: e.top,
                      left: e.left,
                      target: e.target,
                      isBarUnit: e.isBarUnit,
                    })
                  );
              },
            },
            {
              key: "dragNDropTreatment",
              value: function (e) {
                this.getViewParameters(e.sliderData),
                  this.sendStylesForRender(this.calcDataDrag(e));
              },
            },
            {
              key: "loadInitData",
              value: function (e) {
                this.sendStylesForRender(e);
              },
            },
            {
              key: "calcDataDrag",
              value: function (e) {
                var t = this.state,
                  n = t.maxValue,
                  r = t.minValue,
                  i = t.fromVal,
                  o = t.toVal,
                  a = t.isRange,
                  s = this.calcCurrentPosition(e),
                  u = this.calcCurrentValue(s);
                return e.info === h
                  ? ((this.state.toVal = u),
                    this.state.toVal >= n && (this.state.toVal = n),
                    a
                      ? o <= i && (this.state.toVal = i)
                      : this.state.toVal <= r && (this.state.toVal = r),
                    this.state)
                  : ((this.state.fromVal = u),
                    i >= o
                      ? (this.state.fromVal = o)
                      : this.state.fromVal <= r && (this.state.fromVal = r),
                    this.state);
              },
            },
            {
              key: "calcDataClick",
              value: function (e) {
                var t,
                  n = e.target,
                  r = e.isBarUnit,
                  i = this.state.isRange;
                t = r
                  ? parseInt(n.dataset.location, 10)
                  : this.calcCurrentPosition(e);
                var o = this.calcCurrentValue(t),
                  a = this.getHandlePosition(v),
                  s = this.getHandlePosition(h);
                return (
                  i
                    ? s === a
                      ? t - a < 0
                        ? (this.state.fromVal = o)
                        : t - s > 0 && (this.state.toVal = o)
                      : Math.abs(t - a) >= Math.abs(t - s)
                      ? (this.state.toVal = o)
                      : Math.abs(t - a) < Math.abs(t - s) &&
                        (this.state.fromVal = o)
                    : (this.state.toVal = o),
                  this.state
                );
              },
            },
            {
              key: "sendStylesForFirstRender",
              value: function (e) {
                var t = e.minValue,
                  n = e.maxValue,
                  r = e.isRange,
                  i = e.isVertical,
                  o = e.fromVal,
                  a = e.toVal,
                  s = e.units,
                  u = e.showValues,
                  l = e.sliderParameters,
                  c = e.sliderStep;
                a >= n
                  ? (this.state.toVal = n)
                  : a <= t && (this.state.toVal = t),
                  r && o <= t && (this.state.fromVal = t);
                var f = {
                  coordinates: i
                    ? ["vertical", "bottom: ", "height: "]
                    : ["horizontal", "left: ", "width: "],
                  isRange: r,
                  barPosition: this.calcBarPosition(o, n, t),
                  rangeTo: i
                    ? this.calcBarSize(null == l ? void 0 : l.height) +
                      this.calcBarPosition(o, n, t)
                    : this.calcBarSize(null == l ? void 0 : l.width) +
                      this.calcBarPosition(o, n, t),
                  rangeFrom: this.calcBarPosition(o, n, t),
                  barSize: i
                    ? this.calcBarSize(null == l ? void 0 : l.height)
                    : this.calcBarSize(null == l ? void 0 : l.width),
                  showValues: u,
                  values: [this.setVal(o, s), this.setVal(a, s)],
                  valuesPosition: [
                    this.setValPosition(o, n, t),
                    this.setValPosition(a, n, t),
                  ],
                  minValue: this.state.minValue,
                  maxValue: this.state.maxValue,
                  sliderStep: c,
                };
                this.emit("send-state", this.state),
                  this.emit("values-ready", f);
              },
            },
            {
              key: "sendStylesForRender",
              value: function (e) {
                var t = e.minValue,
                  n = e.maxValue,
                  r = e.isRange,
                  i = e.isVertical,
                  o = e.fromVal,
                  a = e.toVal,
                  s = e.units,
                  u = e.showValues,
                  l = e.sliderParameters,
                  c = e.sliderStep;
                a >= n
                  ? (this.state.toVal = n)
                  : a <= t && (this.state.toVal = t),
                  r && o <= t && (this.state.fromVal = t);
                var f = {
                  coordinates: i
                    ? ["vertical", "bottom: ", "height: "]
                    : ["horizontal", "left: ", "width: "],
                  isRange: r,
                  rangeTo: this.getHandlePosition(h),
                  rangeFrom: this.getHandlePosition(v),
                  barPosition: this.calcBarPosition(o, n, t),
                  barSize: i
                    ? this.calcBarSize(null == l ? void 0 : l.height)
                    : this.calcBarSize(null == l ? void 0 : l.width),
                  showValues: u,
                  values: {
                    fromValNum: this.setVal(o, s),
                    toValNum: this.setVal(a, s),
                  },
                  valuesPosition: [
                    this.setValPosition(o, n, t),
                    this.setValPosition(a, n, t),
                  ],
                  minValue: this.state.minValue,
                  maxValue: this.state.maxValue,
                  sliderStep: c,
                };
                this.emit("send-state", this.state),
                  this.emit("values-ready", f);
              },
            },
            {
              key: "setVal",
              value: function (e, t) {
                return void 0 !== t
                  ? e <= this.state.minValue
                    ? "".concat(this.state.minValue, " ").concat(t)
                    : e >= this.state.maxValue
                    ? "".concat(this.state.maxValue, " ").concat(t)
                    : "".concat(e, " ").concat(t)
                  : e.toString();
              },
            },
            {
              key: "initHandlePosition",
              value: function (e) {
                var t = this.state,
                  n = t.toVal,
                  r = t.fromVal,
                  i = t.maxValue,
                  o = t.minValue,
                  a = t.handlerWidth;
                return e === h
                  ? (this.state.isRange && n <= r && (this.state.toVal = r),
                    n >= i
                      ? ((i - o) / (i - o)) * 100
                      : ((n - o) / (i - o)) * 100)
                  : r <= o
                  ? 0.5 * a
                  : ((r - o) / (i - o)) * 100;
              },
            },
            {
              key: "setValPosition",
              value: function (e, t, n) {
                var r = this.state,
                  i = r.handlerWidth,
                  o = r.sliderParameters;
                return r.isVertical
                  ? Math.ceil(
                      100 *
                        ((e - n) / (t - n) -
                          (i / (null == o ? void 0 : o.height)) * 1)
                    )
                  : Math.ceil(
                      100 *
                        ((e - n) / (t - n) -
                          (i / (null == o ? void 0 : o.width)) * 1.25)
                    );
              },
            },
            {
              key: "getHandlePosition",
              value: function (e) {
                var t,
                  n,
                  r = this.state.isVertical
                    ? null === (t = this.state.sliderParameters) || void 0 === t
                      ? void 0
                      : t.height
                    : null === (n = this.state.sliderParameters) || void 0 === n
                    ? void 0
                    : n.width,
                  i = this.state,
                  o = i.toVal,
                  a = i.fromVal,
                  s = i.maxValue,
                  u = i.minValue,
                  l = i.handlerWidth;
                return e === h
                  ? (this.state.isRange && o <= a && (this.state.toVal = a),
                    o >= s
                      ? 100 * ((s - u) / (s - u) - (l / r) * 0.5)
                      : 100 * ((o - u) / (s - u) - (l / r) * 0.5))
                  : a <= u
                  ? (l / r) * -50
                  : 100 * ((a - u) / (s - u) - (l / r) * 0.5);
              },
            },
            {
              key: "calcCurrentPosition",
              value: function (e) {
                var t = this.state,
                  n = t.isVertical,
                  r = t.sliderCoordinates,
                  i = t.sliderParameters,
                  o = n
                    ? (null == r ? void 0 : r.top) +
                      (null == i ? void 0 : i.height) -
                      e.top
                    : e.left - (null == r ? void 0 : r.left);
                return n
                  ? Math.ceil((o / (null == i ? void 0 : i.height)) * 100)
                  : Math.ceil((o / (null == i ? void 0 : i.width)) * 100);
              },
            },
            {
              key: "calcCurrentValue",
              value: function (e) {
                var t = this.state,
                  n = t.minValue,
                  r = t.maxValue,
                  i = t.sliderStep;
                return Math.round((0.01 * e * (r - n)) / i) * i + n;
              },
            },
            {
              key: "calcBarPosition",
              value: function (e, t, n) {
                var r = this.state.isRange
                  ? Math.ceil(((-n + e) / (t - n)) * 100)
                  : Number(0);
                return r <= 0 && (r = 0), r;
              },
            },
            {
              key: "calcBarSize",
              value: function (e) {
                var t = this.state,
                  n = t.isRange,
                  r = t.toVal,
                  i = t.fromVal,
                  o = t.maxValue,
                  a = t.minValue,
                  s = t.handlerWidth,
                  u = n
                    ? Math.abs(((r - i) / (o - a)) * 100)
                    : 100 * ((r - a) / (o - a) - (s / e) * 0.5);
                return u >= 100 ? (u = 100) : u <= 0 && (u = 0), u;
              },
            },
          ]) && x(t.prototype, n),
          a
        );
      })(o);
      function _(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      const E = (function () {
        function e(t) {
          var n, r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (r = void 0),
            (n = "viewBar") in this
              ? Object.defineProperty(this, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (this[n] = r),
            (this.viewBar = a([
              "js-range-slider__progress-bar",
              "range-slider__progress-bar",
            ])),
            t.append(this.viewBar);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "update",
              value: function (e, t, n) {
                this.viewBar.setAttribute(
                  "style",
                  "".concat(e[1]).concat(t, "%;").concat(e[2]).concat(n, "%")
                );
              },
            },
          ]) && _(t.prototype, n),
          e
        );
      })();
      function P(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function O(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const D = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            O(this, "toVal", void 0),
            O(this, "fromVal", void 0),
            (this.toVal = a([
              "js-range-slider__values",
              "range-slider__values",
              "range-slider__values_max",
            ])),
            (this.fromVal = a([
              "js-range-slider__values",
              "range-slider__values",
              "range-slider__values_min",
            ])),
            t.append(this.toVal),
            t.append(this.fromVal);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "update",
              value: function (e) {
                var t = e.isRange,
                  n = e.showValues,
                  r = e.coordinates,
                  i = e.valuesPosition,
                  o = e.values,
                  a = this.fromVal,
                  s = this.toVal;
                this.showValues(n, t);
                var u = o.toValNum,
                  l = o.fromValNum;
                (a.innerHTML = l),
                  (s.innerHTML = u),
                  a.setAttribute(
                    "style",
                    "".concat(r[1], " ").concat(i[0], "%")
                  ),
                  s.setAttribute(
                    "style",
                    "".concat(r[1], " ").concat(i[1], "%")
                  );
              },
            },
            {
              key: "showValues",
              value: function (e, t) {
                !0 === e && !0 === t
                  ? (this.toVal.classList.remove("range-slider__values_hidden"),
                    this.fromVal.classList.remove(
                      "range-slider__values_hidden"
                    ))
                  : !0 === e && !1 === t
                  ? (this.toVal.classList.remove("range-slider__values_hidden"),
                    this.fromVal.classList.add("range-slider__values_hidden"))
                  : !1 === e &&
                    (this.toVal.classList.add("range-slider__values_hidden"),
                    this.fromVal.classList.add("range-slider__values_hidden"));
              },
            },
          ]) && P(t.prototype, n),
          e
        );
      })();
      function V(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      const A = (function () {
        function e(t) {
          var n, r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (r = void 0),
            (n = "viewScale") in this
              ? Object.defineProperty(this, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (this[n] = r),
            (this.viewScale = a([
              "js-range-slider__scale-bar",
              "range-slider__scale-bar",
            ])),
            t.appendChild(this.viewScale);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "updateScaleUnits",
              value: function (e, t, n, r) {
                this.viewScale.innerHTML = "";
                for (var i = n; i <= t - e; i += n) {
                  var o = a([
                      "js-range-slider__bar-unit",
                      "range-slider__bar-unit",
                    ]),
                    s = a([
                      "js-range-slider__unit-value",
                      "range-slider__unit-value",
                    ]);
                  if (i === n) {
                    var u = a([
                        "js-range-slider__bar-unit",
                        "range-slider__bar-unit",
                      ]),
                      l = a([
                        "js-range-slider__unit-value",
                        "range-slider__unit-value",
                      ]);
                    u.setAttribute("style", "".concat(r[1], " -0.5%")),
                      (u.dataset.location = 0),
                      (l.textContent = e.toString()),
                      (l.dataset.location = 0),
                      u.append(l),
                      this.viewScale.append(u);
                  }
                  o.setAttribute(
                    "style",
                    "".concat(r[1], " ").concat((i / (t - e)) * 100, "%")
                  ),
                    (o.dataset.location = e + i),
                    (s.textContent = (e + i).toString()),
                    (s.dataset.location = (i / (t - e)) * 100),
                    o.append(s),
                    this.viewScale.append(o);
                }
              },
            },
            {
              key: "update",
              value: function (e, t, n, r) {
                var i = (function (e, t) {
                  for (var n = t; n <= e; n += t) if (e / n <= 10) return n;
                  return t;
                })(t - n, r);
                this.updateScaleUnits(n, t, i, e);
              },
            },
          ]) && V(t.prototype, n),
          e
        );
      })();
      function N(e) {
        return (N =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function L(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                F(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function H(e, t) {
        return (H =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function B(e, t) {
        return !t || ("object" !== N(t) && "function" != typeof t) ? M(e) : t;
      }
      function M(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function I(e) {
        return (I = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function F(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const W = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && H(e, t);
        })(s, e);
        var t,
          n,
          r,
          i,
          o =
            ((r = s),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = I(r);
              if (i) {
                var n = I(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return B(this, e);
            });
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            F(M((t = o.call(this))), "sliderBody", void 0),
            F(M(t), "viewBar", void 0),
            F(M(t), "viewHandlers", void 0),
            F(M(t), "handlerValues", void 0),
            F(M(t), "viewScale", void 0),
            (t.sliderBody = a(["js-range-slider__body", "range-slider__body"])),
            e.append(t.sliderBody),
            (t.viewBar = new E(t.sliderBody)),
            (t.viewHandlers = new y(t.sliderBody)),
            (t.handlerValues = new D(t.sliderBody)),
            (t.viewScale = new A(t.sliderBody)),
            t
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "getParameters",
              value: function () {
                return {
                  sliderParameters: this.getSliderParameters(),
                  sliderCoordinates: this.getSliderCoords(),
                  handlerWidth: this.viewHandlers.getHandlerWidth(),
                };
              },
            },
            {
              key: "getSliderParameters",
              value: function () {
                return {
                  height: parseInt(
                    window.getComputedStyle(this.sliderBody).height,
                    10
                  ),
                  width: parseInt(
                    window.getComputedStyle(this.sliderBody).width,
                    10
                  ),
                };
              },
            },
            {
              key: "getSliderCoords",
              value: function () {
                return {
                  left: this.sliderBody.getBoundingClientRect().left,
                  top: this.sliderBody.getBoundingClientRect().top,
                };
              },
            },
            {
              key: "renderViewComponents",
              value: function (e) {
                var t = e.coordinates,
                  n = e.barPosition,
                  r = e.barSize,
                  i = e.isRange,
                  o = e.rangeFrom,
                  a = e.rangeTo,
                  s = e.maxValue,
                  u = e.minValue,
                  l = e.sliderStep;
                this.viewBar.update(t, n, r),
                  this.viewHandlers.update(i, t, o, a),
                  this.handlerValues.update(e),
                  this.viewScale.update(t, s, u, l);
              },
            },
            {
              key: "checkClickTarget",
              value: function (e) {
                var t = this.handlerValues,
                  n = t.toVal;
                return e !== t.fromVal && e !== n;
              },
            },
            {
              key: "getAndSendClickPosition",
              value: function (e) {
                var t = this.getParameters();
                this.checkClickTarget(e.target) &&
                  this.emit("slider-clicked", {
                    top: e.clientY,
                    left: e.clientX,
                    sliderData: t,
                    target: e.target,
                    isBarUnit:
                      e.target.classList.contains(
                        "js-range-slider__bar-unit"
                      ) ||
                      e.target.classList.contains(
                        "js-range-slider__unit-value"
                      ),
                  });
              },
            },
            {
              key: "sendHandleDragData",
              value: function (e) {
                var t = this.getParameters();
                this.emit("handle-dragged", R(R({}, e), {}, { sliderData: t }));
              },
            },
            {
              key: "addEventListeners",
              value: function () {
                var e = this;
                this.sliderBody.addEventListener("click", function (t) {
                  e.getAndSendClickPosition(t);
                }),
                  this.viewHandlers.subscribe("handle-dragged", function (t) {
                    e.sendHandleDragData(t);
                  }),
                  this.viewHandlers.addDragNDrop();
              },
            },
          ]) && q(t.prototype, n),
          s
        );
      })(o);
      function $(e) {
        return ($ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function U(e, t) {
        return (U =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function X(e, t) {
        return !t || ("object" !== $(t) && "function" != typeof t) ? Y(e) : t;
      }
      function Y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function G(e) {
        return (G = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Q(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const J = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && U(e, t);
        })(s, e);
        var t,
          n,
          r,
          i,
          o =
            ((r = s),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = G(r);
              if (i) {
                var n = G(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return X(this, e);
            });
        function s(e) {
          var t, n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            Q(Y((t = o.call(this))), "container", void 0),
            Q(Y(t), "slider", void 0),
            Q(Y(t), "viewBody", void 0),
            (t.container = ((n = e), document.querySelector(n))),
            (t.slider = a(["js-range-slider", "range-slider"])),
            t.container.append(t.slider),
            (t.viewBody = new W(t.slider)),
            t.init(),
            t
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "init",
              value: function () {
                this.addEventListeners();
              },
            },
            {
              key: "addEventListeners",
              value: function () {
                var e = this;
                window.addEventListener("resize", function () {
                  e.emit("window-resize", e.updateParameters());
                }),
                  window.addEventListener("scroll", function () {
                    e.emit("scroll", e.updateParameters());
                  }),
                  this.viewBody.subscribe("slider-clicked", function (t) {
                    e.emit("slider-clicked", t);
                  }),
                  this.viewBody.subscribe("handle-dragged", function (t) {
                    e.emit("handle-dragged", t);
                  }),
                  this.viewBody.addEventListeners();
              },
            },
            {
              key: "updateParameters",
              value: function () {
                return this.viewBody.getParameters();
              },
            },
            {
              key: "getChanges",
              value: function (e) {
                this.renderView(e);
              },
            },
            {
              key: "renderView",
              value: function (e) {
                "vertical" === e.coordinates[0]
                  ? this.slider.classList.add("range-slider_vertical")
                  : this.slider.classList.remove("range-slider_vertical"),
                  this.viewBody.renderViewComponents(e);
              },
            },
          ]) && z(t.prototype, n),
          s
        );
      })(o);
      function K(e) {
        return (K =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ee(e, t) {
        return (ee =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function te(e, t) {
        return !t || ("object" !== K(t) && "function" != typeof t) ? ne(e) : t;
      }
      function ne(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function re(e) {
        return (re = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ie(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const oe = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && ee(e, t);
        })(a, e);
        var t,
          n,
          r,
          i,
          o =
            ((r = a),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = re(r);
              if (i) {
                var n = re(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return te(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            ie(ne((t = o.call(this))), "view", void 0),
            ie(ne(t), "model", void 0),
            (t.view = new J(e.containerClass)),
            (t.model = new k(e)),
            t.init(),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: "init",
              value: function () {
                this.subscribeOnEvents(),
                  this.model.getInitViewParameters(
                    this.view.updateParameters()
                  );
              },
            },
            {
              key: "subscribeOnEvents",
              value: function () {
                var e = this,
                  t = this.model,
                  n = this.view;
                t.subscribe("send-state", function (t) {
                  e.emit("send-state", t);
                }),
                  t.subscribe("values-ready", function (e) {
                    n.getChanges(e);
                  }),
                  n.subscribe("slider-init", function (e) {
                    t.getViewParameters(e);
                  }),
                  n.subscribe("slider-clicked", function (e) {
                    t.clickTreatment(e);
                  }),
                  n.subscribe("handle-dragged", function (e) {
                    t.dragNDropTreatment(e);
                  }),
                  n.subscribe("window-resize", function (e) {
                    t.getViewParameters(e);
                  }),
                  n.subscribe("scroll", function (e) {
                    t.getViewParameters(e);
                  });
              },
            },
            {
              key: "getDataFromPanel",
              value: function (e) {
                this.model.sendStylesForRender(e),
                  this.model.getViewParameters(this.view.updateParameters());
              },
            },
          ]) && Z(t.prototype, n),
          a
        );
      })(o);
      function ae(e) {
        return (ae =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function se(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ue(e, t) {
        return (ue =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function le(e, t) {
        return !t || ("object" !== ae(t) && "function" != typeof t) ? ce(e) : t;
      }
      function ce(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function fe(e) {
        return (fe = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function de(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n(638).fn.extend({
        rangeSlider: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r,
            t = {};
          for (var n in r) void 0 === e[n] ? (t[n] = r[n]) : (t[n] = e[n]);
          return (
            (t.containerClass = ".".concat(this[0].classList.value)), new oe(t)
          );
        },
      });
      const pe = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && ue(e, t);
        })(a, e);
        var t,
          n,
          r,
          i,
          o =
            ((r = a),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = fe(r);
              if (i) {
                var n = fe(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return le(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            de(ce((t = o.call(this))), "slider", void 0),
            de(ce(t), "state", void 0),
            de(ce(t), "panel", void 0),
            de(ce(t), "listeners", void 0),
            (t.listeners = []),
            (t.slider = e),
            (t.state = t.slider.model.state),
            t.init(),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: "getData",
              value: function (e) {
                (this.state = e), this.updatePanel();
              },
            },
            {
              key: "init",
              value: function () {
                var e = this;
                (this.panel = document.querySelector(
                  "".concat(this.state.containerClass, " .js-panel")
                )),
                  this.setValues(),
                  this.addPanelListeners(),
                  this.slider.subscribe("send-state", function (t) {
                    e.getData(t);
                  });
              },
            },
            {
              key: "setValues",
              value: function () {
                var e = this.state,
                  t = e.maxValue,
                  n = e.minValue,
                  r = e.toVal,
                  i = e.fromVal,
                  o = e.sliderStep,
                  a = e.units,
                  s = e.isVertical,
                  u = e.isRange,
                  l = e.showValues;
                this.createPanelElement(".js-panel__unit_max-value", t),
                  this.createPanelElement(".js-panel__unit_min-value", n),
                  this.createPanelElement(".js-panel__unit_to-val", r),
                  this.createPanelElement(".js-panel__unit_from-val", i),
                  this.createPanelElement(".js-panel__unit_slider-step", o),
                  this.createPanelElement(".js-panel__unit_units", a);
                var c = this.panel.querySelector(".js-panel__unit_is-vertical");
                this.checkInputs(c, s);
                var f = this.panel.querySelector(".js-panel__unit_is-range");
                this.checkInputs(f, u);
                var d = this.panel.querySelector(".js-panel__unit_show-values");
                this.checkInputs(d, l);
              },
            },
            {
              key: "checkInputs",
              value: function (e, t) {
                if (null === e) throw Error("".concat(e, " is null!"));
                (e.checked = !0 === t),
                  this.listeners.push(e),
                  (this.listeners = Array.from(this.listeners));
              },
            },
            {
              key: "createPanelElement",
              value: function (e, t) {
                var n = this.panel.querySelector(e);
                console.log(n),
                  (n.value = t.toString()),
                  this.listeners.push(n);
              },
            },
            {
              key: "addPanelListeners",
              value: function () {
                var e = this;
                this.listeners.forEach(function (t) {
                  t.addEventListener("change", function (t) {
                    e.handleChanges(t);
                  });
                });
              },
            },
            {
              key: "updatePanel",
              value: function () {
                var e = this;
                this.listeners.forEach(function (t) {
                  t.classList.contains("js-panel__unit_max-value")
                    ? (t.value = e.state.maxValue)
                    : t.classList.contains("js-panel__unit_min-value")
                    ? (t.value = e.state.minValue)
                    : t.classList.contains("js-panel__unit_to-val")
                    ? (t.value = e.state.toVal)
                    : t.classList.contains("js-panel__unit_from-val")
                    ? (t.value = e.state.fromVal)
                    : t.classList.contains("js-panel__unit_slider-step")
                    ? (t.value = e.state.sliderStep)
                    : t.classList.contains("js-panel__unit_units") &&
                      (t.value = e.state.units);
                });
              },
            },
            {
              key: "handleChanges",
              value: function (e) {
                var t = e.target,
                  n = t.classList,
                  r = t.checked,
                  i = t.name,
                  o = t.value;
                n.contains("js-panel__unit_is-checkbox")
                  ? "vertical" === i
                    ? (this.state.isVertical = !0 === r)
                    : "range" === i
                    ? (this.state.isRange = !0 === r)
                    : "show-values" === i && (this.state.showValues = !0 === r)
                  : n.contains("js-panel__unit_max-value")
                  ? (this.state.maxValue = parseInt(o, 10))
                  : n.contains("js-panel__unit_min-value")
                  ? (this.state.minValue = parseInt(o, 10))
                  : n.contains("js-panel__unit_to-val")
                  ? (this.state.toVal = parseInt(o, 10))
                  : n.contains("js-panel__unit_from-val")
                  ? (this.state.fromVal = parseInt(o, 10))
                  : n.contains("js-panel__unit_slider-step")
                  ? (this.state.sliderStep = parseInt(o, 10))
                  : n.contains("js-panel__unit_units") &&
                    (this.state.units = o),
                  this.slider.getDataFromPanel(this.state);
              },
            },
          ]) && se(t.prototype, n),
          a
        );
      })(o);
      t()(document).ready(function () {
        var e = t()(".js-container").rangeSlider({ isVertical: !0 }),
          n = t()(".js-container-2").rangeSlider({
            minValue: 0,
            maxValue: 600,
            isRange: !1,
            isVertical: !1,
            fromVal: 50,
            toVal: 400,
            sliderStep: 1,
            units: "F",
            showValues: !1,
          }),
          r = t()(".js-container-3").rangeSlider({
            minValue: 0,
            maxValue: 1e3,
            isVertical: !1,
            fromVal: 50,
            toVal: 400,
            sliderStep: 1,
            units: "$",
            showValues: !1,
          });
        new pe(n), new pe(r), new pe(e);
      });
    })();
})();
