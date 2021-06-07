var a = Number(prompt("Introdu numarul 1"));
var b = Number(prompt("Introdu numarul 2"));
var c = Number(prompt("Introdu numarul 3"));

function adunare(a,b,c){
    return a + b + c
}
var rezultat = adunare (a,b,c);
console.log("Alege 1 pentru adunarea numerelor:"+rezultat);

if(a > b && c > a){
    console.log("The biggest number is:"+ a)
}
else if( c > b) 
{
  console.log("The biggest number is:" + c)
}
else{
  console.log("The biggest number is:" + b)

}

function adunare2(a,c){
    return a + c
}
var rezultat2 = adunare2(a,c);
console.log("Alege 3 pentru a vedea valoarea adunarii nr1 si nr 3:" + rezultat2);

alegere = Number(prompt("Alegere"));

console.log(alegere.a);