// Array de objetos contendo informações sobre o DOM
const textos = [
    {
        titulo: "Definição do DOM",
        texto: "O DOM (Document Object Model) é uma interface que representa um documento HTML e que permite a manipulação do conteúdo e da estrutura do documento.",
        tempo: 40,
    },
    {
        titulo: 'O que é o DOM e qual é a sua importância na web?',
        texto: "O DOM é uma interface de programação para documentos HTML e XML. Ele representa a página web de forma estruturada, permitindo a manipulação do conteúdo, da estrutura e do estilo da página por meio de scripts.",
        tempo: 30,
    },
    {
        titulo: "Como o DOM relaciona a estrutura HTML de uma página com o navegador?",
        texto: "O DOM é uma representação em memória da estrutura de um documento HTML. Ele é criado pelo navegador quando uma página é carregada e é usado para interagir com o conteúdo da página por meio de scripts.",
        tempo: 20,
    },
    {
        titulo: 'Como o DOM organiza os elementos de uma página web em uma estrutura hierárquica?',
        texto: "O DOM organiza os elementos de uma página web em uma estrutura hierárquica de árvore. Cada elemento da página é representado por um nó na árvore, e os elementos são organizados de acordo com a sua relação de pai e filho.",
        tempo: 10,
    },
    {
        titulo: 'Exemplos de como essa hierarquia é representada (ex: árvore do DOM).',
        texto: "A hierarquia do DOM é representada por uma árvore, onde cada elemento da página é representado por um nó. Os elementos são organizados de acordo com a sua relação de pai e filho, formando uma estrutura hierárquica.",
        tempo: 20,
    }
];

// Variável para controlar se o texto está sendo digitado
let digitando = false;
// Índice atual do array de textos
let indiceAtual = 0;
// Seleciona o botão que inicia a exibição das informações
const botaoPratica = document.querySelector('.botaoFuncoesAppendChild');

// Função que exibe a informação do array de textos
function exibirInformacao() {
    // Se já estiver digitando, não faz nada
    if (digitando) return;

    // Seleciona os elementos HTML onde as informações serão exibidas
    const texto = document.querySelector('.textoInformando');
    const botao = document.querySelector('.botaoFuncoes');
    const titulo = document.querySelector('.tituloDaFuncao');
    const divTextoInforma = document.querySelector('.ClassTextoInforma');

    // Se todos os textos já foram exibidos, finaliza a exibição
    if (indiceAtual >= textos.length) {
        finalizarExibicao(divTextoInforma, texto, titulo, botao);
        return;
    }

    // Adiciona uma borda à div que contém o texto
    divTextoInforma.style.border = '2px solid white';
    // Define o título e o texto do botão
    titulo.innerHTML = textos[indiceAtual].titulo;
    botao.innerHTML = 'Próximo';

    // Inicia a animação de digitação do texto
    animacaoDigitaTexto(texto, textos[indiceAtual].texto, textos[indiceAtual].tempo);
    // Incrementa o índice para o próximo texto
    indiceAtual++;
}

// Função que finaliza a exibição das informações
function finalizarExibicao(divTextoInforma, texto, titulo, botao) {
    // Remove a borda da div
    divTextoInforma.style.border = 'none';
    // Define o texto final e o título
    texto.innerHTML = 'Agora que você já sabe o que é o DOM, que tal ver na prática como ele funciona?';
    titulo.innerHTML = 'Fim da aula';
    // Altera o texto do botão e define uma ação para ele
    botao.innerHTML = 'Vamos lá!';
    botao.onclick = () => window.location.href = 'pratica.html';
}

// Função que anima a digitação do texto
function animacaoDigitaTexto(elemento, texto, delay) {
    // Define que está digitando
    digitando = true;
    // Limpa o conteúdo do elemento
    elemento.innerHTML = '';
    // Divide o texto em caracteres individuais
    const textoArray = texto.split('');

    // Para cada caractere, adiciona ao elemento com um atraso
    textoArray.forEach((char, i) => {
        setTimeout(() => {
            elemento.innerHTML += char;
        }, delay * i);
    });

    // Define que terminou de digitar após o tempo necessário
    setTimeout(() => {
        digitando = false;
    }, delay * textoArray.length);
}

// Função que adiciona um novo parágrafo usando appendChild
function aprendeChild() {
    const novo = document.createElement("p");
    novo.textContent = "Olá, eu sou um texto de exemplo para o método appendChild.";
    document.querySelector('.textoInformandoAppendChild').appendChild(novo);
}

// Função que limpa o conteúdo usando innerHTML
function limparChild() {
    document.querySelector('.textoInformandoAppendChild').innerHTML = '';
}

// Função que altera a cor dos elementos usando querySelectorAll
function aprendequerySelectorAll() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black'];
    const elementos = document.querySelectorAll('.textoInformandoQuery');
    const cor = colors[Math.floor(Math.random() * colors.length)];

    elementos.forEach(elemento => {
        elemento.style.color = cor;
    });
}

// Função que substitui um elemento usando replaceChild
function aprendereplaceChild() {
    const novo = document.createElement("p");
    const textos = [
        'Olá, eu sou um texto de exemplo para o método replaceChild.',
        'Olá, eu sou um novo texto de exemplo para o método replaceChild.',
        'Olá, eu sou um texto diferente para o método replaceChild.',
        'Olá, eu sou um novo texto para o método replaceChild.',
        'Olá, eu sou um texto de substituição para o método replaceChild.'
    ];
    const textoAleatorio = Math.floor(Math.random() * textos.length);

    novo.textContent = textos[textoAleatorio];
    document.querySelector('.textoInformandoReplaceChild').replaceWith(novo);
}

// Adiciona um evento de clique ao botão para iniciar a exibição das informações
document.querySelector('.botaoFuncoes').addEventListener('click', exibirInformacao);