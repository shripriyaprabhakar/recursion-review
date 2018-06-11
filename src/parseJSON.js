// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
/*

Strategy:
To create a class -pseudoclassical. Within that class we search for first 
non white space. We keep searching until we find the first matching char.
i/p = boolean, number, null
"false", "true", "null", number

" {"foo": null, "bar": 5}"
>> ""foo": null, "bar": 5"
>> foo
>> :
>> null

*/

var JSONstring = function(str) {
  this.json = str;
  this.current = 0;
};

JSONstring.prototype.getNext = function() {
  return this.json.charAt(current++);
};



var parseJSON = function(json) {

  var myJSON = new JSONstring(json);

  // if json.nextChar() === '{' then parseObject
  // if json.nextChar() === '[' then parseArray
  // if json.nextChar() === '\"' then parseString
  // parsePrimitive


};

var parseObject = function(json) {
  // takes in a json string that starts with '{'
  // objToReturn = {};
  //   


  // return an object
};

var parseArray = function(json) {
  // takes a json that starts with '['
  // arrToReturn = []
  

  // return array
};

var parseString = function(json) {
  // takes in a json string that starts with '"'
  // strToReturn = '';

  // return string
};

var parsePrimitive = function(json) {
  // if json === 'false' return false
  // if json === 'true' return true
  // if json === 'null' return null
  // return parseFloat(json)

  // TODO: handle edge case like '2.3a', which is not a valid number
  // num.toString() === json
};

