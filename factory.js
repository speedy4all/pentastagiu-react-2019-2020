// Application Definition

// Returns random element from any array

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}

/* @param {string} daca este produs de post ("Da"/"Nu")
   @param {string} ce contine ("Nuca", "Rahat", "Cacao") */

function Cozonac(dePost, continut) {
    this.dePost = dePost;
    this.continut = continut;
}

function miros() {
    console.log('Hmmm, ce bine miroase!');
}

function rulou(continut1, vrac, greutate) {
    this.continut1 = continut1;
    this.vrac = vrac;
    this.greutate = greutate;
}

/* @param {Object} config object {continut, produsPost} pentru asamblare sarmale
   @param {string} tipul foii {varza, vitaDeVie, stevie} */

function Sarmale(config, foaie) {
    this.continut = config.continut;
    this.smantana = config.smantana;
    this.foaie = foaie;
}

function tipDeVarza() {
    console.log('Sa pun varza murata sau cruda?!');
}

// @param {function} type a function used to create the product

function Factory(type)   {
    this.factoryType = type;
    this.lineSpeed = 10;
    this.products = [];
}

/**
 * @param {Array} configs list of configs to be applied to the product
 * @param {Array} props list of props to be applied to the product
 */

Factory.prototype.startBuildProcess = function(configs = [], props = []) {
    const PRODUCT = this.factoryType;

    for (let i = 0; i< this.lineSpeed; i++) {
        const CONFIG = configs.random();
        const PROP = props.random();
        this.products.push(new PRODUCT(CONFIG, PROP));
    }

    this.finishBuildProcess();
};

// New factory type
function changeFactoryType(newType) {
    this.factoryType = newType;
    this.products = [];
  };


/* @emits summary of build process */

Factory.prototype.finishBuildProcess = function() {
    console.log(`
    Productia de ${this.factoryType.name} a fost finalizata!
    Au fost inregistrate ${this.factoryType.length} produse
    `);
    
    console.table(this.products);
}

// Functionalitate

const cozonacFactory = new Factory(Cozonac);

cozonacFactory.startBuildProcess(
    ['Da', 'Nu'],
    ['Nuca', 'Rahat', 'Cacao']
);

miros();

const sarmaleFactory = new Factory(Sarmale);

sarmaleFactory.startBuildProcess(
    [
        { continut: "De Post", smantana: "Nu" },
        { continut: 'Normale', smantana: 'Da' },
        { continut: 'Orez si Ciuperci', smantana: 'Da' },
        { continut: 'Orez si Ciuperci', smantana: 'Nu' }
    ],
    ['Vita de Vie', 'Varza']
);

tipDeVarza();

cozonacFactory.changeFactoryType(rulou);

cozonacFactory.startBuildProcess(
    ['Mac', 'Nuca', 'Mixt'],
    ['Da', 'Nu'],
    ['0.5 KG', '1 KG', '2 KG', '3 KG']
);