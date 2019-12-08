// Application definition

/**
 * @returns random element from any array
 */
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};


function ChristmasDecorations(shape, color) {
    this.shape = shape;
    this.color = color;
}

function EasterDecorations(config, price) {
    this.shape = config.shape;
    this.color = config.color;
    this.price = price;
}

function Factory(type) {
    this.factoryType = type;
    this.lineSpeed = 13;
    this.products = [];
}

Factory.prototype.startBuildProcess = function (configs = [], props = []) {
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
Factory.prototype.finishBuildProcess = function () {
    console.log(`
  Production finished for ${this.factoryType.name}
  Total number of products is: ${this.products.length}
      List of ${this.factoryType.name}'s
      `);
    console.table(this.products);
};


// Application functionality

const christmasDecorationFactory = new Factory(ChristmasDecorations);

christmasDecorationFactory.startBuildProcess(
    ["star", "oval", "tree"],
    ["red", "gold", "silver", "green"]
);

const easterDecorationFactory = new Factory(EasterDecorations);

easterDecorationFactory.startBuildProcess(
    [{ shape: "bunny", color: 'green' },
    { shape: "egg", color: 'yellow' }],
    ['15$', '100$', '3$']
);

