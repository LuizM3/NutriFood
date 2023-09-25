var connection = require("../db");
var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();

router.post("/", async (req, res) => {
  const { email, senha } = req.body;

  // Consulta o usuário pelo email
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
            const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: 300 });
            // Atualiza o token no banco de dados (se necessário)
            // connection.query("UPDATE users SET token = ? WHERE email = ?", [token, email], (error, updateResult) => {
            //   if (error) {
            //     res.status(500).json({ message: "erro" });
            //   }
            // });
            res.status(200).json({ token, message: "Login" });
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
