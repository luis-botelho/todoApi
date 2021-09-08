const mongoose = require("mongoose");

const tasksModel = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, required: true },
    status: { type: String, required: true },
    deadline: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", tasksModel);
