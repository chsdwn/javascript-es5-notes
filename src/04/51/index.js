const person = {
  name: 'Ali',
  surname: 'Veli',
  printName: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};
person.printName(); // Ali Veli

const person2 = {
  name: 'Ahmet',
  surname: 'Mehmet',
};
// Function Borrowing
person.printName.apply(person2); // Ahmet Mehmet

function multiply(x, y) {
  return x * y;
}
// Function Currying
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3)); // 6
