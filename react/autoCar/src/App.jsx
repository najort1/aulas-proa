import './App.css';
import Header from './components/Header/Header';
import Principal from './components/ConteudoPrincipal/principal';
import ListaDeVeiculos from './components/ListaDeVeiculos/ListaDeVeiculos';
import { useState, useEffect } from 'react';

function App() {
  const [veiculos, setVeiculos] = useState([]);
  const [veiculosAntigos, setVeiculosAntigos] = useState([]);
  const apiUrl = 'http://localhost:8080/api/produto/listar';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        setVeiculos(data);
        setVeiculosAntigos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/produto/deletar/${id}`, { method: 'DELETE' });
      setVeiculos((prevVeiculos) => prevVeiculos.filter((veiculo) => veiculo.id !== id));
      setVeiculosAntigos((prevVeiculos) => prevVeiculos.filter((veiculo) => veiculo.id !== id));
    } catch (error) {
      console.error('Erro ao deletar o veículo:', error);
    }
  };

  const handleEdit = async (id, veiculo) => {
    try {
      await fetch(`http://localhost:8080/api/produto/atualizar/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(veiculo),
      });
      setVeiculos((prevVeiculos) =>
        prevVeiculos.map((v) => (v.id === id ? { ...v, ...veiculo } : v))
      );
      setVeiculosAntigos((prevVeiculos) =>
        prevVeiculos.map((v) => (v.id === id ? { ...v, ...veiculo } : v))
      );
    } catch (error) {
      console.error('Erro ao editar o veículo:', error);
    }
  };

  const handleCreate = async (veiculo) => {
    try {
      if (!veiculo.id) {
        const ultimoId = veiculos.length ? veiculos[veiculos.length - 1].id + 1 : 1;
        veiculo.id = ultimoId;
      }

      if (!veiculo.imagem) {
        veiculo.imagem = "https://i.pinimg.com/564x/f3/6b/fa/f36bfa3b60559e7da0014f91250abf66.jpg";
      }

      const response = await fetch(`http://localhost:8080/api/produto/registrar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(veiculo),
      });
      const data = await response.json();
      setVeiculos((prevVeiculos) => [...prevVeiculos, data]);
      setVeiculosAntigos((prevVeiculos) => [...prevVeiculos, data]);
    } catch (error) {
      console.error('Erro ao criar o veículo:', error);
    }
  };

  return (
    <>
      <Header />
      <Principal />
      <ListaDeVeiculos
        veiculos={veiculos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleCreate={handleCreate}
        setVeiculos={setVeiculos}
        veiculosAntigos={veiculosAntigos}
      />
    </>
  );
}

export default App;
