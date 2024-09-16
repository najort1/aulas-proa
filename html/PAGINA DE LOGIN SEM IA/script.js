const usuariosCadastrados = [
    {
        login: "admin",
        senha: "admin"
    }
];

function validaForm() {
    const email = document.getElementById('emailUsuario').value;
    const senha = document.getElementById('senhaUsuario').value;
    const h1Resposta = document.getElementById('resultadoLogin');

    const usuarioValido = usuariosCadastrados.find(usuario => usuario.login === email && usuario.senha === senha);

    if (usuarioValido) {
        h1Resposta.textContent = 'Logado com sucesso!';
        h1Resposta.style.color = 'green';
    } else {
        h1Resposta.textContent = 'Login ou senha inválidos';
        h1Resposta.style.color = 'red';
    }
}

function cadastraUsuario() {
    const email = document.getElementById('CadEmailUsuario').value;
    const senha = document.getElementById('cadSenhaUsuario').value;

    if (email && senha) {
        usuariosCadastrados.push({
            login: email,
            senha: senha,
        });
        alert('Usuário cadastrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}