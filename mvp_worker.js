function  mvp_worker() {
  var duckdb = (() => {
    var Lw = Object.create;
    var fs = Object.defineProperty;
    var Pw = Object.getOwnPropertyDescriptor;
    var Vw = Object.getOwnPropertyNames;
    var Hw = Object.getPrototypeOf, zw = Object.prototype.hasOwnProperty;
    var na = (i, t) => {
      if (t = Symbol[i]) return t;
      throw Error("Symbol." + i + " is not defined")
    };
    var Ww = (i => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(i, {get: (t, e) => (typeof require < "u" ? require : t)[e]}) : i)(function (i) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw Error('Dynamic require of "' + i + '" is not supported')
    });
    var hs = (i, t) => () => (t || i((t = {exports: {}}).exports, t), t.exports), Zi = (i, t) => {
      for (var e in t) fs(i, e, {get: t[e], enumerable: !0})
    }, Hf = (i, t, e, r) => {
      if (t && typeof t == "object" || typeof t == "function") for (let c of Vw(t)) !zw.call(i, c) && c !== e && fs(i, c, {
        get: () => t[c],
        enumerable: !(r = Pw(t, c)) || r.enumerable
      });
      return i
    };
    var zf = (i, t, e) => (e = i != null ? Lw(Hw(i)) : {}, Hf(t || !i || !i.__esModule ? fs(e, "default", {
      value: i,
      enumerable: !0
    }) : e, i)), $w = i => Hf(fs({}, "__esModule", {value: !0}), i);
    var Yw = function (i, t) {
      this[0] = i, this[1] = t
    };
    var Qi = i => {
      var t = i[na("asyncIterator")], e = !1, r, c = {};
      return t == null ? (t = i[na("iterator")](), r = h => c[h] = y => t[h](y)) : (t = t.call(i), r = h => c[h] = y => {
        if (e) {
          if (e = !1, h === "throw") throw y;
          return y
        }
        return e = !0, {
          done: !1, value: new Yw(new Promise(m => {
            var v = t[h](y);
            if (!(v instanceof Object)) throw TypeError("Object expected");
            m(v)
          }), 1)
        }
      }), c[na("iterator")] = () => c, r("next"), "throw" in t ? r("throw") : c.throw = h => {
        throw h
      }, "return" in t && r("return"), c
    };
    var xp = hs(() => {
    });
    var Tp = hs(() => {
    });
    var kp = hs((Ep, rl) => {
      "use strict";
      var Dp = (() => {
        var i = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
        return typeof __filename < "u" && (i = i || __filename), function (t = {}) {
          var e = t, r, c;
          e.ready = new Promise((n, s) => {
            r = n, c = s
          });
          var h = Object.assign({}, e), y = [], m = "./this.program", v = (n, s) => {
                throw s
              }, C = typeof window == "object", A = typeof importScripts == "function",
              E = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string",
              k = "";

          function M(n) {
            return e.locateFile ? e.locateFile(n, k) : k + n
          }

          var dt, Tt, Ot;
          if (E) {
            var Mt = xp(), Kt = Tp();
            A ? k = Kt.dirname(k) + "/" : k = __dirname + "/", dt = (n, s) => (n = pl(n) ? new URL(n) : Kt.normalize(n), Mt.readFileSync(n, s ? void 0 : "utf8")), Ot = n => {
              var s = dt(n, !0);
              return s.buffer || (s = new Uint8Array(s)), s
            }, Tt = (n, s, o, a = !0) => {
              n = pl(n) ? new URL(n) : Kt.normalize(n), Mt.readFile(n, a ? void 0 : "utf8", (l, u) => {
                l ? o(l) : s(a ? u.buffer : u)
              })
            }, !e.thisProgram && process.argv.length > 1 && (m = process.argv[1].replace(/\\/g, "/")), y = process.argv.slice(2), v = (n, s) => {
              throw process.exitCode = n, s
            }, e.inspect = () => "[Emscripten Module object]"
          } else (C || A) && (A ? k = self.location.href : typeof document < "u" && document.currentScript && (k = document.currentScript.src), i && (k = i), k.indexOf("blob:") !== 0 ? k = k.substr(0, k.replace(/[?#].*/, "").lastIndexOf("/") + 1) : k = "", dt = n => {
            var s = new XMLHttpRequest;
            return s.open("GET", n, !1), s.send(null), s.responseText
          }, A && (Ot = n => {
            var s = new XMLHttpRequest;
            return s.open("GET", n, !1), s.responseType = "arraybuffer", s.send(null), new Uint8Array(s.response)
          }), Tt = (n, s, o) => {
            var a = new XMLHttpRequest;
            a.open("GET", n, !0), a.responseType = "arraybuffer", a.onload = () => {
              if (a.status == 200 || a.status == 0 && a.response) {
                s(a.response);
                return
              }
              o()
            }, a.onerror = o, a.send(null)
          });
          var me = e.print || console.log.bind(console), We = e.printErr || console.error.bind(console);
          Object.assign(e, h), h = null, e.arguments && (y = e.arguments), e.thisProgram && (m = e.thisProgram), e.quit && (v = e.quit);
          var oi;
          e.wasmBinary && (oi = e.wasmBinary), typeof WebAssembly != "object" && xi("no native wasm support detected");
          var mr, br = !1, Ai;

          function ut(n, s) {
            n || xi(s)
          }

          var Ft, Dt, Ut, Ht, O, W, le, vr;

          function cl() {
            var n = mr.buffer;
            e.HEAP8 = Ft = new Int8Array(n), e.HEAP16 = Ut = new Int16Array(n), e.HEAPU8 = Dt = new Uint8Array(n), e.HEAPU16 = Ht = new Uint16Array(n), e.HEAP32 = O = new Int32Array(n), e.HEAPU32 = W = new Uint32Array(n), e.HEAPF32 = le = new Float32Array(n), e.HEAPF64 = vr = new Float64Array(n)
          }

          var ul = [], dl = [], Wp = [], fl = [], $p = !1;

          function Yp() {
            if (e.preRun) for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length;) Jp(e.preRun.shift());
            Qn(ul)
          }

          function Xp() {
            $p = !0, Qn(dl)
          }

          function Gp() {
            Qn(Wp)
          }

          function Kp() {
            if (e.postRun) for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length;) Zp(e.postRun.shift());
            Qn(fl)
          }

          function Jp(n) {
            ul.unshift(n)
          }

          function qp(n) {
            dl.unshift(n)
          }

          function Zp(n) {
            fl.unshift(n)
          }

          var qi = 0, Go = null, qr = null;

          function Qp(n) {
            qi++, e.monitorRunDependencies && e.monitorRunDependencies(qi)
          }

          function t_(n) {
            if (qi--, e.monitorRunDependencies && e.monitorRunDependencies(qi), qi == 0 && (Go !== null && (clearInterval(Go), Go = null), qr)) {
              var s = qr;
              qr = null, s()
            }
          }

          function xi(n) {
            e.onAbort && e.onAbort(n), n = "Aborted(" + n + ")", We(n), br = !0, Ai = 1, n += ". Build with -sASSERTIONS for more info.";
            var s = new WebAssembly.RuntimeError(n);
            throw c(s), s
          }

          var e_ = "data:application/octet-stream;base64,", hl = n => n.startsWith(e_),
              pl = n => n.startsWith("file://"), gr;
          gr = "./duckdb-mvp.wasm", hl(gr) || (gr = M(gr));

          function _l(n) {
            if (n == gr && oi) return new Uint8Array(oi);
            if (Ot) return Ot(n);
            throw"both async and sync fetching of the wasm failed"
          }

          function i_(n) {
            return !oi && (C || A) && typeof fetch == "function" ? fetch(n, {credentials: "same-origin"}).then(s => {
              if (!s.ok) throw"failed to load wasm binary file at '" + n + "'";
              return s.arrayBuffer()
            }).catch(() => _l(n)) : Promise.resolve().then(() => _l(n))
          }

          function yl(n, s, o) {
            return i_(n).then(a => WebAssembly.instantiate(a, s)).then(a => a).then(o, a => {
              We("failed to asynchronously prepare wasm: ".concat(a)), xi(a)
            })
          }

          function r_(n, s, o, a) {
            return !n && typeof WebAssembly.instantiateStreaming == "function" && !hl(s) && !E && typeof fetch == "function" ? fetch(s, {credentials: "same-origin"}).then(l => {
              var u = WebAssembly.instantiateStreaming(l, o);
              return u.then(a, function (d) {
                return We("wasm streaming compile failed: ".concat(d)), We("falling back to ArrayBuffer instantiation"), yl(s, o, a)
              })
            }) : yl(s, o, a)
          }

          function n_() {
            var n = {a: Hy};

            function s(a, l) {
              return w = a.exports, w = Ew(w), mr = w.uf, cl(), kl = w.xf, qp(w.vf), t_("wasm-instantiate"), w
            }

            Qp("wasm-instantiate");

            function o(a) {
              s(a.instance)
            }

            if (e.instantiateWasm) try {
              return e.instantiateWasm(n, s)
            } catch (a) {
              We("Module.instantiateWasm callback failed with error: ".concat(a)), c(a)
            }
            return r_(oi, gr, n, o).catch(c), {}
          }

          var be, wr;

          function ml(n) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(".concat(n, ")"), this.status = n
          }

          var Qn = n => {
                for (; n.length > 0;) n.shift()(e)
              }, s_ = e.noExitRuntime || !0, ts = [], es = 0,
              is = (n, s) => s + 2097152 >>> 0 < 4194305 - !!n ? (n >>> 0) + s * 4294967296 : NaN;

          function o_(n) {
            n >>>= 0;
            var s = new Ko(n);
            return s.get_caught() || (s.set_caught(!0), es--), s.set_rethrown(!1), ts.push(s), Rl(s.excPtr), s.get_exception_ptr()
          }

          var ai = 0, a_ = () => {
            I(0, 0);
            var n = ts.pop();
            Ml(n.excPtr), ai = 0
          };

          function Ko(n) {
            this.excPtr = n, this.ptr = n - 24, this.set_type = function (s) {
              W[this.ptr + 4 >>> 2 >>> 0] = s
            }, this.get_type = function () {
              return W[this.ptr + 4 >>> 2 >>> 0]
            }, this.set_destructor = function (s) {
              W[this.ptr + 8 >>> 2 >>> 0] = s
            }, this.get_destructor = function () {
              return W[this.ptr + 8 >>> 2 >>> 0]
            }, this.set_caught = function (s) {
              s = s ? 1 : 0, Ft[this.ptr + 12 >>> 0 >>> 0] = s
            }, this.get_caught = function () {
              return Ft[this.ptr + 12 >>> 0 >>> 0] != 0
            }, this.set_rethrown = function (s) {
              s = s ? 1 : 0, Ft[this.ptr + 13 >>> 0 >>> 0] = s
            }, this.get_rethrown = function () {
              return Ft[this.ptr + 13 >>> 0 >>> 0] != 0
            }, this.init = function (s, o) {
              this.set_adjusted_ptr(0), this.set_type(s), this.set_destructor(o)
            }, this.set_adjusted_ptr = function (s) {
              W[this.ptr + 16 >>> 2 >>> 0] = s
            }, this.get_adjusted_ptr = function () {
              return W[this.ptr + 16 >>> 2 >>> 0]
            }, this.get_exception_ptr = function () {
              var s = Nl(this.get_type());
              if (s) return W[this.excPtr >>> 2 >>> 0];
              var o = this.get_adjusted_ptr();
              return o !== 0 ? o : this.excPtr
            }
          }

          function l_(n) {
            throw n >>>= 0, ai || (ai = n), ai
          }

          var jr = n => {
            var s = ai;
            if (!s) return tn(0), 0;
            var o = new Ko(s);
            o.set_adjusted_ptr(s);
            var a = o.get_type();
            if (!a) return tn(0), s;
            for (var l in n) {
              var u = n[l];
              if (u === 0 || u === a) break;
              var d = o.ptr + 16;
              if (Ul(u, a, d)) return tn(u), s
            }
            return tn(a), s
          };

          function c_() {
            return jr([])
          }

          function u_(n) {
            return n >>>= 0, jr([n])
          }

          function d_(n, s) {
            return n >>>= 0, s >>>= 0, jr([n, s])
          }

          function f_(n, s, o) {
            return n >>>= 0, s >>>= 0, o >>>= 0, jr([n, s, o])
          }

          function h_(n, s, o, a) {
            return n >>>= 0, s >>>= 0, o >>>= 0, a >>>= 0, jr([n, s, o, a])
          }

          function p_(n, s, o, a, l) {
            return n >>>= 0, s >>>= 0, o >>>= 0, a >>>= 0, l >>>= 0, jr([n, s, o, a, l])
          }

          var __ = () => {
            var n = ts.pop();
            n || xi("no exception to throw");
            var s = n.excPtr;
            throw n.get_rethrown() || (ts.push(n), n.set_rethrown(!0), n.set_caught(!1), es++), ai = s, ai
          };

          function y_(n, s, o) {
            n >>>= 0, s >>>= 0, o >>>= 0;
            var a = new Ko(n);
            throw a.init(s, o), ai = n, es++, ai
          }

          var m_ = () => es, bl = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, vl = (n, s, o) => {
            s >>>= 0;
            for (var a = s + o, l = s; n[l] && !(l >= a);) ++l;
            if (l - s > 16 && n.buffer && bl) return bl.decode(n.subarray(s, l));
            for (var u = ""; s < l;) {
              var d = n[s++];
              if (!(d & 128)) {
                u += String.fromCharCode(d);
                continue
              }
              var f = n[s++] & 63;
              if ((d & 224) == 192) {
                u += String.fromCharCode((d & 31) << 6 | f);
                continue
              }
              var p = n[s++] & 63;
              if ((d & 240) == 224 ? d = (d & 15) << 12 | f << 6 | p : d = (d & 7) << 18 | f << 12 | p << 6 | n[s++] & 63, d < 65536) u += String.fromCharCode(d); else {
                var _ = d - 65536;
                u += String.fromCharCode(55296 | _ >> 10, 56320 | _ & 1023)
              }
            }
            return u
          }, Sr = (n, s) => (n >>>= 0, n ? vl(Dt, n, s) : ""), Ti = {
            varargs: void 0, get() {
              var n = O[+Ti.varargs >>> 2 >>> 0];
              return Ti.varargs += 4, n
            }, getp() {
              return Ti.get()
            }, getStr(n) {
              var s = Sr(n);
              return s
            }
          };

          function b_(n, s, o, a, l) {
            s >>>= 0, o >>>= 0, a >>>= 0, l >>>= 0;
            for (var u = 0, d = s ? O[s >>> 2 >>> 0] : 0, f = s ? O[s + 4 >>> 2 >>> 0] : 0, p = o ? O[o >>> 2 >>> 0] : 0, _ = o ? O[o + 4 >>> 2 >>> 0] : 0, b = a ? O[a >>> 2 >>> 0] : 0, g = a ? O[a + 4 >>> 2 >>> 0] : 0, F = 0, x = 0, D = 0, L = 0, z = 0, nt = 0, T = (s ? O[s >>> 2 >>> 0] : 0) | (o ? O[o >>> 2 >>> 0] : 0) | (a ? O[a >>> 2 >>> 0] : 0), U = (s ? O[s + 4 >>> 2 >>> 0] : 0) | (o ? O[o + 4 >>> 2 >>> 0] : 0) | (a ? O[a + 4 >>> 2 >>> 0] : 0), pt = function (Mw, Uw, Nw, Vf) {
              return Mw < 32 ? Uw & Vf : Nw & Vf
            }, mt = 0; mt < n; mt++) {
              var Jt = 1 << mt % 32;
              if (pt(mt, T, U, Jt)) {
                var en = Ti.getStreamFromFD(mt), ds = Ti.DEFAULT_POLLMASK;
                if (en.stream_ops.poll) {
                  var Pf = -1;
                  if (l) {
                    var Ow = s ? O[l >>> 2 >>> 0] : 0, Rw = s ? O[l + 8 >>> 2 >>> 0] : 0;
                    Pf = (Ow + Rw / 1e6) * 1e3
                  }
                  ds = en.stream_ops.poll(en, Pf)
                }
                ds & 1 && pt(mt, d, f, Jt) && (mt < 32 ? F = F | Jt : x = x | Jt, u++), ds & 4 && pt(mt, p, _, Jt) && (mt < 32 ? D = D | Jt : L = L | Jt, u++), ds & 2 && pt(mt, b, g, Jt) && (mt < 32 ? z = z | Jt : nt = nt | Jt, u++)
              }
            }
            return s && (O[s >>> 2 >>> 0] = F, O[s + 4 >>> 2 >>> 0] = x), o && (O[o >>> 2 >>> 0] = D, O[o + 4 >>> 2 >>> 0] = L), a && (O[a >>> 2 >>> 0] = z, O[a + 4 >>> 2 >>> 0] = nt), u
          }

          function gl() {
            xi("missing function: $SOCKFS")
          }

          gl.stub = !0;

          function Jo() {
            xi("missing function: $FS")
          }

          Jo.stub = !0;
          var Zr = n => {
            var s = gl.getSocket(n);
            if (!s) throw new Jo.ErrnoError(8);
            return s
          }, qo = n => (n & 255) + "." + (n >> 8 & 255) + "." + (n >> 16 & 255) + "." + (n >> 24 & 255), wl = n => {
            var s = "", o = 0, a = 0, l = 0, u = 0, d = 0, f = 0,
                p = [n[0] & 65535, n[0] >> 16, n[1] & 65535, n[1] >> 16, n[2] & 65535, n[2] >> 16, n[3] & 65535, n[3] >> 16],
                _ = !0, b = "";
            for (f = 0; f < 5; f++) if (p[f] !== 0) {
              _ = !1;
              break
            }
            if (_) {
              if (b = qo(p[6] | p[7] << 16), p[5] === -1) return s = "::ffff:", s += b, s;
              if (p[5] === 0) return s = "::", b === "0.0.0.0" && (b = ""), b === "0.0.0.1" && (b = "1"), s += b, s
            }
            for (o = 0; o < 8; o++) p[o] === 0 && (o - l > 1 && (d = 0), l = o, d++), d > a && (a = d, u = o - a + 1);
            for (o = 0; o < 8; o++) {
              if (a > 1 && p[o] === 0 && o >= u && o < u + a) {
                o === u && (s += ":", u === 0 && (s += ":"));
                continue
              }
              s += Number(ia(p[o] & 65535)).toString(16), s += o < 7 ? ":" : ""
            }
            return s
          }, jl = (n, s) => {
            var o = Ut[n >>> 1 >>> 0], a = ia(Ht[n + 2 >>> 1 >>> 0]), l;
            switch (o) {
              case 2:
                if (s !== 16) return {errno: 28};
                l = O[n + 4 >>> 2 >>> 0], l = qo(l);
                break;
              case 10:
                if (s !== 28) return {errno: 28};
                l = [O[n + 8 >>> 2 >>> 0], O[n + 12 >>> 2 >>> 0], O[n + 16 >>> 2 >>> 0], O[n + 20 >>> 2 >>> 0]], l = wl(l);
                break;
              default:
                return {errno: 5}
            }
            return {family: o, addr: l, port: a}
          }, rs = n => {
            for (var s = n.split("."), o = 0; o < 4; o++) {
              var a = Number(s[o]);
              if (isNaN(a)) return null;
              s[o] = a
            }
            return (s[0] | s[1] << 8 | s[2] << 16 | s[3] << 24) >>> 0
          }, ns = n => parseInt(n), Zo = n => {
            var s, o, a, l,
                u = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
                d = [];
            if (!u.test(n)) return null;
            if (n === "::") return [0, 0, 0, 0, 0, 0, 0, 0];
            for (n.startsWith("::") ? n = n.replace("::", "Z:") : n = n.replace("::", ":Z:"), n.indexOf(".") > 0 ? (n = n.replace(new RegExp("[.]", "g"), ":"), s = n.split(":"), s[s.length - 4] = ns(s[s.length - 4]) + ns(s[s.length - 3]) * 256, s[s.length - 3] = ns(s[s.length - 2]) + ns(s[s.length - 1]) * 256, s = s.slice(0, s.length - 2)) : s = n.split(":"), a = 0, l = 0, o = 0; o < s.length; o++) if (typeof s[o] == "string") if (s[o] === "Z") {
              for (l = 0; l < 8 - s.length + 1; l++) d[o + l] = 0;
              a = l - 1
            } else d[o + a] = ls(parseInt(s[o], 16)); else d[o + a] = s[o];
            return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]]
          }, ve = {
            address_map: {id: 1, addrs: {}, names: {}}, lookup_name(n) {
              var s = rs(n);
              if (s !== null || (s = Zo(n), s !== null)) return n;
              var o;
              if (ve.address_map.addrs[n]) o = ve.address_map.addrs[n]; else {
                var a = ve.address_map.id++;
                ut(a < 65535, "exceeded max address mappings of 65535"), o = "172.29." + (a & 255) + "." + (a & 65280), ve.address_map.names[o] = n, ve.address_map.addrs[n] = o
              }
              return o
            }, lookup_addr(n) {
              return ve.address_map.names[n] ? ve.address_map.names[n] : null
            }
          }, Sl = (n, s, o) => {
            if (o && n === 0) return null;
            var a = jl(n, s);
            if (a.errno) throw new Jo.ErrnoError(a.errno);
            return a.addr = ve.lookup_addr(a.addr) || a.addr, a
          };

          function v_(n, s, o, a, l, u) {
            s >>>= 0, o >>>= 0;
            var d = Zr(n), f = Sl(s, o);
            return d.sock_ops.bind(d, f.addr, f.port), 0
          }

          function g_(n, s, o, a, l, u) {
            s >>>= 0, o >>>= 0;
            var d = Zr(n), f = Sl(s, o);
            return d.sock_ops.connect(d, f.addr, f.port), 0
          }

          function w_(n, s, o, a) {
            s >>>= 0
          }

          function j_(n, s, o) {
            return o >>>= 0, Ti.varargs = o, 0
          }

          function S_(n, s) {
            s >>>= 0
          }

          function I_(n, s, o) {
            var a = is(s, o)
          }

          var Il = (n, s, o, a) => {
            if (o >>>= 0, !(a > 0)) return 0;
            for (var l = o, u = o + a - 1, d = 0; d < n.length; ++d) {
              var f = n.charCodeAt(d);
              if (f >= 55296 && f <= 57343) {
                var p = n.charCodeAt(++d);
                f = 65536 + ((f & 1023) << 10) | p & 1023
              }
              if (f <= 127) {
                if (o >= u) break;
                s[o++ >>> 0] = f
              } else if (f <= 2047) {
                if (o + 1 >= u) break;
                s[o++ >>> 0] = 192 | f >> 6, s[o++ >>> 0] = 128 | f & 63
              } else if (f <= 65535) {
                if (o + 2 >= u) break;
                s[o++ >>> 0] = 224 | f >> 12, s[o++ >>> 0] = 128 | f >> 6 & 63, s[o++ >>> 0] = 128 | f & 63
              } else {
                if (o + 3 >= u) break;
                s[o++ >>> 0] = 240 | f >> 18, s[o++ >>> 0] = 128 | f >> 12 & 63, s[o++ >>> 0] = 128 | f >> 6 & 63, s[o++ >>> 0] = 128 | f & 63
              }
            }
            return s[o >>> 0] = 0, o - l
          }, Qo = (n, s, o) => Il(n, Dt, s, o);

          function C_(n, s, o) {
            s >>>= 0, o >>>= 0
          }

          var Cl = (n, s) => (Dt.fill(0, n, n + s), n), ta = (n, s, o, a, l) => {
            switch (s) {
              case 2:
                o = rs(o), Cl(n, 16), l && (O[l >>> 2 >>> 0] = 16), Ut[n >>> 1 >>> 0] = s, O[n + 4 >>> 2 >>> 0] = o, Ut[n + 2 >>> 1 >>> 0] = ls(a);
                break;
              case 10:
                o = Zo(o), Cl(n, 28), l && (O[l >>> 2 >>> 0] = 28), O[n >>> 2 >>> 0] = s, O[n + 8 >>> 2 >>> 0] = o[0], O[n + 12 >>> 2 >>> 0] = o[1], O[n + 16 >>> 2 >>> 0] = o[2], O[n + 20 >>> 2 >>> 0] = o[3], Ut[n + 2 >>> 1 >>> 0] = ls(a);
                break;
              default:
                return 5
            }
            return 0
          };

          function F_(n, s, o, a, l, u) {
            s >>>= 0, o >>>= 0;
            var d = Zr(n);
            if (!d.daddr) return -53;
            var f = ta(s, d.family, ve.lookup_name(d.daddr), d.dport, o);
            return 0
          }

          function B_(n, s, o, a, l, u) {
            a >>>= 0, l >>>= 0;
            var d = Zr(n);
            return s === 1 && o === 4 ? (O[a >>> 2 >>> 0] = d.error, O[l >>> 2 >>> 0] = 4, d.error = null, 0) : -50
          }

          function A_(n, s, o) {
            return o >>>= 0, Ti.varargs = o, 0
          }

          function x_(n, s) {
            n >>>= 0, s >>>= 0
          }

          function T_(n, s, o) {
            s >>>= 0
          }

          function D_(n, s, o, a) {
            s >>>= 0, o >>>= 0
          }

          function E_(n, s, o, a) {
            s >>>= 0, a >>>= 0, Ti.varargs = a
          }

          function k_(n, s, o, a, l, u) {
            s >>>= 0, o >>>= 0, l >>>= 0, u >>>= 0;
            var d = Zr(n), f = d.sock_ops.recvmsg(d, o);
            if (!f) return 0;
            if (l) var p = ta(l, d.family, ve.lookup_name(f.addr), f.port, u);
            return Dt.set(f.buffer, s >>> 0), f.buffer.byteLength
          }

          function O_(n, s, o, a) {
            s >>>= 0, a >>>= 0
          }

          function R_(n) {
            n >>>= 0
          }

          function M_(n, s, o, a, l, u) {
            s >>>= 0, o >>>= 0, l >>>= 0, u >>>= 0
          }

          var U_ = (n, s, o) => {
          };

          function N_(n, s) {
            n >>>= 0, s >>>= 0
          }

          function L_(n, s, o) {
            s >>>= 0
          }

          var P_ = !0, V_ = () => P_, H_ = () => {
            xi("")
          };

          function z_(n, s) {
            return globalThis.DUCKDB_RUNTIME.createDirectory(e, n, s)
          }

          function W_(n, s) {
            return globalThis.DUCKDB_RUNTIME.checkDirectory(e, n, s)
          }

          function $_(n, s) {
            return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(e, n, s)
          }

          function Y_(n, s) {
            return globalThis.DUCKDB_RUNTIME.removeDirectory(e, n, s)
          }

          function X_(n) {
            return globalThis.DUCKDB_RUNTIME.closeFile(e, n)
          }

          function G_(n, s) {
            return globalThis.DUCKDB_RUNTIME.checkFile(e, n, s)
          }

          function K_(n) {
            return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(e, n)
          }

          function J_(n, s, o, a) {
            return globalThis.DUCKDB_RUNTIME.moveFile(e, n, s, o, a)
          }

          function q_(n, s) {
            return globalThis.DUCKDB_RUNTIME.openFile(e, n, s)
          }

          function Z_(n, s, o, a) {
            return globalThis.DUCKDB_RUNTIME.readFile(e, n, s, o, a)
          }

          function Q_(n, s) {
            return globalThis.DUCKDB_RUNTIME.truncateFile(e, n, s)
          }

          function ty(n, s, o, a) {
            return globalThis.DUCKDB_RUNTIME.writeFile(e, n, s, o, a)
          }

          function ey(n) {
            return globalThis.DUCKDB_RUNTIME.getDefaultDataProtocol(n)
          }

          function iy(n, s) {
            return globalThis.DUCKDB_RUNTIME.glob(e, n, s)
          }

          function ry(n) {
            return globalThis.DUCKDB_RUNTIME.testPlatformFeature(e, n)
          }

          function ny(n, s, o, a, l, u) {
            return globalThis.DUCKDB_RUNTIME.callScalarUDF(e, n, s, o, a, l, u)
          }

          var sy = () => Date.now(), Fl = () => 4294901760;

          function oy() {
            return Fl()
          }

          var Bl;
          Bl = () => performance.now();

          function ay(n, s, o) {
            return n >>>= 0, s >>>= 0, o >>>= 0, Dt.copyWithin(n >>> 0, s >>> 0, s + o >>> 0)
          }

          var ly = n => {
            var s = mr.buffer, o = (n - s.byteLength + 65535) / 65536;
            try {
              return mr.grow(o), cl(), 1
            } catch (a) {
            }
          };

          function cy(n) {
            n >>>= 0;
            var s = Dt.length, o = Fl();
            if (n > o) return !1;
            for (var a = (p, _) => p + (_ - p % _) % _, l = 1; l <= 4; l *= 2) {
              var u = s * (1 + .2 / l);
              u = Math.min(u, n + 100663296);
              var d = Math.min(o, a(Math.max(n, u), 65536)), f = ly(d);
              if (f) return !0
            }
            return !1
          }

          var ea = {}, uy = () => m || "./this.program", Qr = () => {
            if (!Qr.strings) {
              var n = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                  s = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: n,
                    _: uy()
                  };
              for (var o in ea) ea[o] === void 0 ? delete s[o] : s[o] = ea[o];
              var a = [];
              for (var o in s) a.push("".concat(o, "=").concat(s[o]));
              Qr.strings = a
            }
            return Qr.strings
          }, dy = (n, s) => {
            for (var o = 0; o < n.length; ++o) Ft[s++ >>> 0 >>> 0] = n.charCodeAt(o);
            Ft[s >>> 0 >>> 0] = 0
          }, fy = function (n, s) {
            n >>>= 0, s >>>= 0;
            var o = 0;
            return Qr().forEach((a, l) => {
              var u = s + o;
              W[n + l * 4 >>> 2 >>> 0] = u, dy(a, u), o += a.length + 1
            }), 0
          }, hy = function (n, s) {
            n >>>= 0, s >>>= 0;
            var o = Qr();
            W[n >>> 2 >>> 0] = o.length;
            var a = 0;
            return o.forEach(l => a += l.length + 1), W[s >>> 2 >>> 0] = a, 0
          }, py = n => 52;

          function _y(n, s) {
            s >>>= 0;
            var o = 0, a = 0, l = 0;
            {
              var u = 2;
              n == 0 ? o = 2 : (n == 1 || n == 2) && (o = 64), l = 1
            }
            return Ft[s >>> 0 >>> 0] = u, Ut[s + 2 >>> 1 >>> 0] = l, wr = [o >>> 0, (be = o, +Math.abs(be) >= 1 ? be > 0 ? +Math.floor(be / 4294967296) >>> 0 : ~~+Math.ceil((be - +(~~be >>> 0)) / 4294967296) >>> 0 : 0)], O[s + 8 >>> 2 >>> 0] = wr[0], O[s + 12 >>> 2 >>> 0] = wr[1], wr = [a >>> 0, (be = a, +Math.abs(be) >= 1 ? be > 0 ? +Math.floor(be / 4294967296) >>> 0 : ~~+Math.ceil((be - +(~~be >>> 0)) / 4294967296) >>> 0 : 0)], O[s + 16 >>> 2 >>> 0] = wr[0], O[s + 20 >>> 2 >>> 0] = wr[1], 0
          }

          function yy(n, s, o, a, l, u) {
            s >>>= 0, o >>>= 0;
            var d = is(a, l);
            return u >>>= 0, 52
          }

          function my(n, s, o, a, l, u) {
            s >>>= 0, o >>>= 0;
            var d = is(a, l);
            return u >>>= 0, 52
          }

          function by(n, s, o, a) {
            return s >>>= 0, o >>>= 0, a >>>= 0, 52
          }

          function vy(n, s, o, a, l) {
            var u = is(s, o);
            return l >>>= 0, 70
          }

          var gy = n => 52, wy = [null, [], []], jy = (n, s) => {
            var o = wy[n];
            s === 0 || s === 10 ? ((n === 1 ? me : We)(vl(o, 0)), o.length = 0) : o.push(s)
          };

          function Sy(n, s, o, a) {
            s >>>= 0, o >>>= 0, a >>>= 0;
            for (var l = 0, u = 0; u < o; u++) {
              var d = W[s >>> 2 >>> 0], f = W[s + 4 >>> 2 >>> 0];
              s += 8;
              for (var p = 0; p < f; p++) jy(n, Dt[d + p >>> 0]);
              l += f
            }
            return W[a >>> 2 >>> 0] = l, 0
          }

          function Iy(n, s, o, a) {
            n >>>= 0, s >>>= 0, o >>>= 0, a >>>= 0;
            var l = 0, u = 0, d = 0, f = 0, p = 0, _ = 0, b;

            function g(F, x, D, L, z, nt) {
              var T, U, pt, mt;
              return U = F === 10 ? 28 : 16, z = F === 10 ? wl(z) : qo(z), T = ra(U), mt = ta(T, F, z, nt), ut(!mt), pt = ra(32), O[pt + 4 >>> 2 >>> 0] = F, O[pt + 8 >>> 2 >>> 0] = x, O[pt + 12 >>> 2 >>> 0] = D, W[pt + 24 >>> 2 >>> 0] = L, W[pt + 20 >>> 2 >>> 0] = T, F === 10 ? O[pt + 16 >>> 2 >>> 0] = 28 : O[pt + 16 >>> 2 >>> 0] = 16, O[pt + 28 >>> 2 >>> 0] = 0, pt
            }

            if (o && (d = O[o >>> 2 >>> 0], f = O[o + 4 >>> 2 >>> 0], p = O[o + 8 >>> 2 >>> 0], _ = O[o + 12 >>> 2 >>> 0]), p && !_ && (_ = p === 2 ? 17 : 6), !p && _ && (p = _ === 17 ? 2 : 1), _ === 0 && (_ = 6), p === 0 && (p = 1), !n && !s) return -2;
            if (d & -1088 || o !== 0 && O[o >>> 2 >>> 0] & 2 && !n) return -1;
            if (d & 32) return -2;
            if (p !== 0 && p !== 1 && p !== 2) return -7;
            if (f !== 0 && f !== 2 && f !== 10) return -6;
            if (s && (s = Sr(s), u = parseInt(s, 10), isNaN(u))) return d & 1024 ? -2 : -8;
            if (!n) return f === 0 && (f = 2), d & 1 || (f === 2 ? l = as(2130706433) : l = [0, 0, 0, 1]), b = g(f, p, _, null, l, u), W[a >>> 2 >>> 0] = b, 0;
            if (n = Sr(n), l = rs(n), l !== null) if (f === 0 || f === 2) f = 2; else if (f === 10 && d & 8) l = [0, 0, as(65535), l], f = 10; else return -2; else if (l = Zo(n), l !== null) if (f === 0 || f === 10) f = 10; else return -2;
            return l != null ? (b = g(f, p, _, n, l, u), W[a >>> 2 >>> 0] = b, 0) : d & 4 ? -2 : (n = ve.lookup_name(n), l = rs(n), f === 0 ? f = 2 : f === 10 && (l = [0, 0, as(65535), l]), b = g(f, p, _, null, l, u), W[a >>> 2 >>> 0] = b, 0)
          }

          var Cy = () => {
            if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return a => crypto.getRandomValues(a);
            if (E) try {
              var n = Ww("crypto"), s = n.randomFillSync;
              if (s) return a => n.randomFillSync(a);
              var o = n.randomBytes;
              return a => (a.set(o(a.byteLength)), a)
            } catch (a) {
            }
            xi("initRandomDevice")
          }, Al = n => (Al = Cy())(n);

          function Fy(n, s) {
            return n >>>= 0, s >>>= 0, Al(Dt.subarray(n >>> 0, n + s >>> 0)), 0
          }

          function By(n, s, o, a, l, u, d) {
            n >>>= 0, o >>>= 0, l >>>= 0;
            var f = jl(n, s);
            if (f.errno) return -6;
            var p = f.port, _ = f.addr, b = !1;
            if (o && a) {
              var g;
              if (d & 1 || !(g = ve.lookup_addr(_))) {
                if (d & 8) return -2
              } else _ = g;
              var F = Qo(_, o, a);
              F + 1 >= a && (b = !0)
            }
            if (l && u) {
              p = "" + p;
              var F = Qo(p, l, u);
              F + 1 >= u && (b = !0)
            }
            return b ? -12 : 0
          }

          function Ay(n) {
            return n >>>= 0, n
          }

          var ss = n => n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0), xy = (n, s) => {
                for (var o = 0, a = 0; a <= s; o += n[a++]) ;
                return o
              }, xl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
              Tl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ty = (n, s) => {
                for (var o = new Date(n.getTime()); s > 0;) {
                  var a = ss(o.getFullYear()), l = o.getMonth(), u = (a ? xl : Tl)[l];
                  if (s > u - o.getDate()) s -= u - o.getDate() + 1, o.setDate(1), l < 11 ? o.setMonth(l + 1) : (o.setMonth(0), o.setFullYear(o.getFullYear() + 1)); else return o.setDate(o.getDate() + s), o
                }
                return o
              }, Dl = n => {
                for (var s = 0, o = 0; o < n.length; ++o) {
                  var a = n.charCodeAt(o);
                  a <= 127 ? s++ : a <= 2047 ? s += 2 : a >= 55296 && a <= 57343 ? (s += 4, ++o) : s += 3
                }
                return s
              };

          function Dy(n, s, o) {
            var a = o > 0 ? o : Dl(n) + 1, l = new Array(a), u = Il(n, l, 0, l.length);
            return s && (l.length = u), l
          }

          var El = (n, s) => {
            Ft.set(n, s >>> 0)
          };

          function Ey(n, s, o, a) {
            n >>>= 0, s >>>= 0, o >>>= 0, a >>>= 0;
            var l = W[a + 40 >>> 2 >>> 0], u = {
              tm_sec: O[a >>> 2 >>> 0],
              tm_min: O[a + 4 >>> 2 >>> 0],
              tm_hour: O[a + 8 >>> 2 >>> 0],
              tm_mday: O[a + 12 >>> 2 >>> 0],
              tm_mon: O[a + 16 >>> 2 >>> 0],
              tm_year: O[a + 20 >>> 2 >>> 0],
              tm_wday: O[a + 24 >>> 2 >>> 0],
              tm_yday: O[a + 28 >>> 2 >>> 0],
              tm_isdst: O[a + 32 >>> 2 >>> 0],
              tm_gmtoff: O[a + 36 >>> 2 >>> 0],
              tm_zone: l ? Sr(l) : ""
            }, d = Sr(o), f = {
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
            for (var p in f) d = d.replace(new RegExp(p, "g"), f[p]);
            var _ = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                b = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            function g(T, U, pt) {
              for (var mt = typeof T == "number" ? T.toString() : T || ""; mt.length < U;) mt = pt[0] + mt;
              return mt
            }

            function F(T, U) {
              return g(T, U, "0")
            }

            function x(T, U) {
              function pt(Jt) {
                return Jt < 0 ? -1 : Jt > 0 ? 1 : 0
              }

              var mt;
              return (mt = pt(T.getFullYear() - U.getFullYear())) === 0 && (mt = pt(T.getMonth() - U.getMonth())) === 0 && (mt = pt(T.getDate() - U.getDate())), mt
            }

            function D(T) {
              switch (T.getDay()) {
                case 0:
                  return new Date(T.getFullYear() - 1, 11, 29);
                case 1:
                  return T;
                case 2:
                  return new Date(T.getFullYear(), 0, 3);
                case 3:
                  return new Date(T.getFullYear(), 0, 2);
                case 4:
                  return new Date(T.getFullYear(), 0, 1);
                case 5:
                  return new Date(T.getFullYear() - 1, 11, 31);
                case 6:
                  return new Date(T.getFullYear() - 1, 11, 30)
              }
            }

            function L(T) {
              var U = Ty(new Date(T.tm_year + 1900, 0, 1), T.tm_yday), pt = new Date(U.getFullYear(), 0, 4),
                  mt = new Date(U.getFullYear() + 1, 0, 4), Jt = D(pt), en = D(mt);
              return x(Jt, U) <= 0 ? x(en, U) <= 0 ? U.getFullYear() + 1 : U.getFullYear() : U.getFullYear() - 1
            }

            var z = {
              "%a": T => _[T.tm_wday].substring(0, 3),
              "%A": T => _[T.tm_wday],
              "%b": T => b[T.tm_mon].substring(0, 3),
              "%B": T => b[T.tm_mon],
              "%C": T => {
                var U = T.tm_year + 1900;
                return F(U / 100 | 0, 2)
              },
              "%d": T => F(T.tm_mday, 2),
              "%e": T => g(T.tm_mday, 2, " "),
              "%g": T => L(T).toString().substring(2),
              "%G": T => L(T),
              "%H": T => F(T.tm_hour, 2),
              "%I": T => {
                var U = T.tm_hour;
                return U == 0 ? U = 12 : U > 12 && (U -= 12), F(U, 2)
              },
              "%j": T => F(T.tm_mday + xy(ss(T.tm_year + 1900) ? xl : Tl, T.tm_mon - 1), 3),
              "%m": T => F(T.tm_mon + 1, 2),
              "%M": T => F(T.tm_min, 2),
              "%n": () => "\n",
              "%p": T => T.tm_hour >= 0 && T.tm_hour < 12 ? "AM" : "PM",
              "%S": T => F(T.tm_sec, 2),
              "%t": () => "	",
              "%u": T => T.tm_wday || 7,
              "%U": T => {
                var U = T.tm_yday + 7 - T.tm_wday;
                return F(Math.floor(U / 7), 2)
              },
              "%V": T => {
                var U = Math.floor((T.tm_yday + 7 - (T.tm_wday + 6) % 7) / 7);
                if ((T.tm_wday + 371 - T.tm_yday - 2) % 7 <= 2 && U++, U) {
                  if (U == 53) {
                    var mt = (T.tm_wday + 371 - T.tm_yday) % 7;
                    mt != 4 && (mt != 3 || !ss(T.tm_year)) && (U = 1)
                  }
                } else {
                  U = 52;
                  var pt = (T.tm_wday + 7 - T.tm_yday - 1) % 7;
                  (pt == 4 || pt == 5 && ss(T.tm_year % 400 - 1)) && U++
                }
                return F(U, 2)
              },
              "%w": T => T.tm_wday,
              "%W": T => {
                var U = T.tm_yday + 7 - (T.tm_wday + 6) % 7;
                return F(Math.floor(U / 7), 2)
              },
              "%y": T => (T.tm_year + 1900).toString().substring(2),
              "%Y": T => T.tm_year + 1900,
              "%z": T => {
                var U = T.tm_gmtoff, pt = U >= 0;
                return U = Math.abs(U) / 60, U = U / 60 * 100 + U % 60, (pt ? "+" : "-") + ("0000" + U).slice(-4)
              },
              "%Z": T => T.tm_zone,
              "%%": () => "%"
            };
            d = d.replace(/%%/g, "\0\0");
            for (var p in z) d.includes(p) && (d = d.replace(new RegExp(p, "g"), z[p](u)));
            d = d.replace(/\0\0/g, "%");
            var nt = Dy(d, !1);
            return nt.length > s ? 0 : (El(nt, n), nt.length - 1)
          }

          function ky(n, s, o, a, l) {
            return n >>>= 0, s >>>= 0, o >>>= 0, a >>>= 0, l >>>= 0, Ey(n, s, o, a)
          }

          var Oy = 0, Ry = () => s_ || Oy > 0, My = n => {
                Ai = n, Ry() || (e.onExit && e.onExit(n), br = !0), v(n, new ml(n))
              }, Uy = (n, s) => {
                Ai = n, My(n)
              }, Ny = n => {
                if (n instanceof ml || n == "unwind") return Ai;
                v(1, n)
              }, os = [], kl, N = n => {
                var s = os[n];
                return s || (n >= os.length && (os.length = n + 1), os[n] = s = kl.get(n)), s
              }, Ly = n => {
                var s = e["_" + n];
                return s
              }, Py = n => {
                var s = Dl(n) + 1, o = cs(s);
                return Qo(n, o, s), o
              }, Vy = (n, s, o, a, l) => {
                var u = {
                  string: D => {
                    var L = 0;
                    return D != null && D !== 0 && (L = Py(D)), L
                  }, array: D => {
                    var L = cs(D.length);
                    return El(D, L), L
                  }
                };

                function d(D) {
                  return s === "string" ? Sr(D) : s === "boolean" ? !!D : D
                }

                var f = Ly(n), p = [], _ = 0;
                if (a) for (var b = 0; b < a.length; b++) {
                  var g = u[o[b]];
                  g ? (_ === 0 && (_ = j()), p[b] = g(a[b])) : p[b] = a[b]
                }
                var F = f.apply(null, p);

                function x(D) {
                  return _ !== 0 && S(_), d(D)
                }

                return F = x(F), F
              }, Hy = {
                v: o_,
                B: a_,
                a: c_,
                k: u_,
                A: d_,
                K: f_,
                R: h_,
                wa: p_,
                pa: __,
                s: y_,
                C: m_,
                c: l_,
                Ja: b_,
                Na: v_,
                Ma: g_,
                Da: w_,
                Q: j_,
                Ca: S_,
                wb: I_,
                xa: C_,
                Ha: F_,
                Ia: B_,
                ma: A_,
                za: x_,
                ya: T_,
                Aa: D_,
                na: E_,
                Ka: k_,
                rf: O_,
                ea: R_,
                La: M_,
                ha: U_,
                Ba: N_,
                fa: L_,
                Ta: V_,
                ba: H_,
                gf: z_,
                hf: W_,
                ef: $_,
                ff: Y_,
                ta: X_,
                cf: G_,
                ab: K_,
                df: J_,
                kf: q_,
                aa: Z_,
                jf: Q_,
                ua: ty,
                lf: ey,
                bf: iy,
                ra: ry,
                mf: ny,
                Ua: sy,
                Va: oy,
                sa: Bl,
                Gd: ay,
                tf: cy,
                Cb: fy,
                Nb: hy,
                Y: py,
                Sa: _y,
                yb: yy,
                xb: my,
                la: by,
                Re: vy,
                sf: gy,
                ca: Sy,
                Oa: Iy,
                qf: Fy,
                Ga: By,
                J: pb,
                X: Fb,
                da: Vm,
                M: Ib,
                O: Bb,
                Ub: Pg,
                T: _b,
                qa: Pm,
                N: Sb,
                Vb: Lg,
                p: Jm,
                ja: ab,
                of: Db,
                _: rb,
                ka: ob,
                pf: Tb,
                d: Dm,
                P: cb,
                S: bb,
                b: Rm,
                V: yb,
                ec: Ag,
                g: Mm,
                Fa: Ab,
                ac: Eg,
                j: Lm,
                oa: eb,
                o: Um,
                Ea: xb,
                t: Wm,
                u: Xm,
                H: ib,
                Z: jb,
                W: Gm,
                r: Zm,
                z: Km,
                Pa: mb,
                D: lb,
                q: db,
                Yb: Mg,
                nc: vg,
                dc: xg,
                te: p0,
                $b: kg,
                xd: cv,
                fc: Bg,
                ze: l0,
                wd: uv,
                $a: Fw,
                ue: h0,
                Ad: ov,
                Wc: Nv,
                Te: zb,
                sd: pv,
                Ae: a0,
                rc: _g,
                sc: pg,
                Se: Wb,
                Ya: xw,
                Wa: Dw,
                re: y0,
                td: hv,
                yd: lv,
                zd: av,
                Fd: ev,
                Xc: Uv,
                Yc: Mv,
                ve: f0,
                yc: lg,
                Ye: Nb,
                Ce: s0,
                ye: c0,
                pd: mv,
                _b: Og,
                lb: yw,
                Zb: Rg,
                fb: ww,
                xc: cg,
                vb: ow,
                kb: mw,
                fe: A0,
                Ze: Ub,
                Ed: iv,
                Vc: Lv,
                Mb: Xg,
                cc: Tg,
                bc: Dg,
                Zc: Rv,
                md: gv,
                eb: jw,
                Rc: zv,
                Ie: Qb,
                Ge: e0,
                hc: Cg,
                sb: cw,
                Rb: zg,
                gb: gw,
                ub: aw,
                ib: vw,
                ld: wv,
                rd: _v,
                Lb: Gg,
                Pb: $g,
                Ob: Yg,
                Ab: nw,
                be: E0,
                Xa: Tw,
                jd: Sv,
                Yd: U0,
                Gc: tg,
                Cc: ng,
                xe: u0,
                Ib: qg,
                we: d0,
                Cd: nv,
                Bd: sv,
                We: Pb,
                Ve: Vb,
                qe: m0,
                af: Ob,
                vd: dv,
                qc: yg,
                jc: Sg,
                he: F0,
                Ac: og,
                $d: O0,
                me: w0,
                pc: mg,
                Uc: Pv,
                dd: xv,
                le: j0,
                ie: C0,
                Od: X0,
                gc: Fg,
                mc: gg,
                De: n0,
                ad: Ev,
                ke: S0,
                je: I0,
                ic: Ig,
                oc: bg,
                qd: yv,
                Mc: Gv,
                Za: Aw,
                Jc: qv,
                rb: uw,
                Bc: sg,
                Lc: Kv,
                tc: hg,
                Hd: tv,
                Eb: ew,
                Ic: Zv,
                Dc: rg,
                Hc: Qv,
                Fb: tw,
                Gb: Qg,
                l: Em,
                Qa: hb,
                Ra: fb,
                h: Om,
                x: nb,
                ga: Cb,
                G: gb,
                e: km,
                L: zm,
                U: vb,
                f: Nm,
                i: Hm,
                va: Eb,
                n: Ym,
                m: $m,
                ia: ub,
                y: qm,
                E: wb,
                F: sb,
                I: Qm,
                nf: kb,
                $: tb,
                Le: Jb,
                Oe: Xb,
                wc: ug,
                Me: Kb,
                Jd: Z0,
                _c: Ov,
                Jb: Jg,
                Ec: ig,
                ge: B0,
                tb: lw,
                Ne: Gb,
                ob: hw,
                Ke: qb,
                ne: g0,
                uc: fg,
                vc: dg,
                Bb: rw,
                Db: iw,
                kd: jv,
                Md: K0,
                Pe: Yb,
                Xb: Ug,
                Ld: J0,
                He: t0,
                ce: D0,
                Be: o0,
                zc: ag,
                Kd: q0,
                Rd: W0,
                Id: Q0,
                nd: vv,
                _a: Bw,
                od: bv,
                lc: wg,
                jb: bw,
                Xe: Lb,
                fd: Bv,
                ud: fv,
                Sc: Hv,
                Pd: Y0,
                Vd: P0,
                Zd: M0,
                Qc: Wv,
                db: Sw,
                _e: Mb,
                ee: x0,
                Ue: Hb,
                Ud: V0,
                Qb: Wg,
                oe: v0,
                Hb: Zg,
                Sd: z0,
                Oc: Yv,
                Kc: Jv,
                $c: kv,
                nb: pw,
                pe: b0,
                cb: Iw,
                Nd: G0,
                Qd: $0,
                pb: fw,
                $e: Rb,
                de: T0,
                kc: jg,
                ae: k0,
                Xd: N0,
                Qe: $b,
                Je: Zb,
                Tc: Vv,
                Fe: i0,
                Sb: Hg,
                Kb: Kg,
                Tb: Vg,
                Nc: Xv,
                mb: _w,
                hd: Cv,
                Dd: rv,
                _d: R0,
                Td: H0,
                qb: dw,
                Wd: L0,
                Ee: r0,
                bb: Cw,
                gd: Fv,
                Pc: $v,
                cd: Tv,
                zb: sw,
                Fc: eg,
                se: _0,
                id: Iv,
                Wb: Ng,
                ed: Av,
                bd: Dv,
                w: Ay,
                hb: ky
              }, w = n_(), zy = () => (zy = w.vf)(), Ol = e._main = (n, s) => (Ol = e._main = w.wf)(n, s),
              Wy = e._duckdb_web_fs_glob_add_path = n => (Wy = e._duckdb_web_fs_glob_add_path = w.yf)(n),
              $y = e._duckdb_web_clear_response = () => ($y = e._duckdb_web_clear_response = w.zf)(),
              Yy = e._duckdb_web_fail_with = n => (Yy = e._duckdb_web_fail_with = w.Af)(n),
              Xy = e._duckdb_web_reset = n => (Xy = e._duckdb_web_reset = w.Bf)(n),
              Gy = e._duckdb_web_connect = () => (Gy = e._duckdb_web_connect = w.Cf)(),
              Ky = e._duckdb_web_disconnect = n => (Ky = e._duckdb_web_disconnect = w.Df)(n),
              Jy = e._duckdb_web_flush_files = () => (Jy = e._duckdb_web_flush_files = w.Ef)(),
              qy = e._duckdb_web_flush_file = n => (qy = e._duckdb_web_flush_file = w.Ff)(n),
              Zy = e._duckdb_web_open = (n, s) => (Zy = e._duckdb_web_open = w.Gf)(n, s),
              Qy = e._duckdb_web_get_global_file_info = (n, s) => (Qy = e._duckdb_web_get_global_file_info = w.Hf)(n, s),
              tm = e._duckdb_web_collect_file_stats = (n, s, o) => (tm = e._duckdb_web_collect_file_stats = w.If)(n, s, o),
              em = e._duckdb_web_export_file_stats = (n, s) => (em = e._duckdb_web_export_file_stats = w.Jf)(n, s),
              im = e._duckdb_web_fs_drop_file = (n, s) => (im = e._duckdb_web_fs_drop_file = w.Kf)(n, s),
              rm = e._duckdb_web_fs_drop_files = n => (rm = e._duckdb_web_fs_drop_files = w.Lf)(n),
              nm = e._duckdb_web_fs_glob_file_infos = (n, s) => (nm = e._duckdb_web_fs_glob_file_infos = w.Mf)(n, s),
              sm = e._duckdb_web_fs_get_file_info_by_id = (n, s, o) => (sm = e._duckdb_web_fs_get_file_info_by_id = w.Nf)(n, s, o),
              om = e._duckdb_web_fs_get_file_info_by_name = (n, s, o) => (om = e._duckdb_web_fs_get_file_info_by_name = w.Of)(n, s, o),
              am = e._duckdb_web_fs_register_file_url = (n, s, o, a, l) => (am = e._duckdb_web_fs_register_file_url = w.Pf)(n, s, o, a, l),
              lm = e._duckdb_web_fs_register_file_buffer = (n, s, o, a) => (lm = e._duckdb_web_fs_register_file_buffer = w.Qf)(n, s, o, a),
              cm = e._duckdb_web_copy_file_to_buffer = (n, s) => (cm = e._duckdb_web_copy_file_to_buffer = w.Rf)(n, s),
              um = e._duckdb_web_copy_file_to_path = (n, s, o) => (um = e._duckdb_web_copy_file_to_path = w.Sf)(n, s, o),
              dm = e._duckdb_web_get_version = n => (dm = e._duckdb_web_get_version = w.Tf)(n),
              fm = e._duckdb_web_get_feature_flags = () => (fm = e._duckdb_web_get_feature_flags = w.Uf)(),
              hm = e._duckdb_web_tokenize = (n, s) => (hm = e._duckdb_web_tokenize = w.Vf)(n, s),
              pm = e._duckdb_web_udf_scalar_create = (n, s, o) => (pm = e._duckdb_web_udf_scalar_create = w.Wf)(n, s, o),
              _m = e._duckdb_web_prepared_create = (n, s, o) => (_m = e._duckdb_web_prepared_create = w.Xf)(n, s, o),
              ym = e._duckdb_web_prepared_close = (n, s, o) => (ym = e._duckdb_web_prepared_close = w.Yf)(n, s, o),
              mm = e._duckdb_web_prepared_run = (n, s, o, a) => (mm = e._duckdb_web_prepared_run = w.Zf)(n, s, o, a),
              bm = e._duckdb_web_prepared_send = (n, s, o, a) => (bm = e._duckdb_web_prepared_send = w._f)(n, s, o, a),
              vm = e._duckdb_web_query_run = (n, s, o) => (vm = e._duckdb_web_query_run = w.$f)(n, s, o),
              gm = e._duckdb_web_pending_query_start = (n, s, o) => (gm = e._duckdb_web_pending_query_start = w.ag)(n, s, o),
              wm = e._duckdb_web_pending_query_poll = (n, s, o) => (wm = e._duckdb_web_pending_query_poll = w.bg)(n, s, o),
              jm = e._duckdb_web_pending_query_cancel = (n, s) => (jm = e._duckdb_web_pending_query_cancel = w.cg)(n, s),
              Sm = e._duckdb_web_query_fetch_results = (n, s) => (Sm = e._duckdb_web_query_fetch_results = w.dg)(n, s),
              Im = e._duckdb_web_get_tablenames = (n, s, o) => (Im = e._duckdb_web_get_tablenames = w.eg)(n, s, o),
              Cm = e._duckdb_web_insert_arrow_from_ipc_stream = (n, s, o, a, l) => (Cm = e._duckdb_web_insert_arrow_from_ipc_stream = w.fg)(n, s, o, a, l),
              Fm = e._duckdb_web_insert_csv_from_path = (n, s, o, a) => (Fm = e._duckdb_web_insert_csv_from_path = w.gg)(n, s, o, a),
              Bm = e._duckdb_web_insert_json_from_path = (n, s, o, a) => (Bm = e._duckdb_web_insert_json_from_path = w.hg)(n, s, o, a),
              Am = () => (Am = w.__errno_location)(), as = n => (as = w.ig)(n), ls = n => (ls = w.jg)(n),
              ia = n => (ia = w.kg)(n), ra = e._malloc = n => (ra = e._malloc = w.lg)(n),
              xm = e._free = n => (xm = e._free = w.mg)(n), I = (n, s) => (I = w.ng)(n, s), tn = n => (tn = w.og)(n),
              j = () => (j = w.pg)(), S = n => (S = w.qg)(n), cs = n => (cs = w.rg)(n),
              Tm = n => (Tm = w.__cxa_free_exception)(n), Rl = n => (Rl = w.sg)(n), Ml = n => (Ml = w.tg)(n),
              Ul = (n, s, o) => (Ul = w.ug)(n, s, o), Nl = n => (Nl = w.vg)(n),
              Ll = e.dynCall_jiiii = (n, s, o, a, l) => (Ll = e.dynCall_jiiii = w.wg)(n, s, o, a, l),
              Pl = e.dynCall_iiiiij = (n, s, o, a, l, u, d) => (Pl = e.dynCall_iiiiij = w.xg)(n, s, o, a, l, u, d),
              Vl = e.dynCall_iiiiijj = (n, s, o, a, l, u, d, f, p) => (Vl = e.dynCall_iiiiijj = w.yg)(n, s, o, a, l, u, d, f, p),
              Hl = e.dynCall_viijii = (n, s, o, a, l, u, d) => (Hl = e.dynCall_viijii = w.zg)(n, s, o, a, l, u, d),
              zl = e.dynCall_viiiij = (n, s, o, a, l, u, d) => (zl = e.dynCall_viiiij = w.Ag)(n, s, o, a, l, u, d),
              Wl = e.dynCall_iij = (n, s, o, a) => (Wl = e.dynCall_iij = w.Bg)(n, s, o, a),
              $l = e.dynCall_iiji = (n, s, o, a, l) => ($l = e.dynCall_iiji = w.Cg)(n, s, o, a, l),
              Yl = e.dynCall_vijji = (n, s, o, a, l, u, d) => (Yl = e.dynCall_vijji = w.Dg)(n, s, o, a, l, u, d),
              Xl = e.dynCall_ji = (n, s) => (Xl = e.dynCall_ji = w.Eg)(n, s),
              Gl = e.dynCall_viji = (n, s, o, a, l) => (Gl = e.dynCall_viji = w.Fg)(n, s, o, a, l),
              Kl = e.dynCall_iiiji = (n, s, o, a, l, u) => (Kl = e.dynCall_iiiji = w.Gg)(n, s, o, a, l, u),
              Jl = e.dynCall_viiij = (n, s, o, a, l, u) => (Jl = e.dynCall_viiij = w.Hg)(n, s, o, a, l, u),
              ql = e.dynCall_iiiij = (n, s, o, a, l, u) => (ql = e.dynCall_iiiij = w.Ig)(n, s, o, a, l, u),
              Zl = e.dynCall_iiijj = (n, s, o, a, l, u, d) => (Zl = e.dynCall_iiijj = w.Jg)(n, s, o, a, l, u, d),
              Ql = e.dynCall_iiij = (n, s, o, a, l) => (Ql = e.dynCall_iiij = w.Kg)(n, s, o, a, l),
              tc = e.dynCall_viijiiiii = (n, s, o, a, l, u, d, f, p, _) => (tc = e.dynCall_viijiiiii = w.Lg)(n, s, o, a, l, u, d, f, p, _),
              ec = e.dynCall_viij = (n, s, o, a, l) => (ec = e.dynCall_viij = w.Mg)(n, s, o, a, l),
              ic = e.dynCall_vij = (n, s, o, a) => (ic = e.dynCall_vij = w.Ng)(n, s, o, a),
              rc = e.dynCall_jiiijii = (n, s, o, a, l, u, d, f) => (rc = e.dynCall_jiiijii = w.Og)(n, s, o, a, l, u, d, f),
              nc = e.dynCall_jiijiii = (n, s, o, a, l, u, d, f) => (nc = e.dynCall_jiijiii = w.Pg)(n, s, o, a, l, u, d, f),
              sc = e.dynCall_jiijii = (n, s, o, a, l, u, d) => (sc = e.dynCall_jiijii = w.Qg)(n, s, o, a, l, u, d),
              oc = e.dynCall_j = n => (oc = e.dynCall_j = w.Rg)(n),
              ac = e.dynCall_viiiiji = (n, s, o, a, l, u, d, f) => (ac = e.dynCall_viiiiji = w.Sg)(n, s, o, a, l, u, d, f),
              lc = e.dynCall_jiiiijii = (n, s, o, a, l, u, d, f, p) => (lc = e.dynCall_jiiiijii = w.Tg)(n, s, o, a, l, u, d, f, p),
              cc = e.dynCall_jiiijiii = (n, s, o, a, l, u, d, f, p) => (cc = e.dynCall_jiiijiii = w.Ug)(n, s, o, a, l, u, d, f, p),
              uc = e.dynCall_jiiiiijiiii = (n, s, o, a, l, u, d, f, p, _, b, g) => (uc = e.dynCall_jiiiiijiiii = w.Vg)(n, s, o, a, l, u, d, f, p, _, b, g),
              dc = e.dynCall_viiiiijiiii = (n, s, o, a, l, u, d, f, p, _, b, g) => (dc = e.dynCall_viiiiijiiii = w.Wg)(n, s, o, a, l, u, d, f, p, _, b, g),
              fc = e.dynCall_iiijij = (n, s, o, a, l, u, d, f) => (fc = e.dynCall_iiijij = w.Xg)(n, s, o, a, l, u, d, f),
              hc = e.dynCall_viiji = (n, s, o, a, l, u) => (hc = e.dynCall_viiji = w.Yg)(n, s, o, a, l, u),
              pc = e.dynCall_viiiji = (n, s, o, a, l, u, d) => (pc = e.dynCall_viiiji = w.Zg)(n, s, o, a, l, u, d),
              _c = e.dynCall_viijji = (n, s, o, a, l, u, d, f) => (_c = e.dynCall_viijji = w._g)(n, s, o, a, l, u, d, f),
              yc = e.dynCall_vijijj = (n, s, o, a, l, u, d, f, p) => (yc = e.dynCall_vijijj = w.$g)(n, s, o, a, l, u, d, f, p),
              mc = e.dynCall_viiijjj = (n, s, o, a, l, u, d, f, p, _) => (mc = e.dynCall_viiijjj = w.ah)(n, s, o, a, l, u, d, f, p, _),
              bc = e.dynCall_iji = (n, s, o, a) => (bc = e.dynCall_iji = w.bh)(n, s, o, a),
              vc = e.dynCall_viijjji = (n, s, o, a, l, u, d, f, p, _) => (vc = e.dynCall_viijjji = w.ch)(n, s, o, a, l, u, d, f, p, _),
              gc = e.dynCall_viijj = (n, s, o, a, l, u, d) => (gc = e.dynCall_viijj = w.dh)(n, s, o, a, l, u, d),
              wc = e.dynCall_viiijj = (n, s, o, a, l, u, d, f) => (wc = e.dynCall_viiijj = w.eh)(n, s, o, a, l, u, d, f),
              jc = e.dynCall_viijjj = (n, s, o, a, l, u, d, f, p) => (jc = e.dynCall_viijjj = w.fh)(n, s, o, a, l, u, d, f, p),
              Sc = e.dynCall_vijj = (n, s, o, a, l, u) => (Sc = e.dynCall_vijj = w.gh)(n, s, o, a, l, u),
              Ic = e.dynCall_viiijjij = (n, s, o, a, l, u, d, f, p, _, b) => (Ic = e.dynCall_viiijjij = w.hh)(n, s, o, a, l, u, d, f, p, _, b),
              Cc = e.dynCall_viijiii = (n, s, o, a, l, u, d, f) => (Cc = e.dynCall_viijiii = w.ih)(n, s, o, a, l, u, d, f),
              Fc = e.dynCall_vijijjiij = (n, s, o, a, l, u, d, f, p, _, b, g, F) => (Fc = e.dynCall_vijijjiij = w.jh)(n, s, o, a, l, u, d, f, p, _, b, g, F),
              Bc = e.dynCall_viiijjiij = (n, s, o, a, l, u, d, f, p, _, b, g) => (Bc = e.dynCall_viiijjiij = w.kh)(n, s, o, a, l, u, d, f, p, _, b, g),
              Ac = e.dynCall_jiiijiijiii = (n, s, o, a, l, u, d, f, p, _, b, g, F) => (Ac = e.dynCall_jiiijiijiii = w.lh)(n, s, o, a, l, u, d, f, p, _, b, g, F),
              xc = e.dynCall_viijiiiij = (n, s, o, a, l, u, d, f, p, _, b) => (xc = e.dynCall_viijiiiij = w.mh)(n, s, o, a, l, u, d, f, p, _, b),
              Tc = e.dynCall_viiijiiiijjj = (n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L) => (Tc = e.dynCall_viiijiiiijjj = w.nh)(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L),
              Dc = e.dynCall_viijijiiiijjj = (n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt) => (Dc = e.dynCall_viijijiiiijjj = w.oh)(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt),
              Ec = e.dynCall_viiiijjij = (n, s, o, a, l, u, d, f, p, _, b, g) => (Ec = e.dynCall_viiiijjij = w.ph)(n, s, o, a, l, u, d, f, p, _, b, g),
              kc = e.dynCall_viiijiiii = (n, s, o, a, l, u, d, f, p, _) => (kc = e.dynCall_viiijiiii = w.qh)(n, s, o, a, l, u, d, f, p, _),
              Oc = e.dynCall_jiiiiji = (n, s, o, a, l, u, d, f) => (Oc = e.dynCall_jiiiiji = w.rh)(n, s, o, a, l, u, d, f),
              Rc = e.dynCall_viiiijijji = (n, s, o, a, l, u, d, f, p, _, b, g, F) => (Rc = e.dynCall_viiiijijji = w.sh)(n, s, o, a, l, u, d, f, p, _, b, g, F),
              Mc = e.dynCall_viiijiiijii = (n, s, o, a, l, u, d, f, p, _, b, g, F) => (Mc = e.dynCall_viiijiiijii = w.th)(n, s, o, a, l, u, d, f, p, _, b, g, F),
              Uc = e.dynCall_viijijiiii = (n, s, o, a, l, u, d, f, p, _, b, g) => (Uc = e.dynCall_viijijiiii = w.uh)(n, s, o, a, l, u, d, f, p, _, b, g),
              Nc = e.dynCall_jj = (n, s, o) => (Nc = e.dynCall_jj = w.vh)(n, s, o),
              Lc = e.dynCall_jd = (n, s) => (Lc = e.dynCall_jd = w.wh)(n, s),
              Pc = e.dynCall_jf = (n, s) => (Pc = e.dynCall_jf = w.xh)(n, s),
              Vc = e.dynCall_iijjj = (n, s, o, a, l, u, d, f) => (Vc = e.dynCall_iijjj = w.yh)(n, s, o, a, l, u, d, f),
              Hc = e.dynCall_iiiijj = (n, s, o, a, l, u, d, f) => (Hc = e.dynCall_iiiijj = w.zh)(n, s, o, a, l, u, d, f),
              zc = e.dynCall_iiijji = (n, s, o, a, l, u, d, f) => (zc = e.dynCall_iiijji = w.Ah)(n, s, o, a, l, u, d, f),
              Wc = e.dynCall_vijijiiiijjj = (n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z) => (Wc = e.dynCall_vijijiiiijjj = w.Bh)(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z),
              $c = e.dynCall_viiiiiij = (n, s, o, a, l, u, d, f, p) => ($c = e.dynCall_viiiiiij = w.Ch)(n, s, o, a, l, u, d, f, p),
              Yc = e.dynCall_jii = (n, s, o) => (Yc = e.dynCall_jii = w.Dh)(n, s, o),
              Xc = e.dynCall_iiiijjiii = (n, s, o, a, l, u, d, f, p, _, b) => (Xc = e.dynCall_iiiijjiii = w.Eh)(n, s, o, a, l, u, d, f, p, _, b),
              Gc = e.dynCall_iiiiiij = (n, s, o, a, l, u, d, f) => (Gc = e.dynCall_iiiiiij = w.Fh)(n, s, o, a, l, u, d, f),
              Kc = e.dynCall_iiiiiiiij = (n, s, o, a, l, u, d, f, p, _) => (Kc = e.dynCall_iiiiiiiij = w.Gh)(n, s, o, a, l, u, d, f, p, _),
              Jc = e.dynCall_jiii = (n, s, o, a) => (Jc = e.dynCall_jiii = w.Hh)(n, s, o, a),
              qc = e.dynCall_iiiiiiij = (n, s, o, a, l, u, d, f, p) => (qc = e.dynCall_iiiiiiij = w.Ih)(n, s, o, a, l, u, d, f, p),
              Zc = e.dynCall_iiiiiiji = (n, s, o, a, l, u, d, f, p) => (Zc = e.dynCall_iiiiiiji = w.Jh)(n, s, o, a, l, u, d, f, p),
              Qc = e.dynCall_iiiijiii = (n, s, o, a, l, u, d, f, p) => (Qc = e.dynCall_iiiijiii = w.Kh)(n, s, o, a, l, u, d, f, p),
              tu = e.dynCall_iiiijii = (n, s, o, a, l, u, d, f) => (tu = e.dynCall_iiiijii = w.Lh)(n, s, o, a, l, u, d, f),
              eu = e.dynCall_jiiiii = (n, s, o, a, l, u) => (eu = e.dynCall_jiiiii = w.Mh)(n, s, o, a, l, u),
              iu = e.dynCall_iiiiji = (n, s, o, a, l, u, d) => (iu = e.dynCall_iiiiji = w.Nh)(n, s, o, a, l, u, d),
              ru = e.dynCall_iiiiiji = (n, s, o, a, l, u, d, f) => (ru = e.dynCall_iiiiiji = w.Oh)(n, s, o, a, l, u, d, f),
              nu = e.dynCall_iiijii = (n, s, o, a, l, u, d) => (nu = e.dynCall_iiijii = w.Ph)(n, s, o, a, l, u, d),
              su = e.dynCall_iijj = (n, s, o, a, l, u) => (su = e.dynCall_iijj = w.Qh)(n, s, o, a, l, u),
              ou = e.dynCall_iiijjj = (n, s, o, a, l, u, d, f, p) => (ou = e.dynCall_iiijjj = w.Rh)(n, s, o, a, l, u, d, f, p),
              au = e.dynCall_viiiiij = (n, s, o, a, l, u, d, f) => (au = e.dynCall_viiiiij = w.Sh)(n, s, o, a, l, u, d, f),
              lu = e.dynCall_iijiji = (n, s, o, a, l, u, d, f) => (lu = e.dynCall_iijiji = w.Th)(n, s, o, a, l, u, d, f),
              cu = e.dynCall_viiiijiiiiiiii = (n, s, o, a, l, u, d, f, p, _, b, g, F, x, D) => (cu = e.dynCall_viiiijiiiiiiii = w.Uh)(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D),
              uu = e.dynCall_jiij = (n, s, o, a, l) => (uu = e.dynCall_jiij = w.Vh)(n, s, o, a, l),
              du = e.dynCall_jiiiji = (n, s, o, a, l, u, d) => (du = e.dynCall_jiiiji = w.Wh)(n, s, o, a, l, u, d),
              fu = e.dynCall_viijiiji = (n, s, o, a, l, u, d, f, p, _) => (fu = e.dynCall_viijiiji = w.Xh)(n, s, o, a, l, u, d, f, p, _),
              hu = e.dynCall_iiiiiijjiijjji = (n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt, T) => (hu = e.dynCall_iiiiiijjiijjji = w.Yh)(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt, T),
              pu = e.dynCall_iiijjijjiii = (n, s, o, a, l, u, d, f, p, _, b, g, F, x, D) => (pu = e.dynCall_iiijjijjiii = w.Zh)(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D),
              _u = e.dynCall_iiiijjii = (n, s, o, a, l, u, d, f, p, _) => (_u = e.dynCall_iiiijjii = w._h)(n, s, o, a, l, u, d, f, p, _),
              yu = e.dynCall_iiiijji = (n, s, o, a, l, u, d, f, p) => (yu = e.dynCall_iiiijji = w.$h)(n, s, o, a, l, u, d, f, p),
              mu = e.dynCall_iiijjii = (n, s, o, a, l, u, d, f, p) => (mu = e.dynCall_iiijjii = w.ai)(n, s, o, a, l, u, d, f, p),
              bu = e.dynCall_vijii = (n, s, o, a, l, u) => (bu = e.dynCall_vijii = w.bi)(n, s, o, a, l, u),
              vu = e.dynCall_vjjijij = (n, s, o, a, l, u, d, f, p, _, b) => (vu = e.dynCall_vjjijij = w.ci)(n, s, o, a, l, u, d, f, p, _, b),
              gu = e.dynCall_vijjji = (n, s, o, a, l, u, d, f, p) => (gu = e.dynCall_vijjji = w.di)(n, s, o, a, l, u, d, f, p),
              wu = e.dynCall_vjjii = (n, s, o, a, l, u, d) => (wu = e.dynCall_vjjii = w.ei)(n, s, o, a, l, u, d),
              ju = e.dynCall_viiiiiji = (n, s, o, a, l, u, d, f, p) => (ju = e.dynCall_viiiiiji = w.fi)(n, s, o, a, l, u, d, f, p),
              Su = e.dynCall_viiijjiii = (n, s, o, a, l, u, d, f, p, _, b) => (Su = e.dynCall_viiijjiii = w.gi)(n, s, o, a, l, u, d, f, p, _, b),
              Iu = e.dynCall_iiijjjj = (n, s, o, a, l, u, d, f, p, _, b) => (Iu = e.dynCall_iiijjjj = w.hi)(n, s, o, a, l, u, d, f, p, _, b),
              Cu = e.dynCall_viiijjjj = (n, s, o, a, l, u, d, f, p, _, b, g) => (Cu = e.dynCall_viiijjjj = w.ii)(n, s, o, a, l, u, d, f, p, _, b, g),
              Fu = e.dynCall_vijjj = (n, s, o, a, l, u, d, f) => (Fu = e.dynCall_vijjj = w.ji)(n, s, o, a, l, u, d, f),
              Bu = e.dynCall_jijij = (n, s, o, a, l, u, d) => (Bu = e.dynCall_jijij = w.ki)(n, s, o, a, l, u, d),
              Au = e.dynCall_jiiij = (n, s, o, a, l, u) => (Au = e.dynCall_jiiij = w.li)(n, s, o, a, l, u),
              xu = e.dynCall_jijjij = (n, s, o, a, l, u, d, f, p) => (xu = e.dynCall_jijjij = w.mi)(n, s, o, a, l, u, d, f, p),
              Tu = e.dynCall_jij = (n, s, o, a) => (Tu = e.dynCall_jij = w.ni)(n, s, o, a),
              Du = e.dynCall_jijiii = (n, s, o, a, l, u, d) => (Du = e.dynCall_jijiii = w.oi)(n, s, o, a, l, u, d),
              Eu = e.dynCall_viijiiij = (n, s, o, a, l, u, d, f, p, _) => (Eu = e.dynCall_viijiiij = w.pi)(n, s, o, a, l, u, d, f, p, _),
              ku = e.dynCall_vijiiiji = (n, s, o, a, l, u, d, f, p, _) => (ku = e.dynCall_vijiiiji = w.qi)(n, s, o, a, l, u, d, f, p, _),
              Ou = e.dynCall_jiiji = (n, s, o, a, l, u) => (Ou = e.dynCall_jiiji = w.ri)(n, s, o, a, l, u),
              Ru = e.dynCall_viiijij = (n, s, o, a, l, u, d, f, p) => (Ru = e.dynCall_viiijij = w.si)(n, s, o, a, l, u, d, f, p),
              Mu = e.dynCall_viijiij = (n, s, o, a, l, u, d, f, p) => (Mu = e.dynCall_viijiij = w.ti)(n, s, o, a, l, u, d, f, p),
              Uu = e.dynCall_viiiiijj = (n, s, o, a, l, u, d, f, p, _) => (Uu = e.dynCall_viiiiijj = w.ui)(n, s, o, a, l, u, d, f, p, _),
              Nu = e.dynCall_viiijji = (n, s, o, a, l, u, d, f, p) => (Nu = e.dynCall_viiijji = w.vi)(n, s, o, a, l, u, d, f, p),
              Lu = e.dynCall_vijjij = (n, s, o, a, l, u, d, f, p) => (Lu = e.dynCall_vijjij = w.wi)(n, s, o, a, l, u, d, f, p),
              Pu = e.dynCall_vijiji = (n, s, o, a, l, u, d, f) => (Pu = e.dynCall_vijiji = w.xi)(n, s, o, a, l, u, d, f),
              Vu = e.dynCall_jiiiij = (n, s, o, a, l, u, d) => (Vu = e.dynCall_jiiiij = w.yi)(n, s, o, a, l, u, d),
              Hu = e.dynCall_ij = (n, s, o) => (Hu = e.dynCall_ij = w.zi)(n, s, o),
              zu = e.dynCall_jjj = (n, s, o, a, l) => (zu = e.dynCall_jjj = w.Ai)(n, s, o, a, l),
              Wu = e.dynCall_jjiji = (n, s, o, a, l, u, d) => (Wu = e.dynCall_jjiji = w.Bi)(n, s, o, a, l, u, d),
              $u = e.dynCall_jjjd = (n, s, o, a, l, u) => ($u = e.dynCall_jjjd = w.Ci)(n, s, o, a, l, u),
              Yu = e.dynCall_jijj = (n, s, o, a, l, u) => (Yu = e.dynCall_jijj = w.Di)(n, s, o, a, l, u),
              Xu = e.dynCall_ijii = (n, s, o, a, l) => (Xu = e.dynCall_ijii = w.Ei)(n, s, o, a, l),
              Gu = e.dynCall_vjii = (n, s, o, a, l) => (Gu = e.dynCall_vjii = w.Fi)(n, s, o, a, l),
              Ku = e.dynCall_vjiiii = (n, s, o, a, l, u, d) => (Ku = e.dynCall_vjiiii = w.Gi)(n, s, o, a, l, u, d),
              Ju = e.dynCall_viiiiijiii = (n, s, o, a, l, u, d, f, p, _, b) => (Ju = e.dynCall_viiiiijiii = w.Hi)(n, s, o, a, l, u, d, f, p, _, b),
              qu = e.dynCall_ijji = (n, s, o, a, l, u) => (qu = e.dynCall_ijji = w.Ii)(n, s, o, a, l, u),
              Zu = e.dynCall_iiiiijii = (n, s, o, a, l, u, d, f, p) => (Zu = e.dynCall_iiiiijii = w.Ji)(n, s, o, a, l, u, d, f, p),
              Qu = e.dynCall_viiijiii = (n, s, o, a, l, u, d, f, p) => (Qu = e.dynCall_viiijiii = w.Ki)(n, s, o, a, l, u, d, f, p),
              td = e.dynCall_viijij = (n, s, o, a, l, u, d, f) => (td = e.dynCall_viijij = w.Li)(n, s, o, a, l, u, d, f),
              ed = e.dynCall_viiiiiiji = (n, s, o, a, l, u, d, f, p, _) => (ed = e.dynCall_viiiiiiji = w.Mi)(n, s, o, a, l, u, d, f, p, _),
              id = e.dynCall_viiijii = (n, s, o, a, l, u, d, f) => (id = e.dynCall_viiijii = w.Ni)(n, s, o, a, l, u, d, f),
              rd = e.dynCall_viiiijiii = (n, s, o, a, l, u, d, f, p, _) => (rd = e.dynCall_viiiijiii = w.Oi)(n, s, o, a, l, u, d, f, p, _),
              nd = e.dynCall_viiiijii = (n, s, o, a, l, u, d, f, p) => (nd = e.dynCall_viiiijii = w.Pi)(n, s, o, a, l, u, d, f, p),
              sd = e.dynCall_iiijiij = (n, s, o, a, l, u, d, f, p) => (sd = e.dynCall_iiijiij = w.Qi)(n, s, o, a, l, u, d, f, p),
              od = e.dynCall_iiiijjj = (n, s, o, a, l, u, d, f, p, _) => (od = e.dynCall_iiiijjj = w.Ri)(n, s, o, a, l, u, d, f, p, _),
              ad = e.dynCall_jijji = (n, s, o, a, l, u, d) => (ad = e.dynCall_jijji = w.Si)(n, s, o, a, l, u, d),
              ld = e.dynCall_viiijijij = (n, s, o, a, l, u, d, f, p, _, b, g) => (ld = e.dynCall_viiijijij = w.Ti)(n, s, o, a, l, u, d, f, p, _, b, g),
              cd = e.dynCall_jijjjjii = (n, s, o, a, l, u, d, f, p, _, b, g) => (cd = e.dynCall_jijjjjii = w.Ui)(n, s, o, a, l, u, d, f, p, _, b, g),
              ud = e.dynCall_iiiiijij = (n, s, o, a, l, u, d, f, p, _) => (ud = e.dynCall_iiiiijij = w.Vi)(n, s, o, a, l, u, d, f, p, _),
              dd = e.dynCall_iiiiijiii = (n, s, o, a, l, u, d, f, p, _) => (dd = e.dynCall_iiiiijiii = w.Wi)(n, s, o, a, l, u, d, f, p, _),
              fd = e.dynCall_viijjii = (n, s, o, a, l, u, d, f, p) => (fd = e.dynCall_viijjii = w.Xi)(n, s, o, a, l, u, d, f, p),
              hd = e.dynCall_iiiiiiiiiiji = (n, s, o, a, l, u, d, f, p, _, b, g, F) => (hd = e.dynCall_iiiiiiiiiiji = w.Yi)(n, s, o, a, l, u, d, f, p, _, b, g, F),
              pd = e.dynCall_iiiiiiijj = (n, s, o, a, l, u, d, f, p, _, b) => (pd = e.dynCall_iiiiiiijj = w.Zi)(n, s, o, a, l, u, d, f, p, _, b),
              _d = e.dynCall_viiijjii = (n, s, o, a, l, u, d, f, p, _) => (_d = e.dynCall_viiijjii = w._i)(n, s, o, a, l, u, d, f, p, _),
              yd = e.dynCall_jiiijjj = (n, s, o, a, l, u, d, f, p, _) => (yd = e.dynCall_jiiijjj = w.$i)(n, s, o, a, l, u, d, f, p, _),
              md = e.dynCall_viiijijj = (n, s, o, a, l, u, d, f, p, _, b) => (md = e.dynCall_viiijijj = w.aj)(n, s, o, a, l, u, d, f, p, _, b),
              bd = e.dynCall_jiiiiiii = (n, s, o, a, l, u, d, f) => (bd = e.dynCall_jiiiiiii = w.bj)(n, s, o, a, l, u, d, f),
              vd = e.dynCall_jiijj = (n, s, o, a, l, u, d) => (vd = e.dynCall_jiijj = w.cj)(n, s, o, a, l, u, d),
              gd = e.dynCall_jiiijj = (n, s, o, a, l, u, d, f) => (gd = e.dynCall_jiiijj = w.dj)(n, s, o, a, l, u, d, f),
              wd = e.dynCall_iijii = (n, s, o, a, l, u) => (wd = e.dynCall_iijii = w.ej)(n, s, o, a, l, u),
              jd = e.dynCall_iiidj = (n, s, o, a, l, u) => (jd = e.dynCall_iiidj = w.fj)(n, s, o, a, l, u),
              Sd = e.dynCall_iiiiiiiji = (n, s, o, a, l, u, d, f, p, _) => (Sd = e.dynCall_iiiiiiiji = w.gj)(n, s, o, a, l, u, d, f, p, _),
              Id = e.dynCall_iiiiiiiiijiiiiiii = (n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt) => (Id = e.dynCall_iiiiiiiiijiiiiiii = w.hj)(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt),
              Cd = e.dynCall_iiijjiij = (n, s, o, a, l, u, d, f, p, _, b) => (Cd = e.dynCall_iiijjiij = w.ij)(n, s, o, a, l, u, d, f, p, _, b),
              Fd = e.dynCall_iiijjiiji = (n, s, o, a, l, u, d, f, p, _, b, g) => (Fd = e.dynCall_iiijjiiji = w.jj)(n, s, o, a, l, u, d, f, p, _, b, g),
              Bd = e.dynCall_iiiidjj = (n, s, o, a, l, u, d, f, p) => (Bd = e.dynCall_iiiidjj = w.kj)(n, s, o, a, l, u, d, f, p),
              Ad = e.dynCall_iiiiiiiiji = (n, s, o, a, l, u, d, f, p, _, b) => (Ad = e.dynCall_iiiiiiiiji = w.lj)(n, s, o, a, l, u, d, f, p, _, b),
              xd = e.dynCall_iiijiiiij = (n, s, o, a, l, u, d, f, p, _, b) => (xd = e.dynCall_iiijiiiij = w.mj)(n, s, o, a, l, u, d, f, p, _, b),
              Td = e.dynCall_iiijiiij = (n, s, o, a, l, u, d, f, p, _) => (Td = e.dynCall_iiijiiij = w.nj)(n, s, o, a, l, u, d, f, p, _),
              Dd = e.dynCall_iiiiiiiiiiiij = (n, s, o, a, l, u, d, f, p, _, b, g, F, x) => (Dd = e.dynCall_iiiiiiiiiiiij = w.oj)(n, s, o, a, l, u, d, f, p, _, b, g, F, x),
              Ed = e.dynCall_viiiijji = (n, s, o, a, l, u, d, f, p, _) => (Ed = e.dynCall_viiiijji = w.pj)(n, s, o, a, l, u, d, f, p, _),
              kd = e.dynCall_jiiiiii = (n, s, o, a, l, u, d) => (kd = e.dynCall_jiiiiii = w.qj)(n, s, o, a, l, u, d),
              Od = e.dynCall_jiiiijiiii = (n, s, o, a, l, u, d, f, p, _, b) => (Od = e.dynCall_jiiiijiiii = w.rj)(n, s, o, a, l, u, d, f, p, _, b),
              Rd = e.dynCall_jiijjjii = (n, s, o, a, l, u, d, f, p, _, b) => (Rd = e.dynCall_jiijjjii = w.sj)(n, s, o, a, l, u, d, f, p, _, b),
              Md = e.dynCall_vjiiiji = (n, s, o, a, l, u, d, f, p) => (Md = e.dynCall_vjiiiji = w.tj)(n, s, o, a, l, u, d, f, p),
              Ud = e.dynCall_fiijii = (n, s, o, a, l, u, d) => (Ud = e.dynCall_fiijii = w.uj)(n, s, o, a, l, u, d),
              Nd = e.dynCall_diijii = (n, s, o, a, l, u, d) => (Nd = e.dynCall_diijii = w.vj)(n, s, o, a, l, u, d),
              Ld = e.dynCall_iiiiiiijii = (n, s, o, a, l, u, d, f, p, _, b) => (Ld = e.dynCall_iiiiiiijii = w.wj)(n, s, o, a, l, u, d, f, p, _, b),
              Pd = e.dynCall_iiijiii = (n, s, o, a, l, u, d, f) => (Pd = e.dynCall_iiijiii = w.xj)(n, s, o, a, l, u, d, f),
              Vd = e.dynCall_viijiiii = (n, s, o, a, l, u, d, f, p) => (Vd = e.dynCall_viijiiii = w.yj)(n, s, o, a, l, u, d, f, p),
              Hd = e.dynCall_vijiii = (n, s, o, a, l, u, d) => (Hd = e.dynCall_vijiii = w.zj)(n, s, o, a, l, u, d),
              zd = e.dynCall_iijjii = (n, s, o, a, l, u, d, f) => (zd = e.dynCall_iijjii = w.Aj)(n, s, o, a, l, u, d, f),
              Wd = e.dynCall_iijjiii = (n, s, o, a, l, u, d, f, p) => (Wd = e.dynCall_iijjiii = w.Bj)(n, s, o, a, l, u, d, f, p),
              $d = e.dynCall_iiijjiii = (n, s, o, a, l, u, d, f, p, _) => ($d = e.dynCall_iiijjiii = w.Cj)(n, s, o, a, l, u, d, f, p, _),
              Yd = e.dynCall_iijji = (n, s, o, a, l, u, d) => (Yd = e.dynCall_iijji = w.Dj)(n, s, o, a, l, u, d),
              Xd = e.dynCall_vijiiiiii = (n, s, o, a, l, u, d, f, p, _) => (Xd = e.dynCall_vijiiiiii = w.Ej)(n, s, o, a, l, u, d, f, p, _),
              Gd = e.dynCall_vijiiii = (n, s, o, a, l, u, d, f) => (Gd = e.dynCall_vijiiii = w.Fj)(n, s, o, a, l, u, d, f),
              Kd = e.dynCall_iijiiii = (n, s, o, a, l, u, d, f) => (Kd = e.dynCall_iijiiii = w.Gj)(n, s, o, a, l, u, d, f),
              Jd = e.dynCall_vijiiiii = (n, s, o, a, l, u, d, f, p) => (Jd = e.dynCall_vijiiiii = w.Hj)(n, s, o, a, l, u, d, f, p),
              qd = e.dynCall_viiiiijii = (n, s, o, a, l, u, d, f, p, _) => (qd = e.dynCall_viiiiijii = w.Ij)(n, s, o, a, l, u, d, f, p, _),
              Zd = e.dynCall_ijjji = (n, s, o, a, l, u, d, f) => (Zd = e.dynCall_ijjji = w.Jj)(n, s, o, a, l, u, d, f),
              Qd = e.dynCall_viijiiiiii = (n, s, o, a, l, u, d, f, p, _, b) => (Qd = e.dynCall_viijiiiiii = w.Kj)(n, s, o, a, l, u, d, f, p, _, b),
              tf = e.dynCall_jjjji = (n, s, o, a, l, u, d, f) => (tf = e.dynCall_jjjji = w.Lj)(n, s, o, a, l, u, d, f),
              ef = e.dynCall_jjjii = (n, s, o, a, l, u, d) => (ef = e.dynCall_jjjii = w.Mj)(n, s, o, a, l, u, d),
              rf = e.dynCall_jji = (n, s, o, a) => (rf = e.dynCall_jji = w.Nj)(n, s, o, a),
              nf = e.dynCall_viiiijiiiii = (n, s, o, a, l, u, d, f, p, _, b, g) => (nf = e.dynCall_viiiijiiiii = w.Oj)(n, s, o, a, l, u, d, f, p, _, b, g),
              sf = e.dynCall_viiiijiiii = (n, s, o, a, l, u, d, f, p, _, b) => (sf = e.dynCall_viiiijiiii = w.Pj)(n, s, o, a, l, u, d, f, p, _, b),
              of = e.dynCall_iijjijj = (n, s, o, a, l, u, d, f, p, _, b) => (of = e.dynCall_iijjijj = w.Qj)(n, s, o, a, l, u, d, f, p, _, b),
              af = e.dynCall_vj = (n, s, o) => (af = e.dynCall_vj = w.Rj)(n, s, o),
              lf = e.dynCall_viiiijj = (n, s, o, a, l, u, d, f, p) => (lf = e.dynCall_viiiijj = w.Sj)(n, s, o, a, l, u, d, f, p),
              cf = e.dynCall_viiiiijjii = (n, s, o, a, l, u, d, f, p, _, b, g) => (cf = e.dynCall_viiiiijjii = w.Tj)(n, s, o, a, l, u, d, f, p, _, b, g),
              uf = e.dynCall_viiiiiijii = (n, s, o, a, l, u, d, f, p, _, b) => (uf = e.dynCall_viiiiiijii = w.Uj)(n, s, o, a, l, u, d, f, p, _, b),
              df = e.dynCall_viiiiiiijjjji = (n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z) => (df = e.dynCall_viiiiiiijjjji = w.Vj)(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z),
              ff = e.dynCall_vjiii = (n, s, o, a, l, u) => (ff = e.dynCall_vjiii = w.Wj)(n, s, o, a, l, u),
              hf = e.dynCall_ijjiii = (n, s, o, a, l, u, d, f) => (hf = e.dynCall_ijjiii = w.Xj)(n, s, o, a, l, u, d, f),
              pf = e.dynCall_iiijiiji = (n, s, o, a, l, u, d, f, p, _) => (pf = e.dynCall_iiijiiji = w.Yj)(n, s, o, a, l, u, d, f, p, _),
              _f = e.dynCall_iijiij = (n, s, o, a, l, u, d, f) => (_f = e.dynCall_iijiij = w.Zj)(n, s, o, a, l, u, d, f),
              yf = e.dynCall_iijiii = (n, s, o, a, l, u, d) => (yf = e.dynCall_iijiii = w._j)(n, s, o, a, l, u, d),
              mf = e.dynCall_vijijjji = (n, s, o, a, l, u, d, f, p, _, b, g) => (mf = e.dynCall_vijijjji = w.$j)(n, s, o, a, l, u, d, f, p, _, b, g),
              bf = e.dynCall_viijiijj = (n, s, o, a, l, u, d, f, p, _, b) => (bf = e.dynCall_viijiijj = w.ak)(n, s, o, a, l, u, d, f, p, _, b),
              vf = e.dynCall_viijijj = (n, s, o, a, l, u, d, f, p, _) => (vf = e.dynCall_viijijj = w.bk)(n, s, o, a, l, u, d, f, p, _),
              gf = e.dynCall_vijiij = (n, s, o, a, l, u, d, f) => (gf = e.dynCall_vijiij = w.ck)(n, s, o, a, l, u, d, f),
              wf = e.dynCall_viiiiijjji = (n, s, o, a, l, u, d, f, p, _, b, g, F) => (wf = e.dynCall_viiiiijjji = w.dk)(n, s, o, a, l, u, d, f, p, _, b, g, F),
              jf = e.dynCall_iiijiijj = (n, s, o, a, l, u, d, f, p, _, b) => (jf = e.dynCall_iiijiijj = w.ek)(n, s, o, a, l, u, d, f, p, _, b),
              Sf = e.dynCall_viiijijjj = (n, s, o, a, l, u, d, f, p, _, b, g, F) => (Sf = e.dynCall_viiijijjj = w.fk)(n, s, o, a, l, u, d, f, p, _, b, g, F),
              If = e.dynCall_iijiijj = (n, s, o, a, l, u, d, f, p, _) => (If = e.dynCall_iijiijj = w.gk)(n, s, o, a, l, u, d, f, p, _),
              Cf = e.dynCall_iijiiijj = (n, s, o, a, l, u, d, f, p, _, b) => (Cf = e.dynCall_iijiiijj = w.hk)(n, s, o, a, l, u, d, f, p, _, b),
              Ff = e.dynCall_iiijiiijj = (n, s, o, a, l, u, d, f, p, _, b, g) => (Ff = e.dynCall_iiijiiijj = w.ik)(n, s, o, a, l, u, d, f, p, _, b, g),
              Bf = e.dynCall_iiijiiiijj = (n, s, o, a, l, u, d, f, p, _, b, g, F) => (Bf = e.dynCall_iiijiiiijj = w.jk)(n, s, o, a, l, u, d, f, p, _, b, g, F),
              Af = e.dynCall_viiijjjji = (n, s, o, a, l, u, d, f, p, _, b, g, F) => (Af = e.dynCall_viiijjjji = w.kk)(n, s, o, a, l, u, d, f, p, _, b, g, F),
              xf = e.dynCall_vijjiii = (n, s, o, a, l, u, d, f, p) => (xf = e.dynCall_vijjiii = w.lk)(n, s, o, a, l, u, d, f, p),
              Tf = e.dynCall_iiijjji = (n, s, o, a, l, u, d, f, p, _) => (Tf = e.dynCall_iiijjji = w.mk)(n, s, o, a, l, u, d, f, p, _),
              Df = e.dynCall_iiiiiiijji = (n, s, o, a, l, u, d, f, p, _, b, g) => (Df = e.dynCall_iiiiiiijji = w.nk)(n, s, o, a, l, u, d, f, p, _, b, g),
              Ef = e.dynCall_iijjjii = (n, s, o, a, l, u, d, f, p, _) => (Ef = e.dynCall_iijjjii = w.ok)(n, s, o, a, l, u, d, f, p, _),
              kf = e.dynCall_iiiiijjji = (n, s, o, a, l, u, d, f, p, _, b, g) => (kf = e.dynCall_iiiiijjji = w.pk)(n, s, o, a, l, u, d, f, p, _, b, g),
              Of = e.dynCall_iiiiijjj = (n, s, o, a, l, u, d, f, p, _, b) => (Of = e.dynCall_iiiiijjj = w.qk)(n, s, o, a, l, u, d, f, p, _, b),
              Rf = e.dynCall_viiijiji = (n, s, o, a, l, u, d, f, p, _) => (Rf = e.dynCall_viiijiji = w.rk)(n, s, o, a, l, u, d, f, p, _),
              Mf = e.dynCall_jijiiii = (n, s, o, a, l, u, d, f) => (Mf = e.dynCall_jijiiii = w.sk)(n, s, o, a, l, u, d, f),
              Uf = e.dynCall_viijiji = (n, s, o, a, l, u, d, f, p) => (Uf = e.dynCall_viijiji = w.tk)(n, s, o, a, l, u, d, f, p);

          function Dm(n, s) {
            var o = j();
            try {
              return N(n)(s)
            } catch (a) {
              if (S(o), a !== a + 0) throw a;
              I(1, 0)
            }
          }

          function Em(n) {
            var s = j();
            try {
              N(n)()
            } catch (o) {
              if (S(s), o !== o + 0) throw o;
              I(1, 0)
            }
          }

          function km(n, s, o) {
            var a = j();
            try {
              N(n)(s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function Om(n, s) {
            var o = j();
            try {
              N(n)(s)
            } catch (a) {
              if (S(o), a !== a + 0) throw a;
              I(1, 0)
            }
          }

          function Rm(n, s, o) {
            var a = j();
            try {
              return N(n)(s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function Mm(n, s, o, a) {
            var l = j();
            try {
              return N(n)(s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function Um(n, s, o, a, l, u) {
            var d = j();
            try {
              return N(n)(s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function Nm(n, s, o, a) {
            var l = j();
            try {
              N(n)(s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function Lm(n, s, o, a, l) {
            var u = j();
            try {
              return N(n)(s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function Pm(n, s, o, a) {
            var l = j();
            try {
              return N(n)(s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function Vm(n, s, o, a) {
            var l = j();
            try {
              return N(n)(s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function Hm(n, s, o, a, l) {
            var u = j();
            try {
              N(n)(s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function zm(n, s, o, a) {
            var l = j();
            try {
              N(n)(s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function Wm(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return N(n)(s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function $m(n, s, o, a, l, u, d) {
            var f = j();
            try {
              N(n)(s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Ym(n, s, o, a, l, u) {
            var d = j();
            try {
              N(n)(s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function Xm(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return N(n)(s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Gm(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return N(n)(s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function Km(n, s, o, a, l, u, d, f, p, _, b, g, F) {
            var x = j();
            try {
              return N(n)(s, o, a, l, u, d, f, p, _, b, g, F)
            } catch (D) {
              if (S(x), D !== D + 0) throw D;
              I(1, 0)
            }
          }

          function Jm(n) {
            var s = j();
            try {
              return N(n)()
            } catch (o) {
              if (S(s), o !== o + 0) throw o;
              I(1, 0)
            }
          }

          function qm(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              N(n)(s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Zm(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              return N(n)(s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function Qm(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              N(n)(s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function tb(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L) {
            var z = j();
            try {
              N(n)(s, o, a, l, u, d, f, p, _, b, g, F, x, D, L)
            } catch (nt) {
              if (S(z), nt !== nt + 0) throw nt;
              I(1, 0)
            }
          }

          function eb(n, s, o, a, l, u) {
            var d = j();
            try {
              return N(n)(s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function ib(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return N(n)(s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function rb(n, s, o, a, l) {
            var u = j();
            try {
              return N(n)(s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function nb(n, s, o) {
            var a = j();
            try {
              N(n)(s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function sb(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              N(n)(s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function ob(n, s) {
            var o = j();
            try {
              return N(n)(s)
            } catch (a) {
              if (S(o), a !== a + 0) throw a;
              I(1, 0)
            }
          }

          function ab(n, s) {
            var o = j();
            try {
              return N(n)(s)
            } catch (a) {
              if (S(o), a !== a + 0) throw a;
              I(1, 0)
            }
          }

          function lb(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z) {
            var nt = j();
            try {
              return N(n)(s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z)
            } catch (T) {
              if (S(nt), T !== T + 0) throw T;
              I(1, 0)
            }
          }

          function cb(n, s, o) {
            var a = j();
            try {
              return N(n)(s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function ub(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              N(n)(s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function db(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt) {
            var T = j();
            try {
              return N(n)(s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt)
            } catch (U) {
              if (S(T), U !== U + 0) throw U;
              I(1, 0)
            }
          }

          function fb(n, s, o, a) {
            var l = j();
            try {
              N(n)(s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function hb(n, s, o, a) {
            var l = j();
            try {
              N(n)(s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function pb(n, s) {
            var o = j();
            try {
              return N(n)(s)
            } catch (a) {
              if (S(o), a !== a + 0) throw a;
              I(1, 0)
            }
          }

          function _b(n, s) {
            var o = j();
            try {
              return N(n)(s)
            } catch (a) {
              if (S(o), a !== a + 0) throw a;
              I(1, 0)
            }
          }

          function yb(n, s, o, a) {
            var l = j();
            try {
              return N(n)(s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function mb(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L) {
            var z = j();
            try {
              return N(n)(s, o, a, l, u, d, f, p, _, b, g, F, x, D, L)
            } catch (nt) {
              if (S(z), nt !== nt + 0) throw nt;
              I(1, 0)
            }
          }

          function bb(n, s, o, a, l) {
            var u = j();
            try {
              return N(n)(s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function vb(n, s, o, a, l, u) {
            var d = j();
            try {
              N(n)(s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function gb(n, s, o) {
            var a = j();
            try {
              N(n)(s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function wb(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              N(n)(s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function jb(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return N(n)(s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Sb(n, s, o, a, l) {
            var u = j();
            try {
              return N(n)(s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function Ib(n, s, o, a, l) {
            var u = j();
            try {
              return N(n)(s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function Cb(n, s, o, a, l, u, d) {
            var f = j();
            try {
              N(n)(s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Fb(n, s, o) {
            var a = j();
            try {
              return N(n)(s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function Bb(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return N(n)(s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Ab(n, s, o, a, l) {
            var u = j();
            try {
              return N(n)(s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function xb(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return N(n)(s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Tb(n, s, o) {
            var a = j();
            try {
              return N(n)(s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function Db(n, s, o) {
            var a = j();
            try {
              return N(n)(s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function Eb(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              N(n)(s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function kb(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              N(n)(s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function Ob(n, s, o, a, l) {
            var u = j();
            try {
              return Ll(n, s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function Rb(n, s, o, a, l, u, d) {
            var f = j();
            try {
              gc(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Mb(n, s, o, a, l) {
            var u = j();
            try {
              ec(n, s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function Ub(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return Zl(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Nb(n, s, o, a, l) {
            var u = j();
            try {
              return Ql(n, s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function Lb(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              wc(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Pb(n, s) {
            var o = j();
            try {
              return Xl(n, s)
            } catch (a) {
              if (S(o), a !== a + 0) throw a;
              I(1, 0)
            }
          }

          function Vb(n, s, o) {
            var a = j();
            try {
              return Yc(n, s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function Hb(n, s, o, a, l, u, d) {
            var f = j();
            try {
              Hl(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function zb(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return Pl(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Wb(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return Vl(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function $b(n, s, o, a) {
            var l = j();
            try {
              ic(n, s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function Yb(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              lf(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Xb(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              $c(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Gb(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              cf(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function Kb(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              uf(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function Jb(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z) {
            var nt = j();
            try {
              df(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z)
            } catch (T) {
              if (S(nt), T !== T + 0) throw T;
              I(1, 0)
            }
          }

          function qb(n, s, o, a, l, u, d) {
            var f = j();
            try {
              zl(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Zb(n, s, o, a, l) {
            var u = j();
            try {
              Gl(n, s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function Qb(n, s, o, a) {
            var l = j();
            try {
              return Wl(n, s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function t0(n, s, o, a, l, u) {
            var d = j();
            try {
              Jl(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function e0(n, s, o, a, l) {
            var u = j();
            try {
              return $l(n, s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function i0(n, s, o, a, l, u, d) {
            var f = j();
            try {
              Hd(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function r0(n, s, o, a, l, u, d) {
            var f = j();
            try {
              Yl(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function n0(n, s, o, a, l) {
            var u = j();
            try {
              return uu(n, s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function s0(n, s, o, a, l, u) {
            var d = j();
            try {
              return Kl(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function o0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              id(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function a0(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return Zu(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function l0(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return Ld(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function c0(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return nu(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function u0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return hf(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function d0(n) {
            var s = j();
            try {
              return oc(n)
            } catch (o) {
              if (S(s), o !== o + 0) throw o;
              I(1, 0)
            }
          }

          function f0(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return Xc(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function h0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return Gc(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function p0(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return Kc(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function _0(n, s, o, a, l, u) {
            var d = j();
            try {
              ff(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function y0(n, s, o, a, l, u) {
            var d = j();
            try {
              return ql(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function m0(n, s, o, a) {
            var l = j();
            try {
              return Jc(n, s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function b0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              td(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function v0(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              tc(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function g0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              ac(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function w0(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return lc(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function j0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return rc(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function S0(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return sc(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function I0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return nc(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function C0(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return cc(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function F0(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              return uc(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function B0(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              dc(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function A0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return fc(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function x0(n, s, o, a, l, u) {
            var d = j();
            try {
              hc(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function T0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              _c(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function D0(n, s, o, a, l, u, d) {
            var f = j();
            try {
              pc(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function E0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return Vc(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function k0(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              jc(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function O0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return Oc(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function R0(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              yc(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function M0(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              mc(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function U0(n, s, o, a) {
            var l = j();
            try {
              return bc(n, s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function N0(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              vc(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function L0(n, s, o, a, l, u) {
            var d = j();
            try {
              Sc(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function P0(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              Ic(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function V0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              Cc(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function H0(n, s, o, a, l, u, d, f, p, _, b, g, F) {
            var x = j();
            try {
              Fc(n, s, o, a, l, u, d, f, p, _, b, g, F)
            } catch (D) {
              if (S(x), D !== D + 0) throw D;
              I(1, 0)
            }
          }

          function z0(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              xc(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function W0(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L) {
            var z = j();
            try {
              Tc(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L)
            } catch (nt) {
              if (S(z), nt !== nt + 0) throw nt;
              I(1, 0)
            }
          }

          function $0(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt) {
            var T = j();
            try {
              Dc(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt)
            } catch (U) {
              if (S(T), U !== U + 0) throw U;
              I(1, 0)
            }
          }

          function Y0(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              Bc(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function X0(n, s, o, a, l, u, d, f, p, _, b, g, F) {
            var x = j();
            try {
              return Ac(n, s, o, a, l, u, d, f, p, _, b, g, F)
            } catch (D) {
              if (S(x), D !== D + 0) throw D;
              I(1, 0)
            }
          }

          function G0(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              Uc(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function K0(n, s, o, a, l, u, d, f, p, _, b, g, F) {
            var x = j();
            try {
              Rc(n, s, o, a, l, u, d, f, p, _, b, g, F)
            } catch (D) {
              if (S(x), D !== D + 0) throw D;
              I(1, 0)
            }
          }

          function J0(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              Ec(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function q0(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              kc(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Z0(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              au(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Q0(n, s, o, a, l, u, d, f, p, _, b, g, F) {
            var x = j();
            try {
              Mc(n, s, o, a, l, u, d, f, p, _, b, g, F)
            } catch (D) {
              if (S(x), D !== D + 0) throw D;
              I(1, 0)
            }
          }

          function tv(n, s, o) {
            var a = j();
            try {
              return Nc(n, s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function ev(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return Hc(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function iv(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return zc(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function rv(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z) {
            var nt = j();
            try {
              Wc(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z)
            } catch (T) {
              if (S(nt), T !== T + 0) throw T;
              I(1, 0)
            }
          }

          function nv(n, s) {
            var o = j();
            try {
              return Lc(n, s)
            } catch (a) {
              if (S(o), a !== a + 0) throw a;
              I(1, 0)
            }
          }

          function sv(n, s) {
            var o = j();
            try {
              return Pc(n, s)
            } catch (a) {
              if (S(o), a !== a + 0) throw a;
              I(1, 0)
            }
          }

          function ov(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return Zc(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function av(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return Qc(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function lv(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return tu(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function cv(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return qc(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function uv(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return pd(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function dv(n, s, o, a, l, u) {
            var d = j();
            try {
              return eu(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function fv(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              _d(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function hv(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return iu(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function pv(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return ru(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function _v(n, s, o, a, l, u) {
            var d = j();
            try {
              return su(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function yv(n, s, o, a) {
            var l = j();
            try {
              return Tu(n, s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function mv(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return Pd(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function bv(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              ld(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function vv(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              Ru(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function gv(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return ou(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function wv(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return lu(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function jv(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D) {
            var L = j();
            try {
              cu(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D)
            } catch (z) {
              if (S(L), z !== z + 0) throw z;
              I(1, 0)
            }
          }

          function Sv(n, s, o) {
            var a = j();
            try {
              return Hu(n, s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function Iv(n, s, o, a, l, u, d) {
            var f = j();
            try {
              Ku(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Cv(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              Pu(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Fv(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              Lu(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Bv(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              Nu(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Av(n, s, o, a, l, u, d) {
            var f = j();
            try {
              wu(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function xv(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return du(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Tv(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              gu(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Dv(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              vu(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function Ev(n, s, o, a, l, u) {
            var d = j();
            try {
              return Ou(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function kv(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              fu(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Ov(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              ju(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Rv(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D) {
            var L = j();
            try {
              return pu(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D)
            } catch (z) {
              if (S(L), z !== z + 0) throw z;
              I(1, 0)
            }
          }

          function Mv(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return _u(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Uv(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return yu(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Nv(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt, T) {
            var U = j();
            try {
              return hu(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt, T)
            } catch (pt) {
              if (S(U), pt !== pt + 0) throw pt;
              I(1, 0)
            }
          }

          function Lv(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return mu(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Pv(n, s, o, a, l, u) {
            var d = j();
            try {
              return Au(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function Vv(n, s, o, a, l, u) {
            var d = j();
            try {
              bu(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function Hv(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              Su(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function zv(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return Iu(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function Wv(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              Cu(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function $v(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              Fu(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Yv(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              Eu(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Xv(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              ku(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Gv(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return Du(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Kv(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return xu(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Jv(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              Mu(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function qv(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return Bu(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Zv(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return Wu(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Qv(n, s, o, a, l, u) {
            var d = j();
            try {
              return $u(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function tg(n, s, o, a, l) {
            var u = j();
            try {
              return Xu(n, s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function eg(n, s, o, a, l) {
            var u = j();
            try {
              Gu(n, s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function ig(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              Ju(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function rg(n, s, o, a, l) {
            var u = j();
            try {
              return zu(n, s, o, a, l)
            } catch (d) {
              if (S(u), d !== d + 0) throw d;
              I(1, 0)
            }
          }

          function ng(n, s, o, a, l, u) {
            var d = j();
            try {
              return qu(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function sg(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return ad(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function og(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return Vu(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function ag(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              Qu(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function lg(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return od(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function cg(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return sd(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function ug(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              ed(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function dg(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              rd(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function fg(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              nd(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function hg(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              return cd(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function pg(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return ud(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function _g(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return dd(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function yg(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return kd(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function mg(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return Od(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function bg(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return Rd(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function vg(n, s, o, a, l, u, d, f, p, _, b, g, F) {
            var x = j();
            try {
              return hd(n, s, o, a, l, u, d, f, p, _, b, g, F)
            } catch (D) {
              if (S(x), D !== D + 0) throw D;
              I(1, 0)
            }
          }

          function gg(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return yd(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function wg(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              md(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function jg(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              fd(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Sg(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return bd(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Ig(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return vd(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Cg(n, s, o, a, l, u) {
            var d = j();
            try {
              return wd(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function Fg(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return gd(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Bg(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return Sd(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Ag(n, s, o, a, l, u) {
            var d = j();
            try {
              return jd(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function xg(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt) {
            var T = j();
            try {
              return Id(n, s, o, a, l, u, d, f, p, _, b, g, F, x, D, L, z, nt)
            } catch (U) {
              if (S(T), U !== U + 0) throw U;
              I(1, 0)
            }
          }

          function Tg(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return Cd(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function Dg(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              return Fd(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function Eg(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return Bd(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function kg(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return Ad(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function Og(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return xd(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function Rg(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return Td(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Mg(n, s, o, a, l, u, d, f, p, _, b, g, F, x) {
            var D = j();
            try {
              return Dd(n, s, o, a, l, u, d, f, p, _, b, g, F, x)
            } catch (L) {
              if (S(D), L !== L + 0) throw L;
              I(1, 0)
            }
          }

          function Ug(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              Ed(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Ng(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              Md(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Lg(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return Ud(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Pg(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return Nd(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Vg(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              Xd(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Hg(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              Gd(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function zg(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return Kd(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Wg(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              Vd(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function $g(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return zd(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Yg(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              return Wd(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Xg(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return $d(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Gg(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return Yd(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function Kg(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              Jd(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Jg(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              qd(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function qg(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return Zd(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function Zg(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              Qd(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function Qg(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return tf(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function tw(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return ef(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function ew(n, s, o, a) {
            var l = j();
            try {
              return rf(n, s, o, a)
            } catch (u) {
              if (S(l), u !== u + 0) throw u;
              I(1, 0)
            }
          }

          function iw(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              nf(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function rw(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              sf(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function nw(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return of(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function sw(n, s, o) {
            var a = j();
            try {
              af(n, s, o)
            } catch (l) {
              if (S(a), l !== l + 0) throw l;
              I(1, 0)
            }
          }

          function ow(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return pf(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function aw(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return _f(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function lw(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              Uu(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function cw(n, s, o, a, l, u, d) {
            var f = j();
            try {
              return yf(n, s, o, a, l, u, d)
            } catch (p) {
              if (S(f), p !== p + 0) throw p;
              I(1, 0)
            }
          }

          function uw(n, s, o, a, l, u) {
            var d = j();
            try {
              return Yu(n, s, o, a, l, u)
            } catch (f) {
              if (S(d), f !== f + 0) throw f;
              I(1, 0)
            }
          }

          function dw(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              mf(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function fw(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              vf(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function hw(n, s, o, a, l, u, d, f, p, _, b, g, F) {
            var x = j();
            try {
              wf(n, s, o, a, l, u, d, f, p, _, b, g, F)
            } catch (D) {
              if (S(x), D !== D + 0) throw D;
              I(1, 0)
            }
          }

          function pw(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              bf(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function _w(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              gf(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function yw(n, s, o, a, l, u, d, f, p, _, b, g, F) {
            var x = j();
            try {
              return Bf(n, s, o, a, l, u, d, f, p, _, b, g, F)
            } catch (D) {
              if (S(x), D !== D + 0) throw D;
              I(1, 0)
            }
          }

          function mw(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return jf(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function bw(n, s, o, a, l, u, d, f, p, _, b, g, F) {
            var x = j();
            try {
              Sf(n, s, o, a, l, u, d, f, p, _, b, g, F)
            } catch (D) {
              if (S(x), D !== D + 0) throw D;
              I(1, 0)
            }
          }

          function vw(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return If(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function gw(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return Cf(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function ww(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              return Ff(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function jw(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return Tf(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Sw(n, s, o, a, l, u, d, f, p, _, b, g, F) {
            var x = j();
            try {
              Af(n, s, o, a, l, u, d, f, p, _, b, g, F)
            } catch (D) {
              if (S(x), D !== D + 0) throw D;
              I(1, 0)
            }
          }

          function Iw(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              Uf(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Cw(n, s, o, a, l, u, d, f, p) {
            var _ = j();
            try {
              xf(n, s, o, a, l, u, d, f, p)
            } catch (b) {
              if (S(_), b !== b + 0) throw b;
              I(1, 0)
            }
          }

          function Fw(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              return Df(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function Bw(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              Rf(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Aw(n, s, o, a, l, u, d, f) {
            var p = j();
            try {
              return Mf(n, s, o, a, l, u, d, f)
            } catch (_) {
              if (S(p), _ !== _ + 0) throw _;
              I(1, 0)
            }
          }

          function xw(n, s, o, a, l, u, d, f, p, _, b) {
            var g = j();
            try {
              return Of(n, s, o, a, l, u, d, f, p, _, b)
            } catch (F) {
              if (S(g), F !== F + 0) throw F;
              I(1, 0)
            }
          }

          function Tw(n, s, o, a, l, u, d, f, p, _) {
            var b = j();
            try {
              return Ef(n, s, o, a, l, u, d, f, p, _)
            } catch (g) {
              if (S(b), g !== g + 0) throw g;
              I(1, 0)
            }
          }

          function Dw(n, s, o, a, l, u, d, f, p, _, b, g) {
            var F = j();
            try {
              return kf(n, s, o, a, l, u, d, f, p, _, b, g)
            } catch (x) {
              if (S(F), x !== x + 0) throw x;
              I(1, 0)
            }
          }

          function Ew(n) {
            n = Object.assign({}, n);
            var s = a => () => a() >>> 0, o = a => l => a(l) >>> 0;
            return n.__errno_location = s(n.__errno_location), n.lg = o(n.lg), n.pg = s(n.pg), n.rg = o(n.rg), n
          }

          e.stackAlloc = cs, e.stackSave = j, e.stackRestore = S, e.ccall = Vy;
          var us;
          qr = function n() {
            us || Nf(), us || (qr = n)
          };

          function kw() {
            var n = Ol, s = 0, o = 0;
            try {
              var a = n(s, o);
              return Uy(a, !0), a
            } catch (l) {
              return Ny(l)
            }
          }

          function Nf() {
            if (qi > 0 || (Yp(), qi > 0)) return;

            function n() {
              us || (us = !0, e.calledRun = !0, !br && (Xp(), Gp(), r(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), Lf && kw(), Kp()))
            }

            e.setStatus ? (e.setStatus("Running..."), setTimeout(function () {
              setTimeout(function () {
                e.setStatus("")
              }, 1), n()
            }, 1)) : n()
          }

          if (e.preInit) for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); e.preInit.length > 0;) e.preInit.pop()();
          var Lf = !0;
          return e.noInitialRun && (Lf = !1), Nf(), t.ready
        }
      })();
      typeof Ep == "object" && typeof rl == "object" ? rl.exports = Dp : typeof define == "function" && define.amd && define([], () => Dp)
    });
    var Lp = hs((exports, module) => {
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
          }, t.update = function (c) {
            return t.create().update(c)
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
          t.create = function (c) {
            return new HmacSha256(c, i)
          }, t.update = function (c, h) {
            return t.create(c).update(h)
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
            for (var r, c = 0, h, y = i.length, m = this.blocks; c < y;) {
              if (this.hashed && (this.hashed = !1, m[0] = this.block, m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0), t) for (h = this.start; c < y && h < 64; ++c) m[h >> 2] |= i[c] << SHIFT[h++ & 3]; else for (h = this.start; c < y && h < 64; ++c) r = i.charCodeAt(c), r < 128 ? m[h >> 2] |= r << SHIFT[h++ & 3] : r < 2048 ? (m[h >> 2] |= (192 | r >> 6) << SHIFT[h++ & 3], m[h >> 2] |= (128 | r & 63) << SHIFT[h++ & 3]) : r < 55296 || r >= 57344 ? (m[h >> 2] |= (224 | r >> 12) << SHIFT[h++ & 3], m[h >> 2] |= (128 | r >> 6 & 63) << SHIFT[h++ & 3], m[h >> 2] |= (128 | r & 63) << SHIFT[h++ & 3]) : (r = 65536 + ((r & 1023) << 10 | i.charCodeAt(++c) & 1023), m[h >> 2] |= (240 | r >> 18) << SHIFT[h++ & 3], m[h >> 2] |= (128 | r >> 12 & 63) << SHIFT[h++ & 3], m[h >> 2] |= (128 | r >> 6 & 63) << SHIFT[h++ & 3], m[h >> 2] |= (128 | r & 63) << SHIFT[h++ & 3]);
              this.lastByteIndex = h, this.bytes += h - this.start, h >= 64 ? (this.block = m[16], this.start = h - 64, this.hash(), this.hashed = !0) : this.start = h
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
          var i = this.h0, t = this.h1, e = this.h2, r = this.h3, c = this.h4, h = this.h5, y = this.h6, m = this.h7,
              v = this.blocks, C, A, E, k, M, dt, Tt, Ot, Mt, Kt, me;
          for (C = 16; C < 64; ++C) M = v[C - 15], A = (M >>> 7 | M << 25) ^ (M >>> 18 | M << 14) ^ M >>> 3, M = v[C - 2], E = (M >>> 17 | M << 15) ^ (M >>> 19 | M << 13) ^ M >>> 10, v[C] = v[C - 16] + A + v[C - 7] + E << 0;
          for (me = t & e, C = 0; C < 64; C += 4) this.first ? (this.is224 ? (Ot = 300032, M = v[0] - 1413257819, m = M - 150054599 << 0, r = M + 24177077 << 0) : (Ot = 704751109, M = v[0] - 210244248, m = M - 1521486534 << 0, r = M + 143694565 << 0), this.first = !1) : (A = (i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10), E = (c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7), Ot = i & t, k = Ot ^ i & e ^ me, Tt = c & h ^ ~c & y, M = m + E + Tt + K[C] + v[C], dt = A + k, m = r + M << 0, r = M + dt << 0), A = (r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10), E = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7), Mt = r & i, k = Mt ^ r & t ^ Ot, Tt = m & c ^ ~m & h, M = y + E + Tt + K[C + 1] + v[C + 1], dt = A + k, y = e + M << 0, e = M + dt << 0, A = (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10), E = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7), Kt = e & r, k = Kt ^ e & i ^ Mt, Tt = y & m ^ ~y & c, M = h + E + Tt + K[C + 2] + v[C + 2], dt = A + k, h = t + M << 0, t = M + dt << 0, A = (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10), E = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7), me = t & e, k = me ^ t & r ^ Kt, Tt = h & y ^ ~h & m, M = c + E + Tt + K[C + 3] + v[C + 3], dt = A + k, c = i + M << 0, i = M + dt << 0;
          this.h0 = this.h0 + i << 0, this.h1 = this.h1 + t << 0, this.h2 = this.h2 + e << 0, this.h3 = this.h3 + r << 0, this.h4 = this.h4 + c << 0, this.h5 = this.h5 + h << 0, this.h6 = this.h6 + y << 0, this.h7 = this.h7 + m << 0
        }, Sha256.prototype.hex = function () {
          this.finalize();
          var i = this.h0, t = this.h1, e = this.h2, r = this.h3, c = this.h4, h = this.h5, y = this.h6, m = this.h7,
              v = HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[i & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[t & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[e & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[r & 15] + HEX_CHARS[c >> 28 & 15] + HEX_CHARS[c >> 24 & 15] + HEX_CHARS[c >> 20 & 15] + HEX_CHARS[c >> 16 & 15] + HEX_CHARS[c >> 12 & 15] + HEX_CHARS[c >> 8 & 15] + HEX_CHARS[c >> 4 & 15] + HEX_CHARS[c & 15] + HEX_CHARS[h >> 28 & 15] + HEX_CHARS[h >> 24 & 15] + HEX_CHARS[h >> 20 & 15] + HEX_CHARS[h >> 16 & 15] + HEX_CHARS[h >> 12 & 15] + HEX_CHARS[h >> 8 & 15] + HEX_CHARS[h >> 4 & 15] + HEX_CHARS[h & 15] + HEX_CHARS[y >> 28 & 15] + HEX_CHARS[y >> 24 & 15] + HEX_CHARS[y >> 20 & 15] + HEX_CHARS[y >> 16 & 15] + HEX_CHARS[y >> 12 & 15] + HEX_CHARS[y >> 8 & 15] + HEX_CHARS[y >> 4 & 15] + HEX_CHARS[y & 15];
          return this.is224 || (v += HEX_CHARS[m >> 28 & 15] + HEX_CHARS[m >> 24 & 15] + HEX_CHARS[m >> 20 & 15] + HEX_CHARS[m >> 16 & 15] + HEX_CHARS[m >> 12 & 15] + HEX_CHARS[m >> 8 & 15] + HEX_CHARS[m >> 4 & 15] + HEX_CHARS[m & 15]), v
        }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function () {
          this.finalize();
          var i = this.h0, t = this.h1, e = this.h2, r = this.h3, c = this.h4, h = this.h5, y = this.h6, m = this.h7,
              v = [i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255, h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, h & 255, y >> 24 & 255, y >> 16 & 255, y >> 8 & 255, y & 255];
          return this.is224 || v.push(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, m & 255), v
        }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function () {
          this.finalize();
          var i = new ArrayBuffer(this.is224 ? 28 : 32), t = new DataView(i);
          return t.setUint32(0, this.h0), t.setUint32(4, this.h1), t.setUint32(8, this.h2), t.setUint32(12, this.h3), t.setUint32(16, this.h4), t.setUint32(20, this.h5), t.setUint32(24, this.h6), this.is224 || t.setUint32(28, this.h7), i
        };

        function HmacSha256(i, t, e) {
          var r, c = typeof i;
          if (c === "string") {
            var h = [], y = i.length, m = 0, v;
            for (r = 0; r < y; ++r) v = i.charCodeAt(r), v < 128 ? h[m++] = v : v < 2048 ? (h[m++] = 192 | v >> 6, h[m++] = 128 | v & 63) : v < 55296 || v >= 57344 ? (h[m++] = 224 | v >> 12, h[m++] = 128 | v >> 6 & 63, h[m++] = 128 | v & 63) : (v = 65536 + ((v & 1023) << 10 | i.charCodeAt(++r) & 1023), h[m++] = 240 | v >> 18, h[m++] = 128 | v >> 12 & 63, h[m++] = 128 | v >> 6 & 63, h[m++] = 128 | v & 63);
            i = h
          } else if (c === "object") {
            if (i === null) throw new Error(ERROR);
            if (ARRAY_BUFFER && i.constructor === ArrayBuffer) i = new Uint8Array(i); else if (!Array.isArray(i) && (!ARRAY_BUFFER || !ArrayBuffer.isView(i))) throw new Error(ERROR)
          } else throw new Error(ERROR);
          i.length > 64 && (i = new Sha256(t, !0).update(i).array());
          var C = [], A = [];
          for (r = 0; r < 64; ++r) {
            var E = i[r] || 0;
            C[r] = 92 ^ E, A[r] = 54 ^ E
          }
          Sha256.call(this, t, e), this.update(A), this.oKeyPad = C, this.inner = !0, this.sharedMemory = e
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
    var RI = {};
    Zi(RI, {registerWorker: () => zp});

    function $f(i, t) {
      var e = {};
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && t.indexOf(r) < 0 && (e[r] = i[r]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function") for (var c = 0, r = Object.getOwnPropertySymbols(i); c < r.length; c++) t.indexOf(r[c]) < 0 && Object.prototype.propertyIsEnumerable.call(i, r[c]) && (e[r[c]] = i[r[c]]);
      return e
    }

    function R(i, t, e, r) {
      function c(h) {
        return h instanceof e ? h : new e(function (y) {
          y(h)
        })
      }

      return new (e || (e = Promise))(function (h, y) {
        function m(A) {
          try {
            C(r.next(A))
          } catch (E) {
            y(E)
          }
        }

        function v(A) {
          try {
            C(r.throw(A))
          } catch (E) {
            y(E)
          }
        }

        function C(A) {
          A.done ? h(A.value) : c(A.value).then(m, v)
        }

        C((r = r.apply(i, t || [])).next())
      })
    }

    function Wf(i) {
      var t = typeof Symbol == "function" && Symbol.iterator, e = t && i[t], r = 0;
      if (e) return e.call(i);
      if (i && typeof i.length == "number") return {
        next: function () {
          return i && r >= i.length && (i = void 0), {value: i && i[r++], done: !i}
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Z(i) {
      return this instanceof Z ? (this.v = i, this) : new Z(i)
    }

    function ce(i, t, e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var r = e.apply(i, t || []), c, h = [];
      return c = {}, y("next"), y("throw"), y("return"), c[Symbol.asyncIterator] = function () {
        return this
      }, c;

      function y(k) {
        r[k] && (c[k] = function (M) {
          return new Promise(function (dt, Tt) {
            h.push([k, M, dt, Tt]) > 1 || m(k, M)
          })
        })
      }

      function m(k, M) {
        try {
          v(r[k](M))
        } catch (dt) {
          E(h[0][3], dt)
        }
      }

      function v(k) {
        k.value instanceof Z ? Promise.resolve(k.value.v).then(C, A) : E(h[0][2], k)
      }

      function C(k) {
        m("next", k)
      }

      function A(k) {
        m("throw", k)
      }

      function E(k, M) {
        k(M), h.shift(), h.length && m(h[0][0], h[0][1])
      }
    }

    function Ir(i) {
      var t, e;
      return t = {}, r("next"), r("throw", function (c) {
        throw c
      }), r("return"), t[Symbol.iterator] = function () {
        return this
      }, t;

      function r(c, h) {
        t[c] = i[c] ? function (y) {
          return (e = !e) ? {value: Z(i[c](y)), done: !1} : h ? h(y) : y
        } : h
      }
    }

    function Be(i) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t = i[Symbol.asyncIterator], e;
      return t ? t.call(i) : (i = typeof Wf == "function" ? Wf(i) : i[Symbol.iterator](), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function () {
        return this
      }, e);

      function r(h) {
        e[h] = i[h] && function (y) {
          return new Promise(function (m, v) {
            y = i[h](y), c(m, v, y.done, y.value)
          })
        }
      }

      function c(h, y, m, v) {
        Promise.resolve(v).then(function (C) {
          h({value: C, done: m})
        }, y)
      }
    }

    var ua = {};
    Zi(ua, {
      compareArrayLike: () => ca,
      joinUint8Arrays: () => ue,
      memcpy: () => Cr,
      rebaseValueOffsets: () => sn,
      toArrayBufferView: () => st,
      toArrayBufferViewAsyncIterator: () => Te,
      toArrayBufferViewIterator: () => $e,
      toBigInt64Array: () => Qw,
      toBigUint64Array: () => ij,
      toFloat32Array: () => rj,
      toFloat32ArrayAsyncIterator: () => vj,
      toFloat32ArrayIterator: () => dj,
      toFloat64Array: () => nj,
      toFloat64ArrayAsyncIterator: () => gj,
      toFloat64ArrayIterator: () => fj,
      toInt16Array: () => Zw,
      toInt16ArrayAsyncIterator: () => _j,
      toInt16ArrayIterator: () => aj,
      toInt32Array: () => tr,
      toInt32ArrayAsyncIterator: () => yj,
      toInt32ArrayIterator: () => lj,
      toInt8Array: () => qw,
      toInt8ArrayAsyncIterator: () => pj,
      toInt8ArrayIterator: () => oj,
      toUint16Array: () => tj,
      toUint16ArrayAsyncIterator: () => mj,
      toUint16ArrayIterator: () => cj,
      toUint32Array: () => ej,
      toUint32ArrayAsyncIterator: () => bj,
      toUint32ArrayIterator: () => uj,
      toUint8Array: () => J,
      toUint8ArrayAsyncIterator: () => la,
      toUint8ArrayIterator: () => aa,
      toUint8ClampedArray: () => sj,
      toUint8ClampedArrayAsyncIterator: () => wj,
      toUint8ClampedArrayIterator: () => hj
    });
    var Xw = new TextDecoder("utf-8"), rn = i => Xw.decode(i), Gw = new TextEncoder, Di = i => Gw.encode(i);
    var Kw = i => typeof i == "number", Yf = i => typeof i == "boolean", Nt = i => typeof i == "function",
        qt = i => i != null && Object(i) === i, Ae = i => qt(i) && Nt(i.then);
    var xe = i => qt(i) && Nt(i[Symbol.iterator]), ge = i => qt(i) && Nt(i[Symbol.asyncIterator]),
        ps = i => qt(i) && qt(i.schema);
    var _s = i => qt(i) && "done" in i && "value" in i;
    var ys = i => qt(i) && Nt(i.stat) && Kw(i.fd);
    var ms = i => qt(i) && nn(i.body), bs = i => "_getDOMStream" in i && "_getNodeStream" in i,
        Xf = i => qt(i) && Nt(i.abort) && Nt(i.getWriter) && !bs(i),
        nn = i => qt(i) && Nt(i.cancel) && Nt(i.getReader) && !bs(i),
        Gf = i => qt(i) && Nt(i.end) && Nt(i.write) && Yf(i.writable) && !bs(i),
        vs = i => qt(i) && Nt(i.read) && Nt(i.pipe) && Yf(i.readable) && !bs(i),
        Kf = i => qt(i) && Nt(i.clear) && Nt(i.bytes) && Nt(i.position) && Nt(i.setPosition) && Nt(i.capacity) && Nt(i.getBufferIdentifier) && Nt(i.createLong);
    var oa = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;

    function Jw(i) {
      let t = i[0] ? [i[0]] : [], e, r, c, h;
      for (let y, m, v = 0, C = 0, A = i.length; ++v < A;) {
        if (y = t[C], m = i[v], !y || !m || y.buffer !== m.buffer || m.byteOffset < y.byteOffset) {
          m && (t[++C] = m);
          continue
        }
        if ({byteOffset: e, byteLength: c} = y, {byteOffset: r, byteLength: h} = m, e + c < r || r + h < e) {
          m && (t[++C] = m);
          continue
        }
        t[C] = new Uint8Array(y.buffer, e, r - e + h)
      }
      return t
    }

    function Cr(i, t, e = 0, r = t.byteLength) {
      let c = i.byteLength, h = new Uint8Array(i.buffer, i.byteOffset, c),
          y = new Uint8Array(t.buffer, t.byteOffset, Math.min(r, c));
      return h.set(y, e), i
    }

    function ue(i, t) {
      let e = Jw(i), r = e.reduce((A, E) => A + E.byteLength, 0), c, h, y, m = 0, v = -1,
          C = Math.min(t || Number.POSITIVE_INFINITY, r);
      for (let A = e.length; ++v < A;) {
        if (c = e[v], h = c.subarray(0, Math.min(c.length, C - m)), C <= m + h.length) {
          h.length < c.length ? e[v] = c.subarray(h.length) : h.length === c.length && v++, y ? Cr(y, h, m) : y = h;
          break
        }
        Cr(y || (y = new Uint8Array(C)), h, m), m += h.length
      }
      return [y || new Uint8Array(0), e.slice(v), r - (y ? y.byteLength : 0)]
    }

    function st(i, t) {
      let e = _s(t) ? t.value : t;
      return e instanceof i ? i === Uint8Array ? new i(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = Di(e)), e instanceof ArrayBuffer ? new i(e) : e instanceof oa ? new i(e) : Kf(e) ? st(i, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new i(0) : new i(e.buffer, e.byteOffset, e.byteLength / i.BYTES_PER_ELEMENT) : i.from(e)) : new i(0)
    }

    var qw = i => st(Int8Array, i), Zw = i => st(Int16Array, i), tr = i => st(Int32Array, i),
        Qw = i => st(BigInt64Array, i), J = i => st(Uint8Array, i), tj = i => st(Uint16Array, i),
        ej = i => st(Uint32Array, i), ij = i => st(BigUint64Array, i), rj = i => st(Float32Array, i),
        nj = i => st(Float64Array, i), sj = i => st(Uint8ClampedArray, i), sa = i => (i.next(), i);

    function* $e(i, t) {
      let e = function* (c) {
            yield c
          },
          r = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof oa ? e(t) : xe(t) ? t : e(t);
      return yield* Qi(sa(function* (c) {
        let h = null;
        do h = c.next(yield st(i, h)); while (!h.done)
      }(r[Symbol.iterator]()))), new i
    }

    var oj = i => $e(Int8Array, i), aj = i => $e(Int16Array, i), lj = i => $e(Int32Array, i),
        aa = i => $e(Uint8Array, i), cj = i => $e(Uint16Array, i), uj = i => $e(Uint32Array, i),
        dj = i => $e(Float32Array, i), fj = i => $e(Float64Array, i), hj = i => $e(Uint8ClampedArray, i);

    function Te(i, t) {
      return ce(this, arguments, function* () {
        if (Ae(t)) return yield Z(yield Z(yield* Qi(Ir(Be(Te(i, yield Z(t)))))));
        let r = function (y) {
              return ce(this, arguments, function* () {
                yield yield Z(yield Z(y))
              })
            }, c = function (y) {
              return ce(this, arguments, function* () {
                yield Z(yield* Qi(Ir(Be(sa(function* (m) {
                  let v = null;
                  do v = m.next(yield v == null ? void 0 : v.value); while (!v.done)
                }(y[Symbol.iterator]()))))))
              })
            },
            h = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof oa ? r(t) : xe(t) ? c(t) : ge(t) ? t : r(t);
        return yield Z(yield* Qi(Ir(Be(sa(function (y) {
          return ce(this, arguments, function* () {
            let m = null;
            do m = yield Z(y.next(yield yield Z(st(i, m)))); while (!m.done)
          })
        }(h[Symbol.asyncIterator]())))))), yield Z(new i)
      })
    }

    var pj = i => Te(Int8Array, i), _j = i => Te(Int16Array, i), yj = i => Te(Int32Array, i),
        la = i => Te(Uint8Array, i), mj = i => Te(Uint16Array, i), bj = i => Te(Uint32Array, i),
        vj = i => Te(Float32Array, i), gj = i => Te(Float64Array, i), wj = i => Te(Uint8ClampedArray, i);

    function sn(i, t, e) {
      if (i !== 0) {
        e = e.slice(0, t + 1);
        for (let r = -1; ++r <= t;) e[r] += i
      }
      return e
    }

    function ca(i, t) {
      let e = 0, r = i.length;
      if (r !== t.length) return !1;
      if (r > 0) do if (i[e] !== t[e]) return !1; while (++e < r);
      return !0
    }

    var zt = {
      fromIterable(i) {
        return gs(jj(i))
      }, fromAsyncIterable(i) {
        return gs(Sj(i))
      }, fromDOMStream(i) {
        return gs(Ij(i))
      }, fromNodeStream(i) {
        return gs(Cj(i))
      }, toDOMStream(i, t) {
        throw new Error('"toDOMStream" not available in this environment')
      }, toNodeStream(i, t) {
        throw new Error('"toNodeStream" not available in this environment')
      }
    }, gs = i => (i.next(), i);

    function* jj(i) {
      let t, e = !1, r = [], c, h, y, m = 0;

      function v() {
        return h === "peek" ? ue(r, y)[0] : ([c, r, m] = ue(r, y), c)
      }

      ({cmd: h, size: y} = yield null);
      let C = aa(i)[Symbol.iterator]();
      try {
        do if ({
          done: t,
          value: c
        } = Number.isNaN(y - m) ? C.next() : C.next(y - m), !t && c.byteLength > 0 && (r.push(c), m += c.byteLength), t || y <= m) do ({
          cmd: h,
          size: y
        } = yield v()); while (y < m); while (!t)
      } catch (A) {
        (e = !0) && typeof C.throw == "function" && C.throw(A)
      } finally {
        e === !1 && typeof C.return == "function" && C.return(null)
      }
      return null
    }

    function Sj(i) {
      return ce(this, arguments, function* () {
        let e, r = !1, c = [], h, y, m, v = 0;

        function C() {
          return y === "peek" ? ue(c, m)[0] : ([h, c, v] = ue(c, m), h)
        }

        ({cmd: y, size: m} = yield yield Z(null));
        let A = la(i)[Symbol.asyncIterator]();
        try {
          do if ({
            done: e,
            value: h
          } = Number.isNaN(m - v) ? yield Z(A.next()) : yield Z(A.next(m - v)), !e && h.byteLength > 0 && (c.push(h), v += h.byteLength), e || m <= v) do ({
            cmd: y,
            size: m
          } = yield yield Z(C())); while (m < v); while (!e)
        } catch (E) {
          (r = !0) && typeof A.throw == "function" && (yield Z(A.throw(E)))
        } finally {
          r === !1 && typeof A.return == "function" && (yield Z(A.return(new Uint8Array(0))))
        }
        return yield Z(null)
      })
    }

    function Ij(i) {
      return ce(this, arguments, function* () {
        let e = !1, r = !1, c = [], h, y, m, v = 0;

        function C() {
          return y === "peek" ? ue(c, m)[0] : ([h, c, v] = ue(c, m), h)
        }

        ({cmd: y, size: m} = yield yield Z(null));
        let A = new fa(i);
        try {
          do if ({
            done: e,
            value: h
          } = Number.isNaN(m - v) ? yield Z(A.read()) : yield Z(A.read(m - v)), !e && h.byteLength > 0 && (c.push(J(h)), v += h.byteLength), e || m <= v) do ({
            cmd: y,
            size: m
          } = yield yield Z(C())); while (m < v); while (!e)
        } catch (E) {
          (r = !0) && (yield Z(A.cancel(E)))
        } finally {
          r === !1 ? yield Z(A.cancel()) : i.locked && A.releaseLock()
        }
        return yield Z(null)
      })
    }

    var fa = class {
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
        return R(this, void 0, void 0, function* () {
          let {reader: e, source: r} = this;
          e && (yield e.cancel(t).catch(() => {
          })), r && r.locked && this.releaseLock()
        })
      }

      read(t) {
        return R(this, void 0, void 0, function* () {
          if (t === 0) return {done: this.reader == null, value: new Uint8Array(0)};
          let e = yield this.reader.read();
          return !e.done && (e.value = J(e)), e
        })
      }
    }, da = (i, t) => {
      let e = c => r([t, c]), r;
      return [t, e, new Promise(c => (r = c) && i.once(t, e))]
    };

    function Cj(i) {
      return ce(this, arguments, function* () {
        let e = [], r = "error", c = !1, h = null, y, m, v = 0, C = [], A;

        function E() {
          return y === "peek" ? ue(C, m)[0] : ([A, C, v] = ue(C, m), A)
        }

        if ({cmd: y, size: m} = yield yield Z(null), i.isTTY) return yield yield Z(new Uint8Array(0)), yield Z(null);
        try {
          e[0] = da(i, "end"), e[1] = da(i, "error");
          do {
            if (e[2] = da(i, "readable"), [r, h] = yield Z(Promise.race(e.map(M => M[2]))), r === "error") break;
            if ((c = r === "end") || (Number.isFinite(m - v) ? (A = J(i.read(m - v)), A.byteLength < m - v && (A = J(i.read()))) : A = J(i.read()), A.byteLength > 0 && (C.push(A), v += A.byteLength)), c || m <= v) do ({
              cmd: y,
              size: m
            } = yield yield Z(E())); while (m < v)
          } while (!c)
        } finally {
          yield Z(k(e, r === "error" ? h : null))
        }
        return yield Z(null);

        function k(M, dt) {
          return A = C = null, new Promise((Tt, Ot) => {
            for (let [Mt, Kt] of M) i.off(Mt, Kt);
            try {
              let Mt = i.destroy;
              Mt && Mt.call(i, dt), dt = void 0
            } catch (Mt) {
              dt = Mt || dt
            } finally {
              dt != null ? Ot(dt) : Tt()
            }
          })
        }
      })
    }

    var Pt;
    (function (i) {
      i[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2", i[i.V3 = 2] = "V3", i[i.V4 = 3] = "V4", i[i.V5 = 4] = "V5"
    })(Pt || (Pt = {}));
    var Bt;
    (function (i) {
      i[i.Sparse = 0] = "Sparse", i[i.Dense = 1] = "Dense"
    })(Bt || (Bt = {}));
    var St;
    (function (i) {
      i[i.HALF = 0] = "HALF", i[i.SINGLE = 1] = "SINGLE", i[i.DOUBLE = 2] = "DOUBLE"
    })(St || (St = {}));
    var Wt;
    (function (i) {
      i[i.DAY = 0] = "DAY", i[i.MILLISECOND = 1] = "MILLISECOND"
    })(Wt || (Wt = {}));
    var lt;
    (function (i) {
      i[i.SECOND = 0] = "SECOND", i[i.MILLISECOND = 1] = "MILLISECOND", i[i.MICROSECOND = 2] = "MICROSECOND", i[i.NANOSECOND = 3] = "NANOSECOND"
    })(lt || (lt = {}));
    var Zt;
    (function (i) {
      i[i.YEAR_MONTH = 0] = "YEAR_MONTH", i[i.DAY_TIME = 1] = "DAY_TIME", i[i.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO"
    })(Zt || (Zt = {}));
    var ft;
    (function (i) {
      i[i.NONE = 0] = "NONE", i[i.Schema = 1] = "Schema", i[i.DictionaryBatch = 2] = "DictionaryBatch", i[i.RecordBatch = 3] = "RecordBatch", i[i.Tensor = 4] = "Tensor", i[i.SparseTensor = 5] = "SparseTensor"
    })(ft || (ft = {}));
    var B;
    (function (i) {
      i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.Float = 3] = "Float", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct = 13] = "Struct", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Dictionary = -1] = "Dictionary", i[i.Int8 = -2] = "Int8", i[i.Int16 = -3] = "Int16", i[i.Int32 = -4] = "Int32", i[i.Int64 = -5] = "Int64", i[i.Uint8 = -6] = "Uint8", i[i.Uint16 = -7] = "Uint16", i[i.Uint32 = -8] = "Uint32", i[i.Uint64 = -9] = "Uint64", i[i.Float16 = -10] = "Float16", i[i.Float32 = -11] = "Float32", i[i.Float64 = -12] = "Float64", i[i.DateDay = -13] = "DateDay", i[i.DateMillisecond = -14] = "DateMillisecond", i[i.TimestampSecond = -15] = "TimestampSecond", i[i.TimestampMillisecond = -16] = "TimestampMillisecond", i[i.TimestampMicrosecond = -17] = "TimestampMicrosecond", i[i.TimestampNanosecond = -18] = "TimestampNanosecond", i[i.TimeSecond = -19] = "TimeSecond", i[i.TimeMillisecond = -20] = "TimeMillisecond", i[i.TimeMicrosecond = -21] = "TimeMicrosecond", i[i.TimeNanosecond = -22] = "TimeNanosecond", i[i.DenseUnion = -23] = "DenseUnion", i[i.SparseUnion = -24] = "SparseUnion", i[i.IntervalDayTime = -25] = "IntervalDayTime", i[i.IntervalYearMonth = -26] = "IntervalYearMonth"
    })(B || (B = {}));
    var we;
    (function (i) {
      i[i.OFFSET = 0] = "OFFSET", i[i.DATA = 1] = "DATA", i[i.VALIDITY = 2] = "VALIDITY", i[i.TYPE = 3] = "TYPE"
    })(we || (we = {}));
    var xa = {};
    Zi(xa, {clampIndex: () => _S, clampRange: () => cn, createElementComparator: () => Oi});

    function Ye(i) {
      if (i === null) return "null";
      if (i === void 0) return "undefined";
      switch (typeof i) {
        case"number":
          return "".concat(i);
        case"bigint":
          return "".concat(i);
        case"string":
          return '"'.concat(i, '"')
      }
      return typeof i[Symbol.toPrimitive] == "function" ? i[Symbol.toPrimitive]("string") : ArrayBuffer.isView(i) ? i instanceof BigInt64Array || i instanceof BigUint64Array ? "[".concat([...i].map(t => Ye(t)), "]") : "[".concat(i, "]") : ArrayBuffer.isView(i) ? "[".concat(i, "]") : JSON.stringify(i, (t, e) => typeof e == "bigint" ? "".concat(e) : e)
    }

    var pa = {};
    Zi(pa, {BN: () => an, bigNumToBigInt: () => Zf, bigNumToString: () => Ar, isArrowBigNumSymbol: () => Jf});
    var Jf = Symbol.for("isArrowBigNum");

    function De(i, ...t) {
      return t.length === 0 ? Object.setPrototypeOf(st(this.TypedArray, i), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(i, ...t), this.constructor.prototype)
    }

    De.prototype[Jf] = !0;
    De.prototype.toJSON = function () {
      return '"'.concat(Ar(this), '"')
    };
    De.prototype.valueOf = function () {
      return qf(this)
    };
    De.prototype.toString = function () {
      return Ar(this)
    };
    De.prototype[Symbol.toPrimitive] = function (i = "default") {
      switch (i) {
        case"number":
          return qf(this);
        case"string":
          return Ar(this);
        case"default":
          return Zf(this)
      }
      return Ar(this)
    };

    function Fr(...i) {
      return De.apply(this, i)
    }

    function Br(...i) {
      return De.apply(this, i)
    }

    function on(...i) {
      return De.apply(this, i)
    }

    Object.setPrototypeOf(Fr.prototype, Object.create(Int32Array.prototype));
    Object.setPrototypeOf(Br.prototype, Object.create(Uint32Array.prototype));
    Object.setPrototypeOf(on.prototype, Object.create(Uint32Array.prototype));
    Object.assign(Fr.prototype, De.prototype, {
      constructor: Fr,
      signed: !0,
      TypedArray: Int32Array,
      BigIntArray: BigInt64Array
    });
    Object.assign(Br.prototype, De.prototype, {
      constructor: Br,
      signed: !1,
      TypedArray: Uint32Array,
      BigIntArray: BigUint64Array
    });
    Object.assign(on.prototype, De.prototype, {
      constructor: on,
      signed: !0,
      TypedArray: Uint32Array,
      BigIntArray: BigUint64Array
    });

    function qf(i) {
      let {buffer: t, byteOffset: e, length: r, signed: c} = i, h = new BigUint64Array(t, e, r),
          y = c && h.at(-1) & BigInt(1) << BigInt(63), m = BigInt(y ? 1 : 0), v = BigInt(0);
      if (y) {
        for (let C of h) m += ~C * (BigInt(1) << BigInt(32) * v++);
        m *= BigInt(-1)
      } else for (let C of h) m += C * (BigInt(1) << BigInt(32) * v++);
      return m
    }

    var Ar = i => {
      if (i.byteLength === 8) {
        let h = new i.BigIntArray(i.buffer, i.byteOffset, 1);
        return "".concat(h[0])
      }
      if (!i.signed) return ha(i);
      let t = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2);
      if (new Int16Array([t.at(-1)])[0] >= 0) return ha(i);
      t = t.slice();
      let r = 1;
      for (let h = 0; h < t.length; h++) {
        let y = t[h], m = ~y + r;
        t[h] = m, r &= y === 0 ? 1 : 0
      }
      let c = ha(t);
      return "-".concat(c)
    }, Zf = i => i.byteLength === 8 ? new i.BigIntArray(i.buffer, i.byteOffset, 1)[0] : Ar(i);

    function ha(i) {
      let t = "", e = new Uint32Array(2), r = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2),
          c = new Uint32Array((r = new Uint16Array(r).reverse()).buffer), h = -1, y = r.length - 1;
      do {
        for (e[0] = r[h = 0]; h < y;) r[h++] = e[1] = e[0] / 10, e[0] = (e[0] - e[1] * 10 << 16) + r[h];
        r[h] = e[1] = e[0] / 10, e[0] = e[0] - e[1] * 10, t = "".concat(e[0]).concat(t)
      } while (c[0] || c[1] || c[2] || c[3]);
      return t != null ? t : "0"
    }

    var an = class i {
      static new(t, e) {
        switch (e) {
          case!0:
            return new Fr(t);
          case!1:
            return new Br(t)
        }
        switch (t.constructor) {
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case BigInt64Array:
            return new Fr(t)
        }
        return t.byteLength === 16 ? new on(t) : new Br(t)
      }

      static signed(t) {
        return new Fr(t)
      }

      static unsigned(t) {
        return new Br(t)
      }

      static decimal(t) {
        return new on(t)
      }

      constructor(t, e) {
        return i.new(t, e)
      }
    };

    function ee(i) {
      if (typeof i == "bigint" && (i < Number.MIN_SAFE_INTEGER || i > Number.MAX_SAFE_INTEGER)) throw new TypeError("".concat(i, " is not safe to convert to a number."));
      return Number(i)
    }

    var Qf, th, eh, ih, rh, nh, sh, oh, ah, lh, ch, uh, dh, fh, hh, ph, _h, yh, mh, V = class i {
      static isNull(t) {
        return (t == null ? void 0 : t.typeId) === B.Null
      }

      static isInt(t) {
        return (t == null ? void 0 : t.typeId) === B.Int
      }

      static isFloat(t) {
        return (t == null ? void 0 : t.typeId) === B.Float
      }

      static isBinary(t) {
        return (t == null ? void 0 : t.typeId) === B.Binary
      }

      static isUtf8(t) {
        return (t == null ? void 0 : t.typeId) === B.Utf8
      }

      static isBool(t) {
        return (t == null ? void 0 : t.typeId) === B.Bool
      }

      static isDecimal(t) {
        return (t == null ? void 0 : t.typeId) === B.Decimal
      }

      static isDate(t) {
        return (t == null ? void 0 : t.typeId) === B.Date
      }

      static isTime(t) {
        return (t == null ? void 0 : t.typeId) === B.Time
      }

      static isTimestamp(t) {
        return (t == null ? void 0 : t.typeId) === B.Timestamp
      }

      static isInterval(t) {
        return (t == null ? void 0 : t.typeId) === B.Interval
      }

      static isList(t) {
        return (t == null ? void 0 : t.typeId) === B.List
      }

      static isStruct(t) {
        return (t == null ? void 0 : t.typeId) === B.Struct
      }

      static isUnion(t) {
        return (t == null ? void 0 : t.typeId) === B.Union
      }

      static isFixedSizeBinary(t) {
        return (t == null ? void 0 : t.typeId) === B.FixedSizeBinary
      }

      static isFixedSizeList(t) {
        return (t == null ? void 0 : t.typeId) === B.FixedSizeList
      }

      static isMap(t) {
        return (t == null ? void 0 : t.typeId) === B.Map
      }

      static isDictionary(t) {
        return (t == null ? void 0 : t.typeId) === B.Dictionary
      }

      static isDenseUnion(t) {
        return i.isUnion(t) && t.mode === Bt.Dense
      }

      static isSparseUnion(t) {
        return i.isUnion(t) && t.mode === Bt.Sparse
      }

      get typeId() {
        return B.NONE
      }
    };
    Qf = Symbol.toStringTag;
    V[Qf] = (i => (i.children = null, i.ArrayType = Array, i[Symbol.toStringTag] = "DataType"))(V.prototype);
    var Qt = class extends V {
      toString() {
        return "Null"
      }

      get typeId() {
        return B.Null
      }
    };
    th = Symbol.toStringTag;
    Qt[th] = (i => i[Symbol.toStringTag] = "Null")(Qt.prototype);
    var Et = class extends V {
      constructor(t, e) {
        super(), this.isSigned = t, this.bitWidth = e
      }

      get typeId() {
        return B.Int
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
            return this.isSigned ? BigInt64Array : BigUint64Array
        }
        throw new Error("Unrecognized ".concat(this[Symbol.toStringTag], " type"))
      }

      toString() {
        return "".concat(this.isSigned ? "I" : "Ui", "nt").concat(this.bitWidth)
      }
    };
    eh = Symbol.toStringTag;
    Et[eh] = (i => (i.isSigned = null, i.bitWidth = null, i[Symbol.toStringTag] = "Int"))(Et.prototype);
    var ws = class extends Et {
      constructor() {
        super(!0, 8)
      }

      get ArrayType() {
        return Int8Array
      }
    }, js = class extends Et {
      constructor() {
        super(!0, 16)
      }

      get ArrayType() {
        return Int16Array
      }
    }, Xe = class extends Et {
      constructor() {
        super(!0, 32)
      }

      get ArrayType() {
        return Int32Array
      }
    }, Ss = class extends Et {
      constructor() {
        super(!0, 64)
      }

      get ArrayType() {
        return BigInt64Array
      }
    }, Is = class extends Et {
      constructor() {
        super(!1, 8)
      }

      get ArrayType() {
        return Uint8Array
      }
    }, Cs = class extends Et {
      constructor() {
        super(!1, 16)
      }

      get ArrayType() {
        return Uint16Array
      }
    }, Fs = class extends Et {
      constructor() {
        super(!1, 32)
      }

      get ArrayType() {
        return Uint32Array
      }
    }, Bs = class extends Et {
      constructor() {
        super(!1, 64)
      }

      get ArrayType() {
        return BigUint64Array
      }
    };
    Object.defineProperty(ws.prototype, "ArrayType", {value: Int8Array});
    Object.defineProperty(js.prototype, "ArrayType", {value: Int16Array});
    Object.defineProperty(Xe.prototype, "ArrayType", {value: Int32Array});
    Object.defineProperty(Ss.prototype, "ArrayType", {value: BigInt64Array});
    Object.defineProperty(Is.prototype, "ArrayType", {value: Uint8Array});
    Object.defineProperty(Cs.prototype, "ArrayType", {value: Uint16Array});
    Object.defineProperty(Fs.prototype, "ArrayType", {value: Uint32Array});
    Object.defineProperty(Bs.prototype, "ArrayType", {value: BigUint64Array});
    var ie = class extends V {
      constructor(t) {
        super(), this.precision = t
      }

      get typeId() {
        return B.Float
      }

      get ArrayType() {
        switch (this.precision) {
          case St.HALF:
            return Uint16Array;
          case St.SINGLE:
            return Float32Array;
          case St.DOUBLE:
            return Float64Array
        }
        throw new Error("Unrecognized ".concat(this[Symbol.toStringTag], " type"))
      }

      toString() {
        return "Float".concat(this.precision << 5 || 16)
      }
    };
    ih = Symbol.toStringTag;
    ie[ih] = (i => (i.precision = null, i[Symbol.toStringTag] = "Float"))(ie.prototype);
    var As = class extends ie {
      constructor() {
        super(St.HALF)
      }
    }, xs = class extends ie {
      constructor() {
        super(St.SINGLE)
      }
    }, Ts = class extends ie {
      constructor() {
        super(St.DOUBLE)
      }
    };
    Object.defineProperty(As.prototype, "ArrayType", {value: Uint16Array});
    Object.defineProperty(xs.prototype, "ArrayType", {value: Float32Array});
    Object.defineProperty(Ts.prototype, "ArrayType", {value: Float64Array});
    var li = class extends V {
      constructor() {
        super()
      }

      get typeId() {
        return B.Binary
      }

      toString() {
        return "Binary"
      }
    };
    rh = Symbol.toStringTag;
    li[rh] = (i => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Binary"))(li.prototype);
    var ci = class extends V {
      constructor() {
        super()
      }

      get typeId() {
        return B.Utf8
      }

      toString() {
        return "Utf8"
      }
    };
    nh = Symbol.toStringTag;
    ci[nh] = (i => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Utf8"))(ci.prototype);
    var ui = class extends V {
      constructor() {
        super()
      }

      get typeId() {
        return B.Bool
      }

      toString() {
        return "Bool"
      }
    };
    sh = Symbol.toStringTag;
    ui[sh] = (i => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Bool"))(ui.prototype);
    var di = class extends V {
      constructor(t, e, r = 128) {
        super(), this.scale = t, this.precision = e, this.bitWidth = r
      }

      get typeId() {
        return B.Decimal
      }

      toString() {
        return "Decimal[".concat(this.precision, "e").concat(this.scale > 0 ? "+" : "").concat(this.scale, "]")
      }
    };
    oh = Symbol.toStringTag;
    di[oh] = (i => (i.scale = null, i.precision = null, i.ArrayType = Uint32Array, i[Symbol.toStringTag] = "Decimal"))(di.prototype);
    var fi = class extends V {
      constructor(t) {
        super(), this.unit = t
      }

      get typeId() {
        return B.Date
      }

      toString() {
        return "Date".concat((this.unit + 1) * 32, "<").concat(Wt[this.unit], ">")
      }
    };
    ah = Symbol.toStringTag;
    fi[ah] = (i => (i.unit = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Date"))(fi.prototype);
    var Ee = class extends V {
      constructor(t, e) {
        super(), this.unit = t, this.bitWidth = e
      }

      get typeId() {
        return B.Time
      }

      toString() {
        return "Time".concat(this.bitWidth, "<").concat(lt[this.unit], ">")
      }

      get ArrayType() {
        switch (this.bitWidth) {
          case 32:
            return Int32Array;
          case 64:
            return BigInt64Array
        }
        throw new Error("Unrecognized ".concat(this[Symbol.toStringTag], " type"))
      }
    };
    lh = Symbol.toStringTag;
    Ee[lh] = (i => (i.unit = null, i.bitWidth = null, i[Symbol.toStringTag] = "Time"))(Ee.prototype);
    var hi = class extends V {
      constructor(t, e) {
        super(), this.unit = t, this.timezone = e
      }

      get typeId() {
        return B.Timestamp
      }

      toString() {
        return "Timestamp<".concat(lt[this.unit]).concat(this.timezone ? ", ".concat(this.timezone) : "", ">")
      }
    };
    ch = Symbol.toStringTag;
    hi[ch] = (i => (i.unit = null, i.timezone = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Timestamp"))(hi.prototype);
    var pi = class extends V {
      constructor(t) {
        super(), this.unit = t
      }

      get typeId() {
        return B.Interval
      }

      toString() {
        return "Interval<".concat(Zt[this.unit], ">")
      }
    };
    uh = Symbol.toStringTag;
    pi[uh] = (i => (i.unit = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Interval"))(pi.prototype);
    var ke = class extends V {
      constructor(t) {
        super(), this.children = [t]
      }

      get typeId() {
        return B.List
      }

      toString() {
        return "List<".concat(this.valueType, ">")
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
    dh = Symbol.toStringTag;
    ke[dh] = (i => (i.children = null, i[Symbol.toStringTag] = "List"))(ke.prototype);
    var gt = class extends V {
      constructor(t) {
        super(), this.children = t
      }

      get typeId() {
        return B.Struct
      }

      toString() {
        return "Struct<{".concat(this.children.map(t => "".concat(t.name, ":").concat(t.type)).join(", "), "}>")
      }
    };
    fh = Symbol.toStringTag;
    gt[fh] = (i => (i.children = null, i[Symbol.toStringTag] = "Struct"))(gt.prototype);
    var Oe = class extends V {
      constructor(t, e, r) {
        super(), this.mode = t, this.children = r, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((c, h, y) => (c[h] = y) && c || c, Object.create(null))
      }

      get typeId() {
        return B.Union
      }

      toString() {
        return "".concat(this[Symbol.toStringTag], "<").concat(this.children.map(t => "".concat(t.type)).join(" | "), ">")
      }
    };
    hh = Symbol.toStringTag;
    Oe[hh] = (i => (i.mode = null, i.typeIds = null, i.children = null, i.typeIdToChildIndex = null, i.ArrayType = Int8Array, i[Symbol.toStringTag] = "Union"))(Oe.prototype);
    var _i = class extends V {
      constructor(t) {
        super(), this.byteWidth = t
      }

      get typeId() {
        return B.FixedSizeBinary
      }

      toString() {
        return "FixedSizeBinary[".concat(this.byteWidth, "]")
      }
    };
    ph = Symbol.toStringTag;
    _i[ph] = (i => (i.byteWidth = null, i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "FixedSizeBinary"))(_i.prototype);
    var Re = class extends V {
      constructor(t, e) {
        super(), this.listSize = t, this.children = [e]
      }

      get typeId() {
        return B.FixedSizeList
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
        return "FixedSizeList[".concat(this.listSize, "]<").concat(this.valueType, ">")
      }
    };
    _h = Symbol.toStringTag;
    Re[_h] = (i => (i.children = null, i.listSize = null, i[Symbol.toStringTag] = "FixedSizeList"))(Re.prototype);
    var Me = class extends V {
      constructor(t, e = !1) {
        super(), this.children = [t], this.keysSorted = e
      }

      get typeId() {
        return B.Map
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
        return "Map<{".concat(this.children[0].type.children.map(t => "".concat(t.name, ":").concat(t.type)).join(", "), "}>")
      }
    };
    yh = Symbol.toStringTag;
    Me[yh] = (i => (i.children = null, i.keysSorted = null, i[Symbol.toStringTag] = "Map_"))(Me.prototype);
    var Fj = (i => () => ++i)(-1), de = class extends V {
      constructor(t, e, r, c) {
        super(), this.indices = e, this.dictionary = t, this.isOrdered = c || !1, this.id = r == null ? Fj() : ee(r)
      }

      get typeId() {
        return B.Dictionary
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
        return "Dictionary<".concat(this.indices, ", ").concat(this.dictionary, ">")
      }
    };
    mh = Symbol.toStringTag;
    de[mh] = (i => (i.id = null, i.indices = null, i.isOrdered = null, i.dictionary = null, i[Symbol.toStringTag] = "Dictionary"))(de.prototype);

    function fe(i) {
      let t = i;
      switch (i.typeId) {
        case B.Decimal:
          return i.bitWidth / 32;
        case B.Timestamp:
          return 2;
        case B.Date:
          return 1 + t.unit;
        case B.Interval:
          return 1 + t.unit;
        case B.FixedSizeList:
          return t.listSize;
        case B.FixedSizeBinary:
          return t.byteWidth;
        default:
          return 1
      }
    }

    var H = class {
      visitMany(t, ...e) {
        return t.map((r, c) => this.visit(r, ...e.map(h => h[c])))
      }

      visit(...t) {
        return this.getVisitFn(t[0], !1).apply(this, t)
      }

      getVisitFn(t, e = !0) {
        return Bj(this, t, e)
      }

      getVisitFnByTypeId(t, e = !0) {
        return xr(this, t, e)
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

    function Bj(i, t, e = !0) {
      return typeof t == "number" ? xr(i, t, e) : typeof t == "string" && t in B ? xr(i, B[t], e) : t && t instanceof V ? xr(i, bh(t), e) : t != null && t.type && t.type instanceof V ? xr(i, bh(t.type), e) : xr(i, B.NONE, e)
    }

    function xr(i, t, e = !0) {
      let r = null;
      switch (t) {
        case B.Null:
          r = i.visitNull;
          break;
        case B.Bool:
          r = i.visitBool;
          break;
        case B.Int:
          r = i.visitInt;
          break;
        case B.Int8:
          r = i.visitInt8 || i.visitInt;
          break;
        case B.Int16:
          r = i.visitInt16 || i.visitInt;
          break;
        case B.Int32:
          r = i.visitInt32 || i.visitInt;
          break;
        case B.Int64:
          r = i.visitInt64 || i.visitInt;
          break;
        case B.Uint8:
          r = i.visitUint8 || i.visitInt;
          break;
        case B.Uint16:
          r = i.visitUint16 || i.visitInt;
          break;
        case B.Uint32:
          r = i.visitUint32 || i.visitInt;
          break;
        case B.Uint64:
          r = i.visitUint64 || i.visitInt;
          break;
        case B.Float:
          r = i.visitFloat;
          break;
        case B.Float16:
          r = i.visitFloat16 || i.visitFloat;
          break;
        case B.Float32:
          r = i.visitFloat32 || i.visitFloat;
          break;
        case B.Float64:
          r = i.visitFloat64 || i.visitFloat;
          break;
        case B.Utf8:
          r = i.visitUtf8;
          break;
        case B.Binary:
          r = i.visitBinary;
          break;
        case B.FixedSizeBinary:
          r = i.visitFixedSizeBinary;
          break;
        case B.Date:
          r = i.visitDate;
          break;
        case B.DateDay:
          r = i.visitDateDay || i.visitDate;
          break;
        case B.DateMillisecond:
          r = i.visitDateMillisecond || i.visitDate;
          break;
        case B.Timestamp:
          r = i.visitTimestamp;
          break;
        case B.TimestampSecond:
          r = i.visitTimestampSecond || i.visitTimestamp;
          break;
        case B.TimestampMillisecond:
          r = i.visitTimestampMillisecond || i.visitTimestamp;
          break;
        case B.TimestampMicrosecond:
          r = i.visitTimestampMicrosecond || i.visitTimestamp;
          break;
        case B.TimestampNanosecond:
          r = i.visitTimestampNanosecond || i.visitTimestamp;
          break;
        case B.Time:
          r = i.visitTime;
          break;
        case B.TimeSecond:
          r = i.visitTimeSecond || i.visitTime;
          break;
        case B.TimeMillisecond:
          r = i.visitTimeMillisecond || i.visitTime;
          break;
        case B.TimeMicrosecond:
          r = i.visitTimeMicrosecond || i.visitTime;
          break;
        case B.TimeNanosecond:
          r = i.visitTimeNanosecond || i.visitTime;
          break;
        case B.Decimal:
          r = i.visitDecimal;
          break;
        case B.List:
          r = i.visitList;
          break;
        case B.Struct:
          r = i.visitStruct;
          break;
        case B.Union:
          r = i.visitUnion;
          break;
        case B.DenseUnion:
          r = i.visitDenseUnion || i.visitUnion;
          break;
        case B.SparseUnion:
          r = i.visitSparseUnion || i.visitUnion;
          break;
        case B.Dictionary:
          r = i.visitDictionary;
          break;
        case B.Interval:
          r = i.visitInterval;
          break;
        case B.IntervalDayTime:
          r = i.visitIntervalDayTime || i.visitInterval;
          break;
        case B.IntervalYearMonth:
          r = i.visitIntervalYearMonth || i.visitInterval;
          break;
        case B.FixedSizeList:
          r = i.visitFixedSizeList;
          break;
        case B.Map:
          r = i.visitMap;
          break
      }
      if (typeof r == "function") return r;
      if (!e) return () => null;
      throw new Error("Unrecognized type '".concat(B[t], "'"))
    }

    function bh(i) {
      switch (i.typeId) {
        case B.Null:
          return B.Null;
        case B.Int: {
          let {bitWidth: t, isSigned: e} = i;
          switch (t) {
            case 8:
              return e ? B.Int8 : B.Uint8;
            case 16:
              return e ? B.Int16 : B.Uint16;
            case 32:
              return e ? B.Int32 : B.Uint32;
            case 64:
              return e ? B.Int64 : B.Uint64
          }
          return B.Int
        }
        case B.Float:
          switch (i.precision) {
            case St.HALF:
              return B.Float16;
            case St.SINGLE:
              return B.Float32;
            case St.DOUBLE:
              return B.Float64
          }
          return B.Float;
        case B.Binary:
          return B.Binary;
        case B.Utf8:
          return B.Utf8;
        case B.Bool:
          return B.Bool;
        case B.Decimal:
          return B.Decimal;
        case B.Time:
          switch (i.unit) {
            case lt.SECOND:
              return B.TimeSecond;
            case lt.MILLISECOND:
              return B.TimeMillisecond;
            case lt.MICROSECOND:
              return B.TimeMicrosecond;
            case lt.NANOSECOND:
              return B.TimeNanosecond
          }
          return B.Time;
        case B.Timestamp:
          switch (i.unit) {
            case lt.SECOND:
              return B.TimestampSecond;
            case lt.MILLISECOND:
              return B.TimestampMillisecond;
            case lt.MICROSECOND:
              return B.TimestampMicrosecond;
            case lt.NANOSECOND:
              return B.TimestampNanosecond
          }
          return B.Timestamp;
        case B.Date:
          switch (i.unit) {
            case Wt.DAY:
              return B.DateDay;
            case Wt.MILLISECOND:
              return B.DateMillisecond
          }
          return B.Date;
        case B.Interval:
          switch (i.unit) {
            case Zt.DAY_TIME:
              return B.IntervalDayTime;
            case Zt.YEAR_MONTH:
              return B.IntervalYearMonth
          }
          return B.Interval;
        case B.Map:
          return B.Map;
        case B.List:
          return B.List;
        case B.Struct:
          return B.Struct;
        case B.Union:
          switch (i.mode) {
            case Bt.Dense:
              return B.DenseUnion;
            case Bt.Sparse:
              return B.SparseUnion
          }
          return B.Union;
        case B.FixedSizeBinary:
          return B.FixedSizeBinary;
        case B.FixedSizeList:
          return B.FixedSizeList;
        case B.Dictionary:
          return B.Dictionary
      }
      throw new Error("Unrecognized type '".concat(B[i.typeId], "'"))
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
    var _a = {};
    Zi(_a, {float64ToUint16: () => ln, uint16ToFloat64: () => Ds});
    var vh = new Float64Array(1), Tr = new Uint32Array(vh.buffer);

    function Ds(i) {
      let t = (i & 31744) >> 10, e = (i & 1023) / 1024, r = Math.pow(-1, (i & 32768) >> 15);
      switch (t) {
        case 31:
          return r * (e ? Number.NaN : 1 / 0);
        case 0:
          return r * (e ? 6103515625e-14 * e : 0)
      }
      return r * Math.pow(2, t - 15) * (1 + e)
    }

    function ln(i) {
      if (i !== i) return 32256;
      vh[0] = i;
      let t = (Tr[1] & 2147483648) >> 16 & 65535, e = Tr[1] & 2146435072, r = 0;
      return e >= 1089470464 ? Tr[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, r = (Tr[1] & 1048575) >> 10) : e <= 1056964608 ? (r = 1048576 + (Tr[1] & 1048575), r = 1048576 + (r << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, r = (Tr[1] & 1048575) + 512 >> 10), t | e | r & 65535
    }

    var q = class extends H {
    };

    function rt(i) {
      return (t, e, r) => {
        if (t.setValid(e, r != null)) return i(t, e, r)
      }
    }

    var Aj = (i, t, e) => {
          i[t] = Math.trunc(e / 864e5)
        }, ya = (i, t, e) => {
          i[t] = Math.trunc(e % 4294967296), i[t + 1] = Math.trunc(e / 4294967296)
        }, xj = (i, t, e) => {
          i[t] = Math.trunc(e * 1e3 % 4294967296), i[t + 1] = Math.trunc(e * 1e3 / 4294967296)
        }, Tj = (i, t, e) => {
          i[t] = Math.trunc(e * 1e6 % 4294967296), i[t + 1] = Math.trunc(e * 1e6 / 4294967296)
        }, gh = (i, t, e, r) => {
          if (e + 1 < t.length) {
            let {[e]: c, [e + 1]: h} = t;
            i.set(r.subarray(0, h - c), c)
          }
        }, Dj = ({offset: i, values: t}, e, r) => {
          let c = i + e;
          r ? t[c >> 3] |= 1 << c % 8 : t[c >> 3] &= ~(1 << c % 8)
        }, yi = ({values: i}, t, e) => {
          i[t] = e
        }, ma = ({values: i}, t, e) => {
          i[t] = e
        }, wh = ({values: i}, t, e) => {
          i[t] = ln(e)
        }, Ej = (i, t, e) => {
          switch (i.type.precision) {
            case St.HALF:
              return wh(i, t, e);
            case St.SINGLE:
            case St.DOUBLE:
              return ma(i, t, e)
          }
        }, Es = ({values: i}, t, e) => {
          Aj(i, t, e.valueOf())
        }, ks = ({values: i}, t, e) => {
          ya(i, t * 2, e.valueOf())
        }, ba = ({stride: i, values: t}, e, r) => {
          t.set(r.subarray(0, i), i * e)
        }, kj = ({values: i, valueOffsets: t}, e, r) => gh(i, t, e, r), Oj = ({values: i, valueOffsets: t}, e, r) => {
          gh(i, t, e, Di(r))
        }, va = (i, t, e) => {
          i.type.unit === Wt.DAY ? Es(i, t, e) : ks(i, t, e)
        }, Os = ({values: i}, t, e) => ya(i, t * 2, e / 1e3), Rs = ({values: i}, t, e) => ya(i, t * 2, e),
        Ms = ({values: i}, t, e) => xj(i, t * 2, e), Us = ({values: i}, t, e) => Tj(i, t * 2, e), ga = (i, t, e) => {
          switch (i.type.unit) {
            case lt.SECOND:
              return Os(i, t, e);
            case lt.MILLISECOND:
              return Rs(i, t, e);
            case lt.MICROSECOND:
              return Ms(i, t, e);
            case lt.NANOSECOND:
              return Us(i, t, e)
          }
        }, Ns = ({values: i}, t, e) => {
          i[t] = e
        }, Ls = ({values: i}, t, e) => {
          i[t] = e
        }, Ps = ({values: i}, t, e) => {
          i[t] = e
        }, Vs = ({values: i}, t, e) => {
          i[t] = e
        }, wa = (i, t, e) => {
          switch (i.type.unit) {
            case lt.SECOND:
              return Ns(i, t, e);
            case lt.MILLISECOND:
              return Ls(i, t, e);
            case lt.MICROSECOND:
              return Ps(i, t, e);
            case lt.NANOSECOND:
              return Vs(i, t, e)
          }
        }, ja = ({values: i, stride: t}, e, r) => {
          i.set(r.subarray(0, t), t * e)
        }, Rj = (i, t, e) => {
          let r = i.children[0], c = i.valueOffsets, h = $t.getVisitFn(r);
          if (Array.isArray(e)) for (let y = -1, m = c[t], v = c[t + 1]; m < v;) h(r, m++, e[++y]); else for (let y = -1, m = c[t], v = c[t + 1]; m < v;) h(r, m++, e.get(++y))
        }, Mj = (i, t, e) => {
          let r = i.children[0], {valueOffsets: c} = i, h = $t.getVisitFn(r), {[t]: y, [t + 1]: m} = c,
              v = e instanceof Map ? e.entries() : Object.entries(e);
          for (let C of v) if (h(r, y, C), ++y >= m) break
        }, Uj = (i, t) => (e, r, c, h) => r && e(r, i, t[h]), Nj = (i, t) => (e, r, c, h) => r && e(r, i, t.get(h)),
        Lj = (i, t) => (e, r, c, h) => r && e(r, i, t.get(c.name)),
        Pj = (i, t) => (e, r, c, h) => r && e(r, i, t[c.name]), Vj = (i, t, e) => {
          let r = i.type.children.map(h => $t.getVisitFn(h.type)),
              c = e instanceof Map ? Lj(t, e) : e instanceof ct ? Nj(t, e) : Array.isArray(e) ? Uj(t, e) : Pj(t, e);
          i.type.children.forEach((h, y) => c(r[y], i.children[y], h, y))
        }, Hj = (i, t, e) => {
          i.type.mode === Bt.Dense ? jh(i, t, e) : Sh(i, t, e)
        }, jh = (i, t, e) => {
          let r = i.type.typeIdToChildIndex[i.typeIds[t]], c = i.children[r];
          $t.visit(c, i.valueOffsets[t], e)
        }, Sh = (i, t, e) => {
          let r = i.type.typeIdToChildIndex[i.typeIds[t]], c = i.children[r];
          $t.visit(c, t, e)
        }, zj = (i, t, e) => {
          var r;
          (r = i.dictionary) === null || r === void 0 || r.set(i.values[t], e)
        }, Sa = (i, t, e) => {
          i.type.unit === Zt.DAY_TIME ? Hs(i, t, e) : zs(i, t, e)
        }, Hs = ({values: i}, t, e) => {
          i.set(e.subarray(0, 2), 2 * t)
        }, zs = ({values: i}, t, e) => {
          i[t] = e[0] * 12 + e[1] % 12
        }, Wj = (i, t, e) => {
          let {stride: r} = i, c = i.children[0], h = $t.getVisitFn(c);
          if (Array.isArray(e)) for (let y = -1, m = t * r; ++y < r;) h(c, m + y, e[y]); else for (let y = -1, m = t * r; ++y < r;) h(c, m + y, e.get(y))
        };
    q.prototype.visitBool = rt(Dj);
    q.prototype.visitInt = rt(yi);
    q.prototype.visitInt8 = rt(yi);
    q.prototype.visitInt16 = rt(yi);
    q.prototype.visitInt32 = rt(yi);
    q.prototype.visitInt64 = rt(yi);
    q.prototype.visitUint8 = rt(yi);
    q.prototype.visitUint16 = rt(yi);
    q.prototype.visitUint32 = rt(yi);
    q.prototype.visitUint64 = rt(yi);
    q.prototype.visitFloat = rt(Ej);
    q.prototype.visitFloat16 = rt(wh);
    q.prototype.visitFloat32 = rt(ma);
    q.prototype.visitFloat64 = rt(ma);
    q.prototype.visitUtf8 = rt(Oj);
    q.prototype.visitBinary = rt(kj);
    q.prototype.visitFixedSizeBinary = rt(ba);
    q.prototype.visitDate = rt(va);
    q.prototype.visitDateDay = rt(Es);
    q.prototype.visitDateMillisecond = rt(ks);
    q.prototype.visitTimestamp = rt(ga);
    q.prototype.visitTimestampSecond = rt(Os);
    q.prototype.visitTimestampMillisecond = rt(Rs);
    q.prototype.visitTimestampMicrosecond = rt(Ms);
    q.prototype.visitTimestampNanosecond = rt(Us);
    q.prototype.visitTime = rt(wa);
    q.prototype.visitTimeSecond = rt(Ns);
    q.prototype.visitTimeMillisecond = rt(Ls);
    q.prototype.visitTimeMicrosecond = rt(Ps);
    q.prototype.visitTimeNanosecond = rt(Vs);
    q.prototype.visitDecimal = rt(ja);
    q.prototype.visitList = rt(Rj);
    q.prototype.visitStruct = rt(Vj);
    q.prototype.visitUnion = rt(Hj);
    q.prototype.visitDenseUnion = rt(jh);
    q.prototype.visitSparseUnion = rt(Sh);
    q.prototype.visitDictionary = rt(zj);
    q.prototype.visitInterval = rt(Sa);
    q.prototype.visitIntervalDayTime = rt(Hs);
    q.prototype.visitIntervalYearMonth = rt(zs);
    q.prototype.visitFixedSizeList = rt(Wj);
    q.prototype.visitMap = rt(Mj);
    var $t = new q;
    var Ue = Symbol.for("parent"), Dr = Symbol.for("rowIndex"), Ei = class {
      constructor(t, e) {
        return this[Ue] = t, this[Dr] = e, new Proxy(this, new Ca)
      }

      toArray() {
        return Object.values(this.toJSON())
      }

      toJSON() {
        let t = this[Dr], e = this[Ue], r = e.type.children, c = {};
        for (let h = -1, y = r.length; ++h < y;) c[r[h].name] = Rt.visit(e.children[h], t);
        return c
      }

      toString() {
        return "{".concat([...this].map(([t, e]) => "".concat(Ye(t), ": ").concat(Ye(e))).join(", "), "}")
      }

      [Symbol.for("nodejs.util.inspect.custom")]() {
        return this.toString()
      }

      [Symbol.iterator]() {
        return new Ia(this[Ue], this[Dr])
      }
    }, Ia = class {
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
          value: [this.childFields[t].name, Rt.visit(this.children[t], this.rowIndex)]
        }) : {done: !0, value: null}
      }
    };
    Object.defineProperties(Ei.prototype, {
      [Symbol.toStringTag]: {enumerable: !1, configurable: !1, value: "Row"},
      [Ue]: {writable: !0, enumerable: !1, configurable: !1, value: null},
      [Dr]: {writable: !0, enumerable: !1, configurable: !1, value: -1}
    });
    var Ca = class {
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
        return t[Ue].type.children.map(e => e.name)
      }

      has(t, e) {
        return t[Ue].type.children.findIndex(r => r.name === e) !== -1
      }

      getOwnPropertyDescriptor(t, e) {
        if (t[Ue].type.children.findIndex(r => r.name === e) !== -1) return {
          writable: !0,
          enumerable: !0,
          configurable: !0
        }
      }

      get(t, e) {
        if (Reflect.has(t, e)) return t[e];
        let r = t[Ue].type.children.findIndex(c => c.name === e);
        if (r !== -1) {
          let c = Rt.visit(t[Ue].children[r], t[Dr]);
          return Reflect.set(t, e, c), c
        }
      }

      set(t, e, r) {
        let c = t[Ue].type.children.findIndex(h => h.name === e);
        return c !== -1 ? ($t.visit(t[Ue].children[c], t[Dr], r), Reflect.set(t, e, r)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, r) : !1
      }
    };
    var $ = class extends H {
    };

    function tt(i) {
      return (t, e) => t.getValid(e) ? i(t, e) : null
    }

    var $j = (i, t) => 864e5 * i[t], Fa = (i, t) => 4294967296 * i[t + 1] + (i[t] >>> 0),
        Yj = (i, t) => 4294967296 * (i[t + 1] / 1e3) + (i[t] >>> 0) / 1e3,
        Xj = (i, t) => 4294967296 * (i[t + 1] / 1e6) + (i[t] >>> 0) / 1e6, Ih = i => new Date(i),
        Gj = (i, t) => Ih($j(i, t)), Kj = (i, t) => Ih(Fa(i, t)), Jj = (i, t) => null, Ch = (i, t, e) => {
          if (e + 1 >= t.length) return null;
          let r = t[e], c = t[e + 1];
          return i.subarray(r, c)
        }, qj = ({offset: i, values: t}, e) => {
          let r = i + e;
          return (t[r >> 3] & 1 << r % 8) !== 0
        }, Fh = ({values: i}, t) => Gj(i, t), Bh = ({values: i}, t) => Kj(i, t * 2),
        ki = ({stride: i, values: t}, e) => t[i * e], Zj = ({stride: i, values: t}, e) => Ds(t[i * e]),
        Ah = ({values: i}, t) => i[t], Qj = ({stride: i, values: t}, e) => t.subarray(i * e, i * (e + 1)),
        tS = ({values: i, valueOffsets: t}, e) => Ch(i, t, e), eS = ({values: i, valueOffsets: t}, e) => {
          let r = Ch(i, t, e);
          return r !== null ? rn(r) : null
        }, iS = ({values: i}, t) => i[t], rS = ({type: i, values: t}, e) => i.precision !== St.HALF ? t[e] : Ds(t[e]),
        nS = (i, t) => i.type.unit === Wt.DAY ? Fh(i, t) : Bh(i, t), xh = ({values: i}, t) => 1e3 * Fa(i, t * 2),
        Th = ({values: i}, t) => Fa(i, t * 2), Dh = ({values: i}, t) => Yj(i, t * 2),
        Eh = ({values: i}, t) => Xj(i, t * 2), sS = (i, t) => {
          switch (i.type.unit) {
            case lt.SECOND:
              return xh(i, t);
            case lt.MILLISECOND:
              return Th(i, t);
            case lt.MICROSECOND:
              return Dh(i, t);
            case lt.NANOSECOND:
              return Eh(i, t)
          }
        }, kh = ({values: i}, t) => i[t], Oh = ({values: i}, t) => i[t], Rh = ({values: i}, t) => i[t],
        Mh = ({values: i}, t) => i[t], oS = (i, t) => {
          switch (i.type.unit) {
            case lt.SECOND:
              return kh(i, t);
            case lt.MILLISECOND:
              return Oh(i, t);
            case lt.MICROSECOND:
              return Rh(i, t);
            case lt.NANOSECOND:
              return Mh(i, t)
          }
        }, aS = ({values: i, stride: t}, e) => an.decimal(i.subarray(t * e, t * (e + 1))), lS = (i, t) => {
          let {valueOffsets: e, stride: r, children: c} = i, {[t * r]: h, [t * r + 1]: y} = e, v = c[0].slice(h, y - h);
          return new ct([v])
        }, cS = (i, t) => {
          let {valueOffsets: e, children: r} = i, {[t]: c, [t + 1]: h} = e, y = r[0];
          return new Ge(y.slice(c, h - c))
        }, uS = (i, t) => new Ei(i, t), dS = (i, t) => i.type.mode === Bt.Dense ? Uh(i, t) : Nh(i, t), Uh = (i, t) => {
          let e = i.type.typeIdToChildIndex[i.typeIds[t]], r = i.children[e];
          return Rt.visit(r, i.valueOffsets[t])
        }, Nh = (i, t) => {
          let e = i.type.typeIdToChildIndex[i.typeIds[t]], r = i.children[e];
          return Rt.visit(r, t)
        }, fS = (i, t) => {
          var e;
          return (e = i.dictionary) === null || e === void 0 ? void 0 : e.get(i.values[t])
        }, hS = (i, t) => i.type.unit === Zt.DAY_TIME ? Lh(i, t) : Ph(i, t),
        Lh = ({values: i}, t) => i.subarray(2 * t, 2 * (t + 1)), Ph = ({values: i}, t) => {
          let e = i[t], r = new Int32Array(2);
          return r[0] = Math.trunc(e / 12), r[1] = Math.trunc(e % 12), r
        }, pS = (i, t) => {
          let {stride: e, children: r} = i, h = r[0].slice(t * e, e);
          return new ct([h])
        };
    $.prototype.visitNull = tt(Jj);
    $.prototype.visitBool = tt(qj);
    $.prototype.visitInt = tt(iS);
    $.prototype.visitInt8 = tt(ki);
    $.prototype.visitInt16 = tt(ki);
    $.prototype.visitInt32 = tt(ki);
    $.prototype.visitInt64 = tt(Ah);
    $.prototype.visitUint8 = tt(ki);
    $.prototype.visitUint16 = tt(ki);
    $.prototype.visitUint32 = tt(ki);
    $.prototype.visitUint64 = tt(Ah);
    $.prototype.visitFloat = tt(rS);
    $.prototype.visitFloat16 = tt(Zj);
    $.prototype.visitFloat32 = tt(ki);
    $.prototype.visitFloat64 = tt(ki);
    $.prototype.visitUtf8 = tt(eS);
    $.prototype.visitBinary = tt(tS);
    $.prototype.visitFixedSizeBinary = tt(Qj);
    $.prototype.visitDate = tt(nS);
    $.prototype.visitDateDay = tt(Fh);
    $.prototype.visitDateMillisecond = tt(Bh);
    $.prototype.visitTimestamp = tt(sS);
    $.prototype.visitTimestampSecond = tt(xh);
    $.prototype.visitTimestampMillisecond = tt(Th);
    $.prototype.visitTimestampMicrosecond = tt(Dh);
    $.prototype.visitTimestampNanosecond = tt(Eh);
    $.prototype.visitTime = tt(oS);
    $.prototype.visitTimeSecond = tt(kh);
    $.prototype.visitTimeMillisecond = tt(Oh);
    $.prototype.visitTimeMicrosecond = tt(Rh);
    $.prototype.visitTimeNanosecond = tt(Mh);
    $.prototype.visitDecimal = tt(aS);
    $.prototype.visitList = tt(lS);
    $.prototype.visitStruct = tt(uS);
    $.prototype.visitUnion = tt(dS);
    $.prototype.visitDenseUnion = tt(Uh);
    $.prototype.visitSparseUnion = tt(Nh);
    $.prototype.visitDictionary = tt(fS);
    $.prototype.visitInterval = tt(hS);
    $.prototype.visitIntervalDayTime = tt(Lh);
    $.prototype.visitIntervalYearMonth = tt(Ph);
    $.prototype.visitFixedSizeList = tt(pS);
    $.prototype.visitMap = tt(cS);
    var Rt = new $;
    var je = Symbol.for("keys"), Er = Symbol.for("vals"), Ge = class {
      constructor(t) {
        return this[je] = new ct([t.children[0]]).memoize(), this[Er] = t.children[1], new Proxy(this, new Aa)
      }

      [Symbol.iterator]() {
        return new Ba(this[je], this[Er])
      }

      get size() {
        return this[je].length
      }

      toArray() {
        return Object.values(this.toJSON())
      }

      toJSON() {
        let t = this[je], e = this[Er], r = {};
        for (let c = -1, h = t.length; ++c < h;) r[t.get(c)] = Rt.visit(e, c);
        return r
      }

      toString() {
        return "{".concat([...this].map(([t, e]) => "".concat(Ye(t), ": ").concat(Ye(e))).join(", "), "}")
      }

      [Symbol.for("nodejs.util.inspect.custom")]() {
        return this.toString()
      }
    }, Ba = class {
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
          value: [this.keys.get(t), Rt.visit(this.vals, t)]
        })
      }
    }, Aa = class {
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
        return t[je].toArray().map(String)
      }

      has(t, e) {
        return t[je].includes(e)
      }

      getOwnPropertyDescriptor(t, e) {
        if (t[je].indexOf(e) !== -1) return {writable: !0, enumerable: !0, configurable: !0}
      }

      get(t, e) {
        if (Reflect.has(t, e)) return t[e];
        let r = t[je].indexOf(e);
        if (r !== -1) {
          let c = Rt.visit(Reflect.get(t, Er), r);
          return Reflect.set(t, e, c), c
        }
      }

      set(t, e, r) {
        let c = t[je].indexOf(e);
        return c !== -1 ? ($t.visit(Reflect.get(t, Er), c, r), Reflect.set(t, e, r)) : Reflect.has(t, e) ? Reflect.set(t, e, r) : !1
      }
    };
    Object.defineProperties(Ge.prototype, {
      [Symbol.toStringTag]: {enumerable: !1, configurable: !1, value: "Row"},
      [je]: {writable: !0, enumerable: !1, configurable: !1, value: null},
      [Er]: {writable: !0, enumerable: !1, configurable: !1, value: null}
    });

    function _S(i, t, e) {
      let r = i.length, c = t > -1 ? t : r + t % r;
      return e ? e(i, c) : c
    }

    var Vh;

    function cn(i, t, e, r) {
      let {length: c = 0} = i, h = typeof t != "number" ? 0 : t, y = typeof e != "number" ? c : e;
      return h < 0 && (h = (h % c + c) % c), y < 0 && (y = (y % c + c) % c), y < h && (Vh = h, h = y, y = Vh), y > c && (y = c), r ? r(i, h, y) : [h, y]
    }

    var Hh = i => i !== i;

    function Oi(i) {
      if (typeof i !== "object" || i === null) return Hh(i) ? Hh : e => e === i;
      if (i instanceof Date) {
        let e = i.valueOf();
        return r => r instanceof Date ? r.valueOf() === e : !1
      }
      return ArrayBuffer.isView(i) ? e => e ? ca(i, e) : !1 : i instanceof Map ? mS(i) : Array.isArray(i) ? yS(i) : i instanceof ct ? bS(i) : vS(i, !0)
    }

    function yS(i) {
      let t = [];
      for (let e = -1, r = i.length; ++e < r;) t[e] = Oi(i[e]);
      return Ws(t)
    }

    function mS(i) {
      let t = -1, e = [];
      for (let r of i.values()) e[++t] = Oi(r);
      return Ws(e)
    }

    function bS(i) {
      let t = [];
      for (let e = -1, r = i.length; ++e < r;) t[e] = Oi(i.get(e));
      return Ws(t)
    }

    function vS(i, t = !1) {
      let e = Object.keys(i);
      if (!t && e.length === 0) return () => !1;
      let r = [];
      for (let c = -1, h = e.length; ++c < h;) r[c] = Oi(i[e[c]]);
      return Ws(r, e)
    }

    function Ws(i, t) {
      return e => {
        if (!e || typeof e != "object") return !1;
        switch (e.constructor) {
          case Array:
            return gS(i, e);
          case Map:
            return zh(i, e, e.keys());
          case Ge:
          case Ei:
          case Object:
          case void 0:
            return zh(i, e, t || Object.keys(e))
        }
        return e instanceof ct ? wS(i, e) : !1
      }
    }

    function gS(i, t) {
      let e = i.length;
      if (t.length !== e) return !1;
      for (let r = -1; ++r < e;) if (!i[r](t[r])) return !1;
      return !0
    }

    function wS(i, t) {
      let e = i.length;
      if (t.length !== e) return !1;
      for (let r = -1; ++r < e;) if (!i[r](t.get(r))) return !1;
      return !0
    }

    function zh(i, t, e) {
      let r = e[Symbol.iterator](), c = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](),
          h = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator](), y = 0, m = i.length, v = h.next(),
          C = r.next(), A = c.next();
      for (; y < m && !C.done && !A.done && !v.done && !(C.value !== A.value || !i[y](v.value)); ++y, C = r.next(), A = c.next(), v = h.next()) ;
      return y === m && C.done && A.done && v.done ? !0 : (r.return && r.return(), c.return && c.return(), h.return && h.return(), !1)
    }

    var Ta = {};
    Zi(Ta, {
      BitIterator: () => er,
      getBit: () => Wh,
      getBool: () => Ys,
      packBools: () => ir,
      popcnt_array: () => $h,
      popcnt_bit_range: () => un,
      popcnt_uint32: () => $s,
      setBool: () => jS,
      truncateBitmap: () => kr
    });

    function Ys(i, t, e, r) {
      return (e & 1 << r) !== 0
    }

    function Wh(i, t, e, r) {
      return (e & 1 << r) >> r
    }

    function jS(i, t, e) {
      return e ? !!(i[t >> 3] |= 1 << t % 8) || !0 : !(i[t >> 3] &= ~(1 << t % 8)) && !1
    }

    function kr(i, t, e) {
      let r = e.byteLength + 7 & -8;
      if (i > 0 || e.byteLength < r) {
        let c = new Uint8Array(r);
        return c.set(i % 8 === 0 ? e.subarray(i >> 3) : ir(new er(e, i, t, null, Ys)).subarray(0, r)), c
      }
      return e
    }

    function ir(i) {
      let t = [], e = 0, r = 0, c = 0;
      for (let y of i) y && (c |= 1 << r), ++r === 8 && (t[e++] = c, c = r = 0);
      (e === 0 || r > 0) && (t[e++] = c);
      let h = new Uint8Array(t.length + 7 & -8);
      return h.set(t), h
    }

    var er = class {
      constructor(t, e, r, c, h) {
        this.bytes = t, this.length = r, this.context = c, this.get = h, this.bit = e % 8, this.byteIndex = e >> 3, this.byte = t[this.byteIndex++], this.index = 0
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

    function un(i, t, e) {
      if (e - t <= 0) return 0;
      if (e - t < 8) {
        let h = 0;
        for (let y of new er(i, t, e - t, i, Wh)) h += y;
        return h
      }
      let r = e >> 3 << 3, c = t + (t % 8 === 0 ? 0 : 8 - t % 8);
      return un(i, t, c) + un(i, r, e) + $h(i, c >> 3, r - c >> 3)
    }

    function $h(i, t, e) {
      let r = 0, c = Math.trunc(t), h = new DataView(i.buffer, i.byteOffset, i.byteLength),
          y = e === void 0 ? i.byteLength : c + e;
      for (; y - c >= 4;) r += $s(h.getUint32(c)), c += 4;
      for (; y - c >= 2;) r += $s(h.getUint16(c)), c += 2;
      for (; y - c >= 1;) r += $s(h.getUint8(c)), c += 1;
      return r
    }

    function $s(i) {
      let t = Math.trunc(i);
      return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24
    }

    var SS = -1, bt = class i {
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
        let t = 0, {valueOffsets: e, values: r, nullBitmap: c, typeIds: h} = this;
        return e && (t += e.byteLength), r && (t += r.byteLength), c && (t += c.byteLength), h && (t += h.byteLength), this.children.reduce((y, m) => y + m.byteLength, t)
      }

      get nullCount() {
        let t = this._nullCount, e;
        return t <= SS && (e = this.nullBitmap) && (this._nullCount = t = this.length - un(e, this.offset, this.offset + this.length)), t
      }

      constructor(t, e, r, c, h, y = [], m) {
        this.type = t, this.children = y, this.dictionary = m, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(r || 0, 0)), this._nullCount = Math.floor(Math.max(c || 0, -1));
        let v;
        h instanceof i ? (this.stride = h.stride, this.values = h.values, this.typeIds = h.typeIds, this.nullBitmap = h.nullBitmap, this.valueOffsets = h.valueOffsets) : (this.stride = fe(t), h && ((v = h[0]) && (this.valueOffsets = v), (v = h[1]) && (this.values = v), (v = h[2]) && (this.nullBitmap = v), (v = h[3]) && (this.typeIds = v))), this.nullable = this._nullCount !== 0 && this.nullBitmap && this.nullBitmap.byteLength > 0
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
          let {nullBitmap: v} = this._changeLengthAndBackfillNullBitmap(this.length);
          Object.assign(this, {nullBitmap: v, _nullCount: 0})
        }
        let {nullBitmap: r, offset: c} = this, h = c + t >> 3, y = (c + t) % 8, m = r[h] >> y & 1;
        return e ? m === 0 && (r[h] |= 1 << y, this._nullCount = this.nullCount + 1) : m === 1 && (r[h] &= ~(1 << y), this._nullCount = this.nullCount - 1), e
      }

      clone(t = this.type, e = this.offset, r = this.length, c = this._nullCount, h = this, y = this.children) {
        return new i(t, e, r, c, h, y, this.dictionary)
      }

      slice(t, e) {
        let {stride: r, typeId: c, children: h} = this, y = +(this._nullCount === 0) - 1, m = c === 16 ? r : 1,
            v = this._sliceBuffers(t, e, r, c);
        return this.clone(this.type, this.offset + t, e, y, v, h.length === 0 || this.valueOffsets ? h : this._sliceChildren(h, m * t, m * e))
      }

      _changeLengthAndBackfillNullBitmap(t) {
        if (this.typeId === B.Null) return this.clone(this.type, 0, t, 0);
        let {length: e, nullCount: r} = this, c = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
        c[e >> 3] = (1 << e - (e & -8)) - 1, r > 0 && c.set(kr(this.offset, e, this.nullBitmap), 0);
        let h = this.buffers;
        return h[we.VALIDITY] = c, this.clone(this.type, 0, t, r + (t - e), h)
      }

      _sliceBuffers(t, e, r, c) {
        let h, {buffers: y} = this;
        return (h = y[we.TYPE]) && (y[we.TYPE] = h.subarray(t, t + e)), (h = y[we.OFFSET]) && (y[we.OFFSET] = h.subarray(t, t + e + 1)) || (h = y[we.DATA]) && (y[we.DATA] = c === 6 ? h : h.subarray(r * t, r * (t + e))), y
      }

      _sliceChildren(t, e, r) {
        return t.map(c => c.slice(e, r))
      }
    };
    bt.prototype.children = Object.freeze([]);
    var Da = class i extends H {
      visit(t) {
        return this.getVisitFn(t.type).call(this, t)
      }

      visitNull(t) {
        let {["type"]: e, ["offset"]: r = 0, ["length"]: c = 0} = t;
        return new bt(e, r, c, 0)
      }

      visitBool(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.nullBitmap),
            h = st(e.ArrayType, t.data), {["length"]: y = h.length >> 3, ["nullCount"]: m = t.nullBitmap ? -1 : 0} = t;
        return new bt(e, r, y, m, [void 0, h, c])
      }

      visitInt(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.nullBitmap),
            h = st(e.ArrayType, t.data), {["length"]: y = h.length, ["nullCount"]: m = t.nullBitmap ? -1 : 0} = t;
        return new bt(e, r, y, m, [void 0, h, c])
      }

      visitFloat(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.nullBitmap),
            h = st(e.ArrayType, t.data), {["length"]: y = h.length, ["nullCount"]: m = t.nullBitmap ? -1 : 0} = t;
        return new bt(e, r, y, m, [void 0, h, c])
      }

      visitUtf8(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.data), h = J(t.nullBitmap),
            y = tr(t.valueOffsets), {["length"]: m = y.length - 1, ["nullCount"]: v = t.nullBitmap ? -1 : 0} = t;
        return new bt(e, r, m, v, [y, c, h])
      }

      visitBinary(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.data), h = J(t.nullBitmap),
            y = tr(t.valueOffsets), {["length"]: m = y.length - 1, ["nullCount"]: v = t.nullBitmap ? -1 : 0} = t;
        return new bt(e, r, m, v, [y, c, h])
      }

      visitFixedSizeBinary(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.nullBitmap), h = st(e.ArrayType, t.data), {
          ["length"]: y = h.length / fe(e),
          ["nullCount"]: m = t.nullBitmap ? -1 : 0
        } = t;
        return new bt(e, r, y, m, [void 0, h, c])
      }

      visitDate(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.nullBitmap), h = st(e.ArrayType, t.data), {
          ["length"]: y = h.length / fe(e),
          ["nullCount"]: m = t.nullBitmap ? -1 : 0
        } = t;
        return new bt(e, r, y, m, [void 0, h, c])
      }

      visitTimestamp(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.nullBitmap), h = st(e.ArrayType, t.data), {
          ["length"]: y = h.length / fe(e),
          ["nullCount"]: m = t.nullBitmap ? -1 : 0
        } = t;
        return new bt(e, r, y, m, [void 0, h, c])
      }

      visitTime(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.nullBitmap), h = st(e.ArrayType, t.data), {
          ["length"]: y = h.length / fe(e),
          ["nullCount"]: m = t.nullBitmap ? -1 : 0
        } = t;
        return new bt(e, r, y, m, [void 0, h, c])
      }

      visitDecimal(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.nullBitmap), h = st(e.ArrayType, t.data), {
          ["length"]: y = h.length / fe(e),
          ["nullCount"]: m = t.nullBitmap ? -1 : 0
        } = t;
        return new bt(e, r, y, m, [void 0, h, c])
      }

      visitList(t) {
        let {["type"]: e, ["offset"]: r = 0, ["child"]: c} = t, h = J(t.nullBitmap),
            y = tr(t.valueOffsets), {["length"]: m = y.length - 1, ["nullCount"]: v = t.nullBitmap ? -1 : 0} = t;
        return new bt(e, r, m, v, [y, void 0, h], [c])
      }

      visitStruct(t) {
        let {["type"]: e, ["offset"]: r = 0, ["children"]: c = []} = t, h = J(t.nullBitmap), {
          length: y = c.reduce((v, {length: C}) => Math.max(v, C), 0),
          nullCount: m = t.nullBitmap ? -1 : 0
        } = t;
        return new bt(e, r, y, m, [void 0, void 0, h], c)
      }

      visitUnion(t) {
        let {["type"]: e, ["offset"]: r = 0, ["children"]: c = []} = t, h = J(t.nullBitmap),
            y = st(e.ArrayType, t.typeIds), {["length"]: m = y.length, ["nullCount"]: v = t.nullBitmap ? -1 : 0} = t;
        if (V.isSparseUnion(e)) return new bt(e, r, m, v, [void 0, void 0, h, y], c);
        let C = tr(t.valueOffsets);
        return new bt(e, r, m, v, [C, void 0, h, y], c)
      }

      visitDictionary(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.nullBitmap),
            h = st(e.indices.ArrayType, t.data), {["dictionary"]: y = new ct([new i().visit({type: e.dictionary})])} = t, {
              ["length"]: m = h.length,
              ["nullCount"]: v = t.nullBitmap ? -1 : 0
            } = t;
        return new bt(e, r, m, v, [void 0, h, c], [], y)
      }

      visitInterval(t) {
        let {["type"]: e, ["offset"]: r = 0} = t, c = J(t.nullBitmap), h = st(e.ArrayType, t.data), {
          ["length"]: y = h.length / fe(e),
          ["nullCount"]: m = t.nullBitmap ? -1 : 0
        } = t;
        return new bt(e, r, y, m, [void 0, h, c])
      }

      visitFixedSizeList(t) {
        let {["type"]: e, ["offset"]: r = 0, ["child"]: c = new i().visit({type: e.valueType})} = t,
            h = J(t.nullBitmap), {["length"]: y = c.length / fe(e), ["nullCount"]: m = t.nullBitmap ? -1 : 0} = t;
        return new bt(e, r, y, m, [void 0, void 0, h], [c])
      }

      visitMap(t) {
        let {["type"]: e, ["offset"]: r = 0, ["child"]: c = new i().visit({type: e.childType})} = t,
            h = J(t.nullBitmap), y = tr(t.valueOffsets), {
              ["length"]: m = y.length - 1,
              ["nullCount"]: v = t.nullBitmap ? -1 : 0
            } = t;
        return new bt(e, r, m, v, [y, void 0, h], [c])
      }
    };

    function Q(i) {
      return new Da().visit(i)
    }

    var dn = class {
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

    function Xs(i) {
      return i.reduce((t, e) => t + e.nullCount, 0)
    }

    function Gs(i) {
      return i.reduce((t, e, r) => (t[r + 1] = t[r] + e.length, t), new Uint32Array(i.length + 1))
    }

    function Ks(i, t, e, r) {
      let c = [];
      for (let h = -1, y = i.length; ++h < y;) {
        let m = i[h], v = t[h], {length: C} = m;
        if (v >= r) break;
        if (e >= v + C) continue;
        if (v >= e && v + C <= r) {
          c.push(m);
          continue
        }
        let A = Math.max(0, e - v), E = Math.min(r - v, C);
        c.push(m.slice(A, E - A))
      }
      return c.length === 0 && c.push(i[0].slice(0, 0)), c
    }

    function Ea(i, t, e, r) {
      let c = 0, h = 0, y = t.length - 1;
      do {
        if (c >= y - 1) return e < t[y] ? r(i, c, e - t[c]) : null;
        h = c + Math.trunc((y - c) * .5), e < t[h] ? y = h : c = h
      } while (c < y)
    }

    function fn(i, t) {
      return i.getValid(t)
    }

    function Ri(i) {
      function t(e, r, c) {
        return i(e[r], c)
      }

      return function (e) {
        let r = this.data;
        return Ea(r, this._offsets, e, t)
      }
    }

    function Js(i) {
      let t;

      function e(r, c, h) {
        return i(r[c], h, t)
      }

      return function (r, c) {
        let h = this.data;
        t = c;
        let y = Ea(h, this._offsets, r, e);
        return t = void 0, y
      }
    }

    function qs(i) {
      let t;

      function e(r, c, h) {
        let y = h, m = 0, v = 0;
        for (let C = c - 1, A = r.length; ++C < A;) {
          let E = r[C];
          if (~(m = i(E, t, y))) return v + m;
          y = 0, v += E.length
        }
        return -1
      }

      return function (r, c) {
        t = r;
        let h = this.data, y = typeof c != "number" ? e(h, 0, 0) : Ea(h, this._offsets, c, e);
        return t = void 0, y
      }
    }

    var Y = class extends H {
    };

    function IS(i, t) {
      return t === null && i.length > 0 ? 0 : -1
    }

    function CS(i, t) {
      let {nullBitmap: e} = i;
      if (!e || i.nullCount <= 0) return -1;
      let r = 0;
      for (let c of new er(e, i.offset + (t || 0), i.length, e, Ys)) {
        if (!c) return r;
        ++r
      }
      return -1
    }

    function ot(i, t, e) {
      if (t === void 0) return -1;
      if (t === null) return CS(i, e);
      let r = Rt.getVisitFn(i), c = Oi(t);
      for (let h = (e || 0) - 1, y = i.length; ++h < y;) if (c(r(i, h))) return h;
      return -1
    }

    function Yh(i, t, e) {
      let r = Rt.getVisitFn(i), c = Oi(t);
      for (let h = (e || 0) - 1, y = i.length; ++h < y;) if (c(r(i, h))) return h;
      return -1
    }

    Y.prototype.visitNull = IS;
    Y.prototype.visitBool = ot;
    Y.prototype.visitInt = ot;
    Y.prototype.visitInt8 = ot;
    Y.prototype.visitInt16 = ot;
    Y.prototype.visitInt32 = ot;
    Y.prototype.visitInt64 = ot;
    Y.prototype.visitUint8 = ot;
    Y.prototype.visitUint16 = ot;
    Y.prototype.visitUint32 = ot;
    Y.prototype.visitUint64 = ot;
    Y.prototype.visitFloat = ot;
    Y.prototype.visitFloat16 = ot;
    Y.prototype.visitFloat32 = ot;
    Y.prototype.visitFloat64 = ot;
    Y.prototype.visitUtf8 = ot;
    Y.prototype.visitBinary = ot;
    Y.prototype.visitFixedSizeBinary = ot;
    Y.prototype.visitDate = ot;
    Y.prototype.visitDateDay = ot;
    Y.prototype.visitDateMillisecond = ot;
    Y.prototype.visitTimestamp = ot;
    Y.prototype.visitTimestampSecond = ot;
    Y.prototype.visitTimestampMillisecond = ot;
    Y.prototype.visitTimestampMicrosecond = ot;
    Y.prototype.visitTimestampNanosecond = ot;
    Y.prototype.visitTime = ot;
    Y.prototype.visitTimeSecond = ot;
    Y.prototype.visitTimeMillisecond = ot;
    Y.prototype.visitTimeMicrosecond = ot;
    Y.prototype.visitTimeNanosecond = ot;
    Y.prototype.visitDecimal = ot;
    Y.prototype.visitList = ot;
    Y.prototype.visitStruct = ot;
    Y.prototype.visitUnion = ot;
    Y.prototype.visitDenseUnion = Yh;
    Y.prototype.visitSparseUnion = Yh;
    Y.prototype.visitDictionary = ot;
    Y.prototype.visitInterval = ot;
    Y.prototype.visitIntervalDayTime = ot;
    Y.prototype.visitIntervalYearMonth = ot;
    Y.prototype.visitFixedSizeList = ot;
    Y.prototype.visitMap = ot;
    var rr = new Y;
    var X = class extends H {
    };

    function et(i) {
      let {type: t} = i;
      if (i.nullCount === 0 && i.stride === 1 && (t.typeId === B.Timestamp || t instanceof Et && t.bitWidth !== 64 || t instanceof Ee && t.bitWidth !== 64 || t instanceof ie && t.precision !== St.HALF)) return new dn(i.data.length, r => {
        let c = i.data[r];
        return c.values.subarray(0, c.length)[Symbol.iterator]()
      });
      let e = 0;
      return new dn(i.data.length, r => {
        let h = i.data[r].length, y = i.slice(e, e + h);
        return e += h, new ka(y)
      })
    }

    var ka = class {
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
    X.prototype.visitNull = et;
    X.prototype.visitBool = et;
    X.prototype.visitInt = et;
    X.prototype.visitInt8 = et;
    X.prototype.visitInt16 = et;
    X.prototype.visitInt32 = et;
    X.prototype.visitInt64 = et;
    X.prototype.visitUint8 = et;
    X.prototype.visitUint16 = et;
    X.prototype.visitUint32 = et;
    X.prototype.visitUint64 = et;
    X.prototype.visitFloat = et;
    X.prototype.visitFloat16 = et;
    X.prototype.visitFloat32 = et;
    X.prototype.visitFloat64 = et;
    X.prototype.visitUtf8 = et;
    X.prototype.visitBinary = et;
    X.prototype.visitFixedSizeBinary = et;
    X.prototype.visitDate = et;
    X.prototype.visitDateDay = et;
    X.prototype.visitDateMillisecond = et;
    X.prototype.visitTimestamp = et;
    X.prototype.visitTimestampSecond = et;
    X.prototype.visitTimestampMillisecond = et;
    X.prototype.visitTimestampMicrosecond = et;
    X.prototype.visitTimestampNanosecond = et;
    X.prototype.visitTime = et;
    X.prototype.visitTimeSecond = et;
    X.prototype.visitTimeMillisecond = et;
    X.prototype.visitTimeMicrosecond = et;
    X.prototype.visitTimeNanosecond = et;
    X.prototype.visitDecimal = et;
    X.prototype.visitList = et;
    X.prototype.visitStruct = et;
    X.prototype.visitUnion = et;
    X.prototype.visitDenseUnion = et;
    X.prototype.visitSparseUnion = et;
    X.prototype.visitDictionary = et;
    X.prototype.visitInterval = et;
    X.prototype.visitIntervalDayTime = et;
    X.prototype.visitIntervalYearMonth = et;
    X.prototype.visitFixedSizeList = et;
    X.prototype.visitMap = et;
    var Or = new X;
    var FS = (i, t) => i + t, Ke = class extends H {
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
            return t.type.unit === lt.SECOND ? 4 : 8
          }

          visitInterval(t, e) {
            return (t.type.unit + 1) * 4
          }

          visitStruct(t, e) {
            return t.children.reduce((r, c) => r + he.visit(c, e), 0)
          }

          visitFixedSizeBinary(t, e) {
            return t.type.byteWidth
          }

          visitMap(t, e) {
            return 8 + t.children.reduce((r, c) => r + he.visit(c, e), 0)
          }

          visitDictionary(t, e) {
            var r;
            return t.type.indices.bitWidth / 8 + (((r = t.dictionary) === null || r === void 0 ? void 0 : r.getByteLength(t.values[e])) || 0)
          }
        }, BS = ({valueOffsets: i}, t) => 8 + (i[t + 1] - i[t]), AS = ({valueOffsets: i}, t) => 8 + (i[t + 1] - i[t]),
        xS = ({valueOffsets: i, stride: t, children: e}, r) => {
          let c = e[0], {[r * t]: h} = i, {[r * t + 1]: y} = i, m = he.getVisitFn(c.type), v = c.slice(h, y - h), C = 8;
          for (let A = -1, E = y - h; ++A < E;) C += m(v, A);
          return C
        }, TS = ({stride: i, children: t}, e) => {
          let r = t[0], c = r.slice(e * i, i), h = he.getVisitFn(r.type), y = 0;
          for (let m = -1, v = c.length; ++m < v;) y += h(c, m);
          return y
        }, DS = (i, t) => i.type.mode === Bt.Dense ? Xh(i, t) : Gh(i, t),
        Xh = ({type: i, children: t, typeIds: e, valueOffsets: r}, c) => {
          let h = i.typeIdToChildIndex[e[c]];
          return 8 + he.visit(t[h], r[c])
        }, Gh = ({children: i}, t) => 4 + he.visitMany(i, i.map(() => t)).reduce(FS, 0);
    Ke.prototype.visitUtf8 = BS;
    Ke.prototype.visitBinary = AS;
    Ke.prototype.visitList = xS;
    Ke.prototype.visitFixedSizeList = TS;
    Ke.prototype.visitUnion = DS;
    Ke.prototype.visitDenseUnion = Xh;
    Ke.prototype.visitSparseUnion = Gh;
    var he = new Ke;
    var Kh, Jh = {}, qh = {}, ct = class i {
      constructor(t) {
        var e, r, c;
        let h = t[0] instanceof i ? t.flatMap(m => m.data) : t;
        if (h.length === 0 || h.some(m => !(m instanceof bt))) throw new TypeError("Vector constructor expects an Array of Data instances.");
        let y = (e = h[0]) === null || e === void 0 ? void 0 : e.type;
        switch (h.length) {
          case 0:
            this._offsets = [0];
            break;
          case 1: {
            let {get: m, set: v, indexOf: C, byteLength: A} = Jh[y.typeId], E = h[0];
            this.isValid = k => fn(E, k), this.get = k => m(E, k), this.set = (k, M) => v(E, k, M), this.indexOf = k => C(E, k), this.getByteLength = k => A(E, k), this._offsets = [0, E.length];
            break
          }
          default:
            Object.setPrototypeOf(this, qh[y.typeId]), this._offsets = Gs(h);
            break
        }
        this.data = h, this.type = y, this.stride = fe(y), this.numChildren = (c = (r = y.children) === null || r === void 0 ? void 0 : r.length) !== null && c !== void 0 ? c : 0, this.length = this._offsets.at(-1)
      }

      get byteLength() {
        return this._byteLength === -1 && (this._byteLength = this.data.reduce((t, e) => t + e.byteLength, 0)), this._byteLength
      }

      get nullCount() {
        return this._nullCount === -1 && (this._nullCount = Xs(this.data)), this._nullCount
      }

      get ArrayType() {
        return this.type.ArrayType
      }

      get [Symbol.toStringTag]() {
        return "".concat(this.VectorName, "<").concat(this.type[Symbol.toStringTag], ">")
      }

      get VectorName() {
        return "".concat(B[this.type.typeId], "Vector")
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
        return Or.visit(this)
      }

      concat(...t) {
        return new i(this.data.concat(t.flatMap(e => e.data).flat(Number.POSITIVE_INFINITY)))
      }

      slice(t, e) {
        return new i(cn(this, t, e, ({data: r, _offsets: c}, h, y) => Ks(r, c, h, y)))
      }

      toJSON() {
        return [...this]
      }

      toArray() {
        let {type: t, data: e, length: r, stride: c, ArrayType: h} = this;
        switch (t.typeId) {
          case B.Int:
          case B.Float:
          case B.Decimal:
          case B.Time:
          case B.Timestamp:
            switch (e.length) {
              case 0:
                return new h;
              case 1:
                return e[0].values.subarray(0, r * c);
              default:
                return e.reduce((y, {
                  values: m,
                  length: v
                }) => (y.array.set(m.subarray(0, v * c), y.offset), y.offset += v * c, y), {
                  array: new h(r * c),
                  offset: 0
                }).array
            }
        }
        return [...this]
      }

      toString() {
        return "[".concat([...this].join(","), "]")
      }

      getChild(t) {
        var e;
        return this.getChildAt((e = this.type.children) === null || e === void 0 ? void 0 : e.findIndex(r => r.name === t))
      }

      getChildAt(t) {
        return t > -1 && t < this.numChildren ? new i(this.data.map(({children: e}) => e[t])) : null
      }

      get isMemoized() {
        return V.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1
      }

      memoize() {
        if (V.isDictionary(this.type)) {
          let t = new Zs(this.data[0].dictionary), e = this.data.map(r => {
            let c = r.clone();
            return c.dictionary = t, c
          });
          return new i(e)
        }
        return new Zs(this)
      }

      unmemoize() {
        if (V.isDictionary(this.type) && this.isMemoized) {
          let t = this.data[0].dictionary.unmemoize(), e = this.data.map(r => {
            let c = r.clone();
            return c.dictionary = t, c
          });
          return new i(e)
        }
        return this
      }
    };
    Kh = Symbol.toStringTag;
    ct[Kh] = (i => {
      i.type = V.prototype, i.data = [], i.length = 0, i.stride = 1, i.numChildren = 0, i._nullCount = -1, i._byteLength = -1, i._offsets = new Uint32Array([0]), i[Symbol.isConcatSpreadable] = !0;
      let t = Object.keys(B).map(e => B[e]).filter(e => typeof e == "number" && e !== B.NONE);
      for (let e of t) {
        let r = Rt.getVisitFnByTypeId(e), c = $t.getVisitFnByTypeId(e), h = rr.getVisitFnByTypeId(e),
            y = he.getVisitFnByTypeId(e);
        Jh[e] = {get: r, set: c, indexOf: h, byteLength: y}, qh[e] = Object.create(i, {
          isValid: {value: Ri(fn)},
          get: {value: Ri(Rt.getVisitFnByTypeId(e))},
          set: {value: Js($t.getVisitFnByTypeId(e))},
          indexOf: {value: qs(rr.getVisitFnByTypeId(e))},
          getByteLength: {value: Ri(he.getVisitFnByTypeId(e))}
        })
      }
      return "Vector"
    })(ct.prototype);
    var Zs = class i extends ct {
      constructor(t) {
        super(t.data);
        let e = this.get, r = this.set, c = this.slice, h = new Array(this.length);
        Object.defineProperty(this, "get", {
          value(y) {
            let m = h[y];
            if (m !== void 0) return m;
            let v = e.call(this, y);
            return h[y] = v, v
          }
        }), Object.defineProperty(this, "set", {
          value(y, m) {
            r.call(this, y, m), h[y] = m
          }
        }), Object.defineProperty(this, "slice", {value: (y, m) => new i(c.call(this, y, m))}), Object.defineProperty(this, "isMemoized", {value: !0}), Object.defineProperty(this, "unmemoize", {value: () => new ct(this.data)}), Object.defineProperty(this, "memoize", {value: () => this})
      }
    };

    function Zh(i) {
      if (!i || i.length <= 0) return function (c) {
        return !0
      };
      let t = "", e = i.filter(r => r === r);
      return e.length > 0 && (t = "\n    switch (x) {".concat(e.map(r => "\n        case ".concat(ES(r), ":")).join(""), "\n            return false;\n    }")), i.length !== e.length && (t = "if (x !== x) return false;\n".concat(t)), new Function("x", "".concat(t, "\nreturn true;"))
    }

    function ES(i) {
      return typeof i != "bigint" ? Ye(i) : "".concat(Ye(i), "n")
    }

    var Oa = (i, t) => (Math.ceil(i) * t + 63 & -64 || 64) / t,
        kS = (i, t = 0) => i.length >= t ? i.subarray(0, t) : Cr(new i.constructor(t), i, 0), Mi = class {
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
              let e = this.stride, r = this.length * e, c = this.buffer.length;
              r >= c && this._resize(c === 0 ? Oa(r * 1, this.BYTES_PER_ELEMENT) : Oa(r * 2, this.BYTES_PER_ELEMENT))
            }
            return this
          }

          flush(t = this.length) {
            t = Oa(t * this.stride, this.BYTES_PER_ELEMENT);
            let e = kS(this.buffer, t);
            return this.clear(), e
          }

          clear() {
            return this.length = 0, this._resize(0), this
          }

          _resize(t) {
            return this.buffer = Cr(new this.ArrayType(t), this.buffer)
          }
        };
    Mi.prototype.offset = 0;
    var mi = class extends Mi {
      last() {
        return this.get(this.length - 1)
      }

      get(t) {
        return this.buffer[t]
      }

      set(t, e) {
        return this.reserve(t - this.length + 1), this.buffer[t * this.stride] = e, this
      }
    }, Rr = class extends mi {
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
        let {buffer: r} = this.reserve(t - this.length + 1), c = t >> 3, h = t % 8, y = r[c] >> h & 1;
        return e ? y === 0 && (r[c] |= 1 << h, ++this.numValid) : y === 1 && (r[c] &= ~(1 << h), --this.numValid), this
      }

      clear() {
        return this.numValid = 0, super.clear()
      }
    }, Mr = class extends mi {
      constructor(t = new Int32Array(1)) {
        super(t, 1)
      }

      append(t) {
        return this.set(this.length - 1, t)
      }

      set(t, e) {
        let r = this.length - 1, c = this.reserve(t - r + 1).buffer;
        return r < t++ && c.fill(c[r], r, t), c[t] = c[t - 1] + e, this
      }

      flush(t = this.length - 1) {
        return t > this.length && this.set(t - 1, 0), super.flush(t + 1)
      }
    };
    var It = class {
      static throughNode(t) {
        throw new Error('"throughNode" not available in this environment')
      }

      static throughDOM(t) {
        throw new Error('"throughDOM" not available in this environment')
      }

      constructor({type: t, nullValues: e}) {
        this.length = 0, this.finished = !1, this.type = t, this.children = [], this.nullValues = e, this.stride = fe(t), this._nulls = new Rr, e && e.length > 0 && (this._isValid = Zh(e))
      }

      toVector() {
        return new ct([this.flush()])
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
        let t = 0, {_offsets: e, _values: r, _nulls: c, _typeIds: h, children: y} = this;
        return e && (t += e.byteLength), r && (t += r.byteLength), c && (t += c.byteLength), h && (t += h.byteLength), y.reduce((m, v) => m + v.byteLength, t)
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

      addChild(t, e = "".concat(this.numChildren)) {
        throw new Error('Cannot append children to non-nested type "'.concat(this.type, '"'))
      }

      getChildAt(t) {
        return this.children[t] || null
      }

      flush() {
        let t, e, r, c, {type: h, length: y, nullCount: m, _typeIds: v, _offsets: C, _values: A, _nulls: E} = this;
        (e = v == null ? void 0 : v.flush(y)) ? c = C == null ? void 0 : C.flush(y) : (c = C == null ? void 0 : C.flush(y)) ? t = A == null ? void 0 : A.flush(C.last()) : t = A == null ? void 0 : A.flush(y), m > 0 && (r = E == null ? void 0 : E.flush(y));
        let k = this.children.map(M => M.flush());
        return this.clear(), Q({
          type: h,
          length: y,
          nullCount: m,
          children: k,
          child: k[0],
          data: t,
          typeIds: e,
          nullBitmap: r,
          valueOffsets: c
        })
      }

      finish() {
        this.finished = !0;
        for (let t of this.children) t.finish();
        return this
      }

      clear() {
        var t, e, r, c;
        this.length = 0, (t = this._nulls) === null || t === void 0 || t.clear(), (e = this._values) === null || e === void 0 || e.clear(), (r = this._offsets) === null || r === void 0 || r.clear(), (c = this._typeIds) === null || c === void 0 || c.clear();
        for (let h of this.children) h.clear();
        return this
      }
    };
    It.prototype.length = 1;
    It.prototype.stride = 1;
    It.prototype.children = null;
    It.prototype.finished = !1;
    It.prototype.nullValues = null;
    It.prototype._isValid = () => !0;
    var Vt = class extends It {
      constructor(t) {
        super(t), this._values = new mi(new this.ArrayType(0), this.stride)
      }

      setValue(t, e) {
        let r = this._values;
        return r.reserve(t - r.length + 1), super.setValue(t, e)
      }
    }, Je = class extends It {
      constructor(t) {
        super(t), this._pendingLength = 0, this._offsets = new Mr
      }

      setValue(t, e) {
        let r = this._pending || (this._pending = new Map), c = r.get(t);
        c && (this._pendingLength -= c.length), this._pendingLength += e instanceof Ge ? e[je].length : e.length, r.set(t, e)
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
    var nr = class {
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

      static createBlock(t, e, r, c) {
        return t.prep(8, 24), t.writeInt64(BigInt(c != null ? c : 0)), t.pad(4), t.writeInt32(r), t.writeInt64(BigInt(e != null ? e : 0)), t.offset()
      }
    };
    var qe = new Int32Array(2), Qs = new Float32Array(qe.buffer), to = new Float64Array(qe.buffer),
        Ur = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
    var hn;
    (function (i) {
      i[i.UTF8_BYTES = 1] = "UTF8_BYTES", i[i.UTF16_STRING = 2] = "UTF16_STRING"
    })(hn || (hn = {}));
    var pe = class i {
      constructor(t) {
        this.bytes_ = t, this.position_ = 0, this.text_decoder_ = new TextDecoder
      }

      static allocate(t) {
        return new i(new Uint8Array(t))
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
        return BigInt.asIntN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)))
      }

      readUint64(t) {
        return BigInt.asUintN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)))
      }

      readFloat32(t) {
        return qe[0] = this.readInt32(t), Qs[0]
      }

      readFloat64(t) {
        return qe[Ur ? 0 : 1] = this.readInt32(t), qe[Ur ? 1 : 0] = this.readInt32(t + 4), to[0]
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
        this.writeInt32(t, Number(BigInt.asIntN(32, e))), this.writeInt32(t + 4, Number(BigInt.asIntN(32, e >> BigInt(32))))
      }

      writeUint64(t, e) {
        this.writeUint32(t, Number(BigInt.asUintN(32, e))), this.writeUint32(t + 4, Number(BigInt.asUintN(32, e >> BigInt(32))))
      }

      writeFloat32(t, e) {
        Qs[0] = e, this.writeInt32(t, qe[0])
      }

      writeFloat64(t, e) {
        to[0] = e, this.writeInt32(t, qe[Ur ? 0 : 1]), this.writeInt32(t + 4, qe[Ur ? 1 : 0])
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
        let r = this.readInt32(t);
        t += 4;
        let c = this.bytes_.subarray(t, t + r);
        return e === hn.UTF8_BYTES ? c : this.text_decoder_.decode(c)
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

      createScalarList(t, e) {
        let r = [];
        for (let c = 0; c < e; ++c) {
          let h = t(c);
          h !== null && r.push(h)
        }
        return r
      }

      createObjList(t, e) {
        let r = [];
        for (let c = 0; c < e; ++c) {
          let h = t(c);
          h !== null && r.push(h.unpack())
        }
        return r
      }
    };
    var sr = class i {
      constructor(t) {
        this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder;
        let e;
        t ? e = t : e = 1024, this.bb = pe.allocate(e), this.space = e
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
          let c = this.bb.capacity();
          this.bb = i.growByteBuffer(this.bb), this.space += this.bb.capacity() - c
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
        (this.force_defaults || e !== r) && (this.addInt64(e), this.slot(t))
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
        if (t != this.offset()) throw new TypeError("FlatBuffers: struct must be serialized inline.")
      }

      notNested() {
        if (this.isNested) throw new TypeError("FlatBuffers: object serialization must not be nested.")
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
        let r = e << 1, c = pe.allocate(r);
        return c.setPosition(r - e), c.bytes().set(t.bytes(), r - e), c
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
        let c = 2;
        this.addInt16(t - this.object_start);
        let h = (r + c) * 2;
        this.addInt16(h);
        let y = 0, m = this.space;
        t:for (e = 0; e < this.vtables.length; e++) {
          let v = this.bb.capacity() - this.vtables[e];
          if (h == this.bb.readInt16(v)) {
            for (let C = 2; C < h; C += 2) if (this.bb.readInt16(m + C) != this.bb.readInt16(v + C)) continue t;
            y = this.vtables[e];
            break
          }
        }
        return y ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, y - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t
      }

      finish(t, e, r) {
        let c = r ? 4 : 0;
        if (e) {
          let h = e;
          if (this.prep(this.minalign, 4 + 4 + c), h.length != 4) throw new TypeError("FlatBuffers: file identifier must be length " + 4);
          for (let y = 4 - 1; y >= 0; y--) this.writeInt8(h.charCodeAt(y))
        }
        this.prep(this.minalign, 4 + c), this.addOffset(t), c && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space)
      }

      finishSizePrefixed(t, e) {
        this.finish(t, e, !0)
      }

      requiredField(t, e) {
        let r = this.bb.capacity() - t, c = r - this.bb.readInt32(r);
        if (!(e < this.bb.readInt16(c) && this.bb.readInt16(c + e) != 0)) throw new TypeError("FlatBuffers: field " + e + " must be set")
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
        if (t == null) return 0;
        let e;
        t instanceof Uint8Array ? e = t : e = this.text_encoder.encode(t), this.addInt8(0), this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length);
        for (let r = 0, c = this.space, h = this.bb.bytes(); r < e.length; r++) h[c++] = e[r];
        return this.endVector()
      }

      createObjectOffset(t) {
        return t === null ? 0 : typeof t == "string" ? this.createString(t) : t.pack(this)
      }

      createObjectOffsetList(t) {
        let e = [];
        for (let r = 0; r < t.length; ++r) {
          let c = t[r];
          if (c !== null) e.push(this.createObjectOffset(c)); else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")
        }
        return e
      }

      createStructOffsetList(t, e) {
        return e(this, t.length), this.createObjectOffsetList(t.slice().reverse()), this.endVector()
      }
    };
    var Lt = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsKeyValue(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsKeyValue(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
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
        return i.startKeyValue(t), i.addKey(t, e), i.addValue(t, r), i.endKeyValue(t)
      }
    };
    var Ui;
    (function (i) {
      i[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2", i[i.V3 = 2] = "V3", i[i.V4 = 3] = "V4", i[i.V5 = 4] = "V5"
    })(Ui || (Ui = {}));
    var Ni;
    (function (i) {
      i[i.Little = 0] = "Little", i[i.Big = 1] = "Big"
    })(Ni || (Ni = {}));
    var pn;
    (function (i) {
      i[i.DenseArray = 0] = "DenseArray"
    })(pn || (pn = {}));
    var Le = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsInt(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsInt(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
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
        return i.startInt(t), i.addBitWidth(t, e), i.addIsSigned(t, r), i.endInt(t)
      }
    };
    var Ze = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsDictionaryEncoding(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsDictionaryEncoding(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      id() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0")
      }

      indexType(t) {
        let e = this.bb.__offset(this.bb_pos, 6);
        return e ? (t || new Le).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
      }

      isOrdered() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? !!this.bb.readInt8(this.bb_pos + t) : !1
      }

      dictionaryKind() {
        let t = this.bb.__offset(this.bb_pos, 10);
        return t ? this.bb.readInt16(this.bb_pos + t) : pn.DenseArray
      }

      static startDictionaryEncoding(t) {
        t.startObject(4)
      }

      static addId(t, e) {
        t.addFieldInt64(0, e, BigInt("0"))
      }

      static addIndexType(t, e) {
        t.addFieldOffset(1, e, 0)
      }

      static addIsOrdered(t, e) {
        t.addFieldInt8(2, +e, 0)
      }

      static addDictionaryKind(t, e) {
        t.addFieldInt16(3, e, pn.DenseArray)
      }

      static endDictionaryEncoding(t) {
        return t.endObject()
      }
    };
    var _n = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsBinary(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsBinary(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startBinary(t) {
        t.startObject(0)
      }

      static endBinary(t) {
        return t.endObject()
      }

      static createBinary(t) {
        return i.startBinary(t), i.endBinary(t)
      }
    };
    var yn = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsBool(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsBool(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startBool(t) {
        t.startObject(0)
      }

      static endBool(t) {
        return t.endObject()
      }

      static createBool(t) {
        return i.startBool(t), i.endBool(t)
      }
    };
    var mn;
    (function (i) {
      i[i.DAY = 0] = "DAY", i[i.MILLISECOND = 1] = "MILLISECOND"
    })(mn || (mn = {}));
    var Li = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsDate(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsDate(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      unit() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : mn.MILLISECOND
      }

      static startDate(t) {
        t.startObject(1)
      }

      static addUnit(t, e) {
        t.addFieldInt16(0, e, mn.MILLISECOND)
      }

      static endDate(t) {
        return t.endObject()
      }

      static createDate(t, e) {
        return i.startDate(t), i.addUnit(t, e), i.endDate(t)
      }
    };
    var Qe = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsDecimal(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsDecimal(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
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

      static createDecimal(t, e, r, c) {
        return i.startDecimal(t), i.addPrecision(t, e), i.addScale(t, r), i.addBitWidth(t, c), i.endDecimal(t)
      }
    };
    var Pi;
    (function (i) {
      i[i.SECOND = 0] = "SECOND", i[i.MILLISECOND = 1] = "MILLISECOND", i[i.MICROSECOND = 2] = "MICROSECOND", i[i.NANOSECOND = 3] = "NANOSECOND"
    })(Pi || (Pi = {}));
    var Vi = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsFixedSizeBinary(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsFixedSizeBinary(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
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
        return i.startFixedSizeBinary(t), i.addByteWidth(t, e), i.endFixedSizeBinary(t)
      }
    };
    var Hi = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsFixedSizeList(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsFixedSizeList(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
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
        return i.startFixedSizeList(t), i.addListSize(t, e), i.endFixedSizeList(t)
      }
    };
    var bn;
    (function (i) {
      i[i.HALF = 0] = "HALF", i[i.SINGLE = 1] = "SINGLE", i[i.DOUBLE = 2] = "DOUBLE"
    })(bn || (bn = {}));
    var zi = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsFloatingPoint(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsFloatingPoint(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      precision() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : bn.HALF
      }

      static startFloatingPoint(t) {
        t.startObject(1)
      }

      static addPrecision(t, e) {
        t.addFieldInt16(0, e, bn.HALF)
      }

      static endFloatingPoint(t) {
        return t.endObject()
      }

      static createFloatingPoint(t, e) {
        return i.startFloatingPoint(t), i.addPrecision(t, e), i.endFloatingPoint(t)
      }
    };
    var vn;
    (function (i) {
      i[i.YEAR_MONTH = 0] = "YEAR_MONTH", i[i.DAY_TIME = 1] = "DAY_TIME", i[i.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO"
    })(vn || (vn = {}));
    var Wi = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsInterval(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsInterval(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      unit() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : vn.YEAR_MONTH
      }

      static startInterval(t) {
        t.startObject(1)
      }

      static addUnit(t, e) {
        t.addFieldInt16(0, e, vn.YEAR_MONTH)
      }

      static endInterval(t) {
        return t.endObject()
      }

      static createInterval(t, e) {
        return i.startInterval(t), i.addUnit(t, e), i.endInterval(t)
      }
    };
    var gn = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsList(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsList(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startList(t) {
        t.startObject(0)
      }

      static endList(t) {
        return t.endObject()
      }

      static createList(t) {
        return i.startList(t), i.endList(t)
      }
    };
    var $i = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsMap(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsMap(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
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
        return i.startMap(t), i.addKeysSorted(t, e), i.endMap(t)
      }
    };
    var wn = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsNull(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsNull(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startNull(t) {
        t.startObject(0)
      }

      static endNull(t) {
        return t.endObject()
      }

      static createNull(t) {
        return i.startNull(t), i.endNull(t)
      }
    };
    var jn = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsStruct_(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsStruct_(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startStruct_(t) {
        t.startObject(0)
      }

      static endStruct_(t) {
        return t.endObject()
      }

      static createStruct_(t) {
        return i.startStruct_(t), i.endStruct_(t)
      }
    };
    var bi = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsTime(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsTime(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      unit() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : Pi.MILLISECOND
      }

      bitWidth() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readInt32(this.bb_pos + t) : 32
      }

      static startTime(t) {
        t.startObject(2)
      }

      static addUnit(t, e) {
        t.addFieldInt16(0, e, Pi.MILLISECOND)
      }

      static addBitWidth(t, e) {
        t.addFieldInt32(1, e, 32)
      }

      static endTime(t) {
        return t.endObject()
      }

      static createTime(t, e, r) {
        return i.startTime(t), i.addUnit(t, e), i.addBitWidth(t, r), i.endTime(t)
      }
    };
    var vi = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsTimestamp(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsTimestamp(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      unit() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : Pi.SECOND
      }

      timezone(t) {
        let e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__string(this.bb_pos + e, t) : null
      }

      static startTimestamp(t) {
        t.startObject(2)
      }

      static addUnit(t, e) {
        t.addFieldInt16(0, e, Pi.SECOND)
      }

      static addTimezone(t, e) {
        t.addFieldOffset(1, e, 0)
      }

      static endTimestamp(t) {
        return t.endObject()
      }

      static createTimestamp(t, e, r) {
        return i.startTimestamp(t), i.addUnit(t, e), i.addTimezone(t, r), i.endTimestamp(t)
      }
    };
    var Sn;
    (function (i) {
      i[i.Sparse = 0] = "Sparse", i[i.Dense = 1] = "Dense"
    })(Sn || (Sn = {}));
    var Pe = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsUnion(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsUnion(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      mode() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : Sn.Sparse
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
        t.addFieldInt16(0, e, Sn.Sparse)
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
        return i.startUnion(t), i.addMode(t, e), i.addTypeIds(t, r), i.endUnion(t)
      }
    };
    var In = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsUtf8(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsUtf8(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static startUtf8(t) {
        t.startObject(0)
      }

      static endUtf8(t) {
        return t.endObject()
      }

      static createUtf8(t) {
        return i.startUtf8(t), i.endUtf8(t)
      }
    };
    var Ct;
    (function (i) {
      i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.FloatingPoint = 3] = "FloatingPoint", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct_ = 13] = "Struct_", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Duration = 18] = "Duration", i[i.LargeBinary = 19] = "LargeBinary", i[i.LargeUtf8 = 20] = "LargeUtf8", i[i.LargeList = 21] = "LargeList", i[i.RunEndEncoded = 22] = "RunEndEncoded"
    })(Ct || (Ct = {}));
    var Gt = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsField(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsField(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
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
        return t ? this.bb.readUint8(this.bb_pos + t) : Ct.NONE
      }

      type(t) {
        let e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.__union(t, this.bb_pos + e) : null
      }

      dictionary(t) {
        let e = this.bb.__offset(this.bb_pos, 12);
        return e ? (t || new Ze).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
      }

      children(t, e) {
        let r = this.bb.__offset(this.bb_pos, 14);
        return r ? (e || new i).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      childrenLength() {
        let t = this.bb.__offset(this.bb_pos, 14);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      customMetadata(t, e) {
        let r = this.bb.__offset(this.bb_pos, 16);
        return r ? (e || new Lt).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
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
        t.addFieldInt8(2, e, Ct.NONE)
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
    var re = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsSchema(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsSchema(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      endianness() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : Ni.Little
      }

      fields(t, e) {
        let r = this.bb.__offset(this.bb_pos, 6);
        return r ? (e || new Gt).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      fieldsLength() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      customMetadata(t, e) {
        let r = this.bb.__offset(this.bb_pos, 8);
        return r ? (e || new Lt).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      customMetadataLength() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      features(t) {
        let e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e) + t * 8) : BigInt(0)
      }

      featuresLength() {
        let t = this.bb.__offset(this.bb_pos, 10);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      static startSchema(t) {
        t.startObject(4)
      }

      static addEndianness(t, e) {
        t.addFieldInt16(0, e, Ni.Little)
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

      static createSchema(t, e, r, c, h) {
        return i.startSchema(t), i.addEndianness(t, e), i.addFields(t, r), i.addCustomMetadata(t, c), i.addFeatures(t, h), i.endSchema(t)
      }
    };
    var _e = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsFooter(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsFooter(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      version() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : Ui.V1
      }

      schema(t) {
        let e = this.bb.__offset(this.bb_pos, 6);
        return e ? (t || new re).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
      }

      dictionaries(t, e) {
        let r = this.bb.__offset(this.bb_pos, 8);
        return r ? (e || new nr).__init(this.bb.__vector(this.bb_pos + r) + t * 24, this.bb) : null
      }

      dictionariesLength() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      recordBatches(t, e) {
        let r = this.bb.__offset(this.bb_pos, 10);
        return r ? (e || new nr).__init(this.bb.__vector(this.bb_pos + r) + t * 24, this.bb) : null
      }

      recordBatchesLength() {
        let t = this.bb.__offset(this.bb_pos, 10);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      customMetadata(t, e) {
        let r = this.bb.__offset(this.bb_pos, 12);
        return r ? (e || new Lt).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      customMetadataLength() {
        let t = this.bb.__offset(this.bb_pos, 12);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      static startFooter(t) {
        t.startObject(5)
      }

      static addVersion(t, e) {
        t.addFieldInt16(0, e, Ui.V1)
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
    var _t = class i {
      constructor(t = [], e, r) {
        this.fields = t || [], this.metadata = e || new Map, r || (r = Ra(t)), this.dictionaries = r
      }

      get [Symbol.toStringTag]() {
        return "Schema"
      }

      get names() {
        return this.fields.map(t => t.name)
      }

      toString() {
        return "Schema<{ ".concat(this.fields.map((t, e) => "".concat(e, ": ").concat(t)).join(", "), " }>")
      }

      select(t) {
        let e = new Set(t), r = this.fields.filter(c => e.has(c.name));
        return new i(r, this.metadata)
      }

      selectAt(t) {
        let e = t.map(r => this.fields[r]).filter(Boolean);
        return new i(e, this.metadata)
      }

      assign(...t) {
        let e = t[0] instanceof i ? t[0] : Array.isArray(t[0]) ? new i(t[0]) : new i(t), r = [...this.fields],
            c = io(io(new Map, this.metadata), e.metadata), h = e.fields.filter(m => {
              let v = r.findIndex(C => C.name === m.name);
              return ~v ? (r[v] = m.clone({metadata: io(io(new Map, r[v].metadata), m.metadata)})) && !1 : !0
            }), y = Ra(h, new Map);
        return new i([...r, ...h], c, new Map([...this.dictionaries, ...y]))
      }
    };
    _t.prototype.fields = null;
    _t.prototype.metadata = null;
    _t.prototype.dictionaries = null;
    var at = class i {
      static new(...t) {
        let [e, r, c, h] = t;
        return t[0] && typeof t[0] == "object" && ({name: e} = t[0], r === void 0 && (r = t[0].type), c === void 0 && (c = t[0].nullable), h === void 0 && (h = t[0].metadata)), new i("".concat(e), r, c, h)
      }

      constructor(t, e, r = !1, c) {
        this.name = t, this.type = e, this.nullable = r, this.metadata = c || new Map
      }

      get typeId() {
        return this.type.typeId
      }

      get [Symbol.toStringTag]() {
        return "Field"
      }

      toString() {
        return "".concat(this.name, ": ").concat(this.type)
      }

      clone(...t) {
        let [e, r, c, h] = t;
        return !t[0] || typeof t[0] != "object" ? [e = this.name, r = this.type, c = this.nullable, h = this.metadata] = t : {
          name: e = this.name,
          type: r = this.type,
          nullable: c = this.nullable,
          metadata: h = this.metadata
        } = t[0], i.new(e, r, c, h)
      }
    };
    at.prototype.type = null;
    at.prototype.name = null;
    at.prototype.nullable = null;
    at.prototype.metadata = null;

    function io(i, t) {
      return new Map([...i || new Map, ...t || new Map])
    }

    function Ra(i, t = new Map) {
      for (let e = -1, r = i.length; ++e < r;) {
        let h = i[e].type;
        if (V.isDictionary(h)) {
          if (!t.has(h.id)) t.set(h.id, h.dictionary); else if (t.get(h.id) !== h.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id")
        }
        h.children && h.children.length > 0 && Ra(h.children, t)
      }
      return t
    }

    var OS = sr, RS = pe, gi = class {
      static decode(t) {
        t = new RS(J(t));
        let e = _e.getRootAsFooter(t), r = _t.decode(e.schema());
        return new Ma(r, e)
      }

      static encode(t) {
        let e = new OS, r = _t.encode(e, t.schema);
        _e.startRecordBatchesVector(e, t.numRecordBatches);
        for (let y of [...t.recordBatches()].slice().reverse()) wi.encode(e, y);
        let c = e.endVector();
        _e.startDictionariesVector(e, t.numDictionaries);
        for (let y of [...t.dictionaryBatches()].slice().reverse()) wi.encode(e, y);
        let h = e.endVector();
        return _e.startFooter(e), _e.addSchema(e, r), _e.addVersion(e, Pt.V4), _e.addRecordBatches(e, c), _e.addDictionaries(e, h), _e.finishFooterBuffer(e, _e.endFooter(e)), e.asUint8Array()
      }

      get numRecordBatches() {
        return this._recordBatches.length
      }

      get numDictionaries() {
        return this._dictionaryBatches.length
      }

      constructor(t, e = Pt.V4, r, c) {
        this.schema = t, this.version = e, r && (this._recordBatches = r), c && (this._dictionaryBatches = c)
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
    var Ma = class extends gi {
      get numRecordBatches() {
        return this._footer.recordBatchesLength()
      }

      get numDictionaries() {
        return this._footer.dictionariesLength()
      }

      constructor(t, e) {
        super(t, e.version()), this._footer = e
      }

      getRecordBatch(t) {
        if (t >= 0 && t < this.numRecordBatches) {
          let e = this._footer.recordBatches(t);
          if (e) return wi.decode(e)
        }
        return null
      }

      getDictionaryBatch(t) {
        if (t >= 0 && t < this.numDictionaries) {
          let e = this._footer.dictionaries(t);
          if (e) return wi.decode(e)
        }
        return null
      }
    }, wi = class i {
      static decode(t) {
        return new i(t.metaDataLength(), t.bodyLength(), t.offset())
      }

      static encode(t, e) {
        let {metaDataLength: r} = e, c = BigInt(e.offset), h = BigInt(e.bodyLength);
        return nr.createBlock(t, c, r, h)
      }

      constructor(t, e, r) {
        this.metaDataLength = t, this.offset = ee(r), this.bodyLength = ee(e)
      }
    };
    var wt = Object.freeze({done: !0, value: void 0}), Cn = class {
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
    }, or = class {
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
    }, ro = class extends or {
      constructor() {
        super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise(t => this._closedPromiseResolve = t)
      }

      get closed() {
        return this._closedPromise
      }

      cancel(t) {
        return R(this, void 0, void 0, function* () {
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
          for (; t.length > 0;) t.shift().resolve(wt);
          this._closedPromiseResolve(), this._closedPromiseResolve = void 0
        }
      }

      [Symbol.asyncIterator]() {
        return this
      }

      toDOMStream(t) {
        return zt.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t)
      }

      toNodeStream(t) {
        return zt.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t)
      }

      throw(t) {
        return R(this, void 0, void 0, function* () {
          return yield this.abort(t), wt
        })
      }

      return(t) {
        return R(this, void 0, void 0, function* () {
          return yield this.close(), wt
        })
      }

      read(t) {
        return R(this, void 0, void 0, function* () {
          return (yield this.next(t, "read")).value
        })
      }

      peek(t) {
        return R(this, void 0, void 0, function* () {
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
        }) : Promise.resolve(wt)
      }

      _ensureOpen() {
        if (this._closedPromiseResolve) return !0;
        throw new Error("AsyncQueue is closed")
      }
    };
    var ti = class extends ro {
      write(t) {
        if ((t = J(t)).byteLength > 0) return super.write(t)
      }

      toString(t = !1) {
        return t ? rn(this.toUint8Array(!0)) : this.toUint8Array(!1).then(rn)
      }

      toUint8Array(t = !1) {
        return t ? ue(this._values)[0] : (() => R(this, void 0, void 0, function* () {
          var e, r, c, h;
          let y = [], m = 0;
          try {
            for (var v = !0, C = Be(this), A; A = yield C.next(), e = A.done, !e; v = !0) {
              h = A.value, v = !1;
              let E = h;
              y.push(E), m += E.byteLength
            }
          } catch (E) {
            r = {error: E}
          } finally {
            try {
              !v && !e && (c = C.return) && (yield c.call(C))
            } finally {
              if (r) throw r.error
            }
          }
          return ue(y, m)[0]
        }))()
      }
    }, ei = class {
      constructor(t) {
        t && (this.source = new Ua(zt.fromIterable(t)))
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
    }, Ie = class i {
      constructor(t) {
        t instanceof i ? this.source = t.source : t instanceof ti ? this.source = new ji(zt.fromAsyncIterable(t)) : vs(t) ? this.source = new ji(zt.fromNodeStream(t)) : nn(t) ? this.source = new ji(zt.fromDOMStream(t)) : ms(t) ? this.source = new ji(zt.fromDOMStream(t.body)) : xe(t) ? this.source = new ji(zt.fromIterable(t)) : Ae(t) ? this.source = new ji(zt.fromAsyncIterable(t)) : ge(t) && (this.source = new ji(zt.fromAsyncIterable(t)))
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
    }, Ua = class {
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
        return Object.create(this.source.throw && this.source.throw(t) || wt)
      }

      return(t) {
        return Object.create(this.source.return && this.source.return(t) || wt)
      }
    }, ji = class {
      constructor(t) {
        this.source = t, this._closedPromise = new Promise(e => this._closedPromiseResolve = e)
      }

      cancel(t) {
        return R(this, void 0, void 0, function* () {
          yield this.return(t)
        })
      }

      get closed() {
        return this._closedPromise
      }

      read(t) {
        return R(this, void 0, void 0, function* () {
          return (yield this.next(t, "read")).value
        })
      }

      peek(t) {
        return R(this, void 0, void 0, function* () {
          return (yield this.next(t, "peek")).value
        })
      }

      next(t, e = "read") {
        return R(this, void 0, void 0, function* () {
          return yield this.source.next({cmd: e, size: t})
        })
      }

      throw(t) {
        return R(this, void 0, void 0, function* () {
          let e = this.source.throw && (yield this.source.throw(t)) || wt;
          return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e)
        })
      }

      return(t) {
        return R(this, void 0, void 0, function* () {
          let e = this.source.return && (yield this.source.return(t)) || wt;
          return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e)
        })
      }
    };
    var Fn = class extends ei {
      constructor(t, e) {
        super(), this.position = 0, this.buffer = J(t), this.size = e === void 0 ? this.buffer.byteLength : e
      }

      readInt32(t) {
        let {buffer: e, byteOffset: r} = this.readAt(t, 4);
        return new DataView(e, r).getInt32(0, !0)
      }

      seek(t) {
        return this.position = Math.min(t, this.size), t < this.size
      }

      read(t) {
        let {buffer: e, size: r, position: c} = this;
        return e && c < r ? (typeof t != "number" && (t = Number.POSITIVE_INFINITY), this.position = Math.min(r, c + Math.min(r - c, t)), e.subarray(c, this.position)) : null
      }

      readAt(t, e) {
        let r = this.buffer, c = Math.min(this.size, t + e);
        return r ? r.subarray(t, c) : new Uint8Array(e)
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
    }, Yi = class extends Ie {
      constructor(t, e) {
        super(), this.position = 0, this._handle = t, typeof e == "number" ? this.size = e : this._pending = (() => R(this, void 0, void 0, function* () {
          this.size = (yield t.stat()).size, delete this._pending
        }))()
      }

      readInt32(t) {
        return R(this, void 0, void 0, function* () {
          let {buffer: e, byteOffset: r} = yield this.readAt(t, 4);
          return new DataView(e, r).getInt32(0, !0)
        })
      }

      seek(t) {
        return R(this, void 0, void 0, function* () {
          return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size
        })
      }

      read(t) {
        return R(this, void 0, void 0, function* () {
          this._pending && (yield this._pending);
          let {_handle: e, size: r, position: c} = this;
          if (e && c < r) {
            typeof t != "number" && (t = Number.POSITIVE_INFINITY);
            let h = c, y = 0, m = 0, v = Math.min(r, h + Math.min(r - h, t)),
                C = new Uint8Array(Math.max(0, (this.position = v) - h));
            for (; (h += m) < v && (y += m) < C.byteLength;) ({bytesRead: m} = yield e.read(C, y, C.byteLength - y, h));
            return C
          }
          return null
        })
      }

      readAt(t, e) {
        return R(this, void 0, void 0, function* () {
          this._pending && (yield this._pending);
          let {_handle: r, size: c} = this;
          if (r && t + e < c) {
            let h = Math.min(c, t + e), y = new Uint8Array(h - t);
            return (yield r.read(y, 0, e, t)).buffer
          }
          return new Uint8Array(e)
        })
      }

      close() {
        return R(this, void 0, void 0, function* () {
          let t = this._handle;
          this._handle = null, t && (yield t.close())
        })
      }

      throw(t) {
        return R(this, void 0, void 0, function* () {
          return yield this.close(), {done: !0, value: t}
        })
      }

      return(t) {
        return R(this, void 0, void 0, function* () {
          return yield this.close(), {done: !0, value: t}
        })
      }
    };
    var La = {};
    Zi(La, {BaseInt64: () => Bn, Int128: () => An, Int64: () => Si, Uint64: () => At});

    function Nr(i) {
      return i < 0 && (i = 4294967295 + i + 1), "0x".concat(i.toString(16))
    }

    var Lr = 8, Na = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8], Bn = class {
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
            c = e[3] * r[3];
        this.buffer[0] = c & 65535;
        let h = c >>> 16;
        return c = e[2] * r[3], h += c, c = e[3] * r[2] >>> 0, h += c, this.buffer[0] += h << 16, this.buffer[1] = h >>> 0 < c ? 65536 : 0, this.buffer[1] += h >>> 16, this.buffer[1] += e[1] * r[3] + e[2] * r[2] + e[3] * r[1], this.buffer[1] += e[0] * r[3] + e[1] * r[2] + e[2] * r[1] + e[3] * r[0] << 16, this
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
        return "".concat(Nr(this.buffer[1]), " ").concat(Nr(this.buffer[0]))
      }
    }, At = class i extends Bn {
      times(t) {
        return this._times(t), this
      }

      plus(t) {
        return this._plus(t), this
      }

      static from(t, e = new Uint32Array(2)) {
        return i.fromString(typeof t == "string" ? t : t.toString(), e)
      }

      static fromNumber(t, e = new Uint32Array(2)) {
        return i.fromString(t.toString(), e)
      }

      static fromString(t, e = new Uint32Array(2)) {
        let r = t.length, c = new i(e);
        for (let h = 0; h < r;) {
          let y = Lr < r - h ? Lr : r - h, m = new i(new Uint32Array([Number.parseInt(t.slice(h, h + y), 10), 0])),
              v = new i(new Uint32Array([Na[y], 0]));
          c.times(v), c.plus(m), h += y
        }
        return c
      }

      static convertArray(t) {
        let e = new Uint32Array(t.length * 2);
        for (let r = -1, c = t.length; ++r < c;) i.from(t[r], new Uint32Array(e.buffer, e.byteOffset + 2 * r * 4, 2));
        return e
      }

      static multiply(t, e) {
        return new i(new Uint32Array(t.buffer)).times(e)
      }

      static add(t, e) {
        return new i(new Uint32Array(t.buffer)).plus(e)
      }
    }, Si = class i extends Bn {
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
        return i.fromString(typeof t == "string" ? t : t.toString(), e)
      }

      static fromNumber(t, e = new Uint32Array(2)) {
        return i.fromString(t.toString(), e)
      }

      static fromString(t, e = new Uint32Array(2)) {
        let r = t.startsWith("-"), c = t.length, h = new i(e);
        for (let y = r ? 1 : 0; y < c;) {
          let m = Lr < c - y ? Lr : c - y, v = new i(new Uint32Array([Number.parseInt(t.slice(y, y + m), 10), 0])),
              C = new i(new Uint32Array([Na[m], 0]));
          h.times(C), h.plus(v), y += m
        }
        return r ? h.negate() : h
      }

      static convertArray(t) {
        let e = new Uint32Array(t.length * 2);
        for (let r = -1, c = t.length; ++r < c;) i.from(t[r], new Uint32Array(e.buffer, e.byteOffset + 2 * r * 4, 2));
        return e
      }

      static multiply(t, e) {
        return new i(new Uint32Array(t.buffer)).times(e)
      }

      static add(t, e) {
        return new i(new Uint32Array(t.buffer)).plus(e)
      }
    }, An = class i {
      constructor(t) {
        this.buffer = t
      }

      high() {
        return new Si(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2))
      }

      low() {
        return new Si(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2))
      }

      negate() {
        return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this
      }

      times(t) {
        let e = new At(new Uint32Array([this.buffer[3], 0])), r = new At(new Uint32Array([this.buffer[2], 0])),
            c = new At(new Uint32Array([this.buffer[1], 0])), h = new At(new Uint32Array([this.buffer[0], 0])),
            y = new At(new Uint32Array([t.buffer[3], 0])), m = new At(new Uint32Array([t.buffer[2], 0])),
            v = new At(new Uint32Array([t.buffer[1], 0])), C = new At(new Uint32Array([t.buffer[0], 0])),
            A = At.multiply(h, C);
        this.buffer[0] = A.low();
        let E = new At(new Uint32Array([A.high(), 0]));
        return A = At.multiply(c, C), E.plus(A), A = At.multiply(h, v), E.plus(A), this.buffer[1] = E.low(), this.buffer[3] = E.lessThan(A) ? 1 : 0, this.buffer[2] = E.high(), new At(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(At.multiply(r, C)).plus(At.multiply(c, v)).plus(At.multiply(h, m)), this.buffer[3] += At.multiply(e, C).plus(At.multiply(r, v)).plus(At.multiply(c, m)).plus(At.multiply(h, y)).low(), this
      }

      plus(t) {
        let e = new Uint32Array(4);
        return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this
      }

      hex() {
        return "".concat(Nr(this.buffer[3]), " ").concat(Nr(this.buffer[2]), " ").concat(Nr(this.buffer[1]), " ").concat(Nr(this.buffer[0]))
      }

      static multiply(t, e) {
        return new i(new Uint32Array(t.buffer)).times(e)
      }

      static add(t, e) {
        return new i(new Uint32Array(t.buffer)).plus(e)
      }

      static from(t, e = new Uint32Array(4)) {
        return i.fromString(typeof t == "string" ? t : t.toString(), e)
      }

      static fromNumber(t, e = new Uint32Array(4)) {
        return i.fromString(t.toString(), e)
      }

      static fromString(t, e = new Uint32Array(4)) {
        let r = t.startsWith("-"), c = t.length, h = new i(e);
        for (let y = r ? 1 : 0; y < c;) {
          let m = Lr < c - y ? Lr : c - y,
              v = new i(new Uint32Array([Number.parseInt(t.slice(y, y + m), 10), 0, 0, 0])),
              C = new i(new Uint32Array([Na[m], 0, 0, 0]));
          h.times(C), h.plus(v), y += m
        }
        return r ? h.negate() : h
      }

      static convertArray(t) {
        let e = new Uint32Array(t.length * 4);
        for (let r = -1, c = t.length; ++r < c;) i.from(t[r], new Uint32Array(e.buffer, e.byteOffset + 4 * 4 * r, 4));
        return e
      }
    };
    var xn = class extends H {
      constructor(t, e, r, c) {
        super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = r, this.dictionaries = c
      }

      visit(t) {
        return super.visit(t instanceof at ? t.type : t)
      }

      visitNull(t, {length: e} = this.nextFieldNode()) {
        return Q({type: t, length: e})
      }

      visitBool(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitInt(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitFloat(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitUtf8(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          valueOffsets: this.readOffsets(t),
          data: this.readData(t)
        })
      }

      visitBinary(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          valueOffsets: this.readOffsets(t),
          data: this.readData(t)
        })
      }

      visitFixedSizeBinary(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitDate(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitTimestamp(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitTime(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitDecimal(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitList(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          valueOffsets: this.readOffsets(t),
          child: this.visit(t.children[0])
        })
      }

      visitStruct(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          children: this.visitMany(t.children)
        })
      }

      visitUnion(t) {
        return t.mode === Bt.Sparse ? this.visitSparseUnion(t) : this.visitDenseUnion(t)
      }

      visitDenseUnion(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({
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
        return Q({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          typeIds: this.readTypeIds(t),
          children: this.visitMany(t.children)
        })
      }

      visitDictionary(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          data: this.readData(t.indices),
          dictionary: this.readDictionary(t)
        })
      }

      visitInterval(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t)})
      }

      visitFixedSizeList(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({
          type: t,
          length: e,
          nullCount: r,
          nullBitmap: this.readNullBitmap(t, r),
          child: this.visit(t.children[0])
        })
      }

      visitMap(t, {length: e, nullCount: r} = this.nextFieldNode()) {
        return Q({
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
    }, no = class extends xn {
      constructor(t, e, r, c) {
        super(new Uint8Array(0), e, r, c), this.sources = t
      }

      readNullBitmap(t, e, {offset: r} = this.nextBufferRange()) {
        return e <= 0 ? new Uint8Array(0) : ir(this.sources[r])
      }

      readOffsets(t, {offset: e} = this.nextBufferRange()) {
        return st(Uint8Array, st(Int32Array, this.sources[e]))
      }

      readTypeIds(t, {offset: e} = this.nextBufferRange()) {
        return st(Uint8Array, st(t.ArrayType, this.sources[e]))
      }

      readData(t, {offset: e} = this.nextBufferRange()) {
        let {sources: r} = this;
        return V.isTimestamp(t) ? st(Uint8Array, Si.convertArray(r[e])) : (V.isInt(t) || V.isTime(t)) && t.bitWidth === 64 ? st(Uint8Array, Si.convertArray(r[e])) : V.isDate(t) && t.unit === Wt.MILLISECOND ? st(Uint8Array, Si.convertArray(r[e])) : V.isDecimal(t) ? st(Uint8Array, An.convertArray(r[e])) : V.isBinary(t) || V.isFixedSizeBinary(t) ? MS(r[e]) : V.isBool(t) ? ir(r[e]) : V.isUtf8(t) ? Di(r[e].join("")) : st(Uint8Array, st(t.ArrayType, r[e].map(c => +c)))
      }
    };

    function MS(i) {
      let t = i.join(""), e = new Uint8Array(t.length / 2);
      for (let r = 0; r < t.length; r += 2) e[r >> 1] = Number.parseInt(t.slice(r, r + 2), 16);
      return e
    }

    var Pr = class extends Je {
      constructor(t) {
        super(t), this._values = new Mi(new Uint8Array(0))
      }

      get byteLength() {
        let t = this._pendingLength + this.length * 4;
        return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t
      }

      setValue(t, e) {
        return super.setValue(t, J(e))
      }

      _flushPending(t, e) {
        let r = this._offsets, c = this._values.reserve(e).buffer, h = 0;
        for (let [y, m] of t) if (m === void 0) r.set(y, 0); else {
          let v = m.length;
          c.set(m, h), r.set(y, v), h += v
        }
      }
    };
    var so = class extends It {
      constructor(t) {
        super(t), this._values = new Rr
      }

      setValue(t, e) {
        this._values.set(t, +e)
      }
    };
    var ar = class extends Vt {
    };
    ar.prototype._setValue = va;
    var Tn = class extends ar {
    };
    Tn.prototype._setValue = Es;
    var Dn = class extends ar {
    };
    Dn.prototype._setValue = ks;
    var En = class extends Vt {
    };
    En.prototype._setValue = ja;
    var oo = class extends It {
      constructor({type: t, nullValues: e, dictionaryHashFunction: r}) {
        super({type: new de(t.dictionary, t.indices, t.id, t.isOrdered)}), this._nulls = null, this._dictionaryOffset = 0, this._keysToIndices = Object.create(null), this.indices = lr({
          type: this.type.indices,
          nullValues: e
        }), this.dictionary = lr({
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
        let r = this._keysToIndices, c = this.valueToKey(e), h = r[c];
        return h === void 0 && (r[c] = h = this._dictionaryOffset + this.dictionary.append(e).length - 1), this.indices.setValue(t, h)
      }

      flush() {
        let t = this.type, e = this._dictionary, r = this.dictionary.toVector(), c = this.indices.flush().clone(t);
        return c.dictionary = e ? e.concat(r) : r, this.finished || (this._dictionaryOffset += r.length), this._dictionary = c.dictionary, this.clear(), c
      }

      finish() {
        return this.indices.finish(), this.dictionary.finish(), this._dictionaryOffset = 0, this._keysToIndices = Object.create(null), super.finish()
      }

      clear() {
        return this.indices.clear(), this.dictionary.clear(), super.clear()
      }

      valueToKey(t) {
        return typeof t == "string" ? t : "".concat(t)
      }
    };
    var kn = class extends Vt {
    };
    kn.prototype._setValue = ba;
    var ao = class extends It {
      setValue(t, e) {
        let [r] = this.children, c = t * this.stride;
        for (let h = -1, y = e.length; ++h < y;) r.set(c + h, e[h])
      }

      addChild(t, e = "0") {
        if (this.numChildren > 0) throw new Error("FixedSizeListBuilder can only have one child.");
        let r = this.children.push(t);
        return this.type = new Re(this.type.listSize, new at(e, t.type, !0)), r
      }
    };
    var cr = class extends Vt {
      setValue(t, e) {
        this._values.set(t, e)
      }
    }, lo = class extends cr {
      setValue(t, e) {
        super.setValue(t, ln(e))
      }
    }, co = class extends cr {
    }, uo = class extends cr {
    };
    var ur = class extends Vt {
    };
    ur.prototype._setValue = Sa;
    var On = class extends ur {
    };
    On.prototype._setValue = Hs;
    var Rn = class extends ur {
    };
    Rn.prototype._setValue = zs;
    var Ce = class extends Vt {
      setValue(t, e) {
        this._values.set(t, e)
      }
    }, fo = class extends Ce {
    }, ho = class extends Ce {
    }, po = class extends Ce {
    }, _o = class extends Ce {
    }, yo = class extends Ce {
    }, mo = class extends Ce {
    }, bo = class extends Ce {
    }, vo = class extends Ce {
    };
    var go = class extends Je {
      constructor(t) {
        super(t), this._offsets = new Mr
      }

      addChild(t, e = "0") {
        if (this.numChildren > 0) throw new Error("ListBuilder can only have one child.");
        return this.children[this.numChildren] = t, this.type = new ke(new at(e, t.type, !0)), this.numChildren - 1
      }

      _flushPending(t) {
        let e = this._offsets, [r] = this.children;
        for (let [c, h] of t) if (typeof h > "u") e.set(c, 0); else {
          let y = h, m = y.length, v = e.set(c, m).buffer[c];
          for (let C = -1; ++C < m;) r.set(v + C, y[C])
        }
      }
    };
    var wo = class extends Je {
      set(t, e) {
        return super.set(t, e)
      }

      setValue(t, e) {
        let r = e instanceof Map ? e : new Map(Object.entries(e)), c = this._pending || (this._pending = new Map),
            h = c.get(t);
        h && (this._pendingLength -= h.size), this._pendingLength += r.size, c.set(t, r)
      }

      addChild(t, e = "".concat(this.numChildren)) {
        if (this.numChildren > 0) throw new Error("ListBuilder can only have one child.");
        return this.children[this.numChildren] = t, this.type = new Me(new at(e, t.type, !0), this.type.keysSorted), this.numChildren - 1
      }

      _flushPending(t) {
        let e = this._offsets, [r] = this.children;
        for (let [c, h] of t) if (h === void 0) e.set(c, 0); else {
          let {[c]: y, [c + 1]: m} = e.set(c, h.size).buffer;
          for (let v of h.entries()) if (r.set(y, v), ++y >= m) break
        }
      }
    };
    var jo = class extends It {
      setValue(t, e) {
      }

      setValid(t, e) {
        return this.length = Math.max(t + 1, this.length), e
      }
    };
    var So = class extends It {
      setValue(t, e) {
        let {children: r, type: c} = this;
        switch (Array.isArray(e) || e.constructor) {
          case!0:
            return c.children.forEach((h, y) => r[y].set(t, e[y]));
          case Map:
            return c.children.forEach((h, y) => r[y].set(t, e.get(h.name)));
          default:
            return c.children.forEach((h, y) => r[y].set(t, e[h.name]))
        }
      }

      setValid(t, e) {
        return super.setValid(t, e) || this.children.forEach(r => r.setValid(t, e)), e
      }

      addChild(t, e = "".concat(this.numChildren)) {
        let r = this.children.push(t);
        return this.type = new gt([...this.type.children, new at(e, t.type, !0)]), r
      }
    };
    var Ii = class extends Vt {
    };
    Ii.prototype._setValue = ga;
    var Mn = class extends Ii {
    };
    Mn.prototype._setValue = Os;
    var Un = class extends Ii {
    };
    Un.prototype._setValue = Rs;
    var Nn = class extends Ii {
    };
    Nn.prototype._setValue = Ms;
    var Ln = class extends Ii {
    };
    Ln.prototype._setValue = Us;
    var Ci = class extends Vt {
    };
    Ci.prototype._setValue = wa;
    var Pn = class extends Ci {
    };
    Pn.prototype._setValue = Ns;
    var Vn = class extends Ci {
    };
    Vn.prototype._setValue = Ls;
    var Hn = class extends Ci {
    };
    Hn.prototype._setValue = Ps;
    var zn = class extends Ci {
    };
    zn.prototype._setValue = Vs;
    var Vr = class extends It {
      constructor(t) {
        super(t), this._typeIds = new mi(new Int8Array(0), 1), typeof t.valueToChildTypeId == "function" && (this._valueToChildTypeId = t.valueToChildTypeId)
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
        let c = this.type.typeIdToChildIndex[r], h = this.children[c];
        h == null || h.set(t, e)
      }

      addChild(t, e = "".concat(this.children.length)) {
        let r = this.children.push(t), {type: {children: c, mode: h, typeIds: y}} = this, m = [...c, new at(e, t.type)];
        return this.type = new Oe(h, [...y, r], m), r
      }

      _valueToChildTypeId(t, e, r) {
        throw new Error("Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.")
      }
    }, Io = class extends Vr {
    }, Co = class extends Vr {
      constructor(t) {
        super(t), this._offsets = new mi(new Int32Array(0))
      }

      setValue(t, e, r) {
        let c = this._typeIds.set(t, r).buffer[t], h = this.getChildAt(this.type.typeIdToChildIndex[c]),
            y = this._offsets.set(t, h.length).buffer[t];
        h == null || h.set(y, e)
      }
    };
    var Wn = class extends Je {
      constructor(t) {
        super(t), this._values = new Mi(new Uint8Array(0))
      }

      get byteLength() {
        let t = this._pendingLength + this.length * 4;
        return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t
      }

      setValue(t, e) {
        return super.setValue(t, Di(e))
      }

      _flushPending(t, e) {
      }
    };
    Wn.prototype._flushPending = Pr.prototype._flushPending;
    var Pa = class extends H {
      visitNull() {
        return jo
      }

      visitBool() {
        return so
      }

      visitInt() {
        return Ce
      }

      visitInt8() {
        return fo
      }

      visitInt16() {
        return ho
      }

      visitInt32() {
        return po
      }

      visitInt64() {
        return _o
      }

      visitUint8() {
        return yo
      }

      visitUint16() {
        return mo
      }

      visitUint32() {
        return bo
      }

      visitUint64() {
        return vo
      }

      visitFloat() {
        return cr
      }

      visitFloat16() {
        return lo
      }

      visitFloat32() {
        return co
      }

      visitFloat64() {
        return uo
      }

      visitUtf8() {
        return Wn
      }

      visitBinary() {
        return Pr
      }

      visitFixedSizeBinary() {
        return kn
      }

      visitDate() {
        return ar
      }

      visitDateDay() {
        return Tn
      }

      visitDateMillisecond() {
        return Dn
      }

      visitTimestamp() {
        return Ii
      }

      visitTimestampSecond() {
        return Mn
      }

      visitTimestampMillisecond() {
        return Un
      }

      visitTimestampMicrosecond() {
        return Nn
      }

      visitTimestampNanosecond() {
        return Ln
      }

      visitTime() {
        return Ci
      }

      visitTimeSecond() {
        return Pn
      }

      visitTimeMillisecond() {
        return Vn
      }

      visitTimeMicrosecond() {
        return Hn
      }

      visitTimeNanosecond() {
        return zn
      }

      visitDecimal() {
        return En
      }

      visitList() {
        return go
      }

      visitStruct() {
        return So
      }

      visitUnion() {
        return Vr
      }

      visitDenseUnion() {
        return Co
      }

      visitSparseUnion() {
        return Io
      }

      visitDictionary() {
        return oo
      }

      visitInterval() {
        return ur
      }

      visitIntervalDayTime() {
        return On
      }

      visitIntervalYearMonth() {
        return Rn
      }

      visitFixedSizeList() {
        return ao
      }

      visitMap() {
        return wo
      }
    }, Qh = new Pa;
    var G = class extends H {
      compareSchemas(t, e) {
        return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields)
      }

      compareManyFields(t, e) {
        return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every((r, c) => this.compareFields(r, e[c]))
      }

      compareFields(t, e) {
        return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type)
      }
    };

    function ne(i, t) {
      return t instanceof i.constructor
    }

    function $n(i, t) {
      return i === t || ne(i, t)
    }

    function Fi(i, t) {
      return i === t || ne(i, t) && i.bitWidth === t.bitWidth && i.isSigned === t.isSigned
    }

    function Fo(i, t) {
      return i === t || ne(i, t) && i.precision === t.precision
    }

    function US(i, t) {
      return i === t || ne(i, t) && i.byteWidth === t.byteWidth
    }

    function Va(i, t) {
      return i === t || ne(i, t) && i.unit === t.unit
    }

    function Yn(i, t) {
      return i === t || ne(i, t) && i.unit === t.unit && i.timezone === t.timezone
    }

    function Xn(i, t) {
      return i === t || ne(i, t) && i.unit === t.unit && i.bitWidth === t.bitWidth
    }

    function NS(i, t) {
      return i === t || ne(i, t) && i.children.length === t.children.length && ii.compareManyFields(i.children, t.children)
    }

    function LS(i, t) {
      return i === t || ne(i, t) && i.children.length === t.children.length && ii.compareManyFields(i.children, t.children)
    }

    function Ha(i, t) {
      return i === t || ne(i, t) && i.mode === t.mode && i.typeIds.every((e, r) => e === t.typeIds[r]) && ii.compareManyFields(i.children, t.children)
    }

    function PS(i, t) {
      return i === t || ne(i, t) && i.id === t.id && i.isOrdered === t.isOrdered && ii.visit(i.indices, t.indices) && ii.visit(i.dictionary, t.dictionary)
    }

    function za(i, t) {
      return i === t || ne(i, t) && i.unit === t.unit
    }

    function VS(i, t) {
      return i === t || ne(i, t) && i.listSize === t.listSize && i.children.length === t.children.length && ii.compareManyFields(i.children, t.children)
    }

    function HS(i, t) {
      return i === t || ne(i, t) && i.keysSorted === t.keysSorted && i.children.length === t.children.length && ii.compareManyFields(i.children, t.children)
    }

    G.prototype.visitNull = $n;
    G.prototype.visitBool = $n;
    G.prototype.visitInt = Fi;
    G.prototype.visitInt8 = Fi;
    G.prototype.visitInt16 = Fi;
    G.prototype.visitInt32 = Fi;
    G.prototype.visitInt64 = Fi;
    G.prototype.visitUint8 = Fi;
    G.prototype.visitUint16 = Fi;
    G.prototype.visitUint32 = Fi;
    G.prototype.visitUint64 = Fi;
    G.prototype.visitFloat = Fo;
    G.prototype.visitFloat16 = Fo;
    G.prototype.visitFloat32 = Fo;
    G.prototype.visitFloat64 = Fo;
    G.prototype.visitUtf8 = $n;
    G.prototype.visitBinary = $n;
    G.prototype.visitFixedSizeBinary = US;
    G.prototype.visitDate = Va;
    G.prototype.visitDateDay = Va;
    G.prototype.visitDateMillisecond = Va;
    G.prototype.visitTimestamp = Yn;
    G.prototype.visitTimestampSecond = Yn;
    G.prototype.visitTimestampMillisecond = Yn;
    G.prototype.visitTimestampMicrosecond = Yn;
    G.prototype.visitTimestampNanosecond = Yn;
    G.prototype.visitTime = Xn;
    G.prototype.visitTimeSecond = Xn;
    G.prototype.visitTimeMillisecond = Xn;
    G.prototype.visitTimeMicrosecond = Xn;
    G.prototype.visitTimeNanosecond = Xn;
    G.prototype.visitDecimal = $n;
    G.prototype.visitList = NS;
    G.prototype.visitStruct = LS;
    G.prototype.visitUnion = Ha;
    G.prototype.visitDenseUnion = Ha;
    G.prototype.visitSparseUnion = Ha;
    G.prototype.visitDictionary = PS;
    G.prototype.visitInterval = za;
    G.prototype.visitIntervalDayTime = za;
    G.prototype.visitIntervalYearMonth = za;
    G.prototype.visitFixedSizeList = VS;
    G.prototype.visitMap = HS;
    var ii = new G;

    function dr(i, t) {
      return ii.compareSchemas(i, t)
    }

    function tp(i, t) {
      return ii.compareFields(i, t)
    }

    function ep(i, t) {
      return ii.visit(i, t)
    }

    function lr(i) {
      let t = i.type, e = new (Qh.getVisitFn(t)())(i);
      if (t.children && t.children.length > 0) {
        let r = i.children || [], c = {nullValues: i.nullValues},
            h = Array.isArray(r) ? (y, m) => r[m] || c : ({name: y}) => r[y] || c;
        for (let [y, m] of t.children.entries()) {
          let {type: v} = m, C = h(m, y);
          e.children.push(lr(Object.assign(Object.assign({}, C), {type: v})))
        }
      }
      return e
    }

    function Bo(i, t) {
      return zS(i, t.map(e => e.data.concat()))
    }

    function zS(i, t) {
      let e = [...i.fields], r = [], c = {numBatches: t.reduce((E, k) => Math.max(E, k.length), 0)}, h = 0, y = 0,
          m = -1, v = t.length, C, A = [];
      for (; c.numBatches-- > 0;) {
        for (y = Number.POSITIVE_INFINITY, m = -1; ++m < v;) A[m] = C = t[m].shift(), y = Math.min(y, C ? C.length : y);
        Number.isFinite(y) && (A = WS(e, y, A, t, c), y > 0 && (r[h++] = Q({
          type: new gt(e),
          length: y,
          nullCount: 0,
          children: A.slice()
        })))
      }
      return [i = i.assign(e), r.map(E => new xt(i, E))]
    }

    function WS(i, t, e, r, c) {
      var h;
      let y = (t + 63 & -64) >> 3;
      for (let m = -1, v = r.length; ++m < v;) {
        let C = e[m], A = C == null ? void 0 : C.length;
        if (A >= t) A === t ? e[m] = C : (e[m] = C.slice(0, t), c.numBatches = Math.max(c.numBatches, r[m].unshift(C.slice(t, A - t)))); else {
          let E = i[m];
          i[m] = E.clone({nullable: !0}), e[m] = (h = C == null ? void 0 : C._changeLengthAndBackfillNullBitmap(t)) !== null && h !== void 0 ? h : Q({
            type: E.type,
            length: t,
            nullCount: t,
            nullBitmap: new Uint8Array(y)
          })
        }
      }
      return e
    }

    var ip, te = class i {
      constructor(...t) {
        var e, r;
        if (t.length === 0) return this.batches = [], this.schema = new _t([]), this._offsets = [0], this;
        let c, h;
        t[0] instanceof _t && (c = t.shift()), t.at(-1) instanceof Uint32Array && (h = t.pop());
        let y = v => {
          if (v) {
            if (v instanceof xt) return [v];
            if (v instanceof i) return v.batches;
            if (v instanceof bt) {
              if (v.type instanceof gt) return [new xt(new _t(v.type.children), v)]
            } else {
              if (Array.isArray(v)) return v.flatMap(C => y(C));
              if (typeof v[Symbol.iterator] == "function") return [...v].flatMap(C => y(C));
              if (typeof v == "object") {
                let C = Object.keys(v), A = C.map(M => new ct([v[M]])),
                    E = new _t(C.map((M, dt) => new at(String(M), A[dt].type))), [, k] = Bo(E, A);
                return k.length === 0 ? [new xt(v)] : k
              }
            }
          }
          return []
        }, m = t.flatMap(v => y(v));
        if (c = (r = c != null ? c : (e = m[0]) === null || e === void 0 ? void 0 : e.schema) !== null && r !== void 0 ? r : new _t([]), !(c instanceof _t)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
        for (let v of m) {
          if (!(v instanceof xt)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
          if (!dr(c, v.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")
        }
        this.schema = c, this.batches = m, this._offsets = h != null ? h : Gs(this.data)
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
        return this._nullCount === -1 && (this._nullCount = Xs(this.data)), this._nullCount
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
        return this.batches.length > 0 ? Or.visit(new ct(this.data)) : new Array(0)[Symbol.iterator]()
      }

      toArray() {
        return [...this]
      }

      toString() {
        return "[\n  ".concat(this.toArray().join(",\n  "), "\n]")
      }

      concat(...t) {
        let e = this.schema, r = this.data.concat(t.flatMap(({data: c}) => c));
        return new i(e, r.map(c => new xt(e, c)))
      }

      slice(t, e) {
        let r = this.schema;
        [t, e] = cn({length: this.numRows}, t, e);
        let c = Ks(this.data, this._offsets, t, e);
        return new i(r, c.map(h => new xt(r, h)))
      }

      getChild(t) {
        return this.getChildAt(this.schema.fields.findIndex(e => e.name === t))
      }

      getChildAt(t) {
        if (t > -1 && t < this.schema.fields.length) {
          let e = this.data.map(r => r.children[t]);
          if (e.length === 0) {
            let {type: r} = this.schema.fields[t], c = Q({type: r, length: 0, nullCount: 0});
            e.push(c._changeLengthAndBackfillNullBitmap(this.numRows))
          }
          return new ct(e)
        }
        return null
      }

      setChild(t, e) {
        var r;
        return this.setChildAt((r = this.schema.fields) === null || r === void 0 ? void 0 : r.findIndex(c => c.name === t), e)
      }

      setChildAt(t, e) {
        let r = this.schema, c = [...this.batches];
        if (t > -1 && t < this.numCols) {
          e || (e = new ct([Q({type: new Qt, length: this.numRows})]));
          let h = r.fields.slice(), y = h[t].clone({type: e.type}),
              m = this.schema.fields.map((v, C) => this.getChildAt(C));
          [h[t], m[t]] = [y, e], [r, c] = Bo(r, m)
        }
        return new i(r, c)
      }

      select(t) {
        let e = this.schema.fields.reduce((r, c, h) => r.set(c.name, h), new Map);
        return this.selectAt(t.map(r => e.get(r)).filter(r => r > -1))
      }

      selectAt(t) {
        let e = this.schema.selectAt(t), r = this.batches.map(c => c.selectAt(t));
        return new i(e, r)
      }

      assign(t) {
        let e = this.schema.fields, [r, c] = t.schema.fields.reduce((m, v, C) => {
              let [A, E] = m, k = e.findIndex(M => M.name === v.name);
              return ~k ? E[k] = C : A.push(C), m
            }, [[], []]), h = this.schema.assign(t.schema),
            y = [...e.map((m, v) => [v, c[v]]).map(([m, v]) => v === void 0 ? this.getChildAt(m) : t.getChildAt(v)), ...r.map(m => t.getChildAt(m))].filter(Boolean);
        return new i(...Bo(h, y))
      }
    };
    ip = Symbol.toStringTag;
    te[ip] = (i => (i.schema = null, i.batches = [], i._offsets = new Uint32Array([0]), i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, i.isValid = Ri(fn), i.get = Ri(Rt.getVisitFn(B.Struct)), i.set = Js($t.getVisitFn(B.Struct)), i.indexOf = qs(rr.getVisitFn(B.Struct)), i.getByteLength = Ri(he.getVisitFn(B.Struct)), "Table"))(te.prototype);
    var np, xt = class i {
      constructor(...t) {
        switch (t.length) {
          case 2: {
            if ([this.schema] = t, !(this.schema instanceof _t)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
            if ([, this.data = Q({
              nullCount: 0,
              type: new gt(this.schema.fields),
              children: this.schema.fields.map(e => Q({type: e.type, nullCount: 0}))
            })] = t, !(this.data instanceof bt)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
            [this.schema, this.data] = rp(this.schema, this.data.children);
            break
          }
          case 1: {
            let [e] = t, {
                  fields: r,
                  children: c,
                  length: h
                } = Object.keys(e).reduce((v, C, A) => (v.children[A] = e[C], v.length = Math.max(v.length, e[C].length), v.fields[A] = at.new({
                  name: C,
                  type: e[C].type,
                  nullable: !0
                }), v), {length: 0, fields: new Array, children: new Array}), y = new _t(r),
                m = Q({type: new gt(r), length: h, children: c, nullCount: 0});
            [this.schema, this.data] = rp(y, m.children, h);
            break
          }
          default:
            throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")
        }
      }

      get dictionaries() {
        return this._dictionaries || (this._dictionaries = sp(this.schema.fields, this.data.children))
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
        return Rt.visit(this.data, t)
      }

      set(t, e) {
        return $t.visit(this.data, t, e)
      }

      indexOf(t, e) {
        return rr.visit(this.data, t, e)
      }

      getByteLength(t) {
        return he.visit(this.data, t)
      }

      [Symbol.iterator]() {
        return Or.visit(new ct([this.data]))
      }

      toArray() {
        return [...this]
      }

      concat(...t) {
        return new te(this.schema, [this, ...t])
      }

      slice(t, e) {
        let [r] = new ct([this.data]).slice(t, e).data;
        return new i(this.schema, r)
      }

      getChild(t) {
        var e;
        return this.getChildAt((e = this.schema.fields) === null || e === void 0 ? void 0 : e.findIndex(r => r.name === t))
      }

      getChildAt(t) {
        return t > -1 && t < this.schema.fields.length ? new ct([this.data.children[t]]) : null
      }

      setChild(t, e) {
        var r;
        return this.setChildAt((r = this.schema.fields) === null || r === void 0 ? void 0 : r.findIndex(c => c.name === t), e)
      }

      setChildAt(t, e) {
        let r = this.schema, c = this.data;
        if (t > -1 && t < this.numCols) {
          e || (e = new ct([Q({type: new Qt, length: this.numRows})]));
          let h = r.fields.slice(), y = c.children.slice(), m = h[t].clone({type: e.type});
          [h[t], y[t]] = [m, e.data[0]], r = new _t(h, new Map(this.schema.metadata)), c = Q({
            type: new gt(h),
            children: y
          })
        }
        return new i(r, c)
      }

      select(t) {
        let e = this.schema.select(t), r = new gt(e.fields), c = [];
        for (let h of t) {
          let y = this.schema.fields.findIndex(m => m.name === h);
          ~y && (c[y] = this.data.children[y])
        }
        return new i(e, Q({type: r, length: this.numRows, children: c}))
      }

      selectAt(t) {
        let e = this.schema.selectAt(t), r = t.map(h => this.data.children[h]).filter(Boolean),
            c = Q({type: new gt(e.fields), length: this.numRows, children: r});
        return new i(e, c)
      }
    };
    np = Symbol.toStringTag;
    xt[np] = (i => (i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(xt.prototype);

    function rp(i, t, e = t.reduce((r, c) => Math.max(r, c.length), 0)) {
      var r;
      let c = [...i.fields], h = [...t], y = (e + 63 & -64) >> 3;
      for (let [m, v] of i.fields.entries()) {
        let C = t[m];
        (!C || C.length !== e) && (c[m] = v.clone({nullable: !0}), h[m] = (r = C == null ? void 0 : C._changeLengthAndBackfillNullBitmap(e)) !== null && r !== void 0 ? r : Q({
          type: v.type,
          length: e,
          nullCount: e,
          nullBitmap: new Uint8Array(y)
        }))
      }
      return [i.assign(c), Q({type: new gt(c), length: e, children: h})]
    }

    function sp(i, t, e = new Map) {
      for (let r = -1, c = i.length; ++r < c;) {
        let y = i[r].type, m = t[r];
        if (V.isDictionary(y)) {
          if (!e.has(y.id)) m.dictionary && e.set(y.id, m.dictionary); else if (e.get(y.id) !== m.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id")
        }
        y.children && y.children.length > 0 && sp(y.children, m.children, e)
      }
      return e
    }

    var fr = class extends xt {
      constructor(t) {
        let e = t.fields.map(c => Q({type: c.type})), r = Q({type: new gt(t.fields), nullCount: 0, children: e});
        super(t, r)
      }
    };
    var Gn;
    (function (i) {
      i[i.BUFFER = 0] = "BUFFER"
    })(Gn || (Gn = {}));
    var Kn;
    (function (i) {
      i[i.LZ4_FRAME = 0] = "LZ4_FRAME", i[i.ZSTD = 1] = "ZSTD"
    })(Kn || (Kn = {}));
    var Ao = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsBodyCompression(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsBodyCompression(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      codec() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt8(this.bb_pos + t) : Kn.LZ4_FRAME
      }

      method() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readInt8(this.bb_pos + t) : Gn.BUFFER
      }

      static startBodyCompression(t) {
        t.startObject(2)
      }

      static addCodec(t, e) {
        t.addFieldInt8(0, e, Kn.LZ4_FRAME)
      }

      static addMethod(t, e) {
        t.addFieldInt8(1, e, Gn.BUFFER)
      }

      static endBodyCompression(t) {
        return t.endObject()
      }

      static createBodyCompression(t, e, r) {
        return i.startBodyCompression(t), i.addCodec(t, e), i.addMethod(t, r), i.endBodyCompression(t)
      }
    };
    var Hr = class {
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
        return t.prep(8, 16), t.writeInt64(BigInt(r != null ? r : 0)), t.writeInt64(BigInt(e != null ? e : 0)), t.offset()
      }
    };
    var zr = class {
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
        return t.prep(8, 16), t.writeInt64(BigInt(r != null ? r : 0)), t.writeInt64(BigInt(e != null ? e : 0)), t.offset()
      }
    };
    var ye = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsRecordBatch(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsRecordBatch(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      length() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0")
      }

      nodes(t, e) {
        let r = this.bb.__offset(this.bb_pos, 6);
        return r ? (e || new zr).__init(this.bb.__vector(this.bb_pos + r) + t * 16, this.bb) : null
      }

      nodesLength() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      buffers(t, e) {
        let r = this.bb.__offset(this.bb_pos, 8);
        return r ? (e || new Hr).__init(this.bb.__vector(this.bb_pos + r) + t * 16, this.bb) : null
      }

      buffersLength() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      compression(t) {
        let e = this.bb.__offset(this.bb_pos, 10);
        return e ? (t || new Ao).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
      }

      static startRecordBatch(t) {
        t.startObject(4)
      }

      static addLength(t, e) {
        t.addFieldInt64(0, e, BigInt("0"))
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
    var Bi = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsDictionaryBatch(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsDictionaryBatch(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      id() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0")
      }

      data(t) {
        let e = this.bb.__offset(this.bb_pos, 6);
        return e ? (t || new ye).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
      }

      isDelta() {
        let t = this.bb.__offset(this.bb_pos, 8);
        return t ? !!this.bb.readInt8(this.bb_pos + t) : !1
      }

      static startDictionaryBatch(t) {
        t.startObject(3)
      }

      static addId(t, e) {
        t.addFieldInt64(0, e, BigInt("0"))
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
    var Wr;
    (function (i) {
      i[i.NONE = 0] = "NONE", i[i.Schema = 1] = "Schema", i[i.DictionaryBatch = 2] = "DictionaryBatch", i[i.RecordBatch = 3] = "RecordBatch", i[i.Tensor = 4] = "Tensor", i[i.SparseTensor = 5] = "SparseTensor"
    })(Wr || (Wr = {}));
    var Ve = class i {
      constructor() {
        this.bb = null, this.bb_pos = 0
      }

      __init(t, e) {
        return this.bb_pos = t, this.bb = e, this
      }

      static getRootAsMessage(t, e) {
        return (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      static getSizePrefixedRootAsMessage(t, e) {
        return t.setPosition(t.position() + 4), (e || new i).__init(t.readInt32(t.position()) + t.position(), t)
      }

      version() {
        let t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt16(this.bb_pos + t) : Ui.V1
      }

      headerType() {
        let t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readUint8(this.bb_pos + t) : Wr.NONE
      }

      header(t) {
        let e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__union(t, this.bb_pos + e) : null
      }

      bodyLength() {
        let t = this.bb.__offset(this.bb_pos, 10);
        return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0")
      }

      customMetadata(t, e) {
        let r = this.bb.__offset(this.bb_pos, 12);
        return r ? (e || new Lt).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null
      }

      customMetadataLength() {
        let t = this.bb.__offset(this.bb_pos, 12);
        return t ? this.bb.__vector_len(this.bb_pos + t) : 0
      }

      static startMessage(t) {
        t.startObject(5)
      }

      static addVersion(t, e) {
        t.addFieldInt16(0, e, Ui.V1)
      }

      static addHeaderType(t, e) {
        t.addFieldInt8(1, e, Wr.NONE)
      }

      static addHeader(t, e) {
        t.addFieldOffset(2, e, 0)
      }

      static addBodyLength(t, e) {
        t.addFieldInt64(3, e, BigInt("0"))
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

      static createMessage(t, e, r, c, h, y) {
        return i.startMessage(t), i.addVersion(t, e), i.addHeaderType(t, r), i.addHeader(t, c), i.addBodyLength(t, h), i.addCustomMetadata(t, y), i.endMessage(t)
      }
    };
    var Wa = class extends H {
      visit(t, e) {
        return t == null || e == null ? void 0 : super.visit(t, e)
      }

      visitNull(t, e) {
        return wn.startNull(e), wn.endNull(e)
      }

      visitInt(t, e) {
        return Le.startInt(e), Le.addBitWidth(e, t.bitWidth), Le.addIsSigned(e, t.isSigned), Le.endInt(e)
      }

      visitFloat(t, e) {
        return zi.startFloatingPoint(e), zi.addPrecision(e, t.precision), zi.endFloatingPoint(e)
      }

      visitBinary(t, e) {
        return _n.startBinary(e), _n.endBinary(e)
      }

      visitBool(t, e) {
        return yn.startBool(e), yn.endBool(e)
      }

      visitUtf8(t, e) {
        return In.startUtf8(e), In.endUtf8(e)
      }

      visitDecimal(t, e) {
        return Qe.startDecimal(e), Qe.addScale(e, t.scale), Qe.addPrecision(e, t.precision), Qe.addBitWidth(e, t.bitWidth), Qe.endDecimal(e)
      }

      visitDate(t, e) {
        return Li.startDate(e), Li.addUnit(e, t.unit), Li.endDate(e)
      }

      visitTime(t, e) {
        return bi.startTime(e), bi.addUnit(e, t.unit), bi.addBitWidth(e, t.bitWidth), bi.endTime(e)
      }

      visitTimestamp(t, e) {
        let r = t.timezone && e.createString(t.timezone) || void 0;
        return vi.startTimestamp(e), vi.addUnit(e, t.unit), r !== void 0 && vi.addTimezone(e, r), vi.endTimestamp(e)
      }

      visitInterval(t, e) {
        return Wi.startInterval(e), Wi.addUnit(e, t.unit), Wi.endInterval(e)
      }

      visitList(t, e) {
        return gn.startList(e), gn.endList(e)
      }

      visitStruct(t, e) {
        return jn.startStruct_(e), jn.endStruct_(e)
      }

      visitUnion(t, e) {
        Pe.startTypeIdsVector(e, t.typeIds.length);
        let r = Pe.createTypeIdsVector(e, t.typeIds);
        return Pe.startUnion(e), Pe.addMode(e, t.mode), Pe.addTypeIds(e, r), Pe.endUnion(e)
      }

      visitDictionary(t, e) {
        let r = this.visit(t.indices, e);
        return Ze.startDictionaryEncoding(e), Ze.addId(e, BigInt(t.id)), Ze.addIsOrdered(e, t.isOrdered), r !== void 0 && Ze.addIndexType(e, r), Ze.endDictionaryEncoding(e)
      }

      visitFixedSizeBinary(t, e) {
        return Vi.startFixedSizeBinary(e), Vi.addByteWidth(e, t.byteWidth), Vi.endFixedSizeBinary(e)
      }

      visitFixedSizeList(t, e) {
        return Hi.startFixedSizeList(e), Hi.addListSize(e, t.listSize), Hi.endFixedSizeList(e)
      }

      visitMap(t, e) {
        return $i.startMap(e), $i.addKeysSorted(e, t.keysSorted), $i.endMap(e)
      }
    }, xo = new Wa;

    function cp(i, t = new Map) {
      return new _t(YS(i, t), To(i.customMetadata), t)
    }

    function $a(i) {
      return new Yt(i.count, dp(i.columns), fp(i.columns))
    }

    function up(i) {
      return new oe($a(i.data), i.id, i.isDelta)
    }

    function YS(i, t) {
      return (i.fields || []).filter(Boolean).map(e => at.fromJSON(e, t))
    }

    function op(i, t) {
      return (i.children || []).filter(Boolean).map(e => at.fromJSON(e, t))
    }

    function dp(i) {
      return (i || []).reduce((t, e) => [...t, new He(e.count, XS(e.VALIDITY)), ...dp(e.children)], [])
    }

    function fp(i, t = []) {
      for (let e = -1, r = (i || []).length; ++e < r;) {
        let c = i[e];
        c.VALIDITY && t.push(new se(t.length, c.VALIDITY.length)), c.TYPE && t.push(new se(t.length, c.TYPE.length)), c.OFFSET && t.push(new se(t.length, c.OFFSET.length)), c.DATA && t.push(new se(t.length, c.DATA.length)), t = fp(c.children, t)
      }
      return t
    }

    function XS(i) {
      return (i || []).reduce((t, e) => t + +(e === 0), 0)
    }

    function hp(i, t) {
      let e, r, c, h, y, m;
      return !t || !(h = i.dictionary) ? (y = lp(i, op(i, t)), c = new at(i.name, y, i.nullable, To(i.customMetadata))) : t.has(e = h.id) ? (r = (r = h.indexType) ? ap(r) : new Xe, m = new de(t.get(e), r, e, h.isOrdered), c = new at(i.name, m, i.nullable, To(i.customMetadata))) : (r = (r = h.indexType) ? ap(r) : new Xe, t.set(e, y = lp(i, op(i, t))), m = new de(y, r, e, h.isOrdered), c = new at(i.name, m, i.nullable, To(i.customMetadata))), c || null
    }

    function To(i) {
      return new Map(Object.entries(i || {}))
    }

    function ap(i) {
      return new Et(i.isSigned, i.bitWidth)
    }

    function lp(i, t) {
      let e = i.type.name;
      switch (e) {
        case"NONE":
          return new Qt;
        case"null":
          return new Qt;
        case"binary":
          return new li;
        case"utf8":
          return new ci;
        case"bool":
          return new ui;
        case"list":
          return new ke((t || [])[0]);
        case"struct":
          return new gt(t || []);
        case"struct_":
          return new gt(t || [])
      }
      switch (e) {
        case"int": {
          let r = i.type;
          return new Et(r.isSigned, r.bitWidth)
        }
        case"floatingpoint": {
          let r = i.type;
          return new ie(St[r.precision])
        }
        case"decimal": {
          let r = i.type;
          return new di(r.scale, r.precision, r.bitWidth)
        }
        case"date": {
          let r = i.type;
          return new fi(Wt[r.unit])
        }
        case"time": {
          let r = i.type;
          return new Ee(lt[r.unit], r.bitWidth)
        }
        case"timestamp": {
          let r = i.type;
          return new hi(lt[r.unit], r.timezone)
        }
        case"interval": {
          let r = i.type;
          return new pi(Zt[r.unit])
        }
        case"union": {
          let r = i.type;
          return new Oe(Bt[r.mode], r.typeIds || [], t || [])
        }
        case"fixedsizebinary": {
          let r = i.type;
          return new _i(r.byteWidth)
        }
        case"fixedsizelist": {
          let r = i.type;
          return new Re(r.listSize, (t || [])[0])
        }
        case"map": {
          let r = i.type;
          return new Me((t || [])[0], r.keysSorted)
        }
      }
      throw new Error('Unrecognized type: "'.concat(e, '"'))
    }

    var GS = sr, KS = pe, ae = class i {
      static fromJSON(t, e) {
        let r = new i(0, Pt.V4, e);
        return r._createHeader = JS(t, e), r
      }

      static decode(t) {
        t = new KS(J(t));
        let e = Ve.getRootAsMessage(t), r = e.bodyLength(), c = e.version(), h = e.headerType(), y = new i(r, c, h);
        return y._createHeader = qS(e, h), y
      }

      static encode(t) {
        let e = new GS, r = -1;
        return t.isSchema() ? r = _t.encode(e, t.header()) : t.isRecordBatch() ? r = Yt.encode(e, t.header()) : t.isDictionaryBatch() && (r = oe.encode(e, t.header())), Ve.startMessage(e), Ve.addVersion(e, Pt.V4), Ve.addHeader(e, r), Ve.addHeaderType(e, t.headerType), Ve.addBodyLength(e, BigInt(t.bodyLength)), Ve.finishMessageBuffer(e, Ve.endMessage(e)), e.asUint8Array()
      }

      static from(t, e = 0) {
        if (t instanceof _t) return new i(0, Pt.V4, ft.Schema, t);
        if (t instanceof Yt) return new i(e, Pt.V4, ft.RecordBatch, t);
        if (t instanceof oe) return new i(e, Pt.V4, ft.DictionaryBatch, t);
        throw new Error("Unrecognized Message header: ".concat(t))
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

      constructor(t, e, r, c) {
        this._version = e, this._headerType = r, this.body = new Uint8Array(0), c && (this._createHeader = () => c), this._bodyLength = ee(t)
      }
    }, Yt = class {
      get nodes() {
        return this._nodes
      }

      get length() {
        return this._length
      }

      get buffers() {
        return this._buffers
      }

      constructor(t, e, r) {
        this._nodes = e, this._buffers = r, this._length = ee(t)
      }
    }, oe = class {
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

      constructor(t, e, r = !1) {
        this._data = t, this._isDelta = r, this._id = ee(e)
      }
    }, se = class {
      constructor(t, e) {
        this.offset = ee(t), this.length = ee(e)
      }
    }, He = class {
      constructor(t, e) {
        this.length = ee(t), this.nullCount = ee(e)
      }
    };

    function JS(i, t) {
      return () => {
        switch (t) {
          case ft.Schema:
            return _t.fromJSON(i);
          case ft.RecordBatch:
            return Yt.fromJSON(i);
          case ft.DictionaryBatch:
            return oe.fromJSON(i)
        }
        throw new Error("Unrecognized Message type: { name: ".concat(ft[t], ", type: ").concat(t, " }"))
      }
    }

    function qS(i, t) {
      return () => {
        switch (t) {
          case ft.Schema:
            return _t.decode(i.header(new re));
          case ft.RecordBatch:
            return Yt.decode(i.header(new ye), i.version());
          case ft.DictionaryBatch:
            return oe.decode(i.header(new Bi), i.version())
        }
        throw new Error("Unrecognized Message type: { name: ".concat(ft[t], ", type: ").concat(t, " }"))
      }
    }

    at.encode = lI;
    at.decode = oI;
    at.fromJSON = hp;
    _t.encode = aI;
    _t.decode = ZS;
    _t.fromJSON = cp;
    Yt.encode = cI;
    Yt.decode = QS;
    Yt.fromJSON = $a;
    oe.encode = uI;
    oe.decode = tI;
    oe.fromJSON = up;
    He.encode = dI;
    He.decode = iI;
    se.encode = fI;
    se.decode = eI;

    function ZS(i, t = new Map) {
      let e = sI(i, t);
      return new _t(e, Do(i), t)
    }

    function QS(i, t = Pt.V4) {
      if (i.compression() !== null) throw new Error("Record batch compression not implemented");
      return new Yt(i.length(), rI(i), nI(i, t))
    }

    function tI(i, t = Pt.V4) {
      return new oe(Yt.decode(i.data(), t), i.id(), i.isDelta())
    }

    function eI(i) {
      return new se(i.offset(), i.length())
    }

    function iI(i) {
      return new He(i.length(), i.nullCount())
    }

    function rI(i) {
      let t = [];
      for (let e, r = -1, c = -1, h = i.nodesLength(); ++r < h;) (e = i.nodes(r)) && (t[++c] = He.decode(e));
      return t
    }

    function nI(i, t) {
      let e = [];
      for (let r, c = -1, h = -1, y = i.buffersLength(); ++c < y;) (r = i.buffers(c)) && (t < Pt.V4 && (r.bb_pos += 8 * (c + 1)), e[++h] = se.decode(r));
      return e
    }

    function sI(i, t) {
      let e = [];
      for (let r, c = -1, h = -1, y = i.fieldsLength(); ++c < y;) (r = i.fields(c)) && (e[++h] = at.decode(r, t));
      return e
    }

    function pp(i, t) {
      let e = [];
      for (let r, c = -1, h = -1, y = i.childrenLength(); ++c < y;) (r = i.children(c)) && (e[++h] = at.decode(r, t));
      return e
    }

    function oI(i, t) {
      let e, r, c, h, y, m;
      return !t || !(m = i.dictionary()) ? (c = yp(i, pp(i, t)), r = new at(i.name(), c, i.nullable(), Do(i))) : t.has(e = ee(m.id())) ? (h = (h = m.indexType()) ? _p(h) : new Xe, y = new de(t.get(e), h, e, m.isOrdered()), r = new at(i.name(), y, i.nullable(), Do(i))) : (h = (h = m.indexType()) ? _p(h) : new Xe, t.set(e, c = yp(i, pp(i, t))), y = new de(c, h, e, m.isOrdered()), r = new at(i.name(), y, i.nullable(), Do(i))), r || null
    }

    function Do(i) {
      let t = new Map;
      if (i) for (let e, r, c = -1, h = Math.trunc(i.customMetadataLength()); ++c < h;) (e = i.customMetadata(c)) && (r = e.key()) != null && t.set(r, e.value());
      return t
    }

    function _p(i) {
      return new Et(i.isSigned(), i.bitWidth())
    }

    function yp(i, t) {
      let e = i.typeType();
      switch (e) {
        case Ct.NONE:
          return new Qt;
        case Ct.Null:
          return new Qt;
        case Ct.Binary:
          return new li;
        case Ct.Utf8:
          return new ci;
        case Ct.Bool:
          return new ui;
        case Ct.List:
          return new ke((t || [])[0]);
        case Ct.Struct_:
          return new gt(t || [])
      }
      switch (e) {
        case Ct.Int: {
          let r = i.type(new Le);
          return new Et(r.isSigned(), r.bitWidth())
        }
        case Ct.FloatingPoint: {
          let r = i.type(new zi);
          return new ie(r.precision())
        }
        case Ct.Decimal: {
          let r = i.type(new Qe);
          return new di(r.scale(), r.precision(), r.bitWidth())
        }
        case Ct.Date: {
          let r = i.type(new Li);
          return new fi(r.unit())
        }
        case Ct.Time: {
          let r = i.type(new bi);
          return new Ee(r.unit(), r.bitWidth())
        }
        case Ct.Timestamp: {
          let r = i.type(new vi);
          return new hi(r.unit(), r.timezone())
        }
        case Ct.Interval: {
          let r = i.type(new Wi);
          return new pi(r.unit())
        }
        case Ct.Union: {
          let r = i.type(new Pe);
          return new Oe(r.mode(), r.typeIdsArray() || [], t || [])
        }
        case Ct.FixedSizeBinary: {
          let r = i.type(new Vi);
          return new _i(r.byteWidth())
        }
        case Ct.FixedSizeList: {
          let r = i.type(new Hi);
          return new Re(r.listSize(), (t || [])[0])
        }
        case Ct.Map: {
          let r = i.type(new $i);
          return new Me((t || [])[0], r.keysSorted())
        }
      }
      throw new Error('Unrecognized type: "'.concat(Ct[e], '" (').concat(e, ")"))
    }

    function aI(i, t) {
      let e = t.fields.map(h => at.encode(i, h));
      re.startFieldsVector(i, e.length);
      let r = re.createFieldsVector(i, e),
          c = t.metadata && t.metadata.size > 0 ? re.createCustomMetadataVector(i, [...t.metadata].map(([h, y]) => {
            let m = i.createString("".concat(h)), v = i.createString("".concat(y));
            return Lt.startKeyValue(i), Lt.addKey(i, m), Lt.addValue(i, v), Lt.endKeyValue(i)
          })) : -1;
      return re.startSchema(i), re.addFields(i, r), re.addEndianness(i, hI ? Ni.Little : Ni.Big), c !== -1 && re.addCustomMetadata(i, c), re.endSchema(i)
    }

    function lI(i, t) {
      let e = -1, r = -1, c = -1, h = t.type, y = t.typeId;
      V.isDictionary(h) ? (y = h.dictionary.typeId, c = xo.visit(h, i), r = xo.visit(h.dictionary, i)) : r = xo.visit(h, i);
      let m = (h.children || []).map(A => at.encode(i, A)), v = Gt.createChildrenVector(i, m),
          C = t.metadata && t.metadata.size > 0 ? Gt.createCustomMetadataVector(i, [...t.metadata].map(([A, E]) => {
            let k = i.createString("".concat(A)), M = i.createString("".concat(E));
            return Lt.startKeyValue(i), Lt.addKey(i, k), Lt.addValue(i, M), Lt.endKeyValue(i)
          })) : -1;
      return t.name && (e = i.createString(t.name)), Gt.startField(i), Gt.addType(i, r), Gt.addTypeType(i, y), Gt.addChildren(i, v), Gt.addNullable(i, !!t.nullable), e !== -1 && Gt.addName(i, e), c !== -1 && Gt.addDictionary(i, c), C !== -1 && Gt.addCustomMetadata(i, C), Gt.endField(i)
    }

    function cI(i, t) {
      let e = t.nodes || [], r = t.buffers || [];
      ye.startNodesVector(i, e.length);
      for (let y of e.slice().reverse()) He.encode(i, y);
      let c = i.endVector();
      ye.startBuffersVector(i, r.length);
      for (let y of r.slice().reverse()) se.encode(i, y);
      let h = i.endVector();
      return ye.startRecordBatch(i), ye.addLength(i, BigInt(t.length)), ye.addNodes(i, c), ye.addBuffers(i, h), ye.endRecordBatch(i)
    }

    function uI(i, t) {
      let e = Yt.encode(i, t.data);
      return Bi.startDictionaryBatch(i), Bi.addId(i, BigInt(t.id)), Bi.addIsDelta(i, t.isDelta), Bi.addData(i, e), Bi.endDictionaryBatch(i)
    }

    function dI(i, t) {
      return zr.createFieldNode(i, BigInt(t.length), BigInt(t.nullCount))
    }

    function fI(i, t) {
      return Hr.createBuffer(i, BigInt(t.offset), BigInt(t.length))
    }

    var hI = (() => {
      let i = new ArrayBuffer(2);
      return new DataView(i).setInt16(0, 256, !0), new Int16Array(i)[0] === 256
    })();
    var Xa = i => "Expected ".concat(ft[i], " Message in stream, but was null or length 0."),
        Ga = i => "Header pointer of flatbuffer-encoded ".concat(ft[i], " Message is null or length 0."),
        mp = (i, t) => "Expected to read ".concat(i, " metadata bytes, but only read ").concat(t, "."),
        bp = (i, t) => "Expected to read ".concat(i, " bytes for message body, but only read ").concat(t, "."),
        $r = class {
          constructor(t) {
            this.source = t instanceof ei ? t : new ei(t)
          }

          [Symbol.iterator]() {
            return this
          }

          next() {
            let t;
            return (t = this.readMetadataLength()).done ? wt : t.value === -1 && (t = this.readMetadataLength()).done ? wt : (t = this.readMetadata(t.value)).done ? wt : t
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
            if (t != null && e.value.headerType !== t) throw new Error(Xa(t));
            return e.value
          }

          readMessageBody(t) {
            if (t <= 0) return new Uint8Array(0);
            let e = J(this.source.read(t));
            if (e.byteLength < t) throw new Error(bp(t, e.byteLength));
            return e.byteOffset % 8 === 0 && e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
          }

          readSchema(t = !1) {
            let e = ft.Schema, r = this.readMessage(e), c = r == null ? void 0 : r.header();
            if (t && !c) throw new Error(Ga(e));
            return c
          }

          readMetadataLength() {
            let t = this.source.read(Eo), e = t && new pe(t), r = (e == null ? void 0 : e.readInt32(0)) || 0;
            return {done: r === 0, value: r}
          }

          readMetadata(t) {
            let e = this.source.read(t);
            if (!e) return wt;
            if (e.byteLength < t) throw new Error(mp(t, e.byteLength));
            return {done: !1, value: ae.decode(e)}
          }
        }, Jn = class {
          constructor(t, e) {
            this.source = t instanceof Ie ? t : ys(t) ? new Yi(t, e) : new Ie(t)
          }

          [Symbol.asyncIterator]() {
            return this
          }

          next() {
            return R(this, void 0, void 0, function* () {
              let t;
              return (t = yield this.readMetadataLength()).done ? wt : t.value === -1 && (t = yield this.readMetadataLength()).done ? wt : (t = yield this.readMetadata(t.value)).done ? wt : t
            })
          }

          throw(t) {
            return R(this, void 0, void 0, function* () {
              return yield this.source.throw(t)
            })
          }

          return(t) {
            return R(this, void 0, void 0, function* () {
              return yield this.source.return(t)
            })
          }

          readMessage(t) {
            return R(this, void 0, void 0, function* () {
              let e;
              if ((e = yield this.next()).done) return null;
              if (t != null && e.value.headerType !== t) throw new Error(Xa(t));
              return e.value
            })
          }

          readMessageBody(t) {
            return R(this, void 0, void 0, function* () {
              if (t <= 0) return new Uint8Array(0);
              let e = J(yield this.source.read(t));
              if (e.byteLength < t) throw new Error(bp(t, e.byteLength));
              return e.byteOffset % 8 === 0 && e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
            })
          }

          readSchema(t = !1) {
            return R(this, void 0, void 0, function* () {
              let e = ft.Schema, r = yield this.readMessage(e), c = r == null ? void 0 : r.header();
              if (t && !c) throw new Error(Ga(e));
              return c
            })
          }

          readMetadataLength() {
            return R(this, void 0, void 0, function* () {
              let t = yield this.source.read(Eo), e = t && new pe(t), r = (e == null ? void 0 : e.readInt32(0)) || 0;
              return {done: r === 0, value: r}
            })
          }

          readMetadata(t) {
            return R(this, void 0, void 0, function* () {
              let e = yield this.source.read(t);
              if (!e) return wt;
              if (e.byteLength < t) throw new Error(mp(t, e.byteLength));
              return {done: !1, value: ae.decode(e)}
            })
          }
        }, qn = class extends $r {
          constructor(t) {
            super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof Cn ? t : new Cn(t)
          }

          next() {
            let {_json: t} = this;
            if (!this._schema) return this._schema = !0, {done: !1, value: ae.fromJSON(t.schema, ft.Schema)};
            if (this._dictionaryIndex < t.dictionaries.length) {
              let e = t.dictionaries[this._dictionaryIndex++];
              return this._body = e.data.columns, {done: !1, value: ae.fromJSON(e, ft.DictionaryBatch)}
            }
            if (this._batchIndex < t.batches.length) {
              let e = t.batches[this._batchIndex++];
              return this._body = e.columns, {done: !1, value: ae.fromJSON(e, ft.RecordBatch)}
            }
            return this._body = [], wt
          }

          readMessageBody(t) {
            return e(this._body);

            function e(r) {
              return (r || []).reduce((c, h) => [...c, ...h.VALIDITY && [h.VALIDITY] || [], ...h.TYPE && [h.TYPE] || [], ...h.OFFSET && [h.OFFSET] || [], ...h.DATA && [h.DATA] || [], ...e(h.children)], [])
            }
          }

          readMessage(t) {
            let e;
            if ((e = this.next()).done) return null;
            if (t != null && e.value.headerType !== t) throw new Error(Xa(t));
            return e.value
          }

          readSchema() {
            let t = ft.Schema, e = this.readMessage(t), r = e == null ? void 0 : e.header();
            if (!e || !r) throw new Error(Ga(t));
            return r
          }
        }, Eo = 4, Ya = "ARROW1", Yr = new Uint8Array(Ya.length);
    for (let i = 0; i < Ya.length; i += 1) Yr[i] = Ya.codePointAt(i);

    function ko(i, t = 0) {
      for (let e = -1, r = Yr.length; ++e < r;) if (Yr[e] !== i[t + e]) return !1;
      return !0
    }

    var Xr = Yr.length, Ka = Xr + Eo, vp = Xr * 2 + Eo;
    var Xt = class i extends or {
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
        return Ae(e) ? e.then(() => this) : this
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
        return zt.toDOMStream(this.isSync() ? {[Symbol.iterator]: () => this} : {[Symbol.asyncIterator]: () => this})
      }

      toNodeStream() {
        return zt.toNodeStream(this.isSync() ? {[Symbol.iterator]: () => this} : {[Symbol.asyncIterator]: () => this}, {objectMode: !0})
      }

      static throughNode(t) {
        throw new Error('"throughNode" not available in this environment')
      }

      static throughDOM(t, e) {
        throw new Error('"throughDOM" not available in this environment')
      }

      static from(t) {
        return t instanceof i ? t : ps(t) ? _I(t) : ys(t) ? bI(t) : Ae(t) ? (() => R(this, void 0, void 0, function* () {
          return yield i.from(yield t)
        }))() : ms(t) || nn(t) || vs(t) || ge(t) ? mI(new Ie(t)) : yI(new ei(t))
      }

      static readAll(t) {
        return t instanceof i ? t.isSync() ? gp(t) : wp(t) : ps(t) || ArrayBuffer.isView(t) || xe(t) || _s(t) ? gp(t) : wp(t)
      }
    }, ri = class extends Xt {
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
        return ce(this, arguments, function* () {
          yield Z(yield* Qi(Ir(Be(this[Symbol.iterator]()))))
        })
      }
    }, Xi = class extends Xt {
      constructor(t) {
        super(t), this._impl = t
      }

      readAll() {
        var t, e, r, c;
        return R(this, void 0, void 0, function* () {
          let h = new Array;
          try {
            for (var y = !0, m = Be(this), v; v = yield m.next(), t = v.done, !t; y = !0) {
              c = v.value, y = !1;
              let C = c;
              h.push(C)
            }
          } catch (C) {
            e = {error: C}
          } finally {
            try {
              !y && !t && (r = m.return) && (yield r.call(m))
            } finally {
              if (e) throw e.error
            }
          }
          return h
        })
      }

      [Symbol.iterator]() {
        throw new Error("AsyncRecordBatchStreamReader is not Iterable")
      }

      [Symbol.asyncIterator]() {
        return this._impl[Symbol.asyncIterator]()
      }
    }, Gi = class extends ri {
      constructor(t) {
        super(t), this._impl = t
      }
    }, Zn = class extends Xi {
      constructor(t) {
        super(t), this._impl = t
      }
    }, Oo = class {
      get numDictionaries() {
        return this._dictionaryIndex
      }

      get numRecordBatches() {
        return this._recordBatchIndex
      }

      constructor(t = new Map) {
        this.closed = !1, this.autoDestroy = !0, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = t
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
            c = Q({type: new gt(this.schema.fields), length: t.length, children: r});
        return new xt(this.schema, c)
      }

      _loadDictionaryBatch(t, e) {
        let {id: r, isDelta: c} = t, {dictionaries: h, schema: y} = this, m = h.get(r);
        if (c || !m) {
          let v = y.dictionaries.get(r), C = this._loadVectors(t.data, e, [v]);
          return (m && c ? m.concat(new ct(C)) : new ct(C)).memoize()
        }
        return m.memoize()
      }

      _loadVectors(t, e, r) {
        return new xn(e, t.nodes, t.buffers, this.dictionaries).visitMany(r)
      }
    }, Gr = class extends Oo {
      constructor(t, e) {
        super(e), this._reader = ps(t) ? new qn(this._handle = t) : new $r(this._handle = t)
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
        return this.closed || (this.autoDestroy = jp(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this
      }

      throw(t) {
        return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : wt
      }

      return(t) {
        return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : wt
      }

      next() {
        if (this.closed) return wt;
        let t, {_reader: e} = this;
        for (; t = this._readNextMessageAndValidate();) if (t.isSchema()) this.reset(t.header()); else if (t.isRecordBatch()) {
          this._recordBatchIndex++;
          let r = t.header(), c = e.readMessageBody(t.bodyLength);
          return {done: !1, value: this._loadRecordBatch(r, c)}
        } else if (t.isDictionaryBatch()) {
          this._dictionaryIndex++;
          let r = t.header(), c = e.readMessageBody(t.bodyLength), h = this._loadDictionaryBatch(r, c);
          this.dictionaries.set(r.id, h)
        }
        return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, {
          done: !1,
          value: new fr(this.schema)
        }) : this.return()
      }

      _readNextMessageAndValidate(t) {
        return this._reader.readMessage(t)
      }
    }, Kr = class extends Oo {
      constructor(t, e) {
        super(e), this._reader = new Jn(this._handle = t)
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
        return R(this, void 0, void 0, function* () {
          !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null)
        })
      }

      open(t) {
        return R(this, void 0, void 0, function* () {
          return this.closed || (this.autoDestroy = jp(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this
        })
      }

      throw(t) {
        return R(this, void 0, void 0, function* () {
          return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : wt
        })
      }

      return(t) {
        return R(this, void 0, void 0, function* () {
          return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : wt
        })
      }

      next() {
        return R(this, void 0, void 0, function* () {
          if (this.closed) return wt;
          let t, {_reader: e} = this;
          for (; t = yield this._readNextMessageAndValidate();) if (t.isSchema()) yield this.reset(t.header()); else if (t.isRecordBatch()) {
            this._recordBatchIndex++;
            let r = t.header(), c = yield e.readMessageBody(t.bodyLength);
            return {done: !1, value: this._loadRecordBatch(r, c)}
          } else if (t.isDictionaryBatch()) {
            this._dictionaryIndex++;
            let r = t.header(), c = yield e.readMessageBody(t.bodyLength), h = this._loadDictionaryBatch(r, c);
            this.dictionaries.set(r.id, h)
          }
          return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, {
            done: !1,
            value: new fr(this.schema)
          }) : yield this.return()
        })
      }

      _readNextMessageAndValidate(t) {
        return R(this, void 0, void 0, function* () {
          return yield this._reader.readMessage(t)
        })
      }
    }, Ro = class extends Gr {
      get footer() {
        return this._footer
      }

      get numDictionaries() {
        return this._footer ? this._footer.numDictionaries : 0
      }

      get numRecordBatches() {
        return this._footer ? this._footer.numRecordBatches : 0
      }

      constructor(t, e) {
        super(t instanceof Fn ? t : new Fn(t), e)
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
          let c = this._reader.readMessage(ft.RecordBatch);
          if (c != null && c.isRecordBatch()) {
            let h = c.header(), y = this._reader.readMessageBody(c.bodyLength);
            return this._loadRecordBatch(h, y)
          }
        }
        return null
      }

      _readDictionaryBatch(t) {
        var e;
        let r = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
        if (r && this._handle.seek(r.offset)) {
          let c = this._reader.readMessage(ft.DictionaryBatch);
          if (c != null && c.isDictionaryBatch()) {
            let h = c.header(), y = this._reader.readMessageBody(c.bodyLength), m = this._loadDictionaryBatch(h, y);
            this.dictionaries.set(h.id, m)
          }
        }
      }

      _readFooter() {
        let {_handle: t} = this, e = t.size - Ka, r = t.readInt32(e), c = t.readAt(e - r, r);
        return gi.decode(c)
      }

      _readNextMessageAndValidate(t) {
        var e;
        if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
          let r = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(this._recordBatchIndex);
          if (r && this._handle.seek(r.offset)) return this._reader.readMessage(t)
        }
        return null
      }
    }, Ja = class extends Kr {
      get footer() {
        return this._footer
      }

      get numDictionaries() {
        return this._footer ? this._footer.numDictionaries : 0
      }

      get numRecordBatches() {
        return this._footer ? this._footer.numRecordBatches : 0
      }

      constructor(t, ...e) {
        let r = typeof e[0] != "number" ? e.shift() : void 0, c = e[0] instanceof Map ? e.shift() : void 0;
        super(t instanceof Yi ? t : new Yi(t, r), c)
      }

      isFile() {
        return !0
      }

      isAsync() {
        return !0
      }

      open(t) {
        let e = Object.create(null, {open: {get: () => super.open}});
        return R(this, void 0, void 0, function* () {
          if (!this.closed && !this._footer) {
            this.schema = (this._footer = yield this._readFooter()).schema;
            for (let r of this._footer.dictionaryBatches()) r && (yield this._readDictionaryBatch(this._dictionaryIndex++))
          }
          return yield e.open.call(this, t)
        })
      }

      readRecordBatch(t) {
        var e;
        return R(this, void 0, void 0, function* () {
          if (this.closed) return null;
          this._footer || (yield this.open());
          let r = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
          if (r && (yield this._handle.seek(r.offset))) {
            let c = yield this._reader.readMessage(ft.RecordBatch);
            if (c != null && c.isRecordBatch()) {
              let h = c.header(), y = yield this._reader.readMessageBody(c.bodyLength);
              return this._loadRecordBatch(h, y)
            }
          }
          return null
        })
      }

      _readDictionaryBatch(t) {
        var e;
        return R(this, void 0, void 0, function* () {
          let r = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
          if (r && (yield this._handle.seek(r.offset))) {
            let c = yield this._reader.readMessage(ft.DictionaryBatch);
            if (c != null && c.isDictionaryBatch()) {
              let h = c.header(), y = yield this._reader.readMessageBody(c.bodyLength),
                  m = this._loadDictionaryBatch(h, y);
              this.dictionaries.set(h.id, m)
            }
          }
        })
      }

      _readFooter() {
        return R(this, void 0, void 0, function* () {
          let {_handle: t} = this;
          t._pending && (yield t._pending);
          let e = t.size - Ka, r = yield t.readInt32(e), c = yield t.readAt(e - r, r);
          return gi.decode(c)
        })
      }

      _readNextMessageAndValidate(t) {
        return R(this, void 0, void 0, function* () {
          if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
            let e = this._footer.getRecordBatch(this._recordBatchIndex);
            if (e && (yield this._handle.seek(e.offset))) return yield this._reader.readMessage(t)
          }
          return null
        })
      }
    }, qa = class extends Gr {
      constructor(t, e) {
        super(t, e)
      }

      _loadVectors(t, e, r) {
        return new no(e, t.nodes, t.buffers, this.dictionaries).visitMany(r)
      }
    };

    function jp(i, t) {
      return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : i.autoDestroy
    }

    function* gp(i) {
      let t = Xt.from(i);
      try {
        if (!t.open({autoDestroy: !1}).closed) do yield t; while (!t.reset().open().closed)
      } finally {
        t.cancel()
      }
    }

    function wp(i) {
      return ce(this, arguments, function* () {
        let e = yield Z(Xt.from(i));
        try {
          if (!(yield Z(e.open({autoDestroy: !1}))).closed) do yield yield Z(e); while (!(yield Z(e.reset().open())).closed)
        } finally {
          yield Z(e.cancel())
        }
      })
    }

    function _I(i) {
      return new ri(new qa(i))
    }

    function yI(i) {
      let t = i.peek(Xr + 7 & -8);
      return t && t.byteLength >= 4 ? ko(t) ? new Gi(new Ro(i.read())) : new ri(new Gr(i)) : new ri(new Gr(function* () {
      }()))
    }

    function mI(i) {
      return R(this, void 0, void 0, function* () {
        let t = yield i.peek(Xr + 7 & -8);
        return t && t.byteLength >= 4 ? ko(t) ? new Gi(new Ro(yield i.read())) : new Xi(new Kr(i)) : new Xi(new Kr(function () {
          return ce(this, arguments, function* () {
          })
        }()))
      })
    }

    function bI(i) {
      return R(this, void 0, void 0, function* () {
        let {size: t} = yield i.stat(), e = new Yi(i, t);
        return t >= vp && ko(yield e.readAt(0, Xr + 7 & -8)) ? new Zn(new Ja(e)) : new Xi(new Kr(e))
      })
    }

    var kt = class i extends H {
      static assemble(...t) {
        let e = c => c.flatMap(h => Array.isArray(h) ? e(h) : h instanceof xt ? h.data.children : h.data), r = new i;
        return r.visitMany(e(t)), r
      }

      constructor() {
        super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = []
      }

      visit(t) {
        if (t instanceof ct) return this.visitMany(t.data), this;
        let {type: e} = t;
        if (!V.isDictionary(e)) {
          let {length: r, nullCount: c} = t;
          if (r > 2147483647) throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
          V.isNull(e) || ze.call(this, c <= 0 ? new Uint8Array(0) : kr(t.offset, r, t.nullBitmap)), this.nodes.push(new He(r, c))
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

    function ze(i) {
      let t = i.byteLength + 7 & -8;
      return this.buffers.push(i), this.bufferRegions.push(new se(this._byteLength, t)), this._byteLength += t, this
    }

    function vI(i) {
      let {type: t, length: e, typeIds: r, valueOffsets: c} = i;
      if (ze.call(this, r), t.mode === Bt.Sparse) return Za.call(this, i);
      if (t.mode === Bt.Dense) {
        if (i.offset <= 0) return ze.call(this, c), Za.call(this, i);
        {
          let h = r.reduce((A, E) => Math.max(A, E), r[0]), y = new Int32Array(h + 1),
              m = new Int32Array(h + 1).fill(-1), v = new Int32Array(e), C = sn(-c[0], e, c);
          for (let A, E, k = -1; ++k < e;) (E = m[A = r[k]]) === -1 && (E = m[A] = C[A]), v[k] = C[k] - E, ++y[A];
          ze.call(this, v);
          for (let A, E = -1, k = t.children.length; ++E < k;) if (A = i.children[E]) {
            let M = t.typeIds[E], dt = Math.min(e, y[M]);
            this.visit(A.slice(m[M], dt))
          }
        }
      }
      return this
    }

    function gI(i) {
      let t;
      return i.nullCount >= i.length ? ze.call(this, new Uint8Array(0)) : (t = i.values) instanceof Uint8Array ? ze.call(this, kr(i.offset, i.length, t)) : ze.call(this, ir(i.values))
    }

    function Ki(i) {
      return ze.call(this, i.values.subarray(0, i.length * i.stride))
    }

    function Sp(i) {
      let {length: t, values: e, valueOffsets: r} = i, c = r[0], h = r[t], y = Math.min(h - c, e.byteLength - c);
      return ze.call(this, sn(-r[0], t, r)), ze.call(this, e.subarray(c, c + y)), this
    }

    function Qa(i) {
      let {length: t, valueOffsets: e} = i;
      return e && ze.call(this, sn(e[0], t, e)), this.visit(i.children[0])
    }

    function Za(i) {
      return this.visitMany(i.type.children.map((t, e) => i.children[e]).filter(Boolean))[0]
    }

    kt.prototype.visitBool = gI;
    kt.prototype.visitInt = Ki;
    kt.prototype.visitFloat = Ki;
    kt.prototype.visitUtf8 = Sp;
    kt.prototype.visitBinary = Sp;
    kt.prototype.visitFixedSizeBinary = Ki;
    kt.prototype.visitDate = Ki;
    kt.prototype.visitTimestamp = Ki;
    kt.prototype.visitTime = Ki;
    kt.prototype.visitDecimal = Ki;
    kt.prototype.visitList = Qa;
    kt.prototype.visitStruct = Za;
    kt.prototype.visitUnion = vI;
    kt.prototype.visitInterval = Ki;
    kt.prototype.visitFixedSizeList = Qa;
    kt.prototype.visitMap = Qa;
    var hr = class extends or {
      static throughNode(t) {
        throw new Error('"throughNode" not available in this environment')
      }

      static throughDOM(t, e) {
        throw new Error('"throughDOM" not available in this environment')
      }

      constructor(t) {
        super(), this._position = 0, this._started = !1, this._sink = new ti, this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = new Map, qt(t) || (t = {
          autoDestroy: !0,
          writeLegacyIpcFormat: !1
        }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1
      }

      toString(t = !1) {
        return this._sink.toString(t)
      }

      toUint8Array(t = !1) {
        return this._sink.toUint8Array(t)
      }

      writeAll(t) {
        return Ae(t) ? t.then(e => this.writeAll(e)) : ge(t) ? el(this, t) : tl(this, t)
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
        return t === this._sink || t instanceof ti ? this._sink = t : (this._sink = new ti, t && Xf(t) ? this.toDOMStream({type: "bytes"}).pipeTo(t) : t && Gf(t) && this.toNodeStream({objectMode: !1}).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = new Map, (!e || !dr(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this
      }

      write(t) {
        let e = null;
        if (this._sink) {
          if (t == null) return this.finish() && void 0;
          if (t instanceof te && !(e = t.schema)) return this.finish() && void 0;
          if (t instanceof xt && !(e = t.schema)) return this.finish() && void 0
        } else throw new Error("RecordBatchWriter is closed");
        if (e && !dr(e, this._schema)) {
          if (this._started && this._autoDestroy) return this.close();
          this.reset(this._sink, e)
        }
        t instanceof xt ? t instanceof fr || this._writeRecordBatch(t) : t instanceof te ? this.writeAll(t.batches) : xe(t) && this.writeAll(t)
      }

      _writeMessage(t, e = 8) {
        let r = e - 1, c = ae.encode(t), h = c.byteLength, y = this._writeLegacyIpcFormat ? 4 : 8, m = h + y + r & ~r,
            v = m - h - y;
        return t.headerType === ft.RecordBatch ? this._recordBatchBlocks.push(new wi(m, t.bodyLength, this._position)) : t.headerType === ft.DictionaryBatch && this._dictionaryBlocks.push(new wi(m, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(m - y)), h > 0 && this._write(c), this._writePadding(v)
      }

      _write(t) {
        if (this._started) {
          let e = J(t);
          e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength)
        }
        return this
      }

      _writeSchema(t) {
        return this._writeMessage(ae.from(t))
      }

      _writeFooter(t) {
        return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0))
      }

      _writeMagic() {
        return this._write(Yr)
      }

      _writePadding(t) {
        return t > 0 ? this._write(new Uint8Array(t)) : this
      }

      _writeRecordBatch(t) {
        let {byteLength: e, nodes: r, bufferRegions: c, buffers: h} = kt.assemble(t), y = new Yt(t.numRows, r, c),
            m = ae.from(y, e);
        return this._writeDictionaries(t)._writeMessage(m)._writeBodyBuffers(h)
      }

      _writeDictionaryBatch(t, e, r = !1) {
        this._dictionaryDeltaOffsets.set(e, t.length + (this._dictionaryDeltaOffsets.get(e) || 0));
        let {byteLength: c, nodes: h, bufferRegions: y, buffers: m} = kt.assemble(new ct([t])),
            v = new Yt(t.length, h, y), C = new oe(v, e, r), A = ae.from(C, c);
        return this._writeMessage(A)._writeBodyBuffers(m)
      }

      _writeBodyBuffers(t) {
        let e, r, c;
        for (let h = -1, y = t.length; ++h < y;) (e = t[h]) && (r = e.byteLength) > 0 && (this._write(e), (c = (r + 7 & -8) - r) > 0 && this._writePadding(c));
        return this
      }

      _writeDictionaries(t) {
        for (let [e, r] of t.dictionaries) {
          let c = this._dictionaryDeltaOffsets.get(e) || 0;
          if (c === 0 || (r = r == null ? void 0 : r.slice(c)).length > 0) for (let h of r.data) this._writeDictionaryBatch(h, e, c > 0), c += h.length
        }
        return this
      }
    }, pr = class i extends hr {
      static writeAll(t, e) {
        let r = new i(e);
        return Ae(t) ? t.then(c => r.writeAll(c)) : ge(t) ? el(r, t) : tl(r, t)
      }
    }, _r = class i extends hr {
      static writeAll(t) {
        let e = new i;
        return Ae(t) ? t.then(r => e.writeAll(r)) : ge(t) ? el(e, t) : tl(e, t)
      }

      constructor() {
        super(), this._autoDestroy = !0
      }

      _writeSchema(t) {
        return this._writeMagic()._writePadding(2)
      }

      _writeFooter(t) {
        let e = gi.encode(new gi(t, Pt.V4, this._recordBatchBlocks, this._dictionaryBlocks));
        return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()
      }
    };

    function tl(i, t) {
      let e = t;
      t instanceof te && (e = t.batches, i.reset(void 0, t.schema));
      for (let r of e) i.write(r);
      return i.finish()
    }

    function el(i, t) {
      var e, r, c, h, y, m, v;
      return R(this, void 0, void 0, function* () {
        try {
          for (e = !0, r = Be(t); c = yield r.next(), h = c.done, !h; e = !0) {
            v = c.value, e = !1;
            let C = v;
            i.write(C)
          }
        } catch (C) {
          y = {error: C}
        } finally {
          try {
            !e && !h && (m = r.return) && (yield m.call(r))
          } finally {
            if (y) throw y.error
          }
        }
        return i.finish()
      })
    }

    function Ip(i, t) {
      if (ge(i)) return jI(i, t);
      if (xe(i)) return wI(i, t);
      throw new Error("toDOMStream() must be called with an Iterable or AsyncIterable")
    }

    function wI(i, t) {
      let e = null, r = (t == null ? void 0 : t.type) === "bytes" || !1,
          c = (t == null ? void 0 : t.highWaterMark) || Math.pow(2, 24);
      return new ReadableStream(Object.assign(Object.assign({}, t), {
        start(y) {
          h(y, e || (e = i[Symbol.iterator]()))
        }, pull(y) {
          e ? h(y, e) : y.close()
        }, cancel() {
          (e != null && e.return && e.return() || !0) && (e = null)
        }
      }), Object.assign({highWaterMark: r ? c : void 0}, t));

      function h(y, m) {
        let v, C = null, A = y.desiredSize || null;
        for (; !(C = m.next(r ? A : null)).done;) if (ArrayBuffer.isView(C.value) && (v = J(C.value)) && (A != null && r && (A = A - v.byteLength + 1), C.value = v), y.enqueue(C.value), A != null && --A <= 0) return;
        y.close()
      }
    }

    function jI(i, t) {
      let e = null, r = (t == null ? void 0 : t.type) === "bytes" || !1,
          c = (t == null ? void 0 : t.highWaterMark) || Math.pow(2, 24);
      return new ReadableStream(Object.assign(Object.assign({}, t), {
        start(y) {
          return R(this, void 0, void 0, function* () {
            yield h(y, e || (e = i[Symbol.asyncIterator]()))
          })
        }, pull(y) {
          return R(this, void 0, void 0, function* () {
            e ? yield h(y, e) : y.close()
          })
        }, cancel() {
          return R(this, void 0, void 0, function* () {
            (e != null && e.return && (yield e.return()) || !0) && (e = null)
          })
        }
      }), Object.assign({highWaterMark: r ? c : void 0}, t));

      function h(y, m) {
        return R(this, void 0, void 0, function* () {
          let v, C = null, A = y.desiredSize || null;
          for (; !(C = yield m.next(r ? A : null)).done;) if (ArrayBuffer.isView(C.value) && (v = J(C.value)) && (A != null && r && (A = A - v.byteLength + 1), C.value = v), y.enqueue(C.value), A != null && --A <= 0) return;
          y.close()
        })
      }
    }

    function Bp(i) {
      return new il(i)
    }

    var il = class {
      constructor(t) {
        this._numChunks = 0, this._finished = !1, this._bufferedSize = 0;
        let {["readableStrategy"]: e, ["writableStrategy"]: r, ["queueingStrategy"]: c = "count"} = t,
            h = $f(t, ["readableStrategy", "writableStrategy", "queueingStrategy"]);
        this._controller = null, this._builder = lr(h), this._getSize = c !== "bytes" ? Cp : Fp;
        let {["highWaterMark"]: y = c === "bytes" ? Math.pow(2, 14) : 1e3} = Object.assign({}, e), {["highWaterMark"]: m = c === "bytes" ? Math.pow(2, 14) : 1e3} = Object.assign({}, r);
        this.readable = new ReadableStream({
          cancel: () => {
            this._builder.clear()
          }, pull: v => {
            this._maybeFlush(this._builder, this._controller = v)
          }, start: v => {
            this._maybeFlush(this._builder, this._controller = v)
          }
        }, {highWaterMark: y, size: c !== "bytes" ? Cp : Fp}), this.writable = new WritableStream({
          abort: () => {
            this._builder.clear()
          }, write: () => {
            this._maybeFlush(this._builder, this._controller)
          }, close: () => {
            this._maybeFlush(this._builder.finish(), this._controller)
          }
        }, {highWaterMark: m, size: v => this._writeValueAndReturnChunkSize(v)})
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
    }, Cp = i => {
      var t;
      return (t = i == null ? void 0 : i.length) !== null && t !== void 0 ? t : 0
    }, Fp = i => {
      var t;
      return (t = i == null ? void 0 : i.byteLength) !== null && t !== void 0 ? t : 0
    };

    function Mo(i, t) {
      let e = new ti, r = null, c = new ReadableStream({
        cancel() {
          return R(this, void 0, void 0, function* () {
            yield e.close()
          })
        }, start(m) {
          return R(this, void 0, void 0, function* () {
            yield y(m, r || (r = yield h()))
          })
        }, pull(m) {
          return R(this, void 0, void 0, function* () {
            r ? yield y(m, r) : m.close()
          })
        }
      });
      return {writable: new WritableStream(e, Object.assign({highWaterMark: Math.pow(2, 14)}, i)), readable: c};

      function h() {
        return R(this, void 0, void 0, function* () {
          return yield(yield Xt.from(e)).open(t)
        })
      }

      function y(m, v) {
        return R(this, void 0, void 0, function* () {
          let C = m.desiredSize, A = null;
          for (; !(A = yield v.next()).done;) if (m.enqueue(A.value), C != null && --C <= 0) return;
          m.close()
        })
      }
    }

    function Uo(i, t) {
      let e = new this(i), r = new Ie(e), c = new ReadableStream({
        cancel() {
          return R(this, void 0, void 0, function* () {
            yield r.cancel()
          })
        }, pull(y) {
          return R(this, void 0, void 0, function* () {
            yield h(y)
          })
        }, start(y) {
          return R(this, void 0, void 0, function* () {
            yield h(y)
          })
        }
      }, Object.assign({highWaterMark: Math.pow(2, 14)}, t));
      return {writable: new WritableStream(e, i), readable: c};

      function h(y) {
        return R(this, void 0, void 0, function* () {
          let m = null, v = y.desiredSize;
          for (; m = yield r.read(v || null);) if (y.enqueue(m), v != null && (v -= m.byteLength) <= 0) return;
          y.close()
        })
      }
    }

    function No(i, t = "stream") {
      return (t === "stream" ? pr : _r).writeAll(i).toUint8Array(!0)
    }

    var FI = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pa), La), Ta), _a), ua), xa), {
      compareSchemas: dr,
      compareFields: tp,
      compareTypes: ep
    });
    zt.toDOMStream = Ip;
    It.throughDOM = Bp;
    Xt.throughDOM = Mo;
    Gi.throughDOM = Mo;
    ri.throughDOM = Mo;
    hr.throughDOM = Uo;
    _r.throughDOM = Uo;
    pr.throughDOM = Uo;

    function Jr(i) {
      switch (i.typeId) {
        case B.Binary:
          return {sqlType: "binary"};
        case B.Bool:
          return {sqlType: "bool"};
        case B.Date:
          return {sqlType: "date"};
        case B.DateDay:
          return {sqlType: "date32[d]"};
        case B.DateMillisecond:
          return {sqlType: "date64[ms]"};
        case B.Decimal: {
          let t = i;
          return {sqlType: "decimal", precision: t.precision, scale: t.scale}
        }
        case B.Float:
          return {sqlType: "float"};
        case B.Float16:
          return {sqlType: "float16"};
        case B.Float32:
          return {sqlType: "float32"};
        case B.Float64:
          return {sqlType: "float64"};
        case B.Int:
          return {sqlType: "int32"};
        case B.Int16:
          return {sqlType: "int16"};
        case B.Int32:
          return {sqlType: "int32"};
        case B.Int64:
          return {sqlType: "int64"};
        case B.Uint16:
          return {sqlType: "uint16"};
        case B.Uint32:
          return {sqlType: "uint32"};
        case B.Uint64:
          return {sqlType: "uint64"};
        case B.Uint8:
          return {sqlType: "uint8"};
        case B.IntervalDayTime:
          return {sqlType: "interval[dt]"};
        case B.IntervalYearMonth:
          return {sqlType: "interval[m]"};
        case B.List:
          return {sqlType: "list", valueType: Jr(i.valueType)};
        case B.FixedSizeBinary:
          return {sqlType: "fixedsizebinary", byteWidth: i.byteWidth};
        case B.Null:
          return {sqlType: "null"};
        case B.Utf8:
          return {sqlType: "utf8"};
        case B.Struct:
          return {sqlType: "struct", fields: i.children.map(e => Lo(e.name, e.type))};
        case B.Map: {
          let t = i;
          return {sqlType: "map", keyType: Jr(t.keyType), valueType: Jr(t.valueType)}
        }
        case B.Time:
          return {sqlType: "time[s]"};
        case B.TimeMicrosecond:
          return {sqlType: "time[us]"};
        case B.TimeMillisecond:
          return {sqlType: "time[ms]"};
        case B.TimeNanosecond:
          return {sqlType: "time[ns]"};
        case B.TimeSecond:
          return {sqlType: "time[s]"};
        case B.Timestamp:
          return {sqlType: "timestamp", timezone: i.timezone || void 0};
        case B.TimestampSecond:
          return {sqlType: "timestamp[s]", timezone: i.timezone || void 0};
        case B.TimestampMicrosecond:
          return {sqlType: "timestamp[us]", timezone: i.timezone || void 0};
        case B.TimestampNanosecond:
          return {sqlType: "timestamp[ns]", timezone: i.timezone || void 0};
        case B.TimestampMillisecond:
          return {sqlType: "timestamp[ms]", timezone: i.timezone || void 0}
      }
      throw new Error("unsupported arrow type: ".concat(i.toString()))
    }

    function Lo(i, t) {
      let e = Jr(t);
      return e.name = i, e
    }

    var Po = class {
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
              console.log(e), this._bindings = null, this.failWith(t, e)
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
                data: e.useUnsafe((r, c) => c)
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
          return console.log(e), this.failWith(t, e)
        }
      }
    };
    var Np = zf(kp());
    var Vo = class {
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
        let e = this._bindings.runQuery(this._conn, t), r = Xt.from(e);
        return console.assert(r.isSync()), console.assert(r.isFile()), new te(r)
      }

      async send(t) {
        let e = this._bindings.startPendingQuery(this._conn, t);
        for (; e == null;) e = await new Promise((h, y) => {
          try {
            h(this._bindings.pollPendingQuery(this._conn))
          } catch (m) {
            console.log(m), y(m)
          }
        });
        let r = new Ho(this._bindings, this._conn, e), c = Xt.from(r);
        return console.assert(c.isSync()), console.assert(c.isStream()), c
      }

      cancelSent() {
        return this._bindings.cancelPendingQuery(this._conn)
      }

      getTableNames(t) {
        return this._bindings.getTableNames(this._conn, t)
      }

      prepare(t) {
        let e = this._bindings.createPrepared(this._conn, t);
        return new nl(this._bindings, this._conn, e)
      }

      createScalarFunction(t, e, r) {
        this._bindings.createScalarFunction(this._conn, t, e, r)
      }

      insertArrowTable(t, e) {
        let r = No(t, "stream");
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
    }, Ho = class {
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
    }, nl = class {
      constructor(t, e, r) {
        this.bindings = t, this.connectionId = e, this.statementId = r
      }

      close() {
        this.bindings.closePrepared(this.connectionId, this.statementId)
      }

      query(...t) {
        let e = this.bindings.runPrepared(this.connectionId, this.statementId, t), r = Xt.from(e);
        return console.assert(r.isSync()), console.assert(r.isFile()), new te(r)
      }

      send(...t) {
        let e = this.bindings.sendPrepared(this.connectionId, this.statementId, t),
            r = new Ho(this.bindings, this.connectionId, e), c = Xt.from(r);
        return console.assert(c.isSync()), console.assert(c.isStream()), c
      }
    };
    var Mp = new TextEncoder, Op = new TextDecoder("utf-8");

    function sl(i, t, e) {
      let r = Mp.encode(e), c = i._malloc(r.byteLength), h = i.HEAPU8.subarray(c, c + r.byteLength);
      h.set(r), i.HEAPF64[(t >> 3) + 0] = 1, i.HEAPF64[(t >> 3) + 1] = c, i.HEAPF64[(t >> 3) + 2] = h.byteLength
    }

    function al(i) {
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

    function ol(i, t, e, r) {
      let c = i.HEAPU8.subarray(t, t + r * al(e));
      switch (e) {
        case"UINT8":
          return new Uint8Array(c.buffer, c.byteOffset, r);
        case"INT8":
          return new Int8Array(c.buffer, c.byteOffset, r);
        case"INT32":
          return new Int32Array(c.buffer, c.byteOffset, r);
        case"FLOAT":
          return new Float32Array(c.buffer, c.byteOffset, r);
        case"DOUBLE":
          return new Float64Array(c.buffer, c.byteOffset, r);
        case"VARCHAR":
          return new Float64Array(c.buffer, c.byteOffset, r);
        default:
          return new Array(0)
      }
    }

    function Rp(i, t, e) {
      let r = i.HEAPU8.subarray(t, t + e);
      return new Uint8Array(r.buffer, r.byteOffset, e)
    }

    function zo(i, t, e) {
      let r = i.HEAPU8.subarray(t, t + e * 8);
      return new Float64Array(r.buffer, r.byteOffset, e)
    }

    function Up(i, t, e, r, c, h, y, m) {
      try {
        let v = i._udfFunctions.get(r);
        if (!v) {
          sl(t, e, "Unknown UDF with id: " + r);
          return
        }
        let C = Op.decode(t.HEAPU8.subarray(c, c + h)), A = JSON.parse(C), E = zo(t, y, m / 8), k = ut => {
          var Dt;
          let Ft = null;
          switch (ut.validityBuffer !== void 0 && (Ft = Rp(t, E[ut.validityBuffer], A.rows)), ut.physicalType) {
            case"VARCHAR": {
              if (ut.dataBuffer === null || ut.dataBuffer === void 0) throw new Error("malformed data view, expected data buffer for VARCHAR argument");
              if (ut.lengthBuffer === null || ut.lengthBuffer === void 0) throw new Error("malformed data view, expected data length buffer for VARCHAR argument");
              let Ut = ol(t, E[ut.dataBuffer], ut.physicalType, A.rows), Ht = [], O = zo(t, E[ut.lengthBuffer], A.rows);
              for (let W = 0; W < A.rows; ++W) {
                if (Ft != null && !Ft[W]) {
                  Ht.push(null);
                  continue
                }
                let le = t.HEAPU8.subarray(Ut[W], Ut[W] + O[W]), vr = Op.decode(le);
                Ht.push(vr)
              }
              return W => Ht[W]
            }
            case"STRUCT": {
              let Ut = {}, Ht = [];
              for (let O = 0; O < (((Dt = ut.children) == null ? void 0 : Dt.length) || 0); ++O) {
                let W = ut.children[O], le = k(W);
                Ht.push(vr => {
                  Ut[W.name] = le(vr)
                })
              }
              return Ft != null ? O => {
                if (!Ft[O]) return null;
                for (let W of Ht) W(O);
                return Ut
              } : O => {
                for (let W of Ht) W(O);
                return Ut
              }
            }
            default: {
              if (ut.dataBuffer === void 0) throw new Error("malformed data view, expected data buffer for argument of type: " + ut.physicalType);
              let Ut = ol(t, E[ut.dataBuffer], ut.physicalType, A.rows);
              return Ft != null ? Ht => Ft[Ht] ? Ut[Ht] : null : Ht => Ut[Ht]
            }
          }
        }, M = [];
        for (let ut = 0; ut < A.args.length; ++ut) M.push(k(A.args[ut]));
        let dt = A.rows * al(A.ret.physicalType), Tt = t._malloc(dt), Ot = ol(t, Tt, A.ret.physicalType, A.rows),
            Mt = t._malloc(A.rows), Kt = Rp(t, Mt, A.rows);
        if (Ot.length == 0 || Kt.length == 0) {
          sl(t, e, "Can't create physical arrays for result");
          return
        }
        let me = Ot;
        A.ret.physicalType == "VARCHAR" && (me = new Array(A.rows));
        let We = [];
        for (let ut = 0; ut < A.args.length; ++ut) We.push(null);
        for (let ut = 0; ut < A.rows; ++ut) {
          for (let Dt = 0; Dt < A.args.length; ++Dt) We[Dt] = M[Dt](ut);
          let Ft = v.func(...We);
          me[ut] = Ft, Kt[ut] = Ft == null ? 0 : 1
        }
        let oi = 0;
        switch (A.ret.physicalType) {
          case"VARCHAR": {
            let ut = new Array(0);
            oi = t._malloc(A.rows * al("DOUBLE"));
            let Ft = zo(t, oi, A.rows), Dt = 0;
            for (let W = 0; W < A.rows; ++W) {
              let le = Mp.encode(me[W] || "");
              ut.push(le), Ft[W] = le.length, Dt += le.length
            }
            let Ut = t._malloc(Dt), Ht = t.HEAPU8.subarray(Ut, Ut + Dt), O = 0;
            for (let W = 0; W < A.rows; ++W) {
              Ot[W] = O;
              let le = ut[W];
              Ht.subarray(O, O + le.length).set(le), O += le.length
            }
          }
        }
        let mr = 3 * 8, br = t._malloc(mr), Ai = zo(t, br, 3);
        Ai[0] = Tt, Ai[1] = Mt, Ai[2] = oi, t.HEAPF64[(e >> 3) + 0] = 0, t.HEAPF64[(e >> 3) + 1] = br, t.HEAPF64[(e >> 3) + 2] = 0
      } catch (v) {
        sl(t, e, v.toString())
      }
    }

    function AI() {
      let i = new TextDecoder;
      return t => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), i.decode(t))
    }

    var xI = AI();

    function Fe(i, t) {
      console.error("FAIL WITH: ".concat(t)), i.ccall("duckdb_web_fail_with", null, ["string"], [t])
    }

    function yr(i, t, e) {
      let r = i.HEAPU8.subarray(t, t + e), c = new Uint8Array(new ArrayBuffer(r.byteLength));
      return c.set(r), c
    }

    function it(i, t, e) {
      return xI(i.HEAPU8.subarray(t, t + e))
    }

    function yt(i, t, e, r) {
      let c = i.stackSave(), h = i.stackAlloc(3 * 8);
      e.unshift("number"), r.unshift(h), i.ccall(t, null, e, r);
      let y = i.HEAPF64[(h >> 3) + 0], m = i.HEAPF64[(h >> 3) + 1], v = i.HEAPF64[(h >> 3) + 2];
      return i.stackRestore(c), [y, m, v]
    }

    function jt(i) {
      i.ccall("duckdb_web_clear_response", null, [], [])
    }

    var Wo = class {
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
    var TI = new TextEncoder;
    var $o = class {
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
        let [e, r, c] = yt(this.mod, "duckdb_web_open", ["string"], [JSON.stringify(t)]);
        if (e !== 0) throw new Error(it(this.mod, r, c));
        jt(this.mod)
      }

      reset() {
        let [t, e, r] = yt(this.mod, "duckdb_web_reset", [], []);
        if (t !== 0) throw new Error(it(this.mod, e, r));
        jt(this.mod)
      }

      getVersion() {
        let [t, e, r] = yt(this.mod, "duckdb_web_get_version", [], []);
        if (t !== 0) throw new Error(it(this.mod, e, r));
        let c = it(this.mod, e, r);
        return jt(this.mod), c
      }

      getFeatureFlags() {
        return this.mod.ccall("duckdb_web_get_feature_flags", "number", [], [])
      }

      tokenize(t) {
        let [e, r, c] = yt(this.mod, "duckdb_web_tokenize", ["string"], [t]);
        if (e !== 0) throw new Error(it(this.mod, r, c));
        let h = it(this.mod, r, c);
        return jt(this.mod), JSON.parse(h)
      }

      connect() {
        let t = this.mod.ccall("duckdb_web_connect", "number", [], []);
        return new Vo(this, t)
      }

      disconnect(t) {
        if (this.mod.ccall("duckdb_web_disconnect", null, ["number"], [t]), this.pthread) for (let e of [...this.pthread.runningWorkers, ...this.pthread.unusedWorkers]) e.postMessage({
          cmd: "dropUDFFunctions",
          connectionId: t
        })
      }

      runQuery(t, e) {
        let [r, c, h] = yt(this.mod, "duckdb_web_query_run", ["number", "string"], [t, e]);
        if (r !== 0) throw new Error(it(this.mod, c, h));
        let y = yr(this.mod, c, h);
        return jt(this.mod), y
      }

      startPendingQuery(t, e) {
        let [r, c, h] = yt(this.mod, "duckdb_web_pending_query_start", ["number", "string"], [t, e]);
        if (r !== 0) throw new Error(it(this.mod, c, h));
        if (c == 0) return null;
        let y = yr(this.mod, c, h);
        return jt(this.mod), y
      }

      pollPendingQuery(t) {
        let [e, r, c] = yt(this.mod, "duckdb_web_pending_query_poll", ["number"], [t]);
        if (e !== 0) throw new Error(it(this.mod, r, c));
        if (r == 0) return null;
        let h = yr(this.mod, r, c);
        return jt(this.mod), h
      }

      cancelPendingQuery(t) {
        return this.mod.ccall("duckdb_web_pending_query_cancel", "boolean", ["number"], [t])
      }

      fetchQueryResults(t) {
        let [e, r, c] = yt(this.mod, "duckdb_web_query_fetch_results", ["number"], [t]);
        if (e !== 0) throw new Error(it(this.mod, r, c));
        let h = yr(this.mod, r, c);
        return jt(this.mod), h
      }

      getTableNames(t, e) {
        let [r, c, h] = yt(this.mod, "duckdb_web_get_tablenames", ["number", "string"], [t, e]);
        if (r !== 0) throw new Error(it(this.mod, c, h));
        let y = it(this.mod, c, h);
        return jt(this.mod), JSON.parse(y)
      }

      createScalarFunction(t, e, r, c) {
        let h = {functionId: this._nextUDFId, name: e, returnType: Jr(r)},
            y = {functionId: h.functionId, connectionId: t, name: e, returnType: r, func: c};
        this._nextUDFId += 1;
        let [m, v, C] = yt(this.mod, "duckdb_web_udf_scalar_create", ["number", "string"], [t, JSON.stringify(h)]);
        if (m !== 0) throw new Error(it(this.mod, v, C));
        if (jt(this.mod), globalThis.DUCKDB_RUNTIME._udfFunctions = (globalThis.DUCKDB_RUNTIME._udfFunctions || new Map).set(y.functionId, y), this.pthread) for (let A of [...this.pthread.runningWorkers, ...this.pthread.unusedWorkers]) A.postMessage({
          cmd: "registerUDFFunction",
          udf: y
        })
      }

      createPrepared(t, e) {
        let [r, c, h] = yt(this.mod, "duckdb_web_prepared_create", ["number", "string"], [t, e]);
        if (r !== 0) throw new Error(it(this.mod, c, h));
        return jt(this.mod), c
      }

      closePrepared(t, e) {
        let [r, c, h] = yt(this.mod, "duckdb_web_prepared_close", ["number", "number"], [t, e]);
        if (r !== 0) throw new Error(it(this.mod, c, h));
        jt(this.mod)
      }

      runPrepared(t, e, r) {
        let [c, h, y] = yt(this.mod, "duckdb_web_prepared_run", ["number", "number", "string"], [t, e, JSON.stringify(r)]);
        if (c !== 0) throw new Error(it(this.mod, h, y));
        let m = yr(this.mod, h, y);
        return jt(this.mod), m
      }

      sendPrepared(t, e, r) {
        let [c, h, y] = yt(this.mod, "duckdb_web_prepared_send", ["number", "number", "string"], [t, e, JSON.stringify(r)]);
        if (c !== 0) throw new Error(it(this.mod, h, y));
        let m = yr(this.mod, h, y);
        return jt(this.mod), m
      }

      insertArrowFromIPCStream(t, e, r) {
        if (e.length == 0) return;
        let c = this.mod._malloc(e.length);
        this.mod.HEAPU8.subarray(c, c + e.length).set(e);
        let y = r ? JSON.stringify(r) : "", [m, v, C] = yt(this.mod, "duckdb_web_insert_arrow_from_ipc_stream", ["number", "number", "number", "string"], [t, c, e.length, y]);
        if (m !== 0) throw new Error(it(this.mod, v, C))
      }

      insertCSVFromPath(t, e, r) {
        if (r.columns !== void 0) {
          r.columnsFlat = [];
          for (let C in r.columns) r.columnsFlat.push(Lo(C, r.columns[C]))
        }
        let c = {...r};
        c.columns = c.columnsFlat, delete c.columnsFlat;
        let h = JSON.stringify(c), [y, m, v] = yt(this.mod, "duckdb_web_insert_csv_from_path", ["number", "string", "string"], [t, e, h]);
        if (y !== 0) throw new Error(it(this.mod, m, v))
      }

      insertJSONFromPath(t, e, r) {
        if (r.columns !== void 0) {
          r.columnsFlat = [];
          for (let C in r.columns) r.columnsFlat.push(Lo(C, r.columns[C]))
        }
        let c = {...r};
        c.columns = c.columnsFlat, delete c.columnsFlat;
        let h = JSON.stringify(c), [y, m, v] = yt(this.mod, "duckdb_web_insert_json_from_path", ["number", "string", "string"], [t, e, h]);
        if (y !== 0) throw new Error(it(this.mod, m, v))
      }

      globFiles(t) {
        let [e, r, c] = yt(this.mod, "duckdb_web_fs_glob_file_infos", ["string"], [t]);
        if (e !== 0) throw new Error(it(this.mod, r, c));
        let h = it(this.mod, r, c);
        jt(this.mod);
        let y = JSON.parse(h);
        return y == null ? [] : y
      }

      registerFileURL(t, e, r, c = !1) {
        e === void 0 && (e = t);
        let [h, y, m] = yt(this.mod, "duckdb_web_fs_register_file_url", ["string", "string"], [t, e, r, c]);
        if (h !== 0) throw new Error(it(this.mod, y, m));
        jt(this.mod)
      }

      registerFileText(t, e) {
        let r = TI.encode(e);
        this.registerFileBuffer(t, r)
      }

      registerFileBuffer(t, e) {
        let r = this.mod._malloc(e.length);
        this.mod.HEAPU8.subarray(r, r + e.length).set(e);
        let [h, y, m] = yt(this.mod, "duckdb_web_fs_register_file_buffer", ["string", "number", "number"], [t, r, e.length]);
        if (h !== 0) throw new Error(it(this.mod, y, m));
        jt(this.mod)
      }

      registerFileHandle(t, e, r, c) {
        let [h, y, m] = yt(this.mod, "duckdb_web_fs_register_file_url", ["string", "string", "number", "boolean"], [t, t, r, c]);
        if (h !== 0) throw new Error(it(this.mod, y, m));
        if (jt(this.mod), globalThis.DUCKDB_RUNTIME._files = (globalThis.DUCKDB_RUNTIME._files || new Map).set(t, e), this.pthread) {
          for (let v of this.pthread.runningWorkers) v.postMessage({
            cmd: "registerFileHandle",
            fileName: t,
            fileHandle: e
          });
          for (let v of this.pthread.unusedWorkers) v.postMessage({cmd: "dropFileHandle", fileName: t})
        }
      }

      dropFile(t) {
        let [e, r, c] = yt(this.mod, "duckdb_web_fs_drop_file", ["string"], [t]);
        if (e !== 0) throw new Error(it(this.mod, r, c));
        jt(this.mod)
      }

      dropFiles() {
        let [t, e, r] = yt(this.mod, "duckdb_web_fs_drop_files", [], []);
        if (t !== 0) throw new Error(it(this.mod, e, r));
        jt(this.mod)
      }

      flushFiles() {
        this.mod.ccall("duckdb_web_flush_files", null, [], [])
      }

      copyFileToPath(t, e) {
        let [r, c, h] = yt(this.mod, "duckdb_web_copy_file_to_path", ["string", "string"], [t, e]);
        if (r !== 0) throw new Error(it(this.mod, c, h));
        jt(this.mod)
      }

      copyFileToBuffer(t) {
        let [e, r, c] = yt(this.mod, "duckdb_web_copy_file_to_buffer", ["string"], [t]);
        if (e !== 0) throw new Error(it(this.mod, r, c));
        let h = this.mod.HEAPU8.subarray(r, r + c), y = new Uint8Array(h.length);
        return y.set(h), jt(this.mod), y
      }

      collectFileStatistics(t, e) {
        let [r, c, h] = yt(this.mod, "duckdb_web_collect_file_stats", ["string", "boolean"], [t, e]);
        if (r !== 0) throw new Error(it(this.mod, c, h))
      }

      exportFileStatistics(t) {
        let [e, r, c] = yt(this.mod, "duckdb_web_export_file_stats", ["string"], [t]);
        if (e !== 0) throw new Error(it(this.mod, r, c));
        return new Wo(this.mod.HEAPU8.subarray(r, r + c))
      }
    };
    var Yo = class extends $o {
      constructor(e, r, c, h) {
        super(e, r);
        this.mainModuleURL = c, this.pthreadWorkerURL = h
      }

      locateFile(e, r) {
        if (e.endsWith(".wasm")) return this.mainModuleURL;
        if (e.endsWith(".worker.js")) {
          if (!this.pthreadWorkerURL) throw new Error("Missing DuckDB worker URL!");
          return this.pthreadWorkerURL
        }
        throw new Error("WASM instantiation requested unexpected file: prefix=".concat(r, " path=").concat(e))
      }

      instantiateWasm(e, r) {
        globalThis.DUCKDB_RUNTIME = this._runtime;
        let c = this.onInstantiationProgress;
        if (WebAssembly.instantiateStreaming) if (typeof TransformStream == "function") {
          let y = (async () => {
            var Tt;
            let m = new Request(this.mainModuleURL), v = await fetch(m), C = v.headers.get("content-length"),
                A = C && parseInt(C, 10) || 0, E = new Date,
                k = {startedAt: E, updatedAt: E, bytesTotal: A || 0, bytesLoaded: 0}, M = {
                  transform(Ot, Mt) {
                    k.bytesLoaded += Ot.byteLength;
                    let Kt = new Date;
                    if (Kt.getTime() - k.updatedAt.getTime() < 20) {
                      k.updatedAt = Kt, Mt.enqueue(Ot);
                      return
                    }
                    for (let me of c) me(k);
                    Mt.enqueue(Ot)
                  }
                }, dt = new TransformStream(M);
            return new Response((Tt = v.body) == null ? void 0 : Tt.pipeThrough(dt), v)
          })();
          WebAssembly.instantiateStreaming(y, e).then(m => {
            r(m.instance, m.module)
          })
        } else {
          console.warn("instantiating without progress handler since transform streams are unavailable");
          let h = new Request(this.mainModuleURL);
          WebAssembly.instantiateStreaming(fetch(h), e).then(y => {
            r(y.instance, y.module)
          })
        } else if (typeof XMLHttpRequest == "function") {
          let h = new XMLHttpRequest, y = this.mainModuleURL, m = new Date,
              v = {startedAt: m, updatedAt: m, bytesTotal: 0, bytesLoaded: 0};
          h.open("GET", y), h.responseType = "arraybuffer", h.onerror = C => {
            throw this.logger.log({
              timestamp: new Date,
              level: 4,
              origin: 3,
              topic: 5,
              event: 2,
              value: "Failed to load WASM: " + C
            }), new Error(C.toString())
          }, h.onprogress = C => {
            v.bytesTotal = C.total, v.bytesLoaded = C.loaded;
            let A = new Date;
            if (A.getTime() - v.updatedAt.getTime() < 20) {
              v.updatedAt = A;
              return
            }
            for (let E of c) E(v)
          }, h.onload = () => {
            WebAssembly.instantiate(h.response, e).then(C => {
              r(C.instance, C.module)
            }).catch(C => {
              throw this.logger.log({
                timestamp: new Date,
                level: 4,
                origin: 3,
                topic: 5,
                event: 2,
                value: "Failed to instantiate WASM: " + C
              }), new Error(C)
            })
          }, h.send()
        } else console.warn("instantiating with manual fetch since streaming instantiation and xhrs are unavailable"), (async () => {
          let y = new Request(this.mainModuleURL), v = await (await fetch(y)).arrayBuffer();
          WebAssembly.instantiate(v, e).then(C => {
            r(C.instance, C.module)
          })
        })();
        return []
      }
    };
    var Xo = class extends Yo {
      constructor(t, e, r, c = null) {
        super(t, e, r, c)
      }

      instantiateImpl(t) {
        return (0, Np.default)({
          ...t,
          instantiateWasm: this.instantiateWasm.bind(this),
          locateFile: this.locateFile.bind(this)
        })
      }
    };
    var Ji = zf(Lp()), Pp = function (i, t, e) {
      var r;
      if ((r = i == null ? void 0 : i.endpoint) != null && r.startsWith("http")) {
        let c = "".concat(i == null ? void 0 : i.endpoint), h = c.indexOf("://") + 3;
        return c.substring(h)
      } else return i != null && i.endpoint ? "".concat(e, ".").concat(i == null ? void 0 : i.endpoint) : "".concat(e, ".s3.amazonaws.com")
    };

    function DI(i, t, e) {
      var h, y, m, v;
      let r = Vp(t), c = r.path;
      return Hp(i) && (c = "/".concat(r.bucket).concat(c)), {
        url: c,
        query: "",
        host: Pp(i, t, r.bucket),
        region: (h = i == null ? void 0 : i.region) != null ? h : "",
        service: "s3",
        method: e,
        accessKeyId: (y = i == null ? void 0 : i.accessKeyId) != null ? y : "",
        secretAccessKey: (m = i == null ? void 0 : i.secretAccessKey) != null ? m : "",
        sessionToken: (v = i == null ? void 0 : i.sessionToken) != null ? v : "",
        dateNow: new Date().toISOString().replace(/-/g, "").split("T")[0],
        datetimeNow: new Date().toISOString().replace(/-/g, "").replace(/:/g, "").split(".")[0] + "Z"
      }
    }

    function EI(i, t = !1) {
      let e = "0123456789ABCDEF", r = "";
      for (let c = 0; c < i.length; c++) {
        let h = i[c];
        h >= "A" && h <= "Z" || h >= "a" && h <= "z" || h >= "0" && h <= "9" || h == "_" || h == "-" || h == "~" || h == "." ? r += h : h == "/" ? t ? r += "%2F" : r += h : (r += "%", r += e[h.charCodeAt(0) >> 4], r += e[h.charCodeAt(0) & 15])
      }
      return r
    }

    function kI(i, t = null) {
      var dt;
      let e = (dt = t == null ? void 0 : t.contentHash) != null ? dt : "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
          r = new Map;
      r.set("x-amz-date", i.datetimeNow), r.set("x-amz-content-sha256", e), i.sessionToken && r.set("x-amz-security-token", i.sessionToken);
      let c = "";
      t != null && t.contentType && (c += "content-type;"), c += "host;x-amz-content-sha256;x-amz-date", i.sessionToken && (c += ";x-amz-security-token");
      let h = i.method + "\n" + EI(i.url) + "\n" + i.query;
      t != null && t.contentType && (h += "\ncontent-type:" + (t == null ? void 0 : t.contentType)), h += "\nhost:" + i.host + "\nx-amz-content-sha256:" + e + "\nx-amz-date:" + i.datetimeNow, i.sessionToken && i.sessionToken.length > 0 && (h += "\nx-amz-security-token:" + i.sessionToken), h += "\n\n" + c + "\n" + e;
      let y = (0, Ji.sha256)(h),
          m = "AWS4-HMAC-SHA256\n" + i.datetimeNow + "\n" + i.dateNow + "/" + i.region + "/" + i.service + "/aws4_request\n" + y,
          v = "AWS4" + i.secretAccessKey, C = Ji.sha256.hmac.arrayBuffer(v, i.dateNow),
          A = Ji.sha256.hmac.arrayBuffer(C, i.region), E = Ji.sha256.hmac.arrayBuffer(A, i.service),
          k = Ji.sha256.hmac.arrayBuffer(E, "aws4_request"), M = Ji.sha256.hmac(k, m);
      return r.set("Authorization", "AWS4-HMAC-SHA256 Credential=" + i.accessKeyId + "/" + i.dateNow + "/" + i.region + "/" + i.service + "/aws4_request, SignedHeaders=" + c + ", Signature=" + M), r
    }

    var OI = function (i, t, e, r = null, c = null) {
      let h = DI(i, t, e), y = {contentType: r, contentHash: c ? Ji.sha256.hex(c) : null};
      return kI(h, y)
    };

    function ni(i, t, e, r, c = null, h = null) {
      (t != null && t.accessKeyId || t != null && t.sessionToken) && (OI(t, e, r, c, h).forEach((m, v) => {
        i.setRequestHeader(v, m)
      }), c && i.setRequestHeader("content-type", c))
    }

    function Vp(i) {
      if (i.indexOf("s3://") != 0) throw new Error("URL needs to start with s3://");
      let t = i.indexOf("/", 5);
      if (t == -1) throw new Error("URL needs to contain a '/' after the host");
      let e = i.substring(5, t);
      if (!e) throw new Error("URL needs to contain a bucket name");
      let r = i.substring(t);
      if (!r) throw new Error("URL needs to contain key");
      return {bucket: e, path: r}
    }

    function Hp(i) {
      var t;
      return !!((t = i == null ? void 0 : i.endpoint) != null && t.startsWith("http"))
    }

    function si(i, t) {
      let e = Vp(t);
      return Hp(i) ? "".concat(i == null ? void 0 : i.endpoint, "/").concat(e.bucket) + e.path : "https://" + Pp(i, t, e.bucket) + e.path
    }

    var ht = {
      _files: new Map, _fileInfoCache: new Map, _udfFunctions: new Map, _globalFileInfo: null, getFileInfo(i, t) {
        try {
          let e = ht._fileInfoCache.get(t), [r, c, h] = yt(i, "duckdb_web_fs_get_file_info_by_id", ["number", "number"], [t, (e == null ? void 0 : e.cacheEpoch) || 0]);
          if (r !== 0) return null;
          if (h === 0) return e;
          let y = it(i, c, h);
          jt(i);
          let m = JSON.parse(y);
          if (m == null) return null;
          let v = {...m, blob: null};
          return ht._fileInfoCache.set(t, v), v
        } catch (e) {
          return console.log(e), null
        }
      }, getGlobalFileInfo(i) {
        var t;
        try {
          let [e, r, c] = yt(i, "duckdb_web_get_global_file_info", ["number"], [((t = ht._globalFileInfo) == null ? void 0 : t.cacheEpoch) || 0]);
          if (e !== 0) return null;
          if (c === 0) return ht._globalFileInfo;
          let h = it(i, r, c);
          jt(i);
          let y = JSON.parse(h);
          return y == null ? null : (ht._globalFileInfo = {...y, blob: null}, ht._globalFileInfo)
        } catch (e) {
          return console.log(e), null
        }
      }, testPlatformFeature: (i, t) => {
        switch (t) {
          case 1:
            return typeof BigInt64Array < "u";
          default:
            return console.warn("test for unknown feature: ".concat(t)), !1
        }
      }, getDefaultDataProtocol(i) {
        return 2
      }, openFile: (i, t, e) => {
        var r;
        try {
          ht._fileInfoCache.delete(t);
          let c = ht.getFileInfo(i, t);
          switch (c == null ? void 0 : c.dataProtocol) {
            case 4:
            case 5: {
              if (e & 1 && e & 2) throw new Error("Opening file ".concat(c.fileName, " failed: cannot open file with both read and write flags set"));
              if (e & 32) throw new Error("Opening file ".concat(c.fileName, " failed: appending to HTTP/S3 files is not supported"));
              if (e & 2) {
                let m = new XMLHttpRequest;
                if (c.dataProtocol == 5 ? (m.open("HEAD", si(c.s3Config, c.dataUrl), !1), ni(m, c.s3Config, c.dataUrl, "HEAD")) : m.open("HEAD", c.dataUrl, !1), m.send(null), m.status != 200 && m.status != 404) throw new Error("Opening file ".concat(c.fileName, " failed: Unexpected return status from server (").concat(m.status, ")"));
                if (m.status == 404 && !(e & 8 || e & 16)) throw new Error("Opening file ".concat(c.fileName, " failed: Cannot write to non-existent file without FILE_FLAGS_FILE_CREATE or FILE_FLAGS_FILE_CREATE_NEW flag."));
                let v = i._malloc(1), C = new Uint8Array;
                i.HEAPU8.set(C, v);
                let A = i._malloc(2 * 8);
                return i.HEAPF64[(A >> 3) + 0] = 1, i.HEAPF64[(A >> 3) + 1] = v, A
              } else if (e != 1) throw new Error("Opening file ".concat(c.fileName, " failed: unsupported file flags: ").concat(e));
              let h = null, y = null;
              try {
                let m = new XMLHttpRequest;
                if (c.dataProtocol == 5 ? (m.open("HEAD", si(c.s3Config, c.dataUrl), !1), ni(m, c.s3Config, c.dataUrl, "HEAD")) : m.open("HEAD", c.dataUrl, !1), m.setRequestHeader("Range", "bytes=0-"), m.send(null), h = m.getResponseHeader("Content-Length"), h !== null && m.status == 206) {
                  let v = i._malloc(16);
                  return i.HEAPF64[(v >> 3) + 0] = +h, i.HEAPF64[(v >> 3) + 1] = 0, v
                }
              } catch (m) {
                y = m, console.warn("HEAD request with range header failed: ".concat(m))
              }
              if (c.allowFullHttpReads) {
                if (h !== null && +h > 1) {
                  let v = new XMLHttpRequest;
                  c.dataProtocol == 5 ? (v.open("GET", si(c.s3Config, c.dataUrl), !1), ni(v, c.s3Config, c.dataUrl, "GET")) : v.open("GET", c.dataUrl, !1), v.responseType = "arraybuffer", v.setRequestHeader("Range", "bytes=0-0"), v.send(null);
                  let C = v.getResponseHeader("Content-Length");
                  if (v.status == 206 && C !== null && +C == 1) {
                    let A = i._malloc(16);
                    return i.HEAPF64[(A >> 3) + 0] = +h, i.HEAPF64[(A >> 3) + 1] = 0, A
                  }
                  if (v.status == 200 && C !== null && +C == +h) {
                    console.warn("fall back to full HTTP read for: ".concat(c.dataUrl));
                    let A = i._malloc(v.response.byteLength), E = new Uint8Array(v.response, 0, v.response.byteLength);
                    i.HEAPU8.set(E, A);
                    let k = i._malloc(2 * 8);
                    return i.HEAPF64[(k >> 3) + 0] = v.response.byteLength, i.HEAPF64[(k >> 3) + 1] = A, k
                  }
                }
                console.warn("falling back to full HTTP read for: ".concat(c.dataUrl));
                let m = new XMLHttpRequest;
                if (c.dataProtocol == 5 ? (m.open("GET", si(c.s3Config, c.dataUrl), !1), ni(m, c.s3Config, c.dataUrl, "GET")) : m.open("GET", c.dataUrl, !1), m.responseType = "arraybuffer", m.send(null), m.status == 200) {
                  let v = i._malloc(m.response.byteLength), C = new Uint8Array(m.response, 0, m.response.byteLength);
                  i.HEAPU8.set(C, v);
                  let A = i._malloc(2 * 8);
                  return i.HEAPF64[(A >> 3) + 0] = m.response.byteLength, i.HEAPF64[(A >> 3) + 1] = v, A
                }
              }
              if (y != null) throw new Error("Reading file ".concat(c.fileName, " failed with error: ").concat(y));
              return 0
            }
            case 2: {
              let h = (r = ht._files) == null ? void 0 : r.get(c.fileName);
              if (h) {
                let v = i._malloc(16);
                return i.HEAPF64[(v >> 3) + 0] = h.size, i.HEAPF64[(v >> 3) + 1] = 0, v
              }
              console.warn("Buffering missing file: ".concat(c.fileName));
              let y = i._malloc(2 * 8), m = i._malloc(1);
              return i.HEAPF64[(y >> 3) + 0] = 1, i.HEAPF64[(y >> 3) + 1] = m, y
            }
          }
        } catch (c) {
          console.error(c.toString()), Fe(i, c.toString())
        }
        return 0
      }, glob: (i, t, e) => {
        var r;
        try {
          let c = it(i, t, e);
          if (c.startsWith("http") || c.startsWith("s3://")) {
            let h = new XMLHttpRequest;
            if (c.startsWith("s3://")) {
              let y = ht.getGlobalFileInfo(i);
              h.open("HEAD", si(y == null ? void 0 : y.s3Config, c), !1), ni(h, y == null ? void 0 : y.s3Config, c, "HEAD")
            } else h.open("HEAD", c, !1);
            if (h.send(null), h.status != 200 && h.status !== 206) {
              if (!((r = ht.getGlobalFileInfo(i)) != null && r.allowFullHttpReads)) {
                Fe(i, "HEAD request failed: ".concat(c, ", with full http reads are disabled"));
                return
              }
              let y = new XMLHttpRequest;
              if (c.startsWith("s3://")) {
                let v = ht.getGlobalFileInfo(i);
                y.open("GET", si(v == null ? void 0 : v.s3Config, c), !1), ni(y, v == null ? void 0 : v.s3Config, c, "HEAD")
              } else y.open("GET", c, !1);
              if (y.setRequestHeader("Range", "bytes=0-0"), y.send(null), y.status != 200 && y.status !== 206) {
                Fe(i, "HEAD and GET requests failed: ".concat(c));
                return
              }
              let m = y.getResponseHeader("Content-Length");
              m && +m > 1 && console.warn("Range request for ".concat(c, " did not return a partial response: ").concat(y.status, ' "').concat(y.statusText, '"'))
            }
            i.ccall("duckdb_web_fs_glob_add_path", null, ["string"], [c])
          }
        } catch (c) {
          return console.log(c), Fe(i, c.toString()), 0
        }
      }, checkFile: (i, t, e) => {
        try {
          let r = it(i, t, e);
          if (r.startsWith("http") || r.startsWith("s3://")) {
            let c = new XMLHttpRequest;
            if (r.startsWith("s3://")) {
              let h = ht.getGlobalFileInfo(i);
              c.open("HEAD", si(h == null ? void 0 : h.s3Config, r), !1), ni(c, h == null ? void 0 : h.s3Config, r, "HEAD")
            } else c.open("HEAD", r, !1);
            return c.send(null), c.status == 206 || c.status == 200
          }
        } catch (r) {
          return console.log(r), !1
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
            let c = (r = ht._files) == null ? void 0 : r.get(e.fileName);
            if (!c) throw new Error("No OPFS access handle registered with name: ".concat(e.fileName));
            return c.flush()
          }
        }
      }, truncateFile: (i, t, e) => {
        var c;
        let r = ht.getFileInfo(i, t);
        switch (r == null ? void 0 : r.dataProtocol) {
          case 4:
            Fe(i, "Cannot truncate a http file");
            return;
          case 5:
            Fe(i, "Cannot truncate an s3 file");
            return;
          case 0:
          case 1:
          case 2:
            Fe(i, "truncateFile not implemented");
            return;
          case 3: {
            let h = (c = ht._files) == null ? void 0 : c.get(r.fileName);
            if (!h) throw new Error("No OPFS access handle registered with name: ".concat(r.fileName));
            return h.truncate(e)
          }
        }
        return 0
      }, readFile(i, t, e, r, c) {
        var h, y;
        if (r == 0) return 0;
        try {
          let m = ht.getFileInfo(i, t);
          switch (m == null ? void 0 : m.dataProtocol) {
            case 4:
            case 5: {
              if (!m.dataUrl) throw new Error("Missing data URL for file ".concat(t));
              try {
                let v = new XMLHttpRequest;
                if (m.dataProtocol == 5 ? (v.open("GET", si(m == null ? void 0 : m.s3Config, m.dataUrl), !1), ni(v, m == null ? void 0 : m.s3Config, m.dataUrl, "GET")) : v.open("GET", m.dataUrl, !1), v.responseType = "arraybuffer", v.setRequestHeader("Range", "bytes=".concat(c, "-").concat(c + r - 1)), v.send(null), v.status == 206 || v.status == 200 && r == v.response.byteLength && c == 0) {
                  let C = new Uint8Array(v.response, 0, Math.min(v.response.byteLength, r));
                  return i.HEAPU8.set(C, e), C.byteLength
                } else if (v.status == 200) {
                  console.warn("Range request for ".concat(m.dataUrl, " did not return a partial response: ").concat(v.status, ' "').concat(v.statusText, '"'));
                  let C = new Uint8Array(v.response, c, Math.min(v.response.byteLength - c, r));
                  return i.HEAPU8.set(C, e), C.byteLength
                } else throw new Error("Range request for ".concat(m.dataUrl, " did returned non-success status: ").concat(v.status, ' "').concat(v.statusText, '"'))
              } catch (v) {
                throw console.log(v), new Error("Range request for ".concat(m.dataUrl, " failed with error: ").concat(v, '"'))
              }
            }
            case 2: {
              let v = (h = ht._files) == null ? void 0 : h.get(m.fileName);
              if (!v) throw new Error("No HTML5 file registered with name: ".concat(m.fileName));
              let C = v.slice(c, c + r), A = new Uint8Array(new FileReaderSync().readAsArrayBuffer(C));
              return i.HEAPU8.set(A, e), A.byteLength
            }
            case 3: {
              let v = (y = ht._files) == null ? void 0 : y.get(m.fileName);
              if (!v) throw new Error("No OPFS access handle registered with name: ".concat(m.fileName));
              let C = i.HEAPU8.subarray(e, e + r);
              return v.read(C, {at: c})
            }
          }
          return 0
        } catch (m) {
          return console.log(m), Fe(i, m.toString()), 0
        }
      }, writeFile: (i, t, e, r, c) => {
        var y;
        let h = ht.getFileInfo(i, t);
        switch (h == null ? void 0 : h.dataProtocol) {
          case 4:
            return Fe(i, "Cannot write to HTTP file"), 0;
          case 5: {
            let m = i.HEAPU8.subarray(e, e + r), v = new XMLHttpRequest;
            return v.open("PUT", si(h == null ? void 0 : h.s3Config, h.dataUrl), !1), ni(v, h == null ? void 0 : h.s3Config, h.dataUrl, "PUT", "", m), v.send(m), v.status !== 200 ? (Fe(i, "Failed writing file: HTTP " + v.status), 0) : r
          }
          case 2:
            return Fe(i, "cannot write using the html5 file reader api"), 0;
          case 3: {
            let m = (y = ht._files) == null ? void 0 : y.get(h.fileName);
            if (!m) throw new Error("No OPFS access handle registered with name: ".concat(h.fileName));
            let v = i.HEAPU8.subarray(e, e + r);
            return m.write(v, {at: c})
          }
        }
        return 0
      }, getLastFileModificationTime: (i, t) => {
        var r;
        let e = ht.getFileInfo(i, t);
        switch (e == null ? void 0 : e.dataProtocol) {
          case 2: {
            if (!((r = ht._files) == null ? void 0 : r.get(e.fileName))) throw Error("No handle available for file: ".concat(e.fileName));
            return 0
          }
          case 4:
          case 5:
            return new Date().getTime()
        }
        return 0
      }, checkDirectory: (i, t, e) => {
        let r = it(i, t, e);
        return console.log("checkDirectory: ".concat(r)), !1
      }, createDirectory: (i, t, e) => {
        let r = it(i, t, e);
        console.log("createDirectory: ".concat(r))
      }, removeDirectory: (i, t, e) => {
        let r = it(i, t, e);
        console.log("removeDirectory: ".concat(r))
      }, listDirectoryEntries: (i, t, e) => {
        let r = it(i, t, e);
        return console.log("listDirectoryEntries: ".concat(r)), !1
      }, moveFile: (i, t, e, r, c) => {
        var v, C;
        let h = it(i, t, e), y = it(i, r, c), m = (v = ht._files) == null ? void 0 : v.get(h);
        m !== void 0 && (ht._files.delete(m), ht._files.set(y, m));
        for (let [A, E] of ((C = ht._fileInfoCache) == null ? void 0 : C.entries()) || []) if (E.dataUrl == h) {
          ht._fileInfoCache.delete(A);
          break
        }
        return !0
      }, removeFile: (i, t, e) => {
      }, callScalarUDF: (i, t, e, r, c, h, y) => {
        Up(ht, i, t, e, r, c, h, y)
      }
    };
    var ll = class extends Po {
      postMessage(t, e) {
        globalThis.postMessage(t, e)
      }

      async instantiate(t, e, r) {
        return await new Xo(this, ht, t, e).instantiate(r)
      }
    };

    function zp() {
      let i = new ll;
      globalThis.onmessage = async t => {
        await i.onMessage(t.data)
      }
    }

    zp();
    return $w(RI);
  })();
  /*! Bundled license information:

js-sha256/src/sha256.js:
  (**
   * [js-sha256]{@link https://github.com/emn178/js-sha256}
   *
   * @version 0.9.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2017
   * @license MIT
   *)
*/
//# sourceMappingURL=duckdb-browser-mvp.worker.js.map

}
export default {
  mvp_worker
}
