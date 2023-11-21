import express from "express";
import { getCoaches } from "../controllers/coachesController.js";

const router = express.Router();

/**
 * @swagger
 * /coaches:
 *   get:
 *     summary: Obtiene todas los tecnicos
 *     responses:
 *       200:
 *         description: Tecnicos obtenidas correctamente
 */
router.get("/coaches", getCoaches);

export default router;
