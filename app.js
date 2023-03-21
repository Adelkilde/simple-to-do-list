"use strict";

window.addEventListener("load", initApp);
    
const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() {
    document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

// function addToDo() {
//     const listItem = document.createElement("li");
//     const listText = document.createElement("span")
//     const listBtn = document.createElement("button")

//     listText.textContent = newToDo.value;
//     listBtn.textContent = "Delete";

//     listItem.appendChild(listText);
//     listItem.appendChild(listBtn);

//     list.appendChild(listItem);
    
//     listBtn.addEventListener("click", removeToDo);

//     newToDo.value = "";
//     newToDo.focus();
// }

// function removeToDo() {
    // this.parentNode.remove()
// }



/* ------------- Del 2 ---------------- */
function addToDo() {
    const liElement = /*html*/`
    <li>
    <span>${newToDo.value}</span>
    <button>Delete</button>
    </li>
    `;

    list.insertAdjacentHTML("beforeend", liElement);

    list.querySelector("li:last-child button").addEventListener("click", removeToDo);

    newToDo.value = "";
    newToDo.focus();
}

function removeToDo() {
    this.parentNode.remove()
}