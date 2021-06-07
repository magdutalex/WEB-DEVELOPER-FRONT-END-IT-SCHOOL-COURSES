class Telefon{
    constructor(marca,model,anFabricatie)
    {
        this.marca = marca;
        this.model = model;
        this.anFabricati= anFabricatie;
    }

  printDetails(){
      console.log(this.marca,this.model);
  }
}

let telefon1 = new Telefon("Samsung, S20+, 2021");
console.log(typeof(telefon1)); 
telefon1.printDetails();
console.log(telefon1);