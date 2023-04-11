var person = {
  name: 'Default',
  surname: 'Default',
  getFullName: function () {
    return this.name + ' ' + this.surname;
  },
};

var ali = {
  name: 'Ali',
};

ali.__proto__ = person;
console.log(ali.hasOwnProperty('name')); // true
console.log(ali.hasOwnProperty('surname')); // false
