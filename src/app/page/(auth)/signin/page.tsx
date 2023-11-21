"use client";
import React from "react";

import CadastroForm from "@/Components/CadastroFrom";
import CadastroMenuLayout from "../layout";
import Menu from "@/Components/Menu";

const Cadastro = () => {
  return (
    <div>
      <CadastroMenuLayout children={<Menu />} />
      <h1>Cadastro</h1>
      <CadastroForm />
    </div>
  );
};

export default Cadastro;
