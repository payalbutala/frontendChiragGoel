class Bird {
  #breed;
  constructor(breed, name) {
    this.#breed = breed;
    this.name = name;
    this.fly = () => {
      console.log(`It can fly.`);
    };
  }

  getDescription() {
    console.log(`${this.name} is a bird of breed ${this.#breed}`);
  }
}

class Penguine extends Bird {
  constructor(country, breed, name) {
    super(breed, name);
    // super(fly);
    this.country = country;
  }

  fly() {
    console.log(`Bird ${this.name}It can fly`);
  }
}

const MyPenguine = new Penguine("Mumbai", "Chiti", "Sweetu");
console.log(MyPenguine.fly()); // It can fly.
