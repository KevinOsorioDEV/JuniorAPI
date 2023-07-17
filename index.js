import express from "express";
import { swaggerDocs as v1swagger } from "./swagger.js";
import { sincroTables } from "./models/countries.js";
import countriesRoutes from "./routes/countriesRoutes.js";
import citiesRoutes from "./routes/citiesRoutes.js";
import playersRoutes from "./routes/playersRoutes.js";
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
app.use(citiesRoutes);
app.use(playersRoutes);

app.listen(PORT, () => {
  console.log(`Listenig on port ${PORT}`);
  v1swagger(app, PORT);
});
