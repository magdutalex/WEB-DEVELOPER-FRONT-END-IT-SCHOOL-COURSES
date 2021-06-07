
console.log(window);

var myString = "Hello";
var myNumber = 1234;
var myObject = {
    id:10,
    name: "Mike",
};

window.localStorage.setItem("mySavedString",myString);
window.localStorage.setItem("mySavedNumber", myNumber);
window.localStorage.setItem("mySavedObject", JSON.stringify(myObject));

function goToNextPage()  {
    window.location.href="http://www.google.com"
} 


var w = window.innerWidth;  // ne arata viewportul//
var h = window.innerHeight  // height la viewport//

function logPageSize(){
    w = window.innerWidth
    h = window.innerHeight
    console.log(w,h);
}