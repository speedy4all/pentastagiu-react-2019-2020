Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };

class StuffedToy {
    constructor(type, color, speak) {
        this.type = type;
        this.color = color;
        this.speak = speak;
    }
    doSomething() {
        console.log(`${this.type} sais "${this.speak}"`);
    }
};

class Fireworks {
    constructor(type, size, sound) {
        this.type = type;
        this.size = size;
        this.sound = sound;
    }
    doSomething() {
        console.log(`${this.type} goes "${this.sound}"`);
    }
};

class Factory {
    constructor(factoryType, capacity) {
        this.type = factoryType;
        this.capacity = capacity;
        this.products = [];
    }
    startProduction(types, props, functionalities) {
        const product = this.type;
        for (let unit = 0; unit < this.capacity; unit++) {
            const type = types.random();
            const prop = props.random();
            const functionality = functionalities.random();
            this.products.push(new product(type, prop, functionality));
        }
        this.stopProduction();
    }
    stopProduction() {
        console.log(`
            Production ended for ${this.type.name}
            Number of items produce: ${this.capacity}
            The list of ${this.type.name} is:`);
        console.table(this.products);
    }
    getFunctionality(index) {
        if (this.products[index]) {
            this.products[index].doSomething();
        }
    }
    changeProduction(factoryType, capacity) {
        this.type = factoryType;
        this.capacity = capacity;
        this.products = [];
        console.log(`
            The factory has been repurposed.
            Now it can produce ${this.type.name}
            `);
    }
}

const HollidaysFactory = new Factory(StuffedToy, 6);
HollidaysFactory.startProduction(
    ['teddy bear', 'lion', 'panda', 'monkey', 'otter' ],
    ['green', 'brown', 'red', 'yellow'],
    ['Hello', 'Im hungry', 'Put your hands up. This is a robbery']
);
HollidaysFactory.getFunctionality(1);
HollidaysFactory.changeProduction(Fireworks,8);
HollidaysFactory.startProduction(
    ['firecrakers', 'smoke bombs', 'bottle rocket', 'flare' ],
    ['very small', 'small', 'medium', 'big'],
    ['Boom', 'Pop', 'Rat-a-tat-a', 'Capow']
);
HollidaysFactory.getFunctionality(1);

