var mysql = require('mysql');
require('dotenv').config();
var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  // host     : "localhost",
  // user     : "root",
  // password : "",
  // database : "nutrifood"
  reconnect: true, // Tente reconectar automaticamente
  connectTimeout: 20000, // Aumente o tempo limite de conexão
  timeout: 20000, // Aumente o tempo limite
  connectionLimit: 10
});

connection.on('error', function (err) {
  console.error('Erro de conexão:', err);
});

connection.on('reconnect', function () {
  console.log('Reconectado ao MySQL');
});
module.exports = connection;