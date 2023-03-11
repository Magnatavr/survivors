const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../db/models");

const authRouter = express.Router();

authRouter.post("/newadmin", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name && !email && !password) return res.sendStatus(401);
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        password: await bcrypt.hash(password, 10),
        name,
        role: "admin",
      },
    });
    if (!created) return res.sendStatus(401);
    const admin = { id: user.id, name, email, role: "admin" };
    return res.json(admin);
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

authRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) return res.sendStatus(401);
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.sendStatus(401);
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = {
        id: user.id,
        name: user.name,
        email,
        role: user.role,
      };
      return res.json({ ...req.session.user });
    }
    return res.sendStatus(401);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

authRouter.get("/check", (req, res) => {
  if (req.session.user) {
    return res.json({ ...req.session.user });
  }
  return res.sendStatus(401);
});

authRouter.post("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("sid");
  res.sendStatus(200);
});

module.exports = authRouter;
