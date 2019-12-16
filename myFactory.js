//                    Application Definition


/**
 * @returns random element from any array
 */
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };

// Aircrafts
function Aircraft(clas, builder, speed) {
  this.class   = clas;
  this.builder = builder; 
  this.speed   = speed; 
  //this.engine  = engine; 
  //this.crew    = crew; 
}
Aircraft.prototype.takeOff = function() {
    console.log('Are we penguins or we can fly?!');
}
Aircraft.prototype.land = function() {
    console.log('We are home guys!');
}
// Navy
function Ship(clas, builder, speed) {
  this.class    = clas;
  this.builder  = builder;
  this.speed    = speed;
  //this.status   = status;
};
Ship.prototype.takeOff = function() {
    console.log('The captain goes down with the ship!');
}
Ship.prototype.cheeringTheTeam = function() {
    console.log('The Navy is a master plan designed by geniuses for execution by idiots. If you are not an idiot, but find yourself in the Navy, you can only operate well by pretending to be one.');
}

// Tanks
function Tank(clas, builder, speed) {
this.class   = clas;
this.builder = builder;
this.speed   = speed;
//this.gun.rateOfFire = gun.rateOfFire; 
//this.gun.reloadTime = gun.reloadTime;
//this.gun.accuracy = gun.accuracy;
}
Tank.prototype.startTheMission = function() {
    console.log('Let\'s hit the road!');
}
// War Factory
function WarFactory(type, units = 5) {
    this.factoryType  = type;
    this.maxUnits = units; // don't forget about budget 
    this.units = [];
}

WarFactory.prototype.startBuildingProcess = function(classes = [], builders = [], speeds = []) {
 const unit = this.factoryType;

 for (let i = 0; i < this.maxUnits; i++) {
    const clas = classes.random();
    const builder = builders.random();
    const speed = speeds.random();
    this.units.push(new unit(clas, builder, speed));
  }

  this.finishBuildProcess();
}
WarFactory.prototype.finishBuildProcess = function() {
    console.log(`
    Production finished for ${this.factoryType.name}
    Total number of products is ${this.units.length} 
    List of ${this.factoryType.name}'s
    `);
    console.table(this.units);
}
WarFactory.prototype.displayCurrentUnits = function() {
  console.log(`  List of ${this.factoryType.name}'s `);
  console.table(this.units); 
}

//                          Application Functionality
const aircraftFactory = new WarFactory(Aircraft, 5);
aircraftFactory.startBuildingProcess(
 ["Bomber", "Attack", "Special Mission"],   
 ["Northrop Grumman", "Lockheed-Martin", "Raytheon"],
 ["High subsonic", "Mach 2", "310 knots"]
 //["Four General Electric F118-GE-100 engines", "Two Pratt & Whitney F119-PW-100 turbofan engines",  "Rolls Royce-North American F137-RR-100 turbofan engine"]
 //[2, 1, "remote"]
);

let shipFactory = new WarFactory(Ship, 6);
shipFactory.startBuildingProcess(
   ["Aircraft carrier", "battle cruiser", "Destroyer", "Nuclear powered aircraft carrier"],
   ["UK", "Russia", "China", "France"],
   ["26 knots", "32 knots", "30 knots", "27 knots"]
   //["In service", "Laid up"]
);

const tankFactory = new WarFactory(Tank, 7);
tankFactory.startBuildingProcess(
  ["Light", "Medium", "Heavy", "Tank destroyer"],
  ["Detroit Arsenal", "Pattons", "ARO", "Hanomag"],
  ["66km/h", "60km/h", "35km/s", "45km/s"]
  /**[ 
    {rateOfFire: "19.35 r/m", reloadTime: "3.10 s", accruracy: "0.39 m"},
    {rateOfFire: "26.09 r/m", reloadTime: "2.30 s", accruracy: "0.42 m"},
    {rateOfFire: "13.95 r/m", reloadTime: "4.30 s", accruracy: "0.46 m"},
    {rateOfFire: "7.66 r/m", reloadTime: "7.80 s", accruracy: "0.33 m"}]**/

);

// Build submarines
shipFactory = new WarFactory(Ship); 
shipFactory.startBuildingProcess = function(classes = [], builders = [], displacements = []) {
  const unit = this.factoryType;

  for (let i = 0; i < this.maxUnits; i++) {
     const clas = classes.random();
     const builder = builders.random();
     const displacement = displacements.random();
     this.units.push(new unit(clas, builder, displacement));
   }
 
}
shipFactory.startBuildingProcess(
    ["Delta-class", "Vanguard-class", "Ohio-class"], 
    ["Russia", "United Kingdom", "United States"], 
    ["18,730 tonnes", "15,680 tonnes", "18,450 tonnes"]);
  shipFactory.displayCurrentUnits();