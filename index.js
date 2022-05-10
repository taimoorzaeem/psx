const Joi = require("joi");
const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://localhost/psx")
  .then(() => console.log("Connected to Mongodb..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/users", users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
