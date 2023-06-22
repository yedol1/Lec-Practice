const toDoForm = document.getElementById("todo__form");
const toDoInput = document.querySelector("#todo__form input");
const toDoList = document.getElementById("todo__list");
const showNotice = document.querySelector(".list__wrapper div");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  if (toDos.length === 0) {
    showNotice.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.add(HIDDEN_CLASSNAME);
  }
}

function paintToDo(newTodo) {
  showNotice.classList.add(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = `✅${newTodo.text}`;
  const button = document.createElement("button");
  button.innerText = "🗑️";
  button.title = "삭제하기";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
