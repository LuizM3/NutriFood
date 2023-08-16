var connection = require("../db") 
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    let answer = "";
    connection.query('SELECT * FROM users', (error, results) => {
      if (error) throw error;
      res.json(results);
      answer = results;
    });
    res.send(answer);
});

module.exports = router;