function add(a,b) {
    return a + b ;
}

function subract (a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
//this object is supposed to help take in operator sign, since I can't use eval()
let operators = {
    "+": function(a,b) { return a + b },
    "-": function(a,b) { return a - b },
    "*": function(a,b) { return a * b },
    "/": function(a,b) { return a / b }
}
//Operate needs to take in an operator sign
/* function operate(a,operators,b) {

    switch(operators) {
        case "+":
            return add[a,b];
            break;
        case "-":
            return subract(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
    }
} */

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
} */