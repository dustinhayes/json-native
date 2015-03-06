'use strict';

var test = require('tape');
var jn = require('../src/');

test('json-native should stringify and parse date', function (t) {
  var date = new Date();
  var json = jn.stringify({d: date});

  t.equal(date.toString(), jn.parse(json).d.toString());
  t.end();
});

test('json-native should stringify and parse regexp', function (t) {
  var json = jn.stringify({r: /\w/g});

  t.equal(jn.parse(json).r.test('smelly cat'), true);
  t.end();
});

test('json-native should stringify and parse function', function (t) {
  var json = jn.stringify({f: function add(x, y) { return x + y; }});

  t.equal(jn.parse(json).f(2, 3), 5);
  t.end();
});
