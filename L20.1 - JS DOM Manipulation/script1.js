document.getElementsByTagName("H1")[0].innerText = "Hello World";

document.getElementsByClassName("content")[0].innerText = "Bye";

document.getElementById("id1").innerText="Not";

document.querySelector("H1").innerText = "Another Text";

document.querySelector(".content").innerText = "Hello Again";

document.querySelector("#id1").innerText = "It s ok again";

let print = function(){
    console.log("I clicked H1");
}

var i = 0;

let enterFunction = function(){
    document.querySelector("#id1").innerText="Hello"
    document.querySelector(".myDiv").style.backgroundColor = "blue";
    console.log(document.querySelector)
    
}

let leaveFunction = function(){
    document.querySelector("#id1").innerText="By"
    document.querySelector(".myDiv").style.backgroundColor = "black";
}

let myInputFunction = function(){
    console.log("Euuuuu")
}

