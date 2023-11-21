import express from "express";
import {
  getCities,
  deleteCity,
  findCityById,
  createCity,
} from "../controllers/citiesController.js";

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Cities:
 *       type: object
 *       required:
 *         - city_id
 *         - city_name
 *         - country_id
 *       properties:
 *         city_id:
 *           type: integer
 *           description: The auto-generated id of the city
 *         city_name:
 *           type: string
 *           description: The name of the city
 *         country_id:
 *           type: integer
 *           description: The id of the country
 *       example:
 *         city_id: 1
 *         city_name: Barranquilla
 *         country_id: 1
 */

/**
 * @swagger
 * tags:
 *   name: Cities
 *   description: The cities managing API
 * /cities:
 *   get:
 *     summary: Lists all the cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: The list of the cities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cities'
 *
 */
router.get("/cities", getCities);

/**
 * @swagger
 * tags:
 *   name: Cities
 *   description: The cities managing API
 * /city/{id}:
 *   get:
 *     summary: Get the City by id
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The city id
 *     responses:
 *       200:
 *         description: The city response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cities'
 *       404:
 *         description: The city was not found
 *
 */
router.get("/city/:id", findCityById);

/**
 * @swagger
 * tags:
 *   name: Cities
 *   description: The cities managing API
 * /city:
 *   post:
 *     summary: Create a new city
 *     tags: [Cities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cities'
 *     responses:
 *       200:
 *         description: The created city.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cities'
 *       500:
 *         description: Some server error
 */
router.post("/city", createCity);

/**
 * @swagger
 * tags:
 *   name: Cities
 *   description: The cities managing API
 * /cities/{id}:
 *   delete:
 *     summary: Delete the cities by id
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The city id
 *     responses:
 *       200:
 *         description: The city was deleted
 *       404:
 *         description: The city was not found
 */
router.delete("/cities/:id", deleteCity);

export default router;
