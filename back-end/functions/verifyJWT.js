// No arquivo verifyJWT.js
const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  const token = req.headers.authorization; // Obtenha o token do header (ou de onde você o está passando)

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: "Invalid token" });
    }

    // Adicione os detalhes decodificados à solicitação para uso posterior
    req.user = decoded;
    next();
  });
}

module.exports = verifyJWT;
