Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };
  
  function KidsToys(toy, color) {
    this.toy = toy;
    this.color = color;
  }
  
  function VideoGames(config) {
    this.title = config.title;
    this.platform = config.platform;
    this.price = config.price;
  }
  
  function Factory(type) {
    this.factoryType = type;
    this.ammount = 10;
    this.products = [];
  }
  
  Factory.prototype.startBuildProcess = function(configs = [], props = []) {
    const product = this.factoryType;
  
    for (let i = 0; i < this.ammount; i++) {
      const config = configs.random();
      const prop = props.random();
      this.products.push(new product(config, prop));
    }
  
    this.finishBuildProcess();
  };
  
  Factory.prototype.finishBuildProcess = function() {
    console.log(`
  Production finished for ${this.factoryType.name}
  Total number of products is: ${this.products.length}
      List of ${this.factoryType.name}
      `);
    console.table(this.products);
  };
  
  const ToysFactory = new Factory(KidsToys);
  
  ToysFactory.startBuildProcess(
    ["cars", "trucks", "dolls", "bear", "ninja", "plane"],
    ["red", "black", "blue", "white", "green",]
  );
  
  const VideoGamesDev = new Factory(VideoGames);
  
  VideoGamesDev.startBuildProcess(
    [
      { title: "God of War", platform: "PS4", price: "60$" },
      { title: "Word of Warcraft", platform: "PC", price:"30$" },
      { title: "HALO", platform: "Xbox One", price:"59.99$" },
      { title: "CyberPunk", platform: "ALL Platforms", price:"60$" },
      { title: "The Witcher 3", platform: "All Platforms", price:"39.99$"},
      { title: "Starcraft II", platform: "PC", price:"15$" },
      { title: "PUBG", platform: "ALL Platforms", price:"29.99$" },
      { title: "Call of Duty: Modern Warfare", platform: "ALL Platforms", price:"60$" },
      { title: "ARMA 3", platform: "PC", price:"29.99$" },
      { title: "Battlefield 1", platform: "ALL Platforms", price:"39.99$" },
    ],
    
    
  );
  
  