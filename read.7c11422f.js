!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire12f5;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire12f5=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=s(a("kMC0W")),r=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new O(r||[]);return a._invoke=function(e,t,n){var r=f;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw a;return A()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=E(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?h:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function m(){}function y(){}function g(){}var b={};u(b,a,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(N([])));w&&w!==n&&r.call(w,a)&&(b=w);var x=g.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function N(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:A}}function A(){return{value:t,done:!0}}return y.prototype=g,u(x,"constructor",g),u(g,"constructor",y),y.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(I.prototype),u(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new I(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=s(a("8slrw")),r=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a.register("cQS3G",(function(t,n){e(t.exports,"makeArrNewsForPageRead",(function(){return l}));var r=a("9XI3k");a("3pWjR");var i=a("9cYNk"),o=a("4Nugj"),s=document.querySelector("main"),u=document.querySelector(".readPage-list");function c(){return new Date(Date.now()).toLocaleString().split(",")[0]}function l(){try{!function(e){function t(e,t){var n=t.filter((function(t){return t.dateOfRead===e}));return(0,i.getMarkup)(n)}var n=e.flatMap((function(e){return e.dateOfRead})).filter((function(e,t,n){return n.indexOf(e)===t})).map((function(n){return'<li class="readPage-list__item"><h2 class="readPage-list__title">'.concat(n.replaceAll(".","/"),'</h2><svg class="readPage-list__svg" aria-label="open news" width="20px" height="20px">\n        <use href="/icons.adfc4680.svg#dilka-bottom"></use>\n    </svg><ul class="readPage-list__list  home__list">').concat(t(n,e),"</ul></li>")})).join("");u.insertAdjacentHTML("beforeend",n)}(JSON.parse(localStorage.getItem(o.refs.KEY_LOCAL_STORAGE)).reduce((function(e,t){return t.isRead&&e.push(t),e}),[]))}catch(e){console.log(s),s.innerHTML=(0,r.getMarkupError)()}}u.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;var t=function(e){var t=e.querySelector(".home__list-section").textContent,n=e.querySelector(".home__list-img").src,r=e.querySelector(".home__list-img").alt,i=e.querySelector(".home__list-title").textContent,a=e.querySelector(".home__list-text").textContent,o=e.querySelector(".home__list-date").textContent,s=e.querySelector(".home__list-link").href,u=c(),l={section:t,img:n,alt:r,title:i,text:a,date:o,link:s,isRead:!0,dateOfRead:u};return console.log(l),l}(e.target.parentNode.parentNode);try{var n=JSON.parse(localStorage.getItem(o.refs.KEY_LOCAL_STORAGE));if(null===n)return void localStorage.setItem(o.refs.KEY_LOCAL_STORAGE,JSON.stringify([t]));if(null!==n){var i=!0,a=!1,u=void 0;try{for(var l,f=n[Symbol.iterator]();!(i=(l=f.next()).done);i=!0){var d=l.value;if(d.link===t.link)return void(d.dateOfRead=c())}}catch(e){a=!0,u=e}finally{try{i||null==f.return||f.return()}finally{if(a)throw u}}n.push(t),localStorage.setItem(o.refs.KEY_LOCAL_STORAGE,JSON.stringify(n))}}catch(e){console.log(s),s.innerHTML=(0,r.getMarkupError)()}})),l(),u.addEventListener("click",(function(e){if("H2"!==e.target.nodeName)return;e.target.nextSibling.nextSibling.classList.toggle("visually-hidden")}))})),a.register("9XI3k",(function(n,r){e(n.exports,"getMarkupError",(function(){return f}));var i=a("lyamL"),o=a("eiAo5"),s=a("bcX5i"),u=a("8mVUo"),c=a("1V75g"),l=a("fOU75");function f(){return'<section class="error">\n  <h2 class="error-text">We haven’t found news from this category</h2>\n  <picture class="error-image">\n    <source\n      srcset="\n        '.concat(t(i)," 1x,\n        ").concat(t(o),' 2x\n      "\n      media="(min-width: 1200px)"\n    />\n    <source\n      srcset="\n        ').concat(t(c)," 1x,\n        ").concat(t(l),' 2x\n      "\n      media="(min-width: 768px)"\n    />\n    <source\n      srcset="\n        ').concat(t(s)," 1x,\n        ").concat(t(u),' 2x\n      "\n      media="(max-width: 767px)"\n    />\n    <img\n      src=').concat(t(i),'\n      alt="Error page"\n      width="601"\n    />\n  </picture>\n</section>')}})),a.register("lyamL",(function(e,t){e.exports=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8J0T8")})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("eiAo5",(function(e,t){e.exports=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("32Ruo")})),a.register("bcX5i",(function(e,t){e.exports=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8MCNl")})),a.register("8mVUo",(function(e,t){e.exports=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8oDjV")})),a.register("1V75g",(function(e,t){e.exports=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iRhwk")})),a.register("fOU75",(function(e,t){e.exports=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("1hH1h")})),a.register("3pWjR",(function(t,n){e(t.exports,"isFavoriteForStyle",(function(){return i})),e(t.exports,"isReadForStyle",(function(){return o}));var r=a("4Nugj");function i(e){var t="";try{var n=JSON.parse(localStorage.getItem(r.refs.KEY_LOCAL_STORAGE));if(null===n)return t;var i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(c.link===e&&c.isFavorite)return t="isFavorite"}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return t}catch(e){console.log("Error parse date local storage")}}function o(e){var t="";try{var n=JSON.parse(localStorage.getItem(r.refs.KEY_LOCAL_STORAGE));if(null===n)return t;var i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(c.link===e&&c.isRead)return t="isRead",console.log(t),t}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return console.log(t),t}catch(e){console.log("Error parse date local storage")}}})),a.register("4Nugj",(function(t,n){e(t.exports,"refs",(function(){return r})),e(t.exports,"options",(function(){return i}));var r={KEY_LOCAL_STORAGE:"news-state-local-storage"},i={API_KEY:"Vt0NzW87jfNUpJyEuUGrmzaDhUUa30Ka"}})),a.register("9cYNk",(function(t,n){e(t.exports,"getMarkup",(function(){return i}));var r=a("3pWjR");function i(e){return e.map((function(e){var t=e.img,n=e.title,i=e.text,a=e.date,o=e.link,s=e.section;return'\n    <li class="home__list-item '.concat((0,r.isReadForStyle)(o),'">\n      <div class="home__list-top">\n          <p class="home__list-section">').concat(s,'</p>\n          <img width="353" height="395" class="home__list-img" src=').concat(t," alt=").concat(n,'>\n          <button type="button" id="like" class="add-btn ').concat((0,r.isFavoriteForStyle)(o),'">Add to favorite</button>\n          <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">').concat(n,'</h2>\n        <p class="home__list-text">').concat(i,'</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">').concat(a,"</p>\n        <a href=").concat(o,' class="home__list-link">Read more</a>\n      </div>\n    </li>\n    ')})).join("")}})),a("iE7OH").register(JSON.parse('{"EVgbq":"read.7c11422f.js","8J0T8":"error_screen_min.4023487f.png","32Ruo":"error_screen_x2.39288cc7.png","8MCNl":"error_mobile_min.58218a7d.png","8oDjV":"error_mobile_x2.abc25851.png","iRhwk":"error_tablet_min.c64e72d1.png","1hH1h":"error_tablet_x2.f001dae6.png"}'));var o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),f=a("2TvXO"),d=(o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),a("1t1Wn")),p=(l=a("8nrFW"),f=a("2TvXO"),a("ds8z5")),h=(s=a("8MBJY"),u=a("a2hTj"),a("eYQtU")),v=(d=a("1t1Wn"),l=a("8nrFW"),{});Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e){return w(e)};var m=k(a("ge8co")),y=k(a("cZGw3")),g=k(a("fVNic")),b=k(a("gD1JV"));function k(e){return e&&e.__esModule?e:{default:e}}function w(e){var t="function"==typeof Map?new Map:void 0;return w=function(e){if(null===e||!y.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return m.default(e,arguments,g.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),b.default(n,e)},w(e)}var x,_,I,E=a("2MbLg"),T=x={};function S(){throw new Error("setTimeout has not been defined")}function O(){throw new Error("clearTimeout has not been defined")}function N(e){if(_===setTimeout)return setTimeout(e,0);if((_===S||!_)&&setTimeout)return _=setTimeout,setTimeout(e,0);try{return _(e,0)}catch(t){try{return _.call(null,e,0)}catch(t){return _.call(this,e,0)}}}!function(){try{_="function"==typeof setTimeout?setTimeout:S}catch(e){_=S}try{I="function"==typeof clearTimeout?clearTimeout:O}catch(e){I=O}}();var A,R=[],C=!1,L=-1;function P(){C&&A&&(C=!1,A.length?R=A.concat(R):L=-1,R.length&&D())}function D(){if(!C){var e=N(P);C=!0;for(var t=R.length;t;){for(A=R,R=[];++L<t;)A&&A[L].run();L=-1,t=R.length}A=null,C=!1,function(e){if(I===clearTimeout)return clearTimeout(e);if((I===O||!I)&&clearTimeout)return I=clearTimeout,clearTimeout(e);try{I(e)}catch(t){try{return I.call(null,e)}catch(t){return I.call(this,e)}}}(e)}}function M(e,t){this.fun=e,this.array=t}function j(){}T.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];R.push(new M(e,t)),1!==R.length||C||N(D)},M.prototype.run=function(){this.fun.apply(null,this.array)},T.title="browser",T.browser=!0,T.env={},T.argv=[],T.version="",T.versions={},T.on=j,T.addListener=j,T.once=j,T.off=j,T.removeListener=j,T.removeAllListeners=j,T.emit=j,T.prependListener=j,T.prependOnceListener=j,T.listeners=function(e){return[]},T.binding=function(e){throw new Error("process.binding is not supported")},T.cwd=function(){return"/"},T.chdir=function(e){throw new Error("process.chdir is not supported")},T.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var U=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},F={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(d=64)),r.push(n[l],n[f],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(U(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new W;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},W=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",e}return r}(t(v)(Error)),z=function(e){return function(e){var t=U(e);return F.encodeByteArray(t,!0)}(e).replace(/\./g,"")},B=function(e){try{return F.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var H=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},V=function(){try{return H()||function(){if(void 0!==x&&void 0!==x.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&B(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},q=function(e){var t,n;return null===(n=null===(t=V())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},J=function(){var e;return null===(e=V())||void 0===e?void 0:e.config},G=function(e){var t;return null===(t=V())||void 0===t?void 0:t["_".concat(e)]},K=function(){"use strict";function e(){var n=this;t(s)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(u)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function X(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Q=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(e,i,a){var o;return t(s)(this,r),(o=n.call(this,i)).code=e,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(t(p)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(p)(o),$.prototype.create),o}return r}(t(v)(Error)),$=function(){"use strict";function e(n,r,i){t(s)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(u)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Z(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new Q(a,u,i);return c}}]),e}();function Z(e,t){return e.replace(ee,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ee=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ne(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(re(l)&&re(f)){if(!ne(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var y=v.value;if(!n.includes(y))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function re(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ie(e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=t(d)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function ae(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(d)(e.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function oe(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se=function(){"use strict";function e(n,r){var i=this;t(s)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(u)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=ue),void 0===r.error&&(r.error=ue),void 0===r.complete&&(r.complete=ue);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function ue(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e){return e&&e._delegate?e._delegate:e}var le=function(){"use strict";function e(n,r,i){t(s)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(u)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),fe="[DEFAULT]",de=function(){"use strict";function e(n,r){t(s)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(u)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new K;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:fe})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=t(d)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r;return t(f).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(l)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(l)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=t(d)(c.value,2),p=f[0],h=f[1],v=this.normalizeInstanceIdentifier(p);i===v&&h.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===fe?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe;return this.component?this.component.multipleInstances?e:fe:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,he,ve=function(){"use strict";function e(n){t(s)(this,e),this.name=n,this.providers=new Map}return t(u)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new de(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),me=(s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),[]);(he=pe||(pe={}))[he.DEBUG=0]="DEBUG",he[he.VERBOSE=1]="VERBOSE",he[he.INFO=2]="INFO",he[he.WARN=3]="WARN",he[he.ERROR=4]="ERROR",he[he.SILENT=5]="SILENT";var ye,ge={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},be=pe.INFO,ke=(ye={},t(c)(ye,pe.DEBUG,"log"),t(c)(ye,pe.VERBOSE,"log"),t(c)(ye,pe.INFO,"info"),t(c)(ye,pe.WARN,"warn"),t(c)(ye,pe.ERROR,"error"),ye),we=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=ke[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(t(l)(i)))}},xe=function(){"use strict";function e(n){t(s)(this,e),this.name=n,this._logLevel=be,this._logHandler=we,this._userLogHandler=null,me.push(this)}return t(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in pe))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?ge[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,pe.DEBUG].concat(t(l)(n))),this._logHandler.apply(this,[this,pe.DEBUG].concat(t(l)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,pe.VERBOSE].concat(t(l)(n))),this._logHandler.apply(this,[this,pe.VERBOSE].concat(t(l)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,pe.INFO].concat(t(l)(n))),this._logHandler.apply(this,[this,pe.INFO].concat(t(l)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,pe.WARN].concat(t(l)(n))),this._logHandler.apply(this,[this,pe.WARN].concat(t(l)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,pe.ERROR].concat(t(l)(n))),this._logHandler.apply(this,[this,pe.ERROR].concat(t(l)(n)))}}]),e}();o=a("bpxeT");var _e={};Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ee.default(e,t,n[t])}))}return e};var Ie,Ee=(Ie=a("hKHmD"))&&Ie.__esModule?Ie:{default:Ie};var Te,Se;l=a("8nrFW"),f=a("2TvXO"),l=a("8nrFW");var Oe=new WeakMap,Ne=new WeakMap,Ae=new WeakMap,Re=new WeakMap,Ce=new WeakMap;var Le={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ne.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ae.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Pe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Se||(Se=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(je(this),n),Me(Oe.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Me(e.apply(je(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=e).call.apply(o,[je(this),n].concat(t(l)(i)));return Ae.set(s,n.sort?n.sort():[n]),Me(s)}}function De(e){return"function"==typeof e?Pe(e):(e instanceof IDBTransaction&&function(e){if(!Ne.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ne.set(e,t)}}(e),t=e,(Te||(Te=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Le):e);var t}function Me(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Me(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Oe.set(e,t)})).catch((function(){})),Ce.set(n,t),n;var t,n;if(Re.has(e))return Re.get(e);var r=De(e);return r!==e&&(Re.set(e,r),Ce.set(r,e)),r}var je=function(e){return Ce.get(e)};function Ue(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Me(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Me(s.result),e.oldVersion,e.newVersion,Me(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var Fe=["get","getKey","getAll","getAllKeys","count"],We=["put","add","delete","clear"],ze=new Map;function Be(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(ze.get(n))return ze.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,a=We.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(a||Fe.includes(r))){var s,u=(s=t(o)(t(f).mark((function e(n){var o,s,u,c,d,p,h=arguments;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=h.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=h[u];return d=this.transaction(n,a?"readwrite":"readonly"),p=d.store,i&&(p=p.index(s.shift())),e.next=7,Promise.all([(c=p)[r].apply(c,t(l)(s)),a&&d.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)});return ze.set(n,u),u}}}Le=function(e){return t(_e)({},e,{get:function(t,n,r){return Be(t,n)||e.get(t,n,r)},has:function(t,n){return!!Be(t,n)||e.has(t,n)}})}(Le);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var He=function(){"use strict";function e(n){t(s)(this,e),this.container=n}return t(u)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var Ve,qe,Je="@firebase/app",Ge="0.9.4",Ke=new xe("@firebase/app"),Ye="[DEFAULT]",Xe=(Ve={},t(c)(Ve,Je,"fire-core"),t(c)(Ve,"@firebase/app-compat","fire-core-compat"),t(c)(Ve,"@firebase/analytics","fire-analytics"),t(c)(Ve,"@firebase/analytics-compat","fire-analytics-compat"),t(c)(Ve,"@firebase/app-check","fire-app-check"),t(c)(Ve,"@firebase/app-check-compat","fire-app-check-compat"),t(c)(Ve,"@firebase/auth","fire-auth"),t(c)(Ve,"@firebase/auth-compat","fire-auth-compat"),t(c)(Ve,"@firebase/database","fire-rtdb"),t(c)(Ve,"@firebase/database-compat","fire-rtdb-compat"),t(c)(Ve,"@firebase/functions","fire-fn"),t(c)(Ve,"@firebase/functions-compat","fire-fn-compat"),t(c)(Ve,"@firebase/installations","fire-iid"),t(c)(Ve,"@firebase/installations-compat","fire-iid-compat"),t(c)(Ve,"@firebase/messaging","fire-fcm"),t(c)(Ve,"@firebase/messaging-compat","fire-fcm-compat"),t(c)(Ve,"@firebase/performance","fire-perf"),t(c)(Ve,"@firebase/performance-compat","fire-perf-compat"),t(c)(Ve,"@firebase/remote-config","fire-rc"),t(c)(Ve,"@firebase/remote-config-compat","fire-rc-compat"),t(c)(Ve,"@firebase/storage","fire-gcs"),t(c)(Ve,"@firebase/storage-compat","fire-gcs-compat"),t(c)(Ve,"@firebase/firestore","fire-fst"),t(c)(Ve,"@firebase/firestore-compat","fire-fst-compat"),t(c)(Ve,"fire-js","fire-js"),t(c)(Ve,"firebase","fire-js-all"),Ve),Qe=new Map,$e=new Map;function Ze(e,t){try{e.container.addComponent(t)}catch(n){Ke.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function et(e){var t=e.name;if($e.has(t))return Ke.debug("There were multiple attempts to register component ".concat(t,".")),!1;$e.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=Qe.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){Ze(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function tt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var nt=(qe={},t(c)(qe,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(c)(qe,"bad-app-name","Illegal App name: '{$appName}"),t(c)(qe,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(c)(qe,"app-deleted","Firebase App named '{$appName}' already deleted"),t(c)(qe,"no-options","Need to provide options, when not being deployed to hosting via source."),t(c)(qe,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(c)(qe,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(c)(qe,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(c)(qe,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(c)(qe,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(c)(qe,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),qe),rt=new $("app","Firebase",nt),it=function(){"use strict";function e(n,r,i){var a=this;t(s)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new le("app",(function(){return a}),"PUBLIC"))}return t(u)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw rt.create("app-deleted",{appName:this._name})}}]),e}(),at="9.17.2";function ot(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:Ye,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw rt.create("bad-app-name",{appName:String(a)});if(n||(n=J()),!n)throw rt.create("no-options");var o=Qe.get(a);if(o){if(ne(n,o.options)&&ne(i,o.config))return o;throw rt.create("duplicate-app",{appName:a})}var s=new ve(a),u=!0,c=!1,l=void 0;try{for(var f,d=$e.values()[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=f.value;s.addComponent(p)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var h=new it(n,i,s);return Qe.set(a,h),h}function st(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=Qe.get(e);if(!t&&e===Ye)return ot();if(!t)throw rt.create("no-app",{appName:e});return t}function ut(e,t,n){var r,i=null!==(r=Xe[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Ke.warn(s.join(" "))}et(new le("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ct="firebase-heartbeat-store",lt=null;function ft(){return lt||(lt=Ue("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(ct)}}).catch((function(e){throw rt.create("idb-open",{originalErrorMessage:e.message})}))),lt}function dt(e){return pt.apply(this,arguments)}function pt(){return(pt=t(o)(t(f).mark((function e(n){var r,i;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ft();case 3:return r=e.sent,e.abrupt("return",r.transaction(ct).objectStore(ct).get(mt(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof Q?Ke.warn(e.t0.message):(i=rt.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Ke.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ht(e,t){return vt.apply(this,arguments)}function vt(){return(vt=t(o)(t(f).mark((function e(n,r){var i,a,o,s;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ft();case 3:return i=e.sent,a=i.transaction(ct,"readwrite"),o=a.objectStore(ct),e.next=8,o.put(r,mt(n));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof Q?Ke.warn(e.t0.message):(s=rt.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Ke.warn(s.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function mt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new wt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(u)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r,i,a;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=gt(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r,i,a,o,s;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=gt(),i=bt(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=z(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function gt(){return(new Date).toISOString().substring(0,10)}function bt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),xt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),xt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var kt,wt=function(){"use strict";function e(n){t(s)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(u)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(o)(t(f).mark((function e(){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(X()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,dt(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i,a;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return a=t.sent,t.abrupt("return",ht(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i,a;return t(f).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",ht(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t(l)(a.heartbeats).concat(t(l)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function xt(e){return z(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt="",et(new le("platform-logger",(function(e){return new He(e)}),"PRIVATE")),et(new le("heartbeat",(function(e){return new yt(e)}),"PRIVATE")),ut(Je,Ge,kt),ut(Je,Ge,"esm2017"),ut("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ut("firebase","9.17.2","app");p=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD");var _t={};Object.defineProperty(_t,"__esModule",{value:!0}),_t.default=function(e,t,n){return Et(e,t,n)};var It=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function Et(e,t,n){return(Et="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=It.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var Tt=a("fVNic");h=a("eYQtU"),d=a("1t1Wn"),l=a("8nrFW"),E=a("2MbLg"),f=a("2TvXO");function St(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Ot(){return t(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Nt=Ot,At=new $("auth","Firebase",Ot()),Rt=new xe("@firebase/auth");function Ct(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;Rt.logLevel<=pe.ERROR&&(a=Rt).error.apply(a,["Auth (".concat(at,"): ").concat(e)].concat(t(l)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Mt.apply(void 0,[e].concat(t(l)(r)))}function Pt(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Mt.apply(void 0,[e].concat(t(l)(r)))}function Dt(e,n,r){var i=Object.assign(Object.assign({},Nt()),t(c)({},n,r));return new $("auth","Firebase",i).create(n,{appName:e.name})}function Mt(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=t(l)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(t(l)(u)))}return(a=At).create.apply(a,[e].concat(t(l)(r)))}function jt(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw Mt.apply(void 0,[n].concat(t(l)(i)))}function Ut(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Ct(t),new Error(t)}function Ft(e,t){e||Ut(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt=new Map;function zt(e){Ft(e instanceof Function,"Expected a class definition");var t=Wt.get(e);return t?(Ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wt.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e,t){var n=tt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(ne(n.getOptions(),null!=t?t:{}))return r;Lt(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ht(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Vt(){return"http:"===qt()||"https:"===qt()}function qt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Vt()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gt=function(){"use strict";function e(n,r){t(s)(this,e),this.shortDelay=n,this.longDelay=r,Ft(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())||"object"==typeof navigator&&"ReactNative"===navigator.product}return t(u)(e,[{key:"get",value:function(){return Jt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){Ft(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt,Xt=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),Qt=(Yt={},t(c)(Yt,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(c)(Yt,"MISSING_CUSTOM_TOKEN","internal-error"),t(c)(Yt,"INVALID_IDENTIFIER","invalid-email"),t(c)(Yt,"MISSING_CONTINUE_URI","internal-error"),t(c)(Yt,"INVALID_PASSWORD","wrong-password"),t(c)(Yt,"MISSING_PASSWORD","internal-error"),t(c)(Yt,"EMAIL_EXISTS","email-already-in-use"),t(c)(Yt,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(c)(Yt,"INVALID_IDP_RESPONSE","invalid-credential"),t(c)(Yt,"INVALID_PENDING_TOKEN","invalid-credential"),t(c)(Yt,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(c)(Yt,"MISSING_REQ_TYPE","internal-error"),t(c)(Yt,"EMAIL_NOT_FOUND","user-not-found"),t(c)(Yt,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(c)(Yt,"EXPIRED_OOB_CODE","expired-action-code"),t(c)(Yt,"INVALID_OOB_CODE","invalid-action-code"),t(c)(Yt,"MISSING_OOB_CODE","internal-error"),t(c)(Yt,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(c)(Yt,"INVALID_ID_TOKEN","invalid-user-token"),t(c)(Yt,"TOKEN_EXPIRED","user-token-expired"),t(c)(Yt,"USER_NOT_FOUND","user-token-expired"),t(c)(Yt,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(c)(Yt,"INVALID_CODE","invalid-verification-code"),t(c)(Yt,"INVALID_SESSION_INFO","invalid-verification-id"),t(c)(Yt,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(c)(Yt,"MISSING_SESSION_INFO","missing-verification-id"),t(c)(Yt,"SESSION_EXPIRED","code-expired"),t(c)(Yt,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(c)(Yt,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(c)(Yt,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(c)(Yt,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(c)(Yt,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(c)(Yt,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(c)(Yt,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(c)(Yt,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(c)(Yt,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(c)(Yt,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(c)(Yt,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Yt),$t=new Gt(3e4,6e4);function Zt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function en(e,t,n,r){return tn.apply(this,arguments)}function tn(){return tn=t(o)(t(f).mark((function e(n,r,i,a){var s,u=arguments;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",nn(n,s,t(o)(t(f).mark((function e(){var o,s,u,c;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=ie(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Xt.fetch()(sn(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),tn.apply(this,arguments)}function nn(e,t,n){return rn.apply(this,arguments)}function rn(){return(rn=t(o)(t(f).mark((function e(n,r,i){var a,o,s,u,c,l,p,h,v;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},Qt),r),e.prev=2,o=new un(n),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw cn(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=t(d)(c.split(" : "),2),p=l[0],h=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==p){e.next=23;break}throw cn(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==p){e.next=27;break}throw cn(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==p){e.next=29;break}throw cn(n,"user-disabled",u);case 29:if(v=a[p]||p.toLowerCase().replace(/[_\s]+/g,"-"),!h){e.next=34;break}throw Dt(n,v,h);case 34:Lt(n,v);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof Q)){e.next=41;break}throw e.t0;case 41:Lt(n,"internal-error",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function an(e,t,n,r){return on.apply(this,arguments)}function on(){return on=t(o)(t(f).mark((function e(n,r,i,a){var o,s,u=arguments;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,en(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&Lt(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),on.apply(this,arguments)}function sn(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Kt(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var un=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Pt(n.auth,"network-request-failed"))}),$t.get())}))}return t(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function cn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Pt(e,t,r);return i.customData._tokenResponse=n,i}function ln(e,t){return fn.apply(this,arguments)}function fn(){return(fn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",en(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dn(e,t){return pn.apply(this,arguments)}function pn(){return(pn=t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",en(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return vn=t(o)(t(f).mark((function e(n){var r,i,a,o,s,u,c=arguments;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=ce(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,jt((o=yn(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:hn(mn(o.auth_time)),issuedAtTime:hn(mn(o.iat)),expirationTime:hn(mn(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),vn.apply(this,arguments)}function mn(e){return 1e3*Number(e)}function yn(e){var n=t(d)(e.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return Ct("JWT malformed, contained fewer than 3 sections"),null;try{var o=B(i);return o?JSON.parse(o):(Ct("Failed to decode base64 JWT payload"),null)}catch(e){return Ct("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function gn(e,t){return bn.apply(this,arguments)}function bn(){return bn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n,r){var i=arguments;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Q&&kn(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),bn.apply(this,arguments)}function kn(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wn=function(){"use strict";function e(n){t(s)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(o)(t(f).mark((function e(){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(o)(t(f).mark((function n(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),n,null,[[0,5]])})))()}}]),e}(),xn=function(){"use strict";function e(n,r){t(s)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=hn(this.lastLoginAt),this.creationTime=hn(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(e){return In.apply(this,arguments)}function In(){return(In=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n){var r,i,a,o,s,u,c,l,d,p,h;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,gn(n,dn(i,{idToken:a}));case 7:jt(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?Sn(s.providerUserInfo):[],c=Tn(n.providerData,u),l=n.isAnonymous,d=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),p=!!l&&d,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new xn(s.createdAt,s.lastLoginAt),isAnonymous:p},Object.assign(n,h);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function En(){return(En=t(o)(t(f).mark((function e(n){var r;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=ce(n),e.next=3,_n(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Tn(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(l)(r).concat(t(l)(n))}function Sn(e){return e.map((function(e){var t=e.providerId,n=St(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function On(e,t){return Nn.apply(this,arguments)}function Nn(){return(Nn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n,r){var i;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,nn(n,{},t(o)(t(f).mark((function e(){var i,a,o,s,u,c;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ie({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=sn(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Xt.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An=function(){"use strict";function e(){t(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){jt(e.idToken,"internal-error"),jt(void 0!==e.idToken,"internal-error"),jt(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,jt(n=yn(t),"internal-error"),jt(void 0!==n.exp,"internal-error"),jt(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(f).mark((function i(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(jt(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(o)(t(f).mark((function i(){var a,o,s,u;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,On(e,n);case 2:a=t.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return Ut("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(jt("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(jt("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(jt("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e,t){jt("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Cn=function(){"use strict";function e(n){t(s)(this,e);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=St(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?t(l)(o.providerData):[],this.metadata=new xn(o.createdAt||void 0,o.lastLoginAt||void 0)}return t(u)(e,[{key:"getIdToken",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,gn(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(jt(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return vn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return En.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(jt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){jt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(f).mark((function i(){var a;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!n){t.next=5;break}return t.next=5,_n(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,gn(e,ln(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,p=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,b=n.uid,k=n.emailVerified,w=n.isAnonymous,x=n.providerData,_=n.stsTokenManager;jt(b&&_,t,"internal-error");var I=An.fromJSON(this.name,_);jt("string"==typeof b,t,"internal-error"),Rn(f,t.name),Rn(d,t.name),jt("boolean"==typeof k,t,"internal-error"),jt("boolean"==typeof w,t,"internal-error"),Rn(p,t.name),Rn(h,t.name),Rn(v,t.name),Rn(m,t.name),Rn(y,t.name),Rn(g,t.name);var E=new e({uid:b,auth:t,email:d,emailVerified:k,displayName:f,isAnonymous:w,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:y,lastLoginAt:g});return x&&Array.isArray(x)&&(E.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(o)(t(f).mark((function a(){var o,s;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new An).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),t.next=5,_n(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),a)})))()}}]),e}(),Ln=function(){"use strict";function e(){t(s)(this,e),this.type="NONE",this.storage={}}return t(u)(e,[{key:"_isAvailable",value:function(){return t(o)(t(f).mark((function e(){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(o)(t(f).mark((function i(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(o)(t(f).mark((function r(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.type="NONE";var Pn=Ln;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Mn=function(){"use strict";function e(n,r,i){t(s)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Dn(this.userKey,o.apiKey,u),this.fullPersistenceKey=Dn("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?Cn._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(o)(t(f).mark((function a(){var s,u,c,l,d,p,h,v,m,y,g,b,k;return t(f).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(zt(Pn),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=t(o)(t(f).mark((function e(n){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||zt(Pn),c=Dn(i,n.config.apiKey,n.name),l=null,d=!0,p=!1,h=void 0,a.prev=9,v=r[Symbol.iterator]();case 11:if(d=(m=v.next()).done){a.next=29;break}return y=m.value,a.prev=13,a.next=16,y._get(c);case 16:if(!(g=a.sent)){a.next=22;break}return b=Cn._fromJSON(n,g),y!==u&&(l=b),u=y,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:d=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),p=!0,h=a.t1;case 35:a.prev=35,a.prev=36,d||null==v.return||v.return();case 38:if(a.prev=38,!p){a.next=41;break}throw h;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new e(u,n,i));case 46:if(u=k[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=t(o)(t(f).mark((function e(n){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Un(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hn(t))return"Blackberry";if(Vn(t))return"Webos";if(Fn(t))return"Safari";if((t.includes("chrome/")||Wn(t))&&!t.includes("edge/"))return"Chrome";if(Bn(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Un(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y();return/firefox\//i.test(e)}function Fn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y();return/crios\//i.test(e)}function zn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y();return/iemobile/i.test(e)}function Bn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y();return/android/i.test(e)}function Hn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y();return/blackberry/i.test(e)}function Vn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y();return/webos/i.test(e)}function qn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Jn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y();return qn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Gn(){return((e=Y()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Kn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y();return qn(e)||Bn(e)||Vn(e)||Hn(e)||/windows phone/i.test(e)||zn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yn(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=jn(Y());break;case"Worker":t="".concat(jn(Y()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(at,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.queue=[]}return t(u)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i,a,o,s,u,c,l,d,p,h,v,m,y;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=2;break}return t.abrupt("return");case 2:i=[],t.prev=3,a=!0,o=!1,s=void 0,t.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){t.next=15;break}return l=c.value,t.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),o=!0,s=t.t0;case 21:t.prev=21,t.prev=22,a||null==u.return||u.return();case 24:if(t.prev=24,!o){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=52;break;case 31:for(t.prev=31,t.t1=t.catch(3),i.reverse(),d=!0,p=!1,h=void 0,t.prev=35,v=i[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){y=m.value;try{y()}catch(e){}}t.next=43;break;case 39:t.prev=39,t.t2=t.catch(35),p=!0,h=t.t2;case 43:t.prev=43,t.prev=44,d||null==v.return||v.return();case 46:if(t.prev=46,!p){t.next=49;break}throw h;case 49:return t.finish(46);case 50:return t.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===t.t1||void 0===t.t1?void 0:t.t1.message});case 52:case"end":return t.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),Qn=function(){"use strict";function e(n,r,i){t(s)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zn(this),this.idTokenSubscription=new Zn(this),this.beforeStateQueue=new Xn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=At,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return t(u)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=zt(n));var r=this;return this._initializationPromise=this.queue(t(o)(t(f).mark((function i(){var a,o;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Mn.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i,a,o,s,u,c,l;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=t.sent,o=a,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:l=t.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(o);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!o){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return jt(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(o));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(o)(t(f).mark((function r(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_n(e);case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)){t.next=9;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 9:return t.abrupt("return",n.directlySetCurrentUser(e));case 10:case"end":return t.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(o)(t(f).mark((function n(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?ce(e):null)&&jt(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(f).mark((function i(){return t(f).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&jt(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(o)(t(f).mark((function n(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(o)(t(f).mark((function n(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(o)(t(f).mark((function r(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(zt(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new $("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(o)(t(f).mark((function i(){var a;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=t.sent,t.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return jt(i=e&&zt(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,Mn.create(n,[zt(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i,a;return t(f).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(o)(t(f).mark((function e(){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(o)(t(f).mark((function r(){return t(f).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(o)(t(f).mark((function r(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return jt(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(o)(t(f).mark((function r(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh(),n.currentUser=e,!e){t.next=8;break}return t.next=6,n.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return jt(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yn(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r,i,a;return t(f).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e){return ce(e)}var Zn=function(){"use strict";function e(n){var r,i,a=this;t(s)(this,e),this.auth=n,this.observer=null,this.addObserver=(i=new se((function(e){return a.observer=e}),r)).subscribe.bind(i)}return t(u)(e,[{key:"next",get:function(){return jt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function er(e,n,r){var i=$n(e);jt(i._canInitEmulator,i,"emulator-config-failed"),jt(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=tr(n),s=function(e){var n=tr(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:nr(i.substr(o.length+1))}}var s=t(d)(i.split(":"),2);return{host:s[0],port:nr(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function tr(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function nr(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var rr=function(){"use strict";function e(n,r){t(s)(this,e),this.providerId=n,this.signInMethod=r}return t(u)(e,[{key:"toJSON",value:function(){return Ut("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Ut("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Ut("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Ut("not implemented")}}]),e}();function ir(e,t){return ar.apply(this,arguments)}function ar(){return(ar=t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",en(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function or(e,t){return sr.apply(this,arguments)}function sr(){return(sr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:signInWithPassword",Zt(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ur(e,t){return cr.apply(this,arguments)}function cr(){return(cr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function lr(e,t){return fr.apply(this,arguments)}function fr(){return(fr=t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dr=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(e,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(s)(this,r),(o=n.call(this,"password",a))._email=e,o._password=i,o._tenantId=u,o}return t(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(o)(t(f).mark((function r(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",or(e,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",ur(e,{email:n._email,oobCode:n._password}));case 5:Lt(e,"internal-error");case 6:case"end":return t.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(o)(t(f).mark((function i(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",ir(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",lr(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:Lt(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(rr);function pr(e,t){return hr.apply(this,arguments)}function hr(){return(hr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:signInWithIdp",Zt(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vr=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return pr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,pr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,pr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ie(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lt("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=St(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(rr);function mr(e,t){return yr.apply(this,arguments)}function yr(){return(yr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",en(n,"POST","/v1/accounts:sendVerificationCode",Zt(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function gr(){return(gr=t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:signInWithPhoneNumber",Zt(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function br(){return(br=t(o)(t(f).mark((function e(n,r){var i;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,an(n,"POST","/v1/accounts:signInWithPhoneNumber",Zt(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw cn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var kr=t(c)({},"USER_NOT_FOUND","user-not-found");function wr(){return(wr=t(o)(t(f).mark((function e(n,r){var i;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",an(n,"POST","/v1/accounts:signInWithPhoneNumber",Zt(n,i),kr));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return gr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return br.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return wr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(rr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _r=function(){"use strict";function e(n){var r,i,a,o,u,c;t(s)(this,e);var l=ae(oe(n)),f=null!==(r=l.apiKey)&&void 0!==r?r:null,d=null!==(i=l.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);jt(f&&d&&p,"argument-error"),this.apiKey=f,this.operation=p,this.code=d,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return t(u)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=ae(oe(e)).link,n=t?ae(oe(t)).deep_link_id:null,r=ae(oe(e)).deep_link_id;return(r?ae(oe(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ir=function(){"use strict";function e(){t(s)(this,e),this.providerId=e.PROVIDER_ID}return t(u)(e,null,[{key:"credential",value:function(e,t){return dr._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=_r.parseLink(t);return jt(n,"argument-error"),dr._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();Ir.PROVIDER_ID="password",Ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Er=function(){"use strict";function e(n){t(s)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),Tr=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(l)(this.scopes)}}]),r}(Er),Sr=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(){return t(s)(this,r),n.call(this,"facebook.com")}return t(u)(r,null,[{key:"credential",value:function(e){return vr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Tr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com",Sr.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Or=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(){var e;return t(s)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(u)(r,null,[{key:"credential",value:function(e,t){return vr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Tr);Or.GOOGLE_SIGN_IN_METHOD="google.com",Or.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nr=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(){return t(s)(this,r),n.call(this,"github.com")}return t(u)(r,null,[{key:"credential",value:function(e){return vr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Tr);Nr.GITHUB_SIGN_IN_METHOD="github.com",Nr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ar=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(){return t(s)(this,r),n.call(this,"twitter.com")}return t(u)(r,null,[{key:"credential",value:function(e,t){return vr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Tr);function Rr(e,t){return Cr.apply(this,arguments)}function Cr(){return(Cr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:signUp",Zt(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ar.TWITTER_SIGN_IN_METHOD="twitter.com",Ar.PROVIDER_ID="twitter.com";var Lr=function(){"use strict";function e(n){t(s)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(u)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(o)(t(f).mark((function o(){var s,u,c;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Cn._fromIdTokenResponse(n,i,a);case 2:return s=t.sent,u=Pr(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),t.abrupt("return",c);case 6:case"end":return t.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return t(o)(t(f).mark((function a(){var o;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Pr(i),t.abrupt("return",new e({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),a)})))()}}]),e}();function Pr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dr=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(e,i,a,o){var u,c;return t(s)(this,r),(u=n.call(this,i.code,i.message)).operationType=a,u.user=o,Object.setPrototypeOf(t(p)(u),r.prototype),u.customData={appName:e.name,tenantId:null!==(c=e.tenantId)&&void 0!==c?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a},u}return t(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(Q);function Mr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Dr._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,t){return Ur.apply(this,arguments)}function Ur(){return Ur=t(o)(t(f).mark((function e(n,r){var i,a,o=arguments;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=gn,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Lr._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),e)}))),Ur.apply(this,arguments)}function Fr(e,t){return Wr.apply(this,arguments)}function Wr(){return Wr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n,r){var i,a,o,s,u,c,l=arguments;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,gn(n,Mr(a,o,r,n),i);case 6:return jt((s=e.sent).idToken,a,"internal-error"),jt(u=yn(s.idToken),a,"internal-error"),c=u.sub,jt(n.uid===c,a,"user-mismatch"),e.abrupt("return",Lr._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Lt(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),Wr.apply(this,arguments)}function zr(e,t){return Br.apply(this,arguments)}function Br(){return Br=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n,r){var i,a,o,s,u=arguments;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,Mr(n,a,r);case 4:return o=e.sent,e.next=7,Lr._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Br.apply(this,arguments)}function Hr(e,t){return Vr.apply(this,arguments)}function Vr(){return(Vr=t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",zr($n(n),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qr(e,t,n){return Jr.apply(this,arguments)}function Jr(){return(Jr=t(o)(t(f).mark((function e(n,r,i){var a,o,s;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=$n(n),e.next=3,Rr(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,Lr._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Gr(e,t,n){return Hr(ce(e),Ir.credential(t,n))}function Kr(e,t,n,r){return ce(e).onIdTokenChanged(t,n,r)}function Yr(e,t,n){return ce(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(e,t){return en(e,"POST","/v2/accounts/mfaEnrollment:start",Zt(e,t))}new WeakMap;var Qr="__sak",$r=function(){"use strict";function e(n,r){t(s)(this,e),this.storageRetriever=n,this.type=r}return t(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Qr,"1"),this.storage.removeItem(Qr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zr=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(){var e,i;return t(s)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Fn(i=Y())||qn(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Kn(),e._shouldAllowMigration=!0,e}return t(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Gn()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,a=this;return t(o)(t(f).mark((function o(){return t(f).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(_t)(t(Tt)(r.prototype),"_set",i).call(a,e,n);case 2:a.localCache[e]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(o)(t(f).mark((function a(){var o;return t(f).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(_t)(t(Tt)(r.prototype),"_get",n).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(o)(t(f).mark((function a(){return t(f).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(_t)(t(Tt)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}($r);Zr.type="LOCAL";var ei=Zr,ti=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(){return t(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}($r);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ti.type="SESSION";var ni=ti;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){return Promise.all(e.map((n=t(o)(t(f).mark((function e(n){var r;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ii=function(){"use strict";function e(n){t(s)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i,a,s,u,c,l,d,p;return t(f).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=n.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),d=Array.from(l).map(function(){var e=t(o)(t(f).mark((function e(n){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,ri(d);case 9:p=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:p});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ai(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.receivers=[];var oi=function(){"use strict";function e(n){t(s)(this,e),this.target=n,this.handlers=new Set}return t(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(o)(t(f).mark((function a(){var o,s,u;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,a){var c=ai("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(e){var n=e;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ui(){return void 0!==si().WorkerGlobalScope&&"function"==typeof si().importScripts}function ci(){return li.apply(this,arguments)}function li(){return(li=t(o)(t(f).mark((function e(){var n;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fi="firebaseLocalStorageDb",di="firebaseLocalStorage",pi="fbase_key",hi=function(){"use strict";function e(n){t(s)(this,e),this.request=n}return t(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function vi(e,t){return e.transaction([di],t?"readwrite":"readonly").objectStore(di)}function mi(){var e=indexedDB.deleteDatabase(fi);return new hi(e).toPromise()}function yi(){var e=indexedDB.open(fi,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(di,{keyPath:pi})}catch(e){r(e)}})),e.addEventListener("success",t(o)(t(f).mark((function r(){var i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(di)){t.next=12;break}return i.close(),t.next=5,mi();case 5:return t.t0=n,t.next=8,yi();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function gi(e,t,n){return bi.apply(this,arguments)}function bi(){return(bi=t(o)(t(f).mark((function e(n,r,i){var a,o;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=vi(n,!0).put((a={},t(c)(a,pi,r),t(c)(a,"value",i),a)),e.abrupt("return",new hi(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ki(e,t){return wi.apply(this,arguments)}function wi(){return(wi=t(o)(t(f).mark((function e(n,r){var i,a;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=vi(n,!1).get(r),e.next=3,new hi(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xi(e,t){var n=vi(e,!0).delete(t);return new hi(n).toPromise()}var _i=function(){"use strict";function e(){t(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(u)(e,[{key:"_openDb",value:function(){var e=this;return t(o)(t(f).mark((function n(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,yi();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i,a;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return a=t.sent,t.next=8,e(a);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(o)(t(f).mark((function n(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",ui()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(o)(t(f).mark((function n(){return t(f).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=ii._getInstance(ui()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(o)(t(f).mark((function n(r,i){var a;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(o)(t(f).mark((function e(n,r){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r,i,a;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,ci();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new oi(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(o)(t(f).mark((function r(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(o)(t(f).mark((function e(){var n;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,yi();case 5:return n=e.sent,e.next=8,gi(n,Qr,"1");case 8:return e.next=10,xi(n,Qr);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(o)(t(f).mark((function r(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(o)(t(f).mark((function i(){return t(f).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(o)(t(f).mark((function i(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return gi(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return ki(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(o)(t(f).mark((function r(){return t(f).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(o)(t(f).mark((function r(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return xi(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r,i,a,o,s,u,c,l,d,p,h,v,m,y,g,b,k;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=vi(e,!1).getAll();return new hi(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)d=l.value,p=d.fbase_key,h=d.value,a.add(p),JSON.stringify(e.localCache[p])!==JSON.stringify(h)&&(e.notifyListeners(p,h),i.push(p));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,m=!1,y=void 0,t.prev=27,g=Object.keys(e.localCache)[Symbol.iterator]();!(v=(b=g.next()).done);v=!0)k=b.value,e.localCache[k]&&!a.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),m=!0,y=t.t1;case 35:t.prev=35,t.prev=36,v||null==g.return||g.return();case 38:if(t.prev=38,!m){t.next=41;break}throw y;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(o)(t(f).mark((function n(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();_i.type="LOCAL";var Ii=_i;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e,t){return en(e,"POST","/v2/accounts/mfaSignIn:start",Zt(e,t))}function Ti(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Pt("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Si(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Si("rcb"),new Gt(3e4,6e4);var Oi="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e,t,n){return Ai.apply(this,arguments)}function Ai(){return(Ai=t(o)(t(f).mark((function e(n,r,i){var a,o,s,u,c,l,d,p;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,jt("string"==typeof o,n,"argument-error"),jt(i.type===Oi,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return jt("enroll"===u.type,n,"internal-error"),e.next=15,Xr(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return jt("signin"===u.type,n,"internal-error"),jt(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Ei(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,mr(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ri=function(){"use strict";function e(n){t(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=$n(n)}return t(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Ni(this.auth,e,ce(t))}}],[{key:"credential",value:function(e,t){return xr._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?xr._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ci(e,t){return t?zt(t):(jt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ri.PROVIDER_ID="phone",Ri.PHONE_SIGN_IN_METHOD="phone";var Li=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return pr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return pr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return pr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(rr);function Pi(e){return zr(e.auth,new Li(e),e.bypassAuthState)}function Di(e){var t=e.auth,n=e.user;return jt(n,t,"internal-error"),Fr(n,new Li(e),e.bypassAuthState)}function Mi(e){return ji.apply(this,arguments)}function ji(){return(ji=t(o)(t(f).mark((function e(n){var r,i;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,jt(i=n.user,r,"internal-error"),e.abrupt("return",jr(i,new Li(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui=function(){"use strict";function e(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(s)(this,e),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(u)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(o)(t(f).mark((function e(r,i){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i,a,o,s,u,c,l;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){t.next=4;break}return n.reject(u),t.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(c)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pi;case"linkViaPopup":case"linkViaRedirect":return Mi;case"reauthViaPopup":case"reauthViaRedirect":return Di;default:Lt(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Fi=new Gt(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wi=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(e,i,a,o,u){var c;return t(s)(this,r),(c=n.call(this,e,i,o,u)).provider=a,c.authWindow=null,c.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(p)(c),c}return t(u)(r,[{key:"executeNotNull",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return jt(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(o)(t(f).mark((function n(){var r;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Ft(1===e.filter.length,"Popup operations only handle one event"),r=ai(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(Pt(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Pt(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Pt(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Fi.get())};t()}}]),r}(Ui);Wi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zi=new Map,Bi=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(this,r),(a=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return t(u)(r,[{key:"execute",value:function(){var e=this,n=this;return t(o)(t(f).mark((function i(){var a,o;return t(f).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=zi.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Hi(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(_t)(t(Tt)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:zi.set(n.auth._key(),a);case 21:return n.bypassAuthState||zi.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,a=function(){return t(_t)(t(Tt)(r.prototype),"onAuthEvent",n)};return t(o)(t(f).mark((function n(){var r;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(o)(t(f).mark((function e(){return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(Ui);function Hi(e,t){return Vi.apply(this,arguments)}function Vi(){return(Vi=t(o)(t(f).mark((function e(n,r){var i,a,o;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Gi(r),a=Ji(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qi(e,t){zi.set(e._key(),t)}function Ji(e){return zt(e._redirectPersistence)}function Gi(e){return Dn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e,t){return Yi.apply(this,arguments)}function Yi(){return Yi=t(o)(t(f).mark((function e(n,r){var i,a,o,s,u,c=arguments;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=$n(n),o=Ci(a,r),s=new Bi(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),Yi.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xi=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $i(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!$i(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Pt(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qi(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Qi(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Qi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function $i(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Zi(e){return ea.apply(this,arguments)}function ea(){return ea=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(f).mark((function e(n){var r,i=arguments;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",en(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),ea.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ta=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,na=/^https?/;function ra(){return(ra=t(o)(t(f).mark((function e(n){var r,i,a,o,s,u,c;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Zi(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!ia(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Lt(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function ia(e){var t=Ht(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!na.test(r))return!1;if(ta.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var aa=new Gt(3e4,6e4);function oa(){var e=si().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(l)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var sa=null;function ua(e){return sa=sa||function(e){return new Promise((function(t,n){var r,i,a;function o(){oa(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){oa(),n(Pt(e,"network-request-failed"))},timeout:aa.get()})}if(null===(i=null===(r=si().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=si().gapi)||void 0===a?void 0:a.load)){var s=Si("iframefcb");return si()[s]=function(){gapi.load?o():n(Pt(e,"network-request-failed"))},Ti("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw sa=null,e}))}(e),sa}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ca=new Gt(5e3,15e3),la={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function da(e){var t=e.config;jt(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Kt(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:at},i=fa.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(ie(r).slice(1))}function pa(e){return ha.apply(this,arguments)}function ha(){return ha=t(o)(t(f).mark((function e(n){var r,i;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ua(n);case 2:return r=e.sent,jt(i=si().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:da(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:la,dontclear:!0},(function(e){return new Promise((r=t(o)(t(f).mark((function r(i,a){var o,s,u;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){si().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:o=Pt(n,"network-request-failed"),s=si().setTimeout((function(){a(o)}),ca.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),ha.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var va={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ma="_blank",ya="http://localhost",ga=function(){"use strict";function e(n){t(s)(this,e),this.window=n,this.associatedEvent=null}return t(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function ba(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},va),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Y().toLowerCase();r&&(u=Wn(l)?ma:r),Un(l)&&(n=n||ya,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,n){var r=t(d)(n,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Jn(l)&&"_self"!==u)return ka(n||"",u),new ga(null);var p=window.open(n||"",u,f);jt(p,e,"popup-blocked");try{p.focus()}catch(e){}return new ga(p)}function ka(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wa="__/auth/handler",xa="emulator/auth/handler";function _a(e,n,r,i,a,o){jt(e.config.authDomain,e,"auth-domain-config-required"),jt(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:at,eventId:a};if(n instanceof Er){n.setDefaultLanguage(e.languageCode),s.providerId=n.providerId||"",te(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,p=Object.entries(o||{})[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var h=t(d)(f.value,2),v=h[0],m=h[1];s[v]=m}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}}if(n instanceof Tr){var y=n.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}e.tenantId&&(s.tid=e.tenantId);var g,b,k=s,w=!0,x=!1,_=void 0;try{for(var I,E=Object.keys(k)[Symbol.iterator]();!(w=(I=E.next()).done);w=!0){var T=I.value;void 0===k[T]&&delete k[T]}}catch(e){x=!0,_=e}finally{try{w||null==E.return||E.return()}finally{if(x)throw _}}return"".concat((g=e,b=g.config,b.emulator?Kt(b,xa):"https://".concat(b.authDomain,"/").concat(wa)),"?").concat(ie(k).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ia="webStorageSupport",Ea=function(){"use strict";function e(){t(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ni,this._completeRedirectFn=Ki,this._overrideRedirectResult=qi}return t(u)(e,[{key:"_openPopup",value:function(e,n,r,i){var a=this;return t(o)(t(f).mark((function o(){var s,u;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Ft(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=_a(e,n,r,Ht(),i),t.abrupt("return",ba(e,u,ai()));case 4:case"end":return t.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var a=this;return t(o)(t(f).mark((function o(){return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._originValidation(e);case 2:return o=_a(e,n,r,Ht(),i),si().location.href=o,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(Ft(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i,a;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pa(e);case 2:return i=t.sent,a=new Xi(e),i.register("authEvent",(function(t){return jt(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:a},n.iframes[e._key()]=i,t.abrupt("return",a);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Ia,{type:Ia},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Lt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return ra.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Kn()||Fn()||qn()}}]),e}(),Ta=Ea,Sa=function(e){"use strict";t(h)(r,e);var n=t(E)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return en(e,"POST","/v2/accounts/mfaEnrollment:finalize",Zt(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return en(e,"POST","/v2/accounts/mfaSignIn:finalize",Zt(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(n){t(s)(this,e),this.factorId=n}return t(u)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ut("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertion",value:function(e){return Sa._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var Oa="@firebase/auth",Na="0.21.4",Aa=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.internalListeners=new Map}return t(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(o)(t(f).mark((function r(){var i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){jt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ra,Ca=G("authIdTokenMaxAge")||300,La=null,Pa=function(e){return n=t(o)(t(f).mark((function n(r){var i,a,o;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Ca)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,La!==o){t.next=12;break}return t.abrupt("return");case 12:return La=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};Ra="Browser",et(new le("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){jt(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),jt(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Ra,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yn(Ra)},i=new Qn(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),et(new le("auth-internal",(function(e){var t=$n(e.getProvider("auth").getImmediate());return new Aa(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ut(Oa,Na,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ra)),ut(Oa,Na,"esm2017");var Da,Ma,ja={};Da=void 0!==n?n:"undefined"!=typeof window?window:ja,Ma=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",a="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,d=function(s,l,d,h){if(!u("body"))return!1;t||p.Notify.init({});var v=c(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof h&&!Array.isArray(h)){var m={};"object"==typeof d?m=d:"object"==typeof h&&(m=h),t=c(!0,t,m)}var y,g,b=t[s.toLocaleLowerCase("en")];f++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(y=l,(g=e.document.createElement("div")).innerHTML=y,l=g.textContent||g.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var k=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(k.id=o.wrapID,k.style.width=t.width,k.style.zIndex=t.zindex,k.style.opacity=t.opacity,"center-center"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.margin="auto",k.classList.add("nx-flex-center-center"),k.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",k.style.display="flex",k.style.flexWrap="wrap",k.style.flexDirection="column",k.style.justifyContent="center",k.style.alignItems="center",k.style.pointerEvents="none"):"center-top"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.top=t.distance,k.style.bottom="auto",k.style.margin="auto"):"center-bottom"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.margin="auto"):"right-bottom"===t.position?(k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.left="auto"):"left-top"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right="auto",k.style.bottom="auto"):"left-bottom"===t.position?(k.style.left=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.right="auto"):(k.style.right=t.distance,k.style.top=t.distance,k.style.left="auto",k.style.bottom="auto"),t.backOverlay){var w=e.document.getElementById(o.overlayID)||e.document.createElement("div");w.id=o.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=t.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=b.backOverlayColor||t.backOverlayColor,w.className=t.cssAnimation?"nx-with-animation":"",w.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(w)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(k);var x=e.document.createElement("div");x.id=t.ID+"-"+f,x.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),x.style.fontSize=t.fontSize,x.style.color=b.textColor,x.style.background=b.background,x.style.borderRadius=t.borderRadius,x.style.pointerEvents="all",t.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(x.style.animationDuration=t.cssAnimationDuration+"ms");var _="";if(t.closeButton&&"function"!=typeof d&&(_='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)x.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"");else{var I="";s===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),x.innerHTML=I+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"")}else x.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?_:"");if("left-bottom"===t.position||"right-bottom"===t.position){var E=e.document.getElementById(o.wrapID);E.insertBefore(x,E.firstChild)}else e.document.getElementById(o.wrapID).appendChild(x);var T=e.document.getElementById(x.id);if(T){var S,O,N=function(){T.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&k.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(S)},A=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),k.childElementCount<=0&&null!==k.parentNode){k.parentNode.removeChild(k);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(O)};if(t.closeButton&&"function"!=typeof d&&e.document.getElementById(x.id).querySelector("span.nx-close-button").addEventListener("click",(function(){N();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof d||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof d&&d(),N();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var R=function(){S=setTimeout((function(){N()}),t.timeout),O=setTimeout((function(){A()}),t.timeout+t.cssAnimationDuration)};R(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(S),clearTimeout(O)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),R()})))}}if(t.showOnlyTheLastOne&&f>0)for(var C=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+f+"])"),L=0;L<C.length;L++){var P=C[L];null!==P.parentNode&&P.parentNode.removeChild(P)}t=c(!0,t,v)},p={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){d(n,e,t,r)},failure:function(e,t,n){d(r,e,t,n)},warning:function(e,t,n){d(i,e,t,n)},info:function(e,t,n){d(a,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return Ma(Da)})):"object"==typeof ja?ja=Ma(Da):Da.Notiflix=Ma(Da);ot({apiKey:"AIzaSyCkFvds2hJc9mUmc-_oFpHYsUcBiyM7opU",authDomain:"my-awesome-project-news.firebaseapp.com",projectId:"my-awesome-project-news",storageBucket:"my-awesome-project-news.appspot.com",messagingSenderId:"220245139302",appId:"1:220245139302:web:1c8b0e871bf6f9c36032a7"});var Ua=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st(),t=tt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=Bt(e,{popupRedirectResolver:Ta,persistence:[Ii,ei,ni]}),r=G("authTokenSyncURL");if(r){var i=Pa(r);Yr(n,i,(function(){return i(n.currentUser)})),Kr(n,(function(e){return i(e)}))}var a=q("auth");return a&&er(n,"http://".concat(a)),n}(),Fa=document.querySelector(".modal-form-sign-in"),Wa=document.querySelector("[data-modal-open]"),za=document.querySelector(".btn-close-sign-in"),Ba=document.querySelector(".btn-open-sign-up"),Ha=document.querySelector(".sign-out"),Va=document.querySelector(".backdrop-sign-in"),qa=document.querySelector(".password-sign-in"),Ja=document.querySelector(".email-sign-in"),Ga=document.querySelector(".sign-in");Fa.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.password.value.trim(),n=e.target.elements.email.value.trim();qr(Ua,n,t).then((function(e){Va.classList.toggle("is-hidden"),Wa.classList.add("is-hidden"),Ba.classList.add("is-hidden"),Ha.classList.toggle("is-hidden"),ja.Notify.success("Welcome,".concat(n))})).catch((function(e){"Firebase: Error (auth/invalid-email)."===e.message&&ja.Notify.failure("Invalid email. Please provide correct email  ")}))})),Fa.addEventListener("input",(function(e){var t=qa.value,n=Ja.value;t.length>=6&&n.includes("@")?Ga.disabled=!1:Ga.disabled=!0})),window.addEventListener("keyup",(function(e){Va.classList.contains("is-hidden")||"Escape"!==e.code||Va.classList.toggle("is-hidden")})),Wa.addEventListener("click",(function(e){e.preventDefault(),Va.classList.toggle("is-hidden"),qa.value="",Ja.value=""})),za.addEventListener("click",(function(e){e.preventDefault(),Va.classList.toggle("is-hidden"),qa.value="",Ja.value="",Ga.disabled=!0}));var Ka=document.querySelector(".sign-out"),Ya=document.querySelector(".btn-open-sign-up"),Xa=document.querySelector(".btn-open-sign-in");Ka.addEventListener("click",(function(e){e.preventDefault(),(t=Ua,ce(t).signOut()).then((function(e){Ya.classList.remove("is-hidden"),Xa.classList.remove("is-hidden"),Ka.classList.add("is-hidden")})).catch((function(e){}));var t}));var Qa=document.querySelector(".modal-form-sign-up"),$a=document.querySelector(".btn-open-sign-up"),Za=document.querySelector(".btn-open-sign-in"),eo=document.querySelector(".sign-out"),to=document.querySelector(".btn-close-sign-up"),no=document.querySelector(".backdrop-sign-up"),ro=document.querySelector(".password-sign-up"),io=document.querySelector(".email-sign-up");document.querySelector(".sign-up");Qa.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.password.value.trim(),n=e.target.elements.email.value.trim();Gr(Ua,n,t).then((function(e){no.classList.toggle("is-hidden"),$a.classList.add("is-hidden"),Za.classList.add("is-hidden"),eo.classList.toggle("is-hidden"),ja.Notify.success("Welcome back, ".concat(n))})).catch((function(e){"Firebase: Error (auth/user-not-found)."===e.message?ja.Notify.failure("User not found"):"Firebase: Error (auth/wrong-password)."===e.message&&ja.Notify.failure("Wrong password. Please provide correct password")}))})),$a.addEventListener("click",(function(e){e.preventDefault(),no.classList.toggle("is-hidden"),ro.value="",io.value=""})),to.addEventListener("click",(function(e){e.preventDefault(),no.classList.toggle("is-hidden"),ro.value="",io.value=""})),window.addEventListener("keyup",(function(e){no.classList.contains("is-hidden")||"Escape"!==e.code||no.classList.toggle("is-hidden")}));var ao=document.querySelector("body"),oo=document.querySelector(".theme-wrapper--light"),so=document.querySelector(".theme-wrapper--dark"),uo=document.querySelectorAll(".checkbox"),co=localStorage.getItem("checked");function lo(e){"true"===e?(ao.classList.add("dark-theme"),oo.classList.remove("switch-on"),so.classList.add("switch-on"),uo.forEach((function(e){return e.classList.add("checkbox-on")}))):(ao.classList.remove("dark-theme"),oo.classList.add("switch-on"),so.classList.remove("switch-on"),uo.forEach((function(e){return e.classList.remove("checkbox-on")})))}lo(co),ao.addEventListener("click",(function(e){(e.target.classList.contains("checkbox")||e.target.classList.contains("checkbox__switcher"))&&(lo(co="true"===co?"false":"true"),localStorage.setItem("checked",co))}));var fo=document.querySelector("[data-menu-btn]"),po=document.querySelector("[data-menu]");fo.addEventListener("click",(function(e){fo.classList.toggle("active"),po.classList.toggle("is-closed")}));var ho=a("cQS3G"),vo=document.querySelector(".search__input");"/index.html"!==window.location.pathname&&(vo.addEventListener("input",ho.makeArrNewsForPageRead),console.log("hi"))}();
//# sourceMappingURL=read.7c11422f.js.map
