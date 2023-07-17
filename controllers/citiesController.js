import { Cities } from "../models/cities.js";

export const getCities = async (req, res) => {
  const cities = await Cities.findAll();
  res.json(cities);
};

export const deleteCity = async (req, res) => {
  const id = req.params.id;
  await Cities.destroy({ where: { id } });
  res.json({ message: "City deleted" });
};
