/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, 
eqeq: true, plusplus: true, bitwise: true, regexp: true, strict: true, 
newcap: true, immed: true */

"use strict";

onload = function () {
    var max = 7500;
    var out = [];

    function scrollHex() {
        var hex = '01234567890abcdef';

        out.unshift(hex[Math.floor(Math.random() * hex.length)]);
        document.getElementsByTagName('p')[0].innerHTML = out.join(' ');

        if (out.length > max) out.pop();
    }

    setInterval(scrollHex, 100);
    for (var i = 0; i < max; i = i + 1) scrollHex();
};
