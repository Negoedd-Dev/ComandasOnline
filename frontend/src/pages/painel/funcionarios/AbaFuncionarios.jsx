import React from "react";
import "./abafuncionarios.css";

export default function AbaFuncionaros() {
    return (
        <div className="funcionarios-container">
            <h1 className="funcionarios-title">Funcionários</h1>
            <form className="funcionarios-form">
                <input type="text" placeholder="Nome do Funcionário" required />
                <input type="password" placeholder="Senha" required />
                <input type="email" placeholder="email" required />
                <input type="text" placeholder="cargo" required />
                <input type="number" placeholder="Contato" required />   

                <button type="submit" className="funcionarios-button">
                    Adicionar Funcionário
                </button>

            </form>
        </div>
    )
}