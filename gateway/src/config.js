/* eslint no-process-env: 0 */

require('dotenv').config();

const environments = ['NODE_ENV', 'PORT', 'HEROES', 'MOVIES'];

environments.forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  HEROES: process.env.HEROES,
  MOVIES: process.env.MOVIES
};
