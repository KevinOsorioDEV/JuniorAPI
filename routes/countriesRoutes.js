import express from "express";
import { allCountries } from "../controllers/countriesController.js";

const router = express.Router();

/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Obtiene todas los paises
 *     responses:
 *       200:
 *         description: Paises
 */
router.get("/countries", allCountries);

export default router;
