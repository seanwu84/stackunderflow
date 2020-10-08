const express = require("express");
const bearer = require("express-bearer-token");
const cookieParser = require("cookie-parser")
const morgan = require('morgan');

const { verifyUser } = require("./utils/auth");
const indexRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(bearer());
app.use(cookieParser())
app.use(morgan('dev'));
app.use(verifyUser);
app.set("view engine", "pug");

app.use("/", indexRouter);

app.use(express.static("public"));

// Unhandled request catch
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  err.title = "Resource not Found";
  next(err);
})

const generalErrorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  if (!req.errors || req.errors.length === 0) {
    req.errors = [err.message];
  }
  res.json(
    JSON.stringify({
      messages: req.errors,
      stackTrace: err.stack,
    })
  );
};

app.use(generalErrorHandler);

module.exports = app;
