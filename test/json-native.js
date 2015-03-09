'use strict';

var test = require('tape');
var jn = require('../src/');

test('json-native should stringify and parse date', function (t) {
  var date = new Date();
  var json = jn.stringify({d: date});

  console.log(jn.stringify({k: 'val'}));
  console.log(jn.stringify({d: new Date()}));

  t.equal(date.getHours(), jn.parse(json).d.getHours());
  t.end();
});

test('json-native should stringify and parse regexp', function (t) {
  var json = jn.stringify({r: /[0-9]/g});

  t.equal(jn.parse(json).r.test('smelly cat'), false);
  t.end();
});

test('json-native should stringify and parse function', function (t) {
  var json = jn.stringify({f: function add(x, y) { return x + y; }});

  t.equal(jn.parse(json).f(2, 3), 5);
  t.end();
});
