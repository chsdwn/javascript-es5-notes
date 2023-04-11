function b() {
  var x; // x's value is undefined on b's Execution Context
  console.log('[function b]:', x); // undefined
}
function a() {
  var x = 2; // x's value is 2 on a's Execution Context
  console.log('[function a]:', x); // 2
  b(); // Creates b's Execution Context
}

var x = 1; // x's value is 1 on Global Execution Context
console.log('[global]:', x); // 1
a(); // Creates a's Execution Context
console.log('[global]:', x); // 1
