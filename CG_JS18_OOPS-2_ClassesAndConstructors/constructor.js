// Inheritance using constructor

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} ---`;
};

function Dog(breed, name) {
  // if we want name for DOg -> call constructor method of Parent and link prototypical chain
  Animal.call(this, name);
  this.breed = breed;
}

//link prototypical chain
Dog.prototype = Object.create(Animal.prototype);

const Dog1 = new Dog("X", "Pappu");
