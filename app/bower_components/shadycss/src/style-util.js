'use strict';import{nativeShadow,nativeCssVariables}from'./style-settings.js';import{parse,stringify,types,StyleNode}from'./css-parse.js';import{MEDIA_MATCH}from'./common-regex.js';export function toCssText(a,b){return a?('string'===typeof a&&(a=parse(a)),b&&forEachRule(a,b),stringify(a,nativeCssVariables)):''}export function rulesForStyle(a){return!a.__cssRules&&a.textContent&&(a.__cssRules=parse(a.textContent)),a.__cssRules||null}export function isKeyframesSelector(a){return!!a.parent&&a.parent.type===types.KEYFRAMES_RULE}export function forEachRule(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===types.MEDIA_RULE){var g=a.selector.match(MEDIA_MATCH);g&&!window.matchMedia(g[1]).matches&&(e=!0)}f===types.STYLE_RULE?b(a):c&&f===types.KEYFRAMES_RULE?c(a):f===types.MIXIN_RULE&&(e=!0);var h=a.rules;if(h&&!e)for(var m,j=0,k=h.length;j<k&&(m=h[j]);j++)forEachRule(m,b,c,d)}}export function applyCss(a,b,c,d){var e=createScopeStyle(a,b);return applyStyle(e,c,d),e}export function createScopeStyle(a,b){var c=document.createElement('style');return b&&c.setAttribute('scope',b),c.textContent=a,c}var lastHeadApplyNode=null;export function applyStylePlaceHolder(a){var b=document.createComment(' Shady DOM styles for '+a+' '),c=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,d=document.head;return d.insertBefore(b,c||d.firstChild),lastHeadApplyNode=b,b}export function applyStyle(a,b,c){b=b||document.head;var d=c&&c.nextSibling||b.firstChild;if(b.insertBefore(a,d),!lastHeadApplyNode)lastHeadApplyNode=a;else{var e=a.compareDocumentPosition(lastHeadApplyNode);e===Node.DOCUMENT_POSITION_PRECEDING&&(lastHeadApplyNode=a)}}export function isTargetedBuild(a){return nativeShadow?'shadow'===a:'shady'===a}export function getCssBuildType(a){return a.getAttribute('css-build')}function findMatchingParen(a,b){for(var c=0,d=b,e=a.length;d<e;d++)if('('===a[d])c++;else if(')'===a[d]&&0===--c)return d;return-1}export function processVariableAndFallback(a,b){var c=a.indexOf('var(');if(-1===c)return b(a,'','','');var d=findMatchingParen(a,c+3),e=a.substring(c+4,d),f=a.substring(0,c),g=processVariableAndFallback(a.substring(d+1),b),h=e.indexOf(',');if(-1===h)return b(f,e.trim(),'',g);var j=e.substring(0,h).trim(),k=e.substring(h+1).trim();return b(f,j,k,g)}export function setElementClassRaw(a,b){nativeShadow?a.setAttribute('class',b):window.ShadyDOM.nativeMethods.setAttribute.call(a,'class',b)}export function getIsExtends(a){var b=a.localName,c='',d='';return b?-1<b.indexOf('-')?c=b:(d=b,c=a.getAttribute&&a.getAttribute('is')||''):(c=a.is,d=a.extends),{is:c,typeExtension:d}}