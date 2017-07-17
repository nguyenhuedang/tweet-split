var async=require('../lib/async'),expect=require('chai').expect,isBrowser=require('./support/is_browser');describe('forever',function(){context('function is asynchronous',function(){it('executes the function over and over until it yields an error',function(a){var c=0;async.forever(function(d){return c++,50===c?d('too big!'):void async.setImmediate(function(){d()})},function(d){expect(d).to.eql('too big!'),expect(c).to.eql(50),a()})})}),context('function is synchronous',function(){it('does not cause a stack overflow',function(a){if(isBrowser())return a();var c=0;async.forever(function(d){return c++,5e4===c?d('too big!'):void d()},function(d){expect(d).to.eql('too big!'),expect(c).to.eql(5e4),a()})})})});