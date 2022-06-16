function addDivs(gridSize){
    let numberOfDivs = gridSize*gridSize;
    for (let i = 0; i < numberOfDivs; ++i){
        let drawSquare = document.createElement('div');
        drawSquare.classList.add("drawSquare");
        drawSquare.style.width = `${100/gridSize}%`;
        drawPanel.appendChild(drawSquare);
    }
}

function darkenSquares(e){
    let bgCol = this.style.backgroundColor;
    let alpha = parseFloat(bgCol.split(',')[3]); //using RGB alteration to darken squares because it does not alter div borders
    if (alpha){
        if (alpha >= 0.9){
            alpha = 0.99; //cannot set to 1 as it will essesntially delete the alpha value, resetting the opacity to NaN
        }else{
            alpha += 0.1; //increment alpha in increments of 0.1 if it has not reached max value
        }
    }else{
        alpha = 0.1; //if alpha is NaN, set it to 0.1
    }
    this.style.backgroundColor = `rgb(0, 0, 0, ${alpha})`;

}


function drawGrid(){
    let gridSize = prompt('What\'s the size of your grid?');
    addDivs(gridSize);

    const drawSquares = document.querySelectorAll('.drawSquare');
    drawSquares.forEach(square => square.addEventListener('mouseover', darkenSquares))
}

function clearPad(){
    const drawSquares = document.querySelectorAll('.drawSquare');
    drawSquares.forEach(square => drawPanel.removeChild(square));
    drawGrid()
}

const drawPanel = document.querySelector('.drawPanel');
const clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click', clearPad);
drawGrid();