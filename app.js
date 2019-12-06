class Utils{
    constructor(start=0){
        this.current=start;
    }

    increment(){
        console.log(++this.current);
    }

    showThis(){
        console.log(this);
    }
}

const utils = new Utils();

// utils.increment.apply({current:4});
// utils.increment.call({current:6});
// utils.increment();
// console.log(utils);
utils.increment();
utils.showThis();
utils.increment.apply({current:33});
utils.showThis();
