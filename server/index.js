"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT;

const Main = require("./Routers/index");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const url = process.env.URL || "mongodb://localhost:27017/note";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Server Connected`);
  })
  .catch((err) => {
    console.log(`Error connect to server`, err);
    process.exit();
  });

app.use(Main);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Connect on port ${PORT}`));
