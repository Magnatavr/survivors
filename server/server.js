const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const store = require("session-file-store");
const authRouter = require("./routes/authRouter");
const adminsRouter = require("./routes/adminRouter");
const countryRouter = require("./routes/getCountryRouter");
const locRouter = require("./routes/locRouter");
const dangRouter = require("./routes/dangRouter");
const articleRouter = require("./routes/articleRouter");
const changeRouter = require("./routes/changeDataRouter");
const apiLocRouter = require("./routes/apiLocRouter");
const apiDanRouter = require("./routes/apiDanRouter");
const createRouter = require("./routes/createRouter");
require("dotenv").config();

const FileStore = store(session);
const PORT = process.env.PORT || 3001;

const sessionConfig = {
  name: "sid",
  secret: "werwer",
  resave: true,
  store: new FileStore(),
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(session(sessionConfig));
app.use(express.static("public"));

app.use("/api/auth/", authRouter);
app.use("/api/admins/", adminsRouter);
app.use("/api/country/", countryRouter);
app.use("/api/locations/", locRouter);
app.use("/api/dangers/", dangRouter);
app.use("/api/articles/", articleRouter);
app.use("/api/change/", changeRouter);
app.use("/api/locatos", apiLocRouter);
app.use("/api/dangatos", apiDanRouter);
app.use("/api/new/", createRouter)


app.listen(PORT, '192.168.2.252', () => console.log(`Server has started on http://192.168.2.252:${PORT}`));
