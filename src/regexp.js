'use strict';

module.exports = {
  parse: function (rj) {
    var ro = JSON.parse(rj);
    return new RegExp(ro.source, ro.flags);
  },

  stringify: function (re) {
    var flags = (
      (re.global ? 'g' : '') +
      (re.multiline ? 'm' : '') +
      (re.ignoreCase ? 'i' : '')
    );
    
    return JSON.stringify({
      source: re.source,
      flags: flags
    });
  }
};
