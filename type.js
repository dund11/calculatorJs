const add = function(num1, num2){
    return num1 + num2;
};

const subtract = function(num1, num2){
    return num1 - num2;
};

const sum = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};

const multiply = function(arr) {
    let total = 1;
    for (let i =0; i < arr.length; i++) {
        total *= arr[i];
    }
    return total;
};

const power = function(base, exponent) {
    return (base ** exponent);
};

const factorial = function(n) {
    let total = 1;
    for (let i = n; i >= 1; i--) {
        total *= i;
    }
    return total;
};

module.exports = {
    add
}