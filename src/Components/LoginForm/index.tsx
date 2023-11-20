"use client";
import React, { useState } from "react";

const LoginForm = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const logar = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formulario);

    //TODO colocar a checagem no servidor
  };

  const alterarValores = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormulario({
      ...formulario, //Aqui nós vamos pegar todas as informações já existentes na variável (ue estão vazias)
      [name]: value, //aqui nós vamos pegar o nome do input que vier e vamos alterar o "useState"
    });
  };

  return (
    <form onSubmit={logar}>
      <div>
        <label htmlFor="emailInput">E-mail</label>
        <input
          type="email"
          name="email"
          id="emailInput"
          onChange={alterarValores}
        />
      </div>
      <div>
        <label htmlFor="passwordInput">Senha</label>
        <input
          type="password"
          name="password"
          id="passwordInput"
          onChange={alterarValores}
        />
      </div>
      <button type="submit">Logar</button>
    </form>
  );
};

export default LoginForm;
