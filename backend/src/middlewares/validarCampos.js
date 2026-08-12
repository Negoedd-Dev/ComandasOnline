import AppError from "../utils/AppError";

export default function validarCampos(camposObrigatorios) {
  return (req, res, next) => {
    for (const campo of camposObrigatorios) {
      if (!req.body[campo]) {
        throw new AppError("Campo obrigatório não informado", 400);
      }
    }
    next();
  };
}
