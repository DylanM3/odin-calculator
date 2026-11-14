// ---------------------------------
// Create references to DOM elements
// ---------------------------------

const currentCalc = document.getElementById("currentCalc");
const previousCalc = document.getElementById("previousCalc");
const digitButtons = document.querySelectorAll(".digit");
let firstNum;
let currentOperator;
let secondNum;

// --------------------
// Arithmetic Functions
// --------------------

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// ---------------------
// Calculating Functions
// ---------------------

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

// ---------------
// Event Listeners
// ---------------

// Loops over every button, adds an event listener, and logs which button was pressed
digitButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log("Clicked: ", event.target);
    });
})