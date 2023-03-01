const daysOfWeek = [
	"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

function getDayNumber() {
	return new Date().getDay();
}

export function getWeatherMurkup(data) {
	const dsecripton = data.weather.map(({ description }) => description).join(", ");
	return `
	<div class="weather-container">
		<div class="weather-container__top">
			<p class="weather-container__deg">${Math.round(data.main.temp)}</p>
			<div class="weather-container__top-wrapper">
				<p class="weather-container__top-dsecr">${dsecripton}</p>
				<p class="weather-container__top-location">${data.name}</p>
			</div>
		</div>
		<div class="weather-container__img">
			<img width=200 height=200 src="" alt="">
		</div>

		<div class="weather-container__footer">
			<p class="weather-container__footer-day">${daysOfWeek[getDayNumber()]}</p>
			<p class="weather-container__footer-date"></p>
			<p class="weather-container__footer-week"></p>
		</div>
	</div>`
}