let resetButton = document.querySelector("#resetButton");
let colorChoice = document.querySelector("#colorChoice");
let container = document.getElementById("container");
let squaresPerSide;
var pickedColor = "#000000";
var colorPaused = true;

resetButton.addEventListener("click", event =>{
    squaresPerSide= window.prompt("How large would you like the square?");
    resetGrid();
    createGrid(squaresPerSide);
    colorPaused = false;
})

colorChoice.addEventListener("change", event =>{
    pickedColor = document.getElementById("colorChoice").value;
})

this.addEventListener('keypress', event => {
    if (event.keyCode == 112) {
        if (colorPaused == true) {
            colorPaused = false;
        }
        else {
            colorPaused = true;
        }
    }
  })

function changeSquareColor(e){

    if (colorPaused == false) {
        if (pickedColor == "#ffffff") {
            let colors = e.target.style.backgroundColor;

            if (colors == "") {
                e.target.style.backgroundColor="#"+Math.floor((Math.random() * 0xffffff)).toString(16);
            }
            else if (pickedColor == "#ffffff") {
                colors=colors.split(",");
                let red = parseInt(colors[0].slice(4),10);
                let green = parseInt(colors[1],10);
                let blue = parseInt(colors[2].slice(0,-1),10);
                e.target.style.backgroundColor = "rgb( "+(red-25.5)+","+(green-25.5)+","+(blue-25.5)+")";
            }
        }
        else {
            e.target.style.backgroundColor = pickedColor;
        }
    }
}

function resetGrid(){
    container.innerHTML = "";
}

function createGrid(squaresNumber){

    for (let i = 0;i <= squaresNumber;i++) {
        for (let j = 0;j <= squaresNumber;j++) {
            let square;
            square = document.createElement('div');
            square.className= "grid_square";
            square.addEventListener("mouseover", changeSquareColor);
            container.appendChild(square);
        }
    }

    container.style.gridTemplateRows = "repeat("+squaresNumber.toString()+", 1fr)";
    container.style.gridTemplateColumns = "repeat("+squaresNumber.toString()+", 1fr)";
}