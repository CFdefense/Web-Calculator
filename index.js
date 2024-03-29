//Simple Calculator Using HTML, CSS and JS

//retrieve the Display element from the HTML file
const Display = document.getElementById("Display");

//function to add the pressed input to the Display String
function appendToDisplay(input) {
    Display.value += input;
}
//Function to Reset Display String
function clearDisplay() {
    Display.value = "";
}

//Function to evaluate the string in the Calculator Display
function calculate() {
    try {
        //Change Displa value to the new evalutated Display
        Display.value = eval(Display.value);
    } catch(error) {
        //If Error throw error
        Display.value = "Error";
    }
}