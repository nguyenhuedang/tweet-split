(function(a,b,c){Object.keys(a.interfaces).forEach(function(d){var e=a.interfaces[d];a.interfaces[d]=function(f){e.apply(this,arguments);var g=a.Suite,h=a.Test;f.on('pre-require',function(i,j){i.a11ySuite=function(l,m,n){var o=document.getElementById(l);if(o){var p=new c.AuditConfiguration;p.scope=document.body,p.showUnsupportedRulesWarning=!1,p.auditRulesToIgnore=m;var q=g.create(f,'A11y Audit - Fixture: '+l);return q.eachTest=function(){o.create(),Polymer.dom.flush(),n&&n();var r=c.Audit.run(p);r.forEach(function(s){if('NA'!==s.result){var u=s.rule.heading,v='FAIL'===s.result?c.Audit.accessibilityErrorMessage(s):null,w=new h(u,function(){if(v)throw new Error(v)});w.file=j,q.addTest(w)}}),o.restore(),f.eachTest.apply(q,arguments),this.eachTest=f.eachTest},q}}})}}),b.use(function(d,e){var f=d.Assertion;d.assert.a11yLabel=function(g,h,i){new f(g).to.have.a11yLabel(h,i)},f.addMethod('a11yLabel',function(g,h){h&&e.flag(this,'message',h);var i=this._obj;new f(i).to.be.instanceOf(Node);var j=c.properties.findTextAlternatives(i,{});this.assert(j===g,'expected #{this} to have text alternative #{exp} but got #{act}','expected #{this} to not have text alternative #{act}',g,j,!0)})})})(window.Mocha,window.chai,window.axs);