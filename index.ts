class ChristmasTree {
    color:string;
    price:number;
    constructor(color:string,price:number) {
        this.color=color;
        this.price=price;
    }
    functionality() {
        console.log('decor');
    }    
}

class Globe {
    color:string;
    price:number;
    constructor(color:string,price:number) {
        this.color=color;
        this.price=price;
    }
    functionality() {
        console.log('decorarea bradului de craciun');
    }    
}

class Factory {
    type:string;
    Products:Array<any>=[];
    constructor(type:string) {
        this.type=type;
    }
    start() {
        console.log('start');
    }
    stop() {
        console.log('stop');
    }
    CreateProduct(color:string,price:number) {
        if(this.type == 'Globe')
            return new Globe(color,price);  
        else
            return new ChristmasTree(color,price);
    }
    ModifyTypeOfProduct() {
        if(this.type =='Globe')
        {
            this.type='ChristmasTree';
            this.Products=[];
        }
        else
        {
            this.type='Globe';
            this.Products=[];
        }   
    }
    CreateProducts() {
        if(this.type == 'ChristmasTree')
        {
            this.Products.push(this.CreateProduct('green',150));
            this.Products.push(this.CreateProduct('white',100));
            this.Products.push(this.CreateProduct('blue',85));
            this.Products.push(this.CreateProduct('green',200));
            this.Products.push(this.CreateProduct('green',400));
        }
        else
        {
            this.Products.push(this.CreateProduct('green',10));
            this.Products.push(this.CreateProduct('white',15));
            this.Products.push(this.CreateProduct('blue',45));
            this.Products.push(this.CreateProduct('red',20));
            this.Products.push(this.CreateProduct('green',40));
        }
    }
    ListProducts(){
        if(this.Products.length>0)
            console.table(this.Products);
        else
            console.log('nu exista nici un produs');
    }
}

let factory=new Factory('ChristmasTree');
factory.CreateProducts();
factory.ListProducts();//listeaza obiecte de tipul ChristmasTree
factory.ModifyTypeOfProduct();
factory.CreateProducts();
factory.ListProducts();//modific tipul listat, deci listeaza obiecte de tipul Globe

let factory2=new Factory('Globe');
factory2.start();
factory2.CreateProducts();
factory2.ListProducts();//listeaza obiecte de tipul Globe
factory2.stop();