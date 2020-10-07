const express = require("express");
const bearer = require("express-bearer-token");

const loginRouter = require("./routes/login");
const path = require("path");

const indexRouter = require("./routes/index");
const app = express();
// const morgan = require('morgan');
// const csrfProtection = require('csurf')({ cookie: true });
// const apiRouter = require('./routes/api');
// const pagesRouter = require('./routes/pages');

// app.use(morgan('dev'));
// app.set('view engine', 'pug');
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(require('cookie-parser')());
app.use(express.json());
app.use(bearer());
app.set("view engine", "pug");

app.use("/login", loginRouter);
app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(express.static("public"));

//still need a 404

const generalErrorHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status);
  } else {
    res.status(500);
  }
  if (!req.errors || req.errors.length === 0) {
    req.errors = ["Internal server error"];
  }
  res.json(
    JSON.stringify({
      messages: req.errors,
    })
  );
};

app.use(generalErrorHandler);

module.exports = app;
module.exports = app;
