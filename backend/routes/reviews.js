var connection = require("../db");
var express = require("express");
var router = express.Router();

router.post("/", async (req, res) => {
  const {
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    idUsuario,
  } = req.body;

  connection.query(
    "INSERT INTO review ( apresentacao, variedade, saborDaRefeicao, saborDoSuco, saborDaSobremesa, temperaturaDoAlimento, atendimento, higiene, temperaturaDoAmbiente, tempoDeEspera, idUsuario ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      group1,
      group2,
      group3,
      group4,
      group5,
      group6,
      group7,
      group8,
      group9,
      group10,
      idUsuario,
    ],
    (error, result) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(201).json({ message: "alaviação concluida" });
      }
    }
  );
});

module.exports = router;
