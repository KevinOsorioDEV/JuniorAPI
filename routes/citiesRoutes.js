import express from "express";
import { getCities, deleteCity } from "../controllers/citiesController.js";

const router = express.Router();

/**
 * @swagger
 * /cities:
 *   get:
 *     summary: Obtiene todas las ciudades
 *     responses:
 *       200:
 *         description: ciudades
 */
router.get("/cities", getCities);
/**
 * @swagger
 * /cities:
 *   delete:
 *     summary: elimina una ciudad
 *     responses:
 *       200:
 *         description: ciudades
 */
router.delete("/cities/:id", (req) => deleteCity(req.params));

export default router;
