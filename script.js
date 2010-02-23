"use strict";

$(document).ready(function () {
    var max, out, hex, rand;
    max = 10000;
    out = [];
    hex = '01234567890abcdef';
    rand = Math.random;

    function scrollHex() {
        out.unshift(hex[Math.floor(rand() * hex.length)]);
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
            $('.matrix').text(out.join(' '));
        }, 100
    );

    $('.preamble').show().delay(5000).fadeOut(1500);

    function showError() {
        $('.error').css({
            top: rand() * ($(window).height() - 100),
            left: rand() * ($(window).width() - 438)
        })
        .fadeIn(250).delay(5000).fadeOut(250);

        $('.error p').text(out.slice(0, 80).join(' '));
        setTimeout(showError, rand() * 20000 + 5500);
    }

    setTimeout(showError, rand() * 20000 + 5500);
});
