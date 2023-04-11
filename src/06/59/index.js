function Person(name, surname) {
  console.log(this); // {}
  this.name = name;
  this.surname = surname;
}

// Only one method created and shared between instances
Person.prototype.getFullName = function () {
  return this.name + ' ' + this.surname;
};

var ali = new Person('Ali', 'Veli');
console.log(ali.getFullName());
