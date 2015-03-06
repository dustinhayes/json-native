'use strict';

var ids = require('./type-ids');

module.exports = function (type, isostring) {
    return ids[type] + isostring;
};
