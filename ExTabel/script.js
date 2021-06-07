fetch("https://jsonplaceholder.typicode.com/users", {
   method: "get",
   headers: {
       Accept: "*/*, text/plain, application/json",
       "Content-Type": "application/json",
   },
})
.then((response) => response.json())
.then((data) => {
     /* let i = 1; */
     console.log(data);
});
 /* data.forEach((item) => {
     document.querySelector("#r" + i).innerText = item.this
     i++;
     document.querySelector("#r" + i).innerText = item.name;
     i++;
     document.querySelector("#r" + i).innerText = item.city;
     i++; 
    });
 
 })
 .catch((error) => {
     console.log("Error", error);
 }); */

