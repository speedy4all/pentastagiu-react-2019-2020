(function initConsoleLogDiv() {
  'use strict';


  if (console.log.toDiv) {
    return;
  }

  function toString(x) {
    return typeof x === 'string' ? x : JSON.stringify(x);
  }

  var log = console.log.bind(console);
  var error = console.error.bind(console);
  var warn = console.warn.bind(console);
  var table = console.table ? console.table.bind(console) : null;
  var consoleId = 'console-log-div';
  
// Create the Console Div container.
  function createOuterElement(id) {
    var outer = document.getElementById(id);
    if (!outer) {
      outer = document.createElement('fieldset');
      outer.id = id;
      document.body.appendChild(outer);
    }
    var style = outer.style;
    return outer;
  }
// Create the logging div and adornments.
  var logTo = (function createLogDiv() {

    var outer = createOuterElement(consoleId);
    var caption = document.createTextNode('Console Output');
    var legend = document.createElement('div');
    legend.id = "legend";
    legend.appendChild(caption);
    outer.appendChild(legend);

    var div = document.createElement('div');
    div.id = 'console-log-text';
    
    outer.appendChild(div);
    return div;
  }());

  function printToDiv() {
    var msg = Array.prototype.slice.call(arguments, 0)
      .map(toString)
      .join(' ');
    var item = document.createElement('div');
    item.classList.add('log-row');
    item.textContent = msg;
    logTo.appendChild(item);
  }

  function logWithCopy() {
    var ele = document.getElementById('console-log-div');
    setDarkLight(ele);
    log.apply(null, arguments);
    printToDiv.apply(null, arguments);
  }

  console.log = logWithCopy;
  console.log.toDiv = true;

  console.error = function errorWithCopy() {
    error.apply(null, arguments);
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift('ERROR:');
    printToDiv.apply(null, args);
  };

  console.warn = function logWarning() {
    warn.apply(null, arguments);
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift('WARNING:');
    printToDiv.apply(null, args);
  };

  function printTable(objArr, keys) {

    var numCols = keys.length;
    var len = objArr.length;
    var $table = document.createElement('table');
    $table.style.width = '100%';
    $table.setAttribute('border', '1');
    var $head = document.createElement('thead');
    var $tdata = document.createElement('td');
    $tdata.innerHTML = 'Index';
    $head.appendChild($tdata);

    for (var k = 0; k < numCols; k++) {
      $tdata = document.createElement('td');
      $tdata.innerHTML = keys[k];
      $head.appendChild($tdata);
    }
    $table.appendChild($head);

    for (var i = 0; i < len; i++) {
      var $line = document.createElement('tr');
      $tdata = document.createElement('td');
      $tdata.innerHTML = i;
      $line.appendChild($tdata);

      for (var j = 0; j < numCols; j++) {
        $tdata = document.createElement('td');
        $tdata.innerHTML = objArr[i][keys[j]];
        $line.appendChild($tdata);
      }
      $table.appendChild($line);
    }
    var div = document.getElementById('console-log-text');
    div.appendChild($table);
    
  }

  console.table = function logTable() {
    if (typeof table === 'function') {
      table.apply(null, arguments);
    }

    var objArr = arguments[0];
    var keys;

    if (typeof objArr[0] !== 'undefined') {
      keys = Object.keys(objArr[0]);
    }
    printTable(objArr, keys);
  };

  window.addEventListener('error', function (err) {
    printToDiv( 'EXCEPTION:', err.message + '\n  ' + err.filename, err.lineno + ':' + err.colno);
  });
  
  //   Detect dark or light colors.

  function setDarkLight(element) {
    var color = window.getComputedStyle(element, null).backgroundColor;
    if(isDark(color)) {
      element.style.color = "rgba(255,255,255,1)";
    } else {
      element.style.color = "rgba(0,0,0,.61)";
    }
  }
  
  function isDark( color ) {
    var match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(color);
    return parseFloat(match[1])
         + parseFloat(match[2])
         + parseFloat(match[3])
           < 3 * 256 / 2; // r+g+b should be less than half of max (3 * 256)
  }
}());

//PROTOTYPE Random Return  
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
//PROTOTYPE Random Return end

//Car function 
function Car(engine, tire, color, price, canStart){
  this.engine = engine;
  this.tire = tire;
  this.color = color;
  this.price = price;
  this.canStart = canStart;
}
//Car function end

//Toys function
function Toys(fabric, color, size, price, canTalk){
  this.fabric = fabric;
  this.color = color;
  this.size = size;
  this.price = price;
  this.canTalk = canTalk;
}
//Toys function end

//Christmas Decoration function
function ChristmasDeco(size, color, lights, price){
  this.size = size;
  this.color = color;
  this.lights = lights;
  this.price = price;
}
//Christmas Decoration function end

//Main Factory function
function Factory(type){
  this.factoryType = type;
  this.nrObjects = 5;
  this.products = [];
}
//Main Factory function end

// //start engine function
// function checkEngine(canStarts = false){
//   const canStart = canStarts.random();
//   //this.canStart.push(new canStart);

//}

//PROTOTYPE Start Build Process
Factory.prototype.startBuildProcess = function(engines = [], tires = [], colors = [], sizes = [], lights=[], prices = [], canStarts = [], canTalks = []) {
  const product = this.factoryType;

  for (let i = 0; i < this.nrObjects; i++) {
    const engine = engines.random();
    const tire = tires.random();
    const color = colors.random();
    const size = sizes.random();
    const light = lights.random();
    const price = prices.random();
    const canStart = canStarts.random();
    const canTalk = canTalks.random();
    this.products.push(new product(engine, tire, color, size, light, price, canStart, canTalk));
  }

  this.finishBuildProcess();
};
//PROTOTYPE Start Build Process end

//PROTOTYPE FINISH / LISTING Process
Factory.prototype.finishBuildProcess = function() {
  console.log(`
 Production finished for ${this.factoryType.name} Factory
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Total number of products is: ${this.products.length} 
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-
             List of ${this.factoryType.name}'s
    `);
console.table(this.products);
};
//PROTOTYPE FINISH / LISTING Process end

// Application functionality

const carFactory = new Factory(Car);

carFactory.startBuildProcess(
  ["Big Engine", "Medium Engine", "Electric Engine"],
  ["Small Tires", "Big Tires", "Levitating Tires"],
  ["RedCannion", "FlashyBlue", "MetallicGrey"],
  ["150$" , "50$" , "10$"],
  ["Yes" , "No" , "IDK"]
);
const toysFactory = new Factory(Toys);

toysFactory.startBuildProcess(
  ["Cotton", "Silk", "Metal"],
  ["red", "green", "blue", "white"],
  ["Size1", "Size2", "Size3"],
  ["30$" , "20$" , "9$"],
  ["Yes", "No", "No need"]
 
);

const decoFactory = new Factory(ChristmasDeco);

decoFactory.startBuildProcess(
  ["Big", "Medium", "Small"],
  ["white", "black", "red", "yellow"],
  ["Flashy Red", "Flashy Blue", "Flashy White"],
  ["10$" , "5$" , "1$"]
);
