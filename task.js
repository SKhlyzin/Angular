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
/*4*/
let ob = [1,2,3];
ob.reduce((prev, cur, i) => i%2  && prev + cur || prev, 0);
2
/*5*/
function calc(str) {
    return /^(?:\d+([*+-]|\/(?!0)))+\d+$/.test(str) ? eval(str): false;
}
