const express = require("express");
const { User } = require("../db/models");

const adminsRouter = express.Router();

adminsRouter.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll({
      where: {
        role: "admin",
      },
    });
    return res.json(allUsers);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

module.exports = adminsRouter;
