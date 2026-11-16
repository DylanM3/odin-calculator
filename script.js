// ----------------------------------------------------------
// Create references to DOM elements and create new variables
// ----------------------------------------------------------

const screen = document.getElementById("screen");
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");
const delBtn = document.getElementById("delBtn");
let firstNum = "";
let secondNum = "";
let currentOp = "";
let shouldResetScreen = false;

// --------------------
// Arithmetic Functions
// --------------------

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? null : a / b;

// ----------------
// Screen Functions
// ----------------

function updateScreen() {
    screen.textContent = `${firstNum} ${currentOp} ${secondNum}`;
}

// ---------------------
// Calculating Functions
// ---------------------

function operate(a, b, op) {
    // Cast a & b to numbers
    a = Number(a);
    b = Number(b);

    switch(op) {
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

// ------------------------
// Click Handling Functions
// ------------------------

function handleDigitClick(event) {
    const digit = event.target.textContent.trim();

    if (shouldResetScreen) {
        screen.textContent = "";
        shouldResetScreen = false;
    }

    if (currentOp === "") {
        firstNum += digit;
    } else {
        secondNum += digit;
    }

    updateScreen();
}

function handleOperatorClick(event) {
    currentOp = event.target.textContent.trim()
    updateScreen();
}

function handleEqualsClick(event) {
    screen.textContent = operate(firstNum, secondNum, currentOp);
}

// ---------------
// Event Listeners
// ---------------

digitBtns.forEach(button => button.addEventListener("click", handleDigitClick));
operatorBtns.forEach(button => button.addEventListener("click", handleOperatorClick));
equalsBtn.addEventListener("click", handleEqualsClick);