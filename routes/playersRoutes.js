import express from "express";
import { getPlayers } from "../controllers/playersController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Players
 *   description: The endpoints players API
 * /players:
 *   get:
 *     summary: Obtiene todas los juagores
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: jugadores
 */
router.get("/players", getPlayers);

export default router;
