"use strict";

const activity = require("express").Router();
const activityController = require("../controllers/activity");
const auth = require("../middlewares/authentication");

// activity.post("/todos", activityController.addTodo);
// activity.get("/todos", activityController.allTodo);
activity.post("/subject", auth, activityController.update);
// activity.delete("/todos", activityController.deleteTodo);

module.exports = activity;
