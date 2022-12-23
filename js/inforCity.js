const form = document.querySelector('form');
const inputCity = document.querySelector('input')

const apiKey = 'Krxf15YbYiQuEGuxxY3FIGZLWgLGoEnw';
const baseUrl = 'http://dataservice.accuweather.com/';

const getCityUrl = cityName => 
`${baseUrl}locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`

const getWeatherUrl = ({ Key }) => 
`${baseUrl}currentconditions/v1/${Key}?apikey=${apiKey}&language=pt-br`;


const fetchData = async url => {
    try{
        const response = await fetch(url);

        if(!response.ok){
         throw new Error('Não foi possível obter os dados!');
     }

     return response.json();

 }   catch({name, message}){
    console.log(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
    const [cityData] = await getCityData(cityName);
    return fetchData(getWeatherUrl(cityData));
} 

getCityWeather('São Paulo')
    .then(console.log)
