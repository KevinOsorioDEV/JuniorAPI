import express from "express";
import { GetTeams } from "../controllers/teamsController.js";

const router = express.Router();

/**
 * @swagger
 * /teams:
 *   get:
 *     summary: Obtiene todas los equipos
 *     responses:
 *       200:
 *         description: equipos obtenidos correctamente
 */
router.get("/teams", GetTeams);

export default router;
