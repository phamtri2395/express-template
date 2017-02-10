/**
 * NodeJS process's events handling
 */

var logger = require('./logger');


/**
 * Pre-exit handler
 */

var exitHandler = function() {
  logger.debug('Exiting Node process...');

  // Do cleanup
  logger.debug('Cleaning up...');

  // Cleanup database
  cleanup.database(process.exit);
};

// On exit
process.on('exit', function(code) {
  logger.debug('Node process killed');
});

// On Ctrl-C event
process.on('SIGINT', function() {
  exitHandler();
});


/**
 * Local cleanup functions
 */

var cleanup = {
  /**
   * Do clean-up here
   * Always remeber calling next() to terminate Node process
   */

  database: function(next) {
    // Clean up database before exit process

    next();
  }
};
