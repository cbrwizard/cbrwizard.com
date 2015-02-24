var foo = require('./application/exported_lol');
console.log(foo(22));

var log = msg => console.log(msg + 55);
log(15);

var _ = require('./../../../bower_components/underscore/underscore');
_.each([1, 2, 3, 4], function () {
  console.log('using asd!!!');
});
