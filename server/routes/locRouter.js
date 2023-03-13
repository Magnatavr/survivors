const express = require("express");
const { Op } = require("sequelize");
const { CountLocDang } = require("../db/models");
const { Location } = require("../db/models");

const locRouter = express.Router();

locRouter.get("/", async (req, res) => {
  try {
    const allLocations = await Location.findAll();
    return res.json(allLocations);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

locRouter.post("/loc", async (req, res) => {
  const { id } = req.body;
  // console.log(req.body);
  try {
    const allLocationsInCountry = await CountLocDang.findAll({
      where: { countryId: id },
    });
    const allLocations = await Location.findAll({
      where: {
        id: {
          [Op.in]: allLocationsInCountry.map((location) => location.locationId),
        },
      },
    });
    return res.json(allLocations);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

locRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const myLocations = await CountLocDang.findAll({
      where: { countryId: id },
    });
    const allLocations = await Location.findAll({
      where: {
        id: {
          [Op.in]: myLocations.map((location) => location.locationId),
        },
      },
    });
    return res.json(allLocations);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});
// ddd
module.exports = locRouter;
