const form = document.querySelector('form');
const inputCity = document.querySelector('input')

const apiKey = 'Krxf15YbYiQuEGuxxY3FIGZLWgLGoEnw';
const getCityUrl = cityName => 
`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`

const getCityData = async cityName => {
    try{
        const cityUrl = getCityUrl(cityName);
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

getCityData('Cuiabá');
