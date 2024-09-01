const cliente = {
  nome: "Cachorro Chupetão",
  saldo: 1000,
  extrato: [],
};

jaCriouInputSaque = false;
jaCriouInputDeposito = false;
jaCriouInputTransferir = false;

function capturaDataAtual() {
  const data = new Date();
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minuto = data.getMinutes();

  return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

function selectQuery(query) {
  return document.querySelector(query);
}

function fazerTransferencia(conta, valor) {
  if (!conta || !valor || typeof conta != "number") {
    console.log("Informe uma conta ou valor valido!");
    return {
      status: false,
      mensagem: "Operação não autorizada ( conta ou valor invalido )",
    };
  }

  if (typeof valor != "number") {
    console.log("Precisa ser numero");
    return {
      status: false,
      mensagem: "Operação não autorizada ( valor invalido )",
    };
  }

  if (cliente.saldo >= valor) {
    cliente.saldo -= valor;
    cliente.extrato.push({
      tipo: "transferencia",
      valor: valor,
      conta: conta,
      data: capturaDataAtual(),
    });
    return {
      status: true,
      mensagem: `Transferencia enviada com sucesso !`,
    };
  } else {
    return {
      status: false,
      mensagem: "Operação não autorizada ( saldo insuficiente )",
    };
  }
}

function depositar(valor) {
  if (valor < 0 || !valor) {
    return {
      status: false,
      mensagem: "Operação não autorizada ( valor invalido )",
    };
  }

  cliente.saldo += valor;
  cliente.extrato.push({
    tipo: "deposito",
    valor: valor,
    data: capturaDataAtual(),
  });
  return {
    status: true,
    mensagem: "Depósito realizado com sucesso",
  };
}

function sacar(valor) {
  if (valor > cliente.saldo || valor < 0 || !valor) {
    return {
      status: false,
      mensagem: "Operação não autorizada ( saldo insuficiente )",
    };
  }

  cliente.saldo -= valor;

  cliente.extrato.push({
    tipo: "saque",
    valor: valor,
    data: capturaDataAtual(),
  });

  return {
    status: true,
    mensagem: "Saque realizado com sucesso",
  };
}

function saldoAtual() {
  return cliente.saldo;
}

function exibeSaldo() {
  const classSaldo = selectQuery(
    "body > div.container > div.funcoes > div.mostraSaldo > h1"
  );
  classSaldo.innerHTML = `Chupetas: ${cliente.saldo}`;
  return;
}

function atualizaValores(valor) {
  formatarExtrato(extrato());
  exibeSaldo();
}

function extrato() {
  if (cliente.extrato.length < 1) {
    return `<p>Sem movimentações</p>`;
  }

  return cliente.extrato;
}

function formatarExtrato(extrato) {
  const modal = selectQuery("#modalExtrato");
  const extratoConteudo = selectQuery(
    "#modalExtrato > div > div > table > tbody"
  );
  extratoConteudo.innerHTML = "";

  extrato.forEach((item) => {
    const tr = document.createElement("tr");
    const tdTipo = document.createElement("td");
    const tdValor = document.createElement("td");
    const tdData = document.createElement("td");

    tdTipo.innerHTML = item.tipo;
    tdValor.innerHTML = item.valor;
    tdData.innerHTML = item.data;

    tr.appendChild(tdTipo);
    tr.appendChild(tdValor);
    tr.appendChild(tdData);

    extratoConteudo.appendChild(tr);
  });
}

function inicia() {
  const classNome = selectQuery(
    "body > div.headerPagina > div.informacoesUsuario > span.nome"
  );
  const classSaldo = selectQuery(
    "body > div.container > div.funcoes > div.mostraSaldo > h1"
  );

  classNome.innerHTML = `Bem vindo, ${cliente.nome}!`;
  classSaldo.innerHTML = `Chupetas: ${cliente.saldo}`;
  formatarExtrato(extrato());
}

function processaEscolha(escolha) {
  let valor;
  let conta;
  let button;
  let inputSenha;

  switch (escolha) {
    case 1:
      if (jaCriouInputDeposito) return;
      jaCriouInputDeposito = true;
      const elementoDeposito = selectQuery(
        "body > div.container > div.funcoes > div.deposito"
      );
      criarInput(elementoDeposito, "Valor do depósito", "deposito");
      break;

    case 2:
      if (jaCriouInputSaque) return;
      jaCriouInputSaque = true;
      const elementoSaque = selectQuery(
        "body > div.container > div.funcoes > div.saque"
      );
      criarInput(elementoSaque, "Valor do saque", "saque");
      break;

    case 3:
      if (jaCriouInputTransferir) return;
      jaCriouInputTransferir = true;
      const elementoTransferir = selectQuery(
        "body > div.container > div.funcoes > div.transferir"
      );
      criarInput(elementoTransferir, "Valor da transferencia", "transferir");
      break;

    default:
      console.log("Opção inválida.");
  }
}
function esconderTodosInputs() {
  jaCriouInputDeposito = false;
  jaCriouInputSaque = false;
  jaCriouInputTransferir = false;

  const todosInputs = document.querySelectorAll(
    ".senhaDeposito, .valorDeposito, .confirmarButtonDeposito, .senhaSaque, .valorSaque, .confirmarButtonSaque, .senhaTrans, .valorTrans, .confirmarButtonTrans, .contaDestinoTrans"
  );
  todosInputs.forEach((input) => {
    input.style.display = "none";
  });
}

function criarInput(seletor, texto, tipo) {
  esconderTodosInputs();

  const nomesClasses = {
    desposito: [".senhaDeposito", ".valorDeposito", ".confirmarButtonDeposito"],
    saque: [".senhaSaque", ".valorSaque", ".confirmarButtonSaque"],
    transferir: [
      ".senhaTrans",
      ".valorTrans",
      ".confirmarButtonTrans",
      ".contaDestinoTrans",
    ],
  };

  if (tipo == "deposito") {
    const inputSenha = selectQuery(nomesClasses.desposito[0]);
    const inputValor = selectQuery(nomesClasses.desposito[1]);
    const button = selectQuery(nomesClasses.desposito[2]);

    inputSenha.setAttribute("type", "password");
    inputSenha.setAttribute("placeholder", "Digite sua senha");
    inputSenha.style.display = "block";

    inputValor.setAttribute("type", "text");
    inputValor.style.display = "block";

    button.style.display = "block";

    button.onclick = function () {
      const valor = parseInt(inputValor.value);
      const senha = inputSenha.value;

      if (senha == "3589") {
        console.log(`Depósito de R$ ${valor} na conta`);
        const resultado = depositar(valor);
        atualizaValores(valor);
        informarResultado(
          resultado.mensagem,
          resultado.status ? "sucesso" : "erro"
        );
      } else {
        informarResultado("Senha incorreta. Tente novamente.", "erro");
      }
    };
  } else if (tipo == "saque") {
    const inputSenha = selectQuery(nomesClasses.saque[0]);
    const inputValor = selectQuery(nomesClasses.saque[1]);
    const button = selectQuery(nomesClasses.saque[2]);

    inputSenha.setAttribute("type", "password");
    inputSenha.setAttribute("placeholder", "Digite sua senha");
    inputSenha.style.display = "block";

    inputValor.setAttribute("type", "text");
    inputValor.style.display = "block";

    button.style.display = "block";

    button.onclick = function () {
      const valor = parseInt(inputValor.value);
      const senha = inputSenha.value;

      if (senha == "3589") {
        console.log(`Saque de R$ ${valor} na conta`);
        const resultado = sacar(valor);
        atualizaValores();
        informarResultado(
          resultado.mensagem,
          resultado.status ? "sucesso" : "erro"
        );
      } else {
        informarResultado("Senha incorreta. Tente novamente.", "erro");
      }
    };
  } else {
    const inputSenha = selectQuery(nomesClasses.transferir[0]);
    const inputValor = selectQuery(nomesClasses.transferir[1]);
    const button = selectQuery(nomesClasses.transferir[2]);
    const inputConta = selectQuery(nomesClasses.transferir[3]);

    inputSenha.setAttribute("type", "password");
    inputSenha.setAttribute("placeholder", "Digite sua senha");
    inputSenha.style.display = "block";

    inputValor.setAttribute("type", "text");
    inputValor.style.display = "block";

    inputConta.setAttribute("type", "text");
    inputConta.style.display = "block";

    button.style.display = "block";

    button.onclick = function () {
      const valor = parseInt(inputValor.value);
      const senha = inputSenha.value;
      const conta = parseInt(inputConta.value);

      if (senha == "3589") {
        console.log(`Transferência de R$ ${valor} para a conta ${conta}`);
        const resultado = fazerTransferencia(conta, valor);
        atualizaValores();
        informarResultado(
          resultado.mensagem,
          resultado.status ? "sucesso" : "erro"
        );
      } else {
        informarResultado("Senha incorreta. Tente novamente.", "erro");
      }
    };
  }
}

function mostrarInputs(texto, tipo, classe) {
  const input = document.querySelector(`.${classe}`);
  input.setAttribute("type", tipo);
  input.setAttribute("placeholder", texto);
  input.classList.add("input-animado");
  input.style.display = "block";
}

function mostrarBotaoConfirmar(classe) {
  const button = document.querySelector(`.${classe}`);
  button.style.display = "block";
}

function destruirInput(id) {
  const input = document.getElementById(id);
  if (input) {
    input.remove();
  }
}

function informarResultado(mensagem, tipo) {
  if (tipo == "erro") {
    const classResultado = selectQuery(
      "body > div.container > div > div.resultado > h1"
    );
    classResultado.innerHTML = mensagem;
    classResultado.style.color = "red";
  } else {
    const classResultado = selectQuery(
      "body > div.container > div > div.resultado > h1"
    );
    classResultado.innerHTML = mensagem;
    classResultado.style.color = "green";
  }
}

var modal = document.getElementById("modalExtrato");

var btn = document.getElementById("btnExtrato");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

inicia();
