
// This is how you declare functions or methods

function printHello() {
    console.log('Hello! I am a function without parameter.');
}


function sum(a, b) {
    let total = a + b;
    return total;
}

function subtraction(a, b) {
    let total = a - b;
    return total;
}

// This is another way of declaring functions

let sayHello = (name) => {
    console.log('Hello '+name);
}

// This is how you call a function

printHello();
sayHello('Melanie');

sum(9, 5);
sum(10, 2);

subtraction(3,1);
subtraction(4,2);




