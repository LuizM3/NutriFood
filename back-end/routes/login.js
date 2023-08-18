const express = require("express");
const router = express.Router();
const connection = require("../db");

router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  // Verifique se o usuário existe e se a senha corresponde no banco de dados
  connection.query(
    "SELECT * FROM users WHERE email = ? AND senha = ?",
    [email, senha],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" });
      } else if (results.length === 1) {
        res.status(200).json({ message: "Login bem-sucedido" });
      } else {
        res.status(401).json({ error: "Credenciais inválidas" });
      }
    }
  );
});

module.exports = router;
