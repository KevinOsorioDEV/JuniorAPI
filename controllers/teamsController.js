import { Teams } from "../models/teams.js";

export const GetTeams = async (req, res) => {
  const cities = await Teams.findAll();
  res.json(cities);
};
