const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/', (req, res) => {

    connection.query(
        'SELECT * FROM suggestion',
        (error, results) => {
            if (error) {
                res.status(500).json({ error: 'An error occurred' });
            } else {
                const suggestion = results.length === 0;
                res.json({ suggestion }).status(200);
            }
        }
    );
});

module.exports = router;