module.exports.newArray = function(one, two, three, four){
  return [one, two, three, four];
};

module.exports.firstAndLast = function(array){
  return [array[0], array[array.length - 1]];
};
