!function(e,t){function n(){var e=p.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=f[e[h]];return t||(t={},u++,e[h]=u,f[u]=t),t}function r(e,n,r){return n||(n=t),l?n.createElement(e):(r||(r=a(n)),n=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),n.canHaveChildren&&!m.test(e)?r.frag.appendChild(n):n)}function i(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return p.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(p,t.frag)}function s(e){e||(e=t);var n=a(e);if(p.shivCSS&&!o&&!n.hasCSS){var r,s=e;r=s.createElement("p"),s=s.getElementsByTagName("head")[0]||s.documentElement,r.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>",r=s.insertBefore(r.lastChild,s.firstChild),n.hasCSS=!!r}return l||i(e,n),e}var o,l,c=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",u=0,f={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e;var n;if(!(n=1==e.childNodes.length)){t.createElement("a");var a=t.createDocumentFragment();n="undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}l=n}catch(r){l=o=!0}}();var p={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==c.shivCSS,supportsUnknownElements:l,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:s,createElement:r,createDocumentFragment:function(e,r){if(e||(e=t),l)return e.createDocumentFragment();for(var r=r||a(e),i=r.frag.cloneNode(),s=0,o=n(),c=o.length;c>s;s++)i.createElement(o[s]);return i}};e.html5=p,s(t)}(this,document),/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */
!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,r=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(r,a),t=42===i.offsetWidth,n.removeChild(r),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";function t(){S(!0)}var n={};e.respond=n,n.update=function(){};var a=[],r=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),i=function(e,t){var n=r();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},s=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=i,n.queue=a,n.unsupportedmq=s,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var o,l,c,m=e.document,d=m.documentElement,h=[],u=[],f=[],p={},g=30,y=m.getElementsByTagName("head")[0]||d,v=m.getElementsByTagName("base")[0],x=y.getElementsByTagName("link"),E=function(){var e,t=m.createElement("div"),n=m.body,a=d.style.fontSize,r=n&&n.style.fontSize,i=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=i=m.createElement("body"),n.style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),i&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,i?d.removeChild(n):n.removeChild(t),d.style.fontSize=a,r&&(n.style.fontSize=r),e=c=parseFloat(e)},S=function(t){var n="clientWidth",a=d[n],r="CSS1Compat"===m.compatMode&&a||m.body[n]||a,i={},s=x[x.length-1],p=(new Date).getTime();if(t&&o&&g>p-o)return e.clearTimeout(l),void(l=e.setTimeout(S,g));o=p;for(var v in h)if(h.hasOwnProperty(v)){var w=h[v],b=w.minw,C=w.maxw,T=null===b,F=null===C,M="em";b&&(b=parseFloat(b)*(b.indexOf(M)>-1?c||E():1)),C&&(C=parseFloat(C)*(C.indexOf(M)>-1?c||E():1)),w.hasquery&&(T&&F||!(T||r>=b)||!(F||C>=r))||(i[w.media]||(i[w.media]=[]),i[w.media].push(u[w.rules]))}for(var $ in f)f.hasOwnProperty($)&&f[$]&&f[$].parentNode===y&&y.removeChild(f[$]);f.length=0;for(var z in i)if(i.hasOwnProperty(z)){var k=m.createElement("style"),N=i[z].join("\n");k.type="text/css",k.media=z,y.insertBefore(k,s.nextSibling),k.styleSheet?k.styleSheet.cssText=N:k.appendChild(m.createTextNode(N)),f.push(k)}},w=function(e,t,a){var r=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),i=r&&r.length||0;t=t.substring(0,t.lastIndexOf("/"));var o=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},l=!i&&a;t.length&&(t+="/"),l&&(i=1);for(var c=0;i>c;c++){var m,d,f,p;l?(m=a,u.push(o(e))):(m=r[c].match(n.regex.findStyles)&&RegExp.$1,u.push(RegExp.$2&&o(RegExp.$2))),f=m.split(","),p=f.length;for(var g=0;p>g;g++)d=f[g],s(d)||h.push({media:d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:u.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}S()},b=function(){if(a.length){var t=a.shift();i(t.href,function(n){w(n,t.href,t.media),p[t.href]=!0,e.setTimeout(function(){b()},0)})}},C=function(){for(var t=0;t<x.length;t++){var n=x[t],r=n.href,i=n.media,s=n.rel&&"stylesheet"===n.rel.toLowerCase();r&&s&&!p[r]&&(n.styleSheet&&n.styleSheet.rawCssText?(w(n.styleSheet.rawCssText,r,i),p[r]=!0):(!/^([a-zA-Z:]*\/\/)/.test(r)&&!v||r.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===r.substring(0,2)&&(r=e.location.protocol+r),a.push({href:r,media:i})))}b()};C(),n.update=C,n.getEmValue=E,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);