/* - Complete the `copy` function. This function should:
    - take one object as an argument
    - create a new object and copy all of the properties of the input into the new object
    - return the new object

    For example:
    
    ```javascript
    copy({name: "Rob"}) // returns a new object {name: "Rob"}
    ```
*/

module.exports.copy = function(obj){
  var newObj = {},
        i;

  for(i in obj){
    if(obj.hasOwnProperty(i)){
      newObj[i] = obj[i];
    }
  }
  return newObj;
};


/*
- Complete the `extend` function. This function should:
    - take two dictionaries as arguments (`dest` and `src`) and copy all of the properties (e.g. key, value pairs) of `src` into `dest`
    - return a modified `dest`

    For example:
    
    ```javascript
    extend({name: "Rob"}, {age: 101}) // should modify and return `dest` with content of {name: "Rob", age: 101}
    
    extend({name: "Rob"}, {name: "Steve"}) // should modify and return `dest` with content of {name: "Steve"}
    ```
*/

module.exports.extend = function(dest, src){

  for(var i in src){  //this only works with objects with a single dimension.  to make it work deeper, we would have to add recursion
    if(src.hasOwnProperty(i)){ //filter out inherited properties of the object we are looping about
      dest[i] = src[i]; //override/add properties
    }
  }
  return dest;
};


/*
- Complete the `hasElems` function. This function should:
    - take two arguments. The first is an object and the second is an array of elements
    - return `true` when all of the elements in the array are keys in the object, false otherwise
*/

module.exports.hasElems = function(object, array){
  var result = true,
      i;

  for(i in array){
    var propertyName = array[i]
    if(!object.hasOwnProperty([propertyName])){ //propertyName == object[propertyName]){
      result = false;
    }
  }
  return result;
};

