import { Router } from "express";
// import authRoutes from "./authRoutes.js";
// import funcionarioRoutes from "./funcionarioRoutes.js";
import produtoRoutes from "./produtoRoutes.js";
// import relatorioRoutes from "./relatorioRoutes.js";
// import mesaRoutes from "./mesaRoutes.js";
// import pedidoRoutes from "./pedidoRoutes.js";

const router = Router();

// Agrupa todas as rotas
// router.use("/auth", authRoutes);
// router.use("/funcionarios", funcionarioRoutes);
// router.use("/mesas", mesaRoutes);
// router.use("/pedidos", pedidoRoutes);
router.use("/produtos", produtoRoutes);
// router.use("/relatorios", relatorioRoutes);

export default router;
