import WeatherMarkupApi from "./waether-markup";
import { addSpinner, removeSpinner } from "./spinner";

const weatherMarkupApi = new WeatherMarkupApi();

class WeatherNewsApi {
	constructor() {
		this.weatherElem = document.querySelector(".weather");
		this.apiKey = "c76da9d16a38d15146607ff522b06c37";
	}

	checkWeather() {
		if (this.weatherElem.children.length === 0) {
			addSpinner(this.weatherElem);
			this.addClassLoad(this.weatherElem);
		} else {
			removeSpinner(this.weatherElem);
		}
	}

	addClassLoad(parent) {
		parent.classList.add("load");
	}

	removeClassLoad(parent) {
		parent.classList.remove("load");
	}

	async getSuccsess (position) {
		try {
			const preloadWrapper = document.querySelector(".preload-wrapper");
			const latitude = await position.coords.latitude;
			const longitude = await position.coords.longitude;

			const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;

			const resopnse = await fetch(BASE_URL);
			const data = await resopnse.json();
			await this.weatherElem.insertAdjacentHTML("beforeend", weatherMarkupApi.getWeatherMurkup(data));

			if (this.weatherElem.children.length > 0) {
				this.removeClassLoad(this.weatherElem);
				this.removeClassLoad(preloadWrapper);
				removeSpinner(preloadWrapper);
			}
		} catch (error) {
			console.log(error);
		}
	}

	async getError (error) {
		const msg = error.message;

		const errorUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=${this.apiKey}`;

		fetch(errorUrl)
			.then(res => res.json())
			.then(data => {
				const preloadWrapper = document.querySelector(".preload-wrapper");
				this.removeClassLoad(this.weatherElem);
				this.removeClassLoad(preloadWrapper);
				preloadWrapper.innerHTML = "";
				this.weatherElem.insertAdjacentHTML("beforeend", weatherMarkupApi.getWeatherMurkup(data));
			});

		console.log(msg);
	}
}

export default WeatherNewsApi;