import React, { useState } from "react";
import FormFuncionario from "./FormFuncionario";
import ListaFuncionario from "./ListaFuncionario";
import Button, { BUTTON_VARIANTS } from "../../../components/Button";
import "./AbaFuncionario.css";

export default function AbaFuncionaro() {
  const [abaAtiva, setAbaAtiva] = useState("cadastro");
  return (
    <>
      <div className="aba-container">
        <div className="tabs">
          <Button
            variant={
              abaAtiva === "cadastro"
                ? BUTTON_VARIANTS.PRIMARY
                : BUTTON_VARIANTS.SECONDARY
            }
            onClick={() => setAbaAtiva("cadastro")}
          >
            Cadastro
          </Button>
          <Button
            variant={
              abaAtiva === "lista"
                ? BUTTON_VARIANTS.PRIMARY
                : BUTTON_VARIANTS.SECONDARY
            }
            onClick={() => setAbaAtiva("lista")}
          >
            Lista
          </Button>
        </div>
        <div className="tab-content">
          {abaAtiva === "cadastro" && <FormFuncionario />}
          {abaAtiva === "lista" && <ListaFuncionario />}
        </div>
      </div>
    </>
  );
}
