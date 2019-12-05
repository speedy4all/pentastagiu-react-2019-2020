class Utils {
  constructor(start = 0){
    this.current = start;
  }
  increment() {
    console.log(++this.current);
  }
  showThis(){
    console.log(this);
  }
}

const utils = new Utils();

// utils.increment.apply({current: 4});
// utils.incredment.call({current: 6 });
utils.increment();
utils.increment();
utils.showThis();

utils.increment.apply({current: 4});
utils.increment();

utils.increment.call({current: 100});

utils.showThis();