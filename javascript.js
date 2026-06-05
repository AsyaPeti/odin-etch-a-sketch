// A variable for a grid element
const grid = document.querySelector("#grid")

// A loop that adds squares to the grid
for (i = 1; i <= 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.toggle("square");
  grid.appendChild(square);
}

// An event listener that enables drawing on the grid
grid.addEventListener("mouseover", (event) => {
  let color = event.target;
  color.classList.add("color");
});
