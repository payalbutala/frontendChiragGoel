// Method Overloading
// static
// Access Modifier

class Car1 {
  #owner; // # : private - so no one can change it/access it.
  constructor(color, model, price, owner) {
    this.color = color;
    this.model = model;
    this.price = price;
    // # : private - so no one can change it/access it.
    this.#owner = owner;
    this.getTotalPrice = (tax) => {
      return `Total Price for car ${this.model} is ${this.price * tax}.`;
    };
  }

  // can be directly accessible and always like constant
  static DefaultTax = 10;
}

const BMW1 = new Car1("Red", "XUV", 7000000, "PayalVisal");
const Mercedes1 = new Car1("Red", "YZ", 8000000);

console.log(BMW1.getTotalPrice(27));
console.log(Mercedes1.getTotalPrice(28));

console.log(Car1.DefaultTax);
