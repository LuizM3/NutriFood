var connection = require("../db");
var express = require("express");
var router = express.Router();

router.post("/", async (req, res) => {
  const { jsonAlmoco, jsonCafeDaManha, jsonJantar, jsonLancheDaTarde } =
    req.body;

  let textAlmoco = "";
  let textCafeDaManha = "";
  let textLancheDaTarde = "";
  let textJantar = "";

  let contAlmoco = 0;
  for (const element of jsonAlmoco.data) {
    contAlmoco++;
    if (contAlmoco < jsonAlmoco.data.length) {
      textAlmoco +=
        "('" +
        String(element.dia) +
        "', '" +
        String(element.principal) +
        "', '" +
        String(element.opcao) +
        "', '" +
        String(element.vegetariano) +
        "', '" +
        String(element.arroz) +
        "', '" +
        String(element.feijao) +
        "', '" +
        String(element.guarnicao) +
        "', '" +
        String(element.salada1) +
        "', '" +
        String(element.salada2) +
        "', '" +
        String(element.sobremesa) +
        "', '" +
        String(element.suco) +
        "'),";
    } else {
      textAlmoco +=
        "('" +
        String(element.dia) +
        "', '" +
        String(element.principal) +
        "', '" +
        String(element.opcao) +
        "', '" +
        String(element.vegetariano) +
        "', '" +
        String(element.arroz) +
        "', '" +
        String(element.feijao) +
        "', '" +
        String(element.guarnicao) +
        "', '" +
        String(element.salada1) +
        "', '" +
        String(element.salada2) +
        "', '" +
        String(element.sobremesa) +
        "', '" +
        String(element.suco) +
        "')";
    }
  }
  contAlmoco = 0;

  let contJantar = 0;
  for (const element of jsonJantar.data) {
    contJantar++;
    if (contJantar < jsonJantar.data.length) {
      textJantar +=
        "('" +
        String(element.dia) +
        "', '" +
        String(element.principal) +
        "', '" +
        String(element.opcao) +
        "', '" +
        String(element.vegetariano) +
        "', '" +
        String(element.arroz) +
        "', '" +
        String(element.feijao) +
        "', '" +
        String(element.guarnicao) +
        "', '" +
        String(element.salada1) +
        "', '" +
        String(element.salada2) +
        "', '" +
        String(element.sobremesa) +
        "', '" +
        String(element.suco) +
        "'),";
    } else {
      textJantar +=
        "('" +
        String(element.dia) +
        "', '" +
        String(element.principal) +
        "', '" +
        String(element.opcao) +
        "', '" +
        String(element.vegetariano) +
        "', '" +
        String(element.arroz) +
        "', '" +
        String(element.feijao) +
        "', '" +
        String(element.guarnicao) +
        "', '" +
        String(element.salada1) +
        "', '" +
        String(element.salada2) +
        "', '" +
        String(element.sobremesa) +
        "', '" +
        String(element.suco) +
        "')";
    }
  }
  contJantar = 0;

  let contCafe = 0;
  for (const element of jsonCafeDaManha.data) {
    contCafe++;
    if (contCafe < jsonCafeDaManha.data.length) {
      textCafeDaManha +=
        "( '" +
        String(element.dia) +
        "', '" +
        String(element.comida) +
        "', '" +
        String(element.bebida) +
        "'),";
    } else {
      textCafeDaManha +=
        "( '" +
        String(element.dia) +
        "', '" +
        String(element.comida) +
        "', '" +
        String(element.bebida) +
        "')";
    }
  }
  contCafe = 0;

  let contLanche = 0;
  for (const element of jsonLancheDaTarde.data) {
    contLanche++;
    if (contLanche < jsonLancheDaTarde.data.length) {
      textLancheDaTarde +=
        "( '" +
        String(element.dia) +
        "', '" +
        String(element.comida) +
        "', '" +
        String(element.bebida) +
        "'),";
    } else {
      textLancheDaTarde +=
        "('" +
        String(element.dia) +
        "', '" +
        String(element.comida) +
        "', '" +
        String(element.bebida) +
        "')";
    }
  }
  contLanche = 0;

  try {
    connection.query("TRUNCATE TABLE jantar");
    connection.query("TRUNCATE TABLE almoco");
    connection.query("TRUNCATE TABLE cafeDaManha");
    connection.query("TRUNCATE TABLE lancheDaTarde");
    setTimeout(() => {
      connection.query(
        "INSERT INTO almoco (dia, principal, opcao, vegetariano, arroz, feijao, guarnicao, salada1, salada2, sobremesa, suco) VALUES " +
          textAlmoco
      );
      connection.query(
        "INSERT INTO jantar (dia, principal, opcao, vegetariano, arroz, feijao, guarnicao, salada1, salada2, sobremesa, suco) VALUES" +
          textJantar
      );
      connection.query(
        "INSERT INTO cafeDaManha (dia, comida, bebida) VALUES" + textCafeDaManha
      );
      connection.query(
        "INSERT INTO lancheDaTarde (dia, comida, bebida) VALUES" +
          textLancheDaTarde
      );
      res.status(200).json({ sucess: "sucess" });
    }, 2000);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
