var connection = require("../db");
var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10; 
require("dotenv").config();

router.post("/", async (req, res) => {
  const { id, senhaNova, senha } = req.body;
  console.log(id);
  console.log(senha);
  console.log(senhaNova);

  connection.query(
    "SELECT senha FROM users WHERE id = ?",
    [id],
    async (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" });
      } else {
        console.log(results.map((result) => result.senha)[0]);
        const match = await bcrypt.compare(
          senha,
          results.map((result) => result.senha)[0]
        );
        console.log(match);
        if (match) {
          const hashedSenha = await bcrypt.hash(senhaNova, saltRounds);
          connection.query(
            "UPDATE users SET senha = ? WHERE id = ?",
            [hashedSenha, id],
            (error, results) => {
              if (error) {
                res.status(500).json({ error: "Um erro ocorreu" });
              } else {
                res.status(201).json({ message: "PASSOU" });
              }
            }
          );
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      }
    }
  );
});

module.exports = router;
