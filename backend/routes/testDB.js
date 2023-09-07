var connection = require("../db");
var express = require('express');
var router = express.Router();

require("dotenv").config();

const jwt = require("jsonwebtoken");

// router.get('/', function (req, res) {
//     connection.query('SELECT email FROM users', (error, results) => {
//         if (error) {
//             res.status(500).json({ error: 'An error occurred' }); // Enviar um status de erro em caso de falha na consulta
//         } else {
//             const emails = results.map(result => result.email.replace(/"/g, ''));
//             const concatenatedEmails = emails.join(', ');
//             res.send(concatenatedEmails);
//         }
//     });
// });

router.get("/", (req, res) => {
    const email = "luiz@gmail.com";
    const token = jwt.sign({ email }, process.env.SECRET, {
        expiresIn: 300,
      })
      res.send(token);

});
 
module.exports = router;
