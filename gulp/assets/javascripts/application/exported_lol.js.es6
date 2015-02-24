var b = function(n) {
  console.log(this);
  return n * 11
};


module.exports = b;