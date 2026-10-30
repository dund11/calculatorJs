const add = function (a,b) {
    return a + b;
};

const subtract = function (a,b) {
    return a - b;
};

const multiply = function (a,b) {
    return a * b;
};

const divide = function (a,b) {
    return a / b;
};

const operate = function (operator, number1, number2){
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
        default:
            return "Invalid operator";}
        
}
console.log(operate("+",10, 5)); 
console.log(operate("-",10, 5));
console.log(operate("*",10, 5));
console.log(operate("/",10, 5));
console.log(operate("%",10, 5));