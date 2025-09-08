
const calculationHistory = [];


function add(num1, num2) {
    const result = num1 + num2;
    addToHistory(num1, '+', num2, result);
    return result;
}

function subtract(num1, num2) {
    const result = num1 - num2;
    addToHistory(num1, '-', num2, result);
    return result;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    addToHistory(num1, '*', num2, result);
    return result;
}

function divide(num1, num2) {
    if (num2 === 0) {
        console.warn('Error: Division by zero is not allowed.');
        return null;
    }
    const result = num1 / num2;
    addToHistory(num1, '/', num2, result);
    return result;
}

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

function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log('No calculations have been made yet.');
        return;
    }

    console.log('=== Calculation History ===');
    calculationHistory.forEach((entry, index) => {
        const { operands, operator, result, timestamp })
    console.log('${index+1}: ${operands[0]} ${operator} ${operands[1]} = ${result}($timestamp)')
});

console.log('Calculator Demo:\n');
console.log('5 + 3 =', add(5, 3));
console.log('10 - 4 =', subtract(10, 4));
console.log('6 * 7 =', multiply(6, 7));
console.log('20 / 5 =', divide(20, 5));
console.log('10 / 0 =', divide(10, 0));

console.log('\nDisplaying History:');
displayHistory();
