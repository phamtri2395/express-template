/**
 * Miscellaneous methods
 */

var pluralize = require('pluralize');

exports = module.exports = {};

// Padding number's digit to limitDigit
// Ex: padding(3, 5) -> 00003
exports.padding = function(number, limitDigit) {
  // Check
  if ((number !== parseInt(number, 10)) || (number.toString().length >= limitDigit)) {
    return number;
  }

  // Padding
  number = number.toString();
  for (var i = 0; i < (limitDigit - number.length); i++) {
    number = '0' + number;
  }

  return number;
};

// Pluralize a word
exports.pluralize = function(word) {
  return pluralize(word.toString());
}

// Singularize a word
exports.singularize = function(word) {
  return pluralize(word.toString(), 1);
}
