class WeatherMarkupApi {
	constructor() {
		this.daysOfWeek = [
			"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
		];
		this.months = [
			"Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec",
		];

		this.degrees = "&deg;";
	}

	getDayNumber() {
		return new Date().getDay();
	}

	addLeadingZero(value) {
		return String(value).padStart(2, '0');
	}

	getWeatherMurkup(data) {
		const dsecripton = data.weather.map(({ description }) => description).join(", ");
		const temp = Math.round(data.main.temp);
		const date = new Date();
		const currentDate = `${this.addLeadingZero(date.getDate())} ${this.months[date.getMonth()]} ${date.getFullYear()}`;

		let setClassOfWeather = "";

		if (temp > 10) {
			setClassOfWeather = "sun";
		} else if (temp > 0 & temp <= 10) {
			setClassOfWeather = "cloudy";
		} else if (temp < 0) {
			setClassOfWeather = "cold";
		}

		return `
		<div class="weather-container">
			<div class="weather-container__top">
				<p class="weather-container__deg">${temp}${this.degrees}</p>
				<div class="weather-container__top-wrapper">
					<p class="weather-container__top-dsecr">${dsecripton}</p>
					<p class="weather-container__top-location">${data.name}</p>
				</div>
			</div>
			<div class="weather-container__img ${setClassOfWeather}">
				
			</div>

			<div class="weather-container__footer">
				<p class="weather-container__footer-day">${this.daysOfWeek[this.getDayNumber()]}</p>
				<p class="weather-container__footer-date">${currentDate}</p>
				<button class="btn__footer-week">weather for week</button>
			</div>
		</div>`
	}
}

export default WeatherMarkupApi;