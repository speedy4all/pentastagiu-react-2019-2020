Array.prototype.random = function(){
    return this[Math.floor(Math.random() * this.length)];
 }
 
 function toys(type,color){
   this.type = type;
   this.color = color;
 };
 
 toys.prototype.play = function(){
   return 'Hello. I`m talking';
 };
 
 function games(type,color){
   this.type = type;
   this.color = color;
 };
 
 games.prototype.play = function(){
   return 'Lets play';
 }
 
 function gifts(type,price){
   this.type = type;
   this.price = price;
 };
 
 gifts.prototype.open = function(){
   return 'Surprise';
 };
 
 
 
 function Factory(factoryType,numberOfProducts){
   this.factoryType = factoryType;
   this.nrProducts = numberOfProducts;
   this.products = [];
 }
 
 Factory.prototype.startProduction = function(){
   console.log(`


    Began the production of ${this.factoryType.name}!    
    The number of products: ${this.nrProducts}
    `);
   
 }
 
 Factory.prototype.stopProduction = function(){
   console.log(`


    Stop the production of ${this.factoryType.name}!    
    Total parts produced: ${this.products.length}               
    List with ${this.factoryType.name}'s produced:`);
   console.table(this.products);
 
 }
 
 Factory.prototype.buildingProcess = function(param1=[], param2=[]){
   const product = this.factoryType;
 
   for(let i=0;i<this.nrProducts; i++)
   {
     const first_param = param1.random();
     const second_param = param2.random();
     this.products.push(new product(first_param,second_param));
   }
 }
 
 Factory.prototype.changeFactoryType = function (newFactoryType){
   this.factoryType = newFactoryType;
   this.products = [];
 }
 
 const toysProd = new Factory(toys,10);
 const giftsProd = new Factory(gifts,8);
 
 
 toysProd.startProduction();
 toysProd.buildingProcess(
   ["Bear","Doll","Horse","Dinosaur"],
   ["Black","Red","White", "Green"]
 );
 toysProd.stopProduction();
 
 
 giftsProd.startProduction();
 giftsProd.buildingProcess(
   ["Birthday gift","Occasion gift","Christams gift","Family gift"],
   ["Black","Red","White", "Green"]
 );
 giftsProd.stopProduction();
 
 toysProd.changeFactoryType(games);
 toysProd.startProduction();
 toysProd.buildingProcess(
    ["Board game","Video game","Card game","Dice game"],
    ["Black","Red","White", "Green"]
 );
 toysProd.stopProduction();