
//PROTOTYPE Random Return  
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
//PROTOTYPE Random Return end

//Car function 
function Car(engine, tire, color, price, canStart){
  this.engine = engine;
  this.tire = tire;
  this.color = color;
  this.price = price;
  this.canStart = canStart;
}
//Car function end

//Toys function
function Toys(fabric, color, size, price, canTalk){
  this.fabric = fabric;
  this.color = color;
  this.size = size;
  this.price = price;
  this.canTalk = canTalk;
}
//Toys function end

//Christmas Decoration function
function ChristmasDeco(size, color, lights, price){
  this.size = size;
  this.color = color;
  this.lights = lights;
  this.price = price;
}
//Christmas Decoration function end

//Main Factory function
function Factory(type){
  this.factoryType = type;
  this.nrObjects = 5;
  this.products = [];
}
//Main Factory function end

// //start engine function
// function checkEngine(canStarts = false){
//   const canStart = canStarts.random();
//   //this.canStart.push(new canStart);

//}

//PROTOTYPE Start Build Process
Factory.prototype.startBuildProcess = function(engines = [], tires = [], colors = [], sizes = [], lights=[], prices = [], canStarts = [], canTalks = []) {
  const product = this.factoryType;

  for (let i = 0; i < this.nrObjects; i++) {
    const engine = engines.random();
    const tire = tires.random();
    const color = colors.random();
    const size = sizes.random();
    const light = lights.random();
    const price = prices.random();
    const canStart = canStarts.random();
    const canTalk = canTalks.random();
    this.products.push(new product(engine, tire, color, size, light, price, canStart, canTalk));
  }

  this.finishBuildProcess();
};
//PROTOTYPE Start Build Process end

//PROTOTYPE FINISH / LISTING Process
Factory.prototype.finishBuildProcess = function() {
  console.log(`
Production finished for ${this.factoryType.name} Factory
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Total number of products is: ${this.products.length} 
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
             List of ${this.factoryType.name}'s
    `);
console.table(this.products);
};
//PROTOTYPE FINISH / LISTING Process end

// Application functionality

const carFactory = new Factory(Car);

carFactory.startBuildProcess(
  ["Big Engine", "Medium Engine", "Electric Engine"],
  ["Small Tires", "Big Tires", "Levitating Tires"],
  ["RedCannion", "FlashyBlue", "MetallicGrey"],
  ["150$" , "50$" , "10$"],
  ["Yes" , "No" , "IDK"]
  
);
const toysFactory = new Factory(Toys);

toysFactory.startBuildProcess(
  ["Cotton", "Silk", "Metal"],
  ["red", "green", "blue", "white"],
  ["Size1", "Size2", "Size3"],
  ["30$" , "20$" , "9$"],
  ["Yes", "No", "No need"]
 
);

const decoFactory = new Factory(ChristmasDeco);

decoFactory.startBuildProcess(
  ["Big", "Medium", "Small"],
  ["white", "black", "red", "yellow"],
  ["Flashy Red", "Flashy Blue", "Flashy White"],
  ["10$" , "5$" , "1$"]
);

  
