const express = require("express");

const userControllers = require("../controllers/user");
const { isAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/tasks-list", isAuth, userControllers.fetchTasks);

router.post("/add-task", isAuth, userControllers.addTask);

module.exports = router;
