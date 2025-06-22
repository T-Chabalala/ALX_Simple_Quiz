function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function getInputValues() {
    const a = parseFloat(document.getElementById('a').value) || 0;
    const b = parseFloat(document.getElementById('b').value) || 0;
    return { a, b };
}

document.getElementById('add').addEventListener('click', function() {
    const { a, b } = getInputValues();
    const result = add(a, b);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    const { a, b } = getInputValues();
    const result = subtract(a, b);
    document.getElementById('calculation-result').textContent = result; 
});

document.getElementById('multiply').addEventListener('click', function() {
    const { a, b } = getInputValues();
    const result = multiply(a, b);
    document.getElementById('calculation-result').textContent = result; 
});

document.getElementById('divide').addEventListener('click', function() {
    const { a, b } = getInputValues();
    try {
        const result = divide(a, b);
        document.getElementById('calculation-result').textContent = result;
    } catch (error) {
        document.getElementById('calculation-result').textContent = error.message;
    }
});