(function(){function a(h,j){return Array.prototype.slice.call((j||document).querySelectorAll(h))}function b(h,j){return j=" "+j+" ",-1<(" "+h.className+" ").replace(/[\n\t]/g," ").indexOf(j)}function c(h,j,k){for(var q,l=j.replace(/\s+/g,"").split(","),m=+h.getAttribute("data-line-offset")||0,n=f()?parseInt:parseFloat,o=n(getComputedStyle(h).lineHeight),p=0;q=l[p++];){q=q.split("-");var r=+q[0],s=+q[1]||r,t=document.createElement("div");t.textContent=Array(s-r+2).join(" \n"),t.setAttribute("aria-hidden","true"),t.className=(k||"")+" line-highlight",b(h,"line-numbers")||(t.setAttribute("data-start",r),s>r&&t.setAttribute("data-end",s)),t.style.top=(r-m-1)*o+"px",b(h,"line-numbers")?h.appendChild(t):(h.querySelector("code")||h).appendChild(t)}}function e(){var h=location.hash.slice(1);a(".temporary.line-highlight").forEach(function(m){m.parentNode.removeChild(m)});var j=(h.match(/\.([\d,-]+)$/)||[,""])[1];if(j&&!document.getElementById(h)){var k=h.slice(0,h.lastIndexOf(".")),l=document.getElementById(k);l&&(!l.hasAttribute("data-line")&&l.setAttribute("data-line",""),c(l,j,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if("undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector){var f=function(){var h;return function(){if("undefined"===typeof h){var j=document.createElement("div");j.style.fontSize="13px",j.style.lineHeight="1.5",j.style.padding=0,j.style.border=0,j.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(j),h=38===j.offsetHeight,document.body.removeChild(j)}return h}}(),g=0;Prism.hooks.add("complete",function(h){var j=h.element.parentNode,k=j&&j.getAttribute("data-line");j&&k&&/pre/i.test(j.nodeName)&&(clearTimeout(g),a(".line-highlight",j).forEach(function(l){l.parentNode.removeChild(l)}),c(j,k),g=setTimeout(e,1))}),window.addEventListener&&window.addEventListener("hashchange",e)}})();