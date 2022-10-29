// Object Oriented Programming in Javascript

// This is how you declare classes

class Product {
    model;
    category;
    price;

    constructor(model, category, price) {
        this.model = model;
        this.category = category;

        if(price <= 100)
            throw Error('Price cannot be less than 100cve')
        this.price = price;
    }

    setPrice(price) {
        if(price <= 100)
            throw Error('Price cannot be less than 100cve')
        this.price = price;
    }
}

class Laptop extends Product {
    ram;
    cpu;
    constructor(model, category, price, ram, cpu) {
        super(model, category, price);
        this.ram = ram;
        this.cpu = cpu;
    }

    startOs() {
        
    }
}

class Calculator {
    constructor() {}
    sum(a, b) {
        return a+b;
    }
    subtraction(a, b) {
        return a-b;
    }
}

// This is how you instanciate objects

let laptop = new Product('Asus ZenBook', 'laptop', 5000);
let laptop2 = new Product('Asus ZenBook 2022', 'laptop', 65000);
let tshirt = new Product('Zara T-Shirt', 'tshirt', 500);
let myLaptop = new Laptop('Macbook Pro', 'laptop', 9000, 12000, 8)
let calc = new Calculator();


tshirt.setPrice(555); // call a function from tshirt


console.log(laptop);
console.log(laptop2);
console.log(tshirt);
console.log(calc.sum(10,40)); // call a function from calc