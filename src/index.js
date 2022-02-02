const express = require("express");
const morgan = require("morgan");

const taskRouter = require("./routes/task.routes");

const PORT = 3030;

const app = express();

app.use(morgan("dev"));

//task router to get endpoints
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`App run on port: http://localhost:${PORT}/`);
});
