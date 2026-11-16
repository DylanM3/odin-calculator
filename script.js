// ----------------------------------------------------------
// Create references to DOM elements and create new variables
// ----------------------------------------------------------

const screen = document.getElementById("screen");
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equalsBtn");
const ansBtn = document.getElementById("ansBtn");
const clearBtn = document.getElementById("clearBtn");
const delBtn = document.getElementById("delBtn");
let firstNum = "";
let secondNum = "";
let currentOp = "";
let ans = "";
const DECIMAL_LIMIT = 6;

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
    screen.textContent = `${formatNum(firstNum)} ${currentOp} ${formatNum(secondNum)}`;
}

function formatNum(num) {
    if (num === "") return "";
    return +Number(num).toFixed(DECIMAL_LIMIT);
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
            ans = add(a, b);
            return ans;
        case '-':
            ans = subtract(a, b);
            return ans;
        case '*':
            ans = multiply(a, b);
            return ans;
        case '/':
            const nullCheck = divide(a, b);
            if (nullCheck !== null) {
                ans = nullCheck;
                return ans;
            }
            return "Nice try.";
        default:
            return "";
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

function handleOperatorClick(op) {
    if (firstNum === "") return;
    currentOp = op
    updateScreen();
}

function handleEqualsClick(event) {
    if (firstNum !== "" && secondNum !== "" && currentOp !== "") {
        firstNum = String(operate(firstNum, secondNum, currentOp)); // Store result in `firstNum` as a string
    }
    if (firstNum === "Nice try.") {
        firstNum = ans;
    }
    secondNum = "";
    currentOp = "";
    updateScreen()
}

function handlesAnsClick(event) {
    if (currentOp === "") {
        firstNum = ans;
    } else {
        secondNum = ans;
    }
    updateScreen();
}

function handlesClearClick(event) {
    firstNum = "";
    secondNum = "";
    currentOp = "";
    updateScreen();
}

function handlesDeleteClick(event) {
    if (secondNum !== "") {
        secondNum = String(secondNum);
        secondNum = secondNum.slice(0, -1);
    } else if (currentOp !== "") {
        currentOp = currentOp.slice(0, -1);
    } else {
    firstNum = String(firstNum);
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
    handleDigitClick(event.target.textContent.trim());
}));
operatorBtns.forEach(button => button.addEventListener("click", (event) => {
    handleOperatorClick(event.target.textContent.trim());
}));
equalsBtn.addEventListener("click", handleEqualsClick);
ansBtn.addEventListener("click", handlesAnsClick);
clearBtn.addEventListener("click", handlesClearClick);
delBtn.addEventListener("click", handlesDeleteClick);
document.addEventListener("keydown", handleKeyboardInput);