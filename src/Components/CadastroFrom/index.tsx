import React, { useState } from "react";

const CadastroForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = (e: React.FormEvent) => {
    e.preventDefault();
    //TODO send to server
  };

  const alterarValores = (e: React.FormEvent<HTMLInputElement> ) => {
    const { name, value } = e.currentTarget;

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
          required
        />
      </div>
      <div>
        <label htmlFor="emailInput">E-mail</label>
        <input
          type="email"
          name="emailInput"
          id="emailInput"
          onChange={alterarValores}
          required
        />
      </div>
      <div>
        <label htmlFor="passwordInput">Senha</label>
        <input
          type="senha"
          name="passwordInput"
          id="passwordInput"
          onChange={alterarValores}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CadastroForm;
