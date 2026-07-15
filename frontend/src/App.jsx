import { useState } from "react";
import EstilosGlobais from "./styles/EstilosGlobais";
import Header from "./components/Header/Header";
import ComandaLateral from "./components/Comanda/ComandaLateral";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />

      {/* entre o cabeçalho e o rodape ficará todo o conteúdo principal. */}
      <Footer />
    </>
  );
}
