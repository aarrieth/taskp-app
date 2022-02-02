const { Router } = require("express");
const db = require("../database");
const router = Router();

router.get("/", async (req, res) => {
  res.json({
    message: "Welcome",
    "Get all taks": "http://localhost:3030/task",
    "Get an unique taks": "http://localhost:3030/task/:id",
  });
});

router.get("/task", async (req, res) => {
  await db.connect();
  const result = await db.query("SELECT * FROM task");
  res.json(result.rows[0]);
  await db.end();
});

router.get("/task/:id", (req, res) => {
  res.json({
    message: "getting data of an unique task",
  });
});

router.post("/task", (req, res) => {
  res.json({
    message: "Sending data",
  });
});

router.put("task/:id", (req, res) => {
  res.json({
    message: "Updating data of an unique task",
  });
});

router.delete("/task/:id", (req, res) => {
  res.json({
    message: "Deleting data!!!",
  });
});

module.exports = router;
