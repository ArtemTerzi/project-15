!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire12f5;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire12f5=o),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,n){t&&u(e.prototype,t);n&&u(e,n);return e};var c,l=document.querySelector(".card-container"),s=function(){"use strict";function t(){e(i)(this,t)}return e(a)(t,[{key:"renderCards",value:function(){this.cardObject='<div class="wrapper">\n    <div class="box">\n        <img class="box-img"\n            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"\n            alt="building" width="353" height="395">\n            <button type="button" id="like" class="add-button">Add to favorite</button>\n            <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>\n    </div>\n    <h1 class="card-header">8 tips for passing an online interview that will help you get a job</h1>\n    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects\n        offered by these...</p>\n    <div class="card-details">\n        <p class="card-date">20/02/2021</p>\n        <a class="card-link" href="">Read more</a>\n    </div>\n  </div>',l.insertAdjacentHTML("beforeend",this.cardObject)}},{key:"onLike",value:function(){var e="myFavoriteNews",t=localStorage.getItem("myFavoriteNews");null!==localStorage.getItem(e)?(localStorage.removeItem(e),this.renderCards(t),console.log("added")):(localStorage.setItem("myFavoriteNews",this.cardObject),this.renderCards(t),console.log("removed"))}}]),t}(),f=o("l5bVx"),d="Expected a function",p=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,m=/^0o[0-7]+$/i,y=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,w=g||h||Function("return this")(),j=Object.prototype.toString,x=Math.max,O=Math.min,T=function(){return w.Date.now()};function S(e,t,n){var r,o,i,a,u,c,l=0,s=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError(d);function v(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function b(e){return l=e,u=setTimeout(y,t),s?v(e):a}function m(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-l>=i}function y(){var e=T();if(m(e))return g(e);u=setTimeout(y,function(e){var n=t-(e-c);return f?O(n,i-(e-l)):n}(e))}function g(e){return u=void 0,p&&r?v(e):(r=o=void 0,a)}function h(){var e=T(),n=m(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return b(c);if(f)return u=setTimeout(y,t),v(c)}return void 0===u&&(u=setTimeout(y,t)),a}return t=N(t)||0,k(n)&&(s=!!n.leading,i=(f="maxWait"in n)?x(N(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},h.flush=function(){return void 0===u?a:g(T())},h}function k(t){var n=void 0===t?"undefined":e(f)(t);return!!t&&("object"==n||"function"==n)}function N(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(f)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(k(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=k(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(p,"");var r=b.test(t);return r||m.test(t)?y(t.slice(2),r?2:8):v.test(t)?NaN:+t}c=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(d);return k(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};var _=document.querySelector(".demo-form"),E=(document.querySelector(".demo-input"),document.querySelector(".card-container")),M=new s;_.addEventListener("submit",e(c)((function(e){!function(e){e.preventDefault();e.currentTarget.elements.articleName.value.trim();M.renderCards()}(e)}),300)),E.addEventListener("click",(function(e){M.onLike()}))}();
//# sourceMappingURL=favorite.68df879d.js.map