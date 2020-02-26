
Array.prototype.random = function(){
   return this[Math.floor(Math.random() * this.length)];
}

function keyboards(type,color,manufacturer){
  this.type = type;
  this.color = color;
  this.manufacturer = manufacturer;
};

keyboards.prototype.shockTest = function(){
  return 'ok';
};

function mouse(type,color,manufacturer){
  this.type = type;
  this.color = color;
  this.manufacturer = manufacturer;
};

mouse.prototype.shockTest = function(){
  return 'ok';
}

keyboards.prototype.shockTest = function(){
  return 'ok';
};

function watches(type,price,manufacturer){
  this.type = type;
  this.price = price;
  this.manufacturer = manufacturer;
};

watches.prototype.waterResist = function(){
  return 'ok';
};



function Factory(factoryType,numberOfProducts){
  this.factoryType = factoryType;
  this.nrProducts = numberOfProducts;
  this.products = [];
}

Factory.prototype.startProduction = function(){
  console.log(`
  |---------------------------------------   
  | Production of ${this.factoryType.name} has started!    
  | The number of parts to be produced: ${this.nrProducts} 
  |---------------------------------------`);
  
}

Factory.prototype.stopProduction = function(){
  console.log(`
  |---------------------------------------
  | Production of ${this.factoryType.name} has ended!    
  | Total parts produced: ${this.products.length}               
  | List with ${this.factoryType.name}'s produced:       
  |---------------------------------------`);
  console.table(this.products);

}

Factory.prototype.buildingProcess = function(param1=[], param2=[], param3=[]){
  const product = this.factoryType;

  for(let i=0;i<this.nrProducts; i++)
  {
    const first_char = param1.random();
    const second_char = param2.random();
    const third_char = param3.random();
    this.products.push(new product(first_char,second_char,third_char));
  }
}

Factory.prototype.changeFactoryType = function (newFactoryType){
  this.factoryType = newFactoryType;
  this.products = [];
}

const keyboardProd = new Factory(keyboards,7);
const watchProd = new Factory(watches,6);


keyboardProd.startProduction();
keyboardProd.buildingProcess(
  ["Mechanical","Classic","Flexible","Gaming"],
  ["Pure-Black","RGB","White", "Red-Blue"],
  ["Logitech","Razer","Red Dragon","Genesis"]
);
keyboardProd.stopProduction();


watchProd.startProduction();
watchProd.buildingProcess(
  ["Mechanical","Quartz","Kinetic","Mechanical-Automatic"],
  ["120$","149.99$","500$","999.99$"],
  ["Rolex","Meigeer","Daniel Klein", "Omega"]
);
watchProd.stopProduction();

keyboardProd.changeFactoryType(mouse);
keyboardProd.startProduction();
keyboardProd.buildingProcess(
  ["Gaming","Wireless","Classic"],
  ["Pure-Black","RGB","White", "Red-Blue"],
  ["Logitech","Razer","Red Dragon","Genesis"]
);
keyboardProd.stopProduction();