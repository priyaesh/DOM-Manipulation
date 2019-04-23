(function(){
"use strict";

desc(" task description");
    task("default",["version"],function(){
        console.log("Build OK ");
    });

    desc("version");
    task("version",function(){
        console.log("checking node version:.")
    });

}());