import { useState } from "react";
import "./Comanda.css";
import "../../components/Button";
import Button, { BUTTON_VARIANTS } from "../../components/Button";
import {
  adicionarPedido,
  atualizarPedido,
  calcularPedido,
  finalizarAtendimento,
  cancelar,
} from "../../utils/pedidos";

export default function Comanda() {
  const [pedidos, setPedidos] = useState([]);

  const handleAdicionarPedido = () => setPedidos(adicionarPedido(pedidos));
  const handleAtualizarPedido = (index, campo, valor) =>
    setPedidos(atualizarPedido(pedidos, index, campo, valor));
  const handleFinalizarAtendimento = () => {
    if (finalizarAtendimento()) {
      alert("Atendimento finalizado!");
      setPedidos([]);
    }
  };
  const handleCancelar = () => setPedidos(cancelar());

  return (
    <div className="comanda">
      <h2>Comanda</h2>

      <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={handleAdicionarPedido}>
        Adicionar Pedido
      </Button>

      <div className="lista-pedidos">
        {pedidos.map((pedido, index) => (
          <div className="pedido-linha" key={index}>
            <input
              className="digitos"
              type="text"
              placeholder="Código"
              value={pedido.codigo}
              onChange={(e) =>
                handleAtualizarPedido(index, "codigo", e.target.value)
              }
            />
            <input
              className="descricao"
              type="text"
              placeholder="Descrição"
              value={pedido.descricao}
              onChange={(e) =>
                handleAtualizarPedido(index, "descricao", e.target.value)
              }
            />
            <input
              className="digitos"
              type="number"
              min="1"
              placeholder="Qtd"
              value={pedido.quantidade}
              onChange={(e) =>
                handleAtualizarPedido(
                  index,
                  "quantidade",
                  Number(e.target.value),
                )
              }
            />
            <input
              className="moeda"
              type="number"
              step="0.01"
              placeholder="Valor"
              value={pedido.valor}
              onChange={(e) =>
                handleAtualizarPedido(index, "valor", Number(e.target.value))
              }
            />
            <span className="total-item">
              R$ {(pedido.quantidade * Number(pedido.valor || 0)).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <h3>Total da Comanda: R$ {calcularPedido(pedidos).toFixed(2)}</h3>

      <div className="acoes">
        <Button
          variant={BUTTON_VARIANTS.SUCCESS}
          onClick={handleFinalizarAtendimento}
        >
          Finalizar Atendimento
        </Button>
        <Button variant={BUTTON_VARIANTS.DANGER} onClick={handleCancelar}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
