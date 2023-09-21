var express = require('express');
var router = express.Router();
var connection = require("../db");


router.get("/", (req, res) => {
    const token = req.query.token;
    let validation;
    
    connection.query("SELECT * FROM users WHERE token = ?", [ token ], (error, result) => {
        if(error){
            validation = false;
            return res.status(500).json({ validation, error });
        }
        
        if(result.length > 0){
            validation = true;
            const user = result[0];         
            return res.status(200).json({ validation, user });
        }
    });
})


module.exports = router;