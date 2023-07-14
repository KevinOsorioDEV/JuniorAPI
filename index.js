import express from "express";
import { swaggerDocs as v1swagger } from "./swagger.js";
import { sincroTables } from "./models/country.js";
import countriesRoutes from "./routes/countriesRoutes.js";
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

app.use(countriesRoutes);

app.listen(PORT, () => {
  console.log(`Listenig on port ${PORT}`);
  v1swagger(app, PORT);
});
