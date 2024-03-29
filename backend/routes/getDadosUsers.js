const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {
  connection.query(
    "SELECT id, vinculoAoIfes, cafeDaManha, almoco, lancheDaTarde, jantar, vegetariano FROM users",
    (error, results) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        const id = results.map((result) => result.id);
        const vinculoAoIfes = results.map((result) => result.vinculoAoIfes);
        const cafeDaManha = results.map((result) => result.cafeDaManha);
        const almoco = results.map((result) => result.almoco);
        const lancheDaTarde = results.map((result) => result.lancheDaTarde);
        const jantar = results.map((result) => result.jantar);
        const vegetariano = results.map((result) => result.vegetariano);

        res
          .status(200)
          .json({
            id,
            vinculoAoIfes,
            cafeDaManha,
            almoco,
            lancheDaTarde,
            jantar,
            vegetariano,
          });
      }
    }
  );
});

module.exports = router;
