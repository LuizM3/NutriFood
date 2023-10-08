const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  // host: process.env.HOST,
  // user: process.env.USER,
  // password: process.env.PASSWORD,
  // database: process.env.DATABASE,
  host     : "localhost",
  user     : "root",
  password : "",
  database : "nutrifood"
});
module.exports = connection;
