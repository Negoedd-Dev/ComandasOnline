import React from "react";
import "./MesaCard.css";
import { TOTAL_MESAS } from "../../utils/constantes";
import Button, { BUTTON_VARIANTS } from "../../components/Button";

export default function MesaCard() {
  const mesas = Array.from({ length: TOTAL_MESAS }, (_, index) => ({
    id: index + 1,
    numero: index + 1,
    status: "livre",
  }));
  return (
    <>
      <div className="mesa-container">
        {mesas.map((mesa) => (
          <div className="mesa" key={mesa.id}>
            <h2>Mesa {String(mesa.numero).padStart(2, "0")}</h2>

            <Button variant={BUTTON_VARIANTS.PRIMARY}>Criar Comanda</Button>

            <Button variant={BUTTON_VARIANTS.SUCCESS}>Ver Comanda</Button>

            <Button variant={BUTTON_VARIANTS.WARNING}>Reservar Mesa</Button>
          </div>
        ))}
      </div>
    </>
  );
}
