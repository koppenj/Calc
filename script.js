/* eslint-disable no-unreachable */
function add(a, b) {
  return a + b;
}

function subract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// operator param has to be a string
function operate(a, operator, b) {
  const sign = operator;
  switch (sign) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subract(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    default:
      return 'ERROR';
  }
}
let displayValue = [];

const calcDisplay = document.getElementById('display');
const buttons = numPad.querySelectorAll('.button');
const allClear = numPad.querySelector('#allClear');
const backspaceDel = numPad.querySelector('#backspaceDel');

buttons.forEach(((button) => {
  button.addEventListener('click', (event) => {
    displayValue.push(event.target.value);
    calcDisplay.append(event.target.value);
  });
}));

allClear.addEventListener('click', () => {
  calcDisplay.replaceChildren();
  displayValue = [];
});

backspaceDel.addEventListener('click', () => {
  displayValue.pop();
  calcDisplay.replaceChildren();
  calcDisplay.append(displayValue.join(''));
});

/* const keyValues = {
    "0": 48,
    "1": 49,
    "2": 50,
    "3": 51,
    "4": 52,
    "5": 53,
    "6": 54,
    "7": 55,
    "8": 56,
    "9": 57,
    "+": 187,
    "-": 189,
    "*": 56,
    "/":191,
    "=": 13,
    "AC": 27,
    "DEL": 8,
} */
