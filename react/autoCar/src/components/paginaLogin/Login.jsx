import './styles.css';
import axios from 'axios';

const LoginPage = () => {

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
            }else if(response.status === 200){
                const bearer = respostaJson.token;
                localStorage.setItem('token', bearer);
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
        <div>
            <div className="container">
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
                    <button className="botaoCadastrar">Cadastrar</button>
                </div>

                <p className="respostaApi"></p>
            </div>
        </div>
    );
};

export default LoginPage;