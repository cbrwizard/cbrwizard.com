var b = function(n) {
  console.log(this);
  return n * 11
};

var log = msg => console.log(msg + 55);

module.exports = b;