document.addEventListener('DOMContentLoaded', () => {
    const numberDisplay = document.getElementById('number');
    const buttons = document.querySelectorAll('.numbers button');

    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent;

            if (buttonValue === 'c') {
                // Clear the display
                currentInput = '';
                numberDisplay.value = '';
            } else if (buttonValue === '=') {
                // Evaluate the expression
                try {
                    currentInput = eval(currentInput).toString();
                    numberDisplay.value = currentInput;
                } catch {
                    numberDisplay.value = 'Error';
                    currentInput = '';
                }
            } else {
                // Append the button value to current input
                currentInput += buttonValue;
                numberDisplay.value = currentInput;
            }
        });
    });
});
