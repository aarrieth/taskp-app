const db = require("../database/connection");

const getAllTasks = async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM tasks");
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Task not found",
      });
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getAnUniqueTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query("SELECT * FROM tasks WHERE id = $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const payload = await db.query(
      "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(payload.rows[0]);
  } catch (error) {
    next(error);
  }
};

const updateAnUniqueTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await db.query(
      "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        messahe: "Task not found",
      });

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const deleteAnUniqueTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query("DELETE FROM tasks WHERE id = $1", [id]);
    if (result.rowCount === 0)
      return res.status(404).json({ message: "Task not found" });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getAnUniqueTasks,
  createTask,
  updateAnUniqueTasks,
  deleteAnUniqueTasks,
};
