'use strict';

module.exports = function (func) {
  var args = func.slice(func.indexOf('(') + 1, func.indexOf(')')).split(/, +/);
  /*jslint evil: true */
  return new Function(args, 'return ' + func + '.apply(null, [' + args + '])');
};
