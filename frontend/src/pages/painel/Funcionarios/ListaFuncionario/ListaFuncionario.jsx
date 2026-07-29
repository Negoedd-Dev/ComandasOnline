import React from "react";
import "./ListaFuncionario.css";

export default function ListaFuncionarios() {
  // Exemplo de dados estáticos só para testar
  const funcionarios = [
    { id: 1, nome: "Maria", cargo: "Atendente", celular: "31999123654" },
    { id: 2, nome: "João", cargo: "Garçom", celular: "31999123321" },
    { id: 3, nome: "Ana", cargo: "Caixa", celular: "31999155470" },
  ];

  return (
    <div className="container">
      <div className="form-container">
        <h2>Lista de Funcionários</h2>
        <ul>
          {funcionarios.map((f) => (
            <li key={f.id}>
              {f.nome} - {f.cargo} - {f.celular}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
