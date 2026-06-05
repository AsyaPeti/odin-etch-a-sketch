// A function for creating a grid for drawing
function gridConstructor(n) {
  // A loop that adds squares to the grid
  for (i = 1; i <= n * n; i++) {
    let square = document.createElement("div");
    square.style.width = `${100 / n}%`;
    square.style.height = `${100 / n}%`;
    square.classList.toggle("square");
    grid.appendChild(square);
}

  // An event listener that enables drawing on the grid
  grid.addEventListener("mouseover", (event) => {
    // A conditional that filters only child elements
    if (event.target.matches(".square")) {
      let color = event.target;
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let opacity;

      // Adjust the opacity based on whether or not there is a background
      if (color.style.backgroundColor) {
        opacity = +color.style.backgroundColor.slice(-4, -1) + 0.1;
      } else {
        opacity = 0.1;
      }
        
      color.style.backgroundColor = `rgb(${red} ${green} ${blue} / ${opacity})`;
    }
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
  } else {
    grid.replaceChildren();
    gridConstructor(n);
  }
});

// The initial creation of a grid
gridConstructor(16);
