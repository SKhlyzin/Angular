/*6*/
function sequence(start = 0, step = 1) {
  let callNumber = start;
  return function() {
    var returnValue = callNumber; 
    callNumber += step; 
    return returnValue;
  }
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
}

function checkImage(exists) {
    alert("Image exists: " + exists);
}
imgExists('http://www.nasa.gov/images/content/711375main_grail20121205_4x3_946-710.jpg', checkImage);
