import { Countries } from "../models/country.js";

export const allCountries = async (req, res) => {
  const listCountries = await Countries.findAll();
  res.json(listCountries);
};
