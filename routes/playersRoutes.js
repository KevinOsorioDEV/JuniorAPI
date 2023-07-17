import express from "express";
import { getPlayers } from "../controllers/playersController.js";

const router = express.Router();

/**
 * @swagger
 * /players:
 *   get:
 *     summary: Obtiene todas los juagores
 *     responses:
 *       200:
 *         description: jugadores
 */
router.get("/players", getPlayers);

export default router;
