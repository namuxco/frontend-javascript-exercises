module.exports.favoriteNumber = function(number, guess){
  if (number == guess) {
    return 'You got it!';
  }
  else if (number < guess) {
    return 'Too high';
  }
  else if (number > guess) {
    return 'Too low';
  }
};

module.exports.checkLock = function(first, second, third, fourth){
  if ((first === 3 || first === 5 || first === 7) && (second === 2) && (third > 4 && third < 101) && (fourth < 9 || fourth > 20)){
    return "correct";
  }
  else {
    return "incorrect";
  }
};

module.exports.canIGet = function(item, money){
  if (item === "MacBook Air" && money >= 999){
    return true;
  }
  else if (item === "MacBook Pro" && money >= 1299){
    return true;
  }
  else if (item === "Mac Pro" && money >= 2499){
    return true;
  }
  else if (item === "Apple Sticker" && money >= 1){
    return true;
  }
  else {
    return false;
  }
};