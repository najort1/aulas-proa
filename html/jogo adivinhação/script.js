const numeroCerto = Math.floor(Math.random() * 100) + 1; // Inicializa o número aleatório
let tentativas = 0; // Inicializa as tentativas do usuário
let tentativaAnterior; // Inicializa a tentativa anterior para ajudar o usuário
let historicoTentativas = []; // Inicializa o histórico de tentativas

function chute(chuteUsuario) {
    const regexNumeros = /\d+/g; // Regex para capturar apenas números
    const regexLetras = /[a-zA-Z]/g; // Regex para validar se há letras
    let chuteUsuarioStr = String(chuteUsuario); // Converte o input para string

    if (!chuteUsuarioStr) { // Verifica se o input do usuário está vazio
        exibirMensagem("Digite algum número", "yellow");
        return;
    }

    if (regexLetras.test(chuteUsuarioStr)) { // Verifica se o input contém letras
        const numerosCapturados = chuteUsuarioStr.match(regexNumeros); // Captura os números do input
        if (numerosCapturados) {
            chuteUsuario = parseInt(numerosCapturados[0]); // Captura o resultado do regex
        } else {
            exibirMensagem("Digite apenas números", "yellow");
            return;
        }
    }

    if (chuteUsuario === tentativaAnterior) {
        exibirMensagem("Você já chutou esse número na sua última tentativa, tente outro", "yellow");
        return;
    }

    if (historicoTentativas.includes(chuteUsuario)) {
        exibirMensagem("Você já chutou esse número, tente outro", "red");
        return;
    }

    if (chuteUsuario > 100) {
        tentativaAnterior = chuteUsuario;
        historicoTentativas.push(chuteUsuario);
        exibirMensagem("O número é entre 1 e 100", "yellow");
        return;
    }

    tentativas++; // Aumenta as tentativas do usuário
    if (chuteUsuario < numeroCerto) {
        tentativaAnterior = chuteUsuario;
        historicoTentativas.push(chuteUsuario);
        exibirMensagem("Chute muito baixo!", "red");
    } else if (chuteUsuario > numeroCerto) {
        tentativaAnterior = chuteUsuario;
        historicoTentativas.push(chuteUsuario);
        exibirMensagem("Chute muito alto!", "red");
    } else {
        exibirMensagem("Parabéns, você acertou!", "green");
        document.getElementById("tentativas").innerHTML = `Acertou em ${tentativas}`;
        return; // Retorna para não mostrar a quantidade de tentativas e manter o texto de acertou em {tentativas}
    }
    document.getElementById("tentativas").innerHTML = `Você fez ${tentativas} tentativas`;
}

function exibirMensagem(mensagem, cor) { //função para evitar repitação de codigos no if
    const resultadoTentativa = document.getElementById("resultadoTentativa");
    resultadoTentativa.innerHTML = mensagem;
    resultadoTentativa.style.color = cor;
}
