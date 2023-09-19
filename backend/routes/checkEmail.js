const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/', (req, res) => {
    const { email } = req.params;

    // Verifique se o email já está cadastrado
    connection.query(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: 'An error occurred' });
            } else {
                const isUnique = results.length === 0;
                res.json({ isUnique });
            }
        }
    );
});

module.exports = router;
