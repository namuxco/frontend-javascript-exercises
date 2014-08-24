var x = 2;

module.exports.linkTo = function(text, address) {   
  console.log(x++);
  return "<a href='" + address + "'>" + text + "</a>";
};