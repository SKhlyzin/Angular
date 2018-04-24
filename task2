/*6*/
function makeCounter() {
  var currentCount = 1;

  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
/*7*/
var take = function(fn, count){
 var arr = [];
 for(var i=0; i<count; i++){
  arr[i] = fn();
 }
 return arr;
}
