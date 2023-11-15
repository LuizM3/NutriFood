const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {
  const  email  = req.query.email;
  // Verifique se o email já está cadastrado]
  console.log(email);
  connection.query(
    "SELECT email FROM users WHERE email = ?;",
    [email],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" });
      } else {
        console.log(results); 
        if(results.length != 0){
          res.json({ isUnique: false });
        } else{
          res.json({ isUnique: true });
        }
      }
    }
  );
});

module.exports = router;
