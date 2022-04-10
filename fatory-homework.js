function Candy(type, flavor) {
    this.type = type;
    this.flavor = flavor;
}

function Toys(type, configs) {
    this.type = type;
    this.size = configs.size;
    this.gender = configs.gender;
}

function Factory(type) {
    this.factoryType = type;
    this.maxVolume = 10;
    this.currentItems = [];
}

Factory.prototype.startProduction = function (types = [], configs = []) {
    const product = this.factoryType;
    for (let i = 0; i < this.maxVolume; i++) {
        const type = types;
        const config = configs;
        this.currentItems.push(new product(type[i], config[i]))
    }
    this.stopProduction();
};

Factory.prototype.stopProduction = function () {
    console.table(this.currentItems);
};


const candyFactory = new Factory(Candy);
candyFactory.startProduction(
    ["chocolate", "cake", "brownies", "candy", "cotton-candy", "pudding", "biscuits", "ice-cream", "honey", "caramel"],
    ["sweet", "extra sweet", "bitter sweet", "bitter", "souer", "sweet", "salty", "sweet", "extra sweet", "sweet"]);


const toysFactory = new Factory(Toys);
toysFactory.startProduction(
    ["car", "doll", "puzzle", "large car", "tv", "phone", "book", "earphones", "candy", "bicycle", "sleigh"],
    [
        {size: "small", gender: "boy"},
        {size: "small", gender: "girl"},
        {size: "big", gender: "unisex"},
        {size: "extra small", gender: "boy"},
        {size: "medium small", gender: "girl"},
        {size: "extra big", gender: "boy"},
        {size: "xxs", gender: "boy"},
        {size: "xxl", gender: "girl"},
        {size: "very big", gender: "boy"},
        {size: "small", gender: "boy"},
        {size: "almost small", gender: "unisex"},
    ]);
