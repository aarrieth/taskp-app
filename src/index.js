const app = require("./app");
const { PORT } = require("./config/variables");

app.listen(PORT, () => {
  console.log(`App run on port: http://localhost:${PORT}/`);
});
