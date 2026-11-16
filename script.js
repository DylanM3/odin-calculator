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
const DECIMAL_LIMIT = 4;

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

    switch (op) {
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

function handleDigitClick(digit) {
    if (currentOp === "") {
        firstNum += digit;
    } else {
        secondNum += digit;
    }

    updateScreen();
}

function handleOperatorClick() {
    updateScreen();
}

function handleEqualsClick(event) {
    firstNum = operate(firstNum, secondNum, currentOp); // Store result in `firstNum`
    secondNum = "";
    currentOp = "";
    updateScreen()
}

function handlesClearClick(event) {
    firstNum = "";
    secondNum = "";
    currentOp = "";
    updateScreen();
}

function handlesDeleteClick(event) {
    if (secondNum !== "") {
        secondNum = secondNum.slice(0, -1);
    } else if (currentOp !== "") {
        currentOp = currentOp.slice(0, -1);
    } else {
        firstNum = firstNum.slice(0, -1);
    }
    updateScreen();
}

// -----------------
// Keyboard Handling
// -----------------

function handleKeyboardInput(event) {
    const key = event.key;

    if ("0123456789".includes(key)) {
        handleDigitClick(key);
        return // Stop continuation into the switch
    }
    if ("+-*/".includes(key)) {
        if (key === '/') {
            event.preventDefault();
        }
        currentOp = key;
        handleOperatorClick(key);
        return // Stop continuation into the switch
    }

    switch (key) {
        case "Enter":
        case '=':
            handleEqualsClick(key);
            break;
        case "Backspace":
            handlesDeleteClick(key);
            break;
        case "Escape":
            handlesClearClick(key);
            break;
        default: return
    }
}

// ---------------
// Event Listeners
// ---------------

digitBtns.forEach(button => button.addEventListener("click", (event) => {
    const digit = event.target.textContent.trim();
    handleDigitClick(digit);
}));
operatorBtns.forEach(button => button.addEventListener("click", (event) => {
    currentOp = event.target.textContent.trim()
    handleOperatorClick();
}));
equalsBtn.addEventListener("click", handleEqualsClick);
clearBtn.addEventListener("click", handlesClearClick);
delBtn.addEventListener("click", handlesDeleteClick);
document.addEventListener("keydown", handleKeyboardInput);