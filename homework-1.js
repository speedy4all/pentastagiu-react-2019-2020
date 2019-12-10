
Array.prototype.returnRandom = function(){
    return this[Math.floor(Math.random() * this.length)];
}



function Toy(type, size, gender){
    this.type = type;
    this.size=size;
    this.gender=gender;
}


function Sweets(type, ingredients, flavour){
   this.type= type;
   this.ingredients= ingredients;
   this.flavour=flavour;
}


function Factory (type, numberOfProducts) {
    this.productType = type;
    this.numberOfProducts = numberOfProducts;
    this.productList = [];
  }

Factory.prototype.makeProducts = function(types=[],sizes=[], genders=[]){
   const product = this.productType;
   for (let i= 0; i < this.numberOfProducts;i++) {
        const type = types.returnRandom();
        const size= sizes.returnRandom();
        const gender = genders.returnRandom();
        const newProduct = new product(type, size, gender)
        this.productList.push(newProduct);
    }
   
     this.startProduction();
    
};



Factory.prototype.startProduction = function(){
    console.log(`
    The process of production has started for ${this.productType.name}!
    
    Total number of products is: ${this.numberOfProducts}
      Here is the list of the products made for ${this.productType.name}
      `);
    console.table(this.productList);
    
}

const ToyFactory = new Factory(Toy,5);
ToyFactory.makeProducts(
    ['car','train','truck', 'Barbie'],
    ['small','medium','big',],
    ['girl','boy'],
);


const SweetsFactory = new Factory(Sweets,6);
SweetsFactory.makeProducts(
   ['cupcake','gingerbread','cake','cookie'],
   ['chocolate', 'nosugar', 'butter'],
   ['caramel', 'capucino', 'coffe'],
);
