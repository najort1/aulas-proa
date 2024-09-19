const Lista = () => {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
        <h2>Lista de Números</h2>
        <ul>
            {numeros.map((numero) => (
                <li key={numero}>{numero}</li>
            ))}
        </ul>
    </>
  );
};

export default Lista;
