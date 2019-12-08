
/// -------------------------///
///  Application definition  ///
///--------------------------///


//Return random product property from an array

Array.prototype.returnRandom = function(){
    return this[Math.floor(Math.random() * this.length)];
}

// Define function to create Tshirt product with param: band to be written on tshirt, colour, size and for which type of person

function Tshirt(config, colour, size, gender){
    this.config = config;
    this.colour=colour;
    this.size=size;
    this.gender=gender;
}



// Define function to create Shoe product with param: type of shoe, colour, size , for who
function Shoes(shoeType, colour, size){
   this.shoeType=shoeType;
   this.colour=colour;
   this.measure=size.measure;
   this.forwho=size.forwho;
}


// Define factory function to create a product

function myFactory(type, numberOfProducts){
    this.productType = type;
    this.numberOfProducts=numberOfProducts;
    this.productList=[];

};

myFactory.prototype.makeProduct = function(configs=[],colours=[], sizes=[], genders=[]){
   const product = this.productType;
   for (let i= 0; i < this.numberOfProducts;i++) {
        const config = configs.returnRandom();
        const colour=colours.returnRandom();
        const size= sizes.returnRandom();
        const gender = genders.returnRandom();
        const newProduct = new product(config, colour, size, gender)
        this.productList.push(newProduct);
    }
   
    this.startProduction();
    
};

myFactory.prototype.cardMessage = function(mytext){
    console.log(mytext);
}

myFactory.prototype.startProduction = function(){
    console.log(`
    Production process started for ${this.productType.name}!
    This process ended with a number of ${this.numberOfProducts} products of type ${this.productType.name}.
    You can see the list of the products here:
    `);
    console.table(this.productList);
}

myFactory.prototype.cardMessage = function(mytext){
    console.log(mytext)
}
const tshirtFactory = new myFactory(Tshirt,8);
tshirtFactory.makeProduct(
    ['Metallica','Korn','Eminem', 'Fuego'],
    ['red','blue','yellow','green','pink'],
    ['S','M','L','XL','XXL'],
    ['male','female','child'],
);
tshirtFactory.cardMessage('You got a new tshirt with you\'re preferred band!');

const shoesFactory = new myFactory(Shoes,10);
shoesFactory.makeProduct(
   ['sport','casual','mountain','home-use'],
   ['brown', 'black', 'white'],
   [{measure:'16', forwho:'child'}, {measure:'17', forwho:'child'}, {measure: '18', forwho:'child'},
    {measure:'38', forwho:'female'}, {measure:'39', forwho:'female'}, {measure:'40', forwho:'female'},
    {measure:'41', forwho:'male'}, {measure:'42', forwho:'male'}, {measure:'43', forwho:'male'}],
);
shoesFactory.cardMessage('You got a new pair of shoes from Santa!');
