Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

function Fabrica(capacity = 32) {
  this.capacity = capacity;
  this.products = [];
}

Fabrica.prototype.adauga = function(product = {}) {
  if (this.products.length >= this.capacity) {
    console.log(`Sorry! Production  is stopped`);
    return;
  }
  this.products.push(product);
  console.log(`Avem ${product.tip} de culoare ${product.culoare}`);
};

function Produs(culoare, tip) {
  this.culoare = culoare;
  this.tip = tip;
}

const produs1 = new Produs("roz", "Tshirt");
const produs2 = new Produs("albastru", "soseta");

const Fabrica1 = new Fabrica(3);

Fabrica1.adauga(produs1);
Fabrica1.adauga(produs2);

console.table(Fabrica1.products);
