const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const testDBRouter = require("./routes/testDB");
const reviewsRouter = require("./routes/reviews");
const signinRouter = require("./routes/signin");
const signupRouter = require("./routes/signup");
const indexRouter = require("./routes/index");
const suggestionsRouter = require("./routes/suggestions");
const verifyTokenRouter = require("./routes/verifyToken");
const checkEmailRouter = require('./routes/checkEmail'); // Importe o arquivo checkEmail.js

app.set("view engine", "ejs"); // Configurar o mecanismo de visualização para EJS
app.set("views", path.join(__dirname, "views")); // Definir o diretório das visualizações
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/check-email', checkEmailRouter);
app.use("/", indexRouter);
app.use("/testDB", testDBRouter);
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/reviews", reviewsRouter);
app.use("/verifyToken", verifyTokenRouter);
app.use("/suggestions", suggestionsRouter);

module.exports = app;
