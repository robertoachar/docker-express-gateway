const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { catchAll, notFound } = require('./error');
const heroesRouter = require('./heroes/heroes.router');
const moviesRouter = require('./movies/movies.router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'GATEWAY!' });
});

app.use('/api/heroes', heroesRouter);
app.use('/api/movies', moviesRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;
