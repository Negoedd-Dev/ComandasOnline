import React, { useState } from "react";
import "./Comanda.css";
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
      <button onClick={handleAdicionarPedido}>Adicionar Pedido</button>

      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={pedido.codigo}
                  onChange={(e) =>
                    atualizarPedido(index, "codigo", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={pedido.descricao}
                  onChange={(e) =>
                    atualizarPedido(index, "descricao", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={pedido.quantidade}
                  onChange={(e) =>
                    atualizarPedido(
                      index,
                      "quantidade",
                      parseInt(e.target.value),
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  value={pedido.valor}
                  onChange={(e) =>
                    atualizarPedido(index, "valor", e.target.value)
                  }
                />
              </td>
              <td>R$ {(pedido.quantidade * pedido.valor).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total da Comanda: R$ {calcularPedido(pedidos).toFixed(2)}</h3>

      <div className="acoes">
        <button onClick={handleFinalizarAtendimento}>
          Finalizar Atendimento
        </button>
        <button onClick={handleCancelar}>Cancelar</button>
      </div>
    </div>
  );
}
