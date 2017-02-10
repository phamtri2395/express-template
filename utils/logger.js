/**
 * Logger
 */

var winston = require('winston');
var config = require('../utils/config');
var path = require('path');

var logger = new (winston.Logger)(config.logger);

exports = module.exports = logger;


/**
 * Extended logs option
 */

exports.logFunctionError = function(message, fileName, functionName) {
  logger.error('Function error: ' + message.toString(), {
    fileName: (fileName ? path.basename(fileName) : null),
    functionName: (functionName ? functionName : null)
  });
};

exports.logFunctionWarning = function(message, fileName, functionName) {
  logger.warn('Function warning: ' + message.toString(), {
    fileName: (fileName ? path.basename(fileName) : null),
    functionName: (functionName ? functionName : null)
  });
};
