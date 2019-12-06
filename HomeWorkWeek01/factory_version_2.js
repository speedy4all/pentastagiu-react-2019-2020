
/// -------------------------///
///  Application definition  ///
///--------------------------///

class Message {

    static consoleLog(message = []){
        message.forEach(mess => {
            console.log(mess);
        });
    }
}


class Product {

    constructor(price, fabricationYear){
        this.price              = price;
        this.fabricationYear    = fabricationYear;
    }

    getProductAge(){
        return new Date().getFullYear() - this.fabricationYear;
    }
}


class Car extends Product {

    constructor(mark, model, color, engine, price, fabricationYear){
        super(price, fabricationYear);
        this.mark     = mark;
        this.model    = model;
        this.color    = color;
        this.engine   = engine;
    }

    startEngine(){ return '⚫'; }

    stopEngine(){ return '⚪'; }

    goAhead(){ return '⇧'; }

    goBack(){ return '⇩'; }

    turnRight(){ return '⇨'; }

    turnLeft(){ return '⇦'; }
}


class Toy extends Product {

    constructor(type, name, price, fabricationYear, canTalk = false, canWalk = false){
        super(price, fabricationYear);
        this.type       = type;
        this.name       = name;
        this.currency   = '€';
        this.canTalk    = canTalk;
        this.canWalk    = canWalk;
    }

    talk(){
        return this.canTalk ? `Hello I'm a ${this.type}` : 'I\'m sorry, this toy can\'t talk.';
    }

    walk(){
        return this.canWalk ? 'Where do you want to go?' : 'I\'m sorry, this toy can\'t walk.';
    }

    getPrice(){
        return `This ${this.type} cost ${this.price} ${this.currency}.`;
    }
}


class Factory {

    constructor(type, productsNumber){
        this.type           = type;
        this.productsNumber = productsNumber;
        this.products       = [];
    }

    startBuildProcess(props = []){
        const product = this.type;
        for(let i = 0; i < this.productsNumber; i++){
            const params = props[Math.floor(Math.random() * props.length)];
            this.products.push(new product(...params));
        }
        this.finishBuildProcess();
    }

    finishBuildProcess(){
        Message.consoleLog([
            ' ',
            '|-------------------------------------------',
            `|   >  Production finished for ${this.type.name}`,
            `|   >  Total number of products is: ${this.products.length}`,
            `|   >  List of ${this.type.name}s:`,
            '|-------------------------------------------',
            ' '
        ]);
        this.displayProducts();
    }

    displayProducts(){
        console.table(this.products);
    }

    updateProduct(id, newProduct = {}){
        const oldProduct = this.products[id];
        this.products[id] = { ...newProduct };
        Message.consoleLog([
            ' ',
            '|-------------------------------------------',
            '|   >  One product in the list has been updated.',
            '|-------------------------------------------',
            ' '
        ]);
        console.table({ oldProduct, newProduct });
    }

    deleteProduct(id){
        const product = this.products[id];
        this.products.splice(id, 1);
        Message.consoleLog([
            ' ',
            '|-------------------------------------------',
            `|   >  A product has been deleted from the list.`,
            '|-------------------------------------------',
            ' '
        ]);
        console.table(product);
    }
}



/// ----------------------------///
///  Application functionality  ///
///-----------------------------///


const carFactory = new Factory(Car, 5);

carFactory.startBuildProcess([
    [ 'Dacia', 'Logan', 'red', 'HE-HE VIO', 12500, 2013 ],
    [ 'Dacia', 'Duster', 'blue', 'ARMO-12', 13000, 2019 ],
    [ 'Opel', 'Astra', 'yellow', 'DSA-03', 17500, 2000 ],
    [ 'Skoda', 'Octavia', 'black', 'TURBO-76', 20000, 2018 ],
    [ 'Fiat', 'Panda', 'red', 'YUFV-09', 25000, 2005 ],
    [ 'Renault', 'Clio', 'white', 'DCR-6', 11500, 2019 ]
]);

carFactory.deleteProduct(2);

carFactory.updateProduct(4, {
    mark: 'BMW', 
    model: 'X7', 
    color: 'black', 
    engine: 'V8', 
    price: 33500,
    fabricationYear: 2020
});

Message.consoleLog([
    ' ',
    carFactory.products[1].getProductAge(),
    carFactory.products[3].getProductAge()
]);


const toyFactory = new Factory(Toy, 2);

toyFactory.startBuildProcess([
    [ 'Doll', 'Barbie', 130, 2019, true ],
    [ 'Train', 'Speedy', 550, 2018, false, true ],
    [ 'Balloon', 'Little balloon', 3, 2010 ]
]);

Message.consoleLog([
    ' ',
    toyFactory.products[1].talk(),
    toyFactory.products[0].getPrice()
]);