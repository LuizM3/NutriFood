// import express from "express";
// const router = express.Router();
// // import connection from "../db";

// router.get('/', function (req, res) {
//     // connection.query('SELECT * FROM tabela', (error, results) => {
//     //   if (error) throw error;
//     //   res.json(results);
//     // });
//     res.send("Deu certo");
// });

// export default router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send("funcionamnnbnmbmnbnmbnmbnndo amem");
});

module.exports = router;