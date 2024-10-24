import './styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ModalLoginError from '../modalLoginError/ModalLoginError';

const LoginPage = () => {

    const navigate = useNavigate();

    const navegaProPainel = () => {
        navigate('/painel');
    }

    const navegaProCadastro = () => {
        navigate('/cadastro');
    }
    
    const [mensagemErro, setMensagemErro] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleLogin = async () => {
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email,
                senha
            });

            const respostaJson = response.data;

            if (respostaJson.status === 500) {
                document.querySelector('.respostaApi').innerText = respostaJson.detail;
                if(localStorage.getItem('token')) {
                    localStorage.removeItem('token');
                }
            } else if(response.status === 200) {
                const bearer = respostaJson.token;
                localStorage.setItem('token', bearer);
                navegaProPainel();
            }

        } catch (error) {
            if (error.response && error.response.data && error.response.data.detail) {
                setMensagemErro(error.response.data.detail);
                setMostrarModal(true);
            } else {
                setMensagemErro('Erro ao fazer login');
                setMostrarModal(true);
            }
            console.error('Erro ao fazer login:', error);
        }
    }

    return (
        <div className='paiDoLogin'>
            <div className="container">
                <div className="titulo">
                    <h1>Login</h1>
                </div>

                <div className="containerInputs">
                    <div className="containerInput">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="containerInput">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" />
                    </div>
                </div>
                <div className="containerButtons">
                    <button className="botaoLogin" onClick={handleLogin}>Login</button>
                    <button className="botaoCadastrar" onClick={navegaProCadastro}>Cadastrar</button>
                </div>
            </div>
            {mostrarModal && <ModalLoginError 
            mensagem={mensagemErro}
            setFecharModal={setMostrarModal}
             />}
        </div>
    );
};

export default LoginPage;