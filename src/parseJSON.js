// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
/*

Strategy:
To create a class -pseudoclassical. Within that class we search for first 
non white space. We keep searching until we find the first matching char.
i/p = boolean, number, null
"false", "true", "null", number

*/

var JSONstring = function(str) {
  this.json = str;
  this.current = 0;
};

// method to iterate over characters in JSON string 
JSONstring.prototype.getNext = function() {
  return this.json.charAt(current++);
};

var parseJSON = function(json) {
  // create JSONstring obj from json, unless its already a JSONstring

  // if json.nextChar() === '{' then parseObject
  // if json.nextChar() === '[' then parseArray
  // if json.nextChar() === '\"' then parseString
  // parsePrimitive
};

var parseObject = function(json) {
  // takes a json string with current character '{'
  // objToReturn = {};
  // cycle through object and parse each property, adding result to objToReturn

  // return objToReturn
};

var parseArray = function(json) {
  // takes a json string with current character '['
  // arrToReturn = []
  // cycle through array and parse each element, adding result to arrToReturn

  // return arrToReturn
};

var parseString = function(json) {
  // takes in a json string with current character '"'
  // strToReturn = '';

  // return strToReturn
};

var parsePrimitive = function(json) {
  // if json === 'false' return false
  // if json === 'true' return true
  // if json === 'null' return null
  // return parseFloat(json)

  // TODO: handle edge case like '2.3a', which is not a valid number
  // num.toString() === json
};

