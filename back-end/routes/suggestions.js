var express = require('express');
var verify = require('../functions/verifyJWT');
var router = express.Router();

require('dotenv').config();

router.get('/', verify, function (req, res) {
    if (req.error) {
        res.status(500).json({ error: 'An error occurred' });
    } else {
        res.send("Autenticado");
    }
});

module.exports = router;
