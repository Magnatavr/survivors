const express = require("express");
const { Country } = require("../db/models");
const { Location } = require("../db/models");
const { Danger } = require("../db/models");

const createRouter = express.Router();

createRouter.post("/country", async (req, res) => {
  const { name } = req.body;
  try {
    const [tabl, created] = await Country.findOrCreate({
      where: { name },
    });
    if (created) {
      return res.sendStatus(202);
    }
    return res.sendStatus(406);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

createRouter.post("/location", async (req, res) => {
  const { name } = req.body;
  try {
    const [tabl, created] = await Location.findOrCreate({
      where: { name },
    });
    if (created) {
      return res.sendStatus(202);
    }
    return res.sendStatus(406);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

createRouter.post("/article", async (req, res) => {
  const { name, article } = req.body;
  try {
    const [tabl, created] = await Danger.findOrCreate({
      where: { name },
      defaults: {
        article,
      },
    });
    if (created) {
      return res.sendStatus(202);
    }
    return res.sendStatus(406);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

module.exports = createRouter;
