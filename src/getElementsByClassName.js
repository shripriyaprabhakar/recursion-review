// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className , node) {
  node = node || document.body;
  var results = [];
  if (node.classList.contains(className)) {
    results.push(node);
  } 
  for (var i = 0; i < node.children.length; i++) {
    var childNodesWithClassName = getElementsByClassName(className, node.children[i]);
    results = results.concat(childNodesWithClassName);
  }
  return results;
};

  // your code here
/*
i/p : classname string
o/p: array of nodes
constraints: none
edge cases: case where body element has no children

//pseudocode:
 //var getElementsByClassName = function(className, node) {
  // declare a results = [];
   //if(node.classList.indexOf(className) >=  0) {
         add node to results
     }
  //for var i=0; i<node.children.length, increment i
      // declare childnodesArr = c
 // results.concat(childnodesArr)
  // return results
}
*/
