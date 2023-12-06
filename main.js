const display = document.getElementById('display');
let inputElement = document.getElementById('input');
let outputElement = document.getElementById('output');
const clear = document.querySelector('.clear');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const equals = document.querySelector('.equals');
const dot = document.querySelector('.dot');

const num0 = document.querySelector('.num0');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const num6 = document.querySelector('.num6');
const num7 = document.querySelector('.num7');
const num8 = document.querySelector('.num8');
const num9 = document.querySelector('.num9');

let currentInput = '0';
let operator = '';
let firstOperand = '';
let secondOperand = '';

num0.addEventListener('click', function() {
  inputElement.value += '0';
});

num1.addEventListener('click', function() {
  inputElement.value += '1';
  handleNumberClick('num1');
});

num2.addEventListener('click', function() {
  inputElement.value += '2';
  handleNumberClick('num2');
});

num3.addEventListener('click', function() {
  inputElement.value += '3';
  handleNumberClick('num3');
});

num4.addEventListener('click', function() {
  inputElement.value += '4';
  handleNumberClick('num4');
});

num5.addEventListener('click', function() {
  inputElement.value += '5';
  handleNumberClick('num5');
});

num6.addEventListener('click', function() {
  inputElement.value += '6';
  handleNumberClick('num6');
});

num7.addEventListener('click', function() {
  inputElement.value += '7';
  handleNumberClick('num7');
});

num8.addEventListener('click', function() {
  inputElement.value += '8';
  handleNumberClick('num8');
});

num9.addEventListener('click', function() {
  inputElement.value += '9';
  handleNumberClick('num9');
});

clear.addEventListener('click', function() {
  clearDisplay();
});

plus.addEventListener('click', function() {
  inputElement.value += '+';
});

minus.addEventListener('click', function() {
  inputElement.value += '-';
});

divide.addEventListener('click', function() {
  inputElement.value += '/';
});

multiply.addEventListener('click', function() {
  inputElement.value += '*';
});

equals.addEventListener('click', function() {
  let result = eval(inputElement.value);
  outputElement.value = result;

  if (inputElement !== undefined && !isNaN(result)) {
    inputElement.value = result;
  }
});

// function handleNumberClick(number) {
  
// }

function clearDisplay() {
  
  inputElement.value = '';
  outputElement.value = '';
}
