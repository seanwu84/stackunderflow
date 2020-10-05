const express = require('express');
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

app.get('/', (req, res) => {
    res.send('hello world')
});


module.exports = app;