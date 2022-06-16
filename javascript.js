function drawGrid(){
    //prompt for grid size
    let gridSize = prompt('What\'s the size of your grid? Select a number from 1-100!');
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100){
        clearButton.textContent = 'Invalid grid size. Reload to retry!';
        return 
    }
    addDivs(gridSize);
}

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

function darkenSquares(drawSquare, color, shading){


     if (shading && +drawSquare.dataset.darken < 1){
        //this darken factor contributes to fading the drawing pad to black
        drawSquare.dataset.darken =  +drawSquare.dataset.darken + 0.1;  
     }

    let color1 = colorGenerator(color, +drawSquare.dataset.darken); 
    let color2 = colorGenerator(color, +drawSquare.dataset.darken);
    let color3 = colorGenerator(color, +drawSquare.dataset.darken);

    drawSquare.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;

}

function colorGenerator(color, darkenVal){
    let randomNumber = Math.floor(Math.random()*256); //creates random number from 0 - 255

    //for a color factor of 1, a random RGB value is used. Else, 0 will be the result.
    let colorFactor = randomNumber * color; 
    //shading factor will subtract from color factor in increments of 10%
    let shadingFactor = 255 * darkenVal;

    if (color == 0 && darkenVal > 0){
        // for the case of no color and yes, shading a different formula was needed
         return 255 - shadingFactor; 
    }
    //if color box is not checked, 255 will be substracted from random color to turn it black
    return colorFactor-shadingFactor
}

function clearPad(){
    const drawSquares = document.querySelectorAll('.drawSquare');
    drawSquares.forEach(square => {
        square.dataset.darken = 0;
        square.style.backgroundColor = 'rgb(255, 255, 255)';
    });    
}

const drawPanel = document.querySelector('.drawPanel');
const clearButton = document.querySelector('.clearButton');
const checkbox1 = document.querySelector('#checkbox1');
const checkbox2 = document.querySelector('#checkbox2');


clearButton.addEventListener('click', clearPad);
checkbox1.addEventListener('change', clearPad);
checkbox2.addEventListener('change', clearPad);

drawGrid();
const drawSquares = document.querySelectorAll('.drawSquare');
drawSquares.forEach(square => square.addEventListener('mouseover', e => {
    darkenSquares(e.target, checkbox1.checked, checkbox2.checked)}
    ));