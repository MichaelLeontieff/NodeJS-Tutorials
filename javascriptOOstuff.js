function person(name, age) {
  this.name = name;
  this.age = age;
}

function people(name, age) {
  this.name = name;
  this.age = age;

  this.yearsUntilRetire = yearsLeft;
}

function yearsLeft() {
  var numYears = 65 - this.age;
  return numYears;
}

var natalie = new people("Natalie Portman", 28);
console.log("Years until retire " + natalie.yearsUntilRetire());

var michael = new person("Michael Leontieff", 20);

bob = {name: "Bob Joe", age: 24};

console.log(michael.name);
console.log(bob.age);
