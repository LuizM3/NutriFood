const express = require("express");
const router = express.Router();
const connection = require("../db");

router.post("/", (req, res) => {
  const id = req.body.id;
  const idSuggestions = req.body.idSuggestions;
  connection.query(
    "DELETE FROM suggestion WHERE id = ? AND idUsuario = ?",
    [idSuggestions, id],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" });
      } else {
        res.status(200).json({ message: "DELETADO" });
      }
    }
  );
});

module.exports = router;
