const toDoForm = document.querySelector("#toDo-form");
const toDoList = document.querySelector(".toDoList ul");
let toDoArr = [];
const toDo = toDoForm.querySelector("#toDo");

const TODO_KEY = "toDo";

function saveToDo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDoArr));
}

function displayToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const button = document.createElement("button");
  toDoList.appendChild(li);
  li.append(newToDoObj.text);
  li.appendChild(button);
  button.innerText = "X";
  button.addEventListener("click", toDoRemove);
}

function toDoAdd(e) {
  e.preventDefault();
  const newToDo = toDo.value;
  const newToDoObj = {
    id: Date.now(),
    text: newToDo
  };
  toDoArr.push(newToDoObj);
  toDo.value = "";
  displayToDo(newToDoObj);
  saveToDo(newToDoObj);
}

const savedToDo = localStorage.getItem(TODO_KEY);

if (savedToDo !== null) {
  const parseToDo = JSON.parse(savedToDo);
  toDoArr = parseToDo;
  parseToDo.forEach(displayToDo);
}

function toDoRemove(e) {
  const remove_li = e.target.parentElement;
  remove_li.remove();
  toDoArr = toDoArr.filter((toDo) => toDo.id !== parseInt(remove_li.id));
  saveToDo();
}

toDoForm.addEventListener("submit", toDoAdd);
