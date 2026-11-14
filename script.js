// ---------------------------------
// Create references to DOM elements
// ---------------------------------

const currentCalc = document.getElementById("currentCalc");
const previousCalc = document.getElementById("previousCalc");
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator")
const equalsBtn = document.getElementById("equalsBtn");
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

// Only clear `currentCalc` from the screen
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
        const digit = event.target.textContent.trim();
        currentCalc.textContent += digit;
    });
})

// Operator Button: On Click
// 1: Store the operator clicked in `currentOperator`
// 2: Convert the display into `firstNum`
// 3: Clear the screen
operatorBtns.forEach(button => {
    button.addEventListener("click", (event) => {
        currentOperator = event.target.textContent.trim();
        firstNum = Number(currentCalc.textContent);
        clearScreen()
    })
})

// Equals Button: On Click
// 1: Convert the display into `secondNum`
// 2: Call `operate(firstNum, secondNum, currentOperator`
equalsBtn.addEventListener("click", (event) => {
    secondNum = Number(currentCalc.textContent);
    currentCalc.textContent = operate(firstNum, secondNum, currentOperator);
})