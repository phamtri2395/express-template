/**
 * Configurations
 */

var winston = require('winston');
var datetime = require('../helpers/datetime');


/**
 * Logging config
 */

exports.logger = {
  transports: [
    // Console
    new (winston.transports.Console)({
      level: 'debug',
      colorize: true,
      prettyPrint: true
    }),

    // Info
    new (winston.transports.File)({
      name: 'info-file',
      filename: 'logs/info.log',
      level: 'info',
      timestamp: function () {
        return datetime.YYYYMMDDHHMMSS(Date.now());
      }
    }),

    // Error
    new (winston.transports.File)({
      name: 'errors-file',
      filename: 'logs/error.log',
      level: 'error',
      timestamp: function () {
        return datetime.YYYYMMDDHHMMSS(Date.now());
      }
    }),

    // Warning
    new (winston.transports.File)({
      name: 'warnings-file',
      filename: 'logs/warning.log',
      level: 'warn',
      timestamp: function () {
        return datetime.YYYYMMDDHHMMSS(Date.now());
      }
    })
  ]
};


/**
 * Database config
 */

exports.database = {
  mysql: {
    user: "root",
    host: "localhost",
    password: "password",
    database: "TEST",
    multipleStatements: true // Enable multiple statements query
  }
};


/**
 * Port Configuration
 */

exports.port = {
  PORT_DEVELOPMENT: "8001",
  PORT_PRODUCTION: "8000"
};
