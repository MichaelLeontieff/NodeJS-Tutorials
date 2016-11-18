var Michael = {
  printFirstName: function() {
    console.log("My name is Michael");
    console.log(this === Michael); // true
  }
};

Michael.printFirstName();

// The default calling context is global
function doSomethingWorthless() {
  console.log("\nI am worthless");
  console.log(this === Michael); //false
  console.log(this === global); // true
}

doSomethingWorthless();
