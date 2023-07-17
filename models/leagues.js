import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Leagues = sequelize.define(
  "leagues",
  {
    league_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    league_name: { type: DataTypes.STRING, allowNull: false },
    country_id: { type: DataTypes.INTEGER },
  },
  { timestamps: false }
);
