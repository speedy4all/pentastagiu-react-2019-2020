// Application definition

/**
 * @returns random element from any array
 */
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 *
 * @param {string} engine engine type (ex: 'v8')
 * @param {string} color car color (ex: 'red')
 * @param {string} carBrand car brand (ex: 'bmw')
 * @param {integer} manufacturingYear car manufacturing year (ex: 1993)
 * @param {boolean} fammilyCar familyCar (ex: true) 
 */
function Car(engine, color, carBrand, manufacturingYear, familyCar) {
  this.engine = engine;
  this.color = color;
  this.carBrand = carBrand;
  this.manufacturingYear = manufacturingYear;
  this.familyCar = familyCar;
}

Car.prototype.startEngine = function () {
  console.log('vrum vrum');
}

Car.prototype.stopEngine = function () {
  console.log('no more vrum vrum');
}

Car.prototype.paintCar = function (newColour) {
  return 'The colour of ${this.Car.carBrand} has been changed from ${this.carBrand.color} to ${newColour}';
}

Car.prototype.turnTheRadioOn = function () {
  console.log('It begins to look a lot like christmas...');
}

/**
 *
 * @param {string} type type (ex: 'doll', 'teddy bear', 'ball')
 * @param {string} name color (ex: 'barbie', 'teddy')
 * @param {integer} price price (ex: '20')
 * @param {string} currency currency (ex: '$')
 * @param {string} colour colour (ex: 'red', 'green', 'dots')
 * @param {integer} age age (ex: 10)
 */
function Toy(type, name, price, currency, colour, age) {
  this.type = type;
  this.name = name;
  this.price = price;
  this.currency = currency;
  this.colour = colour;
  this.age = age;
}

Toy.prototype.getPrice = function () {
  return 'The price of ${this.Toy.name} is ${this.Toy.price} ${this.Toy.currency}';
}

Toy.prototype.buyToy = function () {
  console.log('I just bought ${this.Toy.type} called ${this.Toy.name} for my nephew who is ${age} years old.');
}

Toy.prototype.returnToy = function () {
  console.log('Just got the refund for the toy I returned: ${this.Toy.price} ${this.Toy.currency}.');
}

/**
 *
 * @param {object} type a function used to create the product
 */
function Factory(type) {
  this.factoryType = type;
  this.lineSpeed = 6;
  this.products = [];
}


Factory.prototype.startBuildProcess = function (engines = [], colors = [], carBrands = [], manufacturingYears = [], familyCars = [], ages = []) {
  const product = this.factoryType;

  for (let i = 0; i < this.lineSpeed; i++) {
    const engine = engines[i];
    const color = colors[i];
    const carBrand = carBrands[i];
    const manufacturingYear = manufacturingYears[i];
    const familyCar = familyCars[i];
    const age = ages[i];
    this.products.push(new product(engine, color, carBrand, manufacturingYear, familyCar, age));
  }
  this.finishBuildProcess();
};

/**
 * @emits summary of build process
 */
Factory.prototype.finishBuildProcess = function () {
  console.log(`
  Production finished for ${this.factoryType.name}
  Total number of products is: ${this.products.length}
      List of ${this.factoryType.name}'s
      `);
  console.table(this.products);
};


// Application functionality

const carFactory = new Factory(Car);

carFactory.startBuildProcess(
  ["v4", "v6", "v8", "v10", "v12", "v4"],
  ["red", "green", "blue", "black", "purple", "purple"],
  ["bmw", "bmw", "honda", "renault", "audi", "peugeot"],
  [1993, 1993, 1993, 1993, 1993, 2000],
  [false, false, true, true, false, false]
);

const carFactory2 = new Factory(Car);

carFactory2.startBuildProcess(
  ["v2", "v6", "v8", "v10", "v12", "v4"],
  ["blue", "green", "blue", "black", "purple", "purple"],
  ["something", "bmw", "honda", "renault", "audi", "peugeot"],
  [1983, 1993, 1993, 1993, 1993, 2000],
  [true, false, true, true, false, false]
);

const toyFactory = new Factory(Toy);

toyFactory.startBuildProcess(
  ["doll", "bear", "ball", "puzzle", "unicorn", "truck"],
  ["barbie", "teddy", "football", "horses", "magic", "boby"],
  [110, 10, 3, 35, 80, 5],
  ["RON", "$", "euro", "$", "RON", "pounds"],
  ["pink", "red", "purple", "light blue", "black", "yellow"],
  [4, 7, 10, 14, 11, 6, 8]
);

