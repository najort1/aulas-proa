console.log(calculadora(134,139,'soma'));
console.log(calculadora(134,139,'subtracao'));
console.log(calculadora('3213',"dasfsad",'multiplicacao'));
console.log(calculadora(4,0,'divisao'));
console.log(numeroPar(5));


function calculadora(num1,num2,operacao){
    
    if(typeof(num1) !== 'number' && typeof(num2) !== 'number') return 'O input é obrigatorio ser somente numeros ! '

    num1 = parseInt(num1) //captura somente o numero inteiro
    num2 = parseInt(num2);

    //utilizar ifs nesse formato é uma pessima pratica só fiz por que é um codigo simples

    if(operacao.includes('som')) return num1+num2; //resultado soma
    if(operacao.includes('sub')) return num1-num2; // resultado subtração
    if(operacao.includes('div')) return operacao.includes('div') ? (num2 != 0 ? Math.floor(num1/num2) : 'Não da pra dividir por zero') : null; // operação ternaria para verificar se o usuario digitou 0 no segundo numero
    if(operacao.includes('mul')) return num1*num2; //resultado multiplicação
    if(operacao.includes('expo')) return num1**num2; //resultado exponenciação
    else return 'Operação invalida'; //caso não seja nenhuma das operações retornar operação invalida
}

function numeroPar(num){
    if(num % 2 == 0) return 'Par'; // calculo para saber se um numero é par
    return 'Impar'; // caso não retorna impar
}


//calculo media aritmetica
let resultadoMediaAritmetica;
let soma = 8+12+14;
resultadoMediaAritmetica = soma/3; //soma dividido por 3
console.log(`Media aritmetica: ${resultadoMediaAritmetica}`);
//calculo area de um retangulo
let base = 8;
let altura = 5;
let area = base * altura; //base vezes altura
console.log(`Area do retangulo: ${area}`);
//incrementação
let num = 5;
console.log(`Valor atual de num ${num}`)
num++; // possivel usar num = num+1 porem num++; é mais simples
console.log(`Valor de num após incremento ${num}`)
//decrementação
num = 5;
console.log(`Valor atual de num ${num}`)
num--; //possivel usar num = num-1 porem num--; é mais simples
console.log(`Valor de num após decremento ${num}`)
//resto da divisão do primeiro pelo segundo
let resto = 17 % 5;
console.log(`Resto da divisão: ${resto}`)
//temperatura em Fahrenheit, converta-a para celsius
let temperaturaFahrenheit = 82;
let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9 //eu nao vou explicar esse calculo peguei do conversor do google sou pessimo em matematica
console.log(`Temperatura em celsius: ${temperaturaCelsius}`)
//dobro e metade
let num1 = 10;
let dobro = num1 * 2; //num1 vezes 2
let metade = num1 / 2; //num1 divido por 2
console.log(`Dobro: ${dobro}`)
console.log(`Metade: ${metade}`)
//exponenciação
let num2 = 3;
let resultadoExponencial = num1 ** num2;
console.log(`Resultado da exponenciação: ${resultadoExponencial}`)
