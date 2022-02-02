const { Pool } = require("pg");

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "prueba-tasks",
  passwrod: "m2311_2022",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = db;
