//Escreva um programa que verifique se um número é positivo,negativo ou zero.

const numero = 10;
let resultado;

if(numero > 0){
    resultado = "positivo"
}else if(numero == 0){
    resultado = "zero"
}else{
    resultado = "negativo"
}
console.log("Numero positivo ou negativo = " + resultado)

//Escreva um programa que determine se um número é par ou impar.
const numero2 = 10
let resultado2;
if(numero2 % 2 == 0){
    resultado2 = "par"
}else{
    resultado2 = "impar"
}

console.log(`Par ou impar: ${resultado2}`)

//Escreva um programa que classifique a idade de uma pessoa em "Criança", "Adolescente", "Adulto" ou "Idoso".

let idade = 10;
let resultado3;

if(idade >= 60){
    resultado3 = "Idoso"
}else if(idade >= 20){
    resultado3 = "Adulto"
}else if(idade >= 12){
    resultado3 = "Adolescente"
}else{
    resultado3 = "Criança"
}

console.log(`Idade classificada em ${resultado3}`)

//Escreva um programa que determine a classificação de uma nota (A, B, C, D, F) com base em seu valor numérico.
const nota = 10;
let resultado4;

if(nota >= 10){
    resultado4 = "A"
}else if(nota >= 8){
    resultado4 = "B"
}else if(nota >= 6){
    resultado4 = "C"
}else if(nota >= 4){
    resultado4 = "D"
}else{
    resultado4 = "F"
}

console.log(`A nota do aluno é ${resultado4}`)

//Escreva um programa que, dado um número de 1 a 7, exiba o dia da semana correspondente.

const diaSemana = 3;
let resultado5;

switch(diaSemana){
    case 1:
        resultado5 = "Segunda-feira"
        break;
    case 2:
        resultado5 = "Terça-feira"
        break;
    case 3:
        resultado5 = "Quarta-feira"
        break;
    case 4:
        resultado5 = "Quinta-feira"
        break;
    case 5:
        resultado5 = "Sexta-feira"
        break;
    case 6:
        resultado5 = "Sábado"
        break;
    case 7:
        resultado5 = "Domingo"
        break;
    default:
        resultado5 = "Dia inválido"
}

//Escreva um programa que calcule o bônus de um vendedor com base em seu faturamento mensal:
// •Faturamento abaixo de R$ 1.000: Sem bônus.
// •Faturamento entre R$ 1.000 e R$ 5.000: Bônus de 5%.
// •Faturamento acima de R$ 5.000: Bônus de 10%.

const faturamento = 6000;
let bonus;
if(faturamento >= 5000){
    bonus = faturamento * 0.1;
    console.log(`O bônus do vendedor é R$ ${bonus}`);
}else if (faturamento >= 1000){
    bonus = faturamento * 0.05;
    console.log(`O bônus do vendedor é R$ ${bonus}`)
}else{
    console.log("O vendedor não recebe bônus")
}