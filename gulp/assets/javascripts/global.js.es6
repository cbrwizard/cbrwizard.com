var foo = require('./application/exported_lol');
console.log(foo(22));

var log = msg => console.log(msg + 55);
log(15);

var _ = require('./../../../bower_components/lodash/lodash');
_.each([1, 2, 3, 4], function () {
  console.log('using asdsdsds!!!');
});
