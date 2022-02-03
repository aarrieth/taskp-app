const { Router } = require("express");
const {
  getAllTasks,
  getAnUniqueTasks,
  createTask,
  updateAnUniqueTasks,
  deleteAnUniqueTasks,
} = require("../controllers/task.controllers");

const router = Router();

router.get("/", getAllTasks);

router.get("/task/:id", getAnUniqueTasks);

router.post("/task", createTask);

router.put("/task/:id", updateAnUniqueTasks);

router.delete("/task/:id", deleteAnUniqueTasks);

module.exports = router;
