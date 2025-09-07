// Array to store all calculation entries
const calculationHistory = [];

// Adds two numbers and records the operation
function add(num1, num2) {
    const result = num1 + num2;
    addToHistory(num1, '+', num2, result);
    return result;
}
// Subtracts num2 from num1 and records the operation
function subtract(num1, num2) {
    const result = num1 - num2;
    addToHistory(num1, '-', num2, result);
    return result;
}
// Multiplies two numbers and records the operation
function multiply(num1, num2) {
    const result = num1 * num2;
    addToHistory(num1, '*', num2, result);
    return result;
}
// Divides num1 by num2 and records the operation; handles division by zero
function divide(num1, num2) {
    if (num2 === 0) {
        console.warn('Error: Division by zero is not allowed.');
        return null;
    }
    const result = num1 / num2;
    addToHistory(num1, '/', num2, result);
    return result;
}
// Stores a calculation entry in the history array
function addToHistory(operand1, operator, operand2, result) {
    const entry = {
        operands: [operand1, operand2
        ],
        operator: operator,
        result: result,
        timestamp: new Date().toLocaleString()
    };
    calculationHistory.push(entry);
}
// Displays all calculations in the console
function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log('No calculations have been made yet.');
        return;
    }

    console.log('=== Calculation History ===');
    calculationHistory.forEach((entry, index) => {
        console.log(`${index + 1
            }: ${entry.operands[
            0
            ]
            } ${entry.operator
            } ${entry.operands[
            1
            ]
            } = ${entry.result
            } (${entry.timestamp
            })`);
    });
}
// Demo usage of the calculator functions
console.log('Calculator Demo:\n');
console.log('5 + 3 =', add(5,
    3));
console.log('10 - 4 =', subtract(10,
    4));
console.log('6 * 7 =', multiply(6,
    7));
console.log('20 / 5 =', divide(20,
    5));
console.log('10 / 0 =', divide(10,
    0)); // division by zero test

console.log('\nDisplaying History:');
displayHistory();
