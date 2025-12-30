function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    if (!/^[0-9+\-*/. ]+$/.test(expression)) {
        display.value = 'Input tidak valid';
        return;
    }

    try {
        display.value = eval(expression);
    } catch {
        display.value = 'itung yg bnr la oon😡';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}


