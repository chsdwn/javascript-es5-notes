function b() {
  console.log('[function b]:', x); // 1
  // Gets x's value from outher environment(Global Execution Context)
  // Lexical Environment is Global Execution Context
}
function a() {
  function c() {
    console.log('[function c]:', x); // 2
    // Gets x's value from outher environment(a's Execution Context)
    // Lexical Environment is a's Execution Context
  }

  var x = 2;
  b();
  c();
}

var x = 1;
a();
