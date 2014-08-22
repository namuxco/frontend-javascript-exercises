/*
- Complete the `stream` function. This function should:
    - take two arguments, a `conditionalFn` and an `actionFn`.
    - call `actionFn` until `conditionalFn` returns false.
    - return nothing.

    For example:

    ```javascript
    conditionalFn = function() { return false; };
    actionFn = function() { console.log("Hello!"); };
    stream(conditionalFn, actionFn); // Prints nothing.

    counter = 10;
    conditionalFn = function() { 
      counter--;
      return counter >= 0; 
    };
    stream(conditionalFn, actionFn); // should print "Hello" 10 times.
    ```
*/
module.exports.stream = function(conditionalFn, actionFn){
  while(conditionalFn()){ //while continues running until the statement evaluates to false.  we want to keep running until the 
    //conditionalFn returns false, per our spec above.  while will execute this function to see whether or not to continue
    actionFn(); //as long as the conditionalFn returns true, execute the actionFn
  }
}

/*
- Complete the `sumNumbers` function. This function should:
    - take an array of numbers as an argument.
    - return the sum of the numbers.
    - this function should use a `while` loop.

    For example:

    ```javascript
    sumNumbers([]); // should return 0.

    sumNumbers([1,2,3,4]); // should return 10.
    ```

*/
module.exports.sumNumbers = function(arr){
  //this function should sum all the numbers in the array and return the sum, defaulting to zero

  /*var ret = 0,
      i;

  for(i = 0; i < arr.length; i++){
    ret += arr[i];
  }

  return ret;*/
  var item,
      ret = 0;

  while(item = arr.pop()){
    ret += item;
  }

  return ret;

};

