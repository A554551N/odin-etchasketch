console.log("Page Loaded")
const container = document.querySelector(".sketchContainer");
const resizeButton = document.querySelector("#resizeButton");
let gridSize = 16;
resizeButton.addEventListener("click",() => {
    gridSize = prompt("Grid Size? (Max is 100)");
    clearGrid();
    drawGrid(gridSize);
})



function clearGrid() {
    while(container.firstChild) {
        container.firstChild.remove();
    }
}

function drawGrid(gridSize) {
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
