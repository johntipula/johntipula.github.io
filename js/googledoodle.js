(function () {
        var c = void 0,
        e = true,
        f = false;
        window.google = window.google || {};
        window.google.ml = function () {};
        var g = function (a, d, b) {
            a = a.split(".");
            b = b || window;
            !(a[0] in b) && b.execScript && b.execScript("var " + a[0]);
            for (var j; a.length && (j = a.shift());) !a.length && d !== c ? b[j] = d : b = b[j] ? b[j] : b[j] = {}
        },
    h = function (a, d, b) {
        return a.call.apply(a.bind, arguments)
    },
    i = function (a, d, b) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var j = Array.prototype.slice.call(arguments, 2);
            return function () {
                var b = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(b, j);
                return a.apply(d, b)
            }
        } else return function () {
            return a.apply(d, arguments)
        }
    },
    k = function (a, d, b) {
        k = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? h : i;
        g("google.bindFn", k, c);
        return k.apply(null, arguments)
    };
    google.exportSymbol = function (a, d, b) {
        g(a, d, b)
    };
    google.exportProperty = function (a, d, b) {
        a[d] = b
    };
    g("google.bindFn", k, c);
    g("google.partial", function (a, d) {
        var b = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = Array.prototype.slice.call(arguments);
            d.unshift.apply(d, b);
            return a.apply(this, d)
        }
    }, c);
    var l = {
        k: f,
        z: f,
        D: f,
        opera: f
    },
    m = {
        k: f,
        w: f,
        c: f,
        A: f,
        B: f,
        C: f,
        v: f,
        s: f,
        p: f,
        opera: f
    },
    n = "",
    q = "",
    r = function (a) {
        for (var d in l) l[d] = f;
            for (var b in m) m[b] = f;
                d = b = null;
            if (window.opera) l.opera = e, m.opera = e, b = d = /Opera[\/\s](\S+)/;
            else if (a.indexOf("MSIE") >= 0) l.k = e, m.k = e, b = d = /MSIE\s+([^\);]+)(\)|;)/;
            else if (a.indexOf("WebKit") >= 0) {
                l.D = e;
                b = /Version\/(\S+)/;
                if (a.indexOf("Chrome") >= 0) m.v = e, d = /Chrome\/(\S+)/;
                else if (a.indexOf("Android") >= 0 && a.indexOf("Mobile") < 0) m.s = e, d = /Version\/(\S+)/;
                else if (a.indexOf("Android") >= 0 && a.indexOf("Mobile") >= 0) m.p = e, d = b;
                else if (a.indexOf("Safari") >= 0) m.c = e, d = b;
                if (a.indexOf("iPad") >= 0) {
                    if (m.A = e, !m.c) m.c = e, d = b
                } else if (a.indexOf("iPhone") >= 0) {
                    if (m.B = e, !m.c) m.c = e, d = b
                } else if (a.indexOf("iPod") >= 0 && (m.C = e, !m.c)) m.c = e, d = b;
            b = /WebKit\/(\S+)/
        } else if (a.indexOf("Gecko") >= 0) {
            l.z = e;
            if (a.indexOf("Firefox") >= 0) m.w = e, d = /Firefox\/(\S+)/;
            b = /rv\:([^\);]+)(\)|;)/
        }
        b && (n = (b = b.exec(a)) ? b[1] : "");
        d && (q = (b = d.exec(a)) ? b[1] : "", m.k && (a = document ? document.documentMode : c) && a > parseFloat(q) && (q = a.toFixed(1).toString()));
        g("google.browser.engine.IE", l.k, c);
        g("google.browser.engine.GECKO", l.z, c);
        g("google.browser.engine.WEBKIT", l.D, c);
        g("google.browser.engine.OPERA", l.opera, c);
        g("google.browser.engine.version", n, c);
        g("google.browser.product.IE", m.k, c);
        g("google.browser.product.FIREFOX", m.w, c);
        g("google.browser.product.SAFARI", m.c, c);
        g("google.browser.product.IPAD", m.A, c);
        g("google.browser.product.IPHONE", m.B, c);
        g("google.browser.product.IPOD", m.C, c);
        g("google.browser.product.CHROME", m.v, c);
        g("google.browser.product.ANDROID_TABLET", m.s, c);
        g("google.browser.product.ANDROID_MOBILE", m.p, c);
        g("google.browser.product.OPERA", m.opera, c);
        g("google.browser.product.version", q, c)
    };
    r(google.ua || window.navigator.userAgent);
    var t = function (a, d) {
        function b(a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0
        }
        for (var j = 0, B = a.replace(/^\s+|\s+$/g, "").split("."), D = d.replace(/^\s+|\s+$/g, "").split("."), R = Math.max(B.length, D.length), s = 0; j == 0 && s < R; s++) {
            var S = B[s] || "",
            T = D[s] || "",
            U = RegExp("(\\d*)(\\D*)", "g"),
            V = RegExp("(\\d*)(\\D*)", "g");
            do {
                var o = U.exec(S) || ["", "", ""],
                p = V.exec(T) || ["", "", ""];
                if (o[0].length == 0 && p[0].length == 0) break;
                j = b(o[1].length == 0 ? 0 : parseInt(o[1], 10), p[1].length == 0 ? 0 : parseInt(p[1], 10)) || b(o[2].length == 0, p[2].length == 0) || b(o[2], p[2])
            } while (j == 0)
        }
        return j
    };
    g("google.browser.init", r, c);
    g("google.browser.compareVersions", t, c);
    g("google.browser.isEngineVersion", function (a) {
        return t(n, a) >= 0
    }, c);
    g("google.browser.isProductVersion", function (a) {
        return t(q, a) >= 0
    }, c);
    g("google.listen", function (a, d, b) {
        a.addEventListener ? a.addEventListener(d, b, f) : a.attachEvent("on" + d, b)
    }, c);
    g("google.unlisten", function (a, d, b) {
        a.removeEventListener ? a.removeEventListener(d, b, f) : a.detachEvent("on" + d, b)
    }, c);
    try {
        if (!google.doodle) google.doodle = {};
        var u = 200,
        v = -200,
        w = -200,
        x, y, z, A = 0,
        C = 0,
        E = 0,
        F = 35,
        G, H = [],
        I, J, K = function () {
            return [window.screenLeft || window.screenX || 0, window.screenTop || window.screenY || 0, document.body.clientWidth || 0]
        },
        L = function (a, d, b, j) {
            this.x = this.F = a;
            this.y = this.G = d;
            this.r = this.m = b;
            this.d = 100 * (Math.random() - 0.5);
            this.g = 100 * (Math.random() - 0.5);
            this.o = 3 + Math.random() * 98;
            this.H = 0.1 + Math.random() * 0.4;
            this.h = 0;
            this.i = 1;
            this.n = f;
            this.a = document.createElement("div");
            a = this.a.style;
            a.position = "absolute";
            a.zIndex = "-1";
            j = "#" + j;
            J ? (this.a.innerHTML = ".", a.color = j, a.cursor = "default", a.font = "100px Monospace") : (this.a.className = "circle", a.backgroundColor = j);
            I.appendChild(this.a)
        };
        L.prototype = {
            remove: function () {
                this.a && I.removeChild(this.a);
                this.a = null
            },
            update: function () {
                this.x += this.d;
                this.y += this.g;
                this.d = Math.min(50, Math.max(-50, (this.d + (A + E) / this.m) * 0.92));
                this.g = Math.min(50, Math.max(-50, (this.g + C / this.m) * 0.92));
                var a = v - this.x,
                d = w - this.y,
                b = Math.sqrt(a * a + d * d);
                a /= b;
                d /= b;
                b < u ? (this.d -= a * this.o, this.g -= d * this.o, this.h += (0.005 - this.h) * 0.4, this.i = Math.max(0, this.i * 0.9 - 0.01), this.d *= 1 - this.i, this.g *= 1 - this.i) : (this.h += (this.H - this.h) * 0.005, this.i = Math.min(1, this.i + 0.03));
                a = this.F - this.x;
                d = this.G - this.y;
                b = Math.sqrt(a * a + d * d);
                this.d += a * this.h;
                this.g += d * this.h;
                this.r = this.m + b / 8;
                this.n = b < 0.3 && this.d < 0.3 && this.g < 0.3;
                if (!this.n) {
                    a = this.a.style;
                    if (!J) a.width = a.height = this.r * 2 + "px";
                    a.left = this.x - (J ? 20 : 0) + "px";
                    a.top = this.y - (J ? 60 : 0) + "px"
                }
            }
        };
        var M = function (a, d, b, j) {
            return new L(a, d, b, j)
        },
        O = function () {
            H = [
                  //M(0,  0,  7, "fff"),

                  //M(5,  5,  7, "fff"),
                  M(5,  5,  7, "fff"),
                  M(20,  5,  7, "fff"),
                  M(35,  5,  7, "fff"),

                  M(50,  5,  7, "fff"),
                  M(50,  20,  7, "fff"),
                  M(50,  35,  7, "fff"),
                  M(50,  50,  7, "fff"),
                  M(48,  65,  7, "fff"),

                  M(36,  76,  7, "fff"),
                  M(20,  80,  7, "fff"),
                  M(5,  80,  7, "fff"),
                  //M(5,  65,  7, "ff0"),
                    // O
                  M(74, 20,  7, "fff"),
                  M(70, 35,  7, "fff"),
                  M(70, 50,  7, "fff"),
                  M(74, 65,  7, "fff"),
                  //M(70, 80,  7, "fff"),

                  M(85, 77,  7, "fff"),
                  M(100, 80,  7, "fff"),
                  M(115, 77,  7, "fff"),
                  //M(130, 80,  7, "fff"),

                  //M(130, 5,  7, "fff"),
                  M(126, 20,  7, "fff"),
                  M(130, 35,  7, "fff"),
                  M(130, 50,  7, "fff"),
                  M(126, 65,  7, "fff"),

                  M(85, 8,  7, "fff"),
                  M(100, 5,  7, "fff"),
                  M(115, 8,  7, "fff"),
                  //M(123, 12,  7, "fff"),

                  // H
                  M(150, 5,  7, "fff"),
                  M(150, 20,  7, "fff"),
                  M(150, 35,  7, "fff"),
                  M(150, 50,  7, "fff"),
                  M(150, 65,  7, "fff"),
                  M(150, 80,  7, "fff"),

                  M(165, 43,  7, "fff"),
                  M(180, 43,  7, "fff"),
                  M(195, 43,  7, "fff"),

                  M(210, 5,  7, "fff"),
                  M(210, 20,  7, "fff"),
                  M(210, 35,  7, "fff"),
                  M(210, 50,  7, "fff"),
                  M(210, 65,  7, "fff"),
                  M(210, 80,  7, "fff"),
                  // N
                  M(230, 5,  7, "fff"),
                  M(230, 20,  7, "fff"),
                  M(230, 35,  7, "fff"),
                  M(230, 50,  7, "fff"),
                  M(230, 65,  7, "fff"),
                  M(230, 80,  7, "fff"),

                  M(245, 28,  7, "fff"),
                  M(260, 43,  7, "fff"),
                  M(275, 58,  7, "fff"),

                  M(290, 5,  7, "fff"),
                  M(290, 20,  7, "fff"),
                  M(290, 35,  7, "fff"),
                  M(290, 50,  7, "fff"),
                  M(290, 65,  7, "fff"),
                  M(290, 80,  7, "fff"),
                  ];
            var a = K();
            x = a[0];
            y = a[1];
            z = a[2];
            N()
        },
        N = function () {
            var a = K(),
            d = a[0],
            b = a[1],
            a = a[2];
            A = d - x;
            C = b - y;
            E = a - z;
            x = d;
            y = b;
            z = a;
            u = Math.max(0, u - 2);
            d = e;
            for (b = 0; a = H[b++];) a.update(), d &= a.n;
                F = d ? 250 : 35;
            G = window.setTimeout(N, F)
        },
        P = function (a) {
            u = 200;
            v = a.clientX - I.offsetLeft;
            w = a.clientY - I.offsetTop
        },
        W = function (a) {
            if (!google.doodle.I && google.dstr && google.rein) google.doodle.I = e, google.dstr.push(Q), google.rein.push(function () {
                W(e)
            });
                J = google.browser.engine.IE && google.browser.compareVersions("9", google.browser.engine.version) > 0;
                google.doodle.cpDestroy = Q;
                google.doodle.cpInit = W;
                if (I = document.getElementById("hplogo")) a && J ? location.reload(f) : (I.style.background = "none", google.listen(document, "mousemove", P), O())
            },
        Q = function () {
            google.unlisten(document, "mousemove", P);
            G && window.clearTimeout(G);
            if (H)
                for (var a = 0, d; d = H[a++];) d.remove();
                    H = []
            };
            google.x ? google.x({
                id: "DOODLE"
            }, W) : W()
        } catch (X) {
            google.ml(X, f, {
                _sn: "DOODLE"
            })
        };
    })();