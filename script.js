const container = document.querySelector("#container");
const adjustGridBtn = document.querySelector("#adjustGridBtn");
let gridSize = 16 //default;
// let divs = []

adjustGridBtn.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Enter the size of the Grid: "));
    for(let i = 0; i<(gridSize*gridSize); i++){
        const div = document.createElement("div");
        div.style.width = `${640/gridSize}px`;
        div.style.height = div.style.width;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "yellow"
        }
        )
        // divs.push(div);
        container.appendChild(div);
}
})

// let resetGrid = () => {
//     for(let i = (gridSize*gridSize); i>0; i--){
//         container.removeChild(divs[i]);
//     }
// }
