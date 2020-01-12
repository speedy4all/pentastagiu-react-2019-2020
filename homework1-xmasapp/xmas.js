// random
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

class Audi {
  constructor(engine, color) {
    this.engine = engine;
    this.color = color;
  }

  startEngine() {
    console.log('vrum vrum');
  }
}

class Honda {
  constructor(engine, color) {
    this.engine = engine;
    this.color = color;
  }

  startEngine() {
    console.log('vrum vrum');
  }
}

class Doll {
  constructor(config, price) {
    this.sex = config.sex;
    this.skinColor = config.skinColor;
    this.name = config.name
    this.price = price;
  }

  bio() {
    const randomName = this.name.random()
    console.log(`Hello! My name is ${randomName}`)
  }
}

class Factory {
  constructor(type) {
    this.factoryType = type;
    this.lineSpeed = 5;
    this.products = [];
    this.newProducts = [];
  };

  startProduction(configs = [], props = []) {
    const product = this.factoryType;

  for (let i = 0; i < this.lineSpeed; i++) {
    const config = configs.random();
    const prop = props.random();
    this.products.push(new product(config, prop));
  }
  this.finishProduction();
  };

  finishProduction() {
    console.log(`
    Production finished for ${this.factoryType.name}
    Total number of products is: ${this.products.length}
      List of ${this.factoryType.name}'s
  `)
  console.table(this.products);
  };

  startNewProduction(newConfig = [], newProps = []) {
    const newProduct = this.factoryType;
  
    for (let i = 0; i < this.lineSpeed; i++) {
      const config = newConfig.random();
      const prop = newProps.random();
      this.newProducts.push(new newProduct(config, prop));
    }
    this.finishNewProduction();
  };

  finishNewProduction() {
    console.log(`
    New production finished for ${this.factoryType.name}
    Total number of new products is: ${this.newProducts.length}
      List of ${this.factoryType.name}'s
  `)
  console.table(this.newProducts);
  }

  modifyProduction() {
    // this.type = newType;
    this.startNewProduction(
      ["v10", "v12", "v14"],
      ["purple", "blue", "black", "pink"]
    );
  };
}

// Application functionality

const carFactory = new Factory(Audi);

carFactory.startProduction(
  ["v4", "v6", "v8"],
  ["red", "green", "blue", "white"]
);

// Create a new instance for car class
const car = new Audi();
car.startEngine();

// Create a new instance for doll class
const dollFactory = new Factory(Doll);

dollFactory.startProduction(
  [
    { sex: "male", skinColor: "white", name: "John" },
    { sex: "female", skinColor: "black", name: "Marry" },
    { sex: "male", skinColor: "brown", name: "Peter" },
    { sex: "female", skinColor: "yellow", name: "Jane" }
  ],
  ["12$", "10$", "8$"]
);
const doll = new Doll({
  name: ["John", "Marry", "Peter", "Jane"]
});
doll.bio();

// Start a new production
const newCarFactory = new Factory(Honda);
newCarFactory.modifyProduction();

const newCar = new Honda();
newCar.startEngine();