let colors = ['red', 'white', 'black', 'pink', 'yellow', 'green', 'blue', 'turqoise', 'custom'];
let engines = ['engine_1', 'engine_2', 'engine_3', 'engine_4', 'engine_5', 'enigine_6', 'engine_7'];


function Product() {
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.engine = engines[Math.floor(Math.random() * engines.length)];
    this.isDriven = false;
    this.mileage = 0;
}



function AssemblyLine(capacity = 200) {
    this.capacity = capacity;
    this.products = [];
}

AssemblyLine.prototype.generateProducts = function () {

    if (this.capacity == 0) {
        console.log("Sorry, the assembly line is not in use at the moment..");
        return;
    }

    var index;
    for (index = 0; index < this.capacity; index++) {
        this.products.push(new Product);
    }
}

AssemblyLine.prototype.addProduct = function () {

    if (this.capacity <= this.products.length) {
        console.log("Sorry, the assembly line is full at the moment.");
        return;
    }

    this.products.push(new Product);
}

AssemblyLine.prototype.startDrivingCar = function(index, mileage) {

    if(this.products.length <= index)
        console.log("This car does not exist");

    var car = assemblyLine.products[index];
    car.isDriven = true;
    car.mileage += mileage;
    console.log('The car number ' + index + ' has been driven for ' + mileage + ' miles.');
}

AssemblyLine.prototype.stopDrivingCar = function(index) {
    if(this.products.length <= index)
        console.log("This car does not exist");

    var car = assemblyLine.products[index];

    if(car.isDriven == false) {
        console.log("Can't stop a car that is not being driven");
        return;
    }

    car.isDriven = false;
    console.log('The car number ${this.index} has been stopped being driven');
}

/*const assemblyLine = new AssemblyLine(3);
assemblyLine.generateProducts();
assemblyLine.addProduct(new Product);

if (assemblyLine.products.length > 0)
    console.table(assemblyLine.products);

assemblyLine.startDrivingCar(2, 40);*/