const userModel = require("../models/user");

class activityControler {
  static subAdd = async (req, res, next) => {
    try {
      const { subject } = req.body;
    } catch (error) {
      next(error);
    }
  };
}

module.exports = activityControler;
