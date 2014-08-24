module.exports.addItem = function(item, array){
  if (array.indexOf(item) != -1){
    return array;
  }
  else {
    array.push(item);
    return array;
  }
};

module.exports.reverseSortedList = function(array){
  array.sort();
  array.reverse();
  return array;
};