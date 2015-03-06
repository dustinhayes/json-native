'use strict';

var typeOf = require('type-of');
var isostr = require('./isostring');

var stringifyer = {
  'date': require('./date').stringify,
  'regexp': require('./regexp').stringify,
  'function': require('./function').stringify
};

module.exports = function (subject) {
  return JSON.stringify(subject, function (key, value) {
    var type = typeOf(value) === 'string' && isostr(value) ?
      'date' : typeOf(value);

    return type in stringifyer ? JSON.stringify({
      __type: type, __value: stringifyer[type](value)
    }) : value;
  });
};
