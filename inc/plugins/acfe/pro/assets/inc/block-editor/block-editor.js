! function() {
    var e, t = {
            737: function(e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        },
                        function(e, t) {
                            function __() {
                                this.constructor = e
                            }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
                        }),
                    i = this && this.__assign || Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    },
                    s = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
                        }
                        return n
                    };
                t.__esModule = !0;
                var l = n(196),
                    a = n(697),
                    c = n(367),
                    u = n(303),
                    d = "autosize:resized",
                    p = function(e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.state = {
                                lineHeight: null
                            }, t.textarea = null, t.onResize = function(e) {
                                t.props.onResize && t.props.onResize(e)
                            }, t.updateLineHeight = function() {
                                t.textarea && t.setState({
                                    lineHeight: u(t.textarea)
                                })
                            }, t.onChange = function(e) {
                                var n = t.props.onChange;
                                t.currentValue = e.currentTarget.value, n && n(e)
                            }, t
                        }
                        return o(t, e), t.prototype.componentDidMount = function() {
                            var e = this,
                                t = this.props,
                                n = t.maxRows,
                                r = t.async;
                            "number" == typeof n && this.updateLineHeight(), "number" == typeof n || r ? setTimeout((function() {
                                return e.textarea && c(e.textarea)
                            })) : this.textarea && c(this.textarea), this.textarea && this.textarea.addEventListener(d, this.onResize)
                        }, t.prototype.componentWillUnmount = function() {
                            this.textarea && (this.textarea.removeEventListener(d, this.onResize), c.destroy(this.textarea))
                        }, t.prototype.render = function() {
                            var e = this,
                                t = this.props,
                                n = (t.onResize, t.maxRows),
                                r = (t.onChange, t.style),
                                o = (t.innerRef, t.children),
                                a = s(t, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]),
                                c = this.state.lineHeight,
                                u = n && c ? c * n : null;
                            return l.createElement("textarea", i({}, a, {
                                onChange: this.onChange,
                                style: u ? i({}, r, {
                                    maxHeight: u
                                }) : r,
                                ref: function(t) {
                                    e.textarea = t, "function" == typeof e.props.innerRef ? e.props.innerRef(t) : e.props.innerRef && (e.props.innerRef.current = t)
                                }
                            }), o)
                        }, t.prototype.componentDidUpdate = function() {
                            this.textarea && c.update(this.textarea)
                        }, t.defaultProps = {
                            rows: 1,
                            async: !1
                        }, t.propTypes = {
                            rows: a.number,
                            maxRows: a.number,
                            onResize: a.func,
                            innerRef: a.any,
                            async: a.bool
                        }, t
                    }(l.Component);
                t.TextareaAutosize = l.forwardRef((function(e, t) {
                    return l.createElement(p, i({}, e, {
                        innerRef: t
                    }))
                }))
            },
            484: function(e, t, n) {
                "use strict";
                var r = n(737);
                t.Z = r.TextareaAutosize
            },
            367: function(e, t) {
                var n, r;
                n = function(e, t) {
                    "use strict";
                    var n, r, o = "function" == typeof Map ? new Map : (n = [], r = [], {
                            has: function(e) {
                                return n.indexOf(e) > -1
                            },
                            get: function(e) {
                                return r[n.indexOf(e)]
                            },
                            set: function(e, t) {
                                -1 === n.indexOf(e) && (n.push(e), r.push(t))
                            },
                            delete: function(e) {
                                var t = n.indexOf(e);
                                t > -1 && (n.splice(t, 1), r.splice(t, 1))
                            }
                        }),
                        i = function(e) {
                            return new Event(e, {
                                bubbles: !0
                            })
                        };
                    try {
                        new Event("test")
                    } catch (e) {
                        i = function(e) {
                            var t = document.createEvent("Event");
                            return t.initEvent(e, !0, !1), t
                        }
                    }

                    function s(e) {
                        if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
                            var t = null,
                                n = null,
                                r = null,
                                s = function() {
                                    e.clientWidth !== n && d()
                                },
                                l = function(t) {
                                    window.removeEventListener("resize", s, !1), e.removeEventListener("input", d, !1), e.removeEventListener("keyup", d, !1), e.removeEventListener("autosize:destroy", l, !1), e.removeEventListener("autosize:update", d, !1), Object.keys(t).forEach((function(n) {
                                        e.style[n] = t[n]
                                    })), o.delete(e)
                                }.bind(e, {
                                    height: e.style.height,
                                    resize: e.style.resize,
                                    overflowY: e.style.overflowY,
                                    overflowX: e.style.overflowX,
                                    wordWrap: e.style.wordWrap
                                });
                            e.addEventListener("autosize:destroy", l, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", d, !1), window.addEventListener("resize", s, !1), e.addEventListener("input", d, !1), e.addEventListener("autosize:update", d, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", o.set(e, {
                                destroy: l,
                                update: d
                            }), "vertical" === (a = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === a.resize && (e.style.resize = "horizontal"), t = "content-box" === a.boxSizing ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(t) && (t = 0), d()
                        }
                        var a;

                        function c(t) {
                            var n = e.style.width;
                            e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
                        }

                        function u() {
                            if (0 !== e.scrollHeight) {
                                var r = function(e) {
                                        for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                                            node: e.parentNode,
                                            scrollTop: e.parentNode.scrollTop
                                        }), e = e.parentNode;
                                        return t
                                    }(e),
                                    o = document.documentElement && document.documentElement.scrollTop;
                                e.style.height = "", e.style.height = e.scrollHeight + t + "px", n = e.clientWidth, r.forEach((function(e) {
                                    e.node.scrollTop = e.scrollTop
                                })), o && (document.documentElement.scrollTop = o)
                            }
                        }

                        function d() {
                            u();
                            var t = Math.round(parseFloat(e.style.height)),
                                n = window.getComputedStyle(e, null),
                                o = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
                            if (o < t ? "hidden" === n.overflowY && (c("scroll"), u(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), u(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), r !== o) {
                                r = o;
                                var s = i("autosize:resized");
                                try {
                                    e.dispatchEvent(s)
                                } catch (e) {}
                            }
                        }
                    }

                    function l(e) {
                        var t = o.get(e);
                        t && t.destroy()
                    }

                    function a(e) {
                        var t = o.get(e);
                        t && t.update()
                    }
                    var c = null;
                    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((c = function(e) {
                        return e
                    }).destroy = function(e) {
                        return e
                    }, c.update = function(e) {
                        return e
                    }) : ((c = function(e, t) {
                        return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
                            return s(e)
                        })), e
                    }).destroy = function(e) {
                        return e && Array.prototype.forEach.call(e.length ? e : [e], l), e
                    }, c.update = function(e) {
                        return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
                    }), t.default = c, e.exports = t.default
                }, void 0 === (r = n.apply(t, [e, t])) || (e.exports = r)
            },
            217: function(e, t, n) {
                "use strict";
                var r = {};
                n.r(r), n.d(r, {
                    disableComplementaryArea: function() {
                        return $
                    },
                    enableComplementaryArea: function() {
                        return Y
                    },
                    pinItem: function() {
                        return J
                    },
                    setDefaultComplementaryArea: function() {
                        return K
                    },
                    setFeatureDefaults: function() {
                        return Q
                    },
                    setFeatureValue: function() {
                        return X
                    },
                    toggleFeature: function() {
                        return Z
                    },
                    unpinItem: function() {
                        return q
                    }
                });
                var o = {};
                n.r(o), n.d(o, {
                    getActiveComplementaryArea: function() {
                        return ee
                    },
                    isFeatureActive: function() {
                        return ne
                    },
                    isItemPinned: function() {
                        return te
                    }
                });
                var i = {};
                n.r(i), n.d(i, {
                    getCanvasStyles: function() {
                        return ln
                    },
                    getCurrentPattern: function() {
                        return Zt
                    },
                    getCurrentPatternName: function() {
                        return qt
                    },
                    getEditorMode: function() {
                        return Yt
                    },
                    getEditorSettings: function() {
                        return $t
                    },
                    getIgnoredContent: function() {
                        return Xt
                    },
                    getNamedPattern: function() {
                        return Qt
                    },
                    getPatterns: function() {
                        return rn
                    },
                    getPreviewDeviceType: function() {
                        return sn
                    },
                    isEditing: function() {
                        return nn
                    },
                    isEditorReady: function() {
                        return Jt
                    },
                    isEditorSidebarOpened: function() {
                        return tn
                    },
                    isIframePreview: function() {
                        return an
                    },
                    isInserterOpened: function() {
                        return en
                    },
                    isListViewOpened: function() {
                        return on
                    }
                });
                var s = {};
                n.r(s), n.d(s, {
                    getBlocks: function() {
                        return cn
                    },
                    getEditCount: function() {
                        return fn
                    },
                    getEditorSelection: function() {
                        return un
                    },
                    hasEditorRedo: function() {
                        return pn
                    },
                    hasEditorUndo: function() {
                        return dn
                    }
                });
                var l = {};
                n.r(l), n.d(l, {
                    isFeatureActive: function() {
                        return mn
                    }
                });
                var a = {};
                n.r(a), n.d(a, {
                    isOptionActive: function() {
                        return gn
                    }
                });
                var c = {};
                n.r(c), n.d(c, {
                    setUndoManager: function() {
                        return vn
                    },
                    setYDoc: function() {
                        return hn
                    }
                });
                var u = {};
                n.r(u), n.d(u, {
                    getUndoManager: function() {
                        return bn
                    },
                    getYDoc: function() {
                        return yn
                    }
                });
                var d = {};
                n.r(d), n.d(d, {
                    setAvailableCollabPeers: function() {
                        return En
                    },
                    setCollabPeerSelection: function() {
                        return wn
                    }
                });
                var p = {};
                n.r(p), n.d(p, {
                    getCollabPeers: function() {
                        return Cn
                    },
                    hasCollabPeers: function() {
                        return Sn
                    }
                });
                var f = {};
                n.r(f), n.d(f, {
                    __experimentalConvertBlockToStatic: function() {
                        return Bn
                    },
                    __experimentalConvertBlocksToReusable: function() {
                        return Nn
                    },
                    __experimentalDeleteReusableBlock: function() {
                        return Dn
                    },
                    __experimentalSetEditingReusableBlock: function() {
                        return Un
                    }
                });
                var m = {};
                n.r(m), n.d(m, {
                    __experimentalIsEditingReusableBlock: function() {
                        return Vn
                    }
                });
                var g = {};
                n.r(g), n.d(g, {
                    disableComplementaryArea: function() {
                        return Gn
                    },
                    enableComplementaryArea: function() {
                        return Wn
                    },
                    pinItem: function() {
                        return Kn
                    },
                    setDefaultComplementaryArea: function() {
                        return Hn
                    },
                    setFeatureDefaults: function() {
                        return qn
                    },
                    setFeatureValue: function() {
                        return Jn
                    },
                    toggleFeature: function() {
                        return $n
                    },
                    unpinItem: function() {
                        return Yn
                    }
                });
                var h = {};
                n.r(h), n.d(h, {
                    getActiveComplementaryArea: function() {
                        return Zn
                    },
                    isFeatureActive: function() {
                        return Qn
                    },
                    isItemPinned: function() {
                        return Xn
                    }
                });
                var v = window.wp.element,
                    y = window.wp.mediaUtils,
                    b = window.wp.editor,
                    E = window.wp.hooks;

                function _() {
                    return _ = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, _.apply(this, arguments)
                }
                var w = window.wp.components,
                    C = window.wp.blockLibrary,
                    S = window.wp.data,
                    T = (window.wp.formatLibrary, window.wp.keyboardShortcuts),
                    k = n(184),
                    O = n.n(k),
                    A = window.wp.compose,
                    x = window.lodash;
                const I = ["button", "submit"];
                var P = (0, A.createHigherOrderComponent)((e => class extends v.Component {
                        constructor() {
                            super(...arguments), this.bindNode = this.bindNode.bind(this), this.cancelBlurCheck = this.cancelBlurCheck.bind(this), this.queueBlurCheck = this.queueBlurCheck.bind(this), this.normalizeButtonFocus = this.normalizeButtonFocus.bind(this)
                        }
                        componentWillUnmount() {
                            clearTimeout(this.blurCheckTimeout)
                        }
                        bindNode(e) {
                            e ? this.node = e : (delete this.node, this.cancelBlurCheck())
                        }
                        queueBlurCheck(e) {
                            e.persist(), this.preventBlurCheck || (this.blurCheckTimeout = setTimeout((() => {
                                document.hasFocus() ? "function" == typeof this.node.handleFocusOutside && this.node.handleFocusOutside(e) : e.preventDefault()
                            }), 0))
                        }
                        cancelBlurCheck() {
                            clearTimeout(this.blurCheckTimeout), void 0 !== this.node && "function" == typeof this.node.handleFocus && this.node.handleFocus(event)
                        }
                        normalizeButtonFocus(e) {
                            const {
                                type: t,
                                target: n
                            } = e;
                            (0, x.includes)(["mouseup", "touchend"], t) ? this.preventBlurCheck = !1: function(e) {
                                switch (e.nodeName) {
                                    case "A":
                                    case "BUTTON":
                                        return !0;
                                    case "INPUT":
                                        return (0, x.includes)(I, e.type)
                                }
                                return !1
                            }(n) && (this.preventBlurCheck = !0)
                        }
                        render() {
                            return (0, v.createElement)("div", {
                                onFocus: this.cancelBlurCheck,
                                onMouseDown: this.normalizeButtonFocus,
                                onMouseUp: this.normalizeButtonFocus,
                                onTouchStart: this.normalizeButtonFocus,
                                onTouchEnd: this.normalizeButtonFocus,
                                onBlur: this.queueBlurCheck
                            }, (0, v.createElement)(e, _({
                                ref: this.bindNode
                            }, this.props)))
                        }
                    }), "withFocusOutside"),
                    F = P(class extends v.Component {
                        handleFocus(e) {
                            this.props.onFocus()
                        }
                        isInspectorElement(e) {
                            return !!(e.closest(".components-color-picker") || e.closest(".block-editor-block-inspector") || e.closest(".iso-inspector") || e.classList.contains("media-modal"))
                        }
                        handleFocusOutside(e) {
                            const t = e.relatedTarget || e.target;
                            t && this.isInspectorElement(t) || this.props.onOutside()
                        }
                        render() {
                            return this.props.children
                        }
                    }),
                    M = window.wp.blocks,
                    R = window.wp.blockEditor,
                    L = window.wp.keycodes,
                    B = window.wp.i18n,
                    N = window.wp.primitives,
                    D = (0, v.createElement)(N.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, v.createElement)(N.Path, {
                        d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
                    })),
                    U = (0, v.createElement)(N.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, v.createElement)(N.Path, {
                        d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
                    })),
                    z = (0, v.createElement)(N.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, v.createElement)(N.Path, {
                        fillRule: "evenodd",
                        d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
                        clipRule: "evenodd"
                    })),
                    V = window.wp.viewport,
                    j = (0, v.createElement)(N.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, v.createElement)(N.Path, {
                        d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
                    })),
                    H = window.wp.deprecated,
                    W = n.n(H),
                    G = window.wp.preferences;
                const K = (e, t) => ({
                        type: "SET_DEFAULT_COMPLEMENTARY_AREA",
                        scope: e,
                        area: t
                    }),
                    Y = (e, t) => n => {
                        let {
                            registry: r,
                            dispatch: o
                        } = n;
                        t && (r.select(G.store).get(e, "isComplementaryAreaVisible") || r.dispatch(G.store).set(e, "isComplementaryAreaVisible", !0), o({
                            type: "ENABLE_COMPLEMENTARY_AREA",
                            scope: e,
                            area: t
                        }))
                    },
                    $ = e => t => {
                        let {
                            registry: n
                        } = t;
                        n.select(G.store).get(e, "isComplementaryAreaVisible") && n.dispatch(G.store).set(e, "isComplementaryAreaVisible", !1)
                    },
                    J = (e, t) => n => {
                        let {
                            registry: r
                        } = n;
                        if (!t) return;
                        const o = r.select(G.store).get(e, "pinnedItems");
                        !0 !== (null == o ? void 0 : o[t]) && r.dispatch(G.store).set(e, "pinnedItems", {
                            ...o,
                            [t]: !0
                        })
                    },
                    q = (e, t) => n => {
                        let {
                            registry: r
                        } = n;
                        if (!t) return;
                        const o = r.select(G.store).get(e, "pinnedItems");
                        r.dispatch(G.store).set(e, "pinnedItems", {
                            ...o,
                            [t]: !1
                        })
                    };

                function Z(e, t) {
                    return function(n) {
                        let {
                            registry: r
                        } = n;
                        W()("dispatch( 'core/interface' ).toggleFeature", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).toggle"
                        }), r.dispatch(G.store).toggle(e, t)
                    }
                }

                function X(e, t, n) {
                    return function(r) {
                        let {
                            registry: o
                        } = r;
                        W()("dispatch( 'core/interface' ).setFeatureValue", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).set"
                        }), o.dispatch(G.store).set(e, t, !!n)
                    }
                }

                function Q(e, t) {
                    return function(n) {
                        let {
                            registry: r
                        } = n;
                        W()("dispatch( 'core/interface' ).setFeatureDefaults", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).setDefaults"
                        }), r.dispatch(G.store).setDefaults(e, t)
                    }
                }
                const ee = (0, S.createRegistrySelector)((e => (t, n) => {
                        var r;
                        const o = e(G.store).get(n, "isComplementaryAreaVisible");
                        if (void 0 !== o) return o ? null == t || null === (r = t.complementaryAreas) || void 0 === r ? void 0 : r[n] : null
                    })),
                    te = (0, S.createRegistrySelector)((e => (t, n, r) => {
                        var o;
                        const i = e(G.store).get(n, "pinnedItems");
                        return null === (o = null == i ? void 0 : i[r]) || void 0 === o || o
                    })),
                    ne = (0, S.createRegistrySelector)((e => (t, n, r) => (W()("select( 'core/interface' ).isFeatureActive( scope, featureName )", {
                        since: "6.0",
                        alternative: "select( 'core/preferences' ).get( scope, featureName )"
                    }), !!e(G.store).get(n, r))));
                var re = (0, S.combineReducers)({
                    complementaryAreas: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case "SET_DEFAULT_COMPLEMENTARY_AREA": {
                                const {
                                    scope: n,
                                    area: r
                                } = t;
                                return e[n] ? e : {
                                    ...e,
                                    [n]: r
                                }
                            }
                            case "ENABLE_COMPLEMENTARY_AREA": {
                                const {
                                    scope: n,
                                    area: r
                                } = t;
                                return {
                                    ...e,
                                    [n]: r
                                }
                            }
                        }
                        return e
                    }
                });
                const oe = (0, S.createReduxStore)("core/interface", {
                    reducer: re,
                    actions: r,
                    selectors: o
                });
                (0, S.register)(oe);
                var ie = (0, window.wp.plugins.withPluginContext)(((e, t) => ({
                        icon: t.icon || e.icon,
                        identifier: t.identifier || `${e.name}/${t.name}`
                    }))),
                    se = ie((function(e) {
                        let {
                            as: t = w.Button,
                            scope: n,
                            identifier: r,
                            icon: o,
                            selectedIcon: i,
                            name: s,
                            ...l
                        } = e;
                        const a = t,
                            c = (0, S.useSelect)((e => e(oe).getActiveComplementaryArea(n) === r), [r]),
                            {
                                enableComplementaryArea: u,
                                disableComplementaryArea: d
                            } = (0, S.useDispatch)(oe);
                        return (0, v.createElement)(a, _({
                            icon: i && c ? i : o,
                            onClick: () => {
                                c ? d(n) : u(n, r)
                            }
                        }, l))
                    })),
                    le = e => {
                        let {
                            smallScreenTitle: t,
                            children: n,
                            className: r,
                            toggleButtonProps: o
                        } = e;
                        const i = (0, v.createElement)(se, _({
                            icon: j
                        }, o));
                        return (0, v.createElement)(v.Fragment, null, (0, v.createElement)("div", {
                            className: "components-panel__header interface-complementary-area-header__small"
                        }, t && (0, v.createElement)("span", {
                            className: "interface-complementary-area-header__small-title"
                        }, t), i), (0, v.createElement)("div", {
                            className: O()("components-panel__header", "interface-complementary-area-header", r),
                            tabIndex: -1
                        }, n, i))
                    };
                const ae = () => {};

                function ce(e) {
                    let {
                        name: t,
                        as: n = w.Button,
                        onClick: r,
                        ...o
                    } = e;
                    return (0, v.createElement)(w.Fill, {
                        name: t
                    }, (e => {
                        let {
                            onClick: t
                        } = e;
                        return (0, v.createElement)(n, _({
                            onClick: r || t ? function() {
                                (r || ae)(...arguments), (t || ae)(...arguments)
                            } : void 0
                        }, o))
                    }))
                }
                ce.Slot = function(e) {
                    let {
                        name: t,
                        as: n = w.ButtonGroup,
                        fillProps: r = {},
                        bubblesVirtually: o,
                        ...i
                    } = e;
                    return (0, v.createElement)(w.Slot, {
                        name: t,
                        bubblesVirtually: o,
                        fillProps: r
                    }, (e => {
                        if (!v.Children.toArray(e).length) return null;
                        const t = [];
                        v.Children.forEach(e, (e => {
                            let {
                                props: {
                                    __unstableExplicitMenuItem: n,
                                    __unstableTarget: r
                                }
                            } = e;
                            r && n && t.push(r)
                        }));
                        const r = v.Children.map(e, (e => !e.props.__unstableExplicitMenuItem && t.includes(e.props.__unstableTarget) ? null : e));
                        return (0, v.createElement)(n, i, r)
                    }))
                };
                var ue = ce;
                const de = e => {
                    let {
                        __unstableExplicitMenuItem: t,
                        __unstableTarget: n,
                        ...r
                    } = e;
                    return (0, v.createElement)(w.MenuItem, r)
                };

                function pe(e) {
                    let {
                        scope: t,
                        target: n,
                        __unstableExplicitMenuItem: r,
                        ...o
                    } = e;
                    return (0, v.createElement)(se, _({
                        as: e => (0, v.createElement)(ue, _({
                            __unstableExplicitMenuItem: r,
                            __unstableTarget: `${t}/${n}`,
                            as: de,
                            name: `${t}/plugin-more-menu`
                        }, e)),
                        role: "menuitemcheckbox",
                        selectedIcon: D,
                        name: n,
                        scope: t
                    }, o))
                }

                function fe(e) {
                    let {
                        scope: t,
                        ...n
                    } = e;
                    return (0, v.createElement)(w.Fill, _({
                        name: `PinnedItems/${t}`
                    }, n))
                }
                fe.Slot = function(e) {
                    let {
                        scope: t,
                        className: n,
                        ...r
                    } = e;
                    return (0, v.createElement)(w.Slot, _({
                        name: `PinnedItems/${t}`
                    }, r), (e => (null == e ? void 0 : e.length) > 0 && (0, v.createElement)("div", {
                        className: O()(n, "interface-pinned-items")
                    }, e)))
                };
                var me = fe;

                function ge(e) {
                    let {
                        scope: t,
                        children: n,
                        className: r
                    } = e;
                    return (0, v.createElement)(w.Fill, {
                        name: `ComplementaryArea/${t}`
                    }, (0, v.createElement)("div", {
                        className: r
                    }, n))
                }
                const he = ie((function(e) {
                    let {
                        children: t,
                        className: n,
                        closeLabel: r = (0, B.__)("Close plugin"),
                        identifier: o,
                        header: i,
                        headerClassName: s,
                        icon: l,
                        isPinnable: a = !0,
                        panelClassName: c,
                        scope: u,
                        name: d,
                        smallScreenTitle: p,
                        title: f,
                        toggleShortcut: m,
                        isActiveByDefault: g,
                        showIconLabels: h = !1
                    } = e;
                    const {
                        isActive: y,
                        isPinned: b,
                        activeArea: E,
                        isSmall: _,
                        isLarge: C
                    } = (0, S.useSelect)((e => {
                        const {
                            getActiveComplementaryArea: t,
                            isItemPinned: n
                        } = e(oe), r = t(u);
                        return {
                            isActive: r === o,
                            isPinned: n(u, o),
                            activeArea: r,
                            isSmall: e(V.store).isViewportMatch("< medium"),
                            isLarge: e(V.store).isViewportMatch("large")
                        }
                    }), [o, u]);
                    ! function(e, t, n, r, o) {
                        const i = (0, v.useRef)(!1),
                            s = (0, v.useRef)(!1),
                            {
                                enableComplementaryArea: l,
                                disableComplementaryArea: a
                            } = (0, S.useDispatch)(oe);
                        (0, v.useEffect)((() => {
                            r && o && !i.current ? (a(e), s.current = !0) : s.current && !o && i.current ? (s.current = !1, l(e, t)) : s.current && n && n !== t && (s.current = !1), o !== i.current && (i.current = o)
                        }), [r, o, e, t, n])
                    }(u, o, E, y, _);
                    const {
                        enableComplementaryArea: T,
                        disableComplementaryArea: k,
                        pinItem: A,
                        unpinItem: x
                    } = (0, S.useDispatch)(oe);
                    return (0, v.useEffect)((() => {
                        g && void 0 === E && !_ && T(u, o)
                    }), [E, g, u, o, _]), (0, v.createElement)(v.Fragment, null, a && (0, v.createElement)(me, {
                        scope: u
                    }, b && (0, v.createElement)(se, {
                        scope: u,
                        identifier: o,
                        isPressed: y && (!h || C),
                        "aria-expanded": y,
                        label: f,
                        icon: h ? D : l,
                        showTooltip: !h,
                        variant: h ? "tertiary" : void 0
                    })), d && a && (0, v.createElement)(pe, {
                        target: d,
                        scope: u,
                        icon: l
                    }, f), y && (0, v.createElement)(ge, {
                        className: O()("interface-complementary-area", n),
                        scope: u
                    }, (0, v.createElement)(le, {
                        className: s,
                        closeLabel: r,
                        onClose: () => k(u),
                        smallScreenTitle: p,
                        toggleButtonProps: {
                            label: r,
                            shortcut: m,
                            scope: u,
                            identifier: o
                        }
                    }, i || (0, v.createElement)(v.Fragment, null, (0, v.createElement)("strong", null, f), a && (0, v.createElement)(w.Button, {
                        className: "interface-complementary-area__pin-unpin-item",
                        icon: b ? U : z,
                        label: b ? (0, B.__)("Unpin from toolbar") : (0, B.__)("Pin to toolbar"),
                        onClick: () => (b ? x : A)(u, o),
                        isPressed: b,
                        "aria-expanded": b
                    }))), (0, v.createElement)(w.Panel, {
                        className: c
                    }, t)))
                }));
                he.Slot = function(e) {
                    let {
                        scope: t,
                        ...n
                    } = e;
                    return (0, v.createElement)(w.Slot, _({
                        name: `ComplementaryArea/${t}`
                    }, n))
                };
                var ve = he,
                    ye = e => {
                        let {
                            isActive: t
                        } = e;
                        return (0, v.useEffect)((() => {
                            let e = !1;
                            return document.body.classList.contains("sticky-menu") && (e = !0, document.body.classList.remove("sticky-menu")), () => {
                                e && document.body.classList.add("sticky-menu")
                            }
                        }), []), (0, v.useEffect)((() => (t ? document.body.classList.add("is-fullscreen-mode") : document.body.classList.remove("is-fullscreen-mode"), () => {
                            t && document.body.classList.remove("is-fullscreen-mode")
                        })), [t]), null
                    },
                    be = (0, v.forwardRef)((function(e, t) {
                        let {
                            footer: n,
                            header: r,
                            sidebar: o,
                            secondarySidebar: i,
                            notices: s,
                            content: l,
                            drawer: a,
                            actions: c,
                            labels: u,
                            className: d,
                            shortcuts: p
                        } = e;
                        const f = (0, w.__unstableUseNavigateRegions)(p);
                        ! function(e) {
                            (0, v.useEffect)((() => {
                                const t = document && document.querySelector(`html:not(.${e})`);
                                if (t) return t.classList.toggle(e), () => {
                                    t.classList.toggle(e)
                                }
                            }), [e])
                        }("interface-interface-skeleton__html-container");
                        const m = {
                            /* translators: accessibility text for the nav bar landmark region. */
                            drawer: (0, B.__)("Drawer"),
                            /* translators: accessibility text for the top bar landmark region. */
                            header: (0, B.__)("Header"),
                            /* translators: accessibility text for the content landmark region. */
                            body: (0, B.__)("Content"),
                            /* translators: accessibility text for the secondary sidebar landmark region. */
                            secondarySidebar: (0, B.__)("Block Library"),
                            /* translators: accessibility text for the settings landmark region. */
                            sidebar: (0, B.__)("Settings"),
                            /* translators: accessibility text for the publish landmark region. */
                            actions: (0, B.__)("Publish"),
                            /* translators: accessibility text for the footer landmark region. */
                            footer: (0, B.__)("Footer"),
                            ...u
                        };
                        return (0, v.createElement)("div", _({}, f, {
                            ref: (0, A.useMergeRefs)([t, f.ref]),
                            className: O()(d, "interface-interface-skeleton", f.className, !!n && "has-footer")
                        }), !!a && (0, v.createElement)("div", {
                            className: "interface-interface-skeleton__drawer",
                            role: "region",
                            "aria-label": m.drawer,
                            tabIndex: "-1"
                        }, a), (0, v.createElement)("div", {
                            className: "interface-interface-skeleton__editor"
                        }, !!r && (0, v.createElement)("div", {
                            className: "interface-interface-skeleton__header",
                            role: "region",
                            "aria-label": m.header,
                            tabIndex: "-1"
                        }, r), (0, v.createElement)("div", {
                            className: "interface-interface-skeleton__body"
                        }, !!i && (0, v.createElement)("div", {
                            className: "interface-interface-skeleton__secondary-sidebar",
                            role: "region",
                            "aria-label": m.secondarySidebar,
                            tabIndex: "-1"
                        }, i), !!s && (0, v.createElement)("div", {
                            className: "interface-interface-skeleton__notices"
                        }, s), (0, v.createElement)("div", {
                            className: "interface-interface-skeleton__content",
                            role: "region",
                            "aria-label": m.body,
                            tabIndex: "-1"
                        }, l), !!o && (0, v.createElement)("div", {
                            className: "interface-interface-skeleton__sidebar",
                            role: "region",
                            "aria-label": m.sidebar,
                            tabIndex: "-1"
                        }, o), !!c && (0, v.createElement)("div", {
                            className: "interface-interface-skeleton__actions",
                            role: "region",
                            "aria-label": m.actions,
                            tabIndex: "-1"
                        }, c))), !!n && (0, v.createElement)("div", {
                            className: "interface-interface-skeleton__footer",
                            role: "region",
                            "aria-label": m.footer,
                            tabIndex: "-1"
                        }, n))
                    })),
                    Ee = (0, v.createElement)(N.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, v.createElement)(N.Path, {
                        fillRule: "evenodd",
                        d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
                        clipRule: "evenodd"
                    })),
                    _e = e => {
                        let {
                            sidebarName: t,
                            documentInspector: n
                        } = e;
                        const {
                            openGeneralSidebar: r
                        } = (0, S.useDispatch)("isolated/editor"), {
                            documentLabel: o
                        } = (0, S.useSelect)((e => ({
                            // translators: Default label for the Document sidebar tab, not selected.
                            documentLabel: n && "string" == typeof n ? n : (0, B._x)("Document", "noun")
                        })), []), [i, s] = "edit-post/document" === t ? // translators: ARIA label for the Document sidebar tab, selected. %s: Document label.
                            [(0, B.sprintf)((0, B.__)("%s (selected)"), o), "is-active"] : [o, ""], [l, a] = "edit-post/block" === t ? // translators: ARIA label for the Block Settings Sidebar tab, selected.
                            [(0, B.__)("Block (selected)"), "is-active"] : // translators: ARIA label for the Block Settings Sidebar tab, not selected.
                            [(0, B.__)("Block"), ""];
                        return (0, v.createElement)("ul", null, !!n && (0, v.createElement)("li", null, (0, v.createElement)(w.Button, {
                            onClick: () => r("edit-post/document"),
                            className: `edit-post-sidebar__panel-tab ${s}`,
                            "aria-label": i,
                            "data-label": o
                        }, o)), (0, v.createElement)("li", null, (0, v.createElement)(w.Button, {
                                onClick: () => r("edit-post/block"),
                                className: `edit-post-sidebar__panel-tab ${a}`,
                                "aria-label": l,
                                "data-label": (0, B.__)("Block")
                            }, // translators: Text label for the Block Settings Sidebar tab.
                            (0, B.__)("Block"))))
                    };
                const {
                    Fill: we,
                    Slot: Ce
                } = (0, w.createSlotFill)("PluginDocumentSettingPanel"), Se = e => {
                    let {
                        children: t
                    } = e;
                    return (0, v.createElement)(we, null, t)
                };
                Se.Slot = function(e) {
                    return (0, v.createElement)(Ce, null, (e => 0 === e.length ? (0, v.createElement)("span", {
                        className: "block-editor-block-inspector__no-blocks"
                    }, (0, B.__)("Nothing to display")) : e))
                };
                var Te = Se;

                function ke(e) {
                    let {
                        className: t,
                        ...n
                    } = e;
                    const {
                        postTitle: r,
                        shortcut: o,
                        showIconLabels: i
                    } = (0, S.useSelect)((e => ({
                        postTitle: "",
                        shortcut: e(T.store).getShortcutRepresentation("core/edit-post/toggle-sidebar"),
                        showIconLabels: e("isolated/editor").isFeatureActive("showIconLabels")
                    })), []);
                    return (0, v.createElement)(ve, _({
                        panelClassName: t,
                        className: "edit-post-sidebar",
                        smallScreenTitle: r || (0, B.__)("(no title)"),
                        scope: "isolated/editor",
                        toggleShortcut: o,
                        showIconLabels: i
                    }, n))
                }
                var Oe = e => {
                    let {
                        documentInspector: t
                    } = e;
                    const {
                        sidebarName: n,
                        keyboardShortcut: r
                    } = (0, S.useSelect)((e => {
                        let t = e(oe).getActiveComplementaryArea("isolated/editor");
                        return ["edit-post/document", "edit-post/block"].includes(t) || (t = "edit-post/document", e(R.store).getBlockSelectionStart() && (t = "edit-post/block")), {
                            sidebarName: t,
                            keyboardShortcut: e(T.store).getShortcutRepresentation("core/edit-post/toggle-sidebar")
                        }
                    }), []);
                    return (0, v.createElement)(ke, {
                        className: "iso-sidebar",
                        identifier: n,
                        header: (0, v.createElement)(_e, {
                            sidebarName: n,
                            documentInspector: t
                        }),
                        closeLabel: (0, B.__)("Close settings"),
                        headerClassName: "edit-post-sidebar__panel-tabs"
                            /* translators: button label text should, if possible, be under 16 characters. */
                            ,
                        title: (0, B.__)("Settings"),
                        toggleShortcut: r,
                        icon: Ee,
                        isActiveByDefault: !1
                    }, "edit-post/document" === n && (0, v.createElement)(Te.Slot, null), "edit-post/block" === n && (0, v.createElement)(R.BlockInspector, null))
                };
                n(196);
                const {
                    Fill: Ae,
                    Slot: xe
                } = (0, w.createSlotFill)("IsolatedEditorHeading"), Ie = e => {
                    let {
                        children: t
                    } = e;
                    return (0, v.createElement)(Ae, null, t)
                };
                Ie.Slot = function(e) {
                    return (0, v.createElement)(xe, null, (e => e))
                };
                var Pe = Ie;
                const {
                    Fill: Fe,
                    Slot: Me
                } = (0, w.createSlotFill)("IsolatedFooter"), Re = e => {
                    let {
                        children: t
                    } = e;
                    return (0, v.createElement)(Fe, null, t)
                };
                Re.Slot = function(e) {
                    return (0, v.createElement)(Me, null, (e => e))
                };
                var Le = Re;

                function Be(e) {
                    let {
                        children: t,
                        contentRef: n,
                        shouldIframe: r,
                        styles: o,
                        style: i
                    } = e;
                    const s = (0, R.__unstableUseMouseMoveTypingReset)(),
                        {
                            assets: l
                        } = (0, S.useSelect)((e => ({
                            assets: e("core/block-editor").getSettings().__unstableResolvedAssets
                        })), []);
                    return r ? (0, v.createElement)(R.__unstableIframe, {
                        head: (0, v.createElement)(R.__unstableEditorStyles, {
                            styles: o
                        }),
                        assets: l,
                        ref: s,
                        contentRef: n,
                        style: {
                            width: "100%",
                            height: "100%",
                            display: "block"
                        },
                        name: "editor-canvas"
                    }, t) : (0, v.createElement)(v.Fragment, null, (0, v.createElement)(R.__unstableEditorStyles, {
                        styles: o
                    }), (0, v.createElement)(R.WritingFlow, {
                        ref: n,
                        className: "editor-styles-wrapper",
                        style: {
                            flex: "1",
                            ...i
                        },
                        tabIndex: -1
                    }, t))
                }
                const Ne = e => {
                    let {
                        children: t,
                        disableAnimations: n,
                        initialStyle: r,
                        currentStyle: o,
                        ...i
                    } = e;
                    return n ? (0, v.createElement)("div", _({
                        style: o
                    }, i), t) : (0, v.createElement)(w.__unstableMotion.div, _({
                        animate: o,
                        initial: r
                    }, i), t)
                };
                var De = e => {
                        let {
                            styles: t
                        } = e;
                        const n = (0, S.useSelect)((e => {
                                const {
                                    getSettings: t
                                } = e(R.store);
                                return t().supportsLayout
                            }), []),
                            {
                                canvasStyles: r,
                                deviceType: o,
                                disableCanvasAnimations: i,
                                isIframePreview: s
                            } = (0, S.useSelect)((e => {
                                const {
                                    getCanvasStyles: t,
                                    getPreviewDeviceType: n,
                                    getEditorSettings: r,
                                    isIframePreview: o
                                } = e("isolated/editor");
                                return {
                                    canvasStyles: t(),
                                    deviceType: n(),
                                    disableCanvasAnimations: r().disableCanvasAnimations,
                                    isIframePreview: o()
                                }
                            }), []),
                            l = (0, R.__experimentalUseResizeCanvas)(o, !1),
                            a = (0, R.useSetting)("layout"),
                            c = "is-" + o.toLowerCase() + "-preview",
                            u = {
                                width: "100%",
                                margin: 0,
                                display: "flex",
                                flexFlow: "column",
                                background: "white"
                            };
                        let d = u;
                        l && (d = l), r && (d = {
                            ...d,
                            ...r
                        });
                        const p = (0, R.__unstableUseBlockSelectionClearer)(),
                            f = (0, v.useRef)(),
                            m = (0, A.useMergeRefs)([f, (0, R.__unstableUseClipboardHandler)(), (0, R.__unstableUseTypewriter)(), (0, R.__unstableUseBlockSelectionClearer)(), (0, R.__unstableUseTypingObserver)()]),
                            g = (0, v.useMemo)((() => {
                                if (n) return a
                            }), [n, a]),
                            h = null != g && g.definitions ? {
                                ...g,
                                type: "constrained"
                            } : g;
                        return (0, v.createElement)(R.BlockTools, {
                            __unstableContentRef: f,
                            className: "edit-post-visual-editor"
                        }, (0, v.createElement)(w.__unstableMotion.div, {
                            className: "edit-post-visual-editor__content-area",
                            animate: {
                                padding: "0"
                            },
                            ref: p
                        }, (0, v.createElement)(Ne, {
                            className: c,
                            currentStyle: d,
                            disableAnimations: i,
                            initialStyle: u
                        }, (0, v.createElement)(Be, {
                            shouldIframe: s,
                            contentRef: m,
                            styles: t,
                            style: {}
                        }, (0, v.createElement)(R.__experimentalLayoutStyle, {
                            selector: ".edit-post-visual-editor__post-title-wrapper, .block-editor-block-list__layout.is-root-container",
                            layout: h
                        }), (0, v.createElement)(Pe.Slot, {
                            mode: "visual"
                        }), (0, v.createElement)(R.BlockList, {
                            className: void 0,
                            __experimentalLayout: g
                        }), (0, v.createElement)(Le.Slot, {
                            mode: "visual"
                        })))))
                    },
                    Ue = n(484);
                class ze extends v.Component {
                    constructor(e) {
                        super(e), this.edit = this.edit.bind(this), this.stopEditing = this.stopEditing.bind(this), this.state = {}
                    }
                    static getDerivedStateFromProps(e, t) {
                        return t.isDirty ? null : {
                            value: e.value,
                            isDirty: !1
                        }
                    }
                    edit(e) {
                        const t = e.target.value;
                        this.props.onChange(t), this.setState({
                            value: t,
                            isDirty: !0
                        })
                    }
                    stopEditing() {
                        this.state.isDirty && (this.props.onPersist(this.state.value), this.setState({
                            isDirty: !1
                        }))
                    }
                    render() {
                        const {
                            value: e
                        } = this.state, {
                            instanceId: t
                        } = this.props;
                        return (0, v.createElement)(v.Fragment, null, (0, v.createElement)("label", {
                            htmlFor: `post-content-${t}`,
                            className: "screen-reader-text"
                        }, (0, B.__)("Type text or HTML")), (0, v.createElement)(Ue.Z, {
                            autoComplete: "off",
                            dir: "auto",
                            value: e,
                            onChange: this.edit,
                            onBlur: this.stopEditing,
                            className: "editor-post-text-editor",
                            id: `post-content-${t}`,
                            placeholder: (0, B.__)("Start writing with text or HTML")
                        }))
                    }
                }
                var Ve = (0, A.compose)([(0, S.withSelect)((e => {
                        const {
                            getBlocks: t
                        } = e("isolated/editor");
                        return {
                            value: (0, M.serialize)(t())
                        }
                    })), (0, S.withDispatch)((e => {
                        const {
                            updateBlocksWithoutUndo: t
                        } = e("isolated/editor");
                        return {
                            onChange(e) {
                                const n = (0, M.parse)(e);
                                t(n)
                            },
                            onPersist(e) {
                                const n = (0, M.parse)(e);
                                t(n)
                            }
                        }
                    })), A.withInstanceId])(ze),
                    je = function(e) {
                        let {} = e;
                        return (0, v.createElement)("div", {
                            className: "edit-post-text-editor"
                        }, (0, v.createElement)("div", {
                            className: "edit-post-text-editor__body"
                        }, (0, v.createElement)(Pe.Slot, {
                            mode: "text"
                        }), (0, v.createElement)(Ve, null), (0, v.createElement)(Le.Slot, {
                            mode: "text"
                        })))
                    },
                    He = (0, v.createElement)(N.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, v.createElement)(N.Path, {
                        d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
                    })),
                    We = (0, A.compose)([(0, S.withSelect)(((e, t) => {
                        let {
                            feature: n
                        } = t;
                        return {
                            isActive: e("isolated/editor").isFeatureActive(n)
                        }
                    })), (0, S.withDispatch)(((e, t) => ({
                        onToggle() {
                            e("isolated/editor").toggleFeature(t.feature), t.onClose()
                        }
                    }))), w.withSpokenMessages])((function(e) {
                        let {
                            onToggle: t,
                            isActive: n,
                            label: r,
                            info: o,
                            messageActivated: i,
                            messageDeactivated: s,
                            speak: l
                        } = e;
                        return (0, v.createElement)(w.MenuItem, {
                            icon: n && D,
                            isSelected: n,
                            onClick: (0, x.flow)(t, (() => {
                                l(n ? s || (0, B.__)("Feature deactivated") : i || (0, B.__)("Feature activated"))
                            })),
                            role: "menuitemcheckbox",
                            info: o
                        }, r)
                    })),
                    Ge = (0, A.compose)([(0, S.withSelect)(((e, t) => {
                        let {
                            option: n
                        } = t;
                        return {
                            isActive: e("isolated/editor").isOptionActive(n)
                        }
                    })), (0, S.withDispatch)(((e, t) => ({
                        onToggle() {
                            e("isolated/editor").toggleOption(t.option), t.onClose()
                        }
                    }))), w.withSpokenMessages])((function(e) {
                        let {
                            onToggle: t,
                            isActive: n,
                            label: r,
                            info: o
                        } = e;
                        return (0, v.createElement)(w.MenuItem, {
                            icon: n && D,
                            isSelected: n,
                            onClick: t,
                            role: "menuitemcheckbox",
                            info: o
                        }, r)
                    })),
                    Ke = function(e) {
                        var t;
                        let {
                            onClose: n,
                            settings: r
                        } = e;
                        const {
                            preview: o,
                            fullscreen: i,
                            topToolbar: s
                        } = (null == r || null === (t = r.iso) || void 0 === t ? void 0 : t.moreMenu) || {}, {
                            isFullscreen: l
                        } = (0, S.useSelect)((e => ({
                            isFullscreen: e("isolated/editor").isOptionActive("fullscreenMode")
                        })), []);
                        return i || o || s ? (0, v.createElement)(w.MenuGroup, {
                            label: (0, B._x)("View", "noun")
                        }, s && (0, v.createElement)(v.Fragment, null, (0, v.createElement)(We, {
                            feature: "fixedToolbar",
                            label: (0, B.__)("Top toolbar"),
                            info: (0, B.__)("Access all block and document tools in a single place."),
                            messageActivated: (0, B.__)("Top toolbar activated"),
                            messageDeactivated: (0, B.__)("Top toolbar deactivated"),
                            onClose: n
                        })), i && (0, v.createElement)(Ge, {
                            option: "fullscreenMode",
                            label: (0, B.__)("Fullscreen"),
                            info: (0, B.__)("Show editor fullscreen."),
                            onClose: n
                        }), o && !l && (0, v.createElement)(Ge, {
                            option: "preview",
                            label: (0, B.__)("Preview"),
                            info: (0, B.__)("Preview the content before posting."),
                            onClose: n
                        })) : null
                    },
                    Ye = (0, A.compose)([(0, S.withSelect)((e => {
                        const {
                            getEditorMode: t
                        } = e("isolated/editor"), {
                            codeEditingEnabled: n
                        } = e("core/editor").getEditorSettings();
                        return {
                            editorMode: t(),
                            isCodeEditingEnabled: n
                        }
                    })), (0, S.withDispatch)((e => ({
                        onSetMode(t) {
                            e("isolated/editor").setEditorMode(t)
                        }
                    })))])((function(e) {
                        var t, n, r;
                        let {
                            onClose: o,
                            editorMode: i,
                            onSetMode: s,
                            isCodeEditingEnabled: l,
                            settings: a
                        } = e;
                        const c = e => {
                            s(e), o()
                        };
                        return l && !1 !== (null == a || null === (t = a.iso) || void 0 === t ? void 0 : t.moreMenu) && null != a && null !== (n = a.iso) && void 0 !== n && null !== (r = n.moreMenu) && void 0 !== r && r.editor ? (0, v.createElement)(w.MenuGroup, {
                            label: (0, B._x)("Editor", "noun")
                        }, (0, v.createElement)(w.MenuItem, {
                            icon: "visual" === i && D,
                            isSelected: "visual" === i,
                            onClick: () => c("visual"),
                            role: "menuitemcheckbox"
                        }, (0, B.__)("Visual editor")), (0, v.createElement)(w.MenuItem, {
                            icon: "text" === i && D,
                            isSelected: "text" === i,
                            onClick: () => c("text"),
                            role: "menuitemcheckbox"
                        }, (0, B.__)("Code editor"))) : null
                    })),
                    $e = function(e) {
                        let {
                            settings: t
                        } = e;
                        const {
                            linkMenu: n = []
                        } = t.iso || {};
                        return 0 === n.length ? null : (0, v.createElement)(w.MenuGroup, {
                            label: (0, B.__)("Links")
                        }, n.map((e => {
                            let {
                                title: t,
                                url: n
                            } = e;
                            return (0, v.createElement)(w.MenuItem, {
                                key: t
                            }, (0, v.createElement)(w.ExternalLink, {
                                href: n
                            }, t))
                        })))
                    };
                const Je = {
                        className: "edit-post-more-menu__content",
                        position: "bottom left"
                    },
                    qe = {
                        tooltipPosition: "bottom"
                    };
                var Ze = e => {
                        let {
                            settings: t,
                            onClick: n,
                            renderMoreMenu: r
                        } = e;
                        return (0, v.createElement)(w.DropdownMenu, {
                            className: "edit-post-more-menu",
                            icon: He,
                            label: (0, B.__)("More tools & options"),
                            popoverProps: Je,
                            toggleProps: {
                                ...qe,
                                onClick: n
                            }
                        }, (e => {
                            let {
                                onClose: n
                            } = e;
                            return (0, v.createElement)(v.Fragment, null, r && r(t, n), (0, v.createElement)(Ye, {
                                onClose: n,
                                settings: t
                            }), (0, v.createElement)(Ke, {
                                onClose: n,
                                settings: t
                            }), (0, v.createElement)($e, {
                                settings: t
                            }))
                        }))
                    },
                    Xe = (0, v.createElement)(N.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, v.createElement)(N.Path, {
                        d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
                    })),
                    Qe = (0, v.createElement)(N.SVG, {
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, v.createElement)(N.Path, {
                        d: "M13.8 5.2H3v1.5h10.8V5.2zm-3.6 12v1.5H21v-1.5H10.2zm7.2-6H6.6v1.5h10.8v-1.5z"
                    })),
                    et = (0, v.createElement)(N.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, v.createElement)(N.Path, {
                        d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
                    })),
                    tt = (0, v.forwardRef)((function(e, t) {
                        const n = (0, S.useSelect)((e => e("isolated/editor").hasEditorRedo()), []),
                            {
                                redo: r
                            } = (0, S.useDispatch)("isolated/editor");
                        return (0, v.createElement)(w.Button, _({}, e, {
                            ref: t,
                            icon: et,
                            label: (0, B.__)("Redo"),
                            shortcut: L.displayShortcut.primaryShift("z"),
                            "aria-disabled": !n,
                            onClick: n ? r : void 0,
                            className: "editor-history__redo"
                        }))
                    })),
                    nt = (0, v.createElement)(N.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, v.createElement)(N.Path, {
                        d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
                    })),
                    rt = (0, v.forwardRef)((function(e, t) {
                        const n = (0, S.useSelect)((e => e("isolated/editor").hasEditorUndo()), []),
                            {
                                undo: r
                            } = (0, S.useDispatch)("isolated/editor");
                        return (0, v.createElement)(w.Button, _({}, e, {
                            ref: t,
                            icon: nt,
                            label: (0, B.__)("Undo"),
                            shortcut: L.displayShortcut.primary("z"),
                            "aria-disabled": !n,
                            onClick: n ? r : void 0,
                            className: "editor-history__undo"
                        }))
                    })),
                    ot = (0, v.forwardRef)((function(e, t) {
                        let {
                            isDisabled: n,
                            ...r
                        } = e;
                        const o = (0, S.useSelect)((e => !!e(R.store).getBlockCount()), []) && !n;
                        return (0, v.createElement)(w.Dropdown, {
                            contentClassName: "block-editor-block-navigation__popover",
                            position: "bottom right",
                            renderToggle: e => {
                                let {
                                    isOpen: n,
                                    onToggle: i
                                } = e;
                                return (0, v.createElement)(w.Button, _({}, r, {
                                    ref: t,
                                    icon: Qe,
                                    "aria-expanded": n,
                                    "aria-haspopup": "true",
                                    onClick: o ? i : void 0
                                        /* translators: button label text should, if possible, be under 16 characters. */
                                        ,
                                    label: (0, B.__)("List view"),
                                    className: "block-editor-block-navigation",
                                    "aria-disabled": !o
                                }))
                            },
                            renderContent: () => (0, v.createElement)("div", {
                                className: "block-editor-block-navigation__container"
                            }, (0, v.createElement)("p", {
                                className: "block-editor-block-navigation__label"
                            }, (0, B.__)("List view")), (0, v.createElement)(R.__experimentalListView, null))
                        })
                    }));
                const it = e => {
                    e.preventDefault()
                };
                var st = function(e) {
                        var t, n, r;
                        const o = (0, v.useRef)(),
                            {
                                setIsInserterOpened: i,
                                setIsListViewOpened: s
                            } = (0, S.useDispatch)("isolated/editor"),
                            l = (0, A.useViewportMatch)("medium", "<"),
                            {
                                hasFixedToolbar: a,
                                isInserterEnabled: c,
                                isTextModeEnabled: u,
                                showIconLabels: d,
                                previewDeviceType: p,
                                isInserterOpened: f,
                                isListViewOpen: m,
                                listViewShortcut: g
                            } = (0, S.useSelect)((e => {
                                const {
                                    hasInserterItems: t,
                                    getBlockRootClientId: n,
                                    getBlockSelectionEnd: r
                                } = e("core/block-editor"), {
                                    isListViewOpened: o
                                } = e("isolated/editor"), {
                                    getShortcutRepresentation: i
                                } = e(T.store);
                                return {
                                    hasFixedToolbar: e("isolated/editor").isFeatureActive("fixedToolbar"),
                                    isInserterEnabled: "visual" === e("isolated/editor").getEditorMode() && e("core/editor").getEditorSettings().richEditingEnabled && t(n(r())),
                                    isListViewOpen: o(),
                                    isTextModeEnabled: "text" === e("isolated/editor").getEditorMode(),
                                    previewDeviceType: "Desktop",
                                    isInserterOpened: e("isolated/editor").isInserterOpened(),
                                    showIconLabels: !1,
                                    listViewShortcut: i("core/edit-post/toggle-list-view")
                                }
                            }), []),
                            h = (0, A.useViewportMatch)("medium"),
                            y = (0, A.useViewportMatch)("wide"),
                            {
                                inserter: E,
                                toc: _,
                                navigation: C,
                                undo: k,
                                selectorTool: O
                            } = e.settings.iso.toolbar,
                            x = (null === (t = e.settings) || void 0 === t || null === (n = t.iso) || void 0 === n || null === (r = n.sidebar) || void 0 === r ? void 0 : r.inserter) || !1,
                            I = !h || "Desktop" !== p || a ?
                            /* translators: accessibility text for the editor toolbar when Top Toolbar is on */
                            (0, B.__)("Document and block tools") :
                            /* translators: accessibility text for the editor toolbar when Top Toolbar is off */
                            (0, B.__)("Document tools"),
                            P = (0, v.useCallback)((() => {
                                i(!f)
                            }), [f, i]),
                            F = (0, v.useCallback)((() => s(!m)), [s, m]);
                        return (0, v.createElement)(R.NavigableToolbar, {
                            className: "edit-post-header-toolbar",
                            "aria-label": I
                        }, (E || k || C || _ || O) && (0, v.createElement)("div", {
                            className: "edit-post-header-toolbar__left"
                        }, E && (0, v.createElement)(w.ToolbarItem, {
                            ref: o,
                            as: w.Button,
                            className: "edit-post-header-toolbar__inserter-toggle",
                            isPressed: f,
                            onMouseDown: it,
                            onClick: P,
                            disabled: !c,
                            isPrimary: !0,
                            icon: Xe
                                /* translators: button label text should, if possible, be under 16
                                    characters. */
                                ,
                            label: (0, B._x)("Toggle block inserter", "Generic label for block inserter button"),
                            showTooltip: !d
                        }), f && !x && (0, v.createElement)(w.Popover, {
                            position: "bottom right",
                            onClose: () => i(!1),
                            anchor: o.current
                        }, (0, v.createElement)(R.__experimentalLibrary, {
                            showMostUsedBlocks: !1,
                            showInserterHelpPanel: !0,
                            onSelect: () => {
                                l && i(!1)
                            }
                        })), O && (0, v.createElement)(R.ToolSelector, null), k && (0, v.createElement)(w.ToolbarItem, {
                            as: rt,
                            showTooltip: !d,
                            variant: d ? "tertiary" : void 0
                        }), k && (0, v.createElement)(w.ToolbarItem, {
                            as: tt,
                            showTooltip: !d,
                            variant: d ? "tertiary" : void 0
                        }), C && !x && (0, v.createElement)(w.ToolbarItem, {
                            as: ot,
                            isDisabled: u
                        }), C && x && (0, v.createElement)(w.ToolbarItem, {
                            as: w.Button,
                            className: "edit-post-header-toolbar__list-view-toggle",
                            icon: Qe,
                            disabled: u,
                            isPressed: m
                                /* translators: button label text should, if possible, be under 16 characters. */
                                ,
                            label: (0, B.__)("List View"),
                            onClick: F,
                            shortcut: g,
                            showTooltip: !d
                        }), _ && (0, v.createElement)(w.ToolbarItem, {
                            as: b.TableOfContents,
                            hasOutlineItemsDisabled: u,
                            repositionDropdown: d && !y,
                            showTooltip: !d,
                            variant: d ? "tertiary" : void 0
                        })))
                    },
                    lt = function(e) {
                        let {
                            button: t,
                            onToggle: n
                        } = e;
                        return (0, v.createElement)(w.Popover, {
                            position: "bottom left",
                            className: "iso-inspector",
                            anchor: null == t ? void 0 : t.current,
                            onFocusOutside: function(e) {
                                null !== e.target.closest(".block-editor-block-inspector") || e.target.classList.contains("iso-inspector") || (n(!1), e.preventDefault(), e.stopPropagation())
                            }
                        }, (0, v.createElement)(ve.Slot, {
                            scope: "isolated/editor"
                        }))
                    };
                const {
                    Fill: at,
                    Slot: ct
                } = (0, w.createSlotFill)("IsolatedToolbar"), ut = e => {
                    let {
                        children: t
                    } = e;
                    return (0, v.createElement)(at, null, t)
                };
                ut.Slot = function(e) {
                    return (0, v.createElement)(ct, null, (e => e))
                };
                var dt = ut,
                    pt = e => {
                        var t, n, r;
                        const o = (0, v.useRef)(null),
                            {
                                settings: i,
                                editorMode: s,
                                renderMoreMenu: l
                            } = e,
                            a = (0, A.useViewportMatch)("huge", ">="),
                            {
                                inspector: c
                            } = (null === (t = i.iso) || void 0 === t ? void 0 : t.toolbar) || {},
                            {
                                moreMenu: u
                            } = i.iso || {},
                            d = (null == i || null === (n = i.iso) || void 0 === n || null === (r = n.sidebar) || void 0 === r ? void 0 : r.inspector) || !1,
                            {
                                openGeneralSidebar: p,
                                closeGeneralSidebar: f
                            } = (0, S.useDispatch)("isolated/editor"),
                            {
                                setIsInserterOpened: m
                            } = (0, S.useDispatch)("isolated/editor"),
                            {
                                isEditorSidebarOpened: g,
                                isBlockSelected: h,
                                hasBlockSelected: y,
                                isInserterOpened: b,
                                isEditing: E
                            } = (0, S.useSelect)((e => ({
                                isEditing: e("isolated/editor"),
                                isEditorSidebarOpened: e("isolated/editor").isEditorSidebarOpened(),
                                isBlockSelected: !!e("core/block-editor").getBlockSelectionStart(),
                                hasBlockSelected: !!e("core/block-editor").getBlockSelectionStart(),
                                isInserterOpened: e("isolated/editor").isInserterOpened()
                            })), []);

                        function _(e) {
                            e ? p(y ? "edit-post/block" : "edit-post/document") : f()
                        }
                        return (0, v.useEffect)((() => {
                            d || f()
                        }), []), (0, v.useEffect)((() => {
                            d || E || h || !g || f()
                        }), [E]), (0, v.useEffect)((() => {
                            g && !a && m(!1)
                        }), [g, a]), (0, v.useEffect)((() => {
                            !b || a && d || f()
                        }), [b, a]), (0, v.createElement)("div", {
                            className: "edit-post-editor-regions__header",
                            role: "region",
                            tabIndex: -1
                        }, (0, v.createElement)("div", {
                            className: "edit-post-header"
                        }, (0, v.createElement)("div", {
                            className: "edit-post-header__toolbar"
                        }, (0, v.createElement)(st, {
                            settings: i
                        })), (0, v.createElement)("div", {
                            className: "edit-post-header__settings",
                            ref: o
                        }, (0, v.createElement)(dt.Slot, null), c && (0, v.createElement)(w.Button, {
                            icon: Ee,
                            label: (0, B.__)("Settings"),
                            onClick: () => _(!g),
                            isPressed: g,
                            "aria-expanded": g,
                            disabled: "text" === s
                        }), g && !d && (0, v.createElement)(lt, {
                            button: o,
                            onToggle: _
                        }), u && (0, v.createElement)(Ze, {
                            settings: i,
                            onClick: () => f(),
                            renderMoreMenu: l
                        }))))
                    },
                    ft = (0, v.createElement)(N.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, v.createElement)(N.Path, {
                        d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
                    }));

                function mt() {
                    const {
                        setIsInserterOpened: e
                    } = (0, S.useDispatch)("isolated/editor"), t = (0, A.useViewportMatch)("medium", "<"), n = t ? "div" : w.VisuallyHidden, [r, o] = (0, A.__experimentalUseDialog)({
                        onClose: () => e(!1),
                        focusOnMount: null
                    });
                    return (0, v.createElement)("div", _({
                        ref: r
                    }, o, {
                        className: "edit-post-editor__inserter-panel"
                    }), (0, v.createElement)(n, {
                        className: "edit-post-editor__inserter-panel-header"
                    }, (0, v.createElement)(w.Button, {
                        icon: ft,
                        onClick: () => e(!1)
                    })), (0, v.createElement)("div", {
                        className: "edit-post-editor__inserter-panel-content"
                    }, (0, v.createElement)(R.__experimentalLibrary, {
                        showMostUsedBlocks: !1,
                        showInserterHelpPanel: !0,
                        shouldFocusBlock: t
                    })))
                }

                function gt() {
                    const {
                        setIsListViewOpened: e
                    } = (0, S.useDispatch)("isolated/editor"), {
                        clearSelectedBlock: t,
                        selectBlock: n
                    } = (0, S.useDispatch)(R.store), r = (0, A.useFocusOnMount)("firstElement"), o = (0, A.useFocusReturn)(), i = `edit-post-editor__list-view-panel-label-${(0,A.useInstanceId)(gt)}`;
                    return (0, v.createElement)("div", {
                        "aria-labelledby": i,
                        className: "edit-post-editor__list-view-panel",
                        onKeyDown: function(t) {
                            t.keyCode !== L.ESCAPE || t.defaultPrevented || (t.preventDefault(), e(!1))
                        }
                    }, (0, v.createElement)("div", {
                        className: "edit-post-editor__list-view-panel-header"
                    }, (0, v.createElement)("strong", {
                        id: i
                    }, (0, B.__)("List view")), (0, v.createElement)(w.Button, {
                        icon: j,
                        label: (0, B.__)("Close list view sidebar"),
                        onClick: () => e(!1)
                    })), (0, v.createElement)("div", {
                        className: "edit-post-editor__list-view-panel-content",
                        ref: (0, A.useMergeRefs)([o, r])
                    }, (0, v.createElement)(R.__experimentalListView, {
                        onSelect: async function(e) {
                            await t(), n(e, -1)
                        },
                        showNestedBlocks: !0,
                        __experimentalPersistentListViewFeatures: !0
                    })))
                }
                var ht = e => {
                    let {
                        editorMode: t
                    } = e;
                    const n = (0, A.useViewportMatch)("medium", "<"),
                        {
                            showBlockBreadcrumbs: r,
                            documentLabel: o
                        } = (0, S.useSelect)((e => {
                            const {
                                getPostTypeLabel: t
                            } = e(b.store), n = t(), {
                                isFeatureActive: r
                            } = e("isolated/editor");
                            return {
                                hasFixedToolbar: r("fixedToolbar"),
                                showBlockBreadcrumbs: !1,
                                // translators: Default label for the Document in the Block Breadcrumb.
                                documentLabel: n || (0, B._x)("Document", "noun")
                            }
                        }), []);
                    return (0, v.createElement)("div", {
                        className: "edit-post-layout__footer"
                    }, r && !n && "visual" === t && (0, v.createElement)(R.BlockBreadcrumb, {
                        rootLabelText: o
                    }), (0, v.createElement)(Le.Slot, null))
                };
                const {
                    Fill: vt,
                    Slot: yt
                } = (0, w.createSlotFill)("IsolatedFooter"), bt = e => {
                    let {
                        children: t
                    } = e;
                    return (0, v.createElement)(vt, null, t)
                };
                bt.Slot = function() {
                    return (0, v.createElement)(yt, null, (e => e))
                };
                var Et = bt;
                const _t = {
                    secondarySidebar: (0, B.__)("Block library"),
                    /* translators: accessibility text for the editor top bar landmark region. */
                    header: (0, B.__)("Editor top bar"),
                    /* translators: accessibility text for the editor content landmark region. */
                    body: (0, B.__)("Editor content"),
                    /* translators: accessibility text for the editor settings landmark region. */
                    sidebar: (0, B.__)("Editor settings"),
                    /* translators: accessibility text for the editor publish landmark region. */
                    actions: (0, B.__)("Editor publish"),
                    /* translators: accessibility text for the editor footer landmark region. */
                    footer: (0, B.__)("Editor footer")
                };
                var wt = (0, S.withDispatch)((e => {
                        const {
                            redo: t,
                            undo: n
                        } = e("isolated/editor");
                        return {
                            redo: t,
                            undo: n
                        }
                    }))((function(e) {
                        var t, n, r, o, i, s, l, a, c, u;
                        const {
                            isEditing: d,
                            editorMode: p,
                            children: f,
                            undo: m,
                            redo: g,
                            settings: h,
                            renderMoreMenu: y
                        } = e, E = (0, A.useViewportMatch)("medium", "<"), _ = (null == h || null === (t = h.iso) || void 0 === t || null === (n = t.sidebar) || void 0 === n ? void 0 : n.inspector) || !1, C = (null == h || null === (r = h.iso) || void 0 === r || null === (o = r.sidebar) || void 0 === o ? void 0 : o.inserter) || !1, k = null === (i = null == h || null === (s = h.iso) || void 0 === s ? void 0 : s.header) || void 0 === i || i, x = (null == h || null === (l = h.iso) || void 0 === l ? void 0 : l.footer) || !1, {
                            sidebarIsOpened: I,
                            hasFixedToolbar: P,
                            isInserterOpened: F,
                            isListViewOpened: M,
                            showIconLabels: B,
                            isFullscreenActive: N,
                            previousShortcut: D,
                            nextShortcut: U
                        } = (0, S.useSelect)((e => {
                            const {
                                isFeatureActive: t,
                                isInserterOpened: n,
                                isListViewOpened: r,
                                isOptionActive: o
                            } = e("isolated/editor");
                            return {
                                sidebarIsOpened: !!e(oe).getActiveComplementaryArea("isolated/editor"),
                                hasFixedToolbar: t("fixedToolbar"),
                                isInserterOpened: n(),
                                isListViewOpened: r(),
                                isFullscreenActive: o("fullscreenMode"),
                                showIconLabels: t("showIconLabels"),
                                previousShortcut: e(T.store).getAllShortcutKeyCombinations("core/edit-post/previous-region"),
                                nextShortcut: e(T.store).getAllShortcutKeyCombinations("core/edit-post/next-region")
                            }
                        }), []), z = O()("edit-post-layout", "is-mode-" + p, {
                            "is-sidebar-opened": I,
                            "has-fixed-toolbar": P,
                            "show-icon-labels": B
                        });
                        (0, v.useEffect)((() => {
                            const e = document.querySelector("html");
                            return N ? e.classList.add("is-fullscreen-mode") : e.classList.remove("is-fullscreen-mode"), () => {
                                e && e.classList.remove("is-fullscreen-mode")
                            }
                        }), [N]);
                        const V = k ? (0, v.createElement)(pt, {
                            editorMode: p,
                            settings: h,
                            renderMoreMenu: y
                        }) : null;
                        return (0, v.createElement)(v.Fragment, null, (0, v.createElement)(Oe, {
                            documentInspector: null !== (a = null == h || null === (c = h.iso) || void 0 === c || null === (u = c.toolbar) || void 0 === u ? void 0 : u.documentInspector) && void 0 !== a && a
                        }), (0, v.createElement)(ye, {
                            isActive: N
                        }), (0, v.createElement)(be, {
                            className: z,
                            labels: _t,
                            header: V,
                            secondarySidebar: C ? "visual" === p && F ? (0, v.createElement)(mt, null) : "visual" === p && M ? (0, v.createElement)(gt, null) : null : null,
                            sidebar: (!E || I) && _ && (0, v.createElement)(ve.Slot, {
                                scope: "isolated/editor"
                            }),
                            notices: (0, v.createElement)(b.EditorSnackbars, null),
                            content: (0, v.createElement)(v.Fragment, null, (0, v.createElement)(b.EditorNotices, null), d && (0, v.createElement)(v.Fragment, null, (0, v.createElement)(R.BlockEditorKeyboardShortcuts, null), (0, v.createElement)(R.BlockEditorKeyboardShortcuts.Register, null)), (0, v.createElement)(w.KeyboardShortcuts, {
                                bindGlobal: !1,
                                shortcuts: {
                                    [L.rawShortcut.primary("z")]: m,
                                    [L.rawShortcut.primaryShift("z")]: g
                                }
                            }, "visual" === p && (0, v.createElement)(De, {
                                styles: {}
                            }), "text" === p && (0, v.createElement)(je, null)), f),
                            footer: x && (0, v.createElement)(ht, {
                                editorMode: p
                            }),
                            actions: (0, v.createElement)(Et.Slot, null),
                            shortcuts: {
                                previous: D,
                                next: U
                            }
                        }))
                    })),
                    Ct = (0, A.compose)([(0, S.withSelect)(((e, t) => {
                        var n;
                        const {
                            getBlocks: r,
                            getEditorSelection: o,
                            getEditorMode: i,
                            isEditing: s
                        } = e("isolated/editor");
                        return {
                            blocks: null !== (n = t.blocks) && void 0 !== n ? n : r(),
                            selection: o(),
                            isEditing: s(),
                            editorMode: i()
                        }
                    })), (0, S.withDispatch)(((e, t) => {
                        const {
                            updateBlocksWithUndo: n,
                            updateBlocksWithoutUndo: r
                        } = e("isolated/editor"), {
                            onInput: o,
                            onChange: i
                        } = t;
                        return {
                            onChange: function() {
                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                null == i || i(...t), n(...t)
                            },
                            onInput: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                null == o || o(...t), r(...t)
                            }
                        }
                    }))])((function(e) {
                        const {
                            blocks: t,
                            onInput: n,
                            onChange: r,
                            selection: o,
                            isEditing: i,
                            editorMode: s
                        } = e, {
                            children: l,
                            settings: a,
                            renderMoreMenu: c,
                            onLoad: u
                        } = e;
                        return (0, v.useEffect)((() => {
                            (async () => {
                                const e = await async function(e, t) {
                                    var n;
                                    return (!(n = t) || "object" != typeof n && "function" != typeof n || "function" != typeof n.then ? new Promise((e => {
                                        e(t ? t(M.parse, M.rawHandler) : [])
                                    })) : t).then((t => function(e, t, n, r) {
                                        if (void 0 === e) return r;
                                        if (r && r.length > 0) return r;
                                        if (t) {
                                            const n = ((e, t) => e && e.find((e => e.name === t)))(e, t);
                                            if (n) return (0, M.parse)(n.content)
                                        }
                                        return n ? (0, M.synchronizeBlocksWithTemplate)(r, n) : []
                                    }(e.iso.patterns, e.iso.currentPattern, e.editor.template, t)))
                                }(a, u);
                                e.length > 0 && (!t || 0 === t.length) && n(e, {
                                    isInitialContent: !0
                                })
                            })()
                        }), []), (0, v.createElement)(R.BlockEditorProvider, {
                            value: t || [],
                            onInput: n,
                            onChange: r,
                            useSubRegistry: !1,
                            selection: o,
                            settings: a.editor
                        }, (0, v.createElement)(wt, {
                            isEditing: i,
                            editorMode: s,
                            settings: a,
                            renderMoreMenu: c
                        }, l), (0, v.createElement)(w.Popover.Slot, null))
                    }));

                function St(e, t) {
                    const n = ["core/block-editor", "core/editor"];
                    return {
                        dispatch: t => null === St.targetDispatch || -1 === n.indexOf(t) ? e.dispatch(t) : St.targetDispatch(t),
                        select: t => null === St.targetSelect || -1 === n.indexOf(t) ? e.select(t) : St.targetSelect(t)
                    }
                }
                St.targetSelect = null, St.targetDispatch = null, St.setEditor = function(e, t) {
                    this.targetSelect = e, this.targetDispatch = t
                }, St.resetEditor = function() {
                    this.targetSelect = null, this.targetDispatch = null
                };
                var Tt = St,
                    kt = (0, A.compose)([(0, S.withSelect)((e => {
                        const {
                            isEditing: t
                        } = e("isolated/editor");
                        return {
                            isEditing: t()
                        }
                    })), (0, S.withDispatch)(((e, t, n) => {
                        let {
                            select: r
                        } = n;
                        return {
                            hotSwap: t => {
                                Tt.resetEditor(), t && Tt.setEditor(r, e)
                            }
                        }
                    }))])((function(e) {
                        let {
                            isEditing: t,
                            hotSwap: n
                        } = e;
                        return (0, v.useEffect)((() => {
                            n(t)
                        }), [t]), null
                    })),
                    Ot = (0, A.compose)([(0, S.withSelect)((e => {
                        const {
                            isEditorReady: t,
                            getEditorMode: n,
                            isEditing: r,
                            isFeatureActive: o,
                            isOptionActive: i
                        } = e("isolated/editor");
                        return {
                            isEditorReady: t(),
                            editorMode: n(),
                            isEditing: r(),
                            hasFixedToolbar: o("fixedToolbar"),
                            isPreview: i("preview")
                        }
                    })), (0, S.withDispatch)((e => {
                        const {
                            setEditing: t
                        } = e("isolated/editor");
                        return {
                            setEditing: t
                        }
                    }))])((function(e) {
                        const {
                            children: t,
                            settings: n,
                            className: r,
                            onError: o,
                            renderMoreMenu: i,
                            onLoad: s,
                            onInput: l,
                            onChange: a,
                            blocks: c
                        } = e, {
                            isEditorReady: u,
                            editorMode: d,
                            isEditing: p,
                            setEditing: f,
                            hasFixedToolbar: m,
                            isPreview: g
                        } = e, [h, {
                            width: y
                        }] = (0, A.useResizeObserver)(), E = O()(r, {
                            "iso-editor": !0,
                            "is-large": !!y && y >= 720,
                            "is-medium": !y || y >= 480 && y < 720,
                            "is-small": !!y && y < 480,
                            "iso-editor__loading": !u,
                            "iso-editor__selected": p,
                            "block-editor": !0,
                            "edit-post-layout": !0,
                            "has-fixed-toolbar": m,
                            ["is-mode-" + d]: !0,
                            "is-preview-mode": g
                        });
                        return (0, v.createElement)("div", {
                            className: E
                        }, (0, v.createElement)(b.ErrorBoundary, {
                            onError: o
                        }, (0, v.createElement)(kt, null), h, (0, v.createElement)(F, {
                            onOutside: () => f(!1),
                            onFocus: () => !p && f(!0)
                        }, (0, v.createElement)(Ct, {
                            blocks: c,
                            settings: n,
                            renderMoreMenu: i,
                            onLoad: s,
                            onInput: l,
                            onChange: a
                        }, t))))
                    })),
                    At = n(90),
                    xt = window.wp.isShallowEqual,
                    It = n.n(xt);
                const Pt = {
                    editCount: 0,
                    selection: null,
                    blocks: null
                };

                function Ft(e, t) {
                    return e.find((e => e.clientId === t.clientId))
                }

                function Mt(e, t) {
                    const {
                        type: n,
                        selection: r
                    } = e;
                    if ("UPDATE_BLOCKS_WITHOUT_UNDO" === n) return !1;
                    if (!r) return !0;
                    if (It()(r, t.selection)) {
                        const n = Ft(t.blocks, r.selectionStart),
                            o = Ft(e.blocks, r.selectionStart);
                        if (n && o && It()(n.attributes, o.attributes)) return !1
                    }
                    return !0
                }
                var Rt = (0, At.ZP)((function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pt,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "UPDATE_BLOCKS_WITHOUT_UNDO":
                        case "UPDATE_BLOCKS_WITH_UNDO":
                            return {
                                ...e, editCount: Mt(t, e) ? e.editCount + 1 : e.editCount, blocks: t.blocks, selection: t.selection
                            }
                    }
                    return e
                }), {
                    groupBy: (e, t, n) => t.editCount
                });
                const Lt = {
                    * undo() {
                        return yield At.zF.undo()
                    },
                    * redo() {
                        return yield At.zF.redo()
                    },
                    * updateBlocksWithUndo(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return yield {
                            type: "UPDATE_BLOCKS_WITH_UNDO",
                            blocks: e,
                            ...t
                        }
                    },
                    * updateBlocksWithoutUndo(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return yield {
                            type: "UPDATE_BLOCKS_WITHOUT_UNDO",
                            blocks: e,
                            ...t
                        }
                    }
                };
                var Bt = Lt;
                const Nt = {
                    editorMode: "visual",
                    isInserterOpened: !1,
                    isEditing: !1,
                    isListViewOpened: !1,
                    isReady: !1,
                    patterns: [],
                    currentPattern: null,
                    gutenbergTemplate: null,
                    ignoredContent: [],
                    deviceType: "Desktop",
                    canvasStyles: null,
                    isIframePreview: !1,
                    settings: {
                        preferencesKey: null,
                        persistenceKey: null,
                        blocks: {
                            allowBlocks: [],
                            disallowBlocks: []
                        },
                        disallowEmbed: [],
                        customStores: [],
                        toolbar: {
                            inserter: !0,
                            toc: !1,
                            undo: !0,
                            inspector: !0,
                            navigation: !1,
                            documentInspector: !1,
                            selectorTool: !1
                        },
                        sidebar: {
                            inspector: !1,
                            inserter: !1
                        },
                        moreMenu: {
                            editor: !1,
                            fullscreen: !1,
                            preview: !1,
                            topToolbar: !1
                        },
                        linkMenu: [],
                        currentPattern: null,
                        patterns: [],
                        defaultPreferences: {},
                        allowApi: !1,
                        disableCanvasAnimations: !1
                    }
                };

                function Dt(e, t, n) {
                    const r = [(0, M.serialize)((0, M.createBlock)("core/paragraph")), (0, M.serialize)((0, M.createBlock)("core/paragraph", {
                            className: ""
                        }))],
                        o = ((e, t) => e && e.find((e => e.name === t)))(e, t);
                    return o && r.push((0, M.serialize)((0, M.parse)(o.content))), n && r.push((0, M.serialize)((0, M.synchronizeBlocksWithTemplate)([], n))), r
                }
                var Ut = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nt,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "SETUP_EDITOR": {
                            const {
                                currentPattern: n,
                                patterns: r
                            } = t.settings.iso;
                            return {
                                ...e,
                                patterns: r,
                                currentPattern: n,
                                ignoredContent: Dt(r, n, t.settings.editor.template),
                                gutenbergTemplate: t.settings.editor.template,
                                settings: {
                                    ...e.settings,
                                    ...t.settings.iso
                                }
                            }
                        }
                        case "SET_CURRENT_PATTERN":
                            return {
                                ...e, currentPattern: t.pattern, ignoredContent: Dt(e.patterns, t.pattern, e.gutenbergTemplate)
                            };
                        case "SET_EDITOR_MODE":
                            return {
                                ...e, editorMode: t.editorMode
                            };
                        case "SET_INSERTER_OPEN":
                            return {
                                ...e, isInserterOpened: t.isOpen, isInspectorOpened: !1, isListViewOpened: !1
                            };
                        case "SET_INSPECTOR_OPEN":
                            return {
                                ...e, isInspectorOpened: t.isOpen, isListViewOpened: !1
                            };
                        case "SET_LISTVIEW_OPEN":
                            return {
                                ...e, isInserterOpened: !1, isInspectorOpened: !1, isListViewOpened: t.isOpen
                            };
                        case "SET_EDITING":
                            return {
                                ...e, isEditing: t.isEditing
                            };
                        case "SET_EDITOR_READY":
                            return {
                                ...e, isReady: t.isReady
                            };
                        case "SET_DEVICE_TYPE":
                            return {
                                ...e, deviceType: t.deviceType
                            };
                        case "SET_CANVAS_STYLES":
                            return {
                                ...e, canvasStyles: t.canvasStyles
                            };
                        case "SET_IFRAME_PREVIEW":
                            return {
                                ...e, isIframePreview: t.isIframePreview
                            }
                    }
                    return e
                };
                const zt = {
                    setReady: e => ({
                        type: "SET_EDITOR_READY",
                        isReady: e
                    }),
                    setEditorMode: e => ({
                        type: "SET_EDITOR_MODE",
                        editorMode: e
                    }),
                    setupEditor: e => ({
                        type: "SETUP_EDITOR",
                        settings: e
                    }),
                    setCurrentPattern: e => ({
                        type: "SET_CURRENT_PATTERN",
                        pattern: e
                    }),
                    setIsInserterOpened: e => ({
                        type: "SET_INSERTER_OPEN",
                        isOpen: e
                    }),
                    setDeviceType: e => ({
                        type: "SET_DEVICE_TYPE",
                        deviceType: e
                    }),
                    setCanvasStyles: e => ({
                        type: "SET_CANVAS_STYLES",
                        canvasStyles: e
                    }),
                    setIsIframePreview: e => ({
                        type: "SET_IFRAME_PREVIEW",
                        isIframePreview: e
                    }),
                    setEditing: e => ({
                        type: "SET_EDITING",
                        isEditing: e
                    }),
                    * openGeneralSidebar(e) {
                        yield S.controls.dispatch(oe, "enableComplementaryArea", "isolated/editor", e)
                    },
                    * closeGeneralSidebar() {
                        yield S.controls.dispatch(oe, "disableComplementaryArea", "isolated/editor")
                    },
                    setIsListViewOpened: e => ({
                        type: "SET_LISTVIEW_OPEN",
                        isOpen: e
                    })
                };
                var Vt = zt,
                    jt = (e, t) => "TOGGLE_FEATURE" === t.type ? {
                        ...e,
                        [t.feature]: !e[t.feature] || !e[t.feature]
                    } : e,
                    Ht = {
                        toggleFeature: e => ({
                            type: "TOGGLE_FEATURE",
                            feature: e
                        })
                    };
                const Wt = {};
                var Gt = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wt,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return "TOGGLE_OPTION" === t.type ? {
                            ...e,
                            [t.option]: !e[t.option] || !e[t.option]
                        } : e
                    },
                    Kt = {
                        toggleOption: e => ({
                            type: "TOGGLE_OPTION",
                            option: e
                        })
                    };

                function Yt(e) {
                    return e.editor.editorMode
                }

                function $t(e) {
                    return e.editor.settings
                }

                function Jt(e) {
                    return e.editor.isReady
                }

                function qt(e) {
                    return e.editor.currentPattern
                }

                function Zt(e) {
                    const {
                        currentPattern: t,
                        patterns: n
                    } = e.editor;
                    if (t && n)
                        for (let e = 0; e < n.length; e++)
                            if (n[e].name === t) return n[e];
                    return null
                }

                function Xt(e) {
                    return e.editor.ignoredContent
                }

                function Qt(e, t) {
                    const {
                        patterns: n = []
                    } = e.editor;
                    let r = n.find((e => e.name === t));
                    return r || (r = n.find((e => e.name.replace("p2/", "") === t)), r || null)
                }

                function en(e) {
                    return e.editor.isInserterOpened
                }
                const tn = (0, S.createRegistrySelector)((e => () => {
                    const t = e(oe).getActiveComplementaryArea("isolated/editor");
                    return (0, x.includes)(["edit-post/document", "edit-post/block"], t)
                }));

                function nn(e) {
                    return e.editor.isEditing
                }

                function rn(e) {
                    return e.editor.patterns
                }

                function on(e) {
                    return e.editor.isListViewOpened
                }

                function sn(e) {
                    return e.editor.deviceType
                }

                function ln(e) {
                    return e.editor.canvasStyles
                }

                function an(e) {
                    return e.editor.isIframePreview || ["Tablet", "Mobile"].includes(e.editor.deviceType)
                }

                function cn(e) {
                    return e.blocks.present.blocks
                }

                function un(e) {
                    return e.blocks.present.selection
                }

                function dn(e) {
                    var t;
                    return "visual" === Yt(e) && (null !== (t = e.collab) && void 0 !== t && t.undoManager ? !!e.collab.undoManager.undoStack.length : e.blocks.past.length > 0)
                }

                function pn(e) {
                    var t;
                    return "visual" === Yt(e) && (null !== (t = e.collab) && void 0 !== t && t.undoManager ? !!e.collab.undoManager.redoStack.length : e.blocks.future.length > 0)
                }

                function fn(e) {
                    return e.blocks.present.editCount
                }

                function mn(e, t) {
                    return !!e.preferences[t] && e.preferences[t]
                }

                function gn(e, t) {
                    return !!e.options[t] && e.options[t]
                }

                function hn(e) {
                    return {
                        type: "SET_COLLAB_YJS_DOC",
                        doc: e
                    }
                }

                function vn(e) {
                    return {
                        type: "SET_COLLAB_UNDO_MANAGER",
                        undoManager: e
                    }
                }

                function yn(e) {
                    return e.collab.yDoc
                }

                function bn(e) {
                    return e.collab.undoManager
                }

                function En(e) {
                    return {
                        type: "SET_AVAILABLE_COLLAB_PEERS",
                        peers: e
                    }
                }

                function wn(e, t) {
                    return {
                        type: "SET_COLLAB_PEER_SELECTION",
                        peerId: e,
                        selection: t
                    }
                }

                function Cn(e) {
                    return e.collabPeers
                }

                function Sn(e) {
                    return Object.keys(e.collabPeers).length > 0
                }
                const Tn = n(227)("iso-editor:collab:undo"),
                    kn = e => {
                        const {
                            clientId: t,
                            attributeKey: n
                        } = e.select("core/block-editor").getSelectionStart();
                        return "string" == typeof n ? {
                            clientId: t,
                            attributeKey: n
                        } : void 0
                    },
                    On = (0, S.createRegistryControl)((e => t => {
                        const n = e.select("isolated/editor").getYDoc();
                        return n && !t.isTriggeredByYDoc && n.applyLocalChangesToYDoc({
                            blocks: t.blocks
                        }, {
                            isInitialContent: t.isInitialContent,
                            richTextHint: kn(e)
                        }), t
                    }));
                var An = {
                        UPDATE_BLOCKS_WITH_UNDO: On,
                        UPDATE_BLOCKS_WITHOUT_UNDO: On,
                        [At.zF.undo().type]: (0, S.createRegistryControl)((e => t => {
                            const n = e.select("isolated/editor").getUndoManager();
                            if (!n) return Tn("Undoing from redux-undo state"), t;
                            Tn("Undoing from yjs undoManager"), Tn("undo"), n.undo()
                        })),
                        [At.zF.redo().type]: (0, S.createRegistryControl)((e => t => {
                            if (!e.select("isolated/editor").getUndoManager()) return t;
                            Tn("redo"), e.select("isolated/editor").getUndoManager().redo()
                        }))
                    },
                    xn = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case "SET_COLLAB_YJS_DOC":
                                return {
                                    ...e, yDoc: t.doc
                                };
                            case "SET_COLLAB_UNDO_MANAGER":
                                return {
                                    ...e, undoManager: t.undoManager
                                }
                        }
                        return e
                    },
                    In = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case "SET_COLLAB_PEER_SELECTION":
                                return e[t.peerId] ? {
                                    ...e,
                                    [t.peerId]: {
                                        ...e[t.peerId],
                                        ...t.selection
                                    }
                                } : e;
                            case "SET_AVAILABLE_COLLAB_PEERS":
                                return t.peers.reduce(((t, n) => {
                                    let {
                                        id: r,
                                        name: o,
                                        color: i,
                                        avatarUrl: s
                                    } = n;
                                    return t[r] = e[r] || {
                                        name: o,
                                        color: i,
                                        avatarUrl: s
                                    }, t
                                }), {})
                        }
                        return e
                    },
                    Pn = n(965),
                    Fn = n.n(Pn);
                const Mn = {
                    TOGGLE_FEATURE(e, t) {
                        const {
                            getState: n
                        } = t, {
                            preferences: r,
                            editor: o
                        } = n();
                        o.settings.preferencesKey && localStorage.setItem(o.settings.preferencesKey, JSON.stringify(r))
                    }
                };
                var Rn = Mn,
                    Ln = {
                        CONVERT_BLOCK_TO_STATIC: (0, S.createRegistryControl)((e => t => {
                            let {
                                clientId: n
                            } = t;
                            const r = e.select("core/block-editor").getBlock(n),
                                o = e.select("core").getEditedEntityRecord("postType", "wp_block", r.attributes.ref),
                                i = (0, M.parse)(o.content);
                            e.dispatch("core/block-editor").replaceBlocks(r.clientId, i)
                        })),
                        CONVERT_BLOCKS_TO_REUSABLE: (0, S.createRegistryControl)((e => async function(t) {
                            let {
                                clientIds: n
                            } = t;
                            const r = {
                                    title: (0, B.__)("Untitled Reusable Block"),
                                    content: (0, M.serialize)(e.select("core/block-editor").getBlocksByClientId(n)),
                                    status: "publish"
                                },
                                o = await e.dispatch("core").saveEntityRecord("postType", "wp_block", r),
                                i = (0, M.createBlock)("core/block", {
                                    ref: o.id
                                });
                            e.dispatch("core/block-editor").replaceBlocks(n, i), e.dispatch(reusableBlocksStore).__experimentalSetEditingReusableBlock(i.clientId, !0)
                        })),
                        DELETE_REUSABLE_BLOCK: (0, S.createRegistryControl)((e => async function(t) {
                            let {
                                id: n
                            } = t;
                            if (!e.select("core").getEditedEntityRecord("postType", "wp_block", n)) return;
                            const r = e.select("core/block-editor").getBlocks().filter((e => (0, M.isReusableBlock)(e) && e.attributes.ref === n)).map((e => e.clientId));
                            r.length && e.dispatch("core/block-editor").removeBlocks(r), await e.dispatch("core").deleteEntityRecord("postType", "wp_block", n)
                        }))
                    };

                function* Bn(e) {
                    yield function(e) {
                        return {
                            type: "CONVERT_BLOCK_TO_STATIC",
                            clientId: e
                        }
                    }(e)
                }

                function* Nn(e) {
                    yield function(e) {
                        return {
                            type: "CONVERT_BLOCKS_TO_REUSABLE",
                            clientIds: e
                        }
                    }(e)
                }

                function* Dn(e) {
                    yield function(e) {
                        return {
                            type: "DELETE_REUSABLE_BLOCK",
                            id: e
                        }
                    }(e)
                }

                function Un(e, t) {
                    return {
                        type: "SET_EDITING_REUSABLE_BLOCK",
                        clientId: e,
                        isEditing: t
                    }
                }
                var zn = (0, S.combineReducers)({
                    isEditingReusableBlock: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return "SET_EDITING_REUSABLE_BLOCK" === (null == t ? void 0 : t.type) ? {
                            ...e,
                            [t.clientId]: t.isEditing
                        } : e
                    }
                });

                function Vn(e, t) {
                    return e.isEditingReusableBlock[t]
                }
                var jn = {
                    actions: f,
                    controls: Ln,
                    reducer: zn,
                    selectors: m
                };
                const Hn = (e, t) => ({
                        type: "SET_DEFAULT_COMPLEMENTARY_AREA",
                        scope: e,
                        area: t
                    }),
                    Wn = (e, t) => n => {
                        let {
                            registry: r,
                            dispatch: o
                        } = n;
                        t && (r.select(G.store).get(e, "isComplementaryAreaVisible") || r.dispatch(G.store).set(e, "isComplementaryAreaVisible", !0), o({
                            type: "ENABLE_COMPLEMENTARY_AREA",
                            scope: e,
                            area: t
                        }))
                    },
                    Gn = e => t => {
                        let {
                            registry: n
                        } = t;
                        n.select(G.store).get(e, "isComplementaryAreaVisible") && n.dispatch(G.store).set(e, "isComplementaryAreaVisible", !1)
                    },
                    Kn = (e, t) => n => {
                        let {
                            registry: r
                        } = n;
                        if (!t) return;
                        const o = r.select(G.store).get(e, "pinnedItems");
                        !0 !== (null == o ? void 0 : o[t]) && r.dispatch(G.store).set(e, "pinnedItems", {
                            ...o,
                            [t]: !0
                        })
                    },
                    Yn = (e, t) => n => {
                        let {
                            registry: r
                        } = n;
                        if (!t) return;
                        const o = r.select(G.store).get(e, "pinnedItems");
                        r.dispatch(G.store).set(e, "pinnedItems", {
                            ...o,
                            [t]: !1
                        })
                    };

                function $n(e, t) {
                    return function(n) {
                        let {
                            registry: r
                        } = n;
                        W()("dispatch( 'core/interface' ).toggleFeature", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).toggle"
                        }), r.dispatch(G.store).toggle(e, t)
                    }
                }

                function Jn(e, t, n) {
                    return function(r) {
                        let {
                            registry: o
                        } = r;
                        W()("dispatch( 'core/interface' ).setFeatureValue", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).set"
                        }), o.dispatch(G.store).set(e, t, !!n)
                    }
                }

                function qn(e, t) {
                    return function(n) {
                        let {
                            registry: r
                        } = n;
                        W()("dispatch( 'core/interface' ).setFeatureDefaults", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).setDefaults"
                        }), r.dispatch(G.store).setDefaults(e, t)
                    }
                }
                const Zn = (0, S.createRegistrySelector)((e => (t, n) => {
                        var r;
                        const o = e(G.store).get(n, "isComplementaryAreaVisible");
                        if (void 0 !== o) return o ? null == t || null === (r = t.complementaryAreas) || void 0 === r ? void 0 : r[n] : null
                    })),
                    Xn = (0, S.createRegistrySelector)((e => (t, n, r) => {
                        var o;
                        const i = e(G.store).get(n, "pinnedItems");
                        return null === (o = null == i ? void 0 : i[r]) || void 0 === o || o
                    })),
                    Qn = (0, S.createRegistrySelector)((e => (t, n, r) => (W()("select( 'core/interface' ).isFeatureActive( scope, featureName )", {
                        since: "6.0",
                        alternative: "select( 'core/preferences' ).get( scope, featureName )"
                    }), !!e(G.store).get(n, r))));
                var er = (0, S.combineReducers)({
                        complementaryAreas: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            switch (t.type) {
                                case "SET_DEFAULT_COMPLEMENTARY_AREA": {
                                    const {
                                        scope: n,
                                        area: r
                                    } = t;
                                    return e[n] ? e : {
                                        ...e,
                                        [n]: r
                                    }
                                }
                                case "ENABLE_COMPLEMENTARY_AREA": {
                                    const {
                                        scope: n,
                                        area: r
                                    } = t;
                                    return {
                                        ...e,
                                        [n]: r
                                    }
                                }
                            }
                            return e
                        }
                    }),
                    tr = {
                        reducer: er,
                        actions: g,
                        selectors: h
                    };
                let nr = [];
                const rr = (0, A.createHigherOrderComponent)((e => (0, S.withRegistry)((t => {
                    const {
                        registry: n,
                        settings: r,
                        ...o
                    } = t, f = function(e) {
                        var t, n, r, o, i, s, l, a, c, u, d, p, f, m, g, h, v, y, b, E, _;
                        const {
                            iso: w,
                            editor: C
                        } = e;
                        return {
                            iso: {
                                preferencesKey: null !== (t = null == w ? void 0 : w.preferencesKey) && void 0 !== t ? t : null,
                                persistenceKey: null !== (n = null == w ? void 0 : w.persistenceKey) && void 0 !== n ? n : null,
                                disallowEmbed: null !== (r = null == w ? void 0 : w.disallowEmbed) && void 0 !== r ? r : [],
                                customStores: null !== (o = null == w ? void 0 : w.customStores) && void 0 !== o ? o : [],
                                blocks: {
                                    allowBlocks: null !== (i = null == w || null === (s = w.blocks) || void 0 === s ? void 0 : s.allowBlocks) && void 0 !== i ? i : [],
                                    disallowBlocks: null !== (l = null == w || null === (a = w.blocks) || void 0 === a ? void 0 : a.disallowBlocks) && void 0 !== l ? l : []
                                },
                                toolbar: {
                                    inserter: !0,
                                    inspector: !1,
                                    navigation: !1,
                                    documentInspector: !1,
                                    toc: !1,
                                    undo: !0,
                                    selectorTool: !1,
                                    ...null !== (c = null == w ? void 0 : w.toolbar) && void 0 !== c ? c : {}
                                },
                                header: null === (u = null == w ? void 0 : w.header) || void 0 === u || u,
                                sidebar: {
                                    inserter: !1,
                                    inspector: !1,
                                    ...null !== (d = null == w ? void 0 : w.sidebar) && void 0 !== d ? d : {}
                                },
                                footer: null !== (p = null == w ? void 0 : w.footer) && void 0 !== p && p,
                                moreMenu: (S = null == w ? void 0 : w.moreMenu, T = {
                                    editor: !1,
                                    fullscreen: !1,
                                    preview: !1,
                                    topToolbar: !1,
                                    ...null !== (f = null == w ? void 0 : w.moreMenu) && void 0 !== f ? f : {}
                                }, !1 !== S && T),
                                linkMenu: null !== (m = null == w ? void 0 : w.linkMenu) && void 0 !== m ? m : [],
                                defaultPreferences: {
                                    ...null !== (g = null == w ? void 0 : w.defaultPreferences) && void 0 !== g ? g : {}
                                },
                                allowApi: null !== (h = null == w ? void 0 : w.allowApi) && void 0 !== h && h,
                                disableCanvasAnimations: null !== (v = null == w ? void 0 : w.disableCanvasAnimations) && void 0 !== v && v,
                                currentPattern: null !== (y = null == w ? void 0 : w.currentPattern) && void 0 !== y ? y : null,
                                patterns: null !== (b = null == w ? void 0 : w.patterns) && void 0 !== b ? b : []
                            },
                            editor: {
                                alignWide: !0,
                                disableCustomColors: !1,
                                disableCustomFontSizes: !1,
                                disablePostFormats: !0,
                                titlePlaceholder: (0, B.__)("Add title"),
                                bodyPlaceholder: (0, B.__)("Start writing or type / to choose a block"),
                                isRTL: !1,
                                autosaveInterval: 60,
                                maxUploadFileSize: 0,
                                allowedMimeTypes: [],
                                styles: [{
                                    baseURL: "",
                                    __unstableType: "theme",
                                    css: "body { font-family: 'Noto Serif' }"
                                }],
                                imageSizes: [],
                                richEditingEnabled: !0,
                                codeEditingEnabled: !1,
                                allowedBlockTypes: !0,
                                __experimentalCanUserUseUnfilteredHTML: !1,
                                __experimentalBlockPatterns: [],
                                reusableBlocks: [],
                                fixedToolbar: !0,
                                ...C,
                                availableLegacyWidgets: {},
                                hasPermissionsToManageWidgets: !1,
                                fetchLinkSuggestions: (null !== (E = null == C ? void 0 : C.fetchLinkSuggestions) && void 0 !== E ? E : null == C ? void 0 : C.__experimentalFetchLinkSuggestions) ? null !== (_ = null == C ? void 0 : C.fetchLinkSuggestions) && void 0 !== _ ? _ : null == C ? void 0 : C.__experimentalFetchLinkSuggestions : () => []
                            }
                        };
                        var S, T
                    }(r), {
                        persistenceKey: m,
                        preferencesKey: g,
                        defaultPreferences: h,
                        customStores: y = []
                    } = f.iso || {}, [E, w] = (0, v.useState)(null);
                    return (0, v.useEffect)((() => {
                        const e = (0, S.createRegistry)({
                            "core/reusable-blocks": jn,
                            "core/interface": tr
                        }, n);
                        m && e.use(S.plugins.persistence, {
                            persistenceKey: m
                        });
                        const t = e.registerStore("isolated/editor", function(e, t) {
                                return {
                                    reducer: (0, S.combineReducers)({
                                        blocks: Rt,
                                        editor: Ut,
                                        preferences: jt,
                                        options: Gt,
                                        collab: xn,
                                        collabPeers: In
                                    }),
                                    actions: {
                                        ...Bt,
                                        ...Vt,
                                        ...Kt,
                                        ...Ht,
                                        ...c,
                                        ...d
                                    },
                                    selectors: {
                                        ...s,
                                        ...i,
                                        ...l,
                                        ...a,
                                        ...u,
                                        ...p
                                    },
                                    controls: {
                                        ...An
                                    },
                                    persist: ["preferences"],
                                    initialState: {
                                        preferences: e && localStorage.getItem(e) ? JSON.parse(localStorage.getItem(e)) : t
                                    }
                                }
                            }(g, h)),
                            r = e.registerStore("core/block-editor", {
                                ...R.storeConfig,
                                persist: ["preferences"]
                            }),
                            o = e.registerStore("core/editor", {
                                ...b.storeConfig,
                                selectors: {
                                    ...b.storeConfig.selectors,
                                    ...(f = b.storeConfig.selectors, v = e.select, {
                                        getEditedPostAttribute: (e, t) => "content" === t ? (0, M.serialize)(v("core/block-editor").getBlocks()) : f.getEditedPostAttribute(e, t),
                                        getEditedPostContent: () => (0, M.serialize)(v("core/block-editor").getBlocks())
                                    })
                                },
                                persist: ["preferences"]
                            });
                        var f, v;
                        return y.map((t => {
                                nr.push(e.registerStore(t.name, t.config))
                            })), nr.push(t), nr.push(r), nr.push(o),
                            function(e) {
                                let t = () => {
                                    throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                                };
                                const n = {
                                    getState: e.getState,
                                    dispatch: function() {
                                        return t(...arguments)
                                    }
                                };
                                t = Fn()({
                                    ...Rn
                                })(n)(e.dispatch), e.dispatch = t
                            }(t), w(e),
                            function() {
                                nr = nr.filter((e => e !== t))
                            }
                    }), [n]), E ? (0, v.createElement)(S.RegistryProvider, {
                        value: E
                    }, (0, v.createElement)(e, _({}, o, {
                        settings: f
                    }))) : null
                }))), "withRegistryProvider");
                var or = rr;

                function ir(e, t) {
                    return e && e.allowBlocks && e.allowBlocks.length > 0 ? e.allowBlocks : t.map((e => e.name))
                }

                function sr(e, t, n, r) {
                    const o = (i = t.blocks) && i.disallowBlocks ? i.disallowBlocks : [];
                    var i;
                    return {
                        ...e,
                        hasFixedToolbar: r,
                        allowedBlockTypes: ir(t.blocks, n).filter((e => -1 === o.indexOf(e)))
                    }
                }
                var lr = (0, A.compose)([(0, S.withSelect)(((e, t) => {
                        let {
                            settings: n
                        } = t;
                        const {
                            isEditing: r,
                            isFeatureActive: o
                        } = e("isolated/editor"), {
                            getBlockTypes: i
                        } = e(M.store), s = i(), l = o("fixedToolbar"), a = e("core").getEntityRecords("postType", "wp_block");
                        return {
                            isEditing: r(),
                            topToolbar: l,
                            currentSettings: (0, v.useMemo)((() => {
                                var e, t, r, o;
                                return {
                                    ...n,
                                    editor: {
                                        ...sr(n.editor, n.iso, s, void 0 !== (null === (e = n.iso) || void 0 === e || null === (t = e.defaultPreferences) || void 0 === t ? void 0 : t.fixedToolbar) ? null === (r = n.iso) || void 0 === r || null === (o = r.defaultPreferences) || void 0 === o ? void 0 : o.fixedToolbar : l),
                                        __experimentalReusableBlocks: [],
                                        __experimentalFetchReusableBlocks: !1
                                    }
                                }
                            }), [n, s, l, a])
                        }
                    })), (0, S.withDispatch)((e => {
                        const {
                            updateEditorSettings: t,
                            setupEditorState: n
                        } = e("core/editor"), {
                            updateSettings: r
                        } = e("core/block-editor"), {
                            setupEditor: o
                        } = e("isolated/editor");
                        return {
                            setupEditor: o,
                            setupCoreEditor: n,
                            updateSettings: e => {
                                let {
                                    editor: n
                                } = e;
                                r(n), t(n)
                            }
                        }
                    }))])((function(e) {
                        var t;
                        const {
                            currentSettings: n,
                            updateSettings: r,
                            setupEditor: o,
                            isEditing: i,
                            topToolbar: s,
                            setupCoreEditor: l
                        } = e;
                        return (0, v.useEffect)((() => {
                            void 0 === window.__editorAssets && (window.__editorAssets = {
                                styles: "",
                                scripts: ""
                            }), o(n), r(n), l({
                                id: 0,
                                type: "post"
                            }, [])
                        }), []), (0, v.useEffect)((() => {
                            i && r(n)
                        }), [i, s, null == n || null === (t = n.editor) || void 0 === t ? void 0 : t.reusableBlocks]), null
                    })),
                    ar = (0, A.compose)([(0, S.withSelect)((e => {
                        const {
                            getCurrentPattern: t
                        } = e("isolated/editor");
                        return {
                            currentPattern: t()
                        }
                    })), (0, S.withDispatch)((e => {
                        const {
                            updateBlocksWithoutUndo: t
                        } = e("isolated/editor");
                        return {
                            updateBlocksWithoutUndo: t
                        }
                    }))])((function(e) {
                        const {
                            currentPattern: t,
                            updateBlocksWithoutUndo: n
                        } = e, r = (0, v.useRef)(null);
                        return (0, v.useEffect)((() => {
                            null !== t && r.current !== t ? (r.current = t.name, setTimeout((() => {
                                n((0, M.parse)(t.content))
                            }), 0)) : r.current = t
                        }), [t]), null
                    })),
                    cr = function(e) {
                        const {
                            onSaveBlocks: t,
                            onSaveContent: n
                        } = e, r = (0, v.useRef)(!0), {
                            setReady: o
                        } = (0, S.useDispatch)("isolated/editor"), {
                            blocks: i,
                            ignoredContent: s
                        } = (0, S.useSelect)((e => ({
                            blocks: e("isolated/editor").getBlocks(),
                            ignoredContent: e("isolated/editor").getIgnoredContent()
                        })), []);

                        function l() {
                            null == t || t(i, s), null == n || n((0, M.serialize)(i))
                        }
                        return (0, v.useEffect)((() => {
                            i ? r.current ? (r.current = !1, o(!0), i && i.length > 1 && l()) : l() : o(!0)
                        }), [i]), null
                    },
                    ur = window.wp.apiFetch,
                    dr = n.n(ur),
                    pr = function(e) {
                        dr().use(dr().createPreloadingMiddleware({
                            OPTIONS: {
                                "/wp/v2/blocks": {
                                    body: []
                                }
                            },
                            "/wp/v2/types?context=view": {
                                body: {
                                    post: {
                                        capabilities: {
                                            edit_post: "edit_post"
                                        },
                                        description: "",
                                        hierarchical: !1,
                                        viewable: !0,
                                        name: "Posts",
                                        slug: "post",
                                        labels: {
                                            name: "Posts",
                                            singular_name: "Post"
                                        },
                                        supports: {
                                            title: !1,
                                            editor: !0,
                                            author: !1,
                                            thumbnail: !1,
                                            excerpt: !1,
                                            trackbacks: !1,
                                            "custom-fields": !1,
                                            comments: !1,
                                            revisions: !1,
                                            "post-formats": !1,
                                            "geo-location": !1
                                        },
                                        taxonomies: [],
                                        rest_base: "posts"
                                    }
                                }
                            },
                            "/wp/v2/types?context=edit": {
                                body: {
                                    post: {
                                        capabilities: {
                                            edit_post: "edit_post"
                                        },
                                        description: "",
                                        hierarchical: !1,
                                        viewable: !0,
                                        name: "Posts",
                                        slug: "post",
                                        labels: {
                                            name: "Posts",
                                            singular_name: "Post"
                                        },
                                        supports: {
                                            title: !1,
                                            editor: !0,
                                            author: !1,
                                            thumbnail: !1,
                                            excerpt: !1,
                                            trackbacks: !1,
                                            "custom-fields": !1,
                                            comments: !1,
                                            revisions: !1,
                                            "post-formats": !1,
                                            "geo-location": !1
                                        },
                                        taxonomies: [],
                                        rest_base: "posts"
                                    }
                                }
                            },
                            "/wp/v2/posts/0?context=edit": {
                                body: {
                                    id: 0,
                                    type: "post"
                                }
                            }
                        }))
                    };

                function fr() {
                    window.isoInitialised || ((0, C.registerCoreBlocks)(), window.isoInitialised = !0)
                }
                var mr, gr = or((function(e) {
                        const {
                            children: t,
                            onSaveContent: n,
                            onSaveBlocks: r,
                            settings: o,
                            __experimentalUndoManager: i,
                            __experimentalOnInput: s,
                            __experimentalOnChange: l,
                            __experimentalValue: a,
                            __experimentalOnSelection: c,
                            ...u
                        } = e;
                        ! function() {
                            let {
                                undoManager: e
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            const {
                                setUndoManager: t
                            } = (0, S.useDispatch)("isolated/editor");
                            (0, v.useEffect)((() => {
                                t(e)
                            }), [e]), window.isoInitialisedBlocks || (fr(), (0, S.use)(Tt, {}), pr(), window.isoInitialisedBlocks = !0)
                        }({
                            undoManager: i
                        });
                        const d = (0, S.useSelect)((e => ({
                            start: e("core/block-editor").getSelectionStart(),
                            end: e("core/block-editor").getSelectionEnd()
                        })), []);
                        return (0, v.useEffect)((() => {
                            null == c || c(d)
                        }), [d]), (0, v.createElement)(v.StrictMode, null, (0, v.createElement)(T.ShortcutProvider, null, (0, v.createElement)(cr, {
                            onSaveBlocks: r,
                            onSaveContent: n
                        }), (0, v.createElement)(lr, {
                            settings: o
                        }), (0, v.createElement)(ar, null), (0, v.createElement)(w.SlotFillProvider, null, (0, v.createElement)(Ot, _({}, u, {
                            onInput: s,
                            onChange: l,
                            blocks: a,
                            settings: o
                        }), t))))
                    })),
                    hr = function(e) {
                        let {
                            onLoaded: t,
                            onLoading: n
                        } = e;
                        const {
                            isEditorReady: r
                        } = (0, S.useSelect)((e => ({
                            isEditorReady: e("isolated/editor").isEditorReady()
                        })), []);
                        return (0, v.useEffect)((() => {
                            r ? t && t() : n && n()
                        }), [r]), null
                    },
                    vr = window.wp.domReady;
                const yr = (e, t) => {
                    if ("POST" === e.method && "/wp/v2/media" === e.path) {
                        const t = e.body;
                        t instanceof FormData && t.has("post") && "null" === t.get("post") && t.delete("post")
                    }
                    return t(e)
                };
                n.n(vr)()((() => {
                    dr().use(yr)
                }));
                const br = {
                    iso: {
                        moreMenu: !1
                    }
                };

                function Er(e, t) {
                    t.value = e
                }

                function _r(e, t, n) {
                    return -1 !== e.indexOf("\x3c!--") ? t(e) : n({
                        HTML: e
                    })
                }

                function wr(e) {
                    const t = e.closest(".iso-editor__loading");
                    t && t.classList.remove("iso-editor__loading")
                }
                window.wp = {
                    ...null !== (mr = window.wp) && void 0 !== mr ? mr : {},
                    attachEditor: function(e) {
                        var t, n, r;
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if ("textarea" !== e.type.toLowerCase()) return;
                        const i = document.createElement("div");
                        i.classList.add("editor"), e.parentNode.insertBefore(i, e.nextSibling), e.style.display = "none";
                        var s = {
                            ...br,
                            ...o
                        };
                        null != s && null !== (t = s.iso) && void 0 !== t && t.noToolbar && i.classList.add("no-toolbar"), null != s && null !== (n = s.editor) && void 0 !== n && n.enableUpload && (s.editor.mediaUpload = b.mediaUpload), null != s && null !== (r = s.editor) && void 0 !== r && r.enableLibrary && (0, E.addFilter)("editor.MediaUpload", "acfe/media-upload", (() => y.MediaUpload)), (0, v.render)((0, v.createElement)(gr, {
                            settings: s,
                            onLoad: (t, n) => _r(e.value, t, n),
                            onSaveContent: t => Er(t, e),
                            onError: () => document.location.reload()
                        }, (0, v.createElement)(hr, {
                            onLoaded: () => wr(e)
                        })), i)
                    },
                    detachEditor: function(e) {
                        const t = e.nextSibling;
                        t && t.classList.contains("editor") && ((0, v.unmountComponentAtNode)(t), e.style.display = null, t.parentNode.removeChild(t))
                    }
                }
            },
            184: function(e, t) {
                var n;
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function o() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var i = typeof n;
                                if ("string" === i || "number" === i) e.push(n);
                                else if (Array.isArray(n)) {
                                    if (n.length) {
                                        var s = o.apply(null, n);
                                        s && e.push(s)
                                    }
                                } else if ("object" === i) {
                                    if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                        e.push(n.toString());
                                        continue
                                    }
                                    for (var l in n) r.call(n, l) && n[l] && e.push(l)
                                }
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
                        return o
                    }.apply(t, [])) || (e.exports = n)
                }()
            },
            934: function(e) {
                e.exports = function(e, t, n) {
                    return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
                        return t.toUpperCase()
                    }))]
                }
            },
            227: function(e, t, n) {
                t.formatArgs = function(t) {
                    if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                    const n = "color: " + this.color;
                    t.splice(1, 0, n, "color: inherit");
                    let r = 0,
                        o = 0;
                    t[0].replace(/%[a-zA-Z%]/g, (e => {
                        "%%" !== e && (r++, "%c" === e && (o = r))
                    })), t.splice(o, 0, n)
                }, t.save = function(e) {
                    try {
                        e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                    } catch (e) {}
                }, t.load = function() {
                    let e;
                    try {
                        e = t.storage.getItem("debug")
                    } catch (e) {}
                    return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
                }, t.useColors = function() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                }, t.storage = function() {
                    try {
                        return localStorage
                    } catch (e) {}
                }(), t.destroy = (() => {
                    let e = !1;
                    return () => {
                        e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                    }
                })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = n(447)(t);
                const {
                    formatters: r
                } = e.exports;
                r.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }
            },
            447: function(e, t, n) {
                e.exports = function(e) {
                    function t(e) {
                        let n, o, i, s = null;

                        function l(...e) {
                            if (!l.enabled) return;
                            const r = l,
                                o = Number(new Date),
                                i = o - (n || o);
                            r.diff = i, r.prev = n, r.curr = o, n = o, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                            let s = 0;
                            e[0] = e[0].replace(/%([a-zA-Z%])/g, ((n, o) => {
                                if ("%%" === n) return "%";
                                s++;
                                const i = t.formatters[o];
                                if ("function" == typeof i) {
                                    const t = e[s];
                                    n = i.call(r, t), e.splice(s, 1), s--
                                }
                                return n
                            })), t.formatArgs.call(r, e), (r.log || t.log).apply(r, e)
                        }
                        return l.namespace = e, l.useColors = t.useColors(), l.color = t.selectColor(e), l.extend = r, l.destroy = t.destroy, Object.defineProperty(l, "enabled", {
                            enumerable: !0,
                            configurable: !1,
                            get: () => null !== s ? s : (o !== t.namespaces && (o = t.namespaces, i = t.enabled(e)), i),
                            set: e => {
                                s = e
                            }
                        }), "function" == typeof t.init && t.init(l), l
                    }

                    function r(e, n) {
                        const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
                        return r.log = this.log, r
                    }

                    function o(e) {
                        return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                    }
                    return t.debug = t, t.default = t, t.coerce = function(e) {
                        return e instanceof Error ? e.stack || e.message : e
                    }, t.disable = function() {
                        const e = [...t.names.map(o), ...t.skips.map(o).map((e => "-" + e))].join(",");
                        return t.enable(""), e
                    }, t.enable = function(e) {
                        let n;
                        t.save(e), t.namespaces = e, t.names = [], t.skips = [];
                        const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                            o = r.length;
                        for (n = 0; n < o; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
                    }, t.enabled = function(e) {
                        if ("*" === e[e.length - 1]) return !0;
                        let n, r;
                        for (n = 0, r = t.skips.length; n < r; n++)
                            if (t.skips[n].test(e)) return !1;
                        for (n = 0, r = t.names.length; n < r; n++)
                            if (t.names[n].test(e)) return !0;
                        return !1
                    }, t.humanize = n(824), t.destroy = function() {
                        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                    }, Object.keys(e).forEach((n => {
                        t[n] = e[n]
                    })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                        let n = 0;
                        for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                        return t.colors[Math.abs(n) % t.colors.length]
                    }, t.enable(t.load()), t
                }
            },
            303: function(e, t, n) {
                var r = n(934);
                e.exports = function(e) {
                    var t = r(e, "line-height"),
                        n = parseFloat(t, 10);
                    if (t === n + "") {
                        var o = e.style.lineHeight;
                        e.style.lineHeight = t + "em", t = r(e, "line-height"), n = parseFloat(t, 10), o ? e.style.lineHeight = o : delete e.style.lineHeight
                    }
                    if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
                        var i = e.nodeName,
                            s = document.createElement(i);
                        s.innerHTML = "&nbsp;", "TEXTAREA" === i.toUpperCase() && s.setAttribute("rows", "1");
                        var l = r(e, "font-size");
                        s.style.fontSize = l, s.style.padding = "0px", s.style.border = "0px";
                        var a = document.body;
                        a.appendChild(s), n = s.offsetHeight, a.removeChild(s)
                    }
                    return n
                }
            },
            824: function(e) {
                var t = 1e3,
                    n = 60 * t,
                    r = 60 * n,
                    o = 24 * r;

                function i(e, t, n, r) {
                    var o = t >= 1.5 * n;
                    return Math.round(e / n) + " " + r + (o ? "s" : "")
                }
                e.exports = function(e, s) {
                    s = s || {};
                    var l, a, c = typeof e;
                    if ("string" === c && e.length > 0) return function(e) {
                        if (!((e = String(e)).length > 100)) {
                            var i = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                            if (i) {
                                var s = parseFloat(i[1]);
                                switch ((i[2] || "ms").toLowerCase()) {
                                    case "years":
                                    case "year":
                                    case "yrs":
                                    case "yr":
                                    case "y":
                                        return 315576e5 * s;
                                    case "weeks":
                                    case "week":
                                    case "w":
                                        return 6048e5 * s;
                                    case "days":
                                    case "day":
                                    case "d":
                                        return s * o;
                                    case "hours":
                                    case "hour":
                                    case "hrs":
                                    case "hr":
                                    case "h":
                                        return s * r;
                                    case "minutes":
                                    case "minute":
                                    case "mins":
                                    case "min":
                                    case "m":
                                        return s * n;
                                    case "seconds":
                                    case "second":
                                    case "secs":
                                    case "sec":
                                    case "s":
                                        return s * t;
                                    case "milliseconds":
                                    case "millisecond":
                                    case "msecs":
                                    case "msec":
                                    case "ms":
                                        return s;
                                    default:
                                        return
                                }
                            }
                        }
                    }(e);
                    if ("number" === c && isFinite(e)) return s.long ? (l = e, (a = Math.abs(l)) >= o ? i(l, a, o, "day") : a >= r ? i(l, a, r, "hour") : a >= n ? i(l, a, n, "minute") : a >= t ? i(l, a, t, "second") : l + " ms") : function(e) {
                        var i = Math.abs(e);
                        return i >= o ? Math.round(e / o) + "d" : i >= r ? Math.round(e / r) + "h" : i >= n ? Math.round(e / n) + "m" : i >= t ? Math.round(e / t) + "s" : e + "ms"
                    }(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                }
            },
            703: function(e, t, n) {
                "use strict";
                var r = n(414);

                function o() {}

                function i() {}
                i.resetWarningCache = o, e.exports = function() {
                    function e(e, t, n, o, i, s) {
                        if (s !== r) {
                            var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw l.name = "Invariant Violation", l
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: i,
                        resetWarningCache: o
                    };
                    return n.PropTypes = n, n
                }
            },
            697: function(e, t, n) {
                e.exports = n(703)()
            },
            414: function(e) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            236: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ActionCreators = t.ActionTypes = void 0;
                var n = {
                    UNDO: "@@redux-undo/UNDO",
                    REDO: "@@redux-undo/REDO",
                    JUMP_TO_FUTURE: "@@redux-undo/JUMP_TO_FUTURE",
                    JUMP_TO_PAST: "@@redux-undo/JUMP_TO_PAST",
                    JUMP: "@@redux-undo/JUMP",
                    CLEAR_HISTORY: "@@redux-undo/CLEAR_HISTORY"
                };
                t.ActionTypes = n;
                var r = {
                    undo: function() {
                        return {
                            type: n.UNDO
                        }
                    },
                    redo: function() {
                        return {
                            type: n.REDO
                        }
                    },
                    jumpToFuture: function(e) {
                        return {
                            type: n.JUMP_TO_FUTURE,
                            index: e
                        }
                    },
                    jumpToPast: function(e) {
                        return {
                            type: n.JUMP_TO_PAST,
                            index: e
                        }
                    },
                    jump: function(e) {
                        return {
                            type: n.JUMP,
                            index: e
                        }
                    },
                    clearHistory: function() {
                        return {
                            type: n.CLEAR_HISTORY
                        }
                    }
                };
                t.ActionCreators = r
            },
            823: function(e, t) {
                "use strict";

                function n(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }
                var r, o;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.set = function(e) {
                    r = e
                }, t.start = function(e, t) {
                    o = {
                        header: [],
                        prev: [],
                        action: [],
                        next: [],
                        msgs: []
                    }, r && (console.group ? (o.header = ["%credux-undo", "font-style: italic", "action", e.type], o.action = a("action", s, e), o.prev = a("prev history", i, t)) : (o.header = ["redux-undo action", e.type], o.action = ["action", e], o.prev = ["prev history", t]))
                }, t.end = function(e) {
                    var t, i, s, c, u, d, p, f, m, g, h, v, y, b, E, _;
                    r && (console.group ? o.next = a("next history", l, e) : o.next = ["next history", e], v = (h = o).header, y = h.prev, b = h.next, E = h.action, _ = h.msgs, console.group ? ((t = console).groupCollapsed.apply(t, n(v)), (i = console).log.apply(i, n(y)), (s = console).log.apply(s, n(E)), (c = console).log.apply(c, n(b)), (u = console).log.apply(u, n(_)), console.groupEnd()) : ((d = console).log.apply(d, n(v)), (p = console).log.apply(p, n(y)), (f = console).log.apply(f, n(E)), (m = console).log.apply(m, n(b)), (g = console).log.apply(g, n(_))))
                }, t.log = function() {
                    if (r) {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        o.msgs = o.msgs.concat([].concat(t, ["\n"]))
                    }
                };
                var i = "#9E9E9E",
                    s = "#03A9F4",
                    l = "#4CAF50";

                function a(e, t, n) {
                    return ["%c".concat(e), "color: ".concat(t, "; font-weight: bold"), n]
                }
            },
            619: function(e, t) {
                "use strict";

                function n(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return Array.isArray(e) ? e : "string" == typeof e ? [e] : t
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.parseActions = n, t.isHistory = function(e) {
                    return void 0 !== e.present && void 0 !== e.future && void 0 !== e.past && Array.isArray(e.future) && Array.isArray(e.past)
                }, t.includeAction = function(e) {
                    var t = n(e);
                    return function(e) {
                        return t.indexOf(e.type) >= 0
                    }
                }, t.excludeAction = function(e) {
                    var t = n(e);
                    return function(e) {
                        return t.indexOf(e.type) < 0
                    }
                }, t.combineFilters = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.reduce((function(e, t) {
                        return function(n, r, o) {
                            return e(n, r, o) && t(n, r, o)
                        }
                    }), (function() {
                        return !0
                    }))
                }, t.groupByActionTypes = function(e) {
                    var t = n(e);
                    return function(e) {
                        return t.indexOf(e.type) >= 0 ? e.type : null
                    }
                }, t.newHistory = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        past: e,
                        present: t,
                        future: n,
                        group: r,
                        _latestUnfiltered: t,
                        index: e.length,
                        limit: e.length + n.length + 1
                    }
                }
            },
            90: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "zF", {
                    enumerable: !0,
                    get: function() {
                        return o.ActionCreators
                    }
                }), Object.defineProperty(t, "ZP", {
                    enumerable: !0,
                    get: function() {
                        return i.default
                    }
                });
                var r, o = n(236),
                    i = (n(619), (r = n(479)) && r.__esModule ? r : {
                        default: r
                    })
            },
            479: function(e, t, n) {
                "use strict";

                function r(e) {
                    return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, r(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o.set(t.debug);
                    var n, r = c({
                            limit: void 0,
                            filter: function() {
                                return !0
                            },
                            groupBy: function() {
                                return null
                            },
                            undoType: i.ActionTypes.UNDO,
                            redoType: i.ActionTypes.REDO,
                            jumpToPastType: i.ActionTypes.JUMP_TO_PAST,
                            jumpToFutureType: i.ActionTypes.JUMP_TO_FUTURE,
                            jumpType: i.ActionTypes.JUMP,
                            neverSkipReducer: !1,
                            ignoreInitialState: !1,
                            syncFilter: !1
                        }, t, {
                            initTypes: (0, s.parseActions)(t.initTypes, ["@@redux-undo/INIT"]),
                            clearHistoryType: (0, s.parseActions)(t.clearHistoryType, [i.ActionTypes.CLEAR_HISTORY])
                        }),
                        l = r.neverSkipReducer ? function(t, n) {
                            for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                            return c({}, t, {
                                present: e.apply(void 0, [t.present, n].concat(o))
                            })
                        } : function(e) {
                            return e
                        };
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        o.start(i, t);
                        for (var a, c = t, u = arguments.length, d = new Array(u > 2 ? u - 2 : 0), y = 2; y < u; y++) d[y - 2] = arguments[y];
                        if (!n) {
                            if (o.log("history is uninitialized"), void 0 === t) {
                                var b = {
                                        type: "@@redux-undo/CREATE_HISTORY"
                                    },
                                    E = e.apply(void 0, [t, b].concat(d));
                                return c = p(E, r.ignoreInitialState), o.log("do not set initialState on probe actions"), o.end(c), c
                            }(0, s.isHistory)(t) ? (c = n = r.ignoreInitialState ? t : (0, s.newHistory)(t.past, t.present, t.future), o.log("initialHistory initialized: initialState is a history", n)) : (c = n = p(t, r.ignoreInitialState), o.log("initialHistory initialized: initialState is not a history", n))
                        }
                        switch (i.type) {
                            case void 0:
                                return c;
                            case r.undoType:
                                return a = h(c, -1), o.log("perform undo"), o.end(a), l.apply(void 0, [a, i].concat(d));
                            case r.redoType:
                                return a = h(c, 1), o.log("perform redo"), o.end(a), l.apply(void 0, [a, i].concat(d));
                            case r.jumpToPastType:
                                return a = g(c, i.index), o.log("perform jumpToPast to ".concat(i.index)), o.end(a), l.apply(void 0, [a, i].concat(d));
                            case r.jumpToFutureType:
                                return a = m(c, i.index), o.log("perform jumpToFuture to ".concat(i.index)), o.end(a), l.apply(void 0, [a, i].concat(d));
                            case r.jumpType:
                                return a = h(c, i.index), o.log("perform jump to ".concat(i.index)), o.end(a), l.apply(void 0, [a, i].concat(d));
                            case v(i.type, r.clearHistoryType):
                                return a = p(c.present, r.ignoreInitialState), o.log("perform clearHistory"), o.end(a), l.apply(void 0, [a, i].concat(d));
                            default:
                                if (a = e.apply(void 0, [c.present, i].concat(d)), r.initTypes.some((function(e) {
                                        return e === i.type
                                    }))) return o.log("reset history due to init action"), o.end(n), n;
                                if (c._latestUnfiltered === a) return c;
                                var _ = "function" == typeof r.filter && !r.filter(i, a, c);
                                if (_) {
                                    var w = (0, s.newHistory)(c.past, a, c.future, c.group);
                                    return r.syncFilter || (w._latestUnfiltered = c._latestUnfiltered), o.log("filter ignored action, not storing it in past"), o.end(w), w
                                }
                                var C = r.groupBy(i, a, c);
                                if (null != C && C === c.group) {
                                    var S = (0, s.newHistory)(c.past, a, c.future, c.group);
                                    return o.log("groupBy grouped the action with the previous action"), o.end(S), S
                                }
                                return c = f(c, a, r.limit, C), o.log("inserted new state into history"), o.end(c), c
                        }
                    }
                };
                var o = function(e) {
                        if (e && e.__esModule) return e;
                        if (null === e || "object" !== r(e) && "function" != typeof e) return {
                            default: e
                        };
                        var t = l();
                        if (t && t.has(e)) return t.get(e);
                        var n = {},
                            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var i in e)
                            if (Object.prototype.hasOwnProperty.call(e, i)) {
                                var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                                s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                            } return n.default = e, t && t.set(e, n), n
                    }(n(823)),
                    i = n(236),
                    s = n(619);

                function l() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap;
                    return l = function() {
                        return e
                    }, e
                }

                function a(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function c(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(Object(n), !0).forEach((function(t) {
                            u(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function u(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function d(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function p(e, t) {
                    var n = (0, s.newHistory)([], e, []);
                    return t && (n._latestUnfiltered = null), n
                }

                function f(e, t, n, r) {
                    var i = e.past.length + 1;
                    o.log("inserting", t), o.log("new free: ", n - i);
                    var l = e.past,
                        a = e._latestUnfiltered,
                        c = n && n <= i,
                        u = l.slice(c ? 1 : 0),
                        p = null != a ? [].concat(d(u), [a]) : u;
                    return (0, s.newHistory)(p, t, [], r)
                }

                function m(e, t) {
                    if (t < 0 || t >= e.future.length) return e;
                    var n = e.past,
                        r = e.future,
                        o = e._latestUnfiltered,
                        i = [].concat(d(n), [o], d(r.slice(0, t))),
                        l = r[t],
                        a = r.slice(t + 1);
                    return (0, s.newHistory)(i, l, a)
                }

                function g(e, t) {
                    if (t < 0 || t >= e.past.length) return e;
                    var n = e.past,
                        r = e.future,
                        o = e._latestUnfiltered,
                        i = n.slice(0, t),
                        l = [].concat(d(n.slice(t + 1)), [o], d(r)),
                        a = n[t];
                    return (0, s.newHistory)(i, a, l)
                }

                function h(e, t) {
                    return t > 0 ? m(e, t - 1) : t < 0 ? g(e, e.past.length + t) : e
                }

                function v(e, t) {
                    return t.indexOf(e) > -1 ? e : !e
                }
            },
            965: function(e) {
                "use strict";

                function t(e, n) {
                    var r;
                    if (Array.isArray(n))
                        for (r = 0; r < n.length; r++) t(e, n[r]);
                    else
                        for (r in n) e[r] = (e[r] || []).concat(n[r])
                }
                e.exports = function(e) {
                    var n, r = {};
                    return t(r, e), (n = function(e) {
                        return function(t) {
                            return function(n) {
                                var o, i, s = r[n.type],
                                    l = t(n);
                                if (s)
                                    for (o = 0; o < s.length; o++)(i = s[o](n, e)) && e.dispatch(i);
                                return l
                            }
                        }
                    }).effects = r, n
                }
            },
            196: function(e) {
                "use strict";
                e.exports = window.React
            }
        },
        n = {};

    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = n[e] = {
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r), i.exports
    }
    r.m = t, e = [], r.O = function(t, n, o, i) {
            if (!n) {
                var s = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    n = e[u][0], o = e[u][1], i = e[u][2];
                    for (var l = !0, a = 0; a < n.length; a++)(!1 & i || s >= i) && Object.keys(r.O).every((function(e) {
                        return r.O[e](n[a])
                    })) ? n.splice(a--, 1) : (l = !1, i < s && (s = i));
                    if (l) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, o, i]
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, {
                a: t
            }), t
        }, r.d = function(e, t) {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            var e = {
                826: 0,
                431: 0
            };
            r.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, n) {
                    var o, i, s = n[0],
                        l = n[1],
                        a = n[2],
                        c = 0;
                    if (s.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (o in l) r.o(l, o) && (r.m[o] = l[o]);
                        if (a) var u = a(r)
                    }
                    for (t && t(n); c < s.length; c++) i = s[c], r.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                    return r.O(u)
                },
                n = self.webpackChunkblocks_everywhere = self.webpackChunkblocks_everywhere || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        }();
    var o = r.O(void 0, [431], (function() {
        return r(217)
    }));
    o = r.O(o)
}();