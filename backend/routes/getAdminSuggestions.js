const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {
//   const id = req.body.id;
//   console.log(id);
  connection.query(
    "SELECT suggestion, data_criacao FROM suggestion;",
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" });
      } else {
        const sugestoes = results.map((result) => result.suggestion);
        const data_criacao = results.map((result) => result.data_criacao);
        console.log(sugestoes);
        console.log(data_criacao);
        res.status(200).json({ message: "FEITO", suggestions: sugestoes, data_criacao: data_criacao});
      }
    }
  );
});

module.exports = router;
