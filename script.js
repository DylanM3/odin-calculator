// -------------------------------------------
// Create references to each button in the DOM
// -------------------------------------------

const currentCalc = document.getElementById("currentCalc");
const previousCalc = document.getElementById("previousCalc");
const digits = document.querySelectorAll(".digit");
let firstNum;
let currentOperator;
let secondNum;

// --------------------
// Arithmetic Functions
// --------------------

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