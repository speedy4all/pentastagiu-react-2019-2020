Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

   /* Factory */

function Factory(type) {
  this.factoryType = type;
  this.capacity = 8;
  this.production = [];
}

/* Lines of Production */

function Minions(figures, color) {
  this.figures = figures;
  this.color = color;
}

function Marvel(toys, size) {
  this.toys = toys;
  this.size = size;
}


/* Starting the process */

Factory.prototype.startProduction = function(asamblying = [], packaging = []) {
  const product = this.factoryType;

  for (let i = 0; i < this.capacity; i++) {
    const fig = asamblying.random();
    const col = packaging.random();
    this.production.push(new product(fig, col));
  }

  this.stopProduction();
};

/* Stoping the production */

Factory.prototype.stopProduction = function() {
  console.log(`Production finished for ${this.factoryType.name} 
Total number of products is: ${this.production.length}`);

  console.table(this.production);
};

/* Functionality/Data for the production lines */

const minionsFactory = new Factory(Minions);

minionsFactory.startProduction(["kevin", "stuart", "bob", "agnes gru"],
 ["yellow", "blue", "green"]);

const marvelFactory = new Factory(Marvel);

marvelFactory.startProduction(["iron man", "hulk", "captain marvel", "thanos", "ant-man", "doctor strange"],
 [24, 12, 6, 48]);

