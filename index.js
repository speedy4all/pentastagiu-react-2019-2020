var ChristmasTree = /** @class */ (function () {
    function ChristmasTree(color, price) {
        this.color = color;
        this.price = price;
    }
    ChristmasTree.prototype.functionality = function () {
        console.log('decor');
    };
    return ChristmasTree;
}());
var Globe = /** @class */ (function () {
    function Globe(color, price) {
        this.color = color;
        this.price = price;
    }
    Globe.prototype.functionality = function () {
        console.log('decorarea bradului de craciun');
    };
    return Globe;
}());
var Factory = /** @class */ (function () {
    function Factory(type) {
        this.Products = [];
        this.type = type;
    }
    Factory.prototype.start = function () {
        console.log('start');
    };
    Factory.prototype.stop = function () {
        console.log('stop');
    };
    Factory.prototype.CreateProduct = function (color, price) {
        if (this.type == 'Globe')
            return new Globe(color, price);
        else
            return new ChristmasTree(color, price);
    };
    Factory.prototype.ModifyTypeOfProduct = function () {
        if (this.type == 'Globe') {
            this.type = 'ChristmasTree';
            this.Products = [];
        }
        else {
            this.type = 'Globe';
            this.Products = [];
        }
    };
    Factory.prototype.CreateProducts = function () {
        if (this.type == 'ChristmasTree') {
            this.Products.push(this.CreateProduct('green', 150));
            this.Products.push(this.CreateProduct('white', 100));
            this.Products.push(this.CreateProduct('blue', 85));
            this.Products.push(this.CreateProduct('green', 200));
            this.Products.push(this.CreateProduct('green', 400));
        }
        else {
            this.Products.push(this.CreateProduct('green', 10));
            this.Products.push(this.CreateProduct('white', 15));
            this.Products.push(this.CreateProduct('blue', 45));
            this.Products.push(this.CreateProduct('red', 20));
            this.Products.push(this.CreateProduct('green', 40));
        }
    };
    Factory.prototype.ListProducts = function () {
        if (this.Products.length > 0)
            console.table(this.Products);
        else
            console.log('nu exista nici un produs');
    };
    return Factory;
}());
var factory = new Factory('ChristmasTree');
factory.CreateProducts();
factory.ListProducts(); //listeaza obiecte de tip pom de craciun
factory.ModifyTypeOfProduct();
factory.CreateProducts();
factory.ListProducts(); //modific tipul listat, deci listeaza obiecte de tipul globe
var factory2 = new Factory('Globe');
factory2.CreateProducts();
factory2.ListProducts(); //listeaza obiecte de tipul Globe
