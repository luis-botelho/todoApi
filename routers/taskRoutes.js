const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskControl");

router.get("/tasks", taskController.getTasks);
router.get("/task/:id", taskController.getTaskById);
router.post("/task/new", taskController.createTask);
router.put("/task/edit/:id", taskController.updateTask);
router.delete("/task/delet/:id", taskController.deleteTask);

module.exports = router;
