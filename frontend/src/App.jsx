import { useState } from "react";
import EstilosGlobais from "./components/estilos/EstilosGlobais";
import Cabecalho from "./components/cabecalho/Cabecalho";
import Rodape from "./components/rodape/Rodape";
import TelaLogin from "./pages/login/TelaLogin";

export default function App() {
  return (
    <>
      <EstilosGlobais />
      <Cabecalho />
      <TelaLogin />
      {/* entre o cabeçalho e o rodape ficará todo o conteúdo principal. */}
      <Rodape />
    </>
  );
}
