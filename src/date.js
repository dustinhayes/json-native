'use strict';

module.exports = {
  parse: function (isostring) {
    return new Date(isostring);
  },
  
  stringify: function (isostring) {
    return isostring;
  }
};
