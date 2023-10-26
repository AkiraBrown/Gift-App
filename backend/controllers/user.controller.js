const express = require("express");
const router = express.Router();

const userModel = require("../models/user.model");

router.get("/", (req, res) => {
  res.json(userModel);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const match = userModel.find((item) => item.id === id);
  if (!match) {
    res.status(404).json({
      status: false,
      message: "user not found",
    });
  } else {
    res.status(200).json(match);
  }
});

module.exports = router;
