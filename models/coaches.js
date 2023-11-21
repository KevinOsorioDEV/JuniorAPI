import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Coaches = sequelize.define(
  "coaches",
  {
    coach_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoincrement: true,
    },
    coach_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
    },
  },
  { timestamps: false }
);
