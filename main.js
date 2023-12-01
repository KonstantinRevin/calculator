document.addEventListener('DOMContentLoaded', function () {
    
    const display = document.getElementById('display');
    const clear = document.querySelector('clear');
    
    const plus = document.querySelector('plus');
    const minus = document.querySelector('minus');
    const divide = document.querySelector('divide');
    const multiply = document.querySelector('multiply');
    const equals = document.querySelector('equals');
    const dot = document.querySelector('dot');

    const num0 = document.querySelector('num0');
    const num1 = document.querySelector('num1');
    const num2 = document.querySelector('num2');
    const num3 = document.querySelector('num3');
    const num4 = document.querySelector('num4');
    const num5 = document.querySelector('num5');
    const num6 = document.querySelector('num6');
    const num7 = document.querySelector('num7');
    const num8 = document.querySelector('num8');
    const num9 = document.querySelector('num9');
 

    let currentInput = '';
    let operator = '';
    let previousInput = '';
    let result = '';

    item.addEventListener('click',() =>{
    });
















    // Function to clear the display
    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operator = '';
        result = '';
        updateDisplay();
    }
});