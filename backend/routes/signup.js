var connection = require("../db");
var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10; // Número de "rodadas" de hash (maior é mais seguro, mas mais lento)

router.post("/", async (req, res) => {
  const { nome, email, senha, vinculoAoIfes, objetoRefeicoes, vegetariano } = req.body;

  const cafeDaManha = objetoRefeicoes.cafeDaManha;
  const almoco = objetoRefeicoes.almoco;
  const lancheDaTarde = objetoRefeicoes.lancheDaTarde;
  const jantar = objetoRefeicoes.jantar;

  try {
    // Gerar o hash da senha
    const hashedSenha = await bcrypt.hash(senha, saltRounds);

    // Verifique se o email já está cadastrado
    connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (error, results) => {
        if (error) {
          res.status(500).json({ error: "Um erro ocorreu" });
        } else if (results.length > 0) {
          // Se houver resultados, o email já está cadastrado
          res.status(400).json({ error: "Email já cadastrado" });
        } else {
          // O email não está cadastrado, insira-o no banco de dados
          connection.query(
            "INSERT INTO users (nome, email, senha, VinculoAoIfes, cafeDaManha, almoco, lancheDaTarde, jantar, vegetariano) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
              nome,
              email,
              hashedSenha,
              vinculoAoIfes,
              cafeDaManha,
              almoco,
              lancheDaTarde,
              jantar,
              vegetariano,
            ],
            (error, results) => {
              if (error) {
                res.status(500).json({ error: "Um erro ocorreu" });
              } else {
                res.status(201).json({ message: "Cadastro concluído" });
              }
            }
          );
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar o hash da senha" });
  }
});

module.exports = router;
