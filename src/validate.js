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
