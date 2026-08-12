// import jwt from "jsonwebtoken";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

export default function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new AppError("Token não informado", 401);
    }
    const [tipo, token] = authHeader.split(" ");

    if (tipo !== "Bearer" || !token) {
      throw new AppError("Formato do token inválido", 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;

    next();
  } catch (erro) {
    next(erro);
  }
}
