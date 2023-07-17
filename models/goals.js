import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Goals = sequelize.define(
  "goals",
  {
    goal_id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
    match_id: { type: DataTypes.INTEGER, allowNull: false },
    player_id: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
  }
);
