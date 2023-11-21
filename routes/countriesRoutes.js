import express from "express";
import {
  allCountries,
  findCountryById,
} from "../controllers/countriesController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Countries:
 *       type: object
 *       required:
 *         - country_id
 *         - country_name
 *       properties:
 *         country_id:
 *           type: integer
 *           description: The auto-generated id of the country
 *         country_name:
 *           type: string
 *           description: The name of the country
 *       example:
 *         country_id: 1
 *         country_name: Colombia
 */

/**
 * @swagger
 * tags:
 *   name: Countries
 *   description: The countries managing API
 * /countries:
 *   get:
 *     summary: Lists all the books
 *     tags: [Countries]
 *     responses:
 *       200:
 *         description: The list of the countries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Countries'
 *
 */
router.get("/countries", allCountries);

/**
 * @swagger
 * tags:
 *   name: Countries
 *   description: The Countries managing API
 * /country/{id}:
 *   get:
 *     summary: Get the Country by id
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The country id
 *     responses:
 *       200:
 *         description: The country response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Countries'
 *       404:
 *         description: The country was not found
 *
 */
router.get("/country/:id", findCountryById);

export default router;
