const colors = ['red', 'white', 'black', 'pink', 'yellow', 'green', 'blue', 'turqoise', 'custom'];
const engines = ['engine_1', 'engine_2', 'engine_3', 'engine_4', 'engine_5', 'enigine_6', 'engine_7'];

class NormalCar {
    constructor() {
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.engine = engines[Math.floor(Math.random() * engines.length)];
        this.hasBigTires = false;
        this.tires = 4;
        this.mileage = 0;
        this.hasBeenDriven = false;
    }
}

class Truck {
    constructor() {
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.engine = engines[Math.floor(Math.random() * engines.length)];
        this.tires = 4;
        this.hasBigTires = true;
        this.hasBeenDriven = false;
        this.mileage = 0;
    }
}

class Motorcycle {
    constructor() {
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.engine = engines[Math.floor(Math.random() * engines.length)];
        this.tires = 2;
        this.hasBigTires = false;
        this.mileage = 0;
        this.hasBeenDriven = false;
    }
}

function AssemblyLine(type) {
    this.factoryType = type;
    this.assemblyCapacity = 10;
    this.cars = [];
}

AssemblyLine.prototype.startBuildProcess = function () {
    const product = this.factoryType;

    for (let i = 0; i < this.assemblyCapacity; i++) {
        this.cars.push(new product());
    }

    console.log(`Production finished for ${this.factoryType.name}
        Total number of products is: ${this.cars.length}
        LIST OF ${this.factoryType.name}s`);

    console.table(this.cars);
};

AssemblyLine.prototype.startDrivingCar = function(index, mileage) {

    if(this.cars.length <= index){
        console.log(`The car with the index ${index} does not exist`);
        return;
    }
    var car = this.cars[index];
    car.hasBeenDriven = true;
    car.mileage += mileage;
    console.log(`The car number ${index} has been driven for ${mileage} miles.
    Toal miles driven: ${car.mileage}`);
}

AssemblyLine.prototype.stopDrivingCar = function(index) {
    if(this.cars.length <= index){
        console.log(`The car with the index ${index} does not exist`);
        return;
    }
    var car = this.cars[index];

    if(car.hasBeenDriven == false) {
        console.log("Can't stop a car that is not being driven");
        return;
    }

    console.log(`The car number ${index} has been stopped being driven`);
}

const carFactory = new AssemblyLine(NormalCar);
carFactory.startBuildProcess();

const truckFactory = new AssemblyLine(Truck);
truckFactory.startBuildProcess();

const motorcycleFactory = new AssemblyLine(Motorcycle);
motorcycleFactory.startBuildProcess();

console.log("Starting test drive for car with index 2.")
motorcycleFactory.startDrivingCar(2, 40);
motorcycleFactory.stopDrivingCar(7);
motorcycleFactory.startDrivingCar(2, 75);

console.table(motorcycleFactory.cars);