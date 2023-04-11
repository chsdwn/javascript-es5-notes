var x = 1;

(function () {
  var x = 2;
  console.log('[IIFE:x]:', x); // 2
})();

console.log('[global:x]:', x); // 1
