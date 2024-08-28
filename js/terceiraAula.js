function calculadora(num1,num2,operacao){
    
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number') return 'O input é obrigatorio ser somente numeros ! ' //verificar se o input é realmente numeros

    num1 = parseFloat(num1) //captura somente numeros inteiro
    num2 = parseFloat(num2); //captura somente numeros inteiro

    //utilizar ifs nesse formato é uma pessima pratica só fiz por que é um codigo simples

    if(operacao.includes('som')) return num1+num2; //resultado soma
    if(operacao.includes('sub')) return num1-num2; // resultado subtração
    if(operacao.includes('div')) return operacao.includes('div') ? (num2 !== 0 ? Math.floor(num1/num2) : 'Não da pra dividir por zero') : null; // operação ternaria para verificar se o usuario digitou 0 no segundo numero
    if(operacao.includes('mul')) return num1*num2; //resultado multiplicação
    if(operacao.includes('expo')) return num1**num2; //resultado exponenciação

    return 'Operação invalida'; //caso não seja nenhuma das operações retornar operação invalida
}


function validaNumeroPrimo(numero) {
  // Verifica se o numero é menor ou igual a 1

  if(typeof(numero) !== 'number') return 'O input é obrigatorio ser um numero ! ' //verificar se o input é realmente numeros

  if (numero <= 1) return false;

  // Loop para verificar se o numero é divisivel por algum numero entre 2 e o proprio numero - 1
  for (let i = 2; i < numero; i++) {
    // Se o numero for divisivel por i, não é primo
    if (numero % i === 0) {
      return false; // Retorna falso se encontrar um divisor
    }
  }
  // Retorna verdadeiro se o numero for maior que 1, indicando que é primo
  return numero > 1;
}

function contadorDeCaracterEspecial(string){
  let cont = 0; //contaodr zerado pra contar quantas ocorrencias aparecem
  const caracteres = ['@',"#","$","%","&"] //array de caracteres especiais
  
  const contadorEspecifico = {
    '@':0,
    '#':0,
    '$':0,
    '%':0,
    '&':0
  } // objeto para contar quantas vezes cada caracter aparece

  for(let letra of string){ //verificar cada letra da string
    if(caracteres.includes(letra)){ //se algum elemento do array de caracteres incluir a letra da string aumentar o contador
      cont++; // aumenta o contador
      contadorEspecifico[letra]++; //aumenta o contador especifico
      }
  }
  console.log(contadorEspecifico) //mostra quantas vezes cada caracter apareceu
  return cont; // retorna o contador após o fim do loop
}

function verificaAlunoAprovado(notas){
  //verifica se o input é um array e também verifica o tamanho do array caso seja um array
  if(typeof(notas) !== 'object' || typeof(notas) == 'object' && notas.length !== 4) return false;
  let somaTotalDasNotas = 0; // declarar variavel para somar as notas

  for(let nota of notas){ //loop para somar todas as notas
    if(nota < 0 || nota > 10) return false; //verifica se a nota do aluno é valida
    somaTotalDasNotas = nota+somaTotalDasNotas; //somar todas as notas
  }
  //calculo da media
  const mediaAluno = somaTotalDasNotas/4;
  console.log(`Media do aluno: ${mediaAluno}`)

  if(mediaAluno >= 7) return 'Aprovado'; //maior ou igual a 7 retorna aprovado
  if(mediaAluno > 5 && mediaAluno < 7) return 'Recuperação'; //entre 5 e 7 recuperação
  return 'Reprovado' // reprovado


}

console.log(contadorDeCaracterEspecial("dasfsad124713615521638712%!@%!¨#¨!*"))