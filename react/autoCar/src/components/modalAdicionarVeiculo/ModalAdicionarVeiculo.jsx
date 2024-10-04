import { useState } from 'react';
import './styleModalEditarInfos.css';

const ModalAdicionarVeiculos = ({ veiculo, onClose, handleAdicionar }) => {

  const [formData, setFormData] = useState({
    marca: veiculo.marca,
    modelo: veiculo.modelo,
    ano: veiculo.ano,
    preco: veiculo.preco,
    imagem: veiculo.imagem,
  });   
  
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateFields = () => {
    const currentYear = new Date()
    let hojeAno  = currentYear.getFullYear()
    
    if (formData.ano < 1900 || formData.ano > hojeAno) {
      setErrorMessage(`Ano inválido! Insira um valor entre 1900 e ${hojeAno}.`);
      return false;
    }

    if (formData.preco <= 0) {
      setErrorMessage("Preço inválido! O valor deve ser maior que zero.");
      return false;
    }

    setErrorMessage(""); // Limpa a mensagem de erro caso tudo esteja correto
    return true;
  };

  const handleEditEClose = () => {
    if (validateFields()) {
    console.log(formData)
      handleAdicionar(formData);
      onClose();
    }
  };

  return (
    <div className="warning-general">
      <div className="confirm-div">
        <p>
          <strong>
            Adicionar um veiculo
          </strong>
        </p>
        <div className="formularioEdicao">
          <div className="marca">
            <label>Marca</label>
            <input type="text" name="marca" value={formData.marca} onChange={handleChange} />
          </div>
          <div className="modelo">
            <label>Modelo</label>
            <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} />
          </div>
          <div className="ano">
            <label>Ano</label>
            <input type="number" name="ano" value={formData.ano} onChange={handleChange} />
          </div>
          <div className="preco">
            <label>Preço</label>
            <input type="number" name="preco" value={formData.preco} onChange={handleChange} />
          </div>
          <div className="imagem">
          <label>Imagem</label>
          <input type="text" name="imagem" value={formData.imagem} onChange={handleChange} />
        </div>
        </div>



        <div className="modals-container">
          <button className="red-btn" onClick={onClose}>Cancelar</button>
          <button className="green-btn" onClick={handleEditEClose}>Adicionar</button>
        </div>

        <div className="alertarErro">
          <span className="retorno">{errorMessage}</span>
        </div>

      </div>
    </div>
  );
};

export default ModalAdicionarVeiculos;
