(function(){
    "use strict";
    
    var semver = require("semver");
    var jshint = require("simplebuild-jshint");
    var karma = require("simplebuild-karma");
    var shell = require("shelljs");
    
    var KARMA_CONFIG = "karma.conf.js";
    var DIST_DIR = "generated/dist";
    
    desc("task description");
        task("default",["version","test","run"], function(){
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
    
    desc("Build distribution directory");
        task("build",[DIST_DIR],function(){
            console.log("Building distribution directory:.");
    
             shell.rm("-rf",DIST_DIR +"/*");
             shell.cp("src//content/*",DIST_DIR);
    
             jake.exec("node node_modules/browserify/bin/cmd.js -r ./src/validate.js -o " + DIST_DIR + "/bundle.js",
             {interactive:true},
              complete 
              );
        },{async:true});  
           
    
    directory(DIST_DIR);
    
    desc(" start the karma server");
        task("karma",function(){
            console.log("Karma starting:.");
            karma.start({
                configFile:KARMA_CONFIG
            },complete,fail);
        },{async:true});
    
    
    desc("Run a localhost server");
        task("run",["build"], function(){
            jake.exec("node node_modules/http-server/bin/http-server "+ DIST_DIR ,{interactive:true},complete);
            console.log("Run http-server");
        });
    
    
    desc("Erase all generated files");
        task("clean", function(){
            console.log("Erasing generated files: .");
            shell.rm("-rf","generated");
        });
    
    
    desc("Run tests");
        task("test",function(){
            console.log("Testing");
            karma.run({
                configFile:KARMA_CONFIG,
                expectedBrowser:[
                    "Chrome 72.0.3626 (Windows 10.0.0) is idle"
                    //"Edge 17.17134.0 (Windows 10.0.0) is idle"
                ],
                strict: !process.env.loose
            },complete,fail);
        },{async:true});
    
    
    desc("Lint javascript code");
        task("lint",function(){
            process.stdout.write("Linting JavaScript code:");
    
            jshint.checkFiles({
                files:["Jakefile.js","src/**/*.js"],
                options: lintOption(),
                globals:lintGlobal(),
            },
            complete,fail);
           },{async:true});
    
         function lintOption(){
             return {
                bitwise:true,
                eqeqeq:true,
                forin:true,
                freeze:true,
                futurehostile:true,
                latedef:"nofunc",
                noarg:true,
                nocomma:true,
                nonbsp:true,
                nonew:true,
                strict:true,
                undef:true,
                node:true,
                browser:true
             };
            }
        
         function lintGlobal(){
             return {
                jake:false,
                desc:false,
                task:false,
                complete:false,
                fail:false,
                describe:false,
                it:false,
                before:false,
                after:false,
                beforeEach:false,
                afterEach:false,
                directory:false,
                sinon:false
    
                };
            }
    
    
    }());