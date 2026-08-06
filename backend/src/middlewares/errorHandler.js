export default function errorHandle(err, req, res, next) {
  console.error("==========ERRO==========");
  console.error(err);
  console.error("========================");

  const status = err.status || 500;

  res.status(status).json({
    sucesso: false,
    mensagem: err.message || "Erro interno do servidor.",
  });
}
