import React from "react";
import "./FooterComanda.css";
import Button, { BUTTON_VARIANTS } from "../../../components/Button";
import { calcularPedido } from "../../../utils/pedidos.js";

export default function FooterComanda({ pedidos, onFinalizar, onCancelar }) {
  return (
    <div className="footer-container">
      <h3>Total da Comanda: R$ {calcularPedido(pedidos).toFixed(2)}</h3>
      <div className="acoes">
        <Button variant={BUTTON_VARIANTS.SUCCESS} onClick={onFinalizar}>
          Finalizar Atendimento
        </Button>
        <Button variant={BUTTON_VARIANTS.DANGER} onClick={onCancelar}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
