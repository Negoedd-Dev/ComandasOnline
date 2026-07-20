import React from "react";
import AbaProduto from "./produtos/AbaProduto";
import AbaFuncionarios from "./aba/AbaFuncionario";
import "./Painelcontrole.css";

export default function PainelControle() {
  return (
    <>
      <AbaFuncionario />
      <AbaProduto />
    </>
  );
}
