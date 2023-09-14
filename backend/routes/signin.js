var connection = require("../db");
var express = require("express");
var router = express.Router();

require("dotenv").config();

const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { email, senha } = req.body;

  connection.query(
    "SELECT  * FROM users WHERE email = ? AND senha = ?",
    [email, senha],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" }); // Enviar um status de erro em caso de falha na consulta
      } else {
        if (results.length > 0) {
          const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: 300, });

          connection.query("UPDATE users SET token = ? WHERE email = ?", [token, email], 
          (error, results) => {
            if(error){
              res.status(500).json({ message: "erro" });
            }
            else{
              res.status(200).json({ token, message: "Login"});
            }
          });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      }
    }
  );
});

module.exports = router;