class Car {

    constructor(public colour: string, public price: number) {
        this.colour = colour;
        this.price = price;
    }

    startEngine = () => console.log("Starting engine");
}

class Bear {

    constructor(public colour: string, public price: number) {
        this.colour = colour;
        this.price = price;
    }

    talk = () => console.log("Talking");
}

class Factory {
    productList: any[];

    constructor(public productType: string) {
        this.productType = productType;
        this.productList = [];
    }

    startProduction = () => console.log("Starting production");

    endProduction = () => console.log("Ending production");

    modifyProductType = (productType: string) => {
        this.productType = productType;
    }

    createProduct = (colour: string, price: number) => {
        switch(this.productType) {
            case "Car":
                this.productList.push(new Car(colour, price));
                break;
            case "Bear":
                this.productList.push(new Bear(colour, price));
                break;
        }
    }

    showProducts = () => console.table(this.productList);

}