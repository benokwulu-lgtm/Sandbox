// Addition
const add = (a, b) => {
    return a + b;
};

// Subtraction
const subtract = (a, b) => {
    return a - b;
};

// Multiplication
const multiply = (a, b) => {
    return a * b;
};

// Division
const divide = (a, b) => {
    if (b === 0) {
        return "Error: Division by zero is not allowed";
    }

    return a / b;
};

// Coordinator function
const operate = (operator, a, b) => {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else {
        return "Error: Invalid operator";
    }
};


// Test the calculator
console.log(operate("+", 10, 5));
console.log(operate("/", 10, 0));
console.log(operate("*", 4, 3));