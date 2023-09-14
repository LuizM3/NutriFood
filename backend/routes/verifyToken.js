var express = require('express');
var router = express.Router();
var connection = require("../db");


router.get("/", (req, res) => {
    const token = req.query.token;
    // return res.status(200).json({ nome: token});

    connection.query("SELECT nome FROM users WHERE token = ?", [ token ], (error, result) => {
        if(error){
            return res.status(500).json({ message: error, token});
        }

        const name = result[0].nome;

        return res.status(200).json({ message: "success", name});
    });
})

module.exports = router;