import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import "path";
import path, { dirname } from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "JuniorAPI",
      version: "1.0.0",
      description:
        "API para guardar datos de mi equipo de futbol, en una base de datos PostgreSQL.",
    },
  },
  apis: ["./index.js", "./routes/*.js"],
};

const specs = swaggerJsdoc(options);

export const swaggerDocs = (app, port) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json"), res.send(specs);
  });
};
