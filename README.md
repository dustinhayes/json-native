# json-native

> Parse and stringify native javascript types

json-native allows you to store native types like Dates, RegExps and Functions in json and retrieve them back in their native form.

# Install

from `npm`

```
npm install --save json-native
```

# API

## `#stringify(subject)`

This takes any valid javascript type and converts it to json format. For most types this will not be any different than `JSON.stringify`. For Dates, RegExps and Functions however, this will provide a key to allow the value to be converted back to it's native form.

```javascript
var jn = require('json-native');

// same as normal
jn.stringify({k: 'val'}); // => '{"k":"val"}'

// special case
js.stringify({k: new Date()}); // => '{"d":"::type::date 2015-03-06T03:08:59.391Z"}
```

## `#parse(json)`

This takes any valid json and converts it to it's native form. Contrary to `JSON.parse`, this will also convert types like Dates, RegExps or Functions to thier native form, so longs as the json was stringifed via `#stringify`.

```javascript
var jn = require('json-native');

var date = new Date();
var json = jn.stringify({d: date});

date.getHours() === jn.parse(json).d.getHours(); // => true
```

# License

MIT
