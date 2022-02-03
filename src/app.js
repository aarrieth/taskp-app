// dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//rootes to het tasks endpoints from database
const taskRouter = require("./routes/task.routes");

const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//task router to get endpoints
app.use(taskRouter);

//handler error middleware
app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

module.exports = app;
