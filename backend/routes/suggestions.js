var express = require('express');
var router = express.Router();
var connection = require("../db");

require('dotenv').config();

router.post("/", async (req, res) => {
    const { suggestion, idUsuario } = req.body;

    connection.query("INSERT INTO suggestion (suggestion, idUsuario) VALUES ( ?, ? )", [suggestion, idUsuario], (error, resp) => {
        if(error){
            res.status(500).json({ massage: error });
        } else {
            res.status(200).json({ massage: "Success suggestion"});
        }
    })
})

module.exports = router;
