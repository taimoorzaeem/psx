const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {
      type: String,
      trim: true,
      minlength: 5,
      maxlength: 50,
      lowercase: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      maxlength: 255,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 5,
      maxlength: 50,
      required: true,
    },
  })
);

function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().trim().min(5).max(50).lowercase().required(),
    email: Joi.string().email().max(255).required(),
    password: Joi.string().trim().min(5).max(50).required(),
  });

  return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;
