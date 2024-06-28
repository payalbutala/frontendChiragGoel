// Construction function - Car(color, model, price, getTotalPrice)

function Car(color, model, price) {
  this.color = color;
  this.model = model;
  this.price = price;
  this.getTotalPrice = (tax) => {
    return `Total Price for car ${this.model} is ${this.price * tax}.`;
  };
}

const BMW = new Car("Red", "XUV", 7000000);
const Mercedes = new Car("Red", "YZ", 8000000);

console.log(BMW.getTotalPrice(27));
console.log(Mercedes.getTotalPrice(28));

// Class(ES6) converts to constructor function to understand by Browser.
class Car1 {
  constructor(color, model, price) {
    this.color = color;
    this.model = model;
    this.price = price;
    this.getTotalPrice = (tax) => {
      return `Total Price for car ${this.model} is ${this.price * tax}.`;
    };
  }

  // Goes in prorotypical chain
  getTotalPrice1 = (tax) => {
    return `Total Price for car ${this.model} is ${this.price * tax}.`;
  };

  // OR refer line 37 - getTotalPrice2
}

// Goes in prorotypical chain
Car1.prototype.getTotalPrice2 = (tax) => {
  return `Total Price for car ${this.model} is ${this.price * tax}.`;
};

const BMW1 = new Car1("Red", "XUV", 7000000);
const Mercedes1 = new Car1("Red", "YZ", 8000000);

console.log(BMW1.getTotalPrice(27));
console.log(Mercedes1.getTotalPrice(28));

// accessing getTotalPrice1 which is inside function Class Car1 => though its not part of constructor, its accessible beacuse its ingeriting from parent Class.
console.log(BMW1.getTotalPrice1(27));
console.log(Mercedes1.getTotalPrice1(28));
