function  mvp_worker() {
  var duckdb = (() => {
    var rj = Object.create;
    var js = Object.defineProperty;
    var nj = Object.getOwnPropertyDescriptor;
    var sj = Object.getOwnPropertyNames;
    var oj = Object.getPrototypeOf, aj = Object.prototype.hasOwnProperty;
    var pa = (i => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(i, {get: (t, e) => (typeof require < "u" ? require : t)[e]}) : i)(function (i) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw new Error('Dynamic require of "' + i + '" is not supported')
    });
    var Ss = (i, t) => () => (t || i((t = {exports: {}}).exports, t), t.exports), vr = (i, t) => {
      for (var e in t) js(i, e, {get: t[e], enumerable: !0})
    }, zf = (i, t, e, r) => {
      if (t && typeof t == "object" || typeof t == "function") for (let n of sj(t)) !aj.call(i, n) && n !== e && js(i, n, {
        get: () => t[n],
        enumerable: !(r = nj(t, n)) || r.enumerable
      });
      return i
    };
    var Wf = (i, t, e) => (e = i != null ? rj(oj(i)) : {}, zf(t || !i || !i.__esModule ? js(e, "default", {
      value: i,
      enumerable: !0
    }) : e, i)), lj = i => zf(js({}, "__esModule", {value: !0}), i);
    var fh = Ss((n1, Fs) => {
      var $f, Yf, Xf, Gf, Kf, Jf, qf, Zf, Qf, Is, ya, th, eh, ih, Ur, rh, nh, sh, oh, ah, lh, ch, uh, dh, Cs;
      (function (i) {
        var t = typeof global == "object" ? global : typeof self == "object" ? self : typeof this == "object" ? this : {};
        typeof define == "function" && define.amd ? define("tslib", ["exports"], function (r) {
          i(e(t, e(r)))
        }) : typeof Fs == "object" && typeof Fs.exports == "object" ? i(e(t, e(Fs.exports))) : i(e(t));

        function e(r, n) {
          return r !== t && (typeof Object.create == "function" ? Object.defineProperty(r, "__esModule", {value: !0}) : r.__esModule = !0), function (o, d) {
            return r[o] = n ? n(o, d) : d
          }
        }
      })(function (i) {
        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (r, n) {
          r.__proto__ = n
        } || function (r, n) {
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o])
        };
        $f = function (r, n) {
          if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
          t(r, n);

          function o() {
            this.constructor = r
          }

          r.prototype = n === null ? Object.create(n) : (o.prototype = n.prototype, new o)
        }, Yf = Object.assign || function (r) {
          for (var n, o = 1, d = arguments.length; o < d; o++) {
            n = arguments[o];
            for (var p in n) Object.prototype.hasOwnProperty.call(n, p) && (r[p] = n[p])
          }
          return r
        }, Xf = function (r, n) {
          var o = {};
          for (var d in r) Object.prototype.hasOwnProperty.call(r, d) && n.indexOf(d) < 0 && (o[d] = r[d]);
          if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var p = 0, d = Object.getOwnPropertySymbols(r); p < d.length; p++) n.indexOf(d[p]) < 0 && Object.prototype.propertyIsEnumerable.call(r, d[p]) && (o[d[p]] = r[d[p]]);
          return o
        }, Gf = function (r, n, o, d) {
          var p = arguments.length, m = p < 3 ? n : d === null ? d = Object.getOwnPropertyDescriptor(n, o) : d, I;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") m = Reflect.decorate(r, n, o, d); else for (var A = r.length - 1; A >= 0; A--) (I = r[A]) && (m = (p < 3 ? I(m) : p > 3 ? I(n, o, m) : I(n, o)) || m);
          return p > 3 && m && Object.defineProperty(n, o, m), m
        }, Kf = function (r, n) {
          return function (o, d) {
            n(o, d, r)
          }
        }, Jf = function (r, n) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(r, n)
        }, qf = function (r, n, o, d) {
          function p(m) {
            return m instanceof o ? m : new o(function (I) {
              I(m)
            })
          }

          return new (o || (o = Promise))(function (m, I) {
            function A(k) {
              try {
                T(d.next(k))
              } catch (lt) {
                I(lt)
              }
            }

            function E(k) {
              try {
                T(d.throw(k))
              } catch (lt) {
                I(lt)
              }
            }

            function T(k) {
              k.done ? m(k.value) : p(k.value).then(A, E)
            }

            T((d = d.apply(r, n || [])).next())
          })
        }, Zf = function (r, n) {
          var o = {
            label: 0, sent: function () {
              if (m[0] & 1) throw m[1];
              return m[1]
            }, trys: [], ops: []
          }, d, p, m, I;
          return I = {
            next: A(0),
            throw: A(1),
            return: A(2)
          }, typeof Symbol == "function" && (I[Symbol.iterator] = function () {
            return this
          }), I;

          function A(T) {
            return function (k) {
              return E([T, k])
            }
          }

          function E(T) {
            if (d) throw new TypeError("Generator is already executing.");
            for (; o;) try {
              if (d = 1, p && (m = T[0] & 2 ? p.return : T[0] ? p.throw || ((m = p.return) && m.call(p), 0) : p.next) && !(m = m.call(p, T[1])).done) return m;
              switch (p = 0, m && (T = [T[0] & 2, m.value]), T[0]) {
                case 0:
                case 1:
                  m = T;
                  break;
                case 4:
                  return o.label++, {value: T[1], done: !1};
                case 5:
                  o.label++, p = T[1], T = [0];
                  continue;
                case 7:
                  T = o.ops.pop(), o.trys.pop();
                  continue;
                default:
                  if (m = o.trys, !(m = m.length > 0 && m[m.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                    o = 0;
                    continue
                  }
                  if (T[0] === 3 && (!m || T[1] > m[0] && T[1] < m[3])) {
                    o.label = T[1];
                    break
                  }
                  if (T[0] === 6 && o.label < m[1]) {
                    o.label = m[1], m = T;
                    break
                  }
                  if (m && o.label < m[2]) {
                    o.label = m[2], o.ops.push(T);
                    break
                  }
                  m[2] && o.ops.pop(), o.trys.pop();
                  continue
              }
              T = n.call(r, o)
            } catch (k) {
              T = [6, k], p = 0
            } finally {
              d = m = 0
            }
            if (T[0] & 5) throw T[1];
            return {value: T[0] ? T[1] : void 0, done: !0}
          }
        }, Qf = function (r, n) {
          for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(n, o) && Cs(n, r, o)
        }, Cs = Object.create ? function (r, n, o, d) {
          d === void 0 && (d = o);
          var p = Object.getOwnPropertyDescriptor(n, o);
          (!p || ("get" in p ? !n.__esModule : p.writable || p.configurable)) && (p = {
            enumerable: !0,
            get: function () {
              return n[o]
            }
          }), Object.defineProperty(r, d, p)
        } : function (r, n, o, d) {
          d === void 0 && (d = o), r[d] = n[o]
        }, Is = function (r) {
          var n = typeof Symbol == "function" && Symbol.iterator, o = n && r[n], d = 0;
          if (o) return o.call(r);
          if (r && typeof r.length == "number") return {
            next: function () {
              return r && d >= r.length && (r = void 0), {value: r && r[d++], done: !r}
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, ya = function (r, n) {
          var o = typeof Symbol == "function" && r[Symbol.iterator];
          if (!o) return r;
          var d = o.call(r), p, m = [], I;
          try {
            for (; (n === void 0 || n-- > 0) && !(p = d.next()).done;) m.push(p.value)
          } catch (A) {
            I = {error: A}
          } finally {
            try {
              p && !p.done && (o = d.return) && o.call(d)
            } finally {
              if (I) throw I.error
            }
          }
          return m
        }, th = function () {
          for (var r = [], n = 0; n < arguments.length; n++) r = r.concat(ya(arguments[n]));
          return r
        }, eh = function () {
          for (var r = 0, n = 0, o = arguments.length; n < o; n++) r += arguments[n].length;
          for (var d = Array(r), p = 0, n = 0; n < o; n++) for (var m = arguments[n], I = 0, A = m.length; I < A; I++, p++) d[p] = m[I];
          return d
        }, ih = function (r, n, o) {
          if (o || arguments.length === 2) for (var d = 0, p = n.length, m; d < p; d++) (m || !(d in n)) && (m || (m = Array.prototype.slice.call(n, 0, d)), m[d] = n[d]);
          return r.concat(m || Array.prototype.slice.call(n))
        }, Ur = function (r) {
          return this instanceof Ur ? (this.v = r, this) : new Ur(r)
        }, rh = function (r, n, o) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var d = o.apply(r, n || []), p, m = [];
          return p = {}, I("next"), I("throw"), I("return"), p[Symbol.asyncIterator] = function () {
            return this
          }, p;

          function I(ut) {
            d[ut] && (p[ut] = function (wt) {
              return new Promise(function (Ot, ce) {
                m.push([ut, wt, Ot, ce]) > 1 || A(ut, wt)
              })
            })
          }

          function A(ut, wt) {
            try {
              E(d[ut](wt))
            } catch (Ot) {
              lt(m[0][3], Ot)
            }
          }

          function E(ut) {
            ut.value instanceof Ur ? Promise.resolve(ut.value.v).then(T, k) : lt(m[0][2], ut)
          }

          function T(ut) {
            A("next", ut)
          }

          function k(ut) {
            A("throw", ut)
          }

          function lt(ut, wt) {
            ut(wt), m.shift(), m.length && A(m[0][0], m[0][1])
          }
        }, nh = function (r) {
          var n, o;
          return n = {}, d("next"), d("throw", function (p) {
            throw p
          }), d("return"), n[Symbol.iterator] = function () {
            return this
          }, n;

          function d(p, m) {
            n[p] = r[p] ? function (I) {
              return (o = !o) ? {value: Ur(r[p](I)), done: p === "return"} : m ? m(I) : I
            } : m
          }
        }, sh = function (r) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var n = r[Symbol.asyncIterator], o;
          return n ? n.call(r) : (r = typeof Is == "function" ? Is(r) : r[Symbol.iterator](), o = {}, d("next"), d("throw"), d("return"), o[Symbol.asyncIterator] = function () {
            return this
          }, o);

          function d(m) {
            o[m] = r[m] && function (I) {
              return new Promise(function (A, E) {
                I = r[m](I), p(A, E, I.done, I.value)
              })
            }
          }

          function p(m, I, A, E) {
            Promise.resolve(E).then(function (T) {
              m({value: T, done: A})
            }, I)
          }
        }, oh = function (r, n) {
          return Object.defineProperty ? Object.defineProperty(r, "raw", {value: n}) : r.raw = n, r
        };
        var e = Object.create ? function (r, n) {
          Object.defineProperty(r, "default", {enumerable: !0, value: n})
        } : function (r, n) {
          r.default = n
        };
        ah = function (r) {
          if (r && r.__esModule) return r;
          var n = {};
          if (r != null) for (var o in r) o !== "default" && Object.prototype.hasOwnProperty.call(r, o) && Cs(n, r, o);
          return e(n, r), n
        }, lh = function (r) {
          return r && r.__esModule ? r : {default: r}
        }, ch = function (r, n, o, d) {
          if (o === "a" && !d) throw new TypeError("Private accessor was defined without a getter");
          if (typeof n == "function" ? r !== n || !d : !n.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return o === "m" ? d : o === "a" ? d.call(r) : d ? d.value : n.get(r)
        }, uh = function (r, n, o, d, p) {
          if (d === "m") throw new TypeError("Private method is not writable");
          if (d === "a" && !p) throw new TypeError("Private accessor was defined without a setter");
          if (typeof n == "function" ? r !== n || !p : !n.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return d === "a" ? p.call(r, o) : p ? p.value = o : n.set(r, o), o
        }, dh = function (r, n) {
          if (n === null || typeof n != "object" && typeof n != "function") throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof r == "function" ? n === r : r.has(n)
        }, i("__extends", $f), i("__assign", Yf), i("__rest", Xf), i("__decorate", Gf), i("__param", Kf), i("__metadata", Jf), i("__awaiter", qf), i("__generator", Zf), i("__exportStar", Qf), i("__createBinding", Cs), i("__values", Is), i("__read", ya), i("__spread", th), i("__spreadArrays", eh), i("__spreadArray", ih), i("__await", Ur), i("__asyncGenerator", rh), i("__asyncDelegator", nh), i("__asyncValues", sh), i("__makeTemplateObject", oh), i("__importStar", ah), i("__importDefault", lh), i("__classPrivateFieldGet", ch), i("__classPrivateFieldSet", uh), i("__classPrivateFieldIn", dh)
      })
    });
    var hl = Ss(() => {
    });
    var Zp = Ss(() => {
    });
    var sy = Ss((exports, module) => {
      (function () {
        "use strict";
        var ERROR = "input is invalid type", WINDOW = typeof window == "object", root = WINDOW ? window : {};
        root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
        var WEB_WORKER = !WINDOW && typeof self == "object",
            NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
        NODE_JS ? root = global : WEB_WORKER && (root = self);
        var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module == "object" && module.exports,
            AMD = typeof define == "function" && define.amd,
            ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
            HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [-2147483648, 8388608, 32768, 128],
            SHIFT = [24, 16, 8, 0],
            K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"], blocks = [];
        (root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function (i) {
          return Object.prototype.toString.call(i) === "[object Array]"
        }), ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function (i) {
          return typeof i == "object" && i.buffer && i.buffer.constructor === ArrayBuffer
        });
        var createOutputMethod = function (i, t) {
          return function (e) {
            return new Sha256(t, !0).update(e)[i]()
          }
        }, createMethod = function (i) {
          var t = createOutputMethod("hex", i);
          NODE_JS && (t = nodeWrap(t, i)), t.create = function () {
            return new Sha256(i)
          }, t.update = function (n) {
            return t.create().update(n)
          };
          for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
            var r = OUTPUT_TYPES[e];
            t[r] = createOutputMethod(r, i)
          }
          return t
        }, nodeWrap = function (method, is224) {
          var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"),
              algorithm = is224 ? "sha224" : "sha256", nodeMethod = function (i) {
                if (typeof i == "string") return crypto.createHash(algorithm).update(i, "utf8").digest("hex");
                if (i == null) throw new Error(ERROR);
                return i.constructor === ArrayBuffer && (i = new Uint8Array(i)), Array.isArray(i) || ArrayBuffer.isView(i) || i.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(i)).digest("hex") : method(i)
              };
          return nodeMethod
        }, createHmacOutputMethod = function (i, t) {
          return function (e, r) {
            return new HmacSha256(e, t, !0).update(r)[i]()
          }
        }, createHmacMethod = function (i) {
          var t = createHmacOutputMethod("hex", i);
          t.create = function (n) {
            return new HmacSha256(n, i)
          }, t.update = function (n, o) {
            return t.create(n).update(o)
          };
          for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
            var r = OUTPUT_TYPES[e];
            t[r] = createHmacOutputMethod(r, i)
          }
          return t
        };

        function Sha256(i, t) {
          t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = i
        }

        Sha256.prototype.update = function (i) {
          if (!this.finalized) {
            var t, e = typeof i;
            if (e !== "string") {
              if (e === "object") {
                if (i === null) throw new Error(ERROR);
                if (ARRAY_BUFFER && i.constructor === ArrayBuffer) i = new Uint8Array(i); else if (!Array.isArray(i) && (!ARRAY_BUFFER || !ArrayBuffer.isView(i))) throw new Error(ERROR)
              } else throw new Error(ERROR);
              t = !0
            }
            for (var r, n = 0, o, d = i.length, p = this.blocks; n < d;) {
              if (this.hashed && (this.hashed = !1, p[0] = this.block, p[16] = p[1] = p[2] = p[3] = p[4] = p[5] = p[6] = p[7] = p[8] = p[9] = p[10] = p[11] = p[12] = p[13] = p[14] = p[15] = 0), t) for (o = this.start; n < d && o < 64; ++n) p[o >> 2] |= i[n] << SHIFT[o++ & 3]; else for (o = this.start; n < d && o < 64; ++n) r = i.charCodeAt(n), r < 128 ? p[o >> 2] |= r << SHIFT[o++ & 3] : r < 2048 ? (p[o >> 2] |= (192 | r >> 6) << SHIFT[o++ & 3], p[o >> 2] |= (128 | r & 63) << SHIFT[o++ & 3]) : r < 55296 || r >= 57344 ? (p[o >> 2] |= (224 | r >> 12) << SHIFT[o++ & 3], p[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[o++ & 3], p[o >> 2] |= (128 | r & 63) << SHIFT[o++ & 3]) : (r = 65536 + ((r & 1023) << 10 | i.charCodeAt(++n) & 1023), p[o >> 2] |= (240 | r >> 18) << SHIFT[o++ & 3], p[o >> 2] |= (128 | r >> 12 & 63) << SHIFT[o++ & 3], p[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[o++ & 3], p[o >> 2] |= (128 | r & 63) << SHIFT[o++ & 3]);
              this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.block = p[16], this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
          }
        }, Sha256.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0;
            var i = this.blocks, t = this.lastByteIndex;
            i[16] = this.block, i[t >> 2] |= EXTRA[t & 3], this.block = i[16], t >= 56 && (this.hashed || this.hash(), i[0] = this.block, i[16] = i[1] = i[2] = i[3] = i[4] = i[5] = i[6] = i[7] = i[8] = i[9] = i[10] = i[11] = i[12] = i[13] = i[14] = i[15] = 0), i[14] = this.hBytes << 3 | this.bytes >>> 29, i[15] = this.bytes << 3, this.hash()
          }
        }, Sha256.prototype.hash = function () {
          var i = this.h0, t = this.h1, e = this.h2, r = this.h3, n = this.h4, o = this.h5, d = this.h6, p = this.h7,
              m = this.blocks, I, A, E, T, k, lt, ut, wt, Ot, ce, _e;
          for (I = 16; I < 64; ++I) k = m[I - 15], A = (k >>> 7 | k << 25) ^ (k >>> 18 | k << 14) ^ k >>> 3, k = m[I - 2], E = (k >>> 17 | k << 15) ^ (k >>> 19 | k << 13) ^ k >>> 10, m[I] = m[I - 16] + A + m[I - 7] + E << 0;
          for (_e = t & e, I = 0; I < 64; I += 4) this.first ? (this.is224 ? (wt = 300032, k = m[0] - 1413257819, p = k - 150054599 << 0, r = k + 24177077 << 0) : (wt = 704751109, k = m[0] - 210244248, p = k - 1521486534 << 0, r = k + 143694565 << 0), this.first = !1) : (A = (i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10), E = (n >>> 6 | n << 26) ^ (n >>> 11 | n << 21) ^ (n >>> 25 | n << 7), wt = i & t, T = wt ^ i & e ^ _e, ut = n & o ^ ~n & d, k = p + E + ut + K[I] + m[I], lt = A + T, p = r + k << 0, r = k + lt << 0), A = (r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10), E = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7), Ot = r & i, T = Ot ^ r & t ^ wt, ut = p & n ^ ~p & o, k = d + E + ut + K[I + 1] + m[I + 1], lt = A + T, d = e + k << 0, e = k + lt << 0, A = (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10), E = (d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7), ce = e & r, T = ce ^ e & i ^ Ot, ut = d & p ^ ~d & n, k = o + E + ut + K[I + 2] + m[I + 2], lt = A + T, o = t + k << 0, t = k + lt << 0, A = (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10), E = (o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7), _e = t & e, T = _e ^ t & r ^ ce, ut = o & d ^ ~o & p, k = n + E + ut + K[I + 3] + m[I + 3], lt = A + T, n = i + k << 0, i = k + lt << 0;
          this.h0 = this.h0 + i << 0, this.h1 = this.h1 + t << 0, this.h2 = this.h2 + e << 0, this.h3 = this.h3 + r << 0, this.h4 = this.h4 + n << 0, this.h5 = this.h5 + o << 0, this.h6 = this.h6 + d << 0, this.h7 = this.h7 + p << 0
        }, Sha256.prototype.hex = function () {
          this.finalize();
          var i = this.h0, t = this.h1, e = this.h2, r = this.h3, n = this.h4, o = this.h5, d = this.h6, p = this.h7,
              m = HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[i & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[t & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[e & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[r & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[n & 15] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[o & 15] + HEX_CHARS[d >> 28 & 15] + HEX_CHARS[d >> 24 & 15] + HEX_CHARS[d >> 20 & 15] + HEX_CHARS[d >> 16 & 15] + HEX_CHARS[d >> 12 & 15] + HEX_CHARS[d >> 8 & 15] + HEX_CHARS[d >> 4 & 15] + HEX_CHARS[d & 15];
          return this.is224 || (m += HEX_CHARS[p >> 28 & 15] + HEX_CHARS[p >> 24 & 15] + HEX_CHARS[p >> 20 & 15] + HEX_CHARS[p >> 16 & 15] + HEX_CHARS[p >> 12 & 15] + HEX_CHARS[p >> 8 & 15] + HEX_CHARS[p >> 4 & 15] + HEX_CHARS[p & 15]), m
        }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function () {
          this.finalize();
          var i = this.h0, t = this.h1, e = this.h2, r = this.h3, n = this.h4, o = this.h5, d = this.h6, p = this.h7,
              m = [i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, o & 255, d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255];
          return this.is224 || m.push(p >> 24 & 255, p >> 16 & 255, p >> 8 & 255, p & 255), m
        }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function () {
          this.finalize();
          var i = new ArrayBuffer(this.is224 ? 28 : 32), t = new DataView(i);
          return t.setUint32(0, this.h0), t.setUint32(4, this.h1), t.setUint32(8, this.h2), t.setUint32(12, this.h3), t.setUint32(16, this.h4), t.setUint32(20, this.h5), t.setUint32(24, this.h6), this.is224 || t.setUint32(28, this.h7), i
        };

        function HmacSha256(i, t, e) {
          var r, n = typeof i;
          if (n === "string") {
            var o = [], d = i.length, p = 0, m;
            for (r = 0; r < d; ++r) m = i.charCodeAt(r), m < 128 ? o[p++] = m : m < 2048 ? (o[p++] = 192 | m >> 6, o[p++] = 128 | m & 63) : m < 55296 || m >= 57344 ? (o[p++] = 224 | m >> 12, o[p++] = 128 | m >> 6 & 63, o[p++] = 128 | m & 63) : (m = 65536 + ((m & 1023) << 10 | i.charCodeAt(++r) & 1023), o[p++] = 240 | m >> 18, o[p++] = 128 | m >> 12 & 63, o[p++] = 128 | m >> 6 & 63, o[p++] = 128 | m & 63);
            i = o
          } else if (n === "object") {
            if (i === null) throw new Error(ERROR);
            if (ARRAY_BUFFER && i.constructor === ArrayBuffer) i = new Uint8Array(i); else if (!Array.isArray(i) && (!ARRAY_BUFFER || !ArrayBuffer.isView(i))) throw new Error(ERROR)
          } else throw new Error(ERROR);
          i.length > 64 && (i = new Sha256(t, !0).update(i).array());
          var I = [], A = [];
          for (r = 0; r < 64; ++r) {
            var E = i[r] || 0;
            I[r] = 92 ^ E, A[r] = 54 ^ E
          }
          Sha256.call(this, t, e), this.update(A), this.oKeyPad = I, this.inner = !0, this.sharedMemory = e
        }

        HmacSha256.prototype = new Sha256, HmacSha256.prototype.finalize = function () {
          if (Sha256.prototype.finalize.call(this), this.inner) {
            this.inner = !1;
            var i = this.array();
            Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(i), Sha256.prototype.finalize.call(this)
          }
        };
        var exports = createMethod();
        exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), exports.sha224.hmac = createHmacMethod(!0), COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224, AMD && define(function () {
          return exports
        }))
      })()
    });
    var t1 = {};
    vr(t1, {registerWorker: () => cy});
    var hh = Wf(fh(), 1), {
      __extends: s1,
      __assign: o1,
      __rest: ph,
      __decorate: a1,
      __param: l1,
      __metadata: c1,
      __awaiter: O,
      __generator: u1,
      __exportStar: d1,
      __createBinding: f1,
      __values: h1,
      __read: p1,
      __spread: y1,
      __spreadArrays: _1,
      __spreadArray: m1,
      __await: it,
      __asyncGenerator: be,
      __asyncDelegator: Lr,
      __asyncValues: Ne,
      __makeTemplateObject: b1,
      __importStar: v1,
      __importDefault: g1,
      __classPrivateFieldGet: w1,
      __classPrivateFieldSet: j1,
      __classPrivateFieldIn: S1
    } = hh.default;
    var wa = {};
    vr(wa, {
      compareArrayLike: () => ga,
      joinUint8Arrays: () => De,
      memcpy: () => Nr,
      rebaseValueOffsets: () => wn,
      toArrayBufferView: () => rt,
      toArrayBufferViewAsyncIterator: () => Ze,
      toArrayBufferViewIterator: () => pi,
      toBigInt64Array: () => yj,
      toBigUint64Array: () => bj,
      toFloat32Array: () => vj,
      toFloat32ArrayAsyncIterator: () => Rj,
      toFloat32ArrayIterator: () => Aj,
      toFloat64Array: () => gj,
      toFloat64ArrayAsyncIterator: () => Mj,
      toFloat64ArrayIterator: () => xj,
      toInt16Array: () => pj,
      toInt16ArrayAsyncIterator: () => Dj,
      toInt16ArrayIterator: () => Sj,
      toInt32Array: () => gr,
      toInt32ArrayAsyncIterator: () => Ej,
      toInt32ArrayIterator: () => Ij,
      toInt8Array: () => hj,
      toInt8ArrayAsyncIterator: () => Tj,
      toInt8ArrayIterator: () => jj,
      toUint16Array: () => _j,
      toUint16ArrayAsyncIterator: () => kj,
      toUint16ArrayIterator: () => Cj,
      toUint32Array: () => mj,
      toUint32ArrayAsyncIterator: () => Oj,
      toUint32ArrayIterator: () => Fj,
      toUint8Array: () => Y,
      toUint8ArrayAsyncIterator: () => va,
      toUint8ArrayIterator: () => ba,
      toUint8ClampedArray: () => wj,
      toUint8ClampedArrayAsyncIterator: () => Uj,
      toUint8ClampedArrayIterator: () => Bj
    });
    var cj = new TextDecoder("utf-8"), vn = i => cj.decode(i), uj = new TextEncoder, tr = i => uj.encode(i);
    var [F1, As] = (() => {
      let i = () => {
        throw new Error("BigInt is not available in this environment")
      };

      function t() {
        throw i()
      }

      return t.asIntN = () => {
        throw i()
      }, t.asUintN = () => {
        throw i()
      }, typeof BigInt < "u" ? [BigInt, !0] : [t, !1]
    })(), [Pe, A1] = (() => {
      let i = () => {
        throw new Error("BigInt64Array is not available in this environment")
      };

      class t {
        static get BYTES_PER_ELEMENT() {
          return 8
        }

        static of() {
          throw i()
        }

        static from() {
          throw i()
        }

        constructor() {
          throw i()
        }
      }

      return typeof BigInt64Array < "u" ? [BigInt64Array, !0] : [t, !1]
    })(), [He, x1] = (() => {
      let i = () => {
        throw new Error("BigUint64Array is not available in this environment")
      };

      class t {
        static get BYTES_PER_ELEMENT() {
          return 8
        }

        static of() {
          throw i()
        }

        static from() {
          throw i()
        }

        constructor() {
          throw i()
        }
      }

      return typeof BigUint64Array < "u" ? [BigUint64Array, !0] : [t, !1]
    })();
    var dj = i => typeof i == "number", yh = i => typeof i == "boolean", zt = i => typeof i == "function",
        fe = i => i != null && Object(i) === i, Je = i => fe(i) && zt(i.then);
    var qe = i => fe(i) && zt(i[Symbol.iterator]), Ve = i => fe(i) && zt(i[Symbol.asyncIterator]),
        xs = i => fe(i) && fe(i.schema);
    var Bs = i => fe(i) && "done" in i && "value" in i;
    var Ts = i => fe(i) && zt(i.stat) && dj(i.fd);
    var Ds = i => fe(i) && gn(i.body), Es = i => "_getDOMStream" in i && "_getNodeStream" in i,
        _h = i => fe(i) && zt(i.abort) && zt(i.getWriter) && !Es(i),
        gn = i => fe(i) && zt(i.cancel) && zt(i.getReader) && !Es(i),
        mh = i => fe(i) && zt(i.end) && zt(i.write) && yh(i.writable) && !Es(i),
        ks = i => fe(i) && zt(i.read) && zt(i.pipe) && yh(i.readable) && !Es(i),
        bh = i => fe(i) && zt(i.clear) && zt(i.bytes) && zt(i.position) && zt(i.setPosition) && zt(i.capacity) && zt(i.getBufferIdentifier) && zt(i.createLong);
    var ma = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;

    function fj(i) {
      let t = i[0] ? [i[0]] : [], e, r, n, o;
      for (let d, p, m = 0, I = 0, A = i.length; ++m < A;) {
        if (d = t[I], p = i[m], !d || !p || d.buffer !== p.buffer || p.byteOffset < d.byteOffset) {
          p && (t[++I] = p);
          continue
        }
        if ({byteOffset: e, byteLength: n} = d, {byteOffset: r, byteLength: o} = p, e + n < r || r + o < e) {
          p && (t[++I] = p);
          continue
        }
        t[I] = new Uint8Array(d.buffer, e, r - e + o)
      }
      return t
    }

    function Nr(i, t, e = 0, r = t.byteLength) {
      let n = i.byteLength, o = new Uint8Array(i.buffer, i.byteOffset, n),
          d = new Uint8Array(t.buffer, t.byteOffset, Math.min(r, n));
      return o.set(d, e), i
    }

    function De(i, t) {
      let e = fj(i), r = e.reduce((A, E) => A + E.byteLength, 0), n, o, d, p = 0, m = -1,
          I = Math.min(t || Number.POSITIVE_INFINITY, r);
      for (let A = e.length; ++m < A;) {
        if (n = e[m], o = n.subarray(0, Math.min(n.length, I - p)), I <= p + o.length) {
          o.length < n.length ? e[m] = n.subarray(o.length) : o.length === n.length && m++, d ? Nr(d, o, p) : d = o;
          break
        }
        Nr(d || (d = new Uint8Array(I)), o, p), p += o.length
      }
      return [d || new Uint8Array(0), e.slice(m), r - (d ? d.byteLength : 0)]
    }

    function rt(i, t) {
      let e = Bs(t) ? t.value : t;
      return e instanceof i ? i === Uint8Array ? new i(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = tr(e)), e instanceof ArrayBuffer ? new i(e) : e instanceof ma ? new i(e) : bh(e) ? rt(i, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new i(0) : new i(e.buffer, e.byteOffset, e.byteLength / i.BYTES_PER_ELEMENT) : i.from(e)) : new i(0)
    }

    var hj = i => rt(Int8Array, i), pj = i => rt(Int16Array, i), gr = i => rt(Int32Array, i), yj = i => rt(Pe, i),
        Y = i => rt(Uint8Array, i), _j = i => rt(Uint16Array, i), mj = i => rt(Uint32Array, i), bj = i => rt(He, i),
        vj = i => rt(Float32Array, i), gj = i => rt(Float64Array, i), wj = i => rt(Uint8ClampedArray, i),
        _a = i => (i.next(), i);

    function* pi(i, t) {
      let e = function* (n) {
            yield n
          },
          r = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof ma ? e(t) : qe(t) ? t : e(t);
      return yield* _a(function* (n) {
        let o = null;
        do o = n.next(yield rt(i, o)); while (!o.done)
      }(r[Symbol.iterator]())), new i
    }

    var jj = i => pi(Int8Array, i), Sj = i => pi(Int16Array, i), Ij = i => pi(Int32Array, i),
        ba = i => pi(Uint8Array, i), Cj = i => pi(Uint16Array, i), Fj = i => pi(Uint32Array, i),
        Aj = i => pi(Float32Array, i), xj = i => pi(Float64Array, i), Bj = i => pi(Uint8ClampedArray, i);

    function Ze(i, t) {
      return be(this, arguments, function* () {
        if (Je(t)) return yield it(yield it(yield* Lr(Ne(Ze(i, yield it(t))))));
        let r = function (d) {
              return be(this, arguments, function* () {
                yield yield it(yield it(d))
              })
            }, n = function (d) {
              return be(this, arguments, function* () {
                yield it(yield* Lr(Ne(_a(function* (p) {
                  let m = null;
                  do m = p.next(yield m == null ? void 0 : m.value); while (!m.done)
                }(d[Symbol.iterator]())))))
              })
            },
            o = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof ma ? r(t) : qe(t) ? n(t) : Ve(t) ? t : r(t);
        return yield it(yield* Lr(Ne(_a(function (d) {
          return be(this, arguments, function* () {
            let p = null;
            do p = yield it(d.next(yield yield it(rt(i, p)))); while (!p.done)
          })
        }(o[Symbol.asyncIterator]()))))), yield it(new i)
      })
    }

    var Tj = i => Ze(Int8Array, i), Dj = i => Ze(Int16Array, i), Ej = i => Ze(Int32Array, i),
        va = i => Ze(Uint8Array, i), kj = i => Ze(Uint16Array, i), Oj = i => Ze(Uint32Array, i),
        Rj = i => Ze(Float32Array, i), Mj = i => Ze(Float64Array, i), Uj = i => Ze(Uint8ClampedArray, i);

    function wn(i, t, e) {
      if (i !== 0) {
        e = e.slice(0, t + 1);
        for (let r = -1; ++r <= t;) e[r] += i
      }
      return e
    }

    function ga(i, t) {
      let e = 0, r = i.length;
      if (r !== t.length) return !1;
      if (r > 0) do if (i[e] !== t[e]) return !1; while (++e < r);
      return !0
    }

    var te = {
      fromIterable(i) {
        return Os(Lj(i))
      }, fromAsyncIterable(i) {
        return Os(Nj(i))
      }, fromDOMStream(i) {
        return Os(Pj(i))
      }, fromNodeStream(i) {
        return Os(Hj(i))
      }, toDOMStream(i, t) {
        throw new Error('"toDOMStream" not available in this environment')
      }, toNodeStream(i, t) {
        throw new Error('"toNodeStream" not available in this environment')
      }
    }, Os = i => (i.next(), i);

    function* Lj(i) {
      let t, e = !1, r = [], n, o, d, p = 0;

      function m() {
        return o === "peek" ? De(r, d)[0] : ([n, r, p] = De(r, d), n)
      }

      ({cmd: o, size: d} = yield null);
      let I = ba(i)[Symbol.iterator]();
      try {
        do if ({
          done: t,
          value: n
        } = Number.isNaN(d - p) ? I.next() : I.next(d - p), !t && n.byteLength > 0 && (r.push(n), p += n.byteLength), t || d <= p) do ({
          cmd: o,
          size: d
        } = yield m()); while (d < p); while (!t)
      } catch (A) {
        (e = !0) && typeof I.throw == "function" && I.throw(A)
      } finally {
        e === !1 && typeof I.return == "function" && I.return(null)
      }
      return null
    }

    function Nj(i) {
      return be(this, arguments, function* () {
        let e, r = !1, n = [], o, d, p, m = 0;

        function I() {
          return d === "peek" ? De(n, p)[0] : ([o, n, m] = De(n, p), o)
        }

        ({cmd: d, size: p} = yield yield it(null));
        let A = va(i)[Symbol.asyncIterator]();
        try {
          do if ({
            done: e,
            value: o
          } = Number.isNaN(p - m) ? yield it(A.next()) : yield it(A.next(p - m)), !e && o.byteLength > 0 && (n.push(o), m += o.byteLength), e || p <= m) do ({
            cmd: d,
            size: p
          } = yield yield it(I())); while (p < m); while (!e)
        } catch (E) {
          (r = !0) && typeof A.throw == "function" && (yield it(A.throw(E)))
        } finally {
          r === !1 && typeof A.return == "function" && (yield it(A.return(new Uint8Array(0))))
        }
        return yield it(null)
      })
    }

    function Pj(i) {
      return be(this, arguments, function* () {
        let e = !1, r = !1, n = [], o, d, p, m = 0;

        function I() {
          return d === "peek" ? De(n, p)[0] : ([o, n, m] = De(n, p), o)
        }

        ({cmd: d, size: p} = yield yield it(null));
        let A = new Sa(i);
        try {
          do if ({
            done: e,
            value: o
          } = Number.isNaN(p - m) ? yield it(A.read()) : yield it(A.read(p - m)), !e && o.byteLength > 0 && (n.push(Y(o)), m += o.byteLength), e || p <= m) do ({
            cmd: d,
            size: p
          } = yield yield it(I())); while (p < m); while (!e)
        } catch (E) {
          (r = !0) && (yield it(A.cancel(E)))
        } finally {
          r === !1 ? yield it(A.cancel()) : i.locked && A.releaseLock()
        }
        return yield it(null)
      })
    }

    var Sa = class {
      constructor(t) {
        this.source = t, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch(() => {
        })
      }

      get closed() {
        return this.reader ? this.reader.closed.catch(() => {
        }) : Promise.resolve()
      }

      releaseLock() {
        this.reader && this.reader.releaseLock(), this.reader = null
      }

      cancel(t) {
        return O(this, void 0, void 0, function* () {
          let {reader: e, source: r} = this;
          e && (yield e.cancel(t).catch(() => {
          })), r && r.locked && this.releaseLock()
        })
      }

      read(t) {
        return O(this, void 0, void 0, function* () {
          if (t === 0) return {done: this.reader == null, value: new Uint8Array(0)};
          let e = yield this.reader.read();
          return !e.done && (e.value = Y(e)), e
        })
      }
    }, ja = (i, t) => {
      let e = n => r([t, n]), r;
      return [t, e, new Promise(n => (r = n) && i.once(t, e))]
    };

    function Hj(i) {
      return be(this, arguments, function* () {
        let e = [], r = "error", n = !1, o = null, d, p, m = 0, I = [], A;

        function E() {
          return d === "peek" ? De(I, p)[0] : ([A, I, m] = De(I, p), A)
        }

        if ({cmd: d, size: p} = yield yield it(null), i.isTTY) return yield yield it(new Uint8Array(0)), yield it(null);
        try {
          e[0] = ja(i, "end"), e[1] = ja(i, "error");
          do {
            if (e[2] = ja(i, "readable"), [r, o] = yield it(Promise.race(e.map(k => k[2]))), r === "error") break;
            if ((n = r === "end") || (Number.isFinite(p - m) ? (A = Y(i.read(p - m)), A.byteLength < p - m && (A = Y(i.read()))) : A = Y(i.read()), A.byteLength > 0 && (I.push(A), m += A.byteLength)), n || p <= m) do ({
              cmd: d,
              size: p
            } = yield yield it(E())); while (p < m)
          } while (!n)
        } finally {
          yield it(T(e, r === "error" ? o : null))
        }
        return yield it(null);

        function T(k, lt) {
          return A = I = null, new Promise((ut, wt) => {
            for (let [Ot, ce] of k) i.off(Ot, ce);
            try {
              let Ot = i.destroy;
              Ot && Ot.call(i, lt), lt = void 0
            } catch (Ot) {
              lt = Ot || lt
            } finally {
              lt != null ? wt(lt) : ut()
            }
          })
        }
      })
    }

    var Yt;
    (function (i) {
      i[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2", i[i.V3 = 2] = "V3", i[i.V4 = 3] = "V4", i[i.V5 = 4] = "V5"
    })(Yt || (Yt = {}));
    var Dt;
    (function (i) {
      i[i.Sparse = 0] = "Sparse", i[i.Dense = 1] = "Dense"
    })(Dt || (Dt = {}));
    var xt;
    (function (i) {
      i[i.HALF = 0] = "HALF", i[i.SINGLE = 1] = "SINGLE", i[i.DOUBLE = 2] = "DOUBLE"
    })(xt || (xt = {}));
    var ee;
    (function (i) {
      i[i.DAY = 0] = "DAY", i[i.MILLISECOND = 1] = "MILLISECOND"
    })(ee || (ee = {}));
    var st;
    (function (i) {
      i[i.SECOND = 0] = "SECOND", i[i.MILLISECOND = 1] = "MILLISECOND", i[i.MICROSECOND = 2] = "MICROSECOND", i[i.NANOSECOND = 3] = "NANOSECOND"
    })(st || (st = {}));
    var he;
    (function (i) {
      i[i.YEAR_MONTH = 0] = "YEAR_MONTH", i[i.DAY_TIME = 1] = "DAY_TIME", i[i.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO"
    })(he || (he = {}));
    var ft;
    (function (i) {
      i[i.NONE = 0] = "NONE", i[i.Schema = 1] = "Schema", i[i.DictionaryBatch = 2] = "DictionaryBatch", i[i.RecordBatch = 3] = "RecordBatch", i[i.Tensor = 4] = "Tensor", i[i.SparseTensor = 5] = "SparseTensor"
    })(ft || (ft = {}));
    var F;
    (function (i) {
      i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.Float = 3] = "Float", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct = 13] = "Struct", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Dictionary = -1] = "Dictionary", i[i.Int8 = -2] = "Int8", i[i.Int16 = -3] = "Int16", i[i.Int32 = -4] = "Int32", i[i.Int64 = -5] = "Int64", i[i.Uint8 = -6] = "Uint8", i[i.Uint16 = -7] = "Uint16", i[i.Uint32 = -8] = "Uint32", i[i.Uint64 = -9] = "Uint64", i[i.Float16 = -10] = "Float16", i[i.Float32 = -11] = "Float32", i[i.Float64 = -12] = "Float64", i[i.DateDay = -13] = "DateDay", i[i.DateMillisecond = -14] = "DateMillisecond", i[i.TimestampSecond = -15] = "TimestampSecond", i[i.TimestampMillisecond = -16] = "TimestampMillisecond", i[i.TimestampMicrosecond = -17] = "TimestampMicrosecond", i[i.TimestampNanosecond = -18] = "TimestampNanosecond", i[i.TimeSecond = -19] = "TimeSecond", i[i.TimeMillisecond = -20] = "TimeMillisecond", i[i.TimeMicrosecond = -21] = "TimeMicrosecond", i[i.TimeNanosecond = -22] = "TimeNanosecond", i[i.DenseUnion = -23] = "DenseUnion", i[i.SparseUnion = -24] = "SparseUnion", i[i.IntervalDayTime = -25] = "IntervalDayTime", i[i.IntervalYearMonth = -26] = "IntervalYearMonth"
    })(F || (F = {}));
    var ze;
    (function (i) {
      i[i.OFFSET = 0] = "OFFSET", i[i.DATA = 1] = "DATA", i[i.VALIDITY = 2] = "VALIDITY", i[i.TYPE = 3] = "TYPE"
    })(ze || (ze = {}));
    var Pa = {};
    vr(Pa, {clampIndex: () => ES, clampRange: () => In, createElementComparator: () => nr});
    var Vj = void 0;

    function Qe(i) {
      if (i === null) return "null";
      if (i === Vj) return "undefined";
      switch (typeof i) {
        case"number":
          return `${i}`;
        case"bigint":
          return `${i}`;
        case"string":
          return `"${i}"`
      }
      return typeof i[Symbol.toPrimitive] == "function" ? i[Symbol.toPrimitive]("string") : ArrayBuffer.isView(i) ? i instanceof Pe || i instanceof He ? `[${[...i].map(t => Qe(t))}]` : `[${i}]` : ArrayBuffer.isView(i) ? `[${i}]` : JSON.stringify(i, (t, e) => typeof e == "bigint" ? `${e}` : e)
    }

    var Ca = {};
    vr(Ca, {BN: () => wr, bignumToBigInt: () => Rs, bignumToString: () => er, isArrowBigNumSymbol: () => vh});
    var vh = Symbol.for("isArrowBigNum");

    function ti(i, ...t) {
      return t.length === 0 ? Object.setPrototypeOf(rt(this.TypedArray, i), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(i, ...t), this.constructor.prototype)
    }

    ti.prototype[vh] = !0;
    ti.prototype.toJSON = function () {
      return `"${er(this)}"`
    };
    ti.prototype.valueOf = function () {
      return gh(this)
    };
    ti.prototype.toString = function () {
      return er(this)
    };
    ti.prototype[Symbol.toPrimitive] = function (i = "default") {
      switch (i) {
        case"number":
          return gh(this);
        case"string":
          return er(this);
        case"default":
          return Rs(this)
      }
      return er(this)
    };

    function Pr(...i) {
      return ti.apply(this, i)
    }

    function Hr(...i) {
      return ti.apply(this, i)
    }

    function jn(...i) {
      return ti.apply(this, i)
    }

    Object.setPrototypeOf(Pr.prototype, Object.create(Int32Array.prototype));
    Object.setPrototypeOf(Hr.prototype, Object.create(Uint32Array.prototype));
    Object.setPrototypeOf(jn.prototype, Object.create(Uint32Array.prototype));
    Object.assign(Pr.prototype, ti.prototype, {constructor: Pr, signed: !0, TypedArray: Int32Array, BigIntArray: Pe});
    Object.assign(Hr.prototype, ti.prototype, {constructor: Hr, signed: !1, TypedArray: Uint32Array, BigIntArray: He});
    Object.assign(jn.prototype, ti.prototype, {constructor: jn, signed: !0, TypedArray: Uint32Array, BigIntArray: He});

    function gh(i) {
      let {buffer: t, byteOffset: e, length: r, signed: n} = i, o = new He(t, e, r),
          d = n && o[o.length - 1] & BigInt(1) << BigInt(63), p = BigInt(d ? 1 : 0), m = BigInt(0);
      if (d) {
        for (let I of o) p += ~I * (BigInt(1) << BigInt(32) * m++);
        p *= BigInt(-1)
      } else for (let I of o) p += I * (BigInt(1) << BigInt(32) * m++);
      return p
    }

    var er, Rs;
    As ? (Rs = i => i.byteLength === 8 ? new i.BigIntArray(i.buffer, i.byteOffset, 1)[0] : Ia(i), er = i => i.byteLength === 8 ? `${new i.BigIntArray(i.buffer, i.byteOffset, 1)[0]}` : Ia(i)) : (er = Ia, Rs = er);

    function Ia(i) {
      let t = "", e = new Uint32Array(2), r = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2),
          n = new Uint32Array((r = new Uint16Array(r).reverse()).buffer), o = -1, d = r.length - 1;
      do {
        for (e[0] = r[o = 0]; o < d;) r[o++] = e[1] = e[0] / 10, e[0] = (e[0] - e[1] * 10 << 16) + r[o];
        r[o] = e[1] = e[0] / 10, e[0] = e[0] - e[1] * 10, t = `${e[0]}${t}`
      } while (n[0] || n[1] || n[2] || n[3]);
      return t != null ? t : "0"
    }

    var wr = class {
      static new(t, e) {
        switch (e) {
          case!0:
            return new Pr(t);
          case!1:
            return new Hr(t)
        }
        switch (t.constructor) {
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case Pe:
            return new Pr(t)
        }
        return t.byteLength === 16 ? new jn(t) : new Hr(t)
      }

      static signed(t) {
        return new Pr(t)
      }

      static unsigned(t) {
        return new Hr(t)
      }

      static decimal(t) {
        return new jn(t)
      }

      constructor(t, e) {
        return wr.new(t, e)
      }
    };
    var wh, jh, Sh, Ih, Ch, Fh, Ah, xh, Bh, Th, Dh, Eh, kh, Oh, Rh, Mh, Uh, Lh, Nh, L = class {
      static isNull(t) {
        return (t == null ? void 0 : t.typeId) === F.Null
      }

      static isInt(t) {
        return (t == null ? void 0 : t.typeId) === F.Int
      }

      static isFloat(t) {
        return (t == null ? void 0 : t.typeId) === F.Float
      }

      static isBinary(t) {
        return (t == null ? void 0 : t.typeId) === F.Binary
      }

      static isUtf8(t) {
        return (t == null ? void 0 : t.typeId) === F.Utf8
      }

      static isBool(t) {
        return (t == null ? void 0 : t.typeId) === F.Bool
      }

      static isDecimal(t) {
        return (t == null ? void 0 : t.typeId) === F.Decimal
      }

      static isDate(t) {
        return (t == null ? void 0 : t.typeId) === F.Date
      }

      static isTime(t) {
        return (t == null ? void 0 : t.typeId) === F.Time
      }

      static isTimestamp(t) {
        return (t == null ? void 0 : t.typeId) === F.Timestamp
      }

      static isInterval(t) {
        return (t == null ? void 0 : t.typeId) === F.Interval
      }

      static isList(t) {
        return (t == null ? void 0 : t.typeId) === F.List
      }

      static isStruct(t) {
        return (t == null ? void 0 : t.typeId) === F.Struct
      }

      static isUnion(t) {
        return (t == null ? void 0 : t.typeId) === F.Union
      }

      static isFixedSizeBinary(t) {
        return (t == null ? void 0 : t.typeId) === F.FixedSizeBinary
      }

      static isFixedSizeList(t) {
        return (t == null ? void 0 : t.typeId) === F.FixedSizeList
      }

      static isMap(t) {
        return (t == null ? void 0 : t.typeId) === F.Map
      }

      static isDictionary(t) {
        return (t == null ? void 0 : t.typeId) === F.Dictionary
      }

      static isDenseUnion(t) {
        return L.isUnion(t) && t.mode === Dt.Dense
      }

      static isSparseUnion(t) {
        return L.isUnion(t) && t.mode === Dt.Sparse
      }

      get typeId() {
        return F.NONE
      }
    };
    wh = Symbol.toStringTag;
    L[wh] = (i => (i.children = null, i.ArrayType = Array, i[Symbol.toStringTag] = "DataType"))(L.prototype);
    var pe = class extends L {
      toString() {
        return "Null"
      }

      get typeId() {
        return F.Null
      }
    };
    jh = Symbol.toStringTag;
    pe[jh] = (i => i[Symbol.toStringTag] = "Null")(pe.prototype);
    var Mt = class extends L {
      constructor(t, e) {
        super(), this.isSigned = t, this.bitWidth = e
      }

      get typeId() {
        return F.Int
      }

      get ArrayType() {
        switch (this.bitWidth) {
          case 8:
            return this.isSigned ? Int8Array : Uint8Array;
          case 16:
            return this.isSigned ? Int16Array : Uint16Array;
          case 32:
            return this.isSigned ? Int32Array : Uint32Array;
          case 64:
            return this.isSigned ? Pe : He
        }
        throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)
      }

      toString() {
        return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`
      }
    };
    Sh = Symbol.toStringTag;
    Mt[Sh] = (i => (i.isSigned = null, i.bitWidth = null, i[Symbol.toStringTag] = "Int"))(Mt.prototype);
    var Ms = class extends Mt {
      constructor() {
        super(!0, 8)
      }

      get ArrayType() {
        return Int8Array
      }
    }, Us = class extends Mt {
      constructor() {
        super(!0, 16)
      }

      get ArrayType() {
        return Int16Array
      }
    }, yi = class extends Mt {
      constructor() {
        super(!0, 32)
      }

      get ArrayType() {
        return Int32Array
      }
    }, Ls = class extends Mt {
      constructor() {
        super(!0, 64)
      }

      get ArrayType() {
        return Pe
      }
    }, Ns = class extends Mt {
      constructor() {
        super(!1, 8)
      }

      get ArrayType() {
        return Uint8Array
      }
    }, Ps = class extends Mt {
      constructor() {
        super(!1, 16)
      }

      get ArrayType() {
        return Uint16Array
      }
    }, Hs = class extends Mt {
      constructor() {
        super(!1, 32)
      }

      get ArrayType() {
        return Uint32Array
      }
    }, Vs = class extends Mt {
      constructor() {
        super(!1, 64)
      }

      get ArrayType() {
        return He
      }
    };
    Object.defineProperty(Ms.prototype, "ArrayType", {value: Int8Array});
    Object.defineProperty(Us.prototype, "ArrayType", {value: Int16Array});
    Object.defineProperty(yi.prototype, "ArrayType", {value: Int32Array});
    Object.defineProperty(Ls.prototype, "ArrayType", {value: Pe});
    Object.defineProperty(Ns.prototype, "ArrayType", {value: Uint8Array});
    Object.defineProperty(Ps.prototype, "ArrayType", {value: Uint16Array});
    Object.defineProperty(Hs.prototype, "ArrayType", {value: Uint32Array});
    Object.defineProperty(Vs.prototype, "ArrayType", {value: He});
    var ve = class extends L {
      constructor(t) {
        super(), this.precision = t
      }

      get typeId() {
        return F.Float
      }

      get ArrayType() {
        switch (this.precision) {
          case xt.HALF:
            return Uint16Array;
          case xt.SINGLE:
            return Float32Array;
          case xt.DOUBLE:
            return Float64Array
        }
        throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)
      }

      toString() {
        return `Float${this.precision << 5 || 16}`
      }
    };
    Ih = Symbol.toStringTag;
    ve[Ih] = (i => (i.precision = null, i[Symbol.toStringTag] = "Float"))(ve.prototype);
    var zs = class extends ve {
      constructor() {
        super(xt.HALF)
      }
    }, Ws = class extends ve {
      constructor() {
        super(xt.SINGLE)
      }
    }, $s = class extends ve {
      constructor() {
        super(xt.DOUBLE)
      }
    };
    Object.defineProperty(zs.prototype, "ArrayType", {value: Uint16Array});
    Object.defineProperty(Ws.prototype, "ArrayType", {value: Float32Array});
    Object.defineProperty($s.prototype, "ArrayType", {value: Float64Array});
    var ki = class extends L {
      constructor() {
        super()
      }

      get typeId() {
        return F.Binary
      }

      toString() {
        return "Binary"
      }
    };
    Ch = Symbol.toStringTag;
    ki[Ch] = (i => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Binary"))(ki.prototype);
    var Oi = class extends L {
      constructor() {
        super()
      }

      get typeId() {
        return F.Utf8
      }

      toString() {
        return "Utf8"
      }
    };
    Fh = Symbol.toStringTag;
    Oi[Fh] = (i => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Utf8"))(Oi.prototype);
    var Ri = class extends L {
      constructor() {
        super()
      }

      get typeId() {
        return F.Bool
      }

      toString() {
        return "Bool"
      }
    };
    Ah = Symbol.toStringTag;
    Ri[Ah] = (i => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Bool"))(Ri.prototype);
    var Mi = class extends L {
      constructor(t, e, r = 128) {
        super(), this.scale = t, this.precision = e, this.bitWidth = r
      }

      get typeId() {
        return F.Decimal
      }

      toString() {
        return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`
      }
    };
    xh = Symbol.toStringTag;
    Mi[xh] = (i => (i.scale = null, i.precision = null, i.ArrayType = Uint32Array, i[Symbol.toStringTag] = "Decimal"))(Mi.prototype);
    var Ui = class extends L {
      constructor(t) {
        super(), this.unit = t
      }

      get typeId() {
        return F.Date
      }

      toString() {
        return `Date${(this.unit + 1) * 32}<${ee[this.unit]}>`
      }
    };
    Bh = Symbol.toStringTag;
    Ui[Bh] = (i => (i.unit = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Date"))(Ui.prototype);
    var ei = class extends L {
      constructor(t, e) {
        super(), this.unit = t, this.bitWidth = e
      }

      get typeId() {
        return F.Time
      }

      toString() {
        return `Time${this.bitWidth}<${st[this.unit]}>`
      }

      get ArrayType() {
        switch (this.bitWidth) {
          case 32:
            return Int32Array;
          case 64:
            return Pe
        }
        throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)
      }
    };
    Th = Symbol.toStringTag;
    ei[Th] = (i => (i.unit = null, i.bitWidth = null, i[Symbol.toStringTag] = "Time"))(ei.prototype);
    var Li = class extends L {
      constructor(t, e) {
        super(), this.unit = t, this.timezone = e
      }

      get typeId() {
        return F.Timestamp
      }

      toString() {
        return `Timestamp<${st[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`
      }
    };
    Dh = Symbol.toStringTag;
    Li[Dh] = (i => (i.unit = null, i.timezone = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Timestamp"))(Li.prototype);
    var Ni = class extends L {
      constructor(t) {
        super(), this.unit = t
      }

      get typeId() {
        return F.Interval
      }

      toString() {
        return `Interval<${he[this.unit]}>`
      }
    };
    Eh = Symbol.toStringTag;
    Ni[Eh] = (i => (i.unit = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Interval"))(Ni.prototype);
    var ii = class extends L {
      constructor(t) {
        super(), this.children = [t]
      }

      get typeId() {
        return F.List
      }

      toString() {
        return `List<${this.valueType}>`
      }

      get valueType() {
        return this.children[0].type
      }

      get valueField() {
        return this.children[0]
      }

      get ArrayType() {
        return this.valueType.ArrayType
      }
    };
    kh = Symbol.toStringTag;
    ii[kh] = (i => (i.children = null, i[Symbol.toStringTag] = "List"))(ii.prototype);
    var St = class extends L {
      constructor(t) {
        super(), this.children = t
      }

      get typeId() {
        return F.Struct
      }

      toString() {
        return `Struct<{${this.children.map(t => `${t.name}:${t.type}`).join(", ")}}>`
      }
    };
    Oh = Symbol.toStringTag;
    St[Oh] = (i => (i.children = null, i[Symbol.toStringTag] = "Struct"))(St.prototype);
    var ri = class extends L {
      constructor(t, e, r) {
        super(), this.mode = t, this.children = r, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((n, o, d) => (n[o] = d) && n || n, Object.create(null))
      }

      get typeId() {
        return F.Union
      }

      toString() {
        return `${this[Symbol.toStringTag]}<${this.children.map(t => `${t.type}`).join(" | ")}>`
      }
    };
    Rh = Symbol.toStringTag;
    ri[Rh] = (i => (i.mode = null, i.typeIds = null, i.children = null, i.typeIdToChildIndex = null, i.ArrayType = Int8Array, i[Symbol.toStringTag] = "Union"))(ri.prototype);
    var Pi = class extends L {
      constructor(t) {
        super(), this.byteWidth = t
      }

      get typeId() {
        return F.FixedSizeBinary
      }

      toString() {
        return `FixedSizeBinary[${this.byteWidth}]`
      }
    };
    Mh = Symbol.toStringTag;
    Pi[Mh] = (i => (i.byteWidth = null, i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "FixedSizeBinary"))(Pi.prototype);
    var ni = class extends L {
      constructor(t, e) {
        super(), this.listSize = t, this.children = [e]
      }

      get typeId() {
        return F.FixedSizeList
      }

      get valueType() {
        return this.children[0].type
      }

      get valueField() {
        return this.children[0]
      }

      get ArrayType() {
        return this.valueType.ArrayType
      }

      toString() {
        return `FixedSizeList[${this.listSize}]<${this.valueType}>`
      }
    };
    Uh = Symbol.toStringTag;
    ni[Uh] = (i => (i.children = null, i.listSize = null, i[Symbol.toStringTag] = "FixedSizeList"))(ni.prototype);
    var si = class extends L {
      constructor(t, e = !1) {
        super(), this.children = [t], this.keysSorted = e
      }

      get typeId() {
        return F.Map
      }

      get keyType() {
        return this.children[0].type.children[0].type
      }

      get valueType() {
        return this.children[0].type.children[1].type
      }

      get childType() {
        return this.children[0].type
      }

      toString() {
        return `Map<{${this.children[0].type.children.map(t => `${t.name}:${t.type}`).join(", ")}}>`
      }
    };
    Lh = Symbol.toStringTag;
    si[Lh] = (i => (i.children = null, i.keysSorted = null, i[Symbol.toStringTag] = "Map_"))(si.prototype);
    var zj = (i => () => ++i)(-1), Ee = class extends L {
      constructor(t, e, r, n) {
        super(), this.indices = e, this.dictionary = t, this.isOrdered = n || !1, this.id = r == null ? zj() : typeof r == "number" ? r : r.low
      }

      get typeId() {
        return F.Dictionary
      }

      get children() {
        return this.dictionary.children
      }

      get valueType() {
        return this.dictionary
      }

      get ArrayType() {
        return this.dictionary.ArrayType
      }

      toString() {
        return `Dictionary<${this.indices}, ${this.dictionary}>`
      }
    };
    Nh = Symbol.toStringTag;
    Ee[Nh] = (i => (i.id = null, i.indices = null, i.isOrdered = null, i.dictionary = null, i[Symbol.toStringTag] = "Dictionary"))(Ee.prototype);

    function ke(i) {
      let t = i;
      switch (i.typeId) {
        case F.Decimal:
          return i.bitWidth / 32;
        case F.Timestamp:
          return 2;
        case F.Date:
          return 1 + t.unit;
        case F.Interval:
          return 1 + t.unit;
        case F.FixedSizeList:
          return t.listSize;
        case F.FixedSizeBinary:
          return t.byteWidth;
        default:
          return 1
      }
    }

    var H = class {
      visitMany(t, ...e) {
        return t.map((r, n) => this.visit(r, ...e.map(o => o[n])))
      }

      visit(...t) {
        return this.getVisitFn(t[0], !1).apply(this, t)
      }

      getVisitFn(t, e = !0) {
        return Wj(this, t, e)
      }

      getVisitFnByTypeId(t, e = !0) {
        return Vr(this, t, e)
      }

      visitNull(t, ...e) {
        return null
      }

      visitBool(t, ...e) {
        return null
      }

      visitInt(t, ...e) {
        return null
      }

      visitFloat(t, ...e) {
        return null
      }

      visitUtf8(t, ...e) {
        return null
      }

      visitBinary(t, ...e) {
        return null
      }

      visitFixedSizeBinary(t, ...e) {
        return null
      }

      visitDate(t, ...e) {
        return null
      }

      visitTimestamp(t, ...e) {
        return null
      }

      visitTime(t, ...e) {
        return null
      }

      visitDecimal(t, ...e) {
        return null
      }

      visitList(t, ...e) {
        return null
      }

      visitStruct(t, ...e) {
        return null
      }

      visitUnion(t, ...e) {
        return null
      }

      visitDictionary(t, ...e) {
        return null
      }

      visitInterval(t, ...e) {
        return null
      }

      visitFixedSizeList(t, ...e) {
        return null
      }

      visitMap(t, ...e) {
        return null
      }
    };

    function Wj(i, t, e = !0) {
      return typeof t == "number" ? Vr(i, t, e) : typeof t == "string" && t in F ? Vr(i, F[t], e) : t && t instanceof L ? Vr(i, Ph(t), e) : (t == null ? void 0 : t.type) && t.type instanceof L ? Vr(i, Ph(t.type), e) : Vr(i, F.NONE, e)
    }

    function Vr(i, t, e = !0) {
      let r = null;
      switch (t) {
        case F.Null:
          r = i.visitNull;
          break;
        case F.Bool:
          r = i.visitBool;
          break;
        case F.Int:
          r = i.visitInt;
          break;
        case F.Int8:
          r = i.visitInt8 || i.visitInt;
          break;
        case F.Int16:
          r = i.visitInt16 || i.visitInt;
          break;
        case F.Int32:
          r = i.visitInt32 || i.visitInt;
          break;
        case F.Int64:
          r = i.visitInt64 || i.visitInt;
          break;
        case F.Uint8:
          r = i.visitUint8 || i.visitInt;
          break;
        case F.Uint16:
          r = i.visitUint16 || i.visitInt;
          break;
        case F.Uint32:
          r = i.visitUint32 || i.visitInt;
          break;
        case F.Uint64:
          r = i.visitUint64 || i.visitInt;
          break;
        case F.Float:
          r = i.visitFloat;
          break;
        case F.Float16:
          r = i.visitFloat16 || i.visitFloat;
          break;
        case F.Float32:
          r = i.visitFloat32 || i.visitFloat;
          break;
        case F.Float64:
          r = i.visitFloat64 || i.visitFloat;
          break;
        case F.Utf8:
          r = i.visitUtf8;
          break;
        case F.Binary:
          r = i.visitBinary;
          break;
        case F.FixedSizeBinary:
          r = i.visitFixedSizeBinary;
          break;
        case F.Date:
          r = i.visitDate;
          break;
        case F.DateDay:
          r = i.visitDateDay || i.visitDate;
          break;
        case F.DateMillisecond:
          r = i.visitDateMillisecond || i.visitDate;
          break;
        case F.Timestamp:
          r = i.visitTimestamp;
          break;
        case F.TimestampSecond:
          r = i.visitTimestampSecond || i.visitTimestamp;
          break;
        case F.TimestampMillisecond:
          r = i.visitTimestampMillisecond || i.visitTimestamp;
          break;
        case F.TimestampMicrosecond:
          r = i.visitTimestampMicrosecond || i.visitTimestamp;
          break;
        case F.TimestampNanosecond:
          r = i.visitTimestampNanosecond || i.visitTimestamp;
          break;
        case F.Time:
          r = i.visitTime;
          break;
        case F.TimeSecond:
          r = i.visitTimeSecond || i.visitTime;
          break;
        case F.TimeMillisecond:
          r = i.visitTimeMillisecond || i.visitTime;
          break;
        case F.TimeMicrosecond:
          r = i.visitTimeMicrosecond || i.visitTime;
          break;
        case F.TimeNanosecond:
          r = i.visitTimeNanosecond || i.visitTime;
          break;
        case F.Decimal:
          r = i.visitDecimal;
          break;
        case F.List:
          r = i.visitList;
          break;
        case F.Struct:
          r = i.visitStruct;
          break;
        case F.Union:
          r = i.visitUnion;
          break;
        case F.DenseUnion:
          r = i.visitDenseUnion || i.visitUnion;
          break;
        case F.SparseUnion:
          r = i.visitSparseUnion || i.visitUnion;
          break;
        case F.Dictionary:
          r = i.visitDictionary;
          break;
        case F.Interval:
          r = i.visitInterval;
          break;
        case F.IntervalDayTime:
          r = i.visitIntervalDayTime || i.visitInterval;
          break;
        case F.IntervalYearMonth:
          r = i.visitIntervalYearMonth || i.visitInterval;
          break;
        case F.FixedSizeList:
          r = i.visitFixedSizeList;
          break;
        case F.Map:
          r = i.visitMap;
          break
      }
      if (typeof r == "function") return r;
      if (!e) return () => null;
      throw new Error(`Unrecognized type '${F[t]}'`)
    }

    function Ph(i) {
      switch (i.typeId) {
        case F.Null:
          return F.Null;
        case F.Int: {
          let {bitWidth: t, isSigned: e} = i;
          switch (t) {
            case 8:
              return e ? F.Int8 : F.Uint8;
            case 16:
              return e ? F.Int16 : F.Uint16;
            case 32:
              return e ? F.Int32 : F.Uint32;
            case 64:
              return e ? F.Int64 : F.Uint64
          }
          return F.Int
        }
        case F.Float:
          switch (i.precision) {
            case xt.HALF:
              return F.Float16;
            case xt.SINGLE:
              return F.Float32;
            case xt.DOUBLE:
              return F.Float64
          }
          return F.Float;
        case F.Binary:
          return F.Binary;
        case F.Utf8:
          return F.Utf8;
        case F.Bool:
          return F.Bool;
        case F.Decimal:
          return F.Decimal;
        case F.Time:
          switch (i.unit) {
            case st.SECOND:
              return F.TimeSecond;
            case st.MILLISECOND:
              return F.TimeMillisecond;
            case st.MICROSECOND:
              return F.TimeMicrosecond;
            case st.NANOSECOND:
              return F.TimeNanosecond
          }
          return F.Time;
        case F.Timestamp:
          switch (i.unit) {
            case st.SECOND:
              return F.TimestampSecond;
            case st.MILLISECOND:
              return F.TimestampMillisecond;
            case st.MICROSECOND:
              return F.TimestampMicrosecond;
            case st.NANOSECOND:
              return F.TimestampNanosecond
          }
          return F.Timestamp;
        case F.Date:
          switch (i.unit) {
            case ee.DAY:
              return F.DateDay;
            case ee.MILLISECOND:
              return F.DateMillisecond
          }
          return F.Date;
        case F.Interval:
          switch (i.unit) {
            case he.DAY_TIME:
              return F.IntervalDayTime;
            case he.YEAR_MONTH:
              return F.IntervalYearMonth
          }
          return F.Interval;
        case F.Map:
          return F.Map;
        case F.List:
          return F.List;
        case F.Struct:
          return F.Struct;
        case F.Union:
          switch (i.mode) {
            case Dt.Dense:
              return F.DenseUnion;
            case Dt.Sparse:
              return F.SparseUnion
          }
          return F.Union;
        case F.FixedSizeBinary:
          return F.FixedSizeBinary;
        case F.FixedSizeList:
          return F.FixedSizeList;
        case F.Dictionary:
          return F.Dictionary
      }
      throw new Error(`Unrecognized type '${F[i.typeId]}'`)
    }

    H.prototype.visitInt8 = null;
    H.prototype.visitInt16 = null;
    H.prototype.visitInt32 = null;
    H.prototype.visitInt64 = null;
    H.prototype.visitUint8 = null;
    H.prototype.visitUint16 = null;
    H.prototype.visitUint32 = null;
    H.prototype.visitUint64 = null;
    H.prototype.visitFloat16 = null;
    H.prototype.visitFloat32 = null;
    H.prototype.visitFloat64 = null;
    H.prototype.visitDateDay = null;
    H.prototype.visitDateMillisecond = null;
    H.prototype.visitTimestampSecond = null;
    H.prototype.visitTimestampMillisecond = null;
    H.prototype.visitTimestampMicrosecond = null;
    H.prototype.visitTimestampNanosecond = null;
    H.prototype.visitTimeSecond = null;
    H.prototype.visitTimeMillisecond = null;
    H.prototype.visitTimeMicrosecond = null;
    H.prototype.visitTimeNanosecond = null;
    H.prototype.visitDenseUnion = null;
    H.prototype.visitSparseUnion = null;
    H.prototype.visitIntervalDayTime = null;
    H.prototype.visitIntervalYearMonth = null;
    var Fa = {};
    vr(Fa, {float64ToUint16: () => Sn, uint16ToFloat64: () => Ys});
    var Hh = new Float64Array(1), zr = new Uint32Array(Hh.buffer);

    function Ys(i) {
      let t = (i & 31744) >> 10, e = (i & 1023) / 1024, r = Math.pow(-1, (i & 32768) >> 15);
      switch (t) {
        case 31:
          return r * (e ? Number.NaN : 1 / 0);
        case 0:
          return r * (e ? 6103515625e-14 * e : 0)
      }
      return r * Math.pow(2, t - 15) * (1 + e)
    }

    function Sn(i) {
      if (i !== i) return 32256;
      Hh[0] = i;
      let t = (zr[1] & 2147483648) >> 16 & 65535, e = zr[1] & 2146435072, r = 0;
      return e >= 1089470464 ? zr[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, r = (zr[1] & 1048575) >> 10) : e <= 1056964608 ? (r = 1048576 + (zr[1] & 1048575), r = 1048576 + (r << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, r = (zr[1] & 1048575) + 512 >> 10), t | e | r & 65535
    }

    var X = class extends H {
    };

    function et(i) {
      return (t, e, r) => {
        if (t.setValid(e, r != null)) return i(t, e, r)
      }
    }

    var $j = (i, t, e) => {
          i[t] = Math.trunc(e / 864e5)
        }, Aa = (i, t, e) => {
          i[t] = Math.trunc(e % 4294967296), i[t + 1] = Math.trunc(e / 4294967296)
        }, Yj = (i, t, e) => {
          i[t] = Math.trunc(e * 1e3 % 4294967296), i[t + 1] = Math.trunc(e * 1e3 / 4294967296)
        }, Xj = (i, t, e) => {
          i[t] = Math.trunc(e * 1e6 % 4294967296), i[t + 1] = Math.trunc(e * 1e6 / 4294967296)
        }, Vh = (i, t, e, r) => {
          if (e + 1 < t.length) {
            let {[e]: n, [e + 1]: o} = t;
            i.set(r.subarray(0, o - n), n)
          }
        }, Gj = ({offset: i, values: t}, e, r) => {
          let n = i + e;
          r ? t[n >> 3] |= 1 << n % 8 : t[n >> 3] &= ~(1 << n % 8)
        }, Hi = ({values: i}, t, e) => {
          i[t] = e
        }, xa = ({values: i}, t, e) => {
          i[t] = e
        }, zh = ({values: i}, t, e) => {
          i[t] = Sn(e)
        }, Kj = (i, t, e) => {
          switch (i.type.precision) {
            case xt.HALF:
              return zh(i, t, e);
            case xt.SINGLE:
            case xt.DOUBLE:
              return xa(i, t, e)
          }
        }, Xs = ({values: i}, t, e) => {
          $j(i, t, e.valueOf())
        }, Gs = ({values: i}, t, e) => {
          Aa(i, t * 2, e.valueOf())
        }, Ba = ({stride: i, values: t}, e, r) => {
          t.set(r.subarray(0, i), i * e)
        }, Jj = ({values: i, valueOffsets: t}, e, r) => Vh(i, t, e, r), qj = ({values: i, valueOffsets: t}, e, r) => {
          Vh(i, t, e, tr(r))
        }, Ta = (i, t, e) => {
          i.type.unit === ee.DAY ? Xs(i, t, e) : Gs(i, t, e)
        }, Ks = ({values: i}, t, e) => Aa(i, t * 2, e / 1e3), Js = ({values: i}, t, e) => Aa(i, t * 2, e),
        qs = ({values: i}, t, e) => Yj(i, t * 2, e), Zs = ({values: i}, t, e) => Xj(i, t * 2, e), Da = (i, t, e) => {
          switch (i.type.unit) {
            case st.SECOND:
              return Ks(i, t, e);
            case st.MILLISECOND:
              return Js(i, t, e);
            case st.MICROSECOND:
              return qs(i, t, e);
            case st.NANOSECOND:
              return Zs(i, t, e)
          }
        }, Qs = ({values: i}, t, e) => {
          i[t] = e
        }, to = ({values: i}, t, e) => {
          i[t] = e
        }, eo = ({values: i}, t, e) => {
          i[t] = e
        }, io = ({values: i}, t, e) => {
          i[t] = e
        }, Ea = (i, t, e) => {
          switch (i.type.unit) {
            case st.SECOND:
              return Qs(i, t, e);
            case st.MILLISECOND:
              return to(i, t, e);
            case st.MICROSECOND:
              return eo(i, t, e);
            case st.NANOSECOND:
              return io(i, t, e)
          }
        }, ka = ({values: i, stride: t}, e, r) => {
          i.set(r.subarray(0, t), t * e)
        }, Zj = (i, t, e) => {
          let r = i.children[0], n = i.valueOffsets, o = ie.getVisitFn(r);
          if (Array.isArray(e)) for (let d = -1, p = n[t], m = n[t + 1]; p < m;) o(r, p++, e[++d]); else for (let d = -1, p = n[t], m = n[t + 1]; p < m;) o(r, p++, e.get(++d))
        }, Qj = (i, t, e) => {
          let r = i.children[0], {valueOffsets: n} = i, o = ie.getVisitFn(r), {[t]: d, [t + 1]: p} = n,
              m = e instanceof Map ? e.entries() : Object.entries(e);
          for (let I of m) if (o(r, d, I), ++d >= p) break
        }, tS = (i, t) => (e, r, n, o) => r && e(r, i, t[o]), eS = (i, t) => (e, r, n, o) => r && e(r, i, t.get(o)),
        iS = (i, t) => (e, r, n, o) => r && e(r, i, t.get(n.name)),
        rS = (i, t) => (e, r, n, o) => r && e(r, i, t[n.name]), nS = (i, t, e) => {
          let r = i.type.children.map(o => ie.getVisitFn(o.type)),
              n = e instanceof Map ? iS(t, e) : e instanceof G ? eS(t, e) : Array.isArray(e) ? tS(t, e) : rS(t, e);
          i.type.children.forEach((o, d) => n(r[d], i.children[d], o, d))
        }, sS = (i, t, e) => {
          i.type.mode === Dt.Dense ? Wh(i, t, e) : $h(i, t, e)
        }, Wh = (i, t, e) => {
          let r = i.type.typeIdToChildIndex[i.typeIds[t]], n = i.children[r];
          ie.visit(n, i.valueOffsets[t], e)
        }, $h = (i, t, e) => {
          let r = i.type.typeIdToChildIndex[i.typeIds[t]], n = i.children[r];
          ie.visit(n, t, e)
        }, oS = (i, t, e) => {
          var r;
          (r = i.dictionary) === null || r === void 0 || r.set(i.values[t], e)
        }, Oa = (i, t, e) => {
          i.type.unit === he.DAY_TIME ? ro(i, t, e) : no(i, t, e)
        }, ro = ({values: i}, t, e) => {
          i.set(e.subarray(0, 2), 2 * t)
        }, no = ({values: i}, t, e) => {
          i[t] = e[0] * 12 + e[1] % 12
        }, aS = (i, t, e) => {
          let {stride: r} = i, n = i.children[0], o = ie.getVisitFn(n);
          if (Array.isArray(e)) for (let d = -1, p = t * r; ++d < r;) o(n, p + d, e[d]); else for (let d = -1, p = t * r; ++d < r;) o(n, p + d, e.get(d))
        };
    X.prototype.visitBool = et(Gj);
    X.prototype.visitInt = et(Hi);
    X.prototype.visitInt8 = et(Hi);
    X.prototype.visitInt16 = et(Hi);
    X.prototype.visitInt32 = et(Hi);
    X.prototype.visitInt64 = et(Hi);
    X.prototype.visitUint8 = et(Hi);
    X.prototype.visitUint16 = et(Hi);
    X.prototype.visitUint32 = et(Hi);
    X.prototype.visitUint64 = et(Hi);
    X.prototype.visitFloat = et(Kj);
    X.prototype.visitFloat16 = et(zh);
    X.prototype.visitFloat32 = et(xa);
    X.prototype.visitFloat64 = et(xa);
    X.prototype.visitUtf8 = et(qj);
    X.prototype.visitBinary = et(Jj);
    X.prototype.visitFixedSizeBinary = et(Ba);
    X.prototype.visitDate = et(Ta);
    X.prototype.visitDateDay = et(Xs);
    X.prototype.visitDateMillisecond = et(Gs);
    X.prototype.visitTimestamp = et(Da);
    X.prototype.visitTimestampSecond = et(Ks);
    X.prototype.visitTimestampMillisecond = et(Js);
    X.prototype.visitTimestampMicrosecond = et(qs);
    X.prototype.visitTimestampNanosecond = et(Zs);
    X.prototype.visitTime = et(Ea);
    X.prototype.visitTimeSecond = et(Qs);
    X.prototype.visitTimeMillisecond = et(to);
    X.prototype.visitTimeMicrosecond = et(eo);
    X.prototype.visitTimeNanosecond = et(io);
    X.prototype.visitDecimal = et(ka);
    X.prototype.visitList = et(Zj);
    X.prototype.visitStruct = et(nS);
    X.prototype.visitUnion = et(sS);
    X.prototype.visitDenseUnion = et(Wh);
    X.prototype.visitSparseUnion = et($h);
    X.prototype.visitDictionary = et(oS);
    X.prototype.visitInterval = et(Oa);
    X.prototype.visitIntervalDayTime = et(ro);
    X.prototype.visitIntervalYearMonth = et(no);
    X.prototype.visitFixedSizeList = et(aS);
    X.prototype.visitMap = et(Qj);
    var ie = new X;
    var oi = Symbol.for("parent"), Wr = Symbol.for("rowIndex"), ir = class {
      constructor(t, e) {
        return this[oi] = t, this[Wr] = e, new Proxy(this, new Ma)
      }

      toArray() {
        return Object.values(this.toJSON())
      }

      toJSON() {
        let t = this[Wr], e = this[oi], r = e.type.children, n = {};
        for (let o = -1, d = r.length; ++o < d;) n[r[o].name] = Nt.visit(e.children[o], t);
        return n
      }

      toString() {
        return `{${[...this].map(([t, e]) => `${Qe(t)}: ${Qe(e)}`).join(", ")}}`
      }

      [Symbol.for("nodejs.util.inspect.custom")]() {
        return this.toString()
      }

      [Symbol.iterator]() {
        return new Ra(this[oi], this[Wr])
      }
    }, Ra = class {
      constructor(t, e) {
        this.childIndex = 0, this.children = t.children, this.rowIndex = e, this.childFields = t.type.children, this.numChildren = this.childFields.length
      }

      [Symbol.iterator]() {
        return this
      }

      next() {
        let t = this.childIndex;
        return t < this.numChildren ? (this.childIndex = t + 1, {
          done: !1,
          value: [this.childFields[t].name, Nt.visit(this.children[t], this.rowIndex)]
        }) : {done: !0, value: null}
      }
    };
    Object.defineProperties(ir.prototype, {
      [Symbol.toStringTag]: {enumerable: !1, configurable: !1, value: "Row"},
      [oi]: {writable: !0, enumerable: !1, configurable: !1, value: null},
      [Wr]: {writable: !0, enumerable: !1, configurable: !1, value: -1}
    });
    var Ma = class {
      isExtensible() {
        return !1
      }

      deleteProperty() {
        return !1
      }

      preventExtensions() {
        return !0
      }

      ownKeys(t) {
        return t[oi].type.children.map(e => e.name)
      }

      has(t, e) {
        return t[oi].type.children.findIndex(r => r.name === e) !== -1
      }

      getOwnPropertyDescriptor(t, e) {
        if (t[oi].type.children.findIndex(r => r.name === e) !== -1) return {
          writable: !0,
          enumerable: !0,
          configurable: !0
        }
      }

      get(t, e) {
        if (Reflect.has(t, e)) return t[e];
        let r = t[oi].type.children.findIndex(n => n.name === e);
        if (r !== -1) {
          let n = Nt.visit(t[oi].children[r], t[Wr]);
          return Reflect.set(t, e, n), n
        }
      }

      set(t, e, r) {
        let n = t[oi].type.children.findIndex(o => o.name === e);
        return n !== -1 ? (ie.visit(t[oi].children[n], t[Wr], r), Reflect.set(t, e, r)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, r) : !1
      }
    };
    var V = class extends H {
    };

    function q(i) {
      return (t, e) => t.getValid(e) ? i(t, e) : null
    }

    var lS = (i, t) => 864e5 * i[t], Ua = (i, t) => 4294967296 * i[t + 1] + (i[t] >>> 0),
        cS = (i, t) => 4294967296 * (i[t + 1] / 1e3) + (i[t] >>> 0) / 1e3,
        uS = (i, t) => 4294967296 * (i[t + 1] / 1e6) + (i[t] >>> 0) / 1e6, Yh = i => new Date(i),
        dS = (i, t) => Yh(lS(i, t)), fS = (i, t) => Yh(Ua(i, t)), hS = (i, t) => null, Xh = (i, t, e) => {
          if (e + 1 >= t.length) return null;
          let r = t[e], n = t[e + 1];
          return i.subarray(r, n)
        }, pS = ({offset: i, values: t}, e) => {
          let r = i + e;
          return (t[r >> 3] & 1 << r % 8) !== 0
        }, Gh = ({values: i}, t) => dS(i, t), Kh = ({values: i}, t) => fS(i, t * 2),
        rr = ({stride: i, values: t}, e) => t[i * e], yS = ({stride: i, values: t}, e) => Ys(t[i * e]),
        Jh = ({values: i}, t) => i[t], _S = ({stride: i, values: t}, e) => t.subarray(i * e, i * (e + 1)),
        mS = ({values: i, valueOffsets: t}, e) => Xh(i, t, e), bS = ({values: i, valueOffsets: t}, e) => {
          let r = Xh(i, t, e);
          return r !== null ? vn(r) : null
        }, vS = ({values: i}, t) => i[t], gS = ({type: i, values: t}, e) => i.precision !== xt.HALF ? t[e] : Ys(t[e]),
        wS = (i, t) => i.type.unit === ee.DAY ? Gh(i, t) : Kh(i, t), qh = ({values: i}, t) => 1e3 * Ua(i, t * 2),
        Zh = ({values: i}, t) => Ua(i, t * 2), Qh = ({values: i}, t) => cS(i, t * 2),
        tp = ({values: i}, t) => uS(i, t * 2), jS = (i, t) => {
          switch (i.type.unit) {
            case st.SECOND:
              return qh(i, t);
            case st.MILLISECOND:
              return Zh(i, t);
            case st.MICROSECOND:
              return Qh(i, t);
            case st.NANOSECOND:
              return tp(i, t)
          }
        }, ep = ({values: i}, t) => i[t], ip = ({values: i}, t) => i[t], rp = ({values: i}, t) => i[t],
        np = ({values: i}, t) => i[t], SS = (i, t) => {
          switch (i.type.unit) {
            case st.SECOND:
              return ep(i, t);
            case st.MILLISECOND:
              return ip(i, t);
            case st.MICROSECOND:
              return rp(i, t);
            case st.NANOSECOND:
              return np(i, t)
          }
        }, IS = ({values: i, stride: t}, e) => wr.decimal(i.subarray(t * e, t * (e + 1))), CS = (i, t) => {
          let {valueOffsets: e, stride: r, children: n} = i, {[t * r]: o, [t * r + 1]: d} = e, m = n[0].slice(o, d - o);
          return new G([m])
        }, FS = (i, t) => {
          let {valueOffsets: e, children: r} = i, {[t]: n, [t + 1]: o} = e, d = r[0];
          return new _i(d.slice(n, o - n))
        }, AS = (i, t) => new ir(i, t), xS = (i, t) => i.type.mode === Dt.Dense ? sp(i, t) : op(i, t), sp = (i, t) => {
          let e = i.type.typeIdToChildIndex[i.typeIds[t]], r = i.children[e];
          return Nt.visit(r, i.valueOffsets[t])
        }, op = (i, t) => {
          let e = i.type.typeIdToChildIndex[i.typeIds[t]], r = i.children[e];
          return Nt.visit(r, t)
        }, BS = (i, t) => {
          var e;
          return (e = i.dictionary) === null || e === void 0 ? void 0 : e.get(i.values[t])
        }, TS = (i, t) => i.type.unit === he.DAY_TIME ? ap(i, t) : lp(i, t),
        ap = ({values: i}, t) => i.subarray(2 * t, 2 * (t + 1)), lp = ({values: i}, t) => {
          let e = i[t], r = new Int32Array(2);
          return r[0] = Math.trunc(e / 12), r[1] = Math.trunc(e % 12), r
        }, DS = (i, t) => {
          let {stride: e, children: r} = i, o = r[0].slice(t * e, e);
          return new G([o])
        };
    V.prototype.visitNull = q(hS);
    V.prototype.visitBool = q(pS);
    V.prototype.visitInt = q(vS);
    V.prototype.visitInt8 = q(rr);
    V.prototype.visitInt16 = q(rr);
    V.prototype.visitInt32 = q(rr);
    V.prototype.visitInt64 = q(Jh);
    V.prototype.visitUint8 = q(rr);
    V.prototype.visitUint16 = q(rr);
    V.prototype.visitUint32 = q(rr);
    V.prototype.visitUint64 = q(Jh);
    V.prototype.visitFloat = q(gS);
    V.prototype.visitFloat16 = q(yS);
    V.prototype.visitFloat32 = q(rr);
    V.prototype.visitFloat64 = q(rr);
    V.prototype.visitUtf8 = q(bS);
    V.prototype.visitBinary = q(mS);
    V.prototype.visitFixedSizeBinary = q(_S);
    V.prototype.visitDate = q(wS);
    V.prototype.visitDateDay = q(Gh);
    V.prototype.visitDateMillisecond = q(Kh);
    V.prototype.visitTimestamp = q(jS);
    V.prototype.visitTimestampSecond = q(qh);
    V.prototype.visitTimestampMillisecond = q(Zh);
    V.prototype.visitTimestampMicrosecond = q(Qh);
    V.prototype.visitTimestampNanosecond = q(tp);
    V.prototype.visitTime = q(SS);
    V.prototype.visitTimeSecond = q(ep);
    V.prototype.visitTimeMillisecond = q(ip);
    V.prototype.visitTimeMicrosecond = q(rp);
    V.prototype.visitTimeNanosecond = q(np);
    V.prototype.visitDecimal = q(IS);
    V.prototype.visitList = q(CS);
    V.prototype.visitStruct = q(AS);
    V.prototype.visitUnion = q(xS);
    V.prototype.visitDenseUnion = q(sp);
    V.prototype.visitSparseUnion = q(op);
    V.prototype.visitDictionary = q(BS);
    V.prototype.visitInterval = q(TS);
    V.prototype.visitIntervalDayTime = q(ap);
    V.prototype.visitIntervalYearMonth = q(lp);
    V.prototype.visitFixedSizeList = q(DS);
    V.prototype.visitMap = q(FS);
    var Nt = new V;
    var We = Symbol.for("keys"), $r = Symbol.for("vals"), _i = class {
      constructor(t) {
        return this[We] = new G([t.children[0]]).memoize(), this[$r] = t.children[1], new Proxy(this, new Na)
      }

      [Symbol.iterator]() {
        return new La(this[We], this[$r])
      }

      get size() {
        return this[We].length
      }

      toArray() {
        return Object.values(this.toJSON())
      }

      toJSON() {
        let t = this[We], e = this[$r], r = {};
        for (let n = -1, o = t.length; ++n < o;) r[t.get(n)] = Nt.visit(e, n);
        return r
      }

      toString() {
        return `{${[...this].map(([t, e]) => `${Qe(t)}: ${Qe(e)}`).join(", ")}}`
      }

      [Symbol.for("nodejs.util.inspect.custom")]() {
        return this.toString()
      }
    }, La = class {
      constructor(t, e) {
        this.keys = t, this.vals = e, this.keyIndex = 0, this.numKeys = t.length
      }

      [Symbol.iterator]() {
        return this
      }

      next() {
        let t = this.keyIndex;
        return t === this.numKeys ? {done: !0, value: null} : (this.keyIndex++, {
          done: !1,
          value: [this.keys.get(t), Nt.visit(this.vals, t)]
        })
      }
    }, Na = class {
      isExtensible() {
        return !1
      }

      deleteProperty() {
        return !1
      }

      preventExtensions() {
        return !0
      }

      ownKeys(t) {
        return t[We].toArray().map(String)
      }

      has(t, e) {
        return t[We].includes(e)
      }

      getOwnPropertyDescriptor(t, e) {
        if (t[We].indexOf(e) !== -1) return {writable: !0, enumerable: !0, configurable: !0}
      }

      get(t, e) {
        if (Reflect.has(t, e)) return t[e];
        let r = t[We].indexOf(e);
        if (r !== -1) {
          let n = Nt.visit(Reflect.get(t, $r), r);
          return Reflect.set(t, e, n), n
        }
      }

      set(t, e, r) {
        let n = t[We].indexOf(e);
        return n !== -1 ? (ie.visit(Reflect.get(t, $r), n, r), Reflect.set(t, e, r)) : Reflect.has(t, e) ? Reflect.set(t, e, r) : !1
      }
    };
    Object.defineProperties(_i.prototype, {
      [Symbol.toStringTag]: {enumerable: !1, configurable: !1, value: "Row"},
      [We]: {writable: !0, enumerable: !1, configurable: !1, value: null},
      [$r]: {writable: !0, enumerable: !1, configurable: !1, value: null}
    });

    function ES(i, t, e) {
      let r = i.length, n = t > -1 ? t : r + t % r;
      return e ? e(i, n) : n
    }

    var cp;

    function In(i, t, e, r) {
      let {length: n = 0} = i, o = typeof t != "number" ? 0 : t, d = typeof e != "number" ? n : e;
      return o < 0 && (o = (o % n + n) % n), d < 0 && (d = (d % n + n) % n), d < o && (cp = o, o = d, d = cp), d > n && (d = n), r ? r(i, o, d) : [o, d]
    }

    var up = i => i !== i;

    function nr(i) {
      if (typeof i !== "object" || i === null) return up(i) ? up : e => e === i;
      if (i instanceof Date) {
        let e = i.valueOf();
        return r => r instanceof Date ? r.valueOf() === e : !1
      }
      return ArrayBuffer.isView(i) ? e => e ? ga(i, e) : !1 : i instanceof Map ? OS(i) : Array.isArray(i) ? kS(i) : i instanceof G ? RS(i) : MS(i, !0)
    }

    function kS(i) {
      let t = [];
      for (let e = -1, r = i.length; ++e < r;) t[e] = nr(i[e]);
      return so(t)
    }

    function OS(i) {
      let t = -1, e = [];
      for (let r of i.values()) e[++t] = nr(r);
      return so(e)
    }

    function RS(i) {
      let t = [];
      for (let e = -1, r = i.length; ++e < r;) t[e] = nr(i.get(e));
      return so(t)
    }

    function MS(i, t = !1) {
      let e = Object.keys(i);
      if (!t && e.length === 0) return () => !1;
      let r = [];
      for (let n = -1, o = e.length; ++n < o;) r[n] = nr(i[e[n]]);
      return so(r, e)
    }

    function so(i, t) {
      return e => {
        if (!e || typeof e != "object") return !1;
        switch (e.constructor) {
          case Array:
            return US(i, e);
          case Map:
            return dp(i, e, e.keys());
          case _i:
          case ir:
          case Object:
          case void 0:
            return dp(i, e, t || Object.keys(e))
        }
        return e instanceof G ? LS(i, e) : !1
      }
    }

    function US(i, t) {
      let e = i.length;
      if (t.length !== e) return !1;
      for (let r = -1; ++r < e;) if (!i[r](t[r])) return !1;
      return !0
    }

    function LS(i, t) {
      let e = i.length;
      if (t.length !== e) return !1;
      for (let r = -1; ++r < e;) if (!i[r](t.get(r))) return !1;
      return !0
    }

    function dp(i, t, e) {
      let r = e[Symbol.iterator](), n = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](),
          o = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator](), d = 0, p = i.length, m = o.next(),
          I = r.next(), A = n.next();
      for (; d < p && !I.done && !A.done && !m.done && !(I.value !== A.value || !i[d](m.value)); ++d, I = r.next(), A = n.next(), m = o.next()) ;
      return d === p && I.done && A.done && m.done ? !0 : (r.return && r.return(), n.return && n.return(), o.return && o.return(), !1)
    }

    var Ha = {};
    vr(Ha, {
      BitIterator: () => jr,
      getBit: () => fp,
      getBool: () => ao,
      packBools: () => Sr,
      popcnt_array: () => hp,
      popcnt_bit_range: () => Cn,
      popcnt_uint32: () => oo,
      setBool: () => NS,
      truncateBitmap: () => Yr
    });

    function ao(i, t, e, r) {
      return (e & 1 << r) !== 0
    }

    function fp(i, t, e, r) {
      return (e & 1 << r) >> r
    }

    function NS(i, t, e) {
      return e ? !!(i[t >> 3] |= 1 << t % 8) || !0 : !(i[t >> 3] &= ~(1 << t % 8)) && !1
    }

    function Yr(i, t, e) {
      let r = e.byteLength + 7 & -8;
      if (i > 0 || e.byteLength < r) {
        let n = new Uint8Array(r);
        return n.set(i % 8 === 0 ? e.subarray(i >> 3) : Sr(new jr(e, i, t, null, ao)).subarray(0, r)), n
      }
      return e
    }

    function Sr(i) {
      let t = [], e = 0, r = 0, n = 0;
      for (let d of i) d && (n |= 1 << r), ++r === 8 && (t[e++] = n, n = r = 0);
      (e === 0 || r > 0) && (t[e++] = n);
      let o = new Uint8Array(t.length + 7 & -8);
      return o.set(t), o
    }

    var jr = class {
      constructor(t, e, r, n, o) {
        this.bytes = t, this.length = r, this.context = n, this.get = o, this.bit = e % 8, this.byteIndex = e >> 3, this.byte = t[this.byteIndex++], this.index = 0
      }

      next() {
        return this.index < this.length ? (this.bit === 8 && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), {value: this.get(this.context, this.index++, this.byte, this.bit++)}) : {
          done: !0,
          value: null
        }
      }

      [Symbol.iterator]() {
        return this
      }
    };

    function Cn(i, t, e) {
      if (e - t <= 0) return 0;
      if (e - t < 8) {
        let o = 0;
        for (let d of new jr(i, t, e - t, i, fp)) o += d;
        return o
      }
      let r = e >> 3 << 3, n = t + (t % 8 === 0 ? 0 : 8 - t % 8);
      return Cn(i, t, n) + Cn(i, r, e) + hp(i, n >> 3, r - n >> 3)
    }

    function hp(i, t, e) {
      let r = 0, n = Math.trunc(t), o = new DataView(i.buffer, i.byteOffset, i.byteLength),
          d = e === void 0 ? i.byteLength : n + e;
      for (; d - n >= 4;) r += oo(o.getUint32(n)), n += 4;
      for (; d - n >= 2;) r += oo(o.getUint16(n)), n += 2;
      for (; d - n >= 1;) r += oo(o.getUint8(n)), n += 1;
      return r
    }

    function oo(i) {
      let t = Math.trunc(i);
      return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24
    }

    var PS = -1, yt = class {
      constructor(t, e, r, n, o, d = [], p) {
        this.type = t, this.children = d, this.dictionary = p, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(r || 0, 0)), this._nullCount = Math.floor(Math.max(n || 0, -1));
        let m;
        o instanceof yt ? (this.stride = o.stride, this.values = o.values, this.typeIds = o.typeIds, this.nullBitmap = o.nullBitmap, this.valueOffsets = o.valueOffsets) : (this.stride = ke(t), o && ((m = o[0]) && (this.valueOffsets = m), (m = o[1]) && (this.values = m), (m = o[2]) && (this.nullBitmap = m), (m = o[3]) && (this.typeIds = m))), this.nullable = this._nullCount !== 0 && this.nullBitmap && this.nullBitmap.byteLength > 0
      }

      get typeId() {
        return this.type.typeId
      }

      get ArrayType() {
        return this.type.ArrayType
      }

      get buffers() {
        return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds]
      }

      get byteLength() {
        let t = 0, {valueOffsets: e, values: r, nullBitmap: n, typeIds: o} = this;
        return e && (t += e.byteLength), r && (t += r.byteLength), n && (t += n.byteLength), o && (t += o.byteLength), this.children.reduce((d, p) => d + p.byteLength, t)
      }

      get nullCount() {
        let t = this._nullCount, e;
        return t <= PS && (e = this.nullBitmap) && (this._nullCount = t = this.length - Cn(e, this.offset, this.offset + this.length)), t
      }

      getValid(t) {
        if (this.nullable && this.nullCount > 0) {
          let e = this.offset + t;
          return (this.nullBitmap[e >> 3] & 1 << e % 8) !== 0
        }
        return !0
      }

      setValid(t, e) {
        if (!this.nullable) return e;
        if (!this.nullBitmap || this.nullBitmap.byteLength <= t >> 3) {
          let {nullBitmap: m} = this._changeLengthAndBackfillNullBitmap(this.length);
          Object.assign(this, {nullBitmap: m, _nullCount: 0})
        }
        let {nullBitmap: r, offset: n} = this, o = n + t >> 3, d = (n + t) % 8, p = r[o] >> d & 1;
        return e ? p === 0 && (r[o] |= 1 << d, this._nullCount = this.nullCount + 1) : p === 1 && (r[o] &= ~(1 << d), this._nullCount = this.nullCount - 1), e
      }

      clone(t = this.type, e = this.offset, r = this.length, n = this._nullCount, o = this, d = this.children) {
        return new yt(t, e, r, n, o, d, this.dictionary)
      }

      slice(t, e) {
        let {stride: r, typeId: n, children: o} = this, d = +(this._nullCount === 0) - 1, p = n === 16 ? r : 1,
            m = this._sliceBuffers(t, e, r, n);
        return this.clone(this.type, this.offset + t, e, d, m, o.length === 0 || this.valueOffsets ? o : this._sliceChildren(o, p * t, p * e))
      }

      _changeLengthAndBackfillNullBitmap(t) {
        if (this.typeId === F.Null) return this.clone(this.type, 0, t, 0);
        let {length: e, nullCount: r} = this, n = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
        n[e >> 3] = (1 << e - (e & -8)) - 1, r > 0 && n.set(Yr(this.offset, e, this.nullBitmap), 0);
        let o = this.buffers;
        return o[ze.VALIDITY] = n, this.clone(this.type, 0, t, r + (t - e), o)
      }

      _sliceBuffers(t, e, r, n) {
        let o, {buffers: d} = this;
        return (o = d[ze.TYPE]) && (d[ze.TYPE] = o.subarray(t, t + e)), (o = d[ze.OFFSET]) && (d[ze.OFFSET] = o.subarray(t, t + e + 1)) || (o = d[ze.DATA]) && (d[ze.DATA] = n === 6 ? o : o.subarray(r * t, r * (t + e))), d
      }

      _sliceChildren(t, e, r) {
        return t.map(n => n.slice(e, r))
      }
    };
    yt.prototype.children = Object.freeze([]);
    var Ir = class extends H {
      visit(t) {
        return this.getVisitFn(t.type).call(this, t)
      }

      visitNull(t) {
        let {["type"]: e, ["offset"]: r = 0, ["length"]: n = 0} = t;
        return new yt(e, r, n, 0)
      }

      visitBool(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.nullBitmap),
            o = rt(e.ArrayType, t.data), {["length"]: d = o.length >> 3, ["nullCount"]: p = t.nullBitmap ? -1 : 0} = t;
        return new yt(e, r, d, p, [void 0, o, n])
      }

      visitInt(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.nullBitmap),
            o = rt(e.ArrayType, t.data), {["length"]: d = o.length, ["nullCount"]: p = t.nullBitmap ? -1 : 0} = t;
        return new yt(e, r, d, p, [void 0, o, n])
      }

      visitFloat(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.nullBitmap),
            o = rt(e.ArrayType, t.data), {["length"]: d = o.length, ["nullCount"]: p = t.nullBitmap ? -1 : 0} = t;
        return new yt(e, r, d, p, [void 0, o, n])
      }

      visitUtf8(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.data), o = Y(t.nullBitmap),
            d = gr(t.valueOffsets), {["length"]: p = d.length - 1, ["nullCount"]: m = t.nullBitmap ? -1 : 0} = t;
        return new yt(e, r, p, m, [d, n, o])
      }

      visitBinary(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.data), o = Y(t.nullBitmap),
            d = gr(t.valueOffsets), {["length"]: p = d.length - 1, ["nullCount"]: m = t.nullBitmap ? -1 : 0} = t;
        return new yt(e, r, p, m, [d, n, o])
      }

      visitFixedSizeBinary(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.nullBitmap), o = rt(e.ArrayType, t.data), {
          ["length"]: d = o.length / ke(e),
          ["nullCount"]: p = t.nullBitmap ? -1 : 0
        } = t;
        return new yt(e, r, d, p, [void 0, o, n])
      }

      visitDate(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.nullBitmap), o = rt(e.ArrayType, t.data), {
          ["length"]: d = o.length / ke(e),
          ["nullCount"]: p = t.nullBitmap ? -1 : 0
        } = t;
        return new yt(e, r, d, p, [void 0, o, n])
      }

      visitTimestamp(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.nullBitmap), o = rt(e.ArrayType, t.data), {
          ["length"]: d = o.length / ke(e),
          ["nullCount"]: p = t.nullBitmap ? -1 : 0
        } = t;
        return new yt(e, r, d, p, [void 0, o, n])
      }

      visitTime(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.nullBitmap), o = rt(e.ArrayType, t.data), {
          ["length"]: d = o.length / ke(e),
          ["nullCount"]: p = t.nullBitmap ? -1 : 0
        } = t;
        return new yt(e, r, d, p, [void 0, o, n])
      }

      visitDecimal(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.nullBitmap), o = rt(e.ArrayType, t.data), {
          ["length"]: d = o.length / ke(e),
          ["nullCount"]: p = t.nullBitmap ? -1 : 0
        } = t;
        return new yt(e, r, d, p, [void 0, o, n])
      }

      visitList(t) {
        let {["type"]: e, ["offset"]: r = 0, ["child"]: n} = t, o = Y(t.nullBitmap),
            d = gr(t.valueOffsets), {["length"]: p = d.length - 1, ["nullCount"]: m = t.nullBitmap ? -1 : 0} = t;
        return new yt(e, r, p, m, [d, void 0, o], [n])
      }

      visitStruct(t) {
        let {["type"]: e, ["offset"]: r = 0, ["children"]: n = []} = t, o = Y(t.nullBitmap), {
          length: d = n.reduce((m, {length: I}) => Math.max(m, I), 0),
          nullCount: p = t.nullBitmap ? -1 : 0
        } = t;
        return new yt(e, r, d, p, [void 0, void 0, o], n)
      }

      visitUnion(t) {
        let {["type"]: e, ["offset"]: r = 0, ["children"]: n = []} = t, o = Y(t.nullBitmap),
            d = rt(e.ArrayType, t.typeIds), {["length"]: p = d.length, ["nullCount"]: m = t.nullBitmap ? -1 : 0} = t;
        if (L.isSparseUnion(e)) return new yt(e, r, p, m, [void 0, void 0, o, d], n);
        let I = gr(t.valueOffsets);
        return new yt(e, r, p, m, [I, void 0, o, d], n)
      }

      visitDictionary(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.nullBitmap),
            o = rt(e.indices.ArrayType, t.data), {["dictionary"]: d = new G([new Ir().visit({type: e.dictionary})])} = t, {
              ["length"]: p = o.length,
              ["nullCount"]: m = t.nullBitmap ? -1 : 0
            } = t;
        return new yt(e, r, p, m, [void 0, o, n], [], d)
      }

      visitInterval(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, n = Y(t.nullBitmap), o = rt(e.ArrayType, t.data), {
          ["length"]: d = o.length / ke(e),
          ["nullCount"]: p = t.nullBitmap ? -1 : 0
        } = t;
        return new yt(e, r, d, p, [void 0, o, n])
      }

      visitFixedSizeList(t) {
        let {["type"]: e, ["offset"]: r = 0, ["child"]: n = new Ir().visit({type: e.valueType})} = t,
            o = Y(t.nullBitmap), {["length"]: d = n.length / ke(e), ["nullCount"]: p = t.nullBitmap ? -1 : 0} = t;
        return new yt(e, r, d, p, [void 0, void 0, o], [n])
      }

      visitMap(t) {
        let {["type"]: e, ["offset"]: r = 0, ["child"]: n = new Ir().visit({type: e.childType})} = t,
            o = Y(t.nullBitmap), d = gr(t.valueOffsets), {
              ["length"]: p = d.length - 1,
              ["nullCount"]: m = t.nullBitmap ? -1 : 0
            } = t;
        return new yt(e, r, p, m, [d, void 0, o], [n])
      }
    };

    function J(i) {
      return new Ir().visit(i)
    }

    var Fn = class {
      constructor(t = 0, e) {
        this.numChunks = t, this.getChunkIterator = e, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0)
      }

      next() {
        for (; this.chunkIndex < this.numChunks;) {
          let t = this.chunkIterator.next();
          if (!t.done) return t;
          ++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex))
        }
        return {done: !0, value: null}
      }

      [Symbol.iterator]() {
        return this
      }
    };

    function lo(i) {
      return i.reduce((t, e) => t + e.nullCount, 0)
    }

    function co(i) {
      return i.reduce((t, e, r) => (t[r + 1] = t[r] + e.length, t), new Uint32Array(i.length + 1))
    }

    function uo(i, t, e, r) {
      let n = [];
      for (let o = -1, d = i.length; ++o < d;) {
        let p = i[o], m = t[o], {length: I} = p;
        if (m >= r) break;
        if (e >= m + I) continue;
        if (m >= e && m + I <= r) {
          n.push(p);
          continue
        }
        let A = Math.max(0, e - m), E = Math.min(r - m, I);
        n.push(p.slice(A, E - A))
      }
      return n.length === 0 && n.push(i[0].slice(0, 0)), n
    }

    function Va(i, t, e, r) {
      let n = 0, o = 0, d = t.length - 1;
      do {
        if (n >= d - 1) return e < t[d] ? r(i, n, e - t[n]) : null;
        o = n + Math.trunc((d - n) * .5), e < t[o] ? d = o : n = o
      } while (n < d)
    }

    function An(i, t) {
      return i.getValid(t)
    }

    function sr(i) {
      function t(e, r, n) {
        return i(e[r], n)
      }

      return function (e) {
        let r = this.data;
        return Va(r, this._offsets, e, t)
      }
    }

    function fo(i) {
      let t;

      function e(r, n, o) {
        return i(r[n], o, t)
      }

      return function (r, n) {
        let o = this.data;
        t = n;
        let d = Va(o, this._offsets, r, e);
        return t = void 0, d
      }
    }

    function ho(i) {
      let t;

      function e(r, n, o) {
        let d = o, p = 0, m = 0;
        for (let I = n - 1, A = r.length; ++I < A;) {
          let E = r[I];
          if (~(p = i(E, t, d))) return m + p;
          d = 0, m += E.length
        }
        return -1
      }

      return function (r, n) {
        t = r;
        let o = this.data, d = typeof n != "number" ? e(o, 0, 0) : Va(o, this._offsets, n, e);
        return t = void 0, d
      }
    }

    var z = class extends H {
    };

    function HS(i, t) {
      return t === null && i.length > 0 ? 0 : -1
    }

    function VS(i, t) {
      let {nullBitmap: e} = i;
      if (!e || i.nullCount <= 0) return -1;
      let r = 0;
      for (let n of new jr(e, i.offset + (t || 0), i.length, e, ao)) {
        if (!n) return r;
        ++r
      }
      return -1
    }

    function nt(i, t, e) {
      if (t === void 0) return -1;
      if (t === null) return VS(i, e);
      let r = Nt.getVisitFn(i), n = nr(t);
      for (let o = (e || 0) - 1, d = i.length; ++o < d;) if (n(r(i, o))) return o;
      return -1
    }

    function pp(i, t, e) {
      let r = Nt.getVisitFn(i), n = nr(t);
      for (let o = (e || 0) - 1, d = i.length; ++o < d;) if (n(r(i, o))) return o;
      return -1
    }

    z.prototype.visitNull = HS;
    z.prototype.visitBool = nt;
    z.prototype.visitInt = nt;
    z.prototype.visitInt8 = nt;
    z.prototype.visitInt16 = nt;
    z.prototype.visitInt32 = nt;
    z.prototype.visitInt64 = nt;
    z.prototype.visitUint8 = nt;
    z.prototype.visitUint16 = nt;
    z.prototype.visitUint32 = nt;
    z.prototype.visitUint64 = nt;
    z.prototype.visitFloat = nt;
    z.prototype.visitFloat16 = nt;
    z.prototype.visitFloat32 = nt;
    z.prototype.visitFloat64 = nt;
    z.prototype.visitUtf8 = nt;
    z.prototype.visitBinary = nt;
    z.prototype.visitFixedSizeBinary = nt;
    z.prototype.visitDate = nt;
    z.prototype.visitDateDay = nt;
    z.prototype.visitDateMillisecond = nt;
    z.prototype.visitTimestamp = nt;
    z.prototype.visitTimestampSecond = nt;
    z.prototype.visitTimestampMillisecond = nt;
    z.prototype.visitTimestampMicrosecond = nt;
    z.prototype.visitTimestampNanosecond = nt;
    z.prototype.visitTime = nt;
    z.prototype.visitTimeSecond = nt;
    z.prototype.visitTimeMillisecond = nt;
    z.prototype.visitTimeMicrosecond = nt;
    z.prototype.visitTimeNanosecond = nt;
    z.prototype.visitDecimal = nt;
    z.prototype.visitList = nt;
    z.prototype.visitStruct = nt;
    z.prototype.visitUnion = nt;
    z.prototype.visitDenseUnion = pp;
    z.prototype.visitSparseUnion = pp;
    z.prototype.visitDictionary = nt;
    z.prototype.visitInterval = nt;
    z.prototype.visitIntervalDayTime = nt;
    z.prototype.visitIntervalYearMonth = nt;
    z.prototype.visitFixedSizeList = nt;
    z.prototype.visitMap = nt;
    var Cr = new z;
    var W = class extends H {
    };

    function Z(i) {
      let {type: t} = i;
      if (i.nullCount === 0 && i.stride === 1 && (t.typeId === F.Timestamp || t instanceof Mt && t.bitWidth !== 64 || t instanceof ei && t.bitWidth !== 64 || t instanceof ve && t.precision !== xt.HALF)) return new Fn(i.data.length, r => {
        let n = i.data[r];
        return n.values.subarray(0, n.length)[Symbol.iterator]()
      });
      let e = 0;
      return new Fn(i.data.length, r => {
        let o = i.data[r].length, d = i.slice(e, e + o);
        return e += o, new za(d)
      })
    }

    var za = class {
      constructor(t) {
        this.vector = t, this.index = 0
      }

      next() {
        return this.index < this.vector.length ? {value: this.vector.get(this.index++)} : {done: !0, value: null}
      }

      [Symbol.iterator]() {
        return this
      }
    };
    W.prototype.visitNull = Z;
    W.prototype.visitBool = Z;
    W.prototype.visitInt = Z;
    W.prototype.visitInt8 = Z;
    W.prototype.visitInt16 = Z;
    W.prototype.visitInt32 = Z;
    W.prototype.visitInt64 = Z;
    W.prototype.visitUint8 = Z;
    W.prototype.visitUint16 = Z;
    W.prototype.visitUint32 = Z;
    W.prototype.visitUint64 = Z;
    W.prototype.visitFloat = Z;
    W.prototype.visitFloat16 = Z;
    W.prototype.visitFloat32 = Z;
    W.prototype.visitFloat64 = Z;
    W.prototype.visitUtf8 = Z;
    W.prototype.visitBinary = Z;
    W.prototype.visitFixedSizeBinary = Z;
    W.prototype.visitDate = Z;
    W.prototype.visitDateDay = Z;
    W.prototype.visitDateMillisecond = Z;
    W.prototype.visitTimestamp = Z;
    W.prototype.visitTimestampSecond = Z;
    W.prototype.visitTimestampMillisecond = Z;
    W.prototype.visitTimestampMicrosecond = Z;
    W.prototype.visitTimestampNanosecond = Z;
    W.prototype.visitTime = Z;
    W.prototype.visitTimeSecond = Z;
    W.prototype.visitTimeMillisecond = Z;
    W.prototype.visitTimeMicrosecond = Z;
    W.prototype.visitTimeNanosecond = Z;
    W.prototype.visitDecimal = Z;
    W.prototype.visitList = Z;
    W.prototype.visitStruct = Z;
    W.prototype.visitUnion = Z;
    W.prototype.visitDenseUnion = Z;
    W.prototype.visitSparseUnion = Z;
    W.prototype.visitDictionary = Z;
    W.prototype.visitInterval = Z;
    W.prototype.visitIntervalDayTime = Z;
    W.prototype.visitIntervalYearMonth = Z;
    W.prototype.visitFixedSizeList = Z;
    W.prototype.visitMap = Z;
    var Xr = new W;
    var zS = (i, t) => i + t, mi = class extends H {
          visitNull(t, e) {
            return 0
          }

          visitInt(t, e) {
            return t.type.bitWidth / 8
          }

          visitFloat(t, e) {
            return t.type.ArrayType.BYTES_PER_ELEMENT
          }

          visitBool(t, e) {
            return 1 / 8
          }

          visitDecimal(t, e) {
            return t.type.bitWidth / 8
          }

          visitDate(t, e) {
            return (t.type.unit + 1) * 4
          }

          visitTime(t, e) {
            return t.type.bitWidth / 8
          }

          visitTimestamp(t, e) {
            return t.type.unit === st.SECOND ? 4 : 8
          }

          visitInterval(t, e) {
            return (t.type.unit + 1) * 4
          }

          visitStruct(t, e) {
            return t.children.reduce((r, n) => r + Oe.visit(n, e), 0)
          }

          visitFixedSizeBinary(t, e) {
            return t.type.byteWidth
          }

          visitMap(t, e) {
            return 8 + t.children.reduce((r, n) => r + Oe.visit(n, e), 0)
          }

          visitDictionary(t, e) {
            var r;
            return t.type.indices.bitWidth / 8 + (((r = t.dictionary) === null || r === void 0 ? void 0 : r.getByteLength(t.values[e])) || 0)
          }
        }, WS = ({valueOffsets: i}, t) => 8 + (i[t + 1] - i[t]), $S = ({valueOffsets: i}, t) => 8 + (i[t + 1] - i[t]),
        YS = ({valueOffsets: i, stride: t, children: e}, r) => {
          let n = e[0], {[r * t]: o} = i, {[r * t + 1]: d} = i, p = Oe.getVisitFn(n.type), m = n.slice(o, d - o), I = 8;
          for (let A = -1, E = d - o; ++A < E;) I += p(m, A);
          return I
        }, XS = ({stride: i, children: t}, e) => {
          let r = t[0], n = r.slice(e * i, i), o = Oe.getVisitFn(r.type), d = 0;
          for (let p = -1, m = n.length; ++p < m;) d += o(n, p);
          return d
        }, GS = (i, t) => i.type.mode === Dt.Dense ? yp(i, t) : _p(i, t),
        yp = ({type: i, children: t, typeIds: e, valueOffsets: r}, n) => {
          let o = i.typeIdToChildIndex[e[n]];
          return 8 + Oe.visit(t[o], r[n])
        }, _p = ({children: i}, t) => 4 + Oe.visitMany(i, i.map(() => t)).reduce(zS, 0);
    mi.prototype.visitUtf8 = WS;
    mi.prototype.visitBinary = $S;
    mi.prototype.visitList = YS;
    mi.prototype.visitFixedSizeList = XS;
    mi.prototype.visitUnion = GS;
    mi.prototype.visitDenseUnion = yp;
    mi.prototype.visitSparseUnion = _p;
    var Oe = new mi;
    var mp, bp = {}, vp = {}, G = class {
      constructor(t) {
        var e, r, n;
        let o = t[0] instanceof G ? t.flatMap(p => p.data) : t;
        if (o.length === 0 || o.some(p => !(p instanceof yt))) throw new TypeError("Vector constructor expects an Array of Data instances.");
        let d = (e = o[0]) === null || e === void 0 ? void 0 : e.type;
        switch (o.length) {
          case 0:
            this._offsets = [0];
            break;
          case 1: {
            let {get: p, set: m, indexOf: I, byteLength: A} = bp[d.typeId], E = o[0];
            this.isValid = T => An(E, T), this.get = T => p(E, T), this.set = (T, k) => m(E, T, k), this.indexOf = T => I(E, T), this.getByteLength = T => A(E, T), this._offsets = [0, E.length];
            break
          }
          default:
            Object.setPrototypeOf(this, vp[d.typeId]), this._offsets = co(o);
            break
        }
        this.data = o, this.type = d, this.stride = ke(d), this.numChildren = (n = (r = d.children) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : 0, this.length = this._offsets[this._offsets.length - 1]
      }

      get byteLength() {
        return this._byteLength === -1 && (this._byteLength = this.data.reduce((t, e) => t + e.byteLength, 0)), this._byteLength
      }

      get nullCount() {
        return this._nullCount === -1 && (this._nullCount = lo(this.data)), this._nullCount
      }

      get ArrayType() {
        return this.type.ArrayType
      }

      get [Symbol.toStringTag]() {
        return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`
      }

      get VectorName() {
        return `${F[this.type.typeId]}Vector`
      }

      isValid(t) {
        return !1
      }

      get(t) {
        return null
      }

      set(t, e) {
      }

      indexOf(t, e) {
        return -1
      }

      includes(t, e) {
        return this.indexOf(t, e) > 0
      }

      getByteLength(t) {
        return 0
      }

      [Symbol.iterator]() {
        return Xr.visit(this)
      }

      concat(...t) {
        return new G(this.data.concat(t.flatMap(e => e.data).flat(Number.POSITIVE_INFINITY)))
      }

      slice(t, e) {
        return new G(In(this, t, e, ({data: r, _offsets: n}, o, d) => uo(r, n, o, d)))
      }

      toJSON() {
        return [...this]
      }

      toArray() {
        let {type: t, data: e, length: r, stride: n, ArrayType: o} = this;
        switch (t.typeId) {
          case F.Int:
          case F.Float:
          case F.Decimal:
          case F.Time:
          case F.Timestamp:
            switch (e.length) {
              case 0:
                return new o;
              case 1:
                return e[0].values.subarray(0, r * n);
              default:
                return e.reduce((d, {
                  values: p,
                  length: m
                }) => (d.array.set(p.subarray(0, m * n), d.offset), d.offset += m * n, d), {
                  array: new o(r * n),
                  offset: 0
                }).array
            }
        }
        return [...this]
      }

      toString() {
        return `[${[...this].join(",")}]`
      }

      getChild(t) {
        var e;
        return this.getChildAt((e = this.type.children) === null || e === void 0 ? void 0 : e.findIndex(r => r.name === t))
      }

      getChildAt(t) {
        return t > -1 && t < this.numChildren ? new G(this.data.map(({children: e}) => e[t])) : null
      }

      get isMemoized() {
        return L.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1
      }

      memoize() {
        if (L.isDictionary(this.type)) {
          let t = new Gr(this.data[0].dictionary), e = this.data.map(r => {
            let n = r.clone();
            return n.dictionary = t, n
          });
          return new G(e)
        }
        return new Gr(this)
      }

      unmemoize() {
        if (L.isDictionary(this.type) && this.isMemoized) {
          let t = this.data[0].dictionary.unmemoize(), e = this.data.map(r => {
            let n = r.clone();
            return n.dictionary = t, n
          });
          return new G(e)
        }
        return this
      }
    };
    mp = Symbol.toStringTag;
    G[mp] = (i => {
      i.type = L.prototype, i.data = [], i.length = 0, i.stride = 1, i.numChildren = 0, i._nullCount = -1, i._byteLength = -1, i._offsets = new Uint32Array([0]), i[Symbol.isConcatSpreadable] = !0;
      let t = Object.keys(F).map(e => F[e]).filter(e => typeof e == "number" && e !== F.NONE);
      for (let e of t) {
        let r = Nt.getVisitFnByTypeId(e), n = ie.getVisitFnByTypeId(e), o = Cr.getVisitFnByTypeId(e),
            d = Oe.getVisitFnByTypeId(e);
        bp[e] = {get: r, set: n, indexOf: o, byteLength: d}, vp[e] = Object.create(i, {
          isValid: {value: sr(An)},
          get: {value: sr(Nt.getVisitFnByTypeId(e))},
          set: {value: fo(ie.getVisitFnByTypeId(e))},
          indexOf: {value: ho(Cr.getVisitFnByTypeId(e))},
          getByteLength: {value: sr(Oe.getVisitFnByTypeId(e))}
        })
      }
      return "Vector"
    })(G.prototype);
    var Gr = class extends G {
      constructor(t) {
        super(t.data);
        let e = this.get, r = this.set, n = this.slice, o = new Array(this.length);
        Object.defineProperty(this, "get", {
          value(d) {
            let p = o[d];
            if (p !== void 0) return p;
            let m = e.call(this, d);
            return o[d] = m, m
          }
        }), Object.defineProperty(this, "set", {
          value(d, p) {
            r.call(this, d, p), o[d] = p
          }
        }), Object.defineProperty(this, "slice", {value: (d, p) => new Gr(n.call(this, d, p))}), Object.defineProperty(this, "isMemoized", {value: !0}), Object.defineProperty(this, "unmemoize", {value: () => new G(this.data)}), Object.defineProperty(this, "memoize", {value: () => this})
      }
    };

    function gp(i) {
      if (!i || i.length <= 0) return function (n) {
        return !0
      };
      let t = "", e = i.filter(r => r === r);
      return e.length > 0 && (t = `
    switch (x) {${e.map(r => `
        case ${KS(r)}:`).join("")}
            return false;
    }`), i.length !== e.length && (t = `if (x !== x) return false;
${t}`), new Function("x", `${t}
return true;`)
    }

    function KS(i) {
      return typeof i != "bigint" ? Qe(i) : As ? `${Qe(i)}n` : `"${Qe(i)}"`
    }

    var Wa = (i, t) => (Math.ceil(i) * t + 63 & -64 || 64) / t,
        JS = (i, t = 0) => i.length >= t ? i.subarray(0, t) : Nr(new i.constructor(t), i, 0), or = class {
          constructor(t, e = 1) {
            this.buffer = t, this.stride = e, this.BYTES_PER_ELEMENT = t.BYTES_PER_ELEMENT, this.ArrayType = t.constructor, this._resize(this.length = Math.ceil(t.length / e))
          }

          get byteLength() {
            return Math.ceil(this.length * this.stride) * this.BYTES_PER_ELEMENT
          }

          get reservedLength() {
            return this.buffer.length / this.stride
          }

          get reservedByteLength() {
            return this.buffer.byteLength
          }

          set(t, e) {
            return this
          }

          append(t) {
            return this.set(this.length, t)
          }

          reserve(t) {
            if (t > 0) {
              this.length += t;
              let e = this.stride, r = this.length * e, n = this.buffer.length;
              r >= n && this._resize(n === 0 ? Wa(r * 1, this.BYTES_PER_ELEMENT) : Wa(r * 2, this.BYTES_PER_ELEMENT))
            }
            return this
          }

          flush(t = this.length) {
            t = Wa(t * this.stride, this.BYTES_PER_ELEMENT);
            let e = JS(this.buffer, t);
            return this.clear(), e
          }

          clear() {
            return this.length = 0, this._resize(0), this
          }

          _resize(t) {
            return this.buffer = Nr(new this.ArrayType(t), this.buffer)
          }
        };
    or.prototype.offset = 0;
    var Vi = class extends or {
      last() {
        return this.get(this.length - 1)
      }

      get(t) {
        return this.buffer[t]
      }

      set(t, e) {
        return this.reserve(t - this.length + 1), this.buffer[t * this.stride] = e, this
      }
    }, Kr = class extends Vi {
      constructor(t = new Uint8Array(0)) {
        super(t, 1 / 8), this.numValid = 0
      }

      get numInvalid() {
        return this.length - this.numValid
      }

      get(t) {
        return this.buffer[t >> 3] >> t % 8 & 1
      }

      set(t, e) {
        let {buffer: r} = this.reserve(t - this.length + 1), n = t >> 3, o = t % 8, d = r[n] >> o & 1;
        return e ? d === 0 && (r[n] |= 1 << o, ++this.numValid) : d === 1 && (r[n] &= ~(1 << o), --this.numValid), this
      }

      clear() {
        return this.numValid = 0, super.clear()
      }
    }, Jr = class extends Vi {
      constructor(t = new Int32Array(1)) {
        super(t, 1)
      }

      append(t) {
        return this.set(this.length - 1, t)
      }

      set(t, e) {
        let r = this.length - 1, n = this.reserve(t - r + 1).buffer;
        return r < t++ && n.fill(n[r], r, t), n[t] = n[t - 1] + e, this
      }

      flush(t = this.length - 1) {
        return t > this.length && this.set(t - 1, 0), super.flush(t + 1)
      }
    };
    var Bt = class {
      constructor({type: t, nullValues: e}) {
        this.length = 0, this.finished = !1, this.type = t, this.children = [], this.nullValues = e, this.stride = ke(t), this._nulls = new Kr, e && e.length > 0 && (this._isValid = gp(e))
      }

      static throughNode(t) {
        throw new Error('"throughNode" not available in this environment')
      }

      static throughDOM(t) {
        throw new Error('"throughDOM" not available in this environment')
      }

      toVector() {
        return new G([this.flush()])
      }

      get ArrayType() {
        return this.type.ArrayType
      }

      get nullCount() {
        return this._nulls.numInvalid
      }

      get numChildren() {
        return this.children.length
      }

      get byteLength() {
        let t = 0, {_offsets: e, _values: r, _nulls: n, _typeIds: o, children: d} = this;
        return e && (t += e.byteLength), r && (t += r.byteLength), n && (t += n.byteLength), o && (t += o.byteLength), d.reduce((p, m) => p + m.byteLength, t)
      }

      get reservedLength() {
        return this._nulls.reservedLength
      }

      get reservedByteLength() {
        let t = 0;
        return this._offsets && (t += this._offsets.reservedByteLength), this._values && (t += this._values.reservedByteLength), this._nulls && (t += this._nulls.reservedByteLength), this._typeIds && (t += this._typeIds.reservedByteLength), this.children.reduce((e, r) => e + r.reservedByteLength, t)
      }

      get valueOffsets() {
        return this._offsets ? this._offsets.buffer : null
      }

      get values() {
        return this._values ? this._values.buffer : null
      }

      get nullBitmap() {
        return this._nulls ? this._nulls.buffer : null
      }

      get typeIds() {
        return this._typeIds ? this._typeIds.buffer : null
      }

      append(t) {
        return this.set(this.length, t)
      }

      isValid(t) {
        return this._isValid(t)
      }

      set(t, e) {
        return this.setValid(t, this.isValid(e)) && this.setValue(t, e), this
      }

      setValue(t, e) {
        this._setValue(this, t, e)
      }

      setValid(t, e) {
        return this.length = this._nulls.set(t, +e).length, e
      }

      addChild(t, e = `${this.numChildren}`) {
        throw new Error(`Cannot append children to non-nested type "${this.type}"`)
      }

      getChildAt(t) {
        return this.children[t] || null
      }

      flush() {
        let t, e, r, n, {type: o, length: d, nullCount: p, _typeIds: m, _offsets: I, _values: A, _nulls: E} = this;
        (e = m == null ? void 0 : m.flush(d)) ? n = I == null ? void 0 : I.flush(d) : (n = I == null ? void 0 : I.flush(d)) ? t = A == null ? void 0 : A.flush(I.last()) : t = A == null ? void 0 : A.flush(d), p > 0 && (r = E == null ? void 0 : E.flush(d));
        let T = this.children.map(k => k.flush());
        return this.clear(), J({
          type: o,
          length: d,
          nullCount: p,
          children: T,
          child: T[0],
          data: t,
          typeIds: e,
          nullBitmap: r,
          valueOffsets: n
        })
      }

      finish() {
        this.finished = !0;
        for (let t of this.children) t.finish();
        return this
      }

      clear() {
        var t, e, r, n;
        this.length = 0, (t = this._nulls) === null || t === void 0 || t.clear(), (e = this._values) === null || e === void 0 || e.clear(), (r = this._offsets) === null || r === void 0 || r.clear(), (n = this._typeIds) === null || n === void 0 || n.clear();
        for (let o of this.children) o.clear();
        return this
      }
    };
    Bt.prototype.length = 1;
    Bt.prototype.stride = 1;
    Bt.prototype.children = null;
    Bt.prototype.finished = !1;
    Bt.prototype.nullValues = null;
    Bt.prototype._isValid = () => !0;
    var Xt = class extends Bt {
      constructor(t) {
        super(t), this._values = new Vi(new this.ArrayType(0), this.stride)
      }

      setValue(t, e) {
        let r = this._values;
        return r.reserve(t - r.length + 1), super.setValue(t, e)
      }
    }, bi = class extends Bt {
      constructor(t) {
        super(t), this._pendingLength = 0, this._offsets = new Jr
      }

      setValue(t, e) {
        let r = this._pending || (this._pending = new Map), n = r.get(t);
        n && (this._pendingLength -= n.length), this._pendingLength += e instanceof _i ? e[We].length : e.length, r.set(t, e)
      }

      setValid(t, e) {
        return super.setValid(t, e) ? !0 : ((this._pending || (this._pending = new Map)).set(t, void 0), !1)
      }

      clear() {
        return this._pendingLength = 0, this._pending = void 0, super.clear()
      }

      flush() {
        return this._flush(), super.flush()
      }

      finish() {
        return this._flush(), super.finish()
      }

      _flush() {
        let t = this._pending, e = this._pendingLength;
        return this._pendingLength = 0, this._pending = void 0, t && t.size > 0 && this._flushPending(t, e), this
      }
    };
    var Fr = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      offset() {
        return this.bb.readInt64(this.bb_pos)
      }

      metaDataLength() {
        return this.bb.readInt32(this.bb_pos + 8)
      }

      bodyLength() {
        return this.bb.readInt64(this.bb_pos + 16)
      }

      static sizeOf() {
        return 24
      }

      static createBlock(t, e, r, n) {
        return t.prep(8, 24), t.writeInt64(n), t.pad(4), t.writeInt32(r), t.writeInt64(e), t.offset()
      }
    };
    var vi = new Int32Array(2), po = new Float32Array(vi.buffer), yo = new Float64Array(vi.buffer),
        qr = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
    var Pt = class {
      constructor(t, e) {
        this.low = t | 0, this.high = e | 0
      }

      static create(t, e) {
        return t == 0 && e == 0 ? Pt.ZERO : new Pt(t, e)
      }

      toFloat64() {
        return (this.low >>> 0) + this.high * 4294967296
      }

      equals(t) {
        return this.low == t.low && this.high == t.high
      }
    };
    Pt.ZERO = new Pt(0, 0);
    var xn;
    (function (i) {
      i[i.UTF8_BYTES = 1] = "UTF8_BYTES", i[i.UTF16_STRING = 2] = "UTF16_STRING"
    })(xn || (xn = {}));
    var ye = class {
      constructor(t) {
        this.bytes_ = t, this.position_ = 0
      }

      static allocate(t) {
        return new ye(new Uint8Array(t))
      }

      clear() {
        this.position_ = 0
      }

      bytes() {
        return this.bytes_
      }

      position() {
        return this.position_
      }

      setPosition(t) {
        this.position_ = t
      }

      capacity() {
        return this.bytes_.length
      }

      readInt8(t) {
        return this.readUint8(t) << 24 >> 24
      }

      readUint8(t) {
        return this.bytes_[t]
      }

      readInt16(t) {
        return this.readUint16(t) << 16 >> 16
      }

      readUint16(t) {
        return this.bytes_[t] | this.bytes_[t + 1] << 8
      }

      readInt32(t) {
        return this.bytes_[t] | this.bytes_[t + 1] << 8 | this.bytes_[t + 2] << 16 | this.bytes_[t + 3] << 24
      }

      readUint32(t) {
        return this.readInt32(t) >>> 0
      }

      readInt64(t) {
        return new Pt(this.readInt32(t), this.readInt32(t + 4))
      }

      readUint64(t) {
        return new Pt(this.readUint32(t), this.readUint32(t + 4))
      }

      readFloat32(t) {
        return vi[0] = this.readInt32(t), po[0]
      }

      readFloat64(t) {
        return vi[qr ? 0 : 1] = this.readInt32(t), vi[qr ? 1 : 0] = this.readInt32(t + 4), yo[0]
      }

      writeInt8(t, e) {
        this.bytes_[t] = e
      }

      writeUint8(t, e) {
        this.bytes_[t] = e
      }

      writeInt16(t, e) {
        this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8
      }

      writeUint16(t, e) {
        this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8
      }

      writeInt32(t, e) {
        this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24
      }

      writeUint32(t, e) {
        this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24
      }

      writeInt64(t, e) {
        this.writeInt32(t, e.low), this.writeInt32(t + 4, e.high)
      }

      writeUint64(t, e) {
        this.writeUint32(t, e.low), this.writeUint32(t + 4, e.high)
      }

      writeFloat32(t, e) {
        po[0] = e, this.writeInt32(t, vi[0])
      }

      writeFloat64(t, e) {
        yo[0] = e, this.writeInt32(t, vi[qr ? 0 : 1]), this.writeInt32(t + 4, vi[qr ? 1 : 0])
      }

      getBufferIdentifier() {
        if (this.bytes_.length < this.position_ + 4 + 4) throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
        let t = "";
        for (let e = 0; e < 4; e++) t += String.fromCharCode(this.readInt8(this.position_ + 4 + e));
        return t
      }

      __offset(t, e) {
        let r = t - this.readInt32(t);
        return e < this.readInt16(r) ? this.readInt16(r + e) : 0
      }

      __union(t, e) {
        return t.bb_pos = e + this.readInt32(e), t.bb = this, t
      }

      __string(t, e) {
        t += this.readInt32(t);
        let r = this.readInt32(t), n = "", o = 0;
        if (t += 4, e === xn.UTF8_BYTES) return this.bytes_.subarray(t, t + r);
        for (; o < r;) {
          let d, p = this.readUint8(t + o++);
          if (p < 192) d = p; else {
            let m = this.readUint8(t + o++);
            if (p < 224) d = (p & 31) << 6 | m & 63; else {
              let I = this.readUint8(t + o++);
              if (p < 240) d = (p & 15) << 12 | (m & 63) << 6 | I & 63; else {
                let A = this.readUint8(t + o++);
                d = (p & 7) << 18 | (m & 63) << 12 | (I & 63) << 6 | A & 63
              }
            }
          }
          d < 65536 ? n += String.fromCharCode(d) : (d -= 65536, n += String.fromCharCode((d >> 10) + 55296, (d & (1 << 10) - 1) + 56320))
        }
        return n
      }

      __union_with_string(t, e) {
        return typeof t == "string" ? this.__string(e) : this.__union(t, e)
      }

      __indirect(t) {
        return t + this.readInt32(t)
      }

      __vector(t) {
        return t + this.readInt32(t) + 4
      }

      __vector_len(t) {
        return this.readInt32(t + this.readInt32(t))
      }

      __has_identifier(t) {
        if (t.length != 4) throw new Error("FlatBuffers: file identifier must be length " + 4);
        for (let e = 0; e < 4; e++) if (t.charCodeAt(e) != this.readInt8(this.position() + 4 + e)) return !1;
        return !0
      }

      createLong(t, e) {
        return Pt.create(t, e)
      }

      createScalarList(t, e) {
        let r = [];
        for (let n = 0; n < e; ++n) t(n) !== null && r.push(t(n));
        return r
      }

      createObjList(t, e) {
        let r = [];
        for (let n = 0; n < e; ++n) {
          let o = t(n);
          o !== null && r.push(o.unpack())
        }
        return r
      }
    };
    var zi = class {
      constructor(t) {
        this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
        let e;
        t ? e = t : e = 1024, this.bb = ye.allocate(e), this.space = e
      }

      clear() {
        this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null
      }

      forceDefaults(t) {
        this.force_defaults = t
      }

      dataBuffer() {
        return this.bb
      }

      asUint8Array() {
        return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset())
      }

      prep(t, e) {
        t > this.minalign && (this.minalign = t);
        let r = ~(this.bb.capacity() - this.space + e) + 1 & t - 1;
        for (; this.space < r + t + e;) {
          let n = this.bb.capacity();
          this.bb = zi.growByteBuffer(this.bb), this.space += this.bb.capacity() - n
        }
        this.pad(r)
      }

      pad(t) {
        for (let e = 0; e < t; e++) this.bb.writeInt8(--this.space, 0)
      }

      writeInt8(t) {
        this.bb.writeInt8(this.space -= 1, t)
      }

      writeInt16(t) {
        this.bb.writeInt16(this.space -= 2, t)
      }

      writeInt32(t) {
        this.bb.writeInt32(this.space -= 4, t)
      }

      writeInt64(t) {
        this.bb.writeInt64(this.space -= 8, t)
      }

      writeFloat32(t) {
        this.bb.writeFloat32(this.space -= 4, t)
      }

      writeFloat64(t) {
        this.bb.writeFloat64(this.space -= 8, t)
      }

      addInt8(t) {
        this.prep(1, 0), this.writeInt8(t)
      }

      addInt16(t) {
        this.prep(2, 0), this.writeInt16(t)
      }

      addInt32(t) {
        this.prep(4, 0), this.writeInt32(t)
      }

      addInt64(t) {
        this.prep(8, 0), this.writeInt64(t)
      }

      addFloat32(t) {
        this.prep(4, 0), this.writeFloat32(t)
      }

      addFloat64(t) {
        this.prep(8, 0), this.writeFloat64(t)
      }

      addFieldInt8(t, e, r) {
        (this.force_defaults || e != r) && (this.addInt8(e), this.slot(t))
      }

      addFieldInt16(t, e, r) {
        (this.force_defaults || e != r) && (this.addInt16(e), this.slot(t))
      }

      addFieldInt32(t, e, r) {
        (this.force_defaults || e != r) && (this.addInt32(e), this.slot(t))
      }

      addFieldInt64(t, e, r) {
        (this.force_defaults || !e.equals(r)) && (this.addInt64(e), this.slot(t))
      }

      addFieldFloat32(t, e, r) {
        (this.force_defaults || e != r) && (this.addFloat32(e), this.slot(t))
      }

      addFieldFloat64(t, e, r) {
        (this.force_defaults || e != r) && (this.addFloat64(e), this.slot(t))
      }

      addFieldOffset(t, e, r) {
        (this.force_defaults || e != r) && (this.addOffset(e), this.slot(t))
      }

      addFieldStruct(t, e, r) {
        e != r && (this.nested(e), this.slot(t))
      }

      nested(t) {
        if (t != this.offset()) throw new Error("FlatBuffers: struct must be serialized inline.")
      }

      notNested() {
        if (this.isNested) throw new Error("FlatBuffers: object serialization must not be nested.")
      }

      slot(t) {
        this.vtable !== null && (this.vtable[t] = this.offset())
      }

      offset() {
        return this.bb.capacity() - this.space
      }

      static growByteBuffer(t) {
        let e = t.capacity();
        if (e & 3221225472) throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
        let r = e << 1, n = ye.allocate(r);
        return n.setPosition(r - e), n.bytes().set(t.bytes(), r - e), n
      }

      addOffset(t) {
        this.prep(4, 0), this.writeInt32(this.offset() - t + 4)
      }

      startObject(t) {
        this.notNested(), this.vtable == null && (this.vtable = []), this.vtable_in_use = t;
        for (let e = 0; e < t; e++) this.vtable[e] = 0;
        this.isNested = !0, this.object_start = this.offset()
      }

      endObject() {
        if (this.vtable == null || !this.isNested) throw new Error("FlatBuffers: endObject called without startObject");
        this.addInt32(0);
        let t = this.offset(), e = this.vtable_in_use - 1;
        for (; e >= 0 && this.vtable[e] == 0; e--) ;
        let r = e + 1;
        for (; e >= 0; e--) this.addInt16(this.vtable[e] != 0 ? t - this.vtable[e] : 0);
        let n = 2;
        this.addInt16(t - this.object_start);
        let o = (r + n) * 2;
        this.addInt16(o);
        let d = 0, p = this.space;
        t:for (e = 0; e < this.vtables.length; e++) {
          let m = this.bb.capacity() - this.vtables[e];
          if (o == this.bb.readInt16(m)) {
            for (let I = 2; I < o; I += 2) if (this.bb.readInt16(p + I) != this.bb.readInt16(m + I)) continue t;
            d = this.vtables[e];
            break
          }
        }
        return d ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, d - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t
      }

      finish(t, e, r) {
        let n = r ? 4 : 0;
        if (e) {
          let o = e;
          if (this.prep(this.minalign, 4 + 4 + n), o.length != 4) throw new Error("FlatBuffers: file identifier must be length " + 4);
          for (let d = 4 - 1; d >= 0; d--) this.writeInt8(o.charCodeAt(d))
        }
        this.prep(this.minalign, 4 + n), this.addOffset(t), n && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space)
      }

      finishSizePrefixed(t, e) {
        this.finish(t, e, !0)
      }

      requiredField(t, e) {
        let r = this.bb.capacity() - t, n = r - this.bb.readInt32(r);
        if (!(this.bb.readInt16(n + e) != 0)) throw new Error("FlatBuffers: field " + e + " must be set")
      }

      startVector(t, e, r) {
        this.notNested(), this.vector_num_elems = e, this.prep(4, t * e), this.prep(r, t * e)
      }

      endVector() {
        return this.writeInt32(this.vector_num_elems), this.offset()
      }

      createSharedString(t) {
        if (!t) return 0;
        if (this.string_maps || (this.string_maps = new Map), this.string_maps.has(t)) return this.string_maps.get(t);
        let e = this.createString(t);
        return this.string_maps.set(t, e), e
      }

      createString(t) {
        if (!t) return 0;
        let e;
        if (t instanceof Uint8Array) e = t; else {
          e = [];
          let r = 0;
          for (; r < t.length;) {
            let n, o = t.charCodeAt(r++);
            if (o < 55296 || o >= 56320) n = o; else {
              let d = t.charCodeAt(r++);
              n = (o << 10) + d + (65536 - (55296 << 10) - 56320)
            }
            n < 128 ? e.push(n) : (n < 2048 ? e.push(n >> 6 & 31 | 192) : (n < 65536 ? e.push(n >> 12 & 15 | 224) : e.push(n >> 18 & 7 | 240, n >> 12 & 63 | 128), e.push(n >> 6 & 63 | 128)), e.push(n & 63 | 128))
          }
        }
        this.addInt8(0), this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length);
        for (let r = 0, n = this.space, o = this.bb.bytes(); r < e.length; r++) o[n++] = e[r];
        return this.endVector()
      }

      createLong(t, e) {
        return Pt.create(t, e)
      }

      createObjectOffset(t) {
        return t === null ? 0 : typeof t == "string" ? this.createString(t) : t.pack(this)
      }

      createObjectOffsetList(t) {
        let e = [];
        for (let r = 0; r < t.length; ++r) {
          let n = t[r];
          if (n !== null) e.push(this.createObjectOffset(n)); else throw new Error("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")
        }
        return e
      }

      createStructOffsetList(t, e) {
        return e(this, t.length), this.createObjectOffsetList(t), this.endVector()
      }
    };
    var It = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsKeyValue(t, e) {
        return (e || new It).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsKeyValue(t, e) {
        return t.setPosition(t.position() + 4), (e || new It).__init(t.readInt32(t.position()) + t.position(), t)
      }

      key(t) {
        let e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__string(this.bb_pos + e, t) : null
      }

      value(t) {
        let e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__string(this.bb_pos + e, t) : null
      }

      static startKeyValue(t) {
        t.startObject(2)
      }

      static addKey(t, e) {
        t.addFieldOffset(0, e, 0)
      }

      static addValue(t, e) {
        t.addFieldOffset(1, e, 0)
      }

      static endKeyValue(t) {
        return t.endObject()
      }

      static createKeyValue(t, e, r) {
        return It.startKeyValue(t), It.addKey(t, e), It.addValue(t, r), It.endKeyValue(t)
      }
    };
    var ar;
    (function (i) {
      i[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2", i[i.V3 = 2] = "V3", i[i.V4 = 3] = "V4", i[i.V5 = 4] = "V5"
    })(ar || (ar = {}));
    var lr;
    (function (i) {
      i[i.Little = 0] = "Little", i[i.Big = 1] = "Big"
    })(lr || (lr = {}));
    var Bn;
    (function (i) {
      i[i.DenseArray = 0] = "DenseArray"
    })(Bn || (Bn = {}));
    var Gt = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsInt(t, e) {
        return (e || new Gt).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsInt(t, e) {
        return t.setPosition(t.position() + 4), (e || new Gt).__init(t.readInt32(t.position()) + t.position(), t)
      }

      bitWidth() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt32(this.bb_pos + t) : 0
      }

      isSigned() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? !!this.bb.readInt8(this.bb_pos + t) : !1
      }

      static startInt(t) {
        t.startObject(2)
      }

      static addBitWidth(t, e) {
        t.addFieldInt32(0, e, 0)
      }

      static addIsSigned(t, e) {
        t.addFieldInt8(1, +e, 0)
      }

      static endInt(t) {
        return t.endObject()
      }

      static createInt(t, e, r) {
        return Gt.startInt(t), Gt.addBitWidth(t, e), Gt.addIsSigned(t, r), Gt.endInt(t)
      }
    };
    var Re = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsDictionaryEncoding(t, e) {
        return (e || new Re).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsDictionaryEncoding(t, e) {
        return t.setPosition(t.position() + 4), (e || new Re).__init(t.readInt32(t.position()) + t.position(), t)
      }

      id() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
      }

      indexType(t) {
        let e = this.bb.__offset(this.bb_pos, 6);
        return e ? (t || new Gt).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
      }

      isOrdered() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? !!this.bb.readInt8(this.bb_pos + t) : !1
      }

      dictionaryKind() {
        let t = this.bb.__offset(this.bb_pos, 10);
        return t ? this.bb.readInt16(this.bb_pos + t) : Bn.DenseArray
      }

      static startDictionaryEncoding(t) {
        t.startObject(4)
      }

      static addId(t, e) {
        t.addFieldInt64(0, e, t.createLong(0, 0))
      }

      static addIndexType(t, e) {
        t.addFieldOffset(1, e, 0)
      }

      static addIsOrdered(t, e) {
        t.addFieldInt8(2, +e, 0)
      }

      static addDictionaryKind(t, e) {
        t.addFieldInt16(3, e, Bn.DenseArray)
      }

      static endDictionaryEncoding(t) {
        return t.endObject()
      }
    };
    var gi = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsBinary(t, e) {
        return (e || new gi).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsBinary(t, e) {
        return t.setPosition(t.position() + 4), (e || new gi).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startBinary(t) {
        t.startObject(0)
      }

      static endBinary(t) {
        return t.endObject()
      }

      static createBinary(t) {
        return gi.startBinary(t), gi.endBinary(t)
      }
    };
    var wi = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsBool(t, e) {
        return (e || new wi).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsBool(t, e) {
        return t.setPosition(t.position() + 4), (e || new wi).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startBool(t) {
        t.startObject(0)
      }

      static endBool(t) {
        return t.endObject()
      }

      static createBool(t) {
        return wi.startBool(t), wi.endBool(t)
      }
    };
    var Tn;
    (function (i) {
      i[i.DAY = 0] = "DAY", i[i.MILLISECOND = 1] = "MILLISECOND"
    })(Tn || (Tn = {}));
    var ge = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsDate(t, e) {
        return (e || new ge).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsDate(t, e) {
        return t.setPosition(t.position() + 4), (e || new ge).__init(t.readInt32(t.position()) + t.position(), t)
      }

      unit() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : Tn.MILLISECOND
      }

      static startDate(t) {
        t.startObject(1)
      }

      static addUnit(t, e) {
        t.addFieldInt16(0, e, Tn.MILLISECOND)
      }

      static endDate(t) {
        return t.endObject()
      }

      static createDate(t, e) {
        return ge.startDate(t), ge.addUnit(t, e), ge.endDate(t)
      }
    };
    var Kt = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsDecimal(t, e) {
        return (e || new Kt).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsDecimal(t, e) {
        return t.setPosition(t.position() + 4), (e || new Kt).__init(t.readInt32(t.position()) + t.position(), t)
      }

      precision() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt32(this.bb_pos + t) : 0
      }

      scale() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readInt32(this.bb_pos + t) : 0
      }

      bitWidth() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.readInt32(this.bb_pos + t) : 128
      }

      static startDecimal(t) {
        t.startObject(3)
      }

      static addPrecision(t, e) {
        t.addFieldInt32(0, e, 0)
      }

      static addScale(t, e) {
        t.addFieldInt32(1, e, 0)
      }

      static addBitWidth(t, e) {
        t.addFieldInt32(2, e, 128)
      }

      static endDecimal(t) {
        return t.endObject()
      }

      static createDecimal(t, e, r, n) {
        return Kt.startDecimal(t), Kt.addPrecision(t, e), Kt.addScale(t, r), Kt.addBitWidth(t, n), Kt.endDecimal(t)
      }
    };
    var cr;
    (function (i) {
      i[i.SECOND = 0] = "SECOND", i[i.MILLISECOND = 1] = "MILLISECOND", i[i.MICROSECOND = 2] = "MICROSECOND", i[i.NANOSECOND = 3] = "NANOSECOND"
    })(cr || (cr = {}));
    var we = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsFixedSizeBinary(t, e) {
        return (e || new we).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsFixedSizeBinary(t, e) {
        return t.setPosition(t.position() + 4), (e || new we).__init(t.readInt32(t.position()) + t.position(), t)
      }

      byteWidth() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt32(this.bb_pos + t) : 0
      }

      static startFixedSizeBinary(t) {
        t.startObject(1)
      }

      static addByteWidth(t, e) {
        t.addFieldInt32(0, e, 0)
      }

      static endFixedSizeBinary(t) {
        return t.endObject()
      }

      static createFixedSizeBinary(t, e) {
        return we.startFixedSizeBinary(t), we.addByteWidth(t, e), we.endFixedSizeBinary(t)
      }
    };
    var je = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsFixedSizeList(t, e) {
        return (e || new je).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsFixedSizeList(t, e) {
        return t.setPosition(t.position() + 4), (e || new je).__init(t.readInt32(t.position()) + t.position(), t)
      }

      listSize() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt32(this.bb_pos + t) : 0
      }

      static startFixedSizeList(t) {
        t.startObject(1)
      }

      static addListSize(t, e) {
        t.addFieldInt32(0, e, 0)
      }

      static endFixedSizeList(t) {
        return t.endObject()
      }

      static createFixedSizeList(t, e) {
        return je.startFixedSizeList(t), je.addListSize(t, e), je.endFixedSizeList(t)
      }
    };
    var Dn;
    (function (i) {
      i[i.HALF = 0] = "HALF", i[i.SINGLE = 1] = "SINGLE", i[i.DOUBLE = 2] = "DOUBLE"
    })(Dn || (Dn = {}));
    var Se = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsFloatingPoint(t, e) {
        return (e || new Se).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsFloatingPoint(t, e) {
        return t.setPosition(t.position() + 4), (e || new Se).__init(t.readInt32(t.position()) + t.position(), t)
      }

      precision() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : Dn.HALF
      }

      static startFloatingPoint(t) {
        t.startObject(1)
      }

      static addPrecision(t, e) {
        t.addFieldInt16(0, e, Dn.HALF)
      }

      static endFloatingPoint(t) {
        return t.endObject()
      }

      static createFloatingPoint(t, e) {
        return Se.startFloatingPoint(t), Se.addPrecision(t, e), Se.endFloatingPoint(t)
      }
    };
    var En;
    (function (i) {
      i[i.YEAR_MONTH = 0] = "YEAR_MONTH", i[i.DAY_TIME = 1] = "DAY_TIME", i[i.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO"
    })(En || (En = {}));
    var Ie = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsInterval(t, e) {
        return (e || new Ie).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsInterval(t, e) {
        return t.setPosition(t.position() + 4), (e || new Ie).__init(t.readInt32(t.position()) + t.position(), t)
      }

      unit() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : En.YEAR_MONTH
      }

      static startInterval(t) {
        t.startObject(1)
      }

      static addUnit(t, e) {
        t.addFieldInt16(0, e, En.YEAR_MONTH)
      }

      static endInterval(t) {
        return t.endObject()
      }

      static createInterval(t, e) {
        return Ie.startInterval(t), Ie.addUnit(t, e), Ie.endInterval(t)
      }
    };
    var ji = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsList(t, e) {
        return (e || new ji).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsList(t, e) {
        return t.setPosition(t.position() + 4), (e || new ji).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startList(t) {
        t.startObject(0)
      }

      static endList(t) {
        return t.endObject()
      }

      static createList(t) {
        return ji.startList(t), ji.endList(t)
      }
    };
    var Ce = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsMap(t, e) {
        return (e || new Ce).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsMap(t, e) {
        return t.setPosition(t.position() + 4), (e || new Ce).__init(t.readInt32(t.position()) + t.position(), t)
      }

      keysSorted() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? !!this.bb.readInt8(this.bb_pos + t) : !1
      }

      static startMap(t) {
        t.startObject(1)
      }

      static addKeysSorted(t, e) {
        t.addFieldInt8(0, +e, 0)
      }

      static endMap(t) {
        return t.endObject()
      }

      static createMap(t, e) {
        return Ce.startMap(t), Ce.addKeysSorted(t, e), Ce.endMap(t)
      }
    };
    var Si = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsNull(t, e) {
        return (e || new Si).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsNull(t, e) {
        return t.setPosition(t.position() + 4), (e || new Si).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startNull(t) {
        t.startObject(0)
      }

      static endNull(t) {
        return t.endObject()
      }

      static createNull(t) {
        return Si.startNull(t), Si.endNull(t)
      }
    };
    var Ii = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsStruct_(t, e) {
        return (e || new Ii).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsStruct_(t, e) {
        return t.setPosition(t.position() + 4), (e || new Ii).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startStruct_(t) {
        t.startObject(0)
      }

      static endStruct_(t) {
        return t.endObject()
      }

      static createStruct_(t) {
        return Ii.startStruct_(t), Ii.endStruct_(t)
      }
    };
    var se = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsTime(t, e) {
        return (e || new se).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsTime(t, e) {
        return t.setPosition(t.position() + 4), (e || new se).__init(t.readInt32(t.position()) + t.position(), t)
      }

      unit() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : cr.MILLISECOND
      }

      bitWidth() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readInt32(this.bb_pos + t) : 32
      }

      static startTime(t) {
        t.startObject(2)
      }

      static addUnit(t, e) {
        t.addFieldInt16(0, e, cr.MILLISECOND)
      }

      static addBitWidth(t, e) {
        t.addFieldInt32(1, e, 32)
      }

      static endTime(t) {
        return t.endObject()
      }

      static createTime(t, e, r) {
        return se.startTime(t), se.addUnit(t, e), se.addBitWidth(t, r), se.endTime(t)
      }
    };
    var oe = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsTimestamp(t, e) {
        return (e || new oe).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsTimestamp(t, e) {
        return t.setPosition(t.position() + 4), (e || new oe).__init(t.readInt32(t.position()) + t.position(), t)
      }

      unit() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : cr.SECOND
      }

      timezone(t) {
        let e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__string(this.bb_pos + e, t) : null
      }

      static startTimestamp(t) {
        t.startObject(2)
      }

      static addUnit(t, e) {
        t.addFieldInt16(0, e, cr.SECOND)
      }

      static addTimezone(t, e) {
        t.addFieldOffset(1, e, 0)
      }

      static endTimestamp(t) {
        return t.endObject()
      }

      static createTimestamp(t, e, r) {
        return oe.startTimestamp(t), oe.addUnit(t, e), oe.addTimezone(t, r), oe.endTimestamp(t)
      }
    };
    var kn;
    (function (i) {
      i[i.Sparse = 0] = "Sparse", i[i.Dense = 1] = "Dense"
    })(kn || (kn = {}));
    var Jt = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsUnion(t, e) {
        return (e || new Jt).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsUnion(t, e) {
        return t.setPosition(t.position() + 4), (e || new Jt).__init(t.readInt32(t.position()) + t.position(), t)
      }

      mode() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : kn.Sparse
      }

      typeIds(t) {
        let e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + t * 4) : 0
      }

      typeIdsLength() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      typeIdsArray() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null
      }

      static startUnion(t) {
        t.startObject(2)
      }

      static addMode(t, e) {
        t.addFieldInt16(0, e, kn.Sparse)
      }

      static addTypeIds(t, e) {
        t.addFieldOffset(1, e, 0)
      }

      static createTypeIdsVector(t, e) {
        t.startVector(4, e.length, 4);
        for (let r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
        return t.endVector()
      }

      static startTypeIdsVector(t, e) {
        t.startVector(4, e, 4)
      }

      static endUnion(t) {
        return t.endObject()
      }

      static createUnion(t, e, r) {
        return Jt.startUnion(t), Jt.addMode(t, e), Jt.addTypeIds(t, r), Jt.endUnion(t)
      }
    };
    var Ci = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsUtf8(t, e) {
        return (e || new Ci).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsUtf8(t, e) {
        return t.setPosition(t.position() + 4), (e || new Ci).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startUtf8(t) {
        t.startObject(0)
      }

      static endUtf8(t) {
        return t.endObject()
      }

      static createUtf8(t) {
        return Ci.startUtf8(t), Ci.endUtf8(t)
      }
    };
    var Tt;
    (function (i) {
      i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.FloatingPoint = 3] = "FloatingPoint", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct_ = 13] = "Struct_", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Duration = 18] = "Duration", i[i.LargeBinary = 19] = "LargeBinary", i[i.LargeUtf8 = 20] = "LargeUtf8", i[i.LargeList = 21] = "LargeList"
    })(Tt || (Tt = {}));
    var Ht = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsField(t, e) {
        return (e || new Ht).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsField(t, e) {
        return t.setPosition(t.position() + 4), (e || new Ht).__init(t.readInt32(t.position()) + t.position(), t)
      }

      name(t) {
        let e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__string(this.bb_pos + e, t) : null
      }

      nullable() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? !!this.bb.readInt8(this.bb_pos + t) : !1
      }

      typeType() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.readUint8(this.bb_pos + t) : Tt.NONE
      }

      type(t) {
        let e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.__union(t, this.bb_pos + e) : null
      }

      dictionary(t) {
        let e = this.bb.__offset(this.bb_pos, 12);
        return e ? (t || new Re).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
      }

      children(t, e) {
        let r = this.bb.__offset(this.bb_pos, 14);
        return r ? (e || new Ht).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      childrenLength() {
        let t = this.bb.__offset(this.bb_pos, 14);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      customMetadata(t, e) {
        let r = this.bb.__offset(this.bb_pos, 16);
        return r ? (e || new It).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      customMetadataLength() {
        let t = this.bb.__offset(this.bb_pos, 16);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      static startField(t) {
        t.startObject(7)
      }

      static addName(t, e) {
        t.addFieldOffset(0, e, 0)
      }

      static addNullable(t, e) {
        t.addFieldInt8(1, +e, 0)
      }

      static addTypeType(t, e) {
        t.addFieldInt8(2, e, Tt.NONE)
      }

      static addType(t, e) {
        t.addFieldOffset(3, e, 0)
      }

      static addDictionary(t, e) {
        t.addFieldOffset(4, e, 0)
      }

      static addChildren(t, e) {
        t.addFieldOffset(5, e, 0)
      }

      static createChildrenVector(t, e) {
        t.startVector(4, e.length, 4);
        for (let r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
        return t.endVector()
      }

      static startChildrenVector(t, e) {
        t.startVector(4, e, 4)
      }

      static addCustomMetadata(t, e) {
        t.addFieldOffset(6, e, 0)
      }

      static createCustomMetadataVector(t, e) {
        t.startVector(4, e.length, 4);
        for (let r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
        return t.endVector()
      }

      static startCustomMetadataVector(t, e) {
        t.startVector(4, e, 4)
      }

      static endField(t) {
        return t.endObject()
      }
    };
    var Et = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsSchema(t, e) {
        return (e || new Et).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsSchema(t, e) {
        return t.setPosition(t.position() + 4), (e || new Et).__init(t.readInt32(t.position()) + t.position(), t)
      }

      endianness() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : lr.Little
      }

      fields(t, e) {
        let r = this.bb.__offset(this.bb_pos, 6);
        return r ? (e || new Ht).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      fieldsLength() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      customMetadata(t, e) {
        let r = this.bb.__offset(this.bb_pos, 8);
        return r ? (e || new It).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      customMetadataLength() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      features(t) {
        let e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e) + t * 8) : this.bb.createLong(0, 0)
      }

      featuresLength() {
        let t = this.bb.__offset(this.bb_pos, 10);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      static startSchema(t) {
        t.startObject(4)
      }

      static addEndianness(t, e) {
        t.addFieldInt16(0, e, lr.Little)
      }

      static addFields(t, e) {
        t.addFieldOffset(1, e, 0)
      }

      static createFieldsVector(t, e) {
        t.startVector(4, e.length, 4);
        for (let r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
        return t.endVector()
      }

      static startFieldsVector(t, e) {
        t.startVector(4, e, 4)
      }

      static addCustomMetadata(t, e) {
        t.addFieldOffset(2, e, 0)
      }

      static createCustomMetadataVector(t, e) {
        t.startVector(4, e.length, 4);
        for (let r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
        return t.endVector()
      }

      static startCustomMetadataVector(t, e) {
        t.startVector(4, e, 4)
      }

      static addFeatures(t, e) {
        t.addFieldOffset(3, e, 0)
      }

      static createFeaturesVector(t, e) {
        t.startVector(8, e.length, 8);
        for (let r = e.length - 1; r >= 0; r--) t.addInt64(e[r]);
        return t.endVector()
      }

      static startFeaturesVector(t, e) {
        t.startVector(8, e, 8)
      }

      static endSchema(t) {
        return t.endObject()
      }

      static finishSchemaBuffer(t, e) {
        t.finish(e)
      }

      static finishSizePrefixedSchemaBuffer(t, e) {
        t.finish(e, void 0, !0)
      }

      static createSchema(t, e, r, n, o) {
        return Et.startSchema(t), Et.addEndianness(t, e), Et.addFields(t, r), Et.addCustomMetadata(t, n), Et.addFeatures(t, o), Et.endSchema(t)
      }
    };
    var ae = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsFooter(t, e) {
        return (e || new ae).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsFooter(t, e) {
        return t.setPosition(t.position() + 4), (e || new ae).__init(t.readInt32(t.position()) + t.position(), t)
      }

      version() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : ar.V1
      }

      schema(t) {
        let e = this.bb.__offset(this.bb_pos, 6);
        return e ? (t || new Et).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
      }

      dictionaries(t, e) {
        let r = this.bb.__offset(this.bb_pos, 8);
        return r ? (e || new Fr).__init(this.bb.__vector(this.bb_pos + r) + t * 24, this.bb) : null
      }

      dictionariesLength() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      recordBatches(t, e) {
        let r = this.bb.__offset(this.bb_pos, 10);
        return r ? (e || new Fr).__init(this.bb.__vector(this.bb_pos + r) + t * 24, this.bb) : null
      }

      recordBatchesLength() {
        let t = this.bb.__offset(this.bb_pos, 10);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      customMetadata(t, e) {
        let r = this.bb.__offset(this.bb_pos, 12);
        return r ? (e || new It).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      customMetadataLength() {
        let t = this.bb.__offset(this.bb_pos, 12);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      static startFooter(t) {
        t.startObject(5)
      }

      static addVersion(t, e) {
        t.addFieldInt16(0, e, ar.V1)
      }

      static addSchema(t, e) {
        t.addFieldOffset(1, e, 0)
      }

      static addDictionaries(t, e) {
        t.addFieldOffset(2, e, 0)
      }

      static startDictionariesVector(t, e) {
        t.startVector(24, e, 8)
      }

      static addRecordBatches(t, e) {
        t.addFieldOffset(3, e, 0)
      }

      static startRecordBatchesVector(t, e) {
        t.startVector(24, e, 8)
      }

      static addCustomMetadata(t, e) {
        t.addFieldOffset(4, e, 0)
      }

      static createCustomMetadataVector(t, e) {
        t.startVector(4, e.length, 4);
        for (let r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
        return t.endVector()
      }

      static startCustomMetadataVector(t, e) {
        t.startVector(4, e, 4)
      }

      static endFooter(t) {
        return t.endObject()
      }

      static finishFooterBuffer(t, e) {
        t.finish(e)
      }

      static finishSizePrefixedFooterBuffer(t, e) {
        t.finish(e, void 0, !0)
      }
    };
    var at = class {
      constructor(t = [], e, r) {
        this.fields = t || [], this.metadata = e || new Map, r || (r = $a(t)), this.dictionaries = r
      }

      get [Symbol.toStringTag]() {
        return "Schema"
      }

      get names() {
        return this.fields.map(t => t.name)
      }

      toString() {
        return `Schema<{ ${this.fields.map((t, e) => `${e}: ${t}`).join(", ")} }>`
      }

      select(t) {
        let e = new Set(t), r = this.fields.filter(n => e.has(n.name));
        return new at(r, this.metadata)
      }

      selectAt(t) {
        let e = t.map(r => this.fields[r]).filter(Boolean);
        return new at(e, this.metadata)
      }

      assign(...t) {
        let e = t[0] instanceof at ? t[0] : Array.isArray(t[0]) ? new at(t[0]) : new at(t), r = [...this.fields],
            n = mo(mo(new Map, this.metadata), e.metadata), o = e.fields.filter(p => {
              let m = r.findIndex(I => I.name === p.name);
              return ~m ? (r[m] = p.clone({metadata: mo(mo(new Map, r[m].metadata), p.metadata)})) && !1 : !0
            }), d = $a(o, new Map);
        return new at([...r, ...o], n, new Map([...this.dictionaries, ...d]))
      }
    };
    at.prototype.fields = null;
    at.prototype.metadata = null;
    at.prototype.dictionaries = null;
    var Q = class {
      constructor(t, e, r = !1, n) {
        this.name = t, this.type = e, this.nullable = r, this.metadata = n || new Map
      }

      static new(...t) {
        let [e, r, n, o] = t;
        return t[0] && typeof t[0] == "object" && ({name: e} = t[0], r === void 0 && (r = t[0].type), n === void 0 && (n = t[0].nullable), o === void 0 && (o = t[0].metadata)), new Q(`${e}`, r, n, o)
      }

      get typeId() {
        return this.type.typeId
      }

      get [Symbol.toStringTag]() {
        return "Field"
      }

      toString() {
        return `${this.name}: ${this.type}`
      }

      clone(...t) {
        let [e, r, n, o] = t;
        return !t[0] || typeof t[0] != "object" ? [e = this.name, r = this.type, n = this.nullable, o = this.metadata] = t : {
          name: e = this.name,
          type: r = this.type,
          nullable: n = this.nullable,
          metadata: o = this.metadata
        } = t[0], Q.new(e, r, n, o)
      }
    };
    Q.prototype.type = null;
    Q.prototype.name = null;
    Q.prototype.nullable = null;
    Q.prototype.metadata = null;

    function mo(i, t) {
      return new Map([...i || new Map, ...t || new Map])
    }

    function $a(i, t = new Map) {
      for (let e = -1, r = i.length; ++e < r;) {
        let o = i[e].type;
        if (L.isDictionary(o)) {
          if (!t.has(o.id)) t.set(o.id, o.dictionary); else if (t.get(o.id) !== o.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id")
        }
        o.children && o.children.length > 0 && $a(o.children, t)
      }
      return t
    }

    var wp = Pt, qS = zi, ZS = ye, Wi = class {
      constructor(t, e = Yt.V4, r, n) {
        this.schema = t, this.version = e, r && (this._recordBatches = r), n && (this._dictionaryBatches = n)
      }

      static decode(t) {
        t = new ZS(Y(t));
        let e = ae.getRootAsFooter(t), r = at.decode(e.schema());
        return new Ya(r, e)
      }

      static encode(t) {
        let e = new qS, r = at.encode(e, t.schema);
        ae.startRecordBatchesVector(e, t.numRecordBatches);
        for (let d of [...t.recordBatches()].slice().reverse()) li.encode(e, d);
        let n = e.endVector();
        ae.startDictionariesVector(e, t.numDictionaries);
        for (let d of [...t.dictionaryBatches()].slice().reverse()) li.encode(e, d);
        let o = e.endVector();
        return ae.startFooter(e), ae.addSchema(e, r), ae.addVersion(e, Yt.V4), ae.addRecordBatches(e, n), ae.addDictionaries(e, o), ae.finishFooterBuffer(e, ae.endFooter(e)), e.asUint8Array()
      }

      get numRecordBatches() {
        return this._recordBatches.length
      }

      get numDictionaries() {
        return this._dictionaryBatches.length
      }

      * recordBatches() {
        for (let t, e = -1, r = this.numRecordBatches; ++e < r;) (t = this.getRecordBatch(e)) && (yield t)
      }

      * dictionaryBatches() {
        for (let t, e = -1, r = this.numDictionaries; ++e < r;) (t = this.getDictionaryBatch(e)) && (yield t)
      }

      getRecordBatch(t) {
        return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null
      }

      getDictionaryBatch(t) {
        return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null
      }
    };
    var Ya = class extends Wi {
      constructor(t, e) {
        super(t, e.version()), this._footer = e
      }

      get numRecordBatches() {
        return this._footer.recordBatchesLength()
      }

      get numDictionaries() {
        return this._footer.dictionariesLength()
      }

      getRecordBatch(t) {
        if (t >= 0 && t < this.numRecordBatches) {
          let e = this._footer.recordBatches(t);
          if (e) return li.decode(e)
        }
        return null
      }

      getDictionaryBatch(t) {
        if (t >= 0 && t < this.numDictionaries) {
          let e = this._footer.dictionaries(t);
          if (e) return li.decode(e)
        }
        return null
      }
    }, li = class {
      constructor(t, e, r) {
        this.metaDataLength = t, this.offset = typeof r == "number" ? r : r.low, this.bodyLength = typeof e == "number" ? e : e.low
      }

      static decode(t) {
        return new li(t.metaDataLength(), t.bodyLength(), t.offset())
      }

      static encode(t, e) {
        let {metaDataLength: r} = e, n = new wp(e.offset, 0), o = new wp(e.bodyLength, 0);
        return Fr.createBlock(t, n, r, o)
      }
    };
    var Ct = Object.freeze({done: !0, value: void 0}), On = class {
      constructor(t) {
        this._json = t
      }

      get schema() {
        return this._json.schema
      }

      get batches() {
        return this._json.batches || []
      }

      get dictionaries() {
        return this._json.dictionaries || []
      }
    }, Ar = class {
      tee() {
        return this._getDOMStream().tee()
      }

      pipe(t, e) {
        return this._getNodeStream().pipe(t, e)
      }

      pipeTo(t, e) {
        return this._getDOMStream().pipeTo(t, e)
      }

      pipeThrough(t, e) {
        return this._getDOMStream().pipeThrough(t, e)
      }

      _getDOMStream() {
        return this._DOMStream || (this._DOMStream = this.toDOMStream())
      }

      _getNodeStream() {
        return this._nodeStream || (this._nodeStream = this.toNodeStream())
      }
    }, bo = class extends Ar {
      constructor() {
        super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise(t => this._closedPromiseResolve = t)
      }

      get closed() {
        return this._closedPromise
      }

      cancel(t) {
        return O(this, void 0, void 0, function* () {
          yield this.return(t)
        })
      }

      write(t) {
        this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(t) : this.resolvers.shift().resolve({
          done: !1,
          value: t
        }))
      }

      abort(t) {
        this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = {error: t} : this.resolvers.shift().reject({
          done: !0,
          value: t
        }))
      }

      close() {
        if (this._closedPromiseResolve) {
          let {resolvers: t} = this;
          for (; t.length > 0;) t.shift().resolve(Ct);
          this._closedPromiseResolve(), this._closedPromiseResolve = void 0
        }
      }

      [Symbol.asyncIterator]() {
        return this
      }

      toDOMStream(t) {
        return te.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t)
      }

      toNodeStream(t) {
        return te.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t)
      }

      throw(t) {
        return O(this, void 0, void 0, function* () {
          return yield this.abort(t), Ct
        })
      }

      return(t) {
        return O(this, void 0, void 0, function* () {
          return yield this.close(), Ct
        })
      }

      read(t) {
        return O(this, void 0, void 0, function* () {
          return (yield this.next(t, "read")).value
        })
      }

      peek(t) {
        return O(this, void 0, void 0, function* () {
          return (yield this.next(t, "peek")).value
        })
      }

      next(...t) {
        return this._values.length > 0 ? Promise.resolve({
          done: !1,
          value: this._values.shift()
        }) : this._error ? Promise.reject({
          done: !0,
          value: this._error.error
        }) : this._closedPromiseResolve ? new Promise((e, r) => {
          this.resolvers.push({resolve: e, reject: r})
        }) : Promise.resolve(Ct)
      }

      _ensureOpen() {
        if (this._closedPromiseResolve) return !0;
        throw new Error("AsyncQueue is closed")
      }
    };
    var Fi = class extends bo {
      write(t) {
        if ((t = Y(t)).byteLength > 0) return super.write(t)
      }

      toString(t = !1) {
        return t ? vn(this.toUint8Array(!0)) : this.toUint8Array(!1).then(vn)
      }

      toUint8Array(t = !1) {
        return t ? De(this._values)[0] : (() => O(this, void 0, void 0, function* () {
          var e, r;
          let n = [], o = 0;
          try {
            for (var d = Ne(this), p; p = yield d.next(), !p.done;) {
              let m = p.value;
              n.push(m), o += m.byteLength
            }
          } catch (m) {
            e = {error: m}
          } finally {
            try {
              p && !p.done && (r = d.return) && (yield r.call(d))
            } finally {
              if (e) throw e.error
            }
          }
          return De(n, o)[0]
        }))()
      }
    }, Ai = class {
      constructor(t) {
        t && (this.source = new Xa(te.fromIterable(t)))
      }

      [Symbol.iterator]() {
        return this
      }

      next(t) {
        return this.source.next(t)
      }

      throw(t) {
        return this.source.throw(t)
      }

      return(t) {
        return this.source.return(t)
      }

      peek(t) {
        return this.source.peek(t)
      }

      read(t) {
        return this.source.read(t)
      }
    }, Fe = class {
      constructor(t) {
        t instanceof Fe ? this.source = t.source : t instanceof Fi ? this.source = new $i(te.fromAsyncIterable(t)) : ks(t) ? this.source = new $i(te.fromNodeStream(t)) : gn(t) ? this.source = new $i(te.fromDOMStream(t)) : Ds(t) ? this.source = new $i(te.fromDOMStream(t.body)) : qe(t) ? this.source = new $i(te.fromIterable(t)) : Je(t) ? this.source = new $i(te.fromAsyncIterable(t)) : Ve(t) && (this.source = new $i(te.fromAsyncIterable(t)))
      }

      [Symbol.asyncIterator]() {
        return this
      }

      next(t) {
        return this.source.next(t)
      }

      throw(t) {
        return this.source.throw(t)
      }

      return(t) {
        return this.source.return(t)
      }

      get closed() {
        return this.source.closed
      }

      cancel(t) {
        return this.source.cancel(t)
      }

      peek(t) {
        return this.source.peek(t)
      }

      read(t) {
        return this.source.read(t)
      }
    }, Xa = class {
      constructor(t) {
        this.source = t
      }

      cancel(t) {
        this.return(t)
      }

      peek(t) {
        return this.next(t, "peek").value
      }

      read(t) {
        return this.next(t, "read").value
      }

      next(t, e = "read") {
        return this.source.next({cmd: e, size: t})
      }

      throw(t) {
        return Object.create(this.source.throw && this.source.throw(t) || Ct)
      }

      return(t) {
        return Object.create(this.source.return && this.source.return(t) || Ct)
      }
    }, $i = class {
      constructor(t) {
        this.source = t, this._closedPromise = new Promise(e => this._closedPromiseResolve = e)
      }

      cancel(t) {
        return O(this, void 0, void 0, function* () {
          yield this.return(t)
        })
      }

      get closed() {
        return this._closedPromise
      }

      read(t) {
        return O(this, void 0, void 0, function* () {
          return (yield this.next(t, "read")).value
        })
      }

      peek(t) {
        return O(this, void 0, void 0, function* () {
          return (yield this.next(t, "peek")).value
        })
      }

      next(t, e = "read") {
        return O(this, void 0, void 0, function* () {
          return yield this.source.next({cmd: e, size: t})
        })
      }

      throw(t) {
        return O(this, void 0, void 0, function* () {
          let e = this.source.throw && (yield this.source.throw(t)) || Ct;
          return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e)
        })
      }

      return(t) {
        return O(this, void 0, void 0, function* () {
          let e = this.source.return && (yield this.source.return(t)) || Ct;
          return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e)
        })
      }
    };
    var Rn = class extends Ai {
      constructor(t, e) {
        super(), this.position = 0, this.buffer = Y(t), this.size = typeof e > "u" ? this.buffer.byteLength : e
      }

      readInt32(t) {
        let {buffer: e, byteOffset: r} = this.readAt(t, 4);
        return new DataView(e, r).getInt32(0, !0)
      }

      seek(t) {
        return this.position = Math.min(t, this.size), t < this.size
      }

      read(t) {
        let {buffer: e, size: r, position: n} = this;
        return e && n < r ? (typeof t != "number" && (t = Number.POSITIVE_INFINITY), this.position = Math.min(r, n + Math.min(r - n, t)), e.subarray(n, this.position)) : null
      }

      readAt(t, e) {
        let r = this.buffer, n = Math.min(this.size, t + e);
        return r ? r.subarray(t, n) : new Uint8Array(e)
      }

      close() {
        this.buffer && (this.buffer = null)
      }

      throw(t) {
        return this.close(), {done: !0, value: t}
      }

      return(t) {
        return this.close(), {done: !0, value: t}
      }
    }, ur = class extends Fe {
      constructor(t, e) {
        super(), this.position = 0, this._handle = t, typeof e == "number" ? this.size = e : this._pending = (() => O(this, void 0, void 0, function* () {
          this.size = (yield t.stat()).size, delete this._pending
        }))()
      }

      readInt32(t) {
        return O(this, void 0, void 0, function* () {
          let {buffer: e, byteOffset: r} = yield this.readAt(t, 4);
          return new DataView(e, r).getInt32(0, !0)
        })
      }

      seek(t) {
        return O(this, void 0, void 0, function* () {
          return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size
        })
      }

      read(t) {
        return O(this, void 0, void 0, function* () {
          this._pending && (yield this._pending);
          let {_handle: e, size: r, position: n} = this;
          if (e && n < r) {
            typeof t != "number" && (t = Number.POSITIVE_INFINITY);
            let o = n, d = 0, p = 0, m = Math.min(r, o + Math.min(r - o, t)),
                I = new Uint8Array(Math.max(0, (this.position = m) - o));
            for (; (o += p) < m && (d += p) < I.byteLength;) ({bytesRead: p} = yield e.read(I, d, I.byteLength - d, o));
            return I
          }
          return null
        })
      }

      readAt(t, e) {
        return O(this, void 0, void 0, function* () {
          this._pending && (yield this._pending);
          let {_handle: r, size: n} = this;
          if (r && t + e < n) {
            let o = Math.min(n, t + e), d = new Uint8Array(o - t);
            return (yield r.read(d, 0, e, t)).buffer
          }
          return new Uint8Array(e)
        })
      }

      close() {
        return O(this, void 0, void 0, function* () {
          let t = this._handle;
          this._handle = null, t && (yield t.close())
        })
      }

      throw(t) {
        return O(this, void 0, void 0, function* () {
          return yield this.close(), {done: !0, value: t}
        })
      }

      return(t) {
        return O(this, void 0, void 0, function* () {
          return yield this.close(), {done: !0, value: t}
        })
      }
    };
    var Ka = {};
    vr(Ka, {BaseInt64: () => Mn, Int128: () => Ae, Int64: () => qt, Uint64: () => _t});

    function Zr(i) {
      return i < 0 && (i = 4294967295 + i + 1), `0x${i.toString(16)}`
    }

    var Qr = 8, Ga = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8], Mn = class {
      constructor(t) {
        this.buffer = t
      }

      high() {
        return this.buffer[1]
      }

      low() {
        return this.buffer[0]
      }

      _times(t) {
        let e = new Uint32Array([this.buffer[1] >>> 16, this.buffer[1] & 65535, this.buffer[0] >>> 16, this.buffer[0] & 65535]),
            r = new Uint32Array([t.buffer[1] >>> 16, t.buffer[1] & 65535, t.buffer[0] >>> 16, t.buffer[0] & 65535]),
            n = e[3] * r[3];
        this.buffer[0] = n & 65535;
        let o = n >>> 16;
        return n = e[2] * r[3], o += n, n = e[3] * r[2] >>> 0, o += n, this.buffer[0] += o << 16, this.buffer[1] = o >>> 0 < n ? 65536 : 0, this.buffer[1] += o >>> 16, this.buffer[1] += e[1] * r[3] + e[2] * r[2] + e[3] * r[1], this.buffer[1] += e[0] * r[3] + e[1] * r[2] + e[2] * r[1] + e[3] * r[0] << 16, this
      }

      _plus(t) {
        let e = this.buffer[0] + t.buffer[0] >>> 0;
        this.buffer[1] += t.buffer[1], e < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = e
      }

      lessThan(t) {
        return this.buffer[1] < t.buffer[1] || this.buffer[1] === t.buffer[1] && this.buffer[0] < t.buffer[0]
      }

      equals(t) {
        return this.buffer[1] === t.buffer[1] && this.buffer[0] == t.buffer[0]
      }

      greaterThan(t) {
        return t.lessThan(this)
      }

      hex() {
        return `${Zr(this.buffer[1])} ${Zr(this.buffer[0])}`
      }
    }, _t = class extends Mn {
      times(t) {
        return this._times(t), this
      }

      plus(t) {
        return this._plus(t), this
      }

      static from(t, e = new Uint32Array(2)) {
        return _t.fromString(typeof t == "string" ? t : t.toString(), e)
      }

      static fromNumber(t, e = new Uint32Array(2)) {
        return _t.fromString(t.toString(), e)
      }

      static fromString(t, e = new Uint32Array(2)) {
        let r = t.length, n = new _t(e);
        for (let o = 0; o < r;) {
          let d = Qr < r - o ? Qr : r - o, p = new _t(new Uint32Array([Number.parseInt(t.slice(o, o + d), 10), 0])),
              m = new _t(new Uint32Array([Ga[d], 0]));
          n.times(m), n.plus(p), o += d
        }
        return n
      }

      static convertArray(t) {
        let e = new Uint32Array(t.length * 2);
        for (let r = -1, n = t.length; ++r < n;) _t.from(t[r], new Uint32Array(e.buffer, e.byteOffset + 2 * r * 4, 2));
        return e
      }

      static multiply(t, e) {
        return new _t(new Uint32Array(t.buffer)).times(e)
      }

      static add(t, e) {
        return new _t(new Uint32Array(t.buffer)).plus(e)
      }
    }, qt = class extends Mn {
      negate() {
        return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[0] == 0 && ++this.buffer[1], this
      }

      times(t) {
        return this._times(t), this
      }

      plus(t) {
        return this._plus(t), this
      }

      lessThan(t) {
        let e = this.buffer[1] << 0, r = t.buffer[1] << 0;
        return e < r || e === r && this.buffer[0] < t.buffer[0]
      }

      static from(t, e = new Uint32Array(2)) {
        return qt.fromString(typeof t == "string" ? t : t.toString(), e)
      }

      static fromNumber(t, e = new Uint32Array(2)) {
        return qt.fromString(t.toString(), e)
      }

      static fromString(t, e = new Uint32Array(2)) {
        let r = t.startsWith("-"), n = t.length, o = new qt(e);
        for (let d = r ? 1 : 0; d < n;) {
          let p = Qr < n - d ? Qr : n - d, m = new qt(new Uint32Array([Number.parseInt(t.slice(d, d + p), 10), 0])),
              I = new qt(new Uint32Array([Ga[p], 0]));
          o.times(I), o.plus(m), d += p
        }
        return r ? o.negate() : o
      }

      static convertArray(t) {
        let e = new Uint32Array(t.length * 2);
        for (let r = -1, n = t.length; ++r < n;) qt.from(t[r], new Uint32Array(e.buffer, e.byteOffset + 2 * r * 4, 2));
        return e
      }

      static multiply(t, e) {
        return new qt(new Uint32Array(t.buffer)).times(e)
      }

      static add(t, e) {
        return new qt(new Uint32Array(t.buffer)).plus(e)
      }
    }, Ae = class {
      constructor(t) {
        this.buffer = t
      }

      high() {
        return new qt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2))
      }

      low() {
        return new qt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2))
      }

      negate() {
        return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this
      }

      times(t) {
        let e = new _t(new Uint32Array([this.buffer[3], 0])), r = new _t(new Uint32Array([this.buffer[2], 0])),
            n = new _t(new Uint32Array([this.buffer[1], 0])), o = new _t(new Uint32Array([this.buffer[0], 0])),
            d = new _t(new Uint32Array([t.buffer[3], 0])), p = new _t(new Uint32Array([t.buffer[2], 0])),
            m = new _t(new Uint32Array([t.buffer[1], 0])), I = new _t(new Uint32Array([t.buffer[0], 0])),
            A = _t.multiply(o, I);
        this.buffer[0] = A.low();
        let E = new _t(new Uint32Array([A.high(), 0]));
        return A = _t.multiply(n, I), E.plus(A), A = _t.multiply(o, m), E.plus(A), this.buffer[1] = E.low(), this.buffer[3] = E.lessThan(A) ? 1 : 0, this.buffer[2] = E.high(), new _t(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(_t.multiply(r, I)).plus(_t.multiply(n, m)).plus(_t.multiply(o, p)), this.buffer[3] += _t.multiply(e, I).plus(_t.multiply(r, m)).plus(_t.multiply(n, p)).plus(_t.multiply(o, d)).low(), this
      }

      plus(t) {
        let e = new Uint32Array(4);
        return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this
      }

      hex() {
        return `${Zr(this.buffer[3])} ${Zr(this.buffer[2])} ${Zr(this.buffer[1])} ${Zr(this.buffer[0])}`
      }

      static multiply(t, e) {
        return new Ae(new Uint32Array(t.buffer)).times(e)
      }

      static add(t, e) {
        return new Ae(new Uint32Array(t.buffer)).plus(e)
      }

      static from(t, e = new Uint32Array(4)) {
        return Ae.fromString(typeof t == "string" ? t : t.toString(), e)
      }

      static fromNumber(t, e = new Uint32Array(4)) {
        return Ae.fromString(t.toString(), e)
      }

      static fromString(t, e = new Uint32Array(4)) {
        let r = t.startsWith("-"), n = t.length, o = new Ae(e);
        for (let d = r ? 1 : 0; d < n;) {
          let p = Qr < n - d ? Qr : n - d,
              m = new Ae(new Uint32Array([Number.parseInt(t.slice(d, d + p), 10), 0, 0, 0])),
              I = new Ae(new Uint32Array([Ga[p], 0, 0, 0]));
          o.times(I), o.plus(m), d += p
        }
        return r ? o.negate() : o
      }

      static convertArray(t) {
        let e = new Uint32Array(t.length * 4);
        for (let r = -1, n = t.length; ++r < n;) Ae.from(t[r], new Uint32Array(e.buffer, e.byteOffset + 4 * 4 * r, 4));
        return e
      }
    };
    var Un = class extends H {
      constructor(t, e, r, n) {
        super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = r, this.dictionaries = n
      }

      visit(t) {
        return super.visit(t instanceof Q ? t.type : t)
      }

      visitNull(t, {length: e} = this.nextFieldNode()) {
        return J({type: t, length: e})
      }

      visitBool(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitInt(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitFloat(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitUtf8(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          valueOffsets: this.readOffsets(t),
          data: this.readData(t)
        })
      }

      visitBinary(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          valueOffsets: this.readOffsets(t),
          data: this.readData(t)
        })
      }

      visitFixedSizeBinary(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitDate(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitTimestamp(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitTime(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitDecimal(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitList(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          valueOffsets: this.readOffsets(t),
          child: this.visit(t.children[0])
        })
      }

      visitStruct(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          children: this.visitMany(t.children)
        })
      }

      visitUnion(t) {
        return t.mode === Dt.Sparse ? this.visitSparseUnion(t) : this.visitDenseUnion(t)
      }

      visitDenseUnion(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          typeIds: this.readTypeIds(t),
          valueOffsets: this.readOffsets(t),
          children: this.visitMany(t.children)
        })
      }

      visitSparseUnion(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          typeIds: this.readTypeIds(t),
          children: this.visitMany(t.children)
        })
      }

      visitDictionary(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          data: this.readData(t.indices),
          dictionary: this.readDictionary(t)
        })
      }

      visitInterval(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitFixedSizeList(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          child: this.visit(t.children[0])
        })
      }

      visitMap(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return J({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          valueOffsets: this.readOffsets(t),
          child: this.visit(t.children[0])
        })
      }

      nextFieldNode() {
        return this.nodes[++this.nodesIndex]
      }

      nextBufferRange() {
        return this.buffers[++this.buffersIndex]
      }

      readNullBitmap(t, e, r = this.nextBufferRange()) {
        return e > 0 && this.readData(t, r) || new Uint8Array(0)
      }

      readOffsets(t, e) {
        return this.readData(t, e)
      }

      readTypeIds(t, e) {
        return this.readData(t, e)
      }

      readData(t, {length: e, offset: r} = this.nextBufferRange()) {
        return this.bytes.subarray(r, r + e)
      }

      readDictionary(t) {
        return this.dictionaries.get(t.id)
      }
    }, vo = class extends Un {
      constructor(t, e, r, n) {
        super(new Uint8Array(0), e, r, n), this.sources = t
      }

      readNullBitmap(t, e, {offset: r} = this.nextBufferRange()) {
        return e <= 0 ? new Uint8Array(0) : Sr(this.sources[r])
      }

      readOffsets(t, {offset: e} = this.nextBufferRange()) {
        return rt(Uint8Array, rt(Int32Array, this.sources[e]))
      }

      readTypeIds(t, {offset: e} = this.nextBufferRange()) {
        return rt(Uint8Array, rt(t.ArrayType, this.sources[e]))
      }

      readData(t, {offset: e} = this.nextBufferRange()) {
        let {sources: r} = this;
        return L.isTimestamp(t) ? rt(Uint8Array, qt.convertArray(r[e])) : (L.isInt(t) || L.isTime(t)) && t.bitWidth === 64 ? rt(Uint8Array, qt.convertArray(r[e])) : L.isDate(t) && t.unit === ee.MILLISECOND ? rt(Uint8Array, qt.convertArray(r[e])) : L.isDecimal(t) ? rt(Uint8Array, Ae.convertArray(r[e])) : L.isBinary(t) || L.isFixedSizeBinary(t) ? QS(r[e]) : L.isBool(t) ? Sr(r[e]) : L.isUtf8(t) ? tr(r[e].join("")) : rt(Uint8Array, rt(t.ArrayType, r[e].map(n => +n)))
      }
    };

    function QS(i) {
      let t = i.join(""), e = new Uint8Array(t.length / 2);
      for (let r = 0; r < t.length; r += 2) e[r >> 1] = Number.parseInt(t.slice(r, r + 2), 16);
      return e
    }

    var tn = class extends bi {
      constructor(t) {
        super(t), this._values = new or(new Uint8Array(0))
      }

      get byteLength() {
        let t = this._pendingLength + this.length * 4;
        return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t
      }

      setValue(t, e) {
        return super.setValue(t, Y(e))
      }

      _flushPending(t, e) {
        let r = this._offsets, n = this._values.reserve(e).buffer, o = 0;
        for (let [d, p] of t) if (p === void 0) r.set(d, 0); else {
          let m = p.length;
          n.set(p, o), r.set(d, m), o += m
        }
      }
    };
    var go = class extends Bt {
      constructor(t) {
        super(t), this._values = new Kr
      }

      setValue(t, e) {
        this._values.set(t, +e)
      }
    };
    var xr = class extends Xt {
    };
    xr.prototype._setValue = Ta;
    var Ln = class extends xr {
    };
    Ln.prototype._setValue = Xs;
    var Nn = class extends xr {
    };
    Nn.prototype._setValue = Gs;
    var Pn = class extends Xt {
    };
    Pn.prototype._setValue = ka;
    var wo = class extends Bt {
      constructor({type: t, nullValues: e, dictionaryHashFunction: r}) {
        super({type: new Ee(t.dictionary, t.indices, t.id, t.isOrdered)}), this._nulls = null, this._dictionaryOffset = 0, this._keysToIndices = Object.create(null), this.indices = Br({
          type: this.type.indices,
          nullValues: e
        }), this.dictionary = Br({
          type: this.type.dictionary,
          nullValues: null
        }), typeof r == "function" && (this.valueToKey = r)
      }

      get values() {
        return this.indices.values
      }

      get nullCount() {
        return this.indices.nullCount
      }

      get nullBitmap() {
        return this.indices.nullBitmap
      }

      get byteLength() {
        return this.indices.byteLength + this.dictionary.byteLength
      }

      get reservedLength() {
        return this.indices.reservedLength + this.dictionary.reservedLength
      }

      get reservedByteLength() {
        return this.indices.reservedByteLength + this.dictionary.reservedByteLength
      }

      isValid(t) {
        return this.indices.isValid(t)
      }

      setValid(t, e) {
        let r = this.indices;
        return e = r.setValid(t, e), this.length = r.length, e
      }

      setValue(t, e) {
        let r = this._keysToIndices, n = this.valueToKey(e), o = r[n];
        return o === void 0 && (r[n] = o = this._dictionaryOffset + this.dictionary.append(e).length - 1), this.indices.setValue(t, o)
      }

      flush() {
        let t = this.type, e = this._dictionary, r = this.dictionary.toVector(), n = this.indices.flush().clone(t);
        return n.dictionary = e ? e.concat(r) : r, this.finished || (this._dictionaryOffset += r.length), this._dictionary = n.dictionary, this.clear(), n
      }

      finish() {
        return this.indices.finish(), this.dictionary.finish(), this._dictionaryOffset = 0, this._keysToIndices = Object.create(null), super.finish()
      }

      clear() {
        return this.indices.clear(), this.dictionary.clear(), super.clear()
      }

      valueToKey(t) {
        return typeof t == "string" ? t : `${t}`
      }
    };
    var Hn = class extends Xt {
    };
    Hn.prototype._setValue = Ba;
    var jo = class extends Bt {
      setValue(t, e) {
        let [r] = this.children, n = t * this.stride;
        for (let o = -1, d = e.length; ++o < d;) r.set(n + o, e[o])
      }

      addChild(t, e = "0") {
        if (this.numChildren > 0) throw new Error("FixedSizeListBuilder can only have one child.");
        let r = this.children.push(t);
        return this.type = new ni(this.type.listSize, new Q(e, t.type, !0)), r
      }
    };
    var Tr = class extends Xt {
      setValue(t, e) {
        this._values.set(t, e)
      }
    }, So = class extends Tr {
      setValue(t, e) {
        super.setValue(t, Sn(e))
      }
    }, Io = class extends Tr {
    }, Co = class extends Tr {
    };
    var Dr = class extends Xt {
    };
    Dr.prototype._setValue = Oa;
    var Vn = class extends Dr {
    };
    Vn.prototype._setValue = ro;
    var zn = class extends Dr {
    };
    zn.prototype._setValue = no;
    var Ye = class extends Xt {
      setValue(t, e) {
        this._values.set(t, e)
      }
    }, Fo = class extends Ye {
    }, Ao = class extends Ye {
    }, xo = class extends Ye {
    }, Bo = class extends Ye {
    }, To = class extends Ye {
    }, Do = class extends Ye {
    }, Eo = class extends Ye {
    }, ko = class extends Ye {
    };
    var Oo = class extends bi {
      constructor(t) {
        super(t), this._offsets = new Jr
      }

      addChild(t, e = "0") {
        if (this.numChildren > 0) throw new Error("ListBuilder can only have one child.");
        return this.children[this.numChildren] = t, this.type = new ii(new Q(e, t.type, !0)), this.numChildren - 1
      }

      _flushPending(t) {
        let e = this._offsets, [r] = this.children;
        for (let [n, o] of t) if (typeof o > "u") e.set(n, 0); else {
          let d = o.length, p = e.set(n, d).buffer[n];
          for (let m = -1; ++m < d;) r.set(p + m, o[m])
        }
      }
    };
    var Ro = class extends bi {
      set(t, e) {
        return super.set(t, e)
      }

      setValue(t, e) {
        let r = e instanceof Map ? e : new Map(Object.entries(e)), n = this._pending || (this._pending = new Map),
            o = n.get(t);
        o && (this._pendingLength -= o.size), this._pendingLength += r.size, n.set(t, r)
      }

      addChild(t, e = `${this.numChildren}`) {
        if (this.numChildren > 0) throw new Error("ListBuilder can only have one child.");
        return this.children[this.numChildren] = t, this.type = new si(new Q(e, t.type, !0), this.type.keysSorted), this.numChildren - 1
      }

      _flushPending(t) {
        let e = this._offsets, [r] = this.children;
        for (let [n, o] of t) if (o === void 0) e.set(n, 0); else {
          let {[n]: d, [n + 1]: p} = e.set(n, o.size).buffer;
          for (let m of o.entries()) if (r.set(d, m), ++d >= p) break
        }
      }
    };
    var Mo = class extends Bt {
      setValue(t, e) {
      }

      setValid(t, e) {
        return this.length = Math.max(t + 1, this.length), e
      }
    };
    var Uo = class extends Bt {
      setValue(t, e) {
        let {children: r, type: n} = this;
        switch (Array.isArray(e) || e.constructor) {
          case!0:
            return n.children.forEach((o, d) => r[d].set(t, e[d]));
          case Map:
            return n.children.forEach((o, d) => r[d].set(t, e.get(o.name)));
          default:
            return n.children.forEach((o, d) => r[d].set(t, e[o.name]))
        }
      }

      setValid(t, e) {
        return super.setValid(t, e) || this.children.forEach(r => r.setValid(t, e)), e
      }

      addChild(t, e = `${this.numChildren}`) {
        let r = this.children.push(t);
        return this.type = new St([...this.type.children, new Q(e, t.type, !0)]), r
      }
    };
    var Yi = class extends Xt {
    };
    Yi.prototype._setValue = Da;
    var Wn = class extends Yi {
    };
    Wn.prototype._setValue = Ks;
    var $n = class extends Yi {
    };
    $n.prototype._setValue = Js;
    var Yn = class extends Yi {
    };
    Yn.prototype._setValue = qs;
    var Xn = class extends Yi {
    };
    Xn.prototype._setValue = Zs;
    var Xi = class extends Xt {
    };
    Xi.prototype._setValue = Ea;
    var Gn = class extends Xi {
    };
    Gn.prototype._setValue = Qs;
    var Kn = class extends Xi {
    };
    Kn.prototype._setValue = to;
    var Jn = class extends Xi {
    };
    Jn.prototype._setValue = eo;
    var qn = class extends Xi {
    };
    qn.prototype._setValue = io;
    var en = class extends Bt {
      constructor(t) {
        super(t), this._typeIds = new Vi(new Int8Array(0), 1), typeof t.valueToChildTypeId == "function" && (this._valueToChildTypeId = t.valueToChildTypeId)
      }

      get typeIdToChildIndex() {
        return this.type.typeIdToChildIndex
      }

      append(t, e) {
        return this.set(this.length, t, e)
      }

      set(t, e, r) {
        return r === void 0 && (r = this._valueToChildTypeId(this, e, t)), this.setValid(t, this.isValid(e)) && this.setValue(t, e, r), this
      }

      setValue(t, e, r) {
        this._typeIds.set(t, r);
        let n = this.type.typeIdToChildIndex[r], o = this.children[n];
        o == null || o.set(t, e)
      }

      addChild(t, e = `${this.children.length}`) {
        let r = this.children.push(t), {type: {children: n, mode: o, typeIds: d}} = this, p = [...n, new Q(e, t.type)];
        return this.type = new ri(o, [...d, r], p), r
      }

      _valueToChildTypeId(t, e, r) {
        throw new Error("Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.")
      }
    }, Lo = class extends en {
    }, No = class extends en {
      constructor(t) {
        super(t), this._offsets = new Vi(new Int32Array(0))
      }

      setValue(t, e, r) {
        let n = this._typeIds.set(t, r).buffer[t], o = this.getChildAt(this.type.typeIdToChildIndex[n]),
            d = this._offsets.set(t, o.length).buffer[t];
        o == null || o.set(d, e)
      }
    };
    var Zn = class extends bi {
      constructor(t) {
        super(t), this._values = new or(new Uint8Array(0))
      }

      get byteLength() {
        let t = this._pendingLength + this.length * 4;
        return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t
      }

      setValue(t, e) {
        return super.setValue(t, tr(e))
      }

      _flushPending(t, e) {
      }
    };
    Zn.prototype._flushPending = tn.prototype._flushPending;
    var Ja = class extends H {
      visitNull() {
        return Mo
      }

      visitBool() {
        return go
      }

      visitInt() {
        return Ye
      }

      visitInt8() {
        return Fo
      }

      visitInt16() {
        return Ao
      }

      visitInt32() {
        return xo
      }

      visitInt64() {
        return Bo
      }

      visitUint8() {
        return To
      }

      visitUint16() {
        return Do
      }

      visitUint32() {
        return Eo
      }

      visitUint64() {
        return ko
      }

      visitFloat() {
        return Tr
      }

      visitFloat16() {
        return So
      }

      visitFloat32() {
        return Io
      }

      visitFloat64() {
        return Co
      }

      visitUtf8() {
        return Zn
      }

      visitBinary() {
        return tn
      }

      visitFixedSizeBinary() {
        return Hn
      }

      visitDate() {
        return xr
      }

      visitDateDay() {
        return Ln
      }

      visitDateMillisecond() {
        return Nn
      }

      visitTimestamp() {
        return Yi
      }

      visitTimestampSecond() {
        return Wn
      }

      visitTimestampMillisecond() {
        return $n
      }

      visitTimestampMicrosecond() {
        return Yn
      }

      visitTimestampNanosecond() {
        return Xn
      }

      visitTime() {
        return Xi
      }

      visitTimeSecond() {
        return Gn
      }

      visitTimeMillisecond() {
        return Kn
      }

      visitTimeMicrosecond() {
        return Jn
      }

      visitTimeNanosecond() {
        return qn
      }

      visitDecimal() {
        return Pn
      }

      visitList() {
        return Oo
      }

      visitStruct() {
        return Uo
      }

      visitUnion() {
        return en
      }

      visitDenseUnion() {
        return No
      }

      visitSparseUnion() {
        return Lo
      }

      visitDictionary() {
        return wo
      }

      visitInterval() {
        return Dr
      }

      visitIntervalDayTime() {
        return Vn
      }

      visitIntervalYearMonth() {
        return zn
      }

      visitFixedSizeList() {
        return jo
      }

      visitMap() {
        return Ro
      }
    }, jp = new Ja;
    var $ = class extends H {
      compareSchemas(t, e) {
        return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields)
      }

      compareManyFields(t, e) {
        return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every((r, n) => this.compareFields(r, e[n]))
      }

      compareFields(t, e) {
        return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type)
      }
    };

    function xe(i, t) {
      return t instanceof i.constructor
    }

    function Qn(i, t) {
      return i === t || xe(i, t)
    }

    function Gi(i, t) {
      return i === t || xe(i, t) && i.bitWidth === t.bitWidth && i.isSigned === t.isSigned
    }

    function Po(i, t) {
      return i === t || xe(i, t) && i.precision === t.precision
    }

    function tI(i, t) {
      return i === t || xe(i, t) && i.byteWidth === t.byteWidth
    }

    function qa(i, t) {
      return i === t || xe(i, t) && i.unit === t.unit
    }

    function ts(i, t) {
      return i === t || xe(i, t) && i.unit === t.unit && i.timezone === t.timezone
    }

    function es(i, t) {
      return i === t || xe(i, t) && i.unit === t.unit && i.bitWidth === t.bitWidth
    }

    function eI(i, t) {
      return i === t || xe(i, t) && i.children.length === t.children.length && xi.compareManyFields(i.children, t.children)
    }

    function iI(i, t) {
      return i === t || xe(i, t) && i.children.length === t.children.length && xi.compareManyFields(i.children, t.children)
    }

    function Za(i, t) {
      return i === t || xe(i, t) && i.mode === t.mode && i.typeIds.every((e, r) => e === t.typeIds[r]) && xi.compareManyFields(i.children, t.children)
    }

    function rI(i, t) {
      return i === t || xe(i, t) && i.id === t.id && i.isOrdered === t.isOrdered && xi.visit(i.indices, t.indices) && xi.visit(i.dictionary, t.dictionary)
    }

    function Qa(i, t) {
      return i === t || xe(i, t) && i.unit === t.unit
    }

    function nI(i, t) {
      return i === t || xe(i, t) && i.listSize === t.listSize && i.children.length === t.children.length && xi.compareManyFields(i.children, t.children)
    }

    function sI(i, t) {
      return i === t || xe(i, t) && i.keysSorted === t.keysSorted && i.children.length === t.children.length && xi.compareManyFields(i.children, t.children)
    }

    $.prototype.visitNull = Qn;
    $.prototype.visitBool = Qn;
    $.prototype.visitInt = Gi;
    $.prototype.visitInt8 = Gi;
    $.prototype.visitInt16 = Gi;
    $.prototype.visitInt32 = Gi;
    $.prototype.visitInt64 = Gi;
    $.prototype.visitUint8 = Gi;
    $.prototype.visitUint16 = Gi;
    $.prototype.visitUint32 = Gi;
    $.prototype.visitUint64 = Gi;
    $.prototype.visitFloat = Po;
    $.prototype.visitFloat16 = Po;
    $.prototype.visitFloat32 = Po;
    $.prototype.visitFloat64 = Po;
    $.prototype.visitUtf8 = Qn;
    $.prototype.visitBinary = Qn;
    $.prototype.visitFixedSizeBinary = tI;
    $.prototype.visitDate = qa;
    $.prototype.visitDateDay = qa;
    $.prototype.visitDateMillisecond = qa;
    $.prototype.visitTimestamp = ts;
    $.prototype.visitTimestampSecond = ts;
    $.prototype.visitTimestampMillisecond = ts;
    $.prototype.visitTimestampMicrosecond = ts;
    $.prototype.visitTimestampNanosecond = ts;
    $.prototype.visitTime = es;
    $.prototype.visitTimeSecond = es;
    $.prototype.visitTimeMillisecond = es;
    $.prototype.visitTimeMicrosecond = es;
    $.prototype.visitTimeNanosecond = es;
    $.prototype.visitDecimal = Qn;
    $.prototype.visitList = eI;
    $.prototype.visitStruct = iI;
    $.prototype.visitUnion = Za;
    $.prototype.visitDenseUnion = Za;
    $.prototype.visitSparseUnion = Za;
    $.prototype.visitDictionary = rI;
    $.prototype.visitInterval = Qa;
    $.prototype.visitIntervalDayTime = Qa;
    $.prototype.visitIntervalYearMonth = Qa;
    $.prototype.visitFixedSizeList = nI;
    $.prototype.visitMap = sI;
    var xi = new $;

    function Er(i, t) {
      return xi.compareSchemas(i, t)
    }

    function Sp(i, t) {
      return xi.compareFields(i, t)
    }

    function Ip(i, t) {
      return xi.visit(i, t)
    }

    function Br(i) {
      let t = i.type, e = new (jp.getVisitFn(t)())(i);
      if (t.children && t.children.length > 0) {
        let r = i.children || [], n = {nullValues: i.nullValues},
            o = Array.isArray(r) ? (d, p) => r[p] || n : ({name: d}) => r[d] || n;
        for (let [d, p] of t.children.entries()) {
          let {type: m} = p, I = o(p, d);
          e.children.push(Br(Object.assign(Object.assign({}, I), {type: m})))
        }
      }
      return e
    }

    function Ho(i, t) {
      return oI(i, t.map(e => e.data.concat()))
    }

    function oI(i, t) {
      let e = [...i.fields], r = [], n = {numBatches: t.reduce((E, T) => Math.max(E, T.length), 0)}, o = 0, d = 0,
          p = -1, m = t.length, I, A = [];
      for (; n.numBatches-- > 0;) {
        for (d = Number.POSITIVE_INFINITY, p = -1; ++p < m;) A[p] = I = t[p].shift(), d = Math.min(d, I ? I.length : d);
        Number.isFinite(d) && (A = aI(e, d, A, t, n), d > 0 && (r[o++] = J({
          type: new St(e),
          length: d,
          nullCount: 0,
          children: A.slice()
        })))
      }
      return [i = i.assign(e), r.map(E => new jt(i, E))]
    }

    function aI(i, t, e, r, n) {
      var o;
      let d = (t + 63 & -64) >> 3;
      for (let p = -1, m = r.length; ++p < m;) {
        let I = e[p], A = I == null ? void 0 : I.length;
        if (A >= t) A === t ? e[p] = I : (e[p] = I.slice(0, t), n.numBatches = Math.max(n.numBatches, r[p].unshift(I.slice(t, A - t)))); else {
          let E = i[p];
          i[p] = E.clone({nullable: !0}), e[p] = (o = I == null ? void 0 : I._changeLengthAndBackfillNullBitmap(t)) !== null && o !== void 0 ? o : J({
            type: E.type,
            length: t,
            nullCount: t,
            nullBitmap: new Uint8Array(d)
          })
        }
      }
      return e
    }

    var Cp, Rt = class {
      constructor(...t) {
        var e, r;
        if (t.length === 0) return this.batches = [], this.schema = new at([]), this._offsets = [0], this;
        let n, o;
        t[0] instanceof at && (n = t.shift()), t[t.length - 1] instanceof Uint32Array && (o = t.pop());
        let d = m => {
          if (m) {
            if (m instanceof jt) return [m];
            if (m instanceof Rt) return m.batches;
            if (m instanceof yt) {
              if (m.type instanceof St) return [new jt(new at(m.type.children), m)]
            } else {
              if (Array.isArray(m)) return m.flatMap(I => d(I));
              if (typeof m[Symbol.iterator] == "function") return [...m].flatMap(I => d(I));
              if (typeof m == "object") {
                let I = Object.keys(m), A = I.map(k => new G([m[k]])),
                    E = new at(I.map((k, lt) => new Q(String(k), A[lt].type))), [, T] = Ho(E, A);
                return T.length === 0 ? [new jt(m)] : T
              }
            }
          }
          return []
        }, p = t.flatMap(m => d(m));
        if (n = (r = n != null ? n : (e = p[0]) === null || e === void 0 ? void 0 : e.schema) !== null && r !== void 0 ? r : new at([]), !(n instanceof at)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
        for (let m of p) {
          if (!(m instanceof jt)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
          if (!Er(n, m.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")
        }
        this.schema = n, this.batches = p, this._offsets = o != null ? o : co(this.data)
      }

      get data() {
        return this.batches.map(({data: t}) => t)
      }

      get numCols() {
        return this.schema.fields.length
      }

      get numRows() {
        return this.data.reduce((t, e) => t + e.length, 0)
      }

      get nullCount() {
        return this._nullCount === -1 && (this._nullCount = lo(this.data)), this._nullCount
      }

      isValid(t) {
        return !1
      }

      get(t) {
        return null
      }

      set(t, e) {
      }

      indexOf(t, e) {
        return -1
      }

      getByteLength(t) {
        return 0
      }

      [Symbol.iterator]() {
        return this.batches.length > 0 ? Xr.visit(new G(this.data)) : new Array(0)[Symbol.iterator]()
      }

      toArray() {
        return [...this]
      }

      toString() {
        return `[
  ${this.toArray().join(`,
  `)}
]`
      }

      concat(...t) {
        let e = this.schema, r = this.data.concat(t.flatMap(({data: n}) => n));
        return new Rt(e, r.map(n => new jt(e, n)))
      }

      slice(t, e) {
        let r = this.schema;
        [t, e] = In({length: this.numRows}, t, e);
        let n = uo(this.data, this._offsets, t, e);
        return new Rt(r, n.map(o => new jt(r, o)))
      }

      getChild(t) {
        return this.getChildAt(this.schema.fields.findIndex(e => e.name === t))
      }

      getChildAt(t) {
        if (t > -1 && t < this.schema.fields.length) {
          let e = this.data.map(r => r.children[t]);
          if (e.length === 0) {
            let {type: r} = this.schema.fields[t], n = J({type: r, length: 0, nullCount: 0});
            e.push(n._changeLengthAndBackfillNullBitmap(this.numRows))
          }
          return new G(e)
        }
        return null
      }

      setChild(t, e) {
        var r;
        return this.setChildAt((r = this.schema.fields) === null || r === void 0 ? void 0 : r.findIndex(n => n.name === t), e)
      }

      setChildAt(t, e) {
        let r = this.schema, n = [...this.batches];
        if (t > -1 && t < this.numCols) {
          e || (e = new G([J({type: new pe, length: this.numRows})]));
          let o = r.fields.slice(), d = o[t].clone({type: e.type}),
              p = this.schema.fields.map((m, I) => this.getChildAt(I));
          [o[t], p[t]] = [d, e], [r, n] = Ho(r, p)
        }
        return new Rt(r, n)
      }

      select(t) {
        let e = this.schema.fields.reduce((r, n, o) => r.set(n.name, o), new Map);
        return this.selectAt(t.map(r => e.get(r)).filter(r => r > -1))
      }

      selectAt(t) {
        let e = this.schema.selectAt(t), r = this.batches.map(n => n.selectAt(t));
        return new Rt(e, r)
      }

      assign(t) {
        let e = this.schema.fields, [r, n] = t.schema.fields.reduce((p, m, I) => {
              let [A, E] = p, T = e.findIndex(k => k.name === m.name);
              return ~T ? E[T] = I : A.push(I), p
            }, [[], []]), o = this.schema.assign(t.schema),
            d = [...e.map((p, m) => [m, n[m]]).map(([p, m]) => m === void 0 ? this.getChildAt(p) : t.getChildAt(m)), ...r.map(p => t.getChildAt(p))].filter(Boolean);
        return new Rt(...Ho(o, d))
      }
    };
    Cp = Symbol.toStringTag;
    Rt[Cp] = (i => (i.schema = null, i.batches = [], i._offsets = new Uint32Array([0]), i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, i.isValid = sr(An), i.get = sr(Nt.getVisitFn(F.Struct)), i.set = fo(ie.getVisitFn(F.Struct)), i.indexOf = ho(Cr.getVisitFn(F.Struct)), i.getByteLength = sr(Oe.getVisitFn(F.Struct)), "Table"))(Rt.prototype);
    var Ap, jt = class {
      constructor(...t) {
        switch (t.length) {
          case 2: {
            if ([this.schema] = t, !(this.schema instanceof at)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
            if ([, this.data = J({
              nullCount: 0,
              type: new St(this.schema.fields),
              children: this.schema.fields.map(e => J({type: e.type, nullCount: 0}))
            })] = t, !(this.data instanceof yt)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
            [this.schema, this.data] = Fp(this.schema, this.data.children);
            break
          }
          case 1: {
            let [e] = t, {
                  fields: r,
                  children: n,
                  length: o
                } = Object.keys(e).reduce((m, I, A) => (m.children[A] = e[I], m.length = Math.max(m.length, e[I].length), m.fields[A] = Q.new({
                  name: I,
                  type: e[I].type,
                  nullable: !0
                }), m), {length: 0, fields: new Array, children: new Array}), d = new at(r),
                p = J({type: new St(r), length: o, children: n, nullCount: 0});
            [this.schema, this.data] = Fp(d, p.children, o);
            break
          }
          default:
            throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")
        }
      }

      get dictionaries() {
        return this._dictionaries || (this._dictionaries = xp(this.schema.fields, this.data.children))
      }

      get numCols() {
        return this.schema.fields.length
      }

      get numRows() {
        return this.data.length
      }

      get nullCount() {
        return this.data.nullCount
      }

      isValid(t) {
        return this.data.getValid(t)
      }

      get(t) {
        return Nt.visit(this.data, t)
      }

      set(t, e) {
        return ie.visit(this.data, t, e)
      }

      indexOf(t, e) {
        return Cr.visit(this.data, t, e)
      }

      getByteLength(t) {
        return Oe.visit(this.data, t)
      }

      [Symbol.iterator]() {
        return Xr.visit(new G([this.data]))
      }

      toArray() {
        return [...this]
      }

      concat(...t) {
        return new Rt(this.schema, [this, ...t])
      }

      slice(t, e) {
        let [r] = new G([this.data]).slice(t, e).data;
        return new jt(this.schema, r)
      }

      getChild(t) {
        var e;
        return this.getChildAt((e = this.schema.fields) === null || e === void 0 ? void 0 : e.findIndex(r => r.name === t))
      }

      getChildAt(t) {
        return t > -1 && t < this.schema.fields.length ? new G([this.data.children[t]]) : null
      }

      setChild(t, e) {
        var r;
        return this.setChildAt((r = this.schema.fields) === null || r === void 0 ? void 0 : r.findIndex(n => n.name === t), e)
      }

      setChildAt(t, e) {
        let r = this.schema, n = this.data;
        if (t > -1 && t < this.numCols) {
          e || (e = new G([J({type: new pe, length: this.numRows})]));
          let o = r.fields.slice(), d = n.children.slice(), p = o[t].clone({type: e.type});
          [o[t], d[t]] = [p, e.data[0]], r = new at(o, new Map(this.schema.metadata)), n = J({
            type: new St(o),
            children: d
          })
        }
        return new jt(r, n)
      }

      select(t) {
        let e = this.schema.select(t), r = new St(e.fields), n = [];
        for (let o of t) {
          let d = this.schema.fields.findIndex(p => p.name === o);
          ~d && (n[d] = this.data.children[d])
        }
        return new jt(e, J({type: r, length: this.numRows, children: n}))
      }

      selectAt(t) {
        let e = this.schema.selectAt(t), r = t.map(o => this.data.children[o]).filter(Boolean),
            n = J({type: new St(e.fields), length: this.numRows, children: r});
        return new jt(e, n)
      }
    };
    Ap = Symbol.toStringTag;
    jt[Ap] = (i => (i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(jt.prototype);

    function Fp(i, t, e = t.reduce((r, n) => Math.max(r, n.length), 0)) {
      var r;
      let n = [...i.fields], o = [...t], d = (e + 63 & -64) >> 3;
      for (let [p, m] of i.fields.entries()) {
        let I = t[p];
        (!I || I.length !== e) && (n[p] = m.clone({nullable: !0}), o[p] = (r = I == null ? void 0 : I._changeLengthAndBackfillNullBitmap(e)) !== null && r !== void 0 ? r : J({
          type: m.type,
          length: e,
          nullCount: e,
          nullBitmap: new Uint8Array(d)
        }))
      }
      return [i.assign(n), J({type: new St(n), length: e, children: o})]
    }

    function xp(i, t, e = new Map) {
      for (let r = -1, n = i.length; ++r < n;) {
        let d = i[r].type, p = t[r];
        if (L.isDictionary(d)) {
          if (!e.has(d.id)) p.dictionary && e.set(d.id, p.dictionary); else if (e.get(d.id) !== p.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id")
        }
        d.children && d.children.length > 0 && xp(d.children, p.children, e)
      }
      return e
    }

    var kr = class extends jt {
      constructor(t) {
        let e = t.fields.map(n => J({type: n.type})), r = J({type: new St(t.fields), nullCount: 0, children: e});
        super(t, r)
      }
    };
    var is;
    (function (i) {
      i[i.BUFFER = 0] = "BUFFER"
    })(is || (is = {}));
    var rs;
    (function (i) {
      i[i.LZ4_FRAME = 0] = "LZ4_FRAME", i[i.ZSTD = 1] = "ZSTD"
    })(rs || (rs = {}));
    var ci = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsBodyCompression(t, e) {
        return (e || new ci).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsBodyCompression(t, e) {
        return t.setPosition(t.position() + 4), (e || new ci).__init(t.readInt32(t.position()) + t.position(), t)
      }

      codec() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt8(this.bb_pos + t) : rs.LZ4_FRAME
      }

      method() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readInt8(this.bb_pos + t) : is.BUFFER
      }

      static startBodyCompression(t) {
        t.startObject(2)
      }

      static addCodec(t, e) {
        t.addFieldInt8(0, e, rs.LZ4_FRAME)
      }

      static addMethod(t, e) {
        t.addFieldInt8(1, e, is.BUFFER)
      }

      static endBodyCompression(t) {
        return t.endObject()
      }

      static createBodyCompression(t, e, r) {
        return ci.startBodyCompression(t), ci.addCodec(t, e), ci.addMethod(t, r), ci.endBodyCompression(t)
      }
    };
    var rn = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      offset() {
        return this.bb.readInt64(this.bb_pos)
      }

      length() {
        return this.bb.readInt64(this.bb_pos + 8)
      }

      static sizeOf() {
        return 16
      }

      static createBuffer(t, e, r) {
        return t.prep(8, 16), t.writeInt64(r), t.writeInt64(e), t.offset()
      }
    };
    var nn = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      length() {
        return this.bb.readInt64(this.bb_pos)
      }

      nullCount() {
        return this.bb.readInt64(this.bb_pos + 8)
      }

      static sizeOf() {
        return 16
      }

      static createFieldNode(t, e, r) {
        return t.prep(8, 16), t.writeInt64(r), t.writeInt64(e), t.offset()
      }
    };
    var le = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsRecordBatch(t, e) {
        return (e || new le).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsRecordBatch(t, e) {
        return t.setPosition(t.position() + 4), (e || new le).__init(t.readInt32(t.position()) + t.position(), t)
      }

      length() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
      }

      nodes(t, e) {
        let r = this.bb.__offset(this.bb_pos, 6);
        return r ? (e || new nn).__init(this.bb.__vector(this.bb_pos + r) + t * 16, this.bb) : null
      }

      nodesLength() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      buffers(t, e) {
        let r = this.bb.__offset(this.bb_pos, 8);
        return r ? (e || new rn).__init(this.bb.__vector(this.bb_pos + r) + t * 16, this.bb) : null
      }

      buffersLength() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      compression(t) {
        let e = this.bb.__offset(this.bb_pos, 10);
        return e ? (t || new ci).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
      }

      static startRecordBatch(t) {
        t.startObject(4)
      }

      static addLength(t, e) {
        t.addFieldInt64(0, e, t.createLong(0, 0))
      }

      static addNodes(t, e) {
        t.addFieldOffset(1, e, 0)
      }

      static startNodesVector(t, e) {
        t.startVector(16, e, 8)
      }

      static addBuffers(t, e) {
        t.addFieldOffset(2, e, 0)
      }

      static startBuffersVector(t, e) {
        t.startVector(16, e, 8)
      }

      static addCompression(t, e) {
        t.addFieldOffset(3, e, 0)
      }

      static endRecordBatch(t) {
        return t.endObject()
      }
    };
    var Xe = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsDictionaryBatch(t, e) {
        return (e || new Xe).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsDictionaryBatch(t, e) {
        return t.setPosition(t.position() + 4), (e || new Xe).__init(t.readInt32(t.position()) + t.position(), t)
      }

      id() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
      }

      data(t) {
        let e = this.bb.__offset(this.bb_pos, 6);
        return e ? (t || new le).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
      }

      isDelta() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? !!this.bb.readInt8(this.bb_pos + t) : !1
      }

      static startDictionaryBatch(t) {
        t.startObject(3)
      }

      static addId(t, e) {
        t.addFieldInt64(0, e, t.createLong(0, 0))
      }

      static addData(t, e) {
        t.addFieldOffset(1, e, 0)
      }

      static addIsDelta(t, e) {
        t.addFieldInt8(2, +e, 0)
      }

      static endDictionaryBatch(t) {
        return t.endObject()
      }
    };
    var sn;
    (function (i) {
      i[i.NONE = 0] = "NONE", i[i.Schema = 1] = "Schema", i[i.DictionaryBatch = 2] = "DictionaryBatch", i[i.RecordBatch = 3] = "RecordBatch", i[i.Tensor = 4] = "Tensor", i[i.SparseTensor = 5] = "SparseTensor"
    })(sn || (sn = {}));
    var Ut = class {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsMessage(t, e) {
        return (e || new Ut).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsMessage(t, e) {
        return t.setPosition(t.position() + 4), (e || new Ut).__init(t.readInt32(t.position()) + t.position(), t)
      }

      version() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : ar.V1
      }

      headerType() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readUint8(this.bb_pos + t) : sn.NONE
      }

      header(t) {
        let e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__union(t, this.bb_pos + e) : null
      }

      bodyLength() {
        let t = this.bb.__offset(this.bb_pos, 10);
        return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
      }

      customMetadata(t, e) {
        let r = this.bb.__offset(this.bb_pos, 12);
        return r ? (e || new It).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      customMetadataLength() {
        let t = this.bb.__offset(this.bb_pos, 12);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      static startMessage(t) {
        t.startObject(5)
      }

      static addVersion(t, e) {
        t.addFieldInt16(0, e, ar.V1)
      }

      static addHeaderType(t, e) {
        t.addFieldInt8(1, e, sn.NONE)
      }

      static addHeader(t, e) {
        t.addFieldOffset(2, e, 0)
      }

      static addBodyLength(t, e) {
        t.addFieldInt64(3, e, t.createLong(0, 0))
      }

      static addCustomMetadata(t, e) {
        t.addFieldOffset(4, e, 0)
      }

      static createCustomMetadataVector(t, e) {
        t.startVector(4, e.length, 4);
        for (let r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
        return t.endVector()
      }

      static startCustomMetadataVector(t, e) {
        t.startVector(4, e, 4)
      }

      static endMessage(t) {
        return t.endObject()
      }

      static finishMessageBuffer(t, e) {
        t.finish(e)
      }

      static finishSizePrefixedMessageBuffer(t, e) {
        t.finish(e, void 0, !0)
      }

      static createMessage(t, e, r, n, o, d) {
        return Ut.startMessage(t), Ut.addVersion(t, e), Ut.addHeaderType(t, r), Ut.addHeader(t, n), Ut.addBodyLength(t, o), Ut.addCustomMetadata(t, d), Ut.endMessage(t)
      }
    };
    var cI = Pt, tl = class extends H {
      visit(t, e) {
        return t == null || e == null ? void 0 : super.visit(t, e)
      }

      visitNull(t, e) {
        return Si.startNull(e), Si.endNull(e)
      }

      visitInt(t, e) {
        return Gt.startInt(e), Gt.addBitWidth(e, t.bitWidth), Gt.addIsSigned(e, t.isSigned), Gt.endInt(e)
      }

      visitFloat(t, e) {
        return Se.startFloatingPoint(e), Se.addPrecision(e, t.precision), Se.endFloatingPoint(e)
      }

      visitBinary(t, e) {
        return gi.startBinary(e), gi.endBinary(e)
      }

      visitBool(t, e) {
        return wi.startBool(e), wi.endBool(e)
      }

      visitUtf8(t, e) {
        return Ci.startUtf8(e), Ci.endUtf8(e)
      }

      visitDecimal(t, e) {
        return Kt.startDecimal(e), Kt.addScale(e, t.scale), Kt.addPrecision(e, t.precision), Kt.addBitWidth(e, t.bitWidth), Kt.endDecimal(e)
      }

      visitDate(t, e) {
        return ge.startDate(e), ge.addUnit(e, t.unit), ge.endDate(e)
      }

      visitTime(t, e) {
        return se.startTime(e), se.addUnit(e, t.unit), se.addBitWidth(e, t.bitWidth), se.endTime(e)
      }

      visitTimestamp(t, e) {
        let r = t.timezone && e.createString(t.timezone) || void 0;
        return oe.startTimestamp(e), oe.addUnit(e, t.unit), r !== void 0 && oe.addTimezone(e, r), oe.endTimestamp(e)
      }

      visitInterval(t, e) {
        return Ie.startInterval(e), Ie.addUnit(e, t.unit), Ie.endInterval(e)
      }

      visitList(t, e) {
        return ji.startList(e), ji.endList(e)
      }

      visitStruct(t, e) {
        return Ii.startStruct_(e), Ii.endStruct_(e)
      }

      visitUnion(t, e) {
        Jt.startTypeIdsVector(e, t.typeIds.length);
        let r = Jt.createTypeIdsVector(e, t.typeIds);
        return Jt.startUnion(e), Jt.addMode(e, t.mode), Jt.addTypeIds(e, r), Jt.endUnion(e)
      }

      visitDictionary(t, e) {
        let r = this.visit(t.indices, e);
        return Re.startDictionaryEncoding(e), Re.addId(e, new cI(t.id, 0)), Re.addIsOrdered(e, t.isOrdered), r !== void 0 && Re.addIndexType(e, r), Re.endDictionaryEncoding(e)
      }

      visitFixedSizeBinary(t, e) {
        return we.startFixedSizeBinary(e), we.addByteWidth(e, t.byteWidth), we.endFixedSizeBinary(e)
      }

      visitFixedSizeList(t, e) {
        return je.startFixedSizeList(e), je.addListSize(e, t.listSize), je.endFixedSizeList(e)
      }

      visitMap(t, e) {
        return Ce.startMap(e), Ce.addKeysSorted(e, t.keysSorted), Ce.endMap(e)
      }
    }, Vo = new tl;

    function Ep(i, t = new Map) {
      return new at(uI(i, t), zo(i.customMetadata), t)
    }

    function el(i) {
      return new re(i.count, Op(i.columns), Rp(i.columns))
    }

    function kp(i) {
      return new Te(el(i.data), i.id, i.isDelta)
    }

    function uI(i, t) {
      return (i.fields || []).filter(Boolean).map(e => Q.fromJSON(e, t))
    }

    function Bp(i, t) {
      return (i.children || []).filter(Boolean).map(e => Q.fromJSON(e, t))
    }

    function Op(i) {
      return (i || []).reduce((t, e) => [...t, new ui(e.count, dI(e.VALIDITY)), ...Op(e.children)], [])
    }

    function Rp(i, t = []) {
      for (let e = -1, r = (i || []).length; ++e < r;) {
        let n = i[e];
        n.VALIDITY && t.push(new Be(t.length, n.VALIDITY.length)), n.TYPE && t.push(new Be(t.length, n.TYPE.length)), n.OFFSET && t.push(new Be(t.length, n.OFFSET.length)), n.DATA && t.push(new Be(t.length, n.DATA.length)), t = Rp(n.children, t)
      }
      return t
    }

    function dI(i) {
      return (i || []).reduce((t, e) => t + +(e === 0), 0)
    }

    function Mp(i, t) {
      let e, r, n, o, d, p;
      return !t || !(o = i.dictionary) ? (d = Dp(i, Bp(i, t)), n = new Q(i.name, d, i.nullable, zo(i.customMetadata))) : t.has(e = o.id) ? (r = (r = o.indexType) ? Tp(r) : new yi, p = new Ee(t.get(e), r, e, o.isOrdered), n = new Q(i.name, p, i.nullable, zo(i.customMetadata))) : (r = (r = o.indexType) ? Tp(r) : new yi, t.set(e, d = Dp(i, Bp(i, t))), p = new Ee(d, r, e, o.isOrdered), n = new Q(i.name, p, i.nullable, zo(i.customMetadata))), n || null
    }

    function zo(i) {
      return new Map(Object.entries(i || {}))
    }

    function Tp(i) {
      return new Mt(i.isSigned, i.bitWidth)
    }

    function Dp(i, t) {
      let e = i.type.name;
      switch (e) {
        case"NONE":
          return new pe;
        case"null":
          return new pe;
        case"binary":
          return new ki;
        case"utf8":
          return new Oi;
        case"bool":
          return new Ri;
        case"list":
          return new ii((t || [])[0]);
        case"struct":
          return new St(t || []);
        case"struct_":
          return new St(t || [])
      }
      switch (e) {
        case"int": {
          let r = i.type;
          return new Mt(r.isSigned, r.bitWidth)
        }
        case"floatingpoint": {
          let r = i.type;
          return new ve(xt[r.precision])
        }
        case"decimal": {
          let r = i.type;
          return new Mi(r.scale, r.precision, r.bitWidth)
        }
        case"date": {
          let r = i.type;
          return new Ui(ee[r.unit])
        }
        case"time": {
          let r = i.type;
          return new ei(st[r.unit], r.bitWidth)
        }
        case"timestamp": {
          let r = i.type;
          return new Li(st[r.unit], r.timezone)
        }
        case"interval": {
          let r = i.type;
          return new Ni(he[r.unit])
        }
        case"union": {
          let r = i.type;
          return new ri(Dt[r.mode], r.typeIds || [], t || [])
        }
        case"fixedsizebinary": {
          let r = i.type;
          return new Pi(r.byteWidth)
        }
        case"fixedsizelist": {
          let r = i.type;
          return new ni(r.listSize, (t || [])[0])
        }
        case"map": {
          let r = i.type;
          return new si((t || [])[0], r.keysSorted)
        }
      }
      throw new Error(`Unrecognized type: "${e}"`)
    }

    var Or = Pt, fI = zi, hI = ye, Vt = class {
      constructor(t, e, r, n) {
        this._version = e, this._headerType = r, this.body = new Uint8Array(0), n && (this._createHeader = () => n), this._bodyLength = typeof t == "number" ? t : t.low
      }

      static fromJSON(t, e) {
        let r = new Vt(0, Yt.V4, e);
        return r._createHeader = pI(t, e), r
      }

      static decode(t) {
        t = new hI(Y(t));
        let e = Ut.getRootAsMessage(t), r = e.bodyLength(), n = e.version(), o = e.headerType(), d = new Vt(r, n, o);
        return d._createHeader = yI(e, o), d
      }

      static encode(t) {
        let e = new fI, r = -1;
        return t.isSchema() ? r = at.encode(e, t.header()) : t.isRecordBatch() ? r = re.encode(e, t.header()) : t.isDictionaryBatch() && (r = Te.encode(e, t.header())), Ut.startMessage(e), Ut.addVersion(e, Yt.V4), Ut.addHeader(e, r), Ut.addHeaderType(e, t.headerType), Ut.addBodyLength(e, new Or(t.bodyLength, 0)), Ut.finishMessageBuffer(e, Ut.endMessage(e)), e.asUint8Array()
      }

      static from(t, e = 0) {
        if (t instanceof at) return new Vt(0, Yt.V4, ft.Schema, t);
        if (t instanceof re) return new Vt(e, Yt.V4, ft.RecordBatch, t);
        if (t instanceof Te) return new Vt(e, Yt.V4, ft.DictionaryBatch, t);
        throw new Error(`Unrecognized Message header: ${t}`)
      }

      get type() {
        return this.headerType
      }

      get version() {
        return this._version
      }

      get headerType() {
        return this._headerType
      }

      get bodyLength() {
        return this._bodyLength
      }

      header() {
        return this._createHeader()
      }

      isSchema() {
        return this.headerType === ft.Schema
      }

      isRecordBatch() {
        return this.headerType === ft.RecordBatch
      }

      isDictionaryBatch() {
        return this.headerType === ft.DictionaryBatch
      }
    }, re = class {
      constructor(t, e, r) {
        this._nodes = e, this._buffers = r, this._length = typeof t == "number" ? t : t.low
      }

      get nodes() {
        return this._nodes
      }

      get length() {
        return this._length
      }

      get buffers() {
        return this._buffers
      }
    }, Te = class {
      constructor(t, e, r = !1) {
        this._data = t, this._isDelta = r, this._id = typeof e == "number" ? e : e.low
      }

      get id() {
        return this._id
      }

      get data() {
        return this._data
      }

      get isDelta() {
        return this._isDelta
      }

      get length() {
        return this.data.length
      }

      get nodes() {
        return this.data.nodes
      }

      get buffers() {
        return this.data.buffers
      }
    }, Be = class {
      constructor(t, e) {
        this.offset = typeof t == "number" ? t : t.low, this.length = typeof e == "number" ? e : e.low
      }
    }, ui = class {
      constructor(t, e) {
        this.length = typeof t == "number" ? t : t.low, this.nullCount = typeof e == "number" ? e : e.low
      }
    };

    function pI(i, t) {
      return () => {
        switch (t) {
          case ft.Schema:
            return at.fromJSON(i);
          case ft.RecordBatch:
            return re.fromJSON(i);
          case ft.DictionaryBatch:
            return Te.fromJSON(i)
        }
        throw new Error(`Unrecognized Message type: { name: ${ft[t]}, type: ${t} }`)
      }
    }

    function yI(i, t) {
      return () => {
        switch (t) {
          case ft.Schema:
            return at.decode(i.header(new Et));
          case ft.RecordBatch:
            return re.decode(i.header(new le), i.version());
          case ft.DictionaryBatch:
            return Te.decode(i.header(new Xe), i.version())
        }
        throw new Error(`Unrecognized Message type: { name: ${ft[t]}, type: ${t} }`)
      }
    }

    Q.encode = FI;
    Q.decode = II;
    Q.fromJSON = Mp;
    at.encode = CI;
    at.decode = _I;
    at.fromJSON = Ep;
    re.encode = AI;
    re.decode = mI;
    re.fromJSON = el;
    Te.encode = xI;
    Te.decode = bI;
    Te.fromJSON = kp;
    ui.encode = BI;
    ui.decode = gI;
    Be.encode = TI;
    Be.decode = vI;

    function _I(i, t = new Map) {
      let e = SI(i, t);
      return new at(e, Wo(i), t)
    }

    function mI(i, t = Yt.V4) {
      if (i.compression() !== null) throw new Error("Record batch compression not implemented");
      return new re(i.length(), wI(i), jI(i, t))
    }

    function bI(i, t = Yt.V4) {
      return new Te(re.decode(i.data(), t), i.id(), i.isDelta())
    }

    function vI(i) {
      return new Be(i.offset(), i.length())
    }

    function gI(i) {
      return new ui(i.length(), i.nullCount())
    }

    function wI(i) {
      let t = [];
      for (let e, r = -1, n = -1, o = i.nodesLength(); ++r < o;) (e = i.nodes(r)) && (t[++n] = ui.decode(e));
      return t
    }

    function jI(i, t) {
      let e = [];
      for (let r, n = -1, o = -1, d = i.buffersLength(); ++n < d;) (r = i.buffers(n)) && (t < Yt.V4 && (r.bb_pos += 8 * (n + 1)), e[++o] = Be.decode(r));
      return e
    }

    function SI(i, t) {
      let e = [];
      for (let r, n = -1, o = -1, d = i.fieldsLength(); ++n < d;) (r = i.fields(n)) && (e[++o] = Q.decode(r, t));
      return e
    }

    function Up(i, t) {
      let e = [];
      for (let r, n = -1, o = -1, d = i.childrenLength(); ++n < d;) (r = i.children(n)) && (e[++o] = Q.decode(r, t));
      return e
    }

    function II(i, t) {
      let e, r, n, o, d, p;
      return !t || !(p = i.dictionary()) ? (n = Np(i, Up(i, t)), r = new Q(i.name(), n, i.nullable(), Wo(i))) : t.has(e = p.id().low) ? (o = (o = p.indexType()) ? Lp(o) : new yi, d = new Ee(t.get(e), o, e, p.isOrdered()), r = new Q(i.name(), d, i.nullable(), Wo(i))) : (o = (o = p.indexType()) ? Lp(o) : new yi, t.set(e, n = Np(i, Up(i, t))), d = new Ee(n, o, e, p.isOrdered()), r = new Q(i.name(), d, i.nullable(), Wo(i))), r || null
    }

    function Wo(i) {
      let t = new Map;
      if (i) for (let e, r, n = -1, o = Math.trunc(i.customMetadataLength()); ++n < o;) (e = i.customMetadata(n)) && (r = e.key()) != null && t.set(r, e.value());
      return t
    }

    function Lp(i) {
      return new Mt(i.isSigned(), i.bitWidth())
    }

    function Np(i, t) {
      let e = i.typeType();
      switch (e) {
        case Tt.NONE:
          return new pe;
        case Tt.Null:
          return new pe;
        case Tt.Binary:
          return new ki;
        case Tt.Utf8:
          return new Oi;
        case Tt.Bool:
          return new Ri;
        case Tt.List:
          return new ii((t || [])[0]);
        case Tt.Struct_:
          return new St(t || [])
      }
      switch (e) {
        case Tt.Int: {
          let r = i.type(new Gt);
          return new Mt(r.isSigned(), r.bitWidth())
        }
        case Tt.FloatingPoint: {
          let r = i.type(new Se);
          return new ve(r.precision())
        }
        case Tt.Decimal: {
          let r = i.type(new Kt);
          return new Mi(r.scale(), r.precision(), r.bitWidth())
        }
        case Tt.Date: {
          let r = i.type(new ge);
          return new Ui(r.unit())
        }
        case Tt.Time: {
          let r = i.type(new se);
          return new ei(r.unit(), r.bitWidth())
        }
        case Tt.Timestamp: {
          let r = i.type(new oe);
          return new Li(r.unit(), r.timezone())
        }
        case Tt.Interval: {
          let r = i.type(new Ie);
          return new Ni(r.unit())
        }
        case Tt.Union: {
          let r = i.type(new Jt);
          return new ri(r.mode(), r.typeIdsArray() || [], t || [])
        }
        case Tt.FixedSizeBinary: {
          let r = i.type(new we);
          return new Pi(r.byteWidth())
        }
        case Tt.FixedSizeList: {
          let r = i.type(new je);
          return new ni(r.listSize(), (t || [])[0])
        }
        case Tt.Map: {
          let r = i.type(new Ce);
          return new si((t || [])[0], r.keysSorted())
        }
      }
      throw new Error(`Unrecognized type: "${Tt[e]}" (${e})`)
    }

    function CI(i, t) {
      let e = t.fields.map(o => Q.encode(i, o));
      Et.startFieldsVector(i, e.length);
      let r = Et.createFieldsVector(i, e),
          n = t.metadata && t.metadata.size > 0 ? Et.createCustomMetadataVector(i, [...t.metadata].map(([o, d]) => {
            let p = i.createString(`${o}`), m = i.createString(`${d}`);
            return It.startKeyValue(i), It.addKey(i, p), It.addValue(i, m), It.endKeyValue(i)
          })) : -1;
      return Et.startSchema(i), Et.addFields(i, r), Et.addEndianness(i, DI ? lr.Little : lr.Big), n !== -1 && Et.addCustomMetadata(i, n), Et.endSchema(i)
    }

    function FI(i, t) {
      let e = -1, r = -1, n = -1, o = t.type, d = t.typeId;
      L.isDictionary(o) ? (d = o.dictionary.typeId, n = Vo.visit(o, i), r = Vo.visit(o.dictionary, i)) : r = Vo.visit(o, i);
      let p = (o.children || []).map(A => Q.encode(i, A)), m = Ht.createChildrenVector(i, p),
          I = t.metadata && t.metadata.size > 0 ? Ht.createCustomMetadataVector(i, [...t.metadata].map(([A, E]) => {
            let T = i.createString(`${A}`), k = i.createString(`${E}`);
            return It.startKeyValue(i), It.addKey(i, T), It.addValue(i, k), It.endKeyValue(i)
          })) : -1;
      return t.name && (e = i.createString(t.name)), Ht.startField(i), Ht.addType(i, r), Ht.addTypeType(i, d), Ht.addChildren(i, m), Ht.addNullable(i, !!t.nullable), e !== -1 && Ht.addName(i, e), n !== -1 && Ht.addDictionary(i, n), I !== -1 && Ht.addCustomMetadata(i, I), Ht.endField(i)
    }

    function AI(i, t) {
      let e = t.nodes || [], r = t.buffers || [];
      le.startNodesVector(i, e.length);
      for (let d of e.slice().reverse()) ui.encode(i, d);
      let n = i.endVector();
      le.startBuffersVector(i, r.length);
      for (let d of r.slice().reverse()) Be.encode(i, d);
      let o = i.endVector();
      return le.startRecordBatch(i), le.addLength(i, new Or(t.length, 0)), le.addNodes(i, n), le.addBuffers(i, o), le.endRecordBatch(i)
    }

    function xI(i, t) {
      let e = re.encode(i, t.data);
      return Xe.startDictionaryBatch(i), Xe.addId(i, new Or(t.id, 0)), Xe.addIsDelta(i, t.isDelta), Xe.addData(i, e), Xe.endDictionaryBatch(i)
    }

    function BI(i, t) {
      return nn.createFieldNode(i, new Or(t.length, 0), new Or(t.nullCount, 0))
    }

    function TI(i, t) {
      return rn.createBuffer(i, new Or(t.offset, 0), new Or(t.length, 0))
    }

    var DI = (() => {
      let i = new ArrayBuffer(2);
      return new DataView(i).setInt16(0, 256, !0), new Int16Array(i)[0] === 256
    })();
    var rl = i => `Expected ${ft[i]} Message in stream, but was null or length 0.`,
        nl = i => `Header pointer of flatbuffer-encoded ${ft[i]} Message is null or length 0.`,
        Pp = (i, t) => `Expected to read ${i} metadata bytes, but only read ${t}.`,
        Hp = (i, t) => `Expected to read ${i} bytes for message body, but only read ${t}.`, on = class {
          constructor(t) {
            this.source = t instanceof Ai ? t : new Ai(t)
          }

          [Symbol.iterator]() {
            return this
          }

          next() {
            let t;
            return (t = this.readMetadataLength()).done ? Ct : t.value === -1 && (t = this.readMetadataLength()).done ? Ct : (t = this.readMetadata(t.value)).done ? Ct : t
          }

          throw(t) {
            return this.source.throw(t)
          }

          return(t) {
            return this.source.return(t)
          }

          readMessage(t) {
            let e;
            if ((e = this.next()).done) return null;
            if (t != null && e.value.headerType !== t) throw new Error(rl(t));
            return e.value
          }

          readMessageBody(t) {
            if (t <= 0) return new Uint8Array(0);
            let e = Y(this.source.read(t));
            if (e.byteLength < t) throw new Error(Hp(t, e.byteLength));
            return e.byteOffset % 8 === 0 && e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
          }

          readSchema(t = !1) {
            let e = ft.Schema, r = this.readMessage(e), n = r == null ? void 0 : r.header();
            if (t && !n) throw new Error(nl(e));
            return n
          }

          readMetadataLength() {
            let t = this.source.read($o), e = t && new ye(t), r = (e == null ? void 0 : e.readInt32(0)) || 0;
            return {done: r === 0, value: r}
          }

          readMetadata(t) {
            let e = this.source.read(t);
            if (!e) return Ct;
            if (e.byteLength < t) throw new Error(Pp(t, e.byteLength));
            return {done: !1, value: Vt.decode(e)}
          }
        }, ns = class {
          constructor(t, e) {
            this.source = t instanceof Fe ? t : Ts(t) ? new ur(t, e) : new Fe(t)
          }

          [Symbol.asyncIterator]() {
            return this
          }

          next() {
            return O(this, void 0, void 0, function* () {
              let t;
              return (t = yield this.readMetadataLength()).done ? Ct : t.value === -1 && (t = yield this.readMetadataLength()).done ? Ct : (t = yield this.readMetadata(t.value)).done ? Ct : t
            })
          }

          throw(t) {
            return O(this, void 0, void 0, function* () {
              return yield this.source.throw(t)
            })
          }

          return(t) {
            return O(this, void 0, void 0, function* () {
              return yield this.source.return(t)
            })
          }

          readMessage(t) {
            return O(this, void 0, void 0, function* () {
              let e;
              if ((e = yield this.next()).done) return null;
              if (t != null && e.value.headerType !== t) throw new Error(rl(t));
              return e.value
            })
          }

          readMessageBody(t) {
            return O(this, void 0, void 0, function* () {
              if (t <= 0) return new Uint8Array(0);
              let e = Y(yield this.source.read(t));
              if (e.byteLength < t) throw new Error(Hp(t, e.byteLength));
              return e.byteOffset % 8 === 0 && e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
            })
          }

          readSchema(t = !1) {
            return O(this, void 0, void 0, function* () {
              let e = ft.Schema, r = yield this.readMessage(e), n = r == null ? void 0 : r.header();
              if (t && !n) throw new Error(nl(e));
              return n
            })
          }

          readMetadataLength() {
            return O(this, void 0, void 0, function* () {
              let t = yield this.source.read($o), e = t && new ye(t), r = (e == null ? void 0 : e.readInt32(0)) || 0;
              return {done: r === 0, value: r}
            })
          }

          readMetadata(t) {
            return O(this, void 0, void 0, function* () {
              let e = yield this.source.read(t);
              if (!e) return Ct;
              if (e.byteLength < t) throw new Error(Pp(t, e.byteLength));
              return {done: !1, value: Vt.decode(e)}
            })
          }
        }, ss = class extends on {
          constructor(t) {
            super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof On ? t : new On(t)
          }

          next() {
            let {_json: t} = this;
            if (!this._schema) return this._schema = !0, {done: !1, value: Vt.fromJSON(t.schema, ft.Schema)};
            if (this._dictionaryIndex < t.dictionaries.length) {
              let e = t.dictionaries[this._dictionaryIndex++];
              return this._body = e.data.columns, {done: !1, value: Vt.fromJSON(e, ft.DictionaryBatch)}
            }
            if (this._batchIndex < t.batches.length) {
              let e = t.batches[this._batchIndex++];
              return this._body = e.columns, {done: !1, value: Vt.fromJSON(e, ft.RecordBatch)}
            }
            return this._body = [], Ct
          }

          readMessageBody(t) {
            return e(this._body);

            function e(r) {
              return (r || []).reduce((n, o) => [...n, ...o.VALIDITY && [o.VALIDITY] || [], ...o.TYPE && [o.TYPE] || [], ...o.OFFSET && [o.OFFSET] || [], ...o.DATA && [o.DATA] || [], ...e(o.children)], [])
            }
          }

          readMessage(t) {
            let e;
            if ((e = this.next()).done) return null;
            if (t != null && e.value.headerType !== t) throw new Error(rl(t));
            return e.value
          }

          readSchema() {
            let t = ft.Schema, e = this.readMessage(t), r = e == null ? void 0 : e.header();
            if (!e || !r) throw new Error(nl(t));
            return r
          }
        }, $o = 4, il = "ARROW1", an = new Uint8Array(il.length);
    for (let i = 0; i < il.length; i += 1) an[i] = il.codePointAt(i);

    function Yo(i, t = 0) {
      for (let e = -1, r = an.length; ++e < r;) if (an[e] !== i[t + e]) return !1;
      return !0
    }

    var ln = an.length, sl = ln + $o, Vp = ln * 2 + $o;
    var Lt = class extends Ar {
      constructor(t) {
        super(), this._impl = t
      }

      get closed() {
        return this._impl.closed
      }

      get schema() {
        return this._impl.schema
      }

      get autoDestroy() {
        return this._impl.autoDestroy
      }

      get dictionaries() {
        return this._impl.dictionaries
      }

      get numDictionaries() {
        return this._impl.numDictionaries
      }

      get numRecordBatches() {
        return this._impl.numRecordBatches
      }

      get footer() {
        return this._impl.isFile() ? this._impl.footer : null
      }

      isSync() {
        return this._impl.isSync()
      }

      isAsync() {
        return this._impl.isAsync()
      }

      isFile() {
        return this._impl.isFile()
      }

      isStream() {
        return this._impl.isStream()
      }

      next() {
        return this._impl.next()
      }

      throw(t) {
        return this._impl.throw(t)
      }

      return(t) {
        return this._impl.return(t)
      }

      cancel() {
        return this._impl.cancel()
      }

      reset(t) {
        return this._impl.reset(t), this._DOMStream = void 0, this._nodeStream = void 0, this
      }

      open(t) {
        let e = this._impl.open(t);
        return Je(e) ? e.then(() => this) : this
      }

      readRecordBatch(t) {
        return this._impl.isFile() ? this._impl.readRecordBatch(t) : null
      }

      [Symbol.iterator]() {
        return this._impl[Symbol.iterator]()
      }

      [Symbol.asyncIterator]() {
        return this._impl[Symbol.asyncIterator]()
      }

      toDOMStream() {
        return te.toDOMStream(this.isSync() ? {[Symbol.iterator]: () => this} : {[Symbol.asyncIterator]: () => this})
      }

      toNodeStream() {
        return te.toNodeStream(this.isSync() ? {[Symbol.iterator]: () => this} : {[Symbol.asyncIterator]: () => this}, {objectMode: !0})
      }

      static throughNode(t) {
        throw new Error('"throughNode" not available in this environment')
      }

      static throughDOM(t, e) {
        throw new Error('"throughDOM" not available in this environment')
      }

      static from(t) {
        return t instanceof Lt ? t : xs(t) ? kI(t) : Ts(t) ? MI(t) : Je(t) ? (() => O(this, void 0, void 0, function* () {
          return yield Lt.from(yield t)
        }))() : Ds(t) || gn(t) || ks(t) || Ve(t) ? RI(new Fe(t)) : OI(new Ai(t))
      }

      static readAll(t) {
        return t instanceof Lt ? t.isSync() ? zp(t) : Wp(t) : xs(t) || ArrayBuffer.isView(t) || qe(t) || Bs(t) ? zp(t) : Wp(t)
      }
    }, Bi = class extends Lt {
      constructor(t) {
        super(t), this._impl = t
      }

      readAll() {
        return [...this]
      }

      [Symbol.iterator]() {
        return this._impl[Symbol.iterator]()
      }

      [Symbol.asyncIterator]() {
        return be(this, arguments, function* () {
          yield it(yield* Lr(Ne(this[Symbol.iterator]())))
        })
      }
    }, dr = class extends Lt {
      constructor(t) {
        super(t), this._impl = t
      }

      readAll() {
        var t, e;
        return O(this, void 0, void 0, function* () {
          let r = new Array;
          try {
            for (var n = Ne(this), o; o = yield n.next(), !o.done;) {
              let d = o.value;
              r.push(d)
            }
          } catch (d) {
            t = {error: d}
          } finally {
            try {
              o && !o.done && (e = n.return) && (yield e.call(n))
            } finally {
              if (t) throw t.error
            }
          }
          return r
        })
      }

      [Symbol.iterator]() {
        throw new Error("AsyncRecordBatchStreamReader is not Iterable")
      }

      [Symbol.asyncIterator]() {
        return this._impl[Symbol.asyncIterator]()
      }
    }, fr = class extends Bi {
      constructor(t) {
        super(t), this._impl = t
      }
    }, os = class extends dr {
      constructor(t) {
        super(t), this._impl = t
      }
    }, Xo = class {
      constructor(t = new Map) {
        this.closed = !1, this.autoDestroy = !0, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = t
      }

      get numDictionaries() {
        return this._dictionaryIndex
      }

      get numRecordBatches() {
        return this._recordBatchIndex
      }

      isSync() {
        return !1
      }

      isAsync() {
        return !1
      }

      isFile() {
        return !1
      }

      isStream() {
        return !1
      }

      reset(t) {
        return this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.schema = t, this.dictionaries = new Map, this
      }

      _loadRecordBatch(t, e) {
        let r = this._loadVectors(t, e, this.schema.fields),
            n = J({type: new St(this.schema.fields), length: t.length, children: r});
        return new jt(this.schema, n)
      }

      _loadDictionaryBatch(t, e) {
        let {id: r, isDelta: n} = t, {dictionaries: o, schema: d} = this, p = o.get(r);
        if (n || !p) {
          let m = d.dictionaries.get(r), I = this._loadVectors(t.data, e, [m]);
          return (p && n ? p.concat(new G(I)) : new G(I)).memoize()
        }
        return p.memoize()
      }

      _loadVectors(t, e, r) {
        return new Un(e, t.nodes, t.buffers, this.dictionaries).visitMany(r)
      }
    }, cn = class extends Xo {
      constructor(t, e) {
        super(e), this._reader = xs(t) ? new ss(this._handle = t) : new on(this._handle = t)
      }

      isSync() {
        return !0
      }

      isStream() {
        return !0
      }

      [Symbol.iterator]() {
        return this
      }

      cancel() {
        !this.closed && (this.closed = !0) && (this.reset()._reader.return(), this._reader = null, this.dictionaries = null)
      }

      open(t) {
        return this.closed || (this.autoDestroy = $p(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this
      }

      throw(t) {
        return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : Ct
      }

      return(t) {
        return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : Ct
      }

      next() {
        if (this.closed) return Ct;
        let t, {_reader: e} = this;
        for (; t = this._readNextMessageAndValidate();) if (t.isSchema()) this.reset(t.header()); else if (t.isRecordBatch()) {
          this._recordBatchIndex++;
          let r = t.header(), n = e.readMessageBody(t.bodyLength);
          return {done: !1, value: this._loadRecordBatch(r, n)}
        } else if (t.isDictionaryBatch()) {
          this._dictionaryIndex++;
          let r = t.header(), n = e.readMessageBody(t.bodyLength), o = this._loadDictionaryBatch(r, n);
          this.dictionaries.set(r.id, o)
        }
        return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, {
          done: !1,
          value: new kr(this.schema)
        }) : this.return()
      }

      _readNextMessageAndValidate(t) {
        return this._reader.readMessage(t)
      }
    }, un = class extends Xo {
      constructor(t, e) {
        super(e), this._reader = new ns(this._handle = t)
      }

      isAsync() {
        return !0
      }

      isStream() {
        return !0
      }

      [Symbol.asyncIterator]() {
        return this
      }

      cancel() {
        return O(this, void 0, void 0, function* () {
          !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null)
        })
      }

      open(t) {
        return O(this, void 0, void 0, function* () {
          return this.closed || (this.autoDestroy = $p(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this
        })
      }

      throw(t) {
        return O(this, void 0, void 0, function* () {
          return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : Ct
        })
      }

      return(t) {
        return O(this, void 0, void 0, function* () {
          return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : Ct
        })
      }

      next() {
        return O(this, void 0, void 0, function* () {
          if (this.closed) return Ct;
          let t, {_reader: e} = this;
          for (; t = yield this._readNextMessageAndValidate();) if (t.isSchema()) yield this.reset(t.header()); else if (t.isRecordBatch()) {
            this._recordBatchIndex++;
            let r = t.header(), n = yield e.readMessageBody(t.bodyLength);
            return {done: !1, value: this._loadRecordBatch(r, n)}
          } else if (t.isDictionaryBatch()) {
            this._dictionaryIndex++;
            let r = t.header(), n = yield e.readMessageBody(t.bodyLength), o = this._loadDictionaryBatch(r, n);
            this.dictionaries.set(r.id, o)
          }
          return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, {
            done: !1,
            value: new kr(this.schema)
          }) : yield this.return()
        })
      }

      _readNextMessageAndValidate(t) {
        return O(this, void 0, void 0, function* () {
          return yield this._reader.readMessage(t)
        })
      }
    }, Go = class extends cn {
      constructor(t, e) {
        super(t instanceof Rn ? t : new Rn(t), e)
      }

      get footer() {
        return this._footer
      }

      get numDictionaries() {
        return this._footer ? this._footer.numDictionaries : 0
      }

      get numRecordBatches() {
        return this._footer ? this._footer.numRecordBatches : 0
      }

      isSync() {
        return !0
      }

      isFile() {
        return !0
      }

      open(t) {
        if (!this.closed && !this._footer) {
          this.schema = (this._footer = this._readFooter()).schema;
          for (let e of this._footer.dictionaryBatches()) e && this._readDictionaryBatch(this._dictionaryIndex++)
        }
        return super.open(t)
      }

      readRecordBatch(t) {
        var e;
        if (this.closed) return null;
        this._footer || this.open();
        let r = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
        if (r && this._handle.seek(r.offset)) {
          let n = this._reader.readMessage(ft.RecordBatch);
          if (n != null && n.isRecordBatch()) {
            let o = n.header(), d = this._reader.readMessageBody(n.bodyLength);
            return this._loadRecordBatch(o, d)
          }
        }
        return null
      }

      _readDictionaryBatch(t) {
        var e;
        let r = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
        if (r && this._handle.seek(r.offset)) {
          let n = this._reader.readMessage(ft.DictionaryBatch);
          if (n != null && n.isDictionaryBatch()) {
            let o = n.header(), d = this._reader.readMessageBody(n.bodyLength), p = this._loadDictionaryBatch(o, d);
            this.dictionaries.set(o.id, p)
          }
        }
      }

      _readFooter() {
        let {_handle: t} = this, e = t.size - sl, r = t.readInt32(e), n = t.readAt(e - r, r);
        return Wi.decode(n)
      }

      _readNextMessageAndValidate(t) {
        var e;
        if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
          let r = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(this._recordBatchIndex);
          if (r && this._handle.seek(r.offset)) return this._reader.readMessage(t)
        }
        return null
      }
    }, ol = class extends un {
      constructor(t, ...e) {
        let r = typeof e[0] != "number" ? e.shift() : void 0, n = e[0] instanceof Map ? e.shift() : void 0;
        super(t instanceof ur ? t : new ur(t, r), n)
      }

      get footer() {
        return this._footer
      }

      get numDictionaries() {
        return this._footer ? this._footer.numDictionaries : 0
      }

      get numRecordBatches() {
        return this._footer ? this._footer.numRecordBatches : 0
      }

      isFile() {
        return !0
      }

      isAsync() {
        return !0
      }

      open(t) {
        let e = Object.create(null, {open: {get: () => super.open}});
        return O(this, void 0, void 0, function* () {
          if (!this.closed && !this._footer) {
            this.schema = (this._footer = yield this._readFooter()).schema;
            for (let r of this._footer.dictionaryBatches()) r && (yield this._readDictionaryBatch(this._dictionaryIndex++))
          }
          return yield e.open.call(this, t)
        })
      }

      readRecordBatch(t) {
        var e;
        return O(this, void 0, void 0, function* () {
          if (this.closed) return null;
          this._footer || (yield this.open());
          let r = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
          if (r && (yield this._handle.seek(r.offset))) {
            let n = yield this._reader.readMessage(ft.RecordBatch);
            if (n != null && n.isRecordBatch()) {
              let o = n.header(), d = yield this._reader.readMessageBody(n.bodyLength);
              return this._loadRecordBatch(o, d)
            }
          }
          return null
        })
      }

      _readDictionaryBatch(t) {
        var e;
        return O(this, void 0, void 0, function* () {
          let r = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
          if (r && (yield this._handle.seek(r.offset))) {
            let n = yield this._reader.readMessage(ft.DictionaryBatch);
            if (n != null && n.isDictionaryBatch()) {
              let o = n.header(), d = yield this._reader.readMessageBody(n.bodyLength),
                  p = this._loadDictionaryBatch(o, d);
              this.dictionaries.set(o.id, p)
            }
          }
        })
      }

      _readFooter() {
        return O(this, void 0, void 0, function* () {
          let {_handle: t} = this;
          t._pending && (yield t._pending);
          let e = t.size - sl, r = yield t.readInt32(e), n = yield t.readAt(e - r, r);
          return Wi.decode(n)
        })
      }

      _readNextMessageAndValidate(t) {
        return O(this, void 0, void 0, function* () {
          if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
            let e = this._footer.getRecordBatch(this._recordBatchIndex);
            if (e && (yield this._handle.seek(e.offset))) return yield this._reader.readMessage(t)
          }
          return null
        })
      }
    }, al = class extends cn {
      constructor(t, e) {
        super(t, e)
      }

      _loadVectors(t, e, r) {
        return new vo(e, t.nodes, t.buffers, this.dictionaries).visitMany(r)
      }
    };

    function $p(i, t) {
      return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : i.autoDestroy
    }

    function* zp(i) {
      let t = Lt.from(i);
      try {
        if (!t.open({autoDestroy: !1}).closed) do yield t; while (!t.reset().open().closed)
      } finally {
        t.cancel()
      }
    }

    function Wp(i) {
      return be(this, arguments, function* () {
        let e = yield it(Lt.from(i));
        try {
          if (!(yield it(e.open({autoDestroy: !1}))).closed) do yield yield it(e); while (!(yield it(e.reset().open())).closed)
        } finally {
          yield it(e.cancel())
        }
      })
    }

    function kI(i) {
      return new Bi(new al(i))
    }

    function OI(i) {
      let t = i.peek(ln + 7 & -8);
      return t && t.byteLength >= 4 ? Yo(t) ? new fr(new Go(i.read())) : new Bi(new cn(i)) : new Bi(new cn(function* () {
      }()))
    }

    function RI(i) {
      return O(this, void 0, void 0, function* () {
        let t = yield i.peek(ln + 7 & -8);
        return t && t.byteLength >= 4 ? Yo(t) ? new fr(new Go(yield i.read())) : new dr(new un(i)) : new dr(new un(function () {
          return be(this, arguments, function* () {
          })
        }()))
      })
    }

    function MI(i) {
      return O(this, void 0, void 0, function* () {
        let {size: t} = yield i.stat(), e = new ur(i, t);
        return t >= Vp && Yo(yield e.readAt(0, ln + 7 & -8)) ? new os(new ol(e)) : new dr(new un(e))
      })
    }

    var kt = class extends H {
      constructor() {
        super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = []
      }

      static assemble(...t) {
        let e = n => n.flatMap(o => Array.isArray(o) ? e(o) : o instanceof jt ? o.data.children : o.data), r = new kt;
        return r.visitMany(e(t)), r
      }

      visit(t) {
        if (t instanceof G) return this.visitMany(t.data), this;
        let {type: e} = t;
        if (!L.isDictionary(e)) {
          let {length: r, nullCount: n} = t;
          if (r > 2147483647) throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
          L.isNull(e) || di.call(this, n <= 0 ? new Uint8Array(0) : Yr(t.offset, r, t.nullBitmap)), this.nodes.push(new ui(r, n))
        }
        return super.visit(t)
      }

      visitNull(t) {
        return this
      }

      visitDictionary(t) {
        return this.visit(t.clone(t.type.indices))
      }

      get nodes() {
        return this._nodes
      }

      get buffers() {
        return this._buffers
      }

      get byteLength() {
        return this._byteLength
      }

      get bufferRegions() {
        return this._bufferRegions
      }
    };

    function di(i) {
      let t = i.byteLength + 7 & -8;
      return this.buffers.push(i), this.bufferRegions.push(new Be(this._byteLength, t)), this._byteLength += t, this
    }

    function UI(i) {
      let {type: t, length: e, typeIds: r, valueOffsets: n} = i;
      if (di.call(this, r), t.mode === Dt.Sparse) return ll.call(this, i);
      if (t.mode === Dt.Dense) {
        if (i.offset <= 0) return di.call(this, n), ll.call(this, i);
        {
          let o = r.reduce((A, E) => Math.max(A, E), r[0]), d = new Int32Array(o + 1),
              p = new Int32Array(o + 1).fill(-1), m = new Int32Array(e), I = wn(-n[0], e, n);
          for (let A, E, T = -1; ++T < e;) (E = p[A = r[T]]) === -1 && (E = p[A] = I[A]), m[T] = I[T] - E, ++d[A];
          di.call(this, m);
          for (let A, E = -1, T = t.children.length; ++E < T;) if (A = i.children[E]) {
            let k = t.typeIds[E], lt = Math.min(e, d[k]);
            this.visit(A.slice(p[k], lt))
          }
        }
      }
      return this
    }

    function LI(i) {
      let t;
      return i.nullCount >= i.length ? di.call(this, new Uint8Array(0)) : (t = i.values) instanceof Uint8Array ? di.call(this, Yr(i.offset, i.length, t)) : di.call(this, Sr(i.values))
    }

    function hr(i) {
      return di.call(this, i.values.subarray(0, i.length * i.stride))
    }

    function Yp(i) {
      let {length: t, values: e, valueOffsets: r} = i, n = r[0], o = r[t], d = Math.min(o - n, e.byteLength - n);
      return di.call(this, wn(-r[0], t, r)), di.call(this, e.subarray(n, n + d)), this
    }

    function cl(i) {
      let {length: t, valueOffsets: e} = i;
      return e && di.call(this, wn(e[0], t, e)), this.visit(i.children[0])
    }

    function ll(i) {
      return this.visitMany(i.type.children.map((t, e) => i.children[e]).filter(Boolean))[0]
    }

    kt.prototype.visitBool = LI;
    kt.prototype.visitInt = hr;
    kt.prototype.visitFloat = hr;
    kt.prototype.visitUtf8 = Yp;
    kt.prototype.visitBinary = Yp;
    kt.prototype.visitFixedSizeBinary = hr;
    kt.prototype.visitDate = hr;
    kt.prototype.visitTimestamp = hr;
    kt.prototype.visitTime = hr;
    kt.prototype.visitDecimal = hr;
    kt.prototype.visitList = cl;
    kt.prototype.visitStruct = ll;
    kt.prototype.visitUnion = UI;
    kt.prototype.visitInterval = hr;
    kt.prototype.visitFixedSizeList = cl;
    kt.prototype.visitMap = cl;
    var Rr = class extends Ar {
      constructor(t) {
        super(), this._position = 0, this._started = !1, this._sink = new Fi, this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = new Map, fe(t) || (t = {
          autoDestroy: !0,
          writeLegacyIpcFormat: !1
        }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1
      }

      static throughNode(t) {
        throw new Error('"throughNode" not available in this environment')
      }

      static throughDOM(t, e) {
        throw new Error('"throughDOM" not available in this environment')
      }

      toString(t = !1) {
        return this._sink.toString(t)
      }

      toUint8Array(t = !1) {
        return this._sink.toUint8Array(t)
      }

      writeAll(t) {
        return Je(t) ? t.then(e => this.writeAll(e)) : Ve(t) ? dl(this, t) : ul(this, t)
      }

      get closed() {
        return this._sink.closed
      }

      [Symbol.asyncIterator]() {
        return this._sink[Symbol.asyncIterator]()
      }

      toDOMStream(t) {
        return this._sink.toDOMStream(t)
      }

      toNodeStream(t) {
        return this._sink.toNodeStream(t)
      }

      close() {
        return this.reset()._sink.close()
      }

      abort(t) {
        return this.reset()._sink.abort(t)
      }

      finish() {
        return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this
      }

      reset(t = this._sink, e = null) {
        return t === this._sink || t instanceof Fi ? this._sink = t : (this._sink = new Fi, t && _h(t) ? this.toDOMStream({type: "bytes"}).pipeTo(t) : t && mh(t) && this.toNodeStream({objectMode: !1}).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = new Map, (!e || !Er(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this
      }

      write(t) {
        let e = null;
        if (this._sink) {
          if (t == null) return this.finish() && void 0;
          if (t instanceof Rt && !(e = t.schema)) return this.finish() && void 0;
          if (t instanceof jt && !(e = t.schema)) return this.finish() && void 0
        } else throw new Error("RecordBatchWriter is closed");
        if (e && !Er(e, this._schema)) {
          if (this._started && this._autoDestroy) return this.close();
          this.reset(this._sink, e)
        }
        t instanceof jt ? t instanceof kr || this._writeRecordBatch(t) : t instanceof Rt ? this.writeAll(t.batches) : qe(t) && this.writeAll(t)
      }

      _writeMessage(t, e = 8) {
        let r = e - 1, n = Vt.encode(t), o = n.byteLength, d = this._writeLegacyIpcFormat ? 4 : 8, p = o + d + r & ~r,
            m = p - o - d;
        return t.headerType === ft.RecordBatch ? this._recordBatchBlocks.push(new li(p, t.bodyLength, this._position)) : t.headerType === ft.DictionaryBatch && this._dictionaryBlocks.push(new li(p, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(p - d)), o > 0 && this._write(n), this._writePadding(m)
      }

      _write(t) {
        if (this._started) {
          let e = Y(t);
          e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength)
        }
        return this
      }

      _writeSchema(t) {
        return this._writeMessage(Vt.from(t))
      }

      _writeFooter(t) {
        return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0))
      }

      _writeMagic() {
        return this._write(an)
      }

      _writePadding(t) {
        return t > 0 ? this._write(new Uint8Array(t)) : this
      }

      _writeRecordBatch(t) {
        let {byteLength: e, nodes: r, bufferRegions: n, buffers: o} = kt.assemble(t), d = new re(t.numRows, r, n),
            p = Vt.from(d, e);
        return this._writeDictionaries(t)._writeMessage(p)._writeBodyBuffers(o)
      }

      _writeDictionaryBatch(t, e, r = !1) {
        this._dictionaryDeltaOffsets.set(e, t.length + (this._dictionaryDeltaOffsets.get(e) || 0));
        let {byteLength: n, nodes: o, bufferRegions: d, buffers: p} = kt.assemble(new G([t])),
            m = new re(t.length, o, d), I = new Te(m, e, r), A = Vt.from(I, n);
        return this._writeMessage(A)._writeBodyBuffers(p)
      }

      _writeBodyBuffers(t) {
        let e, r, n;
        for (let o = -1, d = t.length; ++o < d;) (e = t[o]) && (r = e.byteLength) > 0 && (this._write(e), (n = (r + 7 & -8) - r) > 0 && this._writePadding(n));
        return this
      }

      _writeDictionaries(t) {
        for (let [e, r] of t.dictionaries) {
          let n = this._dictionaryDeltaOffsets.get(e) || 0;
          if (n === 0 || (r = r == null ? void 0 : r.slice(n)).length > 0) for (let o of r.data) this._writeDictionaryBatch(o, e, n > 0), n += o.length
        }
        return this
      }
    }, Ki = class extends Rr {
      static writeAll(t, e) {
        let r = new Ki(e);
        return Je(t) ? t.then(n => r.writeAll(n)) : Ve(t) ? dl(r, t) : ul(r, t)
      }
    }, Ji = class extends Rr {
      static writeAll(t) {
        let e = new Ji;
        return Je(t) ? t.then(r => e.writeAll(r)) : Ve(t) ? dl(e, t) : ul(e, t)
      }

      constructor() {
        super(), this._autoDestroy = !0
      }

      _writeSchema(t) {
        return this._writeMagic()._writePadding(2)
      }

      _writeFooter(t) {
        let e = Wi.encode(new Wi(t, Yt.V4, this._recordBatchBlocks, this._dictionaryBlocks));
        return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()
      }
    };

    function ul(i, t) {
      let e = t;
      t instanceof Rt && (e = t.batches, i.reset(void 0, t.schema));
      for (let r of e) i.write(r);
      return i.finish()
    }

    function dl(i, t) {
      var e, r, n, o;
      return O(this, void 0, void 0, function* () {
        try {
          for (e = Ne(t); r = yield e.next(), !r.done;) {
            let d = r.value;
            i.write(d)
          }
        } catch (d) {
          n = {error: d}
        } finally {
          try {
            r && !r.done && (o = e.return) && (yield o.call(e))
          } finally {
            if (n) throw n.error
          }
        }
        return i.finish()
      })
    }

    function Xp(i, t) {
      if (Ve(i)) return PI(i, t);
      if (qe(i)) return NI(i, t);
      throw new Error("toDOMStream() must be called with an Iterable or AsyncIterable")
    }

    function NI(i, t) {
      let e = null, r = (t == null ? void 0 : t.type) === "bytes" || !1,
          n = (t == null ? void 0 : t.highWaterMark) || Math.pow(2, 24);
      return new ReadableStream(Object.assign(Object.assign({}, t), {
        start(d) {
          o(d, e || (e = i[Symbol.iterator]()))
        }, pull(d) {
          e ? o(d, e) : d.close()
        }, cancel() {
          ((e == null ? void 0 : e.return) && e.return() || !0) && (e = null)
        }
      }), Object.assign({highWaterMark: r ? n : void 0}, t));

      function o(d, p) {
        let m, I = null, A = d.desiredSize || null;
        for (; !(I = p.next(r ? A : null)).done;) if (ArrayBuffer.isView(I.value) && (m = Y(I.value)) && (A != null && r && (A = A - m.byteLength + 1), I.value = m), d.enqueue(I.value), A != null && --A <= 0) return;
        d.close()
      }
    }

    function PI(i, t) {
      let e = null, r = (t == null ? void 0 : t.type) === "bytes" || !1,
          n = (t == null ? void 0 : t.highWaterMark) || Math.pow(2, 24);
      return new ReadableStream(Object.assign(Object.assign({}, t), {
        start(d) {
          return O(this, void 0, void 0, function* () {
            yield o(d, e || (e = i[Symbol.asyncIterator]()))
          })
        }, pull(d) {
          return O(this, void 0, void 0, function* () {
            e ? yield o(d, e) : d.close()
          })
        }, cancel() {
          return O(this, void 0, void 0, function* () {
            ((e == null ? void 0 : e.return) && (yield e.return()) || !0) && (e = null)
          })
        }
      }), Object.assign({highWaterMark: r ? n : void 0}, t));

      function o(d, p) {
        return O(this, void 0, void 0, function* () {
          let m, I = null, A = d.desiredSize || null;
          for (; !(I = yield p.next(r ? A : null)).done;) if (ArrayBuffer.isView(I.value) && (m = Y(I.value)) && (A != null && r && (A = A - m.byteLength + 1), I.value = m), d.enqueue(I.value), A != null && --A <= 0) return;
          d.close()
        })
      }
    }

    function Jp(i) {
      return new fl(i)
    }

    var fl = class {
      constructor(t) {
        this._numChunks = 0, this._finished = !1, this._bufferedSize = 0;
        let {["readableStrategy"]: e, ["writableStrategy"]: r, ["queueingStrategy"]: n = "count"} = t,
            o = ph(t, ["readableStrategy", "writableStrategy", "queueingStrategy"]);
        this._controller = null, this._builder = Br(o), this._getSize = n !== "bytes" ? Gp : Kp;
        let {["highWaterMark"]: d = n === "bytes" ? Math.pow(2, 14) : 1e3} = Object.assign({}, e), {["highWaterMark"]: p = n === "bytes" ? Math.pow(2, 14) : 1e3} = Object.assign({}, r);
        this.readable = new ReadableStream({
          cancel: () => {
            this._builder.clear()
          }, pull: m => {
            this._maybeFlush(this._builder, this._controller = m)
          }, start: m => {
            this._maybeFlush(this._builder, this._controller = m)
          }
        }, {highWaterMark: d, size: n !== "bytes" ? Gp : Kp}), this.writable = new WritableStream({
          abort: () => {
            this._builder.clear()
          }, write: () => {
            this._maybeFlush(this._builder, this._controller)
          }, close: () => {
            this._maybeFlush(this._builder.finish(), this._controller)
          }
        }, {highWaterMark: p, size: m => this._writeValueAndReturnChunkSize(m)})
      }

      _writeValueAndReturnChunkSize(t) {
        let e = this._bufferedSize;
        return this._bufferedSize = this._getSize(this._builder.append(t)), this._bufferedSize - e
      }

      _maybeFlush(t, e) {
        e != null && (this._bufferedSize >= e.desiredSize && ++this._numChunks && this._enqueue(e, t.toVector()), t.finished && ((t.length > 0 || this._numChunks === 0) && ++this._numChunks && this._enqueue(e, t.toVector()), !this._finished && (this._finished = !0) && this._enqueue(e, null)))
      }

      _enqueue(t, e) {
        this._bufferedSize = 0, this._controller = null, e == null ? t.close() : t.enqueue(e)
      }
    }, Gp = i => {
      var t;
      return (t = i == null ? void 0 : i.length) !== null && t !== void 0 ? t : 0
    }, Kp = i => {
      var t;
      return (t = i == null ? void 0 : i.byteLength) !== null && t !== void 0 ? t : 0
    };

    function Ko(i, t) {
      let e = new Fi, r = null, n = new ReadableStream({
        cancel() {
          return O(this, void 0, void 0, function* () {
            yield e.close()
          })
        }, start(p) {
          return O(this, void 0, void 0, function* () {
            yield d(p, r || (r = yield o()))
          })
        }, pull(p) {
          return O(this, void 0, void 0, function* () {
            r ? yield d(p, r) : p.close()
          })
        }
      });
      return {writable: new WritableStream(e, Object.assign({highWaterMark: Math.pow(2, 14)}, i)), readable: n};

      function o() {
        return O(this, void 0, void 0, function* () {
          return yield(yield Lt.from(e)).open(t)
        })
      }

      function d(p, m) {
        return O(this, void 0, void 0, function* () {
          let I = p.desiredSize, A = null;
          for (; !(A = yield m.next()).done;) if (p.enqueue(A.value), I != null && --I <= 0) return;
          p.close()
        })
      }
    }

    function Jo(i, t) {
      let e = new this(i), r = new Fe(e), n = new ReadableStream({
        cancel() {
          return O(this, void 0, void 0, function* () {
            yield r.cancel()
          })
        }, pull(d) {
          return O(this, void 0, void 0, function* () {
            yield o(d)
          })
        }, start(d) {
          return O(this, void 0, void 0, function* () {
            yield o(d)
          })
        }
      }, Object.assign({highWaterMark: Math.pow(2, 14)}, t));
      return {writable: new WritableStream(e, i), readable: n};

      function o(d) {
        return O(this, void 0, void 0, function* () {
          let p = null, m = d.desiredSize;
          for (; p = yield r.read(m || null);) if (d.enqueue(p), m != null && (m -= p.byteLength) <= 0) return;
          d.close()
        })
      }
    }

    function qo(i, t = "stream") {
      return (t === "stream" ? Ki : Ji).writeAll(i).toUint8Array(!0)
    }

    var WI = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ca), Ka), Ha), Fa), wa), Pa), {
      compareSchemas: Er,
      compareFields: Sp,
      compareTypes: Ip
    });
    te.toDOMStream = Xp;
    Bt.throughDOM = Jp;
    Lt.throughDOM = Ko;
    fr.throughDOM = Ko;
    Bi.throughDOM = Ko;
    Rr.throughDOM = Jo;
    Ji.throughDOM = Jo;
    Ki.throughDOM = Jo;

    function dn(i) {
      switch (i.typeId) {
        case F.Binary:
          return {sqlType: "binary"};
        case F.Bool:
          return {sqlType: "bool"};
        case F.Date:
          return {sqlType: "date"};
        case F.DateDay:
          return {sqlType: "date32[d]"};
        case F.DateMillisecond:
          return {sqlType: "date64[ms]"};
        case F.Decimal: {
          let t = i;
          return {sqlType: "decimal", precision: t.precision, scale: t.scale}
        }
        case F.Float:
          return {sqlType: "float"};
        case F.Float16:
          return {sqlType: "float16"};
        case F.Float32:
          return {sqlType: "float32"};
        case F.Float64:
          return {sqlType: "float64"};
        case F.Int:
          return {sqlType: "int32"};
        case F.Int16:
          return {sqlType: "int16"};
        case F.Int32:
          return {sqlType: "int32"};
        case F.Int64:
          return {sqlType: "int64"};
        case F.Uint16:
          return {sqlType: "uint16"};
        case F.Uint32:
          return {sqlType: "uint32"};
        case F.Uint64:
          return {sqlType: "uint64"};
        case F.Uint8:
          return {sqlType: "uint8"};
        case F.IntervalDayTime:
          return {sqlType: "interval[dt]"};
        case F.IntervalYearMonth:
          return {sqlType: "interval[m]"};
        case F.List:
          return {sqlType: "list", valueType: dn(i.valueType)};
        case F.FixedSizeBinary:
          return {sqlType: "fixedsizebinary", byteWidth: i.byteWidth};
        case F.Null:
          return {sqlType: "null"};
        case F.Utf8:
          return {sqlType: "utf8"};
        case F.Struct:
          return {sqlType: "struct", fields: i.children.map(e => Zo(e.name, e.type))};
        case F.Map: {
          let t = i;
          return {sqlType: "map", keyType: dn(t.keyType), valueType: dn(t.valueType)}
        }
        case F.Time:
          return {sqlType: "time[s]"};
        case F.TimeMicrosecond:
          return {sqlType: "time[us]"};
        case F.TimeMillisecond:
          return {sqlType: "time[ms]"};
        case F.TimeNanosecond:
          return {sqlType: "time[ns]"};
        case F.TimeSecond:
          return {sqlType: "time[s]"};
        case F.Timestamp:
          return {sqlType: "timestamp", timezone: i.timezone || void 0};
        case F.TimestampSecond:
          return {sqlType: "timestamp[s]", timezone: i.timezone || void 0};
        case F.TimestampMicrosecond:
          return {sqlType: "timestamp[us]", timezone: i.timezone || void 0};
        case F.TimestampNanosecond:
          return {sqlType: "timestamp[ns]", timezone: i.timezone || void 0};
        case F.TimestampMillisecond:
          return {sqlType: "timestamp[ms]", timezone: i.timezone || void 0}
      }
      throw new Error(`unsupported arrow type: ${i.toString()}`)
    }

    function Zo(i, t) {
      let e = dn(t);
      return e.name = i, e
    }

    var Qo = class {
      constructor() {
        this._bindings = null;
        this._nextMessageId = 0
      }

      log(t) {
        this.postMessage({messageId: this._nextMessageId++, requestId: 0, type: "LOG", data: t}, [])
      }

      sendOK(t) {
        this.postMessage({messageId: this._nextMessageId++, requestId: t.messageId, type: "OK", data: null}, [])
      }

      failWith(t, e) {
        let r = {name: e.name, message: e.message, stack: e.stack || void 0};
        this.postMessage({messageId: this._nextMessageId++, requestId: t.messageId, type: "ERROR", data: r}, [])
      }

      async onMessage(t) {
        switch (t.type) {
          case"PING":
            this.sendOK(t);
            return;
          case"INSTANTIATE":
            this._bindings != null && this.failWith(t, new Error("duckdb already initialized"));
            try {
              this._bindings = await this.instantiate(t.data[0], t.data[1], e => {
                this.postMessage({
                  messageId: this._nextMessageId++,
                  requestId: t.messageId,
                  type: "INSTANTIATE_PROGRESS",
                  data: e
                }, [])
              }), this.sendOK(t)
            } catch (e) {
              this._bindings = null, this.failWith(t, e)
            }
            return;
          default:
            break
        }
        if (!this._bindings) return this.failWith(t, new Error("duckdb is not initialized"));
        try {
          switch (t.type) {
            case"GET_VERSION":
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "VERSION_STRING",
                data: this._bindings.getVersion()
              }, []);
              break;
            case"GET_FEATURE_FLAGS":
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "FEATURE_FLAGS",
                data: this._bindings.getFeatureFlags()
              }, []);
              break;
            case"RESET":
              this._bindings.reset(), this.sendOK(t);
              break;
            case"OPEN":
              this._bindings.open(t.data), this.sendOK(t);
              break;
            case"DROP_FILE":
              this._bindings.dropFile(t.data), this.sendOK(t);
              break;
            case"DROP_FILES":
              this._bindings.dropFiles(), this.sendOK(t);
              break;
            case"FLUSH_FILES":
              this._bindings.flushFiles(), this.sendOK(t);
              break;
            case"CONNECT": {
              let e = this._bindings.connect();
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "CONNECTION_INFO",
                data: e.useUnsafe((r, n) => n)
              }, []);
              break
            }
            case"DISCONNECT":
              this._bindings.disconnect(t.data), this.sendOK(t);
              break;
            case"CREATE_PREPARED": {
              let e = this._bindings.createPrepared(t.data[0], t.data[1]);
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "PREPARED_STATEMENT_ID",
                data: e
              }, []);
              break
            }
            case"CLOSE_PREPARED": {
              this._bindings.closePrepared(t.data[0], t.data[1]), this.sendOK(t);
              break
            }
            case"RUN_PREPARED": {
              let e = this._bindings.runPrepared(t.data[0], t.data[1], t.data[2]);
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "QUERY_RESULT",
                data: e
              }, [e.buffer]);
              break
            }
            case"RUN_QUERY": {
              let e = this._bindings.runQuery(t.data[0], t.data[1]);
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "QUERY_RESULT",
                data: e
              }, [e.buffer]);
              break
            }
            case"SEND_PREPARED": {
              let e = this._bindings.sendPrepared(t.data[0], t.data[1], t.data[2]);
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "QUERY_RESULT_HEADER",
                data: e
              }, [e.buffer]);
              break
            }
            case"START_PENDING_QUERY": {
              let e = this._bindings.startPendingQuery(t.data[0], t.data[1]), r = [];
              e && r.push(e.buffer), this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "QUERY_RESULT_HEADER_OR_NULL",
                data: e
              }, r);
              break
            }
            case"POLL_PENDING_QUERY": {
              let e = this._bindings.pollPendingQuery(t.data), r = [];
              e && r.push(e.buffer), this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "QUERY_RESULT_HEADER_OR_NULL",
                data: e
              }, r);
              break
            }
            case"CANCEL_PENDING_QUERY": {
              let e = this._bindings.cancelPendingQuery(t.data);
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "SUCCESS",
                data: e
              }, []);
              break
            }
            case"FETCH_QUERY_RESULTS": {
              let e = this._bindings.fetchQueryResults(t.data);
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "QUERY_RESULT_CHUNK",
                data: e
              }, [e.buffer]);
              break
            }
            case"GET_TABLE_NAMES": {
              let e = this._bindings.getTableNames(t.data[0], t.data[1]);
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "TABLE_NAMES",
                data: e
              }, []);
              break
            }
            case"GLOB_FILE_INFOS": {
              let e = this._bindings.globFiles(t.data);
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "FILE_INFOS",
                data: e
              }, []);
              break
            }
            case"REGISTER_FILE_URL":
              this._bindings.registerFileURL(t.data[0], t.data[1], t.data[2], t.data[3]), this.sendOK(t);
              break;
            case"REGISTER_FILE_BUFFER":
              this._bindings.registerFileBuffer(t.data[0], t.data[1]), this.sendOK(t);
              break;
            case"REGISTER_FILE_HANDLE":
              this._bindings.registerFileHandle(t.data[0], t.data[1], t.data[2], t.data[3]), this.sendOK(t);
              break;
            case"COPY_FILE_TO_PATH":
              this._bindings.copyFileToPath(t.data[0], t.data[1]), this.sendOK(t);
              break;
            case"COPY_FILE_TO_BUFFER": {
              let e = this._bindings.copyFileToBuffer(t.data);
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "FILE_BUFFER",
                data: e
              }, []);
              break
            }
            case"COLLECT_FILE_STATISTICS":
              this._bindings.collectFileStatistics(t.data[0], t.data[1]), this.sendOK(t);
              break;
            case"EXPORT_FILE_STATISTICS": {
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "FILE_STATISTICS",
                data: this._bindings.exportFileStatistics(t.data)
              }, []);
              break
            }
            case"INSERT_ARROW_FROM_IPC_STREAM": {
              this._bindings.insertArrowFromIPCStream(t.data[0], t.data[1], t.data[2]), this.sendOK(t);
              break
            }
            case"IMPORT_CSV_FROM_PATH": {
              this._bindings.insertCSVFromPath(t.data[0], t.data[1], t.data[2]), this.sendOK(t);
              break
            }
            case"IMPORT_JSON_FROM_PATH": {
              this._bindings.insertJSONFromPath(t.data[0], t.data[1], t.data[2]), this.sendOK(t);
              break
            }
            case"TOKENIZE": {
              let e = this._bindings.tokenize(t.data);
              this.postMessage({
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: "SCRIPT_TOKENS",
                data: e
              }, []);
              break
            }
          }
        } catch (e) {
          return this.failWith(t, e)
        }
      }
    };
    var Qp = {};
    var $I = (() => {
      var i = Qp.url;
      return function (t) {
        t = t || {};
        var e = typeof t < "u" ? t : {}, r, n;
        e.ready = new Promise(function (s, a) {
          r = s, n = a
        });
        var o = Object.assign({}, e), d = [], p = "./this.program", m = (s, a) => {
              throw a
            }, I = typeof window == "object", A = typeof importScripts == "function",
            E = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string",
            T = "";

        function k(s) {
          return e.locateFile ? e.locateFile(s, T) : T + s
        }

        var lt, ut, wt, Ot;

        function ce(s) {
          if (s instanceof as) return;
          Ge("exiting due to exception: " + s)
        }

        if (E) {
          A ? T = hl().dirname(T) + "/" : T = __dirname + "/";
          var _e, yr;
          typeof pa == "function" && (_e = Zp(), yr = hl()), lt = (s, a) => (s = yr.normalize(s), _e.readFileSync(s, a ? void 0 : "utf8")), wt = s => {
            var a = lt(s, !0);
            return a.buffer || (a = new Uint8Array(a)), a
          }, ut = (s, a, l) => {
            s = yr.normalize(s), _e.readFile(s, function (c, u) {
              c ? l(c) : a(u.buffer)
            })
          }, process.argv.length > 1 && (p = process.argv[1].replace(/\\/g, "/")), d = process.argv.slice(2), process.on("uncaughtException", function (s) {
            if (!(s instanceof as)) throw s
          }), process.on("unhandledRejection", function (s) {
            throw s
          }), m = (s, a) => {
            if (Fl()) throw process.exitCode = s, a;
            ce(a), process.exit(s)
          }, e.inspect = function () {
            return "[Emscripten Module object]"
          }
        } else (I || A) && (A ? T = self.location.href : typeof document < "u" && document.currentScript && (T = document.currentScript.src), i && (T = i), T.indexOf("blob:") !== 0 ? T = T.substr(0, T.replace(/[?#].*/, "").lastIndexOf("/") + 1) : T = "", lt = s => {
          var a = new XMLHttpRequest;
          return a.open("GET", s, !1), a.send(null), a.responseText
        }, A && (wt = s => {
          var a = new XMLHttpRequest;
          return a.open("GET", s, !1), a.responseType = "arraybuffer", a.send(null), new Uint8Array(a.response)
        }), ut = (s, a, l) => {
          var c = new XMLHttpRequest;
          c.open("GET", s, !0), c.responseType = "arraybuffer", c.onload = () => {
            if (c.status == 200 || c.status == 0 && c.response) {
              a(c.response);
              return
            }
            l()
          }, c.onerror = l, c.send(null)
        }, Ot = s => document.title = s);
        var fn = e.print || console.log.bind(console), Ge = e.printErr || console.warn.bind(console);
        Object.assign(e, o), o = null, e.arguments && (d = e.arguments), e.thisProgram && (p = e.thisProgram), e.quit && (m = e.quit);
        var qi;
        e.wasmBinary && (qi = e.wasmBinary);
        var hn = e.noExitRuntime || !0;
        typeof WebAssembly != "object" && Me("no native wasm support detected");
        var ct, Zt = !1, ne;

        function ue(s, a) {
          s || Me(a)
        }

        var Qt = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;

        function Wt(s, a, l) {
          a >>>= 0;
          for (var c = a + l, u = a; s[u] && !(u >= c);) ++u;
          if (u - a > 16 && s.buffer && Qt) return Qt.decode(s.subarray(a, u));
          for (var f = ""; a < u;) {
            var h = s[a++];
            if (!(h & 128)) {
              f += String.fromCharCode(h);
              continue
            }
            var y = s[a++] & 63;
            if ((h & 224) == 192) {
              f += String.fromCharCode((h & 31) << 6 | y);
              continue
            }
            var _ = s[a++] & 63;
            if ((h & 240) == 224 ? h = (h & 15) << 12 | y << 6 | _ : h = (h & 7) << 18 | y << 12 | _ << 6 | s[a++] & 63, h < 65536) f += String.fromCharCode(h); else {
              var b = h - 65536;
              f += String.fromCharCode(55296 | b >> 10, 56320 | b & 1023)
            }
          }
          return f
        }

        function pt(s, a) {
          return s >>>= 0, s ? Wt(Qi, s, a) : ""
        }

        function me(s, a, l, c) {
          if (l >>>= 0, !(c > 0)) return 0;
          for (var u = l, f = l + c - 1, h = 0; h < s.length; ++h) {
            var y = s.charCodeAt(h);
            if (y >= 55296 && y <= 57343) {
              var _ = s.charCodeAt(++h);
              y = 65536 + ((y & 1023) << 10) | _ & 1023
            }
            if (y <= 127) {
              if (l >= f) break;
              a[l++ >>> 0] = y
            } else if (y <= 2047) {
              if (l + 1 >= f) break;
              a[l++ >>> 0] = 192 | y >> 6, a[l++ >>> 0] = 128 | y & 63
            } else if (y <= 65535) {
              if (l + 2 >= f) break;
              a[l++ >>> 0] = 224 | y >> 12, a[l++ >>> 0] = 128 | y >> 6 & 63, a[l++ >>> 0] = 128 | y & 63
            } else {
              if (l + 3 >= f) break;
              a[l++ >>> 0] = 240 | y >> 18, a[l++ >>> 0] = 128 | y >> 12 & 63, a[l++ >>> 0] = 128 | y >> 6 & 63, a[l++ >>> 0] = 128 | y & 63
            }
          }
          return a[l >>> 0] = 0, l - u
        }

        function Zi(s, a, l) {
          return me(s, Qi, a, l)
        }

        function uy(s) {
          for (var a = 0, l = 0; l < s.length; ++l) {
            var c = s.charCodeAt(l);
            c <= 127 ? a++ : c <= 2047 ? a += 2 : c >= 55296 && c <= 57343 ? (a += 4, ++l) : a += 3
          }
          return a
        }

        var vl, hi, Qi, pn, gl, M, $t, dy, fy;

        function wl(s) {
          vl = s, e.HEAP8 = hi = new Int8Array(s), e.HEAP16 = pn = new Int16Array(s), e.HEAP32 = M = new Int32Array(s), e.HEAPU8 = Qi = new Uint8Array(s), e.HEAPU16 = gl = new Uint16Array(s), e.HEAPU32 = $t = new Uint32Array(s), e.HEAPF32 = dy = new Float32Array(s), e.HEAPF64 = fy = new Float64Array(s)
        }

        var e1 = e.INITIAL_MEMORY || 16777216, jl, Sl = [], Il = [], hy = [], Cl = [], py = !1;

        function Fl() {
          return hn
        }

        function yy() {
          if (e.preRun) for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length;) vy(e.preRun.shift());
          ls(Sl)
        }

        function _y() {
          py = !0, ls(Il)
        }

        function my() {
          ls(hy)
        }

        function by() {
          if (e.postRun) for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length;) wy(e.postRun.shift());
          ls(Cl)
        }

        function vy(s) {
          Sl.unshift(s)
        }

        function gy(s) {
          Il.unshift(s)
        }

        function wy(s) {
          Cl.unshift(s)
        }

        var _r = 0, aa = null, yn = null;

        function jy(s) {
          _r++, e.monitorRunDependencies && e.monitorRunDependencies(_r)
        }

        function Sy(s) {
          if (_r--, e.monitorRunDependencies && e.monitorRunDependencies(_r), _r == 0 && (aa !== null && (clearInterval(aa), aa = null), yn)) {
            var a = yn;
            yn = null, a()
          }
        }

        function Me(s) {
          e.onAbort && e.onAbort(s), s = "Aborted(" + s + ")", Ge(s), Zt = !0, ne = 1, s += ". Build with -sASSERTIONS for more info.";
          var a = new WebAssembly.RuntimeError(s);
          throw n(a), a
        }

        var Iy = "data:application/octet-stream;base64,";

        function Al(s) {
          return s.startsWith(Iy)
        }

        var Ue;
        e.locateFile ? (Ue = "./duckdb-mvp.wasm", Al(Ue) || (Ue = k(Ue))) : Ue = new URL("https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.27.0/dist/duckdb-mvp.wasm", Qp.url).toString();

        function xl(s) {
          try {
            if (s == Ue && qi) return new Uint8Array(qi);
            if (wt) return wt(s);
            throw"both async and sync fetching of the wasm failed"
          } catch (a) {
            Me(a)
          }
        }

        function Cy() {
          return !qi && (I || A) && typeof fetch == "function" ? fetch(Ue, {credentials: "same-origin"}).then(function (s) {
            if (!s.ok) throw"failed to load wasm binary file at '" + Ue + "'";
            return s.arrayBuffer()
          }).catch(function () {
            return xl(Ue)
          }) : Promise.resolve().then(function () {
            return xl(Ue)
          })
        }

        function Fy() {
          var s = {a: fm};

          function a(h, y) {
            var _ = h.exports;
            e.asm = _, ct = e.asm.yf, wl(ct.buffer), jl = e.asm.Bf, gy(e.asm.zf), Sy("wasm-instantiate")
          }

          jy("wasm-instantiate");

          function l(h) {
            a(h.instance)
          }

          function c(h) {
            return Cy().then(function (y) {
              return WebAssembly.instantiate(y, s)
            }).then(function (y) {
              return y
            }).then(h, function (y) {
              Ge("failed to asynchronously prepare wasm: " + y), Me(y)
            })
          }

          function u() {
            return !qi && typeof WebAssembly.instantiateStreaming == "function" && !Al(Ue) && !E && typeof fetch == "function" ? fetch(Ue, {credentials: "same-origin"}).then(function (h) {
              var y = WebAssembly.instantiateStreaming(h, s);
              return y.then(l, function (_) {
                return Ge("wasm streaming compile failed: " + _), Ge("falling back to ArrayBuffer instantiation"), c(l)
              })
            }) : c(l)
          }

          if (e.instantiateWasm) try {
            var f = e.instantiateWasm(s, a);
            return f
          } catch (h) {
            Ge("Module.instantiateWasm callback failed with error: " + h), n(h)
          }
          return u().catch(n), {}
        }

        function as(s) {
          this.name = "ExitStatus", this.message = "Program terminated with exit(" + s + ")", this.status = s
        }

        function ls(s) {
          for (; s.length > 0;) s.shift()(e)
        }

        function Ay(s) {
          return bs(s + 24) + 24
        }

        var cs = [];

        function xy(s) {
          s.add_ref()
        }

        var us = 0;

        function By(s) {
          var a = new Ei(s);
          return a.get_caught() || (a.set_caught(!0), us--), a.set_rethrown(!1), cs.push(a), xy(a), a.get_exception_ptr()
        }

        var Ke = 0;

        function Ei(s) {
          this.excPtr = s, this.ptr = s - 24, this.set_type = function (a) {
            $t[this.ptr + 4 >>> 2] = a
          }, this.get_type = function () {
            return $t[this.ptr + 4 >>> 2]
          }, this.set_destructor = function (a) {
            $t[this.ptr + 8 >>> 2] = a
          }, this.get_destructor = function () {
            return $t[this.ptr + 8 >>> 2]
          }, this.set_refcount = function (a) {
            M[this.ptr >>> 2] = a
          }, this.set_caught = function (a) {
            a = a ? 1 : 0, hi[this.ptr + 12 >>> 0] = a
          }, this.get_caught = function () {
            return hi[this.ptr + 12 >>> 0] != 0
          }, this.set_rethrown = function (a) {
            a = a ? 1 : 0, hi[this.ptr + 13 >>> 0] = a
          }, this.get_rethrown = function () {
            return hi[this.ptr + 13 >>> 0] != 0
          }, this.init = function (a, l) {
            this.set_adjusted_ptr(0), this.set_type(a), this.set_destructor(l), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
          }, this.add_ref = function () {
            var a = M[this.ptr >>> 2];
            M[this.ptr >>> 2] = a + 1
          }, this.release_ref = function () {
            var a = M[this.ptr >>> 2];
            return M[this.ptr >>> 2] = a - 1, a === 1
          }, this.set_adjusted_ptr = function (a) {
            $t[this.ptr + 16 >>> 2] = a
          }, this.get_adjusted_ptr = function () {
            return $t[this.ptr + 16 >>> 2]
          }, this.get_exception_ptr = function () {
            var a = Hl(this.get_type());
            if (a) return $t[this.excPtr >>> 2];
            var l = this.get_adjusted_ptr();
            return l !== 0 ? l : this.excPtr
          }
        }

        function Bl(s) {
          return Pl(new Ei(s).ptr)
        }

        var ds = [];

        function U(s) {
          var a = ds[s];
          return a || (s >= ds.length && (ds.length = s + 1), ds[s] = a = jl.get(s)), a
        }

        function Ty(s) {
          if (s.release_ref() && !s.get_rethrown()) {
            var a = s.get_destructor();
            a && U(a)(s.excPtr), Bl(s.excPtr)
          }
        }

        function Dy() {
          S(0);
          var s = cs.pop();
          Ty(s), Ke = 0
        }

        function Ey(s) {
          throw Ke || (Ke = s), s
        }

        function ky() {
          var s = Ke;
          if (!s) return At(0), 0;
          var a = new Ei(s);
          a.set_adjusted_ptr(s);
          var l = a.get_type();
          if (!l) return At(0), s;
          for (var c = 0; c < arguments.length; c++) {
            var u = arguments[c];
            if (u === 0 || u === l) break;
            var f = a.ptr + 16;
            if (br(u, l, f)) return At(u), s
          }
          return At(l), s
        }

        function Oy() {
          var s = Ke;
          if (!s) return At(0), 0;
          var a = new Ei(s);
          a.set_adjusted_ptr(s);
          var l = a.get_type();
          if (!l) return At(0), s;
          for (var c = 0; c < arguments.length; c++) {
            var u = arguments[c];
            if (u === 0 || u === l) break;
            var f = a.ptr + 16;
            if (br(u, l, f)) return At(u), s
          }
          return At(l), s
        }

        function Ry() {
          var s = Ke;
          if (!s) return At(0), 0;
          var a = new Ei(s);
          a.set_adjusted_ptr(s);
          var l = a.get_type();
          if (!l) return At(0), s;
          for (var c = 0; c < arguments.length; c++) {
            var u = arguments[c];
            if (u === 0 || u === l) break;
            var f = a.ptr + 16;
            if (br(u, l, f)) return At(u), s
          }
          return At(l), s
        }

        function My() {
          var s = Ke;
          if (!s) return At(0), 0;
          var a = new Ei(s);
          a.set_adjusted_ptr(s);
          var l = a.get_type();
          if (!l) return At(0), s;
          for (var c = 0; c < arguments.length; c++) {
            var u = arguments[c];
            if (u === 0 || u === l) break;
            var f = a.ptr + 16;
            if (br(u, l, f)) return At(u), s
          }
          return At(l), s
        }

        function Uy() {
          var s = Ke;
          if (!s) return At(0), 0;
          var a = new Ei(s);
          a.set_adjusted_ptr(s);
          var l = a.get_type();
          if (!l) return At(0), s;
          for (var c = 0; c < arguments.length; c++) {
            var u = arguments[c];
            if (u === 0 || u === l) break;
            var f = a.ptr + 16;
            if (br(u, l, f)) return At(u), s
          }
          return At(l), s
        }

        function Ly() {
          var s = Ke;
          if (!s) return At(0), 0;
          var a = new Ei(s);
          a.set_adjusted_ptr(s);
          var l = a.get_type();
          if (!l) return At(0), s;
          for (var c = 0; c < arguments.length; c++) {
            var u = arguments[c];
            if (u === 0 || u === l) break;
            var f = a.ptr + 16;
            if (br(u, l, f)) return At(u), s
          }
          return At(l), s
        }

        function Ny() {
          var s = cs.pop();
          s || Me("no exception to throw");
          var a = s.excPtr;
          throw s.get_rethrown() || (cs.push(s), s.set_rethrown(!0), s.set_caught(!1), us++), Ke = a, a
        }

        function Py(s, a, l) {
          var c = new Ei(s);
          throw c.init(a, l), Ke = s, us++, s
        }

        function Hy() {
          return us
        }

        var mr = {
          varargs: void 0, get: function () {
            mr.varargs += 4;
            var s = M[mr.varargs - 4 >>> 2];
            return s
          }, getStr: function (s) {
            var a = pt(s);
            return a
          }
        };

        function Vy(s, a, l, c, u) {
          for (var f = 0, h = a ? M[a >>> 2] : 0, y = a ? M[a + 4 >>> 2] : 0, _ = l ? M[l >>> 2] : 0, b = l ? M[l + 4 >>> 2] : 0, v = c ? M[c >>> 2] : 0, g = c ? M[c + 4 >>> 2] : 0, C = 0, x = 0, D = 0, P = 0, ot = 0, dt = 0, B = (a ? M[a >>> 2] : 0) | (l ? M[l >>> 2] : 0) | (c ? M[c >>> 2] : 0), R = (a ? M[a + 4 >>> 2] : 0) | (l ? M[l + 4 >>> 2] : 0) | (c ? M[c + 4 >>> 2] : 0), gt = function (tj, ej, ij, Vf) {
            return tj < 32 ? ej & Vf : ij & Vf
          }, bt = 0; bt < s; bt++) {
            var de = 1 << bt % 32;
            if (!!gt(bt, B, R, de)) {
              var bn = mr.getStreamFromFD(bt), ws = mr.DEFAULT_POLLMASK;
              bn.stream_ops.poll && (ws = bn.stream_ops.poll(bn)), ws & 1 && gt(bt, h, y, de) && (bt < 32 ? C = C | de : x = x | de, f++), ws & 4 && gt(bt, _, b, de) && (bt < 32 ? D = D | de : P = P | de, f++), ws & 2 && gt(bt, v, g, de) && (bt < 32 ? ot = ot | de : dt = dt | de, f++)
            }
          }
          return a && (M[a >>> 2] = C, M[a + 4 >>> 2] = x), l && (M[l >>> 2] = D, M[l + 4 >>> 2] = P), c && (M[c >>> 2] = ot, M[c + 4 >>> 2] = dt), f
        }

        function zy() {
          Ge("missing function: $SOCKFS"), Me(-1)
        }

        function Tl() {
          Ge("missing function: $FS"), Me(-1)
        }

        function _n(s) {
          var a = zy.getSocket(s);
          if (!a) throw new Tl.ErrnoError(8);
          return a
        }

        function la(s) {
          return (s & 255) + "." + (s >> 8 & 255) + "." + (s >> 16 & 255) + "." + (s >> 24 & 255)
        }

        function Dl(s) {
          var a = "", l = 0, c = 0, u = 0, f = 0, h = 0, y = 0,
              _ = [s[0] & 65535, s[0] >> 16, s[1] & 65535, s[1] >> 16, s[2] & 65535, s[2] >> 16, s[3] & 65535, s[3] >> 16],
              b = !0, v = "";
          for (y = 0; y < 5; y++) if (_[y] !== 0) {
            b = !1;
            break
          }
          if (b) {
            if (v = la(_[6] | _[7] << 16), _[5] === -1) return a = "::ffff:", a += v, a;
            if (_[5] === 0) return a = "::", v === "0.0.0.0" && (v = ""), v === "0.0.0.1" && (v = "1"), a += v, a
          }
          for (l = 0; l < 8; l++) _[l] === 0 && (l - u > 1 && (h = 0), u = l, h++), h > c && (c = h, f = l - c + 1);
          for (l = 0; l < 8; l++) {
            if (c > 1 && _[l] === 0 && l >= f && l < f + c) {
              l === f && (a += ":", f === 0 && (a += ":"));
              continue
            }
            a += Number(ha(_[l] & 65535)).toString(16), a += l < 7 ? ":" : ""
          }
          return a
        }

        function El(s, a) {
          var l = pn[s >>> 1], c = ha(gl[s + 2 >>> 1]), u;
          switch (l) {
            case 2:
              if (a !== 16) return {errno: 28};
              u = M[s + 4 >>> 2], u = la(u);
              break;
            case 10:
              if (a !== 28) return {errno: 28};
              u = [M[s + 8 >>> 2], M[s + 12 >>> 2], M[s + 16 >>> 2], M[s + 20 >>> 2]], u = Dl(u);
              break;
            default:
              return {errno: 5}
          }
          return {family: l, addr: u, port: c}
        }

        function fs(s) {
          for (var a = s.split("."), l = 0; l < 4; l++) {
            var c = Number(a[l]);
            if (isNaN(c)) return null;
            a[l] = c
          }
          return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0
        }

        function hs(s) {
          return parseInt(s)
        }

        function ca(s) {
          var a, l, c, u,
              f = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
              h = [];
          if (!f.test(s)) return null;
          if (s === "::") return [0, 0, 0, 0, 0, 0, 0, 0];
          for (s.startsWith("::") ? s = s.replace("::", "Z:") : s = s.replace("::", ":Z:"), s.indexOf(".") > 0 ? (s = s.replace(new RegExp("[.]", "g"), ":"), a = s.split(":"), a[a.length - 4] = hs(a[a.length - 4]) + hs(a[a.length - 3]) * 256, a[a.length - 3] = hs(a[a.length - 2]) + hs(a[a.length - 1]) * 256, a = a.slice(0, a.length - 2)) : a = s.split(":"), c = 0, u = 0, l = 0; l < a.length; l++) if (typeof a[l] == "string") if (a[l] === "Z") {
            for (u = 0; u < 8 - a.length + 1; u++) h[l + u] = 0;
            c = u - 1
          } else h[l + c] = ms(parseInt(a[l], 16)); else h[l + c] = a[l];
          return [h[1] << 16 | h[0], h[3] << 16 | h[2], h[5] << 16 | h[4], h[7] << 16 | h[6]]
        }

        var Le = {
          address_map: {id: 1, addrs: {}, names: {}}, lookup_name: function (s) {
            var a = fs(s);
            if (a !== null || (a = ca(s), a !== null)) return s;
            var l;
            if (Le.address_map.addrs[s]) l = Le.address_map.addrs[s]; else {
              var c = Le.address_map.id++;
              ue(c < 65535, "exceeded max address mappings of 65535"), l = "172.29." + (c & 255) + "." + (c & 65280), Le.address_map.names[l] = s, Le.address_map.addrs[s] = l
            }
            return l
          }, lookup_addr: function (s) {
            return Le.address_map.names[s] ? Le.address_map.names[s] : null
          }
        };

        function kl(s, a, l) {
          if (l && s === 0) return null;
          var c = El(s, a);
          if (c.errno) throw new Tl.ErrnoError(c.errno);
          return c.addr = Le.lookup_addr(c.addr) || c.addr, c
        }

        function Wy(s, a, l) {
          var c = _n(s), u = kl(a, l);
          return c.sock_ops.bind(c, u.addr, u.port), 0
        }

        function $y(s, a, l) {
          var c = _n(s), u = kl(a, l);
          return c.sock_ops.connect(c, u.addr, u.port), 0
        }

        function Yy(s, a, l, c) {
        }

        function Xy(s, a, l) {
          return mr.varargs = l, 0
        }

        function Gy(s, a) {
        }

        function Ky(s, a, l) {
        }

        function Jy(s, a, l) {
        }

        function Ol(s, a) {
          return Qi.fill(0, s, s + a), s
        }

        function ua(s, a, l, c, u) {
          switch (a) {
            case 2:
              l = fs(l), Ol(s, 16), u && (M[u >>> 2] = 16), pn[s >>> 1] = a, M[s + 4 >>> 2] = l, pn[s + 2 >>> 1] = ms(c);
              break;
            case 10:
              l = ca(l), Ol(s, 28), u && (M[u >>> 2] = 28), M[s >>> 2] = a, M[s + 8 >>> 2] = l[0], M[s + 12 >>> 2] = l[1], M[s + 16 >>> 2] = l[2], M[s + 20 >>> 2] = l[3], pn[s + 2 >>> 1] = ms(c);
              break;
            default:
              return 5
          }
          return 0
        }

        function qy(s, a, l) {
          var c = _n(s);
          if (!c.daddr) return -53;
          var u = ua(a, c.family, Le.lookup_name(c.daddr), c.dport, l);
          return 0
        }

        function Zy(s, a, l, c, u) {
          var f = _n(s);
          return a === 1 && l === 4 ? (M[c >>> 2] = f.error, M[u >>> 2] = 4, f.error = null, 0) : -50
        }

        function Qy(s, a, l) {
          return mr.varargs = l, 0
        }

        function t_(s, a) {
        }

        function e_(s, a, l) {
        }

        function i_(s, a, l, c) {
        }

        function r_(s, a, l, c) {
          mr.varargs = c
        }

        function n_(s, a, l, c, u, f) {
          var h = _n(s), y = h.sock_ops.recvmsg(h, l);
          if (!y) return 0;
          if (u) var _ = ua(u, h.family, Le.lookup_name(y.addr), y.port, f);
          return Qi.set(y.buffer, a >>> 0), y.buffer.byteLength
        }

        function s_(s, a, l, c) {
        }

        function o_(s) {
        }

        function a_(s, a, l, c, u, f) {
        }

        function l_(s, a, l) {
        }

        function c_(s, a) {
        }

        function u_(s, a, l) {
        }

        function d_(s) {
        }

        var Rl = "To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking";

        function f_(s, a) {
          Me(Rl)
        }

        function h_(s, a) {
          Me(Rl)
        }

        var p_ = !0;

        function y_() {
          return p_
        }

        function __() {
          Me("")
        }

        function m_(s, a) {
          return globalThis.DUCKDB_RUNTIME.createDirectory(e, s, a)
        }

        function b_(s, a) {
          return globalThis.DUCKDB_RUNTIME.checkDirectory(e, s, a)
        }

        function v_(s, a) {
          return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(e, s, a)
        }

        function g_(s, a) {
          return globalThis.DUCKDB_RUNTIME.removeDirectory(e, s, a)
        }

        function w_(s) {
          return globalThis.DUCKDB_RUNTIME.closeFile(e, s)
        }

        function j_(s, a) {
          return globalThis.DUCKDB_RUNTIME.checkFile(e, s, a)
        }

        function S_(s) {
          return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(e, s)
        }

        function I_(s, a, l, c) {
          return globalThis.DUCKDB_RUNTIME.moveFile(e, s, a, l, c)
        }

        function C_(s, a) {
          return globalThis.DUCKDB_RUNTIME.openFile(e, s, a)
        }

        function F_(s, a, l, c) {
          return globalThis.DUCKDB_RUNTIME.readFile(e, s, a, l, c)
        }

        function A_(s, a) {
          return globalThis.DUCKDB_RUNTIME.truncateFile(e, s, a)
        }

        function x_(s, a, l, c) {
          return globalThis.DUCKDB_RUNTIME.writeFile(e, s, a, l, c)
        }

        function B_(s) {
          return globalThis.DUCKDB_RUNTIME.getDefaultDataProtocol(s)
        }

        function T_(s, a) {
          return globalThis.DUCKDB_RUNTIME.glob(e, s, a)
        }

        function D_(s) {
          return globalThis.DUCKDB_RUNTIME.testPlatformFeature(e, s)
        }

        function E_(s, a, l, c, u, f) {
          return globalThis.DUCKDB_RUNTIME.callScalarUDF(e, s, a, l, c, u, f)
        }

        function k_() {
          return Date.now()
        }

        function Ml() {
          return 4294901760
        }

        function O_() {
          return Ml()
        }

        var da;
        E ? da = () => {
          var s = process.hrtime();
          return s[0] * 1e3 + s[1] / 1e6
        } : da = () => performance.now();

        function R_(s, a, l) {
          Qi.copyWithin(s >>> 0, a >>> 0, a + l >>> 0)
        }

        function M_(s) {
          try {
            return ct.grow(s - vl.byteLength + 65535 >>> 16), wl(ct.buffer), 1
          } catch (a) {
          }
        }

        function U_(s) {
          var a = Qi.length;
          s = s >>> 0;
          var l = Ml();
          if (s > l) return !1;
          let c = (_, b) => _ + (b - _ % b) % b;
          for (var u = 1; u <= 4; u *= 2) {
            var f = a * (1 + .2 / u);
            f = Math.min(f, s + 100663296);
            var h = Math.min(l, c(Math.max(s, f), 65536)), y = M_(h);
            if (y) return !0
          }
          return !1
        }

        var fa = {};

        function L_() {
          return p || "./this.program"
        }

        function mn() {
          if (!mn.strings) {
            var s = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                a = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG: s,
                  _: L_()
                };
            for (var l in fa) fa[l] === void 0 ? delete a[l] : a[l] = fa[l];
            var c = [];
            for (var l in a) c.push(l + "=" + a[l]);
            mn.strings = c
          }
          return mn.strings
        }

        function N_(s, a, l) {
          for (var c = 0; c < s.length; ++c) hi[a++ >>> 0] = s.charCodeAt(c);
          l || (hi[a >>> 0] = 0)
        }

        function P_(s, a) {
          var l = 0;
          return mn().forEach(function (c, u) {
            var f = a + l;
            $t[s + u * 4 >>> 2] = f, N_(c, f), l += c.length + 1
          }), 0
        }

        function H_(s, a) {
          var l = mn();
          $t[s >>> 2] = l.length;
          var c = 0;
          return l.forEach(function (u) {
            c += u.length + 1
          }), $t[a >>> 2] = c, 0
        }

        function V_(s) {
          return 52
        }

        function z_(s, a) {
          var l = s == 1 || s == 2 ? 2 : Me();
          return hi[a >>> 0] = l, 0
        }

        function W_(s, a, l, c, u, f) {
          return 52
        }

        function $_(s, a, l, c, u, f) {
          return 52
        }

        function Y_(s, a, l, c) {
          return 52
        }

        function X_(s, a, l, c, u) {
          return 70
        }

        function G_(s) {
          return 52
        }

        var K_ = [null, [], []];

        function J_(s, a) {
          var l = K_[s];
          a === 0 || a === 10 ? ((s === 1 ? fn : Ge)(Wt(l, 0)), l.length = 0) : l.push(a)
        }

        function q_(s, a, l, c) {
          for (var u = 0, f = 0; f < l; f++) {
            var h = $t[a >>> 2], y = $t[a + 4 >>> 2];
            a += 8;
            for (var _ = 0; _ < y; _++) J_(s, Qi[h + _ >>> 0]);
            u += y
          }
          return $t[c >>> 2] = u, 0
        }

        function Z_(s, a, l, c) {
          var u = 0, f = 0, h = 0, y = 0, _ = 0, b = 0, v;

          function g(C, x, D, P, ot, dt) {
            var B, R, gt, bt;
            return R = C === 10 ? 28 : 16, ot = C === 10 ? Dl(ot) : la(ot), B = bs(R), bt = ua(B, C, ot, dt), ue(!bt), gt = bs(32), M[gt + 4 >>> 2] = C, M[gt + 8 >>> 2] = x, M[gt + 12 >>> 2] = D, M[gt + 24 >>> 2] = P, $t[gt + 20 >>> 2] = B, C === 10 ? M[gt + 16 >>> 2] = 28 : M[gt + 16 >>> 2] = 16, M[gt + 28 >>> 2] = 0, gt
          }

          if (l && (h = M[l >>> 2], y = M[l + 4 >>> 2], _ = M[l + 8 >>> 2], b = M[l + 12 >>> 2]), _ && !b && (b = _ === 2 ? 17 : 6), !_ && b && (_ = b === 17 ? 2 : 1), b === 0 && (b = 6), _ === 0 && (_ = 1), !s && !a) return -2;
          if (h & -1088 || l !== 0 && M[l >>> 2] & 2 && !s) return -1;
          if (h & 32) return -2;
          if (_ !== 0 && _ !== 1 && _ !== 2) return -7;
          if (y !== 0 && y !== 2 && y !== 10) return -6;
          if (a && (a = pt(a), f = parseInt(a, 10), isNaN(f))) return h & 1024 ? -2 : -8;
          if (!s) return y === 0 && (y = 2), (h & 1) === 0 && (y === 2 ? u = _s(2130706433) : u = [0, 0, 0, 1]), v = g(y, _, b, null, u, f), $t[c >>> 2] = v, 0;
          if (s = pt(s), u = fs(s), u !== null) if (y === 0 || y === 2) y = 2; else if (y === 10 && h & 8) u = [0, 0, _s(65535), u], y = 10; else return -2; else if (u = ca(s), u !== null) if (y === 0 || y === 10) y = 10; else return -2;
          return u != null ? (v = g(y, _, b, s, u, f), $t[c >>> 2] = v, 0) : h & 4 ? -2 : (s = Le.lookup_name(s), u = fs(s), y === 0 ? y = 2 : y === 10 && (u = [0, 0, _s(65535), u]), v = g(y, _, b, null, u, f), $t[c >>> 2] = v, 0)
        }

        function Q_() {
          if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
            var s = new Uint8Array(1);
            return () => (crypto.getRandomValues(s), s[0])
          } else if (E) try {
            var a = pa("crypto");
            return () => a.randomBytes(1)[0]
          } catch (l) {
          }
          return () => Me("randomDevice")
        }

        function ps(s, a) {
          ps.randomDevice || (ps.randomDevice = Q_());
          for (var l = 0; l < a; l++) hi[s + l >>> 0] = ps.randomDevice();
          return 0
        }

        function tm(s, a, l, c, u, f, h) {
          var y = El(s, a);
          if (y.errno) return -6;
          var _ = y.port, b = y.addr, v = !1;
          if (l && c) {
            var g;
            if (h & 1 || !(g = Le.lookup_addr(b))) {
              if (h & 8) return -2
            } else b = g;
            var C = Zi(b, l, c);
            C + 1 >= c && (v = !0)
          }
          if (u && f) {
            _ = "" + _;
            var C = Zi(_, u, f);
            C + 1 >= f && (v = !0)
          }
          return v ? -12 : 0
        }

        function em(s) {
          return s
        }

        function ys(s) {
          return s % 4 === 0 && (s % 100 !== 0 || s % 400 === 0)
        }

        function im(s, a) {
          for (var l = 0, c = 0; c <= a; l += s[c++]) ;
          return l
        }

        var Ul = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            Ll = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        function rm(s, a) {
          for (var l = new Date(s.getTime()); a > 0;) {
            var c = ys(l.getFullYear()), u = l.getMonth(), f = (c ? Ul : Ll)[u];
            if (a > f - l.getDate()) a -= f - l.getDate() + 1, l.setDate(1), u < 11 ? l.setMonth(u + 1) : (l.setMonth(0), l.setFullYear(l.getFullYear() + 1)); else return l.setDate(l.getDate() + a), l
          }
          return l
        }

        function nm(s, a, l) {
          var c = l > 0 ? l : uy(s) + 1, u = new Array(c), f = me(s, u, 0, u.length);
          return a && (u.length = f), u
        }

        function Nl(s, a) {
          hi.set(s, a >>> 0)
        }

        function sm(s, a, l, c) {
          var u = M[c + 40 >>> 2], f = {
            tm_sec: M[c >>> 2],
            tm_min: M[c + 4 >>> 2],
            tm_hour: M[c + 8 >>> 2],
            tm_mday: M[c + 12 >>> 2],
            tm_mon: M[c + 16 >>> 2],
            tm_year: M[c + 20 >>> 2],
            tm_wday: M[c + 24 >>> 2],
            tm_yday: M[c + 28 >>> 2],
            tm_isdst: M[c + 32 >>> 2],
            tm_gmtoff: M[c + 36 >>> 2],
            tm_zone: u ? pt(u) : ""
          }, h = pt(l), y = {
            "%c": "%a %b %d %H:%M:%S %Y",
            "%D": "%m/%d/%y",
            "%F": "%Y-%m-%d",
            "%h": "%b",
            "%r": "%I:%M:%S %p",
            "%R": "%H:%M",
            "%T": "%H:%M:%S",
            "%x": "%m/%d/%y",
            "%X": "%H:%M:%S",
            "%Ec": "%c",
            "%EC": "%C",
            "%Ex": "%m/%d/%y",
            "%EX": "%H:%M:%S",
            "%Ey": "%y",
            "%EY": "%Y",
            "%Od": "%d",
            "%Oe": "%e",
            "%OH": "%H",
            "%OI": "%I",
            "%Om": "%m",
            "%OM": "%M",
            "%OS": "%S",
            "%Ou": "%u",
            "%OU": "%U",
            "%OV": "%V",
            "%Ow": "%w",
            "%OW": "%W",
            "%Oy": "%y"
          };
          for (var _ in y) h = h.replace(new RegExp(_, "g"), y[_]);
          var b = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              v = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

          function g(B, R, gt) {
            for (var bt = typeof B == "number" ? B.toString() : B || ""; bt.length < R;) bt = gt[0] + bt;
            return bt
          }

          function C(B, R) {
            return g(B, R, "0")
          }

          function x(B, R) {
            function gt(de) {
              return de < 0 ? -1 : de > 0 ? 1 : 0
            }

            var bt;
            return (bt = gt(B.getFullYear() - R.getFullYear())) === 0 && (bt = gt(B.getMonth() - R.getMonth())) === 0 && (bt = gt(B.getDate() - R.getDate())), bt
          }

          function D(B) {
            switch (B.getDay()) {
              case 0:
                return new Date(B.getFullYear() - 1, 11, 29);
              case 1:
                return B;
              case 2:
                return new Date(B.getFullYear(), 0, 3);
              case 3:
                return new Date(B.getFullYear(), 0, 2);
              case 4:
                return new Date(B.getFullYear(), 0, 1);
              case 5:
                return new Date(B.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(B.getFullYear() - 1, 11, 30)
            }
          }

          function P(B) {
            var R = rm(new Date(B.tm_year + 1900, 0, 1), B.tm_yday), gt = new Date(R.getFullYear(), 0, 4),
                bt = new Date(R.getFullYear() + 1, 0, 4), de = D(gt), bn = D(bt);
            return x(de, R) <= 0 ? x(bn, R) <= 0 ? R.getFullYear() + 1 : R.getFullYear() : R.getFullYear() - 1
          }

          var ot = {
            "%a": function (B) {
              return b[B.tm_wday].substring(0, 3)
            }, "%A": function (B) {
              return b[B.tm_wday]
            }, "%b": function (B) {
              return v[B.tm_mon].substring(0, 3)
            }, "%B": function (B) {
              return v[B.tm_mon]
            }, "%C": function (B) {
              var R = B.tm_year + 1900;
              return C(R / 100 | 0, 2)
            }, "%d": function (B) {
              return C(B.tm_mday, 2)
            }, "%e": function (B) {
              return g(B.tm_mday, 2, " ")
            }, "%g": function (B) {
              return P(B).toString().substring(2)
            }, "%G": function (B) {
              return P(B)
            }, "%H": function (B) {
              return C(B.tm_hour, 2)
            }, "%I": function (B) {
              var R = B.tm_hour;
              return R == 0 ? R = 12 : R > 12 && (R -= 12), C(R, 2)
            }, "%j": function (B) {
              return C(B.tm_mday + im(ys(B.tm_year + 1900) ? Ul : Ll, B.tm_mon - 1), 3)
            }, "%m": function (B) {
              return C(B.tm_mon + 1, 2)
            }, "%M": function (B) {
              return C(B.tm_min, 2)
            }, "%n": function () {
              return `
`
            }, "%p": function (B) {
              return B.tm_hour >= 0 && B.tm_hour < 12 ? "AM" : "PM"
            }, "%S": function (B) {
              return C(B.tm_sec, 2)
            }, "%t": function () {
              return "	"
            }, "%u": function (B) {
              return B.tm_wday || 7
            }, "%U": function (B) {
              var R = B.tm_yday + 7 - B.tm_wday;
              return C(Math.floor(R / 7), 2)
            }, "%V": function (B) {
              var R = Math.floor((B.tm_yday + 7 - (B.tm_wday + 6) % 7) / 7);
              if ((B.tm_wday + 371 - B.tm_yday - 2) % 7 <= 2 && R++, R) {
                if (R == 53) {
                  var bt = (B.tm_wday + 371 - B.tm_yday) % 7;
                  bt != 4 && (bt != 3 || !ys(B.tm_year)) && (R = 1)
                }
              } else {
                R = 52;
                var gt = (B.tm_wday + 7 - B.tm_yday - 1) % 7;
                (gt == 4 || gt == 5 && ys(B.tm_year % 400 - 1)) && R++
              }
              return C(R, 2)
            }, "%w": function (B) {
              return B.tm_wday
            }, "%W": function (B) {
              var R = B.tm_yday + 7 - (B.tm_wday + 6) % 7;
              return C(Math.floor(R / 7), 2)
            }, "%y": function (B) {
              return (B.tm_year + 1900).toString().substring(2)
            }, "%Y": function (B) {
              return B.tm_year + 1900
            }, "%z": function (B) {
              var R = B.tm_gmtoff, gt = R >= 0;
              return R = Math.abs(R) / 60, R = R / 60 * 100 + R % 60, (gt ? "+" : "-") + String("0000" + R).slice(-4)
            }, "%Z": function (B) {
              return B.tm_zone
            }, "%%": function () {
              return "%"
            }
          };
          h = h.replace(/%%/g, "\0\0");
          for (var _ in ot) h.includes(_) && (h = h.replace(new RegExp(_, "g"), ot[_](f)));
          h = h.replace(/\0\0/g, "%");
          var dt = nm(h, !1);
          return dt.length > a ? 0 : (Nl(dt, s), dt.length - 1)
        }

        function om(s, a, l, c, u) {
          return sm(s, a, l, c)
        }

        function am(s) {
          ne = s, Fl() || (e.onExit && e.onExit(s), Zt = !0), m(s, new as(s))
        }

        function lm(s, a) {
          ne = s, am(s)
        }

        function cm(s) {
          if (s instanceof as || s == "unwind") return ne;
          m(1, s)
        }

        function um(s) {
          var a = e["_" + s];
          return a
        }

        function dm(s, a, l, c, u) {
          var f = {
            string: D => {
              var P = 0;
              if (D != null && D !== 0) {
                var ot = (D.length << 2) + 1;
                P = vs(ot), Zi(D, P, ot)
              }
              return P
            }, array: D => {
              var P = vs(D.length);
              return Nl(D, P), P
            }
          };

          function h(D) {
            return a === "string" ? pt(D) : a === "boolean" ? Boolean(D) : D
          }

          var y = um(s), _ = [], b = 0;
          if (c) for (var v = 0; v < c.length; v++) {
            var g = f[l[v]];
            g ? (b === 0 && (b = w()), _[v] = g(c[v])) : _[v] = c[v]
          }
          var C = y.apply(null, _);

          function x(D) {
            return b !== 0 && j(b), h(D)
          }

          return C = x(C), C
        }

        var fm = {
          i: Ay,
          x: By,
          F: Dy,
          a: ky,
          n: Oy,
          D: Ry,
          L: My,
          Q: Uy,
          ua: Ly,
          h: Bl,
          pa: Ny,
          t: Py,
          E: Hy,
          d: Ey,
          Ja: Vy,
          Na: Wy,
          Ma: $y,
          Aa: Yy,
          P: Xy,
          za: Gy,
          tb: Ky,
          vf: Jy,
          Ha: qy,
          Ia: Zy,
          ma: Qy,
          xf: t_,
          wf: e_,
          xa: i_,
          na: r_,
          Ka: n_,
          tf: s_,
          va: o_,
          La: a_,
          ia: l_,
          ya: c_,
          wa: u_,
          Pa: d_,
          Ra: f_,
          Qa: h_,
          Ta: y_,
          aa: __,
          hf: m_,
          jf: b_,
          ff: v_,
          gf: g_,
          sa: w_,
          df: j_,
          bb: S_,
          ef: I_,
          lf: C_,
          ca: F_,
          kf: A_,
          ta: x_,
          mf: B_,
          cf: T_,
          ra: D_,
          nf: E_,
          Ua: k_,
          Va: O_,
          af: da,
          Sb: R_,
          Ld: U_,
          mb: P_,
          xb: H_,
          X: V_,
          Sa: z_,
          vb: W_,
          ub: $_,
          la: Y_,
          Re: X_,
          uf: G_,
          ea: q_,
          Oa: Z_,
          sf: ps,
          Ga: tm,
          y: Lb,
          Z: Vb,
          fa: cb,
          N: Xb,
          O: zb,
          je: Yv,
          U: $b,
          qa: lb,
          _: Yb,
          ke: $v,
          u: bb,
          ja: Db,
          qf: Qb,
          $: Cb,
          ka: Tb,
          rf: Zb,
          c: eb,
          da: Mb,
          T: Fb,
          b: ib,
          V: Pb,
          Qb: dw,
          Lb: _w,
          g: nb,
          Fa: Wb,
          Jb: bw,
          l: ab,
          oa: Sb,
          m: sb,
          Ea: Gb,
          v: fb,
          w: yb,
          K: Ib,
          S: Rb,
          Y: _b,
          s: gb,
          B: mb,
          Ba: qb,
          G: Eb,
          r: Nb,
          Gb: ww,
          Pb: fw,
          Zb: rw,
          Ob: hw,
          ac: tw,
          Hb: gw,
          Tb: cw,
          Kb: mw,
          xe: Ev,
          ee: qv,
          $b: ew,
          md: Vg,
          ab: Xw,
          Bd: Ag,
          Te: dv,
          ld: zg,
          ye: Dv,
          rb: Ew,
          Yc: n0,
          Se: fv,
          Za: Jw,
          Xa: Zw,
          Xc: s0,
          qe: Nv,
          ge: Kv,
          nd: Hg,
          be: tg,
          ue: Rv,
          Cd: Fg,
          Dd: Cg,
          Eb: Sw,
          gd: Gg,
          Ib: vw,
          Zc: r0,
          Ye: ov,
          Ce: Av,
          we: kv,
          Sc: u0,
          $c: e0,
          sb: Dw,
          nb: Mw,
          _c: i0,
          Ze: sv,
          lc: z0,
          Ad: xg,
          Mb: yw,
          Nb: pw,
          Ed: Ig,
          Td: ug,
          hb: Hw,
          Fc: S0,
          Ie: wv,
          Fe: Iv,
          Ae: Bv,
          _d: rg,
          Wc: o0,
          ib: Pw,
          re: Lv,
          fe: Jv,
          Ge: Sv,
          he: Gv,
          Qc: f0,
          bc: Q0,
          mc: V0,
          Ya: qw,
          Sd: dg,
          Nc: y0,
          Ic: g0,
          pd: Ng,
          ve: Ov,
          Ud: cg,
          jc: $0,
          ic: Y0,
          We: lv,
          Ve: cv,
          ce: Qv,
          bf: iv,
          Vd: lg,
          Fb: jw,
          Vb: aw,
          Db: Iw,
          zb: xw,
          ed: Jg,
          Cc: F0,
          Ab: Aw,
          Pd: pg,
          Gd: jg,
          uc: O0,
          yb: Bw,
          Rb: uw,
          Yb: nw,
          Wd: ag,
          Id: gg,
          le: Wv,
          tc: R0,
          Ub: lw,
          Cb: Cw,
          de: Zv,
          ud: Og,
          _a: Kw,
          rd: Ug,
          od: Pg,
          _b: iw,
          td: Rg,
          ad: t0,
          ae: eg,
          ec: J0,
          Jc: v0,
          Gc: j0,
          fc: K0,
          gc: G0,
          Dc: C0,
          o: Qm,
          Ca: Jb,
          Da: Kb,
          j: rb,
          A: Bb,
          ga: Hb,
          I: xb,
          e: tb,
          M: ub,
          W: Ab,
          f: db,
          k: ob,
          pf: tv,
          q: pb,
          p: hb,
          ha: Ub,
          C: vb,
          H: kb,
          R: Ob,
          J: wb,
          of: ev,
          ba: jb,
          Le: bv,
          Oe: yv,
          dd: qg,
          Me: mv,
          sc: M0,
          rc: U0,
          pe: Pv,
          Fd: Sg,
          Kc: b0,
          jd: $g,
          ne: Vv,
          qb: kw,
          Ne: _v,
          kb: Lw,
          Ke: vv,
          se: Uv,
          bd: Qg,
          cd: Zg,
          cc: Z0,
          dc: q0,
          me: zv,
          qc: L0,
          Pe: pv,
          Bb: Fw,
          oc: P0,
          He: jv,
          Be: xv,
          ze: Tv,
          kd: Wg,
          pc: N0,
          yc: T0,
          nc: H0,
          Xd: og,
          $a: Gw,
          Yd: sg,
          Xb: sw,
          jb: Nw,
          Xe: av,
          Nd: _g,
          yd: Tg,
          wc: E0,
          Bc: A0,
          Oc: p0,
          Ec: I0,
          gb: Vw,
          _e: nv,
          Ee: Cv,
          Ue: uv,
          Mc: _0,
          Rc: d0,
          oe: Hv,
          hc: X0,
          zc: B0,
          wd: Eg,
          sd: Mg,
          Hd: wg,
          lb: Uw,
          zd: Bg,
          fb: zw,
          vc: k0,
          xc: D0,
          ob: Rw,
          $e: rv,
          De: Fv,
          Wb: ow,
          $d: ig,
          Zd: ng,
          Qe: hv,
          Je: gv,
          ie: Xv,
          Vc: a0,
          Tc: c0,
          Lc: m0,
          Uc: l0,
          vd: kg,
          qd: Lg,
          Qd: hg,
          kc: W0,
          Pc: h0,
          eb: Ww,
          Ac: x0,
          pb: Ow,
          Od: yg,
          hd: Xg,
          cb: Yw,
          db: $w,
          id: Yg,
          xd: Dg,
          Kd: bg,
          wb: Tw,
          Hc: w0,
          fd: Kg,
          Rd: fg,
          te: Mv,
          Md: mg,
          Jd: vg,
          z: em,
          Wa: om
        }, i1 = Fy(), hm = e.___wasm_call_ctors = function () {
          return (hm = e.___wasm_call_ctors = e.asm.zf).apply(null, arguments)
        }, pm = e._main = function () {
          return (pm = e._main = e.asm.Af).apply(null, arguments)
        }, ym = e._duckdb_web_fs_glob_add_path = function () {
          return (ym = e._duckdb_web_fs_glob_add_path = e.asm.Cf).apply(null, arguments)
        }, _m = e._duckdb_web_clear_response = function () {
          return (_m = e._duckdb_web_clear_response = e.asm.Df).apply(null, arguments)
        }, mm = e._duckdb_web_fail_with = function () {
          return (mm = e._duckdb_web_fail_with = e.asm.Ef).apply(null, arguments)
        }, bm = e._duckdb_web_reset = function () {
          return (bm = e._duckdb_web_reset = e.asm.Ff).apply(null, arguments)
        }, vm = e._duckdb_web_connect = function () {
          return (vm = e._duckdb_web_connect = e.asm.Gf).apply(null, arguments)
        }, gm = e._duckdb_web_disconnect = function () {
          return (gm = e._duckdb_web_disconnect = e.asm.Hf).apply(null, arguments)
        }, wm = e._duckdb_web_flush_files = function () {
          return (wm = e._duckdb_web_flush_files = e.asm.If).apply(null, arguments)
        }, jm = e._duckdb_web_flush_file = function () {
          return (jm = e._duckdb_web_flush_file = e.asm.Jf).apply(null, arguments)
        }, Sm = e._duckdb_web_open = function () {
          return (Sm = e._duckdb_web_open = e.asm.Kf).apply(null, arguments)
        }, Im = e._duckdb_web_get_global_file_info = function () {
          return (Im = e._duckdb_web_get_global_file_info = e.asm.Lf).apply(null, arguments)
        }, Cm = e._duckdb_web_collect_file_stats = function () {
          return (Cm = e._duckdb_web_collect_file_stats = e.asm.Mf).apply(null, arguments)
        }, Fm = e._duckdb_web_export_file_stats = function () {
          return (Fm = e._duckdb_web_export_file_stats = e.asm.Nf).apply(null, arguments)
        }, Am = e._duckdb_web_fs_drop_file = function () {
          return (Am = e._duckdb_web_fs_drop_file = e.asm.Of).apply(null, arguments)
        }, xm = e._duckdb_web_fs_drop_files = function () {
          return (xm = e._duckdb_web_fs_drop_files = e.asm.Pf).apply(null, arguments)
        }, Bm = e._duckdb_web_fs_glob_file_infos = function () {
          return (Bm = e._duckdb_web_fs_glob_file_infos = e.asm.Qf).apply(null, arguments)
        }, Tm = e._duckdb_web_fs_get_file_info_by_id = function () {
          return (Tm = e._duckdb_web_fs_get_file_info_by_id = e.asm.Rf).apply(null, arguments)
        }, Dm = e._duckdb_web_fs_get_file_info_by_name = function () {
          return (Dm = e._duckdb_web_fs_get_file_info_by_name = e.asm.Sf).apply(null, arguments)
        }, Em = e._duckdb_web_fs_register_file_url = function () {
          return (Em = e._duckdb_web_fs_register_file_url = e.asm.Tf).apply(null, arguments)
        }, km = e._duckdb_web_fs_register_file_buffer = function () {
          return (km = e._duckdb_web_fs_register_file_buffer = e.asm.Uf).apply(null, arguments)
        }, Om = e._duckdb_web_copy_file_to_buffer = function () {
          return (Om = e._duckdb_web_copy_file_to_buffer = e.asm.Vf).apply(null, arguments)
        }, Rm = e._duckdb_web_copy_file_to_path = function () {
          return (Rm = e._duckdb_web_copy_file_to_path = e.asm.Wf).apply(null, arguments)
        }, Mm = e._duckdb_web_get_version = function () {
          return (Mm = e._duckdb_web_get_version = e.asm.Xf).apply(null, arguments)
        }, Um = e._duckdb_web_get_feature_flags = function () {
          return (Um = e._duckdb_web_get_feature_flags = e.asm.Yf).apply(null, arguments)
        }, Lm = e._duckdb_web_tokenize = function () {
          return (Lm = e._duckdb_web_tokenize = e.asm.Zf).apply(null, arguments)
        }, Nm = e._duckdb_web_udf_scalar_create = function () {
          return (Nm = e._duckdb_web_udf_scalar_create = e.asm._f).apply(null, arguments)
        }, Pm = e._duckdb_web_prepared_create = function () {
          return (Pm = e._duckdb_web_prepared_create = e.asm.$f).apply(null, arguments)
        }, Hm = e._duckdb_web_prepared_close = function () {
          return (Hm = e._duckdb_web_prepared_close = e.asm.ag).apply(null, arguments)
        }, Vm = e._duckdb_web_prepared_run = function () {
          return (Vm = e._duckdb_web_prepared_run = e.asm.bg).apply(null, arguments)
        }, zm = e._duckdb_web_prepared_send = function () {
          return (zm = e._duckdb_web_prepared_send = e.asm.cg).apply(null, arguments)
        }, Wm = e._duckdb_web_query_run = function () {
          return (Wm = e._duckdb_web_query_run = e.asm.dg).apply(null, arguments)
        }, $m = e._duckdb_web_pending_query_start = function () {
          return ($m = e._duckdb_web_pending_query_start = e.asm.eg).apply(null, arguments)
        }, Ym = e._duckdb_web_pending_query_poll = function () {
          return (Ym = e._duckdb_web_pending_query_poll = e.asm.fg).apply(null, arguments)
        }, Xm = e._duckdb_web_pending_query_cancel = function () {
          return (Xm = e._duckdb_web_pending_query_cancel = e.asm.gg).apply(null, arguments)
        }, Gm = e._duckdb_web_query_fetch_results = function () {
          return (Gm = e._duckdb_web_query_fetch_results = e.asm.hg).apply(null, arguments)
        }, Km = e._duckdb_web_get_tablenames = function () {
          return (Km = e._duckdb_web_get_tablenames = e.asm.ig).apply(null, arguments)
        }, Jm = e._duckdb_web_insert_arrow_from_ipc_stream = function () {
          return (Jm = e._duckdb_web_insert_arrow_from_ipc_stream = e.asm.jg).apply(null, arguments)
        }, qm = e._duckdb_web_insert_csv_from_path = function () {
          return (qm = e._duckdb_web_insert_csv_from_path = e.asm.kg).apply(null, arguments)
        }, Zm = e._duckdb_web_insert_json_from_path = function () {
          return (Zm = e._duckdb_web_insert_json_from_path = e.asm.lg).apply(null, arguments)
        }, _s = e._htonl = function () {
          return (_s = e._htonl = e.asm.mg).apply(null, arguments)
        }, ms = e._htons = function () {
          return (ms = e._htons = e.asm.ng).apply(null, arguments)
        }, ha = e._ntohs = function () {
          return (ha = e._ntohs = e.asm.og).apply(null, arguments)
        }, bs = e._malloc = function () {
          return (bs = e._malloc = e.asm.pg).apply(null, arguments)
        }, Pl = e._free = function () {
          return (Pl = e._free = e.asm.qg).apply(null, arguments)
        }, S = e._setThrew = function () {
          return (S = e._setThrew = e.asm.rg).apply(null, arguments)
        }, At = e.setTempRet0 = function () {
          return (At = e.setTempRet0 = e.asm.sg).apply(null, arguments)
        }, w = e.stackSave = function () {
          return (w = e.stackSave = e.asm.tg).apply(null, arguments)
        }, j = e.stackRestore = function () {
          return (j = e.stackRestore = e.asm.ug).apply(null, arguments)
        }, vs = e.stackAlloc = function () {
          return (vs = e.stackAlloc = e.asm.vg).apply(null, arguments)
        }, br = e.___cxa_can_catch = function () {
          return (br = e.___cxa_can_catch = e.asm.wg).apply(null, arguments)
        }, Hl = e.___cxa_is_pointer_type = function () {
          return (Hl = e.___cxa_is_pointer_type = e.asm.xg).apply(null, arguments)
        }, Vl = e.dynCall_jiiii = function () {
          return (Vl = e.dynCall_jiiii = e.asm.yg).apply(null, arguments)
        }, zl = e.dynCall_iiiiij = function () {
          return (zl = e.dynCall_iiiiij = e.asm.zg).apply(null, arguments)
        }, Wl = e.dynCall_iiiiijj = function () {
          return (Wl = e.dynCall_iiiiijj = e.asm.Ag).apply(null, arguments)
        }, $l = e.dynCall_viijii = function () {
          return ($l = e.dynCall_viijii = e.asm.Bg).apply(null, arguments)
        }, Yl = e.dynCall_viiiij = function () {
          return (Yl = e.dynCall_viiiij = e.asm.Cg).apply(null, arguments)
        }, Xl = e.dynCall_ji = function () {
          return (Xl = e.dynCall_ji = e.asm.Dg).apply(null, arguments)
        }, Gl = e.dynCall_viji = function () {
          return (Gl = e.dynCall_viji = e.asm.Eg).apply(null, arguments)
        }, Kl = e.dynCall_iiij = function () {
          return (Kl = e.dynCall_iiij = e.asm.Fg).apply(null, arguments)
        }, Jl = e.dynCall_viiji = function () {
          return (Jl = e.dynCall_viiji = e.asm.Gg).apply(null, arguments)
        }, ql = e.dynCall_iiiji = function () {
          return (ql = e.dynCall_iiiji = e.asm.Hg).apply(null, arguments)
        }, Zl = e.dynCall_viiiji = function () {
          return (Zl = e.dynCall_viiiji = e.asm.Ig).apply(null, arguments)
        }, Ql = e.dynCall_viijji = function () {
          return (Ql = e.dynCall_viijji = e.asm.Jg).apply(null, arguments)
        }, tc = e.dynCall_viiijj = function () {
          return (tc = e.dynCall_viiijj = e.asm.Kg).apply(null, arguments)
        }, ec = e.dynCall_iiiij = function () {
          return (ec = e.dynCall_iiiij = e.asm.Lg).apply(null, arguments)
        }, ic = e.dynCall_iij = function () {
          return (ic = e.dynCall_iij = e.asm.Mg).apply(null, arguments)
        }, rc = e.dynCall_vij = function () {
          return (rc = e.dynCall_vij = e.asm.Ng).apply(null, arguments)
        }, nc = e.dynCall_viij = function () {
          return (nc = e.dynCall_viij = e.asm.Og).apply(null, arguments)
        }, sc = e.dynCall_iiji = function () {
          return (sc = e.dynCall_iiji = e.asm.Pg).apply(null, arguments)
        }, oc = e.dynCall_viiiiij = function () {
          return (oc = e.dynCall_viiiiij = e.asm.Qg).apply(null, arguments)
        }, ac = e.dynCall_viijiiiii = function () {
          return (ac = e.dynCall_viijiiiii = e.asm.Rg).apply(null, arguments)
        }, lc = e.dynCall_viiiiji = function () {
          return (lc = e.dynCall_viiiiji = e.asm.Sg).apply(null, arguments)
        }, cc = e.dynCall_iijiji = function () {
          return (cc = e.dynCall_iijiji = e.asm.Tg).apply(null, arguments)
        }, uc = e.dynCall_viiiijiiiiiiii = function () {
          return (uc = e.dynCall_viiiijiiiiiiii = e.asm.Ug).apply(null, arguments)
        }, dc = e.dynCall_viiij = function () {
          return (dc = e.dynCall_viiij = e.asm.Vg).apply(null, arguments)
        }, fc = e.dynCall_viiiiijiiii = function () {
          return (fc = e.dynCall_viiiiijiiii = e.asm.Wg).apply(null, arguments)
        }, hc = e.dynCall_vjiiiji = function () {
          return (hc = e.dynCall_vjiiiji = e.asm.Xg).apply(null, arguments)
        }, pc = e.dynCall_iiiijj = function () {
          return (pc = e.dynCall_iiiijj = e.asm.Yg).apply(null, arguments)
        }, yc = e.dynCall_iiijj = function () {
          return (yc = e.dynCall_iiijj = e.asm.Zg).apply(null, arguments)
        }, _c = e.dynCall_viiiijj = function () {
          return (_c = e.dynCall_viiiijj = e.asm._g).apply(null, arguments)
        }, mc = e.dynCall_jii = function () {
          return (mc = e.dynCall_jii = e.asm.$g).apply(null, arguments)
        }, bc = e.dynCall_iiijii = function () {
          return (bc = e.dynCall_iiijii = e.asm.ah).apply(null, arguments)
        }, vc = e.dynCall_jiijii = function () {
          return (vc = e.dynCall_jiijii = e.asm.bh).apply(null, arguments)
        }, gc = e.dynCall_viiijii = function () {
          return (gc = e.dynCall_viiijii = e.asm.ch).apply(null, arguments)
        }, wc = e.dynCall_fiijii = function () {
          return (wc = e.dynCall_fiijii = e.asm.dh).apply(null, arguments)
        }, jc = e.dynCall_diijii = function () {
          return (jc = e.dynCall_diijii = e.asm.eh).apply(null, arguments)
        }, Sc = e.dynCall_iiiiijii = function () {
          return (Sc = e.dynCall_iiiiijii = e.asm.fh).apply(null, arguments)
        }, Ic = e.dynCall_iiiiiiijii = function () {
          return (Ic = e.dynCall_iiiiiiijii = e.asm.gh).apply(null, arguments)
        }, Cc = e.dynCall_vijii = function () {
          return (Cc = e.dynCall_vijii = e.asm.hh).apply(null, arguments)
        }, Fc = e.dynCall_iiiiji = function () {
          return (Fc = e.dynCall_iiiiji = e.asm.ih).apply(null, arguments)
        }, Ac = e.dynCall_iijj = function () {
          return (Ac = e.dynCall_iijj = e.asm.jh).apply(null, arguments)
        }, xc = e.dynCall_iiiiiji = function () {
          return (xc = e.dynCall_iiiiiji = e.asm.kh).apply(null, arguments)
        }, Bc = e.dynCall_viijjj = function () {
          return (Bc = e.dynCall_viijjj = e.asm.lh).apply(null, arguments)
        }, Tc = e.dynCall_jj = function () {
          return (Tc = e.dynCall_jj = e.asm.mh).apply(null, arguments)
        }, Dc = e.dynCall_viijj = function () {
          return (Dc = e.dynCall_viijj = e.asm.nh).apply(null, arguments)
        }, Ec = e.dynCall_jiiiii = function () {
          return (Ec = e.dynCall_jiiiii = e.asm.oh).apply(null, arguments)
        }, kc = e.dynCall_iiijjj = function () {
          return (kc = e.dynCall_iiijjj = e.asm.ph).apply(null, arguments)
        }, Oc = e.dynCall_j = function () {
          return (Oc = e.dynCall_j = e.asm.qh).apply(null, arguments)
        }, Rc = e.dynCall_jiij = function () {
          return (Rc = e.dynCall_jiij = e.asm.rh).apply(null, arguments)
        }, Mc = e.dynCall_jiiij = function () {
          return (Mc = e.dynCall_jiiij = e.asm.sh).apply(null, arguments)
        }, Uc = e.dynCall_viijiiji = function () {
          return (Uc = e.dynCall_viijiiji = e.asm.th).apply(null, arguments)
        }, Lc = e.dynCall_iiiiiijjiijjj = function () {
          return (Lc = e.dynCall_iiiiiijjiijjj = e.asm.uh).apply(null, arguments)
        }, Nc = e.dynCall_iiijjijjii = function () {
          return (Nc = e.dynCall_iiijjijjii = e.asm.vh).apply(null, arguments)
        }, Pc = e.dynCall_iiiijjii = function () {
          return (Pc = e.dynCall_iiiijjii = e.asm.wh).apply(null, arguments)
        }, Hc = e.dynCall_iiiijji = function () {
          return (Hc = e.dynCall_iiiijji = e.asm.xh).apply(null, arguments)
        }, Vc = e.dynCall_iiijjii = function () {
          return (Vc = e.dynCall_iiijjii = e.asm.yh).apply(null, arguments)
        }, zc = e.dynCall_vjjijij = function () {
          return (zc = e.dynCall_vjjijij = e.asm.zh).apply(null, arguments)
        }, Wc = e.dynCall_vijjji = function () {
          return (Wc = e.dynCall_vijjji = e.asm.Ah).apply(null, arguments)
        }, $c = e.dynCall_vjjii = function () {
          return ($c = e.dynCall_vjjii = e.asm.Bh).apply(null, arguments)
        }, Yc = e.dynCall_viiiiiji = function () {
          return (Yc = e.dynCall_viiiiiji = e.asm.Ch).apply(null, arguments)
        }, Xc = e.dynCall_jiiiji = function () {
          return (Xc = e.dynCall_jiiiji = e.asm.Dh).apply(null, arguments)
        }, Gc = e.dynCall_viiijjii = function () {
          return (Gc = e.dynCall_viiijjii = e.asm.Eh).apply(null, arguments)
        }, Kc = e.dynCall_vijjj = function () {
          return (Kc = e.dynCall_vijjj = e.asm.Fh).apply(null, arguments)
        }, Jc = e.dynCall_jijij = function () {
          return (Jc = e.dynCall_jijij = e.asm.Gh).apply(null, arguments)
        }, qc = e.dynCall_iiiijiii = function () {
          return (qc = e.dynCall_iiiijiii = e.asm.Hh).apply(null, arguments)
        }, Zc = e.dynCall_jijjij = function () {
          return (Zc = e.dynCall_jijjij = e.asm.Ih).apply(null, arguments)
        }, Qc = e.dynCall_vijj = function () {
          return (Qc = e.dynCall_vijj = e.asm.Jh).apply(null, arguments)
        }, tu = e.dynCall_jijiii = function () {
          return (tu = e.dynCall_jijiii = e.asm.Kh).apply(null, arguments)
        }, eu = e.dynCall_viijiiij = function () {
          return (eu = e.dynCall_viijiiij = e.asm.Lh).apply(null, arguments)
        }, iu = e.dynCall_vijiiiji = function () {
          return (iu = e.dynCall_vijiiiji = e.asm.Mh).apply(null, arguments)
        }, ru = e.dynCall_jiiji = function () {
          return (ru = e.dynCall_jiiji = e.asm.Nh).apply(null, arguments)
        }, nu = e.dynCall_viiijij = function () {
          return (nu = e.dynCall_viiijij = e.asm.Oh).apply(null, arguments)
        }, su = e.dynCall_viijiij = function () {
          return (su = e.dynCall_viijiij = e.asm.Ph).apply(null, arguments)
        }, ou = e.dynCall_viiiiijj = function () {
          return (ou = e.dynCall_viiiiijj = e.asm.Qh).apply(null, arguments)
        }, au = e.dynCall_viiijji = function () {
          return (au = e.dynCall_viiijji = e.asm.Rh).apply(null, arguments)
        }, lu = e.dynCall_vijij = function () {
          return (lu = e.dynCall_vijij = e.asm.Sh).apply(null, arguments)
        }, cu = e.dynCall_ijji = function () {
          return (cu = e.dynCall_ijji = e.asm.Th).apply(null, arguments)
        }, uu = e.dynCall_vijiji = function () {
          return (uu = e.dynCall_vijiji = e.asm.Uh).apply(null, arguments)
        }, du = e.dynCall_iiiijii = function () {
          return (du = e.dynCall_iiiijii = e.asm.Vh).apply(null, arguments)
        }, fu = e.dynCall_viijij = function () {
          return (fu = e.dynCall_viijij = e.asm.Wh).apply(null, arguments)
        }, hu = e.dynCall_iiiiiiji = function () {
          return (hu = e.dynCall_iiiiiiji = e.asm.Xh).apply(null, arguments)
        }, pu = e.dynCall_viiiiiiji = function () {
          return (pu = e.dynCall_viiiiiiji = e.asm.Yh).apply(null, arguments)
        }, yu = e.dynCall_viiijiii = function () {
          return (yu = e.dynCall_viiijiii = e.asm.Zh).apply(null, arguments)
        }, _u = e.dynCall_viiiijiii = function () {
          return (_u = e.dynCall_viiiijiii = e.asm._h).apply(null, arguments)
        }, mu = e.dynCall_viiiijii = function () {
          return (mu = e.dynCall_viiiijii = e.asm.$h).apply(null, arguments)
        }, bu = e.dynCall_viiiiijiii = function () {
          return (bu = e.dynCall_viiiiijiii = e.asm.ai).apply(null, arguments)
        }, vu = e.dynCall_vijjij = function () {
          return (vu = e.dynCall_vijjij = e.asm.bi).apply(null, arguments)
        }, gu = e.dynCall_vijji = function () {
          return (gu = e.dynCall_vijji = e.asm.ci).apply(null, arguments)
        }, wu = e.dynCall_iiiijjijj = function () {
          return (wu = e.dynCall_iiiijjijj = e.asm.di).apply(null, arguments)
        }, ju = e.dynCall_jiiiij = function () {
          return (ju = e.dynCall_jiiiij = e.asm.ei).apply(null, arguments)
        }, Su = e.dynCall_jijj = function () {
          return (Su = e.dynCall_jijj = e.asm.fi).apply(null, arguments)
        }, Iu = e.dynCall_jij = function () {
          return (Iu = e.dynCall_jij = e.asm.gi).apply(null, arguments)
        }, Cu = e.dynCall_ij = function () {
          return (Cu = e.dynCall_ij = e.asm.hi).apply(null, arguments)
        }, Fu = e.dynCall_viijjji = function () {
          return (Fu = e.dynCall_viijjji = e.asm.ii).apply(null, arguments)
        }, Au = e.dynCall_viiijijiji = function () {
          return (Au = e.dynCall_viiijijiji = e.asm.ji).apply(null, arguments)
        }, xu = e.dynCall_jijjjji = function () {
          return (xu = e.dynCall_jijjjji = e.asm.ki).apply(null, arguments)
        }, Bu = e.dynCall_iiijiij = function () {
          return (Bu = e.dynCall_iiijiij = e.asm.li).apply(null, arguments)
        }, Tu = e.dynCall_iiijij = function () {
          return (Tu = e.dynCall_iiijij = e.asm.mi).apply(null, arguments)
        }, Du = e.dynCall_iiiijjjji = function () {
          return (Du = e.dynCall_iiiijjjji = e.asm.ni).apply(null, arguments)
        }, Eu = e.dynCall_iiiiijij = function () {
          return (Eu = e.dynCall_iiiiijij = e.asm.oi).apply(null, arguments)
        }, ku = e.dynCall_iiiiijjjiii = function () {
          return (ku = e.dynCall_iiiiijjjiii = e.asm.pi).apply(null, arguments)
        }, Ou = e.dynCall_iiiiiiijj = function () {
          return (Ou = e.dynCall_iiiiiiijj = e.asm.qi).apply(null, arguments)
        }, Ru = e.dynCall_jiii = function () {
          return (Ru = e.dynCall_jiii = e.asm.ri).apply(null, arguments)
        }, Mu = e.dynCall_iijji = function () {
          return (Mu = e.dynCall_iijji = e.asm.si).apply(null, arguments)
        }, Uu = e.dynCall_iijii = function () {
          return (Uu = e.dynCall_iijii = e.asm.ti).apply(null, arguments)
        }, Lu = e.dynCall_iijjii = function () {
          return (Lu = e.dynCall_iijjii = e.asm.ui).apply(null, arguments)
        }, Nu = e.dynCall_iijiiii = function () {
          return (Nu = e.dynCall_iijiiii = e.asm.vi).apply(null, arguments)
        }, Pu = e.dynCall_vijijj = function () {
          return (Pu = e.dynCall_vijijj = e.asm.wi).apply(null, arguments)
        }, Hu = e.dynCall_viiijjj = function () {
          return (Hu = e.dynCall_viiijjj = e.asm.xi).apply(null, arguments)
        }, Vu = e.dynCall_iji = function () {
          return (Vu = e.dynCall_iji = e.asm.yi).apply(null, arguments)
        }, zu = e.dynCall_viiiiiij = function () {
          return (zu = e.dynCall_viiiiiij = e.asm.zi).apply(null, arguments)
        }, Wu = e.dynCall_iiijiii = function () {
          return (Wu = e.dynCall_iiijiii = e.asm.Ai).apply(null, arguments)
        }, $u = e.dynCall_viijiiii = function () {
          return ($u = e.dynCall_viijiiii = e.asm.Bi).apply(null, arguments)
        }, Yu = e.dynCall_vijiii = function () {
          return (Yu = e.dynCall_vijiii = e.asm.Ci).apply(null, arguments)
        }, Xu = e.dynCall_iijjiii = function () {
          return (Xu = e.dynCall_iijjiii = e.asm.Di).apply(null, arguments)
        }, Gu = e.dynCall_viijiii = function () {
          return (Gu = e.dynCall_viijiii = e.asm.Ei).apply(null, arguments)
        }, Ku = e.dynCall_vijiiiiii = function () {
          return (Ku = e.dynCall_vijiiiiii = e.asm.Fi).apply(null, arguments)
        }, Ju = e.dynCall_vijiiii = function () {
          return (Ju = e.dynCall_vijiiii = e.asm.Gi).apply(null, arguments)
        }, qu = e.dynCall_vijiiiii = function () {
          return (qu = e.dynCall_vijiiiii = e.asm.Hi).apply(null, arguments)
        }, Zu = e.dynCall_viiiiijii = function () {
          return (Zu = e.dynCall_viiiiijii = e.asm.Ii).apply(null, arguments)
        }, Qu = e.dynCall_jjj = function () {
          return (Qu = e.dynCall_jjj = e.asm.Ji).apply(null, arguments)
        }, td = e.dynCall_jjiji = function () {
          return (td = e.dynCall_jjiji = e.asm.Ki).apply(null, arguments)
        }, ed = e.dynCall_vjii = function () {
          return (ed = e.dynCall_vjii = e.asm.Li).apply(null, arguments)
        }, id = e.dynCall_iiijjjj = function () {
          return (id = e.dynCall_iiijjjj = e.asm.Mi).apply(null, arguments)
        }, rd = e.dynCall_jjjjjjd = function () {
          return (rd = e.dynCall_jjjjjjd = e.asm.Ni).apply(null, arguments)
        }, nd = e.dynCall_ijii = function () {
          return (nd = e.dynCall_ijii = e.asm.Oi).apply(null, arguments)
        }, sd = e.dynCall_vjiiii = function () {
          return (sd = e.dynCall_vjiiii = e.asm.Pi).apply(null, arguments)
        }, od = e.dynCall_viiijjjj = function () {
          return (od = e.dynCall_viiijjjj = e.asm.Qi).apply(null, arguments)
        }, ad = e.dynCall_jiiijii = function () {
          return (ad = e.dynCall_jiiijii = e.asm.Ri).apply(null, arguments)
        }, ld = e.dynCall_jiijiii = function () {
          return (ld = e.dynCall_jiijiii = e.asm.Si).apply(null, arguments)
        }, cd = e.dynCall_viiijjij = function () {
          return (cd = e.dynCall_viiijjij = e.asm.Ti).apply(null, arguments)
        }, ud = e.dynCall_vijijjiij = function () {
          return (ud = e.dynCall_vijijjiij = e.asm.Ui).apply(null, arguments)
        }, dd = e.dynCall_viiijjiij = function () {
          return (dd = e.dynCall_viiijjiij = e.asm.Vi).apply(null, arguments)
        }, fd = e.dynCall_viiiiiijiij = function () {
          return (fd = e.dynCall_viiiiiijiij = e.asm.Wi).apply(null, arguments)
        }, hd = e.dynCall_viiiiiijj = function () {
          return (hd = e.dynCall_viiiiiijj = e.asm.Xi).apply(null, arguments)
        }, pd = e.dynCall_viijiiiij = function () {
          return (pd = e.dynCall_viijiiiij = e.asm.Yi).apply(null, arguments)
        }, yd = e.dynCall_viiijiiiijjj = function () {
          return (yd = e.dynCall_viiijiiiijjj = e.asm.Zi).apply(null, arguments)
        }, _d = e.dynCall_viijijiiiijjj = function () {
          return (_d = e.dynCall_viijijiiiijjj = e.asm._i).apply(null, arguments)
        }, md = e.dynCall_viiijiiii = function () {
          return (md = e.dynCall_viiijiiii = e.asm.$i).apply(null, arguments)
        }, bd = e.dynCall_viiiijjij = function () {
          return (bd = e.dynCall_viiiijjij = e.asm.aj).apply(null, arguments)
        }, vd = e.dynCall_jiiiiji = function () {
          return (vd = e.dynCall_jiiiiji = e.asm.bj).apply(null, arguments)
        }, gd = e.dynCall_viiiijijji = function () {
          return (gd = e.dynCall_viiiijijji = e.asm.cj).apply(null, arguments)
        }, wd = e.dynCall_viiijiiijii = function () {
          return (wd = e.dynCall_viiijiiijii = e.asm.dj).apply(null, arguments)
        }, jd = e.dynCall_viijijiiii = function () {
          return (jd = e.dynCall_viijijiiii = e.asm.ej).apply(null, arguments)
        }, Sd = e.dynCall_jd = function () {
          return (Sd = e.dynCall_jd = e.asm.fj).apply(null, arguments)
        }, Id = e.dynCall_jf = function () {
          return (Id = e.dynCall_jf = e.asm.gj).apply(null, arguments)
        }, Cd = e.dynCall_iijjj = function () {
          return (Cd = e.dynCall_iijjj = e.asm.hj).apply(null, arguments)
        }, Fd = e.dynCall_iiijji = function () {
          return (Fd = e.dynCall_iiijji = e.asm.ij).apply(null, arguments)
        }, Ad = e.dynCall_vijijiiiijjj = function () {
          return (Ad = e.dynCall_vijijiiiijjj = e.asm.jj).apply(null, arguments)
        }, xd = e.dynCall_viijiiiiii = function () {
          return (xd = e.dynCall_viijiiiiii = e.asm.kj).apply(null, arguments)
        }, Bd = e.dynCall_jjjji = function () {
          return (Bd = e.dynCall_jjjji = e.asm.lj).apply(null, arguments)
        }, Td = e.dynCall_jjjii = function () {
          return (Td = e.dynCall_jjjii = e.asm.mj).apply(null, arguments)
        }, Dd = e.dynCall_jji = function () {
          return (Dd = e.dynCall_jji = e.asm.nj).apply(null, arguments)
        }, Ed = e.dynCall_viiiijiiiii = function () {
          return (Ed = e.dynCall_viiiijiiiii = e.asm.oj).apply(null, arguments)
        }, kd = e.dynCall_viiiijiiii = function () {
          return (kd = e.dynCall_viiiijiiii = e.asm.pj).apply(null, arguments)
        }, Od = e.dynCall_iijjijj = function () {
          return (Od = e.dynCall_iijjijj = e.asm.qj).apply(null, arguments)
        }, Rd = e.dynCall_jijjii = function () {
          return (Rd = e.dynCall_jijjii = e.asm.rj).apply(null, arguments)
        }, Md = e.dynCall_viijjii = function () {
          return (Md = e.dynCall_viijjii = e.asm.sj).apply(null, arguments)
        }, Ud = e.dynCall_iiiiiij = function () {
          return (Ud = e.dynCall_iiiiiij = e.asm.tj).apply(null, arguments)
        }, Ld = e.dynCall_iiiiiiij = function () {
          return (Ld = e.dynCall_iiiiiiij = e.asm.uj).apply(null, arguments)
        }, Nd = e.dynCall_iiiiiiiiiiji = function () {
          return (Nd = e.dynCall_iiiiiiiiiiji = e.asm.vj).apply(null, arguments)
        }, Pd = e.dynCall_iiiiiiiij = function () {
          return (Pd = e.dynCall_iiiiiiiij = e.asm.wj).apply(null, arguments)
        }, Hd = e.dynCall_jiiijjj = function () {
          return (Hd = e.dynCall_jiiijjj = e.asm.xj).apply(null, arguments)
        }, Vd = e.dynCall_viiijijj = function () {
          return (Vd = e.dynCall_viiijijj = e.asm.yj).apply(null, arguments)
        }, zd = e.dynCall_jiiiiiii = function () {
          return (zd = e.dynCall_jiiiiiii = e.asm.zj).apply(null, arguments)
        }, Wd = e.dynCall_jiijj = function () {
          return (Wd = e.dynCall_jiijj = e.asm.Aj).apply(null, arguments)
        }, $d = e.dynCall_jiiijj = function () {
          return ($d = e.dynCall_jiiijj = e.asm.Bj).apply(null, arguments)
        }, Yd = e.dynCall_iiidj = function () {
          return (Yd = e.dynCall_iiidj = e.asm.Cj).apply(null, arguments)
        }, Xd = e.dynCall_iiiiiiiiiij = function () {
          return (Xd = e.dynCall_iiiiiiiiiij = e.asm.Dj).apply(null, arguments)
        }, Gd = e.dynCall_iiiiiiiiijiiiiiii = function () {
          return (Gd = e.dynCall_iiiiiiiiijiiiiiii = e.asm.Ej).apply(null, arguments)
        }, Kd = e.dynCall_iiijjiiji = function () {
          return (Kd = e.dynCall_iiijjiiji = e.asm.Fj).apply(null, arguments)
        }, Jd = e.dynCall_iiijjiij = function () {
          return (Jd = e.dynCall_iiijjiij = e.asm.Gj).apply(null, arguments)
        }, qd = e.dynCall_iiidjiij = function () {
          return (qd = e.dynCall_iiidjiij = e.asm.Hj).apply(null, arguments)
        }, Zd = e.dynCall_iiiiiiiji = function () {
          return (Zd = e.dynCall_iiiiiiiji = e.asm.Ij).apply(null, arguments)
        }, Qd = e.dynCall_iiiidjj = function () {
          return (Qd = e.dynCall_iiiidjj = e.asm.Jj).apply(null, arguments)
        }, tf = e.dynCall_iiiijjj = function () {
          return (tf = e.dynCall_iiiijjj = e.asm.Kj).apply(null, arguments)
        }, ef = e.dynCall_iiiiiiiiji = function () {
          return (ef = e.dynCall_iiiiiiiiji = e.asm.Lj).apply(null, arguments)
        }, rf = e.dynCall_iiiiiiiiiiiij = function () {
          return (rf = e.dynCall_iiiiiiiiiiiij = e.asm.Mj).apply(null, arguments)
        }, nf = e.dynCall_jiiiiii = function () {
          return (nf = e.dynCall_jiiiiii = e.asm.Nj).apply(null, arguments)
        }, sf = e.dynCall_iiiijjiii = function () {
          return (sf = e.dynCall_iiiijjiii = e.asm.Oj).apply(null, arguments)
        }, of = e.dynCall_viiiijji = function () {
          return (of = e.dynCall_viiiijji = e.asm.Pj).apply(null, arguments)
        }, af = e.dynCall_jiiiiiijii = function () {
          return (af = e.dynCall_jiiiiiijii = e.asm.Qj).apply(null, arguments)
        }, lf = e.dynCall_jiijjjii = function () {
          return (lf = e.dynCall_jiijjjii = e.asm.Rj).apply(null, arguments)
        }, cf = e.dynCall_jiiiijii = function () {
          return (cf = e.dynCall_jiiiijii = e.asm.Sj).apply(null, arguments)
        }, uf = e.dynCall_jiiiiijiiii = function () {
          return (uf = e.dynCall_jiiiiijiiii = e.asm.Tj).apply(null, arguments)
        }, df = e.dynCall_jiiijiii = function () {
          return (df = e.dynCall_jiiijiii = e.asm.Uj).apply(null, arguments)
        }, ff = e.dynCall_vj = function () {
          return (ff = e.dynCall_vj = e.asm.Vj).apply(null, arguments)
        }, hf = e.dynCall_viiiiijjii = function () {
          return (hf = e.dynCall_viiiiijjii = e.asm.Wj).apply(null, arguments)
        }, pf = e.dynCall_viiiiiijii = function () {
          return (pf = e.dynCall_viiiiiijii = e.asm.Xj).apply(null, arguments)
        }, yf = e.dynCall_viiiiiiijjjji = function () {
          return (yf = e.dynCall_viiiiiiijjjji = e.asm.Yj).apply(null, arguments)
        }, _f = e.dynCall_vjiii = function () {
          return (_f = e.dynCall_vjiii = e.asm.Zj).apply(null, arguments)
        }, mf = e.dynCall_ijjiii = function () {
          return (mf = e.dynCall_ijjiii = e.asm._j).apply(null, arguments)
        }, bf = e.dynCall_iiiiijiii = function () {
          return (bf = e.dynCall_iiiiijiii = e.asm.$j).apply(null, arguments)
        }, vf = e.dynCall_iiijiiji = function () {
          return (vf = e.dynCall_iiijiiji = e.asm.ak).apply(null, arguments)
        }, gf = e.dynCall_iijiii = function () {
          return (gf = e.dynCall_iijiii = e.asm.bk).apply(null, arguments)
        }, wf = e.dynCall_vijijjji = function () {
          return (wf = e.dynCall_vijijjji = e.asm.ck).apply(null, arguments)
        }, jf = e.dynCall_viijiijj = function () {
          return (jf = e.dynCall_viijiijj = e.asm.dk).apply(null, arguments)
        }, Sf = e.dynCall_viijijj = function () {
          return (Sf = e.dynCall_viijijj = e.asm.ek).apply(null, arguments)
        }, If = e.dynCall_viiiiijjji = function () {
          return (If = e.dynCall_viiiiijjji = e.asm.fk).apply(null, arguments)
        }, Cf = e.dynCall_iiijiijj = function () {
          return (Cf = e.dynCall_iiijiijj = e.asm.gk).apply(null, arguments)
        }, Ff = e.dynCall_viiijijjj = function () {
          return (Ff = e.dynCall_viiijijjj = e.asm.hk).apply(null, arguments)
        }, Af = e.dynCall_iijiijj = function () {
          return (Af = e.dynCall_iijiijj = e.asm.ik).apply(null, arguments)
        }, xf = e.dynCall_viiijjjji = function () {
          return (xf = e.dynCall_viiijjjji = e.asm.jk).apply(null, arguments)
        }, Bf = e.dynCall_vijjiii = function () {
          return (Bf = e.dynCall_vijjiii = e.asm.kk).apply(null, arguments)
        }, Tf = e.dynCall_vijijjiiiii = function () {
          return (Tf = e.dynCall_vijijjiiiii = e.asm.lk).apply(null, arguments)
        }, Df = e.dynCall_vijjiiiii = function () {
          return (Df = e.dynCall_vijjiiiii = e.asm.mk).apply(null, arguments)
        }, Ef = e.dynCall_iiijjji = function () {
          return (Ef = e.dynCall_iiijjji = e.asm.nk).apply(null, arguments)
        }, kf = e.dynCall_iiiiiijji = function () {
          return (kf = e.dynCall_iiiiiijji = e.asm.ok).apply(null, arguments)
        }, Of = e.dynCall_iijjjii = function () {
          return (Of = e.dynCall_iijjjii = e.asm.pk).apply(null, arguments)
        }, Rf = e.dynCall_iiiiijjji = function () {
          return (Rf = e.dynCall_iiiiijjji = e.asm.qk).apply(null, arguments)
        }, Mf = e.dynCall_iiiiijjj = function () {
          return (Mf = e.dynCall_iiiiijjj = e.asm.rk).apply(null, arguments)
        }, Uf = e.dynCall_viiijiji = function () {
          return (Uf = e.dynCall_viiijiji = e.asm.sk).apply(null, arguments)
        }, Lf = e.dynCall_jijiiii = function () {
          return (Lf = e.dynCall_jijiiii = e.asm.tk).apply(null, arguments)
        }, Nf = e.dynCall_viijiji = function () {
          return (Nf = e.dynCall_viijiji = e.asm.uk).apply(null, arguments)
        };

        function Qm(s) {
          var a = w();
          try {
            U(s)()
          } catch (l) {
            if (j(a), l !== l + 0) throw l;
            S(1, 0)
          }
        }

        function tb(s, a, l) {
          var c = w();
          try {
            U(s)(a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function eb(s, a) {
          var l = w();
          try {
            return U(s)(a)
          } catch (c) {
            if (j(l), c !== c + 0) throw c;
            S(1, 0)
          }
        }

        function ib(s, a, l) {
          var c = w();
          try {
            return U(s)(a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function rb(s, a) {
          var l = w();
          try {
            U(s)(a)
          } catch (c) {
            if (j(l), c !== c + 0) throw c;
            S(1, 0)
          }
        }

        function nb(s, a, l, c) {
          var u = w();
          try {
            return U(s)(a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function sb(s, a, l, c, u, f) {
          var h = w();
          try {
            return U(s)(a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function ob(s, a, l, c, u) {
          var f = w();
          try {
            U(s)(a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function ab(s, a, l, c, u) {
          var f = w();
          try {
            return U(s)(a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function lb(s, a, l, c) {
          var u = w();
          try {
            return U(s)(a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function cb(s, a, l, c) {
          var u = w();
          try {
            return U(s)(a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function ub(s, a, l, c) {
          var u = w();
          try {
            U(s)(a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function db(s, a, l, c) {
          var u = w();
          try {
            U(s)(a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function fb(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return U(s)(a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function hb(s, a, l, c, u, f, h) {
          var y = w();
          try {
            U(s)(a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function pb(s, a, l, c, u, f) {
          var h = w();
          try {
            U(s)(a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function yb(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return U(s)(a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function _b(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return U(s)(a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function mb(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            return U(s)(a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function bb(s) {
          var a = w();
          try {
            return U(s)()
          } catch (l) {
            if (j(a), l !== l + 0) throw l;
            S(1, 0)
          }
        }

        function vb(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            U(s)(a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function gb(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            return U(s)(a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function wb(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            U(s)(a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function jb(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P) {
          var ot = w();
          try {
            U(s)(a, l, c, u, f, h, y, _, b, v, g, C, x, D, P)
          } catch (dt) {
            if (j(ot), dt !== dt + 0) throw dt;
            S(1, 0)
          }
        }

        function Sb(s, a, l, c, u, f) {
          var h = w();
          try {
            return U(s)(a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function Ib(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return U(s)(a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Cb(s, a, l, c, u) {
          var f = w();
          try {
            return U(s)(a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function Fb(s, a, l, c, u) {
          var f = w();
          try {
            return U(s)(a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function Ab(s, a, l, c, u, f) {
          var h = w();
          try {
            U(s)(a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function xb(s, a, l) {
          var c = w();
          try {
            U(s)(a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function Bb(s, a, l) {
          var c = w();
          try {
            U(s)(a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function Tb(s, a) {
          var l = w();
          try {
            return U(s)(a)
          } catch (c) {
            if (j(l), c !== c + 0) throw c;
            S(1, 0)
          }
        }

        function Db(s, a) {
          var l = w();
          try {
            return U(s)(a)
          } catch (c) {
            if (j(l), c !== c + 0) throw c;
            S(1, 0)
          }
        }

        function Eb(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot) {
          var dt = w();
          try {
            return U(s)(a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot)
          } catch (B) {
            if (j(dt), B !== B + 0) throw B;
            S(1, 0)
          }
        }

        function kb(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            U(s)(a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Ob(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            U(s)(a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Rb(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return U(s)(a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Mb(s, a, l) {
          var c = w();
          try {
            return U(s)(a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function Ub(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            U(s)(a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Lb(s, a) {
          var l = w();
          try {
            return U(s)(a)
          } catch (c) {
            if (j(l), c !== c + 0) throw c;
            S(1, 0)
          }
        }

        function Nb(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot, dt) {
          var B = w();
          try {
            return U(s)(a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot, dt)
          } catch (R) {
            if (j(B), R !== R + 0) throw R;
            S(1, 0)
          }
        }

        function Pb(s, a, l, c) {
          var u = w();
          try {
            return U(s)(a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function Hb(s, a, l, c, u, f, h) {
          var y = w();
          try {
            U(s)(a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Vb(s, a, l) {
          var c = w();
          try {
            return U(s)(a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function zb(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return U(s)(a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Wb(s, a, l, c, u) {
          var f = w();
          try {
            return U(s)(a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function $b(s, a) {
          var l = w();
          try {
            return U(s)(a)
          } catch (c) {
            if (j(l), c !== c + 0) throw c;
            S(1, 0)
          }
        }

        function Yb(s, a, l, c, u) {
          var f = w();
          try {
            return U(s)(a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function Xb(s, a, l, c, u) {
          var f = w();
          try {
            return U(s)(a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function Gb(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return U(s)(a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Kb(s, a, l, c) {
          var u = w();
          try {
            U(s)(a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function Jb(s, a, l, c) {
          var u = w();
          try {
            U(s)(a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function qb(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P) {
          var ot = w();
          try {
            return U(s)(a, l, c, u, f, h, y, _, b, v, g, C, x, D, P)
          } catch (dt) {
            if (j(ot), dt !== dt + 0) throw dt;
            S(1, 0)
          }
        }

        function Zb(s, a, l) {
          var c = w();
          try {
            return U(s)(a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function Qb(s, a, l) {
          var c = w();
          try {
            return U(s)(a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function tv(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            U(s)(a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function ev(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            U(s)(a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function iv(s, a, l, c, u) {
          var f = w();
          try {
            return Vl(s, a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function rv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            Dc(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function nv(s, a, l, c, u) {
          var f = w();
          try {
            nc(s, a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function sv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return yc(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function ov(s, a, l, c, u) {
          var f = w();
          try {
            return Kl(s, a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function av(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            tc(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function lv(s, a) {
          var l = w();
          try {
            return Xl(s, a)
          } catch (c) {
            if (j(l), c !== c + 0) throw c;
            S(1, 0)
          }
        }

        function cv(s, a, l) {
          var c = w();
          try {
            return mc(s, a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function uv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            $l(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function dv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return zl(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function fv(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return Wl(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function hv(s, a, l, c) {
          var u = w();
          try {
            rc(s, a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function pv(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            _c(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function yv(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            zu(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function _v(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            hf(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function mv(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            pf(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function bv(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot) {
          var dt = w();
          try {
            yf(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot)
          } catch (B) {
            if (j(dt), B !== B + 0) throw B;
            S(1, 0)
          }
        }

        function vv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            Yl(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function gv(s, a, l, c, u) {
          var f = w();
          try {
            Gl(s, a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function wv(s, a, l, c) {
          var u = w();
          try {
            return ic(s, a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function jv(s, a, l, c, u, f) {
          var h = w();
          try {
            dc(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function Sv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return Mu(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Iv(s, a, l, c, u) {
          var f = w();
          try {
            return sc(s, a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function Cv(s, a, l, c, u, f) {
          var h = w();
          try {
            Jl(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function Fv(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            Ql(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Av(s, a, l, c, u, f) {
          var h = w();
          try {
            return ql(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function xv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            Zl(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Bv(s, a, l, c, u, f) {
          var h = w();
          try {
            return Uu(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function Tv(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            gc(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Dv(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return Sc(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Ev(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return Ic(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function kv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return bc(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Ov(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return mf(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Rv(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return pc(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Mv(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            hc(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Uv(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            lc(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Lv(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return cc(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Nv(s, a, l, c, u, f) {
          var h = w();
          try {
            return ec(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function Pv(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            oc(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Hv(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            ac(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Vv(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            fc(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function zv(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D) {
          var P = w();
          try {
            uc(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D)
          } catch (ot) {
            if (j(P), ot !== ot + 0) throw ot;
            S(1, 0)
          }
        }

        function Wv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return vc(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function $v(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return wc(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Yv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return jc(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Xv(s, a, l, c, u, f) {
          var h = w();
          try {
            Cc(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function Gv(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return Lu(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Kv(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return Fc(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Jv(s, a, l, c, u, f) {
          var h = w();
          try {
            return Ac(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function qv(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return Ou(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Zv(s, a, l, c) {
          var u = w();
          try {
            return Iu(s, a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function Qv(s, a, l, c) {
          var u = w();
          try {
            return Ru(s, a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function tg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return qc(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function eg(s, a, l) {
          var c = w();
          try {
            return Tc(s, a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function ig(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            Bc(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function rg(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return gf(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function ng(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            Fu(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function sg(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            Au(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function og(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            nu(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function ag(s, a, l, c, u) {
          var f = w();
          try {
            return Rc(s, a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function lg(s, a, l, c, u, f) {
          var h = w();
          try {
            return Ec(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function cg(s) {
          var a = w();
          try {
            return Oc(s)
          } catch (l) {
            if (j(a), l !== l + 0) throw l;
            S(1, 0)
          }
        }

        function ug(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return kc(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function dg(s, a, l) {
          var c = w();
          try {
            return Cu(s, a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function fg(s, a, l, c, u, f, h) {
          var y = w();
          try {
            sd(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function hg(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            uu(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function pg(s, a, l, c, u, f) {
          var h = w();
          try {
            return Mc(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function yg(s, a, l, c, u, f) {
          var h = w();
          try {
            Qc(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function _g(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            au(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function mg(s, a, l, c, u, f, h) {
          var y = w();
          try {
            $c(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function bg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            Wc(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function vg(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            zc(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function gg(s, a, l, c, u, f) {
          var h = w();
          try {
            return ru(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function wg(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            Uc(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function jg(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return Xc(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Sg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            Yc(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Ig(s, a, l, c, u, f, h, y, _, b, v, g, C, x) {
          var D = w();
          try {
            return Nc(s, a, l, c, u, f, h, y, _, b, v, g, C, x)
          } catch (P) {
            if (j(D), P !== P + 0) throw P;
            S(1, 0)
          }
        }

        function Cg(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return Pc(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Fg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return Hc(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Ag(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot, dt) {
          var B = w();
          try {
            return Lc(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot, dt)
          } catch (R) {
            if (j(B), R !== R + 0) throw R;
            S(1, 0)
          }
        }

        function xg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return Vc(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Bg(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            fu(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Tg(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            Gc(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Dg(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            Kc(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Eg(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            eu(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function kg(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            iu(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Og(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return tu(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Rg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return Zc(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Mg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            su(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Ug(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return Jc(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Lg(s, a, l, c, u, f, h) {
          var y = w();
          try {
            lu(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Ng(s, a, l, c, u, f) {
          var h = w();
          try {
            return cu(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function Pg(s, a, l, c, u, f) {
          var h = w();
          try {
            return Su(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function Hg(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return du(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Vg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return hu(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function zg(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return xc(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Wg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            yu(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function $g(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            bu(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Yg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            vu(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Xg(s, a, l, c, u, f, h) {
          var y = w();
          try {
            gu(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Gg(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            return wu(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function Kg(s, a, l, c, u, f) {
          var h = w();
          try {
            _f(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function Jg(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return ju(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function qg(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            pu(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Zg(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            _u(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Qg(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            mu(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function t0(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return xu(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function e0(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return Bu(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function i0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return Tu(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function r0(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            return Du(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function n0(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return Eu(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function s0(s, a, l, c, u, f, h, y, _, b, v, g, C, x) {
          var D = w();
          try {
            return ku(s, a, l, c, u, f, h, y, _, b, v, g, C, x)
          } catch (P) {
            if (j(D), P !== P + 0) throw P;
            S(1, 0)
          }
        }

        function o0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return Nu(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function a0(s, a, l, c, u, f, h) {
          var y = w();
          try {
            Yu(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function l0(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            Ku(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function c0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            Ju(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function u0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return Wu(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function d0(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            $u(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function f0(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return Xu(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function h0(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            Pu(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function p0(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            Hu(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function y0(s, a, l, c) {
          var u = w();
          try {
            return Vu(s, a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function _0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            Gu(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function m0(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            qu(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function b0(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            Zu(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function v0(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return td(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function g0(s, a, l, c, u) {
          var f = w();
          try {
            return nd(s, a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function w0(s, a, l, c, u) {
          var f = w();
          try {
            ed(s, a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function j0(s, a, l, c, u) {
          var f = w();
          try {
            return Qu(s, a, l, c, u)
          } catch (h) {
            if (j(f), h !== h + 0) throw h;
            S(1, 0)
          }
        }

        function S0(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return id(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function I0(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            od(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function C0(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            return rd(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function F0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return vd(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function A0(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            cd(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function x0(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            ud(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function B0(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            pd(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function T0(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P) {
          var ot = w();
          try {
            yd(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P)
          } catch (dt) {
            if (j(ot), dt !== dt + 0) throw dt;
            S(1, 0)
          }
        }

        function D0(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot, dt) {
          var B = w();
          try {
            _d(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot, dt)
          } catch (R) {
            if (j(B), R !== R + 0) throw R;
            S(1, 0)
          }
        }

        function E0(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            dd(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function k0(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            jd(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function O0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return ad(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function R0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return ld(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function M0(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            fd(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function U0(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            hd(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function L0(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            gd(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function N0(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            md(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function P0(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            bd(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function H0(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            wd(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function V0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return Cd(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function z0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return Fd(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function W0(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot) {
          var dt = w();
          try {
            Ad(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot)
          } catch (B) {
            if (j(dt), B !== B + 0) throw B;
            S(1, 0)
          }
        }

        function $0(s, a) {
          var l = w();
          try {
            return Sd(s, a)
          } catch (c) {
            if (j(l), c !== c + 0) throw c;
            S(1, 0)
          }
        }

        function Y0(s, a) {
          var l = w();
          try {
            return Id(s, a)
          } catch (c) {
            if (j(l), c !== c + 0) throw c;
            S(1, 0)
          }
        }

        function X0(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            xd(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function G0(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return Bd(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function K0(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return Td(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function J0(s, a, l, c) {
          var u = w();
          try {
            return Dd(s, a, l, c)
          } catch (f) {
            if (j(u), f !== f + 0) throw f;
            S(1, 0)
          }
        }

        function q0(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            Ed(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function Z0(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            kd(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Q0(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return Od(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function tw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return Pd(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function ew(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return Ud(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function iw(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return Rd(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function rw(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            return Nd(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function nw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return Hd(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function sw(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            Vd(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function ow(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            Md(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function aw(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return zd(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function lw(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return Wd(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function cw(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return Ld(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function uw(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return $d(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function dw(s, a, l, c, u, f) {
          var h = w();
          try {
            return Yd(s, a, l, c, u, f)
          } catch (y) {
            if (j(h), y !== y + 0) throw y;
            S(1, 0)
          }
        }

        function fw(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            return Xd(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function hw(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot, dt) {
          var B = w();
          try {
            return Gd(s, a, l, c, u, f, h, y, _, b, v, g, C, x, D, P, ot, dt)
          } catch (R) {
            if (j(B), R !== R + 0) throw R;
            S(1, 0)
          }
        }

        function pw(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            return Kd(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function yw(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return Jd(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function _w(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return qd(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function mw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return Zd(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function bw(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return Qd(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function vw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return tf(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function gw(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return ef(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function ww(s, a, l, c, u, f, h, y, _, b, v, g, C, x) {
          var D = w();
          try {
            return rf(s, a, l, c, u, f, h, y, _, b, v, g, C, x)
          } catch (P) {
            if (j(D), P !== P + 0) throw P;
            S(1, 0)
          }
        }

        function jw(s, a, l, c, u, f, h) {
          var y = w();
          try {
            return nf(s, a, l, c, u, f, h)
          } catch (_) {
            if (j(y), _ !== _ + 0) throw _;
            S(1, 0)
          }
        }

        function Sw(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return sf(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Iw(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return af(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Cw(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return lf(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Fw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            of(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Aw(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return cf(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function xw(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            return uf(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function Bw(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            return df(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Tw(s, a, l) {
          var c = w();
          try {
            ff(s, a, l)
          } catch (u) {
            if (j(c), u !== u + 0) throw u;
            S(1, 0)
          }
        }

        function Dw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return vf(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Ew(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return bf(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function kw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            ou(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Ow(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            wf(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        function Rw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            Sf(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Mw(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return Cf(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Uw(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            jf(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Lw(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            If(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function Nw(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            Ff(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function Pw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return Af(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Hw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return Ef(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Vw(s, a, l, c, u, f, h, y, _, b, v, g, C) {
          var x = w();
          try {
            xf(s, a, l, c, u, f, h, y, _, b, v, g, C)
          } catch (D) {
            if (j(x), D !== D + 0) throw D;
            S(1, 0)
          }
        }

        function zw(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            Nf(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Ww(s, a, l, c, u, f, h, y, _, b, v, g, C, x) {
          var D = w();
          try {
            Tf(s, a, l, c, u, f, h, y, _, b, v, g, C, x)
          } catch (P) {
            if (j(D), P !== P + 0) throw P;
            S(1, 0)
          }
        }

        function $w(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            Df(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Yw(s, a, l, c, u, f, h, y, _) {
          var b = w();
          try {
            Bf(s, a, l, c, u, f, h, y, _)
          } catch (v) {
            if (j(b), v !== v + 0) throw v;
            S(1, 0)
          }
        }

        function Xw(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return kf(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function Gw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            Uf(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Kw(s, a, l, c, u, f, h, y) {
          var _ = w();
          try {
            return Lf(s, a, l, c, u, f, h, y)
          } catch (b) {
            if (j(_), b !== b + 0) throw b;
            S(1, 0)
          }
        }

        function Jw(s, a, l, c, u, f, h, y, _, b, v) {
          var g = w();
          try {
            return Mf(s, a, l, c, u, f, h, y, _, b, v)
          } catch (C) {
            if (j(g), C !== C + 0) throw C;
            S(1, 0)
          }
        }

        function qw(s, a, l, c, u, f, h, y, _, b) {
          var v = w();
          try {
            return Of(s, a, l, c, u, f, h, y, _, b)
          } catch (g) {
            if (j(v), g !== g + 0) throw g;
            S(1, 0)
          }
        }

        function Zw(s, a, l, c, u, f, h, y, _, b, v, g) {
          var C = w();
          try {
            return Rf(s, a, l, c, u, f, h, y, _, b, v, g)
          } catch (x) {
            if (j(C), x !== x + 0) throw x;
            S(1, 0)
          }
        }

        e.stackAlloc = vs, e.stackSave = w, e.stackRestore = j, e.ccall = dm;
        var gs;
        yn = function s() {
          gs || Pf(), gs || (yn = s)
        };

        function Qw(s) {
          var a = e._main, l = 0, c = 0;
          try {
            var u = a(l, c);
            return lm(u, !0), u
          } catch (f) {
            return cm(f)
          }
        }

        function Pf(s) {
          if (s = s || d, _r > 0 || (yy(), _r > 0)) return;

          function a() {
            gs || (gs = !0, e.calledRun = !0, !Zt && (_y(), my(), r(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), Hf && Qw(s), by()))
          }

          e.setStatus ? (e.setStatus("Running..."), setTimeout(function () {
            setTimeout(function () {
              e.setStatus("")
            }, 1), a()
          }, 1)) : a()
        }

        if (e.preInit) for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); e.preInit.length > 0;) e.preInit.pop()();
        var Hf = !0;
        return e.noInitialRun && (Hf = !1), Pf(), t.ready
      }
    })(), ty = $I;
    var ta = class {
      constructor(t, e) {
        this._bindings = t, this._conn = e
      }

      close() {
        this._bindings.disconnect(this._conn)
      }

      useUnsafe(t) {
        return t(this._bindings, this._conn)
      }

      query(t) {
        let e = this._bindings.runQuery(this._conn, t), r = Lt.from(e);
        return console.assert(r.isSync()), console.assert(r.isFile()), new Rt(r)
      }

      async send(t) {
        let e = this._bindings.startPendingQuery(this._conn, t);
        for (; e == null;) e = await new Promise((o, d) => {
          try {
            o(this._bindings.pollPendingQuery(this._conn))
          } catch (p) {
            d(p)
          }
        });
        let r = new ea(this._bindings, this._conn, e), n = Lt.from(r);
        return console.assert(n.isSync()), console.assert(n.isStream()), n
      }

      cancelSent() {
        return this._bindings.cancelPendingQuery(this._conn)
      }

      getTableNames(t) {
        return this._bindings.getTableNames(this._conn, t)
      }

      prepare(t) {
        let e = this._bindings.createPrepared(this._conn, t);
        return new pl(this._bindings, this._conn, e)
      }

      createScalarFunction(t, e, r) {
        this._bindings.createScalarFunction(this._conn, t, e, r)
      }

      insertArrowTable(t, e) {
        let r = qo(t, "stream");
        this.insertArrowFromIPCStream(r, e)
      }

      insertArrowFromIPCStream(t, e) {
        this._bindings.insertArrowFromIPCStream(this._conn, t, e)
      }

      insertCSVFromPath(t, e) {
        this._bindings.insertCSVFromPath(this._conn, t, e)
      }

      insertJSONFromPath(t, e) {
        this._bindings.insertJSONFromPath(this._conn, t, e)
      }
    }, ea = class {
      constructor(t, e, r) {
        this.bindings = t;
        this.conn = e;
        this.header = r;
        this._first = !0, this._depleted = !1
      }

      next() {
        if (this._first) return this._first = !1, {done: !1, value: this.header};
        if (this._depleted) return {done: !0, value: null};
        let t = this.bindings.fetchQueryResults(this.conn);
        return this._depleted = t.length == 0, {done: this._depleted, value: t}
      }

      [Symbol.iterator]() {
        return this
      }
    }, pl = class {
      constructor(t, e, r) {
        this.bindings = t, this.connectionId = e, this.statementId = r
      }

      close() {
        this.bindings.closePrepared(this.connectionId, this.statementId)
      }

      query(...t) {
        let e = this.bindings.runPrepared(this.connectionId, this.statementId, t), r = Lt.from(e);
        return console.assert(r.isSync()), console.assert(r.isFile()), new Rt(r)
      }

      send(...t) {
        let e = this.bindings.sendPrepared(this.connectionId, this.statementId, t),
            r = new ea(this.bindings, this.connectionId, e), n = Lt.from(r);
        return console.assert(n.isSync()), console.assert(n.isStream()), n
      }
    };
    var ry = new TextEncoder, ey = new TextDecoder("utf-8");

    function yl(i, t, e) {
      let r = ry.encode(e), n = i._malloc(r.byteLength), o = i.HEAPU8.subarray(n, n + r.byteLength);
      o.set(r), i.HEAPF64[(t >> 3) + 0] = 1, i.HEAPF64[(t >> 3) + 1] = n, i.HEAPF64[(t >> 3) + 2] = o.byteLength
    }

    function ml(i) {
      switch (i) {
        case"UINT8":
        case"INT8":
          return 1;
        case"INT32":
        case"FLOAT":
          return 4;
        case"INT64":
        case"UINT64":
        case"DOUBLE":
        case"VARCHAR":
          return 8;
        default:
          return 0
      }
    }

    function _l(i, t, e, r) {
      let n = i.HEAPU8.subarray(t, t + r * ml(e));
      switch (e) {
        case"UINT8":
          return new Uint8Array(n.buffer, n.byteOffset, r);
        case"INT8":
          return new Int8Array(n.buffer, n.byteOffset, r);
        case"INT32":
          return new Int32Array(n.buffer, n.byteOffset, r);
        case"FLOAT":
          return new Float32Array(n.buffer, n.byteOffset, r);
        case"DOUBLE":
          return new Float64Array(n.buffer, n.byteOffset, r);
        case"VARCHAR":
          return new Float64Array(n.buffer, n.byteOffset, r);
        default:
          return new Array(0)
      }
    }

    function iy(i, t, e) {
      let r = i.HEAPU8.subarray(t, t + e);
      return new Uint8Array(r.buffer, r.byteOffset, e)
    }

    function ia(i, t, e) {
      let r = i.HEAPU8.subarray(t, t + e * 8);
      return new Float64Array(r.buffer, r.byteOffset, e)
    }

    function ny(i, t, e, r, n, o, d, p) {
      try {
        let m = i._udfFunctions.get(r);
        if (!m) {
          yl(t, e, "Unknown UDF with id: " + r);
          return
        }
        let I = ey.decode(t.HEAPU8.subarray(n, n + o)), A = JSON.parse(I), E = ia(t, d, p / 8), T = ct => {
          var ne;
          let Zt = null;
          switch (ct.validityBuffer !== void 0 && (Zt = iy(t, E[ct.validityBuffer], A.rows)), ct.physicalType) {
            case"VARCHAR": {
              if (ct.dataBuffer === null || ct.dataBuffer === void 0) throw new Error("malformed data view, expected data buffer for VARCHAR argument");
              if (ct.lengthBuffer === null || ct.lengthBuffer === void 0) throw new Error("malformed data view, expected data length buffer for VARCHAR argument");
              let ue = _l(t, E[ct.dataBuffer], ct.physicalType, A.rows), Qt = [],
                  Wt = ia(t, E[ct.lengthBuffer], A.rows);
              for (let pt = 0; pt < A.rows; ++pt) {
                if (Zt != null && !Zt[pt]) {
                  Qt.push(null);
                  continue
                }
                let me = t.HEAPU8.subarray(ue[pt], ue[pt] + Wt[pt]), Zi = ey.decode(me);
                Qt.push(Zi)
              }
              return pt => Qt[pt]
            }
            case"STRUCT": {
              let ue = {}, Qt = [];
              for (let Wt = 0; Wt < (((ne = ct.children) == null ? void 0 : ne.length) || 0); ++Wt) {
                let pt = ct.children[Wt], me = T(pt);
                Qt.push(Zi => {
                  ue[pt.name] = me(Zi)
                })
              }
              return Zt != null ? Wt => {
                if (!Zt[Wt]) return null;
                for (let pt of Qt) pt(Wt);
                return ue
              } : Wt => {
                for (let pt of Qt) pt(Wt);
                return ue
              }
            }
            default: {
              if (ct.dataBuffer === void 0) throw new Error("malformed data view, expected data buffer for argument of type: " + ct.physicalType);
              let ue = _l(t, E[ct.dataBuffer], ct.physicalType, A.rows);
              return Zt != null ? Qt => Zt[Qt] ? ue[Qt] : null : Qt => ue[Qt]
            }
          }
        }, k = [];
        for (let ct = 0; ct < A.args.length; ++ct) k.push(T(A.args[ct]));
        let lt = A.rows * ml(A.ret.physicalType), ut = t._malloc(lt), wt = _l(t, ut, A.ret.physicalType, A.rows),
            Ot = t._malloc(A.rows), ce = iy(t, Ot, A.rows);
        if (wt.length == 0 || ce.length == 0) {
          yl(t, e, "Can't create physical arrays for result");
          return
        }
        let _e = wt;
        A.ret.physicalType == "VARCHAR" && (_e = new Array(A.rows));
        let yr = [];
        for (let ct = 0; ct < A.args.length; ++ct) yr.push(null);
        for (let ct = 0; ct < A.rows; ++ct) {
          for (let ne = 0; ne < A.args.length; ++ne) yr[ne] = k[ne](ct);
          let Zt = m.func(...yr);
          _e[ct] = Zt, ce[ct] = Zt == null ? 0 : 1
        }
        let fn = 0;
        switch (A.ret.physicalType) {
          case"VARCHAR": {
            let ct = new Array(0);
            fn = t._malloc(A.rows * ml("DOUBLE"));
            let Zt = ia(t, fn, A.rows), ne = 0;
            for (let pt = 0; pt < A.rows; ++pt) {
              let me = ry.encode(_e[pt] || "");
              ct.push(me), Zt[pt] = me.length, ne += me.length
            }
            let ue = t._malloc(ne), Qt = t.HEAPU8.subarray(ue, ue + ne), Wt = 0;
            for (let pt = 0; pt < A.rows; ++pt) {
              wt[pt] = Wt;
              let me = ct[pt];
              Qt.subarray(Wt, Wt + me.length).set(me), Wt += me.length
            }
          }
        }
        let Ge = 3 * 8, qi = t._malloc(Ge), hn = ia(t, qi, 3);
        hn[0] = ut, hn[1] = Ot, hn[2] = fn, t.HEAPF64[(e >> 3) + 0] = 0, t.HEAPF64[(e >> 3) + 1] = qi, t.HEAPF64[(e >> 3) + 2] = 0
      } catch (m) {
        yl(t, e, m.toString())
      }
    }

    function XI() {
      let i = new TextDecoder;
      return t => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), i.decode(t))
    }

    var GI = XI();

    function fi(i, t) {
      console.error(`FAIL WITH: ${t}`), i.ccall("duckdb_web_fail_with", null, ["string"], [t])
    }

    function Mr(i, t, e) {
      let r = i.HEAPU8.subarray(t, t + e), n = new Uint8Array(new ArrayBuffer(r.byteLength));
      return n.set(r), n
    }

    function tt(i, t, e) {
      return GI(i.HEAPU8.subarray(t, t + e))
    }

    function mt(i, t, e, r) {
      let n = i.stackSave(), o = i.stackAlloc(3 * 8);
      e.unshift("number"), r.unshift(o), i.ccall(t, null, e, r);
      let d = i.HEAPF64[(o >> 3) + 0], p = i.HEAPF64[(o >> 3) + 1], m = i.HEAPF64[(o >> 3) + 2];
      return i.stackRestore(n), [d, p, m]
    }

    function Ft(i) {
      i.ccall("duckdb_web_clear_response", null, [], [])
    }

    var ra = class {
      constructor(t) {
        let e = new Float64Array(t.buffer, t.byteOffset, t.byteLength / 8),
            r = new Uint8Array(new ArrayBuffer(t.byteLength));
        r.set(t.subarray(7 * 8)), this.totalFileReadsCold = e[0], this.totalFileReadsAhead = e[1], this.totalFileReadsCached = e[2], this.totalFileWrites = e[3], this.totalPageAccesses = e[4], this.totalPageLoads = e[5], this.blockSize = e[6], this.blockStats = r
      }

      getBlockStats(t, e) {
        return e = e || {
          file_reads_cold: 0,
          file_reads_ahead: 0,
          file_reads_cached: 0,
          file_writes: 0,
          page_accesses: 0,
          page_loads: 0
        }, e.file_writes = this.blockStats[t * 3 + 0] & 15, e.file_reads_cold = this.blockStats[t * 3 + 0] >> 4, e.file_reads_ahead = this.blockStats[t * 3 + 1] & 15, e.file_reads_cached = this.blockStats[t * 3 + 1] >> 4, e.page_accesses = this.blockStats[t * 3 + 1] & 15, e.page_loads = this.blockStats[t * 3 + 1] >> 4, e
      }
    };
    var KI = new TextEncoder;
    var na = class {
      constructor(t, e) {
        this._instance = null;
        this._initPromise = null;
        this._initPromiseResolver = () => {
        };
        this.onInstantiationProgress = [];
        this._logger = t, this._runtime = e, this._nextUDFId = 1
      }

      get logger() {
        return this._logger
      }

      get mod() {
        return this._instance
      }

      get pthread() {
        return this.mod.PThread || null
      }

      async instantiate(t = e => {
      }) {
        return this._instance != null ? this : (this._initPromise != null && (this.onInstantiationProgress.push(t), await this._initPromise), this._initPromise = new Promise(e => {
          this._initPromiseResolver = e
        }), this.onInstantiationProgress = [t], this._instance = await this.instantiateImpl({
          print: console.log.bind(console),
          printErr: console.log.bind(console),
          onRuntimeInitialized: this._initPromiseResolver
        }), await this._initPromise, this._initPromise = null, this.onInstantiationProgress = this.onInstantiationProgress.filter(e => e != t), this)
      }

      open(t) {
        let [e, r, n] = mt(this.mod, "duckdb_web_open", ["string"], [JSON.stringify(t)]);
        if (e !== 0) throw new Error(tt(this.mod, r, n));
        Ft(this.mod)
      }

      reset() {
        let [t, e, r] = mt(this.mod, "duckdb_web_reset", [], []);
        if (t !== 0) throw new Error(tt(this.mod, e, r));
        Ft(this.mod)
      }

      getVersion() {
        let [t, e, r] = mt(this.mod, "duckdb_web_get_version", [], []);
        if (t !== 0) throw new Error(tt(this.mod, e, r));
        let n = tt(this.mod, e, r);
        return Ft(this.mod), n
      }

      getFeatureFlags() {
        return this.mod.ccall("duckdb_web_get_feature_flags", "number", [], [])
      }

      tokenize(t) {
        let [e, r, n] = mt(this.mod, "duckdb_web_tokenize", ["string"], [t]);
        if (e !== 0) throw new Error(tt(this.mod, r, n));
        let o = tt(this.mod, r, n);
        return Ft(this.mod), JSON.parse(o)
      }

      connect() {
        let t = this.mod.ccall("duckdb_web_connect", "number", [], []);
        return new ta(this, t)
      }

      disconnect(t) {
        if (this.mod.ccall("duckdb_web_disconnect", null, ["number"], [t]), this.pthread) for (let e of [...this.pthread.runningWorkers, ...this.pthread.unusedWorkers]) e.postMessage({
          cmd: "dropUDFFunctions",
          connectionId: t
        })
      }

      runQuery(t, e) {
        let [r, n, o] = mt(this.mod, "duckdb_web_query_run", ["number", "string"], [t, e]);
        if (r !== 0) throw new Error(tt(this.mod, n, o));
        let d = Mr(this.mod, n, o);
        return Ft(this.mod), d
      }

      startPendingQuery(t, e) {
        let [r, n, o] = mt(this.mod, "duckdb_web_pending_query_start", ["number", "string"], [t, e]);
        if (r !== 0) throw new Error(tt(this.mod, n, o));
        if (n == 0) return null;
        let d = Mr(this.mod, n, o);
        return Ft(this.mod), d
      }

      pollPendingQuery(t) {
        let [e, r, n] = mt(this.mod, "duckdb_web_pending_query_poll", ["number"], [t]);
        if (e !== 0) throw new Error(tt(this.mod, r, n));
        if (r == 0) return null;
        let o = Mr(this.mod, r, n);
        return Ft(this.mod), o
      }

      cancelPendingQuery(t) {
        return this.mod.ccall("duckdb_web_pending_query_cancel", "boolean", ["number"], [t])
      }

      fetchQueryResults(t) {
        let [e, r, n] = mt(this.mod, "duckdb_web_query_fetch_results", ["number"], [t]);
        if (e !== 0) throw new Error(tt(this.mod, r, n));
        let o = Mr(this.mod, r, n);
        return Ft(this.mod), o
      }

      getTableNames(t, e) {
        let [r, n, o] = mt(this.mod, "duckdb_web_get_tablenames", ["number", "string"], [t, e]);
        if (r !== 0) throw new Error(tt(this.mod, n, o));
        let d = tt(this.mod, n, o);
        return Ft(this.mod), JSON.parse(d)
      }

      createScalarFunction(t, e, r, n) {
        let o = {functionId: this._nextUDFId, name: e, returnType: dn(r)},
            d = {functionId: o.functionId, connectionId: t, name: e, returnType: r, func: n};
        this._nextUDFId += 1;
        let [p, m, I] = mt(this.mod, "duckdb_web_udf_scalar_create", ["number", "string"], [t, JSON.stringify(o)]);
        if (p !== 0) throw new Error(tt(this.mod, m, I));
        if (Ft(this.mod), globalThis.DUCKDB_RUNTIME._udfFunctions = (globalThis.DUCKDB_RUNTIME._udfFunctions || new Map).set(d.functionId, d), this.pthread) for (let A of [...this.pthread.runningWorkers, ...this.pthread.unusedWorkers]) A.postMessage({
          cmd: "registerUDFFunction",
          udf: d
        })
      }

      createPrepared(t, e) {
        let [r, n, o] = mt(this.mod, "duckdb_web_prepared_create", ["number", "string"], [t, e]);
        if (r !== 0) throw new Error(tt(this.mod, n, o));
        return Ft(this.mod), n
      }

      closePrepared(t, e) {
        let [r, n, o] = mt(this.mod, "duckdb_web_prepared_close", ["number", "number"], [t, e]);
        if (r !== 0) throw new Error(tt(this.mod, n, o));
        Ft(this.mod)
      }

      runPrepared(t, e, r) {
        let [n, o, d] = mt(this.mod, "duckdb_web_prepared_run", ["number", "number", "string"], [t, e, JSON.stringify(r)]);
        if (n !== 0) throw new Error(tt(this.mod, o, d));
        let p = Mr(this.mod, o, d);
        return Ft(this.mod), p
      }

      sendPrepared(t, e, r) {
        let [n, o, d] = mt(this.mod, "duckdb_web_prepared_send", ["number", "number", "string"], [t, e, JSON.stringify(r)]);
        if (n !== 0) throw new Error(tt(this.mod, o, d));
        let p = Mr(this.mod, o, d);
        return Ft(this.mod), p
      }

      insertArrowFromIPCStream(t, e, r) {
        if (e.length == 0) return;
        let n = this.mod._malloc(e.length);
        this.mod.HEAPU8.subarray(n, n + e.length).set(e);
        let d = r ? JSON.stringify(r) : "", [p, m, I] = mt(this.mod, "duckdb_web_insert_arrow_from_ipc_stream", ["number", "number", "number", "string"], [t, n, e.length, d]);
        if (p !== 0) throw new Error(tt(this.mod, m, I))
      }

      insertCSVFromPath(t, e, r) {
        if (r.columns !== void 0) {
          r.columnsFlat = [];
          for (let I in r.columns) r.columnsFlat.push(Zo(I, r.columns[I]))
        }
        let n = {...r};
        n.columns = n.columnsFlat, delete n.columnsFlat;
        let o = JSON.stringify(n), [d, p, m] = mt(this.mod, "duckdb_web_insert_csv_from_path", ["number", "string", "string"], [t, e, o]);
        if (d !== 0) throw new Error(tt(this.mod, p, m))
      }

      insertJSONFromPath(t, e, r) {
        if (r.columns !== void 0) {
          r.columnsFlat = [];
          for (let I in r.columns) r.columnsFlat.push(Zo(I, r.columns[I]))
        }
        let n = {...r};
        n.columns = n.columnsFlat, delete n.columnsFlat;
        let o = JSON.stringify(n), [d, p, m] = mt(this.mod, "duckdb_web_insert_json_from_path", ["number", "string", "string"], [t, e, o]);
        if (d !== 0) throw new Error(tt(this.mod, p, m))
      }

      globFiles(t) {
        let [e, r, n] = mt(this.mod, "duckdb_web_fs_glob_file_infos", ["string"], [t]);
        if (e !== 0) throw new Error(tt(this.mod, r, n));
        let o = tt(this.mod, r, n);
        Ft(this.mod);
        let d = JSON.parse(o);
        return d == null ? [] : d
      }

      registerFileURL(t, e, r, n = !1) {
        e === void 0 && (e = t);
        let [o, d, p] = mt(this.mod, "duckdb_web_fs_register_file_url", ["string", "string"], [t, e, r, n]);
        if (o !== 0) throw new Error(tt(this.mod, d, p));
        Ft(this.mod)
      }

      registerFileText(t, e) {
        let r = KI.encode(e);
        this.registerFileBuffer(t, r)
      }

      registerFileBuffer(t, e) {
        let r = this.mod._malloc(e.length);
        this.mod.HEAPU8.subarray(r, r + e.length).set(e);
        let [o, d, p] = mt(this.mod, "duckdb_web_fs_register_file_buffer", ["string", "number", "number"], [t, r, e.length]);
        if (o !== 0) throw new Error(tt(this.mod, d, p));
        Ft(this.mod)
      }

      registerFileHandle(t, e, r, n) {
        let [o, d, p] = mt(this.mod, "duckdb_web_fs_register_file_url", ["string", "string", "number", "boolean"], [t, t, r, n]);
        if (o !== 0) throw new Error(tt(this.mod, d, p));
        if (Ft(this.mod), globalThis.DUCKDB_RUNTIME._files = (globalThis.DUCKDB_RUNTIME._files || new Map).set(t, e), this.pthread) {
          for (let m of this.pthread.runningWorkers) m.postMessage({
            cmd: "registerFileHandle",
            fileName: t,
            fileHandle: e
          });
          for (let m of this.pthread.unusedWorkers) m.postMessage({cmd: "dropFileHandle", fileName: t})
        }
      }

      dropFile(t) {
        let [e, r, n] = mt(this.mod, "duckdb_web_fs_drop_file", ["string"], [t]);
        if (e !== 0) throw new Error(tt(this.mod, r, n));
        Ft(this.mod)
      }

      dropFiles() {
        let [t, e, r] = mt(this.mod, "duckdb_web_fs_drop_files", [], []);
        if (t !== 0) throw new Error(tt(this.mod, e, r));
        Ft(this.mod)
      }

      flushFiles() {
        this.mod.ccall("duckdb_web_flush_files", null, [], [])
      }

      copyFileToPath(t, e) {
        let [r, n, o] = mt(this.mod, "duckdb_web_copy_file_to_path", ["string", "string"], [t, e]);
        if (r !== 0) throw new Error(tt(this.mod, n, o));
        Ft(this.mod)
      }

      copyFileToBuffer(t) {
        let [e, r, n] = mt(this.mod, "duckdb_web_copy_file_to_buffer", ["string"], [t]);
        if (e !== 0) throw new Error(tt(this.mod, r, n));
        let o = this.mod.HEAPU8.subarray(r, r + n), d = new Uint8Array(o.length);
        return d.set(o), Ft(this.mod), d
      }

      collectFileStatistics(t, e) {
        let [r, n, o] = mt(this.mod, "duckdb_web_collect_file_stats", ["string", "boolean"], [t, e]);
        if (r !== 0) throw new Error(tt(this.mod, n, o))
      }

      exportFileStatistics(t) {
        let [e, r, n] = mt(this.mod, "duckdb_web_export_file_stats", ["string"], [t]);
        if (e !== 0) throw new Error(tt(this.mod, r, n));
        return new ra(this.mod.HEAPU8.subarray(r, r + n))
      }
    };
    var sa = class extends na {
      constructor(e, r, n, o) {
        super(e, r);
        this.mainModuleURL = n, this.pthreadWorkerURL = o
      }

      locateFile(e, r) {
        if (e.endsWith(".wasm")) return this.mainModuleURL;
        if (e.endsWith(".worker.js")) {
          if (!this.pthreadWorkerURL) throw new Error("Missing DuckDB worker URL!");
          return this.pthreadWorkerURL
        }
        throw new Error(`WASM instantiation requested unexpected file: prefix=${r} path=${e}`)
      }

      instantiateWasm(e, r) {
        globalThis.DUCKDB_RUNTIME = this._runtime;
        let n = this.onInstantiationProgress;
        if (WebAssembly.instantiateStreaming) if (typeof TransformStream == "function") {
          let d = (async () => {
            var ut;
            let p = new Request(this.mainModuleURL), m = await fetch(p), I = m.headers.get("content-length"),
                A = I && parseInt(I, 10) || 0, E = new Date,
                T = {startedAt: E, updatedAt: E, bytesTotal: A || 0, bytesLoaded: 0}, k = {
                  transform(wt, Ot) {
                    T.bytesLoaded += wt.byteLength;
                    let ce = new Date;
                    if (ce.getTime() - T.updatedAt.getTime() < 20) {
                      T.updatedAt = ce, Ot.enqueue(wt);
                      return
                    }
                    for (let _e of n) _e(T);
                    Ot.enqueue(wt)
                  }
                }, lt = new TransformStream(k);
            return new Response((ut = m.body) == null ? void 0 : ut.pipeThrough(lt), m)
          })();
          WebAssembly.instantiateStreaming(d, e).then(p => {
            r(p.instance, p.module)
          })
        } else {
          console.warn("instantiating without progress handler since transform streams are unavailable");
          let o = new Request(this.mainModuleURL);
          WebAssembly.instantiateStreaming(fetch(o), e).then(d => {
            r(d.instance, d.module)
          })
        } else if (typeof XMLHttpRequest == "function") {
          let o = new XMLHttpRequest, d = this.mainModuleURL, p = new Date,
              m = {startedAt: p, updatedAt: p, bytesTotal: 0, bytesLoaded: 0};
          o.open("GET", d), o.responseType = "arraybuffer", o.onerror = I => {
            throw this.logger.log({
              timestamp: new Date,
              level: 4,
              origin: 3,
              topic: 5,
              event: 2,
              value: "Failed to load WASM: " + I
            }), new Error(I.toString())
          }, o.onprogress = I => {
            m.bytesTotal = I.total, m.bytesLoaded = I.loaded;
            let A = new Date;
            if (A.getTime() - m.updatedAt.getTime() < 20) {
              m.updatedAt = A;
              return
            }
            for (let E of n) E(m)
          }, o.onload = () => {
            WebAssembly.instantiate(o.response, e).then(I => {
              r(I.instance, I.module)
            }).catch(I => {
              throw this.logger.log({
                timestamp: new Date,
                level: 4,
                origin: 3,
                topic: 5,
                event: 2,
                value: "Failed to instantiate WASM: " + I
              }), new Error(I)
            })
          }, o.send()
        } else console.warn("instantiating with manual fetch since streaming instantiation and xhrs are unavailable"), (async () => {
          let d = new Request(this.mainModuleURL), m = await (await fetch(d)).arrayBuffer();
          WebAssembly.instantiate(m, e).then(I => {
            r(I.instance, I.module)
          })
        })();
        return []
      }
    };
    var oa = class extends sa {
      constructor(t, e, r, n = null) {
        super(t, e, r, n)
      }

      instantiateImpl(t) {
        return ty({...t, instantiateWasm: this.instantiateWasm.bind(this), locateFile: this.locateFile.bind(this)})
      }
    };
    var pr = Wf(sy()), oy = function (i, t, e) {
      var r;
      if ((r = i == null ? void 0 : i.endpoint) != null && r.startsWith("http")) {
        let n = `${i == null ? void 0 : i.endpoint}`, o = n.indexOf("://") + 3;
        return n.substring(o)
      } else return i != null && i.endpoint ? `${e}.${i == null ? void 0 : i.endpoint}` : `${e}.s3.amazonaws.com`
    };

    function JI(i, t, e) {
      var o, d, p, m;
      let r = ay(t), n = r.path;
      return ly(i) && (n = `/${r.bucket}${n}`), {
        url: n,
        query: "",
        host: oy(i, t, r.bucket),
        region: (o = i == null ? void 0 : i.region) != null ? o : "",
        service: "s3",
        method: e,
        accessKeyId: (d = i == null ? void 0 : i.accessKeyId) != null ? d : "",
        secretAccessKey: (p = i == null ? void 0 : i.secretAccessKey) != null ? p : "",
        sessionToken: (m = i == null ? void 0 : i.sessionToken) != null ? m : "",
        dateNow: new Date().toISOString().replace(/-/g, "").split("T")[0],
        datetimeNow: new Date().toISOString().replace(/-/g, "").replace(/:/g, "").split(".")[0] + "Z"
      }
    }

    function qI(i, t = !1) {
      let e = "0123456789ABCDEF", r = "";
      for (let n = 0; n < i.length; n++) {
        let o = i[n];
        o >= "A" && o <= "Z" || o >= "a" && o <= "z" || o >= "0" && o <= "9" || o == "_" || o == "-" || o == "~" || o == "." ? r += o : o == "/" ? t ? r += "%2F" : r += o : (r += "%", r += e[o.charCodeAt(0) >> 4], r += e[o.charCodeAt(0) & 15])
      }
      return r
    }

    function ZI(i, t = null) {
      var lt;
      let e = (lt = t == null ? void 0 : t.contentHash) != null ? lt : "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
          r = new Map;
      r.set("x-amz-date", i.datetimeNow), r.set("x-amz-content-sha256", e), i.sessionToken && r.set("x-amz-security-token", i.sessionToken);
      let n = "";
      t != null && t.contentType && (n += "content-type;"), n += "host;x-amz-content-sha256;x-amz-date", i.sessionToken && (n += ";x-amz-security-token");
      let o = i.method + `
` + qI(i.url) + `
` + i.query;
      t != null && t.contentType && (o += `
content-type:` + (t == null ? void 0 : t.contentType)), o += `
host:` + i.host + `
x-amz-content-sha256:` + e + `
x-amz-date:` + i.datetimeNow, i.sessionToken && i.sessionToken.length > 0 && (o += `
x-amz-security-token:` + i.sessionToken), o += `

` + n + `
` + e;
      let d = (0, pr.sha256)(o), p = `AWS4-HMAC-SHA256
` + i.datetimeNow + `
` + i.dateNow + "/" + i.region + "/" + i.service + `/aws4_request
` + d, m = "AWS4" + i.secretAccessKey, I = pr.sha256.hmac.arrayBuffer(m, i.dateNow),
          A = pr.sha256.hmac.arrayBuffer(I, i.region), E = pr.sha256.hmac.arrayBuffer(A, i.service),
          T = pr.sha256.hmac.arrayBuffer(E, "aws4_request"), k = pr.sha256.hmac(T, p);
      return r.set("Authorization", "AWS4-HMAC-SHA256 Credential=" + i.accessKeyId + "/" + i.dateNow + "/" + i.region + "/" + i.service + "/aws4_request, SignedHeaders=" + n + ", Signature=" + k), r
    }

    var QI = function (i, t, e, r = null, n = null) {
      let o = JI(i, t, e), d = {contentType: r, contentHash: n ? pr.sha256.hex(n) : null};
      return ZI(o, d)
    };

    function Ti(i, t, e, r, n = null, o = null) {
      ((t == null ? void 0 : t.accessKeyId) || (t == null ? void 0 : t.sessionToken)) && (QI(t, e, r, n, o).forEach((p, m) => {
        i.setRequestHeader(m, p)
      }), n && i.setRequestHeader("content-type", n))
    }

    function ay(i) {
      if (i.indexOf("s3://") != 0) throw new Error("URL needs to start with s3://");
      let t = i.indexOf("/", 5);
      if (t == -1) throw new Error("URL needs to contain a '/' after the host");
      let e = i.substring(5, t);
      if (!e) throw new Error("URL needs to contain a bucket name");
      let r = i.substring(t);
      if (!r) throw new Error("URL needs to contain key");
      return {bucket: e, path: r}
    }

    function ly(i) {
      var t;
      return !!((t = i == null ? void 0 : i.endpoint) != null && t.startsWith("http"))
    }

    function Di(i, t) {
      let e = ay(t);
      return ly(i) ? `${i == null ? void 0 : i.endpoint}/${e.bucket}` + e.path : "https://" + oy(i, t, e.bucket) + e.path
    }

    var ht = {
      _files: new Map, _fileInfoCache: new Map, _udfFunctions: new Map, _globalFileInfo: null, getFileInfo(i, t) {
        try {
          let e = ht._fileInfoCache.get(t), [r, n, o] = mt(i, "duckdb_web_fs_get_file_info_by_id", ["number", "number"], [t, (e == null ? void 0 : e.cacheEpoch) || 0]);
          if (r !== 0) return null;
          if (o === 0) return e;
          let d = tt(i, n, o);
          Ft(i);
          let p = JSON.parse(d);
          if (p == null) return null;
          let m = {...p, blob: null};
          return ht._fileInfoCache.set(t, m), m
        } catch (e) {
          return null
        }
      }, getGlobalFileInfo(i) {
        var t;
        try {
          let [e, r, n] = mt(i, "duckdb_web_get_global_file_info", ["number"], [((t = ht._globalFileInfo) == null ? void 0 : t.cacheEpoch) || 0]);
          if (e !== 0) return null;
          if (n === 0) return ht._globalFileInfo;
          let o = tt(i, r, n);
          Ft(i);
          let d = JSON.parse(o);
          return d == null ? null : (ht._globalFileInfo = {...d, blob: null}, ht._globalFileInfo)
        } catch (e) {
          return null
        }
      }, testPlatformFeature: (i, t) => {
        switch (t) {
          case 1:
            return typeof BigInt64Array < "u";
          default:
            return console.warn(`test for unknown feature: ${t}`), !1
        }
      }, getDefaultDataProtocol(i) {
        return 2
      }, openFile: (i, t, e) => {
        var r;
        try {
          ht._fileInfoCache.delete(t);
          let n = ht.getFileInfo(i, t);
          switch (n == null ? void 0 : n.dataProtocol) {
            case 4:
            case 5: {
              if (e & 1 && e & 2) throw new Error(`Opening file ${n.fileName} failed: cannot open file with both read and write flags set`);
              if (e & 32) throw new Error(`Opening file ${n.fileName} failed: appending to HTTP/S3 files is not supported`);
              if (e & 2) {
                let p = new XMLHttpRequest;
                if (n.dataProtocol == 5 ? (p.open("HEAD", Di(n.s3Config, n.dataUrl), !1), Ti(p, n.s3Config, n.dataUrl, "HEAD")) : p.open("HEAD", n.dataUrl, !1), p.send(null), p.status != 200 && p.status != 404) throw new Error(`Opening file ${n.fileName} failed: Unexpected return status from server (${p.status})`);
                if (p.status == 404 && !(e & 8 || e & 16)) throw new Error(`Opening file ${n.fileName} failed: Cannot write to non-existent file without FILE_FLAGS_FILE_CREATE or FILE_FLAGS_FILE_CREATE_NEW flag.`);
                let m = i._malloc(1), I = new Uint8Array;
                i.HEAPU8.set(I, m);
                let A = i._malloc(2 * 8);
                return i.HEAPF64[(A >> 3) + 0] = 1, i.HEAPF64[(A >> 3) + 1] = m, A
              } else if (e != 1) throw new Error(`Opening file ${n.fileName} failed: unsupported file flags: ${e}`);
              let o = null, d = null;
              try {
                let p = new XMLHttpRequest;
                if (n.dataProtocol == 5 ? (p.open("HEAD", Di(n.s3Config, n.dataUrl), !1), Ti(p, n.s3Config, n.dataUrl, "HEAD")) : p.open("HEAD", n.dataUrl, !1), p.setRequestHeader("Range", "bytes=0-"), p.send(null), o = p.getResponseHeader("Content-Length"), o !== null && p.status == 206) {
                  let m = i._malloc(16);
                  return i.HEAPF64[(m >> 3) + 0] = +o, i.HEAPF64[(m >> 3) + 1] = 0, m
                }
              } catch (p) {
                d = p, console.warn(`HEAD request with range header failed: ${p}`)
              }
              if (n.allowFullHttpReads) {
                if (o !== null && +o > 1) {
                  let m = new XMLHttpRequest;
                  n.dataProtocol == 5 ? (m.open("GET", Di(n.s3Config, n.dataUrl), !1), Ti(m, n.s3Config, n.dataUrl, "GET")) : m.open("GET", n.dataUrl, !1), m.setRequestHeader("Range", "bytes=0-0"), m.send(null);
                  let I = m.getResponseHeader("Content-Length");
                  if (m.status == 206 && I !== null && +I == 1) {
                    let A = i._malloc(16);
                    return i.HEAPF64[(A >> 3) + 0] = +o, i.HEAPF64[(A >> 3) + 1] = 0, A
                  }
                  if (m.status == 200 && I !== null && +I == +o) {
                    console.warn(`fall back to full HTTP read for: ${n.dataUrl}`);
                    let A = i._malloc(m.response.byteLength), E = new Uint8Array(m.response, 0, m.response.byteLength);
                    i.HEAPU8.set(E, A);
                    let T = i._malloc(2 * 8);
                    return i.HEAPF64[(T >> 3) + 0] = m.response.byteLength, i.HEAPF64[(T >> 3) + 1] = A, T
                  }
                }
                console.warn(`falling back to full HTTP read for: ${n.dataUrl}`);
                let p = new XMLHttpRequest;
                if (n.dataProtocol == 5 ? (p.open("GET", Di(n.s3Config, n.dataUrl), !1), Ti(p, n.s3Config, n.dataUrl, "GET")) : p.open("GET", n.dataUrl, !1), p.responseType = "arraybuffer", p.send(null), p.status == 200) {
                  let m = i._malloc(p.response.byteLength), I = new Uint8Array(p.response, 0, p.response.byteLength);
                  i.HEAPU8.set(I, m);
                  let A = i._malloc(2 * 8);
                  return i.HEAPF64[(A >> 3) + 0] = p.response.byteLength, i.HEAPF64[(A >> 3) + 1] = m, A
                }
              }
              if (d != null) throw new Error(`Reading file ${n.fileName} failed with error: ${d}`);
              return 0
            }
            case 2: {
              let o = (r = ht._files) == null ? void 0 : r.get(n.fileName);
              if (o) {
                let m = i._malloc(16);
                return i.HEAPF64[(m >> 3) + 0] = o.size, i.HEAPF64[(m >> 3) + 1] = 0, m
              }
              console.warn(`Buffering missing file: ${n.fileName}`);
              let d = i._malloc(2 * 8), p = i._malloc(1);
              return i.HEAPF64[(d >> 3) + 0] = 1, i.HEAPF64[(d >> 3) + 1] = p, d
            }
          }
        } catch (n) {
          console.error(n.toString()), fi(i, n.toString())
        }
        return 0
      }, glob: (i, t, e) => {
        var r;
        try {
          let n = tt(i, t, e);
          if (n.startsWith("http") || n.startsWith("s3://")) {
            let o = new XMLHttpRequest;
            if (n.startsWith("s3://")) {
              let d = ht.getGlobalFileInfo(i);
              o.open("HEAD", Di(d == null ? void 0 : d.s3Config, n), !1), Ti(o, d == null ? void 0 : d.s3Config, n, "HEAD")
            } else o.open("HEAD", n, !1);
            if (o.send(null), o.status != 200 && o.status !== 206) {
              if (!((r = ht.getGlobalFileInfo(i)) != null && r.allowFullHttpReads)) {
                fi(i, `HEAD request failed: ${n}, with full http reads are disabled`);
                return
              }
              let d = new XMLHttpRequest;
              if (n.startsWith("s3://")) {
                let m = ht.getGlobalFileInfo(i);
                d.open("GET", Di(m == null ? void 0 : m.s3Config, n), !1), Ti(d, m == null ? void 0 : m.s3Config, n, "HEAD")
              } else d.open("GET", n, !1);
              if (d.setRequestHeader("Range", "bytes=0-0"), d.send(null), d.status != 200 && d.status !== 206) {
                fi(i, `HEAD and GET requests failed: ${n}`);
                return
              }
              let p = d.getResponseHeader("Content-Length");
              p && +p > 1 && console.warn(`Range request for ${n} did not return a partial response: ${d.status} "${d.statusText}"`)
            }
            i.ccall("duckdb_web_fs_glob_add_path", null, ["string"], [n])
          }
        } catch (n) {
          return fi(i, n.toString()), 0
        }
      }, checkFile: (i, t, e) => {
        try {
          let r = tt(i, t, e);
          if (r.startsWith("http") || r.startsWith("s3://")) {
            let n = new XMLHttpRequest;
            if (r.startsWith("s3://")) {
              let o = ht.getGlobalFileInfo(i);
              n.open("HEAD", Di(o == null ? void 0 : o.s3Config, r), !1), Ti(n, o == null ? void 0 : o.s3Config, r, "HEAD")
            } else n.open("HEAD", r, !1);
            return n.send(null), n.status == 206 || n.status == 200
          }
        } catch (r) {
          return !1
        }
        return !1
      }, syncFile: (i, t) => {
      }, closeFile: (i, t) => {
        var r;
        let e = ht.getFileInfo(i, t);
        switch (ht._fileInfoCache.delete(t), e == null ? void 0 : e.dataProtocol) {
          case 0:
          case 4:
          case 5:
            break;
          case 1:
          case 2:
            return;
          case 3: {
            let n = (r = ht._files) == null ? void 0 : r.get(e.fileName);
            if (!n) throw new Error(`No OPFS access handle registered with name: ${e.fileName}`);
            return n.flush()
          }
        }
      }, truncateFile: (i, t, e) => {
        var n;
        let r = ht.getFileInfo(i, t);
        switch (r == null ? void 0 : r.dataProtocol) {
          case 4:
            fi(i, "Cannot truncate a http file");
            return;
          case 5:
            fi(i, "Cannot truncate an s3 file");
            return;
          case 0:
          case 1:
          case 2:
            fi(i, "truncateFile not implemented");
            return;
          case 3: {
            let o = (n = ht._files) == null ? void 0 : n.get(r.fileName);
            if (!o) throw new Error(`No OPFS access handle registered with name: ${r.fileName}`);
            return o.truncate(e)
          }
        }
        return 0
      }, readFile(i, t, e, r, n) {
        var o, d;
        if (r == 0) return 0;
        try {
          let p = ht.getFileInfo(i, t);
          switch (p == null ? void 0 : p.dataProtocol) {
            case 4:
            case 5: {
              if (!p.dataUrl) throw new Error(`Missing data URL for file ${t}`);
              try {
                let m = new XMLHttpRequest;
                if (p.dataProtocol == 5 ? (m.open("GET", Di(p == null ? void 0 : p.s3Config, p.dataUrl), !1), Ti(m, p == null ? void 0 : p.s3Config, p.dataUrl, "GET")) : m.open("GET", p.dataUrl, !1), m.responseType = "arraybuffer", m.setRequestHeader("Range", `bytes=${n}-${n + r - 1}`), m.send(null), m.status == 206 || m.status == 200 && r == m.response.byteLength && n == 0) {
                  let I = new Uint8Array(m.response, 0, Math.min(m.response.byteLength, r));
                  return i.HEAPU8.set(I, e), I.byteLength
                } else if (m.status == 200) {
                  console.warn(`Range request for ${p.dataUrl} did not return a partial response: ${m.status} "${m.statusText}"`);
                  let I = new Uint8Array(m.response, n, Math.min(m.response.byteLength - n, r));
                  return i.HEAPU8.set(I, e), I.byteLength
                } else throw new Error(`Range request for ${p.dataUrl} did returned non-success status: ${m.status} "${m.statusText}"`)
              } catch (m) {
                throw new Error(`Range request for ${p.dataUrl} failed with error: ${m}"`)
              }
            }
            case 2: {
              let m = (o = ht._files) == null ? void 0 : o.get(p.fileName);
              if (!m) throw new Error(`No HTML5 file registered with name: ${p.fileName}`);
              let I = m.slice(n, n + r), A = new Uint8Array(new FileReaderSync().readAsArrayBuffer(I));
              return i.HEAPU8.set(A, e), A.byteLength
            }
            case 3: {
              let m = (d = ht._files) == null ? void 0 : d.get(p.fileName);
              if (!m) throw new Error(`No OPFS access handle registered with name: ${p.fileName}`);
              let I = i.HEAPU8.subarray(e, e + r);
              return m.read(I, {at: n})
            }
          }
          return 0
        } catch (p) {
          return fi(i, p.toString()), 0
        }
      }, writeFile: (i, t, e, r, n) => {
        var d;
        let o = ht.getFileInfo(i, t);
        switch (o == null ? void 0 : o.dataProtocol) {
          case 4:
            return fi(i, "Cannot write to HTTP file"), 0;
          case 5: {
            let p = i.HEAPU8.subarray(e, e + r), m = new XMLHttpRequest;
            return m.open("PUT", Di(o == null ? void 0 : o.s3Config, o.dataUrl), !1), Ti(m, o == null ? void 0 : o.s3Config, o.dataUrl, "PUT", "", p), m.send(p), r
          }
          case 2:
            return fi(i, "cannot write using the html5 file reader api"), 0;
          case 3: {
            let p = (d = ht._files) == null ? void 0 : d.get(o.fileName);
            if (!p) throw new Error(`No OPFS access handle registered with name: ${o.fileName}`);
            let m = i.HEAPU8.subarray(e, e + r);
            return p.write(m, {at: n})
          }
        }
        return 0
      }, getLastFileModificationTime: (i, t) => {
        var r;
        let e = ht.getFileInfo(i, t);
        switch (e == null ? void 0 : e.dataProtocol) {
          case 2: {
            if (!((r = ht._files) == null ? void 0 : r.get(e.fileName))) throw Error(`No handle available for file: ${e.fileName}`);
            return 0
          }
          case 4:
          case 5:
            return new Date().getTime()
        }
        return 0
      }, checkDirectory: (i, t, e) => {
        let r = tt(i, t, e);
        return console.log(`checkDirectory: ${r}`), !1
      }, createDirectory: (i, t, e) => {
        let r = tt(i, t, e);
        console.log(`createDirectory: ${r}`)
      }, removeDirectory: (i, t, e) => {
        let r = tt(i, t, e);
        console.log(`removeDirectory: ${r}`)
      }, listDirectoryEntries: (i, t, e) => {
        let r = tt(i, t, e);
        return console.log(`listDirectoryEntries: ${r}`), !1
      }, moveFile: (i, t, e, r, n) => {
        var m, I;
        let o = tt(i, t, e), d = tt(i, r, n), p = (m = ht._files) == null ? void 0 : m.get(o);
        p !== void 0 && (ht._files.delete(p), ht._files.set(d, p));
        for (let [A, E] of ((I = ht._fileInfoCache) == null ? void 0 : I.entries()) || []) if (E.dataUrl == o) {
          ht._fileInfoCache.delete(A);
          break
        }
        return !0
      }, removeFile: (i, t, e) => {
      }, callScalarUDF: (i, t, e, r, n, o, d) => {
        ny(ht, i, t, e, r, n, o, d)
      }
    };
    var bl = class extends Qo {
      postMessage(t, e) {
        globalThis.postMessage(t, e)
      }

      async instantiate(t, e, r) {
        return await new oa(this, ht, t, e).instantiate(r)
      }
    };

    function cy() {
      let i = new bl;
      globalThis.onmessage = async t => {
        await i.onMessage(t.data)
      }
    }

    cy();
    return lj(t1);
  })();
  /**
   * [js-sha256]{@link https://github.com/emn178/js-sha256}
   *
   * @version 0.9.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2017
   * @license MIT
   */
//# sourceMappingURL=duckdb-browser-mvp.worker.js.map

}
export default {
  mvp_worker,
}
