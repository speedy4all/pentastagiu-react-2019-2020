
/**
 * @returns random element from any array
 */
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}

/**
 * 
 * @param {string} shape 
 * @param {string} color 
 * @param {Object} feature object {message, light}
 */
function Bauble(shape, color, feature) {
    this.shape = shape;
    this.color = color;
    this.message = feature.message;
    this.light = feature.light;
}

/**
 * 
 * @param {string} shape 
 * @param {Object} feature 
 */
function Gingerbread(shape, feature){
    this.shape = shape;
    this.type = feature.type;
    this.description = feature.description;
}

/**
 * 
 * @param {function} type function used to create the product
 */
function Factory(type){
   this.factoryType = type;
   this.lineSpeed = 12; 
   this.products = []; 
}

/**
* @param {Array} configs
* @param {Array} features
*/
Factory.prototype.startBuildProcess = function(configs = [], props = [], features = []) {
   const product = this.factoryType;
   
   console.log(`
   Ho ho ho!
   Your ${this.factoryType.name} order is on it's way!
   List of ${this.factoryType.name}s:
   `);

   for(let i = 0; i<this.lineSpeed;i++){
       const config = configs.random();
       const prop = props.random();
       const feature = features.random();
       this.products.push(new product(config, prop, feature));
   }
  
   this.finishBuildProcess();
};

/**
* @emits summary of build process
*/
Factory.prototype.finishBuildProcess = function() {
   console.table(this.products);
   console.log(`
   Production finished for ${this.factoryType.name}.
   Total number of products is: ${this.products.length}.
   `);
   
};

// Functionality
const decorationFactory = new Factory(Bauble);

decorationFactory.startBuildProcess(
   ["heart", "star", "sphere"],
   ["pink", "white","silver","red","blue"],
   [
       { message:"Wishing you a very Merry Christmas.", light:false },
       { message:"All the best to everyone this Holiday Season!", light:true },
       { message:"Wishing you a magical and blissful holiday!", light:true }
   ]
);

const gingerbreadFactory = new Factory(Gingerbread);

gingerbreadFactory.startBuildProcess(
   ["round","christmas tree","heart","snowflake","star"],
   [
       {type:"Brown Gingerbread", description:"Gingerbread dough made with honey or syrup and baked without using a wafer base."},
       {type:"Wafer Gingerbread", description:"Contains at least 12.5% almonds and/or walnuts and is baked with a wafer base."},
       {type:"Honey Gingerbread", description:"Made with honey, eggs, flour and the finest spices."}
   ]
);