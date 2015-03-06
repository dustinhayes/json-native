'use strict';

var ids = require('./type-ids');

module.exports = function (type, func) {
  return ids[type] + func.toString();
};
