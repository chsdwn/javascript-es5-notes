function a() {
  var x;
}
function b() {
  a(); // 2nd execution stack created
  var y;
}

b(); // 1st execution stack created
var x;
