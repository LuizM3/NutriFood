var connection = require("../db");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("oi");
});

router.post("/", async (req, res) => {
  const { nome, email, senha } = req.body;

  connection.query(
    "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, senha],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" }); // Enviar um status de erro em caso de falha na consulta
      } else {
        res.status(201).json({ message: "Cadastro concluido" });
      }
    }
  );
});

module.exports = router;
// const express = require("express");
// const router = express.Router();
// const connection = require("../db");

// router.post("/signup", (req, res) => {
//   const { nome, email, senha } = req.body;

//   // Insira os dados do novo usuário no banco de dados
//   connection.query(
//     "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)",
//     [nome, email, senha],
//     (error, results) => {
//       if (error) {
//         res.status(500).json({ error: "An error occurred" });
//       } else {
//         res.status(201).json({ message: "Cadastro bem-sucedido" });
//       }
//     }
//   );
// });

// module.exports = router;
//             const emails = results.map(result => result.email.replace(/"/g, ''));
//             const concatenatedEmails = emVails.join(', ');
//             res.send(concatenatedEmails);
// const bcrypt = require("bcrypt");
// const hashedPassword = await bcrypt.hash(senha, 10);
