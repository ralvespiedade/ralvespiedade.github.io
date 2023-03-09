//1ª jogada

let regressivo = document.querySelector('.regressivo')
let respostaUsuario = document.querySelector('.resposta')
console.log(respostaUsuario.addEventListener(click, novaJogada))
let feedbackJogada = document.querySelector('.respostaCorreta')
let num1 = parseInt(Math.random()*10)
let num2 = parseInt(Math.random()*10)
let jogada = `${num1} x ${num2} = ` 
let respostaCorreta = num1*num2
regressivo.innerHTML = jogada 


function novaJogada(){
    let num1 = parseInt(Math.random()*10)
    let num2 = parseInt(Math.random()*10)
    
    let respostaCorreta = num1 * num2
    let jogada = `${num1} x ${num2} = ` 
    regressivo.innerHTML = jogada
    
    
    
    console.log(`num1 é igual a ${num1}`)
    console.log(`num2 é igual a ${num2}`)
    console.log(`num1 X num2 = ${respostaCorreta}`)
    console.log(`A resposta do usuário foi ${respostaUsuario}`)
}

