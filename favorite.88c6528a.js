var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},r=t.parcelRequire12f5;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in o){var r=o[t];delete o[t];var n={id:t,exports:{}};return e[t]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},t.parcelRequire12f5=r);var n=r("8ySVs"),i=r("krGWQ");const s=document.querySelector(".card-container");var a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,h=f||p||Function("return this")(),m=Object.prototype.toString,g=Math.max,b=Math.min,v=function(){return h.Date.now()};function y(t,e,o){var r,n,i,s,a,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var o=r,i=n;return r=n=void 0,c=e,s=t.apply(i,o)}function h(t){return c=t,a=setTimeout(y,e),d?p(t):s}function m(t){var o=t-l;return void 0===l||o>=e||o<0||u&&t-c>=i}function y(){var t=v();if(m(t))return x(t);a=setTimeout(y,function(t){var o=e-(t-l);return u?b(o,i-(t-c)):o}(t))}function x(t){return a=void 0,f&&r?p(t):(r=n=void 0,s)}function O(){var t=v(),o=m(t);if(r=arguments,n=this,l=t,o){if(void 0===a)return h(l);if(u)return a=setTimeout(y,e),p(l)}return void 0===a&&(a=setTimeout(y,e)),s}return e=S(e)||0,_(o)&&(d=!!o.leading,i=(u="maxWait"in o)?g(S(o.maxWait)||0,e):i,f="trailing"in o?!!o.trailing:f),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=n=a=void 0},O.flush=function(){return void 0===a?s:x(v())},O}function _(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(_(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=_(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var o=c.test(t);return o||d.test(t)?u(t.slice(2),o?2:8):l.test(t)?NaN:+t}var x=r("eLjGg");new class{renderCards(){this.cardObject='<div class="wrapper">\n    <div class="box home__list-top">\n    <p class="home__list-section">Job section</p>\n        <img class="box-img"\n            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"\n            alt="building" width="353" height="395">\n            <button type="button" id="like" class="add-button remove-button">Add to favorite</button>\n    </div>\n    <h1 class="card-header">8 tips for passing an online interview that will help you get a job</h1>\n    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects\n        offered by these...</p>\n    <div class="card-details">\n        <p class="card-date">20/02/2021</p>\n        <a id=\'news-link\'class="card-link" href="first">Read more</a>\n    </div>\n  </div>\n  <div class="wrapper">\n    <div class="box home__list-top">\n    <p class="home__list-section">Job section</p>\n        <img class="box-img"\n            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"\n            alt="building" width="353" height="395">\n            <button type="button" id="like" class="add-button remove-button">Add to favorite</button>\n    </div>\n    <h1 class="card-header">Header 2</h1>\n    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects\n        offered by these...</p>\n    <div class="card-details">\n        <p class="card-date">20/02/2021</p>\n        <a id=\'news-link\'class="card-link" href="second">Read more</a>\n    </div>\n  </div>\n  <div class="wrapper">\n    <div class="box home__list-top">\n    <p class="home__list-section">Job section</p>\n        <img class="box-img"\n            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"\n            alt="building" width="353" height="395">\n            <button type="button" id="like" class="add-button remove-button">Add to favorite</button>\n    </div>\n    <h1 class="card-header">Header 3</h1>\n    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects\n        offered by these...</p>\n    <div class="card-details">\n        <p class="card-date">20/02/2021</p>\n        <a id=\'news-link\' class="card-link" href="third">Read more</a>\n    </div>\n  </div>',s.insertAdjacentHTML("beforeend",this.cardObject)}};const O=document.querySelector(".card-container"),w=document.querySelector(".favorite-main");document.querySelector(".card-container").addEventListener("click",(function(t){let e=t.target.parentNode.parentNode,o=(e.querySelector(".home__list-item"),e.querySelector(".home__list-title")),r=e.querySelector(".home__list-text"),n=e.querySelector(".home__list"),s=(e.querySelector(".home__list-top > img[alt]"),e.querySelector(".home__list-footer > .home__list-date")),a=e.querySelector(".home__list-footer > .home__list-link"),l=e.querySelector(".home__list-section"),c=n.getAttribute("src"),d=o.textContent,u=r.textContent,f=s.textContent,p=a.getAttribute("href"),h={img:c,title:d,text:u,date:f,link:p,section:l};if(t.target.classList.contains("remove-button")){t.target.classList.toggle("remove-button"),t.target.textContent="Remove from favorite";try{const t=JSON.parse(localStorage.getItem(i.refs.KEY_LOCAL_STORAGE));if(null===t)return void localStorage.setItem(i.refs.KEY_LOCAL_STORAGE,JSON.stringify([h]));if(null!==t)for(const e of t)if(e.link===h.link)return void(e.isFavorite=!0);t.push(h),localStorage.setItem(i.refs.KEY_LOCAL_STORAGE,JSON.stringify(t))}catch(t){const e=(0,x.getMarkupError)();w.innerHTML=e}}else if(t.target.classList.contains("add-button")){t.target.classList.toggle("remove-button"),t.target.textContent="Add to favorite";try{const t=JSON.parse(localStorage.getItem(i.refs.KEY_LOCAL_STORAGE));for(const e of t)e.link===h.link&&(e.isFavorite=!1);localStorage.setItem(i.refs.KEY_LOCAL_STORAGE,JSON.stringify(t))}catch(t){const e=(0,x.getMarkupError)();w.innerHTML=e}}}));function j(){const t=JSON.parse(localStorage.getItem(i.refs.KEY_LOCAL_STORAGE));if(null===t){const t=(0,x.getMarkupError)();w.innerHTML=t}return(0,n.getMarkup)(t)}void 0!==j()&&(O.innerHTML=j());
//# sourceMappingURL=favorite.88c6528a.js.map
