'use strict';

module.exports = {
  parse: function (fs) {
    var args = fs.slice(fs.indexOf('(') + 1, fs.indexOf(')')).split(/, +/);
    /*jslint evil: true */
    return new Function(args, 'return ' + fs + '.apply(null, [' + args + '])');
  },
  
  stringify: function (func) {
    return func.toString();
  }
};
