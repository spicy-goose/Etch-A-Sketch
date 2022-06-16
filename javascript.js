function addDivs(gridSize){
    let numberOfDivs = gridSize*gridSize;
    for (let i = 0; i < numberOfDivs; ++i){
        let drawSquare = document.createElement('div');
        drawSquare.classList.add("drawSquare");
        drawSquare.style.width = `${100/gridSize}%`;
        drawPanel.appendChild(drawSquare);
    }
}

function addHoveredClass(e){
    this.classList.add('hovered')
}

function drawGrid(){
    let gridSize = prompt('What\'s the size of your grid?');
    addDivs(gridSize);

    const drawSquares = document.querySelectorAll('.drawSquare');
    drawSquares.forEach(square => square.addEventListener('mouseover', addHoveredClass))
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