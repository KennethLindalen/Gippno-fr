const dotenv = require("dotenv").config();
const monk = require("monk");

const db = monk(process.env.DB_CONNECTION_INFO);

module.exports = db;