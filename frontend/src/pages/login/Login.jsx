import React from "react";
import "./TelaLogin.css";

export default function TelaLogin() {
  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <h1 className="login-title">Login</h1>
          <input type="text" placeholder="Usuário" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}
