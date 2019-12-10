/**
 * @returns random element from any array
 */
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)];
};

/**
 * @param {string} type ball type (ex: 'tennis ball')
 * @param {string} color ball color (ex: 'blue')
 */
function Ball(type, color) {
	this.type = type;
	this.color = color;
}

/**
 * @param {Object} config object {size, type} used for plush toys configuration
 * @param {string} color truck color (ex: 'grey')
 */
function PlushToys(config, color) {
	this.size = config.size;
	this.type = config.type;
	this.color = color;
}

/**
 * @param {function} type a function used to create the product
 */
function Factory(type) {
	this.factoryType = type;
	this.quantity = 5;
	this.products = [];
}

/**
 * @param {Array} configs list of configs to be applied to the product
 * @param {Array} props list of props to be applied to the product
 */
Factory.prototype.startProduction = function (configs = [], props = []) {
	const product = this.factoryType;
	console.log(` - - - Production started for: ${product.name} - - - `);


	for (let i = 0; i < this.quantity; i++) {
		const config = configs.random();
		const prop = props.random();
		this.products.push(new product(config, prop));
	}

	this.stopProduction();
	console.log(` - - - Production stopped for: ${product.name} - - - `);
}

/**
 * @emits summary of production process
 */
Factory.prototype.stopProduction = function () {
	console.log(`
Production finished for ${this.factoryType.name}
Total number of products is: ${this.products.length}
    List of ${this.factoryType.name}'s
    `);
	console.table(this.products);
};

// App functionality

const ballFactory = new Factory(Ball);

ballFactory.startProduction(
	["football", "basketball", "tennis ball"],
	["white", "black", "blue", "orange"]
)

const plushToysFactory = new Factory(PlushToys);

plushToysFactory.startProduction(
	[
		{ size: "small", type: "pokemon" },
		{ size: "medium", type: "cat" },
		{ size: "big", type: "bear" }
	],
	["yellow", "black", "white"]
);