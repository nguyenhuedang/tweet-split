'use strict';import{parse,StyleNode}from'./css-parse.js';import{nativeShadow,nativeCssVariables}from'./style-settings.js';import StyleTransformer from'./style-transformer.js';import*as StyleUtil from'./style-util.js';import StyleProperties from'./style-properties.js';import placeholderMap from'./style-placeholder.js';import StyleInfo from'./style-info.js';import StyleCache from'./style-cache.js';import{flush as watcherFlush}from'./document-watcher.js';import templateMap from'./template-map.js';import*as ApplyShimUtils from'./apply-shim-utils.js';import documentWait from'./document-wait.js';import{updateNativeProperties,detectMixin}from'./common-utils.js';import{CustomStyleInterfaceInterface}from'./custom-style-interface.js';var styleCache=new StyleCache,ScopingShim=function(){function a(){var b=this;babelHelpers.classCallCheck(this,a),this._scopeCounter={},this._documentOwner=document.documentElement;var d=new StyleNode;d.rules=[],this._documentOwnerStyleInfo=StyleInfo.set(this._documentOwner,new StyleInfo(d)),this._elementsHaveApplied=!1,this._applyShim=null,this._customStyleInterface=null,documentWait(function(){b._ensure()})}return babelHelpers.createClass(a,[{key:'flush',value:function(){watcherFlush()}},{key:'_generateScopeSelector',value:function(d){var e=this._scopeCounter[d]=(this._scopeCounter[d]||0)+1;return d+'-'+e}},{key:'getStyleAst',value:function(d){return StyleUtil.rulesForStyle(d)}},{key:'styleAstToString',value:function(d){return StyleUtil.toCssText(d)}},{key:'_gatherStyles',value:function(d){for(var h,e=d.content.querySelectorAll('style'),f=[],g=0;g<e.length;g++)h=e[g],f.push(h.textContent),h.parentNode.removeChild(h);return f.join('').trim()}},{key:'_getCssBuild',value:function(d){var e=d.content.querySelector('style');return e?e.getAttribute('css-build')||'':''}},{key:'prepareTemplate',value:function(d,e,f){if(!d._prepared){d._prepared=!0,d.name=e,d.extends=f,templateMap[e]=d;var g=this._getCssBuild(d),h=this._gatherStyles(d),j={is:e,extends:f,__cssBuild:g};nativeShadow||StyleTransformer.dom(d.content,e),this._ensure();var k=detectMixin(h),l=parse(h);k&&nativeCssVariables&&this._applyShim&&this._applyShim.transformRules(l,e),d._styleAst=l,d._cssBuild=g;var m=[];if(nativeCssVariables||(m=StyleProperties.decorateStyles(d._styleAst,j)),!m.length||nativeCssVariables){var n=nativeShadow?d.content:null,o=placeholderMap[e],q=this._generateStaticStyle(j,d._styleAst,n,o);d._style=q}d._ownPropertyNames=m}}},{key:'_generateStaticStyle',value:function(d,e,f,g){var h=StyleTransformer.elementStyles(d,e);if(h.length)return StyleUtil.applyCss(h,d.is,f,g)}},{key:'_prepareHost',value:function(d){var k,l,m,e=StyleUtil.getIsExtends(d),f=e.is,g=e.typeExtension,h=placeholderMap[f],j=templateMap[f];return j&&(k=j._styleAst,l=j._ownPropertyNames,m=j._cssBuild),StyleInfo.set(d,new StyleInfo(k,h,l,f,g,m))}},{key:'_ensureApplyShim',value:function(){this._applyShim||window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(this._applyShim=window.ShadyCSS.ApplyShim,this._applyShim.invalidCallback=ApplyShimUtils.invalidate)}},{key:'_ensureCustomStyleInterface',value:function(){var d=this;this._customStyleInterface||window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(this._customStyleInterface=window.ShadyCSS.CustomStyleInterface,this._customStyleInterface.transformCallback=function(e){d.transformCustomStyleForDocument(e)},this._customStyleInterface.validateCallback=function(){requestAnimationFrame(function(){(d._customStyleInterface.enqueued||d._elementsHaveApplied)&&d.flushCustomStyles()})})}},{key:'_ensure',value:function(){this._ensureApplyShim(),this._ensureCustomStyleInterface()}},{key:'flushCustomStyles',value:function(){if(this._ensure(),!!this._customStyleInterface){var d=this._customStyleInterface.processStyles();this._customStyleInterface.enqueued&&(nativeCssVariables?this._revalidateCustomStyleApplyShim(d):(this._updateProperties(this._documentOwner,this._documentOwnerStyleInfo),this._applyCustomStyles(d)),this._customStyleInterface.enqueued=!1,this._elementsHaveApplied&&!nativeCssVariables&&this.styleDocument())}}},{key:'styleElement',value:function(d,e){var f=StyleUtil.getIsExtends(d),g=f.is,h=StyleInfo.get(d);if(h||(h=this._prepareHost(d)),this._isRootOwner(d)||(this._elementsHaveApplied=!0),e&&(h.overrideStyleProperties=h.overrideStyleProperties||{},Object.assign(h.overrideStyleProperties,e)),!nativeCssVariables)this._updateProperties(d,h),h.ownStylePropertyNames&&h.ownStylePropertyNames.length&&this._applyStyleProperties(d,h);else{h.overrideStyleProperties&&updateNativeProperties(d,h.overrideStyleProperties);var j=templateMap[g];if(!j&&!this._isRootOwner(d))return;if(j&&j._style&&!ApplyShimUtils.templateIsValid(j)){if(ApplyShimUtils.templateIsValidating(j)||(this._ensure(),this._applyShim&&this._applyShim.transformRules(j._styleAst,g),j._style.textContent=StyleTransformer.elementStyles(d,h.styleRules),ApplyShimUtils.startValidatingTemplate(j)),nativeShadow){var k=d.shadowRoot;if(k){var l=k.querySelector('style');l.textContent=StyleTransformer.elementStyles(d,h.styleRules)}}h.styleRules=j._styleAst}}}},{key:'_styleOwnerForNode',value:function(d){var e=d.getRootNode(),f=e.host;return f?StyleInfo.get(f)?f:this._styleOwnerForNode(f):this._documentOwner}},{key:'_isRootOwner',value:function(d){return d===this._documentOwner}},{key:'_applyStyleProperties',value:function(d,e){var f=StyleUtil.getIsExtends(d).is,g=styleCache.fetch(f,e.styleProperties,e.ownStylePropertyNames),h=g&&g.scopeSelector,j=g?g.styleElement:null,k=e.scopeSelector;e.scopeSelector=h||this._generateScopeSelector(f);var l=StyleProperties.applyElementStyle(d,e.styleProperties,e.scopeSelector,j);return nativeShadow||StyleProperties.applyElementScopeSelector(d,e.scopeSelector,k),g||styleCache.store(f,e.styleProperties,l,e.scopeSelector),l}},{key:'_updateProperties',value:function(d,e){var f=this._styleOwnerForNode(d),g=StyleInfo.get(f),h=g.styleProperties,j=Object.create(h||null),k=StyleProperties.hostAndRootPropertiesForScope(d,e.styleRules),l=StyleProperties.propertyDataFromStyles(g.styleRules,d),m=l.properties;Object.assign(j,k.hostProps,m,k.rootProps),this._mixinOverrideStyles(j,e.overrideStyleProperties),StyleProperties.reify(j),e.styleProperties=j}},{key:'_mixinOverrideStyles',value:function(d,e){for(var f in e){var g=e[f];(g||0===g)&&(d[f]=g)}}},{key:'styleDocument',value:function(d){this.styleSubtree(this._documentOwner,d)}},{key:'styleSubtree',value:function(d,e){var f=d.shadowRoot;(f||this._isRootOwner(d))&&this.styleElement(d,e);var g=f&&(f.children||f.childNodes);if(g)for(var j,h=0;h<g.length;h++)j=g[h],this.styleSubtree(j);else{var k=d.children||d.childNodes;if(k)for(var m,l=0;l<k.length;l++)m=k[l],this.styleSubtree(m)}}},{key:'_revalidateCustomStyleApplyShim',value:function(d){for(var e=0;e<d.length;e++){var f=d[e],g=this._customStyleInterface.getStyleForCustomStyle(f);g&&this._revalidateApplyShim(g)}}},{key:'_applyCustomStyles',value:function(d){for(var e=0;e<d.length;e++){var f=d[e],g=this._customStyleInterface.getStyleForCustomStyle(f);g&&StyleProperties.applyCustomStyle(g,this._documentOwnerStyleInfo.styleProperties)}}},{key:'transformCustomStyleForDocument',value:function(d){var e=this,f=StyleUtil.rulesForStyle(d);StyleUtil.forEachRule(f,function(g){nativeShadow?StyleTransformer.normalizeRootSelector(g):StyleTransformer.documentRule(g),nativeCssVariables&&(e._ensure(),e._applyShim&&e._applyShim.transformRule(g))}),nativeCssVariables?d.textContent=StyleUtil.toCssText(f):this._documentOwnerStyleInfo.styleRules.rules.push(f)}},{key:'_revalidateApplyShim',value:function(d){if(nativeCssVariables&&this._applyShim){var e=StyleUtil.rulesForStyle(d);this._ensure(),this._applyShim.transformRules(e),d.textContent=StyleUtil.toCssText(e)}}},{key:'getComputedStyleValue',value:function(d,e){var f;if(!nativeCssVariables){var g=StyleInfo.get(d)||StyleInfo.get(this._styleOwnerForNode(d));f=g.styleProperties[e]}return f=f||window.getComputedStyle(d).getPropertyValue(e),f?f.trim():''}},{key:'setElementClass',value:function(d,e){var f=d.getRootNode(),g=e?e.split(/\s/):[],h=f.host&&f.host.localName;if(!h){var j=d.getAttribute('class');if(j)for(var k=j.split(/\s/),l=0;l<k.length;l++)if(k[l]===StyleTransformer.SCOPE_NAME){h=k[l+1];break}}if(h&&g.push(StyleTransformer.SCOPE_NAME,h),!nativeCssVariables){var m=StyleInfo.get(d);m&&m.scopeSelector&&g.push(StyleProperties.XSCOPE_NAME,m.scopeSelector)}StyleUtil.setElementClassRaw(d,g.join(' '))}},{key:'_styleInfoForNode',value:function(d){return StyleInfo.get(d)}}]),a}();export default ScopingShim;ScopingShim.prototype.flush=ScopingShim.prototype.flush,ScopingShim.prototype.prepareTemplate=ScopingShim.prototype.prepareTemplate,ScopingShim.prototype.styleElement=ScopingShim.prototype.styleElement,ScopingShim.prototype.styleDocument=ScopingShim.prototype.styleDocument,ScopingShim.prototype.styleSubtree=ScopingShim.prototype.styleSubtree,ScopingShim.prototype.getComputedStyleValue=ScopingShim.prototype.getComputedStyleValue,ScopingShim.prototype.setElementClass=ScopingShim.prototype.setElementClass,ScopingShim.prototype._styleInfoForNode=ScopingShim.prototype._styleInfoForNode,ScopingShim.prototype.transformCustomStyleForDocument=ScopingShim.prototype.transformCustomStyleForDocument,ScopingShim.prototype.getStyleAst=ScopingShim.prototype.getStyleAst,ScopingShim.prototype.styleAstToString=ScopingShim.prototype.styleAstToString,ScopingShim.prototype.flushCustomStyles=ScopingShim.prototype.flushCustomStyles,Object.defineProperties(ScopingShim.prototype,{nativeShadow:{get:function(){return nativeShadow}},nativeCss:{get:function(){return nativeCssVariables}}});