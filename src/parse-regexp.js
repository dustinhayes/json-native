'use strict';

module.exports = function (rj) {
  var ro = JSON.parse(rj);
  
  return new RegExp(ro.source, ro.flags);
};
