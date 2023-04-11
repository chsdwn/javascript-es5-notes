var person = {
  name: 'Default',
  surname: 'Default',
  greet: function () {
    return 'Hi ' + this.name;
  },
};

// Object.create Polyfill
if (!Object.create) {
  Object.create = function (obj) {
    if (arguments.length > 1) {
      throw new Error(
        'Object.create implementation only accepts the first parameter.',
      );
    }
    function F() {}
    F.prototype = obj;
    return new F();
  };
}

// Prototypal Inheritance
var ali = Object.create(person);
ali.name = 'Ali';
ali.surname = 'Veli';
console.log(ali.greet());
