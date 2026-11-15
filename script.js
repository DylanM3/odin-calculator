// ----------------------------------------------------------
// Create references to DOM elements and create new variables
// ----------------------------------------------------------

const screen = document.getElementById("screen")
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");

// ----------------
// Screen Functions
// ----------------

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

digitBtns.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(event.target.textContent);
    })
})