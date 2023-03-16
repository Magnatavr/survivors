const express = require("express");
const { Danger } = require("../db/models");

const articleRouter = express.Router();

articleRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const textOneDanger = await Danger.findOne({
      where: { id },
    });
    return res.json(textOneDanger);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

module.exports = articleRouter;
