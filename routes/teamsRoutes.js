import express from "express";
import { GetTeams } from "../controllers/teamsController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Teams
 *   description: The endpoint teams API
 * /teams:
 *   get:
 *     summary: Obtiene todas los equipos
 *     tags: [Teams]
 *     responses:
 *       200:
 *         description: equipos obtenidos correctamente
 */
router.get("/teams", GetTeams);

export default router;
