// Select color input
// Select size input

const color = document.getElementById("colorPicker");
const sizePicker = document.getElementById("sizePicker");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const pixelCanvas = document.getElementById("pixelCanvas");
    function clearGrid() {
    const allRows = document.querySelectorAll("tr");
    allRows.forEach((row) => {
        row.remove();
    });
}
// When size is submitted by the user, call makeGrid()
function makeGrid(e) {
    e.preventDefault();
    clearGrid();
    var height = inputHeight.value;
    var width = inputWidth.value;
    console.log(inputHeight, inputWidth, colorPicker);
// Your code goes here!

    for (let i = 1; i <= height; i++) {
        const row = document.createElement("tr");

        for (let i = 1; i <= width; i++) {
            const column = document.createElement("td");
            row.appendChild(column);
            pixelCanvas.appendChild(row);
        }
    }
}
document.body.style.backgroundImage = "url('/pexels-photo-4737484.jpeg')";
document.body.style.backgroundSize = "cover";
sizePicker.addEventListener("submit", makeGrid);
pixelCanvas.addEventListener("click", function (e) {
console.log(e.target);
e.target.style.backgroundColor = color.value;
});