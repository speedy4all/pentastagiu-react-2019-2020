Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
};

function Globes(shape,color) {
    this.shape = shape;
    this.color = color;
}

function Lights(length,color) {
    this.length = length;
    this.color = color;
}

function Factory(type) {
    this.factoryType = type;
    this.lineSpeed = 10;
    this.products = [];
}

Factory.prototype.startBuildProcess = function(configs = [], props = []) {
    const product = this.factoryType;
    for (let i = 0; i < this.lineSpeed; i++) {
        const config = configs.random();
        const prop = props.random();
        this.products.push(new product(config, prop));
      }
    
      this.finishBuildProcess();
};


Factory.prototype.finishBuildProcess = function() {
    console.log(`
  Production finished for ${this.factoryType.name}
  Total number of products is: ${this.products.length}
      List of ${this.factoryType.name}'s
      `);
    console.table(this.products);
};

const GlobesFactory = new Factory(Globes)
GlobesFactory.startBuildProcess(
    ["sphere", "star", "cube"],
    ["red", "purple", "blue", "white"]
);

const LightsFactory = new Factory(Lights);

LightsFactory.startBuildProcess(
  ["2 m", "5 m", "8 m"],
  ["white", "blue", "multicolor"]
);
