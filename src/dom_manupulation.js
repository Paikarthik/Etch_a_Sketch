const canvas = document.querySelector(".grid");

for (let row = 0; row < 16; row++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row");

    for (let column = 0; column < 16; column++) {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("columns");
        rowContainer.appendChild(columnDiv);
    }

    canvas.appendChild(rowContainer);
}