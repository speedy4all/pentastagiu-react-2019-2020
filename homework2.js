//random
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 *
 * @param {string} culoare  (ex: 'rosu')
 * @param {string} marime culoare tricou (ex: 'S.XL,L')
 */
function Tricou(culoare, marime) {
  this.culoare = culoare;
  this.marime = marime;
}

/**
 *
 * @param {Object} config object
 * @param {string} color truck color (ex: 'grey')
 */
function Costum(config, color, tip) {
  this.pantalon = config.pantalon;
  this.sacou = config.sacou;
  this.color = color;
  this.tip = tip;
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
Factory.prototype.startBuildProcess = function(
  configs = [],
  props = [],
  tips = []
) {
  const product = this.factoryType;

  for (let i = 0; i < this.lineSpeed; i++) {
    const config = configs.random();
    const prop = props.random();
    const tip = tips.random();
    this.products.push(new product(config, prop, tip));
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

const tshirtFactory = new Factory(Tricou);

tshirtFactory.startBuildProcess(
  ["S", "M", "L", "XL", "XXL"],
  ["red", "green", "blue", "white", "pink"]
);

const costumFactory = new Factory(Costum);

costumFactory.startBuildProcess(
  [
    { pantalon: "cu dungi", sacou: false },
    { pantalon: "casual", sacou: true },
    { pantalon: "slimfit", sacou: true },
    { pantalon: "carouri", sacou: true },
    { pantalon: "80's", sacou: true }
  ],
  ["green", "black", "grey", "blue", "lightgrey"],
  ["Male", "Female"]
);
