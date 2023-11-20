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

const checkEmailRouter = require("./routes/checkEmail");
const getReviewsRouter = require('./routes/getReviews');
const settingsRouter = require('./routes/settings');
const getSuggestionsRouter = require("./routes/getSuggestions");
const editSuggestionsRouter = require("./routes/editSuggestions");
const deleteSuggestionsRouter = require("./routes/deleteSuggestions");
const getAdminSuggestions = require("./routes/getAdminSuggestions");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/check-email", checkEmailRouter);
app.use("/", indexRouter);
app.use("/testDB", testDBRouter);
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/reviews", reviewsRouter);
app.use("/suggestions", suggestionsRouter);


app.use("/getReviews", getReviewsRouter);
app.use("/getSuggestions", getSuggestionsRouter);
app.use("/getAdminSuggestions", getAdminSuggestions);
app.use("/editSuggestions", editSuggestionsRouter);
app.use("/deleteSuggestions", deleteSuggestionsRouter);

app.use("/settings", settingsRouter);

module.exports = app;
