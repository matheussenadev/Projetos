const somar = document.querySelector(".somar");
const sub = document.querySelector(".sub");
const mult = document.querySelector(".mult");
const div = document.querySelector(".div");
const n1 = document.querySelector(".n1")
const n2 = document.querySelector(".n2")
const res = document.querySelector(".res");
 

function soma() {
    const num1 = Number(n1.value);
    const num2 = Number(n2.value);
    const opSoma = num1 + num2;
    res.textContent =`${num1} + ${num2} = ${opSoma}`
}


function subt (){
    const num1 = Number(n1.value);
    const num2 = Number(n2.value);
    const opSub = num1 - num2
    res.textContent = `${num1} - ${num2} = ${opSub}`
 }

function multi(){
    const num1 = Number(n1.value);
    const num2 = Number(n2.value);
    const opMult = num1 * num2
    res.textContent = `${num1} x ${num2} = ${opMult}`
}
 function divi(){
    const num1 = Number(n1.value);
    const num2 = Number(n2.value);
    const opDiv = num1 / num2
    res.textContent = `${num1} % ${num2} = ${opDiv}`
 }

somar.addEventListener("click", soma);
sub.addEventListener("click", subt);
mult.addEventListener("click", multi);
div.addEventListener("click", divi);
