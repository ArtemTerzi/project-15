import WeatherNewsApi from "./weather";

const weatherNewsApi = new WeatherNewsApi();

navigator.geolocation.getCurrentPosition(
	weatherNewsApi.getSuccsess.bind(weatherNewsApi),
	weatherNewsApi.getError.bind(weatherNewsApi)
);

weatherNewsApi.checkWeather();