//Am folost pentru a adauga o noua lista cu struguri//
let addBtn = document.querySelector("#addFruitButton");

addBtn.addEventListener("click", () => {
    let newLi = document.createElement('li');
    newLi.innerText = document.querySelector("#fruitImput").value; 
    newLi.classList.add("list-group-item");
    newLi.classList.add("fs-3");
  
  

    let fruitList = document.querySelector("#fruitList");
    fruitList.appendChild(newLi);

});                    