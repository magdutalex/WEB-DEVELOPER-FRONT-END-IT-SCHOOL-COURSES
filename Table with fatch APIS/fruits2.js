fetch("https://sharo-me.herokuapp.com/api/getProducts", {
  method: "post",
  headers: {
    Accept: "*/*, text/plain, application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    type: "cars",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    let i = 1;
    console.log(data);
    data.forEach((item) => {
      document.querySelector("#l" + i).innerText = item.name;
      i++;
      document.querySelector("#l" + i).innerText = item.color;
      i++;
      document.querySelector("#l" + i).innerText = item.weight;
      i++;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

fetch("https://sharo-me.herokuapp.com/api/getProducts", {
  method: "post",
  headers: {
    Accept: "*/*, text/plain, application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    type: "fruits",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    let i = 1;
    console.log(data);
    data.forEach((item) => {
      document.querySelector("#z" + i).innerText = item.name;
      i++;
      document.querySelector("#z" + i).innerText = item.color;
      i++;
      document.querySelector("#z" + i).innerText = item.weight;
      i++;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
