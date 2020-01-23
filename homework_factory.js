
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}

function Car (model, engine) {
    this.model = model;
    this.engine = engine;
}

Car.prototype.startEngine = () => {
    console.log('vruum, vrumm');
}

function Toy (type, color) {
    this.name = type.name;
    this.description = type.description;
    this.price = type.price;
    this.color = color;
}

function ChristmasDecorations (props, categories) {
    this.useDestination = props.useDestination;
    this.name = props.name;
    this.waterResistant = props.waterResistant;
    this.price = props.price;
    this.categories = categories;
}

function Factory (type,lineSpeed) {
    this.factoryType = type;
    this.lineSpeed = lineSpeed;
    this.products = [];
}

Factory.prototype.startBuildProcess = function (configs =[], props = []) {
    const product = this.factoryType;
    
    for (let i = 0; i < this.lineSpeed; i++) {
        const config = configs.random();
        const prop = props.random();
        this.products.push(new product (config, prop));
    }
    this.finishBuildProcess();
}

Factory.prototype.finishBuildProcess = function () {
    console.log(`
    Production finished for ${this.factoryType.name}
    Total number of products is: ${this.products.length}`
    );
    console.table(this.products);

}

Factory.prototype.action = function(index) {
    if(this.products[index]) {
        console.log('The car model: ' + `${this.products[index].model} ` + 'eqiped with an engine: ' + `${this.products[index].engine} ` + 'just started the engine:');
        this.products[index].startEngine();
    }
}

Factory.prototype.modifyProduction = function () {
    const newCarFactory = new Factory (Car, 5);

    newCarFactory.startBuildProcess(
        ["Toyota", "Mazda", "Porsche"],
        ["V12", "2400 cmc", "2000 cmc"]
        );
}

// Functionality

const carFactory = new Factory (Car, 6);

carFactory.startBuildProcess(
    ["Honda", "Dacia", "Seat", "Fiat", "Trabant"],
    ["V4", "V6", "V8", "1200 cmc"]
    );
carFactory.action(3);
carFactory.action(0);


const toyFactory = new Factory (Toy, 7);

toyFactory.startBuildProcess(
    [
        {name:'Teddy Bear', description:'plus toy', price:'10 euro'},
        {name:'Car', description:'remote controlled car', price:'15 euro'},
        {name:'Doll', description:'barby doll', price:'23 euro'},
        {name:'Airplane', description:'airplane models', price:'31 euro'},
        {name:'Train', description:'electric train', price:'27 euro'}
    ],
    ["red", "green", "light blue", "yellow"]
);

const decorationsFactory = new Factory (ChristmasDecorations, 5);

decorationsFactory.startBuildProcess(
    [
        {useDestination:'Christmas Tree Decoration', name:'Christmas tree lights', waterResistant:false, price: '4 euro'},
        {useDestination:'Yard Decoration', name:'North Pole Yard Sign', waterResistant:true,  price: '43 euro'},
        {useDestination:'Yard Decoration', name:'Christmas light outer garland', waterResistant:true,  price: '53 euro'}
    ],
    ["top quality", "low budget"]
);

newCarProduction = new Factory (Car);
newCarProduction.modifyProduction();

