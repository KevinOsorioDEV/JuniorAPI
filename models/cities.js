import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Cities = sequelize.define(
  "cities",
  {
    city_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    city_name: {
      type: DataTypes.STRING,
    },
    country_id: {
      type: DataTypes.INTEGER,
    },
    city_id: {
      type: DataTypes.INTEGER,
    },
    current_team_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
