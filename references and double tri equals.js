var Michael = {
  favFood: "Bacon",
  favMovie: "Cappie"
};

var Person = Michael;

Person.favFood = "salad";
console.log(Michael.favFood);

console.log(19 === "19"); // false
console.log(19 == "19"); // true
