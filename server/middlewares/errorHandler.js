"use strict";

const errorHandler = (error, req, res, next) => {
  let code;
  let message;

  switch (error.name) {
    case "ErrorLogin":
      code = 400;
      message = error.message;
      break;

    default:
      break;
  }

  res.status(code || 500).send({
    message: message || "Internal Error",
  });
};

module.exports = errorHandler;
