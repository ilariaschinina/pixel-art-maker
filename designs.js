
let grid = document.querySelector('table');
const button = document.querySelector('[type=submit]');
button.addEventListener('click', submitClick);
grid.addEventListener('click', changeColor);

function makeGrid() {
    let height = +document.querySelector('#inputHeight').value;
    let width = +document.querySelector('#inputWidth').value;  
    
    for (let i = 1; i <= width; i++) {
        let tr = document.createElement('tr');
        grid.appendChild(tr);
        for (let j = 1; j <= height; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}

let numClicks = 0;

function submitClick(e) {
    // don't reload page
    e.preventDefault();
    // clear existing table
    numClicks++;
    if (numClicks > 1) {
        clearTable();
    }
    // create new grid
    makeGrid();
}

function clearTable() {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}

function changeColor(e) {
    let color = document.querySelector('#colorPicker').value;
    if (e.target.nodeName === "TD") {
        e.target.style.background = color;
    };
}