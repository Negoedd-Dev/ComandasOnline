import React from "react";
import "./LinhaPedido.css";
import { FaTrash } from "react-icons/fa";
import Button, { BUTTON_VARIANTS } from "../../../components/Button";

export default function LinhaPedido({
  pedidos,
  onAtualizar,
  onAdicionar,
  onExcluir,
}) {
  return (
    <div className="pedido">
      <div className="btn-pedido">
        <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={onAdicionar}>
          Adicionar Pedido
        </Button>
      </div>

      <div className="lista-pedidos">
        {pedidos.map((pedido, index) => (
          <div className="pedido-linha" key={index}>
            <input
              className="digitos"
              type="text"
              placeholder="Código"
              value={pedido.codigo}
              onChange={(e) => onAtualizar(index, "codigo", e.target.value)}
            />
            <input
              className="descricao"
              type="text"
              placeholder="Descrição"
              value={pedido.descricao}
              onChange={(e) => onAtualizar(index, "descricao", e.target.value)}
            />
            <input
              className="digitos"
              type="number"
              min="1"
              placeholder="Qtd"
              value={pedido.quantidade}
              onChange={(e) =>
                onAtualizar(index, "quantidade", Number(e.target.value))
              }
            />
            <input
              className="moeda"
              type="number"
              step="0.01"
              placeholder="Valor"
              value={pedido.valor}
              onChange={(e) =>
                onAtualizar(index, "valor", Number(e.target.value))
              }
            />
            <span className="total-item">
              R$ {(pedido.quantidade * Number(pedido.valor || 0)).toFixed(2)}
            </span>

            <Button
              variant={BUTTON_VARIANTS.DANGER}
              size="small"
              onClick={() => onExcluir(index)}
            >
              <FaTrash />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
