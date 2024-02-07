const leia= require('prompt-sync')();
let peso=leia("digite o seu peso: ");
let altura=leia("digite sua altura: ");
let altura2 = altura*altura;
let imc = peso/altura2;

if(imc < 22){
    console.log(`seu imc é ${imc} e voce e considerado baixo peso`)
} else if(imc <= 27){
    console.log(`seu imc é ${imc} e voce e considerado normal`)
} else if(imc <=30){
    console.log(`seu imc é ${imc} e voce e considerado sobrepeso`)
} else if(imc > 30){
    console.log(`seu imc é ${imc} e voce e considerado obeso`)
}

