"use strict";

$(document).ready(function () {
    var max, out, hex;
    max = 10000;
    out = [];
    hex = '01234567890abcdef';

    function scrollHex() {
        out.unshift(hex[Math.floor(Math.random() * hex.length)]);
        if (out.length > max) {
	    out.pop();
	}
    }

    while (out.length < max) {
        scrollHex();
    }

    setInterval(
        function () {
            scrollHex();
            $('p').text(out.join(' '));
        }, 100
    );

    $("div").show().delay(5000).fadeOut(1500);
});
