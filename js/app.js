const form = document.querySelector('form');
const inputCity = document.querySelector('input')

form.addEventListener('submit', event => {
    event.preventDefault();

    console.log(inputCity.value);
    
    try{
        const response = await fetch('Krxf15YbYiQuEGuxxY3FIGZLWgLGoEnw');

        if(!response.ok){
            throw new Error('Não foi possível obter os dados');
        }

        const dataDice = await response.json();
        console.log(dataDice);
    }catch(error){
        console.log(error);
    }
})

/*
    const response = await fetch('Krxf15YbYiQuEGuxxY3FIGZLWgLGoEnw');
    console.log(response)*/