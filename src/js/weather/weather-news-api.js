import { setLocalItem } from "./local-storage-api";
import { getWeatherMurkup } from "./waether-markup";

const weatherElem = document.querySelector(".weather");

const API_KEY = "c76da9d16a38d15146607ff522b06c37";
const USER_LOCATION_ITEM = "User-location";

navigator.geolocation.getCurrentPosition(async position => {
	try {
		const latitude = await position.coords.latitude;
		const longitude = await position.coords.longitude;

		const locationObj = { latitude, longitude };
		setLocalItem(USER_LOCATION_ITEM, JSON.stringify(locationObj));

		const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

		const resopnse = await fetch(BASE_URL);
		const data = await resopnse.json();
		await console.log(data);
		await weatherElem.insertAdjacentHTML("beforeend", getWeatherMurkup(data))
	} catch (error) {
		console.log(error);
	}
});