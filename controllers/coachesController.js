import { Coaches } from "../models/coaches.js";

export const getCoaches = async (req, res) => {
  const coaches = await Coaches.findAll();
  res.json(coaches);
};
