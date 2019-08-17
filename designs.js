
let grid = document.querySelector('table');
const button = document.querySelector('[type=submit]');
button.addEventListener('click', submitClick);
grid.addEventListener('mousedown', startColoring, true);
grid.addEventListener('mouseup', stopColoring, true);

function makeGrid() {
    let height = +document.querySelector('#inputHeight').value;
    let width = +document.querySelector('#inputWidth').value;  
    
    for (let i = 1; i <= height; i++) {
        let tr = document.createElement('tr');
        grid.appendChild(tr);
        for (let j = 1; j <= width; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}

let firstSubmit = false;

function submitClick(e) {
    // don't reload page
    e.preventDefault();
    // clear existing table
    if (firstSubmit) {
        clearTable();
    }
    firstSubmit = true;
    // create new grid
    makeGrid();
}

function clearTable() {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}

function startColoring(e) {
    changeColor(e);
    grid.addEventListener('mouseover', changeColor);
}

function changeColor(e) {
    let color = document.querySelector('#colorPicker').value;
    if (e.target.nodeName === 'TD') {
        e.target.style.background = color;
    };
}

function stopColoring() {
    grid.removeEventListener('mouseover', changeColor);    
}