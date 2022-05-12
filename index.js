const Joi = require("joi");
const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const marketData = require("./routes/marketData");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://localhost/psx")
  .then(() => console.log("Connected to Mongodb..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const corsOptions = {
  origin: "*", // Allow any URL
  credentials: true, // Allow cookies
};

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/users", users);
app.use("/api/marketData", marketData);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
