class Utilizator{
  constructor(nume, premume, varsta, hobiuri){
      this.nume    = nume;
      this.premume = premume;
      this.varsta  = varsta;
      this.hobiuri = hobiuri;
  }
}
// Variable definition
let numarUtilizatori = 5;
let arrayUtilizatori = [];

for(let i = 0; i< numarUtilizatori; i++){

let numeIns    = prompt("Nume untilizator "+i);
let premumeIns = prompt("Preume untilizator "+i);
let varstaIns  = Number(prompt("Varsta untilizator "+i));
let hobbyIns   = prompt("Hobby untilizator " +i);

let utilizator = new Utilizator( numeIns, premumeIns, varstaIns, hobbyIns);
arrayUtilizatori.push(utilizator);

}

console.log("Punctul 1");
for(let j = 0; j< arrayUtilizatori.length; j++){


//Punctul 1: Log toti utilizatorii cu premumele Miahi
  if (arrayUtilizatori[j].nume === "Mihai"){
  console.log(arrayUtilizatori[j]);
}}
console.log("Punctul 2");
for(let j = 0; j< arrayUtilizatori.length; j++){

//Puctul 2: Varsta mai mare 18
if( arrayUtilizatori[j].varsta > 18){
console.log(arrayUtilizatori[j]);
}}

console.log("Punctul 3");
for(let j = 0; j< arrayUtilizatori.length; j++){

  // Punctul 3: Hobby == "Frontend Developer"
  if(arrayUtilizatori[j].hobiuri === "Frontend Developer"){
  console.log(arrayUtilizatori[j]);
}}

console.log("Punctul 4");
  for(let j = 0; j< arrayUtilizatori.length; j++){
  // Punctul 4: Prenume utilizator
  console.log(arrayUtilizatori[j].premume);
}





