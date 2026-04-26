const canvas = document.querySelector(".grid");
let sizeOfGrid = 16
let colorFiller = "Black"
let blackSelected = true;
let shaderSelected = false;
let rainbowSelected = false;

function createGrid(gridSize)
{
    for (let row = 0; row < gridSize; row++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row");

        for (let column = 0; column < gridSize; column++) {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("columns");
            rowContainer.appendChild(columnDiv);
        }

        canvas.appendChild(rowContainer);
    }
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getSelectedColor(){
    if(blackSelected) return "Black"
    else if(shaderSelected)
    {

    }
    else return getRandomColor()
}

canvas.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("columns")) {
        colorFiller = getSelectedColor();
        e.target.style.backgroundColor = colorFiller;
    }
});

// Add event listners for the buttons 

let blackButton = document.querySelector("black")
let shaderButton = document.querySelector("shader")
let rainbowButton = document.querySelector("rainbow")
let alterCanvasSize = document.querySelector("alter")



createGrid(sizeOfGrid);


