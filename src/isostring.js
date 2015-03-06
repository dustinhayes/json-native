'use strict';

var format = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

module.exports = function (isostring) {
  return format.test(isostring);
};
