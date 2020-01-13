// Application definition

/**
 * @returns random element from any array
 */
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 *
 * @param {string} engine engine type (ex: 'v8')
 * @param {string} color car color (ex: 'red')
 */
function Honda(engine, color) {
  this.engine = engine;
  this.color = color;
}

/**
 *
 * @param {Object} config object {engine, bigTires} used for truck configuration
 * @param {string} color truck color (ex: 'grey')
 */
function Truck(config, color) {
  this.engine = config.engine;
  this.bigTires = config.bigTires;
  this.color = color;
}

/**
 *
 * @param {function} type a function used to create the product
 */
function Factory(type) {
  this.factoryType = type;
  this.lineSpeed = 10;
  this.products = [];
}

/**
 * @param {Array} configs list of configs to be applied to the product
 * @param {Array} props list of props to be applied to the product
 */
Factory.prototype.startBuildProcess = function(configs = [], props = []) {
  const product = this.factoryType;

  for (let i = 0; i < this.lineSpeed; i++) {
    const config = configs.random();
    const prop = props.random();
    this.products.push(new product(config, prop));
  }

  this.finishBuildProcess();
};

/**
 * @emits summary of build process
 */
Factory.prototype.finishBuildProcess = function() {
  console.log(`
Production finished for ${this.factoryType.name}
Total number of products is: ${this.products.length}
    List of ${this.factoryType.name}'s
    `);
  console.table(this.products);
};

// Application functionality

const carFactory = new Factory(Honda);

carFactory.startBuildProcess(
  ["v4", "v6", "v8"],
  ["red", "green", "blue", "white"]
);

const truckFactory = new Factory(Truck);

truckFactory.startBuildProcess(
  [
    { engine: "V12 Turbo", bigTires: false },
    { engine: "DT466", bigTires: true },
    { engine: "RTA96-C", bigTires: true }
  ],
  ["green", "black", "grey"]
);
