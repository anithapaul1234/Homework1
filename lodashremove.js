var _=require('lodash');
var array = [7, 6, 8, 3];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
console.log(array);