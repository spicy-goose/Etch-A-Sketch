function addDivs(gridSize){
    const drawPanel = document.querySelector('.drawPanel');
    
    let numberOfDivs = gridSize*gridSize;
    for (let i = 0; i < numberOfDivs; ++i){
        let drawSquare = document.createElement('div');
        drawSquare.classList.add("drawSquare");
        drawSquare.style.width = `${100/gridSize}%`;
        drawPanel.appendChild(drawSquare);
    }
}

let gridSize = prompt('What\'s the size of your grid?');
addDivs(gridSize)