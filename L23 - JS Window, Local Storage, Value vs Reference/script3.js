var numA = 5;
var numB = numA;

console.log(numA);
console.log(numB);

numA = 10;

console.log(numA);
console.log(numB);

 objA = {
   name: "Mike",
};

objB = objA;

console.log(objA.name);
console.log(objB.name);


let person = {
    firstName: "John",
    lastName: "Doe",
    adress: {
        street: "North 1st",
        city: "San Jose"
    },
};

let copiedPerson = Object.assign({}, person);   //shallow copy --> copiem doar primul nivel
let copiedPerson2 = {...person}; // shallow copy with Spreader --> (...)
let copiedPerson3 = JSON.parse(JSON.stringify(person)); // Deep copy with JSON
copiedPerson.adress.city = "San Fiero";

copiedPerson.firstName = 'Jane';
copiedPerson2.adress.city = "Mount View"

copiedPerson3.firstName = "Paco";
copiedPerson3.adress.city = "San Andreas"

console.log(person);
console.log(copiedPerson);
console.log(copiedPerson2);
console.log(copiedPerson3);
