console.log('Number exercises');


// Given two numbers and one operator (string value of +,-,*,/)
// calculate the result of the two numbers according to the operator
function simpleCalculation(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2;
    } else if (operator == '-') {
        return num1 - num2;
    } else if (operator == '*') {
        return num1 * num2;
    } else if (operator == '/') {
        return num1 / num2;
    }
}
