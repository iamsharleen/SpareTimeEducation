! function(a, b) {
	function c(a) {
		var b = a.length,
			c = ka.type(a);
		return ka.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
	}

	function d(a) {
		var b = za[a] = {};
		return ka.each(a.match(ma) || [], function(a, c) {
			b[c] = !0
		}), b
	}

	function e(a, c, d, e) {
		if (ka.acceptData(a)) {
			var f, g, h = ka.expando,
				i = a.nodeType,
				j = i ? ka.cache : a,
				k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = ba.pop() || ka.guid++ : h), j[k] || (j[k] = i ? {} : {
				toJSON: ka.noop
			}), ("object" == typeof c || "function" == typeof c) && (e ? j[k] = ka.extend(j[k], c) : j[k].data = ka.extend(j[k].data, c)), g = j[k], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[ka.camelCase(c)] = d), "string" == typeof c ? (f = g[c], null == f && (f = g[ka.camelCase(c)])) : f = g, f
		}
	}

	function f(a, b, c) {
		if (ka.acceptData(a)) {
			var d, e, f = a.nodeType,
				g = f ? ka.cache : a,
				i = f ? a[ka.expando] : ka.expando;
			if (g[i]) {
				if (b && (d = c ? g[i] : g[i].data)) {
					ka.isArray(b) ? b = b.concat(ka.map(b, ka.camelCase)) : b in d ? b = [b] : (b = ka.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					for (; e--;) delete d[b[e]];
					if (c ? !h(d) : !ka.isEmptyObject(d)) return
				}(c || (delete g[i].data, h(g[i]))) && (f ? ka.cleanData([a], !0) : ka.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null)
			}
		}
	}

	function g(a, c, d) {
		if (d === b && 1 === a.nodeType) {
			var e = "data-" + c.replace(Ba, "-$1").toLowerCase();
			if (d = a.getAttribute(e), "string" == typeof d) {
				try {
					d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Aa.test(d) ? ka.parseJSON(d) : d
				} catch (f) {}
				ka.data(a, c, d)
			} else d = b
		}
		return d
	}

	function h(a) {
		var b;
		for (b in a)
			if (("data" !== b || !ka.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
		return !0
	}

	function i() {
		return !0
	}

	function j() {
		return !1
	}

	function k() {
		try {
			return Y.activeElement
		} catch (a) {}
	}

	function l(a, b) {
		do a = a[b]; while (a && 1 !== a.nodeType);
		return a
	}

	function m(a, b, c) {
		if (ka.isFunction(b)) return ka.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return ka.grep(a, function(a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (Qa.test(b)) return ka.filter(b, a, c);
			b = ka.filter(b, a)
		}
		return ka.grep(a, function(a) {
			return ka.inArray(a, b) >= 0 !== c
		})
	}

	function n(a) {
		var b = Ua.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement)
			for (; b.length;) c.createElement(b.pop());
		return c
	}

	function o(a, b) {
		return ka.nodeName(a, "table") && ka.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function p(a) {
		return a.type = (null !== ka.find.attr(a, "type")) + "/" + a.type, a
	}

	function q(a) {
		var b = eb.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function r(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++) ka._data(c, "globalEval", !b || ka._data(b[d], "globalEval"))
	}

	function s(a, b) {
		if (1 === b.nodeType && ka.hasData(a)) {
			var c, d, e, f = ka._data(a),
				g = ka._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h)
					for (d = 0, e = h[c].length; e > d; d++) ka.event.add(b, c, h[c][d])
			}
			g.data && (g.data = ka.extend({}, g.data))
		}
	}

	function t(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !ka.support.noCloneEvent && b[ka.expando]) {
				e = ka._data(b);
				for (d in e.events) ka.removeEvent(b, d, e.handle);
				b.removeAttribute(ka.expando)
			}
			"script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ka.support.html5Clone && a.innerHTML && !ka.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
		}
	}

	function u(a, c) {
		var d, e, f = 0,
			g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
		if (!g)
			for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !c || ka.nodeName(e, c) ? g.push(e) : ka.merge(g, u(e, c));
		return c === b || c && ka.nodeName(a, c) ? ka.merge([a], g) : g
	}

	function v(a) {
		bb.test(a.type) && (a.defaultChecked = a.checked)
	}

	function w(a, b) {
		if (b in a) return b;
		for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yb.length; e--;)
			if (b = yb[e] + c, b in a) return b;
		return d
	}

	function x(a, b) {
		return a = b || a, "none" === ka.css(a, "display") || !ka.contains(a.ownerDocument, a)
	}

	function y(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ka._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = ka._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), (c && "none" !== c || !e) && ka._data(d, "olddisplay", e ? c : ka.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function z(a, b, c) {
		var d = rb.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function A(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ka.css(a, c + xb[f], !0, e)), d ? ("content" === c && (g -= ka.css(a, "padding" + xb[f], !0, e)), "margin" !== c && (g -= ka.css(a, "border" + xb[f] + "Width", !0, e))) : (g += ka.css(a, "padding" + xb[f], !0, e), "padding" !== c && (g += ka.css(a, "border" + xb[f] + "Width", !0, e)));
		return g
	}

	function B(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = kb(a),
			g = ka.support.boxSizing && "border-box" === ka.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = lb(a, b, f), (0 > e || null == e) && (e = a.style[b]), sb.test(e)) return e;
			d = g && (ka.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function C(a) {
		var b = Y,
			c = ub[a];
		return c || (c = D(a, b), "none" !== c && c || (jb = (jb || ka("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jb[0].contentWindow || jb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = D(a, b), jb.detach()), ub[a] = c), c
	}

	function D(a, b) {
		var c = ka(b.createElement(a)).appendTo(b.body),
			d = ka.css(c[0], "display");
		return c.remove(), d
	}

	function E(a, b, c, d) {
		var e;
		if (ka.isArray(b)) ka.each(b, function(b, e) {
			c || Ab.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== ka.type(b)) d(a, b);
		else
			for (e in b) E(a + "[" + e + "]", b[e], c, d)
	}

	function F(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(ma) || [];
			if (ka.isFunction(c))
				for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function G(a, b, c, d) {
		function e(h) {
			var i;
			return f[h] = !0, ka.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
			}), i
		}
		var f = {},
			g = a === Rb;
		return e(b.dataTypes[0]) || !f["*"] && e("*")
	}

	function H(a, c) {
		var d, e, f = ka.ajaxSettings.flatOptions || {};
		for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
		return d && ka.extend(!0, a, d), a
	}

	function I(a, c, d) {
		for (var e, f, g, h, i = a.contents, j = a.dataTypes;
			"*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
		if (f)
			for (h in i)
				if (i[h] && i[h].test(f)) {
					j.unshift(h);
					break
				}
		if (j[0] in d) g = j[0];
		else {
			for (h in d) {
				if (!j[0] || a.converters[h + " " + j[0]]) {
					g = h;
					break
				}
				e || (e = h)
			}
			g = g || e
		}
		return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
	}

	function J(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		for (f = k.shift(); f;)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if (g !== !0)
				if (g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch (l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}

	function K() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}

	function L() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}

	function M() {
		return setTimeout(function() {
			$b = b
		}), $b = ka.now()
	}

	function N(a, b, c) {
		for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a)) return d
	}

	function O(a, b, c) {
		var d, e, f = 0,
			g = dc.length,
			h = ka.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if (e) return !1;
				for (var b = $b || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: ka.extend({}, b),
				opts: ka.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: $b || M(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = ka.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (P(k, j.opts.specialEasing); g > f; f++)
			if (d = dc[f].call(j, a, k, j.opts)) return d;
		return ka.map(k, N, j), ka.isFunction(j.opts.start) && j.opts.start.call(a, j), ka.fx.timer(ka.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	function P(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = ka.camelCase(c), e = b[d], f = a[c], ka.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ka.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function Q(a, b, c) {
		var d, e, f, g, h, i, j = this,
			k = {},
			l = a.style,
			m = a.nodeType && x(a),
			n = ka._data(a, "fxshow");
		c.queue || (h = ka._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
			h.unqueued || i()
		}), h.unqueued++, j.always(function() {
			j.always(function() {
				h.unqueued--, ka.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === ka.css(a, "display") && "none" === ka.css(a, "float") && (ka.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")), c.overflow && (l.overflow = "hidden", ka.support.shrinkWrapBlocks || j.always(function() {
			l.overflow = c.overflow[0], l.overflowX = c.overflow[1], l.overflowY = c.overflow[2]
		}));
		for (d in b)
			if (e = b[d], ac.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
				k[d] = n && n[d] || ka.style(a, d)
			}
		if (!ka.isEmptyObject(k)) {
			n ? "hidden" in n && (m = n.hidden) : n = ka._data(a, "fxshow", {}), f && (n.hidden = !m), m ? ka(a).show() : j.done(function() {
				ka(a).hide()
			}), j.done(function() {
				var b;
				ka._removeData(a, "fxshow");
				for (b in k) ka.style(a, b, k[b])
			});
			for (d in k) g = N(m ? n[d] : 0, d, j), d in n || (n[d] = g.start, m && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function R(a, b, c, d, e) {
		return new R.prototype.init(a, b, c, d, e)
	}

	function S(a, b) {
		var c, d = {
				height: a
			},
			e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xb[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function T(a) {
		return ka.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	var U, V, W = typeof b,
		X = a.location,
		Y = a.document,
		Z = Y.documentElement,
		$ = a.jQuery,
		_ = a.$,
		aa = {},
		ba = [],
		ca = "1.10.2",
		da = ba.concat,
		ea = ba.push,
		fa = ba.slice,
		ga = ba.indexOf,
		ha = aa.toString,
		ia = aa.hasOwnProperty,
		ja = ca.trim,
		ka = function(a, b) {
			return new ka.fn.init(a, b, V)
		},
		la = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ma = /\S+/g,
		na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		oa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		pa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		qa = /^[\],:{}\s]*$/,
		ra = /(?:^|:|,)(?:\s*\[)+/g,
		sa = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		ta = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		ua = /^-ms-/,
		va = /-([\da-z])/gi,
		wa = function(a, b) {
			return b.toUpperCase()
		},
		xa = function(a) {
			(Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (ya(), ka.ready())
		},
		ya = function() {
			Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xa, !1), a.removeEventListener("load", xa, !1)) : (Y.detachEvent("onreadystatechange", xa), a.detachEvent("onload", xa))
		};
	ka.fn = ka.prototype = {
			jquery: ca,
			constructor: ka,
			init: function(a, c, d) {
				var e, f;
				if (!a) return this;
				if ("string" == typeof a) {
					if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : oa.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
					if (e[1]) {
						if (c = c instanceof ka ? c[0] : c, ka.merge(this, ka.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), pa.test(e[1]) && ka.isPlainObject(c))
							for (e in c) ka.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
						return this
					}
					if (f = Y.getElementById(e[2]), f && f.parentNode) {
						if (f.id !== e[2]) return d.find(a);
						this.length = 1, this[0] = f
					}
					return this.context = Y, this.selector = a, this
				}
				return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ka.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), ka.makeArray(a, this))
			},
			selector: "",
			length: 0,
			toArray: function() {
				return fa.call(this)
			},
			get: function(a) {
				return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
			},
			pushStack: function(a) {
				var b = ka.merge(this.constructor(), a);
				return b.prevObject = this, b.context = this.context, b
			},
			each: function(a, b) {
				return ka.each(this, a, b)
			},
			ready: function(a) {
				return ka.ready.promise().done(a), this
			},
			slice: function() {
				return this.pushStack(fa.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(a) {
				var b = this.length,
					c = +a + (0 > a ? b : 0);
				return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
			},
			map: function(a) {
				return this.pushStack(ka.map(this, function(b, c) {
					return a.call(b, c, b)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: ea,
			sort: [].sort,
			splice: [].splice
		}, ka.fn.init.prototype = ka.fn, ka.extend = ka.fn.extend = function() {
			var a, c, d, e, f, g, h = arguments[0] || {},
				i = 1,
				j = arguments.length,
				k = !1;
			for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || ka.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
				if (null != (f = arguments[i]))
					for (e in f) a = h[e], d = f[e], h !== d && (k && d && (ka.isPlainObject(d) || (c = ka.isArray(d))) ? (c ? (c = !1, g = a && ka.isArray(a) ? a : []) : g = a && ka.isPlainObject(a) ? a : {}, h[e] = ka.extend(k, g, d)) : d !== b && (h[e] = d));
			return h
		}, ka.extend({
			expando: "jQuery" + (ca + Math.random()).replace(/\D/g, ""),
			noConflict: function(b) {
				return a.$ === ka && (a.$ = _), b && a.jQuery === ka && (a.jQuery = $), ka
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(a) {
				a ? ka.readyWait++ : ka.ready(!0)
			},
			ready: function(a) {
				if (a === !0 ? !--ka.readyWait : !ka.isReady) {
					if (!Y.body) return setTimeout(ka.ready);
					ka.isReady = !0, a !== !0 && --ka.readyWait > 0 || (U.resolveWith(Y, [ka]), ka.fn.trigger && ka(Y).trigger("ready").off("ready"))
				}
			},
			isFunction: function(a) {
				return "function" === ka.type(a)
			},
			isArray: Array.isArray || function(a) {
				return "array" === ka.type(a)
			},
			isWindow: function(a) {
				return null != a && a == a.window
			},
			isNumeric: function(a) {
				return !isNaN(parseFloat(a)) && isFinite(a)
			},
			type: function(a) {
				return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? aa[ha.call(a)] || "object" : typeof a
			},
			isPlainObject: function(a) {
				var c;
				if (!a || "object" !== ka.type(a) || a.nodeType || ka.isWindow(a)) return !1;
				try {
					if (a.constructor && !ia.call(a, "constructor") && !ia.call(a.constructor.prototype, "isPrototypeOf")) return !1
				} catch (d) {
					return !1
				}
				if (ka.support.ownLast)
					for (c in a) return ia.call(a, c);
				for (c in a);
				return c === b || ia.call(a, c)
			},
			isEmptyObject: function(a) {
				var b;
				for (b in a) return !1;
				return !0
			},
			error: function(a) {
				throw new Error(a)
			},
			parseHTML: function(a, b, c) {
				if (!a || "string" != typeof a) return null;
				"boolean" == typeof b && (c = b, b = !1), b = b || Y;
				var d = pa.exec(a),
					e = !c && [];
				return d ? [b.createElement(d[1])] : (d = ka.buildFragment([a], b, e), e && ka(e).remove(), ka.merge([], d.childNodes))
			},
			parseJSON: function(b) {
				return a.JSON && a.JSON.parse ? a.JSON.parse(b) : null === b ? b : "string" == typeof b && (b = ka.trim(b), b && qa.test(b.replace(sa, "@").replace(ta, "]").replace(ra, ""))) ? new Function("return " + b)() : void ka.error("Invalid JSON: " + b)
			},
			parseXML: function(c) {
				var d, e;
				if (!c || "string" != typeof c) return null;
				try {
					a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
				} catch (f) {
					d = b
				}
				return d && d.documentElement && !d.getElementsByTagName("parsererror").length || ka.error("Invalid XML: " + c), d
			},
			noop: function() {},
			globalEval: function(b) {
				b && ka.trim(b) && (a.execScript || function(b) {
					a.eval.call(a, b)
				})(b)
			},
			camelCase: function(a) {
				return a.replace(ua, "ms-").replace(va, wa)
			},
			nodeName: function(a, b) {
				return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
			},
			each: function(a, b, d) {
				var e, f = 0,
					g = a.length,
					h = c(a);
				if (d) {
					if (h)
						for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
					else
						for (f in a)
							if (e = b.apply(a[f], d), e === !1) break
				} else if (h)
					for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
				else
					for (f in a)
						if (e = b.call(a[f], f, a[f]), e === !1) break; return a
			},
			trim: ja && !ja.call("\ufeff聽") ? function(a) {
				return null == a ? "" : ja.call(a)
			} : function(a) {
				return null == a ? "" : (a + "").replace(na, "")
			},
			makeArray: function(a, b) {
				var d = b || [];
				return null != a && (c(Object(a)) ? ka.merge(d, "string" == typeof a ? [a] : a) : ea.call(d, a)), d
			},
			inArray: function(a, b, c) {
				var d;
				if (b) {
					if (ga) return ga.call(b, a, c);
					for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
						if (c in b && b[c] === a) return c
				}
				return -1
			},
			merge: function(a, c) {
				var d = c.length,
					e = a.length,
					f = 0;
				if ("number" == typeof d)
					for (; d > f; f++) a[e++] = c[f];
				else
					for (; c[f] !== b;) a[e++] = c[f++];
				return a.length = e, a
			},
			grep: function(a, b, c) {
				var d, e = [],
					f = 0,
					g = a.length;
				for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
				return e
			},
			map: function(a, b, d) {
				var e, f = 0,
					g = a.length,
					h = c(a),
					i = [];
				if (h)
					for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
				else
					for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
				return da.apply([], i)
			},
			guid: 1,
			proxy: function(a, c) {
				var d, e, f;
				return "string" == typeof c && (f = a[c], c = a, a = f), ka.isFunction(a) ? (d = fa.call(arguments, 2), e = function() {
					return a.apply(c || this, d.concat(fa.call(arguments)))
				}, e.guid = a.guid = a.guid || ka.guid++, e) : b
			},
			access: function(a, c, d, e, f, g, h) {
				var i = 0,
					j = a.length,
					k = null == d;
				if ("object" === ka.type(d)) {
					f = !0;
					for (i in d) ka.access(a, c, i, d[i], !0, g, h)
				} else if (e !== b && (f = !0, ka.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
					return k.call(ka(a), c)
				})), c))
					for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
				return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
			},
			now: function() {
				return (new Date).getTime()
			},
			swap: function(a, b, c, d) {
				var e, f, g = {};
				for (f in b) g[f] = a.style[f], a.style[f] = b[f];
				e = c.apply(a, d || []);
				for (f in b) a.style[f] = g[f];
				return e
			}
		}), ka.ready.promise = function(b) {
			if (!U)
				if (U = ka.Deferred(), "complete" === Y.readyState) setTimeout(ka.ready);
				else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xa, !1), a.addEventListener("load", xa, !1);
			else {
				Y.attachEvent("onreadystatechange", xa), a.attachEvent("onload", xa);
				var c = !1;
				try {
					c = null == a.frameElement && Y.documentElement
				} catch (d) {}
				c && c.doScroll && ! function e() {
					if (!ka.isReady) {
						try {
							c.doScroll("left")
						} catch (a) {
							return setTimeout(e, 50)
						}
						ya(), ka.ready()
					}
				}()
			}
			return U.promise(b)
		}, ka.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
			aa["[object " + b + "]"] = b.toLowerCase()
		}), V = ka(Y),
		function(a, b) {
			function c(a, b, c, d) {
				var e, f, g, h, i, j, k, l, o, p;
				if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
				if (1 !== (h = b.nodeType) && 9 !== h) return [];
				if (I && !d) {
					if (e = ta.exec(a))
						if (g = e[1]) {
							if (9 === h) {
								if (f = b.getElementById(g), !f || !f.parentNode) return c;
								if (f.id === g) return c.push(f), c
							} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
						} else {
							if (e[2]) return aa.apply(c, b.getElementsByTagName(a)), c;
							if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return aa.apply(c, b.getElementsByClassName(g)), c
						}
					if (x.qsa && (!J || !J.test(a))) {
						if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
							for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wa, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + n(j[i]);
							o = na.test(a) && b.parentNode || b, p = j.join(",")
						}
						if (p) try {
							return aa.apply(c, o.querySelectorAll(p)), c
						} catch (q) {} finally {
							k || b.removeAttribute("id")
						}
					}
				}
				return v(a.replace(ja, "$1"), b, c, d)
			}

			function d() {
				function a(c, d) {
					return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d
				}
				var b = [];
				return a
			}

			function e(a) {
				return a[N] = !0, a
			}

			function f(a) {
				var b = G.createElement("div");
				try {
					return !!a(b)
				} catch (c) {
					return !1
				} finally {
					b.parentNode && b.parentNode.removeChild(b), b = null
				}
			}

			function g(a, b) {
				for (var c = a.split("|"), d = a.length; d--;) z.attrHandle[c[d]] = b
			}

			function h(a, b) {
				var c = b && a,
					d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
				if (d) return d;
				if (c)
					for (; c = c.nextSibling;)
						if (c === b) return -1;
				return a ? 1 : -1
			}

			function i(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return "input" === c && b.type === a
				}
			}

			function j(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return ("input" === c || "button" === c) && b.type === a
				}
			}

			function k(a) {
				return e(function(b) {
					return b = +b, e(function(c, d) {
						for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					})
				})
			}

			function l() {}

			function m(a, b) {
				var d, e, f, g, h, i, j, k = S[a + " "];
				if (k) return b ? 0 : k.slice(0);
				for (h = a, i = [], j = z.preFilter; h;) {
					(!d || (e = la.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ma.exec(h)) && (d = e.shift(), f.push({
						value: d,
						type: e[0].replace(ja, " ")
					}), h = h.slice(d.length));
					for (g in z.filter) !(e = ra[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
						value: d,
						type: g,
						matches: e
					}), h = h.slice(d.length));
					if (!d) break
				}
				return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
			}

			function n(a) {
				for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
				return d
			}

			function o(a, b, c) {
				var d = b.dir,
					e = c && "parentNode" === d,
					f = Q++;
				return b.first ? function(b, c, f) {
					for (; b = b[d];)
						if (1 === b.nodeType || e) return a(b, c, f)
				} : function(b, c, g) {
					var h, i, j, k = P + " " + f;
					if (g) {
						for (; b = b[d];)
							if ((1 === b.nodeType || e) && a(b, c, g)) return !0
					} else
						for (; b = b[d];)
							if (1 === b.nodeType || e)
								if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
									if ((h = i[1]) === !0 || h === y) return h === !0
								} else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0) return !0
				}
			}

			function p(a) {
				return a.length > 1 ? function(b, c, d) {
					for (var e = a.length; e--;)
						if (!a[e](b, c, d)) return !1;
					return !0
				} : a[0]
			}

			function q(a, b, c, d, e) {
				for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
				return g
			}

			function r(a, b, c, d, f, g) {
				return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
					var j, k, l, m = [],
						n = [],
						o = g.length,
						p = e || u(b || "*", h.nodeType ? [h] : h, []),
						r = !a || !e && b ? p : q(p, m, a, h, i),
						s = c ? f || (e ? a : o || d) ? [] : g : r;
					if (c && c(r, s, h, i), d)
						for (j = q(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
					if (e) {
						if (f || a) {
							if (f) {
								for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
								f(null, s = [], j, i)
							}
							for (k = s.length; k--;)(l = s[k]) && (j = f ? ca.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
						}
					} else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : aa.apply(g, s)
				})
			}

			function s(a) {
				for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
					return a === b
				}, g, !0), j = o(function(a) {
					return ca.call(b, a) > -1
				}, g, !0), k = [
					function(a, c, d) {
						return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
					}
				]; e > h; h++)
					if (c = z.relative[a[h].type]) k = [o(p(k), c)];
					else {
						if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
							for (d = ++h; e > d && !z.relative[a[d].type]; d++);
							return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
								value: " " === a[h - 2].type ? "*" : ""
							})).replace(ja, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
						}
						k.push(c)
					}
				return p(k)
			}

			function t(a, b) {
				var d = 0,
					f = b.length > 0,
					g = a.length > 0,
					h = function(e, h, i, j, k) {
						var l, m, n, o = [],
							p = 0,
							r = "0",
							s = e && [],
							t = null != k,
							u = D,
							v = e || g && z.find.TAG("*", k && h.parentNode || h),
							w = P += null == u ? 1 : Math.random() || .1;
						for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
							if (g && l) {
								for (m = 0; n = a[m++];)
									if (n(l, h, i)) {
										j.push(l);
										break
									}
								t && (P = w, y = ++d)
							}
							f && ((l = !n && l) && p--, e && s.push(l))
						}
						if (p += r, f && r !== p) {
							for (m = 0; n = b[m++];) n(s, o, h, i);
							if (e) {
								if (p > 0)
									for (; r--;) s[r] || o[r] || (o[r] = $.call(j));
								o = q(o)
							}
							aa.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
						}
						return t && (P = w, D = u), s
					};
				return f ? e(h) : h
			}

			function u(a, b, d) {
				for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
				return d
			}

			function v(a, b, c, d) {
				var e, f, g, h, i, j = m(a);
				if (!d && 1 === j.length) {
					if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
						if (b = (z.find.ID(g.matches[0].replace(xa, ya), b) || [])[0], !b) return c;
						a = a.slice(f.shift().value.length)
					}
					for (e = ra.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]);)
						if ((i = z.find[h]) && (d = i(g.matches[0].replace(xa, ya), na.test(f[0].type) && b.parentNode || b))) {
							if (f.splice(e, 1), a = d.length && n(f), !a) return aa.apply(c, d), c;
							break
						}
				}
				return C(a, j)(d, b, !I, c, na.test(a)), c
			}
			var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
				O = a.document,
				P = 0,
				Q = 0,
				R = d(),
				S = d(),
				T = d(),
				U = !1,
				V = function(a, b) {
					return a === b ? (U = !0, 0) : 0
				},
				W = typeof b,
				X = 1 << 31,
				Y = {}.hasOwnProperty,
				Z = [],
				$ = Z.pop,
				_ = Z.push,
				aa = Z.push,
				ba = Z.slice,
				ca = Z.indexOf || function(a) {
					for (var b = 0, c = this.length; c > b; b++)
						if (this[b] === a) return b;
					return -1
				},
				da = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ea = "[\\x20\\t\\r\\n\\f]",
				fa = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ga = fa.replace("w", "w#"),
				ha = "\\[" + ea + "*(" + fa + ")" + ea + "*(?:([*^$|!~]?=)" + ea + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ga + ")|)|)" + ea + "*\\]",
				ia = ":(" + fa + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ha.replace(3, 8) + ")*)|.*)\\)|)",
				ja = new RegExp("^" + ea + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ea + "+$", "g"),
				la = new RegExp("^" + ea + "*," + ea + "*"),
				ma = new RegExp("^" + ea + "*([>+~]|" + ea + ")" + ea + "*"),
				na = new RegExp(ea + "*[+~]"),
				oa = new RegExp("=" + ea + "*([^\\]'\"]*)" + ea + "*\\]", "g"),
				pa = new RegExp(ia),
				qa = new RegExp("^" + ga + "$"),
				ra = {
					ID: new RegExp("^#(" + fa + ")"),
					CLASS: new RegExp("^\\.(" + fa + ")"),
					TAG: new RegExp("^(" + fa.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ha),
					PSEUDO: new RegExp("^" + ia),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ea + "*(even|odd|(([+-]|)(\\d*)n|)" + ea + "*(?:([+-]|)" + ea + "*(\\d+)|))" + ea + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + da + ")$", "i"),
					needsContext: new RegExp("^" + ea + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ea + "*((?:-\\d)?\\d*)" + ea + "*\\)|)(?=[^-]|$)", "i")
				},
				sa = /^[^{]+\{\s*\[native \w/,
				ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ua = /^(?:input|select|textarea|button)$/i,
				va = /^h\d$/i,
				wa = /'|\\/g,
				xa = new RegExp("\\\\([\\da-f]{1,6}" + ea + "?|(" + ea + ")|.)", "ig"),
				ya = function(a, b, c) {
					var d = "0x" + b - 65536;
					return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
				};
			try {
				aa.apply(Z = ba.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
			} catch (za) {
				aa = {
					apply: Z.length ? function(a, b) {
						_.apply(a, ba.call(b))
					} : function(a, b) {
						for (var c = a.length, d = 0; a[c++] = b[d++];);
						a.length = c - 1
					}
				}
			}
			B = c.isXML = function(a) {
				var b = a && (a.ownerDocument || a).documentElement;
				return b ? "HTML" !== b.nodeName : !1
			}, x = c.support = {}, F = c.setDocument = function(a) {
				var b = a ? a.ownerDocument || a : O,
					c = b.defaultView;
				return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() {
					F()
				}), x.attributes = f(function(a) {
					return a.className = "i", !a.getAttribute("className")
				}), x.getElementsByTagName = f(function(a) {
					return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length
				}), x.getElementsByClassName = f(function(a) {
					return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
				}), x.getById = f(function(a) {
					return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length
				}), x.getById ? (z.find.ID = function(a, b) {
					if (typeof b.getElementById !== W && I) {
						var c = b.getElementById(a);
						return c && c.parentNode ? [c] : []
					}
				}, z.filter.ID = function(a) {
					var b = a.replace(xa, ya);
					return function(a) {
						return a.getAttribute("id") === b
					}
				}) : (delete z.find.ID, z.filter.ID = function(a) {
					var b = a.replace(xa, ya);
					return function(a) {
						var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
						return c && c.value === b
					}
				}), z.find.TAG = x.getElementsByTagName ? function(a, b) {
					return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0
				} : function(a, b) {
					var c, d = [],
						e = 0,
						f = b.getElementsByTagName(a);
					if ("*" === a) {
						for (; c = f[e++];) 1 === c.nodeType && d.push(c);
						return d
					}
					return f
				}, z.find.CLASS = x.getElementsByClassName && function(a, b) {
					return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0
				}, K = [], J = [], (x.qsa = sa.test(b.querySelectorAll)) && (f(function(a) {
					a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + ea + "*(?:value|" + da + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
				}), f(function(a) {
					var c = b.createElement("input");
					c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + ea + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
				})), (x.matchesSelector = sa.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
					x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ia)
				}), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), M = sa.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
					var c = 9 === a.nodeType ? a.documentElement : a,
						d = b && b.parentNode;
					return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
				} : function(a, b) {
					if (b)
						for (; b = b.parentNode;)
							if (b === a) return !0;
					return !1
				}, V = H.compareDocumentPosition ? function(a, c) {
					if (a === c) return U = !0, 0;
					var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
					return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? ca.call(E, a) - ca.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
				} : function(a, c) {
					var d, e = 0,
						f = a.parentNode,
						g = c.parentNode,
						i = [a],
						j = [c];
					if (a === c) return U = !0, 0;
					if (!f || !g) return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? ca.call(E, a) - ca.call(E, c) : 0;
					if (f === g) return h(a, c);
					for (d = a; d = d.parentNode;) i.unshift(d);
					for (d = c; d = d.parentNode;) j.unshift(d);
					for (; i[e] === j[e];) e++;
					return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
				}, b) : G
			}, c.matches = function(a, b) {
				return c(a, null, null, b)
			}, c.matchesSelector = function(a, b) {
				if ((a.ownerDocument || a) !== G && F(a), b = b.replace(oa, "='$1']"), x.matchesSelector && I && (!K || !K.test(b)) && (!J || !J.test(b))) try {
					var d = L.call(a, b);
					if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
				} catch (e) {}
				return c(b, G, null, [a]).length > 0
			}, c.contains = function(a, b) {
				return (a.ownerDocument || a) !== G && F(a), M(a, b)
			}, c.attr = function(a, c) {
				(a.ownerDocument || a) !== G && F(a);
				var d = z.attrHandle[c.toLowerCase()],
					e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
				return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
			}, c.error = function(a) {
				throw new Error("Syntax error, unrecognized expression: " + a)
			}, c.uniqueSort = function(a) {
				var b, c = [],
					d = 0,
					e = 0;
				if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
					for (; b = a[e++];) b === a[e] && (d = c.push(e));
					for (; d--;) a.splice(c[d], 1)
				}
				return a
			}, A = c.getText = function(a) {
				var b, c = "",
					d = 0,
					e = a.nodeType;
				if (e) {
					if (1 === e || 9 === e || 11 === e) {
						if ("string" == typeof a.textContent) return a.textContent;
						for (a = a.firstChild; a; a = a.nextSibling) c += A(a)
					} else if (3 === e || 4 === e) return a.nodeValue
				} else
					for (; b = a[d]; d++) c += A(b);
				return c
			}, z = c.selectors = {
				cacheLength: 50,
				createPseudo: e,
				match: ra,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(a) {
						return a[1] = a[1].replace(xa, ya), a[3] = (a[4] || a[5] || "").replace(xa, ya), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
					},
					CHILD: function(a) {
						return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
					},
					PSEUDO: function(a) {
						var c, d = !a[5] && a[2];
						return ra.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pa.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
					}
				},
				filter: {
					TAG: function(a) {
						var b = a.replace(xa, ya).toLowerCase();
						return "*" === a ? function() {
							return !0
						} : function(a) {
							return a.nodeName && a.nodeName.toLowerCase() === b
						}
					},
					CLASS: function(a) {
						var b = R[a + " "];
						return b || (b = new RegExp("(^|" + ea + ")" + a + "(" + ea + "|$)")) && R(a, function(a) {
							return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
						})
					},
					ATTR: function(a, b, d) {
						return function(e) {
							var f = c.attr(e, a);
							return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
						}
					},
					CHILD: function(a, b, c, d, e) {
						var f = "nth" !== a.slice(0, 3),
							g = "last" !== a.slice(-4),
							h = "of-type" === b;
						return 1 === d && 0 === e ? function(a) {
							return !!a.parentNode
						} : function(b, c, i) {
							var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
								q = b.parentNode,
								r = h && b.nodeName.toLowerCase(),
								s = !i && !h;
							if (q) {
								if (f) {
									for (; p;) {
										for (l = b; l = l[p];)
											if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
										o = p = "only" === a && !o && "nextSibling"
									}
									return !0
								}
								if (o = [g ? q.firstChild : q.lastChild], g && s) {
									for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
										if (1 === l.nodeType && ++m && l === b) {
											k[a] = [P, n, m];
											break
										}
								} else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
								else
									for (;
										(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
								return m -= e, m === d || m % d === 0 && m / d >= 0
							}
						}
					},
					PSEUDO: function(a, b) {
						var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
						return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
							for (var d, e = f(a, b), g = e.length; g--;) d = ca.call(a, e[g]), a[d] = !(c[d] = e[g])
						}) : function(a) {
							return f(a, 0, d)
						}) : f
					}
				},
				pseudos: {
					not: e(function(a) {
						var b = [],
							c = [],
							d = C(a.replace(ja, "$1"));
						return d[N] ? e(function(a, b, c, e) {
							for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
						}) : function(a, e, f) {
							return b[0] = a, d(b, null, f, c), !c.pop()
						}
					}),
					has: e(function(a) {
						return function(b) {
							return c(a, b).length > 0
						}
					}),
					contains: e(function(a) {
						return function(b) {
							return (b.textContent || b.innerText || A(b)).indexOf(a) > -1
						}
					}),
					lang: e(function(a) {
						return qa.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xa, ya).toLowerCase(),
							function(b) {
								var c;
								do
									if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
								while ((b = b.parentNode) && 1 === b.nodeType);
								return !1
							}
					}),
					target: function(b) {
						var c = a.location && a.location.hash;
						return c && c.slice(1) === b.id
					},
					root: function(a) {
						return a === H
					},
					focus: function(a) {
						return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
					},
					enabled: function(a) {
						return a.disabled === !1
					},
					disabled: function(a) {
						return a.disabled === !0
					},
					checked: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && !!a.checked || "option" === b && !!a.selected
					},
					selected: function(a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
					},
					empty: function(a) {
						for (a = a.firstChild; a; a = a.nextSibling)
							if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
						return !0
					},
					parent: function(a) {
						return !z.pseudos.empty(a)
					},
					header: function(a) {
						return va.test(a.nodeName)
					},
					input: function(a) {
						return ua.test(a.nodeName)
					},
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					text: function(a) {
						var b;
						return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
					},
					first: k(function() {
						return [0]
					}),
					last: k(function(a, b) {
						return [b - 1]
					}),
					eq: k(function(a, b, c) {
						return [0 > c ? c + b : c]
					}),
					even: k(function(a, b) {
						for (var c = 0; b > c; c += 2) a.push(c);
						return a
					}),
					odd: k(function(a, b) {
						for (var c = 1; b > c; c += 2) a.push(c);
						return a
					}),
					lt: k(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
						return a
					}),
					gt: k(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
						return a
					})
				}
			}, z.pseudos.nth = z.pseudos.eq;
			for (w in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) z.pseudos[w] = i(w);
			for (w in {
				submit: !0,
				reset: !0
			}) z.pseudos[w] = j(w);
			l.prototype = z.filters = z.pseudos, z.setFilters = new l, C = c.compile = function(a, b) {
				var c, d = [],
					e = [],
					f = T[a + " "];
				if (!f) {
					for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
					f = T(a, t(e, d))
				}
				return f
			}, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), x.sortDetached = f(function(a) {
				return 1 & a.compareDocumentPosition(G.createElement("div"))
			}), f(function(a) {
				return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
			}) || g("type|href|height|width", function(a, b, c) {
				return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
			}), x.attributes && f(function(a) {
				return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
			}) || g("value", function(a, b, c) {
				return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
			}), f(function(a) {
				return null == a.getAttribute("disabled")
			}) || g(da, function(a, b, c) {
				var d;
				return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null
			}), ka.find = c, ka.expr = c.selectors, ka.expr[":"] = ka.expr.pseudos, ka.unique = c.uniqueSort, ka.text = c.getText, ka.isXMLDoc = c.isXML, ka.contains = c.contains
		}(a);
	var za = {};
	ka.Callbacks = function(a) {
		a = "string" == typeof a ? za[a] || d(a) : ka.extend({}, a);
		var c, e, f, g, h, i, j = [],
			k = !a.once && [],
			l = function(b) {
				for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++)
					if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
						e = !1;
						break
					}
				c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
			},
			m = {
				add: function() {
					if (j) {
						var b = j.length;
						! function d(b) {
							ka.each(b, function(b, c) {
								var e = ka.type(c);
								"function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
							})
						}(arguments), c ? g = j.length : e && (i = b, l(e))
					}
					return this
				},
				remove: function() {
					return j && ka.each(arguments, function(a, b) {
						for (var d;
							(d = ka.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--)
					}), this
				},
				has: function(a) {
					return a ? ka.inArray(a, j) > -1 : !(!j || !j.length)
				},
				empty: function() {
					return j = [], g = 0, this
				},
				disable: function() {
					return j = k = e = b, this
				},
				disabled: function() {
					return !j
				},
				lock: function() {
					return k = b, e || m.disable(), this
				},
				locked: function() {
					return !k
				},
				fireWith: function(a, b) {
					return !j || f && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], c ? k.push(b) : l(b)), this
				},
				fire: function() {
					return m.fireWith(this, arguments), this
				},
				fired: function() {
					return !!f
				}
			};
		return m
	}, ka.extend({
		Deferred: function(a) {
			var b = [
					["resolve", "done", ka.Callbacks("once memory"), "resolved"],
					["reject", "fail", ka.Callbacks("once memory"), "rejected"],
					["notify", "progress", ka.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return ka.Deferred(function(c) {
							ka.each(b, function(b, f) {
								var g = f[0],
									h = ka.isFunction(a[b]) && a[b];
								e[f[1]](function() {
									var a = h && h.apply(this, arguments);
									a && ka.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return null != a ? ka.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, ka.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b, c, d, e = 0,
				f = fa.call(arguments),
				g = f.length,
				h = 1 !== g || a && ka.isFunction(a.promise) ? g : 0,
				i = 1 === h ? a : ka.Deferred(),
				j = function(a, c, d) {
					return function(e) {
						c[a] = this, d[a] = arguments.length > 1 ? fa.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
					}
				};
			if (g > 1)
				for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ka.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
			return h || i.resolveWith(d, f), i.promise()
		}
	}), ka.support = function(b) {
		var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
		if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
		f = Y.createElement("select"), h = f.appendChild(Y.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b.getSetAttribute = "t" !== l.className, b.leadingWhitespace = 3 === l.firstChild.nodeType, b.tbody = !l.getElementsByTagName("tbody").length, b.htmlSerialize = !!l.getElementsByTagName("link").length, b.style = /top/.test(d.getAttribute("style")), b.hrefNormalized = "/a" === d.getAttribute("href"), b.opacity = /^0.5/.test(d.style.opacity), b.cssFloat = !!d.style.cssFloat, b.checkOn = !!e.value, b.optSelected = h.selected, b.enctype = !!Y.createElement("form").enctype, b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, b.inlineBlockNeedsLayout = !1, b.shrinkWrapBlocks = !1, b.pixelPosition = !1, b.deleteExpando = !0, b.noCloneEvent = !0, b.reliableMarginRight = !0, b.boxSizingReliable = !0, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
		try {
			delete l.test
		} catch (m) {
			b.deleteExpando = !1
		}
		e = Y.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = Y.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function() {
			b.noCloneEvent = !1
		}), l.cloneNode(!0).click());
		for (k in {
			submit: !0,
			change: !0,
			focusin: !0
		}) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
		l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip;
		for (k in ka(b)) break;
		return b.ownLast = "0" !== k, ka(function() {
			var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				g = Y.getElementsByTagName("body")[0];
			g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ka.swap(g, null != g.style.zoom ? {
				zoom: 1
			} : {}, function() {
				b.boxSizing = 4 === l.offsetWidth
			}), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
				width: "4px"
			}).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
		}), c = f = g = h = d = e = null, b
	}({});
	var Aa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		Ba = /([A-Z])/g;
	ka.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(a) {
			return a = a.nodeType ? ka.cache[a[ka.expando]] : a[ka.expando], !!a && !h(a)
		},
		data: function(a, b, c) {
			return e(a, b, c)
		},
		removeData: function(a, b) {
			return f(a, b)
		},
		_data: function(a, b, c) {
			return e(a, b, c, !0)
		},
		_removeData: function(a, b) {
			return f(a, b, !0)
		},
		acceptData: function(a) {
			if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
			var b = a.nodeName && ka.noData[a.nodeName.toLowerCase()];
			return !b || b !== !0 && a.getAttribute("classid") === b
		}
	}), ka.fn.extend({
		data: function(a, c) {
			var d, e, f = null,
				h = 0,
				i = this[0];
			if (a === b) {
				if (this.length && (f = ka.data(i), 1 === i.nodeType && !ka._data(i, "parsedAttrs"))) {
					for (d = i.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = ka.camelCase(e.slice(5)), g(i, e, f[e]));
					ka._data(i, "parsedAttrs", !0)
				}
				return f
			}
			return "object" == typeof a ? this.each(function() {
				ka.data(this, a)
			}) : arguments.length > 1 ? this.each(function() {
				ka.data(this, a, c)
			}) : i ? g(i, a, ka.data(i, a)) : null
		},
		removeData: function(a) {
			return this.each(function() {
				ka.removeData(this, a)
			})
		}
	}), ka.extend({
		queue: function(a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = ka._data(a, b), c && (!d || ka.isArray(c) ? d = ka._data(a, b, ka.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = ka.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = ka._queueHooks(a, b),
				g = function() {
					ka.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return ka._data(a, c) || ka._data(a, c, {
				empty: ka.Callbacks("once memory").add(function() {
					ka._removeData(a, b + "queue"), ka._removeData(a, c)
				})
			})
		}
	}), ka.fn.extend({
		queue: function(a, c) {
			var d = 2;
			return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? ka.queue(this[0], a) : c === b ? this : this.each(function() {
				var b = ka.queue(this, a, c);
				ka._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && ka.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				ka.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			return a = ka.fx ? ka.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, c) {
			var d, e = 1,
				f = ka.Deferred(),
				g = this,
				h = this.length,
				i = function() {
					--e || f.resolveWith(g, [g])
				};
			for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = ka._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
			return i(), f.promise(c)
		}
	});
	var Ca, Da, Ea = /[\t\r\n\f]/g,
		Fa = /\r/g,
		Ga = /^(?:input|select|textarea|button|object)$/i,
		Ha = /^(?:a|area)$/i,
		Ia = /^(?:checked|selected)$/i,
		Ja = ka.support.getSetAttribute,
		Ka = ka.support.input;
	ka.fn.extend({
		attr: function(a, b) {
			return ka.access(this, ka.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				ka.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return ka.access(this, ka.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return a = ka.propFix[a] || a, this.each(function() {
				try {
					this[a] = b, delete this[a]
				} catch (c) {}
			})
		},
		addClass: function(a) {
			var b, c, d, e, f, g = 0,
				h = this.length,
				i = "string" == typeof a && a;
			if (ka.isFunction(a)) return this.each(function(b) {
				ka(this).addClass(a.call(this, b, this.className))
			});
			if (i)
				for (b = (a || "").match(ma) || []; h > g; g++)
					if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ea, " ") : " ")) {
						for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						c.className = ka.trim(d)
					}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g = 0,
				h = this.length,
				i = 0 === arguments.length || "string" == typeof a && a;
			if (ka.isFunction(a)) return this.each(function(b) {
				ka(this).removeClass(a.call(this, b, this.className))
			});
			if (i)
				for (b = (a || "").match(ma) || []; h > g; g++)
					if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ea, " ") : "")) {
						for (f = 0; e = b[f++];)
							for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
						c.className = a ? ka.trim(d) : ""
					}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ka.isFunction(a) ? this.each(function(c) {
				ka(this).toggleClass(a.call(this, c, this.className, b), b)
			}) : this.each(function() {
				if ("string" === c)
					for (var b, d = 0, e = ka(this), f = a.match(ma) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
				else(c === W || "boolean" === c) && (this.className && ka._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ka._data(this, "__className__") || "")
			})
		},
		hasClass: function(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Ea, " ").indexOf(b) >= 0) return !0;
			return !1
		},
		val: function(a) {
			var c, d, e, f = this[0]; {
				if (arguments.length) return e = ka.isFunction(a), this.each(function(c) {
					var f;
					1 === this.nodeType && (f = e ? a.call(this, c, ka(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : ka.isArray(f) && (f = ka.map(f, function(a) {
						return null == a ? "" : a + ""
					})), d = ka.valHooks[this.type] || ka.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
				});
				if (f) return d = ka.valHooks[f.type] || ka.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Fa, "") : null == c ? "" : c)
			}
		}
	}), ka.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = ka.find.attr(a, "value");
					return null != b ? b : a.text
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], (c.selected || i === e) && (ka.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !ka.nodeName(c.parentNode, "optgroup"))) {
							if (b = ka(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function(a, b) {
					for (var c, d, e = a.options, f = ka.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = ka.inArray(ka(d).val(), f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		},
		attr: function(a, c, d) {
			var e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === W ? ka.prop(a, c, d) : (1 === g && ka.isXMLDoc(a) || (c = c.toLowerCase(), e = ka.attrHooks[c] || (ka.expr.match.bool.test(c) ? Da : Ca)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = ka.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : void ka.removeAttr(a, c))
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
				f = b && b.match(ma);
			if (f && 1 === a.nodeType)
				for (; c = f[e++];) d = ka.propFix[c] || c, ka.expr.match.bool.test(c) ? Ka && Ja || !Ia.test(c) ? a[d] = !1 : a[ka.camelCase("default-" + c)] = a[d] = !1 : ka.attr(a, c, ""), a.removeAttribute(Ja ? c : d)
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!ka.support.radioValue && "radio" === b && ka.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(a, c, d) {
			var e, f, g, h = a.nodeType;
			if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !ka.isXMLDoc(a), g && (c = ka.propFix[c] || c, f = ka.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = ka.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : Ga.test(a.nodeName) || Ha.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		}
	}), Da = {
		set: function(a, b, c) {
			return b === !1 ? ka.removeAttr(a, c) : Ka && Ja || !Ia.test(c) ? a.setAttribute(!Ja && ka.propFix[c] || c, c) : a[ka.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, ka.each(ka.expr.match.bool.source.match(/\w+/g), function(a, c) {
		var d = ka.expr.attrHandle[c] || ka.find.attr;
		ka.expr.attrHandle[c] = Ka && Ja || !Ia.test(c) ? function(a, c, e) {
			var f = ka.expr.attrHandle[c],
				g = e ? b : (ka.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
			return ka.expr.attrHandle[c] = f, g
		} : function(a, c, d) {
			return d ? b : a[ka.camelCase("default-" + c)] ? c.toLowerCase() : null
		}
	}), Ka && Ja || (ka.attrHooks.value = {
		set: function(a, b, c) {
			return ka.nodeName(a, "input") ? void(a.defaultValue = b) : Ca && Ca.set(a, b, c)
		}
	}), Ja || (Ca = {
		set: function(a, c, d) {
			var e = a.getAttributeNode(d);
			return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b
		}
	}, ka.expr.attrHandle.id = ka.expr.attrHandle.name = ka.expr.attrHandle.coords = function(a, c, d) {
		var e;
		return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null
	}, ka.valHooks.button = {
		get: function(a, c) {
			var d = a.getAttributeNode(c);
			return d && d.specified ? d.value : b
		},
		set: Ca.set
	}, ka.attrHooks.contenteditable = {
		set: function(a, b, c) {
			Ca.set(a, "" === b ? !1 : b, c)
		}
	}, ka.each(["width", "height"], function(a, b) {
		ka.attrHooks[b] = {
			set: function(a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		}
	})), ka.support.hrefNormalized || ka.each(["href", "src"], function(a, b) {
		ka.propHooks[b] = {
			get: function(a) {
				return a.getAttribute(b, 4)
			}
		}
	}), ka.support.style || (ka.attrHooks.style = {
		get: function(a) {
			return a.style.cssText || b
		},
		set: function(a, b) {
			return a.style.cssText = b + ""
		}
	}), ka.support.optSelected || (ka.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	}), ka.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ka.propFix[this.toLowerCase()] = this
	}), ka.support.enctype || (ka.propFix.enctype = "encoding"), ka.each(["radio", "checkbox"], function() {
		ka.valHooks[this] = {
			set: function(a, b) {
				return ka.isArray(b) ? a.checked = ka.inArray(ka(a).val(), b) >= 0 : void 0
			}
		}, ka.support.checkOn || (ka.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var La = /^(?:input|select|textarea)$/i,
		Ma = /^key/,
		Na = /^(?:mouse|contextmenu)|click/,
		Oa = /^(?:focusinfocus|focusoutblur)$/,
		Pa = /^([^.]*)(?:\.(.+)|)$/;
	ka.event = {
		global: {},
		add: function(a, c, d, e, f) {
			var g, h, i, j, k, l, m, n, o, p, q, r = ka._data(a);
			if (r) {
				for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = ka.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
					return typeof ka === W || a && ka.event.triggered === a.type ? b : ka.event.dispatch.apply(l.elem, arguments)
				}, l.elem = a), c = (c || "").match(ma) || [""], i = c.length; i--;) g = Pa.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), o && (k = ka.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = ka.event.special[o] || {}, m = ka.extend({
					type: o,
					origType: q,
					data: e,
					handler: d,
					guid: d.guid,
					selector: f,
					needsContext: f && ka.expr.match.needsContext.test(f),
					namespace: p.join(".")
				}, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), ka.event.global[o] = !0);
				a = null
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = ka.hasData(a) && ka._data(a);
			if (q && (k = q.events)) {
				for (b = (b || "").match(ma) || [""], j = b.length; j--;)
					if (h = Pa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
						for (l = ka.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
						i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ka.removeEvent(a, n, q.handle), delete k[n])
					} else
						for (n in k) ka.event.remove(a, n + b[j], c, d, !0);
				ka.isEmptyObject(k) && (delete q.handle, ka._removeData(a, "events"))
			}
		},
		trigger: function(c, d, e, f) {
			var g, h, i, j, k, l, m, n = [e || Y],
				o = ia.call(c, "type") ? c.type : c,
				p = ia.call(c, "namespace") ? c.namespace.split(".") : [];
			if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Oa.test(o + ka.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = o.indexOf(":") < 0 && "on" + o, c = c[ka.expando] ? c : new ka.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : ka.makeArray(d, [c]), k = ka.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
				if (!f && !k.noBubble && !ka.isWindow(e)) {
					for (j = k.delegateType || o, Oa.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
					l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a)
				}
				for (m = 0;
					(i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (ka._data(i, "events") || {})[c.type] && ka._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && ka.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
				if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && ka.acceptData(e) && h && e[o] && !ka.isWindow(e)) {
					l = e[h], l && (e[h] = null), ka.event.triggered = o;
					try {
						e[o]()
					} catch (q) {}
					ka.event.triggered = b, l && (e[h] = l)
				}
				return c.result
			}
		},
		dispatch: function(a) {
			a = ka.event.fix(a);
			var c, d, e, f, g, h = [],
				i = fa.call(arguments),
				j = (ka._data(this, "events") || {})[a.type] || [],
				k = ka.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				for (h = ka.event.handlers.call(this, a, j), c = 0;
					(f = h[c++]) && !a.isPropagationStopped();)
					for (a.currentTarget = f.elem, g = 0;
						(e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((ka.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(a, c) {
			var d, e, f, g, h = [],
				i = c.delegateCount,
				j = a.target;
			if (i && j.nodeType && (!a.button || "click" !== a.type))
				for (; j != this; j = j.parentNode || this)
					if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
						for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? ka(d, this).index(j) >= 0 : ka.find(d, this, null, [j]).length), f[d] && f.push(e);
						f.length && h.push({
							elem: j,
							handlers: f
						})
					}
			return i < c.length && h.push({
				elem: this,
				handlers: c.slice(i)
			}), h
		},
		fix: function(a) {
			if (a[ka.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ka.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
			return a.target || (a.target = f.srcElement || Y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, c) {
				var d, e, f, g = c.button,
					h = c.fromElement;
				return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== k() && this.focus) try {
						return this.focus(), !1
					} catch (a) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === k() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return ka.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(a) {
					return ka.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(a) {
					a.result !== b && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var e = ka.extend(new ka.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? ka.event.trigger(e, null, b) : ka.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, ka.removeEvent = Y.removeEventListener ? function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function(a, b, c) {
		var d = "on" + b;
		a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c))
	}, ka.Event = function(a, b) {
		return this instanceof ka.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, b && ka.extend(this, b), this.timeStamp = a && a.timeStamp || ka.now(), void(this[ka.expando] = !0)) : new ka.Event(a, b)
	}, ka.Event.prototype = {
		isDefaultPrevented: j,
		isPropagationStopped: j,
		isImmediatePropagationStopped: j,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = i, this.stopPropagation()
		}
	}, ka.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		ka.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !ka.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), ka.support.submitBubbles || (ka.event.special.submit = {
		setup: function() {
			return ka.nodeName(this, "form") ? !1 : void ka.event.add(this, "click._submit keypress._submit", function(a) {
				var c = a.target,
					d = ka.nodeName(c, "input") || ka.nodeName(c, "button") ? c.form : b;
				d && !ka._data(d, "submitBubbles") && (ka.event.add(d, "submit._submit", function(a) {
					a._submit_bubble = !0
				}), ka._data(d, "submitBubbles", !0))
			})
		},
		postDispatch: function(a) {
			a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ka.event.simulate("submit", this.parentNode, a, !0))
		},
		teardown: function() {
			return ka.nodeName(this, "form") ? !1 : void ka.event.remove(this, "._submit")
		}
	}), ka.support.changeBubbles || (ka.event.special.change = {
		setup: function() {
			return La.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ka.event.add(this, "propertychange._change", function(a) {
				"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
			}), ka.event.add(this, "click._change", function(a) {
				this._just_changed && !a.isTrigger && (this._just_changed = !1), ka.event.simulate("change", this, a, !0)
			})), !1) : void ka.event.add(this, "beforeactivate._change", function(a) {
				var b = a.target;
				La.test(b.nodeName) && !ka._data(b, "changeBubbles") && (ka.event.add(b, "change._change", function(a) {
					!this.parentNode || a.isSimulated || a.isTrigger || ka.event.simulate("change", this.parentNode, a, !0)
				}), ka._data(b, "changeBubbles", !0))
			})
		},
		handle: function(a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return ka.event.remove(this, "._change"), !La.test(this.nodeName)
		}
	}), ka.support.focusinBubbles || ka.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = 0,
			d = function(a) {
				ka.event.simulate(b, a.target, ka.event.fix(a), !0)
			};
		ka.event.special[b] = {
			setup: function() {
				0 === c++ && Y.addEventListener(a, d, !0)
			},
			teardown: function() {
				0 === --c && Y.removeEventListener(a, d, !0)
			}
		}
	}), ka.fn.extend({
		on: function(a, c, d, e, f) {
			var g, h;
			if ("object" == typeof a) {
				"string" != typeof c && (d = d || c, c = b);
				for (g in a) this.on(g, c, d, a[g], f);
				return this
			}
			if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
			else if (!e) return this;
			return 1 === f && (h = e, e = function(a) {
				return ka().off(a), h.apply(this, arguments)
			}, e.guid = h.guid || (h.guid = ka.guid++)), this.each(function() {
				ka.event.add(this, a, e, d, c)
			})
		},
		one: function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function(a, c, d) {
			var e, f;
			if (a && a.preventDefault && a.handleObj) return e = a.handleObj, ka(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
			if ("object" == typeof a) {
				for (f in a) this.off(f, c, a[f]);
				return this
			}
			return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function() {
				ka.event.remove(this, a, d, c)
			})
		},
		trigger: function(a, b) {
			return this.each(function() {
				ka.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			return c ? ka.event.trigger(a, b, c, !0) : void 0
		}
	});
	var Qa = /^.[^:#\[\.,]*$/,
		Ra = /^(?:parents|prev(?:Until|All))/,
		Sa = ka.expr.match.needsContext,
		Ta = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ka.fn.extend({
		find: function(a) {
			var b, c = [],
				d = this,
				e = d.length;
			if ("string" != typeof a) return this.pushStack(ka(a).filter(function() {
				for (b = 0; e > b; b++)
					if (ka.contains(d[b], this)) return !0
			}));
			for (b = 0; e > b; b++) ka.find(a, d[b], c);
			return c = this.pushStack(e > 1 ? ka.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
		},
		has: function(a) {
			var b, c = ka(a, this),
				d = c.length;
			return this.filter(function() {
				for (b = 0; d > b; b++)
					if (ka.contains(this, c[b])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(m(this, a || [], !0))
		},
		filter: function(a) {
			return this.pushStack(m(this, a || [], !1))
		},
		is: function(a) {
			return !!m(this, "string" == typeof a && Sa.test(a) ? ka(a) : a || [], !1).length
		},
		closest: function(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = Sa.test(a) || "string" != typeof a ? ka(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ka.find.matchesSelector(c, a))) {
						c = f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? ka.unique(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? ka.inArray(this[0], ka(a)) : ka.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			var c = "string" == typeof a ? ka(a, b) : ka.makeArray(a && a.nodeType ? [a] : a),
				d = ka.merge(this.get(), c);
			return this.pushStack(ka.unique(d))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}), ka.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null;
		},
		parents: function(a) {
			return ka.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return ka.dir(a, "parentNode", c)
		},
		next: function(a) {
			return l(a, "nextSibling")
		},
		prev: function(a) {
			return l(a, "previousSibling")
		},
		nextAll: function(a) {
			return ka.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return ka.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return ka.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return ka.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return ka.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return ka.sibling(a.firstChild)
		},
		contents: function(a) {
			return ka.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ka.merge([], a.childNodes)
		}
	}, function(a, b) {
		ka.fn[a] = function(c, d) {
			var e = ka.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ka.filter(d, e)), this.length > 1 && (Ta[a] || (e = ka.unique(e)), Ra.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	}), ka.extend({
		filter: function(a, b, c) {
			var d = b[0];
			return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ka.find.matchesSelector(d, a) ? [d] : [] : ka.find.matches(a, ka.grep(b, function(a) {
				return 1 === a.nodeType
			}))
		},
		dir: function(a, c, d) {
			for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ka(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
			return e
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	});
	var Ua = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Va = / jQuery\d+="(?:null|\d+)"/g,
		Wa = new RegExp("<(?:" + Ua + ")[\\s/>]", "i"),
		Xa = /^\s+/,
		Ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Za = /<([\w:]+)/,
		$a = /<tbody/i,
		_a = /<|&#?\w+;/,
		ab = /<(?:script|style|link)/i,
		bb = /^(?:checkbox|radio)$/i,
		cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
		db = /^$|\/(?:java|ecma)script/i,
		eb = /^true\/(.*)/,
		fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		gb = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ka.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		hb = n(Y),
		ib = hb.appendChild(Y.createElement("div"));
	gb.optgroup = gb.option, gb.tbody = gb.tfoot = gb.colgroup = gb.caption = gb.thead, gb.th = gb.td, ka.fn.extend({
		text: function(a) {
			return ka.access(this, function(a) {
				return a === b ? ka.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a))
			}, null, a, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = o(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = o(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function(a, b) {
			for (var c, d = a ? ka.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ka.cleanData(u(c)), c.parentNode && (b && ka.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				for (1 === a.nodeType && ka.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
				a.options && ka.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return ka.clone(this, a, b)
			})
		},
		html: function(a) {
			return ka.access(this, function(a) {
				var c = this[0] || {},
					d = 0,
					e = this.length;
				if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Va, "") : b;
				if ("string" == typeof a && !ab.test(a) && (ka.support.htmlSerialize || !Wa.test(a)) && (ka.support.leadingWhitespace || !Xa.test(a)) && !gb[(Za.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Ya, "<$1></$2>");
					try {
						for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (ka.cleanData(u(c, !1)), c.innerHTML = a);
						c = 0
					} catch (f) {}
				}
				c && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = ka.map(this, function(a) {
					return [a.nextSibling, a.parentNode]
				}),
				b = 0;
			return this.domManip(arguments, function(c) {
				var d = a[b++],
					e = a[b++];
				e && (d && d.parentNode !== e && (d = this.nextSibling), ka(this).remove(), e.insertBefore(c, d))
			}, !0), b ? this : this.remove()
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, b, c) {
			a = da.apply([], a);
			var d, e, f, g, h, i, j = 0,
				k = this.length,
				l = this,
				m = k - 1,
				n = a[0],
				o = ka.isFunction(n);
			if (o || !(1 >= k || "string" != typeof n || ka.support.checkClone) && cb.test(n)) return this.each(function(d) {
				var e = l.eq(d);
				o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c)
			});
			if (k && (i = ka.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
				for (g = ka.map(u(i, "script"), p), f = g.length; k > j; j++) e = i, j !== m && (e = ka.clone(e, !0, !0), f && ka.merge(g, u(e, "script"))), b.call(this[j], e, j);
				if (f)
					for (h = g[g.length - 1].ownerDocument, ka.map(g, q), j = 0; f > j; j++) e = g[j], db.test(e.type || "") && !ka._data(e, "globalEval") && ka.contains(h, e) && (e.src ? ka._evalUrl(e.src) : ka.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fb, "")));
				i = d = null
			}
			return this
		}
	}), ka.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		ka.fn[a] = function(a) {
			for (var c, d = 0, e = [], f = ka(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ka(f[d])[b](c), ea.apply(e, c.get());
			return this.pushStack(e)
		}
	}), ka.extend({
		clone: function(a, b, c) {
			var d, e, f, g, h, i = ka.contains(a.ownerDocument, a);
			if (ka.support.html5Clone || ka.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ib.innerHTML = a.outerHTML, ib.removeChild(f = ib.firstChild)), !(ka.support.noCloneEvent && ka.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ka.isXMLDoc(a)))
				for (d = u(f), h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
			if (b)
				if (c)
					for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]);
				else s(a, f);
			return d = u(f, "script"), d.length > 0 && r(d, !i && u(a, "script")), d = h = e = null, f
		},
		buildFragment: function(a, b, c, d) {
			for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++)
				if (f = a[p], f || 0 === f)
					if ("object" === ka.type(f)) ka.merge(o, f.nodeType ? [f] : f);
					else if (_a.test(f)) {
				for (h = h || m.appendChild(b.createElement("div")), i = (Za.exec(f) || ["", ""])[1].toLowerCase(), k = gb[i] || gb._default, h.innerHTML = k[1] + f.replace(Ya, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
				if (!ka.support.leadingWhitespace && Xa.test(f) && o.push(b.createTextNode(Xa.exec(f)[0])), !ka.support.tbody)
					for (f = "table" !== i || $a.test(f) ? "<table>" !== k[1] || $a.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ka.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
				for (ka.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
				h = m.lastChild
			} else o.push(b.createTextNode(f));
			for (h && m.removeChild(h), ka.support.appendChecked || ka.grep(u(o, "input"), v), p = 0; f = o[p++];)
				if ((!d || -1 === ka.inArray(f, d)) && (g = ka.contains(f.ownerDocument, f), h = u(m.appendChild(f), "script"), g && r(h), c))
					for (e = 0; f = h[e++];) db.test(f.type || "") && c.push(f);
			return h = null, m
		},
		cleanData: function(a, b) {
			for (var c, d, e, f, g = 0, h = ka.expando, i = ka.cache, j = ka.support.deleteExpando, k = ka.event.special; null != (c = a[g]); g++)
				if ((b || ka.acceptData(c)) && (e = c[h], f = e && i[e])) {
					if (f.events)
						for (d in f.events) k[d] ? ka.event.remove(c, d) : ka.removeEvent(c, d, f.handle);
					i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, ba.push(e))
				}
		},
		_evalUrl: function(a) {
			return ka.ajax({
				url: a,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), ka.fn.extend({
		wrapAll: function(a) {
			if (ka.isFunction(a)) return this.each(function(b) {
				ka(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = ka(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return ka.isFunction(a) ? this.each(function(b) {
				ka(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = ka(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = ka.isFunction(a);
			return this.each(function(c) {
				ka(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ka.nodeName(this, "body") || ka(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var jb, kb, lb, mb = /alpha\([^)]*\)/i,
		nb = /opacity\s*=\s*([^)]*)/,
		ob = /^(top|right|bottom|left)$/,
		pb = /^(none|table(?!-c[ea]).+)/,
		qb = /^margin/,
		rb = new RegExp("^(" + la + ")(.*)$", "i"),
		sb = new RegExp("^(" + la + ")(?!px)[a-z%]+$", "i"),
		tb = new RegExp("^([+-])=(" + la + ")", "i"),
		ub = {
			BODY: "block"
		},
		vb = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		wb = {
			letterSpacing: 0,
			fontWeight: 400
		},
		xb = ["Top", "Right", "Bottom", "Left"],
		yb = ["Webkit", "O", "Moz", "ms"];
	ka.fn.extend({
		css: function(a, c) {
			return ka.access(this, function(a, c, d) {
				var e, f, g = {},
					h = 0;
				if (ka.isArray(c)) {
					for (f = kb(a), e = c.length; e > h; h++) g[c[h]] = ka.css(a, c[h], !1, f);
					return g
				}
				return d !== b ? ka.style(a, c, d) : ka.css(a, c)
			}, a, c, arguments.length > 1)
		},
		show: function() {
			return y(this, !0)
		},
		hide: function() {
			return y(this)
		},
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				x(this) ? ka(this).show() : ka(this).hide()
			})
		}
	}), ka.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = lb(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ka.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, c, d, e) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var f, g, h, i = ka.camelCase(c),
					j = a.style;
				if (c = ka.cssProps[i] || (ka.cssProps[i] = w(j, i)), h = ka.cssHooks[c] || ka.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
				if (g = typeof d, "string" === g && (f = tb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(ka.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || ka.cssNumber[i] || (d += "px"), ka.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
					j[c] = d
				} catch (k) {}
			}
		},
		css: function(a, c, d, e) {
			var f, g, h, i = ka.camelCase(c);
			return c = ka.cssProps[i] || (ka.cssProps[i] = w(a.style, i)), h = ka.cssHooks[c] || ka.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lb(a, c, e)), "normal" === g && c in wb && (g = wb[c]), "" === d || d ? (f = parseFloat(g), d === !0 || ka.isNumeric(f) ? f || 0 : g) : g
		}
	}), a.getComputedStyle ? (kb = function(b) {
		return a.getComputedStyle(b, null)
	}, lb = function(a, c, d) {
		var e, f, g, h = d || kb(a),
			i = h ? h.getPropertyValue(c) || h[c] : b,
			j = a.style;
		return h && ("" !== i || ka.contains(a.ownerDocument, a) || (i = ka.style(a, c)), sb.test(i) && qb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
	}) : Y.documentElement.currentStyle && (kb = function(a) {
		return a.currentStyle
	}, lb = function(a, c, d) {
		var e, f, g, h = d || kb(a),
			i = h ? h[c] : b,
			j = a.style;
		return null == i && j && j[c] && (i = j[c]), sb.test(i) && !ob.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
	}), ka.each(["height", "width"], function(a, b) {
		ka.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? 0 === a.offsetWidth && pb.test(ka.css(a, "display")) ? ka.swap(a, vb, function() {
					return B(a, b, d)
				}) : B(a, b, d) : void 0
			},
			set: function(a, c, d) {
				var e = d && kb(a);
				return z(a, c, d ? A(a, b, d, ka.support.boxSizing && "border-box" === ka.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), ka.support.opacity || (ka.cssHooks.opacity = {
		get: function(a, b) {
			return nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = ka.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === ka.trim(f.replace(mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mb.test(f) ? f.replace(mb, e) : f + " " + e)
		}
	}), ka(function() {
		ka.support.reliableMarginRight || (ka.cssHooks.marginRight = {
			get: function(a, b) {
				return b ? ka.swap(a, {
					display: "inline-block"
				}, lb, [a, "marginRight"]) : void 0
			}
		}), !ka.support.pixelPosition && ka.fn.position && ka.each(["top", "left"], function(a, b) {
			ka.cssHooks[b] = {
				get: function(a, c) {
					return c ? (c = lb(a, b), sb.test(c) ? ka(a).position()[b] + "px" : c) : void 0
				}
			}
		})
	}), ka.expr && ka.expr.filters && (ka.expr.filters.hidden = function(a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ka.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || ka.css(a, "display"))
	}, ka.expr.filters.visible = function(a) {
		return !ka.expr.filters.hidden(a)
	}), ka.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		ka.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xb[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, qb.test(a) || (ka.cssHooks[a + b].set = z)
	});
	var zb = /%20/g,
		Ab = /\[\]$/,
		Bb = /\r?\n/g,
		Cb = /^(?:submit|button|image|reset|file)$/i,
		Db = /^(?:input|select|textarea|keygen)/i;
	ka.fn.extend({
		serialize: function() {
			return ka.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = ka.prop(this, "elements");
				return a ? ka.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !ka(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !bb.test(a))
			}).map(function(a, b) {
				var c = ka(this).val();
				return null == c ? null : ka.isArray(c) ? ka.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(Bb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(Bb, "\r\n")
				}
			}).get()
		}
	}), ka.param = function(a, c) {
		var d, e = [],
			f = function(a, b) {
				b = ka.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (c === b && (c = ka.ajaxSettings && ka.ajaxSettings.traditional), ka.isArray(a) || a.jquery && !ka.isPlainObject(a)) ka.each(a, function() {
			f(this.name, this.value)
		});
		else
			for (d in a) E(d, a[d], c, f);
		return e.join("&").replace(zb, "+")
	}, ka.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		ka.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), ka.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var Eb, Fb, Gb = ka.now(),
		Hb = /\?/,
		Ib = /#.*$/,
		Jb = /([?&])_=[^&]*/,
		Kb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Lb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Mb = /^(?:GET|HEAD)$/,
		Nb = /^\/\//,
		Ob = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Pb = ka.fn.load,
		Qb = {},
		Rb = {},
		Sb = "*/".concat("*");
	try {
		Fb = X.href
	} catch (Tb) {
		Fb = Y.createElement("a"), Fb.href = "", Fb = Fb.href
	}
	Eb = Ob.exec(Fb.toLowerCase()) || [], ka.fn.load = function(a, c, d) {
		if ("string" != typeof a && Pb) return Pb.apply(this, arguments);
		var e, f, g, h = this,
			i = a.indexOf(" ");
		return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), ka.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && ka.ajax({
			url: a,
			type: g,
			dataType: "html",
			data: c
		}).done(function(a) {
			f = arguments, h.html(e ? ka("<div>").append(ka.parseHTML(a)).find(e) : a)
		}).complete(d && function(a, b) {
			h.each(d, f || [a.responseText, b, a])
		}), this
	}, ka.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
		ka.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), ka.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Fb,
			type: "GET",
			isLocal: Lb.test(Eb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Sb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ka.parseJSON,
				"text xml": ka.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? H(H(a, ka.ajaxSettings), b) : H(ka.ajaxSettings, a)
		},
		ajaxPrefilter: F(Qb),
		ajaxTransport: F(Rb),
		ajax: function(a, c) {
			function d(a, c, d, e) {
				var f, l, s, t, v, x = c;
				2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ka.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (ka.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --ka.active || ka.event.trigger("ajaxStop")))
			}
			"object" == typeof a && (c = a, a = b), c = c || {};
			var e, f, g, h, i, j, k, l, m = ka.ajaxSetup({}, c),
				n = m.context || m,
				o = m.context && (n.nodeType || n.jquery) ? ka(n) : ka.event,
				p = ka.Deferred(),
				q = ka.Callbacks("once memory"),
				r = m.statusCode || {},
				s = {},
				t = {},
				u = 0,
				v = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if (2 === u) {
							if (!l)
								for (l = {}; b = Kb.exec(h);) l[b[1].toLowerCase()] = b[2];
							b = l[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return 2 === u ? h : null
					},
					setRequestHeader: function(a, b) {
						var c = a.toLowerCase();
						return u || (a = t[c] = t[c] || a, s[a] = b), this
					},
					overrideMimeType: function(a) {
						return u || (m.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if (a)
							if (2 > u)
								for (b in a) r[b] = [r[b], a[b]];
							else w.always(a[w.status]);
						return this
					},
					abort: function(a) {
						var b = a || v;
						return k && k.abort(b), d(0, b), this
					}
				};
			if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fb) + "").replace(Ib, "").replace(Nb, Eb[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = ka.trim(m.dataType || "*").toLowerCase().match(ma) || [""], null == m.crossDomain && (e = Ob.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Eb[1] && e[2] === Eb[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Eb[3] || ("http:" === Eb[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = ka.param(m.data, m.traditional)), G(Qb, m, c, w), 2 === u) return w;
			j = m.global, j && 0 === ka.active++ && ka.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mb.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hb.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jb.test(g) ? g.replace(Jb, "$1_=" + Gb++) : g + (Hb.test(g) ? "&" : "?") + "_=" + Gb++)), m.ifModified && (ka.lastModified[g] && w.setRequestHeader("If-Modified-Since", ka.lastModified[g]), ka.etag[g] && w.setRequestHeader("If-None-Match", ka.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : m.accepts["*"]);
			for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
			if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
			v = "abort";
			for (f in {
				success: 1,
				error: 1,
				complete: 1
			}) w[f](m[f]);
			if (k = G(Rb, m, c, w)) {
				w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
					w.abort("timeout")
				}, m.timeout));
				try {
					u = 1, k.send(s, d)
				} catch (x) {
					if (!(2 > u)) throw x;
					d(-1, x)
				}
			} else d(-1, "No Transport");
			return w
		},
		getJSON: function(a, b, c) {
			return ka.get(a, b, c, "json")
		},
		getScript: function(a, c) {
			return ka.get(a, b, c, "script")
		}
	}), ka.each(["get", "post"], function(a, c) {
		ka[c] = function(a, d, e, f) {
			return ka.isFunction(d) && (f = f || e, e = d, d = b), ka.ajax({
				url: a,
				type: c,
				dataType: f,
				data: d,
				success: e
			})
		}
	}), ka.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(a) {
				return ka.globalEval(a), a
			}
		}
	}), ka.ajaxPrefilter("script", function(a) {
		a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), ka.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var c, d = Y.head || ka("head")[0] || Y.documentElement;
			return {
				send: function(b, e) {
					c = Y.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
						(b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
					}, d.insertBefore(c, d.firstChild)
				},
				abort: function() {
					c && c.onload(b, !0)
				}
			}
		}
	});
	var Ub = [],
		Vb = /(=)\?(?=&|$)|\?\?/;
	ka.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = Ub.pop() || ka.expando + "_" + Gb++;
			return this[a] = !0, a
		}
	}), ka.ajaxPrefilter("json jsonp", function(c, d, e) {
		var f, g, h, i = c.jsonp !== !1 && (Vb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vb.test(c.data) && "data");
		return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = ka.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vb, "$1" + f) : c.jsonp !== !1 && (c.url += (Hb.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
			return h || ka.error(f + " was not called"), h[0]
		}, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
			h = arguments
		}, e.always(function() {
			a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Ub.push(f)), h && ka.isFunction(g) && g(h[0]), h = g = b
		}), "script") : void 0
	});
	var Wb, Xb, Yb = 0,
		Zb = a.ActiveXObject && function() {
			var a;
			for (a in Wb) Wb[a](b, !0)
		};
	ka.ajaxSettings.xhr = a.ActiveXObject ? function() {
		return !this.isLocal && K() || L()
	} : K, Xb = ka.ajaxSettings.xhr(), ka.support.cors = !!Xb && "withCredentials" in Xb, Xb = ka.support.ajax = !!Xb, Xb && ka.ajaxTransport(function(c) {
		if (!c.crossDomain || ka.support.cors) {
			var d;
			return {
				send: function(e, f) {
					var g, h, i = c.xhr();
					if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
						for (h in c.xhrFields) i[h] = c.xhrFields[h];
					c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (h in e) i.setRequestHeader(h, e[h])
					} catch (j) {}
					i.send(c.hasContent && c.data || null), d = function(a, e) {
						var h, j, k, l;
						try {
							if (d && (e || 4 === i.readyState))
								if (d = b, g && (i.onreadystatechange = ka.noop, Zb && delete Wb[g]), e) 4 !== i.readyState && i.abort();
								else {
									l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
									try {
										k = i.statusText
									} catch (m) {
										k = ""
									}
									h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
								}
						} catch (n) {
							e || f(-1, n)
						}
						l && f(h, k, l, j)
					}, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yb, Zb && (Wb || (Wb = {}, ka(a).unload(Zb)), Wb[g] = d), i.onreadystatechange = d) : d()
				},
				abort: function() {
					d && d(b, !0)
				}
			}
		}
	});
	var $b, _b, ac = /^(?:toggle|show|hide)$/,
		bc = new RegExp("^(?:([+-])=|)(" + la + ")([a-z%]*)$", "i"),
		cc = /queueHooks$/,
		dc = [Q],
		ec = {
			"*": [
				function(a, b) {
					var c = this.createTween(a, b),
						d = c.cur(),
						e = bc.exec(b),
						f = e && e[3] || (ka.cssNumber[a] ? "" : "px"),
						g = (ka.cssNumber[a] || "px" !== f && +d) && bc.exec(ka.css(c.elem, a)),
						h = 1,
						i = 20;
					if (g && g[3] !== f) {
						f = f || g[3], e = e || [], g = +d || 1;
						do h = h || ".5", g /= h, ka.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
					}
					return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
				}
			]
		};
	ka.Animation = ka.extend(O, {
		tweener: function(a, b) {
			ka.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
		},
		prefilter: function(a, b) {
			b ? dc.unshift(a) : dc.push(a)
		}
	}), ka.Tween = R, R.prototype = {
		constructor: R,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ka.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = R.propHooks[this.prop];
			return a && a.get ? a.get(this) : R.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = R.propHooks[this.prop];
			return this.options.duration ? this.pos = b = ka.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : R.propHooks._default.set(this), this
		}
	}, R.prototype.init.prototype = R.prototype, R.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ka.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function(a) {
				ka.fx.step[a.prop] ? ka.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ka.cssProps[a.prop]] || ka.cssHooks[a.prop]) ? ka.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, ka.each(["toggle", "show", "hide"], function(a, b) {
		var c = ka.fn[b];
		ka.fn[b] = function(a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e)
		}
	}), ka.fn.extend({
		fadeTo: function(a, b, c, d) {
			return this.filter(x).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = ka.isEmptyObject(a),
				f = ka.speed(b, c, d),
				g = function() {
					var b = O(this, ka.extend({}, a), f);
					(e || ka._data(this, "finish")) && b.stop(!0)
				};
			return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function(a, c, d) {
			var e = function(a) {
				var b = a.stop;
				delete a.stop, b(d)
			};
			return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
				var b = !0,
					c = null != a && a + "queueHooks",
					f = ka.timers,
					g = ka._data(this);
				if (c) g[c] && g[c].stop && e(g[c]);
				else
					for (c in g) g[c] && g[c].stop && cc.test(c) && e(g[c]);
				for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
				(b || !d) && ka.dequeue(this, a)
			})
		},
		finish: function(a) {
			return a !== !1 && (a = a || "fx"), this.each(function() {
				var b, c = ka._data(this),
					d = c[a + "queue"],
					e = c[a + "queueHooks"],
					f = ka.timers,
					g = d ? d.length : 0;
				for (c.finish = !0, ka.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}), ka.each({
		slideDown: S("show"),
		slideUp: S("hide"),
		slideToggle: S("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		ka.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), ka.speed = function(a, b, c) {
		var d = a && "object" == typeof a ? ka.extend({}, a) : {
			complete: c || !c && b || ka.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !ka.isFunction(b) && b
		};
		return d.duration = ka.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ka.fx.speeds ? ka.fx.speeds[d.duration] : ka.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
			ka.isFunction(d.old) && d.old.call(this), d.queue && ka.dequeue(this, d.queue)
		}, d
	}, ka.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, ka.timers = [], ka.fx = R.prototype.init, ka.fx.tick = function() {
		var a, c = ka.timers,
			d = 0;
		for ($b = ka.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
		c.length || ka.fx.stop(), $b = b
	}, ka.fx.timer = function(a) {
		a() && ka.timers.push(a) && ka.fx.start()
	}, ka.fx.interval = 13, ka.fx.start = function() {
		_b || (_b = setInterval(ka.fx.tick, ka.fx.interval))
	}, ka.fx.stop = function() {
		clearInterval(_b), _b = null
	}, ka.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ka.fx.step = {}, ka.expr && ka.expr.filters && (ka.expr.filters.animated = function(a) {
		return ka.grep(ka.timers, function(b) {
			return a === b.elem
		}).length
	}), ka.fn.offset = function(a) {
		if (arguments.length) return a === b ? this : this.each(function(b) {
			ka.offset.setOffset(this, a, b)
		});
		var c, d, e = {
				top: 0,
				left: 0
			},
			f = this[0],
			g = f && f.ownerDocument;
		if (g) return c = g.documentElement, ka.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), d = T(g), {
			top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
			left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
		}) : e
	}, ka.offset = {
		setOffset: function(a, b, c) {
			var d = ka.css(a, "position");
			"static" === d && (a.style.position = "relative");
			var e, f, g = ka(a),
				h = g.offset(),
				i = ka.css(a, "top"),
				j = ka.css(a, "left"),
				k = ("absolute" === d || "fixed" === d) && ka.inArray("auto", [i, j]) > -1,
				l = {},
				m = {};
			k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), ka.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
		}
	}, ka.fn.extend({
		position: function() {
			if (this[0]) {
				var a, b, c = {
						top: 0,
						left: 0
					},
					d = this[0];
				return "fixed" === ka.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ka.nodeName(a[0], "html") || (c = a.offset()), c.top += ka.css(a[0], "borderTopWidth", !0), c.left += ka.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - c.top - ka.css(d, "marginTop", !0),
					left: b.left - c.left - ka.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || Z; a && !ka.nodeName(a, "html") && "static" === ka.css(a, "position");) a = a.offsetParent;
				return a || Z
			})
		}
	}), ka.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, c) {
		var d = /Y/.test(c);
		ka.fn[a] = function(e) {
			return ka.access(this, function(a, e, f) {
				var g = T(a);
				return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? ka(g).scrollLeft() : f, d ? f : ka(g).scrollTop()) : a[e] = f)
			}, a, e, arguments.length, null)
		}
	}), ka.each({
		Height: "height",
		Width: "width"
	}, function(a, c) {
		ka.each({
			padding: "inner" + a,
			content: c,
			"": "outer" + a
		}, function(d, e) {
			ka.fn[e] = function(e, f) {
				var g = arguments.length && (d || "boolean" != typeof e),
					h = d || (e === !0 || f === !0 ? "margin" : "border");
				return ka.access(this, function(c, d, e) {
					var f;
					return ka.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? ka.css(c, d, h) : ka.style(c, d, e, h)
				}, c, g ? e : b, g, null)
			}
		})
	}), ka.fn.size = function() {
		return this.length
	}, ka.fn.andSelf = ka.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ka : (a.jQuery = a.$ = ka, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ka
	}))
}(window),
function(a, b, c) {
	"use strict";

	function d(b, c) {
		this.bodyOverflowX, this.callbacks = {
			hide: [],
			show: []
		}, this.checkInterval = null, this.Content, this.$el = a(b), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = a.extend({}, i, c), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
	}

	function e(b, c) {
		var d = !0;
		return a.each(b, function(a, e) {
			return "undefined" == typeof c[a] || b[a] !== c[a] ? (d = !1, !1) : void 0
		}), d
	}

	function f() {
		return !k && j
	}

	function g() {
		var a = c.body || c.documentElement,
			b = a.style,
			d = "transition";
		if ("string" == typeof b[d]) return !0;
		v = ["Moz", "Webkit", "Khtml", "O", "ms"], d = d.charAt(0).toUpperCase() + d.substr(1);
		for (var e = 0; e < v.length; e++)
			if ("string" == typeof b[v[e] + d]) return !0;
		return !1
	}
	var h = "tooltipster",
		i = {
			animation: "fade",
			arrow: !0,
			arrowColor: "",
			autoClose: !0,
			content: null,
			contentAsHTML: !1,
			contentCloning: !0,
			debug: !0,
			delay: 200,
			minWidth: 0,
			maxWidth: null,
			functionInit: function(a, b) {},
			functionBefore: function(a, b) {
				b()
			},
			functionReady: function(a, b) {},
			functionAfter: function(a) {},
			hideOnClick: !1,
			icon: "(?)",
			iconCloning: !0,
			iconDesktop: !1,
			iconTouch: !1,
			iconTheme: "tooltipster-icon",
			interactive: !1,
			interactiveTolerance: 350,
			multiple: !1,
			offsetX: 0,
			offsetY: 0,
			onlyOne: !1,
			position: "top",
			positionTracker: !1,
			positionTrackerCallback: function(a) {
				"hover" == this.option("trigger") && this.option("autoClose") && this.hide()
			},
			restoration: "current",
			speed: 350,
			timer: 0,
			theme: "tooltipster-default",
			touchDevices: !0,
			trigger: "hover",
			updateAnimation: !0
		};
	d.prototype = {
		_init: function() {
			var b = this;
			if (c.querySelector) {
				var d = null;
				void 0 === b.$el.data("tooltipster-initialTitle") && (d = b.$el.attr("title"), void 0 === d && (d = null), b.$el.data("tooltipster-initialTitle", d)), null !== b.options.content ? b._content_set(b.options.content) : b._content_set(d);
				var e = b.options.functionInit.call(b.$el, b.$el, b.Content);
				"undefined" != typeof e && b._content_set(e), b.$el.removeAttr("title").addClass("tooltipstered"), !j && b.options.iconDesktop || j && b.options.iconTouch ? ("string" == typeof b.options.icon ? (b.$elProxy = a('<span class="' + b.options.iconTheme + '"></span>'),
					b.$elProxy.text(b.options.icon)) : b.options.iconCloning ? b.$elProxy = b.options.icon.clone(!0) : b.$elProxy = b.options.icon, b.$elProxy.insertAfter(b.$el)) : b.$elProxy = b.$el, "hover" == b.options.trigger ? (b.$elProxy.on("mouseenter." + b.namespace, function() {
					(!f() || b.options.touchDevices) && (b.mouseIsOverProxy = !0, b._show())
				}).on("mouseleave." + b.namespace, function() {
					(!f() || b.options.touchDevices) && (b.mouseIsOverProxy = !1)
				}), j && b.options.touchDevices && b.$elProxy.on("touchstart." + b.namespace, function() {
					b._showNow()
				})) : "click" == b.options.trigger && b.$elProxy.on("click." + b.namespace, function() {
					(!f() || b.options.touchDevices) && b._show()
				})
			}
		},
		_show: function() {
			var a = this;
			"shown" != a.Status && "appearing" != a.Status && (a.options.delay ? a.timerShow = setTimeout(function() {
				("click" == a.options.trigger || "hover" == a.options.trigger && a.mouseIsOverProxy) && a._showNow()
			}, a.options.delay) : a._showNow())
		},
		_showNow: function(c) {
			var d = this;
			d.options.functionBefore.call(d.$el, d.$el, function() {
				if (d.enabled && null !== d.Content) {
					c && d.callbacks.show.push(c), d.callbacks.hide = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null, d.options.onlyOne && a(".tooltipstered").not(d.$el).each(function(b, c) {
						var d = a(c),
							e = d.data("tooltipster-ns");
						a.each(e, function(a, b) {
							var c = d.data(b),
								e = c.status(),
								f = c.option("autoClose");
							"hidden" !== e && "disappearing" !== e && f && c.hide()
						})
					});
					var e = function() {
						d.Status = "shown", a.each(d.callbacks.show, function(a, b) {
							b.call(d.$el)
						}), d.callbacks.show = []
					};
					if ("hidden" !== d.Status) {
						var f = 0;
						"disappearing" === d.Status ? (d.Status = "appearing", g() ? (d.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + d.options.animation + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.stop().fadeIn(e)) : "shown" === d.Status && e()
					} else {
						d.Status = "appearing";
						var f = d.options.speed;
						d.bodyOverflowX = a("body").css("overflow-x"), a("body").css("overflow-x", "hidden");
						var h = "tooltipster-" + d.options.animation,
							i = "-webkit-transition-duration: " + d.options.speed + "ms; -webkit-animation-duration: " + d.options.speed + "ms; -moz-transition-duration: " + d.options.speed + "ms; -moz-animation-duration: " + d.options.speed + "ms; -o-transition-duration: " + d.options.speed + "ms; -o-animation-duration: " + d.options.speed + "ms; -ms-transition-duration: " + d.options.speed + "ms; -ms-animation-duration: " + d.options.speed + "ms; transition-duration: " + d.options.speed + "ms; animation-duration: " + d.options.speed + "ms;",
							k = d.options.minWidth ? "min-width:" + Math.round(d.options.minWidth) + "px;" : "",
							l = d.options.maxWidth ? "max-width:" + Math.round(d.options.maxWidth) + "px;" : "",
							m = d.options.interactive ? "pointer-events: auto;" : "";
						if (d.$tooltip = a('<div class="tooltipster-base ' + d.options.theme + '" style="' + k + " " + l + " " + m + " " + i + '"><div class="tooltipster-content"></div></div>'), g() && d.$tooltip.addClass(h), d._content_insert(), d.$tooltip.appendTo("body"), d.reposition(), d.options.functionReady.call(d.$el, d.$el, d.$tooltip), g() ? (d.$tooltip.addClass(h + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.css("display", "none").fadeIn(d.options.speed, e), d._interval_set(), a(b).on("scroll." + d.namespace + " resize." + d.namespace, function() {
							d.reposition()
						}), d.options.autoClose)
							if (a("body").off("." + d.namespace), "hover" == d.options.trigger) {
								if (j && setTimeout(function() {
									a("body").on("touchstart." + d.namespace, function() {
										d.hide()
									})
								}, 0), d.options.interactive) {
									j && d.$tooltip.on("touchstart." + d.namespace, function(a) {
										a.stopPropagation()
									});
									var n = null;
									d.$elProxy.add(d.$tooltip).on("mouseleave." + d.namespace + "-autoClose", function() {
										clearTimeout(n), n = setTimeout(function() {
											d.hide()
										}, d.options.interactiveTolerance)
									}).on("mouseenter." + d.namespace + "-autoClose", function() {
										clearTimeout(n)
									})
								} else d.$elProxy.on("mouseleave." + d.namespace + "-autoClose", function() {
									d.hide()
								});
								d.options.hideOnClick && d.$elProxy.on("click." + d.namespace + "-autoClose", function() {
									d.hide()
								})
							} else "click" == d.options.trigger && (setTimeout(function() {
								a("body").on("click." + d.namespace + " touchstart." + d.namespace, function() {
									d.hide()
								})
							}, 0), d.options.interactive && d.$tooltip.on("click." + d.namespace + " touchstart." + d.namespace, function(a) {
								a.stopPropagation()
							}))
					}
					d.options.timer > 0 && (d.timerHide = setTimeout(function() {
						d.timerHide = null, d.hide()
					}, d.options.timer + f))
				}
			})
		},
		_interval_set: function() {
			var b = this;
			b.checkInterval = setInterval(function() {
				if (0 === a("body").find(b.$el).length || 0 === a("body").find(b.$elProxy).length || "hidden" == b.Status || 0 === a("body").find(b.$tooltip).length)("shown" == b.Status || "appearing" == b.Status) && b.hide(), b._interval_cancel();
				else if (b.options.positionTracker) {
					var c = b._repositionInfo(b.$elProxy),
						d = !1;
					e(c.dimension, b.elProxyPosition.dimension) && ("fixed" === b.$elProxy.css("position") ? e(c.position, b.elProxyPosition.position) && (d = !0) : e(c.offset, b.elProxyPosition.offset) && (d = !0)), d || (b.reposition(), b.options.positionTrackerCallback.call(b, b.$el))
				}
			}, 200)
		},
		_interval_cancel: function() {
			clearInterval(this.checkInterval), this.checkInterval = null
		},
		_content_set: function(a) {
			"object" == typeof a && null !== a && this.options.contentCloning && (a = a.clone(!0)), this.Content = a
		},
		_content_insert: function() {
			var a = this,
				b = this.$tooltip.find(".tooltipster-content");
			"string" != typeof a.Content || a.options.contentAsHTML ? b.empty().append(a.Content) : b.text(a.Content)
		},
		_update: function(a) {
			var b = this;
			b._content_set(a), null !== b.Content ? "hidden" !== b.Status && (b._content_insert(), b.reposition(), b.options.updateAnimation && (g() ? (b.$tooltip.css({
				width: "",
				"-webkit-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
				"-moz-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
				"-o-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
				"-ms-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
				transition: "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
			}).addClass("tooltipster-content-changing"), setTimeout(function() {
				"hidden" != b.Status && (b.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function() {
					"hidden" !== b.Status && b.$tooltip.css({
						"-webkit-transition": b.options.speed + "ms",
						"-moz-transition": b.options.speed + "ms",
						"-o-transition": b.options.speed + "ms",
						"-ms-transition": b.options.speed + "ms",
						transition: b.options.speed + "ms"
					})
				}, b.options.speed))
			}, b.options.speed)) : b.$tooltip.fadeTo(b.options.speed, .5, function() {
				"hidden" != b.Status && b.$tooltip.fadeTo(b.options.speed, 1)
			}))) : b.hide()
		},
		_repositionInfo: function(a) {
			return {
				dimension: {
					height: a.outerHeight(!1),
					width: a.outerWidth(!1)
				},
				offset: a.offset(),
				position: {
					left: parseInt(a.css("left")),
					top: parseInt(a.css("top"))
				}
			}
		},
		hide: function(c) {
			var d = this;
			c && d.callbacks.hide.push(c), d.callbacks.show = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null;
			var e = function() {
				a.each(d.callbacks.hide, function(a, b) {
					b.call(d.$el)
				}), d.callbacks.hide = []
			};
			if ("shown" == d.Status || "appearing" == d.Status) {
				d.Status = "disappearing";
				var f = function() {
					d.Status = "hidden", "object" == typeof d.Content && null !== d.Content && d.Content.detach(), d.$tooltip.remove(), d.$tooltip = null, a(b).off("." + d.namespace), a("body").off("." + d.namespace).css("overflow-x", d.bodyOverflowX), a("body").off("." + d.namespace), d.$elProxy.off("." + d.namespace + "-autoClose"), d.options.functionAfter.call(d.$el, d.$el), e()
				};
				g() ? (d.$tooltip.clearQueue().removeClass("tooltipster-" + d.options.animation + "-show").addClass("tooltipster-dying"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(f)) : d.$tooltip.stop().fadeOut(d.options.speed, f)
			} else "hidden" == d.Status && e();
			return d
		},
		show: function(a) {
			return this._showNow(a), this
		},
		update: function(a) {
			return this.content(a)
		},
		content: function(a) {
			return "undefined" == typeof a ? this.Content : (this._update(a), this)
		},
		reposition: function() {
			function c() {
				var c = a(b).scrollLeft();
				0 > C - c && (f = C - c, C = c), C + i - c > g && (f = C - (g + c - i), C = g + c - i)
			}

			function d(c, d) {
				h.offset.top - a(b).scrollTop() - j - F - 12 < 0 && d.indexOf("top") > -1 && (H = c), h.offset.top + h.dimension.height + j + 12 + F > a(b).scrollTop() + a(b).height() && d.indexOf("bottom") > -1 && (H = c, E = h.offset.top - j - F - 12)
			}
			var e = this;
			if (0 !== a("body").find(e.$tooltip).length) {
				e.$tooltip.css("width", ""), e.elProxyPosition = e._repositionInfo(e.$elProxy);
				var f = null,
					g = a(b).width(),
					h = e.elProxyPosition,
					i = e.$tooltip.outerWidth(!1),
					j = (e.$tooltip.innerWidth() + 1, e.$tooltip.outerHeight(!1));
				if (e.$elProxy.is("area")) {
					var k = e.$elProxy.attr("shape"),
						l = e.$elProxy.parent().attr("name"),
						m = a('img[usemap="#' + l + '"]'),
						n = m.offset().left,
						o = m.offset().top,
						p = void 0 !== e.$elProxy.attr("coords") ? e.$elProxy.attr("coords").split(",") : void 0;
					if ("circle" == k) {
						var q = parseInt(p[0]),
							r = parseInt(p[1]),
							s = parseInt(p[2]);
						h.dimension.height = 2 * s, h.dimension.width = 2 * s, h.offset.top = o + r - s, h.offset.left = n + q - s
					} else if ("rect" == k) {
						var q = parseInt(p[0]),
							r = parseInt(p[1]),
							t = parseInt(p[2]),
							u = parseInt(p[3]);
						h.dimension.height = u - r, h.dimension.width = t - q, h.offset.top = o + r, h.offset.left = n + q
					} else if ("poly" == k) {
						for (var v = 0, w = 0, x = 0, y = 0, z = "even", A = 0; A < p.length; A++) {
							var B = parseInt(p[A]);
							"even" == z ? (B > x && (x = B, 0 === A && (v = x)), v > B && (v = B), z = "odd") : (B > y && (y = B, 1 == A && (w = y)), w > B && (w = B), z = "even")
						}
						h.dimension.height = y - w, h.dimension.width = x - v, h.offset.top = o + w, h.offset.left = n + v
					} else h.dimension.height = m.outerHeight(!1), h.dimension.width = m.outerWidth(!1), h.offset.top = o, h.offset.left = n
				}
				var C = 0,
					D = 0,
					E = 0,
					F = parseInt(e.options.offsetY),
					G = parseInt(e.options.offsetX),
					H = e.options.position;
				if ("top" == H) {
					var I = h.offset.left + i - (h.offset.left + h.dimension.width);
					C = h.offset.left + G - I / 2, E = h.offset.top - j - F - 12, c(), d("bottom", "top")
				}
				if ("top-left" == H && (C = h.offset.left + G, E = h.offset.top - j - F - 12, c(), d("bottom-left", "top-left")), "top-right" == H && (C = h.offset.left + h.dimension.width + G - i, E = h.offset.top - j - F - 12, c(), d("bottom-right", "top-right")), "bottom" == H) {
					var I = h.offset.left + i - (h.offset.left + h.dimension.width);
					C = h.offset.left - I / 2 + G, E = h.offset.top + h.dimension.height + F + 12, c(), d("top", "bottom")
				}
				if ("bottom-left" == H && (C = h.offset.left + G, E = h.offset.top + h.dimension.height + F + 12, c(), d("top-left", "bottom-left")), "bottom-right" == H && (C = h.offset.left + h.dimension.width + G - i, E = h.offset.top + h.dimension.height + F + 12, c(), d("top-right", "bottom-right")), "left" == H) {
					C = h.offset.left - G - i - 12, D = h.offset.left + G + h.dimension.width + 12;
					var J = h.offset.top + j - (h.offset.top + h.dimension.height);
					if (E = h.offset.top - J / 2 - F, 0 > C && D + i > g) {
						var K = 2 * parseFloat(e.$tooltip.css("border-width")),
							L = i + C - K;
						e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), C = h.offset.left - G - L - 12 - K, J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F
					} else 0 > C && (C = h.offset.left + G + h.dimension.width + 12, f = "left")
				}
				if ("right" == H) {
					C = h.offset.left + G + h.dimension.width + 12, D = h.offset.left - G - i - 12;
					var J = h.offset.top + j - (h.offset.top + h.dimension.height);
					if (E = h.offset.top - J / 2 - F, C + i > g && 0 > D) {
						var K = 2 * parseFloat(e.$tooltip.css("border-width")),
							L = g - C - K;
						e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F
					} else C + i > g && (C = h.offset.left - G - i - 12, f = "right")
				}
				if (e.options.arrow) {
					var M = "tooltipster-arrow-" + H;
					if (e.options.arrowColor.length < 1) var N = e.$tooltip.css("background-color");
					else var N = e.options.arrowColor; if (f ? "left" == f ? (M = "tooltipster-arrow-right", f = "") : "right" == f ? (M = "tooltipster-arrow-left", f = "") : f = "left:" + Math.round(f) + "px;" : f = "", "top" == H || "top-left" == H || "top-right" == H) var O = parseFloat(e.$tooltip.css("border-bottom-width")),
						P = e.$tooltip.css("border-bottom-color");
					else if ("bottom" == H || "bottom-left" == H || "bottom-right" == H) var O = parseFloat(e.$tooltip.css("border-top-width")),
						P = e.$tooltip.css("border-top-color");
					else if ("left" == H) var O = parseFloat(e.$tooltip.css("border-right-width")),
						P = e.$tooltip.css("border-right-color");
					else if ("right" == H) var O = parseFloat(e.$tooltip.css("border-left-width")),
						P = e.$tooltip.css("border-left-color");
					else var O = parseFloat(e.$tooltip.css("border-bottom-width")),
						P = e.$tooltip.css("border-bottom-color");
					O > 1 && O++;
					var Q = "";
					if (0 !== O) {
						var R = "",
							S = "border-color: " + P + ";"; - 1 !== M.indexOf("bottom") ? R = "margin-top: -" + Math.round(O) + "px;" : -1 !== M.indexOf("top") ? R = "margin-bottom: -" + Math.round(O) + "px;" : -1 !== M.indexOf("left") ? R = "margin-right: -" + Math.round(O) + "px;" : -1 !== M.indexOf("right") && (R = "margin-left: -" + Math.round(O) + "px;"), Q = '<span class="tooltipster-arrow-border" style="' + R + " " + S + ';"></span>'
					}
					e.$tooltip.find(".tooltipster-arrow").remove();
					var T = '<div class="' + M + ' tooltipster-arrow" style="' + f + '">' + Q + '<span style="border-color:' + N + ';"></span></div>';
					e.$tooltip.append(T)
				}
				e.$tooltip.css({
					top: Math.round(E) + "px",
					left: Math.round(C) + "px"
				})
			}
			return e
		},
		enable: function() {
			return this.enabled = !0, this
		},
		disable: function() {
			return this.hide(), this.enabled = !1, this
		},
		destroy: function() {
			var b = this;
			b.hide(), b.$el[0] !== b.$elProxy[0] && b.$elProxy.remove(), b.$el.removeData(b.namespace).off("." + b.namespace);
			var c = b.$el.data("tooltipster-ns");
			if (1 === c.length) {
				var d = null;
				"previous" === b.options.restoration ? d = b.$el.data("tooltipster-initialTitle") : "current" === b.options.restoration && (d = "string" == typeof b.Content ? b.Content : a("<div></div>").append(b.Content).html()), d && b.$el.attr("title", d), b.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
			} else c = a.grep(c, function(a, c) {
				return a !== b.namespace
			}), b.$el.data("tooltipster-ns", c);
			return b
		},
		elementIcon: function() {
			return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
		},
		elementTooltip: function() {
			return this.$tooltip ? this.$tooltip[0] : void 0
		},
		option: function(a, b) {
			return "undefined" == typeof b ? this.options[a] : (this.options[a] = b, this)
		},
		status: function() {
			return this.Status
		}
	}, a.fn[h] = function() {
		var b = arguments;
		if (0 === this.length) {
			if ("string" == typeof b[0]) {
				var c = !0;
				switch (b[0]) {
					case "setDefaults":
						a.extend(i, b[1]);
						break;
					default:
						c = !1
				}
				return c ? !0 : this
			}
			return this
		}
		if ("string" == typeof b[0]) {
			var e = "#*$~&";
			return this.each(function() {
				var c = a(this).data("tooltipster-ns"),
					d = c ? a(this).data(c[0]) : null;
				if (!d) throw new Error("You called Tooltipster's \"" + b[0] + '" method on an uninitialized element');
				if ("function" != typeof d[b[0]]) throw new Error('Unknown method .tooltipster("' + b[0] + '")');
				var f = d[b[0]](b[1], b[2]);
				return f !== d ? (e = f, !1) : void 0
			}), "#*$~&" !== e ? e : this
		}
		var f = [],
			g = b[0] && "undefined" != typeof b[0].multiple,
			h = g && b[0].multiple || !g && i.multiple,
			j = b[0] && "undefined" != typeof b[0].debug,
			k = j && b[0].debug || !j && i.debug;
		return this.each(function() {
			var c = !1,
				e = a(this).data("tooltipster-ns"),
				g = null;
			e ? h ? c = !0 : k && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : c = !0, c && (g = new d(this, b[0]), e || (e = []), e.push(g.namespace), a(this).data("tooltipster-ns", e), a(this).data(g.namespace, g)), f.push(g)
		}), h ? f : this
	};
	var j = !!("ontouchstart" in b),
		k = !1;
	a("body").one("mousemove", function() {
		k = !0
	})
}(jQuery, window, document);
var requirejs, require, define;
! function(global) {
	function isFunction(a) {
		return "[object Function]" === ostring.call(a)
	}

	function isArray(a) {
		return "[object Array]" === ostring.call(a)
	}

	function each(a, b) {
		if (a) {
			var c;
			for (c = 0; c < a.length && (!a[c] || !b(a[c], c, a)); c += 1);
		}
	}

	function eachReverse(a, b) {
		if (a) {
			var c;
			for (c = a.length - 1; c > -1 && (!a[c] || !b(a[c], c, a)); c -= 1);
		}
	}

	function hasProp(a, b) {
		return hasOwn.call(a, b)
	}

	function getOwn(a, b) {
		return hasProp(a, b) && a[b]
	}

	function eachProp(a, b) {
		var c;
		for (c in a)
			if (hasProp(a, c) && b(a[c], c)) break
	}

	function mixin(a, b, c, d) {
		return b && eachProp(b, function(b, e) {
			(c || !hasProp(a, e)) && (!d || "object" != typeof b || !b || isArray(b) || isFunction(b) || b instanceof RegExp ? a[e] = b : (a[e] || (a[e] = {}), mixin(a[e], b, c, d)))
		}), a
	}

	function bind(a, b) {
		return function() {
			return b.apply(a, arguments)
		}
	}

	function scripts() {
		return document.getElementsByTagName("script")
	}

	function defaultOnError(a) {
		throw a
	}

	function getGlobal(a) {
		if (!a) return a;
		var b = global;
		return each(a.split("."), function(a) {
			b = b[a]
		}), b
	}

	function makeError(a, b, c, d) {
		var e = new Error(b + "\nhttp://requirejs.org/docs/errors.html#" + a);
		return e.requireType = a, e.requireModules = d, c && (e.originalError = c), e
	}

	function newContext(a) {
		function b(a) {
			var b, c;
			for (b = 0; b < a.length; b++)
				if (c = a[b], "." === c) a.splice(b, 1), b -= 1;
				else if (".." === c) {
				if (0 === b || 1 === b && ".." === a[2] || ".." === a[b - 1]) continue;
				b > 0 && (a.splice(b - 1, 2), b -= 2)
			}
		}

		function c(a, c, d) {
			var e, f, g, h, i, j, k, l, m, n, o, p, q = c && c.split("/"),
				r = x.map,
				s = r && r["*"];
			if (a && (a = a.split("/"), k = a.length - 1, x.nodeIdCompat && jsSuffixRegExp.test(a[k]) && (a[k] = a[k].replace(jsSuffixRegExp, "")), "." === a[0].charAt(0) && q && (p = q.slice(0, q.length - 1), a = p.concat(a)), b(a), a = a.join("/")), d && r && (q || s)) {
				g = a.split("/");
				a: for (h = g.length; h > 0; h -= 1) {
					if (j = g.slice(0, h).join("/"), q)
						for (i = q.length; i > 0; i -= 1)
							if (f = getOwn(r, q.slice(0, i).join("/")), f && (f = getOwn(f, j))) {
								l = f, m = h;
								break a
							}!n && s && getOwn(s, j) && (n = getOwn(s, j), o = h)
				}!l && n && (l = n, m = o), l && (g.splice(0, m, l), a = g.join("/"))
			}
			return e = getOwn(x.pkgs, a), e ? e : a
		}

		function d(a) {
			isBrowser && each(scripts(), function(b) {
				return b.getAttribute("data-requiremodule") === a && b.getAttribute("data-requirecontext") === u.contextName ? (b.parentNode.removeChild(b), !0) : void 0
			})
		}

		function e(a) {
			var b = getOwn(x.paths, a);
			return b && isArray(b) && b.length > 1 ? (b.shift(), u.require.undef(a), u.makeRequire(null, {
				skipMap: !0
			})([a]), !0) : void 0
		}

		function f(a) {
			var b, c = a ? a.indexOf("!") : -1;
			return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
		}

		function g(a, b, d, e) {
			var g, h, i, j, k = null,
				l = b ? b.name : null,
				m = a,
				n = !0,
				o = "";
			return a || (n = !1, a = "_@r" + (F += 1)), j = f(a), k = j[0], a = j[1], k && (k = c(k, l, e), h = getOwn(C, k)), a && (k ? o = h && h.normalize ? h.normalize(a, function(a) {
				return c(a, l, e)
			}) : -1 === a.indexOf("!") ? c(a, l, e) : a : (o = c(a, l, e), j = f(o), k = j[0], o = j[1], d = !0, g = u.nameToUrl(o))), i = !k || h || d ? "" : "_unnormalized" + (G += 1), {
				prefix: k,
				name: o,
				parentMap: b,
				unnormalized: !!i,
				url: g,
				originalName: m,
				isDefine: n,
				id: (k ? k + "!" + o : o) + i
			}
		}

		function h(a) {
			var b = a.id,
				c = getOwn(y, b);
			return c || (c = y[b] = new u.Module(a)), c
		}

		function i(a, b, c) {
			var d = a.id,
				e = getOwn(y, d);
			!hasProp(C, d) || e && !e.defineEmitComplete ? (e = h(a), e.error && "error" === b ? c(e.error) : e.on(b, c)) : "defined" === b && c(C[d])
		}

		function j(a, b) {
			var c = a.requireModules,
				d = !1;
			b ? b(a) : (each(c, function(b) {
				var c = getOwn(y, b);
				c && (c.error = a, c.events.error && (d = !0, c.emit("error", a)))
			}), d || req.onError(a))
		}

		function k() {
			globalDefQueue.length && (each(globalDefQueue, function(a) {
				var b = a[0];
				"string" == typeof b && (u.defQueueMap[b] = !0), B.push(a)
			}), globalDefQueue = [])
		}

		function l(a) {
			delete y[a], delete z[a]
		}

		function m(a, b, c) {
			var d = a.map.id;
			a.error ? a.emit("error", a.error) : (b[d] = !0, each(a.depMaps, function(d, e) {
				var f = d.id,
					g = getOwn(y, f);
				!g || a.depMatched[e] || c[f] || (getOwn(b, f) ? (a.defineDep(e, C[f]), a.check()) : m(g, b, c))
			}), c[d] = !0)
		}

		function n() {
			var a, b, c = 1e3 * x.waitSeconds,
				f = c && u.startTime + c < (new Date).getTime(),
				g = [],
				h = [],
				i = !1,
				k = !0;
			if (!s) {
				if (s = !0, eachProp(z, function(a) {
					var c = a.map,
						j = c.id;
					if (a.enabled && (c.isDefine || h.push(a), !a.error))
						if (!a.inited && f) e(j) ? (b = !0, i = !0) : (g.push(j), d(j));
						else if (!a.inited && a.fetched && c.isDefine && (i = !0, !c.prefix)) return k = !1
				}), f && g.length) return a = makeError("timeout", "Load timeout for modules: " + g, null, g), a.contextName = u.contextName, j(a);
				k && each(h, function(a) {
					m(a, {}, {})
				}), f && !b || !i || !isBrowser && !isWebWorker || w || (w = setTimeout(function() {
					w = 0, n()
				}, 50)), s = !1
			}
		}

		function o(a) {
			hasProp(C, a[0]) || h(g(a[0], null, !0)).init(a[1], a[2])
		}

		function p(a, b, c, d) {
			a.detachEvent && !isOpera ? d && a.detachEvent(d, b) : a.removeEventListener(c, b, !1)
		}

		function q(a) {
			var b = a.currentTarget || a.srcElement;
			return p(b, u.onScriptLoad, "load", "onreadystatechange"), p(b, u.onScriptError, "error"), {
				node: b,
				id: b && b.getAttribute("data-requiremodule")
			}
		}

		function r() {
			var a;
			for (k(); B.length;) {
				if (a = B.shift(), null === a[0]) return j(makeError("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]));
				o(a)
			}
			u.defQueueMap = {}
		}
		var s, t, u, v, w, x = {
				waitSeconds: 7,
				baseUrl: "./",
				paths: {},
				bundles: {},
				pkgs: {},
				shim: {},
				config: {}
			},
			y = {},
			z = {},
			A = {},
			B = [],
			C = {},
			D = {},
			E = {},
			F = 1,
			G = 1;
		return v = {
			require: function(a) {
				return a.require ? a.require : a.require = u.makeRequire(a.map)
			},
			exports: function(a) {
				return a.usingExports = !0, a.map.isDefine ? a.exports ? C[a.map.id] = a.exports : a.exports = C[a.map.id] = {} : void 0
			},
			module: function(a) {
				return a.module ? a.module : a.module = {
					id: a.map.id,
					uri: a.map.url,
					config: function() {
						return getOwn(x.config, a.map.id) || {}
					},
					exports: a.exports || (a.exports = {})
				}
			}
		}, t = function(a) {
			this.events = getOwn(A, a.id) || {}, this.map = a, this.shim = getOwn(x.shim, a.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
		}, t.prototype = {
			init: function(a, b, c, d) {
				d = d || {}, this.inited || (this.factory = b, c ? this.on("error", c) : this.events.error && (c = bind(this, function(a) {
					this.emit("error", a)
				})), this.depMaps = a && a.slice(0), this.errback = c, this.inited = !0, this.ignore = d.ignore, d.enabled || this.enabled ? this.enable() : this.check())
			},
			defineDep: function(a, b) {
				this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b)
			},
			fetch: function() {
				if (!this.fetched) {
					this.fetched = !0, u.startTime = (new Date).getTime();
					var a = this.map;
					return this.shim ? void u.makeRequire(this.map, {
						enableBuildCallback: !0
					})(this.shim.deps || [], bind(this, function() {
						return a.prefix ? this.callPlugin() : this.load()
					})) : a.prefix ? this.callPlugin() : this.load()
				}
			},
			load: function() {
				var a = this.map.url;
				D[a] || (D[a] = !0, u.load(this.map.id, a))
			},
			check: function() {
				if (this.enabled && !this.enabling) {
					var a, b, c = this.map.id,
						d = this.depExports,
						e = this.exports,
						f = this.factory;
					if (this.inited) {
						if (this.error) this.emit("error", this.error);
						else if (!this.defining) {
							if (this.defining = !0, this.depCount < 1 && !this.defined) {
								if (isFunction(f)) {
									if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
										e = u.execCb(c, f, d, e)
									} catch (g) {
										a = g
									} else e = u.execCb(c, f, d, e);
									if (this.map.isDefine && void 0 === e && (b = this.module, b ? e = b.exports : this.usingExports && (e = this.exports)), a) return a.requireMap = this.map, a.requireModules = this.map.isDefine ? [this.map.id] : null, a.requireType = this.map.isDefine ? "define" : "require", j(this.error = a)
								} else e = f;
								this.exports = e, this.map.isDefine && !this.ignore && (C[c] = e, req.onResourceLoad && req.onResourceLoad(u, this.map, this.depMaps)), l(c), this.defined = !0
							}
							this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
						}
					} else hasProp(u.defQueueMap, c) || this.fetch()
				}
			},
			callPlugin: function() {
				var a = this.map,
					b = a.id,
					d = g(a.prefix);
				this.depMaps.push(d), i(d, "defined", bind(this, function(d) {
					var e, f, k, m = getOwn(E, this.map.id),
						n = this.map.name,
						o = this.map.parentMap ? this.map.parentMap.name : null,
						p = u.makeRequire(a.parentMap, {
							enableBuildCallback: !0
						});
					return this.map.unnormalized ? (d.normalize && (n = d.normalize(n, function(a) {
						return c(a, o, !0)
					}) || ""), f = g(a.prefix + "!" + n, this.map.parentMap), i(f, "defined", bind(this, function(a) {
						this.init([], function() {
							return a
						}, null, {
							enabled: !0,
							ignore: !0
						})
					})), k = getOwn(y, f.id), void(k && (this.depMaps.push(f), this.events.error && k.on("error", bind(this, function(a) {
						this.emit("error", a)
					})), k.enable()))) : m ? (this.map.url = u.nameToUrl(m), void this.load()) : (e = bind(this, function(a) {
						this.init([], function() {
							return a
						}, null, {
							enabled: !0
						})
					}), e.error = bind(this, function(a) {
						this.inited = !0, this.error = a, a.requireModules = [b], eachProp(y, function(a) {
							0 === a.map.id.indexOf(b + "_unnormalized") && l(a.map.id)
						}), j(a)
					}), e.fromText = bind(this, function(c, d) {
						var f = a.name,
							i = g(f),
							k = useInteractive;
						d && (c = d), k && (useInteractive = !1), h(i), hasProp(x.config, b) && (x.config[f] = x.config[b]);
						try {
							req.exec(c)
						} catch (l) {
							return j(makeError("fromtexteval", "fromText eval for " + b + " failed: " + l, l, [b]))
						}
						k && (useInteractive = !0), this.depMaps.push(i), u.completeLoad(f), p([f], e)
					}), void d.load(a.name, p, e, x))
				})), u.enable(d, this), this.pluginMaps[d.id] = d
			},
			enable: function() {
				z[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(a, b) {
					var c, d, e;
					if ("string" == typeof a) {
						if (a = g(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[b] = a, e = getOwn(v, a.id)) return void(this.depExports[b] = e(this));
						this.depCount += 1, i(a, "defined", bind(this, function(a) {
							this.undefed || (this.defineDep(b, a), this.check())
						})), this.errback ? i(a, "error", bind(this, this.errback)) : this.events.error && i(a, "error", bind(this, function(a) {
							this.emit("error", a)
						}))
					}
					c = a.id, d = y[c], hasProp(v, c) || !d || d.enabled || u.enable(a, this)
				})), eachProp(this.pluginMaps, bind(this, function(a) {
					var b = getOwn(y, a.id);
					b && !b.enabled && u.enable(a, this)
				})), this.enabling = !1, this.check()
			},
			on: function(a, b) {
				var c = this.events[a];
				c || (c = this.events[a] = []), c.push(b)
			},
			emit: function(a, b) {
				each(this.events[a], function(a) {
					a(b)
				}), "error" === a && delete this.events[a]
			}
		}, u = {
			config: x,
			contextName: a,
			registry: y,
			defined: C,
			urlFetched: D,
			defQueue: B,
			defQueueMap: {},
			Module: t,
			makeModuleMap: g,
			nextTick: req.nextTick,
			onError: j,
			configure: function(a) {
				a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
				var b = x.shim,
					c = {
						paths: !0,
						bundles: !0,
						config: !0,
						map: !0
					};
				eachProp(a, function(a, b) {
					c[b] ? (x[b] || (x[b] = {}), mixin(x[b], a, !0, !0)) : x[b] = a
				}), a.bundles && eachProp(a.bundles, function(a, b) {
					each(a, function(a) {
						a !== b && (E[a] = b)
					})
				}), a.shim && (eachProp(a.shim, function(a, c) {
					isArray(a) && (a = {
						deps: a
					}), !a.exports && !a.init || a.exportsFn || (a.exportsFn = u.makeShimExports(a)), b[c] = a
				}), x.shim = b), a.packages && each(a.packages, function(a) {
					var b, c;
					a = "string" == typeof a ? {
						name: a
					} : a, c = a.name, b = a.location, b && (x.paths[c] = a.location), x.pkgs[c] = a.name + "/" + (a.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
				}), eachProp(y, function(a, b) {
					a.inited || a.map.unnormalized || (a.map = g(b, null, !0))
				}), (a.deps || a.callback) && u.require(a.deps || [], a.callback)
			},
			makeShimExports: function(a) {
				function b() {
					var b;
					return a.init && (b = a.init.apply(global, arguments)), b || a.exports && getGlobal(a.exports)
				}
				return b
			},
			makeRequire: function(b, e) {
				function f(c, d, i) {
					var k, l, m;
					return e.enableBuildCallback && d && isFunction(d) && (d.__requireJsBuild = !0), "string" == typeof c ? isFunction(d) ? j(makeError("requireargs", "Invalid require call"), i) : b && hasProp(v, c) ? v[c](y[b.id]) : req.get ? req.get(u, c, b, f) : (l = g(c, b, !1, !0), k = l.id, hasProp(C, k) ? C[k] : j(makeError("notloaded", 'Module name "' + k + '" has not been loaded yet for context: ' + a + (b ? "" : ". Use require([])")))) : (r(), u.nextTick(function() {
						r(), m = h(g(null, b)), m.skipMap = e.skipMap, m.init(c, d, i, {
							enabled: !0
						}), n()
					}), f)
				}
				return e = e || {}, mixin(f, {
					isBrowser: isBrowser,
					toUrl: function(a) {
						var d, e = a.lastIndexOf("."),
							f = a.split("/")[0],
							g = "." === f || ".." === f;
						return -1 !== e && (!g || e > 1) && (d = a.substring(e, a.length), a = a.substring(0, e)), u.nameToUrl(c(a, b && b.id, !0), d, !0)
					},
					defined: function(a) {
						return hasProp(C, g(a, b, !1, !0).id)
					},
					specified: function(a) {
						return a = g(a, b, !1, !0).id, hasProp(C, a) || hasProp(y, a)
					}
				}), b || (f.undef = function(a) {
					k();
					var c = g(a, b, !0),
						e = getOwn(y, a);
					e.undefed = !0, d(a), delete C[a], delete D[c.url], delete A[a], eachReverse(B, function(b, c) {
						b[0] === a && B.splice(c, 1)
					}), delete u.defQueueMap[a], e && (e.events.defined && (A[a] = e.events), l(a))
				}), f
			},
			enable: function(a) {
				var b = getOwn(y, a.id);
				b && h(a).enable()
			},
			completeLoad: function(a) {
				var b, c, d, f = getOwn(x.shim, a) || {},
					g = f.exports;
				for (k(); B.length;) {
					if (c = B.shift(), null === c[0]) {
						if (c[0] = a, b) break;
						b = !0
					} else c[0] === a && (b = !0);
					o(c)
				}
				if (u.defQueueMap = {}, d = getOwn(y, a), !b && !hasProp(C, a) && d && !d.inited) {
					if (!(!x.enforceDefine || g && getGlobal(g))) return e(a) ? void 0 : j(makeError("nodefine", "No define call for " + a, null, [a]));
					o([a, f.deps || [], f.exportsFn])
				}
				n()
			},
			nameToUrl: function(a, b, c) {
				var d, e, f, g, h, i, j, k = getOwn(x.pkgs, a);
				if (k && (a = k), j = getOwn(E, a)) return u.nameToUrl(j, b, c);
				if (req.jsExtRegExp.test(a)) h = a + (b || "");
				else {
					for (d = x.paths, e = a.split("/"), f = e.length; f > 0; f -= 1)
						if (g = e.slice(0, f).join("/"), i = getOwn(d, g)) {
							isArray(i) && (i = i[0]), e.splice(0, f, i);
							break
						}
					h = e.join("/"), h += b || (/^data\:|\?/.test(h) || c ? "" : ".js"), h = ("/" === h.charAt(0) || h.match(/^[\w\+\.\-]+:/) ? "" : x.baseUrl) + h
				}
				return x.urlArgs ? h + ((-1 === h.indexOf("?") ? "?" : "&") + x.urlArgs) : h
			},
			load: function(a, b) {
				req.load(u, a, b)
			},
			execCb: function(a, b, c, d) {
				return b.apply(d, c)
			},
			onScriptLoad: function(a) {
				if ("load" === a.type || readyRegExp.test((a.currentTarget || a.srcElement).readyState)) {
					interactiveScript = null;
					var b = q(a);
					u.completeLoad(b.id)
				}
			},
			onScriptError: function(a) {
				var b = q(a);
				return e(b.id) ? void 0 : j(makeError("scripterror", "Script error for: " + b.id, a, [b.id]))
			}
		}, u.require = u.makeRequire(), u
	}

	function getInteractiveScript() {
		return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(a) {
			return "interactive" === a.readyState ? interactiveScript = a : void 0
		}), interactiveScript)
	}
	var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.20",
		commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
		cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
		jsSuffixRegExp = /\.js$/,
		currDirRegExp = /^\.\//,
		op = Object.prototype,
		ostring = op.toString,
		hasOwn = op.hasOwnProperty,
		ap = Array.prototype,
		isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
		isWebWorker = !isBrowser && "undefined" != typeof importScripts,
		readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
		defContextName = "_",
		isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
		contexts = {},
		cfg = {},
		globalDefQueue = [],
		useInteractive = !1;
	if ("undefined" == typeof define) {
		if ("undefined" != typeof requirejs) {
			if (isFunction(requirejs)) return;
			cfg = requirejs, requirejs = void 0
		}
		"undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(a, b, c, d) {
			var e, f, g = defContextName;
			return isArray(a) || "string" == typeof a || (f = a, isArray(b) ? (a = b, b = c, c = d) : a = []), f && f.context && (g = f.context), e = getOwn(contexts, g), e || (e = contexts[g] = req.s.newContext(g)), f && e.configure(f), e.require(a, b, c)
		}, req.config = function(a) {
			return req(a)
		}, req.nextTick = "undefined" != typeof setTimeout ? function(a) {
			setTimeout(a, 4)
		} : function(a) {
			a()
		}, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
			contexts: contexts,
			newContext: newContext
		}, req({}), each(["toUrl", "undef", "defined", "specified"], function(a) {
			req[a] = function() {
				var b = contexts[defContextName];
				return b.require[a].apply(b, arguments)
			}
		}), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(a, b, c) {
			var d = a.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
			return d.type = a.scriptType || "text/javascript", d.charset = "utf-8", d.async = !0, d
		}, req.load = function(a, b, c) {
			var d, e = a && a.config || {};
			if (isBrowser) return d = req.createNode(e, b, c), e.onNodeCreated && e.onNodeCreated(d, e, b, c), d.setAttribute("data-requirecontext", a.contextName), d.setAttribute("data-requiremodule", b), !d.attachEvent || d.attachEvent.toString && d.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (d.addEventListener("load", a.onScriptLoad, !1), d.addEventListener("error", a.onScriptError, !1)) : (useInteractive = !0, d.attachEvent("onreadystatechange", a.onScriptLoad)), d.src = c, currentlyAddingScript = d, baseElement ? head.insertBefore(d, baseElement) : head.appendChild(d), currentlyAddingScript = null, d;
			if (isWebWorker) try {
				importScripts(c), a.completeLoad(b)
			} catch (f) {
				a.onError(makeError("importscripts", "importScripts failed for " + b + " at " + c, f, [b]))
			}
		}, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(a) {
			return head || (head = a.parentNode), dataMain = a.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
		}), define = function(a, b, c) {
			var d, e;
			"string" != typeof a && (c = b, b = a, a = null), isArray(b) || (c = b, b = null), !b && isFunction(c) && (b = [], c.length && (c.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(a, c) {
				b.push(c)
			}), b = (1 === c.length ? ["require"] : ["require", "exports", "module"]).concat(b))), useInteractive && (d = currentlyAddingScript || getInteractiveScript(), d && (a || (a = d.getAttribute("data-requiremodule")), e = contexts[d.getAttribute("data-requirecontext")])), e ? (e.defQueue.push([a, b, c]), e.defQueueMap[a] = !0) : globalDefQueue.push([a, b, c])
		}, define.amd = {
			jQuery: !0
		}, req.exec = function(text) {
			return eval(text)
		}, req(cfg)
	}
}(this), require.config({
	baseUrl: "../scripts",
	paths: {
		text: "../../libs/requirejs-text/text",
		"lib/fileUpload": "lib/jquery/jquery.fileupload",
		"lib/widget": "lib/jquery/jquery.ui.widget",
		"lib/iframe-transport": "lib/jquery/jquery.iframe-transport",
		"lib/waypoints": "lib/jquery/waypoints",
		"lib/datepicker": "lib/jquery/jquery.ui.datepicker",
		"lib/sticky": "lib/jquery/jquery.sticky",
		"lib/tooltipster": "lib/jquery/jquery.tooltipster",
		"lib/tap": "lib/tap",
		ZeroClipboard: "../../libs/zeroclipboard/dist/ZeroClipboard",
		"lib/fastclick": "lib/fastClick"
	},
	shim: {
		"lib/fileUpload": {
			deps: ["lib/iframe-transport", "lib/widget"]
		}
	}
});