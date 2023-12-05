const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM review", (error, results) => {
    if (error) {
      res.status(500).json({ error: "An error occurred" });
    } else {
      const reviews = results;
      res.status(200).json({ reviews });
    }
  });
});

module.exports = router;
