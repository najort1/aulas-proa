class ContaBancaria{

    #saldo;

    constructor(saldo){
        this.#saldo = saldo;
    }

    depositar(valor){
        this.#saldo += valor;
    }

    getSaldo(){
        return this.#saldo;
    }

    /**
     * @param {number} valor
     */
    set saldo(valor){
        if (valor < 0){
            console.log('Valor inválido');
        }else{
            this.#saldo = valor;
        }
    }

}
console.log("--------------------------------------------------");
class Animal {

    constructor(nome, idade,especie){
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }
    

    interagir(som){
        console.log('Reproduzindo som de animal ' + som);
    }

    dormir(){

        if(this.nome === 'Chupetão'){
            console.log('O cachorro chupetão ele não dorme');
            return;
        }

        console.log('Dormindo');
    }

    info(){
        console.log(`${this.nome} / ${this.idade} anos / ${this.especie}`);
    }

}

class Cachorro extends Animal{
    constructor(nome, idade, especie, raca){
        super(nome, idade, especie);
        this.raca = raca;
    }

    latir(){

        if(this.nome === 'Chupetão'){
            console.log('O cachorro chupetão deu um latido que ecoou por todo o universo');
            return;
        }

        console.log('Au au');
    }


    buscarBola(){

        if(this.nome === 'Chupetão'){
            console.log('O cachorro chupetão ele não busca bola ele busca planetas para brincar');
            return;
        }

        console.log('Buscando bola');
    }

    info(){
        super.info();
        console.log(`Raça: ${this.raca}`);
    }

}



class Funcionario {

    #salario;
    #nome
    
    constructor(nome, salario){
        this.#nome = nome;
        this.#salario = salario;
    }

    set salario(valor){
        if (valor < 0){
            console.log('Valor inválido');
        }else{
            this.#salario = valor;
        }
    }


    set nome(valor){
        if(typeof(valor) !== 'string'){
            console.log('Nome inválido');
        }else{
            this.#nome = valor;
        }
    }

    getNome(){
        return this.#nome;
    }


    trabalhar(){
        console.log('Trabalhando');
    }

    info(){
        console.log(`${this.#nome} / ${this.#salario}`);
    }
}

class Gerente extends Funcionario{
    
    constructor(nome, salario, setor){
        super(nome, salario);
        this.setor = setor;
    }

    liderar(){
        console.log(`Gerente: ${this.getNome()} liderando`);
    }

    info(){
        super.info();
        console.log(`Setor: ${this.setor}`);
    }
}

const clt = new Funcionario('João', 2000);
clt.info();
clt.trabalhar();
const gerente = new Gerente('Maria', 5000, 'TI');
gerente.info();
gerente.trabalhar();
gerente.liderar();