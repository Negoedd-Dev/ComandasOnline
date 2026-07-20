import EstilosGlobais from "./styles/EstilosGlobais";
import Header from "./components/Header";
import Login from "./pages/Login";
import MesaCard from "./components/Mesa/MesaCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />
      <Login />
      <MesaCard />
      {/* entre o cabeçalho e o rodape ficará todo o conteúdo principal. */}
      <Footer />
    </>
  );
}
