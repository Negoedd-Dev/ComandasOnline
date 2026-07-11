import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import TelaLogin from "./pages/login/TelaLogin";

export default function App() {
  return (
    <>
      <Cabecalho />
      <TelaLogin />
    </>
  );
}
