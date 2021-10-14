"use strict";

const userModel = require("../models/user");

class activity {
  static update = async (req, res, next) => {
    try {
      const currentUser = req.currentUser;
      const subject = req.body;

      const user = await userModel.findOne({ userName: currentUser.userName });

      if (!user) {
        next({ code: 404, message: "User Not Found" });
        return;
      }

      const update = await userModel.updateOne(
        { userName: currentUser.userName },
        { $set: { "activity.subject": subject } }
      );

      res.status(200).json({ update });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = activity;
