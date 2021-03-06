"use strict";

const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const authentication = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return next({ code: 401, message: "required access token" });
    }
    const jwtPayload = jwt.verify(token, process.env.SECREAT_KEY);
    const user = await userModel.findOne({ _id: jwtPayload.id });

    if (!user) {
      return next({ code: 404, message: "User Not Found" });
    }

    req.currentUser = {
      ...user._doc,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
