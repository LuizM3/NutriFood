var connection = require("../db");
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    connection.query('SELECT email FROM users', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'An error occurred' }); // Enviar um status de erro em caso de falha na consulta
        } else {
            const emails = results.map(result => result.email.replace(/"/g, ''));
            const concatenatedEmails = emails.join(', ');
            res.send(concatenatedEmails);
        }
    });
});

module.exports = router;
