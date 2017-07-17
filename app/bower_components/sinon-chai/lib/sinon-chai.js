"use strict";(function(a){"function"===typeof require&&"object"===("undefined"===typeof exports?"undefined":babelHelpers.typeof(exports))&&"object"===("undefined"===typeof module?"undefined":babelHelpers.typeof(module))?module.exports=a:"function"===typeof define&&define.amd?define(function(){return a}):chai.use(a)})(function(a,b){function c(o){return"function"===typeof o&&"function"===typeof o.getCall&&"function"===typeof o.calledWithExactly}function d(o){return 1===o?"once":2===o?"twice":3===o?"thrice":(o||0)+" times"}function e(o){return o&&c(o.proxy)}function f(o){if(!c(o._obj)&&!e(o._obj))throw new TypeError(b.inspect(o._obj)+" is not a spy or a call to a spy!")}function g(o,p,q,r,s){function t(v){return o.printf.apply(o,v)}var u=r?"always have ":"have ";return q=q||"",c(o.proxy)&&(o=o.proxy),{affirmative:function(){return t(["expected %n to "+u+p+q].concat(s))},negative:function(){return t(["expected %n to not "+u+p].concat(s))}}}function h(o,p,q){b.addProperty(a.Assertion.prototype,o,function(){f(this);var r=g(this._obj,p,q,!1);this.assert(this._obj[o],r.affirmative,r.negative)})}function j(o,p,q){return function(){f(this);var r="always"+o[0].toUpperCase()+o.substring(1),s=b.flag(this,"always")&&"function"===typeof this._obj[r],t=s?r:o,u=g(this._obj,p,q,s,n.call(arguments));this.assert(this._obj[t].apply(this._obj,arguments),u.affirmative,u.negative)}}function l(o,p,q,r){var s=j(p,q,r);b.addMethod(a.Assertion.prototype,o,s)}function m(o,p,q){l(o,o,p,q)}var n=Array.prototype.slice;b.addProperty(a.Assertion.prototype,"always",function(){b.flag(this,"always",!0)}),h("called","been called"," at least once, but it was never called"),function(o,p,q){b.addMethod(a.Assertion.prototype,o,function(r){f(this);var s=g(this._obj,p,q,!1,[d(r)]);this.assert(this._obj[o]===r,s.affirmative,s.negative)})}("callCount","been called exactly %1",", but it was called %c%C"),h("calledOnce","been called exactly once",", but it was called %c%C"),h("calledTwice","been called exactly twice",", but it was called %c%C"),h("calledThrice","been called exactly thrice",", but it was called %c%C"),function(o,p,q){var r=j(o,p,q);b.addProperty(a.Assertion.prototype,o,r)}("calledWithNew","been called with new"),m("calledBefore","been called before %1"),m("calledAfter","been called after %1"),m("calledImmediatelyBefore","been called immediately before %1"),m("calledImmediatelyAfter","been called immediately after %1"),m("calledOn","been called with %1 as this",", but it was called with %t instead"),m("calledWith","been called with arguments %*","%C"),m("calledWithExactly","been called with exact arguments %*","%C"),m("calledWithMatch","been called with arguments matching %*","%C"),m("returned","returned %1"),l("thrown","threw","thrown %1")});