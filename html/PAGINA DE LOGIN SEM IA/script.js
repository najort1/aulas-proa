let usuariosCadastrado = [
    {
        login: "admin",
        senha: "admin"
    }
]


function validaForm() {
    const email = document.getElementById('emailUsuario').value;
    const senha = document.getElementById('senhaUsuario').value;
    const h1Resposta = document.getElementById('resultadoLogin');

    for (usuario of usuariosCadastrado) {
        
        if (usuario['login'] === email && usuario['senha'] === senha) {
            h1Resposta.textContent = 'Logado com sucesso !';
            h1Resposta.style.color = 'green';
            return;
        }
    }

        h1Resposta.textContent = 'Login ou senha invalidos';
        h1Resposta.style.color = 'red';


}

function cadastraUsuario() {
    const email = document.getElementById('CadEmailUsuario').value;
    const senha = document.getElementById('cadSenhaUsuario').value;
    usuariosCadastrado.push({
        login: email,
        senha: senha,
    })
}
