/* const person1 = {
  name: "Vishal",
  age: 25,
  printNameAndAge: function (location, isMarried) {
    // console.log(
    //   `My name is ${this.name}, I am ${this.age} years old, and I live in ${location} `
    // );
    console.log(this, location);
  },
}; 

const person2 = {
    name: "Rishabh",
    age: 30,
};

console.log(person1.printNameAndAge("New York", false)); // person1
console.log(person1.printNameAndAge.call(person2, "San Francisco", true)); // person2 San Francisco
console.log(person1.printNameAndAge.apply(person2, ["San Francisco", true])); // person2 San Francisco
*/

const alice = {
  name: "Alice",
  age: 30,
  introduce: function () {
    return `My name is ${this.name}, age is ${this.age}`;
  },
};

const intro = alice.introduce.bind(alice);

console.log(intro());

// polyfill for call

/* let car = {
  name: "Mercedes",
  color: "White",
};

function buyCar(price) {
  console.log(
    `I bought a ${this.name} of color ${this.color} for price Rs.${price}`
  );
}

Function.prototype.myCall = function (context, ...args) {
  context.fn = this;
  context.fn(...args);
};

buyCar.myCall(car, 100000); */

// polyfill for apply

/* let car1 = {
  name: "Mercedes",
  color: "White",
};

function buyCar1(price, color) {
  console.log(
    `I bought a ${this.name} of color ${color} for price Rs.${price}`
  );
}

Function.prototype.myApply = function (context, argsArray) {
  context.fn = this;
  context.fn(...argsArray);
};

buyCar1.myApply(car, [100000, "red"]); */

// polyfill for Bind

let car2 = {
  name: "Mercedes",
  color: "White",
};

function buyCar2(price, color) {
  console.log(
    `I bought a ${this.name} of color ${color} for price Rs.${price}`
  );
}

Function.prototype.myBind = function (context, argsArray) {
  const fn = this;

  return function (...args) {
    return fn.call(context, ...argsArray, ...args);
  };
};
