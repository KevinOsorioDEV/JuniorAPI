import { Players } from "../models/players.js";

export const getPlayers = async (req, res) => {
  const players = await Players.findAll();
  res.json(players);
};
