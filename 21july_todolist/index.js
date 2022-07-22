const form = document.getElementById("form");
const input = document.getElementById("input");
const todoul = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todoString"));

const updateLS = () => {
  const allTodos = document.querySelectorAll("li");

  const todosArr = [];

  allTodos.forEach((todoEl) => {
    todosArr.push({
      text: todoEl.innerText,
      isCompleted: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todoString", JSON.stringify(todosArr));
};

const addTodo = (todo) => {
  let todotext = input.value;

  if (todo) {
    todotext = todo.text;
  }

  if (todotext) {
    const todoElement = document.createElement("li");

    if (todo && todo.isCompleted) {
      todoElement.classList.add("completed");
    }

    todoElement.innerText = todotext;
    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
      updateLS();
    });

    todoElement.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoElement.remove();
      updateLS();
    });

    todoul.appendChild(todoElement);
    input.value = "";

    updateLS();
  }
};

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});
