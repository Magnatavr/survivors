const express = require("express");
const { CountLocDang } = require("../db/models");

const changeRouter = express.Router();

changeRouter.post("/", async (req, res) => {
  const { countryId, locationId } = req.body;
  try {
    await CountLocDang.create({
      countryId,
      locationId,
    });
    return res.send(true);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

module.exports = changeRouter;
