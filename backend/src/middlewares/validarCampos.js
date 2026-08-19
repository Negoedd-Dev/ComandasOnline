import AppError from "../utils/AppError.js";

export default function validarCampos(camposObrigatorios) {
  return (req, res, next) => {
    for (const campo of camposObrigatorios) {
      const valor = req.body[campo];

      if (valor === undefined || valor === null || valor === "") {
        return next(
          new AppError(`Campo obrigatório não informado: ${campo}`, 400),
        );
      }
    }
    next();
  };
}
