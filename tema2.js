Array.prototype.returnRandom = function() {
    return this[Math.floor(Math.random() * this.length)];
  };

 
  
  function Masini(marca, model, culoare,sunet) {
    this.marca = marca;
    this.model = model;
    this.culoare =culoare;
    this.sunet = function startEngine (){
         console.log('vrum vrum');
    }  ;
    
    
  } 

 
  
  function Tablete(marca,model) {
    this.marca =  marca;
    this.model= model ;
    this.mesaj = function mesajLaPornire (){
        console.log(`'Hello from ' ${marca}`);
    }
    
  }
  
  function fabrica(tip, cantitate){
    this.tipProdus = tip;
    this.cantitateProdus=cantitate;
    this.listaProduse=[];

};
  
  fabrica.prototype.creareProdus = function(marci=[], modele=[], culori=[]) {
    const produs = this.tipProdus;
  
    for (let i = 0; i < this.cantitateProdus; i++) {
      const marca = marci.returnRandom();
      const model = modele.returnRandom();
      const culoare = culori.returnRandom();
      const produsNou = new produs(marca, model, culoare);
      this.listaProduse.push(produsNou);
      
    }
    
    this.startProductie();
    
  };

  fabrica.prototype.startProductie = function () {
    
    console.table(this.listaProduse);

  } 
  
  const fabricaMasini = new fabrica(Masini,4);

  fabricaMasini.creareProdus(

    ['BMW','SEAT','AUDI','OPEL'],
    ['BREAK','HATCBACK','CABRIO','BERLINA'],
    ['ROSU','NEGRU','ALBASTRU','ALB']

    
  );

  const fabricaTablete = new fabrica(Tablete,4);

  fabricaTablete.creareProdus(

    ['SAMSUNG','HUAWEI','APPLE','ASUS'],
    ['9 inchi','7 inchi','10 inchi','8 inchi']
  

  );