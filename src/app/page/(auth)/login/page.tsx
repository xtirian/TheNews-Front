import LoginForm from "@/Components/LoginForm";
import React from "react";
import CadastroMenuLayout from "../layout";
import Menu from "@/Components/Menu";

const Login = () => {
  return (
    <div>
      <CadastroMenuLayout children={<Menu />} />
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
