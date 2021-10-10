"use strict";

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  {
    collection: "user",
  }
);

const model = mongoose.model("user", UserSchema);

module.exports = model;
