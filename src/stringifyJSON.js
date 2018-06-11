// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // ioce
  /* input: number, string, boolean, null, undefined, object, array
  *  output: stringified data
  *  constraints: none
  *  edge case: undefined value in a key-value pair, e.g., {"foo": undefined} -> "{}"
   pseudocode:

   var stringifyJSON = function(obj) {
    //if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'null')
      //'' + number;
    //if (typeof obj === 'string')
      '\"' + string +'\"';
    //if (typeof obj === 'array') {
      for each element in array, call stringifyJSON on element
      '['+resarr+']'
      resarr = ['str1', 'str2', etc.]
    }
    else
      declare resarr
      for each key in the object, convert key to string 
        var key = '\"' + key + '\":'
        if (obj[key] === undefined) continue
        var value = stringifyJSON(obj[key])
        push (key + value) to an array
      '{'+resarr+'}'      
  }
  */

  if (typeof obj === 'number' || typeof obj === 'boolean' ||
    obj === null) {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
  if (typeof obj === 'undefined') {
    return obj;
  }
  var results = [];
  if (Array.isArray(obj)) {
    results = [];
    obj.forEach(function(element) {
      results.push(stringifyJSON(element));
    });
    return '[' + results + ']';
  }
  for (var key in obj) {
    var keyString = '\"' + key + '\":';
    if (obj[key] === undefined || typeof obj[key] === 'function') {
      continue;
    }
    var valString = stringifyJSON(obj[key]);
    results.push(keyString + valString);
  }
  return '{' + results + '}';
};
