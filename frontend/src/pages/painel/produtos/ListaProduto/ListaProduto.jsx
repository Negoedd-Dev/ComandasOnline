import React from "react";
import "./ListaProduto.css";

export default function ListaProduto() {
  // Exemplo de dados estáticos só para testar
  const Produtos = [
    {
      id: 1,
      codigo: "0002",
      descricao: "refrigerante lata 350ml",
      valor: "R$ 5,00",
    },
    {
      id: 2,
      codigo: "0005",
      descricao: "porcao de batata frita",
      valor: "R$ 50,00",
    },
    {
      id: 3,
      codigo: "0007",
      descricao: "pizza gigante a moda",
      valor: "R$ 75,00",
    },
  ];

  return (
    <div className="container">
      <div className="form-container">
        <h2>Lista de Produtos</h2>
        <ul>
          {Produtos.map((f) => (
            <li key={f.id}>
              {f.codigo} - {f.descricao} - {f.valor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
