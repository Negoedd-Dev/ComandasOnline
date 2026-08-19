import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

import {
  listar,
  buscar,
  criar,
  atualizar,
  excluir,
} from "../controllers/produtoController.js";

const router = Router();

router.get("/", authMiddleware, listar);
router.get("/:id", buscar);
router.post("/", criar);
router.put("/:id", atualizar);
router.delete("/:id", excluir);

export default router;
