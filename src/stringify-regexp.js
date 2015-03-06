'use strict';

var ids = require('./type-ids');

module.exports = function (type, ro) {
  var flags = (
    (ro.global ? 'g' : '') +
    (ro.multiline ? 'm' : '') +
    (ro.ignoreCase ? 'i' : '')
  );

  return ids[type] + JSON.stringify({
    source: ro.source,
    flags: flags
  });
};
