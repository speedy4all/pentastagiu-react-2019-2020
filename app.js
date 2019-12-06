class Utils {
    constructor(start = 5) {
        this.current = start;
        //this.increment = this.increment.bind(this);
    }

    increment() {
        console.log(++this.current);
    }
}

const utils = new Utils(68);
// utils.increment();
// utils.increment.apply({current: 9});
// utils.increment.call({current: 15});
utils.increment();