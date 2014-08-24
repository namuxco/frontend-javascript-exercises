module.exports.sumNumbers = function(array){

  //so for this function, we want to add up all of the members of the array to create the sum of all the numbers
  //first, we need a variable to act as the value which we will add the array members to!

  var value = 0, //we are setting this to zero because we won't have a sum until we add on atleast one of the array's members
      i; //this is our counter!

  for (var i = 0; i < array.length; i++) { //with each member of the array...
    value += array[i]; //we want to add the member to the current value, compounding in each member to create an overall sum
  }

  return value; //now we return the value!
};

/* - Complete the `sumNumbers` function. This function should:
    - return the sum of all numbers inside of the array that is passed to the function
    - if the array is empty, this function should return 0

    For example:

    ```javascript
    sumNumbers([1, 2, 3]) // should return 6
    */

module.exports.splitAndLowerCaseString = function(inputString){
  var finalString = inputString.toLowerCase().split(",");
  return finalString;
};

//i.toLowerCase().split(" ");

/* Complete the `splitAndLowerCaseString` function. This function should:
    - split the `inputString` argument into an array of strings by commas
    - return an array with the set of split strings in lowercase format

    For example:
    
    ```javascript
    splitAndLowerCaseString("TEST") // returns ["test"]
    splitAndLowerCaseString("THIS,IS,SPLIT,BY,COMMAS") // returns ["this", "is", "split", "by", "commas"]
    splitAndLowerCaseString("THIS HAS NO COMMAS") // returns ["this has no commas"]
    ```

    > Hint: You should use the built-in string functions `split` and `toLowerCase`.
    */

module.exports.addIndex = function(array){
  var result = [],
      i;

  for(i = 0; i < array.length; i++){
    result.push(i + ' is ' + array[i]);
  }

  return result;
};


/*
Complete the `addIndex` function. This function should:
    - create and return a new array of all inputs as strings
    - each of the new strings should start with "[index] is [data element at index]"

    For example:
    
    ```javascript
    addIndex([1, 2, 3]) // returns ["0 is 1", "1 is 2", "2 is 3"]
    addIndex(['My', 1, 'number']) // returns ["0 is My", "1 is 1", "2 is number"]
    ```
    */
