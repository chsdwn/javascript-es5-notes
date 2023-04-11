greet();
// Function statement: no value returned
function greet() {
  console.log('Hi');
}

// Function expression: creates function on the fly and sets to the variable
var anonymousGreet = function () {
  console.log('Hello');
};
anonymousGreet();

console.log(function () {
  console.log('created on the fly');
});
