function NormalCar(engine, color) {
    this.engine = engine;
    this.color = color;
}

function Motorcycle(engine, color) {
    this.engine = engine;
    this.color = color;
}

function Truck(engine, color) {
    this.engine = engine;
    this.color = color;
}

function CarFactory(assemblyType, capacity){
    this.assemblyType = assemblyType;
    this.capacity = capacity;
    this.finishedCars = [];
} 

CarFactory.prototype.startAssembling = function(props = []){
    //const product = 
}