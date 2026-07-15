import React from "react";
import AbaProdutos from "./abas/AbaProdutos";
import AbaFuncionarios from "./abas/AbaFuncionarios";
import "./painelcontrole.css";

export default function PainelControle() {
  return (
    <>
      <AbaFuncionarios />
      <AbaProdutos />
    </>
  );
}
