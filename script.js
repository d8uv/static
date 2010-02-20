/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, 
eqeq: true, plusplus: true, bitwise: true, regexp: true, strict: true, 
newcap: true, immed: true */
"use strict";
onload = function () {
    var hex, out;

    hex = '0,1,2,3,4,5,6,7,8,9,0,a,b,c,d,e,f'.split(',');
    out = [];

    setInterval(
	function () {
	    out.unshift(hex[Math.floor(Math.random() * hex.length)]);
	    document.getElementsByTagName('p')[0].innerText = out.join(' ');

	    if (out.length > 5000) {
		out.pop();
	    }
	}, 100
    );
};
