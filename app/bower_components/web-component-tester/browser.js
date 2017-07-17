(function(){'use strict';function a(Da){f('whenFrameworksReady');var Ea=function(){f('whenFrameworksReady done'),Da()};window.WebComponents&&!window.WebComponents.ready?(f('WebComponentsReady?'),window.addEventListener('WebComponentsReady',function Fa(){window.removeEventListener('WebComponentsReady',Fa),f('WebComponentsReady'),Ea()})):Ea()}function b(Da,Ea){return 1===Da?Da+' '+Ea+' test':Da+' '+Ea+' tests'}function c(Da,Ea){var Fa=document.createElement('script');Fa.src=Da,Ea&&(Fa.onload=Ea.bind(null,null),Fa.onerror=Ea.bind(null,'Failed to load script '+Fa.src)),document.head.appendChild(Fa)}function d(Da,Ea){var Fa=document.createElement('link');Fa.rel='stylesheet',Fa.href=Da,Ea&&(Fa.onload=Ea.bind(null,null),Fa.onerror=Ea.bind(null,'Failed to load stylesheet '+Fa.href)),document.head.appendChild(Fa)}function f(){if(v('verbose')){var Ea=[window.location.pathname];Ea.push.apply(Ea,arguments),(console.debug||console.log).apply(console,Ea)}}function g(Da){var Ea=Da.match(/^(.*?)(?:\?(.*))?$/);return{base:Ea[1],params:j(Ea[2]||'')}}function h(Da,Ea){return Ea?Da.match(/^(\/|https?:\/\/)/)?Da:('/'!==Ea.substr(Ea.length-1)&&(Ea+='/'),Ea+Da):Da}function j(Da){var Ea='string'===typeof Da?Da:window.location.search;if('?'===Ea.substring(0,1)&&(Ea=Ea.substring(1)),'/'===Ea.slice(-1)&&(Ea=Ea.substring(0,Ea.length-1)),''===Ea)return{};var Fa={};return Ea.split('&').forEach(function(Ga){var Ha=Ga.split('=');if(2!==Ha.length)return void console.warn('Invalid URL query part:',Ga);var Ia=decodeURIComponent(Ha[0]),Ja=decodeURIComponent(Ha[1]);Fa[Ia]||(Fa[Ia]=[]),Fa[Ia].push(Ja)}),Fa}function k(Da,Ea){Object.keys(Ea).forEach(function(Fa){Fa in Da||(Da[Fa]=[]),Da[Fa]=Da[Fa].concat(Ea[Fa])})}function m(Da){var Ea=j();return Ea[Da]?Ea[Da][0]:null}function n(Da){var Ea=[];return Object.keys(Da).forEach(function(Fa){Da[Fa].forEach(function(Ga){Ea.push(encodeURIComponent(Fa)+'='+encodeURIComponent(Ga))})}),0<Ea.length?'?'+Ea.join('&'):''}function o(Da){return(Da.pathname||Da).match(/^.*\//)[0]}function p(Da,Ea){var Fa=Da.pathname||Da;return 0===Fa.indexOf(Ea)&&(Fa=Fa.substring(Ea.length)),Fa}function q(Da){var Ea=Da.pathname||Da;return'/index.html'===Ea.slice(-11)&&(Ea=Ea.slice(0,Ea.length-10)),Ea}function r(Da,Ea,Fa){function Ga(Ma){Ia||(++La,--Ka,Ma||La>=Ja?(Ia=!0,Fa(Ma)):Ha())}function Ha(){Ea&&Ka>=Ea||!Da.length||(++Ka,Da.shift()(Ga))}if('number'!==typeof Ea&&(Fa=Ea,Ea=0),!Da.length)return Fa();var Ia=!1,Ja=Da.length,Ka=0,La=0;Da.forEach(Ha)}function s(Da){var Ea=document.querySelectorAll('script[src*="'+Da+'"]');if(1!==Ea.length)return null;var Fa=Ea[0].src;return Fa.substring(0,Fa.indexOf(Da))}function t(Da,Ea){var Fa=g(Da);k(Fa.params,j(Ea.location.search)),delete Fa.params.cli_browser_id,this.url=Fa.base+n(Fa.params),this.parentScope=Ea,this.state='initializing'}function v(Da){return aa[Da]}function w(Da,Ea){Object.keys(Ea).forEach(function(Fa){null===Da[Fa]||'object'!==babelHelpers.typeof(Da[Fa])||Array.isArray(Da[Fa])?Da[Fa]=Ea[Fa]:w(Da[Fa],Ea[Fa])})}function y(){var Da=ba;if(da){for(var Ga,Ea=[],Fa=0;Ga=Da[Fa];Fa++)-1!==da.indexOf(q(Ga))&&Ea.push(Ga);Da=Ea}return Da}function z(Da,Ea){f('loadJsSuites',ca);var Fa=ca.map(function(Ga){return c.bind(_,Ga)});r(Fa,Ea)}function A(Da,Ea,Fa){f('runSuites');var Ga=[B.bind(null,Da)];Ea.forEach(function(Ha){Ga.push(function(Ia){var Ja=new t(Ha,window);Da.emit('childRunner start',Ja),Ja.run(function(Ka){Da.emit('childRunner end',Ja),Ka&&Da.emitOutOfBandTest(Ha,Ka),Ia()})})}),r(Ga,v('numConcurrentSuites'),function(Ha){Da.done(),Fa(Ha)})}function B(Da,Ea,Fa){if(v('waitForFrameworks')&&!Fa){var Ga=(v('waitFor')||a).bind(window);return void Ga(function(){C(),B(Da,Ea,!0)})}f('_runMocha');var Ha=window.mocha,Ia=window.Mocha;Ha.reporter(Da.childReporter(window.location)),Ha.suite.title=Da.suiteTitle(window.location),Ha.grep(da);var Ja=Ia.prototype.run.call(Ha,function(){document.getElementById('mocha')&&Ia.utils.highlightTags('code'),Ea()});navigator.userAgent.match(/chrome/i)&&(window.onerror=null,window.addEventListener('error',function(Ka){!Ka.error||Ka.error.ignore||Ja.uncaught(Ka.error)}))}function C(){var Da=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./),Ea=Da&&'57'===Da[2];if(Ea)for(var Ia,Fa=document.body.querySelectorAll('*:not(script):not(style)'),Ga={},Ha=0;Ha<Fa.length;Ha++)if(Ia=Fa[Ha],Ia.isConnected){var Ja=Ia.localName;if(-1!==Ja.indexOf('-')&&(Ga[Ja]=Ga[Ja]||document.createElement(Ja).constructor,!(Ia instanceof Ga[Ja]))){f('_fixCustomElements: found non-upgraded custom element '+Ia);var Ka=document.importNode(Ia,!0);Ia.parentNode.replaceChild(Ka,Ia)}}}function D(Da,Ea){Da=Da.split('\n').map(function(Fa){return ka+Fa}).join('\n'),ia?ea.log('%c'+Da,ga[Ea]||ga.plain):ea.log(Da)}function E(Da,Ea){ja?ea.group('%c'+Da,ga[Ea]||ga.plain):ea.group?ea.group(Da):(ka+='  ',D(Da,Ea))}function F(){ea.groupEnd?ea.groupEnd():ka=ka.substr(0,ka.length-2)}function G(Da){D(Da.stack||Da.message||Da,'stack')}function H(Da){Mocha.reporters.Base.call(this,Da),Da.on('suite',function(Ea){Ea.root||E(Ea.title,'suite')}.bind(this)),Da.on('suite end',function(Ea){Ea.root||F()}.bind(this)),Da.on('test',function(Ea){E(Ea.title,'test')}.bind(this)),Da.on('pending',function(Ea){E(Ea.title,'pending')}.bind(this)),Da.on('fail',function(Ea,Fa){G(Fa)}.bind(this)),Da.on('test end',function(){F()}.bind(this)),Da.on('end',this.logSummary.bind(this))}function I(Da){var Ea=document.createElement('div');Ea.id='mocha',document.body.appendChild(Ea),Da.on('suite',function(){this.total=Da.total}.bind(this)),Mocha.reporters.HTML.call(this,Da)}function J(Da,Ea,Fa){this.reporters=Ea.map(function(Ga){return new Ga(this)}.bind(this)),this.parent=Fa,this.basePath=Fa&&Fa.basePath||o(window.location),this.total=Da*oa,this.currentRunner=null,this.pendingEvents=[],this.emit('start')}function K(Da){Mocha.reporters.Base.call(this,Da),Da.on('test end',this.report.bind(this))}function L(Da,Ea,Fa,Ga,Ha){var Ia=pa+2*Math.PI*(Fa/Ea),Ja=pa+2*Math.PI*((Fa+Ga)/Ea);Da.beginPath(),Da.strokeStyle=Ha,Da.lineWidth=qa,Da.arc(16,16,16-qa/2,Ia,Ja),Da.stroke()}function M(Da,Ea){if(Ea)return[Ea.childReporter(window.location)];var Fa=[K,H];return Da&&Fa.push(function(Ga){Da.observe(Ga)}),(0<ba.length||0<ca.length)&&Fa.push(I),Fa}function N(Da){O(H,Da.reporters.Base.prototype),O(I,Da.reporters.HTML.prototype),O(J,Object.getPrototypeOf(Da.Runner.prototype))}function O(Da,Ea){var Fa=Object.create(Ea);Object.keys(Da.prototype).forEach(function(Ga){Fa[Ga]=Da.prototype[Ga]}),Da.prototype=Fa}function Q(){R(),S()}function R(){var Da=window.Mocha;if(!Da)throw new Error('WCT requires Mocha. Please ensure that it is present in WCT.environmentScripts, or that you load it before loading web-component-tester/browser.js');N(Da);var Ea=s('mocha.js');Ea&&window.top===window.self&&d(Ea+'mocha.css')}function S(){return window.chai?void(window.assert=window.chai.assert,window.expect=window.chai.expect):void f('Chai not present; not registering shorthands')}function U(Da,Ea){sa.push(function(){var Fa=window.Mocha;Object.keys(Fa.interfaces).forEach(function(Ga){var Ha=Fa.interfaces[Ga],Ia='tdd'===Ga?'teardown':'afterEach';Fa.interfaces[Ga]=function(Ja){Ha.apply(this,arguments),Ja.on('pre-require',function(Ka){var Na=Ka[Ia].bind(Ka);Ka[Da]=Ea(Ka,Na,Ga)})}})})}function V(){sa.forEach(function(Da){Da()})}function X(Da,Ea,Fa){var Ga=v('mochaOptions');if(Ga.ui&&Ga.ui!==Da){var Ha='Mixing '+Ga.ui+' and '+Da+' Mocha styles is not supported. You called "'+Ea+'". Did you mean '+Fa+'?';throw new Error(Ha)}V(),Ga.ui=Da,mocha.setup(Ga)}function Y(Da,Ea){this.browserId=Da,this.socket=Ea}function Z(Da){for(var Ea=[];Da&&!Da.root&&Da.title;)Ea.unshift(Da.title),Da=Da.parent;return Ea}function $(Da){return'passed'===Da.state?'passing':'failed'==Da.state?'failing':Da.pending?'pending':'unknown'}var _=Object.freeze({whenFrameworksReady:a,pluralizedStat:b,loadScript:c,loadStyle:d,debug:f,parseUrl:g,expandUrl:h,getParams:j,mergeParams:k,getParam:m,paramsToQuery:n,basePath:o,relativeLocation:p,cleanLocation:q,parallel:r,scriptPrefix:s});t.loadTimeout=6e4,t._byUrl={},t.current=function(){return t.get(window)},t.get=function(Da,Ea){var Fa=t._byUrl[Da.location.href];return Fa?Fa:window.parent===window?(Ea&&(console.warn('Subsuite loaded but was never registered. This most likely is due to wonky history behavior. Reloading...'),window.location.reload()),null):window.parent.WCT._ChildRunner.get(Da,!0)},t.prototype.run=function(Da){f('ChildRunner#run',this.url),this.state='loading',this.onRunComplete=Da,this.iframe=document.createElement('iframe'),this.iframe.src=this.url,this.iframe.classList.add('subsuite');var Ea=document.getElementById('subsuites');Ea||(Ea=document.createElement('div'),Ea.id='subsuites',document.body.appendChild(Ea)),Ea.appendChild(this.iframe),this.url=this.iframe.src,t._byUrl[this.url]=this,this.timeoutId=setTimeout(this.loaded.bind(this,new Error('Timed out loading '+this.url)),t.loadTimeout),this.iframe.addEventListener('error',this.loaded.bind(this,new Error('Failed to load document '+this.url))),this.iframe.contentWindow.addEventListener('DOMContentLoaded',this.loaded.bind(this,null))},t.prototype.loaded=function(Da){f('ChildRunner#loaded',this.url,Da),this.iframe.contentWindow.WCT&&(this.share=this.iframe.contentWindow.WCT.share),Da&&(this.signalRunComplete(Da),this.done())},t.prototype.ready=function(Da){f('ChildRunner#ready',this.url,Da),this.timeoutId&&clearTimeout(this.timeoutId),Da&&(this.signalRunComplete(Da),this.done())},t.prototype.done=function(){f('ChildRunner#done',this.url,arguments),this.ready(),this.signalRunComplete();this.iframe&&setTimeout(function(){this.iframe.parentNode.removeChild(this.iframe),this.iframe=null}.bind(this),1)},t.prototype.signalRunComplete=function(Ea){this.onRunComplete&&(this.state='complete',this.onRunComplete(Ea),this.onRunComplete=null)};var aa={environmentScripts:['stacky/browser.js','async/lib/async.js','lodash/lodash.js','mocha/mocha.js','chai/chai.js','sinonjs/sinon.js','sinon-chai/lib/sinon-chai.js','accessibility-developer-tools/dist/js/axs_testing.js'],environmentImports:['test-fixture/test-fixture.html'],root:null,waitForFrameworks:!0,waitFor:null,numConcurrentSuites:1,trackConsoleError:!0,mochaOptions:{timeout:10000},verbose:!1},ba=[],ca=[],da=m('grep');da&&(da=da.replace(/\\\./g,'.'));var ea=window.console,fa=';font: normal 13px "Roboto", "Helvetica Neue", "Helvetica", sans-serif;',ga={plain:fa,suite:'color: #5c6bc0'+fa,test:fa,passing:'color: #259b24'+fa,pending:'color: #e65100'+fa,failing:'color: #c41411'+fa,stack:'color: #c41411',results:fa+'font-size: 16px'},ha=navigator.userAgent.toLowerCase(),ia=ha.match('firefox')||ha.match('webkit'),ja=ha.match('webkit'),ka='';H.prototype.logSummary=function(){E('Test Results','results'),0<this.stats.failures&&D(b(this.stats.failures,'failing'),'failing'),0<this.stats.pending&&D(b(this.stats.pending,'pending'),'pending'),D(b(this.stats.passes,'passing')),this.stats.failures||D('test suite passed','passing'),D('Evaluated '+this.stats.tests+' tests in '+this.stats.duration+'ms.'),F()};var la=document.createElement('style');la.textContent='html, body {  position: relative;  height: 100%;  width:  100%;  min-width: 900px;}#mocha, #subsuites {  height: 100%;  position: absolute;  top: 0;}#mocha {  box-sizing: border-box;  margin: 0 !important;  overflow-y: auto;  padding: 60px 20px;  right: 0;  left: 500px;}#subsuites {  -ms-flex-direction: column;  -webkit-flex-direction: column;  display: -ms-flexbox;  display: -webkit-flex;  display: flex;  flex-direction: column;  left: 0;  width: 500px;}#subsuites .subsuite {  border: 0;  width: 100%;  height: 100%;}#mocha .test.pass .duration {  color: #555 !important;}',document.head.appendChild(la);var ma={indent:'  ',locationStrip:[/^https?:\/\/[^\/]+/,/\?.*$/],filter:function(Ea){return Ea.location.match(/\/web-component-tester\/[^\/]+(\?.*)?$/)}},na=['start','end','suite','suite end','test','test end','hook','hook end','pass','fail','pending','childRunner end'],oa=3;J.prototype.childReporter=function(Ea){function Fa(Ia){Ia.name=Ga,Ha.bindChildRunner(Ia)}var Ga=this.suiteTitle(Ea),Ha=this;return Fa.title=Ga,Fa},J.prototype.done=function(){this.complete=!0,this.flushPendingEvents(),this.emit('end')},J.prototype.emitOutOfBandTest=function(Ea,Fa,Ga,Ha){f('MultiReporter#emitOutOfBandTest(',arguments,')');var Ia=new Mocha.Suite;Ia.title=Ga||'';var Ja=new Mocha.Test(Ea,function(){});Ja.parent=Ia,Ja.state=Fa?'failed':'passed',Ja.err=Fa,Ha||(this.total+=oa);var Ka={total:1};this.proxyEvent('start',Ka),this.proxyEvent('suite',Ka,Ia),this.proxyEvent('test',Ka,Ja),Fa?this.proxyEvent('fail',Ka,Ja,Fa):this.proxyEvent('pass',Ka,Ja),this.proxyEvent('test end',Ka,Ja),this.proxyEvent('suite end',Ka,Ia),this.proxyEvent('end',Ka)},J.prototype.suiteTitle=function(Ea){var Fa=p(Ea,this.basePath);return Fa=q(Fa),Fa},J.prototype.bindChildRunner=function(Ea){na.forEach(function(Fa){Ea.on(Fa,this.proxyEvent.bind(this,Fa,Ea))}.bind(this))},J.prototype.proxyEvent=function(Ea,Fa){var Ha=Array.prototype.slice.call(arguments,2);return this.complete?void console.warn('out of order Mocha event for '+Fa.name+':',Ea,Ha):this.currentRunner&&Fa!==this.currentRunner?void this.pendingEvents.push(arguments):void(f('MultiReporter#proxyEvent(',arguments,')'),'fail'===Ea&&!Ha[0].err&&(Ha[0].err=Ha[1]),'start'===Ea?this.onRunnerStart(Fa):'end'===Ea?this.onRunnerEnd(Fa):(this.cleanEvent(Ea,Fa,Ha),this.emit.apply(this,[Ea].concat(Ha))))},J.prototype.cleanEvent=function(Ea,Fa,Ga){Ga[0]&&(Ga[0]=this.showRootSuite(Ga[0])),'fail'===Ea&&(Ga[1]=Stacky.normalize(Ga[1],ma)),Ga[0]&&Ga[0].err&&(Ga[0].err=Stacky.normalize(Ga[0].err,ma))},J.prototype.showRootSuite=function(Ea){for(var Ga,Fa=Ea=Object.create(Ea);Ea&&Ea.parent;)Ga=Object.create(Ea.parent),Ea.parent=Ga,Ea=Ga;return Ea.root=!1,Fa},J.prototype.onRunnerStart=function(Ea){f('MultiReporter#onRunnerStart:',Ea.name),this.total=this.total-oa+Ea.total,this.currentRunner=Ea},J.prototype.onRunnerEnd=function(Ea){f('MultiReporter#onRunnerEnd:',Ea.name),this.currentRunner=null,this.flushPendingEvents()},J.prototype.flushPendingEvents=function(){var Ea=this.pendingEvents;this.pendingEvents=[],Ea.forEach(function(Fa){this.proxyEvent.apply(this,Fa)}.bind(this))};var pa=0,qa=6;K.prototype.report=function(){this.updateTitle(),this.updateFavicon()},K.prototype.updateTitle=function(){document.title=0<this.stats.failures?b(this.stats.failures,'failing'):b(this.stats.passes,'passing')},K.prototype.updateFavicon=function(){var Ea=document.createElement('canvas');Ea.height=Ea.width=32;var Fa=Ea.getContext('2d'),Ga=this.stats.passes,Ha=this.stats.pending,Ia=this.stats.failures,Ja=Math.max(this.runner.total,Ga+Ha+Ia);L(Fa,Ja,0,Ga,'#0e9c57'),L(Fa,Ja,Ga,Ha,'#f3b300'),L(Fa,Ja,Ha+Ga,Ia,'#ff5621'),this.setFavicon(Ea.toDataURL())},K.prototype.setFavicon=function(Ea){var Fa=document.head.querySelector('link[rel="icon"]');Fa&&document.head.removeChild(Fa);var Ga=document.createElement('link');Ga.rel='icon',Ga.type='image/x-icon',Ga.href=Ea,Ga.setAttribute('sizes','32x32'),document.head.appendChild(Ga)};var ra=[],sa=[];U('fixture',function(Da,Ea){return Da.fixture||function(Ga,Ha){return Ea(function(){document.getElementById(Ga).restore()}),document.getElementById(Ga).create(Ha)}}),U('stub',function(Da,Ea){return function(Ga,Ha){var Ia=document.createElement(Ga).constructor.prototype,Ja=Object.keys(Ha).map(function(Ka){return sinon.stub(Ia,Ka,Ha[Ka])});Ea(function(){Ja.forEach(function(Ka){Ka.restore()})})}});var ta={},ua=!1;U('replace',function(Da,Ea){return function(Ga){return{with:function(Ia){if(Ga=Ga.toLowerCase(),Ia=Ia.toLowerCase(),ta[Ga]=Ia,!document.importNode.isSinonProxy){Polymer.Element||(Polymer.Element=function(){},Polymer.Element.prototype._stampTemplate=function(){});var Ja=document.importNode;sinon.stub(document,'importNode',function(Ka,La){var Ma=document.createElement('template'),Na=Ma.content,Oa=Na.ownerDocument;Ma.content.appendChild(Oa.importNode(Ka,!0));for(var Qa,Ra,Pa=document.createNodeIterator(Na,NodeFilter.SHOW_ELEMENT,null,!0);Qa=Pa.nextNode();)if(Ra=Qa.tagName.toLowerCase(),ta.hasOwnProperty(Ra)){for(Ra=ta[Ra];ta[Ra];)Ra=ta[Ra];for(var Sa=document.createElement(Ra),Ta=0;Ta<Qa.attributes.length;++Ta)Sa.setAttribute(Qa.attributes[Ta].name,Qa.attributes[Ta].value);Qa.parentNode.replaceChild(Sa,Qa)}return Ja.call(this,Na,La)}),ua||Ea(function(){ua=!0,document.importNode.isSinonProxy&&document.importNode.restore(),ta={}})}}}}});var va={tdd:{setup:'"before"',teardown:'"after"',suiteSetup:'"beforeEach"',suiteTeardown:'"afterEach"',suite:'"describe" or "context"',test:'"it" or "specify"'},bdd:{before:'"setup"',after:'"teardown"',beforeEach:'"suiteSetup"',afterEach:'"suiteTeardown"',describe:'"suite"',context:'"suite"',xdescribe:'"suite.skip"',xcontext:'"suite.skip"',it:'"test"',xit:'"test.skip"',specify:'"test"',xspecify:'"test.skip"'}},xa=window.location.protocol+'//'+window.location.host;Y.prototype.observe=function(Ea){this.emitEvent('browser-start',{url:window.location.toString()}),Ea.on('test',function(Fa){this.emitEvent('test-start',{test:Z(Fa)})}.bind(this)),Ea.on('test end',function(Fa){this.emitEvent('test-end',{state:$(Fa),test:Z(Fa),duration:Fa.duration,error:Fa.err})}.bind(this)),Ea.on('fail',function(Fa,Ga){'test'!==Fa.type&&this.emitEvent('browser-fail','Error thrown outside of test function: '+Ga.stack)}.bind(this)),Ea.on('childRunner start',function(Fa){this.emitEvent('sub-suite-start',Fa.share)}.bind(this)),Ea.on('childRunner end',function(Fa){this.emitEvent('sub-suite-end',Fa.share)}.bind(this)),Ea.on('end',function(){this.emitEvent('browser-end')}.bind(this))},Y.prototype.emitEvent=function(Ea,Fa){this.socket.emit('client-event',{browserId:this.browserId,event:Ea,data:Fa})},Y.init=function(Ea){var Fa=m('cli_browser_id');return Fa?t.current()?Ea():void c(xa+'/socket.io/socket.io.js',function(Ga){if(Ga)return Ea(Ga);var Ha=io(xa);Ha.on('error',function(Ia){Ha.off(),Ea(Ia)}),Ha.on('connect',function(){Ha.off(),Ea(null,new Y(Fa,Ha))})}):Ea()};var za=window.setInterval,Aa=window.setTimeout,Ba=window.requestAnimationFrame;window.safeStep=function(Ea,Fa){var Ga;try{Fa()}catch(Ha){Ga=Ha}Ea(Ga)},window.testImmediate=function(Ea,Fa){if(0<Fa.length)return testImmediateAsync(Ea,Fa);var Ga;try{Fa()}catch(Ha){Ga=Ha}test(Ea,function(Ha){Ha(Ga)})},window.testImmediateAsync=function(Ea,Fa){var Ga=!1,Ha;test(Ea,function(Ia){var Ja=za(function(){Ga&&(clearInterval(Ja),Ia(Ha))},10)});try{Fa(function(Ia){Ia&&(Ha=Ia),Ga=!0})}catch(Ia){Ha=Ia,Ga=!0}},window.flush=function(Ea){var Fa=function(){Ea()},Ga='Microsoft Internet Explorer'==navigator.appName;if(Ga&&window.Platform&&window.Platform.performMicrotaskCheckpoint){var Ha=Fa;Fa=function(){Platform.performMicrotaskCheckpoint(),Aa(Ha,0)}}var Ia;window.Polymer&&window.Polymer.dom&&window.Polymer.dom.flush?Ia=window.Polymer.dom:window.Polymer&&window.Polymer.flush?Ia=window.Polymer:window.WebComponents&&window.WebComponents.flush&&(Ia=window.WebComponents),Ia&&Ia.flush(),Aa(Fa,0)},window.animationFrameFlush=function(Ea){flush(function(){Ba(function(){flush(Ea)})})},window.asyncPlatformFlush=function(Ea){return console.warn('asyncPlatformFlush is deprecated in favor of the more terse flush()'),window.flush(Ea)},window.waitFor=function Da(Ea,Fa,Ga,Ha,Ia){Ia=Ia||Date.now()+(Ha||1e3),Ga=Ga||32;try{Ea()}catch(Ja){if(Date.now()>Ia)throw Ja;else return void(isNaN(Ga)?Ga.onMutation(Ga,function(){Da(Ea,Fa,Ga,Ha,Ia)}):Aa(function(){Da(Ea,Fa,Ga,Ha,Ia)},Ga))}Fa()},function(Da){var Ea=t.current();if(Ea&&(w(aa,Ea.parentScope.WCT._config),delete aa.mochaOptions.ui),Da&&'object'===('undefined'===typeof Da?'undefined':babelHelpers.typeof(Da))&&w(aa,Da),!aa.root){var Fa=s('browser.js');if(aa.root=o(Fa.substr(0,Fa.length-1)),!aa.root)throw new Error('Unable to detect root URL for WCT sources. Please set WCT.root before including browser.js')}}(window.WCT);var Ca=window.WCT={};Ca.share={},Ca._ChildRunner=t,Ca._config=aa,Ca.loadSuites=function(Da){Da.forEach(function(Ea){if(/\.js(\?.*)?$/.test(Ea))ca.push(Ea);else if(/\.html(\?.*)?$/.test(Ea))ba.push(Ea);else throw new Error('Unknown resource type: '+Ea)})},function(){window.addEventListener('error',function(Fa){ra.push(Fa.error)});var Da=console,Ea=console.error;console.error=function(){if(Ea.apply(Da,arguments),v('trackConsoleError'))throw'console.error: '+Array.prototype.join.call(arguments,' ')}}(),function(){Object.keys(va).forEach(function(Da){Object.keys(va[Da]).forEach(function(Ea){window[Ea]=function Fa(){if(X(Da,Ea,va[Da][Ea]),!window[Ea]||window[Ea]===Fa)throw new Error('Expected mocha.setup to define '+Ea);window[Ea].apply(window,arguments)}})})}(),function(){f('Loading environment scripts:');var Da='web-component-tester/data/a11ySuite.js',Ea=v('environmentScripts'),Fa=window.__generatedByWct||-1<Ea.indexOf(Da);Fa||Ea.push(Da),Ea.forEach(function(Ha){var Ia=h(Ha,v('root'));f('Loading environment script:',Ia),document.write('<script src="'+encodeURI(Ia)+'"></script>')}),f('Environment scripts loaded');var Ga=v('environmentImports');Ga.forEach(function(Ha){var Ia=h(Ha,v('root'));f('Loading environment import:',Ia),document.write('<link rel="import" href="'+encodeURI(Ia)+'">')}),f('Environment imports loaded')}(),document.addEventListener('DOMContentLoaded',function(){f('DOMContentLoaded'),Q(),Y.init(function(Da,Ea){if(Da)throw Da;var Fa=t.current(),Ga=Fa&&Fa.parentScope.WCT._reporter;f('parentReporter:',Ga);var Ha=y(),Ia=M(Ea,Ga),Ja=new J(Ha.length+1,Ia,Ga);Ca._reporter=Ja,z(Ja,function(Ka){if(Fa&&Fa.ready(Ka),Ka)throw Ka;ra.forEach(function(Ma){Ja.emitOutOfBandTest('Test Suite Initialization',Ma)}),A(Ja,Ha,function(La){if(Fa&&Fa.done(),La)throw La})})})})})();