import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Matches = sequelize.define(
  "matches",
  {
    match_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
    },
    team_idt: {
      type: DataTypes.INTEGER,
    },
    opponent_id: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
  }
);
