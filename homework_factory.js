var Car = /** @class */ (function () {
    function Car(colour, price) {
        this.colour = colour;
        this.price = price;
        this.startEngine = function () { return console.log("Starting engine"); };
        this.colour = colour;
        this.price = price;
    }
    return Car;
}());
var Bear = /** @class */ (function () {
    function Bear(colour, price) {
        this.colour = colour;
        this.price = price;
        this.talk = function () { return console.log("Talking"); };
        this.colour = colour;
        this.price = price;
    }
    return Bear;
}());
var Factory = /** @class */ (function () {
    function Factory(productType) {
        var _this = this;
        this.productType = productType;
        this.startProduction = function () { return console.log("Starting production"); };
        this.endProduction = function () { return console.log("Ending production"); };
        this.modifyProductType = function (productType) {
            _this.productType = productType;
        };
        this.createProduct = function (colour, price) {
            switch (_this.productType) {
                case "Car":
                    _this.productList.push(new Car(colour, price));
                    break;
                case "Bear":
                    _this.productList.push(new Bear(colour, price));
                    break;
            }
        };
        this.showProducts = function () { return console.table(_this.productList); };
        this.productType = productType;
        this.productList = [];
    }
    return Factory;
}());

const firstFactory = new Factory("Bear");
firstFactory.startProduction();
firstFactory.createProduct("brown", 10);
firstFactory.createProduct("black", 20);
firstFactory.endProduction();
firstFactory.showProducts();

const secondFactory = new Factory("Car");
secondFactory.startProduction();
secondFactory.createProduct("red", 10);
secondFactory.createProduct("green", 20);
secondFactory.endProduction();
secondFactory.showProducts();

secondFactory.modifyProductType("Bear");
secondFactory.createProduct("brown", 20);
secondFactory.createProduct("black", 30);
secondFactory.showProducts();