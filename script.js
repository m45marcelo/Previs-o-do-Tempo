const key = '74b87c560344b173efce90f2ba2f55d0'

function colocarDadosNaTela(dados){
    document.querySelector('.cidade').innerHTML = `Tempo em ${dados.name} `
    document.querySelector('.temp').innerHTML = `${Math.floor(dados.main.temp)}°C`
    document.querySelector('.clima').innerHTML = `${dados.weather[0].description}`
    document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector('.img-previsão').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados);
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    
    colocarDadosNaTela(dados)
}

function cliqueiNoBotão(){
    const cidade = document.querySelector('.input-cidade').value;
    
    buscarCidade(cidade)
}