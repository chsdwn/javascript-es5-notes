function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
    // arr.push(
    //   (function (j) {
    //     return function () {
    //       console.log(j);
    //     };
    //   })(i),
    // );
  }
  return arr;
}

var fns = buildFunctions();
// when functions invoked the i's value from outer scope(buildFunctions()) is 3.
fns[0](); // 3
fns[1](); // 3
fns[2](); // 3
