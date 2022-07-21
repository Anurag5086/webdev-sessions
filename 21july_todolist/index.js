const form = document.getElementById("form");
const input = document.getElementById("input");
const todoul = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todoString"));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

const addTodo = () => {
  let todotext = input.value;

  if (todotext) {
    const todoElement = document.createElement("li");

    todoElement.innerText = todotext;
    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
      updateLS();
    });

    // todoElement.addEventListener("contextmenu", () => {
    //   todoElement.remove();

    // });
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});
