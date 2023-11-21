import { sequelize } from "../config/db.js";
import { Cities, CityPost } from "../models/cities.js";

export const getCities = async (req, res) => {
  const cities = await Cities.findAll();
  res.json(cities);
};

export const deleteCity = async (req, res) => {
  const id = req.params.id;

  const City = await Cities.findOne({ where: { city_id: id } });
  console.log(findCity);
  if (City == null) {
    return res.status(404).json({ message: "City not found" });
  }

  await City.destroy();
  return res.status(200).json({ message: "City deleted" });
};

export const findCityById = async (req, res) => {
  try {
    const id = req.params.id;
    const city = await Cities.findOne({ where: { city_id: id } });
    if (city == null) {
      return res.status(404).json({ message: "City not found" });
    }
    return res.status(200).json(city);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};  

export const createCity = async (req, res) => {
  const { city_name, country_id } = req.body;
  try {
    if (city_name == null || country_id == null) {
      res.status(400).json({ message: "Missing data" });
    }
    const [city, created] = await Cities.findOrCreate({
      where: { city_name: city_name },
      defaults: {
        country_id: country_id,
      },
    });

    if (!created)
      return res.status(409).json({ message: "City already exists" });

    res.status(201).json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
