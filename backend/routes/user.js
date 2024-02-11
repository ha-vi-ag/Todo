const express = require("express");

const userControllers = require("../controllers/user");
const { isAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/tasks-list", isAuth, userControllers.fetchTasks);

router.put("/add-task", isAuth, userControllers.addTask);

router.patch("/edit-task", isAuth, userControllers.editTask);

router.delete("/delete-task/:taskId", isAuth, userControllers.deleteTask);

module.exports = router;
