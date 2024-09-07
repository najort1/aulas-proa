class Funcionario {
    #salario;

    constructor(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.#salario = salario;
    }

    set salario(valor) {
        if (valor < 0 || typeof valor !== 'number') {
            console.log('Valor inválido');
        } else {
            this.#salario = valor;
        }
    }

    trabalhar() {
        return 'Trabalhando';
    }

    info() {
        return `Nome: ${this.nome}<br><br>Idade: ${this.idade}<br><br>Cargo: ${this.cargo}<br><br>Salário: R$ ${this.#salario.toFixed(2)}`;
    }
}

class Engenheiro extends Funcionario {
    constructor(nome, idade, cargo, salario, area) {
        super(nome, idade, cargo, salario);
        this.area = area;
    }

    trabalhar() {
        return 'Engenheiro trabalhando';
    }

    info() {
        return `${super.info()} / Área: ${this.area}`;
    }
}

class Designer extends Funcionario {
    constructor(nome, idade, cargo, salario, ferramenta) {
        super(nome, idade, cargo, salario);
        this.ferramenta = ferramenta;
    }

    trabalhar() {
        return 'Designer trabalhando';
    }

    info() {
        return `${super.info()} / Ferramenta: ${this.ferramenta}`;
    }
}

// Instâncias dos funcionários
const funcionario = new Funcionario('CACHORRO CHUPETÃO', Infinity, 'CHEFE', Infinity);
const engenheiro = new Engenheiro('CARIMBO', 30, 'CARIMBADOR', 8000, 'Civil');
const designer = new Designer('IMPRESSORO', 35, 'IMPRESSIONA AS GATAS', 6000, 'Photoshop');

// Função para exibir as informações do funcionário
function mostrarInfo(funcionarioNome) {
    let info;
    switch (funcionarioNome) {
        case 'clorisvaldo':
            info = funcionario.info();
            document.getElementById('info-clorisvaldo').innerHTML = info;
            break;
        case 'carimbo':
            info = engenheiro.info();
            document.getElementById('info-carimbo').innerHTML = info;
            break;
        case 'impressoro':
            info = designer.info();
            document.getElementById('info-impressoro').innerHTML = info;
            break;
    }
}

// Função para mostrar o status de "trabalhar"
function trabalhar(funcionarioNome) {
    let status;
    let buttonParar;
    switch (funcionarioNome) {
        case 'clorisvaldo':
            status = funcionario.trabalhar();
            const gifClorisvaldo = document.querySelector('#funcionarios > div:nth-child(1) > div > img');
            buttonParar = document.querySelector('#funcionarios > div:nth-child(1) > div > button');
            
            gifClorisvaldo.style.display = 'block';
            buttonParar.style.display = 'block';
            break;
        case 'carimbo':
            status = engenheiro.trabalhar();
            const gifCarimbo = document.querySelector('#funcionarios > div:nth-child(2) > div > iframe');
            buttonParar = document.querySelector('#funcionarios > div:nth-child(2) > div > button');

            gifCarimbo.style.display = 'block';
            buttonParar.style.display = 'block';
            break;
        case 'impressoro':
            status = designer.trabalhar();
            const gifImpressoro = document.querySelector('#funcionarios > div:nth-child(3) > div > iframe');
            buttonParar = document.querySelector('#funcionarios > div:nth-child(3) > div > button');

            gifImpressoro.style.display = 'block';
            buttonParar.style.display = 'block';
            break;
    }
}



function pararDeTrabalhar(funcionarioNome) {
    let buttonParar;
    switch (funcionarioNome) {
        case 'clorisvaldo':
            const gifClorisvaldo = document.querySelector('#funcionarios > div:nth-child(1) > div > img');
            buttonParar = document.querySelector('#funcionarios > div:nth-child(1) > div > button');

            gifClorisvaldo.style.display = 'none';
            buttonParar.style.display = 'none';

            break;
        case 'carimbo':
            const gifCarimbo = document.querySelector('#funcionarios > div:nth-child(2) > div > iframe');
            buttonParar = document.querySelector('#funcionarios > div:nth-child(2) > div > button   ');

            gifCarimbo.style.display = 'none';
            buttonParar.style.display = 'none';
            break;
        case 'impressoro':
            const gifImpressoro = document.querySelector('#funcionarios > div:nth-child(3) > div > iframe');
            buttonParar = document.querySelector('#funcionarios > div:nth-child(3) > div > button');
            gifImpressoro.style.display = 'none';
            buttonParar.style.display = 'none';
            break;
    }
}