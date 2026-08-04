import express from "express";
import authRoutes from "./auth.routes.js";
import funcionarioRoutes from "./funcionario.routes.js";
import produtoRoutes from "./produto.routes.js";
import relatorioRoutes from "./relatorio.routes.js";

const router = express.Router();

// Agrupa todas as rotas
router.use("/auth", authRoutes);
router.use("/funcionarios", funcionarioRoutes);
router.use("/produtos", produtoRoutes);
router.use("/relatorios", relatorioRoutes);

export default router;
