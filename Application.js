/*
 *      Copyright (c) Kenan Sulayman. 2011. All rights reserved.
 *      You're resposible for this applications application.
 */

/*
        This is based on an early kernel of the MetaEarth-project.
        Reference: https://github.com/KenanSulayman/MetaEarth/blob/7e76174165a29a350c52fdb646d71cd7c781e5f2/Application.js
 */

var $ = function (v) { return require(v); }, Config, fs, http, path, url;

http = $("http"), fs = $("fs"), url = $("url"). path = $("path");

global.b64e = function (a) {
        var b, c, d, e, f, g, h, i, j, k;
        e = void 0;
        b = void 0;
        c = void 0;
        d = void 0;
        f = 0;
        k = 0;
        h = "";
        h = [];
        if (!a) return a;
        a += "";
        if (!(a === null || typeof a === "undefined")) {
                a += "";
                e = "";
                b = c = d = 0;
                d = a.length;
                i = 0;
                while (i < d) {
                        g = a.charCodeAt(i);
                        j = null;
                        if (g < 128) {
                                c++;
                        } else {
                                j = (g > 127 && g < 2048 ? String.fromCharCode(g >> 6 | 192) + String.fromCharCode(g & 63 | 128) : String.fromCharCode(g >> 12 | 224) + String.fromCharCode(g >> 6 & 63 | 128) + String.fromCharCode(g & 63 | 128));
                        }
                        j !== null && (c > b && (e += a.slice(b, c)), e += j, b = c = i + 1);
                        i++;
                }
                c > b && (e += a.slice(b, d));
                a = e;
        }
        while (true) {
                e = a.charCodeAt(f++);
                b = a.charCodeAt(f++);
                c = a.charCodeAt(f++);
                d = e << 16 | b << 8 | c;
                e = d >> 18 & 63;
                b = d >> 12 & 63;
                c = d >> 6 & 63;
                d &= 63;
                h[k++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d);
                if (!(f < a.length)) break;
        }
        h = h.join("");
        f = a.length % 3;
        return (f ? h.slice(0, f - 3) : h) + "===".slice(f || 3);
};

global.log = console.log;

Config = {
        i: false,
        inc: 0,
        gV: function (v, u) {
                var data, i, pair, query, vars;
                query = Config.gP(u).substr(1);
                vars = query.split("&");
                data = [];
                i = 0;
                while (i < vars.length) {
                        pair = vars[i].split("=");
                        if (pair[0] === v) {
                                if (this.i === false) {
                                        return (this.i === false ? pair[1] : !(this.i = !this.i));
                                } else {
                                        data.push(pair);
                                }
                        }++i;
                }
                if (data === []) {
                        return false;
                } else {
                        return data;
                }
        },
        gZ: function (v, u) {
                this.i = false;
                return this.gV(v, u);
        },
        gVc: function (v, u) {
                this.i = !this.i;
                return this.gV(v, u);
        },
        gP: function (u) {
                return u.substr(u.indexOf("?"), u.length);
        },
        cH: function (r) {
                var z;
                z = "i";
                if (Config.gVc(z, r)) return z;
                z = "m";
                if (Config.gVc(z, r)) return z;
                z = "h";
                if (Config.gVc(z, r)) return z;
                return false;
        },
        gI: function () {
                return this.inc = this.inc + 1;
        }
};

(function (callback) {
        var socket;
        socket = require("net").createConnection(80, "localhost");
        socket.on("connect", function () {
                callback(socket.address().address);
                return socket.end();
        });
        return socket.on("error", function (e) {
                return process.exit();
        });
})(function (a) {
        log(a);
        a = a.split(/\./g);
        a = a[0] + "." + a[1] + "." + a[2];
        return log("Detected IP-Spectrum: " + a);
});

http.createServer(function (request, response) {
        var filename, uri;
        uri = url.parse(request.url).pathname;
        return filename = path.join(process.cwd(), uri);
}).listen(80);