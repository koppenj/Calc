const calcDisplay = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const allClear = document.querySelector('#allClear');
const backspaceDel = document.querySelector('#backspaceDel');
const decimalButton = document.querySelector('#decimal');
const plusMinus = document.querySelector('.plusMinus');
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

let firstNum = 0;
let secondNum;
let result;

// operator param has to be a string
function operate(operatorChoice) {
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

let operatorChoice;

function oneDecimalPlease() {
  if (calcDisplay.textContent.includes('.')) {
    decimalButton.disabled = true;
  } else {
    decimalButton.disabled = false;
  }
}
// Write key punches to display
buttons.forEach(((button) => {
  button.addEventListener('click', (event) => {
    if (firstNum === result) {
      calcDisplay.replaceChildren();
      result = undefined;
    }
    calcDisplay.textContent += event.target.value;
    oneDecimalPlease();
  });
}));
// AC key functionality
allClear.addEventListener('click', () => {
  calcDisplay.replaceChildren();
  firstNum = 0;
  secondNum = undefined;
  operatorChoice = undefined;
  result = undefined;
  decimalButton.disabled = false;
});
// DEL key functionality
backspaceDel.addEventListener('click', () => {
  if (!result) {
    const needsEditContent = calcDisplay.textContent;
    const editedContent = needsEditContent.slice(0, -1);
    calcDisplay.replaceChildren(editedContent);
    oneDecimalPlease();
  }
});

// Make display value positive or negative
plusMinus.addEventListener('click', () => {
  if (firstNum !== 0 && operatorChoice !== undefined && result !== undefined) {
    calcDisplay.replaceChildren(calcDisplay.textContent * -1);
  } else if (firstNum === 0 && operatorChoice === undefined) {
    calcDisplay.replaceChildren(calcDisplay.textContent = '-');
  } else if (firstNum !== 0 && operatorChoice !== undefined) {
    calcDisplay.replaceChildren(calcDisplay.textContent = '-');
  } else {
    calcDisplay.replaceChildren(calcDisplay.textContent = '-');
  }
});

// Call operate function with click of operand
operators.forEach(((operator) => {
  operator.addEventListener('click', (event) => {
    if (secondNum === undefined && operatorChoice === undefined) {
      firstNum = parseFloat(calcDisplay.textContent);
      calcDisplay.textContent = '';
      operatorChoice = event.target.value;
      oneDecimalPlease();
      return;
    }
    if (secondNum === undefined && operatorChoice !== undefined) {
      secondNum = parseFloat(calcDisplay.textContent);
      operate(operatorChoice);
      calcDisplay.textContent = parseFloat(result.toFixed(9));
      secondNum = undefined;
      operatorChoice = event.target.value;
      decimalButton.disabled = false;
    }
  });
}));

equal.addEventListener('click', () => {
  if (!operatorChoice) {
    return;
  }
  if (secondNum) {
    operate(operatorChoice);
    calcDisplay.textContent = parseFloat(result.toFixed(9));
    firstNum = result;
    secondNum = undefined;
    decimalButton.disabled = false;
  } else {
    secondNum = parseFloat(calcDisplay.textContent);
    operate(operatorChoice);
    calcDisplay.replaceChildren(calcDisplay.textContent = parseFloat(result.toFixed(9)));
    secondNum = undefined;
    operatorChoice = undefined;
    decimalButton.disabled = false;
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
