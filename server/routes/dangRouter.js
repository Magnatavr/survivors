const express = require("express");
const { Op } = require("sequelize");
const { CountLocDang } = require("../db/models");
const { Danger } = require("../db/models");

const dangRouter = express.Router();

dangRouter.get("/", async (req, res) => {
  try {
    const allDangers = await Danger.findAll();
    return res.json(allDangers);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

dangRouter.post("/dang", async (req, res) => {
  const { id, idCountry } = req.body;

  try {
    const allDangerosInLocation = await CountLocDang.findAll({
      where: { locationId: id, countryId: idCountry },
    });
    const allDangers = await Danger.findAll({
      where: {
        id: {
          [Op.in]: allDangerosInLocation.map((dangers) => dangers.dangerId),
        },
      },
    });
    return res.json(allDangers);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

dangRouter.post("/admindang", async (req, res) => {
  const { locationId, currCountry } = req.body;
  try {
    const allDangerosInLocation = await CountLocDang.findAll({
      where: { locationId, countryId: currCountry },
    });
    console.log(allDangerosInLocation);
    const allDangers = await Danger.findAll({
      where: {
        id: {
          [Op.in]: allDangerosInLocation.map((el) => el.dangerId),
        },
      },
    });
    return res.json(allDangers);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

module.exports = dangRouter;
