(function(){'undefined'!==typeof self&&self.Prism&&self.document&&Prism.hooks.add('complete',function(a){if(a.code){var b=a.element.parentNode,c=/\s*\bline-numbers\b\s*/;if(b&&/pre/i.test(b.nodeName)&&(c.test(b.className)||c.test(a.element.className))&&!a.element.querySelector('.line-numbers-rows')){c.test(a.element.className)&&(a.element.className=a.element.className.replace(c,'')),c.test(b.className)||(b.className+=' line-numbers');var f,d=a.code.match(/\n(?!$)/g),e=d?d.length+1:1,g=Array(e+1);g=g.join('<span></span>'),f=document.createElement('span'),f.setAttribute('aria-hidden','true'),f.className='line-numbers-rows',f.innerHTML=g,b.hasAttribute('data-start')&&(b.style.counterReset='linenumber '+(parseInt(b.getAttribute('data-start'),10)-1)),a.element.appendChild(f)}}})})();