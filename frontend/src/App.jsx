import EstilosGlobais from "./styles/EstilosGlobais";
import Header from "./components/Header";
import Login from "./pages/Login";
// import FormProduto from "./pages/painel/produtos/FormProduto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />
      <Login />
      {/* <FormProduto /> */}
      {/* entre o cabeçalho e o rodape ficará todo o conteúdo principal. */}
      <Footer />
    </>
  );
}
