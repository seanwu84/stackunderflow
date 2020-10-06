const express = require('express');
const bearer = require("express-bearer-token");

const loginRouter = require("./routes/login")
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
app.use(express.json())
app.use(bearer());
app.set("view engine", "pug");


app.use("/login", loginRouter);



app.get('/', (req, res) => {
    res.send('hello world')
});

app.use(express.static('public'))


module.exports = app;