function Person(name, surname) {
  console.log(this); // {}
  this.name = name;
  this.surname = surname;
}

// Calling functions with 'new' keyword sets their 'this' variable to an empty object.
var ali = new Person('Ali', 'Veli');
console.log(ali);
