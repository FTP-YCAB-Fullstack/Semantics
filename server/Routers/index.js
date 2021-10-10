"use stroct";

const mainRouter = require("express").Router();
const userRouter = require("./userRouter");

mainRouter.use(userRouter);

module.exports = mainRouter;
