!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequire12f5;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequire12f5=i),i.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"03q4W":"read.b5522a14.js","8J0T8":"error_screen_min.4023487f.png","32Ruo":"error_screen_x2.39288cc7.png","8MCNl":"error_mobile_min.58218a7d.png","8oDjV":"error_mobile_x2.abc25851.png","iRhwk":"error_tablet_min.c64e72d1.png","1hH1h":"error_tablet_x2.f001dae6.png"}'));var a;a=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("8J0T8");var l;l=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("32Ruo");var s;s=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("8MCNl");var c;c=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("8oDjV");var u;u=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("iRhwk");var f;function d(){return'<section class="error">\n  <h2 class="error-text">We haven’t found news from this category</h2>\n  <picture class="error-image">\n    <source\n      srcset="\n        '.concat(t(a)," 1x,\n        ").concat(t(l),' 2x\n      "\n      media="(min-width: 1200px)"\n    />\n    <source\n      srcset="\n        ').concat(t(u)," 1x,\n        ").concat(t(f),' 2x\n      "\n      media="(min-width: 768px)"\n    />\n    <source\n      srcset="\n        ').concat(t(s)," 1x,\n        ").concat(t(c),' 2x\n      "\n      media="(max-width: 767px)"\n    />\n    <img\n      src=').concat(t(a),'\n      alt="Error page"\n      width="601"\n    />\n  </picture>\n</section>')}f=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("1hH1h");var _={KEY_LOCAL_STORAGE:"news-state-local-storage"};function g(e){var t="add-button remove-button";try{var r=JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE));if(null===r)return t;var n=!0,o=!1,i=void 0;try{for(var a,l=r[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var s=a.value;if(s.link===e&&s.isFavorite)return t="add-button"}}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return t}catch(e){console.log("Error parse date local storage")}}function m(e){var t="";try{var r=JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE));if(null===r)return t;var n=!0,o=!1,i=void 0;try{for(var a,l=r[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var s=a.value;if(s.link===e&&s.isRead)return t="isRead"}}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return t}catch(e){console.log("Error parse date local storage")}}function v(e){var t="Add to favorite";try{var r=JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE));if(null===r)return t;var n=!0,o=!1,i=void 0;try{for(var a,l=r[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var s=a.value;if(s.link===e&&s.isFavorite)return t="Remove from favorite"}}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return t}catch(e){console.log("Error parse date local storage")}}function h(e){return'        <li class="home__list-item weather-container">\n          <aside class="weather"></aside>'+e.map((function(e){var t=e.img,r=e.title,n=e.text,o=e.date,i=e.link,a=e.section;return'\n    <li class="home__list-item '.concat(m(i),'">\n      <div class="home__list-top">\n          <p class="home__list-section">').concat(a,'</p>\n          <p class="home__list-is-read">Already read &#10004;</p>\n          <img width="353" height="395" class="home__list-img" src=').concat(t," alt=").concat(r,'>\n          <button type="button" id="like" class="').concat(g(i),'">').concat(v(i),'</button>\n          <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">').concat(r,'</h2>\n        <p class="home__list-text">').concat(n,'</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">').concat(o,"</p>\n        <a href=").concat(i,' class="home__list-link" target="_blank">Read more</a>\n      </div>\n    </li>\n    ')})).join("")}document.querySelector(".readPage-list");var S=document.querySelector("main"),p=document.querySelector(".readPage-list");function O(){return new Date(Date.now()).toLocaleString().split(",")[0]}!function(){try{!function(e){function t(e,t){return h(t.filter((function(t){return t.dateOfRead===e})))}var r=e.flatMap((function(e){return e.dateOfRead})).filter((function(e,t,r){return r.indexOf(e)===t})).map((function(r){return'<li class="readPage-list__item">\n        <h2 class="readPage-list__title">'.concat(r.replaceAll(".","/"),'</h2>\n        <svg class="readPage-list__svg" aria-label="open news" width="15px" height="20px">\n        <use href="/icons.adfc4680.svg#dilka-bottom"></use>\n    </svg>\n    <ul class="read-page-list__list">').concat(t(r,e),"</ul>\n    </li>")})).join("");p.insertAdjacentHTML("beforeend",r)}(JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE)).reduce((function(e,t){return t.isRead&&e.push(t),e}),[]))}catch(e){console.log(e),S.innerHTML=d()}}(),p.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;var t=e.target.parentNode.parentNode,r=function(e){var t=e.querySelector(".home__list-section").textContent,r=e.querySelector(".home__list-img").src,n=e.querySelector(".home__list-img").alt,o=e.querySelector(".home__list-title").textContent,i=e.querySelector(".home__list-text").textContent,a=e.querySelector(".home__list-date").textContent,l=e.querySelector(".home__list-link").href,s=O();return{section:t,img:r,alt:n,title:o,text:i,date:a,link:l,isRead:!0,dateOfRead:s}}(t);try{var n=JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE));if(null===n)return void localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify([r]));if(null!==n){n.every((function(e){return e.link!==r.link}))&&(n.push(r),localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify(n)));var o=n.reduce((function(e,t){return t.link===r.link&&(t.dateOfRead=O(),t.isRead=!0),e.push(t),e}),[]);localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify(o))}}catch(e){console.error(e),S.innerHTML=d()}t.classList.contains("isRead")||t.classList.add("isRead")})),p.addEventListener("click",(function(e){var t=e.target.parentNode.parentNode,r=(t.querySelector(".home__list-item"),t.querySelector(".home__list-title")),n=t.querySelector(".home__list-text"),o=t.querySelector(".home__list-top > img"),i=(t.querySelector(".home__list-top > img[alt]"),t.querySelector(".home__list-footer > .home__list-date")),a=t.querySelector(".home__list-footer > .home__list-link"),l=t.querySelector(".home__list-section"),s={img:o.getAttribute("src"),title:r.textContent,text:n.textContent,date:i.textContent,link:a.getAttribute("href"),section:l.textContent,isFavorite:!0};if(e.target.classList.contains("remove-button")){var c=e.target;console.log(c),e.target.classList.toggle("remove-button"),e.target.textContent="Remove from favorite";try{var u=JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE));if(null===u)return void localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify([s]));if(null!==u){u.every((function(e){return e.link!==s.link}))&&(u.push(s),localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify(u)));var f=u.reduce((function(e,t){return t.link===s.link&&(t.isFavorite=!0),e.push(t),e}),[]);localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify(f))}}catch(e){console.log(e)}}else if(e.target.classList.contains("add-button")){e.target;e.target.classList.toggle("remove-button"),e.target.textContent="Add to favorite";try{var d=JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE));if(null===d)return void localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify([s]));if(null!==d){d.every((function(e){return e.link!==s.link}))&&(d.push(s),localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify(d)));var g=d.reduce((function(e,t){return t.link===s.link&&(t.isFavorite=!1),e.push(t),e}),[]);localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify(g))}}catch(e){console.error(e)}}})),p.addEventListener("click",(function(e){if("H2"!==e.target.nodeName)return;if("H2"!==e.target.nodeName)return;var t=e.target;t.nextElementSibling.classList.toggle("is-open"),t.nextElementSibling.nextElementSibling.classList.toggle("visually-hidden")})),document.querySelector(".read-page-list__list").children[0].remove()}();
//# sourceMappingURL=read.b5522a14.js.map
