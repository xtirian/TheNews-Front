import React from "react";

const index = () => {

  const cadastrar = (e:any) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={cadastrar}>
      <div>
        <label htmlFor="nameInput">Nome</label>
        <input type="text" name="name" id="nameInput" />
      </div>
      <div>
        <label htmlFor="emailInput">E-mail</label>
        <input type="text" name="email" id="emailInput" />
      </div>
      <div>
        <label htmlFor="passwordInput">Senha</label>
        <input type="text" name="password" id="passwordInput" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default index;
