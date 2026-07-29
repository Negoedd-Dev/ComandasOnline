import EstilosGlobais from "./styles/EstilosGlobais";
import Header from "./components/Header";
// import Operacional from "./pages/operacional";
// import Comanda from "./components/Comanda/Comanda";
// import Login from "./pages/Login";
// import FormProduto from "./pages/painel/produtos/FormProduto";
// import AbaFuncionario from "./pages/painel/Funcionarios/AbaFuncionario";
// import FormFuncionario from "./pages/painel/Funcionarios/FormFuncionario";
// import AbaProduto from "./pages/painel/produtos";
// import AbaRelatorio from "./pages/painel/Relatorios/AbaRelatorio/AbaRelatorio";
import PainelControle from "./pages/painel/PainelControle";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />
      {/* <Login /> */}
      {/* <Operacional /> */}
      {/* <Comanda /> */}
      {/* <FormProduto /> */}
      {/* <AbaFuncionario /> */}
      {/* <FormFuncionario /> */}
      {/* <AbaProduto /> */}
      {/* <AbaRelatorio /> */}
      <PainelControle />
      {/* entre o cabeçalho e o rodape ficará todo o conteúdo principal. */}
      <Footer />
    </>
  );
}
