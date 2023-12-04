const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {   
  const  id  = req.query.id;
    connection.query(
        "SELECT vinculoAoIfes, cafeDaManha, almoco, lancheDaTarde, jantar, vegetariano FROM users WHERE id = ?", [id],
        (error, results) => {
            if(error){
                res.status(500).json({ error });
            } else {
                const vinculoAoIfes = results.map((result) => result.vinculoAoIfes);
                const cafeDaManha = results.map((result) => result.cafeDaManha);
                const almoco = results.map((result) => result.almoco);
                const lancheDaTarde = results.map((result) => result.lancheDaTarde);
                const jantar = results.map((result) => result.jantar);
                const vegetariano = results.map((result) => result.vegetariano);

                res.status(200).json({ vinculoAoIfes, cafeDaManha, almoco, lancheDaTarde, jantar, vegetariano });
            }
        }
    )
})

router.post("/", (req, res)=>{
  const id = req.body.id;
  const vinculo = req.body.vinculo;
  const cafeDaManha = req.body.cafe;
  const almoco = req.body.alm;
  const lancheDaTarde = req.body.lanche;
  const jantar = req.body.jant;
  const vegetariano = req.body.veg;

    connection.query(
        "UPDATE users SET VinculoAoIfes = ?, cafeDaManha = ?, almoco = ?, lancheDaTarde = ?, jantar = ?, vegetariano = ? WHERE id = ?", [vinculo, cafeDaManha, almoco, lancheDaTarde, jantar, vegetariano, id],
        (error, results) => {
            if(error){
                res.status(500).json({ error: error });
            } else {
                res.status(200).json({ message: "Success" });
            }
        }
    )
})
module.exports = router;