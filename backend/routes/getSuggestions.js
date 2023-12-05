const express = require("express");
const router = express.Router();
const connection = require("../db");

router.post("/", (req, res) => {
  const id = req.body.id;
  connection.query(
    "SELECT suggestion, data_criacao, id FROM suggestion WHERE idUsuario = ?;",
    [id],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" });
      } else {
        const sugestoes = results.map((result) => result.suggestion);
        const data_criacao = results.map((result) => result.data_criacao);
        const id_sugestao = results.map((result) => result.id);
        res
          .status(200)
          .json({
            message: "OK",
            suggestions: sugestoes,
            data_criacao,
            id: id_sugestao,
          });
      }
    }
  );
});

module.exports = router;
