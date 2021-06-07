class masina{
    constructor (marca, anFabricatie, kmParcursi, transmisie) {
     this.marc = marca;
     this.anFabricatie = anFabricatie;
     this.kmParcursi = kmParcursi;
     this.transmisie = transmisie;
    }
primescInformatiiMasina(){
    console.log(this.marca, this.anFabricatie, this.transimie);
}
    modifyanFabricatie(year){
        this.anFabricatie = year;   // Cu aceasta functie am modificat anul de fabricatie din 2014 cat am pus in let masina 1 cu 1997 //
    }
} 

let masina1 = new masina("Dacia",2014,184.600,"automata");
console.log(masina1.anFabricatie);
masina1.modifyanFabricatie(1997);
console.log(masina1.anFabricatie);
console.log(masina1);

// In acest exemplu am creeat o clasa (adica un tamplate), dupa am initalizat un obiect cu ajutorului tamplatului facut la calasa //

// Mai jos voi creea un obiect fara sa ii mai fac un tamplate de classa // 

let Iphone = {
    culoare: "galben",
    memorie: 128,
    greutate: 100,
}
console.log(Iphone.culoare,);
console.log(Iphone.memorie);

if(Iphone.culoare === true){
    console.log("Canpea are culoarea potrivita");    // pot face orice cu propritatile din interior
} 
else{
    console.log("Canapea nu este potrivita");   
}
console.log()