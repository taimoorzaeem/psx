const { IndicesData, validate } = require("../models/indicesData");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let indicesData = new IndicesData(req.body);

  indicesData = await indicesData.save();

  res.send(indicesData);
});

module.exports = router;
