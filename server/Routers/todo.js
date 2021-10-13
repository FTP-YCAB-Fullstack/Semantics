"use strict";

const activity = require("express").Router();
const activityController = require("../controllers/activitycontroller");

activity.post("/todos", activityController.addTodo);
activity.get("/todos", activityController.allTodo);
activity.patch("/todos", activityController.updateTodo);
activity.delete("/todos", activityController.deleteTodo);

module.exports = activity;
