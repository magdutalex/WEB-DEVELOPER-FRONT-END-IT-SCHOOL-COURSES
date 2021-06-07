
// Which is the biggest number // 

const a = parseInt(prompt('Enter the first number: '));
const b = parseInt(prompt('Enter the second number '));
const c = parseInt(prompt('Enter the third number '));
if((a > b) && (c < a))
{
  console.log("The biggest number is:", a)
}
else if( c > b) 
{
  console.log("The biggest number is c")
}
else{
  console.log("The biggest number is b")
}


// What day it is ? //
var numar = Number(prompt("Ziua saptamanii:"));

if(numar < 2)
{
  console.log("Ziua Luni")
}
else if( numar < 3 )
{
  console.log("Ziua Marti")
}
else if ( numar < 4)
{
  console.log("Ziua Miercuri")
}
else if ( numar < 5)
{
  console.log("Ziua Joi")
}
else if ( numar < 6)
{
  console.log("Ziua Vineri")
}
else if ( numar < 7)
{
  console.log("Ziua Sambata")
}  
else if ( numar < 8)
{
  console.log ("Ziua Duminca")
}
else if ( numar > 7)
{
  console.log ("Nu exista ziua")
}

// Inmultire, adunare , impartire //

function inmultire(a,b)
{
  return a * b;
}

var a = 70;
var b = 15;

var rezultat = inmultire(a,b);
console.log("Rezultatul este inmultirii este:"+rezultat);


function adunare(a,b)
{
  return a + b;
}
var a = 20;
var b = 50;

var rezultat = adunare (a,b);
console.log ("Rezultatul adunarii:"+rezultat);


function impartire(c,d)
{
  return c / d;
}

var c = 30;
var d = 12;

var rezultat = impartie (c,d);
console.log ("Rezultatul impartirii:"+rezultat);

// La fiecare element din 2 in 2 incepand cu primul element //

var arrayOfStrings = ["abc", "lcd", "car", "bmw"];

for(var indexOfArrayOfStrings = 0; indexOfArrayOfStrings < arrayOfStrings.length; indexOfArrayOfStrings=indexOfArrayOfStrings+2)
{ 
  console.log(arrayOfStrings[indexOfArrayOfStrings]);
}

// suma tuturor elementrol din arrayOfNumbers si ii dam console.log//

var arrayOfNumbers = [45, 20, 15, 90, -2]

console.log(
  arrayOfNumbers.reduce((a, b) => a + b)
)

var arrayOfNumbers = [-2,1,0,50]
console.log(arrayOfNumbers.reduce((a, b) => a * b))

// De cate ori apare primul element in array //

var arrayOfNumbers = [40,20,1,5,40,40,3]
var result = {};
arrayOfNumbers.forEach(function(x) {
result[x] = (result[x] || 0) + 1;
});
console.log(result);
// idendica cu cea de sus, dar folosim un for//

var arrayOfNumbers = [40,20,1,5,40,40,3]
const result  = {};
arrayOfNumbers.forEach(function(x) { result[x] = (result[x] || 0)+1; });
console.log(result)

// Folosind toate stringurile din arrat sa facem un singur string, apoi sa fac alt string cu elementele invers//

var arrayOfStrings = ["Hello", "World", "Bogdan", "Falk", "Design", "Front-end"];
console.log(arrayOfStrings.join(" "));
console.log(" ");
console.log(["Hello", "World", "Bogdan", "Falk", "Design", "Front-end"].reverse().join(" ")); 

// In functe de ce numar introduci el iti spune daca este par sau impar //

const number = prompt("Enter a number: ");

if(number % 2 ===0)
{
  console.log("Numarul este par")
}
else{
  console.log("Numarul este impar")
}

//adunare cu for each//

var myArray= [10,20,30,50,90];
var suma = 0;

function myForEachFuntion(item, index){
  suma = suma + item;
}


myArray.forEach(myForEachFuntion);

console.log(suma);


// pt a scrie elementele unui array sa fie crescatoare sau descrescatoare vom folosi//

var numere = [5, 9, 2, 15, 11 , 13, 14]

numere.sort(function(a,b)
{
  return a - b /* Crescator */
         b - a /* Descrescator */
})
console.log(numere);

// problema forEach ordonare din 2 in 2 unul sub altul//

var arrayOfStrings = ["abc", "lcd", "car", "bmw"]

 function forEachFunction (item,index){
   if(index % 2 === 0)
   {
     console.log(item);
   }
 }
arrayOfStrings.forEach(forEachFunction); 

// exerciutiu adunare + inmultire folsind ForEach //


var arrayOfNumbers = [45, 20, 15, 90, -2]
var suma = 0

function myForEachFunction(item,index){
 suma = suma * item;
}

arrayOfNumbers.forEach(myForEachFunction);
console.log(suma);

// Problema cerinta Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.//
var nr1 = Number(prompt("Primul numar"));
var nr2 = Number(prompt("Al doilea numar"));

function adunare (){
    return nr1 + nr2
}

var rezultat = nr1 + nr2;
if( rezultat < 100){
    console.log("True")
}
else{
    console.log("False")
}
console.log("Rezultatul adunarii este:" + rezultat);


/* Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10  */

var nr1 = Number(prompt("Introdu un numar"));

function addUp() {
  return (nr1 * (nr1 + 1)) / 2;
}

var rezultat = (nr1 * (nr1 + 1)) / 2;
console.log("Rezultatul este :" + rezultat);


/* Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above. */
var nr1 = Number(prompt("Introdu numarul"))


function matchHouses() {
	if(nr1 === 0) {
		return 0;
	}
    else{
		return (nr1 * 6)-(nr1 - 1);
	}
}

var rezultat = (nr1 * 6)-(nr1 - 1);
console.log("Rezultatul este :" +rezultat);

