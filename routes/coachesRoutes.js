import express from "express";
import { getCoaches } from "../controllers/coachesController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Coaches
 *   description: The coaches managing API
 * /coaches:
 *   get:
 *     summary: Obtiene todas los tecnicos
 *     tags: [Coaches]
 *     responses:
 *       200:
 *         description: Tecnicos obtenidas correctamente
 */
router.get("/coaches", getCoaches);

export default router;
