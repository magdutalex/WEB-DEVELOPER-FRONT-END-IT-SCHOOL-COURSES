/*  setTimeout(function () {
  alert("Hello");
}, 3000);

var i = 0;
setInterval(function(){
i++;
document.querySelector("p").innerText = "Au trecut" + i + "secunde"
console.log("A trecut o secunda");
}, 1000)

const isLoaded = false;

const promiseStatus = new Promise ((resolve, reject) = {

  if(isLoaded === true){
    resolve("Data is loaded" );
  }
  else{
    reject("Something went wrong")
  }
})*/


fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));