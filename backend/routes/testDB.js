var connection = require("../db");
var express = require("express");
var router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await query("SELECT * FROM users");
    const reviews = await query("SELECT * FROM review");
    const suggestions = await query("SELECT * FROM suggestion");

    // Mapeia as reviews e suggestions para os usuários correspondentes usando o idUsuario
    const usersWithReviewsAndSuggestions = users.map((user) => {
      const userReviews = reviews.filter(
        (review) => review.idUsuario == user.id
      );
      const userSuggestions = suggestions.filter(
        (suggestion) => suggestion.idUsuario == user.id
      );

      return {
        ...user,
        reviews: userReviews,
        suggestions: userSuggestions,
      };
    });

    res.json({
      users: usersWithReviewsAndSuggestions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

function query(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = router;
