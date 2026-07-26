import { useState } from "react";
import "./Comanda.css";
import HeaderComanda from "./HeaderComanda";
import LinhaPedido from "./LinhaPedido";
import FooterComanda from "./FooterComanda";
import {
  adicionarPedido,
  atualizarPedido,
  finalizarAtendimento,
  cancelar,
  excluirPedido,
} from "../../utils/pedidos";

export default function Comanda() {
  const [pedidos, setPedidos] = useState([]);

  const handleAdicionarPedido = () => setPedidos(adicionarPedido(pedidos));
  const handleAtualizarPedido = (index, campo, valor) =>
    setPedidos(atualizarPedido(pedidos, index, campo, valor));
  const handleFinalizarAtendimento = () => {
    if (finalizarAtendimento(pedidos)) {
      alert("Atendimento finalizado!");
      setPedidos([]); // limpa a lista
    }
  };

  const handleCancelar = () => setPedidos(cancelar(pedidos));

  const handleExcluirPedido = (index) => {
    setPedidos(excluirPedido(pedidos, index));
  };

  return (
    <div className="comanda-container">
      <HeaderComanda />
      <LinhaPedido
        pedidos={pedidos}
        onAtualizar={handleAtualizarPedido}
        onAdicionar={handleAdicionarPedido}
        onExcluir={handleExcluirPedido}
      />
      <FooterComanda
        pedidos={pedidos}
        onFinalizar={handleFinalizarAtendimento}
        onCancelar={handleCancelar}
      />
    </div>
  );
}
