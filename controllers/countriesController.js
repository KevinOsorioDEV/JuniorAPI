import { Countries } from "../models/countries.js";

export const allCountries = async (req, res) => {
  const listCountries = await Countries.findAll();
  res.json(listCountries);
};

export const findCountryById = async (req, res) => {
  try {
    const id = req.params.id;
    const Country = await Countries.findOne({ where: { country_id: id } });
    if (Country == null) {
      return res.status(404).json({ message: "Conutry no found" });
    }
    return res.status(200).json(Country);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
