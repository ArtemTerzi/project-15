import WeatherNewsApi from './weather-news-api';

export function startWeather() {
  const weatherNewsApi = new WeatherNewsApi(".weather");

  navigator.geolocation.getCurrentPosition(
    weatherNewsApi.getSuccsess.bind(weatherNewsApi),
    weatherNewsApi.getError.bind(weatherNewsApi)
  );

  weatherNewsApi.checkWeather();
}
