"use strict";

$(document).ready(function () {
    var max = 7500;
    var out = [];

    function scrollHex() {
        var hex = '01234567890abcdef';

        out.unshift(hex[Math.floor(Math.random() * hex.length)]);
        $('p').text(out.join(' '));

        if (out.length > max) out.pop();
    }

    setInterval(scrollHex, 100);
    for (var i = 0; i < max; i = i + 1) scrollHex();
});
