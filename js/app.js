const cityForm = document.querySelector('[data-js="change-location"]');
const showCityName = document.querySelector('.my-3');
const showClimate = document.querySelector('div.my-3');
const showTemperature = document.querySelector('.my-4 span');
const cityCard = document.querySelector('[data-js="city-card"]');
let imgDay = document.querySelector('[data-js="time"]');
const imgIconClimate = document.querySelector('[data-js="time-icon"]');

const showCityCard = () =>  cityCard.classList.contains('d-none') ? cityCard.classList.remove('d-none') : '';

const showCityWeatherInfor = async cityName => {
	const [{ Key, LocalizedName }] = await getCityData(cityName);
	const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key);

	imgDay.src = IsDayTime ? './src/day.svg' : './src/night.svg'; 
	imgIconClimate.innerHTML = `<img src="./src/icons/${WeatherIcon}.svg" />`;
	showCityName.textContent = LocalizedName;
	showClimate.textContent = WeatherText;
	showTemperature.textContent = Temperature.Metric.Value;

	showCityCard(); 
}

const showCityLocalStorage = () => {
	const nameCityLocalStorage = localStorage.getItem('city')

if(nameCityLocalStorage){
	showCityWeatherInfor(nameCityLocalStorage);
	}
}

cityForm.addEventListener('submit', event => {
	event.preventDefault();

	const inputValue = event.target.city.value;

	showCityWeatherInfor(inputValue);
	localStorage.setItem('city', inputValue);
	cityForm.reset();
});

showCityLocalStorage();

