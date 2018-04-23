/*1*/
  function compressArray(original) { 
	var compressed = [];
	var copy = original.slice(0);
	for (var i = 0; i < original.length; i++) { 
		var myCount = 0;	
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				myCount++;
				delete copy[w];
			}
		}
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	} 
	return compressed;
};
/*2*/
var f = arr => [arr[0], arr[2], arr[arr.length-1]];
var [a,b,n] = f([1, 2, 3, 4,5,6,14,15]);
console.log(a);
console.log(b);
console.log(n);
/*3*/
var f = arr => {if (arr.length == 3) return [arr[0], arr[1], arr[2]]
else return [arr[0], arr[1], false]};
var [a,b,c] = f([5,6]);
console.log(a);
console.log(b);
console.log(c);
/*4*/
let ob = [1,2,3];
ob.reduce((prev, cur, i) => i%2  && prev + cur || prev, 0);
2
/*5*/
function calc(str) {
    return /^(?:\d+([*+-]|\/(?!0)))+\d+$/.test(str) ? eval(str): false;
}
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
