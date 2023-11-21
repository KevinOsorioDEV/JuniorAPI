import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Position = sequelize.define(
  "position",
  {
    position_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    position_name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);
