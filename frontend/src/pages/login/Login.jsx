import React from "react";
import "./Login.css";
import Button, { BUTTON_VARIANTS } from "../../components/Button";

export default function TelaLogin() {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1 className="login-title">Login</h1>
          <form className="login-form">
            <input type="text" placeholder="Usuário" required />
            <input type="password" placeholder="Senha" required />
            <Button variant={BUTTON_VARIANTS.SUCCESS}>Entrar</Button>
          </form>
        </div>
      </div>
    </>
  );
}
