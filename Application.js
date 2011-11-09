/*
 *      Copyright (c) Kenan Sulayman. 2011. All rights reserved.
 *      You're resposible for this applications application.
 */

/*
        This is based on an early kernel of the MetaEarth-project.
        Reference: https://github.com/KenanSulayman/MetaEarth/blob/7e76174165a29a350c52fdb646d71cd7c781e5f2/Application.js
 */
        
var $ = function (v) {return require(v);}
var http = $('http'),
        fs = $('fs'),
        url = $('url'),
        path = $('path');

global.b64e = function (a) { // b64e+utf8
        var e, b, c, d, f = 0,
                k = 0,
                h = "",
                h = [];
        if (!a) return a;
        a += "";
        if (a === null || typeof a === "undefined") a = "";
        else {
                a += "";
                e = "";
                b = c = d = 0;
                d = a.length;
                for (var i = 0; i < d; i++) {
                        var g = a.charCodeAt(i),
                                j = null;
                        g < 128 ? c++ : j = g > 127 && g < 2048 ? String.fromCharCode(g >> 6 | 192) + String.fromCharCode(g & 63 | 128) : String.fromCharCode(g >> 12 | 224) + String.fromCharCode(g >> 6 & 63 | 128) + String.fromCharCode(g & 63 | 128);
                        j !== null && (c > b && (e += a.slice(b, c)), e += j, b = c = i + 1)
                }
                c > b && (e += a.slice(b, d));
                a = e
        }
        do e = a.charCodeAt(f++), b = a.charCodeAt(f++), c = a.charCodeAt(f++), d = e << 16 | b << 8 | c, e = d >> 18 & 63, b = d >> 12 & 63, c = d >> 6 & 63, d &= 63, h[k++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d);
        while (f < a.length);
        h = h.join("");
        f = a.length % 3;
        return (f ? h.slice(0, f - 3) : h) + "===".slice(f || 3)
};

var Config = {
        // vars
        i: false,
        inc: 0,
        // functions
        gV: function (v, u) {
                var query = Config.gP(u).substr(1);
                var vars = query.split("&"),
                        data = [];
                for (var i = 0; i < vars.length; ++i) {
                        var pair = vars[i].split("=");
                        if (pair[0] == v)
                                if (this.i === false)
                                        return (this.i === false) ? pair[1] : !(this.i = !this.i);
                        else
                                data.push(pair);
                }
                return (data === []) ? false : data;
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
                var z = "i";
                if (Config.gVc(z, r)) return z;
                z = "m"; //ethod
                if (Config.gVc(z, r)) return z;
                z = "h"; //andler
                if (Config.gVc(z, r)) return z;
                return false
        },
        gI: function () {
                return this.inc = this.inc + 1;
        }
}

http.createServer(function (request, response) {

        var uri = url.parse(request.url).pathname,
                filename = path.join(process.cwd(), uri);

        //if (filename === process.cwd() + "/") {
                //filename = path.join(process.cwd(), "ui/index");
                //isMime = html;
}).listen(80);