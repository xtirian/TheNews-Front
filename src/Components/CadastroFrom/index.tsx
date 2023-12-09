import axios, { AxiosPromise } from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CadastroForm = () => {

  const Router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = async (e: React.FormEvent) => {
    e.preventDefault();
    //TODO send to server
    try{
    if(nome && email && senha){
      const signin = await axios.post('http://localhost:8080/users', {
        name: nome,
        email: email,
        password: senha,
      } )
    
      Router.push("/home");

      console.log(signin.data)
    }
  } catch(err : any){
    alert(err.response.data.message)
  }

}


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
