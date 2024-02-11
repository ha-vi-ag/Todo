const mongoose = require("mongoose");

const Tasks = require("../models/tasks");

const fetchTasks = async (req, res, next) => {
  const userId = req.user.userId;

  const tasksList = await Tasks.find({ userId });
  return res.status(200).json({ tasks: tasksList });
};

const addTask = async (req, res, next) => {
  const { title, description } = req.body;
  const userId = req.user.userId;

  await Tasks.create({ title, description, userId });
  return res.sendStatus(201);
};

const editTask = async (req, res, next) => {
  const userId = req.user.userId;

  const { taskId, title, description } = req.body;

  await Tasks.updateOne(
    { _id: taskId, userId: userId },
    { $set: { title, description } }
  );

  return res.sendStatus(200);
};

const deleteTask = async (req, res, next) => {
  const userId = req.user.userId;

  const taskId = req.params.taskId;

  await Tasks.deleteOne({ _id: taskId, userId: userId });

  return res.sendStatus(204);
};

module.exports = {
  fetchTasks,
  addTask,
  editTask,
  deleteTask,
};
