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

/*6*/
var sequence = function(start, step){
 var generation = function(){
  if(start==undefined){
   start = 0;
   start = start;
  }
  else if(step == undefined){
   step = 1;
   start = start + step;
  }
  else{
   start+=1;
  }
  return start;
 }
 return generation;
}

/*7*/
var take = function(fn, count){
 var arr = [];
 for(var i=0; i<count; i++){
  arr[i] = fn();
 }
 return arr;
}

/*8*/
function imgExists(url, callback) {
    alert('in imgExists');

    var img = new Image();

    img.onerror = function() {
        alert('error');
        callback(false);
    };

    img.onload = function () {
        alert('loaded');
        callback(true);
    };

    img.src = url;
    //alert('setting src..');
}

function checkImage(exists) {
    alert("Image exists: " + exists);
}
imgExists('http://www.nasa.gov/images/content/711375main_grail20121205_4x3_946-710.jpg', checkImage);
