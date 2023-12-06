"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const Router = useRouter();

  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const logar = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
    const result = await axios.post("http://localhost:8080/login", formulario);
    alert(result.data.message);
    Router.push("/page/admin/news/create");}
    catch (err : any) {
      
      alert(err.response.data.message)
    }
    //TODO colocar a checagem no servidor
  };

  const alterarValores = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormulario({
      ...formulario, //Aqui nós vamos pegar todas as informações já existentes na variável (que estão vazias)
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
