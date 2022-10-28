

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

var laptop = new Product('Asus ZenBook', 'laptop', 5000);
var laptop2 = new Product('Asus ZenBook 2022', 'laptop', 65000);
var tshirt = new Product('Zara T-Shirt', 'tshirt', 500);

tshirt.setPrice(555)

var myLaptop = new Laptop('Macbook Pro', 'laptop', 9000, 12000, 8)

var calc = new Calculator();

// console.log(laptop)
// console.log(laptop2)
// console.log(tshirt)
console.log(calc.sum(10,40))