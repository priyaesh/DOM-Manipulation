require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"/src/app.js":[function(require,module,exports){
(function(){
    "use strict";

    var addition = require("./add.js");
    var example = require("./example.js");
    
    console.log("Hello World");
    console.log("42+13 =" +addition.add(42, 13));

}());
},{"./add.js":1,"./example.js":2}],1:[function(require,module,exports){
(function(){
    "use strict";

    exports.add = function add(a,b){
        return a+b;
    }
    //exports.add = add;
}());
},{}],2:[function(require,module,exports){
// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.

//var example = {};
//module.exports = example;
(function() {
	"use strict";

	//example.REQUIRED_FIELD_CLASS = "example-required";

	module.exports.example.validateTextField = function(field) {
		if (field.value) {
			field.removeAttribute("class");
		}
		else {
			field.setAttribute("class", example.REQUIRED_FIELD_CLASS);
		}
    };
	console.log("Hello World ");
	
	

}());

},{}]},{},[]);
