/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, 
eqeq: true, plusplus: true, bitwise: true, regexp: true, strict: true, 
newcap: true, immed: true */
"use strict";
onload = function () {
    var i, out, max;

    max = 5000;
    out = [];

    function scrollHex() {
	var hex = '0,1,2,3,4,5,6,7,8,9,0,a,b,c,d,e,f'.split(',');

	out.unshift(hex[Math.floor(Math.random() * hex.length)]);
	document.getElementsByTagName('p')[0].innerText = out.join(' ');

	if (out.length > max) {
	    out.pop();
	}
    }

    setInterval(scrollHex, 100);
    for (i = 0; i < max; i = i + 1) {
        scrollHex();
    }
};
