const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {
  const response = [];
  const dia = req.query.dia;

  try {
    connection.query(
      "SELECT comida, bebida FROM cafeDaManha WHERE dia = ?", [dia],
      (error, results) => {
        if (error) {
          res.status(500).json({ error: "An error occurred" });
        } else {
          response.push(results);
        }
      }
    );

    setTimeout(() => {
      connection.query(
        "SELECT principal, opcao, vegetariano, arroz, feijao, guarnicao, salada1, salada2, sobremesa, suco FROM almoco WHERE dia = ?", [dia],
        (error, results) => {
          if (error) {
            res.status(500).json({ error: "An error occurred" });
          } else {
            response.push(results);
          }
        }
      );
    }, 300);

    setTimeout(() => {
      connection.query(
        "SELECT comida, bebida FROM lancheDaTarde WHERE dia = ?", [dia],
        (error, results) => {
          if (error) {
            res.status(500).json({ error: "An error occurred" });
          } else {
            response.push(results);
          }
        }
      );
    }, 600);

    setTimeout(() => {
      connection.query(
        "SELECT principal, opcao, vegetariano, arroz, feijao, guarnicao, salada1, salada2, sobremesa, suco  FROM jantar WHERE dia = ?", [dia],
        (error, results) => {
          if (error) {
            res.status(500).json({ error: "An error occurred" });
          } else {
            response.push(results);
          }
        }
      );
    }, 900);

    setTimeout(() => {
      res.status(200).json({ response: response });
    }, 1200);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
