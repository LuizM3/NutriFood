const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM review", (error, results) => {
    if (error) {
      res.status(500).json({ error: "An error occurred" });
    } else {
      const review = results.length === 0;
      res.json({ review }).status(200);
    }
  });
});

module.exports = router;
