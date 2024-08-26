let pessoa1 = {
    nome: 'João',
    idade: 20,
    altura: 1.80,
    profissao: 'programador',
    empregado: true,    
    saudacao: function(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!`)
    }
}

pessoa1.saudacao()

let pessoa2 = {
    nome: 'Maria',
    idade: 25,
    altura: 1.70,
    profissao: 'advogada',
    empregado: true,
    saudacao: pessoa1.saudacao
}

let texto = "Eu odeio figma"
const textoArray = texto.split(' ')
const indiceFigma = textoArray.indexOf('figma')
console.log(indiceFigma)

pessoa2.saudacao()

const nomeCompleto = 'joão silva oliveira';
const nomeArray = nomeCompleto.split(' ');

const nomeFormatado = nomeArray.map((nome) => {
    return nome.charAt(0).toUpperCase() + nome.slice(1)
}).join(' ')

let texto1 = "javascript é horrivel javascript é horrivel javascript é horrivel javascript é horrivel javascript é horrivel"

const quantosJavas = texto1.split('javascript').length - 1
for(let i = 0; i < quantosJavas; i++){
    texto1 = texto1.replace('javascript', 'java')
}
console.log(texto1)


let arrayNomes = ['joão', 'maria', 'josé', 'matheus', 'lucas', 'pedro', 'carlos']

arrayNomes.push('edurado')
console.log(arrayNomes)
arrayNomes.shift()
console.log(arrayNomes)
console.log(`O array tem ${arrayNomes.length} elementos`)

arrayNomes = arrayNomes.map((nome) => {
    return nome.toUpperCase()
})
console.log(arrayNomes)

let carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: '1000 ANTES DE CRISTO',
}
console.log(carro)

carro.cor = 'vermelho'
console.log(carro)
delete carro.ano
console.log(carro)
console.log(`Marca: ${carro.marca} | Modelo: ${carro.modelo} | Cor: ${carro.cor}`)