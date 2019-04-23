(function(){
"use strict";

var semver = require("semver");

desc(" task description");
    task("default",["version"],function(){
        console.log("Build OK ");
    });

desc("version");
    task("version",function(){
        console.log("checking node version:.");

        var packageJson = require("./package.json");
        var expectedVersion = "v"+packageJson.engines.node;
        var actualVersion = process.version;
       
          if(semver.neq(expectedVersion,actualVersion)){
              fail("Incorrect node version : Expected"+expectedVersion +"but was actual"+actualVersion);
          }

    });


}());