'use strict';

var parser = {
  'date': require('./date').parse,
  'regexp': require('./regexp').parse,
  'function': require('./function').parse
};

module.exports = function (json) {
    return JSON.parse(json, function (key, value) {
      if (typeof value !== 'string') {
        return value;
      }

      var vo = JSON.parse(value);

      return vo.__type in parser ? parser[vo.__type](vo.__value) : value;
    });
};
