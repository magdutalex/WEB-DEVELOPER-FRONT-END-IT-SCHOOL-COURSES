console.log("Luni")

let myDate = new Date();
 
 console.log(myDate);


 let myYear = myDate.getFullYear();

 console.log(myYear);

 myDate.setMonth(5);

 console.log(myDate);

 let timeStamp = myDate.getTime();

 console.log(timeStamp);

function setTimeInParagraph() {
    let myCurrentDate = new Date ();
    let myCurrentHour = myCurrentDate.getHours();
    let myCurrentMinute = 
     myCurrentDate.getMinutes() < 10
    ? "0" + myCurrentDate.getMinutes()
    : myCurrentDate.getMinutes();
    let myCurrentSecond =
    myCurrentDate.getSeconds() < 10
    ? "0" + myCurrentDate.getseconds()
    : myCurrentDate.getSeconds()

    document.querySelector("#p-object").innerText = 
    myCurrentHour + ":" + myCurrentMinute + ":" + myCurrentSecond;
}

setTimeInParagraph();
setInterval(() => {
    setTimeInParagraph();
}, 1000);