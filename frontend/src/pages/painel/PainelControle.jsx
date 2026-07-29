import React, { useState } from "react";
import AbaProduto from "./produtos/AbaProduto";
import AbaFuncionario from "./Funcionarios/AbaFuncionario";
import AbaRelatorio from "./Relatorios/AbaRelatorio/AbaRelatorio";
import Button, { BUTTON_VARIANTS } from "../../components/Button";
import "./Painelcontrole.css";

export default function PainelControle() {
  const [abaAtiva, setAbaAtiva] = useState("produto");
  return (
    <>
      <div className="aba-container">
        <div className="tabs">
          <Button
            variant={
              abaAtiva === "produto"
                ? BUTTON_VARIANTS.PRIMARY
                : BUTTON_VARIANTS.SECONDARY
            }
            // className={`tab-button ${abaAtiva === "produto" ? "active" : ""}`}
            onClick={() => setAbaAtiva("produto")}
          >
            Produto
          </Button>
          <Button
            variant={
              abaAtiva === "funcionario"
                ? BUTTON_VARIANTS.PRIMARY
                : BUTTON_VARIANTS.SECONDARY
            }
            // className={`tab-button ${abaAtiva === "funcionario" ? "active" : ""}`}
            onClick={() => setAbaAtiva("funcionario")}
          >
            Funcionario
          </Button>
          <Button
            variant={
              abaAtiva === "relatorio"
                ? BUTTON_VARIANTS.PRIMARY
                : BUTTON_VARIANTS.SECONDARY
            }
            // className={`tab-button ${abaAtiva === "relatorio" ? "active" : ""}`}
            onClick={() => setAbaAtiva("relatorio")}
          >
            Relatório de fechamento
          </Button>
        </div>
        <div className="tab-content">
          {abaAtiva === "produto" && <AbaProduto />}
          {abaAtiva === "funcionario" && <AbaFuncionario />}
          {abaAtiva === "relatorio" && <AbaRelatorio />}
        </div>
      </div>
    </>
  );
}
