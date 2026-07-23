import React from "react";
import "./FormProduto.css";
import Button, { BUTTON_VARIANTS } from "../../../../components/Button";

export default function FormProduto() {
  return (
    <>
      <div className="form-container">
        <form className="form-produto">
          <h1 className="form-title">Cadastro de Produtos</h1>
          <div className="form-input">
            <input type="number" placeholder="Código do produto" required />

            <input type="text" placeholder="Descrição do produto" required />

            <input c type="number" placeholder="Valor do produto" required />

            <Button variant={BUTTON_VARIANTS.PRIMARY}>Cadastrar</Button>
          </div>
        </form>
      </div>
    </>
  );
}
