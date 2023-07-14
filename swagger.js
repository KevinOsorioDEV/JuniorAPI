import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "JuniorAPI",
      version: "1.0.0",
      description: "Descripción de mi API",
    },
  },
  apis: ["./index.js"], // Rutas a los archivos que contienen las rutas de tu API
};

// Generar la documentación basada en las opciones de configuración
const specs = swaggerJsdoc(options);

export const swaggerDocs = (app, port) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json"), res.send(specs);
  });
};
