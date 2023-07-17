import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const CoachTeamHistory = sequelize.define(
  "coach_team_history",
  {
    history_coach_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    coach_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
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
