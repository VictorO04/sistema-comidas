import { Router } from "express";
import * as comidaController from "./../controllers/comidasController.js";

const router = Router();

router.get("/", comidaController.listarTodos);
router.get("/:id", comidaController.listarUm);
router.post("/", comidaController.criar);

export default router;