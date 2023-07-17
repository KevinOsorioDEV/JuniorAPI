import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Players = sequelize.define(
  "players",
  {
    player_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncremnt: true,
    },
    player_name: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
    },
    position_id: {
      type: DataTypes.INTEGER,
    },
    city_id: {
      type: DataTypes.INTEGER,
    },
    current_team_id: {
      type: DataTypes.INTEGER,
    },
    current_season_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
