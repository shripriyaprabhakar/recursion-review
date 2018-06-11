// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean' ||
    obj === null) {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
  var results = [];
  if (Array.isArray(obj)) {
    results = [];
    obj.forEach(function(element) {
      results.push(stringifyJSON(element));
    });
    return '[' + results + ']';
  }
  if (obj) {
    for (var key in obj) {
      var keyString = '\"' + key + '\":';
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      var valString = stringifyJSON(obj[key]);
      results.push(keyString + valString);
    }
    return '{' + results + '}';
  }
  return 'undefined';
};
