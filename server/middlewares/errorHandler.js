"use strict";

const errorHandler = (error, req, res, next) => {
  let code;
  let message;

  switch (error.name) {
    case "ErrorLogin":
      code = 400;
      message = error.message;
      break;

    case "UserIsNotFound":
      code = 404;
      message = error.message;
      break;

    default:
      break;
  }

  res.status(code || 500).json({
    message: message || "Internal Error",
  });
};

module.exports = errorHandler;
