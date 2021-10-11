"use strict";

const user = require("express").Router();
const userController = require("../controllers/userController");

user.post("/users/register", userController.reg);
user.post("/users/login", userController.log);
// user.get("/user/account", userController.findUser);

module.exports = user;
