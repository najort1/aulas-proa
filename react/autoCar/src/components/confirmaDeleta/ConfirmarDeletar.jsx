import './ConfirmarDeletar.css';

const ConfirmarDeletar = ({ veiculo, onClose, handleDelete }) => {

  const handleDeleteEClose = (id) => {
    handleDelete(id);
    onClose();
  };

  return (
    <div className="warning-general">
      <div className="confirm-div">
        <p>
          <strong>
            O veículo {veiculo.modelo} será eliminado.
          </strong>
          <span>Tem certeza de que deseja continuar?</span>
        </p>
        <div className="modals-container">
          <button className="red-btn" onClick={onClose}>Cancelar</button>
          <button className="green-btn" onClick={() => handleDeleteEClose(veiculo.id)}>Deletar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmarDeletar;