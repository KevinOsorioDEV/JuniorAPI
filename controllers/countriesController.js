import { Countries } from "../models/countries.js";

export const allCountries = async (req, res) => {
  const listCountries = await Countries.findAll();
  res.json(listCountries);
};
