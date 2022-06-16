function addDivs(gridSize){
    let numberOfDivs = gridSize*gridSize;
    for (let i = 0; i < numberOfDivs; ++i){
        let drawSquare = document.createElement('div');
        drawSquare.classList.add("drawSquare");
        drawSquare.style.width = `${100/gridSize}%`;
        drawSquare.dataset.darken = 0;
        drawPanel.appendChild(drawSquare);
    }
}

function darkenSquares(e){

    if (+this.dataset.darken < 1){
        this.dataset.darken =  +this.dataset.darken + 0.1;  //this darken factor contributes to fading the drawing pad to black
    }

    let darkenVal = this.dataset.darken;

    let color1 = randomColorGenerator(darkenVal); 
    let color2 = randomColorGenerator(darkenVal);
    let color3 = randomColorGenerator(darkenVal);

    this.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;

}

function randomColorGenerator(darkenVal){
    return Math.floor(Math.random()*256)-(255*darkenVal) //generates random number from 0 to 255. The higher the alpha, the more black is chosen
}

function drawGrid(){
    let gridSize = prompt('What\'s the size of your grid?');
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100){
        clearButton.textContent = 'Invalid grid size. Click to retry!'
        return 
    }
    addDivs(gridSize);

    const drawSquares = document.querySelectorAll('.drawSquare');
    drawSquares.forEach(square => square.addEventListener('mouseover', darkenSquares))
}

function clearPad(){
    clearButton.textContent = "Clear drawing pad!"
    const drawSquares = document.querySelectorAll('.drawSquare');
    drawSquares.forEach(square => drawPanel.removeChild(square));
    drawGrid()
}

const drawPanel = document.querySelector('.drawPanel');
const clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click', clearPad);
drawGrid();