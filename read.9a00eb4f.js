document.querySelector(".theme-swapper__checkbox");const t=document.querySelector("body"),e=document.querySelector(".theme-toggle--light"),a=document.querySelector(".theme-toggle--dark"),s=document.querySelector(".theme-wrapper--light"),r=document.querySelector(".theme-wrapper--dark");let o=localStorage.getItem("checked");function n(o){"true"===o?(t.classList.add("dark-theme"),e.classList.remove("switch-on"),s.classList.remove("switch-on"),a.classList.add("switch-on"),r.classList.add("switch-on")):(t.classList.remove("dark-theme"),e.classList.add("switch-on"),s.classList.add("switch-on"),r.classList.remove("switch-on"),a.classList.remove("switch-on"))}n(o),e.addEventListener("click",(()=>{o="true",n(o),localStorage.setItem("checked",o)})),a.addEventListener("click",(()=>{o="false",n(o),localStorage.setItem("checked",o)}));function c(t){t.innerHTML=""}const i=new class{getDayNumber(){return(new Date).getDay()}addLeadingZero(t){return String(t).padStart(2,"0")}getWeatherMurkup(t){const e=t.weather.map((({description:t})=>t)).join(", "),a=Math.round(t.main.temp),s=new Date,r=`${this.addLeadingZero(s.getDate())} ${this.months[s.getMonth()]} ${s.getFullYear()}`;let o="";return a>10?o="sun":a>=0&a<=10?o="cloudy":a<0&&(o="cold"),`\n\t\t<div class="weather-container">\n\t\t\t<div class="weather-container__top">\n\t\t\t\t<p class="weather-container__deg">${a}${this.degrees}</p>\n\t\t\t\t<div class="weather-container__top-wrapper">\n\t\t\t\t\t<p class="weather-container__top-dsecr">${e}</p>\n\t\t\t\t\t<p class="weather-container__top-location">${t.name}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="weather-container__img ${o}">\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<div class="weather-container__footer">\n\t\t\t\t<p class="weather-container__footer-day">${this.daysOfWeek[this.getDayNumber()]}</p>\n\t\t\t\t<p class="weather-container__footer-date">${r}</p>\n\t\t\t\t<button class="btn__footer-week">weather for week</button>\n\t\t\t</div>\n\t\t</div>`}constructor(){this.daysOfWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.months=["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],this.degrees="&deg;"}};var d=class{checkWeather(){0===this.weatherElem.children.length?(this.weatherElem.insertAdjacentHTML("beforeend",'\n\t<div class="preload-wrapper load">\n\t\t<div class="preload">\n\t\t\t<div class="loader"></div>\n\t\t</div>\n\t</div>\n\t'),this.addClassLoad(this.weatherElem)):c(this.weatherElem)}addClassLoad(t){t.classList.add("load")}removeClassLoad(t){t.classList.remove("load")}async getSuccsess(t){try{const e=document.querySelector(".preload-wrapper"),a=await t.coords.latitude,s=`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${a}&lon=${await t.coords.longitude}&appid=${this.apiKey}`,r=await fetch(s),o=await r.json();await this.weatherElem.insertAdjacentHTML("beforeend",i.getWeatherMurkup(o)),this.weatherElem.children.length>0&&(this.removeClassLoad(this.weatherElem),this.removeClassLoad(e),c(e))}catch(t){console.log(t)}}async getError(t){try{const e=t.message,a=document.querySelector(".preload-wrapper"),s=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=${this.apiKey}`,r=await fetch(s),o=await r.json();await this.removeClassLoad(this.weatherElem),await this.removeClassLoad(a),a.innerHTML="",await this.weatherElem.insertAdjacentHTML("beforeend",i.getWeatherMurkup(o)),console.log(e)}catch(t){console.log(t)}}constructor(){this.weatherElem=document.querySelector(".weather"),this.apiKey="c76da9d16a38d15146607ff522b06c37"}};!function(){const t=new d;navigator.geolocation.getCurrentPosition(t.getSuccsess.bind(t),t.getError.bind(t)),t.checkWeather()}();
//# sourceMappingURL=read.9a00eb4f.js.map