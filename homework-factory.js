/**
 * @returns random element from any array
 */
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

class Factory {
  constructor(type, lineSpeed) {
    this.factoryType = type;
    this.lineSpeed = lineSpeed;
    this.products = [];
  }

  startBuildProcess = (configs = [], props = []) => {
    const product = this.factoryType;

    for (let i = 0; i < this.lineSpeed; i++) {
      const config = configs.random();
      const prop = props.random();
      this.products.push(new product(config, prop));
    }
  };

  finishBuildProcess = () => {
    console.log(`
  Production finished for ${this.factoryType.name}
  Total number of products is: ${this.products.length}
      List of ${this.factoryType.name}'s
      `);
    console.table(this.products);
  };

  talk = () => {
    if (this.factoryType.name === "Car") console.log("vrum,vrum");
    else console.log("does not talk");
  };

  changeFactoryType = newType => {
    this.factoryType = newType;
    this.products = [];
  };
}

class Car {
  constructor({ brand, engine }, { color, colorType }) {
    this.brand = brand;
    this.engine = engine;
    this.color = color;
    this.colorType = colorType;
  }
}

class Shoes {
  constructor(brand, { color, size }) {
    this.brand = brand;
    this.color = color;
    this.size = size;
  }
}

class Clothes {
  constructor(brand, { color, size, material }) {
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.material = material;
  }
}

const carFactory = new Factory(Car, 5);

carFactory.startBuildProcess(
  [
    { brand: "BMW", engine: "V8" },
    { brand: "BMW", engine: "V12" },
    { brand: "Audi", engine: "V8" },
    { brand: "Audi", engine: "V12" }
  ],
  [
    { color: "red", colorType: "metalic" },
    { color: "blue", colorType: "metalic" },
    { color: "green", colorType: "mat" },
    { color: "white", colorType: "mat" }
  ]
);
carFactory.finishBuildProcess();

carFactory.talk();

const shoesFactory = new Factory(Shoes, 5);

shoesFactory.startBuildProcess(
  ["NIKE", "ADIDAS", "Reebok", "Vans"],
  [
    { color: "red", size: "42" },
    { color: "brown", size: "43" },
    { color: "white", size: "43,5" },
    { color: "red", size: "44" }
  ]
);

shoesFactory.finishBuildProcess();

shoesFactory.changeFactoryType(Clothes);

shoesFactory.startBuildProcess(
  ["NIKE", "ADIDAS", "Reebok", "Vans"],
  [
    { color: "red", size: "S", material: "eco" },
    { color: "brown", size: "M", material: "leather" },
    { color: "white", size: "L", material: "synthetic" },
    { color: "red", size: "Xl", material: "leather" }
  ]
);

shoesFactory.finishBuildProcess();

shoesFactory.talk();
