!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequire12f5;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},r.parcelRequire12f5=i),i.register("iE7OH",(function(e,r){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)i[e[r]]=t[e[r]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,r){var n;t(e.exports,"getBundleURL",(function(){return n}),(function(t){return n=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"StDo9":"favorite.6e5b6e02.js","8J0T8":"error_screen_min.4023487f.png","32Ruo":"error_screen_x2.39288cc7.png","8MCNl":"error_mobile_min.58218a7d.png","8oDjV":"error_mobile_x2.abc25851.png","iRhwk":"error_tablet_min.c64e72d1.png","1hH1h":"error_tablet_x2.f001dae6.png"}'));var s={KEY_LOCAL_STORAGE:"news-state-local-storage"};function a(t){var e="";try{var r=JSON.parse(localStorage.getItem(s.KEY_LOCAL_STORAGE));if(null===r)return e;var n=!0,o=!1,i=void 0;try{for(var a,l=r[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var c=a.value;if(c.link===t&&c.isFavorite)return e="isFavorite"}}catch(t){o=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return e}catch(t){console.log("Error parse date local storage")}}function l(t){var e="";try{var r=JSON.parse(localStorage.getItem(s.KEY_LOCAL_STORAGE));if(null===r)return e;var n=!0,o=!1,i=void 0;try{for(var a,l=r[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var c=a.value;if(c.link===t&&c.isRead)return e="isRead"}}catch(t){o=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return e}catch(t){console.log("Error parse date local storage")}}function c(t){return'        <li class="home__list-item weather-container">\n          <aside class="weather"></aside>'+t.map((function(t){var e=t.img,r=t.title,n=t.text,o=t.date,i=t.link,s=t.section;return'\n    <li class="home__list-item '.concat(l(i),'">\n      <div class="home__list-top">\n          <p class="home__list-section">').concat(s,'</p>\n          <p class="home__list-is-read">Already read &#10004;</p>\n          <img width="353" height="395" class="home__list-img" src=').concat(e," alt=").concat(r,'>\n          <button type="button" id="like" class="add-button remove-button ').concat(a(i),'">Add to favorite</button>\n          <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">').concat(r,'</h2>\n        <p class="home__list-text">').concat(n,'</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">').concat(o,"</p>\n        <a href=").concat(i,' class="home__list-link">Read more</a>\n      </div>\n    </li>\n    ')})).join("")}var u=i("8MBJY"),d=i("a2hTj"),f=document.querySelector(".card-container"),_=function(){"use strict";function t(){e(u)(this,t)}return e(d)(t,[{key:"renderCards",value:function(){this.cardObject='<li class="home__list-item">\n      <div class="home__list-top">\n          <p class="home__list-section">Job section</p>\n          <p class="home__list-is-read">Already read &#10004;</p>\n          <img width="353" height="395" class="home__list-img" src=\'https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\' alt=\'building\'>\n          <button type="button" id="like" class="add-button remove-button">Add to favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">Header 1</h2>\n        <p class="home__list-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects\n        offered by these...</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">20/02/2021</p>\n        <a href=\'first\' class="home__list-link">Read more</a>\n      </div>\n    </li>\n    <li class="home__list-item">\n      <div class="home__list-top">\n          <p class="home__list-section">Job section</p>\n          <p class="home__list-is-read">Already read &#10004;</p>\n          <img width="353" height="395" class="home__list-img" src=\'https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\' alt=\'building\'>\n          <button type="button" id="like" class="add-button remove-button">Add to favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">Header 2</h2>\n        <p class="home__list-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects\n        offered by these...</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">20/02/2021</p>\n        <a href=\'second\' class="home__list-link">Read more</a>\n      </div>\n    </li>\n    <li class="home__list-item">\n      <div class="home__list-top">\n          <p class="home__list-section">Job section</p>\n          <p class="home__list-is-read">Already read &#10004;</p>\n          <img width="353" height="395" class="home__list-img" src=\'https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\' alt=\'building\'>\n          <button type="button" id="like" class="add-button remove-button">Add to favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">Header 3</h2>\n        <p class="home__list-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects\n        offered by these...</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">20/02/2021</p>\n        <a href=\'third\' class="home__list-link">Read more</a>\n      </div>\n    </li>',f.insertAdjacentHTML("beforeend",this.cardObject)}}]),t}();var h=i("l5bVx"),m="Expected a function",v=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,b=/^0o[0-7]+$/i,y=parseInt,S="object"==typeof r&&r&&r.Object===Object&&r,x="object"==typeof self&&self&&self.Object===Object&&self,O=S||x||Function("return this")(),E=Object.prototype.toString,w=Math.max,A=Math.min,R=function(){return O.Date.now()};function L(t,e,r){var n,o,i,s,a,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError(m);function _(e){var r=n,i=o;return n=o=void 0,c=e,s=t.apply(i,r)}function h(t){return c=t,a=setTimeout(p,e),u?_(t):s}function v(t){var r=t-l;return void 0===l||r>=e||r<0||d&&t-c>=i}function p(){var t=R();if(v(t))return g(t);a=setTimeout(p,function(t){var r=e-(t-l);return d?A(r,i-(t-c)):r}(t))}function g(t){return a=void 0,f&&n?_(t):(n=o=void 0,s)}function b(){var t=R(),r=v(t);if(n=arguments,o=this,l=t,r){if(void 0===a)return h(l);if(d)return a=setTimeout(p,e),_(l)}return void 0===a&&(a=setTimeout(p,e)),s}return e=j(e)||0,H(r)&&(u=!!r.leading,i=(d="maxWait"in r)?w(j(r.maxWait)||0,e):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:g(R())},b}function H(t){var r=void 0===t?"undefined":e(h)(t);return!!t&&("object"==r||"function"==r)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(h)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==E.call(t)}(t))return NaN;if(H(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=H(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=g.test(t);return n||b.test(t)?y(t.slice(2),n?2:8):p.test(t)?NaN:+t}var k;k=i("aNJCr").getBundleURL("StDo9")+i("iE7OH").resolve("8J0T8");var C;C=i("aNJCr").getBundleURL("StDo9")+i("iE7OH").resolve("32Ruo");var N;N=i("aNJCr").getBundleURL("StDo9")+i("iE7OH").resolve("8MCNl");var T;T=i("aNJCr").getBundleURL("StDo9")+i("iE7OH").resolve("8oDjV");var J;J=i("aNJCr").getBundleURL("StDo9")+i("iE7OH").resolve("iRhwk");var q;function F(){return'<section class="error">\n  <h2 class="error-text">We haven’t found news from this category</h2>\n  <picture class="error-image">\n    <source\n      srcset="\n        '.concat(e(k)," 1x,\n        ").concat(e(C),' 2x\n      "\n      media="(min-width: 1200px)"\n    />\n    <source\n      srcset="\n        ').concat(e(J)," 1x,\n        ").concat(e(q),' 2x\n      "\n      media="(min-width: 768px)"\n    />\n    <source\n      srcset="\n        ').concat(e(N)," 1x,\n        ").concat(e(T),' 2x\n      "\n      media="(max-width: 767px)"\n    />\n    <img\n      src=').concat(e(k),'\n      alt="Error page"\n      width="601"\n    />\n  </picture>\n</section>')}q=i("aNJCr").getBundleURL("StDo9")+i("iE7OH").resolve("1hH1h");new _;var D=document.querySelector(".card-container"),M=document.querySelector(".favorite-main");document.querySelector(".card-container").addEventListener("click",(function(t){var e=t.target.parentNode.parentNode,r=(e.querySelector(".home__list-item"),e.querySelector(".home__list-title")),n=e.querySelector(".home__list-text"),o=e.querySelector(".home__list-top > img"),i=(e.querySelector(".home__list-top > img[alt]"),e.querySelector(".home__list-footer > .home__list-date")),a=e.querySelector(".home__list-footer > .home__list-link"),l=e.querySelector(".home__list-section"),c=o.getAttribute("src"),u=r.textContent,d=n.textContent,f=i.textContent,_=a.getAttribute("href"),h=l.textContent,m={img:c,title:u,text:d,date:f,link:_,section:h,isFavorite:!0};if(t.target.classList.contains("remove-button")){t.target.classList.toggle("remove-button"),t.target.textContent="Remove from favorite";try{var v=JSON.parse(localStorage.getItem(s.KEY_LOCAL_STORAGE));if(null===v)return void localStorage.setItem(s.KEY_LOCAL_STORAGE,JSON.stringify([m]));if(null!==v){var p=!0,g=!1,b=void 0;try{for(var y,S=v[Symbol.iterator]();!(p=(y=S.next()).done);p=!0){var x=y.value;if(x.link===m.link)return void(x.isFavorite=!0)}}catch(t){g=!0,b=t}finally{try{p||null==S.return||S.return()}finally{if(g)throw b}}}v.push(m),localStorage.setItem(s.KEY_LOCAL_STORAGE,JSON.stringify(v))}catch(t){var O=F();M.innerHTML=O}}else if(t.target.classList.contains("add-button")){t.target.classList.toggle("remove-button"),t.target.textContent="Add to favorite";try{var E=JSON.parse(localStorage.getItem(s.KEY_LOCAL_STORAGE)),w=!0,A=!1,R=void 0;try{for(var L,H=E[Symbol.iterator]();!(w=(L=H.next()).done);w=!0){var j=L.value;j.link===m.link&&(j.isFavorite=!1)}}catch(t){A=!0,R=t}finally{try{w||null==H.return||H.return()}finally{if(A)throw R}}localStorage.setItem(s.KEY_LOCAL_STORAGE,JSON.stringify(E))}catch(t){var k=F();M.innerHTML=k}}}));function B(){var t=JSON.parse(localStorage.getItem(s.KEY_LOCAL_STORAGE));if(null===t){var e=F();M.innerHTML=e}return console.log(t),c(t)}void 0!==B()&&(D.innerHTML=B())}();
//# sourceMappingURL=favorite.6e5b6e02.js.map