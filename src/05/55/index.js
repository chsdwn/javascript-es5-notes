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

// ANTI PATTERN. DO NOT MUTATE __proto__
ali.__proto__ = person;
console.log(ali.getFullName()); // Ali Default
