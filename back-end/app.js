const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const signupRouter = require("./routes/signup"); // Importe o arquivo signup.js
const app = express();
const testAPIRouter = require("./routes/testAPI");
const testDBRouter = require("./routes/testDB");
const signinRouter = require("./routes/signin");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/testDB", testDBRouter);
app.use("/signup", signupRouter); 
app.use("/signin", signinRouter);
// Use a rota /signup para o arquivo signup.js

// Resto do seu código...

// Trate o erro 404
app.use(function (req, res, next) {
  next(createError(404));
});

// Trate outros erros
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
