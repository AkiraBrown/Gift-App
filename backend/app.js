const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userController = require("./controllers/user.controller");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/user", userController);

app.use("*", (req, res) => {
  res.status(404).send("Sorry, Page not found");
});

module.exports = app;
