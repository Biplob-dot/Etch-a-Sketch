const container = document.querySelector("#container");
const adjustGridBtn = document.querySelector("#adjustGridBtn");
let gridSize = 16 //default;
let divs = []

adjustGridBtn.addEventListener("click", () => {
    resetGrid();
    let gridSize = parseInt(prompt("Enter the size of the Grid: "));
    for(let i = 0; i<(gridSize*gridSize); i++){
        const div = document.createElement("div");
        div.style.width = `${640/gridSize}px`;
        div.style.height = `${640/gridSize}px`;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "yellow"
        }
        )
        divs.push(div);
        container.appendChild(div);
}
})

const resetGrid = () => {
  divs.forEach(div => container.removeChild(div));
  divs = [];
};
