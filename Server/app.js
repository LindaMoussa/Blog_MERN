const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");

const v1 = require("./routes/v1");
const app = express();

///------------ DB Config ----------------///

mongoose
  .connect("mongodb://localhost:27017/blog-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1); // to fail early
  });

///------------ Middlewares ----------------///

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
///------------ Routes ----------------///

// app.use('/anyprefix',v1);
app.use(v1);

///------------ Errors ----------------///

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const error = err.message || "Error processesing your request";

  res.status(status).send({
    error: error,
  });
});
module.exports = app;
