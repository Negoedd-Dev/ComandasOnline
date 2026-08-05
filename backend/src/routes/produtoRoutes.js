import { Router } from "express";

import {
  listar,
  buscar,
  criar,
  atualizar,
  excluir,
} from "../controllers/produtoController.js";

const router = Router();

router.get("/", listar);
router.get("/:id", buscar);
router.post("/", criar);
router.put("/:id", atualizar);
router.delete("/:id", excluir);

export default router;
