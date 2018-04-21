const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const { catchAll, notFound } = require('./error');
const movieRouter = require('./movie/movie.router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'It works!!!' });
});

app.use('/api/movies', movieRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;
