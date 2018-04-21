/* eslint no-unused-vars: 0 */

const winston = require('winston');

module.exports.notFound = (req, res, next) => {
  winston.warn('Not found');

  const error = new Error('Not found');
  error.status = 404;

  next(error);
};

module.exports.catchAll = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something broke!';

  winston.error(message);

  res.status(status).json({ error: { message } });
};
