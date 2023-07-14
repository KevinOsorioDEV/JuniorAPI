import express from "express";
import { swaggerDocs as v1swagger } from "./swagger.js";

const app = express();
const PORT = 3000;

/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtiene un mensaje de prueba
 *     responses:
 *       200:
 *         description: Mensaje de prueba
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Home!");
});

app.listen(PORT, () => {
  console.log(`Listenig on port ${PORT}`);
  v1swagger(app, PORT);
});
