import express from "express";
import authRoutes from "./authRoutes.js";
import funcionarioRoutes from "./funcionarioRoutes.js";
import produtoRoutes from "./produtoRoutes.js";
import relatorioRoutes from "./relatorioRoutes.js";
import mesaRoutes from "./mesaRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";

const router = express.Router();

// Todas as rotas agrupadas
router.use("/auth", authRoutes);
router.use("/funcionarios", funcionarioRoutes);
router.use("/produtos", produtoRoutes);
router.use("/relatorios", relatorioRoutes);
router.use("/mesas", mesaRoutes);
router.use("/pedidos", pedidoRoutes);

export default router;
