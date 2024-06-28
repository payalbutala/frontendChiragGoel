class Animal {
  constructor(name) {
    this.name = name;
    this.speak = () => {
      console.log("Animal -- Constructor");
    };
  }

  speak() {
    console.log("Animal -- Prototype");
  }
}

// link prototypical
class Dog extends Animal {
  constructor(breed, name) {
    super(name);
    this.breed = breed;
    this.speak = (x) => {
      console.log("Dog -- Constructor", x);
    };
  }

  speak(x, y) {
    console.log("Dog -- Prototype", x, y);
  }
}

const Dog1 = new Dog("X", "Tommy");

console.log(Dog1.speak());
console.log(Dog1.speak(1, 2));
