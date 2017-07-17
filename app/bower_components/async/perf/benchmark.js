#!/usr/bin/env node
var _=require("lodash"),Benchmark=require("benchmark"),exec=require("child_process").exec,execSync=require("child_process").execSync,fs=require("fs"),path=require("path"),mkdirp=require("mkdirp"),async=require("../"),suiteConfigs=require("./suites"),semver=require("semver"),args=require("yargs").usage("Usage: $0 [options] [tag1] [tag2]").describe("g","run only benchmarks whose names match this regex").alias("g","grep").default("g",".*").describe("i","skip benchmarks whose names match this regex").alias("i","reject").default("i","^$").describe("l","maximum running time per test (in seconds)").alias("l","limit").default("l",2).help("h").alias("h","help").example("$0 0.9.2 0.9.0","Compare v0.9.2 with v0.9.0").example("$0 0.9.2","Compare v0.9.2 with the current working version").example("$0","Compare the latest tag with the current working version").example("$0 -g each","only run the each(), eachLimit() and  eachSeries() benchmarks").example("").argv,grep=new RegExp(args.g,"i"),reject=new RegExp(args.i,"i");function getLatestVersion(){var a=execSync("git tag"),b=_(a).split("\n").compact().sort(semver.gt).last();return console.log("Latest tag is ",b),b}var version0=args._[0]||getLatestVersion(),version1=args._[1]||"current",versionNames=[version0,version1],benchOptions={defer:!0,minSamples:1,maxTime:+args.l},versions,wins={},totalTime={};totalTime[version0]=wins[version0]=0,totalTime[version1]=wins[version1]=0,console.log("Comparing "+version0+" with "+version1+" on Node "+process.version),console.log("--------------------------------------"),async.eachSeries(versionNames,cloneVersion,function(a){if(a)throw a;versions=versionNames.map(requireVersion);var b=suiteConfigs.map(setDefaultOptions).reduce(handleMultipleArgs,[]).map(setName).filter(matchesGrep).filter(doesNotMatch).map(createSuite);async.eachSeries(b,runSuite,function(){var c=+totalTime[version0].toPrecision(3),d=+totalTime[version1].toPrecision(3),f=wins[version0],g=wins[version1];0.01>Math.abs(c/d-1)?console.log("Both versions are about equal ("+c+"ms total vs. "+d+"ms total)"):c<d?console.log(version0+" faster overall ("+c+"ms total vs. "+d+"ms total)"):d<c&&console.log(version1+" faster overall ("+d+"ms total vs. "+c+"ms total)"),f>g?console.log(version0+" won more benchmarks ("+f+" vs. "+g+")"):g>f?console.log(version1+" won more benchmarks ("+g+" vs. "+f+")"):console.log("Both versions won the same number of benchmarks ("+f+" vs. "+g+")")})});function runSuite(a,b){a.on("complete",function(){b()}).run({async:!0})}function setDefaultOptions(a){return a.args=a.args||[[]],a.setup=a.setup||function(){},a}function handleMultipleArgs(a,b){return a.concat(b.args.map(function(c){return _.defaults({args:c},b)}))}function setName(a){return a.name=a.name+"("+a.args.join(",")+")",a}function matchesGrep(a){return!!grep.exec(a.name)}function doesNotMatch(a){return!reject.exec(a.name)}function createSuite(a){function b(g,h){var i=a.name+" "+h;try{a.setup(1),a.fn(g,function(){})}catch(j){return console.error(i+" Errored"),void(f=!0)}c.add(i,function(j){a.fn(g,function(){j.resolve()})},_.extend({versionName:h,setup:_.partial.apply(null,[a.setup].concat(d)),onError:function(k){console.log(k.stack)}},benchOptions))}var c=new Benchmark.Suite,d=a.args,f=!1;return b(versions[0],versionNames[0]),b(versions[1],versionNames[1]),c.on("cycle",function(g){var h=1e3*g.target.stats.mean;console.log(g.target+", "+h.toPrecision(3)+"ms per run");var i=g.target.options.versionName;f||(totalTime[i]+=h)}).on("error",function(g){console.error(g)}).on("complete",function(){if(!f){var g=this.filter("fastest");if(2===g.length)console.log("Tie");else{var h=g[0].options.versionName;console.log(h+" is faster"),wins[h]++}}console.log("--------------------------------------")})}function requireVersion(a){return"current"===a?async:require("./versions/"+a+"/")}function cloneVersion(a,b){if("current"===a)return b();var c=__dirname+"/versions/"+a;mkdirp.sync(c),fs.open(c+"/package.json","r",function(d,f){if(!d)return fs.close(f),b();var g=path.join(__dirname,"..");exec("git clone --branch "+a+" "+g+" "+c,function(i){if(i)throw i;b()})})}