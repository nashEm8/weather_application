const cityForm = document.querySelector('[data-js="change-location"]');
const showCityName = document.querySelector('.my-3');
const showClimate = document.querySelector('div.my-3');
const showTemperature = document.querySelector('.my-4 span');

cityForm.addEventListener('submit', async event => {
	event.preventDefault();
	const inputValue = event.target.city.value;
	const [{ Key, LocalizedName }] = await getCityData(inputValue);
	const [{ Temperature, WeatherText, }] = await getCityWeather(Key);

	showCityName.innerHTML = LocalizedName;
	showClimate.innerHTML = WeatherText;
	showTemperature.innerHTML = Temperature.Metric.Value;

	cityForm.reset();
});