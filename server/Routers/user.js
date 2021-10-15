"use strict";

const multer = require("multer");
const path = require("path");
const user = require("express").Router();
const userController = require("../controllers/user");

const auth = require("../middlewares/authentication");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./public/upload`);
  },

  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

user.post("/users/register", userController.reg);
user.post("/users/login", userController.log);
user.post("/users/update", auth, userController.update);
user.patch("/users/upload", auth, upload.single("picture"), (req, res) => {
  let finalUrlImage = "http://localhost:8888" + "/upload/" + req.file.filename;
  res.status(200).json({
    status: "success",
    image: finalUrlImage,
  });
});

module.exports = user;
