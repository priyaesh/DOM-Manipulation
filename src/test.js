(function(){
    "use strict";

    var addition = require("./add.js");

   // var assert = require("chai").assert;

    // var actual = add(3,4);
    // var expected =7;

    // assert.equal(add(3,4),7);

    // if(actual !== expected) throw new Error("Expected "+expected ,"actual was"+actual);

    describe("Adding two numbers",function(){
         it("addition",function(){
            assertEqual(addition.add(3,4), 7);
         });

    });
    function assertEqual(actual, expected){
        if(actual !== expected) throw new Error("Expected "+expected ,"actual was"+actual);
    }

    
    
}());