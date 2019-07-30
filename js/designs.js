// JS code written by Yazeed M. Al`Fadani for Udacity`s IPND.

function makeGrid(height, width) {
    
    console.log("Making a Grid Now...")

    const page = document.querySelector("#pixelCanvas");
    // A Empty grid is born!
    let grid = '';

    // Loop over rows
    for (let x = 0; x < height; x++) {
        grid += '<tr class="row-' + x + '">';
        // Loop over cells
        for (let y = 0; y < width; y++) {
            grid += '<td class="cell" id="row-' + x + '_cell-' + y + '"></td>';
        } // Nested Loops ^
        grid += '</tr>';
    }
    // Append the grid to the page element
    page.innerHTML = grid;
    // Add click event to grid cells after the canvas grid has been created
    addActionsOnCells();
}
// Put click events to all cells and color 
function addActionsOnCells() {
    const colorPicker = document.querySelector("#colorPicker");
    const cells = document.querySelectorAll('.cell');
    for (let cell = 0; cell < cells.length; cell++) {
        cells[cell].addEventListener("click", function (event) {
            event.target.style.backgroundColor = colorPicker.value;
        });
    }
}