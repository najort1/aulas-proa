class fabricarChupeta{
    constructor (cor, tamanho, preco){
        this.cor = cor;
        this.tamanho = tamanho;
        this.preco = preco;
    }

    detalhes(){
        return `Chupeta: ${this.cor} ${this.tamanho}`;
    }
}

class cachorro {
    constructor(nome, idade, chupeta){
        this.nome = nome;
        this.idade = idade;
        this.chupeta = chupeta;
    }

    detalhes(){
        return `${this.nome} / ${this.idade} anos / ${this.chupeta.detalhes()}`;
    }
}

const deuses = []

deuses.push(new cachorro('Cachorro chupetão', Infinity, new fabricarChupeta('rosa', 'pequena', 5)))
deuses.push(new cachorro('cachorro chupetinha', 5,new fabricarChupeta('azul','pequena',4)))

console.log(deuses);