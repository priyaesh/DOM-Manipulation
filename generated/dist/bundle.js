require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"/src/validate.js":[function(require,module,exports){
(function() {
    "use strict";
    
    exports.checkNotEmpty = function checkNotEmpty(firstName){
        
        
        console.log("FirstName is "+firstName);
        
        var lengthTexBox = firstName.getAttribute("value").length;
        console.log("FirstName length "+lengthTexBox);

        // firstName.length;

        if(lengthTexBox!==0){
            //alert("welcome")
            return true;
        }
        //alert("you should give name");
        return false;
        }
   // module.exports = validate;
}());

},{}]},{},[]);
