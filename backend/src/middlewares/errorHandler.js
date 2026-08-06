export default function errorHandle(err, req, res, next) {
  console.error(err);

  const status = err.statusCode || 500;

  res.status(err.statusCode || 500).json({
    sucesso: false,
    mensagem: err.message,
  });
}
