import { useState } from "react";
import "./styleLista.css";
import ConfirmarDeletar from "../confirmaDeleta/ConfirmarDeletar";
import ModalEditarInfos from "../modalEditarInformacoes/modalEditorInformacoes";
import ModalAdicionarVeiculos from "../modalAdicionarVeiculo/ModalAdicionarVeiculo";

const ListaDeVeiculos = ({ veiculos, handleDelete, handleEdit, handleCreate }) => {
  const [modalState, setModalState] = useState({
    showModal: false,
    isEditModal: false,
    isDeleteModal: false,
    selectedVeiculo: null,
  });

  const handleCloseModal = () => {
    setModalState({
      ...modalState,
      showModal: false,
      isEditModal: false,
      isDeleteModal: false,
    });
  };

  const handleEditClick = (veiculo) => {
    setModalState({
      showModal: true,
      isEditModal: true,
      isDeleteModal: false,
      selectedVeiculo: veiculo,
    });
  };

  const handleCreateClick = () => {
    setModalState({
      showModal: true,
      isEditModal: false,
      isDeleteModal: false,
      selectedVeiculo: {
        marca: "",
        modelo: "",
        ano: "",
        preco: "",
        imagem: "",
      },
    });
  };

  const handleDeleteClick = (veiculo) => {
    setModalState({
      showModal: true,
      isEditModal: false,
      isDeleteModal: true,
      selectedVeiculo: veiculo,
    });
  };

  return (
    <>
      <div className="opcoes">
        <button className="botaoAdicionar" onClick={handleCreateClick}>
          Adicionar Veículo
        </button>
        <input className="inputPesquisaLista" type="text" placeholder="Pesquisar por marca" />
      </div>

      <div className="listaVeiculos">
        <h1>Lista de Veículos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Imagem</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((veiculo) => (
              <tr key={veiculo.id}>
                <td>{veiculo.id}</td>
                <td>
                  <img src={veiculo.imagem} alt={veiculo.modelo} />
                </td>
                <td>{veiculo.marca}</td>
                <td>{veiculo.modelo}</td>
                <td>{veiculo.ano}</td>
                <td>R$ {veiculo.preco}</td>
                <td>
                  <button
                    className="botaoAcaoVeiculo"
                    onClick={() => handleEditClick(veiculo)}
                  >
                    Editar
                  </button>
                  <button
                    className="botaoAcaoVeiculo"
                    onClick={() => handleDeleteClick(veiculo)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {modalState.showModal && modalState.isEditModal && (
          <ModalEditarInfos
            veiculo={modalState.selectedVeiculo}
            onClose={handleCloseModal}
            handleEdit={handleEdit}
          />
        )}

        {modalState.showModal && !modalState.isEditModal && !modalState.isDeleteModal && (
          <ModalAdicionarVeiculos
            veiculo={modalState.selectedVeiculo}
            onClose={handleCloseModal}
            handleAdicionar={handleCreate}
          />
        )}

        {modalState.showModal && modalState.isDeleteModal && (
          <ConfirmarDeletar
            veiculo={modalState.selectedVeiculo}
            onClose={handleCloseModal}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
};

export default ListaDeVeiculos;
