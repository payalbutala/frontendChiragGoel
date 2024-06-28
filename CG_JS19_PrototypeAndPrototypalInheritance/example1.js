// "use strict";

/* class Bird {
  #breed;
  constructor(breed, name) {
    this.#breed = breed;
    this.name = name;
    this.fly = () => {
      console.log(`It can fly`);
    };
  }

  getDescription() {
    console.log(`${this.name} is a bird of breed ${this.#breed}`);
  }
}

const Penguine = new Bird("ABC", "Penguine");
console.log(Penguine);
// console.log(penguine.#breed); //error as its private and not accessible.

// Check in console.log
console.log(Penguine.hasOwnProperty("name")); //true;
console.log(Penguine.hasOwnProperty("#breed")); //false;
console.log(Penguine.hasOwnProperty("fly")); // true;
console.log(Penguine.hasOwnProperty("getDescription")); //false;
console.log(Object.keys(Penguine)); // ["name", "fly"]
 */

/*
// Convert above code  into constructor function
function Bird1(breed, name) {
  this.breed = breed;
  this.name = name;
  this.fly = () => {
    console.log(`It can fly`);
  };
}
Bird1.prototype.getDescription = function () {
  console.log(`${this.name} is a bird of breed ${this.breed}`);
};

const Penguine1 = new Bird1("XYZ", "Penguine1");
console.log(Penguine1);
*/

// Object Creation
let Bird2 = Object.create({
  breed: "X",
  color: "white",
  name: "Penguine",
  fly: function () {
    console.log(`It can fly`);
  },
  getDescription: function () {
    console.log(`${this.name} is a bird of breed ${this.breed}`);
  },
});

// Tells object in which I want to define property.
Object.defineProperty(Bird2, "name", {
  value: "Penguine",
  enumerable: true, // name is direct propert of Bird2.
  writable: true, // you can modify property
});
Object.keys(Bird2); // as enumerable is false, so you cant iterate throught key=name.

console.log(Bird2); // returns only name.
console.log(Bird2.breed); // it returns X from _prototype VIMPPPPPPPPPPPPPPP

console.log(Object.getOwnPropertyDescriptor(Bird2, "name"));

Object.defineProperty(Bird2, "name", {
  writable: false,
});
// can't modify name after above set.

// OUTPUT
/*
configurable : false
enumerable : false
value : "Penguine"
writable : false
*/

var d = {
  a: 1,
  b: 2,
};

Object.freeze(d); // You can't modify values
d.a = 20;
console.log(d); // { a: 1,  b: 2}
