import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Teams = sequelize.define(
  "teams",
  {
    team_id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true, },
    team_name: { type: DataTypes.STRING, allowNull: false, },
    team_creation: { type: DataTypes.DATE, },
    city_id: { type: DataTypes.INTEGER, },
    league_id: { type: DataTypes.INTEGER, },
    current_season_id: { type: DataTypes.INTEGER, },
  },
  { timestamps: false, }
);
