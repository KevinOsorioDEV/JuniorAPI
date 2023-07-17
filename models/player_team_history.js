import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const PlayerTeamHistory = sequelize.define("player_team_history", {
  history_player_id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  player_id: {
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
});
