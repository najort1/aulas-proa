const UserDetails = ({ user }) => {

    let resultado;
    if(user.idade > 18){
        resultado = "Pode tirar habilitação";
    }else{
        resultado = "Não pode tirar habilitação";
    }

//   const podeTirarCarteira = user.idade >= 18 ? "Pode tirar habilitação" : "Não pode tirar habilitação";
  return (
    <div>
      <h1>Nome: {user.nome}</h1>
      <p>Idade: {user.idade}</p>
      <p>Habilitação: {resultado}</p>
    </div>
  );
};

export default UserDetails;
