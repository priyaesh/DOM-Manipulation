(function(){
    "use strict";
    var field;
    var assert = require("./assert.js");
    var validate = require("./validate.js");
   
    describe("Text field validator",function(){
        beforeEach(function() {
            field = document.createElement("inputText");
            field.setAttribute("type", "text");
            field.setAttribute("value", "esaa");
            //field.setAttribute("name", "TestEsaa");
            document.body.appendChild(field);
            
        });
        it("firstName is not empty",function(){
            
            console.log("Field is "+field);
            var result = validate.checkNotEmpty(field);            
            assert.equal(result, true, ["validate test success"]);
            //assert.lengthOf(field,5,'has five chars');
        });
   });

}());
