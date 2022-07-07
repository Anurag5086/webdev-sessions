const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  if (input.classList.length === 2) {
    input.classList.remove("active");
  } else {
    input.classList.add("active");
    input.focus();
  }
});
