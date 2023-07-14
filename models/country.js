import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Countries = sequelize.define(
  "countries",
  {
    country_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    country_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export const sincroTables = () => {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Sincro correcta");
    })
    .catch((err) => {
      console.error("Sincro error", err);
    });
};
