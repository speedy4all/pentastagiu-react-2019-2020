class Car {  
    constructor(color, engine){
        this.color = color
        this.engine = engine;
    }
    startEngine = () => console.log("Vrum, vrum");
}

class Toy {
    /**
     * 
     * @param {string} color toy color (ex: 'red', 'blue')
     */
    constructor(color, targetAudience){
        this.color = color;
        this.targetAudience = targetAudience;
    }
}

class Doll extends Toy{
    /**
     * @param {boolean} gender toy type true for male, false for female
     */
    constructor(color, targetAudience, gender){
        super(color, targetAudience)
        this.gender = gender;
    }
    talk = () => console.log("Talk");
}



class Factory {
    constructor(factoryType) {
        this.factoryType = factoryType;
        this.products = [];
    }
    startProduction = () => console.log("Start production");

    produceItem = (product) => {
        if(product instanceof this.factoryType){
            this.products.push(product)
        } else {
            console.error("Can't add this product, factoryType and productType don't match")
        }
    }

    stopProduction = () => console.log("Stop production");
    showCurrentProduction = () => console.table(this.products);
    changeFactoryType = (newFactoryType) => {
        this.factoryType = newFactoryType
        this.products = [];
    };
}


const firstFactory = new Factory(Car);
const secondFactory = new Factory(Doll);

firstFactory.startProduction();
firstFactory.produceItem(new Car("red", "V10"));
firstFactory.produceItem(new Car("blue", "V8"));
firstFactory.produceItem(new Car("black", "V6"));
firstFactory.produceItem(new Car("white", "V10"));
firstFactory.produceItem(new Car("purple", "V10"));

firstFactory.showCurrentProduction();
firstFactory.changeFactoryType(Doll);
firstFactory.showCurrentProduction();

secondFactory.startProduction();
secondFactory.produceItem(new Doll("red", false, false));
secondFactory.produceItem(new Doll("blue", true, true));
secondFactory.produceItem(new Doll("pink", true, false));
secondFactory.produceItem(new Doll("orange", false, true));
secondFactory.produceItem(new Doll("yellow", true, true));

secondFactory.showCurrentProduction();

