function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire12f5;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire12f5=a);var o,i=a("aWGU8");function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";return e<10?t+e:e},u=function(e){return"".concat(e.getFullYear(),"-").concat(l(e.getMonth()+1),"-").concat(l(e.getDate()))},s=function(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()},d=function(e){return new Promise((function(t){var n=[],r=m(e).map((function(e){return{date:e.date,iso:e.iso,type:"previous"}})),a=g(e).map((function(e){return{date:e.date,iso:e.iso,type:"current"}}));n=n.concat(r).concat(a);var o=y(e,n.length).map((function(e){return{date:e.date,iso:e.iso,type:"next"}}));t(n.concat(o))}))},f=function(e){return function(t){return Array(e).fill().map(t)}},g=function(e){var t=s(e);return f(t)((function(t,n){var r=n+1;return e.setDate(r),{date:r,iso:u(e)}}))},m=function(e){var t,n,r=e.getMonth(),a=e.getFullYear(),o=Math.min(r-1,11),i=new Date(a,o),c=s(i),l=c-(t=e,n=new Date(t.getFullYear(),t.getMonth(),1).toDateString().substring(0,3),["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(n))+1;return f(c-l+1)((function(e,t){var n=l+t;return i.setDate(n),{date:n,iso:u(i)}}))},y=function(e,t){var n=42-t,r=e.getMonth()+1===12?0:e.getMonth()+1,a=0===r?e.getFullYear()+1:e.getFullYear(),o=new Date(a,r);return f(n)((function(e,t){var n=t+1;return o.setDate(n),{date:n,iso:u(o)}}))};o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return n=[{key:"getDates",value:function(e){return new Promise((function(t){return t(d(e).then((function(e){return e.map((function(e){return e}))})))}))}},{key:"getMatrix",value:function(e){return new Promise((function(t){t(d(e).then((function(e){return e.reduce((function(e,t,n){return(n%7==0?e.push([t]):e[e.length-1].push(t))&&e}),[])})))}))}}],c((t=e).prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var v,p=a("41I1F"),h=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,w=/^0o[0-7]+$/i,x=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,E="object"==typeof self&&self&&self.Object===Object&&self,_=b||E||Function("return this")(),M=Object.prototype.toString,D=Math.max,C=Math.min,q=function(){return _.Date.now()};function k(e,t,n){var r,a,o,i,c,l,u=0,s=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=a;return r=a=void 0,u=t,i=e.apply(o,n)}function m(e){return u=e,c=setTimeout(v,t),s?g(e):i}function y(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=o}function v(){var e=q();if(y(e))return p(e);c=setTimeout(v,function(e){var n=t-(e-l);return d?C(n,o-(e-u)):n}(e))}function p(e){return c=void 0,f&&r?g(e):(r=a=void 0,i)}function h(){var e=q(),n=y(e);if(r=arguments,a=this,l=e,n){if(void 0===c)return m(l);if(d)return c=setTimeout(v,t),g(l)}return void 0===c&&(c=setTimeout(v,t)),i}return t=T(t)||0,O(n)&&(s=!!n.leading,o=(d="maxWait"in n)?D(T(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=a=c=void 0},h.flush=function(){return void 0===c?i:p(q())},h}function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==M.call(e)}(e))return NaN;if(O(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=O(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var n=L.test(e);return n||w.test(e)?x(e.slice(2),n?2:8):S.test(e)?NaN:+e}v=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return O(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),k(e,t,{leading:r,maxWait:t,trailing:a})};var N=a("buCin"),R=a("90Rt4"),F=a("csXCJ");const $=new(e(o)),j=document.querySelector(".calendar-modal-days"),Y=document.querySelector(".calendar-month"),A=document.querySelector(".calendar-year"),P=document.querySelector(".calendar-date"),I=document.querySelector(".calendar-frame"),J=document.querySelector(".calendar-modal"),G=document.querySelector(".search__input");let W=(new Date).getFullYear(),H=(new Date).getMonth(),B=(new Date).getDate(),K=new Date(W,H),U=`${W}${(H+1).toString().padStart(2,"0")}${B.toString().padStart(2,"0")}`;function z(){Y.textContent=["January","February","March","April","May","June","July","August","September","October","November","December"][H],A.textContent=W,P.textContent=`${B.toString().padStart(2,"0")}/${(H+1).toString().padStart(2,"0")}/${W}`}async function V(){!function(e){let t="";var n;t=((n=e).slice(-7).every((e=>"next"===e.type))?n.slice(0,-7):n).map((({date:e,type:t})=>{let n="calendar-modal-day-item";return"previous"===t?n+=" calendar-modal-day-prev":"next"===t?n+=" calendar-modal-day-next":e===B&&(n+=" calendar-modal-day-curr"),`<li class="${n}">${e}</li>`})).join(""),z(),j.innerHTML=t}(await $.getDates(K))}function X(){P.textContent="Set date",""!==G.value&&(0,p.onSearchMarkup)(G.value,"Set date")}window.dateString=U;let Q=0;function Z(e){if(!I.contains(e.target)&!J.contains(e.target)){I.parentNode.classList.remove("calendar-active"),document.removeEventListener("click",Z),0===Q?(V(),Q=1):1===Q&&(X(),Q=0)}}function ee(e){const t=document.querySelectorAll(".calendar-modal-day-item");for(let n of t)if(n.textContent===`${e}`)return n;return null}function te(e,t,n){B=e,H=t,W=n,K=new Date(W,H,B),U=`${W}${(H+1).toString().padStart(2,"0")}${B.toString().padStart(2,"0")}`,""!==G.value&&(0,p.onSearchMarkup)(G.value,U)}function ne(e,t){++e>11&&(t++,e=0);return new Date(t,e,0).getDate()}I.addEventListener("click",(function(e){e.currentTarget.parentNode.classList.toggle("calendar-active"),document.addEventListener("click",Z),0===Q?(V(),Q=1):1===Q&&(X(),Q=0)})),J.addEventListener("click",(function(e){e.target.classList.contains("calendar-modal-day-item")?function(e){const t=e.classList.contains("calendar-modal-day-prev"),n=e.classList.contains("calendar-modal-day-next"),r=Number(e.textContent),a=new Date,o=a.getFullYear(),i=a.getMonth(),c=a.getDate();let l=0;t&&(l=-1),n&&(l=1);let u=W,s=H+l,d=r;s<0?(u--,s=11):s>11&&(u++,s=0),u<o||u===o&&s<i||u===o&&s===i&&d<=c?te(d,s,u):te(c,i,o);let f=e;e.classList.contains("calendar-modal-day-curr")||(document.querySelector(".calendar-modal-day-curr").classList.remove("calendar-modal-day-curr"),0===l&&d<c?e.classList.add("calendar-modal-day-curr"):0===l||1===l&&H<s?(f=ee(B),f.classList.add("calendar-modal-day-curr")):(V(),f=ee(B),f.classList.add("calendar-modal-day-curr")),z(),I.parentNode.classList.remove("calendar-active"));document.removeEventListener("click",Z)}(e.target):e.target.classList.contains("calendar-month-prev")?function(){let e=W,t=H-1;t<0&&(e--,t=11);let n=ne(t,e);n>B&&(n=B),te(n,t,e),V()}():e.target.classList.contains("calendar-month-next")?function(){const e=new Date,t=e.getMonth(),n=e.getDate();if(H!==t||W!==e.getFullYear()){let e=W,t=H+1;t>11&&(e++,t=0);let r=ne(t,e);r>n?r=n:r>B&&(r=B),te(r,t,e),V()}}():e.target.classList.contains("calendar-year-prev")?function(){let e=W-1,t=H;te(Math.min(B,ne(t,e)),t,e),V()}():e.target.classList.contains("calendar-year-next")&&function(){const e=new Date,t=e.getFullYear(),n=e.getMonth();if(!(W>=t)){let r=W+1,a=H,o=B;r===t?a>=n&&(a=n,o=Math.min(o,e.getDate())):o=Math.min(o,ne(a,r)),te(o,a,r),V()}}()}));const re=document.querySelector(".filter-section"),ae=document.querySelector(".category"),oe=document.querySelector(".category-others-chosen"),ie=document.querySelector(".category-list"),ce=document.querySelector(".category-modal-list"),le=document.querySelector(".category-others");let ue=[],se="";function de(){const e=document.querySelector(".category-item-active");e&&(e.classList.remove("category-item-active"),se="",oe.textContent="")}function fe(e){if(0===e.length)ce.innerHTML="";else{const t=e.map((e=>`<li class="category-modal-item">${e}</li>`)).join("");ce.innerHTML=t}}function ge(e){let t="";0===e.length?ie.innerHTML="":(t=e.map((e=>`<li class="category-btn">${e}</li>`)).join(""),ie.innerHTML=t)}function me(){const e=re.getBoundingClientRect().width,t=[...ue];if(e<736)ge([]),fe(ue);else if(736===e){const e=t.slice(0,4),n=t.splice(4);ge(e),fe(n)}else if(1248===e){const e=t.slice(0,6),n=t.splice(6);ge(e),fe(n)}}function ye(e){!le.contains(e.target)&!ce.contains(e.target)&&(le.classList.remove("category-others-active"),document.removeEventListener("click",ye))}window.selectedCategory=se,(0,N.fetchNewsCategories)().then((e=>{ue=e,me()})),le.addEventListener("click",(function(e){le.classList.toggle("category-others-active"),document.addEventListener("click",ye)})),ae.addEventListener("click",(function(e){const t=e.target.classList.contains("category-btn"),n=e.target.classList.contains("category-others"),r=e.target.classList.contains("category-modal-item");(t&&!n||r)&&(e.target.textContent===se?(de(),(0,F.fetchMostPopular)()):(de(),t?e.target.classList.add("category-item-active"):(oe.textContent=e.target.textContent,oe.parentNode.classList.add("category-item-active"))))})),window.addEventListener("resize",e(v)((function(e){me()}),500));i=a("aWGU8");a("2vcVf");F=a("csXCJ");var ve=a("932qe");a("41I1F"),a("8ySVs");var pe=a("krGWQ"),he=(R=a("90Rt4"),a("34B7l"));a("lGWEK");var Se=a("e4bIU");const Le=document.querySelector(".home__inner"),we=document.querySelector(".category-list"),xe=document.querySelector(".home__list"),be=document.querySelector(".category-others"),Ee=new(0,i.Paginator);function _e(e){if("LI"!==e.target.nodeName)return;const t=e.target.textContent;(0,R.fetchByChoosenCategories)(t).then((e=>{const{data:{results:t}}=e,n=e.data.num_results,r=e.config.url,a=(0,ve.getNormalizeResponse)(t,r);if(0===n)throw Ee.hide(),new Error(e.status);Ee.getRespForPagination(e,r,a)})).catch((e=>{console.error(e),(0,he.renderMarkupError)(xe)}))}
//! start new function for localStorage for read
Le.getBoundingClientRect().height=Le.getBoundingClientRect().height-700,(0,F.fetchMostPopular)().then((e=>{if(200!=e.status)throw new Error(e.status);const{data:{results:t}}=e,n=e.data.num_results,r=e.config.url,a=(0,ve.getNormalizeResponse)(t,r);if(0===n)throw Ee.hide(),new Error(e.status);Ee.getRespForPagination(e,r,a)})).catch((e=>{console.error(e),(0,he.renderMarkupError)(".home__inner")})),xe.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;const t=e.target.parentNode.parentNode,n=t.querySelector(".home__list-section").textContent,r=t.querySelector(".home__list-img").src,a=t.querySelector(".home__list-img").alt,o=t.querySelector(".home__list-title").textContent,i=t.querySelector(".home__list-text").textContent,c=t.querySelector(".home__list-date").textContent,l=t.querySelector(".home__list-link").href,u=d(),s={section:n,img:r,alt:a,title:o,text:i,date:c,link:l,isRead:!0,dateOfRead:u};try{const e=JSON.parse(localStorage.getItem(pe.refs.KEY_LOCAL_STORAGE));if(null===e)return void localStorage.setItem(pe.refs.KEY_LOCAL_STORAGE,JSON.stringify([s]));if(null!==e){e.every((e=>e.link!==s.link))&&(e.push(s),localStorage.setItem(pe.refs.KEY_LOCAL_STORAGE,JSON.stringify(e)));const t=e.reduce(((e,t)=>(t.link===s.link&&(t.dateOfRead=d(),t.isRead=!0),e.push(t),e)),[]);localStorage.setItem(pe.refs.KEY_LOCAL_STORAGE,JSON.stringify(t))}}catch(e){console.error(e),container.innerHTML=getMarkupError()}function d(){return new Date(Date.now()).toLocaleString().split(",")[0]}t.classList.contains("isRead")||t.classList.add("isRead")})),we.addEventListener("click",_e),be.addEventListener("click",_e),xe.addEventListener("click",Se.default);
//# sourceMappingURL=index.3887588d.js.map
