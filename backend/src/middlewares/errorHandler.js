export default function errorHandler(err, req, res, next) {
  console.error(err);

  const status = err.statusCode || 500;

  res.status(status).json({
    sucesso: false,
    mensagem: err.message,
  });
}
