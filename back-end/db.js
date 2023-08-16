// var mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: "localhost:3306",
//     user: "root",
//     password: "",
//     database: "integrador",
// });
// export default connection;

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'users'
});

module.exports = connection;

// connection.connect();

// connection.query('SELECT * FROM users', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();