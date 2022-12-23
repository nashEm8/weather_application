const form = document.querySelector('form');
const inputCity = document.querySelector('input')

const apiKey = 'Krxf15YbYiQuEGuxxY3FIGZLWgLGoEnw';
const getCityUrl = cityName => 
`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`


const getCityData = async cityName => {
    try{
        const cityUrl = getCityUrl(cityName)
        const response = await fetch(cityUrl);

        if(!response.ok){
         throw new Error('Não foi possível obter os dados!');
     }

     const [firstItemCityData] = await response.json();

     return firstItemCityData;

 }   catch({name, message}){
    console.log(`${name}: ${message}`)
}
}

const getCityClimate = async cityName => {
    try{
        const {Key} = await getCityData(cityName);
        const cityWeatherUrl =`http://dataservice.accuweather.com/currentconditions/v1/${Key}?apiKey=${apiKey}&language=pt-br`;
        const response = await fetch(cityWeatherUrl);

        if(!response.ok){
         throw new Error('Não foi possível obter os dados!');
     }

     const [cityWeatherData] = await response.json();
     return cityWeatherData;

 }   catch({name, message}){
    console.log(`${name}: ${message}`)
}
}

getCityClimate('Fortaleza')
