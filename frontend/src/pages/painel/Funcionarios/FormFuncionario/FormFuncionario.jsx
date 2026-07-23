import React from "react";
import "./FormFuncionario.css";
import Button, { BUTTON_VARIANTS } from "../../../../components/Button";

export default function FormFuncionario() {
  return (
    <>
      <div className="form-container">
        <h1>Cadastro de Funcionários</h1>
        <form className="form-funcionario">
          <div className="campo">
            <label>Nome:</label>
            <input type="text" placeholder="Digite o nome" required />
          </div>
          <div className="campo">
            <label>Email:</label>
            <input type="email" placeholder="Digite o email" required />
          </div>
          <div className="campo">
            <label>Celular:</label>
            <input
              type="tel"
              placeholder="(31) 91234-5678"
              pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}"
              title="Digite um celular válido (xx) xxxxx-xxxx"
              required
            />
          </div>
          <div className="endereco">
            <label>Endereço:</label>
            <input className="rua" type="text" placeholder="Rua" required />
            <input type="text" placeholder="Número" required />
            <input
              type="text"
              placeholder="00000-000"
              pattern="\d{5}-?zd{3}"
              title="Digite um CEP válido (ex.: 30123-456)"
              required
            />
          </div>
          <div className="campo">
            <label>password:</label>
            <input
              type="password"
              placeholder="******"
              pattern="\d{6}"
              title="A senha deve ter 6 números"
              required
            />
          </div>
          <Button variant={BUTTON_VARIANTS.PRIMARY}>Cadastrar</Button>
        </form>
      </div>
    </>
  );
}
