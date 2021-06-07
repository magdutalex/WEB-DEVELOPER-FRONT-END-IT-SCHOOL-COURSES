let addBtn = document.querySelector("#addFruitButton");
​
addBtn.addEventListener("click",() => {
    let newLi = document.createElement('li');
​
    newLi.innerText = document.querySelector("#fruitInput").value;
    newLi.classList.add("list-group-item");
    newLi.classList.add("fs-2");
​
    newLi.addEventListener('mouseenter', () =>{
      newLi.classList.add("bg-warning");
    })
​
    newLi.addEventListener('mouseleave', () =>{
      newLi.classList.remove("bg-warning");
    })
  
    let fruitList = document.querySelector("#fruitList");
    fruitList.appendChild(newLi);
});