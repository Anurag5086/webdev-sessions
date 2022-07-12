const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const container = document.getElementById("container");

const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseout", () => {
    removeColor(square);
  });

  container.appendChild(square);
}

const randomColor = () => {
  return colors[Math.floor(Math.random() * 5)];
};

const setColor = (square) => {
  const color = randomColor();

  square.style.background = color;
};

const removeColor = (square) => {
  square.style.background = "#1d1d1d";
};
