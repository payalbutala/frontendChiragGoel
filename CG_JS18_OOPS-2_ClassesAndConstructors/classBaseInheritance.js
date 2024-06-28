class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} ----`;
  }
}

// link prototypical
class Dog extends Animal {
  constructor(breed, name) {
    // extends Animal : "if we want name for Dog -> call constructor method of Parent
    super(name); // this will call constructor method of parent Animal
    this.breed = breed;
  }
}

const Dog1 = new Dog("X", "Tommy");
