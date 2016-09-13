/*!

Holder - client side image placeholders
Version 2.6.0+51ebp
© 2015 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  http://opensource.org/licenses/MIT

*/
/*!
 * AnchorJS - v1.0.1 - 2015-05-15
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2015 Bryan Braun; Licensed MIT
 */
function AnchorJS(a) {
    "use strict";
    this.options = a || {},
    this._applyRemainingDefaultOptions = function(a) {
        this.options.icon = this.options.hasOwnProperty("icon") ? a.icon: "&#xe9cb",
        this.options.visible = this.options.hasOwnProperty("visible") ? a.visible: "hover",
        this.options.placement = this.options.hasOwnProperty("placement") ? a.placement: "right",
        this.options["class"] = this.options.hasOwnProperty("class") ? a["class"] : ""
    },
    this._applyRemainingDefaultOptions(a),
    this.add = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o;
        if (this._applyRemainingDefaultOptions(this.options), a) {
            if ("string" != typeof a) throw new Error("The selector provided to AnchorJS was invalid.")
        } else a = "h1, h2, h3, h4, h5, h6";
        if (b = document.querySelectorAll(a), 0 === b.length) return ! 1;
        for (this._addBaselineStyles(), c = document.querySelectorAll("[id]"), d = [].map.call(c,
        function(a) {
            return a.id
        }), f = 0; f < b.length; f++) {
            if (b[f].hasAttribute("id")) e = b[f].getAttribute("id");
            else {
                g = b[f].textContent,
                h = g.replace(/[^\w\s-]/gi, "").replace(/\s+/g, "-").replace(/-{2,}/g, "-").substring(0, 32).replace(/^-+|-+$/gm, "").toLowerCase(),
                k = h,
                j = 0;
                do void 0 !== i && (k = h + "-" + j),
                i = d.indexOf(k),
                j += 1;
                while ( - 1 !== i);
                i = void 0,
                d.push(k),
                b[f].setAttribute("id", k),
                e = k
            }
            l = e.replace(/-/g, " "),
            m = '<a class="anchorjs-link ' + this.options["class"] + '" href="#' + e + '" aria-label="Anchor link for: ' + l + '" data-anchorjs-icon="' + this.options.icon + '"></a>',
            n = document.createElement("div"),
            n.innerHTML = m,
            o = n.childNodes,
            "always" === this.options.visible && (o[0].style.opacity = "1"),
            "&#xe9cb" === this.options.icon && (o[0].style.fontFamily = "anchorjs-icons", o[0].style.fontStyle = "normal", o[0].style.fontVariant = "normal", o[0].style.fontWeight = "normal"),
            "left" === this.options.placement ? (o[0].style.position = "absolute", o[0].style.marginLeft = "-1em", o[0].style.paddingRight = "0.5em", b[f].insertBefore(o[0], b[f].firstChild)) : (o[0].style.paddingLeft = "0.375em", b[f].appendChild(o[0]))
        }
        return this
    },
    this.remove = function(a) {
        for (var b, c = document.querySelectorAll(a), d = 0; d < c.length; d++) b = c[d].querySelector(".anchorjs-link"),
        b && c[d].removeChild(b);
        return this
    },
    this._addBaselineStyles = function() {
        if (null === document.head.querySelector("style.anchorjs")) {
            var a, b = document.createElement("style"),
            c = " .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",
            d = " *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",
            e = ' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',
            f = " [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";
            b.className = "anchorjs",
            b.appendChild(document.createTextNode("")),
            a = document.head.querySelector('[rel="stylesheet"], style'),
            void 0 === a ? document.head.appendChild(b) : document.head.insertBefore(b, a),
            b.sheet.insertRule(c, b.sheet.cssRules.length),
            b.sheet.insertRule(d, b.sheet.cssRules.length),
            b.sheet.insertRule(f, b.sheet.cssRules.length),
            b.sheet.insertRule(e, b.sheet.cssRules.length)
        }
    }
} !
function(a, b) {
    "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? exports.Holder = b() : a.Holder = b()
} (this,
function() {
    return function(a) {
        function b(d) {
            if (c[d]) return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b),
            e.loaded = !0,
            e.exports
        }
        var c = {};
        return b.m = a,
        b.c = c,
        b.p = "",
        b(0)
    } ([function(a, b, c) { (function(b) {
            function d(a, b, c, d) {
                var g = e(c.substr(c.lastIndexOf(a.domain)), a);
                g && f({
                    mode: null,
                    el: d,
                    flags: g,
                    engineSettings: b
                })
            }
            function e(a, b) {
                for (var c = {
                    theme: y(K.settings.themes.gray, null),
                    stylesheets: b.stylesheets,
                    holderURL: []
                },
                d = !1, e = String.fromCharCode(11), f = a.replace(/([^\\])\//g, "$1" + e).split(e), g = /%[0-9a-f]{2}/gi, h = f.length, i = 0; h > i; i++) {
                    var j = f[i];
                    if (j.match(g)) try {
                        j = decodeURIComponent(j)
                    } catch(k) {
                        j = f[i]
                    }
                    var l = !1;
                    if (K.flags.dimensions.match(j)) d = !0,
                    c.dimensions = K.flags.dimensions.output(j),
                    l = !0;
                    else if (K.flags.fluid.match(j)) d = !0,
                    c.dimensions = K.flags.fluid.output(j),
                    c.fluid = !0,
                    l = !0;
                    else if (K.flags.textmode.match(j)) c.textmode = K.flags.textmode.output(j),
                    l = !0;
                    else if (K.flags.colors.match(j)) {
                        var m = K.flags.colors.output(j);
                        c.theme = y(c.theme, m),
                        l = !0
                    } else if (b.themes[j]) b.themes.hasOwnProperty(j) && (c.theme = y(b.themes[j], null)),
                    l = !0;
                    else if (K.flags.font.match(j)) c.font = K.flags.font.output(j),
                    l = !0;
                    else if (K.flags.auto.match(j)) c.auto = !0,
                    l = !0;
                    else if (K.flags.text.match(j)) c.text = K.flags.text.output(j),
                    l = !0;
                    else if (K.flags.size.match(j)) c.size = K.flags.size.output(j),
                    l = !0;
                    else if (K.flags.random.match(j)) {
                        null == K.vars.cache.themeKeys && (K.vars.cache.themeKeys = Object.keys(b.themes));
                        var n = K.vars.cache.themeKeys[0 | Math.random() * K.vars.cache.themeKeys.length];
                        c.theme = y(b.themes[n], null),
                        l = !0
                    }
                    l && c.holderURL.push(j)
                }
                return c.holderURL.unshift(b.domain),
                c.holderURL = c.holderURL.join("/"),
                d ? c: !1
            }
            function f(a) {
                var b = a.mode,
                c = a.el,
                d = a.flags,
                e = a.engineSettings,
                f = d.dimensions,
                h = d.theme,
                i = f.width + "x" + f.height;
                if (b = null == b ? d.fluid ? "fluid": "image": b, null != d.text && (h.text = d.text, "object" === c.nodeName.toLowerCase())) {
                    for (var l = h.text.split("\\n"), m = 0; m < l.length; m++) l[m] = A(l[m]);
                    h.text = l.join("\\n")
                }
                var n = d.holderURL,
                o = y(e, null);
                if (d.font && (h.font = d.font, !o.noFontFallback && "img" === c.nodeName.toLowerCase() && K.setup.supportsCanvas && "svg" === o.renderer && (o = y(o, {
                    renderer: "canvas"
                }))), d.font && "canvas" == o.renderer && (o.reRender = !0), "background" == b) null == c.getAttribute("data-background-src") && p(c, {
                    "data-background-src": n
                });
                else {
                    var q = {};
                    q[K.vars.dataAttr] = n,
                    p(c, q)
                }
                d.theme = h,
                c.holderData = {
                    flags: d,
                    engineSettings: o
                },
                ("image" == b || "fluid" == b) && p(c, {
                    alt: h.text ? h.text + " [" + i + "]": i
                });
                var r = {
                    mode: b,
                    el: c,
                    holderSettings: {
                        dimensions: f,
                        theme: h,
                        flags: d
                    },
                    engineSettings: o
                };
                "image" == b ? ("html" != o.renderer && d.auto || (c.style.width = f.width + "px", c.style.height = f.height + "px"), "html" == o.renderer ? c.style.backgroundColor = h.background: (g(r), "exact" == d.textmode && (c.holderData.resizeUpdate = !0, K.vars.resizableImages.push(c), j(c)))) : "background" == b && "html" != o.renderer ? g(r) : "fluid" == b && (c.holderData.resizeUpdate = !0, "%" == f.height.slice( - 1) ? c.style.height = f.height: null != d.auto && d.auto || (c.style.height = f.height + "px"), "%" == f.width.slice( - 1) ? c.style.width = f.width: null != d.auto && d.auto || (c.style.width = f.width + "px"), ("inline" == c.style.display || "" === c.style.display || "none" == c.style.display) && (c.style.display = "block"), k(c), "html" == o.renderer ? c.style.backgroundColor = h.background: (K.vars.resizableImages.push(c), j(c)))
            }
            function g(a) {
                function c() {
                    var b = null;
                    switch (i.renderer) {
                    case "canvas":
                        b = M(k, a);
                        break;
                    case "svg":
                        b = N(k, a);
                        break;
                    default:
                        throw "Holder: invalid renderer: " + i.renderer
                    }
                    return b
                }
                var d = null,
                e = a.mode,
                f = a.holderSettings,
                g = a.el,
                i = a.engineSettings;
                switch (i.renderer) {
                case "svg":
                    if (!K.setup.supportsSVG) return;
                    break;
                case "canvas":
                    if (!K.setup.supportsCanvas) return;
                    break;
                default:
                    return
                }
                var j = {
                    width: f.dimensions.width,
                    height: f.dimensions.height,
                    theme: f.theme,
                    flags: f.flags
                },
                k = h(j);
                if (d = c(), null == d) throw "Holder: couldn't render placeholder";
                "background" == e ? (g.style.backgroundImage = "url(" + d + ")", g.style.backgroundSize = j.width + "px " + j.height + "px") : ("img" === g.nodeName.toLowerCase() ? p(g, {
                    src: d
                }) : "object" === g.nodeName.toLowerCase() && (p(g, {
                    data: d
                }), p(g, {
                    type: "image/svg+xml"
                })), i.reRender && b.setTimeout(function() {
                    var a = c();
                    if (null == a) throw "Holder: couldn't render placeholder";
                    "img" === g.nodeName.toLowerCase() ? p(g, {
                        src: a
                    }) : "object" === g.nodeName.toLowerCase() && (p(g, {
                        data: a
                    }), p(g, {
                        type: "image/svg+xml"
                    }))
                },
                100)),
                p(g, {
                    "data-holder-rendered": !0
                })
            }
            function h(a) {
                function b(a, b, c, d) {
                    b.width = c,
                    b.height = d,
                    a.width = Math.max(a.width, b.width),
                    a.height += b.height,
                    a.add(b)
                }
                var c = K.defaults.size;
                switch (parseFloat(a.theme.size) ? c = a.theme.size: parseFloat(a.flags.size) && (c = a.flags.size), a.font = {
                    family: a.theme.font ? a.theme.font: "Arial, Helvetica, Open Sans, sans-serif",
                    size: i(a.width, a.height, c),
                    units: a.theme.units ? a.theme.units: K.defaults.units,
                    weight: a.theme.fontweight ? a.theme.fontweight: "bold"
                },
                a.text = a.theme.text ? a.theme.text: Math.floor(a.width) + "x" + Math.floor(a.height), a.flags.textmode) {
                case "literal":
                    a.text = a.flags.dimensions.width + "x" + a.flags.dimensions.height;
                    break;
                case "exact":
                    if (!a.flags.exactDimensions) break;
                    a.text = Math.floor(a.flags.exactDimensions.width) + "x" + Math.floor(a.flags.exactDimensions.height)
                }
                var d = new w({
                    width: a.width,
                    height: a.height
                }),
                e = d.Shape,
                f = new e.Rect("holderBg", {
                    fill: a.theme.background
                });
                f.resize(a.width, a.height),
                d.root.add(f);
                var g = new e.Group("holderTextGroup", {
                    text: a.text,
                    align: "center",
                    font: a.font,
                    fill: a.theme.foreground
                });
                g.moveTo(null, null, 1),
                d.root.add(g);
                var h = g.textPositionData = L(d);
                if (!h) throw "Holder: staging fallback not supported yet.";
                g.properties.leading = h.boundingBox.height;
                var j = null,
                k = null;
                if (h.lineCount > 1) {
                    var l = 0,
                    m = 0,
                    n = a.width * K.setup.lineWrapRatio,
                    o = 0;
                    k = new e.Group("line" + o);
                    for (var p = 0; p < h.words.length; p++) {
                        var q = h.words[p];
                        j = new e.Text(q.text);
                        var r = "\\n" == q.text; (l + q.width >= n || r === !0) && (b(g, k, l, g.properties.leading), l = 0, m += g.properties.leading, o += 1, k = new e.Group("line" + o), k.y = m),
                        r !== !0 && (j.moveTo(l, 0), l += h.spaceWidth + q.width, k.add(j))
                    }
                    b(g, k, l, g.properties.leading);
                    for (var s in g.children) k = g.children[s],
                    k.moveTo((g.width - k.width) / 2, null, null);
                    g.moveTo((a.width - g.width) / 2, (a.height - g.height) / 2, null),
                    (a.height - g.height) / 2 < 0 && g.moveTo(null, 0, null)
                } else j = new e.Text(a.text),
                k = new e.Group("line0"),
                k.add(j),
                g.add(k),
                g.moveTo((a.width - h.boundingBox.width) / 2, (a.height - h.boundingBox.height) / 2, null);
                return d
            }
            function i(a, b, c) {
                var d = parseInt(a, 10),
                e = parseInt(b, 10),
                f = Math.max(d, e),
                g = Math.min(d, e),
                h = .8 * Math.min(g, f * K.defaults.scale);
                return Math.round(Math.max(c, h))
            }
            function j(a) {
                var b;
                b = null == a || null == a.nodeType ? K.vars.resizableImages: [a];
                for (var c = 0,
                d = b.length; d > c; c++) {
                    var e = b[c];
                    if (e.holderData) {
                        var f = e.holderData.flags,
                        h = E(e);
                        if (h) {
                            if (!e.holderData.resizeUpdate) continue;
                            if (f.fluid && f.auto) {
                                var i = e.holderData.fluidConfig;
                                switch (i.mode) {
                                case "width":
                                    h.height = h.width / i.ratio;
                                    break;
                                case "height":
                                    h.width = h.height * i.ratio
                                }
                            }
                            var j = {
                                mode: "image",
                                holderSettings: {
                                    dimensions: h,
                                    theme: f.theme,
                                    flags: f
                                },
                                el: e,
                                engineSettings: e.holderData.engineSettings
                            };
                            "exact" == f.textmode && (f.exactDimensions = h, j.holderSettings.dimensions = f.dimensions),
                            g(j)
                        } else n(e)
                    }
                }
            }
            function k(a) {
                if (a.holderData) {
                    var b = E(a);
                    if (b) {
                        var c = a.holderData.flags,
                        d = {
                            fluidHeight: "%" == c.dimensions.height.slice( - 1),
                            fluidWidth: "%" == c.dimensions.width.slice( - 1),
                            mode: null,
                            initialDimensions: b
                        };
                        d.fluidWidth && !d.fluidHeight ? (d.mode = "width", d.ratio = d.initialDimensions.width / parseFloat(c.dimensions.height)) : !d.fluidWidth && d.fluidHeight && (d.mode = "height", d.ratio = parseFloat(c.dimensions.width) / d.initialDimensions.height),
                        a.holderData.fluidConfig = d
                    } else n(a)
                }
            }
            function l() {
                for (var a, c = [], d = Object.keys(K.vars.invisibleImages), e = 0, f = d.length; f > e; e++) a = K.vars.invisibleImages[d[e]],
                E(a) && "img" == a.nodeName.toLowerCase() && (c.push(a), delete K.vars.invisibleImages[d[e]]);
                c.length && J.run({
                    images: c
                }),
                b.requestAnimationFrame(l)
            }
            function m() {
                K.vars.visibilityCheckStarted || (b.requestAnimationFrame(l), K.vars.visibilityCheckStarted = !0)
            }
            function n(a) {
                a.holderData.invisibleId || (K.vars.invisibleId += 1, K.vars.invisibleImages["i" + K.vars.invisibleId] = a, a.holderData.invisibleId = K.vars.invisibleId)
            }
            function o(a, b) {
                return null == b ? document.createElement(a) : document.createElementNS(b, a)
            }
            function p(a, b) {
                for (var c in b) a.setAttribute(c, b[c])
            }
            function q(a, b, c) {
                var d, e;
                null == a ? (a = o("svg", F), d = o("defs", F), e = o("style", F), p(e, {
                    type: "text/css"
                }), d.appendChild(e), a.appendChild(d)) : e = a.querySelector("style"),
                a.webkitMatchesSelector && a.setAttribute("xmlns", F);
                for (var f = 0; f < a.childNodes.length; f++) a.childNodes[f].nodeType === G && a.removeChild(a.childNodes[f]);
                for (; e.childNodes.length;) e.removeChild(e.childNodes[0]);
                return p(a, {
                    width: b,
                    height: c,
                    viewBox: "0 0 " + b + " " + c,
                    preserveAspectRatio: "none"
                }),
                a
            }
            function r(a, c) {
                if (b.XMLSerializer) {
                    var d = new XMLSerializer,
                    e = "",
                    f = c.stylesheets;
                    if (c.svgXMLStylesheet) {
                        for (var g = s(), h = f.length - 1; h >= 0; h--) {
                            var i = g.createProcessingInstruction("xml-stylesheet", 'href="' + f[h] + '" rel="stylesheet"');
                            g.insertBefore(i, g.firstChild)
                        }
                        var j = g.createProcessingInstruction("xml", 'version="1.0" encoding="UTF-8" standalone="yes"');
                        g.insertBefore(j, g.firstChild),
                        g.removeChild(g.documentElement),
                        e = d.serializeToString(g)
                    }
                    var k = d.serializeToString(a);
                    return k = k.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"),
                    e + k
                }
            }
            function s() {
                return b.DOMParser ? (new DOMParser).parseFromString("<xml />", "application/xml") : void 0
            }
            function t(a) {
                K.vars.debounceTimer || a.call(this),
                K.vars.debounceTimer && b.clearTimeout(K.vars.debounceTimer),
                K.vars.debounceTimer = b.setTimeout(function() {
                    K.vars.debounceTimer = null,
                    a.call(this)
                },
                K.setup.debounce)
            }
            function u() {
                t(function() {
                    j(null)
                })
            }
            var v = c(1),
            w = c(2),
            x = c(3),
            y = x.extend,
            z = x.cssProps,
            A = x.encodeHtmlEntity,
            B = x.decodeHtmlEntity,
            C = x.imageExists,
            D = x.getNodeArray,
            E = x.dimensionCheck,
            F = "http://www.w3.org/2000/svg",
            G = 8,
            H = "2.6.0",
            I = "\nCreated with Holder.js " + H + ".\nLearn more at http://holderjs.com\n(c) 2012-2015 Ivan Malopinsky - http://imsky.co\n",
            J = {
                version: H,
                addTheme: function(a, b) {
                    return null != a && null != b && (K.settings.themes[a] = b),
                    delete K.vars.cache.themeKeys,
                    this
                },
                addImage: function(a, b) {
                    var c = document.querySelectorAll(b);
                    if (c.length) for (var d = 0,
                    e = c.length; e > d; d++) {
                        var f = o("img"),
                        g = {};
                        g[K.vars.dataAttr] = a,
                        p(f, g),
                        c[d].appendChild(f)
                    }
                    return this
                },
                setResizeUpdate: function(a, b) {
                    a.holderData && (a.holderData.resizeUpdate = !!b, a.holderData.resizeUpdate && j(a))
                },
                run: function(a) {
                    a = a || {};
                    var c = {},
                    g = y(K.settings, a);
                    K.vars.preempted = !0,
                    K.vars.dataAttr = g.dataAttr || K.vars.dataAttr,
                    c.renderer = g.renderer ? g.renderer: K.setup.renderer,
                    -1 === K.setup.renderers.join(",").indexOf(c.renderer) && (c.renderer = K.setup.supportsSVG ? "svg": K.setup.supportsCanvas ? "canvas": "html");
                    var h = D(g.images),
                    i = D(g.bgnodes),
                    j = D(g.stylenodes),
                    k = D(g.objects);
                    c.stylesheets = [],
                    c.svgXMLStylesheet = !0,
                    c.noFontFallback = g.noFontFallback ? g.noFontFallback: !1;
                    for (var l = 0; l < j.length; l++) {
                        var m = j[l];
                        if (m.attributes.rel && m.attributes.href && "stylesheet" == m.attributes.rel.value) {
                            var n = m.attributes.href.value,
                            p = o("a");
                            p.href = n;
                            var q = p.protocol + "//" + p.host + p.pathname + p.search;
                            c.stylesheets.push(q)
                        }
                    }
                    for (l = 0; l < i.length; l++) if (b.getComputedStyle) {
                        var r = b.getComputedStyle(i[l], null).getPropertyValue("background-image"),
                        s = i[l].getAttribute("data-background-src"),
                        t = null;
                        t = null == s ? r: s;
                        var u = null,
                        v = "?" + g.domain + "/";
                        if (0 === t.indexOf(v)) u = t.slice(1);
                        else if ( - 1 != t.indexOf(v)) {
                            var w = t.substr(t.indexOf(v)).slice(1),
                            x = w.match(/([^\"]*)"?\)/);
                            null != x && (u = x[1])
                        }
                        if (null != u) {
                            var z = e(u, g);
                            z && f({
                                mode: "background",
                                el: i[l],
                                flags: z,
                                engineSettings: c
                            })
                        }
                    }
                    for (l = 0; l < k.length; l++) {
                        var A = k[l],
                        B = {};
                        try {
                            B.data = A.getAttribute("data"),
                            B.dataSrc = A.getAttribute(K.vars.dataAttr)
                        } catch(E) {}
                        var F = null != B.data && 0 === B.data.indexOf(g.domain),
                        G = null != B.dataSrc && 0 === B.dataSrc.indexOf(g.domain);
                        F ? d(g, c, B.data, A) : G && d(g, c, B.dataSrc, A)
                    }
                    for (l = 0; l < h.length; l++) {
                        var H = h[l],
                        I = {};
                        try {
                            I.src = H.getAttribute("src"),
                            I.dataSrc = H.getAttribute(K.vars.dataAttr),
                            I.rendered = H.getAttribute("data-holder-rendered")
                        } catch(E) {}
                        var J = null != I.src,
                        L = null != I.dataSrc && 0 === I.dataSrc.indexOf(g.domain),
                        M = null != I.rendered && "true" == I.rendered;
                        J ? 0 === I.src.indexOf(g.domain) ? d(g, c, I.src, H) : L && (M ? d(g, c, I.dataSrc, H) : !
                        function(a, b, c, e, f) {
                            C(a,
                            function(a) {
                                a || d(b, c, e, f)
                            })
                        } (I.src, g, c, I.dataSrc, H)) : L && d(g, c, I.dataSrc, H)
                    }
                    return this
                }
            },
            K = {
                settings: {
                    domain: "holder.js",
                    images: "img",
                    objects: "object",
                    bgnodes: "body .holderjs",
                    stylenodes: "head link.holderjs",
                    stylesheets: [],
                    themes: {
                        gray: {
                            background: "#EEEEEE",
                            foreground: "#AAAAAA"
                        },
                        social: {
                            background: "#3a5a97",
                            foreground: "#FFFFFF"
                        },
                        industrial: {
                            background: "#434A52",
                            foreground: "#C2F200"
                        },
                        sky: {
                            background: "#0D8FDB",
                            foreground: "#FFFFFF"
                        },
                        vine: {
                            background: "#39DBAC",
                            foreground: "#1E292C"
                        },
                        lava: {
                            background: "#F8591A",
                            foreground: "#1C2846"
                        }
                    }
                },
                defaults: {
                    size: 10,
                    units: "pt",
                    scale: 1 / 16
                },
                flags: {
                    dimensions: {
                        regex: /^(\d+)x(\d+)$/,
                        output: function(a) {
                            var b = this.regex.exec(a);
                            return {
                                width: +b[1],
                                height: +b[2]
                            }
                        }
                    },
                    fluid: {
                        regex: /^([0-9]+%?)x([0-9]+%?)$/,
                        output: function(a) {
                            var b = this.regex.exec(a);
                            return {
                                width: b[1],
                                height: b[2]
                            }
                        }
                    },
                    colors: {
                        regex: /(?:#|\^)([0-9a-f]{3,})\:(?:#|\^)([0-9a-f]{3,})/i,
                        output: function(a) {
                            var b = this.regex.exec(a);
                            return {
                                foreground: "#" + b[2],
                                background: "#" + b[1]
                            }
                        }
                    },
                    text: {
                        regex: /text\:(.*)/,
                        output: function(a) {
                            return this.regex.exec(a)[1].replace("\\/", "/")
                        }
                    },
                    font: {
                        regex: /font\:(.*)/,
                        output: function(a) {
                            return this.regex.exec(a)[1]
                        }
                    },
                    auto: {
                        regex: /^auto$/
                    },
                    textmode: {
                        regex: /textmode\:(.*)/,
                        output: function(a) {
                            return this.regex.exec(a)[1]
                        }
                    },
                    random: {
                        regex: /^random$/
                    },
                    size: {
                        regex: /size\:(\d+)/,
                        output: function(a) {
                            return this.regex.exec(a)[1]
                        }
                    }
                }
            },
            L = function() {
                var a = null,
                b = null,
                c = null;
                return function(d) {
                    var e = d.root;
                    if (K.setup.supportsSVG) {
                        var f = !1,
                        g = function(a) {
                            return document.createTextNode(a)
                        }; (null == a || a.parentNode !== document.body) && (f = !0),
                        a = q(a, e.properties.width, e.properties.height),
                        a.style.display = "block",
                        f && (b = o("text", F), c = g(null), p(b, {
                            x: 0
                        }), b.appendChild(c), a.appendChild(b), document.body.appendChild(a), a.style.visibility = "hidden", a.style.position = "absolute", a.style.top = "-100%", a.style.left = "-100%");
                        var h = e.children.holderTextGroup,
                        i = h.properties;
                        p(b, {
                            y: i.font.size,
                            style: z({
                                "font-weight": i.font.weight,
                                "font-size": i.font.size + i.font.units,
                                "font-family": i.font.family
                            })
                        }),
                        c.nodeValue = i.text;
                        var j = b.getBBox(),
                        k = Math.ceil(j.width / (e.properties.width * K.setup.lineWrapRatio)),
                        l = i.text.split(" "),
                        m = i.text.match(/\\n/g);
                        k += null == m ? 0 : m.length,
                        c.nodeValue = i.text.replace(/[ ]+/g, "");
                        var n = b.getComputedTextLength(),
                        r = j.width - n,
                        s = Math.round(r / Math.max(1, l.length - 1)),
                        t = [];
                        if (k > 1) {
                            c.nodeValue = "";
                            for (var u = 0; u < l.length; u++) if (0 !== l[u].length) {
                                c.nodeValue = B(l[u]);
                                var v = b.getBBox();
                                t.push({
                                    text: l[u],
                                    width: v.width
                                })
                            }
                        }
                        return a.style.display = "none",
                        {
                            spaceWidth: s,
                            lineCount: k,
                            boundingBox: j,
                            words: t
                        }
                    }
                    return ! 1
                }
            } (),
            M = function() {
                var a = o("canvas"),
                b = null;
                return function(c) {
                    null == b && (b = a.getContext("2d"));
                    var d = c.root;
                    a.width = K.dpr(d.properties.width),
                    a.height = K.dpr(d.properties.height),
                    b.textBaseline = "middle",
                    b.fillStyle = d.children.holderBg.properties.fill,
                    b.fillRect(0, 0, K.dpr(d.children.holderBg.width), K.dpr(d.children.holderBg.height));
                    var e = d.children.holderTextGroup;
                    e.properties,
                    b.font = e.properties.font.weight + " " + K.dpr(e.properties.font.size) + e.properties.font.units + " " + e.properties.font.family + ", monospace",
                    b.fillStyle = e.properties.fill;
                    for (var f in e.children) {
                        var g = e.children[f];
                        for (var h in g.children) {
                            var i = g.children[h],
                            j = K.dpr(e.x + g.x + i.x),
                            k = K.dpr(e.y + g.y + i.y + e.properties.leading / 2);
                            b.fillText(i.properties.text, j, k)
                        }
                    }
                    return a.toDataURL("image/png")
                }
            } (),
            N = function() {
                if (b.XMLSerializer) {
                    var a = s(),
                    c = q(null, 0, 0),
                    d = o("rect", F);
                    return c.appendChild(d),
                    function(b, e) {
                        var f = b.root;
                        q(c, f.properties.width, f.properties.height);
                        for (var g = c.querySelectorAll("g"), h = 0; h < g.length; h++) g[h].parentNode.removeChild(g[h]);
                        var i = e.holderSettings.flags.holderURL,
                        j = "holder_" + (Number(new Date) + 32768 + (0 | 32768 * Math.random())).toString(16),
                        k = o("g", F),
                        l = f.children.holderTextGroup,
                        m = l.properties,
                        n = o("g", F),
                        s = l.textPositionData,
                        t = "#" + j + " text { " + z({
                            fill: m.fill,
                            "font-weight": m.font.weight,
                            "font-family": m.font.family + ", monospace",
                            "font-size": m.font.size + m.font.units
                        }) + " } ",
                        u = a.createComment("\nSource URL: " + i + I),
                        v = a.createCDATASection(t),
                        w = c.querySelector("style");
                        p(k, {
                            id: j
                        }),
                        c.insertBefore(u, c.firstChild),
                        w.appendChild(v),
                        k.appendChild(d),
                        k.appendChild(n),
                        c.appendChild(k),
                        p(d, {
                            width: f.children.holderBg.width,
                            height: f.children.holderBg.height,
                            fill: f.children.holderBg.properties.fill
                        }),
                        l.y += .8 * s.boundingBox.height;
                        for (var x in l.children) {
                            var y = l.children[x];
                            for (var A in y.children) {
                                var B = y.children[A],
                                C = l.x + y.x + B.x,
                                D = l.y + y.y + B.y,
                                E = o("text", F),
                                G = document.createTextNode(null);
                                p(E, {
                                    x: C,
                                    y: D
                                }),
                                G.nodeValue = B.properties.text,
                                E.appendChild(G),
                                n.appendChild(E)
                            }
                        }
                        var H = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(r(c, e.engineSettings))));
                        return H
                    }
                }
            } ();
            for (var O in K.flags) K.flags.hasOwnProperty(O) && (K.flags[O].match = function(a) {
                return a.match(this.regex)
            });
            K.setup = {
                renderer: "html",
                debounce: 100,
                ratio: 1,
                supportsCanvas: !1,
                supportsSVG: !1,
                lineWrapRatio: .9,
                renderers: ["html", "canvas", "svg"]
            },
            K.dpr = function(a) {
                return a * K.setup.ratio
            },
            K.vars = {
                preempted: !1,
                resizableImages: [],
                invisibleImages: {},
                invisibleId: 0,
                visibilityCheckStarted: !1,
                debounceTimer: null,
                cache: {},
                dataAttr: "data-src"
            },
            function() {
                var a = 1,
                c = 1,
                d = o("canvas"),
                e = null;
                d.getContext && -1 != d.toDataURL("image/png").indexOf("data:image/png") && (K.setup.renderer = "canvas", e = d.getContext("2d"), K.setup.supportsCanvas = !0),
                K.setup.supportsCanvas && (a = b.devicePixelRatio || 1, c = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1),
                K.setup.ratio = a / c,
                document.createElementNS && document.createElementNS(F, "svg").createSVGRect && (K.setup.renderer = "svg", K.setup.supportsSVG = !0)
            } (),
            m(),
            v && v(function() {
                K.vars.preempted || J.run(),
                b.addEventListener ? (b.addEventListener("resize", u, !1), b.addEventListener("orientationchange", u, !1)) : b.attachEvent("onresize", u),
                "object" == typeof b.Turbolinks && b.document.addEventListener("page:change",
                function() {
                    J.run()
                })
            }),
            a.exports = J
        }).call(b,
        function() {
            return this
        } ())
    },
    function(a) {
        function b(a) {
            function b(a) {
                if (!v) {
                    if (!g.body) return e(b);
                    for (v = !0; a = w.shift();) e(a)
                }
            }
            function c(a) { (t || a.type === i || g[m] === l) && (d(), b())
            }
            function d() {
                t ? (g[s](q, c, j), a[s](i, c, j)) : (g[o](r, c), a[o](k, c))
            }
            function e(a, b) {
                setTimeout(a, +b >= 0 ? b: 1)
            }
            function f(a) {
                v ? e(a) : w.push(a)
            }
            null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded",
            function y() {
                document.removeEventListener("DOMContentLoaded", y, !1),
                document.readyState = "complete"
            },
            !1), document.readyState = "loading");
            var g = a.document,
            h = g.documentElement,
            i = "load",
            j = !1,
            k = "on" + i,
            l = "complete",
            m = "readyState",
            n = "attachEvent",
            o = "detachEvent",
            p = "addEventListener",
            q = "DOMContentLoaded",
            r = "onreadystatechange",
            s = "removeEventListener",
            t = p in g,
            u = j,
            v = j,
            w = [];
            if (g[m] === l) e(b);
            else if (t) g[p](q, c, j),
            a[p](i, c, j);
            else {
                g[n](r, c),
                a[n](k, c);
                try {
                    u = null == a.frameElement && h
                } catch(x) {}
                u && u.doScroll && !
                function z() {
                    if (!v) {
                        try {
                            u.doScroll("left")
                        } catch(a) {
                            return e(z, 50)
                        }
                        d(),
                        b()
                    }
                } ()
            }
            return f.version = "1.4.0",
            f.isReady = function() {
                return v
            },
            f
        }
        a.exports = "undefined" != typeof window && b(window)
    },
    function(a, b, c) {
        var d = c(4),
        e = function(a) {
            function b(a, b) {
                for (var c in b) a[c] = b[c];
                return a
            }
            var c = 1,
            e = d.defclass({
                constructor: function(a) {
                    c++,
                    this.parent = null,
                    this.children = {},
                    this.id = c,
                    this.name = "n" + c,
                    null != a && (this.name = a),
                    this.x = 0,
                    this.y = 0,
                    this.z = 0,
                    this.width = 0,
                    this.height = 0
                },
                resize: function(a, b) {
                    null != a && (this.width = a),
                    null != b && (this.height = b)
                },
                moveTo: function(a, b, c) {
                    this.x = null != a ? a: this.x,
                    this.y = null != b ? b: this.y,
                    this.z = null != c ? c: this.z
                },
                add: function(a) {
                    var b = a.name;
                    if (null != this.children[b]) throw "SceneGraph: child with that name already exists: " + b;
                    this.children[b] = a,
                    a.parent = this
                }
            }),
            f = d(e,
            function(b) {
                this.constructor = function() {
                    b.constructor.call(this, "root"),
                    this.properties = a
                }
            }),
            g = d(e,
            function(a) {
                function c(c, d) {
                    if (a.constructor.call(this, c), this.properties = {
                        fill: "#000"
                    },
                    null != d) b(this.properties, d);
                    else if (null != c && "string" != typeof c) throw "SceneGraph: invalid node name"
                }
                this.Group = d.extend(this, {
                    constructor: c,
                    type: "group"
                }),
                this.Rect = d.extend(this, {
                    constructor: c,
                    type: "rect"
                }),
                this.Text = d.extend(this, {
                    constructor: function(a) {
                        c.call(this),
                        this.properties.text = a
                    },
                    type: "text"
                })
            }),
            h = new f;
            return this.Shape = g,
            this.root = h,
            this
        };
        a.exports = e
    },
    function(a, b) { (function(a) {
            b.extend = function(a, b) {
                var c = {};
                for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
                if (null != b) for (var e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
                return c
            },
            b.cssProps = function(a) {
                var b = [];
                for (var c in a) a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
                return b.join(";")
            },
            b.encodeHtmlEntity = function(a) {
                for (var b = [], c = 0, d = a.length - 1; d >= 0; d--) c = a.charCodeAt(d),
                b.unshift(c > 128 ? ["&#", c, ";"].join("") : a[d]);
                return b.join("")
            },
            b.getNodeArray = function(b) {
                var c = null;
                return "string" == typeof b ? c = document.querySelectorAll(b) : a.NodeList && b instanceof a.NodeList ? c = b: a.Node && b instanceof a.Node ? c = [b] : a.HTMLCollection && b instanceof a.HTMLCollection ? c = b: b instanceof Array ? c = b: null === b && (c = []),
                c
            },
            b.imageExists = function(a, b) {
                var c = new Image;
                c.onerror = function() {
                    b.call(this, !1)
                },
                c.onload = function() {
                    b.call(this, !0)
                },
                c.src = a
            },
            b.decodeHtmlEntity = function(a) {
                return a.replace(/&#(\d+);/g,
                function(a, b) {
                    return String.fromCharCode(b)
                })
            },
            b.dimensionCheck = function(a) {
                var b = {
                    height: a.clientHeight,
                    width: a.clientWidth
                };
                return b.height && b.width ? b: !1
            }
        }).call(b,
        function() {
            return this
        } ())
    },
    function(a) {
        var b = function() {},
        c = Array.prototype.slice,
        d = function(a, d) {
            var e = b.prototype = "function" == typeof a ? a.prototype: a,
            f = new b,
            g = d.apply(f, c.call(arguments, 2).concat(e));
            if ("object" == typeof g) for (var h in g) f[h] = g[h];
            if (!f.hasOwnProperty("constructor")) return f;
            var i = f.constructor;
            return i.prototype = f,
            i
        };
        d.defclass = function(a) {
            var b = a.constructor;
            return b.prototype = a,
            b
        },
        d.extend = function(a, b) {
            return d(a,
            function(a) {
                return this.uber = a,
                b
            })
        },
        a.exports = d
    }])
}),
/*!
* ZeroClipboard
* The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
* Copyright (c) 2014 Jon Rohan, James M. Greene
* Licensed MIT
* http://zeroclipboard.org/
* v1.3.5
*/
!
function(a) {
    "use strict";
    function b(a) {
        return a.replace(/,/g, ".").replace(/[^0-9\.]/g, "")
    }
    function c(a) {
        return parseFloat(b(a)) >= 10
    }
    var d, e = {
        bridge: null,
        version: "0.0.0",
        disabled: null,
        outdated: null,
        ready: null
    },
    f = {},
    g = 0,
    h = {},
    i = 0,
    j = {},
    k = null,
    l = null,
    m = function() {
        var a, b, c, d, e = "ZeroClipboard.swf";
        if (document.currentScript && (d = document.currentScript.src));
        else {
            var f = document.getElementsByTagName("script");
            if ("readyState" in f[0]) for (a = f.length; a--&&("interactive" !== f[a].readyState || !(d = f[a].src)););
            else if ("loading" === document.readyState) d = f[f.length - 1].src;
            else {
                for (a = f.length; a--;) {
                    if (c = f[a].src, !c) {
                        b = null;
                        break
                    }
                    if (c = c.split("#")[0].split("?")[0], c = c.slice(0, c.lastIndexOf("/") + 1), null == b) b = c;
                    else if (b !== c) {
                        b = null;
                        break
                    }
                }
                null !== b && (d = b)
            }
        }
        return d && (d = d.split("#")[0].split("?")[0], e = d.slice(0, d.lastIndexOf("/") + 1) + e),
        e
    } (),
    n = function() {
        var a = /\-([a-z])/g,
        b = function(a, b) {
            return b.toUpperCase()
        };
        return function(c) {
            return c.replace(a, b)
        }
    } (),
    o = function(b, c) {
        var d, e, f;
        return a.getComputedStyle ? d = a.getComputedStyle(b, null).getPropertyValue(c) : (e = n(c), d = b.currentStyle ? b.currentStyle[e] : b.style[e]),
        "cursor" !== c || d && "auto" !== d || (f = b.tagName.toLowerCase(), "a" !== f) ? d: "pointer"
    },
    p = function(b) {
        b || (b = a.event);
        var c;
        this !== a ? c = this: b.target ? c = b.target: b.srcElement && (c = b.srcElement),
        K.activate(c)
    },
    q = function(a, b, c) {
        a && 1 === a.nodeType && (a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c))
    },
    r = function(a, b, c) {
        a && 1 === a.nodeType && (a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c))
    },
    s = function(a, b) {
        if (!a || 1 !== a.nodeType) return a;
        if (a.classList) return a.classList.contains(b) || a.classList.add(b),
        a;
        if (b && "string" == typeof b) {
            var c = (b || "").split(/\s+/);
            if (1 === a.nodeType) if (a.className) {
                for (var d = " " + a.className + " ",
                e = a.className,
                f = 0,
                g = c.length; g > f; f++) d.indexOf(" " + c[f] + " ") < 0 && (e += " " + c[f]);
                a.className = e.replace(/^\s+|\s+$/g, "")
            } else a.className = b
        }
        return a
    },
    t = function(a, b) {
        if (!a || 1 !== a.nodeType) return a;
        if (a.classList) return a.classList.contains(b) && a.classList.remove(b),
        a;
        if (b && "string" == typeof b || void 0 === b) {
            var c = (b || "").split(/\s+/);
            if (1 === a.nodeType && a.className) if (b) {
                for (var d = (" " + a.className + " ").replace(/[\n\t]/g, " "), e = 0, f = c.length; f > e; e++) d = d.replace(" " + c[e] + " ", " ");
                a.className = d.replace(/^\s+|\s+$/g, "")
            } else a.className = ""
        }
        return a
    },
    u = function() {
        var a, b, c, d = 1;
        return "function" == typeof document.body.getBoundingClientRect && (a = document.body.getBoundingClientRect(), b = a.right - a.left, c = document.body.offsetWidth, d = Math.round(b / c * 100) / 100),
        d
    },
    v = function(b, c) {
        var d = {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            zIndex: B(c) - 1
        };
        if (b.getBoundingClientRect) {
            var e, f, g, h = b.getBoundingClientRect();
            "pageXOffset" in a && "pageYOffset" in a ? (e = a.pageXOffset, f = a.pageYOffset) : (g = u(), e = Math.round(document.documentElement.scrollLeft / g), f = Math.round(document.documentElement.scrollTop / g));
            var i = document.documentElement.clientLeft || 0,
            j = document.documentElement.clientTop || 0;
            d.left = h.left + e - i,
            d.top = h.top + f - j,
            d.width = "width" in h ? h.width: h.right - h.left,
            d.height = "height" in h ? h.height: h.bottom - h.top
        }
        return d
    },
    w = function(a, b) {
        var c = null == b || b && b.cacheBust === !0 && b.useNoCache === !0;
        return c ? ( - 1 === a.indexOf("?") ? "?": "&") + "noCache=" + (new Date).getTime() : ""
    },
    x = function(b) {
        var c, d, e, f = [],
        g = [],
        h = [];
        if (b.trustedOrigins && ("string" == typeof b.trustedOrigins ? g.push(b.trustedOrigins) : "object" == typeof b.trustedOrigins && "length" in b.trustedOrigins && (g = g.concat(b.trustedOrigins))), b.trustedDomains && ("string" == typeof b.trustedDomains ? g.push(b.trustedDomains) : "object" == typeof b.trustedDomains && "length" in b.trustedDomains && (g = g.concat(b.trustedDomains))), g.length) for (c = 0, d = g.length; d > c; c++) if (g.hasOwnProperty(c) && g[c] && "string" == typeof g[c]) {
            if (e = E(g[c]), !e) continue;
            if ("*" === e) {
                h = [e];
                break
            }
            h.push.apply(h, [e, "//" + e, a.location.protocol + "//" + e])
        }
        return h.length && f.push("trustedOrigins=" + encodeURIComponent(h.join(","))),
        "string" == typeof b.jsModuleId && b.jsModuleId && f.push("jsModuleId=" + encodeURIComponent(b.jsModuleId)),
        f.join("&")
    },
    y = function(a, b, c) {
        if ("function" == typeof b.indexOf) return b.indexOf(a, c);
        var d, e = b.length;
        for ("undefined" == typeof c ? c = 0 : 0 > c && (c = e + c), d = c; e > d; d++) if (b.hasOwnProperty(d) && b[d] === a) return d;
        return - 1
    },
    z = function(a) {
        if ("string" == typeof a) throw new TypeError("ZeroClipboard doesn't accept query strings.");
        return a.length ? a: [a]
    },
    A = function(b, c, d, e) {
        e ? a.setTimeout(function() {
            b.apply(c, d)
        },
        0) : b.apply(c, d)
    },
    B = function(a) {
        var b, c;
        return a && ("number" == typeof a && a > 0 ? b = a: "string" == typeof a && (c = parseInt(a, 10)) && !isNaN(c) && c > 0 && (b = c)),
        b || ("number" == typeof N.zIndex && N.zIndex > 0 ? b = N.zIndex: "string" == typeof N.zIndex && (c = parseInt(N.zIndex, 10)) && !isNaN(c) && c > 0 && (b = c)),
        b || 0
    },
    C = function(a, b) {
        if (a && b !== !1 && "undefined" != typeof console && console && (console.warn || console.log)) {
            var c = "`" + a + "` is deprecated. See docs for more info:\n    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";
            console.warn ? console.warn(c) : console.log(c)
        }
    },
    D = function() {
        var a, b, c, d, e, f, g = arguments[0] || {};
        for (a = 1, b = arguments.length; b > a; a++) if (null != (c = arguments[a])) for (d in c) if (c.hasOwnProperty(d)) {
            if (e = g[d], f = c[d], g === f) continue;
            void 0 !== f && (g[d] = f)
        }
        return g
    },
    E = function(a) {
        if (null == a || "" === a) return null;
        if (a = a.replace(/^\s+|\s+$/g, ""), "" === a) return null;
        var b = a.indexOf("//");
        a = -1 === b ? a: a.slice(b + 2);
        var c = a.indexOf("/");
        return a = -1 === c ? a: -1 === b || 0 === c ? null: a.slice(0, c),
        a && ".swf" === a.slice( - 4).toLowerCase() ? null: a || null
    },
    F = function() {
        var a = function(a, b) {
            var c, d, e;
            if (null != a && "*" !== b[0] && ("string" == typeof a && (a = [a]), "object" == typeof a && "length" in a)) for (c = 0, d = a.length; d > c; c++) if (a.hasOwnProperty(c) && (e = E(a[c]))) {
                if ("*" === e) {
                    b.length = 0,
                    b.push("*");
                    break
                } - 1 === y(e, b) && b.push(e)
            }
        },
        b = {
            always: "always",
            samedomain: "sameDomain",
            never: "never"
        };
        return function(c, d) {
            var e, f = d.allowScriptAccess;
            if ("string" == typeof f && (e = f.toLowerCase()) && /^always|samedomain|never$/.test(e)) return b[e];
            var g = E(d.moviePath);
            null === g && (g = c);
            var h = [];
            a(d.trustedOrigins, h),
            a(d.trustedDomains, h);
            var i = h.length;
            if (i > 0) {
                if (1 === i && "*" === h[0]) return "always";
                if ( - 1 !== y(c, h)) return 1 === i && c === g ? "sameDomain": "always"
            }
            return "never"
        }
    } (),
    G = function(a) {
        if (null == a) return [];
        if (Object.keys) return Object.keys(a);
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(c);
        return b
    },
    H = function(a) {
        if (a) for (var b in a) a.hasOwnProperty(b) && delete a[b];
        return a
    },
    I = function() {
        try {
            return document.activeElement
        } catch(a) {}
        return null
    },
    J = function() {
        var a = !1;
        if ("boolean" == typeof e.disabled) a = e.disabled === !1;
        else {
            if ("function" == typeof ActiveXObject) try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (a = !0)
            } catch(b) {} ! a && navigator.mimeTypes["application/x-shockwave-flash"] && (a = !0)
        }
        return a
    },
    K = function(a, b) {
        return this instanceof K ? (this.id = "" + g++, h[this.id] = {
            instance: this,
            elements: [],
            handlers: {}
        },
        a && this.clip(a), "undefined" != typeof b && (C("new ZeroClipboard(elements, options)", N.debug), K.config(b)), this.options = K.config(), "boolean" != typeof e.disabled && (e.disabled = !J()), void(e.disabled === !1 && e.outdated !== !0 && null === e.bridge && (e.outdated = !1, e.ready = !1, O()))) : new K(a, b)
    };
    K.prototype.setText = function(a) {
        return a && "" !== a && (f["text/plain"] = a, e.ready === !0 && e.bridge && "function" == typeof e.bridge.setText ? e.bridge.setText(a) : e.ready = !1),
        this
    },
    K.prototype.setSize = function(a, b) {
        return e.ready === !0 && e.bridge && "function" == typeof e.bridge.setSize ? e.bridge.setSize(a, b) : e.ready = !1,
        this
    };
    var L = function(a) {
        e.ready === !0 && e.bridge && "function" == typeof e.bridge.setHandCursor ? e.bridge.setHandCursor(a) : e.ready = !1
    };
    K.prototype.destroy = function() {
        this.unclip(),
        this.off(),
        delete h[this.id]
    };
    var M = function() {
        var a, b, c, d = [],
        e = G(h);
        for (a = 0, b = e.length; b > a; a++) c = h[e[a]].instance,
        c && c instanceof K && d.push(c);
        return d
    };
    K.version = "1.3.5";
    var N = {
        swfPath: m,
        trustedDomains: a.location.host ? [a.location.host] : [],
        cacheBust: !0,
        forceHandCursor: !1,
        zIndex: 999999999,
        debug: !0,
        title: null,
        autoActivate: !0
    };
    K.config = function(a) {
        if ("object" == typeof a && null !== a && D(N, a), "string" != typeof a || !a) {
            var b = {};
            for (var c in N) N.hasOwnProperty(c) && (b[c] = "object" == typeof N[c] && null !== N[c] ? "length" in N[c] ? N[c].slice(0) : D({},
            N[c]) : N[c]);
            return b
        }
        return N.hasOwnProperty(a) ? N[a] : void 0
    },
    K.destroy = function() {
        K.deactivate();
        for (var a in h) if (h.hasOwnProperty(a) && h[a]) {
            var b = h[a].instance;
            b && "function" == typeof b.destroy && b.destroy()
        }
        var c = P(e.bridge);
        c && c.parentNode && (c.parentNode.removeChild(c), e.ready = null, e.bridge = null)
    },
    K.activate = function(a) {
        d && (t(d, N.hoverClass), t(d, N.activeClass)),
        d = a,
        s(a, N.hoverClass),
        Q();
        var b = N.title || a.getAttribute("title");
        if (b) {
            var c = P(e.bridge);
            c && c.setAttribute("title", b)
        }
        var f = N.forceHandCursor === !0 || "pointer" === o(a, "cursor");
        L(f)
    },
    K.deactivate = function() {
        var a = P(e.bridge);
        a && (a.style.left = "0px", a.style.top = "-9999px", a.removeAttribute("title")),
        d && (t(d, N.hoverClass), t(d, N.activeClass), d = null)
    };
    var O = function() {
        var b, c, d = document.getElementById("global-zeroclipboard-html-bridge");
        if (!d) {
            var f = K.config();
            f.jsModuleId = "string" == typeof k && k || "string" == typeof l && l || null;
            var g = F(a.location.host, N),
            h = x(f),
            i = N.moviePath + w(N.moviePath, N),
            j = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + i + '"/>         <param name="allowScriptAccess" value="' + g + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + h + '"/>         <embed src="' + i + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="' + g + '"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + h + '"           scale="exactfit">         </embed>       </object>';
            d = document.createElement("div"),
            d.id = "global-zeroclipboard-html-bridge",
            d.setAttribute("class", "global-zeroclipboard-container"),
            d.style.position = "absolute",
            d.style.left = "0px",
            d.style.top = "-9999px",
            d.style.width = "15px",
            d.style.height = "15px",
            d.style.zIndex = "" + B(N.zIndex),
            document.body.appendChild(d),
            d.innerHTML = j
        }
        b = document["global-zeroclipboard-flash-bridge"],
        b && (c = b.length) && (b = b[c - 1]),
        e.bridge = b || d.children[0].lastElementChild
    },
    P = function(a) {
        for (var b = /^OBJECT|EMBED$/,
        c = a && a.parentNode; c && b.test(c.nodeName) && c.parentNode;) c = c.parentNode;
        return c || null
    },
    Q = function() {
        if (d) {
            var a = v(d, N.zIndex),
            b = P(e.bridge);
            b && (b.style.top = a.top + "px", b.style.left = a.left + "px", b.style.width = a.width + "px", b.style.height = a.height + "px", b.style.zIndex = a.zIndex + 1),
            e.ready === !0 && e.bridge && "function" == typeof e.bridge.setSize ? e.bridge.setSize(a.width, a.height) : e.ready = !1
        }
        return this
    };
    K.prototype.on = function(a, b) {
        var c, d, f, g = {},
        i = h[this.id] && h[this.id].handlers;
        if ("string" == typeof a && a) f = a.toLowerCase().split(/\s+/);
        else if ("object" == typeof a && a && "undefined" == typeof b) for (c in a) a.hasOwnProperty(c) && "string" == typeof c && c && "function" == typeof a[c] && this.on(c, a[c]);
        if (f && f.length) {
            for (c = 0, d = f.length; d > c; c++) a = f[c].replace(/^on/, ""),
            g[a] = !0,
            i[a] || (i[a] = []),
            i[a].push(b);
            g.noflash && e.disabled && T.call(this, "noflash", {}),
            g.wrongflash && e.outdated && T.call(this, "wrongflash", {
                flashVersion: e.version
            }),
            g.load && e.ready && T.call(this, "load", {
                flashVersion: e.version
            })
        }
        return this
    },
    K.prototype.off = function(a, b) {
        var c, d, e, f, g, i = h[this.id] && h[this.id].handlers;
        if (0 === arguments.length) f = G(i);
        else if ("string" == typeof a && a) f = a.split(/\s+/);
        else if ("object" == typeof a && a && "undefined" == typeof b) for (c in a) a.hasOwnProperty(c) && "string" == typeof c && c && "function" == typeof a[c] && this.off(c, a[c]);
        if (f && f.length) for (c = 0, d = f.length; d > c; c++) if (a = f[c].toLowerCase().replace(/^on/, ""), g = i[a], g && g.length) if (b) for (e = y(b, g); - 1 !== e;) g.splice(e, 1),
        e = y(b, g, e);
        else i[a].length = 0;
        return this
    },
    K.prototype.handlers = function(a) {
        var b, c = null,
        d = h[this.id] && h[this.id].handlers;
        if (d) {
            if ("string" == typeof a && a) return d[a] ? d[a].slice(0) : null;
            c = {};
            for (b in d) d.hasOwnProperty(b) && d[b] && (c[b] = d[b].slice(0))
        }
        return c
    };
    var R = function(b, c, d, e) {
        var f = h[this.id] && h[this.id].handlers[b];
        if (f && f.length) {
            var g, i, j, k = c || this;
            for (g = 0, i = f.length; i > g; g++) j = f[g],
            c = k,
            "string" == typeof j && "function" == typeof a[j] && (j = a[j]),
            "object" == typeof j && j && "function" == typeof j.handleEvent && (c = j, j = j.handleEvent),
            "function" == typeof j && A(j, c, d, e)
        }
        return this
    };
    K.prototype.clip = function(a) {
        a = z(a);
        for (var b = 0; b < a.length; b++) if (a.hasOwnProperty(b) && a[b] && 1 === a[b].nodeType) {
            a[b].zcClippingId ? -1 === y(this.id, j[a[b].zcClippingId]) && j[a[b].zcClippingId].push(this.id) : (a[b].zcClippingId = "zcClippingId_" + i++, j[a[b].zcClippingId] = [this.id], N.autoActivate === !0 && q(a[b], "mouseover", p));
            var c = h[this.id].elements; - 1 === y(a[b], c) && c.push(a[b])
        }
        return this
    },
    K.prototype.unclip = function(a) {
        var b = h[this.id];
        if (b) {
            var c, d = b.elements;
            a = "undefined" == typeof a ? d.slice(0) : z(a);
            for (var e = a.length; e--;) if (a.hasOwnProperty(e) && a[e] && 1 === a[e].nodeType) {
                for (c = 0; - 1 !== (c = y(a[e], d, c));) d.splice(c, 1);
                var f = j[a[e].zcClippingId];
                if (f) {
                    for (c = 0; - 1 !== (c = y(this.id, f, c));) f.splice(c, 1);
                    0 === f.length && (N.autoActivate === !0 && r(a[e], "mouseover", p), delete a[e].zcClippingId)
                }
            }
        }
        return this
    },
    K.prototype.elements = function() {
        var a = h[this.id];
        return a && a.elements ? a.elements.slice(0) : []
    };
    var S = function(a) {
        var b, c, d, e, f, g = [];
        if (a && 1 === a.nodeType && (b = a.zcClippingId) && j.hasOwnProperty(b) && (c = j[b], c && c.length)) for (d = 0, e = c.length; e > d; d++) f = h[c[d]].instance,
        f && f instanceof K && g.push(f);
        return g
    };
    N.hoverClass = "zeroclipboard-is-hover",
    N.activeClass = "zeroclipboard-is-active",
    N.trustedOrigins = null,
    N.allowScriptAccess = null,
    N.useNoCache = !0,
    N.moviePath = "ZeroClipboard.swf",
    K.detectFlashSupport = function() {
        return C("ZeroClipboard.detectFlashSupport", N.debug),
        J()
    },
    K.dispatch = function(a, b) {
        if ("string" == typeof a && a) {
            var c = a.toLowerCase().replace(/^on/, "");
            if (c) for (var e = d && N.autoActivate === !0 ? S(d) : M(), f = 0, g = e.length; g > f; f++) T.call(e[f], c, b)
        }
    },
    K.prototype.setHandCursor = function(a) {
        return C("ZeroClipboard.prototype.setHandCursor", N.debug),
        a = "boolean" == typeof a ? a: !!a,
        L(a),
        N.forceHandCursor = a,
        this
    },
    K.prototype.reposition = function() {
        return C("ZeroClipboard.prototype.reposition", N.debug),
        Q()
    },
    K.prototype.receiveEvent = function(a, b) {
        if (C("ZeroClipboard.prototype.receiveEvent", N.debug), "string" == typeof a && a) {
            var c = a.toLowerCase().replace(/^on/, "");
            c && T.call(this, c, b)
        }
    },
    K.prototype.setCurrent = function(a) {
        return C("ZeroClipboard.prototype.setCurrent", N.debug),
        K.activate(a),
        this
    },
    K.prototype.resetBridge = function() {
        return C("ZeroClipboard.prototype.resetBridge", N.debug),
        K.deactivate(),
        this
    },
    K.prototype.setTitle = function(a) {
        if (C("ZeroClipboard.prototype.setTitle", N.debug), a = a || N.title || d && d.getAttribute("title")) {
            var b = P(e.bridge);
            b && b.setAttribute("title", a)
        }
        return this
    },
    K.setDefaults = function(a) {
        C("ZeroClipboard.setDefaults", N.debug),
        K.config(a)
    },
    K.prototype.addEventListener = function(a, b) {
        return C("ZeroClipboard.prototype.addEventListener", N.debug),
        this.on(a, b)
    },
    K.prototype.removeEventListener = function(a, b) {
        return C("ZeroClipboard.prototype.removeEventListener", N.debug),
        this.off(a, b)
    },
    K.prototype.ready = function() {
        return C("ZeroClipboard.prototype.ready", N.debug),
        e.ready === !0
    };
    var T = function(a, g) {
        a = a.toLowerCase().replace(/^on/, "");
        var h = g && g.flashVersion && b(g.flashVersion) || null,
        i = d,
        j = !0;
        switch (a) {
        case "load":
            if (h) {
                if (!c(h)) return void T.call(this, "onWrongFlash", {
                    flashVersion: h
                });
                e.outdated = !1,
                e.ready = !0,
                e.version = h
            }
            break;
        case "wrongflash":
            h && !c(h) && (e.outdated = !0, e.ready = !1, e.version = h);
            break;
        case "mouseover":
            s(i, N.hoverClass);
            break;
        case "mouseout":
            N.autoActivate === !0 && K.deactivate();
            break;
        case "mousedown":
            s(i, N.activeClass);
            break;
        case "mouseup":
            t(i, N.activeClass);
            break;
        case "datarequested":
            if (i) {
                var k = i.getAttribute("data-clipboard-target"),
                l = k ? document.getElementById(k) : null;
                if (l) {
                    var m = l.value || l.textContent || l.innerText;
                    m && this.setText(m)
                } else {
                    var n = i.getAttribute("data-clipboard-text");
                    n && this.setText(n)
                }
            }
            j = !1;
            break;
        case "complete":
            H(f),
            i && i !== I() && i.focus && i.focus()
        }
        var o = i,
        p = [this, g];
        return R.call(this, a, o, p, j)
    };
    "function" == typeof define && define.amd ? define(["require", "exports", "module"],
    function(a, b, c) {
        return k = c && c.id || null,
        K
    }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports && "function" == typeof a.require ? (l = module.id || null, module.exports = K) : a.ZeroClipboard = K
} (function() {
    return this
} ());
var anchors = new AnchorJS;
/*!
 * JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see https://creativecommons.org/licenses/by/3.0/.
 */
!
function(a) {
    "use strict";
    a(function() {
        var b = a(window),
        c = a(document.body);
        c.scrollspy({
            target: ".bs-docs-sidebar"
        }),
        b.on("load",
        function() {
            c.scrollspy("refresh")
        }),
        a(".bs-docs-container [href=#]").click(function(a) {
            a.preventDefault()
        }),
        setTimeout(function() {
            var b = a(".bs-docs-sidebar");
            b.affix({
                offset: {
                    top: function() {
                        var c = b.offset().top,
                        d = parseInt(b.children(0).css("margin-top"), 10),
                        e = a(".bs-docs-nav").height();
//                        return this.top = c - e - d
                        return 20
                    },
                    bottom: function() {
                        return this.bottom = a(".bs-docs-footer").outerHeight(!0)
                    }
                }
            })
        },
        100),
        setTimeout(function() {
            a(".bs-top").affix()
        },
        100),
        function() {
            var b = a("#bs-theme-stylesheet"),
            c = a(".bs-docs-theme-toggle"),
            d = function() {
                b.attr("href", b.attr("data-href")),
                c.text("禁用主题预览"),
                localStorage.setItem("previewTheme", !0)
            };
            localStorage.getItem("previewTheme") && d(),
            c.click(function() {
                var a = b.attr("href");
                a && 0 !== a.indexOf("data") ? (b.attr("href", ""), c.text("主题预览"), localStorage.removeItem("previewTheme")) : d()
            })
        } (),
        a(".tooltip-demo").tooltip({
            selector: '[data-toggle="tooltip"]',
            container: "body"
        }),
        a(".popover-demo").popover({
            selector: '[data-toggle="popover"]',
            container: "body"
        }),
        a(".tooltip-test").tooltip(),
        a(".popover-test").popover(),
        a(".bs-docs-popover").popover(),
        a("#loading-example-btn").on("click",
        function() {
            var b = a(this);
            b.button("loading"),
            setTimeout(function() {
                b.button("reset")
            },
            3e3)
        }),
        a("#exampleModal").on("show.bs.modal",
        function(b) {
            var c = a(b.relatedTarget),
            d = c.data("whatever"),
            e = a(this);
            e.find(".modal-title").text("New message to " + d),
            e.find(".modal-body input").val(d)
        }),
        a(".bs-docs-activate-animated-progressbar").on("click",
        function() {
            a(this).siblings(".progress").find(".progress-bar-striped").toggleClass("active")
        }),
        ZeroClipboard.config({
            moviePath: "/libs/flash/ZeroClipboard.swf",
            hoverClass: "btn-clipboard-hover"
        }),
        a(".highlight").each(function() {
            var b = '<div class="zero-clipboard"><span class="btn-clipboard">复制</span></div>';
            a(this).before(b)
        });
        var d = new ZeroClipboard(a(".btn-clipboard")),
        e = a("#global-zeroclipboard-html-bridge");
        d.on("load",
        function() {
            e.data("placement", "top").attr("title", "复制到剪贴板").tooltip(),
            d.on("dataRequested",
            function(b) {
                var c = a(this).parent().nextAll(".highlight").first();
                b.setText(c.text())
            }),
            d.on("complete",
            function() {
                e.attr("title", "复制成功！").tooltip("fixTitle").tooltip("show").attr("title", "复制到剪贴板").tooltip("fixTitle")
            })
        }),
        d.on("noflash wrongflash",
        function() {
            a(".zero-clipboard").remove(),
            ZeroClipboard.destroy()
        })
    })
} (jQuery),
function() {
    "use strict";
    anchors.options.placement = "left",
    anchors.add(".bs-docs-section > h1, .bs-docs-section > h2, .bs-docs-section > h3, .bs-docs-section > h4, .bs-docs-section > h5")
} ();