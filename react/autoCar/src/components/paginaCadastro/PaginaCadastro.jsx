import './style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaginaCadastro = () => {

    const navigate = useNavigate();

    const navegaProPainel = () => {
        navigate('/painel');
    }

    const navegaProLogin = () => {
        navigate('/');
    }


    const handleCadastro = async () => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

        if (senha !== confirmacaoSenha) {
            document.querySelector('.respostaApi').innerText = 'As senhas não conferem.';
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/registrar', {
                nome,
                email,
                senha
            });

            const respostaJson = response.data;

            if (respostaJson.status === 500) {
                document.querySelector('.respostaApi').innerText = respostaJson.detail;
                if (localStorage.getItem('token')) {
                    localStorage.removeItem('token');
                }
            } else if (response.status === 201) {
                const elementoResposta = document.querySelector('.respostaApi');
                elementoResposta.style.color = 'green';
                return document.querySelector('.respostaApi').innerText = 'Cadastro realizado com sucesso. Volte para a tela de login.';
            }

        } catch (error) {
            if (error.response && error.response.data && error.response.data.detail) {
                document.querySelector('.respostaApi').innerText = error.response.data.detail;
            } else {
                document.querySelector('.respostaApi').innerText = 'Erro ao fazer login.';
            }
            console.error('Erro ao fazer login:', error);
        }
    }

    return (
        <div className='paiDoCadastro'>
            <div className="container">
                <div className="containerInputs">
                    <div className="containerInput">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" />
                    </div>
                    <div className="containerInput">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="containerInput">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" />
                    </div>
                    <div className="containerInput">
                        <label htmlFor="confirmacaoSenha">Confirmação da senha:</label>
                        <input type="password" id="confirmacaoSenha" name="confirmacaoSenha" />
                    </div>
                    <div className="containerInput">
                        <button onClick={handleCadastro}>Cadastrar</button>
                    </div>
                    <div className="containerInput">
                        <button onClick={navegaProLogin}>Voltar para o login</button>
                    </div>
                    <div className="containerInput">
                        <p className="respostaApi"></p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PaginaCadastro;