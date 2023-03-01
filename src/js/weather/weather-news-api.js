import { addSpinner, removeSpinner } from "./spinner";
import WeatherMarkupApi from "./waether-markup";

const weatherMarkupApi = new WeatherMarkupApi();

const weatherElem = document.querySelector(".weather");

const API_KEY = "c76da9d16a38d15146607ff522b06c37";
const USER_LOCATION_ITEM = "User-location";

function checkWeather() {
	if (weatherElem.children.length === 0) {
		addSpinner(weatherElem);
		addClassLoad(weatherElem)
	} else {
		removeSpinner(weatherElem);
	}
}

function addClassLoad(parent) {
	parent.classList.add("load");
}

function removeClassLoad(parent) {
	parent.classList.remove("load");
}


const getSuccsess = async position => {
	try {
		const preloadWrapper = document.querySelector(".preload-wrapper");
		const latitude = await position.coords.latitude;
		const longitude = await position.coords.longitude;

		const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

		const resopnse = await fetch(BASE_URL);
		const data = await resopnse.json();
		await weatherElem.insertAdjacentHTML("beforeend", weatherMarkupApi.getWeatherMurkup(data));

		if (weatherElem.children.length > 0) {
			removeClassLoad(weatherElem);
			removeClassLoad(preloadWrapper);
			removeSpinner(preloadWrapper);
		}
	} catch (error) {
		console.log(error);
	}
}

const getError = async error => {
	const msg = error.message;

	const errorUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=${API_KEY}`;

	fetch(errorUrl)
		.then(res => res.json())
		.then(data => {
			const preloadWrapper = document.querySelector(".preload-wrapper");
			removeClassLoad(weatherElem);
			removeClassLoad(preloadWrapper)
			preloadWrapper.innerHTML = "";
			weatherElem.insertAdjacentHTML("beforeend", weatherMarkupApi.getWeatherMurkup(data));
		});

	console.log(msg);
}

navigator.geolocation.getCurrentPosition(getSuccsess, getError);

checkWeather();