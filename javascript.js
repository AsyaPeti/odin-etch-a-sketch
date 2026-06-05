// A function for creating a grid for drawing
function gridConstructor(n) {
  // A loop that adds squares to the grid
  for (i = 1; i <= n * n; i++) {
    let square = document.createElement("div");
    square.style.width = `${960 / n}px`;
    square.style.height = `${960 / n}px`;
    square.classList.toggle("square");
    grid.appendChild(square);
}

  // An event listener that enables drawing on the grid
  grid.addEventListener("mouseover", (event) => {
    let color = event.target;
    color.classList.add("color");
  });
}

// Variables for html elements
const grid = document.querySelector("#grid");
const btn = document.querySelector("button");

// An event listener that renews the grid with a custom number of squares
btn.addEventListener("click", () => {
  let n = prompt("Enter a number of squares per side (no more than 100).", "");
  
  // A conditional to check the entered number
  if ((Number.isNaN(+n)) || (n === null) ||
      (n === "") || (n > 100) || (n < 1)) {
    alert("Error!")
  } else if (n <= 100) {
    grid.replaceChildren();
    gridConstructor(n);
  }
});

// The initial creation of a grid
gridConstructor(16);
