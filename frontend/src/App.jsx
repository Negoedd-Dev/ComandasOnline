import EstilosGlobais from "./styles/EstilosGlobais";
import Header from "./components/Header";
import Comanda from "./components/Comanda";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />
      <Comanda />

      {/* entre o cabeçalho e o rodape ficará todo o conteúdo principal. */}
      <Footer />
    </>
  );
}
