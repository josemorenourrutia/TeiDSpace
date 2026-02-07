(function () { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r); new MutationObserver(r => { for (const s of r) if (s.type === "childList") for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a) }).observe(document, { childList: !0, subtree: !0 }); function t(r) { const s = {}; return r.integrity && (s.integrity = r.integrity), r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? s.credentials = "include" : r.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s } function n(r) { if (r.ep) return; r.ep = !0; const s = t(r); fetch(r.href, s) } })();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La = "178", cl = 0, no = 1, ll = 2, mc = 1, ul = 2, pn = 3, Dn = 0, Lt = 1, tn = 2, Pn = 0, _i = 1, io = 2, ro = 3, so = 4, hl = 5, Xn = 100, dl = 101, fl = 102, pl = 103, ml = 104, gl = 200, _l = 201, vl = 202, xl = 203, Bs = 204, zs = 205, Sl = 206, Ml = 207, yl = 208, El = 209, Tl = 210, bl = 211, Al = 212, wl = 213, Rl = 214, Vs = 0, Hs = 1, Gs = 2, Si = 3, ks = 4, Ws = 5, Xs = 6, qs = 7, gc = 0, Cl = 1, Pl = 2, Ln = 0, Ll = 1, Dl = 2, Ul = 3, Il = 4, Nl = 5, Fl = 6, Ol = 7, _c = 300, Mi = 301, yi = 302, Ys = 303, Zs = 304, $r = 306, Ks = 1e3, Yn = 1001, Js = 1002, Jt = 1003, Bl = 1004, lr = 1005, rn = 1006, ns = 1007, Zn = 1008, vn = 1009, vc = 1010, xc = 1011, Zi = 1012, Da = 1013, $n = 1014, mn = 1015, rr = 1016, Ua = 1017, Ia = 1018, Ki = 1020, Sc = 35902, Mc = 1021, yc = 1022, Zt = 1023, Ji = 1026, $i = 1027, Ec = 1028, Na = 1029, Tc = 1030, Fa = 1031, Oa = 1033, Or = 33776, Br = 33777, zr = 33778, Vr = 33779, $s = 35840, js = 35841, Qs = 35842, ea = 35843, ta = 36196, na = 37492, ia = 37496, ra = 37808, sa = 37809, aa = 37810, oa = 37811, ca = 37812, la = 37813, ua = 37814, ha = 37815, da = 37816, fa = 37817, pa = 37818, ma = 37819, ga = 37820, _a = 37821, Hr = 36492, va = 36494, xa = 36495, bc = 36283, Sa = 36284, Ma = 36285, ya = 36286, zl = 3200, Vl = 3201, Hl = 0, Gl = 1, wn = "", Vt = "srgb", Ei = "srgb-linear", kr = "linear", Ke = "srgb", ti = 7680, ao = 519, kl = 512, Wl = 513, Xl = 514, Ac = 515, ql = 516, Yl = 517, Zl = 518, Kl = 519, Ea = 35044, oo = "300 es", gn = 2e3, Wr = 2001; class wi { addEventListener(e, t) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners; n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t) } hasEventListener(e, t) { const n = this._listeners; return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1 } removeEventListener(e, t) { const n = this._listeners; if (n === void 0) return; const r = n[e]; if (r !== void 0) { const s = r.indexOf(t); s !== -1 && r.splice(s, 1) } } dispatchEvent(e) { const t = this._listeners; if (t === void 0) return; const n = t[e.type]; if (n !== void 0) { e.target = this; const r = n.slice(0); for (let s = 0, a = r.length; s < a; s++)r[s].call(this, e); e.target = null } } } const vt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; let co = 1234567; const Hi = Math.PI / 180, ji = 180 / Math.PI; function sn() { const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (vt[i & 255] + vt[i >> 8 & 255] + vt[i >> 16 & 255] + vt[i >> 24 & 255] + "-" + vt[e & 255] + vt[e >> 8 & 255] + "-" + vt[e >> 16 & 15 | 64] + vt[e >> 24 & 255] + "-" + vt[t & 63 | 128] + vt[t >> 8 & 255] + "-" + vt[t >> 16 & 255] + vt[t >> 24 & 255] + vt[n & 255] + vt[n >> 8 & 255] + vt[n >> 16 & 255] + vt[n >> 24 & 255]).toLowerCase() } function Fe(i, e, t) { return Math.max(e, Math.min(t, i)) } function Ba(i, e) { return (i % e + e) % e } function Jl(i, e, t, n, r) { return n + (i - e) * (r - n) / (t - e) } function $l(i, e, t) { return i !== e ? (t - i) / (e - i) : 0 } function Gi(i, e, t) { return (1 - t) * i + t * e } function jl(i, e, t, n) { return Gi(i, e, 1 - Math.exp(-t * n)) } function Ql(i, e = 1) { return e - Math.abs(Ba(i, e * 2) - e) } function eu(i, e, t) { return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i)) } function tu(i, e, t) { return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10)) } function nu(i, e) { return i + Math.floor(Math.random() * (e - i + 1)) } function iu(i, e) { return i + Math.random() * (e - i) } function ru(i) { return i * (.5 - Math.random()) } function su(i) { i !== void 0 && (co = i); let e = co += 1831565813; return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296 } function au(i) { return i * Hi } function ou(i) { return i * ji } function cu(i) { return (i & i - 1) === 0 && i !== 0 } function lu(i) { return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2)) } function uu(i) { return Math.pow(2, Math.floor(Math.log(i) / Math.LN2)) } function hu(i, e, t, n, r) { const s = Math.cos, a = Math.sin, o = s(t / 2), c = a(t / 2), l = s((e + n) / 2), u = a((e + n) / 2), h = s((e - n) / 2), d = a((e - n) / 2), p = s((n - e) / 2), g = a((n - e) / 2); switch (r) { case "XYX": i.set(o * u, c * h, c * d, o * l); break; case "YZY": i.set(c * d, o * u, c * h, o * l); break; case "ZXZ": i.set(c * h, c * d, o * u, o * l); break; case "XZX": i.set(o * u, c * g, c * p, o * l); break; case "YXY": i.set(c * p, o * u, c * g, o * l); break; case "ZYZ": i.set(c * g, c * p, o * u, o * l); break; default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r) } } function qt(i, e) { switch (e.constructor) { case Float32Array: return i; case Uint32Array: return i / 4294967295; case Uint16Array: return i / 65535; case Uint8Array: return i / 255; case Int32Array: return Math.max(i / 2147483647, -1); case Int16Array: return Math.max(i / 32767, -1); case Int8Array: return Math.max(i / 127, -1); default: throw new Error("Invalid component type.") } } function qe(i, e) { switch (e.constructor) { case Float32Array: return i; case Uint32Array: return Math.round(i * 4294967295); case Uint16Array: return Math.round(i * 65535); case Uint8Array: return Math.round(i * 255); case Int32Array: return Math.round(i * 2147483647); case Int16Array: return Math.round(i * 32767); case Int8Array: return Math.round(i * 127); default: throw new Error("Invalid component type.") } } const du = { DEG2RAD: Hi, RAD2DEG: ji, generateUUID: sn, clamp: Fe, euclideanModulo: Ba, mapLinear: Jl, inverseLerp: $l, lerp: Gi, damp: jl, pingpong: Ql, smoothstep: eu, smootherstep: tu, randInt: nu, randFloat: iu, randFloatSpread: ru, seededRandom: su, degToRad: au, radToDeg: ou, isPowerOfTwo: cu, ceilPowerOfTwo: lu, floorPowerOfTwo: uu, setQuaternionFromProperEuler: hu, normalize: qe, denormalize: qt }; class fe { constructor(e = 0, t = 0) { fe.prototype.isVector2 = !0, this.x = e, this.y = t } get width() { return this.x } set width(e) { this.x = e } get height() { return this.y } set height(e) { this.y = e } set(e, t) { return this.x = e, this.y = t, this } setScalar(e) { return this.x = e, this.y = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y) } copy(e) { return this.x = e.x, this.y = e.y, this } add(e) { return this.x += e.x, this.y += e.y, this } addScalar(e) { return this.x += e, this.y += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this } subScalar(e) { return this.x -= e, this.y -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this } divide(e) { return this.x /= e.x, this.y /= e.y, this } divideScalar(e) { return this.multiplyScalar(1 / e) } applyMatrix3(e) { const t = this.x, n = this.y, r = e.elements; return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this } clamp(e, t) { return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this } clampScalar(e, t) { return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t)) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(e) { return this.x * e.x + this.y * e.y } cross(e) { return this.x * e.y - this.y * e.x } lengthSq() { return this.x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-this.y, -this.x) + Math.PI } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(Fe(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y; return t * t + n * n } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this } equals(e) { return e.x === this.x && e.y === this.y } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this } rotateAround(e, t) { const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y; return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this } random() { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y } } class Ri { constructor(e = 0, t = 0, n = 0, r = 1) { this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r } static slerpFlat(e, t, n, r, s, a, o) { let c = n[r + 0], l = n[r + 1], u = n[r + 2], h = n[r + 3]; const d = s[a + 0], p = s[a + 1], g = s[a + 2], x = s[a + 3]; if (o === 0) { e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h; return } if (o === 1) { e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = x; return } if (h !== x || c !== d || l !== p || u !== g) { let m = 1 - o; const f = c * d + l * p + u * g + h * x, b = f >= 0 ? 1 : -1, E = 1 - f * f; if (E > Number.EPSILON) { const I = Math.sqrt(E), L = Math.atan2(I, f * b); m = Math.sin(m * L) / I, o = Math.sin(o * L) / I } const S = o * b; if (c = c * m + d * S, l = l * m + p * S, u = u * m + g * S, h = h * m + x * S, m === 1 - o) { const I = 1 / Math.sqrt(c * c + l * l + u * u + h * h); c *= I, l *= I, u *= I, h *= I } } e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h } static multiplyQuaternionsFlat(e, t, n, r, s, a) { const o = n[r], c = n[r + 1], l = n[r + 2], u = n[r + 3], h = s[a], d = s[a + 1], p = s[a + 2], g = s[a + 3]; return e[t] = o * g + u * h + c * p - l * d, e[t + 1] = c * g + u * d + l * h - o * p, e[t + 2] = l * g + u * p + o * d - c * h, e[t + 3] = u * g - o * h - c * d - l * p, e } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get w() { return this._w } set w(e) { this._w = e, this._onChangeCallback() } set(e, t, n, r) { return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._w) } copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this } setFromEuler(e, t = !0) { const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), u = o(r / 2), h = o(s / 2), d = c(n / 2), p = c(r / 2), g = c(s / 2); switch (a) { case "XYZ": this._x = d * u * h + l * p * g, this._y = l * p * h - d * u * g, this._z = l * u * g + d * p * h, this._w = l * u * h - d * p * g; break; case "YXZ": this._x = d * u * h + l * p * g, this._y = l * p * h - d * u * g, this._z = l * u * g - d * p * h, this._w = l * u * h + d * p * g; break; case "ZXY": this._x = d * u * h - l * p * g, this._y = l * p * h + d * u * g, this._z = l * u * g + d * p * h, this._w = l * u * h - d * p * g; break; case "ZYX": this._x = d * u * h - l * p * g, this._y = l * p * h + d * u * g, this._z = l * u * g - d * p * h, this._w = l * u * h + d * p * g; break; case "YZX": this._x = d * u * h + l * p * g, this._y = l * p * h + d * u * g, this._z = l * u * g - d * p * h, this._w = l * u * h - d * p * g; break; case "XZY": this._x = d * u * h - l * p * g, this._y = l * p * h - d * u * g, this._z = l * u * g + d * p * h, this._w = l * u * h + d * p * g; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a) }return t === !0 && this._onChangeCallback(), this } setFromAxisAngle(e, t) { const n = t / 2, r = Math.sin(n); return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix(e) { const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], u = t[6], h = t[10], d = n + o + h; if (d > 0) { const p = .5 / Math.sqrt(d + 1); this._w = .25 / p, this._x = (u - c) * p, this._y = (s - l) * p, this._z = (a - r) * p } else if (n > o && n > h) { const p = 2 * Math.sqrt(1 + n - o - h); this._w = (u - c) / p, this._x = .25 * p, this._y = (r + a) / p, this._z = (s + l) / p } else if (o > h) { const p = 2 * Math.sqrt(1 + o - n - h); this._w = (s - l) / p, this._x = (r + a) / p, this._y = .25 * p, this._z = (c + u) / p } else { const p = 2 * Math.sqrt(1 + h - n - o); this._w = (a - r) / p, this._x = (s + l) / p, this._y = (c + u) / p, this._z = .25 * p } return this._onChangeCallback(), this } setFromUnitVectors(e, t) { let n = e.dot(t) + 1; return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize() } angleTo(e) { return 2 * Math.acos(Math.abs(Fe(this.dot(e), -1, 1))) } rotateTowards(e, t) { const n = this.angleTo(e); if (n === 0) return this; const r = Math.min(1, t / n); return this.slerp(e, r), this } identity() { return this.set(0, 0, 0, 1) } invert() { return this.conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot(e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize() { let e = this.length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this } multiply(e) { return this.multiplyQuaternions(this, e) } premultiply(e) { return this.multiplyQuaternions(e, this) } multiplyQuaternions(e, t) { const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, u = t._w; return this._x = n * u + a * o + r * l - s * c, this._y = r * u + a * c + s * o - n * l, this._z = s * u + a * l + n * c - r * o, this._w = a * u - n * o - r * c - s * l, this._onChangeCallback(), this } slerp(e, t) { if (t === 0) return this; if (t === 1) return this.copy(e); const n = this._x, r = this._y, s = this._z, a = this._w; let o = a * e._w + n * e._x + r * e._y + s * e._z; if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = s, this; const c = 1 - o * o; if (c <= Number.EPSILON) { const p = 1 - t; return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * r + t * this._y, this._z = p * s + t * this._z, this.normalize(), this } const l = Math.sqrt(c), u = Math.atan2(l, o), h = Math.sin((1 - t) * u) / l, d = Math.sin(t * u) / l; return this._w = a * h + this._w * d, this._x = n * h + this._x * d, this._y = r * h + this._y * d, this._z = s * h + this._z * d, this._onChangeCallback(), this } slerpQuaternions(e, t, n) { return this.copy(e).slerp(t, n) } random() { const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n); return this.set(r * Math.sin(e), r * Math.cos(e), s * Math.sin(t), s * Math.cos(t)) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w } fromArray(e, t = 0) { return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e } fromBufferAttribute(e, t) { return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this } toJSON() { return this.toArray() } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w } } class C { constructor(e = 0, t = 0, n = 0) { C.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n } set(e, t, n) { return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this } multiplyVectors(e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this } applyEuler(e) { return this.applyQuaternion(lo.setFromEuler(e)) } applyAxisAngle(e, t) { return this.applyQuaternion(lo.setFromAxisAngle(e, t)) } applyMatrix3(e) { const t = this.x, n = this.y, r = this.z, s = e.elements; return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this } applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() } applyMatrix4(e) { const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]); return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this } applyQuaternion(e) { const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * r - o * n), u = 2 * (o * t - s * r), h = 2 * (s * n - a * t); return this.x = t + c * l + a * h - o * u, this.y = n + c * u + o * l - s * h, this.z = r + c * h + s * u - a * l, this } project(e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) } unproject(e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) } transformDirection(e) { const t = this.x, n = this.y, r = this.z, s = e.elements; return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize() } divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this } divideScalar(e) { return this.multiplyScalar(1 / e) } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this } clamp(e, t) { return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this.z = Fe(this.z, e.z, t.z), this } clampScalar(e, t) { return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this.z = Fe(this.z, e, t), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t)) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this } cross(e) { return this.crossVectors(this, e) } crossVectors(e, t) { const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, c = t.z; return this.x = r * c - s * o, this.y = s * a - n * c, this.z = n * o - r * a, this } projectOnVector(e) { const t = e.lengthSq(); if (t === 0) return this.set(0, 0, 0); const n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) } projectOnPlane(e) { return is.copy(this).projectOnVector(e), this.sub(is) } reflect(e) { return this.sub(is.copy(e).multiplyScalar(2 * this.dot(e))) } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(Fe(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z; return t * t + n * n + r * r } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) } setFromSpherical(e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) } setFromSphericalCoords(e, t, n) { const r = Math.sin(t) * e; return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this } setFromCylindrical(e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y) } setFromCylindricalCoords(e, t, n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this } setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this } setFromMatrixScale(e) { const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length(); return this.x = t, this.y = n, this.z = r, this } setFromMatrixColumn(e, t) { return this.fromArray(e.elements, t * 4) } setFromMatrix3Column(e, t) { return this.fromArray(e.elements, t * 3) } setFromEuler(e) { return this.x = e._x, this.y = e._y, this.z = e._z, this } setFromColor(e) { return this.x = e.r, this.y = e.g, this.z = e.b, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection() { const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t); return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } } const is = new C, lo = new Ri; class Ue { constructor(e, t, n, r, s, a, o, c, l) { Ue.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l) } set(e, t, n, r, s, a, o, c, l) { const u = this.elements; return u[0] = e, u[1] = r, u[2] = o, u[3] = t, u[4] = s, u[5] = c, u[6] = n, u[7] = a, u[8] = l, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this } extractBasis(e, t, n) { return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this } setFromMatrix4(e) { const t = e.elements; return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], u = n[4], h = n[7], d = n[2], p = n[5], g = n[8], x = r[0], m = r[3], f = r[6], b = r[1], E = r[4], S = r[7], I = r[2], L = r[5], R = r[8]; return s[0] = a * x + o * b + c * I, s[3] = a * m + o * E + c * L, s[6] = a * f + o * S + c * R, s[1] = l * x + u * b + h * I, s[4] = l * m + u * E + h * L, s[7] = l * f + u * S + h * R, s[2] = d * x + p * b + g * I, s[5] = d * m + p * E + g * L, s[8] = d * f + p * S + g * R, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], u = e[8]; return t * a * u - t * o * l - n * s * u + n * o * c + r * s * l - r * a * c } invert() { const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], u = e[8], h = u * a - o * l, d = o * c - u * s, p = l * s - a * c, g = t * h + n * d + r * p; if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const x = 1 / g; return e[0] = h * x, e[1] = (r * l - u * n) * x, e[2] = (o * n - r * a) * x, e[3] = d * x, e[4] = (u * t - r * c) * x, e[5] = (r * s - o * t) * x, e[6] = p * x, e[7] = (n * c - l * t) * x, e[8] = (a * t - n * s) * x, this } transpose() { let e; const t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this } getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() } transposeIntoArray(e) { const t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this } setUvTransform(e, t, n, r, s, a, o) { const c = Math.cos(s), l = Math.sin(s); return this.set(n * c, n * l, -n * (c * a + l * o) + a + e, -r * l, r * c, -r * (-l * a + c * o) + o + t, 0, 0, 1), this } scale(e, t) { return this.premultiply(rs.makeScale(e, t)), this } rotate(e) { return this.premultiply(rs.makeRotation(-e)), this } translate(e, t) { return this.premultiply(rs.makeTranslation(e, t)), this } makeTranslation(e, t) { return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this } makeRotation(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this } makeScale(e, t) { return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this } equals(e) { const t = this.elements, n = e.elements; for (let r = 0; r < 9; r++)if (t[r] !== n[r]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 9; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e } clone() { return new this.constructor().fromArray(this.elements) } } const rs = new Ue; function wc(i) { for (let e = i.length - 1; e >= 0; --e)if (i[e] >= 65535) return !0; return !1 } function Qi(i) { return document.createElementNS("http://www.w3.org/1999/xhtml", i) } function fu() { const i = Qi("canvas"); return i.style.display = "block", i } const uo = {}; function vi(i) { i in uo || (uo[i] = !0, console.warn(i)) } function pu(i, e, t) { return new Promise(function (n, r) { function s() { switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) { case i.WAIT_FAILED: r(); break; case i.TIMEOUT_EXPIRED: setTimeout(s, t); break; default: n() } } setTimeout(s, t) }) } function mu(i) { const e = i.elements; e[2] = .5 * e[2] + .5 * e[3], e[6] = .5 * e[6] + .5 * e[7], e[10] = .5 * e[10] + .5 * e[11], e[14] = .5 * e[14] + .5 * e[15] } function gu(i) { const e = i.elements; e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1) } const ho = new Ue().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), fo = new Ue().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715); function _u() { const i = { enabled: !0, workingColorSpace: Ei, spaces: {}, convert: function (r, s, a) { return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === Ke && (r.r = _n(r.r), r.g = _n(r.g), r.b = _n(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ke && (r.r = xi(r.r), r.g = xi(r.g), r.b = xi(r.b))), r }, workingToColorSpace: function (r, s) { return this.convert(r, this.workingColorSpace, s) }, colorSpaceToWorking: function (r, s) { return this.convert(r, s, this.workingColorSpace) }, getPrimaries: function (r) { return this.spaces[r].primaries }, getTransfer: function (r) { return r === wn ? kr : this.spaces[r].transfer }, getLuminanceCoefficients: function (r, s = this.workingColorSpace) { return r.fromArray(this.spaces[s].luminanceCoefficients) }, define: function (r) { Object.assign(this.spaces, r) }, _getMatrix: function (r, s, a) { return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ) }, _getDrawingBufferColorSpace: function (r) { return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace }, _getUnpackColorSpace: function (r = this.workingColorSpace) { return this.spaces[r].workingColorSpaceConfig.unpackColorSpace }, fromWorkingColorSpace: function (r, s) { return vi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s) }, toWorkingColorSpace: function (r, s) { return vi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s) } }, e = [.64, .33, .3, .6, .15, .06], t = [.2126, .7152, .0722], n = [.3127, .329]; return i.define({ [Ei]: { primaries: e, whitePoint: n, transfer: kr, toXYZ: ho, fromXYZ: fo, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Vt }, outputColorSpaceConfig: { drawingBufferColorSpace: Vt } }, [Vt]: { primaries: e, whitePoint: n, transfer: Ke, toXYZ: ho, fromXYZ: fo, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Vt } } }), i } const He = _u(); function _n(i) { return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4) } function xi(i) { return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055 } let ni; class vu { static getDataURL(e, t = "image/png") { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src; let n; if (e instanceof HTMLCanvasElement) n = e; else { ni === void 0 && (ni = Qi("canvas")), ni.width = e.width, ni.height = e.height; const r = ni.getContext("2d"); e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = ni } return n.toDataURL(t) } static sRGBToLinear(e) { if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) { const t = Qi("canvas"); t.width = e.width, t.height = e.height; const n = t.getContext("2d"); n.drawImage(e, 0, 0, e.width, e.height); const r = n.getImageData(0, 0, e.width, e.height), s = r.data; for (let a = 0; a < s.length; a++)s[a] = _n(s[a] / 255) * 255; return n.putImageData(r, 0, 0), t } else if (e.data) { const t = e.data.slice(0); for (let n = 0; n < t.length; n++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(_n(t[n] / 255) * 255) : t[n] = _n(t[n]); return { data: t, width: e.width, height: e.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e } } let xu = 0; class za { constructor(e = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: xu++ }), this.uuid = sn(), this.data = e, this.dataReady = !0, this.version = 0 } getSize(e) { const t = this.data; return t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e } set needsUpdate(e) { e === !0 && this.version++ } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid]; const n = { uuid: this.uuid, url: "" }, r = this.data; if (r !== null) { let s; if (Array.isArray(r)) { s = []; for (let a = 0, o = r.length; a < o; a++)r[a].isDataTexture ? s.push(ss(r[a].image)) : s.push(ss(r[a])) } else s = ss(r); n.url = s } return t || (e.images[this.uuid] = n), n } } function ss(i) { return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? vu.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } let Su = 0; const as = new C; class Rt extends wi { constructor(e = Rt.DEFAULT_IMAGE, t = Rt.DEFAULT_MAPPING, n = Yn, r = Yn, s = rn, a = Zn, o = Zt, c = vn, l = Rt.DEFAULT_ANISOTROPY, u = wn) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Su++ }), this.uuid = sn(), this.name = "", this.source = new za(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new fe(0, 0), this.repeat = new fe(1, 1), this.center = new fe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ue, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0 } get width() { return this.source.getSize(as).x } get height() { return this.source.getSize(as).y } get depth() { return this.source.getSize(as).z } get image() { return this.source.data } set image(e = null) { this.source.data = e } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } clone() { return new this.constructor().copy(this) } copy(e) { return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this } setValues(e) { for (const t in e) { const n = e[t]; if (n === void 0) { console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`); continue } const r = this[t]; if (r === void 0) { console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`); continue } r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n } } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid]; const n = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(e) { if (this.mapping !== _c) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) { case Ks: e.x = e.x - Math.floor(e.x); break; case Yn: e.x = e.x < 0 ? 0 : 1; break; case Js: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x); break }if (e.y < 0 || e.y > 1) switch (this.wrapT) { case Ks: e.y = e.y - Math.floor(e.y); break; case Yn: e.y = e.y < 0 ? 0 : 1; break; case Js: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y); break }return this.flipY && (e.y = 1 - e.y), e } set needsUpdate(e) { e === !0 && (this.version++, this.source.needsUpdate = !0) } set needsPMREMUpdate(e) { e === !0 && this.pmremVersion++ } } Rt.DEFAULT_IMAGE = null; Rt.DEFAULT_MAPPING = _c; Rt.DEFAULT_ANISOTROPY = 1; class Qe { constructor(e = 0, t = 0, n = 0, r = 1) { Qe.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r } get width() { return this.z } set width(e) { this.z = e } get height() { return this.w } set height(e) { this.w = e } set(e, t, n, r) { return this.x = e, this.y = t, this.z = n, this.w = r, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this.w = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setW(e) { return this.w = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; case 3: this.w = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z, this.w) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this.w += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this } applyMatrix4(e) { const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements; return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this } divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this } divideScalar(e) { return this.multiplyScalar(1 / e) } setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this } setAxisAngleFromRotationMatrix(e) { let t, n, r, s; const c = e.elements, l = c[0], u = c[4], h = c[8], d = c[1], p = c[5], g = c[9], x = c[2], m = c[6], f = c[10]; if (Math.abs(u - d) < .01 && Math.abs(h - x) < .01 && Math.abs(g - m) < .01) { if (Math.abs(u + d) < .1 && Math.abs(h + x) < .1 && Math.abs(g + m) < .1 && Math.abs(l + p + f - 3) < .1) return this.set(1, 0, 0, 0), this; t = Math.PI; const E = (l + 1) / 2, S = (p + 1) / 2, I = (f + 1) / 2, L = (u + d) / 4, R = (h + x) / 4, N = (g + m) / 4; return E > S && E > I ? E < .01 ? (n = 0, r = .707106781, s = .707106781) : (n = Math.sqrt(E), r = L / n, s = R / n) : S > I ? S < .01 ? (n = .707106781, r = 0, s = .707106781) : (r = Math.sqrt(S), n = L / r, s = N / r) : I < .01 ? (n = .707106781, r = .707106781, s = 0) : (s = Math.sqrt(I), n = R / s, r = N / s), this.set(n, r, s, t), this } let b = Math.sqrt((m - g) * (m - g) + (h - x) * (h - x) + (d - u) * (d - u)); return Math.abs(b) < .001 && (b = 1), this.x = (m - g) / b, this.y = (h - x) / b, this.z = (d - u) / b, this.w = Math.acos((l + p + f - 1) / 2), this } setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this } clamp(e, t) { return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this.z = Fe(this.z, e.z, t.z), this.w = Fe(this.w, e.w, t.w), this } clampScalar(e, t) { return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this.z = Fe(this.z, e, t), this.w = Fe(this.w, e, t), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t)) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } } class Mu extends wi { constructor(e = 1, t = 1, n = {}) { super(), n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: rn, depthBuffer: !0, stencilBuffer: !1, resolveDepthBuffer: !0, resolveStencilBuffer: !0, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: !1 }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new Qe(0, 0, e, t), this.scissorTest = !1, this.viewport = new Qe(0, 0, e, t); const r = { width: e, height: t, depth: n.depth }, s = new Rt(r); this.textures = []; const a = n.count; for (let o = 0; o < a; o++)this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this; this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview } _setTextureOptions(e = {}) { const t = { minFilter: rn, generateMipmaps: !1, flipY: !1, internalFormat: null }; e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat); for (let n = 0; n < this.textures.length; n++)this.textures[n].setValues(t) } get texture() { return this.textures[0] } set texture(e) { this.textures[0] = e } set depthTexture(e) { this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e } get depthTexture() { return this._depthTexture } setSize(e, t, n = 1) { if (this.width !== e || this.height !== t || this.depth !== n) { this.width = e, this.height = t, this.depth = n; for (let r = 0, s = this.textures.length; r < s; r++)this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isArrayTexture = this.textures[r].image.depth > 1; this.dispose() } this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t) } clone() { return new this.constructor().copy(this) } copy(e) { this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0; for (let t = 0, n = e.textures.length; t < n; t++) { this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this; const r = Object.assign({}, e.textures[t].image); this.textures[t].source = new za(r) } return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } class jn extends Mu { constructor(e = 1, t = 1, n = {}) { super(e, t, n), this.isWebGLRenderTarget = !0 } } class Rc extends Rt { constructor(e = null, t = 1, n = 1, r = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Jt, this.minFilter = Jt, this.wrapR = Yn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set } addLayerUpdate(e) { this.layerUpdates.add(e) } clearLayerUpdates() { this.layerUpdates.clear() } } class yu extends Rt { constructor(e = null, t = 1, n = 1, r = 1) { super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Jt, this.minFilter = Jt, this.wrapR = Yn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class In { constructor(e = new C(1 / 0, 1 / 0, 1 / 0), t = new C(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = e, this.max = t } set(e, t) { return this.min.copy(e), this.max.copy(t), this } setFromArray(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t += 3)this.expandByPoint(Gt.fromArray(e, t)); return this } setFromBufferAttribute(e) { this.makeEmpty(); for (let t = 0, n = e.count; t < n; t++)this.expandByPoint(Gt.fromBufferAttribute(e, t)); return this } setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]); return this } setFromCenterAndSize(e, t) { const n = Gt.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this } setFromObject(e, t = !1) { return this.makeEmpty(), this.expandByObject(e, t) } clone() { return new this.constructor().copy(this) } copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this } makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min) } expandByPoint(e) { return this.min.min(e), this.max.max(e), this } expandByVector(e) { return this.min.sub(e), this.max.add(e), this } expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this } expandByObject(e, t = !1) { e.updateWorldMatrix(!1, !1); const n = e.geometry; if (n !== void 0) { const s = n.getAttribute("position"); if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0) for (let a = 0, o = s.count; a < o; a++)e.isMesh === !0 ? e.getVertexPosition(a, Gt) : Gt.fromBufferAttribute(s, a), Gt.applyMatrix4(e.matrixWorld), this.expandByPoint(Gt); else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ur.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ur.copy(n.boundingBox)), ur.applyMatrix4(e.matrixWorld), this.union(ur) } const r = e.children; for (let s = 0, a = r.length; s < a; s++)this.expandByObject(r[s], t); return this } containsPoint(e) { return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z } containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z } getParameter(e, t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(e) { return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z } intersectsSphere(e) { return this.clampPoint(e.center, Gt), Gt.distanceToSquared(e.center) <= e.radius * e.radius } intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant } intersectsTriangle(e) { if (this.isEmpty()) return !1; this.getCenter(Di), hr.subVectors(this.max, Di), ii.subVectors(e.a, Di), ri.subVectors(e.b, Di), si.subVectors(e.c, Di), Mn.subVectors(ri, ii), yn.subVectors(si, ri), On.subVectors(ii, si); let t = [0, -Mn.z, Mn.y, 0, -yn.z, yn.y, 0, -On.z, On.y, Mn.z, 0, -Mn.x, yn.z, 0, -yn.x, On.z, 0, -On.x, -Mn.y, Mn.x, 0, -yn.y, yn.x, 0, -On.y, On.x, 0]; return !os(t, ii, ri, si, hr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !os(t, ii, ri, si, hr)) ? !1 : (dr.crossVectors(Mn, yn), t = [dr.x, dr.y, dr.z], os(t, ii, ri, si, hr)) } clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) } distanceToPoint(e) { return this.clampPoint(e, Gt).distanceTo(e) } getBoundingSphere(e) { return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Gt).length() * .5), e } intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this } union(e) { return this.min.min(e.min), this.max.max(e.max), this } applyMatrix4(e) { return this.isEmpty() ? this : (cn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), cn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), cn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), cn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), cn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), cn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), cn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), cn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(cn), this) } translate(e) { return this.min.add(e), this.max.add(e), this } equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } toJSON() { return { min: this.min.toArray(), max: this.max.toArray() } } fromJSON(e) { return this.min.fromArray(e.min), this.max.fromArray(e.max), this } } const cn = [new C, new C, new C, new C, new C, new C, new C, new C], Gt = new C, ur = new In, ii = new C, ri = new C, si = new C, Mn = new C, yn = new C, On = new C, Di = new C, hr = new C, dr = new C, Bn = new C; function os(i, e, t, n, r) { for (let s = 0, a = i.length - 3; s <= a; s += 3) { Bn.fromArray(i, s); const o = r.x * Math.abs(Bn.x) + r.y * Math.abs(Bn.y) + r.z * Math.abs(Bn.z), c = e.dot(Bn), l = t.dot(Bn), u = n.dot(Bn); if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o) return !1 } return !0 } const Eu = new In, Ui = new C, cs = new C; class sr { constructor(e = new C, t = -1) { this.isSphere = !0, this.center = e, this.radius = t } set(e, t) { return this.center.copy(e), this.radius = t, this } setFromPoints(e, t) { const n = this.center; t !== void 0 ? n.copy(t) : Eu.setFromPoints(e).getCenter(n); let r = 0; for (let s = 0, a = e.length; s < a; s++)r = Math.max(r, n.distanceToSquared(e[s])); return this.radius = Math.sqrt(r), this } copy(e) { return this.center.copy(e.center), this.radius = e.radius, this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint(e) { return e.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint(e) { return e.distanceTo(this.center) - this.radius } intersectsSphere(e) { const t = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= t * t } intersectsBox(e) { return e.intersectsSphere(this) } intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius } clampPoint(e, t) { const n = this.center.distanceToSquared(e); return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t } getBoundingBox(e) { return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e) } applyMatrix4(e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this } translate(e) { return this.center.add(e), this } expandByPoint(e) { if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this; Ui.subVectors(e, this.center); const t = Ui.lengthSq(); if (t > this.radius * this.radius) { const n = Math.sqrt(t), r = (n - this.radius) * .5; this.center.addScaledVector(Ui, r / n), this.radius += r } return this } union(e) { return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (cs.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ui.copy(e.center).add(cs)), this.expandByPoint(Ui.copy(e.center).sub(cs))), this) } equals(e) { return e.center.equals(this.center) && e.radius === this.radius } clone() { return new this.constructor().copy(this) } toJSON() { return { radius: this.radius, center: this.center.toArray() } } fromJSON(e) { return this.radius = e.radius, this.center.fromArray(e.center), this } } const ln = new C, ls = new C, fr = new C, En = new C, us = new C, pr = new C, hs = new C; class Cc { constructor(e = new C, t = new C(0, 0, -1)) { this.origin = e, this.direction = t } set(e, t) { return this.origin.copy(e), this.direction.copy(t), this } copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this } at(e, t) { return t.copy(this.origin).addScaledVector(this.direction, e) } lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this } recast(e) { return this.origin.copy(this.at(e, ln)), this } closestPointToPoint(e, t) { t.subVectors(e, this.origin); const n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n) } distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) } distanceSqToPoint(e) { const t = ln.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (ln.copy(this.origin).addScaledVector(this.direction, t), ln.distanceToSquared(e)) } distanceSqToSegment(e, t, n, r) { ls.copy(e).add(t).multiplyScalar(.5), fr.copy(t).sub(e).normalize(), En.copy(this.origin).sub(ls); const s = e.distanceTo(t) * .5, a = -this.direction.dot(fr), o = En.dot(this.direction), c = -En.dot(fr), l = En.lengthSq(), u = Math.abs(1 - a * a); let h, d, p, g; if (u > 0) if (h = a * c - o, d = a * o - c, g = s * u, h >= 0) if (d >= -g) if (d <= g) { const x = 1 / u; h *= x, d *= x, p = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * c) + l } else d = s, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * c) + l; else d = -s, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * c) + l; else d <= -g ? (h = Math.max(0, -(-a * s + o)), d = h > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -h * h + d * (d + 2 * c) + l) : d <= g ? (h = 0, d = Math.min(Math.max(-s, -c), s), p = d * (d + 2 * c) + l) : (h = Math.max(0, -(a * s + o)), d = h > 0 ? s : Math.min(Math.max(-s, -c), s), p = -h * h + d * (d + 2 * c) + l); else d = a > 0 ? -s : s, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * c) + l; return n && n.copy(this.origin).addScaledVector(this.direction, h), r && r.copy(ls).addScaledVector(fr, d), p } intersectSphere(e, t) { ln.subVectors(e.center, this.origin); const n = ln.dot(this.direction), r = ln.dot(ln) - n * n, s = e.radius * e.radius; if (r > s) return null; const a = Math.sqrt(s - r), o = n - a, c = n + a; return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t) } intersectsSphere(e) { return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius } distanceToPlane(e) { const t = e.normal.dot(this.direction); if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null } intersectPlane(e, t) { const n = this.distanceToPlane(e); return n === null ? null : this.at(n, t) } intersectsPlane(e) { const t = e.distanceToPoint(this.origin); return t === 0 || e.normal.dot(this.direction) * t < 0 } intersectBox(e, t) { let n, r, s, a, o, c; const l = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin; return l >= 0 ? (n = (e.min.x - d.x) * l, r = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, r = (e.min.x - d.x) * l), u >= 0 ? (s = (e.min.y - d.y) * u, a = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, a = (e.min.y - d.y) * u), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), h >= 0 ? (o = (e.min.z - d.z) * h, c = (e.max.z - d.z) * h) : (o = (e.max.z - d.z) * h, c = (e.min.z - d.z) * h), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t) } intersectsBox(e) { return this.intersectBox(e, ln) !== null } intersectTriangle(e, t, n, r, s) { us.subVectors(t, e), pr.subVectors(n, e), hs.crossVectors(us, pr); let a = this.direction.dot(hs), o; if (a > 0) { if (r) return null; o = 1 } else if (a < 0) o = -1, a = -a; else return null; En.subVectors(this.origin, e); const c = o * this.direction.dot(pr.crossVectors(En, pr)); if (c < 0) return null; const l = o * this.direction.dot(us.cross(En)); if (l < 0 || c + l > a) return null; const u = -o * En.dot(hs); return u < 0 ? null : this.at(u / a, s) } applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this } equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) } clone() { return new this.constructor().copy(this) } } class et { constructor(e, t, n, r, s, a, o, c, l, u, h, d, p, g, x, m) { et.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l, u, h, d, p, g, x, m) } set(e, t, n, r, s, a, o, c, l, u, h, d, p, g, x, m) { const f = this.elements; return f[0] = e, f[4] = t, f[8] = n, f[12] = r, f[1] = s, f[5] = a, f[9] = o, f[13] = c, f[2] = l, f[6] = u, f[10] = h, f[14] = d, f[3] = p, f[7] = g, f[11] = x, f[15] = m, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone() { return new et().fromArray(this.elements) } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this } copyPosition(e) { const t = this.elements, n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this } setFromMatrix3(e) { const t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this } extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis(e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this } extractRotation(e) { const t = this.elements, n = e.elements, r = 1 / ai.setFromMatrixColumn(e, 0).length(), s = 1 / ai.setFromMatrixColumn(e, 1).length(), a = 1 / ai.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromEuler(e) { const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), u = Math.cos(s), h = Math.sin(s); if (e.order === "XYZ") { const d = a * u, p = a * h, g = o * u, x = o * h; t[0] = c * u, t[4] = -c * h, t[8] = l, t[1] = p + g * l, t[5] = d - x * l, t[9] = -o * c, t[2] = x - d * l, t[6] = g + p * l, t[10] = a * c } else if (e.order === "YXZ") { const d = c * u, p = c * h, g = l * u, x = l * h; t[0] = d + x * o, t[4] = g * o - p, t[8] = a * l, t[1] = a * h, t[5] = a * u, t[9] = -o, t[2] = p * o - g, t[6] = x + d * o, t[10] = a * c } else if (e.order === "ZXY") { const d = c * u, p = c * h, g = l * u, x = l * h; t[0] = d - x * o, t[4] = -a * h, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * u, t[9] = x - d * o, t[2] = -a * l, t[6] = o, t[10] = a * c } else if (e.order === "ZYX") { const d = a * u, p = a * h, g = o * u, x = o * h; t[0] = c * u, t[4] = g * l - p, t[8] = d * l + x, t[1] = c * h, t[5] = x * l + d, t[9] = p * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c } else if (e.order === "YZX") { const d = a * c, p = a * l, g = o * c, x = o * l; t[0] = c * u, t[4] = x - d * h, t[8] = g * h + p, t[1] = h, t[5] = a * u, t[9] = -o * u, t[2] = -l * u, t[6] = p * h + g, t[10] = d - x * h } else if (e.order === "XZY") { const d = a * c, p = a * l, g = o * c, x = o * l; t[0] = c * u, t[4] = -h, t[8] = l * u, t[1] = d * h + x, t[5] = a * u, t[9] = p * h - g, t[2] = g * h - p, t[6] = o * u, t[10] = x * h + d } return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromQuaternion(e) { return this.compose(Tu, e, bu) } lookAt(e, t, n) { const r = this.elements; return Nt.subVectors(e, t), Nt.lengthSq() === 0 && (Nt.z = 1), Nt.normalize(), Tn.crossVectors(n, Nt), Tn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Nt.x += 1e-4 : Nt.z += 1e-4, Nt.normalize(), Tn.crossVectors(n, Nt)), Tn.normalize(), mr.crossVectors(Nt, Tn), r[0] = Tn.x, r[4] = mr.x, r[8] = Nt.x, r[1] = Tn.y, r[5] = mr.y, r[9] = Nt.y, r[2] = Tn.z, r[6] = mr.z, r[10] = Nt.z, this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], u = n[1], h = n[5], d = n[9], p = n[13], g = n[2], x = n[6], m = n[10], f = n[14], b = n[3], E = n[7], S = n[11], I = n[15], L = r[0], R = r[4], N = r[8], y = r[12], M = r[1], P = r[5], k = r[9], z = r[13], Z = r[2], K = r[6], X = r[10], $ = r[14], V = r[3], oe = r[7], he = r[11], ye = r[15]; return s[0] = a * L + o * M + c * Z + l * V, s[4] = a * R + o * P + c * K + l * oe, s[8] = a * N + o * k + c * X + l * he, s[12] = a * y + o * z + c * $ + l * ye, s[1] = u * L + h * M + d * Z + p * V, s[5] = u * R + h * P + d * K + p * oe, s[9] = u * N + h * k + d * X + p * he, s[13] = u * y + h * z + d * $ + p * ye, s[2] = g * L + x * M + m * Z + f * V, s[6] = g * R + x * P + m * K + f * oe, s[10] = g * N + x * k + m * X + f * he, s[14] = g * y + x * z + m * $ + f * ye, s[3] = b * L + E * M + S * Z + I * V, s[7] = b * R + E * P + S * K + I * oe, s[11] = b * N + E * k + S * X + I * he, s[15] = b * y + E * z + S * $ + I * ye, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], u = e[2], h = e[6], d = e[10], p = e[14], g = e[3], x = e[7], m = e[11], f = e[15]; return g * (+s * c * h - r * l * h - s * o * d + n * l * d + r * o * p - n * c * p) + x * (+t * c * p - t * l * d + s * a * d - r * a * p + r * l * u - s * c * u) + m * (+t * l * h - t * o * p - s * a * h + n * a * p + s * o * u - n * l * u) + f * (-r * o * u - t * c * h + t * o * d + r * a * h - n * a * d + n * c * u) } transpose() { const e = this.elements; let t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this } setPosition(e, t, n) { const r = this.elements; return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this } invert() { const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], u = e[8], h = e[9], d = e[10], p = e[11], g = e[12], x = e[13], m = e[14], f = e[15], b = h * m * l - x * d * l + x * c * p - o * m * p - h * c * f + o * d * f, E = g * d * l - u * m * l - g * c * p + a * m * p + u * c * f - a * d * f, S = u * x * l - g * h * l + g * o * p - a * x * p - u * o * f + a * h * f, I = g * h * c - u * x * c - g * o * d + a * x * d + u * o * m - a * h * m, L = t * b + n * E + r * S + s * I; if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const R = 1 / L; return e[0] = b * R, e[1] = (x * d * s - h * m * s - x * r * p + n * m * p + h * r * f - n * d * f) * R, e[2] = (o * m * s - x * c * s + x * r * l - n * m * l - o * r * f + n * c * f) * R, e[3] = (h * c * s - o * d * s - h * r * l + n * d * l + o * r * p - n * c * p) * R, e[4] = E * R, e[5] = (u * m * s - g * d * s + g * r * p - t * m * p - u * r * f + t * d * f) * R, e[6] = (g * c * s - a * m * s - g * r * l + t * m * l + a * r * f - t * c * f) * R, e[7] = (a * d * s - u * c * s + u * r * l - t * d * l - a * r * p + t * c * p) * R, e[8] = S * R, e[9] = (g * h * s - u * x * s - g * n * p + t * x * p + u * n * f - t * h * f) * R, e[10] = (a * x * s - g * o * s + g * n * l - t * x * l - a * n * f + t * o * f) * R, e[11] = (u * o * s - a * h * s - u * n * l + t * h * l + a * n * p - t * o * p) * R, e[12] = I * R, e[13] = (u * x * r - g * h * r + g * n * d - t * x * d - u * n * m + t * h * m) * R, e[14] = (g * o * r - a * x * r - g * n * c + t * x * c + a * n * m - t * o * m) * R, e[15] = (a * h * r - u * o * r + u * n * c - t * h * c - a * n * d + t * o * d) * R, this } scale(e) { const t = this.elements, n = e.x, r = e.y, s = e.z; return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this } getMaxScaleOnAxis() { const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(t, n, r)) } makeTranslation(e, t, n) { return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this } makeRotationX(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this } makeRotationY(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this } makeRotationZ(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis(e, t) { const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, u = s * o; return this.set(l * a + n, l * o - r * c, l * c + r * o, 0, l * o + r * c, u * o + n, u * c - r * a, 0, l * c - r * o, u * c + r * a, s * c * c + n, 0, 0, 0, 0, 1), this } makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this } makeShear(e, t, n, r, s, a) { return this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this } compose(e, t, n) { const r = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, u = a + a, h = o + o, d = s * l, p = s * u, g = s * h, x = a * u, m = a * h, f = o * h, b = c * l, E = c * u, S = c * h, I = n.x, L = n.y, R = n.z; return r[0] = (1 - (x + f)) * I, r[1] = (p + S) * I, r[2] = (g - E) * I, r[3] = 0, r[4] = (p - S) * L, r[5] = (1 - (d + f)) * L, r[6] = (m + b) * L, r[7] = 0, r[8] = (g + E) * R, r[9] = (m - b) * R, r[10] = (1 - (d + x)) * R, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this } decompose(e, t, n) { const r = this.elements; let s = ai.set(r[0], r[1], r[2]).length(); const a = ai.set(r[4], r[5], r[6]).length(), o = ai.set(r[8], r[9], r[10]).length(); this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], kt.copy(this); const l = 1 / s, u = 1 / a, h = 1 / o; return kt.elements[0] *= l, kt.elements[1] *= l, kt.elements[2] *= l, kt.elements[4] *= u, kt.elements[5] *= u, kt.elements[6] *= u, kt.elements[8] *= h, kt.elements[9] *= h, kt.elements[10] *= h, t.setFromRotationMatrix(kt), n.x = s, n.y = a, n.z = o, this } makePerspective(e, t, n, r, s, a, o = gn) { const c = this.elements, l = 2 * s / (t - e), u = 2 * s / (n - r), h = (t + e) / (t - e), d = (n + r) / (n - r); let p, g; if (o === gn) p = -(a + s) / (a - s), g = -2 * a * s / (a - s); else if (o === Wr) p = -a / (a - s), g = -a * s / (a - s); else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o); return c[0] = l, c[4] = 0, c[8] = h, c[12] = 0, c[1] = 0, c[5] = u, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this } makeOrthographic(e, t, n, r, s, a, o = gn) { const c = this.elements, l = 1 / (t - e), u = 1 / (n - r), h = 1 / (a - s), d = (t + e) * l, p = (n + r) * u; let g, x; if (o === gn) g = (a + s) * h, x = -2 * h; else if (o === Wr) g = s * h, x = -1 * h; else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o); return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * u, c[9] = 0, c[13] = -p, c[2] = 0, c[6] = 0, c[10] = x, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this } equals(e) { const t = this.elements, n = e.elements; for (let r = 0; r < 16; r++)if (t[r] !== n[r]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 16; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e } } const ai = new C, kt = new et, Tu = new C(0, 0, 0), bu = new C(1, 1, 1), Tn = new C, mr = new C, Nt = new C, po = new et, mo = new Ri; class xn { constructor(e = 0, t = 0, n = 0, r = xn.DEFAULT_ORDER) { this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get order() { return this._order } set order(e) { this._order = e, this._onChangeCallback() } set(e, t, n, r = this._order) { return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._order) } copy(e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this } setFromRotationMatrix(e, t = this._order, n = !0) { const r = e.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], u = r[9], h = r[2], d = r[6], p = r[10]; switch (t) { case "XYZ": this._y = Math.asin(Fe(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, l), this._z = 0); break; case "YXZ": this._x = Math.asin(-Fe(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, s), this._z = 0); break; case "ZXY": this._x = Math.asin(Fe(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s)); break; case "ZYX": this._y = Math.asin(-Fe(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l)); break; case "YZX": this._z = Math.asin(Fe(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, p)); break; case "XZY": this._z = Math.asin(-Fe(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, p), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t) }return this._order = t, n === !0 && this._onChangeCallback(), this } setFromQuaternion(e, t, n) { return po.makeRotationFromQuaternion(e), this.setFromRotationMatrix(po, t, n) } setFromVector3(e, t = this._order) { return this.set(e.x, e.y, e.z, t) } reorder(e) { return mo.setFromEuler(this), this.setFromQuaternion(mo, e) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order } fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order } } xn.DEFAULT_ORDER = "XYZ"; class Va { constructor() { this.mask = 1 } set(e) { this.mask = (1 << e | 0) >>> 0 } enable(e) { this.mask |= 1 << e | 0 } enableAll() { this.mask = -1 } toggle(e) { this.mask ^= 1 << e | 0 } disable(e) { this.mask &= ~(1 << e | 0) } disableAll() { this.mask = 0 } test(e) { return (this.mask & e.mask) !== 0 } isEnabled(e) { return (this.mask & (1 << e | 0)) !== 0 } } let Au = 0; const go = new C, oi = new Ri, un = new et, gr = new C, Ii = new C, wu = new C, Ru = new Ri, _o = new C(1, 0, 0), vo = new C(0, 1, 0), xo = new C(0, 0, 1), So = { type: "added" }, Cu = { type: "removed" }, ci = { type: "childadded", child: null }, ds = { type: "childremoved", child: null }; class Dt extends wi { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Au++ }), this.uuid = sn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Dt.DEFAULT_UP.clone(); const e = new C, t = new xn, n = new Ri, r = new C(1, 1, 1); function s() { n.setFromEuler(t, !1) } function a() { t.setFromQuaternion(n, void 0, !1) } t._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: r }, modelViewMatrix: { value: new et }, normalMatrix: { value: new Ue } }), this.matrix = new et, this.matrixWorld = new et, this.matrixAutoUpdate = Dt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Va, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {} } onBeforeShadow() { } onAfterShadow() { } onBeforeRender() { } onAfterRender() { } applyMatrix4(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion(e) { return this.quaternion.premultiply(e), this } setRotationFromAxisAngle(e, t) { this.quaternion.setFromAxisAngle(e, t) } setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !0) } setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(e) } setRotationFromQuaternion(e) { this.quaternion.copy(e) } rotateOnAxis(e, t) { return oi.setFromAxisAngle(e, t), this.quaternion.multiply(oi), this } rotateOnWorldAxis(e, t) { return oi.setFromAxisAngle(e, t), this.quaternion.premultiply(oi), this } rotateX(e) { return this.rotateOnAxis(_o, e) } rotateY(e) { return this.rotateOnAxis(vo, e) } rotateZ(e) { return this.rotateOnAxis(xo, e) } translateOnAxis(e, t) { return go.copy(e).applyQuaternion(this.quaternion), this.position.add(go.multiplyScalar(t)), this } translateX(e) { return this.translateOnAxis(_o, e) } translateY(e) { return this.translateOnAxis(vo, e) } translateZ(e) { return this.translateOnAxis(xo, e) } localToWorld(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld) } worldToLocal(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(un.copy(this.matrixWorld).invert()) } lookAt(e, t, n) { e.isVector3 ? gr.copy(e) : gr.set(e, t, n); const r = this.parent; this.updateWorldMatrix(!0, !1), Ii.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? un.lookAt(Ii, gr, this.up) : un.lookAt(gr, Ii, this.up), this.quaternion.setFromRotationMatrix(un), r && (un.extractRotation(r.matrixWorld), oi.setFromRotationMatrix(un), this.quaternion.premultiply(oi.invert())) } add(e) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++)this.add(arguments[t]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(So), ci.child = e, this.dispatchEvent(ci), ci.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) } remove(e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.remove(arguments[n]); return this } const t = this.children.indexOf(e); return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Cu), ds.child = e, this.dispatchEvent(ds), ds.child = null), this } removeFromParent() { const e = this.parent; return e !== null && e.remove(this), this } clear() { return this.remove(...this.children) } attach(e) { return this.updateWorldMatrix(!0, !1), un.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), un.multiply(e.parent.matrixWorld)), e.applyMatrix4(un), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(So), ci.child = e, this.dispatchEvent(ci), ci.child = null, this } getObjectById(e) { return this.getObjectByProperty("id", e) } getObjectByName(e) { return this.getObjectByProperty("name", e) } getObjectByProperty(e, t) { if (this[e] === t) return this; for (let n = 0, r = this.children.length; n < r; n++) { const a = this.children[n].getObjectByProperty(e, t); if (a !== void 0) return a } } getObjectsByProperty(e, t, n = []) { this[e] === t && n.push(this); const r = this.children; for (let s = 0, a = r.length; s < a; s++)r[s].getObjectsByProperty(e, t, n); return n } getWorldPosition(e) { return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ii, e, wu), e } getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ii, Ru, e), e } getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() } raycast() { } traverse(e) { e(this); const t = this.children; for (let n = 0, r = t.length; n < r; n++)t[n].traverse(e) } traverseVisible(e) { if (this.visible === !1) return; e(this); const t = this.children; for (let n = 0, r = t.length; n < r; n++)t[n].traverseVisible(e) } traverseAncestors(e) { const t = this.parent; t !== null && (e(t), t.traverseAncestors(e)) } updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0); const t = this.children; for (let n = 0, r = t.length; n < r; n++)t[n].updateMatrixWorld(e) } updateWorldMatrix(e, t) { const n = this.parent; if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) { const r = this.children; for (let s = 0, a = r.length; s < a; s++)r[s].updateWorldMatrix(!1, !0) } } toJSON(e) { const t = e === void 0 || typeof e == "string", n = {}; t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" }); const r = {}; r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map(o => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), r.instanceInfo = this._instanceInfo.map(o => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON())); function s(o, c) { return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid } if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid); else if (this.isMesh || this.isLine || this.isPoints) { r.geometry = s(e.geometries, this.geometry); const o = this.geometry.parameters; if (o !== void 0 && o.shapes !== void 0) { const c = o.shapes; if (Array.isArray(c)) for (let l = 0, u = c.length; l < u; l++) { const h = c[l]; s(e.shapes, h) } else s(e.shapes, c) } } if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { const o = []; for (let c = 0, l = this.material.length; c < l; c++)o.push(s(e.materials, this.material[c])); r.material = o } else r.material = s(e.materials, this.material); if (this.children.length > 0) { r.children = []; for (let o = 0; o < this.children.length; o++)r.children.push(this.children[o].toJSON(e).object) } if (this.animations.length > 0) { r.animations = []; for (let o = 0; o < this.animations.length; o++) { const c = this.animations[o]; r.animations.push(s(e.animations, c)) } } if (t) { const o = a(e.geometries), c = a(e.materials), l = a(e.textures), u = a(e.images), h = a(e.shapes), d = a(e.skeletons), p = a(e.animations), g = a(e.nodes); o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g) } return n.object = r, n; function a(o) { const c = []; for (const l in o) { const u = o[l]; delete u.metadata, c.push(u) } return c } } clone(e) { return new this.constructor().copy(this, e) } copy(e, t = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let n = 0; n < e.children.length; n++) { const r = e.children[n]; this.add(r.clone()) } return this } } Dt.DEFAULT_UP = new C(0, 1, 0); Dt.DEFAULT_MATRIX_AUTO_UPDATE = !0; Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0; const Wt = new C, hn = new C, fs = new C, dn = new C, li = new C, ui = new C, Mo = new C, ps = new C, ms = new C, gs = new C, _s = new Qe, vs = new Qe, xs = new Qe; class Yt { constructor(e = new C, t = new C, n = new C) { this.a = e, this.b = t, this.c = n } static getNormal(e, t, n, r) { r.subVectors(n, t), Wt.subVectors(e, t), r.cross(Wt); const s = r.lengthSq(); return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0) } static getBarycoord(e, t, n, r, s) { Wt.subVectors(r, t), hn.subVectors(n, t), fs.subVectors(e, t); const a = Wt.dot(Wt), o = Wt.dot(hn), c = Wt.dot(fs), l = hn.dot(hn), u = hn.dot(fs), h = a * l - o * o; if (h === 0) return s.set(0, 0, 0), null; const d = 1 / h, p = (l * c - o * u) * d, g = (a * u - o * c) * d; return s.set(1 - p - g, g, p) } static containsPoint(e, t, n, r) { return this.getBarycoord(e, t, n, r, dn) === null ? !1 : dn.x >= 0 && dn.y >= 0 && dn.x + dn.y <= 1 } static getInterpolation(e, t, n, r, s, a, o, c) { return this.getBarycoord(e, t, n, r, dn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, dn.x), c.addScaledVector(a, dn.y), c.addScaledVector(o, dn.z), c) } static getInterpolatedAttribute(e, t, n, r, s, a) { return _s.setScalar(0), vs.setScalar(0), xs.setScalar(0), _s.fromBufferAttribute(e, t), vs.fromBufferAttribute(e, n), xs.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(_s, s.x), a.addScaledVector(vs, s.y), a.addScaledVector(xs, s.z), a } static isFrontFacing(e, t, n, r) { return Wt.subVectors(n, t), hn.subVectors(e, t), Wt.cross(hn).dot(r) < 0 } set(e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this } setFromPointsAndIndices(e, t, n, r) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this } setFromAttributeAndIndices(e, t, n, r) { return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this } clone() { return new this.constructor().copy(this) } copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this } getArea() { return Wt.subVectors(this.c, this.b), hn.subVectors(this.a, this.b), Wt.cross(hn).length() * .5 } getMidpoint(e) { return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(e) { return Yt.getNormal(this.a, this.b, this.c, e) } getPlane(e) { return e.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord(e, t) { return Yt.getBarycoord(e, this.a, this.b, this.c, t) } getInterpolation(e, t, n, r, s) { return Yt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s) } containsPoint(e) { return Yt.containsPoint(e, this.a, this.b, this.c) } isFrontFacing(e) { return Yt.isFrontFacing(this.a, this.b, this.c, e) } intersectsBox(e) { return e.intersectsTriangle(this) } closestPointToPoint(e, t) { const n = this.a, r = this.b, s = this.c; let a, o; li.subVectors(r, n), ui.subVectors(s, n), ps.subVectors(e, n); const c = li.dot(ps), l = ui.dot(ps); if (c <= 0 && l <= 0) return t.copy(n); ms.subVectors(e, r); const u = li.dot(ms), h = ui.dot(ms); if (u >= 0 && h <= u) return t.copy(r); const d = c * h - u * l; if (d <= 0 && c >= 0 && u <= 0) return a = c / (c - u), t.copy(n).addScaledVector(li, a); gs.subVectors(e, s); const p = li.dot(gs), g = ui.dot(gs); if (g >= 0 && p <= g) return t.copy(s); const x = p * l - c * g; if (x <= 0 && l >= 0 && g <= 0) return o = l / (l - g), t.copy(n).addScaledVector(ui, o); const m = u * g - p * h; if (m <= 0 && h - u >= 0 && p - g >= 0) return Mo.subVectors(s, r), o = (h - u) / (h - u + (p - g)), t.copy(r).addScaledVector(Mo, o); const f = 1 / (m + x + d); return a = x * f, o = d * f, t.copy(n).addScaledVector(li, a).addScaledVector(ui, o) } equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } } const Pc = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, bn = { h: 0, s: 0, l: 0 }, _r = { h: 0, s: 0, l: 0 }; function Ss(i, e, t) { return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i } class Ye { constructor(e, t, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n) } set(e, t, n) { if (t === void 0 && n === void 0) { const r = e; r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r) } else this.setRGB(e, t, n); return this } setScalar(e) { return this.r = e, this.g = e, this.b = e, this } setHex(e, t = Vt) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, He.colorSpaceToWorking(this, t), this } setRGB(e, t, n, r = He.workingColorSpace) { return this.r = e, this.g = t, this.b = n, He.colorSpaceToWorking(this, r), this } setHSL(e, t, n, r = He.workingColorSpace) { if (e = Ba(e, 1), t = Fe(t, 0, 1), n = Fe(n, 0, 1), t === 0) this.r = this.g = this.b = n; else { const s = n <= .5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s; this.r = Ss(a, s, e + 1 / 3), this.g = Ss(a, s, e), this.b = Ss(a, s, e - 1 / 3) } return He.colorSpaceToWorking(this, r), this } setStyle(e, t = Vt) { function n(s) { s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } let r; if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) { let s; const a = r[1], o = r[2]; switch (a) { case "rgb": case "rgba": if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t); if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t); break; case "hsl": case "hsla": if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t); break; default: console.warn("THREE.Color: Unknown color model " + e) } } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) { const s = r[1], a = s.length; if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t); if (a === 6) return this.setHex(parseInt(s, 16), t); console.warn("THREE.Color: Invalid hex color " + e) } else if (e && e.length > 0) return this.setColorName(e, t); return this } setColorName(e, t = Vt) { const n = Pc[e.toLowerCase()]; return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this } clone() { return new this.constructor(this.r, this.g, this.b) } copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this } copySRGBToLinear(e) { return this.r = _n(e.r), this.g = _n(e.g), this.b = _n(e.b), this } copyLinearToSRGB(e) { return this.r = xi(e.r), this.g = xi(e.g), this.b = xi(e.b), this } convertSRGBToLinear() { return this.copySRGBToLinear(this), this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(e = Vt) { return He.workingToColorSpace(xt.copy(this), e), Math.round(Fe(xt.r * 255, 0, 255)) * 65536 + Math.round(Fe(xt.g * 255, 0, 255)) * 256 + Math.round(Fe(xt.b * 255, 0, 255)) } getHexString(e = Vt) { return ("000000" + this.getHex(e).toString(16)).slice(-6) } getHSL(e, t = He.workingColorSpace) { He.workingToColorSpace(xt.copy(this), t); const n = xt.r, r = xt.g, s = xt.b, a = Math.max(n, r, s), o = Math.min(n, r, s); let c, l; const u = (o + a) / 2; if (o === a) c = 0, l = 0; else { const h = a - o; switch (l = u <= .5 ? h / (a + o) : h / (2 - a - o), a) { case n: c = (r - s) / h + (r < s ? 6 : 0); break; case r: c = (s - n) / h + 2; break; case s: c = (n - r) / h + 4; break }c /= 6 } return e.h = c, e.s = l, e.l = u, e } getRGB(e, t = He.workingColorSpace) { return He.workingToColorSpace(xt.copy(this), t), e.r = xt.r, e.g = xt.g, e.b = xt.b, e } getStyle(e = Vt) { He.workingToColorSpace(xt.copy(this), e); const t = xt.r, n = xt.g, r = xt.b; return e !== Vt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` } offsetHSL(e, t, n) { return this.getHSL(bn), this.setHSL(bn.h + e, bn.s + t, bn.l + n) } add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this } addColors(e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this } addScalar(e) { return this.r += e, this.g += e, this.b += e, this } sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this } multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this } multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this } lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this } lerpColors(e, t, n) { return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this } lerpHSL(e, t) { this.getHSL(bn), e.getHSL(_r); const n = Gi(bn.h, _r.h, t), r = Gi(bn.s, _r.s, t), s = Gi(bn.l, _r.l, t); return this.setHSL(n, r, s), this } setFromVector3(e) { return this.r = e.x, this.g = e.y, this.b = e.z, this } applyMatrix3(e) { const t = this.r, n = this.g, r = this.b, s = e.elements; return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this } equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b } fromArray(e, t = 0) { return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e } fromBufferAttribute(e, t) { return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this } toJSON() { return this.getHex() } *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b } } const xt = new Ye; Ye.NAMES = Pc; let Pu = 0; class jr extends wi { constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Pu++ }), this.uuid = sn(), this.name = "", this.type = "Material", this.blending = _i, this.side = Dn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Bs, this.blendDst = zs, this.blendEquation = Xn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ye(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Si, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = ao, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ti, this.stencilZFail = ti, this.stencilZPass = ti, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest() { return this._alphaTest } set alphaTest(e) { this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e } onBeforeRender() { } onBeforeCompile() { } customProgramCacheKey() { return this.onBeforeCompile.toString() } setValues(e) { if (e !== void 0) for (const t in e) { const n = e[t]; if (n === void 0) { console.warn(`THREE.Material: parameter '${t}' has value of undefined.`); continue } const r = this[t]; if (r === void 0) { console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`); continue } r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n } } toJSON(e) { const t = e === void 0 || typeof e == "string"; t && (e = { textures: {}, images: {} }); const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== _i && (n.blending = this.blending), this.side !== Dn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Bs && (n.blendSrc = this.blendSrc), this.blendDst !== zs && (n.blendDst = this.blendDst), this.blendEquation !== Xn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Si && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== ao && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ti && (n.stencilFail = this.stencilFail), this.stencilZFail !== ti && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== ti && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData); function r(s) { const a = []; for (const o in s) { const c = s[o]; delete c.metadata, a.push(c) } return a } if (t) { const s = r(e.textures), a = r(e.images); s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a) } return n } clone() { return new this.constructor().copy(this) } copy(e) { this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; const t = e.clippingPlanes; let n = null; if (t !== null) { const r = t.length; n = new Array(r); for (let s = 0; s !== r; ++s)n[s] = t[s].clone() } return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } set needsUpdate(e) { e === !0 && this.version++ } } class Rn extends jr { constructor(e) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ye(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new xn, this.combine = gc, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this } } const ut = new C, vr = new fe; let Lu = 0; class $t { constructor(e, t, n = !1) { if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Lu++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ea, this.updateRanges = [], this.gpuType = mn, this.version = 0 } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this } copyAt(e, t, n) { e *= this.itemSize, n *= t.itemSize; for (let r = 0, s = this.itemSize; r < s; r++)this.array[e + r] = t.array[n + r]; return this } copyArray(e) { return this.array.set(e), this } applyMatrix3(e) { if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++)vr.fromBufferAttribute(this, t), vr.applyMatrix3(e), this.setXY(t, vr.x, vr.y); else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++)ut.fromBufferAttribute(this, t), ut.applyMatrix3(e), this.setXYZ(t, ut.x, ut.y, ut.z); return this } applyMatrix4(e) { for (let t = 0, n = this.count; t < n; t++)ut.fromBufferAttribute(this, t), ut.applyMatrix4(e), this.setXYZ(t, ut.x, ut.y, ut.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)ut.fromBufferAttribute(this, t), ut.applyNormalMatrix(e), this.setXYZ(t, ut.x, ut.y, ut.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)ut.fromBufferAttribute(this, t), ut.transformDirection(e), this.setXYZ(t, ut.x, ut.y, ut.z); return this } set(e, t = 0) { return this.array.set(e, t), this } getComponent(e, t) { let n = this.array[e * this.itemSize + t]; return this.normalized && (n = qt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = qe(n, this.array)), this.array[e * this.itemSize + t] = n, this } getX(e) { let t = this.array[e * this.itemSize]; return this.normalized && (t = qt(t, this.array)), t } setX(e, t) { return this.normalized && (t = qe(t, this.array)), this.array[e * this.itemSize] = t, this } getY(e) { let t = this.array[e * this.itemSize + 1]; return this.normalized && (t = qt(t, this.array)), t } setY(e, t) { return this.normalized && (t = qe(t, this.array)), this.array[e * this.itemSize + 1] = t, this } getZ(e) { let t = this.array[e * this.itemSize + 2]; return this.normalized && (t = qt(t, this.array)), t } setZ(e, t) { return this.normalized && (t = qe(t, this.array)), this.array[e * this.itemSize + 2] = t, this } getW(e) { let t = this.array[e * this.itemSize + 3]; return this.normalized && (t = qt(t, this.array)), t } setW(e, t) { return this.normalized && (t = qe(t, this.array)), this.array[e * this.itemSize + 3] = t, this } setXY(e, t, n) { return e *= this.itemSize, this.normalized && (t = qe(t, this.array), n = qe(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this } setXYZ(e, t, n, r) { return e *= this.itemSize, this.normalized && (t = qe(t, this.array), n = qe(n, this.array), r = qe(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this } setXYZW(e, t, n, r, s) { return e *= this.itemSize, this.normalized && (t = qe(t, this.array), n = qe(n, this.array), r = qe(r, this.array), s = qe(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this } onUpload(e) { return this.onUploadCallback = e, this } clone() { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON() { const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (e.name = this.name), this.usage !== Ea && (e.usage = this.usage), e } } class Lc extends $t { constructor(e, t, n) { super(new Uint16Array(e), t, n) } } class Dc extends $t { constructor(e, t, n) { super(new Uint32Array(e), t, n) } } class yt extends $t { constructor(e, t, n) { super(new Float32Array(e), t, n) } } let Du = 0; const zt = new et, Ms = new Dt, hi = new C, Ft = new In, Ni = new In, pt = new C; class jt extends wi { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Du++ }), this.uuid = sn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex() { return this.index } setIndex(e) { return Array.isArray(e) ? this.index = new (wc(e) ? Dc : Lc)(e, 1) : this.index = e, this } setIndirect(e) { return this.indirect = e, this } getIndirect() { return this.indirect } getAttribute(e) { return this.attributes[e] } setAttribute(e, t) { return this.attributes[e] = t, this } deleteAttribute(e) { return delete this.attributes[e], this } hasAttribute(e) { return this.attributes[e] !== void 0 } addGroup(e, t, n = 0) { this.groups.push({ start: e, count: t, materialIndex: n }) } clearGroups() { this.groups = [] } setDrawRange(e, t) { this.drawRange.start = e, this.drawRange.count = t } applyMatrix4(e) { const t = this.attributes.position; t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) { const s = new Ue().getNormalMatrix(e); n.applyNormalMatrix(s), n.needsUpdate = !0 } const r = this.attributes.tangent; return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion(e) { return zt.makeRotationFromQuaternion(e), this.applyMatrix4(zt), this } rotateX(e) { return zt.makeRotationX(e), this.applyMatrix4(zt), this } rotateY(e) { return zt.makeRotationY(e), this.applyMatrix4(zt), this } rotateZ(e) { return zt.makeRotationZ(e), this.applyMatrix4(zt), this } translate(e, t, n) { return zt.makeTranslation(e, t, n), this.applyMatrix4(zt), this } scale(e, t, n) { return zt.makeScale(e, t, n), this.applyMatrix4(zt), this } lookAt(e) { return Ms.lookAt(e), Ms.updateMatrix(), this.applyMatrix4(Ms.matrix), this } center() { return this.computeBoundingBox(), this.boundingBox.getCenter(hi).negate(), this.translate(hi.x, hi.y, hi.z), this } setFromPoints(e) { const t = this.getAttribute("position"); if (t === void 0) { const n = []; for (let r = 0, s = e.length; r < s; r++) { const a = e[r]; n.push(a.x, a.y, a.z || 0) } this.setAttribute("position", new yt(n, 3)) } else { const n = Math.min(e.length, t.count); for (let r = 0; r < n; r++) { const s = e[r]; t.setXYZ(r, s.x, s.y, s.z || 0) } e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0 } return this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new In); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, r = t.length; n < r; n++) { const s = t[n]; Ft.setFromBufferAttribute(s), this.morphTargetsRelative ? (pt.addVectors(this.boundingBox.min, Ft.min), this.boundingBox.expandByPoint(pt), pt.addVectors(this.boundingBox.max, Ft.max), this.boundingBox.expandByPoint(pt)) : (this.boundingBox.expandByPoint(Ft.min), this.boundingBox.expandByPoint(Ft.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new sr); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new C, 1 / 0); return } if (e) { const n = this.boundingSphere.center; if (Ft.setFromBufferAttribute(e), t) for (let s = 0, a = t.length; s < a; s++) { const o = t[s]; Ni.setFromBufferAttribute(o), this.morphTargetsRelative ? (pt.addVectors(Ft.min, Ni.min), Ft.expandByPoint(pt), pt.addVectors(Ft.max, Ni.max), Ft.expandByPoint(pt)) : (Ft.expandByPoint(Ni.min), Ft.expandByPoint(Ni.max)) } Ft.getCenter(n); let r = 0; for (let s = 0, a = e.count; s < a; s++)pt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(pt)); if (t) for (let s = 0, a = t.length; s < a; s++) { const o = t[s], c = this.morphTargetsRelative; for (let l = 0, u = o.count; l < u; l++)pt.fromBufferAttribute(o, l), c && (hi.fromBufferAttribute(e, l), pt.add(hi)), r = Math.max(r, n.distanceToSquared(pt)) } this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents() { const e = this.index, t = this.attributes; if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const n = t.position, r = t.normal, s = t.uv; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new $t(new Float32Array(4 * n.count), 4)); const a = this.getAttribute("tangent"), o = [], c = []; for (let N = 0; N < n.count; N++)o[N] = new C, c[N] = new C; const l = new C, u = new C, h = new C, d = new fe, p = new fe, g = new fe, x = new C, m = new C; function f(N, y, M) { l.fromBufferAttribute(n, N), u.fromBufferAttribute(n, y), h.fromBufferAttribute(n, M), d.fromBufferAttribute(s, N), p.fromBufferAttribute(s, y), g.fromBufferAttribute(s, M), u.sub(l), h.sub(l), p.sub(d), g.sub(d); const P = 1 / (p.x * g.y - g.x * p.y); !isFinite(P) || (x.copy(u).multiplyScalar(g.y).addScaledVector(h, -p.y).multiplyScalar(P), m.copy(h).multiplyScalar(p.x).addScaledVector(u, -g.x).multiplyScalar(P), o[N].add(x), o[y].add(x), o[M].add(x), c[N].add(m), c[y].add(m), c[M].add(m)) } let b = this.groups; b.length === 0 && (b = [{ start: 0, count: e.count }]); for (let N = 0, y = b.length; N < y; ++N) { const M = b[N], P = M.start, k = M.count; for (let z = P, Z = P + k; z < Z; z += 3)f(e.getX(z + 0), e.getX(z + 1), e.getX(z + 2)) } const E = new C, S = new C, I = new C, L = new C; function R(N) { I.fromBufferAttribute(r, N), L.copy(I); const y = o[N]; E.copy(y), E.sub(I.multiplyScalar(I.dot(y))).normalize(), S.crossVectors(L, y); const P = S.dot(c[N]) < 0 ? -1 : 1; a.setXYZW(N, E.x, E.y, E.z, P) } for (let N = 0, y = b.length; N < y; ++N) { const M = b[N], P = M.start, k = M.count; for (let z = P, Z = P + k; z < Z; z += 3)R(e.getX(z + 0)), R(e.getX(z + 1)), R(e.getX(z + 2)) } } computeVertexNormals() { const e = this.index, t = this.getAttribute("position"); if (t !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new $t(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n); else for (let d = 0, p = n.count; d < p; d++)n.setXYZ(d, 0, 0, 0); const r = new C, s = new C, a = new C, o = new C, c = new C, l = new C, u = new C, h = new C; if (e) for (let d = 0, p = e.count; d < p; d += 3) { const g = e.getX(d + 0), x = e.getX(d + 1), m = e.getX(d + 2); r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, x), a.fromBufferAttribute(t, m), u.subVectors(a, s), h.subVectors(r, s), u.cross(h), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, x), l.fromBufferAttribute(n, m), o.add(u), c.add(u), l.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(x, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z) } else for (let d = 0, p = t.count; d < p; d += 3)r.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), u.subVectors(a, s), h.subVectors(r, s), u.cross(h), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z); this.normalizeNormals(), n.needsUpdate = !0 } } normalizeNormals() { const e = this.attributes.normal; for (let t = 0, n = e.count; t < n; t++)pt.fromBufferAttribute(e, t), pt.normalize(), e.setXYZ(t, pt.x, pt.y, pt.z) } toNonIndexed() { function e(o, c) { const l = o.array, u = o.itemSize, h = o.normalized, d = new l.constructor(c.length * u); let p = 0, g = 0; for (let x = 0, m = c.length; x < m; x++) { o.isInterleavedBufferAttribute ? p = c[x] * o.data.stride + o.offset : p = c[x] * u; for (let f = 0; f < u; f++)d[g++] = l[p++] } return new $t(d, u, h) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const t = new jt, n = this.index.array, r = this.attributes; for (const o in r) { const c = r[o], l = e(c, n); t.setAttribute(o, l) } const s = this.morphAttributes; for (const o in s) { const c = [], l = s[o]; for (let u = 0, h = l.length; u < h; u++) { const d = l[u], p = e(d, n); c.push(p) } t.morphAttributes[o] = c } t.morphTargetsRelative = this.morphTargetsRelative; const a = this.groups; for (let o = 0, c = a.length; o < c; o++) { const l = a[o]; t.addGroup(l.start, l.count, l.materialIndex) } return t } toJSON() { const e = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) { const c = this.parameters; for (const l in c) c[l] !== void 0 && (e[l] = c[l]); return e } e.data = { attributes: {} }; const t = this.index; t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) }); const n = this.attributes; for (const c in n) { const l = n[c]; e.data.attributes[c] = l.toJSON(e.data) } const r = {}; let s = !1; for (const c in this.morphAttributes) { const l = this.morphAttributes[c], u = []; for (let h = 0, d = l.length; h < d; h++) { const p = l[h]; u.push(p.toJSON(e.data)) } u.length > 0 && (r[c] = u, s = !0) } s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative); const a = this.groups; a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a))); const o = this.boundingSphere; return o !== null && (e.data.boundingSphere = o.toJSON()), e } clone() { return new this.constructor().copy(this) } copy(e) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const t = {}; this.name = e.name; const n = e.index; n !== null && this.setIndex(n.clone()); const r = e.attributes; for (const l in r) { const u = r[l]; this.setAttribute(l, u.clone(t)) } const s = e.morphAttributes; for (const l in s) { const u = [], h = s[l]; for (let d = 0, p = h.length; d < p; d++)u.push(h[d].clone(t)); this.morphAttributes[l] = u } this.morphTargetsRelative = e.morphTargetsRelative; const a = e.groups; for (let l = 0, u = a.length; l < u; l++) { const h = a[l]; this.addGroup(h.start, h.count, h.materialIndex) } const o = e.boundingBox; o !== null && (this.boundingBox = o.clone()); const c = e.boundingSphere; return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } const yo = new et, zn = new Cc, xr = new sr, Eo = new C, Sr = new C, Mr = new C, yr = new C, ys = new C, Er = new C, To = new C, Tr = new C; class Mt extends Dt { constructor(e = new jt, t = new Rn) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const r = t[n[0]]; if (r !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, a = r.length; s < a; s++) { const o = r[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s } } } } getVertexPosition(e, t) { const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative; t.fromBufferAttribute(r, e); const o = this.morphTargetInfluences; if (s && o) { Er.set(0, 0, 0); for (let c = 0, l = s.length; c < l; c++) { const u = o[c], h = s[c]; u !== 0 && (ys.fromBufferAttribute(h, e), a ? Er.addScaledVector(ys, u) : Er.addScaledVector(ys.sub(t), u)) } t.add(Er) } return t } raycast(e, t) { const n = this.geometry, r = this.material, s = this.matrixWorld; r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), xr.copy(n.boundingSphere), xr.applyMatrix4(s), zn.copy(e.ray).recast(e.near), !(xr.containsPoint(zn.origin) === !1 && (zn.intersectSphere(xr, Eo) === null || zn.origin.distanceToSquared(Eo) > (e.far - e.near) ** 2)) && (yo.copy(s).invert(), zn.copy(e.ray).applyMatrix4(yo), !(n.boundingBox !== null && zn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, zn))) } _computeIntersections(e, t, n) { let r; const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, u = s.attributes.uv1, h = s.attributes.normal, d = s.groups, p = s.drawRange; if (o !== null) if (Array.isArray(a)) for (let g = 0, x = d.length; g < x; g++) { const m = d[g], f = a[m.materialIndex], b = Math.max(m.start, p.start), E = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count)); for (let S = b, I = E; S < I; S += 3) { const L = o.getX(S), R = o.getX(S + 1), N = o.getX(S + 2); r = br(this, f, e, n, l, u, h, L, R, N), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = m.materialIndex, t.push(r)) } } else { const g = Math.max(0, p.start), x = Math.min(o.count, p.start + p.count); for (let m = g, f = x; m < f; m += 3) { const b = o.getX(m), E = o.getX(m + 1), S = o.getX(m + 2); r = br(this, a, e, n, l, u, h, b, E, S), r && (r.faceIndex = Math.floor(m / 3), t.push(r)) } } else if (c !== void 0) if (Array.isArray(a)) for (let g = 0, x = d.length; g < x; g++) { const m = d[g], f = a[m.materialIndex], b = Math.max(m.start, p.start), E = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count)); for (let S = b, I = E; S < I; S += 3) { const L = S, R = S + 1, N = S + 2; r = br(this, f, e, n, l, u, h, L, R, N), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = m.materialIndex, t.push(r)) } } else { const g = Math.max(0, p.start), x = Math.min(c.count, p.start + p.count); for (let m = g, f = x; m < f; m += 3) { const b = m, E = m + 1, S = m + 2; r = br(this, a, e, n, l, u, h, b, E, S), r && (r.faceIndex = Math.floor(m / 3), t.push(r)) } } } } function Uu(i, e, t, n, r, s, a, o) { let c; if (e.side === Lt ? c = n.intersectTriangle(a, s, r, !0, o) : c = n.intersectTriangle(r, s, a, e.side === Dn, o), c === null) return null; Tr.copy(o), Tr.applyMatrix4(i.matrixWorld); const l = t.ray.origin.distanceTo(Tr); return l < t.near || l > t.far ? null : { distance: l, point: Tr.clone(), object: i } } function br(i, e, t, n, r, s, a, o, c, l) { i.getVertexPosition(o, Sr), i.getVertexPosition(c, Mr), i.getVertexPosition(l, yr); const u = Uu(i, e, t, n, Sr, Mr, yr, To); if (u) { const h = new C; Yt.getBarycoord(To, Sr, Mr, yr, h), r && (u.uv = Yt.getInterpolatedAttribute(r, o, c, l, h, new fe)), s && (u.uv1 = Yt.getInterpolatedAttribute(s, o, c, l, h, new fe)), a && (u.normal = Yt.getInterpolatedAttribute(a, o, c, l, h, new C), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1)); const d = { a: o, b: c, c: l, normal: new C, materialIndex: 0 }; Yt.getNormal(Sr, Mr, yr, d.normal), u.face = d, u.barycoord = h } return u } class ar extends jt { constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: r, heightSegments: s, depthSegments: a }; const o = this; r = Math.floor(r), s = Math.floor(s), a = Math.floor(a); const c = [], l = [], u = [], h = []; let d = 0, p = 0; g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, a, 2), g("x", "z", "y", 1, -1, e, n, -t, r, a, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new yt(l, 3)), this.setAttribute("normal", new yt(u, 3)), this.setAttribute("uv", new yt(h, 2)); function g(x, m, f, b, E, S, I, L, R, N, y) { const M = S / R, P = I / N, k = S / 2, z = I / 2, Z = L / 2, K = R + 1, X = N + 1; let $ = 0, V = 0; const oe = new C; for (let he = 0; he < X; he++) { const ye = he * P - z; for (let Oe = 0; Oe < K; Oe++) { const Je = Oe * M - k; oe[x] = Je * b, oe[m] = ye * E, oe[f] = Z, l.push(oe.x, oe.y, oe.z), oe[x] = 0, oe[m] = 0, oe[f] = L > 0 ? 1 : -1, u.push(oe.x, oe.y, oe.z), h.push(Oe / R), h.push(1 - he / N), $ += 1 } } for (let he = 0; he < N; he++)for (let ye = 0; ye < R; ye++) { const Oe = d + ye + K * he, Je = d + ye + K * (he + 1), W = d + (ye + 1) + K * (he + 1), te = d + (ye + 1) + K * he; c.push(Oe, Je, te), c.push(Je, W, te), V += 6 } o.addGroup(p, V, y), p += V, d += $ } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new ar(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments) } } function Ti(i) { const e = {}; for (const t in i) { e[t] = {}; for (const n in i[t]) { const r = i[t][n]; r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r } } return e } function At(i) { const e = {}; for (let t = 0; t < i.length; t++) { const n = Ti(i[t]); for (const r in n) e[r] = n[r] } return e } function Iu(i) { const e = []; for (let t = 0; t < i.length; t++)e.push(i[t].clone()); return e } function Uc(i) { const e = i.getRenderTarget(); return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : He.workingColorSpace } const Ha = { clone: Ti, merge: At }; var Nu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Fu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`; class Sn extends jr { constructor(e) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Nu, this.fragmentShader = Fu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e) } copy(e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ti(e.uniforms), this.uniformsGroups = Iu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this } toJSON(e) { const t = super.toJSON(e); t.glslVersion = this.glslVersion, t.uniforms = {}; for (const r in this.uniforms) { const a = this.uniforms[r].value; a && a.isTexture ? t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[r] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[r] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[r] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[r] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[r] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[r] = { type: "m4", value: a.toArray() } : t.uniforms[r] = { value: a } } Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping; const n = {}; for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0); return Object.keys(n).length > 0 && (t.extensions = n), t } } class Ic extends Dt { constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new et, this.projectionMatrix = new et, this.projectionMatrixInverse = new et, this.coordinateSystem = gn } copy(e, t) { return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this } getWorldDirection(e) { return super.getWorldDirection(e).negate() } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(e, t) { super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone() { return new this.constructor().copy(this) } } const An = new C, bo = new fe, Ao = new fe; class Xt extends Ic { constructor(e = 50, t = 1, n = .1, r = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this } setFocalLength(e) { const t = .5 * this.getFilmHeight() / e; this.fov = ji * 2 * Math.atan(t), this.updateProjectionMatrix() } getFocalLength() { const e = Math.tan(Hi * .5 * this.fov); return .5 * this.getFilmHeight() / e } getEffectiveFOV() { return ji * 2 * Math.atan(Math.tan(Hi * .5 * this.fov) / this.zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } getViewBounds(e, t, n) { An.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(An.x, An.y).multiplyScalar(-e / An.z), An.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(An.x, An.y).multiplyScalar(-e / An.z) } getViewSize(e, t) { return this.getViewBounds(e, bo, Ao), t.subVectors(Ao, bo) } setViewOffset(e, t, n, r, s, a) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = this.near; let t = e * Math.tan(Hi * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -.5 * r; const a = this.view; if (this.view !== null && this.view.enabled) { const c = a.fullWidth, l = a.fullHeight; s += a.offsetX * r / c, t -= a.offsetY * n / l, r *= a.width / c, n *= a.height / l } const o = this.filmOffset; o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t } } const di = -90, fi = 1; class Ou extends Dt { constructor(e, t, n) { super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0; const r = new Xt(di, fi, e, t); r.layers = this.layers, this.add(r); const s = new Xt(di, fi, e, t); s.layers = this.layers, this.add(s); const a = new Xt(di, fi, e, t); a.layers = this.layers, this.add(a); const o = new Xt(di, fi, e, t); o.layers = this.layers, this.add(o); const c = new Xt(di, fi, e, t); c.layers = this.layers, this.add(c); const l = new Xt(di, fi, e, t); l.layers = this.layers, this.add(l) } updateCoordinateSystem() { const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, c] = t; for (const l of t) this.remove(l); if (e === gn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1); else if (e === Wr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1); else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e); for (const l of t) this.add(l), l.updateMatrixWorld() } update(e, t) { this.parent === null && this.updateMatrixWorld(); const { renderTarget: n, activeMipmapLevel: r } = this; this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem()); const [s, a, o, c, l, u] = this.children, h = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled; e.xr.enabled = !1; const x = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, c), e.setRenderTarget(n, 4, r), e.render(t, l), n.texture.generateMipmaps = x, e.setRenderTarget(n, 5, r), e.render(t, u), e.setRenderTarget(h, d, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0 } } class Nc extends Rt { constructor(e = [], t = Mi, n, r, s, a, o, c, l, u) { super(e, t, n, r, s, a, o, c, l, u), this.isCubeTexture = !0, this.flipY = !1 } get images() { return this.image } set images(e) { this.image = e } } class Bu extends jn {
	constructor(e = 1, t = {}) { super(e, e, t), this.isWebGLCubeRenderTarget = !0; const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n]; this.texture = new Nc(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0 } fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter; const n = {
			uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, r = new ar(5, 5, 5), s = new Sn({ name: "CubemapFromEquirect", uniforms: Ti(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Lt, blending: Pn }); s.uniforms.tEquirect.value = t; const a = new Mt(r, s), o = t.minFilter; return t.minFilter === Zn && (t.minFilter = rn), new Ou(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this
	} clear(e, t = !0, n = !0, r = !0) { const s = e.getRenderTarget(); for (let a = 0; a < 6; a++)e.setRenderTarget(this, a), e.clear(t, n, r); e.setRenderTarget(s) }
} class Bi extends Dt { constructor() { super(), this.isGroup = !0, this.type = "Group" } } const zu = { type: "move" }; class Es { constructor() { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace() { return this._hand === null && (this._hand = new Bi, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new Bi, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new C, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new C), this._targetRay } getGripSpace() { return this._grip === null && (this._grip = new Bi, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new C, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new C), this._grip } dispatchEvent(e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this } connect(e) { if (e && e.hand) { const t = this._hand; if (t) for (const n of e.hand.values()) this._getHandJoint(t, n) } return this.dispatchEvent({ type: "connected", data: e }), this } disconnect(e) { return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update(e, t, n) { let r = null, s = null, a = null; const o = this._targetRay, c = this._grip, l = this._hand; if (e && t.session.visibilityState !== "visible-blurred") { if (l && e.hand) { a = !0; for (const x of e.hand.values()) { const m = t.getJointPose(x, n), f = this._getHandJoint(l, x); m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, f.jointRadius = m.radius), f.visible = m !== null } const u = l.joints["index-finger-tip"], h = l.joints["thumb-tip"], d = u.position.distanceTo(h.position), p = .02, g = .005; l.inputState.pinching && d > p + g ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !l.inputState.pinching && d <= p - g && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1)); o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(zu))) } return o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this } _getHandJoint(e, t) { if (e.joints[t.jointName] === void 0) { const n = new Bi; n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n) } return e.joints[t.jointName] } } class Vu extends Dt { constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new xn, this.environmentIntensity = 1, this.environmentRotation = new xn, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy(e, t) { return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this } toJSON(e) { const t = super.toJSON(e); return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t } } class Hu { constructor(e, t) { this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Ea, this.updateRanges = [], this.version = 0, this.uuid = sn() } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this } copyAt(e, t, n) { e *= this.stride, n *= t.stride; for (let r = 0, s = this.stride; r < s; r++)this.array[e + r] = t.array[n + r]; return this } set(e, t = 0) { return this.array.set(e, t), this } clone(e) { e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = sn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride); return n.setUsage(this.usage), n } onUpload(e) { return this.onUploadCallback = e, this } toJSON(e) { return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = sn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride } } } const bt = new C; class Cn { constructor(e, t, n, r = !1) { this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r } get count() { return this.data.count } get array() { return this.data.array } set needsUpdate(e) { this.data.needsUpdate = e } applyMatrix4(e) { for (let t = 0, n = this.data.count; t < n; t++)bt.fromBufferAttribute(this, t), bt.applyMatrix4(e), this.setXYZ(t, bt.x, bt.y, bt.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)bt.fromBufferAttribute(this, t), bt.applyNormalMatrix(e), this.setXYZ(t, bt.x, bt.y, bt.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)bt.fromBufferAttribute(this, t), bt.transformDirection(e), this.setXYZ(t, bt.x, bt.y, bt.z); return this } getComponent(e, t) { let n = this.array[e * this.data.stride + this.offset + t]; return this.normalized && (n = qt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = qe(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this } setX(e, t) { return this.normalized && (t = qe(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this } setY(e, t) { return this.normalized && (t = qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this } setZ(e, t) { return this.normalized && (t = qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this } setW(e, t) { return this.normalized && (t = qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this } getX(e) { let t = this.data.array[e * this.data.stride + this.offset]; return this.normalized && (t = qt(t, this.array)), t } getY(e) { let t = this.data.array[e * this.data.stride + this.offset + 1]; return this.normalized && (t = qt(t, this.array)), t } getZ(e) { let t = this.data.array[e * this.data.stride + this.offset + 2]; return this.normalized && (t = qt(t, this.array)), t } getW(e) { let t = this.data.array[e * this.data.stride + this.offset + 3]; return this.normalized && (t = qt(t, this.array)), t } setXY(e, t, n) { return e = e * this.data.stride + this.offset, this.normalized && (t = qe(t, this.array), n = qe(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this } setXYZ(e, t, n, r) { return e = e * this.data.stride + this.offset, this.normalized && (t = qe(t, this.array), n = qe(n, this.array), r = qe(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this } setXYZW(e, t, n, r, s) { return e = e * this.data.stride + this.offset, this.normalized && (t = qe(t, this.array), n = qe(n, this.array), r = qe(r, this.array), s = qe(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = s, this } clone(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const r = n * this.data.stride + this.offset; for (let s = 0; s < this.itemSize; s++)t.push(this.data.array[r + s]) } return new $t(new this.array.constructor(t), this.itemSize, this.normalized) } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Cn(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized) } toJSON(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const r = n * this.data.stride + this.offset; for (let s = 0; s < this.itemSize; s++)t.push(this.data.array[r + s]) } return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized } } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized } } } const Ts = new C, Gu = new C, ku = new Ue; class kn { constructor(e = new C(1, 0, 0), t = 0) { this.isPlane = !0, this.normal = e, this.constant = t } set(e, t) { return this.normal.copy(e), this.constant = t, this } setComponents(e, t, n, r) { return this.normal.set(e, t, n), this.constant = r, this } setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this } setFromCoplanarPoints(e, t, n) { const r = Ts.subVectors(n, t).cross(Gu.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(r, e), this } copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this } normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this } negate() { return this.constant *= -1, this.normal.negate(), this } distanceToPoint(e) { return this.normal.dot(e) + this.constant } distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius } projectPoint(e, t) { return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e)) } intersectLine(e, t) { const n = e.delta(Ts), r = this.normal.dot(n); if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null; const s = -(e.start.dot(this.normal) + this.constant) / r; return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s) } intersectsLine(e) { const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0 } intersectsBox(e) { return e.intersectsPlane(this) } intersectsSphere(e) { return e.intersectsPlane(this) } coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4(e, t) { const n = t || ku.getNormalMatrix(e), r = this.coplanarPoint(Ts).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize(); return this.constant = -r.dot(s), this } translate(e) { return this.constant -= e.dot(this.normal), this } equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant } clone() { return new this.constructor().copy(this) } } const Vn = new sr, Wu = new fe(.5, .5), Ar = new C; class Fc { constructor(e = new kn, t = new kn, n = new kn, r = new kn, s = new kn, a = new kn) { this.planes = [e, t, n, r, s, a] } set(e, t, n, r, s, a) { const o = this.planes; return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this } copy(e) { const t = this.planes; for (let n = 0; n < 6; n++)t[n].copy(e.planes[n]); return this } setFromProjectionMatrix(e, t = gn) { const n = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], c = r[3], l = r[4], u = r[5], h = r[6], d = r[7], p = r[8], g = r[9], x = r[10], m = r[11], f = r[12], b = r[13], E = r[14], S = r[15]; if (n[0].setComponents(c - s, d - l, m - p, S - f).normalize(), n[1].setComponents(c + s, d + l, m + p, S + f).normalize(), n[2].setComponents(c + a, d + u, m + g, S + b).normalize(), n[3].setComponents(c - a, d - u, m - g, S - b).normalize(), n[4].setComponents(c - o, d - h, m - x, S - E).normalize(), t === gn) n[5].setComponents(c + o, d + h, m + x, S + E).normalize(); else if (t === Wr) n[5].setComponents(o, h, x, E).normalize(); else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t); return this } intersectsObject(e) { if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld); else { const t = e.geometry; t.boundingSphere === null && t.computeBoundingSphere(), Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld) } return this.intersectsSphere(Vn) } intersectsSprite(e) { Vn.center.set(0, 0, 0); const t = Wu.distanceTo(e.center); return Vn.radius = .7071067811865476 + t, Vn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Vn) } intersectsSphere(e) { const t = this.planes, n = e.center, r = -e.radius; for (let s = 0; s < 6; s++)if (t[s].distanceToPoint(n) < r) return !1; return !0 } intersectsBox(e) { const t = this.planes; for (let n = 0; n < 6; n++) { const r = t[n]; if (Ar.x = r.normal.x > 0 ? e.max.x : e.min.x, Ar.y = r.normal.y > 0 ? e.max.y : e.min.y, Ar.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Ar) < 0) return !1 } return !0 } containsPoint(e) { const t = this.planes; for (let n = 0; n < 6; n++)if (t[n].distanceToPoint(e) < 0) return !1; return !0 } clone() { return new this.constructor().copy(this) } } class Oc extends Rt { constructor(e, t, n = $n, r, s, a, o = Jt, c = Jt, l, u = Ji, h = 1) { if (u !== Ji && u !== $i) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); const d = { width: e, height: t, depth: h }; super(d, r, s, a, o, c, u, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null } copy(e) { return super.copy(e), this.source = new za(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this } toJSON(e) { const t = super.toJSON(e); return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t } } class Xr extends jt { constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) { super(), this.type = "CircleGeometry", this.parameters = { radius: e, segments: t, thetaStart: n, thetaLength: r }, t = Math.max(3, t); const s = [], a = [], o = [], c = [], l = new C, u = new fe; a.push(0, 0, 0), o.push(0, 0, 1), c.push(.5, .5); for (let h = 0, d = 3; h <= t; h++, d += 3) { const p = n + h / t * r; l.x = e * Math.cos(p), l.y = e * Math.sin(p), a.push(l.x, l.y, l.z), o.push(0, 0, 1), u.x = (a[d] / e + 1) / 2, u.y = (a[d + 1] / e + 1) / 2, c.push(u.x, u.y) } for (let h = 1; h <= t; h++)s.push(h, h + 1, 0); this.setIndex(s), this.setAttribute("position", new yt(a, 3)), this.setAttribute("normal", new yt(o, 3)), this.setAttribute("uv", new yt(c, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new Xr(e.radius, e.segments, e.thetaStart, e.thetaLength) } } class an { constructor() { this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null } getPoint() { console.warn("THREE.Curve: .getPoint() not implemented.") } getPointAt(e, t) { const n = this.getUtoTmapping(e); return this.getPoint(n, t) } getPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPoint(n / e)); return t } getSpacedPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPointAt(n / e)); return t } getLength() { const e = this.getLengths(); return e[e.length - 1] } getLengths(e = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths; this.needsUpdate = !1; const t = []; let n, r = this.getPoint(0), s = 0; t.push(0); for (let a = 1; a <= e; a++)n = this.getPoint(a / e), s += n.distanceTo(r), t.push(s), r = n; return this.cacheArcLengths = t, t } updateArcLengths() { this.needsUpdate = !0, this.getLengths() } getUtoTmapping(e, t = null) { const n = this.getLengths(); let r = 0; const s = n.length; let a; t ? a = t : a = e * n[s - 1]; let o = 0, c = s - 1, l; for (; o <= c;)if (r = Math.floor(o + (c - o) / 2), l = n[r] - a, l < 0) o = r + 1; else if (l > 0) c = r - 1; else { c = r; break } if (r = c, n[r] === a) return r / (s - 1); const u = n[r], d = n[r + 1] - u, p = (a - u) / d; return (r + p) / (s - 1) } getTangent(e, t) { let r = e - 1e-4, s = e + 1e-4; r < 0 && (r = 0), s > 1 && (s = 1); const a = this.getPoint(r), o = this.getPoint(s), c = t || (a.isVector2 ? new fe : new C); return c.copy(o).sub(a).normalize(), c } getTangentAt(e, t) { const n = this.getUtoTmapping(e); return this.getTangent(n, t) } computeFrenetFrames(e, t = !1) { const n = new C, r = [], s = [], a = [], o = new C, c = new et; for (let p = 0; p <= e; p++) { const g = p / e; r[p] = this.getTangentAt(g, new C) } s[0] = new C, a[0] = new C; let l = Number.MAX_VALUE; const u = Math.abs(r[0].x), h = Math.abs(r[0].y), d = Math.abs(r[0].z); u <= l && (l = u, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), s[0].crossVectors(r[0], o), a[0].crossVectors(r[0], s[0]); for (let p = 1; p <= e; p++) { if (s[p] = s[p - 1].clone(), a[p] = a[p - 1].clone(), o.crossVectors(r[p - 1], r[p]), o.length() > Number.EPSILON) { o.normalize(); const g = Math.acos(Fe(r[p - 1].dot(r[p]), -1, 1)); s[p].applyMatrix4(c.makeRotationAxis(o, g)) } a[p].crossVectors(r[p], s[p]) } if (t === !0) { let p = Math.acos(Fe(s[0].dot(s[e]), -1, 1)); p /= e, r[0].dot(o.crossVectors(s[0], s[e])) > 0 && (p = -p); for (let g = 1; g <= e; g++)s[g].applyMatrix4(c.makeRotationAxis(r[g], p * g)), a[g].crossVectors(r[g], s[g]) } return { tangents: r, normals: s, binormals: a } } clone() { return new this.constructor().copy(this) } copy(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this } toJSON() { const e = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } }; return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e } fromJSON(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this } } class Ga extends an { constructor(e = 0, t = 0, n = 1, r = 1, s = 0, a = Math.PI * 2, o = !1, c = 0) { super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = c } getPoint(e, t = new fe) { const n = t, r = Math.PI * 2; let s = this.aEndAngle - this.aStartAngle; const a = Math.abs(s) < Number.EPSILON; for (; s < 0;)s += r; for (; s > r;)s -= r; s < Number.EPSILON && (a ? s = 0 : s = r), this.aClockwise === !0 && !a && (s === r ? s = -r : s = s - r); const o = this.aStartAngle + e * s; let c = this.aX + this.xRadius * Math.cos(o), l = this.aY + this.yRadius * Math.sin(o); if (this.aRotation !== 0) { const u = Math.cos(this.aRotation), h = Math.sin(this.aRotation), d = c - this.aX, p = l - this.aY; c = d * u - p * h + this.aX, l = d * h + p * u + this.aY } return n.set(c, l) } copy(e) { return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this } toJSON() { const e = super.toJSON(); return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e } fromJSON(e) { return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this } } class Xu extends Ga { constructor(e, t, n, r, s, a) { super(e, t, n, n, r, s, a), this.isArcCurve = !0, this.type = "ArcCurve" } } function ka() { let i = 0, e = 0, t = 0, n = 0; function r(s, a, o, c) { i = s, e = o, t = -3 * s + 3 * a - 2 * o - c, n = 2 * s - 2 * a + o + c } return { initCatmullRom: function (s, a, o, c, l) { r(a, o, l * (o - s), l * (c - a)) }, initNonuniformCatmullRom: function (s, a, o, c, l, u, h) { let d = (a - s) / l - (o - s) / (l + u) + (o - a) / u, p = (o - a) / u - (c - a) / (u + h) + (c - o) / h; d *= u, p *= u, r(a, o, d, p) }, calc: function (s) { const a = s * s, o = a * s; return i + e * s + t * a + n * o } } } const wr = new C, bs = new ka, As = new ka, ws = new ka; class qu extends an { constructor(e = [], t = !1, n = "centripetal", r = .5) { super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r } getPoint(e, t = new C) { const n = t, r = this.points, s = r.length, a = (s - (this.closed ? 0 : 1)) * e; let o = Math.floor(a), c = a - o; this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : c === 0 && o === s - 1 && (o = s - 2, c = 1); let l, u; this.closed || o > 0 ? l = r[(o - 1) % s] : (wr.subVectors(r[0], r[1]).add(r[0]), l = wr); const h = r[o % s], d = r[(o + 1) % s]; if (this.closed || o + 2 < s ? u = r[(o + 2) % s] : (wr.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), u = wr), this.curveType === "centripetal" || this.curveType === "chordal") { const p = this.curveType === "chordal" ? .5 : .25; let g = Math.pow(l.distanceToSquared(h), p), x = Math.pow(h.distanceToSquared(d), p), m = Math.pow(d.distanceToSquared(u), p); x < 1e-4 && (x = 1), g < 1e-4 && (g = x), m < 1e-4 && (m = x), bs.initNonuniformCatmullRom(l.x, h.x, d.x, u.x, g, x, m), As.initNonuniformCatmullRom(l.y, h.y, d.y, u.y, g, x, m), ws.initNonuniformCatmullRom(l.z, h.z, d.z, u.z, g, x, m) } else this.curveType === "catmullrom" && (bs.initCatmullRom(l.x, h.x, d.x, u.x, this.tension), As.initCatmullRom(l.y, h.y, d.y, u.y, this.tension), ws.initCatmullRom(l.z, h.z, d.z, u.z, this.tension)); return n.set(bs.calc(c), As.calc(c), ws.calc(c)), n } copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const r = e.points[t]; this.points.push(r.clone()) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this } toJSON() { const e = super.toJSON(); e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const r = this.points[t]; e.points.push(r.toArray()) } return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e } fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const r = e.points[t]; this.points.push(new C().fromArray(r)) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this } } function wo(i, e, t, n, r) { const s = (n - e) * .5, a = (r - t) * .5, o = i * i, c = i * o; return (2 * t - 2 * n + s + a) * c + (-3 * t + 3 * n - 2 * s - a) * o + s * i + t } function Yu(i, e) { const t = 1 - i; return t * t * e } function Zu(i, e) { return 2 * (1 - i) * i * e } function Ku(i, e) { return i * i * e } function ki(i, e, t, n) { return Yu(i, e) + Zu(i, t) + Ku(i, n) } function Ju(i, e) { const t = 1 - i; return t * t * t * e } function $u(i, e) { const t = 1 - i; return 3 * t * t * i * e } function ju(i, e) { return 3 * (1 - i) * i * i * e } function Qu(i, e) { return i * i * i * e } function Wi(i, e, t, n, r) { return Ju(i, e) + $u(i, t) + ju(i, n) + Qu(i, r) } class Bc extends an { constructor(e = new fe, t = new fe, n = new fe, r = new fe) { super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r } getPoint(e, t = new fe) { const n = t, r = this.v0, s = this.v1, a = this.v2, o = this.v3; return n.set(Wi(e, r.x, s.x, a.x, o.x), Wi(e, r.y, s.y, a.y, o.y)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } } class eh extends an { constructor(e = new C, t = new C, n = new C, r = new C) { super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r } getPoint(e, t = new C) { const n = t, r = this.v0, s = this.v1, a = this.v2, o = this.v3; return n.set(Wi(e, r.x, s.x, a.x, o.x), Wi(e, r.y, s.y, a.y, o.y), Wi(e, r.z, s.z, a.z, o.z)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } } class zc extends an { constructor(e = new fe, t = new fe) { super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t } getPoint(e, t = new fe) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n } getPointAt(e, t) { return this.getPoint(e, t) } getTangent(e, t = new fe) { return t.subVectors(this.v2, this.v1).normalize() } getTangentAt(e, t) { return this.getTangent(e, t) } copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class th extends an { constructor(e = new C, t = new C) { super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t } getPoint(e, t = new C) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n } getPointAt(e, t) { return this.getPoint(e, t) } getTangent(e, t = new C) { return t.subVectors(this.v2, this.v1).normalize() } getTangentAt(e, t) { return this.getTangent(e, t) } copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class Vc extends an { constructor(e = new fe, t = new fe, n = new fe) { super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n } getPoint(e, t = new fe) { const n = t, r = this.v0, s = this.v1, a = this.v2; return n.set(ki(e, r.x, s.x, a.x), ki(e, r.y, s.y, a.y)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class nh extends an { constructor(e = new C, t = new C, n = new C) { super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n } getPoint(e, t = new C) { const n = t, r = this.v0, s = this.v1, a = this.v2; return n.set(ki(e, r.x, s.x, a.x), ki(e, r.y, s.y, a.y), ki(e, r.z, s.z, a.z)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class Hc extends an { constructor(e = []) { super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e } getPoint(e, t = new fe) { const n = t, r = this.points, s = (r.length - 1) * e, a = Math.floor(s), o = s - a, c = r[a === 0 ? a : a - 1], l = r[a], u = r[a > r.length - 2 ? r.length - 1 : a + 1], h = r[a > r.length - 3 ? r.length - 1 : a + 2]; return n.set(wo(o, c.x, l.x, u.x, h.x), wo(o, c.y, l.y, u.y, h.y)), n } copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const r = e.points[t]; this.points.push(r.clone()) } return this } toJSON() { const e = super.toJSON(); e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const r = this.points[t]; e.points.push(r.toArray()) } return e } fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const r = e.points[t]; this.points.push(new fe().fromArray(r)) } return this } } var Ro = Object.freeze({ __proto__: null, ArcCurve: Xu, CatmullRomCurve3: qu, CubicBezierCurve: Bc, CubicBezierCurve3: eh, EllipseCurve: Ga, LineCurve: zc, LineCurve3: th, QuadraticBezierCurve: Vc, QuadraticBezierCurve3: nh, SplineCurve: Hc }); class ih extends an { constructor() { super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1 } add(e) { this.curves.push(e) } closePath() { const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1); if (!e.equals(t)) { const n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3"; this.curves.push(new Ro[n](t, e)) } return this } getPoint(e, t) { const n = e * this.getLength(), r = this.getCurveLengths(); let s = 0; for (; s < r.length;) { if (r[s] >= n) { const a = r[s] - n, o = this.curves[s], c = o.getLength(), l = c === 0 ? 0 : 1 - a / c; return o.getPointAt(l, t) } s++ } return null } getLength() { const e = this.getCurveLengths(); return e[e.length - 1] } updateArcLengths() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() } getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; const e = []; let t = 0; for (let n = 0, r = this.curves.length; n < r; n++)t += this.curves[n].getLength(), e.push(t); return this.cacheLengths = e, e } getSpacedPoints(e = 40) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPoint(n / e)); return this.autoClose && t.push(t[0]), t } getPoints(e = 12) { const t = []; let n; for (let r = 0, s = this.curves; r < s.length; r++) { const a = s[r], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, c = a.getPoints(o); for (let l = 0; l < c.length; l++) { const u = c[l]; n && n.equals(u) || (t.push(u), n = u) } } return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t } copy(e) { super.copy(e), this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const r = e.curves[t]; this.curves.push(r.clone()) } return this.autoClose = e.autoClose, this } toJSON() { const e = super.toJSON(); e.autoClose = this.autoClose, e.curves = []; for (let t = 0, n = this.curves.length; t < n; t++) { const r = this.curves[t]; e.curves.push(r.toJSON()) } return e } fromJSON(e) { super.fromJSON(e), this.autoClose = e.autoClose, this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const r = e.curves[t]; this.curves.push(new Ro[r.type]().fromJSON(r)) } return this } } class Co extends ih { constructor(e) { super(), this.type = "Path", this.currentPoint = new fe, e && this.setFromPoints(e) } setFromPoints(e) { this.moveTo(e[0].x, e[0].y); for (let t = 1, n = e.length; t < n; t++)this.lineTo(e[t].x, e[t].y); return this } moveTo(e, t) { return this.currentPoint.set(e, t), this } lineTo(e, t) { const n = new zc(this.currentPoint.clone(), new fe(e, t)); return this.curves.push(n), this.currentPoint.set(e, t), this } quadraticCurveTo(e, t, n, r) { const s = new Vc(this.currentPoint.clone(), new fe(e, t), new fe(n, r)); return this.curves.push(s), this.currentPoint.set(n, r), this } bezierCurveTo(e, t, n, r, s, a) { const o = new Bc(this.currentPoint.clone(), new fe(e, t), new fe(n, r), new fe(s, a)); return this.curves.push(o), this.currentPoint.set(s, a), this } splineThru(e) { const t = [this.currentPoint.clone()].concat(e), n = new Hc(t); return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this } arc(e, t, n, r, s, a) { const o = this.currentPoint.x, c = this.currentPoint.y; return this.absarc(e + o, t + c, n, r, s, a), this } absarc(e, t, n, r, s, a) { return this.absellipse(e, t, n, n, r, s, a), this } ellipse(e, t, n, r, s, a, o, c) { const l = this.currentPoint.x, u = this.currentPoint.y; return this.absellipse(e + l, t + u, n, r, s, a, o, c), this } absellipse(e, t, n, r, s, a, o, c) { const l = new Ga(e, t, n, r, s, a, o, c); if (this.curves.length > 0) { const h = l.getPoint(0); h.equals(this.currentPoint) || this.lineTo(h.x, h.y) } this.curves.push(l); const u = l.getPoint(1); return this.currentPoint.copy(u), this } copy(e) { return super.copy(e), this.currentPoint.copy(e.currentPoint), this } toJSON() { const e = super.toJSON(); return e.currentPoint = this.currentPoint.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this } } class Ta extends Co { constructor(e) { super(e), this.uuid = sn(), this.type = "Shape", this.holes = [] } getPointsHoles(e) { const t = []; for (let n = 0, r = this.holes.length; n < r; n++)t[n] = this.holes[n].getPoints(e); return t } extractPoints(e) { return { shape: this.getPoints(e), holes: this.getPointsHoles(e) } } copy(e) { super.copy(e), this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const r = e.holes[t]; this.holes.push(r.clone()) } return this } toJSON() { const e = super.toJSON(); e.uuid = this.uuid, e.holes = []; for (let t = 0, n = this.holes.length; t < n; t++) { const r = this.holes[t]; e.holes.push(r.toJSON()) } return e } fromJSON(e) { super.fromJSON(e), this.uuid = e.uuid, this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const r = e.holes[t]; this.holes.push(new Co().fromJSON(r)) } return this } } function rh(i, e, t = 2) { const n = e && e.length, r = n ? e[0] * t : i.length; let s = Gc(i, 0, r, t, !0); const a = []; if (!s || s.next === s.prev) return a; let o, c, l; if (n && (s = lh(i, e, s, t)), i.length > 80 * t) { o = 1 / 0, c = 1 / 0; let u = -1 / 0, h = -1 / 0; for (let d = t; d < r; d += t) { const p = i[d], g = i[d + 1]; p < o && (o = p), g < c && (c = g), p > u && (u = p), g > h && (h = g) } l = Math.max(u - o, h - c), l = l !== 0 ? 32767 / l : 0 } return er(s, a, t, o, c, l, 0), a } function Gc(i, e, t, n, r) { let s; if (r === Sh(i, e, t, n) > 0) for (let a = e; a < t; a += n)s = Po(a / n | 0, i[a], i[a + 1], s); else for (let a = t - n; a >= e; a -= n)s = Po(a / n | 0, i[a], i[a + 1], s); return s && bi(s, s.next) && (nr(s), s = s.next), s } function Qn(i, e) { if (!i) return i; e || (e = i); let t = i, n; do if (n = !1, !t.steiner && (bi(t, t.next) || ot(t.prev, t, t.next) === 0)) { if (nr(t), t = e = t.prev, t === t.next) break; n = !0 } else t = t.next; while (n || t !== e); return e } function er(i, e, t, n, r, s, a) { if (!i) return; !a && s && ph(i, n, r, s); let o = i; for (; i.prev !== i.next;) { const c = i.prev, l = i.next; if (s ? ah(i, n, r, s) : sh(i)) { e.push(c.i, i.i, l.i), nr(i), i = l.next, o = l.next; continue } if (i = l, i === o) { a ? a === 1 ? (i = oh(Qn(i), e), er(i, e, t, n, r, s, 2)) : a === 2 && ch(i, e, t, n, r, s) : er(Qn(i), e, t, n, r, s, 1); break } } } function sh(i) { const e = i.prev, t = i, n = i.next; if (ot(e, t, n) >= 0) return !1; const r = e.x, s = t.x, a = n.x, o = e.y, c = t.y, l = n.y, u = Math.min(r, s, a), h = Math.min(o, c, l), d = Math.max(r, s, a), p = Math.max(o, c, l); let g = n.next; for (; g !== e;) { if (g.x >= u && g.x <= d && g.y >= h && g.y <= p && zi(r, o, s, c, a, l, g.x, g.y) && ot(g.prev, g, g.next) >= 0) return !1; g = g.next } return !0 } function ah(i, e, t, n) { const r = i.prev, s = i, a = i.next; if (ot(r, s, a) >= 0) return !1; const o = r.x, c = s.x, l = a.x, u = r.y, h = s.y, d = a.y, p = Math.min(o, c, l), g = Math.min(u, h, d), x = Math.max(o, c, l), m = Math.max(u, h, d), f = ba(p, g, e, t, n), b = ba(x, m, e, t, n); let E = i.prevZ, S = i.nextZ; for (; E && E.z >= f && S && S.z <= b;) { if (E.x >= p && E.x <= x && E.y >= g && E.y <= m && E !== r && E !== a && zi(o, u, c, h, l, d, E.x, E.y) && ot(E.prev, E, E.next) >= 0 || (E = E.prevZ, S.x >= p && S.x <= x && S.y >= g && S.y <= m && S !== r && S !== a && zi(o, u, c, h, l, d, S.x, S.y) && ot(S.prev, S, S.next) >= 0)) return !1; S = S.nextZ } for (; E && E.z >= f;) { if (E.x >= p && E.x <= x && E.y >= g && E.y <= m && E !== r && E !== a && zi(o, u, c, h, l, d, E.x, E.y) && ot(E.prev, E, E.next) >= 0) return !1; E = E.prevZ } for (; S && S.z <= b;) { if (S.x >= p && S.x <= x && S.y >= g && S.y <= m && S !== r && S !== a && zi(o, u, c, h, l, d, S.x, S.y) && ot(S.prev, S, S.next) >= 0) return !1; S = S.nextZ } return !0 } function oh(i, e) { let t = i; do { const n = t.prev, r = t.next.next; !bi(n, r) && Wc(n, t, t.next, r) && tr(n, r) && tr(r, n) && (e.push(n.i, t.i, r.i), nr(t), nr(t.next), t = i = r), t = t.next } while (t !== i); return Qn(t) } function ch(i, e, t, n, r, s) { let a = i; do { let o = a.next.next; for (; o !== a.prev;) { if (a.i !== o.i && _h(a, o)) { let c = Xc(a, o); a = Qn(a, a.next), c = Qn(c, c.next), er(a, e, t, n, r, s, 0), er(c, e, t, n, r, s, 0); return } o = o.next } a = a.next } while (a !== i) } function lh(i, e, t, n) { const r = []; for (let s = 0, a = e.length; s < a; s++) { const o = e[s] * n, c = s < a - 1 ? e[s + 1] * n : i.length, l = Gc(i, o, c, n, !1); l === l.next && (l.steiner = !0), r.push(gh(l)) } r.sort(uh); for (let s = 0; s < r.length; s++)t = hh(r[s], t); return t } function uh(i, e) { let t = i.x - e.x; if (t === 0 && (t = i.y - e.y, t === 0)) { const n = (i.next.y - i.y) / (i.next.x - i.x), r = (e.next.y - e.y) / (e.next.x - e.x); t = n - r } return t } function hh(i, e) { const t = dh(i, e); if (!t) return e; const n = Xc(t, i); return Qn(n, n.next), Qn(t, t.next) } function dh(i, e) { let t = e; const n = i.x, r = i.y; let s = -1 / 0, a; if (bi(i, t)) return t; do { if (bi(i, t.next)) return t.next; if (r <= t.y && r >= t.next.y && t.next.y !== t.y) { const h = t.x + (r - t.y) * (t.next.x - t.x) / (t.next.y - t.y); if (h <= n && h > s && (s = h, a = t.x < t.next.x ? t : t.next, h === n)) return a } t = t.next } while (t !== e); if (!a) return null; const o = a, c = a.x, l = a.y; let u = 1 / 0; t = a; do { if (n >= t.x && t.x >= c && n !== t.x && kc(r < l ? n : s, r, c, l, r < l ? s : n, r, t.x, t.y)) { const h = Math.abs(r - t.y) / (n - t.x); tr(t, i) && (h < u || h === u && (t.x > a.x || t.x === a.x && fh(a, t))) && (a = t, u = h) } t = t.next } while (t !== o); return a } function fh(i, e) { return ot(i.prev, i, e.prev) < 0 && ot(e.next, i, i.next) < 0 } function ph(i, e, t, n) { let r = i; do r.z === 0 && (r.z = ba(r.x, r.y, e, t, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next; while (r !== i); r.prevZ.nextZ = null, r.prevZ = null, mh(r) } function mh(i) { let e, t = 1; do { let n = i, r; i = null; let s = null; for (e = 0; n;) { e++; let a = n, o = 0; for (let l = 0; l < t && (o++, a = a.nextZ, !!a); l++); let c = t; for (; o > 0 || c > 0 && a;)o !== 0 && (c === 0 || !a || n.z <= a.z) ? (r = n, n = n.nextZ, o--) : (r = a, a = a.nextZ, c--), s ? s.nextZ = r : i = r, r.prevZ = s, s = r; n = a } s.nextZ = null, t *= 2 } while (e > 1); return i } function ba(i, e, t, n, r) { return i = (i - t) * r | 0, e = (e - n) * r | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, i | e << 1 } function gh(i) { let e = i, t = i; do (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next; while (e !== i); return t } function kc(i, e, t, n, r, s, a, o) { return (r - a) * (e - o) >= (i - a) * (s - o) && (i - a) * (n - o) >= (t - a) * (e - o) && (t - a) * (s - o) >= (r - a) * (n - o) } function zi(i, e, t, n, r, s, a, o) { return !(i === a && e === o) && kc(i, e, t, n, r, s, a, o) } function _h(i, e) { return i.next.i !== e.i && i.prev.i !== e.i && !vh(i, e) && (tr(i, e) && tr(e, i) && xh(i, e) && (ot(i.prev, i, e.prev) || ot(i, e.prev, e)) || bi(i, e) && ot(i.prev, i, i.next) > 0 && ot(e.prev, e, e.next) > 0) } function ot(i, e, t) { return (e.y - i.y) * (t.x - e.x) - (e.x - i.x) * (t.y - e.y) } function bi(i, e) { return i.x === e.x && i.y === e.y } function Wc(i, e, t, n) { const r = Cr(ot(i, e, t)), s = Cr(ot(i, e, n)), a = Cr(ot(t, n, i)), o = Cr(ot(t, n, e)); return !!(r !== s && a !== o || r === 0 && Rr(i, t, e) || s === 0 && Rr(i, n, e) || a === 0 && Rr(t, i, n) || o === 0 && Rr(t, e, n)) } function Rr(i, e, t) { return e.x <= Math.max(i.x, t.x) && e.x >= Math.min(i.x, t.x) && e.y <= Math.max(i.y, t.y) && e.y >= Math.min(i.y, t.y) } function Cr(i) { return i > 0 ? 1 : i < 0 ? -1 : 0 } function vh(i, e) { let t = i; do { if (t.i !== i.i && t.next.i !== i.i && t.i !== e.i && t.next.i !== e.i && Wc(t, t.next, i, e)) return !0; t = t.next } while (t !== i); return !1 } function tr(i, e) { return ot(i.prev, i, i.next) < 0 ? ot(i, e, i.next) >= 0 && ot(i, i.prev, e) >= 0 : ot(i, e, i.prev) < 0 || ot(i, i.next, e) < 0 } function xh(i, e) { let t = i, n = !1; const r = (i.x + e.x) / 2, s = (i.y + e.y) / 2; do t.y > s != t.next.y > s && t.next.y !== t.y && r < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next; while (t !== i); return n } function Xc(i, e) { const t = Aa(i.i, i.x, i.y), n = Aa(e.i, e.x, e.y), r = i.next, s = e.prev; return i.next = e, e.prev = i, t.next = r, r.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n } function Po(i, e, t, n) { const r = Aa(i, e, t); return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r } function nr(i) { i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ) } function Aa(i, e, t) { return { i, x: e, y: t, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: !1 } } function Sh(i, e, t, n) { let r = 0; for (let s = e, a = t - n; s < t; s += n)r += (i[a] - i[s]) * (i[s + 1] + i[a + 1]), a = s; return r } class Mh { static triangulate(e, t, n = 2) { return rh(e, t, n) } } class Xi { static area(e) { const t = e.length; let n = 0; for (let r = t - 1, s = 0; s < t; r = s++)n += e[r].x * e[s].y - e[s].x * e[r].y; return n * .5 } static isClockWise(e) { return Xi.area(e) < 0 } static triangulateShape(e, t) { const n = [], r = [], s = []; Lo(e), Do(n, e); let a = e.length; t.forEach(Lo); for (let c = 0; c < t.length; c++)r.push(a), a += t[c].length, Do(n, t[c]); const o = Mh.triangulate(n, r); for (let c = 0; c < o.length; c += 3)s.push(o.slice(c, c + 3)); return s } } function Lo(i) { const e = i.length; e > 2 && i[e - 1].equals(i[0]) && i.pop() } function Do(i, e) { for (let t = 0; t < e.length; t++)i.push(e[t].x), i.push(e[t].y) } class Ci extends jt { constructor(e = 1, t = 1, n = 1, r = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r }; const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, u = c + 1, h = e / o, d = t / c, p = [], g = [], x = [], m = []; for (let f = 0; f < u; f++) { const b = f * d - a; for (let E = 0; E < l; E++) { const S = E * h - s; g.push(S, -b, 0), x.push(0, 0, 1), m.push(E / o), m.push(1 - f / c) } } for (let f = 0; f < c; f++)for (let b = 0; b < o; b++) { const E = b + l * f, S = b + l * (f + 1), I = b + 1 + l * (f + 1), L = b + 1 + l * f; p.push(E, S, L), p.push(S, I, L) } this.setIndex(p), this.setAttribute("position", new yt(g, 3)), this.setAttribute("normal", new yt(x, 3)), this.setAttribute("uv", new yt(m, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new Ci(e.width, e.height, e.widthSegments, e.heightSegments) } } class qr extends jt { constructor(e = new Ta([new fe(0, .5), new fe(-.5, -.5), new fe(.5, -.5)]), t = 12) { super(), this.type = "ShapeGeometry", this.parameters = { shapes: e, curveSegments: t }; const n = [], r = [], s = [], a = []; let o = 0, c = 0; if (Array.isArray(e) === !1) l(e); else for (let u = 0; u < e.length; u++)l(e[u]), this.addGroup(o, c, u), o += c, c = 0; this.setIndex(n), this.setAttribute("position", new yt(r, 3)), this.setAttribute("normal", new yt(s, 3)), this.setAttribute("uv", new yt(a, 2)); function l(u) { const h = r.length / 3, d = u.extractPoints(t); let p = d.shape; const g = d.holes; Xi.isClockWise(p) === !1 && (p = p.reverse()); for (let m = 0, f = g.length; m < f; m++) { const b = g[m]; Xi.isClockWise(b) === !0 && (g[m] = b.reverse()) } const x = Xi.triangulateShape(p, g); for (let m = 0, f = g.length; m < f; m++) { const b = g[m]; p = p.concat(b) } for (let m = 0, f = p.length; m < f; m++) { const b = p[m]; r.push(b.x, b.y, 0), s.push(0, 0, 1), a.push(b.x, b.y) } for (let m = 0, f = x.length; m < f; m++) { const b = x[m], E = b[0] + h, S = b[1] + h, I = b[2] + h; n.push(E, S, I), c += 3 } } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } toJSON() { const e = super.toJSON(), t = this.parameters.shapes; return yh(t, e) } static fromJSON(e, t) { const n = []; for (let r = 0, s = e.shapes.length; r < s; r++) { const a = t[e.shapes[r]]; n.push(a) } return new qr(n, e.curveSegments) } } function yh(i, e) { if (e.shapes = [], Array.isArray(i)) for (let t = 0, n = i.length; t < n; t++) { const r = i[t]; e.shapes.push(r.uuid) } else e.shapes.push(i.uuid); return e } class Eh extends jt { constructor(e = null) { if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) { const t = [], n = new Set, r = new C, s = new C; if (e.index !== null) { const a = e.attributes.position, o = e.index; let c = e.groups; c.length === 0 && (c = [{ start: 0, count: o.count, materialIndex: 0 }]); for (let l = 0, u = c.length; l < u; ++l) { const h = c[l], d = h.start, p = h.count; for (let g = d, x = d + p; g < x; g += 3)for (let m = 0; m < 3; m++) { const f = o.getX(g + m), b = o.getX(g + (m + 1) % 3); r.fromBufferAttribute(a, f), s.fromBufferAttribute(a, b), Uo(r, s, n) === !0 && (t.push(r.x, r.y, r.z), t.push(s.x, s.y, s.z)) } } } else { const a = e.attributes.position; for (let o = 0, c = a.count / 3; o < c; o++)for (let l = 0; l < 3; l++) { const u = 3 * o + l, h = 3 * o + (l + 1) % 3; r.fromBufferAttribute(a, u), s.fromBufferAttribute(a, h), Uo(r, s, n) === !0 && (t.push(r.x, r.y, r.z), t.push(s.x, s.y, s.z)) } } this.setAttribute("position", new yt(t, 3)) } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } } function Uo(i, e, t) { const n = `${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`; return t.has(n) === !0 || t.has(r) === !0 ? !1 : (t.add(n), t.add(r), !0) } class Th extends jr { constructor(e) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = zl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e) } copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this } } class bh extends jr { constructor(e) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e) } copy(e) { return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } } const Rs = { enabled: !1, files: {}, add: function (i, e) { this.enabled !== !1 && (this.files[i] = e) }, get: function (i) { if (this.enabled !== !1) return this.files[i] }, remove: function (i) { delete this.files[i] }, clear: function () { this.files = {} } }; class Ah { constructor(e, t, n) { const r = this; let s = !1, a = 0, o = 0, c; const l = []; this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (u) { o++, s === !1 && r.onStart !== void 0 && r.onStart(u, a, o), s = !0 }, this.itemEnd = function (u) { a++, r.onProgress !== void 0 && r.onProgress(u, a, o), a === o && (s = !1, r.onLoad !== void 0 && r.onLoad()) }, this.itemError = function (u) { r.onError !== void 0 && r.onError(u) }, this.resolveURL = function (u) { return c ? c(u) : u }, this.setURLModifier = function (u) { return c = u, this }, this.addHandler = function (u, h) { return l.push(u, h), this }, this.removeHandler = function (u) { const h = l.indexOf(u); return h !== -1 && l.splice(h, 2), this }, this.getHandler = function (u) { for (let h = 0, d = l.length; h < d; h += 2) { const p = l[h], g = l[h + 1]; if (p.global && (p.lastIndex = 0), p.test(u)) return g } return null } } } const wh = new Ah; class Wa { constructor(e) { this.manager = e !== void 0 ? e : wh, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} } load() { } loadAsync(e, t) { const n = this; return new Promise(function (r, s) { n.load(e, r, t, s) }) } parse() { } setCrossOrigin(e) { return this.crossOrigin = e, this } setWithCredentials(e) { return this.withCredentials = e, this } setPath(e) { return this.path = e, this } setResourcePath(e) { return this.resourcePath = e, this } setRequestHeader(e) { return this.requestHeader = e, this } } Wa.DEFAULT_MATERIAL_NAME = "__DEFAULT"; const pi = new WeakMap; class Rh extends Wa { constructor(e) { super(e) } load(e, t, n, r) { this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const s = this, a = Rs.get(`image:${e}`); if (a !== void 0) { if (a.complete === !0) s.manager.itemStart(e), setTimeout(function () { t && t(a), s.manager.itemEnd(e) }, 0); else { let h = pi.get(a); h === void 0 && (h = [], pi.set(a, h)), h.push({ onLoad: t, onError: r }) } return a } const o = Qi("img"); function c() { u(), t && t(this); const h = pi.get(this) || []; for (let d = 0; d < h.length; d++) { const p = h[d]; p.onLoad && p.onLoad(this) } pi.delete(this), s.manager.itemEnd(e) } function l(h) { u(), r && r(h), Rs.remove(`image:${e}`); const d = pi.get(this) || []; for (let p = 0; p < d.length; p++) { const g = d[p]; g.onError && g.onError(h) } pi.delete(this), s.manager.itemError(e), s.manager.itemEnd(e) } function u() { o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1) } return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), Rs.add(`image:${e}`, o), s.manager.itemStart(e), o.src = e, o } } class Ch extends Wa { constructor(e) { super(e) } load(e, t, n, r) { const s = new Rt, a = new Rh(this.manager); return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function (o) { s.image = o, s.needsUpdate = !0, t !== void 0 && t(s) }, n, r), s } } class qc extends Ic { constructor(e = -1, t = 1, n = 1, r = -1, s = .1, a = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this } setViewOffset(e, t, n, r, s, a) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2; let s = n - e, a = n + e, o = r + t, c = r - t; if (this.view !== null && this.view.enabled) { const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom; s += l * this.view.offsetX, a = s + l * this.view.width, o -= u * this.view.offsetY, c = o - u * this.view.height } this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t } } class Ph extends jt { constructor() { super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0 } copy(e) { return super.copy(e), this.instanceCount = e.instanceCount, this } toJSON() { const e = super.toJSON(); return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e } } class Lh extends Xt { constructor(e = []) { super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e } } class wa extends Hu { constructor(e, t, n = 1) { super(e, t), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n } copy(e) { return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this } clone(e) { const t = super.clone(e); return t.meshPerAttribute = this.meshPerAttribute, t } toJSON(e) { const t = super.toJSON(e); return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t } } const Io = new et; class Dh { constructor(e, t, n = 0, r = 1 / 0) { this.ray = new Cc(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new Va, this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} } } set(e, t) { this.ray.set(e, t) } setFromCamera(e, t) { t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type) } setFromXRController(e) { return Io.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Io), this } intersectObject(e, t = !0, n = []) { return Ra(e, this, n, t), n.sort(No), n } intersectObjects(e, t = !0, n = []) { for (let r = 0, s = e.length; r < s; r++)Ra(e[r], this, n, t); return n.sort(No), n } } function No(i, e) { return i.distance - e.distance } function Ra(i, e, t, n) { let r = !0; if (i.layers.test(e.layers) && i.raycast(e, t) === !1 && (r = !1), r === !0 && n === !0) { const s = i.children; for (let a = 0, o = s.length; a < o; a++)Ra(s[a], e, t, !0) } } const Fo = new C, Pr = new C; class Uh { constructor(e = new C, t = new C) { this.start = e, this.end = t } set(e, t) { return this.start.copy(e), this.end.copy(t), this } copy(e) { return this.start.copy(e.start), this.end.copy(e.end), this } getCenter(e) { return e.addVectors(this.start, this.end).multiplyScalar(.5) } delta(e) { return e.subVectors(this.end, this.start) } distanceSq() { return this.start.distanceToSquared(this.end) } distance() { return this.start.distanceTo(this.end) } at(e, t) { return this.delta(t).multiplyScalar(e).add(this.start) } closestPointToPointParameter(e, t) { Fo.subVectors(e, this.start), Pr.subVectors(this.end, this.start); const n = Pr.dot(Pr); let s = Pr.dot(Fo) / n; return t && (s = Fe(s, 0, 1)), s } closestPointToPoint(e, t, n) { const r = this.closestPointToPointParameter(e, t); return this.delta(n).multiplyScalar(r).add(this.start) } applyMatrix4(e) { return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this } equals(e) { return e.start.equals(this.start) && e.end.equals(this.end) } clone() { return new this.constructor().copy(this) } } function Oo(i, e, t, n) { const r = Ih(n); switch (t) { case Mc: return i * e; case Ec: return i * e / r.components * r.byteLength; case Na: return i * e / r.components * r.byteLength; case Tc: return i * e * 2 / r.components * r.byteLength; case Fa: return i * e * 2 / r.components * r.byteLength; case yc: return i * e * 3 / r.components * r.byteLength; case Zt: return i * e * 4 / r.components * r.byteLength; case Oa: return i * e * 4 / r.components * r.byteLength; case Or: case Br: return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8; case zr: case Vr: return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16; case js: case ea: return Math.max(i, 16) * Math.max(e, 8) / 4; case $s: case Qs: return Math.max(i, 8) * Math.max(e, 8) / 2; case ta: case na: return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8; case ia: return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16; case ra: return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16; case sa: return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16; case aa: return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16; case oa: return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16; case ca: return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16; case la: return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16; case ua: return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16; case ha: return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16; case da: return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16; case fa: return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16; case pa: return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16; case ma: return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16; case ga: return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16; case _a: return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16; case Hr: case va: case xa: return Math.ceil(i / 4) * Math.ceil(e / 4) * 16; case bc: case Sa: return Math.ceil(i / 4) * Math.ceil(e / 4) * 8; case Ma: case ya: return Math.ceil(i / 4) * Math.ceil(e / 4) * 16 }throw new Error(`Unable to determine texture byte length for ${t} format.`) } function Ih(i) { switch (i) { case vn: case vc: return { byteLength: 1, components: 1 }; case Zi: case xc: case rr: return { byteLength: 2, components: 1 }; case Ua: case Ia: return { byteLength: 2, components: 4 }; case $n: case Da: case mn: return { byteLength: 4, components: 1 }; case Sc: return { byteLength: 4, components: 3 } }throw new Error(`Unknown texture type ${i}.`) } typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: La } })); typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = La);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yc() { let i = null, e = !1, t = null, n = null; function r(s, a) { t(s, a), n = i.requestAnimationFrame(r) } return { start: function () { e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0) }, stop: function () { i.cancelAnimationFrame(n), e = !1 }, setAnimationLoop: function (s) { t = s }, setContext: function (s) { i = s } } } function Nh(i) { const e = new WeakMap; function t(o, c) { const l = o.array, u = o.usage, h = l.byteLength, d = i.createBuffer(); i.bindBuffer(c, d), i.bufferData(c, l, u), o.onUploadCallback(); let p; if (l instanceof Float32Array) p = i.FLOAT; else if (typeof Float16Array < "u" && l instanceof Float16Array) p = i.HALF_FLOAT; else if (l instanceof Uint16Array) o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT; else if (l instanceof Int16Array) p = i.SHORT; else if (l instanceof Uint32Array) p = i.UNSIGNED_INT; else if (l instanceof Int32Array) p = i.INT; else if (l instanceof Int8Array) p = i.BYTE; else if (l instanceof Uint8Array) p = i.UNSIGNED_BYTE; else if (l instanceof Uint8ClampedArray) p = i.UNSIGNED_BYTE; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l); return { buffer: d, type: p, bytesPerElement: l.BYTES_PER_ELEMENT, version: o.version, size: h } } function n(o, c, l) { const u = c.array, h = c.updateRanges; if (i.bindBuffer(l, o), h.length === 0) i.bufferSubData(l, 0, u); else { h.sort((p, g) => p.start - g.start); let d = 0; for (let p = 1; p < h.length; p++) { const g = h[d], x = h[p]; x.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, x.start + x.count - g.start) : (++d, h[d] = x) } h.length = d + 1; for (let p = 0, g = h.length; p < g; p++) { const x = h[p]; i.bufferSubData(l, x.start * u.BYTES_PER_ELEMENT, u, x.start, x.count) } c.clearUpdateRanges() } c.onUploadCallback() } function r(o) { return o.isInterleavedBufferAttribute && (o = o.data), e.get(o) } function s(o) { o.isInterleavedBufferAttribute && (o = o.data); const c = e.get(o); c && (i.deleteBuffer(c.buffer), e.delete(o)) } function a(o, c) { if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) { const u = e.get(o); (!u || u.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version }); return } const l = e.get(o); if (l === void 0) e.set(o, t(o, c)); else if (l.version < o.version) { if (l.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."); n(l.buffer, o, c), l.version = o.version } } return { get: r, remove: s, update: a } } var Fh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Oh = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Bh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, zh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Vh = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Hh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Gh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, kh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Wh = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Xh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, qh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Yh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Zh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Kh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Jh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, $h = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, jh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Qh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ed = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, td = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, nd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, id = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, rd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, sd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, ad = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, od = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, cd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, ld = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, ud = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, hd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, dd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", fd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, pd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, md = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, gd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, _d = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, vd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, xd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Sd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Md = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, yd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Ed = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Td = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, bd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Ad = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, wd = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Rd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Cd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Pd = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ld = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Dd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Ud = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Id = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Nd = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Fd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Od = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Bd = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, zd = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Vd = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Hd = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Gd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, kd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Wd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Xd = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, qd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Yd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Zd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Kd = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Jd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, $d = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, jd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Qd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, ef = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, tf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, nf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, rf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, sf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, af = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, of = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, cf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, lf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, uf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, hf = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, df = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, ff = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, pf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, mf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, gf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, _f = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, vf = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, xf = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Sf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Mf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, yf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ef = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Tf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, bf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Af = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, wf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Rf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Cf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Pf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Lf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Df = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Uf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, If = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Nf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`; const Ff = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Of = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Bf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, zf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Vf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Hf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Gf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, kf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Wf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Xf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, qf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Yf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Zf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Kf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Jf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, $f = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, jf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Qf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ep = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, tp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, np = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, ip = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, rp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, sp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ap = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, op = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, cp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, lp = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, up = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, hp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, dp = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, pp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, mp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ne = { alphahash_fragment: Fh, alphahash_pars_fragment: Oh, alphamap_fragment: Bh, alphamap_pars_fragment: zh, alphatest_fragment: Vh, alphatest_pars_fragment: Hh, aomap_fragment: Gh, aomap_pars_fragment: kh, batching_pars_vertex: Wh, batching_vertex: Xh, begin_vertex: qh, beginnormal_vertex: Yh, bsdfs: Zh, iridescence_fragment: Kh, bumpmap_pars_fragment: Jh, clipping_planes_fragment: $h, clipping_planes_pars_fragment: jh, clipping_planes_pars_vertex: Qh, clipping_planes_vertex: ed, color_fragment: td, color_pars_fragment: nd, color_pars_vertex: id, color_vertex: rd, common: sd, cube_uv_reflection_fragment: ad, defaultnormal_vertex: od, displacementmap_pars_vertex: cd, displacementmap_vertex: ld, emissivemap_fragment: ud, emissivemap_pars_fragment: hd, colorspace_fragment: dd, colorspace_pars_fragment: fd, envmap_fragment: pd, envmap_common_pars_fragment: md, envmap_pars_fragment: gd, envmap_pars_vertex: _d, envmap_physical_pars_fragment: Rd, envmap_vertex: vd, fog_vertex: xd, fog_pars_vertex: Sd, fog_fragment: Md, fog_pars_fragment: yd, gradientmap_pars_fragment: Ed, lightmap_pars_fragment: Td, lights_lambert_fragment: bd, lights_lambert_pars_fragment: Ad, lights_pars_begin: wd, lights_toon_fragment: Cd, lights_toon_pars_fragment: Pd, lights_phong_fragment: Ld, lights_phong_pars_fragment: Dd, lights_physical_fragment: Ud, lights_physical_pars_fragment: Id, lights_fragment_begin: Nd, lights_fragment_maps: Fd, lights_fragment_end: Od, logdepthbuf_fragment: Bd, logdepthbuf_pars_fragment: zd, logdepthbuf_pars_vertex: Vd, logdepthbuf_vertex: Hd, map_fragment: Gd, map_pars_fragment: kd, map_particle_fragment: Wd, map_particle_pars_fragment: Xd, metalnessmap_fragment: qd, metalnessmap_pars_fragment: Yd, morphinstance_vertex: Zd, morphcolor_vertex: Kd, morphnormal_vertex: Jd, morphtarget_pars_vertex: $d, morphtarget_vertex: jd, normal_fragment_begin: Qd, normal_fragment_maps: ef, normal_pars_fragment: tf, normal_pars_vertex: nf, normal_vertex: rf, normalmap_pars_fragment: sf, clearcoat_normal_fragment_begin: af, clearcoat_normal_fragment_maps: of, clearcoat_pars_fragment: cf, iridescence_pars_fragment: lf, opaque_fragment: uf, packing: hf, premultiplied_alpha_fragment: df, project_vertex: ff, dithering_fragment: pf, dithering_pars_fragment: mf, roughnessmap_fragment: gf, roughnessmap_pars_fragment: _f, shadowmap_pars_fragment: vf, shadowmap_pars_vertex: xf, shadowmap_vertex: Sf, shadowmask_pars_fragment: Mf, skinbase_vertex: yf, skinning_pars_vertex: Ef, skinning_vertex: Tf, skinnormal_vertex: bf, specularmap_fragment: Af, specularmap_pars_fragment: wf, tonemapping_fragment: Rf, tonemapping_pars_fragment: Cf, transmission_fragment: Pf, transmission_pars_fragment: Lf, uv_pars_fragment: Df, uv_pars_vertex: Uf, uv_vertex: If, worldpos_vertex: Nf, background_vert: Ff, background_frag: Of, backgroundCube_vert: Bf, backgroundCube_frag: zf, cube_vert: Vf, cube_frag: Hf, depth_vert: Gf, depth_frag: kf, distanceRGBA_vert: Wf, distanceRGBA_frag: Xf, equirect_vert: qf, equirect_frag: Yf, linedashed_vert: Zf, linedashed_frag: Kf, meshbasic_vert: Jf, meshbasic_frag: $f, meshlambert_vert: jf, meshlambert_frag: Qf, meshmatcap_vert: ep, meshmatcap_frag: tp, meshnormal_vert: np, meshnormal_frag: ip, meshphong_vert: rp, meshphong_frag: sp, meshphysical_vert: ap, meshphysical_frag: op, meshtoon_vert: cp, meshtoon_frag: lp, points_vert: up, points_frag: hp, shadow_vert: dp, shadow_frag: fp, sprite_vert: pp, sprite_frag: mp }, ne = { common: { diffuse: { value: new Ye(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ue }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ue } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ue }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ue } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ue } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ue }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ue }, normalScale: { value: new fe(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ue }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ue } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ue } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ue } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ye(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ye(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue }, alphaTest: { value: 0 }, uvTransform: { value: new Ue } }, sprite: { diffuse: { value: new Ye(16777215) }, opacity: { value: 1 }, center: { value: new fe(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ue }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue }, alphaTest: { value: 0 } } }, Pt = { basic: { uniforms: At([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.fog]), vertexShader: Ne.meshbasic_vert, fragmentShader: Ne.meshbasic_frag }, lambert: { uniforms: At([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights, { emissive: { value: new Ye(0) } }]), vertexShader: Ne.meshlambert_vert, fragmentShader: Ne.meshlambert_frag }, phong: { uniforms: At([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights, { emissive: { value: new Ye(0) }, specular: { value: new Ye(1118481) }, shininess: { value: 30 } }]), vertexShader: Ne.meshphong_vert, fragmentShader: Ne.meshphong_frag }, standard: { uniforms: At([ne.common, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.roughnessmap, ne.metalnessmap, ne.fog, ne.lights, { emissive: { value: new Ye(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ne.meshphysical_vert, fragmentShader: Ne.meshphysical_frag }, toon: { uniforms: At([ne.common, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.gradientmap, ne.fog, ne.lights, { emissive: { value: new Ye(0) } }]), vertexShader: Ne.meshtoon_vert, fragmentShader: Ne.meshtoon_frag }, matcap: { uniforms: At([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, { matcap: { value: null } }]), vertexShader: Ne.meshmatcap_vert, fragmentShader: Ne.meshmatcap_frag }, points: { uniforms: At([ne.points, ne.fog]), vertexShader: Ne.points_vert, fragmentShader: Ne.points_frag }, dashed: { uniforms: At([ne.common, ne.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ne.linedashed_vert, fragmentShader: Ne.linedashed_frag }, depth: { uniforms: At([ne.common, ne.displacementmap]), vertexShader: Ne.depth_vert, fragmentShader: Ne.depth_frag }, normal: { uniforms: At([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ne.meshnormal_vert, fragmentShader: Ne.meshnormal_frag }, sprite: { uniforms: At([ne.sprite, ne.fog]), vertexShader: Ne.sprite_vert, fragmentShader: Ne.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ue }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ne.background_vert, fragmentShader: Ne.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ue } }, vertexShader: Ne.backgroundCube_vert, fragmentShader: Ne.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ne.cube_vert, fragmentShader: Ne.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ne.equirect_vert, fragmentShader: Ne.equirect_frag }, distanceRGBA: { uniforms: At([ne.common, ne.displacementmap, { referencePosition: { value: new C }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ne.distanceRGBA_vert, fragmentShader: Ne.distanceRGBA_frag }, shadow: { uniforms: At([ne.lights, ne.fog, { color: { value: new Ye(0) }, opacity: { value: 1 } }]), vertexShader: Ne.shadow_vert, fragmentShader: Ne.shadow_frag } }; Pt.physical = { uniforms: At([Pt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ue }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ue }, clearcoatNormalScale: { value: new fe(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ue }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ue }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ue }, sheen: { value: 0 }, sheenColor: { value: new Ye(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ue }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ue }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ue }, transmissionSamplerSize: { value: new fe }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ue }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ye(0) }, specularColor: { value: new Ye(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ue }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ue }, anisotropyVector: { value: new fe }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ue } }]), vertexShader: Ne.meshphysical_vert, fragmentShader: Ne.meshphysical_frag }; const Lr = { r: 0, b: 0, g: 0 }, Hn = new xn, gp = new et; function _p(i, e, t, n, r, s, a) { const o = new Ye(0); let c = s === !0 ? 0 : 1, l, u, h = null, d = 0, p = null; function g(E) { let S = E.isScene === !0 ? E.background : null; return S && S.isTexture && (S = (E.backgroundBlurriness > 0 ? t : e).get(S)), S } function x(E) { let S = !1; const I = g(E); I === null ? f(o, c) : I && I.isColor && (f(I, 1), S = !0); const L = i.xr.getEnvironmentBlendMode(); L === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : L === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || S) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil)) } function m(E, S) { const I = g(S); I && (I.isCubeTexture || I.mapping === $r) ? (u === void 0 && (u = new Mt(new ar(1, 1, 1), new Sn({ name: "BackgroundCubeMaterial", uniforms: Ti(Pt.backgroundCube.uniforms), vertexShader: Pt.backgroundCube.vertexShader, fragmentShader: Pt.backgroundCube.fragmentShader, side: Lt, depthTest: !1, depthWrite: !1, fog: !1, allowOverride: !1 })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function (L, R, N) { this.matrixWorld.copyPosition(N.matrixWorld) }, Object.defineProperty(u.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), r.update(u)), Hn.copy(S.backgroundRotation), Hn.x *= -1, Hn.y *= -1, Hn.z *= -1, I.isCubeTexture && I.isRenderTargetTexture === !1 && (Hn.y *= -1, Hn.z *= -1), u.material.uniforms.envMap.value = I, u.material.uniforms.flipEnvMap.value = I.isCubeTexture && I.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(gp.makeRotationFromEuler(Hn)), u.material.toneMapped = He.getTransfer(I.colorSpace) !== Ke, (h !== I || d !== I.version || p !== i.toneMapping) && (u.material.needsUpdate = !0, h = I, d = I.version, p = i.toneMapping), u.layers.enableAll(), E.unshift(u, u.geometry, u.material, 0, 0, null)) : I && I.isTexture && (l === void 0 && (l = new Mt(new Ci(2, 2), new Sn({ name: "BackgroundMaterial", uniforms: Ti(Pt.background.uniforms), vertexShader: Pt.background.vertexShader, fragmentShader: Pt.background.fragmentShader, side: Dn, depthTest: !1, depthWrite: !1, fog: !1, allowOverride: !1 })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function () { return this.uniforms.t2D.value } }), r.update(l)), l.material.uniforms.t2D.value = I, l.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, l.material.toneMapped = He.getTransfer(I.colorSpace) !== Ke, I.matrixAutoUpdate === !0 && I.updateMatrix(), l.material.uniforms.uvTransform.value.copy(I.matrix), (h !== I || d !== I.version || p !== i.toneMapping) && (l.material.needsUpdate = !0, h = I, d = I.version, p = i.toneMapping), l.layers.enableAll(), E.unshift(l, l.geometry, l.material, 0, 0, null)) } function f(E, S) { E.getRGB(Lr, Uc(i)), n.buffers.color.setClear(Lr.r, Lr.g, Lr.b, S, a) } function b() { u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0) } return { getClearColor: function () { return o }, setClearColor: function (E, S = 1) { o.set(E), c = S, f(o, c) }, getClearAlpha: function () { return c }, setClearAlpha: function (E) { c = E, f(o, c) }, render: x, addToRenderList: m, dispose: b } } function vp(i, e) { const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = d(null); let s = r, a = !1; function o(M, P, k, z, Z) { let K = !1; const X = h(z, k, P); s !== X && (s = X, l(s.object)), K = p(M, z, k, Z), K && g(M, z, k, Z), Z !== null && e.update(Z, i.ELEMENT_ARRAY_BUFFER), (K || a) && (a = !1, S(M, P, k, z), Z !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(Z).buffer)) } function c() { return i.createVertexArray() } function l(M) { return i.bindVertexArray(M) } function u(M) { return i.deleteVertexArray(M) } function h(M, P, k) { const z = k.wireframe === !0; let Z = n[M.id]; Z === void 0 && (Z = {}, n[M.id] = Z); let K = Z[P.id]; K === void 0 && (K = {}, Z[P.id] = K); let X = K[z]; return X === void 0 && (X = d(c()), K[z] = X), X } function d(M) { const P = [], k = [], z = []; for (let Z = 0; Z < t; Z++)P[Z] = 0, k[Z] = 0, z[Z] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: P, enabledAttributes: k, attributeDivisors: z, object: M, attributes: {}, index: null } } function p(M, P, k, z) { const Z = s.attributes, K = P.attributes; let X = 0; const $ = k.getAttributes(); for (const V in $) if ($[V].location >= 0) { const he = Z[V]; let ye = K[V]; if (ye === void 0 && (V === "instanceMatrix" && M.instanceMatrix && (ye = M.instanceMatrix), V === "instanceColor" && M.instanceColor && (ye = M.instanceColor)), he === void 0 || he.attribute !== ye || ye && he.data !== ye.data) return !0; X++ } return s.attributesNum !== X || s.index !== z } function g(M, P, k, z) { const Z = {}, K = P.attributes; let X = 0; const $ = k.getAttributes(); for (const V in $) if ($[V].location >= 0) { let he = K[V]; he === void 0 && (V === "instanceMatrix" && M.instanceMatrix && (he = M.instanceMatrix), V === "instanceColor" && M.instanceColor && (he = M.instanceColor)); const ye = {}; ye.attribute = he, he && he.data && (ye.data = he.data), Z[V] = ye, X++ } s.attributes = Z, s.attributesNum = X, s.index = z } function x() { const M = s.newAttributes; for (let P = 0, k = M.length; P < k; P++)M[P] = 0 } function m(M) { f(M, 0) } function f(M, P) { const k = s.newAttributes, z = s.enabledAttributes, Z = s.attributeDivisors; k[M] = 1, z[M] === 0 && (i.enableVertexAttribArray(M), z[M] = 1), Z[M] !== P && (i.vertexAttribDivisor(M, P), Z[M] = P) } function b() { const M = s.newAttributes, P = s.enabledAttributes; for (let k = 0, z = P.length; k < z; k++)P[k] !== M[k] && (i.disableVertexAttribArray(k), P[k] = 0) } function E(M, P, k, z, Z, K, X) { X === !0 ? i.vertexAttribIPointer(M, P, k, Z, K) : i.vertexAttribPointer(M, P, k, z, Z, K) } function S(M, P, k, z) { x(); const Z = z.attributes, K = k.getAttributes(), X = P.defaultAttributeValues; for (const $ in K) { const V = K[$]; if (V.location >= 0) { let oe = Z[$]; if (oe === void 0 && ($ === "instanceMatrix" && M.instanceMatrix && (oe = M.instanceMatrix), $ === "instanceColor" && M.instanceColor && (oe = M.instanceColor)), oe !== void 0) { const he = oe.normalized, ye = oe.itemSize, Oe = e.get(oe); if (Oe === void 0) continue; const Je = Oe.buffer, W = Oe.type, te = Oe.bytesPerElement, Se = W === i.INT || W === i.UNSIGNED_INT || oe.gpuType === Da; if (oe.isInterleavedBufferAttribute) { const ce = oe.data, Me = ce.stride, Ge = oe.offset; if (ce.isInstancedInterleavedBuffer) { for (let Re = 0; Re < V.locationSize; Re++)f(V.location + Re, ce.meshPerAttribute); M.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = ce.meshPerAttribute * ce.count) } else for (let Re = 0; Re < V.locationSize; Re++)m(V.location + Re); i.bindBuffer(i.ARRAY_BUFFER, Je); for (let Re = 0; Re < V.locationSize; Re++)E(V.location + Re, ye / V.locationSize, W, he, Me * te, (Ge + ye / V.locationSize * Re) * te, Se) } else { if (oe.isInstancedBufferAttribute) { for (let ce = 0; ce < V.locationSize; ce++)f(V.location + ce, oe.meshPerAttribute); M.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = oe.meshPerAttribute * oe.count) } else for (let ce = 0; ce < V.locationSize; ce++)m(V.location + ce); i.bindBuffer(i.ARRAY_BUFFER, Je); for (let ce = 0; ce < V.locationSize; ce++)E(V.location + ce, ye / V.locationSize, W, he, ye * te, ye / V.locationSize * ce * te, Se) } } else if (X !== void 0) { const he = X[$]; if (he !== void 0) switch (he.length) { case 2: i.vertexAttrib2fv(V.location, he); break; case 3: i.vertexAttrib3fv(V.location, he); break; case 4: i.vertexAttrib4fv(V.location, he); break; default: i.vertexAttrib1fv(V.location, he) } } } } b() } function I() { N(); for (const M in n) { const P = n[M]; for (const k in P) { const z = P[k]; for (const Z in z) u(z[Z].object), delete z[Z]; delete P[k] } delete n[M] } } function L(M) { if (n[M.id] === void 0) return; const P = n[M.id]; for (const k in P) { const z = P[k]; for (const Z in z) u(z[Z].object), delete z[Z]; delete P[k] } delete n[M.id] } function R(M) { for (const P in n) { const k = n[P]; if (k[M.id] === void 0) continue; const z = k[M.id]; for (const Z in z) u(z[Z].object), delete z[Z]; delete k[M.id] } } function N() { y(), a = !0, s !== r && (s = r, l(s.object)) } function y() { r.geometry = null, r.program = null, r.wireframe = !1 } return { setup: o, reset: N, resetDefaultState: y, dispose: I, releaseStatesOfGeometry: L, releaseStatesOfProgram: R, initAttributes: x, enableAttribute: m, disableUnusedAttributes: b } } function xp(i, e, t) { let n; function r(l) { n = l } function s(l, u) { i.drawArrays(n, l, u), t.update(u, n, 1) } function a(l, u, h) { h !== 0 && (i.drawArraysInstanced(n, l, u, h), t.update(u, n, h)) } function o(l, u, h) { if (h === 0) return; e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, h); let p = 0; for (let g = 0; g < h; g++)p += u[g]; t.update(p, n, 1) } function c(l, u, h, d) { if (h === 0) return; const p = e.get("WEBGL_multi_draw"); if (p === null) for (let g = 0; g < l.length; g++)a(l[g], u[g], d[g]); else { p.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, d, 0, h); let g = 0; for (let x = 0; x < h; x++)g += u[x] * d[x]; t.update(g, n, 1) } } this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c } function Sp(i, e, t, n) { let r; function s() { if (r !== void 0) return r; if (e.has("EXT_texture_filter_anisotropic") === !0) { const R = e.get("EXT_texture_filter_anisotropic"); r = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else r = 0; return r } function a(R) { return !(R !== Zt && n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)) } function o(R) { const N = R === rr && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float")); return !(R !== vn && n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && R !== mn && !N) } function c(R) { if (R === "highp") { if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp"; R = "mediump" } return R === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } let l = t.precision !== void 0 ? t.precision : "highp"; const u = c(l); u !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", u, "instead."), l = u); const h = t.logarithmicDepthBuffer === !0, d = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"), p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), f = i.getParameter(i.MAX_VERTEX_ATTRIBS), b = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), E = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), I = g > 0, L = i.getParameter(i.MAX_SAMPLES); return { isWebGL2: !0, getMaxAnisotropy: s, getMaxPrecision: c, textureFormatReadable: a, textureTypeReadable: o, precision: l, logarithmicDepthBuffer: h, reverseDepthBuffer: d, maxTextures: p, maxVertexTextures: g, maxTextureSize: x, maxCubemapSize: m, maxAttributes: f, maxVertexUniforms: b, maxVaryings: E, maxFragmentUniforms: S, vertexTextures: I, maxSamples: L } } function Mp(i) { const e = this; let t = null, n = 0, r = !1, s = !1; const a = new kn, o = new Ue, c = { value: null, needsUpdate: !1 }; this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function (h, d) { const p = h.length !== 0 || d || n !== 0 || r; return r = d, n = h.length, p }, this.beginShadows = function () { s = !0, u(null) }, this.endShadows = function () { s = !1 }, this.setGlobalState = function (h, d) { t = u(h, d, 0) }, this.setState = function (h, d, p) { const g = h.clippingPlanes, x = h.clipIntersection, m = h.clipShadows, f = i.get(h); if (!r || g === null || g.length === 0 || s && !m) s ? u(null) : l(); else { const b = s ? 0 : n, E = b * 4; let S = f.clippingState || null; c.value = S, S = u(g, d, E, p); for (let I = 0; I !== E; ++I)S[I] = t[I]; f.clippingState = S, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += b } }; function l() { c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0 } function u(h, d, p, g) { const x = h !== null ? h.length : 0; let m = null; if (x !== 0) { if (m = c.value, g !== !0 || m === null) { const f = p + x * 4, b = d.matrixWorldInverse; o.getNormalMatrix(b), (m === null || m.length < f) && (m = new Float32Array(f)); for (let E = 0, S = p; E !== x; ++E, S += 4)a.copy(h[E]).applyMatrix4(b, o), a.normal.toArray(m, S), m[S + 3] = a.constant } c.value = m, c.needsUpdate = !0 } return e.numPlanes = x, e.numIntersection = 0, m } } function yp(i) { let e = new WeakMap; function t(a, o) { return o === Ys ? a.mapping = Mi : o === Zs && (a.mapping = yi), a } function n(a) { if (a && a.isTexture) { const o = a.mapping; if (o === Ys || o === Zs) if (e.has(a)) { const c = e.get(a).texture; return t(c, a.mapping) } else { const c = a.image; if (c && c.height > 0) { const l = new Bu(c.height); return l.fromEquirectangularTexture(i, a), e.set(a, l), a.addEventListener("dispose", r), t(l.texture, a.mapping) } else return null } } return a } function r(a) { const o = a.target; o.removeEventListener("dispose", r); const c = e.get(o); c !== void 0 && (e.delete(o), c.dispose()) } function s() { e = new WeakMap } return { get: n, dispose: s } } const gi = 4, Bo = [.125, .215, .35, .446, .526, .582], qn = 20, Cs = new qc, zo = new Ye; let Ps = null, Ls = 0, Ds = 0, Us = !1; const Wn = (1 + Math.sqrt(5)) / 2, mi = 1 / Wn, Vo = [new C(-Wn, mi, 0), new C(Wn, mi, 0), new C(-mi, 0, Wn), new C(mi, 0, Wn), new C(0, Wn, -mi), new C(0, Wn, mi), new C(-1, 1, -1), new C(1, 1, -1), new C(-1, 1, 1), new C(1, 1, 1)], Ep = new C; class Ho { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene(e, t = 0, n = .1, r = 100, s = {}) { const { size: a = 256, position: o = Ep } = s; Ps = this._renderer.getRenderTarget(), Ls = this._renderer.getActiveCubeFace(), Ds = this._renderer.getActiveMipmapLevel(), Us = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a); const c = this._allocateTargets(); return c.depthBuffer = !0, this._sceneToCubeUV(e, n, r, c, o), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c } fromEquirectangular(e, t = null) { return this._fromTexture(e, t) } fromCubemap(e, t = null) { return this._fromTexture(e, t) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = Wo(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = ko(), this._compileMaterial(this._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize(e) { this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let e = 0; e < this._lodPlanes.length; e++)this._lodPlanes[e].dispose() } _cleanup(e) { this._renderer.setRenderTarget(Ps, Ls, Ds), this._renderer.xr.enabled = Us, e.scissorTest = !1, Dr(e, 0, 0, e.width, e.height) } _fromTexture(e, t) { e.mapping === Mi || e.mapping === yi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ps = this._renderer.getRenderTarget(), Ls = this._renderer.getActiveCubeFace(), Ds = this._renderer.getActiveMipmapLevel(), Us = this._renderer.xr.enabled, this._renderer.xr.enabled = !1; const n = t || this._allocateTargets(); return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n } _allocateTargets() { const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: rn, minFilter: rn, generateMipmaps: !1, type: rr, format: Zt, colorSpace: Ei, depthBuffer: !1 }, r = Go(e, t, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Go(e, t, n); const { _lodMax: s } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Tp(s)), this._blurMaterial = bp(s, e, t) } return r } _compileMaterial(e) { const t = new Mt(this._lodPlanes[0], e); this._renderer.compile(t, Cs) } _sceneToCubeUV(e, t, n, r, s) { const c = new Xt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], h = this._renderer, d = h.autoClear, p = h.toneMapping; h.getClearColor(zo), h.toneMapping = Ln, h.autoClear = !1; const g = new Rn({ name: "PMREM.Background", side: Lt, depthWrite: !1, depthTest: !1 }), x = new Mt(new ar, g); let m = !1; const f = e.background; f ? f.isColor && (g.color.copy(f), e.background = null, m = !0) : (g.color.copy(zo), m = !0); for (let b = 0; b < 6; b++) { const E = b % 3; E === 0 ? (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + u[b], s.y, s.z)) : E === 1 ? (c.up.set(0, 0, l[b]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + u[b], s.z)) : (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + u[b])); const S = this._cubeSize; Dr(r, E * S, b > 2 ? S : 0, S, S), h.setRenderTarget(r), m && h.render(x, c), h.render(e, c) } x.geometry.dispose(), x.material.dispose(), h.toneMapping = p, h.autoClear = d, e.background = f } _textureToCubeUV(e, t) { const n = this._renderer, r = e.mapping === Mi || e.mapping === yi; r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Wo()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ko()); const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Mt(this._lodPlanes[0], s), o = s.uniforms; o.envMap.value = e; const c = this._cubeSize; Dr(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Cs) } _applyPMREM(e) { const t = this._renderer, n = t.autoClear; t.autoClear = !1; const r = this._lodPlanes.length; for (let s = 1; s < r; s++) { const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = Vo[(r - s - 1) % Vo.length]; this._blur(e, s - 1, s, a, o) } t.autoClear = n } _blur(e, t, n, r, s) { const a = this._pingPongRenderTarget; this._halfBlur(e, a, t, n, r, "latitudinal", s), this._halfBlur(a, e, n, n, r, "longitudinal", s) } _halfBlur(e, t, n, r, s, a, o) { const c = this._renderer, l = this._blurMaterial; a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const u = 3, h = new Mt(this._lodPlanes[r], l), d = l.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * qn - 1), x = s / g, m = isFinite(s) ? 1 + Math.floor(u * x) : qn; m > qn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`); const f = []; let b = 0; for (let R = 0; R < qn; ++R) { const N = R / x, y = Math.exp(-N * N / 2); f.push(y), R === 0 ? b += y : R < m && (b += 2 * y) } for (let R = 0; R < f.length; R++)f[R] = f[R] / b; d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o); const { _lodMax: E } = this; d.dTheta.value = g, d.mipInt.value = E - n; const S = this._sizeLods[r], I = 3 * S * (r > E - gi ? r - E + gi : 0), L = 4 * (this._cubeSize - S); Dr(t, I, L, 3 * S, 2 * S), c.setRenderTarget(t), c.render(h, Cs) } } function Tp(i) { const e = [], t = [], n = []; let r = i; const s = i - gi + 1 + Bo.length; for (let a = 0; a < s; a++) { const o = Math.pow(2, r); t.push(o); let c = 1 / o; a > i - gi ? c = Bo[a - i + gi - 1] : a === 0 && (c = 0), n.push(c); const l = 1 / (o - 2), u = -l, h = 1 + l, d = [u, u, h, u, h, h, u, u, h, h, u, h], p = 6, g = 6, x = 3, m = 2, f = 1, b = new Float32Array(x * g * p), E = new Float32Array(m * g * p), S = new Float32Array(f * g * p); for (let L = 0; L < p; L++) { const R = L % 3 * 2 / 3 - 1, N = L > 2 ? 0 : -1, y = [R, N, 0, R + 2 / 3, N, 0, R + 2 / 3, N + 1, 0, R, N, 0, R + 2 / 3, N + 1, 0, R, N + 1, 0]; b.set(y, x * g * L), E.set(d, m * g * L); const M = [L, L, L, L, L, L]; S.set(M, f * g * L) } const I = new jt; I.setAttribute("position", new $t(b, x)), I.setAttribute("uv", new $t(E, m)), I.setAttribute("faceIndex", new $t(S, f)), e.push(I), r > gi && r-- } return { lodPlanes: e, sizeLods: t, sigmas: n } } function Go(i, e, t) { const n = new jn(i, e, t); return n.texture.mapping = $r, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n } function Dr(i, e, t, n, r) { i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r) } function bp(i, e, t) {
	const n = new Float32Array(qn), r = new C(0, 1, 0); return new Sn({
		name: "SphericalGaussianBlur", defines: { n: qn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: Xa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Pn, depthTest: !1, depthWrite: !1
	})
} function ko() {
	return new Sn({
		name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Xa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Pn, depthTest: !1, depthWrite: !1
	})
} function Wo() {
	return new Sn({
		name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Xa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Pn, depthTest: !1, depthWrite: !1
	})
} function Xa() {
	return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function Ap(i) { let e = new WeakMap, t = null; function n(o) { if (o && o.isTexture) { const c = o.mapping, l = c === Ys || c === Zs, u = c === Mi || c === yi; if (l || u) { let h = e.get(o); const d = h !== void 0 ? h.texture.pmremVersion : 0; if (o.isRenderTargetTexture && o.pmremVersion !== d) return t === null && (t = new Ho(i)), h = l ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), h.texture; if (h !== void 0) return h.texture; { const p = o.image; return l && p && p.height > 0 || u && p && r(p) ? (t === null && (t = new Ho(i)), h = l ? t.fromEquirectangular(o) : t.fromCubemap(o), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), o.addEventListener("dispose", s), h.texture) : null } } } return o } function r(o) { let c = 0; const l = 6; for (let u = 0; u < l; u++)o[u] !== void 0 && c++; return c === l } function s(o) { const c = o.target; c.removeEventListener("dispose", s); const l = e.get(c); l !== void 0 && (e.delete(c), l.dispose()) } function a() { e = new WeakMap, t !== null && (t.dispose(), t = null) } return { get: n, dispose: a } } function wp(i) { const e = {}; function t(n) { if (e[n] !== void 0) return e[n]; let r; switch (n) { case "WEBGL_depth_texture": r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: r = i.getExtension(n) }return e[n] = r, r } return { has: function (n) { return t(n) !== null }, init: function () { t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent") }, get: function (n) { const r = t(n); return r === null && vi("THREE.WebGLRenderer: " + n + " extension not supported."), r } } } function Rp(i, e, t, n) { const r = {}, s = new WeakMap; function a(h) { const d = h.target; d.index !== null && e.remove(d.index); for (const g in d.attributes) e.remove(d.attributes[g]); d.removeEventListener("dispose", a), delete r[d.id]; const p = s.get(d); p && (e.remove(p), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries-- } function o(h, d) { return r[d.id] === !0 || (d.addEventListener("dispose", a), r[d.id] = !0, t.memory.geometries++), d } function c(h) { const d = h.attributes; for (const p in d) e.update(d[p], i.ARRAY_BUFFER) } function l(h) { const d = [], p = h.index, g = h.attributes.position; let x = 0; if (p !== null) { const b = p.array; x = p.version; for (let E = 0, S = b.length; E < S; E += 3) { const I = b[E + 0], L = b[E + 1], R = b[E + 2]; d.push(I, L, L, R, R, I) } } else if (g !== void 0) { const b = g.array; x = g.version; for (let E = 0, S = b.length / 3 - 1; E < S; E += 3) { const I = E + 0, L = E + 1, R = E + 2; d.push(I, L, L, R, R, I) } } else return; const m = new (wc(d) ? Dc : Lc)(d, 1); m.version = x; const f = s.get(h); f && e.remove(f), s.set(h, m) } function u(h) { const d = s.get(h); if (d) { const p = h.index; p !== null && d.version < p.version && l(h) } else l(h); return s.get(h) } return { get: o, update: c, getWireframeAttribute: u } } function Cp(i, e, t) { let n; function r(d) { n = d } let s, a; function o(d) { s = d.type, a = d.bytesPerElement } function c(d, p) { i.drawElements(n, p, s, d * a), t.update(p, n, 1) } function l(d, p, g) { g !== 0 && (i.drawElementsInstanced(n, p, s, d * a, g), t.update(p, n, g)) } function u(d, p, g) { if (g === 0) return; e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, d, 0, g); let m = 0; for (let f = 0; f < g; f++)m += p[f]; t.update(m, n, 1) } function h(d, p, g, x) { if (g === 0) return; const m = e.get("WEBGL_multi_draw"); if (m === null) for (let f = 0; f < d.length; f++)l(d[f] / a, p[f], x[f]); else { m.multiDrawElementsInstancedWEBGL(n, p, 0, s, d, 0, x, 0, g); let f = 0; for (let b = 0; b < g; b++)f += p[b] * x[b]; t.update(f, n, 1) } } this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = u, this.renderMultiDrawInstances = h } function Pp(i) { const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n(s, a, o) { switch (t.calls++, a) { case i.TRIANGLES: t.triangles += o * (s / 3); break; case i.LINES: t.lines += o * (s / 2); break; case i.LINE_STRIP: t.lines += o * (s - 1); break; case i.LINE_LOOP: t.lines += o * s; break; case i.POINTS: t.points += o * s; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", a); break } } function r() { t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 } return { memory: e, render: t, programs: null, autoReset: !0, reset: r, update: n } } function Lp(i, e, t) { const n = new WeakMap, r = new Qe; function s(a, o, c) { const l = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, h = u !== void 0 ? u.length : 0; let d = n.get(o); if (d === void 0 || d.count !== h) { let M = function () { N.dispose(), n.delete(o), o.removeEventListener("dispose", M) }; var p = M; d !== void 0 && d.texture.dispose(); const g = o.morphAttributes.position !== void 0, x = o.morphAttributes.normal !== void 0, m = o.morphAttributes.color !== void 0, f = o.morphAttributes.position || [], b = o.morphAttributes.normal || [], E = o.morphAttributes.color || []; let S = 0; g === !0 && (S = 1), x === !0 && (S = 2), m === !0 && (S = 3); let I = o.attributes.position.count * S, L = 1; I > e.maxTextureSize && (L = Math.ceil(I / e.maxTextureSize), I = e.maxTextureSize); const R = new Float32Array(I * L * 4 * h), N = new Rc(R, I, L, h); N.type = mn, N.needsUpdate = !0; const y = S * 4; for (let P = 0; P < h; P++) { const k = f[P], z = b[P], Z = E[P], K = I * L * 4 * P; for (let X = 0; X < k.count; X++) { const $ = X * y; g === !0 && (r.fromBufferAttribute(k, X), R[K + $ + 0] = r.x, R[K + $ + 1] = r.y, R[K + $ + 2] = r.z, R[K + $ + 3] = 0), x === !0 && (r.fromBufferAttribute(z, X), R[K + $ + 4] = r.x, R[K + $ + 5] = r.y, R[K + $ + 6] = r.z, R[K + $ + 7] = 0), m === !0 && (r.fromBufferAttribute(Z, X), R[K + $ + 8] = r.x, R[K + $ + 9] = r.y, R[K + $ + 10] = r.z, R[K + $ + 11] = Z.itemSize === 4 ? r.w : 1) } } d = { count: h, texture: N, size: new fe(I, L) }, n.set(o, d), o.addEventListener("dispose", M) } if (a.isInstancedMesh === !0 && a.morphTexture !== null) c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t); else { let g = 0; for (let m = 0; m < l.length; m++)g += l[m]; const x = o.morphTargetsRelative ? 1 : 1 - g; c.getUniforms().setValue(i, "morphTargetBaseInfluence", x), c.getUniforms().setValue(i, "morphTargetInfluences", l) } c.getUniforms().setValue(i, "morphTargetsTexture", d.texture, t), c.getUniforms().setValue(i, "morphTargetsTextureSize", d.size) } return { update: s } } function Dp(i, e, t, n) { let r = new WeakMap; function s(c) { const l = n.render.frame, u = c.geometry, h = e.get(c, u); if (r.get(h) !== l && (e.update(h), r.set(h, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), r.get(c) !== l && (t.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) { const d = c.skeleton; r.get(d) !== l && (d.update(), r.set(d, l)) } return h } function a() { r = new WeakMap } function o(c) { const l = c.target; l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor) } return { update: s, dispose: a } } const Zc = new Rt, Xo = new Oc(1, 1), Kc = new Rc, Jc = new yu, $c = new Nc, qo = [], Yo = [], Zo = new Float32Array(16), Ko = new Float32Array(9), Jo = new Float32Array(4); function Pi(i, e, t) { const n = i[0]; if (n <= 0 || n > 0) return i; const r = e * t; let s = qo[r]; if (s === void 0 && (s = new Float32Array(r), qo[r] = s), e !== 0) { n.toArray(s, 0); for (let a = 1, o = 0; a !== e; ++a)o += t, i[a].toArray(s, o) } return s } function dt(i, e) { if (i.length !== e.length) return !1; for (let t = 0, n = i.length; t < n; t++)if (i[t] !== e[t]) return !1; return !0 } function ft(i, e) { for (let t = 0, n = e.length; t < n; t++)i[t] = e[t] } function Qr(i, e) { let t = Yo[e]; t === void 0 && (t = new Int32Array(e), Yo[e] = t); for (let n = 0; n !== e; ++n)t[n] = i.allocateTextureUnit(); return t } function Up(i, e) { const t = this.cache; t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e) } function Ip(i, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (dt(t, e)) return; i.uniform2fv(this.addr, e), ft(t, e) } } function Np(i, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b); else { if (dt(t, e)) return; i.uniform3fv(this.addr, e), ft(t, e) } } function Fp(i, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (dt(t, e)) return; i.uniform4fv(this.addr, e), ft(t, e) } } function Op(i, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (dt(t, e)) return; i.uniformMatrix2fv(this.addr, !1, e), ft(t, e) } else { if (dt(t, n)) return; Jo.set(n), i.uniformMatrix2fv(this.addr, !1, Jo), ft(t, n) } } function Bp(i, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (dt(t, e)) return; i.uniformMatrix3fv(this.addr, !1, e), ft(t, e) } else { if (dt(t, n)) return; Ko.set(n), i.uniformMatrix3fv(this.addr, !1, Ko), ft(t, n) } } function zp(i, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (dt(t, e)) return; i.uniformMatrix4fv(this.addr, !1, e), ft(t, e) } else { if (dt(t, n)) return; Zo.set(n), i.uniformMatrix4fv(this.addr, !1, Zo), ft(t, n) } } function Vp(i, e) { const t = this.cache; t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e) } function Hp(i, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (dt(t, e)) return; i.uniform2iv(this.addr, e), ft(t, e) } } function Gp(i, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (dt(t, e)) return; i.uniform3iv(this.addr, e), ft(t, e) } } function kp(i, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (dt(t, e)) return; i.uniform4iv(this.addr, e), ft(t, e) } } function Wp(i, e) { const t = this.cache; t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e) } function Xp(i, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (dt(t, e)) return; i.uniform2uiv(this.addr, e), ft(t, e) } } function qp(i, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (dt(t, e)) return; i.uniform3uiv(this.addr, e), ft(t, e) } } function Yp(i, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (dt(t, e)) return; i.uniform4uiv(this.addr, e), ft(t, e) } } function Zp(i, e, t) { const n = this.cache, r = t.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r); let s; this.type === i.SAMPLER_2D_SHADOW ? (Xo.compareFunction = Ac, s = Xo) : s = Zc, t.setTexture2D(e || s, r) } function Kp(i, e, t) { const n = this.cache, r = t.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Jc, r) } function Jp(i, e, t) { const n = this.cache, r = t.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || $c, r) } function $p(i, e, t) { const n = this.cache, r = t.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Kc, r) } function jp(i) { switch (i) { case 5126: return Up; case 35664: return Ip; case 35665: return Np; case 35666: return Fp; case 35674: return Op; case 35675: return Bp; case 35676: return zp; case 5124: case 35670: return Vp; case 35667: case 35671: return Hp; case 35668: case 35672: return Gp; case 35669: case 35673: return kp; case 5125: return Wp; case 36294: return Xp; case 36295: return qp; case 36296: return Yp; case 35678: case 36198: case 36298: case 36306: case 35682: return Zp; case 35679: case 36299: case 36307: return Kp; case 35680: case 36300: case 36308: case 36293: return Jp; case 36289: case 36303: case 36311: case 36292: return $p } } function Qp(i, e) { i.uniform1fv(this.addr, e) } function em(i, e) { const t = Pi(e, this.size, 2); i.uniform2fv(this.addr, t) } function tm(i, e) { const t = Pi(e, this.size, 3); i.uniform3fv(this.addr, t) } function nm(i, e) { const t = Pi(e, this.size, 4); i.uniform4fv(this.addr, t) } function im(i, e) { const t = Pi(e, this.size, 4); i.uniformMatrix2fv(this.addr, !1, t) } function rm(i, e) { const t = Pi(e, this.size, 9); i.uniformMatrix3fv(this.addr, !1, t) } function sm(i, e) { const t = Pi(e, this.size, 16); i.uniformMatrix4fv(this.addr, !1, t) } function am(i, e) { i.uniform1iv(this.addr, e) } function om(i, e) { i.uniform2iv(this.addr, e) } function cm(i, e) { i.uniform3iv(this.addr, e) } function lm(i, e) { i.uniform4iv(this.addr, e) } function um(i, e) { i.uniform1uiv(this.addr, e) } function hm(i, e) { i.uniform2uiv(this.addr, e) } function dm(i, e) { i.uniform3uiv(this.addr, e) } function fm(i, e) { i.uniform4uiv(this.addr, e) } function pm(i, e, t) { const n = this.cache, r = e.length, s = Qr(t, r); dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s)); for (let a = 0; a !== r; ++a)t.setTexture2D(e[a] || Zc, s[a]) } function mm(i, e, t) { const n = this.cache, r = e.length, s = Qr(t, r); dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s)); for (let a = 0; a !== r; ++a)t.setTexture3D(e[a] || Jc, s[a]) } function gm(i, e, t) { const n = this.cache, r = e.length, s = Qr(t, r); dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s)); for (let a = 0; a !== r; ++a)t.setTextureCube(e[a] || $c, s[a]) } function _m(i, e, t) { const n = this.cache, r = e.length, s = Qr(t, r); dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s)); for (let a = 0; a !== r; ++a)t.setTexture2DArray(e[a] || Kc, s[a]) } function vm(i) { switch (i) { case 5126: return Qp; case 35664: return em; case 35665: return tm; case 35666: return nm; case 35674: return im; case 35675: return rm; case 35676: return sm; case 5124: case 35670: return am; case 35667: case 35671: return om; case 35668: case 35672: return cm; case 35669: case 35673: return lm; case 5125: return um; case 36294: return hm; case 36295: return dm; case 36296: return fm; case 35678: case 36198: case 36298: case 36306: case 35682: return pm; case 35679: case 36299: case 36307: return mm; case 35680: case 36300: case 36308: case 36293: return gm; case 36289: case 36303: case 36311: case 36292: return _m } } class xm { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = jp(t.type) } } class Sm { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = vm(t.type) } } class Mm { constructor(e) { this.id = e, this.seq = [], this.map = {} } setValue(e, t, n) { const r = this.seq; for (let s = 0, a = r.length; s !== a; ++s) { const o = r[s]; o.setValue(e, t[o.id], n) } } } const Is = /(\w+)(\])?(\[|\.)?/g; function $o(i, e) { i.seq.push(e), i.map[e.id] = e } function ym(i, e, t) { const n = i.name, r = n.length; for (Is.lastIndex = 0; ;) { const s = Is.exec(n), a = Is.lastIndex; let o = s[1]; const c = s[2] === "]", l = s[3]; if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) { $o(t, l === void 0 ? new xm(o, i, e) : new Sm(o, i, e)); break } else { let h = t.map[o]; h === void 0 && (h = new Mm(o), $o(t, h)), t = h } } } class Gr { constructor(e, t) { this.seq = [], this.map = {}; const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS); for (let r = 0; r < n; ++r) { const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name); ym(s, a, this) } } setValue(e, t, n, r) { const s = this.map[t]; s !== void 0 && s.setValue(e, n, r) } setOptional(e, t, n) { const r = t[n]; r !== void 0 && this.setValue(e, n, r) } static upload(e, t, n, r) { for (let s = 0, a = t.length; s !== a; ++s) { const o = t[s], c = n[o.id]; c.needsUpdate !== !1 && o.setValue(e, c.value, r) } } static seqWithValue(e, t) { const n = []; for (let r = 0, s = e.length; r !== s; ++r) { const a = e[r]; a.id in t && n.push(a) } return n } } function jo(i, e, t) { const n = i.createShader(e); return i.shaderSource(n, t), i.compileShader(n), n } const Em = 37297; let Tm = 0; function bm(i, e) {
	const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length); for (let a = r; a < s; a++) { const o = a + 1; n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`) } return n.join(`
`)
} const Qo = new Ue; function Am(i) { He._getMatrix(Qo, He.workingColorSpace, i); const e = `mat3( ${Qo.elements.map(t => t.toFixed(4))} )`; switch (He.getTransfer(i)) { case kr: return [e, "LinearTransferOETF"]; case Ke: return [e, "sRGBTransferOETF"]; default: return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"] } } function ec(i, e, t) {
	const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim(); if (n && r === "") return ""; const s = /ERROR: 0:(\d+)/.exec(r); if (s) {
		const a = parseInt(s[1]); return t.toUpperCase() + `

`+ r + `

`+ bm(i.getShaderSource(e), a)
	} else return r
} function wm(i, e) {
	const t = Am(e); return [`vec4 ${i}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`)
} function Rm(i, e) { let t; switch (e) { case Ll: t = "Linear"; break; case Dl: t = "Reinhard"; break; case Ul: t = "Cineon"; break; case Il: t = "ACESFilmic"; break; case Fl: t = "AgX"; break; case Ol: t = "Neutral"; break; case Nl: t = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear" }return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }" } const Ur = new C; function Cm() {
	He.getLuminanceCoefficients(Ur); const i = Ur.x.toFixed(4), e = Ur.y.toFixed(4), t = Ur.z.toFixed(4); return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`)
} function Pm(i) {
	return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Vi).join(`
`)
} function Lm(i) {
	const e = []; for (const t in i) { const n = i[t]; n !== !1 && e.push("#define " + t + " " + n) } return e.join(`
`)
} function Dm(i, e) { const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES); for (let r = 0; r < n; r++) { const s = i.getActiveAttrib(e, r), a = s.name; let o = 1; s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = { type: s.type, location: i.getAttribLocation(e, a), locationSize: o } } return t } function Vi(i) { return i !== "" } function tc(i, e) { const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps; return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) } function nc(i, e) { return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) } const Um = /^[ \t]*#include +<([\w\d./]+)>/gm; function Ca(i) { return i.replace(Um, Nm) } const Im = new Map; function Nm(i, e) { let t = Ne[e]; if (t === void 0) { const n = Im.get(e); if (n !== void 0) t = Ne[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n); else throw new Error("Can not resolve #include <" + e + ">") } return Ca(t) } const Fm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function ic(i) { return i.replace(Fm, Om) } function Om(i, e, t, n) { let r = ""; for (let s = parseInt(e); s < parseInt(t); s++)r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s); return r } function rc(i) {
	let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`; return i.precision === "highp" ? e += `
#define HIGH_PRECISION`: i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION`: i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
} function Bm(i) { let e = "SHADOWMAP_TYPE_BASIC"; return i.shadowMapType === mc ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === ul ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === pn && (e = "SHADOWMAP_TYPE_VSM"), e } function zm(i) { let e = "ENVMAP_TYPE_CUBE"; if (i.envMap) switch (i.envMapMode) { case Mi: case yi: e = "ENVMAP_TYPE_CUBE"; break; case $r: e = "ENVMAP_TYPE_CUBE_UV"; break }return e } function Vm(i) { let e = "ENVMAP_MODE_REFLECTION"; if (i.envMap) switch (i.envMapMode) { case yi: e = "ENVMAP_MODE_REFRACTION"; break }return e } function Hm(i) { let e = "ENVMAP_BLENDING_NONE"; if (i.envMap) switch (i.combine) { case gc: e = "ENVMAP_BLENDING_MULTIPLY"; break; case Cl: e = "ENVMAP_BLENDING_MIX"; break; case Pl: e = "ENVMAP_BLENDING_ADD"; break }return e } function Gm(i) { const e = i.envMapCubeUVHeight; if (e === null) return null; const t = Math.log2(e) - 2, n = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t } } function km(i, e, t, n) {
	const r = i.getContext(), s = t.defines; let a = t.vertexShader, o = t.fragmentShader; const c = Bm(t), l = zm(t), u = Vm(t), h = Hm(t), d = Gm(t), p = Pm(t), g = Lm(s), x = r.createProgram(); let m, f, b = t.glslVersion ? "#version " + t.glslVersion + `
`: ""; t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Vi).join(`
`), m.length > 0 && (m += `
`), f = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Vi).join(`
`), f.length > 0 && (f += `
`)) : (m = [rc(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Vi).join(`
`), f = [rc(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + h : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Ln ? "#define TONE_MAPPING" : "", t.toneMapping !== Ln ? Ne.tonemapping_pars_fragment : "", t.toneMapping !== Ln ? Rm("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ne.colorspace_pars_fragment, wm("linearToOutputTexel", t.outputColorSpace), Cm(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Vi).join(`
`)), a = Ca(a), a = tc(a, t), a = nc(a, t), o = Ca(o), o = tc(o, t), o = nc(o, t), a = ic(a), o = ic(o), t.isRawShaderMaterial !== !0 && (b = `#version 300 es
`, m = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
`+ m, f = ["#define varying in", t.glslVersion === oo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === oo ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
`+ f); const E = b + m + a, S = b + f + o, I = jo(r, r.VERTEX_SHADER, E), L = jo(r, r.FRAGMENT_SHADER, S); r.attachShader(x, I), r.attachShader(x, L), t.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x); function R(P) {
		if (i.debug.checkShaderErrors) {
			const k = r.getProgramInfoLog(x).trim(), z = r.getShaderInfoLog(I).trim(), Z = r.getShaderInfoLog(L).trim(); let K = !0, X = !0; if (r.getProgramParameter(x, r.LINK_STATUS) === !1) if (K = !1, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, x, I, L); else {
				const $ = ec(r, I, "vertex"), V = ec(r, L, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Material Name: `+ P.name + `
Material Type: `+ P.type + `

Program Info Log: `+ k + `
`+ $ + `
`+ V)
			} else k !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", k) : (z === "" || Z === "") && (X = !1); X && (P.diagnostics = { runnable: K, programLog: k, vertexShader: { log: z, prefix: m }, fragmentShader: { log: Z, prefix: f } })
		} r.deleteShader(I), r.deleteShader(L), N = new Gr(r, x), y = Dm(r, x)
	} let N; this.getUniforms = function () { return N === void 0 && R(this), N }; let y; this.getAttributes = function () { return y === void 0 && R(this), y }; let M = t.rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return M === !1 && (M = r.getProgramParameter(x, Em)), M }, this.destroy = function () { n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0 }, this.type = t.shaderType, this.name = t.shaderName, this.id = Tm++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = I, this.fragmentShader = L, this
} let Wm = 0; class Xm { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(e) { const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e); return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this } remove(e) { const t = this.materialCache.get(e); for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(e), this } getVertexShaderID(e) { return this._getShaderStage(e.vertexShader).id } getFragmentShaderID(e) { return this._getShaderStage(e.fragmentShader).id } dispose() { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial(e) { const t = this.materialCache; let n = t.get(e); return n === void 0 && (n = new Set, t.set(e, n)), n } _getShaderStage(e) { const t = this.shaderCache; let n = t.get(e); return n === void 0 && (n = new qm(e), t.set(e, n)), n } } class qm { constructor(e) { this.id = Wm++, this.code = e, this.usedTimes = 0 } } function Ym(i, e, t, n, r, s, a) { const o = new Va, c = new Xm, l = new Set, u = [], h = r.logarithmicDepthBuffer, d = r.vertexTextures; let p = r.precision; const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function x(y) { return l.add(y), y === 0 ? "uv" : `uv${y}` } function m(y, M, P, k, z) { const Z = k.fog, K = z.geometry, X = y.isMeshStandardMaterial ? k.environment : null, $ = (y.isMeshStandardMaterial ? t : e).get(y.envMap || X), V = !!$ && $.mapping === $r ? $.image.height : null, oe = g[y.type]; y.precision !== null && (p = r.getMaxPrecision(y.precision), p !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", p, "instead.")); const he = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, ye = he !== void 0 ? he.length : 0; let Oe = 0; K.morphAttributes.position !== void 0 && (Oe = 1), K.morphAttributes.normal !== void 0 && (Oe = 2), K.morphAttributes.color !== void 0 && (Oe = 3); let Je, W, te, Se; if (oe) { const Xe = Pt[oe]; Je = Xe.vertexShader, W = Xe.fragmentShader } else Je = y.vertexShader, W = y.fragmentShader, c.update(y), te = c.getVertexShaderID(y), Se = c.getFragmentShaderID(y); const ce = i.getRenderTarget(), Me = i.state.buffers.depth.getReversed(), Ge = z.isInstancedMesh === !0, Re = z.isBatchedMesh === !0, rt = !!y.map, st = !!y.matcap, ke = !!$, A = !!y.aoMap, Et = !!y.lightMap, We = !!y.bumpMap, je = !!y.normalMap, _e = !!y.displacementMap, ze = !!y.emissiveMap, Te = !!y.metalnessMap, Ie = !!y.roughnessMap, ht = y.anisotropy > 0, T = y.clearcoat > 0, _ = y.dispersion > 0, F = y.iridescence > 0, G = y.sheen > 0, Y = y.transmission > 0, H = ht && !!y.anisotropyMap, ve = T && !!y.clearcoatMap, re = T && !!y.clearcoatNormalMap, ge = T && !!y.clearcoatRoughnessMap, xe = F && !!y.iridescenceMap, J = F && !!y.iridescenceThicknessMap, le = G && !!y.sheenColorMap, we = G && !!y.sheenRoughnessMap, Ae = !!y.specularMap, ie = !!y.specularColorMap, Le = !!y.specularIntensityMap, w = Y && !!y.transmissionMap, se = Y && !!y.thicknessMap, j = !!y.gradientMap, de = !!y.alphaMap, Q = y.alphaTest > 0, q = !!y.alphaHash, pe = !!y.extensions; let De = Ln; y.toneMapped && (ce === null || ce.isXRRenderTarget === !0) && (De = i.toneMapping); const tt = { shaderID: oe, shaderType: y.type, shaderName: y.name, vertexShader: Je, fragmentShader: W, defines: y.defines, customVertexShaderID: te, customFragmentShaderID: Se, isRawShaderMaterial: y.isRawShaderMaterial === !0, glslVersion: y.glslVersion, precision: p, batching: Re, batchingColor: Re && z._colorsTexture !== null, instancing: Ge, instancingColor: Ge && z.instanceColor !== null, instancingMorph: Ge && z.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: ce === null ? i.outputColorSpace : ce.isXRRenderTarget === !0 ? ce.texture.colorSpace : Ei, alphaToCoverage: !!y.alphaToCoverage, map: rt, matcap: st, envMap: ke, envMapMode: ke && $.mapping, envMapCubeUVHeight: V, aoMap: A, lightMap: Et, bumpMap: We, normalMap: je, displacementMap: d && _e, emissiveMap: ze, normalMapObjectSpace: je && y.normalMapType === Gl, normalMapTangentSpace: je && y.normalMapType === Hl, metalnessMap: Te, roughnessMap: Ie, anisotropy: ht, anisotropyMap: H, clearcoat: T, clearcoatMap: ve, clearcoatNormalMap: re, clearcoatRoughnessMap: ge, dispersion: _, iridescence: F, iridescenceMap: xe, iridescenceThicknessMap: J, sheen: G, sheenColorMap: le, sheenRoughnessMap: we, specularMap: Ae, specularColorMap: ie, specularIntensityMap: Le, transmission: Y, transmissionMap: w, thicknessMap: se, gradientMap: j, opaque: y.transparent === !1 && y.blending === _i && y.alphaToCoverage === !1, alphaMap: de, alphaTest: Q, alphaHash: q, combine: y.combine, mapUv: rt && x(y.map.channel), aoMapUv: A && x(y.aoMap.channel), lightMapUv: Et && x(y.lightMap.channel), bumpMapUv: We && x(y.bumpMap.channel), normalMapUv: je && x(y.normalMap.channel), displacementMapUv: _e && x(y.displacementMap.channel), emissiveMapUv: ze && x(y.emissiveMap.channel), metalnessMapUv: Te && x(y.metalnessMap.channel), roughnessMapUv: Ie && x(y.roughnessMap.channel), anisotropyMapUv: H && x(y.anisotropyMap.channel), clearcoatMapUv: ve && x(y.clearcoatMap.channel), clearcoatNormalMapUv: re && x(y.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: ge && x(y.clearcoatRoughnessMap.channel), iridescenceMapUv: xe && x(y.iridescenceMap.channel), iridescenceThicknessMapUv: J && x(y.iridescenceThicknessMap.channel), sheenColorMapUv: le && x(y.sheenColorMap.channel), sheenRoughnessMapUv: we && x(y.sheenRoughnessMap.channel), specularMapUv: Ae && x(y.specularMap.channel), specularColorMapUv: ie && x(y.specularColorMap.channel), specularIntensityMapUv: Le && x(y.specularIntensityMap.channel), transmissionMapUv: w && x(y.transmissionMap.channel), thicknessMapUv: se && x(y.thicknessMap.channel), alphaMapUv: de && x(y.alphaMap.channel), vertexTangents: !!K.attributes.tangent && (je || ht), vertexColors: y.vertexColors, vertexAlphas: y.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4, pointsUvs: z.isPoints === !0 && !!K.attributes.uv && (rt || de), fog: !!Z, useFog: y.fog === !0, fogExp2: !!Z && Z.isFogExp2, flatShading: y.flatShading === !0 && y.wireframe === !1, sizeAttenuation: y.sizeAttenuation === !0, logarithmicDepthBuffer: h, reverseDepthBuffer: Me, skinning: z.isSkinnedMesh === !0, morphTargets: K.morphAttributes.position !== void 0, morphNormals: K.morphAttributes.normal !== void 0, morphColors: K.morphAttributes.color !== void 0, morphTargetsCount: ye, morphTextureStride: Oe, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: y.dithering, shadowMapEnabled: i.shadowMap.enabled && P.length > 0, shadowMapType: i.shadowMap.type, toneMapping: De, decodeVideoTexture: rt && y.map.isVideoTexture === !0 && He.getTransfer(y.map.colorSpace) === Ke, decodeVideoTextureEmissive: ze && y.emissiveMap.isVideoTexture === !0 && He.getTransfer(y.emissiveMap.colorSpace) === Ke, premultipliedAlpha: y.premultipliedAlpha, doubleSided: y.side === tn, flipSided: y.side === Lt, useDepthPacking: y.depthPacking >= 0, depthPacking: y.depthPacking || 0, index0AttributeName: y.index0AttributeName, extensionClipCullDistance: pe && y.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (pe && y.extensions.multiDraw === !0 || Re) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: y.customProgramCacheKey() }; return tt.vertexUv1s = l.has(1), tt.vertexUv2s = l.has(2), tt.vertexUv3s = l.has(3), l.clear(), tt } function f(y) { const M = []; if (y.shaderID ? M.push(y.shaderID) : (M.push(y.customVertexShaderID), M.push(y.customFragmentShaderID)), y.defines !== void 0) for (const P in y.defines) M.push(P), M.push(y.defines[P]); return y.isRawShaderMaterial === !1 && (b(M, y), E(M, y), M.push(i.outputColorSpace)), M.push(y.customProgramCacheKey), M.join() } function b(y, M) { y.push(M.precision), y.push(M.outputColorSpace), y.push(M.envMapMode), y.push(M.envMapCubeUVHeight), y.push(M.mapUv), y.push(M.alphaMapUv), y.push(M.lightMapUv), y.push(M.aoMapUv), y.push(M.bumpMapUv), y.push(M.normalMapUv), y.push(M.displacementMapUv), y.push(M.emissiveMapUv), y.push(M.metalnessMapUv), y.push(M.roughnessMapUv), y.push(M.anisotropyMapUv), y.push(M.clearcoatMapUv), y.push(M.clearcoatNormalMapUv), y.push(M.clearcoatRoughnessMapUv), y.push(M.iridescenceMapUv), y.push(M.iridescenceThicknessMapUv), y.push(M.sheenColorMapUv), y.push(M.sheenRoughnessMapUv), y.push(M.specularMapUv), y.push(M.specularColorMapUv), y.push(M.specularIntensityMapUv), y.push(M.transmissionMapUv), y.push(M.thicknessMapUv), y.push(M.combine), y.push(M.fogExp2), y.push(M.sizeAttenuation), y.push(M.morphTargetsCount), y.push(M.morphAttributeCount), y.push(M.numDirLights), y.push(M.numPointLights), y.push(M.numSpotLights), y.push(M.numSpotLightMaps), y.push(M.numHemiLights), y.push(M.numRectAreaLights), y.push(M.numDirLightShadows), y.push(M.numPointLightShadows), y.push(M.numSpotLightShadows), y.push(M.numSpotLightShadowsWithMaps), y.push(M.numLightProbes), y.push(M.shadowMapType), y.push(M.toneMapping), y.push(M.numClippingPlanes), y.push(M.numClipIntersection), y.push(M.depthPacking) } function E(y, M) { o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), M.gradientMap && o.enable(22), y.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reverseDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), y.push(o.mask) } function S(y) { const M = g[y.type]; let P; if (M) { const k = Pt[M]; P = Ha.clone(k.uniforms) } else P = y.uniforms; return P } function I(y, M) { let P; for (let k = 0, z = u.length; k < z; k++) { const Z = u[k]; if (Z.cacheKey === M) { P = Z, ++P.usedTimes; break } } return P === void 0 && (P = new km(i, M, y, s), u.push(P)), P } function L(y) { if (--y.usedTimes === 0) { const M = u.indexOf(y); u[M] = u[u.length - 1], u.pop(), y.destroy() } } function R(y) { c.remove(y) } function N() { c.dispose() } return { getParameters: m, getProgramCacheKey: f, getUniforms: S, acquireProgram: I, releaseProgram: L, releaseShaderCache: R, programs: u, dispose: N } } function Zm() { let i = new WeakMap; function e(a) { return i.has(a) } function t(a) { let o = i.get(a); return o === void 0 && (o = {}, i.set(a, o)), o } function n(a) { i.delete(a) } function r(a, o, c) { i.get(a)[o] = c } function s() { i = new WeakMap } return { has: e, get: t, remove: n, update: r, dispose: s } } function Km(i, e) { return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id } function sc(i, e) { return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id } function ac() { const i = []; let e = 0; const t = [], n = [], r = []; function s() { e = 0, t.length = 0, n.length = 0, r.length = 0 } function a(h, d, p, g, x, m) { let f = i[e]; return f === void 0 ? (f = { id: h.id, object: h, geometry: d, material: p, groupOrder: g, renderOrder: h.renderOrder, z: x, group: m }, i[e] = f) : (f.id = h.id, f.object = h, f.geometry = d, f.material = p, f.groupOrder = g, f.renderOrder = h.renderOrder, f.z = x, f.group = m), e++, f } function o(h, d, p, g, x, m) { const f = a(h, d, p, g, x, m); p.transmission > 0 ? n.push(f) : p.transparent === !0 ? r.push(f) : t.push(f) } function c(h, d, p, g, x, m) { const f = a(h, d, p, g, x, m); p.transmission > 0 ? n.unshift(f) : p.transparent === !0 ? r.unshift(f) : t.unshift(f) } function l(h, d) { t.length > 1 && t.sort(h || Km), n.length > 1 && n.sort(d || sc), r.length > 1 && r.sort(d || sc) } function u() { for (let h = e, d = i.length; h < d; h++) { const p = i[h]; if (p.id === null) break; p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null } } return { opaque: t, transmissive: n, transparent: r, init: s, push: o, unshift: c, finish: u, sort: l } } function Jm() { let i = new WeakMap; function e(n, r) { const s = i.get(n); let a; return s === void 0 ? (a = new ac, i.set(n, [a])) : r >= s.length ? (a = new ac, s.push(a)) : a = s[r], a } function t() { i = new WeakMap } return { get: e, dispose: t } } function $m() { const i = {}; return { get: function (e) { if (i[e.id] !== void 0) return i[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { direction: new C, color: new Ye }; break; case "SpotLight": t = { position: new C, direction: new C, color: new Ye, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": t = { position: new C, color: new Ye, distance: 0, decay: 0 }; break; case "HemisphereLight": t = { direction: new C, skyColor: new Ye, groundColor: new Ye }; break; case "RectAreaLight": t = { color: new Ye, position: new C, halfWidth: new C, halfHeight: new C }; break }return i[e.id] = t, t } } } function jm() { const i = {}; return { get: function (e) { if (i[e.id] !== void 0) return i[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new fe }; break; case "SpotLight": t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new fe }; break; case "PointLight": t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new fe, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return i[e.id] = t, t } } } let Qm = 0; function eg(i, e) { return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0) } function tg(i) { const e = new $m, t = jm(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let l = 0; l < 9; l++)n.probe.push(new C); const r = new C, s = new et, a = new et; function o(l) { let u = 0, h = 0, d = 0; for (let y = 0; y < 9; y++)n.probe[y].set(0, 0, 0); let p = 0, g = 0, x = 0, m = 0, f = 0, b = 0, E = 0, S = 0, I = 0, L = 0, R = 0; l.sort(eg); for (let y = 0, M = l.length; y < M; y++) { const P = l[y], k = P.color, z = P.intensity, Z = P.distance, K = P.shadow && P.shadow.map ? P.shadow.map.texture : null; if (P.isAmbientLight) u += k.r * z, h += k.g * z, d += k.b * z; else if (P.isLightProbe) { for (let X = 0; X < 9; X++)n.probe[X].addScaledVector(P.sh.coefficients[X], z); R++ } else if (P.isDirectionalLight) { const X = e.get(P); if (X.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) { const $ = P.shadow, V = t.get(P); V.shadowIntensity = $.intensity, V.shadowBias = $.bias, V.shadowNormalBias = $.normalBias, V.shadowRadius = $.radius, V.shadowMapSize = $.mapSize, n.directionalShadow[p] = V, n.directionalShadowMap[p] = K, n.directionalShadowMatrix[p] = P.shadow.matrix, b++ } n.directional[p] = X, p++ } else if (P.isSpotLight) { const X = e.get(P); X.position.setFromMatrixPosition(P.matrixWorld), X.color.copy(k).multiplyScalar(z), X.distance = Z, X.coneCos = Math.cos(P.angle), X.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), X.decay = P.decay, n.spot[x] = X; const $ = P.shadow; if (P.map && (n.spotLightMap[I] = P.map, I++, $.updateMatrices(P), P.castShadow && L++), n.spotLightMatrix[x] = $.matrix, P.castShadow) { const V = t.get(P); V.shadowIntensity = $.intensity, V.shadowBias = $.bias, V.shadowNormalBias = $.normalBias, V.shadowRadius = $.radius, V.shadowMapSize = $.mapSize, n.spotShadow[x] = V, n.spotShadowMap[x] = K, S++ } x++ } else if (P.isRectAreaLight) { const X = e.get(P); X.color.copy(k).multiplyScalar(z), X.halfWidth.set(P.width * .5, 0, 0), X.halfHeight.set(0, P.height * .5, 0), n.rectArea[m] = X, m++ } else if (P.isPointLight) { const X = e.get(P); if (X.color.copy(P.color).multiplyScalar(P.intensity), X.distance = P.distance, X.decay = P.decay, P.castShadow) { const $ = P.shadow, V = t.get(P); V.shadowIntensity = $.intensity, V.shadowBias = $.bias, V.shadowNormalBias = $.normalBias, V.shadowRadius = $.radius, V.shadowMapSize = $.mapSize, V.shadowCameraNear = $.camera.near, V.shadowCameraFar = $.camera.far, n.pointShadow[g] = V, n.pointShadowMap[g] = K, n.pointShadowMatrix[g] = P.shadow.matrix, E++ } n.point[g] = X, g++ } else if (P.isHemisphereLight) { const X = e.get(P); X.skyColor.copy(P.color).multiplyScalar(z), X.groundColor.copy(P.groundColor).multiplyScalar(z), n.hemi[f] = X, f++ } } m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ne.LTC_FLOAT_1, n.rectAreaLTC2 = ne.LTC_FLOAT_2) : (n.rectAreaLTC1 = ne.LTC_HALF_1, n.rectAreaLTC2 = ne.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = h, n.ambient[2] = d; const N = n.hash; (N.directionalLength !== p || N.pointLength !== g || N.spotLength !== x || N.rectAreaLength !== m || N.hemiLength !== f || N.numDirectionalShadows !== b || N.numPointShadows !== E || N.numSpotShadows !== S || N.numSpotMaps !== I || N.numLightProbes !== R) && (n.directional.length = p, n.spot.length = x, n.rectArea.length = m, n.point.length = g, n.hemi.length = f, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = E, n.pointShadowMap.length = E, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = E, n.spotLightMatrix.length = S + I - L, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = L, n.numLightProbes = R, N.directionalLength = p, N.pointLength = g, N.spotLength = x, N.rectAreaLength = m, N.hemiLength = f, N.numDirectionalShadows = b, N.numPointShadows = E, N.numSpotShadows = S, N.numSpotMaps = I, N.numLightProbes = R, n.version = Qm++) } function c(l, u) { let h = 0, d = 0, p = 0, g = 0, x = 0; const m = u.matrixWorldInverse; for (let f = 0, b = l.length; f < b; f++) { const E = l[f]; if (E.isDirectionalLight) { const S = n.directional[h]; S.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(m), h++ } else if (E.isSpotLight) { const S = n.spot[p]; S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), S.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(m), p++ } else if (E.isRectAreaLight) { const S = n.rectArea[g]; S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), a.identity(), s.copy(E.matrixWorld), s.premultiply(m), a.extractRotation(s), S.halfWidth.set(E.width * .5, 0, 0), S.halfHeight.set(0, E.height * .5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), g++ } else if (E.isPointLight) { const S = n.point[d]; S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), d++ } else if (E.isHemisphereLight) { const S = n.hemi[x]; S.direction.setFromMatrixPosition(E.matrixWorld), S.direction.transformDirection(m), x++ } } } return { setup: o, setupView: c, state: n } } function oc(i) { const e = new tg(i), t = [], n = []; function r(u) { l.camera = u, t.length = 0, n.length = 0 } function s(u) { t.push(u) } function a(u) { n.push(u) } function o() { e.setup(t) } function c(u) { e.setupView(t, u) } const l = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} }; return { init: r, state: l, setupLights: o, setupLightsView: c, pushLight: s, pushShadow: a } } function ng(i) { let e = new WeakMap; function t(r, s = 0) { const a = e.get(r); let o; return a === void 0 ? (o = new oc(i), e.set(r, [o])) : s >= a.length ? (o = new oc(i), a.push(o)) : o = a[s], o } function n() { e = new WeakMap } return { get: t, dispose: n } } const ig = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, rg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function sg(i, e, t) { let n = new Fc; const r = new fe, s = new fe, a = new Qe, o = new Th({ depthPacking: Vl }), c = new bh, l = {}, u = t.maxTextureSize, h = { [Dn]: Lt, [Lt]: Dn, [tn]: tn }, d = new Sn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new fe }, radius: { value: 4 } }, vertexShader: ig, fragmentShader: rg }), p = d.clone(); p.defines.HORIZONTAL_PASS = 1; const g = new jt; g.setAttribute("position", new $t(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const x = new Mt(g, d), m = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = mc; let f = this.type; this.render = function (L, R, N) { if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || L.length === 0) return; const y = i.getRenderTarget(), M = i.getActiveCubeFace(), P = i.getActiveMipmapLevel(), k = i.state; k.setBlending(Pn), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(!0), k.setScissorTest(!1); const z = f !== pn && this.type === pn, Z = f === pn && this.type !== pn; for (let K = 0, X = L.length; K < X; K++) { const $ = L[K], V = $.shadow; if (V === void 0) { console.warn("THREE.WebGLShadowMap:", $, "has no shadow."); continue } if (V.autoUpdate === !1 && V.needsUpdate === !1) continue; r.copy(V.mapSize); const oe = V.getFrameExtents(); if (r.multiply(oe), s.copy(V.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / oe.x), r.x = s.x * oe.x, V.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / oe.y), r.y = s.y * oe.y, V.mapSize.y = s.y)), V.map === null || z === !0 || Z === !0) { const ye = this.type !== pn ? { minFilter: Jt, magFilter: Jt } : {}; V.map !== null && V.map.dispose(), V.map = new jn(r.x, r.y, ye), V.map.texture.name = $.name + ".shadowMap", V.camera.updateProjectionMatrix() } i.setRenderTarget(V.map), i.clear(); const he = V.getViewportCount(); for (let ye = 0; ye < he; ye++) { const Oe = V.getViewport(ye); a.set(s.x * Oe.x, s.y * Oe.y, s.x * Oe.z, s.y * Oe.w), k.viewport(a), V.updateMatrices($, ye), n = V.getFrustum(), S(R, N, V.camera, $, this.type) } V.isPointLightShadow !== !0 && this.type === pn && b(V, N), V.needsUpdate = !1 } f = this.type, m.needsUpdate = !1, i.setRenderTarget(y, M, P) }; function b(L, R) { const N = e.update(x); d.defines.VSM_SAMPLES !== L.blurSamples && (d.defines.VSM_SAMPLES = L.blurSamples, p.defines.VSM_SAMPLES = L.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), L.mapPass === null && (L.mapPass = new jn(r.x, r.y)), d.uniforms.shadow_pass.value = L.map.texture, d.uniforms.resolution.value = L.mapSize, d.uniforms.radius.value = L.radius, i.setRenderTarget(L.mapPass), i.clear(), i.renderBufferDirect(R, null, N, d, x, null), p.uniforms.shadow_pass.value = L.mapPass.texture, p.uniforms.resolution.value = L.mapSize, p.uniforms.radius.value = L.radius, i.setRenderTarget(L.map), i.clear(), i.renderBufferDirect(R, null, N, p, x, null) } function E(L, R, N, y) { let M = null; const P = N.isPointLight === !0 ? L.customDistanceMaterial : L.customDepthMaterial; if (P !== void 0) M = P; else if (M = N.isPointLight === !0 ? c : o, i.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0 || R.alphaToCoverage === !0) { const k = M.uuid, z = R.uuid; let Z = l[k]; Z === void 0 && (Z = {}, l[k] = Z); let K = Z[z]; K === void 0 && (K = M.clone(), Z[z] = K, R.addEventListener("dispose", I)), M = K } if (M.visible = R.visible, M.wireframe = R.wireframe, y === pn ? M.side = R.shadowSide !== null ? R.shadowSide : R.side : M.side = R.shadowSide !== null ? R.shadowSide : h[R.side], M.alphaMap = R.alphaMap, M.alphaTest = R.alphaToCoverage === !0 ? .5 : R.alphaTest, M.map = R.map, M.clipShadows = R.clipShadows, M.clippingPlanes = R.clippingPlanes, M.clipIntersection = R.clipIntersection, M.displacementMap = R.displacementMap, M.displacementScale = R.displacementScale, M.displacementBias = R.displacementBias, M.wireframeLinewidth = R.wireframeLinewidth, M.linewidth = R.linewidth, N.isPointLight === !0 && M.isMeshDistanceMaterial === !0) { const k = i.properties.get(M); k.light = N } return M } function S(L, R, N, y, M) { if (L.visible === !1) return; if (L.layers.test(R.layers) && (L.isMesh || L.isLine || L.isPoints) && (L.castShadow || L.receiveShadow && M === pn) && (!L.frustumCulled || n.intersectsObject(L))) { L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, L.matrixWorld); const z = e.update(L), Z = L.material; if (Array.isArray(Z)) { const K = z.groups; for (let X = 0, $ = K.length; X < $; X++) { const V = K[X], oe = Z[V.materialIndex]; if (oe && oe.visible) { const he = E(L, oe, y, M); L.onBeforeShadow(i, L, R, N, z, he, V), i.renderBufferDirect(N, null, z, he, L, V), L.onAfterShadow(i, L, R, N, z, he, V) } } } else if (Z.visible) { const K = E(L, Z, y, M); L.onBeforeShadow(i, L, R, N, z, K, null), i.renderBufferDirect(N, null, z, K, L, null), L.onAfterShadow(i, L, R, N, z, K, null) } } const k = L.children; for (let z = 0, Z = k.length; z < Z; z++)S(k[z], R, N, y, M) } function I(L) { L.target.removeEventListener("dispose", I); for (const N in l) { const y = l[N], M = L.target.uuid; M in y && (y[M].dispose(), delete y[M]) } } } const ag = { [Vs]: Hs, [Gs]: Xs, [ks]: qs, [Si]: Ws, [Hs]: Vs, [Xs]: Gs, [qs]: ks, [Ws]: Si }; function og(i, e) { function t() { let w = !1; const se = new Qe; let j = null; const de = new Qe(0, 0, 0, 0); return { setMask: function (Q) { j !== Q && !w && (i.colorMask(Q, Q, Q, Q), j = Q) }, setLocked: function (Q) { w = Q }, setClear: function (Q, q, pe, De, tt) { tt === !0 && (Q *= De, q *= De, pe *= De), se.set(Q, q, pe, De), de.equals(se) === !1 && (i.clearColor(Q, q, pe, De), de.copy(se)) }, reset: function () { w = !1, j = null, de.set(-1, 0, 0, 0) } } } function n() { let w = !1, se = !1, j = null, de = null, Q = null; return { setReversed: function (q) { if (se !== q) { const pe = e.get("EXT_clip_control"); q ? pe.clipControlEXT(pe.LOWER_LEFT_EXT, pe.ZERO_TO_ONE_EXT) : pe.clipControlEXT(pe.LOWER_LEFT_EXT, pe.NEGATIVE_ONE_TO_ONE_EXT), se = q; const De = Q; Q = null, this.setClear(De) } }, getReversed: function () { return se }, setTest: function (q) { q ? ce(i.DEPTH_TEST) : Me(i.DEPTH_TEST) }, setMask: function (q) { j !== q && !w && (i.depthMask(q), j = q) }, setFunc: function (q) { if (se && (q = ag[q]), de !== q) { switch (q) { case Vs: i.depthFunc(i.NEVER); break; case Hs: i.depthFunc(i.ALWAYS); break; case Gs: i.depthFunc(i.LESS); break; case Si: i.depthFunc(i.LEQUAL); break; case ks: i.depthFunc(i.EQUAL); break; case Ws: i.depthFunc(i.GEQUAL); break; case Xs: i.depthFunc(i.GREATER); break; case qs: i.depthFunc(i.NOTEQUAL); break; default: i.depthFunc(i.LEQUAL) }de = q } }, setLocked: function (q) { w = q }, setClear: function (q) { Q !== q && (se && (q = 1 - q), i.clearDepth(q), Q = q) }, reset: function () { w = !1, j = null, de = null, Q = null, se = !1 } } } function r() { let w = !1, se = null, j = null, de = null, Q = null, q = null, pe = null, De = null, tt = null; return { setTest: function (Xe) { w || (Xe ? ce(i.STENCIL_TEST) : Me(i.STENCIL_TEST)) }, setMask: function (Xe) { se !== Xe && !w && (i.stencilMask(Xe), se = Xe) }, setFunc: function (Xe, Ht, on) { (j !== Xe || de !== Ht || Q !== on) && (i.stencilFunc(Xe, Ht, on), j = Xe, de = Ht, Q = on) }, setOp: function (Xe, Ht, on) { (q !== Xe || pe !== Ht || De !== on) && (i.stencilOp(Xe, Ht, on), q = Xe, pe = Ht, De = on) }, setLocked: function (Xe) { w = Xe }, setClear: function (Xe) { tt !== Xe && (i.clearStencil(Xe), tt = Xe) }, reset: function () { w = !1, se = null, j = null, de = null, Q = null, q = null, pe = null, De = null, tt = null } } } const s = new t, a = new n, o = new r, c = new WeakMap, l = new WeakMap; let u = {}, h = {}, d = new WeakMap, p = [], g = null, x = !1, m = null, f = null, b = null, E = null, S = null, I = null, L = null, R = new Ye(0, 0, 0), N = 0, y = !1, M = null, P = null, k = null, z = null, Z = null; const K = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS); let X = !1, $ = 0; const V = i.getParameter(i.VERSION); V.indexOf("WebGL") !== -1 ? ($ = parseFloat(/^WebGL (\d)/.exec(V)[1]), X = $ >= 1) : V.indexOf("OpenGL ES") !== -1 && ($ = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), X = $ >= 2); let oe = null, he = {}; const ye = i.getParameter(i.SCISSOR_BOX), Oe = i.getParameter(i.VIEWPORT), Je = new Qe().fromArray(ye), W = new Qe().fromArray(Oe); function te(w, se, j, de) { const Q = new Uint8Array(4), q = i.createTexture(); i.bindTexture(w, q), i.texParameteri(w, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(w, i.TEXTURE_MAG_FILTER, i.NEAREST); for (let pe = 0; pe < j; pe++)w === i.TEXTURE_3D || w === i.TEXTURE_2D_ARRAY ? i.texImage3D(se, 0, i.RGBA, 1, 1, de, 0, i.RGBA, i.UNSIGNED_BYTE, Q) : i.texImage2D(se + pe, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Q); return q } const Se = {}; Se[i.TEXTURE_2D] = te(i.TEXTURE_2D, i.TEXTURE_2D, 1), Se[i.TEXTURE_CUBE_MAP] = te(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Se[i.TEXTURE_2D_ARRAY] = te(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Se[i.TEXTURE_3D] = te(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ce(i.DEPTH_TEST), a.setFunc(Si), We(!1), je(no), ce(i.CULL_FACE), A(Pn); function ce(w) { u[w] !== !0 && (i.enable(w), u[w] = !0) } function Me(w) { u[w] !== !1 && (i.disable(w), u[w] = !1) } function Ge(w, se) { return h[w] !== se ? (i.bindFramebuffer(w, se), h[w] = se, w === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = se), w === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = se), !0) : !1 } function Re(w, se) { let j = p, de = !1; if (w) { j = d.get(se), j === void 0 && (j = [], d.set(se, j)); const Q = w.textures; if (j.length !== Q.length || j[0] !== i.COLOR_ATTACHMENT0) { for (let q = 0, pe = Q.length; q < pe; q++)j[q] = i.COLOR_ATTACHMENT0 + q; j.length = Q.length, de = !0 } } else j[0] !== i.BACK && (j[0] = i.BACK, de = !0); de && i.drawBuffers(j) } function rt(w) { return g !== w ? (i.useProgram(w), g = w, !0) : !1 } const st = { [Xn]: i.FUNC_ADD, [dl]: i.FUNC_SUBTRACT, [fl]: i.FUNC_REVERSE_SUBTRACT }; st[pl] = i.MIN, st[ml] = i.MAX; const ke = { [gl]: i.ZERO, [_l]: i.ONE, [vl]: i.SRC_COLOR, [Bs]: i.SRC_ALPHA, [Tl]: i.SRC_ALPHA_SATURATE, [yl]: i.DST_COLOR, [Sl]: i.DST_ALPHA, [xl]: i.ONE_MINUS_SRC_COLOR, [zs]: i.ONE_MINUS_SRC_ALPHA, [El]: i.ONE_MINUS_DST_COLOR, [Ml]: i.ONE_MINUS_DST_ALPHA, [bl]: i.CONSTANT_COLOR, [Al]: i.ONE_MINUS_CONSTANT_COLOR, [wl]: i.CONSTANT_ALPHA, [Rl]: i.ONE_MINUS_CONSTANT_ALPHA }; function A(w, se, j, de, Q, q, pe, De, tt, Xe) { if (w === Pn) { x === !0 && (Me(i.BLEND), x = !1); return } if (x === !1 && (ce(i.BLEND), x = !0), w !== hl) { if (w !== m || Xe !== y) { if ((f !== Xn || S !== Xn) && (i.blendEquation(i.FUNC_ADD), f = Xn, S = Xn), Xe) switch (w) { case _i: i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA); break; case io: i.blendFunc(i.ONE, i.ONE); break; case ro: i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE); break; case so: i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE); break; default: console.error("THREE.WebGLState: Invalid blending: ", w); break } else switch (w) { case _i: i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA); break; case io: i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE); break; case ro: console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true"); break; case so: console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true"); break; default: console.error("THREE.WebGLState: Invalid blending: ", w); break }b = null, E = null, I = null, L = null, R.set(0, 0, 0), N = 0, m = w, y = Xe } return } Q = Q || se, q = q || j, pe = pe || de, (se !== f || Q !== S) && (i.blendEquationSeparate(st[se], st[Q]), f = se, S = Q), (j !== b || de !== E || q !== I || pe !== L) && (i.blendFuncSeparate(ke[j], ke[de], ke[q], ke[pe]), b = j, E = de, I = q, L = pe), (De.equals(R) === !1 || tt !== N) && (i.blendColor(De.r, De.g, De.b, tt), R.copy(De), N = tt), m = w, y = !1 } function Et(w, se) { w.side === tn ? Me(i.CULL_FACE) : ce(i.CULL_FACE); let j = w.side === Lt; se && (j = !j), We(j), w.blending === _i && w.transparent === !1 ? A(Pn) : A(w.blending, w.blendEquation, w.blendSrc, w.blendDst, w.blendEquationAlpha, w.blendSrcAlpha, w.blendDstAlpha, w.blendColor, w.blendAlpha, w.premultipliedAlpha), a.setFunc(w.depthFunc), a.setTest(w.depthTest), a.setMask(w.depthWrite), s.setMask(w.colorWrite); const de = w.stencilWrite; o.setTest(de), de && (o.setMask(w.stencilWriteMask), o.setFunc(w.stencilFunc, w.stencilRef, w.stencilFuncMask), o.setOp(w.stencilFail, w.stencilZFail, w.stencilZPass)), ze(w.polygonOffset, w.polygonOffsetFactor, w.polygonOffsetUnits), w.alphaToCoverage === !0 ? ce(i.SAMPLE_ALPHA_TO_COVERAGE) : Me(i.SAMPLE_ALPHA_TO_COVERAGE) } function We(w) { M !== w && (w ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = w) } function je(w) { w !== cl ? (ce(i.CULL_FACE), w !== P && (w === no ? i.cullFace(i.BACK) : w === ll ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Me(i.CULL_FACE), P = w } function _e(w) { w !== k && (X && i.lineWidth(w), k = w) } function ze(w, se, j) { w ? (ce(i.POLYGON_OFFSET_FILL), (z !== se || Z !== j) && (i.polygonOffset(se, j), z = se, Z = j)) : Me(i.POLYGON_OFFSET_FILL) } function Te(w) { w ? ce(i.SCISSOR_TEST) : Me(i.SCISSOR_TEST) } function Ie(w) { w === void 0 && (w = i.TEXTURE0 + K - 1), oe !== w && (i.activeTexture(w), oe = w) } function ht(w, se, j) { j === void 0 && (oe === null ? j = i.TEXTURE0 + K - 1 : j = oe); let de = he[j]; de === void 0 && (de = { type: void 0, texture: void 0 }, he[j] = de), (de.type !== w || de.texture !== se) && (oe !== j && (i.activeTexture(j), oe = j), i.bindTexture(w, se || Se[w]), de.type = w, de.texture = se) } function T() { const w = he[oe]; w !== void 0 && w.type !== void 0 && (i.bindTexture(w.type, null), w.type = void 0, w.texture = void 0) } function _() { try { i.compressedTexImage2D(...arguments) } catch (w) { console.error("THREE.WebGLState:", w) } } function F() { try { i.compressedTexImage3D(...arguments) } catch (w) { console.error("THREE.WebGLState:", w) } } function G() { try { i.texSubImage2D(...arguments) } catch (w) { console.error("THREE.WebGLState:", w) } } function Y() { try { i.texSubImage3D(...arguments) } catch (w) { console.error("THREE.WebGLState:", w) } } function H() { try { i.compressedTexSubImage2D(...arguments) } catch (w) { console.error("THREE.WebGLState:", w) } } function ve() { try { i.compressedTexSubImage3D(...arguments) } catch (w) { console.error("THREE.WebGLState:", w) } } function re() { try { i.texStorage2D(...arguments) } catch (w) { console.error("THREE.WebGLState:", w) } } function ge() { try { i.texStorage3D(...arguments) } catch (w) { console.error("THREE.WebGLState:", w) } } function xe() { try { i.texImage2D(...arguments) } catch (w) { console.error("THREE.WebGLState:", w) } } function J() { try { i.texImage3D(...arguments) } catch (w) { console.error("THREE.WebGLState:", w) } } function le(w) { Je.equals(w) === !1 && (i.scissor(w.x, w.y, w.z, w.w), Je.copy(w)) } function we(w) { W.equals(w) === !1 && (i.viewport(w.x, w.y, w.z, w.w), W.copy(w)) } function Ae(w, se) { let j = l.get(se); j === void 0 && (j = new WeakMap, l.set(se, j)); let de = j.get(w); de === void 0 && (de = i.getUniformBlockIndex(se, w.name), j.set(w, de)) } function ie(w, se) { const de = l.get(se).get(w); c.get(se) !== de && (i.uniformBlockBinding(se, de, w.__bindingPointIndex), c.set(se, de)) } function Le() { i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, oe = null, he = {}, h = {}, d = new WeakMap, p = [], g = null, x = !1, m = null, f = null, b = null, E = null, S = null, I = null, L = null, R = new Ye(0, 0, 0), N = 0, y = !1, M = null, P = null, k = null, z = null, Z = null, Je.set(0, 0, i.canvas.width, i.canvas.height), W.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset() } return { buffers: { color: s, depth: a, stencil: o }, enable: ce, disable: Me, bindFramebuffer: Ge, drawBuffers: Re, useProgram: rt, setBlending: A, setMaterial: Et, setFlipSided: We, setCullFace: je, setLineWidth: _e, setPolygonOffset: ze, setScissorTest: Te, activeTexture: Ie, bindTexture: ht, unbindTexture: T, compressedTexImage2D: _, compressedTexImage3D: F, texImage2D: xe, texImage3D: J, updateUBOMapping: Ae, uniformBlockBinding: ie, texStorage2D: re, texStorage3D: ge, texSubImage2D: G, texSubImage3D: Y, compressedTexSubImage2D: H, compressedTexSubImage3D: ve, scissor: le, viewport: we, reset: Le } } function cg(i, e, t, n, r, s, a) { const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new fe, u = new WeakMap; let h; const d = new WeakMap; let p = !1; try { p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function g(T, _) { return p ? new OffscreenCanvas(T, _) : Qi("canvas") } function x(T, _, F) { let G = 1; const Y = ht(T); if ((Y.width > F || Y.height > F) && (G = F / Math.max(Y.width, Y.height)), G < 1) if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) { const H = Math.floor(G * Y.width), ve = Math.floor(G * Y.height); h === void 0 && (h = g(H, ve)); const re = _ ? g(H, ve) : h; return re.width = H, re.height = ve, re.getContext("2d").drawImage(T, 0, 0, H, ve), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Y.width + "x" + Y.height + ") to (" + H + "x" + ve + ")."), re } else return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Y.width + "x" + Y.height + ")."), T; return T } function m(T) { return T.generateMipmaps } function f(T) { i.generateMipmap(T) } function b(T) { return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D } function E(T, _, F, G, Y = !1) { if (T !== null) { if (i[T] !== void 0) return i[T]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'") } let H = _; if (_ === i.RED && (F === i.FLOAT && (H = i.R32F), F === i.HALF_FLOAT && (H = i.R16F), F === i.UNSIGNED_BYTE && (H = i.R8)), _ === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.R8UI), F === i.UNSIGNED_SHORT && (H = i.R16UI), F === i.UNSIGNED_INT && (H = i.R32UI), F === i.BYTE && (H = i.R8I), F === i.SHORT && (H = i.R16I), F === i.INT && (H = i.R32I)), _ === i.RG && (F === i.FLOAT && (H = i.RG32F), F === i.HALF_FLOAT && (H = i.RG16F), F === i.UNSIGNED_BYTE && (H = i.RG8)), _ === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.RG8UI), F === i.UNSIGNED_SHORT && (H = i.RG16UI), F === i.UNSIGNED_INT && (H = i.RG32UI), F === i.BYTE && (H = i.RG8I), F === i.SHORT && (H = i.RG16I), F === i.INT && (H = i.RG32I)), _ === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.RGB8UI), F === i.UNSIGNED_SHORT && (H = i.RGB16UI), F === i.UNSIGNED_INT && (H = i.RGB32UI), F === i.BYTE && (H = i.RGB8I), F === i.SHORT && (H = i.RGB16I), F === i.INT && (H = i.RGB32I)), _ === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.RGBA8UI), F === i.UNSIGNED_SHORT && (H = i.RGBA16UI), F === i.UNSIGNED_INT && (H = i.RGBA32UI), F === i.BYTE && (H = i.RGBA8I), F === i.SHORT && (H = i.RGBA16I), F === i.INT && (H = i.RGBA32I)), _ === i.RGB && F === i.UNSIGNED_INT_5_9_9_9_REV && (H = i.RGB9_E5), _ === i.RGBA) { const ve = Y ? kr : He.getTransfer(G); F === i.FLOAT && (H = i.RGBA32F), F === i.HALF_FLOAT && (H = i.RGBA16F), F === i.UNSIGNED_BYTE && (H = ve === Ke ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (H = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (H = i.RGB5_A1) } return (H === i.R16F || H === i.R32F || H === i.RG16F || H === i.RG32F || H === i.RGBA16F || H === i.RGBA32F) && e.get("EXT_color_buffer_float"), H } function S(T, _) { let F; return T ? _ === null || _ === $n || _ === Ki ? F = i.DEPTH24_STENCIL8 : _ === mn ? F = i.DEPTH32F_STENCIL8 : _ === Zi && (F = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === $n || _ === Ki ? F = i.DEPTH_COMPONENT24 : _ === mn ? F = i.DEPTH_COMPONENT32F : _ === Zi && (F = i.DEPTH_COMPONENT16), F } function I(T, _) { return m(T) === !0 || T.isFramebufferTexture && T.minFilter !== Jt && T.minFilter !== rn ? Math.log2(Math.max(_.width, _.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? _.mipmaps.length : 1 } function L(T) { const _ = T.target; _.removeEventListener("dispose", L), N(_), _.isVideoTexture && u.delete(_) } function R(T) { const _ = T.target; _.removeEventListener("dispose", R), M(_) } function N(T) { const _ = n.get(T); if (_.__webglInit === void 0) return; const F = T.source, G = d.get(F); if (G) { const Y = G[_.__cacheKey]; Y.usedTimes--, Y.usedTimes === 0 && y(T), Object.keys(G).length === 0 && d.delete(F) } n.remove(T) } function y(T) { const _ = n.get(T); i.deleteTexture(_.__webglTexture); const F = T.source, G = d.get(F); delete G[_.__cacheKey], a.memory.textures-- } function M(T) { const _ = n.get(T); if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget) for (let G = 0; G < 6; G++) { if (Array.isArray(_.__webglFramebuffer[G])) for (let Y = 0; Y < _.__webglFramebuffer[G].length; Y++)i.deleteFramebuffer(_.__webglFramebuffer[G][Y]); else i.deleteFramebuffer(_.__webglFramebuffer[G]); _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[G]) } else { if (Array.isArray(_.__webglFramebuffer)) for (let G = 0; G < _.__webglFramebuffer.length; G++)i.deleteFramebuffer(_.__webglFramebuffer[G]); else i.deleteFramebuffer(_.__webglFramebuffer); if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer) for (let G = 0; G < _.__webglColorRenderbuffer.length; G++)_.__webglColorRenderbuffer[G] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]); _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer) } const F = T.textures; for (let G = 0, Y = F.length; G < Y; G++) { const H = n.get(F[G]); H.__webglTexture && (i.deleteTexture(H.__webglTexture), a.memory.textures--), n.remove(F[G]) } n.remove(T) } let P = 0; function k() { P = 0 } function z() { const T = P; return T >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), P += 1, T } function Z(T) { const _ = []; return _.push(T.wrapS), _.push(T.wrapT), _.push(T.wrapR || 0), _.push(T.magFilter), _.push(T.minFilter), _.push(T.anisotropy), _.push(T.internalFormat), _.push(T.format), _.push(T.type), _.push(T.generateMipmaps), _.push(T.premultiplyAlpha), _.push(T.flipY), _.push(T.unpackAlignment), _.push(T.colorSpace), _.join() } function K(T, _) { const F = n.get(T); if (T.isVideoTexture && Te(T), T.isRenderTargetTexture === !1 && T.version > 0 && F.__version !== T.version) { const G = T.image; if (G === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (G.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { Se(F, T, _); return } } t.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + _) } function X(T, _) { const F = n.get(T); if (T.version > 0 && F.__version !== T.version) { Se(F, T, _); return } t.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + _) } function $(T, _) { const F = n.get(T); if (T.version > 0 && F.__version !== T.version) { Se(F, T, _); return } t.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + _) } function V(T, _) { const F = n.get(T); if (T.version > 0 && F.__version !== T.version) { ce(F, T, _); return } t.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + _) } const oe = { [Ks]: i.REPEAT, [Yn]: i.CLAMP_TO_EDGE, [Js]: i.MIRRORED_REPEAT }, he = { [Jt]: i.NEAREST, [Bl]: i.NEAREST_MIPMAP_NEAREST, [lr]: i.NEAREST_MIPMAP_LINEAR, [rn]: i.LINEAR, [ns]: i.LINEAR_MIPMAP_NEAREST, [Zn]: i.LINEAR_MIPMAP_LINEAR }, ye = { [kl]: i.NEVER, [Kl]: i.ALWAYS, [Wl]: i.LESS, [Ac]: i.LEQUAL, [Xl]: i.EQUAL, [Zl]: i.GEQUAL, [ql]: i.GREATER, [Yl]: i.NOTEQUAL }; function Oe(T, _) { if (_.type === mn && e.has("OES_texture_float_linear") === !1 && (_.magFilter === rn || _.magFilter === ns || _.magFilter === lr || _.magFilter === Zn || _.minFilter === rn || _.minFilter === ns || _.minFilter === lr || _.minFilter === Zn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, oe[_.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, oe[_.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, oe[_.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, he[_.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, he[_.minFilter]), _.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, ye[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) { if (_.magFilter === Jt || _.minFilter !== lr && _.minFilter !== Zn || _.type === mn && e.has("OES_texture_float_linear") === !1) return; if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) { const F = e.get("EXT_texture_filter_anisotropic"); i.texParameterf(T, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy } } } function Je(T, _) { let F = !1; T.__webglInit === void 0 && (T.__webglInit = !0, _.addEventListener("dispose", L)); const G = _.source; let Y = d.get(G); Y === void 0 && (Y = {}, d.set(G, Y)); const H = Z(_); if (H !== T.__cacheKey) { Y[H] === void 0 && (Y[H] = { texture: i.createTexture(), usedTimes: 0 }, a.memory.textures++, F = !0), Y[H].usedTimes++; const ve = Y[T.__cacheKey]; ve !== void 0 && (Y[T.__cacheKey].usedTimes--, ve.usedTimes === 0 && y(_)), T.__cacheKey = H, T.__webglTexture = Y[H].texture } return F } function W(T, _, F) { return Math.floor(Math.floor(T / F) / _) } function te(T, _, F, G) { const H = T.updateRanges; if (H.length === 0) t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, F, G, _.data); else { H.sort((J, le) => J.start - le.start); let ve = 0; for (let J = 1; J < H.length; J++) { const le = H[ve], we = H[J], Ae = le.start + le.count, ie = W(we.start, _.width, 4), Le = W(le.start, _.width, 4); we.start <= Ae + 1 && ie === Le && W(we.start + we.count - 1, _.width, 4) === ie ? le.count = Math.max(le.count, we.start + we.count - le.start) : (++ve, H[ve] = we) } H.length = ve + 1; const re = i.getParameter(i.UNPACK_ROW_LENGTH), ge = i.getParameter(i.UNPACK_SKIP_PIXELS), xe = i.getParameter(i.UNPACK_SKIP_ROWS); i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width); for (let J = 0, le = H.length; J < le; J++) { const we = H[J], Ae = Math.floor(we.start / 4), ie = Math.ceil(we.count / 4), Le = Ae % _.width, w = Math.floor(Ae / _.width), se = ie, j = 1; i.pixelStorei(i.UNPACK_SKIP_PIXELS, Le), i.pixelStorei(i.UNPACK_SKIP_ROWS, w), t.texSubImage2D(i.TEXTURE_2D, 0, Le, w, se, j, F, G, _.data) } T.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, re), i.pixelStorei(i.UNPACK_SKIP_PIXELS, ge), i.pixelStorei(i.UNPACK_SKIP_ROWS, xe) } } function Se(T, _, F) { let G = i.TEXTURE_2D; (_.isDataArrayTexture || _.isCompressedArrayTexture) && (G = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (G = i.TEXTURE_3D); const Y = Je(T, _), H = _.source; t.bindTexture(G, T.__webglTexture, i.TEXTURE0 + F); const ve = n.get(H); if (H.version !== ve.__version || Y === !0) { t.activeTexture(i.TEXTURE0 + F); const re = He.getPrimaries(He.workingColorSpace), ge = _.colorSpace === wn ? null : He.getPrimaries(_.colorSpace), xe = _.colorSpace === wn || re === ge ? i.NONE : i.BROWSER_DEFAULT_WEBGL; i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe); let J = x(_.image, !1, r.maxTextureSize); J = Ie(_, J); const le = s.convert(_.format, _.colorSpace), we = s.convert(_.type); let Ae = E(_.internalFormat, le, we, _.colorSpace, _.isVideoTexture); Oe(G, _); let ie; const Le = _.mipmaps, w = _.isVideoTexture !== !0, se = ve.__version === void 0 || Y === !0, j = H.dataReady, de = I(_, J); if (_.isDepthTexture) Ae = S(_.format === $i, _.type), se && (w ? t.texStorage2D(i.TEXTURE_2D, 1, Ae, J.width, J.height) : t.texImage2D(i.TEXTURE_2D, 0, Ae, J.width, J.height, 0, le, we, null)); else if (_.isDataTexture) if (Le.length > 0) { w && se && t.texStorage2D(i.TEXTURE_2D, de, Ae, Le[0].width, Le[0].height); for (let Q = 0, q = Le.length; Q < q; Q++)ie = Le[Q], w ? j && t.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, ie.width, ie.height, le, we, ie.data) : t.texImage2D(i.TEXTURE_2D, Q, Ae, ie.width, ie.height, 0, le, we, ie.data); _.generateMipmaps = !1 } else w ? (se && t.texStorage2D(i.TEXTURE_2D, de, Ae, J.width, J.height), j && te(_, J, le, we)) : t.texImage2D(i.TEXTURE_2D, 0, Ae, J.width, J.height, 0, le, we, J.data); else if (_.isCompressedTexture) if (_.isCompressedArrayTexture) { w && se && t.texStorage3D(i.TEXTURE_2D_ARRAY, de, Ae, Le[0].width, Le[0].height, J.depth); for (let Q = 0, q = Le.length; Q < q; Q++)if (ie = Le[Q], _.format !== Zt) if (le !== null) if (w) { if (j) if (_.layerUpdates.size > 0) { const pe = Oo(ie.width, ie.height, _.format, _.type); for (const De of _.layerUpdates) { const tt = ie.data.subarray(De * pe / ie.data.BYTES_PER_ELEMENT, (De + 1) * pe / ie.data.BYTES_PER_ELEMENT); t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, De, ie.width, ie.height, 1, le, tt) } _.clearLayerUpdates() } else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, 0, ie.width, ie.height, J.depth, le, ie.data) } else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, Q, Ae, ie.width, ie.height, J.depth, 0, ie.data, 0, 0); else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"); else w ? j && t.texSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, 0, ie.width, ie.height, J.depth, le, we, ie.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, Q, Ae, ie.width, ie.height, J.depth, 0, le, we, ie.data) } else { w && se && t.texStorage2D(i.TEXTURE_2D, de, Ae, Le[0].width, Le[0].height); for (let Q = 0, q = Le.length; Q < q; Q++)ie = Le[Q], _.format !== Zt ? le !== null ? w ? j && t.compressedTexSubImage2D(i.TEXTURE_2D, Q, 0, 0, ie.width, ie.height, le, ie.data) : t.compressedTexImage2D(i.TEXTURE_2D, Q, Ae, ie.width, ie.height, 0, ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : w ? j && t.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, ie.width, ie.height, le, we, ie.data) : t.texImage2D(i.TEXTURE_2D, Q, Ae, ie.width, ie.height, 0, le, we, ie.data) } else if (_.isDataArrayTexture) if (w) { if (se && t.texStorage3D(i.TEXTURE_2D_ARRAY, de, Ae, J.width, J.height, J.depth), j) if (_.layerUpdates.size > 0) { const Q = Oo(J.width, J.height, _.format, _.type); for (const q of _.layerUpdates) { const pe = J.data.subarray(q * Q / J.data.BYTES_PER_ELEMENT, (q + 1) * Q / J.data.BYTES_PER_ELEMENT); t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, q, J.width, J.height, 1, le, we, pe) } _.clearLayerUpdates() } else t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, le, we, J.data) } else t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Ae, J.width, J.height, J.depth, 0, le, we, J.data); else if (_.isData3DTexture) w ? (se && t.texStorage3D(i.TEXTURE_3D, de, Ae, J.width, J.height, J.depth), j && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, le, we, J.data)) : t.texImage3D(i.TEXTURE_3D, 0, Ae, J.width, J.height, J.depth, 0, le, we, J.data); else if (_.isFramebufferTexture) { if (se) if (w) t.texStorage2D(i.TEXTURE_2D, de, Ae, J.width, J.height); else { let Q = J.width, q = J.height; for (let pe = 0; pe < de; pe++)t.texImage2D(i.TEXTURE_2D, pe, Ae, Q, q, 0, le, we, null), Q >>= 1, q >>= 1 } } else if (Le.length > 0) { if (w && se) { const Q = ht(Le[0]); t.texStorage2D(i.TEXTURE_2D, de, Ae, Q.width, Q.height) } for (let Q = 0, q = Le.length; Q < q; Q++)ie = Le[Q], w ? j && t.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, le, we, ie) : t.texImage2D(i.TEXTURE_2D, Q, Ae, le, we, ie); _.generateMipmaps = !1 } else if (w) { if (se) { const Q = ht(J); t.texStorage2D(i.TEXTURE_2D, de, Ae, Q.width, Q.height) } j && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, le, we, J) } else t.texImage2D(i.TEXTURE_2D, 0, Ae, le, we, J); m(_) && f(G), ve.__version = H.version, _.onUpdate && _.onUpdate(_) } T.__version = _.version } function ce(T, _, F) { if (_.image.length !== 6) return; const G = Je(T, _), Y = _.source; t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + F); const H = n.get(Y); if (Y.version !== H.__version || G === !0) { t.activeTexture(i.TEXTURE0 + F); const ve = He.getPrimaries(He.workingColorSpace), re = _.colorSpace === wn ? null : He.getPrimaries(_.colorSpace), ge = _.colorSpace === wn || ve === re ? i.NONE : i.BROWSER_DEFAULT_WEBGL; i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ge); const xe = _.isCompressedTexture || _.image[0].isCompressedTexture, J = _.image[0] && _.image[0].isDataTexture, le = []; for (let q = 0; q < 6; q++)!xe && !J ? le[q] = x(_.image[q], !0, r.maxCubemapSize) : le[q] = J ? _.image[q].image : _.image[q], le[q] = Ie(_, le[q]); const we = le[0], Ae = s.convert(_.format, _.colorSpace), ie = s.convert(_.type), Le = E(_.internalFormat, Ae, ie, _.colorSpace), w = _.isVideoTexture !== !0, se = H.__version === void 0 || G === !0, j = Y.dataReady; let de = I(_, we); Oe(i.TEXTURE_CUBE_MAP, _); let Q; if (xe) { w && se && t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Le, we.width, we.height); for (let q = 0; q < 6; q++) { Q = le[q].mipmaps; for (let pe = 0; pe < Q.length; pe++) { const De = Q[pe]; _.format !== Zt ? Ae !== null ? w ? j && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pe, 0, 0, De.width, De.height, Ae, De.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pe, Le, De.width, De.height, 0, De.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : w ? j && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pe, 0, 0, De.width, De.height, Ae, ie, De.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pe, Le, De.width, De.height, 0, Ae, ie, De.data) } } } else { if (Q = _.mipmaps, w && se) { Q.length > 0 && de++; const q = ht(le[0]); t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Le, q.width, q.height) } for (let q = 0; q < 6; q++)if (J) { w ? j && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, le[q].width, le[q].height, Ae, ie, le[q].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Le, le[q].width, le[q].height, 0, Ae, ie, le[q].data); for (let pe = 0; pe < Q.length; pe++) { const tt = Q[pe].image[q].image; w ? j && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pe + 1, 0, 0, tt.width, tt.height, Ae, ie, tt.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pe + 1, Le, tt.width, tt.height, 0, Ae, ie, tt.data) } } else { w ? j && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, Ae, ie, le[q]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Le, Ae, ie, le[q]); for (let pe = 0; pe < Q.length; pe++) { const De = Q[pe]; w ? j && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pe + 1, 0, 0, Ae, ie, De.image[q]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pe + 1, Le, Ae, ie, De.image[q]) } } } m(_) && f(i.TEXTURE_CUBE_MAP), H.__version = Y.version, _.onUpdate && _.onUpdate(_) } T.__version = _.version } function Me(T, _, F, G, Y, H) { const ve = s.convert(F.format, F.colorSpace), re = s.convert(F.type), ge = E(F.internalFormat, ve, re, F.colorSpace), xe = n.get(_), J = n.get(F); if (J.__renderTarget = _, !xe.__hasExternalTextures) { const le = Math.max(1, _.width >> H), we = Math.max(1, _.height >> H); Y === i.TEXTURE_3D || Y === i.TEXTURE_2D_ARRAY ? t.texImage3D(Y, H, ge, le, we, _.depth, 0, ve, re, null) : t.texImage2D(Y, H, ge, le, we, 0, ve, re, null) } t.bindFramebuffer(i.FRAMEBUFFER, T), ze(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, G, Y, J.__webglTexture, 0, _e(_)) : (Y === i.TEXTURE_2D || Y >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, G, Y, J.__webglTexture, H), t.bindFramebuffer(i.FRAMEBUFFER, null) } function Ge(T, _, F) { if (i.bindRenderbuffer(i.RENDERBUFFER, T), _.depthBuffer) { const G = _.depthTexture, Y = G && G.isDepthTexture ? G.type : null, H = S(_.stencilBuffer, Y), ve = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, re = _e(_); ze(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, re, H, _.width, _.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, re, H, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, H, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, ve, i.RENDERBUFFER, T) } else { const G = _.textures; for (let Y = 0; Y < G.length; Y++) { const H = G[Y], ve = s.convert(H.format, H.colorSpace), re = s.convert(H.type), ge = E(H.internalFormat, ve, re, H.colorSpace), xe = _e(_); F && ze(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xe, ge, _.width, _.height) : ze(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xe, ge, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, ge, _.width, _.height) } } i.bindRenderbuffer(i.RENDERBUFFER, null) } function Re(T, _) { if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); const G = n.get(_.depthTexture); G.__renderTarget = _, (!G.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), K(_.depthTexture, 0); const Y = G.__webglTexture, H = _e(_); if (_.depthTexture.format === Ji) ze(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Y, 0, H) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Y, 0); else if (_.depthTexture.format === $i) ze(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Y, 0, H) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Y, 0); else throw new Error("Unknown depthTexture format") } function rt(T) { const _ = n.get(T), F = T.isWebGLCubeRenderTarget === !0; if (_.__boundDepthTexture !== T.depthTexture) { const G = T.depthTexture; if (_.__depthDisposeCallback && _.__depthDisposeCallback(), G) { const Y = () => { delete _.__boundDepthTexture, delete _.__depthDisposeCallback, G.removeEventListener("dispose", Y) }; G.addEventListener("dispose", Y), _.__depthDisposeCallback = Y } _.__boundDepthTexture = G } if (T.depthTexture && !_.__autoAllocateDepthBuffer) { if (F) throw new Error("target.depthTexture not supported in Cube render targets"); const G = T.texture.mipmaps; G && G.length > 0 ? Re(_.__webglFramebuffer[0], T) : Re(_.__webglFramebuffer, T) } else if (F) { _.__webglDepthbuffer = []; for (let G = 0; G < 6; G++)if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[G]), _.__webglDepthbuffer[G] === void 0) _.__webglDepthbuffer[G] = i.createRenderbuffer(), Ge(_.__webglDepthbuffer[G], T, !1); else { const Y = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, H = _.__webglDepthbuffer[G]; i.bindRenderbuffer(i.RENDERBUFFER, H), i.framebufferRenderbuffer(i.FRAMEBUFFER, Y, i.RENDERBUFFER, H) } } else { const G = T.texture.mipmaps; if (G && G.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = i.createRenderbuffer(), Ge(_.__webglDepthbuffer, T, !1); else { const Y = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, H = _.__webglDepthbuffer; i.bindRenderbuffer(i.RENDERBUFFER, H), i.framebufferRenderbuffer(i.FRAMEBUFFER, Y, i.RENDERBUFFER, H) } } t.bindFramebuffer(i.FRAMEBUFFER, null) } function st(T, _, F) { const G = n.get(T); _ !== void 0 && Me(G.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && rt(T) } function ke(T) { const _ = T.texture, F = n.get(T), G = n.get(_); T.addEventListener("dispose", R); const Y = T.textures, H = T.isWebGLCubeRenderTarget === !0, ve = Y.length > 1; if (ve || (G.__webglTexture === void 0 && (G.__webglTexture = i.createTexture()), G.__version = _.version, a.memory.textures++), H) { F.__webglFramebuffer = []; for (let re = 0; re < 6; re++)if (_.mipmaps && _.mipmaps.length > 0) { F.__webglFramebuffer[re] = []; for (let ge = 0; ge < _.mipmaps.length; ge++)F.__webglFramebuffer[re][ge] = i.createFramebuffer() } else F.__webglFramebuffer[re] = i.createFramebuffer() } else { if (_.mipmaps && _.mipmaps.length > 0) { F.__webglFramebuffer = []; for (let re = 0; re < _.mipmaps.length; re++)F.__webglFramebuffer[re] = i.createFramebuffer() } else F.__webglFramebuffer = i.createFramebuffer(); if (ve) for (let re = 0, ge = Y.length; re < ge; re++) { const xe = n.get(Y[re]); xe.__webglTexture === void 0 && (xe.__webglTexture = i.createTexture(), a.memory.textures++) } if (T.samples > 0 && ze(T) === !1) { F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer); for (let re = 0; re < Y.length; re++) { const ge = Y[re]; F.__webglColorRenderbuffer[re] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[re]); const xe = s.convert(ge.format, ge.colorSpace), J = s.convert(ge.type), le = E(ge.internalFormat, xe, J, ge.colorSpace, T.isXRRenderTarget === !0), we = _e(T); i.renderbufferStorageMultisample(i.RENDERBUFFER, we, le, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + re, i.RENDERBUFFER, F.__webglColorRenderbuffer[re]) } i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), Ge(F.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null) } } if (H) { t.bindTexture(i.TEXTURE_CUBE_MAP, G.__webglTexture), Oe(i.TEXTURE_CUBE_MAP, _); for (let re = 0; re < 6; re++)if (_.mipmaps && _.mipmaps.length > 0) for (let ge = 0; ge < _.mipmaps.length; ge++)Me(F.__webglFramebuffer[re][ge], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + re, ge); else Me(F.__webglFramebuffer[re], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0); m(_) && f(i.TEXTURE_CUBE_MAP), t.unbindTexture() } else if (ve) { for (let re = 0, ge = Y.length; re < ge; re++) { const xe = Y[re], J = n.get(xe); t.bindTexture(i.TEXTURE_2D, J.__webglTexture), Oe(i.TEXTURE_2D, xe), Me(F.__webglFramebuffer, T, xe, i.COLOR_ATTACHMENT0 + re, i.TEXTURE_2D, 0), m(xe) && f(i.TEXTURE_2D) } t.unbindTexture() } else { let re = i.TEXTURE_2D; if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (re = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(re, G.__webglTexture), Oe(re, _), _.mipmaps && _.mipmaps.length > 0) for (let ge = 0; ge < _.mipmaps.length; ge++)Me(F.__webglFramebuffer[ge], T, _, i.COLOR_ATTACHMENT0, re, ge); else Me(F.__webglFramebuffer, T, _, i.COLOR_ATTACHMENT0, re, 0); m(_) && f(re), t.unbindTexture() } T.depthBuffer && rt(T) } function A(T) { const _ = T.textures; for (let F = 0, G = _.length; F < G; F++) { const Y = _[F]; if (m(Y)) { const H = b(T), ve = n.get(Y).__webglTexture; t.bindTexture(H, ve), f(H), t.unbindTexture() } } } const Et = [], We = []; function je(T) { if (T.samples > 0) { if (ze(T) === !1) { const _ = T.textures, F = T.width, G = T.height; let Y = i.COLOR_BUFFER_BIT; const H = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ve = n.get(T), re = _.length > 1; if (re) for (let xe = 0; xe < _.length; xe++)t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.TEXTURE_2D, null, 0); t.bindFramebuffer(i.READ_FRAMEBUFFER, ve.__webglMultisampledFramebuffer); const ge = T.texture.mipmaps; ge && ge.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ve.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ve.__webglFramebuffer); for (let xe = 0; xe < _.length; xe++) { if (T.resolveDepthBuffer && (T.depthBuffer && (Y |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (Y |= i.STENCIL_BUFFER_BIT)), re) { i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, ve.__webglColorRenderbuffer[xe]); const J = n.get(_[xe]).__webglTexture; i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, J, 0) } i.blitFramebuffer(0, 0, F, G, 0, 0, F, G, Y, i.NEAREST), c === !0 && (Et.length = 0, We.length = 0, Et.push(i.COLOR_ATTACHMENT0 + xe), T.depthBuffer && T.resolveDepthBuffer === !1 && (Et.push(H), We.push(H), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, We)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Et)) } if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), re) for (let xe = 0; xe < _.length; xe++) { t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.RENDERBUFFER, ve.__webglColorRenderbuffer[xe]); const J = n.get(_[xe]).__webglTexture; t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.TEXTURE_2D, J, 0) } t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ve.__webglMultisampledFramebuffer) } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && c) { const _ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT; i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]) } } } function _e(T) { return Math.min(r.maxSamples, T.samples) } function ze(T) { const _ = n.get(T); return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1 } function Te(T) { const _ = a.render.frame; u.get(T) !== _ && (u.set(T, _), T.update()) } function Ie(T, _) { const F = T.colorSpace, G = T.format, Y = T.type; return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || F !== Ei && F !== wn && (He.getTransfer(F) === Ke ? (G !== Zt || Y !== vn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), _ } function ht(T) { return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (l.width = T.naturalWidth || T.width, l.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (l.width = T.displayWidth, l.height = T.displayHeight) : (l.width = T.width, l.height = T.height), l } this.allocateTextureUnit = z, this.resetTextureUnits = k, this.setTexture2D = K, this.setTexture2DArray = X, this.setTexture3D = $, this.setTextureCube = V, this.rebindTextures = st, this.setupRenderTarget = ke, this.updateRenderTargetMipmap = A, this.updateMultisampleRenderTarget = je, this.setupDepthRenderbuffer = rt, this.setupFrameBufferTexture = Me, this.useMultisampledRTT = ze } function lg(i, e) { function t(n, r = wn) { let s; const a = He.getTransfer(r); if (n === vn) return i.UNSIGNED_BYTE; if (n === Ua) return i.UNSIGNED_SHORT_4_4_4_4; if (n === Ia) return i.UNSIGNED_SHORT_5_5_5_1; if (n === Sc) return i.UNSIGNED_INT_5_9_9_9_REV; if (n === vc) return i.BYTE; if (n === xc) return i.SHORT; if (n === Zi) return i.UNSIGNED_SHORT; if (n === Da) return i.INT; if (n === $n) return i.UNSIGNED_INT; if (n === mn) return i.FLOAT; if (n === rr) return i.HALF_FLOAT; if (n === Mc) return i.ALPHA; if (n === yc) return i.RGB; if (n === Zt) return i.RGBA; if (n === Ji) return i.DEPTH_COMPONENT; if (n === $i) return i.DEPTH_STENCIL; if (n === Ec) return i.RED; if (n === Na) return i.RED_INTEGER; if (n === Tc) return i.RG; if (n === Fa) return i.RG_INTEGER; if (n === Oa) return i.RGBA_INTEGER; if (n === Or || n === Br || n === zr || n === Vr) if (a === Ke) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) { if (n === Or) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (n === Br) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (n === zr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (n === Vr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) { if (n === Or) return s.COMPRESSED_RGB_S3TC_DXT1_EXT; if (n === Br) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (n === zr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (n === Vr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (n === $s || n === js || n === Qs || n === ea) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) { if (n === $s) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (n === js) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (n === Qs) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (n === ea) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (n === ta || n === na || n === ia) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) { if (n === ta || n === na) return a === Ke ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2; if (n === ia) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (n === ra || n === sa || n === aa || n === oa || n === ca || n === la || n === ua || n === ha || n === da || n === fa || n === pa || n === ma || n === ga || n === _a) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) { if (n === ra) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR; if (n === sa) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR; if (n === aa) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR; if (n === oa) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR; if (n === ca) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR; if (n === la) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR; if (n === ua) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR; if (n === ha) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR; if (n === da) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR; if (n === fa) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR; if (n === pa) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR; if (n === ma) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR; if (n === ga) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR; if (n === _a) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (n === Hr || n === va || n === xa) if (s = e.get("EXT_texture_compression_bptc"), s !== null) { if (n === Hr) return a === Ke ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (n === va) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (n === xa) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (n === bc || n === Sa || n === Ma || n === ya) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) { if (n === Hr) return s.COMPRESSED_RED_RGTC1_EXT; if (n === Sa) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (n === Ma) return s.COMPRESSED_RED_GREEN_RGTC2_EXT; if (n === ya) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return n === Ki ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null } return { convert: t } } const ug = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, hg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`; class dg { constructor() { this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0 } init(e, t, n) { if (this.texture === null) { const r = new Rt, s = e.properties.get(r); s.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r } } getMesh(e) { if (this.texture !== null && this.mesh === null) { const t = e.cameras[0].viewport, n = new Sn({ vertexShader: ug, fragmentShader: hg, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } }); this.mesh = new Mt(new Ci(20, 20), n) } return this.mesh } reset() { this.texture = null, this.mesh = null } getDepthTexture() { return this.texture } } class fg extends wi { constructor(e, t) { super(); const n = this; let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, u = null, h = null, d = null, p = null, g = null; const x = new dg, m = t.getContextAttributes(); let f = null, b = null; const E = [], S = [], I = new fe; let L = null; const R = new Xt; R.viewport = new Qe; const N = new Xt; N.viewport = new Qe; const y = [R, N], M = new Lh; let P = null, k = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (W) { let te = E[W]; return te === void 0 && (te = new Es, E[W] = te), te.getTargetRaySpace() }, this.getControllerGrip = function (W) { let te = E[W]; return te === void 0 && (te = new Es, E[W] = te), te.getGripSpace() }, this.getHand = function (W) { let te = E[W]; return te === void 0 && (te = new Es, E[W] = te), te.getHandSpace() }; function z(W) { const te = S.indexOf(W.inputSource); if (te === -1) return; const Se = E[te]; Se !== void 0 && (Se.update(W.inputSource, W.frame, l || a), Se.dispatchEvent({ type: W.type, data: W.inputSource })) } function Z() { r.removeEventListener("select", z), r.removeEventListener("selectstart", z), r.removeEventListener("selectend", z), r.removeEventListener("squeeze", z), r.removeEventListener("squeezestart", z), r.removeEventListener("squeezeend", z), r.removeEventListener("end", Z), r.removeEventListener("inputsourceschange", K); for (let W = 0; W < E.length; W++) { const te = S[W]; te !== null && (S[W] = null, E[W].disconnect(te)) } P = null, k = null, x.reset(), e.setRenderTarget(f), p = null, d = null, h = null, r = null, b = null, Je.stop(), n.isPresenting = !1, e.setPixelRatio(L), e.setSize(I.width, I.height, !1), n.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (W) { s = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (W) { o = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return l || a }, this.setReferenceSpace = function (W) { l = W }, this.getBaseLayer = function () { return d !== null ? d : p }, this.getBinding = function () { return h }, this.getFrame = function () { return g }, this.getSession = function () { return r }, this.setSession = async function (W) { if (r = W, r !== null) { if (f = e.getRenderTarget(), r.addEventListener("select", z), r.addEventListener("selectstart", z), r.addEventListener("selectend", z), r.addEventListener("squeeze", z), r.addEventListener("squeezestart", z), r.addEventListener("squeezeend", z), r.addEventListener("end", Z), r.addEventListener("inputsourceschange", K), m.xrCompatible !== !0 && await t.makeXRCompatible(), L = e.getPixelRatio(), e.getSize(I), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) { let Se = null, ce = null, Me = null; m.depth && (Me = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Se = m.stencil ? $i : Ji, ce = m.stencil ? Ki : $n); const Ge = { colorFormat: t.RGBA8, depthFormat: Me, scaleFactor: s }; h = new XRWebGLBinding(r, t), d = h.createProjectionLayer(Ge), r.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), b = new jn(d.textureWidth, d.textureHeight, { format: Zt, type: vn, depthTexture: new Oc(d.textureWidth, d.textureHeight, ce, void 0, void 0, void 0, void 0, void 0, void 0, Se), stencilBuffer: m.stencil, colorSpace: e.outputColorSpace, samples: m.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === !1, resolveStencilBuffer: d.ignoreDepthValues === !1 }) } else { const Se = { antialias: m.antialias, alpha: !0, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: s }; p = new XRWebGLLayer(r, t, Se), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), b = new jn(p.framebufferWidth, p.framebufferHeight, { format: Zt, type: vn, colorSpace: e.outputColorSpace, stencilBuffer: m.stencil, resolveDepthBuffer: p.ignoreDepthValues === !1, resolveStencilBuffer: p.ignoreDepthValues === !1 }) } b.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), Je.setContext(r), Je.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }, this.getEnvironmentBlendMode = function () { if (r !== null) return r.environmentBlendMode }, this.getDepthTexture = function () { return x.getDepthTexture() }; function K(W) { for (let te = 0; te < W.removed.length; te++) { const Se = W.removed[te], ce = S.indexOf(Se); ce >= 0 && (S[ce] = null, E[ce].disconnect(Se)) } for (let te = 0; te < W.added.length; te++) { const Se = W.added[te]; let ce = S.indexOf(Se); if (ce === -1) { for (let Ge = 0; Ge < E.length; Ge++)if (Ge >= S.length) { S.push(Se), ce = Ge; break } else if (S[Ge] === null) { S[Ge] = Se, ce = Ge; break } if (ce === -1) break } const Me = E[ce]; Me && Me.connect(Se) } } const X = new C, $ = new C; function V(W, te, Se) { X.setFromMatrixPosition(te.matrixWorld), $.setFromMatrixPosition(Se.matrixWorld); const ce = X.distanceTo($), Me = te.projectionMatrix.elements, Ge = Se.projectionMatrix.elements, Re = Me[14] / (Me[10] - 1), rt = Me[14] / (Me[10] + 1), st = (Me[9] + 1) / Me[5], ke = (Me[9] - 1) / Me[5], A = (Me[8] - 1) / Me[0], Et = (Ge[8] + 1) / Ge[0], We = Re * A, je = Re * Et, _e = ce / (-A + Et), ze = _e * -A; if (te.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(ze), W.translateZ(_e), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert(), Me[10] === -1) W.projectionMatrix.copy(te.projectionMatrix), W.projectionMatrixInverse.copy(te.projectionMatrixInverse); else { const Te = Re + _e, Ie = rt + _e, ht = We - ze, T = je + (ce - ze), _ = st * rt / Ie * Te, F = ke * rt / Ie * Te; W.projectionMatrix.makePerspective(ht, T, _, F, Te, Ie), W.projectionMatrixInverse.copy(W.projectionMatrix).invert() } } function oe(W, te) { te === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(te.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert() } this.updateCamera = function (W) { if (r === null) return; let te = W.near, Se = W.far; x.texture !== null && (x.depthNear > 0 && (te = x.depthNear), x.depthFar > 0 && (Se = x.depthFar)), M.near = N.near = R.near = te, M.far = N.far = R.far = Se, (P !== M.near || k !== M.far) && (r.updateRenderState({ depthNear: M.near, depthFar: M.far }), P = M.near, k = M.far), R.layers.mask = W.layers.mask | 2, N.layers.mask = W.layers.mask | 4, M.layers.mask = R.layers.mask | N.layers.mask; const ce = W.parent, Me = M.cameras; oe(M, ce); for (let Ge = 0; Ge < Me.length; Ge++)oe(Me[Ge], ce); Me.length === 2 ? V(M, R, N) : M.projectionMatrix.copy(R.projectionMatrix), he(W, M, ce) }; function he(W, te, Se) { Se === null ? W.matrix.copy(te.matrixWorld) : (W.matrix.copy(Se.matrixWorld), W.matrix.invert(), W.matrix.multiply(te.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(!0), W.projectionMatrix.copy(te.projectionMatrix), W.projectionMatrixInverse.copy(te.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = ji * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1) } this.getCamera = function () { return M }, this.getFoveation = function () { if (!(d === null && p === null)) return c }, this.setFoveation = function (W) { c = W, d !== null && (d.fixedFoveation = W), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = W) }, this.hasDepthSensing = function () { return x.texture !== null }, this.getDepthSensingMesh = function () { return x.getMesh(M) }; let ye = null; function Oe(W, te) { if (u = te.getViewerPose(l || a), g = te, u !== null) { const Se = u.views; p !== null && (e.setRenderTargetFramebuffer(b, p.framebuffer), e.setRenderTarget(b)); let ce = !1; Se.length !== M.cameras.length && (M.cameras.length = 0, ce = !0); for (let Re = 0; Re < Se.length; Re++) { const rt = Se[Re]; let st = null; if (p !== null) st = p.getViewport(rt); else { const A = h.getViewSubImage(d, rt); st = A.viewport, Re === 0 && (e.setRenderTargetTextures(b, A.colorTexture, A.depthStencilTexture), e.setRenderTarget(b)) } let ke = y[Re]; ke === void 0 && (ke = new Xt, ke.layers.enable(Re), ke.viewport = new Qe, y[Re] = ke), ke.matrix.fromArray(rt.transform.matrix), ke.matrix.decompose(ke.position, ke.quaternion, ke.scale), ke.projectionMatrix.fromArray(rt.projectionMatrix), ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(), ke.viewport.set(st.x, st.y, st.width, st.height), Re === 0 && (M.matrix.copy(ke.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), ce === !0 && M.cameras.push(ke) } const Me = r.enabledFeatures; if (Me && Me.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && h) { const Re = h.getDepthInformation(Se[0]); Re && Re.isValid && Re.texture && x.init(e, Re, r.renderState) } } for (let Se = 0; Se < E.length; Se++) { const ce = S[Se], Me = E[Se]; ce !== null && Me !== void 0 && Me.update(ce, te, l || a) } ye && ye(W, te), te.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: te }), g = null } const Je = new Yc; Je.setAnimationLoop(Oe), this.setAnimationLoop = function (W) { ye = W }, this.dispose = function () { } } } const Gn = new xn, pg = new et; function mg(i, e) { function t(m, f) { m.matrixAutoUpdate === !0 && m.updateMatrix(), f.value.copy(m.matrix) } function n(m, f) { f.color.getRGB(m.fogColor.value, Uc(i)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density) } function r(m, f, b, E, S) { f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(m, f) : f.isMeshToonMaterial ? (s(m, f), h(m, f)) : f.isMeshPhongMaterial ? (s(m, f), u(m, f)) : f.isMeshStandardMaterial ? (s(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, S)) : f.isMeshMatcapMaterial ? (s(m, f), g(m, f)) : f.isMeshDepthMaterial ? s(m, f) : f.isMeshDistanceMaterial ? (s(m, f), x(m, f)) : f.isMeshNormalMaterial ? s(m, f) : f.isLineBasicMaterial ? (a(m, f), f.isLineDashedMaterial && o(m, f)) : f.isPointsMaterial ? c(m, f, b, E) : f.isSpriteMaterial ? l(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1) } function s(m, f) { m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === Lt && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === Lt && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest); const b = e.get(f), E = b.envMap, S = b.envMapRotation; E && (m.envMap.value = E, Gn.copy(S), Gn.x *= -1, Gn.y *= -1, Gn.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === !1 && (Gn.y *= -1, Gn.z *= -1), m.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(Gn)), m.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform)) } function a(m, f) { m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)) } function o(m, f) { m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale } function c(m, f, b, E) { m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * b, m.scale.value = E * .5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest) } function l(m, f) { m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest) } function u(m, f) { m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4) } function h(m, f) { f.gradientMap && (m.gradientMap.value = f.gradientMap) } function d(m, f) { m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, m.roughnessMapTransform)), f.envMap && (m.envMapIntensity.value = f.envMapIntensity) } function p(m, f, b) { m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === Lt && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = b.texture, m.transmissionSamplerSize.value.set(b.width, b.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform)) } function g(m, f) { f.matcap && (m.matcap.value = f.matcap) } function x(m, f) { const b = e.get(f).light; m.referencePosition.value.setFromMatrixPosition(b.matrixWorld), m.nearDistance.value = b.shadow.camera.near, m.farDistance.value = b.shadow.camera.far } return { refreshFogUniforms: n, refreshMaterialUniforms: r } } function gg(i, e, t, n) { let r = {}, s = {}, a = []; const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS); function c(b, E) { const S = E.program; n.uniformBlockBinding(b, S) } function l(b, E) { let S = r[b.id]; S === void 0 && (g(b), S = u(b), r[b.id] = S, b.addEventListener("dispose", m)); const I = E.program; n.updateUBOMapping(b, I); const L = e.render.frame; s[b.id] !== L && (d(b), s[b.id] = L) } function u(b) { const E = h(); b.__bindingPointIndex = E; const S = i.createBuffer(), I = b.__size, L = b.usage; return i.bindBuffer(i.UNIFORM_BUFFER, S), i.bufferData(i.UNIFORM_BUFFER, I, L), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, E, S), S } function h() { for (let b = 0; b < o; b++)if (a.indexOf(b) === -1) return a.push(b), b; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function d(b) { const E = r[b.id], S = b.uniforms, I = b.__cache; i.bindBuffer(i.UNIFORM_BUFFER, E); for (let L = 0, R = S.length; L < R; L++) { const N = Array.isArray(S[L]) ? S[L] : [S[L]]; for (let y = 0, M = N.length; y < M; y++) { const P = N[y]; if (p(P, L, y, I) === !0) { const k = P.__offset, z = Array.isArray(P.value) ? P.value : [P.value]; let Z = 0; for (let K = 0; K < z.length; K++) { const X = z[K], $ = x(X); typeof X == "number" || typeof X == "boolean" ? (P.__data[0] = X, i.bufferSubData(i.UNIFORM_BUFFER, k + Z, P.__data)) : X.isMatrix3 ? (P.__data[0] = X.elements[0], P.__data[1] = X.elements[1], P.__data[2] = X.elements[2], P.__data[3] = 0, P.__data[4] = X.elements[3], P.__data[5] = X.elements[4], P.__data[6] = X.elements[5], P.__data[7] = 0, P.__data[8] = X.elements[6], P.__data[9] = X.elements[7], P.__data[10] = X.elements[8], P.__data[11] = 0) : (X.toArray(P.__data, Z), Z += $.storage / Float32Array.BYTES_PER_ELEMENT) } i.bufferSubData(i.UNIFORM_BUFFER, k, P.__data) } } } i.bindBuffer(i.UNIFORM_BUFFER, null) } function p(b, E, S, I) { const L = b.value, R = E + "_" + S; if (I[R] === void 0) return typeof L == "number" || typeof L == "boolean" ? I[R] = L : I[R] = L.clone(), !0; { const N = I[R]; if (typeof L == "number" || typeof L == "boolean") { if (N !== L) return I[R] = L, !0 } else if (N.equals(L) === !1) return N.copy(L), !0 } return !1 } function g(b) { const E = b.uniforms; let S = 0; const I = 16; for (let R = 0, N = E.length; R < N; R++) { const y = Array.isArray(E[R]) ? E[R] : [E[R]]; for (let M = 0, P = y.length; M < P; M++) { const k = y[M], z = Array.isArray(k.value) ? k.value : [k.value]; for (let Z = 0, K = z.length; Z < K; Z++) { const X = z[Z], $ = x(X), V = S % I, oe = V % $.boundary, he = V + oe; S += oe, he !== 0 && I - he < $.storage && (S += I - he), k.__data = new Float32Array($.storage / Float32Array.BYTES_PER_ELEMENT), k.__offset = S, S += $.storage } } } const L = S % I; return L > 0 && (S += I - L), b.__size = S, b.__cache = {}, this } function x(b) { const E = { boundary: 0, storage: 0 }; return typeof b == "number" || typeof b == "boolean" ? (E.boundary = 4, E.storage = 4) : b.isVector2 ? (E.boundary = 8, E.storage = 8) : b.isVector3 || b.isColor ? (E.boundary = 16, E.storage = 12) : b.isVector4 ? (E.boundary = 16, E.storage = 16) : b.isMatrix3 ? (E.boundary = 48, E.storage = 48) : b.isMatrix4 ? (E.boundary = 64, E.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), E } function m(b) { const E = b.target; E.removeEventListener("dispose", m); const S = a.indexOf(E.__bindingPointIndex); a.splice(S, 1), i.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id] } function f() { for (const b in r) i.deleteBuffer(r[b]); a = [], r = {}, s = {} } return { bind: c, update: l, dispose: f } } class _g { constructor(e = {}) { const { canvas: t = fu(), context: n = null, depth: r = !0, stencil: s = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: c = !0, preserveDrawingBuffer: l = !1, powerPreference: u = "default", failIfMajorPerformanceCaveat: h = !1, reverseDepthBuffer: d = !1 } = e; this.isWebGLRenderer = !0; let p; if (n !== null) { if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163."); p = n.getContextAttributes().alpha } else p = a; const g = new Uint32Array(4), x = new Int32Array(4); let m = null, f = null; const b = [], E = []; this.domElement = t, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = Ln, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1; const S = this; let I = !1; this._outputColorSpace = Vt; let L = 0, R = 0, N = null, y = -1, M = null; const P = new Qe, k = new Qe; let z = null; const Z = new Ye(0); let K = 0, X = t.width, $ = t.height, V = 1, oe = null, he = null; const ye = new Qe(0, 0, X, $), Oe = new Qe(0, 0, X, $); let Je = !1; const W = new Fc; let te = !1, Se = !1; const ce = new et, Me = new et, Ge = new C, Re = new Qe, rt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; let st = !1; function ke() { return N === null ? V : 1 } let A = n; function Et(v, D) { return t.getContext(v, D) } try { const v = { alpha: !0, depth: r, stencil: s, antialias: o, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: u, failIfMajorPerformanceCaveat: h }; if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${La}`), t.addEventListener("webglcontextlost", de, !1), t.addEventListener("webglcontextrestored", Q, !1), t.addEventListener("webglcontextcreationerror", q, !1), A === null) { const D = "webgl2"; if (A = Et(D, v), A === null) throw Et(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } } catch (v) { throw console.error("THREE.WebGLRenderer: " + v.message), v } let We, je, _e, ze, Te, Ie, ht, T, _, F, G, Y, H, ve, re, ge, xe, J, le, we, Ae, ie, Le, w; function se() { We = new wp(A), We.init(), ie = new lg(A, We), je = new Sp(A, We, e, ie), _e = new og(A, We), je.reverseDepthBuffer && d && _e.buffers.depth.setReversed(!0), ze = new Pp(A), Te = new Zm, Ie = new cg(A, We, _e, Te, je, ie, ze), ht = new yp(S), T = new Ap(S), _ = new Nh(A), Le = new vp(A, _), F = new Rp(A, _, ze, Le), G = new Dp(A, F, _, ze), le = new Lp(A, je, Ie), ge = new Mp(Te), Y = new Ym(S, ht, T, We, je, Le, ge), H = new mg(S, Te), ve = new Jm, re = new ng(We), J = new _p(S, ht, T, _e, G, p, c), xe = new sg(S, G, je), w = new gg(A, ze, je, _e), we = new xp(A, We, ze), Ae = new Cp(A, We, ze), ze.programs = Y.programs, S.capabilities = je, S.extensions = We, S.properties = Te, S.renderLists = ve, S.shadowMap = xe, S.state = _e, S.info = ze } se(); const j = new fg(S, A); this.xr = j, this.getContext = function () { return A }, this.getContextAttributes = function () { return A.getContextAttributes() }, this.forceContextLoss = function () { const v = We.get("WEBGL_lose_context"); v && v.loseContext() }, this.forceContextRestore = function () { const v = We.get("WEBGL_lose_context"); v && v.restoreContext() }, this.getPixelRatio = function () { return V }, this.setPixelRatio = function (v) { v !== void 0 && (V = v, this.setSize(X, $, !1)) }, this.getSize = function (v) { return v.set(X, $) }, this.setSize = function (v, D, O = !0) { if (j.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } X = v, $ = D, t.width = Math.floor(v * V), t.height = Math.floor(D * V), O === !0 && (t.style.width = v + "px", t.style.height = D + "px"), this.setViewport(0, 0, v, D) }, this.getDrawingBufferSize = function (v) { return v.set(X * V, $ * V).floor() }, this.setDrawingBufferSize = function (v, D, O) { X = v, $ = D, V = O, t.width = Math.floor(v * O), t.height = Math.floor(D * O), this.setViewport(0, 0, v, D) }, this.getCurrentViewport = function (v) { return v.copy(P) }, this.getViewport = function (v) { return v.copy(ye) }, this.setViewport = function (v, D, O, B) { v.isVector4 ? ye.set(v.x, v.y, v.z, v.w) : ye.set(v, D, O, B), _e.viewport(P.copy(ye).multiplyScalar(V).round()) }, this.getScissor = function (v) { return v.copy(Oe) }, this.setScissor = function (v, D, O, B) { v.isVector4 ? Oe.set(v.x, v.y, v.z, v.w) : Oe.set(v, D, O, B), _e.scissor(k.copy(Oe).multiplyScalar(V).round()) }, this.getScissorTest = function () { return Je }, this.setScissorTest = function (v) { _e.setScissorTest(Je = v) }, this.setOpaqueSort = function (v) { oe = v }, this.setTransparentSort = function (v) { he = v }, this.getClearColor = function (v) { return v.copy(J.getClearColor()) }, this.setClearColor = function () { J.setClearColor(...arguments) }, this.getClearAlpha = function () { return J.getClearAlpha() }, this.setClearAlpha = function () { J.setClearAlpha(...arguments) }, this.clear = function (v = !0, D = !0, O = !0) { let B = 0; if (v) { let U = !1; if (N !== null) { const ee = N.texture.format; U = ee === Oa || ee === Fa || ee === Na } if (U) { const ee = N.texture.type, ae = ee === vn || ee === $n || ee === Zi || ee === Ki || ee === Ua || ee === Ia, me = J.getClearColor(), ue = J.getClearAlpha(), Ce = me.r, Pe = me.g, Ee = me.b; ae ? (g[0] = Ce, g[1] = Pe, g[2] = Ee, g[3] = ue, A.clearBufferuiv(A.COLOR, 0, g)) : (x[0] = Ce, x[1] = Pe, x[2] = Ee, x[3] = ue, A.clearBufferiv(A.COLOR, 0, x)) } else B |= A.COLOR_BUFFER_BIT } D && (B |= A.DEPTH_BUFFER_BIT), O && (B |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(B) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { t.removeEventListener("webglcontextlost", de, !1), t.removeEventListener("webglcontextrestored", Q, !1), t.removeEventListener("webglcontextcreationerror", q, !1), J.dispose(), ve.dispose(), re.dispose(), Te.dispose(), ht.dispose(), T.dispose(), G.dispose(), Le.dispose(), w.dispose(), Y.dispose(), j.dispose(), j.removeEventListener("sessionstart", Ka), j.removeEventListener("sessionend", Ja), Nn.stop() }; function de(v) { v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = !0 } function Q() { console.log("THREE.WebGLRenderer: Context Restored."), I = !1; const v = ze.autoReset, D = xe.enabled, O = xe.autoUpdate, B = xe.needsUpdate, U = xe.type; se(), ze.autoReset = v, xe.enabled = D, xe.autoUpdate = O, xe.needsUpdate = B, xe.type = U } function q(v) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage) } function pe(v) { const D = v.target; D.removeEventListener("dispose", pe), De(D) } function De(v) { tt(v), Te.remove(v) } function tt(v) { const D = Te.get(v).programs; D !== void 0 && (D.forEach(function (O) { Y.releaseProgram(O) }), v.isShaderMaterial && Y.releaseShaderCache(v)) } this.renderBufferDirect = function (v, D, O, B, U, ee) { D === null && (D = rt); const ae = U.isMesh && U.matrixWorld.determinant() < 0, me = nl(v, D, O, B, U); _e.setMaterial(B, ae); let ue = O.index, Ce = 1; if (B.wireframe === !0) { if (ue = F.getWireframeAttribute(O), ue === void 0) return; Ce = 2 } const Pe = O.drawRange, Ee = O.attributes.position; let Be = Pe.start * Ce, Ze = (Pe.start + Pe.count) * Ce; ee !== null && (Be = Math.max(Be, ee.start * Ce), Ze = Math.min(Ze, (ee.start + ee.count) * Ce)), ue !== null ? (Be = Math.max(Be, 0), Ze = Math.min(Ze, ue.count)) : Ee != null && (Be = Math.max(Be, 0), Ze = Math.min(Ze, Ee.count)); const ct = Ze - Be; if (ct < 0 || ct === 1 / 0) return; Le.setup(U, B, me, O, ue); let nt, $e = we; if (ue !== null && (nt = _.get(ue), $e = Ae, $e.setIndex(nt)), U.isMesh) B.wireframe === !0 ? (_e.setLineWidth(B.wireframeLinewidth * ke()), $e.setMode(A.LINES)) : $e.setMode(A.TRIANGLES); else if (U.isLine) { let be = B.linewidth; be === void 0 && (be = 1), _e.setLineWidth(be * ke()), U.isLineSegments ? $e.setMode(A.LINES) : U.isLineLoop ? $e.setMode(A.LINE_LOOP) : $e.setMode(A.LINE_STRIP) } else U.isPoints ? $e.setMode(A.POINTS) : U.isSprite && $e.setMode(A.TRIANGLES); if (U.isBatchedMesh) if (U._multiDrawInstances !== null) vi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), $e.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances); else if (We.get("WEBGL_multi_draw")) $e.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount); else { const be = U._multiDrawStarts, at = U._multiDrawCounts, Ve = U._multiDrawCount, Ut = ue ? _.get(ue).bytesPerElement : 1, ei = Te.get(B).currentProgram.getUniforms(); for (let It = 0; It < Ve; It++)ei.setValue(A, "_gl_DrawID", It), $e.render(be[It] / Ut, at[It]) } else if (U.isInstancedMesh) $e.renderInstances(Be, ct, U.count); else if (O.isInstancedBufferGeometry) { const be = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, at = Math.min(O.instanceCount, be); $e.renderInstances(Be, ct, at) } else $e.render(Be, ct) }; function Xe(v, D, O) { v.transparent === !0 && v.side === tn && v.forceSinglePass === !1 ? (v.side = Lt, v.needsUpdate = !0, cr(v, D, O), v.side = Dn, v.needsUpdate = !0, cr(v, D, O), v.side = tn) : cr(v, D, O) } this.compile = function (v, D, O = null) { O === null && (O = v), f = re.get(O), f.init(D), E.push(f), O.traverseVisible(function (U) { U.isLight && U.layers.test(D.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U)) }), v !== O && v.traverseVisible(function (U) { U.isLight && U.layers.test(D.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U)) }), f.setupLights(); const B = new Set; return v.traverse(function (U) { if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return; const ee = U.material; if (ee) if (Array.isArray(ee)) for (let ae = 0; ae < ee.length; ae++) { const me = ee[ae]; Xe(me, O, U), B.add(me) } else Xe(ee, O, U), B.add(ee) }), f = E.pop(), B }, this.compileAsync = function (v, D, O = null) { const B = this.compile(v, D, O); return new Promise(U => { function ee() { if (B.forEach(function (ae) { Te.get(ae).currentProgram.isReady() && B.delete(ae) }), B.size === 0) { U(v); return } setTimeout(ee, 10) } We.get("KHR_parallel_shader_compile") !== null ? ee() : setTimeout(ee, 10) }) }; let Ht = null; function on(v) { Ht && Ht(v) } function Ka() { Nn.stop() } function Ja() { Nn.start() } const Nn = new Yc; Nn.setAnimationLoop(on), typeof self < "u" && Nn.setContext(self), this.setAnimationLoop = function (v) { Ht = v, j.setAnimationLoop(v), v === null ? Nn.stop() : Nn.start() }, j.addEventListener("sessionstart", Ka), j.addEventListener("sessionend", Ja), this.render = function (v, D) { if (D !== void 0 && D.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (I === !0) return; if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), j.enabled === !0 && j.isPresenting === !0 && (j.cameraAutoUpdate === !0 && j.updateCamera(D), D = j.getCamera()), v.isScene === !0 && v.onBeforeRender(S, v, D, N), f = re.get(v, E.length), f.init(D), E.push(f), Me.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), W.setFromProjectionMatrix(Me), Se = this.localClippingEnabled, te = ge.init(this.clippingPlanes, Se), m = ve.get(v, b.length), m.init(), b.push(m), j.enabled === !0 && j.isPresenting === !0) { const ee = S.xr.getDepthSensingMesh(); ee !== null && es(ee, D, -1 / 0, S.sortObjects) } es(v, D, 0, S.sortObjects), m.finish(), S.sortObjects === !0 && m.sort(oe, he), st = j.enabled === !1 || j.isPresenting === !1 || j.hasDepthSensing() === !1, st && J.addToRenderList(m, v), this.info.render.frame++, te === !0 && ge.beginShadows(); const O = f.state.shadowsArray; xe.render(O, v, D), te === !0 && ge.endShadows(), this.info.autoReset === !0 && this.info.reset(); const B = m.opaque, U = m.transmissive; if (f.setupLights(), D.isArrayCamera) { const ee = D.cameras; if (U.length > 0) for (let ae = 0, me = ee.length; ae < me; ae++) { const ue = ee[ae]; ja(B, U, v, ue) } st && J.render(v); for (let ae = 0, me = ee.length; ae < me; ae++) { const ue = ee[ae]; $a(m, v, ue, ue.viewport) } } else U.length > 0 && ja(B, U, v, D), st && J.render(v), $a(m, v, D); N !== null && R === 0 && (Ie.updateMultisampleRenderTarget(N), Ie.updateRenderTargetMipmap(N)), v.isScene === !0 && v.onAfterRender(S, v, D), Le.resetDefaultState(), y = -1, M = null, E.pop(), E.length > 0 ? (f = E[E.length - 1], te === !0 && ge.setGlobalState(S.clippingPlanes, f.state.camera)) : f = null, b.pop(), b.length > 0 ? m = b[b.length - 1] : m = null }; function es(v, D, O, B) { if (v.visible === !1) return; if (v.layers.test(D.layers)) { if (v.isGroup) O = v.renderOrder; else if (v.isLOD) v.autoUpdate === !0 && v.update(D); else if (v.isLight) f.pushLight(v), v.castShadow && f.pushShadow(v); else if (v.isSprite) { if (!v.frustumCulled || W.intersectsSprite(v)) { B && Re.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Me); const ae = G.update(v), me = v.material; me.visible && m.push(v, ae, me, O, Re.z, null) } } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || W.intersectsObject(v))) { const ae = G.update(v), me = v.material; if (B && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Re.copy(v.boundingSphere.center)) : (ae.boundingSphere === null && ae.computeBoundingSphere(), Re.copy(ae.boundingSphere.center)), Re.applyMatrix4(v.matrixWorld).applyMatrix4(Me)), Array.isArray(me)) { const ue = ae.groups; for (let Ce = 0, Pe = ue.length; Ce < Pe; Ce++) { const Ee = ue[Ce], Be = me[Ee.materialIndex]; Be && Be.visible && m.push(v, ae, Be, O, Re.z, Ee) } } else me.visible && m.push(v, ae, me, O, Re.z, null) } } const ee = v.children; for (let ae = 0, me = ee.length; ae < me; ae++)es(ee[ae], D, O, B) } function $a(v, D, O, B) { const U = v.opaque, ee = v.transmissive, ae = v.transparent; f.setupLightsView(O), te === !0 && ge.setGlobalState(S.clippingPlanes, O), B && _e.viewport(P.copy(B)), U.length > 0 && or(U, D, O), ee.length > 0 && or(ee, D, O), ae.length > 0 && or(ae, D, O), _e.buffers.depth.setTest(!0), _e.buffers.depth.setMask(!0), _e.buffers.color.setMask(!0), _e.setPolygonOffset(!1) } function ja(v, D, O, B) { if ((O.isScene === !0 ? O.overrideMaterial : null) !== null) return; f.state.transmissionRenderTarget[B.id] === void 0 && (f.state.transmissionRenderTarget[B.id] = new jn(1, 1, { generateMipmaps: !0, type: We.has("EXT_color_buffer_half_float") || We.has("EXT_color_buffer_float") ? rr : vn, minFilter: Zn, samples: 4, stencilBuffer: s, resolveDepthBuffer: !1, resolveStencilBuffer: !1, colorSpace: He.workingColorSpace })); const ee = f.state.transmissionRenderTarget[B.id], ae = B.viewport || P; ee.setSize(ae.z * S.transmissionResolutionScale, ae.w * S.transmissionResolutionScale); const me = S.getRenderTarget(), ue = S.getActiveCubeFace(), Ce = S.getActiveMipmapLevel(); S.setRenderTarget(ee), S.getClearColor(Z), K = S.getClearAlpha(), K < 1 && S.setClearColor(16777215, .5), S.clear(), st && J.render(O); const Pe = S.toneMapping; S.toneMapping = Ln; const Ee = B.viewport; if (B.viewport !== void 0 && (B.viewport = void 0), f.setupLightsView(B), te === !0 && ge.setGlobalState(S.clippingPlanes, B), or(v, O, B), Ie.updateMultisampleRenderTarget(ee), Ie.updateRenderTargetMipmap(ee), We.has("WEBGL_multisampled_render_to_texture") === !1) { let Be = !1; for (let Ze = 0, ct = D.length; Ze < ct; Ze++) { const nt = D[Ze], $e = nt.object, be = nt.geometry, at = nt.material, Ve = nt.group; if (at.side === tn && $e.layers.test(B.layers)) { const Ut = at.side; at.side = Lt, at.needsUpdate = !0, Qa($e, O, B, be, at, Ve), at.side = Ut, at.needsUpdate = !0, Be = !0 } } Be === !0 && (Ie.updateMultisampleRenderTarget(ee), Ie.updateRenderTargetMipmap(ee)) } S.setRenderTarget(me, ue, Ce), S.setClearColor(Z, K), Ee !== void 0 && (B.viewport = Ee), S.toneMapping = Pe } function or(v, D, O) { const B = D.isScene === !0 ? D.overrideMaterial : null; for (let U = 0, ee = v.length; U < ee; U++) { const ae = v[U], me = ae.object, ue = ae.geometry, Ce = ae.group; let Pe = ae.material; Pe.allowOverride === !0 && B !== null && (Pe = B), me.layers.test(O.layers) && Qa(me, D, O, ue, Pe, Ce) } } function Qa(v, D, O, B, U, ee) { v.onBeforeRender(S, D, O, B, U, ee), v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), U.onBeforeRender(S, D, O, B, v, ee), U.transparent === !0 && U.side === tn && U.forceSinglePass === !1 ? (U.side = Lt, U.needsUpdate = !0, S.renderBufferDirect(O, D, B, U, v, ee), U.side = Dn, U.needsUpdate = !0, S.renderBufferDirect(O, D, B, U, v, ee), U.side = tn) : S.renderBufferDirect(O, D, B, U, v, ee), v.onAfterRender(S, D, O, B, U, ee) } function cr(v, D, O) { D.isScene !== !0 && (D = rt); const B = Te.get(v), U = f.state.lights, ee = f.state.shadowsArray, ae = U.state.version, me = Y.getParameters(v, U.state, ee, D, O), ue = Y.getProgramCacheKey(me); let Ce = B.programs; B.environment = v.isMeshStandardMaterial ? D.environment : null, B.fog = D.fog, B.envMap = (v.isMeshStandardMaterial ? T : ht).get(v.envMap || B.environment), B.envMapRotation = B.environment !== null && v.envMap === null ? D.environmentRotation : v.envMapRotation, Ce === void 0 && (v.addEventListener("dispose", pe), Ce = new Map, B.programs = Ce); let Pe = Ce.get(ue); if (Pe !== void 0) { if (B.currentProgram === Pe && B.lightsStateVersion === ae) return to(v, me), Pe } else me.uniforms = Y.getUniforms(v), v.onBeforeCompile(me, S), Pe = Y.acquireProgram(me, ue), Ce.set(ue, Pe), B.uniforms = me.uniforms; const Ee = B.uniforms; return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Ee.clippingPlanes = ge.uniform), to(v, me), B.needsLights = rl(v), B.lightsStateVersion = ae, B.needsLights && (Ee.ambientLightColor.value = U.state.ambient, Ee.lightProbe.value = U.state.probe, Ee.directionalLights.value = U.state.directional, Ee.directionalLightShadows.value = U.state.directionalShadow, Ee.spotLights.value = U.state.spot, Ee.spotLightShadows.value = U.state.spotShadow, Ee.rectAreaLights.value = U.state.rectArea, Ee.ltc_1.value = U.state.rectAreaLTC1, Ee.ltc_2.value = U.state.rectAreaLTC2, Ee.pointLights.value = U.state.point, Ee.pointLightShadows.value = U.state.pointShadow, Ee.hemisphereLights.value = U.state.hemi, Ee.directionalShadowMap.value = U.state.directionalShadowMap, Ee.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Ee.spotShadowMap.value = U.state.spotShadowMap, Ee.spotLightMatrix.value = U.state.spotLightMatrix, Ee.spotLightMap.value = U.state.spotLightMap, Ee.pointShadowMap.value = U.state.pointShadowMap, Ee.pointShadowMatrix.value = U.state.pointShadowMatrix), B.currentProgram = Pe, B.uniformsList = null, Pe } function eo(v) { if (v.uniformsList === null) { const D = v.currentProgram.getUniforms(); v.uniformsList = Gr.seqWithValue(D.seq, v.uniforms) } return v.uniformsList } function to(v, D) { const O = Te.get(v); O.outputColorSpace = D.outputColorSpace, O.batching = D.batching, O.batchingColor = D.batchingColor, O.instancing = D.instancing, O.instancingColor = D.instancingColor, O.instancingMorph = D.instancingMorph, O.skinning = D.skinning, O.morphTargets = D.morphTargets, O.morphNormals = D.morphNormals, O.morphColors = D.morphColors, O.morphTargetsCount = D.morphTargetsCount, O.numClippingPlanes = D.numClippingPlanes, O.numIntersection = D.numClipIntersection, O.vertexAlphas = D.vertexAlphas, O.vertexTangents = D.vertexTangents, O.toneMapping = D.toneMapping } function nl(v, D, O, B, U) { D.isScene !== !0 && (D = rt), Ie.resetTextureUnits(); const ee = D.fog, ae = B.isMeshStandardMaterial ? D.environment : null, me = N === null ? S.outputColorSpace : N.isXRRenderTarget === !0 ? N.texture.colorSpace : Ei, ue = (B.isMeshStandardMaterial ? T : ht).get(B.envMap || ae), Ce = B.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4, Pe = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Ee = !!O.morphAttributes.position, Be = !!O.morphAttributes.normal, Ze = !!O.morphAttributes.color; let ct = Ln; B.toneMapped && (N === null || N.isXRRenderTarget === !0) && (ct = S.toneMapping); const nt = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, $e = nt !== void 0 ? nt.length : 0, be = Te.get(B), at = f.state.lights; if (te === !0 && (Se === !0 || v !== M)) { const Tt = v === M && B.id === y; ge.setState(B, v, Tt) } let Ve = !1; B.version === be.__version ? (be.needsLights && be.lightsStateVersion !== at.state.version || be.outputColorSpace !== me || U.isBatchedMesh && be.batching === !1 || !U.isBatchedMesh && be.batching === !0 || U.isBatchedMesh && be.batchingColor === !0 && U.colorTexture === null || U.isBatchedMesh && be.batchingColor === !1 && U.colorTexture !== null || U.isInstancedMesh && be.instancing === !1 || !U.isInstancedMesh && be.instancing === !0 || U.isSkinnedMesh && be.skinning === !1 || !U.isSkinnedMesh && be.skinning === !0 || U.isInstancedMesh && be.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && be.instancingColor === !1 && U.instanceColor !== null || U.isInstancedMesh && be.instancingMorph === !0 && U.morphTexture === null || U.isInstancedMesh && be.instancingMorph === !1 && U.morphTexture !== null || be.envMap !== ue || B.fog === !0 && be.fog !== ee || be.numClippingPlanes !== void 0 && (be.numClippingPlanes !== ge.numPlanes || be.numIntersection !== ge.numIntersection) || be.vertexAlphas !== Ce || be.vertexTangents !== Pe || be.morphTargets !== Ee || be.morphNormals !== Be || be.morphColors !== Ze || be.toneMapping !== ct || be.morphTargetsCount !== $e) && (Ve = !0) : (Ve = !0, be.__version = B.version); let Ut = be.currentProgram; Ve === !0 && (Ut = cr(B, D, U)); let ei = !1, It = !1, Li = !1; const it = Ut.getUniforms(), Ot = be.uniforms; if (_e.useProgram(Ut.program) && (ei = !0, It = !0, Li = !0), B.id !== y && (y = B.id, It = !0), ei || M !== v) { _e.buffers.depth.getReversed() ? (ce.copy(v.projectionMatrix), mu(ce), gu(ce), it.setValue(A, "projectionMatrix", ce)) : it.setValue(A, "projectionMatrix", v.projectionMatrix), it.setValue(A, "viewMatrix", v.matrixWorldInverse); const Ct = it.map.cameraPosition; Ct !== void 0 && Ct.setValue(A, Ge.setFromMatrixPosition(v.matrixWorld)), je.logarithmicDepthBuffer && it.setValue(A, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && it.setValue(A, "isOrthographic", v.isOrthographicCamera === !0), M !== v && (M = v, It = !0, Li = !0) } if (U.isSkinnedMesh) { it.setOptional(A, U, "bindMatrix"), it.setOptional(A, U, "bindMatrixInverse"); const Tt = U.skeleton; Tt && (Tt.boneTexture === null && Tt.computeBoneTexture(), it.setValue(A, "boneTexture", Tt.boneTexture, Ie)) } U.isBatchedMesh && (it.setOptional(A, U, "batchingTexture"), it.setValue(A, "batchingTexture", U._matricesTexture, Ie), it.setOptional(A, U, "batchingIdTexture"), it.setValue(A, "batchingIdTexture", U._indirectTexture, Ie), it.setOptional(A, U, "batchingColorTexture"), U._colorsTexture !== null && it.setValue(A, "batchingColorTexture", U._colorsTexture, Ie)); const Bt = O.morphAttributes; if ((Bt.position !== void 0 || Bt.normal !== void 0 || Bt.color !== void 0) && le.update(U, O, Ut), (It || be.receiveShadow !== U.receiveShadow) && (be.receiveShadow = U.receiveShadow, it.setValue(A, "receiveShadow", U.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (Ot.envMap.value = ue, Ot.flipEnvMap.value = ue.isCubeTexture && ue.isRenderTargetTexture === !1 ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && D.environment !== null && (Ot.envMapIntensity.value = D.environmentIntensity), It && (it.setValue(A, "toneMappingExposure", S.toneMappingExposure), be.needsLights && il(Ot, Li), ee && B.fog === !0 && H.refreshFogUniforms(Ot, ee), H.refreshMaterialUniforms(Ot, B, V, $, f.state.transmissionRenderTarget[v.id]), Gr.upload(A, eo(be), Ot, Ie)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (Gr.upload(A, eo(be), Ot, Ie), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && it.setValue(A, "center", U.center), it.setValue(A, "modelViewMatrix", U.modelViewMatrix), it.setValue(A, "normalMatrix", U.normalMatrix), it.setValue(A, "modelMatrix", U.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) { const Tt = B.uniformsGroups; for (let Ct = 0, ts = Tt.length; Ct < ts; Ct++) { const Fn = Tt[Ct]; w.update(Fn, Ut), w.bind(Fn, Ut) } } return Ut } function il(v, D) { v.ambientLightColor.needsUpdate = D, v.lightProbe.needsUpdate = D, v.directionalLights.needsUpdate = D, v.directionalLightShadows.needsUpdate = D, v.pointLights.needsUpdate = D, v.pointLightShadows.needsUpdate = D, v.spotLights.needsUpdate = D, v.spotLightShadows.needsUpdate = D, v.rectAreaLights.needsUpdate = D, v.hemisphereLights.needsUpdate = D } function rl(v) { return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0 } this.getActiveCubeFace = function () { return L }, this.getActiveMipmapLevel = function () { return R }, this.getRenderTarget = function () { return N }, this.setRenderTargetTextures = function (v, D, O) { const B = Te.get(v); B.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1, B.__autoAllocateDepthBuffer === !1 && (B.__useRenderToTexture = !1), Te.get(v.texture).__webglTexture = D, Te.get(v.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : O, B.__hasExternalTextures = !0 }, this.setRenderTargetFramebuffer = function (v, D) { const O = Te.get(v); O.__webglFramebuffer = D, O.__useDefaultFramebuffer = D === void 0 }; const sl = A.createFramebuffer(); this.setRenderTarget = function (v, D = 0, O = 0) { N = v, L = D, R = O; let B = !0, U = null, ee = !1, ae = !1; if (v) { const ue = Te.get(v); if (ue.__useDefaultFramebuffer !== void 0) _e.bindFramebuffer(A.FRAMEBUFFER, null), B = !1; else if (ue.__webglFramebuffer === void 0) Ie.setupRenderTarget(v); else if (ue.__hasExternalTextures) Ie.rebindTextures(v, Te.get(v.texture).__webglTexture, Te.get(v.depthTexture).__webglTexture); else if (v.depthBuffer) { const Ee = v.depthTexture; if (ue.__boundDepthTexture !== Ee) { if (Ee !== null && Te.has(Ee) && (v.width !== Ee.image.width || v.height !== Ee.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."); Ie.setupDepthRenderbuffer(v) } } const Ce = v.texture; (Ce.isData3DTexture || Ce.isDataArrayTexture || Ce.isCompressedArrayTexture) && (ae = !0); const Pe = Te.get(v).__webglFramebuffer; v.isWebGLCubeRenderTarget ? (Array.isArray(Pe[D]) ? U = Pe[D][O] : U = Pe[D], ee = !0) : v.samples > 0 && Ie.useMultisampledRTT(v) === !1 ? U = Te.get(v).__webglMultisampledFramebuffer : Array.isArray(Pe) ? U = Pe[O] : U = Pe, P.copy(v.viewport), k.copy(v.scissor), z = v.scissorTest } else P.copy(ye).multiplyScalar(V).floor(), k.copy(Oe).multiplyScalar(V).floor(), z = Je; if (O !== 0 && (U = sl), _e.bindFramebuffer(A.FRAMEBUFFER, U) && B && _e.drawBuffers(v, U), _e.viewport(P), _e.scissor(k), _e.setScissorTest(z), ee) { const ue = Te.get(v.texture); A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + D, ue.__webglTexture, O) } else if (ae) { const ue = Te.get(v.texture), Ce = D; A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, ue.__webglTexture, O, Ce) } else if (v !== null && O !== 0) { const ue = Te.get(v.texture); A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ue.__webglTexture, O) } y = -1 }, this.readRenderTargetPixels = function (v, D, O, B, U, ee, ae, me = 0) { if (!(v && v.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let ue = Te.get(v).__webglFramebuffer; if (v.isWebGLCubeRenderTarget && ae !== void 0 && (ue = ue[ae]), ue) { _e.bindFramebuffer(A.FRAMEBUFFER, ue); try { const Ce = v.textures[me], Pe = Ce.format, Ee = Ce.type; if (!je.textureFormatReadable(Pe)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } if (!je.textureTypeReadable(Ee)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } D >= 0 && D <= v.width - B && O >= 0 && O <= v.height - U && (v.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + me), A.readPixels(D, O, B, U, ie.convert(Pe), ie.convert(Ee), ee)) } finally { const Ce = N !== null ? Te.get(N).__webglFramebuffer : null; _e.bindFramebuffer(A.FRAMEBUFFER, Ce) } } }, this.readRenderTargetPixelsAsync = async function (v, D, O, B, U, ee, ae, me = 0) { if (!(v && v.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); let ue = Te.get(v).__webglFramebuffer; if (v.isWebGLCubeRenderTarget && ae !== void 0 && (ue = ue[ae]), ue) if (D >= 0 && D <= v.width - B && O >= 0 && O <= v.height - U) { _e.bindFramebuffer(A.FRAMEBUFFER, ue); const Ce = v.textures[me], Pe = Ce.format, Ee = Ce.type; if (!je.textureFormatReadable(Pe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."); if (!je.textureTypeReadable(Ee)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."); const Be = A.createBuffer(); A.bindBuffer(A.PIXEL_PACK_BUFFER, Be), A.bufferData(A.PIXEL_PACK_BUFFER, ee.byteLength, A.STREAM_READ), v.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + me), A.readPixels(D, O, B, U, ie.convert(Pe), ie.convert(Ee), 0); const Ze = N !== null ? Te.get(N).__webglFramebuffer : null; _e.bindFramebuffer(A.FRAMEBUFFER, Ze); const ct = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0); return A.flush(), await pu(A, ct, 4), A.bindBuffer(A.PIXEL_PACK_BUFFER, Be), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, ee), A.deleteBuffer(Be), A.deleteSync(ct), ee } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.") }, this.copyFramebufferToTexture = function (v, D = null, O = 0) { const B = Math.pow(2, -O), U = Math.floor(v.image.width * B), ee = Math.floor(v.image.height * B), ae = D !== null ? D.x : 0, me = D !== null ? D.y : 0; Ie.setTexture2D(v, 0), A.copyTexSubImage2D(A.TEXTURE_2D, O, 0, 0, ae, me, U, ee), _e.unbindTexture() }; const al = A.createFramebuffer(), ol = A.createFramebuffer(); this.copyTextureToTexture = function (v, D, O = null, B = null, U = 0, ee = null) { ee === null && (U !== 0 ? (vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), ee = U, U = 0) : ee = 0); let ae, me, ue, Ce, Pe, Ee, Be, Ze, ct; const nt = v.isCompressedTexture ? v.mipmaps[ee] : v.image; if (O !== null) ae = O.max.x - O.min.x, me = O.max.y - O.min.y, ue = O.isBox3 ? O.max.z - O.min.z : 1, Ce = O.min.x, Pe = O.min.y, Ee = O.isBox3 ? O.min.z : 0; else { const Bt = Math.pow(2, -U); ae = Math.floor(nt.width * Bt), me = Math.floor(nt.height * Bt), v.isDataArrayTexture ? ue = nt.depth : v.isData3DTexture ? ue = Math.floor(nt.depth * Bt) : ue = 1, Ce = 0, Pe = 0, Ee = 0 } B !== null ? (Be = B.x, Ze = B.y, ct = B.z) : (Be = 0, Ze = 0, ct = 0); const $e = ie.convert(D.format), be = ie.convert(D.type); let at; D.isData3DTexture ? (Ie.setTexture3D(D, 0), at = A.TEXTURE_3D) : D.isDataArrayTexture || D.isCompressedArrayTexture ? (Ie.setTexture2DArray(D, 0), at = A.TEXTURE_2D_ARRAY) : (Ie.setTexture2D(D, 0), at = A.TEXTURE_2D), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, D.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, D.unpackAlignment); const Ve = A.getParameter(A.UNPACK_ROW_LENGTH), Ut = A.getParameter(A.UNPACK_IMAGE_HEIGHT), ei = A.getParameter(A.UNPACK_SKIP_PIXELS), It = A.getParameter(A.UNPACK_SKIP_ROWS), Li = A.getParameter(A.UNPACK_SKIP_IMAGES); A.pixelStorei(A.UNPACK_ROW_LENGTH, nt.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, nt.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Ce), A.pixelStorei(A.UNPACK_SKIP_ROWS, Pe), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Ee); const it = v.isDataArrayTexture || v.isData3DTexture, Ot = D.isDataArrayTexture || D.isData3DTexture; if (v.isDepthTexture) { const Bt = Te.get(v), Tt = Te.get(D), Ct = Te.get(Bt.__renderTarget), ts = Te.get(Tt.__renderTarget); _e.bindFramebuffer(A.READ_FRAMEBUFFER, Ct.__webglFramebuffer), _e.bindFramebuffer(A.DRAW_FRAMEBUFFER, ts.__webglFramebuffer); for (let Fn = 0; Fn < ue; Fn++)it && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Te.get(v).__webglTexture, U, Ee + Fn), A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Te.get(D).__webglTexture, ee, ct + Fn)), A.blitFramebuffer(Ce, Pe, ae, me, Be, Ze, ae, me, A.DEPTH_BUFFER_BIT, A.NEAREST); _e.bindFramebuffer(A.READ_FRAMEBUFFER, null), _e.bindFramebuffer(A.DRAW_FRAMEBUFFER, null) } else if (U !== 0 || v.isRenderTargetTexture || Te.has(v)) { const Bt = Te.get(v), Tt = Te.get(D); _e.bindFramebuffer(A.READ_FRAMEBUFFER, al), _e.bindFramebuffer(A.DRAW_FRAMEBUFFER, ol); for (let Ct = 0; Ct < ue; Ct++)it ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Bt.__webglTexture, U, Ee + Ct) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Bt.__webglTexture, U), Ot ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Tt.__webglTexture, ee, ct + Ct) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Tt.__webglTexture, ee), U !== 0 ? A.blitFramebuffer(Ce, Pe, ae, me, Be, Ze, ae, me, A.COLOR_BUFFER_BIT, A.NEAREST) : Ot ? A.copyTexSubImage3D(at, ee, Be, Ze, ct + Ct, Ce, Pe, ae, me) : A.copyTexSubImage2D(at, ee, Be, Ze, Ce, Pe, ae, me); _e.bindFramebuffer(A.READ_FRAMEBUFFER, null), _e.bindFramebuffer(A.DRAW_FRAMEBUFFER, null) } else Ot ? v.isDataTexture || v.isData3DTexture ? A.texSubImage3D(at, ee, Be, Ze, ct, ae, me, ue, $e, be, nt.data) : D.isCompressedArrayTexture ? A.compressedTexSubImage3D(at, ee, Be, Ze, ct, ae, me, ue, $e, nt.data) : A.texSubImage3D(at, ee, Be, Ze, ct, ae, me, ue, $e, be, nt) : v.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, ee, Be, Ze, ae, me, $e, be, nt.data) : v.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, ee, Be, Ze, nt.width, nt.height, $e, nt.data) : A.texSubImage2D(A.TEXTURE_2D, ee, Be, Ze, ae, me, $e, be, nt); A.pixelStorei(A.UNPACK_ROW_LENGTH, Ve), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, Ut), A.pixelStorei(A.UNPACK_SKIP_PIXELS, ei), A.pixelStorei(A.UNPACK_SKIP_ROWS, It), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Li), ee === 0 && D.generateMipmaps && A.generateMipmap(at), _e.unbindTexture() }, this.copyTextureToTexture3D = function (v, D, O = null, B = null, U = 0) { return vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(v, D, O, B, U) }, this.initRenderTarget = function (v) { Te.get(v).__webglFramebuffer === void 0 && Ie.setupRenderTarget(v) }, this.initTexture = function (v) { v.isCubeTexture ? Ie.setTextureCube(v, 0) : v.isData3DTexture ? Ie.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? Ie.setTexture2DArray(v, 0) : Ie.setTexture2D(v, 0), _e.unbindTexture() }, this.resetState = function () { L = 0, R = 0, N = null, _e.reset(), Le.reset() }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } get coordinateSystem() { return gn } get outputColorSpace() { return this._outputColorSpace } set outputColorSpace(e) { this._outputColorSpace = e; const t = this.getContext(); t.drawingBufferColorSpace = He._getDrawingBufferColorSpace(e), t.unpackColorSpace = He._getUnpackColorSpace() } } let wt, Fi, St, fn, jc; const vg = ({ backgroundColor: i }) => t => { if (Fi) return; Fi = new Vu, Fi.background = new Ye(i), St = document.getElementById("three-canvas"), fn = 3; const n = St.clientWidth / St.clientHeight; wt = new qc(-fn * n, fn * n, fn, -fn, 1e-4, 2e3), jc = fn * n, wt.position.z = fn / 2; const r = new _g({ antialias: !0 }); r.setSize(St.clientWidth, St.clientHeight), St.appendChild(r.domElement), wt.updateProjectionMatrix(), window.addEventListener("resize", () => { const s = St.getBoundingClientRect(), a = s.width / s.height; wt.left = -fn * a, wt.right = fn * a, wt.updateProjectionMatrix(), r.setSize(s.width, s.height), r.render(Fi, wt) }), t({ scene: Fi, camera: wt, renderer: r }) }, cc = new In, Ir = new C; class Qc extends Ph { constructor() { super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry"; const e = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], t = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5]; this.setIndex(n), this.setAttribute("position", new yt(e, 3)), this.setAttribute("uv", new yt(t, 2)) } applyMatrix4(e) { const t = this.attributes.instanceStart, n = this.attributes.instanceEnd; return t !== void 0 && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } setPositions(e) { let t; e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e)); const n = new wa(t, 6, 1); return this.setAttribute("instanceStart", new Cn(n, 3, 0)), this.setAttribute("instanceEnd", new Cn(n, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this } setColors(e) { let t; e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e)); const n = new wa(t, 6, 1); return this.setAttribute("instanceColorStart", new Cn(n, 3, 0)), this.setAttribute("instanceColorEnd", new Cn(n, 3, 3)), this } fromWireframeGeometry(e) { return this.setPositions(e.attributes.position.array), this } fromEdgesGeometry(e) { return this.setPositions(e.attributes.position.array), this } fromMesh(e) { return this.fromWireframeGeometry(new Eh(e.geometry)), this } fromLineSegments(e) { const t = e.geometry; return this.setPositions(t.attributes.position.array), this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new In); const e = this.attributes.instanceStart, t = this.attributes.instanceEnd; e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), cc.setFromBufferAttribute(t), this.boundingBox.union(cc)) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new sr), this.boundingBox === null && this.computeBoundingBox(); const e = this.attributes.instanceStart, t = this.attributes.instanceEnd; if (e !== void 0 && t !== void 0) { const n = this.boundingSphere.center; this.boundingBox.getCenter(n); let r = 0; for (let s = 0, a = e.count; s < a; s++)Ir.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(Ir)), Ir.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(Ir)); this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this) } } toJSON() { } } ne.line = { worldUnits: { value: 1 }, linewidth: { value: 1 }, resolution: { value: new fe(1, 1) }, dashOffset: { value: 0 }, dashScale: { value: 1 }, dashSize: { value: 1 }, gapSize: { value: 1 } }; Pt.line = {
	uniforms: Ha.merge([ne.common, ne.fog, ne.line]), vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`, fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`}; class Yr extends Sn { constructor(e) { super({ type: "LineMaterial", uniforms: Ha.clone(Pt.line.uniforms), vertexShader: Pt.line.vertexShader, fragmentShader: Pt.line.fragmentShader, clipping: !0 }), this.isLineMaterial = !0, this.setValues(e) } get color() { return this.uniforms.diffuse.value } set color(e) { this.uniforms.diffuse.value = e } get worldUnits() { return "WORLD_UNITS" in this.defines } set worldUnits(e) { e === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS } get linewidth() { return this.uniforms.linewidth.value } set linewidth(e) { !this.uniforms.linewidth || (this.uniforms.linewidth.value = e) } get dashed() { return "USE_DASH" in this.defines } set dashed(e) { e === !0 !== this.dashed && (this.needsUpdate = !0), e === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH } get dashScale() { return this.uniforms.dashScale.value } set dashScale(e) { this.uniforms.dashScale.value = e } get dashSize() { return this.uniforms.dashSize.value } set dashSize(e) { this.uniforms.dashSize.value = e } get dashOffset() { return this.uniforms.dashOffset.value } set dashOffset(e) { this.uniforms.dashOffset.value = e } get gapSize() { return this.uniforms.gapSize.value } set gapSize(e) { this.uniforms.gapSize.value = e } get opacity() { return this.uniforms.opacity.value } set opacity(e) { !this.uniforms || (this.uniforms.opacity.value = e) } get resolution() { return this.uniforms.resolution.value } set resolution(e) { this.uniforms.resolution.value.copy(e) } get alphaToCoverage() { return "USE_ALPHA_TO_COVERAGE" in this.defines } set alphaToCoverage(e) { !this.defines || (e === !0 !== this.alphaToCoverage && (this.needsUpdate = !0), e === !0 ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE) } } const Ns = new Qe, lc = new C, uc = new C, mt = new Qe, gt = new Qe, Qt = new Qe, Fs = new C, Os = new et, _t = new Uh, hc = new C, Nr = new In, Fr = new sr, en = new Qe; let nn, Kn; function dc(i, e, t) { return en.set(0, 0, -e, 1).applyMatrix4(i.projectionMatrix), en.multiplyScalar(1 / en.w), en.x = Kn / t.width, en.y = Kn / t.height, en.applyMatrix4(i.projectionMatrixInverse), en.multiplyScalar(1 / en.w), Math.abs(Math.max(en.x, en.y)) } function xg(i, e) { const t = i.matrixWorld, n = i.geometry, r = n.attributes.instanceStart, s = n.attributes.instanceEnd, a = Math.min(n.instanceCount, r.count); for (let o = 0, c = a; o < c; o++) { _t.start.fromBufferAttribute(r, o), _t.end.fromBufferAttribute(s, o), _t.applyMatrix4(t); const l = new C, u = new C; nn.distanceSqToSegment(_t.start, _t.end, u, l), u.distanceTo(l) < Kn * .5 && e.push({ point: u, pointOnLine: l, distance: nn.origin.distanceTo(u), object: i, face: null, faceIndex: o, uv: null, uv1: null }) } } function Sg(i, e, t) { const n = e.projectionMatrix, s = i.material.resolution, a = i.matrixWorld, o = i.geometry, c = o.attributes.instanceStart, l = o.attributes.instanceEnd, u = Math.min(o.instanceCount, c.count), h = -e.near; nn.at(1, Qt), Qt.w = 1, Qt.applyMatrix4(e.matrixWorldInverse), Qt.applyMatrix4(n), Qt.multiplyScalar(1 / Qt.w), Qt.x *= s.x / 2, Qt.y *= s.y / 2, Qt.z = 0, Fs.copy(Qt), Os.multiplyMatrices(e.matrixWorldInverse, a); for (let d = 0, p = u; d < p; d++) { if (mt.fromBufferAttribute(c, d), gt.fromBufferAttribute(l, d), mt.w = 1, gt.w = 1, mt.applyMatrix4(Os), gt.applyMatrix4(Os), mt.z > h && gt.z > h) continue; if (mt.z > h) { const E = mt.z - gt.z, S = (mt.z - h) / E; mt.lerp(gt, S) } else if (gt.z > h) { const E = gt.z - mt.z, S = (gt.z - h) / E; gt.lerp(mt, S) } mt.applyMatrix4(n), gt.applyMatrix4(n), mt.multiplyScalar(1 / mt.w), gt.multiplyScalar(1 / gt.w), mt.x *= s.x / 2, mt.y *= s.y / 2, gt.x *= s.x / 2, gt.y *= s.y / 2, _t.start.copy(mt), _t.start.z = 0, _t.end.copy(gt), _t.end.z = 0; const x = _t.closestPointToPointParameter(Fs, !0); _t.at(x, hc); const m = du.lerp(mt.z, gt.z, x), f = m >= -1 && m <= 1, b = Fs.distanceTo(hc) < Kn * .5; if (f && b) { _t.start.fromBufferAttribute(c, d), _t.end.fromBufferAttribute(l, d), _t.start.applyMatrix4(a), _t.end.applyMatrix4(a); const E = new C, S = new C; nn.distanceSqToSegment(_t.start, _t.end, S, E), t.push({ point: S, pointOnLine: E, distance: nn.origin.distanceTo(S), object: i, face: null, faceIndex: d, uv: null, uv1: null }) } } } class Mg extends Mt { constructor(e = new Qc, t = new Yr({ color: Math.random() * 16777215 })) { super(e, t), this.isLineSegments2 = !0, this.type = "LineSegments2" } computeLineDistances() { const e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, r = new Float32Array(2 * t.count); for (let a = 0, o = 0, c = t.count; a < c; a++, o += 2)lc.fromBufferAttribute(t, a), uc.fromBufferAttribute(n, a), r[o] = o === 0 ? 0 : r[o - 1], r[o + 1] = r[o] + lc.distanceTo(uc); const s = new wa(r, 2, 1); return e.setAttribute("instanceDistanceStart", new Cn(s, 1, 0)), e.setAttribute("instanceDistanceEnd", new Cn(s, 1, 1)), this } raycast(e, t) { const n = this.material.worldUnits, r = e.camera; r === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'); const s = e.params.Line2 !== void 0 && e.params.Line2.threshold || 0; nn = e.ray; const a = this.matrixWorld, o = this.geometry, c = this.material; Kn = c.linewidth + s, o.boundingSphere === null && o.computeBoundingSphere(), Fr.copy(o.boundingSphere).applyMatrix4(a); let l; if (n) l = Kn * .5; else { const h = Math.max(r.near, Fr.distanceToPoint(nn.origin)); l = dc(r, h, c.resolution) } if (Fr.radius += l, nn.intersectsSphere(Fr) === !1) return; o.boundingBox === null && o.computeBoundingBox(), Nr.copy(o.boundingBox).applyMatrix4(a); let u; if (n) u = Kn * .5; else { const h = Math.max(r.near, Nr.distanceToPoint(nn.origin)); u = dc(r, h, c.resolution) } Nr.expandByScalar(u), nn.intersectsBox(Nr) !== !1 && (n ? xg(this, t) : Sg(this, r, t)) } onBeforeRender(e) { const t = this.material.uniforms; t && t.resolution && (e.getViewport(Ns), this.material.uniforms.resolution.value.set(Ns.z, Ns.w)) } } class el extends Qc { constructor() { super(), this.isLineGeometry = !0, this.type = "LineGeometry" } setPositions(e) { const t = e.length - 3, n = new Float32Array(2 * t); for (let r = 0; r < t; r += 3)n[2 * r] = e[r], n[2 * r + 1] = e[r + 1], n[2 * r + 2] = e[r + 2], n[2 * r + 3] = e[r + 3], n[2 * r + 4] = e[r + 4], n[2 * r + 5] = e[r + 5]; return super.setPositions(n), this } setColors(e) { const t = e.length - 3, n = new Float32Array(2 * t); for (let r = 0; r < t; r += 3)n[2 * r] = e[r], n[2 * r + 1] = e[r + 1], n[2 * r + 2] = e[r + 2], n[2 * r + 3] = e[r + 3], n[2 * r + 4] = e[r + 4], n[2 * r + 5] = e[r + 5]; return super.setColors(n), this } setFromPoints(e) { const t = e.length - 1, n = new Float32Array(6 * t); for (let r = 0; r < t; r++)n[6 * r] = e[r].x, n[6 * r + 1] = e[r].y, n[6 * r + 2] = e[r].z || 0, n[6 * r + 3] = e[r + 1].x, n[6 * r + 4] = e[r + 1].y, n[6 * r + 5] = e[r + 1].z || 0; return super.setPositions(n), this } fromLine(e) { const t = e.geometry; return this.setPositions(t.attributes.position.array), this } } class fc extends Mg { constructor(e = new el, t = new Yr({ color: Math.random() * 16777215 })) { super(e, t), this.isLine2 = !0, this.type = "Line2" } } class yg extends Mt { constructor(e, t, n, r = .05, s = 4) { const a = new Ta; a.moveTo(e[0][0], e[0][1]); for (let o = 1; o < e.length; o++)a.lineTo(e[o][0], e[o][1]); a.closePath(), super(new qr(a), new Rn({ color: t })), this.color = t, this.sizeCircle = r, this.sizeEdge = s, this.tangram = n, n.userData.maxOrder += .01, this.position.z = n.userData.maxOrder, this.isPiece = !0, this.vertices = this.geometry.attributes.position.array, this.vertices1 = this.geometry.attributes.position, this.userData.mesh = this, this.buildEdges(), this.buildPivotRotate(), this.buildIconRotate(), this.buildSectors(), this.updateWorldVertices(), this.setVisible(!1) } buildEdges() { const e = new el; e.setPositions([...this.vertices, this.vertices[0], this.vertices[1], 0]); const t = new Yr({ color: 0, linewidth: this.sizeEdge, resolution: new fe(window.innerWidth, window.innerHeight), dashed: !1 }), n = new Yr({ color: 0, linewidth: 1, resolution: new fe(window.innerWidth, window.innerHeight), dashed: !1 }); this.edge = new fc(e, t), this.edge.position.z = 1e-4, this.edge2 = new fc(e, n), this.edge.position.z = 1e-4, this.edge.isEdge = !0, this.edge.userData.mesh = this, this.add(this.edge, this.edge2) } buildPivotRotate() { this.pivotRotate = new Mt(new Xr(this.sizeCircle * .8, 32), new Rn({ color: 0 })), this.pivotRotate.position.z = .01, this.pivotRotate.isPivotRotate = !0, this.pivotRotate.visible = !0, this.pivotRotate.userData.mesh = this, this.add(this.pivotRotate), this.updatePivotRotatePositionIndex(0) } buildIconRotate() { this.iconRotate = new Mt(new Xr(this.sizeCircle, 32), new Rn({ color: 7833753 })), this.iconRotate.position.z = .01, this.iconRotate.isRotateIcon = !0, this.iconRotate.userData.mesh = this; const e = { x: 0, y: 0 }; for (let n = 0; n < this.vertices.length; n += 3)e.x += this.vertices[n + 0], e.y += this.vertices[n + 1]; const t = this.vertices.length / 3; this.iconRotate.position.set(e.x / t, e.y / t, 0), this.add(this.iconRotate) } buildSectors() { this.sectors = new Bi, this.sectors.position.z = .01, this.sectors.userData.mesh = this; for (let e = 0; e < this.vertices.length; e += 3) { const t = new Ta, n = (e - 3 + this.vertices.length) % this.vertices.length, r = Math.atan2(this.vertices[n + 1] - this.vertices[e + 1], this.vertices[n + 0] - this.vertices[e + 0]), s = (e + 3 + this.vertices.length) % this.vertices.length; let a = Math.atan2(this.vertices[s + 1] - this.vertices[e + 1], this.vertices[s + 0] - this.vertices[e + 0]); t.moveTo(this.vertices[e], this.vertices[e + 1]); let o = 1 * this.sizeEdge / Math.abs(Math.sin((a - r) / 2)) / 80; t.absarc(this.vertices[e], this.vertices[e + 1], o, r, a, !1), t.lineTo(this.vertices[e], this.vertices[e + 1]); const c = new qr(t), l = new Rn({ color: 65280, side: tn }), u = new Mt(c, l); u.isSector = !0, u.userData.mesh = this, this.sectors.add(u) } this.add(this.sectors) } setRenderOrder(e, t) { this.renderOrder = e, this.edge.renderOrder = t, this.pivotRotate.renderOrder = t, this.iconRotate.renderOrder = t, this.sectors.renderOrder = t } setVisible(e) { this.edge.visible = e, this.pivotRotate.visible = e, this.sectors.visible = e } setSelected() { this.tangram.userData.maxOrder += .001, this.position.z = this.tangram.userData.maxOrder, this.pivotRotate.visible = !1, this.edge.visible = !0 } updatePivotRotatePositionIndex(e) { this.pivotRotate.position.x = this.vertices[e + 0], this.pivotRotate.position.y = this.vertices[e + 1] } updatePivotRotatePositionIndex2(e) { const t = this.vertices.length / 3, n = (e + t) % t; this.pivotRotate.position.x = this.vertices[n + 0], this.pivotRotate.position.y = this.vertices[n + 1] } updatePivotRotatePosition(e) { this.pivotRotate.position.x = e.x, this.pivotRotate.position.y = e.y, this.pivotRotate.updateMatrixWorld(!0) } getClosestVertex(e) { let t = 0, n = 1 / 0; for (let r = 0; r < this.verticesWorld.length; r++) { const s = e.distanceTo(this.verticesWorld[r]); s < n && (n = s, t = r) } this.updatePivotRotatePositionIndex(t * 3) } addPosition(e) { this.position.add(e) } rotateAroundWorldPoint(e, t) { const n = new Ri().setFromAxisAngle(new C(0, 0, 1), t); this.position.sub(e), this.position.applyQuaternion(n), this.position.add(e), this.quaternion.premultiply(n), this.updateWorldVertices() } rotateAroundPivot(e) { const { x: t, y: n } = new C().setFromMatrixPosition(this.pivotRotate.matrixWorld), r = new et().makeTranslation(t, n, 0).multiply(new et().makeRotationZ(e)).multiply(new et().makeTranslation(-t, -n, 0)); this.applyMatrix4(r) } getWorldVertices() { return this.verticesWorld } updateWorldVertices() { const e = [], t = this.position.z; this.position.z = 0; for (let n = 0; n < this.vertices.length; n += 3) { const r = new C(this.vertices[n], this.vertices[n + 1], 0); this.localToWorld(r), e.push(r) } return this.position.z = t, this.verticesWorld = e, e } } function Eg(i = 30) { const e = [{ name: "tri\xE1ngulo peque\xF1o A", points: [[0, 0], [.5, .5], [.5, -.5]], color: 13487446 }], t = new Dt; t.userData.maxOrder = -999, t.isTangram = !0; for (let n = 0; n < 16; n++) { const r = e[0], s = new yg(r.points, r.color, t); s.scale.set(i, i, 1), t.add(s) } return t } function Tg(i, e = 5) { const t = -jc * 1, n = []; for (let r = 0; r < 16; r++)n.push({ index: r, position: [t, 0], rotation: 0, scale: 2 }); i.children.forEach((r, s) => { r.position.x = e * n[s].position[0], r.position.y = e * n[s].position[1], r.rotation.z = n[s].rotation, r.scale.set(n[s].scale, n[s].scale, n[s].scale), r.updateWorldVertices() }) } function pc(i, e, t) { const n = new C().subVectors(t, e), r = new C().subVectors(i, e), s = n.dot(n); let a = r.dot(n) / s; const o = a; a = Math.max(0, Math.min(1, a)); const c = e.clone().addScaledVector(n, a), l = e.clone().addScaledVector(n, o); return { pointS: c, distance: i.distanceTo(c), t: a, pointR: l, distance1: i.distanceTo(l), t1: o, distanceA: i.distanceTo(e), distanceB: i.distanceTo(t) } } function bg(i, e, t, n) { const r = new C().subVectors(n, t).normalize(), s = new C().subVectors(e, i).normalize(); let a = Math.acos(Math.clamp(s.dot(r), -1, 1)); return s.x * r.y - s.y * r.x < 0 && (a = -a), a > Math.PI / 2 ? a += -Math.PI : a < -Math.PI / 2 && (a += Math.PI), a } function Ag(i, e, t = .3) { let n = i.getWorldVertices(); const r = e.getWorldVertices(); let s = { distance: 1 / 0, vertice: -1, firstPoint: void 0, pointS: void 0, v1: void 0, v2: void 0, vTOv: !1 }, a; e: for (let h = 0; h < r.length; h++) { const d = r[h], p = r[(h + 1) % r.length]; for (let g = 0; g < n.length; g++) { if (a = n[g], a.distanceTo(d) < 1.2 * t) { s = { distance: 0, verticeMoved: g, verticeFixed: h, firstPoint: a, pointS: d, vTOv: !0 }; break e } if (a.distanceTo(p) < 1.2 * t) { s = { distance: 0, verticeMoved: g, verticeFixed: (h + 1) % r.length, firstPoint: a, pointS: p, vTOv: !0 }; break e } const { pointS: x, distance: m } = pc(a, d, p); m < s.distance && (s = { distance: m, verticeMoved: g, verticeFixed: h, firstPoint: a, pointS: x, vTOv: !1 }) } } if (s.distance > t) return !1; const o = new C().subVectors(s.pointS, s.firstPoint); i.position.add(o); function c(h, d, p, g) { const { distance1: x } = pc(d, p, g); if (x < t) { const m = bg(h, d, p, g); i.rotateAroundWorldPoint(h, m) } } for (let h = 0; h < n.length; h++)n[h].add(o); const l = r[s.verticeFixed]; let u = r[(s.verticeFixed + 1 + r.length) % r.length]; { const h = n[(s.verticeMoved - 1 + n.length) % n.length]; if (c(s.firstPoint, h, l, u)) return !0 } { const h = n[(s.verticeMoved + 1 + n.length) % n.length]; if (c(s.firstPoint, h, l, u)) return !0 } if (!s.vTOv) return !0; u = r[(s.verticeFixed - 1 + r.length) % r.length]; { const h = n[(s.verticeMoved - 1 + n.length) % n.length]; if (c(s.firstPoint, h, l, u)) return !0 } { const h = n[(s.verticeMoved + 1 + n.length) % n.length]; if (c(s.firstPoint, h, l, u)) return !0 } return !0 } let qi = 0, Ai = new Dh, ir = new fe, qa = new fe, lt, Yi = new fe, wg = new Mt(new Ci(1e3, 1e3), new Rn({ visible: !1 })), Zr = !1, Kr = !1; const Jr = Math.PI / 120; function Ya(i, e) { const t = e.getBoundingClientRect(); ir.x = (i.clientX - t.left) / t.width * 2 - 1, ir.y = -((i.clientY - t.top) / t.height) * 2 + 1 } function tl(i) { var t; return Ya(i, St), Ai.setFromCamera(ir, wt), ((t = Ai.intersectObject(wg)[0]) == null ? void 0 : t.point) || new C } function Rg(i) { Ya(i, St), qa.set(i.clientX, i.clientY), Yi.set(i.clientX, i.clientY), Ai.setFromCamera(ir, wt); const e = Ai.intersectObject(Jn); if (e.length === 0) return; lt = e[0].object.userData.mesh, lt.setSelected(), lt.getClosestVertex(e[0].point), lt.setVisible(!0), Kt.update() } function Cg(i) { lt == null || lt.setVisible(!1), Ya(i, St), qa.set(i.clientX, i.clientY), Yi.set(i.clientX, i.clientY), Ai.setFromCamera(ir, wt); const e = Ai.intersectObject(Jn); if (e.length === 0) return; let t = e[0].object; for (let n = 1; n < e.length; n++)e[n].object.isRotateIcon && t === e[n].object.userData.mesh && (t = e[n].object); if (t.isRotateIcon && (Kr = !0), lt = t.userData.mesh, lt.setSelected(), i.shiftKey ? (lt.getClosestVertex(e[0].point), lt.setVisible(!0)) : Zr = !0, Kr) { lt.setVisible(!0); const n = tl(i), r = new C().setFromMatrixPosition(lt.pivotRotate.matrixWorld); qi = Math.atan2(n.y - r.y, n.x - r.x), qi = Math.round(qi / Jr) * Jr } Kt.update() } function Pg(i) { if (!Zr) return; const e = new fe(i.clientX, i.clientY); if (Kr) { const t = tl(i), n = new C().setFromMatrixPosition(lt.pivotRotate.matrixWorld); let r = Math.atan2(t.y - n.y, t.x - n.x); r = Math.round(r / Jr) * Jr, lt.rotateAroundPivot(r - qi), qi = r } else { const t = e.x - Yi.x, n = e.y - Yi.y, r = new C(t * (wt.right - wt.left) / St.clientWidth, -n * (wt.top - wt.bottom) / St.clientHeight, 0); lt.addPosition(r), qa.set(i.clientX, i.clientY) } Yi.set(i.clientX, i.clientY), Kt.update() } function Lg() { if (Zr) { lt.updateWorldVertices(); for (let i = 0; i < Jn.children.length; i++) { if (lt.uuid === Jn.children[i].uuid) continue; if (Ag(lt, Jn.children[i], .1)) break } } Zr = !1, Kr = !1, lt == null || lt.setVisible(!1), Kt.update() } function Dg() { St.addEventListener("mousedown", Cg), St.addEventListener("mousemove", Pg), St.addEventListener("mouseup", Lg), St.addEventListener("dblclick", Rg) } class Un { constructor(e) { this.dom = e } add() { for (let e = 0; e < arguments.length; e++) { const t = arguments[e]; t instanceof Un ? this.dom.appendChild(t.dom) : console.error("UIElement:", t, "is not an instance of UIElement.") } return this } remove() { for (let e = 0; e < arguments.length; e++) { const t = arguments[e]; t instanceof Un ? this.dom.removeChild(t.dom) : console.error("UIElement:", t, "is not an instance of UIElement.") } return this } clear() { for (; this.dom.children.length;)this.dom.removeChild(this.dom.lastChild) } setId(e) { return this.dom.id = e, this } getId() { return this.dom.id } setClass(e) { return this.dom.className = e, this } addClass(e) { return this.dom.classList.add(e), this } removeClass(e) { return this.dom.classList.remove(e), this } setStyle(e, t) { for (let n = 0; n < t.length; n++)this.dom.style[e] = t[n]; return this } setDisabled(e) { return this.dom.disabled = e, this } setTextContent(e) { return this.dom.textContent = e, this } setInnerHTML(e) { this.dom.innerHTML = e } getIndexOfChild(e) { return Array.prototype.indexOf.call(this.dom.children, e.dom) } } const Ug = ["position", "left", "top", "right", "bottom", "width", "height", "border", "borderLeft", "borderTop", "borderRight", "borderBottom", "borderColor", "display", "overflow", "margin", "marginLeft", "marginTop", "marginRight", "marginBottom", "padding", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "verticalAlign", "color", "background", "backgroundColor", "opacity", "fontSize", "fontWeight", "textAlign", "textDecoration", "textTransform", "cursor", "zIndex"]; Ug.forEach(function (i) { const e = "set" + i.substring(0, 1).toUpperCase() + i.substring(1, i.length); Un.prototype[e] = function () { return this.setStyle(i, arguments), this } }); const Ig = ["KeyUp", "KeyDown", "MouseOver", "MouseOut", "Click", "DblClick", "Change", "Input"]; Ig.forEach(function (i) { const e = "on" + i; Un.prototype[e] = function (t) { return this.dom.addEventListener(i.toLowerCase(), t.bind(this), !1), this } }); class Za extends Un { constructor() { super(document.createElement("div")) } } class Oi extends Za { constructor() { super(), this.dom.className = "Panel" } } class Ng extends Un { constructor(e, t) { super(document.createElement("a")), this.dom.href = t, this.dom.innerHTML = e } } class Fg extends Un { constructor(e, t) { super(document.createElement("a")), this.dom.href = t, this.dom.classList.add("logoTeiDSpace"); const n = document.createElement("img"); n.src = e, this.dom.appendChild(n); let r = new Za; r.dom.innerHTML = "TeiDSpace", r.dom.classList.add("logoText"), this.add(r) } } const Og = i => { const e = new Oi; e.setId("menubar"), document.body.appendChild(e.dom); const t = new Oi; t.setClass("menu logo"); const n = new Fg("../assets/icons/logo_TEIDSPACE.png", "../TeiDSpace/index.html"); t.add(n), e.add(t); for (let r = 1; r < i.menu.length; r++) { const s = i.menu[r]; if (s.permission > i.levelPermission) continue; const a = new Oi; a.setClass("menu"); const o = new Oi; for (let l = 0; l < s.classes.length; l++)o.setClass(s.classes[l]); o.setTextContent(i.strings.getKey(s.title)), a.add(o); const c = new Oi; c.setClass("options"), a.add(c); for (let l = 0; l < s.subMenu.length; l++) { const u = s.subMenu[l]; if (u.permission > i.levelPermission) continue; const h = new Za; for (let p = 0; p < u.classes.length; p++)h.setClass(u.classes[p]); const d = new Ng(i.strings.getKey(u.title), u.link); h.add(d), c.add(h) } e.add(a) } }, Bg = i => { const e = "TeiDSpace", t = { language: "es", permission: 100 }; if (window.localStorage[e] === void 0) window.localStorage[e] = JSON.stringify(t); else { const n = JSON.parse(window.localStorage[e]); for (const r in n) t[r] = n[r] } return { getKey: function (n) { return t[n] }, setKey: function () { for (let n = 0, r = arguments.length; n < r; n += 2)t[arguments[n]] = arguments[n + 1]; window.localStorage[e] = JSON.stringify(t) }, clear: function () { delete window.localStorage[e] } } }, zg = i => { const e = { en: { "menubar/views": "Views", "menubar/isometric": "Perspective", "menubar/pieces": "Pieces", "menubar/generator": "Generator", "menubar/help": "Help", "menubar/helptutorials": "Tutorials", "menubar/helpaboutus": "About us...", "menubar/tangrambuilding": "Tangram Building", "menubar/tangram": "Tangram", "menubar/tangramTriangle": "Tangram Triangle", "menubar/soma": "Soma Cube", "menubar/somaproject": "Soma Project", "menubar/somadevelopment": "Soma Development", "menubar/somabuilding": "Soma Building", "menubar/somaexercises": "Soma exercices", "menubar/objects": "Object", "menubar/create": "Create Object", "menubar/examples": "Examples", "menubar/exercices": "Exercices", "menubar/correction": "Correction", "menubar/soma6viewsexamples": "Examples 6 views", "menubar/soma6viewsexercises": "Exercises 6 views", "toolbar/translate": "Translate", "toolbar/rotate": "Rotate", "toolbar/scale": "Scale", "modelbar/cube": "Cube", "modelbar/cube1": "Cube 1", "modelbar/cube2": "Cube 2", "modelbar/cube3": "Cube 3", "modelbar/icosahedron": "Icosahedron", "select/vertices": "Vertices", "select/edges": "Edges", "select/objects": "Objects", "CSG/selected": "Selecteds: ", "CSG/addition": "Addition A \u222A B", "CSG/subtraction": "Subtraction A - B", "CSG/reversesubtraction": "Reverse Subtraction B - A", "CSG/difference": "Difference A \u2295 B", "CSG/intersection": "Intersection", "file/save": "save", "file/load": "load", "planeprojec/plan": "Plan", "planeprojec/elevation": "Elevation", "planeprojec/profile": "Profile", "line/visible": "Visible Line", "line/hidden": "Hidden Line", "line/delete": "Delete Line", "line/change": "Change", "line/create": "Create", "line/red": "Red line", "line/black": "Black line", "views/open": "Open Views", "views/close": "Close Views", solutions: "Solution", opacity: "Opacity", "object/base": "Object base", "object/auxiliar": "Auxiliar Object", "clipboard/copy": "Copy", "clipboard/paste": "Paste", "soma/cube": "Soma cube", "soma/piece": "Piece", "number/exercise": "Exercise", "number/example": "Example", "configBar/size": "Size", "configBar/edges": "Edges", "configBar/color": "Color", "configBar/shadow": "Shadow", "configBar/visible": "Visible", "configBar/development": "Development" }, es: { "menubar/views": "Vistas", "menubar/isometric": "Perspectiva", "menubar/pieces": "Piezas", "menubar/generator": "Generador", "menubar/help": "Ayuda", "menubar/helptutorials": "Tutoriales", "menubar/helpaboutus": "Acerca de...", "menubar/tangrambuilding": "Construcci\xF3n Tangram", "menubar/tangram": "Tangram", "menubar/tangramTriangle": "Tri\xE1ngulo Tangram", "menubar/soma": "Cubo Soma", "menubar/somaproject": "Proyecto Soma", "menubar/somadevelopment": "Desarrollo Soma ", "menubar/somabuilding": "Construcci\xF3n Soma", "menubar/somaexercises": "Soma ejercicios", "menubar/soma6viewsexamples": "Ejemplos 6 vistas", "menubar/soma6viewsexercises": "Ejercicios 6 vistas", "menubar/objects": "Objeto", "menubar/create": "Crear Objetos", "menubar/examples": "Ejemplos", "menubar/exercices": "Ejercicios", "menubar/correction": "Correcci\xF3n", "toolbar/translate": "Trasladar", "toolbar/rotate": "Rotar", "toolbar/scale": "Escalar", "modelbar/cube": "Cubo", "modelbar/cube1": "Cubo 1", "modelbar/cube2": "Cubo 2", "modelbar/cube3": "Cubo 3", "modelbar/icosahedron": "Icosaedro", "select/vertices": "V\xE9rtices", "select/edges": "Aristas", "select/objects": "Objetos", "CSG/selected": "Seleccionados: ", "CSG/addition": "Adici\xF3n A \u222A B", "CSG/subtraction": "Sustracci\xF3n A - B", "CSG/reversesubtraction": "Sustracci\xF3n inversa B - A", "CSG/difference": "Diferencia A \u2295 B", "CSG/intersection": "Intersecci\xF3n", "file/save": "Guardar", "file/load": "Cargar", "planeprojec/plan": "Planta", "planeprojec/elevation": "Alzado", "planeprojec/profile": "Perfil", "line/visible": "L\xEDnea Visible", "line/hidden": "L\xEDnea Oculta", "line/delete": "Borrar L\xEDnea", "line/change": "Cambiar", "line/create": "Crear", "line/red": "L\xEDnea roja", "line/black": "L\xEDnea negra", "views/open": "Abir Vistas", "views/close": "Cerrar Vistas", solutions: "Soluci\xF3n", opacity: "Opacidad", "object/base": "Objeto base", "object/auxiliar": "Objeto auxiliar", "clipboard/copy": "Copiar", "clipboard/paste": "Pegar", "soma/cube": "Cubo Soma", "soma/piece": "Pieza", "number/exercise": "Ejercicio", "number/example": "Ejemplo", "configBar/size": "Tama\xF1o", "configBar/edges": "Aristas", "configBar/color": "Color", "configBar/shadow": "Sombra", "configBar/visible": "Visible", "configBar/development": "Desarrollo" }, ca: { "menubar/views": "Vistes", "menubar/isometric": "Perspectiva", "menubar/pieces": "Peces", "menubar/generator": "Generador", "menubar/help": "Ajuda", "menubar/helptutorials": "Tutorials", "menubar/helpaboutus": "Sobre...", "menubar/tangrambuilding": "Construcci\xF3 Tangram", "menubar/tangram": "Tangram", "menubar/tangramTriangle": "Triangle Tangram", "menubar/soma": "Cub Soma", "menubar/somaproject": "Projecte Soma", "menubar/somadevelopment": "Desenvolupament Soma ", "menubar/somabuilding": "Construcci\xF3 Soma", "menubar/somaexercises": "Soma exercicis", "menubar/objects": "Objecte", "menubar/create": "Crear Objectes", "menubar/examples": "Exemples", "menubar/exercices": "Exercicis", "menubar/correction": "Correcci\xF3", "menubar/soma6viewsexamples": "Exemples 6 vistes", "menubar/soma6viewsexercises": "Exercicis 6 vistes", "toolbar/translate": "Traslladar", "toolbar/rotate": "Rotar", "toolbar/scale": "Escalar", "modelbar/cube": "Cub", "modelbar/cube1": "Cub 1", "modelbar/cube2": "Cub 2", "modelbar/cube3": "Cub 3", "modelbar/icosahedron": "Icosaedre", "select/vertices": "V\xE8rtexs", "select/edges": "Arestes", "select/objects": "Objectes", "CSG/selected": "Seleccionats: ", "CSG/addition": "Adici\xF3 A \u222A B", "CSG/subtraction": "Sustracci\xF3 A - B", "CSG/reversesubtraction": "Sustracci\xF3 inversa B - A", "CSG/difference": "Difer\xE8ncia A \u2295 B", "CSG/intersection": "Intersecci\xF3", "file/save": "Desar", "file/load": "Cargar", "planeprojec/plan": "Planta", "planeprojec/elevation": "Al\xE7at", "planeprojec/profile": "Perfil", "line/visible": "L\xEDnia Visible", "line/hidden": "L\xEDnia Oculta", "line/delete": "Esborrar L\xEDnia", "line/change": "Canviar", "line/create": "Crear", "line/red": "L\xEDnia vermella", "line/black": "L\xEDnia negra", "views/open": "Obir Vistes", "views/close": "Tancar Vistes", solutions: "Soluci\xF3", opacity: "Opacitat", "object/base": "Objecte base", "object/auxiliar": "Objecte auxiliar", "clipboard/copy": "Copia", "clipboard/paste": "Enganxa", "soma/cube": "Cub Soma", "soma/piece": "Pe\xE7a", "number/exercise": "Exercici", "number/example": "Exemple", "configBar/size": "Tamany", "configBar/edges": "Arestes", "configBar/color": "Color", "configBar/shadow": "Ombra", "configBar/visible": "Visible", "configBar/development": "Desenvolupament" } }; return { getKey: function (t) { return e[i.getKey("language")][t] || "???" } } }, Vg = { backgroundColor: 13421772 }; Math.clamp || (Math.clamp = (i, e, t) => i < e ? e : i > t ? t : i); const Kt = { update: void 0, material: null }, Hg = .8, Pa = Hg, Jn = Eg(Pa); vg(Vg)(async ({ scene: i, camera: e, renderer: t }) => { Kt.update = () => t.render(i, e); const n = new Ci(9, 9); Kt.material = new Rn({ opacity: 0, transparent: !0 }); const r = new Mt(n, Kt.material); i.add(r); const s = Pa / 1.5; r.position.z = -1e3, r.position.x = 1, r.scale.set(s, s, 1), i.add(Jn), Dg(), Tg(Jn, Pa), Kt.update(); function a() { const o = new URLSearchParams(window.location.search), c = o.get("lang"); let l = o.get("perm"), u = Bg(); return c !== null && u.setKey("language", c), l !== null ? u.setKey("permission", this.levelPermission) : l = u.getKey("permission"), zg(u) } Og({ menu: await Gg(), strings: a() }) }); async function Gg() { return await fetch("../common/menu.json").then(e => e.json()).then(e => e.menu) } const kg = (i, e) => { i.setAttribute("width", "1000"), i.setAttribute("height", "1000"); const t = new XMLSerializer().serializeToString(i), n = new Blob([t], { type: "image/svg+xml;charset=utf-8" }), r = URL.createObjectURL(n); new Ch().load(r, a => { a.needsUpdate = !0, e.map = a, e.needsUpdate = !0, URL.revokeObjectURL(r), Kt.update() }, void 0, a => { console.error("Error al cargar textura SVG", a) }) }; document.querySelectorAll("#right .tangram-tile").forEach(i => { i.addEventListener("click", () => { const e = i.querySelector("svg"); Kt.material.opacity = .2, kg(e, Kt.material) }) });
