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

module.exports.splitAndLowerCaseString = undefined;

module.exports.addIndex = undefined;
