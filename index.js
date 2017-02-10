#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./utils/app');
var http = require('http');
var debug = require('debug')('express-template');
var config = require('./utils/config');
var logger = require('./utils/logger');


/**
 * Set port based on environment variables
 */

var env_mode = process.env.mode;
var port = null;
(env_mode === 'PROD') ? port = normalizePort(config.port.PORT_PRODUCTION) : port = normalizePort(config.port.PORT_DEVELOPMENT);

// Apply port
app.set('port', port);


/**
 * Create HTTP server.
 */

var server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, function() {
  logger.debug('Server is up & running on port', port);
});

server.on('error', onError);
server.on('listening', onListening);


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}


/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
}
