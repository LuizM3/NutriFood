var connection = require("../db");
var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
require("dotenv").config();

router.post("/", async (req, res) => {
  const { emailNovo, email, senha } = req.body;

  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" });
      } else {
        if (results.length > 0) {
          const user = results[0];
          // Verifica se a senha fornecida corresponde à senha hashed no banco de dados
          const match = await bcrypt.compare(senha, user.senha);
          if (match) {
            connection.query(
              "UPDATE users SET email = ? WHERE email = ?",
              [emailNovo, email],
              (error, results) => {
                if (error) {
                  res.status(500).json({ error: "Um erro ocorreu" });
                } else {
                  res.status(201).json({ message: "CRUD" });
                }
              }
            );
          } else {
            res.status(401).json({ message: "Invalid credentials" });
          }
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      }
    }
  );
});

module.exports = router;
