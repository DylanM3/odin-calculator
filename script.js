// ----------------------------------------------------------
// Create references to DOM elements and create new variables
// ----------------------------------------------------------

const screen = document.getElementById("screen");
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals-btn");
const clearBtn = document.getElementById("clearBtn");
const delBtn = document.getElementById("delBtn");
let prevNum = "";
let currNum = "";
let currOp = "";

// --------------------
// Arithmetic Functions
// --------------------

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? null : a / b;

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

// TODO: Create a function to handle digit button clicks.

// TODO: Create a function to handle operator button clicks.

// TODO: Create a function to calculate the result using operate().

// TODO: Prevent users from entering multiple decimal points in one number.

// TODO: Handle division by zero.

// TODO: Create a function to clear the calculator and reset its variables.

// TODO: Create a function to delete the last entered digit.

// TODO: Handle calculations involving consecutive operations.

// TODO: Handle edge cases (e.g. pressing equals without enough numbers,
// pressing multiple operators consecutively, or entering a decimal first).

// TODO: Add event listeners to all calculator buttons.

// TODO: Test all arithmetic operations and edge cases.