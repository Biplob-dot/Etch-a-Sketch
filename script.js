const canvasContainer = document.querySelector("#canvasContainer");
const adjustGridBtn = document.querySelector("#adjustGridBtn");
const clearGridBtn = document.querySelector("#clearGridBtn");
const redBtn = document.querySelector("#redBtn");
const blueBtn = document.querySelector("#blueBtn");
const greenBtn = document.querySelector("#greenBtn");
const yellowBtn = document.querySelector("#yellowBtn");
let gridSize = 16; //default;
let divs = [];
let rgb_red = 255;
let rgb_blue = 255;
let rgb_green = 255;
let drawColor = "rgb(255,255,255)"; //default;

const makeGrid = () => {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.style.width = `${640 / gridSize}px`;
        div.style.height = `${640 / gridSize}px`;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = `rgb(${rgb_red},${rgb_green},${rgb_blue})`;
            // const index = divs.indexOf(div);
            // if (index > 0) {
            //     const previousDiv = divs[index - 1];
            //     previousDiv.style.backgroundColor = "lightgray"; // or any color/action
            // }
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
    rgb_red = 255;
    rgb_blue = 0;
    rgb_green = 0;
});
blueBtn.addEventListener("click", () => {
    rgb_red = 0;
    rgb_blue = 255;
    rgb_green = 0;
});
greenBtn.addEventListener("click", () => {
    rgb_red = 0;
    rgb_blue = 0;
    rgb_green = 255;
});
yellowBtn.addEventListener("click", () => {
    rgb_red = 255;
    rgb_blue = 0;
    rgb_green = 255;
});