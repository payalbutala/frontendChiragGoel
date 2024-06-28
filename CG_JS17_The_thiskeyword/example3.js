// Object Creation
const marriage = {
  name: "Payal Vishal",
  age: 36,
  company: "Colors Pixel",
  address: {
    city: "Mumbai",
  },
  getDetails: function () {
    console.log(this);
  },
};

// Using Constructor : functionName starts with Caps, value assign as .this
function Person(name, age, company) {
  this.name = name;
  this.age = age;
  this.company = company;
}

const p1 = Person("Payal1", 36_1, "V2Solutions1");
const p2 = new Person("Payal2", 36_2, "V2Solutions2");
// const p1 = Person("Payal3", 36_3, "V2Solutions3");

console.log(p1); // undefined
console.log(p2); // p2 object
