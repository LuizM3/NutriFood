// var mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: "localhost:3306",
//     user: "root",
//     password: "",
//     database: "integrador",
// });
// export default connection;


require('dotenv').config();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
  // host     : "localhost",
  // user     : "root",
  // password : "",
  // database : "nutrifood"
});

module.exports = connection;

// connection.connect();

// connection.query('SELECT * FROM users', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();