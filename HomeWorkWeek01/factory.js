
/// -------------------------///
///  Application definition  ///
///--------------------------///


/**
 *
 * @param {string} mark 
 * @param {string} model
 * @param {string} color
 * @param {string} engine 
 * @param {integer} fabricationYear 
 */
function Car(mark, model, color, engine, fabricationYear){

    this.mark               = mark;
    this.model              = model;
    this.color              = color;
    this.engine             = engine;
    this.fabricationYear    = fabricationYear;
}

/**
 * @returns engine ON sign
 */
Car.prototype.startEngine = function(){
    return '⚫';
};

/**
 * @returns engine stop sign
 */
Car.prototype.stopEngine = function(){
    return '⚪';
};

/**
 * @returns arrow forward
 */
Car.prototype.goAhead = function(){
    return '⇧';
};

/**
 * @returns arrow back
 */
Car.prototype.goBack = function(){
    return '⇩';
};

/**
 * @returns right arrow
 */
Car.prototype.turnRight = function(){
    return '⇨';
};

/**
 * @returns left arrow
 */
Car.prototype.turnLeft = function(){
    return '⇦';
};



/**
 *
 * @param {object} type 
 * @param {string} name
 * @param {integer} price
 * @param {boolean} canTalk 
 * @param {boolean} canWalk 
 */
function Toy(type, name, price, canTalk = false, canWalk = false){

    this.type       = type;
    this.name       = name;
    this.price      = price;
    this.currency   = '€';
    this.canTalk    = canTalk;
    this.canWalk    = canWalk;
}

/**
 * @returns {string} a message
 */
Toy.prototype.talk = function(){
    return this.canTalk ? `Hello I'm a ${this.type}` : 'I\'m sorry, this toy can\'t talk.';
};

/**
 * @returns {string} a message
 */
Toy.prototype.walk = function(){
    return this.canWalk ? 'Where do you want to go?' : 'I\'m sorry, this toy can\'t walk.';
};

/**
 * @returns {string} a message
 */
Toy.prototype.getPrice = function(){
    return `This ${this.type} cost ${this.price} ${this.currency}.`;
};



function Factory(type, timeProduction){

    this.factoryType    = type;
    this.timeProduction = timeProduction;
    this.products       = [];
}

Factory.prototype.startBuildProcess = function(props = []){

    const product = this.factoryType;

    this.products = props.map(function(element){
        return new product(...element);
    });

    this.finishBuildProcess();
};

Factory.prototype.finishBuildProcess = function(){
    console.log('');
    console.log('|-------------------------------------------');
    console.log(`|   >  Production finished for ${this.factoryType.name}`);
    console.log(`|   >  Total number of products is: ${this.products.length}`);
    console.log(`|   >  List of ${this.factoryType.name}'s:`);
    console.log('|-------------------------------------------');
    console.log('');
    
    this.displayProducts();
};

Factory.prototype.displayProducts = function(){
    console.table(this.products);
};

Factory.prototype.updateProduct = function(id, newProduct = {}){
    const oldProduct = this.products[id];
    this.products[id] = { ...newProduct };

    console.log('');
    console.log('|-------------------------------------------');
    console.log(`|   >  One product in the list has been updated.`);
    console.log('|-------------------------------------------');
    console.log('');

    console.table({ oldProduct, newProduct });
};

Factory.prototype.deleteProduct = function(id){
    const product = this.products[id];
    this.products.splice(id, 1);

    console.log('');
    console.log('|-------------------------------------------');
    console.log(`|   >  A product has been deleted from the list.`);
    console.log('|-------------------------------------------');
    console.log('');

    console.table(product);
};



/// ----------------------------///
///  Application functionality  ///
///-----------------------------///


const carFactory = new Factory(Car, 2500);

carFactory.startBuildProcess([
    [ 'Dacia', 'Logan', 'red', 'HE-HE VIO', 2013 ],
    [ 'Dacia', 'Duster', 'blue', 'ARMO-12', 2019 ],
    [ 'Opel', 'Astra', 'yellow', 'DSA-03', 2000 ],
    [ 'Skoda', 'Octavia', 'black', 'TURBO-76', 2018 ],
    [ 'Fiat', 'Panda', 'red', 'YUFV-09', 2020 ],
    [ 'Renault', 'Clio', 'white', 'DCR-6', 2019 ]
]);


const toyFactory = new Factory(Toy, 1000);

toyFactory.startBuildProcess([
    [ 'Doll', 'Barbie', 130, true ],
    [ 'Train', 'Speedy', 550, false, true ],
    [ 'Balloon', 'Little balloon', 3 ]
]);

carFactory.deleteProduct(2);

carFactory.updateProduct(4, {
    mark: 'BMW', 
    model: 'X7', 
    color: 'black', 
    engine: 'V8', 
    fabricationYear: 2020
});
