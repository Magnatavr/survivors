const express = require("express");
const { Op } = require("sequelize");
const { CountLoc } = require("../db/models");
const { Location } = require("../db/models");

const locRouter = express.Router();

locRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const myLocations = await CountLoc.findAll({
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

module.exports = locRouter;
