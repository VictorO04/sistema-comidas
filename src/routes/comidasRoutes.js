import { Router } from "express";
import * as comidaController from "./../controllers/comidasController.js";

const router = Router();

router.get("/", comidaController.listarTodos);
router.get("/:id", comidaController.listarUm);
router.post("/", comidaController.criar);
router.delete("/:id", comidaController.deletar);

export default router;