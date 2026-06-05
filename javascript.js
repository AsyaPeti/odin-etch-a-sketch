const grid = document.querySelector("#grid")

for (i = 1; i <= 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.toggle("square");
  grid.appendChild(square);
}

grid.addEventListener("mouseover", (event) => {
  let color = event.target;
  color.classList.add("color");
});
