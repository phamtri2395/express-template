/**
 * Datetime
 */

var misc = require('./misc');

exports = module.exports = {};

// Format YYYY/MM/DD HH:MM:SS
exports.YYYYMMDDHHMMSS = function(value) {
  var datetime = new Date(value);

  return datetime.getFullYear() + '/' +
         misc.padding((datetime.getMonth() + 1), 2) + '/' +
         misc.padding((datetime.getDate()), 2) + ' ' +
         misc.padding((datetime.getHours()), 2) + ':' +
         misc.padding((datetime.getMinutes()), 2) + ':' +
         misc.padding((datetime.getSeconds()), 2);
};
