import { useState } from 'react';
import './styleModalEditarInfos.css';

const ModalEditarInfos = ({ veiculo, onClose, handleEdit }) => {
  const [formData, setFormData] = useState({
    marca: veiculo.marca,
    modelo: veiculo.modelo,
    ano: veiculo.ano,
    preco: veiculo.preco,
    imagem: veiculo.imagem,
  });   
  
  const [errorMessage, setErrorMessage] = useState(""); // Estado para armazenar a mensagem de erro

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateFields = () => {
    const currentYear = new Date()
    let anoHoje = currentYear.getFullYear()
    
    // Validação do ano
    if (formData.ano < 1900 || formData.ano > anoHoje) {
      setErrorMessage(`Ano inválido! Insira um valor entre 1900 e ${anoHoje}.`);
      return false;
    }

    // Validação do preço
    if (formData.preco <= 0) {
      setErrorMessage("Preço inválido! O valor deve ser maior que zero.");
      return false;
    }

    setErrorMessage(""); // Limpa a mensagem de erro caso tudo esteja correto
    return true;
  };

  const handleEditEClose = () => {
    if (validateFields()) {
      handleEdit(veiculo.id, formData);
      onClose();
    }
  };

  return (
    <div className="warning-general">
      <div className="confirm-div">
        <p>
          <strong>
            Você vai editar o veículo {veiculo.marca} {veiculo.modelo} de ID {veiculo.id}
          </strong>
        </p>
        <div className="formularioEdicao">
          <div className="marca">
            <label>Marca</label>
            <input className='inputModalEdit' type="text" name="marca" value={formData.marca} onChange={handleChange} />
          </div>
          <div className="modelo">
            <label>Modelo</label>
            <input className='inputModalEdit' type="text" name="modelo" value={formData.modelo} onChange={handleChange} />
          </div>
          <div className="ano">
            <label>Ano</label>
            <input className='inputModalEdit' type="number" name="ano" value={formData.ano} onChange={handleChange} />
          </div>
          <div className="preco">
            <label>Preço</label>
            <input className='inputModalEdit' type="number" name="preco" value={formData.preco} onChange={handleChange} />
          </div>
            <div className="imagem">
                <label>Imagem</label>
                <input className='inputModalEdit' type="text" name="imagem" value={formData.imagem} onChange={handleChange} />
            </div>

        </div>
        <div className="modals-container">
          <button className="red-btn" onClick={onClose}>Cancelar</button>
          <button className="green-btn" onClick={handleEditEClose}>Editar</button>
        </div>

        <div className="alertarErro">
          <span className="retorno">{errorMessage}</span>
        </div>

      </div>
    </div>
  );
};

export default ModalEditarInfos;
