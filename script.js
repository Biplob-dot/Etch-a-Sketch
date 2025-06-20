const canvasContainer = document.querySelector("#canvasContainer");
const adjustGridBtn = document.querySelector("#adjustGridBtn");
const clearGridBtn = document.querySelector("#clearGridBtn");
const redBtn = document.querySelector("#redBtn");
const blueBtn = document.querySelector("#blueBtn");
const greenBtn = document.querySelector("#greenBtn");
const yellowBtn = document.querySelector("#yellowBtn");
let gridSize = 16; //default;
let divs = [];
let drawColor = "white"; //default;

const makeGrid = () => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.style.width = `${640 / gridSize}px`;
    div.style.height = `${640 / gridSize}px`;
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = drawColor;
    });
    divs.push(div);
    canvasContainer.appendChild(div);
  }
};

adjustGridBtn.addEventListener("click", () => {
  resetGrid();
  gridSize = parseInt(prompt("Enter the size of the Grid: "));
  if (gridSize > 100) {
    alert("Enter less than 100!!");
  }
  if (gridSize <= 100) {
    makeGrid();
  }
});

const resetGrid = () => {
  divs.forEach((div) => canvasContainer.removeChild(div));
  divs = [];
};

const clearGrid = () => {
  resetGrid();
  makeGrid();
};

clearGridBtn.addEventListener("click", clearGrid);

redBtn.addEventListener("click", () => {
  drawColor = 'red';
});
blueBtn.addEventListener("click", () => {
  drawColor = 'blue';
});
greenBtn.addEventListener("click", () => {
  drawColor = 'green';
});
yellowBtn.addEventListener("click", () => {
  drawColor = 'yellow';
});