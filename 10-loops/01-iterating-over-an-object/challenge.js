/*

- Complete the `getKeys` function. This function should:
  - accept one argument, an object
  - return an array of each of the keys in the object

    For example:
    
    ```javascript
    getKeys({name: "Rob", age: 101}) // returns ["name", "age"]   
    ```

*/
module.exports.getKeys = function(obj){
  var result = [],
      i;

  for(i in obj){ //loop over each attribute, where 'i' is equal to the current attribute's name
    if(obj.hasOwnProperty(i)){ //only iterate over intentionally added members for the object
      result.push(i); //push the attribute name onto the array
    }
  }

  return result;
};



/*
- Complete the `getValues` function. This function should:
  - accept one argument, an object
     - return an array of each of the values in the object

    For example:
    
    ```javascript
    getValues({name: "Rob", age: 101}) // returns ["Rob", 101]
    ```
*/
module.exports.getValues = function(obj){
  var result = [],
      i;

  for(i in obj){ //loop over each attribute, where 'i' is equal to the current attribute's name
    if(obj.hasOwnProperty(i)){ //only iterate over intentionally added members for the object
      result.push(obj[i]); //push the attribute name onto the array
    }
  }

  return result;
};


/*
- Complete the `objectToArray` function. This function should:
    - convert the object passed in to an array of strings
    - each string should be in the format of "[key] is [value]" for each key/value pair in the object
    - if an empty object is passed in, an empty array should be returned

    For example:
    ```javascript
    objectToArray({name: "Rob", age: 101}) // should return ["name is Rob", "age is 101"]
    ```
*/
module.exports.objectToArray = function(obj){
  var result = [],
      i;

  for(i in obj){
    if(obj.hasOwnProperty(i)){
      result.push(i + " is " + obj[i]);
    }
  }
  return result;
};








