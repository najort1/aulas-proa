import './App.css';
import Header from './components/Header/Header';
import Principal from './components/ConteudoPrincipal/principal';
import ListaDeVeiculos from './components/ListaDeVeiculos/ListaDeVeiculos';
import { useState, useEffect } from 'react';

function App() {
  const [veiculos, setVeiculos] = useState([]);
  const apiUrl = 'http://localhost:3000/products';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        setVeiculos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
      setVeiculos((prevVeiculos) => prevVeiculos.filter((veiculo) => veiculo.id !== id));
    } catch (error) {
      console.error('Erro ao deletar o veículo:', error);
    }
  };

  const handleEdit = async (id, veiculo) => {
    try {
      await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(veiculo),
      });
      setVeiculos((prevVeiculos) =>
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

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(veiculo),
      });
      const data = await response.json();
      setVeiculos((prevVeiculos) => [...prevVeiculos, data]);
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
      />
    </>
  );
}

export default App;
