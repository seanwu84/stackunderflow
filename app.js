const express = require("express");
const bearer = require("express-bearer-token");
const cookieParser = require("cookie-parser")
const morgan = require('morgan');

const { restoreUser } = require("./utils/auth");
const {convertUserNameToHex} = require("./utils/utils")
const indexRouter = require("./routes/index");
const app = express();

app.use(express.json());
app.use(bearer());
app.use(cookieParser())
app.use(restoreUser)
app.use(morgan('dev'));
app.use(convertUserNameToHex)
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(verifyUser);

app.use("/", indexRouter);

// Unhandled request catch
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  err.title = "Resource not Found";
  next(err);
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  if (!req.errors || req.errors.length === 0) {
    req.errors = [err.message];
  }
  res.json({
    errors: req.errors,
    stackTrace: err.stack,
  });
});

module.exports = app;
