import React, { useState } from "react";
import Button, { BUTTON_VARIANTS } from "../../../../components/Button";
import RelatorioFechamento from "../RelatorioFechamento";
import "./AbaRelatorio.css";

export default function AbaRelatorio() {
  const [abaAtiva, setAbaAtiva] = useState("RelatorioFechamento");
  return (
    <>
      <div className="aba-container">
        <div className="tabs">
          <Button
            variant={
              abaAtiva === "RelatorioFechamento"
                ? BUTTON_VARIANTS.PRIMARY
                : BUTTON_VARIANTS.SECONDARY
            }
            onClick={() => setAbaAtiva("RelatorioFechamento")}
          >
            Relatório de Fechamento
          </Button>
        </div>
        <div className="tab-content">
          {abaAtiva === "RelatorioFechamento" && <RelatorioFechamento />}
        </div>
      </div>
    </>
  );
}
