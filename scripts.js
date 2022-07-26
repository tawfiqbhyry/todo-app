let textInputEL = document.getElementById("todo-enter");
let addButtonEL = document.querySelector(".fa-plus");
let todosContainer = document.querySelector(".todos");

function getTODOs() {
  let todos = localStorage.getItem("todos");
  if (todos) {
    todosContainer.innerHTML = "";
    listTOdos = JSON.parse(todos);
    listTOdos.forEach((todo) => {
      let todoEL = document.createElement("div");
      todoEL.classList.add("todo");
      let pTag = document.createElement("p");
      pTag.innerText = todo;
      let removeEL = document.createElement("i");
      removeEL.classList.add("fas", "fa-trash-alt");

      removeEL.addEventListener("click", () => {
        listTOdos.splice(listTOdos.indexOf(todo), 1);
        localStorage.setItem("todos", JSON.stringify(listTOdos));
        todoEL.remove();
      });
      todoEL.appendChild(pTag);
      todoEL.appendChild(removeEL);
      todosContainer.appendChild(todoEL);
    });
  }
}

let timing = setInterval(() => {
  getTODOs();
}, 1000);

function addTODO() {
  let todo = textInputEL.value;
  if (todo && todo.length > 0) {
    let todos = localStorage.getItem("todos");
    let listTOdos = [];
    if (todos) {
      listTOdos = JSON.parse(todos);
    } else {
      listTOdos = [];
    }
    listTOdos.push(todo);
    localStorage.setItem("todos", JSON.stringify(listTOdos));
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTODO();
  }
});
addButtonEL.addEventListener("click", addTODO);
