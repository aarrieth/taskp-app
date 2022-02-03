const { Pool } = require("pg");
const databaseSettings = require("../config/database");

const pool = new Pool(databaseSettings);

module.exports = pool;
