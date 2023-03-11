const express = require("express");
const { Country } = require("../db/models");

const countryRouter = express.Router();

countryRouter.get("/", async (req, res) => {
  try {
    const allCountry = await Country.findAll();
    return res.json(allCountry);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

module.exports = countryRouter;
