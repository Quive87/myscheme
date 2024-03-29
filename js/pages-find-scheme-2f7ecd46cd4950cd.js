(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2415],
  {
    4763: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/find-scheme",
        function () {
          return n(8604);
        },
      ]);
    },
    8231: function (e, t, n) {
      "use strict";
      var r = n(5893),
        s = n(6896),
        a = n(1253),
        l = n(1548),
        i = n(978),
        o = n(7516),
        u = n(7851);
      t.Z = function (e) {
        var t,
          n = e.routes,
          c = e.children,
          d = e.className,
          f = e.breadcrumbItemClass,
          m = e.align,
          h = e.containerBoxed,
          p = (0, s.Z)().formatMessage;
        return (0, r.jsx)("div", {
          className: (0, u.m)(
            "py-2 green ".concat(null !== d && void 0 !== d ? d : "")
          ),
          children: (0, r.jsx)(a.W2, {
            containerFluid: !h,
            children: (0, r.jsxs)(i.he, {
              isInlineList: !0,
              className: m || "!justify-center",
              children: [
                n
                  ? n.length > 0 &&
                    (null === n || void 0 === n
                      ? void 0
                      : n.map(function (e, t) {
                          return (0,
                          r.jsxs)(i.HC, { className: "flex", children: [(0, r.jsx)(l.x, { link: e.link, className: "text-secondary hover:underline green ".concat(f), children: e.name }), (0, r.jsx)("span", { className: "text-secondary green ".concat(f), children: (0, r.jsx)(o.lU2, { size: "20" }) })] }, t);
                        }))
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(i.HC, {
                          children: (0, r.jsx)(l.x, {
                            link: "/",
                            className:
                              "text-secondary hover:text-primary green ".concat(
                                f
                              ),
                            children: ((t = "home"), p({ id: t })),
                          }),
                        }),
                        (0, r.jsx)(i.HC, {
                          className: "text-secondary green ".concat(f),
                          children: (0, r.jsx)(o.lU2, { size: "20" }),
                        }),
                      ],
                    }),
                (0, r.jsx)(i.HC, {
                  className: "text-secondary green ".concat(f),
                  children: c,
                }),
              ],
            }),
          }),
        });
      };
    },
    9398: function (e, t, n) {
      "use strict";
      var r = n(5893),
        s = n(7294),
        a = n(7635),
        l = n(1163),
        i = n(3854),
        o = n(7516),
        u = n(2426),
        c = n(7701),
        d = n(4216),
        f = n(1253),
        m = n(6896),
        h = (n(8231), n(3866));
      t.Z = function (e) {
        var t = e.children,
          n = e.step,
          p = e.reset,
          x = (e.getValues, e.setAgeValue, e.setIsReset),
          y = e.previousRoute,
          v = void 0 === y ? "" : y,
          g = (0, m.Z)().formatMessage,
          b = function (e) {
            return g({ id: e });
          },
          _ = (0, c.j_)({ clearUserJourney: u.Vd }),
          j = (_.state, _.actions),
          w = (0, s.useState)(n),
          N = w[0],
          k = w[1],
          C = (0, s.useState)(!1),
          S = C[0],
          M = C[1],
          O = [
            "Demographics",
            "Residence",
            "Social Status",
            "Minority",
            "Income",
            "Final",
          ],
          V =
            ((0, s.useMemo)(
              function () {
                return Math.floor((N / 4) * 100);
              },
              [N]
            ),
            (0, l.useRouter)());
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(h.Z, { siteTitle: b("findScheme") }),
            (0, r.jsxs)(f.W2, {
              className: "py-0 mt-4 sm:mt-20",
              children: [
                (0, r.jsx)(d.Z, {
                  isOpen: S,
                  handleCloseModal: function () {
                    M(!1);
                  },
                  onSubmit: function () {
                    j.clearUserJourney(),
                      1 === N && (p({ gender: "Female", age: void 0 }), x(!0)),
                      k(1),
                      M(!1),
                      V.push("/find-scheme");
                  },
                  submitBtnText: b("yes"),
                  title: b("resetForm"),
                  children: b("resetConfirmation"),
                }),
                (0, r.jsx)(f.kC, {
                  className: "!justify-center !items-start",
                  space: "8",
                  children: (0, r.jsxs)("div", {
                    className: "flex-col md:w-10/12 lg:w-7/12 sm:mt-10 mb-10",
                    children: [
                      (0, r.jsxs)("h2", {
                        className:
                          "text-2xl text-center font-semibold mb-6 pl-2",
                        children: [b("userJourneyHead"), " "],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "flex-col relative pt-8 bg-white rounded-3xl shadow-xl min-h-[620px] md:min-h-[550px] ",
                        children: (0, r.jsxs)("div", {
                          className:
                            "pt-2 pb-2 md:flex flex-col px-6 md:px-16 max-w-lg mx-auto justify-center gap-2",
                          children: [
                            (0, r.jsxs)(f.kC, {
                              className: "relative mb-6 ",
                              children: [
                                (0, r.jsx)(a.o, {
                                  isGhostBtn: !0,
                                  isReactIcon: !0,
                                  iconBtn: !0,
                                  isLeftIcon: !0,
                                  mutedBtn: !0,
                                  isExtraSmallBtn: !0,
                                  className:
                                    (1 === N && " !hidden") +
                                    " absolute left-0 -top-8 md:top-auto !text-sm",
                                  iconClass: "!mr-1 w-5 h-5",
                                  icon: i.XJf,
                                  onClick: function () {
                                    k(N - 1), V.push("/find-scheme".concat(v));
                                  },
                                  children: b("back"),
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "bg-gray-400 h-0.5 w-full md:w-[55%] mx-auto flex items-center justify-between rounded-full",
                                  children: O.map(function (e, t) {
                                    return (0,
                                    r.jsx)("div", { className: "h-0.5 flex items-center ".concat(t === O.length - 1 ? "" : "w-1/3", " ").concat(N >= t + 1 ? "bg-green-600" : "", " "), children: (0, r.jsxs)("div", { className: " ".concat(N > t + 1 ? " bg-green-600 " : N === t + 1 ? " border-4 border-solid border-green-600 bg-white " : " border border-solid border-gray-300 bg-white ", " rounded-full w-5 h-5 flex items-center justify-center "), children: [N > t + 1 && (0, r.jsx)(o.hXj, { className: "w-4 h-4 mx-auto text-white" }), N === t + 1 && (0, r.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-green-600 " })] }) }, t);
                                  }),
                                }),
                              ],
                            }),
                            t,
                            (0, r.jsx)(f.kC, {
                              isFlexOnResponsive: !0,
                              className:
                                "!justify-center mx-auto mt-2 sm:mt-1 flex-col",
                              space: "2",
                              children: (0, r.jsx)(a.o, {
                                isGhostBtn: !0,
                                isReactIcon: !0,
                                iconBtn: !0,
                                isLeftIcon: !0,
                                greenBtn: !0,
                                isExtraSmallBtn: !0,
                                iconClass: "w-4 h-4 mr-1",
                                className: "opacity-60 !p-0",
                                icon: o.oAZ,
                                onClick: function () {
                                  M(!0);
                                },
                                children: b("resetForm"),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    638: function (e, t, n) {
      "use strict";
      var r = n(6856).Z,
        s = n(337).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = a.default,
            l = {
              loading: function (e) {
                e.error, e.isLoading;
                return e.pastDelay, null;
              },
            };
          r(e, Promise)
            ? (l.loader = function () {
                return e;
              })
            : "function" === typeof e
            ? (l.loader = e)
            : "object" === typeof e && (l = s({}, l, e));
          !1;
          (l = s({}, l, t)).loadableGenerated &&
            delete (l = s({}, l, l.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof l.ssr && !l.suspense) {
            if (!l.ssr) return delete l.ssr, i(n, l);
            delete l.ssr;
          }
          return n(l);
        }),
        (t.noSSR = i);
      l(n(7294));
      var a = l(n(4302));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6319: function (e, t, n) {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0);
      var s = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext(null);
      t.LoadableContext = s;
    },
    4302: function (e, t, n) {
      "use strict";
      var r = n(9658).Z,
        s = n(7222).Z,
        a = n(337).Z,
        l = n(9961).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i,
        o = (i = n(7294)) && i.__esModule ? i : { default: i },
        u = n(6319);
      var c = n(7294).useSyncExternalStore,
        d = [],
        f = [],
        m = !1;
      function h(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      var p = (function () {
        function e(t, n) {
          r(this, e),
            (this._loadFn = t),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          s(e, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  n = this._opts;
                if (t.loading) {
                  if ("number" === typeof n.delay)
                    if (0 === n.delay) this._state.pastDelay = !0;
                    else {
                      var r = this;
                      this._delay = setTimeout(function () {
                        r._update({ pastDelay: !0 });
                      }, n.delay);
                    }
                  if ("number" === typeof n.timeout) {
                    var s = this;
                    this._timeout = setTimeout(function () {
                      s._update({ timedOut: !0 });
                    }, n.timeout);
                  }
                }
                this._res.promise
                  .then(function () {
                    e._update({}), e._clearTimeouts();
                  })
                  .catch(function (t) {
                    e._update({}), e._clearTimeouts();
                  }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = a(
                  l(a({}, this._state), {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  }),
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function x(e) {
        return (function (e, t) {
          var n = function () {
              if (!i) {
                var t = new p(e, s);
                i = {
                  getCurrentValue: t.getCurrentValue.bind(t),
                  subscribe: t.subscribe.bind(t),
                  retry: t.retry.bind(t),
                  promise: t.promise.bind(t),
                };
              }
              return i.promise();
            },
            r = function () {
              n();
              var e = o.default.useContext(u.LoadableContext);
              e &&
                Array.isArray(s.modules) &&
                s.modules.forEach(function (t) {
                  e(t);
                });
            },
            s = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              t
            );
          s.suspense && (s.lazy = o.default.lazy(s.loader));
          var i = null;
          if (!m) {
            var d = s.webpack ? s.webpack() : s.modules;
            d &&
              f.push(function (e) {
                var t = !0,
                  r = !1,
                  s = void 0;
                try {
                  for (
                    var a, l = d[Symbol.iterator]();
                    !(t = (a = l.next()).done);
                    t = !0
                  ) {
                    var i = a.value;
                    if (-1 !== e.indexOf(i)) return n();
                  }
                } catch (o) {
                  (r = !0), (s = o);
                } finally {
                  try {
                    t || null == l.return || l.return();
                  } finally {
                    if (r) throw s;
                  }
                }
              });
          }
          var h = s.suspense
            ? function (e, t) {
                return (
                  r(), o.default.createElement(s.lazy, l(a({}, e), { ref: t }))
                );
              }
            : function (e, t) {
                r();
                var n = c(i.subscribe, i.getCurrentValue, i.getCurrentValue);
                return (
                  o.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: i.retry };
                    },
                    []
                  ),
                  o.default.useMemo(
                    function () {
                      return n.loading || n.error
                        ? o.default.createElement(s.loading, {
                            isLoading: n.loading,
                            pastDelay: n.pastDelay,
                            timedOut: n.timedOut,
                            error: n.error,
                            retry: i.retry,
                          })
                        : n.loaded
                        ? o.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e;
                            })(n.loaded),
                            e
                          )
                        : null;
                    },
                    [e, n]
                  )
                );
              };
          return (
            (h.preload = function () {
              return n();
            }),
            (h.displayName = "LoadableComponent"),
            o.default.forwardRef(h)
          );
        })(h, e);
      }
      function y(e, t) {
        for (var n = []; e.length; ) {
          var r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(function () {
          if (e.length) return y(e, t);
        });
      }
      (x.preloadAll = function () {
        return new Promise(function (e, t) {
          y(d).then(e, t);
        });
      }),
        (x.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var n = function () {
              return (m = !0), t();
            };
            y(f, e).then(n, n);
          });
        }),
        (window.__NEXT_PRELOADREADY = x.preloadReady);
      var v = x;
      t.default = v;
    },
    8604: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Demographic: function () {
            return p;
          },
        });
      var r = n(5893),
        s = n(7294),
        a = n(6896),
        l = n(5062),
        i = n(2426),
        o = n(7701),
        u = n(7536),
        c = n(6574),
        d = n(9398),
        f = n(1163),
        m = n(5152),
        h = n.n(m)()(
          function () {
            return Promise.resolve()
              .then(n.bind(n, 6574))
              .then(function (e) {
                return e.MaritalStatus;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6574];
              },
            },
          }
        ),
        p = function () {
          var e,
            t,
            n,
            m = (0, o.j_)({
              updateQueryData: i.ey,
              removeQueryDataKey: i.Z9,
              updateUserJourneyProgress: i.yg,
            }),
            p = m.state,
            x = m.actions,
            y = (0, f.useRouter)(),
            v = (0, s.useState)(
              (null === p ||
              void 0 === p ||
              null === (e = p.queryData) ||
              void 0 === e
                ? void 0
                : e.age) || null
            ),
            g = v[0],
            b = v[1],
            _ = (0, s.useState)(!1),
            j = _[0],
            w = _[1],
            N = (0, a.Z)().formatMessage,
            k = (0, u.cI)({ mode: "all" }),
            C = k.control,
            S = k.handleSubmit,
            M = k.getValues,
            O = k.reset,
            V = k.formState,
            R = (V.isValid, V.errors),
            E = k.setValue,
            Z = function (e) {
              x.updateUserJourneyProgress({ step1: !0 }),
                y.push("/find-scheme/screen-2");
            };
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(d.Z, {
              step: 1,
              reset: O,
              getValues: M,
              setAgeValue: b,
              setIsReset: w,
              children: [
                (0, r.jsxs)("form", {
                  className:
                    "flex flex-col gap-6 min-h-[24rem] md:min-h-[20rem] mb-8 md:mb-0",
                  onSubmit: S(Z),
                  children: [
                    (0, r.jsx)(c.Gender, {
                      genderOptions: l.P3,
                      control: C,
                      state: p,
                      errors: R,
                      actions: x,
                      getValues: M,
                      setValue: E,
                    }),
                    (0, r.jsx)(c.Age, {
                      control: C,
                      setAgeValue: b,
                      setIsReset: w,
                      ageValue: g,
                      state: p,
                      errors: R,
                      actions: x,
                      isReset: j,
                      setValue: E,
                    }),
                    "Female" ===
                      (null === p ||
                      void 0 === p ||
                      null === (t = p.queryData) ||
                      void 0 === t
                        ? void 0
                        : t.gender) &&
                      (null === p ||
                      void 0 === p ||
                      null === (n = p.queryData) ||
                      void 0 === n
                        ? void 0
                        : n.age) >= 18 &&
                      (0, r.jsx)(h, {
                        maritalStatusOptions: l.$b,
                        control: C,
                        state: p,
                        errors: R,
                        actions: x,
                        f: function (e) {
                          return N({ id: e });
                        },
                      }),
                  ],
                }),
                (0, r.jsx)(c.SubmitButton, { onClick: S(Z) }),
              ],
            }),
          });
        };
      t.default = p;
    },
    5152: function (e, t, n) {
      e.exports = n(638);
    },
  },
  function (e) {
    e.O(0, [6556, 260, 8987, 7536, 1361, 9774, 2888, 179], function () {
      return (t = 4763), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
