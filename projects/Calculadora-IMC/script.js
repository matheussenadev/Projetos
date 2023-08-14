const calcular = document.getElementById("calcular")


function imc() {
  const nome = document.getElementById("nome").value
  const altura = document.getElementById("altura").value
  const peso = document.getElementById("peso").value
  const res = document.getElementById("res")
  

  if(nome !== '' && altura !== '' && peso !== ''){
    const valorIMC = (peso/(altura*altura)).toFixed(1)

    let classificacao = ""
  
    if(valorIMC < 18.5){
      classificacao = "Abaixo do peso"
    }else if(valorIMC >= 18.6 && valorIMC <= 24.9){
      classificacao = "no Peso ideal"
    }else if(valorIMC >= 25 && valorIMC <= 29.9){
      classificacao = "Levemente acima do peso"
    }else if(valorIMC >= 30 && valorIMC <= 34.9){
      classificacao = "com Obesidade grau I"
    }else if(valorIMC >= 35 && valorIMC <= 39.9){
      classificacao = "com Obesidade grau II(severa)"
    }else if(valorIMC > 40){
      classificacao = "com Obesidade grau III(mórbida)"
    }

    res.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}.`
  }else{
    res.textContent = `Preencha todos os campos`
  }
}
calcular.addEventListener("click", imc);
