console.log("Page Loaded")
const container = document.querySelector(".sketchContainer");
let gridSize = 16;
for (y=0;y<gridSize;y++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (x=0;x<gridSize;x++) {
        const sketchElement=document.createElement("div");
        sketchElement.classList.add("sketchElement");
        row.appendChild(sketchElement);
    }
}