var connection = require("../db");
var express = require("express");
var router = express.Router();


// router.get("/", function (req, res) {
//     res.send("oi");
// });


router.post("/", async (req, res) => {
    const { nome, email, senha } = req.body;

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
                    "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)",
                    [nome, email, senha],
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
});

module.exports = router;
