module.exports.reversePlusOne = function(array){
  array.push(1);
  array.reverse();
  return array;
};

module.exports.plusesEverywhere = function(array){
  var test = array.join('+');
  return test;
};

//how do i add pluses inbetween an array?


/*- Create a function named `plusesEverywhere`. This function should:
  - Take one argument, an array of at least two numbers.
  - This function should return:
    - a String made of all the values in the array separated by `+`
    
  For example:
  
  ```javascript
  plusesEverywhere([1,2,3]); // returns "1+2+3"
  plusesEverywhere([18,24]); // returns "18+24"
  ```
  */

module.exports.arrayQuantityPlusOne = function(array){
  return array.length + 1;
};