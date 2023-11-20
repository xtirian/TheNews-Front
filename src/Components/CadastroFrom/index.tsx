import React, { useState } from "react";

const index = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = (e: any) => {
    e.preventDefault();
    //TODO send to server
  };

  const alterarValores = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    console.log(name,value)

    switch (name) {
      case 'nameInput':
        setNome(value);
        break;

      case 'emailInput':
        setEmail(value);
        break;

      case 'passwordInput':
        setSenha(value);
        break;

      default:
        break;
    }

    
  };

  return (
    <form onSubmit={cadastrar}>
      <div>
        <label htmlFor="nameInput">Nome</label>
        <input
          type="text"
          name="nameInput"
          id="nameInput"
          onChange={alterarValores}
        />
      </div>
      <div>
        <label htmlFor="emailInput">E-mail</label>
        <input
          type="text"
          name="emailInput"
          id="emailInput"
          onChange={alterarValores}
        />
      </div>
      <div>
        <label htmlFor="passwordInput">Senha</label>
        <input
          type="senha"
          name="passwordInput"
          id="passwordInput"
          onChange={alterarValores}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default index;
