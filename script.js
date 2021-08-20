const calcDisplay = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const allClear = document.querySelector('#allClear');
const backspaceDel = document.querySelector('#backspaceDel');
const decimalButton = document.querySelector('#decimal');
const operators = document.querySelectorAll('.mathButton');
const equal = document.querySelector('.equalSign');

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

let firstNum;
let secondNum;
let result;
// operator param has to be a string
function operate(operatorChoice) {
  calcDisplay.replaceChildren();
  switch (operatorChoice) {
    case '+':
      result = add(firstNum, secondNum);
      firstNum = result;
      return result;
    case '-':
      result = subract(firstNum, secondNum);
      firstNum = result;
      return result;
    case '/':
      result = divide(firstNum, secondNum);
      firstNum = result;
      return result;
    case '*':
      result = multiply(firstNum, secondNum);
      firstNum = result;
      return result;
    default:
      return 'ERROR';
  }
}

let displayValue = [];
let operatorChoice = '';

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
  firstNum = undefined;
  secondNum = undefined;
  operatorChoice = '';
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
  operator.addEventListener('click', (event) => {
    if (!firstNum) {
      firstNum = Number(displayValue.join(''));
    } else {
      secondNum = Number(displayValue.join(''));
    }
    calcDisplay.replaceChildren();
    displayValue = [];
    decimalButton.disabled = false;
    operatorChoice = event.target.value;
  });
}));

equal.addEventListener('click', () => {
  if (secondNum) {
    calcDisplay.append(operate(operatorChoice));
  } else {
    secondNum = Number(displayValue.join(''));
    operate(operatorChoice);
    calcDisplay.append(result);
  }
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