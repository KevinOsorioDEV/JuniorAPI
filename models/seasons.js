import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Seasons = sequelize.define(
  "seasons",
  {
    season_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    season_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);
