const tasksModel = require("../models/tasks");

const getTasks = async (req, res) => {
  await tasksModel.find({}, (err, tasks) => {
    if (err) {
      return res.status(400).send(`Task not valid ${err}`);
    }
    if (!tasks) {
      return res.status(404).send("Task not found");
    }
    res.status(200).send(tasks);
  });
};
const getTaskById = async (req, res) => {
  await tasksModel.find({ _id: req.params.id }, (err, task) => {
    if (err) {
      return res.status(404).send("Task not found");
    }
    res.status(200).send(task);
  });
};
const createTask = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send(`Task not valid, the request body is empty`);
  }
  const task = new tasksModel(body);
  task
    .save()
    .then(() => res.status(201).send(`Task ${body.title} created successfully`))
    .catch(() =>
      res.status(400).send(`Task ${body.title} not created missing something`)
    );
};
const updateTask = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send(`Task not valid, the request body is empty`);
  }else{
    await tasksModel
    .updateOne({_id: req.params.id}, req.body)
    .then(() => res.status(200).send('Task updated successfully'))
    .catch(() => res.status(400).send(`Task not updated something `))
  }
};
const deleteTask = async (req, res) => {
  await tasksModel
  .findOneAndDelete({id: req.params.id}, req.params.id)
  .then(() => res.status(200).send('Task deleted successfully'))
  .catch((err) => res.status(404).send(`Task not found: ${err.message}`))
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask};
