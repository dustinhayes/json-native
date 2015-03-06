'use strict';

var typeOf = require('type-of');
var parser = require('./parser');

module.exports = function parse(json) {
    return JSON.parse(json, function (key, value) {
      if (typeOf(value) !== 'string') {
        return value;
      }

      var matches = value.match(/::type::(\w+) (.+)/);
      var type = matches ? matches[1] : null;
      var body = matches ? matches[2] : null;
      
      return type in parser ? parser[type](body) : value;
    });
};
