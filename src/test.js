(function(){
    "use strict";

    var addition = require("./add.js");
    var assert = require("./assert.js");

    
    describe("Adding two numbers",function(){
         it("addition",function(){
            assert.equal(addition.add(3,4), 7);
         });
         it("adding floating point numbers",function(){
            assert.equal(addition.add(3.2,0.0), 3.2);
         });

    });
    // function assertEqual(actual, expected){
    //     if(actual !== expected) throw new Error("Expected "+expected ,"actual was"+actual);
    // }

    
    
}());