const express = require("express");
const router = express.Router();
const connection = require("../db");

router.post("/", (req, res) => {
  const conteudoNovo = req.body.salvar;
  const id = req.body.id;
  const conteudoAntigo = req.body.conteudo;
  console.log(conteudoNovo);
  console.log(id);
  connection.query(
    "UPDATE suggestion SET suggestion = ? WHERE idUsuario = ? AND suggestion = ?",
    [conteudoNovo, id, conteudoAntigo],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" });
      } else {
        console.log('Funcionou');
        res
          .status(200)
          .json({
            message: "SALVO",
            conteudoNovo: conteudoNovo,
          });
      }
    }
  );
});

module.exports = router;
