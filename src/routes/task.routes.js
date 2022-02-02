const { Router } = require("express");
const db = require("../database");
const router = Router();

router.get("/", (req, res) => {
  console.log(db);
  res.json({
    message: "Getting all data",
  });
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
