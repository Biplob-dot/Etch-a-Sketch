const canvasContainer = document.querySelector("#canvasContainer");
const adjustGridBtn = document.querySelector("#adjustGridBtn");
const clearGridBtn = document.querySelector("#clearGridBtn");
const redBtn = document.querySelector("#redBtn");
const blueBtn = document.querySelector("#blueBtn");
const greenBtn = document.querySelector("#greenBtn");
const yellowBtn = document.querySelector("#yellowBtn");
let gridSize = 16; //default;
let divs = [];
let coloredDiv = [];
let rgb_red = 255;
let rgb_blue = 255;
let rgb_green = 255;
let drawColor = "rgb(255,255,255)"; //default;

// function trailingEffect(index,div){
//     if(index <= 0 || index == coloredDiv.indexOf(div) - 10){
//         rgb_red = rgb_blue = rgb_green = 0;
//         previousDiv.style.backgroundColor = `rgb(${rgb_red},${rgb_green},${rgb_blue})`;
//     }
//     const previousDiv = coloredDiv.indexOf(div);
// }

const makeGrid = () => {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.style.width = `${640 / gridSize}px`;
        div.style.height = `${640 / gridSize}px`;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = `rgb(${rgb_red},${rgb_green},${rgb_blue})`;
            coloredDiv.push(div);

            // const index = coloredDiv.indexOf(div);
            // if (index > 0) {
            //     const previousDiv = coloredDiv[index - 1];
            //     rgb_red = rgb_red - (0.1*255);
            //     previousDiv.style.backgroundColor = `rgb(${rgb_red},${rgb_green},${rgb_blue})`;
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