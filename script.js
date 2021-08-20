const calcDisplay = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const allClear = document.querySelector('#allClear');
const backspaceDel = document.querySelector('#backspaceDel');
const decimalButton = document.querySelector('#decimal');
const operators = document.querySelectorAll('.mathButton');

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

let firstNum= '';

// operator param has to be a string
/* function operate(operator) {
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
} */
let displayValue = [];

function oneDecimalPlease() {
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
// Call operate function with click of operand
operators.forEach(((operator) => {
  operator.addEventListener('click', () => {
    firstNum = displayValue.join('');
    calcDisplay.replaceChildren();
    displayValue = [];
    decimalButton.disabled = false;
    console.log(firstNum);
  });
}));

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