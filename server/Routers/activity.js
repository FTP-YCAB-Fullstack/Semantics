"use strict";

const activity = require("express").Router();
const activityController = require("../controllers/activity");
const auth = require("../middlewares/authentication");

// activity.post("/todos", activityController.addTodo);
// activity.get("/todos", activityController.allTodo);
activity.post("/subject", auth, activityController.subject);
activity.post("/upcomingexam", auth, activityController.upcomingexam);
activity.post("/seminar", auth, activityController.seminar);
activity.post("/workshop", auth, activityController.workshop);
activity.post("/competition", auth, activityController.competition);

activity.get("/subject", auth, activityController.subjectGet);
// activity.delete("/todos", activityController.deleteTodo);

module.exports = activity;
