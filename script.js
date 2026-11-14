// ----------------------------------------------------------
// Create references to DOM elements and create new variables
// ----------------------------------------------------------

const screen = document.getElementById("screen");
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator")
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");
let firstNum;
let secondNum;
let currentOperator;
let currentInput = "";
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

// ---------------
// Clear Functions
// ---------------

function clearScreen() {
    screen.textContent = "";
}

function clearVariables() {
    currentInput = "";
    firstNum = undefined;
    currentOperator = undefined;
    shouldResetDisplay = false;
}

// ---------------
// Event Listeners
// ---------------

// Digit Button: On Click
// 1: Update the screen with the target clicked
digitBtns.forEach(button => {
    button.addEventListener("click", (event) => {
        const digit = event.target.textContent.trim();
        if(shouldResetDisplay) {
            screen.textContent = "";
            currentInput = "";
            shouldResetDisplay = false;
        }
        currentInput += digit;
        screen.textContent += digit;
    });
})

// Operator Button: On Click
// 1: Store the operator clicked in `currentOperator`
// 2: Convert the display into `firstNum`
// 3: Clear the screen
operatorBtns.forEach(button => {
    button.addEventListener("click", (event) => {

        if(shouldResetDisplay) {
            firstNum = Number(screen.textContent);
            shouldResetDisplay = false;

        } else if(firstNum !== undefined) {
            // Existing calculation needs evaluating
            secondNum = Number(currentInput);
            firstNum = operate(firstNum, secondNum, currentOperator);

        } else {
            firstNum = Number(currentInput);
        }

        currentInput = "";
        currentOperator = event.target.textContent.trim();
        screen.textContent += ` ${currentOperator} `;
    });
});

// Equals Button: On Click
// 1: Convert the display into `secondNum`
// 2: Call `operate(firstNum, secondNum, currentOperator`
equalsBtn.addEventListener("click", (event) => {
    secondNum = Number(currentInput);
    screen.textContent = operate(firstNum, secondNum, currentOperator);
    clearVariables();
    shouldResetDisplay = true;
})

// Clear Button: On Click
// 1: Clear the screen
// 2: Clear the input variables
clearBtn.addEventListener("click", (event) => {
    clearScreen(event);
    clearVariables(event);
});