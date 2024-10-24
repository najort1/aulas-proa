import './style.css'

const ModalLoginError = ({ mensagem, setFecharModal }) => {
    return (
        <div className="modalTudo">
            <div className="modalContainer">
                <h2>Falha no login</h2>
                <p>{mensagem}</p>
                <button onClick={() => setFecharModal(false)}>Fechar</button>
            </div>
        </div>
    )
}

export default ModalLoginError; 