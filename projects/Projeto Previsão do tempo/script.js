const key ="1584ef420fbb143d3cc48cc3d1627979"


function dadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " +dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector(".txt-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity +"%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscar(cidade){
   
    const dados= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    dadosNaTela(dados)
   
}


function clique(){
    const cidade = document.querySelector(".busca-cidade").value

    buscar(cidade)
}