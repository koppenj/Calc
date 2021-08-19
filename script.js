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
const buttons = document.querySelectorAll('.button');
const allClear = document.querySelector('#allClear');
const backspaceDel = document.querySelector('#backspaceDel');
const decimalButton = document.querySelector('#decimal');

function oneDecimalPlease () {
  if (displayValue.includes('.')) {
    decimalButton.disabled = true;
  } else {
    decimalButton.disabled = false;
  }
}
// Write key punches to display
buttons.forEach(((button) => {
  button.addEventListener('click', (event) => {
    displayValue.push(event.target.value);
    calcDisplay.append(event.target.value);
    oneDecimalPlease();
  });
}));
// AC key functionality
allClear.addEventListener('click', () => {
  calcDisplay.replaceChildren();
  displayValue = [];
  decimalButton.disabled = false;
});
// DEL key functionality
backspaceDel.addEventListener('click', () => {
  displayValue.pop();
  calcDisplay.replaceChildren();
  calcDisplay.append(displayValue.join(''));
  oneDecimalPlease();
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
