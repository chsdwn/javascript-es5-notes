greet();
console.log(hi); // undefined
console.log(x); // ReferenceError: x is not defined

var hi = 'Hi!';
function greet() {
  console.log('Hello');
}
