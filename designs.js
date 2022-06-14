/*
1. Define your variables by selecting the DOM elements that the user will interact with. 
This is where your JavaScript variables can come into play! For instance, the submit button, 
the table, and the color picker need to be accessed. The value of the color selected needs to 
be stored as well, since the clicked cell in the table needs to be set to the selected color.*/
var form = document.getElementById('sizePicker');
var table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', makeGrid);

function makeGrid(event) {
    event.preventDefault();
    /*2. Add event listeners to the relevant DOM elements, so that user input can be color values and table
    sizes can be dynamically set by the user.*/
    table.addEventListener('click', function(event) {
            var color = document.getElementById('colorPicker').value;
            event.target.style.backgroundColor = color;
        })
        /*3. Set the size of the cross stitch canvas as an _N_ by _M_ grid with the makeGrid()
        function.Use your
        knowledge of JavaScript loops to dynamically clear and create the table based on user input.Each cell
        should have an event listener that sets the background color of the cell to the selected color.*/
    table.innerHTML = ""
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    for (var i = 0; i <= height - 1; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j <= width - 1; j++) {
            var cell = row.insertCell(j);
        }
    }

}