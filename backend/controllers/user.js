const mongoose = require("mongoose");

const Tasks = require("../models/tasks");

const fetchTasks = async (req, res, next) => {
  const userId = req.user.userId;

  try {
    const tasksList = await Tasks.find({ userId });
    return res.status(200).json({ tasks: tasksList });
  } catch (err) {
    next(err);
  }
};

const addTask = async (req, res, next) => {
  const { title, description } = req.body;
  const userId = req.user.userId;

  try {
    await Tasks.create({ title, description, userId });
    return res.status(200).json({ message: "task added" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  fetchTasks,
  addTask,
};
