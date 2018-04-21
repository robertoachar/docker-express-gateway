const winston = require('winston');

const app = require('./app');
const config = require('./config');

app.listen(config.PORT, () => {
  Object.keys(config).forEach((key) => winston.info(`${key}: ${config[key]}`));
});
