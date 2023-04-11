const express = require("express");
const { Location } = require("../db/models");
const { CountLocDang } = require("../db/models");

const apiLocRouter = express.Router();

apiLocRouter.post("/", async (req, res) => {
  const { currCountry, locationId } = req.body;
  try {
    const [tabl, created] = await CountLocDang.findOrCreate({
      where: { countryId: currCountry, locationId },
      // defaults: {
      //   dangerId: 1,
      // },
    });
    if (created) {
      const locId = tabl.locationId;
      const oneLoc = await Location.findByPk(locId);
      return res.json(oneLoc);
    }
    return res.sendStatus(406);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

apiLocRouter.delete("/delitos", async (req, res) => {
  console.log(req.body);
  const { currCountry, locationId } = req.body;
  try {
    const deletedRows = await CountLocDang.destroy({
      where: { countryId: currCountry, locationId },
    });
    if (deletedRows > 0) {
      return res.json(locationId); // 204 - No Content
    }
    return res.sendStatus(406); // 404 - Not Found
  } catch (err) {
    console.log(err);
    return res.sendStatus(500); // 500 - Internal Server Error
  }
});

module.exports = apiLocRouter;
