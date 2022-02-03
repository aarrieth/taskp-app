const db = require("../database");

const getAllTasks = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM task");
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Task not found",
      });
    res.json(result.rows);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getAnUniqueTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query("SELECT * FROM task WHERE id = $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });
    res.json(result.rows);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const payload = await db.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(payload.rows[0]);
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const updateAnUniqueTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await db.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        messahe: "Task not found",
      });

    res.json(result.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteAnUniqueTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query("DELETE FROM task WHERE id = $1", [id]);
    if (result.rowCount === 0)
      return res.status(404).json({ message: "Task not found" });
    res.sendStatus(204);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllTasks,
  getAnUniqueTasks,
  createTask,
  updateAnUniqueTasks,
  deleteAnUniqueTasks,
};
