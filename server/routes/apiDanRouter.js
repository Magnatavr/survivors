const express = require("express");
const { Danger } = require("../db/models");
const { CountLocDang } = require("../db/models");

const apiDanRouter = express.Router();

apiDanRouter.post("/", async (req, res) => {
  const { locationId, countryId, dangerId } = req.body;
  try {
    if (locationId && countryId && dangerId) {
      const [dang, created] = await CountLocDang.findOrCreate({
        where: { countryId, locationId, dangerId },
      });
      if (created) {
        const danId = dang.dangerId;
        const oneDanger = await Danger.findByPk(danId);
        return res.json(oneDanger);
      }
      return res.sendStatus(405);
    }
    return res.sendStatus(406);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

apiDanRouter.delete("/delitos", async (req, res) => {
  console.log(req.body);
  const { locationId, countryId, dangerId } = req.body;
  try {
    const deletedRows = await CountLocDang.destroy({
      where: { countryId, locationId, dangerId },
    });
    if (deletedRows > 0) {
      return res.json(dangerId); // 204 - No Content
    }
    return res.sendStatus(406); // 404 - Not Found
  } catch (err) {
    console.log(err);
    return res.sendStatus(500); // 500 - Internal Server Error
  }
});

module.exports = apiDanRouter;
