// -------------------------------------------
// Create references to each button in the DOM
// -------------------------------------------

// Screen Container
const screen = document.getElementById("screen");
// Number Button Container
const zeroBtn = document.getElementById("zeroBtn");
const oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn");
const threeBtn = document.getElementById("threeBtn");
const fourBtn = document.getElementById("fourBtn");
const fiveBtn = document.getElementById("fiveBtn");
const sixBtn = document.getElementById("sixBtn");
const sevenBtn = document.getElementById("sevenBtn");
const eightBtn = document.getElementById("eightBtn");
const nineBtn = document.getElementById("nineBtn");
// Arithmetic Button Container
const plusBtn = document.getElementById("plusBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
// Miscellaneous Button Container
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");

// --------------------------------------------
// Define functions to make the calculator work
// --------------------------------------------

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operation) {
    switch(operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "operateLogicError";
    }
}