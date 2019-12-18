class Factory {
    constructor(type,line_speed){
        this.factory_type = type;
        this.line_speed = line_speed;
        this.products = [];
    }

    start_process(params1,params2) {

        let product = this.factory_type;
        let p1 = Math.floor(Math.random()*params1.length);
        let p2 = Math.floor(Math.random()*params2.length);

        for(let i=0;i<this.line_speed;i++){
            this.products.push(new product(params1[p1],params2[p2]));
            p1 = Math.floor(Math.random()*params1.length);
            p2 = Math.floor(Math.random()*params2.length);
        }

        console.log("Finished the process.");
    }

    stop_process(){
        console.log(`
        Production finished for ${this.factory_type.name}
        Total number of products is: ${this.products.length}
            List of ${this.factory_type.name}'s
            `);
          console.table(this.products);
    }
}

class Doll {
    constructor(hair_color,size){
        this.hair_color = hair_color;
        this.size = size;
    }

    talk(){
        console.log("Mamma");
    }
}

class Ball {
    constructor(color,size){
        this.color = color;
        this.size = size;
    }

    bounce(){
        console.log("Bounce bounce!");
    }
}

f1 = new Factory(Doll,5);
f2 = new Factory(Ball,10);

f1.start_process(['black','yellow','red'],[4,5,6]);
f1.start_process(['blue','green','purple'],[4,5,6]);
console.table(f1.products);

f2.start_process(['green','blue','black'],[2,5,7]);
f2.stop_process();
console.table(f2.products);

f1.factory_type = Ball;
f1.start_process(['green','blue','black'],[2,5,7]);
f1.stop_process();