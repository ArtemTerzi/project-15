function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function o(e){return e&&e.__esModule?e.default:e}var n={},i={},r=t.parcelRequire12f5;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire12f5=r),r.register("kyEFX",(function(t,o){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"kHKil":"favorite.c590722d.js","2h93M":"error_screen_min.4023487f.png","41eNB":"error_screen_x2.39288cc7.png","eGI0r":"error_mobile_min.58218a7d.png","gwbTd":"error_mobile_x2.abc25851.png","hsf41":"error_tablet_min.c64e72d1.png","6U0Iy":"error_tablet_x2.f001dae6.png"}'));const s={KEY_LOCAL_STORAGE:"news-state-local-storage"};function l(e){let t="";try{const o=JSON.parse(localStorage.getItem(s.KEY_LOCAL_STORAGE));if(null===o)return t;for(const n of o)if(n.link===e&&n.isFavorite)return t="isFavorite",t;return t}catch(e){console.log("Error parse date local storage")}}function a(e){let t="";try{const o=JSON.parse(localStorage.getItem(s.KEY_LOCAL_STORAGE));if(null===o)return t;for(const n of o)if(n.link===e&&n.isRead)return t="isRead",t;return t}catch(e){console.log("Error parse date local storage")}}function c(e){return'        <li class="home__list-item weather-container">\n          <aside class="weather"></aside>'+e.map((({img:e,title:t,text:o,date:n,link:i,section:r})=>`\n    <li class="home__list-item ${a(i)}">\n      <div class="home__list-top">\n          <p class="home__list-section">${r}</p>\n          <p class="home__list-is-read">Already read &#10004;</p>\n          <img width="353" height="395" class="home__list-img" src=${e} alt=${t}>\n          <button type="button" id="like" class="add-button remove-button ${l(i)}">Add to favorite</button>\n          <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">${t}</h2>\n        <p class="home__list-text">${o}</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">${n}</p>\n        <a href=${i} class="home__list-link">Read more</a>\n      </div>\n    </li>\n    `)).join("")}const u=document.querySelector(".card-container");var d=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,v=h||g||Function("return this")(),b=Object.prototype.toString,y=Math.max,S=Math.min,x=function(){return v.Date.now()};function E(e,t,o){var n,i,r,s,l,a,c=0,u=!1,d=!1,_=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var o=n,r=i;return n=i=void 0,c=t,s=e.apply(r,o)}function m(e){return c=e,l=setTimeout(h,t),u?f(e):s}function p(e){var o=e-a;return void 0===a||o>=t||o<0||d&&e-c>=r}function h(){var e=x();if(p(e))return g(e);l=setTimeout(h,function(e){var o=t-(e-a);return d?S(o,r-(e-c)):o}(e))}function g(e){return l=void 0,_&&n?f(e):(n=i=void 0,s)}function v(){var e=x(),o=p(e);if(n=arguments,i=this,a=e,o){if(void 0===l)return m(a);if(d)return l=setTimeout(h,t),f(a)}return void 0===l&&(l=setTimeout(h,t)),s}return t=w(t)||0,O(o)&&(u=!!o.leading,r=(d="maxWait"in o)?y(w(o.maxWait)||0,t):r,_="trailing"in o?!!o.trailing:_),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=a=i=l=void 0},v.flush=function(){return void 0===l?s:g(x())},v}function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==b.call(e)}(e))return NaN;if(O(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=O(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var o=f.test(e);return o||m.test(e)?p(e.slice(2),o?2:8):_.test(e)?NaN:+e}var A;A=new URL(r("kyEFX").resolve("2h93M"),import.meta.url).toString();var L;L=new URL(r("kyEFX").resolve("41eNB"),import.meta.url).toString();var k;k=new URL(r("kyEFX").resolve("eGI0r"),import.meta.url).toString();var R;R=new URL(r("kyEFX").resolve("gwbTd"),import.meta.url).toString();var j;j=new URL(r("kyEFX").resolve("hsf41"),import.meta.url).toString();var T;function H(){return`<section class="error">\n  <h2 class="error-text">We haven’t found news from this category</h2>\n  <picture class="error-image">\n    <source\n      srcset="\n        ${o(A)} 1x,\n        ${o(L)} 2x\n      "\n      media="(min-width: 1200px)"\n    />\n    <source\n      srcset="\n        ${o(j)} 1x,\n        ${o(T)} 2x\n      "\n      media="(min-width: 768px)"\n    />\n    <source\n      srcset="\n        ${o(k)} 1x,\n        ${o(R)} 2x\n      "\n      media="(max-width: 767px)"\n    />\n    <img\n      src=${o(A)}\n      alt="Error page"\n      width="601"\n    />\n  </picture>\n</section>`}T=new URL(r("kyEFX").resolve("6U0Iy"),import.meta.url).toString();new class{renderCards(){this.cardObject='<li class="home__list-item">\n      <div class="home__list-top">\n          <p class="home__list-section">Job section</p>\n          <p class="home__list-is-read">Already read &#10004;</p>\n          <img width="353" height="395" class="home__list-img" src=\'https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\' alt=\'building\'>\n          <button type="button" id="like" class="add-button remove-button">Add to favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">Header 1</h2>\n        <p class="home__list-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects\n        offered by these...</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">20/02/2021</p>\n        <a href=\'first\' class="home__list-link">Read more</a>\n      </div>\n    </li>\n    <li class="home__list-item">\n      <div class="home__list-top">\n          <p class="home__list-section">Job section</p>\n          <p class="home__list-is-read">Already read &#10004;</p>\n          <img width="353" height="395" class="home__list-img" src=\'https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\' alt=\'building\'>\n          <button type="button" id="like" class="add-button remove-button">Add to favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">Header 2</h2>\n        <p class="home__list-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects\n        offered by these...</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">20/02/2021</p>\n        <a href=\'second\' class="home__list-link">Read more</a>\n      </div>\n    </li>\n    <li class="home__list-item">\n      <div class="home__list-top">\n          <p class="home__list-section">Job section</p>\n          <p class="home__list-is-read">Already read &#10004;</p>\n          <img width="353" height="395" class="home__list-img" src=\'https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\' alt=\'building\'>\n          <button type="button" id="like" class="add-button remove-button">Add to favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">Header 3</h2>\n        <p class="home__list-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects\n        offered by these...</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">20/02/2021</p>\n        <a href=\'third\' class="home__list-link">Read more</a>\n      </div>\n    </li>',u.insertAdjacentHTML("beforeend",this.cardObject)}};const F=document.querySelector(".card-container"),$=document.querySelector(".favorite-main");document.querySelector(".card-container").addEventListener("click",(function(e){let t=e.target.parentNode.parentNode,o=(t.querySelector(".home__list-item"),t.querySelector(".home__list-title")),n=t.querySelector(".home__list-text"),i=t.querySelector(".home__list-top > img"),r=(t.querySelector(".home__list-top > img[alt]"),t.querySelector(".home__list-footer > .home__list-date")),l=t.querySelector(".home__list-footer > .home__list-link"),a=t.querySelector(".home__list-section"),c=i.getAttribute("src"),u=o.textContent,d=n.textContent,_=r.textContent,f=l.getAttribute("href"),m=a.textContent,p={img:c,title:u,text:d,date:_,link:f,section:m,isFavorite:!0};if(e.target.classList.contains("remove-button")){e.target.classList.toggle("remove-button"),e.target.textContent="Remove from favorite";try{const e=JSON.parse(localStorage.getItem(s.KEY_LOCAL_STORAGE));if(null===e)return void localStorage.setItem(s.KEY_LOCAL_STORAGE,JSON.stringify([p]));if(null!==e)for(const t of e)if(t.link===p.link)return void(t.isFavorite=!0);e.push(p),localStorage.setItem(s.KEY_LOCAL_STORAGE,JSON.stringify(e))}catch(e){const t=H();$.innerHTML=t}}else if(e.target.classList.contains("add-button")){e.target.classList.toggle("remove-button"),e.target.textContent="Add to favorite";try{const e=JSON.parse(localStorage.getItem(s.KEY_LOCAL_STORAGE));for(const t of e)t.link===p.link&&(t.isFavorite=!1);localStorage.setItem(s.KEY_LOCAL_STORAGE,JSON.stringify(e))}catch(e){const t=H();$.innerHTML=t}}}));function N(){const e=JSON.parse(localStorage.getItem(s.KEY_LOCAL_STORAGE));if(null===e){const e=H();$.innerHTML=e}return console.log(e),c(e)}void 0!==N()&&(F.innerHTML=N());
//# sourceMappingURL=favorite.c590722d.js.map