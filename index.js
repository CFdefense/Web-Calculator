//Simple Calculator Using HTML, CSS and JS

const Display = document.getElementById("Display");

function appendToDisplay(input) {
    Display.value += input;
}

function clearDisplay() {
    Display.value = "";
}

function calculate() {
    try {
        Display.value = eval(Display.value);
    } catch(error) {
        Display.value = "Error";
    }
    
}