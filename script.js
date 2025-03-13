console.log("Page Loaded")
const container = document.querySelector(".sketchContainer");
const resizeButton = document.querySelector("#resizeButton");
const clearGridButton = document.querySelector("#clearGridButton");
let gridSize = 16;
resizeButton.addEventListener("click",() => {
    gridSize = prompt("Grid Size? (Max is 100)");
    refreshGrid();
})

clearGridButton.addEventListener("click",refreshGrid)

function refreshGrid() {
    console.log("Grid Clear")
    while(container.firstChild) {
        container.firstChild.remove();
    }
    drawGrid(gridSize);
}

function drawGrid(gridSize) {
    // Limits grid size to 100 to conserve system resources
    gridSize = Math.min(100,gridSize);
    for (y=0;y<gridSize;y++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (x=0;x<gridSize;x++) {
            const sketchElement=document.createElement("div");
            sketchElement.classList.add("sketchElement");
            row.appendChild(sketchElement);
            sketchElement.addEventListener("mouseover", () => {
                sketchElement.classList.add("highlightElement");
            })
        }
    }
}

drawGrid(gridSize)
