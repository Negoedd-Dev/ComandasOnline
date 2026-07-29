import React, { useState } from "react";
import FormProduto from "./FormProduto";
import ListaProduto from "./ListaProduto";
import Button, { BUTTON_VARIANTS } from "../../../components/Button";
import "./AbaProduto.css";

export default function AbaProduto() {
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
          {abaAtiva === "cadastro" && <FormProduto />}
          {abaAtiva === "lista" && <ListaProduto />}
        </div>
      </div>
    </>
  );
}
