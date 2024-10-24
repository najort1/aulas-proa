import { useState } from "react";
import "./styleLista.css";
import ConfirmarDeletar from "../confirmaDeleta/ConfirmarDeletar";
import ModalEditarInfos from "../modalEditarInformacoes/modalEditorInformacoes";
import ModalAdicionarVeiculos from "../modalAdicionarVeiculo/ModalAdicionarVeiculo";
import { useEffect } from "react";
import Header from "../Header/Header";
import SessaoExpiradaModal from "../avisaSessaoExpirada/SessaoExpirada";

import axios from 'axios';


const ListaDeVeiculos = () => {

  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const validaJwt = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/produto/listar/validate",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          return true;
        } else if (response.status === 403) {
          localStorage.removeItem("token");
          return false;
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
        }
      }
    }

    return false;
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      let JwtValido = await validaJwt();

      if (!JwtValido) {
        setIsLogged(false);
        setIsSessionExpired(true);
      }else if(!localStorage.getItem('token')){
        setIsLogged(false);
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);


  const [veiculos, setVeiculos] = useState([]);
  const [veiculosAntigos, setVeiculosAntigos] = useState([]);
  const apiUrl = 'http://localhost:8080/api/produto/listar';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }});
        const respostaJson = JSON.parse(response.request.response);
        setVeiculos(respostaJson);
        setVeiculosAntigos(respostaJson);
      } catch (error) {
        console.error('Erro ao buscar os veículos:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/produto/deletar/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      setVeiculos((prevVeiculos) => prevVeiculos.filter((v) => v.id !== id));
      setVeiculosAntigos((prevVeiculos) => prevVeiculos.filter((v) => v.id !== id));
    } catch (error) {
      console.error('Erro ao deletar o veículo:', error);
    }
  };

  const handleEdit = async (id, veiculo) => {
    try {
      await fetch(`http://localhost:8080/api/produto/atualizar/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(veiculo),
      });
      setVeiculos((prevVeiculos) =>
        prevVeiculos.map((v) => (v.id === id ? veiculo : v))
      );
      setVeiculosAntigos((prevVeiculos) =>
        prevVeiculos.map((v) => (v.id === id ? veiculo : v))
      );
    } catch (error) {
      console.error('Erro ao editar o veículo:', error);
    }
  };

  const handleCreate = async (veiculo) => {
    try {

      if (!veiculo.imagem) {
        veiculo.imagem = "https://i.pinimg.com/564x/f3/6b/fa/f36bfa3b60559e7da0014f91250abf66.jpg";
      }

      const response = await fetch('http://localhost:8080/api/produto/registrar', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(veiculo),
      });
      const respostaJson = await response.json();
      setVeiculos([...veiculos, respostaJson]);
      setVeiculosAntigos([...veiculosAntigos, respostaJson]);
    } catch (error) {
      console.error('Erro ao adicionar o veículo:', error);
    }
  };


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

  const handlePesquisa = async (marca) => {
  
    try {
      const response = await axios.get(`http://localhost:8080/api/produto/listar/${marca.target.value}`,
        {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const respostaJson = JSON.parse(response.request.response);
      const respostaText = response.request.response


      if(respostaText.includes("Not Found") || respostaText === "[]" || response.status === 404 || marca.target.value === ""){
        return setVeiculos(veiculosAntigos);
      }
      
      setVeiculos(respostaJson);
    } catch {
      return setVeiculos(veiculosAntigos);
    }

  }

  return (
    <>
      <Header />
      <div className="opcoes">
        <button className="botaoAdicionar" onClick={handleCreateClick}>
          Adicionar Veículo
        </button>
        <input onChange={handlePesquisa} className="inputPesquisaLista" type="text" placeholder="Pesquisar por marca" />
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
      {isSessionExpired && <SessaoExpiradaModal onClose={() => setIsSessionExpired(false)} />}
    </>
  );
};

export default ListaDeVeiculos;
