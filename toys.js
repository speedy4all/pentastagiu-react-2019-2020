// Toy factory definition
/**
 * @returns random element from any array
 */
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };

  function Doll(disneyCharacter, canSing, dressColor ) {
      this.disneyCharacter = disneyCharacter;
      this.canSing = canSing;
      this.dressColor = dressColor;
  }

  function Car(color, hasNoise, canMove) {
      this.color = color;
      this.hasNoise = hasNoise;
      this.canMove = canMove;
  }

  function Lego(config, numberOfPieces) {
        this.type = config.type;
        this.gender = config.gender;
        this.numberOfPieces = numberOfPieces;
  }

  function Factory(type) {
    this.factoryType = type;
    this.lineSpeed = 10;
    this.products = [];
  }

  Factory.prototype.startBuildProcess = function(configs = [], props1 = [], props2 = []) {
    const product = this.factoryType;
  
    for (let i = 0; i < this.lineSpeed; i++) {
      const config = configs.random();
      const prop1 = props1.random();
      const prop2 = props2.random();
      this.products.push(new product(config, prop1, prop2));
    }
  
    this.finishBuildProcess();
  };

  Factory.prototype.finishBuildProcess = function() {
    console.log(`
  Toy Production finished for ${this.factoryType.name}
  Total number of toys is: ${this.products.length}
      List of ${this.factoryType.name}'s
      `);
    console.table(this.products);
  };

  // Toy Factory Application functionality

const dollFactory = new Factory(Doll);

dollFactory.startBuildProcess(
  ["Elsa", "Ariel", "Snow White"],
  [true, true, false],
  ["blue", "green", "white"]
);

const carFactory = new Factory(Car);

carFactory.startBuildProcess(
    ["blue", "green", "white"],
    [true, true, false],
    [true, true, false]
);

const legoFactory = new Factory(Lego);

legoFactory.startBuildProcess(
    [
      { type: "Duplo", gender: "girls" },
      { type: "Creator", gender: "boys" },
      { type: "Junior", gender: "boys" },
      { type: "City", gender: "boys" },
    ],
    [25, 350, 500, 250]
  );