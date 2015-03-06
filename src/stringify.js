'use strict';

var typeOf = require('type-of');
var isostr = require('./isostring');
var stringifyer = require('./stringifyer');

var stringify = function stringify(subject) {
  return JSON.stringify(subject, function (key, value) {
    var type = typeOf(value) === 'string' && isostr(value) ?
      'date' : typeOf(value);
    
    return type in stringifyer ? stringifyer[type](type, value) : value;
  });
};

module.exports = stringify;
