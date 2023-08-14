const button = document.querySelector(".button");

function verificar() {
  const nome = document.querySelector(".txtnome").value;
  const idade = document.querySelector(".txtidade").value;
  const r = document.querySelector(".res");

  if (nome !== "" && idade !== "") {
    
    let classificacao = ""
    if(idade < 16){
        classificacao = "você não vota" 
    }
    else if(idade >= 16 && idade < 18){
        classificacao = "seu voto é opcional"
    }
    else if(idade >= 18  && idade < 67){
        classificacao = "seu voto é obrigatório"
    }
    else if(idade >= 67){
         classificacao = "seu voto é opcional"
    }
    r.textContent = `Olá ${nome}, sua idade é ${idade} e ${classificacao}`

}else{
    alert("Preencha todos os campos!")
}
}
button.addEventListener("click", verificar);