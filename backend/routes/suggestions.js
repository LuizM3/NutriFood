var express = require("express");
var router = express.Router();
var connection = require("../db");

require("dotenv").config();

router.post("/", async (req, res) => {
  const { suggestion, idUsuario } = req.body;
  const today = new Date();
  // const data = today.toLocaleDateString();
  connection.query(
    "INSERT INTO suggestion (suggestion, idUsuario, data_criacao) VALUES ( ?, ?, ? )",
    [suggestion, idUsuario, today],
    (error, resp) => {
      if (error) {
        res.status(500).json({ massage: error });
      } else {
        res.status(200).json({ massage: "Success suggestion" });
      }
    }
  );
});

module.exports = router;
