import './style.css'
import { useNavigate } from 'react-router-dom';


const SessaoExpiradaModal = ({ onClose }) => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/');
    }

    return (
        <div className="modalSessao">
            <div className="containerModal">
                <h1>Sessão expirada</h1>
                <p>Sua sessão expirou. Por favor, faça login novamente.</p>
                <button onClick={handleLogin}>Fechar</button>
            </div>
        </div>
    );
    }

export default SessaoExpiradaModal;