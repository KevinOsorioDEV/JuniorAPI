import express from "express";
import { swaggerDocs as v1swagger } from "./swagger.js";
import { sincroTables } from "./models/countries.js";
import countriesRoutes from "./routes/countriesRoutes.js";
import citiesRoutes from "./routes/citiesRoutes.js";
import playersRoutes from "./routes/playersRoutes.js";
import teamsRoutes from "./routes/teamsRoutes.js";
import coachesRoutes from "./routes/coachesRoutes.js";
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(countriesRoutes);
app.use(citiesRoutes);
app.use(playersRoutes);
app.use(teamsRoutes);
app.use(coachesRoutes);

app.listen(PORT, () => {
  console.log(`Listenig on port ${PORT}`);
  v1swagger(app, PORT);
  //sincroTables();
});
