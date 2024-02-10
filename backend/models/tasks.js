const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  }
});

module.exports = mongoose.model("tasks", taskModel);
