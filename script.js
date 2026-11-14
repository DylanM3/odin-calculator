// ---------------------------------
// Create references to DOM elements
// ---------------------------------

const currentCalc = document.getElementById("currentCalc");
const previousCalc = document.getElementById("previousCalc");
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator")
let firstNum;
let currentOperator;
let secondNum;
let shouldResetDisplay = false;

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

// ----------------
// Screen Functions
// ----------------

function clearScreen() {
    currentCalc.textContent = "";
}

// ---------------
// Event Listeners
// ---------------

// Digit Button: On Click
// 1: Update the screen with the target clicked
digitBtns.forEach(button => {
    button.addEventListener("click", (event) => {
        const digit = event.target.textContent;
        currentCalc.textContent += digit;
    });
})

// Operator Button: On Click
// 1: Store the operator clicked in `currentOperator`
// 2: Convert the display into `firstNum`
// 3: Clear the screen
operatorBtns.forEach(button => {
    button.addEventListener("click", (event) => {
        const currentOperator = event.target.textContent;
        firstNum = currentCalc.textContent;
        clearScreen()
    })
})